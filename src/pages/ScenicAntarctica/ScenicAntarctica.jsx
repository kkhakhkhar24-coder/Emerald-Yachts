import ProfilePictureAH from "../../assets/Media (2).jpg"
import React from "react";
import {
    Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Plus, Minus, Medal, Award, Globe, CheckCircle, Ship, Mountain, Users, Compass, Sparkles
} from 'lucide-react';
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import "../ScenicAntarctica/ScenicAntarctica.css";
import myImage from "../../assets/image.jpg";
import SecondPage1 from "../../assets/SecondPage/SecondPage1.webp";
import SecondPage3 from "../../assets/SecondPage/SecondPage3.webp";
import SecondPage4 from "../../assets/SecondPage/SecondPage4.webp";
import SecondPage5 from "../../assets/SecondPage/SecondPage5.webp";
import SecondPage6 from "../../assets/SecondPage/SecondPage6.webp";
import SecondPage7 from "../../assets/SecondPage/SecondPage7.webp";
import SecondPage8 from "../../assets/SecondPage/SecondPage8.webp";
import SecondPage9 from "../../assets/SecondPage/SecondPage9.webp";
import SecondPage10 from "../../assets/SecondPage/SecondPage10.webp";
import SuiteImg from "../../assets/SecondPage/Suite.webp";
import DiningImg from "../../assets/SecondPage/Dining.webp";
import BeveragesImg from "../../assets/SecondPage/Beverages.webp";
import GuidedImg from "../../assets/SecondPage/Guided.webp";
import OnboardImg from "../../assets/SecondPage/Onboard.webp";

function ScenicAntarctica() {
  const [current, setCurrent] = useState(0);
  const [galleryCurrent, setGalleryCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "What is a Scenic Antarctica cruise?",
      answer:
        "An expedition voyage with guided landings, zodiac excursions, and all-inclusive luxury.",
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies based on suite, timing, and itinerary.",
    },
    {
      question: "What is included?",
      answer: "Accommodation, dining, beverages, and guided excursions.",
    },
    {
      question: "Best time to travel?",
      answer:
        "December–February for wildlife, November & March for unique conditions.",
    },
    {
      question: "How early to book?",
      answer: "12–24 months in advance.",
    },
    {
      question: "Is it physically demanding?",
      answer: "Moderate mobility required.",
    },
  ];
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const images = [SecondPage10, SecondPage8, SecondPage9];

  const galleryImages = [
    SecondPage7,
    SecondPage6,
    SecondPage5,
    SecondPage4,
    SecondPage3,
    SecondPage1,
  ];

  useEffect(() => {
    const heroSlider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    const gallerySlider = setInterval(() => {
      setGalleryCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => {
      clearInterval(heroSlider);
      clearInterval(gallerySlider);
    };
  }, [images.length, galleryImages.length]);

  return (
    <div className="Scenic_page_wrapper">
      <Helmet>
        <title>
          Scenic Antarctica Cruise | Scenic Eclipse Expedition Antarctica
        </title>
        <meta
          name="title"
          content="Scenic Antarctica Cruise | Scenic Eclipse"
        />
        <meta
          name="description"
          content="Plan a Scenic Antarctica cruise aboard Scenic Eclipse. Ultra-luxury, all-inclusive expeditions with expert guidance from Angela Hughes and Trips & Ships Luxury Travel."
        />
        {/* Preload first hero image for better performance */}
        <link rel="preload" as="image" href={images[0]} />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>Scenic Antarctica Cruises</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p>Ultra-luxury expedition travel aboard Scenic Eclipse</p>

          <p>
            Antarctica is one of the most remote and controlled travel
            environments in the world. The success of the journey is determined
            long before departure, based on the ship, the expedition team, and
            the planning behind it.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Scenic Luxury Cruises & Tours designed Scenic Eclipse as a
                discovery yacht specifically for Antarctica, combining
                expedition capability with a fully all-inclusive luxury
                experience.
              </p>

              <p>
                This is structured exploration. Every element is built for
                access, operational precision, and a high level of comfort in an
                extreme environment.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="Scenic_hero_buttons">
            <button className="Scenic_primary_btn">
              Request Antarctica Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="Scenic_team_section">
        <div className="Scenic_team_inner">
          <h2>Why Choose Scenic for Antarctica?</h2>

          <p>
            Scenic operates in the ultra-luxury expedition category with a clear
            positioning: deliver Antarctica access without sacrificing onboard
            experience.
          </p>

          <p>
            Scenic Eclipse is purpose-built for polar travel while offering a
            level of space, design, and service not commonly found in expedition
            vessels.
          </p>

          <p>
            The all-inclusive structure simplifies the journey. Instead of
            managing incremental costs, clients move through the experience with
            clarity around what is included.
          </p>

          <p>Scenic is best suited for travelers who want:</p>

          <p className="Scenic_team_points">
            • A modern expedition yacht designed for polar conditions <br />
            • A seamless, all-inclusive pricing model <br />
            • Elevated accommodations and onboard environment <br />
          </p>
        </div>
      </section>

      
                {/* EXPERT INSIGHT */}
                <section id="explora-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-frame">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                    <div className="medi-editorial-gradient-layer"></div>
                                </div>

                                <div className="medi-editorial-floating-stat">
                                    <div className="medi-stat-tile">
                                        <span className="medi-stat-number">40+</span>
                                        <span className="medi-stat-label">Years Experience</span>
                                    </div>
                                    <div className="medi-stat-divider"></div>
                                    <div className="medi-stat-tile">
                                        <span className="medi-stat-number">121+</span>
                                        <span className="medi-stat-label">Countries Visited</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <Award size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Modern Luxury Travelers <br className="medi-growth-title-break" />Are Choosing Scenic
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Scenic travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Polar discovery yachting',
                                            'Truly all-inclusive luxury',
                                            'Butler service for every suite',
                                            'Helicopter & submarine features',
                                            'Up to 10 dining experiences',
                                            'Immersive Zodiac excursions'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Ultra-luxury yachting', icon: Ship },
                                            { title: 'Polar expeditions', icon: Mountain },
                                            { title: 'Butler services', icon: Users },
                                            { title: 'Luxury cruise planning', icon: Compass },
                                            { title: 'Custom expedition travel', icon: Sparkles }
                                        ].map((item, idx) => {
                                            const IconComponent = item.icon
                                            return (
                                                <div key={idx} className="medi-expertise-pills-row">
                                                    <div className="medi-expertise-pill-icon-box">
                                                        <IconComponent size={14} />
                                                    </div>
                                                    <span className="medi-expertise-pill-text">{item.title}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


      {/* section What Is Included on a Scenic Antarctica Expedition? */}

      <section className="Scenic_expert_section">
        <div className="Scenic_expert_inner">
          <h2>What Is Included on a Scenic Antarctica Expedition?</h2>

          <p>
            Scenic structures its Antarctica voyages as all-inclusive. Details
            should always be confirmed at time of booking, but the model is
            designed to eliminate fragmented pricing.
          </p>

          <p>Typical inclusions:</p>

          <div className="Scenic_expert_cards">
            <div className="Scenic_expert_card">
              <div className="Scenic_card_image">
                <img src={SuiteImg} alt="Suite accommodations" loading="lazy" decoding="async" />
              </div>
              <div className="Scenic_card_content">
                <p>Suite accommodations</p>
              </div>
            </div>

            <div className="Scenic_expert_card">
              <div className="Scenic_card_image">
                <img src={DiningImg} alt="Dining across multiple venues" loading="lazy" decoding="async" />
              </div>
              <div className="Scenic_card_content">
                <p>Dining across multiple venues</p>
              </div>
            </div>

            <div className="Scenic_expert_card">
              <div className="Scenic_card_image">
                <img src={BeveragesImg} alt="Beverages" loading="lazy" decoding="async" />
              </div>
              <div className="Scenic_card_content">
                <p>Beverages</p>
              </div>
            </div>

            <div className="Scenic_expert_card">
              <div className="Scenic_card_image">
                <img src={GuidedImg} alt="Guided expedition landings" loading="lazy" decoding="async" />
              </div>
              <div className="Scenic_card_content">
                <p>Guided expedition landings and zodiac excursions</p>
              </div>
            </div>

            <div className="Scenic_expert_card">
              <div className="Scenic_card_image">
                <img src={OnboardImg} alt="Onboard lectures" loading="lazy" decoding="async" />
              </div>
              <div className="Scenic_card_content">
                <p>Onboard lectures and enrichment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 ================= */}
      <section className="Scenic_team_Cruises_section">
        <div className="Scenic_team_Cruises_inner">
          <h2>How Scenic Compares to Other Antarctica Expedition Cruises?</h2>

          <p>
            Travelers evaluating Antarctica often compare multiple expedition
            cruise lines.
          </p>

          <p>Scenic’s position is distinct within the market:</p>

          <p className="Scenic_team_Cruises_points">
            • Scenic: all-inclusive structure with a modern luxury yacht
            environment <br />
            • Silversea Cruises: strong expedition heritage with a more
            traditional luxury approach <br />
            • Seabourn Cruise Line: refined, smaller ship experience with
            expedition capability <br />• Ponant: boutique expedition style with
            a European design influence
          </p>

          <p>
            The right choice depends on travel style, expectations, and
            priorities. Scenic is ideal for clients who want simplicity,
            structure, and a contemporary luxury experience.
          </p>
        </div>
      </section>

      {/* ================= NEW VIDEO SECTION ================= */}
      <section className="Scenic_youtube_video_section">
        <div className="Scenic_section_header">
          <h2>Experience Scenic Eclipse</h2>
          <div className="Scenic_accent_line"></div>
        </div>
        <div className="Scenic_youtube_video_inner">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MlndaJ0LN7E?si=v-S_FIpbcGGPpfBH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ================= SECTION 6 ================= */}
      <section className="Scenic_right_experience_section">
        <div className="Scenic_right_experience_inner">
          <div className="Scenic_right_experience_content">
            <h2>Is Antarctica the Right Experience for You?</h2>

            <p>
              Antarctica is not a passive destination. It requires flexibility
              and a clear understanding of what the experience involves.
            </p>

            <p>Considerations include:</p>

            <ul className="Scenic_styled_list">
              <li>
                <i className="fas fa-check"></i> The Drake Passage crossing,
                which can vary in conditions
              </li>
              <li>
                <i className="fas fa-check"></i> Zodiac transfers and uneven
                terrain during landings
              </li>
              <li>
                <i className="fas fa-check"></i> Weather-driven itinerary
                adjustments
              </li>
            </ul>

            <p>
              Scenic is designed to provide a high level of comfort throughout,
              but the experience remains an active expedition.
            </p>

            <p>
              For many travelers, Antarctica becomes one of the most meaningful
              journeys they will take. The key is approaching it with the right
              expectations and preparation.
            </p>
          </div>

          <div className="Scenic_right_experience_image">
            <img src={SecondPage3} alt="Scenic Antarctica Explorer" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 ================= */}
      <section className="Scenic_team_Routes_section">
        <div className="Scenic_team_Routes_inner">
          <h2>Antarctica Itineraries and Routes</h2>

          <p>
            Most Scenic Antarctica voyages depart from South America, typically
            Argentina or Chile. The journey includes crossing the Drake Passage
            before entering the Antarctic Peninsula.
          </p>

          <p>
            Routes remain flexible. Weather, ice conditions, and wildlife
            activity determine daily operations.
          </p>

          <p>This variability is a defining part of Antarctica travel.</p>
        </div>
      </section>

      {/* ================= NEW VIDEO SECTION ================= */}
      <section className="Scenic_video_grid_section">
        <div className="Scenic_section_header">
          <h2>Antarctica Expedition Highlights</h2>
          <div className="Scenic_accent_line"></div>
        </div>
        <div className="Scenic_video_grid_inner">
          <div className="Scenic_video_row">
            <div className="Scenic_video_item">
              <video autoPlay muted loop playsInline controls poster={SecondPage10} preload="metadata">
                <source
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/ACNt3LrAxynWJPY-CRQRbH8/Scenic/Scenic%20Ocean/Videos/Antarctica/Reel%20Format/Wildlife%20Of%20Antarctica%20Social%20Reel%201%20-%20World%20Wildlife%20Day%20(1).mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=ba372ruc&raw=1"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h3>Wildlife of Antarctica</h3>
              <p className="Scenic_video_desc">
                Witness the raw power and beauty of Antarctica's diverse animal
                kingdom in their natural polar habitat.
              </p>
            </div>
            <div className="Scenic_video_item">
              <video autoPlay muted loop playsInline controls poster={SecondPage8} preload="metadata">
                <source
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AK_BXGRAgNIVFjkeht6x-hw/Scenic/Scenic%20Ocean/Videos/Antarctica/30s-Antarctica%20and%20East%20Antarctica_Brochure%20video_Gen_CTA.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=f9qak7ti&raw=1"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h3>Antarctica & East Antarctica</h3>
              <p className="Scenic_video_desc">
                An extraordinary journey through the world's last great
                wilderness and most remote coastal regions.
              </p>
            </div>
            <div className="Scenic_video_item">
              <video autoPlay muted loop playsInline controls poster={SecondPage9} preload="metadata">
                <source
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/APLYAQLs3hUko6hSJWqpcIo/Scenic/Scenic%20Ocean/Videos/Antarctica/Scenic%20Eclipse%20_%20%20Exploring%20East%20Antarctica%20and%20the%20Ross%20Sea.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=ovtwu8dc&raw=1"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h3>Exploring East Antarctica & Ross Sea</h3>
              <p className="Scenic_video_desc">
                Discover the historic routes and frozen landscapes of the
                dramatic and rarely visited Ross Sea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8 ================= */}
      <section className="Scenic_pricing_investment_section">
        <div className="Scenic_pricing_investment_inner">
          <h2>Pricing and Investment Strategy</h2>

          <p className="Scenic_pricing_lead">
            Antarctica is a limited-access destination with strict capacity
            controls. Scenic operates within the ultra-luxury segment.
            Expeditions represent a significant travel investment. The value is
            driven by:
          </p>

          <div className="Scenic_investment_factors">
            <div className="Scenic_factor_card">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Restricted Access</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-ship"></i>
              <h4>Limited Capacity</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-shield-alt"></i>
              <h4>Safety Standards</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-glass-cheers"></i>
              <h4>All-Inclusive</h4>
            </div>
          </div>

          <p className="Scenic_pricing_footer">
            Pricing varies based on suite category, itinerary length, timing,
            and availability. Strategic planning allows clients to secure the
            right experience well in advance.
          </p>
        </div>
      </section>

      {/* ================= SECTION 9 ================= */}
      <section className="Scenic_season_section">
        <div className="Scenic_season_inner">
          <div className="Scenic_section_header">
            <h2>When to Travel to Antarctica</h2>
            <p>
              The Antarctica expedition season runs exclusively from November
              through March.
            </p>
          </div>

          <div className="Scenic_season_cards">
            <div className="Scenic_season_card Scenic_season_card--early">
              <div className="Scenic_season_icon">
                <i className="fas fa-snowflake"></i>
              </div>
              {/* <div className="Scenic_season_label">November – Early December</div> */}
              <h4>Early Season</h4>
              <p>
                Pristine ice, untouched landscapes, and courtship behaviors
                among penguins.
              </p>
            </div>

            <div className="Scenic_season_card Scenic_season_card--mid">
              <div className="Scenic_season_icon">
                <i className="fas fa-paw"></i>
              </div>
              {/* <div className="Scenic_season_label">Late December – January</div> */}
              <h4>Mid Season</h4>
              <p>
                Peak summer temperatures, hatching penguin chicks, and peak
                wildlife activity.
              </p>
            </div>

            <div className="Scenic_season_card Scenic_season_card--late">
              <div className="Scenic_season_icon">
                <i className="fas fa-water"></i>
              </div>
              {/* <div className="Scenic_season_label">February – March</div> */}
              <h4>Late Season</h4>
              <p>
                Incredible whale activity, receding ice opening up new channels,
                and spectacular sunsets.
              </p>
            </div>
          </div>

          <div className="Scenic_season_footer">
            <i className="fas fa-info-circle"></i>
            <p>
              The best timing depends entirely on your personal priorities. All
              months offer exceptional expedition conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10 ================= */}
      <section className="Scenic_about_yachts_Happens_section">
        <div className="Scenic_about_yachts_Happens_inner">
          <h2>What Happens Next?</h2>

          <p>Initial consultation to define timing, goals, and comfort level</p>
          <p>Curated Scenic options with strategic recommendations</p>
          <p>Booking, logistics, and full expedition preparation</p>

          <p>
            This process ensures the journey is structured correctly before
            confirmation.
          </p>
        </div>
      </section>

      {/* ================= SECTION 11 — EXPERT TEAM & PERSONAL CURATOR ================= */}
      <section className="Scenic_expert_team_merged_section">
        <div className="Scenic_insight_inner">
          <div className="Scenic_insight_flex">
            {/* CONTENT (LEFT) */}
            <div className="Scenic_insight_content">
              <h2>
                Why Book with Angela Hughes and Trips & Ships Luxury Travel?
              </h2>

              <div className="Scenic_expert_sub">
                <p>Antarctica requires strategic planning and execution.</p>
                <p>
                  Angela Hughes brings over four decades of experience in the
                  travel industry and has traveled to 121 countries and
                  territories.
                </p>
              </div>

              <ul className="Scenic_styled_list Scenic_team_points_styled">
                <li>
                  <i className="fas fa-check-circle"></i> Strategic positioning
                  across expedition inventory
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Access to preferred
                  availability and timing
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Full itinerary
                  coordination
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Ongoing support
                  throughout the journey
                </li>
              </ul>

              <div className="Scenic_curated_card">
                <div className="Scenic_curated_card_header">
                  <div className="Scenic_curated_card_title">
                    <h2>Planned and Curated by Angela Hughes</h2>
                    <p className="Scenic_curator_subtitle">
                      CEO & Founder, Trips & Ships Luxury Travel
                    </p>
                  </div>
                </div>

                <div className="Scenic_curated_badges">
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-award"></i>
                    <span>40+ years of expertise</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-globe-americas"></i>
                    <span>121 countries traveled</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <Medal size={20} color="#2f4a6d" />
                    <span>Luxury Travel Influencer of the Year</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-crown"></i>
                    <span>Most Influential Women in Travel (2026)</span>
                  </div>
                </div>

                <p className="Scenic_curator_featured">
                  Featured in <strong>Travel Weekly</strong>,{" "}
                  <strong>TravelPulse</strong>, and other leading industry
                  publications.
                </p>
              </div>

              <div className="Scenic_expert_sub Scenic_margin_top">
                <p>
                  Clients are often positioned into inventory that is no longer
                  publicly available due to timing and relationships.
                </p>
                <p>
                  Every Antarctica journey is reviewed and structured prior to
                  confirmation to ensure accuracy and alignment.
                </p>
              </div>
            </div>

            {/* IMAGE (RIGHT) */}
            <div className="Scenic_insight_image_container">
              <div className="Scenic_insight_image_wrapper">
                <img
                  src={myImage}
                  alt="Angela Hughes - Luxury Travel Advisor"
                  className="Scenic_insight_expert_image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13 ================= */}
      <section className="Scenic_team_Hughes_section">
        <div className="Scenic_team_Hughes_inner">
          <h2>About Angela Hughes</h2>

          <p>
            Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel
            and Luxury Travel University.
          </p>

          <p>
            She specializes in luxury and expedition travel and works with
            clients seeking high-level, customized global experiences.
          </p>
        </div>
      </section>

      {/* ================= SECTION 14 (FAQ) ================= */}

      <section className="Scenic-faq-section">
        <div className="Scenic-faq-inner">
          <h2>Frequently Asked Questions About Scenic Antarctica</h2>

          <div className="Scenic-faq-accordion">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`Scenic-faq-item ${
                  activeFaq === index ? "Scenic-active" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="Scenic-faq-question">
                  <span>{faq.question}</span>
                  <span className="Scenic-faq-icon">
                    {activeFaq === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </div>

                <div className="Scenic-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 15 CTA ================= */}
      <section className="Scenic_cta_section">
        <div className="Scenic_cta_overlay"></div>
        <div className="Scenic_cta_inner">
          <h2>Plan Your Scenic Antarctica Expedition</h2>

          <p>
            Antarctica is not a destination to approach casually. Work with a
            team that understands how to structure the experience correctly from
            the beginning.
          </p>

          <div className="Scenic_hero_buttons">
            <button className="Scenic_primary_btn">
              Start Your Antarctica Plan
            </button>
            <button className="Scenic_secondary_btn">
              Download Antarctica Planning Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScenicAntarctica;
