import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from 'react';
import '../ScenicAntarctica/ScenicAntarctica.css';
import myImage from "../../assets/image.jpg";


function ScenicAntarctica() {


 const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

   const images = [
    "https://ucad543950156cf5951892cfcf68.previews.dropboxusercontent.com/p/thumb/AC8Fr-1JzVGbGHMP94K5UNpHrs1RfZrQYcNGlKvhAiMJFrxLMxh-zz0AmSP6oe4JUvhdbquwzdbCg_-X5TVkgGnRVfsoLJ2iQvktRxsGIv_JS2K2zFs69c3oNdyMHVfC9Q1A5CSZBU0QCiWtj-1PSgWMz0WclezVAiDZYOA4itlg63n104wWmpEcJ-6Cpjw0CVWwsl_vZ2P1k-f5Jl2XY3QhJgnY_qfZwvUr7DbJ10eI7xhOdxaAWYP4qHSjehdVvvyoO3-b1Ge-9vPGG6mfjhzQe_WVvjQfTvUKGHa8SnnbR-Zi76BbaS7P3a3BHu2J8vnIGoUvQzBgUWZxLDH3EQjHi6iMi9NH7Mxrj20AF4BgiaWw6J0bzjF3LqrH3-WvQwM3qeGLpjMkOs9bEopt29q_sDyHbPqvtzr8ZN8KdZ9Ovw/p.jpeg",
    "https://uccb6324b97673307f62df953b14.previews.dropboxusercontent.com/p/thumb/AC-peetLkZUWPMdZgI2tm962awPr0rC9PUUMaJoC4upBhxSYuuT9hCWOfuES8X0gaeAPSyLxv16bigOl0bHU7CDC6OQKS-z3V_Nt_o9S4VSklsmP_XbeIcmeP9l_ZV2Mf6-P2mw13dg2KCO97btkcfctVPPppiVee9nccZvc0OkGVC2LaQR19C73s4tFxXXNoLJSwvrcbDiHeK1o_Q_zE1q8a_YIAlCmAATM-cM5llN_IVcWmQLi_lCtFCqsCwlYMK1a1BAbxqX06DN_mOAqoiu7yPZVBvj00BMNxdYqksrM8BhzszSC3BjbBBBY1KEsJdmAjRpwkIddxdXn4bcj83qcTdZtH65hkLBEfG-8H3lqCyaRiKU-lQzp7psQ1D-wHsppJs1CELwbVEjgfqECh2KV45th7q3uKWmHUN3yZFNNCA/p.jpeg",
    "https://ucd7950d9692d1cde772610c7702.previews.dropboxusercontent.com/p/thumb/AC8xZCm0ufGHCmiQCg7ZQku6MhDtJdSURevdPzEY6VaopiossBoX4rfqcwCOBmJFIubwbVEJWWqIfIg01z-qTqXTz9Nq-b8lyKY8bZd6WZhhyQgrly2yuTxj7G2HZ2-XoZyDSn2V5UZFcTSppwdSWGo_aYSJDR4yYUmvIpLS7Q2SNxrkpDRaiMOvBJQ9sSx1wOR4nlIgUmk3MKGsIoJsyYcGfap1it_NShAvAvUkXakE28MS3jUnwn8BQXeaOF7PqX6UNJk99Cq-uLMKmhxAScXFSUd3Ikypkw2-zG67K0smImp14AK3Ne5xbbKkpodxEgKdCVp1zf342te6FIuJCA9UI9fNbswnnNvUsI9OSP82sOaIreidLswdnZULoDmvu-jMDXKQPPtN9K5MxJXKtllkDj8SBl2_9LAQn4oP56Pzmw/p.jpeg"
  ];


 useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);



    return (
        <div>
            <Navbar />

            {/* HERO */}
      <section className="Scenic_hero_section">
        <div
          className="Scenic_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          {/* <div className="page_breadcrumb">
            <Link to="/">Home</Link> &gt; <span>Antarctica</span> &gt; <span>Scenic Antarctica Cruises</span>
          </div> */}
          <h1>Scenic Antarctica Cruises</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p>
           Ultra-luxury expedition travel aboard Scenic Eclipse
          </p>

          <p>
            Antarctica is one of the most remote and controlled travel environments in the world. The success of the journey is determined long before departure, based on the ship, the expedition team, and the planning behind it.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
               Scenic Luxury Cruises & Tours designed Scenic Eclipse as a discovery yacht specifically for Antarctica, combining expedition capability with a fully all-inclusive luxury experience.
              </p>

              <p>
                This is structured exploration. Every element is built for access, operational precision, and a high level of comfort in an extreme environment.</p>

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

    <h2>
      Why Choose Scenic for Antarctica?
    </h2>

    <p>
      Scenic operates in the ultra-luxury expedition category with a clear positioning: deliver Antarctica access without sacrificing onboard experience.
    </p>

    <p>
      Scenic Eclipse is purpose-built for polar travel while offering a level of space, design, and service not commonly found in expedition vessels.
    </p>

    <p>
        The all-inclusive structure simplifies the journey. Instead of managing incremental costs, clients move through the experience with clarity around what is included.
    </p>

    <p>
        Scenic is best suited for travelers who want:
    </p>

    <p className="Scenic_team_points">
      • A modern expedition yacht designed for polar conditions <br />
      • A seamless, all-inclusive pricing model <br />
      • Elevated accommodations and onboard environment <br />
    </p>

  </div>
</section>


<section className="Scenic_about_yachts_Experience_section">
  <div className="Scenic_about_yachts_Experience_inner">

    <h2>
    The Scenic Eclipse Experience
    </h2>

    <p>
      Scenic Eclipse operates as a discovery yacht engineered for expedition environments.
    </p>

    <p>
        Each day is structured around guided landings led by a professional expedition team. Guests access Antarctica via zodiac, reaching areas that cannot be accessed by larger vessels.
    </p>

    <p>
        Operations are shaped by weather, ice conditions, and wildlife movement. No two voyages are identical.
Between landings, the ship provides a refined onboard environment designed for recovery, observation, and comfort.
    </p>

    <p>
        This balance defines Scenic’s position in Antarctica.
    </p>

  </div>
</section>



<section className="Scenic_expert_section">
  <div className="Scenic_expert_inner">

    <h2>
     What Is Included on a Scenic Antarctica Expedition?
    </h2>

    <p>
      Scenic structures its Antarctica voyages as all-inclusive. Details should always be confirmed at time of booking, but the model is designed to eliminate fragmented pricing.
    </p>

    <p>
        Typical inclusions:
    </p>

    <div className="Scenic_expert_cards">

      <div className="Scenic_expert_card">
        {/* <div className="Scenic_icon_box"><i className="fas fa-route"></i></div> */}
        <p>Suite accommodations</p>
      </div>

      <div className="Scenic_expert_card">
        {/* <div className="Scenic_icon_box"><i className="fas fa-sun"></i></div> */}
        <p>Dining across multiple venues</p>
      </div>

      <div className="Scenic_expert_card">
        {/* <div className="icon_box"><i className="fas fa-clock"></i></div> */}
        <p>Beverages</p>
      </div>

      <div className="Scenic_expert_card">
        {/* <div className="icon_box"><i className="fas fa-ship"></i></div> */}
        <p>Guided expedition landings and zodiac excursions</p>
      </div>

      <div className="Scenic_expert_card">
        {/* <div className="icon_box"><i className="fas fa-plane"></i></div> */}
        <p>Onboard lectures and enrichment</p>
      </div>

    </div>

  </div>
</section>


{/* ================= SECTION 5 ================= */}
<section className="Scenic_team_Cruises_section">
  <div className="Scenic_team_Cruises_inner">

    <h2>How Scenic Compares to Other Antarctica Expedition Cruises?</h2>

    <p>
      Travelers evaluating Antarctica often compare multiple expedition cruise lines.
    </p>

    <p>
      Scenic’s position is distinct within the market:
    </p>

    <p className="Scenic_team_Cruises_points">
      • Scenic: all-inclusive structure with a modern luxury yacht environment <br/>
      • Silversea Cruises: strong expedition heritage with a more traditional luxury approach <br/>
      • Seabourn Cruise Line: refined, smaller ship experience with expedition capability <br/>
      • Ponant: boutique expedition style with a European design influence
    </p>

    <p>
      The right choice depends on travel style, expectations, and priorities. Scenic is ideal for clients who want simplicity, structure, and a contemporary luxury experience.
    </p>

  </div>
</section>


{/* ================= SECTION 6 ================= */}
<section className="Scenic_right_experience_section">
  <div className="Scenic_right_experience_inner">
    
    <div className="Scenic_right_experience_content">
      <h2>Is Antarctica the Right Experience for You?</h2>

      <p>
        Antarctica is not a passive destination. It requires flexibility and a clear understanding of what the experience involves.
      </p>

      <p>Considerations include:</p>

      <ul className="Scenic_styled_list">
        <li><i className="fas fa-check"></i> The Drake Passage crossing, which can vary in conditions</li>
        <li><i className="fas fa-check"></i> Zodiac transfers and uneven terrain during landings</li>
        <li><i className="fas fa-check"></i> Weather-driven itinerary adjustments</li>
      </ul>

      <p>
        Scenic is designed to provide a high level of comfort throughout, but the experience remains an active expedition.
      </p>

      <p>
        For many travelers, Antarctica becomes one of the most meaningful journeys they will take. The key is approaching it with the right expectations and preparation.
      </p>
    </div>

    <div className="Scenic_right_experience_image">
      <img src={myImage} alt="Scenic Antarctica Explorer" />
    </div>

  </div>
</section>


{/* ================= SECTION 7 ================= */}
<section className="Scenic_team_Routes_section">
  <div className="Scenic_team_Routes_inner">

    <h2>Antarctica Itineraries and Routes</h2>

    <p>
      Most Scenic Antarctica voyages depart from South America, typically Argentina or Chile. The journey includes crossing the Drake Passage before entering the Antarctic Peninsula.
    </p>

    <p>
      Routes remain flexible. Weather, ice conditions, and wildlife activity determine daily operations.
    </p>

    <p>
      This variability is a defining part of Antarctica travel.
    </p>

  </div>
</section>


{/* ================= SECTION 8 ================= */}
<section className="Scenic_pricing_investment_section">
  <div className="Scenic_pricing_investment_inner">

    <h2>Pricing and Investment Strategy</h2>

    <p className="Scenic_pricing_lead">
      Antarctica is a limited-access destination with strict capacity controls. Scenic operates within the ultra-luxury segment. Expeditions represent a significant travel investment. The value is driven by:
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
      Pricing varies based on suite category, itinerary length, timing, and availability. Strategic planning allows clients to secure the right experience well in advance.
    </p>

  </div>
</section>


{/* ================= SECTION 9 ================= */}
<section className="Scenic_season_section">
  <div className="Scenic_season_inner">

    <div className="Scenic_section_header">
      <h2>When to Travel to Antarctica</h2>
      <p>The Antarctica expedition season runs exclusively from November through March.</p>
    </div>

    <div className="Scenic_season_cards">
      <div className="Scenic_season_card Scenic_season_card--early">
        <div className="Scenic_season_icon"><i className="fas fa-snowflake"></i></div>
        {/* <div className="Scenic_season_label">November – Early December</div> */}
        <h4>Early Season</h4>
        <p>Pristine ice, untouched landscapes, and courtship behaviors among penguins.</p>
      </div>

      <div className="Scenic_season_card Scenic_season_card--mid">
        <div className="Scenic_season_icon"><i className="fas fa-paw"></i></div>
        {/* <div className="Scenic_season_label">Late December – January</div> */}
        <h4>Mid Season</h4>
        <p>Peak summer temperatures, hatching penguin chicks, and peak wildlife activity.</p>
      </div>

      <div className="Scenic_season_card Scenic_season_card--late">
        <div className="Scenic_season_icon"><i className="fas fa-water"></i></div>
        {/* <div className="Scenic_season_label">February – March</div> */}
        <h4>Late Season</h4>
        <p>Incredible whale activity, receding ice opening up new channels, and spectacular sunsets.</p>
      </div>
    </div>

    <div className="Scenic_season_footer">
      <i className="fas fa-info-circle"></i>
      <p>The best timing depends entirely on your personal priorities. All months offer exceptional expedition conditions.</p>
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
      This process ensures the journey is structured correctly before confirmation.
    </p>

  </div>
</section>


{/* ================= SECTION 11 ================= */}
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

    <h2>Why Book with Angela Hughes and Trips & Ships Luxury Travel?</h2>

    <p>
      Antarctica requires strategic planning and execution.
    </p>

    <p>
      Angela Hughes brings over four decades of experience in the travel industry and has traveled to 121 countries and territories.
    </p>

    <ul className="Scenic_styled_list Scenic_team_points_styled">
      <li><i className="fas fa-check-circle"></i> Strategic positioning across expedition inventory</li>
      <li><i className="fas fa-check-circle"></i> Access to preferred availability and timing</li>
      <li><i className="fas fa-check-circle"></i> Full itinerary coordination</li>
      <li><i className="fas fa-check-circle"></i> Ongoing support throughout the journey</li>
    </ul>

    <p>
      Clients are often positioned into inventory that is no longer publicly available due to timing and relationships.
    </p>

    <p>
      Every Antarctica journey is reviewed and structured prior to confirmation to ensure accuracy and alignment.
    </p>

  </div>
</section>


{/* ================= SECTION 12 ================= */}
<section className="Scenic_curator_section">
  <div className="Scenic_curator_inner">

    <div className="Scenic_curator_content">
      <h2>Planned and Curated by Angela Hughes</h2>
      <p className="Scenic_curator_subtitle">CEO, Trips & Ships Luxury Travel</p>
      
      <ul className="Scenic_curator_credentials">
        <li><i className="fas fa-award"></i> 40+ years in the travel industry</li>
        <li><i className="fas fa-globe-americas"></i> Traveled to 121 countries and territories</li>
        <li><i className="fas fa-star"></i> Luxury Travel Influencer of the Year (2024)</li>
        <li><i className="fas fa-crown"></i> Named among the Most Influential Women in Travel (2026)</li>
      </ul>

      <p className="Scenic_curator_featured">
        Featured in <strong>Travel Weekly</strong>, <strong>TravelPulse</strong>, and other leading industry publications.
      </p>
    </div>

  </div>
</section>


{/* ================= SECTION 13 ================= */}
<section className="Scenic_team_Hughes_section">
  <div className="Scenic_team_Hughes_inner">

    <h2>About Angela Hughes</h2>

    <p>
      Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel and Luxury Travel University.
    </p>

    <p>
      She specializes in luxury and expedition travel and works with clients seeking high-level, customized global experiences.
    </p>

  </div>
</section>


{/* ================= SECTION 14 (FAQ) ================= */}
{/* ================= SECTION 14 (FAQ) ================= */}
<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

    <h2>Frequently Asked Questions</h2>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 1 ? null : 1)}>
      <div className="Scenic_faq_question">
        <span>What is a Scenic Antarctica cruise?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 1 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 1 && (
        <p className="Scenic_faq_answer">
          An expedition voyage with guided landings, zodiac excursions, and all-inclusive luxury.
        </p>
      )}
    </div>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 2 ? null : 2)}>
      <div className="Scenic_faq_question">
        <span>How much does it cost?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 2 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 2 && (
        <p className="Scenic_faq_answer">
          Pricing varies based on suite, timing, and itinerary.
        </p>
      )}
    </div>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 3 ? null : 3)}>
      <div className="Scenic_faq_question">
        <span>What is included?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 3 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 3 && (
        <p className="Scenic_faq_answer">
          Accommodation, dining, beverages, and guided excursions.
        </p>
      )}
    </div>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 4 ? null : 4)}>
      <div className="Scenic_faq_question">
        <span>Best time to travel?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 4 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 4 && (
        <p className="Scenic_faq_answer">
          December–February for wildlife, November & March for unique conditions.
        </p>
      )}
    </div>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 5 ? null : 5)}>
      <div className="Scenic_faq_question">
        <span>How early to book?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 5 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 5 && (
        <p className="Scenic_faq_answer">
          12–24 months in advance.
        </p>
      )}
    </div>

    <div className="Scenic_faq_item" onClick={() => setActiveFAQ(activeFAQ === 6 ? null : 6)}>
      <div className="Scenic_faq_question">
        <span>Is it physically demanding?</span>
        <span className={`Scenic_faq_icon ${activeFAQ === 6 ? "active" : ""}`}>+</span>
      </div>
      {activeFAQ === 6 && (
        <p className="Scenic_faq_answer">
          Moderate mobility required.
        </p>
      )}
    </div>

  </div>
</section>


{/* ================= SECTION 15 CTA ================= */}
<section className="Scenic_cta_section">
  <div className="Scenic_cta_overlay"></div>
  <div className="Scenic_cta_inner">

    <h2>Plan Your Scenic Antarctica Expedition</h2>

    <p>
      Antarctica is not a destination to approach casually. Work with a team that understands how to structure the experience correctly from the beginning.
    </p>

    <div className="Scenic_hero_buttons">
      <button className="Scenic_primary_btn">Start Your Antarctica Plan</button>
      <button className="Scenic_secondary_btn">Download Antarctica Planning Guide</button>
    </div>

  </div>
</section>


              </div>






    )
}

export default ScenicAntarctica