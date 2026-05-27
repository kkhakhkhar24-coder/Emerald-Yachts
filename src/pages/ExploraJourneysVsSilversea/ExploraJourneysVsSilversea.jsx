import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/image.webp"
import Silversea_Journeys from '../../assets/ExploraJourneysVsSilversea/Silversea_Journeys.webp'
import Explora_Journeys from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'
import Suites_Comparison from '../../assets/ExploraJourneysVsSilversea/Suites_Comparison.webp'
import Explora_Atmosphere from '../../assets/ExploraJourneysVsSilversea/Explora_Atmosphere.jpeg'
import Silversea_Atmosphere from '../../assets/ExploraJourneysVsSilversea/Silversea_Atmosphere.webp'

import {
  Ship, MapPin, Star, Clock, Users, CheckCircle,
  ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
  ChevronRight, Crown, Phone, Plus, Minus,
  Globe, LayoutList, Heart, Utensils, Sun, Award,
  Baby, Moon, Music,
  Mic, FileText, GraduationCap,
  Maximize,
  Home,
  Hotel,
  GlassWater,
  Wifi,
  CircleDollarSign,
  UserCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/ExploraJourneysVsSilversea/Hero_1.webp'
import hero2 from '../../assets/ExploraJourneysVsSilversea/Hero_2.webp'
import hero3 from '../../assets/ExploraJourneysVsSilversea/Hero_3.webp'

function ExploraJourneysVsSilversea() {
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

  const mediItineraries = [
    {
      title: 'Greece & Greek Isles Cruises',
      bestFor: ['First-time Mediterranean cruisers', 'Couples', 'Scenic island experiences', 'Cultural travelers'],
      highlights: ['Santorini', 'Mykonos', 'Rhodes', 'Crete', 'Athens']
    },
    {
      title: 'Italy Intensive Cruises',
      bestFor: ['Food and wine lovers', 'History enthusiasts', 'Luxury cultural travel'],
      highlights: ['Rome', 'Florence', 'Sicily', 'Amalfi Coast', 'Venice']
    },
    {
      title: 'Croatia & Adriatic Voyages',
      bestFor: ['Boutique luxury seekers', 'Yacht-style atmosphere lovers', 'Scenic coastal exploration'],
      highlights: ['Dubrovnik', 'Split', 'Kotor', 'Montenegro', 'Slovenia']
    },
    {
      title: 'Spain & Western Mediterranean Cruises',
      bestFor: ['Culinary travelers', 'Art and architecture enthusiasts', 'Sophisticated European cruising'],
      highlights: ['Barcelona', 'Valencia', 'Nice', 'Marseille', 'Palma de Mallorca']
    }
  ]

  const mediFaqs = [
    {
      question: 'Is Explora better than Silversea?',
      answer: 'Neither is universally better. Explora emphasizes contemporary lifestyle luxury, while Silversea focuses more on traditional ultra-luxury service and expedition travel.'
    },
    {
      question: 'Which is more luxurious: Explora or Silversea?',
      answer: 'Both are considered ultra-luxury cruise lines, but their luxury style differs significantly.'
    },
    {
      question: 'What is the difference between Explora and Silversea?',
      answer: 'Explora focuses on modern wellness-oriented luxury and spacious suites, while Silversea emphasizes butler service, expedition cruising, and traditional luxury hospitality.'
    },
    {
      question: 'Which cruise line has better suites?',
      answer: 'Explora generally offers larger and more contemporary suites, while Silversea is particularly known for personalized butler service.'
    },
    {
      question: 'Is Silversea more formal than Explora?',
      answer: 'Yes. Silversea typically feels more traditional and formal compared with Explora’s relaxed luxury atmosphere.'
    },
    {
      question: 'Which cruise line is better for first-time luxury cruisers?',
      answer: 'Many first-time luxury travelers find Explora more approachable because of its relaxed atmosphere and contemporary design.'
    },
    {
      question: 'Are Explora and Silversea all inclusive?',
      answer: 'Both include many luxury amenities such as dining, beverages, Wi-Fi, and gratuities, although specific inclusions vary by itinerary and suite category.'
    },
    {
      question: 'Which cruise line has better itineraries?',
      answer: 'Explora excels in lifestyle-focused luxury itineraries, while Silversea offers broader global exploration and expedition opportunities.'
    }
  ];


  const mediMistakes = [
    {
      title: 'Assuming All Ultra-Luxury Cruises Feel the Same',
      desc: 'The onboard atmosphere varies dramatically between brands. Even when pricing appears similar, the experience may differ substantially.'
    },
    {
      title: 'Choosing Based Only on Marketing',
      desc: 'Luxury cruise marketing often highlights visuals rather than the specific nuances that define a voyage. It is vital to consider:',
      bullets: [
        'Service style',
        'Atmosphere',
        'Social environment',
        'Travel pacing',
        'Wellness focus'
      ]
    },
    {
      title: 'Underestimating Ship Personality',
      desc: 'Luxury cruise lines develop unique personalities. Matching ship atmosphere with travel style is often more important than comparing technical inclusions.'
    }
  ];

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
        "name": "Explora Journeys vs Silversea",
        "url": "https://www.tripsandships.com/explora-journeys-vs-silversea",
        "description": "Expert comparison guide between Explora Journeys and Silversea luxury cruises."
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
            "name": "Explora Journeys vs Silversea",
            "item": "https://www.tripsandships.com/explora-journeys-vs-silversea"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Explora better than Silversea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither is universally better. Explora emphasizes contemporary lifestyle luxury, while Silversea focuses more on traditional ultra-luxury service and expedition travel."
            }
          },
          {
            "@type": "Question",
            "name": "Which is more luxurious: Explora or Silversea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both are considered ultra-luxury cruise lines, but their luxury style differs significantly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Explora and Silversea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Explora focuses on modern wellness-oriented luxury and spacious suites, while Silversea emphasizes butler service, expedition cruising, and traditional luxury hospitality."
            }
          },
          {
            "@type": "Question",
            "name": "Which cruise line has better suites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Explora generally offers larger and more contemporary suites, while Silversea is known for personalized butler service and traditional luxury accommodations."
            }
          },
          {
            "@type": "Question",
            "name": "Is Silversea more formal than Explora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Silversea typically feels more traditional and formal compared with Explora’s relaxed luxury atmosphere."
            }
          },
          {
            "@type": "Question",
            "name": "Which cruise line is better for first-time luxury cruisers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many first-time luxury travelers prefer Explora because of its relaxed atmosphere, modern design, and approachable luxury experience."
            }
          },
          {
            "@type": "Question",
            "name": "Are Explora and Silversea all inclusive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both include many luxury amenities such as dining, beverages, Wi-Fi, and gratuities, although specific inclusions vary by itinerary and suite category."
            }
          },
          {
            "@type": "Question",
            "name": "Which cruise line has better itineraries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Explora excels in lifestyle-focused luxury itineraries, while Silversea offers broader global exploration and expedition opportunities."
            }
          }
        ]
      }
    ]
  }


  return (
    <>
      <Helmet>
        <title>Explora Journeys vs Silversea | Which Luxury Cruise Line Is Better in 2026?</title>
        <meta
          name="title"
          content="Explora Journeys vs Silversea | Luxury Cruise Comparison Guide 2026"
        />
        <meta
          name="description"
          content="Compare Explora Journeys vs Silversea in this expert luxury cruise guide for 2026. Discover differences in suites, dining, service, itineraries, luxury level, pricing, atmosphere, inclusions, and which cruise line best fits your travel style with insights from Angela Hughes of Trips & Ships Luxury Travel."
        />
        <meta name="keywords" content="Explora Journeys vs Silversea, Explora vs Silversea, Silversea luxury cruise review, Explora Journeys review, Best luxury cruise line, Ultra luxury cruise comparison, Silversea vs Explora, Luxury small ship cruises, Explora cruise experience, Silversea cruise experience, Boutique luxury cruises, Is Explora better than Silversea, Explora Journeys vs Silversea cruises, Which luxury cruise line is best, Explora vs Silversea suites, Silversea vs Explora dining, Explora Journeys luxury cruise review, Silversea cruise reviews 2026, Best ultra luxury cruise line, Explora vs Silversea for couples, Which cruise line has better suites, Luxury cruise advisor, Ultra luxury cruise consultant, Luxury travel expert, Small ship cruise specialist, Luxury cruise planning services, Luxury travel agency, Boutique cruise expert" />
        <script type="application/ld+json">
          {JSON.stringify(mediSchemaData)}
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
            <Ship size={16} />
            <span>Ultra-Luxury Cruise Comparison</span>
          </div>
          <h1 className="medi-hero-main-title">
            Explora Journeys vs Silversea
          </h1>
        </div>
      </section>

      {/* PREMIUM INTRO SECTION */}
      <section className="medi-intro-section medi-premium-intro-section">
        <div className="medi-premium-intro-glow-one"></div>
        <div className="medi-premium-intro-glow-two"></div>
        <div className="medi-intro-container">
          <div className="medi-premium-intro-grid">

            {/* Title & Core editorial intro */}
            <div className="medi-premium-editorial-block">
              <span className="medi-premium-mini-badge">ULTRA-LUXURY COMPARISON</span>
              <h2 className="medi-premium-heading">Why Travelers Compare Explora and Silversea</h2>
              <div className="medi-premium-separator"></div>

              <p className="medi-premium-lead-text">
                As ultra-luxury cruising continues to evolve, travelers increasingly compare Explora Journeys and Silversea when searching for sophisticated small-ship cruise experiences.
              </p>

              <div className="medi-immersion-list-wrapper">
                <p className="medi-immersion-lead-in">
                  Both cruise lines appeal to travelers seeking:
                </p>
                <div className="medi-immersion-cards-grid">
                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Crown size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Personalized service</span>
                  </div>

                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Ship size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Boutique atmospheres</span>
                  </div>

                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Heart size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Luxury accommodations</span>
                  </div>

                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Compass size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Focused itineraries</span>
                  </div>

                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Utensils size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Fine dining</span>
                  </div>

                  <div className="medi-immersion-card-item">
                    <div className="medi-immersion-icon-box">
                      <Users size={20} />
                    </div>
                    <span className="medi-immersion-card-title">Smaller capacities</span>
                  </div>
                </div>
              </div>

              <p className="medi-premium-lead-text" style={{ marginTop: '24px' }}>
                However, the overall cruise experience between Explora Journeys and Silversea feels surprisingly different.
              </p>
            </div>

            {/* Signature Expert Block */}
            <div className="medi-premium-signature-panel">
              <div className="medi-premium-signature-glow"></div>
              <div className="medi-premium-signature-content">
                <div className="medi-expert-profile-row">
                  <div className="medi-expert-avatar-frame">
                    <Star size={24} className="medi-star-accent" />
                  </div>
                  <div>
                    <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                    <h3 className="medi-expert-card-title">Angela Hughes</h3>
                  </div>
                </div>

                <p className="medi-premium-expert-desc">
                  At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers determine which luxury cruise line best matches their: Travel personality, Luxury expectations, Preferred atmosphere, Destination priorities, Wellness interests, and Cruise experience level.
                </p>

                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark">“</span>
                  <p className="medi-premium-expert-quote-text">
                    With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes brings real-world expertise to luxury cruise planning and ultra-premium travel experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW: EXPLORA VS SILVERSEA SECTION */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
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
              The Brand Profiles
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Overview: Explora Journeys vs Silversea
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys Column */}
            <div style={{
              flex: '1 1 500px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden', // Ensures image follows border radius
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.04)'
            }}>
              {/* Added Image Header */}
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={Explora_Journeys}
                  alt="Explora Journeys Sleek Modern Ship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 28, 46, 0.6) 0%, transparent 50%)' }}></div>
              </div>

              <div style={{ padding: '40px' }}>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                      <Sparkles size={22} />
                    </div>
                    <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys</h3>
                  </div>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7' }}>
                    A newer ultra-luxury lifestyle cruise brand created by the MSC Group, redefining luxury with a modern, unhurried approach.
                  </p>
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '20px' }}>The Brand Emphasizes:</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { text: "Contemporary European luxury", icon: <Globe size={18} /> },
                      { text: "Wellness-focused travel", icon: <Heart size={18} /> },
                      { text: "Spacious suites", icon: <Maximize size={18} /> },
                      { text: "Relaxed sophistication", icon: <Moon size={18} /> },
                      { text: "Lifestyle-oriented cruising", icon: <Compass size={18} /> },
                      { text: "Modern ship design", icon: <Ship size={18} /> }
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                        <div style={{ color: '#3b82f6', display: 'flex' }}>{item.icon}</div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote Callout */}
                <div style={{
                  marginTop: '40px',
                  padding: '25px',
                  backgroundColor: '#0f1c2e',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <p style={{ fontSize: '19px', color: '#ffffff', margin: 0, fontFamily: 'serif', fontStyle: 'italic', fontWeight: '500' }}>
                    “A luxury boutique hotel at sea.”
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Silversea Column */}
            <div style={{
              flex: '1 1 500px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '0', // Removing padding here to let image go to edges
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {/* Added Image Header */}
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={Silversea_Journeys}
                  alt="Silversea Classic Luxury Ship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 28, 46, 0.6) 0%, transparent 50%)' }}></div>
              </div>

              <div style={{ padding: '40px' }}>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                      <Award size={22} />
                    </div>
                    <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea</h3>
                  </div>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7' }}>
                    One of the most established names in ultra-luxury cruising, renowned for its personalized butler service and global reach.
                  </p>
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '20px' }}>The Brand Is Known For:</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { text: "Personalized butler service", icon: <Users size={18} /> },
                      { text: "Classic fine dining", icon: <Utensils size={18} /> },
                      { text: "Expedition cruising expertise", icon: <Compass size={18} /> },
                      { text: "Global destination depth", icon: <MapPin size={18} /> },
                      { text: "Traditional ultra-luxury structure", icon: <Ship size={18} /> },
                      { text: "Heritage of excellence", icon: <Crown size={18} /> }
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                        <div style={{ color: '#0f1c2e', opacity: 0.6, display: 'flex' }}>{item.icon}</div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion Callout */}
                <div style={{
                  marginTop: '40px',
                  padding: '25px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '20px',
                  borderLeft: '5px solid #0f1c2e'
                }}>
                  <p style={{ fontSize: '15px', color: '#1e293b', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                    Appealing strongly to experienced luxury travelers seeking refined, structured, and immersive travel experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPLORA JOURNEYS BRAND VIDEO SECTION */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#0f1c2e', // Deep Navy Background
        fontFamily: 'sans-serif',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* FIXED: Horizontal Accent Line Above Text */}
          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#3b82f6', // Azure Blue accent
            margin: '0 auto 25px auto',
            borderRadius: '10px'
          }}></div>

          {/* Header Block */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#ffffff', // High contrast white
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              The Making of a Beautiful Ship
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#cbd5e1', // Light slate blue for readability
              maxWidth: '850px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              Go behind the scenes to discover the visionary design and European craftsmanship that define Explora Journeys. See how every detail is consciously curated to stir the soul and create the ultimate <span style={{ color: '#ffffff', fontWeight: '600' }}>"Ocean State of Mind."</span>
            </p>
          </div>

          {/* Video Player Container */}
          <div style={{
            position: 'relative',
            borderRadius: '30px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            aspectRatio: '16/9'
          }}>
            {/* The Video Embed - Official Explora Journeys Design Video */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qx_9Nt6kYpI"
              title="Explora Journeys: The Making of a Beautiful Ship"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            ></iframe>
          </div>

          {/* Bottom Label */}
          <p style={{
            marginTop: '40px',
            fontSize: '13px',
            color: '#3b82f6',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            opacity: 0.8
          }}>
            Explora Journeys: Design Sails the World
          </p>

        </div>
      </section>

      {/* WHICH LINE IS MORE LUXURIOUS SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Defining the Experience
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Cruise Line Is More Luxurious?
            </h2>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
              Both cruise lines deliver ultra-luxury experiences, but their interpretation of luxury differs significantly.
            </p>
          </div>

          {/* Style Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            marginBottom: '50px'
          }}>

            {/* Explora Journeys Style */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Sparkles size={20} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Luxury Style</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Contemporary elegance",
                  "Spacious open design",
                  "Relaxed atmosphere",
                  "Wellness-centered luxury",
                  "Quiet sophistication",
                  "Modern interiors"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Silversea Style */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                  <Crown size={20} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea Luxury Style</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Traditional ultra-luxury service",
                  "Formal refinement",
                  "Butler-focused hospitality",
                  "Classic luxury rituals",
                  "Intimate luxury atmosphere"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Verdict / Preference Box */}
          <div style={{
            backgroundColor: '#0f1c2e',
            borderRadius: '30px',
            padding: '50px 40px',
            color: '#ffffff',
            boxShadow: '0 20px 50px rgba(15, 28, 46, 0.15)'
          }}>
            <h4 style={{ textAlign: 'center', fontSize: '20px', fontWeight: '700', marginBottom: '40px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Finding Your Match
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
              {/* Preference 1 */}
              <div style={{ flex: '1 1 300px' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '15px' }}>Gravitate toward Explora if you prefer:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["Modern luxury hotels", "Contemporary design", "Relaxed sophistication"].map((tag, i) => (
                    <span key={i} style={{ padding: '8px 16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '50px', border: '1px solid rgba(59, 130, 246, 0.2)', fontSize: '14px', color: '#e2e8f0' }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Preference 2 */}
              <div style={{ flex: '1 1 300px' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '15px' }}>Prefer Silversea if you value:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["Traditional luxury service", "Formal elegance", "Expedition heritage"].map((tag, i) => (
                    <span key={i} style={{ padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '14px', color: '#e2e8f0' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES COMPARISON - EXPLORA JOURNEYS VISUAL HIGHLIGHT */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
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
              Accommodation Analysis
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Suites Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Main Comparison Card - Split Layout */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '40px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.08)',
            display: 'flex',
            flexWrap: 'wrap', // Responsive stacking
            alignItems: 'stretch'
          }}>

            {/* LEFT SIDE: LARGE SUITE IMAGE */}
            <div style={{
              flex: '1 1 500px',
              minHeight: '400px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img
                src={Suites_Comparison}
                alt="Explora Journeys Luxury Suite"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Floating Label on Image */}
              <div style={{
                position: 'absolute',
                top: '30px',
                left: '30px',
                backgroundColor: 'rgba(15, 28, 46, 0.9)',
                padding: '12px 20px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  The Home at Sea
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: CONTENT DETAILS */}
            <div style={{ flex: '1 1 500px', padding: '60px 50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Sparkles size={22} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys Suites</h3>
              </div>

              <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', marginBottom: '35px' }}>
                Explora offers some of the largest standard accommodations in luxury cruising, prioritizing a <span style={{ color: '#0f1c2e', fontWeight: '700' }}>residential feeling</span> over traditional layouts.
              </p>

              {/* Features List */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
                  Standard Features Include:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {[
                    "Oceanfront views",
                    "Private terraces",
                    "Heated bathroom floors",
                    "Walk-in wardrobes",
                    "Floor-to-ceiling windows",
                    "European interiors"
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#334155', fontWeight: '500' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUITE EMPHASIS BOX - PROPER ONE ROW DESIGN */}
              <div style={{
                backgroundColor: '#ffffff',
                padding: '25px',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  {[
                    { text: "Residential comfort", icon: <Home size={18} /> },
                    { text: "Spacious layouts", icon: <Maximize size={18} /> },
                    { text: "Outdoor living", icon: <Sun size={18} /> },
                    { text: "Wellness design", icon: <Heart size={18} /> }
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ color: '#3b82f6', display: 'flex' }}>{point.icon}</div>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', whiteSpace: 'nowrap' }}>{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Fact */}
              <div style={{ marginTop: '35px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, fontStyle: 'italic', lineHeight: '1.5' }}>
                  *Architecturally designed to provide an unhurried "Home at Sea" experience through thoughtful spatial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SILVERSEA SUITES SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#64748b',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Traditional Excellence
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Silversea Suites
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#64748b', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Silversea Suite Detail Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)'
          }}>
            {/* Top Branding Bar - Cool Slate for Heritage feel */}
            <div style={{
              backgroundColor: '#475569',
              padding: '20px 40px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Award size={20} style={{ color: '#cbd5e1' }} />
              <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.5px' }}>Silversea Luxury Suites</span>
            </div>

            <div style={{ padding: '50px 40px' }}>
              <p style={{ fontSize: '18px', color: '#334155', fontWeight: '500', marginBottom: '35px', lineHeight: '1.6' }}>
                Silversea suites are <span style={{ color: '#0f1c2e', fontWeight: '700' }}>elegant and service-oriented</span>, providing a refined environment that prioritizes classic ultra-luxury traditions.
              </p>

              {/* Highlights List */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px' }}>
                  Highlights Include:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px'
                }}>
                  {[
                    "Butler service for every suite",
                    "Marble bathrooms",
                    "Luxury bedding",
                    "Personalized minibar setup",
                    "Ocean-view accommodations"
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ color: '#64748b', display: 'flex' }}>
                        <CheckCircle size={18} />
                      </div>
                      <span style={{ fontSize: '16px', color: '#475569', fontWeight: '500' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Atmosphere Emphasis Box - Horizontal Design */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '30px 25px',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <h4 style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  Service & Atmosphere Emphasis
                </h4>

                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '30px'
                }}>
                  {/* Point 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#475569', display: 'flex' }}>
                      <Users size={20} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', whiteSpace: 'nowrap' }}>
                      Butler-focused hospitality
                    </span>
                  </div>

                  {/* Point 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#475569', display: 'flex' }}>
                      <Crown size={20} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', whiteSpace: 'nowrap' }}>
                      Traditional refinement
                    </span>
                  </div>

                  {/* Point 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#475569', display: 'flex' }}>
                      <Gem size={20} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', whiteSpace: 'nowrap' }}>
                      Formal luxury rituals
                    </span>
                  </div>
                </div>
              </div>

              {/* Comparative Context Footer */}
              <div style={{ textAlign: 'center', borderTop: '1px solid #e2e8f0', marginTop: '40px', paddingTop: '30px' }}>
                <p style={{ fontSize: '16px', color: '#64748b', margin: 0, lineHeight: '1.6', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
                  Silversea’s atmosphere leans more traditional and service-focused compared with Explora’s lifestyle-oriented luxury approach.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHICH LINE HAS BETTER SUITES - DECISION SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              The Final Comparison
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Cruise Line Has Better Suites?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Board */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.1)',
            border: '1px solid rgba(15, 28, 46, 0.05)'
          }}>

            {/* EXPLORA JOURNEYS SIDE */}
            <div style={{
              flex: '1 1 450px',
              backgroundColor: '#0f1c2e',
              padding: '60px 45px',
              color: '#ffffff'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ color: '#3b82f6', marginBottom: '15px' }}>
                  <Maximize size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 10px 0' }}>Explora Journeys</h3>
                <p style={{ fontSize: '15px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Best for Space & Contemporary Design
                </p>
              </div>

              <p style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                Choose Explora if you prioritize:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Spacious balconies",
                  "Modern interiors",
                  "Residential comfort"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '17px', color: '#e2e8f0' }}>
                    <CheckCircle size={18} style={{ color: '#3b82f6' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SILVERSEA SIDE */}
            <div style={{
              flex: '1 1 450px',
              backgroundColor: '#f8fafc',
              padding: '60px 45px',
              color: '#0f1c2e',
              borderLeft: '1px solid rgba(15, 28, 46, 0.05)'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ color: '#64748b', marginBottom: '15px' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 10px 0' }}>Silversea</h3>
                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Best for Butler Service & Tradition
                </p>
              </div>

              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                Choose Silversea if you prioritize:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Personalized service",
                  "Butler attention",
                  "Traditional luxury ambiance"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '17px', color: '#334155' }}>
                    <CheckCircle size={18} style={{ color: '#0f1c2e', opacity: 0.3 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing Advice Box */}
          <div style={{
            marginTop: '40px',
            padding: '30px',
            backgroundColor: '#f1f5f9',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '16px', color: '#475569', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>
              "Ultimately, the better suite depends on whether you seek the architectural space of a modern residence or the highly attentive service of a traditional luxury estate."
            </p>
          </div>

        </div>
      </section>

      {/* VIDEO SECTION 2: SILVERSEA HERITAGE EXPERIENCE */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#f1f5f9', // Soft Luxury Slate Background
        fontFamily: 'sans-serif',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '60px',
            justifyContent: 'center'
          }}>

            {/* LEFT SIDE: CONTENT */}
            <div style={{ flex: '1 1 500px', minWidth: '320px' }}>
              {/* Horizontal Accent Line */}
              <div style={{
                width: '50px',
                height: '3px',
                backgroundColor: '#3b82f6',
                marginBottom: '25px',
                borderRadius: '10px'
              }}></div>

              <span style={{
                color: '#3b82f6',
                fontWeight: '700',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '15px'
              }}>
                Heritage Excellence
              </span>

              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#0f1c2e',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '25px',
                letterSpacing: '-0.02em'
              }}>
                The Art of Silversea: <br /> Defining Ultra-Luxury
              </h2>

              <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.8', maxWidth: '550px' }}>
                Discover a world of timeless flavors, unrivaled comfort, and unmatched access.
                From hidden harbors to coveted cities, see how Silversea elevates the journey
                of a lifetime through personalized butler service and traditional refinement.
              </p>
            </div>

            {/* RIGHT SIDE: VIDEO PLAYER */}
            <div style={{ flex: '1 1 500px', minWidth: '320px', position: 'relative' }}>
              {/* Decorative background element */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderTop: '4px solid rgba(15, 28, 46, 0.1)',
                borderRight: '4px solid rgba(15, 28, 46, 0.1)',
                borderRadius: '0 30px 0 0',
                zIndex: 0
              }}></div>

              <div style={{
                position: 'relative',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(15, 28, 46, 0.25)',
                aspectRatio: '16/9',
                backgroundColor: '#000',
                border: '1px solid #ffffff',
                zIndex: 1
              }}>
                {/* The Video Embed - Updated with Silversea Brand Video */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/24iVCAq-lq8"
                  title="Silversea: To Finding More"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0 }}
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DINING COMPARISON SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Culinary Analysis
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Dining Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Board */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys Dining Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#0f1c2e',
              borderRadius: '30px',
              padding: '50px 40px',
              color: '#ffffff',
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Utensils size={24} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Explora Journeys Dining</h3>
              </div>

              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '20px' }}>Explora Emphasizes:</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Flexible dining",
                    "Mediterranean-inspired cuisine",
                    "Wellness-focused menus",
                    "Contemporary culinary experiences",
                    "Relaxed sophistication"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#e2e8f0' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vibe Box */}
              <div style={{
                marginTop: '40px',
                padding: '20px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>
                  "Dining feels similar to upscale luxury resorts and boutique hotels."
                </p>
              </div>
            </div>

            {/* 2. Silversea Dining Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              borderRadius: '30px',
              padding: '50px 40px',
              color: '#0f1c2e',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                  <Award size={24} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea Dining</h3>
              </div>

              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '20px' }}>Silversea Offers:</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Fine dining traditions",
                    "Destination-inspired cuisine",
                    "Elegant specialty restaurants",
                    "Elevated luxury service"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vibe Box */}
              <div style={{
                marginTop: '40px',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0, fontStyle: 'italic' }}>
                  "Silversea’s culinary atmosphere feels slightly more formal and classic."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHICH LINE HAS BETTER DINING - DECISION SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif'
      }}>
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
              Preference Guide
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 38px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Cruise Line Has Better Dining?
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
              This depends heavily on your personal travel style.
            </p>
          </div>

          {/* Comparison Split Card */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)',
            border: '1px solid #e2e8f0'
          }}>

            {/* Explora Journeys Column */}
            <div style={{
              flex: '1 1 400px',
              padding: '50px 40px',
              borderRight: '1px solid #f1f5f9'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                <div style={{ color: '#3b82f6' }}>
                  <Utensils size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Is Ideal For:</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Modern culinary travelers",
                  "Wellness-focused dining",
                  "Relaxed luxury meals",
                  "Lifestyle-oriented experiences"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#475569' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                    <span style={{ fontWeight: '500' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Silversea Column */}
            <div style={{
              flex: '1 1 400px',
              padding: '50px 40px',
              backgroundColor: '#fcfcfc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                <div style={{ color: '#64748b' }}>
                  <Award size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea Is Ideal For:</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Traditional gourmet dining",
                  "Formal luxury service",
                  "Classic fine dining atmosphere"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#475569' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
                    <span style={{ fontWeight: '500' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quality Verdict Box */}
          <div style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '30px',
            backgroundColor: '#0f1c2e',
            borderRadius: '20px',
            boxShadow: '0 15px 30px rgba(15, 28, 46, 0.1)'
          }}>
            <p style={{
              fontSize: '17px',
              color: '#ffffff',
              margin: 0,
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              While the environments differ, <span style={{ color: '#3b82f6', fontWeight: '700' }}>both cruise lines deliver excellent culinary quality</span> that ranks among the best in the maritime world.
            </p>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE & ONBOARD EXPERIENCE SECTION - REFINED WITH IMAGERY */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#e6edf7', // Original soft blue background
        fontFamily: 'sans-serif'
      }}>
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
              The Onboard DNA
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Atmosphere & Onboard Experience
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys Atmosphere Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#0f1c2e',
              borderRadius: '30px',
              overflow: 'hidden', // Crops the top image
              color: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              {/* Lifestyle Image Header */}
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <img
                  src={Explora_Atmosphere}
                  alt="Explora Wellness Atmosphere"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #0f1c2e)' }}></div>
              </div>

              <div style={{ padding: '30px 40px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                    <Sparkles size={22} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Explora Atmosphere</h3>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>The Environment Feels:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {["Contemporary", "Relaxed", "Wellness-focused", "Quietly luxurious", "Sophisticated but informal"].map((tag, i) => (
                      <span key={i} style={{ padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50px', fontSize: '13px', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>Travelers Appreciate:</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      "No crowded spaces",
                      "No loud onboard announcements",
                      "No overly formal environments",
                      "Spacious social areas"
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '15px', color: '#cbd5e1' }}>
                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Silversea Atmosphere Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              borderRadius: '30px',
              overflow: 'hidden',
              color: '#0f1c2e',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)'
            }}>
              {/* Lifestyle Image Header */}
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <img
                  src={Silversea_Atmosphere}
                  alt="Silversea Traditional Hospitality"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #f8fafc)' }}></div>
              </div>

              <div style={{ padding: '30px 40px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                    <Anchor size={22} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea Atmosphere</h3>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>The Environment Feels:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {["Refined", "Traditional", "Personalized", "Destination-focused", "Intimate"].map((tag, i) => (
                      <span key={i} style={{ padding: '6px 12px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', color: '#334155', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>The Experience Emphasizes:</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      "Service excellence & Butler attention",
                      "Cultural enrichment programming",
                      "Expedition expertise & Remote reach",
                      "Traditional luxury hospitality"
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '15px', color: '#475569' }}>
                        <CheckCircle size={16} style={{ color: '#0f1c2e', opacity: 0.2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST-TIME LUXURY CRUISER DECISION SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              The Beginner's Guide
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 38px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Cruise Line Is Better for First-Time Luxury Cruisers?
            </h2>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys - The Modern Bridge */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ color: '#3b82f6' }}>
                    <Hotel size={28} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys</h3>
                </div>
                <p style={{ fontSize: '15px', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                  Often better for travelers transitioning from:
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                  {["Luxury resorts", "Boutique hotels", "Premium cruises"].map((tag, i) => (
                    <span key={i} style={{ padding: '8px 16px', backgroundColor: '#ffffff', borderRadius: '50px', border: '1px solid #3b82f6', fontSize: '14px', color: '#0f1c2e', fontWeight: '600' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '25px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                borderLeft: '5px solid #3b82f6',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <p style={{ fontSize: '16px', color: '#1e293b', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                  The relaxed atmosphere and modern design feel <span style={{ color: '#3b82f6', fontWeight: '700' }}>highly approachable</span> for those new to the sea.
                </p>
              </div>
            </div>

            {/* 2. Silversea - The Heritage Choice */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(15, 28, 46, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ color: '#0f1c2e' }}>
                    <Crown size={28} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea</h3>
                </div>
                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                  Often appeals more strongly to:
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Experienced luxury cruisers",
                    "Expedition travelers",
                    "Traditional luxury travelers",
                    "Guests prioritizing personalized butler service"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '25px',
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                borderLeft: '5px solid #0f1c2e'
              }}>
                <p style={{ fontSize: '15px', color: '#475569', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>
                  "Ideal for travelers who value the structured elegance and high-touch service of a traditional luxury estate."
                </p>
              </div>
            </div>

          </div>

          {/* Final Expert Verdict */}
          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '30px',
            backgroundColor: '#0f1c2e',
            borderRadius: '24px',
            color: '#ffffff'
          }}>
            <p style={{ fontSize: '17px', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
              Whether you prefer the unhurried "Ocean State of Mind" or the personalized precision of a butler-led voyage, <span style={{ color: '#3b82f6', fontWeight: '700' }}>both lines provide an exceptional entry point</span> into the world of ultra-luxury cruising.
            </p>
          </div>

        </div>
      </section>

      {/* ITINERARY COMPARISON SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Global Footprint
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Itinerary Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys Itineraries */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              borderRadius: '30px',
              padding: '50px 40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 15px 35px rgba(15, 28, 46, 0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Compass size={24} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys</h3>
              </div>

              <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Primary Regional Focus:</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  "Mediterranean cruises",
                  "Caribbean voyages",
                  "Lifestyle-focused itineraries",
                  "Scenic coastal cruising",
                  "Boutique destination experiences"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#3b82f6', display: 'flex' }}><CheckCircle size={18} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Silversea Itineraries */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              borderRadius: '30px',
              padding: '50px 40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 15px 35px rgba(15, 28, 46, 0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                  <Globe size={24} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea</h3>
              </div>

              <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Specialized Expertise:</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  "Expedition voyages",
                  "Polar exploration",
                  "Remote destinations",
                  "Grand world cruises",
                  "Extensive global coverage"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#94a3b8', display: 'flex' }}><CheckCircle size={18} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion Box */}
          <div style={{
            marginTop: '50px',
            backgroundColor: '#0f1c2e',
            borderRadius: '24px',
            padding: '35px 40px',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)',
            borderLeft: '6px solid #3b82f6'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#e2e8f0',
              margin: 0,
              fontWeight: '500'
            }}>
              "While Explora creates unhurried lifestyle journeys in popular luxury hubs, <span style={{ color: '#ffffff', fontWeight: '700' }}>Silversea offers broader destination diversity overall</span>, catering to those seeking the ends of the earth."
            </p>
          </div>
        </div>
      </section>

      {/* WHICH LINE HAS BETTER ITINERARIES SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Itinerary Verdict
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Cruise Line Has Better Itineraries?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>

            {/* 1. Explora Journeys - Lifestyle Focus */}
            <div style={{
              flex: '1 1 450px',
              backgroundColor: '#f8fafc',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ color: '#3b82f6', marginBottom: '15px' }}>
                  <Compass size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 10px 0' }}>Explora Journeys</h3>
                <div style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', fontSize: '14px', color: '#3b82f6', fontWeight: '700' }}>
                  BEST FOR CONTEMPORARY LIFESTYLE LUXURY
                </div>
              </div>

              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Choose Explora if you seek:</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  "Wellness-focused cruising",
                  "Boutique Mediterranean experiences",
                  "Relaxed luxury itineraries"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '17px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#3b82f6', display: 'flex' }}><CheckCircle size={18} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Silversea - Exploration Focus */}
            <div style={{
              flex: '1 1 450px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 15px 35px rgba(15, 28, 46, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ color: '#0f1c2e', marginBottom: '15px' }}>
                  <Globe size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 10px 0' }}>Silversea</h3>
                <div style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '6px', fontSize: '14px', color: '#0f1c2e', fontWeight: '700' }}>
                  BEST FOR GLOBAL EXPLORATION & EXPEDITIONS
                </div>
              </div>

              <p style={{ fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Choose Silversea if you seek:</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  "Adventure & Expedition cruising",
                  "Remote destinations",
                  "Global exploration"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '17px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#0f1c2e', opacity: 0.3, display: 'flex' }}><CheckCircle size={18} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Context Box */}
          <div style={{
            textAlign: 'center',
            padding: '30px',
            backgroundColor: '#0f1c2e',
            borderRadius: '24px',
            color: '#ffffff'
          }}>
            <p style={{ fontSize: '17px', lineHeight: '1.6', margin: 0, fontWeight: '400', color: '#ffffff' }}>
              Ultimately, your choice depends on whether you value <span style={{ color: '#93c5fd', fontWeight: '700' }}>Lifestyle-based discovery</span> in iconic ports or <span style={{ color: '#93c5fd', fontWeight: '700' }}>Destination-deep exploration</span> in the world's most remote regions.
            </p>
          </div>
        </div>
      </section>

      {/* INCLUSIONS COMPARISON SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Value & Amenities
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Inclusions Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys Inclusions */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  { text: "Fine dining", icon: <Utensils size={18} /> },
                  { text: "Premium beverages", icon: <GlassWater size={18} /> },
                  { text: "Unlimited Wi-Fi", icon: <Wifi size={18} /> },
                  { text: "Onboard gratuities", icon: <CircleDollarSign size={18} /> },
                  { text: "Wellness programs", icon: <Heart size={18} /> },
                  { text: "Oceanfront suites", icon: <Maximize size={18} /> }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#3b82f6', display: 'flex' }}>{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Silversea Inclusions */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 15px 35px rgba(15, 28, 46, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                  <Crown size={24} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {[
                  { text: "Butler service (Every suite)", icon: <UserCheck size={18} /> },
                  { text: "Gourmet fine dining", icon: <Utensils size={18} /> },
                  { text: "Included beverages", icon: <GlassWater size={18} /> },
                  { text: "Onboard gratuities", icon: <CircleDollarSign size={18} /> },
                  { text: "Unlimited Wi-Fi", icon: <Wifi size={18} /> },
                  { text: "Expedition expertise", icon: <Compass size={18} /> }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', fontSize: '16px', color: '#334155', fontWeight: '500' }}>
                    <div style={{ color: '#64748b', display: 'flex' }}>{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Differentiator Box */}
          <div style={{
            marginTop: '50px',
            backgroundColor: '#0f1c2e',
            borderRadius: '24px',
            padding: '35px 40px',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Visual Accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', backgroundColor: '#3b82f6' }}></div>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#e2e8f0',
              margin: 0,
              fontWeight: '500',
              maxWidth: '850px',
              margin: '0 auto'
            }}>
              Both offer strong luxury inclusions, although <span style={{ color: '#ffffff', fontWeight: '700', borderBottom: '2px solid #3b82f6' }}>Silversea’s butler service</span> remains a major differentiator for travelers seeking the highest level of personalized suite attention.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING COMPARISON SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Investment Analysis
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Pricing Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Pricing Factors Bar */}
          <div style={{ marginBottom: '50px' }}>
            <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
              Primary Pricing Variables:
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center'
            }}>
              {["Itinerary", "Suite Category", "Season", "Ship", "Voyage Length"].map((factor, i) => (
                <div key={i} style={{
                  padding: '8px 20px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50px',
                  border: '1px solid #e2e8f0',
                  fontSize: '15px',
                  color: '#0f1c2e',
                  fontWeight: '600',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  {factor}
                </div>
              ))}
            </div>
          </div>

          {/* Value Comparison Cards */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* Explora Value Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '45px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ color: '#3b82f6' }}><Maximize size={24} /></div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Explora Journeys Value</h3>
              </div>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                Explora may offer <span style={{ color: '#3b82f6', fontWeight: '700' }}>stronger relative value</span> for travelers seeking exceptionally spacious accommodations and modern, lifestyle-oriented luxury experiences.
              </p>
            </div>

            {/* Silversea Value Card */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '45px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ color: '#0f1c2e' }}><Compass size={24} /></div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Silversea Value</h3>
              </div>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                Silversea may command <span style={{ color: '#0f1c2e', fontWeight: '700' }}>higher premium pricing</span> for their specialized expedition voyages, polar exploration, and high-touch personalized butler service.
              </p>
            </div>
          </div>

          {/* Final Conclusion Box */}
          <div style={{
            marginTop: '50px',
            backgroundColor: '#0f1c2e',
            borderRadius: '24px',
            padding: '40px',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#cbd5e1',
              margin: '0 auto',
              maxWidth: '800px',
              fontWeight: '500'
            }}>
              "Ultimately, the better value depends entirely on the <span style={{ color: '#ffffff', fontWeight: '700' }}>traveler’s specific luxury priorities</span> — whether you value architectural space and wellness or traditional service and global reach."
            </p>
          </div>
        </div>
      </section>

      {/* BEST TRAVELERS FOR EXPLORA VS SILVERSEA SECTION */}
      <section style={{
        padding: '90px 20px',
        backgroundColor: '#e6edf7',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Finding Your Match
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#0f1c2e',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Line Best Suits Your Travel Style?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* 1. Explora Journeys - The Modern Lifestyle Traveler */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#f8fafc',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <Sparkles size={40} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 10px 0' }}>Explora Journeys</h3>
                <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  The Modern Choice
                </p>
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Ideal For:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Couples",
                    "Sophisticated professionals",
                    "Wellness-focused travelers",
                    "Luxury hotel travelers",
                    "First-time ultra-luxury cruisers",
                    "Travelers avoiding formal environments"
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '14px', fontSize: '17px', color: '#334155', fontWeight: '500' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', margin: 0 }}>
                  "Perfect for those who seek the atmosphere of a luxury resort or boutique hotel at sea."
                </p>
              </div>
            </div>

            {/* 2. Silversea - The Traditional & Global Traveler */}
            <div style={{
              flex: '1 1 450px',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '50px 40px',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ color: '#0f1c2e', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <Anchor size={40} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: '0 0 10px 0' }}>Silversea</h3>
                <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  The Classic Choice
                </p>
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Ideal For:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Expedition travelers",
                    "Experienced luxury cruisers",
                    "Traditional luxury travelers",
                    "Global exploration enthusiasts",
                    "Travelers prioritizing butler service"
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '14px', fontSize: '17px', color: '#334155', fontWeight: '500' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', margin: 0 }}>
                  "Perfect for those who seek the refined precision of traditional service and global discovery."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMON MISTAKES AUTO-SLIDER - NEW BG COLOR */}
      <section
        className="medi-mistakes-slider-section"
        style={{
          backgroundColor: '#f1f5f9', // Soft Luxury Slate-Blue
          padding: '100px 20px',      // generous vertical spacing
          position: 'relative'
        }}
        onMouseEnter={() => setIsMediSliderHovered(true)}
        onMouseLeave={() => setIsMediSliderHovered(false)}
      >
        <div className="medi-mistakes-slider-container">
          <div className="medi-mistakes-slider-header">
            <span className="medi-mistakes-eyebrow" style={{ color: '#3b82f6', fontWeight: '700', letterSpacing: '2px' }}>
              AVOID CRUISE PITFALLS
            </span>
            <h2 className="medi-mistakes-slider-title" style={{ color: '#0f1c2e', fontWeight: '700' }}>
              Common Mistakes Travelers Make When Comparing Luxury Cruise Lines
            </h2>
            <div className="medi-mistakes-slider-separator" style={{ backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>

          <div className="medi-mistakes-carousel-wrapper">
            {/* Left Arrow */}
            <button
              className="medi-slider-nav-btn btn-left"
              style={{ color: '#0f1c2e', borderColor: '#cbd5e1', backgroundColor: '#ffffff' }}
              onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
            >
              <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
            </button>

            {/* Slider Card Viewport */}
            <div className="medi-slider-card-viewport">
              {mediMistakes.map((mistake, idx) => {
                const isActive = mediActiveMistake === idx
                return (
                  <div
                    key={idx}
                    className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}
                    style={{
                      backgroundColor: '#ffffff', // Cards stay crisp white to contrast the background
                      borderRadius: '24px',
                      padding: '45px',
                      boxShadow: isActive ? '0 30px 60px -12px rgba(15, 28, 46, 0.12)' : 'none',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <div className="medi-mistake-slide-header">
                      <span className="medi-mistake-card-num" style={{ color: '#3b82f6', opacity: 0.5, fontWeight: '800' }}>0{idx + 1}</span>
                      <h3 className="medi-mistake-card-title" style={{ color: '#0f1c2e', fontSize: '1.4rem' }}>{mistake.title}</h3>
                    </div>

                    <div className="medi-mistake-slide-body">
                      <p className="medi-mistake-card-description" style={{ color: '#475569', lineHeight: '1.7' }}>{mistake.desc}</p>

                      {mistake.bullets && mistake.bullets.length > 0 && (
                        <ul className="medi-mistake-card-bullets-list" style={{ marginTop: '20px' }}>
                          {mistake.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="medi-mistake-card-bullet-item" style={{ marginBottom: '10px' }}>
                              <CheckCircle size={16} style={{ color: '#3b82f6' }} />
                              <span style={{ color: '#334155', fontWeight: '500' }}>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {idx === 1 && (
                        <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                          <p style={{ color: '#475569', fontStyle: 'italic', fontSize: '0.95em', margin: 0 }}>
                            An experienced advisor helps travelers compare the actual onboard experience.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Arrow */}
            <button
              className="medi-slider-nav-btn btn-right"
              style={{ color: '#0f1c2e', borderColor: '#cbd5e1', backgroundColor: '#ffffff' }}
              onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Indicator Dots */}
          <div className="medi-slider-progress-dots" style={{ marginTop: '40px' }}>
            {mediMistakes.map((_, idx) => (
              <button
                key={idx}
                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                style={{
                  backgroundColor: mediActiveMistake === idx ? '#3b82f6' : '#cbd5e1',
                  width: mediActiveMistake === idx ? '24px' : '8px',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setMediActiveMistake(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT INSIGHT */}
      <section id="explora-silversea-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
        <div className="medi-expert-editorial-container">
          <div className="medi-expert-editorial-card">

            {/* Left Side: Editorial Portrait and Floating Stat Badge */}
            <div className="medi-editorial-portrait-block">
              <div className="medi-editorial-image-frame">
                <img src={azamaraShip} alt="Angela Hughes - Luxury Cruise Expert" />
                <div className="medi-editorial-gradient-layer"></div>
              </div>

              {/* Differentiated floating stat board preserved for authority */}
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

            {/* Right Side: Editorial Text & Structured Lists */}
            <div className="medi-editorial-content-block">
              <div className="medi-editorial-header">
                <div className="medi-editorial-eyebrow-container">
                  <Award size={18} className="medi-editorial-icon-badge" />
                  <span className="medi-editorial-eyebrow">Professional Perspective</span>
                </div>
                <h2 className="medi-editorial-title">
                  Expert Insight from <br className="medi-growth-title-break" />Angela Hughes
                </h2>
                <div className="medi-editorial-accent-bar"></div>
              </div>

              <p className="medi-editorial-lead-para">
                According to Angela Hughes, travelers often discover that choosing between Explora and Silversea comes down less to “which is better” and more to:
                <strong> “Which luxury experience feels most aligned with your lifestyle?”</strong>
              </p>

              <div className="medi-priorities-box">
                <p className="medi-priorities-intro">
                  Comparing core appeals for sophisticated travelers:
                </p>
                <div className="medi-priorities-grid-pills">
                  {[
                    'Explora: Contemporary luxury',
                    'Silversea: Expedition experiences',
                    'Explora: Spacious suites',
                    'Silversea: Traditional service',
                    'Explora: Relaxed sophistication',
                    'Silversea: Global diversity',
                    'Explora: Wellness travel',
                    'Silversea: Butler hospitality'
                  ].map((item, idx) => (
                    <div key={idx} className="medi-priority-pill-item">
                      <CheckCircle size={15} className="medi-priority-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="medi-editorial-body-para">
                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes specializes in helping travelers compare luxury cruise experiences realistically based on travel personality, lifestyle preferences, destination goals, luxury expectations, and cruise experience level.
              </p>

              <div className="medi-expertise-section-box">
                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                <div className="medi-expertise-horizontal-strip">
                  {[
                    { title: 'Ultra-luxury cruising', icon: Ship },
                    { title: 'Expedition voyages', icon: Compass },
                    { title: 'River cruising', icon: Anchor },
                    { title: 'Boutique travel', icon: Globe },
                    { title: 'Global luxury travel planning', icon: Sparkles }
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

      {/* WHY WORK WITH US */}
      <section className="medi-work-with-us-section">
        <div className="medi-work-with-us-container">

          {/* Header Block */}
          <div className="medi-work-header-card">
            <span className="medi-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
            <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips & Ships Luxury Travel</h2>
            <div className="medi-heading-separator-bar custom-bar"></div>
            <p className="medi-work-intro-para">
              Luxury cruise planning has become increasingly specialized.
            </p>
          </div>

          {/* Stepped Timeline Journey */}
          <div className="medi-work-timeline-flow">
            {/* The Central Glowing Line */}
            <div className="medi-timeline-line"></div>

            {/* Pillar 1: Advisor Benefits (Left Aligned) */}
            <div className="medi-timeline-step step-left">
              <div className="medi-timeline-node">
                <Compass size={18} />
              </div>
              <div className="medi-timeline-card">
                <div className="medi-card-step-badge">STEP 01</div>
                <h3 className="medi-pillar-title">Experienced advisors help travelers:</h3>
                <div className="medi-pillar-line-bar"></div>
                <ul className="medi-pillar-list">
                  <li>
                    <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Compare luxury cruise lines accurately</span>
                  </li>
                  <li>
                    <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Match itineraries to travel style</span>
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
                    <span>Simplify luxury travel logistics</span>
                  </li>
                  <li>
                    <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Maximize overall value</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Specializations (Right Aligned) */}
            <div className="medi-timeline-step step-right">
              <div className="medi-timeline-node">
                <Ship size={18} />
              </div>
              <div className="medi-timeline-card">
                <div className="medi-card-step-badge">STEP 02</div>
                <h3 className="medi-pillar-title">Trips & Ships Luxury Travel specializes in:</h3>
                <div className="medi-pillar-line-bar"></div>
                <ul className="medi-pillar-list">
                  <li>
                    <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Ultra-luxury cruises</span>
                  </li>
                  <li>
                    <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Boutique ship experiences</span>
                  </li>
                  <li>
                    <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Expedition travel</span>
                  </li>
                  <li>
                    <Heart size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Personalized luxury vacations</span>
                  </li>
                  <li>
                    <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                    <span>Global premium travel planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="medi-authority-section">
        <div className="medi-authority-container">

          {/* Header Block */}
          <div className="medi-authority-header-block">
            <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
            <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>

          <div className="medi-prestige-plaque-wrapper">
            {/* Left Side: The Identity Board */}
            <div className="medi-prestige-identity-card">
              <div className="medi-prestige-seal-ring">
                <span className="medi-prestige-initials">AH</span>
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

      {/* FAQ SECTION */}
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

      {/* CTA SECTION */}
      <section className="medi-cta-main-section">
        <div className="medi-cta-bg-pattern-layer"></div>
        <div className="medi-cta-content-relative">
          <div className="medi-cta-inner-wrapper">
            <h2 className="medi-cta-heading-white">Ready to Choose Between Explora and Silversea?</h2>
            <div className="medi-cta-separator-white"></div>

            <p className="medi-cta-paragraph-white">
              Luxury cruising is deeply personal. For travelers seeking <strong>contemporary elegance, spacious suites, wellness-focused experiences, boutique luxury, and quiet sophistication</strong>, Explora Journeys may be the ideal fit.
            </p>

            <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
              For travelers prioritizing <strong>expedition experiences, butler service, traditional luxury hospitality, and global exploration</strong>, Silversea may be the stronger choice. With over four decades of luxury travel expertise, Angela Hughes and the team help travelers confidently select the ideal ultra-luxury cruise experience.
            </p>

            <div className="medi-cta-considerations-box">
              <span className="medi-cta-considerations-title">Whether you are considering:</span>
              <ul className="medi-cta-considerations-list">
                {[
                  "Mediterranean luxury cruises",
                  "Expedition voyages",
                  "Boutique ship experiences",
                  "Wellness-focused travel",
                  "Ultra-luxury cruising"
                ].map((item, idx) => (
                  <li key={idx} className="medi-cta-considerations-item">
                    <CheckCircle size={16} className="medi-cta-considerations-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
              Trips & Ships Luxury Travel provides expert guidance backed by real-world luxury travel expertise.
            </p>

            <div className="medi-cta-button-group">
              <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <Phone size={18} />
                Schedule a Personalized Luxury Cruise Consultation Today
              </button>
            </div>

            {/* Industry Resource Links */}
            <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
              <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Explora Journeys Official Website</span>
              <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Silversea Official Website</span>
              <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>CLIA</span>
              <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Condé Nast Traveler</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExploraJourneysVsSilversea
