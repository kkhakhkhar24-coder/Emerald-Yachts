// =====================================================================
// REPLACE your full EmeraldAzzurraVsEmeraldSakara.jsx with this
// =====================================================================

import React, { useEffect, useState } from "react";
import "./EmeraldAzzurraVsEmeraldSakara.css";
import Navbar from "../../components/Navbar/Navbar";
import EmeraldAzzurraVsEmeraldSakara1 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara1.jpg";
import EmeraldAzzurraVsEmeraldSakara2 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara2.jpg";
import EmeraldAzzurraVsEmeraldSakara3 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara3.jpg";
import EmeraldAzzurraVsEmeraldSakara4 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara4.jpg"
import myImage from "../../assets/image.jpg";
import { Helmet } from "react-helmet-async";

// Lucide React Icons
import {
  Users as FiUsers,
  Anchor as FiAnchor,
  Wind as FiWind,
  Map as FiMap,
  Route as MdOutlineRoute,
  BedDouble as MdOutlineKingBed,
  Layers as MdOutlineDesignServices,
  ShieldCheck as BsShieldCheck,
  TrendingUp as BsGraphUp,
  Plane as BsAirplane,
  Star as BsStarFill,
  Ship as TbYacht,
  BadgeCheck as HiOutlineBadgeCheck,
  Plus,
  Minus,
} from "lucide-react";

// ── Main Component ────────────────────────────────────────────────────
const EmeraldAzzurraVsEmeraldSakara = () => {
  const [current, setCurrent] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const faqData = [
    {
      question: "What is the difference between Emerald Azzurra and Emerald Sakara?",
      answer:
        "They are sister yachts with nearly identical onboard experiences. The main difference is itinerary and availability.",
    },
    {
      question: "Which is better, Emerald Azzurra or Emerald Sakara?",
      answer:
        "Neither is universally better. The best choice depends on itinerary, timing, and suite availability.",
    },
    {
      question: "Are Emerald Azzurra and Emerald Sakara the same ship?",
      answer:
        "They are not the same vessel but are designed with the same layout and experience.",
    },
    {
      question: "Which Emerald yacht is newer?",
      answer:
        "Emerald Sakara is newer, but the onboard experience is very similar.",
    },
    {
      question: "Do both yachts have the same suites?",
      answer:
        "Yes, both offer the same suite categories and layouts.",
    },
    {
      question: "What is the best suite on Emerald yachts?",
      answer:
        "The Owner's Suite is the top category, though many prefer Yacht Suites or Deluxe Balcony Suites for value.",
    },
    {
      question: "Is Emerald Cruises considered luxury?",
      answer:
        "Yes, Emerald is positioned in the luxury category.",
    },
    {
      question: "Is Scenic better than Emerald?",
      answer:
        "Scenic is generally more ultra-luxury, while Emerald offers strong luxury value.",
    },
    {
      question: "How many passengers are on Emerald yachts?",
      answer:
        "100 guests with approximately 76 crew.",
    },
    {
      question: "Is Emerald good for first-time luxury cruisers?",
      answer:
        "Yes, it is one of the best entry points into luxury yacht cruising.",
    },
    {
      question: "Should I use a travel advisor for Emerald Cruises?",
      answer:
        "Yes, especially for comparing itineraries and building the full experience.",
    },
    {
      question: "What destinations do Emerald yachts sail?",
      answer:
        "Mediterranean, Adriatic, Caribbean, Seychelles, and other warm-weather destinations.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const images = [
    EmeraldAzzurraVsEmeraldSakara1,
    EmeraldAzzurraVsEmeraldSakara2,
    EmeraldAzzurraVsEmeraldSakara3,
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#webpage",
        "url": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/",
        "name": "Emerald Azzurra vs Emerald Sakara: Which Emerald Yacht Is Best?",
        "headline": "Emerald Azzurra vs Emerald Sakara: Which Emerald Yacht Is Right for You?",
        "description": "Compare Emerald Azzurra vs Emerald Sakara with expert insights from Angela Hughes. Explore suites, itineraries, experience, and which Emerald yacht is right for you.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Emerald Azzurra"
          },
          {
            "@type": "Thing",
            "name": "Emerald Sakara"
          },
          {
            "@type": "Thing",
            "name": "Emerald Cruises"
          },
          {
            "@type": "Thing",
            "name": "Luxury yacht cruises"
          }
        ],
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/wp-content/uploads/2026/04/emerald-azzurra-vs-emerald-sakara.jpg"
        },
        "datePublished": "2026-04-05",
        "dateModified": "2026-04-05",
        "author": {
          "@id": "https://www.tripsandships.com/#/schema/person/angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#breadcrumb"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/wp-content/uploads/2026/04/trips-and-ships-logo.png"
        },
        "image": "https://www.tripsandships.com/wp-content/uploads/2026/04/trips-and-ships-logo.png",
        "email": "sales@tripsandships.com",
        "telephone": "+1-603-860-3274",
        "sameAs": [
          "https://www.instagram.com/tripsandships",
          "https://www.facebook.com/tripsandships",
          "https://www.linkedin.com/company/trips-and-ships-luxury-travel",
          "https://www.youtube.com/@tripsandships"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#/schema/person/angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO & Founder",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "url": "https://www.tripsandships.com/about-angela-hughes/",
        "image": "https://www.tripsandships.com/wp-content/uploads/2026/04/angela-hughes.jpg",
        "sameAs": [
          "https://www.instagram.com/tripsandships",
          "https://www.linkedin.com/in/angela-hughes",
          "https://www.youtube.com/@tripsandships"
        ],
        "description": "Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel and a luxury travel expert specializing in yacht and small-ship cruising."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Luxury Yacht Cruises",
            "item": "https://www.tripsandships.com/luxury-yacht-cruises/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Emerald Azzurra vs Emerald Sakara",
            "item": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Emerald Azzurra and Emerald Sakara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They are sister yachts with nearly identical onboard experiences. The main difference is itinerary and availability."
            }
          },
          {
            "@type": "Question",
            "name": "Which is better, Emerald Azzurra or Emerald Sakara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither is universally better. The best choice depends on itinerary, timing, and suite availability."
            }
          },
          {
            "@type": "Question",
            "name": "Are Emerald Azzurra and Emerald Sakara the same ship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They are not the same vessel but are designed with the same layout and experience."
            }
          },
          {
            "@type": "Question",
            "name": "Which Emerald yacht is newer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Emerald Sakara is newer, but the onboard experience is very similar."
            }
          },
          {
            "@type": "Question",
            "name": "Do both yachts have the same suites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, both offer the same suite categories and layouts."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best suite on Emerald yachts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Owner’s Suite is the top category, though many prefer Yacht Suites or Deluxe Balcony Suites for value."
            }
          },
          {
            "@type": "Question",
            "name": "Is Emerald Cruises considered luxury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Emerald is positioned in the luxury category."
            }
          },
          {
            "@type": "Question",
            "name": "Is Scenic better than Emerald?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scenic is generally more ultra-luxury, while Emerald offers strong luxury value."
            }
          },
          {
            "@type": "Question",
            "name": "How many passengers are on Emerald yachts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "100 guests with approximately 76 crew."
            }
          },
          {
            "@type": "Question",
            "name": "Is Emerald good for first-time luxury cruisers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is one of the best entry points into luxury yacht cruising."
            }
          },
          {
            "@type": "Question",
            "name": "Should I use a travel advisor for Emerald Cruises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, especially for comparing itineraries and building the full experience."
            }
          },
          {
            "@type": "Question",
            "name": "What destinations do Emerald yachts sail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mediterranean, Adriatic, Caribbean, Seychelles, and other warm-weather destinations."
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#article",
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#webpage"
        },
        "headline": "Emerald Azzurra vs Emerald Sakara: Which Emerald Yacht Is Right for You?",
        "description": "Compare Emerald Azzurra vs Emerald Sakara with expert insights from Angela Hughes. Explore suites, itineraries, experience, and which Emerald yacht is right for you.",
        "author": {
          "@id": "https://www.tripsandships.com/#/schema/person/angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "datePublished": "2026-04-05",
        "dateModified": "2026-04-05",
        "image": [
          "https://www.tripsandships.com/wp-content/uploads/2026/04/emerald-azzurra-vs-emerald-sakara.jpg"
        ],
        "articleSection": [
          "Luxury Yacht Cruises",
          "Emerald Cruises",
          "Ship Comparisons"
        ],
        "keywords": [
          "Emerald Azzurra vs Emerald Sakara",
          "Emerald Azzurra review",
          "Emerald Sakara review",
          "Emerald Cruises yacht comparison",
          "luxury yacht cruises"
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "VideoObject",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#video",
        "name": "Emerald Azzurra vs Emerald Sakara: What Actually Matters",
        "description": "Angela Hughes explains how to choose between Emerald Azzurra and Emerald Sakara and what actually matters when comparing these luxury yachts.",
        "thumbnailUrl": [
          "https://www.tripsandships.com/wp-content/uploads/2026/04/emerald-azzurra-vs-emerald-sakara-video-thumb.jpg"
        ],
        "uploadDate": "2026-04-05",
        "embedUrl": "https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID",
        "contentUrl": "https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/#speakable",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".quick-answer",
            ".key-takeaway",
            ".final-expert-statement"
          ]
        },
        "url": "https://www.tripsandships.com/emerald-azzurra-vs-emerald-sakara/"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Emerald Azzurra vs Emerald Sakara: Which Yacht Is Best?</title>
        <meta
          name="description"
          content="Compare Emerald Azzurra vs Emerald Sakara with expert insights from Angela Hughes. Suites, itineraries, experience, and which Emerald yacht is right for you."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="Sakara_hero_section">
        <div className="Sakara_hero_bg_wrapper">
          {images.map((img, i) => (
            <div
              key={i}
              className={`Sakara_hero_bg ${i === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="Sakara_hero_overlay" />
        <div className="Sakara_hero_content">

          <h1>Emerald Azzurra vs Emerald Sakara: Which Yacht Is Right for You?</h1>
          <p className="Sakara_hero_sub">
            These sister yachts are nearly identical onboard. The right choice
            is not the ship — it is the itinerary, suite availability, and how
            the sailing fits into your overall travel experience.
          </p>
          <div className="Sakara_hero_buttons">
            <button className="Sakara_primary_btn">
              Request My Custom Yacht Recommendation
            </button>
          </div>
          <p className="Sakara_hero_cta_sub">
            We compare sailings, suites, and alternatives based on how you actually travel.
          </p>
        </div>

        {/* Slide dots */}
      </section>

      {/* ===== AUTHORITY SECTION ===== */}
      <section className="Sakara_authority_section">
        <div className="Sakara_authority_container">

          {/* LEFT */}
          <div className="Sakara_authority_left">
            <h2 className="Sakara_authority_heading">
              Written and Reviewed by Angela Hughes
            </h2>
            <h4 className="Sakara_authority_subtext">
              CEO & Founder, Trips & Ships Luxury Travel
            </h4>
            <p className="Sakara_authority_description">
              Angela Hughes is a globally recognized luxury travel expert
              specializing in yacht and small-ship cruising. She leads a team
              of over 140 advisors and works directly with clients comparing
              Emerald, Scenic, and other luxury cruise products.
            </p>
            <div className="Sakara_authority_ticker_container">
              <div className="Sakara_authority_ticker_track">
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>Travel Weekly</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>TravelPulse</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>Insider Travel Report</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <HiOutlineBadgeCheck className="Sakara_tag_icon" />
                  <p>Travel Leaders Network Advisory Board</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsShieldCheck className="Sakara_tag_icon" />
                  <p>40+ Years in the Travel Industry</p>
                </div>
                
                {/* Duplicated for seamless loop */}
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>Travel Weekly</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>TravelPulse</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsStarFill className="Sakara_tag_icon" />
                  <p>Insider Travel Report</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <HiOutlineBadgeCheck className="Sakara_tag_icon" />
                  <p>Travel Leaders Network Advisory Board</p>
                </div>
                <div className="Sakara_authority_tag_box">
                  <BsShieldCheck className="Sakara_tag_icon" />
                  <p>40+ Years in the Travel Industry</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="Sakara_authority_right">
            <img src={myImage} alt="Angela Hughes – Trips & Ships" />
          </div>

        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section className="Sakara_video_section">
        <div className="Sakara_video_container">

          <h2 className="Sakara_video_heading">
            Emerald Azzurra vs Emerald Sakara: What Actually Matters
          </h2>
          <p className="Sakara_video_sub">
            These yachts are nearly identical. The mistake most travelers make
            is choosing based on the ship instead of the itinerary. Here's how
            we guide clients to make the right decision.
          </p>
          <div className="Sakara_video_wrapper">
            <video
              className="Sakara_video_player"
              autoPlay
              loop
              muted
              controls
              playsInline
              poster={EmeraldAzzurraVsEmeraldSakara1}
            >
              <source src="/Emerald - Yacht - 15 sec - CBS.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ===== WHY THIS COMPARISON MATTERS ===== */}
      <section className="Sakara_why_section">
        <div className="Sakara_why_container">

          <h2 className="Sakara_why_heading">Why This Comparison Matters?</h2>
          <p className="Sakara_why_intro">
            If you are searching Emerald Azzurra vs Emerald Sakara, you are
            already in a different category of traveler. You are not looking
            for a cruise. You are looking for a curated luxury experience.
          </p>
          <div className="Sakara_why_cards">
            <div className="Sakara_why_card">
              <FiUsers className="Sakara_why_icon" />
              <h4>100 Guests</h4>
            </div>
            <div className="Sakara_why_card">
              <FiAnchor className="Sakara_why_icon" />
              <h4>Smaller Ports & Harbors</h4>
            </div>
            <div className="Sakara_why_card">
              <FiWind className="Sakara_why_icon" />
              <h4>Relaxed Yacht Atmosphere</h4>
            </div>
            <div className="Sakara_why_card">
              <FiMap className="Sakara_why_icon" />
              <h4>More Immersive Travel</h4>
            </div>
          </div>
          <div className="Sakara_why_note">
            <p>The mistake most travelers make is trying to compare these like traditional cruise ships. That is not how this decision works.</p>
          </div>
        </div>
      </section>

      {/* ===== SIDE BY SIDE COMPARISON ===== */}
      <section className="Sakara_compare_section">
        <div className="Sakara_compare_container">
          <h2 className="Sakara_compare_heading">Emerald Azzurra vs Emerald Sakara</h2>
          <div className="Sakara_compare_table_wrapper">
            <table className="Sakara_compare_table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Emerald Azzurra</th>
                  <th>Emerald Sakara</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Guests", "100", "100"],
                  ["Crew", "76", "76"],
                  ["Suites", "Identical", "Identical"],
                  ["Dining", "Identical", "Identical"],
                  ["Experience", "Identical", "Identical"],
                ].map(([cat, a, b], i) => (
                  <tr key={i}>
                    <td>{cat}</td>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Sakara_compare_takeaway">
            <h4>Key Takeaway</h4>
            <p>There is no meaningful onboard difference that should drive your decision.</p>
          </div>
        </div>
      </section>

      {/* ===== WHAT ACTUALLY MATTERS ===== */}
      <section className="Sakara_matters_section">
        <div className="Sakara_matters_container">
          <h2 className="Sakara_matters_heading">What Actually Matters?</h2>
          <div className="Sakara_matters_grid">
            <div className="Sakara_matters_card">
              <div className="Sakara_matters_number">01</div>
              <MdOutlineRoute className="Sakara_matters_icon" />
              <h4>Itinerary Strategy</h4>
              <p>The ship does not define the trip. The itinerary does. We evaluate port quality, flow of the route, time in destination, seasonality, crowds, and access.</p>
            </div>
            <div className="Sakara_matters_card">
              <div className="Sakara_matters_number">02</div>
              <MdOutlineKingBed className="Sakara_matters_icon" />
              <h4>Suite Strategy</h4>
              <p>The best suites sell out early on both yachts. The real question is whether the right suite is available on the right sailing.</p>
            </div>
            <div className="Sakara_matters_card">
              <div className="Sakara_matters_number">03</div>
              <MdOutlineDesignServices className="Sakara_matters_icon" />
              <h4>Full Trip Design</h4>
              <p>Your cruise is only part of the experience. We design pre-cruise hotels, post-cruise extensions, air strategy, transfers, and shore experience planning.</p>
            </div>
          </div>
          <div className="Sakara_matters_quote">
            <p className="Sakara_quote_text">"Our clients don't choose between these yachts based on the ship. They choose based on the experience we build around it."</p>
            <p className="Sakara_quote_author">— Angela Hughes</p>
          </div>
        </div>
      </section>

      {/* ===== WHO EACH YACHT IS BEST FOR ===== */}
      <section className="Sakara_bestfor_section">
        <div className="Sakara_bestfor_container">
          <h2 className="Sakara_bestfor_heading">Who Each Yacht Is Best For?</h2>
          <div className="Sakara_bestfor_grid">
            <div className="Sakara_bestfor_card">
              <TbYacht className="Sakara_bestfor_ship_icon" />
              <h4>Emerald Azzurra Is Best If</h4>
              <ul className="Sakara_bestfor_list">
                <li>The itinerary is stronger for your goals</li>
                <li>Your dates align with available sailings</li>
                <li>The right suite is available on this vessel</li>
              </ul>
            </div>
            <div className="Sakara_bestfor_divider"><span>OR</span></div>
            <div className="Sakara_bestfor_card">
              <TbYacht className="Sakara_bestfor_ship_icon" />
              <h4>Emerald Sakara Is Best If</h4>
              <ul className="Sakara_bestfor_list">
                <li>The sailing fits your schedule better</li>
                <li>Inventory is stronger on this departure</li>
                <li>The route is more compelling for your goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUITES STRATEGY ===== */}
      <section className="Sakara_suites_section">
        <div className="Sakara_suites_container">
          <h2 className="Sakara_suites_heading">Suites Strategy</h2>
          <div className="Sakara_suites_grid">
            <div className="Sakara_suites_left">
              <h4>Suite Categories on Both Yachts</h4>
              <div className="Sakara_suite_list">
                {["Owner's Suite", "Yacht Suite", "Terrace Suite", "Deluxe Balcony Suite", "Balcony Suite", "Oceanview Stateroom"].map((s, i) => (
                  <div className="Sakara_suite_item" key={i}>
                    <MdOutlineKingBed className="Sakara_suite_react_icon" />
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="Sakara_suites_right">
              <h4>Best Suite by Traveler Type</h4>
              <div className="Sakara_suite_type_cards">
                {[
                  ["Luxury, Maximum Space", "Owner's Suite"],
                  ["High-End Balance", "Yacht Suite"],
                  ["Best Value", "Deluxe Balcony Suite"],
                ].map(([label, val], i) => (
                  <div className="Sakara_suite_type_card" key={i}>
                    <p className="Sakara_suite_type_label">{label}</p>
                    <p className="Sakara_suite_type_value">{val}</p>
                  </div>
                ))}
              </div>
              <h4 style={{ marginTop: "30px" }}>What Most Travelers Get Wrong</h4>
              <ul className="Sakara_suites_mistakes">
                <li>Over-upgrading without using the additional space</li>
                <li>Ignoring suite location within the ship</li>
                <li>Not aligning suite budget with the overall experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERALD VS SCENIC ===== */}
      <section className="Sakara_scenic_section">
        <div className="Sakara_scenic_container">
          <h2 className="Sakara_scenic_heading">Emerald vs Scenic</h2>
          <p className="Sakara_scenic_intro">Emerald and Scenic are sister brands, but they are not positioned the same.</p>
          <div className="Sakara_scenic_grid">
            <div className="Sakara_scenic_card">
              <BsGraphUp className="Sakara_scenic_icon" />
              <h4>Emerald Cruises</h4>
              <p className="Sakara_scenic_position">Luxury yacht experience with strong value</p>
              <ul className="Sakara_scenic_list">
                <li>You want a stylish luxury experience without ultra-luxury pricing</li>
                <li>You prioritize itinerary over onboard inclusions</li>
                <li>You prefer a more relaxed, uncrowded atmosphere</li>
              </ul>
              <p className="Sakara_scenic_cta_label">Best When:</p>
              <p>Strong itinerary fit, value-conscious luxury travel</p>
            </div>
            <div className="Sakara_scenic_card Sakara_scenic_card_alt">
              <BsAirplane className="Sakara_scenic_icon Sakara_scenic_icon_alt" />
              <h4>Scenic Luxury Cruises & Tours</h4>
              <p className="Sakara_scenic_position">Ultra-luxury with higher inclusions</p>
              <ul className="Sakara_scenic_list">
                <li>You want ultra-luxury positioning and service</li>
                <li>You value higher inclusions and all-inclusive experience</li>
                <li>You are less price sensitive in your decision</li>
              </ul>
              <p className="Sakara_scenic_cta_label">Best When:</p>
              <p>Maximum inclusions, ultra-luxury positioning matters most</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REAL CLIENT INSIGHT ===== */}
      <section className="Sakara_client_section">
        <div className="Sakara_client_container">
          <h2 className="Sakara_client_heading">Real Client Insight</h2>
          <div className="Sakara_client_grid">
            <div className="Sakara_client_half">
              <h4>What Clients Say</h4>
              <div className="Sakara_client_quotes">
                {["It felt like a private yacht", "The size changed how we experienced destinations", "We should have stayed longer before the cruise"].map((q, i) => (
                  <div className="Sakara_client_quote" key={i}>
                    <span className="Sakara_quote_mark">"</span>
                    <p>{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="Sakara_client_half">
              <h4>What We Would Do Differently</h4>
              <ul className="Sakara_client_list">
                <li>Always arrive at least one day early before boarding</li>
                <li>Choose itinerary over ship every single time</li>
                <li>Invest more in pre and post cruise than small suite upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WORK WITH TRIPS & SHIPS ===== */}
      <section className="Sakara_why_trips_section">
        <div className="Sakara_why_trips_container">
          <h2 className="Sakara_why_trips_heading">Why Work With Trips & Ships</h2>
          <p className="Sakara_why_trips_intro">Luxury yacht cruising is not a simple booking. Angela Hughes and the Trips & Ships Luxury Travel team help clients make the right decision from the start.</p>
          <div className="Sakara_why_trips_cards">
            <div className="Sakara_why_trips_card">
              <BsGraphUp className="Sakara_why_trips_icon" />
              <h4>Compare Emerald vs Scenic vs Alternatives</h4>
            </div>
            <div className="Sakara_why_trips_card">
              <MdOutlineRoute className="Sakara_why_trips_icon" />
              <h4>Select the Right Sailing</h4>
            </div>
            <div className="Sakara_why_trips_card">
              <MdOutlineKingBed className="Sakara_why_trips_icon" />
              <h4>Choose the Right Suite</h4>
            </div>
            <div className="Sakara_why_trips_card">
              <MdOutlineDesignServices className="Sakara_why_trips_icon" />
              <h4>Design the Full Experience</h4>
            </div>
          </div>
          <div className="Sakara_trust_statement">
            <p>Our clients are not looking for deals. They are looking for the right decision.</p>
          </div>
        </div>
      </section>

      {/* ===== MID PAGE CTA ===== */}
      <section className="Sakara_mid_cta_section" style={{
        backgroundImage: `url(${EmeraldAzzurraVsEmeraldSakara4})`, // 🔁 replace path here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px"
      }}>
        <div className="Sakara_mid_cta_overlay" />
        <div className="Sakara_mid_cta_content">
          <h2>Want Help Choosing the Right Yacht?</h2>
          <p>We will compare sailings, suites, and alternatives — built specifically around how you travel.</p>
          <div className="Sakara_mid_cta_points">
            <span><HiOutlineBadgeCheck /> Sailings</span>
            <span><HiOutlineBadgeCheck /> Suites</span>
            <span><HiOutlineBadgeCheck /> Alternatives</span>
          </div>
          <button className="Sakara_mid_cta_btn">Start My Custom Comparison</button>
        </div>
      </section>

      {/* ===== FINAL VERDICT ===== */}
      <section className="Sakara_verdict_section">
        <div className="Sakara_verdict_container">
          <h2 className="Sakara_verdict_heading">Which Is Better: Emerald Azzurra or Emerald Sakara?</h2>
          <div className="Sakara_verdict_answer">
            <h4>Neither.</h4>
            <p>They are sister yachts with nearly identical experiences. The better choice is the one that aligns with your itinerary, timing, and overall travel plan.</p>
          </div>
          <div className="Sakara_verdict_expert">
            <p className="Sakara_verdict_quote">"The biggest mistake you can make is choosing the ship first instead of the experience."</p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      {/* ===== SECTION — FAQ ===== */}
      <section className="Sakara-faq-section">
        <div className="Sakara-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="Sakara-faq-accordion">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`Sakara-faq-item ${activeFaq === index ? "Sakara-active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="Sakara-faq-question">
                  <span>{faq.question}</span>
                  <span className="Sakara-faq-icon">
                    {activeFaq === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </div>
                <div className="Sakara-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EmeraldAzzurraVsEmeraldSakara;