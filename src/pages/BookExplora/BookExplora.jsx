import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
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
        { question: 'Should you book Explora through a travel advisor?', answer: 'For many luxury travelers, yes. Travel advisors help with suite selection, itinerary planning, exclusive amenities, and personalized support.' },
        { question: 'Is it cheaper to book Explora through a travel advisor?', answer: 'Pricing is often similar, but advisors may provide added amenities, onboard credits, or greater overall value.' },
        { question: 'What does a luxury cruise advisor do?', answer: 'Luxury cruise advisors help travelers compare cruise lines, select suites, coordinate logistics, and personalize the entire travel experience.' },
        { question: 'Can travel advisors get better Explora perks?', answer: 'Some luxury advisors have access to exclusive amenities, promotions, hosted experiences, or preferred partner benefits.' },
        { question: 'Do travel advisors help with suite selection?', answer: 'Yes. Advisors help travelers evaluate deck location, suite categories, privacy, and overall value.' },
        { question: 'Why use a travel advisor for luxury cruises?', answer: 'Luxury cruising involves more specialized planning than standard vacations, especially regarding suites, itineraries, and international logistics.' },
        { question: 'Are travel advisors worth it for Explora Journeys?', answer: 'For many travelers — especially first-time luxury cruisers — the expertise and personalized support can significantly improve the experience.' },
        { question: 'Can travel advisors help with cruise itinerary planning?', answer: 'Absolutely. Advisors help travelers match itineraries with travel style, destination interests, and preferred onboard atmosphere.' }
    ]

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
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left: Editorial intro */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">EXPERT LUXURY GUIDANCE</span>
                            <h2 className="medi-premium-heading">Why More Luxury Travelers Are Using Cruise Advisors for Explora Journeys</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Luxury cruising has become significantly more sophisticated in recent years. Today's travelers face increasingly complex decisions — and for ultra-luxury lines like Explora Journeys, the question is no longer "Should I use a travel advisor?" but rather: "Can I realistically maximize a luxury cruise experience without one?"
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Today's travelers face complex decisions involving:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Gem size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Suite categories</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Ship size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Ship comparisons</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <MapPin size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Destination selection</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Compass size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Shore excursions</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Globe size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">International logistics</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Pre- &amp; post-cruise planning</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Signature Expert Block */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LUXURY CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers navigate the complexities of modern luxury cruising while ensuring their Explora experience aligns perfectly with their travel style and expectations.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
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




            {/* ── FIRST-TIME LUXURY CRUISERS SECTION ────────── */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">

                    {/* Header */}
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">
                            FIRST-TIME LUXURY CRUISE GUIDANCE
                        </span>

                        <h2 className="medi-itinerary-showcase-heading">
                            Are Travel Advisors Worth It for First-Time Luxury Cruisers?
                        </h2>

                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    {/* Main Layout */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.05fr 1fr',
                            gap: '36px',
                            alignItems: 'stretch'
                        }}
                    >

                        {/* LEFT FEATURE PANEL */}
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #274472 0%, #1c2f4a 100%)',
                                borderRadius: '24px',
                                padding: '50px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '100%'
                            }}
                        >

                            {/* Decorative Glow */}
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '320px',
                                    height: '320px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    top: '-120px',
                                    right: '-120px'
                                }}
                            ></div>

                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 2
                                }}
                            >

                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 18px',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderRadius: '40px',
                                        color: '#ffffff',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        marginBottom: '28px'
                                    }}
                                >
                                    Luxury Cruise Planning
                                </span>

                                <h3
                                    style={{
                                        fontSize: '42px',
                                        lineHeight: '1.15',
                                        color: '#ffffff',
                                        fontWeight: '600',
                                        margin: '0 0 26px 0'
                                    }}
                                >
                                    For many travelers, absolutely.
                                </h3>

                                <p
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: '1.9',
                                        color: 'rgba(255,255,255,0.82)',
                                        margin: 0
                                    }}
                                >
                                    First-time luxury cruisers often feel overwhelmed by the many decisions involved in planning a premium cruise experience. An experienced advisor simplifies the process while helping travelers feel more confident in their decisions.
                                </p>

                            </div>

                            {/* Bottom Stat Pills */}
                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    marginTop: '40px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '14px'
                                }}
                            >
                                {[
                                    'Better expectations',
                                    'Higher satisfaction',
                                    'Smoother travel experiences',
                                    'More personalized luxury vacations'
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            backdropFilter: 'blur(10px)',
                                            color: '#ffffff',
                                            padding: '12px 18px',
                                            borderRadius: '40px',
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* RIGHT CONTENT CARDS */}
                        <div
                            style={{
                                display: 'grid',
                                gap: '22px'
                            }}
                        >

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
                                        background: '#ffffff',
                                        border: '1px solid rgba(39,68,114,0.08)',
                                        borderRadius: '20px',
                                        padding: '24px 28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        boxShadow: '0 12px 30px rgba(15,28,46,0.04)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >

                                    {/* Number */}
                                    <div
                                        style={{
                                            width: '54px',
                                            height: '54px',
                                            minWidth: '54px',
                                            borderRadius: '16px',
                                            background: '#e7f3f5',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#274472',
                                            fontSize: '18px',
                                            fontWeight: '700'
                                        }}
                                    >
                                        0{i + 1}
                                    </div>

                                    {/* Content */}
                                    <div>

                                        <span
                                            style={{
                                                display: 'block',
                                                fontSize: '13px',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.08em',
                                                color: '#274472',
                                                opacity: 0.7,
                                                marginBottom: '6px'
                                            }}
                                        >
                                            First-Time Cruiser Challenge
                                        </span>

                                        <h4
                                            style={{
                                                margin: 0,
                                                fontSize: '20px',
                                                lineHeight: '1.5',
                                                color: '#274472',
                                                fontWeight: '600'
                                            }}
                                        >
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
                                <img src={angelaHughes} alt="Angela Hughes - Luxury Cruise Expert" />
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

            {/* ── IS IT CHEAPER TO BOOK THROUGH AN ADVISOR? ────────────────── */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">PRICING &amp; VALUE</span>
                        <h2 className="medi-luxury-heading">Is It Cheaper to Book Explora Through a Travel Advisor?</h2>

                        <p className="medi-luxury-paragraph">
                            In many cases, pricing is identical to booking directly with the cruise line. However, experienced luxury advisors may provide additional onboard value, suite upgrade opportunities, exclusive amenities, and better overall itinerary strategy.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">The true value often comes from:</h3>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Better travel decisions</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Improved suite selection</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Avoiding costly mistakes</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Enhanced overall experience</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Exclusive onboard credits</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>More personalized service</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                Many travelers are surprised to learn that booking through a luxury advisor does not necessarily cost more — and can sometimes provide greater overall value through preferred partner benefits and VIP amenities.
                            </p>
                            <p className="medi-luxury-paragraph">
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
                            src="https://www.youtube.com/embed/qx_9Nt6kYpI"

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


            {/* ── WHO SHOULD BOOK EXPLORA ───────────────────────────────────── */}
            {/* ── EXPLORA VS BOOKING ONLINE YOURSELF ───────────────────────────────────── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: '#274472',
                                marginBottom: '16px'
                            }}
                        >
                            LUXURY CRUISE BOOKING COMPARISON
                        </span>

                        <h2
                            className="medi-section-heading"
                            style={{
                                textAlign: 'center',
                                marginBottom: '18px'
                            }}
                        >
                            Explora vs Booking Online Yourself
                        </h2>

                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Split Layout */}
                    <div
                        className="medi-audience-split-layout"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '32px',
                            alignItems: 'stretch'
                        }}
                    >

                        {/* LEFT SIDE */}
                        <div
                            style={{
                                background: '#ffffff',
                                borderRadius: '28px',
                                padding: '42px',
                                border: '1px solid rgba(39,68,114,0.08)',
                                boxShadow: '0 18px 45px rgba(15,28,46,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.35s ease',
                                cursor: 'pointer'
                            }}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 30px 60px rgba(15,28,46,0.10)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0px)';
                                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,28,46,0.05)';
                            }}
                        >

                            {/* Top Glow */}
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '220px',
                                    height: '220px',
                                    borderRadius: '50%',
                                    background: 'rgba(39,68,114,0.04)',
                                    top: '-90px',
                                    right: '-90px'
                                }}
                            ></div>

                            <div style={{ position: 'relative', zIndex: 2 }}>

                                <div
                                    style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '22px',
                                        background: '#eef5f7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '28px'
                                    }}
                                >
                                    <Globe size={34} color="#274472" />
                                </div>

                                <h3
                                    style={{
                                        fontSize: '34px',
                                        color: '#274472',
                                        margin: '0 0 12px 0',
                                        fontWeight: '600'
                                    }}
                                >
                                    Booking Directly Online
                                </h3>

                                <p
                                    style={{
                                        fontSize: '17px',
                                        lineHeight: '1.8',
                                        color: '#5c6b7a',
                                        marginBottom: '32px'
                                    }}
                                >
                                    Best for travelers who:
                                </p>

                                {/* Best For */}
                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '18px',
                                        marginBottom: '40px'
                                    }}
                                >
                                    {[
                                        'Already know exactly what they want',
                                        'Have significant luxury cruise experience',
                                        'Prefer fully self-managed travel planning'
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px'
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    minWidth: '44px',
                                                    borderRadius: '14px',
                                                    background: '#eef5f7',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#274472',
                                                    fontSize: '15px',
                                                    fontWeight: '700'
                                                }}
                                            >
                                                0{i + 1}
                                            </div>

                                            <span
                                                style={{
                                                    fontSize: '17px',
                                                    color: '#274472',
                                                    lineHeight: '1.6',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                {item}
                                            </span>

                                        </div>
                                    ))}
                                </div>

                                {/* Challenges */}
                                <div
                                    style={{
                                        background: '#f8fbfd',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        border: '1px solid rgba(39,68,114,0.06)'
                                    }}
                                >

                                    <h4
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            color: '#274472',
                                            margin: '0 0 22px 0'
                                        }}
                                    >
                                        Potential Challenges:
                                    </h4>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '12px'
                                        }}
                                    >
                                        {[
                                            'Limited personalized guidance',
                                            'Less strategic suite selection',
                                            'Difficulty comparing luxury lines objectively',
                                            'Increased planning responsibility'
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    padding: '12px 18px',
                                                    background: '#ffffff',
                                                    borderRadius: '40px',
                                                    border: '1px solid rgba(39,68,114,0.08)',
                                                    fontSize: '14px',
                                                    color: '#274472',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #274472 0%, #1c2f4a 100%)',
                                borderRadius: '28px',
                                padding: '42px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.35s ease',
                                cursor: 'pointer'
                            }}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 30px 70px rgba(15,28,46,0.18)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0px)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >

                            {/* Decorative Circle */}
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '260px',
                                    height: '260px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    top: '-100px',
                                    right: '-100px'
                                }}
                            ></div>

                            <div style={{ position: 'relative', zIndex: 2 }}>

                                <div
                                    style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '22px',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '28px'
                                    }}
                                >
                                    <Crown size={34} color="#ffffff" />
                                </div>

                                <h3
                                    style={{
                                        fontSize: '34px',
                                        color: '#ffffff',
                                        margin: '0 0 12px 0',
                                        fontWeight: '600'
                                    }}
                                >
                                    Booking Through a Luxury Cruise Advisor
                                </h3>

                                <p
                                    style={{
                                        fontSize: '17px',
                                        lineHeight: '1.8',
                                        color: 'rgba(255,255,255,0.78)',
                                        marginBottom: '32px'
                                    }}
                                >
                                    Best for travelers seeking:
                                </p>

                                {/* Benefits */}
                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '18px',
                                        marginBottom: '42px'
                                    }}
                                >
                                    {[
                                        'Personalized recommendations',
                                        'VIP-level planning support',
                                        'Luxury expertise',
                                        'Better itinerary matching',
                                        'Seamless travel coordination',
                                        'Long-term travel relationships'
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px'
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    minWidth: '44px',
                                                    borderRadius: '14px',
                                                    background: 'rgba(255,255,255,0.08)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    fontSize: '15px',
                                                    fontWeight: '700'
                                                }}
                                            >
                                                0{i + 1}
                                            </div>

                                            <span
                                                style={{
                                                    fontSize: '17px',
                                                    color: '#ffffff',
                                                    lineHeight: '1.6',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                {item}
                                            </span>

                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Highlight */}
                                <div
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.10)',
                                        borderRadius: '22px',
                                        padding: '30px'
                                    }}
                                >

                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '17px',
                                            lineHeight: '1.9',
                                            color: 'rgba(255,255,255,0.90)',
                                            fontWeight: '500'
                                        }}
                                    >
                                        For many affluent travelers, the time savings and expertise alone justify working with an advisor.
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
                                <span className="medi-prestige-initials">AH</span>
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


            {/* ── CTA SECTION ──────────────────────────────────────────────── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>

                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">

                        {/* TOP MINI TAG */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '12px 22px',
                                borderRadius: '60px',
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.10)',
                                backdropFilter: 'blur(10px)',
                                color: '#ffffff',
                                fontSize: '12px',
                                fontWeight: '700',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                marginBottom: '28px'
                            }}
                        >
                            MODERN ULTRA-LUXURY CRUISING
                        </div>

                        {/* HERO TITLE */}
                        <h2
                            className="medi-cta-heading-white"
                            style={{
                                maxWidth: '980px',
                                margin: '0 auto 24px',
                                lineHeight: '1.08',
                                fontSize: '72px',
                                fontWeight: '600',
                                letterSpacing: '-0.03em'
                            }}
                        >
                            Ready to Experience Explora Journeys?
                        </h2>

                        <div
                            style={{
                                width: '90px',
                                height: '4px',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.85)',
                                margin: '0 auto 34px'
                            }}
                        ></div>

                        {/* INTRO */}
                        <p
                            className="medi-cta-paragraph-white"
                            style={{
                                maxWidth: '820px',
                                margin: '0 auto 70px',
                                fontSize: '21px',
                                lineHeight: '1.9',
                                opacity: 0.92
                            }}
                        >
                            Luxury cruising is deeply personal.
                        </p>

                        {/* UNIQUE CURVED EXPERIENCE CARDS */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: '24px',
                                marginBottom: '90px'
                            }}
                        >
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
                                        position: 'relative',
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.10)',
                                        borderRadius: idx % 2 === 0
                                            ? '60px 24px 60px 24px'
                                            : '24px 60px 24px 60px',
                                        padding: '34px 28px',
                                        minHeight: '180px',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                        cursor: 'pointer'
                                    }}

                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) rotate(-1deg)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.11)';
                                        e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.18)';
                                    }}

                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0px) rotate(0deg)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >

                                    {/* Decorative Circle */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '110px',
                                            height: '110px',
                                            borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.05)',
                                            top: '-30px',
                                            right: '-20px'
                                        }}
                                    ></div>

                                    <div
                                        style={{
                                            position: 'relative',
                                            zIndex: 2
                                        }}
                                    >

                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '46px',
                                                height: '46px',
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.10)',
                                                color: '#ffffff',
                                                fontWeight: '700',
                                                fontSize: '15px',
                                                marginBottom: '28px'
                                            }}
                                        >
                                            0{idx + 1}
                                        </span>

                                        <h4
                                            style={{
                                                fontSize: '24px',
                                                lineHeight: '1.45',
                                                color: '#ffffff',
                                                margin: 0,
                                                fontWeight: '600'
                                            }}
                                        >
                                            {item}
                                        </h4>

                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* FLOATING GLASS PANEL */}
                        <div
                            style={{
                                position: 'relative',
                                maxWidth: '1120px',
                                margin: '0 auto 90px',
                                padding: '55px',
                                borderRadius: '38px',
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(18px)',
                                overflow: 'hidden'
                            }}
                        >

                            {/* Background Accent */}
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '340px',
                                    height: '340px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.04)',
                                    top: '-160px',
                                    right: '-100px'
                                }}
                            ></div>

                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    display: 'grid',
                                    gridTemplateColumns: '1.1fr 0.9fr',
                                    gap: '50px',
                                    alignItems: 'center'
                                }}
                            >

                                {/* LEFT CONTENT */}
                                <div>

                                    <h3
                                        style={{
                                            fontSize: '42px',
                                            lineHeight: '1.25',
                                            color: '#ffffff',
                                            margin: '0 0 26px 0',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Explora Journeys offers one of the most compelling introductions to modern ultra-luxury cruising.
                                    </h3>

                                    <p
                                        className="medi-cta-paragraph-white"
                                        style={{
                                            margin: 0,
                                            lineHeight: '1.9',
                                            opacity: 0.88
                                        }}
                                    >
                                        With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select the ideal luxury cruise experience based on their travel style and expectations.
                                    </p>

                                </div>

                                {/* RIGHT LIST */}
                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '18px'
                                    }}
                                >
                                    {[
                                        'Mediterranean luxury cruises',
                                        'Caribbean voyages',
                                        'Boutique ship experiences',
                                        'Wellness-focused travel',
                                        'Ultra-luxury ocean cruising'
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '18px',
                                                padding: '20px 22px',
                                                borderRadius: '20px',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.08)'
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                    borderRadius: '14px',
                                                    background: 'rgba(255,255,255,0.10)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    fontWeight: '700'
                                                }}
                                            >
                                                ✓
                                            </div>

                                            <span
                                                style={{
                                                    color: '#ffffff',
                                                    fontSize: '17px',
                                                    lineHeight: '1.6'
                                                }}
                                            >
                                                {item}
                                            </span>

                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                        {/* BOTTOM ACTION AREA */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto',
                                gap: '30px',
                                alignItems: 'center',
                                background: '#ffffff',
                                borderRadius: '34px',
                                padding: '42px',
                                marginBottom: '60px'
                            }}
                        >

                            {/* LEFT */}
                            <div>

                                <span
                                    style={{
                                        display: 'block',
                                        fontSize: '13px',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: '#274472',
                                        opacity: 0.7,
                                        marginBottom: '16px'
                                    }}
                                >
                                    Luxury Cruise Expertise
                                </span>

                                <h3
                                    style={{
                                        fontSize: '36px',
                                        lineHeight: '1.35',
                                        color: '#274472',
                                        margin: 0,
                                        fontWeight: '600',
                                        maxWidth: '760px'
                                    }}
                                >
                                    Trips &amp; Ships Luxury Travel provides expert guidance backed by real-world luxury travel expertise.
                                </h3>

                            </div>

                            {/* RIGHT */}
                            <button
                                className="medi-primary-cta-button"
                                style={{
                                    minWidth: '340px',
                                    minHeight: '70px',
                                    fontSize: '16px',
                                    justifyContent: 'center',
                                    transition: 'all 0.35s ease'
                                }}

                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.18)';
                                }}

                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0px)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Phone size={18} />
                                Schedule a Personalized Luxury Cruise Consultation Today
                            </button>

                        </div>

                        {/* FLOATING LINKS */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                gap: '18px'
                            }}
                        >
                            {[
                                'Explora Journeys Official Website',
                                'Cruise Lines International Association (CLIA)',
                                'Condé Nast Traveler',
                                'Travel Leaders Network'
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '14px 24px',
                                        borderRadius: '100px',
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.10)',
                                        color: 'rgba(255,255,255,0.88)',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.35s ease',
                                        cursor: 'pointer'
                                    }}

                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                    }}

                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0px)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default BookExplora