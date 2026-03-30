
       {/* <section class="heading_section">
        <div class="heading_main">
          <h1>Emerald Yachts:Boutique Yacht Cruising Expertly Planned by Trips & Ships Luxury Travel</h1>
        </div>

         <div class="hero_main">
          <p>Emerald Yachts offer a refined, boutique-style yacht experience designed for travelers who value relaxed luxury, coastal access, and an easy, social atmosphere at sea. These are not expedition vessels. They are intimate yachts built for warm-weather cruising, scenic coastlines, and destination-driven travel with a lighter pace.</p>
          <p>Planning an Emerald Yacht journey is not simply about selecting a sailing. It is about choosing the right itinerary, season, and onboard experience to match how you want your time to feel.</p>
          <p>Trips & Ships Luxury Travel designs Emerald Yacht journeys using a structured planning approach led by Angela Hughes, ensuring every detail is aligned from the beginning so the experience feels effortless and well-paced.</p>
          <button>Schedule an Emerald Yacht Planning Consultation</button>
          <button>Prefer email? sales@tripsandships.com</button>
        </div>

      </section> */}


import React, { useEffect, useState } from "react";
import "./orient.css";

const LuxuryPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

   const images = [
    "https://ucd8baf43e60107c95b83766b0a0.previews.dropboxusercontent.com/p/thumb/AC_msA0cLGgYPp2DqDwDizVpCyRXmQ7Mm2OdjQ2NrWIsburThd6At59ksC_Rmlt05zcXYnai0FPGt0EjsiWHpuFR86ltciHLGqk9xyo306zKwuBnwRsD7jjJiBmgDHX3jWobmhakh-V2fFtavSzty82AH8nkFqYQ6WNZNE6B9KtymhT16M7p4wiUfMQB1RCjXxwxfrZUbgXHaCXFSWbdAEAdqaHcMEhny0pnF6wp62iypoL3XrVpINuGZnr955TWf6LWl9a8mpCzk5vqpoUFsmaenH_hB7HnZ8Oa6BSRyY5ny84gjh5w_mOfTa4EeOhPMag3cmJeDnpQlcYpKK5m5o9X6sAy6M2jkelDxYH3_dK3Xw/p.jpeg",
    "https://ucfda2b7d3c7dca99a880dd2c5ae.previews.dropboxusercontent.com/p/thumb/AC8okR26iTMzrLzHXSr9EP1UOvDhRT0BZNM6zHbGsff5NoHXgplkB9llltzI0sLp59gh7ZZUI8GeewHtnkbEczyfPQvkTHW-vpYOaF0B-0wVDTnxbviTJKnQh3ofuxd7JpAQNxUrsuyctFdNOuD4CEAdxPa7rfI55BGetlGM4VjjLdFMvebN3UisbG1ANoGBdlCV1JhIhtd1Z98ieAUGYbkdFWq7nOSVccRiIsWsHbQqdhnXvkp8HTAbr0N0vPMwOG6fhU70vvCVP4zcv9Bhbk7jnaJC-geynu57-HujyxyJYKGIJ4gyzdU1GTnZx5ui-tRdmmKMwNvKnH7R3SqCurVEL6EP2mLCU4y0KqcXdTQeNwSpIbnaY0Rpq5p93HomwxL2mYqzy5OQUgwcis58UyJ94HXo0HfOTIor_UT5vAVUBA/p.jpeg",
    "https://uc864bbfa833507e595e834ae8d9.previews.dropboxusercontent.com/p/thumb/AC83JTTHTeYw1MqsDGESou0Dd9_MrwCi7sUyE4AGtXRs6eZxVyotZUscHF21UUv94KRFXVbRWvMa_sRHbSMuSr8Gr5ISnKbbvV-y4vuXX88ewQXgF9hezfjUgk3hh84pbYJJcQ4MbI6uX5HXVDndA5mRbwXdM-dGWiuNqA9lTs6iDA12tLt590ou8_SdBPDHxqq4icxkqsQuH6bVFnRj2EYXdMwi5XQCib-dAwsptj44hfwd1wmdUNUrTi-0GeYXj8FuzZSM4Cr4O7mGoRfGOCzzx8evCZNUiYYN8FV1iUTqqmFEpC4sKzemXY9D0dlgB5oFiADvFOBjBSWI_4gD9PYq8bDNFswxFLxC2jhWGYGU9A/p.jpeg"
  ];


 useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, []);


   

  return (
    <>
       {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav_inner">

          <div className="logo">TRIPS & SHIPS</div>

          <div className="nav_links">
            <a href="#">HOME</a>
            <a href="#">EXPERIENCES</a>
            <a href="#">MEETINGS & INCENTIVES</a>
            <a href="#">ALUMNI TRAVEL</a>
            <a href="#">VIP HOTELS</a>
            <a href="#">ABOUT & RESOURCES</a>
            <a href="#">BLOG</a>
            <button className="contact_btn">CONTACT</button>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            ☰
          </div>

        </div>
      </nav>

      {/* ================= OFFCANVAS ================= */}
      <div className={`offcanvas ${menuOpen ? "active" : ""}`}>
        <div className="close_btn" onClick={() => setMenuOpen(false)}>×</div>

        <a href="#">HOME</a>
        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </div>

      {/* ================= HERO ================= */}
      <section className="hero_section">

        <div
          className="hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="hero_overlay"></div>

        <div className="hero_content">

          <h1>
            Emerald Yachts: A New Era of Luxury Travel at Sea
          </h1>

          <p>
            Emerald Yachts offer a refined, boutique-style yacht experience designed for travelers who value relaxed luxury, coastal access, and an easy, social atmosphere at sea. These are not expedition vessels. They are intimate yachts built for warm-weather cruising, scenic coastlines, and destination-driven travel with a lighter pace.
          </p>

          <p>
            Planning an Emerald Yacht journey is not simply about selecting a sailing. It is about choosing the right itinerary, season, and onboard experience to match how you want your time to feel.
          </p>

          <p>
            Trips & Ships Luxury Travel designs Emerald Yacht journeys using a structured planning approach led by Angela Hughes, ensuring every detail is aligned from the beginning so the experience feels effortless and well-paced.
          </p>

          <div className="hero_buttons">
            <button className="primary_btn">
              Schedule an Emerald Yacht Planning Consultation
            </button>

            <button className="secondary_btn">
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



       <section className="about_section">
  <div className="about_inner">
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

<section className="experience_section">
  <div className="experience_inner">

    <div className="experience_grid">

      {/* LEFT CONTENT */}
      <div className="experience_text">
        <h2>
          Real Experience with Emerald Yachts
        </h2>

        <p>
          Our experience with Emerald Yachts is not theoretical. We understand how these journeys unfold in real time, how itinerary pacing impacts the feel of the trip, and how small decisions such as sailing selection and cabin placement influence the overall experience.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="experience_image">
        <img 
          src="https://ucfda2b7d3c7dca99a880dd2c5ae.previews.dropboxusercontent.com/p/thumb/AC-Nf36pdgBs0rExUusTmoEuAA9-zDO2GuEJOenWLe_X6WKcqvLT2YhF_XkFs1WalmE7jInrY8U0Aqxyif5kviMdGPLnjlZs03jazoz4BfxwvAVtsDcWW6t-hmSPb1BwIbesRYjuV9lkaTAt54mSUm3JteJS6W5OB5w2546aKlKCBB5dx8waZcKqoEE6_EkxEvXodkdkkzKGkTeWnmmKd8lS-BSA7zkMUM6Tzsaojx7g-Qrzxu6mqc6Oh9SKd2uxYzM2eQyg56RcS8xNzrkXG5FRRGhpETzh-YGQGm442vh_WYcfzGsA1PgZB1JSp_X4agn6rdAGuARu6qYD8QEafolr_PnzOK17vL1g3AO20xTkIBLsvwz8m6F3usfx4rhWPMPIyHkIR6uCk8Qdg5YB7kelPxtDb_sdng7SIyIl9AWFCw/p.jpeg" 
          alt="Yacht Experience"
        />
      </div>

    </div>

  </div>
</section>


<section className="planning_section">
  <div className="planning_inner">

    <h2>
      Expert Planning for Emerald Yacht Cruises
    </h2>

    <p>
      Emerald Yacht cruising is about flow, not complexity. The experience is shaped by how the itinerary unfolds, how much time is spent in port, and how the onboard atmosphere complements the destination.
    </p>

  </div>
</section>


<section className="insight_section">
  <div className="insight_inner">

    <h2>
      Expert Insight from Angela Hughes
    </h2>

    <p>
      <span className="highlight_text">
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


<section className="team_section">
  <div className="team_inner">

    <h2>
      The Trips & Ships Luxury Travel Team
    </h2>

    <p>
      Trips & Ships Luxury Travel is a team of over 140 luxury travel advisors supported by a structured planning methodology and deep industry relationships.
    </p>

    <p>
      Each journey benefits from:
    </p>

    <p className="team_points">
      • A consistent planning framework <br />
      • Advisor training through Luxury Travel University <br />
      • Preferred supplier relationships <br />
      • Ongoing client support before, during, and after travel
    </p>

  </div>
</section>


<section className="recognition_section">
  <div className="recognition_inner">

    <h2>
      As Seen In and Industry Recognition
    </h2>

    <p>
      Angela Hughes and Trips & Ships Luxury Travel have been recognized and featured across leading global media and travel industry publications, including:
    </p>

    <p className="recognition_list">
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


<section className="ideal_section">
  <div className="ideal_inner">

    <h2>
      Is Emerald Yachts Right for You?
    </h2>

    <p>
      <span className="highlight_blue">Emerald Yachts Are Ideal If You:</span>
    </p>

    <p className="ideal_list">
      • Want a relaxed, warm-weather yacht experience <br />
      • Prefer smaller ships with a social atmosphere <br />
      • Enjoy coastal cruising <br />
      • Value simplicity and ease
    </p>

    <p>
      <span className="highlight_blue">Who Should Not Book Emerald Yachts</span>
    </p>

    <p>
      Travelers seeking expedition travel, polar regions, or highly structured enrichment experiences should consider alternatives such as Scenic Eclipse.
    </p>

  </div>
</section>

<section className="about_yachts_section">
  <div className="about_yachts_inner">

    <h2>
      About Emerald Yachts
    </h2>

    <p>
      Emerald Yachts are boutique vessels designed for relaxed luxury cruising in destinations such as the Mediterranean and Caribbean, with approximately 100 guests onboard.
    </p>

  </div>
</section>

<section className="expert_section">
  <div className="expert_inner">

    <h2>
      How an Expert Chooses the Right Emerald Yacht Sailing
    </h2>

    <p>
      <span className="highlight_blue">Key considerations include:</span>
    </p>

    <div className="expert_cards">

      <div className="expert_card">
        <div className="icon_box"><i className="fas fa-route"></i></div>
        <p>Itinerary structure</p>
      </div>

      <div className="expert_card">
        <div className="icon_box"><i className="fas fa-sun"></i></div>
        <p>Seasonality</p>
      </div>

      <div className="expert_card">
        <div className="icon_box"><i className="fas fa-clock"></i></div>
        <p>Time in port versus sea</p>
      </div>

      <div className="expert_card">
        <div className="icon_box"><i className="fas fa-ship"></i></div>
        <p>Ship atmosphere</p>
      </div>

      <div className="expert_card">
        <div className="icon_box"><i className="fas fa-plane"></i></div>
        <p>Travel logistics</p>
      </div>

    </div>

  </div>
</section>


<section className="method_section">
  <div className="method_inner">

    <h2>
      The Trips & Ships Yacht Planning Method
    </h2>

    <div className="method_steps">

      <div className="method_step">
        <span className="step_number">01</span>
        <p>Experience Alignment</p>
      </div>

      <div className="method_step">
        <span className="step_number">02</span>
        <p>Destination Strategy</p>
      </div>

      <div className="method_step">
        <span className="step_number">03</span>
        <p>Itinerary Flow</p>
      </div>

      <div className="method_step">
        <span className="step_number">04</span>
        <p>Cabin Strategy</p>
      </div>

      <div className="method_step">
        <span className="step_number">05</span>
        <p>Full Journey Design</p>
      </div>

    </div>

  </div>
</section>

<section className="cost_section">
  <div className="cost_inner">

    <h2>
      How Much Do Emerald Yachts Cost?
    </h2>

    <div className="cost_list">

      <div className="cost_item">
        <p>Short itineraries:</p>
        <span>$4,000 to $8,000 per person</span>
      </div>

      <div className="cost_item">
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
  