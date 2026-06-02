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
    Camera,
    Snowflake,
    Sun,
    Check,
    Waves
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

import profileAH from '../../assets/HXExpeditionsGalápagosCruises/Profile_AH.jpg'
import hero1 from '../../assets/HXExpeditionsGalápagosCruises/Hero_1.jpg'
import hero2 from '../../assets/HXExpeditionsGalápagosCruises/Hero_2.jpg'
import hero3 from '../../assets/HXExpeditionsGalápagosCruises/Hero_3.jpg'
import MS_Santa from '../../assets/HXExpeditionsGalápagosCruises/MS_Santa_Cruz_II.jpg'
import Image1 from '../../assets/HXExpeditionsGalápagosCruises/Image_1.jpg'
import Image2 from '../../assets/HXExpeditionsGalápagosCruises/Image_2.jpg'
import Image3 from '../../assets/HXExpeditionsGalápagosCruises/Image_3.jpg'
import Image4 from '../../assets/HXExpeditionsGalápagosCruises/Image_4.jpg'
import Image5 from '../../assets/HXExpeditionsGalápagosCruises/Image_5.jpg'
import Image6 from '../../assets/HXExpeditionsGalápagosCruises/Image_6.jpg'

function HXExpeditionsGalapagosCruises() {
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

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    const hxItineraryImages = []

    const MS_Santa_Cruz_II_Placeholder = ""; // This will show the dark blue background until you add an image

    const hxArcticShips = [
        {
            name: "MS Fram",
            title: "MS Fram", // For the dashboard
            icon: <Anchor size={26} />,
            desc: "A classic expedition ship designed specifically for polar exploration with a strong focus on comfort and expedition depth, honoring the heritage of original Norwegian explorers.",
            description: "A classic expedition ship designed specifically for polar exploration with a strong focus on comfort and expedition depth.", // For the dashboard
            best: ["Authentic expedition experiences", "Experienced travelers", "Arctic focused itineraries"],
            bestFor: ["Authentic expedition experiences", "Experienced travelers", "Arctic focused itineraries"], // For the dashboard
            highlights: ["Classic Heritage", "Polar Specialist", "Expedition Depth"]
        },
        {
            name: "MS Spitsbergen",
            title: "MS Spitsbergen",
            icon: <Compass size={26} />,
            desc: "Named after the largest island in Svalbard, this smaller expedition vessel delivers intimate Arctic exploration with exceptional maneuverability in narrow fjords.",
            description: "Named after the largest island in Svalbard, this smaller expedition ship delivers intimate Arctic exploration.",
            best: ["Small ship travelers", "Scenic fjord exploration", "Immersive wildlife viewing"],
            bestFor: ["Small ship travelers", "Scenic fjord exploration", "Immersive wildlife viewing"],
            highlights: ["High Maneuverability", "Boutique Atmosphere", "Intimate Access"]
        },
        {
            name: "MS Roald Amundsen",
            title: "MS Roald Amundsen",
            icon: <FlaskConical size={26} />,
            desc: "A hybrid powered modern expedition vessel combining sustainability with Scandinavian comfort, featuring advanced technology and a strong science focus.",
            description: "A hybrid powered modern expedition vessel combining sustainability with Scandinavian comfort.",
            best: ["Modern luxury expedition travelers", "Eco conscious travelers", "First time expedition guests"],
            bestFor: ["Modern luxury expedition travelers", "Eco conscious travelers", "First time expedition guests"],
            highlights: ["Hybrid Technology", "Scandinavian Design", "Eco-Friendly"]
        }
    ];

    const galapagosFaqs = [
        {
            question: "Is the Galápagos worth visiting?",
            answer: "Absolutely. The Galápagos is widely considered one of the world’s greatest wildlife destinations, offering a unique opportunity to witness evolution in real-time."
        },
        {
            question: "What wildlife can you see in the Galápagos?",
            answer: "Travelers commonly see giant tortoises, sea lions, marine iguanas, penguins, blue-footed boobies, and a vast array of unique bird and marine life."
        },
        {
            question: "What is MS Santa Cruz II like?",
            answer: "MS Santa Cruz II is a comfortable small expedition ship specifically designed for Galápagos exploration, balancing modern amenities with a focus on environmental responsibility."
        },
        {
            question: "What is the best month for Galápagos cruises?",
            answer: "The Galápagos is a year-round destination. The warm season (December–May) offers calmer seas, while the cool season (June–November) brings more active marine life."
        },
        {
            question: "Are Galápagos cruises good for first timers?",
            answer: "Yes. Because the wildlife is so accessible and the waters are generally protected, it is an excellent entry point for travelers new to expedition-style travel."
        },
        {
            question: "Are HX Galápagos cruises luxury cruises?",
            answer: "HX focuses on 'Expedition Comfort.' The ships are modern and upscale, but the priority is immersive discovery and scientific education rather than traditional white-glove luxury."
        },
        {
            question: "What should I pack for the Galápagos?",
            answer: "Lightweight, breathable clothing, high-SPF sun protection, swimwear, sturdy walking shoes, and a light jacket for cooler evenings are essential."
        },
        {
            question: "Do Galápagos cruises include snorkeling?",
            answer: "Yes. Most HX itineraries include multiple snorkeling opportunities to see sea turtles, sea lions, and tropical fish."
        },
        {
            question: "Can you see sea lions in the Galápagos?",
            answer: "Yes. Sea lion encounters are one of the most frequent and playful highlights of any Galápagos expedition."
        },
        {
            question: "Are Galápagos cruises physically demanding?",
            answer: "Most travelers need only moderate mobility for walking excursions on uneven terrain and boarding Zodiacs from the water."
        },
        {
            question: "Is the Galápagos safe for travelers?",
            answer: "Yes. The Galápagos is a highly regulated National Park and is considered very safe for international tourism."
        },
        {
            question: "How long should a Galápagos cruise be?",
            answer: "Most travelers find that 5 to 10 days provides the ideal balance of island variety and relaxation."
        },
        {
            question: "Can you see whales in the Galápagos?",
            answer: "Whale sightings are possible, especially during the cooler months (June–November) when nutrient-rich currents attract marine mammals."
        },
        {
            question: "Why are small ships better in the Galápagos?",
            answer: "Small ships access more remote landing areas, have less environmental impact, and provide a more intimate, educational atmosphere."
        },
        {
            question: "Why should I use a travel advisor for Galápagos cruises?",
            answer: "Expert guidance from Trips & Ships Luxury Travel helps you navigate complex National Park regulations and choose the perfect ship and season for your interests."
        }
    ];

    const hxSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/PNG%20image.png"
                },
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ]
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "image": "https://www.tripsandships.com/hx-expeditions-svalbard-cruise.jpg",
                "description": "Expert HX Expedition Svalbard cruise specialists providing personalized planning for Arctic, polar bear and midnight sun voyages."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                },
                "description": "Angela Hughes is one of the luxury travel industry's most respected travel advisors and educators."
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises#webpage",
                "url": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises",
                "name": "HX Expeditions Svalbard Cruises",
                "description": "Explore HX Expeditions Svalbard cruises with expert guidance from Trips & Ships Luxury Travel. Discover polar bears, Arctic wildlife, midnight sun voyages and luxury small ship exploration."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises#breadcrumb",
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
                        "name": "HX Expeditions Cruises",
                        "item": "https://www.tripsandships.com/hx-expeditions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Svalbard Cruises",
                        "item": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": galapagosFaqs.map(faq => ({
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
                <title>HX Expeditions Svalbard Cruises | Polar Bears, Arctic Wildlife & Small Ship Exploration</title>
                <meta name="title" content="HX Expeditions Svalbard Cruises | Luxury Arctic Expedition Experts" />
                <meta name="description" content="Explore HX Expeditions Svalbard cruises with expert guidance from Trips & Ships Luxury Travel. Discover polar bears, Arctic wildlife, midnight sun voyages and luxury small ship exploration." />
                <meta name="keywords" content="HX Expeditions Svalbard Cruises, Svalbard expedition cruises, Arctic expedition cruises, Polar bear cruises, Small ship Arctic cruises" />
                <script type="application/ld+json">{JSON.stringify(hxSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
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
                        <Microscope size={16} />
                        <span>Darwin’s Living Laboratory & Small Ship Discovery</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions Galápagos Cruises
                    </h1>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION - GALÁPAGOS EXPEDITION FULL CONTENT */}
            <section className="medi-intro-section medi-premium-intro-section">
                {/* STYLE BLOCK: Handles the hover interaction for icons */}
                <style>{`
        .medi-immersion-card-item:hover .medi-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
        .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
            stroke: #ffffff !important;
        }
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
                        {/* Left: Editorial intro */}
                        <div className="medi-premium-editorial-block" style={{
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            {/* EYEBROW BADGE */}
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: '700',
                                color: '#274472',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                DARWIN'S LIVING LABORATORY
                            </span>

                            {/* HEADING */}
                            <h2 className="medi-premium-heading" style={{
                                color: '#274472',
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2',
                                margin: '0 0 20px 0'
                            }}>
                                Experience One Of The World’s Greatest Wildlife Destinations
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px',
                                height: '3px',
                                background: `#3b82f6`,
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                The Galápagos Islands are one of the most remarkable wildlife destinations on Earth. Located off the coast of Ecuador, this protected archipelago offers travelers the opportunity to encounter giant tortoises, blue footed boobies, marine iguanas, sea lions and countless other species found nowhere else in the world.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                For travelers seeking immersive nature focused exploration, HX Expeditions Galápagos cruises deliver an experience far beyond traditional cruising. These journeys combine small ship exploration, expert naturalist guidance and extraordinary wildlife encounters in one of the planet’s most protected ecosystems.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%', marginBottom: '24px' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    Immersion Through Discovery:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px',
                                    textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Expert Naturalists", i: <GraduationCap size={20} /> },
                                        { t: "Wildlife Immersion", i: <Microscope size={20} /> },
                                        { t: "Conservation Focus", i: <Heart size={20} /> },
                                        { t: "Small Ship Access", i: <Ship size={20} /> }
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

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                                Unlike large cruise vacations, Galápagos expedition cruises are built around destination immersion, conservation and up close exploration.
                            </p>
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
                                        <span className="medi-expert-card-subtitle">GALÁPAGOS AUTHORITY</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    At Trips & Ships Luxury Travel, we help travelers choose the right Galápagos itinerary, season and cabin experience based on wildlife priorities, activity levels and comfort expectations.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide trusted luxury expedition expertise travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY THE GALÁPAGOS IS DIFFERENT FROM ANYWHERE ELSE */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Galápagos Destination Profile
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Why The Galápagos Is Different <br /> From Anywhere Else
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Rare Combination Grid */}
                    <div style={{ marginBottom: '60px' }}>
                        <p style={{
                            fontSize: '18px',
                            color: '#1e293b',
                            fontWeight: '600',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>
                            The Galápagos Islands inspired Charles Darwin’s theory of evolution and remain one of the world’s most biologically unique environments. Travelers regularly encounter:
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px'
                        }}>
                            {[
                                { t: "Giant tortoises", i: <Clock size={20} /> },
                                { t: "Blue footed boobies", i: <Camera size={20} /> },
                                { t: "Marine iguanas", i: <Sun size={20} /> },
                                { t: "Sea lions", i: <Heart size={20} /> },
                                { t: "Frigatebirds", i: <Compass size={20} /> },
                                { t: "Penguins", i: <Snowflake size={20} /> },
                                { t: "Hammerhead sharks", i: <Gem size={20} /> },
                                { t: "Dolphins", i: <Music size={20} /> },
                                { t: "Sea turtles", i: <Waves size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    padding: '20px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '15px',
                                    border: '1px solid #e2e8f0',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{ color: '#3b82f6', display: 'flex', flexShrink: 0 }}>{item.i}</div>
                                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#334155' }}>{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison / Advantage Block */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}>
                        {/* The Remote Truth */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#0f1c2e',
                            borderRadius: '24px',
                            padding: '40px',
                            color: '#ffffff',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.1)'
                        }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                Accessibility of the Wildlife
                            </h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1', margin: 0 }}>
                                What makes the Galápagos so extraordinary is the accessibility of the wildlife.
                                Wildlife in the Galápagos often shows little fear of humans, creating unusually
                                close and memorable encounters. The destinations themselves become the experience.
                            </p>
                        </div>

                        {/* The Pure Experience */}
                        <div style={{
                            flex: '1 1 300px',
                            backgroundColor: '#f1f5f9',
                            borderRadius: '24px',
                            padding: '40px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <p style={{
                                fontSize: '19px',
                                color: '#274472',
                                fontWeight: '700',
                                lineHeight: '1.5',
                                margin: 0,
                                fontStyle: 'italic',
                                borderLeft: '4px solid #3b82f6',
                                paddingLeft: '20px'
                            }}>
                                "For many travelers, the Galápagos becomes one of the most emotionally impactful wildlife experiences in the world."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GALÁPAGOS: A LIVING VISUAL NARRATIVE ── */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) 20px',
                backgroundColor: '#0f1c2e',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
          .hx-bento-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 240px;
            gap: 15px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .hx-bento-item {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: #1e293b;
          }
          .hx-bento-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .hx-bento-item:hover .hx-bento-img {
            transform: scale(1.1);
          }
          .hx-bento-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(15, 28, 46, 0.95) 0%, rgba(15, 28, 46, 0.4) 40%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 30px;
            color: #ffffff;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          .hx-bento-item:hover .hx-bento-overlay {
            opacity: 1;
          }
          .hx-overlay-title {
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #3b82f6;
            margin-bottom: 5px;
          }
          .hx-overlay-subtitle {
            font-size: 13px;
            color: #cbd5e1;
            line-height: 1.4;
            margin: 0;
          }

          @media (max-width: 1024px) {
            .hx-bento-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
            .item-large { grid-column: span 2; grid-row: span 2; }
            .item-wide { grid-column: span 2; grid-row: span 1; }
            .item-standard { grid-column: span 1; grid-row: span 1; }
          }

          @media (max-width: 600px) {
            .hx-bento-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; }
            .hx-bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            A Living Gallery
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#ffffff',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Galápagos: Discovery in Darwin’s Footsteps
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div className="hx-bento-grid">
                        {/* Image 1: Hidden Coves (Large 2x2) */}
                        <div className="hx-bento-item item-large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                            <img src={Image6} alt="Hidden Coves" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Hidden Coves</span>
                                <p className="hx-overlay-subtitle">Navigating dramatic volcanic cliffs by Panga for intimate coastal access.</p>
                            </div>
                        </div>

                        {/* Image 2: Avian Rituals (Top Right) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image5} alt="Avian Rituals" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Avian Rituals</span>
                                <p className="hx-overlay-subtitle">Witnessing the unique and fearless behaviors of iconic local species.</p>
                            </div>
                        </div>

                        {/* Image 3: Through the Lens (Middle Right) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image2} alt="Through the Lens" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Through the Lens</span>
                                <p className="hx-overlay-subtitle">Immersive wildlife photography in a landscape where nature knows no fear.</p>
                            </div>
                        </div>

                        {/* Image 4: Island Footsteps (Bottom Left under large) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image1} alt="Island Footsteps" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Island Footsteps</span>
                                <p className="hx-overlay-subtitle">Guided discovery across the diverse ecosystems of a living laboratory.</p>
                            </div>
                        </div>

                        {/* Image 5: The Expedition Flagship (Bottom Middle) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image4} alt="The Expedition Flagship" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">The Expedition Flagship</span>
                                <p className="hx-overlay-subtitle">Advanced small-ship design purpose-built for the Galápagos wilderness.</p>
                            </div>
                        </div>

                        {/* Image 6: Twilight Sophistication (Wide Bottom) */}
                        <div className="hx-bento-item item-wide" style={{ gridColumn: 'span 4', gridRow: 'span 1' }}>
                            <img src={Image3} alt="Twilight Sophistication" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Twilight Sophistication</span>
                                <p className="hx-overlay-subtitle">Reflections and curated refreshments under the golden Equatorial sun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE HX EXPEDITIONS FOR GALÁPAGOS SECTION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            The HX Advantage
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Why Choose HX Expeditions For Galápagos Cruises?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '850px',
                            margin: '30px auto 0',
                            lineHeight: '1.7',
                            fontWeight: '500'
                        }}>
                            HX Expeditions combines expedition expertise with environmentally conscious small ship exploration in one of the world's most delicate ecosystems.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '40px',
                        marginBottom: '50px'
                    }}>

                        {/* Pillar 1: The Core Experience */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '25px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Microscope size={24} style={{ color: '#3b82f6' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Wildlife & Immersion</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Wildlife immersion",
                                    "Conservation education",
                                    "Guided island landings",
                                    "Expert naturalist lectures",
                                    "Zodiac exploration",
                                    "Snorkeling experiences",
                                    "Small group excursions"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pillar 2: Responsible Tourism */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '25px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#0f1c2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Globe size={24} style={{ color: '#ffffff' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Regulated Discovery</h3>
                            </div>

                            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>
                                The Galápagos National Park strictly limits visitor access and regulates tourism to ensure the protection of the archipelago:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Regulated visitor access",
                                    "Sustainable tourism practices",
                                    "Strict conservation protocols",
                                    "Environmental impact monitoring"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#475569', fontWeight: '600' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #0f1c2e' }}>
                                <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '600', margin: 0, lineHeight: '1.5' }}>
                                    "Small ship expedition travel is one of the best ways to responsibly experience the islands."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Note */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '28px 14px' : '40px 50px',
                        color: '#ffffff',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{ fontSize: '19px', color: '#ffffff', lineHeight: '1.7', margin: 0, fontWeight: '700', fontStyle: 'italic' }}>
                            "HX itineraries are designed to maximize wildlife encounters while supporting sustainable tourism practices."
                        </p>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 01: THE GALÁPAGOS IN MOTION ── */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) 20px',
                backgroundColor: '#0f1c2e', // Matching brand navy
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Evolution in Motion
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#ffffff',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            A Cinematic Lens on Darwin’s Laboratory
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            color: '#cbd5e1',
                            fontSize: '18px',
                            marginTop: '25px',
                            lineHeight: '1.7',
                            maxWidth: '850px',
                            margin: '25px auto 0'
                        }}>
                            Experiencing the Galápagos is a journey into the history of life itself. Watch how HX Expeditions navigates this protected archipelago, combining low-impact small ship access with the deep expertise of local naturalists. See the moments that define a scientific adventure in the heart of the Pacific.
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div style={{
                        position: 'relative',
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
                            src="https://www.youtube.com/embed/r2E17sd4We8" // Replace with a Galápagos ship/destination video
                            title="HX Expeditions Galápagos Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* WILDLIFE EXPERIENCES IN THE GALÁPAGOS - 4-4 GRID DESIGN */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Wildlife Destinations
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Wildlife Experiences In The Galápagos
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '800px',
                            margin: '30px auto 0',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            Wildlife is the defining reason travelers visit the Galápagos Islands.
                        </p>
                    </div>

                    {/* 4-4 BALANCED GRID */}
                    <div style={{ marginBottom: '60px' }}>
                        <p style={{
                            fontSize: '16px',
                            color: '#64748b',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            letterSpacing: '1px',
                            marginBottom: '40px'
                        }}>
                            Depending on the itinerary and season, guests may experience:
                        </p>

                        <div style={{
                            display: 'grid',
                            // Desktop: 4 columns | Tablet: 2 columns | Mobile: 1 column
                            gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(4, 1fr)' : window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr',
                            gap: '25px'
                        }}>
                            {[
                                { t: "Snorkeling with sea lions", i: <Waves size={22} /> },
                                { t: "Giant tortoise encounters", i: <Clock size={22} /> },
                                { t: "Penguin sightings", i: <Snowflake size={22} /> },
                                { t: "Birdwatching excursions", i: <Compass size={22} /> },
                                { t: "Marine iguana colonies", i: <Sun size={22} /> },
                                { t: "Sea turtle sightings", i: <Anchor size={22} /> },
                                { t: "Dolphin encounters", i: <Music size={22} /> },
                                { t: "Reef shark sightings", i: <Gem size={22} /> }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '35px 25px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '24px',
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                                }}
                                    className="hx-wildlife-card"
                                >
                                    <div style={{
                                        color: '#3b82f6',
                                        marginBottom: '20px',
                                        backgroundColor: '#ffffff',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 20px rgba(59, 130, 246, 0.1)'
                                    }}>
                                        {item.i}
                                    </div>
                                    <span style={{
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        color: '#0f1c2e',
                                        lineHeight: '1.4',
                                        maxWidth: '180px'
                                    }}>
                                        {item.t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlight Photography Box */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '30px 20px' : '60px 40px',
                        color: '#ffffff',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(15, 28, 46, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <Camera size={32} style={{ color: '#3b82f6' }} />
                            </div>
                            <p style={{
                                fontSize: 'clamp(18px, 3vw, 24px)',
                                color: '#ffffff',
                                fontWeight: '600',
                                lineHeight: '1.5',
                                margin: '0 auto 20px',
                                maxWidth: '900px',
                                fontFamily: 'serif',
                                fontStyle: 'italic'
                            }}>
                                "The islands are often described as one of the best wildlife photography destinations in the world."
                            </p>
                            <p style={{
                                fontSize: '16px',
                                color: '#cbd5e1',
                                lineHeight: '1.7',
                                margin: '0 auto',
                                maxWidth: '850px'
                            }}>
                                Because the Galápagos ecosystem is highly protected, expedition experiences feel intimate, authentic and educational rather than commercialized.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HX GALÁPAGOS SHIP SPOTLIGHT - MS SANTA CRUZ II */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">

                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">
                            THE GALÁPAGOS FLEET
                        </span>
                        <h2 className="medi-itinerary-showcase-heading">
                            HX Expedition Ships In The Galápagos
                        </h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard" style={{ display: 'block' }}>
                        <div className="medi-itinerary-showcase-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                            {/* SHIP IMAGE WRAPPER */}
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                {/* Replace with your Santa Cruz II image asset when ready */}
                                <img
                                    src={MS_Santa} // Ensure you define/import this or use a placeholder
                                    alt="MS Santa Cruz II"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">
                                    FEATURED EXPEDITION VESSEL
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <Ship size={28} style={{ color: '#3b82f6' }} />
                                    <h3 className="medi-itinerary-showcase-title" style={{ margin: 0 }}>
                                        MS Santa Cruz II
                                    </h3>
                                </div>

                                <p style={{ color: '#475569', fontSize: '16px', marginBottom: '25px', lineHeight: '1.7' }}>
                                    HX Expeditions operates the MS Santa Cruz II in the Galápagos Islands, a purpose-built small expedition ship specifically designed for Galápagos exploration.
                                </p>

                                <div className="medi-itinerary-details-grid">
                                    {/* LEFT COLUMN: FEATURES */}
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">
                                            The MS Santa Cruz II offers:
                                        </h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                "Small ship access",
                                                "Comfortable expedition accommodations",
                                                "Observation decks",
                                                "Naturalist led excursions",
                                                "Zodiac operations",
                                                "Educational programming",
                                                "Sustainable expedition practices"
                                            ].map((item, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* RIGHT COLUMN: AUDIENCE FIT */}
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">
                                            Best For:
                                        </h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                "Wildlife lovers",
                                                "First time expedition travelers",
                                                "Nature photographers",
                                                "Small ship cruise enthusiasts",
                                                "Travelers seeking educational exploration"
                                            ].map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <Sparkles size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* ADVANTAGE CALLOUT */}
                                <div style={{
                                    marginTop: '30px',
                                    padding: '20px 25px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '15px',
                                    borderLeft: '4px solid #0f1c2e'
                                }}>
                                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                        <strong>The Small Ship Advantage:</strong> Unlike large ocean cruise ships, the smaller size of MS Santa Cruz II allows travelers to access more remote landing areas and create a more personal onboard atmosphere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST TIME TO CRUISE THE GALÁPAGOS - SEASONAL ANALYSIS */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Expedition Planning
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Best Time To Cruise The Galápagos
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '800px',
                            margin: '30px auto 0',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            The Galápagos is a year-round destination, but conditions and wildlife activity vary throughout the year.
                        </p>
                    </div>

                    {/* Seasonal Grid - Adjusted for 2 columns */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '30px',
                        marginBottom: '50px',
                        maxWidth: '900px',
                        margin: '0 auto 50px auto'
                    }}>

                        {/* December To May */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Sun size={22} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>December To May</h3>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>The Warm Season:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {[
                                    "Warmer weather",
                                    "Calmer seas",
                                    "Excellent snorkeling visibility",
                                    "Lush green landscapes"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* June To November */}
                        <div style={{
                            backgroundColor: '#0f1c2e',
                            borderRadius: '24px',
                            padding: '40px',
                            color: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.2)',
                            zIndex: 1
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Waves size={22} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0 }}>June To November</h3>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>The Cool Season:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {[
                                    "Active marine wildlife",
                                    "Cooler, comfortable temperatures",
                                    "Peak whale sighting opportunities",
                                    "Stronger nutrient-rich waters"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#cbd5e1', fontWeight: '500' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Expert Closing Statement */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        padding: '30px',
                        textAlign: 'center',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}>
                        <p style={{ fontSize: '17px', color: '#274472', fontWeight: '700', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                            "Wildlife experiences change seasonally, which is why itinerary planning matters significantly."
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT GALÁPAGOS EXPLORATION ACTUALLY FEELS LIKE */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">What Small Ship Galápagos Exploration Feels Like</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '18px', color: '#475569', maxWidth: '800px', margin: '20px auto 0', lineHeight: '1.6' }}>
                            Galápagos expedition cruising feels very different from traditional cruise vacations.
                        </p>
                    </div>

                    <div className="medi-audience-split-layout">
                        {/* LEFT COLUMN: EXPECTATIONS */}
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Travelers should expect:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Guided wildlife walks", i: <MapPin size={20} /> },
                                    { t: "Zodiac excursions", i: <Ship size={20} /> },
                                    { t: "Snorkeling opportunities", i: <Waves size={20} /> },
                                    { t: "Educational lectures", i: <GraduationCap size={20} /> },
                                    { t: "Small group experiences", i: <Users size={20} /> },
                                    { t: "Nature focused itineraries", i: <Globe size={20} /> },
                                    { t: "Flexible wildlife exploration", i: <Compass size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">
                                            {item.i}
                                        </div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT COLUMN: NOT EXPECTED */}
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Travelers should not expect:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Casinos", i: <CircleDollarSign size={20} /> },
                                    { t: "Large scale entertainment", i: <Music size={20} /> },
                                    { t: "Formal cruise nightlife", i: <Crown size={20} /> },
                                    { t: "Massive cruise ship crowds", i: <Users size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Minus size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                marginTop: '40px',
                                padding: '25px',
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                borderLeft: '5px solid #3b82f6',
                                textAlign: 'left',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                            }}>
                                <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '800', margin: 0, fontStyle: 'italic' }}>
                                    "The wildlife and destination become the experience."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMON GALÁPAGOS CRUISE MISTAKES SECTION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Strategic Planning
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Common Galápagos Cruise Mistakes
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '28px 14px' : '50px 45px',
                        boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)',
                        border: '1px solid #e2e8f0'
                    }}>

                        <p style={{
                            fontSize: '19px',
                            color: '#0f1c2e',
                            fontWeight: '600',
                            marginBottom: '40px',
                            textAlign: 'center'
                        }}>
                            Many travelers make avoidable mistakes when planning Galápagos cruises including:
                        </p>

                        {/* Mistakes List Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                            gap: '20px 40px',
                            marginBottom: '40px'
                        }}>
                            {[
                                "Choosing the wrong itinerary length",
                                "Underestimating activity levels",
                                "Booking based only on price",
                                "Not understanding ship differences",
                                "Waiting too long to reserve cabins",
                                "Choosing large ship experiences over true expedition ships"
                            ].map((mistake, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '15px 0',
                                    borderBottom: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ marginTop: '2px' }}>
                                        <CheckCircle size={20} style={{ color: '#3b82f6' }} />
                                    </div>
                                    <span style={{
                                        fontSize: '17px',
                                        color: '#475569',
                                        fontWeight: '500',
                                        lineHeight: '1.4'
                                    }}>{mistake}</span>
                                </div>
                            ))}
                        </div>

                        {/* Authority Footer Box */}
                        <div style={{
                            backgroundColor: '#0f1c2e',
                            borderRadius: window.innerWidth <= 360 ? '14px' : '20px',
                            padding: window.innerWidth <= 360 ? '20px 14px' : '30px',
                            textAlign: 'center',
                            boxShadow: '0 15px 30px rgba(15, 28, 46, 0.15)',
                            borderLeft: '6px solid #3b82f6'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                color: '#ffffff',
                                margin: 0,
                                fontWeight: '700',
                                letterSpacing: '0.01em'
                            }}>
                                Expert guidance can dramatically improve the Galápagos experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST FOR / NOT BEST FOR SECTION - GALÁPAGOS BRAND THEME */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Traveler Fit
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Is A Galápagos Expedition Right For You?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '30px'
                    }}>

                        {/* Best For Card - Azure Blue Accents */}
                        <div style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '28px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    backgroundColor: '#eff6ff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle size={22} style={{ color: '#3b82f6' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Best For</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Wildlife lovers",
                                    "Nature photographers",
                                    "Adventure minded travelers",
                                    "Educational travel enthusiasts",
                                    "Small ship cruise travelers"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        color: '#334155',
                                        fontWeight: '600'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Best For Card - Neutral Slate Accents */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '28px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.04)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Minus size={22} style={{ color: '#64748b' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Not Best For</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Travelers seeking traditional cruise entertainment",
                                    "Guests wanting large ship nightlife",
                                    "Travelers looking for resort style vacations"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        color: '#475569',
                                        fontWeight: '600'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#94a3b8', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Neutral Advisory Callout */}
                            <div style={{
                                marginTop: '28px',
                                padding: '20px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '14px',
                                borderLeft: '4px solid #0f1c2e'
                            }}>
                                <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '700', margin: 0, lineHeight: '1.6' }}>
                                    Galápagos cruising is built around nature immersion. We ensure your expectations align with the rules of the National Park.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 02: GALÁPAGOS WILDLIFE & EMOTIONAL IMPACT ── */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8fafc',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Wildlife & Conservation
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#274472',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            The Archipelago in Motion
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            color: '#475569',
                            fontSize: '18px',
                            marginTop: '25px',
                            lineHeight: '1.7',
                            maxWidth: '800px',
                            margin: '25px auto 0'
                        }}>
                            In the Galápagos, the animals dictate the pace of the day. Watch the breathtaking moments of wildlife encounters where species show no fear of humans—from the ancient giant tortoise to the marine iguanas of the volcanic shores. This is the heart of an expedition that transforms your understanding of the natural world.
                        </p>
                    </div>

                    {/* Video Player */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(15, 28, 46, 0.12)',
                        border: '1px solid #e2e8f0',
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/4tdL2-h5HTI" // Replace with a Galápagos specific HX video
                            title="Wildlife Discovery in the Galápagos"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY SECTION - UPDATED CONTENT */}
            <section className="medi-authority-section">
                <style>{`
          @keyframes prestige-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes prestige-reverse-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .medi-prestige-seal-ring {
            animation: prestige-spin 25s linear infinite;
            border: 2px dashed rgba(255,255,255,0.4) !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .medi-prestige-static-img {
            animation: prestige-reverse-spin 25s linear infinite;
          }
        `}</style>

                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                            Why Travelers Trust Angela Hughes <br /> Trips & Ships Luxury Travel
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{
                            textAlign: 'center',
                            maxWidth: '850px',
                            margin: '20px auto 0',
                            fontSize: '18px',
                            color: '#475569',
                            lineHeight: '1.6'
                        }}>
                            Angela Hughes is one of the luxury travel industry’s most respected advisors and educators.
                        </p>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left Side: Identity Card */}
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={profileAH}
                                    alt="Angela Hughes"
                                    className="medi-prestige-static-img"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        {/* Right Side: Credentials List */}
                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Ship, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "ADVISORY" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" }
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

                    {/* Concluding Specialization Box */}
                    <div style={{
                        marginTop: window.innerWidth <= 360 ? '30px' : '50px',
                        padding: window.innerWidth <= 360 ? '20px 14px' : '35px',
                        backgroundColor: '#f8fafc',
                        borderRadius: window.innerWidth <= 360 ? '16px' : '24px',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            color: '#0f1c2e',
                            fontWeight: '600',
                            lineHeight: '1.7',
                            margin: 0,
                            fontStyle: 'italic'
                        }}>
                            "Angela and her team specialize in helping travelers choose the right expedition experiences based on travel style, wildlife priorities and comfort expectations."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION - UPDATED FOR GALÁPAGOS */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">HX Expeditions Galápagos: <br /> Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {galapagosFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => mediToggleFaq(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {mediActiveFaq === index ? "−" : "+"}
                                    </span>
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

            {/* STRONG CTA SECTION - GALÁPAGOS FINAL CONVERSION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready To Explore The Galápagos With <br /> HX Expeditions?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            The Galápagos Islands deliver one of the world’s most unforgettable wildlife experiences.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '700', color: '#ffffff', margin: '0 auto 24px' }}>
                            Choosing the right ship, itinerary and season can dramatically shape your expedition.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '850px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel helps travelers confidently plan extraordinary HX Expeditions Galápagos cruises with personalized expert guidance.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#3b82f6', margin: '0 auto 36px', maxWidth: '850px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Contact Trips & Ships Luxury Travel today to begin planning your Galápagos expedition.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Personalized Galápagos Expedition Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HXExpeditionsGalapagosCruises