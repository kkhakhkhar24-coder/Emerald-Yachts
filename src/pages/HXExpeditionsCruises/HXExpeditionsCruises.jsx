import Navbar from '../../components/Navbar/Navbar'
import {
  Ship, MapPin, Star, Clock, Users, CheckCircle,
  Compass, Sparkles, Anchor, Calendar, Gem,
  ChevronRight, ChevronLeft, Crown, Phone,
  Globe, Heart, Utensils, Award,
  Maximize, Home, Hotel, GlassWater, Wifi,
  CircleDollarSign, UserCheck, GraduationCap, Mic, FileText, Microscope, FlaskConical
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
// import hero1 from '../../assets/HXExpeditions/Hero_Antarctica.webp'
// import hero2 from '../../assets/HXExpeditions/Hero_Svalbard.webp'
// import hero3 from '../../assets/HXExpeditions/Hero_Galapagos.webp'
import profileAH from '../../assets/Profile_AH.jpg'
// import hxShipMain from '../../assets/HXExpeditions/HX_Ship_Exterior.jpg'

function HXExpeditions() {
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

  const hxMistakes = [
    {
      title: 'Booking Based Only on Price',
      desc: 'Expedition cruising is an investment in access. The cheapest option often uses older ships with less ice-strengthening or fewer zodiacs, leading to missed landings in Antarctica or the Arctic.'
    },
    {
      title: 'Underestimating Physical Activity',
      desc: 'HX is about active exploration. Unlike luxury ocean cruises, you will be boarding Zodiacs in swells and walking on uneven glacial terrain. Matching the ship to your mobility is vital.',
    },
    {
      title: 'Choosing the Wrong Ship for the Region',
      desc: 'Not all HX ships are equal. While the Roald Amundsen is a high-tech hybrid marvel perfect for Antarctica, a smaller vessel like the Spitsbergen offers a more intimate, wildlife-focused feel in Svalbard.'
    }
  ];

  const hxSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "image": "https://www.tripsandships.com/hx-expeditions-hero.jpg",
        "description": "Expert HX Expedition cruise specialists providing personalized planning for Antarctica, Arctic, and Galápagos voyages."
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
            "name": "Is HX Expeditions the same as Hurtigruten Expeditions?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, HX is the new brand name for Hurtigruten Expeditions, focusing specifically on their global expedition fleet." }
          },
          {
            "@type": "Question",
            "name": "Is HX Expeditions a luxury cruise line?",
            "acceptedAnswer": { "@type": "Answer", "text": "HX focuses on 'Expedition Comfort.' While the ships are modern and upscale, the focus is on science, wildlife, and exploration rather than traditional white-glove luxury." }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>HX Expeditions Cruises | Antarctica, Arctic & Galápagos Specialists</title>
        <meta name="description" content="Explore HX Expeditions (formerly Hurtigruten) with expert guidance from Trips & Ships Luxury Travel. Plan your Antarctica, Svalbard, Greenland, or Galápagos adventure today." />
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

      {/* DESTINATIONS GRID */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: '#0f1c2e', fontWeight: '700' }}>Where Curiosity Leads</h2>
            <p style={{ color: '#64748b', fontSize: '18px' }}>HX operates in the world's most pristine and remote ecosystems.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Antarctica", desc: "Whales, penguins, and the majestic silence of the seventh continent.", icon: <Ship /> },
              { title: "Svalbard", desc: "The realm of the Polar Bear under the midnight sun.", icon: <Compass /> },
              { title: "Galápagos", desc: "Darwin’s living laboratory via the MS Santa Cruz II.", icon: <Microscope /> },
              { title: "Greenland", desc: "Towering icebergs and deep Inuit cultural immersion.", icon: <Globe /> }
            ].map((d, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ color: '#3b82f6', marginBottom: '20px' }}>{d.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>{d.title}</h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIP FLEET SECTION */}
      <section style={{ padding: '100px 20px', backgroundColor: '#0f1c2e', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '25px' }}>The HX Fleet: Evolution of the Expedition</h2>
              <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '30px' }}>
                From the hybrid-powered <strong>MS Roald Amundsen</strong> to the purpose-built polar vessel <strong>MS Fram</strong>, the fleet is designed to be a silent, sustainable window into nature.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Hybrid Propulsion Systems', 'Advanced Science Centers', 'Scandi-Chic Interior Design', 'Observation Decks'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                    <CheckCircle size={20} style={{ color: '#3b82f6' }} />
                    <span style={{ fontWeight: '500' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              {/* <img src={hxShipMain} alt="HX Hybrid Ship" style={{ width: '100%', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }} /> */}
            </div>
          </div>
        </div>
      </section>

      {/* MISTAKES SLIDER (Replicating your logic) */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#3b82f6', fontWeight: '700', letterSpacing: '2px' }}>EXPERT PLANNING</span>
          <h2 style={{ fontSize: '36px', color: '#274472', margin: '15px 0' }}>Avoid Expedition Pitfalls</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
            {hxMistakes.map((m, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#fff', 
                  padding: '40px', 
                  borderRadius: '24px', 
                  flex: '1', 
                  opacity: mediActiveMistake === idx ? 1 : 0.4,
                  transform: mediActiveMistake === idx ? 'scale(1)' : 'scale(0.95)',
                  transition: 'all 0.5s ease',
                  border: '1px solid #e2e8f0',
                  display: mediActiveMistake === idx ? 'block' : (window.innerWidth < 768 ? 'none' : 'block')
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#0f1c2e' }}>{m.title}</h3>
                <p style={{ color: '#475569', lineHeight: '1.7' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="medi-authority-section">
        <div className="medi-authority-container">
          <div className="medi-prestige-plaque-wrapper">
            <div className="medi-prestige-identity-card">
              <div className="medi-prestige-seal-ring">
                <img src={profileAH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h3 className="medi-prestige-name">Angela Hughes</h3>
              <div className="medi-prestige-role-pill">Global Expedition Expert</div>
            </div>
            <div className="medi-prestige-credentials-column">
              <div className="medi-prestige-list">
                {[
                  { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                  { text: "Specialist in Polar & Galápagos travel", icon: Ship, category: "SPECIALTY" },
                  { text: "40+ years in Luxury Advisory", icon: Award, category: "EXPERIENCE" }
                ].map((acc, i) => (
                  <div key={i} className="medi-prestige-item-card">
                    <div className="medi-prestige-item-icon-box"><acc.icon size={16}/></div>
                    <div className="medi-prestige-item-content">
                      <span className="medi-prestige-item-category">{acc.category}</span>
                      <h4 className="medi-prestige-item-text">{acc.text}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="medi-faq-main-section">
        <div className="medi-faq-container">
          <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>HX Expedition FAQ</h2>
          <div className="medi-faq-list-wrapper">
            {[
              { q: "Is HX the same as Hurtigruten?", a: "Yes. HX is the global expedition brand, while Hurtigruten Norway focuses on the classic coastal route." },
              { q: "What should I pack for an Antarctica cruise?", a: "Layers are key. HX provides a complimentary high-quality expedition jacket, but you'll need thermal base layers and waterproof trousers." },
              { q: "Are excursions included?", a: "Most landings and zodiac cruises are included. Special activities like kayaking or science-led hikes may have an additional cost." }
            ].map((faq, i) => (
              <div key={i} className="medi-faq-individual-item" onClick={() => mediToggleFaq(i)}>
                <div className="medi-faq-question-row">
                  <span>{faq.q}</span>
                  <span>{mediActiveFaq === i ? "−" : "+"}</span>
                </div>
                {mediActiveFaq === i && <p className="medi-faq-answer-text">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="medi-cta-main-section" style={{ backgroundColor: '#0f1c2e' }}>
        <div className="medi-cta-content-relative">
          <h2 className="medi-cta-heading-white">Ready to Answer the Call of the Wild?</h2>
          <p className="medi-cta-paragraph-white">
            Don't leave your once-in-a-lifetime expedition to chance. Let our experts guide you to the perfect HX voyage.
          </p>
          <div className="medi-cta-button-group">
            <button className="medi-primary-cta-button">
              <Phone size={18} /> Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HXExpeditions