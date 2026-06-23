import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Utensils, Award,
    Mountain, Snowflake, Sun, TreePine, Camera, Bird,
    GraduationCap,
    Clock,
    Mic,
    FileText
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Imports - local assets (Unique, no repeats)
import icelandHero1 from '../../assets/VikingIcelandCruises/Amsterdam, The Netherlands_2026-04-13_18-45-34.jpg'
import icelandHero2 from '../../assets/VikingIcelandCruises/Angkor, Cambodia_2026-04-13_18-45-47.jpg'
import icelandHero3 from '../../assets/VikingIcelandCruises/Apostle Islands, Wisconsin, USA_2026-04-13_19-00-46.jpg'

import itinImg1 from '../../assets/VikingIcelandCruises/Apostle Islands, Wisconsin, USA_2026-04-13_19-00-47.jpg'
import itinImg2 from '../../assets/VikingIcelandCruises/Aquavit Terrace_2026-04-13_18-47-26.jpg'
import itinImg3 from '../../assets/VikingIcelandCruises/Aquavit Terrace_2026-04-13_18-47-27.jpg'

import destImg1 from '../../assets/VikingIcelandCruises/Expedition Ship - Antarctica_2026-04-13_19-00-51.jpg'
import destImg2 from '../../assets/VikingIcelandCruises/Expedition Ship - Antarctica_2026-04-13_19-01-02.jpg'
import destImg3 from '../../assets/VikingIcelandCruises/Expedition Ship - Antarctica_2026-04-13_19-01-03.jpg'
import destImg4 from '../../assets/VikingIcelandCruises/Niagara & The Great Lakes_2026-04-13_18-44-07.jpg'

import profileAH from '../../assets/VikingIcelandCruises/Profile_AH.jpg'

function VikingIcelandCruises() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [
        icelandHero1,
        icelandHero2,
        icelandHero3
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
        const handleResize = () => { setIsMobileViewport(window.innerWidth < 992) }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => { setMediActiveFaq(mediActiveFaq === index ? null : index) }

    const vikingFaqs = [
        { question: "What is the best Viking Iceland Cruise itinerary?", answer: "Iceland's Natural Beauty is one of Viking's most popular Iceland-focused itineraries." },
        { question: "How long are Viking Iceland Cruises?", answer: "Most itineraries range from 8 to 22 days depending on destinations visited." },
        { question: "Do Viking Iceland Cruises visit Reykjavik?", answer: "Yes. Most Iceland itineraries begin, end, or include significant time in Reykjavik." },
        { question: "Can you see the Northern Lights on a Viking Iceland Cruise?", answer: "Late-season sailings may offer Northern Lights viewing opportunities, although sightings are never guaranteed." },
        { question: "What wildlife can I see in Iceland?", answer: "Whales, puffins, seals, and numerous seabird species are commonly seen." },
        { question: "Is Iceland good for first-time cruise travelers?", answer: "Yes. Iceland offers a comfortable and highly rewarding cruise experience." },
        { question: "Are shore excursions included?", answer: "Viking includes at least one guided excursion in every port." },
        { question: "What is the best month for an Iceland cruise?", answer: "June through September are generally considered the best months." },
        { question: "Are Viking Iceland Cruises adults only?", answer: "Viking's ocean cruises are designed primarily for adults and do not cater to young children." },
        { question: "Can I visit the Blue Lagoon?", answer: "Yes. Many Reykjavik excursions include Blue Lagoon experiences." },
        { question: "Are Iceland cruises physically demanding?", answer: "Many excursions involve walking, though activity levels vary and options are available for different mobility levels." },
        { question: "What should I pack for an Iceland cruise?", answer: "Layered clothing, waterproof outerwear, comfortable walking shoes, and cold-weather accessories are recommended." },
        { question: "Do Iceland cruises sail around the entire island?", answer: "Some itineraries circumnavigate Iceland while others visit select regions." },
        { question: "How far in advance should I book?", answer: "Booking 12–18 months in advance often provides the best cabin selection and pricing opportunities." },
        { question: "Is Iceland expensive?", answer: "Iceland can be costly for independent travelers, making a cruise an excellent value for experiencing the destination." }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", "@id": "https://www.tripsandships.com/viking-iceland-cruises", "url": "https://www.tripsandships.com/viking-iceland-cruises", "name": "Viking Iceland Cruises", "headline": "Viking Iceland Cruises | Explore Iceland & Northern Europe by Sea", "description": "Explore Viking Iceland Cruises featuring Reykjavik, glaciers, waterfalls, volcanoes, wildlife, and Northern Europe adventures.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" } },
            { "@type": "TravelAgency", "@id": "#trips-ships", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "description": "Luxury cruise and expedition travel planning specialists.", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"], "founder": { "@id": "#angela-hughes" } },
            { "@type": "Organization", "@id": "#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
            { "@type": "Person", "@id": "#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@id": "#trips-ships" } },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" }, { "@type": "ListItem", "position": 2, "name": "Ocean Cruises", "item": "https://www.tripsandships.com/ocean-cruises" }, { "@type": "ListItem", "position": 3, "name": "Viking Iceland Cruises", "item": "https://www.tripsandships.com/viking-iceland-cruises" }] },
            { "@type": "Article", "headline": "Viking Iceland Cruises", "description": "Expert guide to Viking Iceland Cruises covering itineraries, destinations, wildlife, natural wonders, and why travelers choose Viking for Iceland cruising.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" }, "keywords": ["Viking Iceland Cruises", "Iceland Cruises Viking", "Viking Ocean Cruises Iceland", "Iceland and Norway Cruises", "Viking Cruises Reykjavik", "Luxury Iceland Cruises", "Iceland Circumnavigation Cruise", "Viking Northern Europe Cruises"] },
            { "@type": "FAQPage", "mainEntity": vikingFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Iceland Cruises | Explore Iceland & Northern Europe by Sea</title>
                <meta name="title" content="Viking Iceland Cruises | Explore Iceland & Northern Europe by Sea" />
                <meta name="description" content="Discover Viking Iceland Cruises featuring Reykjavik, Akureyri, Isafjordur, waterfalls, volcanoes, glaciers, and Northern Europe. Explore itineraries, excursions, and expert cruise planning." />
                <meta name="keywords" content="Viking Iceland Cruises, Iceland Cruises Viking, Viking Ocean Cruises Iceland, Iceland and Norway Cruises, Viking Cruises Reykjavik, Luxury Iceland Cruises, Iceland Circumnavigation Cruise, Viking Northern Europe Cruises, Iceland Cruise Vacations, Northern Lights Cruise, Iceland Wildlife Cruise, Blue Lagoon Cruise, Akureyri Cruise, Isafjordur Cruise" />
                <link rel="canonical" href="https://www.tripsandships.com/viking-iceland-cruises" />
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
                    <div className="medi-hero-eyebrow-tag"><Mountain size={16} /><span>Glaciers, Volcanoes, Waterfalls & Northern Lights</span></div>
                    <h1 className="medi-hero-main-title">Viking Iceland Cruises</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px, 2.5vw, 20px)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', textAlign: 'center' }}>
                        Discover the Land of Fire and Ice aboard Viking's award-winning ocean ships.
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
                `}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>
                        <div className="medi-premium-editorial-block" style={{ maxHeight: isMobileViewport ? 'none' : '650px', overflowY: isMobileViewport ? 'visible' : 'auto', paddingRight: isMobileViewport ? '0' : '20px', textAlign: window.innerWidth <= 1024 ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
                            <span className="medi-premium-mini-badge" style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '10px' }}>Land of Fire and Ice</span>
                            <h2 className="medi-premium-heading" style={{ color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', margin: '0 0 20px 0' }}>Viking Iceland Cruises: Discover the Land of Fire and Ice</h2>
                            <div className="medi-premium-separator" style={{ width: '80px', height: '3px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px' }}></div>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>Iceland is unlike anywhere else on Earth. From dramatic waterfalls and active volcanoes to geothermal lagoons, black sand beaches, and glacier-carved landscapes, this Nordic island nation offers some of the world's most extraordinary natural scenery.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>A Viking Iceland Cruise combines immersive destination experiences with the comfort and elegance of Viking's award-winning ocean ships, allowing travelers to explore Iceland's most iconic regions while enjoying luxury accommodations and enriching onboard experiences.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>At Trips & Ships Luxury Travel, we help travelers choose the perfect Viking Iceland itinerary, whether you're seeking a complete circumnavigation of Iceland or a broader Northern Europe voyage.</p>
                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>Benefits of Viking Iceland Cruises:</p>
                                <div className="medi-immersion-cards-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
                                    {[{ t: "Smaller Ocean Ships", i: <Ship size={20} /> }, { t: "Destination Immersion", i: <Globe size={20} /> }, { t: "Included Excursions", i: <MapPin size={20} /> }, { t: "Overnight Stays", i: <Calendar size={20} /> }, { t: "Scandinavian Luxury", i: <Gem size={20} /> }, { t: "Cultural Enrichment", i: <Award size={20} /> }].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item"><div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>{item.i}</div><span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: window.innerWidth <= 1024 ? '40px' : '0', borderLeftColor: '#274472' }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row"><div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div><div><span className="medi-expert-card-subtitle">CRUISE EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div></div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help travelers discover Iceland's extraordinary landscapes — from volcanoes and glaciers to geothermal lagoons and Northern Lights.</p>
                                <div className="medi-premium-expert-quote-box"><span className="medi-quote-mark" style={{ color: '#274472' }}>"</span><p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps travelers plan Viking Iceland cruises that deliver extraordinary Nordic adventures.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY ICELAND IS FASCINATING ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Extraordinary Natural Wonders</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Why Iceland Is One of the World's Most Fascinating Cruise Destinations</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>Iceland offers an incredible variety of natural wonders. Travelers experience extraordinary landscapes that exist nowhere else on Earth.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} style={{ color: '#3b82f6' }} /> Iceland's Natural Wonders</p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[{ text: "Active Volcanoes", icon: <Mountain size={18} /> }, { text: "Massive Glaciers", icon: <Snowflake size={18} /> }, { text: "Dramatic Waterfalls", icon: <TreePine size={18} /> }, { text: "Geothermal Hot Springs", icon: <Sun size={18} /> }, { text: "Whales & Puffins", icon: <Bird size={18} /> }, { text: "Northern Lights", icon: <Sparkles size={18} /> }].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}><div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div><span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span></div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>The Viking Approach</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>Iceland is a destination best explored slowly. Viking's destination-focused approach allows travelers to experience Iceland's landscapes, culture, history, and natural wonders in depth.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Meaningful destination experiences", "Overnight stays in key ports", "Included excursions in every port", "Scandinavian-inspired comfort"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>"Rather than rushing between destinations, Viking emphasizes meaningful experiences."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ITINERARY SHOWCASE ═══════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CRUISE PLANNING GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Most Popular Viking Iceland Itineraries</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>Viking offers several Iceland itineraries, each showcasing different aspects of this extraordinary Nordic island.</p>
                    </div>
                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["Iceland's Natural Beauty", "Iceland, Greenland & Canada", "British Isles & Iceland"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`} onClick={() => setMediSelectedItinerary(idx)}>
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span><div className="medi-itinerary-tab-meta"><span className="medi-itinerary-tab-title">{title}</span></div><ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                <img
                                    src={[itinImg1, itinImg2, itinImg3][mediSelectedItinerary]}
                                    alt="Viking Itinerary Showcase"
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">ITINERARY SPOTLIGHT</span>
                            </div>
                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{["Iceland's Natural Beauty", "Iceland, Greenland & Canada", "British Isles & Iceland"][mediSelectedItinerary]}</h3>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Quick Facts:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[["8 Days — Roundtrip from Reykjavik", "Iceland's scenic coastline", "Waterfalls and geothermal attractions"], ["15+ Days — Transatlantic voyage", "Iceland, Greenland, Newfoundland", "Arctic landscapes with North Atlantic exploration"], ["Combined with Scotland & England", "Northern Ireland & Faroe Islands", "History, culture, and scenic cruising"]][mediSelectedItinerary].map((feature, i) => (<li key={i}><Sparkles size={14} className="medi-itinerary-detail-icon" /><span>{feature}</span></li>))}
                                        </ul>
                                    </div>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[["Reykjavik", "Akureyri", "Isafjordur", "Seydisfjordur", "Geothermal Sites"], ["Greenland", "Newfoundland", "Canadian Maritimes", "Arctic Ice"], ["Scotland", "Northern Ireland", "England", "Faroe Islands"]][mediSelectedItinerary].map((tag, i) => (<span key={i} className="medi-itinerary-details-chip"><MapPin size={12} className="medi-itinerary-chip-icon" /><span>{tag}</span></span>))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '15px', color: '#64748b', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                                        {mediSelectedItinerary === 0 && "An excellent introduction to Iceland's diverse regions."}
                                        {mediSelectedItinerary === 1 && "A remarkable voyage combining Arctic landscapes with North Atlantic exploration."}
                                        {mediSelectedItinerary === 2 && "Perfect for travelers interested in history, culture, and scenic cruising."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ TOP ICELAND DESTINATIONS ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#0a1120', fontFamily: 'sans-serif', overflow: 'hidden' }}>
                <style>{`
                    .iceland-dest-grid { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 380px; gap: 24px; max-width: 1100px; margin: 0 auto; }
                    .iceland-dest-item { position: relative; border-radius: 24px; overflow: hidden; background-color: #1c2f4a; border: 1px solid rgba(255,255,255,0.1); }
                    .iceland-dest-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,17,32,1) 0%, rgba(10,17,32,0.85) 30%, rgba(10,17,32,0.2) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; padding: clamp(24px,5vw,40px) clamp(20px,4vw,30px); color: #fff; z-index: 2; text-align: left; }
                    .iceland-dest-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; }
                    .iceland-dest-title { font-size: clamp(20px,3vw,24px); font-weight: 700; margin: 0 0 10px 0; line-height: 1.2; color: #fff; text-shadow: 0 2px 15px rgba(0,0,0,0.8); }
                    .iceland-dest-desc { font-size: 14px; color: rgba(255,255,255,0.9); line-height: 1.6; margin: 0; max-width: 400px; }
                    .iceland-dest-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a365d 0%, #0f1c2e 100%); color: #3b82f6; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; }
                    @media (max-width: 650px) { .iceland-dest-grid { grid-template-columns: 1fr; grid-auto-rows: 320px; gap: 16px; } .iceland-dest-overlay { padding: 25px 20px; } .iceland-dest-desc { max-width: 100%; } }
                `}</style>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px,8vw,80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px,2vw,13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>Nordic Ports & Landmarks</span>
                    <h2 style={{ fontSize: 'clamp(30px,5vw,48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Top Iceland Destinations on Viking Cruises</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>
                <div className="iceland-dest-grid">
                    {[
                        { tag: "Capital City", title: "Reykjavik", desc: "Hallgrímskirkja Church, Harpa Concert Hall, Blue Lagoon excursions, Icelandic cuisine, and Viking history. Many itineraries begin or end here." },
                        { tag: "North Iceland", title: "Akureyri", desc: "Known as the 'Capital of North Iceland.' Godafoss Waterfall, Lake Myvatn, geothermal landscapes, and whale watching." },
                        { tag: "Westfjords", title: "Isafjordur", desc: "Located in Iceland's remote Westfjords. Fjord landscapes, hiking, traditional culture, and wildlife viewing. A hidden gem." },
                        { tag: "East Iceland", title: "Seydisfjordur", desc: "One of Iceland's most picturesque villages. Colorful houses, mountain scenery, art galleries, and waterfalls. Beautiful fjord approach." }
                    ].map((dest, idx) => (
                        <div key={idx} className="iceland-dest-item">
                            <img
                                src={[destImg1, destImg2, destImg3, destImg4][idx]}
                                alt={dest.title}
                                className="iceland-dest-img"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 1 }}
                            />
                            <div className="iceland-dest-overlay">
                                <span className="iceland-dest-tag">{dest.tag}</span>
                                <h3 className="iceland-dest-title">{dest.title}</h3>
                                <p className="iceland-dest-desc">{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ NATURAL WONDERS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Land of Fire and Ice</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Natural Wonders You'll Experience</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}><Mountain size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Waterfalls & Volcanoes</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Fire and Water</p></div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Iceland's volcanic landscapes and thousands of waterfalls create some of the most dramatic scenery on Earth.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Godafoss & Gullfoss waterfalls", "Dettifoss — Europe's most powerful waterfall", "Active volcanic landscapes", "Geothermal lagoons & hot springs"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}><Snowflake size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Glaciers & Geothermal</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Ice and Heat</p></div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Massive ice fields cover 11% of Iceland, while geothermal activity creates hot springs, geysers, and steam vents throughout the island.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Glacier viewpoints & exploration", "The famous Blue Lagoon", "Geysers and steam vents", "Hot springs & geothermal pools"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WILDLIFE ENCOUNTERS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Coastal Wildlife</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Wildlife Encounters in Iceland</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
                        {[
                            { title: 'Whales', desc: 'Humpback, minke whales, and orcas frequent Icelandic waters.', icon: <Ship size={24} /> },
                            { title: 'Puffins', desc: 'Millions of puffins nest along Iceland\'s coastline during season.', icon: <Bird size={24} /> },
                            { title: 'Seals', desc: 'Frequently spotted along Iceland\'s rocky coastline.', icon: <Camera size={24} /> },
                            { title: 'Seabirds', desc: 'Numerous species thrive throughout the region.', icon: <TreePine size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '28px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.title}</h4>
                                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIKING OCEAN SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>The Ship Experience</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Viking Ocean Ships</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Most Iceland itineraries operate aboard Viking's award-winning ocean fleet.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', marginBottom: '24px' }}>Ship Features</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[{ text: "Adults-Oriented Atmosphere", icon: <Crown size={18} /> }, { text: "Elegant Scandinavian Design", icon: <Gem size={18} /> }, { text: "Inclusive Amenities", icon: <Award size={18} /> }, { text: "Destination-Focused Experiences", icon: <Globe size={18} /> }].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#1e293b', fontWeight: '500' }}><div style={{ color: '#3b82f6', display: 'flex', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15,28,46,0.15)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#3b82f6', marginBottom: '24px' }}>Why Viking for Iceland</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {["Smaller ships access remote ports", "Overnight stays maximize exploration", "Included excursions in every port", "Enrichment programs and lectures", "Exceptional service throughout"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>"The emphasis remains on exploration rather than onboard distractions."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST TIME + NORTHERN LIGHTS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Seasonal Guide</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Best Time for a Viking Iceland Cruise</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(4, 1fr)', gap: '20px', marginBottom: '50px' }}>
                        {[
                            { season: 'May', desc: 'Longer daylight hours, spring landscapes, fewer crowds.', icon: <Sun size={24} /> },
                            { season: 'June\u2013July', desc: 'Peak season with midnight sun, comfortable temps, excellent wildlife.', icon: <Calendar size={24} /> },
                            { season: 'August', desc: 'Puffin viewing, scenic exploration, outdoor activities.', icon: <Bird size={24} /> },
                            { season: 'September', desc: 'Fall colors, smaller crowds, Northern Lights potential.', icon: <Sparkles size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '28px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.season}</h4>
                                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ backgroundColor: 'rgba(59,130,246,0.08)', borderRadius: '20px', padding: '30px', border: '1px solid rgba(59,130,246,0.2)', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>Northern Lights Cruises</h3>
                        <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.7', margin: 0, maxWidth: '700px', margin: '0 auto' }}>Some late-season Viking itineraries provide opportunities to witness the Aurora Borealis. While sightings depend on weather, solar activity, and darkness levels, Iceland is one of the best destinations in the world for Northern Lights viewing.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO SHOULD TAKE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Is This You?</span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>Who Should Take a Viking Iceland Cruise?</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {['Nature lovers', 'Photography enthusiasts', 'Adventure travelers', 'Wildlife enthusiasts', 'Couples', 'Retirees', 'Cultural travelers', 'Luxury cruise guests', 'Northern Europe explorers'].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', backgroundColor: '#f8fafc', borderRadius: '60px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /><span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY BOOK WITH TRIPS & SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Expert Guidance</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Why Book Your Viking Iceland Cruise with <br />Trips & Ships Luxury Travel?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Iceland cruises often require careful planning due to limited seasonal availability.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: 'Personalized Planning', desc: 'Personalized itinerary recommendations, Viking cruise expertise, and dedicated travel support.', icon: <Star size={24} /> },
                            { title: 'Travel Coordination', desc: 'Airfare coordination, Reykjavik hotel arrangements, and pre- and post-cruise planning.', icon: <Globe size={24} /> },
                            { title: 'Travel Protection', desc: 'Travel protection guidance and expert support ensuring you experience the very best of Iceland.', icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
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

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Viking Iceland Cruises:<br />Frequently Asked Questions</h2>
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

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-iceland-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Experience Iceland with <br /> Viking Cruises</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">A Viking Iceland Cruise offers an extraordinary opportunity to explore one of the world's most captivating destinations. From glacier-carved fjords and geothermal landscapes to puffin colonies and vibrant Nordic culture, every day reveals another side of Iceland's remarkable beauty.</p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>Whether you're pursuing a bucket-list adventure, searching for Northern Lights, or exploring Northern Europe in luxury, Viking delivers an unforgettable journey through the Land of Fire and Ice.</p>
                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>Plan your perfect Iceland cruise:</span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {['Iceland circumnavigation', 'Iceland, Greenland & Canada', 'British Isles & Iceland', 'Northern Lights voyage', 'Wildlife & nature expedition'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} /><span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>Contact Trips & Ships Luxury Travel today to find the perfect Viking Iceland Cruise itinerary.</p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}><Phone size={18} />Schedule a Viking Iceland Cruise Consultation Today</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingIcelandCruises
