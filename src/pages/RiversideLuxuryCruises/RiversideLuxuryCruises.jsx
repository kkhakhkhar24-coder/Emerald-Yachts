import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./RiversideLuxuryCruises.css";
import Navbar from "../../components/Navbar/Navbar";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Star,
  Clock,
  Compass,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";
import ProfileImage from "../../assets/image.jpg";
import ImageGellery1 from "../../assets/RiversideLuxuryCruises/Riversideimage1.jpg";
import ImageGellery2 from "../../assets/RiversideLuxuryCruises/Riversideimage2.jpg";
import ImageGellery3 from "../../assets/RiversideLuxuryCruises/Riversideimage3.jpg";
import ImageGellery4 from "../../assets/RiversideLuxuryCruises/Riversideimage4.jpg";
import ImageGellery5 from "../../assets/RiversideLuxuryCruises/Riversideimage5.jpg";
import ImageGellery6 from "../../assets/RiversideLuxuryCruises/Riversideimage6.jpg";
import ImageGellery8 from "../../assets/RiversideLuxuryCruises/Riversideimage8.jpg";
import ImageGellery9 from "../../assets/RiversideLuxuryCruises/Riversideimage9.jpg";
import ImageGellery10 from "../../assets/RiversideLuxuryCruises/Riversideimage10.jpg";
import ImageGellery11 from "../../assets/RiversideLuxuryCruises/Riversideimage11.jpg";
import RiversideHeroShot from "../../assets/RiversideLuxuryCruises/RiversideLuxuryCruises.jpeg";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in river cruises, luxury cruises, safaris, and custom global itineraries.",
      sameAs: [
        "https://www.instagram.com/tripsandships",
        "https://www.linkedin.com/company/trips-and-ships-luxury-travel",
      ],
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "Luxury travel expert with over 40 years of experience specializing in river cruises, luxury cruises, and global travel planning.",
      url: "https://www.tripsandships.com",
      sameAs: [
        "https://www.linkedin.com/in/angela-hughes",
        "https://www.instagram.com/tripsandships",
      ],
    },
    {
      "@type": "WebPage",
      name: "Riverside Luxury Cruises Review, Pricing, Ships and Expert Guide",
      url: "https://www.tripsandships.com/riverside-luxury-cruises",
      description:
        "Expert guide to Riverside Luxury Cruises including pricing, ships, itineraries, and comparisons.",
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com",
      },
    },
    {
      "@type": "Article",
      headline:
        "Riverside Luxury Cruises Review, Pricing, Ships and Expert Guide",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
        logo: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/logo.png",
        },
      },
      datePublished: "2026-01-01",
      dateModified: "2026-01-01",
      mainEntityOfPage:
        "https://www.tripsandships.com/riverside-luxury-cruises",
      description:
        "Comprehensive expert guide to Riverside Luxury Cruises including pricing, ships, itineraries, and comparisons.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Riverside Luxury Cruises known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside Luxury Cruises is known for spacious ships and boutique luxury service built on the former Crystal river cruise fleet.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a Riverside river cruise cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing typically ranges from $4,000 to over $10,000 per person depending on suite category and itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "Is Riverside considered a luxury river cruise line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Riverside is considered a boutique luxury river cruise line offering more space and refinement than most premium brands.",
          },
        },
        {
          "@type": "Question",
          name: "What rivers does Riverside sail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside sails the Danube, Rhine, and Main rivers in Europe.",
          },
        },
        {
          "@type": "Question",
          name: "What ships are in the Riverside fleet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fleet includes Riverside Mozart, Riverside Debussy, and Riverside Ravel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Riverside all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside includes many core elements but is not as fully all-inclusive as some ultra-luxury competitors.",
          },
        },
        {
          "@type": "Question",
          name: "How does Riverside compare to Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside offers more space and a boutique experience, while Viking operates at a larger scale with more standardized offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Is Riverside better than AmaWaterways?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on travel style. Riverside focuses on space and refinement, while AmaWaterways offers more structured programming.",
          },
        },
        {
          "@type": "Question",
          name: "Who should choose Riverside river cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside is best for experienced travelers and luxury clients seeking a quieter and more refined river cruise experience.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included on Riverside?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some excursions are included, but offerings vary by itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Riverside different from other river cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside stands out for larger ships, a boutique atmosphere, and elevated service compared to traditional river cruise brands.",
          },
        },
        {
          "@type": "Question",
          name: "Is Riverside worth the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers prioritizing space, service, and a refined experience, Riverside is considered an excellent value in the luxury segment.",
          },
        },
      ],
    },
  ],
};

// FAQ Component
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is Riverside Luxury Cruises known for",
      a: "Riverside Luxury Cruises is known for spacious ships and boutique luxury service.",
    },
    {
      q: "How much does a Riverside river cruise cost",
      a: "$4,000 to $10,000+ depending on suite and itinerary.",
    },
    {
      q: "Is Riverside a luxury river cruise line",
      a: "Yes, it is positioned as boutique luxury.",
    },
    {
      q: "What rivers does Riverside sail",
      a: "Danube, Rhine, and Main.",
    },
    {
      q: "What ships are in the fleet",
      a: "Mozart, Debussy, and Ravel.",
    },
    {
      q: "Is Riverside all-inclusive",
      a: "Partially, but not fully all-inclusive.",
    },
    {
      q: "How does it compare to Viking",
      a: "More space and boutique experience than Viking River Cruises.",
    },
    {
      q: "Is it better than AmaWaterways",
      a: "Depends on preference; Riverside is quieter and more refined than AmaWaterways.",
    },
    {
      q: "Who should choose Riverside",
      a: "Experienced luxury travelers.",
    },
    {
      q: "Are excursions included",
      a: "Some are included; varies by itinerary.",
    },
    {
      q: "What makes it different",
      a: "Space, service, boutique feel.",
    },
    {
      q: "Is it worth it",
      a: "Yes for travelers prioritizing experience.",
    },
  ];

  return (
    <div className="riv-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`riv-faq-item${open === i ? " riv-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="riv-faq-q">
            <span>{item.q}</span>
            <span className="riv-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="riv-faq-a">
              <div className="riv-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const RiversideLuxuryCruises = () => {
  const [showQuickTake, setShowQuickTake] = useState(false);

  return (
    <div className="riv_page_main_container">
      {/* SEO & Schema */}
      <Helmet>
        <title>
          Riverside Luxury Cruises Review, Pricing, Ships and Expert Guide
        </title>
        <meta
          name="description"
          content="Riverside Luxury Cruises offers one of Europe's most refined river cruise experiences. Explore pricing, ships, itineraries, and expert comparisons to find out if it's right for you."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="riv_hero_section">
        <div className="riv_hero_content">
          <span className="riv_hero_eyebrow">Boutique River Cruise Guide</span>
          <h1 className="riv_hero_main_h1">
            Riverside Luxury Cruises <br /> A Boutique Luxury River Cruise
            Experience
          </h1>
          <p className="riv_hero_sub_p">
            Spacious ships, elevated service, and a refined approach to European
            river cruising
          </p>

          <p className="riv_hero_lead">
            Riverside Luxury Cruises represents a new standard of boutique
            luxury on Europe’s waterways. Built on the legacy of the most
            spacious ships in river cruising, the experience is defined by
            refined service and a commitment to architectural elegance.
          </p>

          {/* This container expands when the button below is clicked */}
          <div
            className={`riv_hero_details ${showQuickTake ? "expanded" : ""}`}
          >
            <p className="riv_hero_note">
              Riverside Luxury Cruises is ideal for experienced travelers and
              luxury clients seeking a quieter, more refined onboard experience
              than traditional river cruise lines.
            </p>
          </div>

          <button
            className="riv_hero_read_more"
            onClick={() => setShowQuickTake(!showQuickTake)}
          >
            {showQuickTake ? "Read Less" : "Read More"}
          </button>

          <div className="riv_hero_btns">
            <button className="riv_btn_primary">View Riverside Pricing</button>
            <button className="riv_btn_secondary">
              Compare River Cruise Lines
            </button>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="riv_intro_premium_section" id="riv_overview_section">
        <div className="riv_container_main">
          <div className="riv_intro_content_block">
            <div className="riv_intro_decorative_line"></div>
            <h2 className="riv_intro_highlight_text">
              There are very few brands in river cruising that truly elevate the
              experience. <span>Riverside Luxury Cruises is one of them.</span>
            </h2>
            <div className="riv_intro_p_box">
              <p className="riv_intro_p_text">
                Built on the legacy of the former Crystal river ships, Riverside
                delivers a more refined, spacious, and quietly luxurious way to
                experience Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW INTRO GALLERY SECTION */}
      <section className="riv-gallery-section riv-intro-gallery">
        <div className="riv-gallery-inner">
          <div className="riv-gallery-header">
            <span className="riv-gallery-eyebrow">A Glimpse of Riverside</span>
            <h2 className="riv-gallery-h2">Refined Moments on Every Deck</h2>
            <div className="riv-gallery-divider"></div>
            <p className="riv-gallery-p">
              From the first sip of artisanal coffee to sunset views by the
              pool, discover the thoughtful details that make Riverside a true
              standout in luxury river cruising.
            </p>
          </div>
          <div className="riv-gallery-bento-grid">
            {/* 4 — Single */}
            <div className="riv-gallery-item">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery4}
                  alt="Entertainment"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Culinary Art</span>
                  <h3 className="riv-gallery-h3">
                    Chef-Curated Culinary Creations
                  </h3>
                </div>
              </div>
            </div>

            {/* 5 — Single */}
            <div className="riv-gallery-item">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery6}
                  alt="Spa & Wellness"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Evening Deck</span>
                  <h3 className="riv-gallery-h3">Evening Poolside Serenity</h3>
                </div>
              </div>
            </div>

            {/* 6 — Wide */}
            <div className="riv-gallery-item riv-gallery-wide">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery5}
                  alt="Exclusive Excursions"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Wellness Lounge</span>
                  <h3 className="riv-gallery-h3">
                    Onboard Spa & Beauty Experience
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST & WHERE IT FITS (TRUST SECTION) */}
      <section className="riv_trust_modern_box">
        <div className="riv_container_main">
          <div className="riv_trust_layout_grid">
            <div className="riv_trust_card_panel">
              <div className="riv_trust_badge">ELITE EXPERTISE</div>
              <h2 className="riv_trust_h2_title">Why Trust This Guide</h2>
              <div className="riv_trust_points_container">
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Firsthand industry experience</p>
                </div>
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Client booking data across 140+ advisors</p>
                </div>
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Direct relationships with river cruise lines</p>
                </div>
              </div>
            </div>
            <div className="riv_fits_card_panel">
              <h2 className="riv_fits_h2_title">Where Riverside Fits</h2>
              <p className="riv_fits_description">
                Riverside sits between premium and ultra-luxury river cruise
                lines.
              </p>
              <div className="riv_fits_features">
                <div className="riv_fit_tag">More Space</div>
                <div className="riv_fit_tag">Boutique Luxury</div>
                <div className="riv_fit_tag">Refined Service</div>
              </div>
              <ul className="riv_fits_list_detail">
                <li>more space than premium brands</li>
                <li>less rigid than ultra all-inclusive</li>
                <li>boutique luxury positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN IMAGE GALLERY */}
      <section className="riv-gallery-section">
        <div className="riv-gallery-inner">
          <div className="riv-gallery-header">
            <span className="riv-gallery-eyebrow">Onboard Experience</span>
            <h2 className="riv-gallery-h2">
              Life Aboard Riverside Luxury Cruises
            </h2>
            <div className="riv-gallery-divider"></div>
            <p className="riv-gallery-p">
              Experience the pinnacle of European river cruising—where spacious
              all-suite designed ships meet world-class service and boutique
              refinement.
            </p>
          </div>

          <div className="riv-gallery-bento-grid">
            {/* 1 — Feature (2×2) */}
            <div className="riv-gallery-item riv-gallery-feature">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery8}
                  alt="Luxury Suite"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Luxury Lounge</span>
                  <h3 className="riv-gallery-h3">
                    Sophisticated Onboard Lounge & Bar
                  </h3>
                  <p className="riv-gallery-item_p">
                    Unwind in a beautifully designed onboard lounge featuring
                    stylish interiors, ambient lighting, plush seating, and a
                    refined bar area. Perfect for relaxing with a signature
                    drink, socializing, or enjoying quiet moments in an elegant
                    setting.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 — Tall (row span 2) */}
            <div className="riv-gallery-item riv-gallery-tall">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery9}
                  alt="Onboard lifestyle"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Open-Air Luxury</span>
                  <h3 className="riv-gallery-h3">
                    Elegant Pool Deck with Panoramic Views
                  </h3>
                </div>
              </div>
            </div>

            {/* 3 — Tall (row span 2) */}
            <div className="riv-gallery-item riv-gallery-tall">
              <div className="riv-gallery-image-box">
                <img
                  src={ImageGellery10}
                  alt="Fine Dining"
                  className="riv-gallery-img"
                />
                <div className="riv-gallery-overlay">
                  <span className="riv-gallery-badge">Luxury Suite</span>
                  <h3 className="riv-gallery-h3">
                    Elegant Suite with Panoramic Private Terrace
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLES */}
      <section
        className="riv_comparison_table_section"
        id="riv_comparison_section"
      >
        <div className="riv_container_main">
          <h2 className="riv_comp_main_h2">Compare the Best River Cruises</h2>

          <div className="riv_table_container_box">
            <div className="riv_table_label">
              River Cruise Brand Positioning
            </div>
            <div className="riv_responsive_table_holder">
              <table className="riv_striped_table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Positioning</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="riv_row_riverside">
                    <td>Riverside Luxury Cruises</td>
                    <td>Boutique luxury</td>
                    <td>Experienced travelers</td>
                  </tr>
                  <tr className="riv_row_viking">
                    <td>Viking River Cruises</td>
                    <td>Premium</td>
                    <td>First-time cruisers</td>
                  </tr>
                  <tr className="riv_row_ama">
                    <td>AmaWaterways</td>
                    <td>Premium+</td>
                    <td>Active travelers</td>
                  </tr>
                  <tr className="riv_row_avalon">
                    <td>Avalon Waterways</td>
                    <td>Premium</td>
                    <td>Value travelers</td>
                  </tr>
                  <tr className="riv_row_scenic">
                    <td>Scenic Luxury Cruises & Tours</td>
                    <td>Ultra-luxury</td>
                    <td>All-inclusive luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="riv_table_container_box_2">
            <div className="riv_table_label">Riverside vs Other Lines</div>
            <div className="riv_responsive_table_holder">
              <table className="riv_striped_table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Riverside</th>
                    <th>Premium</th>
                    <th>Ultra-Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="riv_feat_row_space">
                    <td>Space</td>
                    <td>High</td>
                    <td>Moderate</td>
                    <td>High</td>
                  </tr>
                  <tr className="riv_feat_row_vibe">
                    <td>Atmosphere</td>
                    <td>Boutique</td>
                    <td>Structured</td>
                    <td>Formal</td>
                  </tr>
                  <tr className="riv_feat_row_inc">
                    <td>Inclusions</td>
                    <td>Moderate</td>
                    <td>Moderate</td>
                    <td>Extensive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="riv_pricing_card_section" id="riv_pricing_section">
        <div className="riv_container_main">
          <h2 className="riv_pricing_center_h2">Riverside Pricing</h2>
          <p className="riv_pricing_top_p">
            Typical pricing categories for European river cruises:
          </p>
          <div className="riv_pricing_three_card_grid">
            <div className="riv_price_unit_card">
              <h4 className="riv_price_type_h4_white">Entry</h4>
              <div className="riv_price_value_display">$4,000–$6,500</div>
              <button className="riv_price_action_btn">View Details</button>
            </div>
            <div className="riv_price_unit_card riv_price_feature_glow">
              <div className="riv_price_best_label">RECOMMENDED</div>
              <h4 className="riv_price_type_h4">Mid-Tier</h4>
              <div className="riv_price_value_display">$6,500–$10,000</div>
              <button className="riv_price_action_btn_filled">
                Check Availability
              </button>
            </div>
            <div className="riv_price_unit_card">
              <h4 className="riv_price_type_h4_white">Suites</h4>
              <div className="riv_price_value_display">$10,000+</div>
              <button className="riv_price_action_btn">
                View Luxury Suites
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        className="riv_experience_insight_section"
        id="riv_ships_section"
      >
        <div className="riv_container_main">
          <div className="riv_experience_split_layout">
            <div className="riv_experience_text_side">
              <h2 className="riv_experience_h2_title">Experience</h2>
              <div className="riv_experience_scroll_box">
                <p className="riv_experience_main_p">
                  Sailing with Riverside feels calm, intentional, and refined.
                </p>
                <div className="riv_expert_callout_box">
                  <div className="riv_expert_top_bar">EXPERT INSIGHT</div>
                  <p>
                    Most clients upgrade from Viking River Cruises or
                    AmaWaterways seeking more space and better service.
                  </p>
                </div>
              </div>
            </div>
            <div className="riv_experience_media_side">
              <div className="riv_exp_img_frame">
                <img src={ImageGellery11} alt="Riverside Life" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SECTION: RIVERSIDE EXPERIENCE ===== */}
      <section className="lux-section lux-bg-white lux-video-section">
        <div className="lux-container-wide">
          <div className="lux-video-header">
            <h2 className="lux-h2">Experience Riverside Luxury Cruises</h2>
            <div className="lux-navy-divider-center"></div>
            <p className="lux-video-subtitle">
              Discover the refined elegance and spacious comfort that defines
              Riverside Luxury Cruises. See why experienced travelers choose
              Riverside for their European river cruise experience.
            </p>
          </div>

          <div className="lux-video-wrapper">
            <video
              className="lux-video-player"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AGU8QgoeLHNd-yZz7oJmK1g/Emerald%20Cruises/River%20Cruising/Videos/Overview/Paid%20Social_%20Emerald%20Cruises%20ERC%20Highlights%20_%2030sec%2016x9%20No%20CTA.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=59aimhde&dl=1"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* BEST TIME TO SAIL (SEO SECTION) - NEW UI WITH LUCIDE */}
      <section className="riv_itinerary_premium_section">
        <div className="riv_container_main">
          <div className="riv_itinerary_grid_layout">
            <div className="riv_itinerary_card_ui">
              <div className="riv_itin_icon_circle">
                <Calendar size={32} />
              </div>
              <div className="riv_itin_content_ui">
                <h2 className="riv_itinerary_h2_title">
                  Best Time to Take a Riverside River Cruise
                </h2>
                <div className="riv_itin_highlight_box">
                  <Clock size={16} />
                  <span>Peak Seasons</span>
                </div>
                <p className="riv_itinerary_p_text">
                  Spring and fall offer the best value and weather.
                </p>
              </div>
            </div>
            <div className="riv_itinerary_card_ui">
              <div className="riv_itin_icon_circle">
                <Compass size={32} />
              </div>
              <div className="riv_itin_content_ui">
                <h2 className="riv_itinerary_h2_title">
                  Best Riverside Itineraries
                </h2>
                <div className="riv_itin_highlight_box">
                  <MapPin size={16} />
                  <span>Top Routes</span>
                </div>
                <p className="riv_itinerary_p_text">
                  Rhine for first-time travelers, Danube for experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS & WHO IT'S FOR */}
      <section className="riv_who_why_section">
        <div className="riv_container_main">
          <div className="riv_who_why_split">
            <div className="riv_objections_panel">
              <h2 className="riv_obj_h2_title">Common Objections</h2>
              <div className="riv_obj_item_box">
                <strong>Is it worth the price?</strong>
                <p>Yes for luxury travelers</p>
              </div>
              <div className="riv_obj_item_box">
                <strong>Too quiet?</strong>
                <p>Designed to be relaxed</p>
              </div>
              <div className="riv_obj_item_box">
                <strong>All-inclusive?</strong>
                <p>Not fully, but strong inclusions</p>
              </div>
            </div>
            <div className="riv_vibe_panel">
              <h2 className="riv_vibe_h2_title">Who It's For</h2>
              <div className="riv_vibe_group">
                <div className="riv_vibe_positive">
                  <strong>Best For:</strong>
                  <ul>
                    <li>experienced travelers</li>
                    <li>luxury couples</li>
                  </ul>
                </div>
                <div className="riv_vibe_negative">
                  <strong>Not For:</strong>
                  <ul>
                    <li>budget travelers</li>
                    <li>entry-level cruisers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (ABOVE ANGELA) */}
      <section className="riv_cta_footer_section" id="riv_cta_footer_section">
        <div className="riv_container_main">
          <div className="riv_cta_footer_box">
            <h2 className="riv_cta_footer_h2">
              Plan Your Riverside Experience
            </h2>
            <p className="riv_cta_footer_p">
              Choosing the right itinerary and cabin matters. Work with an
              expert to ensure the right fit.
            </p>
            <button className="riv_cta_footer_action_btn">
              Plan My River Cruise
            </button>
          </div>
        </div>
      </section>

      {/* AUTHORITY BLOCK - ANGELA HUGHES (FLOATING LAYOUT) */}
      <section className="riv_authority_bio_section">
        <div className="riv_container_main">
          <div className="riv_authority_float_layout">
            {/* LEFT SIDE - FLOATING IMAGE */}
            <div className="riv_auth_float_image">
              <div className="riv_profile_frame_floating">
                <img
                  src={ProfileImage}
                  alt="Angela Hughes"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("riv_fallback_avatar");
                  }}
                />
                <div className="riv_auth_signature">Angela Hughes</div>
              </div>
              <div className="riv_auth_quick_stats">
                <div className="riv_stat_pill">
                  <Award size={14} /> 40+ Years
                </div>
                <div className="riv_stat_pill">
                  <Users size={14} /> 140+ Advisors
                </div>
                <div className="riv_stat_pill">
                  <Star size={14} /> Top Influencer
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FLOATING CONTENT */}
            <div className="riv_auth_float_content">
              <h2 className="riv_auth_h2_name">
                About Angela Hughes and Trips & Ships Luxury Travel
              </h2>
              <p className="riv_auth_intro_text">
                When evaluating luxury river cruise lines, the difference
                between a good experience and the right experience comes down to
                expertise. Angela Hughes is one of the most recognized voices in
                the luxury travel industry.
              </p>
              <div className="riv_auth_scrollable_text">
                <p className="riv_auth_body_text">
                  With more than 40 years in travel, Angela is the CEO of Trips
                  & Ships Luxury Travel and founder of Luxury Travel University.
                  She leads a network of over 140 travel advisors and has
                  personally sold millions in luxury travel annually across
                  cruise, expedition, and global itineraries.
                </p>
                <p className="riv_auth_body_text">
                  Angela has been featured in Travel Weekly, TravelAge West,
                  Travel Market Report, Insider Travel Report, and more. She has
                  been recognized as Luxury Travel Influencer of the Year by
                  Travel Leaders Network and regularly speaks at global industry
                  conferences.
                </p>
                <p className="riv_auth_body_text">
                  She works across all major river cruise lines, including
                  Riverside Luxury Cruises, Viking River Cruises, and
                  AmaWaterways, ensuring recommendations are based on real
                  experience and client fit—not a single supplier.
                </p>
              </div>
              <div className="riv_auth_firm_desc">
                <strong>
                  Trips & Ships Luxury Travel operates as a high-level advisory
                  firm, helping clients:
                </strong>
                <ul className="riv_auth_feature_list_points">
                  <li>compare cruise lines with clarity</li>
                  <li>select the right experience</li>
                  <li>avoid costly mistakes</li>
                  <li>maximize value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RIVERSIDE EXPERIENCE IMAGE SHOWCASE ===== */}
      {/* ===== CENTERED SHOWCASE WITH HOVER OVERLAY ===== */}
      <section className="riv_showcase_modern_reveal">
        <div className="riv_container_main">
          {/* HEADER (OUTSIDE IMAGE) */}
          <div className="riv_reveal_header_box">
            <span className="riv_reveal_eyebrow">The Experience</span>
            <h2 className="riv_reveal_h2">
              Why Riverside Stands Apart from Other River Cruises
            </h2>
            <div className="riv_reveal_divider"></div>
          </div>

          {/* CENTERED SMALLER IMAGE */}
          <div className="riv_reveal_interactive_frame">
            <img
              src={RiversideHeroShot}
              alt="Riverside Luxury Cruises elegant river cruising experience"
              className="riv_reveal_img"
            />

            {/* HOVER OVERLAY (BOTTOM LEFT) */}
            <div className="riv_reveal_bottom_overlay">
              <div className="riv_reveal_overlay_content">
                <div className="riv_reveal_label">
                  <span>European River Cruising</span>
                </div>
                <p className="riv_reveal_description">
                  Riverside Luxury Cruises redefines what a European river
                  cruise can feel like — more space, better service, and a
                  quieter, more intentional pace of travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL THOUGHTS */}
      <section className="riv_closing_thoughts_section">
        <div className="riv_container_main">
          <div className="riv_closing_line_box">
            <h2 className="riv_closing_h2">Final Thoughts</h2>
            <p className="riv_closing_p">
              Riverside is not for everyone—and that is exactly its strength.
              For travelers seeking a refined, spacious, and more intentional
              river cruise experience, it stands out as one of the best in
              Europe.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (MATCHING LUXURY YACHT DESIGN) */}
      <section className="riv_faq_standard_section" id="riv_faq_section">
        <div className="riv_container_main">
          <div className="riv-faq-header">
            <h2 className="riv-h2">Frequently Asked Questions</h2>
            <div className="lux-navy-divider-center"></div>
            <p className="lux-faq-intro">
              Everything you need to know about Riverside Luxury Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default RiversideLuxuryCruises;
