import Navbar from '../../components/Navbar/Navbar'
import {
  MapPin, Star, Clock, Users, CheckCircle,
  Sparkles, ChevronRight, Crown, Phone,
  Globe, Heart, Award, CircleDollarSign, GraduationCap, Mic, FileText,
  Sun, Castle, Bed, Eye, Maximize, Compass, DoorOpen,
  Check, UsersRound, Bath, Armchair, Waves, Ship, Music, AlertCircle,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// ═══════════════════════════════════════════════════════════════
// Image Placeholders — Replace with your actual image paths
// ═══════════════════════════════════════════════════════════════
import hero1 from '../../assets/BestDisneyCruiseCabins/disney-cruise-alaska-glacier-view-inside-passage.jpg'
import hero2 from '../../assets/BestDisneyCruiseCabins/disney-wish-cruise-ship-bahamas-itinerary-sunset-view.jpg'
import hero3 from '../../assets/BestDisneyCruiseCabins/disney-wonder-alaska-cruise-tracy-arm-fjord-excursion.jpg'

// Cabin Category Gallery Images
import cabinImg1 from '../../assets/BestDisneyCruiseCabins/captain-mickey-minnie-mouse-characters-disney-cruise-deck.jpg'
import cabinImg2 from '../../assets/BestDisneyCruiseCabins/disney-cruise-line-atrium-interior-father-son-family-vacation.jpg'
import cabinImg3 from '../../assets/BestDisneyCruiseCabins/aladdin-and-jasmine-magic-carpet-statue-disney-treasure.jpg'
import cabinImg4 from '../../assets/BestDisneyCruiseCabins/disney-cruise-alaska-itinerary-family-watching-ship-mountains.jpg'
import cabinImg5 from '../../assets/BestDisneyCruiseCabins/disney-cruise-alaska-excursion-lumberjack-goofy-character-greeting.jpg'
import cabinImg6 from '../../assets/BestDisneyCruiseCabins/disney-cruise-line-live-theater-hercules-musical-show.jpg'

// Cabin Comparison Images
import insideImg from '../../assets/BestDisneyCruiseCabins/disney-wish-sarabi-lounge-interior-modern-wood-architecture.jpg'
import oceanviewImg from '../../assets/BestDisneyCruiseCabins/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg'
import verandahImg from '../../assets/BestDisneyCruiseCabins/aulani-disney-resort-ocean-view-hotel-room-kapolei-oahu-hawaii-beachfront-family-stay.jpg'
import conciergeImg from '../../assets/BestDisneyCruiseCabins/aulani-disney-resort-luxury-ocean-view-villa-living-room-kapolei-oahu-hawaii-family-vacation.jpg'

// Cabin Highlights Images
import wishCabinImg from '../../assets/BestDisneyCruiseCabins/disney-cruise-frozen-dining-adventure-elsa-restaurant-show.jpg'
import treasureCabinImg from '../../assets/BestDisneyCruiseCabins/disney-cruise-alaska-shore-excursion-skagway-train-family.jpg'
import profileAH from '../../assets/BestDisneyCruiseCabins/profile_AH.jpg'

function BestDisneyCruiseCabins() {
  const [mediCurrentHero, setMediCurrentHero] = useState(0)
  const mediHeroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const mediTimer = setInterval(() => {
      setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
    }, 5000)
    return () => clearInterval(mediTimer)
  }, [mediHeroImages.length])

  const [mediActiveFaq, setMediActiveFaq] = useState(null)
  const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 992)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mediToggleFaq = (index) => {
    setMediActiveFaq(mediActiveFaq === index ? null : index)
  }

  const cabinComparisonImages = [insideImg, oceanviewImg, verandahImg, conciergeImg];

  const cabinFaqs = [
    {
      question: "What is the best cabin on a Disney cruise?",
      answer: "For most travelers, a Deluxe Family Oceanview Stateroom with Verandah offers the best balance of value and comfort."
    },
    {
      question: "Are Disney verandah cabins worth it?",
      answer: "Many guests believe the private balcony significantly enhances the cruise experience."
    },
    {
      question: "What is the best cabin for families?",
      answer: "Deluxe Family Verandah Staterooms are often ideal due to their size and layout."
    },
    {
      question: "Are inside cabins too small?",
      answer: "No. Disney's inside staterooms are among the most spacious and thoughtfully designed in cruising."
    },
    {
      question: "What are Magical Portholes?",
      answer: "Virtual windows available in select inside cabins that display real-time ocean views and Disney character appearances."
    },
    {
      question: "Are concierge cabins worth it?",
      answer: "For travelers who value luxury, priority access, and personalized service, many find Concierge accommodations worthwhile."
    },
    {
      question: "What is the best cabin location?",
      answer: "Midship cabins are generally preferred because they minimize motion and provide convenient access to onboard amenities."
    },
    {
      question: "Is a balcony worth it on Alaska cruises?",
      answer: "Absolutely. Many guests consider verandah cabins essential for Alaska itineraries."
    },
    {
      question: "Should first-time cruisers book a verandah?",
      answer: "Yes. Verandah cabins provide a premium experience without Concierge-level pricing."
    },
    {
      question: "Are Disney cabins larger than other cruise lines?",
      answer: "Many Disney staterooms offer more space and family-friendly features than comparable cabins on mainstream cruise lines."
    },
    {
      question: "Which cabin category sells out first?",
      answer: "Popular Concierge and verandah accommodations often sell out well in advance."
    },
    {
      question: "Can families fit comfortably in Disney cabins?",
      answer: "Yes. Disney is known for designing cabins specifically for families."
    }
  ];

  const internalLinks = [
    { title: "Is Disney Concierge Worth It?", url: "/is-disney-concierge-worth-it" },
    { title: "Disney Concierge Benefits Explained", url: "/disney-concierge-benefits" },
    { title: "Disney Wish vs Disney Treasure", url: "/disney-wish-vs-disney-treasure" },
    { title: "Is Disney Cruise Line Worth the Money?", url: "/is-disney-cruise-line-worth-the-money" },
    { title: "Disney Cruise for Adults Without Kids", url: "/disney-cruise-for-adults-without-kids" },
    { title: "Best Disney Cruises for Families", url: "/best-disney-cruises-for-families" },
    { title: "Castaway Cay vs Lookout Cay", url: "/castaway-cay-vs-lookout-cay" },
    { title: "Disney Cruise Planning Guide", url: "/disney-cruise-planning-guide" }
  ];

  const cabinSchemaData = {
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
        "description": "Luxury travel agency specializing in Disney Cruise Line cabin recommendations, stateroom guides, and Disney cruise planning for families, couples, and luxury travelers."
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
        "name": "Best Disney Cruise Cabins",
        "url": "https://www.tripsandships.com/best-disney-cruise-cabins",
        "description": "Discover the best Disney Cruise cabins for families, couples, first-time cruisers, and luxury travelers. Compare inside, oceanview, verandah, concierge, and suite accommodations."
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
            "name": "Disney Cruise Planning",
            "item": "https://www.tripsandships.com/disney-cruise-planning"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Best Disney Cruise Cabins",
            "item": "https://www.tripsandships.com/best-disney-cruise-cabins"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": cabinFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Best Disney Cruise Cabins | Which Disney Cruise Room Should You Book?</title>
        <meta
          name="title"
          content="Best Disney Cruise Cabins for Families, Couples & Concierge Guests"
        />
        <meta
          name="description"
          content="Discover the best Disney Cruise cabins for families, couples, first-time cruisers, and luxury travelers. Compare inside, oceanview, verandah, concierge, and suite accommodations."
        />
        <meta name="keywords" content="Best Disney Cruise Cabins, Best Disney Cruise Rooms, Disney Cruise Cabin Guide, Disney Cruise Staterooms, Disney Cruise Verandah Rooms, Disney Cruise Concierge Suites, Best cabins on Disney Cruise Line, Which Disney cruise room should I book, Disney cruise cabin recommendations, Best Disney cruise rooms for families, Disney concierge cabin guide, Disney Cruise inside stateroom, Disney Cruise oceanview stateroom, Disney Cruise verandah stateroom, Disney Cruise magical porthole, Disney Wish cabins, Disney Treasure cabins, Best Disney cruise cabin location, Disney cruise split bathroom, Disney cruise cabin for couples, Disney cruise cabin for Alaska" />
        <link rel="canonical" href="https://www.tripsandships.com/best-disney-cruise-cabins" />
        <script type="application/ld+json">
          {JSON.stringify(cabinSchemaData)}
        </script>
      </Helmet>

      <Navbar />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
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
            <Bed size={16} />
            <span>Inside, Oceanview, Verandah & Concierge Staterooms</span>
          </div>
          <h1 className="medi-hero-main-title">
            Best Disney Cruise Cabins
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            maxWidth: '700px',
            margin: '20px auto 0',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            How to choose the perfect Disney Cruise stateroom for your vacation — from budget-friendly insides to luxurious Concierge suites.
          </p>
        </div>
      </section>

      {/* ═══════════════ PREMIUM INTRO SECTION ═══════════════ */}
      <section className="medi-intro-section medi-premium-intro-section">
        <style>{`
        .cabin-immersion-card-item:hover .cabin-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
        .cabin-immersion-card-item:hover .cabin-immersion-icon-box svg {
            stroke: #ffffff !important;
        }
        .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
        .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
        .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
        .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover { background: rgba(39, 68, 114, 0.4); }
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

            <div className="medi-premium-editorial-block" style={{
              maxHeight: isMobileViewport ? 'none' : '650px',
              overflowY: isMobileViewport ? 'visible' : 'auto',
              paddingRight: isMobileViewport ? '0' : '20px',
              textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
            }}>
              <span className="medi-premium-mini-badge" style={{
                display: 'inline-block', fontSize: '12px', fontWeight: '700',
                color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '16px',
                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
              }}>
                Your Home Away From Home
              </span>

              <h2 className="medi-premium-heading" style={{
                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: '1.2', margin: '0 0 20px 0'
              }}>
                Best Disney Cruise Cabins: How to Choose the Perfect Room
              </h2>

              <div className="medi-premium-separator" style={{
                width: '80px', height: '3px', background: '#3b82f6',
                marginBottom: '36px',
                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
              }}></div>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                Choosing the right cabin is one of the most important decisions you'll make when planning a Disney Cruise Line vacation.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                Your stateroom isn't just a place to sleep — it's your home away from home while exploring incredible destinations, enjoying world-class entertainment, and creating unforgettable family memories. Disney Cruise Line is known for offering some of the most thoughtfully designed cabins in the cruise industry.
              </p>

              <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                From budget-friendly inside staterooms to luxurious Concierge Suites, every category offers unique advantages depending on your travel style, budget, and priorities.
              </p>

              <div className="cabin-immersion-list-wrapper" style={{ width: '100%' }}>
                <p className="cabin-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                  Disney Cruise Cabin Categories:
                </p>
                <div className="cabin-immersion-cards-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                  gap: '20px', textAlign: 'left'
                }}>
                  {[
                    { t: "Inside Staterooms", i: <DoorOpen size={20} /> },
                    { t: "Oceanview Staterooms", i: <Eye size={20} /> },
                    { t: "Verandah Staterooms", i: <Sun size={20} /> },
                    { t: "Concierge Staterooms & Suites", i: <Crown size={20} /> }
                  ].map((item, idx) => (
                    <div key={idx} className="cabin-immersion-card-item" style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '16px', backgroundColor: '#f8fafc',
                      borderRadius: '14px', border: '1px solid #e2e8f0'
                    }}>
                      <div className="cabin-immersion-icon-box" style={{
                        width: '44px', height: '44px', borderRadius: '12px',
                        backgroundColor: '#eff6ff', border: '1px solid #dbeafe',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#274472', flexShrink: 0, transition: 'all 0.3s ease'
                      }}>
                        {item.i}
                      </div>
                      <span className="cabin-immersion-card-title" style={{ color: '#1e293b', fontSize: '15px', fontWeight: '600' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                    <span className="medi-expert-card-subtitle">CRUISE EXPERT</span>
                    <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                  </div>
                </div>
                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                  At Trips & Ships Luxury Travel, we help travelers navigate every Disney Cruise cabin category to find the perfect stateroom match — whether you're booking your first cruise or upgrading to Concierge.
                </p>
                <div className="medi-premium-expert-quote-box">
                  <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                  <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                    With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes provides personalized cabin recommendations based on your unique travel needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 1: HOW TO CHOOSE YOUR CABIN ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#dce6f5', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              Expert Cabin Guide
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              How to Choose Your Perfect Disney Cruise Cabin
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
              Choosing the right stateroom is one of the most important decisions for your Disney cruise. Learn how to match cabin categories to your family size, budget, and itinerary for the best onboard experience.
            </p>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-zr5PSUOp-U"
              title="How to Choose Your Perfect Disney Cruise Cabin"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═══════════════ BEST CABINS MOSAIC GRID ═══════════════ */}
      <section style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
        backgroundColor: '#0a1120',
        fontFamily: 'sans-serif',
        overflow: 'hidden'
      }}>
        <style>{`
        .cabin-modern-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 420px;
            gap: 24px;
            max-width: 1240px;
            margin: 0 auto;
        }
        .cabin-modern-item {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            background-color: #000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cabin-modern-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.8s ease;
        }
        .cabin-modern-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top,
                rgba(10, 17, 32, 1) 0%,
                rgba(10, 17, 32, 0.85) 30%,
                rgba(10, 17, 32, 0.2) 60%,
                transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            padding: clamp(24px, 5vw, 45px) clamp(20px, 4vw, 35px);
            color: #ffffff;
            z-index: 2;
            text-align: left;
        }
        @media (hover: hover) {
            .cabin-modern-item:hover .cabin-modern-img {
                transform: scale(1.08);
                filter: brightness(0.7);
            }
        }
        .cabin-modern-tag {
            font-size: clamp(10px, 2vw, 11px);
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #60a5fa;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            width: 100%;
        }
        .cabin-modern-title {
            font-size: clamp(20px, 3vw, 24px);
            font-weight: 700;
            margin: 0 0 12px 0;
            line-height: 1.2;
            color: #ffffff;
            text-align: left;
            text-shadow: 0 2px 15px rgba(0, 0, 0, 0.8);
            width: 100%;
        }
        .cabin-modern-desc {
            font-size: clamp(14px, 2vw, 15px);
            color: rgba(255, 255, 255, 0.95);
            line-height: 1.6;
            margin: 0;
            font-weight: 400;
            text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
        }
        .cabin-modern-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 14px;
            width: 100%;
        }
        .cabin-modern-badge-pill {
            font-size: 11px;
            font-weight: 700;
            color: #ffffff;
            background: rgba(59, 130, 246, 0.3);
            border: 1px solid rgba(59, 130, 246, 0.4);
            padding: 4px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        @media (max-width: 1024px) {
            .cabin-modern-grid {
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 380px;
            }
        }
        @media (max-width: 650px) {
            .cabin-modern-grid {
                grid-template-columns: 1fr;
                grid-auto-rows: 340px;
                gap: 16px;
            }
            .cabin-modern-overlay { padding: 30px 20px; }
            .cabin-modern-desc { max-width: 100%; }
        }
        @media (max-width: 380px) {
            .cabin-modern-grid { grid-auto-rows: 310px; }
            .cabin-modern-title { font-size: 19px; }
        }
    `}</style>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
          <span style={{
            color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)',
            textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px'
          }}>
            Cabin Recommendations
          </span>
          <h2 style={{
            fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff',
            fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15
          }}>
            Best Disney Cruise Cabins by Category
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
        </div>

        <div className="cabin-modern-grid">

          {/* 1. BEST OVERALL — VERANDAH */}
          <div className="cabin-modern-item">
            <img src={cabinImg1} alt="Captain Mickey & Minnie on Disney Cruise Deck" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">Best Overall</span>
              <h3 className="cabin-modern-title">Deluxe Family Oceanview with Verandah</h3>
              <p className="cabin-modern-desc">Step onto the deck and meet Captain Mickey and Minnie — the quintessential Disney cruise moment. Verandah cabins offer the ideal balance of value, comfort, and private outdoor space.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Families</span>
                <span className="cabin-modern-badge-pill">Couples</span>
                <span className="cabin-modern-badge-pill">First-Timers</span>
              </div>
            </div>
          </div>

          {/* 2. BEST FOR FAMILIES */}
          <div className="cabin-modern-item">
            <img src={cabinImg2} alt="Father and Son in Disney Cruise Atrium" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">For Families</span>
              <h3 className="cabin-modern-title">Deluxe Family Verandah Stateroom</h3>
              <p className="cabin-modern-desc">From the stunning atrium to your spacious stateroom, family cabins feature split bathrooms, extra sleeping space, and exceptional storage designed for busy families.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Split Bath</span>
                <span className="cabin-modern-badge-pill">Extra Storage</span>
              </div>
            </div>
          </div>

          {/* 3. BEST FOR COUPLES */}
          <div className="cabin-modern-item">
            <img src={cabinImg3} alt="Aladdin and Jasmine Magic Carpet Statue on Disney Treasure" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">For Couples</span>
              <h3 className="cabin-modern-title">Deluxe Oceanview with Verandah</h3>
              <p className="cabin-modern-desc">The Disney Treasure's Aladdin-themed décor sets a romantic tone. Enjoy private balcony sunsets, morning coffee with ocean views, and enchanting themed experiences throughout the ship.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Honeymoons</span>
                <span className="cabin-modern-badge-pill">Anniversaries</span>
              </div>
            </div>
          </div>

          {/* 4. BEST BUDGET — INSIDE */}
          <div className="cabin-modern-item">
            <img src={cabinImg4} alt="Family Watching Mountains from Disney Cruise Alaska" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">Budget Pick</span>
              <h3 className="cabin-modern-title">Deluxe Inside Stateroom</h3>
              <p className="cabin-modern-desc">Watch breathtaking Alaskan mountain scenery even from inside staterooms on select decks. Inside cabins offer outstanding value with Magical Portholes featuring real-time ocean views.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Lowest Price</span>
                <span className="cabin-modern-badge-pill">Magical Porthole</span>
              </div>
            </div>
          </div>

          {/* 5. BEST FOR ALASKA */}
          <div className="cabin-modern-item">
            <img src={cabinImg5} alt="Goofy Lumberjack Character Greeting on Alaska Excursion" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">Alaska Pick</span>
              <h3 className="cabin-modern-title">Verandah Stateroom for Alaska</h3>
              <p className="cabin-modern-desc">Meet Goofy as a lumberjack on thrilling Alaska shore excursions. Back onboard, your verandah provides private glacier views, wildlife sightings, and scenic cruising from the comfort of your cabin.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Glacier Views</span>
                <span className="cabin-modern-badge-pill">Wildlife</span>
              </div>
            </div>
          </div>

          {/* 6. BEST FOR CARIBBEAN */}
          <div className="cabin-modern-item">
            <img src={cabinImg6} alt="Live Hercules Theater Show on Disney Cruise" className="cabin-modern-img" />
            <div className="cabin-modern-overlay">
              <span className="cabin-modern-tag">Caribbean Pick</span>
              <h3 className="cabin-modern-title">Oceanview or Verandah Stateroom</h3>
              <p className="cabin-modern-desc">Between spectacular live shows like Hercules and tropical port days, Caribbean itineraries mean more time exploring. Oceanview cabins offer excellent value for guests who spend most of their day enjoying entertainment and shore excursions.</p>
              <div className="cabin-modern-badges">
                <span className="cabin-modern-badge-pill">Sunrise Views</span>
                <span className="cabin-modern-badge-pill">Tropical</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ CONCIERGE & ROYAL SUITES: ACCOMMODATION SHOWCASE ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px'
            }}>Elite Accommodations</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: "#274472",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}>Best Disney Concierge Cabins</h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '850px', margin: '30px auto 0', lineHeight: '1.7' }}>
              For travelers seeking the pinnacle of luxury, Disney’s suite collection provides the perfect blend of space, privacy, and exclusive service.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr',
            gap: '30px'
          }}>

            {/* ── CARD 1: ONE-BEDROOM SUITE (The Ideal Choice) ── */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '40px',
              padding: 'clamp(30px, 5vw, 50px)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: '#e8f0fe', padding: '12px', borderRadius: '14px', color: '#274472' }}>
                    <DoorOpen size={26} />
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', margin: 0 }}>One-Bedroom Concierge Suite</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  Often considered the <strong>ideal Concierge option</strong>, providing a significant upgrade in space and comfort.
                </p>
              </div>

              {/* Feature & Benefit Split */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Room Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                    {["Separate bedroom", "Living room", "Expanded bathroom", "Premium amenities"].map((f, i) => (
                      <li key={i} style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Included Benefits</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                    {["Lounge access", "Priority boarding", "Exclusive sun deck", "Priority booking"].map((b, i) => (
                      <li key={i} style={{ fontSize: '14px', color: '#475569', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={14} style={{ color: '#3b82f6' }} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For Section */}
              <div style={{ marginTop: 'auto', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', display: 'block', marginBottom: '15px' }}>Best For:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["Luxury travelers", "Special celebrations", "Honeymooners", "Multi-gen families"].map((tag, i) => (
                    <span key={i} style={{ padding: '6px 14px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '12px', fontWeight: '700', color: '#475569' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CARD 2: ROYAL SUITE (The Ultimate Luxury) ── */}
            <div style={{
              backgroundColor: '#0f1c2e',
              padding: 'clamp(30px, 5vw, 50px)',
              borderRadius: '40px',
              color: '#ffffff',
              boxShadow: '0 25px 60px rgba(15, 28, 46, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ marginBottom: '35px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', padding: '12px', borderRadius: '14px', color: '#60a5fa' }}>
                    <Crown size={26} />
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Concierge Royal Suites</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  The <strong>most prestigious address</strong> in the Disney fleet, rivaling 5-star hotel suites found around the world.
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Masterpiece Features</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {[
                    { t: "Massive Living Areas", i: <UsersRound size={16} /> },
                    { t: "Multiple Bathrooms", i: <Bath size={16} /> },
                    { t: "Premium Furnishings", i: <Armchair size={16} /> },
                    { t: "Expansive Verandahs", i: <Waves size={16} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ color: '#38bdf8' }}>{item.i}</div>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Section */}
              <div style={{ marginTop: 'auto', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#38bdf8', display: 'block', marginBottom: '15px' }}>Designed For:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["VIP travelers", "Special occasions", "Luxury enthusiasts"].map((tag, i) => (
                    <span key={i} style={{ padding: '8px 18px', backgroundColor: 'rgba(56, 189, 248, 0.15)', borderRadius: '50px', fontSize: '12px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.5px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════ BEST CABIN BY TRAVELER TYPE: BALANCED STRATEGIC GRID ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#f1f5f9',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Section Header - Center Aligned */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '800',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block'
            }}>Personalized Recommendations</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              color: "#274472",
              fontWeight: '900',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginTop: '15px'
            }}>Best Cabins by Traveler Type</h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '20px auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '800px', margin: '25px auto 0', lineHeight: '1.7' }}>
              Every traveler has a different priority. We've analyzed the Disney fleet to match specific guest needs with the ideal stateroom category.
            </p>
          </div>

          {/* Balanced Grid: 3 on Top, 2 on Bottom to fill the space perfectly */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '24px'
          }}>
            {[
              {
                type: "First-Time Cruisers",
                rec: "Deluxe Oceanview Verandah",
                desc: "Offers the complete Disney cruise experience with private outdoor space and fresh sea air.",
                icon: <Ship size={24} />,
                span: isMobileViewport ? 'span 6' : 'span 2'
              },
              {
                type: "Families with Young Children",
                rec: "Deluxe Family Verandah",
                desc: "Engineered with extra square footage and a split-bath design to handle the needs of a busy family.",
                icon: <Users size={24} />,
                span: isMobileViewport ? 'span 6' : 'span 2'
              },
              {
                type: "Couples",
                rec: "Deluxe Oceanview Verandah",
                desc: "A romantic and practical choice for enjoying private sunsets and quiet morning coffee at sea.",
                icon: <Heart size={24} />,
                span: isMobileViewport ? 'span 6' : 'span 2'
              },
              {
                type: "Luxury Travelers",
                rec: "One-Bedroom Concierge Suite",
                desc: "The gold standard for travelers seeking the highest tier of personalized service and exclusive amenities.",
                icon: <Crown size={24} />,
                span: isMobileViewport ? 'span 6' : 'span 3' // Fills half the bottom row
              },
              {
                type: "Budget Travelers",
                rec: "Deluxe Inside Stateroom",
                desc: "Outstanding value that provides the full Disney standard of quality and service at the most accessible price point.",
                icon: <CircleDollarSign size={24} />,
                span: isMobileViewport ? 'span 6' : 'span 3' // Fills half the bottom row
              }
            ].map((item, i) => (
              <div key={i} style={{
                gridColumn: item.span,
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                padding: '45px 35px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(15, 28, 46, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '100%'
              }}>
                {/* Icon Box */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: '#f0f9ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  color: '#3b82f6',
                  border: '1px solid #e0f2fe'
                }}>
                  {item.icon}
                </div>

                <span style={{
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '10px'
                }}>{item.type}</span>

                <h3 style={{
                  fontSize: '19px',
                  fontWeight: '800',
                  color: '#0f1c2e',
                  marginBottom: '15px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em'
                }}>
                  <span style={{ color: '#64748b', fontSize: '13px', display: 'block', marginBottom: '4px', fontWeight: '600' }}>Recommended:</span>
                  {item.rec}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  lineHeight: '1.6',
                  margin: 0,
                  flexGrow: 1
                }}>{item.desc}</p>

                <div style={{ width: '40px', height: '2px', backgroundColor: '#e2e8f0', marginTop: '25px' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERT ADVISORY: CABIN SELECTION & LOCATION ═══════════════ */}
      <section style={{
        padding: 'clamp(70px, 10vw, 120px) 24px',
        backgroundColor: '#0f1c2e',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#3b82f6',
              fontWeight: '800',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'block',
              marginBottom: '15px'
            }}>Expert Strategic Guidance</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}>Best Locations & Cabins to Avoid</h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '24px auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#94a3b8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
              Positioning is everything. While Disney cabins are among the best at sea, selecting the right location can dramatically impact your comfort and sleep quality.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 992 ? '1fr' : '1fr 1fr',
            gap: '40px'
          }}>

            {/* ── LEFT COLUMN: THE ADVISORY (CABINS TO AVOID) ── */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: 'clamp(30px, 5vw, 50px)',
              borderRadius: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '12px', borderRadius: '14px', color: '#cbd5e1' }}>
                  <AlertCircle size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>Areas to Consider Avoiding</h3>
              </div>

              <div style={{ display: 'grid', gap: '30px' }}>
                {[
                  { t: "Near Elevators", d: "High hallway traffic can lead to additional noise and conversation outside your door.", i: <Users size={18} /> },
                  { t: "Below Pool Decks", d: "Potential for noise from chair movement or deck cleaning during early morning hours.", i: <Waves size={18} /> },
                  { t: "Near Nightclubs", d: "Late-night bass and activity may impact light sleepers in nearby cabins.", i: <Music size={18} /> },
                  { t: "Far Forward or Aft", d: "Guests sensitive to motion may feel the ship's movement more in these extreme ends.", i: <Compass size={18} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ color: '#64748b', marginTop: '4px' }}>{item.i}</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN: THE RECOMMENDATION (BEST LOCATION) ── */}
            <div style={{
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              padding: 'clamp(30px, 5vw, 50px)',
              borderRadius: '40px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                <div style={{ backgroundColor: '#3b82f6', padding: '12px', borderRadius: '14px', color: '#ffffff' }}>
                  <MapPin size={26} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>The Ideal Choice: Midship</h3>
              </div>

              <p style={{ color: '#e2e8f0', fontSize: '17px', lineHeight: '1.8', marginBottom: '30px' }}>
                Many experienced cruisers consider midship cabins the <strong>"Gold Standard"</strong> because they offer the most stable and convenient orientation on the ship.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '15px' }}>
                {[
                  "Significantly less motion sensitivity",
                  "Easy, centralized access to all ship amenities",
                  "Convenient and fast navigation to dining rooms",
                  "Direct access to midship elevator banks"
                ].map((text, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '500', color: '#ffffff' }}>
                    <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /> {text}
                  </li>
                ))}
              </ul>

              {/* Final Selection Highlight */}
              <div style={{
                marginTop: 'auto',
                padding: '30px',
                backgroundColor: '#3b82f6',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.2)'
              }}>
                <span style={{ fontSize: '12px', fontWeight: '900', color: '#0f1c2e', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>Best Overall Selection</span>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Midship Verandah Stateroom</h4>
              </div>
            </div>

          </div>

          {/* ADVISOR CALLOUT */}
          <div style={{
            marginTop: '50px',
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '17px', color: '#cbd5e1', fontWeight: '600', margin: 0, fontStyle: 'italic' }}>
              "Every ship deck plan is unique. At Trips & Ships Luxury Travel, we meticulously analyze cabin placements to ensure your stay is peaceful and perfectly situated."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ CABIN COMPARISON DASHBOARD ═══════════════ */}
      <section className="medi-itinerary-showcase-section">
        <div className="medi-itinerary-showcase-container">
          <div className="medi-itinerary-showcase-header">
            <span className="medi-itinerary-eyebrow">CABIN COMPARISON</span>
            <h2 className="medi-itinerary-showcase-heading">Inside vs Oceanview vs Verandah vs Concierge</h2>
            <div className="medi-itinerary-showcase-separator"></div>
            <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
              Explore each cabin category to understand which stateroom type best matches your travel style and budget.
            </p>
          </div>

          <div className="medi-itinerary-dashboard">
            <div className="medi-itinerary-tabs">
              {["Inside", "Oceanview", "Verandah", "Concierge"].map((title, idx) => (
                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`} onClick={() => setMediSelectedItinerary(idx)}>
                  <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                  <div className="medi-itinerary-tab-meta">
                    <span className="medi-itinerary-tab-title">{title}</span>
                  </div>
                  <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                </button>
              ))}
            </div>

            <div className="medi-itinerary-showcase-card">
              <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                {cabinComparisonImages[mediSelectedItinerary] && (
                  <img src={cabinComparisonImages[mediSelectedItinerary]} alt={`${["Inside", "Oceanview", "Verandah", "Concierge"][mediSelectedItinerary]} Stateroom`} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                )}
                <div className="medi-itinerary-showcase-img-overlay"></div>
                <span className="medi-itinerary-showcase-badge">STATEROOM SPOTLIGHT</span>
              </div>

              <div className="medi-itinerary-showcase-body">
                <h3 className="medi-itinerary-showcase-title">
                  {["Inside Staterooms", "Oceanview Staterooms", "Verandah Staterooms", "Concierge Staterooms & Suites"][mediSelectedItinerary]}
                </h3>

                <div className="medi-itinerary-details-grid">
                  <div className="medi-itinerary-details-col">
                    <h4 className="medi-itinerary-details-heading">Perfect For:</h4>
                    <ul className="medi-itinerary-details-list">
                      {[
                        ["Budget travelers", "First-time cruisers", "Guests who spend little time in room", "Families prioritizing experiences"],
                        ["Value seekers", "Caribbean travelers", "First-time cruisers", "Families wanting natural light"],
                        ["Most travelers", "Families", "Couples", "Alaska itineraries"],
                        ["Luxury travelers", "Special celebrations", "Honeymooners", "VIP travelers"]
                      ][mediSelectedItinerary].map((feature, i) => (
                        <li key={i}>
                          <Sparkles size={14} className="medi-itinerary-detail-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="medi-itinerary-details-col">
                    <h4 className="medi-itinerary-details-heading">Key Features:</h4>
                    <div className="medi-itinerary-details-chips">
                      {[
                        ["Lowest Price", "Comfortable Layout", "Magical Portholes"],
                        ["Ocean Views", "Natural Light", "Great Value"],
                        ["Private Balcony", "Sunset Views", "Extra Space"],
                        ["VIP Service", "Priority Access", "Premium Amenities"]
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
                    {[
                      "Disney's inside staterooms are among the most spacious and thoughtfully designed in cruising — some even feature Magical Portholes with Disney character appearances.",
                      "Oceanview staterooms provide natural light and ocean views at a lower price point than verandah cabins, making them an excellent value choice.",
                      "For most guests, a Verandah cabin offers the best overall experience — private outdoor space, ocean views, and additional living area.",
                      "Concierge accommodations include dedicated lounge access, priority boarding, exclusive sun deck, and personalized service throughout your voyage."
                    ][mediSelectedItinerary]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DISNEY WISH & TREASURE HIGHLIGHTS ═══════════════ */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Newest Ships
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Disney Wish & Disney Treasure Cabin Highlights
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
              Disney's newest ships feature the most advanced accommodations Disney Cruise Line has ever offered.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px', marginBottom: '50px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <img src={wishCabinImg} alt="Disney Wish Cabin" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '30px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: '0 0 10px' }}>Disney Wish</h4>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                  Modern design, enhanced storage solutions, family-friendly layouts, updated technology, and elegant Disney theming throughout every stateroom category.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
              <img src={treasureCabinImg} alt="Disney Treasure Cabin" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '30px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: '0 0 10px' }}>Disney Treasure</h4>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                  Building on the Wish's innovations with refined interiors, new thematic design elements, and continued commitment to family-friendly luxury accommodations.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {[
              { text: "Modern Design", icon: <Sparkles size={18} /> },
              { text: "Enhanced Storage", icon: <Maximize size={18} /> },
              { text: "Family-Friendly Layouts", icon: <Users size={18} /> },
              { text: "Updated Technology", icon: <Star size={18} /> },
              { text: "Elegant Disney Theming", icon: <Castle size={18} /> }
            ].map((pill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 24px', backgroundColor: '#f8fafc', borderRadius: '60px', border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 2: THE TRITON-CLASS EVOLUTION ── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
              Next-Generation Ships
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Disney Wish & Treasure: The Triton-Class Evolution
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
            <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.7', maxWidth: '820px', margin: '25px auto 0' }}>
              The Disney Wish and Disney Treasure represent the pinnacle of Disney's naval engineering. From the first-of-its-kind AquaMouse water attraction to the infusion of high-tech storytelling in every lounge, see how this class of ship has redefined the premium family cruise.
            </p>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oMJIrnbdpvM"
              title="Disney Wish & Treasure: The Triton-Class Evolution"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ═══════════════ ANGELA HUGHES AUTHORITY SECTION ═══════════════ */}
      <section className="medi-authority-section">
        <style>{`
          @keyframes prestige-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes prestige-reverse-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
          .medi-prestige-seal-ring { animation: prestige-spin 25s linear infinite; border: 2px dashed rgba(255,255,255,0.4) !important; display: flex; align-items: center; justify-content: center; }
          .medi-prestige-static-img { animation: prestige-reverse-spin 25s linear infinite; }
        `}</style>

        <div className="medi-authority-container">
          <div className="medi-authority-header-block">
            <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
            <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
              Why Trust Angela Hughes &<br />Trips & Ships Luxury Travel
            </h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
            <p style={{ textAlign: 'center', maxWidth: '850px', margin: '20px auto 0', fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
              When it comes to selecting the right Disney Cruise cabin, having an expert who understands every stateroom category and ship layout makes all the difference.
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
              "Angela and her team help travelers select the perfect Disney Cruise cabin — from the best deck location to the ideal stateroom category for your specific travel needs."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="medi-section-heading">Best Disney Cruise Cabins:<br />Frequently Asked Questions</h2>
            <div className="medi-heading-separator-bar medi-bar-centered"></div>
          </div>

          <div className="medi-faq-list-wrapper">
            {cabinFaqs.map((faq, index) => (
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

      {/* ═══════════════ FINAL VERDICT ═══════════════ */}
      <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#dce6f5', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
              Final Verdict
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Which Disney Cruise Cabin Is Best?
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ margin: '0 0 20px' }}>
              The best Disney cruise cabin depends on your budget, travel style, and vacation goals.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              For most travelers, a <strong style={{ color: '#274472' }}>Deluxe Family Oceanview Stateroom with Verandah</strong> delivers the ideal balance of comfort, views, space, and value.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              Families often benefit from Disney's spacious family cabins, while luxury travelers may prefer <strong style={{ color: '#274472' }}>Concierge Suites and Royal Suites</strong> for their exclusive benefits and premium accommodations.
            </p>
            <p style={{ margin: '0' }}>
              No matter which category you choose, <strong style={{ color: '#274472' }}>Disney Cruise Line offers some of the most thoughtfully designed and family-friendly cabins in the cruise industry.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="medi-cta-main-section" id="cabin-cta">
        <div className="medi-cta-bg-pattern-layer"></div>
        <div className="medi-cta-content-relative">
          <div className="medi-cta-inner-wrapper">
            <h2 className="medi-cta-heading-white">
              Ready To Choose Your<br />Perfect Disney Cruise Cabin?
            </h2>
            <div className="medi-cta-separator-white"></div>

            <p className="medi-cta-paragraph-white">
              The right cabin can transform your Disney Cruise experience. <strong>Let an expert help you decide.</strong>
            </p>

            <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
              Trips & Ships Luxury Travel provides personalized cabin recommendations based on your travel style, budget, itinerary, and ship — so you book the perfect stateroom every time.
            </p>

            <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
              <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                We help with:
              </span>
              <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                {[
                  "Choosing the best cabin category",
                  "Finding the ideal deck location",
                  "Comparing inside vs verandah vs concierge",
                  "Selecting the best cabins for Alaska or Caribbean",
                  "Upgrading to Concierge or Royal Suite"
                ].map((item, idx) => (
                  <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                    <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                    <span style={{ lineHeight: '1' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
              Contact Trips & Ships Luxury Travel today to get expert guidance on booking the best Disney Cruise cabin for your vacation.
            </p>

            <div className="medi-cta-button-group">
              <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <Phone size={18} />
                Schedule a Disney Cruise Cabin Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestDisneyCruiseCabins