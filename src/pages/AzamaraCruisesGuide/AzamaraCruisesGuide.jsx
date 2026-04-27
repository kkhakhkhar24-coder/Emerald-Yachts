import Navbar from '../../components/Navbar/Navbar'
import './AzamaraCruisesGuide.css'
import { Ship, MapPin, Star, Clock, DollarSign, Users, CheckCircle, XCircle, ArrowRight, Compass, Sparkles, Anchor, Calendar, Heart, ShieldCheck, Utensils, Gem, Wallet, Hotel, TrendingUp, AlertCircle, ChevronRight, Home, Crown, Coffee, Wine, Landmark, Music, Leaf, Sun, Moon, Plane, Camera, HeartPulse, Briefcase, CompassIcon, MessageSquare, Phone, Wind, Plus, Minus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import profilePicture from '../../assets/image.jpg'
// Images from AzamaraCruisesGuide
import heroImage1 from '../../assets/AzamaraCruisesGuide/Hero1.webp'
import heroImage2 from '../../assets/AzamaraCruisesGuide/Hero2.webp'
import heroImage3 from '../../assets/AzamaraCruisesGuide/Hero3.webp'
import cruiseShipImage from '../../assets/AzamaraCruisesGuide/Azamara_operates.webp'
import portImage from '../../assets/AzamaraCruisesGuide/Stays_Overnight.webp'
import smallShipImage from '../../assets/AzamaraCruisesGuide/Small_Ship.webp'
import culturalImage from '../../assets/AzamaraCruisesGuide/Cultural_Integration.webp'
import inclusionImage from '../../assets/AzamaraCruisesGuide/Simplified_Inclusions.webp'

function AzamaraCruisesGuide() {
    const [activeFaq, setActiveFaq] = useState(null)
    const [currentHero, setCurrentHero] = useState(0)

    const heroImages = [heroImage1, heroImage2, heroImage3]

    useEffect(() => {
        const heroTimer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % (heroImages.length || 1))
        }, 5000)

        return () => clearInterval(heroTimer)
    }, [heroImages.length])

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "Is Azamara a luxury cruise line or premium?",
            answer: "Azamara is considered upper premium or boutique luxury, offering a more immersive experience than premium lines but fewer inclusions than ultra-luxury brands."
        },
        {
            question: "Is Azamara worth the money?",
            answer: "Yes, particularly for travelers who value destination immersion and longer stays in port."
        },
        {
            question: "What is included on Azamara cruises?",
            answer: "Gratuities, select beverages, cultural programming, and some onboard experiences are included."
        },
        {
            question: "Are Azamara cruises all-inclusive?",
            answer: "They are partially inclusive but not fully all-inclusive like ultra-luxury cruise lines."
        },
        {
            question: "What is the average age on Azamara cruises?",
            answer: "Most guests are 50+, with a focus on experienced travelers."
        },
        {
            question: "Does Azamara have formal nights?",
            answer: "No, Azamara maintains a relaxed, country club casual dress code."
        },
        {
            question: "Are drinks included on Azamara cruises?",
            answer: "Yes, standard beverages such as wine, beer, and spirits are included."
        },
        {
            question: "What are the best Azamara itineraries?",
            answer: "Top itineraries include the Mediterranean, Japan, South Africa, and Northern Europe."
        },
        {
            question: "How does Azamara compare to Viking Ocean Cruises?",
            answer: "Azamara offers smaller ships and more immersive itineraries, while Viking provides a more structured cultural experience."
        },
        {
            question: "Is Azamara good for families?",
            answer: "No, it is primarily designed for adult travelers."
        },
        {
            question: "What are the pros and cons of Azamara cruises?",
            answer: "Pros include immersive itineraries and smaller ships. Cons include fewer inclusions compared to ultra-luxury lines."
        },
        {
            question: "Do Azamara cruises include shore excursions?",
            answer: "Some experiences are included, but many excursions are optional and available at an additional cost."
        },
        {
            question: "Do Azamara cruises offer overnight stays in port?",
            answer: "Yes, overnight stays are a key part of their itinerary design."
        },
        {
            question: "What type of traveler is Azamara best for?",
            answer: "Travelers who value cultural experiences, unique destinations, and a relaxed onboard environment."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/azamara-cruises-guide#webpage",
                "url": "https://www.tripsandships.com/azamara-cruises-guide",
                "name": "Azamara Cruises 2026–2027 Guide: Small Ship Luxury, Itineraries, Pricing & Reviews",
                "headline": "Azamara Cruises 2026–2027 Guide: Small Ship Luxury, Itineraries, Pricing & Reviews",
                "description": "Complete Azamara Cruises 2026–2027 guide. Explore itineraries, pricing, reviews, and whether Azamara is worth it. Expert insights from a luxury travel advisor.",
                "isPartOf": { "@id": "https://www.tripsandships.com/#website" },
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/azamara-cruises-guide#faq" }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                "url": "https://www.tripsandships.com/",
                "name": "Trips & Ships Luxury Travel",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" }
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#organization" },
                "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel with over 40 years in the travel industry and travel experience across 121 countries and territories. She specializes in luxury and expedition travel.",
                "sameAs": ["https://www.travelleaders.com/agent/17255"]
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/logo.png"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/azamara-cruises-guide#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Cruises",
                        "item": "https://www.tripsandships.com/cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Azamara Cruises Guide",
                        "item": "https://www.tripsandships.com/azamara-cruises-guide"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/azamara-cruises-guide#faq",
                "mainEntity": faqs.map(faq => ({
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
                <title>Azamara Cruises 2026–2027 Guide: Small Ship Luxury, Itineraries, Pricing & Reviews</title>
                <meta name="description" content="Complete Azamara Cruises 2026–2027 guide. Explore itineraries, pricing, reviews, and whether Azamara is worth it. Expert insights from a luxury travel advisor." />
                <meta name="keywords" content="Azamara cruises, small ship cruises, luxury cruise line, Azamara itineraries, Azamara pricing, Azamara reviews, 2026 cruises, 2027 cruises" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                {/* Preload first hero image for better performance */}
                <link rel="preload" as="image" href={heroImages[0]} />
            </Helmet>

            <Navbar />

            {/* ── HERO SECTION ─────────────────────────────────────────────── */}
            <section className="azamara-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`azamara-hero-bg ${index === currentHero ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="azamara-hero-overlay"></div>

                <div className="azamara-inner azamara-hero-inner">
                    <h1 className="azamara-h1">
                        Azamara Cruises Guide 2026–2027 <br />Small Ship Luxury and <br />Destination Immersion
                    </h1>
                </div>
            </section>

            {/* ── IS AZAMARA WORTH IT ──────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-white">
                <div className="azamara-inner">
                    <div className="azamara-worth-layout">

                        {/* LEFT: Sticky heading */}
                        <div className="azamara-worth-heading">
                            <h2 className="azamara-h2">Is Azamara Worth It in 2026–2027?</h2>
                            <div className="azamara-bar azamara-bar-left"></div>
                            <p className="azamara-p azamara-worth-intro">
                                Short answer: yes, for the right traveler.
                            </p>
                            <p className="azamara-p azamara-worth-body">
                                Azamara is one of the most strategic cruise products in the market right now because it delivers something most cruise lines do not—time and depth in destination.
                            </p>
                        </div>

                        {/* RIGHT: Two verdict panels */}
                        <div className="azamara-worth-panels">

                            {/* YES Panel */}
                            <div className="azamara-verdict-panel azamara-verdict-yes">
                                <div className="azamara-verdict-header">
                                    <CheckCircle size={22} className="azamara-verdict-icon" />
                                    <h3 className="azamara-h3">If you want:</h3>
                                </div>
                                <ul className="azamara-verdict-list">
                                    <li><Clock size={18} strokeWidth={1.8} /><span>More time in port</span></li>
                                    <li><MapPin size={18} strokeWidth={1.8} /><span>Overnight stays in major cities</span></li>
                                    <li><Ship size={18} strokeWidth={1.8} /><span>Smaller ships with fewer crowds</span></li>
                                    <li><Compass size={18} strokeWidth={1.8} /><span>A more immersive cultural experience</span></li>
                                </ul>
                                <div className="azamara-verdict-footer">
                                    <p className="azamara-p">Azamara consistently outperforms larger ships and even some luxury brands.</p>
                                </div>
                            </div>

                            {/* NO Panel */}
                            <div className="azamara-verdict-panel azamara-verdict-no">
                                <div className="azamara-verdict-header">
                                    <XCircle size={22} className="azamara-verdict-icon" />
                                    <h3 className="azamara-h3">If you are looking for:</h3>
                                </div>
                                <ul className="azamara-verdict-list">
                                    <li><XCircle size={18} strokeWidth={1.8} /><span>Large-scale entertainment</span></li>
                                    <li><XCircle size={18} strokeWidth={1.8} /><span>High-energy nightlife</span></li>
                                    <li><XCircle size={18} strokeWidth={1.8} /><span>A resort-style cruise experience</span></li>
                                </ul>
                                <div className="azamara-verdict-footer">
                                    <p className="azamara-p">This is not the right fit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES AZAMARA DIFFERENT (Waterfall Masonry Layout) ─────────────────────────────── */}
            <section className="azamara-section azamara-bg-soft">
                <div className="azamara-inner">
                    <div className="azamara-different-header-center">
                        <h2 className="azamara-h2" style={{ textAlign: 'center' }}>What Makes Azamara Cruises Different</h2>
                        <div className="azamara-bar azamara-bar-center"></div>
                        <p className="azamara-p azamara-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
                            Azamara is built around destination immersion rather than onboard spectacle.
                        </p>
                    </div>

                    <div className="azamara-waterfall-container">
                        {/* Column 1 */}
                        <div className="azamara-waterfall-col">
                            {/* Card 1 */}
                            <div className="azamara-waterfall-card">
                                <div className="azamara-waterfall-image">
                                    <img src={portImage} alt="Port with cruise ship at sunset" />
                                </div>
                                <div className="azamara-waterfall-icon">
                                    <Clock size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-h3">Longer Stays and Overnight Ports</h3>
                                <p className="azamara-p">
                                    Azamara itineraries are designed to give travelers more time in port, including overnight stays that allow for deeper exploration.
                                </p>
                            </div>

                            {/* Card 3 (Dark Navy Style) */}
                            <div className="azamara-waterfall-card azamara-bg-navy">
                                <div className="azamara-waterfall-image">
                                    <img src={culturalImage} alt="Cultural event on cruise ship" />
                                </div>
                                <div className="azamara-waterfall-icon azamara-icon-white">
                                    <Compass size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-h3-white">Cultural Integration</h3>
                                <p className="azamara-p-white">
                                    Azamara integrates the destination into the onboard experience through curated programming, events, and local partnerships.
                                </p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="azamara-waterfall-col azamara-col-offset">
                            {/* Card 2 */}
                            <div className="azamara-waterfall-card">
                                <div className="azamara-waterfall-image">
                                    <img src={smallShipImage} alt="Small luxury cruise ship" />
                                </div>
                                <div className="azamara-waterfall-icon">
                                    <Ship size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-h3">Small Ship Experience</h3>
                                <p className="azamara-p">With approximately 700 guests per ship, Azamara offers:</p>
                                <ul className="azamara-waterfall-list">
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Personalized service</span></li>
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Easier embarkation and disembarkation</span></li>
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Access to smaller, less crowded ports</span></li>
                                </ul>
                            </div>

                            {/* Card 4 */}
                            <div className="azamara-waterfall-card">
                                <div className="azamara-waterfall-image">
                                    <img src={inclusionImage} alt="Luxury cruise interior" />
                                </div>
                                <div className="azamara-waterfall-icon">
                                    <CheckCircle size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-h3">Simplified Inclusions</h3>
                                <p className="azamara-p">Cruise fares include:</p>
                                <ul className="azamara-waterfall-list">
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Gratuities</span></li>
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Select beverages</span></li>
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Cultural programming</span></li>
                                    <li><CheckCircle size={18} strokeWidth={2} /><span>Shuttle services in many ports</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD BOOK (New Split Layout) ──────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-white">
                <div className="azamara-inner">
                    <div className="azamara-who-split-layout">
                        {/* LEFT CONTENT */}
                        <div className="azamara-who-content">
                            <h2 className="azamara-h2">Who Should Book Azamara Cruises</h2>
                            <div className="azamara-bar azamara-bar-left"></div>
                            <p className="azamara-p azamara-subtitle">
                                Azamara is best suited for travelers who prioritize destination over ship.
                            </p>
                        </div>

                        {/* RIGHT GRID */}
                        <div className="azamara-who-cards">
                            <div className="azamara-who-card">
                                <div className="azamara-who-card-icon">
                                    <Users size={28} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-who-card-text">Well-traveled couples and empty nesters</p>
                            </div>

                            <div className="azamara-who-card azamara-who-card-offset">
                                <div className="azamara-who-card-icon">
                                    <TrendingUp size={28} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-who-card-text">Clients moving from premium into luxury travel</p>
                            </div>

                            <div className="azamara-who-card">
                                <div className="azamara-who-card-icon">
                                    <MapPin size={28} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-who-card-text">Travelers who value culture, history, and local experiences</p>
                            </div>

                            <div className="azamara-who-card azamara-who-card-offset">
                                <div className="azamara-who-card-icon">
                                    <Sparkles size={28} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-who-card-text">Guests who prefer a relaxed and refined onboard environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD NOT BOOK (New Dark Glass Layout) ──────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-dark">
                <div className="azamara-bg-pattern"></div>
                <div className="azamara-overlay"></div>
                <div className="azamara-inner azamara-relative">
                    <div className="azamara-not-fit-wrapper">
                        <div className="azamara-not-fit-header-center">
                            <h2 className="azamara-h2-white" style={{ textAlign: 'center' }}>Who Should NOT Book Azamara Cruises</h2>
                            <div className="azamara-bar-white azamara-bar-center"></div>
                            <p className="azamara-p-white azamara-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 16px' }}>
                                This is not a one-size-fits-all product.
                            </p>
                            <h3 className="azamara-h3-white" style={{ textAlign: 'center', marginBottom: '48px', color: '#cbd5e1' }}>
                                Azamara is not ideal for:
                            </h3>
                        </div>

                        <div className="azamara-not-fit-grid">
                            <div className="azamara-not-fit-card">
                                <div className="azamara-not-fit-icon">
                                    <XCircle size={32} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-not-fit-text">Families with young children</p>
                            </div>

                            <div className="azamara-not-fit-card">
                                <div className="azamara-not-fit-icon">
                                    <XCircle size={32} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-not-fit-text">Travelers seeking high-energy nightlife or entertainment</p>
                            </div>

                            <div className="azamara-not-fit-card">
                                <div className="azamara-not-fit-icon">
                                    <XCircle size={32} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-not-fit-text">Clients who want a large ship with extensive amenities</p>
                            </div>

                            <div className="azamara-not-fit-card">
                                <div className="azamara-not-fit-icon">
                                    <XCircle size={32} strokeWidth={1.5} />
                                </div>
                                <p className="azamara-not-fit-text">First-time cruisers expecting a resort-style experience</p>
                            </div>
                        </div>

                        <div className="azamara-not-fit-footer">
                            <p className="azamara-p-white azamara-conclusion" style={{ textAlign: 'center', maxWidth: '800px', margin: '48px auto 0' }}>
                                Being clear about fit is what leads to a better experience and higher satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST ITINERARIES (New Editorial List) ─────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-soft">
                <div className="azamara-inner">
                    <div className="azamara-dest-split">
                        <div className="azamara-sticky-col">
                            <h2 className="azamara-h2">Best Azamara Itineraries for 2026–2027</h2>
                            <div className="azamara-bar azamara-bar-left"></div>
                            <p className="azamara-p azamara-subtitle">
                                Azamara performs best in destinations where time in port matters.
                            </p>
                        </div>

                        <div className="azamara-dest-list-col">
                            <div className="azamara-dest-card">
                                <span className="azamara-dest-number">01</span>
                                <div className="azamara-dest-icon">
                                    <Landmark size={32} strokeWidth={1.5} />
                                </div>
                                <div className="azamara-dest-content">
                                    <h3 className="azamara-h3">Mediterranean Cruises</h3>
                                    <p className="azamara-p">Italy, Greece, Croatia, and the French Riviera with late departures and overnight stays.</p>
                                </div>
                                <div className="azamara-dest-arrow">
                                    <ChevronRight size={24} />
                                </div>
                            </div>

                            <div className="azamara-dest-card">
                                <span className="azamara-dest-number">02</span>
                                <div className="azamara-dest-icon">
                                    <Sun size={32} strokeWidth={1.5} />
                                </div>
                                <div className="azamara-dest-content">
                                    <h3 className="azamara-h3">Japan and Asia Cruises</h3>
                                    <p className="azamara-p">Access to smaller ports and cultural destinations, including routes that allow access to Kyoto via Kobe.</p>
                                </div>
                                <div className="azamara-dest-arrow">
                                    <ChevronRight size={24} />
                                </div>
                            </div>

                            <div className="azamara-dest-card">
                                <span className="azamara-dest-number">03</span>
                                <div className="azamara-dest-icon">
                                    <Compass size={32} strokeWidth={1.5} />
                                </div>
                                <div className="azamara-dest-content">
                                    <h3 className="azamara-h3">South Africa and Africa Itineraries</h3>
                                    <p className="azamara-p">Longer, land-style experiences combined with cruising.</p>
                                </div>
                                <div className="azamara-dest-arrow">
                                    <ChevronRight size={24} />
                                </div>
                            </div>

                            <div className="azamara-dest-card">
                                <span className="azamara-dest-number">04</span>
                                <div className="azamara-dest-icon">
                                    <MapPin size={32} strokeWidth={1.5} />
                                </div>
                                <div className="azamara-dest-content">
                                    <h3 className="azamara-h3">Northern Europe and the Baltics</h3>
                                    <p className="azamara-p">More immersive access to cities with extended port time compared to larger ships.</p>
                                </div>
                                <div className="azamara-dest-arrow">
                                    <ChevronRight size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHIPS OVERVIEW (New Two-Panel Layout) ──────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-white">
                <div className="azamara-inner">
                    <h2 className="azamara-h2" style={{ textAlign: 'center' }}>Azamara Ships Overview</h2>
                    <div className="azamara-bar" style={{ margin: '18px auto 48px auto' }}></div>

                    <div className="azamara-ships-two-panel">
                        {/* LEFT PANEL - Fleet */}
                        <div className="azamara-ships-panel-left">
                            <div className="azamara-ships-image">
                                <img src={cruiseShipImage} alt="Azamara cruise ship at sea" />
                            </div>
                            <p className="azamara-p-white azamara-subtitle" style={{ textAlign: 'center', marginTop: '24px' }}>
                                Azamara operates four small ships
                            </p>

                            <div className="azamara-ships-fleet-grid">
                                <div className="azamara-ship-name-card">
                                    <div className="azamara-ship-name-icon">
                                        <Anchor size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="azamara-ship-name-text">Azamara Journey</span>
                                </div>
                                <div className="azamara-ship-name-card">
                                    <div className="azamara-ship-name-icon">
                                        <Anchor size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="azamara-ship-name-text">Azamara Quest</span>
                                </div>
                                <div className="azamara-ship-name-card">
                                    <div className="azamara-ship-name-icon">
                                        <Anchor size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="azamara-ship-name-text">Azamara Pursuit</span>
                                </div>
                                <div className="azamara-ship-name-card">
                                    <div className="azamara-ship-name-icon">
                                        <Anchor size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="azamara-ship-name-text">Azamara Onward</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Onboard */}
                        <div className="azamara-ships-panel-right">
                            <h3 className="azamara-h3" style={{ textAlign: 'center' }}>What to Expect Onboard</h3>
                            <div className="azamara-bar" style={{ margin: '18px auto 24px auto' }}></div>

                            <div className="azamara-onboard-feature-list">
                                <div className="azamara-onboard-feature">
                                    <div className="azamara-onboard-feature-icon">
                                        <Gem size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="azamara-onboard-feature-text">Classic, elegant design</p>
                                </div>
                                <div className="azamara-onboard-feature">
                                    <div className="azamara-onboard-feature-icon">
                                        <Users size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="azamara-onboard-feature-text">High crew-to-guest ratio</p>
                                </div>
                                <div className="azamara-onboard-feature">
                                    <div className="azamara-onboard-feature-icon">
                                        <Utensils size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="azamara-onboard-feature-text">Strong culinary program</p>
                                </div>
                                <div className="azamara-onboard-feature">
                                    <div className="azamara-onboard-feature-icon">
                                        <Coffee size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="azamara-onboard-feature-text">Intimate lounges and social spaces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-soft">
                <div className="azamara-inner">
                    <div className="azamara-comparison-wrapper">
                        <div className="azamara-comparison-header">
                            <h2 className="azamara-h2">Azamara vs Viking vs Seabourn</h2>
                            <div className="azamara-bar azamara-bar-center" style={{ margin: '0 auto 48px auto' }}></div>
                        </div>

                        <div className="azamara-table-container">
                            <table className="azamara-comparison-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Azamara</th>
                                        <th>Viking Ocean</th>
                                        <th>Seabourn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ship Size</td>
                                        <td>Small (700 guests)</td>
                                        <td>Mid-size</td>
                                        <td>Small</td>
                                    </tr>
                                    <tr>
                                        <td>Destination Focus</td>
                                        <td>Very High</td>
                                        <td>High</td>
                                        <td>Moderate</td>
                                    </tr>
                                    <tr>
                                        <td>Overnight Ports</td>
                                        <td>Yes</td>
                                        <td>Limited</td>
                                        <td>Limited</td>
                                    </tr>
                                    <tr>
                                        <td>Inclusions</td>
                                        <td>Partial</td>
                                        <td>Moderate</td>
                                        <td>All-inclusive</td>
                                    </tr>
                                    <tr>
                                        <td>Price Range</td>
                                        <td>Moderate</td>
                                        <td>Upper Moderate</td>
                                        <td>Luxury</td>
                                    </tr>
                                    <tr>
                                        <td>Best For</td>
                                        <td>Cultural immersion</td>
                                        <td>Structured luxury</td>
                                        <td>Ultra-luxury</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="azamara-p azamara-conclusion" style={{ textAlign: 'center', marginTop: '40px', fontSize: '20px', fontWeight: '500', color: 'var(--navy)' }}>
                            Azamara sits in a unique position between premium and luxury, making it an ideal step-up product.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PRICING AND VALUE (Dark Glassmorphism) ────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-dark">
                <div className="azamara-bg-pattern"></div>
                <div className="azamara-overlay"></div>
                <div className="azamara-inner azamara-relative">
                    <div className="azamara-pricing-glass-wrapper">

                        <div className="azamara-pricing-header-glass">
                            <h2 className="azamara-h2-white">Azamara Pricing and Value for 2026–2027</h2>
                            <div className="azamara-bar-white"></div>
                        </div>

                        {/* Top Hero Pricing Card */}
                        <div className="azamara-price-hero-card">
                            <div className="azamara-price-hero-label">Typical Pricing</div>
                            <div className="azamara-price-hero-amount">
                                $2,500 <span>to</span> $6,500
                            </div>
                            <div className="azamara-price-hero-note">per person for 7 to 12 nights</div>

                            <div className="azamara-price-hero-higher">
                                <TrendingUp size={20} strokeWidth={2} />
                                Higher for longer or more exotic itineraries
                            </div>
                        </div>

                        {/* Bottom Split Panels */}
                        <div className="azamara-pricing-split">

                            {/* Value Panel */}
                            <div className="azamara-glass-panel">
                                <h3 className="azamara-glass-h3">Why Clients Perceive Strong Value</h3>
                                <ul className="azamara-value-glass-list">
                                    <li className="azamara-value-glass-item">
                                        <div className="azamara-value-glass-icon"><MapPin size={24} /></div>
                                        <span>More time in port increases overall experience</span>
                                    </li>
                                    <li className="azamara-value-glass-item">
                                        <div className="azamara-value-glass-icon"><DollarSign size={24} /></div>
                                        <span>Fewer onboard upsells compared to larger ships</span>
                                    </li>
                                    <li className="azamara-value-glass-item">
                                        <div className="azamara-value-glass-icon"><Ship size={24} /></div>
                                        <span>Smaller ship experience feels more personalized</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Guidance Panel */}
                            <div className="azamara-glass-panel">
                                <h3 className="azamara-glass-h3">Where Guidance Matters</h3>
                                <p className="azamara-overspend-glass-p">Clients can overspend on:</p>
                                <div className="azamara-overspend-glass-list">
                                    <div className="azamara-overspend-glass-item">
                                        <AlertCircle size={20} /> Shore excursions
                                    </div>
                                    <div className="azamara-overspend-glass-item">
                                        <AlertCircle size={20} /> Premium beverage packages
                                    </div>
                                    <div className="azamara-overspend-glass-item">
                                        <AlertCircle size={20} /> Last-minute bookings
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="azamara-advisor-glass-note">
                            Working with an experienced advisor ensures the right balance of value and experience.
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST ALTERNATIVES (Gallery Row Layout) ────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-soft">
                <div className="azamara-inner">
                    <div className="azamara-alternatives-gallery-wrapper">

                        <div className="azamara-alternatives-header-center">
                            <h2 className="azamara-h2" style={{ textAlign: 'center' }}>Best Alternatives to Azamara Cruises</h2>
                            <div className="azamara-bar azamara-bar-center" style={{ marginBottom: '24px' }}></div>
                            <p className="azamara-p" style={{ textAlign: 'center', fontSize: '20px', maxWidth: '700px', margin: '0 auto 60px' }}>
                                If Azamara is not the perfect fit for your style, we frequently guide our discerning clients toward:
                            </p>
                        </div>

                        <div className="azamara-alternatives-4col-grid">

                            {/* Viking */}
                            <div className="azamara-alt-gallery-card">
                                <div className="azamara-alt-gallery-icon-wrap">
                                    <Ship size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-alt-gallery-title">Viking Ocean Cruises</h3>
                                <div className="azamara-alt-gallery-divider"></div>
                                <p className="azamara-alt-gallery-desc">for structured cultural experiences</p>
                            </div>

                            {/* Seabourn */}
                            <div className="azamara-alt-gallery-card">
                                <div className="azamara-alt-gallery-icon-wrap">
                                    <Crown size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-alt-gallery-title">Seabourn</h3>
                                <div className="azamara-alt-gallery-divider"></div>
                                <p className="azamara-alt-gallery-desc">for fully all-inclusive luxury</p>
                            </div>

                            {/* Windstar */}
                            <div className="azamara-alt-gallery-card">
                                <div className="azamara-alt-gallery-icon-wrap">
                                    <Wind size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-alt-gallery-title">Windstar Cruises</h3>
                                <div className="azamara-alt-gallery-divider"></div>
                                <p className="azamara-alt-gallery-desc">for yacht-style sailing</p>
                            </div>

                            {/* Explora */}
                            <div className="azamara-alt-gallery-card">
                                <div className="azamara-alt-gallery-icon-wrap">
                                    <Gem size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="azamara-alt-gallery-title">Explora Journeys</h3>
                                <div className="azamara-alt-gallery-divider"></div>
                                <p className="azamara-alt-gallery-desc">for modern luxury design and wellness</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY WE RECOMMEND (Editorial Profile Feature) ─────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-white">
                <div className="azamara-inner">

                    <div className="azamara-recommend-header-center">
                        <h2 className="azamara-h2" style={{ textAlign: 'center' }}>Why We Recommend Azamara</h2>
                        <div className="azamara-bar azamara-bar-center" style={{ marginBottom: '60px' }}></div>
                    </div>

                    <div className="azamara-editorial-profile-container">
                        {/* Left: Image & Credentials */}
                        <div className="azamara-editorial-profile-left">
                            <div className="azamara-editorial-img-wrapper">
                                <img src={profilePicture} alt="Angela Hughes" className="azamara-editorial-img" />
                            </div>
                            <div className="azamara-editorial-credentials">
                                <h3 className="azamara-editorial-name">Angela Hughes</h3>
                                <p className="azamara-editorial-title">CEO, Trips & Ships Luxury Travel</p>
                                <p className="azamara-editorial-award">Luxury Travel Influencer of the Year | Travel Leaders Network</p>
                            </div>
                        </div>

                        {/* Right: The Quote and Details */}
                        <div className="azamara-editorial-profile-right">
                            <div className="azamara-editorial-quote-mark">"</div>
                            <h3 className="azamara-editorial-massive-quote">
                                After more than 40 years in the travel industry and working with cruise products across the globe, Azamara continues to be one of the most effective tools for the right client.
                            </h3>

                            <div className="azamara-editorial-divider"></div>

                            <div className="azamara-editorial-use-cases">
                                <span className="azamara-editorial-use-label">We use Azamara for:</span>
                                <ul className="azamara-editorial-use-list">
                                    <li><TrendingUp size={18} /> Travelers transitioning into luxury</li>
                                    <li><MapPin size={18} /> Clients seeking unique itineraries</li>
                                    <li><Compass size={18} /> Destination-first travel experiences</li>
                                </ul>
                            </div>

                            <div className="azamara-editorial-conclusion-box">
                                <p><strong>It is not about selling a cruise.</strong></p>
                                <p>It is about matching the right experience to the right traveler.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── READY TO PLAN (Premium Invitation) ────────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-dark2">
                <div className="azamara-bg-pattern"></div>
                <div className="azamara-inner azamara-relative">
                    <div className="azamara-plan-premium-wrapper">

                        <div className="azamara-plan-premium-header">
                            <h2 className="azamara-h2-white" style={{ textAlign: 'center' }}>Ready to Plan Your Azamara Cruise</h2>
                            <div className="azamara-bar-white azamara-bar-center" style={{ margin: '0 auto 24px' }}></div>
                            <p className="azamara-p-white" style={{ textAlign: 'center', fontSize: '20px', maxWidth: '600px', margin: '0 auto 60px' }}>
                                If you are considering Azamara, our dedicated advisors will:
                            </p>
                        </div>

                        <div className="azamara-plan-premium-steps">
                            <div className="azamara-plan-premium-step">
                                <div className="azamara-plan-step-icon"><MapPin size={28} /></div>
                                <h3 className="azamara-plan-step-title">Match Itinerary</h3>
                                <p className="azamara-plan-step-desc">Match you with the right itinerary</p>
                            </div>

                            <div className="azamara-plan-step-arrow">
                                <ChevronRight size={32} color="rgba(255,255,255,0.2)" strokeWidth={1} />
                            </div>

                            <div className="azamara-plan-premium-step">
                                <div className="azamara-plan-step-icon"><Hotel size={28} /></div>
                                <h3 className="azamara-plan-step-title">Curate Cabins</h3>
                                <p className="azamara-plan-step-desc">Recommend the best cabins and timing</p>
                            </div>

                            <div className="azamara-plan-step-arrow">
                                <ChevronRight size={32} color="rgba(255,255,255,0.2)" strokeWidth={1} />
                            </div>

                            <div className="azamara-plan-premium-step">
                                <div className="azamara-plan-step-icon"><DollarSign size={28} /></div>
                                <h3 className="azamara-plan-step-title">Maximize Value</h3>
                                <p className="azamara-plan-step-desc">Maximize value through available amenities</p>
                            </div>
                        </div>

                        <div className="azamara-plan-premium-cta">
                            <button className="azamara-btn-premium-white">
                                <Phone size={20} strokeWidth={2} />
                                Contact our team to begin planning your 2026–2027 cruise
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
            <section className="azamara-section azamara-bg-soft">
                <div className="azamara-inner">
                    <div className="azamara-faq-header" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 className="azamara-h2">Azamara Cruises FAQs <br /> (2026–2027 Guide)</h2>
                        <div className="azamara-bar" style={{ marginBottom: '40px' }}></div>
                    </div>

                    <div className="azamara-faq-simple-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div
                                    key={index}
                                    className={`azamara-faq-item-simple ${isOpen ? "azamara-open" : ""}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="azamara-faq-q-simple">
                                        <span>{faq.question}</span>
                                        <span className="azamara-faq-icon-simple">
                                            {isOpen ? (
                                                <Minus size={20} strokeWidth={1.5} />
                                            ) : (
                                                <Plus size={20} strokeWidth={1.5} />
                                            )}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="azamara-faq-a-simple">
                                            <div className="azamara-faq-a-inner-simple">{faq.answer}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AzamaraCruisesGuide