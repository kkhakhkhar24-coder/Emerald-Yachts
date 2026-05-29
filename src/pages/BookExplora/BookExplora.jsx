import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import angelaHughes from "../../assets/image.webp"
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/BookExplora/EXPLORA III - PANAMA CANAL .webp'
import hero2 from '../../assets/BookExplora/EXPLORA III - PANAMA CANAL.webp'
import hero3 from '../../assets/BookExplora/explora-journeys-luxury-cruise-ships-sailing-miami.webp'

// Import images for Benefits section
import benefitImg1 from '../../assets/BookExplora/EXPLORA III-IV CR 19.webp'
import benefitImg2 from '../../assets/BookExplora/explora-III-helios-pool-luxury-sundeck-retreat.webp'
import benefitImg3 from '../../assets/BookExplora/EXPLORA III - Crema Cafe.webp'
import benefitImg4 from '../../assets/BookExplora/EXPLORA III-IV - Fil Rouge.webp'
import exploraLuxury from '../../assets/BookExplora/EXPLORA III-IV CR 17 .webp'
import Profile_AH from '../../assets/BookExplora/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/BookExplora/Profile_Picture_AH.jpg'
import Image_1 from '../../assets/BookExplora/Image_1.webp'
import Image_2 from '../../assets/BookExplora/Image_2.webp'
import Image_3 from '../../assets/BookExplora/Image_3.webp'
import Image_4 from '../../assets/BookExplora/Image_4.webp'
import Image_5 from '../../assets/BookExplora/Image_5.webp'
import Image_6 from '../../assets/BookExplora/Image_6.webp'

function BookExplora() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % 4)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    // Suite categories used in the interactive itinerary dashboard
    const mediItineraries = [
        {
            title: 'Ocean Terrace Suite',
            bestFor: ['First-time Explora guests', 'Couples', 'Budget-conscious luxury seekers', 'Shorter voyages'],
            highlights: ['Private terrace', 'King-size bed', 'Marble bathroom', 'Butler service', 'Minibar included']
        },
        {
            title: 'Ocean Grand Terrace Suite',
            bestFor: ['Travelers valuing outdoor living space', 'Warm-weather itineraries', 'Couples on longer voyages'],
            highlights: ['Expansive terrace', 'Separate seating area', 'Premium amenities', 'Priority dining', 'Enhanced butler service']
        },
        {
            title: 'Ocean Penthouse',
            bestFor: ['Ultra-luxury travelers', 'Milestone celebrations', 'Extended stays at sea'],
            highlights: ['Multi-room living area', 'Full dining space', 'Priority excursion booking', 'Dedicated concierge', 'Premium spirits']
        },
        {
            title: 'Ocean & Cocoon Residences',
            bestFor: ['Maximum space seekers', 'Long voyage travelers', 'Those wanting home-at-sea comfort'],
            highlights: ['Expansive living quarters', 'Full kitchen', 'Private dining', 'Dedicated staff', 'Custom itinerary support']
        }
    ]

    const mediFaqs = [
        {
            question: 'Should you book Explora Journeys through a travel advisor?',
            answer: 'Yes. Booking through a travel advisor can provide better value, personalized planning, and expert guidance on suites, itineraries, and onboard experiences.'
        },
        {
            question: 'What are the benefits of using a travel advisor for Explora Journeys?',
            answer: 'Travel advisors help you choose the best suite, secure added perks, manage bookings, and tailor your cruise to your travel style.'
        },
        {
            question: 'Is it cheaper to book Explora Journeys through a travel advisor?',
            answer: 'Often yes. Advisors may offer exclusive promotions, added amenities, or better value packages not always available directly.'
        },
        {
            question: 'Can a travel advisor help choose the best Explora suite?',
            answer: 'Yes. Advisors can recommend the best suite category based on your budget, preferences, and travel goals.'
        },
        {
            question: 'Do travel advisors have access to special deals for Explora Journeys?',
            answer: 'Many luxury travel advisors have access to exclusive offers, onboard credits, and VIP amenities.'
        },
        {
            question: 'Why not book Explora Journeys directly online?',
            answer: 'While you can book directly, you may miss out on personalized recommendations, upgrades, and additional value-added services.'
        },
        {
            question: 'What kind of support does a travel advisor provide before the cruise?',
            answer: 'They assist with itinerary planning, documentation, transfers, pre-cruise hotels, and special requests.'
        },
        {
            question: 'Do travel advisors help during the cruise as well?',
            answer: 'Yes. Many advisors provide ongoing support and act as a point of contact for changes or special needs.'
        },
        {
            question: 'Can a travel advisor help with shore excursions on Explora Journeys?',
            answer: 'Yes. Advisors can recommend the best excursions based on your interests and destination style.'
        },
        {
            question: 'Is it better to book luxury cruises like Explora Journeys with an expert?',
            answer: 'Yes. Luxury cruises involve multiple suite categories and itineraries, and expert guidance helps maximize your experience.'
        },
        {
            question: 'Do travel advisors charge extra for booking Explora Journeys?',
            answer: 'Usually no. Most advisors are compensated by the cruise line, so you typically pay the same price or better.'
        },
        {
            question: 'Can a travel advisor customize my Explora Journeys itinerary?',
            answer: 'Yes. Advisors can help personalize pre- and post-cruise stays, flights, and onboard experiences.'
        },
        {
            question: 'What mistakes do travelers make when booking Explora Journeys alone?',
            answer: 'Common mistakes include choosing the wrong suite, missing promotions, or not optimizing itinerary selection.'
        },
        {
            question: 'Who should use a travel advisor for Explora Journeys?',
            answer: 'First-time luxury cruisers, couples, and travelers wanting a stress-free, optimized booking experience benefit most.'
        },
        {
            question: 'Why is Explora Journeys ideal for advisor-led bookings?',
            answer: 'Because of its premium pricing, suite variety, and curated experiences, expert guidance ensures the best overall value and experience.'
        }
    ];

    const mediMistakes = [
        {
            title: 'Choosing the Wrong Suite Location',
            desc: 'Suite location can dramatically affect noise levels, motion sensitivity, privacy, and ocean views.',
            bullets: [
                'Forward suites experience more motion in rough seas',
                'Mid-ship locations offer the most stable and quiet experience'
            ]
        },
        {
            title: 'Focusing Only on Price',
            desc: 'Luxury cruise value extends far beyond base pricing. Travelers should evaluate included amenities, onboard atmosphere, suite quality, and itinerary design.'
        },
        {
            title: 'Booking Too Late',
            desc: 'Explora\'s most desirable suites and itineraries often sell out early — especially Mediterranean summer voyages, holiday sailings, and wellness-focused itineraries.'
        },
        {
            title: 'Skipping the Advisor Advantage',
            desc: 'Many travelers miss exclusive amenities, VIP benefits, and strategic suite upgrades by booking directly without expert guidance from a luxury cruise advisor.'
        }
    ]

    const mediSchemaData = {
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
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                }
            },
            {
                "@type": "WebPage",
                "name": "Should You Book Explora Through a Travel Advisor?",
                "url": "https://www.tripsandships.com/should-you-book-explora-through-a-travel-advisor",
                "description": "Expert insights into the benefits of booking Explora Journeys through a luxury travel advisor."
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
                        "name": "Should You Book Explora Through a Travel Advisor?",
                        "item": "https://www.tripsandships.com/should-you-book-explora-through-a-travel-advisor"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Should you book Explora through a travel advisor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many luxury travelers benefit from booking Explora Journeys through a travel advisor because of personalized planning, suite selection assistance, and exclusive amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it cheaper to book Explora through a travel advisor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pricing is often similar, but travel advisors may provide additional value through onboard credits, promotions, and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are travel advisors worth it for Explora Journeys?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For many travelers, especially first-time luxury cruisers, experienced travel advisors help simplify planning and improve the overall luxury cruise experience."
                        }
                    }
                ]
            }
        ]
    }


    return (
        <>
            <Helmet>
                <title>
                    Should You Book Explora Through a Travel Advisor? | Luxury Cruise Expert Guide 2026

                </title>
                <meta
                    name="title"
                    content="Should You Book Explora Through a Travel Advisor in 2026?
"
                />
                <meta
                    name="description"
                    content="Wondering whether to book Explora Journeys through a travel advisor? Discover the advantages of using a luxury cruise specialist, including suite selection, exclusive amenities, itinerary planning, VIP benefits, and personalized support from Angela Hughes of Trips & Ships Luxury Travel.
"
                />
                <meta name="keywords" content="Should You Book Explora Through a Travel Advisor
, Explora travel advisor
,  Book Explora Journeys
, Explora Journeys suites,  Luxury cruise specialist" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ── HERO SECTION ─────────────────────────────────────────────── */}
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
                        <span>Ultra-Luxury Cruise Planning</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Should You Book Explora Journeys Through a Travel Advisor?
                    </h1>
                </div>
            </section>

            {/* ── PREMIUM INTRO SECTION ────────────────────────────────────── */}
            <section className="medi-intro-section medi-premium-intro-section">
                {/* Style block for icon hover effect */}
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
                            {/* EYEBROW BADGE - Centered responsive */}
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: '700',
                                color: '#274472',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                // Logic to remove the side line on mobile for better centering
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                EXPERT LUXURY GUIDANCE
                            </span>

                            {/* HEADING - Centered responsive */}
                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', // Brand Navy
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2',
                                margin: '0 0 20px 0',
                                textAlign: window.innerWidth <= 1024 ? 'center' : 'left'
                            }}>
                                Why More Luxury Travelers Are Using Cruise Advisors for Explora Journeys
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px',
                                height: '3px',
                                background: `linear-gradient(90deg, #274472 0%, transparent 100%)`,
                                marginBottom: '36px',
                                // Centers the separator on mobile
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#475569',
                                marginBottom: '40px',
                                textAlign: window.innerWidth <= 1024 ? 'center' : 'left'
                            }}>
                                Luxury cruising has become significantly more sophisticated in recent years. Today's travelers face increasingly complex decisions — and for ultra-luxury lines like Explora Journeys, the question is no longer "Should I use a travel advisor?" but rather: "Can I realistically maximize a luxury cruise experience without one?"
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{
                                    fontSize: '17px',
                                    color: '#1e293b',
                                    marginBottom: '24px',
                                    fontWeight: '600',
                                    textAlign: window.innerWidth <= 1024 ? 'center' : 'left'
                                }}>
                                    Today's travelers face complex decisions involving:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px',
                                    textAlign: 'left' // Keep text in small cards left aligned
                                }}>
                                    {[
                                        { t: "Suite categories", i: <Gem size={20} /> },
                                        { t: "Ship comparisons", i: <Ship size={20} /> },
                                        { t: "Destination selection", i: <MapPin size={20} /> },
                                        { t: "Shore excursions", i: <Compass size={20} /> },
                                        { t: "International logistics", i: <Globe size={20} /> },
                                        { t: "Pre- & post-cruise planning", i: <Crown size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box" style={{
                                                transition: 'all 0.3s ease',
                                                color: '#274472'
                                            }}>
                                                {item.i}
                                            </div>
                                            <span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Signature Expert Block */}
                        <div className="medi-premium-signature-panel" style={{
                            marginTop: window.innerWidth <= 1024 ? '40px' : '0',
                            borderLeft: '4px solid #274472'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ backgroundColor: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LUXURY CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc" style={{ color: '#475569' }}>
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers navigate the complexities of modern luxury cruising while ensuring their Explora experience aligns perfectly with their travel style and expectations.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides personalized luxury cruise planning backed by real-world expertise.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT A LUXURY CRUISE ADVISOR ACTUALLY DOES ───────────────── */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">ULTRA-LUXURY CRUISE PLANNING // EXPLORA JOURNEYS</div>
                <div className="medi-excel-coord coord-tr">43.7001° N, 7.2620° E</div>
                <div className="medi-excel-coord coord-bl">41.9028° N, 12.4964° E</div>
                <div className="medi-excel-coord coord-br">36.1408° N, 5.3536° W</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Does a Luxury Cruise Advisor Actually Do?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Many travelers underestimate how specialized luxury cruise planning has become. A luxury cruise advisor does far more than simply book a cabin.
                        </p>
                    </div>

                    <div className="medi-excel-grid">

                        {/* Column 1 */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Experienced advisors help travelers:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Ship size={18} /></div>
                                        <span>Compare luxury cruise lines</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Gem size={18} /></div>
                                        <span>Select ideal suite categories</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Compass size={18} /></div>
                                        <span>Match itineraries to travel style</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><MapPin size={18} /></div>
                                        <span>Identify destination priorities</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Crown size={18} /></div>
                                        <span>Secure exclusive amenities</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Globe size={18} /></div>
                                        <span>Coordinate international logistics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    This expertise is especially valuable for:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Sparkles size={18} /></div>
                                        <span>Navigate cancellation policies</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Calendar size={18} /></div>
                                        <span>Manage complex travel arrangements</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Star size={18} /></div>
                                        <span>Access industry relationships and promotions</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Anchor size={18} /></div>
                                        <span>Air arrangements and transfers</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Users size={18} /></div>
                                        <span>Pre- and post-cruise planning</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><CheckCircle size={18} /></div>
                                        <span>Travel insurance guidance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge">
                            <Sparkles size={20} />
                        </div>
                        <p className="medi-excel-footer-paragraph">
                            For ultra-luxury cruise brands like Explora Journeys, this expertise can significantly improve the overall travel experience.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY EXPLORA JOURNEYS IS DIFFERENT ────────────────────────── */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DISTINCTIVE CRUISE STYLE</span>
                        <h2 className="medi-diff-main-title">Why Explora Journeys Is Different</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Pillar 1: Boutique Luxury */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Crown size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Boutique Luxury &amp; Wellness Focus</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Explora Journeys is not a traditional mainstream cruise line. The brand focuses heavily on:
                            </p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Boutique luxury</span>
                                <span className="medi-diff-chip">Wellness travel</span>
                                <span className="medi-diff-chip">Spacious suites</span>
                                <span className="medi-diff-chip">Personalized experiences</span>
                                <span className="medi-diff-chip">European elegance</span>
                                <span className="medi-diff-chip">Destination immersion</span>
                            </div>
                            <p className="medi-diff-card-text-secondary">
                                Travelers need nuanced guidance when comparing:
                            </p>
                            <ul className="medi-diff-experience-list">
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Suite categories &amp; locations</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Itinerary styles</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Included amenities</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Onboard atmosphere</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Value vs. other luxury lines</span></li>
                            </ul>
                        </div>

                        {/* Pillar 2: Suite Range */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Gem size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Five Distinct Suite Categories</h3>
                            </div>

                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num">5</div>
                                </div>
                                <div className="medi-diff-stat-label">SUITE CATEGORIES</div>
                            </div>

                            <p className="medi-diff-card-text">
                                Explora Journeys offers five distinct suite tiers — from Ocean Terrace Suites to Cocoon Residences — each delivering a meaningfully different onboard experience.
                            </p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">
                                    Choosing the wrong suite can significantly diminish the Explora experience.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 3: Advisor Guidance */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Compass size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Sophisticated Destination Immersion</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Explora Journeys emphasizes:
                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                <li><span className="medi-diff-list-num">01</span><span>Wellness &amp; relaxation</span></li>
                                <li><span className="medi-diff-list-num">02</span><span>Cultural immersion</span></li>
                                <li><span className="medi-diff-list-num">03</span><span>Scenic cruising</span></li>
                                <li><span className="medi-diff-list-num">04</span><span>Culinary exploration</span></li>
                                <li><span className="medi-diff-list-num">05</span><span>Port-intensive experiences</span></li>
                            </ul>

                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    An experienced advisor helps travelers avoid choosing based solely on marketing images or pricing.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BENEFITS OF BOOKING THROUGH A TRAVEL ADVISOR ────────── */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">LUXURY TRAVEL ADVISOR BENEFITS</span>
                        <h2 className="medi-itinerary-showcase-heading">
                            Benefits of Booking Explora Through a Travel Advisor
                        </h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">

                        {/* Left Side Tabs */}
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((item, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>

                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">
                                            {item.title}
                                        </span>
                                    </div>

                                    <ChevronRight
                                        size={18}
                                        className="medi-itinerary-tab-arrow"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Right Side Content */}
                        <div className="medi-itinerary-showcase-card">

                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={[benefitImg1, benefitImg2, benefitImg3, benefitImg4][mediSelectedItinerary]}
                                    alt={mediItineraries[mediSelectedItinerary]?.title || "Travel Advisor Benefit"}
                                    className="medi-itinerary-showcase-img"
                                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">
                                    TRAVEL ADVISOR BENEFIT
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">

                                {/* 01 */}
                                {mediSelectedItinerary === 0 && (
                                    <>
                                        <h3 className="medi-itinerary-showcase-title">
                                            Expert Suite Selection
                                        </h3>

                                        <div className="medi-itinerary-details-grid">

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Suite Categories:
                                                </h4>

                                                <ul className="medi-itinerary-details-list">
                                                    <li>
                                                        <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                        <span>Ocean Terrace Suites</span>
                                                    </li>

                                                    <li>
                                                        <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                        <span>Ocean Grand Terrace Suites</span>
                                                    </li>

                                                    <li>
                                                        <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                        <span>Ocean Penthouses</span>
                                                    </li>

                                                    <li>
                                                        <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                        <span>Ocean Residences</span>
                                                    </li>

                                                    <li>
                                                        <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                        <span>Cocoon Residences</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Advisors Help Evaluate:
                                                </h4>

                                                <div className="medi-itinerary-details-chips">
                                                    {[
                                                        'Deck location',
                                                        'Motion sensitivity',
                                                        'Balcony size',
                                                        'Privacy preferences',
                                                        'Proximity to public areas',
                                                        'Budget priorities'
                                                    ].map((item, i) => (
                                                        <span
                                                            key={i}
                                                            className="medi-itinerary-details-chip"
                                                        >
                                                            <Gem size={12} className="medi-itinerary-chip-icon" />
                                                            <span>{item}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                        <p className="medi-mistake-card-description" style={{ marginTop: '30px' }}>
                                            One of the most important decisions travelers make is choosing the right suite category. On Explora Journeys, differences between suite categories can significantly impact the onboard experience. Experienced advisors help travelers evaluate multiple factors and often prevent costly booking mistakes.
                                        </p>
                                    </>
                                )}

                                {/* 02 */}
                                {mediSelectedItinerary === 1 && (
                                    <>
                                        <h3 className="medi-itinerary-showcase-title">
                                            Access to Exclusive Amenities
                                        </h3>

                                        <div className="medi-itinerary-details-grid">

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Advisors May Have Access To:
                                                </h4>

                                                <ul className="medi-itinerary-details-list">
                                                    {[
                                                        'Exclusive onboard credits',
                                                        'Hosted experiences',
                                                        'VIP amenities',
                                                        'Preferred partner benefits',
                                                        'Special promotions',
                                                        'Added-value packages'
                                                    ].map((item, i) => (
                                                        <li key={i}>
                                                            <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Important Insight:
                                                </h4>

                                                <div className="medi-itinerary-details-chips">
                                                    {[
                                                        'Greater overall value',
                                                        'Luxury perks',
                                                        'Enhanced experience',
                                                        'Exclusive benefits',
                                                        'VIP treatment'
                                                    ].map((item, i) => (
                                                        <span
                                                            key={i}
                                                            className="medi-itinerary-details-chip"
                                                        >
                                                            <Gem size={12} className="medi-itinerary-chip-icon" />
                                                            <span>{item}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                        <p className="medi-mistake-card-description" style={{ marginTop: '30px' }}>
                                            Many travelers are surprised to learn that booking through a luxury advisor does not necessarily cost more — and can sometimes provide greater overall value.
                                        </p>
                                    </>
                                )}

                                {/* 03 */}
                                {mediSelectedItinerary === 2 && (
                                    <>
                                        <h3 className="medi-itinerary-showcase-title">
                                            Personalized Itinerary Matching
                                        </h3>

                                        <div className="medi-itinerary-details-grid">

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Some Voyages Emphasize:
                                                </h4>

                                                <ul className="medi-itinerary-details-list">
                                                    {[
                                                        'Wellness and relaxation',
                                                        'Cultural immersion',
                                                        'Scenic cruising',
                                                        'Culinary exploration',
                                                        'Port-intensive experiences',
                                                        'Extended sea days'
                                                    ].map((item, i) => (
                                                        <li key={i}>
                                                            <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Advisors Match Travelers Based On:
                                                </h4>

                                                <div className="medi-itinerary-details-chips">
                                                    {[
                                                        'Travel energy levels',
                                                        'Lifestyle preferences',
                                                        'Destination interests',
                                                        'Desired onboard atmosphere'
                                                    ].map((item, i) => (
                                                        <span
                                                            key={i}
                                                            className="medi-itinerary-details-chip"
                                                        >
                                                            <Gem size={12} className="medi-itinerary-chip-icon" />
                                                            <span>{item}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                        <p className="medi-mistake-card-description" style={{ marginTop: '30px' }}>
                                            Not every Explora itinerary appeals to the same type of traveler. An experienced advisor helps travelers choose itineraries that align with their preferences, especially for first-time luxury cruisers.
                                        </p>
                                    </>
                                )}

                                {/* 04 */}
                                {mediSelectedItinerary === 3 && (
                                    <>
                                        <h3 className="medi-itinerary-showcase-title">
                                            International Travel Coordination
                                        </h3>

                                        <div className="medi-itinerary-details-grid">

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Luxury Cruises Frequently Involve:
                                                </h4>

                                                <ul className="medi-itinerary-details-list">
                                                    {[
                                                        'International flights',
                                                        'Hotel stays',
                                                        'Transfers',
                                                        'Passport requirements',
                                                        'Insurance considerations',
                                                        'Complex arrival logistics'
                                                    ].map((item, i) => (
                                                        <li key={i}>
                                                            <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="medi-itinerary-details-col">
                                                <h4 className="medi-itinerary-details-heading">
                                                    Especially Valuable For:
                                                </h4>

                                                <div className="medi-itinerary-details-chips">
                                                    {[
                                                        'Multi-country itineraries',
                                                        'Extended luxury vacations',
                                                        'Pre- and post-cruise land programs',
                                                        'Travelers visiting unfamiliar destinations'
                                                    ].map((item, i) => (
                                                        <span
                                                            key={i}
                                                            className="medi-itinerary-details-chip"
                                                        >
                                                            <Gem size={12} className="medi-itinerary-chip-icon" />
                                                            <span>{item}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                        <p className="medi-mistake-card-description" style={{ marginTop: '30px' }}>
                                            A luxury travel advisor helps coordinate the entire experience seamlessly and provides personalized support before and during travel.
                                        </p>

                                        <div style={{ marginTop: '28px' }}>
                                            <h4 className="medi-itinerary-details-heading">
                                                Personalized Support Includes:
                                            </h4>

                                            <div className="medi-itinerary-details-chips">
                                                {[
                                                    'Schedule changes',
                                                    'Airline disruptions',
                                                    'Rebooking support',
                                                    'Dining reservations',
                                                    'Excursion recommendations',
                                                    'Special celebration arrangements',
                                                    'Wellness requests'
                                                ].map((item, i) => (
                                                    <span
                                                        key={i}
                                                        className="medi-itinerary-details-chip"
                                                    >
                                                        <Gem size={12} className="medi-itinerary-chip-icon" />
                                                        <span>{item}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME LUXURY CRUISERS SECTION - LIGHT NAVY THEME ────────── */}
            <section className="medi-itinerary-showcase-section" style={{
                padding: 'clamp(40px, 8vw, 90px) 15px',
                backgroundColor: '#eef5fb' // NEW: Light Navy / Ice Blue background
            }}>
                <div className="medi-itinerary-showcase-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header */}
                    <div className="medi-itinerary-showcase-header" style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
                        <span className="medi-itinerary-eyebrow" style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: '#ffffff', // White badge on light navy background
                            color: '#274472',
                            fontSize: '11px',
                            fontWeight: '800',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            borderRadius: '40px',
                            marginBottom: '15px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>
                            FIRST-TIME LUXURY CRUISE GUIDANCE
                        </span>

                        <h2 className="medi-itinerary-showcase-heading" style={{
                            fontSize: 'clamp(24px, 4vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            lineHeight: '1.2',
                            margin: '0 auto'
                        }}>
                            Are Travel Advisors Worth It for First-Time Luxury Cruisers?
                        </h2>

                        <div className="medi-itinerary-showcase-separator" style={{ width: '60px', height: '4px', background: '#3b82f6', margin: '20px auto 0', borderRadius: '10px' }}></div>
                    </div>

                    {/* Main Layout */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
                            gap: '30px',
                            alignItems: 'stretch'
                        }}
                    >

                        {/* LEFT FEATURE PANEL - (Already Dark Navy Gradient, pops against Light Navy bg) */}
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #0f1c2e 0%, #1e293b 100%)',
                                borderRadius: '30px',
                                padding: 'clamp(30px, 5vw, 50px)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                boxShadow: '0 25px 50px rgba(15, 28, 46, 0.2)'
                            }}
                        >
                            {/* Decorative Glow */}
                            <div style={{
                                position: 'absolute',
                                width: '320px',
                                height: '320px',
                                borderRadius: '50%',
                                background: 'rgba(59, 130, 246, 0.08)',
                                top: '-120px',
                                right: '-120px'
                            }}></div>

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <span style={{
                                    display: 'inline-flex',
                                    padding: '10px 18px',
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: '40px',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    marginBottom: '25px'
                                }}>
                                    Luxury Cruise Planning
                                </span>

                                <h3 style={{
                                    fontSize: 'clamp(28px, 5vw, 42px)',
                                    lineHeight: '1.15',
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    margin: '0 0 20px 0'
                                }}>
                                    For many travelers, absolutely.
                                </h3>

                                <p style={{
                                    fontSize: 'clamp(16px, 2vw, 18px)',
                                    lineHeight: '1.7',
                                    color: '#cbd5e1',
                                    margin: 0
                                }}>
                                    First-time luxury cruisers often feel overwhelmed by the many decisions involved in planning a premium cruise experience. An experienced advisor simplifies the process while helping travelers feel more confident in their decisions.
                                </p>
                            </div>

                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                marginTop: '40px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px'
                            }}>
                                {[
                                    'Better expectations',
                                    'Higher satisfaction',
                                    'Smoother travel',
                                    'Personalized vacations'
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#ffffff',
                                        padding: '10px 16px',
                                        borderRadius: '40px',
                                        fontSize: '13px',
                                        fontWeight: '600'
                                    }}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CONTENT CARDS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {[
                                'Cruise line comparisons',
                                'Suite terminology',
                                'Included amenities',
                                'Luxury pricing structures',
                                'Destination planning',
                                'Shore excursion options'
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: '#ffffff', // Crisp white cards pop against light navy bg
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '24px',
                                        padding: 'clamp(15px, 3vw, 24px)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'clamp(12px, 3vw, 20px)',
                                        boxShadow: '0 10px 20px rgba(15,28,46,0.03)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {/* Number */}
                                    <div style={{
                                        width: 'clamp(40px, 8vw, 54px)',
                                        height: 'clamp(40px, 8vw, 54px)',
                                        minWidth: 'clamp(40px, 8vw, 54px)',
                                        borderRadius: '12px',
                                        background: '#f1f5f9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#0f1c2e',
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                        fontWeight: '800'
                                    }}>
                                        0{i + 1}
                                    </div>

                                    <div>
                                        <span style={{
                                            display: 'block',
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            color: '#3b82f6', // Azure Blue accent
                                            marginBottom: '4px'
                                        }}>
                                            Selection Factor
                                        </span>
                                        <h4 style={{
                                            margin: 0,
                                            fontSize: 'clamp(15px, 2.5vw, 18px)',
                                            color: '#1e293b',
                                            fontWeight: '600'
                                        }}>
                                            {item}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERT INSIGHT – ANGELA HUGHES ───────────────────────────── */}
            <section id="explora-advisor-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left: Portrait + Stats */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" />
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

                        {/* Right: Editorial Text */}
                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Explora Journeys Demands <br className="medi-growth-title-break" />Expert Guidance
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, one of the biggest misconceptions in luxury cruising is that all cruise experiences are interchangeable. In reality, small differences in suite selection, itinerary design, and ship atmosphere can dramatically impact traveler satisfaction.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Explora Journeys particularly appeals to travelers seeking:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Contemporary luxury',
                                        'Spacious suites',
                                        'Personalized service',
                                        'Wellness-focused experiences',
                                        'Boutique ship atmospheres',
                                        'Sophisticated international travel'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers compare luxury cruise experiences realistically based on travel personality and lifestyle preferences — not simply advertising or price points.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Ultra-luxury cruising', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruises', icon: Anchor },
                                        { title: 'Cultural travel', icon: Globe },
                                        { title: 'Global premium travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <IconComponent size={14} />
                                                </div>
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

            {/* ── IS IT CHEAPER TO BOOK THROUGH AN ADVISOR? - RESPONSIVE CENTERING ── */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">

                        {/* EYEBROW - Centered on mobile */}
                        <span className="medi-luxury-eyebrow-label" style={{
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'block',
                            width: '100%',
                            letterSpacing: '0.25em',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: '#274472',
                            marginBottom: '15px'
                        }}>
                            PRICING &amp; VALUE
                        </span>

                        {/* HEADING - Brand Navy + Centered on mobile */}
                        <h2 className="medi-luxury-heading" style={{
                            color: '#274472', // Brand Navy
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            fontSize: 'clamp(28px, 5vw, 48px)', // Responsive scaling
                            lineHeight: '1.2',
                            fontWeight: '600',
                            marginBottom: '35px'
                        }}>
                            Is It Cheaper to Book Explora Through a Travel Advisor?
                        </h2>

                        <p className="medi-luxury-paragraph" style={{
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            fontSize: '17px',
                            lineHeight: '1.75',
                            color: '#475569'
                        }}>
                            In many cases, pricing is identical to booking directly with the cruise line. However, experienced luxury advisors may provide additional onboard value, suite upgrade opportunities, exclusive amenities, and better overall itinerary strategy.
                        </p>

                        <div className="medi-luxury-appreciated-box" style={{ padding: '30px', backgroundColor: '#f8fafc' }}>
                            <h3 className="medi-luxury-subheading" style={{
                                textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                                color: '#274472',
                                fontSize: '20px',
                                fontWeight: '700',
                                marginBottom: '20px'
                            }}>
                                The true value often comes from:
                            </h3>
                            <div className="medi-luxury-features-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                gap: '15px'
                            }}>
                                {[
                                    "Better travel decisions",
                                    "Improved suite selection",
                                    "Avoiding costly mistakes",
                                    "Enhanced overall experience",
                                    "Exclusive onboard credits",
                                    "More personalized service"
                                ].map((item, idx) => (
                                    <div key={idx} className="medi-luxury-feature" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={18} className="medi-feature-check-icon" style={{ color: '#274472' }} />
                                        <span style={{ fontSize: '15px', color: '#475569', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note" style={{ borderLeftColor: '#274472' }}>
                            <p className="medi-luxury-paragraph" style={{ fontSize: '15px', fontStyle: 'italic', color: '#475569' }}>
                                Many travelers are surprised to learn that booking through a luxury advisor does not necessarily cost more — and can sometimes provide greater overall value through preferred partner benefits and VIP amenities.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ fontSize: '15px', fontStyle: 'italic', color: '#475569', marginTop: '10px' }}>
                                For luxury travelers, expertise often matters more than small price differences.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={exploraLuxury} alt="Explora Journeys luxury suite" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* ── COMMON MISTAKES AUTO-SLIDER ───────────────────────────────── */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID BOOKING PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common Mistakes Travelers Make When Booking Explora Alone
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        {/* Left Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        {/* Slider Viewport */}
                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div
                                        key={idx}
                                        className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}
                                    >
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

                        {/* Right Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                onClick={() => setMediActiveMistake(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VISUAL IMMERSION: THE LIFESTYLE GALLERY ── */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            The Home at Sea
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#274472', // Your Brand Navy
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Effortless Elegance: The Explora Journeys Visual Experience
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* SEAMLESS BENTO GRID */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridAutoRows: '240px',
                        gap: '16px',
                        width: '100%'
                    }}>
                        {/* Image 1: Main Feature (Spans 2 cols, 2 rows) */}
                        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_1} alt="Explora Journeys Exterior" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>

                        {/* Image 2: Pool Deck (Spans 2 cols, 1 row) */}
                        <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_2} alt="Helios Pool Deck" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>

                        {/* Image 3: Culinary (Spans 1 col, 1 row) */}
                        <div style={{ gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_3} alt="Fil Rouge Dining" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>

                        {/* Image 4: Interior (Spans 1 col, 1 row) */}
                        <div style={{ gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_4} alt="Explora Luxury Suite" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>

                        {/* Image 5: Cafe (Spans 2 cols, 1 row) */}
                        <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_5} alt="Crema Cafe" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>

                        {/* Image 6: Destination (Spans 2 cols, 1 row) */}
                        <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.05)' }}>
                            <img src={Image_6} alt="Explora Panama Canal" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        </div>
                    </div>

                    <style>{`
                        @media (max-width: 992px) {
                            div[style*="grid-template-columns: repeat(4, 1fr)"] {
                                grid-template-columns: repeat(2, 1fr) !important;
                                grid-auto-rows: 200px !important;
                            }
                        }
                        @media (max-width: 600px) {
                            div[style*="grid-template-columns: repeat(4, 1fr)"] {
                                grid-template-columns: 1fr !important;
                                grid-auto-rows: 250px !important;
                            }
                            div[style*="grid-column: span 2"] {
                                grid-column: span 1 !important;
                            }
                        }
                    `}</style>
                </div>
            </section>

            {/* ── WHO SHOULD BOOK EXPLORA ───────────────────────────────────── */}
            {/* ── EXPLORA VS BOOKING ONLINE YOURSELF - LIGHT NAVY THEME ── */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#e6edf7', // NEW: Light Navy / Steel Blue background
                fontFamily: 'sans-serif'
            }}>
                {/* PROPER CONTAINER: Limits width and centers the content */}
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#274472',
                            fontWeight: '800',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '15px',
                            opacity: 0.8
                        }}>
                            Booking Strategy
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Explora vs. Booking Online Yourself
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* COMPARISON GRID */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        justifyContent: 'center'
                    }}>

                        {/* LEFT CARD: BOOKING DIRECTLY (The Standard Way) */}
                        <div style={{
                            flex: '1 1 480px',
                            minWidth: '320px',
                            backgroundColor: '#ffffff', // Crisp white pops against light navy bg
                            borderRadius: '32px',
                            padding: 'clamp(30px, 5vw, 50px)',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 20px rgba(15,28,46,0.03)'
                        }}>
                            <div style={{ marginBottom: '35px' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    backgroundColor: '#f1f8f9',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#274472',
                                    marginBottom: '25px'
                                }}>
                                    <Globe size={28} />
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 12px 0' }}>Booking Directly Online</h3>
                                <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Best for travelers who:</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                                {[
                                    'Already know exactly what they want',
                                    'Have significant luxury cruise experience',
                                    'Prefer fully self-managed travel planning'
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#f1f8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#274472', fontSize: '11px', fontWeight: '800', flexShrink: 0, marginTop: '2px' }}>
                                            0{idx + 1}
                                        </div>
                                        <span style={{ fontSize: '16px', color: '#475569', lineHeight: '1.5', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Challenges Sub-box */}
                            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <p style={{ fontSize: '12px', fontWeight: '800', color: '#0f1c2e', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Potential Challenges:</p>
                                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                                    Limited personalized guidance, less strategic suite selection, and increased responsibility for managing complex international logistics.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT CARD: THE ADVISOR ADVANTAGE (The Premium Way) */}
                        <div style={{
                            flex: '1 1 480px',
                            minWidth: '320px',
                            backgroundColor: '#0f1c2e', // Deep Navy Card
                            borderRadius: '32px',
                            padding: 'clamp(30px, 5vw, 50px)',
                            color: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            {/* Subtle background glow */}
                            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '35px' }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#3b82f6',
                                        marginBottom: '25px'
                                    }}>
                                        <Crown size={28} />
                                    </div>
                                    <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#ffffff', margin: '0 0 12px 0' }}>Via Luxury Cruise Advisor</h3>
                                    <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Best for travelers seeking:</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                                    {[
                                        'Personalized suite & deck recommendations',
                                        'VIP-level planning & concierge support',
                                        'Exclusive luxury cruise expertise',
                                        'Strategic itinerary & amenity matching',
                                        'Seamless coordination of international travel'
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                            <CheckCircle size={20} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontSize: '16px', color: '#e2e8f0', lineHeight: '1.5', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Verdict Box */}
                                <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, lineHeight: '1.7', textAlign: 'center', fontStyle: 'italic' }}>
                                        "For many affluent travelers, the time savings and specialized expertise alone justify the choice to work with an advisor."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHY WORK WITH TRIPS & SHIPS ──────────────────────────────── */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">

                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Luxury travel planning has become increasingly specialized. Experienced advisors help travelers maximize every aspect of an Explora Journeys voyage.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        {/* Pillar 1 */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Compass size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Experienced luxury advisors help travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Compare luxury cruise lines accurately</span>
                                    </li>
                                    <li>
                                        <Calendar size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Match itineraries to lifestyle</span>
                                    </li>
                                    <li>
                                        <Crown size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Secure ideal suite categories</span>
                                    </li>
                                    <li>
                                        <Gem size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Simplify international logistics</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Maximize luxury travel value</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node">
                                <Award size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Mic size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Travel industry speaking engagements</span>
                                    </li>
                                    <li>
                                        <FileText size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Weekly travel columns</span>
                                    </li>
                                    <li>
                                        <Award size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Advisory board leadership</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>International media recognition</span>
                                    </li>
                                    <li>
                                        <GraduationCap size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Luxury Travel University training programs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Ship size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 03</div>
                                <h3 className="medi-pillar-title">Trips &amp; Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Ultra-luxury cruises</span>
                                    </li>
                                    <li>
                                        <Anchor size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Boutique ship experiences</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition cruising</span>
                                    </li>
                                    <li>
                                        <Star size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Personalized luxury travel</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Global premium travel planning</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────────── */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">

                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left: Identity Card */}
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>

                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        {/* Right: Accolade Cards */}
                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "40+ years luxury travel expertise", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "International luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box">
                                                <IconComp size={16} />
                                            </div>
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


            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.12)',
                        border: '1px solid rgba(39, 68, 114, 0.1)',
                        aspectRatio: '16/9',
                        background: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/6jg3MVXjjuo"
                            title="Experience the Mediterranean with Azamara"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => mediToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {mediActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── FINAL CTA SECTION: THE EXPLORA EXPERIENCE ── */}
            <section className="medi-cta-main-section" style={{
                padding: 'clamp(80px, 12vw, 150px) 0',
                backgroundColor: '#0f1c2e', // Deep Luxury Navy
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'sans-serif'
            }}>
                {/* Subtle Background Pattern Layer */}
                <div className="medi-cta-bg-pattern-layer" style={{ opacity: 0.3 }}></div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>

                    {/* 1. TOP MINI TAG */}
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            background: 'rgba(59, 130, 246, 0.12)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#3b82f6',
                            fontSize: '11px',
                            fontWeight: '800',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase'
                        }}>
                            The Ocean State of Mind
                        </div>
                    </div>

                    {/* 2. HERO TITLE */}
                    <h2 style={{
                        maxWidth: '900px',
                        margin: '0 auto 20px',
                        lineHeight: '1.1',
                        fontSize: 'clamp(34px, 7vw, 68px)',
                        fontWeight: '700',
                        letterSpacing: '-0.03em',
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        Ready to Experience <br style={{ display: 'none' }} /> Explora Journeys?
                    </h2>

                    <div style={{
                        width: '60px',
                        height: '3px',
                        background: '#3b82f6',
                        margin: '0 auto 40px',
                        borderRadius: '10px'
                    }}></div>

                    <p style={{
                        maxWidth: '800px',
                        margin: '0 auto 60px',
                        fontSize: 'clamp(17px, 2.5vw, 20px)',
                        lineHeight: '1.8',
                        color: '#cbd5e1',
                        textAlign: 'center',
                        fontWeight: '400'
                    }}>
                        Luxury cruising is deeply personal. Discover a contemporary interpretation of life at sea designed for those who value space, wellness, and unhurried discovery.
                    </p>

                    {/* 3. EXPERIENCE CARDS GRID */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '20px',
                        marginBottom: '100px'
                    }}>
                        {[
                            'Contemporary elegance',
                            'Spacious suites',
                            'Wellness-focused travel',
                            'Boutique luxury',
                            'Personalized service',
                            'Relaxed sophistication',
                            'Destination immersion'
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: idx % 2 === 0 ? '24px 8px 24px 8px' : '8px 24px 8px 24px',
                                    padding: '30px',
                                    minHeight: '130px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ fontSize: '13px', fontWeight: '800', color: '#3b82f6', opacity: 0.8 }}>0{idx + 1}</span>
                                <h4 style={{ fontSize: '18px', color: '#ffffff', margin: 0, fontWeight: '600', lineHeight: '1.4' }}>{item}</h4>
                            </div>
                        ))}
                    </div>

                    {/* 4. FLOATING GLASS PANEL - EXPERT INSIGHT */}
                    <div style={{
                        position: 'relative',
                        padding: 'clamp(35px, 6vw, 65px)',
                        borderRadius: '40px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(20px)',
                        marginBottom: '60px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                            gap: '50px',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h3 style={{ fontSize: 'clamp(24px, 4vw, 34px)', lineHeight: '1.25', color: '#ffffff', marginBottom: '20px', fontWeight: '600' }}>
                                    A compelling introduction to modern luxury.
                                </h3>
                                <p style={{ margin: 0, lineHeight: '1.8', color: '#cbd5e1', fontSize: '16px' }}>
                                    With over four decades of expertise, Angela Hughes and her team help you navigate the sophisticated world of ultra-luxury cruising to find your perfect match.
                                </p>
                            </div>

                            <div style={{ display: 'grid', gap: '12px' }}>
                                {[
                                    'Strategic Suite Selection',
                                    'Itinerary & Lifestyle Matching',
                                    'Exclusive Onboard Amenities',
                                    'Seamless Global Coordination'
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '14px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                                            <CheckCircle size={12} />
                                        </div>
                                        <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 5. REFINED ACTION CARD - THE DIRECT CTA */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '40px',
                        background: '#ffffff',
                        borderRadius: '40px',
                        padding: 'clamp(35px, 6vw, 60px)',
                        boxShadow: '0 30px 60px -15px rgba(15, 28, 46, 0.2)',
                        border: '1px solid #f1f5f9',
                        marginBottom: '60px',
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'left'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #3b82f6 0%, #0f1c2e 100%)' }}></div>

                        <div style={{ flex: '1 1 500px', maxWidth: '650px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                                <div style={{ width: '25px', height: '1px', backgroundColor: '#3b82f6' }}></div>
                                <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#3b82f6' }}>Expert selection</span>
                            </div>
                            <h3 style={{ fontSize: 'clamp(24px, 4vw, 34px)', lineHeight: '1.2', color: '#0f1c2e', margin: 0, fontWeight: '700', letterSpacing: '-0.02em' }}>
                                Expert guidance backed by real-world luxury travel expertise.
                            </h3>
                            <p style={{ fontSize: '16px', color: '#64748b', marginTop: '15px', lineHeight: '1.6' }}>
                                Connect with our specialized advisors to ensure your luxury cruise is flawlessly curated.
                            </p>
                        </div>

                        <div style={{ flex: '0 1 400px', width: '100%' }}>
                            <button style={{
                                width: '100%',
                                padding: '22px 40px',
                                fontSize: '14px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '100px',
                                background: '#0f1c2e',
                                color: '#ffffff',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 10px 25px rgba(15, 28, 46, 0.2)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <Phone size={18} style={{ marginRight: '12px', color: '#3b82f6' }} />
                                Schedule Consultation
                            </button>
                            <p style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
                                Priority Access for 2026 Voyages
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookExplora