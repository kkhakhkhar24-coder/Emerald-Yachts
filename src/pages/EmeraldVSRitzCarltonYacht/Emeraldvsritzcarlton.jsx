import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Emeraldvsritzcarlton.css";
import myImage from "../../assets/image.jpg";
import { Award, Globe, Shield, Star } from "lucide-react";

import hero1 from "../../assets/EmeraldVSRitzCarltonYacht/Evcr1.jpg";
import hero2 from "../../assets/EmeraldVSRitzCarltonYacht/Evcr2.jpg";
import hero3 from "../../assets/EmeraldVSRitzCarltonYacht/Evcr3.jpg";

import ExpertInsight from "../../assets/EmeraldVSRitzCarltonYacht/Expert1.jpg";
import ExpertInsight2 from "../../assets/EmeraldVSRitzCarltonYacht/Expert2.jpg";
import ExpertInsight3 from "../../assets/EmeraldVSRitzCarltonYacht/Expert3.jpg";
import CTA_BG from "../../assets/EmeraldVSRitzCarltonYacht/Experice.jpg";

import Slider1 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider1.jpg";
import Slider2 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider2.jpg";
import Slider3 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider3.jpg";
import Slider4 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider4.jpg";
import Slider5 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider5.jpg";
import Slider6 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider6.jpg";
import Slider7 from "../../assets/EmeraldVSRitzCarltonYacht/EmeraldSlider7.jpg";

const EmeraldVsRitzCarltonPage = () => {
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Emerald Yachts vs Ritz-Carlton Yacht Collection",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is better, Emerald Yachts or Ritz-Carlton Yacht Collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Emerald is better for destination-focused travel, while Ritz-Carlton is better for onboard luxury and space.",
          },
        },
        {
          "@type": "Question",
          name: "Is Emerald Yacht worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Emerald Yachts offer strong value and a modern yacht experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ritz-Carlton Yacht all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is largely inclusive, though details vary by sailing.",
          },
        },
        {
          "@type": "Question",
          name: "Which has larger suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ritz-Carlton Yacht Collection offers larger suites with private terraces.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Emerald Yachts vs Ritz-Carlton Yacht Collection | Which Is Right for
          You?
        </title>
        <meta
          name="title"
          content="Emerald Yachts vs Ritz-Carlton Yacht Collection | Expert Comparison by Angela Hughes"
        />
        <meta
          name="description"
          content="Compare Emerald Yachts and Ritz-Carlton Yacht Collection. Pricing, suites, inclusions, and itineraries explained by yacht expert Angela Hughes."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Navbar />

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="evrc_hero_section">
        <div
          className="evrc_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>
        <div className="evrc_hero_overlay"></div>

        <div className="evrc_hero_content">
          <h1>
            Emerald Yachts vs Ritz-Carlton Yacht Collection: Which One Is Right
            for You?
          </h1>

          <p className="evrc_hero_lead">
            Two exceptional yachts. Two completely different travel experiences.
          </p>

          <p>
            Emerald Yachts are best for travelers who want destination-focused
            itineraries, strong value, and a more active pace. Ritz-Carlton
            Yacht Collection is best for travelers who want larger suites, more
            onboard time, and a residential luxury experience.
          </p>

          {readMore && (
            <>
              <p>
                If you choose the wrong one, it changes the entire feel of your
                trip.
              </p>
            </>
          )}

          <div className="evrc_readmore_wrapper">
            <button
              className="evrc_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="evrc_hero_buttons">
            <button className="evrc_primary_btn">
              Find the Right Yacht for You
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — AUTHORITY BLOCK ===== */}
      <section className="evrc_authority_section">
        <div className="evrc_authority_inner">
          <div className="evrc_authority_content">
            <div className="evrc_authority_left">
              <h2>Written and Reviewed by Angela Hughes</h2>
              <p className="evrc_authority_title">
                CEO &amp; Founder, Trips &amp; Ships Luxury Travel
              </p>
              <div className="evrc_authority_tags">
                <div className="evrc_auth_tag">
                  <Star size={14} className="evrc_icon" />
                  <span>40+ years in travel</span>
                </div>
                <div className="evrc_auth_tag">
                  <Globe size={14} className="evrc_icon" />
                  <span>120+ countries visited</span>
                </div>
                <div className="evrc_auth_tag">
                  <Award size={14} className="evrc_icon" />
                  <span>Featured in Wall Street Journal</span>
                </div>
                <div className="evrc_auth_tag">
                  <Award size={14} className="evrc_icon" />
                  <span>Featured in Travel Weekly</span>
                </div>
              </div>
            </div>
            <div className="evrc_authority_right">
              <img
                src={myImage}
                alt="Angela Hughes — CEO & Founder, Trips & Ships Luxury Travel"
              />
            </div>
          </div>
          <p className="evrc_authority_note">
            Angela Hughes and her team work directly with yacht partners and
            clients, helping travelers align the right yacht with how they
            actually travel.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3 — DECISION FRAMEWORK ===== */}
      <section className="evrc_decision_section">
        <div className="evrc_decision_inner">
          <h2>How to Decide Before You Dig Deeper</h2>

          <div className="evrc_decision_cards">
            <div className="evrc_decision_card evrc_decision_card--emerald">
              <div className="evrc_decision_brand">Emerald Yachts</div>
              <p className="evrc_decision_hook">
                <strong>
                  If your priority is destination immersion and value
                </strong>
              </p>
              <p>
                Emerald is the smarter choice. You will spend more time
                exploring ports, accessing marinas directly, and moving through
                itineraries that are built around where you are going.
              </p>
            </div>
            <div className="evrc_decision_card evrc_decision_card--ritz">
              <div className="evrc_decision_brand">
                Ritz-Carlton Yacht Collection
              </div>
              <p className="evrc_decision_hook">
                <strong>
                  If your priority is space, privacy, and onboard experience
                </strong>
              </p>
              <p>
                Ritz-Carlton is the better fit. The suites are larger, the pace
                is more residential, and the experience is built around time on
                the yacht itself.
              </p>
            </div>
          </div>

          <div className="evrc_decision_note">
            <p>
              Most travelers do not choose wrong because of the yacht. They
              choose wrong because they misunderstand their own travel style.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — SIDE-BY-SIDE COMPARISON TABLE ===== */}
      <section className="evrc_compare_section">
        <div className="evrc_compare_inner">
          <h2>Side-by-Side Comparison</h2>

          <div className="evrc_table_wrapper">
            <table className="evrc_compare_table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Emerald Yachts</th>
                  <th>Ritz-Carlton Yacht Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Guest Count</td>
                  <td>~100 guests</td>
                  <td>~298 guests</td>
                </tr>
                <tr>
                  <td>Suite Size</td>
                  <td>Smaller, modern</td>
                  <td>Larger, all terrace</td>
                </tr>
                <tr>
                  <td>Price Positioning</td>
                  <td>Entry luxury</td>
                  <td>Ultra luxury</td>
                </tr>
                <tr>
                  <td>Itinerary Style</td>
                  <td>Port-intensive</td>
                  <td>Balanced</td>
                </tr>
                <tr>
                  <td>Onboard Experience</td>
                  <td>Light, social</td>
                  <td>Residential, immersive</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Explorers</td>
                  <td>Lifestyle travelers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — BRAND OVERVIEW: EMERALD ===== */}
      <section className="evrc_brand_section evrc_brand_section--light">
        <div className="evrc_brand_inner">
          <div className="evrc_brand_flex">
            <div className="evrc_brand_text">
              <div className="evrc_brand_content">
                <h2>Emerald Yachts</h2>
                <p>
                  Emerald Yachts operates a small fleet including Emerald
                  Azzurra and Emerald Sakara. With around 100 guests per
                  sailing, the experience is built around clean, modern design
                  and direct water access via the marina platform.
                </p>
                <p>
                  This is a destination-first yacht. You are off the vessel
                  often, and the port drives the rhythm of each day.
                </p>

                <div className="evrc_feature_list">
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-anchor"></i>
                    </div>
                    <p>Around 100 guests per sailing</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-water"></i>
                    </div>
                    <p>Marina platform with direct water access</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <p>Port-intensive itineraries</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-gem"></i>
                    </div>
                    <p>Clean, modern design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="evrc_brand_video">
              <div className="evrc_video_wrapper">
                <video
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AIKUdjJ96iUVyUnmWwwHKpk/Emerald%20Cruises/Yacht%20Cruising/Videos/Emerald%20Cruises%20Luxury%20Yacht%20Cruising.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=u6796mr2&raw=1"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              </div>
            </div>
          </div>

          <div className="evrc_brand_callout evrc_brand_callout--emerald">
            <p>
              This experience is built around{" "}
              <strong>where you are going</strong>. You are off the yacht often
              and the destination drives the experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — BRAND OVERVIEW: RITZ-CARLTON ===== */}
      <section className="evrc_brand_section evrc_brand_section--dark">
        <div className="evrc_brand_inner">
          <div className="evrc_brand_flex">
            <div className="evrc_brand_video">
              <div className="evrc_video_wrapper">
                <video
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AGzy-ggsf1Qlag61oJJTosM/Emerald%20Cruises/Yacht%20Cruising/Emerald%20Cruises%20Luxury%20Yachts/Emerald%20Kaia/Videos/Emerald%20Kaia%20-%202%20min%20Video.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=jj7giiko&raw=1"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              </div>
            </div>

            <div className="evrc_brand_text">
              <div className="evrc_brand_content">
                <h2>Ritz-Carlton Yacht Collection</h2>
                <p>
                  The Ritz-Carlton Yacht Collection includes Evrima, Ilma, and
                  Luminara. Fewer than 300 guests per sailing, all-suite
                  accommodations with private terraces, and a crew-to-guest
                  ratio that delivers a genuinely personalized experience.
                </p>
                <p>
                  More time is spent onboard. The yacht itself is the
                  destination as much as the ports of call.
                </p>

                <div className="evrc_feature_list">
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <p>Fewer than 300 guests per sailing</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-door-open"></i>
                    </div>
                    <p>All-suite accommodations with terraces</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-concierge-bell"></i>
                    </div>
                    <p>Higher crew-to-guest ratio</p>
                  </div>
                  <div className="evrc_feature_item">
                    <div className="evrc_feature_icon">
                      <i className="fas fa-home"></i>
                    </div>
                    <p>Residential-style experience onboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="evrc_brand_callout evrc_brand_callout--ritz">
            <p>
              This experience is built around{" "}
              <strong>space, privacy, and time on the yacht itself</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — REAL INSIGHT ===== */}
      <section className="evrc_insight_section">
        <div className="evrc_insight_inner">
          <h2>Where Expectations Go Wrong</h2>

          <div className="evrc_method_steps">
            <div className="evrc_method_step">
              <span className="evrc_step_number">01</span>
              <p>
                On Emerald, the best itineraries sell out first — not the lowest
                price points.
              </p>
            </div>
            <div className="evrc_method_step">
              <span className="evrc_step_number">02</span>
              <p>
                On Ritz-Carlton, pricing escalates quickly as suite categories
                disappear. Early pricing rarely reflects final cost.
              </p>
            </div>
            <div className="evrc_method_step">
              <span className="evrc_step_number">03</span>
              <p>
                Clients often expect Ritz to feel like a cruise. It does not.
              </p>
            </div>
            <div className="evrc_method_step">
              <span className="evrc_step_number">04</span>
              <p>
                Clients sometimes expect Emerald to feel entry level. It does
                not.
              </p>
            </div>
          </div>

          <p className="evrc_insight_note">
            Choosing incorrectly changes the tone of the entire trip.
          </p>
        </div>
      </section>

      {/* ===== SECTION 9 — INCLUSIONS & VALUE ===== */}
      <section className="evrc_inclusions_section">
        <div className="evrc_inclusions_inner">
          <h2>What Each Yacht Includes</h2>

          <div className="evrc_inclusions_grid">
            <div className="evrc_inclusions_card">
              <div className="evrc_inclusions_header evrc_inclusions_header--emerald">
                Emerald Yachts
              </div>
              <div className="evrc_cost_list">
                <div className="evrc_cost_item">
                  <p>Shore Excursions</p>
                  <span>Many included</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Transfers</p>
                  <span>Included</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Meals &amp; Beverages</p>
                  <span>Included (select)</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Marina Access</p>
                  <span>Included</span>
                </div>
              </div>
              <p className="evrc_inclusions_summary">
                Structured and efficient. Strong value for the category.
              </p>
            </div>

            <div className="evrc_inclusions_card">
              <div className="evrc_inclusions_header evrc_inclusions_header--ritz">
                Ritz-Carlton Yacht Collection
              </div>
              <div className="evrc_cost_list">
                <div className="evrc_cost_item">
                  <p>All-Suite Accommodations</p>
                  <span>With terraces</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Elevated Dining</p>
                  <span>Included</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Personalized Service</p>
                  <span>Included</span>
                </div>
                <div className="evrc_cost_item">
                  <p>Onboard Space Ratio</p>
                  <span>Higher than any peer</span>
                </div>
              </div>
              <p className="evrc_inclusions_summary">
                Expansive and experience-driven. Built around time onboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: LONG-TAIL SEO TARGETING ===== */}
      <section className="evrc_seo_section">
        <div className="evrc_seo_inner">
          <h2>Expert Insights & Comparison</h2>
          <div className="evrc_seo_grid">
            <div className="evrc_seo_card">
              <div className="evrc_seo_img_wrapper">
                <img src={ExpertInsight} alt="Emerald Yacht" />
              </div>
              <div className="evrc_seo_content">
                <h3 className="evrc_seo_question">
                  Is Emerald Yacht worth it?
                </h3>
                <p className="evrc_seo_answer">
                  Yes, particularly for travelers entering the yacht category
                  who want strong value and itinerary depth.
                </p>
              </div>
            </div>

            <div className="evrc_seo_card">
              <div className="evrc_seo_img_wrapper">
                <img src={ExpertInsight2} alt="Ritz-Carlton Yacht Experience" />
              </div>
              <div className="evrc_seo_content">
                <h3 className="evrc_seo_question">
                  Is Ritz-Carlton Yacht better than a cruise ship?
                </h3>
                <p className="evrc_seo_answer">
                  It is not a direct comparison. It is a different category
                  focused on onboard experience.
                </p>
              </div>
            </div>

            <div className="evrc_seo_card">
              <div className="evrc_seo_img_wrapper">
                <img src={ExpertInsight3} alt="Luxury Yacht 2026" />
              </div>
              <div className="evrc_seo_content">
                <h3 className="evrc_seo_question">
                  Best luxury yacht cruise in 2026?
                </h3>
                <p className="evrc_seo_answer">
                  Depends on travel style. Emerald and Ritz-Carlton lead for
                  different reasons, offering distinct experiences for modern
                  explorers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW SLIDER ===== */}
      <section className="evrc_row_slider_section">
        <div className="evrc_row_slider_wrapper">
          <div className="evrc_row_slider_track">
            {[
              Slider1,
              Slider2,
              Slider3,
              Slider4,
              Slider5,
              Slider6,
              Slider7,
              Slider1,
              Slider2,
              Slider3,
              Slider4,
              Slider5,
              Slider6,
              Slider7,
            ].map((img, index) => (
              <div className="evrc_row_slider_item" key={index}>
                <img src={img} alt={`Yacht Slider ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10 — WHO EACH IS FOR ===== */}
      <section className="evrc_whoisfor_section">
        <div className="evrc_whoisfor_inner">
          <h2>Who Each Yacht Is Right For</h2>

          <div className="evrc_whoisfor_grid">
            <div className="evrc_whoisfor_card">
              <div className="evrc_whoisfor_label evrc_whoisfor_label--emerald">
                Emerald Yachts is right for you if:
              </div>
              <div className="evrc_method_steps">
                <div className="evrc_method_step">
                  <span className="evrc_step_number">01</span>
                  <p>You want to maximize destinations</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">02</span>
                  <p>You prefer an active itinerary</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">03</span>
                  <p>You want strong value for the category</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">04</span>
                  <p>You are new to yacht travel</p>
                </div>
              </div>
            </div>

            <div className="evrc_whoisfor_card">
              <div className="evrc_whoisfor_label evrc_whoisfor_label--ritz">
                Ritz-Carlton Yacht Collection is right for you if:
              </div>
              <div className="evrc_method_steps">
                <div className="evrc_method_step">
                  <span className="evrc_step_number">01</span>
                  <p>You prioritize space and privacy</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">02</span>
                  <p>You enjoy time onboard the yacht</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">03</span>
                  <p>You are comfortable with higher pricing</p>
                </div>
                <div className="evrc_method_step">
                  <span className="evrc_step_number">04</span>
                  <p>You want a residential-style experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — URGENCY / BOOKING ===== */}
      <section className="evrc_urgency_section">
        <div className="evrc_urgency_inner">
          <h2>Why Timing Matters</h2>

          <p>
            Most of our clients book yacht experiences 9 to 18 months in
            advance. Availability is not the issue. The right suite, on the
            right sailing, is.
          </p>

          <p>
            We work with a limited number of yacht clients per sailing to ensure
            each placement is strategic.
          </p>
        </div>
      </section>

      {/* ===== SECTION 12 — FAQ ===== */}
      <section className="evrc_faq_section">
        <div className="evrc_faq_inner">
          <h2>Frequently Asked Questions</h2>

          <EvrcFAQ
            items={[
              {
                q: "Which is better, Emerald Yachts or Ritz-Carlton Yacht Collection?",
                a: "Emerald is better for destination-focused travel. Ritz-Carlton is better for onboard luxury and space. The answer depends entirely on your travel style.",
              },
              {
                q: "Is Emerald Yacht worth it?",
                a: "Yes, it offers strong value and a modern yacht experience, particularly for travelers who are new to yacht travel or who want to maximize port time.",
              },
              {
                q: "Is Ritz-Carlton Yacht all-inclusive?",
                a: "It is largely inclusive, though some elements vary by sailing and itinerary.",
              },
              {
                q: "Which has larger suites?",
                a: "Ritz-Carlton Yacht Collection offers larger suites with private terraces across all accommodations.",
              },
              {
                q: "Are Emerald Yachts considered luxury?",
                a: "Yes, they fall into the accessible luxury category with modern design and a strong value proposition.",
              },
              {
                q: "Which is better for first-time yacht travelers?",
                a: "Emerald is often the best entry point because of its value, itinerary depth, and approachable scale.",
              },
              {
                q: "Which is more expensive?",
                a: "Ritz-Carlton Yacht Collection is significantly more expensive, with pricing that escalates quickly as suite categories fill.",
              },
              {
                q: "Do both include excursions?",
                a: "Emerald includes many shore excursions. Ritz-Carlton offers curated experiences, though some come at additional cost.",
              },
              {
                q: "Which has better itineraries?",
                a: "Emerald is more port-intensive. Ritz-Carlton balances port time with meaningful time onboard.",
              },
              {
                q: "How far in advance should I book?",
                a: "9 to 18 months ahead is ideal for both brands. The right suite on the right sailing sells before most travelers begin looking.",
              },
              {
                q: "What is the difference between a yacht and an ocean cruise?",
                a: "Yachts offer fewer guests, access to smaller ports, and a more intimate, personalized experience compared to traditional cruise ships.",
              },
              {
                q: "Can Trips & Ships secure perks for yacht bookings?",
                a: "Yes, through preferred partnerships with both brands.",
              },
            ]}
          />
        </div>
      </section>

      {/* ===== SECTION 14 — FINAL CTA ===== */}
      {/* ===== SECTION 14 — FINAL CTA ===== */}
      <section
        className="evrc_finalcta_section"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      >
        {/* Overlay */}
        <div className="evrc_finalcta_overlay"></div>

        {/* Content */}
        <div className="evrc_finalcta_inner">
          <h2>Choose the Right Experience from the Start</h2>

          <p>
            This is not about choosing a brand. It is about choosing the right
            experience. We will guide you through the yacht, the suite, and the
            sailing that aligns with how you actually travel.
          </p>

          <div className="evrc_hero_buttons">
            <button className="evrc_primary_btn">
              Reach Out and Build This Correctly
            </button>

            <button className="evrc_secondary_btn">
              Compare Other Luxury Yachts
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===== INLINE FAQ ACCORDION ===== */
const EvrcFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="evrc_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`evrc_faq_item ${open === i ? "evrc_faq_item--open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="evrc_faq_question">
            <span>{item.q}</span>
            <span className="evrc_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="evrc_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default EmeraldVsRitzCarltonPage;
