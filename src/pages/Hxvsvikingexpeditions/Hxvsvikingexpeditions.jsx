import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// // ── Replace these with your actual image assets ──
// import hxShipImg from '../../assets/HXvsViking/hx-ship.webp'
// import vikingShipImg from '../../assets/HXvsViking/viking-ship.webp'
// import antarcticaImg from '../../assets/HXvsViking/antarctica.webp'
// import arcticImg from '../../assets/HXvsViking/arctic.webp'
// import wildlifeImg from '../../assets/HXvsViking/wildlife.webp'
// import galapagosImg from '../../assets/HXvsViking/galapagos.webp'
// import svalbardImg from '../../assets/HXvsViking/svalbard.webp'
// import greenlandImg from '../../assets/HXvsViking/greenland.webp'
// import hxInteriorImg from '../../assets/HXvsViking/hx-interior.webp'
// import vikingInteriorImg from '../../assets/HXvsViking/viking-interior.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, LayoutList, Heart, Sun, Award,
    Moon, Music,
    Mic, FileText, GraduationCap, Camera, Snowflake, Waves, Minus
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
// import hero1 from '../../assets/HXvsViking/hero1.jpg'
// import hero2 from '../../assets/HXvsViking/hero2.jpg'
// import hero3 from '../../assets/HXvsViking/hero3.jpg'

function HXvsVikingExpeditions() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % mediMistakes.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const mediFaqs = [
        { question: 'Is HX Expeditions better than Viking Expeditions?', answer: 'It depends on travel style. HX is generally more expedition focused, while Viking emphasizes refined luxury.' },
        { question: 'Which is more luxurious, Viking or HX?', answer: 'Viking typically offers a more traditional luxury atmosphere onboard.' },
        { question: 'Which expedition line is better for Antarctica?', answer: 'HX is often stronger for active expedition immersion, while Viking appeals to travelers prioritizing luxury comfort.' },
        { question: 'Does Viking go to the Galápagos?', answer: 'No. HX operates Galápagos expeditions while Viking currently does not.' },
        { question: 'Which expedition line is better for wildlife?', answer: 'HX is generally more wildlife and exploration focused.' },
        { question: 'Are HX cruises more adventurous than Viking?', answer: 'Yes. HX typically offers a more expedition intensive atmosphere.' },
        { question: 'Which cruise line has smaller expedition ships?', answer: 'HX includes smaller expedition ships such as MS Spitsbergen and MS Santa Cruz II.' },
        { question: 'What is included on HX vs Viking cruises?', answer: 'Both include accommodations, meals and expedition programming, though inclusions vary by itinerary.' },
        { question: 'Which expedition line is better for older travelers?', answer: 'Both can work well, but mobility and activity levels should be carefully considered.' },
        { question: 'Which cruise line is better for first time expedition travelers?', answer: 'Viking may feel more approachable for luxury focused travelers, while HX is excellent for adventure minded first timers.' },
        { question: 'Are Viking expedition cruises luxury cruises?', answer: 'Yes. Viking expedition cruises strongly emphasize luxury comfort and refined onboard experiences.' },
        { question: 'Is HX more expedition focused than Viking?', answer: 'Yes. HX generally prioritizes exploration and expedition immersion more heavily.' },
        { question: 'Which expedition line is better for the Arctic?', answer: 'HX is often stronger for deeper Arctic exploration and wildlife focused itineraries.' },
        { question: 'What is the atmosphere like onboard Viking Expeditions?', answer: 'The atmosphere is elegant, quiet, refined and Scandinavian inspired.' },
        { question: 'Why use a luxury travel advisor for expedition cruises?', answer: 'Expedition cruising involves major differences in ship style, activity levels and destination focus where expert guidance is extremely valuable.' }
    ]

    const mediMistakes = [
        {
            title: 'Choosing Based Only on Price',
            desc: 'Price alone is a poor guide for expedition cruising. The atmosphere, expedition intensity, and included activities vary dramatically between HX and Viking.',
            bullets: [
                'HX: adventure and wildlife immersion first',
                'Viking: refined luxury with softer expedition approach'
            ]
        },
        {
            title: 'Underestimating Activity Levels',
            desc: 'HX expeditions often involve frequent Zodiac operations, active landings, and outdoor exploration. Travelers expecting a relaxed cruise atmosphere may be surprised by the physical demands of expedition travel.'
        },
        {
            title: 'Not Understanding Expedition Style Differences',
            desc: 'HX and Viking deliver very different onboard atmospheres. Booking without understanding those differences — casual and educational vs elegant and refined — leads to mismatched expectations.'
        },
        {
            title: 'Ignoring Destination Seasonality',
            desc: 'Both Antarctica and Arctic regions have narrow optimal seasons. Traveling outside peak season can mean reduced wildlife sightings, more challenging weather, and fewer landing opportunities.'
        }
    ]

    const vsSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ]
            },
            {
                "@type": "TravelAgency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in cruises, expeditions, safaris, and premium travel experiences."
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" }
            },
            {
                "@type": "WebPage",
                "name": "HX Expeditions vs Viking Expeditions",
                "url": "https://www.tripsandships.com/hx-vs-viking-expeditions",
                "description": "Expert comparison of HX Expeditions and Viking Expeditions from Trips & Ships Luxury Travel."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Expedition Cruises", "item": "https://www.tripsandships.com/expedition-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "HX vs Viking Expeditions", "item": "https://www.tripsandships.com/hx-vs-viking-expeditions" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is HX Expeditions better than Viking Expeditions?",
                        "acceptedAnswer": { "@type": "Answer", "text": "It depends on travel style. HX is generally more expedition focused, while Viking emphasizes refined luxury." }
                    },
                    {
                        "@type": "Question",
                        "name": "Which expedition line is better for Antarctica?",
                        "acceptedAnswer": { "@type": "Answer", "text": "HX is often stronger for active expedition immersion, while Viking appeals to travelers prioritizing luxury comfort." }
                    },
                    {
                        "@type": "Question",
                        "name": "Which expedition line is better for wildlife?",
                        "acceptedAnswer": { "@type": "Answer", "text": "HX is generally more wildlife and exploration focused." }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>HX Expeditions vs Viking Expeditions 2026 | Expert Expedition Cruise Comparison | Trips & Ships</title>
                <meta name="title" content="HX Expeditions vs Viking Expeditions 2026 | Expert Expedition Cruise Comparison" />
                <meta name="description" content="Compare HX Expeditions and Viking Expeditions with expert guidance from Angela Hughes, CEO of Trips & Ships Luxury Travel. Discover which expedition cruise line matches your travel style." />
                <meta name="keywords" content="HX Expeditions vs Viking Expeditions, expedition cruise comparison, HX vs Viking Antarctica, best expedition cruise line, luxury polar cruise comparison" />
                <script type="application/ld+json">{JSON.stringify(vsSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
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
                        <Anchor size={16} />
                        <span>Expedition Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions vs Viking Expeditions: Which Expedition Cruise Line Is Right For You?
                    </h1>
                </div>
            </section>

            {/* ── PREMIUM INTRO ── */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">EXPEDITION CRUISE EXPERTS</span>
                            <h2 className="medi-premium-heading">HX Expeditions and Viking Expeditions: Understanding The Differences</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                HX Expeditions and Viking Expeditions are both highly respected names in the expedition cruise world, but the experience they deliver feels very different.
                            </p>
                            <p className="medi-premium-lead-text">
                                Both cruise lines operate modern expedition ships and visit destinations such as Antarctica and the Arctic, yet they appeal to different types of travelers depending on how adventurous, active and exploration focused the experience should feel.
                            </p>
                            <p className="medi-premium-lead-text">
                                For travelers considering a luxury expedition cruise, understanding the differences between HX and Viking can dramatically impact overall satisfaction with the journey.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    At Trips & Ships Luxury Travel, we help travelers compare expedition cruise lines based on:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: Compass, label: 'Exploration style' },
                                        { icon: Star, label: 'Comfort expectations' },
                                        { icon: MapPin, label: 'Destination priorities' },
                                        { icon: Sun, label: 'Activity levels' },
                                        { icon: Camera, label: 'Wildlife interests' },
                                        { icon: Ship, label: 'Ship atmosphere' },
                                        { icon: Sparkles, label: 'Expedition intensity' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box"><Icon size={20} /></div>
                                            <span className="medi-immersion-card-title">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    Angela Hughes and the Trips & Ships Luxury Travel team specialize in helping travelers match the right expedition cruise experience to their travel style, comfort preferences and adventure goals.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide trusted expedition cruise expertise travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEW: QUICK COMPARISON TABLE (inline CSS — theme colors only) ── */}
            <section style={{
                background: 'var(--medi-bg-dark)',
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-120px', right: '-120px',
                    width: '500px', height: '500px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.18) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(39,68,114,0.3)',
                            border: '1px solid rgba(39,68,114,0.5)',
                            color: '#94a3b8', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 20px',
                            borderRadius: '20px', marginBottom: '20px'
                        }}>SIDE BY SIDE COMPARISON</span>
                        <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, margin: '0 0 16px' }}>
                            Quick Comparison Table
                        </h2>
                        <div style={{ width: '60px', height: '3px', background: 'var(--medi-navy)', borderRadius: '2px', margin: '0 auto' }} />
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%', borderCollapse: 'separate', borderSpacing: '0',
                            borderRadius: '16px', overflow: 'hidden',
                            border: '1px solid rgba(39,68,114,0.3)'
                        }}>
                            <thead>
                                <tr>
                                    {[
                                        { label: 'Feature', bg: 'rgba(39,68,114,0.25)' },
                                        { label: 'HX Expeditions', bg: 'var(--medi-navy)' },
                                        { label: 'Viking Expeditions', bg: 'var(--medi-bg-dark2)' }
                                    ].map(({ label, bg }, i) => (
                                        <th key={i} style={{
                                            padding: '18px 24px', textAlign: 'left',
                                            background: bg,
                                            color: '#ffffff', fontSize: '0.8rem',
                                            fontWeight: 700, letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            borderBottom: '1px solid rgba(39,68,114,0.3)'
                                        }}>{label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Expedition Focus', 'Strong expedition emphasis', 'Luxury exploration focus'],
                                    ['Atmosphere', 'Casual, active, educational', 'Elegant, refined, quieter'],
                                    ['Wildlife Focus', 'Very strong', 'Strong'],
                                    ['Zodiac Operations', 'Extensive', 'Moderate to extensive'],
                                    ['Expedition Team Presence', 'Highly immersive', 'More balanced'],
                                    ['Luxury Level', 'Expedition comfort', 'Higher luxury emphasis'],
                                    ['Best For', 'Adventure minded travelers', 'Luxury focused travelers'],
                                    ['Galápagos', 'Yes', 'No'],
                                    ['Hybrid Ships', 'Yes', 'Yes'],
                                    ['Educational Focus', 'Strong science programming', 'Cultural enrichment emphasis'],
                                ].map(([feature, hx, viking], rowIdx) => (
                                    <tr key={rowIdx} style={{
                                        background: rowIdx % 2 === 0
                                            ? 'rgba(39,68,114,0.08)'
                                            : 'rgba(15,28,46,0.6)'
                                    }}>
                                        <td style={{
                                            padding: '15px 24px', color: '#94a3b8',
                                            fontSize: '0.88rem', fontWeight: 600,
                                            borderBottom: '1px solid rgba(39,68,114,0.15)'
                                        }}>{feature}</td>
                                        <td style={{
                                            padding: '15px 24px', color: '#e2e8f0',
                                            fontSize: '0.88rem',
                                            borderBottom: '1px solid rgba(39,68,114,0.15)',
                                            borderLeft: '1px solid rgba(39,68,114,0.2)'
                                        }}>
                                            {hx === 'Yes'
                                                ? <span style={{ color: 'var(--medi-green)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}><CheckCircle size={14} />Yes</span>
                                                : hx === 'No'
                                                    ? <span style={{ color: 'var(--medi-red)', fontWeight: 600 }}>No</span>
                                                    : hx}
                                        </td>
                                        <td style={{
                                            padding: '15px 24px', color: '#e2e8f0',
                                            fontSize: '0.88rem',
                                            borderBottom: '1px solid rgba(39,68,114,0.15)',
                                            borderLeft: '1px solid rgba(39,68,114,0.2)'
                                        }}>
                                            {viking === 'Yes'
                                                ? <span style={{ color: 'var(--medi-green)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}><CheckCircle size={14} />Yes</span>
                                                : viking === 'No'
                                                    ? <span style={{ color: 'var(--medi-red)', fontWeight: 600 }}>No</span>
                                                    : viking}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── NEW: SHIP IMAGE SHOWCASE — HX vs Viking side by side (inline CSS) ── */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            color: 'var(--medi-navy)', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 18px',
                            borderRadius: '20px', marginBottom: '16px'
                        }}>SHIPS & ONBOARD EXPERIENCE</span>
                        <h2 className="medi-section-heading">HX Ships vs Viking Expedition Ships</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                        {/* HX Ships */}
                        <div style={{
                            background: '#ffffff', borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                {/* <img src={hxShipImg} alt="HX Expedition Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 60%)'
                                }} />
                                <div style={{
                                    position: 'absolute', bottom: '16px', left: '20px',
                                    background: 'var(--medi-navy)',
                                    color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                                    letterSpacing: '2px', padding: '5px 14px', borderRadius: '20px'
                                }}>HX EXPEDITIONS</div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                                    HX ships are purpose built for expedition exploration. Highlights include:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Hybrid powered ships', 'Science centers', 'Expedition lounges', 'Casual atmosphere', 'Strong expedition team integration'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Popular HX ships include:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['MS Roald Amundsen', 'MS Fridtjof Nansen', 'MS Fram', 'MS Spitsbergen', 'MS Santa Cruz II'].map((ship, i) => (
                                        <span key={i} style={{
                                            background: 'var(--medi-bg-soft)',
                                            color: 'var(--medi-navy)',
                                            fontSize: '0.78rem', fontWeight: 600,
                                            padding: '4px 12px', borderRadius: '20px',
                                            border: '1px solid rgba(39,68,114,0.15)'
                                        }}>{ship}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Viking Ships */}
                        <div style={{
                            background: '#ffffff', borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                {/* <img src={vikingShipImg} alt="Viking Expedition Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 60%)'
                                }} />
                                <div style={{
                                    position: 'absolute', bottom: '16px', left: '20px',
                                    background: 'var(--medi-bg-dark2)',
                                    color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                                    letterSpacing: '2px', padding: '5px 14px', borderRadius: '20px'
                                }}>VIKING EXPEDITIONS</div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                                    Viking expedition ships emphasize:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Elegant Scandinavian interiors', 'Refined dining', 'Spacious suites', 'Quiet luxury atmosphere', 'Sophisticated public spaces'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div style={{
                                    background: 'var(--medi-bg-soft)',
                                    borderLeft: '3px solid var(--medi-navy)',
                                    borderRadius: '0 8px 8px 0',
                                    padding: '14px 18px'
                                }}>
                                    <p style={{ color: '#374151', fontSize: '0.88rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                        Viking tends to feel more upscale from a traditional luxury cruise perspective.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION PHILOSOPHY (excel section) ── */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">EXPEDITION COMPARISON // HX VS VIKING</div>
                <div className="medi-excel-coord coord-tr">90.0000° S, 0.0000° W</div>
                <div className="medi-excel-coord coord-bl">78.9167° N, 11.9333° E</div>
                <div className="medi-excel-coord coord-br">72.0000° N, 40.0000° W</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>

                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Expedition Philosophy Differences</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX Expeditions and Viking Expeditions take distinctly different approaches to expedition travel.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    HX Expeditions — HX is deeply expedition focused. The experience revolves around:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Compass, label: 'Exploration' },
                                        { icon: Camera, label: 'Wildlife encounters' },
                                        { icon: Waves, label: 'Expedition landings' },
                                        { icon: GraduationCap, label: 'Science programming' },
                                        { icon: Star, label: 'Active discovery' },
                                        { icon: Calendar, label: 'Flexible itineraries' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '16px', lineHeight: 1.6 }}>
                                    The atmosphere onboard tends to feel more adventurous, educational and destination driven.
                                </p>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Viking Expeditions — Viking blends expedition travel with a more classic luxury cruise atmosphere. The experience emphasizes:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Sparkles, label: 'Scandinavian elegance' },
                                        { icon: Crown, label: 'Refined onboard spaces' },
                                        { icon: Globe, label: 'Cultural enrichment' },
                                        { icon: Heart, label: 'Comfortable exploration' },
                                        { icon: Ship, label: 'Destination focused cruising' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '16px', lineHeight: 1.6 }}>
                                    Viking generally appeals to travelers wanting expedition travel with a softer luxury approach.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            HX generally offers more remote and wildlife focused expedition diversity, particularly in the Galápagos and High Arctic.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── NEW: DESTINATIONS — image grid (inline CSS) ── */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            color: 'var(--medi-navy)', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 18px', borderRadius: '20px', marginBottom: '16px'
                        }}>WHERE THEY SAIL</span>
                        <h2 className="medi-section-heading">Destinations Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* HX Destinations — image strip */}
                    <div style={{ marginBottom: '48px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'var(--medi-navy)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Compass size={18} color="#fff" />
                            </div>
                            <h3 style={{ color: 'var(--medi-navy)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                                HX Expeditions Destinations — HX sails to:
                            </h3>
                        </div>

                        {/* 4-image grid for HX */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
                            {[
                                // { img: antarcticaImg, label: 'Antarctica' },
                                // { img: galapagosImg, label: 'Galápagos' },
                                // { img: greenlandImg, label: 'Greenland' },
                                // { img: svalbardImg, label: 'Svalbard' },
                            ].map(({ img, label }, i) => (
                                <div key={i} style={{
                                    position: 'relative', height: '180px',
                                    borderRadius: '14px', overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(39,68,114,0.12)'
                                }}>
                                    {/* <img src={img} alt={label}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,28,46,0.75) 0%, transparent 55%)'
                                    }} />
                                    <span style={{
                                        position: 'absolute', bottom: '12px', left: '14px',
                                        color: '#fff', fontSize: '0.82rem', fontWeight: 700
                                    }}>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* remaining HX destinations as chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['Alaska', 'Iceland', 'Norway', 'Patagonia', 'Northwest Passage', 'British Isles'].map((dest, i) => (
                                <span key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                                    background: 'var(--medi-bg-soft)', color: 'var(--medi-navy)',
                                    fontSize: '0.82rem', fontWeight: 600,
                                    padding: '6px 14px', borderRadius: '20px',
                                    border: '1px solid rgba(39,68,114,0.15)'
                                }}>
                                    <MapPin size={11} />{dest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(39,68,114,0.12)', margin: '0 0 40px' }} />

                    {/* Viking Destinations */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'var(--medi-bg-dark2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Globe size={18} color="#fff" />
                            </div>
                            <h3 style={{ color: 'var(--medi-navy)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                                Viking Expeditions Destinations — Viking focuses on:
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                            {['Antarctica', 'Arctic regions', 'Great Lakes', 'North America', 'Europe', 'South America'].map((dest, i) => (
                                <span key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                                    background: 'var(--medi-bg-dark)',
                                    color: '#94a3b8',
                                    fontSize: '0.82rem', fontWeight: 600,
                                    padding: '6px 14px', borderRadius: '20px',
                                    border: '1px solid rgba(39,68,114,0.3)'
                                }}>
                                    <MapPin size={11} />{dest}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            padding: '16px 20px',
                            background: 'var(--medi-bg-soft)',
                            borderLeft: '4px solid var(--medi-navy)',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p style={{ color: '#374151', fontSize: '0.9rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                HX generally offers more remote and wildlife focused expedition diversity, particularly in the Galápagos and High Arctic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DIFF CARDS: Wildlife, Luxury ── */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DETAILED COMPARISON</span>
                        <h2 className="medi-diff-main-title">Wildlife, Exploration & Luxury: HX vs Viking</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1: Wildlife & Exploration */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Camera size={24} /></div>
                                <h3 className="medi-diff-card-title">Wildlife & Exploration Style</h3>
                            </div>

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>HX Expeditions — stronger for travelers prioritizing:</p>
                            <ul className="medi-diff-experience-list">
                                {['Wildlife immersion', 'Frequent Zodiac operations', 'Expedition landings', 'Adventure intensity', 'Active exploration'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '18px 0' }} />

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>Viking Expeditions — better suited for travelers wanting:</p>
                            <ul className="medi-diff-experience-list">
                                {['Scenic expedition cruising', 'Comfortable exploration', 'Softer activity levels', 'Luxury atmosphere', 'Cultural enrichment'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div className="medi-diff-conclusion-box" style={{ marginTop: '16px' }}>
                                <p className="medi-diff-conclusion-text">Both lines offer strong expedition experiences, but HX usually feels more expedition intensive.</p>
                            </div>
                        </div>

                        {/* Card 2: Luxury */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Crown size={24} /></div>
                                <h3 className="medi-diff-card-title">Luxury Comparison</h3>
                            </div>

                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '10px', fontWeight: 700 }}>BOTH</div>
                                </div>
                                <div className="medi-diff-stat-label">EXPEDITION LUXURY</div>
                            </div>

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>HX Luxury Style — focuses on:</p>
                            <ul className="medi-diff-focus-list-premium">
                                {['Comfortable expedition accommodations', 'Scandinavian simplicity', 'Expedition practicality', 'Nature immersion'].map((item, i) => (
                                    <li key={i}><span className="medi-diff-list-num">0{i + 1}</span><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="medi-diff-card-text" style={{ fontStyle: 'italic', marginTop: '10px' }}>Luxury is present, but exploration comes first.</p>

                            <div style={{ height: '1px', background: 'rgba(15,28,46,0.08)', margin: '18px 0' }} />

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>Viking Luxury Style — focuses more heavily on:</p>
                            <ul className="medi-diff-experience-list">
                                {['Elegant ship design', 'Elevated dining', 'Quiet sophistication', 'Refined service'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div className="medi-diff-conclusion-box" style={{ marginTop: '14px' }}>
                                <p className="medi-diff-conclusion-text">Travelers prioritizing traditional luxury often lean toward Viking. Travelers prioritizing exploration intensity often prefer HX.</p>
                            </div>
                        </div>

                        {/* Card 3: Interiors image comparison */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Ship size={24} /></div>
                                <h3 className="medi-diff-card-title">Onboard Atmosphere</h3>
                            </div>

                            <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '14px', height: '140px' }}>
                                {/* <img src={hxInteriorImg} alt="HX Expeditions interior"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            </div>
                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>HX — Casual, active, educational</p>
                            <p className="medi-diff-card-text">Science centers, expedition lounges, and a destination-driven atmosphere where exploration comes first.</p>

                            <div style={{ borderRadius: '10px', overflow: 'hidden', margin: '14px 0', height: '140px' }}>
                                {/* <img src={vikingInteriorImg} alt="Viking Expeditions interior"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            </div>
                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>Viking — Elegant, refined, quieter</p>
                            <p className="medi-diff-card-text">Spacious suites, refined dining and a quiet Scandinavian luxury atmosphere.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEW: ANTARCTICA & ARCTIC IMAGE SECTIONS (inline CSS) ── */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            color: 'var(--medi-navy)', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 18px', borderRadius: '20px', marginBottom: '16px'
                        }}>DESTINATION DEEP DIVE</span>
                        <h2 className="medi-section-heading">Which Is Better For Antarctica & Arctic Cruises?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Antarctica */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px',
                        marginBottom: '48px', alignItems: 'start'
                    }}>
                        {/* Antarctica image */}
                        <div style={{
                            position: 'relative', borderRadius: '20px', overflow: 'hidden',
                            height: '420px', boxShadow: '0 8px 32px rgba(39,68,114,0.15)'
                        }}>
                            {/* <img src={antarcticaImg} alt="Antarctica expedition"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 50%)'
                            }} />
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                                <Snowflake size={28} color="#fff" style={{ marginBottom: '8px' }} />
                                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>Antarctica</h3>
                            </div>
                        </div>

                        {/* Antarctica content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{
                                background: '#ffffff', borderRadius: '16px', padding: '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)'
                            }}>
                                <p style={{ color: 'var(--medi-navy)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>HX Antarctica Strengths</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Strong expedition heritage', 'Active exploration focus', 'Frequent landings', 'Expedition depth', 'Wildlife immersion'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: '#ffffff', borderRadius: '16px', padding: '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)'
                            }}>
                                <p style={{ color: 'var(--medi-bg-dark2)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Viking Antarctica Strengths</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['More refined onboard luxury', 'Spacious accommodations', 'Softer expedition atmosphere', 'Elegant public areas'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-bg-dark2)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: '4px solid var(--medi-navy)',
                                borderRadius: '0 10px 10px 0', padding: '16px 20px'
                            }}>
                                <p style={{ color: '#374151', fontSize: '0.88rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    For travelers seeking maximum expedition immersion, HX often has the advantage. For travelers prioritizing luxury comfort alongside exploration, Viking may appeal more.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(39,68,114,0.12)', margin: '0 0 48px' }} />

                    {/* Arctic */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
                        {/* Arctic content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{
                                background: '#ffffff', borderRadius: '16px', padding: '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)'
                            }}>
                                <p style={{ color: 'var(--medi-navy)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>HX Arctic Strengths — HX is particularly strong in:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Svalbard', 'Greenland', 'Polar wildlife', 'High Arctic exploration', 'Remote expedition experiences'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: '#ffffff', borderRadius: '16px', padding: '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)'
                            }}>
                                <p style={{ color: 'var(--medi-bg-dark2)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Viking Arctic Strengths — Viking excels at:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {['Comfortable Arctic exploration', 'Scenic expedition cruising', 'Cultural Arctic experiences'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <CheckCircle size={15} style={{ color: 'var(--medi-bg-dark2)', flexShrink: 0 }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: '4px solid var(--medi-navy)',
                                borderRadius: '0 10px 10px 0', padding: '16px 20px'
                            }}>
                                <p style={{ color: '#374151', fontSize: '0.88rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    HX generally feels more expedition focused in the Arctic overall.
                                </p>
                            </div>
                        </div>

                        {/* Arctic image */}
                        <div style={{
                            position: 'relative', borderRadius: '20px', overflow: 'hidden',
                            height: '420px', boxShadow: '0 8px 32px rgba(39,68,114,0.15)'
                        }}>
                            {/* <img src={arcticImg} alt="Arctic expedition"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 50%)'
                            }} />
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                                <Compass size={28} color="#fff" style={{ marginBottom: '8px' }} />
                                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>Arctic</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERT INSIGHT ── */}
            <section id="hx-viking-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes - Expedition Cruise Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Choosing The Right Expedition Cruise <br className="medi-growth-title-break" />Line For Your Travel Style
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in helping travelers match the right expedition cruise experience to their travel style, comfort preferences and adventure goals.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    The right expedition line depends heavily on traveler personality and expectations. Angela consistently evaluates:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Exploration style', 'Comfort expectations', 'Destination priorities', 'Activity levels', 'Wildlife interests', 'Expedition intensity'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                For travelers seeking maximum expedition immersion, HX often has the advantage. For travelers prioritizing luxury comfort alongside exploration, Viking may appeal more.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition cruising', icon: Compass },
                                        { title: 'Polar travel', icon: Snowflake },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Global luxury travel planning', icon: Globe }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">HX Expeditions Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Camera, label: 'Wildlife lovers' },
                                    { icon: Compass, label: 'Adventure travelers' },
                                    { icon: Star, label: 'Expedition focused travelers' },
                                    { icon: Snowflake, label: 'Polar enthusiasts' },
                                    { icon: Sun, label: 'Travelers seeking active exploration' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Viking Expeditions Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Crown, label: 'Luxury focused travelers' },
                                    { icon: Heart, label: 'Softer adventure travelers' },
                                    { icon: Sparkles, label: 'Guests wanting refined onboard atmosphere' },
                                    { icon: Ship, label: 'Travelers new to expedition cruising' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WILDLIFE IMAGE SECTION (inline CSS) ── */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: '0 8px 32px rgba(39,68,114,0.15)' }}>
                            {/* <img src={wildlifeImg} alt="Antarctica wildlife"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.7) 0%, transparent 55%)'
                            }} />
                            <span style={{
                                position: 'absolute', bottom: '20px', left: '24px',
                                color: '#fff', fontSize: '1rem', fontWeight: 700
                            }}>Wildlife Immersion</span>
                        </div>
                        <div>
                            <span style={{
                                display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                                color: 'var(--medi-navy)', fontSize: '11px', fontWeight: 700,
                                letterSpacing: '3px', padding: '5px 16px', borderRadius: '20px', marginBottom: '16px'
                            }}>WILDLIFE & EXPLORATION</span>
                            <h2 style={{ color: 'var(--medi-navy)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2 }}>
                                Which Expedition Line Is Better For Wildlife?
                            </h2>
                            <div style={{ width: '50px', height: '3px', background: 'var(--medi-navy)', borderRadius: '2px', marginBottom: '24px' }} />
                            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                HX is generally more wildlife and exploration focused. HX is generally stronger for travelers prioritizing wildlife immersion, frequent Zodiac operations, expedition landings, adventure intensity and active exploration.
                            </p>
                            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                Viking is better suited for travelers wanting scenic expedition cruising, comfortable exploration, softer activity levels, luxury atmosphere and cultural enrichment.
                            </p>
                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: '4px solid var(--medi-navy)',
                                borderRadius: '0 8px 8px 0', padding: '14px 18px'
                            }}>
                                <p style={{ color: '#374151', fontSize: '0.88rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                    Both lines offer strong expedition experiences, but HX usually feels more expedition intensive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON MISTAKES SLIDER ── */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID EXPEDITION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">Common Expedition Booking Mistakes</h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide">
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div key={idx} className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}>
                                        <div className="medi-mistake-slide-header">
                                            <span className="medi-mistake-card-num">0{idx + 1}</span>
                                            <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                        </div>
                                        <div className="medi-mistake-slide-body">
                                            <p className="medi-mistake-card-description">{mistake.desc}</p>
                                            {mistake.bullets && mistake.bullets.length > 0 && (
                                                <ul className="medi-mistake-card-bullets-list">
                                                    {mistake.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} className="medi-mistake-card-bullet-item">
                                                            <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                onClick={() => setMediActiveMistake(idx)}
                                aria-label={`Go to slide ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

         

            {/* ── ANGELA HUGHES AUTHORITY BOX ── */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes & Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <img src={Profile_AH} alt="Angela Hughes"
                                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)', animation: 'reverse-spin 30s linear infinite' }} /> */}
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Sparkles, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
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

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Choose The Right Expedition Cruise Line?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Choosing between HX Expeditions and Viking Expeditions depends on the type of expedition experience you truly want. The right ship, itinerary and expedition style can dramatically shape your overall experience.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel provides personalized expert guidance to help travelers confidently choose the best expedition cruise line for their goals.
                        </p>
                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Contact Trips & Ships Luxury Travel today to begin planning your expedition adventure.</span>
                        </div>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare Expedition Lines
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HXvsVikingExpeditions