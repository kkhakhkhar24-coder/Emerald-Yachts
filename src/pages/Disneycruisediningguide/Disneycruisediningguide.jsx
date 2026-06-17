import Navbar from '../../components/Navbar/Navbar'
// import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import {
    Utensils, Star, CheckCircle, ArrowRight, Sparkles,
    Crown, Phone, Plus, Minus, ChevronRight, Users,
    Heart, Globe, LayoutList, Clock, MapPin, Gem,
    Award, Compass, Calendar, Baby, Music, Anchor,
    Ship, Sun, Coffee
} from 'lucide-react'

// ── Hero images (replace with your actual asset paths) ──────────────────────
import hero1 from '../../assets/Disneycruisediningguide/Disney Treasure Plaza De Coco.webp'
import hero2 from '../../assets/Disneycruisediningguide/disney-wish-palo-steakhouse-adults-only-fine-dining-table.webp'
import hero3 from '../../assets/Disneycruisediningguide/disney-wish-oceaneer-club-mickey-minnie-captains-deck-kids.webp'

// ── Section images ───────────────────────────────────────────────────────────
import rotationalDining from '../../assets/Disneycruisediningguide/sanctum-lounge-disney-destiny.webp'
import arendelleRestaurant from '../../assets/Disneycruisediningguide/disney-wish-the-rose-lounge-adults-only-luxury-seating (2).webp'
import animatorsPalate from '../../assets/Disneycruisediningguide/disney-wish-sarabi-lounge-modern-stage-family-entertainment.webp'
import paloRestaurant from '../../assets/Disneycruisediningguide/disney-wish-palo-steakhouse-adult-exclusive-restaurant-layout.webp'
import enchante from '../../assets/Disneycruisediningguide/disney-wish-palo-steakhouse-oceanview-table-setting.webp'
import characterDining from '../../assets/Disneycruisediningguide/disney-cruise-christmas-holiday-mickey-minnie-mouse.webp'
import kidsMenu from '../../assets/Disneycruisediningguide/disney-wish-keg-compass-pub-sports-bar-counter.webp'
import paloRestaurant1 from '../../assets/Disneycruisediningguide/disney-wish-the-rose-lounge-adults-only-luxury-booths.webp'
import roomService from '../../assets/Disneycruisediningguide/Disney Treasure Funnel Suite.webp'
import Profile_AH from '../../assets/DisneyLuxuryCruise/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/Media (1).jpg'

function DisneyCruiseDiningGuide() {
    // ── Hero rotation ─────────────────────────────────────────────────────────
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    // ── FAQ accordion ─────────────────────────────────────────────────────────
    const [activeFaq, setActiveFaq] = useState(null)
    const toggleFaq = i => setActiveFaq(activeFaq === i ? null : i)

    // ── Mistakes slider ───────────────────────────────────────────────────────
    const [activeSlide, setActiveSlide] = useState(0)
    const [sliderHovered, setSliderHovered] = useState(false)
    useEffect(() => {
        if (sliderHovered) return
        const t = setInterval(() => setActiveSlide(p => (p + 1) % diningTips.length), 5000)
        return () => clearInterval(t)
    }, [sliderHovered])

    // ── Ship tab selector ─────────────────────────────────────────────────────
    const [selectedShip, setSelectedShip] = useState(0)

    // ── Data ──────────────────────────────────────────────────────────────────
    const ships = [
        {
            title: 'Disney Wish',
            highlights: ['Arendelle: A Frozen Dining Adventure', 'Worlds of Marvel', '1923'],
            desc: 'The Disney Wish introduces the most immersive dining experiences at sea, blending live entertainment with world-class cuisine.'
        },
        {
            title: 'Disney Treasure',
            highlights: ['Adventure-inspired dining experiences', 'Storytelling and immersive entertainment', 'Upscale cuisine with Disney adventure themes'],
            desc: 'The Disney Treasure introduces adventure-inspired dining experiences featuring storytelling and immersive entertainment.'
        },
        {
            title: 'Disney Dream & Disney Fantasy',
            highlights: ["Animator's Palate", 'Royal Palace / Royal Court', 'Enchanted Garden'],
            desc: "Guest favorites including Animator's Palate and Royal Palace deliver classic Disney dining magic with elegant surroundings."
        },
        {
            title: 'Disney Magic & Disney Wonder',
            highlights: ["Animator's Palate", "Rapunzel's Royal Table", "Lumiere's", "Tiana's Place", "Triton's"],
            desc: 'Classic Disney dining venues each offer unique entertainment and themed menus aboard these beloved ships.'
        }
    ]

    const diningTips = [
        {
            title: 'Book Specialty Dining Early',
            desc: 'Popular restaurants often sell out before departure.',
            bullets: ['Palo and Enchanté book months in advance', 'Reserve as soon as your booking window opens']
        },
        {
            title: "Don't Skip Rotational Dining",
            desc: 'Each restaurant offers unique experiences that are part of the Disney magic.',
            bullets: ['Your serving team follows you each night', 'Every venue features themed entertainment']
        },
        {
            title: 'Try Breakfast in the Main Dining Room',
            desc: 'Many guests overlook this quieter alternative to buffet dining.',
        },
        {
            title: 'Communicate Dietary Needs Early',
            desc: "Disney's culinary teams can accommodate most dietary requirements.",
            bullets: ['Notify Disney before sailing', 'Dedicated gluten-free and vegan menus available']
        },
        {
            title: 'Use Room Service',
            desc: 'Late-night snacks and breakfast delivery add convenience to your cruise.',
            bullets: ['Available 24 hours a day', 'Complimentary — gratuities appreciated']
        }
    ]

    const faqs = [
        { q: 'Is food included on a Disney cruise?', a: 'Yes. Most dining venues, room service, snacks, and beverages are included in your cruise fare.' },
        { q: 'What is rotational dining?', a: 'Rotational dining allows guests to experience different restaurants each evening while keeping the same serving team.' },
        { q: 'Do I need dining reservations?', a: 'Main dining rooms are assigned automatically. Specialty restaurants require reservations.' },
        { q: 'Is room service free?', a: 'Yes. Room service is complimentary, though gratuities are customary.' },
        { q: 'Are drinks included?', a: 'Soft drinks at beverage stations are included. Alcoholic beverages cost extra.' },
        { q: 'Can Disney accommodate food allergies?', a: 'Yes. Disney Cruise Line is known for excellent allergy and dietary accommodation services.' },
        { q: 'What is Palo?', a: "Palo is Disney's adults-only Italian specialty restaurant available on most ships." },
        { q: 'Is Enchanté worth it?', a: 'Many guests consider Enchanté one of the best fine dining experiences available at sea.' },
        { q: 'Are there vegan options?', a: 'Yes. Disney offers vegan and plant-based menu selections.' },
        { q: 'Can kids order from the adult menu?', a: 'In most cases, yes. Disney is very flexible with dining requests.' },
        { q: 'How does Disney rotational dining work?', a: 'Guests rotate between themed restaurants while their serving team follows them each night.' },
        { q: 'Are character meals included?', a: 'Most onboard character dining experiences are included in your cruise fare.' },
        { q: "What is Animator's Palate?", a: "Animator's Palate is Disney's signature restaurant featuring animation-themed interactive dining." },
        { q: 'Can I request a dining time?', a: 'Yes. Guests can request either early or late dining, subject to availability.' },
        { q: 'Which Disney ship has the best dining?', a: 'The Disney Wish and Disney Treasure currently offer the newest and most immersive dining experiences, while Disney Dream and Disney Fantasy remain guest favorites for classic Disney dining.' }
    ]


const cruisedining = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Disney Cruise Dining Guide: Everything You Need to Know About Dining on Disney Cruise Line",
    "description": "Discover everything about Disney Cruise Line dining, including rotational dining, specialty restaurants, room service, dietary accommodations, dining plans, and answers to the most frequently asked questions.",
    "author": {
      "@type": "Person",
      "name": "Angela Hughes",
      "jobTitle": "CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trips & Ships Luxury Travel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tripsandships.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-cruise-dining-guide"
    },
    "datePublished": "2026-06-17",
    "dateModified": "2026-06-17"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is food included on a Disney cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most dining venues, room service, snacks, and beverages are included in your cruise fare."
        }
      },
      {
        "@type": "Question",
        "name": "What is rotational dining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rotational dining allows guests to experience different restaurants each evening while keeping the same serving team."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need dining reservations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Main dining rooms are assigned automatically. Specialty restaurants require reservations."
        }
      },
      {
        "@type": "Question",
        "name": "Is room service free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Room service is complimentary, though gratuities are customary."
        }
      },
      {
        "@type": "Question",
        "name": "Are drinks included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soft drinks at beverage stations are included. Alcoholic beverages cost extra."
        }
      },
      {
        "@type": "Question",
        "name": "Can Disney accommodate food allergies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Disney Cruise Line is known for excellent allergy and dietary accommodation services."
        }
      },
      {
        "@type": "Question",
        "name": "What is Palo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Palo is Disney's adults-only Italian specialty restaurant available on most ships."
        }
      },
      {
        "@type": "Question",
        "name": "Is Enchanté worth it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many guests consider Enchanté one of the best fine dining experiences available at sea."
        }
      },
      {
        "@type": "Question",
        "name": "Are there vegan options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Disney offers vegan and plant-based menu selections."
        }
      },
      {
        "@type": "Question",
        "name": "Can kids order from the adult menu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes. Disney is very flexible with dining requests."
        }
      },
      {
        "@type": "Question",
        "name": "How does Disney rotational dining work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guests rotate between themed restaurants while their serving team follows them each night."
        }
      },
      {
        "@type": "Question",
        "name": "Are character meals included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most onboard character dining experiences are included in your cruise fare."
        }
      },
      {
        "@type": "Question",
        "name": "What is Animator's Palate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Animator's Palate is Disney's signature restaurant featuring animation-themed interactive dining."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a dining time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Guests can request either early or late dining, subject to availability."
        }
      },
      {
        "@type": "Question",
        "name": "Which Disney ship has the best dining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Disney Wish and Disney Treasure currently offer the newest and most immersive dining experiences, while Disney Dream and Disney Fantasy remain guest favorites for classic Disney dining."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
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
        "name": "Disney Cruise Line",
        "item": "https://www.tripsandships.com/disney-cruise-line"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Disney Cruise Dining Guide",
        "item": "https://www.tripsandships.com/disney-cruise-dining-guide"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disney Cruise Dining Guide: Everything You Need to Know About Dining on Disney Cruise Line",
    "url": "https://www.tripsandships.com/disney-cruise-dining-guide",
    "description": "Complete Disney Cruise Line dining guide covering rotational dining, restaurants, character meals, room service, dietary accommodations, specialty dining, and dining tips."
  },
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Trips & Ships Luxury Travel",
    "url": "https://www.tripsandships.com",
    "logo": "https://www.tripsandships.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/tripsandships"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Angela Hughes",
    "jobTitle": "CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Trips & Ships Luxury Travel"
    },
    "url": "https://www.tripsandships.com/about-angela-hughes",
    "sameAs": [
      "https://www.instagram.com/tripsandships"
    ]
  }
]
    return (
        <>
            <Helmet>
                <title>Disney Cruise Dining Guide 2026 | Restaurants, Rotational Dining &amp; FAQs</title>
                <meta name="description" content="Discover everything about Disney Cruise Line dining, including rotational dining, specialty restaurants, room service, dietary accommodations, dining plans, and answers to the most frequently asked questions." />
                <meta name="keywords" content="Disney Cruise Dining Guide, Disney Cruise Line dining, Disney cruise restaurants, Disney rotational dining, Disney cruise food guide" />
                <script type="application/ld+json">{JSON.stringify(cruisedining)}</script>
            </Helmet>

            <Navbar />

            {/* ═══════════════════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Utensils size={16} />
                        <span>Disney Cruise Line Dining Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise Dining Guide: Everything You Need to Know About Dining on Disney Cruise Line
                    </h1>
                    <div className="medi-hero-cta-container">
                        <p className="medi-cta-title-text">Plan Your Perfect Disney Dining Experience</p>
                        <p className="medi-cta-subtitle-text">From rotational dining and character interactions to world-class specialty restaurants</p>
                        <div className="medi-cta-features-row">
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Rotational Dining Explained</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Specialty Restaurants</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Dietary Accommodations</span>
                            </div>
                        </div>
                        <button className="medi-primary-cta-button">
                            <Phone size={18} />
                            Talk to a Dining Expert
                        </button>
                        <p className="medi-hero-disclaimer-text">Complimentary consultation &middot; No booking fees</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                PREMIUM INTRO — What Is Disney's Rotational Dining?
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Editorial left column */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">DISNEY CRUISE LINE DINING</span>
                            <h2 className="medi-premium-heading">Disney Cruise Dining Guide: A Complete Overview</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                One of the most unique aspects of sailing with Disney Cruise Line is its exceptional dining experience. Unlike many cruise lines, Disney combines family-friendly dining, immersive themed restaurants, character interactions, and world-class cuisine into one unforgettable vacation.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                Whether you're sailing aboard the Disney Wish, Disney Treasure, Disney Dream, Disney Fantasy, Disney Magic, or Disney Wonder, dining plays a major role in the onboard experience.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                This guide covers everything you need to know before your Disney cruise, from rotational dining and specialty restaurants to room service and dietary accommodations.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ marginTop: '28px' }}>
                                <p className="medi-immersion-lead-in">Disney's dining system stands apart through:</p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Utensils size={20} />, label: 'Rotational themed restaurants' },
                                        { icon: <Users size={20} />, label: 'Dedicated serving teams' },
                                        { icon: <Star size={20} />, label: 'Character interactions' },
                                        { icon: <Sparkles size={20} />, label: 'Immersive entertainment' },
                                        { icon: <Crown size={20} />, label: 'World-class specialty dining' },
                                        { icon: <Heart size={20} />, label: 'Family-friendly flexibility' }
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Expert panel */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CRUISE DINING EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps families and couples navigate the full Disney Cruise Line dining experience — from securing specialty restaurant reservations to maximizing rotational dining.
                                </p>
                                <div className="medi-premium-expert-quote-block">
                                    <p className="medi-premium-expert-quote-text">
                                        "Disney Cruise Line consistently sets the standard for family dining at sea. Their rotational dining system alone transforms a vacation into something truly memorable."
                                    </p>
                                    <span className="medi-quote-attribution">— Angela Hughes, CEO, Trips &amp; Ships Luxury Travel</span>
                                </div>
                                <div className="medi-expert-credentials-row">
                                    {[
                                        { num: '40+', label: 'Years Experience' },
                                        { num: '121', label: 'Countries Visited' },
                                        { num: '100s', label: 'Disney Cruises Booked' }
                                    ].map((stat, i) => (
                                        <div key={i} className="medi-expert-stat-chip">
                                            <span className="medi-expert-stat-number">{stat.num}</span>
                                            <span className="medi-expert-stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                ROTATIONAL DINING — image-rich split section
            ═══════════════════════════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-dark)',
                padding: '80px 20px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '64px',
                        alignItems: 'center'
                    }}>
                        {/* Image */}
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
                            <img
                                src={rotationalDining}
                                alt="Disney Rotational Dining"
                                style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute', bottom: '24px', left: '24px',
                                background: 'rgba(15,28,46,0.9)', backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px',
                                padding: '16px 20px', color: '#fff'
                            }}>
                                <div style={{ fontSize: '13px', color: '#93c5fd', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '4px' }}>SIGNATURE SYSTEM</div>
                                <div style={{ fontSize: '18px', fontWeight: '600' }}>Rotational Dining</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span style={{
                                display: 'inline-block', background: 'rgba(147,197,253,0.12)',
                                border: '1px solid rgba(147,197,253,0.25)', borderRadius: '20px',
                                padding: '6px 16px', color: '#93c5fd', fontSize: '12px',
                                fontWeight: '600', letterSpacing: '0.08em', marginBottom: '20px'
                            }}>WHAT IS DISNEY ROTATIONAL DINING?</span>

                            <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>
                                What Is Disney's Rotational Dining?
                            </h2>
                            <div className="medi-heading-separator-bar" style={{ background: '#93c5fd', marginBottom: '24px' }}></div>

                            <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: '1.8', marginBottom: '16px' }}>
                                Disney Cruise Line is famous for its Rotational Dining system.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                                Instead of eating in the same dining room every night, guests rotate among several themed restaurants throughout their cruise.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                                The unique part? Your serving team rotates with you.
                            </p>

                            <div style={{
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px', padding: '20px 24px', marginBottom: '24px'
                            }}>
                                <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '12px' }}>YOUR SERVING TEAM INCLUDES:</p>
                                {['Head server', 'Server', 'Assistant server'].map((role, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                        <CheckCircle size={15} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ color: '#e2e8f0', fontSize: '15px' }}>{role}</span>
                                    </div>
                                ))}
                                <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '12px', fontStyle: 'italic' }}>
                                    They follow you to each restaurant, learning your preferences and providing personalized service throughout your voyage.
                                </p>
                            </div>

                            <p style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '12px' }}>BENEFITS INCLUDE:</p>
                            {['Consistent service', 'Different restaurant experiences', 'Themed dining environments', 'Personalized attention'].map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <Sparkles size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                    <span style={{ color: '#cbd5e1', fontSize: '15px' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                MAIN DINING RESTAURANTS — Ship Tab Dashboard
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">FLEET DINING</span>
                        <h2 className="medi-itinerary-showcase-heading">Main Dining Restaurants on Disney Ships</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Ship Tabs */}
                        <div className="medi-itinerary-tabs">
                            {ships.map((ship, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${selectedShip === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedShip(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{ship.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Ship Content Card */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={
                                        selectedShip === 0 ? arendelleRestaurant :
                                        selectedShip === 1 ? enchante :
                                        selectedShip === 2 ? animatorsPalate : paloRestaurant
                                    }
                                    alt={ships[selectedShip].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">FEATURED SHIP</span>
                            </div>
                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{ships[selectedShip].title}</h3>
                                <p style={{ color: '#475569', fontSize: '15px', marginBottom: '20px', lineHeight: '1.7' }}>
                                    {ships[selectedShip].desc}
                                </p>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Popular Restaurants Include:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {ships[selectedShip].highlights.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                WHAT FOOD IS INCLUDED — 3-col differentiator cards
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">INCLUDED WITH YOUR FARE</span>
                        <h2 className="medi-diff-main-title">What Food Is Included on Disney Cruises?</h2>
                        <div className="medi-diff-separator"></div>
                        <p style={{ color: '#475569', fontSize: '17px', maxWidth: '680px', margin: '0 auto', textAlign: 'center', lineHeight: '1.7' }}>
                            One reason Disney cruises provide excellent value is that most dining is included in your cruise fare.
                        </p>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1 — Included Dining */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Utensils size={24} /></div>
                                <h3 className="medi-diff-card-title">Included Dining Venues</h3>
                            </div>
                            <p className="medi-diff-card-text">Included dining typically covers:</p>
                            <ul className="medi-diff-experience-list">
                                {[
                                    'Main Dining Rooms — Breakfast, lunch, and dinner',
                                    'Buffet Restaurants — Casual meals throughout the day',
                                    'Quick-Service Dining — Poolside dining options',
                                    'Soft Drinks — Available in designated beverage stations',
                                    'Room Service — Available 24 hours a day',
                                    'Snacks and Desserts — Ice cream, pastries, and various treats'
                                ].map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} className="medi-diff-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2 — Specialty Dining */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Crown size={24} /></div>
                                <h3 className="medi-diff-card-title">Specialty Dining Options</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Adults seeking an elevated culinary experience can enjoy premium restaurants for an additional fee.
                            </p>

                            <div style={{ marginTop: '20px', marginBottom: '16px' }}>
                                <p style={{ fontWeight: '700', color: 'var(--medi-navy)', fontSize: '15px', marginBottom: '8px' }}>Palo</p>
                                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7', marginBottom: '4px' }}>A guest favorite offering Northern Italian cuisine. Highlights include:</p>
                                {['Elegant atmosphere', 'Exceptional service', 'Champagne brunch', 'Romantic dinners'].map((h, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                                        <Sparkles size={12} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ color: '#475569', fontSize: '14px' }}>{h}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <p style={{ fontWeight: '700', color: 'var(--medi-navy)', fontSize: '15px', marginBottom: '8px' }}>Enchanté</p>
                                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7', marginBottom: '4px' }}>Available aboard Disney Wish and Disney Treasure. This luxurious French-inspired restaurant offers one of the finest dining experiences at sea. Ideal for:</p>
                                {['Anniversaries', 'Celebrations', 'Fine dining enthusiasts'].map((h, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                                        <Sparkles size={12} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ color: '#475569', fontSize: '14px' }}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 3 — Dietary Accommodations */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Heart size={24} /></div>
                                <h3 className="medi-diff-card-title">Dietary Accommodations</h3>
                            </div>
                            <p className="medi-diff-card-text">Disney Cruise Line is known for accommodating dietary needs exceptionally well. Common accommodations include:</p>
                            <ul className="medi-diff-focus-list-premium">
                                {[
                                    { label: 'Vegetarian', note: 'Wide selection of vegetarian meals' },
                                    { label: 'Vegan', note: 'Plant-based options available throughout the ship' },
                                    { label: 'Gluten-Free', note: 'Dedicated gluten-free menu options' },
                                    { label: 'Dairy-Free', note: 'Alternative ingredients available' },
                                    { label: 'Food Allergies', note: 'Disney takes food allergy management seriously and works closely with guests' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <span className="medi-diff-list-num">0{i + 1}</span>
                                        <span><strong>{item.label}</strong> — {item.note}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">Guests should notify Disney before sailing to ensure the best possible experience.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                CHARACTER DINING — image-right editorial
            ═══════════════════════════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        {/* Content */}
                        <div>
                            <span style={{
                                display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                                borderRadius: '20px', padding: '6px 16px', color: 'var(--medi-navy)',
                                fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '20px'
                            }}>MAGICAL MOMENTS AT THE TABLE</span>
                            <h2 className="medi-section-heading">Character Dining Experiences</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
                                One of Disney Cruise Line's biggest attractions is the opportunity to dine alongside beloved Disney characters.
                            </p>
                            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                                Depending on your sailing, character experiences may include:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                                {['Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy', 'Disney Princesses', 'Marvel Characters'].map((char, i) => (
                                    <div key={i} style={{
                                        background: '#ffffff', border: '1px solid rgba(39,68,114,0.12)',
                                        borderRadius: '10px', padding: '12px 16px',
                                        display: 'flex', alignItems: 'center', gap: '10px'
                                    }}>
                                        <Star size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ color: 'var(--medi-navy)', fontSize: '14px', fontWeight: '500' }}>{char}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="medi-intro-highlight-box">
                                Character appearances vary by ship and itinerary.
                            </div>
                        </div>
                        {/* Image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(15,28,46,0.15)' }}>
                            <img
                                src={characterDining}
                                alt="Disney character dining experience"
                                style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                DINING FOR KIDS & ADULTS — two-column split cards
            ═══════════════════════════════════════════════════════ */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.08)',
                            borderRadius: '20px', padding: '6px 16px', color: 'var(--medi-navy)',
                            fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '16px'
                        }}>DINING FOR EVERY GUEST</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Something Extraordinary for Everyone</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                        {/* Kids Card */}
                        <div style={{
                            borderRadius: '20px', overflow: 'hidden',
                            boxShadow: '0 8px 40px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.08)'
                        }}>
                            <div style={{ position: 'relative', height: '260px' }}>
                                <img src={kidsMenu} alt="Disney cruise kids dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 60%)'
                                }}></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Baby size={18} style={{ color: '#93c5fd' }} />
                                        <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '20px' }}>Dining for Kids</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Disney excels at creating family-friendly dining experiences. Children enjoy:
                                </p>
                                {['Dedicated kids\' menus', 'Character interactions', 'Interactive dining shows', 'Flexible meal options'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                                        <CheckCircle size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        <span style={{ color: '#374151', fontSize: '15px' }}>{item}</span>
                                    </div>
                                ))}
                                <div style={{
                                    background: 'var(--medi-bg-soft)', borderRadius: '10px',
                                    padding: '16px', marginTop: '16px'
                                }}>
                                    <p style={{ color: 'var(--medi-navy)', fontSize: '13px', fontWeight: '700', marginBottom: '8px', letterSpacing: '0.05em' }}>POPULAR MENU ITEMS:</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Chicken tenders', 'Mac and cheese', 'Pizza', 'Pasta', 'Fresh fruit', 'Desserts'].map((food, i) => (
                                            <span key={i} style={{
                                                background: '#ffffff', border: '1px solid rgba(39,68,114,0.15)',
                                                borderRadius: '20px', padding: '4px 12px',
                                                fontSize: '13px', color: '#374151'
                                            }}>{food}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Adults Card */}
                        <div style={{
                            borderRadius: '20px', overflow: 'hidden',
                            boxShadow: '0 8px 40px rgba(39,68,114,0.1)',
                            border: '1px solid rgba(39,68,114,0.08)'
                        }}>
                            <div style={{ position: 'relative', height: '260px' }}>
                                <img src={paloRestaurant1} alt="Palo Disney adults dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 60%)'
                                }}></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Crown size={18} style={{ color: '#93c5fd' }} />
                                        <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '20px' }}>Dining for Adults</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '28px' }}>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Disney cruises aren't just for families. Adults appreciate:
                                </p>
                                {['Palo', 'Enchanté', 'Premium wine selections', 'Craft cocktails', 'Gourmet dining experiences'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                                        <Gem size={15} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        <span style={{ color: '#374151', fontSize: '15px' }}>{item}</span>
                                    </div>
                                ))}
                                <div className="medi-intro-highlight-box" style={{ marginTop: '20px' }}>
                                    Many adults-only dining venues rival luxury cruise lines.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                ROOM SERVICE — dark editorial with image
            ═══════════════════════════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-dark2)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        {/* Content */}
                        <div>
                            <span style={{
                                display: 'inline-block', background: 'rgba(147,197,253,0.12)',
                                border: '1px solid rgba(147,197,253,0.25)', borderRadius: '20px',
                                padding: '6px 16px', color: '#93c5fd',
                                fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', marginBottom: '20px'
                            }}>24-HOUR SERVICE</span>
                            <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Room Service on Disney Cruises</h2>
                            <div className="medi-heading-separator-bar" style={{ background: '#93c5fd' }}></div>
                            <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
                                Room service is available 24 hours a day and is included in your cruise fare.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '8px', fontWeight: '600', letterSpacing: '0.04em' }}>POPULAR ROOM SERVICE ITEMS INCLUDE:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                                {['Sandwiches', 'Salads', 'Pizza', 'Cookies', 'Desserts', 'Coffee', 'Breakfast items'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <Coffee size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ color: '#e2e8f0', fontSize: '15px' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px', padding: '16px 20px'
                            }}>
                                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic' }}>
                                    While the food is complimentary, gratuities for delivery staff are appreciated.
                                </p>
                            </div>
                        </div>
                        {/* Image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
                            <img
                                src={roomService}
                                alt="Disney cruise room service"
                                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                EXPERT EDITORIAL — Angela quote section
            ═══════════════════════════════════════════════════════ */}
            <section id="disney-dining-expert" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes — Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <span className="medi-editorial-stat-number">40+</span>
                                <span className="medi-editorial-stat-label">Years of Cruise Expertise</span>
                            </div>
                        </div>

                        <div className="medi-editorial-text-block">
                            <span className="medi-editorial-eyebrow-label">EXPERT INSIGHT</span>
                            <h2 className="medi-editorial-title">Is Disney Cruise Food Good?</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-body-text">
                                Disney Cruise Line consistently receives high ratings for food quality. Guests often praise the variety, presentation, family-friendly options, specialty dining experiences, and service quality.
                            </p>
                            <p className="medi-editorial-body-text" style={{ marginTop: '16px' }}>
                                While tastes vary, Disney is generally considered one of the strongest dining-focused family cruise lines in the industry.
                            </p>
                            <div className="medi-editorial-quote-pullout">
                                <p className="medi-editorial-quote-text">
                                    "Disney's rotational dining system is genuinely one of the most thoughtful innovations in cruise dining. The fact that your serving team learns your preferences and follows you each evening transforms routine meals into personal experiences."
                                </p>
                                <span className="medi-editorial-quote-attribution">— Angela Hughes, CEO, Trips &amp; Ships Luxury Travel</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                DINING TIPS AUTO-SLIDER
            ═══════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setSliderHovered(true)}
                onMouseLeave={() => setSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">MAXIMIZE YOUR EXPERIENCE</span>
                        <h2 className="medi-mistakes-slider-title">Disney Cruise Dining Tips</h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setActiveSlide(p => (p === 0 ? diningTips.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {diningTips.map((tip, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${activeSlide === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{tip.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{tip.desc}</p>
                                        {tip.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {tip.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setActiveSlide(p => (p === diningTips.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {diningTips.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${activeSlide === idx ? 'active' : ''}`}
                                onClick={() => setActiveSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                WHO SHOULD CHOOSE — audience split
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Is Disney Cruise Dining Best For?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Users size={20} />, label: 'Families with children of all ages' },
                                    { icon: <Heart size={20} />, label: 'Couples seeking romantic fine dining' },
                                    { icon: <Star size={20} />, label: 'Disney enthusiasts and fans' },
                                    { icon: <Utensils size={20} />, label: 'Foodies who love themed dining' },
                                    { icon: <Crown size={20} />, label: 'Adults seeking premium specialty restaurants' },
                                    { icon: <Globe size={20} />, label: 'Guests with diverse dietary needs' },
                                    { icon: <Baby size={20} />, label: 'Families wanting character interactions' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Things to Know</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Gem size={20} />, label: 'Specialty restaurants cost extra beyond the fare' },
                                    { icon: <Clock size={20} />, label: 'Palo and Enchanté require advance reservations' },
                                    { icon: <Music size={20} />, label: 'Alcoholic beverages are not included by default' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                WHY WORK WITH US — timeline
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">
                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Luxury Mediterranean cruise planning has become increasingly complex.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Compass size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Working with experienced luxury advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        { icon: <CheckCircle size={18} />, text: 'Secure specialty dining reservations before sailing' },
                                        { icon: <Calendar size={18} />, text: 'Select the best Disney ship and itinerary for their family' },
                                        { icon: <Crown size={18} />, text: 'Choose ideal cabin and concierge categories' },
                                        { icon: <Gem size={18} />, text: 'Access exclusive amenities and upgrades' },
                                        { icon: <Compass size={18} />, text: 'Navigate Disney promotions and booking windows strategically' },
                                        { icon: <MapPin size={18} />, text: 'Match dining experiences to their travel goals' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span className="medi-pillar-list-icon icon-theme">{item.icon}</span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node"><Award size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        { icon: <Award size={18} />, text: 'Travel industry speaking engagements' },
                                        { icon: <Globe size={18} />, text: 'International media recognition' },
                                        { icon: <Star size={18} />, text: 'Advisory board leadership' },
                                        { icon: <Ship size={18} />, text: 'Hundreds of Disney cruise bookings' },
                                        { icon: <Sparkles size={18} />, text: 'Luxury Travel University training programs' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span className="medi-pillar-list-icon icon-theme">{item.icon}</span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                AUTHORITY / PRESTIGE BOX
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src={Profile_AH} alt="Angela Hughes" className="medi-prestige-photo" />
                            </div>
                            <span className="medi-prestige-name">Angela Hughes</span>
                            <span className="medi-prestige-role-pill">CEO, Trips &amp; Ships Luxury Travel</span>
                            <p className="medi-prestige-tagline">"Making every Disney meal a memory"</p>
                        </div>
                        <div className="medi-prestige-credentials-column">
                            {[
                                { category: 'EXPERIENCE', text: '40+ years in the luxury travel industry', icon: Award },
                                { category: 'GLOBAL REACH', text: 'Visited over 121 countries worldwide', icon: Globe },
                                { category: 'DISNEY EXPERTISE', text: 'Expert in Disney Cruise Line dining and bookings', icon: Sparkles },
                                { category: 'CLIENT TRUST', text: 'Hundreds of families guided to their dream Disney cruise', icon: Heart },
                                { category: 'RECOGNITION', text: 'International media and advisory board recognition', icon: Star }
                            ].map((accolade, i) => {
                                const IconComp = accolade.icon
                                return (
                                    <div key={i} className="medi-prestige-item-card">
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
            </section>

            {/* ═══════════════════════════════════════════════════════
                FAQ SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.q}</span>
                                    <span className="medi-faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                CTA SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Plan Your Disney Cruise Dining Experience?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Disney Cruise Line offers one of the most unique dining experiences in the cruise industry. From rotational dining and character interactions to elegant adults-only restaurants and exceptional dietary accommodations, every meal becomes part of the Disney storytelling experience.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently navigate every aspect of their Disney cruise dining experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are planning:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Your first Disney cruise',
                                    'A family celebration voyage',
                                    'A romantic adults-only experience',
                                    'Specialty restaurant reservations',
                                    'Dietary accommodation planning'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Dining Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisneyCruiseDiningGuide