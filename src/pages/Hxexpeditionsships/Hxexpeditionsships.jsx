import Navbar from '../../components/Navbar/Navbar'
import Profile_AH from '../../assets/Media (2).jpg'
import Profile_Picture_AH from '../../assets/Media (1).jpg'


import MSAmundsen from '../../assets/Hxexpeditionsships/MS Amundsen.webp'
import MSNansen from '../../assets/Hxexpeditionsships/MS Nansen.webp'
import MSFarm from '../../assets/Hxexpeditionsships/MS Farm.webp'
import MSSpitsbergen from '../../assets/Hxexpeditionsships/MS Spitsbergen.webp'
import MSSanta from '../../assets/Hxexpeditionsships/MS Santa.webp'

import MSAmundsen1 from '../../assets/Hxexpeditionsships/MS Roald Amundsen1.webp'
import MSNansen1 from '../../assets/Hxexpeditionsships/MS Fridtjof Nansen1.webp'
import MSFarm1 from '../../assets/Hxexpeditionsships/MS Fram1.webp'
import MSSpitsbergen1 from '../../assets/Hxexpeditionsships/MS Spitsbergen1.webp'
import MSSanta1 from '../../assets/Hxexpeditionsships/MS Santa Cruz 1.webp'

// ── Ship images (swap to real asset paths) ────────────────────────────────
import roaldAmundsenImg  from '../../assets/Hxexpeditionsships/roaldAmundsenImg.webp'
import fridtjofNansenImg from '../../assets/Hxexpeditionsships/fridtjofNansenImg.webp'
import framImg from '../../assets/Hxexpeditionsships/framImg.webp'
import santaCruzImg from '../../assets/Hxexpeditionsships/santaCruzImg.webp'

// ── Supporting images ────────────────────────────────────────────────────
import cabinInteriorImg from '../../assets/Hxexpeditionsships/cabinInteriorImg.webp'
import zodiacImg from '../../assets/Hxexpeditionsships/zodiacImg.webp'

import cabinsuite from '../../assets/Hxexpeditionsships/suite balcony.webp'
import luxury from '../../assets/Hxexpeditionsships/ship Luxurious.webp'

// ── Hero images ──────────────────────────────────────────────────────────
import hero1 from '../../assets/Hxexpeditionsships/hero1.webp'
import hero2 from '../../assets/Hxexpeditionsships/hero2.webp'
import hero3 from '../../assets/Hxexpeditionsships/hero3.webp'

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
    const mediHeroImages = [hero1, hero2, hero3]

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
            img: MSAmundsen,
            badge: 'FLAGSHIP HYBRID SHIP',
            bestFor: ['Antarctica first timers', 'Travelers wanting modern comfort', 'Guests preferring larger expedition ships', 'Travelers wanting balcony cabins', 'Expedition travelers seeking more amenities'],
            highlights: ['Large observation lounges', 'Science center', 'Infinity pool', 'Wellness area', 'Multiple dining venues']
        },
        {
            title: 'MS Fridtjof Nansen',
            img: MSNansen,
            badge: 'BEST FOR FIRST TIMERS',
            bestFor: ['First time expedition cruisers', 'Antarctica and Greenland travelers', 'Travelers wanting comfortable expedition experiences', 'Guests who appreciate modern ship design'],
            highlights: ['Hybrid expedition technology', 'Science Centre lectures', 'Spacious balcony cabins', 'Modern Scandinavian interiors', 'Strong expedition staff']
        },
        {
            title: 'MS Fram',
            img: MSFarm,
            badge: 'CLASSIC EXPEDITION',
            bestFor: ['Experienced expedition travelers', 'Guests prioritizing expedition atmosphere', 'Arctic enthusiasts', 'Travelers preferring smaller passenger counts'],
            highlights: ['Traditional expedition atmosphere', 'Casual onboard vibe', 'Intimate setting', 'Antarctica & Arctic routes', 'Expedition focused programming']
        },
        {
            title: 'MS Spitsbergen',
            img: MSSpitsbergen,
            badge: 'INTIMATE ARCTIC',
            bestFor: ['Svalbard expeditions', 'Arctic wildlife lovers', 'Smaller ship enthusiasts', 'Polar photography travelers'],
            highlights: ['Small intimate ship', 'Svalbard & Arctic routes', 'Casual expedition atmosphere', 'Wildlife focused itineraries', 'Relaxed onboard setting']
        },
        {
            title: 'MS Santa Cruz II',
            img: MSSanta,
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

            <section className="hx-gallery-section">
                <style dangerouslySetInnerHTML={{ __html: `
                    .hx-gallery-section {
                        background: #ffffff;
                        padding: 80px 20px;
                    }
                    .hx-gallery-container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .hx-gallery-header {
                        text-align: center;
                        margin-bottom: 44px;
                    }
                    .hx-gallery-subtitle {
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 0.25em;
                        text-transform: uppercase;
                        color: #274472;
                        opacity: 0.75;
                        display: block;
                        margin-bottom: 10px;
                    }
                    .hx-gallery-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-auto-rows: 260px;
                        gap: 14px;
                    }
                    .hx-gallery-item {
                        border-radius: 14px;
                        overflow: hidden;
                        position: relative;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .hx-gallery-item:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 30px rgba(15,28,46,0.15);
                    }
                    .hx-gallery-item:first-child {
                        grid-column: span 2;
                    }
                    .hx-gallery-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.5s ease;
                    }
                    .hx-gallery-item:hover .hx-gallery-img {
                        transform: scale(1.04);
                    }
                    .hx-gallery-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(15,28,46,0.85), transparent);
                        padding: 18px 14px 12px;
                        transition: background 0.3s ease;
                    }
                    .hx-gallery-item:hover .hx-gallery-overlay {
                        background: linear-gradient(to top, rgba(15,28,46,0.92), transparent);
                    }
                    .hx-gallery-caption {
                        color: #ffffff;
                        font-size: 13px;
                        font-weight: 500;
                    }
                    .hx-gallery-grid-row2 {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 14px;
                        margin-top: 14px;
                    }
                    .hx-gallery-grid-row2 .hx-gallery-item {
                        height: 240px;
                    }

                    /* Responsive styling */
                    @media (max-width: 991px) {
                        .hx-gallery-section {
                            padding: 60px 16px;
                        }
                        .hx-gallery-grid {
                            grid-template-columns: repeat(2, 1fr);
                            grid-auto-rows: 240px;
                            gap: 12px;
                        }
                        .hx-gallery-item:first-child {
                            grid-column: span 1;
                        }
                        .hx-gallery-grid-row2 {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 12px;
                            margin-top: 12px;
                        }
                    }

                    @media (max-width: 575px) {
                        .hx-gallery-section {
                            padding: 40px 12px;
                        }
                        .hx-gallery-grid {
                            grid-template-columns: 1fr;
                            grid-auto-rows: 200px;
                            gap: 10px;
                        }
                        .hx-gallery-item:first-child {
                            grid-column: span 1;
                        }
                        .hx-gallery-grid-row2 {
                            grid-template-columns: 1fr;
                            gap: 10px;
                            margin-top: 10px;
                        }
                    }
                `}} />
                <div className="hx-gallery-container">
                    <div className="hx-gallery-header">
                        <span className="hx-gallery-subtitle">
                            HX FLEET IMAGERY
                        </span>
                        <h2 className="medi-section-heading">HX Ships &amp; Expedition Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* 6-image mosaic */}
                    <div className="hx-gallery-grid">
                        {[
                            { img: roaldAmundsenImg,  alt: 'MS Roald Amundsen in Antarctica',           span: '1 / span 1 / 1 / span 2' },
                            { img: fridtjofNansenImg, alt: 'MS Fridtjof Nansen expedition ship',        span: '' },
                            { img: cabinInteriorImg,  alt: 'HX expedition suite balcony',               span: '' },
                            { img: framImg,           alt: 'MS Fram in Arctic waters',                  span: '' },
                            { img: santaCruzImg,      alt: 'MS Santa Cruz II in the Galápagos',         span: '' },
                            { img: zodiacImg,         alt: 'Expedition travelers onboard HX ship',      span: '' },
                        ].map((item, i) => (
                            <div key={i} className="hx-gallery-item">
                                <img src={item.img} alt={item.alt} className="hx-gallery-img" />
                                <div className="hx-gallery-overlay">
                                    <span className="hx-gallery-caption">{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 3 remaining images */}
                    <div className="hx-gallery-grid-row2">
                        {[
                            // { img: spitsbergenImg, alt: 'MS Spitsbergen Arctic expedition' },
                            // { img: antarcticaImg,  alt: 'MS Roald Amundsen in Antarctica' },
                            // { img: galapagosImg,   alt: 'Galápagos wildlife expedition cruise' },
                        ].map((item, i) => (
                            <div key={i} className="hx-gallery-item">
                                <img src={item.img} alt={item.alt} className="hx-gallery-img" />
                                <div className="hx-gallery-overlay">
                                    <span className="hx-gallery-caption">{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHAT HX SHIPS FEEL LIKE  — tab-panel layout
            ════════════════════════════════════════════════════════════ */}
            <section className="hx-onboard-section">
                <style dangerouslySetInnerHTML={{ __html: `
                    .hx-onboard-section {
                        --navy-rgb: 39, 68, 114;
                        background: linear-gradient(180deg, var(--medi-bg-soft, #f0f4f8) 0%, #ffffff 100%);
                        background-image: radial-gradient(rgba(var(--navy-rgb), 0.08) 1px, transparent 1px);
                        background-size: 32px 32px;
                        border-top: 1px solid rgba(var(--navy-rgb), 0.12);
                        border-bottom: 1px solid rgba(var(--navy-rgb), 0.12);
                        padding: 100px 24px;
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .hx-onboard-glow-1 {
                        position: absolute;
                        top: 5%;
                        left: 5%;
                        width: 350px;
                        height: 350px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(var(--navy-rgb), 0.12) 0%, transparent 70%);
                        filter: blur(60px);
                        pointer-events: none;
                    }
                    .hx-onboard-glow-2 {
                        position: absolute;
                        bottom: 10%;
                        right: 5%;
                        width: 400px;
                        height: 400px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(var(--navy-rgb), 0.10) 0%, transparent 70%);
                        filter: blur(70px);
                        pointer-events: none;
                    }
                    .hx-onboard-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .hx-onboard-grid {
                        display: grid;
                        grid-template-columns: 1fr 1.6fr;
                        gap: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        align-items: start;
                    }
                    .hx-onboard-sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        position: sticky;
                        top: 100px;
                        z-index: 5;
                    }
                    .hx-onboard-sidebar-header {
                        text-align: left;
                    }
                    .hx-onboard-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 6px 16px;
                        border-radius: 100px;
                        margin-bottom: 16px;
                        background: rgba(var(--navy-rgb), 0.10);
                        border: 1px solid rgba(var(--navy-rgb), 0.18);
                    }
                    .hx-onboard-badge span {
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: var(--navy);
                    }
                    .hx-onboard-title {
                        font-weight: 600;
                        line-height: 1.25;
                        margin: 0 0 16px 0;
                        font-size: clamp(1.6rem, 3vw, 2.2rem);
                        color: var(--navy);
                        word-break: break-word;
                        overflow-wrap: break-word;
                    }
                    .hx-onboard-desc {
                        font-size: 0.95rem;
                        margin: 0 0 24px 0;
                        line-height: 1.6;
                        color: #475569;
                    }
                    .hx-onboard-tabs {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .hx-onboard-tab-btn {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px 24px;
                        background: transparent;
                        border: 1px solid rgba(var(--navy-rgb), 0.2);
                        border-radius: 16px;
                        cursor: pointer;
                        text-align: left;
                        width: 100%;
                        box-sizing: border-box;
                        transition: all 0.25s ease;
                        outline: none;
                    }
                    .hx-onboard-tab-btn:hover {
                        border-color: rgba(var(--navy-rgb), 0.4);
                        background: rgba(var(--navy-rgb), 0.03);
                    }
                    .hx-onboard-tab-btn.active {
                        background: #0f1c2e;
                        border-color: rgba(var(--navy-rgb), 0.5);
                        transform: translateX(8px);
                        box-shadow: 0 8px 32px rgba(15,28,46,0.18);
                    }
                    .hx-onboard-tab-content-flex {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                    }
                    .hx-onboard-tab-num {
                        font-size: 1.25rem;
                        font-weight: 800;
                        color: #94a3b8;
                        font-family: monospace;
                        transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-num {
                        color: #ffffff;
                    }
                    .hx-onboard-tab-title {
                        font-size: 0.95rem;
                        font-weight: 700;
                        color: #475569;
                        transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-title {
                        color: #ffffff;
                    }
                    .hx-onboard-tab-desc {
                        font-size: 0.75rem;
                        color: #94a3b8;
                        margin-top: 4px;
                        transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-desc {
                        color: #93c5fd;
                    }
                    .hx-onboard-tab-dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: rgba(var(--navy-rgb), 0.3);
                        transition: all 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-dot {
                        background: #93c5fd;
                        box-shadow: 0 0 10px #93c5fd;
                    }
                    .hx-onboard-panel {
                        background: #0f1c2e;
                        border: 1px solid rgba(var(--navy-rgb), 0.35);
                        border-radius: 24px;
                        padding: 48px;
                        box-shadow: 0 8px 40px rgba(15,28,46,0.22);
                        min-height: 450px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        position: relative;
                        overflow: hidden;
                        box-sizing: border-box;
                    }
                    .hx-onboard-watermark {
                        position: absolute;
                        bottom: 24px;
                        right: 28px;
                        color: rgba(var(--navy-rgb), 0.4);
                        font-family: monospace;
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 2px;
                        pointer-events: none;
                    }
                    .hx-onboard-panel-header {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        margin-bottom: 28px;
                    }
                    .hx-onboard-panel-icon-box {
                        width: 48px;
                        height: 48px;
                        border-radius: 12px;
                        background: rgba(var(--navy-rgb), 0.4);
                        border: 1px solid rgba(var(--navy-rgb), 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .hx-onboard-panel-title {
                        color: #ffffff;
                        font-size: 1.4rem;
                        font-weight: 700;
                        margin: 0;
                    }
                    .hx-onboard-panel-lead {
                        color: #94a3b8;
                        font-size: 0.95rem;
                        margin-bottom: 20px;
                        line-height: 1.6;
                    }
                    .hx-onboard-panel-list {
                        list-style: none;
                        padding: 0;
                        margin: 0 0 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .hx-onboard-panel-list-item {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }
                    .hx-onboard-panel-list-item-text {
                        color: #e2e8f0;
                        font-size: 0.92rem;
                    }
                    .hx-onboard-note-box {
                        margin-top: 16px;
                        padding-top: 16px;
                        border-top: 1px solid rgba(255,255,255,0.08);
                    }
                    .hx-onboard-note-text {
                        color: #93c5fd;
                        font-style: italic;
                        font-size: 0.9rem;
                        margin: 0;
                    }

                    /* Responsive Styling */
                    @media (max-width: 991px) {
                        .hx-onboard-section {
                            padding: 60px 16px;
                        }
                        .hx-onboard-grid {
                            grid-template-columns: 1fr;
                            gap: 30px;
                        }
                        .hx-onboard-sidebar {
                            position: static;
                            top: auto;
                        }
                        .hx-onboard-sidebar-header {
                            text-align: center;
                        }
                        .hx-onboard-tabs {
                            flex-direction: row;
                            overflow-x: auto;
                            padding-bottom: 12px;
                            scroll-snap-type: x mandatory;
                            -webkit-overflow-scrolling: touch;
                        }
                        .hx-onboard-tabs::-webkit-scrollbar {
                            height: 5px;
                        }
                        .hx-onboard-tabs::-webkit-scrollbar-track {
                            background: rgba(var(--navy-rgb), 0.05);
                            border-radius: 3px;
                        }
                        .hx-onboard-tabs::-webkit-scrollbar-thumb {
                            background: rgba(var(--navy-rgb), 0.2);
                            border-radius: 3px;
                        }
                        .hx-onboard-tab-btn {
                            width: 260px;
                            flex-shrink: 0;
                            scroll-snap-align: start;
                        }
                        .hx-onboard-tab-btn.active {
                            transform: none;
                        }
                        .hx-onboard-tab-desc {
                            display: none;
                        }
                        .hx-onboard-panel {
                            padding: 32px;
                            min-height: auto;
                        }
                    }

                    @media (max-width: 600px) {
                        .hx-onboard-tabs {
                            flex-direction: column;
                            overflow-x: visible;
                            scroll-snap-type: none;
                        }
                        .hx-onboard-tab-btn {
                            width: 100%;
                            padding: 16px 20px;
                        }
                        .hx-onboard-tab-desc {
                            display: block;
                        }
                        .hx-onboard-panel {
                            padding: 24px;
                            border-radius: 20px;
                        }
                        .hx-onboard-watermark {
                            display: none;
                        }
                    }
                `}} />
                {/* Ambient glow blobs */}
                <div className="hx-onboard-glow-1" />
                <div className="hx-onboard-glow-2" />

                <div className="hx-onboard-container">
                    <div className="hx-onboard-grid">

                        {/* ── LEFT: sticky nav ── */}
                        <div className="hx-onboard-sidebar">
                            <div className="hx-onboard-sidebar-header">
                                <div className="hx-onboard-badge">
                                    <Compass size={14} color="var(--navy)" />
                                    <span>ONBOARD EXPERIENCE</span>
                                </div>
                                <h2 className="hx-onboard-title">
                                    What HX Ships Feel Like Onboard
                                </h2>
                                <p className="hx-onboard-desc">
                                    Select a topic below to explore what the HX expedition experience is really like.
                                </p>
                            </div>

                            {/* Tab buttons */}
                            <div className="hx-onboard-tabs">
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
                                            className={`hx-onboard-tab-btn ${isActive ? 'active' : ''}`}
                                        >
                                            <div className="hx-onboard-tab-content-flex">
                                                <span className="hx-onboard-tab-num">
                                                    {tab.number}
                                                </span>
                                                <div>
                                                    <div className="hx-onboard-tab-title">
                                                        {tab.title}
                                                    </div>
                                                    <div className="hx-onboard-tab-desc">
                                                        {tab.desc}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hx-onboard-tab-dot" />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── RIGHT: content panel ── */}
                        <div className="hx-onboard-panel">
                            {/* Watermark label */}
                            <div className="hx-onboard-watermark">
                                HX EXPEDITIONS // ONBOARD EXPERIENCE
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>

                                {/* ── Tab 0: Travelers Should Expect ── */}
                                {mediActiveOnboardTab === 0 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Compass size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">
                                                Travelers Should Expect
                                            </h3>
                                        </div>

                                        <p className="hx-onboard-panel-lead">
                                            HX ships feel very different from mainstream cruise ships.
                                        </p>

                                        <ul className="hx-onboard-panel-list">
                                            {['Casual atmosphere', 'Educational lectures', 'Expedition briefings', 'Wildlife discussions', 'Relaxed dress codes', 'Outdoor exploration focus'].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item">
                                                    <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
                                                The expedition atmosphere is the defining feature of every HX voyage.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ── Tab 1: Travelers Should Not Expect ── */}
                                {mediActiveOnboardTab === 1 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Moon size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">
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

                                        <p className="hx-onboard-panel-lead">
                                            The destinations themselves become the primary entertainment.
                                        </p>

                                        <ul className="hx-onboard-panel-list">
                                            {['Casinos', 'Broadway entertainment', 'Large ship nightlife', 'Formal cruise culture'].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item">
                                                    <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>✕</span>
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
                                                The destinations themselves become the primary entertainment.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ── Tab 2: Key Ship Differences ── */}
                                {mediActiveOnboardTab === 2 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Ship size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">
                                                Key Ship Differences
                                            </h3>
                                        </div>

                                        <p className="hx-onboard-panel-lead">
                                            The fleet divides into two distinct styles:
                                        </p>

                                        <ul className="hx-onboard-panel-list" style={{ gap: '14px' }}>
                                            {[
                                                'Hybrid flagships – modern, larger, more amenities',
                                                'Classic ships – smaller, more intimate, expedition focused',
                                                'Galápagos specialist – warm weather, wildlife',
                                                'All ships: casual dress code, relaxed atmosphere',
                                                'All ships: destination is the entertainment',
                                            ].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item" style={{ gap: '14px' }}>
                                                    <span style={{
                                                        background: 'rgba(39,68,114,0.5)', color: '#93c5fd',
                                                        fontSize: '11px', fontWeight: '800',
                                                        padding: '4px 10px', borderRadius: '6px',
                                                        flexShrink: 0, fontFamily: 'monospace',
                                                    }}>0{i + 1}</span>
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
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
            <section className="hx-matching-section">
                <style dangerouslySetInnerHTML={{ __html: `
                    .hx-matching-section {
                        background: #0f1c2e;
                        padding: 80px 20px;
                        position: relative;
                        overflow: hidden;
                    }
                    .hx-matching-bg-glow {
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(ellipse at 30% 50%, rgba(39,68,114,0.35) 0%, transparent 65%);
                        pointer-events: none;
                    }
                    .hx-matching-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 1;
                    }
                    .hx-matching-header {
                        text-align: center;
                        margin-bottom: 56px;
                    }
                    .hx-matching-subtitle {
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 0.25em;
                        text-transform: uppercase;
                        color: #93c5fd;
                        display: block;
                        margin-bottom: 12px;
                    }
                    .hx-matching-title {
                        font-size: clamp(1.8rem, 4vw, 2.5rem);
                        font-weight: 500;
                        color: #ffffff;
                        margin: 0 0 20px;
                        line-height: 1.2;
                    }
                    .hx-matching-divider {
                        width: 56px;
                        height: 4px;
                        background: #274472;
                        margin: 0 auto;
                    }
                    .hx-matching-selector-row {
                        display: flex;
                        gap: 12px;
                        justify-content: center;
                        flex-wrap: wrap;
                        margin-bottom: 44px;
                    }
                    .hx-matching-selector-btn {
                        padding: 10px 22px;
                        border-radius: 30px;
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 600;
                        transition: all 0.25s ease;
                        border: 2px solid rgba(255,255,255,0.15);
                        background: transparent;
                        color: #94a3b8;
                        outline: none;
                    }
                    .hx-matching-selector-btn:hover {
                        border-color: rgba(255,255,255,0.3);
                        color: #ffffff;
                    }
                    .hx-matching-selector-btn.active {
                        border-color: #274472;
                        background: #274472;
                        color: #ffffff;
                    }
                    .hx-matching-card {
                        display: none;
                        grid-template-columns: 1fr 1fr;
                        gap: 32px;
                        align-items: center;
                        background: rgba(255,255,255,0.04);
                        border-radius: 20px;
                        overflow: hidden;
                        border: 1px solid rgba(255,255,255,0.08);
                    }
                    .hx-matching-card.active {
                        display: grid;
                    }
                    .hx-matching-img-wrapper {
                        height: 420px;
                        overflow: hidden;
                        position: relative;
                    }
                    .hx-matching-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }
                    .hx-matching-img-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to right, transparent 55%, #0f1c2e);
                    }
                    .hx-matching-content {
                        padding: 48px 48px 48px 0;
                    }
                    .hx-matching-card-title {
                        font-size: 24px;
                        font-weight: 500;
                        color: #ffffff;
                        margin-bottom: 20px;
                        line-height: 1.3;
                    }
                    .hx-matching-card-accent {
                        width: 40px;
                        height: 3px;
                        background: #274472;
                        margin-bottom: 24px;
                    }
                    .hx-matching-card-list {
                        list-style: none;
                        padding: 0;
                        margin: 0 0 24px;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .hx-matching-card-list-item {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: #e2e8f0;
                        font-size: 15px;
                    }
                    .hx-matching-card-note {
                        color: #94a3b8;
                        font-size: 14px;
                        line-height: 1.7;
                        font-style: italic;
                        border-left: 3px solid #274472;
                        padding-left: 14px;
                        margin: 0;
                    }

                    /* Responsive Styling */
                    @media (max-width: 991px) {
                        .hx-matching-section {
                            padding: 60px 16px;
                        }
                        .hx-matching-header {
                            margin-bottom: 40px;
                        }
                        .hx-matching-card {
                            grid-template-columns: 1fr;
                            gap: 0;
                        }
                        .hx-matching-img-wrapper {
                            height: 320px;
                        }
                        .hx-matching-img-overlay {
                            background: linear-gradient(to top, #0f1c2e 0%, transparent 60%);
                        }
                        .hx-matching-content {
                            padding: 32px 24px;
                        }
                    }

                    @media (max-width: 575px) {
                        .hx-matching-section {
                            padding: 40px 12px;
                        }
                        .hx-matching-selector-row {
                            gap: 8px;
                            margin-bottom: 30px;
                        }
                        .hx-matching-selector-btn {
                            padding: 8px 16px;
                            font-size: 13px;
                        }
                        .hx-matching-img-wrapper {
                            height: 240px;
                        }
                        .hx-matching-content {
                            padding: 24px 16px;
                        }
                        .hx-matching-card-title {
                            font-size: 20px;
                            margin-bottom: 16px;
                        }
                        .hx-matching-card-list-item {
                            font-size: 14px;
                        }
                    }
                `}} />
                <div className="hx-matching-bg-glow" />
                <div className="hx-matching-container">
                    <div className="hx-matching-header">
                        <span className="hx-matching-subtitle">
                            SHIP MATCHING GUIDE
                        </span>
                        <h2 className="hx-matching-title">
                            Which HX Ship Fits Your Travel Style?
                        </h2>
                        <div className="hx-matching-divider" />
                    </div>

                    {/* Selector buttons */}
                    <div className="hx-matching-selector-row">
                        {['MS Roald Amundsen', 'MS Fridtjof Nansen', 'MS Fram', 'MS Spitsbergen', 'MS Santa Cruz II'].map((name, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveShipStyle(idx)}
                                className={`hx-matching-selector-btn ${activeShipStyle === idx ? 'active' : ''}`}
                            >{name}</button>
                        ))}
                    </div>

                    {/* Content cards */}
                    {[
                        {
                            title: 'Choose MS Roald Amundsen If You Want:',
                            img: MSAmundsen1,
                            points: ['Modern luxury', 'Antarctica comfort', 'Balcony cabins', 'Larger ship amenities'],
                            note: 'MS Roald Amundsen was the world\'s first hybrid powered expedition cruise ship and remains one of HX\'s flagship vessels.'
                        },
                        {
                            title: 'Choose MS Fridtjof Nansen If You Want:',
                            img: MSNansen1,
                            points: ['Beginner friendly expedition travel', 'Hybrid ship technology', 'Comfortable polar cruising'],
                            note: 'MS Fridtjof Nansen is the sister ship to Roald Amundsen and features hybrid expedition technology and modern Scandinavian interiors.'
                        },
                        {
                            title: 'Choose MS Fram If You Want:',
                            img: MSFarm1,
                            points: ['Traditional expedition atmosphere', 'More intimate experience', 'Strong expedition focus'],
                            note: 'MS Fram offers a more classic expedition experience and carries fewer guests than the newer hybrid ships.'
                        },
                        {
                            title: 'Choose MS Spitsbergen If You Want:',
                            img: MSSpitsbergen1,
                            points: ['Smaller Arctic exploration', 'Polar wildlife focus', 'Casual expedition atmosphere'],
                            note: 'MS Spitsbergen is one of HX\'s smaller expedition ships and feels particularly suited for Arctic itineraries and wildlife focused travel.'
                        },
                        {
                            title: 'Choose MS Santa Cruz II If You Want:',
                            img: MSSanta1,
                            points: ['Galápagos wildlife', 'Warm weather expedition travel', 'Softer adventure experiences'],
                            note: 'MS Santa Cruz II is HX\'s Galápagos expedition vessel and operates in one of the world\'s most wildlife rich destinations.'
                        },
                    ].map((ship, idx) => (
                        <div
                            key={idx}
                            className={`hx-matching-card ${activeShipStyle === idx ? 'active' : ''}`}
                        >
                            <div className="hx-matching-img-wrapper">
                                <img src={ship.img} alt={ship.title} className="hx-matching-img" />
                                <div className="hx-matching-img-overlay" />
                            </div>
                            <div className="hx-matching-content">
                                <h3 className="hx-matching-card-title">{ship.title}</h3>
                                <div className="hx-matching-card-accent" />
                                <ul className="hx-matching-card-list">
                                    {ship.points.map((pt, pi) => (
                                        <li key={pi} className="hx-matching-card-list-item">
                                            <CheckCircle size={15} style={{ color: '#10b981', flexShrink: 0 }} />{pt}
                                        </li>
                                    ))}
                                </ul>
                                <p className="hx-matching-card-note">{ship.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CABINS & SUITES GUIDE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section className="hx-cabins-section">
                <style dangerouslySetInnerHTML={{ __html: `
                    .hx-cabins-section {
                        background: #f8fafc;
                        padding: 80px 20px;
                    }
                    .hx-cabins-container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .hx-cabins-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 28px;
                        align-items: start;
                    }
                    .hx-cabins-img-wrapper {
                        border-radius: 20px;
                        overflow: hidden;
                        height: 480px;
                        position: relative;
                        box-shadow: 0 8px 40px rgba(15,28,46,0.15);
                    }
                    .hx-cabins-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.5s ease;
                    }
                    .hx-cabins-img-wrapper:hover .hx-cabins-img {
                        transform: scale(1.03);
                    }
                    .hx-cabins-caption-box {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(15,28,46,0.85), transparent);
                        padding: 32px 28px 24px;
                    }
                    .hx-cabins-caption-box p:first-child {
                        color: #ffffff;
                        font-size: 18px;
                        font-weight: 500;
                        margin: 0;
                        line-height: 1.5;
                    }
                    .hx-cabins-caption-box p:last-child {
                        color: #93c5fd;
                        font-size: 13px;
                        margin: 6px 0 0;
                    }
                    .hx-cabins-list {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    .hx-cabins-card {
                        background: #ffffff;
                        border-radius: 14px;
                        padding: 24px 28px;
                        border: 1px solid rgba(39,68,114,0.1);
                        display: flex;
                        gap: 18px;
                        align-items: flex-start;
                        transition: transform 0.25s ease, box-shadow 0.25s ease;
                    }
                    .hx-cabins-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(39,68,114,0.06);
                    }
                    .hx-cabins-card-icon {
                        width: 44px;
                        height: 44px;
                        background: #e7f3f5;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #274472;
                        flex-shrink: 0;
                    }
                    .hx-cabins-card-title {
                        font-size: 15px;
                        font-weight: 700;
                        color: #0f1c2e;
                        margin: 0 0 8px;
                    }
                    .hx-cabins-card-desc {
                        font-size: 14px;
                        color: #475569;
                        line-height: 1.7;
                        margin: 0;
                    }

                    /* Responsive Styling */
                    @media (max-width: 991px) {
                        .hx-cabins-section {
                            padding: 60px 16px;
                        }
                        .hx-cabins-grid {
                            grid-template-columns: 1fr;
                            gap: 32px;
                        }
                        .hx-cabins-img-wrapper {
                            height: 380px;
                        }
                        .hx-cabins-caption-box {
                            padding: 24px 20px 18px;
                        }
                    }
                    @media (max-width: 575px) {
                        .hx-cabins-section {
                            padding: 40px 12px;
                        }
                        .hx-cabins-img-wrapper {
                            height: 260px;
                        }
                        .hx-cabins-caption-box {
                            padding: 18px 16px 12px;
                        }
                        .hx-cabins-caption-box p:first-child {
                            font-size: 16px;
                        }
                        .hx-cabins-caption-box p:last-child {
                            font-size: 12px;
                        }
                        .hx-cabins-card {
                            padding: 18px 20px;
                            gap: 14px;
                        }
                        .hx-cabins-card-icon {
                            width: 38px;
                            height: 38px;
                            border-radius: 8px;
                        }
                    }
                `}} />
                <div className="hx-cabins-container">
                    <div className="hx-cabins-header" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.75, display: 'block', marginBottom: '10px' }}>
                            ACCOMMODATION GUIDE
                        </span>
                        <h2 className="medi-section-heading">Cabins &amp; Suites Guide</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="hx-cabins-grid">
                        {/* Left: image */}
                        <div className="hx-cabins-img-wrapper">
                            <img src={cabinsuite} alt="HX expedition cabins interior" className="hx-cabins-img" />
                            <div className="hx-cabins-caption-box">
                                <p>HX expedition suite balcony</p>
                                <p>Modern Scandinavian design influences</p>
                            </div>
                        </div>

                        {/* Right: cabin breakdown by ship */}
                        <div className="hx-cabins-list">
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
                                <div key={i} className="hx-cabins-card">
                                    <div className="hx-cabins-card-icon">
                                        {item.icon}
                                    </div>
                                    <div className="hx-cabins-card-content">
                                        <h4 className="hx-cabins-card-title" dangerouslySetInnerHTML={{ __html: item.ship }} />
                                        <p className="hx-cabins-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
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
                            src="https://www.youtube.com/embed/eu5Fo91KMdg"
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
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="hx-ships-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Expedition Expert" />
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
                        <img src={luxury} alt="Expedition travelers onboard HX ship" className="medi-luxury-main-image" />
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
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes <br /> Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring" style={{ animation: 'none' }}>
                                <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
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
                            src="https://www.youtube.com/embed/EXqJhi-mC84"
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