import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import profileAH from '../../assets/HXExpeditionsVsSilverseaExpeditions/Profile_AH.jpg'

import HX_Philosophy from '../../assets/HXExpeditionsVsSilverseaExpeditions/HX_Philosophy.jpg'
import Silversea_Philosophy from '../../assets/HXExpeditionsVsSilverseaExpeditions/Silversea_Philosophy.jpg'
import Silversea_Luxury from '../../assets/HXExpeditionsVsSilverseaExpeditions/Luxury_Silversea.jpg'
import Luxury_HX from '../../assets/HXExpeditionsVsSilverseaExpeditions/Luxury_HX.jpg'
import Suites_HX from '../../assets/HXExpeditionsVsSilverseaExpeditions/Suites_HX.jpg'
import Suites_Silversea from '../../assets/HXExpeditionsVsSilverseaExpeditions/Suites_Silversea.jpg'
import Wildlife_HX from '../../assets/HXExpeditionsVsSilverseaExpeditions/Wildlife_HX.jpg'
import Wildlife_Silversea from '../../assets/HXExpeditionsVsSilverseaExpeditions/Wildlife_Silversea.jpg'
import Antarctica_HX from '../../assets/HXExpeditionsVsSilverseaExpeditions/Antarctica_HX.jpg'
import Antarctica_Silversea from '../../assets/HXExpeditionsVsSilverseaExpeditions/Antarctica_Silversea.jpg'
import Arctic_HX from '../../assets/HXExpeditionsVsSilverseaExpeditions/Arctic_HX.jpg'
import Arctic_Silversea from '../../assets/HXExpeditionsVsSilverseaExpeditions/Arctic_Silversea.jpg'

import {
  Ship, MapPin, Star, Clock, Users, CheckCircle,
  Compass, Sparkles, Anchor, Calendar, Gem,
  ChevronRight, Crown, Phone,
  Globe, LayoutList, Heart, Sun, Award,
  Moon, Music,
  Mic, FileText, GraduationCap, Camera, Snowflake, Waves, Minus,
  Dumbbell,
  Home,
  Maximize,
  UserCheck,
  Utensils,
  Microscope,
  Zap,
  Search,
  Binoculars
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/HXExpeditionsVsSilverseaExpeditions/Hero_1.jpg'
import hero2 from '../../assets/HXExpeditionsVsSilverseaExpeditions/Hero_2.jpg'
import hero3 from '../../assets/HXExpeditionsVsSilverseaExpeditions/Hero_3.webp'

function HXExpeditionsVsSilverseaExpeditions() {
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
      setMediActiveMistake((prev) => (prev + 1) % mediMistakes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isMediSliderHovered])

  const mediToggleFaq = (index) => {
    setMediActiveFaq(mediActiveFaq === index ? null : index)
  }

  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 992)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const comparisonFaqs = [
    {
      question: "Is HX Expeditions better than Silversea Expeditions?",
      answer: "It depends on travel style. HX is generally more expedition focused, while Silversea emphasizes ultra luxury."
    },
    {
      question: "Which is more luxurious, Silversea or HX?",
      answer: "Silversea is significantly more luxurious from a traditional luxury cruise perspective."
    },
    {
      question: "Which expedition line is better for Antarctica?",
      answer: "HX is often stronger for active exploration, while Silversea excels in luxury comfort."
    },
    {
      question: "Is Silversea more luxury focused than HX?",
      answer: "Yes. Silversea strongly prioritizes luxury service and upscale accommodations."
    },
    {
      question: "Which expedition cruise line is better for wildlife?",
      answer: "Both are strong, but HX often feels more wildlife and exploration focused."
    },
    {
      question: "Are HX cruises more adventurous than Silversea?",
      answer: "Yes. HX typically delivers a more expedition intensive atmosphere."
    },
    {
      question: "Which expedition line has better cabins?",
      answer: "Silversea generally offers larger, more luxurious suites."
    },
    {
      question: "What is included on HX vs Silversea cruises?",
      answer: "Silversea includes more luxury amenities and premium services, while HX focuses more on expedition inclusions."
    },
    {
      question: "Which expedition line is better for older travelers?",
      answer: "Both can work well, but mobility and activity levels should be carefully considered."
    },
    {
      question: "Is Silversea ultra luxury?",
      answer: "Yes. Silversea is considered one of the leading ultra luxury cruise brands."
    },
    {
      question: "Which expedition line is better for first timers?",
      answer: "Silversea may feel more approachable for luxury travelers, while HX appeals to adventure minded travelers."
    },
    {
      question: "Which cruise line is better for the Arctic?",
      answer: "HX is often stronger for deeper Arctic expedition immersion."
    },
    {
      question: "What is the atmosphere onboard Silversea expeditions?",
      answer: "Elegant, refined and luxury focused with personalized service."
    },
    {
      question: "Is HX more expedition focused?",
      answer: "Yes. HX prioritizes exploration and expedition immersion very heavily."
    },
    {
      question: "Why use a luxury travel advisor for expedition cruises?",
      answer: "Expedition cruises vary dramatically in atmosphere, luxury level and exploration style where expert guidance is extremely valuable."
    }
  ];

  const mediMistakes = [
    {
      title: 'Choosing Based Only on Price',
      desc: 'Price alone is a poor guide for expedition cruising. The atmosphere, expedition intensity, and included activities vary dramatically between HX and Viking.',
      bullets: [
        'HX: adventure and wildlife immersion first',
        'Viking: refined luxury with softer expedition approach'
      ]
    },
    {
      title: 'Underestimating Activity Levels',
      desc: 'HX expeditions often involve frequent Zodiac operations, active landings, and outdoor exploration. Travelers expecting a relaxed cruise atmosphere may be surprised by the physical demands of expedition travel.'
    },
    {
      title: 'Not Understanding Expedition Style Differences',
      desc: 'HX and Viking deliver very different onboard atmospheres. Booking without understanding those differences — casual and educational vs elegant and refined — leads to mismatched expectations.'
    },
    {
      title: 'Ignoring Destination Seasonality',
      desc: 'Both Antarctica and Arctic regions have narrow optimal seasons. Traveling outside peak season can mean reduced wildlife sightings, more challenging weather, and fewer landing opportunities.'
    }
  ]

  const vsSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.tripsandshipsluxurytravel.com/hx-expeditions-vs-silversea-expeditions",
        "url":
          "https://www.tripsandshipsluxurytravel.com/hx-expeditions-vs-silversea-expeditions",
        "name": "HX Expeditions vs Silversea Expeditions",
        "headline":
          "HX Expeditions vs Silversea Expeditions | Which Luxury Expedition Cruise Line Is Better?",
        "description":
          "Compare HX Expeditions vs Silversea Expeditions with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, expedition style, ships, Antarctica cruises and Arctic exploration.",
        "author": {
          "@id": "#angela-hughes"
        },
        "publisher": {
          "@id": "#trips-ships"
        }
      },

      {
        "@type": "TravelAgency",
        "@id": "#trips-ships",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandshipsluxurytravel.com",
        "description":
          "Luxury travel agency specializing in expedition cruises, Antarctica cruises, Arctic expeditions and luxury cruise vacations.",
        "founder": {
          "@id": "#angela-hughes"
        }
      },

      {
        "@type": "Organization",
        "@id": "#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandshipsluxurytravel.com"
      },

      {
        "@type": "Person",
        "@id": "#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@id": "#trips-ships"
        },
        "description":
          "Luxury travel expert, founder of Luxury Travel University, expedition cruise specialist and travel advisor with more than 40 years of industry experience."
      },

      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandshipsluxurytravel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "HX Expeditions",
            "item":
              "https://www.tripsandshipsluxurytravel.com/hx-expeditions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "HX Expeditions vs Silversea Expeditions",
            "item":
              "https://www.tripsandshipsluxurytravel.com/hx-expeditions-vs-silversea-expeditions"
          }
        ]
      },

      {
        "@type": "Article",
        "headline": "HX Expeditions vs Silversea Expeditions",
        "description":
          "Expert comparison of HX Expeditions and Silversea Expeditions covering luxury, Antarctica cruises, Arctic cruises, ships, suites and expedition experiences.",
        "author": {
          "@id": "#angela-hughes"
        },
        "publisher": {
          "@id": "#trips-ships"
        },
        "keywords": [
          "HX Expeditions vs Silversea Expeditions",
          "Silversea Expeditions comparison",
          "HX vs Silversea cruises",
          "Luxury Expedition Cruises",
          "Antarctica Expedition Cruises",
          "Arctic Expedition Cruises",
          "Expedition Cruise Comparison",
          "Luxury Cruise Advisor",
          "Best Expedition Cruises"
        ]
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is HX Expeditions better than Silversea Expeditions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on travel style. HX is generally more expedition focused, while Silversea emphasizes ultra luxury."
            }
          },
          {
            "@type": "Question",
            "name": "Which is more luxurious, Silversea or HX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Silversea is significantly more luxurious from a traditional luxury cruise perspective."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition line is better for Antarctica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX is often stronger for active exploration, while Silversea excels in luxury comfort."
            }
          },
          {
            "@type": "Question",
            "name": "Is Silversea more luxury focused than HX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Silversea strongly prioritizes luxury service and upscale accommodations."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition cruise line is better for wildlife?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both are strong, but HX often feels more wildlife and exploration focused."
            }
          },
          {
            "@type": "Question",
            "name": "Are HX cruises more adventurous than Silversea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. HX typically delivers a more expedition-intensive atmosphere with stronger emphasis on exploration and active expedition experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition line has better cabins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Silversea generally offers larger suites, butler service and a more luxurious accommodation experience."
            }
          },
          {
            "@type": "Question",
            "name": "What is included on HX vs Silversea cruises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Silversea includes more luxury amenities and premium services, while HX focuses heavily on expedition inclusions and exploration activities."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition line is better for older travelers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both can work well for older travelers, but activity levels and mobility requirements should be considered carefully."
            }
          },
          {
            "@type": "Question",
            "name": "Is Silversea ultra luxury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Silversea is widely recognized as one of the world's leading ultra-luxury cruise brands."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition line is better for first-time expedition cruisers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Silversea may appeal more to travelers seeking luxury and comfort, while HX is often preferred by adventure-minded travelers."
            }
          },
          {
            "@type": "Question",
            "name": "Which cruise line is better for the Arctic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX is often favored for deeper Arctic expedition experiences, while Silversea combines Arctic exploration with elevated luxury service."
            }
          },
          {
            "@type": "Question",
            "name": "What is the atmosphere onboard Silversea expeditions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Silversea expedition voyages feature an elegant, refined atmosphere with personalized service and luxury accommodations."
            }
          },
          {
            "@type": "Question",
            "name": "Is HX more expedition focused?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. HX prioritizes exploration, wildlife encounters, science programs and immersive expedition experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Why use a luxury travel advisor for expedition cruises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An experienced luxury travel advisor can help match travelers with the right expedition cruise line, ship and itinerary based on travel style and exploration goals."
            }
          },
          {
            "@type": "Question",
            "name": "What are the biggest differences between HX Expeditions and Silversea Expeditions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX focuses more on expedition immersion and exploration, while Silversea combines expedition cruising with ultra-luxury accommodations and butler service."
            }
          },
          {
            "@type": "Question",
            "name": "Does Silversea offer butler service on expedition cruises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Silversea expedition guests enjoy butler service in every suite."
            }
          },
          {
            "@type": "Question",
            "name": "Is HX better for wildlife photography?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many wildlife photographers prefer HX because of its strong expedition focus and immersive wildlife viewing opportunities."
            }
          },
          {
            "@type": "Question",
            "name": "Which expedition cruise line is best for Antarctica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HX is often preferred by travelers seeking active Antarctic exploration, while Silversea is favored by those wanting luxury accommodations alongside expedition experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Should I choose HX or Silversea for an expedition cruise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose HX if expedition immersion and adventure are your priorities. Choose Silversea if luxury, personalized service and premium accommodations are most important."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>HX Expeditions vs Silversea Expeditions | Which Luxury Expedition Cruise Line Is Better?</title>
        <meta name="description" content="Compare HX Expeditions vs Silversea Expeditions with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, expedition style, ships, Antarctica cruises and Arctic exploration." />
        <link rel="canonical" href="https://www.tripsandshipsluxurytravel.com/hx-expeditions-vs-silversea-expeditions" />
        <meta name="keywords" content="HX Expeditions vs Silversea Expeditions, Silversea Expeditions comparison, HX vs Silversea cruises, luxury expedition cruises, Antarctica expedition cruises, Arctic expedition cruises, expedition cruise comparison" />

        {/* Open Graph */}
        <meta property="og:title" content="HX Expeditions vs Silversea Expeditions | Expert Cruise Comparison" />
        <meta property="og:description" content="Discover the key differences between HX Expeditions and Silversea Expeditions, including luxury, expedition style, Antarctica cruises, Arctic voyages and onboard experiences." />
        <meta property="og:url" content="https://www.tripsandshipsluxurytravel.com/hx-expeditions-vs-silversea-expeditions" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.tripsandshipsluxurytravel.com/images/hx-vs-silversea-expeditions.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HX Expeditions vs Silversea Expeditions" />
        <meta name="twitter:description" content="Compare luxury, expedition style, Antarctica cruises, Arctic exploration, ships and suites." />
        <meta name="twitter:image" content="https://www.tripsandshipsluxurytravel.com/images/hx-vs-silversea-expeditions.jpg" />

        <script type="application/ld+json">{JSON.stringify(vsSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO SECTION: HX VS SILVERSEA ── */}
      <section className="medi-hero-section">
        {mediHeroImages.map((img, idx) => (
          <div
            key={idx}
            className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
            style={{ backgroundImage: `url(${img})`, backgroundColor: '#000' }}
          />
        ))}
        <div className="medi-hero-overlay-layer"></div>
        <div className="medi-hero-content-wrapper">
          <div className="medi-hero-eyebrow-tag">
            <Ship size={16} />
            <span>Ultra-Luxury Expedition Comparison</span>
          </div>
          <h1 className="medi-hero-main-title">
            HX Expeditions vs Silversea Expeditions
          </h1>
          {/* Sub-headline added for visual balance and SEO */}
          <p style={{
            color: '#ffffff',
            fontSize: 'clamp(16px, 2vw, 20px)',
            maxWidth: '800px',
            margin: '20px auto 0',
            opacity: 0.9,
            lineHeight: '1.5',
            fontWeight: '400'
          }}>
            Comparing two of the world’s leading expedition lines: From the "Science-First" heritage of HX to the "Butler-Led" refinement of Silversea.
          </p>
        </div>
      </section>

      {/* ── PREMIUM INTRO SECTION: HX VS SILVERSEA ── */}
      <section className="medi-intro-section medi-premium-intro-section">
        {/* Style Block for Hover Interactions */}
        <style>{`
          .medi-immersion-card-item:hover .medi-immersion-icon-box {
              background-color: #274472 !important;
              border-color: #274472 !important;
              transform: scale(1.1);
          }
          .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
              stroke: #ffffff !important;
          }
          .hx-vs-silversea-image-wrap {
              width: 100%;
              height: 350px;
              border-radius: 24px;
              overflow: hidden;
              margin-bottom: 40px;
              border: 1px solid #e2e8f0;
              box-shadow: 0 15px 30px rgba(0,0,0,0.05);
          }
          .medi-premium-editorial-block::-webkit-scrollbar {
              width: 6px;
          }
          .medi-premium-editorial-block::-webkit-scrollbar-track {
              background: transparent;
          }
          .medi-premium-editorial-block::-webkit-scrollbar-thumb {
              background: rgba(39, 68, 114, 0.2);
              border-radius: 3px;
          }
          .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover {
              background: rgba(39, 68, 114, 0.4);
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

            {/* Left: Editorial Comparison Intro */}
            <div className="medi-premium-editorial-block" style={{
              maxHeight: isMobileViewport ? 'none' : '650px',
              overflowY: isMobileViewport ? 'visible' : 'auto',
              paddingRight: isMobileViewport ? '0' : '20px',
            }}>
              <span className="medi-premium-mini-badge" style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: '700',
                color: '#274472',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                borderLeft: '2px solid #274472',
                paddingLeft: '10px'
              }}>
                Expedition Comparison Guide
              </span>

              <h2 className="medi-premium-heading" style={{
                color: '#274472',
                fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: '1.2',
                margin: '0 0 20px 0'
              }}>
                Which Expedition Cruise Line Fits Your Travel Style Best?
              </h2>

              <div className="medi-premium-separator" style={{
                width: '80px', height: '3px', background: `#3b82f6`, marginBottom: '36px'
              }}></div>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                HX Expeditions and Silversea Expeditions are both highly respected names in expedition cruising, but the experiences they deliver are designed for different types of travelers.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                HX focuses heavily on immersive exploration, active expedition travel and destination driven experiences, while Silversea blends expedition cruising with ultra luxury service, refined accommodations and elevated onboard comfort.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                For travelers considering Antarctica, the Arctic or remote expedition destinations, understanding the differences between HX and Silversea can dramatically shape overall satisfaction with the experience.
              </p>

              <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                  At Trips & Ships Luxury Travel, we help travelers compare expedition cruise lines based on:
                </p>
                <div className="medi-immersion-cards-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '20px'
                }}>
                  {[
                    { t: "Luxury expectations", i: <Crown size={20} /> },
                    { t: "Exploration style", i: <Compass size={20} /> },
                    { t: "Activity levels", i: <Dumbbell size={20} /> },
                    { t: "Wildlife interests", i: <Camera size={20} /> },
                    { t: "Ship atmosphere", i: <Ship size={20} /> },
                    { t: "Cabin experience", i: <Home size={20} /> },
                    { t: "Destination priorities", i: <MapPin size={20} /> }
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
            </div>

            {/* Right: Signature Expert Panel */}
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
                    <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                  </div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569' }}>
                  Trips & Ships Luxury Travel specializes in matching your specific Polar or Tropical goals with the brand that mirrors your lifestyle.
                </p>
                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                    With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the team provide trusted luxury expedition expertise travelers can rely on.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK COMPARISON TABLE: HX VS SILVERSEA ── */}
      <section style={{
        background: '#0f1c2e', // Deep Navy Background
        padding: '100px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Glow Decorative Element */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3b82f6', fontSize: '11px', fontWeight: 700,
              letterSpacing: '3px', padding: '8px 24px',
              borderRadius: '50px', marginBottom: '20px',
              textTransform: 'uppercase'
            }}>Side By Side Comparison</span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '0 0 20px' }}>
              Quick Comparison Table
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#3b82f6', borderRadius: '10px', margin: '0 auto' }} />
          </div>

          {/* Responsive Table Wrapper */}
          <div style={{
            overflowX: 'auto',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
          }}>
            <table style={{
              width: '100%', borderCollapse: 'separate', borderSpacing: '0',
              backgroundColor: 'rgba(15, 28, 46, 0.8)',
              minWidth: '800px' // Ensures readability on mobile scroll
            }}>
              <thead>
                <tr>
                  {[
                    { label: 'Feature', bg: 'rgba(255,255,255,0.05)' },
                    { label: 'HX Expeditions', bg: '#274472' },
                    { label: 'Silversea Expeditions', bg: '#1e293b' }
                  ].map(({ label, bg }, i) => (
                    <th key={i} style={{
                      padding: '24px', textAlign: 'left',
                      background: bg,
                      color: '#ffffff', fontSize: '13px',
                      fontWeight: 700, letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Expedition Focus', 'Very strong', 'Strong luxury expedition blend'],
                  ['Luxury Level', 'Expedition comfort', 'Ultra luxury'],
                  ['Atmosphere', 'Casual, active', 'Elegant, refined'],
                  ['Included Services', 'Strong expedition inclusions', 'Extensive luxury inclusions'],
                  ['Butler Service', 'No', 'Yes'],
                  ['Wildlife Focus', 'Very strong', 'Strong'],
                  ['Expedition Team Presence', 'Highly immersive', 'Strong but more balanced'],
                  ['Dress Code', 'Casual', 'Smart casual luxury'],
                  ['Best For', 'Adventure focused travelers', 'Luxury expedition travelers'],
                  ['Galápagos', 'Yes', 'No'],
                ].map(([feature, hx, silversea], rowIdx) => (
                  <tr key={rowIdx} style={{
                    transition: 'background 0.3s ease',
                    background: rowIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
                  }}>
                    {/* Feature Cell */}
                    <td style={{
                      padding: '20px 24px', color: '#94a3b8',
                      fontSize: '15px', fontWeight: 600,
                      borderBottom: '1px solid rgba(255,255,255,0.05)'
                    }}>{feature}</td>

                    {/* HX Cell */}
                    <td style={{
                      padding: '20px 24px', color: '#e2e8f0',
                      fontSize: '15px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      borderLeft: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      {hx === 'Yes'
                        ? <span style={{ color: '#10b981', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} />Yes</span>
                        : hx === 'No'
                          ? <span style={{ color: '#ef4444', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Minus size={16} />No</span>
                          : hx}
                    </td>

                    {/* Silversea Cell */}
                    <td style={{
                      padding: '20px 24px', color: '#e2e8f0',
                      fontSize: '15px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      borderLeft: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      {silversea === 'Yes'
                        ? <span style={{ color: '#10b981', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} />Yes</span>
                        : silversea === 'No'
                          ? <span style={{ color: '#ef4444', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Minus size={16} />No</span>
                          : silversea}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── EXPEDITION PHILOSOPHY DIFFERENCES ── */}
      <section style={{ background: '#f8fafc', padding: '100px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px'
            }}>
              Comparing Polar Identities
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Expedition Philosophy Differences
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '1fr 1fr',
            gap: '40px'
          }}>

            {/* HX Expeditions Column */}
            <div style={{
              background: '#ffffff',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* IMAGE PLACEHOLDER: Recommend a photo of a Science Center or Zodiac Landing */}
              <div style={{ width: '100%', height: '280px', backgroundColor: '#0f1c2e', position: 'relative' }}>
                <img src={HX_Philosophy} alt="HX Expedition Discovery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '25px', color: '#fff', fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>SCIENCE & DISCOVERY</div>
              </div>

              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>HX Expeditions</h3>
                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '25px' }}>
                  HX is deeply rooted in expedition travel. Their philosophy prioritizes the environment and the research conducted onboard.
                </p>

                <p style={{ fontSize: '13px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>The experience focuses heavily on:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Wildlife encounters', 'Exploration', 'Expedition landings', 'Science programs', 'Active discovery', 'Flexible itineraries'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ color: '#334155', fontSize: '16px', fontWeight: '500' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', borderLeft: '4px solid #3b82f6' }}>
                  <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '600', margin: 0, fontStyle: 'italic' }}>
                    "The onboard atmosphere feels educational, adventurous and destination centered."
                  </p>
                </div>
              </div>
            </div>

            {/* Silversea Column */}
            <div style={{
              background: '#ffffff',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 28, 46, 0.05)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* IMAGE PLACEHOLDER: Recommend a photo of Butler service or a Luxury Suite */}
              <div style={{ width: '100%', height: '280px', backgroundColor: '#1e293b', position: 'relative' }}>
                <img src={Silversea_Philosophy} alt="Silversea Luxury Refinement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '25px', color: '#fff', fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>ULTRA-LUXURY COMFORT</div>
              </div>

              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>Silversea Expeditions</h3>
                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '25px' }}>
                  Silversea combines expedition travel with an ultra luxury cruise experience, catering to those who desire white-glove service.
                </p>

                <p style={{ fontSize: '13px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>The experience emphasizes:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Personalized service', 'Butler service', 'Gourmet dining', 'Spacious suites', 'Luxury amenities', 'Elegant ship design'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ color: '#334155', fontSize: '16px', fontWeight: '500' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ background: '#0f1c2e', padding: '20px', borderRadius: '15px', borderLeft: '4px solid #3b82f6' }}>
                  <p style={{ fontSize: '15px', color: '#ffffff', fontWeight: '400', margin: 0 }}>
                    Silversea appeals strongly to travelers who want remote exploration without sacrificing luxury comfort.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 01: THE SPIRIT OF HX ── */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#0f1c2e',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              The Explorer’s Perspective
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              HX Expeditions: The Science of Discovery
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
              Step inside the world of HX, where the journey is defined by active exploration and scientific curiosity. From the state-of-the-art hybrid fleet to the expert-led Zodiac landings, witness how HX transforms the traditional cruise into a deep, meaningful immersion into the world’s most fragile ecosystems.
            </p>
          </div>

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
              src="https://www.youtube-nocookie.com/embed/UwU8ApkVKoc" // HX Specific Video
              title="The HX Expedition Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── LUXURY COMPARISON: ASYMMETRICAL EDITORIAL LAYOUT ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '10px' }}>
              Defining the Experience
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', letterSpacing: '-0.02em' }}>
              Luxury Comparison: HX vs. Silversea
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto 20px', borderRadius: '10px' }}></div>
          </div>

          {/* PART 1: HX - THE OPEN SCANDINAVIAN LOOK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row',
            alignItems: 'center',
            marginBottom: '120px',
            position: 'relative'
          }}>
            {/* Large Image Background for HX */}
            <div style={{
              flex: '1.2',
              height: '500px',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              zIndex: 1
            }}>
              <img src={Luxury_HX} alt="HX Scandi Luxury" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#0f1c2e' }} />
            </div>

            {/* Content Card HX - Overlapping */}
            <div style={{
              flex: '0.8',
              backgroundColor: '#f8fafc',
              padding: '50px',
              borderRadius: '30px',
              marginLeft: window.innerWidth < 992 ? '0' : '-100px',
              marginTop: window.innerWidth < 992 ? '-60px' : '0',
              zIndex: 2,
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ color: '#3b82f6' }}><Sparkles size={28} /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>HX Luxury Style</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px' }}>
                {[
                  "Scandinavian inspired design",
                  "Comfortable accommodations",
                  "Expedition practicality",
                  "Casual atmosphere",
                  "Strong destination immersion"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '15px', fontSize: '16px', color: '#475569' }}>
                    <CheckCircle size={18} style={{ color: '#3b82f6', marginTop: '3px', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '2px solid #3b82f6', paddingTop: '20px' }}>
                <p style={{ fontSize: '17px', color: '#0f1c2e', fontWeight: '700', fontStyle: 'italic', margin: 0 }}>
                  "Luxury exists, but the destination remains the primary focus."
                </p>
              </div>
            </div>
          </div>

          {/* PART 2: SILVERSEA - THE STRUCTURED PRESTIGE LOOK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row-reverse',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Large Image Background for Silversea */}
            <div style={{
              flex: '1.2',
              height: '500px',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(15,28,46,0.2)',
              zIndex: 1
            }}>
              <img src={Silversea_Luxury} alt="Silversea Formal Luxury" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#1e293b' }} />
            </div>

            {/* Content Card Silversea - Overlapping */}
            <div style={{
              flex: '0.8',
              backgroundColor: '#0f1c2e',
              color: '#ffffff',
              padding: '50px',
              borderRadius: '30px',
              marginRight: window.innerWidth < 992 ? '0' : '-100px',
              marginTop: window.innerWidth < 992 ? '-60px' : '0',
              zIndex: 2,
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ color: '#3b82f6' }}><Award size={28} /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Silversea Luxury Style</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px' }}>
                {[
                  "Butler service for every guest",
                  "Premium all-suite accommodations",
                  "Sophisticated fine dining",
                  "Elegant luxury lounges",
                  "Elevated onboard service",
                  "Higher crew to guest ratios"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '15px', fontSize: '16px', color: '#cbd5e1' }}>
                    <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div> {item}
                  </li>
                ))}
              </ul>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#ffffff', fontWeight: '400', margin: 0 }}>
                  From a pure luxury perspective, Silversea is generally more upscale.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── VIDEO SECTION 02: THE REFINEMENT OF SILVERSEA ── */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              The Luxury Perspective
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Silversea: Unrivaled Elegance at the Edge of the World
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
              Experience the pinnacle of polar luxury. Silversea Expeditions seamlessly blends the thrill of the Arctic and Antarctica with white-glove service and all-suite refinement. Discover what it means to return from a day on the ice to the warmth of a butler-led suite and gourmet world-class cuisine.
            </p>
          </div>

          <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.15)',
            border: '1px solid #e2e8f0',
            aspectRatio: '16/9',
            backgroundColor: '#000'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/24iVCAq-lq8" // Silversea Specific Video
              title="The Silversea Expedition Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── SHIPS & SUITES COMPARISON ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
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
              Vessel Architecture
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Ships & Suites Comparison
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '1fr 1fr',
            gap: '40px'
          }}>

            {/* HX Ships & Hardware */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '35px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              {/* IMAGE: Suggest a shot of MS Roald Amundsen navigating ice */}
              <div style={{ width: '100%', height: '300px', backgroundColor: '#0f1c2e', position: 'relative' }}>
                <img src={Suites_HX} alt="HX Expedition Ship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '25px', background: '#3b82f6', color: '#fff', padding: '5px 15px', borderRadius: '50px', fontSize: '11px', fontWeight: '800', letterSpacing: '1px' }}>ACTIVE EXPLORATION</div>
              </div>

              <div style={{ padding: '45px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', marginBottom: '25px' }}>HX Expeditions Fleet</h3>

                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>The Fleet Includes:</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '30px' }}>
                  {[
                    "MS Roald Amundsen", "MS Fridtjof Nansen",
                    "MS Fram", "MS Spitsbergen", "MS Santa Cruz II"
                  ].map((ship, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#334151', fontWeight: '600' }}>
                      <Ship size={14} style={{ color: '#3b82f6' }} /> {ship}
                    </div>
                  ))}
                </div>

                <div style={{ background: '#f1f5f9', padding: '25px', borderRadius: '20px', borderLeft: '4px solid #3b82f6' }}>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    HX ships are designed specifically for active exploration and expedition operations, prioritizing destination access and scientific research.
                  </p>
                </div>
              </div>
            </div>

            {/* Silversea Ships & Hardware */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '35px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)'
            }}>
              {/* IMAGE: Suggest a shot of a Silversea Veranda Suite or Silver Endeavour balcony */}
              <div style={{ width: '100%', height: '300px', backgroundColor: '#1e293b', position: 'relative' }}>
                <img src={Suites_Silversea} alt="Silversea Luxury Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '25px', background: '#0f1c2e', color: '#fff', padding: '5px 15px', borderRadius: '50px', fontSize: '11px', fontWeight: '800', letterSpacing: '1px' }}>ULTRA-LUXURY HARDWARE</div>
              </div>

              <div style={{ padding: '45px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2e', marginBottom: '25px' }}>Silversea Expedition Fleet</h3>

                <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Key Polar Vessels:</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
                  {["Silver Endeavour", "Silver Cloud", "Silver Wind"].map((ship, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#334151', fontWeight: '600' }}>
                      <Anchor size={14} style={{ color: '#0f1c2e' }} /> {ship}
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '25px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '800', color: '#0f1c2e', textTransform: 'uppercase', marginBottom: '15px' }}>Onboard Features:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {[
                      { t: "Larger suites", i: <Maximize size={16} /> },
                      { t: "Butler service", i: <UserCheck size={16} /> },
                      { t: "Luxurious spaces", i: <Home size={16} /> },
                      { t: "Elevated dining", i: <Utensils size={16} /> }
                    ].map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569' }}>
                        <div style={{ color: '#0f1c2e' }}>{feat.i}</div> {feat.t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WILDLIFE & EXPLORATION STYLE: PANORAMIC ALTERNATING SPLIT ── */}
      <section style={{ padding: '100px 0', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '10px' }}>
              Expedition Dynamics
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', letterSpacing: '-0.02em' }}>
              Wildlife & Exploration Style
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto', borderRadius: '10px' }}></div>
          </div>

          {/* HX SECTION: THE ACTIVE DISCOVERY LOOK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row',
            alignItems: 'stretch',
            backgroundColor: '#ffffff',
            borderRadius: '40px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
          }}>
            {/* Image Side */}
            <div style={{ flex: '1.4', position: 'relative', minHeight: '400px' }}>
              <img src={Wildlife_HX} alt="HX Active Expedition" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#0f1c2e' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, rgba(255,255,255,0.1) 100%)' }}></div>
            </div>

            {/* Content Side */}
            <div style={{ flex: '1', padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f1c2e', marginBottom: '10px' }}>HX Expeditions</h3>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>The Active Specialist</p>

              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { t: "Expedition immersion", i: <Microscope size={20} /> },
                  { t: "Wildlife encounters", i: <Compass size={20} /> },
                  { t: "Active Zodiac operations", i: <Waves size={20} /> },
                  { t: "Educational programming", i: <GraduationCap size={20} /> },
                  { t: "Expedition intensity", i: <Zap size={20} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ color: '#3b82f6', background: '#eff6ff', padding: '10px', borderRadius: '12px' }}>{item.i}</div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#475569' }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SILVERSEA SECTION: THE REFINED OBSERVATION LOOK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row-reverse',
            alignItems: 'stretch',
            backgroundColor: '#0f1c2e',
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(15, 28, 46, 0.2)'
          }}>
            {/* Image Side */}
            <div style={{ flex: '1.4', position: 'relative', minHeight: '400px' }}>
              <img src={Wildlife_Silversea} alt="Silversea Refined Discovery" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#1e293b' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 50%, rgba(15,28,46,0.5) 100%)' }}></div>
            </div>

            {/* Content Side */}
            <div style={{ flex: '1', padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>Silversea Expeditions</h3>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>The Luxury Authority</p>

              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { t: "Wildlife with luxury comfort", i: <Heart size={20} /> },
                  { t: "Softer expedition pacing", i: <Clock size={20} /> },
                  { t: "Premium accommodations", i: <Gem size={20} /> },
                  { t: "High end service", i: <UserCheck size={20} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ color: '#ffffff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>{item.i}</div>
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#cbd5e1' }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTARCTICA COMPARISON: THE DECISION MATRIX ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              display: 'block',
              marginBottom: '15px'
            }}>
              The Sixth Continent
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '800',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Is Better For Antarctica?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '20px auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
            gap: '20px',
            justifyContent: 'center'
          }}>

            {/* HX Antarctica Pillar */}
            <div style={{
              flex: '1',
              backgroundColor: '#f8fafc',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.4s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              {/* IMAGE: Suggest a photo of a guest standing on the actual Antarctic ice */}
              <div style={{ width: '100%', height: '350px', backgroundColor: '#0f1c2e' }}>
                <img src={Antarctica_HX} alt="HX Antarctica Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 28, 46, 0.2)' }}></div>
              </div>

              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', marginBottom: '10px' }}>HX Antarctica</h3>
                <p style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '30px' }}>The Immersion Leader</p>

                <div style={{ textAlign: 'left', display: 'inline-block' }}>
                  {[
                    { t: "Strong expedition heritage", i: <Anchor size={18} /> },
                    { t: "Expedition team immersion", i: <Users size={18} /> },
                    { t: "Active exploration focus", i: <Compass size={18} /> },
                    { t: "Deep wildlife observation", i: <Search size={18} /> },
                    { t: "Flexible ice-led itineraries", i: <Clock size={18} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px' }}>
                      <div style={{ color: '#3b82f6' }}>{item.i}</div>
                      <span style={{ fontSize: '16px', color: '#475569', fontWeight: '500' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Silversea Antarctica Pillar */}
            <div style={{
              flex: '1',
              backgroundColor: '#0f1c2e',
              color: '#ffffff',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(15, 28, 46, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.4s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* IMAGE: Suggest a photo of the Silversea ship anchored near a glacier with a butler on deck */}
              <div style={{ width: '100%', height: '350px', backgroundColor: '#1e293b' }}>
                <img src={Antarctica_Silversea} alt="Silversea Antarctica Luxury" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>Silversea Antarctica</h3>
                <p style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '30px' }}>The Comfort Authority</p>

                <div style={{ textAlign: 'left', display: 'inline-block' }}>
                  {[
                    { t: "Ultra luxury comfort", i: <Crown size={18} /> },
                    { t: "Spacious all-suite fleet", i: <Maximize size={18} /> },
                    { t: "Personalized butler service", i: <UserCheck size={18} /> },
                    { t: "Elevated fine dining", i: <Utensils size={18} /> },
                    { t: "Luxury expedition ambiance", i: <Gem size={18} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px' }}>
                      <div style={{ color: '#3b82f6' }}>{item.i}</div>
                      <span style={{ fontSize: '16px', color: '#cbd5e1', fontWeight: '400' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Final Selection Result Box */}
          <div style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
            backgroundColor: '#f1f5f9',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ padding: '30px', borderRight: window.innerWidth < 768 ? 'none' : '1px solid #e2e8f0', borderBottom: window.innerWidth < 768 ? '1px solid #e2e8f0' : 'none', textAlign: 'center' }}>
              <p style={{ fontSize: '15px', color: '#475569', margin: 0 }}>
                Travelers prioritizing <strong style={{ color: '#0f1c2e' }}>expedition immersion</strong> and scientific discovery may prefer **HX**.
              </p>
            </div>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '15px', color: '#475569', margin: 0 }}>
                Travelers prioritizing <strong style={{ color: '#0f1c2e' }}>luxury comfort</strong> and service often lean toward **Silversea**.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── ARCTIC COMPARISON: REGIONAL EXPERTISE ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              display: 'block',
              marginBottom: '15px'
            }}>
              High Arctic Frontiers
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: "#274472",
              fontWeight: '800',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Which Is Better For Arctic Cruises?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto', borderRadius: '10px' }}></div>
          </div>

          {/* HX ARCTIC FOCUS BLOCK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row',
            alignItems: 'center',
            gap: '50px',
            marginBottom: '80px'
          }}>
            {/* Visual Narrative Side */}
            <div style={{ flex: '1', position: 'relative' }}>
              <div style={{
                height: '450px',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(15, 28, 46, 0.1)',
                border: '1px solid #e2e8f0'
              }}>
                <img src={Arctic_HX} alt="Arctic Svalbard Wildlife" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#0f1c2e' }} />
              </div>
            </div>

            {/* Content Side */}
            <div style={{ flex: '1.2' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f1c2e', marginBottom: '20px' }}>HX Arctic Strengths</h3>
              <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.7', marginBottom: '30px' }}>
                HX is the definitive specialist in the High Arctic, leveraging its Norwegian heritage to provide unmatched access to Svalbard and Greenland.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { t: "Svalbard Expertise", i: <MapPin size={16} /> },
                  { t: "Greenland Immersion", i: <Snowflake size={16} /> },
                  { t: "Wildlife-Led Routes", i: <Camera size={16} /> },
                  { t: "Deep Arctic Reach", i: <Ship size={16} /> },
                  { t: "Small Expedition Feel", i: <Users size={16} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#3b82f6' }}>{item.i}</div>
                    <span style={{ fontSize: '15px', color: '#334155', fontWeight: '600' }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SILVERSEA ARCTIC FOCUS BLOCK */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 992 ? 'column' : 'row-reverse',
            alignItems: 'center',
            gap: '50px'
          }}>
            {/* Visual Narrative Side */}
            <div style={{ flex: '1', position: 'relative' }}>
              <div style={{
                height: '450px',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(15, 28, 46, 0.15)',
                border: '1px solid #e2e8f0'
              }}>
                <img src={Arctic_Silversea} alt="Silversea Luxury Arctic" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#1e293b' }} />
              </div>
            </div>

            {/* Content Side */}
            <div style={{ flex: '1.2' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f1c2e', marginBottom: '20px' }}>Silversea Arctic Strengths</h3>
              <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.7', marginBottom: '30px' }}>
                Silversea elevates the Arctic experience, providing a sophisticated bridge between the rugged polar environment and ultra-luxury hospitality.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { t: "Luxury Exploration", i: <Crown size={16} /> },
                  { t: "Elegant Cruising", i: <Award size={16} /> },
                  { t: "High-End Service", i: <UserCheck size={16} /> },
                  { t: "Premium Suites", i: <Home size={16} /> },
                  { t: "Gourmet Dining", i: <Utensils size={16} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#0f1c2e' }}>{item.i}</div>
                    <span style={{ fontSize: '15px', color: '#334155', fontWeight: '600' }}>{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Separator Verdict */}
          <div style={{
            marginTop: '80px',
            padding: '40px',
            backgroundColor: '#0f1c2e',
            borderRadius: '30px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(59,130,246,0.1) 0%, transparent 100%)' }}></div>
            <p style={{ fontSize: '20px', color: '#ffffff', margin: 0, fontWeight: '500', position: 'relative', zIndex: 1 }}>
              <strong style={{ color: '#3b82f6' }}>The Verdict:</strong> HX generally offers a stronger <span style={{ textDecoration: 'underline', textDecorationColor: '#3b82f6' }}>pure expedition atmosphere</span> in the Arctic, while Silversea leads in refined polar comfort.
            </p>
          </div>

        </div>
      </section>

      {/* ── BEST FOR / NOT BEST FOR: THE TRAVELER FIT ── */}
      <section className="medi-audience-section" style={{ backgroundColor: '#ffffff', padding: '100px 20px' }}>
        <div className="medi-audience-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '700',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'block',
              marginBottom: '15px'
            }}>
              Personal Selection
            </span>
            <h2 className="medi-section-heading" style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800' }}>
              Which Line Best Fits Your Travel Style?
            </h2>
            <div className="medi-heading-separator-bar medi-bar-centered" style={{ backgroundColor: '#3b82f6' }}></div>
          </div>

          <div className="medi-audience-split-layout" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '1fr 1fr',
            gap: '40px',
            position: 'relative'
          }}>
            {/* Vertical Divider (Desktop Only) */}
            {window.innerWidth >= 992 && (
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50px',
                bottom: '50px',
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, #e2e8f0, transparent)',
                transform: 'translateX(-50%)'
              }}></div>
            )}

            {/* HX COLUMN: THE ADVENTURER */}
            <div className="medi-audience-column" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: '#eff6ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}>
                  <Compass size={28} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>HX Expeditions Is Best For</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '25px' }}>
                {[
                  { t: "Adventure travelers", i: <MapPin size={20} /> },
                  { t: "Wildlife enthusiasts", i: <Binoculars size={20} /> },
                  { t: "Expedition focused travelers", i: <Ship size={20} /> },
                  { t: "Nature photographers", i: <Camera size={20} /> },
                  { t: "Travelers wanting active exploration", i: <Zap size={20} /> }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3b82f6',
                      flexShrink: 0
                    }}>
                      {item.i || <Check size={18} />}
                    </div>
                    <span style={{ fontSize: '17px', color: '#475569', fontWeight: '600' }}>{item.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SILVERSEA COLUMN: THE CONNOISSEUR */}
            <div className="medi-audience-column" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f1c2e'
                }}>
                  <Crown size={28} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Silversea Expeditions Is Best For</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '25px' }}>
                {[
                  { t: "Luxury focused travelers", i: <Gem size={20} /> },
                  { t: "Guests wanting butler service", i: <UserCheck size={20} /> },
                  { t: "Travelers prioritizing suite quality", i: <Maximize size={20} /> },
                  { t: "Sophisticated luxury cruisers", i: <Award size={20} /> }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#0f1c2e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0
                    }}>
                      {item.i || <Check size={18} />}
                    </div>
                    <span style={{ fontSize: '17px', color: '#475569', fontWeight: '600' }}>{item.t}</span>
                  </li>
                ))}
              </ul>

              {/* Contextual Visual Callout for Silversea */}
              <div style={{
                marginTop: '45px',
                padding: '25px',
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                borderLeft: '4px solid #0f1c2e'
              }}>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                  Silversea appeals most to travelers transitioning from ultra-luxury ocean cruising who want to see the ends of the earth without changing their standard of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON EXPEDITION BOOKING MISTAKES SECTION ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
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
              Common Expedition Booking Mistakes
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Main Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            padding: '50px 45px',
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
              Travelers often make avoidable mistakes including:
            </p>

            {/* List Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
              gap: '20px 40px',
              marginBottom: '40px'
            }}>
              {[
                "Choosing based only on luxury level",
                "Underestimating expedition activity",
                "Ignoring ship atmosphere differences",
                "Booking the wrong expedition style",
                "Focusing only on price"
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
              borderRadius: '20px',
              padding: '30px',
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
                The right expedition cruise line depends heavily on personal travel style and expectations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY SECTION ── */}
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
              Why Travelers Trust Angela Hughes & Trips & Ships Luxury Travel
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

            {/* Right Side: Credentials List */}
            <div className="medi-prestige-credentials-column">
              <div className="medi-prestige-list">
                {[
                  { text: "CEO of Trips & Ships Luxury Travel", icon: Ship, category: "LEADERSHIP" },
                  { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                  { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                  { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                  { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                  { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                  { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "ADVISORY" },
                  { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                  { text: "Most Influential Women in Travel (2026) by TravelPulse", icon: Crown, category: "PRESTIGE" }
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
            marginTop: '50px',
            padding: '35px',
            backgroundColor: '#f8fafc',
            borderRadius: '24px',
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
              "Angela and her team specialize in helping travelers choose the right expedition cruise experience based on luxury expectations, activity levels and destination goals."
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION: HX VS SILVERSEA ── */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">
              HX vs. Silversea: <br className="mobile-break" /> Frequently Asked Questions
            </h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>

          <div className="medi-faq-list-wrapper">
            {comparisonFaqs.map((faq, index) => (
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

      {/* ── STRONG CTA SECTION: FINAL CONVERSION ── */}
      <section className="medi-cta-main-section">
        <div className="medi-cta-bg-pattern-layer"></div>
        <div className="medi-cta-content-relative">
          <div className="medi-cta-inner-wrapper">
            <h2 className="medi-cta-heading-white">
              Ready To Choose The Right Expedition Cruise Experience?
            </h2>
            <div className="medi-cta-separator-white"></div>

            <p className="medi-cta-paragraph-white">
              Choosing between HX Expeditions and Silversea Expeditions depends on the type of experience you want most.
            </p>

            <p className="medi-cta-paragraph-white" style={{ fontWeight: '700', color: '#ffffff', margin: '0 auto 24px' }}>
              The right expedition line can dramatically shape your Antarctica or Arctic journey.
            </p>

            <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '850px', margin: '0 auto 24px' }}>
              Trips & Ships Luxury Travel provides personalized expert guidance to help travelers confidently choose the best expedition cruise line for their goals.
            </p>

            {/* DIRECT ACTION CONTACT BAR */}
            <div style={{
              margin: '40px auto',
              padding: '20px 30px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'inline-block'
            }}>
              <span style={{
                color: '#3b82f6',
                fontSize: '15px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Contact Trips & Ships Luxury Travel today to begin planning your expedition adventure.
              </span>
            </div>

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

export default HXExpeditionsVsSilverseaExpeditions