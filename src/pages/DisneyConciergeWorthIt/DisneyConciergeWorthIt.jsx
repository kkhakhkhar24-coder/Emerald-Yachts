import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Heart, Utensils, Award,
    CircleDollarSign, GraduationCap, Mic, FileText,
    Music, Moon, Minus, Sun, X, Wine, Castle, Film, Theater, Waves,
    Shield, CheckSquare, XCircle, Key, Coffee, Sofa, Bath,
    DoorOpen, ConciergeBell, UsersRound, Armchair,
    TrendingUp,
    Info,
    AlertCircle
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/DisneyConciergeWorthIt/Hero_1.webp'
// import hero2 from '../../assets/DisneyConciergeWorthIt/Hero_2.jpg'
// import hero3 from '../../assets/DisneyConciergeWorthIt/Hero_3.webp'
// import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'
// import Image1 from '../../assets/DisneyConciergeWorthIt/ConciergeLounge.jpg'
// import Image2 from '../../assets/DisneyConciergeWorthIt/PriorityBoarding.jpg'
// import Image3 from '../../assets/DisneyConciergeWorthIt/ConciergeSuite.jpg'
// import Image4 from '../../assets/DisneyConciergeWorthIt/SunDeck.jpg'
// import Image5 from '../../assets/DisneyConciergeWorthIt/ConciergeService.jpg'
// import Image6 from '../../assets/DisneyConciergeWorthIt/RoyalSuite.jpg'
// import Video1 from '../../assets/DisneyConciergeWorthIt/Video1.mp4'
// import Video2 from '../../assets/DisneyConciergeWorthIt/Video2.mp4'
// import Video3 from '../../assets/DisneyConciergeWorthIt/Video3.mp4'
// import AH1 from '../../assets/DisneyConciergeWorthIt/AH1.jpg'
// import AH2 from '../../assets/DisneyConciergeWorthIt/AH2.jpg'
// import AH3 from '../../assets/DisneyConciergeWorthIt/AH3.jpg'
// import AH4 from '../../assets/DisneyConciergeWorthIt/AH4.jpg'
// import AH5 from '../../assets/DisneyConciergeWorthIt/AH5.jpg'


function DisneyConciergeWorthIt() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobileViewport(window.innerWidth < 992)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const disneyConciergeFaqs = [
        { question: "What is Disney Concierge Level?", answer: "Disney Concierge Level is Disney Cruise Line's premium accommodation category that includes exclusive services, lounges, priority access, and enhanced guest support." },
        { question: "Is Disney Concierge worth the money?", answer: "For travelers who value convenience, priority access, and personalized service, Concierge can provide significant value." },
        { question: "What is the biggest benefit of Concierge?", answer: "Many guests consider early booking access and dedicated concierge service the most valuable perks." },
        { question: "Does Concierge include free alcohol?", answer: "Policies vary, but Concierge Lounges typically offer complimentary beverages and refreshments throughout the day." },
        { question: "Can Concierge guests board first?", answer: "Yes. Concierge guests generally receive priority embarkation." },
        { question: "Is Concierge worth it for Alaska cruises?", answer: "Many travelers find Concierge especially valuable on bucket-list itineraries such as Alaska." },
        { question: "Does Concierge help with dining reservations?", answer: "Yes. Concierge staff assist with securing dining reservations and special requests." },
        { question: "Is Concierge worth it for families?", answer: "Families often appreciate the convenience, lounge access, and personalized support." },
        { question: "Are Concierge staterooms larger?", answer: "Yes. Many Concierge accommodations offer significantly more space than standard staterooms." },
        { question: "Is Concierge worth it on a 3-night cruise?", answer: "It depends. Some guests prefer longer cruises to fully enjoy the benefits." },
        { question: "What is the Concierge Lounge?", answer: "A private area available exclusively to Concierge guests featuring refreshments, seating, and concierge assistance." },
        { question: "Can Concierge help with shore excursions?", answer: "Yes. Concierge teams can assist with planning and booking port adventures." },
        { question: "Is Concierge available on every Disney ship?", answer: "Yes, though benefits and accommodations vary slightly by ship." },
        { question: "Should first-time Disney cruisers choose Concierge?", answer: "Many first-time guests enjoy the stress-free experience and personalized assistance." }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"] },
            { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in Disney Cruise Line Concierge Level planning, VIP cruise experiences, and premium family vacations." },
            { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
            { "@type": "WebPage", "name": "Is Disney Concierge Worth It?", "url": "https://www.tripsandships.com/is-disney-concierge-worth-it", "description": "Complete guide to Disney Cruise Concierge Level. Learn about perks, priority booking, exclusive lounges, and whether the upgrade is worth the cost." },
            {
                "@type": "BreadcrumbList", "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Is Disney Concierge Worth It?", "item": "https://www.tripsandships.com/is-disney-concierge-worth-it" }
                ]
            },
            { "@type": "FAQPage", "mainEntity": disneyConciergeFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Is Disney Concierge Worth It? Disney Cruise Concierge Level Review</title>
                <meta name="title" content="Is Disney Concierge Worth the Cost? Complete Concierge Level Guide" />
                <meta name="description" content="Wondering if Disney Cruise Concierge is worth it? Learn about Concierge Level perks, priority booking, exclusive lounges, concierge service, and whether the upgrade makes sense for your cruise." />
                <meta name="keywords" content="Is Disney Concierge Worth It, Disney Cruise Concierge Level, Disney Concierge Review, Disney Cruise Concierge Benefits, Disney Concierge Lounge, Disney Cruise VIP Experience, Is Disney Cruise Concierge worth the money, Disney Concierge Level benefits, Disney Cruise Concierge review, Disney Concierge vs standard stateroom, Should I upgrade to Disney Concierge" />
                <link rel="canonical" href="https://www.tripsandships.com/is-disney-concierge-worth-it" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div key={idx} className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: window.innerWidth <= 768 ? '70vh' : '85vh',
                    padding: window.innerWidth <= 360 ? '20px 16px' : '40px 20px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <div className="medi-hero-eyebrow-tag" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px',
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '60px',
                        color: '#ffffff',
                        fontSize: window.innerWidth <= 360 ? '10px' : '12px',
                        fontWeight: '700',
                        letterSpacing: window.innerWidth <= 360 ? '1.5px' : '2px',
                        textTransform: 'uppercase',
                        marginBottom: window.innerWidth <= 768 ? '20px' : '30px',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                    }}>
                        <Crown size={window.innerWidth <= 360 ? 13 : 16} style={{ color: '#60a5fa' }} />
                        <span style={{
                            display: window.innerWidth <= 480 ? '-webkit-box' : 'inline',
                            WebkitLineClamp: window.innerWidth <= 480 ? 2 : 'unset',
                            WebkitBoxOrient: 'vertical',
                            overflow: window.innerWidth <= 480 ? 'hidden' : 'visible',
                            lineHeight: '1.4'
                        }}>VIP Experience, Priority Access & Exclusive Lounges</span>
                    </div>

                    <h1 className="medi-hero-main-title" style={{
                        color: '#ffffff',
                        fontSize: window.innerWidth <= 360 ? 'clamp(28px, 8vw, 40px)' : 'clamp(38px, 7vw, 72px)',
                        fontWeight: '800',
                        lineHeight: window.innerWidth <= 768 ? '1.1' : '1.0',
                        letterSpacing: window.innerWidth <= 768 ? '-0.01em' : '-0.03em',
                        margin: '0',
                        maxWidth: '900px',
                        textShadow: '0 4px 30px rgba(0,0,0,0.4)'
                    }}>
                        Is Disney Concierge<br />Worth It?
                    </h1>

                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: window.innerWidth <= 360 ? '15px' : window.innerWidth <= 768 ? '16px' : 'clamp(17px, 2.5vw, 20px)',
                        maxWidth: window.innerWidth <= 768 ? '90%' : '700px',
                        width: '100%',
                        margin: window.innerWidth <= 768 ? '16px auto 0' : '24px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        A complete guide to Disney Cruise Line Concierge Level perks, pricing, and whether the upgrade makes sense for your cruise.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO: CONCIERGE LEVEL ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>{`
                    .medi-immersion-card-item:hover {
                        transform: translateY(-5px);
                        border-color: #3b82f6 !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.05);
                    }
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
                    
                    @media (max-width: 1024px) {
                        .dc-intro-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
                    }
                `}</style>

                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>

                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid dc-intro-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr',
                        gap: '60px',
                        alignItems: 'start'
                    }}>

                        {/* LEFT COLUMN: Editorial Content */}
                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '680px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '24px',
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: '700',
                                color: '#274472',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '12px'
                            }}>Complete Guide</span>

                            <h2 style={{
                                color: '#274472',
                                fontSize: 'clamp(30px, 5vw, 48px)',
                                lineHeight: '1.15',
                                margin: '0 0 20px 0',
                                fontWeight: '800',
                                letterSpacing: '-0.02em'
                            }}>What Is Disney Cruise<br />Concierge Level?</h2>

                            <div style={{
                                width: '80px',
                                height: '4px',
                                background: '#3b82f6',
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px',
                                borderRadius: '10px'
                            }}></div>

                            <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                                <p style={{ marginBottom: '24px' }}>
                                    For many Disney Cruise Line guests, <strong>Concierge Level</strong> represents the ultimate Disney cruise experience.
                                </p>
                                <p style={{ marginBottom: '24px' }}>
                                    From priority boarding and exclusive lounges to personalized concierge services and luxury accommodations, Concierge Level offers benefits designed to make your vacation smoother, more comfortable, and more exclusive.
                                </p>
                                <p style={{ marginBottom: '40px' }}>
                                    But Concierge accommodations often cost significantly more than standard staterooms. So the question becomes: <strong>Is Disney Concierge actually worth the extra money?</strong> The answer depends on your travel style, budget, and how much you value convenience, exclusivity, and premium service.
                                </p>
                            </div>

                            <div style={{ width: '100%' }}>
                                <p style={{
                                    fontSize: '17px',
                                    color: '#1e293b',
                                    marginBottom: '24px',
                                    fontWeight: '700',
                                    textAlign: window.innerWidth <= 1024 ? 'center' : 'left'
                                }}>
                                    The Concierge Advantage:
                                </p>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 550 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '16px',
                                    width: '100%'
                                }}>
                                    {[
                                        { t: "Priority Access", i: <Key size={20} /> },
                                        { t: "Personalized Service", i: <Award size={20} /> },
                                        { t: "Exclusive Spaces", i: <DoorOpen size={20} /> },
                                        { t: "Luxury Accommodations", i: <Sofa size={20} /> },
                                        { t: "Enhanced Planning", i: <Calendar size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px',
                                            padding: '16px',
                                            backgroundColor: '#f8fafc',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div className="medi-immersion-icon-box" style={{
                                                width: '44px',
                                                height: '44px',
                                                borderRadius: '12px',
                                                border: '1px solid #e2e8f0',
                                                backgroundColor: '#ffffff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#3b82f6',
                                                transition: 'all 0.3s ease',
                                                flexShrink: 0
                                            }}>{item.i}</div>
                                            <span style={{ color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Expert Signature Panel */}
                        <div className="medi-premium-signature-panel" style={{
                            marginTop: '0',
                            borderLeft: '4px solid #274472',
                            position: isMobileViewport ? 'relative' : 'sticky',
                            top: '100px'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CONCIERGE EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                                    At Trips & Ships Luxury Travel, we help travelers determine whether the Concierge upgrade aligns with their vacation goals and budget.
                                </p>
                                <div className="medi-premium-expert-quote-box" style={{ background: 'rgba(39, 68, 114, 0.03)', borderRadius: '15px', padding: '20px' }}>
                                    <span className="medi-quote-mark" style={{ color: '#274472', fontSize: '32px', lineHeight: '1', display: 'block' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>
                                        With more than 40 years in the industry, Angela Hughes provides honest guidance on whether Disney Concierge is the right investment for your family.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT BENEFITS ARE INCLUDED ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 100px) 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif', overflow: 'hidden' }}>
                <style>{`
          .ben-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 280px; gap: 20px; max-width: 1200px; margin: 0 auto; }
          .ben-item { position: relative; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background-color: #1e293b; }
          .ben-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s ease; }
          .ben-item:hover img { transform: scale(1.1); }
          .ben-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 28, 46, 0.95) 0%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; color: #fff; }
          .ben-title { font-size: 14px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #3b82f6; margin-bottom: 8px; }
          .ben-desc { font-size: 14px; color: #cbd5e1; line-height: 1.5; }
          .ben-large { grid-column: span 2; grid-row: span 1; }
          @media (max-width: 900px) { .ben-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; } .ben-large { grid-column: span 2; } }
          @media (max-width: 600px) { .ben-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; } .ben-item { grid-column: span 1 !important; grid-row: span 1 !important; } }
        `}</style>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>Exclusive Perks</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px' }}>What Benefits Are Included with Disney Concierge?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div className="ben-grid">
                        <div className="ben-item ben-large">
                            <img src='' alt="Concierge Lounge" />
                            <div className="ben-overlay">
                                <span className="ben-title">Concierge Lounge Access</span>
                                <p className="ben-desc">Complimentary snacks, specialty coffee, soft drinks, dedicated concierge staff, comfortable seating, and private relaxation space. Many guests use the lounge multiple times per day.</p>
                            </div>
                        </div>
                        <div className="ben-item">
                            <img src='' alt="Priority Boarding" />
                            <div className="ben-overlay">
                                <span className="ben-title">Priority Boarding</span>
                                <p className="ben-desc">Less waiting, earlier access to the ship, more time to explore, and a faster start to your vacation.</p>
                            </div>
                        </div>
                        <div className="ben-item">
                            <img src='' alt="Concierge Service" />
                            <div className="ben-overlay">
                                <span className="ben-title">Dedicated Concierge Team</span>
                                <p className="ben-desc">Assistance with dining reservations, spa bookings, shore excursions, special requests, and celebration planning.</p>
                            </div>
                        </div>
                        <div className="ben-item">
                            <img src='' alt="Exclusive Sun Deck" />
                            <div className="ben-overlay">
                                <span className="ben-title">Exclusive Sun Deck</span>
                                <p className="ben-desc">Additional seating, less crowded spaces, premium views, and a relaxing atmosphere—especially valuable during sea days.</p>
                            </div>
                        </div>
                        <div className="ben-item">
                            <img src='' alt="Priority Tendering" />
                            <div className="ben-overlay">
                                <span className="ben-title">Priority Tendering</span>
                                <p className="ben-desc">Faster arrival at destinations and reduced waiting times at ports requiring tender transportation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRIORITY ACTIVITY BOOKING: LUXURY REDESIGN ═══════════════ */}
            <section className="medi-priority-booking-section" style={{
                padding: 'clamp(60px, 10vw, 110px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block based on Reference Page style */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: '#274472',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            borderLeft: '2px solid #274472',
                            paddingLeft: '12px'
                        }}>Valuable Advantage</span>

                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 44px)',
                            color: "#274472",
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>Priority Activity Booking</h2>

                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: '#3b82f6',
                            margin: '0 auto',
                            borderRadius: '10px'
                        }}></div>

                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '850px',
                            margin: '30px auto 0',
                            lineHeight: '1.7'
                        }}>
                            Disney cruises are known for high-demand experiences that sell out in minutes. Concierge guests enjoy the industry's most significant head start, ensuring you never miss a moment of the magic.
                        </p>
                    </div>

                    {/* Feature Grid based on "Immersion List" pattern */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : window.innerWidth <= 992 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: '24px',
                        marginBottom: '60px'
                    }}>
                        {[
                            { t: "Port Adventures", d: "Secure the most sought-after shore excursions before the general public.", i: <Compass size={22} /> },
                            { t: "Adult Dining", d: "Guarantee your preferred time at Palo, Remy, and Enchanté.", i: <Utensils size={22} /> },
                            { t: "Spa Treatments", d: "Advanced access to the Senses Spa and private treatment villas.", i: <Sparkles size={22} /> },
                            { t: "Character Experiences", d: "Priority booking for limited-capacity meet-and-greets.", i: <Star size={22} /> },
                            { t: "Special Activities", d: "Early access to beverage tastings, Royal Tea, and exclusive events.", i: <Calendar size={22} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="medi-immersion-card-item" style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '18px',
                                padding: '24px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease',
                                height: '100%'
                            }}>
                                <div className="medi-immersion-icon-box" style={{
                                    width: '48px',
                                    height: '48px',
                                    minWidth: '48px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#3b82f6',
                                    flexShrink: 0
                                }}>{item.i}</div>
                                <div>
                                    <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '8px', margin: '0 0 8px 0' }}>{item.t}</h4>
                                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Authority Callout based on "Comparison Insight" pattern */}
                    <div style={{
                        marginTop: '40px',
                        padding: '35px',
                        backgroundColor: '#0f1c2e',
                        borderRadius: '24px',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)',
                        borderLeft: '6px solid #3b82f6',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <p style={{
                            fontSize: 'clamp(18px, 3vw, 22px)',
                            color: '#ffffff',
                            margin: 0,
                            fontWeight: '700',
                            lineHeight: '1.4',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            "This benefit alone can be extremely valuable on highly sought-after itineraries, often justifying the Concierge investment for many of our clients."
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CONCIERGE ACCOMMODATIONS & EXCLUSIVE PERKS ═══════════════ */}
            <section className="medi-concierge-luxury-section" style={{
                padding: 'clamp(70px, 10vw, 120px) 0',
                backgroundColor: '#dce6f5', // Light Navy Blue Background
                fontFamily: 'sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <style>{`
        .concierge-light-glass { 
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(39, 68, 114, 0.2);
            backdrop-filter: blur(10px);
        }
        .concierge-light-glass:hover { 
            transform: translateY(-8px); 
            border-color: #274472; 
            background: rgba(255, 255, 255, 0.85);
            box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15);
        }
        .concierge-premium-card {
            transition: all 0.4s ease;
            background: #ffffff;
            border-radius: 30px;
            padding: 45px 35px;
            text-align: center;
            border: 1px solid #e2e8f0;
        }
        .concierge-premium-card:hover {
            transform: scale(1.03);
            box-shadow: 0 25px 60px rgba(39, 68, 114, 0.15);
            border-color: #274472;
        }
    `}</style>

                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)' }}>

                    {/* SECTION HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472',
                            letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px',
                            borderLeft: '3px solid #274472', paddingLeft: '12px'
                        }}>Concierge Experience</span>

                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '900',
                            marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: '1.1'
                        }}>Staterooms & Exclusive Perks</h2>

                        <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '850px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            A Disney Concierge stay represents the highest tier of nautical luxury, designed for those who prioritize absolute convenience.
                        </p>
                    </div>

                    {/* TOP ROW: EXCLUSIVE PERKS (FROSTED LIGHT NAVY CARDS) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '30px',
                        marginBottom: '60px'
                    }}>
                        {/* Priority Tendering */}
                        <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                                <div style={{
                                    color: '#ffffff', backgroundColor: '#274472',
                                    padding: '14px', borderRadius: '15px', display: 'flex'
                                }}>
                                    <Anchor size={28} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Priority Tendering</h3>
                            </div>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: 0 }}>
                                Receive expedited access at ports requiring tender transportation. Skip the lines and be among the first to explore every destination on your itinerary.
                            </p>
                        </div>

                        {/* Exclusive Sun Deck */}
                        <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                                <div style={{
                                    color: '#ffffff', backgroundColor: '#274472',
                                    padding: '14px', borderRadius: '15px', display: 'flex'
                                }}>
                                    <Sun size={28} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Exclusive Sun Deck</h3>
                            </div>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: 0 }}>
                                A private deck reserved solely for Concierge guests. Enjoy plush lounge seating, dedicated service, and breathtaking panoramic ocean views.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM ROW: ACCOMMODATIONS GRID (WHITE CARDS FOR HIGH READABILITY) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 650 ? '1fr' : window.innerWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: '24px'
                    }}>
                        {[
                            {
                                t: "Family Verandah Staterooms",
                                d: "The ideal balance of luxury and value, offering the full range of Concierge services in a stateroom designed for family comfort.",
                                i: <DoorOpen size={24} />
                            },
                            {
                                t: "One-Bedroom Concierge Suites",
                                d: "Expansive suites featuring a separate master bedroom, living area, and dining table—the perfect choice for those seeking extra privacy.",
                                i: <Sofa size={24} />
                            },
                            {
                                t: "The Royal Suites",
                                d: "The most luxurious accommodations in the fleet. Large verandas, multiple bathrooms, and high-end finishes throughout every room.",
                                i: <Crown size={24} />
                            }
                        ].map((suite, idx) => (
                            <div key={idx} className="concierge-premium-card">
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '16px',
                                    backgroundColor: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px', color: '#274472'
                                }}>{suite.i}</div>
                                <h4 style={{ color: '#1e293b', fontSize: '20px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>{suite.t}</h4>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{suite.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* EXPERT TIP - CLEAN BORDERED FOOTER */}
                    <div style={{
                        marginTop: '50px', padding: '30px', backgroundColor: 'rgba(39, 68, 114, 0.08)', borderRadius: '25px',
                        border: '1px solid rgba(39, 68, 114, 0.2)', textAlign: 'center', display: 'flex',
                        flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
                        alignItems: 'center', justifyContent: 'center', gap: '20px'
                    }}>
                        <Ship size={24} style={{ color: '#274472' }} />
                        <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: '700', margin: 0 }}>
                            Planning Note: <span style={{ fontWeight: '400', color: '#475569' }}>Concierge inventory is limited. For the best selection, we recommend booking as soon as itineraries are released—often 15+ months in advance.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT DOES CONCIERGE COST: INVESTMENT ANALYSIS ═══════════════ */}
            <section className="medi-concierge-cost-section" style={{
                padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0f172a', // Rich Nautical Slate
                fontFamily: 'sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <style>{`
        .cost-factor-pill {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(56, 189, 248, 0.2);
            padding: 15px 20px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
        }
        .cost-factor-pill:hover {
            background: rgba(56, 189, 248, 0.1);
            border-color: #38bdf8;
            transform: translateY(-3px);
        }
        .cost-bracket-card {
            background: linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 40px;
            text-align: center;
            flex: 1;
            min-width: 280px;
            transition: all 0.4s ease;
        }
        .cost-bracket-card:hover {
            border-color: #38bdf8;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
    `}</style>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#38bdf8',
                            fontWeight: '800',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>Financial Planning</span>
                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 46px)',
                            color: '#ffffff',
                            fontWeight: '900',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>What Does Disney Concierge Cost?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#cbd5e1',
                            maxWidth: '750px',
                            margin: '30px auto 0',
                            lineHeight: '1.6'
                        }}>
                            The premium for Concierge Level is dynamic, determined by a complex set of variables across the Disney fleet.
                        </p>
                    </div>

                    {/* Factors Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '15px',
                        marginBottom: '50px'
                    }}>
                        {[
                            { t: "Ship Class", i: <Ship size={18} /> },
                            { t: "Itinerary", i: <MapPin size={18} /> },
                            { t: "Sailing Date", i: <Calendar size={18} /> },
                            { t: "Cabin Category", i: <DoorOpen size={18} /> },
                            { t: "Market Demand", i: <TrendingUp size={18} /> }
                        ].map((factor, i) => (
                            <div key={i} className="cost-factor-pill">
                                <div style={{ color: '#38bdf8' }}>{factor.i}</div>
                                <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '700', letterSpacing: '0.5px' }}>{factor.t}</span>
                            </div>
                        ))}
                    </div>

                    {/* Cost Brackets Section */}
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        borderRadius: '40px',
                        padding: 'clamp(30px, 5vw, 60px)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative'
                    }}>
                        <h3 style={{
                            fontSize: '20px',
                            color: '#ffffff',
                            fontWeight: '800',
                            textAlign: 'center',
                            marginBottom: '40px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>Typical Investment Range</h3>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '25px',
                            marginBottom: '40px'
                        }}>
                            <div className="cost-bracket-card">
                                <div style={{ color: '#38bdf8', marginBottom: '15px' }}><CircleDollarSign size={40} /></div>
                                <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>Hundreds More</h4>
                                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>Additional cost per guest for standard Concierge Staterooms.</p>
                            </div>
                            <div className="cost-bracket-card" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                                <div style={{ color: '#38bdf8', marginBottom: '15px' }}><TrendingUp size={40} /></div>
                                <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>Thousands More</h4>
                                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>Premium increase for 1-Bedroom, Royal, and Tower Suites.</p>
                            </div>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <p style={{
                                fontSize: '17px',
                                color: '#38bdf8',
                                lineHeight: '1.7',
                                fontStyle: 'italic',
                                margin: 0,
                                fontWeight: '600'
                            }}>
                                "This price differential is the primary catalyst for the most common question we hear: Is Concierge worth the investment?"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE FINAL ANALYSIS: CONCIERGE WORTH IT VS NOT (FIXED VISIBILITY) ═══════════════ */}
            <section className="medi-audience-section" style={{
                padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#f8fafc', // Light Neutral Background for the section
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#38bdf8', fontWeight: '800', fontSize: '13px',
                            textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px'
                        }}>Selection Guide</span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472",
                            fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1
                        }}>Is Disney Concierge Worth the Investment?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}>

                        {/* LEFT COLUMN: THE PREMIUM INVESTMENT (WORTH IT) */}
                        <div style={{
                            backgroundColor: '#1e293b', // Light Navy Card
                            padding: 'clamp(35px, 6vw, 60px)',
                            borderRadius: '30px',
                            color: '#ffffff',
                            boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)',
                            border: '1px solid rgba(56, 189, 248, 0.3)' // Glowing border for definition
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                                <div style={{ backgroundColor: '#38bdf8', padding: '12px', borderRadius: '14px', display: 'flex', color: '#ffffff' }}>
                                    <CheckCircle size={26} />
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: '#ffffff' }}>Absolutely Worth It</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '35px' }}>
                                {[
                                    {
                                        t: "You Value Absolute Convenience",
                                        d: "If avoiding lines and planning stress is your priority, Concierge handles every detail and reservation.",
                                        i: <Clock size={20} />
                                    },
                                    {
                                        t: "Peak Season Sailings",
                                        d: "During holidays and summer, priority booking for sell-out activities becomes an essential advantage.",
                                        i: <Calendar size={20} />
                                    },
                                    {
                                        t: "Celebrating Milestone Occasions",
                                        d: "Elevate honeymoons, anniversaries, and multi-generational reunions with an extra layer of VIP service.",
                                        i: <Gem size={20} />
                                    },
                                    {
                                        t: "You Love Premium Experiences",
                                        d: "Travelers accustomed to 5-star luxury hotels find that Concierge level matches their expected standard of travel.",
                                        i: <Crown size={20} />
                                    },
                                    {
                                        t: "Bucket-List Itineraries",
                                        d: "Maximize your experience on once-in-a-lifetime voyages like Alaska, the Mediterranean, or the Panama Canal.",
                                        i: <Compass size={20} />
                                    }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}>{item.i}</div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>{item.t}</h4>
                                            <p style={{ fontSize: '15px', color: '#f1f5f9', lineHeight: '1.6', margin: 0, opacity: 1 }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: THE ALTERNATIVE CHOICE (NOT WORTH IT) */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: 'clamp(35px, 6vw, 60px)',
                            borderRadius: '30px',
                            border: '1px solid #e2e8f0',
                            color: '#0f172a',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', color: '#64748b' }}>
                                    <X size={26} />
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>May Not Be Worth It</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '35px', flexGrow: 1 }}>
                                {[
                                    {
                                        t: "You're Rarely in Your Cabin",
                                        d: "If you spend all day exploring the ship and ports, the physical suite amenities may be underutilized.",
                                        i: <Ship size={20} />
                                    },
                                    {
                                        t: "You're Focused on Maximum Budget",
                                        d: "Substantial savings can be reallocated to private shore excursions, upgraded airfare, or future cruises.",
                                        i: <CircleDollarSign size={20} />
                                    },
                                    {
                                        t: "You're Comfortable Planning Yourself",
                                        d: "Experienced Disney cruisers often know exactly how to manage their own schedules and reservations.",
                                        i: <FileText size={20} />
                                    },
                                    {
                                        t: "Short Duration Cruises",
                                        d: "On 3 or 4-night sailings, there is often not enough time on board to fully justify the premium cost.",
                                        i: <Clock size={20} />
                                    }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#94a3b8', marginTop: '4px', flexShrink: 0 }}>{item.i}</div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>{item.t}</h4>
                                            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Expert Advisory Note */}
                            <div style={{
                                marginTop: '50px',
                                padding: '30px',
                                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                borderRadius: '24px',
                                borderLeft: '5px solid #38bdf8'
                            }}>
                                <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: '700', margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
                                    "We often help clients find better ROI by spending the concierge premium on a private guide in Rome or a helicopter tour in Alaska instead."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════ CONCIERGE VS STANDARD COMPARISON ═══════════════ */}
            <section className="dc-comparison-section" style={{
                padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#1e293b', // Light Navy Background
                fontFamily: 'sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1150px', margin: '0 auto' }}>

                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#38bdf8', fontWeight: '800', fontSize: '13px',
                            textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px'
                        }}>Side-by-Side Analysis</span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 44px)', color: "#ffffff",
                            fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1
                        }}>Concierge Level vs Standard Stateroom</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch'
                    }}>

                        {/* CONCIERGE LEVEL - THE PREMIUM CHOICE */}
                        <div style={{
                            backgroundColor: '#0f172a', // Deeper navy for definition
                            borderRadius: '30px',
                            padding: 'clamp(30px, 5vw, 50px)',
                            border: '2px solid #38bdf8',
                            boxShadow: '0 20px 50px rgba(56, 189, 248, 0.15)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute', top: '20px', right: '30px',
                                backgroundColor: '#38bdf8', color: '#0f172a',
                                fontSize: '10px', fontWeight: '900', padding: '4px 12px',
                                borderRadius: '100px', textTransform: 'uppercase'
                            }}>Elite Choice</div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    backgroundColor: '#38bdf8', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Crown size={24} color="#ffffff" />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Concierge Level</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '12px' }}>
                                {[
                                    { l: "Boarding", v: "Priority boarding" },
                                    { l: "Lounge", v: "Concierge lounge access" },
                                    { l: "Service", v: "Dedicated concierge staff" },
                                    { l: "Reservations", v: "Priority booking windows" },
                                    { l: "Sun Deck", v: "Exclusive sun deck access" },
                                    { l: "Accommodations", v: "Luxury accommodations" },
                                    { l: "Cost", v: "Higher investment" }
                                ].map((row, i) => (
                                    <div key={i} style={{
                                        padding: '16px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                                        <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600' }}>{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STANDARD STATEROOM - THE VALUE CHOICE */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '30px',
                            padding: 'clamp(30px, 5vw, 50px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Ship size={24} color="#94a3b8" />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Standard Stateroom</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '12px', flexGrow: 1 }}>
                                {[
                                    { l: "Boarding", v: "Standard boarding" },
                                    { l: "Lounge", v: "No lounge access" },
                                    { l: "Service", v: "Guest services only" },
                                    { l: "Reservations", v: "Standard booking windows" },
                                    { l: "Sun Deck", v: "Public deck access" },
                                    { l: "Accommodations", v: "Standard accommodations" },
                                    { l: "Cost", v: "More affordable" }
                                ].map((row, i) => (
                                    <div key={i} style={{
                                        padding: '16px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                                        <span style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '500' }}>{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CALLOUT */}
                    <div style={{
                        marginTop: '50px',
                        padding: '30px',
                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, transparent 100%)',
                        borderRadius: '24px',
                        borderLeft: '5px solid #38bdf8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div style={{ color: '#38bdf8' }}><Info size={28} /></div>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.6', margin: 0 }}>
                            <strong style={{ color: '#ffffff' }}>The Final Verdict:</strong> The best choice depends on how much value you place on convenience and exclusivity. For high-demand sailings, the concierge priority often pays for itself in time saved.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>Concierge Experience</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px' }}>See the Concierge Difference</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>Take a tour of the exclusive spaces, suites, and services that define the Disney Concierge experience.</p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(15, 28, 46, 0.15)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/" title="Disney Concierge Experience" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ GUEST EXPERIENCE AUDIT: SIMPLE & CLEAN ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#1e293b', // Light Navy Background
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Simple Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            color: "#ffffff",
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                            marginBottom: '15px'
                        }}>
                            The Concierge Experience Audit
                        </h2>
                        <p style={{ color: '#38bdf8', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Pros vs. Considerations
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '60px',
                        position: 'relative'
                    }}>

                        {/* Vertical Divider (Desktop Only) */}
                        {window.innerWidth > 768 && (
                            <div style={{
                                position: 'absolute', left: '50%', top: '0', bottom: '0',
                                width: '1px', background: 'rgba(255,255,255,0.1)'
                            }}></div>
                        )}

                        {/* LEFT COLUMN: WHAT GUESTS LOVE */}
                        <div style={{ paddingRight: window.innerWidth > 768 ? '20px' : '0' }}>
                            <h3 style={{
                                fontSize: '22px', fontWeight: '800', color: '#ffffff',
                                marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '12px'
                            }}>
                                <Heart size={22} style={{ color: '#38bdf8' }} /> What Guests Love Most
                            </h3>

                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { t: "Personalized Service", d: "Having a dedicated team available throughout the cruise." },
                                    { t: "Stress-Free Planning", d: "Reservations and logistics become much easier." },
                                    { t: "Exclusive Spaces", d: "Less crowded environments enhance relaxation." },
                                    { t: "Early Booking Access", d: "Securing highly desired activities before they fill." },
                                    { t: "VIP Treatment", d: "Many guests appreciate the elevated level of service." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#38bdf8', marginBottom: '5px' }}>{item.t}</h4>
                                        <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CONSIDERATIONS */}
                        <div style={{ paddingLeft: window.innerWidth > 768 ? '20px' : '0' }}>
                            <h3 style={{
                                fontSize: '22px', fontWeight: '800', color: '#ffffff',
                                marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '12px'
                            }}>
                                <Info size={22} style={{ color: '#94a3b8' }} /> Important Considerations
                            </h3>

                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { t: "High Entry Cost", d: "The premium price can be difficult to justify for some." },
                                    { t: "Diminishing Returns", d: "Experienced cruisers may find they can navigate the system alone." },
                                    { t: "Limited Use of Perks", d: "Guests rarely in their cabin may not fully utilize the benefits." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#cbd5e1', marginBottom: '5px' }}>{item.t}</h4>
                                        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Simple Callout */}
                            <div style={{
                                marginTop: '50px',
                                padding: '25px',
                                border: '1px solid rgba(56, 189, 248, 0.2)',
                                borderRadius: '15px'
                            }}>
                                <p style={{ fontSize: '14px', color: '#cbd5e1', fontStyle: 'italic', margin: 0, lineHeight: '1.5' }}>
                                    <strong style={{ color: '#38bdf8' }}>Expert Tip:</strong> "Some travelers find better value spending the concierge premium on private tours or future sailings."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST FOR / NOT FOR: SIMPLE LIGHT NAVY ═══════════════ */}
            <section style={{
                padding: 'clamp(70px, 10vw, 110px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#dce6f5', // Light Navy Blue Background
                fontFamily: 'sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#274472',
                            fontWeight: '800',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '12px'
                        }}>
                            Suitability Guide
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 44px)',
                            color: "#274472",
                            fontWeight: '900',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}>
                            Is Concierge the Right Fit?
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: '#274472',
                            margin: '24px auto 0',
                            borderRadius: '10px'
                        }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr',
                        gap: window.innerWidth <= 850 ? '50px' : '80px',
                        position: 'relative'
                    }}>

                        {/* Vertical Divider (Desktop Only) */}
                        {window.innerWidth > 850 && (
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                bottom: '0',
                                width: '1px',
                                background: 'linear-gradient(to bottom, transparent, rgba(39,68,114,0.15) 20%, rgba(39,68,114,0.15) 80%, transparent)'
                            }}></div>
                        )}

                        {/* LEFT COLUMN: BEST FOR */}
                        <div style={{ paddingRight: window.innerWidth > 850 ? '40px' : '0' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '800',
                                color: '#1e293b',
                                marginBottom: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            }}>
                                <div style={{ backgroundColor: 'rgba(39, 68, 114, 0.1)', padding: '8px', borderRadius: '10px', display: 'flex' }}>
                                    <CheckCircle size={22} style={{ color: '#274472' }} />
                                </div>
                                Best For
                            </h3>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    "First-time Disney cruisers wanting VIP service",
                                    "Luxury travelers accustomed to 5-star service",
                                    "Families celebrating milestones & reunions",
                                    "Honeymooners seeking added romance",
                                    "Multi-generational travel groups",
                                    "Alaska and European cruise itineraries",
                                    "Guests who prioritize stress-free planning"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                        <div style={{
                                            width: '6px', height: '6px', borderRadius: '50%',
                                            backgroundColor: '#274472', marginTop: '10px', flexShrink: 0
                                        }}></div>
                                        <span style={{ fontSize: '17px', fontWeight: '600', color: '#1e293b', lineHeight: '1.5' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: MAY NOT BE BEST FOR */}
                        <div style={{ paddingLeft: window.innerWidth > 850 ? '40px' : '0' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '800',
                                color: '#1e293b',
                                marginBottom: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            }}>
                                <div style={{ backgroundColor: 'rgba(39, 68, 114, 0.05)', padding: '8px', borderRadius: '10px', border: '1px solid rgba(39, 68, 114, 0.15)', display: 'flex' }}>
                                    <XCircle size={22} style={{ color: '#64748b' }} />
                                </div>
                                May Not Be Best For
                            </h3>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    "Budget-conscious travelers",
                                    "Short duration cruise itineraries",
                                    "Guests who spend minimal time in their cabin",
                                    "Travelers focused solely on port destinations",
                                    "Frequent cruisers comfortable booking independently"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                        <div style={{
                                            width: '6px', height: '6px', borderRadius: '50%',
                                            backgroundColor: 'rgba(39, 68, 114, 0.3)', marginTop: '10px', flexShrink: 0
                                        }}></div>
                                        <span style={{ fontSize: '17px', fontWeight: '500', color: '#475569', lineHeight: '1.5' }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Final Callout Note */}
                            <div style={{
                                marginTop: '50px',
                                padding: '25px',
                                backgroundColor: 'rgba(39, 68, 114, 0.08)',
                                borderRadius: '20px',
                                border: '1px solid rgba(39, 68, 114, 0.2)'
                            }}>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                    <strong style={{ color: '#1e293b', display: 'block', marginBottom: '5px' }}>Expert Note:</strong>
                                    While Concierge is a premium investment, many guests find that the time saved and the peace of mind provided are worth every penny.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ANGELA HUGHES AUTHORITY ═══════════════ */}
            <section className="medi-authority-section">
                <style>{`
          @keyframes prestige-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes prestige-reverse-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
          .medi-prestige-seal-ring { animation: prestige-spin 25s linear infinite; border: 2px dashed rgba(255,255,255,0.4) !important; display: flex; align-items: center; justify-content: center; }
          .medi-prestige-static-img { animation: prestige-reverse-spin 25s linear infinite; }
        `}</style>
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>When deciding whether to invest in Disney Concierge, having an advisor who understands the true value of the upgrade is essential.</p>
                    </div>
                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src='' alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>
                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" }
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
                    <div style={{ marginTop: window.innerWidth <= 360 ? '30px' : '50px', padding: window.innerWidth <= 360 ? '20px 14px' : '35px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>"Angela and her team help you determine if the Concierge investment aligns with your vacation goals, travel style, and budget."</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Is Disney Concierge Worth It?<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {disneyConciergeFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL VERDICT: SIMPLE & CLEAN ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#dce6f5', // Light Navy Blue Background
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* Simple Header */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 42px)',
                            color: "#274472",
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                            marginBottom: '10px'
                        }}>
                            Final Verdict
                        </h2>
                        <p style={{ color: '#274472', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Is Disney Concierge Worth It?
                        </p>
                    </div>

                    {/* Editorial Body */}
                    <div style={{
                        fontSize: '18px',
                        color: '#475569',
                        lineHeight: '1.8',
                        textAlign: 'center'
                    }}>
                        <p style={{ marginBottom: '25px' }}>
                            For travelers who prioritize convenience, personalized service, and exclusive access, Disney Concierge can <strong style={{ color: '#1e293b' }}>absolutely be worth the investment</strong>. The value is highest during peak seasons or on "bucket-list" itineraries where every moment counts.
                        </p>

                        <p style={{ marginBottom: '40px', fontSize: '16px', color: '#64748b' }}>
                            However, if your vacation style is budget-focused or you spend very little time in your cabin, standard accommodations will likely provide a better return on your investment.
                        </p>

                        {/* Simple Divider */}
                        <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(39, 68, 114, 0.15)', margin: '0 auto 40px' }}></div>

                        {/* The Simple Truth - Focus Area */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                color: '#274472'
                            }}>
                                <Award size={32} />
                            </div>

                            <p style={{
                                margin: '0 0 10px 0',
                                fontSize: 'clamp(20px, 3vw, 26px)',
                                fontWeight: '800',
                                color: '#1e293b',
                                lineHeight: '1.3'
                            }}>
                                Ultimately, Concierge isn't about "more cruise."
                            </p>
                            <p style={{
                                margin: '0',
                                fontSize: 'clamp(20px, 3vw, 26px)',
                                fontWeight: '800',
                                color: '#274472',
                                lineHeight: '1.3'
                            }}>
                                It's about a smoother, easier, and more exclusive experience.
                            </p>
                        </div>

                        {/* Signature */}
                        <div style={{ marginTop: '60px' }}>
                            <p style={{ fontSize: '13px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Expert Perspective by Angela Hughes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION: SIMPLE & CLEAN ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#1e293b',
                fontFamily: 'sans-serif',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    {/* Header */}
                    <h2 style={{
                        fontSize: 'clamp(30px, 5vw, 42px)',
                        color: '#ffffff',
                        fontWeight: '800',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        Ready To Explore <span style={{ color: '#38bdf8' }}>Disney Concierge Level?</span>
                    </h2>

                    <div style={{ width: '50px', height: '3px', backgroundColor: '#38bdf8', margin: '0 auto 30px' }}></div>

                    <p style={{
                        fontSize: '18px',
                        color: '#cbd5e1',
                        lineHeight: '1.7',
                        marginBottom: '40px'
                    }}>
                        Deciding whether to upgrade is a significant investment. Trips & Ships Luxury Travel provides honest, personalized guidance on whether Concierge makes sense for your specific cruise and family.
                    </p>

                    {/* Simple Evaluation List */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '15px 30px',
                        marginBottom: '50px'
                    }}>
                        {[
                            "Cost vs. Value Analysis",
                            "Stateroom Category Selection",
                            "Priority Booking Benefits",
                            "Special Occasion Planning"
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600' }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div style={{ display: 'inline-block' }}>
                        <button style={{
                            backgroundColor: '#38bdf8',
                            color: '#1e293b',
                            padding: '18px 40px',
                            fontSize: '16px',
                            fontWeight: '800',
                            borderRadius: '50px',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            transition: '0.3s ease'
                        }}>
                            <Phone size={18} fill="#1e293b" />
                            Schedule a Concierge Consultation
                        </button>

                        <p style={{
                            marginTop: '20px',
                            fontSize: '12px',
                            color: '#94a3b8',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: '700'
                        }}>
                            No-Obligation Professional Guidance
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default DisneyConciergeWorthIt