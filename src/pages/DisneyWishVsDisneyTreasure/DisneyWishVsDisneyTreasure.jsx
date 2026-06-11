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
  TrendingUp, Info, AlertCircle,
  Wand2, Sword, Clapperboard, Palette, MapPinned, Sailboat, Timer,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/DisneyWishVsTreasure/Hero_1.webp'
// import hero2 from '../../assets/DisneyWishVsTreasure/Hero_2.jpg'
// import hero3 from '../../assets/DisneyWishVsTreasure/Hero_3.webp'
// import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'
// import WishImg from '../../assets/DisneyWishVsTreasure/Wish.jpg'
// import TreasureImg from '../../assets/DisneyWishVsTreasure/Treasure.jpg'
// import DiningWish from '../../assets/DisneyWishVsTreasure/DiningWish.jpg'
// import DiningTreasure from '../../assets/DisneyWishVsTreasure/DiningTreasure.jpg'
// import EntertainmentWish from '../../assets/DisneyWishVsTreasure/EntertainmentWish.jpg'
// import EntertainmentTreasure from '../../assets/DisneyWishVsTreasure/EntertainmentTreasure.jpg'


function DisneyWishVsDisneyTreasure() {
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

  const wishVsTreasureFaqs = [
    { question: "Is Disney Treasure bigger than Disney Wish?", answer: "No. Both ships are part of Disney's Triton-class and are very similar in size and layout." },
    { question: "Which ship is newer?", answer: "Disney Treasure is newer, launching after Disney Wish." },
    { question: "Does Disney Treasure have different restaurants?", answer: "Yes. Plaza de Coco is one of the major dining differences." },
    { question: "Is Disney Wish better for young children?", answer: "Many families with younger children prefer Disney Wish because of its princess and fairytale themes." },
    { question: "Is Disney Treasure better for adults?", answer: "Many adults prefer Disney Treasure due to its adventure theme and enhanced adult experiences." },
    { question: "Which ship has better entertainment?", answer: "Disney Treasure's Moana production is often considered one of Disney Cruise Line's best shows." },
    { question: "Are staterooms different?", answer: "Layouts are nearly identical, with differences primarily in theming and décor." },
    { question: "Which ship is more expensive?", answer: "Disney Treasure may cost slightly more because of higher demand and longer itineraries." },
    { question: "Do both ships visit Castaway Cay?", answer: "Many itineraries on both ships include Disney's private island destinations." },
    { question: "Which ship should first-time cruisers choose?", answer: "Disney Wish is often recommended for first-time Disney Cruise Line guests." },
    { question: "Which ship should repeat Disney cruisers choose?", answer: "Disney Treasure offers fresh experiences that appeal to returning Disney travelers." },
    { question: "Are both ships family-friendly?", answer: "Absolutely. Both ships rank among the best family cruise ships in the world." }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "logo": "https://www.tripsandships.com/PNG%20image.png", "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"] },
      { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in Disney Cruise Line comparisons, Disney Wish reviews, Disney Treasure reviews, and premium family vacations." },
      { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
      { "@type": "WebPage", "name": "Disney Wish vs Disney Treasure", "url": "https://www.tripsandships.com/disney-wish-vs-disney-treasure", "description": "Compare Disney Wish vs Disney Treasure including dining, entertainment, staterooms, itineraries, and value to determine which Disney cruise ship is right for you." },
      {
        "@type": "BreadcrumbList", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
          { "@type": "ListItem", "position": 3, "name": "Disney Wish vs Disney Treasure", "item": "https://www.tripsandships.com/disney-wish-vs-disney-treasure" }
        ]
      },
      { "@type": "FAQPage", "mainEntity": wishVsTreasureFaqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Disney Wish vs Disney Treasure | Which Disney Cruise Ship Is Better?</title>
        <meta name="title" content="Disney Wish vs Disney Treasure: Complete Ship Comparison" />
        <meta name="description" content="Compare Disney Wish vs Disney Treasure including dining, entertainment, staterooms, itineraries, adult experiences, family activities, and value to determine which Disney cruise ship is right for you." />
        <meta name="keywords" content="Disney Wish vs Disney Treasure, Disney Treasure vs Disney Wish, Best Disney Cruise Ship, Disney Cruise Ship Comparison, Disney Wish Review, Disney Treasure Review, Disney Wish or Disney Treasure, Which is better Disney Wish or Disney Treasure, Disney Wish vs Disney Treasure for families, Disney Treasure compared to Disney Wish, Disney Cruise ship comparison guide" />
        <link rel="canonical" href="https://www.tripsandships.com/disney-wish-vs-disney-treasure" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="medi-hero-section">
        {mediHeroImages.map((img, idx) => (
          <div key={idx} className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        <div className="medi-hero-overlay-layer"></div>
        <div className="medi-hero-content-wrapper" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          minHeight: window.innerWidth <= 768 ? '70vh' : '85vh',
          padding: window.innerWidth <= 360 ? '20px 16px' : '40px 20px',
          textAlign: 'center', position: 'relative', zIndex: 10
        }}>
          <div className="medi-hero-eyebrow-tag" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: window.innerWidth <= 360 ? '8px 14px' : '10px 20px',
            backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '60px', color: '#ffffff',
            fontSize: window.innerWidth <= 360 ? '10px' : '12px', fontWeight: '700',
            letterSpacing: window.innerWidth <= 360 ? '1.5px' : '2px', textTransform: 'uppercase',
            marginBottom: window.innerWidth <= 768 ? '20px' : '30px',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'
          }}>
            <Ship size={window.innerWidth <= 360 ? 13 : 16} style={{ color: '#60a5fa' }} />
            <span style={{
              display: window.innerWidth <= 480 ? '-webkit-box' : 'inline',
              WebkitLineClamp: window.innerWidth <= 480 ? 2 : 'unset',
              WebkitBoxOrient: 'vertical', overflow: window.innerWidth <= 480 ? 'hidden' : 'visible', lineHeight: '1.4'
            }}>Complete Ship Comparison Guide</span>
          </div>
          <h1 className="medi-hero-main-title" style={{
            color: '#ffffff', fontSize: window.innerWidth <= 360 ? 'clamp(28px, 8vw, 40px)' : 'clamp(38px, 7vw, 72px)',
            fontWeight: '800', lineHeight: window.innerWidth <= 768 ? '1.1' : '1.0',
            letterSpacing: window.innerWidth <= 768 ? '-0.01em' : '-0.03em', margin: '0',
            maxWidth: '900px', textShadow: '0 4px 30px rgba(0,0,0,0.4)'
          }}>
            Disney Wish vs<br />Disney Treasure
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: window.innerWidth <= 360 ? '15px' : window.innerWidth <= 768 ? '16px' : 'clamp(17px, 2.5vw, 20px)',
            maxWidth: window.innerWidth <= 768 ? '90%' : '700px', width: '100%',
            margin: window.innerWidth <= 768 ? '16px auto 0' : '24px auto 0', lineHeight: '1.6',
            textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Compare dining, entertainment, staterooms, itineraries, and value to determine which Disney cruise ship is right for you.
          </p>
        </div>
      </section>

      {/* ═══════════════ PREMIUM INTRO ═══════════════ */}
      <section className="medi-intro-section medi-premium-intro-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>{`
                    .medi-immersion-card-item:hover { transform: translateY(-5px); border-color: #3b82f6 !important; background-color: #ffffff !important; box-shadow: 0 10px 20px rgba(59, 130, 246, 0.05); }
                    .medi-immersion-card-item:hover .medi-immersion-icon-box { background-color: #274472 !important; border-color: #274472 !important; transform: scale(1.1); }
                    .medi-immersion-card-item:hover .medi-immersion-icon-box svg { stroke: #ffffff !important; }
                    @media (max-width: 1024px) { .dc-intro-grid { grid-template-columns: 1fr !important; gap: 50px !important; } }
                `}</style>
        <div className="medi-premium-intro-glow-one"></div>
        <div className="medi-premium-intro-glow-two"></div>
        <div className="medi-intro-container">
          <div className="medi-premium-intro-grid dc-intro-grid" style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'start' }}>
            <div className="medi-premium-editorial-block" style={{ maxHeight: isMobileViewport ? 'none' : '680px', overflowY: isMobileViewport ? 'visible' : 'auto', paddingRight: isMobileViewport ? '0' : '24px', textAlign: window.innerWidth <= 1024 ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
              <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472', paddingLeft: window.innerWidth <= 1024 ? '0' : '12px' }}>The Triton-Class Evolution</span>
              <h2 style={{ color: '#274472', fontSize: 'clamp(30px, 5vw, 48px)', lineHeight: '1.15', margin: '0 0 20px 0', fontWeight: '800', letterSpacing: '-0.02em' }}>Which Disney Cruise Ship<br />Should You Choose?</h2>
              <div style={{ width: '80px', height: '4px', background: '#3b82f6', marginBottom: '36px', margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px', borderRadius: '10px' }}></div>
              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                <p style={{ marginBottom: '24px' }}>Disney Cruise Line's newest generation of ships has transformed the cruise experience with innovative dining, immersive entertainment, and luxurious accommodations.</p>
                <p style={{ marginBottom: '24px' }}>While the <strong>Disney Wish</strong> and <strong>Disney Treasure</strong> share the same Triton-class design, they offer distinctly different themes, entertainment, and dining concepts.</p>
                <p style={{ marginBottom: '40px' }}>The answer depends on whether you prefer fairy tales and enchantment or adventure and exploration.</p>
              </div>
              <div style={{ width: '100%' }}>
                <p style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '700', textAlign: window.innerWidth <= 1024 ? 'center' : 'left' }}>The Core Differences:</p>
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 550 ? '1fr' : 'repeat(2, 1fr)', gap: '16px', width: '100%' }}>
                  {[
                    { t: "Fairy Tale vs Adventure Theme", i: <Wand2 size={20} /> },
                    { t: "Cinderella vs Aladdin Halls", i: <Castle size={20} /> },
                    { t: "Innovative Dining Concepts", i: <Utensils size={20} /> },
                    { t: "Immersive Theater", i: <Theater size={20} /> },
                    { t: "Distinct Itineraries", i: <MapPin size={20} /> }
                  ].map((item, idx) => (
                    <div key={idx} className="medi-immersion-card-item" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
                      <div className="medi-immersion-icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', transition: 'all 0.3s ease', flexShrink: 0 }}>{item.i}</div>
                      <span style={{ color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="medi-premium-signature-panel" style={{ marginTop: '0', borderLeft: '4px solid #274472', position: isMobileViewport ? 'relative' : 'sticky', top: '100px' }}>
              <div className="medi-premium-signature-glow"></div>
              <div className="medi-premium-signature-content">
                <div className="medi-expert-profile-row">
                  <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}><Star size={24} className="medi-star-accent" /></div>
                  <div><span className="medi-expert-card-subtitle">SHIP COMPARISON EXPERT</span><h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3></div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>At Trips & Ships Luxury Travel, we help families navigate the nuanced differences between Disney's newest ships to find the perfect match.</p>
                <div className="medi-premium-expert-quote-box" style={{ background: 'rgba(39, 68, 114, 0.03)', borderRadius: '15px', padding: '20px' }}>
                  <span className="medi-quote-mark" style={{ color: '#274472', fontSize: '32px', lineHeight: '1', display: 'block' }}>“</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>With 40+ years of experience, Angela Hughes breaks down whether the classic magic of the Wish or the new adventures of the Treasure suit your family best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUICK COMPARISON OVERVIEW ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Side-by-Side Analysis</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#ffffff", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Quick Comparison Overview</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
            {/* WISH */}
            <div style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: 'clamp(30px, 5vw, 50px)', border: '2px solid rgba(255,255,255,0.1)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#cbd5e1', fontSize: '10px', fontWeight: '900', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>Launched 2022</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Wand2 size={24} color="#cbd5e1" /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Wish</h3>
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[{ l: "Theme", v: "Fairytale & Enchantment" }, { l: "Grand Hall", v: "Cinderella" }, { l: "Home Port", v: "Port Canaveral" }, { l: "Itineraries", v: "Bahamas & Caribbean" }, { l: "Ideal For", v: "First-Time Cruisers" }, { l: "Dining", v: "Frozen & Marvel" }].map((row, i) => (
                  <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                    <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600' }}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* TREASURE */}
            <div style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: 'clamp(30px, 5vw, 50px)', border: '2px solid #38bdf8', boxShadow: '0 20px 50px rgba(56, 189, 248, 0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: '#38bdf8', color: '#0f172a', fontSize: '10px', fontWeight: '900', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>Launched 2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sword size={24} color="#ffffff" /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Treasure</h3>
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[{ l: "Theme", v: "Adventure & Exploration" }, { l: "Grand Hall", v: "Aladdin" }, { l: "Home Port", v: "Port Canaveral" }, { l: "Itineraries", v: "Caribbean & Longer" }, { l: "Ideal For", v: "Repeat Disney Guests" }, { l: "Dining", v: "Coco & Marvel" }].map((row, i) => (
                  <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                    <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600' }}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DESIGN & THEME COMPARISON ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) 0', backgroundColor: '#dce6f5', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <style>{`.concierge-light-glass { transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(39, 68, 114, 0.2); backdrop-filter: blur(10px); } .concierge-light-glass:hover { transform: translateY(-8px); border-color: #274472; background: rgba(255, 255, 255, 0.85); box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15); }`}</style>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: '3px solid #274472', paddingLeft: '12px' }}>Ship Design & Atmosphere</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Theme & Grand Hall Experience</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '30px' }}>
            <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <div style={{ color: '#ffffff', backgroundColor: '#274472', padding: '14px', borderRadius: '15px', display: 'flex' }}><Wand2 size={28} /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Disney Wish</h3>
              </div>
              <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: '0 0 20px 0' }}>Focuses on fairy tales, wishes, dreams, and princess stories. The Grand Hall is inspired by <strong>Cinderella</strong>, creating a royal, magical atmosphere.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {["Fairy Tales", "Princess Stories", "Classic Magic", "Royal Atmosphere"].map(t => (
                  <span key={t} style={{ padding: '8px 16px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#274472', border: '1px solid #e2e8f0' }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="concierge-light-glass" style={{ padding: '45px', borderRadius: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <div style={{ color: '#ffffff', backgroundColor: '#274472', padding: '14px', borderRadius: '15px', display: 'flex' }}><Sword size={28} /></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Disney Treasure</h3>
              </div>
              <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', margin: '0 0 20px 0' }}>Embraces adventure, discovery, and exploration. The Grand Hall is inspired by <strong>Aladdin</strong>, introducing a more adventurous, global theme.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {["Adventure", "Discovery", "Exploration", "Global Stories"].map(t => (
                  <span key={t} style={{ padding: '8px 16px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#274472', border: '1px solid #e2e8f0' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(39, 68, 114, 0.08)', borderRadius: '25px', border: '1px solid rgba(39, 68, 114, 0.2)', textAlign: 'center', display: 'flex', flexDirection: window.innerWidth <= 600 ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <Award size={24} style={{ color: '#274472' }} />
            <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: '700', margin: 0 }}>Winner: <span style={{ fontWeight: '400', color: '#475569' }}>Disney Wish for classic magic. Disney Treasure for adventure lovers.</span></p>
          </div>
        </div>
      </section>

      {/* ═══════════════ ENTERTAINMENT & DINING COMPARISON ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', borderLeft: '3px solid #274472', paddingLeft: '12px' }}>Onboard Experience</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Entertainment & Dining Showdown</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            {/* ENTERTAINMENT */}
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#274472', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}><Theater size={22} style={{ color: '#3b82f6' }} /> Entertainment</h3>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Disney Wish</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {["Disney Seas the Adventure", "The Little Mermaid (Broadway-style)", "Interactive Marvel Experiences"].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569' }}>
                        <CheckCircle size={16} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '3px' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '24px', backgroundColor: '#f0f9ff', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Disney Treasure</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {["Disney The Tale of Moana (Groundbreaking)", "Adventure-Based Immersive Storytelling", "Expanded Character Encounters"].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569' }}>
                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '3px' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic', margin: '20px 0 0 0' }}><strong style={{ color: '#274472' }}>Winner:</strong> Disney Treasure generally offers newer and more innovative entertainment.</p>
            </div>

            {/* DINING */}
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#274472', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}><Utensils size={22} style={{ color: '#3b82f6' }} /> Dining Experiences</h3>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Disney Wish</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {["Arendelle: A Frozen Dining Adventure", "Worlds of Marvel", "1923"].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569' }}>
                        <CheckCircle size={16} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '3px' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '24px', backgroundColor: '#f0f9ff', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Disney Treasure</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {["Plaza de Coco (Highly Immersive)", "Worlds of Marvel", "1923"].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#475569' }}>
                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '3px' }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic', margin: '20px 0 0 0' }}><strong style={{ color: '#274472' }}>Winner:</strong> Disney Treasure gets a slight edge thanks to Plaza de Coco.</p>
            </div>
          </div>

          {/* STATEROOMS & FAMILY & ADULTS ROW */}
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: "Staterooms", winner: "Tie", desc: "Nearly identical layouts with differences primarily in theming and décor.", icon: <DoorOpen size={24} /> },
              { title: "Family Activities", winner: "Tie", desc: "Both feature AquaMouse, immersive kids clubs, characters, and deck parties.", icon: <Users size={24} /> },
              { title: "Adult Experiences", winner: "Disney Treasure", desc: "Treasure builds on the Wish with additional adventure-themed lounges and enhanced entertainment.", icon: <Gem size={24} /> }
            ].map((card, i) => (
              <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '30px', border: '1px solid #e2e8f0', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#274472' }}>{card.icon}</div>
                <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>{card.title}</h4>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>{card.desc}</p>
                <span style={{ padding: '8px 20px', backgroundColor: card.winner === 'Tie' ? '#f1f5f9' : '#eff6ff', borderRadius: '50px', fontSize: '13px', fontWeight: '800', color: '#274472', border: '1px solid #e2e8f0' }}>Winner: {card.winner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ITINERARY & PRICING COMPARISON ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#0f172a', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <style>{`.cost-bracket-card { background: linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 40px; text-align: 'center; flex: 1; min-width: 280px; transition: all 0.4s ease; } .cost-bracket-card:hover { border-color: #38bdf8; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }`}</style>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Voyage Planning</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 46px)', color: '#ffffff', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.02em' }}>Itinerary & Pricing Comparison</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '40px', padding: 'clamp(30px, 5vw, 60px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', marginBottom: '40px' }}>
              <div className="cost-bracket-card">
                <div style={{ color: '#38bdf8', marginBottom: '15px' }}><MapPin size={40} /></div>
                <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>Disney Wish</h4>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.5', margin: '0 0 15px 0' }}>Typically 3-night and 4-night Bahamas itineraries. Ideal for first-timers and Disney World add-ons.</p>
                <span style={{ padding: '8px 20px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>Better Value & Availability</span>
              </div>
              <div className="cost-bracket-card" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                <div style={{ color: '#38bdf8', marginBottom: '15px' }}><Compass size={40} /></div>
                <h4 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>Disney Treasure</h4>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.5', margin: '0 0 15px 0' }}>Often 7-night Eastern/Western Caribbean cruises. Ideal for repeat guests wanting more sea days.</p>
                <span style={{ padding: '8px 20px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '50px', fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>More Diverse Itineraries</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '17px', color: '#38bdf8', lineHeight: '1.7', fontStyle: 'italic', margin: 0, fontWeight: '600' }}>"Disney Treasure may command slightly higher pricing due to newer demand, while Wish often has more promotional availability."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHICH SHIP IS BEST FOR YOU? ═══════════════ */}
      <section className="medi-audience-section" style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Selection Guide</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: "#274472", fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Which Ship Is Best For You?</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr', gap: '30px', alignItems: 'stretch' }}>
            {/* WISH */}
            <div style={{ backgroundColor: '#1e293b', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', color: '#ffffff', boxShadow: '0 25px 50px -12px rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '14px', display: 'flex', color: '#cbd5e1' }}><Wand2 size={26} /></div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Choose Disney Wish If:</h3>
              </div>
              <div style={{ display: 'grid', gap: '30px' }}>
                {[
                  { t: "You love princess stories", d: "The fairytale theme is unmatched." },
                  { t: "You're a first-time Disney cruiser", d: "Wish is the perfect introduction." },
                  { t: "You're traveling with younger children", d: "The magic resonates deeply with kids." },
                  { t: "You prefer shorter cruises", d: "3 and 4-night options are ideal." },
                  { t: "You want classic Disney magic", d: "Cinderella's Grand Hall sets the tone." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#f1f5f9', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* TREASURE */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(35px, 6vw, 60px)', borderRadius: '30px', border: '1px solid #e2e8f0', color: '#0f172a', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '45px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', color: '#274472' }}><Sword size={26} /></div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Choose Disney Treasure If:</h3>
              </div>
              <div style={{ display: 'grid', gap: '30px', flexGrow: 1 }}>
                {[
                  { t: "You love adventure themes", d: "Aladdin and exploration excite you." },
                  { t: "You're a repeat Disney cruiser", d: "Treasure offers fresh, new experiences." },
                  { t: "You're traveling as a couple", d: "The vibe appeals to adults equally." },
                  { t: "You prefer longer itineraries", d: "7-night cruises allow deeper relaxation." },
                  { t: "You want Disney's newest experiences", d: "Moana and Plaza de Coco are cutting-edge." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#94a3b8', marginTop: '4px', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ANGELA HUGHES AUTHORITY ═══════════════ */}
      <section className="medi-authority-section">
        <style>{`@keyframes prestige-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes prestige-reverse-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } } .medi-prestige-seal-ring { animation: prestige-spin 25s linear infinite; border: 2px dashed rgba(255,255,255,0.4) !important; display: flex; align-items: center; justify-content: center; } .medi-prestige-static-img { animation: prestige-reverse-spin 25s linear infinite; }`}</style>
        <div className="medi-authority-container">
          <div className="medi-authority-header-block">
            <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
            <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>Choosing between two world-class ships requires an expert who understands the subtle differences that impact your family's vacation.</p>
          </div>
          <div className="medi-prestige-plaque-wrapper">
            <div className="medi-prestige-identity-card">
              <div className="medi-prestige-seal-ring">
                <img src='' alt="Angela Hughes" className="medi-prestige-static-img" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
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
            <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '600', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>"Angela and her team help you weigh the nuances of the Wish vs. Treasure to book the exact voyage that matches your family's dreams."</p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">Disney Wish vs Disney Treasure<br />Frequently Asked Questions</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>
          <div className="medi-faq-list-wrapper">
            {wishVsTreasureFaqs.map((faq, index) => (
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

      {/* ═══════════════ FINAL VERDICT ═══════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: "#274472", fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px' }}>Final Verdict</h2>
            <p style={{ color: '#274472', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>Wish vs. Treasure</p>
          </div>
          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ marginBottom: '25px' }}>You really can't go wrong with either ship.</p>
            <p style={{ marginBottom: '40px', fontSize: '16px', color: '#64748b' }}>
              Choose <strong style={{ color: '#1e293b' }}>Disney Wish</strong> if you're seeking classic Disney magic, princess-inspired storytelling, and a shorter family-friendly cruise.
            </p>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(39, 68, 114, 0.15)', margin: '0 auto 40px' }}></div>
            <p style={{ marginBottom: '10px', fontSize: '16px', color: '#64748b' }}>
              Choose <strong style={{ color: '#1e293b' }}>Disney Treasure</strong> if you want Disney's newest adventure-themed experiences, longer itineraries, and a ship that appeals equally to families and adults.
            </p>
            <p style={{ margin: '40px 0 0 0', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '800', color: '#1e293b', lineHeight: '1.4' }}>
              For the latest and most immersive Disney Cruise Line experience, Disney Treasure takes the crown.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)', backgroundColor: '#1e293b', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready To Choose Between <span style={{ color: '#38bdf8' }}>Wish & Treasure?</span>
          </h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#38bdf8', margin: '0 auto 30px' }}></div>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '40px' }}>Trips & Ships Luxury Travel provides personalized guidance to ensure you pick the perfect ship, itinerary, and stateroom for your family.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px 30px', marginBottom: '50px' }}>
            {["Ship Comparison Analysis", "Itinerary Matching", "Stateroom Selection", "Promotional Pricing Alerts"].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'inline-block' }}>
            <button style={{ backgroundColor: '#38bdf8', color: '#1e293b', padding: '18px 40px', fontSize: '16px', fontWeight: '800', borderRadius: '50px', border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <Phone size={18} fill="#1e293b" />
              Schedule a Ship Consultation
            </button>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Expert Disney Cruise Guidance</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default DisneyWishVsDisneyTreasure