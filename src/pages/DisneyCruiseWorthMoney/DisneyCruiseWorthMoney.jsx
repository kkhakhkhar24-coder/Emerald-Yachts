import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Heart, Utensils, Award,
    CircleDollarSign, GraduationCap, Mic, FileText,
    Music, Moon, Minus, Sun, X, Wine, Castle, Film, Theater, Waves,
    Shield, CheckSquare, XCircle,
    Check,
    Info
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/DisneyCruiseWorthTheMoney/Hero_1.webp'
// import hero2 from '../../assets/DisneyCruiseWorthTheMoney/Hero_2.jpg'
// import hero3 from '../../assets/DisneyCruiseWorthTheMoney/Hero_3.webp'
// import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'
// import Image1 from '../../assets/DisneyCruiseWorthTheMoney/Image_1.jpg'
// import Image2 from '../../assets/DisneyCruiseWorthTheMoney/Image_2.jpg'
// import Image3 from '../../assets/DisneyCruiseWorthTheMoney/Image_3.jpg'
// import Image4 from '../../assets/DisneyCruiseWorthTheMoney/Image_4.jpg'
// import Image5 from '../../assets/DisneyCruiseWorthTheMoney/Image_5.jpg'
// import Image6 from '../../assets/DisneyCruiseWorthTheMoney/Image_6.jpg'
// import Video1 from '../../assets/DisneyCruiseWorthTheMoney/Video1.mp4'
// import Video2 from '../../assets/DisneyCruiseWorthTheMoney/Video2.mp4'
// import Video3 from '../../assets/DisneyCruiseWorthTheMoney/Video3.mp4'
// import AH1 from '../../assets/DisneyCruiseWorthTheMoney/AH1.jpg'
// import AH2 from '../../assets/DisneyCruiseWorthTheMoney/AH2.jpg'
// import AH3 from '../../assets/DisneyCruiseWorthTheMoney/AH3.jpg'
// import AH4 from '../../assets/DisneyCruiseWorthTheMoney/AH4.jpg'
// import AH5 from '../../assets/DisneyCruiseWorthTheMoney/AH5.jpg'


function DisneyCruiseWorthMoney() {
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

    const disneyWorthFaqs = [
        { question: "Why is Disney Cruise Line so expensive?", answer: "Disney invests heavily in service, entertainment, family programming, ship design, and guest experience, resulting in premium pricing." },
        { question: "Is Disney Cruise worth it for families?", answer: "For many families, yes. Included entertainment, character experiences, kids clubs, and family-friendly service create significant value." },
        { question: "Is Disney Cruise worth it for adults?", answer: "Many adults enjoy Disney cruises thanks to adult-only areas, specialty dining, exceptional service, and high-quality entertainment." },
        { question: "Does Disney Cruise include food?", answer: "Yes. Main dining rooms, casual dining, snacks, and many beverages are included." },
        { question: "Are character experiences included?", answer: "Yes. Most character meet-and-greets are included in the cruise fare." },
        { question: "Is Disney Cruise better than Royal Caribbean?", answer: "It depends on your priorities. Disney excels in family experiences and entertainment, while Royal Caribbean offers more nightlife and attractions." },
        { question: "Does Disney Cruise have casinos?", answer: "No. Disney Cruise Line does not operate casinos onboard." },
        { question: "Are Disney cruises luxurious?", answer: "Disney is considered a premium cruise line with many luxury-like elements but is not typically classified as a traditional luxury cruise brand." },
        { question: "What is the biggest advantage of Disney Cruise Line?", answer: "Many guests cite service, entertainment, and family experiences as Disney's strongest advantages." },
        { question: "What is the biggest disadvantage?", answer: "Price is the most common concern among potential travelers." },
        { question: "Are Disney cruises overcrowded?", answer: "Disney manages capacity well, and many guests find ships less crowded than expected." },
        { question: "How much more expensive is Disney compared to other cruise lines?", answer: "Pricing varies by itinerary and season, but Disney is often more expensive than mainstream competitors." },
        { question: "Should first-time cruisers choose Disney?", answer: "Families and Disney fans often find Disney an excellent introduction to cruising." }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"] },
            { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in Disney Cruise Line planning, family cruises, and premium vacation experiences." },
            { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
            { "@type": "WebPage", "name": "Is Disney Cruise Line Worth the Money?", "url": "https://www.tripsandships.com/is-disney-cruise-line-worth-the-money", "description": "Honest review comparing Disney Cruise Line pricing, dining, entertainment, and value to determine if a Disney cruise is worth the cost." },
            {
                "@type": "BreadcrumbList", "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Is Disney Cruise Line Worth the Money?", "item": "https://www.tripsandships.com/is-disney-cruise-line-worth-the-money" }
                ]
            },
            { "@type": "FAQPage", "mainEntity": disneyWorthFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Is Disney Cruise Line Worth the Money? Honest Review for Families & Adults</title>
                <meta name="title" content="Is Disney Cruise Line Worth the Cost? Disney Cruise Value Guide" />
                <meta name="description" content="Wondering if Disney Cruise Line is worth the money? Compare pricing, dining, entertainment, service, destinations, and value to determine whether a Disney cruise is right for you." />
                <meta name="keywords" content="Is Disney Cruise Line Worth the Money, Disney Cruise Value, Disney Cruise Cost, Disney Cruise Worth It, Disney Cruise Reviews, Disney Cruise Line Pricing, Is Disney Cruise Line worth the extra cost, Why is Disney Cruise so expensive, Disney Cruise value compared to other cruise lines, Is Disney Cruise worth it for families, Disney Cruise worth it for adults" />
                <link rel="canonical" href="https://www.tripsandships.com/is-disney-cruise-line-worth-the-money" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div key={idx} className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <CircleDollarSign size={16} />
                        <span>Honest Value Guide for Families & Adults</span>
                    </div>
                    <h1 className="medi-hero-main-title">Is Disney Cruise Line<br />Worth the Money?</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px, 2.5vw, 20px)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', textAlign: 'center' }}>
                        A complete breakdown of pricing, inclusions, and value to help you decide if a Disney cruise is right for your budget.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
          .medi-immersion-card-item:hover .medi-immersion-icon-box { background-color: #274472 !important; border-color: #274472 !important; transform: scale(1.1); }
          .medi-immersion-card-item:hover .medi-immersion-icon-box svg { stroke: #ffffff !important; }
          .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
          .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
          .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
        `}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>
                        <div className="medi-premium-editorial-block" style={{ maxHeight: isMobileViewport ? 'none' : '650px', overflowY: isMobileViewport ? 'visible' : 'auto', paddingRight: isMobileViewport ? '0' : '20px', textAlign: window.innerWidth <= 1024 ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
                            <span className="medi-premium-mini-badge" style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '10px' }}>Complete Value Breakdown</span>
                            <h2 className="medi-premium-heading" style={{ color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', margin: '0 0 20px 0' }}>Is Disney Cruise Line Worth the Money?</h2>
                            <div className="medi-premium-separator" style={{ width: '80px', height: '3px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px' }}></div>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>One of the most common questions travelers ask before booking a Disney cruise is: "Is Disney Cruise Line really worth the extra money?"</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>Disney Cruise Line is often more expensive than many mainstream cruise lines, sometimes costing hundreds or even thousands of dollars more for a similar itinerary. Yet despite the higher prices, Disney cruises consistently sell out, attract repeat guests, and maintain some of the highest customer satisfaction ratings in the cruise industry.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>The answer depends on your travel style, expectations, and what you value most in a vacation experience.</p>
                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>What You Are Evaluating:</p>
                                <div className="medi-immersion-cards-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
                                    {[{ t: "Premium Pricing", i: <CircleDollarSign size={20} /> }, { t: "Included Experiences", i: <CheckSquare size={20} /> }, { t: "Service Quality", i: <Award size={20} /> }, { t: "Family Programming", i: <Users size={20} /> }, { t: "Entertainment Value", i: <Theater size={20} /> }, { t: "Overall Satisfaction", i: <Star size={20} /> }].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>{item.i}</div>
                                            <span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: window.innerWidth <= 1024 ? '40px' : '0', borderLeftColor: '#274472' }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">VALUE ANALYSIS</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help families and adults analyze the true cost versus value of a Disney cruise so you can make an informed decision.</p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry and 121+ countries visited, Angela Hughes helps you determine if the Disney premium is worth it for your specific travel style.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY DISNEY COSTS MORE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>The Premium Positioning</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>Why Disney Cruises Cost More</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Before deciding if Disney is worth the money, it's important to understand why the cruise line charges premium pricing.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {["Service quality", "Entertainment", "Ship design", "Guest experience", "Family programming", "Technology", "Dining experiences", "Character interactions"].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                        <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>Strategy Over Price</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>Unlike many cruise lines that compete primarily on price, Disney focuses on delivering a premium vacation experience.</p>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1' }}>As a result, travelers often pay more upfront but receive additional value in several areas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT IS INCLUDED IN THE PRICE ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 100px) 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <style>{`
          .inc-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 220px; gap: 15px; max-width: 1200px; margin: 0 auto; }
          .inc-item { position: relative; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background-color: #1e293b; }
          .inc-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
          .inc-item:hover img { transform: scale(1.1); }
          .inc-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 25px; color: #fff; opacity: 0; transition: opacity 0.4s ease; }
          .inc-item:hover .inc-overlay { opacity: 1; }
          .inc-title { font-size: 14px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #3b82f6; }
          @media (max-width: 1024px) { .inc-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; } .inc-large { grid-column: span 2; grid-row: span 2; } .inc-wide { grid-column: span 2; } }
          @media (max-width: 600px) { .inc-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; } .inc-item { grid-column: span 1 !important; grid-row: span 1 !important; } }
        `}</style>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>Your Cruise Fare</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px' }}>What Is Included in the Price?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '750px', margin: '25px auto 0' }}>One reason many guests find Disney cruises worthwhile is the number of experiences included in the fare.</p>
                    </div>
                    <div className="inc-grid">
                        <div className="inc-item inc-large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                            <img src='' alt="Main Dining" />
                            <div className="inc-overlay"><span className="inc-title">Main Dining</span><p style={{ margin: '5px 0 0', fontSize: '14px', color: '#cbd5e1' }}>Guests rotate through multiple themed restaurants throughout the voyage.</p></div>
                        </div>
                        <div className="inc-item"><img src='' alt="Broadway Entertainment" /><div className="inc-overlay"><span className="inc-title">Broadway Entertainment</span></div></div>
                        <div className="inc-item"><img src='' alt="Character Experiences" /><div className="inc-overlay"><span className="inc-title">Character Experiences</span></div></div>
                        <div className="inc-item"><img src='' alt="Youth Programs" /><div className="inc-overlay"><span className="inc-title">Youth Programs</span></div></div>
                        <div className="inc-item"><img src='' alt="Pools and Recreation" /><div className="inc-overlay"><span className="inc-title">Pools & Recreation</span></div></div>
                        <div className="inc-item inc-wide" style={{ gridColumn: 'span 4' }}>
                            <img src='' alt="Private Island Access" />
                            <div className="inc-overlay"><span className="inc-title">Private Island Access</span><p style={{ margin: '5px 0 0', fontSize: '14px', color: '#cbd5e1' }}>Most itineraries include beach access and many island activities at no extra charge.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHERE THE EXTRA MONEY GOES: PREMIUM REDESIGN ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#f8fafc',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Section */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '800',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '12px'
                        }}>
                            The Premium Difference
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 46px)',
                            color: "",
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.1'
                        }}>
                            Where the Extra Money Goes
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            backgroundColor: '#3b82f6',
                            margin: '0 auto',
                            borderRadius: '10px'
                        }}></div>
                        <p style={{
                            fontSize: '18px',
                            color: '#475569',
                            maxWidth: '750px',
                            margin: '30px auto 0',
                            lineHeight: '1.6'
                        }}>
                            Disney Cruise Line carries a premium price tag because they reinvest in guest experiences that mainstream lines simply don't match.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : 'repeat(3, 1fr)',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}>

                        {/* 1. ENTERTAINMENT QUALITY */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            padding: '40px 30px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease'
                        }}>
                            {/* ICON CHANGED TO SPARKLES */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: '#eff6ff',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3b82f6',
                                marginBottom: '24px'
                            }}>
                                <Sparkles size={28} />
                            </div>

                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Entertainment Quality</h3>

                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '25px' }}>
                                Many travelers consider Disney's entertainment superior to most mainstream cruise lines, offering production value found only on Broadway.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', flexGrow: 1 }}>
                                {[
                                    "Broadway-caliber productions",
                                    "Fireworks at sea",
                                    "Live music & deck parties",
                                    "First-run Disney movies"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6' }} /> {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9', fontSize: '13px', fontStyle: 'italic', color: '#94a3b8' }}>
                                For fans, the entertainment alone significantly increases the perceived value.
                            </div>
                        </div>

                        {/* 2. SERVICE EXCELLENCE */}
                        <div style={{
                            backgroundColor: '#0f1c2e',
                            borderRadius: '24px',
                            padding: '40px 30px',
                            color: '#ffffff',
                            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            transform: window.innerWidth > 992 ? 'translateY(-20px)' : 'none',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#60a5fa',
                                marginBottom: '24px'
                            }}>
                                <Award size={28} />
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>Service Excellence</h3>
                            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '25px' }}>
                                One of Disney’s strongest advantages is its legendary service. Crew members are trained to anticipate needs before you even realize them.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', flexGrow: 1 }}>
                                {[
                                    "Personalized guest attention",
                                    "Family-friendly interactions",
                                    "Unmatched consistency",
                                    "Highest guest satisfaction"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', fontWeight: '600', color: '#cbd5e1' }}>
                                        <Sparkles size={16} style={{ color: '#60a5fa' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '13px', fontStyle: 'italic', color: '#64748b' }}>
                                Service is the primary reason why repeat cruisers continue returning.
                            </div>
                        </div>

                        {/* 3. FAMILY EXPERIENCE */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            padding: '40px 30px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: '#eff6ff',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3b82f6',
                                marginBottom: '24px'
                            }}>
                                <Users size={28} />
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Family Experience</h3>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '25px' }}>
                                Every inch of the ship is designed with families in mind, from split bathrooms in staterooms to the most immersive kids clubs at sea.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', flexGrow: 1 }}>
                                {[
                                    "Spacious family staterooms",
                                    "Immersive kids & teen clubs",
                                    "Character interactions",
                                    "Rotational family dining"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9', fontSize: '13px', fontStyle: 'italic', color: '#94a3b8' }}>
                                Families often find the extra cost worthwhile for the specialized features.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════ WORTH IT FOR FAMILIES VS ADULTS ═══════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">Is Disney Cruise Worth It for Families vs Adults?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Worth It for Families</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Included entertainment (no park tickets needed)", i: <Theater size={20} /> },
                                    { t: "Character access included in the fare", i: <Star size={20} /> },
                                    { t: "Childcare and award-winning kids clubs", i: <Users size={20} /> },
                                    { t: "Multi-generational appeal", i: <Heart size={20} /> },
                                    { t: "Stress-free vacation planning", i: <Sun size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}><div className="medi-audience-icon-wrapper best">{item.i}</div><span>{item.t}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Worth It for Adults</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Adult-Only Quiet Cove Pool", i: <Waves size={20} /> },
                                    { t: "Specialty dining at Palo & Remy", i: <Utensils size={20} /> },
                                    { t: "Dedicated adult lounges and nightlife", i: <Wine size={20} /> },
                                    { t: "Exceptional service and attention to detail", i: <Award size={20} /> },
                                    { t: "Disney storytelling and nostalgia", i: <Castle size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}><div className="medi-audience-icon-wrapper best">{item.i}</div><span>{item.t}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE VALUE AUDIT: WORTH IT VS NOT ═══════════════ */}
<section style={{ 
    padding: 'clamp(70px, 10vw, 110px) clamp(16px, 5vw, 40px)', 
    backgroundColor: '#f1f5f9', // Light neutral background to make cards pop
    fontFamily: 'sans-serif' 
}}>
    <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
                color: '#3b82f6', 
                fontWeight: '800', 
                fontSize: '12px', 
                textTransform: 'uppercase', 
                letterSpacing: '3px', 
                display: 'block', 
                marginBottom: '15px' 
            }}>
                Planning Perspective
            </span>
            <h2 style={{ 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                color: "", 
                fontWeight: '800', 
                letterSpacing: '-0.02em',
                lineHeight: 1.2
            }}>
                Is a Disney Cruise the Right Investment?
            </h2>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#3b82f6', margin: '25px auto' }}></div>
        </div>

        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr', 
            gap: '30px',
            alignItems: 'stretch'
        }}>
            
            {/* CARD 1: THE GOLD STANDARD (WORTH IT) */}
            <div style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '30px', 
                padding: 'clamp(30px, 5vw, 50px)', 
                boxShadow: '0 20px 50px rgba(15, 28, 46, 0.08)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Visual Accent */}
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '120px', 
                    height: '120px', 
                    background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent)', 
                    zIndex: 0 
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                        <div style={{ 
                            width: '45px', 
                            height: '45px', 
                            borderRadius: '12px', 
                            backgroundColor: '#eff6ff', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: '#3b82f6'
                        }}>
                            <CheckCircle size={24} />
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>
                            Absolutely Worth the Money
                        </h3>
                    </div>

                    <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '30px', lineHeight: '1.6' }}>
                        Disney Cruise Line offers a specialized, high-tier experience that provides exceptional value for:
                    </p>

                    <div style={{ display: 'grid', gap: '16px' }}>
                        {[
                            "Disney fans & enthusiasts",
                            "Families with young children",
                            "Multi-generational travelers",
                            "First-time cruisers",
                            "Couples who enjoy Disney experiences",
                            "Travelers prioritizing service & entertainment",
                            "Guests seeking premium family vacations"
                        ].map((item, i) => (
                            <div key={i} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px', 
                                padding: '12px 18px', 
                                backgroundColor: '#f8fafc', 
                                borderRadius: '12px',
                                border: '1px solid #f1f5f9'
                            }}>
                                <Check size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CARD 2: THE ALTERNATIVE AUDIT (NOT WORTH IT) */}
            <div style={{ 
                backgroundColor: '#0f1c2e', 
                borderRadius: '30px', 
                padding: 'clamp(30px, 5vw, 50px)', 
                boxShadow: '0 25px 60px rgba(15, 28, 46, 0.2)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                    <div style={{ 
                        width: '45px', 
                        height: '45px', 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#94a3b8'
                    }}>
                        <Info size={24} />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                        May Not Be the Best Value
                    </h3>
                </div>

                <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '30px', lineHeight: '1.6' }}>
                    Disney focuses on immersive storytelling and family service. It may not be the ideal fit for travelers seeking:
                </p>

                <div style={{ display: 'grid', gap: '12px', flexGrow: 1 }}>
                    {[
                        "Onboard Casinos",
                        "Large nightlife & club scenes",
                        "Budget-focused vacations",
                        "Strictly adults-only environments",
                        "Party-focused cruise vibes",
                        "Lowest possible cruise pricing"
                    ].map((item, i) => (
                        <div key={i} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '12px', 
                            padding: '10px 0', 
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <X size={16} style={{ color: '#64748b', flexShrink: 0 }} />
                            <span style={{ fontSize: '15px', fontWeight: '500', color: '#cbd5e1' }}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Recommendation Box */}
                <div style={{ 
                    marginTop: '40px', 
                    padding: '20px', 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                    borderRadius: '15px', 
                    borderLeft: '4px solid #3b82f6' 
                }}>
                    <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0, color: '#e2e8f0' }}>
                        <strong>Expert Verdict:</strong> If these priorities are at the top of your list, other cruise lines like Virgin Voyages or Royal Caribbean may offer a better return on your investment.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

            {/* ═══════════════ DISNEY VS ROYAL CARIBBEAN ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Head-to-Head</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px' }}>Disney Cruise Line vs Royal Caribbean</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ship size={24} style={{ color: '#fff' }} /></div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Cruise Line</h3>
                            </div>
                            {[{ l: "Pricing", v: "Premium positioning" }, { l: "Entertainment", v: "Disney storytelling & Broadway" }, { l: "Characters", v: "Included character experiences" }, { l: "Atmosphere", v: "Family-focused, no casinos" }, { l: "Loyalty", v: "Extremely strong repeat guests" }].map((row, i) => (
                                <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{row.l}</span>
                                    <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '500' }}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Anchor size={24} style={{ color: '#94a3b8' }} /></div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Royal Caribbean</h3>
                            </div>
                            {[{ l: "Pricing", v: "Wider pricing range" }, { l: "Entertainment", v: "Adventure-focused attractions" }, { l: "Ships", v: "Larger ships with more features" }, { l: "Atmosphere", v: "More nightlife, casinos onboard" }, { l: "Audience", v: "Broader audience appeal" }].map((row, i) => (
                                <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{row.l}</span>
                                    <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7', margin: 0 }}><strong style={{ color: '#fff' }}>Key Takeaway:</strong> Families often prefer Disney, while some adults may prefer Royal Caribbean depending on priorities.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DISNEY VS LUXURY & HIDDEN COSTS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {/* Disney vs Luxury */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#274472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}><Gem size={24} style={{ color: '#3b82f6' }} /> Disney vs Luxury Lines</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Disney's pricing occasionally approaches luxury territory. However, luxury lines often include:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {["Premium beverages", "Gratuities", "Shore excursions", "Butler service", "All-inclusive experiences"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#94a3b8', flexShrink: 0 }} /> {item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                <p style={{ fontSize: '14px', color: '#475569', margin: 0, fontStyle: 'italic' }}>Disney generally focuses on family experiences rather than traditional luxury.</p>
                            </div>
                        </div>

                        {/* Hidden Costs */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#274472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}><CircleDollarSign size={24} style={{ color: '#ef4444' }} /> Hidden Costs to Consider</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>While Disney includes many amenities, some expenses remain extra:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {["Alcoholic beverages", "Specialty dining (Palo & Remy)", "Spa treatments", "Shore excursions", "Internet packages"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><XCircle size={16} style={{ color: '#ef4444', flexShrink: 0 }} /> {item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '3px solid #ef4444' }}>
                                <p style={{ fontSize: '14px', color: '#475569', margin: 0, fontStyle: 'italic' }}>Understanding these costs helps travelers accurately compare value.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>Ship Tour</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px' }}>See What You're Paying For</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>Take a tour of the dining, entertainment, and design details that justify Disney's premium pricing.</p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/" title="Disney Cruise Line Value Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ LOYAL FANS & REAL VALUE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>The Loyalty Factor</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px' }}>Why Disney Cruises Have Such Loyal Fans</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px', marginBottom: '60px' }}>
                        {[
                            { title: "Consistency", desc: "Guests know exactly what to expect every single time they sail.", icon: <Shield size={24} /> },
                            { title: "Emotional Connection", desc: "Disney creates memorable experiences that resonate deeply with families.", icon: <Heart size={24} /> },
                            { title: "Exceptional Service", desc: "Service frequently exceeds expectations across all ship classes.", icon: <Award size={24} /> },
                            { title: "Attention to Detail", desc: "Disney's commitment to storytelling is visible throughout the ship.", icon: <Star size={24} /> },
                            { title: "Guest Satisfaction", desc: "Many travelers simply enjoy the overall experience more than competing options.", icon: <Users size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '20px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <div style={{ color: '#3b82f6', flexShrink: 0 }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 8px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '50px', color: '#ffffff', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '30px', color: '#3b82f6' }}>Real Value: What You're Actually Paying For</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                            {["Immersive experiences", "Entertainment quality", "Family memories", "Exceptional service", "Disney storytelling", "Guest satisfaction", "Stress-free planning"].map((tag, i) => (
                                <span key={i} style={{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>{tag}</span>
                            ))}
                        </div>
                        <p style={{ fontSize: '17px', color: '#cbd5e1', marginTop: '30px', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.7' }}>For many travelers, these benefits justify the higher price tag.</p>
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
                        <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>When evaluating whether a Disney cruise is worth the money, having an advisor who understands cruise pricing structures and value metrics is invaluable.</p>
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
                        <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>"Angela and her team help you determine if the Disney premium is worth it for your specific family's needs and budget."</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Is Disney Cruise Line Worth the Money?<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {disneyWorthFaqs.map((faq, index) => (
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

            {/* ═══════════════ FINAL VERDICT ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Final Verdict</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: "#274472", fontWeight: '700', marginBottom: '20px' }}>Is Disney Cruise Line Worth the Money?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
                        <p style={{ margin: '0 0 20px' }}>For travelers who value exceptional service, world-class entertainment, family experiences, and Disney magic, Disney Cruise Line is often <strong style={{ color: '#274472' }}>absolutely worth the extra cost</strong>.</p>
                        <p style={{ margin: '0 0 20px' }}>While it may not be the cheapest cruise option, many guests believe the combination of quality, convenience, entertainment, and unforgettable memories delivers value that extends far beyond the price tag.</p>
                        <p style={{ margin: '0 0 20px', fontSize: '20px', fontWeight: '700', color: '#274472' }}>The real question isn't whether Disney Cruise Line costs more.</p>
                        <p style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#274472' }}>It's whether the Disney experience is worth more to you.</p>
                        <p style={{ margin: '30px 0 0', fontSize: '18px', fontStyle: 'italic', color: '#64748b' }}>For millions of loyal guests, the answer is a resounding yes.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section className="medi-cta-main-section" id="disney-worth-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Decide If Disney Cruise Line Is Right For You?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">Stop guessing about pricing and value. <strong>Let an expert break down the exact costs and benefits for your family.</strong></p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>Trips & Ships Luxury Travel provides transparent pricing analysis and personalized recommendations so you know exactly what you're paying for.</p>
                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>We can help you compare:</span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {["Disney vs Royal Caribbean pricing", "Included vs hidden costs", "Best Disney ship for your budget", "Family vs adult value analysis", "Optimal booking windows"].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>Contact Trips & Ships Luxury Travel today for a no-obligation Disney Cruise value consultation.</p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Disney Value Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisneyCruiseWorthMoney