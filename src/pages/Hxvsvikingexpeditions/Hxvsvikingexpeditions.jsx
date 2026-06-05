import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import Profile_AH from '../../assets/Media (2).jpg'
import Profile_Picture_AH from '../../assets/image.webp'

// // ── Replace these with your actual image assets ──
import hxShipImg from '../../assets/Hxvsvikingexpeditions/Hero_1.webp'
import vikingShipImg from '../../assets/Hxvsvikingexpeditions/ChoseViking.webp'
import antarcticaImg from '../../assets/Hxvsvikingexpeditions/AntaSilder2.webp'
import arcticImg from '../../assets/Hxvsvikingexpeditions/artic.webp'
import wildlifeImg from '../../assets/Hxvsvikingexpeditions/penguins-in-antarctica.webp'
import antartica from '../../assets/Hxvsvikingexpeditions/anta2.webp'
import galapagosImg from '../../assets/Hxvsvikingexpeditions/Galápagos.jpg'
import svalbardImg from '../../assets/Hxvsvikingexpeditions/Svalbard.jpg'
import greenlandImg from '../../assets/Hxvsvikingexpeditions/Greenland_ZodiacTown.jpg'
import hxInteriorImg from '../../assets/Hxvsvikingexpeditions/anta2.webp'
import vikingInteriorImg from '../../assets/Hxvsvikingexpeditions/anta2.webp'

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
import hero1 from '../../assets/Hxvsvikingexpeditions/Exterior_2026-04-13_19-02-37.jpg'
import hero2 from '../../assets/Hxvsvikingexpeditions/_Alaska_Kiniak Bay_Roald Amundsen_Oscar Farrera.jpg'
import hero3 from '../../assets/Hxvsvikingexpeditions/Expedition Ship - Antarctica_.jpg'

function HXvsVikingExpeditions() {
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
    const [activeComparisonTab, setActiveComparisonTab] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

    const hxVsVikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions",
                "name": "HX Expeditions vs Viking Expeditions",
                "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions",
                "description": "Compare HX Expeditions vs Viking Expeditions with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, ships, destinations, wildlife experiences and expedition style.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions#article"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in cruise vacations, expedition cruises and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions#article",
                "headline": "HX Expeditions vs Viking Expeditions",
                "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions",
                "description": "Expert comparison of HX Expeditions and Viking Expeditions including luxury, ships, destinations, wildlife experiences and expedition styles.",
                "image": "https://www.tripsshipsluxurytravel.com/images/hx-vs-viking-expeditions.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions"
                }
            },
            {
                "@type": "Service",
                "name": "Expedition Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert expedition cruise planning and comparison services helping travelers choose the best expedition cruise line for their travel style and destination goals."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsshipsluxurytravel.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "HX Expeditions",
                        "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "HX Expeditions vs Viking Expeditions",
                        "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions-vs-viking-expeditions"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is HX Expeditions better than Viking Expeditions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on travel style. HX is generally more expedition focused, while Viking emphasizes refined luxury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is more luxurious, Viking or HX?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking typically offers a more traditional luxury atmosphere onboard."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which expedition line is better for Antarctica?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "HX is often stronger for active expedition immersion, while Viking appeals to travelers prioritizing luxury comfort."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Viking go to the Galápagos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. HX operates Galápagos expeditions while Viking currently does not."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which expedition line is better for wildlife?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "HX is generally more wildlife and exploration focused."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are HX cruises more adventurous than Viking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. HX typically offers a more expedition intensive atmosphere."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has smaller expedition ships?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "HX includes smaller expedition ships such as MS Spitsbergen and MS Santa Cruz II."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on HX vs Viking cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both include accommodations, meals and expedition programming, though inclusions vary by itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which expedition line is better for first time expedition travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking may feel more approachable for luxury focused travelers, while HX is excellent for adventure minded first timers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Viking expedition cruises luxury cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking expedition cruises strongly emphasize luxury comfort and refined onboard experiences."
                        }
                    }
                ]
            }
        ]
    };


    return (
        <>
            <Helmet>
                <title>HX Expeditions vs Viking Expeditions | Which Expedition Cruise Line Is Better?
                </title>
                <meta name="title" content="HX Expeditions vs Viking Expeditions | Expert Luxury Cruise Comparison
" />
                <meta name="description" content="Compare HX Expeditions vs Viking Expeditions with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, ships, destinations, wildlife experiences and expedition style.
" />
                <meta name="keywords" content="HX Expeditions vs Viking Expeditions
, Viking Expeditions comparison
, HX vs Viking cruise line
, Expedition cruise comparison
, Luxury expedition cruises
" />
                <script type="application/ld+json">{JSON.stringify(hxVsVikingSchemaData)}</script>
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
                        HX Expeditions vs Viking Expeditions
                    </h1>
                </div>
            </section>

            {/* ── PREMIUM INTRO ── */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
                    .medi-premium-editorial-block::-webkit-scrollbar {
                        width: 6px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb {
                        background: rgba(39, 68, 114, 0.2);
                        border-radius: 3px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover {
                        background: rgba(39, 68, 114, 0.4);
                        border-radius: 3px;
                    }
                `}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                        }}>
                            <span className="medi-premium-mini-badge">EXPEDITION CRUISE EXPERTS</span>
                            <h2 className="medi-premium-heading">Which Expedition Cruise Line Is Right For You?</h2>
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

            {/* ── SHIP IMAGE SHOWCASE — HX vs Viking Side-by-Side ── */}
            <section style={{
                background: 'var(--medi-bg-soft)',
                padding: isMobileViewport ? '60px 0' : '100px 0',
                overflow: 'hidden'
            }}>
                <style>{`
        .ship-showcase-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .ship-card {
            background: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(15, 28, 46, 0.05);
            border: 1px solid rgba(39, 68, 114, 0.1);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ship-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(15, 28, 46, 0.1);
        }

        .ship-card-image-box {
            position: relative;
            height: 250px;
            overflow: hidden;
        }

        .ship-card-content {
            padding: 32px;
            flex-grow: 1;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
            .ship-showcase-grid {
                grid-template-columns: 1fr; /* Stack vertically on tablet/mobile */
                max-width: 600px; /* Keep cards from getting too wide and awkward */
            }
        }

        @media (max-width: 480px) {
            .ship-card-content {
                padding: 24px;
            }
            .ship-card-image-box {
                height: 200px;
            }
            .ship-showcase-grid {
                padding: 0 16px;
            }
        }
    `}</style>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobileViewport ? '40px' : '52px', padding: '0 20px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(39,68,114,0.1)',
                            color: 'var(--medi-navy)',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '3px',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            marginBottom: '16px',
                            textTransform: 'uppercase'
                        }}>SHIPS & ONBOARD EXPERIENCE</span>
                        <h2 className="medi-section-heading" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
                            HX Ships vs Viking Expedition Ships
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ship-showcase-grid">
                        {/* HX Ships Card */}
                        <div className="ship-card">
                            <div className="ship-card-image-box">
                                <img src={hxShipImg} alt="HX Expedition Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 60%)'
                                }} />
                                <div style={{
                                    position: 'absolute', bottom: '20px', left: '24px',
                                    background: '#274472', // HX Brand Color
                                    color: '#fff', fontSize: '11px', fontWeight: 800,
                                    letterSpacing: '2px', padding: '6px 16px', borderRadius: '50px'
                                }}>HX EXPEDITIONS</div>
                            </div>
                            <div className="ship-card-content">
                                <p style={{ color: '#0f172a', fontSize: '13px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                    Designed for Deep Discovery:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Hybrid powered ships', 'Working Science Centers', 'Expedition observation lounges', 'Casual, unhurried atmosphere', 'Deep integration with Scientists'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: '#475569', fontSize: '15px', lineHeight: '1.4' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#1e293b', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>Vessels include:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['Roald Amundsen', 'Fridtjof Nansen', 'MS Fram'].map((ship, i) => (
                                        <span key={i} style={{
                                            background: '#f1f5f9', color: '#274472', fontSize: '12px', fontWeight: 700,
                                            padding: '6px 14px', borderRadius: '10px', border: '1px solid #e2e8f0'
                                        }}>{ship}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Viking Ships Card */}
                        <div className="ship-card">
                            <div className="ship-card-image-box">
                                <img src={vikingShipImg} alt="Viking Expedition Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 60%)'
                                }} />
                                <div style={{
                                    position: 'absolute', bottom: '20px', left: '24px',
                                    background: '#0f172a', // Viking Deep Navy
                                    color: '#fff', fontSize: '11px', fontWeight: 800,
                                    letterSpacing: '2px', padding: '6px 16px', borderRadius: '50px'
                                }}>VIKING EXPEDITIONS</div>
                            </div>
                            <div className="ship-card-content">
                                <p style={{ color: '#0f172a', fontSize: '13px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                    Designed for Refined Exploration:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Residential Scandi-interiors', 'The Hangar (Enclosed marina)', 'Refined Nordic spa access', 'Quiet, adult-focused luxury', 'Expansive Nordic balconies'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle size={18} style={{ color: '#274472', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: '#475569', fontSize: '15px', lineHeight: '1.4' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div style={{
                                    background: '#f8fafc',
                                    borderLeft: '4px solid #274472',
                                    borderRadius: '8px',
                                    padding: '16px'
                                }}>
                                    <p style={{ color: '#475569', fontSize: '14px', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                                        Viking delivers a more familiar "upscale hotel" feel compared to HX's scientific expedition focus.
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

            {/* ── DESTINATIONS COMPARISON: RESPONSIVE REFACTORED ── */}
            <section style={{
                background: '#ffffff',
                padding: isMobileViewport ? '60px 0' : '100px 0',
                overflow: 'hidden'
            }}>
                <style>{`
        .dest-comparison-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .dest-image-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-bottom: 24px;
        }

        .dest-card {
            position: relative;
            height: 180px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .chip-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
            .dest-image-grid {
                grid-template-columns: repeat(2, 1fr); /* 2x2 on Tablet/Mobile */
            }
            .dest-card {
                height: 160px; /* Slightly shorter for mobile balance */
            }
        }

        @media (max-width: 480px) {
            .dest-comparison-container {
                padding: 0 16px;
            }
            .dest-image-grid {
                gap: 10px;
            }
            .dest-card {
                height: 140px;
            }
            .dest-label {
                font-size: 0.75rem !important;
            }
        }
    `}</style>

                <div className="dest-comparison-container">
                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: isMobileViewport ? '40px' : '52px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(59, 130, 246, 0.1)', // Light Azure
                            color: '#274472',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '3px',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            marginBottom: '16px',
                            textTransform: 'uppercase'
                        }}>WHERE THEY SAIL</span>
                        <h2 className="medi-section-heading" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
                            Destinations Comparison
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* HX Destinations Block */}
                    <div style={{ marginBottom: '50px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: '#274472',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Compass size={20} color="#fff" />
                            </div>
                            <h3 style={{ color: '#274472', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                                HX Expeditions: Global Reach
                            </h3>
                        </div>

                        {/* 4-Image Adaptive Grid */}
                        <div className="dest-image-grid">
                            {[
                                { img: antarcticaImg, label: 'Antarctica' },
                                { img: galapagosImg, label: 'Galápagos' },
                                { img: greenlandImg, label: 'Greenland' },
                                { img: svalbardImg, label: 'Svalbard' },
                            ].map(({ img, label }, i) => (
                                <div key={i} className="dest-card">
                                    <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 60%)'
                                    }} />
                                    <span className="dest-label" style={{
                                        position: 'absolute', bottom: '15px', left: '15px',
                                        color: '#fff', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px'
                                    }}>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* HX Chips */}
                        <div className="chip-container">
                            {['Alaska', 'Iceland', 'Norway', 'Patagonia', 'Northwest Passage', 'British Isles'].map((dest, i) => (
                                <span key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    background: '#f8fafc', color: '#475569',
                                    fontSize: '0.8rem', fontWeight: 700,
                                    padding: '8px 16px', borderRadius: '50px',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <MapPin size={12} color="#3b82f6" /> {dest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#e2e8f0', margin: '0 0 50px' }} />

                    {/* Viking Destinations Block */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: '#0f172a',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Globe size={20} color="#fff" />
                            </div>
                            <h3 style={{ color: '#274472', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                                Viking Expeditions: Key Focus
                            </h3>
                        </div>

                        <div className="chip-container" style={{ marginBottom: '24px' }}>
                            {['Antarctica', 'Arctic regions', 'Great Lakes', 'North America', 'Europe', 'South America'].map((dest, i) => (
                                <span key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    background: '#0f172a', color: '#94a3b8',
                                    fontSize: '0.8rem', fontWeight: 700,
                                    padding: '8px 16px', borderRadius: '50px'
                                }}>
                                    <MapPin size={12} /> {dest}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            padding: '20px 24px',
                            background: '#f8fafc',
                            borderLeft: '4px solid #274472',
                            borderRadius: '0 12px 12px 0',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                        }}>
                            <p style={{ color: '#475569', fontSize: '15px', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                                HX generally offers more remote and wildlife focused expedition diversity, particularly in the Galápagos and High Arctic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DIFF CARDS: Wildlife, Luxury ── */}
            <section style={{
                background: 'linear-gradient(180deg, var(--bg-soft) 0%, var(--bg-white) 100%)',
                backgroundImage: 'radial-gradient(var(--navy-border) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                borderTop: '1px solid var(--navy-border)',
                borderBottom: '1px solid var(--navy-border)',
                padding: 'clamp(40px, 8vw, 100px) clamp(16px, 3vw, 24px)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Polar Glowing Auras */}
                <div style={{
                    position: 'absolute', top: '5%', left: '5%',
                    width: 'clamp(150px, 25vw, 350px)', height: 'clamp(150px, 25vw, 350px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--navy-soft) 0%, transparent 70%)',
                    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%',
                    width: 'clamp(180px, 30vw, 400px)', height: 'clamp(180px, 30vw, 400px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--navy-soft) 0%, transparent 70%)',
                    filter: 'blur(70px)', pointerEvents: 'none', zIndex: 1
                }} />

                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    position: 'relative', zIndex: 2, width: '100%', boxSizing: 'border-box'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.6fr)',
                        gap: isMobileViewport ? '24px' : 'clamp(24px, 3vw, 40px)',
                        width: '100%', boxSizing: 'border-box', alignItems: 'start'
                    }}>
                        {/* ── Left Column ── */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '20px',
                            position: isMobileViewport ? 'static' : 'sticky',
                            top: '100px', zIndex: 5, minWidth: 0
                        }}>
                            <div style={{
                                textAlign: isMobileViewport ? 'center' : 'left',
                                minWidth: 0
                            }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '6px 16px', borderRadius: '100px', marginBottom: '14px'
                                }}>
                                    <Compass size={14} />
                                    <span style={{
                                        fontSize: 'clamp(9px, 1.2vw, 11px)', fontWeight: 700,
                                        letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap'
                                    }}>DETAILED COMPARISON</span>
                                </div>
                                <h2 style={{
                                    fontSize: isMobileViewport
                                        ? 'clamp(1.75rem, 8vw, 2.5rem)'
                                        : 'clamp(2rem, 3vw, 48px)',
                                    fontWeight: '500', lineHeight: 1.25, margin: '0 0 14px 0',
                                    fontFamily: 'var(--font-display)',
                                    overflowWrap: 'break-word', wordBreak: 'break-word'
                                }}>
                                    Wildlife, Exploration & Luxury: HX vs Viking
                                </h2>
                                <p style={{
                                    fontSize: isMobileViewport ? '0.9rem' : 'clamp(0.9rem, 1.1vw, 0.95rem)',
                                    margin: '0 0 20px 0', lineHeight: 1.6, fontWeight: '400',
                                    color: 'var(--text-muted)',
                                    overflowWrap: 'break-word', wordBreak: 'break-word'
                                }}>
                                    Select a topic below to explore the detailed comparison between HX and Viking expeditions.
                                </p>
                            </div>

                            {/* ═══════ MOBILE TABS ═══════ */}
                            {isMobileViewport ? (
                                <div style={{ position: 'relative' }}>
                                    {/* Right fade indicator */}
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0, bottom: '8px', width: '32px',
                                        background: 'linear-gradient(to left, var(--bg-soft) 0%, transparent 100%)',
                                        pointerEvents: 'none', zIndex: 3, borderRadius: '0 10px 10px 0'
                                    }} />
                                    <div style={{
                                        display: 'flex', gap: '10px',
                                        overflowX: 'auto', overflowY: 'hidden',
                                        paddingBottom: '8px',
                                        scrollSnapType: 'x mandatory',
                                        WebkitOverflowScrolling: 'touch',
                                        scrollbarWidth: 'none',
                                        paddingLeft: '0', paddingRight: '40px'
                                    }}>
                                        {[
                                            { number: '01', title: 'Wildlife' },
                                            { number: '02', title: 'Luxury' },
                                            { number: '03', title: 'Atmosphere' }
                                        ].map((tab, idx) => {
                                            const isActive = activeComparisonTab === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveComparisonTab(idx)}
                                                    style={{
                                                        display: 'flex', alignItems: 'center', gap: '8px',
                                                        padding: '12px 16px',
                                                        background: isActive ? 'var(--bg-dark2)' : 'rgba(39,68,114,0.06)',
                                                        border: isActive
                                                            ? '1px solid var(--bg-soft)'
                                                            : '1px solid rgba(39,68,114,0.12)',
                                                        borderRadius: '10px', cursor: 'pointer',
                                                        textAlign: 'left', flexShrink: 0,
                                                        scrollSnapAlign: 'start',
                                                        boxShadow: isActive ? 'var(--shadow-lg)' : 'none',
                                                        transition: 'all 0.25s ease', outline: 'none',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    <span style={{
                                                        fontSize: '0.8rem', fontWeight: '800',
                                                        color: isActive ? 'var(--bg-white)' : 'var(--text-muted)',
                                                        fontFamily: 'monospace', flexShrink: 0
                                                    }}>{tab.number}</span>
                                                    <span style={{
                                                        fontSize: '0.82rem', fontWeight: '700',
                                                        color: isActive ? 'var(--bg-white)' : 'var(--text-muted)',
                                                        lineHeight: 1.3
                                                    }}>{tab.title}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                /* ═══════ DESKTOP TABS ═══════ */
                                <div style={{
                                    display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0
                                }}>
                                    {[
                                        { number: '01', title: 'Wildlife & Exploration Style', desc: 'Comparing adventure & landing focus' },
                                        { number: '02', title: 'Luxury Comparison', desc: 'Comfort vs traditional luxury' },
                                        { number: '03', title: 'Onboard Atmosphere', desc: 'Onboard vibes, spaces & interiors' }
                                    ].map((tab, idx) => {
                                        const isActive = activeComparisonTab === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveComparisonTab(idx)}
                                                style={{
                                                    display: 'flex', alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: 'clamp(14px, 1.4vw, 20px) clamp(14px, 1.8vw, 24px)',
                                                    background: isActive ? 'var(--bg-dark2)' : 'transparent',
                                                    border: isActive
                                                        ? '1px solid var(--bg-soft)'
                                                        : '1px solid var(--navy-border)',
                                                    borderRadius: '8px', cursor: 'pointer',
                                                    textAlign: 'left', width: '100%',
                                                    transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                                                    boxShadow: isActive ? 'var(--shadow-lg)' : 'none',
                                                    transition: 'all 0.25s ease', outline: 'none',
                                                    minWidth: 0
                                                }}
                                            >
                                                <div style={{
                                                    display: 'flex', alignItems: 'center',
                                                    gap: '12px', minWidth: 0, flex: '1 1 0%'
                                                }}>
                                                    <span style={{
                                                        fontSize: 'clamp(1rem, 1.1vw, 1.15rem)',
                                                        fontWeight: '800',
                                                        color: isActive ? 'var(--bg-white)' : 'var(--text-muted)',
                                                        fontFamily: 'monospace', flexShrink: 0
                                                    }}>{tab.number}</span>
                                                    <div style={{ minWidth: 0, flex: '1 1 0%' }}>
                                                        <div style={{
                                                            fontSize: 'clamp(0.82rem, 0.95vw, 0.95rem)',
                                                            fontWeight: '700',
                                                            color: isActive ? 'var(--bg-white)' : 'var(--text-muted)',
                                                            overflowWrap: 'break-word', wordBreak: 'break-word',
                                                            lineHeight: 1.35
                                                        }}>{tab.title}</div>
                                                        <div style={{
                                                            fontSize: 'clamp(0.68rem, 0.75vw, 0.75rem)',
                                                            color: isActive ? 'var(--bg-soft)' : 'var(--text-muted)',
                                                            marginTop: '3px',
                                                            overflowWrap: 'break-word', wordBreak: 'break-word'
                                                        }}>{tab.desc}</div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    width: '8px', height: '8px', borderRadius: '50%',
                                                    background: isActive ? 'var(--bg-soft)' : 'var(--navy-border)',
                                                    boxShadow: isActive ? '0 0 10px var(--bg-soft)' : 'none',
                                                    transition: 'all 0.25s ease',
                                                    flexShrink: 0, marginLeft: '12px'
                                                }} />
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* ── Right Column: Console Screen ── */}
                        <div style={{
                            background: 'var(--bg-dark2)',
                            border: '1px solid var(--navy-border)',
                            borderRadius: isMobileViewport ? '14px' : '20px',
                            padding: isMobileViewport
                                ? '20px 18px 44px 18px'
                                : 'clamp(28px, 3.5vw, 48px)',
                            boxShadow: 'var(--shadow-lg)',
                            display: 'flex', flexDirection: 'column',
                            position: 'relative', overflow: 'visible',
                            boxSizing: 'border-box', minWidth: 0, width: '100%'
                        }}>
                            {/* Coordinate overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: isMobileViewport ? '14px' : '24px',
                                right: isMobileViewport ? '16px' : '28px',
                                color: 'var(--navy-soft)', fontFamily: 'monospace',
                                fontSize: isMobileViewport ? '7px' : '11px',
                                fontWeight: '700',
                                letterSpacing: isMobileViewport ? '1px' : '2px',
                                pointerEvents: 'none', zIndex: 1,
                                opacity: isMobileViewport ? 0.4 : 0.7,
                                whiteSpace: 'nowrap'
                            }}>HX VS VIKING // EXPEDITION COMPARISON</div>

                            <div style={{
                                position: 'relative', zIndex: 2,
                                minWidth: 0, overflow: 'visible', width: '100%'
                            }}>

                                {/* ══════════ TAB 0 ══════════ */}
                                {activeComparisonTab === 0 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '24px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: '8px', background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Camera size={isMobileViewport ? 18 : 22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.18rem)'
                                                    : 'clamp(1.15rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>Wildlife & Exploration Style</h3>
                                        </div>

                                        <p style={{
                                            fontWeight: 700, color: 'var(--bg-white)', textTransform: 'none',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.92rem',
                                            lineHeight: 1.4, overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 8px 0'
                                        }}>HX Expeditions — stronger for travelers prioritizing:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0', minWidth: 0 }}>
                                            {['Wildlife immersion', 'Frequent Zodiac operations', 'Expedition landings', 'Adventure intensity', 'Active exploration'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobileViewport ? '10px' : '12px', padding: '5px 0', minWidth: 0 }}>
                                                    <CheckCircle size={isMobileViewport ? 14 : 16} style={{ color: 'var(--bg-soft)', flexShrink: 0, marginTop: '2px' }} />
                                                    <span style={{ color: 'var(--bg-white)', fontSize: isMobileViewport ? '0.85rem' : '0.92rem', lineHeight: 1.45, minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '14px 0' }} />

                                        <p style={{
                                            fontWeight: 700, color: 'var(--bg-white)', textTransform: 'none',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.92rem',
                                            lineHeight: 1.4, overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 8px 0'
                                        }}>Viking Expeditions — better suited for travelers wanting:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0', minWidth: 0 }}>
                                            {['Scenic expedition cruising', 'Comfortable exploration', 'Softer activity levels', 'Luxury atmosphere', 'Cultural enrichment'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobileViewport ? '10px' : '12px', padding: '5px 0', minWidth: 0 }}>
                                                    <CheckCircle size={isMobileViewport ? 14 : 16} style={{ color: 'var(--bg-soft)', flexShrink: 0, marginTop: '2px' }} />
                                                    <span style={{ color: 'var(--bg-white)', fontSize: isMobileViewport ? '0.85rem' : '0.92rem', lineHeight: 1.45, minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '12px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                            <p style={{ color: 'var(--bg-soft)', fontStyle: 'italic', fontSize: isMobileViewport ? '0.83rem' : '0.88rem', lineHeight: 1.6, margin: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                                Both lines offer strong expedition experiences, but HX usually feels more expedition intensive.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ══════════ TAB 1 ══════════ */}
                                {activeComparisonTab === 1 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '24px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: '8px', background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Crown size={isMobileViewport ? 18 : 22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.18rem)'
                                                    : 'clamp(1.15rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>Luxury Comparison</h3>
                                        </div>

                                        <div style={{
                                            background: 'var(--bg-dark)', border: '1px solid var(--navy-border)',
                                            marginBottom: '20px',
                                            padding: isMobileViewport ? '14px 16px' : '18px 24px',
                                            borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '44px' : '56px',
                                                height: isMobileViewport ? '44px' : '56px',
                                                borderRadius: '50%', border: '2px solid var(--bg-soft)',
                                                background: 'rgba(255,255,255,0.03)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                            }}>
                                                <span style={{ fontSize: isMobileViewport ? '8px' : '10px', fontWeight: 700, color: 'var(--bg-white)', letterSpacing: '1px' }}>BOTH</span>
                                            </div>
                                            <span style={{ color: 'var(--bg-soft)', fontSize: isMobileViewport ? '0.78rem' : '0.85rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>EXPEDITION LUXURY</span>
                                        </div>

                                        <p style={{
                                            fontWeight: 700, color: 'var(--bg-white)', textTransform: 'none',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.92rem',
                                            lineHeight: 1.4, overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 8px 0'
                                        }}>HX Luxury Style — focuses on:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0', minWidth: 0 }}>
                                            {['Comfortable expedition accommodations', 'Scandinavian simplicity', 'Expedition practicality', 'Nature immersion'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobileViewport ? '10px' : '14px', padding: '5px 0', minWidth: 0 }}>
                                                    <span style={{
                                                        background: 'var(--navy-soft)', color: 'var(--bg-soft)',
                                                        fontSize: isMobileViewport ? '0.68rem' : '0.75rem',
                                                        padding: isMobileViewport ? '3px 7px' : '4px 9px',
                                                        borderRadius: '4px', fontFamily: 'monospace', fontWeight: 700,
                                                        flexShrink: 0, lineHeight: 1.4
                                                    }}>0{i + 1}</span>
                                                    <span style={{ color: 'var(--bg-white)', fontSize: isMobileViewport ? '0.85rem' : '0.92rem', lineHeight: 1.45, minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p style={{
                                            fontStyle: 'italic', color: 'var(--bg-soft)',
                                            fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                            lineHeight: 1.5, margin: '8px 0 0 0',
                                            overflowWrap: 'break-word', wordBreak: 'break-word'
                                        }}>Luxury is present, but exploration comes first.</p>

                                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '14px 0' }} />

                                        <p style={{
                                            fontWeight: 700, color: 'var(--bg-white)', textTransform: 'none',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.92rem',
                                            lineHeight: 1.4, overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 8px 0'
                                        }}>Viking Luxury Style — focuses more heavily on:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', minWidth: 0 }}>
                                            {['Elegant ship design', 'Elevated dining', 'Quiet sophistication', 'Refined service'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobileViewport ? '10px' : '12px', padding: '5px 0', minWidth: 0 }}>
                                                    <CheckCircle size={isMobileViewport ? 14 : 16} style={{ color: 'var(--bg-soft)', flexShrink: 0, marginTop: '2px' }} />
                                                    <span style={{ color: 'var(--bg-white)', fontSize: isMobileViewport ? '0.85rem' : '0.92rem', lineHeight: 1.45, minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '10px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                            <p style={{ color: 'var(--bg-soft)', fontStyle: 'italic', fontSize: isMobileViewport ? '0.83rem' : '0.88rem', lineHeight: 1.6, margin: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                                                Travelers prioritizing traditional luxury often lean toward Viking. Travelers prioritizing exploration intensity often prefer HX.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ══════════ TAB 2 ══════════ */}
                                {activeComparisonTab === 2 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '24px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: '8px', background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Ship size={isMobileViewport ? 18 : 22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.18rem)'
                                                    : 'clamp(1.15rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>Onboard Atmosphere</h3>
                                        </div>

                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                                            gap: isMobileViewport ? '14px' : 'clamp(16px, 2vw, 24px)'
                                        }}>
                                            {[
                                                { img: hxInteriorImg, alt: 'HX Expeditions interior', label: 'HX — Casual, active, educational', desc: 'Science centers, expedition lounges, and a destination-driven atmosphere where exploration comes first.' },
                                                { img: vikingInteriorImg, alt: 'Viking Expeditions interior', label: 'Viking — Elegant, refined, quieter', desc: 'Spacious suites, refined dining and a quiet Scandinavian luxury atmosphere.' }
                                            ].map((card, i) => (
                                                <div key={i} style={{
                                                    background: 'var(--bg-dark)', border: '1px solid var(--navy-border)',
                                                    borderRadius: '8px',
                                                    padding: isMobileViewport ? '12px' : 'clamp(16px, 1.8vw, 24px)',
                                                    minWidth: 0
                                                }}>
                                                    <div style={{ borderRadius: '6px', overflow: 'hidden', marginBottom: '12px', aspectRatio: '16 / 10', width: '100%' }}>
                                                        <img src={card.img} alt={card.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                                    </div>
                                                    <p style={{
                                                        fontWeight: 700, color: 'var(--bg-white)',
                                                        fontSize: isMobileViewport ? '0.85rem' : '0.95rem',
                                                        textTransform: 'none', lineHeight: 1.35,
                                                        overflowWrap: 'break-word', wordBreak: 'break-word',
                                                        margin: '0 0 6px 0'
                                                    }}>{card.label}</p>
                                                    <p style={{
                                                        color: 'var(--bg-soft)',
                                                        fontSize: isMobileViewport ? '0.82rem' : '0.88rem',
                                                        lineHeight: 1.6, margin: 0,
                                                        overflowWrap: 'break-word', wordBreak: 'break-word'
                                                    }}>{card.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience Antarctica with HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of polar wildlife, towering icebergs, Zodiac landings, and the extraordinary world that awaits on an HX Antarctica expedition.
                    </p>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/z11RmkKT8b0"
                            title="Experience Antarctica with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>


            {/* ── NEW: ANTARCTICA & ARCTIC IMAGE SECTIONS (inline CSS) ── */}
            <section style={{
                background: 'var(--medi-bg-soft)',
                padding: 'clamp(48px, 8vw, 80px) clamp(16px, 3vw, 20px)',
                overflow: 'visible'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {/* ── Section Header ── */}
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(39,68,114,0.1)',
                            color: 'var(--medi-navy)',
                            fontSize: 'clamp(9px, 1.2vw, 11px)',
                            fontWeight: 700,
                            letterSpacing: '3px',
                            padding: '6px 18px',
                            borderRadius: '20px',
                            marginBottom: '16px'
                        }}>DESTINATION DEEP DIVE</span>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
                            fontWeight: 500,
                            lineHeight: 1.25,
                            margin: '0 0 18px 0',
                            color: 'var(--medi-navy)',
                            fontFamily: 'var(--font-display)',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word'
                        }}>
                            Which Is Better For Antarctica & Arctic Cruises?
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '3px',
                            background: 'var(--medi-navy)',
                            borderRadius: '2px',
                            margin: '0 auto'
                        }} />
                    </div>

                    {/* ══════════ ANTARCTICA ══════════ */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                        gap: isMobileViewport ? '20px' : 'clamp(20px, 2.5vw, 28px)',
                        marginBottom: 'clamp(32px, 5vw, 48px)',
                        alignItems: 'start',
                        overflow: 'visible'
                    }}>
                        {/* Antarctica Image */}
                        <div style={{
                            position: 'relative',
                            borderRadius: isMobileViewport ? '14px' : '20px',
                            overflow: 'hidden',
                            height: isMobileViewport ? 'clamp(220px, 50vw, 320px)' : 'clamp(300px, 30vw, 420px)',
                            boxShadow: '0 8px 32px rgba(39,68,114,0.15)',
                            order: isMobileViewport ? 0 : 0
                        }}>
                            <img
                                src={antartica}
                                alt="Antarctica expedition"
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 50%)'
                            }} />
                            <div style={{ position: 'absolute', bottom: isMobileViewport ? '16px' : '24px', left: isMobileViewport ? '16px' : '24px' }}>
                                <Snowflake size={isMobileViewport ? 22 : 28} color="#fff" style={{ marginBottom: '6px', display: 'block' }} />
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: isMobileViewport ? '1.15rem' : '1.4rem',
                                    fontWeight: 700,
                                    margin: 0
                                }}>Antarctica</h3>
                            </div>
                        </div>

                        {/* Antarctica Content */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: isMobileViewport ? '14px' : '20px',
                            minWidth: 0,
                            overflow: 'visible',
                            order: isMobileViewport ? 1 : 1
                        }}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: isMobileViewport ? '12px' : '16px',
                                padding: isMobileViewport ? '18px 16px' : '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: 'var(--medi-navy)',
                                    fontSize: isMobileViewport ? '0.7rem' : '0.78rem',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>HX Antarctica Strengths</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: isMobileViewport ? '8px' : '10px' }}>
                                    {['Strong expedition heritage', 'Active exploration focus', 'Frequent landings', 'Expedition depth', 'Wildlife immersion'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
                                            <CheckCircle size={isMobileViewport ? 14 : 15} style={{ color: 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{
                                                color: '#374151',
                                                fontSize: isMobileViewport ? '0.85rem' : '0.9rem',
                                                lineHeight: 1.45,
                                                minWidth: 0,
                                                overflowWrap: 'break-word',
                                                wordBreak: 'break-word'
                                            }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: '#ffffff',
                                borderRadius: isMobileViewport ? '12px' : '16px',
                                padding: isMobileViewport ? '18px 16px' : '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: 'var(--medi-bg-dark2)',
                                    fontSize: isMobileViewport ? '0.7rem' : '0.78rem',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>Viking Antarctica Strengths</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: isMobileViewport ? '8px' : '10px' }}>
                                    {['More refined onboard luxury', 'Spacious accommodations', 'Softer expedition atmosphere', 'Elegant public areas'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
                                            <CheckCircle size={isMobileViewport ? 14 : 15} style={{ color: 'var(--medi-bg-dark2)', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{
                                                color: '#374151',
                                                fontSize: isMobileViewport ? '0.85rem' : '0.9rem',
                                                lineHeight: 1.45,
                                                minWidth: 0,
                                                overflowWrap: 'break-word',
                                                wordBreak: 'break-word'
                                            }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: isMobileViewport ? '3px' : '4px solid var(--medi-navy)',
                                borderRadius: '0 10px 10px 0',
                                padding: isMobileViewport ? '14px 16px' : '16px 20px',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: '#374151',
                                    fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                    margin: 0,
                                    fontStyle: 'italic',
                                    lineHeight: 1.6,
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>
                                    For travelers seeking maximum expedition immersion, HX often has the advantage. For travelers prioritizing luxury comfort alongside exploration, Viking may appeal more.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div style={{
                        height: '1px',
                        background: 'rgba(39,68,114,0.12)',
                        margin: '0 0 clamp(32px, 5vw, 48px)'
                    }} />

                    {/* ══════════ ARCTIC ══════════ */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                        gap: isMobileViewport ? '20px' : 'clamp(20px, 2.5vw, 28px)',
                        alignItems: 'start',
                        overflow: 'visible'
                    }}>
                        {/* Arctic Content — order flipped on mobile so image appears first */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: isMobileViewport ? '14px' : '20px',
                            minWidth: 0,
                            overflow: 'visible',
                            order: isMobileViewport ? 1 : 0
                        }}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: isMobileViewport ? '12px' : '16px',
                                padding: isMobileViewport ? '18px 16px' : '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: 'var(--medi-navy)',
                                    fontSize: isMobileViewport ? '0.7rem' : '0.78rem',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>HX Arctic Strengths — HX is particularly strong in:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: isMobileViewport ? '8px' : '10px' }}>
                                    {['Svalbard', 'Greenland', 'Polar wildlife', 'High Arctic exploration', 'Remote expedition experiences'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
                                            <CheckCircle size={isMobileViewport ? 14 : 15} style={{ color: 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{
                                                color: '#374151',
                                                fontSize: isMobileViewport ? '0.85rem' : '0.9rem',
                                                lineHeight: 1.45,
                                                minWidth: 0,
                                                overflowWrap: 'break-word',
                                                wordBreak: 'break-word'
                                            }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: '#ffffff',
                                borderRadius: isMobileViewport ? '12px' : '16px',
                                padding: isMobileViewport ? '18px 16px' : '24px',
                                border: '1px solid rgba(39,68,114,0.1)',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: 'var(--medi-bg-dark2)',
                                    fontSize: isMobileViewport ? '0.7rem' : '0.78rem',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>Viking Arctic Strengths — Viking excels at:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: isMobileViewport ? '8px' : '10px' }}>
                                    {['Comfortable Arctic exploration', 'Scenic expedition cruising', 'Cultural Arctic experiences'].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
                                            <CheckCircle size={isMobileViewport ? 14 : 15} style={{ color: 'var(--medi-bg-dark2)', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{
                                                color: '#374151',
                                                fontSize: isMobileViewport ? '0.85rem' : '0.9rem',
                                                lineHeight: 1.45,
                                                minWidth: 0,
                                                overflowWrap: 'break-word',
                                                wordBreak: 'break-word'
                                            }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: isMobileViewport ? '3px' : '4px solid var(--medi-navy)',
                                borderRadius: '0 10px 10px 0',
                                padding: isMobileViewport ? '14px 16px' : '16px 20px',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: '#374151',
                                    fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                    margin: 0,
                                    fontStyle: 'italic',
                                    lineHeight: 1.6,
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>
                                    HX generally feels more expedition focused in the Arctic overall.
                                </p>
                            </div>
                        </div>

                        {/* Arctic Image — order flipped on mobile so it appears first */}
                        <div style={{
                            position: 'relative',
                            borderRadius: isMobileViewport ? '14px' : '20px',
                            overflow: 'hidden',
                            height: isMobileViewport ? 'clamp(220px, 50vw, 320px)' : 'clamp(300px, 30vw, 420px)',
                            boxShadow: '0 8px 32px rgba(39,68,114,0.15)',
                            order: isMobileViewport ? 0 : 1
                        }}>
                            <img
                                src={arcticImg}
                                alt="Arctic expedition"
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 50%)'
                            }} />
                            <div style={{ position: 'absolute', bottom: isMobileViewport ? '16px' : '24px', left: isMobileViewport ? '16px' : '24px' }}>
                                <Compass size={isMobileViewport ? 22 : 28} color="#fff" style={{ marginBottom: '6px', display: 'block' }} />
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: isMobileViewport ? '1.15rem' : '1.4rem',
                                    fontWeight: 700,
                                    margin: 0
                                }}>Arctic</h3>
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
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Expedition Cruise Expert" />
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
                                    Expert Insight from
                                    <br className="medi-growth-title-break" /> Angela Hughes
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
            <section style={{
                background: '#ffffff',
                padding: 'clamp(48px, 8vw, 80px) clamp(16px, 3vw, 20px)',
                overflow: 'visible'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                        gap: isMobileViewport ? '24px' : 'clamp(28px, 4vw, 48px)',
                        alignItems: isMobileViewport ? 'start' : 'center',
                        overflow: 'visible'
                    }}>
                        {/* Image */}
                        <div style={{
                            position: 'relative',
                            borderRadius: isMobileViewport ? '14px' : '20px',
                            overflow: 'hidden',
                            height: isMobileViewport ? 'clamp(220px, 50vw, 300px)' : 'clamp(300px, 28vw, 400px)',
                            boxShadow: '0 8px 32px rgba(39,68,114,0.15)',
                            order: isMobileViewport ? 0 : 0
                        }}>
                            <img
                                src={wildlifeImg}
                                alt="Antarctica wildlife"
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,28,46,0.7) 0%, transparent 55%)'
                            }} />
                            <span style={{
                                position: 'absolute',
                                bottom: isMobileViewport ? '16px' : '20px',
                                left: isMobileViewport ? '16px' : '24px',
                                color: '#fff',
                                fontSize: isMobileViewport ? '0.9rem' : '1rem',
                                fontWeight: 700,
                                maxWidth: 'calc(100% - 32px)',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}>Wildlife Immersion</span>
                        </div>

                        {/* Content */}
                        <div style={{
                            minWidth: 0,
                            overflow: 'visible',
                            order: isMobileViewport ? 1 : 1
                        }}>
                            <span style={{
                                display: 'inline-block',
                                background: 'rgba(39,68,114,0.1)',
                                color: 'var(--medi-navy)',
                                fontSize: isMobileViewport ? '9px' : '11px',
                                fontWeight: 700,
                                letterSpacing: '3px',
                                padding: '5px 16px',
                                borderRadius: '20px',
                                marginBottom: '16px',
                                whiteSpace: 'nowrap'
                            }}>WILDLIFE & EXPLORATION</span>

                            <h2 style={{
                                color: 'var(--medi-navy)',
                                fontSize: isMobileViewport
                                    ? 'clamp(1.5rem, 6vw, 2rem)'
                                    : 'clamp(1.6rem, 2.5vw, 2rem)',
                                fontWeight: 500,
                                margin: '0 0 16px',
                                lineHeight: 1.2,
                                fontFamily: 'var(--font-display)',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}>
                                Which Expedition Line Is Better For Wildlife?
                            </h2>

                            <div style={{
                                width: '50px',
                                height: '3px',
                                background: 'var(--medi-navy)',
                                borderRadius: '2px',
                                marginBottom: isMobileViewport ? '18px' : '24px'
                            }} />

                            <p style={{
                                color: '#475569',
                                fontSize: isMobileViewport ? '0.88rem' : '0.95rem',
                                lineHeight: 1.7,
                                marginBottom: '18px',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}>
                                HX is generally more wildlife and exploration focused. HX is generally stronger for travelers prioritizing wildlife immersion, frequent Zodiac operations, expedition landings, adventure intensity and active exploration.
                            </p>

                            <p style={{
                                color: '#475569',
                                fontSize: isMobileViewport ? '0.88rem' : '0.95rem',
                                lineHeight: 1.7,
                                marginBottom: '18px',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}>
                                Viking is better suited for travelers wanting scenic expedition cruising, comfortable exploration, softer activity levels, luxury atmosphere and cultural enrichment.
                            </p>

                            <div style={{
                                background: 'var(--medi-bg-soft)',
                                borderLeft: isMobileViewport ? '3px' : '4px solid var(--medi-navy)',
                                borderRadius: '0 8px 8px 0',
                                padding: isMobileViewport ? '12px 16px' : '14px 18px',
                                minWidth: 0,
                                overflow: 'visible',
                                boxSizing: 'border-box'
                            }}>
                                <p style={{
                                    color: '#374151',
                                    fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                    margin: 0,
                                    fontStyle: 'italic',
                                    lineHeight: 1.6,
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>
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
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes <br /> Trips & Ships Luxury Travel</h2>
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

            {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience Antarctica with HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of polar wildlife, towering icebergs, Zodiac landings, and the extraordinary world that awaits on an HX Antarctica expedition.
                    </p>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/4cOaQapXsrY"
                            title="Experience Antarctica with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
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

            {/* ── FINAL CONVERSION: CTA SECTION REFACTORED ── */}
            <section className="medi-cta-main-section" style={{
                position: 'relative',
                padding: isMobileViewport ? '60px 0' : '100px 0',
                overflow: 'hidden'
            }}>
                <style>{`
        .cta-content-box {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px;
            text-align: center;
            position: relative;
            z-index: 5;
        }

        .cta-dynamic-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-top: 40px;
        }

        .cta-highlight-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 32px;
            backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
            .cta-content-box {
                padding: 0 20px;
            }
            .cta-dynamic-buttons {
                flex-direction: column; /* Stack buttons on phones */
                align-items: center;
            }
            .cta-dynamic-buttons button {
                width: 100%; /* Full width for easy tapping */
                max-width: 320px;
                justify-content: center;
            }
            .cta-highlight-box {
                padding: 24px 16px;
            }
        }
    `}</style>

                <div className="medi-cta-bg-pattern-layer"></div>

                <div className="cta-content-box">
                    <h2 className="medi-cta-heading-white" style={{
                        fontSize: 'clamp(24px, 5vw, 42px)',
                        lineHeight: '1.2',
                        marginBottom: '24px'
                    }}>
                        Ready To Choose The Right Expedition Cruise Line?
                    </h2>

                    <div className="medi-cta-separator-white" style={{ margin: '0 auto 32px' }}></div>

                    <p className="medi-cta-paragraph-white" style={{
                        fontSize: 'clamp(16px, 2vw, 19px)',
                        lineHeight: '1.7',
                        marginBottom: '24px'
                    }}>
                        Choosing between HX Expeditions and Viking Expeditions depends on the type of expedition experience you truly want.
                        <strong> The right ship, itinerary and expedition style can dramatically shape your overall experience.</strong>
                    </p>

                    <p className="medi-cta-paragraph-white" style={{
                        opacity: 0.9,
                        fontSize: '16px',
                        maxWidth: '750px',
                        margin: '0 auto 32px'
                    }}>
                        Trips & Ships Luxury Travel provides personalized expert guidance to help travelers confidently choose the best expedition cruise line for their goals.
                    </p>

                    {/* Improved Callout Box */}
                    <div className="cta-highlight-box">
                        <span style={{
                            color: '#3b82f6',
                            fontSize: '12px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Direct Expert Access
                        </span>
                        <p style={{
                            color: '#ffffff',
                            fontSize: '17px',
                            fontWeight: '600',
                            margin: 0,
                            lineHeight: '1.5'
                        }}>
                            Contact Trips & Ships Luxury Travel today to begin planning your expedition adventure.
                        </p>
                    </div>

                    {/* Responsive Button Group */}
                    <div className="cta-dynamic-buttons">
                        <button className="medi-primary-cta-button" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '16px 32px'
                        }}>
                            <Phone size={18} />
                            Schedule a Consultation
                        </button>

                        <button className="medi-secondary-outline-button" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '16px 32px',
                            background: 'transparent',
                            border: '1px solid #ffffff',
                            color: '#ffffff'
                        }}>
                            <LayoutList size={18} />
                            Compare Expedition Lines
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HXvsVikingExpeditions
