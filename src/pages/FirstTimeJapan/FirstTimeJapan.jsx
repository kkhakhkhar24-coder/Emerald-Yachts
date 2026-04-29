import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Waves,
  Landmark,
  Utensils,
  Bed,
  MapPinOff,
  CalendarX,
  Footprints,
  CircleSlash,
  Zap,
  FastForward,
  Compass,
} from "lucide-react";
import "./FirstTimeJapan.css";
import myimage from "../../assets/image.webp";
import Ftjapan1 from "../../assets/FirstTimeJapan/Ftjapan1.webp";
import Ftjapan2 from "../../assets/FirstTimeJapan/Ftjapan2.webp";
import Ftjapan3 from "../../assets/FirstTimeJapan/Ftjapan3.webp";
import Jhero1 from "../../assets/FirstTimeJapan/Jhero1.webp";
import Jhero2 from "../../assets/FirstTimeJapan/Jhero2.webp";
import Jhero3 from "../../assets/FirstTimeJapan/Jhero3.webp";
import Ftjapan4 from "../../assets/FirstTimeJapan/Ftjapan4.webp";

/* ===== INLINE FAQ ACCORDION ===== */
const FTJapanFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="FTJapan_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className="FTJapan_faq_item"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="FTJapan_faq_question">
            <span>{item.q}</span>
            <span className="FTJapan_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="FTJapan_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

const FirstTimeJapan = () => {
  const [readMore, setReadMore] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [Jhero1, Jhero2, Jhero3];

  useEffect(() => {
    const heroSlider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(heroSlider);
  }, [images.length]);

  const faqItems = [
    {
      q: "What is the best itinerary for a first trip to Japan?",
      a: "A 10 to 14 day itinerary including Tokyo, Kyoto, Osaka, and optionally one slower destination like Hakone or Nara is ideal for a first trip to Japan.",
    },
    {
      q: "How many days do I need in Japan for a first trip?",
      a: "Most first-time travelers need 10 to 14 days in Japan to balance major cities, cultural experiences, and reasonable pacing.",
    },
    {
      q: "Should I start in Tokyo or Kyoto?",
      a: "Most first-time itineraries start in Tokyo and move west to Kyoto and Osaka for the most efficient travel flow.",
    },
    {
      q: "Is Osaka worth visiting on a first trip to Japan?",
      a: "Yes. Osaka is worth visiting for its food culture, energy, and contrast with Tokyo and Kyoto.",
    },
    {
      q: "Should I add Hakone to my first Japan itinerary?",
      a: "Yes, if you want a slower stop with a ryokan and onsen experience. Hakone is one of the best additions to a first Japan itinerary.",
    },
    {
      q: "Is Japan easy to travel for first-time visitors?",
      a: "Japan can feel complex at first, but with proper planning it is one of the smoothest and most rewarding countries to travel.",
    },
    {
      q: "Should I use trains in Japan?",
      a: "Yes. Trains are usually the most efficient and practical way to move between major destinations on a first trip to Japan.",
    },
    {
      q: "Is Japan expensive for first-time travelers?",
      a: "Japan can be done at different price points. Costs depend on timing, hotels, transportation, and whether the trip is mid-range or luxury.",
    },
    {
      q: "Can I do Japan without a guide?",
      a: "Yes, but private guides and well-structured planning can significantly improve the experience, especially on a first trip.",
    },
    {
      q: "What is the biggest mistake when planning a first trip to Japan?",
      a: "The biggest mistake is trying to do too much in too little time and moving too quickly between destinations.",
    },
    {
      q: "Should I cruise Japan on my first trip?",
      a: "For most first-time visitors, land travel is better than cruising because it offers deeper access to Tokyo, Kyoto, Osaka, and the overall culture.",
    },
    {
      q: "Do I need a travel advisor for Japan?",
      a: "A travel advisor is highly recommended for Japan because timing, pacing, hotel selection, and logistics make a major difference in the quality of the trip.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          First-Time Japan Itinerary: The Perfect 10–14 Day Japan Trip
        </title>
        <meta
          name="title"
          content="First-Time Japan Itinerary: The Perfect 10–14 Day Japan Trip"
        />
        <meta
          name="description"
          content="Plan your first trip to Japan with this expert 10–14 day itinerary. Discover where to go, how long to stay, and how to structure the perfect trip."
        />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "First-Time Japan Itinerary: The Perfect 10–14 Day Japan Trip",
              "description": "Plan your first trip to Japan with this expert 10–14 day itinerary. Discover where to go, how long to stay, and how to structure the perfect trip.",
              "author": {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Trips & Ships Luxury Travel"
                }
              },
              "publisher": {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.tripsandships.com/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/first-time-japan-itinerary"
              },
              "datePublished": "2026-04-18",
              "dateModified": "2026-04-18"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best itinerary for a first trip to Japan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A 10 to 14 day itinerary including Tokyo, Kyoto, Osaka, and optionally one slower destination like Hakone or Nara is ideal for a first trip to Japan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many days do I need in Japan for a first trip?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most first-time travelers need 10 to 14 days in Japan to balance major cities, cultural experiences, and reasonable pacing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I start in Tokyo or Kyoto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most first-time itineraries start in Tokyo and move west to Kyoto and Osaka for the most efficient travel flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Osaka worth visiting on a first trip to Japan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Osaka is worth visiting for its food culture, energy, and contrast with Tokyo and Kyoto."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I add Hakone to my first Japan itinerary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you want a slower stop with a ryokan and onsen experience. Hakone is one of the best additions to a first Japan itinerary."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Japan easy to travel for first-time visitors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Japan can feel complex at first, but with proper planning it is one of the smoothest and most rewarding countries to travel."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use trains in Japan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Trains are usually the most efficient and practical way to move between major destinations on a first trip to Japan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Japan expensive for first-time travelers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Japan can be done at different price points. Costs depend on timing, hotels, transportation, and whether the trip is mid-range or luxury."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I do Japan without a guide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but private guides and well-structured planning can significantly improve the experience, especially on a first trip."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the biggest mistake when planning a first trip to Japan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The biggest mistake is trying to do too much in too little time and moving too quickly between destinations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I cruise Japan on my first trip?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most first-time visitors, land travel is better than cruising because it offers deeper access to Tokyo, Kyoto, Osaka, and the overall culture."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a travel advisor for Japan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A travel advisor is highly recommended for Japan because timing, pacing, hotel selection, and logistics make a major difference in the quality of the trip."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
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
                  "name": "Japan Travel",
                  "item": "https://www.tripsandships.com/luxury-japan-travel"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "First-Time Japan Itinerary",
                  "item": "https://www.tripsandships.com/first-time-japan-itinerary"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Trips & Ships Luxury Travel",
              "url": "https://www.tripsandships.com",
              "logo": "https://www.tripsandships.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/tripsandships"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Angela Hughes",
              "jobTitle": "CEO",
              "worksFor": {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel"
              },
              "url": "https://www.tripsandships.com/about-angela-hughes",
              "sameAs": [
                "https://www.instagram.com/tripsandships"
              ]
            }
          ])}
        </script>
        <link rel="preload" as="image" href={images[0]} />
      </Helmet>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="FTJapan_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`FTJapan_hero_bg ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="FTJapan_hero_overlay"></div>
        <div className="FTJapan_hero_content">
          <h1>First-Time Japan Itinerary: The Perfect 10–14 Day Japan Trip</h1>

          <p>Japan is not a trip you rush. It is a place you settle into.</p>

          {readMore && (
            <>
              <p>
                Most travelers planning their first trip to Japan feel
                overwhelmed. Too many cities, too many options, and no clear way
                to put it all together.
              </p>
              <p>
                After living in Japan and designing itineraries there for years,
                I can tell you this: the difference between a good trip and an
                exceptional one is not where you go. It is how you structure it.
              </p>
            </>
          )}

          <div className="FTJapan_readmore_wrapper">
            <button
              className="FTJapan_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="FTJapan_hero_buttons">
            <button className="FTJapan_primary_btn">Plan My Japan Trip</button>
          </div>
        </div>
      </section>

      {/* ===== PLAN YOUR TRIP WITH AN EXPERT ===== */}
      <section className="FTJapan_expert_section">
        <div className="FTJapan_expert_inner">
          <div className="FTJapan_expert_flex">
            <div className="FTJapan_expert_content">
              <h2>Plan Your Japan Trip With an Expert</h2>
              <span className="FTJapan_expert_highlight">
                Angela Hughes — CEO, Trips &amp; Ships Luxury Travel
              </span>
              <p>
                Japan is one of the most complex destinations in the world to
                plan well. The difference between a good trip and an exceptional
                one comes down to timing, pacing, and structure.
              </p>
              <ul className="FTJapan_expert_credentials">
                <li>40+ years in the travel industry</li>
                <li>Lived in Japan &amp; returns regularly</li>
                <li>Designs custom Tokyo, Kyoto &amp; Osaka itineraries</li>
                <li>Works directly with hotels &amp; on-the-ground partners</li>
                <li>Leads a team of 140+ luxury travel advisors</li>
                <li>Expert in timing, pacing &amp; structure</li>
              </ul>
              <div
                className="FTJapan_hero_buttons"
                style={{ justifyContent: "flex-start", marginTop: 0 }}
              >
                <button className="FTJapan_cta_primary_btn">
                  Plan My Japan Trip
                </button>
              </div>
            </div>
            <div className="FTJapan_expert_image_container">
              <div className="FTJapan_expert_image_wrapper">
                <img
                  src={myimage}
                  alt="Angela Hughes — Japan Travel Expert at Trips & Ships Luxury Travel"
                  className="FTJapan_expert_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS THE BEST FIRST-TIME JAPAN ITINERARY ===== */}
      <section className="FTJapan_about_section">
        <div className="FTJapan_about_inner">
          <span className="FTJapan_section_badge">The Essentialsr</span>
          <h2>What Is the Best First-Time Japan Itinerary?</h2>
          <p>
            The best first-time Japan itinerary is a 10 to 14 day trip
            including:
          </p>
          <ul className="FTJapan_quick_list">
            <li>Tokyo (3 to 4 nights)</li>
            <li>Kyoto (3 to 4 nights)</li>
            <li>Osaka (2 to 3 nights)</li>
            <li>One additional destination like Hakone or Nara</li>
          </ul>
          <p className="FTJapan_about_footer">
            This structure provides the ideal balance of culture, food, cities,
            and pace.
          </p>
        </div>
      </section>

      <section className="FTJapan_quick_answer_v2_section">
        <div className="FTJapan_quick_answer_v2_inner">
          <span className="FTJapan_section_badge">Quick Answe</span>
          <h2>First-Time Japan Itinerary</h2>
          <ul className="FTJapan_v2_list">
            <li>Start in Tokyo</li>
            <li>Slow down in Kyoto</li>
            <li>Eat your way through Osaka</li>
            <li>Add one quieter destination</li>
            <li className="FTJapan_v2_highlight">Total trip: 10 to 14 days</li>
          </ul>
        </div>
      </section>

      <section className="FTJapan_summary_10s_section">
        <div className="FTJapan_summary_10s_inner">
          <div className="FTJapan_summary_grid">
            {/* LEFT CONTENT */}
            <div className="FTJapan_summary_text_content">
              <span className="FTJapan_section_badge">The Essentials</span>
              <h2>If You Only Have 10 Seconds</h2>
              <div className="FTJapan_summary_10s_content">
                <ul className="FTJapan_summary_list">
                  <li>Start in Tokyo.</li>
                  <li>Slow down in Kyoto.</li>
                  <li>Add Osaka.</li>
                  <li>Include one quieter stop.</li>
                </ul>
                <p className="FTJapan_summary_footer">
                  That is the foundation of a great first trip.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="FTJapan_summary_image_container">
              <img src={Ftjapan1} alt="Scenic Japan view" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GEOGRAPHIC FLOW ===== */}
      <section className="FTJapan_geo_section">
        <div className="FTJapan_geo_inner">
          <span className="FTJapan_section_badge">Travel Flow</span>
          <h2>How Japan Flows Geographically</h2>
          <p>
            Most first-time itineraries follow a natural east-to-west route.
            This makes travel efficient and avoids unnecessary backtracking.
          </p>
          <div className="FTJapan_flow_track">
            <div className="FTJapan_flow_city">
              <span className="FTJapan_flow_city_name">Tokyo</span>
              <span className="FTJapan_flow_city_nights">3–4 Nights</span>
            </div>
            <span className="FTJapan_flow_arrow">→</span>
            <div className="FTJapan_flow_city">
              <span className="FTJapan_flow_city_name">Kyoto</span>
              <span className="FTJapan_flow_city_nights">3–4 Nights</span>
            </div>
            <span className="FTJapan_flow_arrow">→</span>
            <div className="FTJapan_flow_city">
              <span className="FTJapan_flow_city_name">Osaka</span>
              <span className="FTJapan_flow_city_nights">2–3 Nights</span>
            </div>
            <span className="FTJapan_flow_arrow">→</span>
            <div className="FTJapan_flow_city">
              <span className="FTJapan_flow_city_name">Return</span>
              <span className="FTJapan_flow_city_nights">Departure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAMPLE 10-DAY ITINERARY ===== */}
      <section className="FTJapan_itinerary_section">
        <div className="FTJapan_itinerary_inner">
          <div className="FTJapan_itinerary_header">
            <span className="FTJapan_section_badge">Day by Day</span>
            <h2>Sample 10-Day Japan Itinerary</h2>
            <p>
              A structured day-by-day breakdown that balances exploration,
              culture, and rest.
            </p>
          </div>
          <div className="FTJapan_days_grid">
            {[
              {
                day: "01",
                title: "Arrive in Tokyo",
                desc: "Settle in, overcome jet lag, explore your neighborhood.",
              },
              {
                day: "02",
                title: "Tokyo Neighborhoods & Food",
                desc: "Shibuya, Shinjuku, Asakusa — food markets and local streets.",
              },
              {
                day: "03",
                title: "Tokyo Exploration",
                desc: "Deeper neighborhood discovery, art, architecture, and culture.",
              },
              {
                day: "04",
                title: "Travel to Kyoto",
                desc: "Take the Shinkansen west. Arrive and orient yourself in Kyoto.",
              },
              {
                day: "05",
                title: "Kyoto Temples",
                desc: "Fushimi Inari, Kinkaku-ji, Ryoan-ji — the iconic temple circuit.",
              },
              {
                day: "06",
                title: "Kyoto Cultural Experiences",
                desc: "Gion district, traditional tea ceremony, and local markets.",
              },
              {
                day: "07",
                title: "Travel to Osaka",
                desc: "A short train ride south. Arrive, check in, explore Dotonbori.",
              },
              {
                day: "08",
                title: "Osaka Food & Nightlife",
                desc: "Street food, takoyaki, ramen — Osaka lives for eating well.",
              },
              {
                day: "09",
                title: "Day Trip or Slower Exploration",
                desc: "Visit Nara for deer and temples, or take a slower Osaka day.",
              },
              {
                day: "10",
                title: "Departure",
                desc: "Final morning in Japan. Depart from Osaka or back to Tokyo.",
              },
            ].map((item) => (
              <div className="FTJapan_day_card" key={item.day}>
                <div className="FTJapan_day_num">
                  <span>{item.day}</span>
                </div>
                <div className="FTJapan_day_info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERFECT 10-DAY & 14-DAY STRUCTURE ===== */}
      <section className="FTJapan_experience_section">
        <div className="FTJapan_experience_inner">
          <div className="FTJapan_experience_header">
            <span className="FTJapan_section_badge">The Structure</span>
            <h2>The Perfect 10 &amp; 14-Day Structure</h2>
            <p>
              Every phase of the itinerary serves a purpose. Tokyo energizes,
              Kyoto grounds, and Osaka delights. The ideal 14-day version adds
              depth and breathing room.
            </p>
          </div>

          <div className="FTJapan_experience_content_wrapper">
            <div className="FTJapan_experience_text">
              <ul className="FTJapan_phase_list">
                <li className="FTJapan_phase_item">
                  <div className="FTJapan_phase_city">Days 1–4 · Tokyo</div>
                  <div className="FTJapan_phase_desc">
                    Shibuya, Shinjuku, Asakusa — food markets and neighborhood
                    exploration.
                  </div>
                </li>
                <li className="FTJapan_phase_item">
                  <div className="FTJapan_phase_city">Days 5–7 · Kyoto</div>
                  <div className="FTJapan_phase_desc">
                    Temples, shrines, Gion district, and cultural experiences.
                  </div>
                </li>
                <li className="FTJapan_phase_item">
                  <div className="FTJapan_phase_city">Days 8–9 · Osaka</div>
                  <div className="FTJapan_phase_desc">
                    Street food, nightlife, energy, and contrast from Kyoto.
                  </div>
                </li>
                <li className="FTJapan_phase_item">
                  <div className="FTJapan_phase_city">14-Day Additions</div>
                  <div className="FTJapan_phase_desc">
                    Hakone ryokan stay, Nara day trip, and extra Tokyo nights
                    for better pacing.
                  </div>
                </li>
              </ul>
            </div>

            <div className="FTJapan_experience_cards_grid">
              {[
                {
                  title: "Tokyo Energy",
                  img: Jhero1,
                  desc: "Modernity and tradition collide.",
                },
                {
                  title: "Kyoto Culture",
                  img: Ftjapan2,
                  desc: "Timeless temples and serene gardens.",
                },
                {
                  title: "Osaka Flavors",
                  img: Ftjapan3,
                  desc: "The world's greatest food scene.",
                },
                {
                  title: "Regional Depth",
                  img: Ftjapan1,
                  desc: "Quieter moments in Hakone or Nara.",
                },
              ].map((card, i) => (
                <div className="FTJapan_experience_card" key={i}>
                  <div className="FTJapan_experience_card_image">
                    <img src={card.img} alt={card.title} />
                  </div>
                  <div className="FTJapan_experience_card_body">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO PACE YOUR ITINERARY ===== */}
      <section className="FTJapan_pacing_section">
        <div className="FTJapan_pacing_inner">
          <span className="FTJapan_section_badge">Pacing</span>
          <h2>How to Pace Your Japan Itinerary</h2>
          <p>
            Japan is not about how many places you visit. It is about how you
            move between them. The best itineraries are built around restraint,
            not ambition.
          </p>
          <div className="FTJapan_tips_grid">
            {[
              {
                title: "Limit Hotel Changes",
                desc: "Every move costs time and energy. Fewer hotels means more presence in each city.",
              },
              {
                title: "Balance Busy & Slow Days",
                desc: "After a full temple day, build in a morning to wander with no agenda.",
              },
              {
                title: "Allow Time to Wander",
                desc: "Some of the best Japan moments happen in streets you didn't plan to walk down.",
              },
              {
                title: "Build Recovery Time",
                desc: "Long-haul travel and time zone shifts are real. Schedule lighter days after major travel.",
              },
            ].map((tip, i) => (
              <div className="FTJapan_tip_card" key={tip.title}>
                <div className="FTJapan_tip_num">0{i + 1}</div>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COST & TIMING ===== */}
      <section className="FTJapan_cost_section">
        <div className="FTJapan_cost_inner">
          <span className="FTJapan_section_badge">Budget &amp; Timing</span>
          <h2>Japan Travel Cost &amp; Best Time to Go</h2>
          <div className="FTJapan_cost_cards">
            <div className="FTJapan_cost_card">
              <div className="FTJapan_cost_label">Mid-Range Per Day</div>
              <div className="FTJapan_cost_price">$400 – $700</div>
              <div className="FTJapan_cost_note">
                Hotels, food, transport &amp; activities included
              </div>
            </div>
            <div className="FTJapan_cost_card">
              <div className="FTJapan_cost_label">Luxury Per Day</div>
              <div className="FTJapan_cost_price">$800 – $1,500+</div>
              <div className="FTJapan_cost_note">
                Premium ryokans, private guides &amp; elevated dining
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TIMING IMPACTS YOUR TRIP ===== */}
      <section className="FTJapan_timing_impact_section">
        <div className="FTJapan_timing_impact_inner">
          <span className="FTJapan_section_badge">Timing</span>
          <h2>How Timing Impacts Your Trip</h2>
          <p>Timing affects crowds, pricing, and experience.</p>

          <div className="FTJapan_seasonal_grid">
            <div className="FTJapan_season_card">
              <div className="FTJapan_season_name">Spring</div>
              <div className="FTJapan_season_impact">Cherry Blossoms</div>
            </div>
            <div className="FTJapan_season_card">
              <div className="FTJapan_season_name">Fall</div>
              <div className="FTJapan_season_impact">Foliage</div>
            </div>
            <div className="FTJapan_season_card">
              <div className="FTJapan_season_name">Summer</div>
              <div className="FTJapan_season_impact">Festivals</div>
            </div>
            <div className="FTJapan_season_card">
              <div className="FTJapan_season_name">Winter</div>
              <div className="FTJapan_season_impact">Fewer Crowds</div>
            </div>
          </div>

          <div className="FTJapan_timing_footer">
            <p>
              See our{" "}
              <span className="FTJapan_text_link">
                best time to visit Japan guide
              </span>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LAND VS CRUISE ===== */}
      <section className="FTJapan_landcruise_section">
        <div className="FTJapan_landcruise_inner">
          <div className="FTJapan_landcruise_grid">
            {/* LEFT CONTENT */}
            <div className="FTJapan_landcruise_text">
              <span className="FTJapan_section_badge">The Choice</span>
              <h2>Should You Do Japan by Land or Cruise?</h2>
              <p>For first-time visitors, land travel is usually best.</p>
              <div className="FTJapan_landcruise_footer">
                <p>
                  Compare options in our{" "}
                  <span className="FTJapan_text_link">
                    Japan land vs cruise guide
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="FTJapan_landcruise_image_container">
              <img src={Ftjapan4} alt="Japan Land vs Cruise" />
            </div>
          </div>
        </div>
      </section>

      <section className="FTJapan_customize_section">
        <div className="FTJapan_customize_inner">
          <span className="FTJapan_section_badge">Personalize</span>
          <h2>How to Customize This Itinerary</h2>
          <div className="FTJapan_customize_grid">
            {[
              {
                title: "Hakone Relaxation",
                subtitle: "Add Hakone for hot springs & Mt. Fuji views",
                icon: <Waves size={32} />,
              },
              {
                title: "Nara Heritage",
                subtitle: "Add Nara for ancient temples & deer park",
                icon: <Landmark size={32} />,
              },
              {
                title: "Tokyo Extension",
                subtitle: "Extend Tokyo for deeper food & shopping",
                icon: <Utensils size={32} />,
              },
              {
                title: "Ryokan Stay",
                subtitle: "Add an authentic traditional ryokan stay",
                icon: <Bed size={32} />,
              },
            ].map((item, i) => (
              <div className="FTJapan_customize_card" key={i}>
                <div className="FTJapan_customize_icon_wrap">{item.icon}</div>
                <div className="FTJapan_customize_card_content">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="FTJapan_skip_section">
        <div className="FTJapan_skip_inner">
          <span className="FTJapan_section_badge">Avoid These</span>
          <h2>What to Skip on Your First Trip</h2>
          <div className="FTJapan_skip_grid">
            {[
              {
                title: "Too Many Cities",
                desc: "Don't spend your trip on trains. Focus on quality, not quantity.",
                icon: <MapPinOff size={28} />,
              },
              {
                title: "Overpacked Days",
                desc: "Leave room for spontaneity and rest. Don't overschedule.",
                icon: <CalendarX size={28} />,
              },
              {
                title: "Rushing Kyoto",
                desc: "Kyoto requires patience. Give it at least 3-4 full days.",
                icon: <Footprints size={28} />,
              },
              {
                title: "Skipping Osaka",
                desc: "Don't miss the food capital. It's the perfect contrast to Kyoto.",
                icon: <CircleSlash size={28} />,
              },
            ].map((item, i) => (
              <div className="FTJapan_skip_card" key={i}>
                <div className="FTJapan_skip_icon_box">{item.icon}</div>
                <div className="FTJapan_skip_card_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE BIGGEST REGRET ===== */}
      <section className="FTJapan_regret_section">
        <div className="FTJapan_regret_inner">
          <span className="FTJapan_section_badge">Common Regret</span>
          <h2>The Biggest Regret First-Time Travelers Have</h2>
          <div className="FTJapan_regret_content">
            <p className="FTJapan_regret_highlight">Not slowing down.</p>
            <p>Most travelers wish they had spent more time in fewer places.</p>
          </div>
        </div>
      </section>

      {/* ===== MISTAKES THAT CAN RUIN YOUR ITINERARY ===== */}
      <section className="FTJapan_mistakes_v2_section">
        <div className="FTJapan_mistakes_v2_inner">
          <span className="FTJapan_section_badge">Avoid These</span>
          <h2>Mistakes That Can Ruin Your Itinerary</h2>
          <div className="FTJapan_mistakes_v2_grid">
            {[
              "Booking too late",
              "Choosing wrong neighborhoods",
              "Overloading your schedule",
              "Ignoring travel flow",
            ].map((item) => (
              <div className="FTJapan_mistake_v2_card" key={item}>
                <span className="FTJapan_mistake_v2_bullet">!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT INSIGHTS ===== */}
      <section className="FTJapan_insights_section">
        <div className="FTJapan_insights_inner">
          <div className="FTJapan_insights_header">
            <span className="FTJapan_section_badge">Expert Perspective</span>
            <h2>What I See With Clients Every Year</h2>
          </div>

          <div className="FTJapan_insights_grid">
            <div className="FTJapan_insight_card">
              <div className="FTJapan_insight_icon">
                <Zap size={24} />
              </div>
              <p>
                Travelers often try to do too much, sacrificing depth for
                distance.
              </p>
            </div>
            <div className="FTJapan_insight_card">
              <div className="FTJapan_insight_icon">
                <FastForward size={24} />
              </div>
              <p>
                They miss key experiences because they rush through the
                itinerary.
              </p>
            </div>
            <div className="FTJapan_insight_card FTJapan_insight_card--highlight">
              <div className="FTJapan_insight_icon">
                <Compass size={24} />
              </div>
              <p>
                The Difference It is not the destination. It is the structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERSONAL TAKE / QUOTE ===== */}
      <section className="FTJapan_quote_section">
        <div className="FTJapan_quote_inner">
          <span className="FTJapan_quote_icon">"</span>
          <p className="FTJapan_quote_text">
            If you get the structure right, Japan becomes one of the most
            rewarding trips in the world. If you get it wrong, it becomes
            overwhelming. Japan rewards travelers who slow down.
          </p>
          <div className="FTJapan_quote_author">
            — Angela Hughes · CEO, Trips &amp; Ships Luxury Travel
          </div>
        </div>
      </section>

      {/* ===== IF YOU ONLY REMEMBER ONE THING ===== */}
      <section className="FTJapan_remember_section">
        <div className="FTJapan_remember_inner">
          <span className="FTJapan_section_badge">Key Takeaway</span>
          <h2>If You Only Remember One Thing</h2>
          <p className="FTJapan_remember_text">
            Japan rewards travelers who slow down.
          </p>
        </div>
      </section>

      {/* plan your japan trip the right way */}
      <section className="FTJapan_cta_section">
        <div className="FTJapan_cta_background">
          <img src={Ftjapan3} alt="Atmospheric Japan street" />
          <div className="FTJapan_cta_overlay"></div>
        </div>

        <div className="FTJapan_cta_inner">
          <div className="FTJapan_cta_card">
            <span className="FTJapan_section_badge">Get Started</span>
            <h2>Plan Your Japan Trip the Right Way</h2>
            <p className="FTJapan_cta_intro">
              We help you structure your itinerary, align it with your goals,
              avoid costly mistakes, and build a seamless experience.
            </p>
            <div className="FTJapan_cta_content_grid">
              <ul className="FTJapan_cta_list">
                <li>
                  <span className="FTJapan_cta_dot"></span> Personalized
                  Itinerary Structure
                </li>
                <li>
                  <span className="FTJapan_cta_dot"></span> Expert Destination
                  Alignment
                </li>
                <li>
                  <span className="FTJapan_cta_dot"></span> Seamless Logistics &
                  Flow
                </li>
                <li>
                  <span className="FTJapan_cta_dot"></span> End-to-End Planning
                  Support
                </li>
              </ul>
            </div>
            <div className="FTJapan_cta_buttons">
              <button className="FTJapan_cta_primary_btn">
                Plan My Japan Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHERE TO GO NEXT ===== */}
      <section className="FTJapan_links_section">
        <div className="FTJapan_links_inner">
          <span className="FTJapan_section_badge">Explore More</span>
          <h2>Where to Go Next</h2>
          <div className="FTJapan_links_grid">
            {[
              "Best Time to Visit Japan",
              "Japan Travel Cost Guide",
              "Japan Land vs Cruise",
              "Tokyo Travel Guide",
              "Kyoto Travel Guide",
              "Hakone &amp; Ryokan Guide",
            ].map((link) => (
              <div className="FTJapan_link_card" key={link}>
                <div
                  className="FTJapan_link_title"
                  dangerouslySetInnerHTML={{ __html: link }}
                />
                <span className="FTJapan_link_arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="FTJapan_faq_section">
        <div className="FTJapan_faq_inner">
          <h2>
            First-Time Japan FAQ <br /> Expert Answers
          </h2>
          <FTJapanFAQ items={faqItems} />
        </div>
      </section>
    </>
  );
};

export default FirstTimeJapan;
