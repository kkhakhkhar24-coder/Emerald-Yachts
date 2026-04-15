import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ScenicVSFourSeasonsYachts.css";
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Check,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import ProfilePicture from "../../assets/image.jpg";
import { Helmet } from "react-helmet-async";

import heroImage1 from "../../assets/ScenicvsFourSeasonsYachts/Hero1.jpg";
import heroImage2 from "../../assets/ScenicvsFourSeasonsYachts/Hero2.jpg";
import heroImage3 from "../../assets/ScenicvsFourSeasonsYachts/Hero3.jpg";
import section5bg from "../../assets/ScenicvsFourSeasonsYachts/Section5_bg.jpg";
import section12Image1 from "../../assets/ScenicvsFourSeasonsYachts/Section_12_Emerald_Cruises.jpg";
import section12Image2 from "../../assets/ScenicvsFourSeasonsYachts/Ritz_Carlton_Yacht.jpg";
import section12Image3 from "../../assets/ScenicvsFourSeasonsYachts/Section_12_Explora_Journeys.jpg";
import section12Image4 from "../../assets/ScenicvsFourSeasonsYachts/Section_12_Scenic_Eclipse.jpg";
import galleryImage1 from "../../assets/ScenicvsFourSeasonsYachts/GalleryImage1.jpg";
import galleryImage2 from "../../assets/ScenicvsFourSeasonsYachts/GalleryImage2.jpg";
import galleryImage3 from "../../assets/ScenicvsFourSeasonsYachts/GalleryImage3.jpg";
import galleryImage4 from "../../assets/ScenicvsFourSeasonsYachts/GalleryImage4.jpg";
import Cliffs_of_Moher from "../../assets/ScenicvsFourSeasonsYachts/Cliffs_of_Moher.png";
import Athens_Acropolis from "../../assets/ScenicvsFourSeasonsYachts/Athens_Acropolis.png";
import Mont_Saint_Michel from "../../assets/ScenicvsFourSeasonsYachts/Mont_Saint_Michel.png";

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqData = [
    {
      q: "What is the main difference between Scenic and Four Seasons Yachts?",
      a: "Scenic is destination-driven and all-inclusive with expedition capability, while Four Seasons Yachts is lifestyle-driven, offering a design-forward luxury hotel experience at sea.",
    },
    {
      q: "Which is better for expedition travel?",
      a: "Scenic Eclipse is specifically designed for expedition travel with polar-capable engineering and advanced exploration equipment, making it the better choice for remote destinations.",
    },
    {
      q: "Which yacht offers better all-inclusive value?",
      a: "Scenic typically offers a more inclusive price point with most elements bundled into the initial fare, while Four Seasons Yachts has a more customizable, à la carte structure.",
    },
    {
      q: "Is Four Seasons Yachts suitable for polar expeditions?",
      a: "Four Seasons Yachts focuses on iconic luxury regions like the Mediterranean and Caribbean. For rugged expedition or polar travel, Scenic Eclipse is the better choice.",
    },
    {
      q: "Which yacht is better for luxury hotel enthusiasts?",
      a: "Four Seasons Yachts is designed for travelers who love luxury hotels and want a social, design-forward experience at sea with residential-style architecture.",
    },
    {
      q: "What destinations does Scenic Eclipse visit?",
      a: "Scenic Eclipse offers global destinations including expedition travel to polar regions, remote locations, and iconic destinations worldwide.",
    },
    {
      q: "What is the atmosphere like on each yacht?",
      a: "Scenic offers a refined, immersive atmosphere focused on exploration, while Four Seasons Yachts provides a social, design-forward environment centered on lifestyle luxury.",
    },
    {
      q: "Which yacht should I choose if I prioritize destination over onboard experience?",
      a: "If your priority is destination depth and exploration, Scenic is the better choice. If you prioritize the onboard experience and lifestyle at sea, Four Seasons Yachts is ideal.",
    },
    {
      q: "Are there alternatives to Scenic and Four Seasons Yachts?",
      a: "Yes, alternatives include Explora Journeys, Ritz-Carlton Yacht Collection, and Emerald Cruises, each offering unique luxury experiences.",
    },
    {
      q: "How do I decide which yacht is right for me?",
      a: "Consider your travel priorities: Choose Scenic if you want exploration and all-inclusive value. Choose Four Seasons if you prefer design-forward lifestyle luxury and customizable experiences.",
    },
  ];
  return (
    <div className="svf-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`svf-faq-item${open === i ? " svf-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="svf-faq-q">
            <span>{item.q}</span>
            <span className="svf-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="svf-faq-a">
              <div className="svf-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ScenicVSFourSeasonsYachts() {
  return (
    <>
      <Helmet>
        <title>
          Scenic vs Four Seasons Yachts: Which Luxury Yacht Is Best?
        </title>
        <meta
          name="description"
          content="Scenic vs Four Seasons Yachts explained by Angela Hughes. Compare ultra-luxury yacht experiences, suites, pricing, and which is right for your travel style."
        />
        <meta
          name="keywords"
          content="Scenic vs Four Seasons Yachts, Four Seasons Yachts review, Scenic luxury cruises vs Four Seasons, ultra luxury yacht comparison, best luxury yacht cruise, Scenic vs Four Seasons cruise, luxury yacht cruises Mediterranean, expedition vs luxury yacht cruise"
        />
        <meta
          name="title"
          content="Scenic vs Four Seasons Yachts: Which Luxury Yacht Is Best?"
        />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <section
        className="svf-hero"
        style={{
          "--h1": `url(${heroImage1})`,
          "--h2": `url(${heroImage2})`,
          "--h3": `url(${heroImage3})`,
        }}
      >
        <div className="svf-hero-inner">
          <span className="svf-eyebrow">Expert Comparison Guide</span>
          <h1 className="svf-h1">
            Scenic vs Four Seasons Yachts: <br />
            Which Ultra-Luxury Yacht Experience Is Right for You?
          </h1>
          <p className="svf-p svf-hero-lead">
            Scenic and Four Seasons Yachts are both ultra-luxury experiences,
            but they are built for different travelers.
          </p>
          <div className="svf-hero-details">
            <div className="svf-snippet-card">
              <span className="svf-snippet-label">Quick Answer</span>
              <p className="svf-p svf-white-text">
                <strong>Scenic is destination-driven</strong> and all-inclusive
                with expedition capability.{" "}
                <strong>Four Seasons Yachts is lifestyle-driven</strong>,
                offering a design-forward luxury hotel experience at sea.
              </p>
            </div>
          </div>
          <button
            className="svf-hero-toggle"
            onClick={() => {
              const d = document.querySelector(".svf-hero-details");
              if (d) d.classList.toggle("svf-expanded");
            }}
          >
            View Quick Answer
          </button>
          <div className="svf-hero-btns">
            <button className="svf-btn-primary">
              Request My Ultra-Luxury Yacht Recommendation
            </button>
            <p className="svf-p svf-hero-sub">
              We compare Scenic, Four Seasons, and alternatives based on how you
              actually travel.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEST FOR */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-hdr">
            <h2 className="svf-h2">Scenic vs Four Seasons Yachts: Best For</h2>
            <div className="svf-bar"></div>
          </div>
          <div className="svf-2col">
            <div className="svf-card svf-card-blue">
              <div className="svf-card-top">
                <div className="svf-icon-circle">
                  <Compass size={22} strokeWidth={1.5} />
                </div>
                <h3 className="svf-card-title">Scenic Eclipse</h3>
              </div>
              <ul className="svf-checklist">
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">Best for exploration</span>
                </li>
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">
                    Best for expedition destinations
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">Best for all-inclusive value</span>
                </li>
              </ul>
            </div>
            <div className="svf-card svf-card-outline">
              <div className="svf-card-top">
                <div className="svf-icon-circle">
                  <Sparkles size={22} strokeWidth={1.5} />
                </div>
                <h3 className="svf-card-title">Four Seasons Yachts</h3>
              </div>
              <ul className="svf-checklist">
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">
                    Best for lifestyle luxury at sea
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">
                    Best for Mediterranean and Caribbean cruising
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} strokeWidth={2} />
                  <span className="svf-p">
                    Best for design and onboard experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="svf-editorial-row">
            <div className="svf-editorial-box">
              <p className="svf-p" style={{ fontStyle: "italic", margin: 0 }}>
                Each yacht serves a distinct traveler profile. Understanding
                these differences helps you choose the right experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IF YOU ONLY READ ONE */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner">
          <div className="svf-hdr">
            <h2 className="svf-h2">If You Only Read One Section</h2>
            <div className="svf-bar"></div>
          </div>
          <div className="svf-2col">
            <div className="svf-card svf-card-white">
              <div className="svf-badge">Choose Scenic if:</div>
              <ul className="svf-checklist">
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">
                    You want expedition or deeper destination travel
                  </span>
                </li>
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">
                    You prefer an all-inclusive structure
                  </span>
                </li>
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">
                    You care more about where you are going
                  </span>
                </li>
              </ul>
            </div>
            <div className="svf-card svf-card-white">
              <div className="svf-badge">Choose Four Seasons Yachts if:</div>
              <ul className="svf-checklist">
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">You love luxury hotels</span>
                </li>
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">
                    You want a social, design-forward experience
                  </span>
                </li>
                <li>
                  <Check size={18} strokeWidth={2.5} />
                  <span className="svf-p">
                    You care about the onboard experience as much as the
                    destination
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AUTHORITY — heading LEFT */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-sticky-wrap svf-rev">
            <main className="svf-main-col">
              <h3 className="svf-h3">Angela Hughes — Luxury Yacht Expert</h3>
              <p className="svf-p svf-mb-md">
                Angela Hughes is a global luxury travel expert specializing in
                ultra-luxury cruises and yacht experiences. She leads a team of
                over 140 advisors and works directly with clients comparing
                Scenic, Four Seasons, and other top-tier cruise products.
              </p>
              <div className="svf-highlight-box">
                <p className="svf-p" style={{ fontStyle: "italic", margin: 0 }}>
                  Her firsthand knowledge of both brands — from itinerary depth
                  to onboard philosophy — ensures that every recommendation is
                  grounded in real-world travel experience, not marketing
                  materials.
                </p>
              </div>
            </main>
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el">
                {/* <h2 className="svf-h2 svf-lbar">
                  Written and reviewed by <br />
                  Angela Hughes
                </h2> */}
                <div className="svf-cred-box">
                  <div className="svf-avatar">
                    <img
                      src={ProfilePicture}
                      alt="Angela Hughes"
                      className="svf-avatar-img"
                    />
                  </div>
                  <p className="svf-cred-label">Recognition</p>
                  <p className="svf-cred-role">
                    CEO & Founder, Trips & Ships Luxury Travel
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE REAL DECISION — BG IMAGE, single bar */}
      <section
        className="svf-real-decision"
        style={{ "--s5bg": `url(${section5bg})` }}
      >
        <div className="svf-rd-overlay"></div>
        <div className="svf-rd-inner">
          <h2 className="svf-h2-white">The Real Decision</h2>
          <div className="svf-white-bar"></div>
          <p className="svf-p-white">
            Most travelers think they are choosing between two versions of the
            same luxury product.
          </p>
          <p className="svf-bold-stmt">They are not.</p>
          <p className="svf-p-white svf-mb-sm">
            This is a decision about how you want to experience the world.
          </p>
          <div className="svf-cmp-row">
            <div className="svf-cmp-item">
              <span className="svf-cmp-label">Scenic</span>
              <p className="svf-p-white">
                Scenic is built around exploration and destination depth.
              </p>
            </div>
            <div className="svf-cmp-vline"></div>
            <div className="svf-cmp-item">
              <span className="svf-cmp-label">Four Seasons Yachts</span>
              <p className="svf-p-white">
                Four Seasons Yachts is built around lifestyle, design, and
                experience at sea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPARISON TABLE — heading LEFT */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-sticky-wrap">
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el">
                <h2 className="svf-h2 svf-lbar">
                  Scenic vs <br />
                  Four Seasons Yachts
                </h2>
                <p className="svf-sticky-desc">
                  A detailed breakdown of the fundamental differences between
                  these two ultra-luxury leaders.
                </p>
              </div>
            </aside>
            <main className="svf-main-col">
              <div className="svf-tbl-wrap">
                <table className="svf-tbl">
                  <thead>
                    <tr>
                      <th className="svf-th svf-th-l">Category</th>
                      <th className="svf-th">Scenic</th>
                      <th className="svf-th">Four Seasons Yachts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="svf-td-lbl">Core Focus</td>
                      <td className="svf-td" data-label="Scenic">
                        Exploration
                      </td>
                      <td className="svf-td" data-label="Four Seasons">
                        Lifestyle
                      </td>
                    </tr>
                    <tr>
                      <td className="svf-td-lbl">Experience</td>
                      <td className="svf-td" data-label="Scenic">
                        All-inclusive
                      </td>
                      <td className="svf-td" data-label="Four Seasons">
                        Flexible luxury
                      </td>
                    </tr>
                    <tr>
                      <td className="svf-td-lbl">Atmosphere</td>
                      <td className="svf-td" data-label="Scenic">
                        Refined, immersive
                      </td>
                      <td className="svf-td" data-label="Four Seasons">
                        Social, design-forward
                      </td>
                    </tr>
                    <tr>
                      <td className="svf-td-lbl">Destinations</td>
                      <td className="svf-td" data-label="Scenic">
                        Global + expedition
                      </td>
                      <td className="svf-td" data-label="Four Seasons">
                        Iconic luxury regions
                      </td>
                    </tr>
                    <tr>
                      <td className="svf-td-lbl">Traveler Type</td>
                      <td className="svf-td" data-label="Scenic">
                        Explorer luxury
                      </td>
                      <td className="svf-td" data-label="Four Seasons">
                        Lifestyle luxury
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="svf-takeaway">
                <span className="svf-sm-lbl">Key Takeaway</span>
                <p className="svf-takeaway-p">
                  <strong>Scenic</strong> is about where you go.
                  <br />
                  <strong>Four Seasons</strong> is about how you experience it.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT ACTUALLY MATTERS — heading RIGHT, content LEFT */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner">
          <div className="svf-sticky-wrap svf-rev">
            <main className="svf-main-col">
              <div className="svf-block">
                <h3 className="svf-h3">Type of Experience</h3>
                <div className="svf-2col svf-2col-sm">
                  <div className="svf-mini-card">
                    <span className="svf-mini-lbl">Scenic focuses on:</span>
                    <ul className="svf-dotlist">
                      <li>Exploration</li>
                      <li>Expedition capability</li>
                      <li>Remote destinations</li>
                    </ul>
                  </div>
                  <div className="svf-mini-card">
                    <span className="svf-mini-lbl">
                      Four Seasons focuses on:
                    </span>
                    <ul className="svf-dotlist">
                      <li>Design</li>
                      <li>Social environment</li>
                      <li>Elevated onboard living</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="svf-block">
                <h3 className="svf-h3">Destination vs Lifestyle</h3>
                <div className="svf-flow">
                  <div className="svf-flow-row">
                    <span className="svf-flow-cond">
                      If your priority is <strong>destination</strong>
                    </span>
                    <span className="svf-flow-arr">
                      <ArrowRight size={16} strokeWidth={2} />
                    </span>
                    <span className="svf-flow-res">Scenic</span>
                  </div>
                  <div className="svf-flow-row">
                    <span className="svf-flow-cond">
                      If your priority is <strong>experience</strong>
                    </span>
                    <span className="svf-flow-arr">
                      <ArrowRight size={16} strokeWidth={2} />
                    </span>
                    <span className="svf-flow-res">Four Seasons</span>
                  </div>
                </div>
              </div>
              <div className="svf-block">
                <h3 className="svf-h3">Inclusions vs Flexibility</h3>
                <div className="svf-2col svf-2col-sm">
                  <div className="svf-val-card">
                    <span className="svf-mini-lbl">Scenic</span>
                    <h4 className="svf-val-title">Highly all-inclusive</h4>
                    <p className="svf-p">Structured and seamless</p>
                    <div className="svf-vbar">
                      <div className="svf-vbar-fill"></div>
                    </div>
                  </div>
                  <div className="svf-val-card">
                    <span className="svf-mini-lbl">Four Seasons</span>
                    <h4 className="svf-val-title">Flexible Luxury</h4>
                    <p className="svf-p">Personalized and bespoke</p>
                    <div className="svf-vbar">
                      <div className="svf-vbar-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="svf-verdict-box">
                <span className="svf-sm-lbl">Expert Insight</span>
                <p className="svf-p">
                  <strong>Scenic</strong> is the better choice for travelers who
                  prioritize destination depth and all-inclusive exploration.
                </p>
                <div className="svf-sep"></div>
                <p className="svf-p">
                  <strong>Four Seasons Yachts</strong> is the better choice for
                  travelers who prioritize design, service, and lifestyle at
                  sea.
                </p>
              </div>
            </main>
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el svf-rside">
                <h2 className="svf-h2 svf-rbar">
                  What Actually <br />
                  Matters
                </h2>
                <p className="svf-sticky-desc">
                  Beyond the luxury amenities, the choice between Scenic and
                  Four Seasons comes down to your primary travel objective.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: VIDEO SHOWCASE */}
      <section className="svf-section svf-video-section">
        <div className="svf-inner">
          <div className="svf-video-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              Four Seasons Yachts <br /> Love Makes Waves
            </h2>
            <div className="svf-bar" style={{ margin: "20px auto 0" }}></div>
            <p
              className="svf-p"
              style={{
                textAlign: "center",
                marginTop: "20px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              Experience a new era of luxury at sea where legendary service meets the horizon. Four Seasons Yachts invites you to embark on a grand voyage, bringing the world-class sophistication of the Four Seasons brand to the seas.
            </p>
          </div>
          <div className="svf-video-wrapper">
            <iframe
              className="svf-video-player"
              src="https://www.youtube.com/embed/CHX_uDP9RlM"
              title="Experience Scenic Eclipse"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SECTION 7.6: IMAGE GALLERY */}
      <section className="svf-section svf-gallery-section">
        <div className="svf-inner">
          <div className="svf-gallery-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              Ultra-Luxury Yacht Experience
            </h2>
            <div className="svf-bar" style={{ margin: "20px auto 0" }}></div>
            <p
              className="svf-p"
              style={{
                textAlign: "center",
                marginTop: "20px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              Explore the refined elegance, world-class amenities, and
              breathtaking destinations that define ultra-luxury yacht cruising.
            </p>
          </div>

          <div className="svf-gallery-grid">
            <div className="svf-gallery-item svf-gallery-item--large">
              <div className="svf-gallery-image-wrap">
                <img
                  src={Mont_Saint_Michel}
                  alt="Scenic Eclipse luxury suite with panoramic ocean views"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Iconic Destinations</span>
                    <h3>The Timeless Beauty of Mont Saint-Michel</h3>
                    <p>
                      Step into one of France’s most iconic landmarks, where history, architecture, and atmosphere come together in a truly unforgettable coastal setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  src={galleryImage2}
                  alt="Yacht dining experience with world-class cuisine"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Fine Dining</span>
                    <h3>Culinary Excellence</h3>
                    <p>World-class cuisine crafted by expert chefs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  src={Athens_Acropolis}
                  alt="Luxury yacht deck with premium amenities"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Cultural Journeys</span>
                    <h3>Ancient Athens & The Acropolis</h3>
                    <p>Discover the origins of Western civilization as you explore Athens and the Acropolis, guided by immersive experiences that bring history to life.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item svf-gallery-item--wide">
              <div className="svf-gallery-image-wrap">
                <img
                  src={Cliffs_of_Moher}
                  alt="Scenic yacht exploring Mediterranean coastal destinations"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Coastal Escapes</span>
                    <h3>Ireland’s Dramatic Atlantic Coastline</h3>
                    <p>
                      Experience the raw beauty of Ireland’s Cliffs of Moher, where dramatic ocean views and sweeping landscapes create unforgettable moments along your curated journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICE & VALUE — heading LEFT */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-sticky-wrap">
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el">
                <h2 className="svf-h2 svf-lbar">
                  Price & <br />
                  Value
                </h2>
                <p className="svf-sticky-desc">
                  Understanding the financial structure of each brand is key to
                  aligning your travel budget with your expectations.
                </p>
              </div>
            </aside>
            <main className="svf-main-col">
              <h3 className="svf-h3">
                Price Positioning: Scenic vs Four Seasons Yachts
              </h3>
              <div className="svf-2col svf-mb-md">
                <div className="svf-price-card svf-card-blue">
                  <span className="svf-mini-lbl">Scenic</span>
                  <p className="svf-p">
                    Scenic typically offers a{" "}
                    <strong>more inclusive price point</strong> with most
                    elements bundled into the initial fare.
                  </p>
                </div>
                <div className="svf-price-card svf-card-outline">
                  <span className="svf-mini-lbl">Four Seasons Yachts</span>
                  <p className="svf-p">
                    Four Seasons Yachts is expected to be{" "}
                    <strong>priced higher</strong> with a more customizable, à
                    la carte structure.
                  </p>
                </div>
              </div>
              <div className="svf-editorial-box">
                <span className="svf-sm-lbl">Expert Take</span>
                <div className="svf-take-cols">
                  <div>
                    <span className="svf-take-lbl">Scenic</span>
                    <p className="svf-take-txt">
                      Delivers value through <strong>inclusions</strong>.
                    </p>
                  </div>
                  <div className="svf-take-vline"></div>
                  <div>
                    <span className="svf-take-lbl">Four Seasons</span>
                    <p className="svf-take-txt">
                      Delivers value through <strong>experience</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHO THIS IS NOT FOR */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner">
          <div className="svf-hdr">
            <h2 className="svf-h2">Who This Is Not For</h2>
            <div className="svf-bar"></div>
          </div>
          <div className="svf-2col">
            <div className="svf-card svf-card-white">
              <div className="svf-card-hdr">
                <span className="svf-mini-lbl">Scenic</span>
                <h3 className="svf-card-h3">May Not Be Right If:</h3>
              </div>
              <ul className="svf-dashlist">
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You want a highly social yacht atmosphere
                  </span>
                </li>
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You prioritize onboard lifestyle over destination depth
                  </span>
                </li>
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You want a resort-style cruise experience
                  </span>
                </li>
              </ul>
            </div>
            <div className="svf-card svf-card-outline">
              <div className="svf-card-hdr">
                <span className="svf-mini-lbl">Four Seasons Yachts</span>
                <h3 className="svf-card-h3">May Not Be Right If:</h3>
              </div>
              <ul className="svf-dashlist">
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You want rugged expedition or polar travel
                  </span>
                </li>
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You prefer an all-inclusive, bundled pricing model
                  </span>
                </li>
                <li>
                  <span className="svf-dash">—</span>
                  <span className="svf-p">
                    You want highly structured daily experiences
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="svf-editorial-row">
            <div className="svf-editorial-box" style={{ textAlign: "center" }}>
              <p className="svf-p" style={{ fontStyle: "italic", margin: 0 }}>
                Identifying these misalignments early ensures your travel
                investment is placed with the brand that truly matches your
                style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: SUITES & DESIGN — heading LEFT */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-sticky-wrap">
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el">
                <h2 className="svf-h2 svf-lbar">
                  Suites & <br />
                  Design
                </h2>
                <p className="svf-sticky-desc">
                  The structural philosophy of each yacht defines how you
                  interact with your private space and the surrounding
                  environment.
                </p>
              </div>
            </aside>
            <main className="svf-main-col">
              <div className="svf-design-card svf-card-blue svf-mb-sm">
                <div className="svf-card-hdr">
                  <span className="svf-mini-lbl">Scenic</span>
                  <h3 className="svf-design-h3">Functional Luxury</h3>
                </div>
                <p className="svf-p">
                  <strong>Expedition-ready</strong> utility designed for polar
                  regions without sacrificing high-end elegance.
                </p>
                <ul className="svf-iconlist">
                  <li>
                    <span className="svf-icondot">
                      <Sparkles size={14} strokeWidth={1.5} />
                    </span>
                    <span className="svf-p">
                      Polar-capable suite engineering
                    </span>
                  </li>
                </ul>
              </div>
              <div className="svf-design-card svf-card-outline">
                <div className="svf-card-hdr">
                  <span className="svf-mini-lbl">Four Seasons Yachts</span>
                  <h3 className="svf-design-h3">Residential Design</h3>
                </div>
                <ul className="svf-iconlist">
                  <li>
                    <span className="svf-icondot">
                      <Sparkles size={14} strokeWidth={1.5} />
                    </span>
                    <span className="svf-p">Indoor-outdoor living focus</span>
                  </li>
                  <li>
                    <span className="svf-icondot">
                      <Sparkles size={14} strokeWidth={1.5} />
                    </span>
                    <span className="svf-p">
                      Architecture-driven aesthetics
                    </span>
                  </li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHAT CLIENTS GET WRONG — heading RIGHT, content LEFT */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner">
          <div className="svf-sticky-wrap svf-rev">
            <main className="svf-main-col">
              <div className="svf-plan-grid svf-mb-md">
                <div className="svf-plan-card">
                  <span className="svf-plan-num">01</span>
                  <h3 className="svf-plan-h3">Choosing based on brand</h3>
                  <p className="svf-p">
                    Selecting a yacht because you like the hotel brand rather
                    than the destination style.
                  </p>
                </div>
                <div className="svf-plan-card">
                  <span className="svf-plan-num">02</span>
                  <h3 className="svf-plan-h3">Ignoring itinerary</h3>
                  <p className="svf-p">
                    Overlooking the daily pacing and port depth in favor of
                    onboard ship amenities.
                  </p>
                </div>
                <div className="svf-plan-card">
                  <span className="svf-plan-num">03</span>
                  <h3 className="svf-plan-h3">Skipping pre/post planning</h3>
                  <p className="svf-p">
                    Treating the journey as only the cruise, rather than a
                    door-to-door experience.
                  </p>
                </div>
                <div className="svf-plan-card">
                  <span className="svf-plan-num">04</span>
                  <h3 className="svf-plan-h3">Over-upgrading suites</h3>
                  <p className="svf-p">
                    Prioritizing suite square footage over the actual value of
                    the itinerary and experiences.
                  </p>
                </div>
              </div>
              <div className="svf-insight-box">
                <span className="svf-sm-lbl">Angela Hughes Insight</span>
                <p className="svf-italic-q">
                  "We guide clients through this exact decision every day. The
                  difference between a good trip and an exceptional one is how
                  it is planned."
                </p>
              </div>
            </main>
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el svf-rside">
                <h2 className="svf-h2 svf-rbar">
                  What Clients <br />
                  Get Wrong
                </h2>
                <p className="svf-sticky-desc">
                  Luxury travel planning is about more than just selecting a
                  brand. Avoid these common strategic errors.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 12: ALTERNATIVES */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-hdr">
            <h2 className="svf-h2">Explore Other Top Yacht Brands</h2>
            <div className="svf-bar"></div>
          </div>
          <div className="svf-alt-grid">
            <div className="svf-alt-card">
              <div className="svf-alt-img-wrap">
                <img
                  src={section12Image1}
                  alt="Explora Journeys"
                  className="svf-alt-img"
                />
              </div>
              <div className="svf-alt-cap">
                <h3 className="svf-alt-title">Explora Journeys</h3>
              </div>
            </div>
            <div className="svf-alt-card">
              <div className="svf-alt-img-wrap">
                <img
                  src={section12Image2}
                  alt="Ritz-Carlton Yacht Collection"
                  className="svf-alt-img"
                />
              </div>
              <div className="svf-alt-cap">
                <h3 className="svf-alt-title">Ritz-Carlton Yacht Collection</h3>
              </div>
            </div>
            <div className="svf-alt-card">
              <div className="svf-alt-img-wrap">
                <img
                  src={section12Image3}
                  alt="Scenic Eclipse"
                  className="svf-alt-img"
                />
              </div>
              <div className="svf-alt-cap">
                <h3 className="svf-alt-title">Scenic Eclipse</h3>
              </div>
            </div>
            <div className="svf-alt-card">
              <div className="svf-alt-img-wrap">
                <img
                  src={section12Image4}
                  alt="Emerald Cruises"
                  className="svf-alt-img"
                />
              </div>
              <div className="svf-alt-cap">
                <h3 className="svf-alt-title">Emerald Cruises</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: TRAVELER PROFILE — heading LEFT */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner">
          <div className="svf-sticky-wrap">
            <aside className="svf-sticky-side">
              <div className="svf-sticky-el">
                <h2 className="svf-h2 svf-lbar">
                  Traveler <br />
                  Profile
                </h2>
                <p className="svf-sticky-desc">
                  Which statement better aligns with your personal travel
                  philosophy?
                </p>
              </div>
            </aside>
            <main className="svf-main-col">
              <div className="svf-profile-stack svf-mb-md">
                <div className="svf-profile-card svf-card-white">
                  <span className="svf-mini-lbl">Choose Scenic if:</span>
                  <div className="svf-quote-wrap">
                    <span className="svf-qmark">"</span>
                    <p className="svf-profile-q">
                      I want to explore the world.
                    </p>
                  </div>
                </div>
                <div className="svf-profile-card svf-card-outline">
                  <span className="svf-mini-lbl">Choose Four Seasons if:</span>
                  <div className="svf-quote-wrap">
                    <span className="svf-qmark">"</span>
                    <p className="svf-profile-q">
                      I want to experience luxury at the highest level.
                    </p>
                  </div>
                </div>
              </div>
              <div className="svf-cta-box">
                <h3 className="svf-h3-cta">
                  Want me to compare these for you?
                </h3>
                <p className="svf-p svf-mb-sm">
                  Every traveler is different. Let's look at your specific goals
                  and determine which yacht fits your style.
                </p>
                <button className="svf-btn-primary svf-btn-dark">
                  Start My Custom Comparison
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* SECTION 14: FINAL VERDICT */}
      <section className="svf-section svf-bg-white">
        <div className="svf-inner">
          <div className="svf-hdr">
            <h2 className="svf-h2">Final Verdict</h2>
            <div className="svf-bar"></div>
          </div>
          <div className="svf-2col svf-mb-md">
            <div
              className="svf-card svf-card-blue"
              style={{ textAlign: "center" }}
            >
              <span className="svf-mini-lbl">Scenic</span>
              <p className="svf-p">
                Scenic is better for <strong>exploration and inclusions</strong>
                .
              </p>
            </div>
            <div
              className="svf-card svf-card-outline"
              style={{ textAlign: "center" }}
            >
              <span className="svf-mini-lbl">Four Seasons Yachts</span>
              <p className="svf-p">
                Four Seasons Yachts is better for{" "}
                <strong>lifestyle and design</strong>.
              </p>
            </div>
          </div>
          <div className="svf-stmt-wrap">
            <p className="svf-stmt-text">
              This is not about choosing the better yacht.
              <br />
              It is about choosing <strong>how you want to travel</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 15: FAQ */}
      <section className="svf-section svf-bg-soft">
        <div className="svf-inner svf-narrow">
          <div className="svf-hdr">
            <h2 className="svf-h2">Frequently Asked Questions</h2>
            <div className="svf-bar"></div>
            <p className="svf-faq-intro">
              Everything you need to know about choosing between Scenic and Four
              Seasons Yachts.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}

export default ScenicVSFourSeasonsYachts;
