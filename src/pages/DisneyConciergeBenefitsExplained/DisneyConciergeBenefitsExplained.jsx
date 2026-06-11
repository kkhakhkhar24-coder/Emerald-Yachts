import Navbar from '../../components/Navbar/Navbar'
import {
  Ship, MapPin, Star, Clock, Users, CheckCircle,
  Compass, Sparkles, Anchor, Calendar, Gem,
  ChevronRight, Crown, Phone,
  Globe, Heart, Utensils, Award,
  CircleDollarSign, GraduationCap, Mic, FileText,
  Music, Moon, Minus, Sun, X, Wine, Castle, Film, Theater, Waves,
  Shield, CheckSquare, XCircle, Key, Coffee, Sofa, Bath,
  DoorOpen, ConciergeBell, UsersRound, Armchair,
  TrendingUp, Info, AlertCircle, Wand2
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/DisneyConciergeBenefits/Hero_1.webp'
// import hero2 from '../../assets/DisneyConciergeBenefits/Hero_2.jpg'
// import hero3 from '../../assets/DisneyConciergeBenefits/Hero_3.webp'
// import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'

function DisneyConciergeBenefitsExplained() {
  const [mediCurrentHero, setMediCurrentHero] = useState(0)
  const mediHeroImages = []

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
            Disney Concierge Benefits<br />Explained
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
                      border: '1px solid #e2e8e0',
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

            {/* RIGHT COLUMN: EXPERT SIDEBAR */}
            <div className="medi-premium-signature-panel" style={{
              marginTop: '0',
              borderLeft: '4px solid #274472',
              position: isMobileViewport ? 'relative' : 'sticky',
              top: '100px'
            }}>
              <div className="medi-premium-signature-glow"></div>
              <div className="medi-premium-signature-content">
                <div className="medi-expert-profile-row">
                  <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                    <Star size={24} className="medi-star-accent" />
                  </div>
                  <div>
                    <span className="medi-expert-card-subtitle">CONCIERGE ANALYSIS</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
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

      {/* ═════════════════ BEFORE YOUR CRUISE ═════════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: '3px solid #274472', paddingLeft: '12px' }}>The Pre-Cruise Advantage</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472", fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.1' }}>Concierge Benefits Before Your Cruise</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '850px', margin: '30px auto 0', lineHeight: '1.6' }}>One of the biggest advantages begins long before embarkation day.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {/* Shoreside Team Card */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><Ship size={24} /></div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', margin: '0', textAlign: 'center' }}>Shoreside Concierge Team</h3>
              </div>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: '0 0 15px 0' }}>After booking a Concierge stateroom, guests receive access to Disney's Shoreside Concierge Team to assist with dining, port adventures, spa appointments, special celebrations, nursery reservations, and accessibility requests.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 20px 0 0' }}>
                {["Dining reservations", "Port adventures", "Spa appointments", "Special celebrations", "Nursery reservations", "Accessibility requests"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px', fontSize: '15px', color: '#475569' }}>
                    <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Earlier Booking Card */}
            <div style={{ backgroundColor: '#f0f9ff', borderRadius: '24px', padding: '30px', border: '1px solid #bfdbfe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><Clock size={24} /></div>
                <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '10px', margin: '0' }}>Earlier Booking Opportunities</h4>
              </div>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.5', margin: '0 0 15px 0' }}>Concierge guests typically receive priority access to port adventures, adult dining, spa treatments, beverage tastings, and nursery bookings. This is particularly valuable on popular itineraries such as Alaska, Europe, and holiday sailings.</p>
            </div>
          </div>

          {/* Priority Embarkation Card */}
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><Anchor size={24} /></div>
              <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '10px', margin: '0' }}>Priority Embarkation Benefits</h4>
            </div>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.5', margin: '0 0 15px 0' }}>The Concierge experience becomes noticeable the moment you arrive at the terminal. Dedicated check-in areas and priority boarding mean shorter lines, faster processing, and being among the first passengers onboard to begin your vacation.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 20px 0 0' }}>
              {["Shorter lines", "Faster processing", "Personalized assistance", "Early ship access", "Relaxed start to vacation"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '15px', color: '#475569' }}>
                  <CheckCircle size={14} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} /> {item}
                </li>
              ))}
            </ul>
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
                    .exp-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; color: #fff; z-index: 2; }
                    .exp-overlay span { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #38bdf8; display: block; margin-bottom: 8px; }
                    .exp-overlay h4 { font-size: 18px; font-weight: 700; margin: 0; }
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
              { img: '', alt: "Concierge Lounge", title: "Concierge Lounge", desc: "Complimentary refreshments, specialty coffee, and concierge assistance." },
              { img: '', alt: "Priority Boarding", title: "Priority Boarding", desc: "Among the first to board and begin your vacation faster." },
              { img: '', alt: "Concierge Host", title: "Dedicated Hosts", desc: "Personalized assistance tailored specifically for Concierge guests." },
              { img: '', alt: "Sun Deck", title: "Sun Deck", desc: "Quiet, premium, uncrowded outdoor spaces." },
              { img: '', alt: "Tendering", title: "Priority Tendering", desc: "Skip the lines and arrive at destinations first." },
              { img: '', alt: "Luxury Suite", title: "Luxury Suites", desc: "Separate bedrooms, living areas, and premium finishes." }
            ].map((item, idx) => (
              <div key={idx} className="exp-item" style={{ gridColumn: window.innerWidth <= 600 ? 'span 1' : 'span 1' }}>
                <img src={item.img} alt={item.alt} className="exp-img" loading="lazy" />
                <div className="exp-overlay">
                  <span className="exp-overlay-span">{item.title}</span>
                  <h4 className="exp-overlay h4">{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ FAMILY & ADULT LOVE SECTION ═════════════════ */}
      <section className="medi-audience-section" style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Guest Satisfaction Audit</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '15px' }}>Who Loves Concierge Most?</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>Whether you're seeking relaxation, personalized service, or exclusive spaces—the Concierge experience consistently ranks as a guest favorite aspect of the cruise.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr', gap: '30px', alignItems: 'stretch' }}>
            {/* LEFT: FAMILY */}
            <div style={{ backgroundColor: '#1e293b', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', color: '#ffffff', boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '12px', borderRadius: '14px', display: 'flex' }}><Users size={26} /></div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Families Love Concierge</h3>
              </div>
              <div style={{ display: 'grid', gap: '30px' }}>
                {[
                  { t: "Less planning stress", d: "The Concierge Team handles logistics while you enjoy the cruise." },
                  { t: "More convenience", d: "Priority access reduces waiting and lines." },
                  { t: "Smoother vacations", d: "Everything feels carefully managed." },
                  { t: "Family support", d: "Special requests are quickly accommodated." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px', margin: 0 }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: ADULTS */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', border: '1px solid #e2e8f0', color: '#0f172a', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex' }}><X size={26} style={{ color: '#64748b' }} /></div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Adults Love Concierge</h3>
              </div>
              <div style={{ display: 'grid', gap: '30px', flexGrow: 1 }}>
                {[
                  { t: "Exclusive Spaces", d: "Private lounges and sun decks offer peaceful escapes." },
                  { t: "Personalized Service", d: "Luxury-level assistance throughout the voyage." },
                  { t: "Dining Access", d: "Improved priority dining reservations." },
                  { t: "Relaxation", d: "A more refined, less crowded experience." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#94a3b8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#1e293b', marginBottom: '6px', margin: 0 }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '15px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', margin: 0 }}><strong style={{ color: '#274472' }}>Expert Tip:</strong> "Many adults become repeat Concierge cruisers after just one voyage."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ DRAWBACKS SECTION ═════════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Honest Assessment</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: "#ffffff", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '15px' }}>Potential Drawbacks of Concierge</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '19px', color: '#475569', lineHeight: '1.8', margin: '0 0 20px 0', textAlign: 'center' }}>
              While Concierge offers impressive benefits, it isn't perfect for every traveler.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              {[
                { t: "Higher cost", d: "The premium price can be significant." },
                { t: "Limited use on short cruises", d: "Guests may not fully utilize benefits on 3- or 4-night sailings." },
                { t: "Not necessary for everyone", d: "Experienced Disney cruisers often know how to navigate planning alone." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }}><XCircle size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#1e293b', marginBottom: '6px', margin: '0' }}>{item.t}</h4>
                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5', margin: '0 0 0 0' }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ WHO SHOULD CONSIDER ═════════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Selection Guide</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Who Should Consider Concierge?</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 850 ? '50px' : '80px', position: 'relative' }}>
            {window.innerWidth > 850 && <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(39, 68, 114, 0.15) 20%, rgba(39, 68, 114, 0.15) 80%)' }}></div>}
            <div style={{ backgroundColor: '#1e293b', borderRadius: '30px', padding: window.innerWidth <= 360 ? '28px 16px' : '45px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '10px', display: 'flex' }}><CheckCircle size={22} style={{ color: '#38bdf8' }} /></div>
                Choose Castaway Cay If:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
                {[
                  "You love Disney characters",
                  "You're traveling with younger children",
                  "You want maximum convenience",
                  "You enjoy classic Disney experiences",
                  "You prefer shorter cruises",
                  "You prefer calm swimming conditions"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8', marginTop: '10px', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '17px', fontWeight: '600', color: '#cbd5e1', lineHeight: '1.5' }}>{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: '#f0f9ff', borderRadius: window.innerWidth <= 360 ? '18px 16px' : '30px', padding: window.innerWidth <= 360 ? '18px 16px' : '30px', border: '1px solid #bfdbfe', textAlign: 'center', boxShadow: '0 10px 30px rgba(59, 130, 248, 0.08)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '15px', margin: '0' }}>Choose Lookout Cay If:</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
                {[
                  "You love beautiful beaches",
                  "You enjoy cultural experiences",
                  "You appreciate local history",
                  "You want beyond Disney theming",
                  "You enjoy exploring new destinations"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(39, 68, 114, 0.3)', marginTop: '10px', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '17px', fontWeight: '500', color: '#475569', lineHeight: '1.5' }}>{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(39, 68, 114, 0.08)', borderRadius: '15px', border: '1px solid rgba(39, 68, 114, 0.2)' }}>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: '0' }}>
              <strong style={{ color: '#1e293b', display: 'block', marginBottom: '5px' }}>Expert Note:</strong>
              While Concierge is a premium investment, many guests find the time saved and peace of mind well worth the cost.
            </p>
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
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: "#274472", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px' }}>Final Thoughts: Understanding Disney Concierge Benefits</h2>
            <p style={{ color: '#274472', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>Castaway Cay vs. Lookout Cay</p>
          </div>
          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ marginBottom: '25px' }}>Disney has created two outstanding island experiences—but they serve different purposes.</p>
            <p style={{ marginBottom: '40px', fontSize: '16px', color: '#64748b' }}>
              Choose <strong style={{ color: '#1e293b' }}>Castaway Cay</strong> if you're looking for classic Disney magic, convenience, family fun, character experiences, and one of the best adult beaches in cruising.
            </p>
          </div>
          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ margin: '0 0 0 0', fontSize: '16px', color: '#64748b' }}>
              Choose <strong style={{ color: '#1e293b' }}>Lookout Cay</strong> if you're looking for breathtaking beaches, cultural immersion, authentic island experiences, and a ship that appeals equally to families and adults.
            </p>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(39, 68, 114, 0.15)', margin: '0 auto 40px' }}></div>
            <p style={{ margin: '40px 0 0 0', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '800', color: '#1e293b', lineHeight: '1.4', textAlign: 'center' }}>
              The best solution? Experience both and decide for yourself.
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