import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
// import Profile_AH from '../../assets/HXExpeditionsShips/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/HXExpeditionsShips/Profile_Picture_AH.jpg'

// ── Ship images (swap to real asset paths) ────────────────────────────────
// import roaldAmundsenImg  from '../../assets/HXExpeditionsShips/ms-roald-amundsen.webp'
// import fridtjofNansenImg from '../../assets/HXExpeditionsShips/ms-fridtjof-nansen.webp'
// import framImg           from '../../assets/HXExpeditionsShips/ms-fram.webp'
// import spitsbergenImg    from '../../assets/HXExpeditionsShips/ms-spitsbergen.webp'
// import santaCruzImg      from '../../assets/HXExpeditionsShips/ms-santa-cruz-ii.webp'

// ── Supporting images ────────────────────────────────────────────────────
// import cabinInteriorImg  from '../../assets/HXExpeditionsShips/hx-expedition-cabins.webp'
// import zodiacImg         from '../../assets/HXExpeditionsShips/zodiac-operations.webp'
// import wildlifeImg       from '../../assets/HXExpeditionsShips/expedition-wildlife.webp'
// import antarcticaImg     from '../../assets/HXExpeditionsShips/antarctica-expedition.webp'
// import svalbardImg       from '../../assets/HXExpeditionsShips/svalbard-expedition.webp'
// import galapagosImg      from '../../assets/HXExpeditionsShips/galapagos-expedition.webp'

// ── Hero images ──────────────────────────────────────────────────────────
// import hero1 from '../../assets/HXExpeditionsShips/hero1.jpg'
// import hero2 from '../../assets/HXExpeditionsShips/hero2.jpg'
// import hero3 from '../../assets/HXExpeditionsShips/hero3.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Binoculars, Wind, Snowflake, Camera
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function HXExpeditionsShips() {

    // ── Hero slider ────────────────────────────────────────────────────────
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero(prev => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    // ── FAQ ───────────────────────────────────────────────────────────────
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ── Ship showcase tabs ─────────────────────────────────────────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Mistakes slider ────────────────────────────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => setMediActiveMistake(p => (p + 1) % 6), 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    // ── Which ship active (new section) ───────────────────────────────────
    const [activeShipStyle, setActiveShipStyle] = useState(0)

    // ── Onboard experience tabs ────────────────────────────────────────────
    const [mediActiveOnboardTab, setMediActiveOnboardTab] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // ─────────────────────────────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────────────────────────────

    // Used in medi-itinerary-showcase-section (one tab per ship)
    const mediItineraries = [
        {
            title: 'MS Roald Amundsen',
            // img: roaldAmundsenImg,
            badge: 'FLAGSHIP HYBRID SHIP',
            bestFor: ['Antarctica first timers', 'Travelers wanting modern comfort', 'Guests preferring larger expedition ships', 'Travelers wanting balcony cabins', 'Expedition travelers seeking more amenities'],
            highlights: ['Large observation lounges', 'Science center', 'Infinity pool', 'Wellness area', 'Multiple dining venues']
        },
        {
            title: 'MS Fridtjof Nansen',
            // img: fridtjofNansenImg,
            badge: 'BEST FOR FIRST TIMERS',
            bestFor: ['First time expedition cruisers', 'Antarctica and Greenland travelers', 'Travelers wanting comfortable expedition experiences', 'Guests who appreciate modern ship design'],
            highlights: ['Hybrid expedition technology', 'Science Centre lectures', 'Spacious balcony cabins', 'Modern Scandinavian interiors', 'Strong expedition staff']
        },
        {
            title: 'MS Fram',
            // img: framImg,
            badge: 'CLASSIC EXPEDITION',
            bestFor: ['Experienced expedition travelers', 'Guests prioritizing expedition atmosphere', 'Arctic enthusiasts', 'Travelers preferring smaller passenger counts'],
            highlights: ['Traditional expedition atmosphere', 'Casual onboard vibe', 'Intimate setting', 'Antarctica & Arctic routes', 'Expedition focused programming']
        },
        {
            title: 'MS Spitsbergen',
            // img: spitsbergenImg,
            badge: 'INTIMATE ARCTIC',
            bestFor: ['Svalbard expeditions', 'Arctic wildlife lovers', 'Smaller ship enthusiasts', 'Polar photography travelers'],
            highlights: ['Small intimate ship', 'Svalbard & Arctic routes', 'Casual expedition atmosphere', 'Wildlife focused itineraries', 'Relaxed onboard setting']
        },
        {
            title: 'MS Santa Cruz II',
            // img: santaCruzImg,
            badge: 'GALÁPAGOS SPECIALIST',
            bestFor: ['Wildlife lovers', 'Warm weather expedition travel', 'Galápagos exploration', 'First time expedition travelers', 'Educational travel'],
            highlights: ['Dedicated Galápagos ship', 'Expert naturalist guides', 'Small ship atmosphere', 'Warm weather expedition', 'Incredible wildlife access']
        }
    ]

    const mediMistakes = [
        {
            title: 'Booking Based Only on Price',
            desc: 'The right expedition ship depends heavily on personality and travel priorities, not just the lowest price available.',
            bullets: ['Newer hybrid ships cost more but offer significantly more amenities', 'Smaller ships may better suit wildlife-first travelers']
        },
        {
            title: 'Ignoring Passenger Count Differences',
            desc: 'Passenger counts vary from around 90 guests on Santa Cruz II to approximately 490 guests on the larger hybrid ships. This dramatically affects the onboard atmosphere.'
        },
        {
            title: 'Choosing the Wrong Expedition Intensity',
            desc: 'Some HX ships feel more expedition focused while others lean more toward modern comfort. Matching expedition intensity to your comfort level matters significantly.'
        },
        {
            title: 'Overestimating Luxury Expectations',
            desc: 'HX ships focus more on expedition comfort and exploration than ultra luxury cruising. Travelers expecting Seabourn or Silversea levels of luxury may be surprised.'
        },
        {
            title: 'Not Understanding Landing Limitations',
            desc: 'Under IAATO regulations, only 100 passengers can be ashore simultaneously in Antarctica. Larger ships may feel more structured during shore time compared to smaller vessels.'
        },
        {
            title: 'Focusing Only on Cabin Categories',
            desc: 'Ship atmosphere, destination fit, expedition leadership quality and onboard programming all matter far more than cabin category alone when choosing an HX ship.'
        }
    ]

    const mediFaqs = [
        { question: 'What ships does HX Expeditions have?', answer: 'HX operates MS Roald Amundsen, MS Fridtjof Nansen, MS Fram, MS Spitsbergen and MS Santa Cruz II.' },
        { question: 'Which HX ship is best for Antarctica?', answer: 'MS Roald Amundsen and MS Fridtjof Nansen are among the most popular HX Antarctica ships.' },
        { question: 'What is the newest HX ship?', answer: 'MS Fridtjof Nansen and MS Roald Amundsen are HX\'s newest hybrid expedition ships.' },
        { question: 'Are HX ships luxurious?', answer: 'HX ships focus more on expedition comfort and exploration than ultra luxury cruising.' },
        { question: 'Which HX ship is best for first timers?', answer: 'MS Fridtjof Nansen and MS Roald Amundsen are excellent for first time expedition travelers.' },
        { question: 'What is the smallest HX ship?', answer: 'MS Santa Cruz II is among the smallest HX vessels with around 90 to 100 guests.' },
        { question: 'Does HX have hybrid expedition ships?', answer: 'Yes. MS Roald Amundsen and MS Fridtjof Nansen are hybrid powered expedition ships.' },
        { question: 'Which HX ship is best for the Galápagos?', answer: 'MS Santa Cruz II is HX\'s dedicated Galápagos expedition ship.' },
        { question: 'What are HX cabins like?', answer: 'HX cabins range from comfortable expedition style accommodations to larger balcony suites on newer ships.' },
        { question: 'Which HX ship has the most amenities?', answer: 'MS Roald Amundsen and MS Fridtjof Nansen offer the most modern amenities including infinity pools and wellness areas.' },
        { question: 'Is MS Fram older than MS Roald Amundsen?', answer: 'Yes. MS Fram entered service before the newer hybrid ships.' },
        { question: 'Which HX ship is best for wildlife cruises?', answer: 'All HX ships emphasize wildlife experiences, though Svalbard and Galápagos itineraries are particularly wildlife focused.' },
        { question: 'How many passengers are on HX ships?', answer: 'Passenger counts vary from around 90 guests on Santa Cruz II to approximately 490 guests on the larger hybrid ships.' },
        { question: 'Are HX ships casual or formal?', answer: 'HX ships are generally casual and expedition focused rather than formal luxury cruise ships.' },
        { question: 'Why book an HX cruise with a travel advisor?', answer: 'Expert advisors help travelers match the right ship, cabin and itinerary to their travel style and expectations.' }
    ]

    const mediSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-ships",
      "name": "HX Expeditions Ships Guide",
      "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-ships",
      "description": "Compare HX Expeditions ships including MS Roald Amundsen, MS Fridtjof Nansen, MS Fram, MS Spitsbergen and MS Santa Cruz II with expert advice from Trips & Ships Luxury Travel.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://www.tripsshipsluxurytravel.com/#organization"
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
      "description": "Luxury travel agency specializing in expedition cruises, polar voyages, small ship cruising and personalized travel planning."
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
      "headline": "HX Expeditions Ships Guide",
      "description": "Complete guide to HX Expeditions ships including ship comparisons, cabins, onboard atmosphere, passenger capacity and destination recommendations.",
      "author": {
        "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
      },
      "publisher": {
        "@id": "https://www.tripsshipsluxurytravel.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-ships"
      }
    },
    {
      "@type": "Service",
      "name": "HX Expedition Cruise Planning",
      "provider": {
        "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
      },
      "serviceType": "Expedition Cruise Consultation",
      "description": "Expert guidance for selecting the best HX expedition ship, itinerary, cabin category and destination."
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
          "name": "HX Expeditions Ships Guide",
          "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions-ships"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What ships does HX Expeditions have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HX Expeditions operates MS Roald Amundsen, MS Fridtjof Nansen, MS Fram, MS Spitsbergen and MS Santa Cruz II."
          }
        },
        {
          "@type": "Question",
          "name": "Which HX ship is best for Antarctica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Roald Amundsen and MS Fridtjof Nansen are among the most popular HX ships for Antarctica expeditions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the newest HX ship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Roald Amundsen and MS Fridtjof Nansen are HX Expeditions' newest hybrid-powered expedition ships."
          }
        },
        {
          "@type": "Question",
          "name": "Are HX ships luxurious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HX ships focus on expedition comfort, modern design and exploration rather than traditional ultra-luxury cruising."
          }
        },
        {
          "@type": "Question",
          "name": "Which HX ship is best for first timers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Fridtjof Nansen and MS Roald Amundsen are excellent choices for first-time expedition travelers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the smallest HX ship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Santa Cruz II is among the smallest vessels in the HX fleet and is dedicated to Galápagos expeditions."
          }
        },
        {
          "@type": "Question",
          "name": "Does HX have hybrid expedition ships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MS Roald Amundsen and MS Fridtjof Nansen are hybrid-powered expedition ships."
          }
        },
        {
          "@type": "Question",
          "name": "Which HX ship is best for the Galápagos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Santa Cruz II is HX Expeditions' dedicated Galápagos expedition ship."
          }
        },
        {
          "@type": "Question",
          "name": "What are HX cabins like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HX cabins range from comfortable expedition-style accommodations to spacious balcony cabins and suites on newer ships."
          }
        },
        {
          "@type": "Question",
          "name": "Which HX ship has the most amenities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MS Roald Amundsen and MS Fridtjof Nansen offer the most modern amenities including wellness areas, observation lounges and multiple dining venues."
          }
        },
        {
          "@type": "Question",
          "name": "Is MS Fram older than MS Roald Amundsen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MS Fram entered service before the newer hybrid ships such as MS Roald Amundsen."
          }
        },
        {
          "@type": "Question",
          "name": "Which HX ship is best for wildlife cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All HX ships emphasize wildlife experiences, with Galápagos, Svalbard and Antarctica itineraries being particularly wildlife focused."
          }
        },
        {
          "@type": "Question",
          "name": "How many passengers are on HX ships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passenger capacity varies by ship, ranging from around 90 guests on MS Santa Cruz II to approximately 490 guests on the larger hybrid vessels."
          }
        },
        {
          "@type": "Question",
          "name": "Are HX ships casual or formal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HX ships are generally casual, relaxed and expedition focused rather than formal luxury cruise ships."
          }
        },
        {
          "@type": "Question",
          "name": "Why book an HX cruise with a travel advisor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A travel advisor can help match travelers with the right ship, itinerary, cabin category and destination based on their travel style and expedition goals."
          }
        }
      ]
    }
  ]
};

    // ─────────────────────────────────────────────────────────────────────
    // RENDER
    // ─────────────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>HX Expeditions Ships Guide | Compare Roald Amundsen, Fram, Nansen & More
</title>
                <meta name="title" content="HX Expeditions Ships Guide | Expert Ship Comparison & Cabin Advice
" />
                <meta name="description" content="Compare HX Expeditions ships including MS Roald Amundsen, MS Fridtjof Nansen, MS Fram, MS Spitsbergen and MS Santa Cruz II with expert advice from Trips & Ships Luxury Travel.
" />
                <meta name="keywords" content="HX Expeditions Ships Guide
, HX expedition ships
, Best HX ship for Antarctica, HX expedition cabins
, MS Fridtjof Nansen
, MS Spitsbergen, MS Santa Cruz II, HX expedition ship comparison" />
                <script type="application/ld+json">{JSON.stringify(mediSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════════
                HERO
            ════════════════════════════════════════════════════════════ */}
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
                        <Ship size={16} />
                        <span>Expert Expedition Ship Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions Ships Guide
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                PREMIUM INTRO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style dangerouslySetInnerHTML={{ __html: `
                    .medi-premium-editorial-block::-webkit-scrollbar {
                        width: 6px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-track {
                        background: rgba(39, 68, 114, 0.05);
                        border-radius: 3px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb {
                        background: rgba(39, 68, 114, 0.2);
                        border-radius: 3px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover {
                        background: rgba(39, 68, 114, 0.4);
                        border-radius: 3px;
                    }
                `}} />
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left: Editorial */}
                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                        }}>
                            <span className="medi-premium-mini-badge">HX FLEET EXPERT GUIDE</span>
                            <h2 className="medi-premium-heading">Which HX Expedition Ship Is Right For You?</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Choosing the right HX expedition ship can dramatically shape your overall cruise experience. Some HX ships feel modern and upscale with larger public spaces and hybrid technology, while others feel smaller, more intimate and more traditionally expedition focused.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    The best HX ship depends on:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <MapPin size={20} />,      label: 'Destination' },
                                        { icon: <Gem size={20} />,         label: 'Comfort expectations' },
                                        { icon: <Crown size={20} />,       label: 'Budget' },
                                        { icon: <Compass size={20} />,     label: 'Activity level' },
                                        { icon: <Ship size={20} />,        label: 'Ship atmosphere' },
                                        { icon: <Binoculars size={20} />,  label: 'Wildlife priorities' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Expert Panel */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">EXPEDITION CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, we help travelers choose the HX ship that best fits their travel style, expectations and expedition goals.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips &amp; Ships Luxury Travel team provide trusted luxury expedition expertise travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                HX FLEET OVERVIEW  (medi-excel-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">EXPEDITION FLEET GUIDE // HX EXPEDITIONS</div>
                <div className="medi-excel-coord coord-tr">78.2232° N, 15.6267° E</div>
                <div className="medi-excel-coord coord-bl">-64.2823° S, -56.3214° W</div>
                <div className="medi-excel-coord coord-br">-0.9537° S, -90.9656° W</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">HX Fleet Overview</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX Expeditions currently operates a fleet of purpose built expedition ships designed for polar exploration, wildlife encounters and small ship expedition travel.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">The fleet includes:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Ship size={18} />,    label: 'MS Roald Amundsen' },
                                        { icon: <Ship size={18} />,    label: 'MS Fridtjof Nansen' },
                                        { icon: <Anchor size={18} />,  label: 'MS Fram' },
                                        { icon: <Anchor size={18} />,  label: 'MS Spitsbergen' },
                                        { icon: <Compass size={18} />, label: 'MS Santa Cruz II' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">The ships vary significantly in:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Users size={18} />,      label: 'Passenger capacity' },
                                        { icon: <Crown size={18} />,      label: 'Luxury level' },
                                        { icon: <Compass size={18} />,    label: 'Expedition atmosphere' },
                                        { icon: <Gem size={18} />,        label: 'Cabin styles' },
                                        { icon: <Sparkles size={18} />,   label: 'Public spaces' },
                                        { icon: <Star size={18} />,       label: 'Expedition intensity' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Choosing the right ship is just as important as choosing the right destination on an HX expedition cruise.
                        </p>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                QUICK SHIP COMPARISON TABLE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#f0f4f8', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.75, display: 'block', marginBottom: '10px' }}>
                            SIDE BY SIDE COMPARISON
                        </span>
                        <h2 className="medi-section-heading">Quick HX Ship Comparison Table</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(15,28,46,0.10)', minWidth: '700px' }}>
                            <thead>
                                <tr style={{ background: '#0f1c2e' }}>
                                    {['Ship', 'Best For', 'Passenger Size', 'Atmosphere', 'Main Regions'].map(h => (
                                        <th key={h} style={{ padding: '18px 20px', color: '#93c5fd', fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { ship: 'MS Roald Amundsen',   best: 'Modern Antarctica expeditions',       size: 'Larger expedition ship', atm: 'Modern & upscale',        region: 'Antarctica & Arctic' },
                                    { ship: 'MS Fridtjof Nansen',  best: 'First time polar travelers',          size: 'Larger expedition ship', atm: 'Scandinavian modern',     region: 'Antarctica & Greenland' },
                                    { ship: 'MS Fram',             best: 'Traditional expedition atmosphere',   size: 'Mid size',               atm: 'Expedition focused',      region: 'Antarctica & Arctic' },
                                    { ship: 'MS Spitsbergen',      best: 'Intimate Arctic exploration',         size: 'Smaller ship',           atm: 'Casual expedition',       region: 'Svalbard & Arctic' },
                                    { ship: 'MS Santa Cruz II',    best: 'Galápagos wildlife cruises',          size: 'Small ship',             atm: 'Warm weather expedition', region: 'Galápagos' },
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc', transition: 'background 0.2s' }}>
                                        <td style={{ padding: '16px 20px', fontWeight: '700', color: '#0f1c2e', fontSize: '14px', whiteSpace: 'nowrap' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Ship size={15} style={{ color: '#274472', flexShrink: 0 }} />{row.ship}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.best}</td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <span style={{ background: row.size.includes('Larger') ? '#dbeafe' : row.size.includes('Small ship') ? '#dcfce7' : '#fef9c3', color: row.size.includes('Larger') ? '#1e3a8a' : row.size.includes('Small ship') ? '#166534' : '#854d0e', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{row.size}</span>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.atm}</td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.region}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                INDIVIDUAL SHIP SHOWCASE  (medi-itinerary-showcase-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">DETAILED SHIP PROFILES</span>
                        <h2 className="medi-itinerary-showcase-heading">HX Expedition Ships – Detailed Guide</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Left tabs */}
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((ship, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{ship.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right showcase */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={mediItineraries[mediSelectedItinerary].img}
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">{mediItineraries[mediSelectedItinerary].badge}</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Best For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {mediItineraries[mediSelectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {mediItineraries[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                SHIP IMAGE GALLERY  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.75, display: 'block', marginBottom: '10px' }}>
                            HX FLEET IMAGERY
                        </span>
                        <h2 className="medi-section-heading">HX Ships &amp; Expedition Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* 6-image mosaic */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 260px)', gap: '14px' }}>
                        {[
                            // { img: roaldAmundsenImg,  alt: 'MS Roald Amundsen in Antarctica',           span: '1 / span 1 / 1 / span 2' },
                            // { img: fridtjofNansenImg, alt: 'MS Fridtjof Nansen expedition ship',        span: '' },
                            // { img: cabinInteriorImg,  alt: 'HX expedition suite balcony',               span: '' },
                            // { img: framImg,           alt: 'MS Fram in Arctic waters',                  span: '' },
                            // { img: santaCruzImg,      alt: 'MS Santa Cruz II in the Galápagos',         span: '' },
                            // { img: zodiacImg,         alt: 'Expedition travelers onboard HX ship',      span: '' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                borderRadius: '14px', overflow: 'hidden', position: 'relative',
                                gridColumn: i === 0 ? 'span 2' : '',
                            }}>
                                <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.75), transparent)', padding: '18px 14px 12px' }}>
                                    <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '500' }}>{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 3 remaining images */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginTop: '14px' }}>
                        {[
                            // { img: spitsbergenImg, alt: 'MS Spitsbergen Arctic expedition' },
                            // { img: antarcticaImg,  alt: 'MS Roald Amundsen in Antarctica' },
                            // { img: galapagosImg,   alt: 'Galápagos wildlife expedition cruise' },
                        ].map((item, i) => (
                            <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', height: '240px' }}>
                                <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.75), transparent)', padding: '18px 14px 12px' }}>
                                    <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '500' }}>{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHAT HX SHIPS FEEL LIKE  — tab-panel layout
            ════════════════════════════════════════════════════════════ */}
            <section style={{
                background: 'linear-gradient(180deg, var(--medi-bg-soft, #f0f4f8) 0%, #ffffff 100%)',
                backgroundImage: 'radial-gradient(rgba(39,68,114,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                borderTop: '1px solid rgba(39,68,114,0.12)',
                borderBottom: '1px solid rgba(39,68,114,0.12)',
                padding: isMobileViewport ? '60px 16px' : '100px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Ambient glow blobs */}
                <div style={{
                    position: 'absolute', top: '5%', left: '5%',
                    width: '350px', height: '350px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)', pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.10) 0%, transparent 70%)',
                    filter: 'blur(70px)', pointerEvents: 'none',
                }} />

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1.6fr',
                        gap: '40px',
                        width: '100%',
                        boxSizing: 'border-box',
                        alignItems: 'start'
                    }}>

                        {/* ── LEFT: sticky nav ── */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '24px',
                            position: isMobileViewport ? 'static' : 'sticky', top: '100px', zIndex: 5,
                        }}>
                            <div style={{ textAlign: isMobileViewport ? 'center' : 'left' }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '6px 16px', borderRadius: '100px', marginBottom: '16px',
                                    background: 'rgba(39,68,114,0.10)',
                                    border: '1px solid rgba(39,68,114,0.18)',
                                }}>
                                    <Compass size={14} color="#274472" />
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#274472' }}>
                                        ONBOARD EXPERIENCE
                                    </span>
                                </div>
                                <h2 style={{
                                    fontWeight: '600', lineHeight: '1.25',
                                    margin: '0 0 16px 0', fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                                    color: '#0f1c2e',
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word'
                                }}>
                                    What HX Ships Feel Like Onboard
                                </h2>
                                <p style={{ fontSize: '0.95rem', margin: '0 0 24px 0', lineHeight: '1.6', color: '#475569' }}>
                                    Select a topic below to explore what the HX expedition experience is really like.
                                </p>
                            </div>

                            {/* Tab buttons */}
                            <div style={{
                                display: 'flex',
                                flexDirection: isMobileViewport ? 'row' : 'column',
                                gap: '12px',
                                overflowX: isMobileViewport ? 'auto' : 'visible',
                                paddingBottom: isMobileViewport ? '12px' : '0',
                                scrollSnapType: isMobileViewport ? 'x mandatory' : 'none'
                            }}>
                                {[
                                    { number: '01', title: 'Travelers Should Expect',     desc: 'Casual, educational, exploration-first' },
                                    { number: '02', title: 'Travelers Should Not Expect', desc: 'What HX ships don\'t offer' },
                                    { number: '03', title: 'Key Ship Differences',        desc: 'Fleet styles & atmosphere' },
                                ].map((tab, idx) => {
                                    const isActive = mediActiveOnboardTab === idx
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setMediActiveOnboardTab(idx)}
                                            style={{
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '20px 24px',
                                                background: isActive ? '#0f1c2e' : 'transparent',
                                                border: isActive ? '1px solid rgba(39,68,114,0.5)' : '1px solid rgba(39,68,114,0.2)',
                                                borderRadius: '16px', cursor: 'pointer',
                                                textAlign: 'left', width: isMobileViewport ? '260px' : '100%',
                                                flexShrink: 0,
                                                scrollSnapAlign: 'start',
                                                transform: isActive && !isMobileViewport ? 'translateX(8px)' : 'translateX(0)',
                                                boxShadow: isActive ? '0 8px 32px rgba(15,28,46,0.18)' : 'none',
                                                transition: 'all 0.25s ease', outline: 'none',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <span style={{
                                                    fontSize: '1.25rem', fontWeight: '800',
                                                    color: isActive ? '#ffffff' : '#94a3b8',
                                                    fontFamily: 'monospace',
                                                }}>
                                                    {tab.number}
                                                </span>
                                                <div>
                                                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: isActive ? '#ffffff' : '#475569' }}>
                                                        {tab.title}
                                                    </div>
                                                    {!isMobileViewport && (
                                                        <div style={{ fontSize: '0.75rem', color: isActive ? '#93c5fd' : '#94a3b8', marginTop: '4px' }}>
                                                            {tab.desc}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div style={{
                                                width: '8px', height: '8px', borderRadius: '50%',
                                                background: isActive ? '#93c5fd' : 'rgba(39,68,114,0.3)',
                                                boxShadow: isActive ? '0 0 10px #93c5fd' : 'none',
                                                transition: 'all 0.25s ease',
                                            }} />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── RIGHT: content panel ── */}
                        <div style={{
                            background: '#0f1c2e',
                            border: '1px solid rgba(39,68,114,0.35)',
                            borderRadius: '24px', padding: isMobileViewport ? '24px' : '48px',
                            boxShadow: '0 8px 40px rgba(15,28,46,0.22)',
                            minHeight: '450px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            position: 'relative', overflow: 'hidden',
                            boxSizing: 'border-box'
                        }}>
                            {/* Watermark label */}
                            <div style={{
                                position: 'absolute', bottom: '24px', right: '28px',
                                color: 'rgba(39,68,114,0.4)', fontFamily: 'monospace',
                                fontSize: '11px', fontWeight: '700', letterSpacing: '2px',
                                pointerEvents: 'none',
                            }}>
                                HX EXPEDITIONS // ONBOARD EXPERIENCE
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>

                                {/* ── Tab 0: Travelers Should Expect ── */}
                                {mediActiveOnboardTab === 0 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '12px',
                                                background: 'rgba(39,68,114,0.4)', border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Compass size={22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>
                                                Travelers Should Expect
                                            </h3>
                                        </div>

                                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                            HX ships feel very different from mainstream cruise ships.
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {['Casual atmosphere', 'Educational lectures', 'Expedition briefings', 'Wildlife discussions', 'Relaxed dress codes', 'Outdoor exploration focus'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                    <span style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                            <p style={{ color: '#93c5fd', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
                                                The expedition atmosphere is the defining feature of every HX voyage.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ── Tab 1: Travelers Should Not Expect ── */}
                                {mediActiveOnboardTab === 1 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '12px',
                                                background: 'rgba(39,68,114,0.4)', border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Moon size={22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>
                                                Travelers Should Not Expect
                                            </h3>
                                        </div>

                                        <div style={{
                                            background: 'rgba(39,68,114,0.2)', border: '1px solid rgba(39,68,114,0.4)',
                                            borderRadius: '14px', padding: '18px 22px',
                                            display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px',
                                        }}>
                                            <div style={{
                                                width: '52px', height: '52px', borderRadius: '50%',
                                                border: '2px solid rgba(147,197,253,0.4)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                            }}>
                                                <span style={{ color: '#93c5fd', fontSize: '12px', fontWeight: '800' }}>EXP</span>
                                            </div>
                                            <span style={{ color: '#93c5fd', fontSize: '11px', fontWeight: '700', letterSpacing: '2px' }}>EXPEDITION FIRST</span>
                                        </div>

                                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                            The destinations themselves become the primary entertainment.
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {['Casinos', 'Broadway entertainment', 'Large ship nightlife', 'Formal cruise culture'].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>✕</span>
                                                    <span style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                            <p style={{ color: '#93c5fd', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
                                                The destinations themselves become the primary entertainment.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ── Tab 2: Key Ship Differences ── */}
                                {mediActiveOnboardTab === 2 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '12px',
                                                background: 'rgba(39,68,114,0.4)', border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Ship size={22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>
                                                Key Ship Differences
                                            </h3>
                                        </div>

                                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                            The fleet divides into two distinct styles:
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                            {[
                                                'Hybrid flagships – modern, larger, more amenities',
                                                'Classic ships – smaller, more intimate, expedition focused',
                                                'Galápagos specialist – warm weather, wildlife',
                                                'All ships: casual dress code, relaxed atmosphere',
                                                'All ships: destination is the entertainment',
                                            ].map((item, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                    <span style={{
                                                        background: 'rgba(39,68,114,0.5)', color: '#93c5fd',
                                                        fontSize: '11px', fontWeight: '800',
                                                        padding: '4px 10px', borderRadius: '6px',
                                                        flexShrink: 0, fontFamily: 'monospace',
                                                    }}>0{i + 1}</span>
                                                    <span style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                            <p style={{ color: '#93c5fd', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
                                                For travelers prioritizing exploration over onboard spectacle, HX delivers a highly authentic experience.
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHICH HX SHIP FITS YOUR TRAVEL STYLE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#0f1c2e', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(39,68,114,0.35) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', display: 'block', marginBottom: '12px' }}>
                            SHIP MATCHING GUIDE
                        </span>
                        <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#ffffff', margin: '0 0 20px', lineHeight: '1.2' }}>
                            Which HX Ship Fits Your Travel Style?
                        </h2>
                        <div style={{ width: '56px', height: '4px', background: '#274472', margin: '0 auto' }} />
                    </div>

                    {/* Selector buttons */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '44px' }}>
                        {['MS Roald Amundsen', 'MS Fridtjof Nansen', 'MS Fram', 'MS Spitsbergen', 'MS Santa Cruz II'].map((name, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveShipStyle(idx)}
                                style={{
                                    padding: '10px 22px', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', transition: 'all 0.25s ease',
                                    border: `2px solid ${activeShipStyle === idx ? '#274472' : 'rgba(255,255,255,0.15)'}`,
                                    background: activeShipStyle === idx ? '#274472' : 'transparent',
                                    color: activeShipStyle === idx ? '#ffffff' : '#94a3b8',
                                }}
                            >{name}</button>
                        ))}
                    </div>

                    {/* Content cards */}
                    {[
                        {
                            title: 'Choose MS Roald Amundsen If You Want:',
                            // img: roaldAmundsenImg,
                            points: ['Modern luxury', 'Antarctica comfort', 'Balcony cabins', 'Larger ship amenities'],
                            note: 'MS Roald Amundsen was the world\'s first hybrid powered expedition cruise ship and remains one of HX\'s flagship vessels.'
                        },
                        {
                            title: 'Choose MS Fridtjof Nansen If You Want:',
                            // img: fridtjofNansenImg,
                            points: ['Beginner friendly expedition travel', 'Hybrid ship technology', 'Comfortable polar cruising'],
                            note: 'MS Fridtjof Nansen is the sister ship to Roald Amundsen and features hybrid expedition technology and modern Scandinavian interiors.'
                        },
                        {
                            title: 'Choose MS Fram If You Want:',
                            // img: framImg,
                            points: ['Traditional expedition atmosphere', 'More intimate experience', 'Strong expedition focus'],
                            note: 'MS Fram offers a more classic expedition experience and carries fewer guests than the newer hybrid ships.'
                        },
                        {
                            title: 'Choose MS Spitsbergen If You Want:',
                            // img: spitsbergenImg,
                            points: ['Smaller Arctic exploration', 'Polar wildlife focus', 'Casual expedition atmosphere'],
                            note: 'MS Spitsbergen is one of HX\'s smaller expedition ships and feels particularly suited for Arctic itineraries and wildlife focused travel.'
                        },
                        {
                            title: 'Choose MS Santa Cruz II If You Want:',
                            // img: santaCruzImg,
                            points: ['Galápagos wildlife', 'Warm weather expedition travel', 'Softer adventure experiences'],
                            note: 'MS Santa Cruz II is HX\'s Galápagos expedition vessel and operates in one of the world\'s most wildlife rich destinations.'
                        },
                    ].map((ship, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: activeShipStyle === idx ? 'grid' : 'none',
                                gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center',
                                background: 'rgba(255,255,255,0.04)', borderRadius: '20px', overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.08)'
                            }}
                        >
                            <div style={{ height: '420px', overflow: 'hidden', position: 'relative' }}>
                                <img src={ship.img} alt={ship.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 55%, #0f1c2e)' }} />
                            </div>
                            <div style={{ padding: '48px 48px 48px 0' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '500', color: '#ffffff', marginBottom: '20px', lineHeight: '1.3' }}>{ship.title}</h3>
                                <div style={{ width: '40px', height: '3px', background: '#274472', marginBottom: '24px' }} />
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {ship.points.map((pt, pi) => (
                                        <li key={pi} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '15px' }}>
                                            <CheckCircle size={15} style={{ color: '#10b981', flexShrink: 0 }} />{pt}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '3px solid #274472', paddingLeft: '14px' }}>{ship.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CABINS & SUITES GUIDE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#f8fafc', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.75, display: 'block', marginBottom: '10px' }}>
                            ACCOMMODATION GUIDE
                        </span>
                        <h2 className="medi-section-heading">Cabins &amp; Suites Guide</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
                        {/* Left: image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', height: '480px', position: 'relative', boxShadow: '0 8px 40px rgba(15,28,46,0.15)' }}>
                            {/* <img src={cabinInteriorImg} alt="HX expedition cabins interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.85), transparent)', padding: '32px 28px 24px' }}>
                                <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500', margin: 0, lineHeight: '1.5' }}>HX expedition suite balcony</p>
                                <p style={{ color: '#93c5fd', fontSize: '13px', margin: '6px 0 0' }}>Modern Scandinavian design influences</p>
                            </div>
                        </div>

                        {/* Right: cabin breakdown by ship */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                {
                                    ship: 'MS Roald Amundsen &amp; MS Fridtjof Nansen',
                                    icon: <Ship size={18} />,
                                    desc: 'Cabins tend to feel modern and clean with strong Scandinavian design influences. Many cabins include balconies, large windows, modern bathrooms and minimalist luxury styling.'
                                },
                                {
                                    ship: 'MS Fram',
                                    icon: <Anchor size={18} />,
                                    desc: 'Cabins are generally simpler than the newer hybrid ships but still comfortable. Travelers prioritizing modern luxury design may prefer Roald Amundsen or Fridtjof Nansen.'
                                },
                                {
                                    ship: 'MS Spitsbergen',
                                    icon: <Wind size={18} />,
                                    desc: 'Cabins are functional and comfortable but less luxurious than HX\'s flagship hybrid ships. Travelers wanting extensive luxury amenities may find MS Spitsbergen more expedition focused than luxury oriented.'
                                },
                                {
                                    ship: 'MS Santa Cruz II',
                                    icon: <Sun size={18} />,
                                    desc: 'Cabins are designed for comfort and practicality within the Galápagos environment. This ship delivers a very different experience from polar expedition ships due to climate, wildlife and destination style.'
                                },
                            ].map((item, i) => (
                                <div key={i} style={{ background: '#ffffff', borderRadius: '14px', padding: '24px 28px', border: '1px solid rgba(39,68,114,0.1)', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '44px', height: '44px', background: '#e7f3f5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#274472', flexShrink: 0 }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 8px' }} dangerouslySetInnerHTML={{ __html: item.ship }} />
                                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="hx-ships-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Expedition Expert" /> */}
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
<br className="medi-growth-title-break" />Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in helping travelers choose the right expedition ship, destination and itinerary based on travel style, comfort expectations and expedition goals.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Angela consistently helps travelers evaluate:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Ship atmosphere', 'Passenger count', 'Cabin style', 'Expedition intensity', 'Destination fit', 'Comfort expectations'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate increasingly complex expedition ship choices with real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Safaris', icon: Globe },
                                        { title: 'Premium global travel planning', icon: Sparkles }
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

            {/* ════════════════════════════════════════════════════════════
                IS HX LUXURY  (medi-luxury-definition-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING THE EXPERIENCE</span>
                        <h2 className="medi-luxury-heading">Are HX Ships Luxurious?</h2>

                        <p className="medi-luxury-paragraph">
                            HX ships focus more on expedition comfort and exploration than ultra luxury cruising. The newer hybrid ships offer the most modern amenities in the fleet.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Travelers appreciate HX ships for:</h3>
                            <div className="medi-luxury-features-grid">
                                {['Science centers and educational programming', 'Expert expedition staff', 'Comfortable expedition cabins', 'Observation lounges and outdoor decks', 'Wellness areas on newer ships', 'Infinity pools on hybrid ships', 'Casual relaxed atmosphere', 'All-inclusive style pricing'].map((f, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                However, travelers expecting ultra luxury experiences comparable to Seabourn, Silversea or Regent Seven Seas should understand HX delivers a more expedition focused and exploration centric style.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For most expedition travelers, the authentic adventure experience is exactly the appeal.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        {/* <img src={wildlifeImg} alt="Expedition travelers onboard HX ship" className="medi-luxury-main-image" /> */}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                COMMON MISTAKES SLIDER  (medi-mistakes-slider-section)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID SHIP SELECTION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common Ship Selection Mistakes
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{mistake.desc}</p>
                                        {mistake.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {mistake.bullets.map((b, bi) => (
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
                            onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx} className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`} onClick={() => setMediActiveMistake(idx)} aria-label={`Slide ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BEST FOR / NOT BEST FOR  (medi-audience-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>HX Expeditions Ships: Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Compass size={20} className="medi-audience-icon" />, label: 'First time expedition travelers' },
                                    { icon: <Binoculars size={20} className="medi-audience-icon" />, label: 'Wildlife enthusiasts' },
                                    { icon: <GraduationCap size={20} className="medi-audience-icon" />, label: 'Curious travelers' },
                                    { icon: <Camera size={20} className="medi-audience-icon" />, label: 'Nature photographers' },
                                    { icon: <Star size={20} className="medi-audience-icon" />, label: 'Travelers seeking educational experiences' },
                                    { icon: <Globe size={20} className="medi-audience-icon" />, label: 'Bucket list adventurers' },
                                    { icon: <Users size={20} className="medi-audience-icon" />, label: 'Travelers of all ages with moderate mobility' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Not Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Crown size={20} className="medi-audience-icon" />, label: 'Travelers wanting traditional ultra luxury cruising' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Guests seeking nightlife and entertainment' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Travelers uncomfortable with flexible itineraries' },
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Travelers with significant mobility limitations' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

          

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes &amp; Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} /> */}
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel",                                      icon: Crown,         category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University",                                      icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry",                                icon: Clock,         category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries",                                     icon: Globe,         category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer",                                 icon: Mic,           category: "SPEAKING" },
                                    { text: "Weekly industry columnist",                                               icon: FileText,      category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member",                            icon: Users,         category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year",                              icon: Award,         category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown,        category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist",                                  icon: Ship,          category: "SPECIALTY" },
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

            {/* ════════════════════════════════════════════════════════════
                VIDEO  (inline CSS – same as reference)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of authentic expedition adventures, stunning wildlife encounters and remote destinations aboard HX expedition ships.
                    </p>
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)', aspectRatio: '16/9', background: '#000' }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/qUpr3evauEc"
                            title="Experience HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            </section>

          

            {/* ════════════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════════════ */}
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
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Choose The Right HX Expedition Ship?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing the right HX ship can dramatically impact your expedition experience. The right ship atmosphere, cabin category and expedition style truly matter.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips &amp; Ships Luxury Travel provides personalized expert guidance to help travelers confidently select the best HX expedition ship for their travel goals.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['MS Roald Amundsen for Antarctica', 'MS Fridtjof Nansen for first time polar travel', 'MS Fram for classic expedition atmosphere', 'MS Spitsbergen for intimate Arctic exploration', 'MS Santa Cruz II for Galápagos wildlife'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips &amp; Ships Luxury Travel today to begin planning your expedition adventure.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Ship Recommendations
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HXExpeditionsShips