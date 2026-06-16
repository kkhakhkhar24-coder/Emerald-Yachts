import Navbar from '../../components/Navbar/Navbar'
import {
    Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Crown, Phone, Globe, Heart, Award,
    GraduationCap, Mic, FileText, Sun, Waves, Info, Wand2,
    Umbrella, Bike, UtensilsCrossed
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
import hero1 from '../../assets/CastawayCayVsLookoutCay/disney-cruise-ship-docked-at-castaway-cay-bahamas-private-island.jpeg'
import hero2 from '../../assets/CastawayCayVsLookoutCay/disney-cruise-ship-at-castaway-cay-bahamas-tropical-island-view.jpeg'
import hero3 from '../../assets/CastawayCayVsLookoutCay/couple-walking-on-castaway-cay-beach-disney-cruise-romantic-getaway.jpg'
import GalleryMickeyMinnie from '../../assets/CastawayCayVsLookoutCay/disney-castaway-cay-mickey-minnie-mouse-beach-characters.jpg'
import GalleryTurquoiseBeach from '../../assets/CastawayCayVsLookoutCay/disney-castaway-cay-private-island-turquoise-water-beach-vacation.jpg'
import GalleryDonaldDaisy from '../../assets/CastawayCayVsLookoutCay/disney-cruise-beach-characters-donald-daisy-duck-castaway-cay.jpg'
import GalleryFamilyBeach from '../../assets/CastawayCayVsLookoutCay/family-beach-day-at-castaway-cay-disney-cruise-private-island-bahamas.jpg'
import GalleryFestive from '../../assets/CastawayCayVsLookoutCay/mickey-mouse-christmas-tree-disney-cruise.jpg'
import GalleryHammock from '../../assets/CastawayCayVsLookoutCay/relaxing-in-hammock-at-castaway-cay-disney-cruise-private-island.jpg'
import AtmosphereCastaway from '../../assets/CastawayCayVsLookoutCay/disney-cruise-line-castaway-cay-family-beach-sandcastle.jpg'
import ProsCastaway from '../../assets/CastawayCayVsLookoutCay/disney-castaway-cay-island-beach-view-kids.jpg'
import ProsLookout from '../../assets/CastawayCayVsLookoutCay/mother-and-son-playing-on-castaway-cay-beach-disney-private-island-bahamas.jpeg'
import profileAH from '../../assets/CastawayCayVsLookoutCay/Profile_AH.jpg'

function CastawayCayVsLookoutCay() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

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

    const islandFaqs = [
        { question: "Is Castaway Cay better than Lookout Cay?", answer: "Many repeat Disney cruisers still prefer Castaway Cay, but Lookout Cay offers a very different and highly appealing experience." },
        { question: "Which island has better beaches?", answer: "Many guests believe Lookout Cay has the more beautiful natural beaches." },
        { question: "Which island is better for families?", answer: "Castaway Cay generally remains the top choice for families with younger children." },
        { question: "Does Lookout Cay have Disney characters?", answer: "Character experiences exist but are less prominent than at Castaway Cay." },
        { question: "Which island has better adult areas?", answer: "Serenity Bay at Castaway Cay remains one of Disney Cruise Line's best adult-only experiences." },
        { question: "Is Lookout Cay more authentic?", answer: "Yes. Lookout Cay places a strong emphasis on Bahamian culture and heritage." },
        { question: "Which island has better food?", answer: "Many guests enjoy Lookout Cay's more unique and culturally inspired dining options." },
        { question: "Is Castaway Cay easier to navigate?", answer: "Yes. Castaway Cay is generally more compact and convenient." },
        { question: "Can Disney ships visit both destinations?", answer: "Some itineraries may include one destination, while others may include the other depending on the sailing." },
        { question: "Which destination is newer?", answer: "Lookout Cay opened in 2024, making it Disney's newest island destination." },
        { question: "Is Serenity Bay available at both islands?", answer: "Both destinations offer adult-focused areas, but Serenity Bay is specific to Castaway Cay." },
        { question: "Which destination should first-time Disney cruisers visit?", answer: "Most first-time Disney cruisers should experience Castaway Cay first." }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"] },
            { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in Disney Cruise Line private island comparisons, Castaway Cay reviews, Lookout Cay guides, and premium family vacations." },
            { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
            { "@type": "WebPage", "name": "Castaway Cay vs Lookout Cay", "url": "https://www.tripsandships.com/castaway-cay-vs-lookout-cay", "description": "Compare Castaway Cay vs Lookout Cay including beaches, dining, activities, family experiences, adults-only areas, and overall value." },
            {
                "@type": "BreadcrumbList", "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Castaway Cay vs Lookout Cay", "item": "https://www.tripsandships.com/castaway-cay-vs-lookout-cay" }
                ]
            },
            { "@type": "FAQPage", "mainEntity": islandFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Castaway Cay vs Lookout Cay | Which Disney Island Is Better?</title>
                <meta name="title" content="Castaway Cay vs Lookout Cay: Disney's Private Island Comparison" />
                <meta name="description" content="Compare Castaway Cay vs Lookout Cay including beaches, dining, activities, family experiences, adults-only areas, transportation, and overall value to determine which Disney destination is right for your cruise." />
                <meta name="keywords" content="Castaway Cay vs Lookout Cay, Disney Castaway Cay, Disney Lookout Cay, Castaway Cay vs Lookout Cay at Lighthouse Point, Disney Private Island Comparison, Disney Cruise Island Destinations, Is Castaway Cay better than Lookout Cay, Castaway Cay vs Lookout Cay review, Which Disney private island is best, Lookout Cay vs Castaway Cay for families, Disney Cruise private island comparison" />
                <link rel="canonical" href="https://www.tripsandships.com/castaway-cay-vs-lookout-cay" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div key={idx} className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: window.innerWidth <= 768 ? '70vh' : '85vh', padding: window.innerWidth <= 360 ? '20px 16px' : '40px 20px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <div className="medi-hero-eyebrow-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px', backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '60px', color: '#ffffff', fontSize: window.innerWidth <= 360 ? '10px' : '12px', fontWeight: '700', letterSpacing: window.innerWidth <= 360 ? '1.5px' : '2px', textTransform: 'uppercase', marginBottom: window.innerWidth <= 768 ? '20px' : '30px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <Anchor size={window.innerWidth <= 360 ? 13 : 16} style={{ color: '#60a5fa' }} />
                        <span style={{ display: window.innerWidth <= 480 ? '-webkit-box' : 'inline', WebkitLineClamp: window.innerWidth <= 480 ? 2 : 'unset', WebkitBoxOrient: 'vertical', overflow: window.innerWidth <= 480 ? 'hidden' : 'visible', lineHeight: '1.4' }}>Disney's Private Island Destinations</span>
                    </div>
                    <h1 className="medi-hero-main-title" style={{ color: '#ffffff', fontSize: window.innerWidth <= 360 ? 'clamp(28px, 8vw, 40px)' : 'clamp(38px, 7vw, 72px)', fontWeight: '800', lineHeight: window.innerWidth <= 768 ? '1.1' : '1.0', letterSpacing: window.innerWidth <= 768 ? '-0.01em' : '-0.03em', margin: '0', maxWidth: '900px', textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
                        Castaway Cay <br /> vs Lookout Cay
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: window.innerWidth <= 360 ? '15px' : window.innerWidth <= 768 ? '16px' : 'clamp(17px, 2.5vw, 20px)', maxWidth: window.innerWidth <= 768 ? '90%' : '700px', width: '100%', margin: window.innerWidth <= 768 ? '16px auto 0' : '24px auto 0', lineHeight: '1.6', textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        Compare beaches, dining, activities, and culture to determine which Disney private island destination is right for your cruise.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>{`.medi-immersion-card-item:hover { transform: translateY(-5px); border-color: #3b82f6 !important; background-color: #ffffff !important; box-shadow: 0 10px 20px rgba(59, 130, 246, 0.05); } .medi-immersion-card-item:hover .medi-immersion-icon-box { background-color: #274472 !important; border-color: #274472 !important; transform: scale(1.1); } .medi-immersion-card-item:hover .medi-immersion-icon-box svg { stroke: #ffffff !important; } @media (max-width: 1024px) { .dc-intro-grid { grid-template-columns: 1fr !important; gap: 50px !important; } }`}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid dc-intro-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>
                        <div className="medi-premium-editorial-block" style={{ maxHeight: isMobileViewport ? 'none' : '680px', overflowY: isMobileViewport ? 'visible' : 'auto', paddingRight: isMobileViewport ? '0' : '24px', textAlign: window.innerWidth <= 1024 ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
                            <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '12px' }}>The Island Evolution</span>
                            <h2 style={{ color: '#274472', fontSize: 'clamp(30px, 5vw, 48px)', lineHeight: '1.15', margin: '0 0 20px 0', fontWeight: '800', letterSpacing: '-0.02em' }}>Which Disney Island Experience<br />Is Better?</h2>
                            <div style={{ width: '80px', height: '4px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px', borderRadius: '10px' }}></div>
                            <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                                <p style={{ marginBottom: '24px' }}>Disney Cruise Line now offers guests two incredible private island destinations in the Bahamas. Both deliver Disney's signature service, beautiful beaches, and exclusive experiences.</p>
                                <p style={{ marginBottom: '24px' }}>However, the two islands offer very different atmospheres. <strong>Castaway Cay</strong> is Disney's long-established tropical paradise, while <strong>Lookout Cay at Lighthouse Point</strong> represents Disney's newest vision—inspired by Bahamian culture and sustainability.</p>
                                <p style={{ marginBottom: '40px' }}>The answer depends on what type of beach day you're looking for.</p>
                            </div>
                            <div style={{ width: '100%' }}>
                                <p style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '700', textAlign: window.innerWidth <= 1024 ? 'center' : 'left' }}>The Core Differences:</p>
                                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 550 ? '1fr' : 'repeat(2, 1fr)', gap: '16px', width: '100%' }}>
                                    {[
                                        { t: "Classic Magic vs Culture", i: <Wand2 size={20} /> },
                                        { t: "Calm Lagoon vs Open Ocean", i: <Waves size={20} /> },
                                        { t: "Disney Theme vs Bahamian Heritage", i: <Globe size={20} /> },
                                        { t: "Convenience vs Natural Beauty", i: <Sun size={20} /> },
                                        { t: "Established vs New Destination", i: <Sparkles size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
                                            <div className="medi-immersion-icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', transition: 'all 0.3s ease', flexShrink: 0 }}>{item.i}</div>
                                            <span style={{ color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medi-premium-signature-panel" style={{ marginTop: '0', borderLeft: '4px solid #274472', position: isMobileViewport ? 'relative' : 'sticky', top: '100px' }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div>
                                    <div><span className="medi-expert-card-subtitle">ISLAND COMPARISON EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help guests decide which private island destination aligns best with their ideal beach day.</p>
                                <div className="medi-premium-expert-quote-box" style={{ background: 'rgba(39, 68, 114, 0.03)', borderRadius: '15px', padding: '20px' }}>
                                    <span className="medi-quote-mark" style={{ color: '#274472', fontSize: '32px', lineHeight: '1', display: 'block' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>With 40+ years of experience, Angela Hughes breaks down whether the classic magic of Castaway Cay or the cultural beauty of Lookout Cay is right for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK COMPARISON OVERVIEW ═══════════════ */}
            <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Side-by-Side Analysis</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#ffffff", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Quick Comparison Overview</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
                        <div style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: 'clamp(30px, 5vw, 50px)', border: '2px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#cbd5e1', fontSize: '10px', fontWeight: '900', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>Opened 1998</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Umbrella size={24} color="#cbd5e1" /></div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Castaway Cay</h3>
                            </div>
                            <div style={{ display: 'grid', gap: '12px' }}>
                                {[{ l: "Theme", v: "Disney Tropical Paradise" }, { l: "Beaches", v: "Calm & Family-Friendly" }, { l: "Adult Beach", v: "Serenity Bay" }, { l: "Walking", v: "Easier Navigation" }, { l: "Characters", v: "Extensive" }, { l: "Culture", v: "Disney Focused" }].map((row, i) => (
                                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                                        <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600' }}>{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: 'clamp(30px, 5vw, 50px)', border: '2px solid #38bdf8', boxShadow: '0 20px 50px rgba(56, 189, 248, 0.15)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: '#38bdf8', color: '#0f172a', fontSize: '10px', fontWeight: '900', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>Opened 2024</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Compass size={24} color="#ffffff" /></div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Lookout Cay at Lighthouse Point</h3>
                            </div>
                            <div style={{ display: 'grid', gap: '12px' }}>
                                {[{ l: "Theme", v: "Bahamian Culture & Nature" }, { l: "Beaches", v: "Larger & More Natural" }, { l: "Adult Beach", v: "Adults-Only Area" }, { l: "Walking", v: "More Walking Required" }, { l: "Characters", v: "Limited" }, { l: "Culture", v: "Bahamian Focused" }].map((row, i) => (
                                    <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                                        <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600' }}>{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ATMOSPHERE & BEACHES COMPARISON ═══════════════ */}
            <section style={{ padding: 'clamp(70px, 10vw, 120px) 0', backgroundColor: '#dce6f5', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
                <style>{`.concierge-light-glass { transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(39, 68, 114, 0.2); backdrop-filter: blur(10px); } .concierge-light-glass:hover { transform: translateY(-8px); border-color: #274472; background: rgba(255, 255, 255, 0.85); box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15); }`}</style>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: '3px solid #274472', paddingLeft: '12px' }}>Island Experience</span>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Atmosphere & Beach Comparison</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>
                    {/* SIDE-BY-SIDE ISLAND IMAGES */}
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '50px' }}>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: '#e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
                            <img src={AtmosphereCastaway} alt="Castaway Cay Beach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Castaway Cay</div>
                        </div>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: '#e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
                            <img src={hero3} alt="Lookout Cay Beach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Lookout Cay</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '30px' }}>
                        <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                                <div style={{ color: '#ffffff', backgroundColor: '#274472', padding: '14px', borderRadius: '15px', display: 'flex' }}><Umbrella size={28} /></div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Castaway Cay</h3>
                            </div>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: '0 0 20px 0' }}>Feels like a classic Disney island vacation. Calm, protected lagoon-like water, easy navigation, and extensive character encounters. Everything is designed around convenience and fun.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Disney Magic", "Calm Water", "Easy Navigation", "Relaxed Vibes"].map(t => (<span key={t} style={{ padding: '8px 16px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#274472', border: '1px solid #e2e8f0' }}>{t}</span>))}
                            </div>
                        </div>
                        <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                                <div style={{ color: '#ffffff', backgroundColor: '#274472', padding: '14px', borderRadius: '15px', display: 'flex' }}><Compass size={28} /></div>
                                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Lookout Cay</h3>
                            </div>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: '0 0 20px 0' }}>Emphasizes Bahamian culture, natural beauty, and sustainability. Larger, visually stunning beaches with a more authentic, less developed atmosphere.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Natural Beauty", "Bahamian Culture", "Larger Beaches", "Sustainability"].map(t => (<span key={t} style={{ padding: '8px 16px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#274472', border: '1px solid #e2e8f0' }}>{t}</span>))}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(39, 68, 114, 0.08)', borderRadius: '25px', border: '1px solid rgba(39, 68, 114, 0.2)', textAlign: 'center', display: 'flex', flexDirection: window.innerWidth <= 600 ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <Award size={24} style={{ color: '#27472' }} />
                        <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: '700', margin: 0 }}>Winner: <span style={{ fontWeight: '400', color: '#475569' }}>Families prefer Castaway Cay. Beach lovers prefer Lookout Cay.</span></p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ UPPER VIDEO SECTION: CASTAWAY CAY VIRTUAL TOUR ═══════════════ */}
            <section style={{ padding: '100px 24px', backgroundColor: '#0f1c2e', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            Islands in Motion
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Castaway Cay: Virtual Tour & Walkthrough
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
                            Step onto the classic shores of Disney's signature private island paradise. This walkthrough showcases the family-friendly amenities, calm swimming lagoons, snorkeling trails, and the exclusive adult-only escape at Serenity Bay.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '25px' }}>
                            {["Family Lagoon", "Serenity Bay Tour", "Snorkeling Trails"].map(t => (
                                <span key={t} style={{ padding: '8px 18px', backgroundColor: '#274472', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8khCiqT-aFI"
                            title="Castaway Cay Overview & Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ EXPERIENCE GRIDS ═══════════════ */}
            <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: '3px solid #274472', paddingLeft: '12px' }}>Detailed Breakdown</span>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Family, Adult & Activity Comparison</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 1fr 1fr', gap: '24px', marginBottom: '60px' }}>
                        {/* FAMILY */}
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#274472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}><Users size={20} style={{ color: '#3b82f6' }} /> Family Experience</h3>
                            <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Castaway Cay</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Character meet-and-greets", "Family beaches", "Water play areas", "Easy transportation"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '14px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                                <div style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #bfdbfe' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Lookout Cay</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Cultural performances", "Educational experiences", "Natural exploration", "Splash areas"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '14px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: '0' }}><strong style={{ color: '#274472' }}>Winner:</strong> Castaway Cay</p>
                        </div>

                        {/* ADULTS */}
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#274472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}><Heart size={20} style={{ color: '#3b82f6' }} /> Adult-Only Areas</h3>
                            <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Castaway Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>Serenity Bay is widely considered one of the best private island adult beaches in cruising.</p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Quiet atmosphere", "Adults-only dining", "Relaxing environment"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                                <div style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #bfdbfe' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Lookout Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>Offers dedicated adult spaces with scenic views and natural surroundings.</p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Less crowded", "Natural surroundings", "Relaxed atmosphere"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: '0' }}><strong style={{ color: '#274472' }}>Winner:</strong> Castaway Cay</p>
                        </div>

                        {/* ACTIVITIES */}
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#274472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}><Anchor size={20} style={{ color: '#3b82f6' }} /> Activities</h3>
                            <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Castaway Cay</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Snorkeling", "Paddleboarding", "Bike rentals", "Parasailing"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                                <div style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #bfdbfe' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Lookout Cay</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{["Cultural experiences", "Nature exploration", "Beach recreation", "Local performances"].map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: '#475569' }}><CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />{item}</li>))}</ul>
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: '0' }}><strong style={{ color: '#27472' }}>Winner:</strong> Castaway Cay (More established offerings)</p>
                        </div>
                    </div>

                    {/* TRANSPORT & DINING ROW */}
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '24px' }}>
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#27472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}><Bike size={20} style={{ color: '#3b82f6' }} /> Transportation</h3>
                            <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Castaway Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>Walk directly off the ship and begin enjoying the island immediately. Simple, easy navigation.</p>
                                </div>
                                <div style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #bfdbfe' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Lookout Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>Requires more walking from the pier. Assistance is available if needed.</p>
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: '0' }}><strong style={{ color: '#27472' }}>Winner:</strong> Castaway Cay (Unbeatable convenience)</p>
                        </div>
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#27472', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}><UtensilsCrossed size={20} style={{ color: '#3b82f6' }} /> Dining</h3>
                            <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Castaway Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>BBQ lunches, family dining locations, Serenity Bay dining, snacks and beverages. Efficient and familiar.</p>
                                </div>
                                <div style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #bfdbfe' }}>
                                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Lookout Cay</h4>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>Incorporates Bahamian flavors, local ingredients, and regional influences. Destination-focused.</p>
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: '0' }}><strong style={{ color: '#27472' }}>Winner:</strong> Lookout Cay (More unique culinary experience)</p>
                        </div>
                    </div>

                    {/* MAGIC VS CULTURE */}
                    <div style={{ backgroundColor: '#1e293b', borderRadius: '30px', padding: 'clamp(30px, 5vw, 50px)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '30px' }}>Disney Magic vs Bahamian Culture</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                            <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <div style={{ color: '#cbd5e1', marginBottom: '15px' }}><Wand2 size={28} /></div>
                                <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Castaway Cay</h4>
                                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>Disney characters, theming, atmosphere, and storytelling. Feels like an extension of the ship.</p>
                            </div>
                            <div style={{ padding: '24px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                <div style={{ color: '#38bdf8', marginBottom: '15px' }}><Globe size={28} /></div>
                                <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Lookout Cay</h4>
                                <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>Bahamian music, local art, cultural storytelling. Feels more like an authentic destination.</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '16px', color: '#38bdf8', lineHeight: '1.7', fontStyle: 'italic', margin: '0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>"Winner: Depends entirely on your travel style."</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ IMAGE GALLERY: ISLAND EXPERIENCES ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '15px' }}>Visual Discovery</span>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#274472', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.1' }}>A Gallery of Island Magic</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : window.innerWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: '20px'
                    }}>
                        <style>{`
                            .island-gallery-item {
                                position: relative;
                                border-radius: 20px;
                                overflow: hidden;
                                aspect-ratio: 4/3;
                                background-color: #f1f5f9;
                                box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                            }
                            .island-gallery-img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                            }
                            .island-gallery-item:hover .island-gallery-img {
                                transform: scale(1.1);
                            }
                            .island-gallery-overlay {
                                position: absolute;
                                inset: 0;
                                background: linear-gradient(to top, rgba(15, 28, 46, 0.8) 0%, transparent 50%);
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                padding: 25px;
                                opacity: 0;
                                transition: opacity 0.4s ease;
                            }
                            .island-gallery-item:hover .island-gallery-overlay {
                                opacity: 1;
                            }
                            .island-gallery-label {
                                color: #3b82f6;
                                font-size: 10px;
                                font-weight: 800;
                                text-transform: uppercase;
                                letter-spacing: 2px;
                                margin-bottom: 5px;
                            }
                            .island-gallery-caption {
                                color: #ffffff;
                                font-size: 16px;
                                font-weight: 700;
                            }
                        `}</style>

                        {/* Gallery 1: Mickey & Minnie Beach - Castaway Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryMickeyMinnie} alt="Mickey & Minnie at Castaway Cay Beach" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">CASTAWAY CAY</span>
                                <span className="island-gallery-caption">Mickey & Minnie Beach Characters</span>
                            </div>
                        </div>

                        {/* Gallery 2: Turquoise Beach - Lookout Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryTurquoiseBeach} alt="Turquoise Water Beach at Lookout Cay" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">LOOKOUT CAY</span>
                                <span className="island-gallery-caption">Stunning Turquoise Waters</span>
                            </div>
                        </div>

                        {/* Gallery 3: Donald & Daisy - Castaway Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryDonaldDaisy} alt="Donald & Daisy Duck at Castaway Cay" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">CASTAWAY CAY</span>
                                <span className="island-gallery-caption">Donald & Daisy Beach Encounter</span>
                            </div>
                        </div>

                        {/* Gallery 4: Family Beach Day - Castaway Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryFamilyBeach} alt="Family Beach Day at Castaway Cay" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">CASTAWAY CAY</span>
                                <span className="island-gallery-caption">Family Beach Day</span>
                            </div>
                        </div>

                        {/* Gallery 5: Festive Celebration - Lookout Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryFestive} alt="Festive Celebration on Disney Cruise" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">LOOKOUT CAY</span>
                                <span className="island-gallery-caption">Festive Island Celebrations</span>
                            </div>
                        </div>

                        {/* Gallery 6: Hammock Relaxation - Castaway Cay */}
                        <div className="island-gallery-item">
                            <img src={GalleryHammock} alt="Relaxing in Hammock at Castaway Cay" className="island-gallery-img" />
                            <div className="island-gallery-overlay">
                                <span className="island-gallery-label">CASTAWAY CAY</span>
                                <span className="island-gallery-caption">Hammock Island Relaxation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ PROS & CONS SECTION ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: "#ffffff", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '15px' }}>The Pros & Cons</h2>
                        <p style={{ color: '#38bdf8', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Honest Assessment</p>
                    </div>
                    {/* SIDE-BY-SIDE PROS & CONS IMAGES */}
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '50px' }}>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
                            <img src={ProsCastaway} alt="Castaway Cay Highlights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)' }} />
                            <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: 'rgba(56,189,248,0.2)', color: '#38bdf8', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(56,189,248,0.3)' }}>Castaway Cay</div>
                        </div>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
                            <img src={ProsLookout} alt="Lookout Cay Highlights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)' }} />
                            <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: 'rgba(56,189,248,0.2)', color: '#38bdf8', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(56,189,248,0.3)' }}>Lookout Cay</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '40px', position: 'relative' }}>
                        {window.innerWidth > 768 && <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>}
                        <div style={{ paddingRight: window.innerWidth > 768 ? '30px' : '0' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '10px', borderRadius: '14px', display: 'flex' }}><CheckCircle size={22} style={{ color: '#38bdf8' }} /></div>
                                Castaway Cay
                            </h3>
                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { t: "Easier to navigate", d: "Compact, flat, simple layout." },
                                    { t: "More Disney magic", d: "Characters and themed areas abound." },
                                    { t: "Better family experience", d: "Tailored perfectly for kids." },
                                    { t: "Excellent adult beach", d: "Serenity Bay is iconic." },
                                    { t: "More developed activities", d: "Refined over 25+ years." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                        <div><h4 style={{ fontSize: '17px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4><p style={{ fontSize: '15px', color: '#f1f5f9', lineHeight: '1.6', margin: 0 }}>{item.d}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ paddingLeft: window.innerWidth > 768 ? '30px' : '0' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex' }}><Info size={22} style={{ color: '#94a3b8' }} /></div>
                                Lookout Cay
                            </h3>
                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { t: "Stunning natural beauty", d: "Larger, visually impressive beaches." },
                                    { t: "Authentic Bahamian culture", d: "Celebrates local heritage." },
                                    { t: "Larger beaches", d: "More space to spread out." },
                                    { t: "Unique dining experiences", d: "Culturally inspired menus." },
                                    { t: "New destination appeal", d: "The excitement of exploring somewhere fresh." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#94a3b8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                        <div><h4 style={{ fontSize: '17px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4><p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{item.d}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '40px', padding: '20px', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '15px' }}>
                                <p style={{ fontSize: '14px', color: '#cbd5e1', fontStyle: 'italic', margin: 0 }}><strong style={{ color: '#38bdf8' }}>Consideration:</strong> Less established activity offerings and fewer character experiences than Castaway Cay.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHICH IS BEST FOR YOU? ═══════════════ */}
            <section className="medi-audience-section" style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Selection Guide</span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Which Island Is Best For You?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr', gap: '30px', alignItems: 'stretch' }}>
                        <div style={{ backgroundColor: '#1e293b', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', color: '#ffffff', boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '14px', display: 'flex', color: '#cbd5e1' }}><Umbrella size={26} /></div>
                                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Choose Castaway Cay If:</h3>
                            </div>
                            <div style={{ display: 'grid', gap: '30px' }}>
                                {[
                                    { t: "You love Disney characters", d: "Character encounters are everywhere." },
                                    { t: "You're traveling with younger children", d: "It's designed perfectly for kids." },
                                    { t: "You want maximum convenience", d: "Walk right off the ship." },
                                    { t: "You enjoy classic Disney experiences", d: "It feels like a theme park on water." },
                                    { t: "You prefer calm swimming conditions", d: "The lagoon is incredibly protected." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                        <div><h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4><p style={{ fontSize: '15px', color: '#f1f5f9', lineHeight: '1.6', margin: 0 }}>{item.d}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', border: '1px solid #e2e8f0', color: '#0f172a', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', color: '#274472' }}><Compass size={26} /></div>
                                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Choose Lookout Cay If:</h3>
                            </div>
                            <div style={{ display: 'grid', gap: '30px', flexGrow: 1 }}>
                                {[
                                    { t: "You love beautiful beaches", d: "The natural scenery is breathtaking." },
                                    { t: "You enjoy cultural experiences", d: "Authentic Bahamian heritage." },
                                    { t: "You appreciate local history", d: "Deep connection to the Bahamas." },
                                    { t: "You want beyond Disney theming", d: "A true destination, not a theme park." },
                                    { t: "You enjoy exploring new places", d: "Disney's newest island destination." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: '#94a3b8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                        <div><h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>{item.t}</h4><p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ LOWER VIDEO SECTION: LOOKOUT CAY JUNKANOO CELEBRATION ═══════════════ */}
            <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            Bahamian Culture
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Lookout Cay: Junkanoo Celebration
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
                            Go behind the scenes of Disney's newest private destination. Discover how local Bahamian artists, historians, and musicians brought the rich tradition of Junkanoo to life, creating an authentic, immersive cultural celebration at Lighthouse Point.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '25px' }}>
                            {["Junkanoo Costumes", "Bahamian Music", "Lighthouse Point Art"].map(t => (
                                <span key={t} style={{ padding: '8px 18px', backgroundColor: '#274472', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/J29yXxshmlA"
                            title="Lookout Cay: Junkanoo Celebration"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ANGELA HUGHES AUTHORITY ═══════════════ */}
            <section className="medi-authority-section">
                <style>{`@keyframes prestige-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>Choosing between two world-class island destinations requires an expert who understands the subtle differences that impact your beach day experience.</p>
                    </div>
                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring" style={{ animation: 'none', border: 'none', position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '50%',
                                    border: '2px dashed rgba(255, 255, 255, 0.4)',
                                    animation: 'prestige-spin 25s linear infinite',
                                    pointerEvents: 'none'
                                }} />
                                <img src={profileAH} alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)', animation: 'none', position: 'relative', zIndex: 1 }} />
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
                        <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>"Angela and her team help you weigh the nuances of Castaway Cay vs. Lookout Cay to book the exact island experience that matches your vacation style."</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Castaway Cay vs Lookout Cay<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {islandFaqs.map((faq, index) => (
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
            <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: "#274472", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px' }}>Final Verdict</h2>
                        <p style={{ color: '#27472', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>Castaway Cay vs. Lookout Cay</p>
                    </div>
                    <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
                        <p style={{ marginBottom: '25px' }}>Disney has created two outstanding island experiences—but they serve different purposes.</p>
                        <p style={{ marginBottom: '40px', fontSize: '16px', color: '#64748b' }}>
                            Choose <strong style={{ color: '#1e293b' }}>Castaway Cay</strong> if you're looking for classic Disney magic, convenience, family fun, character experiences, and one of the best adult beaches in cruising.
                        </p>
                        <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(39, 68, 114, 0.15)', margin: '0 auto 40px' }}></div>
                        <p style={{ marginBottom: '10px', fontSize: '16px', color: '#64748b' }}>
                            Choose <strong style={{ color: '#1e293b' }}>Lookout Cay</strong> if you're looking for breathtaking beaches, cultural immersion, authentic island experiences, and a ship that appeals equally to families and adults.
                        </p>
                        <p style={{ margin: '40px 0 0 0', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '800', color: '#1e293b', lineHeight: '1.4' }}>
                            The best solution? Experience both and decide for yourself.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                        Ready To Choose Your <span style={{ color: '#38bdf8' }}>Perfect Island Day?</span>
                    </h2>
                    <div style={{ width: '50px', height: '3px', backgroundColor: '#38bdf8', margin: '0 auto 30px' }}></div>
                    <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '40px' }}>Trips & Ships Luxury Travel provides personalized guidance to ensure you pick the perfect island destination for your specific cruise itinerary and travel style.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px 30px', marginBottom: '50px' }}>
                        {["Ship & Island Matching", "Itinerary Analysis", "Stateroom Selection", "Promotional Pricing Alerts"].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <button style={{ backgroundColor: '#38bdf8', color: '#1e293b', padding: '18px 40px', fontSize: '16px', fontWeight: '800', borderRadius: '50px', border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                            <Phone size={18} fill="#1e293b" />
                            Schedule an Island Consultation
                        </button>
                        <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Expert Disney Island Guidance</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CastawayCayVsLookoutCay