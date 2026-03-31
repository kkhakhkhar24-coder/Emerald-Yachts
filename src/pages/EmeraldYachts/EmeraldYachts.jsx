import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./EmeraldYachts.css"

const LuxuryPage = () => {

  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

   const images = [
    "https://uc25954b0152d6d65098caa785be.previews.dropboxusercontent.com/p/thumb/AC-WBjS3AzuwDkk7-9HnkrzPJeE29riWEHPXuzcRvbK20zII2widZ_RTVlFbYsKfXbLxHJPcXvg-qfNWHW4RAcyrZtJ2fj0NuTssQz92og_8scWagkrRUcSesJ4yNg_JnM-fBmGkb7zN732VZmoec-jt8RZD_9m6qpX6r_t5NB0IVXzD0ex6voCN2_gj_S1mv6Sxkk4LD0B6ZIl5AN4aUOrBGjIBU6w9Zuet6pYr6K9zdSXtRTwEGp1_W6_LEMGy8GNsDd9X4kArUTEYP_rgQ2fV1KyYe3sKO3uObe_VdTaPFOAm65D8ebsP1M0s4ll52_TODdzPRYfeMtqJ9GnqXTslckbrwQkUfUnSnmRX-pEzpFpU7tIEPh2dXwWDslIzRueeRmMwDoMXRLN4fgDUfvUyg0X1Rf5Oa_O0DRhBylnFYw/p.jpeg",
    "https://uc62d07f7d67bf803f4f7c15e420.previews.dropboxusercontent.com/p/thumb/AC-ke5D1QsdqwgF1-RYU-GFf2MEaAOPlvQpJLvCKMokZ7Fo7W0WohPBpD4eilnY0hYl0Gv94c7ElaRX7AKq8itFeez7NIDEq7GYuPLkrOzf_5C7p-C3yhGOAs6sKgqlIWt0sOW2WvCSOt9jpsSSVjo_eeqoOZSXNfNA1Ispb3byAa6duatZUgM73H6o9d8hthyJmSoL_2mVOLhNGbnGo0jHYiRZEF6AHshp8zcSUeLA-Z91bwwxBowgF3gxB5l9t1EWQ2ChD-PnJrIyWFaIK_GREy2kBygbaW41zUqm0rXJqep2AVPw46eEBzYVgTPLY5qZrheOH32SkCpCrVF5WASqCumaJYa_wEyXzxRIoItldNg/p.jpeg",
    "https://ucfb69bcee71ee06438b471ef91d.previews.dropboxusercontent.com/p/thumb/AC9Lfl0gIxe2htsmd0whzz_shACzaqicQQe-aiNBQ9f2hO3Y_3Hn-fCe8XvRvOpD1d_Nfh3GOOqifKO7MfjGefmEuyRBJeMOR1_SHhd4AoD2vbcJAylr5w7AJtodIG3--JKzvh5sM5aXEGrnsyvM4jrdoNDOLO67Od1deP0jJpj7DwPE0T4b1-v8rP2Gf3pC12x-YMMjFwLabclsLLXWsZrkLL4nYoM1NZc_XlaKnJAO1s93jf8EWyC2H7kulpX-vz4_u8VXcyhDN5xMi3T_-6zHtkfYApr-jU2bm51A5waiGUA0irHakNH_55XfGhx1MN3S9zC2isRZpjZnT41CU5Dlqki_4brn0CrsSVfNdqC6WQ/p.jpeg"
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
        <div
          className="Emerald_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="Emerald_hero_overlay"></div>

        <div className="Emerald_hero_content">

          <h1>Emerald Yachts: A New Era of Luxury Travel at Sea</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p>
            Emerald Yachts offer a refined, boutique-style yacht experience designed for travelers who value relaxed luxury, coastal access, and an easy, social atmosphere at sea.
          </p>

          {/* READ MORE CONTENT */}
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

          {/* CTA BUTTONS */}
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
          src="https://uca5a376721c908e8d77da325734.previews.dropboxusercontent.com/p/thumb/AC_RxOJLiFaCmKRqW1lfBL5n5fz61GFVDA5fetoc011UdWrBjB3wRZ6lDbIPUAWjCxaNqFa2Wp35TN8X-cQLzUDuauNxZF4UgQGWoH4fCSV5HyHdX1qsSrNSwiI6Fda_4v-oCgc83hBxgDnm5SWKrpJVS4yTPytE_blzTrxRbXH9JmpUcXZIVzsL6NAsQvaPMHgw8wiDJicKSF1Bz2sTNXvkP8kvVDetIQJ7FXT1ilJ90YQQyfD5ygBjzHgFrkdybfinR-ALGk8eWPra0uIsdT6OtlMaCF8hcUeZPBPrlATgVFlRmXYK83Ip6cGv6_DDG5mgFmvDT30rYNnYdX-7_SnkG3zXv-r98MG6m_W5dL6xokAwy_TdGlSBO2TTgMYOsqnhpqnYKUaY9hGx9v8kWkberhwIRfs3ntfx1c93OMv8_A/p.jpeg" 
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


<section className="Emerald_insight_section">
  <div className="Emerald_insight_inner">

    <h2>
      Expert Insight from Angela Hughes
    </h2>

    <p>
      <span className="Emerald_highlight_text">
        Angela Hughes — CEO & Founder, Trips & Ships Luxury Travel
      </span>
    </p>

    <p>
      Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel and one of the most recognized voices in the luxury travel industry. With more than four decades of experience, she has built and scaled a global luxury travel business and trained advisors worldwide.
    </p>

    <p>
      She was named Luxury Travel Influencer of the Year by Travel Leaders Network and recognized among the Most Influential Women in Travel by TravelPulse. Her insights have been featured in Travel Weekly, Insider Travel Report, Travel Market Report, The Washington Post, and The New York Times.
    </p>

  </div>
</section>


<section className="Emerald_team_section">
  <div className="Emerald_team_inner">

    <h2>
      The Trips & Ships Luxury Travel Team
    </h2>

    <p>
      Trips & Ships Luxury Travel is a team of over 140 luxury travel advisors supported by a structured planning methodology and deep industry relationships.
    </p>

    <p>
      Each journey benefits from:
    </p>

    <p className="Emerald_team_points">
      • A consistent planning framework <br />
      • Advisor training through Luxury Travel University <br />
      • Preferred supplier relationships <br />
      • Ongoing client support before, during, and after travel
    </p>

  </div>
</section>


<section className="Emerald_recognition_section">
  <div className="Emerald_recognition_inner">

    <h2>
      As Seen In and Industry Recognition
    </h2>

    <p>
      Angela Hughes and Trips & Ships Luxury Travel have been recognized and featured across leading global media and travel industry publications, including:
    </p>

    <p className="Emerald_recognition_list">
      • Travel Weekly <br />
      • TravelPulse <br />
      • Insider Travel Report <br />
      • Travel Market Report <br />
      • Travel Leaders Network <br />
      • The Washington Post <br />
      • The New York Times
    </p>

    <p>
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

    </>
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
  