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
  XCircle,
  TrendingUp,
  Train,
  HelpCircle,
  Lightbulb,
  AlertCircle,
  ChevronRight,
  Globe,
  Anchor,
  RotateCcw,
  CheckCircle,
  Map,
  Building2,
  Mountain,
  BookOpen,
  ShieldAlert,
  Route,
  Target,
  Layout,
  Search,
  Coffee,
  List,
  Landmark
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import "./Japanlandvscruise.css";
import AngelaImg from "../../assets/image.jpg";
import Herobg1 from "../../assets/Japanlandvscruise/Japanlandvscruise1.jpg";
import Herobg2 from "../../assets/Japanlandvscruise/Japanlandvscruise2.jpg";
import Herobg3 from "../../assets/Japanlandvscruise/Japanlandvscruise3.jpg";

/* ===== INLINE FAQ ACCORDION (BEST TIME JAPAN STYLE) ===== */
const BTJapanFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="BTJapan_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className="BTJapan_faq_item"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="BTJapan_faq_question">
            <span>{item.q}</span>
            <span className="BTJapan_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="BTJapan_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

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

          <div className={`japan-hero-details ${readMore ? 'expanded' : ''}`}>
            <p className="japan-hero-lead">
              If you are deciding between a land itinerary and a cruise in Japan, the real question is not which one is better. It is which one is better for how you want to experience the country.
            </p>
            <p className="japan-hero-lead">
              After living in Japan and designing custom trips there for years, I can tell you this: one gives you depth, the other gives you ease. The right choice depends on your priorities.
            </p>
          </div>

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
              <h2 className="japan-h2-expert">Plan Your Japan Trip With an Expert</h2>
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
      <section className="japan-section japan-bg-white jlc-overflow-visible">
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
              <h2 className="japan-h2 jlc-insight-title">Is It Better to Travel Japan by Land or Cruise?</h2>

              <div className="japan-editorial-p jlc-insight-p-wrap">
                <p className="japan-section-p jlc-text-white">
                  For most travelers, <strong>Japan is better experienced by land</strong> because it allows deeper cultural immersion, better food access, and more time in key cities like Tokyo and Kyoto.
                </p>
                <p className="japan-section-p jlc-text-white-muted">
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
          <h2 className="japan-h2 japan-h2-centered jlc-text-white">Japan Land vs Cruise </h2>
          <div className="japan-choice-grid jlc-mt-60">
            <div className="japan-choice-card land">
              <h3 className="jlc-text-navy-dark">Choose Land Travel if you want:</h3>
              <ul className="japan-choice-list">
                <li><BookOpen size={22} className="japan-expert-icon" /> Cultural depth</li>
                <li><MapPin size={22} className="japan-expert-icon" /> Time in Tokyo, Kyoto, and Osaka</li>
                <li><Utensils size={22} className="japan-expert-icon" /> Better food experiences</li>
                <li><Compass size={22} className="japan-expert-icon" /> Flexibility and customization</li>
                <li><Star size={22} className="japan-expert-icon" /> A stronger first trip</li>
              </ul>
            </div>
            <div className="japan-choice-card cruise">
              <h3>Choose a Cruise if you want:</h3>
              <ul className="japan-choice-list">
                <li><Zap size={22} className="jlc-text-white" /> Simplicity</li>
                <li><Clock size={22} className="jlc-text-white" /> A relaxed pace</li>
                <li><Layers size={22} className="jlc-text-white" /> To unpack once</li>
                <li><Globe size={22} className="jlc-text-white" /> A multi-country itinerary</li>
                <li><Ship size={22} className="jlc-text-white" /> A familiar travel format</li>
              </ul>
            </div>
          </div>
          <div className="japan-inner-narrow jlc-mt-60">
            <div className="jlc-summary-box">
              <p className="japan-section-p jlc-summary-text">
                For most first-time travelers, land travel is the better choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Second Summary */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner-narrow jlc-text-center">
          <h2 className="japan-h2 japan-h2-centered">If You Only Have 10 Seconds</h2>
          <div className="jlc-summary-list">
            <div className="japan-expert-card jlc-summary-item">
              <Zap size={24} className="japan-expert-icon" />
              <p className="japan-section-p jlc-m-0"><strong>Choose land travel</strong> if Japan is your main focus.</p>
            </div>
            <div className="japan-expert-card jlc-summary-item">
              <Clock size={24} className="japan-expert-icon" />
              <p className="japan-section-p jlc-m-0"><strong>Choose a cruise</strong> if you want ease and a broader Asia experience.</p>
            </div>
            <div className="japan-expert-card jlc-summary-item">
              <Star size={24} className="japan-expert-icon" />
              <p className="japan-section-p jlc-m-0"><strong>Choose both</strong> if you want the best balance.</p>
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

      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">When Land Is Clearly Better</h2>
          <div className="japan-trust-grid jlc-mt-40">
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Users size={22} /></div>
              <h4 className="jlc-mb-10">First-time visitors</h4>
              <p className="japan-section-p jlc-stat-p">The essential introduction to Japan's core.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Calendar size={22} /></div>
              <h4 className="jlc-mb-10">Trips under 14 days</h4>
              <p className="japan-section-p jlc-stat-p">Maximizing every moment in key cities.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Utensils size={22} /></div>
              <h4 className="jlc-mb-10">Food-focused</h4>
              <p className="japan-section-p jlc-stat-p">Unrivaled access to local culinary scenes.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Map size={22} /></div>
              <h4 className="jlc-mb-10">Cultural immersion</h4>
              <p className="japan-section-p jlc-stat-p">Deep engagement with Japanese heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">When a Cruise Is Clearly Better</h2>
          <div className="japan-trust-grid jlc-mt-40">
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><RotateCcw size={22} /></div>
              <h4 className="jlc-mb-10">Repeat travelers</h4>
              <p className="japan-section-p jlc-stat-p">Exploring regional ports and outer islands.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Globe size={22} /></div>
              <h4 className="jlc-mb-10">Multi-country</h4>
              <p className="japan-section-p jlc-stat-p">Seamlessly combining Japan with Asia.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Zap size={22} /></div>
              <h4 className="jlc-mb-10">Travel ease</h4>
              <p className="japan-section-p jlc-stat-p">Unpack once and enjoy the journey.</p>
            </div>
            <div className="japan-trust-point">
              <div className="japan-trust-icon-box"><Anchor size={22} /></div>
              <h4 className="jlc-mb-10">Cruise-loyal</h4>
              <p className="japan-section-p jlc-stat-p">For those who love the cruise lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Examples Section */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">What the Itineraries Look Like</h2>
          <div className="japan-choice-grid jlc-mt-60">
            <div className="japan-choice-card land">
              <div className="jlc-card-header-flex">
                <Calendar size={28} className="japan-expert-icon-calender" />
                <h3 className="jlc-card-header-title-land">What a Japan Land Trip Looks Like</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Zap size={18} className="japan-expert-icon" /> 3 nights in Tokyo</li>
                <li><Sun size={18} className="japan-expert-icon" /> 3 nights in Kyoto</li>
                <li><Mountain size={18} className="japan-expert-icon" /> 2 nights in Hakone</li>
                <li><Utensils size={18} className="japan-expert-icon" /> 2 nights in Osaka</li>
              </ul>
              <p className="japan-section-p jlc-card-p">
                This structure allows you to move through the country and experience it properly.
                If you are planning your route, start with our first-time Japan itinerary.
              </p>
            </div>
            <div className="japan-choice-card cruise">
              <div className="jlc-card-header-flex">
                <Ship size={28} className="jlc-text-blue-light-japan-cruise" />
                <h3 className="jlc-m-0">What a Japan Cruise Itinerary Looks Like</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Anchor size={18} className="jlc-text-blue-light" /> Tokyo embarkation</li>
                <li><Mountain size={18} className="jlc-text-blue-light" /> Shimizu</li>
                <li><Utensils size={18} className="jlc-text-blue-light" /> Osaka or Kobe</li>
                <li><Map size={18} className="jlc-text-blue-light" /> Hiroshima</li>
                <li><Globe size={18} className="jlc-text-blue-light" /> Busan, South Korea</li>
                <li><RotateCcw size={18} className="jlc-text-blue-light" /> Return to Tokyo</li>
              </ul>
              <p className="japan-section-p jlc-card-p-cruise">
                Cruises provide structure but limit depth in each destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section - Improved Grid UI */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Quick Cost Comparison</h2>
          <div className="japan-choice-grid jlc-mt-60">
            <div className="japan-expert-card jlc-p-40">
              <div className="jlc-cost-header-flex">
                <div className="japan-trust-icon-box jlc-m-0"><DollarSign size={24} /></div>
                <h4 className="jlc-cost-title">Land Travel</h4>
              </div>
              <p className="japan-section-p jlc-cost-amount">
                $6,000 – $12,000 <span className="jlc-cost-unit">/ person</span>
              </p>
              <p className="japan-section-p jlc-cost-desc">
                Land gives you complete control over your budget and experiences.
              </p>
            </div>
            <div className="japan-expert-card jlc-p-40">
              <div className="jlc-cost-header-flex">
                <div className="japan-trust-icon-box jlc-m-0"><Layers size={24} /></div>
                <h4 className="jlc-cost-title">Cruise Travel</h4>
              </div>
              <p className="japan-section-p jlc-cost-amount">
                $5,000 – $15,000+ <span className="jlc-cost-unit">/ person</span>
              </p>
              <p className="japan-section-p jlc-cost-desc">
                Cruises offer predictable, bundled pricing with luxury inclusions.
              </p>
            </div>
          </div>
          <div className="japan-inner-narrow jlc-footer-note">
            <p className="japan-section-p jlc-italic">
              For a deeper breakdown, see our Japan travel cost guide.
            </p>
          </div>
        </div>
      </section>

      {/* Gain and Miss Section */}
      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">What You Gain and What You Miss</h2>
          <div className="japan-choice-grid jlc-mt-60">
            <div className="japan-choice-card jlc-card-light-border">
              <div className="jlc-card-header-flex">
                <MapPin size={24} className="jlc-text-navy" />
                <h3 className="jlc-text-navy-dark-m0">On land, you gain:</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Moon size={18} className="japan-expert-icon" /> Late-night Tokyo</li>
                <li><Sun size={18} className="japan-expert-icon" /> Kyoto early mornings</li>
                <li><Utensils size={18} className="japan-expert-icon" /> Street food in Osaka</li>
                <li><Coffee size={18} className="japan-expert-icon" /> Ryokan stays and cultural immersion</li>
              </ul>
            </div>
            <div className="japan-choice-card jlc-card-light-border">
              <div className="jlc-card-header-flex">
                <Ship size={24} className="jlc-text-navy" />
                <h3 className="jlc-text-navy-dark-m0">On a cruise, you gain:</h3>
              </div>
              <ul className="japan-choice-list">
                <li><Zap size={18} className="japan-expert-icon" /> Ease</li>
                <li><Layers size={18} className="japan-expert-icon" /> Structure</li>
                <li><CheckCircle size={18} className="japan-expert-icon" /> Simplicity</li>
              </ul>
              <div className="jlc-miss-note">
                <p className="japan-section-p jlc-miss-note-p">
                  But you may miss the small moments that define Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">What Cruises Don't Show You</h2>
          <p className="japan-section-p jlc-miss-intro">
            Cruises give you access to ports, not the full experience of Japan.
          </p>
          <div className="jlc-cruises-miss-grid">
            <div className="jlc-miss-card">
              <div className="jlc-miss-icon-wrap">
                <Moon size={28} />
              </div>
              <div className="jlc-miss-content">
                <h4 className="jlc-miss-title">Nighttime Tokyo</h4>
                <p className="japan-section-p jlc-m-0">
                  At night in Tokyo, the city truly comes alive — neon-lit alleys, izakayas, late-night ramen counters. Cruise ports close before the magic starts.
                </p>
              </div>
            </div>
            <div className="jlc-miss-card">
              <div className="jlc-miss-icon-wrap">
                <Sun size={28} />
              </div>
              <div className="jlc-miss-content">
                <h4 className="jlc-miss-title">Early Morning Kyoto</h4>
                <p className="japan-section-p jlc-m-0">
                  Early morning in Kyoto before crowds arrive — temples in silence, mist over the gardens — is only accessible from a land base.
                </p>
              </div>
            </div>
            <div className="jlc-miss-card">
              <div className="jlc-miss-icon-wrap">
                <MapPin size={28} />
              </div>
              <div className="jlc-miss-content">
                <h4 className="jlc-miss-title">Hidden Neighborhoods</h4>
                <p className="japan-section-p jlc-m-0">
                  In neighborhoods far from cruise ports, real daily life unfolds — covered shotengai, local cafes, and moments that never appear in guides.
                </p>
              </div>
            </div>
            <div className="jlc-miss-highlight">
              <p className="japan-section-p jlc-miss-quote">
                "Many of the most meaningful moments happen in these times and places."
              </p>
            </div>
          </div>
        </div>
      </section>




      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Who Should Choose Each Option</h2>
          <div className="jlc-who-grid">
            {/* Land Travel */}
            <div className="jlc-who-card jlc-who-land">
              <div className="jlc-who-header">
                <div className="jlc-who-icon"><Building2 size={24} /></div>
                <h3 className="jlc-who-title">Choose Land Travel</h3>
              </div>
              <ul className="jlc-who-list">
                <li><Building2 size={18} /><span>First-time visitors</span></li>
                <li><Heart size={18} /><span>Couples and honeymooners</span></li>
                <li><Utensils size={18} /><span>Food lovers</span></li>
                <li><Search size={18} /><span>Travelers seeking depth</span></li>
                <li><Compass size={18} /><span>Those wanting flexibility</span></li>
              </ul>
            </div>
            {/* Cruise */}
            <div className="jlc-who-card jlc-who-cruise">
              <div className="jlc-who-header">
                <div className="jlc-who-icon jlc-who-icon-cruise"><Ship size={24} /></div>
                <h3 className="jlc-who-title jlc-text-white">Choose a Japan Cruise</h3>
              </div>
              <ul className="jlc-who-list jlc-who-list-cruise">
                <li><Ship size={18} /><span>Travelers who love cruising</span></li>
                <li><Zap size={18} /><span>Those wanting minimal logistics</span></li>
                <li><Globe size={18} /><span>Travelers combining multiple countries</span></li>
                <li><Clock size={18} /><span>Those who prefer a slower pace</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Who Should Not Choose Each Option</h2>
          <div className="jlc-who-grid jlc-mt-48">
            <div className="jlc-not-card">
              <div className="jlc-not-header">
                <XCircle size={22} className="jlc-text-navy" />
                <h3 className="jlc-not-title">Who Should Not Choose a Japan Cruise</h3>
              </div>
              <ul className="jlc-not-list">
                <li><BookOpen size={18} className="jlc-not-list-icon-inline" /><span>Travelers seeking deep immersion</span></li>
                <li><Clock size={18} className="jlc-not-list-icon-inline" /><span>First-time visitors with limited time</span></li>
                <li><Utensils size={18} className="jlc-not-list-icon-inline" /><span>Food-focused travelers</span></li>
              </ul>
            </div>
            <div className="jlc-not-card">
              <div className="jlc-not-header">
                <XCircle size={22} className="jlc-text-navy" />
                <h3 className="jlc-not-title">Who Should Not Choose Land Travel</h3>
              </div>
              <ul className="jlc-not-list">
                <li><Layout size={18} className="jlc-not-list-icon-inline" /><span>Travelers who want minimal planning</span></li>
                <li><List size={18} className="jlc-not-list-icon-inline" /><span>Those who prefer structured travel</span></li>
                <li><Ship size={18} className="jlc-not-list-icon-inline" /><span>Travelers strongly committed to cruising</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Why Land Travel Wins */}
      <section className="japan-section japan-bg-navy jlc-text-center">
        <div className="japan-inner-narrow">
          <h2 className="japan-h2 jlc-text-white">Why Land Travel Usually Wins in Japan</h2>
          <p className="japan-section-p jlc-wins-p">
            Japan is designed for land travel. Its trains, neighborhoods, and pacing are meant to be experienced on the ground.
          </p>
          <div className="jlc-wins-box">
            <h3 className="jlc-wins-h3">
              Cruises show you Japan. Land travel lets you experience it.
            </h3>
          </div>
        </div>
      </section>






      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div className="jlc-cost-wrapper">
            <div className="jlc-cost-left">
              <span className="jlc-step-label">Cost Comparison</span>
              <h2 className="japan-h2 jlc-mt-16">Is Japan Land Travel or Cruise More Expensive?</h2>
              <p className="japan-section-p">
                Land typically delivers better value for Japan-focused trips, while cruises work well for multi-country itineraries.
              </p>
              <div className="jlc-cost-footer">
                <p className="japan-section-p jlc-cost-footer-p">
                  Timing also matters. See our best time to visit Japan guide for more.
                </p>
              </div>
            </div>
            <div className="jlc-cost-right">
              <div className="jlc-cost-point">
                <div className="jlc-cost-point-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="jlc-cost-point-text">
                  <span className="jlc-cost-point-label">Land Travel</span>
                  <p className="jlc-cost-point-title">Land travel is flexible and scalable</p>
                </div>
              </div>
              <div className="jlc-cost-point">
                <div className="jlc-cost-point-icon">
                  <Zap size={24} />
                </div>
                <div className="jlc-cost-point-text">
                  <span className="jlc-cost-point-label">Cruise Travel</span>
                  <p className="jlc-cost-point-title">Cruises offer predictable pricing</p>
                </div>
              </div>
              <div className="jlc-cost-verdict">
                <p className="japan-section-p">
                  Land typically delivers better value for Japan-focused trips, while cruises work well for multi-country itineraries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">Land vs Cruise for First-Time Travelers</h2>
          <div className="jlc-first-timer-box">
            <div className="jlc-winner-badge">The Expert Pick</div>
            <div className="jlc-ft-grid">
              <div className="jlc-ft-content">
                <h3 className="jlc-ft-title">The Better Option: Land Travel</h3>
                <p className="japan-section-p jlc-ft-p">
                  For most first-time visitors, land travel is the better option. It allows you to move deep into the heart of Japan's most iconic cities at your own pace.
                </p>
                <div className="jlc-ft-highlight">
                  <p className="japan-section-p jlc-ft-highlight-p">
                    Access cultural experiences far beyond port stops.
                  </p>
                </div>
              </div>
              <div className="jlc-ft-cities">
                <div className="jlc-city-item">
                  <div className="jlc-city-icon"><Building2 size={24} /></div>
                  <div className="jlc-city-info">
                    <h4>Tokyo</h4>
                    <p>The energy of the capital</p>
                  </div>
                </div>
                <div className="jlc-city-item">
                  <div className="jlc-city-icon"><Sun size={24} /></div>
                  <div className="jlc-city-info">
                    <h4>Kyoto</h4>
                    <p>The heart of Japanese tradition</p>
                  </div>
                </div>
                <div className="jlc-city-item">
                  <div className="jlc-city-icon"><Utensils size={24} /></div>
                  <div className="jlc-city-info">
                    <h4>Osaka</h4>
                    <p>The ultimate food destination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div className="jlc-worry-wrapper">
            <div className="jlc-worry-visual">
              <div className="jlc-worry-big-icon">
                <HelpCircle size={120} />
              </div>
              <div className="jlc-worry-stat">
                <p className="jlc-worry-stat-num">✓</p>
                <p className="jlc-worry-stat-label">Smoother than almost anywhere in the world — when structured correctly.</p>
              </div>
            </div>
            <div className="jlc-worry-content">
              <span className="jlc-step-label">Common Concern</span>
              <h2 className="japan-h2 jlc-mt-16">What If I'm Worried Land Travel Is Too Complicated?</h2>
              <p className="japan-section-p">
                Japan can feel complex to plan, but when structured correctly, it runs smoother than almost anywhere in the world.
              </p>
              <div className="jlc-worry-highlight">
                <p className="japan-section-p jlc-worry-highlight-p">
                  The key is not avoiding land travel. It is planning it properly.
                </p>
              </div>
              <div className="jlc-worry-steps">
                <div className="jlc-worry-step">
                  <div className="jlc-worry-step-num">01</div>
                  <p className="japan-section-p jlc-m-0">Start with the right structure and route</p>
                </div>
                <div className="jlc-worry-step">
                  <div className="jlc-worry-step-num">02</div>
                  <p className="japan-section-p jlc-m-0">Book hotels and key experiences early</p>
                </div>
                <div className="jlc-worry-step">
                  <div className="jlc-worry-step-num">03</div>
                  <p className="japan-section-p jlc-m-0">Work with an expert who knows Japan deeply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Smartest Way (Hybrid) */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <h2 className="japan-h2 japan-h2-centered">The Smartest Way to Do Japan for Many Travelers</h2>
          <div className="japan-inner-narrow jlc-hybrid-intro">
            <p className="japan-section-p jlc-fs-18">For many travelers, the best structure is:</p>
            <div className="japan-choice-grid jlc-mt-40">
              <div className="japan-expert-card jlc-p-40">
                <div className="jlc-hybrid-header">
                  <Train size={24} className="jlc-text-navy" />
                  <h3 className="jlc-hybrid-title">Land first</h3>
                </div>
                <p className="japan-section-p jlc-m-0">(Tokyo and Kyoto)</p>
              </div>
              <div className="japan-expert-card jlc-p-40">
                <div className="jlc-hybrid-header">
                  <Ship size={24} className="jlc-text-navy" />
                  <h3 className="jlc-hybrid-title">Cruise second</h3>
                </div>
                <p className="japan-section-p jlc-m-0">(regional exploration)</p>
              </div>
            </div>
            <div className="jlc-hybrid-footer">
              <p className="japan-section-p jlc-hybrid-footer-p">
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
          <div className="japan-choice-grid jlc-mt-60">
            <div className="japan-trust-point-first jlc-text-left">
              <AlertCircle size={24} className="jlc-mistake-icon" />
              <p className="japan-section-p jlc-fw-600">Choosing convenience over experience</p>
            </div>
            <div className="japan-trust-point-first jlc-text-left">
              <AlertCircle size={24} className="jlc-mistake-icon" />
              <p className="japan-section-p jlc-fw-600">Underestimating how much time cities require</p>
            </div>
            <div className="japan-trust-point-first jlc-text-left">
              <AlertCircle size={24} className="jlc-mistake-icon" />
              <p className="japan-section-p jlc-fw-600">Not planning enough land time</p>
            </div>
            <div className="japan-trust-point-first jlc-text-left">
              <AlertCircle size={24} className="jlc-mistake-icon" />
              <p className="japan-section-p jlc-fw-600">Misunderstanding cruise limitations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="jlc-clients-wrapper">
            <div className="jlc-clients-left">
              <span className="jlc-step-label">Expert Observations</span>
              <h2 className="japan-h2 jlc-mt-16">What I See With Clients Every Year</h2>
              <p className="japan-section-p">Every year, I see the same patterns repeat. The difference is not the destination. It is how you experience it.</p>
              <div className="jlc-clients-verdict">
                <p className="japan-section-p jlc-clients-verdict-p">
                  "The difference is not the destination. It is how you experience it."
                </p>
              </div>
            </div>
            <div className="jlc-clients-right">
              <div className="jlc-observation-card">
                <div className="jlc-obs-num">01</div>
                <div className="jlc-obs-icon"><Search size={20} /></div>
                <p className="japan-section-p jlc-m-0">Choose cruises thinking they will fully experience Japan</p>
              </div>
              <div className="jlc-observation-card">
                <div className="jlc-obs-num">02</div>
                <div className="jlc-obs-icon"><Clock size={20} /></div>
                <p className="japan-section-p jlc-m-0">Miss key experiences due to limited port time</p>
              </div>
              <div className="jlc-observation-card">
                <div className="jlc-obs-num">03</div>
                <div className="jlc-obs-icon"><TrendingUp size={20} /></div>
                <p className="japan-section-p jlc-m-0">Realize they wanted more depth</p>
              </div>
              <div className="jlc-obs-lightbulb">
                <Lightbulb size={32} className="jlc-text-amber" />
                <p className="japan-section-p jlc-m-0">Understanding the trade-offs before you book changes everything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Personal Take Section */}
      <section className="japan-section japan-bg-navy jlc-text-center">
        <div className="japan-inner-narrow">
          <h2 className="japan-h2 jlc-text-white">My Personal Take <br /> After Living in Japan</h2>
          <p className="japan-section-p jlc-take-p1">
            If Japan is your focus, land travel almost always delivers more.
          </p>
          <p className="japan-section-p jlc-take-p2">
            It allows you to move intentionally and experience the country in layers.
          </p>
        </div>
      </section>

      {/* If You Only Remember One Thing */}
      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="japan-inner-narrow jlc-remember-box">
            <h2 className="japan-h2 jlc-mb-40">If You Only Remember One Thing</h2>
            <div className="jlc-remember-list">
              <div className="jlc-remember-item">
                <p className="japan-section-p jlc-remember-text">
                  Choose land travel if Japan is the main event.
                </p>
              </div>
              <div className="jlc-remember-item">
                <p className="japan-section-p jlc-remember-text">
                  Choose a cruise if Japan is part of a larger journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-soft">
        <div className="japan-inner">
          <div className="jlc-plan-wrapper">
            <div className="jlc-plan-left">
              <div className="jlc-plan-award-box">
                <Award size={64} className="jlc-text-navy" />
                <h3 className="jlc-plan-award-title">Expert Guided Planning</h3>
                <p className="japan-section-p jlc-plan-award-subtitle">Trips &amp; Ships Luxury Travel</p>
                <div className="jlc-plan-badge">40+ Years Experience</div>
              </div>
            </div>
            <div className="jlc-plan-right">
              <span className="jlc-step-label">Ready to Start</span>
              <h2 className="japan-h2 jlc-mt-16">Plan Your Japan Trip the Right Way</h2>
              <p className="japan-section-p">We help you:</p>
              <ul className="jlc-plan-list">
                <li>
                  <div className="jlc-plan-list-icon"><Layout size={18} /></div>
                  <span>Choose the right structure</span>
                </li>
                <li>
                  <div className="jlc-plan-list-icon"><ShieldAlert size={18} /></div>
                  <span>Avoid costly mistakes</span>
                </li>
                <li>
                  <div className="jlc-plan-list-icon"><Route size={18} /></div>
                  <span>Build a seamless itinerary</span>
                </li>
                <li>
                  <div className="jlc-plan-list-icon"><Target size={18} /></div>
                  <span>Align your trip with your goals</span>
                </li>
              </ul>
              <button className="japan-btn-primary jlc-mt-40">Plan My Japan Trip</button>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-bg-white">
        <div className="japan-inner">
          <div className="jlc-next-header">
            <h2 className="japan-h2 japan-h2-centered">Where to Go Next</h2>
            <p className="japan-section-p jlc-next-subtitle">Continue your journey with our most popular Japan planning resources.</p>
          </div>

          <div className="jlc-next-grid">
            {[
              { title: "Best Time to Visit Japan", icon: <Calendar size={24} /> },
              { title: "Japan Travel Cost Guide", icon: <DollarSign size={24} /> },
              { title: "First Time Japan Itinerary", icon: <Map size={24} /> },
              { title: "Tokyo Travel Guide", icon: <Building2 size={24} /> },
              { title: "Kyoto Travel Guide", icon: <Landmark size={24} /> }
            ].map((item, idx) => (
              <div key={idx} className="jlc-next-step-card">
                <div className="jlc-next-step-content">
                  <div className="jlc-next-step-icon">{item.icon}</div>
                  <h3 className="jlc-next-step-title">{item.title}</h3>
                </div>
                <div className="jlc-next-step-arrow">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="BTJapan_faq_section japan-bg-soft">
        <div className="BTJapan_faq_inner">
          <h2 className="japan-h2 japan-h2-centered">Frequently Asked Questions</h2>
          <BTJapanFAQ
            items={[
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
            ]}
          />
        </div>
      </section>
    </>
  );
}

export default Japanlandvscruise;