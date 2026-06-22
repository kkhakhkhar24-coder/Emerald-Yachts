import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Gem, Phone,
    Globe, Utensils, Award, Crown,
    Heart, Minus, ChevronRight, Wine, Bike,
    DollarSign
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image imports from various cruise folders
import heroBg from '../../assets/VikingRhineRiverCruises/RhineGorge.jpg'
import heroBg2 from '../../assets/Vikingmediterraneancruises/Exterior_2026-04-13_19-02-40.jpg'
import heroBg3 from '../../assets/VikingIcelandCruises/Amsterdam, The Netherlands_2026-04-13_18-45-34.jpg'
import vikingShipImg from '../../assets/VikingRhineRiverCruises/VikingLongships.jpg'
import amaShipPlaceholderImg from '../../assets/Vikingmediterraneancruises/Exterior_2026-04-13_19-02-39.jpg'
import vikingDiningImg from '../../assets/Vikingalaskacruises/The Restaurant_2026-04-13_18-49-21.jpg'
import amaDiningPlaceholderImg from '../../assets/VikingIcelandCruises/Aquavit Terrace_2026-04-13_18-47-26.jpg'
import vikingExcursionImg from '../../assets/VikingRhineRiverCruises/Cologne.jpg'
import amaExcursionImg from '../../assets/Vikingalaskacruises/Budapest, Hungary_2026-04-13_18-46-22.jpg'
import wellnessActiveImg from '../../assets/Vikingmediterraneancruises/Infinity Pool_2026-04-13_18-48-12.jpg'
import angelaHughesImg from '../../assets/Angela_Hughes.jpg'

function VikingVsAmaWaterways() {
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [isMobileViewport, setIsMobileViewport] = useState(false)
    const [currentHero, setCurrentHero] = useState(0)

    const heroImages = [heroBg, heroBg2, heroBg3]

    useEffect(() => {
        const handleResize = () => { setIsMobileViewport(window.innerWidth < 992) }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const mediToggleFaq = (index) => { setMediActiveFaq(mediActiveFaq === index ? null : index) }

    const vikingFaqs = [
        { question: "Is AmaWaterways more luxurious than Viking?", answer: "Generally, yes. AmaWaterways is often considered slightly more upscale, with enhanced dining, larger cabins, and more personalized service." },
        { question: "Which river cruise line has better food?", answer: "AmaWaterways is frequently praised for having one of the strongest culinary programs in river cruising." },
        { question: "Is Viking cheaper than AmaWaterways?", answer: "In many cases, Viking offers lower starting prices, though promotions and itineraries vary." },
        { question: "Which is better for first-time river cruisers?", answer: "Viking is often recommended for first-time river cruise travelers." },
        { question: "Which cruise line has larger cabins?", answer: "AmaWaterways generally offers larger average cabin sizes." },
        { question: "Does AmaWaterways include more excursions?", answer: "Yes. Ama often provides multiple excursion options and active experiences in each port." },
        { question: "Are Viking cruises adults only?", answer: "Viking is designed primarily for adults and does not cater to young children." },
        { question: "Which cruise line has better service?", answer: "Both offer excellent service, but AmaWaterways is often viewed as more personalized." },
        { question: "Which line is better for active travelers?", answer: "AmaWaterways offers more biking, hiking, and wellness-focused experiences." },
        { question: "Does Viking have specialty restaurants?", answer: "Most Viking ships focus on a primary dining venue, while AmaWaterways offers additional specialty dining experiences." },
        { question: "Which cruise line offers more itineraries?", answer: "Viking operates a larger fleet and generally offers more itinerary choices worldwide." },
        { question: "Are drinks included on both cruise lines?", answer: "Yes. Both include select beverages, though inclusions vary by sailing and destination." },
        { question: "Which line is better for couples?", answer: "Both are excellent, though many couples seeking a boutique luxury atmosphere prefer AmaWaterways." },
        { question: "Are gratuities included?", answer: "Policies vary, so travelers should review current fare inclusions when booking." },
        { question: "How far in advance should I book?", answer: "Booking 12–18 months in advance often provides the best cabin selection and promotional pricing." }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", "@id": "https://www.tripsandships.com/viking-vs-amawaterways", "url": "https://www.tripsandships.com/viking-vs-amawaterways", "name": "Viking vs AmaWaterways", "headline": "Viking vs AmaWaterways | Which River Cruise Line Is Better?", "description": "Compare Viking and AmaWaterways river cruises including ships, dining, excursions, pricing, service, and itineraries.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" } },
            { "@type": "ComparisonPage", "name": "Viking vs AmaWaterways", "url": "https://www.tripsandships.com/viking-vs-amawaterways", "about": [{ "@type": "Organization", "name": "Viking River Cruises" }, { "@type": "Organization", "name": "AmaWaterways" }] },
            { "@type": "TravelAgency", "@id": "#trips-ships", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "description": "Luxury travel agency specializing in river cruise comparisons and European river cruise planning.", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"], "founder": { "@id": "#angela-hughes" } },
            { "@type": "Organization", "@id": "#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
            { "@type": "Person", "@id": "#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@id": "#trips-ships" } },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" }, { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" }, { "@type": "ListItem", "position": 3, "name": "Viking vs AmaWaterways", "item": "https://www.tripsandships.com/viking-vs-amawaterways" }] },
            { "@type": "FAQPage", "mainEntity": vikingFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    const comparisonData = [
        { feature: "Founded", viking: "1997", ama: "2002" },
        { feature: "Fleet Size", viking: "Larger Fleet", ama: "Smaller Fleet" },
        { feature: "Passenger Capacity", viking: "Around 190 Guests", ama: "Around 150–170 Guests" },
        { feature: "Atmosphere", viking: "Contemporary & Relaxed", ama: "Luxury & Personalized" },
        { feature: "Included Excursions", viking: "Yes", ama: "Yes, Often More Choices" },
        { feature: "Specialty Dining", viking: "Limited", ama: "More Extensive" },
        { feature: "Wellness Programs", viking: "Basic", ama: "Strong Focus" },
        { feature: "Active Excursions", viking: "Available", ama: "Extensive" },
        { feature: "Adult Focus", viking: "Yes", ama: "Yes" },
        { feature: "Luxury Level", viking: "Premium", ama: "Premium-Plus" }
    ]

    return (
        <>
            <Helmet>
                <title>Viking vs AmaWaterways | Which River Cruise Line Is Better?</title>
                <meta name="title" content="Viking vs AmaWaterways | Which River Cruise Line Is Better?" />
                <meta name="description" content="Compare Viking vs AmaWaterways river cruises including ships, dining, excursions, pricing, cabins, destinations, and inclusions to find the best river cruise for your travel style." />
                <meta name="keywords" content="Viking vs AmaWaterways, Viking River Cruises vs AmaWaterways, Best River Cruise Line, AmaWaterways Review, Viking River Cruises Review, River Cruise Comparison, Luxury River Cruises Europe, AmaWaterways vs Viking, European River Cruises" />
                <link rel="canonical" href="https://www.tripsandships.com/viking-vs-amawaterways" />
                <script type="application/ld+json">{JSON.stringify(vikingSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag"><Anchor size={16} /><span>River Cruise Comparison, Ships, Dining & Experiences</span></div>
                    <h1 className="medi-hero-main-title">Viking vs AmaWaterways</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px, 2.5vw, 20px)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', textAlign: 'center' }}>
                        Which river cruise line is right for you? Let's explore the differences.
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
                            <span className="medi-premium-mini-badge" style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '10px' }}>Head-to-Head Comparison</span>
                            <h2 className="medi-premium-heading" style={{ color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', margin: '0 0 20px 0' }}>Viking vs AmaWaterways: Which River Cruise Line Is Right for You?</h2>
                            <div className="medi-premium-separator" style={{ width: '80px', height: '3px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px' }}></div>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>Two names consistently rise to the top when travelers begin researching European river cruises: Viking River Cruises and AmaWaterways.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>Both cruise lines offer exceptional experiences, beautiful ships, immersive destinations, and outstanding service. However, they cater to slightly different travelers and vacation styles.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>While Viking is known for its destination-focused approach and broad appeal, AmaWaterways often attracts travelers seeking a more upscale, personalized, and active river cruise experience.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>At Trips & Ships Luxury Travel, we help travelers compare the industry's leading river cruise lines to find the perfect fit.</p>
                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>Key Comparison Areas:</p>
                                <div className="medi-immersion-cards-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
                                    {[{ t: "Ships & Cabins", i: <Ship size={20} /> }, { t: "Dining & Cuisine", i: <Utensils size={20} /> }, { t: "Excursions & Activities", i: <MapPin size={20} /> }, { t: "Pricing & Value", i: <Award size={20} /> }, { t: "Service & Atmosphere", i: <Heart size={20} /> }, { t: "Destinations & Itineraries", i: <Globe size={20} /> }].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item"><div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>{item.i}</div><span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: window.innerWidth <= 1024 ? '40px' : '0', borderLeftColor: '#274472' }}>
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
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help travelers compare river cruise lines objectively to find the perfect match for their travel style, budget, and expectations.</p>
                                <div className="medi-premium-expert-quote-box"><span className="medi-quote-mark" style={{ color: '#274472' }}>"</span><p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry, Angela Hughes helps travelers navigate the differences between Viking and AmaWaterways to select the ideal river cruise experience.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK COMPARISON TABLE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>At a Glance</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Quick Comparison Overview</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ borderRadius: window.innerWidth <= 360 ? '16px' : '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.05)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', backgroundColor: '#0f1c2e', padding: '16px 24px', color: '#ffffff', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <span>Feature</span><span style={{ textAlign: 'center' }}>Viking</span><span style={{ textAlign: 'center' }}>AmaWaterways</span>
                        </div>
                        {comparisonData.map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '14px 24px', borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff', alignItems: 'center' }}>
                                <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '15px' }}>{row.feature}</span>
                                <span style={{ textAlign: 'center', color: '#475569', fontSize: '14px' }}>{row.viking}</span>
                                <span style={{ textAlign: 'center', color: '#475569', fontSize: '14px' }}>{row.ama}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ SHIP COMPARISON ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Ship Comparison</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Ships & Cabins</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: 'rgba(59,130,246,0.08)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '2px solid rgba(59,130,246,0.3)' }}>
                            <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                                <img src={vikingShipImg} alt="Viking Longship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ship size={24} style={{ color: '#fff' }} /></div><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Viking Longships</h3></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{[{ l: 'Passengers', v: '~190 guests' }, { l: 'Design', v: 'Scandinavian d\u00e9cor' }, { l: 'Cabin Types', v: 'Standard to Explorer Suites' }, { l: 'Key Feature', v: 'Aquavit Terrace' }, { l: 'Windows', v: 'Floor-to-ceiling' }].map((r, i) => (<div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span><span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '500' }}>{r.v}</span></div>))}</div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                                <img src={amaShipPlaceholderImg} alt="AmaWaterways Ship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Crown size={24} style={{ color: '#94a3b8' }} /></div><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>AmaWaterways Ships</h3></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{[{ l: 'Passengers', v: '~150\u2013170 guests' }, { l: 'Design', v: 'Boutique luxury' }, { l: 'Cabin Types', v: 'Twin-balcony cabins' }, { l: 'Key Feature', v: 'Heated pools' }, { l: 'Cabin Size', v: 'Larger average space' }].map((r, i) => (<div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span><span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>{r.v}</span></div>))}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7', margin: 0 }}><strong style={{ color: '#ffffff' }}>Winner: AmaWaterways</strong> — For travelers prioritizing ship amenities and boutique luxury.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DINING COMPARISON ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Culinary Excellence</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Dining Comparison</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}><Utensils size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Viking Dining</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Regional Cuisine</p></div>
                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img src={vikingDiningImg} alt="Viking Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}><p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking focuses on destination-inspired menus with open seating and casual elegance.</p><ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Regional cuisine', 'Destination-inspired menus', 'Open seating', 'Casual elegance'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul></div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}><Wine size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>AmaWaterways Dining</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Gourmet Excellence</p></div>
                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img src={amaDiningPlaceholderImg} alt="AmaWaterways Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}><p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Ama is often considered one of the best culinary experiences in river cruising.</p><ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Multiple dining venues', "The Chef's Table specialty restaurant", 'Locally inspired cuisine', 'Extensive wine offerings', 'Gourmet presentations'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul></div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px', padding: window.innerWidth <= 360 ? '20px 14px' : '25px 30px', backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '14px' : '20px', borderLeft: '5px solid #3b82f6', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                        <p style={{ fontSize: '17px', color: '#0f1c2e', fontWeight: '700', margin: 0 }}><strong>Winner: AmaWaterways</strong> — Food-focused travelers often prefer Ama's culinary program.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ EXCURSIONS & ACTIVE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Onshore Experiences</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Excursions & Active Travel</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '24px' }}>
                        {[
                            { title: 'Viking Excursions', desc: 'Walking tours, historical visits, and cultural experiences included in every port.', items: ['Walking tours', 'Historical visits', 'Cultural experiences'], icon: <MapPin size={24} />, w: false },
                            { title: 'AmaWaterways Excursions', desc: 'Multiple choices per port including walking, hiking, biking, and cultural options.', items: ['Walking & hiking', 'Biking experiences', 'Multiple choices per port'], icon: <Bike size={24} />, w: true },
                            { title: 'Wellness & Active', desc: 'AmaWaterways excels with wellness hosts, fitness classes, and guided bike tours.', items: ['Guided bike tours', 'Wellness hosts', 'Fitness classes'], icon: <Heart size={24} />, w: true }
                        ].map((item, i) => {
                            const excursionImages = [vikingExcursionImg, amaExcursionImg, wellnessActiveImg];
                            return (
                                <div key={i} style={{ backgroundColor: item.w ? '#0f1c2e' : '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '35px', border: '1px solid ' + (item.w ? 'rgba(59,130,246,0.3)' : '#e2e8f0'), color: item.w ? '#ffffff' : '#1e293b' }}>
                                    <div style={{ width: '100%', height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
                                        <img src={excursionImages[i]} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: item.w ? '#ffffff' : '#0f1c2e' }}>{item.title}</h3>
                                    <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 18px', color: item.w ? '#cbd5e1' : '#475569' }}>{item.desc}</p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{item.items.map((f, j) => (<li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: item.w ? '#e2e8f0' : '#1e293b' }}><CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0 }} /> {f}</li>))}</ul>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ marginTop: '30px', padding: window.innerWidth <= 360 ? '20px 14px' : '25px 30px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '14px' : '20px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#0f1c2e', fontWeight: '700', margin: 0 }}><strong>Winner: AmaWaterways</strong> — Broader range of activities, especially for active travelers.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRICING & DESTINATIONS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Pricing</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Pricing Comparison</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking typically offers competitive pricing with frequent promotions. AmaWaterways usually has slightly higher fares but more inclusions.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Winner: Viking — For value-focused travelers.</p></div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Itineraries</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Destinations & Itineraries</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking offers Rhine, Danube, Seine, Douro, Nile, and Mekong. Ama offers specialty themed cruises and wine cruises.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Winner: Viking — Broader portfolio gives more choices.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO SHOULD CHOOSE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Who Should Choose Which?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '30px' }}>
                        <div style={{ borderRadius: '24px', padding: '40px', background: 'linear-gradient(160deg, rgba(39,68,114,0.9) 0%, rgba(22,34,64,0.95) 100%)', border: '1px solid rgba(96,165,250,0.15)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}><Ship size={28} style={{ color: '#3b82f6' }} /><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Choose Viking If You:</h3></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Are new to river cruising', 'Prefer larger fleets & itinerary choices', 'Want excellent value', 'Enjoy destination-focused travel', 'Prefer a straightforward cruise experience'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', fontWeight: '500', color: '#e2e8f0' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>))}</ul>
                        </div>
                        <div style={{ borderRadius: '24px', padding: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}><Crown size={28} style={{ color: '#3b82f6' }} /><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Choose AmaWaterways If You:</h3></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Appreciate luxury service', 'Love gourmet dining', 'Enjoy active excursions', 'Prefer smaller guest counts', 'Value personalized experiences', 'Have previously taken river cruises'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', fontWeight: '500', color: '#e2e8f0' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>))}</ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL VERDICT ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Final Verdict</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Viking vs AmaWaterways</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center', marginBottom: '20px' }}>
                        <p style={{ margin: '0 0 20px' }}>Both cruise lines deliver exceptional river cruise experiences.</p>
                        <p style={{ margin: '0 0 20px' }}>Choose <strong style={{ color: '#274472' }}>Viking</strong> if you want outstanding value, broad itinerary options, and a trusted introduction to river cruising.</p>
                        <p style={{ margin: '0 0 20px' }}>Choose <strong style={{ color: '#274472' }}>AmaWaterways</strong> if you prioritize luxury, personalized service, culinary excellence, and active exploration.</p>
                        <p style={{ margin: '0' }}>The best river cruise line is the one that aligns with your <strong style={{ color: '#274472' }}>travel goals, interests, and vacation style.</strong></p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY BOOK ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Expert Guidance</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Why Book with Trips & Ships Luxury Travel?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: 'Objective Comparison', desc: 'Compare cruise lines objectively and select the best itinerary for your travel style.', icon: <Star size={24} /> },
                            { title: 'Travel Coordination', desc: 'Secure preferred cabins, coordinate airfare and hotels, and understand promotions.', icon: <Globe size={24} /> },
                            { title: 'Maximize Value', desc: 'Our expertise ensures you choose the river cruise that best matches your goals.', icon: <Award size={24} /> }
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

            {/* ═══════════════ FAQ ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Viking vs AmaWaterways:<br />Frequently Asked Questions</h2>
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

            {/* ═══════════════ THE LUXURY NAVIGATION STACK (NO EMPTY SPACES) ═══════════════ */}
            <section className="viking-stack-section">
                <style>{`
        .viking-stack-section {
            background-color: #ffffff;
            padding: clamp(80px, 10vw, 120px) 20px;
            font-family: 'Inter', -apple-system, sans-serif;
        }
        .viking-stack-container {
            max-width: 1100px;
            margin: 0 auto;
            border-top: 2px solid #0f1c2e; /* Bold top anchor */
        }
        .viking-stack-header {
            margin-bottom: 0;
            padding: 40px 0;
        }
        .viking-stack-heading {
            font-size: clamp(28px, 4vw, 36px);
            font-weight: 800;
            color: #0f1c2e;
            margin: 0;
            letter-spacing: -0.03em;
        }
        .viking-stack-link {
            text-decoration: none;
            display: block;
            border-bottom: 1px solid #e2e8f0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background-color: #ffffff;
        }
        .viking-stack-row {
            display: flex;
            align-items: center;
            padding: clamp(30px, 5vw, 45px) 10px;
            gap: 40px;
            position: relative;
        }
        @media (max-width: 768px) {
            .viking-stack-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
        }
        .viking-stack-num {
            font-size: 14px;
            font-weight: 800;
            color: #cbd5e1;
            font-variant-numeric: tabular-nums;
            min-width: 30px;
        }
        .viking-stack-content {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }
        @media (max-width: 768px) {
            .viking-stack-content {
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
            }
        }
        .viking-stack-title-box {
            max-width: 350px;
        }
        .viking-stack-title {
            font-size: 24px;
            font-weight: 700;
            color: #0f1c2e;
            margin: 0 0 5px 0;
            transition: color 0.3s ease;
        }
        .viking-stack-desc {
            font-size: 15px;
            color: #64748b;
            margin: 0;
            line-height: 1.5;
            max-width: 500px;
        }
        .viking-stack-icon-box {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3b82f6;
            background: #f1f5f9;
            border-radius: 50%;
            transition: all 0.4s ease;
        }
        
        /* HOVER EFFECTS */
        .viking-stack-link:hover {
            background-color: #f8fafc;
            padding-left: 20px;
            padding-right: 20px;
        }
        .viking-stack-link:hover .viking-stack-title {
            color: #3b82f6;
        }
        .viking-stack-link:hover .viking-stack-icon-box {
            background-color: #0f1c2e;
            color: #ffffff;
            transform: scale(1.1) rotate(-45deg);
        }
        .viking-stack-link:hover .viking-stack-num {
            color: #0f1c2e;
        }
    `}</style>

                <div className="viking-stack-container">
                    <header className="viking-stack-header">
                        <h2 className="viking-stack-heading">Explore Related Research</h2>
                    </header>

                    <div className="viking-stack-list">
                        {[
                            { num: '01', title: 'River Cruise Guide', desc: 'A complete overview of the Longship fleet and award-winning river itineraries.', path: '/viking-river-cruises', icon: <Ship size={22} /> },
                            { num: '02', title: 'Verified Reviews', desc: 'Read authentic guest feedback on service, dining, and shore excursions.', path: '/viking-cruise-reviews', icon: <Star size={22} /> },
                            { num: '03', title: 'Fare & Value', desc: 'A transparent breakdown of pricing, luxury inclusions, and total value.', path: '/viking-cruise-cost-guide', icon: <DollarSign size={22} /> },
                            { num: '04', title: 'Is Viking Worth It?', desc: 'Discover if a Viking cruise is the right value for your specific travel style.', path: '/is-viking-worth-it', icon: <Award size={22} /> }
                        ].map((item, i) => (
                            <Link key={i} to={item.path} className="viking-stack-link">
                                <div className="viking-stack-row">
                                    <span className="viking-stack-num">{item.num}</span>

                                    <div className="viking-stack-content">
                                        <div className="viking-stack-title-box">
                                            <h3 className="viking-stack-title">{item.title}</h3>
                                        </div>

                                        <p className="viking-stack-desc">{item.desc}</p>

                                        <div className="viking-stack-icon-box">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-vs-ama-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Choose Your <br /> Perfect River Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">At Trips & Ships Luxury Travel, we help travelers compare the industry's leading river cruise lines to find the perfect fit.</p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>Whether you choose Viking for value and broad options, or AmaWaterways for luxury and culinary excellence, we ensure a seamless booking experience.</p>
                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>We help you decide:</span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {['Viking River Cruises', 'AmaWaterways', 'Rhine itineraries', 'Danube voyages', 'European river cruises'].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /><span style={{ lineHeight: '1' }}>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>Contact Trips & Ships Luxury Travel today to find your perfect river cruise.</p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}><Phone size={18} />Schedule a River Cruise Consultation Today</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingVsAmaWaterways
