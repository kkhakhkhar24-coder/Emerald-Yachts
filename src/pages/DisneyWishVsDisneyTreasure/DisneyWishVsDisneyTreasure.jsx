import Navbar from '../../components/Navbar/Navbar'
import {
  Ship, Star, Clock, Users, CheckCircle,
  Compass, Sparkles, Calendar,
  Crown, Phone, Globe, Utensils, Award,
  CircleDollarSign, GraduationCap, Mic, FileText,
  Wine, Castle, DoorOpen, Wand2, Check,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
import hero1 from '../../assets/DisneyWishVsDisneyTreasure/disney-treasure-cruise-ship-sailing-ocean.jpg'
import hero2 from '../../assets/DisneyWishVsDisneyTreasure/best-disney-cruise-caribbean-family-beach-vacation-excursion.jpg'
import hero3 from '../../assets/DisneyWishVsDisneyTreasure/aerial-view-disney-cruise-ship-top-deck-pools-open-ocean.jpg'
import profileAH from '../../assets/HXExpeditionsCruises/Profile_AH.jpg'
import EnchanteRestaurant from '../../assets/DisneyWishVsDisneyTreasure/disney-wish-enchante-restaurant-luxury-booth-seating-adults.jpg'
import AdventuresByDisney from '../../assets/DisneyWishVsDisneyTreasure/kayaking-under-pont-du-gard-roman-aqueduct-provence-france-adventures-by-disney.jpg'
import MarvelDayAtSea from '../../assets/DisneyWishVsDisneyTreasure/marvel-superheroes-on-disney-cruise-ship-marvel-day-at-sea.jpg'
import AulaniResort from '../../assets/DisneyWishVsDisneyTreasure/aulani-disney-resort-ocean-view-hotel-room-kapolei-oahu-hawaii-beachfront-family-stay.jpg'
import AvengersCampus from '../../assets/DisneyWishVsDisneyTreasure/avengers-campus-guardians-of-the-galaxy-mission-breakout-disney-california-adventure-anaheim.jpg'
import MagicKingdomFireworks from '../../assets/DisneyWishVsDisneyTreasure/cinderella-castle-fireworks-show-magic-kingdom-orlando-nighttime-spectacular.jpg'
import DisneyWishTheme from '../../assets/DisneyWishVsDisneyTreasure/disney-hollywood-studios-christmas-tree-holiday-lights-show-orlando-florida.jpg'
import DisneyTreasureTheme from '../../assets/DisneyWishVsDisneyTreasure/rhone-river-valley-vineyard-wine-tasting-tour-france-travel.jpg'
import QuickCompWish from '../../assets/DisneyWishVsDisneyTreasure/disneyland-hotel-monorail-water-slides-family-friendly-hotel-anaheim-california.jpg'
import QuickCompTreasure from '../../assets/DisneyWishVsDisneyTreasure/family-enjoying-ocean-views-from-disney-cruise-ship-deck-at-sunset.jpg'


function DisneyWishVsDisneyTreasure() {
  const [mediCurrentHero, setMediCurrentHero] = useState(0)
  const mediHeroImages = [hero1, hero2, hero3]

  useEffect(() => {
    const mediTimer = setInterval(() => {
      setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
    }, 5000)
    return () => clearInterval(mediTimer)
  }, [mediHeroImages.length])

  const [mediActiveFaq, setMediActiveFaq] = useState(null)

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
        <div className="medi-hero-content-wrapper">
          <div className="medi-hero-eyebrow-tag">
            <Ship className="medi-hero-ship-icon" style={{ color: '#60a5fa' }} />
            <span className="medi-hero-eyebrow-text">Complete Ship Comparison Guide</span>
          </div>
          <h1 className="medi-hero-main-title">
            Disney Wish <br /> vs Disney Treasure
          </h1>
          <p className="medi-hero-sub-text">
            Compare dining, entertainment, staterooms, itineraries, and value to determine which Disney cruise ship is right for you.
          </p>
        </div>
      </section>

      {/* ═══════════════ PREMIUM INTRO: SHIP SELECTION (MOBILE CROP FIX) ═══════════════ */}
      <section className="medi-intro-section medi-premium-intro-section">
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
          }
          .medi-immersion-card-item:hover .medi-immersion-icon-box svg { 
              stroke: #ffffff !important; 
          }

          .medi-premium-intro-section {
              position: relative !important;
              overflow: visible !important;
              padding: 100px 0 !important;
          }
          @media (max-width: 1024px) {
              .medi-premium-intro-section {
                  padding: 60px 0 100px 0 !important;
              }
          }

          .ship-intro-grid {
              display: grid !important;
              grid-template-columns: 1.2fr 0.8fr !important;
              gap: 80px !important;
              align-items: start !important;
          }
          @media (max-width: 1024px) {
              .ship-intro-grid {
                  grid-template-columns: 1fr !important;
                  gap: 40px !important;
                  display: flex !important;
                  flex-direction: column !important;
              }
          }

          .medi-premium-editorial-block {
              max-height: 750px !important;
              overflow-y: auto !important;
              padding-right: 40px !important;
              text-align: left !important;
          }
          @media (max-width: 1024px) {
              .medi-premium-editorial-block {
                  max-height: none !important;
                  overflow-y: visible !important;
                  padding-right: 0 !important;
                  text-align: center !important;
              }
              .medi-premium-editorial-block p {
                  text-align: left !important;
              }
              .medi-intro-eyebrow {
                  border-left: none !important;
                  padding-left: 0 !important;
              }
          }

          .medi-intro-divider {
              width: 80px !important;
              height: 4px !important;
              background: #3b82f6 !important;
              margin-bottom: 36px !important;
              border-radius: 10px !important;
          }
          @media (max-width: 1024px) {
              .medi-intro-divider {
                  margin: 0 auto 36px auto !important;
              }
          }

          .medi-core-differences-grid {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
              width: 100% !important;
          }
          @media (max-width: 600px) {
              .medi-core-differences-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-premium-signature-panel {
              position: sticky !important;
              top: 120px !important;
              border-left: 4px solid #274472 !important;
              border-top: none !important;
              margin-top: 0 !important;
              margin-bottom: 0 !important;
              padding: 40px !important;
          }
          @media (max-width: 1024px) {
              .medi-premium-signature-panel {
                  position: relative !important;
                  top: auto !important;
                  border-left: none !important;
                  border-top: 4px solid #274472 !important;
                  margin-top: 20px !important;
                  margin-bottom: 40px !important;
                  padding: 40px 20px !important;
              }
          }

          .medi-expert-profile-row {
              display: flex !important;
              align-items: center !important;
              gap: 16px !important;
              margin-bottom: 24px !important;
              justify-content: flex-start !important;
              text-align: left !important;
          }
          @media (max-width: 1024px) {
              .medi-expert-profile-row {
                  justify-content: center !important;
                  text-align: center !important;
              }
          }

          .medi-expert-avatar-frame {
              background: #274472 !important;
              margin: 0 !important;
          }
          @media (max-width: 1024px) {
              .medi-expert-avatar-frame {
                  margin: 0 auto 15px !important;
              }
          }

          .medi-premium-expert-desc {
              color: #475569 !important;
              line-height: 1.7 !important;
              text-align: left !important;
          }
          @media (max-width: 1024px) {
              .medi-premium-expert-desc {
                  text-align: center !important;
              }
          }

          .medi-premium-expert-quote-box {
              background: rgba(39, 68, 114, 0.03) !important;
              border-radius: 20px !important;
              padding: 24px !important;
              text-align: left !important;
          }
          @media (max-width: 1024px) {
              .medi-premium-expert-quote-box {
                  text-align: center !important;
              }
          }

          .medi-quote-mark {
              color: #274472 !important;
              font-size: 32px !important;
              line-height: 1 !important;
              display: block !important;
          }
          @media (max-width: 1024px) {
              .medi-quote-mark {
                  display: none !important;
              }
          }

          /* Additional sections responsive adjustments */
          .medi-hero-content-wrapper {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
              min-height: 85vh !important;
              padding: 40px 20px !important;
              text-align: center !important;
              position: relative !important;
              z-index: 10 !important;
          }
          @media (max-width: 768px) {
              .medi-hero-content-wrapper {
                  min-height: 70vh !important;
              }
          }
          @media (max-width: 360px) {
              .medi-hero-content-wrapper {
                  padding: 20px 16px !important;
              }
          }

          .medi-hero-eyebrow-tag {
              display: inline-flex !important;
              align-items: center !important;
              gap: 8px !important;
              padding: 10px 20px !important;
              background-color: rgba(59, 130, 246, 0.15) !important;
              border: 1px solid rgba(59, 130, 246, 0.3) !important;
              border-radius: 60px !important;
              color: #ffffff !important;
              font-size: 12px !important;
              font-weight: 700 !important;
              letter-spacing: 2px !important;
              text-transform: uppercase !important;
              margin-bottom: 30px !important;
              backdrop-filter: blur(10px) !important;
              -webkit-backdrop-filter: blur(10px) !important;
          }
          @media (max-width: 768px) {
              .medi-hero-eyebrow-tag {
                  margin-bottom: 20px !important;
              }
          }
          @media (max-width: 360px) {
              .medi-hero-eyebrow-tag {
                  padding: 8px 14px !important;
                  font-size: 10px !important;
                  letter-spacing: 1.5px !important;
              }
          }

          .medi-hero-ship-icon {
              width: 16px !important;
              height: 16px !important;
          }
          @media (max-width: 360px) {
              .medi-hero-ship-icon {
                  width: 13px !important;
                  height: 13px !important;
              }
          }

          .medi-hero-eyebrow-text {
              display: inline !important;
              line-height: 1.4 !important;
          }
          @media (max-width: 480px) {
              .medi-hero-eyebrow-text {
                  display: -webkit-box !important;
                  -webkit-line-clamp: 2 !important;
                  -webkit-box-orient: vertical !important;
                  overflow: hidden !important;
              }
          }

          .medi-hero-main-title {
              color: #ffffff !important;
              font-size: clamp(38px, 7vw, 72px) !important;
              font-weight: 800 !important;
              line-height: 1.0 !important;
              letter-spacing: -0.03em !important;
              margin: 0 !important;
              max-width: 900px !important;
              text-shadow: 0 4px 30px rgba(0,0,0,0.4) !important;
          }
          @media (max-width: 768px) {
              .medi-hero-main-title {
                  line-height: 1.1 !important;
                  letter-spacing: -0.01em !important;
              }
          }
          @media (max-width: 360px) {
              .medi-hero-main-title {
                  font-size: clamp(28px, 8vw, 40px) !important;
              }
          }

          .medi-hero-sub-text {
              color: rgba(255,255,255,0.85) !important;
              font-size: clamp(17px, 2.5vw, 20px) !important;
              max-width: 700px !important;
              width: 100% !important;
              margin: 24px auto 0 !important;
              line-height: 1.6 !important;
              text-align: center !important;
              text-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
          }
          @media (max-width: 768px) {
              .medi-hero-sub-text {
                  font-size: 16px !important;
                  max-width: 90% !important;
                  margin: 16px auto 0 !important;
              }
          }
          @media (max-width: 360px) {
              .medi-hero-sub-text {
                  font-size: 15px !important;
              }
          }

          .medi-quick-comparison-grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 24px !important;
              align-items: stretch !important;
          }
          @media (max-width: 850px) {
              .medi-quick-comparison-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-design-theme-grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 30px !important;
          }
          @media (max-width: 768px) {
              .medi-design-theme-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-winner-callout {
              display: flex !important;
              flex-direction: row !important;
              align-items: center !important;
              justify-content: center !important;
              gap: 20px !important;
          }
          @media (max-width: 600px) {
              .medi-winner-callout {
                  flex-direction: column !important;
              }
          }

          .medi-showdown-grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 40px !important;
              margin-bottom: 80px !important;
          }
          @media (max-width: 1024px) {
              .medi-showdown-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-vertical-verdicts-grid {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 24px !important;
              margin-bottom: 80px !important;
          }
          @media (max-width: 768px) {
              .medi-vertical-verdicts-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-group-selection-grid {
              display: grid !important;
              grid-template-columns: 1.1fr 0.9fr !important;
              gap: 40px !important;
          }
          @media (max-width: 992px) {
              .medi-group-selection-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-selection-comparison-grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 30px !important;
              align-items: stretch !important;
          }
          @media (max-width: 992px) {
              .medi-selection-comparison-grid {
                  grid-template-columns: 1fr !important;
              }
          }

          .medi-authority-callout {
              margin-top: 50px !important;
              padding: 35px !important;
              background-color: #f8fafc !important;
              border-radius: 24px !important;
              border: 1px solid #e2e8f0 !important;
              text-align: center !important;
          }
          @media (max-width: 360px) {
              .medi-authority-callout {
                  margin-top: 30px !important;
                  padding: 20px 14px !important;
                  border-radius: 16px !important;
              }
          }
        `}</style>

        <div className="medi-premium-intro-glow-one"></div>
        <div className="medi-premium-intro-glow-two"></div>

        <div className="medi-intro-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div className="medi-premium-intro-grid ship-intro-grid">

            {/* LEFT COLUMN: EDITORIAL CONTENT */}
            <div className="medi-premium-editorial-block">
              <span className="medi-intro-eyebrow" style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: '700',
                color: '#274472',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                borderLeft: '2px solid #274472',
                paddingLeft: '12px'
              }}>Triton-Class Comparison</span>

              <h2 style={{
                color: '#274472',
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                fontWeight: '800',
                letterSpacing: '-0.02em'
              }}>Which Disney Cruise Ship<br />Should You Choose?</h2>

              <div className="medi-intro-divider"></div>

              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                <p style={{ marginBottom: '24px' }}>
                  Disney Cruise Line's newest generation of ships has transformed the cruise experience with innovative dining, immersive entertainment, luxurious accommodations, and Disney storytelling unlike anything else at sea.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  Two of the most popular ships in the fleet are the <strong>Disney Wish</strong> and <strong>Disney Treasure</strong>. While both vessels share the same Triton-class design, they offer distinctly different themes, entertainment experiences, dining concepts, and itineraries.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  So which ship is right for your vacation? The answer depends on whether you prefer fairy tales and enchantment or adventure and exploration.
                </p>
                <p style={{ marginBottom: '40px', fontWeight: '700', color: '#1e293b' }}>
                  Let's compare every major category to help you decide.
                </p>
              </div>

              {/* ICONS GRID */}
              <div style={{ width: '100%' }}>
                <p style={{ fontSize: '15px', color: '#1e293b', marginBottom: '20px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  The Core Differences:
                </p>

                <div className="medi-core-differences-grid">
                  {[
                    { t: "Fairy Tale vs. Adventure", i: <Sparkles size={20} /> },
                    { t: "Cinderella vs. Aladdin Halls", i: <Castle size={20} /> },
                    { t: "Innovative Dining Concepts", i: <Utensils size={20} /> },
                    { t: "Broadway-Caliber Theater", i: <Mic size={20} /> },
                    { t: "Distinct Global Itineraries", i: <Compass size={20} /> }
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
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3b82f6',
                        flexShrink: 0
                      }}>{item.i}</div>
                      <span style={{ color: '#1e293b', fontSize: '14px', fontWeight: '700', lineHeight: '1.2' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXPERT PANEL */}
            <div className="medi-premium-signature-panel">
              <div className="medi-premium-signature-glow"></div>
              <div className="medi-premium-signature-content">
                <div className="medi-expert-profile-row">
                  <div className="medi-expert-avatar-frame">
                    <Star size={24} className="medi-star-accent" />
                  </div>
                  <div>
                    <span className="medi-expert-card-subtitle">SHIP COMPARISON EXPERT</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                  </div>
                </div>

                <p className="medi-premium-expert-desc">
                  At Trips & Ships Luxury Travel, we help families navigate the nuanced differences between Disney's newest ships to find the perfect match.
                </p>

                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark">“</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>
                    With 40+ years of experience, Angela Hughes breaks down whether the classic magic of the Wish or the new adventures of the Treasure suit your family best.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════ QUICK COMPARISON OVERVIEW ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
        backgroundColor: '#1e293b',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>

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
            }}>Side-by-Side Analysis</span>

            <h2 style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              color: "#ffffff",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>Quick Comparison Overview</h2>

            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#38bdf8',
              margin: '24px auto',
              borderRadius: '10px'
            }}></div>
          </div>

          <div className="medi-quick-comparison-grid">

            {/* ── DISNEY WISH ── */}
            <div style={{
              backgroundColor: '#0f172a',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.1)',
              position: 'relative'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={QuickCompWish} alt="Disney Wish" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a 0%, transparent 60%)' }} />
              </div>

              <div style={{ padding: 'clamp(30px, 5vw, 50px)', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '30px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#cbd5e1',
                  fontSize: '10px',
                  fontWeight: '900',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  textTransform: 'uppercase'
                }}>Maiden Voyage 2022</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Wand2 size={24} color="#cbd5e1" />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Wish</h3>
                </div>

                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    { l: "Theme", v: "Fairytale & Enchantment" },
                    { l: "Grand Hall", v: "Cinderella" },
                    { l: "Home Port", v: "Port Canaveral" },
                    { l: "Typical Itineraries", v: "Bahamas & Caribbean" },
                    { l: "Ideal For", v: "First-Time Disney Cruisers" },
                    { l: "Adult Experiences", v: "Excellent" },
                    { l: "Dining Themes", v: "Frozen & Marvel" }
                  ].map((row, i) => (
                    <div key={i} style={{
                      padding: '16px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                      <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600', textAlign: 'right', paddingLeft: '10px' }}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── DISNEY TREASURE ── */}
            <div style={{
              backgroundColor: '#0f172a',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '2px solid #38bdf8',
              boxShadow: '0 20px 50px rgba(56, 189, 248, 0.15)',
              position: 'relative'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={QuickCompTreasure} alt="Disney Treasure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a 0%, transparent 60%)' }} />
              </div>

              <div style={{ padding: 'clamp(30px, 5vw, 50px)', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '30px',
                  backgroundColor: '#38bdf8',
                  color: '#0f172a',
                  fontSize: '10px',
                  fontWeight: '900',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  textTransform: 'uppercase'
                }}>Maiden Voyage 2024</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Compass size={24} color="#ffffff" />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Disney Treasure</h3>
                </div>

                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    { l: "Theme", v: "Adventure & Exploration" },
                    { l: "Grand Hall", v: "Aladdin" },
                    { l: "Home Port", v: "Port Canaveral" },
                    { l: "Typical Itineraries", v: "Caribbean & Longer Voyages" },
                    { l: "Ideal For", v: "Repeat Disney Guests" },
                    { l: "Adult Experiences", v: "Enhanced Adult Offerings" },
                    { l: "Dining Themes", v: "Coco & Adventure Themes" }
                  ].map((row, i) => (
                    <div key={i} style={{
                      padding: '16px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.l}</span>
                      <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600', textAlign: 'right', paddingLeft: '10px' }}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 1: THE TRITON CLASS REVEAL ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              Next-Generation Magic
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Witness the Triton-Class Evolution
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
              The Disney Wish and Disney Treasure represent the pinnacle of Disney's naval engineering. From the first-of-its-kind AquaMouse water attraction to the infusion of high-tech storytelling in every lounge, see how this class of ship has redefined the premium family cruise.
            </p>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oMJIrnbdpvM"
              title="Disney Triton Class Reveal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═══════════════ VISUAL GALLERY: THE TRITON-CLASS EXPERIENCE ═══════════════ */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Gallery Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              display: 'block',
              marginBottom: '15px'
            }}>Visual Discovery</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#274472',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>A Gallery of Triton-Class Magic</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto', borderRadius: '10px' }}></div>
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : window.innerWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            <style>{`
                .gallery-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 4/3;
                    background-color: #f1f5f9;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .gallery-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .gallery-item:hover .gallery-img {
                    transform: scale(1.1);
                }
                .gallery-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(15, 28, 46, 0.8) 0%, transparent 50%);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 25px;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-label {
                    color: #3b82f6;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 5px;
                }
                .gallery-caption {
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 700;
                }
            `}</style>

            {/* Gallery Image 1: Enchanté Restaurant */}
            <div className="gallery-item">
              <img src={EnchanteRestaurant} alt="Enchanté Restaurant" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">GOURMET DINING</span>
                <span className="gallery-caption">Enchanté Restaurant</span>
              </div>
            </div>

            {/* Gallery Image 2: Adventures by Disney */}
            <div className="gallery-item">
              <img src={AdventuresByDisney} alt="Adventures by Disney" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">EUROPEAN ADVENTURES</span>
                <span className="gallery-caption">Adventures by Disney</span>
              </div>
            </div>

            {/* Gallery Image 3: Marvel Day at Sea */}
            <div className="gallery-item">
              <img src={MarvelDayAtSea} alt="Marvel Day at Sea" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">SUPERHERO ADVENTURES</span>
                <span className="gallery-caption">Marvel Day at Sea</span>
              </div>
            </div>

            {/* Gallery Image 4: Aulani Resort */}
            <div className="gallery-item">
              <img src={AulaniResort} alt="Aulani Resort" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">BEACHFRONT LUXURY</span>
                <span className="gallery-caption">Aulani Resort</span>
              </div>
            </div>

            {/* Gallery Image 5: Avengers Campus */}
            <div className="gallery-item">
              <img src={AvengersCampus} alt="Avengers Campus" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">THEME PARK THRILLS</span>
                <span className="gallery-caption">Avengers Campus</span>
              </div>
            </div>

            {/* Gallery Image 6: Magic Kingdom Fireworks */}
            <div className="gallery-item">
              <img src={MagicKingdomFireworks} alt="Magic Kingdom Fireworks" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">NIGHTTIME MAGIC</span>
                <span className="gallery-caption">Magic Kingdom Spectacular</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DESIGN & THEME COMPARISON ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 0',
        backgroundColor: '#dce6f5',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style>{`
    .concierge-light-glass { 
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
      background: rgba(255, 255, 255, 0.6); 
      border: 1px solid rgba(39, 68, 114, 0.2); 
      backdrop-filter: blur(10px); 
      overflow: hidden; /* Ensures image corners match card corners */
      display: flex;
      flex-direction: column;
    } 
    .concierge-light-glass:hover { 
      transform: translateY(-8px); 
      border-color: #274472; 
      background: rgba(255, 255, 255, 0.85); 
      box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15); 
    }
    .card-image-wrapper {
      width: 100%;
      height: 240px;
      overflow: hidden;
      position: relative;
    }
    .card-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .concierge-light-glass:hover .card-image-wrapper img {
      transform: scale(1.05);
    }
    .theme-list {
      list-style: none;
      padding: 0;
      margin: 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .theme-list li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
    }
  `}</style>

        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: '800',
              color: '#274472',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              borderLeft: '3px solid #274472',
              paddingLeft: '12px'
            }}>Atmosphere & Aesthetics</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: "#274472",
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>Ship Design and Theme</h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: '#274472', margin: '0 auto', borderRadius: '10px' }}></div>

            <p style={{
              fontSize: '18px',
              color: '#475569',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.7'
            }}>
              Although the ships share similar layouts, Disney created completely different atmospheres onboard, catering to different narrative preferences.
            </p>
          </div>

          <div className="medi-design-theme-grid" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '30px'
          }}>

            {/* ── DISNEY WISH CARD ── */}
            <div className="concierge-light-glass" style={{ borderRadius: '30px' }}>
              <div className="card-image-wrapper">
                {/* PLACEHOLDER 1: Disney Wish Grand Hall Image */}
                <img src={DisneyWishTheme} alt="Disney Wish Grand Hall" />
                <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 12px', borderRadius: '5px', fontSize: '11px', fontWeight: 'bold' }}>CINDERELLA THEME</div>
              </div>

              <div style={{ padding: '35px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                  <div style={{
                    color: '#ffffff',
                    backgroundColor: '#274472',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex'
                  }}>
                    <Wand2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Disney Wish</h3>
                </div>

                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
                  The Disney Wish focuses on <strong>fairy tales, wishes, and princess stories</strong>. The Grand Hall is inspired by Cinderella, creating a royal atmosphere that permeates the vessel.
                </p>

                <ul className="theme-list">
                  {["Fairy Tales", "Princess Stories", "Wishes & Dreams", "Classic Charm"].map(item => (
                    <li key={item}><Sparkles size={14} style={{ color: '#3b82f6' }} /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── DISNEY TREASURE CARD ── */}
            <div className="concierge-light-glass" style={{ borderRadius: '30px' }}>
              <div className="card-image-wrapper">
                {/* PLACEHOLDER 2: Disney Treasure Grand Hall Image */}
                <img src={DisneyTreasureTheme} alt="Disney Treasure Grand Hall" />
                <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: '#274472', color: '#fff', padding: '5px 12px', borderRadius: '5px', fontSize: '11px', fontWeight: 'bold' }}>ALADDIN THEME</div>
              </div>

              <div style={{ padding: '35px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                  <div style={{
                    color: '#ffffff',
                    backgroundColor: '#274472',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex'
                  }}>
                    <Compass size={24} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#1e293b' }}>Disney Treasure</h3>
                </div>

                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
                  Disney Treasure embraces <strong>adventure, discovery, and world travel</strong>. Inspired by Aladdin, the Grand Hall immediately introduces guests to a more adventurous theme.
                </p>

                <ul className="theme-list">
                  {["Adventure", "Discovery", "Exploration", "Global Stories"].map(item => (
                    <li key={item}><Compass size={14} style={{ color: '#3b82f6' }} /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Winner Callout */}
          <div className="medi-winner-callout" style={{
            marginTop: '50px',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '25px',
            border: '1px solid rgba(39, 68, 114, 0.2)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            boxShadow: '0 10px 30px rgba(39, 68, 114, 0.05)'
          }}>
            <div style={{
              backgroundColor: '#274472',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '800',
              textTransform: 'uppercase'
            }}>THE VERDICT</div>
            <p style={{ fontSize: '17px', color: '#1e293b', fontWeight: '700', margin: 0 }}>
              Classic Magic: <span style={{ fontWeight: '400', color: '#475569' }}>Disney Wish</span>
              <span style={{ margin: '0 15px', opacity: 0.2 }}>|</span>
              Adventure Lovers: <span style={{ fontWeight: '400', color: '#475569' }}>Disney Treasure</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ THE GREAT SHOWDOWN: WISH VS. TREASURE ═══════════════ */}
      <section style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#274472',
              letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px',
              borderLeft: '3px solid #274472', paddingLeft: '12px'
            }}>The Triton-Class Showdown</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)', color: "#274472", fontWeight: '800',
              marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.1'
            }}>Entertainment & Dining Comparison</h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '850px', margin: '30px auto 0', lineHeight: '1.7' }}>
              While the hardware is similar, the "soul" of each ship is defined by its specific entertainment and culinary narratives.
            </p>
          </div>

          {/* ── 1. ENTERTAINMENT & DINING GRID ── */}
          <div className="medi-showdown-grid">

            {/* ENTERTAINMENT COLUMN */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#274472', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mic size={24} style={{ color: '#3b82f6' }} /> Entertainment
              </h3>

              <div style={{ display: 'grid', gap: '20px' }}>
                {/* Wish Entertainment */}
                <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '19px', fontWeight: '800', marginBottom: '15px' }}>Disney Wish</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>Emphasizing classic Disney storytelling:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { t: "Seas the Adventure", d: "Signature DCL production with classic characters." },
                      { t: "The Little Mermaid", d: "Broadway-style adaptation of the animated classic." },
                      { t: "Marvel Experiences", d: "Interactive superhero encounters fleet-wide." }
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: '12px' }}>
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>{item.t}</div>
                        <div style={{ fontSize: '14px', color: '#475569' }}>{item.d}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treasure Entertainment */}
                <div style={{ padding: '30px', backgroundColor: '#f0f9ff', borderRadius: '24px', border: '1px solid #bfdbfe' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '19px', fontWeight: '800', marginBottom: '15px' }}>Disney Treasure</h4>
                  <p style={{ fontSize: '14px', color: '#3b82f6', marginBottom: '15px', fontWeight: '700' }}>Newer, adventure-focused productions:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { t: "The Tale of Moana", d: "Groundbreaking theatrical production and set design." },
                      { t: "Adventure-Based Stories", d: "Featuring Disney, Pixar, and epic franchises." },
                      { t: "Expanded Character Encounters", d: "Action-themed interactions throughout." }
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: '12px' }}>
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>{item.t}</div>
                        <div style={{ fontSize: '14px', color: '#475569' }}>{item.d}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '12px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700', margin: 0 }}>Entertainment Winner: <span style={{ fontWeight: '400' }}>Disney Treasure for innovation and Moana.</span></p>
              </div>
            </div>

            {/* DINING COLUMN */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#274472', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Utensils size={24} style={{ color: '#3b82f6' }} /> Dining Experiences
              </h3>

              <div style={{ display: 'grid', gap: '20px' }}>
                {/* Wish Dining */}
                <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '19px', fontWeight: '800', marginBottom: '15px' }}>Disney Wish</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>Arendelle: A Frozen Dining Adventure</div>
                      <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0' }}>Live performances, Scandinavian cuisine, and high-tier storytelling.</p>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>Worlds of Marvel & 1923</div>
                      <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0' }}>Interactive tech dining and a tribute to Disney animation legacy.</p>
                    </li>
                  </ul>
                </div>

                {/* Treasure Dining */}
                <div style={{ padding: '30px', backgroundColor: '#f0f9ff', borderRadius: '24px', border: '1px solid #bfdbfe' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '19px', fontWeight: '800', marginBottom: '15px' }}>Disney Treasure</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>Plaza de Coco</div>
                      <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0' }}>Mexican-inspired cuisine with live family storytelling. A guest favorite.</p>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>Worlds of Marvel & 1923</div>
                      <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0' }}>Both popular concepts return with updated menus and atmosphere.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '12px 20px', backgroundColor: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700', margin: 0 }}>Dining Winner: <span style={{ fontWeight: '400' }}>Disney Treasure for the groundbreaking Plaza de Coco.</span></p>
              </div>
            </div>
          </div>

          {/* ── 2. VERTICAL VERDICTS (ADULTS / STATEROOMS / FAMILY) ── */}
          <div className="medi-vertical-verdicts-grid">
            {[
              { title: "Adult Areas", winner: "Disney Treasure", desc: "Building on the Wish with new adventure-themed lounges and luxury relaxation spaces.", icon: <Wine size={24} /> },
              { title: "Staterooms", winner: "Tie", desc: "Identical family-friendly layouts, split bathrooms, and modern tech. Theming is the only difference.", icon: <DoorOpen size={24} /> },
              { title: "Family Activities", winner: "Tie", desc: "Both feature AquaMouse, immersive kids clubs, and massive character interactions.", icon: <Users size={24} /> }
            ].map((card, i) => (
              <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '30px', padding: '40px 30px', border: '1px solid #e2e8f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#274472' }}>{card.icon}</div>
                <h4 style={{ color: '#1e293b', fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>{card.title}</h4>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>{card.cardDesc || card.desc}</p>
                <div style={{ padding: '8px 20px', backgroundColor: '#ffffff', borderRadius: '50px', fontSize: '13px', fontWeight: '800', color: '#274472', border: '1px solid #3b82f6' }}>Winner: {card.winner}</div>
              </div>
            ))}
          </div>

          {/* ── 3. STRATEGIC AUDIT: ADULTS vs FAMILIES (FIXED TEXT VISIBILITY) ── */}
          <div className="medi-group-selection-grid" style={{
            backgroundColor: '#0f1c2e',
            padding: 'clamp(30px, 5vw, 70px)',
            borderRadius: '40px',
            color: '#ffffff', // Explicitly setting base text to white
            boxShadow: '0 20px 50px rgba(15, 28, 46, 0.3)'
          }}>
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '25px',
                letterSpacing: '-0.02em',
                color: '#ffffff' // Force heading to white
              }}>
                Choosing for Your Group
              </h3>

              <div style={{ display: 'grid', gap: '30px' }}>
                <div>
                  <h4 style={{ color: '#38bdf8', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
                    For Adults & Couples
                  </h4>
                  <p style={{ color: '#e2e8f0', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#ffffff' }}>Disney Treasure</strong> generally feels more mature, appealing to adventure travelers and repeat cruisers seeking new themed nightlife and refined experiences.
                  </p>
                </div>

                <div>
                  <h4 style={{ color: '#38bdf8', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
                    For Families
                  </h4>
                  <p style={{ color: '#e2e8f0', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                    <strong style={{ color: '#ffffff' }}>Disney Wish</strong> is often preferred for younger children due to the fairytale atmosphere. <strong style={{ color: '#ffffff' }}>Disney Treasure</strong> excels for families with older children or teens who crave action.
                  </p>
                </div>
              </div>
            </div>

            {/* Itinerary Right Box */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.07)',
              padding: '35px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '800',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ffffff'
              }}>
                <Calendar size={22} style={{ color: '#38bdf8' }} /> Itinerary Differences
              </h4>

              <div style={{ display: 'grid', gap: '25px' }}>
                <div>
                  <div style={{ fontWeight: '800', color: '#38bdf8', fontSize: '15px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Disney Wish (Short & Sweet)
                  </div>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>
                    3 & 4-night Bahamas cruises. Perfect for first-timers or Disney World add-ons.
                  </p>
                </div>

                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

                <div>
                  <div style={{ fontWeight: '800', color: '#38bdf8', fontSize: '15px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Disney Treasure (Epic Voyages)
                  </div>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>
                    7-night Caribbean itineraries. Best for cruise enthusiasts and more sea days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 2: THE TREASURE REVEAL (LIGHT BLUE THEME) ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>

            {/* Eyebrow: Navy color for light background */}
            <span style={{
              color: '#274472',
              fontWeight: '700',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'block',
              marginBottom: '15px'
            }}>
              The Heart of Adventure
            </span>

            {/* Heading: Navy color, 800 weight, -0.02em spacing */}
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              color: '#274472',
              fontWeight: '800',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              A New Standard of Immersion
            </h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>

            {/* Paragraph: Slate gray for readability */}
            <p style={{
              color: '#475569',
              fontSize: '18px',
              marginTop: '25px',
              lineHeight: '1.7',
              maxWidth: '820px',
              margin: '25px auto 0'
            }}>
              While the Wish established the fairytale, the Disney Treasure introduces a more cinematic, action-oriented atmosphere. Experience "The Great Adventure" through the eyes of Moana, Aladdin, and Coco, and see why repeat Disney cruisers are choosing the Treasure for its cutting-edge production value and global narratives.
            </p>
          </div>

          {/* Video Frame: Styled with a softer shadow for the light background */}
          <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(39, 68, 114, 0.15)',
            border: '1px solid rgba(39, 68, 114, 0.1)',
            aspectRatio: '16/9',
            backgroundColor: '#000'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/az9ztItR84E"
              title="Disney Treasure Adventure Reveal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═══════════════ ITINERARY & PRICING COMPARISON ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
        backgroundColor: '#0f172a',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style>{`
    .cost-bracket-card { 
        background: linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%); 
        border: 1px solid rgba(255, 255, 255, 0.1); 
        border-radius: 30px; 
        padding: 45px 35px; 
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        display: flex;
        flex-direction: column;
    } 
    .cost-bracket-card:hover { 
        border-color: #38bdf8; 
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); 
    }
    .itinerary-list {
        list-style: none;
        padding: 0;
        margin: 25px 0;
    }
    .itinerary-list li {
        color: #cbd5e1;
        font-size: 15px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
  `}</style>

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
            }}>Voyage Planning</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 46px)',
              color: '#ffffff',
              fontWeight: '900',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>Itinerary & Pricing Comparison</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '0 auto', borderRadius: '10px' }}></div>

            <p style={{
              color: '#94a3b8',
              fontSize: '18px',
              marginTop: '25px',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '25px auto 0'
            }}>
              Pricing fluctuates depending on season and itinerary length. Choosing between the Wish and Treasure often depends on your ideal vacation duration.
            </p>
          </div>

          {/* Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr',
            gap: '30px',
            marginBottom: '50px'
          }}>

            {/* ── DISNEY WISH CARD ── */}
            <div className="cost-bracket-card">
              <div style={{ color: '#38bdf8', marginBottom: '20px' }}><Calendar size={42} /></div>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Disney Wish</h3>
              <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Short & Sweet Bahamas Cruises</p>

              <ul className="itinerary-list">
                <li><Check size={16} /> 3-Night and 4-Night Itineraries</li>
                <li><Check size={16} /> Stops at Castaway Cay</li>
                <li><Check size={16} /> Ideal for Short Vacations</li>
                <li><Check size={16} /> Perfect WDW Add-on Trips</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: '0 0 30px 0', flex: 1 }}>
                The Disney Wish often has more sailing options and promotional availability, making it the more flexible choice for budget-conscious families.
              </p>

              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase' }}>Value Winner</span>
              </div>
            </div>

            {/* ── DISNEY TREASURE CARD ── */}
            <div className="cost-bracket-card" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
              <div style={{ color: '#38bdf8', marginBottom: '20px' }}><Ship size={42} /></div>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Disney Treasure</h3>
              <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Epic 7-Night Caribbean Voyages</p>

              <ul className="itinerary-list">
                <li><Check size={16} /> 7-Night Eastern & Western Caribbean</li>
                <li><Check size={16} /> Longer Voyages, More Sea Days</li>
                <li><Check size={16} /> Access to Multiple Global Ports</li>
                <li><Check size={16} /> Ideal for Cruise Enthusiasts</li>
              </ul>

              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: '0 0 30px 0', flex: 1 }}>
                Disney Treasure may command slightly higher pricing due to newer demand and longer voyage lengths, appealing to those seeking an immersive week-long escape.
              </p>

              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase' }}>Premium Choice</span>
              </div>
            </div>

          </div>

          {/* Final Pricing Verdict Box */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '30px',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
              <CircleDollarSign size={24} style={{ color: '#38bdf8' }} />
              <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0 }}>The Pricing Verdict</h4>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: '1.8', margin: 0 }}>
              While the Treasure offers longer, more diverse itineraries, the <strong style={{ color: '#ffffff' }}>Disney Wish usually offers better overall value</strong> due to a higher frequency of promotional offers and its suitability for first-time cruisers looking for a shorter, higher-tier introduction to Disney Cruise Line.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════ WHICH SHIP IS BEST FOR YOU? ═══════════════ */}
      <section className="medi-audience-section" style={{
        padding: 'clamp(70px, 10vw, 120px) clamp(16px, 5vw, 40px)',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif',
        overflow: 'visible'
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
            }}>Which Ship Is Best For You?</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#38bdf8', margin: '24px auto', borderRadius: '10px' }}></div>

            <p style={{
              fontSize: '18px',
              color: '#475569',
              maxWidth: '800px',
              margin: '30px auto 0',
              lineHeight: '1.7'
            }}>
              Both vessels offer the legendary Disney standard of service, but your choice will define the "soul" of your onboard experience.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 850 ? '1fr' : '1fr 1fr',
            gap: '30px',
            alignItems: 'stretch'
          }}>

            {/* ── DISNEY WISH CARD (THE CLASSIC CHOICE) ── */}
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
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '12px',
                  borderRadius: '14px',
                  display: 'flex',
                  color: '#38bdf8'
                }}>
                  <Wand2 size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: '#ffffff' }}>Choose Disney Wish If:</h3>
              </div>

              <div style={{ display: 'grid', gap: '30px', flexGrow: 1 }}>
                {[
                  { t: "You love princess stories", d: "The fairytale theme is unmatched across the fleet." },
                  { t: "You're a first-time Disney cruiser", d: "The Wish offers the perfect introduction to DCL magic." },
                  { t: "You're traveling with younger children", d: "The enchantment resonates deepest with ages 3-10." },
                  { t: "You prefer shorter cruises", d: "Ideal for 3 and 4-night Bahamas escapes." },
                  { t: "You want classic Disney magic", d: "The Cinderella Grand Hall sets a royal, traditional tone." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#38bdf8', marginTop: '4px', flexShrink: 0 }}>
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── DISNEY TREASURE CARD (THE ADVENTURE CHOICE) ── */}
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
                <div style={{
                  backgroundColor: '#f8fafc',
                  padding: '12px',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  color: '#274472'
                }}>
                  <Compass size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>Choose Disney Treasure If:</h3>
              </div>

              <div style={{ display: 'grid', gap: '30px', flexGrow: 1 }}>
                {[
                  { t: "You love adventure themes", d: "The Aladdin and exploration narratives dominate the ship." },
                  { t: "You're a repeat Disney cruiser", d: "The Treasure offers fresh, new concepts for seasoned fans." },
                  { t: "You're traveling as a couple", d: "The refined adventure vibe appeals strongly to adults." },
                  { t: "You prefer longer itineraries", d: "7-night Caribbean cruises allow for deeper relaxation." },
                  { t: "You want Disney's newest experiences", d: "The Moana stage show and Plaza de Coco are cutting-edge." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#274472', marginTop: '4px', flexShrink: 0 }}>
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Final Selection Summary */}
          <div style={{
            marginTop: '50px',
            padding: '30px',
            backgroundColor: 'rgba(39, 68, 114, 0.05)',
            borderRadius: '24px',
            textAlign: 'center',
            border: '1px solid rgba(39, 68, 114, 0.1)'
          }}>
            <p style={{ fontSize: '17px', color: '#274472', fontWeight: '700', margin: 0, fontStyle: 'italic' }}>
              Expert Perspective: "The Wish is for the dreamer; the Treasure is for the explorer. We help you choose based on the 'Emotional ROI' each ship delivers to your specific family."
            </p>
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
          <div className="medi-authority-callout">
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