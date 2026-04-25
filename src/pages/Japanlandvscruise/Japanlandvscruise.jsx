import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  Clock,
  MapPin,
  Utensils,
  Award,
  Users,
  Ship,
  Compass,
  Star,
  Zap,
  Minus,
  DollarSign,
  Calendar,
  Layers,
  Moon,
  Sun,
  Heart,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Train,
  HelpCircle,
  Lightbulb,
  AlertCircle,
  Eye,
  Info,
  ChevronRight,
  Plus,
  Globe,
  Anchor,
  RotateCcw,
  CheckCircle,
  Map
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import "./Japanlandvscruise.css";

// Import Assets
// import HeroBg from "../../assets/Japan/japan_hero.png";
// import LandImg from "../../assets/Japan/japan_land.png";
// import CruiseImg from "../../assets/Japan/japan_cruise.png";
import AngelaImg from "../../assets/image.jpg";


import Herobg1 from "../../assets/Japanlandvscruise/Japanlandvscruise1.jpg";
import Herobg2 from "../../assets/Japanlandvscruise/Japanlandvscruise2.jpg";
import Herobg3 from "../../assets/Japanlandvscruise/Japanlandvscruise3.jpg";  




const Japanlandvscruise = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const heroImages = [Herobg1, Herobg2, Herobg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Japan Land vs Cruise: Which Is Better for Your Japan Trip?</title>
        <meta name="description" content="Deciding between a Japan land tour and a cruise? Expert Angela Hughes breaks down cultural depth vs convenience to help you choose the best way to experience Japan." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Japan Land vs Cruise: Which Is Better for Your Japan Trip?",
            "description": "Expert Angela Hughes breaks down cultural depth vs convenience to help you choose the best way to experience Japan.",
            "author": {
              "@type": "Person",
              "name": "Angela Hughes",
              "jobTitle": "CEO & Founder",
              "affiliation": {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Trips & Ships Luxury Travel"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Japan better by land or cruise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Land travel is better for most travelers due to deeper cultural immersion."
                }
              },
              {
                "@type": "Question",
                "name": "Is a Japan cruise worth it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, especially for travelers who value convenience and multi-country travel."
                }
              },
              {
                "@type": "Question",
                "name": "Should I travel Japan by train or cruise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Train-based travel is usually better for experiencing Japan."
                }
              },
              {
                "@type": "Question",
                "name": "Is a cruise good for a first trip?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It can be, but land travel is typically more immersive."
                }
              },
              {
                "@type": "Question",
                "name": "Can I combine land and cruise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, and it is often the best approach."
                }
              },
              {
                "@type": "Question",
                "name": "Do cruises visit major cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They visit nearby ports but do not provide the same depth."
                }
              },
              {
                "@type": "Question",
                "name": "Is land travel difficult?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It requires planning but is very rewarding."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best way to see Japan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A land itinerary covering Tokyo, Kyoto, and Osaka."
                }
              },
              {
                "@type": "Question",
                "name": "Are cruises cheaper?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not always. It depends on travel style and timing."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a travel advisor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Highly recommended."
                }
              },
              {
                "@type": "Question",
                "name": "How many days do I need?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10 to 14 days is ideal."
                }
              },
              {
                "@type": "Question",
                "name": "What is the biggest mistake travelers make?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing convenience over experience without understanding the trade-offs."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="japan-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`japan-hero-bg ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="japan-hero-overlay"></div>
        <div className="japan-hero-content">
          <span className="japan-hero-eyebrow">Expert Planning by Trips & Ships Luxury Travel</span>
          <h1 className="japan-h1">Japan Land vs Cruise: Which Is Better for Your Japan Trip?</h1>
          <p className="japan-hero-lead">
            Japan is not a cruise-first destination. It is a land-first destination that can include cruising.
            Most travelers think they want to see Japan. What they actually want is to feel it.
          </p>

          {readMore && (
            <div className="japan-hero-details">
              <p className="japan-hero-lead">
                If you are deciding between a land itinerary and a cruise in Japan, the real question is not which one is better. It is which one is better for how you want to experience the country.
              </p>
              <p className="japan-hero-lead">
                After living in Japan and designing custom trips there for years, I can tell you this: one gives you depth, the other gives you ease. The right choice depends on your priorities.
              </p>
            </div>
          )}

          <button 
            className="japan-hero-read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>

          <div className="japan-hero-btns">
            <a href="#planning" className="japan-btn-primary">Plan My Japan Trip</a>
          </div>
        </div>
      </section>

      {/* Intro Section - Keep only if needed, but the text is now in hero read more. 
          User said 'this is two paragraph in hero section in read more button', 
          and they were previously in this section too. I'll comment this out or remove 
          to avoid duplication, but keep the space if the user wants it. 
          Actually, I'll just remove it as it's now in the hero. */}


      {/* Expert Profile Section */}
      <section className="japan-section japan-bg-soft" id="planning">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <aside className="japan-expert-sticky">
              <div className="japan-expert-card">
                <div className="japan-expert-image-wrap">
                  <img src={AngelaImg} alt="Angela Hughes" className="japan-expert-image" />
                </div>
                <h2 className="japan-expert-name">Angela Hughes</h2>
                <span className="japan-expert-title">CEO, Trips & Ships Luxury Travel</span>
                <ul className="japan-expert-stats">
                  <li><Award size={18} className="japan-expert-icon" /> 40+ years in the travel industry</li>
                  <li><MapPin size={18} className="japan-expert-icon" /> Lived in Japan and returns regularly</li>
                  <li><Compass size={18} className="japan-expert-icon" /> Designs custom itineraries across Tokyo, Kyoto, Osaka</li>
                  <li><Users size={18} className="japan-expert-icon" /> Leads a team of 140+ luxury travel advisors</li>
                </ul>
              </div>
            </aside>

            <div className="japan-expert-content">
              <h2 className="japan-h2">Plan Your Japan Trip With an Expert</h2>
              <p className="japan-section-p">
                Japan is one of the most complex destinations in the world to plan well. The difference between a good trip and an exceptional one comes down to structure, timing, and access.
              </p>
              <div className="japan-highlight-box">
                <p className="japan-section-p">
                  "Working directly with hotels and on-the-ground partners, I ensure every detail of your Japanese journey is curated for maximum cultural immersion and luxury."
                </p>
              </div>
              <button className="japan-btn-primary">Consult With Angela</button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Question Section - Gallery Asymmetric Layout */}
      <section className="japan-section japan-bg-white" style={{ overflow: 'visible' }}>
        <div className="japan-inner">
          <div className="japan-gallery-split">
            {/* Background Accent Element */}
            <div className="japan-gallery-accent"></div>

            <div className="japan-gallery-images">
              <div className="japan-main-frame">
                 <img src={Herobg2} alt="Japan Scene" className="japan-gallery-img-main" />
                 <div className="japan-vertical-label">Editorial Insight</div>
              </div>
              <div className="japan-sub-frame">
                 <img src={Herobg3} alt="Japan Detail" className="japan-gallery-img-sub" />
              </div>
            </div>

            <div className="japan-floating-insight">
              <span className="japan-expert-tag">The Expert Verdict</span>
              <h2 className="japan-h2" style={{ marginTop: '20px', fontSize: '42px' }}>Is It Better to Travel Japan by Land or Cruise?</h2>
              
              <div className="japan-editorial-p" style={{ marginTop: '30px' }}>
                <p className="japan-section-p" style={{ color: '#ffffff' }}>
                  For most travelers, <strong>Japan is better experienced by land</strong> because it allows deeper cultural immersion, better food access, and more time in key cities like Tokyo and Kyoto.
                </p>
                <p className="japan-section-p" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  A cruise is a good option for travelers who prioritize convenience, prefer a slower pace, or want to combine Japan with other Asian destinations.
                </p>
              </div>

              <div className="japan-asymmetric-quote">
                 <p>"The choice isn't about which is better—it's about which layer of Japan you want to peel back."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Section - Enhanced UI with Feature Cards */}
      <section className="japan-section japan-bg-navy">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered" style={{ color: '#ffffff' }}>Japan Land vs Cruise (Quick Expert Answer)</h2>
          <div className="japan-choice-grid" style={{ marginTop: '60px' }}>
            <div className="japan-choice-card land">
              <h3 style={{ color: '#1a2a44' }}>Choose Land Travel if you want:</h3>
              <ul className="japan-choice-list">
                <li><CheckCircle size={22} className="japan-expert-icon" /> Cultural depth</li>
                <li><CheckCircle size={22} className="japan-expert-icon" /> Time in Tokyo, Kyoto, and Osaka</li>
                <li><CheckCircle size={22} className="japan-expert-icon" /> Better food experiences</li>
                <li><CheckCircle size={22} className="japan-expert-icon" /> Flexibility and customization</li>
                <li><CheckCircle size={22} className="japan-expert-icon" /> A stronger first trip</li>
              </ul>
            </div>
            <div className="japan-choice-card cruise">
              <h3>Choose a Cruise if you want:</h3>
              <ul className="japan-choice-list">
                <li><CheckCircle size={22} style={{ color: '#c9a84c' }} /> Simplicity</li>
                <li><CheckCircle size={22} style={{ color: '#c9a84c' }} /> A relaxed pace</li>
                <li><CheckCircle size={22} style={{ color: '#c9a84c' }} /> To unpack once</li>
                <li><CheckCircle size={22} style={{ color: '#c9a84c' }} /> A multi-country itinerary</li>
                <li><CheckCircle size={22} style={{ color: '#c9a84c' }} /> A familiar travel format</li>
              </ul>
            </div>
          </div>
          <div className="japan-inner-narrow" style={{ marginTop: '60px' }}>
            <div style={{ 
              padding: '30px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              textAlign: 'center',
              borderRadius: '2px'
            }}>
              <p className="japan-section-p" style={{ margin: 0, fontWeight: '500', color: '#ffffff' }}>
                For most first-time travelers, land travel is the better choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Second Summary */}
      <section className="japan-section japan-bg-cream">
        <div className="japan-inner-narrow" style={{ textAlign: 'center' }}>
          <h2 className="japan-h2 japan-h2-centered">If You Only Have 10 Seconds</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            <div className="japan-expert-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Zap size={24} className="japan-expert-icon" />
              <p className="japan-section-p" style={{ margin: 0 }}><strong>Choose land travel</strong> if Japan is your main focus.</p>
            </div>
            <div className="japan-expert-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Clock size={24} className="japan-expert-icon" />
              <p className="japan-section-p" style={{ margin: 0 }}><strong>Choose a cruise</strong> if you want ease and a broader Asia experience.</p>
            </div>
            <div className="japan-expert-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Star size={24} className="japan-expert-icon" />
              <p className="japan-section-p" style={{ margin: 0 }}><strong>Choose both</strong> if you want the best balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Table */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Japan Land Travel vs Cruise at a Glance</h2>
          <div className="japan-table-container">
            <table className="japan-comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Land Travel</th>
                  <th>Cruise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Depth</td>
                  <td><span className="japan-tag japan-tag-high">High</span></td>
                  <td><span className="japan-tag japan-tag-mod">Moderate</span></td>
                </tr>
                <tr>
                  <td>Convenience</td>
                  <td><span className="japan-tag japan-tag-mod">Moderate</span></td>
                  <td><span className="japan-tag japan-tag-high">High</span></td>
                </tr>
                <tr>
                  <td>Immersion</td>
                  <td><span className="japan-tag japan-tag-high">High</span></td>
                  <td><span className="japan-tag japan-tag-mod">Moderate</span></td>
                </tr>
                <tr>
                  <td>Food</td>
                  <td><span className="japan-tag japan-tag-exc">Excellent</span></td>
                  <td><span className="japan-tag japan-tag-mod">Moderate</span></td>
                </tr>
                <tr>
                  <td>Flexibility</td>
                  <td><span className="japan-tag japan-tag-high">High</span></td>
                  <td><span className="japan-tag japan-tag-mod">Low</span></td>
                </tr>
                <tr>
                  <td>Pace</td>
                  <td>Custom</td>
                  <td>Fixed</td>
                </tr>
                <tr>
                  <td>Best for first trip</td>
                  <td><span className="japan-tag japan-tag-yes">Yes</span></td>
                  <td>Sometimes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Better When Sections - Card Layout */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div style={{ marginBottom: '80px' }}>
            <h2 className="japan-h2 japan-h2-centered">When Land Is Clearly Better</h2>
            <div className="japan-trust-grid" style={{ marginTop: '40px' }}>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Users size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>First-time visitors</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>The essential introduction to Japan's core.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Calendar size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Trips under 14 days</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Maximizing every moment in key cities.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Utensils size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Food-focused</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Unrivaled access to local culinary scenes.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Map size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Cultural immersion</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Deep engagement with Japanese heritage.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="japan-h2 japan-h2-centered">When a Cruise Is Clearly Better</h2>
            <div className="japan-trust-grid" style={{ marginTop: '40px' }}>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><RotateCcw size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Repeat travelers</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Exploring regional ports and outer islands.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Globe size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Multi-country</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Seamlessly combining Japan with Asia.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Zap size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Travel ease</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>Unpack once and enjoy the journey.</p>
              </div>
              <div className="japan-trust-point">
                <div className="japan-trust-icon-box"><Anchor size={22} /></div>
                <h4 style={{ marginBottom: '10px' }}>Cruise-loyal</h4>
                <p className="japan-section-p" style={{ fontSize: '14px', marginBottom: 0 }}>For those who love the cruise lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Examples Section */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">What the Itineraries Look Like</h2>
          <div className="japan-choice-grid" style={{ marginTop: '60px' }}>
            <div className="japan-choice-card land">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Calendar size={28} className="japan-expert-icon" />
                <h3 style={{ margin: 0, color: '#1a2a44' }}>What a Japan Land Trip Looks Like</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Check size={18} className="japan-expert-icon" /> 3 nights in Tokyo</li>
                <li><Check size={18} className="japan-expert-icon" /> 3 nights in Kyoto</li>
                <li><Check size={18} className="japan-expert-icon" /> 2 nights in Hakone</li>
                <li><Check size={18} className="japan-expert-icon" /> 2 nights in Osaka</li>
              </ul>
              <p className="japan-section-p" style={{ fontSize: '16px', marginTop: '20px' }}>
                This structure allows you to move through the country and experience it properly.
                If you are planning your route, start with our first-time Japan itinerary.
              </p>
            </div>
            <div className="japan-choice-card cruise">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Ship size={28} style={{ color: '#60a5fa' }} />
                <h3 style={{ margin: 0 }}>What a Japan Cruise Itinerary Looks Like</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Tokyo embarkation</li>
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Shimizu</li>
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Osaka or Kobe</li>
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Hiroshima</li>
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Busan, South Korea</li>
                <li><Check size={18} style={{ color: '#60a5fa' }} /> Return to Tokyo</li>
              </ul>
              <p className="japan-section-p" style={{ fontSize: '16px', marginTop: '20px', color: 'rgba(255,255,255,0.8)' }}>
                Cruises provide structure but limit depth in each destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section - Improved Grid UI */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Quick Cost Comparison</h2>
          <div className="japan-choice-grid" style={{ marginTop: '60px' }}>
            <div className="japan-expert-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <div className="japan-trust-icon-box" style={{ margin: 0 }}><DollarSign size={24} /></div>
                <h4 style={{ margin: 0, fontSize: '22px', fontFamily: 'Playfair Display' }}>Land Travel</h4>
              </div>
              <p className="japan-section-p" style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#1a2a44' }}>
                $6,000 – $12,000 <span style={{ fontSize: '14px', fontWeight: '400', opacity: 0.6 }}>/ person</span>
              </p>
              <p className="japan-section-p" style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>
                Land gives you complete control over your budget and experiences.
              </p>
            </div>
            <div className="japan-expert-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                <div className="japan-trust-icon-box" style={{ margin: 0 }}><Layers size={24} /></div>
                <h4 style={{ margin: 0, fontSize: '22px', fontFamily: 'Playfair Display' }}>Cruise Travel</h4>
              </div>
              <p className="japan-section-p" style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#1a2a44' }}>
                $5,000 – $15,000+ <span style={{ fontSize: '14px', fontWeight: '400', opacity: 0.6 }}>/ person</span>
              </p>
              <p className="japan-section-p" style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>
                Cruises offer predictable, bundled pricing with luxury inclusions.
              </p>
            </div>
          </div>
          <div className="japan-inner-narrow" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p className="japan-section-p" style={{ fontStyle: 'italic' }}>
              For a deeper breakdown, see our Japan travel cost guide.
            </p>
          </div>
        </div>
      </section>

      {/* Gain and Miss Section */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">What You Gain and What You Miss</h2>
          <div className="japan-choice-grid" style={{ marginTop: '60px' }}>
            <div className="japan-choice-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#1a2a44' }}>On land, you gain:</h3>
              <ul className="japan-choice-list">
                <li><Check size={18} className="japan-expert-icon" /> Late-night Tokyo</li>
                <li><Check size={18} className="japan-expert-icon" /> Kyoto early mornings</li>
                <li><Check size={18} className="japan-expert-icon" /> Street food in Osaka</li>
                <li><Check size={18} className="japan-expert-icon" /> Ryokan stays and cultural immersion</li>
              </ul>
            </div>
            <div className="japan-choice-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#1a2a44' }}>On a cruise, you gain:</h3>
              <ul className="japan-choice-list">
                <li><Check size={18} className="japan-expert-icon" /> Ease</li>
                <li><Check size={18} className="japan-expert-icon" /> Structure</li>
                <li><Check size={18} className="japan-expert-icon" /> Simplicity</li>
              </ul>
              <div style={{ marginTop: '30px', padding: '20px', background: '#fff5f5', borderRadius: '8px', borderLeft: '4px solid #f87171' }}>
                <p style={{ margin: 0, fontSize: '16px', color: '#991b1b', fontWeight: '500' }}>
                  But you may miss the small moments that define Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Cruises Don't Show You */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div className="japan-expert-content">
              <h2 className="japan-h2">What Cruises Don’t Show You</h2>
              <p className="japan-section-p">Cruises give you access to ports, not the full experience of Japan.</p>
              <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="japan-trust-icon-box" style={{ margin: 0, flexShrink: 0 }}><Moon size={20} /></div>
                  <p className="japan-section-p" style={{ margin: 0 }}>At night in Tokyo</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="japan-trust-icon-box" style={{ margin: 0, flexShrink: 0 }}><Sun size={20} /></div>
                  <p className="japan-section-p" style={{ margin: 0 }}>Early morning in Kyoto</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="japan-trust-icon-box" style={{ margin: 0, flexShrink: 0 }}><MapPin size={20} /></div>
                  <p className="japan-section-p" style={{ margin: 0 }}>In neighborhoods far from cruise ports</p>
                </div>
              </div>
              <div className="japan-highlight-box" style={{ marginTop: '40px' }}>
                <p className="japan-section-p" style={{ fontWeight: '600', fontStyle: 'italic' }}>Many of the most meaningful moments happen in these times and places.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Selection Guides: Who Should Choose */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div>
              <h2 className="japan-h2">Who Should Choose Land Travel</h2>
              <ul className="japan-choice-list" style={{ marginTop: '30px' }}>
                <li><Check size={20} className="japan-expert-icon" /> First-time visitors</li>
                <li><Check size={20} className="japan-expert-icon" /> Food lovers</li>
                <li><Heart size={20} className="japan-expert-icon" /> Couples and honeymooners</li>
                <li><Check size={20} className="japan-expert-icon" /> Travelers seeking depth</li>
                <li><Check size={20} className="japan-expert-icon" /> Those wanting flexibility</li>
              </ul>
            </div>
            <div>
              <h2 className="japan-h2">Who Should Choose a Japan Cruise</h2>
              <ul className="japan-choice-list" style={{ marginTop: '30px' }}>
                <li><Ship size={20} style={{ color: '#60a5fa' }} /> Travelers who love cruising</li>
                <li><Ship size={20} style={{ color: '#60a5fa' }} /> Those wanting minimal logistics</li>
                <li><Ship size={20} style={{ color: '#60a5fa' }} /> Travelers combining multiple countries</li>
                <li><Ship size={20} style={{ color: '#60a5fa' }} /> Those who prefer a slower pace</li>
              </ul>
            </div>
          </div>

          <div className="japan-expert-grid" style={{ marginTop: '80px' }}>
            <div>
              <h2 className="japan-h2">Who Should Not Choose a Japan Cruise</h2>
              <ul className="japan-choice-list" style={{ marginTop: '30px' }}>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> Travelers seeking deep immersion</li>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> First-time visitors with limited time</li>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> Food-focused travelers</li>
              </ul>
            </div>
            <div>
              <h2 className="japan-h2">Who Should Not Choose Land Travel</h2>
              <ul className="japan-choice-list" style={{ marginTop: '30px' }}>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> Travelers who want minimal planning</li>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> Those who prefer structured travel</li>
                <li><XCircle size={20} style={{ color: '#ef4444' }} /> Travelers strongly committed to cruising</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Land Travel Wins */}
      <section className="japan-section japan-bg-navy" style={{ textAlign: 'center' }}>
        <div className="japan-inner-narrow">
          <h2 className="japan-h2" style={{ color: '#ffffff' }}>Why Land Travel Usually Wins in Japan</h2>
          <p className="japan-section-p" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '30px' }}>
            Japan is designed for land travel. Its trains, neighborhoods, and pacing are meant to be experienced on the ground.
          </p>
          <div style={{ marginTop: '40px', padding: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '28px', color: '#ffffff', fontFamily: 'Playfair Display', margin: 0 }}>
              Cruises show you Japan. Land travel lets you experience it.
            </h3>
          </div>
        </div>
      </section>

      {/* Cost/Expense Comparison Deep Dive */}
      <section className="japan-section japan-bg-cream">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div className="japan-expert-content">
              <h2 className="japan-h2">Is Japan Land Travel or Cruise More Expensive?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <TrendingUp size={24} className="japan-expert-icon" />
                  <div>
                    <p className="japan-section-p" style={{ fontWeight: '600', margin: 0 }}>Land travel is flexible and scalable</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Zap size={24} className="japan-expert-icon" />
                  <div>
                    <p className="japan-section-p" style={{ fontWeight: '600', margin: 0 }}>Cruises offer predictable pricing</p>
                  </div>
                </div>
              </div>
              <p className="japan-section-p" style={{ marginTop: '30px' }}>
                Land typically delivers better value for Japan-focused trips, while cruises work well for multi-country itineraries.
              </p>
              <p className="japan-section-p">
                Timing also matters. See our best time to visit Japan guide for more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final Verdict for First-Timers */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Land vs Cruise for First-Time Travelers</h2>
          <div className="japan-inner-narrow" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p className="japan-section-p" style={{ fontSize: '20px', fontWeight: '500' }}>
              For most first-time visitors, land travel is the better option.
            </p>
            <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '12px', marginTop: '40px' }}>
              <p className="japan-section-p" style={{ fontWeight: '600', color: '#1a2a44', marginBottom: '20px' }}>It allows access to:</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: '#274472', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                  <p style={{ margin: 0, fontWeight: '600' }}>Tokyo</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: '#274472', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                  <p style={{ margin: 0, fontWeight: '600' }}>Kyoto</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: '#274472', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                  <p style={{ margin: 0, fontWeight: '600' }}>Osaka</p>
                </div>
              </div>
              <p className="japan-section-p" style={{ marginTop: '40px', color: '#64748b' }}>Cultural experiences beyond port stops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Worried About Complexity */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div className="japan-expert-content">
              <h2 className="japan-h2">What If I’m Worried Land Travel Is Too Complicated?</h2>
              <p className="japan-section-p">
                Japan can feel complex to plan, but when structured correctly, it runs smoother than almost anywhere in the world.
              </p>
              <div className="japan-highlight-box" style={{ marginTop: '30px' }}>
                <p className="japan-section-p" style={{ fontWeight: '600' }}>
                  The key is not avoiding land travel. It is planning it properly.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={80} style={{ color: '#274472', opacity: 0.2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* The Smartest Way (Hybrid) */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">The Smartest Way to Do Japan for Many Travelers</h2>
          <div className="japan-inner-narrow" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p className="japan-section-p" style={{ fontSize: '18px' }}>For many travelers, the best structure is:</p>
            <div className="japan-choice-grid" style={{ marginTop: '40px' }}>
              <div className="japan-expert-card" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'Playfair Display', marginBottom: '15px' }}>Land first</h3>
                <p className="japan-section-p" style={{ margin: 0 }}>(Tokyo and Kyoto)</p>
              </div>
              <div className="japan-expert-card" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'Playfair Display', marginBottom: '15px' }}>Cruise second</h3>
                <p className="japan-section-p" style={{ margin: 0 }}>(regional exploration)</p>
              </div>
            </div>
            <div style={{ marginTop: '40px', padding: '30px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
              <p className="japan-section-p" style={{ margin: 0, fontWeight: '600', color: '#0369a1' }}>
                This gives you depth first, then ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mistakes Section */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Mistakes That Can Impact Your Trip</h2>
          <div className="japan-choice-grid" style={{ marginTop: '60px' }}>
            <div className="japan-trust-point" style={{ textAlign: 'left' }}>
              <AlertCircle size={24} style={{ color: '#ef4444', marginBottom: '20px' }} />
              <p className="japan-section-p" style={{ fontWeight: '600' }}>Choosing convenience over experience</p>
            </div>
            <div className="japan-trust-point" style={{ textAlign: 'left' }}>
              <AlertCircle size={24} style={{ color: '#ef4444', marginBottom: '20px' }} />
              <p className="japan-section-p" style={{ fontWeight: '600' }}>Underestimating how much time cities require</p>
            </div>
            <div className="japan-trust-point" style={{ textAlign: 'left' }}>
              <AlertCircle size={24} style={{ color: '#ef4444', marginBottom: '20px' }} />
              <p className="japan-section-p" style={{ fontWeight: '600' }}>Not planning enough land time</p>
            </div>
            <div className="japan-trust-point" style={{ textAlign: 'left' }}>
              <AlertCircle size={24} style={{ color: '#ef4444', marginBottom: '20px' }} />
              <p className="japan-section-p" style={{ fontWeight: '600' }}>Misunderstanding cruise limitations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trends (What I See Every Year) */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div className="japan-expert-content">
              <h2 className="japan-h2">What I See With Clients Every Year</h2>
              <p className="japan-section-p">Every year, I see travelers:</p>
              <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <Eye size={20} className="japan-expert-icon" />
                  <p className="japan-section-p" style={{ margin: 0 }}>Choose cruises thinking they will fully experience Japan</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <Eye size={20} className="japan-expert-icon" />
                  <p className="japan-section-p" style={{ margin: 0 }}>Miss key experiences due to limited port time</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <Eye size={20} className="japan-expert-icon" />
                  <p className="japan-section-p" style={{ margin: 0 }}>Realize they wanted more depth</p>
                </div>
              </div>
              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
                <p className="japan-section-p" style={{ fontWeight: '600', color: '#1a2a44' }}>
                  The difference is not the destination. It is how you experience it.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '100%', minHeight: '300px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <Lightbulb size={64} style={{ color: '#f59e0b', opacity: 0.5 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Take Section */}
      <section className="japan-section japan-bg-navy" style={{ textAlign: 'center' }}>
        <div className="japan-inner-narrow">
          <h2 className="japan-h2" style={{ color: '#ffffff' }}>My Personal Take After Living in Japan</h2>
          <p className="japan-section-p" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', marginTop: '30px' }}>
            If Japan is your focus, land travel almost always delivers more.
          </p>
          <p className="japan-section-p" style={{ color: '#ffffff', fontWeight: '500', marginTop: '20px' }}>
            It allows you to move intentionally and experience the country in layers.
          </p>
        </div>
      </section>

      {/* If You Only Remember One Thing */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="japan-inner-narrow" style={{ background: '#fdfbf7', padding: '60px', borderRadius: '12px', border: '2px solid #e2e8f0', textAlign: 'center' }}>
            <h2 className="japan-h2" style={{ marginBottom: '40px' }}>If You Only Remember One Thing</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ padding: '30px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <p className="japan-section-p" style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1a2a44' }}>
                  Choose land travel if Japan is the main event.
                </p>
              </div>
              <div style={{ padding: '30px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <p className="japan-section-p" style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1a2a44' }}>
                  Choose a cruise if Japan is part of a larger journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Plan Your Japan Trip the Right Way */}
      <section className="japan-section japan-bg-cream">
        <div className="japan-inner">
          <div className="japan-expert-grid">
            <div className="japan-expert-content">
              <h2 className="japan-h2">Plan Your Japan Trip the Right Way</h2>
              <p className="japan-section-p">We help you:</p>
              <ul className="japan-choice-list" style={{ marginTop: '30px' }}>
                <li><Check size={20} className="japan-expert-icon" /> Choose the right structure</li>
                <li><Check size={20} className="japan-expert-icon" /> Avoid costly mistakes</li>
                <li><Check size={20} className="japan-expert-icon" /> Build a seamless itinerary</li>
                <li><Check size={20} className="japan-expert-icon" /> Align your trip with your goals</li>
              </ul>
              <button className="japan-btn-primary" style={{ marginTop: '40px' }}>Plan My Japan Trip</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '60px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <Award size={64} style={{ color: '#274472', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontFamily: 'Playfair Display', color: '#1a2a44' }}>Expert Guided Planning</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Go Next */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Where to Go Next</h2>
          <div className="japan-trust-grid" style={{ marginTop: '60px' }}>
            {[
              "Best Time to Visit Japan",
              "Japan Travel Cost Guide",
              "First Time Japan Itinerary",
              "Tokyo Travel Guide",
              "Kyoto Travel Guide"
            ].map((link, idx) => (
              <div key={idx} className="japan-trust-point" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <p style={{ margin: 0 }}>{link}</p>
                <ChevronRight size={18} style={{ opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">FAQ</h2>
          <div className="japan-inner-narrow" style={{ marginTop: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { q: "Is Japan better by land or cruise?", a: "Land travel is better for most travelers due to deeper cultural immersion." },
                { q: "Is a Japan cruise worth it?", a: "Yes, especially for travelers who value convenience and multi-country travel." },
                { q: "Should I travel Japan by train or cruise?", a: "Train-based travel is usually better for experiencing Japan." },
                { q: "Is a cruise good for a first trip?", a: "It can be, but land travel is typically more immersive." },
                { q: "Can I combine land and cruise?", a: "Yes, and it is often the best approach." },
                { q: "Do cruises visit major cities?", a: "They visit nearby ports but do not provide the same depth." },
                { q: "Is land travel difficult?", a: "It requires planning but is very rewarding." },
                { q: "What is the best way to see Japan?", a: "A land itinerary covering Tokyo, Kyoto, and Osaka." },
                { q: "Are cruises cheaper?", a: "Not always. It depends on travel style and timing." },
                { q: "Do I need a travel advisor?", a: "Highly recommended." },
                { q: "How many days do I need?", a: "10 to 14 days is ideal." },
                { q: "What is the biggest mistake travelers make?", a: "Choosing convenience over experience without understanding the trade-offs." }
              ].map((item, idx) => (
                <div key={idx} className="japan-expert-card" style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', background: '#274472', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 10px 0', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '700', color: '#1a2a44' }}>{item.q}</h4>
                      <p className="japan-section-p" style={{ margin: 0 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Japanlandvscruise;