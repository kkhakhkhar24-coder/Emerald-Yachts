import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, ChevronLeft, Crown, Phone,
    Globe, Heart, Utensils, Award,
    Maximize, Home, Hotel, GlassWater, Wifi,
    CircleDollarSign, UserCheck, GraduationCap, Mic, FileText, Microscope, FlaskConical,
    Music,
    Moon,
    Minus,
    Sun, X, Wine, Castle, Camera, Film, Theater, Waves
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
import hero1 from '../../assets/DisneyCruiseAdultsWithoutKids/Hero1.jpg'
import hero2 from '../../assets/DisneyCruiseAdultsWithoutKids/Hero2.jpg'
import hero3 from '../../assets/DisneyCruiseAdultsWithoutKids/Hero3.jpg'
import profileAH from '../../assets/DisneyCruiseAdultsWithoutKids/Profile_AH.jpg'
import HavingFunNight from '../../assets/DisneyCruiseAdultsWithoutKids/HavingFunNight.jpg'
import QuietSanctuaries from '../../assets/DisneyCruiseAdultsWithoutKids/QuietSanctuaries.jpg'
import WaterCoaster from '../../assets/DisneyCruiseAdultsWithoutKids/WaterCoaster.jpg'
import KilimanjaroSafaris from '../../assets/DisneyCruiseAdultsWithoutKids/KilimanjaroSafaris.jpg'
import SeasonalCharacters from '../../assets/DisneyCruiseAdultsWithoutKids/SeasonalCharacters.jpg'
import InternationalFlowerGarden from '../../assets/DisneyCruiseAdultsWithoutKids/InternationalFlowerGarden.jpg'
// import Video1 from '../../assets/DisneyCruiseAdults/Video1.mp4'
// import Video2 from '../../assets/DisneyCruiseAdults/Video2.mp4'
// import Video3 from '../../assets/DisneyCruiseAdults/Video3.mp4'
// import AH1 from '../../assets/DisneyCruiseAdults/AH1.jpg'
// import AH2 from '../../assets/DisneyCruiseAdults/AH2.jpg'
// import AH3 from '../../assets/DisneyCruiseAdults/AH3.jpg'
// import AH4 from '../../assets/DisneyCruiseAdults/AH4.jpg'
// import AH5 from '../../assets/DisneyCruiseAdults/AH5.jpg'
import Caribbean from '../../assets/DisneyCruiseAdultsWithoutKids/Caribbean.jpg'
import Mediterranean from '../../assets/DisneyCruiseAdultsWithoutKids/Mediterranean.jpg'
import Alaska from '../../assets/DisneyCruiseAdultsWithoutKids/Alaska.jpg'
import Transatlantic from '../../assets/DisneyCruiseAdultsWithoutKids/Transatlantic.jpg'
import CastawayCay from '../../assets/DisneyCruiseAdultsWithoutKids/CastawayCay.png'
import DisneyLookout from '../../assets/DisneyCruiseAdultsWithoutKids/LookoutCayLighthousePoint.jpeg'

function DisneyCruiseAdultsWithoutKids() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3];

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0);
    const [isMobileViewport, setIsMobileViewport] = useState(false);

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

    const disneyCruiseImages = [Caribbean, Mediterranean, Alaska, Transatlantic];

    const disneyFaqs = [
        {
            question: "Can adults go on a Disney cruise without children?",
            answer: "Absolutely. Thousands of adults sail with Disney Cruise Line every year without bringing children."
        },
        {
            question: "Are there adults-only areas on Disney ships?",
            answer: "Yes. Adult-exclusive pools, lounges, spas, restaurants, and relaxation areas are available."
        },
        {
            question: "Is Disney Cruise Line good for couples?",
            answer: "Yes. Many couples choose Disney for anniversaries, honeymoons, and romantic vacations."
        },
        {
            question: "Are Disney cruises too crowded with kids?",
            answer: "Not typically. Disney ships are designed with separate spaces for adults and families."
        },
        {
            question: "Does Disney have adult-only dining?",
            answer: "Yes. Palo and Remy are among the most popular adult-exclusive dining venues at sea."
        },
        {
            question: "Are Disney cruises expensive?",
            answer: "Disney cruises are often priced higher than mainstream cruise lines, but many travelers feel the service and experience justify the cost."
        },
        {
            question: "Does Disney Cruise Line have casinos?",
            answer: "No. Disney ships do not include casinos."
        },
        {
            question: "What is the best Disney cruise for adults?",
            answer: "Alaska, Mediterranean, Caribbean, and transatlantic itineraries are particularly popular among adults."
        },
        {
            question: "Is Disney good for honeymooners?",
            answer: "Yes. Many newlyweds appreciate Disney's romantic atmosphere and exceptional service."
        },
        {
            question: "Can adults enjoy Disney entertainment?",
            answer: "Absolutely. Broadway-style productions and live entertainment appeal to guests of all ages."
        },
        {
            question: "Is Disney Cruise Line considered luxury?",
            answer: "Disney is generally classified as premium rather than luxury, though many aspects of the experience feel luxurious."
        },
        {
            question: "Is Disney Cruise worth it for non-Disney fans?",
            answer: "Many non-Disney fans enjoy the ships, destinations, service, dining, and entertainment even without a strong connection to Disney."
        }
    ];

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
                "description": "Luxury travel agency specializing in Disney Cruise Line, adults-only Disney cruise experiences, honeymoon cruises, and premium couple travel."
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                }
            },
            {
                "@type": "WebPage",
                "name": "Disney Cruise for Adults Without Kids",
                "url": "https://www.tripsandships.com/disney-cruise-for-adults-without-kids",
                "description": "Discover whether a Disney Cruise is worth it for adults without children. Explore adult-only spaces, luxury dining, entertainment, and romantic experiences on Disney Cruise Line."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Luxury Cruises",
                        "item": "https://www.tripsandships.com/luxury-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Disney Cruise for Adults Without Kids",
                        "item": "https://www.tripsandships.com/disney-cruise-for-adults-without-kids"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": disneyFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Disney Cruise for Adults Without Kids | Is Disney Cruise Line Worth It for Adults?</title>
                <meta
                    name="title"
                    content="Disney Cruise for Adults Without Kids | Luxury Disney Cruise Experiences"
                />
                <meta
                    name="description"
                    content="Wondering if a Disney Cruise is worth it for adults without children? Discover adult-only spaces, luxury dining, entertainment, destinations, and why many couples choose Disney Cruise Line."
                />
                <meta name="keywords" content="Disney Cruise for Adults Without Kids, Disney Cruise Adults Only, Disney Cruise for Couples, Disney Cruise Without Children, Adult Disney Cruise Experience, Disney Cruise for Honeymoon, Is Disney Cruise worth it for adults without kids, Best Disney cruise for couples, Adults-only areas on Disney Cruise Line, Disney cruise date night ideas, Disney cruise for adults review, Disney Cruise Line adult only, Disney cruise honeymoon, Disney cruise anniversary, Disney cruise couples getaway, Disney Quiet Cove Pool, Palo restaurant Disney Cruise, Remy Disney Cruise, Disney Castaway Cay adults, Disney cruise without kids, Luxury Disney cruise experience" />
                <link rel="canonical" href="https://www.tripsandships.com/disney-cruise-for-adults-without-kids" />
                <script type="application/ld+json">
                    {JSON.stringify(disneySchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
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
                        <Gem size={16} />
                        <span>Adults-Only Experiences, Romance & Premium Dining</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise for Adults<br />Without Kids
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        maxWidth: '700px',
                        margin: '20px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center'
                    }}>
                        Is Disney Cruise Line worth it for adults? Thousands of couples, honeymooners, and Disney fans say yes.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO SECTION ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
        .medi-immersion-card-item:hover .medi-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
        .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
            stroke: #ffffff !important;
        }
        .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
        .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
        .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
        .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover { background: rgba(39, 68, 114, 0.4); }
    `}</style>

                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr',
                        gap: '60px',
                        alignItems: 'start'
                    }}>

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block', fontSize: '12px', fontWeight: '700',
                                color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                Beyond The Family Vacation
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2', margin: '0 0 20px 0'
                            }}>
                                Is a Disney Cruise Worth It for Adults Without Kids?
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px', height: '3px', background: '#3b82f6',
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Many travelers assume that Disney cruises are only for families with young children. The reality is quite different.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Every year, thousands of couples, honeymooners, empty nesters, Disney fans, and luxury travelers sail with Disney Cruise Line without bringing children. In fact, many adults are surprised to discover that Disney Cruise Line offers sophisticated dining, adult-only retreats, upscale entertainment, premium spas, exclusive beaches, and exceptional service that rival some luxury cruise brands.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                Whether you're planning a romantic getaway, anniversary celebration, honeymoon, or simply love Disney storytelling, a Disney cruise can be an excellent adults-only vacation experience.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    What Adult Travelers Discover:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px', textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Adult-Only Spaces", i: <Gem size={20} /> },
                                        { t: "Sophisticated Dining", i: <Utensils size={20} /> },
                                        { t: "Broadway Entertainment", i: <Theater size={20} /> },
                                        { t: "Premium Spa Retreats", i: <Sparkles size={20} /> },
                                        { t: "Private Island Beaches", i: <Waves size={20} /> },
                                        { t: "Romantic Experiences", i: <Heart size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>
                                                {item.i}
                                            </div>
                                            <span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Signature Expert Block */}
                        <div className="medi-premium-signature-panel" style={{
                            marginTop: window.innerWidth <= 1024 ? '40px' : '0',
                            borderLeftColor: '#274472'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                                    At Trips & Ships Luxury Travel, we help adult travelers discover a side of Disney Cruise Line that most people never expect — from adult-only dining and quiet retreats to romantic private island experiences.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps adults plan Disney cruises that feel nothing like a typical family vacation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY ADULTS CHOOSE DISNEY CRUISES ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            The Adult Appeal
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Adults Choose Disney Cruises
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
                            While Disney is famous for family vacations, many adults book Disney cruises for reasons that have nothing to do with traveling with children.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Star size={20} style={{ color: '#3b82f6' }} /> Popular Reasons Adults Sail
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[
                                    { text: "Exceptional service", icon: <Award size={18} /> },
                                    { text: "Beautiful ships", icon: <Ship size={18} /> },
                                    { text: "Adult-only spaces", icon: <Gem size={18} /> },
                                    { text: "Broadway-style entertainment", icon: <Theater size={18} /> },
                                    { text: "High-quality dining", icon: <Utensils size={18} /> },
                                    { text: "Private island experiences", icon: <Waves size={18} /> },
                                    { text: "Disney nostalgia", icon: <Castle size={18} /> },
                                    { text: "Relaxed atmosphere", icon: <Sun size={18} /> },
                                    { text: "Romantic experiences", icon: <Heart size={18} /> }
                                ].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                    Industry-Leading Satisfaction
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                                    Many repeat guests report that Disney consistently delivers one of the highest guest satisfaction ratings in the cruise industry.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Consistently high service standards", "Attention to detail in every experience", "Clean, well-maintained ships", "Strong repeat guest loyalty"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                        "Adult guests often become some of Disney's most passionate advocates."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ADULT-ONLY EXPERIENCES: RESPONSIVE LEFT-ALIGNED MOSAIC ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
        .dis-modern-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 420px; 
            gap: 24px;
            max-width: 1240px;
            margin: 0 auto;
        }

        .dis-modern-item {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            background-color: #000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dis-modern-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.8s ease;
        }

        /* Portrait positioning for specific images */
        .dis-img-characters { object-position: top center !important; }
        .dis-img-safari { object-position: center center; }

        .dis-modern-overlay {
            position: absolute;
            inset: 0;
            /* Gradient deepens at the bottom left for maximum text contrast */
            background: linear-gradient(to top, 
                rgba(10, 17, 32, 1) 0%,      
                rgba(10, 17, 32, 0.85) 30%,   
                rgba(10, 17, 32, 0.2) 60%,    
                transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start; /* Ensures all content starts from the left */
            padding: clamp(24px, 5vw, 45px) clamp(20px, 4vw, 35px);
            color: #ffffff;
            z-index: 2;
            text-align: left; /* Explicit left alignment */
        }

        @media (hover: hover) {
            .dis-modern-item:hover .dis-modern-img {
                transform: scale(1.08);
                filter: brightness(0.7);
            }
        }

        .dis-modern-tag {
            font-size: clamp(10px, 2vw, 11px);
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #60a5fa;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            width: 100%; /* Ensures alignment across full width */
        }

        .dis-modern-title {
            font-size: clamp(20px, 3vw, 24px);
            font-weight: 700;
            margin: 0 0 12px 0;
            line-height: 1.2;
            color: #ffffff;
            text-align: left;
            text-shadow: 0 2px 15px rgba(0, 0, 0, 0.8);
            width: 100%;
        }

        .dis-modern-desc {
            font-size: clamp(14px, 2vw, 15px);
            color: rgba(255, 255, 255, 0.95);
            line-height: 1.6;
            margin: 0;
            font-weight: 400;
            text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px; /* Prevents text from stretching too far on wide cards */
        }

        /* TABLET: 2 Columns */
        @media (max-width: 1024px) {
            .dis-modern-grid { 
                grid-template-columns: repeat(2, 1fr); 
                grid-auto-rows: 380px;
            }
        }

        /* MOBILE: 1 Column */
        @media (max-width: 650px) {
            .dis-modern-grid { 
                grid-template-columns: 1fr; 
                grid-auto-rows: 340px; 
                gap: 16px;
            }
            .dis-modern-overlay {
                padding: 30px 20px;
            }
            .dis-modern-title {
                text-align: left !important;
            }
            .dis-modern-desc {
                max-width: 100%; /* Allows full width on mobile */
            }
        }

        /* SMALL MOBILE */
        @media (max-width: 380px) {
            .dis-modern-grid { grid-auto-rows: 310px; }
            .dis-modern-title { font-size: 19px; }
        }
    `}</style>

                {/* Section Header (Centered as requested) */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{
                        color: '#3b82f6',
                        fontWeight: '800',
                        fontSize: 'clamp(11px, 2vw, 13px)',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        display: 'block',
                        marginBottom: '12px'
                    }}>
                        Exclusive Experiences
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(30px, 5vw, 48px)',
                        color: '#ffffff',
                        fontWeight: '800',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15
                    }}>
                        The Sophisticated Side of Disney
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: '#3b82f6',
                        margin: '0 auto',
                        borderRadius: '10px'
                    }}></div>
                </div>

                <div className="dis-modern-grid">

                    {/* 1. SEASONAL STORYTELLING */}
                    <div className="dis-modern-item">
                        <img src={SeasonalCharacters} alt="Seasonal Events" className="dis-modern-img dis-img-characters" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Immersive</span>
                            <h3 className="dis-modern-title">Seasonal Storytelling</h3>
                            <p className="dis-modern-desc">Exclusive holiday themed cruises featuring sophisticated parties and immersive magic.</p>
                        </div>
                    </div>

                    {/* 2. NIGHTLIFE DISTRICTS */}
                    <div className="dis-modern-item">
                        <img src={HavingFunNight} alt="Nightlife" className="dis-modern-img" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Social</span>
                            <h3 className="dis-modern-title">Nightlife Districts</h3>
                            <p className="dis-modern-desc">Sophisticated lounges and cocktail bars designed for adults to relax and connect.</p>
                        </div>
                    </div>

                    {/* 3. QUIET SANCTUARIES */}
                    <div className="dis-modern-item">
                        <img src={QuietSanctuaries} alt="Retreats" className="dis-modern-img" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Relaxation</span>
                            <h3 className="dis-modern-title">Quiet Sanctuaries</h3>
                            <p className="dis-modern-desc">Dedicated adult-exclusive pool decks and serene escapes from the family zones.</p>
                        </div>
                    </div>

                    {/* 4. KILIMANJARO SAFARIS */}
                    <div className="dis-modern-item">
                        <img src={KilimanjaroSafaris} alt="Safari" className="dis-modern-img dis-img-safari" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Exploration</span>
                            <h3 className="dis-modern-title">Kilimanjaro Safaris</h3>
                            <p className="dis-modern-desc">World-class access to exotic wildlife and nature excursions across the globe.</p>
                        </div>
                    </div>

                    {/* 5. PREMIUM THRILLS */}
                    <div className="dis-modern-item">
                        <img src={WaterCoaster} alt="Thrills" className="dis-modern-img" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Adventure</span>
                            <h3 className="dis-modern-title">Premium Thrills</h3>
                            <p className="dis-modern-desc">High-tech water coasters that combine storytelling with unmatched ocean views.</p>
                        </div>
                    </div>

                    {/* 6. INTERNATIONAL FLOWER GARDEN */}
                    <div className="dis-modern-item">
                        <img src={InternationalFlowerGarden} alt="Artistry" className="dis-modern-img" />
                        <div className="dis-modern-overlay">
                            <span className="dis-modern-tag">Design</span>
                            <h3 className="dis-modern-title">Flower Garden</h3>
                            <p className="dis-modern-desc">Appreciate the horticulture and artistry that make Disney vessels floating masterpieces.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══════════════ DISNEY CRUISES FOR COUPLES ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Romance & Celebration
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Disney Cruises for Couples
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Disney cruises can be surprisingly romantic. Couples often choose Disney for honeymoons, anniversaries, and memorable date night experiences.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Honeymoons", desc: "Many newlyweds appreciate Disney's combination of luxury, service, and entertainment.", icon: <Heart size={24} /> },
                            { title: "Anniversary Trips", desc: "Special dining experiences and romantic destinations make Disney ideal for celebrating milestones.", icon: <Calendar size={24} /> },
                            { title: "Date Night Experiences", desc: "Fine dining, live entertainment, adult lounges, sunset deck walks, spa treatments, and private beach experiences.", icon: <Gem size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ ADULTS-ONLY DINING: PALO & REMY ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Culinary Excellence
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Adults-Only Dining Experiences
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Disney offers several dining experiences specifically designed for adults, featuring world-class cuisine and elegant atmospheres.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {/* Palo Card */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <Wine size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Palo</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Northern Italian Cuisine</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Palo is one of Disney Cruise Line's most popular specialty restaurants. Many guests consider Palo one of the best dining experiences at sea.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Elegant atmosphere", "Ocean views", "Exceptional service", "Adult-only access"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Remy Card */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}>
                                <Sparkles size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Remy</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>French Fine Dining</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Available on select ships, Remy offers an upscale fine dining experience inspired by French cuisine. Remy is frequently compared to high-end restaurants found on luxury cruise lines.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Multi-course tasting menus", "Premium wine pairings", "Intimate atmosphere", "Luxury service"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ENTERTAINMENT VIDEO SECTION ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            A New Era of Magic
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Define Your Own Disney Adventure
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            Experience 100 years of classic Disney storytelling reimagined for the sea. From the heroism of Marvel to the wonder of Pixar, the Disney Adventure offers a sophisticated yet thrilling escape where "adventure" is defined by world-class entertainment and legendary service.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/543xUxaIGYY"
                            title="Disney Adventure Reveal"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Entertainment Types Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                        {[
                            { title: "Epic Marvel Heroism", desc: "Step into the MCU with high-tech attractions and character encounters.", icon: <Star size={22} /> },
                            { title: "Pixar & Beyond", desc: "Whimsical experiences that bring your favorite Toy Story and Coco moments to life.", icon: <Sparkles size={22} /> },
                            { title: "100 Years of Stories", desc: "A celebration of a century of magic, from Steamboat Willie to Moana.", icon: <Theater size={22} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.title}</h4>
                                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PRIVATE ISLAND PARALLAX STRIP ═══════════════ */}
            <section style={{ padding: '0', fontFamily: 'sans-serif', overflow: 'hidden' }}>
                <style>{`
          .dis-island-strip { display: grid; grid-template-columns: repeat(2, 1fr); min-height: 450px; }
          .dis-island-panel { position: relative; overflow: hidden; cursor: pointer; min-height: 450px; }
          .dis-island-panel img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease; filter: brightness(0.65); }
          .dis-island-panel:hover img { transform: scale(1.15); filter: brightness(0.85); }
          .dis-island-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 28, 46, 0.98) 0%, rgba(15, 28, 46, 0.75) 35%, rgba(15, 28, 46, 0.3) 55%, transparent 75%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px 30px; color: #ffffff; z-index: 2; }
          .dis-island-overlay h3 { font-size: 26px; font-weight: 800; margin: 0 0 10px; color: #ffffff; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); text-align: left !important;}
          .dis-island-overlay p { font-size: 15px; color: #cbd5e1; margin: 0; line-height: 1.6; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); }
          .dis-island-overlay .dis-island-tag { font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #60a5fa; margin-bottom: 10px; }
          @media (max-width: 768px) { .dis-island-strip { grid-template-columns: 1fr; } .dis-island-panel { min-height: 300px; } }
        `}</style>
                <div className="dis-island-strip">
                    <div className="dis-island-panel">
                        <img src={CastawayCay} alt="Castaway Cay" loading="lazy" />
                        <div className="dis-island-overlay">
                            <span className="dis-island-tag">Private Island</span>
                            <h3>Castaway Cay</h3>
                            <p>Adults-only beaches, bike trails, water activities, private cabanas, and relaxing tropical scenery — one of the biggest reasons adults book Disney cruises.</p>
                        </div>
                    </div>
                    <div className="dis-island-panel">
                        <img src={DisneyLookout} alt="Lookout Cay at Lighthouse Point" loading="lazy" />
                        <div className="dis-island-overlay">
                            <span className="dis-island-tag">New Destination</span>
                            <h3>Lookout Cay at Lighthouse Point</h3>
                            <p>Disney's newer island destination provides even more opportunities for adult travelers seeking relaxation, pristine beaches, and exclusive experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST DISNEY CRUISES FOR ADULTS - DASHBOARD ═══════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CRUISE PLANNING GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Best Disney Cruises for Adults</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
                            Different itineraries attract different types of adult travelers. Here's how the most popular Disney cruise regions compare.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["Caribbean", "Mediterranean", "Alaska", "Transatlantic"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`} onClick={() => setMediSelectedItinerary(idx)}>
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                {disneyCruiseImages[mediSelectedItinerary] && (
                                    <img src={disneyCruiseImages[mediSelectedItinerary]} alt="Disney Cruise Destination" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                )}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">ITINERARY SPOTLIGHT</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {["Caribbean Cruises", "Mediterranean Cruises", "Alaska Cruises", "Transatlantic Cruises"][mediSelectedItinerary]}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Perfect For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["Beach lovers", "Couples", "First-time cruisers", "Private island experiences"],
                                                ["History enthusiasts", "Culture seekers", "European destinations", "Culinary experiences"],
                                                ["Wildlife lovers", "Nature enthusiasts", "Scenic cruising", "Adventure travelers"],
                                                ["Relaxed pacing", "More sea days", "Experienced cruisers", "Adult-focused travel"]
                                            ][mediSelectedItinerary].map((feature, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                ["Castaway Cay", "Tropical Ports", "Beach Days"],
                                                ["European Cities", "Cultural Immersion", "Mediterranean Cuisine"],
                                                ["Glaciers", "Whale Watching", "Denali Excursions"],
                                                ["Crossing Experience", "Onboard Enrichment", "Multiple Destinations"]
                                            ][mediSelectedItinerary].map((tag, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{tag}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '15px', color: '#64748b', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                                        At Trips & Ships Luxury Travel, we help you select the Disney cruise itinerary that best matches your travel style, interests, and ideal pace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DISNEY VS OTHER CRUISE LINES COMPARISON ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Honest Comparison
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Disney Cruise vs Other Cruise Lines for Adults
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Comparison Cards Side by Side */}
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {/* Disney Cruise Line Card */}
                        <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Ship size={24} style={{ color: '#ffffff' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Cruise Line</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { label: "Atmosphere", value: "Family-focused with strong adult spaces" },
                                    { label: "Service", value: "Exceptional, personalized attention" },
                                    { label: "Entertainment", value: "Disney Broadway-caliber productions" },
                                    { label: "Adult Venues", value: "Dedicated adult-only areas available" },
                                    { label: "Pricing", value: "Premium positioning" },
                                    { label: "Guest Loyalty", value: "Among the strongest in the industry" }
                                ].map((row, i) => (
                                    <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{row.label}</span>
                                        <span style={{ fontSize: '16px', color: '#e2e8f0', fontWeight: '500', lineHeight: '1.4' }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Traditional Cruise Lines Card */}
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Anchor size={24} style={{ color: '#94a3b8' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Traditional Cruise Lines</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { label: "Atmosphere", value: "Adult-focused atmosphere" },
                                    { label: "Service", value: "Varies significantly by brand" },
                                    { label: "Entertainment", value: "Traditional cruise entertainment" },
                                    { label: "Adult Venues", value: "More adult venues overall" },
                                    { label: "Pricing", value: "Wider pricing range available" },
                                    { label: "Guest Loyalty", value: "Depends on brand and program" }
                                ].map((row, i) => (
                                    <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '4px' }}>{row.label}</span>
                                        <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500', lineHeight: '1.4' }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Comparison Insight */}
                    <div style={{ marginTop: '40px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.7', margin: 0 }}>
                            <strong style={{ color: '#ffffff' }}>Key Takeaway:</strong> For travelers seeking casinos and extensive nightlife, other cruise lines may offer more options. For guests who value service, entertainment, and Disney storytelling, Disney often stands out.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHAT ADULTS LOVE / DRAWBACKS SPLIT ═══════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">What Adults Love Most & Potential Drawbacks</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-audience-split-layout">
                        {/* LEFT: What Adults Love */}
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Consistently Praised By Adults:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Outstanding, personalized service", i: <Award size={20} /> },
                                    { t: "Consistently clean, well-maintained ships", i: <Sparkles size={20} /> },
                                    { t: "Quality entertainment among the best at sea", i: <Theater size={20} /> },
                                    { t: "Relaxed atmosphere — rarely feels chaotic", i: <Sun size={20} /> },
                                    { t: "Attention to detail and storytelling", i: <Star size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.i}</div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: Potential Drawbacks */}
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">May Not Be Ideal If You Prioritize:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Casinos", i: <CircleDollarSign size={20} /> },
                                    { t: "Large nightlife scenes", i: <Moon size={20} /> },
                                    { t: "Adults-only ships", i: <Users size={20} /> },
                                    { t: "Budget-friendly pricing", i: <CircleDollarSign size={20} /> },
                                    { t: "Party-focused environments", i: <Music size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Minus size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '20px', borderLeft: '5px solid #94a3b8', textAlign: 'left' }}>
                                <p style={{ fontSize: '17px', color: '#0f1c2e', fontWeight: '700', margin: 0, fontStyle: 'italic' }}>
                                    "Disney generally focuses on immersive experiences rather than nightlife and gambling."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO SHOULD CONSIDER ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                        Is This You?
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                        Who Should Consider a Disney Cruise Without Kids?
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {[
                            "Disney fans",
                            "Couples seeking a romantic getaway",
                            "Honeymooners",
                            "Empty nesters",
                            "Luxury travelers who appreciate service",
                            "Adults who enjoy high-quality entertainment",
                            "Multi-generational travelers"
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '14px 24px', backgroundColor: '#f8fafc',
                                borderRadius: '60px', border: '1px solid #e2e8f0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ COMMON MISCONCEPTIONS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>
                            Setting The Record Straight
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                            Common Misconceptions About <br /> Disney Cruises for Adults
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 14px' : '50px 45px', boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)', border: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: '19px', color: '#0f1c2e', fontWeight: '600', marginBottom: '40px', textAlign: 'center' }}>
                            Many adults dismiss Disney Cruise Line based on misconceptions that don't reflect the actual experience.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '20px 40px', marginBottom: '40px' }}>
                            {[
                                "Disney cruises are only for families with kids",
                                "You'll be surrounded by children everywhere",
                                "Disney cruises don't have adult entertainment",
                                "The food is just kids' menu options",
                                "Disney isn't romantic enough for couples",
                                "You need to love Disney to enjoy the cruise",
                                "There are no quiet spaces on board",
                                "Disney ships feel chaotic and overwhelming"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px 0', borderBottom: '1px solid #f1f5f9' }}>
                                    <div style={{ marginTop: '2px' }}><X size={20} style={{ color: '#ef4444' }} /></div>
                                    <span style={{ fontSize: '17px', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '14px' : '20px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', textAlign: 'center', boxShadow: '0 15px 30px rgba(15, 28, 46, 0.15)', borderLeft: '6px solid #3b82f6' }}>
                            <p style={{ fontSize: '18px', color: '#ffffff', margin: 0, fontWeight: '700', letterSpacing: '0.01em' }}>
                                The reality: Disney Cruise Line offers sophisticated adult experiences that consistently surprise first-time adult guests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SECOND VIDEO: DESTINATION ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            Blockbuster Summer
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            From the Big Screen to the Big Blue
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            Whether you're traveling to a galaxy far, far away or sailing across the ocean with Moana, Disney Cruise Line brings the blockbuster magic of the summer to the high seas. Discover how your favorite stories from Star Wars, Toy Story, and Marvel become immersive shipboard realities.
                        </p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(15, 28, 46, 0.15)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/fkp938cwBNk"
                            title="Disney Blockbuster Summer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ANGELA HUGHES AUTHORITY SECTION ═══════════════ */}
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
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                            Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
                            When it comes to planning a Disney cruise for adults, having an expert who understands both the cruise line and the adult travel perspective makes all the difference.
                        </p>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src={profileAH} alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
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

                    <div style={{ marginTop: window.innerWidth <= 360 ? '30px' : '50px', padding: window.innerWidth <= 360 ? '20px 14px' : '35px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                            "Angela and her team specialize in helping adults discover a completely different side of Disney Cruise Line — one that feels nothing like a typical family vacation."
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Disney Cruise for Adults:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {disneyFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL VERDICT + CTA ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Final Verdict
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Is Disney Cruise Worth It for Adults Without Kids?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center', marginBottom: '20px' }}>
                        <p style={{ margin: '0 0 20px' }}>
                            The answer is <strong style={{ color: '#274472' }}>yes</strong> — especially for travelers who value exceptional service, immersive entertainment, premium dining, and a polished onboard experience.
                        </p>
                        <p style={{ margin: '0 0 20px' }}>
                            While Disney Cruise Line is family-friendly, it offers enough adult-exclusive spaces, romantic experiences, and sophisticated amenities to make it an excellent choice for couples, honeymooners, empty nesters, and Disney enthusiasts.
                        </p>
                        <p style={{ margin: '0' }}>
                            For many adults, a Disney cruise delivers something unique: <strong style={{ color: '#274472' }}>the perfect combination of luxury, nostalgia, relaxation, and world-class entertainment.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section className="medi-cta-main-section" id="disney-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready To Plan Your Adults-Only <br /> Disney Cruise?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing the right Disney ship, itinerary, and dining experiences makes all the difference for adult travelers. <strong>Let an expert guide you.</strong>
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel helps adults plan Disney cruises that feel nothing like a typical family vacation — with personalized recommendations for adult-only spaces, dining, and experiences.
                        </p>

                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                                Whether you are planning:
                            </span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {[
                                    "A romantic Disney getaway",
                                    "A honeymoon or anniversary cruise",
                                    "An adults-only Caribbean escape",
                                    "A Mediterranean Disney voyage",
                                    "A first-time Disney cruise experience"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips & Ships Luxury Travel today to start planning your adults-only Disney cruise experience.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Disney Cruise Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisneyCruiseAdultsWithoutKids