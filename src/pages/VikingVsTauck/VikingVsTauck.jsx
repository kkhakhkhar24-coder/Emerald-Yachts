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

// Image imports from VikingVsTauck assets folder
import heroBg1 from '../../assets/VikingVsTauck/Exterior_2026-04-13_19-02-37.jpg'
import heroBg2 from '../../assets/VikingVsTauck/Exterior_2026-04-13_19-02-40.jpg'
import heroBg3 from '../../assets/VikingVsTauck/Flam, Norway_2026-04-13_18-48-05.jpg'
import galleryShipImg from '../../assets/VikingVsTauck/Exterior_2026-04-13_19-02-39.jpg'
import galleryScenicImg from '../../assets/VikingVsTauck/Budapest, Hungary_2026-04-13_18-46-22.jpg'
import gallerySuiteImg from '../../assets/VikingVsTauck/Explorer Suite - Living Room_2026-04-13_18-46-39.jpg'
import galleryDiningImg from '../../assets/VikingVsTauck/The Restaurant_2026-04-13_18-49-21.jpg'
import galleryCastleImg from '../../assets/VikingVsTauck/Cologne, Germany_2026-04-13_18-46-31.jpg'
import vikingShipImg from '../../assets/VikingVsTauck/Exterior_2026-04-13_19-02-42.jpg'
import tauckShipImg from '../../assets/VikingVsTauck/Exterior_2026-04-13_19-02-41.jpg'
import destinationsImg from '../../assets/VikingVsTauck/Santorini, Greece_2026-04-13_18-49-07.jpg'
import excursionsImg from '../../assets/VikingVsTauck/Rome, Italy_2026-04-13_18-49-03.jpg'
import diningCardImg from '../../assets/VikingVsTauck/Aquavit Terrace_2026-04-13_18-47-28.jpg'
import serviceCardImg from '../../assets/VikingVsTauck/Aquavit Terrace Waiter_2026-04-13_18-46-05.jpg'
import angelaHughesImg from '../../assets/Angela_Hughes.jpg'

function VikingVsTauck() {
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [isMobileViewport, setIsMobileViewport] = useState(false)
    const [currentHero, setCurrentHero] = useState(0)

    const heroImages = [heroBg1, heroBg2, heroBg3]

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
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
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
                                <div className="medi-expert-profile-row"><div className="medi-expert-avatar-frame" style={{ background: '#274472', overflow: 'hidden' }}><img src={angelaHughesImg} alt="Angela Hughes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div><div><span className="medi-expert-card-subtitle">CRUISE EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div></div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help travelers compare premium cruise lines to find the perfect fit for their travel style, budget, and expectations.</p>
                                <div className="medi-premium-expert-quote-box"><span className="medi-quote-mark" style={{ color: '#274472' }}>"</span><p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>With more than 40 years in the travel industry, Angela Hughes helps travelers navigate the differences between Viking and Tauck to select the ideal luxury cruise experience.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ NEW SECTION: VISUAL SHOWCASE GALLERY ═══════════════ */}
            <section style={{
                padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Scoped Hover Style */}
                <style>{`
        .gallery-container img {
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }
        .gallery-item:hover img {
            transform: scale(1.1);
            opacity: 0.9;
        }
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            cursor: pointer;
        }
    `}</style>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '10px' }}>
                            The Visual Experience
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                            Immersive Luxury Gallery
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Mosaic Grid Container */}
                    <div className="gallery-container" style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
                        gridAutoRows: window.innerWidth <= 768 ? '250px' : '280px',
                        gap: '20px'
                    }}>

                        {/* 1. Large Vertical (Viking Ship) */}
                        <div className="gallery-item" style={{
                            gridRow: window.innerWidth <= 768 ? 'span 1' : 'span 2'
                        }}>
                            <img
                                src={galleryShipImg}
                                alt="Viking Longship Exterior"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* 2. Wide Top (Scenic River) */}
                        <div className="gallery-item" style={{
                            gridColumn: window.innerWidth <= 768 ? 'span 1' : 'span 2'
                        }}>
                            <img
                                src={galleryScenicImg}
                                alt="Scenic River Landscape"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* 3. Small (Luxury Suite) */}
                        <div className="gallery-item">
                            <img
                                src={gallerySuiteImg}
                                alt="Luxury Stateroom"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* 4. Small (Dining) */}
                        <div className="gallery-item">
                            <img
                                src={galleryDiningImg}
                                alt="Gourmet Dining Experience"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* 5. Wide Bottom (Castle/Port) */}
                        <div className="gallery-item" style={{
                            gridColumn: window.innerWidth <= 768 ? 'span 1' : 'span 3',
                            height: window.innerWidth <= 768 ? '250px' : '350px'
                        }}>
                            <img
                                src={galleryCastleImg}
                                alt="European Castle Port"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {/* Text Overlay for the Wide Image */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10,17,32,0.8) 0%, transparent 60%)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '30px'
                            }}>
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

            {/* ═══════════════ UPPER VIDEO: THE LUXURY EXPERIENCE ═══════════════ */}
            <section style={{
                padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px',
                backgroundColor: '#E7F3F5', // Your requested light blue navy color
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{
                        color: '#3b82f6',
                        fontWeight: '700',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        display: 'block',
                        marginBottom: '15px'
                    }}>
                        Visualizing the Voyage
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        color: '#274472', // Dark navy heading for perfect contrast
                        fontWeight: '800',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2'
                    }}>
                        The Essence of Premium Cruising
                    </h2>

                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>

                    <p style={{
                        color: '#475569',
                        fontSize: '18px',
                        marginTop: '25px',
                        marginBottom: '45px',
                        lineHeight: '1.7',
                        maxWidth: '800px',
                        margin: '25px auto 45px'
                    }}>
                        Before diving into the technical differences of each fleet, witness the breathtaking landscapes and unparalleled service that define both Viking and Tauck journeys.
                    </p>

                    {/* Video Box */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(39, 68, 114, 0.15)', // Shadow with a hint of navy
                        border: '1px solid rgba(255, 255, 255, 0.5)', // Subtle white border to make it pop
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mm-TtRkvDwc"
                            title="Luxury Cruise Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
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

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '40px' }}>

                        {/* VIKING CARD */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            {/* Image Placeholder for Viking */}
                            <div style={{ width: '100%', height: '250px', backgroundColor: '#1a365d', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={vikingShipImg}
                                    alt="Viking Longship Interior"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }}
                                />
                                <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#3b82f6', color: 'white', padding: '6px 15px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
                                    SCANDINAVIAN MODERN
                                </div>
                            </div>

                            <div style={{ padding: window.innerWidth <= 360 ? '28px 16px' : '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Ship size={24} style={{ color: '#fff' }} />
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Viking Ships</h3>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        { l: 'River Ships', v: 'Scandinavian d\u00e9cor, Aquavit Terrace' },
                                        { l: 'Ocean Ships', v: 'All-veranda, heated bathroom floors' },
                                        { l: 'Fleet Size', v: 'Larger fleet with more choices' },
                                        { l: 'Design', v: 'Clean, contemporary style' }
                                    ].map((r, i) => (
                                        <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span>
                                            <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '500' }}>{r.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TAUCK CARD */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            {/* Image Placeholder for Tauck */}
                            <div style={{ width: '100%', height: '250px', backgroundColor: '#1e293b', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={tauckShipImg}
                                    alt="Tauck River Boat Suite"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }}
                                />
                                <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#94a3b8', color: 'white', padding: '6px 15px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
                                    TRADITIONAL LUXURY
                                </div>
                            </div>

                            <div style={{ padding: window.innerWidth <= 360 ? '28px 16px' : '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Crown size={24} style={{ color: '#94a3b8' }} />
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Tauck Ships</h3>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        { l: 'Vessels', v: 'Chartered from leading operators' },
                                        { l: 'Experience', v: 'Spacious suites, boutique atmosphere' },
                                        { l: 'Guest Count', v: 'Lower passenger counts' },
                                        { l: 'Amenities', v: 'Premium onboard amenities' }
                                    ].map((r, i) => (
                                        <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{r.l}</span>
                                            <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>{r.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7', margin: 0 }}>
                            <strong style={{ color: '#ffffff' }}>Viking Advantage:</strong> More ship choices and broader fleet options with a consistent modern feel.
                            <br />
                            <strong style={{ color: '#ffffff' }}>Tauck Advantage:</strong> More intimate onboard experience with significantly fewer guests and larger average suite sizes.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FIXED: DESTINATIONS & EXCURSIONS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Where You'll Go</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Destinations & Excursions</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr', gap: '30px' }}>

                        {/* DESTINATIONS CARD */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15,28,46,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Image Placeholder */}
                            <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={destinationsImg}
                                    alt="Global Destinations"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: 'rgba(15, 28, 46, 0.8)', color: '#fff', padding: '5px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', backdropFilter: 'blur(4px)' }}>
                                    GLOBAL REACH
                                </div>
                            </div>

                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Destinations</span>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Where You'll Travel</h3>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '30px' }}>
                                    Viking offers extensive worldwide coverage across all seven continents, including the Nile, Mississippi, and Antarctica. Tauck remains the specialist for intimate European river journeys and grand land-and-sea combinations.
                                </p>
                                <div style={{ marginTop: 'auto', padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: '#274472', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Globe size={16} /> Winner: Viking (For Variety)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* EXCURSIONS CARD */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15,28,46,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Image Placeholder */}
                            <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={excursionsImg}
                                    alt="Guided Excursion"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: 'rgba(15, 28, 46, 0.8)', color: '#fff', padding: '5px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', backdropFilter: 'blur(4px)' }}>
                                    EXCLUSIVE ACCESS
                                </div>
                            </div>

                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Excursions</span>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '16px' }}>Included Experiences</h3>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '30px' }}>
                                    While Viking includes one excursion in every port, Tauck provides a truly all-inclusive shore program with multiple premium choices, private after-hours museum access, and exclusive cultural events.
                                </p>
                                <div style={{ marginTop: 'auto', padding: '16px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: '#274472', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Star size={16} /> Winner: Tauck (For Inclusions)
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════ FIXED: DINING & SERVICE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>Onboard Experience</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Dining & Service</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '40px' }}>

                        {/* DINING CARD */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 15px 35px rgba(15,28,46,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={diningCardImg}
                                    alt="Fine Dining"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(15,28,46,0.8) 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Utensils size={24} style={{ color: '#3b82f6' }} />
                                    <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Dining</h4>
                                </div>
                            </div>

                            <div style={{ padding: '35px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1f5f9', padding: '4px 12px', borderRadius: '50px', marginBottom: '20px' }}>
                                    <Sparkles size={14} style={{ color: '#3b82f6' }} />
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' }}>Winner: Tie</span>
                                </div>

                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '25px' }}>
                                    Both lines offer world-class culinary programs. Viking focuses on diverse venue options and destination-inspired menus, while Tauck emphasizes regional flavors and exclusive shore-side dining events.
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                    {[
                                        'Viking: Multi-venue flexibility',
                                        'Tauck: Regional culinary immersion',
                                        'Expert wine pairings on both lines',
                                        'Included premium dining options'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* SERVICE CARD */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 15px 35px rgba(15,28,46,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={serviceCardImg}
                                    alt="Luxury Service"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(15,28,46,0.8) 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Heart size={24} style={{ color: '#3b82f6' }} />
                                    <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Service</h4>
                                </div>
                            </div>

                            <div style={{ padding: '35px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#eff6ff', padding: '4px 12px', borderRadius: '50px', marginBottom: '20px', border: '1px solid #dbeafe' }}>
                                    <Star size={14} style={{ color: '#3b82f6' }} />
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#274472', textTransform: 'uppercase' }}>Winner: Tauck</span>
                                </div>

                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '25px' }}>
                                    While Viking service is impeccably professional and efficient, Tauck is legendary for its "Intimate Hospitality," where staff frequently anticipate needs and build personal connections with every guest.
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                    {[
                                        'Tauck: Highly personalized attention',
                                        'Viking: Fleet-wide consistency',
                                        'Outstanding guest-to-crew ratios',
                                        'Warm, attentive onboard culture'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
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

            {/* ═══════════════ LOWER VIDEO: EXPERT ADVICE ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                        Expert Insight
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                        How to Choose Your Perfect Cruise
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>

                    <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', marginBottom: '45px', lineHeight: '1.7', maxWidth: '800px', margin: '25px auto 45px' }}>
                        Choosing between Viking and Tauck often comes down to your personal travel style. Watch our deeper dive into what makes each brand unique and how to maximize your value.
                    </p>

                    {/* Video Box */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/2hiXhcgIJJc"
                            title="Expert Comparison Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
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
