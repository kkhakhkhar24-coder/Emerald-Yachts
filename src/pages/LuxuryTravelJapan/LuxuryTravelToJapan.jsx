import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Star,
  Users,
  Compass,
  Ship,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
} from "lucide-react";
import "./LuxuryTravelToJapan.css";
import myimage from "../../assets/image.webp";
import BTJimage1 from "../../assets/BestTimeJapan/BTJimage1.webp";
import BTJimage2 from "../../assets/BestTimeJapan/BTJimage2.webp";
import BTJimage3 from "../../assets/BestTimeJapan/BTJimage3.webp";
import BTJhero1 from "../../assets/BestTimeJapan/BTJhero1.webp";
import BTJhero2 from "../../assets/BestTimeJapan/BTJhero2.webp";
import BTJhero3 from "../../assets/BestTimeJapan/BTJhero3.webp";
import Ftjapan1 from "../../assets/FirstTimeJapan/Ftjapan1.webp";
import Ftjapan2 from "../../assets/FirstTimeJapan/Ftjapan2.webp";
import Ftjapan3 from "../../assets/FirstTimeJapan/Ftjapan3.webp";
import Ftjapan4 from "../../assets/FirstTimeJapan/Ftjapan4.webp";
import Ftjapan5 from "../../assets/LuxurttravelToJapan/Ftjapan5.webp";
import Jhero1 from "../../assets/FirstTimeJapan/Jhero1.webp";
import Jhero2 from "../../assets/FirstTimeJapan/Jhero2.webp";
import Jhero3 from "../../assets/FirstTimeJapan/Jhero3.webp";

/* ===== INLINE FAQ ACCORDION ===== */
const BTJapanFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="LTJapan_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className="LTJapan_faq_item"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="LTJapan_faq_question">
            <span>{item.q}</span>
            <span className="LTJapan_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="LTJapan_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

const LuxuryTravelToJapan = () => {
  const [readMore, setReadMore] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [BTJhero1, BTJhero2, BTJhero3];

  useEffect(() => {
    const heroSlider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(heroSlider);
  }, [images.length]);

  const faqItems = [
    {
      q: "How much does a luxury trip to Japan cost?",
      a: "Luxury Japan trips typically begin around $8,000 per person and can exceed $30,000 per person depending on trip style and customization.",
    },
    {
      q: "Is Japan expensive for luxury travelers?",
      a: "Yes. Japan is generally one of the more expensive luxury destinations in Asia, particularly for private touring and premium accommodations.",
    },
    {
      q: "When is the best time to visit Japan?",
      a: "Spring and fall are most popular, though the best season depends on your goals and travel style.",
    },
    {
      q: "How many days do you need in Japan?",
      a: "Most luxury travelers benefit from at least 10 to 14 days for a well paced itinerary.",
    },
    {
      q: "Is Japan better by cruise or land?",
      a: "It depends on your travel goals. Land offers deeper immersion while cruise offers greater convenience.",
    },
    {
      q: "Do I need a guide in Japan?",
      a: "Not always, but expert guides significantly enhance the experience for many travelers.",
    },
    {
      q: "Should I stay in a ryokan or hotel?",
      a: "Ideally both. A strong Japan itinerary often combines modern luxury hotels with traditional ryokan experiences.",
    },
    {
      q: "Is Japan difficult to navigate independently?",
      a: "Japan is navigable, but strategic planning can be complex for first time travelers.",
    },
    {
      q: "How far in advance should I plan Japan?",
      a: "Ideally 6 to 12 months in advance, especially for peak seasons.",
    },
    {
      q: "Can I combine Japan with Korea?",
      a: "Yes. Japan pairs exceptionally well with Korea and broader Asia itineraries.",
    },
    {
      q: "Is Japan family friendly?",
      a: "Yes. Japan is one of the safest and most family friendly destinations in the world.",
    },
    {
      q: "Is Japan good for honeymoons?",
      a: "Japan is an exceptional honeymoon destination for couples seeking culture, food, luxury, and unique experiences.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Luxury Travel to Japan 2026 | Custom Japan Journeys by Angela Hughes
        </title>
        <meta
          name="title"
          content="Luxury Travel to Japan 2026 | Custom Japan Journeys by Trips & Ships"
        />
        <meta
          name="description"
          content="Plan your luxury Japan journey with expert guidance. Custom itineraries, private touring, luxury ryokan, and bespoke experiences crafted by Japan specialists."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "Luxury Travel to Japan 2026 | Custom Japan Journeys by Angela Hughes",
                description:
                  "Plan your luxury Japan journey with expert guidance. Custom itineraries, private touring, luxury ryokan, and bespoke experiences crafted by Japan specialists.",
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
                    "https://www.tripsandships.com/luxury-japan-travel",
                },
                datePublished: "2026-04-27",
                dateModified: "2026-04-27",
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
                    name: "Luxury Japan Travel",
                    item: "https://www.tripsandships.com/luxury-japan-travel",
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
        <link rel="preload" as="image" href={images[0]} />
      </Helmet>

      <Navbar />

      {/* ===== HERO ===== */}
      <section className="LTJapan_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`LTJapan_hero_bg ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="LTJapan_hero_overlay"></div>
        <div className="LTJapan_hero_content">
          <h1>Luxury Travel to Japan</h1>
          <p>
            Custom designed luxury Japan itineraries, private touring, cruises,
            and bespoke journeys crafted for travelers seeking a deeper and more
            elevated experience of Japan.
          </p>

          {readMore && (
            <>
              <p>
                Japan is one of the most extraordinary destinations in the
                world, but it is also one of the most complex to plan well. From
                luxury ryokan and private guides to bullet train logistics and
                restaurant reservations, exceptional Japan travel requires
                thoughtful strategy and destination expertise.
              </p>
              <p>
                A well planned Japan journey feels seamless, immersive, and
                unforgettable. A poorly planned one can quickly become
                exhausting and frustrating.
              </p>
            </>
          )}

          <div className="LTJapan_readmore_wrapper">
            <button
              className="LTJapan_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="LTJapan_hero_buttons">
            <button className="LTJapan_primary_btn">
              Schedule a Consultation
            </button>
          </div>
        </div>  
      </section>

            {/* ===== WHY JAPAN IS COMPLEX ===== */}
      <section className="LTJapan_about_section">
        <div className="LTJapan_about_inner">
          <div className="LTJapan_about_flex">
            <div className="LTJapan_about_image_container">
              <div className="LTJapan_about_video_wrapper">
                <iframe
                  src="https://www.youtube.com/embed/OShhce4kPrk?rel=0&modestbranding=1"
                  title="Why Japan Is One of the Most Complex Luxury Destinations to Plan"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="LTJapan_about_video"
                />
              </div>
            </div>
            <div className="LTJapan_about_content">
              <span className="LTJapan_section_badge">Why It Matters</span>
              <h2>
                Why Japan Is One of the Most Complex Luxury Destinations to Plan
              </h2>
              <div className="LTJapan_about_text_scroll">
                <p>
                  Japan may be safe, efficient, and modern, but that does not make it
                  simple. Many travelers underestimate how nuanced Japan is until they
                  begin planning. Hotel inventory can be extremely limited at top
                  luxury properties. The best ryokan often book many months in
                  advance. Train systems are efficient but can be confusing to
                  navigate strategically. Dining reservations for sought after
                  restaurants may require insider access or advanced planning.
                  Seasonal demand swings dramatically impact pricing, crowds, and
                  availability.
                </p>
                <p>
                  More importantly, Japan is a destination where pacing matters
                  immensely. Trying to fit too much into a trip, staying in the wrong
                  neighborhood, underestimating transfer times, or choosing the wrong
                  touring style can significantly diminish the experience.
                </p>
                <p>
                  The difference between a good Japan itinerary and an exceptional one
                  is rarely where you go. It is how well the journey is designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLAN YOUR TRIP WITH AN EXPERT ===== */}
      <section className="LTJapan_expert_section">
        <div className="LTJapan_expert_inner">
          <div className="LTJapan_expert_flex">
            <div className="LTJapan_expert_content">
              <span className="LTJapan_section_badge">Why Trust Us</span>
              <h2>Why Trust Trips and Ships to Plan Your Japan Journey</h2>
              <p>
                Japan is one of the most nuanced destinations in the world to plan well, which is why expertise matters.
              </p>
              <p>
                Our founder, Angela Hughes, lived in Japan and has traveled extensively throughout the country. Combined with more than 40 years in luxury travel and a team of experienced advisors, that firsthand destination knowledge allows us to design Japan journeys with a level of insight most agencies simply cannot offer.
              </p>
              <p>
                We understand not only where to go, but how Japan flows. We know how to balance iconic highlights with authentic cultural experiences, how to pace itineraries correctly, and how to avoid the common planning mistakes that often impact first time travelers.
              </p>
              <p>
                Our role is not simply to book your trip. It is to design the right Japan experience for you.
              </p>
              <div
                className="LTJapan_hero_buttons"
                style={{ justifyContent: "flex-start", marginTop: "30px" }}
              >
                <button className="LTJapan_cta_primary_btn">
                  Schedule a Consultation
                </button>
              </div>
            </div>
            <div className="LTJapan_expert_image_container">
              <div className="LTJapan_expert_image_wrapper">
                <img
                  src={myimage}
                  alt="Angela Hughes — Luxury Japan Travel Expert at Trips & Ships"
                  className="LTJapan_expert_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ===== COMMON MISTAKES ===== */}
      <section className="LTJapan_mistakes_v2_section">
        <div className="LTJapan_mistakes_v2_inner">

          {/* Header */}
          <div className="LTJapan_mistakes_v2_header">
            <span className="LTJapan_section_badge LTJapan_mistakes_badge">Avoid This</span>
            <h2>Common Mistakes Travelers Make Planning Japan</h2>
            <p className="LTJapan_mistakes_v2_intro">
              Japan is one of the easiest destinations in the world to underestimate.
            </p>
          </div>

          {/* Mistake Cards */}
          <div className="LTJapan_mistakes_cards">
            <div className="LTJapan_mistake_card">
              <span className="LTJapan_mistake_num">01</span>
              <p>
                Many travelers attempt to see too much in one trip, assuming the
                country is smaller and easier to navigate than it appears.
                Others choose hotels based solely on brand or rate without
                understanding how dramatically neighborhood selection impacts
                the experience in cities like Tokyo, Kyoto, and Osaka.
              </p>
            </div>
            <div className="LTJapan_mistake_card">
              <span className="LTJapan_mistake_num">02</span>
              <p>
                We regularly see travelers wait too long to book luxury hotels
                and ryokan, only to discover that the best properties are sold
                out. Many also underestimate how far in advance top
                restaurants, guides, and cultural experiences must be secured.
              </p>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="LTJapan_mistakes_v2_footer">
            <p>
              Japan rewards thoughtful planning. It punishes rushed planning.
            </p>
          </div>

        </div>
      </section>

      {/* ===== BEST WAYS TO EXPERIENCE JAPAN ===== */}
      <section className="LTJapan_quick_answer_v2_section">
        <div className="LTJapan_quick_answer_v2_inner">
          <span className="LTJapan_section_badge">Travel Styles</span>
          <h2>Best Ways to Experience Japan</h2>
          <p className="LTJapan_section_intro">
            There is no single best way to experience Japan. The right approach
            depends entirely on your travel style, comfort level, and goals.
          </p>
          <div className="LTJapan_v2_grid">
            {[
              {
                title: "Private Custom Touring",
                desc: "Ideal for travelers seeking the highest level of personalization, flexibility, and immersion. Private touring allows for fully customized pacing, expert guides, and tailored experiences.",
                img: BTJimage1,
              },
              {
                title: "Escorted Luxury Touring",
                desc: "A structured and elevated option for travelers who prefer guided travel with premium service and built in logistics.",
                img: Ftjapan2,
              },
              {
                title: "Small Group Touring",
                desc: "A more social and efficient way to experience Japan while still benefiting from guided structure.",
                img: Ftjapan5,
              },
              {
                title: "Luxury Cruising",
                desc: "An excellent option for travelers who value convenience and want to experience Japan with minimal unpacking and easy logistics.",
                img: BTJimage3,
              },
              {
                title: "Hybrid Land and Cruise",
                desc: "One of the most strategic options for many travelers, combining the depth of land touring with the ease of cruising.",
                img: BTJimage2,
                highlight: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`LTJapan_v2_card ${
                  item.highlight ? "LTJapan_v2_card--highlight" : ""
                }`}
              >
                <div className="LTJapan_v2_image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="LTJapan_v2_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRAVEL STYLE OVERVIEW TABLE ===== */}
      <section className="LTJapan_glance">
        <div className="LTJapan_glance_inner">
          <span className="LTJapan_section_badge">At a Glance</span>
          <h2>Japan by Land vs Cruise</h2>
          <p className="LTJapan_glance_intro">
            Japan by land offers the deepest immersion and greatest flexibility,
            while cruising offers exceptional convenience and the ability to
            combine Japan with broader Asia itineraries.
          </p>

          <div className="LTJapan_glance_table_wrap">
            <table className="LTJapan_glance_table">
              <thead>
                <tr>
                  <th className="LTJapan_glance_th LTJapan_glance_th--feature">
                    Category
                  </th>
                  <th className="LTJapan_glance_th">Land Touring</th>
                  <th className="LTJapan_glance_th">Cruise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="LTJapan_glance_row">
                  <td className="LTJapan_glance_td LTJapan_glance_td--label">
                    Immersion
                  </td>
                  <td className="LTJapan_glance_td">Highest</td>
                  <td className="LTJapan_glance_td">Moderate</td>
                </tr>
                <tr className="LTJapan_glance_row LTJapan_glance_row--alt">
                  <td className="LTJapan_glance_td LTJapan_glance_td--label">
                    Convenience
                  </td>
                  <td className="LTJapan_glance_td">Moderate</td>
                  <td className="LTJapan_glance_td">Highest</td>
                </tr>
                <tr className="LTJapan_glance_row">
                  <td className="LTJapan_glance_td LTJapan_glance_td--label">
                    Depth
                  </td>
                  <td className="LTJapan_glance_td">Deep</td>
                  <td className="LTJapan_glance_td">Broad Overview</td>
                </tr>
                <tr className="LTJapan_glance_row LTJapan_glance_row--alt">
                  <td className="LTJapan_glance_td LTJapan_glance_td--label">
                    Multi Country Potential
                  </td>
                  <td className="LTJapan_glance_td">Moderate</td>
                  <td className="LTJapan_glance_td">Excellent</td>
                </tr>
                <tr className="LTJapan_glance_row">
                  <td className="LTJapan_glance_td LTJapan_glance_td--label">
                    Best For
                  </td>
                  <td className="LTJapan_glance_td">Japan Focused Travelers</td>
                  <td className="LTJapan_glance_td">Broader Asia Travelers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="LTJapan_glance_outro">
            For travelers seeking to deeply understand Japan, land based travel
            often provides the richest experience. For those wanting convenience
            or a broader regional itinerary, cruising can be an exceptional fit.
          </p>
        </div>
      </section>

      
      {/* ===== HOW MUCH DOES IT COST ===== */}
      <section className="LTJapan_cost_section">
        <div className="LTJapan_cost_inner">
          <span className="LTJapan_section_badge">Investment</span>
          <h2>How Much Does Luxury Travel to Japan Cost</h2>
          <p className="LTJapan_section_intro">
            Luxury travel to Japan typically costs more than many travelers
            initially expect, particularly when planning private touring,
            premium guides, and top tier accommodations.
          </p>
          <div className="LTJapan_cost_cards">
            {[
              {
                season: "Luxury Small Group Touring",
                icon: <Users size={28} />,
                destinations: "$8,000 to $15,000 per person",
                highlight: "Structured and elevated group travel",
              },
              {
                season: "Private Luxury Touring",
                icon: <Compass size={28} />,
                destinations: "$15,000 to $30,000 plus per person",
                highlight: "Fully personalized private experience",
              },
              {
                season: "Ultra Luxury Bespoke",
                icon: <Star size={28} />,
                destinations: "$30,000 plus per person",
                highlight: "The highest level of customization",
              },
              {
                season: "Luxury Cruise and Land",
                icon: <Ship size={28} />,
                destinations: "$12,000 to $35,000 plus per person",
                highlight: "Combining depth with convenience",
              },
            ].map((item, i) => (
              <div className="LTJapan_cost_card" key={i}>
                <div className="LTJapan_cost_icon">{item.icon}</div>
                <div className="LTJapan_cost_season">{item.season}</div>
                <h3 className="LTJapan_cost_destinations">
                  {item.destinations}
                </h3>
                <p className="LTJapan_cost_highlight">{item.highlight}</p>
              </div>
            ))}
          </div>
          <p className="LTJapan_cost_outro">
            Pricing varies significantly based on season, hotel level, touring
            style, dining preferences, transportation choices, and overall trip
            length. <br />
            Cherry blossom season and fall foliage generally command the highest
            pricing and require the most advance planning.
          </p>
        </div>
      </section>

            {/* ===== BEST TIME TO VISIT ===== */}
      <section className="LTJapan_timing_impact_section">
        <div className="LTJapan_timing_impact_inner">
          <span className="LTJapan_section_badge">When to Go</span>
          <h2>Best Time to Visit Japan</h2>
          <div className="LTJapan_timing_grid">
            {[
              {
                icon: <Flower2 size={26} />,
                title: "Cherry Blossom Season",
                desc: "The most iconic and visually stunning time to visit, though also the busiest and most expensive.",
              },
              {
                icon: <Sun size={26} />,
                title: "Summer",
                desc: "Festival season with vibrant cultural energy, fireworks, and local celebrations. Heat and humidity can be significant.",
              },
              {
                icon: <Leaf size={26} />,
                title: "Fall Foliage",
                desc: "For many travelers, the most beautiful season in Japan with exceptional colors and slightly fewer crowds than spring.",
              },
              {
                icon: <Snowflake size={26} />,
                title: "Winter",
                desc: "Ideal for ski travelers, snow lovers, and those seeking onsen and mountain escapes in places like Hokkaido.",
              },
            ].map((item, i) => (
              <div className="LTJapan_timing_card" key={i}>
                <div className="LTJapan_timing_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOP DESTINATIONS ===== */}
      <section className="LTJapan_seasons_section">
        <div className="LTJapan_seasons_inner">
          <div className="LTJapan_seasons_header">
            <span className="LTJapan_section_badge">Where to Go</span>
            <h2>Top Luxury Destinations in Japan</h2>
            <p className="LTJapan_section_intro">
              Japan offers far more than Tokyo and Kyoto. Its regional diversity
              is one of the country’s greatest strengths.
            </p>
          </div>

          <div className="LTJapan_seasons_detail_grid">
            {[
              {
                title: "Tokyo",
                desc: "A dynamic global capital blending innovation, luxury, and culture.",
                img: Jhero1,
              },
              {
                title: "Kyoto",
                desc: "The heart of traditional Japan with temples, gardens, and timeless atmosphere.",
                img: Jhero2,
              },
              {
                title: "Osaka",
                desc: "Japan’s culinary capital known for vibrant street food and urban energy.",
                img: Jhero3,
              },
              {
                title: "Hakone",
                desc: "Luxury ryokan, mountain scenery, and onsen retreats.",
                img: Ftjapan1,
              },
              {
                title: "Nara",
                desc: "Historic temples and traditional charm beyond the standard route.",
                img: Ftjapan2,
              },
              {
                title: "Kanazawa",
                desc: "A refined cultural city known for gardens, preserved districts, and artisan heritage.",
                img: Ftjapan3,
              },
              {
                title: "Hokkaido",
                desc: "Japan’s northern escape for skiing, nature, and seasonal beauty.",
                img: Ftjapan4,
              },
              {
                title: "Okinawa",
                desc: "Japan’s tropical island luxury destination.",
                img: BTJimage1,
              },
            ].map((dest, i) => (
              <div className="LTJapan_season_detail_card" key={i}>
                <div className="LTJapan_season_detail_image">
                  <img src={dest.img} alt={dest.title} />
                </div>
                <div className="LTJapan_season_detail_content">
                  <h3>{dest.title}</h3>
                  <p>{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE DESIGN YOUR JOURNEY ===== */}
      <section className="LTJapan_regret_section">
        <div className="LTJapan_regret_inner">
          <div className="LTJapan_regret_header">
            <span className="LTJapan_section_badge">Our Process</span>
            <h2>How We Design Your Japan Journey</h2>
          </div>
          <div className="LTJapan_process_grid">
            {[
              { step: "01", title: "Consultation", desc: "We begin by understanding your travel goals, style, and budget." },
              { step: "02", title: "Strategy", desc: "We determine the ideal route, pacing, and overall trip structure." },
              { step: "03", title: "Itinerary Design", desc: "We build your custom Japan journey." },
              { step: "04", title: "Refinement", desc: "We collaborate with you to perfect the itinerary." },
              { step: "05", title: "Booking and Logistics", desc: "We secure all accommodations, guides, transportation, and experiences." },
              { step: "06", title: "Pre Departure Preparation", desc: "We prepare you thoroughly for travel." },
              { step: "07", title: "In Travel Support", desc: "We remain available while you travel." },
            ].map((item, i) => (
              <div className="LTJapan_process_card" key={i}>
                <span className="LTJapan_process_number">{item.step}</span>
                <div className="LTJapan_process_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT INSIGHTS ===== */}
      <section className="LTJapan_insights_section">
        <div className="LTJapan_insights_inner">
          <div className="LTJapan_insights_header">
            <span className="LTJapan_section_badge">Why Clients Trust Us</span>
            <h2>Why Clients Trust Trips and Ships For Japan</h2>
          </div>

          <div className="LTJapan_insights_grid">
            <div className="LTJapan_insight_card">
              <p>
                We understand how to balance logistics with immersion, luxury
                with authenticity, and iconic highlights with hidden gems.
              </p>
            </div>
            <div className="LTJapan_insight_card">
              <p>
                Our clients trust us to create journeys that are thoughtful,
                seamless, and deeply personalized for their goals and style.
              </p>
            </div>
            <div className="LTJapan_insight_card LTJapan_insight_card--highlight">
              <p>
                When planning a destination as nuanced as Japan, expertise is
                not optional. It is the difference.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FAQ ===== */}
      <section className="LTJapan_faq_section">
        <div className="LTJapan_faq_inner">
          <h2>
            Luxury Japan Travel FAQs <br /> Expert Answers
          </h2>
          <BTJapanFAQ items={faqItems} />
        </div>
      </section>

      {/* ===== CTA + INQUIRY FORM ===== */}
      <section className="LTJapan_cta_form_section">
        <div className="LTJapan_cta_form_bg">
          <img src={BTJimage3} alt="Luxury Japan" className="LTJapan_cta_form_bgimg" />
          <div className="LTJapan_cta_form_overlay" />
        </div>
        <div className="LTJapan_cta_form_inner LTJapan_cta_form_inner--centered">
          <span className="LTJapan_cta_form_badge">Get Started</span>
          <h2 className="LTJapan_cta_form_title">
            Plan Your Luxury Japan Journey With Expert Guidance
          </h2>
          <p className="LTJapan_cta_form_sub">
            Work with a team that understands how to design Japan properly, from pacing and routing to luxury accommodations, guides, and authentic experiences.
          </p>
          <blockquote className="LTJapan_cta_form_quote">
            The difference between an average Japan trip and an extraordinary one often comes down to planning.
          </blockquote>
          <p className="LTJapan_cta_form_cta_text">Let us help you build it right.</p>
          <button className="LTJapan_form_submit_btn LTJapan_inquiry_btn">
            Inquiry Form Here
          </button>
        </div>
      </section>
    </>
  );
};

export default LuxuryTravelToJapan;