import Navbar from '../../components/Navbar/Navbar'
import {
  Ship, Clock, Users, CheckCircle,
  Compass, Sparkles, Anchor, Calendar, Gem,
  Phone, Award, CircleDollarSign, Wine, CheckSquare, Key,
  DoorOpen, ConciergeBell, UsersRound, AlertCircle, Wand2, Check,
  GraduationCap,
  Globe,
  Mic,
  FileText,
  Crown
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Imported from existing assets
import hero1 from '../../assets/DisneyConciergeBenefitsExplained/aerial-view-disney-cruise-ship-top-deck-pools-open-ocean.jpg'
import hero2 from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-inside-passage-alaska-fjord-glacier-scenery.jpg'
import hero3 from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-alaska-inside-passage-glacier-view-ship-stern.jpg'
import profileAH from '../../assets/DisneyConciergeWorthIt/Profile_AH.jpg'

// Section image imports
import loungeImg from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-line-cafe-merida-latte-art-luxury-dining.jpg'
import tenderingImg from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-bluey-bingo-character-meet-and-greet.jpg'
import boardingImg from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-ship-docked-at-castaway-cay-bahamas-private-island.jpeg'

import familyImg from '../../assets/DisneyConciergeBenefitsExplained/family-dining-with-live-mariachi-entertainment-mexican-restaurant-disney-vacation.jpg'
import adultImg from '../../assets/DisneyConciergeBenefitsExplained/alaska-family-cruise-glacier-viewing-inside-passage-disney-cruise-line-shore-excursion.jpeg'

// Onboard Experience Gallery
import expJollywood from '../../assets/DisneyConciergeBenefitsExplained/disney-jollywood-nights-holiday-selfie-couple-walt-disney-world-christmas-event.jpg'
import expCastle from '../../assets/DisneyConciergeBenefitsExplained/sleeping-beauty-castle-disneyland-paris-theme-park-vacation-france.jpg'
import expCaskCannon from '../../assets/DisneyConciergeBenefitsExplained/disney-destiny-cask-cannon-pub-pirates-theme-bar.jpg'
import expRoseLounge from '../../assets/DisneyConciergeBenefitsExplained/isney-wish-the-rose-lounge-adults-only-luxury-seating.jpg'
import expMarvel from '../../assets/DisneyConciergeBenefitsExplained/marvel-superheroes-on-disney-cruise-ship-marvel-day-at-sea.jpg'
import expCastaway from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-ship-docked-at-castaway-cay-bahamas-tropical-lagoon.jpg'

import caribbeanImg from '../../assets/DisneyConciergeBenefitsExplained/disney-cruise-ship-sailing-into-caribbean-sunset-ocean-horizon.jpg'


function DisneyConciergeBenefitsExplained() {
  const [mediCurrentHero, setMediCurrentHero] = useState(0)
  const mediHeroImages = [hero1, hero2, hero3]

  useEffect(() => {
    const mediTimer = setInterval(() => {
      setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
    }, 5000)
    return () => clearInterval(mediTimer)
  }, [mediHeroImages.length])

  const [mediActiveFaq, setMediActiveFaq] = useState(null)
  const [isMobileViewport, setIsMobileViewport] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobileViewport(window.innerWidth < 992)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mediToggleFaq = (index) => {
    setMediActiveFaq(mediActiveFaq === index ? null : index)
  }

  const conciergeFaqs = [
    { question: "What is included with Disney Concierge?", answer: "Benefits include priority boarding, Concierge Lounge access, dedicated concierge service, early booking opportunities, exclusive sun decks, and luxury accommodations." },
    { question: "Does Disney Concierge include free drinks?", answer: "The Concierge Lounge offers complimentary refreshments, coffee, soft drinks, and snacks throughout the day." },
    { question: "Is Concierge worth it for families?", answer: "Many families appreciate the convenience, planning assistance, and stress reduction Concierge provides." },
    { question: "Can Concierge help with dining reservations?", answer: "Yes. Concierge staff assist with dining reservations and modifications whenever possible." },
    { question: "What is the Concierge Lounge?", answer: "An exclusive lounge available only to Concierge guests featuring refreshments, seating, and concierge assistance." },
    { question: "Do Concierge guests board first?", answer: "Typically, yes. Concierge guests receive priority embarkation." },
    { question: "Is Concierge available on every Disney ship?", answer: "Yes, although accommodations and specific benefits may vary slightly by ship." },
    { question: "Can Concierge help with shore excursions?", answer: "Yes. The Shoreside and onboard Concierge Teams assist with excursion planning and reservations." },
    { question: "Are Concierge rooms larger?", answer: "Many Concierge accommodations offer more space and upgraded amenities compared to standard staterooms." },
    { question: "What is the most valuable Concierge benefit?", answer: "Many guests consider priority booking access and personalized service the most valuable perks." },
    { question: "Do Concierge guests receive priority tendering?", answer: "Yes, on applicable itineraries." },
    { question: "Is Concierge worth it on short cruises?", answer: "Some guests prefer longer itineraries where they can fully enjoy all available benefits." },
    { question: "Does Concierge include access to exclusive decks?", answer: "Yes. Most Disney ships feature Concierge-only outdoor spaces." },
    { question: "Is Concierge considered a luxury experience?", answer: "Yes. Concierge provides many amenities commonly associated with luxury cruise travel." }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"] },
      { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in Disney Cruise Line Concierge Level planning, benefits breakdowns, and premium VIP cruise experiences." },
      { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
      { "@type": "WebPage", "name": "Disney Concierge Benefits Explained", "url": "https://www.tripsandships.com/disney-concierge-benefits-explained", "description": "Learn everything included with Disney Cruise Line Concierge Level, from priority boarding and concierge lounges to exclusive sun decks, dining assistance, and VIP perks." },
      {
        "@type": "BreadcrumbList", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
          { "@type": "ListItem", "position": 3, "name": "Disney Concierge Benefits Explained", "item": "https://www.tripsandships.com/disney-concierge-benefits-explained" }
        ]
      },
      { "@type": "FAQPage", "mainEntity": conciergeFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Disney Concierge Benefits Explained | Complete Disney Cruise Concierge Guide</title>
        <meta name="title" content="Disney Concierge Benefits Explained: Is Concierge Level Worth It?" />
        <meta name="description" content="Learn everything included with Disney Cruise Line Concierge Level, from priority boarding and concierge lounges to exclusive sun decks, dining assistance, and VIP perks." />
        <meta name="keywords" content="Disney Cruise Concierge Benefits, Disney Concierge Level Perks, Disney Cruise VIP Experience, Disney Concierge Lounge, Disney Cruise Concierge Guide, Disney Cruise VIP benefits, Disney Concierge worth the upgrade, What are Disney Concierge benefits, Disney Cruise Concierge perks explained, Disney Concierge Level guide" />
        <link rel="canonical" href="https://www.tripsandships.com/disney-concierge-benefits-explained" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ═════════════════ HERO SECTION ═══════════════ */}
      <section className="medi-hero-section">
        {mediHeroImages.map((img, idx) => (
          <div key={idx} className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        <div className="medi-hero-overlay-layer"></div>
        <div className="medi-hero-content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: window.innerWidth <= 768 ? '70vh' : '85vh', padding: window.innerWidth <= 360 ? '20px 16px' : '40px 20px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className="medi-hero-eyebrow-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px', backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '60px', color: '#ffffff', fontSize: window.innerWidth <= 360 ? '10px' : '12px', fontWeight: '700', letterSpacing: window.innerWidth <= 360 ? '1.5px' : '2px', textTransform: 'uppercase', marginBottom: window.innerWidth <= 768 ? '20px' : '30px', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
            <Wand2 size={window.innerWidth <= 360 ? 13 : 16} style={{ color: '#60a5fa' }} />
            <span style={{ display: window.innerWidth <= 480 ? '-webkit-box' : 'inline', WebkitLineClamp: window.innerWidth <= 480 ? 2 : 'unset', WebkitBoxOrient: 'vertical', overflow: window.innerWidth <= 480 ? 'hidden' : 'visible', lineHeight: '1.4' }}>Complete Concierge Guide</span>
          </div>
          <h1 className="medi-hero-main-title" style={{ color: '#ffffff', fontSize: window.innerWidth <= 360 ? 'clamp(28px, 8vw, 40px)' : 'clamp(38px, 7vw, 72px)', fontWeight: '800', lineHeight: window.innerWidth <= 768 ? '1.1' : '1.0', letterSpacing: window.innerWidth <= 768 ? '-0.01em' : '-0.03em', margin: '0', maxWidth: '900px', textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
            Disney Concierge <br /> Benefits Explained
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: window.innerWidth <= 360 ? '15px' : window.innerWidth <= 768 ? '16px' : 'clamp(17px, 2.5vw, 20px)', maxWidth: window.innerWidth <= 768 ? '90%' : '700px', width: '100%', margin: window.innerWidth <= 768 ? '16px auto 0' : '24px auto 0', lineHeight: '1.6', textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Learn everything included with Disney Cruise Line Concierge Level, from priority boarding and concierge lounges to exclusive sun decks, dining assistance, and VIP perks.
          </p>
        </div>
      </section>

      {/* ═══════════════ PREMIUM INTRO: CONCIERGE EXPLAINED ═══════════════ */}
      <section className="medi-intro-section medi-premium-intro-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>{`
    .medi-immersion-card-item:hover {
        transform: translateY(-5px);
        border-color: #3b82f6 !important;
        background-color: #ffffff !important;
        box-shadow: 0 10px 25px rgba(39, 68, 114, 0.08);
    }
    .medi-immersion-card-item:hover .medi-immersion-icon-box { 
        background-color: #274472 !important; 
        border-color: #274472 !important; 
        transform: scale(1.1); 
    }
    .medi-immersion-card-item:hover .medi-immersion-icon-box svg { 
        stroke: #ffffff !important; 
    }
    .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
    .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
    .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
    
    @media (max-width: 1024px) {
        .dc-intro-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
    }
  `}</style>

        <div className="medi-premium-intro-glow-one"></div>
        <div className="medi-premium-intro-glow-two"></div>

        <div className="medi-intro-container">
          <div className="medi-premium-intro-grid dc-intro-grid" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'start'
          }}>

            {/* LEFT COLUMN: EDITORIAL CONTENT */}
            <div className="medi-premium-editorial-block" style={{
              maxHeight: isMobileViewport ? 'none' : '700px',
              overflowY: isMobileViewport ? 'visible' : 'auto',
              paddingRight: isMobileViewport ? '0' : '24px',
              textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: '700',
                color: '#274472',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                paddingLeft: window.innerWidth <= 1024 ? '0' : '12px'
              }}>Everything You Need to Know Before Upgrading</span>

              <h2 style={{
                color: '#274472',
                fontSize: 'clamp(30px, 5vw, 48px)',
                lineHeight: '1.15',
                margin: '0 0 20px 0',
                fontWeight: '800',
                letterSpacing: '-0.02em'
              }}>What Is Disney Cruise Line<br />Concierge Level?</h2>

              <div style={{
                width: '80px',
                height: '4px',
                background: '#3b82f6',
                marginBottom: '36px',
                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px',
                borderRadius: '10px'
              }}></div>

              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                <p style={{ marginBottom: '24px' }}>
                  Disney Cruise Line is already known for exceptional service, immersive entertainment, and family-friendly experiences. But for travelers seeking an even more personalized and luxurious vacation, <strong>Concierge Level</strong> offers a premium experience that goes far beyond a standard cruise cabin.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  Many guests hear about Concierge accommodations but aren't entirely sure what benefits they actually receive. Is it simply a larger stateroom? Do you get special treatment? What makes Concierge different from every other guest onboard?
                </p>
                <p style={{ marginBottom: '40px' }}>
                  This guide explains every major Disney Concierge benefit so you can determine whether the upgrade makes sense for your next Disney cruise.
                </p>
              </div>

              <div style={{ width: '100%' }}>
                <p style={{
                  fontSize: '17px',
                  color: '#1e293b',
                  marginBottom: '24px',
                  fontWeight: '700',
                  textAlign: window.innerWidth <= 1024 ? 'center' : 'left'
                }}>Think of Concierge as combining:</p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth <= 550 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '16px',
                  width: '100%'
                }}>
                  {[
                    { t: "Luxury accommodations", i: <Gem size={20} /> },
                    { t: "Personalized service", i: <Award size={20} /> },
                    { t: "Priority access", i: <Key size={20} /> },
                    { t: "Exclusive amenities", i: <DoorOpen size={20} /> },
                    { t: "Stress-free planning", i: <Sparkles size={20} /> }
                  ].map((item, idx) => (
                    <div key={idx} className="medi-immersion-card-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="medi-immersion-icon-box" style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3b82f6',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}>{item.i}</div>
                      <span style={{ color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXPERT SIDEBAR (Image removed) */}
            <div className="medi-premium-signature-panel" style={{
              marginTop: '0',
              borderLeft: '4px solid #274472',
              position: isMobileViewport ? 'relative' : 'sticky',
              top: '100px'
            }}>
              <div className="medi-premium-signature-glow"></div>
              <div className="medi-premium-signature-content">
                <div className="medi-expert-profile-row" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
                  {/* Image removed from here */}
                  <div>
                    <span className="medi-expert-card-subtitle">CONCIERGE ANALYSIS</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472', margin: 0 }}>Angela Hughes</h3>
                  </div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                  At Trips & Ships Luxury Travel, we help guests analyze the high-tier benefits of Concierge to ensure the investment aligns with their specific vacation goals.
                </p>
                <div className="medi-premium-expert-quote-box" style={{ background: 'rgba(39, 68, 114, 0.03)', borderRadius: '15px', padding: '20px' }}>
                  <span className="medi-quote-mark" style={{ color: '#274472', fontSize: '32px', lineHeight: '1', display: 'block' }}>“</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>
                    With 40+ years of experience, Angela Hughes breaks down whether Disney Concierge Level is the right investment for your next cruise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONCIERGE BENEFITS: BEFORE YOUR CRUISE ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) 24px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* SECTION HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472',
              letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px',
              borderLeft: '3px solid #274472', paddingLeft: '12px'
            }}>The Pre-Cruise Advantage</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '800',
              marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.1'
            }}>Benefits Before Your Cruise</h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '850px', margin: '30px auto 0', lineHeight: '1.7' }}>
              One of the biggest advantages of the Concierge Level begins long before embarkation day, removing the stress of vacation logistics.
            </p>
          </div>

          {/* MAIN GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '30px'
          }}>

            {/* 1. Dedicated Shoreside Concierge Team */}
            <div style={{ backgroundColor: '#f8fafc', padding: '45px', borderRadius: '30px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                  <div style={{ backgroundColor: '#e8f0fe', padding: '14px', borderRadius: '14px', color: '#274472' }}>
                    <UsersRound size={28} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', margin: 0 }}>Shoreside Concierge Team</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                  After booking a Concierge stateroom, guests receive exclusive access to Disney's Shoreside Concierge Team. Rather than competing for reservations online, this team assists with securing high-demand experiences.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                  {["Dining reservations", "Port adventures", "Spa appointments", "Special celebrations", "Nursery bookings", "Character experiences", "Accessibility requests"].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <img src={loungeImg} alt="Disney Wish Lounge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* 2. Earlier Booking Opportunities */}
            <div style={{ backgroundColor: '#0f1c2e', padding: '45px', borderRadius: '30px', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                  <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', padding: '14px', borderRadius: '14px', color: '#60a5fa' }}>
                    <Calendar size={28} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Earlier Booking Windows</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                  Many Disney activities fill quickly. Concierge guests typically receive priority access to secure these moments before the general public, which is essential for high-demand itineraries.
                </p>
                <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
                  {[
                    { t: "Priority Port Adventures", d: "Securing top excursions in Alaska & Europe." },
                    { t: "Adult Dining Preference", d: "Preferred times at Palo, Remy, and Enchanté." },
                    { t: "Nursery & Spa", d: "Guaranteed spots for relaxation and childcare." }
                  ].map((item, i) => (
                    <div key={i} style={{ paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontWeight: '800', color: '#38bdf8', fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.t}</div>
                      <div style={{ color: '#94a3b8', fontSize: '14px' }}>{item.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                <img src={tenderingImg} alt="Disney Excursion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* ═══════════════ PRIORITY EMBARKATION: PERFECT ALIGNMENT ═══════════════ */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: 'clamp(40px, 6vw, 70px)',
            borderRadius: '30px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            fontFamily: 'sans-serif'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }}>

              {/* LEFT: IMAGE + HEADING */}
              <div>
                <div style={{ borderRadius: '20px', overflow: 'hidden', height: '260px', marginBottom: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
                  <img src={boardingImg} alt="Priority Embarkation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: window.innerWidth <= 1024 ? 'center' : 'left' }}>
                  <div style={{
                    display: 'inline-flex',
                    backgroundColor: '#e8f0fe',
                    padding: '12px',
                    borderRadius: '14px',
                    color: '#274472',
                    marginBottom: '16px'
                  }}>
                    <Anchor size={28} />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(26px, 4vw, 34px)',
                    fontWeight: '800',
                    color: '#274472',
                    margin: '0 0 12px 0',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                    Priority Embarkation
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    margin: 0,
                    maxWidth: window.innerWidth <= 1024 ? '500px' : '100%',
                    marginLeft: window.innerWidth <= 1024 ? 'auto' : '0',
                    marginRight: window.innerWidth <= 1024 ? 'auto' : '0'
                  }}>
                    Experience a seamless transition from land to sea. Concierge guests enjoy expedited processing and dedicated facilities at the terminal.
                  </p>
                </div>
              </div>

              {/* RIGHT: BENEFITS GRID */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : '1fr 1fr',
                gap: '20px'
              }}>
                {/* Card 1 */}
                <div style={{
                  padding: '30px 25px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ color: '#3b82f6', marginBottom: '16px', backgroundColor: '#e8f0fe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckSquare size={22} />
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '8px'
                  }}>
                    Dedicated Check-In
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Bypass general boarding lines with a private check-in desk at the terminal.
                  </p>
                </div>

                {/* Card 2 */}
                <div style={{
                  padding: '30px 25px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ color: '#3b82f6', marginBottom: '16px', backgroundColor: '#e8f0fe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ship size={22} />
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '8px'
                  }}>
                    Priority Boarding
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Be among the first to step onboard, enjoying a relaxed, crowd-free ship.
                  </p>
                </div>

                {/* Card 3 */}
                <div style={{
                  padding: '30px 25px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ color: '#3b82f6', marginBottom: '16px', backgroundColor: '#e8f0fe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Key size={22} />
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '8px'
                  }}>
                    Early Access
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Access your stateroom earlier and begin settling in without the wait.
                  </p>
                </div>

                {/* Card 4 */}
                <div style={{
                  padding: '30px 25px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ color: '#3b82f6', marginBottom: '16px', backgroundColor: '#e8f0fe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ConciergeBell size={22} />
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '8px'
                  }}>
                    Welcome Reception
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Enjoy a private welcome experience with refreshments as you settle in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VERDICT SUMMARY */}
          <div style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '25px',
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}>
            <p style={{ fontSize: '17px', color: '#1e293b', fontWeight: '700', margin: 0, fontStyle: 'italic' }}>
              "For many travelers, the ability to bypass the stress of terminal crowds and the competition for shore excursions is where Concierge level provides its greatest value."
            </p>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 1: CONCIERGE PLANNING & BOOKING ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              Pre-Cruise Planning
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              How Concierge Transforms Your Booking Experience
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
              See how Disney Concierge Level guests enjoy priority access to dining reservations, port adventures, and exclusive booking windows that standard guests simply cannot access.
            </p>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y5tR4SB12FM"
              title="Disney Concierge Planning & Booking Benefits"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═════════════════ ONBOARD EXPERIENCE GRID ═════════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#0f172a', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <style>{`
                    .exp-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 280px; gap: 20px; max-width: 1200px; margin: 0 auto; }
                    .exp-item { position: relative; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background-color: #1e293b; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: all 0.5s ease; cursor: pointer; }
                    .exp-item:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(59, 130, 248, 0.15); border-color: rgba(56, 189, 248, 0.5); }
                    .exp-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s ease; filter: brightness(0.85); }
                    .exp-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.5) 50%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; color: #fff; z-index: 2; opacity: 0; transition: opacity 0.4s ease; }
                    .exp-item:hover .exp-overlay { opacity: 1; }
                    .exp-title { font-size: 18px; font-weight: 800; color: #ffffff; margin: 0 0 6px 0; letter-spacing: '-0.01em'; }
                    .exp-desc { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #38bdf8; display: block; margin: 0; }
                    @media (max-width: 900px) { .exp-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; gap: 16px; } }
                    @media (max-width: 600px) { .exp-grid { grid-template-columns: 1fr; grid-auto-rows: auto; gap: 20px; } .exp-item { aspect-ratio: 4/5; } }
                `}</style>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>Onboard Experience</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em' }}>The Concierge Experience In Action</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div className="exp-grid">
            {[
              { img: expRoseLounge, alt: "The Rose Lounge", title: "Concierge Lounge", desc: "Complimentary refreshments, specialty coffee, and concierge assistance." },
              { img: expMarvel, alt: "Marvel Day at Sea", title: "Marvel Day at Sea", desc: "Exclusive superhero encounters and immersive themed experiences onboard." },
              { img: expCaskCannon, alt: "Cask & Cannon Pub", title: "Themed Dining & Bars", desc: "Pirate-themed pubs and world-class adults-only dining venues." },
              { img: expJollywood, alt: "Holiday Celebrations", title: "Exclusive Celebrations", desc: "VIP access to seasonal events, holiday parties, and festive entertainment." },
              { img: expCastle, alt: "Sleeping Beauty Castle", title: "Destination Experiences", desc: "Curated shore excursions to iconic global landmarks and attractions." },
              { img: expCastaway, alt: "Castaway Cay", title: "Private Island Access", desc: "Priority tendering and exclusive beach experiences at Disney's private island." }
            ].map((item, idx) => (
              <div key={idx} className="exp-item" style={{ gridColumn: window.innerWidth <= 600 ? 'span 1' : 'span 1' }}>
                <img src={item.img} alt={item.alt} className="exp-img" loading="lazy" />
                <div className="exp-overlay">
                  <h4 className="exp-title">{item.title}</h4>
                  <span className="exp-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 2: THE ONBOARD CONCIERGE EXPERIENCE ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              Onboard Luxury
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Life Aboard as a Concierge Guest
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
              From the exclusive Concierge Lounge and private sun decks to dedicated host service and priority disembarkation, discover what daily life looks like when you're sailing in Disney's highest tier.
            </p>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ds3lFKNSO5A"
              title="Disney Concierge Onboard Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAMILY & ADULT APPEAL: GUEST SATISFACTION ═══════════════ */}
      <section className="medi-audience-section" style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#38bdf8',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px'
            }}>Guest Satisfaction Audit</span>

            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              color: "#274472",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '15px'
            }}>Who Loves Concierge Most?</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.7' }}>
              Whether you are seeking seamless family logistics or a refined adult escape, the Concierge experience is specifically engineered to simplify luxury.
            </p>
          </div>

          {/* DUAL APPEAL IMAGES */}
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '50px' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: '#e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
              <img src={adultImg} alt="Family Experience on Disney Cruise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Family Entertainment</div>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', backgroundColor: '#e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
              <img src={familyImg} alt="Adults-Only Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Adult-Only Refinement</div>
            </div>
          </div>

          {/* Dual Appeal Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {/* ── CARD 1: FAMILIES ── */}
            <div style={{
              backgroundColor: '#1e293b',
              padding: 'clamp(35px, 6vw, 60px)',
              borderRadius: '30px',
              color: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '12px', borderRadius: '14px', display: 'flex', color: '#38bdf8' }}>
                  <UsersRound size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Families Love Concierge</h3>
              </div>

              <div style={{ display: 'grid', gap: '35px', flexGrow: 1 }}>
                {[
                  { t: "Less Stress", d: "The Shoreside and Onboard teams coordinate activities and reservations so you don't have to." },
                  { t: "More Convenience", d: "Priority access throughout the journey reduces waiting times and maximizes your vacation." },
                  { t: "Family Support", d: "Concierge Hosts assist with everything from nursery bookings to special celebration requests." },
                  { t: "Smoother Vacations", d: "Parents can spend less time managing logistics and more time enjoying the magic with their children." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}><Check size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px', margin: 0 }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CARD 2: ADULTS ── */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: 'clamp(35px, 6vw, 60px)',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              color: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', color: '#274472' }}>
                  <Wine size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Adults Love Concierge</h3>
              </div>

              <div style={{ display: 'grid', gap: '35px', flexGrow: 1 }}>
                {[
                  { t: "Exclusive Spaces", d: "The private lounges and sun decks offer peaceful, sophisticated escapes from family activity zones." },
                  { t: "Personalized Service", d: "Experience luxury-level assistance and personalized hospitality throughout the entire voyage." },
                  { t: "Dining Access", d: "Enjoy improved opportunities to secure reservations at high-demand venues like Palo and Remy." },
                  { t: "Total Relaxation", d: "A more refined and less crowded experience designed for travelers seeking quietude." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#274472', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '6px', margin: 0 }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '15px', borderLeft: '4px solid #38bdf8' }}>
                <p style={{ fontSize: '15px', color: '#475569', fontStyle: 'italic', margin: 0 }}>
                  <strong style={{ color: '#274472' }}>Advisor Note:</strong> "Many adults choose Concierge to enjoy the Disney standard of service in a more mature, quiet atmosphere."
                </p>
              </div>
            </div>
          </div>

          {/* ── NEW: SURVEY RESULTS (BENEFITS GUESTS VALUE MOST) ── */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '40px',
            padding: 'clamp(30px, 5vw, 60px)',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#274472', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                Benefits That Guests Value Most
              </h3>
              <p style={{ color: '#64748b', fontSize: '16px' }}>The top perks that consistently turn first-time guests into repeat Concierge travelers.</p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}>
              {[
                "Priority booking access",
                "Concierge Lounge",
                "Personalized service",
                "Priority boarding",
                "Exclusive sun decks",
                "Stress-free planning",
                "Larger accommodations"
              ].map((perk, i) => (
                <div key={i} style={{
                  padding: '12px 24px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '60px',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                  fontSize: '15px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Sparkles size={16} style={{ color: '#38bdf8' }} />
                  {perk}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ POTENTIAL DRAWBACKS: THE HONEST ASSESSMENT ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#0f172a', // Matches your rich navy background
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#38bdf8',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px'
            }}>Honest Assessment</span>

            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              color: "#ffffff",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>Potential Drawbacks</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>

            <p style={{
              fontSize: '19px',
              color: '#cbd5e1',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.7'
            }}>
              While Concierge offers impressive benefits, it isn't perfect for every traveler. We believe in transparency when helping you decide.
            </p>
          </div>

          {/* Staggered Drawback Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px'
          }}>

            {[
              {
                t: "Higher Cost",
                d: "The upgrade to Concierge Level represents a significant financial investment and can be quite expensive compared to standard staterooms.",
                i: <CircleDollarSign size={24} />
              },
              {
                t: "Limited Use on Short Cruises",
                d: "On 3- or 4-night sailings, guests may find they don't have enough time onboard to fully utilize the lounge, sun deck, and planning services.",
                i: <Clock size={24} />
              },
              {
                t: "Not Necessary for Everyone",
                d: "Experienced Disney cruisers who are already efficient at navigating reservations and planning may not find the added support essential.",
                i: <Users size={24} />
              }
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '40px 30px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                // Simple hover effect
                transform: 'translateY(0)'
              }}>
                <div style={{
                  color: '#38bdf8',
                  marginBottom: '20px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.i}
                </div>

                <h4 style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '15px',
                  letterSpacing: '-0.01em'
                }}>
                  {item.t}
                </h4>

                <p style={{
                  fontSize: '15px',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          {/* Strategic Summary Box */}
          <div style={{
            marginTop: '50px',
            padding: '35px',
            backgroundColor: 'rgba(56, 189, 248, 0.05)',
            borderRadius: '24px',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '15px' }}>
              <AlertCircle size={20} style={{ color: '#38bdf8' }} />
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Expert ROI Tip
              </span>
            </div>
            <p style={{ fontSize: '17px', color: '#cbd5e1', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
              "We often recommend allocating the Concierge premium toward 7-night sailings or bucket-list itineraries like Alaska to ensure you get the maximum value from the priority booking and shoreside support."
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════ WHO SHOULD CONSIDER CONCIERGE? ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#38bdf8',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px'
            }}>Selection Guide</span>

            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              color: "#274472",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>Who Should Consider Concierge?</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
            <p style={{
              fontSize: '18px',
              color: '#475569',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.6'
            }}>
              While every guest enjoys world-class service on Disney Cruise Line, Concierge Level is strategically designed for specific traveler priorities.
            </p>
          </div>

          {/* Featured Ship Banner */}
          <div style={{ borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '350px', marginBottom: '50px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
            <img src={caribbeanImg} alt="Disney Cruise Ship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.8) 0%, transparent 70%)' }}></div>
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: '#ffffff' }}>
              <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px' }}>The Ultimate Vacation</span>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', margin: '5px 0 0 0' }}>Elevating the Disney Standard to Luxury</h3>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr',
            gap: '30px',
            alignItems: 'stretch'
          }}>

            {/* ── COLUMN 1: MILESTONES & NEW CRUISERS ── */}
            <div style={{
              backgroundColor: '#1e293b',
              padding: 'clamp(35px, 6vw, 60px)',
              borderRadius: '30px',
              color: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
                  <Users size={22} style={{ color: '#38bdf8' }} />
                </div>
                Celebrations & First-Timers
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '25px' }}>
                {[
                  { t: "First-Time Disney Cruisers", d: "Ensure your introduction to DCL is flawless and stress-free." },
                  { t: "Families Celebrating Milestones", d: "Perfect for birthdays, graduations, and large family reunions." },
                  { t: "Honeymooners", d: "Add an extra layer of privacy, romance, and VIP treatment." },
                  { t: "Multi-Generational Groups", d: "Keep everyone together and organized without the complexity." }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <CheckCircle size={20} style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', display: 'block', marginBottom: '4px' }}>{item.t}</span>
                      <span style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.4' }}>{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COLUMN 2: LUXURY & LOGISTICS ── */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: 'clamp(35px, 6vw, 60px)',
              borderRadius: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex' }}>
                  <Compass size={22} style={{ color: '#274472' }} />
                </div>
                Destinations & Lifestyle
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '25px', flexGrow: 1 }}>
                {[
                  { t: "Luxury Travelers", d: "For those accustomed to 5-star resort service and premium amenities." },
                  { t: "Alaska & European Cruisers", d: "Maximize value on high-demand, bucket-list global itineraries." },
                  { t: "Logistics-Averse Guests", d: "Ideal if you prefer the team to handle all bookings and scheduling." },
                  { t: "Seekers of Quiet Spaces", d: "Guests who want the Disney experience but value quiet, private retreats." }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <CheckCircle size={20} style={{ color: '#274472', marginTop: '4px', flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', display: 'block', marginBottom: '4px' }}>{item.t}</span>
                      <span style={{ fontSize: '15px', color: '#475569', lineHeight: '1.4' }}>{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '15px', borderLeft: '4px solid #38bdf8' }}>
                <p style={{ fontSize: '15px', color: '#1e293b', fontWeight: '700', margin: 0 }}>
                  Advisor Insight: <span style={{ fontWeight: '400', color: '#475569' }}>Concierge inventory is limited. For peak seasons, we recommend booking 15+ months in advance.</span>
                </p>
              </div>
            </div>
          </div>

          {/* EXPERT FOOTER */}
          <div style={{
            marginTop: '50px',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}>
            <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              <strong style={{ color: '#1e293b' }}>The Expert Note:</strong> While Concierge is a premium investment, many guests find the time saved and the peace of mind provided are worth every penny of the upgrade cost.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ ANGELA HUGHES AUTHORITY ═══════════════ */}
      <section className="medi-authority-section">
        <style>{`@keyframes prestige-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        <div className="medi-authority-container">
          <div className="medi-authority-header-block">
            <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
            <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>Understanding the true value of Disney Concierge Level requires an expert who has experienced it firsthand across multiple sailings and ship classes.</p>
          </div>
          <div className="medi-prestige-plaque-wrapper">
            <div className="medi-prestige-identity-card">
              <div className="medi-prestige-seal-ring" style={{ animation: 'none', border: 'none', position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px dashed rgba(255, 255, 255, 0.4)',
                  animation: 'prestige-spin 25s linear infinite',
                  pointerEvents: 'none'
                }} />
                <img src={profileAH} alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)', animation: 'none', position: 'relative', zIndex: 1 }} />
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
          <div style={{ marginTop: window.innerWidth <= 360 ? '30px' : '50px', padding: window.innerWidth <= 360 ? '20px 14px' : '35px', backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '16px' : '24px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>"Angela and her team help you analyze every Concierge benefit to determine whether the upgrade aligns with your specific cruise goals and vacation style."</p>
          </div>
        </div>
      </section>

      {/* ═════════════════ FAQ SECTION ═════════════════ */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">Disney Concierge Benefits Explained<br />Frequently Asked Questions</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>
          <div className="medi-faq-list-wrapper">
            {conciergeFaqs.map((faq, index) => (
              <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                <div className="medi-faq-question-row">
                  <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                  <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                </div>
                {mediActiveFaq === index && (
                  <p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ FINAL THOUGHTS ═════════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: "#274472", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px' }}>Final Thoughts: Is DCL Concierge Level Worth It?</h2>
            <p style={{ color: '#274472', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>A Premium Investment for Unmatched Comfort</p>
          </div>
          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ marginBottom: '25px' }}>Upgrading to Disney Concierge Level is more than just booking a larger room—it is about securing a seamless, stress-free, and exclusive vacation experience.</p>
            <p style={{ marginBottom: '40px', fontSize: '16px', color: '#64748b' }}>
              If you value time-saving convenience, priority planning access, personalized host service, and quiet onboard sanctuaries, the upgrade delivers exceptional return on investment.
            </p>
          </div>
          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ margin: '0 0 0 0', fontSize: '16px', color: '#64748b' }}>
              For shorter cruises or those on a budget, standard accommodations still offer Disney's legendary service. But for milestone celebrations and longer itineraries, Concierge level is truly second to none.
            </p>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(39, 68, 114, 0.15)', margin: '0 auto 40px' }}></div>
            <p style={{ margin: '40px 0 0 0', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '800', color: '#1e293b', lineHeight: '1.4', textAlign: 'center' }}>
              Ready to experience the ultimate in family luxury?
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════ CTA SECTION ═════════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready To Understand<br /><span style={{ color: '#38bdf8' }}>Disney Concierge Benefits?</span>
          </h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#38bdf8', margin: '0 auto 30px' }}></div>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '40px' }}>
            Understanding these benefits helps you decide if the upgrade is right for your next voyage.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px 30px', marginBottom: '50px' }}>
            {["Ship & Island Matching", "Itinerary Matching", "Stateroom Selection", "Promotional Pricing Alerts"].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'inline-block' }}>
            <button style={{ backgroundColor: '#38bdf8', color: '#1e293b', padding: '18px 40px', fontSize: '16px', fontWeight: '800', borderRadius: '50px', border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: '0.3s ease' }}>
              <Phone size={18} fill="#1e293b" />
              Schedule a Concierge Consultation
            </button>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Expert Disney Island Guidance</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default DisneyConciergeBenefitsExplained