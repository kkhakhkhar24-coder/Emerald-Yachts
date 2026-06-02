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
  Minus
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
import hero1 from '../../assets/HXExpeditionsCruises/Hero_1.webp'
import hero2 from '../../assets/HXExpeditionsCruises/Hero_2.jpg'
import hero3 from '../../assets/HXExpeditionsCruises/Hero_3.webp'
import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'
import Galápagos from '../../assets/HXExpeditionsCruises/Galápagos.jpg'
import Norway_Alaska from '../../assets/HXExpeditionsCruises/Norway_Alaska.jpg'
import Greenland from '../../assets/HXExpeditionsCruises/Greenland.jpg'
import Antarctica from '../../assets/HXExpeditionsCruises/Antarctica.jpg'
import Svalbard from '../../assets/HXExpeditionsCruises/Svalbard.jpg'
import Image1 from '../../assets/HXExpeditionsCruises/Image_1.jpg'
import Image2 from '../../assets/HXExpeditionsCruises/Image_2.jpg'
import Image3 from '../../assets/HXExpeditionsCruises/Image_3.jpg'
import Image4 from '../../assets/HXExpeditionsCruises/Image_4.jpg'
import Image5 from '../../assets/HXExpeditionsCruises/Image_5.jpg'
import Image6 from '../../assets/HXExpeditionsCruises/Image_6.jpg'

function HXExpeditions() {
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

  // DATA ARRAY - EXACT CONTENT ONLY
  const hxExpeditionMistakes = [
    {
      title: 'Avoidable Booking Mistakes',
      desc: 'Many travelers make avoidable mistakes when booking expedition cruises including:',
      bullets: [
        'Choosing the wrong itinerary',
        'Booking based only on price',
        'Underestimating physical activity levels',
        'Packing incorrectly',
        'Waiting too long to reserve cabins',
        'Choosing ships that do not fit their travel style'
      ],
      footer: 'Expert guidance can dramatically improve the expedition experience.'
    }
  ];

  // 1. Define all states used in the sections
  const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0);

  // 2. Define image placeholders
  const hxItineraryImages = [Antarctica, Svalbard, Greenland, Galápagos, Norway_Alaska];

  const hxFaqs = [
    {
      question: "What is HX Expeditions best known for?",
      answer: "HX Expeditions is best known for small ship expedition cruises focused on exploration, wildlife, science and remote destinations."
    },
    {
      question: "Is HX Expeditions the same as Hurtigruten Expeditions?",
      answer: "HX is the expedition cruise brand formerly known as Hurtigruten Expeditions."
    },
    {
      question: "Where does HX Expeditions sail?",
      answer: "HX sails to Antarctica, Svalbard, Greenland, the Galápagos, Alaska, Norway, Iceland, South America and other remote regions."
    },
    {
      question: "Is HX Expeditions a luxury cruise line?",
      answer: "HX focuses more on expedition comfort and immersive exploration than traditional ultra luxury cruising."
    },
    {
      question: "Which HX ship is best for Antarctica?",
      answer: "MS Roald Amundsen and MS Fridtjof Nansen are among the most popular HX Antarctica ships."
    },
    {
      question: "What is the best HX Expeditions cruise for first timers?",
      answer: "The Galápagos and classic Antarctica Peninsula itineraries are excellent for first time expedition travelers."
    },
    {
      question: "Does HX Expeditions go to Svalbard?",
      answer: "Yes. HX offers multiple Arctic itineraries to Svalbard and the High Arctic."
    },
    {
      question: "Does HX Expeditions go to the Galápagos?",
      answer: "Yes. HX operates the MS Santa Cruz II in the Galápagos Islands."
    },
    {
      question: "What is included on an HX Expeditions cruise?",
      answer: "Inclusions vary, but generally include accommodations, meals, lectures and many expedition activities."
    },
    {
      question: "Are HX Expeditions cruises good for older travelers?",
      answer: "Yes. Many older travelers enjoy expedition cruising, although moderate mobility is important."
    },
    {
      question: "How physically active are HX expedition cruises?",
      answer: "Activity levels vary by itinerary, but most include walking, Zodiac boarding and outdoor exploration."
    },
    {
      question: "What should I pack for an HX Antarctica or Arctic cruise?",
      answer: "Layered clothing, waterproof outerwear and cold weather accessories are essential."
    },
    {
      question: "When is the best time to cruise Antarctica with HX?",
      answer: "December and January are typically ideal for first time Antarctica travelers."
    },
    {
      question: "When is the best time to cruise Svalbard with HX?",
      answer: "July and August are excellent for wildlife and midnight sun experiences."
    },
    {
      question: "Why book HX Expeditions through Trips & Ships Luxury Travel instead of direct?",
      answer: "Trips & Ships Luxury Travel provides expert expedition guidance, itinerary matching and personalized planning support."
    }
  ];

  const hxSchemaData = {
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
        "description": "Luxury travel agency specializing in expedition cruises, Antarctica travel, Arctic voyages, and premium adventure experiences."
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
        "name": "HX Expeditions Cruises",
        "url": "https://www.tripsandships.com/hx-expeditions",
        "description": "Expert guide to HX Expeditions cruises including Antarctica, Svalbard, Greenland, Galápagos, Alaska and Norway expedition travel."
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
            "name": "HX Expeditions Cruises",
            "item": "https://www.tripsandships.com/hx-expeditions"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is HX Expeditions best known for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX Expeditions is best known for small ship expedition cruises focused on exploration, wildlife, science and remote destinations."
            }
          },
          {
            "@type": "Question",
            "name": "Is HX Expeditions the same as Hurtigruten Expeditions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX is the expedition cruise brand formerly known as Hurtigruten Expeditions."
            }
          },
          {
            "@type": "Question",
            "name": "Where does HX Expeditions sail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX sails to Antarctica, Svalbard, Greenland, the Galápagos, Alaska, Norway, Iceland, South America and other remote regions."
            }
          },
          {
            "@type": "Question",
            "name": "Is HX Expeditions a luxury cruise line?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX focuses more on expedition comfort and immersive exploration than traditional ultra luxury cruising."
            }
          },
          {
            "@type": "Question",
            "name": "Which HX ship is best for Antarctica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MS Roald Amundsen and MS Fridtjof Nansen are among the most popular HX Antarctica ships."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best HX Expeditions cruise for first timers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Galápagos and classic Antarctica Peninsula itineraries are excellent for first time expedition travelers."
            }
          },
          {
            "@type": "Question",
            "name": "Does HX Expeditions go to Svalbard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. HX offers multiple Arctic itineraries to Svalbard and the High Arctic."
            }
          },
          {
            "@type": "Question",
            "name": "Does HX Expeditions go to the Galápagos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. HX operates the MS Santa Cruz II in the Galápagos Islands."
            }
          },
          {
            "@type": "Question",
            "name": "What is included on an HX Expeditions cruise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Inclusions vary, but generally include accommodations, meals, lectures and many expedition activities."
            }
          },
          {
            "@type": "Question",
            "name": "Are HX Expeditions cruises good for older travelers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many older travelers enjoy expedition cruising, although moderate mobility is important."
            }
          },
          {
            "@type": "Question",
            "name": "How physically active are HX expedition cruises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Activity levels vary by itinerary, but most include walking, Zodiac boarding and outdoor exploration."
            }
          },
          {
            "@type": "Question",
            "name": "What should I pack for an HX Antarctica or Arctic cruise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Layered clothing, waterproof outerwear and cold weather accessories are essential."
            }
          },
          {
            "@type": "Question",
            "name": "When is the best time to cruise Antarctica with HX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "December and January are typically ideal for first time Antarctica travelers."
            }
          },
          {
            "@type": "Question",
            "name": "When is the best time to cruise Svalbard with HX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "July and August are excellent for wildlife and midnight sun experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Why book HX Expeditions through Trips & Ships Luxury Travel instead of direct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trips & Ships Luxury Travel provides expert expedition guidance, itinerary matching and personalized planning support."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>HX Expeditions Cruises | Antarctica, Arctic, Galápagos and Small Ship Expedition Travel</title>
        <meta
          name="title"
          content="HX Expeditions Cruises | Luxury Expedition Cruise Experts"
        />
        <meta
          name="description"
          content="Explore HX Expeditions with Trips & Ships Luxury Travel. Compare Antarctica, Svalbard, Greenland, Galápagos, Alaska and Norway expedition cruises with expert guidance."
        />
        <meta name="keywords" content="HX Expeditions Cruises, HX expedition cruises, Luxury expedition cruises, Antarctica cruises, Arctic expedition cruises, Galápagos expedition cruises, Small ship expedition cruises, Polar cruises, Expedition travel, Best HX Expeditions cruises for first timers, HX Antarctica cruises, HX Arctic cruises, HX Galápagos cruises, Small ship expedition travel, Luxury expedition cruise advisor, Best expedition cruises for wildlife, HX cruise ships explained, Expedition cruises USA, Antarctica cruise expert, Arctic expedition specialist, Luxury expedition travel agency, Small ship cruise advisor, HX Expeditions, Hurtigruten Expeditions, HX Cruises" />
        <script type="application/ld+json">
          {JSON.stringify(hxSchemaData)}
        </script>
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
            <Compass size={16} />
            <span>Antarctica, Arctic, Galápagos & Small Ship Travel</span>
          </div>
          <h1 className="medi-hero-main-title">
            HX Expeditions Cruises
          </h1>
        </div>
      </section>

      {/* PREMIUM INTRO SECTION - HX EXPEDITIONS FULL CONTENT */}
      <section className="medi-intro-section medi-premium-intro-section">
        {/* STYLE BLOCK: Handles the hover interaction for icons */}
        <style>{`
        .medi-immersion-card-item:hover .medi-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
        /* This forces the Lucide icon (SVG) to turn white on hover */
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
                Expedition Heritage
              </span>

              {/* HEADING */}
              <h2 className="medi-premium-heading" style={{
                color: '#274472',
                fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: '1.2',
                margin: '0 0 20px 0'
              }}>
                Explore The World Through True Expedition Travel
              </h2>

              <div className="medi-premium-separator" style={{
                width: '80px',
                height: '3px',
                background: `#3b82f6`,
                marginBottom: '36px',
                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
              }}></div>

              <p className="medi-premium-lead-text" style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#475569',
                marginBottom: '24px'
              }}>
                HX Expeditions is one of the most established names in expedition cruising, with roots dating back to 1896 and a strong focus on remote, nature driven, small ship travel.
              </p>

              <p className="medi-premium-lead-text" style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#475569',
                marginBottom: '24px'
              }}>
                Today, HX sails to some of the world’s most extraordinary expedition regions, including Antarctica, the Galápagos, Greenland, Svalbard, Norway, Alaska, South America, Iceland, the British Isles and the Northwest Passage.
              </p>

              <p className="medi-premium-lead-text" style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#475569',
                marginBottom: '40px'
              }}>
                For travelers who want more than a traditional cruise, HX offers a style of travel built around exploration, wildlife, science, education and access.
              </p>

              <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                <p className="medi-immersion-lead-in" style={{
                  fontSize: '17px',
                  color: '#1e293b',
                  marginBottom: '24px',
                  fontWeight: '600'
                }}>
                  The Expedition Experience:
                </p>
                <div className="medi-immersion-cards-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '20px',
                  textAlign: 'left'
                }}>
                  {[
                    { t: "Remote Exploration", i: <Compass size={20} /> },
                    { t: "Wildlife Observation", i: <MapPin size={20} /> },
                    { t: "Scientific Study", i: <FlaskConical size={20} /> },
                    { t: "Cultural Access", i: <Globe size={20} /> },
                    { t: "Expert Education", i: <GraduationCap size={20} /> },
                    { t: "Small Ship Travel", i: <Ship size={20} /> }
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

              <p className="medi-premium-lead-text" style={{ marginTop: '40px', fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                These are journeys for travelers who want to stand on Antarctic ice, search for polar bears in Svalbard, explore Greenlandic communities, walk volcanic landscapes in the Galápagos or experience Norway and the Arctic by small expedition ship.
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
                    <span className="medi-expert-card-subtitle">GLOBAL AUTHORITY</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                  </div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                  At Trips & Ships Luxury Travel, we help clients choose the right HX itinerary, ship, season and cabin based on how adventurous they want the journey to feel, how much comfort they expect onboard and what wildlife or landscapes matter most.
                </p>
                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                    With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide trusted expedition cruise expertise travelers can rely on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HX EXPEDITIONS SECTION */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
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
              The HX Philosophy
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Why Choose HX Expeditions?
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
              HX Expeditions is best for travelers who want expedition depth rather than traditional scenic cruising.
            </p>
          </div>

          {/* Main Comparison/Pillar Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>

            {/* Left Column: The Core Focus */}
            <div style={{ flex: '1 1 280px' }}>
              <p style={{
                fontSize: '16px',
                color: '#64748b',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '30px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Compass size={20} style={{ color: '#3b82f6' }} /> Core Voyage Pillars
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                {[
                  { text: "Active exploration", icon: <Ship size={18} /> },
                  { text: "Wildlife encounters", icon: <Users size={18} /> },
                  { text: "Science programming", icon: <FlaskConical size={18} /> },
                  { text: "Expert expedition teams", icon: <GraduationCap size={18} /> },
                  { text: "Zodiac landings", icon: <Anchor size={18} /> },
                  { text: "Educational enrichment", icon: <Microscope size={18} /> },
                  { text: "Remote destination access", icon: <Globe size={18} /> },
                  { text: "Flexible daily itineraries", icon: <Clock size={18} /> }
                ].map((pill, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: The "Why" and Schedule Callout */}
            <div style={{ flex: '1 1 280px' }}>
              <div style={{
                backgroundColor: '#0f1c2e',
                padding: window.innerWidth <= 360 ? '24px 16px' : '40px',
                borderRadius: window.innerWidth <= 360 ? '20px' : '30px',
                color: '#ffffff',
                boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)'
              }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                  Authentic Flexibility
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                  Unlike conventional cruise lines focused heavily on onboard entertainment, HX builds its journeys around the environment. Daily schedules may change based on:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Ice conditions",
                    "Weather patterns",
                    "Wildlife sightings",
                    "Local opportunities"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                      <CheckCircle size={18} style={{ color: '#3b82f6' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                  <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                    "This flexibility creates a more authentic and immersive expedition experience."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Who it's best for */}
          <div style={{
            padding: window.innerWidth <= 360 ? '24px 12px' : '40px',
            backgroundColor: '#f1f5f9',
            borderRadius: window.innerWidth <= 360 ? '16px' : '24px',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>
              HX is particularly well suited for travelers seeking:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {[
                "Small ship exploration",
                "Wildlife focused travel",
                "Adventure with comfort",
                "Educational travel",
                "Remote destinations",
                "Nature focused experiences"
              ].map((tag, i) => (
                <span key={i} style={{
                  padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50px',
                  fontSize: window.innerWidth <= 360 ? '13px' : '15px',
                  fontWeight: '700',
                  color: '#274472',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  border: '1px solid #e2e8f0'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── THE SPIRIT OF MODERN EXPLORATION: AIRTIGHT BENTO GRID ── */}
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
            grid-auto-rows: 220px;
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
            background: linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, transparent 60%);
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
          }

          /* Responsive Breakpoints to prevent empty spaces on all screens */
          @media (max-width: 1024px) {
            .hx-bento-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: 200px;
            }
            /* Reset spans for 2-column layout */
            .item-large { grid-column: span 2; grid-row: span 2; }
            .item-wide { grid-column: span 2; grid-row: span 1; }
            .item-standard { grid-column: span 1; grid-row: span 1; }
          }

          @media (max-width: 600px) {
            .hx-bento-grid {
              grid-template-columns: 1fr;
              grid-auto-rows: 250px;
            }
            .hx-bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              Visual Narrative
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#ffffff',
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-0.02em'
            }}>
              The Spirit of Modern Exploration
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Airtight Grid */}
          <div className="hx-bento-grid">

            {/* Image 1: The Fleet Exterior (Top Left) */}
            <div className="hx-bento-item item-large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <img src={Image1} alt="Active Discovery" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Active Discovery</span>
                <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#cbd5e1' }}>Guided exploration across untouched volcanic frontiers.</p>
              </div>
            </div>

            {/* Image 2: Arctic Wildlife (Top Right) */}
            <div className="hx-bento-item item-standard">
              <img src={Image2} alt="Polar Immersion" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Polar Immersion</span>
              </div>
            </div>

            {/* Image 3: Science Center (Middle Right) */}
            <div className="hx-bento-item item-standard">
              <img src={Image3} alt="Celestial Wonders" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Celestial Wonders</span>
              </div>
            </div>

            {/* Image 4: Zodiac Exploration (Middle Bottom Left) */}
            <div className="hx-bento-item item-standard">
              <img src={Image4} alt="Culinary Artistry" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Culinary Artistry</span>
              </div>
            </div>

            {/* Image 5: Remote Landscape (Middle Bottom Right) */}
            <div className="hx-bento-item item-standard">
              <img src={Image5} alt="Epicurean Views" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Epicurean Views</span>
              </div>
            </div>

            {/* Image 6: Scandinavian Interior (Full Bottom Width) */}
            <div className="hx-bento-item item-wide" style={{ gridColumn: 'span 4', gridRow: 'span 1' }}>
              <img src={Image6} alt="Scandinavian Serenity" className="hx-bento-img" />
              <div className="hx-bento-overlay">
                <span className="hx-overlay-title">Scandinavian Serenity</span>
                <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#cbd5e1' }}>Refined comfort in our Scandi-chic social spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE HX EXPEDITIONS SAILS SECTION */}
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
              Global Footprint
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Where Does HX Expeditions Sail?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{
              fontSize: '19px',
              color: '#475569',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.6'
            }}>
              HX operates expedition cruises across some of the world’s most remote and spectacular destinations.
            </p>
          </div>

          {/* Regional Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: window.innerWidth <= 360 ? '16px' : '30px',
            marginBottom: '50px'
          }}>

            {/* 1. Antarctica */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><Compass size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Antarctica</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Iconic Features:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Penguin colonies', 'Icebergs', 'Zodiac landings', 'Whale sightings', 'Drake Passage crossings'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Svalbard */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><MapPin size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Svalbard</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Ideal For:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Polar bear opportunities', 'Arctic wildlife', 'Midnight sun experiences', 'Glacier scenery'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Greenland */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><Globe size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Greenland</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>The Experience:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Massive icebergs', 'Inuit culture', 'Remote Arctic communities', 'Dramatic fjord landscapes'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Galápagos */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><Microscope size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Galápagos</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>What It Delivers:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Extraordinary wildlife encounters', 'Small ship exploration', 'Snorkeling opportunities', 'Educational naturalist experiences'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Norway & Iceland */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><Anchor size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Norway & Iceland</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Primary Highlights:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Scenic fjords', 'Arctic landscapes', 'Cultural experiences', 'Expedition style exploration'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Alaska */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: '#3b82f6' }}><Sparkles size={24} /></div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Alaska</h3>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Best For:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Wildlife focused travel', 'Glacier exploration', 'Coastal small-ship discovery', 'Softer expedition experiences'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Secondary Footer Box for Scotland/Patagonia etc. */}
          <div style={{
            backgroundColor: '#0f1c2e',
            borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
            padding: window.innerWidth <= 360 ? '28px 14px' : '50px 40px',
            color: '#ffffff',
            boxShadow: '0 20px 50px rgba(15, 28, 46, 0.1)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: window.innerWidth <= 360 ? '19px' : '24px', fontWeight: '700', marginBottom: '15px', color: '#3b82f6', textAlign: 'left' }}>South America & The British Isles</h3>
                <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                  HX also sails to high-latitude and remote coastal regions, offering deep immersion into:
                </p>
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {[
                    "Patagonia", "Chilean fjords", "The Falklands", "Scotland", "Ireland", "Remote coastal regions"
                  ].map((region, i) => (
                    <span key={i} style={{
                      padding: '8px 20px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: '50px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>{region}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HX EXPEDITION SHIPS - STANDARDIZED 5-CARD LAYOUT */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

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
              Advanced Fleet
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              HX Expedition Ships
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{
              fontSize: '19px',
              color: '#475569',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.6'
            }}>
              HX’s fleet is designed specifically for expedition travel and remote destination access.
            </p>
          </div>

          {/* Ships Flex Container (Centers the odd items) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center' // This ensures the bottom 2 are centered
          }}>

            {[
              {
                name: "MS Roald Amundsen",
                icon: <FlaskConical size={26} />,
                desc: "One of the world’s first hybrid powered expedition ships featuring modern Scandinavian design and advanced sustainability technology.",
                best: ["Antarctica", "Arctic exploration", "Modern expedition comfort"]
              },
              {
                name: "MS Fridtjof Nansen",
                icon: <Microscope size={26} />,
                desc: "A sister ship to Roald Amundsen offering hybrid technology, science focused expedition travel, and comfortable modern accommodations.",
                best: ["Antarctica", "Greenland", "Arctic itineraries"]
              },
              {
                name: "MS Spitsbergen",
                icon: <Compass size={26} />,
                desc: "A smaller expedition vessel named after the largest island in Svalbard, designed for maneuverability and deep immersion.",
                best: ["Arctic exploration", "Smaller ship experiences", "Wildlife focused itineraries"]
              },
              {
                name: "MS Fram",
                icon: <Anchor size={26} />,
                desc: "A classic expedition ship purpose built for polar travel, honoring the heritage of original Norwegian explorers.",
                best: ["Experienced expedition travelers", "Traditional expedition atmosphere", "Remote Arctic exploration"]
              },
              {
                name: "MS Santa Cruz II",
                icon: <Sparkles size={26} />,
                desc: "A small expedition vessel designed specifically for Galápagos exploration, prioritizing low-impact nature discovery.",
                best: ["Wildlife lovers", "Nature focused travel", "First time expedition guests"]
              }
            ].map((ship, i) => (
              <div key={i} style={{
                flex: window.innerWidth <= 360 ? '1 1 100%' : '1 1 350px',
                maxWidth: window.innerWidth <= 360 ? '100%' : '380px',
                backgroundColor: '#f8fafc',
                borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                padding: window.innerWidth <= 360 ? '24px 16px' : '40px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ color: '#3b82f6' }}>{ship.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>{ship.name}</h3>
                </div>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '25px', flex: 1 }}>
                  {ship.desc}
                </p>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Best For:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {ship.best.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', fontSize: '14px', color: '#1e293b', fontWeight: '600' }}>
                        <CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 01: THE MODERN FLEET ── */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#0f1c2e',
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
              Fleet Spotlight
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#ffffff',
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              A New Era of Sustainable Exploration
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{
              color: '#cbd5e1',
              fontSize: '18px',
              marginTop: '25px',
              lineHeight: '1.7'
            }}>
              Witness the world’s first hybrid-powered expedition fleet in action. Combining advanced Norwegian engineering with Scandinavian comfort, our ships are designed to be silent, sustainable windows into the most pristine environments on Earth.
            </p>
          </div>

          {/* Video Player */}
          <div style={{
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
              src="https://www.youtube-nocookie.com/embed/87FBanAlUPo"
              title="HX Expeditions Fleet Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* BEST HX EXPEDITIONS FOR FIRST TIMERS - DASHBOARD */}
      <section className="medi-itinerary-showcase-section">
        <div className="medi-itinerary-showcase-container">

          <div className="medi-itinerary-showcase-header">
            <span className="medi-itinerary-eyebrow">
              EXPEDITION PLANNING GUIDE
            </span>
            <h2 className="medi-itinerary-showcase-heading">
              Best HX Expeditions For First-Time Travelers
            </h2>
            <div className="medi-itinerary-showcase-separator"></div>
            <p style={{
              textAlign: 'center',
              color: '#475569',
              maxWidth: '800px',
              margin: '20px auto 0',
              fontSize: '17px',
              lineHeight: '1.6'
            }}>
              Choosing the right first expedition cruise depends heavily on comfort level, travel goals and desired adventure level.
            </p>
          </div>

          <div className="medi-itinerary-dashboard">
            {/* LEFT SIDE: DESTINATION TABS */}
            <div className="medi-itinerary-tabs">
              {[
                "Antarctica",
                "Svalbard",
                "Greenland",
                "Galápagos",
                "Norway & Alaska"
              ].map((title, idx) => (
                <button
                  key={idx}
                  className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                  onClick={() => setMediSelectedItinerary(idx)}
                >
                  <span className="medi-itinerary-tab-number">
                    0{idx + 1}
                  </span>
                  <div className="medi-itinerary-tab-meta">
                    <span className="medi-itinerary-tab-title">
                      {title}
                    </span>
                  </div>
                  <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                </button>
              ))}
            </div>

            {/* RIGHT SIDE: INTERACTIVE CONTENT CARD */}
            <div className="medi-itinerary-showcase-card">
              <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                {/* Image will show when you update the hxItineraryImages array */}
                {hxItineraryImages[mediSelectedItinerary] && (
                  <img
                    src={hxItineraryImages[mediSelectedItinerary]}
                    alt="Expedition Destination"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  />
                )}
                <div className="medi-itinerary-showcase-img-overlay"></div>
                <span className="medi-itinerary-showcase-badge">
                  DESTINATION EXPERTISE
                </span>
              </div>

              <div className="medi-itinerary-showcase-body">
                <h3 className="medi-itinerary-showcase-title">
                  {[
                    "Antarctica: The White Continent",
                    "Svalbard: Realm of the Polar Bear",
                    "Greenland: Ice & Culture",
                    "Galápagos: Evolutionary Wonders",
                    "Norway & Alaska: Coastal Discovery"
                  ][mediSelectedItinerary]}
                </h3>

                <div className="medi-itinerary-details-grid">
                  {/* IDEAL FOR COLUMN */}
                  <div className="medi-itinerary-details-col">
                    <h4 className="medi-itinerary-details-heading">Best For:</h4>
                    <ul className="medi-itinerary-details-list">
                      {[
                        ["Bucket list travelers", "Dramatic scenery", "Wildlife encounters", "Classic expedition experiences"],
                        ["Arctic wildlife", "Polar bear opportunities", "High Arctic exploration"],
                        ["Cultural experiences", "Icebergs", "Remote landscapes", "Arctic photography"],
                        ["Wildlife lovers", "Warmer weather expeditions", "Small ship exploration", "First time expedition travelers"],
                        ["Softer expedition experiences", "Scenic cruising with exploration", "Travelers new to remote travel"]
                      ][mediSelectedItinerary].map((feature, i) => (
                        <li key={i}>
                          <Sparkles size={14} className="medi-itinerary-detail-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* HIGHLIGHTS COLUMN */}
                  <div className="medi-itinerary-details-col">
                    <h4 className="medi-itinerary-details-heading">Expedition Focus:</h4>
                    <div className="medi-itinerary-details-chips">
                      {[
                        ["Penguins", "Ice Shelves", "Zodiac Landings"],
                        ["Polar Bears", "Midnight Sun", "Remote High Arctic"],
                        ["Community Visits", "Fjords", "Icebergs"],
                        ["Nature First", "Snorkeling", "Unique Species"],
                        ["Coastal Views", "Eagles & Bears", "Accessible Adventure"]
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
                    At Trips & Ships Luxury Travel, we help travelers choose the expedition style that best fits their expectations, mobility, comfort level and interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT EXPEDITION TRAVEL ACTUALLY FEELS LIKE */}
      <section className="medi-audience-section">
        <div className="medi-audience-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="medi-section-heading">What Expedition Travel Actually Feels Like</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{
              fontSize: '18px',
              color: '#475569',
              maxWidth: '800px',
              margin: '20px auto 0',
              lineHeight: '1.6'
            }}>
              Expedition cruising feels very different from traditional cruise vacations. The focus shifts from the ship's interior to the world outside.
            </p>
          </div>

          <div className="medi-audience-split-layout">
            {/* LEFT COLUMN: WHAT TO EXPECT */}
            <div className="medi-audience-column medi-best-for-column">
              <h3 className="medi-audience-column-heading">Travelers Should Expect:</h3>
              <ul className="medi-audience-list">
                {[
                  { t: "Flexible itineraries", i: <Clock size={20} /> },
                  { t: "Wildlife focused days", i: <Compass size={20} /> },
                  { t: "Zodiac landings", i: <Ship size={20} /> },
                  { t: "Educational lectures", i: <GraduationCap size={20} /> },
                  { t: "Outdoor exploration", i: <MapPin size={20} /> },
                  { t: "Casual atmosphere", i: <Users size={20} /> },
                  { t: "Nature centered experiences", i: <Globe size={20} /> }
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

            {/* RIGHT COLUMN: WHAT NOT TO EXPECT */}
            <div className="medi-audience-column medi-not-ideal-column">
              <h3 className="medi-audience-column-heading">Travelers Should Not Expect:</h3>
              <ul className="medi-audience-list">
                {[
                  { t: "Casinos", i: <CircleDollarSign size={20} /> },
                  { t: "Broadway entertainment", i: <Music size={20} /> },
                  { t: "Formal cruise culture", i: <Crown size={20} /> },
                  { t: "Large ship nightlife", i: <Moon size={20} /> }
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="medi-audience-icon-wrapper not-ideal">
                      <Minus size={20} className="medi-audience-icon" />
                    </div>
                    <span>{item.t}</span>
                  </li>
                ))}
              </ul>

              {/* SECTION CONCLUSION CALLOUT */}
              <div style={{
                marginTop: '40px',
                padding: '25px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                borderLeft: '5px solid #94a3b8',
                textAlign: 'left'
              }}>
                <p style={{
                  fontSize: '17px',
                  color: '#0f1c2e',
                  fontWeight: '700',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  "The destinations themselves become the experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON EXPEDITION CRUISE MISTAKES SECTION */}
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
              Common Expedition Cruise Mistakes
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Main Card */}
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
              Many travelers make avoidable mistakes when booking expedition cruises including:
            </p>

            {/* List Grid - Responsive 2 columns */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
              gap: '20px 40px',
              marginBottom: '40px'
            }}>
              {[
                "Choosing the wrong itinerary",
                "Booking based only on price",
                "Underestimating physical activity levels",
                "Packing incorrectly",
                "Waiting too long to reserve cabins",
                "Choosing ships that do not fit their travel style"
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
                  }}>
                    {mistake}
                  </span>
                </div>
              ))}
            </div>

            {/* Conclusion Highlight */}
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
                Expert guidance can dramatically improve the expedition experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 02: DESTINATION IMMERSION ── */}
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
              Immersive Destinations
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#274472',
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              The World’s Most Remote Frontiers
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{
              color: '#475569',
              fontSize: '18px',
              marginTop: '25px',
              lineHeight: '1.7'
            }}>
              From the icy silence of Antarctica to the volcanic energy of the Galápagos, true expedition travel is about the moments that happen off the ship. See the wildlife encounters and Zodiac landings that make HX journeys a life-changing experience.
            </p>
          </div>

          {/* Video Player */}
          <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(15, 28, 46, 0.15)',
            border: '1px solid #e2e8f0',
            aspectRatio: '16/9',
            backgroundColor: '#000'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/apY0io_tpno"
              title="HX Expeditions Destination Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY SECTION - ROTATING RING / STATIC IMAGE */}
      <section className="medi-authority-section">
        {/* CSS for the rotating effect */}
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
          {/* Header Block */}
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
              Angela Hughes is one of the luxury travel industry’s most respected advisors and educators, helping travelers navigate the complexities of remote exploration.
            </p>
          </div>

          <div className="medi-prestige-plaque-wrapper">
            {/* Left Side: The Identity Board */}
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

            {/* Right Side: Cascading Accolade Cards */}
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
              "Angela and her team specialize in helping travelers navigate the complexities of luxury expedition travel with highly personalized guidance."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - HX EXPEDITIONS CONTENT */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">HX Expeditions: <br /> Frequently Asked Questions</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>

          <div className="medi-faq-list-wrapper">
            {hxFaqs.map((faq, index) => (
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

      {/* CTA SECTION - HX EXPEDITIONS FINAL CONVERSION */}
      <section className="medi-cta-main-section">
        <div className="medi-cta-bg-pattern-layer"></div>
        <div className="medi-cta-content-relative">
          <div className="medi-cta-inner-wrapper">
            <h2 className="medi-cta-heading-white">
              Ready To Explore The World With HX Expeditions?
            </h2>
            <div className="medi-cta-separator-white"></div>

            <p className="medi-cta-paragraph-white">
              Expedition travel is one of the most rewarding forms of luxury travel available today, but <strong>choosing the right destination, ship and season matters enormously.</strong>
            </p>

            <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
              Trips & Ships Luxury Travel helps travelers confidently plan extraordinary HX Expeditions cruises with personalized expert guidance.
            </p>

            {/* EXPEDITION-SPECIFIC CONSIDERATIONS BOX - ALIGNMENT FIXED */}
            <div className="medi-cta-considerations-box" style={{
              marginTop: '32px',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              <span className="medi-cta-considerations-title" style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '700',
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '24px'
              }}>
                Whether you are planning:
              </span>

              <ul className="medi-cta-considerations-list" style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px 30px',
                maxWidth: '1000px'
              }}>
                {[
                  "Antarctica expeditions",
                  "Arctic & Svalbard wildlife cruises",
                  "Galápagos small ship voyages",
                  "Greenland ice exploration",
                  "Remote coastal adventures"
                ].map((item, idx) => (
                  <li key={idx} className="medi-cta-considerations-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    <CheckCircle
                      size={18}
                      className="medi-cta-considerations-icon"
                      style={{
                        color: '#3b82f6',
                        flexShrink: 0,
                        marginTop: '-1px'
                      }}
                    />
                    <span style={{ lineHeight: '1' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
              Contact Trips & Ships Luxury Travel today to begin planning your next expedition adventure.
            </p>

            <div className="medi-cta-button-group">
              <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <Phone size={18} />
                Schedule a Personalized Expedition Consultation Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HXExpeditions