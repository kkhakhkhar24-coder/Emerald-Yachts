import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import { Award, Globe, Newspaper, Quote, Star, Check, X, Play } from "lucide-react";
import myImage from "../../assets/image.jpg";
import "./EmeraldYachts.css";
import HomePage1 from "../../assets/HomePage/HomePage1.jpg";
import HomePage3 from "../../assets/HomePage/HomePage3.jpg";
import HomePage4 from "../../assets/HomePage/HomePage4.jpg";
import HomePage2 from "../../assets/HomePage/HomePage2.jpg";
import Logo1 from "../../assets/HomePage/Logo1.png";
import Logo2 from "../../assets/HomePage/Logo2.png";
import Logo3 from "../../assets/HomePage/Logo3.png";
import Logo4 from "../../assets/HomePage/Logo4.webp";
import Logo5 from "../../assets/HomePage/Logo5.png";
import Logo6 from "../../assets/HomePage/Logo6.png";
import Logo7 from "../../assets/HomePage/Logo7.png";
import EmeraldAzzurraVsEmeraldSakara1 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara1.jpg";
import EmeraldAzzurraVsEmeraldSakara2 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara2.jpg";
import EmeraldAzzurraVsEmeraldSakara3 from "../../assets/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara3.jpg";

const LuxuryPage = () => {
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [HomePage1, HomePage3, HomePage4];

  const brands = [
    { name: "The Washington Post", logo: Logo1 },
    { name: "Travel Weekly", logo: Logo2 },
    { name: "TravelPulse", logo: Logo3 },
    { name: "Insider Travel Report", logo: Logo4 },
    { name: "Travel Market Report", logo: Logo5 },
    { name: "Travel Leaders Network", logo: Logo6 },
    { name: "The Wall Street Journal", logo: Logo7 },
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <>
      <Helmet>
        <title>Emerald Yachts Cruises | Expert Planning by Angela Hughes</title>
        <meta
          name="title"
          content="Emerald Yachts Cruises | Expert Planning by Angela Hughes"
        />
        <meta
          name="description"
          content="Discover Emerald Yachts boutique cruising in the Mediterranean and Caribbean. Expertly planned by Angela Hughes and Trips & Ships Luxury Travel for a seamless, elevated experience."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com",
              },
              {
                "@type": "Person",
                name: "Angela Hughes",
                jobTitle: "CEO & Founder",
                worksFor: {
                  "@type": "Organization",
                  name: "Trips & Ships Luxury Travel",
                },
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
                    name: "Yachts",
                    item: "https://www.tripsandships.com/yachts",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Emerald Yachts",
                    item: "https://www.tripsandships.com/emerald-yachts",
                  },
                ],
              },
              {
                "@type": "WebPage",
                name: "Emerald Yachts",
                url: "https://www.tripsandships.com/emerald-yachts",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is included on Emerald Yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald Yachts include accommodations, dining, select beverages, and curated itineraries.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are Emerald Yachts all-inclusive?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald Yachts are largely inclusive, though inclusions vary by itinerary.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="Emerald_hero_section">
        {/* BACKGROUND WRAPPER */}
        <div className="Emerald_hero_bg_wrapper">
          <div
            key={current}
            className="Emerald_hero_bg fade"
            style={{ backgroundImage: `url(${images[current]})` }}
          ></div>
        </div>

        {/* OVERLAY */}
        <div className="Emerald_hero_overlay"></div>

        {/* CONTENT */}
        <div className="Emerald_hero_content">
          <h1>Emerald Yachts: A New Era of Luxury Travel at Sea</h1>

          {/* FIRST PARAGRAPH */}
          <p>
            Emerald Yachts offer a refined, boutique-style yacht experience
            designed for travelers who value relaxed luxury, coastal access, and
            an easy, social atmosphere at sea.
          </p>

          {/* READ MORE */}
          {readMore && (
            <>
              <p>
                These are not expedition vessels. They are intimate yachts built
                for warm-weather cruising, scenic coastlines, and
                destination-driven travel with a lighter pace.
              </p>

              <p>
                Planning an Emerald Yacht journey is not simply about selecting
                a sailing. It is about choosing the right itinerary, season, and
                onboard experience to match how you want your time to feel.
              </p>

              <p>
                Trips & Ships Luxury Travel designs Emerald Yacht journeys using
                a structured planning approach led by Angela Hughes, ensuring
                every detail is aligned from the beginning so the experience
                feels effortless and well-paced.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Emerald_readmore_wrapper">
            <button
              className="Emerald_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* BUTTONS */}
          <div className="Emerald_hero_buttons">
            <button className="Emerald_primary_btn">
              Schedule an Emerald Yacht Planning Consultation
            </button>

            <button className="Emerald_secondary_btn">
              Prefer email? sales@tripsandships.com
            </button>
          </div>
        </div>
      </section>

      {/* <section>
        <div>
          <h2>What Are Emerald Yachts?</h2>
          <p>Emerald Yachts are part of the Scenic Group portfolio and are designed for boutique yacht cruising in warm-weather destinations. With a smaller guest count and an open, relaxed onboard environment, Emerald Yachts focus on lifestyle-driven travel rather than expedition or technical exploration.</p>
        </div>
       </section>  */}

      <section className="Emerald_about_section">
        <div className="Emerald_about_inner">
          <h2>What Are Emerald Yachts?</h2>

          <p>
            Emerald Yachts are part of the Scenic Group portfolio and are
            designed for boutique yacht cruising in warm-weather destinations.
            With a smaller guest count and an open, relaxed onboard environment,
            Emerald Yachts focus on lifestyle-driven travel rather than
            expedition or technical exploration.
          </p>
        </div>
      </section>

      {/* <section>
  <div>
    <h2>
         Real Experience with Emerald Yachts
    </h2>
    <p>
        Our experience with Emerald Yachts is not theoretical. We understand how these journeys unfold in real time, how itinerary pacing impacts the feel of the trip, and how small decisions such as sailing selection and cabin placement influence the overall experience.
    </p>
  </div>
</section> */}

      {/* <section className="experience_section">
  <div className="experience_inner">
    <h2>
      Real Experience with Emerald Yachts
    </h2>

    <p>
      Our experience with Emerald Yachts is not theoretical. We understand how these journeys unfold in real time, how itinerary pacing impacts the feel of the trip, and how small decisions such as sailing selection and cabin placement influence the overall experience.
    </p>
  </div>
</section> */}

      <section className="Emerald_experience_section">
        <div className="Emerald_experience_inner">
          <div className="Emerald_experience_grid">
            {/* LEFT CONTENT */}
            <div className="Emerald_experience_text">
              <h2>Real Experience with Emerald Yachts</h2>

              <p>
                Our experience with Emerald Yachts is not theoretical. We
                understand how these journeys unfold in real time, how itinerary
                pacing impacts the feel of the trip, and how small decisions
                such as sailing selection and cabin placement influence the
                overall experience.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="Emerald_experience_image">
              <img src={HomePage2} alt="Yacht Experience" />
            </div>
          </div>
        </div>
      </section>

      <section className="Emerald_expert_section">
        <div className="Emerald_insight_inner">
          <div className="Emerald_insight_flex">
            {/* LEFT CONTENT (Combined Expert & Team) */}
            <div className="Emerald_insight_content">
              <h2>Expert Insight & Elite Team</h2>

              {/* ANGELA HUGHES INSIGHT */}
              <div className="Emerald_expert_sub">
                <p className="Emerald_expert_title">
                  <span className="Emerald_highlight_text">
                    Angela Hughes — CEO & Founder, Trips & Ships Luxury Travel
                  </span>
                </p>
                <p>
                  Angela Hughes is a recognized voice in the luxury travel
                  industry with over four decades of experience. Named Luxury
                  Travel Influencer of the Year by Travel Leaders Network, her
                  insights are built on a foundation of scaling global luxury
                  businesses and training elite advisors worldwide.
                </p>
                <p>
                  She was named Luxury Travel Influencer of the Year by Travel
                  Leaders Network and recognized among the Most Influential
                  Women in Travel by TravelPulse. Her insights have been
                  featured in Travel Weekly, Insider Travel Report, Travel
                  Market Report, The Washington Post, and The New York Times.
                </p>
              </div>

              {/* TEAM CREDENTIALS */}
              <div className="Emerald_team_sub">
                <h3>The Trips & Ships Specialized Team</h3>
                <p>
                  Trips & Ships Luxury Travel is a premier network of over 140
                  luxury travel advisors. Each journey we plan is powered by a
                  structured methodology and deep industry relationships.
                </p>
                <ul className="Emerald_team_highlights">
                  <li>Consistent, expert planning framework</li>
                  <li>Advisors trained through Luxury Travel University</li>
                  <li>Preferred yacht and shore excursion partnerships</li>
                  <li>End-to-end client support for a seamless experience</li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE (Expert Portrait) */}
            <div className="Emerald_insight_image_container">
              <div className="Emerald_insight_image_wrapper">
                <img
                  src={myImage}
                  alt="Angela Hughes - CEO & Founder"
                  className="Emerald_insight_expert_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Emerald_recognition_section">
        <div className="Emerald_recognition_inner">
          <h2>As Seen In & Industry Recognition</h2>
          <p className="Emerald_recognition_sub">
            Angela Hughes and Trips & Ships Luxury Travel have been recognized
            and featured across leading global media and travel industry
            publications.
          </p>

          {/* LOGO SLIDER (Responsive, Interactive) */}
          <div className="Emerald_slider_container">
            <div className="Emerald_slider_track">
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className="Emerald_media_box">
                  <div className="Emerald_logo_wrapper">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="Emerald_media_logo"
                    />
                  </div>
                  <span className="Emerald_media_name">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>


          <p className="Emerald_media_inquiry">
            <Quote size={12} className="Emerald_quote_icon" />
            Media inquiries and speaking engagements available upon request.
          </p>
        </div>
      </section>

      <section className="Emerald_ideal_section">
        <div className="Emerald_ideal_inner">
          <h2>Is Emerald Yachts Right for You?</h2>

          <p>
            <span className="Emerald_highlight_blue">
              Emerald Yachts Are Ideal If You:
            </span>
          </p>

          <p className="Emerald_ideal_list">
            • Want a relaxed, warm-weather yacht experience <br />
            • Prefer smaller ships with a social atmosphere <br />
            • Enjoy coastal cruising <br />• Value simplicity and ease
          </p>

          <p>
            <span className="Emerald_highlight_blue">
              Who Should Not Book Emerald Yachts
            </span>
          </p>

          <p>
            Travelers seeking expedition travel, polar regions, or highly
            structured enrichment experiences should consider alternatives such
            as Scenic Eclipse.
          </p>
        </div>
      </section>

      <section className="Emerald_expert_section">
        <div className="Emerald_expert_inner">
          <h2>How an Expert Chooses the Right Emerald Yacht Sailing</h2>

          <p>
            <span className="Emerald_highlight_blue">
              Key considerations include:
            </span>
          </p>

          <div className="Emerald_expert_cards">
            <div className="Emerald_expert_card">
              <i className="fas fa-route"></i>
              <p>Itinerary structure</p>
            </div>

            <div className="Emerald_expert_card">
              <i className="fas fa-sun"></i>
              <p>Seasonality</p>
            </div>

            <div className="Emerald_expert_card">
              <i className="fas fa-clock"></i>
              <p>Time in port versus sea</p>
            </div>

            <div className="Emerald_expert_card">
              <i className="fas fa-ship"></i>
              <p>Ship atmosphere</p>
            </div>

            <div className="Emerald_expert_card">
              <i className="fas fa-plane"></i>
              <p>Travel logistics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Emerald_method_section">
        <div className="Emerald_method_inner">
          <h2>The Trips & Ships Yacht Planning Method</h2>

          <div className="Emerald_method_steps">
            <div className="Emerald_method_step">

              <p>Experience Alignment</p>
            </div>

            <div className="Emerald_method_step">

              <p>Destination Strategy</p>
            </div>

            <div className="Emerald_method_step">

              <p>Itinerary Flow</p>
            </div>

            <div className="Emerald_method_step">

              <p>Cabin Strategy</p>
            </div>

            <div className="Emerald_method_step">

              <p>Full Journey Design</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Emerald_cost_section">
        <div className="Emerald_cost_inner">
          <h2>How Much Do Emerald Yachts Cost?</h2>

          <div className="Emerald_cost_list">
            <div className="Emerald_cost_item">
              <p>Short itineraries:</p>
              <span>$4,000 to $8,000 per person</span>
            </div>

            <div className="Emerald_cost_item">
              <p>Mediterranean and Caribbean sailings:</p>
              <span>$6,000 to $12,000+</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: VIDEO SHOWCASE ===== */}
      <section className="Emerald_video_section">
        <div className="Emerald_video_inner">
          <div className="Emerald_video_header">

            <h2>Experience Emerald Yachts</h2>
            <div className="Emerald_video_divider"></div>
            <p className="Emerald_video_subtitle">
              Watch how Emerald Yachts combines refined elegance with relaxed coastal cruising in the world's most beautiful destinations.
            </p>
          </div>

          <div className="Emerald_video_wrapper">
            <div className="Emerald_video_frame">
              <video
                className="Emerald_video_player"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={EmeraldAzzurraVsEmeraldSakara1}
              >
                <source src="https://dl.dropboxusercontent.com/scl/fo/50i1fncme11gdwvndkgz9/AA3pOBiM5PBbCvWe_uIS0bU/Emerald%20Cruises/Yacht%20Cruising/Videos/Paid%20Social_%20EYC%20Caribbean%20Experiences%20_%2030sec%2016x9%20No%20CTA.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=e1xf9emi&raw=1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="Emerald_video_glow"></div>
            </div>
          </div>

          <p className="Emerald_video_caption">
            <span className="Emerald_caption_tag">Discover</span>
            Discover the refined elegance and relaxed luxury of Emerald Yachts
            as they navigate the stunning coastlines of the Mediterranean and Caribbean.
          </p>
        </div>
      </section>

      {/* ===== SECTION: IMAGE GALLERY ===== */}
      <section className="Emerald_gallery_section">
        <div className="Emerald_gallery_inner">
          <div className="Emerald_gallery_header">

            <h2>Life Onboard Emerald Yachts</h2>
            <div className="Emerald_gallery_divider"></div>
            <p className="Emerald_gallery_subtitle">
              Experience intimate spaces designed for relaxed elegance and unforgettable coastal journeys.
            </p>
          </div>

          <div className="Emerald_gallery_masonry">
            <div className="Emerald_gallery_item Emerald_gallery_item--large">
              <div className="Emerald_gallery_image_wrap">
                <img
                  src={EmeraldAzzurraVsEmeraldSakara2}
                  alt="Emerald Yachts boutique luxury interior and coastal cruising experience"
                  className="Emerald_gallery_image"
                />
                <div className="Emerald_gallery_overlay">
                  <div className="Emerald_gallery_content">
                    <span className="Emerald_gallery_badge">Boutique Luxury</span>
                    <h3>Refined Interiors</h3>
                    <p>Intimate spaces crafted for comfort and elegance with panoramic ocean views.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Emerald_gallery_item">
              <div className="Emerald_gallery_image_wrap">
                <img
                  src={EmeraldAzzurraVsEmeraldSakara3}
                  alt="Emerald Yachts Mediterranean destination and scenic coastal views"
                  className="Emerald_gallery_image"
                />
                <div className="Emerald_gallery_overlay">
                  <div className="Emerald_gallery_content">
                    <span className="Emerald_gallery_badge">Destinations</span>
                    <h3>Coastal Beauty</h3>
                    <p>Explore stunning Mediterranean and Caribbean coastlines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Emerald_gallery_item">
              <div className="Emerald_gallery_image_wrap">
                <img
                  src={EmeraldAzzurraVsEmeraldSakara1}
                  alt="Emerald Yachts onboard dining and luxury amenities"
                  className="Emerald_gallery_image"
                />
                <div className="Emerald_gallery_overlay">
                  <div className="Emerald_gallery_content">
                    <span className="Emerald_gallery_badge">Experience</span>
                    <h3>Effortless Luxury</h3>
                    <p>Relaxed atmosphere with world-class service and curated experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 18 — FAQ ===== */}
      <section className="emerald_faq_section">
        <div className="emerald_faq_inner">

          <h2>Emerald Yachts FAQs — Expert Answers</h2>

          <AntaFAQ
            items={[
              {
                q: "What is included on Emerald Yachts?",
                a: "Emerald Yachts include accommodations, dining, select beverages, and curated itineraries designed for simplicity and ease.",
              },
              {
                q: "Are Emerald Yachts all-inclusive?",
                a: "They are largely inclusive, though inclusions vary by itinerary and are not as extensive as expedition yachts.",
              },
              {
                q: "Is Emerald Yachts considered luxury?",
                a: "Emerald Yachts fall into the premium to boutique luxury category with a relaxed, elevated atmosphere.",
              },
              {
                q: "Is Emerald Yachts worth it?",
                a: "Yes, for travelers seeking a smaller ship, relaxed pacing, and destination-focused travel.",
              },
              {
                q: "How do Emerald Yachts compare to Scenic Eclipse?",
                a: "Emerald focuses on warm-weather lifestyle cruising, while Scenic Eclipse focuses on expedition and discovery travel.",
              },
              {
                q: "How do Emerald Yachts compare to traditional cruises?",
                a: "They offer a more intimate experience with fewer guests, smaller ports, and a quieter onboard environment.",
              },
              {
                q: "What destinations do Emerald Yachts visit?",
                a: "Primarily the Mediterranean and Caribbean, focusing on coastal and scenic routes.",
              },
              {
                q: "When should I book Emerald Yachts?",
                a: "Booking 6 to 12 months in advance is recommended for best availability.",
              },
              {
                q: "Will I pay more booking through a travel advisor?",
                a: "No. Pricing is the same, but planning expertise is added.",
              },
              {
                q: "Do I need a travel advisor?",
                a: "Not required, but highly recommended for itinerary alignment and planning support.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};

/* ===== INLINE FAQ ACCORDION ===== */
const AntaFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="anta_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`anta_faq_item ${open === i ? "anta_faq_item--open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="anta_faq_question">
            <span>{item.q}</span>
            <span className="anta_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="anta_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default LuxuryPage;

{
  /* <section class="hero_section">
        <div class="hero_main">
          <p></p>
          <p></p>
          <p></p>
          <button></button>
          <button></button>
        </div>
       </section>


       <section>
        <div>
          <h2></h2>
          <p></p>
        </div>
       </section> */
}
