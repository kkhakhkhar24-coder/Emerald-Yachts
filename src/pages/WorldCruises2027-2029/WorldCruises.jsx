import Navbar from '../../components/Navbar/Navbar'
import './WorldCruises.css'
import image from "../../assets/image.webp";
import cruiseView from '../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp'
import luxuryRefined from '../../assets/HomePage/Refined_Luxury.jpeg'
import singaporeSkyline from '../../assets/DistinctiveVoyageSailings/singapore-marina-bay-sands-skyline-luxury-travel.png'
import cruiseSuite from '../../assets/SecondPage/Suite.webp'
import casualDining from '../../assets/AzamaraCabinsGuide/Casual_Dining.webp'

import {
    Ship, MapPin, Star, Clock, DollarSign, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, ShieldCheck, Gem,
    TrendingUp, ChevronRight, Crown, Plane, Phone, Plus, Minus,
    Globe, LayoutList, Hotel, Wallet, AlertCircle, Home,
    Award, Heart, Utensils, Navigation, Shield, Sun, Activity, Music
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/HomePage/HomePage1.webp'
import hero2 from '../../assets/SecondPage/SecondPage2.webp'
import hero3 from '../../assets/SecondPage/SecondPage6.webp'

function WorldCruisesGuide() {
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const cruiseLines = [
        { name: 'Regent Seven Seas', category: 'Ultra-Luxury', price: '$$$$', inclusions: 'Fully inclusive', bestFit: 'Best overall value', tier: 'ultra' },
        { name: 'Silversea Cruises', category: 'Ultra-Luxury', price: '$$$$', inclusions: 'High inclusions', bestFit: 'Exploration', tier: 'ultra' },
        { name: 'Seabourn Cruise Line', category: 'Ultra-Luxury', price: '$$$$', inclusions: 'Luxury inclusions', bestFit: 'Intimate ships', tier: 'ultra' },
        { name: 'Crystal Cruises', category: 'Ultra-Luxury', price: '$$$$', inclusions: 'Refined', bestFit: 'Repeat cruisers', tier: 'ultra' },
        { name: 'Viking Ocean Cruises', category: 'Premium', price: '$$$', inclusions: 'Moderate', bestFit: 'Cultural focus', tier: 'premium' },
        { name: 'Oceania Cruises', category: 'Premium', price: '$$$', inclusions: 'Culinary', bestFit: 'Food travelers', tier: 'premium' },
        { name: 'Cunard Line', category: 'Premium', price: '$$$', inclusions: 'Classic', bestFit: 'Traditional', tier: 'premium' },
        { name: 'Azamara Cruises', category: 'Premium', price: '$$', inclusions: 'Immersive', bestFit: 'Long stays', tier: 'premium' },
        { name: 'Explora Journeys', category: 'Luxury', price: '$$$$', inclusions: 'Modern', bestFit: 'New luxury', tier: 'luxury' },
        { name: 'Holland America Line', category: 'Premium', price: '$$', inclusions: 'Moderate', bestFit: 'Legacy', tier: 'premium' },
        { name: 'Princess Cruises', category: 'Premium', price: '$$', inclusions: 'Moderate', bestFit: 'Classic', tier: 'premium' },
        { name: 'Royal Caribbean International', category: 'Mainstream', price: '$$', inclusions: 'Minimal', bestFit: 'Accessibility', tier: 'mainstream' },
        { name: 'MSC Cruises', category: 'Mainstream', price: '$$', inclusions: 'Minimal', bestFit: 'Global', tier: 'mainstream' },
        { name: 'Costa Cruises', category: 'Mainstream', price: '$', inclusions: 'Minimal', bestFit: 'European', tier: 'mainstream' },
    ]

    const faqs = [
        { question: 'Is a world cruise really worth $100,000 or more?', answer: 'For the right traveler, yes. When you compare the cost of booking dozens of international flights, hotels, guides, and logistics independently, a world cruise often delivers better overall value and significantly less stress. The key is choosing the right cruise line for how you travel.' },
        { question: 'What is the biggest mistake people make when booking a world cruise?', answer: 'Choosing based on price instead of inclusions and experience. A lower upfront price often results in significantly higher spending onboard and a very different experience over 120+ days.' },
        { question: 'How far in advance do world cruises actually sell out?', answer: 'Top suites on major world cruises often sell out within weeks, sometimes before public release. Repeat guests and loyal clients frequently secure inventory early, which is why planning 18 to 24 months in advance is critical.' },
        { question: 'What is the difference between a world cruise and a grand voyage?', answer: 'A world cruise typically circumnavigates the globe over 3 to 6 months, while a grand voyage covers a large region or partial route. Many travelers start with a segment before committing to a full world cruise.' },
        { question: 'Which cruise line is best for a first world cruise?', answer: 'Most first-time world cruisers choose ultra-luxury lines like Regent Seven Seas Cruises or Silversea Cruises because of the inclusions, service, and ease of experience.' },
        { question: 'Do people get bored on a world cruise?', answer: 'Not typically, but the experience shifts. It becomes a lifestyle rather than a vacation. Guests develop routines, friendships, and favorite activities. Choosing the right ship size and atmosphere is key.' },
        { question: 'What cabin should I book for a 4-month cruise?', answer: 'For longer voyages, space and comfort matter more than on shorter cruises. We typically recommend mid-ship balcony or suite-level accommodations for stability, storage, and long-term comfort.' },
        { question: 'Is it better to book a full world cruise or just a segment?', answer: 'It depends on your lifestyle and schedule. Full world cruises offer continuity and deeper relationships onboard, while segments allow flexibility and a lower commitment.' },
        { question: 'Are world cruises all-inclusive or do costs add up onboard?', answer: 'This depends on the cruise line. Fully inclusive lines like Regent include most expenses upfront, while others operate on a lower entry price with additional onboard spending.' },
        { question: 'How much extra should I budget beyond the cruise fare?', answer: 'On all-inclusive lines, very little. On premium lines, clients should expect to spend significantly more on excursions, dining, and experiences.' },
        { question: 'What happens if I get sick during a world cruise?', answer: 'Ships have onboard medical facilities and protocols for global care. Travel insurance with medical evacuation is strongly recommended for all world cruise clients.' },
        { question: 'Can I work remotely during a world cruise?', answer: 'Yes, but internet reliability varies by location. It is improving significantly, but you should not expect the same consistency as being land-based.' },
        { question: 'Are visas and documentation complicated?', answer: 'They can be, depending on itinerary. This is one of the most overlooked parts of world cruise planning and one of the areas where expert guidance adds the most value.' },
        { question: 'What is the average age of world cruise passengers?', answer: 'Historically 55+, but that is changing. We are seeing more affluent travelers in their 40s and 50s entering the market.' },
        { question: 'How social are world cruises?', answer: 'Very. Guests tend to form strong relationships over time. Many travelers return year after year with the same cruise line community.' },
        { question: 'Is laundry included on long cruises?', answer: 'Often included on luxury lines or available at a reasonable cost. This becomes important on voyages lasting several months.' },
        { question: 'What is the dress code for a world cruise?', answer: 'Generally elegant casual, with some formal evenings depending on the cruise line.' },
        { question: 'How do I choose between Regent and Silversea for a world cruise?', answer: 'Regent typically offers more inclusions and simplicity, while Silversea offers slightly more diverse itineraries and exploration-focused experiences. The right choice depends on how you prefer to travel.' },
        { question: 'Why should I use a travel advisor instead of booking directly?', answer: 'Because you gain access to inventory, amenities, and strategic guidance that are not available when booking directly. At this level, the difference in experience can be significant.' },
        { question: 'When is the best time to start planning a 2029 world cruise?', answer: 'Now. The best inventory is secured early, often before general availability opens to the public.' },
        { question: 'What are the best destinations on a world cruise?', answer: 'Japan, Southeast Asia, Africa, and the Mediterranean are consistently top highlights, but the best itineraries balance iconic destinations with less-traveled regions.' },
        { question: 'Can I customize my world cruise experience?', answer: 'Yes. Many clients add pre- and post-cruise travel, private tours, and extended stays to personalize the journey.' },
        { question: 'What happens if I need to leave the cruise early?', answer: 'You can disembark at scheduled ports, but logistics and costs must be planned carefully in advance.' },
        { question: 'Is a world cruise physically demanding?', answer: 'It can be depending on excursions. We help tailor experiences to match your comfort level and mobility.' },
        { question: 'How do I know if I am ready for a world cruise?', answer: 'If you value immersive travel, have flexibility in your schedule, and want to experience the world without constant planning, you are likely a strong candidate.' },
    ]

    const tierClass = (tier) => {
        if (tier === 'ultra') return 'worldcruises-tier-badge worldcruises-tier-ultra'
        if (tier === 'luxury') return 'worldcruises-tier-badge worldcruises-tier-luxury'
        if (tier === 'premium') return 'worldcruises-tier-badge worldcruises-tier-premium'
        return 'worldcruises-tier-badge worldcruises-tier-mainstream'
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a world cruise really worth $100,000 or more?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For the right traveler, yes. When compared to booking dozens of international flights, hotels, and logistics independently, a world cruise often delivers better overall value and significantly less stress."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the biggest mistake people make when booking a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The biggest mistake is choosing based on price instead of inclusions and overall experience, which can lead to significantly higher costs and a different travel experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance do world cruises sell out?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Top suites often sell out within weeks, sometimes before public release, so planning 18 to 24 months in advance is essential."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between a world cruise and a grand voyage?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A world cruise typically circumnavigates the globe over several months, while a grand voyage covers a large region or partial route."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line is best for a first world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ultra-luxury lines like Regent Seven Seas Cruises and Silversea Cruises are often best for first-time world cruisers due to their inclusions and ease of experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do people get bored on a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most travelers do not get bored. The experience becomes a lifestyle with routines, social connections, and ongoing exploration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What cabin should I book for a long world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mid-ship balcony or suite accommodations are recommended for stability, comfort, and storage during long voyages."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it better to book a full world cruise or a segment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Full world cruises provide continuity and deeper relationships, while segments offer flexibility and lower commitment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are world cruises all-inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Some are fully inclusive, while others operate on a lower base price with additional onboard costs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much extra should I budget beyond the cruise fare?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "On fully inclusive lines, very little. On premium lines, additional spending can be significant depending on excursions and onboard choices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I get sick during a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ships have onboard medical facilities, and travel insurance with medical evacuation is strongly recommended."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I work remotely on a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, though internet reliability varies depending on location."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are visas required for a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, depending on the itinerary, and requirements vary by country."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the average age of world cruise passengers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Historically 55+, but more affluent travelers in their 40s and 50s are now entering the market."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How social are world cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Very social. Guests often form long-term friendships and return with the same communities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is laundry included on long cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Often included on luxury lines or available at reasonable cost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the dress code on a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically elegant casual with some formal evenings depending on the cruise line."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I choose between Regent and Silversea?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Regent offers more inclusions and simplicity, while Silversea offers more exploration-focused itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why use a travel advisor instead of booking directly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Advisors provide access to inventory, amenities, and strategic guidance not available through direct booking."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When should I start planning a 2029 world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Planning should begin now, as the best inventory is secured early."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best destinations on a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Top destinations include Japan, Southeast Asia, Africa, and the Mediterranean."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I customize my world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, with pre- and post-cruise travel and private experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I leave the cruise early?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can disembark at scheduled ports, but logistics should be planned in advance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a world cruise physically demanding?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on excursions, but experiences can be tailored to your comfort level."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I know if I am ready for a world cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you value immersive travel, flexibility, and long-form exploration, a world cruise is likely a strong fit."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>World Cruises 2027–2029 | Luxury Around the World Cruise Guide with Angela Hughes</title>
                <meta name="description" content="Plan your 2027–2029 world cruise with Angela Hughes, global luxury travel expert. Compare Regent, Silversea, Viking, Cunard and more. Pricing, itineraries, and expert strategy." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                <link rel="preload" as="image" href={heroImages[0]} />
            </Helmet>

            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────────────────────── */}
            <section className="worldcruises-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`worldcruises-hero-bg ${index === currentHero ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="worldcruises-hero-overlay"></div>

                <div className="worldcruises-inner worldcruises-hero-inner">
                    <span className="worldcruises-eyebrow">
                        <Globe size={14} strokeWidth={2} />
                        Trips &amp; Ships Luxury Travel
                    </span>

                    <h1 className="worldcruises-h1">
                        World Cruises 2027–2029<br />
                        The Ultimate Luxury Guide to<br />
                        Cruising Around the World
                    </h1>

                    <p className="worldcruises-hero-lead">
                        by Angela Hughes
                    </p>

                    {/* Above-the-fold CTA */}
                    <div className="worldcruises-cta-card">
                        <p className="worldcruises-cta-card-title">Plan Your World Cruise with Angela Hughes</p>
                        <div className="worldcruises-cta-features">
                            <span className="worldcruises-cta-feature">
                                <CheckCircle size={16} />
                                Private consultation
                            </span>
                            <span className="worldcruises-cta-feature">
                                <Gem size={16} />
                                Curated cruise recommendations
                            </span>
                            <span className="worldcruises-cta-feature">
                                <TrendingUp size={16} />
                                Early access to inventory
                            </span>
                        </div>
                        <button className="worldcruises-btn-primary">
                            <Phone size={18} strokeWidth={2} />
                            Let's Discuss!
                        </button>
                        <p className="worldcruises-hero-subtext">Schedule your private consultation with Angela Hughes</p>
                    </div>
                </div>
            </section>

            {/* ── THE PINNACLE OF GLOBAL TRAVEL (ASYMMETRIC GALLERY) ─────────────────────── */}
            <section className="worldcruises-pinnacle-gallery">
                <div className="worldcruises-pinnacle-gallery-container">

                    <div className="worldcruises-pinnacle-panels">
                        <div className="worldcruises-pinnacle-side-label">EST. 1984</div>

                        <div className="worldcruises-pinnacle-panel">
                            <img src={luxuryRefined} alt="Luxury Interior" loading="lazy" />
                        </div>
                        <div className="worldcruises-pinnacle-panel">
                            <img src={cruiseView} alt="Cruise View" loading="lazy" />
                        </div>
                        <div className="worldcruises-pinnacle-panel">
                            <img src={singaporeSkyline} alt="Singapore Skyline" loading="lazy" />
                        </div>
                    </div>

                    <div className="worldcruises-pinnacle-gallery-text">
                        <span className="worldcruises-pinnacle-eyebrow">The Ultimate Journey</span>
                        <h2>The Pinnacle of Global Travel</h2>

                        <p className="worldcruises-p">
                            A world cruise is not just a trip. It is the most complete way to experience the world in one seamless journey.
                        </p>
                        <p className="worldcruises-p">
                            At Trips &amp; Ships Luxury Travel, we guide clients through one of the most important travel decisions they will ever make. With over 40 years in the industry, Angela Hughes brings global expertise, relationships, and strategy to every world cruise.
                        </p>

                        <div className="worldcruises-pinnacle-gallery-quote">
                            <p>"This is not about booking a cabin. This is about designing how you experience the world."</p>
                            <span className="worldcruises-pinnacle-signature">Angela Hughes, CEO</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── WHY TRUST ANGELA HUGHES ────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-trust-premium">
                <div className="worldcruises-inner">
                    <div className="worldcruises-trust-top">
                        <div className="worldcruises-trust-portrait-wrap">
                            <div className="worldcruises-trust-portrait">
                                <img src={image} alt="Angela Hughes - World Cruise Expert" />
                            </div>
                            <div className="worldcruises-trust-experience-badge">
                                <strong>40+</strong>
                                <span>Years Experience</span>
                            </div>
                        </div>

                        <div className="worldcruises-trust-intro">
                            <span className="worldcruises-eyebrow" style={{ color: 'var(--wc-navy)', marginBottom: '12px' }}>
                                <Crown size={14} />
                                Expert Guidance
                            </span>
                            <h2 className="worldcruises-h2">Why Trust Angela Hughes for a World Cruise</h2>
                            <div className="worldcruises-bar"></div>

                            <div className="worldcruises-trust-statement">
                                "Personally experienced multiple world cruise segments across different cruise lines"
                            </div>

                            <p className="worldcruises-p">
                                When you are making a six-figure travel decision, experience matters. Choosing the wrong ship or itinerary can change your entire multi-month journey.
                            </p>

                            <div className="worldcruises-trust-highlight">
                                <Sparkles size={18} style={{ color: 'var(--wc-navy)', flexShrink: 0 }} />
                                <p>I have watched travelers make six-figure mistakes on world cruises simply because they did not understand the difference between cruise lines. That is where we step in.</p>
                            </div>
                        </div>
                    </div>

                    <div className="worldcruises-trust-grid">
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><Crown size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">CEO of Trips &amp; Ships Luxury Travel</p>
                                <p className="worldcruises-trust-desc">Leading 140+ advisors serving discerning global travelers with unmatched expertise.</p>
                            </div>
                        </div>
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><Star size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">Founder of Luxury Travel University</p>
                                <p className="worldcruises-trust-desc">Educating and elevating the next generation of luxury travel advisors worldwide.</p>
                            </div>
                        </div>
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><Clock size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">40+ Years of Industry Leadership</p>
                                <p className="worldcruises-trust-desc">Decades of firsthand experience navigating the complexities of global cruise lines.</p>
                            </div>
                        </div>
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><ShieldCheck size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">Travel Leaders Network Advisory Board</p>
                                <p className="worldcruises-trust-desc">Recognized at the absolute highest level of the global travel industry.</p>
                            </div>
                        </div>
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><Gem size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">2024 Luxury Travel Influencer of the Year</p>
                                <p className="worldcruises-trust-desc">Awarded for outstanding influence and vision in elite luxury travel circles.</p>
                            </div>
                        </div>
                        <div className="worldcruises-trust-card">
                            <div className="worldcruises-trust-icon"><Sparkles size={22} /></div>
                            <div className="worldcruises-trust-card-content">
                                <p className="worldcruises-trust-label">2026 TravelPulse Women of Influence</p>
                                <p className="worldcruises-trust-desc">Featured expert in Travel Weekly, TravelPulse, Wall Street Journal, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHAT IS A WORLD CRUISE ─────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-whatis-premium">
                <div className="worldcruises-inner worldcruises-relative">
                    <div className="worldcruises-whatis-layout">
                        <div className="worldcruises-whatis-image-wrap">
                            <img src={cruiseView} alt="Luxury Cruise View" className="worldcruises-whatis-img" />
                            <div className="worldcruises-whatis-img-decoration"></div>
                        </div>

                        <div className="worldcruises-whatis-content">
                            <span className="worldcruises-eyebrow">The Journey of a Lifetime</span>
                            <h2 className="worldcruises-h2-white">What Is a World Cruise</h2>
                            <div className="worldcruises-bar-white"></div>

                            <p className="worldcruises-p-white" style={{ fontSize: '19px', marginBottom: '32px' }}>
                                A world cruise is an extended voyage of 90 to 180+ days visiting multiple continents in one continuous itinerary.
                            </p>

                            <div className="worldcruises-expect-grid">
                                <div className="worldcruises-expect-card">
                                    <div className="worldcruises-expect-icon"><Ship size={20} /></div>
                                    <div className="worldcruises-expect-content">
                                        <p className="worldcruises-expect-value">30 to 70+</p>
                                        <p className="worldcruises-expect-label">Boutique &amp; Iconic Ports</p>
                                    </div>
                                </div>
                                <div className="worldcruises-expect-card">
                                    <div className="worldcruises-expect-icon"><Globe size={20} /></div>
                                    <div className="worldcruises-expect-content">
                                        <p className="worldcruises-expect-value">20+</p>
                                        <p className="worldcruises-expect-label">Countries Visited</p>
                                    </div>
                                </div>
                                <div className="worldcruises-expect-card">
                                    <div className="worldcruises-expect-icon"><Clock size={20} /></div>
                                    <div className="worldcruises-expect-content">
                                        <p className="worldcruises-expect-value">Overnights</p>
                                        <p className="worldcruises-expect-label">In Key Global Destinations</p>
                                    </div>
                                </div>
                                <div className="worldcruises-expect-card">
                                    <div className="worldcruises-expect-icon"><Sparkles size={20} /></div>
                                    <div className="worldcruises-expect-content">
                                        <p className="worldcruises-expect-value">Immersion</p>
                                        <p className="worldcruises-expect-label">Cultural &amp; Culinary Discovery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="worldcruises-options-section">
                        <div className="worldcruises-options-header">
                            <h3 className="worldcruises-h3-white">Curated Options</h3>
                            <div className="worldcruises-bar-white worldcruises-bar-center"></div>
                        </div>

                        <div className="worldcruises-options-grid-premium">
                            <div className="worldcruises-option-card-new">
                                <img src={luxuryRefined} alt="Full World Cruises" className="worldcruises-option-bg" />
                                <div className="worldcruises-option-overlay">
                                    <div className="worldcruises-option-content-inner">
                                        <div className="worldcruises-option-badge-new">Classic</div>
                                        <p className="worldcruises-option-title-new">Full World Cruises</p>
                                        <p className="worldcruises-option-desc-new">The ultimate circumnavigation of the globe, visiting dozens of ports in one seamless journey.</p>
                                        <button className="worldcruises-option-btn">Explore Full Cruises <ArrowRight size={14} /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="worldcruises-option-card-new">
                                <img src={singaporeSkyline} alt="Grand Voyages" className="worldcruises-option-bg" />
                                <div className="worldcruises-option-overlay">
                                    <div className="worldcruises-option-content-inner">
                                        <div className="worldcruises-option-badge-new">Regional</div>
                                        <p className="worldcruises-option-title-new">Grand Voyages</p>
                                        <p className="worldcruises-option-desc-new">Extended journeys focused on a specific continent or ocean with deep regional immersion.</p>
                                        <button className="worldcruises-option-btn">Explore Grand Voyages <ArrowRight size={14} /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="worldcruises-option-card-new featured">
                                <img src={cruiseView} alt="Segment World Cruises" className="worldcruises-option-bg" />
                                <div className="worldcruises-option-overlay">
                                    <div className="worldcruises-option-content-inner">
                                        <div className="worldcruises-option-badge-new primary">Fastest Growing</div>
                                        <p className="worldcruises-option-title-new">Segment World Cruises</p>
                                        <p className="worldcruises-option-desc-new">Experience a portion of the world cruise itinerary without the full time commitment.</p>
                                        <button className="worldcruises-option-btn">Explore Segments <ArrowRight size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── COMPARE THE BEST WORLD CRUISE LINES (PREMIUM TABLE) ────────────────────── */}
            <section className="worldcruises-comparison-premium">
                <div className="worldcruises-inner">
                    <div className="worldcruises-comparison-header">
                        <h2 className="worldcruises-h2">Compare the Best World Cruise Lines</h2>
                        <div className="worldcruises-bar worldcruises-bar-center"></div>
                        <p className="worldcruises-p" style={{ maxWidth: '720px', margin: '0 auto' }}>
                            World Cruise operators range from all-inclusive ultra-luxury to regional grand voyages. Understanding the nuances of each fleet is essential to choosing the right home for your multi-month journey.
                        </p>
                    </div>

                    <div className="worldcruises-table-container-new">
                        <table className="worldcruises-premium-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Category</th>
                                    <th>Price Level</th>
                                    <th>Inclusions</th>
                                    <th>Strategic Best Fit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cruiseLines.map((line, i) => {
                                    const priceCount = line.price.length
                                    const tierClassNew = `worldcruises-tier-badge-new worldcruises-tier-${line.tier}-new`

                                    return (
                                        <tr key={i}>
                                            <td className="worldcruises-line-cell">{line.name}</td>
                                            <td><span className={tierClassNew}>{line.category}</span></td>
                                            <td>
                                                <div className="worldcruises-price-dots">
                                                    {[1, 2, 3, 4].map(dot => (
                                                        <div
                                                            key={dot}
                                                            className={`worldcruises-price-dot ${dot <= priceCount ? 'active' : ''}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </td>
                                            <td>{line.inclusions}</td>
                                            <td className="worldcruises-bestfit-text">{line.bestFit}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── COMPLETE LIST OF OPERATORS ─────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-operators-premium">
                <div className="worldcruises-inner">
                    <div className="worldcruises-operators-header">
                        <span className="worldcruises-eyebrow">The Global Fleet</span>
                        <h2 className="worldcruises-h2">Complete List of World Cruise Operators</h2>
                        <div className="worldcruises-bar worldcruises-bar-center"></div>
                    </div>

                    <div className="worldcruises-operators-grid">
                        <div className="worldcruises-operator-group">
                            <div className="worldcruises-operator-category-header">
                                <Crown size={20} />
                                <h3>Ultra-Luxury</h3>
                            </div>
                            <ul className="worldcruises-operator-list">
                                <li><Award size={16} /> <span>Regent Seven Seas</span></li>
                                <li><Navigation size={16} /> <span>Silversea</span></li>
                                <li><Anchor size={16} /> <span>Seabourn</span></li>
                                <li><Gem size={16} /> <span>Crystal</span></li>
                            </ul>
                        </div>

                        <div className="worldcruises-operator-group">
                            <div className="worldcruises-operator-category-header secondary">
                                <Gem size={20} />
                                <h3>Luxury &amp; Premium</h3>
                            </div>
                            <ul className="worldcruises-operator-list">
                                <li><Ship size={16} /> <span>Viking</span></li>
                                <li><Utensils size={16} /> <span>Oceania</span></li>
                                <li><ShieldCheck size={16} /> <span>Cunard</span></li>
                                <li><Clock size={16} /> <span>Azamara</span></li>
                                <li><Compass size={16} /> <span>Explora Journeys</span></li>
                            </ul>
                        </div>

                        <div className="worldcruises-operator-group">
                            <div className="worldcruises-operator-category-header dark">
                                <Globe size={20} />
                                <h3>Global &amp; Mainstream</h3>
                            </div>
                            <ul className="worldcruises-operator-list">
                                <li><Activity size={16} /> <span>Royal Caribbean</span></li>
                                <li><Music size={16} /> <span>Holland America</span></li>
                                <li><Heart size={16} /> <span>Princess</span></li>
                                <li><Globe size={16} /> <span>MSC</span></li>
                                <li><Sun size={16} /> <span>Costa</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE ──────────────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-soft">
                <div className="worldcruises-inner">
                    <div className="worldcruises-choose-layout">

                        <div className="worldcruises-choose-sticky">
                            <h2 className="worldcruises-h2">How to Choose the Right World Cruise</h2>
                            <div className="worldcruises-bar worldcruises-bar-left"></div>
                            <p className="worldcruises-p">Most travelers ask which world cruise is best.</p>
                            <div className="worldcruises-intro-highlight">
                                The real question is: which cruise fits how you want to live for 3 to 5 months.
                            </div>
                        </div>

                        <div>
                            <h3 className="worldcruises-h3">Inclusion Strategy</h3>
                            <div className="worldcruises-inclusion-cards">
                                <div className="worldcruises-inclusion-card">
                                    <div className="worldcruises-inclusion-icon worldcruises-inclusion-icon-navy">
                                        <ShieldCheck size={22} />
                                    </div>
                                    <div>
                                        <p className="worldcruises-inclusion-title">Fully Inclusive</p>
                                        <p className="worldcruises-inclusion-desc">Higher upfront cost, minimal onboard spend. The cleaner, simpler approach for long voyages.</p>
                                    </div>
                                </div>
                                <div className="worldcruises-inclusion-card">
                                    <div className="worldcruises-inclusion-icon worldcruises-inclusion-icon-soft">
                                        <Wallet size={22} />
                                    </div>
                                    <div>
                                        <p className="worldcruises-inclusion-title">Pay-As-You-Go</p>
                                        <p className="worldcruises-inclusion-desc">Lower entry price, higher total cost. Can lead to significant surprise spending over 120+ days.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="worldcruises-not-interchangeable">
                                <p className="worldcruises-not-interchangeable-title">These Cruise Lines Are Not Interchangeable</p>
                                {[
                                    { name: 'Regent Seven Seas Cruises', note: 'Best value when everything is included' },
                                    { name: 'Silversea Cruises', note: 'More exploratory and globally diverse' },
                                    { name: 'Cunard Line', note: 'Classic and traditional' },
                                    { name: 'Viking Ocean Cruises', note: 'Modern and destination focused' },
                                ].map((line) => (
                                    <div key={line.name} className="worldcruises-line-row">
                                        <ChevronRight size={16} color="#274472" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <div>
                                            <p className="worldcruises-line-name">{line.name}</p>
                                            <p className="worldcruises-line-note">{line.note}</p>
                                        </div>
                                    </div>
                                ))}
                                <p className="worldcruises-p" style={{ marginTop: '16px', marginBottom: 0, fontStyle: 'italic', color: '#64748b' }}>
                                    Choosing incorrectly changes your entire experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE REALITY OF LIVING ─────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-lifestyle-premium">
                <div className="worldcruises-inner">
                    <div className="worldcruises-lifestyle-layout">
                        <div className="worldcruises-lifestyle-images">
                            <div className="worldcruises-lifestyle-img-main">
                                <img src={cruiseSuite} alt="Luxury Suite" />
                            </div>
                            <div className="worldcruises-lifestyle-img-sub">
                                <img src={casualDining} alt="Fine Dining" />
                                <div className="worldcruises-lifestyle-accent"></div>
                            </div>
                        </div>

                        <div className="worldcruises-lifestyle-content">
                            <span className="worldcruises-eyebrow">A World Beyond Travel</span>
                            <h2 className="worldcruises-h2">The Reality of Living on a World Cruise</h2>
                            <div className="worldcruises-bar"></div>

                            <p className="worldcruises-lifestyle-lead">This becomes your lifestyle.</p>

                            <div className="worldcruises-lifestyle-features">
                                <div className="worldcruises-lifestyle-item">
                                    <Users size={20} className="worldcruises-lifestyle-icon" />
                                    <p>Guests develop deep routines, lifelong friendships, and personal preferences.</p>
                                </div>
                                <div className="worldcruises-lifestyle-item">
                                    <Home size={20} className="worldcruises-lifestyle-icon" />
                                    <p>The experience shifts from mere travel to genuine, elevated living at sea.</p>
                                </div>
                            </div>

                            <div className="worldcruises-lifestyle-quote">
                                "It's not about the ports you see, it's about the home you bring with you around the world."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHOOSING THE RIGHT CABIN ────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-soft">
                <div className="worldcruises-inner">
                    <div className="worldcruises-cabin-layout">

                        <div className="worldcruises-cabin-sticky">
                            <h2 className="worldcruises-h2">Choosing the Right Cabin for a World Cruise</h2>
                            <div className="worldcruises-bar worldcruises-bar-left"></div>
                            <p className="worldcruises-p">
                                On a 3–5 month journey, your cabin matters more than you think. We guide clients through cabin selection based on how they will actually live onboard.
                            </p>
                        </div>

                        <div className="worldcruises-cabin-tips">
                            {[
                                { icon: <Ship size={18} />, title: 'Mid-Ship Placement', desc: 'Mid-ship cabins offer the most stability across all sea conditions on extended voyages.' },
                                { icon: <Home size={18} />, title: 'Balcony or Suite Categories', desc: 'Balcony or suite categories provide the needed space for comfortable long-term living.' },
                                { icon: <LayoutList size={18} />, title: 'Storage Becomes Critical', desc: 'Storage space becomes critical when you are living out of a cabin for months at a time.' },
                                { icon: <AlertCircle size={18} />, title: 'Noise &amp; Location', desc: 'Noise and location impact daily comfort in ways that only become apparent over time.' },
                            ].map((tip, i) => (
                                <div key={i} className="worldcruises-cabin-tip">
                                    <div className="worldcruises-cabin-tip-icon">{tip.icon}</div>
                                    <div>
                                        <p className="worldcruises-cabin-tip-title">{tip.title}</p>
                                        <p className="worldcruises-cabin-tip-desc">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IT COSTS (VISUAL DIRECTORY) ────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-costs-visual">
                <div className="worldcruises-inner">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className="worldcruises-eyebrow">Price Directory</span>
                        <h2 className="worldcruises-h2">What It Costs to Cruise Around the World</h2>
                        <div className="worldcruises-bar worldcruises-bar-center"></div>
                    </div>

                    <div className="worldcruises-visual-grid">
                        <div className="worldcruises-visual-item">
                            <div className="worldcruises-visual-img">
                                <img src={casualDining} alt="Premium Dining" />
                            </div>
                            <div className="worldcruises-visual-content">
                                <span className="worldcruises-visual-tier">Premium</span>
                                <div className="worldcruises-visual-price">$25,000 – $60,000</div>
                                <p>Exquisite dining and standard luxury amenities across the globe.</p>
                            </div>
                        </div>

                        <div className="worldcruises-visual-item featured">
                            <div className="worldcruises-visual-img">
                                <img src={cruiseView} alt="Luxury View" />
                            </div>
                            <div className="worldcruises-visual-content">
                                <span className="worldcruises-visual-tier">Luxury</span>
                                <div className="worldcruises-visual-price">$60,000 – $150,000</div>
                                <p>Our most popular tier. All-inclusive service and expansive balcony views.</p>
                            </div>
                        </div>

                        <div className="worldcruises-visual-item">
                            <div className="worldcruises-visual-img">
                                <img src={cruiseSuite} alt="Ultra-Luxury Suite" />
                            </div>
                            <div className="worldcruises-visual-content">
                                <span className="worldcruises-visual-tier">Ultra-Luxury</span>
                                <div className="worldcruises-visual-price">$150,000 – $500,000+</div>
                                <p>The ultimate in private butler service and sprawling world-class suites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE ROI OF A WORLD CRUISE (LUXURY COMPARISON) ─────────────────────────── */}
            <section className="worldcruises-section worldcruises-roi-luxury">
                <div className="worldcruises-inner">
                    <div className="worldcruises-roi-header">
                        <span className="worldcruises-eyebrow">The Value of Time</span>
                        <h2 className="worldcruises-h2">The ROI of a World Cruise</h2>
                        <div className="worldcruises-bar worldcruises-bar-center"></div>
                    </div>

                    <div className="worldcruises-roi-split">
                        <div className="worldcruises-roi-panel independent">
                            <div className="worldcruises-roi-panel-header">
                                <span className="worldcruises-roi-tag">The Alternative</span>
                                <h3>Independent Travel</h3>
                            </div>
                            <div className="worldcruises-roi-panel-body">
                                <p>Replicating this independently requires dozens of flights, hotels, and constant planning.</p>
                                <div className="worldcruises-roi-logistics">
                                    <div className="worldcruises-roi-log-item"><Plane size={18} /> 12+ Long-haul Flights</div>
                                    <div className="worldcruises-roi-log-item"><Hotel size={18} /> 40+ Hotel Check-ins</div>
                                    <div className="worldcruises-roi-log-item"><Calendar size={18} /> Constant Logistics</div>
                                </div>
                                <div className="worldcruises-roi-verdict">High Complexity & Stress</div>
                            </div>
                        </div>

                        <div className="worldcruises-roi-connector">
                            <div className="worldcruises-roi-vs">VS</div>
                        </div>

                        <div className="worldcruises-roi-panel seamless">
                            <div className="worldcruises-roi-panel-header">
                                <span className="worldcruises-roi-tag featured">The Solution</span>
                                <h3>A World Cruise</h3>
                            </div>
                            <div className="worldcruises-roi-panel-body">
                                <p>A world cruise simplifies everything into one seamless, elevated experience.</p>
                                <div className="worldcruises-roi-solution">
                                    <Sparkles size={40} className="worldcruises-roi-spark" />
                                    <p>One Room. One Bill. One Global Journey.</p>
                                </div>
                                <div className="worldcruises-roi-verdict highlight">Absolute Simplicity & Luxury</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── HOW INVENTORY ACTUALLY WORKS ───────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-dark">
                <div className="worldcruises-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="worldcruises-h2-white">How Inventory Actually Works</h2>
                        <div className="worldcruises-bar-white worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                        <p className="worldcruises-p-white" style={{ maxWidth: '640px', margin: '0 auto' }}>
                            Waiting reduces your options significantly. The best suites and itineraries are often claimed long before official release.
                        </p>
                    </div>

                    <div className="worldcruises-inventory-grid">
                        <div className="worldcruises-inventory-card">
                            <div className="worldcruises-inventory-icon"><Users size={26} /></div>
                            <p className="worldcruises-inventory-title">Repeat Guests Book First</p>
                            <p className="worldcruises-inventory-desc">Loyal past guests get priority access before inventory is released to the general public.</p>
                        </div>
                        <div className="worldcruises-inventory-card">
                            <div className="worldcruises-inventory-icon"><Crown size={26} /></div>
                            <p className="worldcruises-inventory-title">Suites Sell Out Quickly</p>
                            <p className="worldcruises-inventory-desc">Top suite categories can disappear within weeks, sometimes before official public release.</p>
                        </div>
                        <div className="worldcruises-inventory-card">
                            <div className="worldcruises-inventory-icon"><ShieldCheck size={26} /></div>
                            <p className="worldcruises-inventory-title">Inventory Is Often Pre-Held</p>
                            <p className="worldcruises-inventory-desc">Advisors with preferred relationships can access inventory that never reaches the public market.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKING DIRECT VS WORKING WITH US ──────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-white">
                <div className="worldcruises-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="worldcruises-h2">Booking Direct vs Working With Us</h2>
                        <div className="worldcruises-bar worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                    </div>

                    <div className="worldcruises-booking-grid">
                        <div className="worldcruises-booking-col worldcruises-booking-col-direct">
                            <p className="worldcruises-booking-col-title">Booking Direct</p>
                            <ul className="worldcruises-booking-list">
                                <li><XCircle size={16} color="#ef4444" /><span>No access to group space</span></li>
                                <li><XCircle size={16} color="#ef4444" /><span>No strategic guidance</span></li>
                                <li><XCircle size={16} color="#ef4444" /><span>Limited support</span></li>
                            </ul>
                        </div>
                        <div className="worldcruises-booking-col worldcruises-booking-col-us">
                            <p className="worldcruises-booking-col-title">Working With Trips &amp; Ships</p>
                            <ul className="worldcruises-booking-list">
                                <li><CheckCircle size={16} color="#86efac" /><span>Preferred inventory access</span></li>
                                <li><CheckCircle size={16} color="#86efac" /><span>Expert positioning</span></li>
                                <li><CheckCircle size={16} color="#86efac" /><span>Full global planning</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRE AND POST CRUISE PLANNING ───────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-soft">
                <div className="worldcruises-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="worldcruises-h2">Why Pre and Post Cruise Planning Matters</h2>
                        <div className="worldcruises-bar worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                        <p className="worldcruises-p" style={{ maxWidth: '680px', margin: '0 auto' }}>
                            The cruise is only part of the journey. This is where the experience is elevated.
                        </p>
                    </div>

                    <div className="worldcruises-prepost-list" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div className="worldcruises-prepost-item">
                            <div className="worldcruises-prepost-icon"><Plane size={20} /></div>
                            <p className="worldcruises-prepost-text">Arrive early to adjust to time zones</p>
                        </div>
                        <div className="worldcruises-prepost-item">
                            <div className="worldcruises-prepost-icon"><MapPin size={20} /></div>
                            <p className="worldcruises-prepost-text">Add extended stays in key destinations</p>
                        </div>
                        <div className="worldcruises-prepost-item">
                            <div className="worldcruises-prepost-icon"><Globe size={20} /></div>
                            <p className="worldcruises-prepost-text">Design full global itineraries</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD NOT TAKE A WORLD CRUISE ─────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-dark">
                <div className="worldcruises-bg-pattern"></div>
                <div className="worldcruises-overlay"></div>
                <div className="worldcruises-inner worldcruises-relative">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="worldcruises-h2-white">Who Should Not Take a World Cruise</h2>
                        <div className="worldcruises-bar-white worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                    </div>

                    <div className="worldcruises-nofit-grid">
                        <div className="worldcruises-nofit-card">
                            <XCircle size={24} className="worldcruises-nofit-icon" />
                            <p className="worldcruises-nofit-text">Travelers who need constant movement and rapid destination changes</p>
                        </div>
                        <div className="worldcruises-nofit-card">
                            <XCircle size={24} className="worldcruises-nofit-icon" />
                            <p className="worldcruises-nofit-text">Those who dislike sea days and extended time aboard a ship</p>
                        </div>
                        <div className="worldcruises-nofit-card">
                            <XCircle size={24} className="worldcruises-nofit-icon" />
                            <p className="worldcruises-nofit-text">Those who are unsure about long travel commitments of 3 to 5 months</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW WE PLAN WORLD CRUISES ──────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-white">
                <div className="worldcruises-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="worldcruises-h2">How We Plan World Cruises</h2>
                        <div className="worldcruises-bar worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                    </div>

                    <div className="worldcruises-process-steps">
                        {[
                            { num: '01', title: 'Define Your Travel Style', desc: 'We begin by understanding how you want to live for 3 to 5 months — your preferences, priorities, and must-haves.' },
                            { num: '02', title: 'Match Cruise Line', desc: 'We match you with the cruise line that aligns with how you travel, not just what looks good on paper.' },
                            { num: '03', title: 'Secure Inventory Early', desc: 'We access preferred inventory — including categories that never reach general availability — before they sell out.' },
                            { num: '04', title: 'Design Full Itinerary', desc: 'We build the complete journey, including pre- and post-cruise stays, so the experience extends beyond the ship.' },
                            { num: '05', title: 'Manage Global Logistics', desc: 'We handle visas, documentation, transfers, and all details that make long-form global travel seamless.' },
                        ].map((step, i) => (
                            <div key={i} className="worldcruises-step">
                                <div className="worldcruises-step-num">{step.num}</div>
                                <div className="worldcruises-step-content">
                                    <p className="worldcruises-step-title">{step.title}</p>
                                    <p className="worldcruises-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WORK WITH TRIPS & SHIPS ─────────────────────────────────────────────────── */}
            <section className="worldcruises-section worldcruises-bg-dark2">
                <div className="worldcruises-bg-pattern"></div>
                <div className="worldcruises-inner worldcruises-relative">
                    <div className="worldcruises-cta-section-inner">
                        <h2 className="worldcruises-h2-white">Work With Trips &amp; Ships Luxury Travel</h2>
                        <div className="worldcruises-bar-white worldcruises-bar-center" style={{ margin: '0 auto 20px' }}></div>
                        <p className="worldcruises-p-white" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                            We secure inventory, design your journey, and manage every detail.
                        </p>
                        <div className="worldcruises-cta-actions">
                            <button className="worldcruises-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="worldcruises-btn-outline-white">
                                <LayoutList size={18} />
                                Request World Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION (JAPAN STYLE) ────────────────────────────────────────────────── */}
            <section className="worldcruises-faq-section-new">
                <div className="worldcruises-faq-inner-new">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="worldcruises-h2">World Cruise FAQs<br /></h2>
                        <div className="worldcruises-bar worldcruises-bar-center"></div>
                    </div>

                    <div className="worldcruises-faq-list-new">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="worldcruises-faq-item-new"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="worldcruises-faq-question-new">
                                    <span>{faq.question}</span>
                                    <span className="worldcruises-faq-icon-new">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="worldcruises-faq-answer-new">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorldCruisesGuide