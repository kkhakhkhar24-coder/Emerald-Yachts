import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Sun,
  Leaf,
  Snowflake,
  Flower2,
  CalendarDays,
  Users,
  DollarSign,
  Clock,
  Star,
  TrendingDown,
  AlertTriangle,
  Compass,
} from "lucide-react";
import "./Besttimejapan.css";
import myimage from "../../assets/image.webp";
import BTJimage1 from "../../assets/BestTimeJapan/BTJimage1.webp";
import BTJimage2 from "../../assets/BestTimeJapan/BTJimage2.webp";
import BTJimage3 from "../../assets/BestTimeJapan/BTJimage3.webp";

/* ===== INLINE FAQ ACCORDION ===== */
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

const BestTimeJapan = () => {
  const [readMore, setReadMore] = useState(false);

  const faqItems = [
    {
      q: "What is the best month to visit Japan?",
      a: "April for cherry blossoms and October to November for fall foliage are the most popular times.",
    },
    {
      q: "When is cherry blossom season in Japan?",
      a: "Late March to early April depending on the region.",
    },
    {
      q: "Is Japan crowded during cherry blossom season?",
      a: "Yes, it is the busiest and most expensive time of year.",
    },
    {
      q: "What is the cheapest time to visit Japan?",
      a: "January and February typically offer the lowest pricing.",
    },
    {
      q: "Is summer a good time to visit Japan?",
      a: "Yes, it offers festivals, food, and cultural immersion despite the heat.",
    },
    {
      q: "When is the best time to see fall colors in Japan?",
      a: "Late October through November.",
    },
    {
      q: "How far in advance should I plan a Japan trip?",
      a: "Six to twelve months in advance for peak seasons.",
    },
    {
      q: "What is Golden Week in Japan?",
      a: "A major holiday period in late April to early May with heavy domestic travel.",
    },
    {
      q: "Is winter a good time to visit Japan?",
      a: "Yes, especially for skiing and hot spring experiences.",
    },
    {
      q: "What is the rainy season in Japan?",
      a: "Early June through mid July.",
    },
    {
      q: "What is the best time to visit Tokyo and Kyoto?",
      a: "Spring and fall offer the best overall conditions.",
    },
    {
      q: "Should I avoid peak seasons in Japan?",
      a: "Not necessarily, but shoulder seasons often provide a better experience.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best Time to Visit Japan 2026 | Expert Guide by Angela Hughes
        </title>
        <meta
          name="title"
          content="Best Time to Visit Japan 2026 | Japan Expert Travel Guide"
        />
        <meta
          name="description"
          content="Wondering when to travel to Japan? Discover the best time to visit Japan by season, month, pricing, crowds, and travel style from a Japan expert who lived there."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "Best Time to Visit Japan 2026 | Expert Guide by Angela Hughes",
                description:
                  "Wondering when to travel to Japan? Discover the best time to visit Japan by season, month, pricing, crowds, and travel style from a Japan expert who lived there.",
                author: {
                  "@type": "Person",
                  name: "Angela Hughes",
                  jobTitle: "CEO",
                  worksFor: {
                    "@type": "Organization",
                    name: "Trips & Ships Luxury Travel",
                  },
                },
                publisher: {
                  "@type": "Organization",
                  name: "Trips & Ships Luxury Travel",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.tripsandships.com/logo.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.tripsandships.com/best-time-to-visit-japan",
                },
                datePublished: "2026-04-24",
                dateModified: "2026-04-24",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Japan Travel",
                    item: "https://www.tripsandships.com/luxury-japan-travel",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Best Time to Visit Japan",
                    item: "https://www.tripsandships.com/best-time-to-visit-japan",
                  },
                ],
              },
              {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com",
                logo: "https://www.tripsandships.com/logo.png",
                sameAs: ["https://www.instagram.com/tripsandships"],
              },
              {
                "@type": "Person",
                name: "Angela Hughes",
                jobTitle: "CEO",
                worksFor: {
                  "@type": "Organization",
                  name: "Trips & Ships Luxury Travel",
                },
                url: "https://www.tripsandships.com/about-angela-hughes",
                sameAs: ["https://www.instagram.com/tripsandships"],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="BTJapan_hero_section">
        <div className="BTJapan_hero_overlay"></div>
        <div className="BTJapan_hero_content">
          <h1>Best Time to Visit Japan</h1>
          <p>
            Most people chase cherry blossoms. The smartest travelers chase
            timing.
          </p>
          <p>
            Most people think the best time to visit Japan is cherry blossom
            season. They are not wrong. But they are also not entirely right.
          </p>

          {readMore && (
            <>
              <p>
                After living in Japan and returning year after year, I can tell
                you this: the best time to visit Japan depends entirely on how
                you want to experience it. Food, crowds, pricing, and even how
                you move through the country all change dramatically by season.
              </p>
              <p>
                This is not a generic guide. This is how I advise my clients
                when they are investing in a once in a lifetime trip to Japan.
              </p>
            </>
          )}

          <div className="BTJapan_readmore_wrapper">
            <button
              className="BTJapan_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="BTJapan_hero_buttons">
            <button className="BTJapan_primary_btn">Plan My Japan Trip</button>
          </div>
        </div>
      </section>

      {/* ===== PLAN YOUR TRIP WITH AN EXPERT ===== */}
      <section className="BTJapan_expert_section">
        <div className="BTJapan_expert_inner">
          <div className="BTJapan_expert_flex">
            <div className="BTJapan_expert_content">
              <h2>Plan Your Japan Trip With an Expert</h2>
              <span className="BTJapan_expert_highlight">
                Angela Hughes — CEO, Trips &amp; Ships Luxury Travel
              </span>
              <p>
                Japan is one of the few destinations where timing impacts
                everything. Hotel availability, train logistics, guide access,
                and cultural experiences all shift depending on when you go.
              </p>
              <ul className="BTJapan_expert_credentials">
                <li>40+ years in the travel industry</li>
                <li>Lived in Japan &amp; returns regularly</li>
                <li>Designs custom Tokyo, Kyoto &amp; Osaka itineraries</li>
                <li>Works directly with hotels &amp; on-the-ground partners</li>
                <li>Leads a team of 140+ luxury travel advisors</li>
                <li>Expert in timing, pacing &amp; structure</li>
              </ul>
              <div
                className="BTJapan_hero_buttons"
                style={{ justifyContent: "flex-start", marginTop: 0 }}
              >
                <button className="BTJapan_cta_primary_btn">
                  Plan My Japan Trip
                </button>
              </div>
            </div>
            <div className="BTJapan_expert_image_container">
              <div className="BTJapan_expert_image_wrapper">
                <img
                  src={myimage}
                  alt="Angela Hughes — Japan Travel Expert at Trips & Ships Luxury Travel"
                  className="BTJapan_expert_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK EXPERT ANSWER ===== */}
      <section className="BTJapan_about_section">
        <div className="BTJapan_about_inner">
          <span className="BTJapan_section_badge">Quick Answer</span>
          <h2>Best Time to Visit Japan</h2>
          <p>The best time to visit Japan depends on your priorities:</p>
          <ul className="BTJapan_quick_list">
            <li>March to April for cherry blossoms</li>
            <li>October to November for fall foliage</li>
            <li>May and October for the best overall balance</li>
            <li>January and February for lower prices and fewer crowds</li>
            <li>July and August for festivals and food culture</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT IS THE BEST TIME ===== */}
      <section className="BTJapan_quick_answer_v2_section">
        <div className="BTJapan_quick_answer_v2_inner">
          <span className="BTJapan_section_badge">Expert Take</span>
          <h2>What Is the Best Time to Visit Japan?</h2>
          <div className="BTJapan_v2_grid">
            <div className="BTJapan_v2_card">
              <div className="BTJapan_v2_image">
                <img src={BTJimage1} alt="Cherry blossoms in Japan" />
              </div>
              <div className="BTJapan_v2_content">
                <p>Late March to early April for cherry blossoms</p>
              </div>
            </div>
            <div className="BTJapan_v2_card">
              <div className="BTJapan_v2_image">
                <img src={BTJimage2} alt="Fall foliage in Japan" />
              </div>
              <div className="BTJapan_v2_content">
                <p>October to November for fall foliage</p>
              </div>
            </div>
            <div className="BTJapan_v2_card BTJapan_v2_card--highlight">
              <div className="BTJapan_v2_image">
                <img src={BTJimage3} alt="Best balance in Japan" />
              </div>
              <div className="BTJapan_v2_content">
                <p>May and October for the best overall experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEASONS AT A GLANCE ===== */}
      <section className="BTJapan_glance">
        <div className="BTJapan_glance_inner">
          <span className="BTJapan_section_badge">Season Overview</span>
          <h2>Japan Travel Seasons at a Glance</h2>

          <div className="BTJapan_glance_table_wrap">
            <table className="BTJapan_glance_table">
              <thead>
                <tr>
                  <th className="BTJapan_glance_th BTJapan_glance_th--feature">
                    Feature
                  </th>
                  <th className="BTJapan_glance_th">Spring</th>
                  <th className="BTJapan_glance_th">Summer</th>
                  <th className="BTJapan_glance_th">Fall</th>
                  <th className="BTJapan_glance_th">Winter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="BTJapan_glance_row">
                  <td className="BTJapan_glance_td BTJapan_glance_td--label">
                    Months
                  </td>
                  <td className="BTJapan_glance_td">March to May</td>
                  <td className="BTJapan_glance_td">June to August</td>
                  <td className="BTJapan_glance_td">Sept to November</td>
                  <td className="BTJapan_glance_td">December to February</td>
                </tr>
                <tr className="BTJapan_glance_row BTJapan_glance_row--alt">
                  <td className="BTJapan_glance_td BTJapan_glance_td--label">
                    Pros
                  </td>
                  <td className="BTJapan_glance_td">
                    Cherry blossoms, mild weather
                  </td>
                  <td className="BTJapan_glance_td">Festivals, food, energy</td>
                  <td className="BTJapan_glance_td">Foliage, ideal weather</td>
                  <td className="BTJapan_glance_td">Snow, fewer tourists</td>
                </tr>
                <tr className="BTJapan_glance_row">
                  <td className="BTJapan_glance_td BTJapan_glance_td--label">
                    Cons
                  </td>
                  <td className="BTJapan_glance_td">Crowds, high prices</td>
                  <td className="BTJapan_glance_td">Heat, humidity</td>
                  <td className="BTJapan_glance_td">Moderate crowds</td>
                  <td className="BTJapan_glance_td">Cold</td>
                </tr>
                <tr className="BTJapan_glance_row BTJapan_glance_row--alt">
                  <td className="BTJapan_glance_td BTJapan_glance_td--label">
                    Best For
                  </td>
                  <td className="BTJapan_glance_td">First-time visitors</td>
                  <td className="BTJapan_glance_td">Culture and food lovers</td>
                  <td className="BTJapan_glance_td">Luxury travelers</td>
                  <td className="BTJapan_glance_td">Ski and onsen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== BEST TIME BASED ON TRAVEL GOALS ===== */}
      <section className="BTJapan_goals_section">
        <div className="BTJapan_goals_inner">
          <span className="BTJapan_section_badge">Travel Goals</span>
          <h2>
            Best Time to Visit Japan <br /> Based on Your Travel Goals
          </h2>
          <div className="BTJapan_goals_grid">
            {[
              {
                label: "First-time visitors",
                time: "March to April or October to November",
                icon: <Star size={22} />,
              },
              {
                label: "Food-focused travel",
                time: "Year-round, but summer in Osaka is exceptional",
                icon: <Sun size={22} />,
              },
              {
                label: "Luxury travelers",
                time: "May and October for balance and availability",
                icon: <Compass size={22} />,
              },
              {
                label: "Honeymooners",
                time: "Late March, April, or November",
                icon: <Flower2 size={22} />,
              },
              {
                label: "Families",
                time: "June (early) or late August",
                icon: <Users size={22} />,
              },
              {
                label: "Avoiding crowds",
                time: "January, February, early June",
                icon: <TrendingDown size={22} />,
              },
            ].map((item, i) => (
              <div className="BTJapan_goal_card" key={i}>
                <div className="BTJapan_goal_icon">{item.icon}</div>
                <div className="BTJapan_goal_content">
                  <h3>{item.label}</h3>
                  <p>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JAPAN BY SEASON ===== */}
      <section className="BTJapan_seasons_section">
        <div className="BTJapan_seasons_inner">
          <div className="BTJapan_seasons_header">
            <span className="BTJapan_section_badge">Deep Dive</span>
            <h2>Japan by Season</h2>
          </div>

          <div className="BTJapan_seasons_detail_grid">
            {/* Spring */}
            <div className="BTJapan_season_detail_card BTJapan_season_spring">
              <div className="BTJapan_season_detail_icon">
                <Flower2 size={28} />
              </div>
              <div className="BTJapan_season_detail_content">
                <h3>Spring (March to May)</h3>
                <p>
                  Spring is Japan's most iconic season. Cities like Tokyo and
                  Kyoto transform during cherry blossom season. Bloom timing
                  changes every year, hotels sell out months in advance, and
                  pricing is at its highest. This is the season for first-time
                  travelers and those wanting the most iconic version of Japan.
                </p>
              </div>
            </div>

            {/* Summer */}
            <div className="BTJapan_season_detail_card BTJapan_season_summer">
              <div className="BTJapan_season_detail_icon">
                <Sun size={28} />
              </div>
              <div className="BTJapan_season_detail_content">
                <h3>Summer (June to August)</h3>
                <p>
                  Summer is one of the most culturally immersive times to visit
                  Japan. Cities like Osaka come alive with festivals, street
                  food, and energy that you do not see at any other time of
                  year. June brings the rainy season, while July and August are
                  hot but vibrant. This is ideal for food lovers and repeat
                  travelers.
                </p>
              </div>
            </div>

            {/* Fall */}
            <div className="BTJapan_season_detail_card BTJapan_season_fall">
              <div className="BTJapan_season_detail_icon">
                <Leaf size={28} />
              </div>
              <div className="BTJapan_season_detail_content">
                <h3>Fall (September to November)</h3>
                <p>
                  Fall is one of the best overall times to visit Japan.
                  Destinations like Nikko and Kyoto offer incredible foliage
                  with more balanced crowds than spring. The weather is
                  comfortable, the colors are stunning, and the overall
                  experience feels more refined.
                </p>
              </div>
            </div>

            {/* Winter */}
            <div className="BTJapan_season_detail_card BTJapan_season_winter">
              <div className="BTJapan_season_detail_icon">
                <Snowflake size={28} />
              </div>
              <div className="BTJapan_season_detail_content">
                <h3>Winter (December to February)</h3>
                <p>
                  Winter offers a quieter, more refined version of Japan.
                  Regions like Hokkaido deliver world-class skiing and beautiful
                  snow-covered landscapes. It is also one of the best times for
                  traditional ryokan stays and hot spring experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAPAN BY MONTH ===== */}
      <section className="BTJapan_months_section">
        <div className="BTJapan_months_inner">
          <div className="BTJapan_months_header">
            <span className="BTJapan_section_badge">Month by Month</span>
            <h2>Japan by Month</h2>
          </div>
          <div className="BTJapan_months_grid">
            {[
              {
                month: "January",
                desc: "Quiet and offers strong value with winter experiences.",
              },
              {
                month: "February",
                desc: "Ideal for snow festivals and skiing.",
              },
              {
                month: "March",
                desc: "Marks the beginning of cherry blossom season.",
              },
              {
                month: "April",
                desc: "Peak cherry blossom season and the busiest time of year.",
              },
              {
                month: "May",
                desc: "Excellent weather but avoid Golden Week.",
              },
              { month: "June", desc: "Rainy but less crowded." },
              { month: "July", desc: "Brings festivals and high energy." },
              { month: "August", desc: "Hot but culturally vibrant." },
              {
                month: "September",
                desc: "Transitional with improving weather.",
              },
              { month: "October", desc: "One of the best months overall." },
              { month: "November", desc: "Delivers peak fall foliage." },
              {
                month: "December",
                desc: "Festive, calm, and great for city travel.",
              },
            ].map((item, i) => (
              <div className="BTJapan_month_card" key={i}>
                <div className="BTJapan_month_name">{item.month}</div>
                <p className="BTJapan_month_desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHERRY BLOSSOM & FALL TIMING ===== */}
      <section className="BTJapan_experience_section">
        <div className="BTJapan_experience_inner">
          <div className="BTJapan_experience_header">
            <span className="BTJapan_section_badge">Seasonal Timing</span>
            <h2>Cherry Blossom and Fall Timing</h2>
            <p>
              Understanding this movement is essential when planning a
              multi-city trip to Japan.
            </p>
          </div>

          <div className="BTJapan_experience_content_wrapper">
            <div className="BTJapan_experience_text">
              <ul className="BTJapan_phase_list">
                <li className="BTJapan_phase_item">
                  <div className="BTJapan_phase_city">
                    Cherry Blossom Season
                  </div>
                  <div className="BTJapan_phase_desc">
                    Cherry blossom season is not fixed. Tokyo typically blooms
                    in late March to early April, while Kyoto often peaks
                    slightly later. Northern regions can bloom as late as May.
                  </div>
                </li>
                <li className="BTJapan_phase_item">
                  <div className="BTJapan_phase_city">Fall Foliage Season</div>
                  <div className="BTJapan_phase_desc">
                    Fall foliage follows the reverse pattern, beginning in
                    Hokkaido in October and peaking in Kyoto and Tokyo in
                    November.
                  </div>
                </li>
              </ul>
            </div>

            <div className="BTJapan_experience_cards_grid">
              {[
                {
                  icon: <Flower2 size={24} />,
                  title: "Tokyo Blooms",
                  desc: "Late March to early April",
                },
                {
                  icon: <Flower2 size={24} />,
                  title: "Kyoto Blooms",
                  desc: "Slightly later than Tokyo",
                },
                {
                  icon: <Leaf size={24} />,
                  title: "Hokkaido Foliage",
                  desc: "Begins in October",
                },
                {
                  icon: <Leaf size={24} />,
                  title: "Kyoto Foliage",
                  desc: "Peaks in November",
                },
              ].map((item, i) => (
                <div className="BTJapan_experience_card" key={i}>
                  <div className="BTJapan_experience_icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE TRUTH ABOUT CHERRY BLOSSOM ===== */}
      <section className="BTJapan_timing_impact_section">
        <div className="BTJapan_timing_impact_inner">
          <span className="BTJapan_section_badge">Expert Truth</span>
          <h2>The Truth About Cherry Blossom Season</h2>
          <div className="BTJapan_timing_grid">
            {[
              {
                icon: <AlertTriangle size={26} />,
                title: "Most Crowded",
                desc: "Cherry blossom season brings the heaviest tourist crowds of any time of year.",
              },
              {
                icon: <DollarSign size={26} />,
                title: "Most Expensive",
                desc: "Hotel prices increase significantly and availability becomes extremely limited.",
              },
              {
                icon: <Clock size={26} />,
                title: "Hardest to Plan",
                desc: "Bloom timing changes every year, making logistics complex even for experts.",
              },
              {
                icon: <Star size={26} />,
                title: "Most Iconic Images",
                desc: "For many travelers it delivers iconic imagery, but not the best overall experience.",
              },
            ].map((item, i) => (
              <div className="BTJapan_timing_card" key={i}>
                <div className="BTJapan_timing_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPRING VS FALL ===== */}
      <section className="BTJapan_landcruise_section">
        <div className="BTJapan_landcruise_inner">
          <div className="BTJapan_landcruise_grid">
            <div className="BTJapan_landcruise_image_container">
              <img src={BTJimage2} alt="Japan spring and fall comparison" />
            </div>
            <div className="BTJapan_landcruise_text">
              <span className="BTJapan_section_badge">Spring vs Fall</span>
              <h2>Is Japan Better in Spring or Fall?</h2>
              <p>
                Spring offers iconic cherry blossoms but comes with heavy crowds
                and higher prices. Fall offers similar beauty with fewer crowds,
                better weather, and a more relaxed experience. For many
                travelers, fall delivers a better overall trip.
              </p>
              <div className="BTJapan_landcruise_comparison">
                <div className="BTJapan_landcruise_option">
                  <span className="BTJapan_landcruise_label">Spring</span>
                  <p>Iconic blossoms, peak crowds, highest prices</p>
                </div>
                <div className="BTJapan_landcruise_option BTJapan_landcruise_option--highlight">
                  <span className="BTJapan_landcruise_label">Fall</span>
                  <p>
                    Stunning foliage, fewer crowds, better overall experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING & CROWDS ===== */}
      <section className="BTJapan_pacing_section">
        <div className="BTJapan_pacing_inner">
          <span className="BTJapan_section_badge">Planning Intelligence</span>
          <h2>When Japan Is Most Expensive</h2>
          <p>
            Japan pricing is driven by demand. Peak periods include cherry
            blossom season, Golden Week, and fall foliage. During these times,
            hotel prices increase significantly and availability becomes
            limited.
          </p>

          <div className="BTJapan_pacing_grid">
            <div className="BTJapan_pacing_card BTJapan_pacing_peak">
              <h3>Peak Pricing Periods</h3>
              <ul>
                <li>Cherry blossom season (late March – April)</li>
                <li>Golden Week (late April – early May)</li>
                <li>Fall foliage (October – November)</li>
              </ul>
            </div>
            <div className="BTJapan_pacing_card BTJapan_pacing_value">
              <h3>When Japan Is Least Crowded</h3>
              <p>
                For a more relaxed experience, consider traveling in January,
                February, or early June. These months offer better availability,
                lower pricing, and greater flexibility in planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY TIMING MATTERS ===== */}
      <section className="BTJapan_skip_section">
        <div className="BTJapan_skip_inner">
          <span className="BTJapan_section_badge">Why It Matters</span>
          <h2>Why Timing in Japan Can Make or Break Your Trip</h2>
          <div className="BTJapan_skip_grid">
            {[
              {
                title: "Hotel Availability",
                desc: "Peak seasons mean limited availability and significantly higher pricing.",
                icon: <CalendarDays size={28} />,
              },
              {
                title: "Train Logistics",
                desc: "Shinkansen and rail planning become more complex during busy periods.",
                icon: <Clock size={28} />,
              },
              {
                title: "Guide Access",
                desc: "The best local guides book out months in advance during peak seasons.",
                icon: <Users size={28} />,
              },
              {
                title: "Cultural Experiences",
                desc: "Many experiences shift in quality and access depending on the time of year.",
                icon: <Compass size={28} />,
              },
            ].map((item, i) => (
              <div className="BTJapan_skip_card" key={i}>
                <div className="BTJapan_skip_icon_box">{item.icon}</div>
                <div className="BTJapan_skip_card_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT INSIGHTS ===== */}
      <section className="BTJapan_regret_section">
        <div className="BTJapan_regret_inner">
          <div className="BTJapan_regret_grid">
            <div className="BTJapan_regret_text">
              <span className="BTJapan_section_badge">Expert Insight</span>
              <h2>What I See With Clients Every Year</h2>
              <div className="BTJapan_regret_content">
                <p className="BTJapan_regret_highlight">
                  "The difference is the planning."
                </p>
                <p>
                  Every year, I see travelers who book too late for cherry
                  blossom season and miss it entirely. I see travelers overpay
                  for hotels because they did not understand timing. I see
                  travelers try to move too quickly through Japan during peak
                  periods and feel overwhelmed.
                </p>
              </div>
            </div>
            <div className="BTJapan_regret_image_container">
              <div className="BTJapan_regret_image_wrapper">
                <img src={BTJimage1} alt="Japan Travel Planning" />
                <div className="BTJapan_regret_badge">Expert Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIGGEST MISTAKE ===== */}
      <section className="BTJapan_mistakes_v2_section">
        <div className="BTJapan_mistakes_v2_inner">
          <span className="BTJapan_section_badge">Avoid This</span>
          <h2>The Biggest Mistake Travelers Make</h2>
          <div className="BTJapan_mistakes_v2_grid">
            {[
              "Choosing Japan based only on cherry blossoms",
              "Treating Japan as a one-season destination",
              "Planning around blossoms instead of experience",
              "Not booking far enough in advance",
            ].map((item) => (
              <div className="BTJapan_mistake_v2_card" key={item}>
                <span className="BTJapan_mistake_v2_bullet">!</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT INSIGHTS GRID ===== */}
      <section className="BTJapan_insights_section">
        <div className="BTJapan_insights_inner">
          <div className="BTJapan_insights_header">
            <span className="BTJapan_section_badge">Expert Perspective</span>
            <h2>My Personal Take After Living in Japan</h2>
          </div>

          <div className="BTJapan_insights_grid">
            <div className="BTJapan_insight_card">
              <p>
                If I had to choose, it would not be peak cherry blossom season.
                It would be May or October.
              </p>
            </div>
            <div className="BTJapan_insight_card">
              <p>
                You still get beauty, but you gain something more important:
                access, ease, and flow.
              </p>
            </div>
            <div className="BTJapan_insight_card BTJapan_insight_card--highlight">
              <p>
                Japan is not just about what you see. It is about how you
                experience it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="BTJapan_quote_section">
        <div className="BTJapan_quote_inner">
          <span className="BTJapan_quote_icon">"</span>
          <p className="BTJapan_quote_text">
            Most travelers plan Japan around cherry blossoms. My clients plan
            Japan around experience, access, and flow. That is the difference
            between a good trip and an exceptional one.
          </p>
          <div className="BTJapan_quote_author">
            — Angela Hughes · CEO, Trips &amp; Ships Luxury Travel
          </div>
        </div>
      </section>

      {/* ===== IF YOU ONLY REMEMBER ONE THING ===== */}
      <section className="BTJapan_remember_section">
        <div className="BTJapan_remember_inner">
          <span className="BTJapan_section_badge">Key Takeaway</span>
          <h2>If You Only Remember One Thing</h2>
          <div className="BTJapan_remember_grid">
            <div className="BTJapan_remember_item">
              <span className="BTJapan_remember_label">Iconic Japan</span>
              <p className="BTJapan_remember_text">Go in April.</p>
            </div>
            <div className="BTJapan_remember_item BTJapan_remember_item--highlight">
              <span className="BTJapan_remember_label">Best Overall</span>
              <p className="BTJapan_remember_text">Go in May or October.</p>
            </div>
            <div className="BTJapan_remember_item">
              <span className="BTJapan_remember_label">
                Value & Flexibility
              </span>
              <p className="BTJapan_remember_text">Go in winter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY TRUST THIS ADVICE ===== */}
      <section className="BTJapan_customize_section">
        <div className="BTJapan_customize_inner">
          <span className="BTJapan_section_badge">Why Trust This</span>
          <h2>Why Trust This Advice</h2>
          <p>
            I lived in Japan and have spent years designing custom itineraries
            across Tokyo, Kyoto, Osaka, and beyond. I continue to return
            regularly and work directly with hotels, suppliers, and
            on-the-ground partners. Timing in Japan changes everything.
          </p>
          <div className="BTJapan_customize_grid">
            {[
              {
                label: "Lived in Japan",
                desc: "Years of first-hand experience",
              },
              {
                label: "Returns Regularly",
                desc: "Current, on-the-ground knowledge",
              },
              {
                label: "Direct Partnerships",
                desc: "Hotels, guides, and local experts",
              },
              {
                label: "Client Results",
                desc: "Exceptional trips, year after year",
              },
            ].map((item, i) => (
              <div className="BTJapan_customize_card" key={i}>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAMPLE TRIPS BY SEASON ===== */}
      <section className="BTJapan_cost_section">
        <div className="BTJapan_cost_inner">
          <span className="BTJapan_section_badge">Trip Ideas</span>
          <h2>Sample Japan Trips Based on Season</h2>
          <div className="BTJapan_cost_cards">
            {[
              {
                season: "Spring",
                icon: <Flower2 size={28} />,
                destinations: "Tokyo, Kyoto, Hakone",
                highlight: "Cherry blossoms & iconic scenery",
              },
              {
                season: "Summer",
                icon: <Sun size={28} />,
                destinations: "Osaka, Kyoto, Nara",
                highlight: "Festivals, food, culture",
              },
              {
                season: "Fall",
                icon: <Leaf size={28} />,
                destinations: "Tokyo, Kyoto, Nikko",
                highlight: "Peak foliage & refined experience",
              },
              {
                season: "Winter",
                icon: <Snowflake size={28} />,
                destinations: "Tokyo, Hokkaido, Ryokan",
                highlight: "Snow, skiing, and onsen",
              },
            ].map((item, i) => (
              <div className="BTJapan_cost_card" key={i}>
                <div className="BTJapan_cost_icon">{item.icon}</div>
                <div className="BTJapan_cost_season">{item.season}</div>
                <div className="BTJapan_cost_destinations">
                  {item.destinations}
                </div>
                <p className="BTJapan_cost_highlight">{item.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="BTJapan_cta_premium">
        {/* Background Layer */}
        <div className="BTJapan_cta_bg_wrapper">
          <img
            src={BTJimage3}
            alt="Atmospheric Japan"
            className="BTJapan_parallax_bg"
          />
          <div className="BTJapan_premium_overlay"></div>
        </div>

        <div className="BTJapan_cta_container">
          <div className="BTJapan_cta_main_grid">
            {/* Left side: Editorial Text */}
            <div className="BTJapan_text_content">
              <span className="BTJapan_premium_badge">Get Started</span>
              <h2 className="BTJapan_premium_h2">
                Planning Japan <br />
                <span className="light_serif">The Right Way</span> Matters
              </h2>
              <p className="BTJapan_premium_p">
                We help you choose the right season, avoid costly mistakes,
                secure the best hotels, and build seamless itineraries.
              </p>
              <button className="BTJapan_premium_main_btn">
                Plan My Japan Trip
              </button>
            </div>

            {/* Right side: Glass Benefit Card */}
            <div className="BTJapan_feature_side">
              <div className="BTJapan_glass_card">
                <ul className="BTJapan_premium_list">
                  <li>
                    <div className="list_num">01</div>
                    <div className="list_text">
                      <strong>Right Season</strong>
                      <span>Selection</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_num">02</div>
                    <div className="list_text">
                      <strong>Best Hotel Access</strong>
                      <span>Curated Stays</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_num">03</div>
                    <div className="list_text">
                      <strong>Seamless Logistics</strong>
                      <span>& Flow</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_num">04</div>
                    <div className="list_text">
                      <strong>End-to-End Planning</strong>
                      <span>Support</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHERE TO GO NEXT ===== */}
      <section className="BTJapan_links_section">
        <div className="BTJapan_links_inner">
          <span className="BTJapan_section_badge">Explore More</span>
          <h2>Where to Go Next</h2>
          <div className="BTJapan_links_grid">
            {[
              "First Time Japan Itinerary",
              "Japan Travel Cost Guide",
              "Japan Land vs Cruise",
              "Tokyo Travel Guide",
              "Kyoto Travel Guide",
            ].map((link) => (
              <div className="BTJapan_link_card" key={link}>
                <div className="BTJapan_link_title">{link}</div>
                <span className="BTJapan_link_arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="BTJapan_faq_section">
        <div className="BTJapan_faq_inner">
          <h2>
            Best Time to Visit Japan FAQ <br /> Expert Answers
          </h2>
          <BTJapanFAQ items={faqItems} />
        </div>
      </section>
    </>
  );
};

export default BestTimeJapan;
