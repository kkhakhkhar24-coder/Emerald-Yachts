import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Award, Globe, Newspaper, Quote, Star, Check, X } from "lucide-react";
import myImage from "../../assets/image.jpg";
import "./EmeraldYachts.css"

const LuxuryPage = () => {

  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

   const images = [
    "https://ucf43d17f880c225791baafbd8be.previews.dropboxusercontent.com/p/thumb/AC8IFSCD94lR_A8Yyi9aEyhFTGQ1wneHAkbkz0FDZ8ee0sLFYUFFXKOs1hFBm2frG6qlcmsMepeoUJF4o2O7bBcfl0BrNQwi4XrnHdo9Qkh5qZ64iXByFCUUlNoMyBo9hfbfZJZTIuo_lrEH3mYGoRenDn_iddFIo9Q_wKUyEUTs6uV_qRylVXSjGkcTekOs2FEdT66j7WYcrHVokCuvEndIb8rw2tdMEVD9GOkPBLhEer8hTY9HgLL0Htzl7BHsnYYwLIwVCVln6XRFkrh1e4r-I_D5RIPAC5CkN7TzZnIO5T3Xg5i40CP2Lv4u5HlW0XpZG-OZMRA466VCS24qX3Am2CEW7qGCLNXkj9s71k_QmQ/p.jpeg",
    "https://uc611d4039c46e4a371ac9c8ed05.previews.dropboxusercontent.com/p/thumb/AC_W9KI5Ctzsi-TPM-VYcFNi1yQQbWPaUaEIqL376gKyQIYGXmVVCIh_iPbsqjmPN3YDxYFpPPzMR-k52a7ZNq4t9yjILEandp7lTNfCM5z0lEhjHsBOVtm9CFlR6zWeXFUJVZ9oIjAeStZTcPjc0RcgcIh-gcOsubhjF6MMdCnIVaOa1oJa_JKdlfv0ZWd4VgPcH1i3EPTGNWtupfpb3HitlWtDOQLz9C1G-9-r9LxkdGLJkLrMP3XmFBt2nJo39_uu3wyt-r5vSRnS1qA658o20HvSsKjxw5y4jQLFsCkelKq1pEPHM61hdhTYjjFDW3GfXQaxhqKCs_yYKJG3MMdKs4CTn4keVIulnikcaoV658hKnU9f88d6Cw0zCSVT85EvZg7xK6P80Bdx6vA8pWhCWcOMFUT5i-qqzCil5HIy3g/p.jpeg",
    "https://uc351b119610200051f46f6577d6.previews.dropboxusercontent.com/p/thumb/AC9WQRP9jjhmAEv1BNzMf9o1rJap_6ukqiTqysXby1snm2g8YCyTYKWRGwt7yLQFw9HNylWE2n_Vq6Q_75tejn4kE3kwaUsK5OPaTI1O0HCSCPf77amzxDHXtGPSumQYYlGWDmpv1anXOiQyadRJtCh149a6LG00sTihHsaaaDUqBed03NXQkfefNiYi40NPnXJimO76DSk2RZ-HiOITqzBilvkSEidC7vO4VIbgMQih3Nm7suxXBYjSIqlWO4zdhJV1jaPJDBJqn44Y_sSGW2XpesXKbFFXUW94OvOhhEjZFnQRktfyIbrWlwN9oWyUaVLoAHBzWe6WTlkAImLb4cKrUn7q8IauhZuPVO8YhKVzwQ/p.jpeg"
  ];

 useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <>
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
          Emerald Yachts offer a refined, boutique-style yacht experience designed for travelers who value relaxed luxury, coastal access, and an easy, social atmosphere at sea.
        </p>

        {/* READ MORE */}
        {readMore && (
          <>
            <p>
              These are not expedition vessels. They are intimate yachts built for warm-weather cruising, scenic coastlines, and destination-driven travel with a lighter pace.
            </p>

            <p>
              Planning an Emerald Yacht journey is not simply about selecting a sailing. It is about choosing the right itinerary, season, and onboard experience to match how you want your time to feel.
            </p>

            <p>
              Trips & Ships Luxury Travel designs Emerald Yacht journeys using a structured planning approach led by Angela Hughes, ensuring every detail is aligned from the beginning so the experience feels effortless and well-paced.
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
      Emerald Yachts are part of the Scenic Group portfolio and are designed for boutique yacht cruising in warm-weather destinations. With a smaller guest count and an open, relaxed onboard environment, Emerald Yachts focus on lifestyle-driven travel rather than expedition or technical exploration.
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
        <h2>
          Real Experience with Emerald Yachts
        </h2>

        <p>
          Our experience with Emerald Yachts is not theoretical. We understand how these journeys unfold in real time, how itinerary pacing impacts the feel of the trip, and how small decisions such as sailing selection and cabin placement influence the overall experience.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="Emerald_experience_image">
        <img 
          src="https://ucfcfe70c13e047d12a1a2540a65.previews.dropboxusercontent.com/p/thumb/AC8AsfIjkUT65Ui6gbKr3W7waEVlUC4kUn0jY9_cg67euWQIpa77QmlqSl8m6gOLNipnvit3-NDpwnAONwH4S_yiTWYZaOSZ_-SuHlm7iypojBfXB7rudJnQkoVkPXrU8J7aEAPiEAI7fH75I8c4KgSbg1S_UPOUNHpqoXWaARVvn5rOFgb_dHdOSfqmEdxFBgw9Fu0s6OP6VmX-cQOx-3fLe1IQUwR3MEa9oja132DNoFx_0fyM84J4TQQ_GvfyoXz_CC0cQ8TjgsI481-LPpfaGDAci0Q2Q0Eu12ynQXk6iO67CkvG-ILxAvau7IIUdhMtZ-dpHhQ9IAiPhd_PaczM0g4CLS4Ff1nANPYN3OLHIQ/p.jpeg" 
          alt="Yacht Experience"
        />
      </div>

    </div>

  </div>
</section>


<section className="Emerald_planning_section">
  <div className="Emerald_planning_inner">

    <h2>
      Expert Planning for Emerald Yacht Cruises
    </h2>

    <p>
      Emerald Yacht cruising is about flow, not complexity. The experience is shaped by how the itinerary unfolds, how much time is spent in port, and how the onboard atmosphere complements the destination.
    </p>

  </div>
</section>


<section className="Emerald_expert_team_section">
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
            Angela Hughes is a recognized voice in the luxury travel industry with over four decades of experience. Named Luxury Travel Influencer of the Year by Travel Leaders Network, her insights are built on a foundation of scaling global luxury businesses and training elite advisors worldwide.
          </p>
          <p>She was named Luxury Travel Influencer of the Year by Travel Leaders Network and recognized among the Most Influential Women in Travel by TravelPulse. Her insights have been featured in Travel Weekly, Insider Travel Report, Travel Market Report, The Washington Post, and The New York Times.</p>
        </div>

        {/* TEAM CREDENTIALS */}
        <div className="Emerald_team_sub">
          <h3>The Trips & Ships Specialized Team</h3>
          <p>
            Trips & Ships Luxury Travel is a premier network of over 140 luxury travel advisors. Each journey we plan is powered by a structured methodology and deep industry relationships.
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
          <img src={myImage} alt="Angela Hughes - CEO & Founder" className="Emerald_insight_expert_image" />
        </div>
      </div>
    </div>
  </div>
</section>


<section className="Emerald_recognition_section">
  <div className="Emerald_recognition_inner">
    <h2>As Seen In & Industry Recognition</h2>
    <p className="Emerald_recognition_sub">
      Angela Hughes and Trips & Ships Luxury Travel have been recognized and featured across leading global media and travel industry publications.
    </p>

    {/* MEDIA GRID (Static, Sophisticated) */}
    <div className="Emerald_media_grid">
      {[
        "The New York Times", "The Washington Post", "Travel Weekly",
        "TravelPulse", "Insider Travel Report", "Travel Market Report",
        "Travel Leaders Network"
      ].map((brand, i) => (
        <div key={i} className="Emerald_media_box">
          <span className="Emerald_media_name">{brand}</span>
        </div>
      ))}
    </div>

    {/* INDUSTRY RECOGNITION (Minimalist Cards) */}
    {/* <div className="Emerald_awards_row">
      <div className="Emerald_award_card">
        <Award className="Emerald_award_icon" />
        <div className="Emerald_award_info">
          <h4>Luxury Travel Influencer of the Year</h4>
          <p>Recognized by Travel Leaders Network for 2024</p>
        </div>
      </div>
      
      <div className="Emerald_award_card">
        <Star className="Emerald_award_icon" />
        <div className="Emerald_award_info">
          <h4>Most Influential Women in Travel</h4>
          <p>Awarded by TravelPulse (2026)</p>
        </div>
      </div>

      <div className="Emerald_award_card">
        <Globe className="Emerald_award_icon" />
        <div className="Emerald_award_info">
          <h4>Global Industry Contributor</h4>
          <p>Featured spokesperson in leading publications</p>
        </div>
      </div>
    </div> */}

    <p className="Emerald_media_inquiry">
      <Quote size={12} className="Emerald_quote_icon" />
      Media inquiries and speaking engagements available upon request.
    </p>
  </div>
</section>


<section className="Emerald_ideal_section">
  <div className="Emerald_ideal_inner">

    <h2>
      Is Emerald Yachts Right for You?
    </h2>

    <p>
      <span className="Emerald_highlight_blue">Emerald Yachts Are Ideal If You:</span>
    </p>

    <p className="Emerald_ideal_list">
      • Want a relaxed, warm-weather yacht experience <br />
      • Prefer smaller ships with a social atmosphere <br />
      • Enjoy coastal cruising <br />
      • Value simplicity and ease
    </p>

    <p>
      <span className="Emerald_highlight_blue">Who Should Not Book Emerald Yachts</span>
    </p>

    <p>
      Travelers seeking expedition travel, polar regions, or highly structured enrichment experiences should consider alternatives such as Scenic Eclipse.
    </p>

  </div>
</section>

<section className="Emerald_about_yachts_section">
  <div className="Emerald_about_yachts_inner">

    <h2>
      About Emerald Yachts
    </h2>

    <p>
      Emerald Yachts are boutique vessels designed for relaxed luxury cruising in destinations such as the Mediterranean and Caribbean, with approximately 100 guests onboard.
    </p>

  </div>
</section>

<section className="Emerald_expert_section">
  <div className="Emerald_expert_inner">

    <h2>
      How an Expert Chooses the Right Emerald Yacht Sailing
    </h2>

    <p>
      <span className="Emerald_highlight_blue">Key considerations include:</span>
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

    <h2>
      The Trips & Ships Yacht Planning Method
    </h2>

    <div className="Emerald_method_steps">

      <div className="Emerald_method_step">
        <span className="Emerald_step_number">01</span>
        <p>Experience Alignment</p>
      </div>

      <div className="Emerald_method_step">
        <span className="Emerald_step_number">02</span>
        <p>Destination Strategy</p>
      </div>

      <div className="Emerald_method_step">
        <span className="Emerald_step_number">03</span>
        <p>Itinerary Flow</p>
      </div>

      <div className="Emerald_method_step">
        <span className="Emerald_step_number">04</span>
        <p>Cabin Strategy</p>
      </div>

      <div className="Emerald_method_step">
        <span className="Emerald_step_number">05</span>
        <p>Full Journey Design</p>
      </div>

    </div>

  </div>
</section>

<section className="Emerald_cost_section">
  <div className="Emerald_cost_inner">

    <h2>
      How Much Do Emerald Yachts Cost?
    </h2>

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


       {/* <section class="hero_section">
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
       </section> */}
  