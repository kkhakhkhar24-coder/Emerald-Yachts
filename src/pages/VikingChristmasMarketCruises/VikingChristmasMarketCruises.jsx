import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Utensils, Award,
    Gift, Snowflake, Wine, Music, Heart, TreePine
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/VikingChristmasMarketCruises/christmas-market-hero-1.jpg'
// import hero2 from '../../assets/VikingChristmasMarketCruises/christmas-market-hero-2.jpg'
// import hero3 from '../../assets/VikingChristmasMarketCruises/christmas-market-hero-3.jpg'
// import longshipImg from '../../assets/VikingChristmasMarketCruises/viking-longship-holiday.jpg'

function VikingChristmasMarketCruises() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [
        // hero1,
        // hero2,
        // hero3
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
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)
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

    const vikingFaqs = [
        { question: "What is a Viking Christmas Market Cruise?", answer: "A Viking Christmas Market Cruise is a seasonal European river cruise that visits famous holiday markets throughout Germany, Austria, France, Hungary, and other destinations." },
        { question: "When do Viking Christmas Market Cruises operate?", answer: "Most sailings operate from late November through mid-December." },
        { question: "Which Viking Christmas Market itinerary is most popular?", answer: "Christmas on the Rhine and Christmas Time on the Danube are among the most popular itineraries." },
        { question: "Are Christmas market excursions included?", answer: "Yes. Viking includes at least one guided excursion in every port." },
        { question: "What countries can I visit on a Christmas Market Cruise?", answer: "Depending on the itinerary, you may visit Germany, France, Austria, Hungary, Switzerland, and the Netherlands." },
        { question: "What is Glühwein?", answer: "Glühwein is traditional German mulled wine served warm at Christmas markets." },
        { question: "Are Viking Christmas Market cruises adults only?", answer: "Yes. Viking River Cruises are designed primarily for adult travelers." },
        { question: "What should I pack for a Christmas Market Cruise?", answer: "Warm clothing, comfortable walking shoes, gloves, hats, and weather-resistant outerwear are recommended." },
        { question: "Are Viking ships decorated for Christmas?", answer: "Yes. Viking ships feature festive holiday decorations and seasonal touches." },
        { question: "Which Christmas market is the most famous?", answer: "Nuremberg, Strasbourg, and Vienna are among Europe's most famous Christmas markets." },
        { question: "Do Christmas Market cruises sell out?", answer: "Yes. Holiday sailings are extremely popular and often book 12–18 months in advance." },
        { question: "Is airfare included?", answer: "Airfare may be available through Viking promotions but is not automatically included." },
        { question: "Are meals included on Viking Christmas Market cruises?", answer: "Yes. Most meals, including regional cuisine and holiday-inspired dishes, are included." },
        { question: "Is a Christmas Market cruise good for first-time river cruisers?", answer: "Absolutely. These itineraries are among the most popular introductions to European river cruising." },
        { question: "When is the best time to book a Christmas Market Cruise?", answer: "Booking 12–18 months in advance provides the best cabin selection and promotional pricing." }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/viking-christmas-market-cruises",
                "url": "https://www.tripsandships.com/viking-christmas-market-cruises",
                "name": "Viking Christmas Market Cruises",
                "headline": "Viking Christmas Market Cruises | European Holiday River Cruises",
                "description": "Experience Europe's magical holiday season on Viking Christmas Market Cruises. Explore festive markets in Germany, Austria, France, and Hungary with expert planning from Trips & Ships Luxury Travel.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" }
            },
            {
                "@type": "TravelAgency",
                "@id": "#trips-ships",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "description": "Luxury travel agency specializing in Viking River Cruises, Christmas Market cruises, and European holiday river cruise planning.",
                "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"],
                "founder": { "@id": "#angela-hughes" }
            },
            { "@type": "Organization", "@id": "#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
            { "@type": "Person", "@id": "#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@id": "#trips-ships" } },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" }, { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" }, { "@type": "ListItem", "position": 3, "name": "Viking Christmas Market Cruises", "item": "https://www.tripsandships.com/viking-christmas-market-cruises" }] },
            { "@type": "Article", "headline": "Viking Christmas Market Cruises", "description": "Expert guide to Viking Christmas Market Cruises covering itineraries, holiday markets, destinations, and why travelers choose Viking for European holiday cruising.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" }, "keywords": ["Viking Christmas Market Cruises", "Viking Christmas Cruises", "Christmas Market River Cruises", "Viking Holiday Cruises", "European Christmas Market Cruises", "Rhine Christmas Market Cruises", "Danube Christmas Market Cruises", "Luxury Christmas Market Cruises"] },
            { "@type": "FAQPage", "mainEntity": vikingFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Christmas Market Cruises | European Holiday River Cruises</title>
                <meta name="title" content="Viking Christmas Market Cruises | European Holiday River Cruises" />
                <meta name="description" content="Experience Europe's magical holiday season on Viking Christmas Market Cruises. Explore festive markets in Germany, Austria, France, and Hungary with expert planning from Trips & Ships Luxury Travel." />
                <meta name="keywords" content="Viking Christmas Market Cruises, Viking Christmas Cruises, Christmas Market River Cruises, Viking Holiday Cruises, European Christmas Market Cruises, Rhine Christmas Market Cruises, Danube Christmas Market Cruises, Viking River Cruises Christmas Markets, Luxury Christmas Market Cruises, Glühwein, Strasbourg Christmas Market, Vienna Christmas Market, Nuremberg Christmas Market, Cologne Christmas Market, Budapest Christmas Market" />
                <link rel="canonical" href="https://www.tripsandships.com/viking-christmas-market-cruises" />
                <script type="application/ld+json">{JSON.stringify(vikingSchemaData)}</script>
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
                        <Snowflake size={16} />
                        <span>European Holiday Markets, Festive Traditions & River Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">Viking Christmas Market Cruises</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px, 2.5vw, 20px)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', textAlign: 'center' }}>
                        Experience Europe's most magical holiday tradition aboard a Viking Christmas Market Cruise.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO SECTION ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
                    .medi-immersion-card-item:hover .medi-immersion-icon-box { background-color: #274472 !important; border-color: #274472 !important; transform: scale(1.1); }
                    .medi-immersion-card-item:hover .medi-immersion-icon-box svg { stroke: #ffffff !important; }
                    .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover { background: rgba(39, 68, 114, 0.4); }
                `}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>
                        <div className="medi-premium-editorial-block" style={{ maxHeight: isMobileViewport ? 'none' : '650px', overflowY: isMobileViewport ? 'visible' : 'auto', paddingRight: isMobileViewport ? '0' : '20px', textAlign: window.innerWidth <= 1024 ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
                            <span className="medi-premium-mini-badge" style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '10px' }}>
                                Europe's Holiday Magic
                            </span>
                            <h2 className="medi-premium-heading" style={{ color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', margin: '0 0 20px 0' }}>
                                Viking Christmas Market Cruises: Experience Europe's Most Magical Holiday Tradition
                            </h2>
                            <div className="medi-premium-separator" style={{ width: '80px', height: '3px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px' }}></div>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                There is something truly magical about Europe during the holiday season. Historic town squares glow with festive lights. Wooden market stalls offer handcrafted gifts and seasonal treats. The aroma of roasted chestnuts, mulled wine, and gingerbread fills the air while centuries-old Christmas traditions come to life.
                            </p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                One of the best ways to experience these holiday celebrations is aboard a Viking Christmas Market Cruise. Combining luxury river cruising with some of Europe's most famous Christmas markets, Viking offers travelers an unforgettable seasonal journey through Germany, Austria, France, Hungary, and beyond.
                            </p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                At Trips & Ships Luxury Travel, we help travelers select the ideal Viking Christmas Market itinerary, secure preferred staterooms, and create memorable holiday vacations filled with festive charm.
                            </p>
                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>Travelers Love the Combination Of:</p>
                                <div className="medi-immersion-cards-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
                                    {[
                                        { t: "Festive Holiday Atmosphere", i: <Snowflake size={20} /> },
                                        { t: "Traditional Christmas Markets", i: <Gift size={20} /> },
                                        { t: "Luxury Accommodations", i: <Gem size={20} /> },
                                        { t: "Seasonal Cuisine & Glühwein", i: <Wine size={20} /> },
                                        { t: "Cultural Experiences", i: <Globe size={20} /> },
                                        { t: "Stress-Free Travel", i: <Ship size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item"><div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>{item.i}</div><span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: window.innerWidth <= 1024 ? '40px' : '0', borderLeftColor: '#274472' }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row"><div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div><div><span className="medi-expert-card-subtitle">CRUISE EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div></div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help travelers discover the magic of European Christmas markets aboard Viking — from historic town squares and handcrafted gifts to festive traditions and seasonal cuisine.</p>
                                <div className="medi-premium-expert-quote-box"><span className="medi-quote-mark" style={{ color: '#274472' }}>"</span><p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps travelers plan Viking Christmas Market cruises that deliver unforgettable holiday memories.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT ARE CHRISTMAS MARKETS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>A Centuries-Old Tradition</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>What Are Christmas Markets?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>Christmas markets originated in Germany centuries ago and have become one of Europe's most beloved holiday traditions.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} style={{ color: '#3b82f6' }} /> Markets Typically Feature</p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[{ text: "Handmade Gifts & Ornaments", icon: <Gift size={18} /> }, { text: "Seasonal Food & Pastries", icon: <Utensils size={18} /> }, { text: "Mulled Wine (Glühwein)", icon: <Wine size={18} /> }, { text: "Choir & Live Music", icon: <Music size={18} /> }, { text: "Wood Carvings & Candles", icon: <TreePine size={18} /> }, { text: "Ice Skating & Events", icon: <Snowflake size={18} /> }].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}><div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div><span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span></div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>Instead of Packing & Unpacking</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>Guests enjoy a comfortable floating hotel while visiting multiple Christmas markets throughout Europe — transportation, accommodations, and logistics all handled for you.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Multiple markets in one trip", "Stress-free travel", "Scenic winter river cruising", "Cultural immersion across countries"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>"Christmas market cruises are among Viking's most popular seasonal sailings."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ITINERARY SHOWCASE ═══════════════ */}
            <section className="medi-itinerary-showcase-section" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CRUISE PLANNING GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Most Popular Viking Christmas Market Itineraries</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>Viking offers several Christmas Market itineraries, each featuring Europe's most festive holiday destinations.</p>
                    </div>
                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["Christmas on the Rhine", "Christmas Time on the Danube", "Danube Waltz Christmas"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`} onClick={() => setMediSelectedItinerary(idx)}>
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span><div className="medi-itinerary-tab-meta"><span className="medi-itinerary-tab-title">{title}</span></div><ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}><div className="medi-itinerary-showcase-img-overlay"></div><span className="medi-itinerary-showcase-badge">ITINERARY SPOTLIGHT</span></div>
                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{["Christmas on the Rhine", "Christmas Time on the Danube", "Danube Waltz Christmas"][mediSelectedItinerary]}</h3>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Quick Facts:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["8 Days — Basel to Amsterdam or reverse", "Strasbourg, Cologne, Heidelberg, Rhine Gorge", "One of Viking's most requested Christmas itineraries"],
                                                ["8 Days — Budapest to Regensburg or reverse", "Vienna, Budapest, Passau, Austrian markets", "Classic Central European holiday traditions"],
                                                ["Austria, Hungary, and Germany", "Holiday markets combined with cultural highlights", "Festive traditions across multiple countries"]
                                            ][mediSelectedItinerary].map((feature, i) => (<li key={i}><Sparkles size={14} className="medi-itinerary-detail-icon" /><span>{feature}</span></li>))}
                                        </ul>
                                    </div>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                ["Strasbourg Market", "Cologne Cathedral", "Heidelberg", "Rhine Gorge", "Amsterdam"],
                                                ["Vienna Markets", "Budapest Lights", "Passau", "Austrian Traditions"],
                                                ["Danube Markets", "Cultural Highlights", "Austrian & Hungarian Traditions"]
                                            ][mediSelectedItinerary].map((tag, i) => (<span key={i} className="medi-itinerary-details-chip"><MapPin size={12} className="medi-itinerary-chip-icon" /><span>{tag}</span></span>))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '15px', color: '#64748b', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                                        {mediSelectedItinerary === 0 && "One of Viking's most requested Christmas Market itineraries."}
                                        {mediSelectedItinerary === 1 && "Ideal for travelers seeking classic Central European holiday traditions."}
                                        {mediSelectedItinerary === 2 && "Combines holiday markets with cultural highlights throughout Austria, Hungary, and Germany."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 1: CHRISTMAS MARKET EXPERIENCE ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>See The Holiday Magic</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Experience Viking Christmas Markets</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>Discover the festive charm of Europe's most beloved Christmas markets. From glowing town squares to traditional Glühwein, every moment is filled with holiday wonder.</p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BxCuJXGlpcc" title="Viking Christmas Market Cruises" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST CHRISTMAS MARKETS ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#0a1120', fontFamily: 'sans-serif', overflow: 'hidden' }}>
                <style>{`
                    .xmas-market-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 420px; gap: 24px; max-width: 1240px; margin: 0 auto; }
                    .xmas-market-item { position: relative; border-radius: 24px; overflow: hidden; background-color: #1c2f4a; border: 1px solid rgba(255,255,255,0.1); transition: all 0.5s cubic-bezier(0.4,0,0.2,1); }
                    .xmas-market-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,17,32,1) 0%, rgba(10,17,32,0.85) 30%, rgba(10,17,32,0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; padding: clamp(24px,5vw,45px) clamp(20px,4vw,35px); color: #ffffff; z-index: 2; text-align: left; }
                    .xmas-market-tag { font-size: clamp(10px,2vw,11px); font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; }
                    .xmas-market-title { font-size: clamp(20px,3vw,24px); font-weight: 700; margin: 0 0 12px 0; line-height: 1.2; color: #ffffff; text-shadow: 0 2px 15px rgba(0,0,0,0.8); }
                    .xmas-market-desc { font-size: clamp(14px,2vw,15px); color: rgba(255,255,255,0.95); line-height: 1.6; margin: 0; font-weight: 400; max-width: 400px; }
                    .xmas-market-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a365d 0%, #0f1c2e 100%); color: #3b82f6; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; }
                    @media (max-width: 1024px) { .xmas-market-grid { grid-template-columns: repeat(2,1fr); grid-auto-rows: 380px; } }
                    @media (max-width: 650px) { .xmas-market-grid { grid-template-columns: 1fr; grid-auto-rows: 340px; gap: 16px; } .xmas-market-overlay { padding: 30px 20px; } .xmas-market-desc { max-width: 100%; } }
                    @media (max-width: 380px) { .xmas-market-grid { grid-auto-rows: 310px; } .xmas-market-title { font-size: 19px; } }
                `}</style>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px,8vw,80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px,2vw,13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>Festive Destinations</span>
                    <h2 style={{ fontSize: 'clamp(30px,5vw,48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Best Christmas Markets You'll Visit</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>
                <div className="xmas-market-grid">
                    {[
                        { tag: "France", title: "Strasbourg", desc: "Often called the 'Capital of Christmas.' Historic market squares, elaborate decorations, and Alsatian holiday traditions dating back to the 16th century." },
                        { tag: "Germany", title: "Cologne", desc: "Set against the backdrop of Cologne Cathedral. Handcrafted gifts, traditional German foods, holiday concerts, and festive lighting." },
                        { tag: "Austria", title: "Vienna", desc: "Vienna transforms into a holiday wonderland. Imperial palaces, elegant decorations, traditional Austrian treats, and classical music." },
                        { tag: "Hungary", title: "Budapest", desc: "One of Eastern Europe's most beautiful holiday celebrations. Local handicrafts, Hungarian cuisine, and illuminated city landmarks." },
                        { tag: "Germany", title: "Nuremberg", desc: "Often considered one of the world's most famous Christmas markets. Gingerbread, handmade ornaments, and historic atmosphere." },
                        { tag: "Germany", title: "Heidelberg", desc: "A romantic Christmas market set beneath the iconic Heidelberg Castle. Charming streets, festive lights, and seasonal specialties." }
                    ].map((dest, idx) => (
                        <div key={idx} className="xmas-market-item">
                            <div className="xmas-market-placeholder">{dest.title.toLowerCase()}-market.jpg</div>
                            <div className="xmas-market-overlay">
                                <span className="xmas-market-tag">{dest.tag}</span>
                                <h3 className="xmas-market-title">{dest.title}</h3>
                                <p className="xmas-market-desc">{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ WHAT IS INCLUDED ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Everything You Need</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>What Is Included on a Viking Christmas Market Cruise?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '24px' }}>
                        {[
                            { title: 'Accommodations', desc: 'Comfortable staterooms with Scandinavian-inspired design.', icon: <Gem size={24} /> },
                            { title: 'Meals', desc: 'Regional cuisine and holiday specialties.', icon: <Utensils size={24} /> },
                            { title: 'Guided Excursions', desc: 'At least one included tour in every port.', icon: <MapPin size={24} /> },
                            { title: 'Wi-Fi', desc: 'Complimentary onboard internet access.', icon: <Globe size={24} /> },
                            { title: 'Onboard Enrichment', desc: 'Destination talks and cultural programs.', icon: <Award size={24} /> },
                            { title: 'Holiday Decorations', desc: 'Viking ships are beautifully decorated throughout the season.', icon: <Snowflake size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '35px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)', textAlign: 'center' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: '#3b82f6' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f1c2e', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIKING LONGSHIPS DURING THE HOLIDAYS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>The Ship Experience</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Viking Longships During the Holidays</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Most holiday itineraries operate aboard Viking Longships. The holiday spirit extends beyond the destinations themselves.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', marginBottom: '24px' }}>Ship Features</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[{ text: "Aquavit Terrace — perfect for scenic cruising", icon: <Utensils size={18} /> }, { text: "Panoramic Lounges — enjoy winter scenery in comfort", icon: <Ship size={18} /> }, { text: "Comfortable Staterooms — ideal after exploring markets", icon: <Gem size={18} /> }, { text: "Elegant Scandinavian Design — warm holiday atmosphere", icon: <Crown size={18} /> }].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#1e293b', fontWeight: '500' }}><div style={{ color: '#3b82f6', display: 'flex', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15,28,46,0.15)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#3b82f6', marginBottom: '24px' }}>Holiday Onboard Experience</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {["Christmas decorations throughout the ship", "Holiday music and festive ambiance", "Seasonal menus with holiday specialties", "Festive treats and special events", "Warm, welcoming holiday spirit"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>"The holiday spirit extends beyond the destinations themselves."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 2: SCENIC HOLIDAY JOURNEY ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>A Festive Journey</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Europe's Holiday Season Like Never Before</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>From sipping Glühwein in historic town squares to exploring beautifully decorated markets and cruising scenic rivers, every day brings new festive discoveries.</p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(15,28,46,0.15)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LKBlZ8C6Nfo" title="Christmas Market Scenic Journey" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST TIME + WHO SHOULD TAKE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Seasonal Guide</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Best Time to Take a Christmas Market Cruise</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }}>
                        {[
                            { season: 'Late November', desc: 'Markets begin opening throughout Europe.', icon: <Calendar size={24} /> },
                            { season: 'Early December', desc: 'Peak holiday atmosphere with smaller crowds.', icon: <Snowflake size={24} /> },
                            { season: 'Mid-December', desc: 'Most festive period with full celebrations. Cruises generally conclude before Christmas.', icon: <Gift size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.season}</h4>
                                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>Who Should Take a Viking Christmas Market Cruise?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                            {['Couples', 'Retirees', 'Holiday enthusiasts', 'First-time river cruisers', 'Cultural travelers', 'Food lovers', 'Christmas market fans', 'Travelers seeking festive experiences'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '60px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /><span style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY BOOK WITH TRIPS & SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Expert Guidance</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Why Book with Trips & Ships Luxury Travel?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Christmas Market cruises are among Viking's most popular sailings and often sell out well in advance.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: 'Viking Expertise', desc: 'Viking cruise expertise and cabin selection assistance for the best experience.', icon: <Star size={24} /> },
                            { title: 'Travel Planning', desc: 'Airfare planning, pre- and post-cruise arrangements, and travel protection recommendations.', icon: <Globe size={24} /> },
                            { title: 'Personalized Service', desc: 'Personalized service before and after travel ensuring a seamless holiday vacation.', icon: <Heart size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Viking Christmas Market Cruises:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {vikingFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                                <div className="medi-faq-question-row"><span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span><span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '\u2212' : '+'}</span></div>
                                {mediActiveFaq === index && (<p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>{faq.answer}</p>)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ RELATED VIKING CRUISES (SEAMLESS EDITORIAL GRID) ═══════════════ */}
            <section className="viking-related-seamless">
                <style>{`
        .viking-related-seamless {
            padding: clamp(60px, 10vw, 100px) 0;
            background-color: #ffffff;
            font-family: 'Inter', -apple-system, sans-serif;
        }
        .viking-related-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            border: 1px solid #e2e8f0; /* Thin outer frame */
            display: flex;
            flex-direction: column;
        }
        .viking-related-intro {
            padding: 40px;
            background-color: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 20px;
        }
        .viking-related-intro h2 {
            font-size: 28px;
            font-weight: 800;
            color: #0f1c2e;
            margin: 0;
            letter-spacing: -0.03em;
        }
        .viking-related-intro span {
            color: #3b82f6;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        /* The Seamless Grid - ZERO GAP */
        .viking-related-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0; 
        }

        @media (max-width: 768px) {
            .viking-related-grid {
                grid-template-columns: 1fr;
            }
        }

        .viking-tile-link {
            text-decoration: none;
            display: block;
            background-color: #ffffff;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-right: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            position: relative;
            overflow: hidden;
        }

        /* Clean up borders so the grid doesn't have double thickness or outside overflow */
        @media (min-width: 769px) {
            .viking-tile-link:nth-child(2n) { border-right: none; }
            .viking-tile-link:nth-child(3), .viking-tile-link:nth-child(4) { border-bottom: none; }
        }
        @media (max-width: 768px) {
            .viking-tile-link { border-right: none; }
            .viking-tile-link:last-child { border-bottom: none; }
        }

        .viking-tile-card {
            padding: clamp(40px, 6vw, 60px);
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
        }

        /* Hover Reveal Background */
        .viking-tile-link:hover {
            background-color: #0f1c2e; /* Dark Viking Navy */
        }

        .viking-tile-icon-box {
            width: 50px;
            height: 50px;
            background-color: #eff6ff;
            color: #3b82f6;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            transition: all 0.4s ease;
        }

        .viking-tile-link:hover .viking-tile-icon-box {
            background-color: #3b82f6;
            color: #ffffff;
            transform: scale(1.1) rotate(5deg);
        }

        .viking-tile-card h3 {
            font-size: 22px;
            font-weight: 700;
            color: #0f1c2e;
            margin: 0 0 12px 0;
            transition: color 0.4s ease;
        }

        .viking-tile-link:hover h3 {
            color: #ffffff;
        }

        .viking-tile-card p {
            font-size: 15px;
            line-height: 1.6;
            color: #64748b;
            margin: 0;
            transition: color 0.4s ease;
            flex-grow: 1;
        }

        .viking-tile-link:hover p {
            color: rgba(255, 255, 255, 0.7);
        }

        .viking-tile-action {
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #3b82f6;
            transition: color 0.4s ease, gap 0.4s ease;
        }

        .viking-tile-link:hover .viking-tile-action {
            color: #ffffff;
            gap: 15px;
        }
    `}</style>

                <div className="viking-related-wrapper">
                    <div className="viking-related-intro">
                        <div>
                            <span>Resource Center</span>
                            <h2>The Viking Series</h2>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '500' }}>[ 04 Guides ]</div>
                    </div>

                    <div className="viking-related-grid">
                        {[
                            { title: 'Viking River Cruises', desc: 'The complete portfolio of Viking\'s world-class river journeys across Europe.', path: '/viking-river-cruises', icon: <Ship size={24} /> },
                            { title: 'Danube River Cruises', desc: 'Explore the heart of Europe through grand capitals and historic villages.', path: '/viking-danube-river-cruises', icon: <Anchor size={24} /> },
                            { title: 'Rhine River Cruises', desc: 'Sail past fairytale castles and lush vineyards on Europe’s legendary waterway.', path: '/viking-rhine-river-cruises', icon: <Snowflake size={24} /> },
                            { title: 'Is Viking Worth It', desc: 'A transparent analysis of the value, inclusions, and experience on board.', path: '/is-viking-worth-it', icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <Link key={i} to={item.path} className="viking-tile-link">
                                <div className="viking-tile-card">
                                    <div className="viking-tile-icon-box">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className="viking-tile-action">
                                        Explore Guide <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-xmas-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Celebrate the Holidays on a <br /> Viking Christmas Market Cruise</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">A Viking Christmas Market Cruise offers one of the most magical ways to experience Europe's holiday traditions. From sipping Glühwein in historic town squares to exploring beautifully decorated markets, every day brings new festive discoveries.</p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>Whether you're celebrating a special holiday season or fulfilling a lifelong travel dream, a Viking Christmas Market Cruise delivers unforgettable memories.</p>
                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>Plan your perfect holiday cruise:</span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {['Christmas on the Rhine', 'Christmas Time on the Danube', 'Danube Waltz Christmas', 'First-time holiday river cruise', 'Festive European getaway'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} /><span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>Contact Trips & Ships Luxury Travel today to reserve your Viking Christmas Market Cruise.</p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}><Phone size={18} />Schedule a Christmas Market Cruise Consultation Today</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingChristmasMarketCruises
