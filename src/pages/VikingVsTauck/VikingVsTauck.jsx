import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Gem, Phone,
    Globe, Utensils, Award, Crown,
    Heart, Wine, DollarSign, UserCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

function VikingVsTauck() {
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => { setIsMobileViewport(window.innerWidth < 992) }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => { setMediActiveFaq(mediActiveFaq === index ? null : index) }

    const vikingFaqs = [
        { question: "Is Tauck more expensive than Viking?", answer: "Yes. Tauck generally has higher fares, although it includes more amenities and services." },
        { question: "Which is more luxurious, Viking or Tauck?", answer: "Tauck is typically considered slightly more luxurious due to its inclusions and personalized service." },
        { question: "Does Viking include gratuities?", answer: "Generally no, although promotions may vary." },
        { question: "Does Tauck include gratuities?", answer: "Yes. Many Tauck cruises include gratuities in the fare." },
        { question: "Which cruise line has better excursions?", answer: "Tauck typically includes more premium excursion experiences." },
        { question: "Which cruise line is better for solo travelers?", answer: "Viking is generally more solo-friendly." },
        { question: "Does Viking offer ocean cruises?", answer: "Yes. Viking operates one of the world's leading ocean cruise fleets." },
        { question: "Does Tauck offer ocean cruises?", answer: "Tauck offers select small ship ocean journeys through partnerships." },
        { question: "Which has better value for money?", answer: "Viking is often considered the stronger value option." },
        { question: "Which cruise line has smaller ships?", answer: "Tauck generally provides a more intimate guest experience." },
        { question: "Is Viking adults only?", answer: "Yes. Viking welcomes guests age 18 and older." },
        { question: "Which cruise line is better for first-time river cruisers?", answer: "Both are excellent, though Viking's pricing often appeals to first-time travelers." },
        { question: "Does Tauck include airport transfers?", answer: "Many Tauck itineraries include airport transfers." },
        { question: "Which cruise line offers more destinations?", answer: "Viking offers significantly more worldwide destinations." },
        { question: "Which cruise line has better service?", answer: "Both are exceptional, but Tauck is often recognized for highly personalized service." }
    ]

    const comparisonData = [
        { feature: "Best For", viking: "Independent travelers", tauck: "All-inclusive luxury travelers" },
        { feature: "Atmosphere", viking: "Contemporary Scandinavian", tauck: "Traditional luxury" },
        { feature: "River Fleet Size", viking: "Larger", tauck: "Smaller" },
        { feature: "Ocean Cruises", viking: "Yes", tauck: "Limited" },
        { feature: "Included Excursions", viking: "Yes", tauck: "More Included" },
        { feature: "Included Drinks", viking: "Partial", tauck: "More Extensive" },
        { feature: "Solo Traveler Options", viking: "Good", tauck: "Limited" },
        { feature: "Pricing", viking: "Lower", tauck: "Higher" },
        { feature: "Service Level", viking: "Excellent", tauck: "Exceptional" },
        { feature: "Luxury Level", viking: "Upper Premium", tauck: "Luxury" }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", "@id": "https://www.tripsandships.com/viking-vs-tauck", "url": "https://www.tripsandships.com/viking-vs-tauck", "name": "Viking vs Tauck", "headline": "Viking vs Tauck: Which Luxury Cruise Line Is Better in 2026?", "description": "Compare Viking vs Tauck cruises including river cruises, ocean voyages, pricing, inclusions, destinations, excursions, and luxury experiences.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" } },
            { "@type": "TravelAgency", "@id": "#trips-ships", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "description": "Luxury travel agency specializing in cruise vacations, river cruises, expedition cruises and personalized travel planning.", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"], "founder": { "@id": "#angela-hughes" } },
            { "@type": "Organization", "@id": "#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
            { "@type": "Person", "@id": "#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel.", "worksFor": { "@id": "#trips-ships" } },
            { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" }, { "@type": "ListItem", "position": 2, "name": "Cruise Comparisons", "item": "https://www.tripsandships.com/cruise-comparisons" }, { "@type": "ListItem", "position": 3, "name": "Viking vs Tauck", "item": "https://www.tripsandships.com/viking-vs-tauck" }] },
            { "@type": "Article", "headline": "Viking vs Tauck", "description": "Expert comparison of Viking and Tauck including pricing, inclusions, destinations, service levels, excursions, river cruises, and luxury travel experiences.", "author": { "@id": "#angela-hughes" }, "publisher": { "@id": "#trips-ships" }, "keywords": ["Viking vs Tauck", "Tauck vs Viking River Cruises", "Viking River Cruises vs Tauck", "Viking Cruises Comparison", "Best Luxury River Cruise Line", "Tauck River Cruise Review"] },
            { "@type": "FAQPage", "mainEntity": vikingFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking vs Tauck: Which Luxury Cruise Line Is Better in 2026?</title>
                <meta name="title" content="Viking vs Tauck Cruises Comparison | River & Small Ship Travel Guide" />
                <meta name="description" content="Compare Viking vs Tauck cruises including river cruises, ocean voyages, pricing, inclusions, destinations, excursions, and luxury experiences. Discover which cruise line is best for your travel style." />
                <meta name="keywords" content="Viking vs Tauck, Tauck vs Viking River Cruises, Viking River Cruises vs Tauck, Viking Cruises Comparison, Best Luxury River Cruise Line, Tauck River Cruise Review, Viking vs Tauck River Cruises, Luxury Cruise Comparison, Viking Ocean Cruises vs Tauck" />
                <link rel="canonical" href="https://www.tripsandships.com/viking-vs-tauck" />
                <script type="application/ld+json">{JSON.stringify(vikingSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag"><Anchor size={16} /><span>Luxury Cruise Comparison, Ships, Pricing & Experiences</span></div>
                    <h1 className="medi-hero-main-title">Viking vs Tauck</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px, 2.5vw, 20px)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', textAlign: 'center' }}>
                        A complete luxury cruise comparison to help you choose the right experience.
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
                            <span className="medi-premium-mini-badge" style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '10px' }}>Luxury Cruise Comparison</span>
                            <h2 className="medi-premium-heading" style={{ color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', margin: '0 0 20px 0' }}>Viking vs Tauck: A Complete Luxury Cruise Comparison</h2>
                            <div className="medi-premium-separator" style={{ width: '80px', height: '3px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px' }}></div>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>When travelers begin researching premium river cruises and small ship journeys, two names consistently rise to the top: Viking and Tauck.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>Both companies have built outstanding reputations for exceptional service, immersive destinations, and high-quality travel experiences. However, despite serving similar travelers, Viking and Tauck offer distinctly different styles of luxury travel.</p>
                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>This guide compares Viking vs Tauck across ships, accommodations, excursions, dining, pricing, destinations, and overall value.</p>
                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>Key Comparison Areas:</p>
                                <div className="medi-immersion-cards-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '20px', textAlign: 'left' }}>
                                    {[{ t: "Ships & Accommodations", i: <Ship size={20} /> }, { t: "Dining & Cuisine", i: <Utensils size={20} /> }, { t: "Excursions & Inclusions", i: <MapPin size={20} /> }, { t: "Pricing & Value", i: <DollarSign size={20} /> }, { t: "Service & Luxury", i: <Crown size={20} /> }, { t: "Destinations & Itineraries", i: <Globe size={20} /> }].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item"><div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>{item.i}</div><span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: window.innerWidth <= 1024 ? '40px' : '0', borderLeftColor: '#274472' }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row"><div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div><div><span className="medi-expert-card-subtitle">CRUISE EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div></div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help travelers compare premium cruise lines to find the perfect fit for their travel style, budget, and expectations.</p>
                                <div className="medi-premium-expert-quote-box"><span className="medi-quote-mark" style={{ color: '#274472' }}>"</span><p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry, Angela Hughes helps travelers navigate the differences between Viking and Tauck to select the ideal luxury cruise experience.</p></div>
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
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Quick Comparison: Viking vs Tauck</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ borderRadius: window.innerWidth <= 360 ? '16px' : '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.05)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', backgroundColor: '#0f1c2e', padding: '16px 24px', color: '#ffffff', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <span>Feature</span><span style={{ textAlign: 'center' }}>Viking</span><span style={{ textAlign: 'center' }}>Tauck</span>
                        </div>
                        {comparisonData.map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '14px 24px', borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff', alignItems: 'center' }}>
                                <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '15px' }}>{row.feature}</span>
                                <span style={{ textAlign: 'center', color: '#475569', fontSize: '14px' }}>{row.viking}</span>
                                <span style={{ textAlign: 'center', color: '#475569', fontSize: '14px' }}>{row.tauck}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ SHIPS & ACCOMMODATIONS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Ship Comparison</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Ships & Accommodations</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: 'rgba(59,130,246,0.08)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '2px solid rgba(59,130,246,0.3)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ship size={24} style={{ color: '#fff' }} /></div><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Viking Ships</h3></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{[{ l: 'River Ships', v: 'Scandinavian d\u00e9cor, Aquavit Terrace' }, { l: 'Ocean Ships', v: 'All-veranda, heated bathroom floors' }, { l: 'Fleet Size', v: 'Larger fleet with more choices' }, { l: 'Design', v: 'Clean, contemporary style' }].map((r, i) => (<div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span><span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '500' }}>{r.v}</span></div>))}</div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Crown size={24} style={{ color: '#94a3b8' }} /></div><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Tauck Ships</h3></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{[{ l: 'Vessels', v: 'Chartered from leading operators' }, { l: 'Experience', v: 'Spacious suites, boutique atmosphere' }, { l: 'Guest Count', v: 'Lower passenger counts' }, { l: 'Amenities', v: 'Premium onboard amenities' }].map((r, i) => (<div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span><span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>{r.v}</span></div>))}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7', margin: 0 }}><strong style={{ color: '#ffffff' }}>Viking Advantage:</strong> More ship choices and broader fleet options. <strong style={{ color: '#ffffff' }}>Tauck Advantage:</strong> More intimate onboard experience.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DESTINATIONS & EXCURSIONS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Where You'll Go</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Destinations & Excursions</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Destinations</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Where You'll Travel</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking offers extensive worldwide coverage: Europe, Alaska, Mediterranean, Scandinavia, Egypt, Asia, Antarctica, South America. Tauck focuses on European Rivers: France, Germany, Portugal, Netherlands, Switzerland.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Winner: Viking — Greater destination variety.</p></div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Excursions</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Included Experiences</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking includes at least one excursion per port plus destination lectures. Tauck is known for extensive inclusions: multiple options, exclusive experiences, special access, and more premium tours.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Winner: Tauck — More included experiences.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DINING & SERVICE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Onboard Experience</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Dining & Service</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}><Utensils size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Dining</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Winner: Tie</p></div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking offers The Restaurant, Manfredi's, Chef's Table, and World Caf\u00e9. Tauck emphasizes regional cuisine, local wine tastings, and exclusive dining events.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Both offer exceptional dining', 'Viking: Destination-inspired menus', 'Tauck: Local culinary experiences', 'Regional cuisine on both lines'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}><Heart size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} /><h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Service</h4><p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Winner: Tauck</p></div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking provides professional, attentive, consistent service across the fleet. Tauck offers highly personalized service with crew knowing guests by name early in the voyage.</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['Viking: Consistent & professional', 'Tauck: Highly personalized approach', 'Smaller Tauck ships enable closer relationships', 'Both rated exceptional by guests'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}><CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}</li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRICING & SOLO ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Pricing</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Pricing Comparison</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking generally offers lower starting fares. Many view Viking as one of the best values in premium cruising. Tauck commands higher prices but includes more: excursions, airport transfers, gratuities, select beverages.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Value: Viking | Inclusions: Tauck</p></div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,28,46,0.03)' }}>
                            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Solo & Ocean</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Solo Travel & Ocean Cruises</h3>
                            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>Viking frequently offers solo cabins and reduced single supplements. Viking also operates a large fleet of award-winning ocean ships, while Tauck offers only limited small ship ocean experiences.</p>
                            <div style={{ padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}><p style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#274472' }}>Solo & Ocean Winner: Viking</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO SHOULD CHOOSE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Which Cruise Line Is Better for You?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '30px' }}>
                        <div style={{ borderRadius: '24px', padding: '40px', background: 'linear-gradient(160deg, rgba(39,68,114,0.9) 0%, rgba(22,34,64,0.95) 100%)', border: '1px solid rgba(96,165,250,0.15)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}><Ship size={28} style={{ color: '#3b82f6' }} /><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Choose Viking If:</h3></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['You want excellent value', 'You prefer contemporary Scandinavian design', 'You enjoy independent exploration', 'You want more itinerary options', 'You are interested in ocean cruises', 'You travel solo'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', fontWeight: '500', color: '#e2e8f0' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>))}</ul>
                        </div>
                        <div style={{ borderRadius: '24px', padding: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}><Crown size={28} style={{ color: '#3b82f6' }} /><h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Choose Tauck If:</h3></div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{['You want an all-inclusive experience', 'You value highly personalized service', 'You enjoy smaller groups', 'You prefer premium excursions included', 'Budget is less important', 'You want maximum inclusions'].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', fontWeight: '500', color: '#e2e8f0' }}><CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}</li>))}</ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL VERDICT ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Final Verdict</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Viking vs Tauck</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center', marginBottom: '20px' }}>
                        <p style={{ margin: '0 0 20px' }}>Both Viking and Tauck deliver outstanding travel experiences.</p>
                        <p style={{ margin: '0 0 20px' }}><strong style={{ color: '#274472' }}>Viking</strong> excels in destination variety, fleet size, ocean cruising, and overall value.</p>
                        <p style={{ margin: '0 0 20px' }}><strong style={{ color: '#274472' }}>Tauck</strong> shines through personalized service, extensive inclusions, and boutique-style luxury.</p>
                        <p style={{ margin: '0' }}>Neither choice is wrong. Both represent some of the <strong style={{ color: '#274472' }}>finest travel experiences available today.</strong></p>
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
                            { title: 'Objective Comparison', desc: 'Compare cruise lines objectively and select the best option for your travel style and budget.', icon: <Star size={24} /> },
                            { title: 'Travel Coordination', desc: 'Secure preferred cabins, coordinate airfare and hotels, and understand all inclusions.', icon: <Globe size={24} /> },
                            { title: 'Maximize Value', desc: 'Our expertise ensures you choose the cruise that delivers the best experience for your investment.', icon: <Award size={24} /> }
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
                        <h2 className="medi-section-heading">Viking vs Tauck:<br />Frequently Asked Questions</h2>
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

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-vs-tauck-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Choose Your <br /> Perfect Luxury Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">At Trips & Ships Luxury Travel, we help travelers compare the industry's leading cruise lines to find the perfect fit for their travel style, budget, and expectations.</p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>Whether you choose Viking for value and broad options, or Tauck for all-inclusive luxury and personalized service, we ensure a seamless booking experience.</p>
                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>We help you decide:</span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {['Viking River Cruises', 'Tauck journeys', 'European river cruises', 'Ocean voyages', 'Luxury cruise planning'].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}><CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /><span style={{ lineHeight: '1' }}>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>Contact Trips & Ships Luxury Travel today to plan your perfect luxury cruise.</p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}><Phone size={18} />Schedule a Luxury Cruise Consultation Today</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingVsTauck
