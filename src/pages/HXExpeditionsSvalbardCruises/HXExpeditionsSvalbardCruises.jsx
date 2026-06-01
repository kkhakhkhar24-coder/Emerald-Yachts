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
  Minus,
  Camera,
  Snowflake,
  Sun
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

import profileAH from '../../assets/Profile_AH.jpg'

function HXExpeditionsSvalbard() {
  const [mediCurrentHero, setMediCurrentHero] = useState(0)
  const mediHeroImages = []

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

  const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

  const hxItineraryImages = ["", "", ""]

  const svalbardFaqs = [
    {
      question: "Can you see polar bears in Svalbard?",
      answer: "Yes. Svalbard is one of the best places in the world to potentially see polar bears in the wild. While sightings can never be guaranteed, expedition teams constantly monitor wildlife activity and adapt routes to maximize opportunities whenever possible."
    },
    {
      question: "What is the best month for Svalbard cruises?",
      answer: "July and August are often ideal for wildlife activity and milder Arctic conditions. May and June offer dramatic ice scenery and crisp Arctic conditions, while September brings autumn colors and fewer ships."
    },
    {
      question: "Is Svalbard worth visiting?",
      answer: "Absolutely. Svalbard offers one of the world's most unique Arctic expedition experiences, combining polar bear opportunities, dramatic glaciers, and extraordinary wildlife in a genuinely remote setting."
    },
    {
      question: "What wildlife can you see in Svalbard?",
      answer: "Polar bears, walrus, whales, Arctic foxes, reindeer, seals, puffins and seabirds are among the most commonly seen wildlife highlights in Svalbard."
    },
    {
      question: "What is the midnight sun?",
      answer: "The midnight sun occurs when the Arctic experiences continuous daylight during summer months. In Svalbard, this creates extraordinary photography conditions and flexible wildlife viewing opportunities around the clock."
    },
    {
      question: "Are Svalbard cruises cold?",
      answer: "Yes, but summer temperatures are often milder than many travelers expect. Proper layered clothing and waterproof outerwear are essential for comfort during all Svalbard expeditions."
    },
    {
      question: "Are HX Arctic cruises luxury cruises?",
      answer: "HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising. The ships are modern and comfortable, but the emphasis is on wildlife, science, and immersive Arctic exploration."
    },
    {
      question: "Do Svalbard cruises include Zodiac landings?",
      answer: "Yes. Most HX expedition cruises to Svalbard include Zodiac excursions and landings as a core part of the exploration experience."
    },
    {
      question: "What should I pack for Svalbard cruises?",
      answer: "Layered thermal clothing, waterproof outerwear, waterproof boots, cold weather accessories and quality binoculars are essential for any Svalbard expedition."
    },
    {
      question: "Can you see whales in Svalbard?",
      answer: "Yes. Depending on the season, travelers may see humpback whales, belugas and other marine wildlife during Svalbard expeditions."
    },
    {
      question: "Do you need to be physically fit for Arctic cruises?",
      answer: "Moderate mobility is important for Zodiac boarding and outdoor exploration. Most Svalbard itineraries include walking on uneven terrain and boarding small expedition boats."
    },
    {
      question: "Are Arctic expedition cruises safe?",
      answer: "Yes. Professional expedition teams and strict safety standards make Arctic cruises very safe. HX employs experienced Arctic guides and follows rigorous protocols."
    },
    {
      question: "How far in advance should Svalbard cruises be booked?",
      answer: "Ideally 12 to 18 months ahead for best cabin availability and pricing, especially for peak summer sailings."
    },
    {
      question: "What makes Svalbard different from Alaska cruises?",
      answer: "Svalbard offers a much more remote and wildlife focused High Arctic expedition experience. The polar bear opportunities, dramatic ice scenery and genuine remoteness set Svalbard apart."
    },
    {
      question: "Why should I use a travel advisor for Arctic expeditions?",
      answer: "Expert guidance from Trips & Ships Luxury Travel helps travelers choose the right HX ship, season, itinerary and expedition style to match their goals, comfort level and wildlife priorities."
    }
  ]

  const hxSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "image": "https://www.tripsandships.com/hx-expeditions-svalbard-cruise.jpg",
        "description": "Expert HX Expedition Svalbard cruise specialists providing personalized planning for Arctic, polar bear and midnight sun voyages."
      },
      {
        "@type": "Person",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you see polar bears in Svalbard?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Svalbard is one of the best places in the world to potentially see polar bears in the wild, though sightings can never be guaranteed." }
          },
          {
            "@type": "Question",
            "name": "What is the best month for Svalbard cruises?",
            "acceptedAnswer": { "@type": "Answer", "text": "July and August are often ideal for wildlife activity, milder temperatures and midnight sun experiences in Svalbard." }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>HX Expeditions Svalbard Cruises | Polar Bears, Arctic Wildlife & Small Ship Exploration</title>
        <meta name="description" content="Explore HX Expeditions Svalbard cruises with expert guidance from Trips & Ships Luxury Travel. Discover polar bears, Arctic wildlife, midnight sun voyages and luxury small ship exploration." />
        <script type="application/ld+json">{JSON.stringify(hxSchemaData)}</script>
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
            <span>Polar Bears, Arctic Wildlife & Midnight Sun Expeditions</span>
          </div>
          <h1 className="medi-hero-main-title">
            HX Expeditions Svalbard Cruises
          </h1>
        </div>
      </section>

      {/* PREMIUM INTRO SECTION */}
      <section className="medi-intro-section medi-premium-intro-section">
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
                Arctic Expedition Heritage
              </span>

              <h2 className="medi-premium-heading" style={{
                color: '#274472',
                fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: '1.2',
                margin: '0 0 20px 0'
              }}>
                Explore One Of The World's Last Great Wilderness Regions
              </h2>

              <div className="medi-premium-separator" style={{
                width: '80px',
                height: '3px',
                background: '#3b82f6',
                marginBottom: '36px',
                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
              }}></div>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                Svalbard is one of the most extraordinary expedition cruise destinations on Earth. Located far above the Arctic Circle between mainland Norway and the North Pole, this remote Arctic archipelago delivers dramatic glaciers, towering ice formations, wildlife rich fjords and some of the planet's best opportunities to see polar bears in the wild.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                HX Expeditions Svalbard cruises are designed for travelers who want true Arctic exploration rather than traditional sightseeing cruises. These journeys focus on immersive small ship experiences, Zodiac landings, wildlife encounters and expert led expedition travel deep into the High Arctic.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                For many luxury travelers, Svalbard becomes a transformational expedition experience combining adventure, wildlife and remote exploration in a way few destinations can match.
              </p>

              <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                  Svalbard Offers A Rare Combination Of:
                </p>
                <div className="medi-immersion-cards-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '20px',
                  textAlign: 'left'
                }}>
                  {[
                    { t: "Polar Bear Viewing", i: <Compass size={20} /> },
                    { t: "Arctic Wildlife", i: <MapPin size={20} /> },
                    { t: "Midnight Sun Experiences", i: <Sun size={20} /> },
                    { t: "Remote Landscapes", i: <Globe size={20} /> },
                    { t: "Small Ship Access", i: <Ship size={20} /> },
                    { t: "Photography Opportunities", i: <Camera size={20} /> }
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
                At Trips & Ships Luxury Travel, we help travelers select the right Arctic expedition itinerary, ship and season based on wildlife goals, comfort expectations and desired expedition depth.
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
                    <span className="medi-expert-card-subtitle">ARCTIC EXPEDITION AUTHORITY</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                  </div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                  At Trips & Ships Luxury Travel, we help clients choose the right HX Svalbard itinerary, ship, season and cabin based on wildlife goals, comfort expectations and how deeply immersive they want the Arctic experience to feel.
                </p>
                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                    With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide trusted Arctic cruise expertise travelers can rely on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HX EXPEDITIONS FOR SVALBARD */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              The HX Arctic Philosophy
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Why Choose HX Expeditions For Svalbard Cruises?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
              HX Expeditions has decades of polar expedition experience and operates purpose built expedition ships designed for Arctic exploration.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>

            {/* Left Column: Core Focus */}
            <div style={{ flex: '1 1 280px' }}>
              <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={20} style={{ color: '#3b82f6' }} /> Core HX Arctic Focus
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                {[
                  { text: "Wildlife encounters", icon: <MapPin size={18} /> },
                  { text: "Polar education", icon: <GraduationCap size={18} /> },
                  { text: "Expedition landings", icon: <Anchor size={18} /> },
                  { text: "Science focused enrichment", icon: <FlaskConical size={18} /> },
                  { text: "Flexible daily exploration", icon: <Clock size={18} /> },
                  { text: "Small group experiences", icon: <Users size={18} /> },
                  { text: "Arctic immersion", icon: <Snowflake size={18} /> },
                  { text: "Zodiac cruising", icon: <Ship size={18} /> }
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Authentic Flexibility */}
            <div style={{ flex: '1 1 280px' }}>
              <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                  Authentic Arctic Flexibility
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                  Unlike conventional cruise lines, HX builds its Svalbard journeys around the environment. Daily schedules may change based on:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {["Sea ice conditions", "Weather patterns", "Polar bear sightings", "Local wildlife opportunities"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                      <CheckCircle size={18} style={{ color: '#3b82f6' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                  <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                    "This flexibility creates a far more dynamic and immersive Arctic experience."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Well Suited For */}
          <div style={{ padding: window.innerWidth <= 360 ? '24px 12px' : '40px', backgroundColor: '#f1f5f9', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>
              HX Svalbard is particularly well suited for travelers seeking:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {["Wildlife focused travel", "Polar bear opportunities", "Small ship exploration", "Arctic photography", "Remote destinations", "Adventure with comfort"].map((tag, i) => (
                <span key={i} style={{ padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: window.innerWidth <= 360 ? '13px' : '15px', fontWeight: '700', color: '#274472', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POLAR BEARS & ARCTIC WILDLIFE SECTION - NEW */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Wildlife Encounters
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Polar Bears & Arctic Wildlife In Svalbard
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
              Svalbard is widely considered one of the best places in the world to see polar bears in the wild.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '40px', marginBottom: '50px' }}>

            {/* Polar Bears Card */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Compass size={24} style={{ color: '#3b82f6' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Polar Bear Opportunities</h3>
              </div>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                While sightings can never be guaranteed, expedition teams constantly monitor wildlife activity and adapt routes to maximize opportunities whenever possible.
              </p>
              <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
                <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '600', margin: 0, fontStyle: 'italic' }}>
                  "The unpredictability is part of what makes Arctic expeditions so exciting."
                </p>
              </div>
            </div>

            {/* Additional Wildlife Card */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Globe size={24} style={{ color: '#3b82f6' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Additional Arctic Wildlife</h3>
              </div>
              <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Commonly Seen In Svalbard:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Walrus', 'Arctic foxes', 'Reindeer', 'Puffins', 'Seals', 'Whales', 'Seabird colonies'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '16px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wildlife Note */}
          <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 14px' : '40px 50px', color: '#ffffff', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
              Wildlife experiences vary depending on season, weather and ice conditions. At Trips & Ships Luxury Travel, we help travelers choose the <strong style={{ color: '#ffffff' }}>right season and ship</strong> to align with their specific wildlife priorities.
            </p>
          </div>
        </div>
      </section>

      {/* MIDNIGHT SUN EXPERIENCE SECTION - NEW */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Arctic Magic
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              The Midnight Sun Experience
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
              One of the most magical aspects of summer Svalbard cruises is the midnight sun — a phenomenon unlike anything experienced on conventional cruises.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            {[
              { title: "Extended Exploration", desc: "The sun never fully sets during Arctic summer, creating extended hours for Zodiac landings and wildlife watching around the clock.", icon: <Clock size={24} /> },
              { title: "Extraordinary Photography", desc: "The golden Arctic light during late evening hours creates some of the most beautiful expedition photography conditions in the world.", icon: <Camera size={24} /> },
              { title: "Continuous Daylight", desc: "Unique Arctic scenery illuminated around the clock gives travelers more time outdoors and more opportunities for extraordinary moments.", icon: <Sun size={24} /> },
              { title: "Flexible Wildlife Viewing", desc: "Animals are active at all hours, meaning wildlife encounters can happen at any time during the expedition day.", icon: <Compass size={24} /> }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '35px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 14px' : '45px 50px', textAlign: 'center' }}>
            <Sun size={32} style={{ color: '#3b82f6', marginBottom: '16px' }} />
            <p style={{ fontSize: '20px', color: '#ffffff', fontWeight: '700', lineHeight: '1.6', margin: 0 }}>
              The golden Arctic light during late evening hours creates some of the most beautiful expedition photography conditions in the world.
            </p>
          </div>
        </div>
      </section>

      {/* BEST TIME TO CRUISE SVALBARD SECTION - NEW */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Expedition Seasonality
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Best Time To Cruise Svalbard
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
              Different departures offer dramatically different Arctic experiences, making expert planning especially important.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: window.innerWidth <= 360 ? '16px' : '30px', marginBottom: '50px' }}>

            {/* May & June */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '28px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Snowflake size={22} style={{ color: '#274472' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>May & June</h3>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Best For:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Dramatic ice scenery', 'Snow covered landscapes', 'Polar bear opportunities', 'Crisp Arctic conditions'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* July & August */}
            <div style={{ backgroundColor: '#274472', borderRadius: window.innerWidth <= 360 ? '18px' : '28px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', boxShadow: '0 20px 40px rgba(39, 68, 114, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Sun size={22} style={{ color: '#ffffff' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>July & August</h3>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Best For:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Wildlife activity', 'Milder temperatures', 'Accessible fjords', 'Midnight sun experiences', 'Whale sightings'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* September */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '28px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Camera size={22} style={{ color: '#274472' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>September</h3>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Best For:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Autumn Arctic colors', 'Photography', 'Fewer ships', 'Late season wildlife'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', padding: window.innerWidth <= 360 ? '24px 14px' : '35px 45px', textAlign: 'center' }}>
            <p style={{ fontSize: '17px', color: '#cbd5e1', margin: 0, lineHeight: '1.7' }}>
              Expert planning from Trips & Ships Luxury Travel ensures travelers choose the season that best aligns with their <strong style={{ color: '#ffffff' }}>wildlife goals, photography interests and comfort expectations.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* HX ARCTIC SHIPS SECTION */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Arctic Fleet
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              HX Expedition Ships In The Arctic
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
              HX operates purpose built expedition ships specifically designed for Arctic exploration and remote destination access.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            {[
              {
                name: "MS Fram",
                icon: <Anchor size={26} />,
                desc: "A classic expedition ship designed specifically for polar exploration with a strong focus on comfort and expedition depth, honoring the heritage of original Norwegian explorers.",
                best: ["Authentic expedition experiences", "Experienced travelers", "Arctic focused itineraries"]
              },
              {
                name: "MS Spitsbergen",
                icon: <Compass size={26} />,
                desc: "Named after the largest island in Svalbard, this smaller expedition vessel delivers intimate Arctic exploration with exceptional maneuverability in narrow fjords.",
                best: ["Small ship travelers", "Scenic fjord exploration", "Immersive wildlife viewing"]
              },
              {
                name: "MS Roald Amundsen",
                icon: <FlaskConical size={26} />,
                desc: "A hybrid powered modern expedition vessel combining sustainability with Scandinavian comfort, featuring advanced technology and a strong science focus.",
                best: ["Modern luxury expedition travelers", "Eco conscious travelers", "First time expedition guests"]
              }
            ].map((ship, i) => (
              <div key={i} style={{ flex: window.innerWidth <= 360 ? '1 1 100%' : '1 1 320px', maxWidth: window.innerWidth <= 360 ? '100%' : '370px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ color: '#3b82f6' }}>{ship.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>{ship.name}</h3>
                </div>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '25px', flex: 1 }}>{ship.desc}</p>
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

      {/* WHAT EXPEDITION TRAVEL ACTUALLY FEELS LIKE */}
      <section className="medi-audience-section">
        <div className="medi-audience-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="medi-section-heading">What Arctic Expedition Travel Actually Feels Like</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '800px', margin: '20px auto 0', lineHeight: '1.6' }}>
              Svalbard expedition cruising feels very different from mainstream cruising. The focus shifts completely from the ship's interior to the wild Arctic world outside.
            </p>
          </div>

          <div className="medi-audience-split-layout">
            <div className="medi-audience-column medi-best-for-column">
              <h3 className="medi-audience-column-heading">Travelers Should Expect:</h3>
              <ul className="medi-audience-list">
                {[
                  { t: "Flexible schedules", i: <Clock size={20} /> },
                  { t: "Wildlife focused exploration", i: <Compass size={20} /> },
                  { t: "Zodiac cruising", i: <Ship size={20} /> },
                  { t: "Expedition briefings", i: <GraduationCap size={20} /> },
                  { t: "Outdoor Arctic experiences", i: <MapPin size={20} /> },
                  { t: "Casual onboard atmosphere", i: <Users size={20} /> },
                  { t: "Educational programming", i: <Globe size={20} /> }
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="medi-audience-icon-wrapper best">{item.i}</div>
                    <span>{item.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="medi-audience-column medi-not-ideal-column">
              <h3 className="medi-audience-column-heading">Travelers Should Not Expect:</h3>
              <ul className="medi-audience-list">
                {[
                  { t: "Casinos", i: <CircleDollarSign size={20} /> },
                  { t: "Broadway entertainment", i: <Music size={20} /> },
                  { t: "Formal cruise nights", i: <Crown size={20} /> },
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

              <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '20px', borderLeft: '5px solid #94a3b8', textAlign: 'left' }}>
                <p style={{ fontSize: '17px', color: '#0f1c2e', fontWeight: '700', margin: 0, fontStyle: 'italic' }}>
                  "The Arctic itself is the experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON SVALBARD CRUISE MISTAKES */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>
              Strategic Planning
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Common Svalbard Cruise Mistakes
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '28px 14px' : '50px 45px', boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)', border: '1px solid #e2e8f0' }}>

            <p style={{ fontSize: '19px', color: '#0f1c2e', fontWeight: '600', marginBottom: '40px', textAlign: 'center' }}>
              Many travelers make avoidable mistakes when planning Arctic expeditions including:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '20px 40px', marginBottom: '40px' }}>
              {[
                "Choosing the wrong season",
                "Underestimating Arctic weather",
                "Booking based only on price",
                "Not understanding expedition style travel",
                "Packing incorrectly",
                "Waiting too long to reserve cabins"
              ].map((mistake, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ marginTop: '2px' }}>
                    <CheckCircle size={20} style={{ color: '#3b82f6' }} />
                  </div>
                  <span style={{ fontSize: '17px', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>{mistake}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '14px' : '20px', padding: window.innerWidth <= 360 ? '20px 14px' : '30px', textAlign: 'center', boxShadow: '0 15px 30px rgba(15, 28, 46, 0.15)', borderLeft: '6px solid #3b82f6' }}>
              <p style={{ fontSize: '18px', color: '#ffffff', margin: 0, fontWeight: '700', letterSpacing: '0.01em' }}>
                Svalbard expedition planning benefits enormously from expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST FOR / NOT BEST FOR SECTION - NEW */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Traveler Fit
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Is A Svalbard Expedition Right For You?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '30px' }}>

            {/* Best For */}
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: window.innerWidth <= 360 ? '18px' : '28px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #bbf7d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle size={22} style={{ color: '#16a34a' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#14532d', margin: 0 }}>Best For</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Wildlife lovers', 'Adventure travelers', 'Photography enthusiasts', 'Experienced luxury travelers', 'Expedition focused travelers'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', color: '#166534', fontWeight: '600' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16a34a', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Best For */}
            <div style={{ backgroundColor: '#fff7ed', borderRadius: window.innerWidth <= 360 ? '18px' : '28px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #fed7aa' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Minus size={22} style={{ color: '#ea580c' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#7c2d12', margin: 0 }}>Not Best For</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Travelers wanting traditional cruise entertainment', 'Guests seeking beach style vacations', 'Travelers uncomfortable with flexible itineraries'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '16px', color: '#9a3412', fontWeight: '600' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ea580c', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '28px', padding: '18px', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '14px', borderLeft: '4px solid #fb923c' }}>
                <p style={{ fontSize: '14px', color: '#7c2d12', fontWeight: '600', margin: 0, lineHeight: '1.6' }}>
                  Not sure if Svalbard is right for you? Contact our team for personalized expedition guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY SECTION */}
      <section className="medi-authority-section">
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
          <div className="medi-authority-header-block">
            <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
            <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
              Why Travelers Trust Angela Hughes & Trips & Ships Luxury Travel
            </h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
              Angela Hughes is one of the luxury travel industry's most respected advisors and educators, helping travelers navigate the complexities of remote Arctic exploration.
            </p>
          </div>

          <div className="medi-prestige-plaque-wrapper">
            <div className="medi-prestige-identity-card">
              <div className="medi-prestige-seal-ring">
                <img src={profileAH} alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
              </div>
              <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
              <h3 className="medi-prestige-name">Angela Hughes</h3>
              <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
              <div className="medi-prestige-meta-box">
                <div className="medi-prestige-meta-line"></div>
                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
              </div>
            </div>

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

          <div style={{ marginTop: window.innerWidth <= 360 ? '30px' : '50px', padding: window.innerWidth <= 360 ? '20px 14px' : '35px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
              "Angela and her team specialize in helping travelers choose the right expedition experiences based on comfort expectations, travel style and destination priorities."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">HX Expeditions Svalbard: <br /> Frequently Asked Questions</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>

          <div className="medi-faq-list-wrapper">
            {svalbardFaqs.map((faq, index) => (
              <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                <div className="medi-faq-question-row">
                  <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                  <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
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

      {/* CTA SECTION */}
      <section className="medi-cta-main-section">
        <div className="medi-cta-bg-pattern-layer"></div>
        <div className="medi-cta-content-relative">
          <div className="medi-cta-inner-wrapper">
            <h2 className="medi-cta-heading-white">
              Ready To Explore The Arctic With HX Expeditions?
            </h2>
            <div className="medi-cta-separator-white"></div>

            <p className="medi-cta-paragraph-white">
              Svalbard is one of the world's most unforgettable expedition cruise destinations. <strong>Choosing the right itinerary, season and ship can dramatically impact your Arctic experience.</strong>
            </p>

            <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
              Trips & Ships Luxury Travel helps travelers confidently plan extraordinary HX Expeditions Svalbard cruises with expert personalized guidance.
            </p>

            <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
              <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                Whether you are planning:
              </span>

              <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                {[
                  "Polar bear expeditions",
                  "Arctic wildlife cruises",
                  "Midnight sun voyages",
                  "High Arctic small ship exploration",
                  "Photography focused expeditions"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                    <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                    <span style={{ lineHeight: '1' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
              Contact Trips & Ships Luxury Travel today to begin planning your Arctic expedition.
            </p>

            <div className="medi-cta-button-group">
              <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <Phone size={18} />
                Schedule a Personalized Arctic Expedition Consultation Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HXExpeditionsSvalbard