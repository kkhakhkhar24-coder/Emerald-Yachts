import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// ── Replace these with your actual image assets ──
import disneyShipImg from '../../assets/Disneyvsroyalcaribbean/disney-cruise-line-caribbean-cruise-vacation-tropical-island-port-ocean-view.jpg'
import rcShipImg from '../../assets/Disneyvsroyalcaribbean/disney-cruise-line-vacation-packages-special-offers.webp'

import disneyDiningImg from '../../assets/Disneyvsroyalcaribbean/disney-wish-enchante-restaurant-luxury-booth-seating-adults.webp'
import rcDiningImg from '../../assets//Disneyvsroyalcaribbean/disney-wish-oceaneer-club-kids-space-interactive-slide.webp'
import castavayCayImg from '../../assets/Disneyvsroyalcaribbean/caribbean-beach-hammock-relaxation-family-island-vacation-shore-excursion.webp'
import cocoCayImg from '../../assets/Disneyvsroyalcaribbean/kids-splash-zone-water-play-disney-cruise-ship-family-vacation.webp'
import disneyEntertainImg from '../../assets/Disneyvsroyalcaribbean/disney-cruise-vibe-teen-club-foosball-youth-activities.webp'
import rcEntertainImg from '../../assets/Disneyvsroyalcaribbean/disney-wish-palo-steakhouse-adult-exclusive-restaurant-layout.webp'
import familyImg from '../../assets/Disneyvsroyalcaribbean/children-meeting-olaf-at-frozen-themed-disney-cruise-event.webp'
import teensImg from '../../assets/Disneyvsroyalcaribbean/disney-wish-atrium-oceaneer-club-secret-entrance-slide.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music, Mic, FileText, GraduationCap,
    Zap, Coffee, Waves
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/Disneyvsroyalcaribbean/disney-cruise-inside-passage-alaska-fjord-glacier-scenery.webp'
import hero2 from '../../assets/Disneyvsroyalcaribbean/best-disney-cruise-caribbean-family-beach-vacation-excursion.webp'
import hero3 from '../../assets/Disneyvsroyalcaribbean/disney-wish-grand-hall-atrium-balcony-view-live-entertainment.webp'

function DisneyVsRoyalCaribbean() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    const [activeWinner, setActiveWinner] = useState(0)

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
        { question: 'Is Disney Cruise more expensive than Royal Caribbean?', answer: 'Yes. Disney Cruise Line is typically more expensive than Royal Caribbean for comparable itineraries and cabin categories.' },
        { question: 'Which cruise line is better for toddlers?', answer: 'Disney Cruise Line is generally considered better for toddlers because of character experiences and family-focused programming.' },
        { question: 'Which cruise line is better for teenagers?', answer: 'Royal Caribbean usually wins for teens due to its adventure attractions, sports activities, and larger teen spaces.' },
        { question: 'Does Disney have casinos onboard?', answer: 'No. Disney Cruise Line does not operate casinos on its ships.' },
        { question: 'Does Royal Caribbean have casinos?', answer: 'Yes. Most Royal Caribbean ships feature casinos for adult guests.' },
        { question: 'Which cruise line has better food?', answer: 'Both offer excellent dining, but Royal Caribbean provides more specialty dining choices while Disney focuses on themed family dining experiences.' },
        { question: 'Is Disney Cruise worth the extra cost?', answer: 'For Disney fans and families with young children, many travelers feel the additional cost is justified by the unique experience.' },
        { question: 'Which cruise line has better kids clubs?', answer: 'Disney is widely regarded as having some of the best kids clubs at sea.' },
        { question: 'Does Royal Caribbean offer character experiences?', answer: 'Not in the same way as Disney. Royal Caribbean focuses more on activities and entertainment than character interactions.' },
        { question: 'Which cruise line has larger ships?', answer: 'Royal Caribbean operates some of the largest cruise ships in the world.' },
        { question: 'What is included in the cruise fare?', answer: 'Both include accommodations, meals, entertainment, and many onboard activities, though specialty options may cost extra.' },
        { question: 'Which cruise line has better private islands?', answer: 'Disney offers a more relaxed beach experience, while Royal Caribbean\'s CocoCay focuses on thrills and adventure.' },
        { question: 'Are Disney cruises good for adults without children?', answer: 'Yes. Disney offers adult-only dining, lounges, pools, and spa facilities, though the atmosphere remains family-oriented.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Royal Caribbean offers a larger fleet and a wider variety of itineraries worldwide.' },
        { question: 'Which cruise line should first-time cruisers choose?', answer: 'Families with young children often prefer Disney, while travelers seeking value, variety, and activities frequently choose Royal Caribbean.' }
    ]

    const mediMistakes = [
        {
            title: 'Choosing Based Only on Price',
            desc: 'Disney Cruise Line is generally more expensive, but the experience is fundamentally different. Judging purely on cost without evaluating what each line includes leads to mismatched expectations.',
            bullets: [
                'Disney: premium immersive experience included in fare',
                'Royal Caribbean: strong value with optional extras'
            ]
        },
        {
            title: 'Not Matching the Line to Your Family Age',
            desc: 'Disney excels for children ages 3–12 while Royal Caribbean wins for teens and multi-generational groups. Booking without considering your children\'s ages often leads to disappointment.'
        },
        {
            title: 'Underestimating Royal Caribbean Ship Size',
            desc: 'Royal Caribbean\'s largest ships are enormous. Travelers expecting an intimate experience may feel overwhelmed by the scale, crowds, and complexity of navigating a mega ship.'
        },
        {
            title: 'Ignoring the Private Island Difference',
            desc: 'Disney\'s Castaway Cay and Lookout Cay offer a relaxed, family-focused beach day. Royal Caribbean\'s CocoCay is an adventure park at sea. Choosing the wrong one for your style matters.'
        }
    ]

    const disneySchemaData = {
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
                "@type": "WebPage",
                "name": "Disney Cruise vs Royal Caribbean",
                "url": "https://www.tripsandships.com/disney-cruise-vs-royal-caribbean",
                "description": "Expert comparison of Disney Cruise Line and Royal Caribbean from Trips & Ships Luxury Travel."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Cruise Comparisons", "item": "https://www.tripsandships.com/cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Disney Cruise vs Royal Caribbean", "item": "https://www.tripsandships.com/disney-cruise-vs-royal-caribbean" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Disney Cruise more expensive than Royal Caribbean?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Disney Cruise Line is typically more expensive than Royal Caribbean for comparable itineraries and cabin categories." }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line is better for teenagers?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Royal Caribbean usually wins for teens due to its adventure attractions, sports activities, and larger teen spaces." }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has better kids clubs?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Disney is widely regarded as having some of the best kids clubs at sea." }
                    }
                ]
            }
        ]
    }

    // theme shortcuts (css variables)
    const navy = 'var(--medi-navy)'
    const navyDark = 'var(--medi-bg-dark)'
    const navyDark2 = 'var(--medi-bg-dark2)'
    const softBg = 'var(--medi-bg-soft)'

    return (
        <>
            <Helmet>
                <title>Disney Cruise vs Royal Caribbean 2026 | Which Is Best for Your Family? | Trips & Ships</title>
                <meta name="title" content="Disney Cruise vs Royal Caribbean 2026 | Family Cruise Comparison Guide" />
                <meta name="description" content="Compare Disney Cruise Line and Royal Caribbean with expert guidance from Trips & Ships Luxury Travel. Discover which cruise line is best for your family's travel style, budget, and vacation priorities." />
                <meta name="keywords" content="Disney Cruise vs Royal Caribbean, Disney Cruise Line comparison, Royal Caribbean family cruise, best family cruise line, Disney vs Royal Caribbean 2026" />
                <script type="application/ld+json">{JSON.stringify(disneySchemaData)}</script>
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
                        <span>Family Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise vs Royal Caribbean: Which Cruise Line Is Best for Your Family?
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
                            <span className="medi-premium-mini-badge">FAMILY CRUISE EXPERTS</span>
                            <h2 className="medi-premium-heading">Disney Cruise Line vs Royal Caribbean International</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Choosing between Disney Cruise Line and Royal Caribbean International is one of the most common decisions families face when planning a cruise vacation. Both cruise lines offer exceptional experiences, but they cater to different travel styles, budgets, and vacation priorities.
                            </p>
                            <p className="medi-premium-lead-text">
                                If you're wondering whether Disney's immersive storytelling and character experiences outweigh Royal Caribbean's larger ships and adventure-focused attractions, this guide will help you make the right choice.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    At Trips & Ships Luxury Travel, we help families compare cruise lines, select the perfect itinerary, and maximize value through expert cruise planning based on:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: Baby, label: 'Family age groups' },
                                        { icon: Star, label: 'Entertainment priorities' },
                                        { icon: Utensils, label: 'Dining preferences' },
                                        { icon: Zap, label: 'Activity levels' },
                                        { icon: Heart, label: 'Immersive experiences' },
                                        { icon: Globe, label: 'Destination variety' },
                                        { icon: Crown, label: 'Budget expectations' },
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
                                    Whether you're considering Disney Cruise Line or Royal Caribbean, our travel advisors can help you find the best ship, destination, and experience for your family's travel style.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        Neither cruise line is universally better. The right choice depends entirely on your family's age, priorities, and what kind of vacation experience you truly want.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEW: QUICK COMPARISON TABLE (inline CSS — theme colors only) ── */}
            <section style={{
                background: navyDark,
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-120px', right: '-120px',
                    width: '500px', height: '500px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(39,68,114,0.3)',
                            border: '1px solid rgba(39,68,114,0.5)',
                            color: '#94a3b8', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 20px', borderRadius: '20px', marginBottom: '20px'
                        }}>SIDE BY SIDE COMPARISON</span>
                        <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, margin: '0 0 16px' }}>
                            Quick Comparison: Disney Cruise vs Royal Caribbean
                        </h2>
                        <div style={{ width: '60px', height: '3px', background: navy, borderRadius: '2px', margin: '0 auto' }} />
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%', borderCollapse: 'separate', borderSpacing: 0,
                            borderRadius: '16px', overflow: 'hidden',
                            border: '1px solid rgba(39,68,114,0.3)'
                        }}>
                            <thead>
                                <tr>
                                    {[
                                        { label: 'Feature', bg: 'rgba(39,68,114,0.2)' },
                                        { label: 'Disney Cruise Line', bg: navy },
                                        { label: 'Royal Caribbean', bg: navyDark2 }
                                    ].map(({ label, bg }, i) => (
                                        <th key={i} style={{
                                            padding: '18px 24px', textAlign: 'left', background: bg,
                                            color: '#fff', fontSize: '0.8rem', fontWeight: 700,
                                            letterSpacing: '2px', textTransform: 'uppercase',
                                            borderBottom: '1px solid rgba(39,68,114,0.3)'
                                        }}>{label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Families with young children, Disney fans', 'Families, teens, multi-generational groups'],
                                    ['Price', 'Higher', 'Generally more affordable'],
                                    ['Ship Size', 'Small to medium', 'Medium to mega ships'],
                                    ['Entertainment', 'Disney-themed shows and characters', 'Broadway-style productions and attractions'],
                                    ['Kids Programs', 'Exceptional', 'Excellent'],
                                    ['Teen Activities', 'Good', 'Outstanding'],
                                    ['Dining', 'Rotational dining', 'More specialty dining options'],
                                    ['Private Island', 'Castaway Cay & Lookout Cay', 'Perfect Day at CocoCay'],
                                    ['Nightlife', 'Limited', 'Extensive'],
                                    ['Adult Experiences', 'Good', 'Excellent'],
                                    ['Value for Money', 'Premium experience', 'Strong overall value'],
                                ].map(([feature, disney, rc], rowIdx) => (
                                    <tr key={rowIdx} style={{
                                        background: rowIdx % 2 === 0 ? 'rgba(39,68,114,0.08)' : 'rgba(15,28,46,0.6)'
                                    }}>
                                        <td style={{ padding: '14px 24px', color: '#94a3b8', fontSize: '0.88rem', fontWeight: 600, borderBottom: '1px solid rgba(39,68,114,0.15)' }}>{feature}</td>
                                        <td style={{ padding: '14px 24px', color: '#e2e8f0', fontSize: '0.88rem', borderBottom: '1px solid rgba(39,68,114,0.15)', borderLeft: '1px solid rgba(39,68,114,0.2)' }}>{disney}</td>
                                        <td style={{ padding: '14px 24px', color: '#e2e8f0', fontSize: '0.88rem', borderBottom: '1px solid rgba(39,68,114,0.15)', borderLeft: '1px solid rgba(39,68,114,0.2)' }}>{rc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── NEW: CRUISE LINE OVERVIEW — image cards (inline CSS) ── */}
            <section style={{ background: softBg, padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            color: navy, fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 18px', borderRadius: '20px', marginBottom: '16px'
                        }}>CRUISE LINE OVERVIEWS</span>
                        <h2 className="medi-section-heading">Disney Cruise Line & Royal Caribbean Overview</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                        {/* Disney Overview */}
                        <div style={{
                            background: '#ffffff', borderRadius: '20px', overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img src={disneyShipImg} alt="Disney Cruise Line ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 55%)' }} />
                                <div style={{
                                    position: 'absolute', bottom: '16px', left: '20px',
                                    background: navy, color: '#fff', fontSize: '0.75rem',
                                    fontWeight: 700, letterSpacing: '2px', padding: '5px 14px', borderRadius: '20px'
                                }}>DISNEY CRUISE LINE</div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Disney Cruise Line delivers a vacation experience centered around storytelling, family bonding, and world-class entertainment. Guests enjoy encounters with beloved Disney characters, Broadway-quality productions, themed dining experiences, and exceptional customer service.
                                </p>
                                <p style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Current Disney ships include:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {['Disney Magic', 'Disney Wonder', 'Disney Dream', 'Disney Fantasy', 'Disney Wish', 'Disney Treasure'].map((s, i) => (
                                        <span key={i} style={{
                                            background: softBg, color: navy,
                                            fontSize: '0.78rem', fontWeight: 600,
                                            padding: '4px 12px', borderRadius: '20px',
                                            border: '1px solid rgba(39,68,114,0.15)'
                                        }}>{s}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {[
                                        { check: true, label: 'Character meet-and-greets' },
                                        { check: true, label: 'Disney-exclusive entertainment' },
                                        { check: true, label: 'Family-friendly atmosphere' },
                                        { check: true, label: 'Exceptional service' },
                                        { check: true, label: 'Rotational dining concept' },
                                        { check: true, label: 'Fireworks at sea' },
                                        { check: true, label: 'Disney private island experiences' },
                                        { check: false, label: 'Higher fares' },
                                        { check: false, label: 'Fewer ships and itineraries' },
                                        { check: false, label: 'Limited nightlife' },
                                        { check: false, label: 'Fewer thrill attractions' },
                                    ].map(({ check, label }, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: check ? 'var(--medi-green)' : 'var(--medi-red)', fontSize: '0.9rem', fontWeight: 700 }}>{check ? '✔' : '✖'}</span>
                                            <span style={{ color: '#374151', fontSize: '0.82rem', lineHeight: 1.4 }}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Royal Caribbean Overview */}
                        <div style={{
                            background: '#ffffff', borderRadius: '20px', overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img src={rcShipImg} alt="Royal Caribbean ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 55%)' }} />
                                <div style={{
                                    position: 'absolute', bottom: '16px', left: '20px',
                                    background: navyDark2, color: '#fff', fontSize: '0.75rem',
                                    fontWeight: 700, letterSpacing: '2px', padding: '5px 14px', borderRadius: '20px'
                                }}>ROYAL CARIBBEAN</div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Royal Caribbean is known for innovation, adventure, and some of the largest cruise ships in the world. Their ships feature surf simulators, rock climbing walls, zip lines, ice skating rinks, water parks, and skydiving simulators.
                                </p>
                                <p style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Popular Royal Caribbean ships include:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {['Icon of the Seas', 'Wonder of the Seas', 'Utopia of the Seas', 'Symphony of the Seas', 'Oasis of the Seas'].map((s, i) => (
                                        <span key={i} style={{
                                            background: softBg, color: navy,
                                            fontSize: '0.78rem', fontWeight: 600,
                                            padding: '4px 12px', borderRadius: '20px',
                                            border: '1px solid rgba(39,68,114,0.15)'
                                        }}>{s}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {[
                                        { check: true, label: 'More affordable pricing' },
                                        { check: true, label: 'Larger ships' },
                                        { check: true, label: 'More destinations' },
                                        { check: true, label: 'Incredible teen activities' },
                                        { check: true, label: 'Adventure attractions' },
                                        { check: true, label: 'Greater nightlife options' },
                                        { check: true, label: 'Diverse dining choices' },
                                        { check: false, label: 'Extra charges for some activities' },
                                        { check: false, label: 'Larger crowds' },
                                        { check: false, label: 'Less personalized atmosphere' },
                                        { check: false, label: 'Fewer character experiences' },
                                    ].map(({ check, label }, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: check ? 'var(--medi-green)' : 'var(--medi-red)', fontSize: '0.9rem', fontWeight: 700 }}>{check ? '✔' : '✖'}</span>
                                            <span style={{ color: '#374151', fontSize: '0.82rem', lineHeight: 1.4 }}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 1: THE DISNEY STANDARD OF MAGIC ── */}
            <section style={{ padding: '100px 24px', backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            Immersive Storytelling
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            The Magic of Connection
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '800px', margin: '25px auto 0' }}>
                            Disney Cruise Line is defined by "The Dream." Beyond the ships, it is the ability to step into beloved narratives where every deck party, character encounter, and fireworks display is choreographed to create lifelong family bonds. Experience the unique emotional ROI that consistently places Disney at the top of family guest satisfaction.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/pGjDzfXoOg0"
                            title="Disney Cruise Line Magic"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── EXCEL SECTION: FAMILY EXPERIENCE COMPARISON ── */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">FAMILY CRUISE COMPARISON // DISNEY VS ROYAL CARIBBEAN</div>
                <div className="medi-excel-coord coord-tr">ENTERTAINMENT // DINING // VALUE</div>
                <div className="medi-excel-coord coord-bl">KIDS // TEENS // ADULTS</div>
                <div className="medi-excel-coord coord-br">PRIVATE ISLANDS // ACTIVITIES</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>

                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Family Experience Comparison</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Disney and Royal Caribbean deliver very different onboard family experiences. Understanding both helps families make the right choice.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Disney Cruise — Disney excels for families with children ages 3–12. Highlights include:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Star, label: 'Character interactions' },
                                        { icon: Baby, label: 'Themed kids clubs' },
                                        { icon: Sparkles, label: 'Pirate Night' },
                                        { icon: Music, label: 'Family deck parties' },
                                        { icon: Heart, label: 'Disney movies onboard' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    Children often view Disney cruises as magical experiences rather than vacations.
                                </p>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Royal Caribbean — Royal Caribbean appeals to families seeking activity-based vacations. Popular attractions include:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Waves, label: 'Water slides' },
                                        { icon: Zap, label: 'Surf simulators' },
                                        { icon: Compass, label: 'Escape rooms' },
                                        { icon: Sun, label: 'Sports courts' },
                                        { icon: Globe, label: 'Adventure parks' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    Teens frequently prefer Royal Caribbean due to the wider variety of attractions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Award size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Winner — Young Children: Disney &nbsp;|&nbsp; Families with Teens: Royal Caribbean
                        </p>
                    </div>
                </div>
            </section>

            {/* ── NEW: FAMILY IMAGE SECTION (inline CSS) ── */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '48px' }}>
                        {/* Disney Family */}
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 32px rgba(39,68,114,0.15)' }}>
                            <img src={familyImg} alt="Disney family cruise experience"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 50%)' }} />
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                                <div style={{ background: navy, display: 'inline-block', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', padding: '4px 12px', borderRadius: '20px', marginBottom: '10px' }}>DISNEY CRUISE LINE</div>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>Best for Young Children (Ages 3–12)</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>Character interactions, themed kids clubs, Pirate Night, and magical family deck parties</p>
                            </div>
                        </div>

                        {/* Royal Caribbean Teens */}
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 32px rgba(39,68,114,0.15)' }}>
                            <img src={teensImg} alt="Royal Caribbean teens activities"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 50%)' }} />
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                                <div style={{ background: navyDark2, display: 'inline-block', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', padding: '4px 12px', borderRadius: '20px', marginBottom: '10px' }}>ROYAL CARIBBEAN</div>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>Best for Teens & Multi-Generational Groups</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>Water slides, surf simulators, escape rooms, sports courts, and adventure parks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DIFF CARDS: Dining, Entertainment, Private Islands ── */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DETAILED COMPARISONS</span>
                        <h2 className="medi-diff-main-title">Dining, Entertainment & Private Islands</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1: Dining */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Utensils size={24} /></div>
                                <h3 className="medi-diff-card-title">Dining Comparison</h3>
                            </div>

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>Disney Dining</p>
                            <p className="medi-diff-card-text">Disney uses rotational dining where guests rotate through themed restaurants while their serving team follows them. Benefits include personalized service, themed dining venues, and family-friendly menus. Popular dining experiences include:</p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Arendelle: A Frozen Dining Adventure</span>
                                <span className="medi-diff-chip">Worlds of Marvel</span>
                                <span className="medi-diff-chip">Animator's Palate</span>
                            </div>

                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '18px 0' }} />

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '8px' }}>Royal Caribbean Dining</p>
                            <p className="medi-diff-card-text">Royal Caribbean offers greater dining variety. Options include:</p>
                            <ul className="medi-diff-experience-list">
                                {['Chops Grille', "Giovanni's Italian Kitchen", 'Izumi Sushi', 'Wonderland', 'Hooked Seafood'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div className="medi-diff-conclusion-box" style={{ marginTop: '16px' }}>
                                <p className="medi-diff-conclusion-text">Winner — Themed Family Dining: Disney &nbsp;|&nbsp; Dining Variety: Royal Caribbean</p>
                            </div>
                        </div>

                        {/* Card 2: Entertainment */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Music size={24} /></div>
                                <h3 className="medi-diff-card-title">Entertainment Comparison</h3>
                            </div>

                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '11px', fontWeight: 700 }}>TIE</div>
                                </div>
                                <div className="medi-diff-stat-label">DEPENDS ON PREFERENCES</div>
                            </div>

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>Disney Entertainment</p>
                            <p className="medi-diff-card-text">Disney delivers some of the best entertainment at sea. Guests enjoy:</p>
                            <ul className="medi-diff-experience-list">
                                {['Broadway-caliber productions', 'Disney films', 'Character appearances', 'Deck parties', 'Fireworks at sea'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div style={{ height: '1px', background: 'rgba(15,28,46,0.08)', margin: '14px 0' }} />

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>Royal Caribbean Entertainment</p>
                            <p className="medi-diff-card-text">Royal Caribbean offers large-scale productions and diverse entertainment. Highlights include:</p>
                            <ul className="medi-diff-experience-list">
                                {['Aqua shows', 'Ice skating performances', 'Broadway musicals', 'Live music', 'Comedy clubs'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div className="medi-diff-quote-wrapper" style={{ marginTop: '14px' }}>
                                <p className="medi-diff-quote-text">Winner — Tie. Depends on personal preferences.</p>
                            </div>
                        </div>

                        {/* Card 3: Private Islands */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><MapPin size={24} /></div>
                                <h3 className="medi-diff-card-title">Private Island Experience</h3>
                            </div>

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>Disney Castaway Cay & Lookout Cay</p>
                            <p className="medi-diff-card-text">Disney's private destinations focus on:</p>
                            <ul className="medi-diff-focus-list-premium">
                                {['Relaxation', 'Family activities', 'Character interactions', 'Beautiful beaches'].map((item, i) => (
                                    <li key={i}><span className="medi-diff-list-num">0{i + 1}</span><span>{item}</span></li>
                                ))}
                            </ul>

                            <div style={{ height: '1px', background: 'rgba(15,28,46,0.08)', margin: '16px 0' }} />

                            <p className="medi-diff-card-text-secondary" style={{ fontWeight: 700, marginBottom: '6px' }}>Perfect Day at CocoCay</p>
                            <p className="medi-diff-card-text">Royal Caribbean's private island emphasizes excitement. Features include:</p>
                            <ul className="medi-diff-experience-list">
                                {['Massive water park', 'Thrill rides', 'Zip lines', 'Adventure attractions'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>

                            <div className="medi-diff-conclusion-box" style={{ marginTop: '14px' }}>
                                <p className="medi-diff-conclusion-text">Winner — Relaxation: Disney &nbsp;|&nbsp; Adventure: Royal Caribbean</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 2: THE SCALE OF INNOVATION ── */}
            <section style={{ padding: '100px 24px', backgroundColor: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            Thrill & Adventure
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Redefining the Mega-Ship Experience
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '800px', margin: '25px auto 0' }}>
                            Royal Caribbean is the global leader in cruise innovation. From the "Icon" and "Oasis" classes to the upcoming "Legend of the Seas," discover a world where high-tech water parks, surf simulators, and Broadway-caliber aqua shows meet global destinations. This is the ultimate choice for families seeking an active, high-energy vacation.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(15, 28, 46, 0.12)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/u9W81GtRoa8"
                            title="Royal Caribbean Innovation"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── NEW: DINING + ENTERTAINMENT + PRIVATE ISLAND IMAGES (inline CSS) ── */}
            <section style={{ background: softBg, padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Dining images */}
                    <div style={{ marginBottom: '48px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Utensils size={18} color="#fff" />
                            </div>
                            <h3 style={{ color: navy, fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Dining Experiences</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { img: disneyDiningImg, label: 'Disney Themed Dining', sub: 'Rotational dining with your serving team following you through themed restaurants' },
                                { img: rcDiningImg, label: 'Royal Caribbean Specialty Dining', sub: 'Greater dining variety with multiple specialty restaurant options' }
                            ].map(({ img, label, sub }, i) => (
                                <div key={i} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '220px', boxShadow: '0 4px 20px rgba(39,68,114,0.12)' }}>
                                    <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.82) 0%, transparent 50%)' }} />
                                    <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px' }}>
                                        <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, margin: '0 0 4px' }}>{label}</p>
                                        <p style={{ color: '#cbd5e1', fontSize: '0.78rem', margin: 0, lineHeight: 1.4 }}>{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Entertainment images */}
                    <div style={{ marginBottom: '48px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Music size={18} color="#fff" />
                            </div>
                            <h3 style={{ color: navy, fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Entertainment Experiences</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { img: disneyEntertainImg, label: 'Disney Entertainment', sub: 'Broadway-caliber productions, character appearances, deck parties and fireworks at sea' },
                                { img: rcEntertainImg, label: 'Royal Caribbean Entertainment', sub: 'Aqua shows, ice skating, Broadway musicals, live music and comedy clubs' }
                            ].map(({ img, label, sub }, i) => (
                                <div key={i} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '220px', boxShadow: '0 4px 20px rgba(39,68,114,0.12)' }}>
                                    <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.82) 0%, transparent 50%)' }} />
                                    <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px' }}>
                                        <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, margin: '0 0 4px' }}>{label}</p>
                                        <p style={{ color: '#cbd5e1', fontSize: '0.78rem', margin: 0, lineHeight: 1.4 }}>{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Private Islands */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <MapPin size={18} color="#fff" />
                            </div>
                            <h3 style={{ color: navy, fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Private Island Experiences</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                { img: castavayCayImg, label: 'Castaway Cay & Lookout Cay', sub: 'Relaxation, family activities, character interactions and beautiful beaches' },
                                { img: cocoCayImg, label: 'Perfect Day at CocoCay', sub: 'Massive water park, thrill rides, zip lines and adventure attractions' }
                            ].map(({ img, label, sub }, i) => (
                                <div key={i} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '240px', boxShadow: '0 4px 20px rgba(39,68,114,0.12)' }}>
                                    <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.82) 0%, transparent 50%)' }} />
                                    <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px' }}>
                                        <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: '0 0 5px' }}>{label}</p>
                                        <p style={{ color: '#cbd5e1', fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERT INSIGHT ── */}
            <section id="disney-rc-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Family Cruise Expert" />
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
                                    Adults-Only Experiences & <br className="medi-growth-title-break" />Pricing Comparison
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Many travelers are surprised by Disney's adult offerings. Options include adult-only pools, fine dining, lounges and spas. However, Disney remains heavily family-focused.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Royal Caribbean offers a broader adults-only experience including:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Casinos', 'Nightclubs', 'Bars', 'Specialty dining', 'Live entertainment'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                Disney Cruise Line is generally more expensive than Royal Caribbean. However, Disney often includes more family-focused entertainment within the fare. Winner for adults-only experience: Royal Caribbean. Winner for budget-conscious travelers: Royal Caribbean.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Trips & Ships Luxury Travel specializes in:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Family cruises', icon: Baby },
                                        { title: 'Luxury cruises', icon: Crown },
                                        { title: 'Expedition travel', icon: Compass },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Global premium travel planning', icon: Globe }
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

            {/* ── NEW: FINAL VERDICT (inline CSS) ── */}
            <section style={{ background: navyDark, padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: '-100px', left: '-100px',
                    width: '450px', height: '450px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.18) 0%, transparent 70%)', pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.3)',
                            border: '1px solid rgba(39,68,114,0.5)', color: '#94a3b8',
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            padding: '6px 20px', borderRadius: '20px', marginBottom: '20px'
                        }}>THE DECISION</span>
                        <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, margin: '0 0 16px' }}>
                            Which Cruise Line Is Better? Final Verdict
                        </h2>
                        <div style={{ width: '60px', height: '3px', background: navy, borderRadius: '2px', margin: '0 auto 24px' }} />
                        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                            Neither cruise line is universally better. Disney Cruise Line delivers an unmatched family experience filled with magic, storytelling, and character interactions. Royal Caribbean provides exceptional value, larger ships, more destinations, and endless onboard activities.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {/* Choose Disney */}
                        <div style={{
                            background: 'rgba(39,68,114,0.15)', border: '1px solid rgba(39,68,114,0.3)',
                            borderRadius: '20px', padding: '32px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Star size={20} color="#fff" />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>Choose Disney Cruise Line if:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['You have children under 12', 'Your family loves Disney characters', 'You value immersive storytelling', 'Budget is less important than experience'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--medi-green)', flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Choose Royal Caribbean */}
                        <div style={{
                            background: 'rgba(28,47,74,0.5)', border: '1px solid rgba(39,68,114,0.2)',
                            borderRadius: '20px', padding: '32px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: navyDark2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Zap size={20} color="#fff" />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>Choose Royal Caribbean if:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['You want more activities', 'You are traveling with teenagers', 'You seek better value', 'You enjoy larger ships', 'You want more nightlife options'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--medi-green)', flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Final verdict summary */}
                    <div style={{
                        marginTop: '32px', padding: '28px 32px',
                        background: 'rgba(39,68,114,0.12)', borderRadius: '16px',
                        border: '1px solid rgba(39,68,114,0.25)',
                        borderLeft: '4px solid var(--medi-navy)'
                    }}>
                        <p style={{ color: '#e2e8f0', fontSize: '0.95rem', margin: 0, lineHeight: 1.7 }}>
                            For families with younger children, Disney often wins. For families with teens, multi-generational groups, and travelers seeking variety and value, Royal Caribbean is frequently the better choice.
                        </p>
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
                            <h3 className="medi-audience-column-heading">Disney Cruise Line Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Baby, label: 'Families with young children' },
                                    { icon: Star, label: 'Disney fans' },
                                    { icon: Heart, label: 'Families valuing immersive storytelling' },
                                    { icon: Sparkles, label: 'Travelers prioritizing experience over budget' },
                                    { icon: Crown, label: 'Families seeking exceptional service' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Royal Caribbean Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Zap, label: 'Families seeking more activities' },
                                    { icon: Users, label: 'Travelers with teenagers' },
                                    { icon: Globe, label: 'Multi-generational groups' },
                                    { icon: Moon, label: 'Travelers wanting more nightlife options' },
                                    { icon: Ship, label: 'Travelers seeking better value' },
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

            {/* ── COMMON MISTAKES SLIDER ── */}
            {/* <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID BOOKING PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">Common Mistakes When Choosing Between Disney and Royal Caribbean</h2>
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
            </section> */}

            {/* ── ANGELA HUGHES AUTHORITY BOX ── */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">EXPERT GUIDANCE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src={Profile_AH} alt="Angela Hughes"
                                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)', animation: 'reverse-spin 30s linear infinite' }} />
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
                                    { text: "Family and luxury cruise specialist", icon: Ship, category: "SPECIALTY" },
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
                        <h2 className="medi-cta-heading-white">Need Help Choosing the Right Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            At Trips & Ships Luxury Travel, we help families compare cruise lines, select the perfect itinerary, and maximize value through expert cruise planning.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether you're considering Disney Cruise Line or Royal Caribbean, our travel advisors can help you find the best ship, destination, and experience for your family's travel style.
                        </p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare Cruise Lines
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisneyVsRoyalCaribbean