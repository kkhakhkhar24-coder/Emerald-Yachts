import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from 'react';
import '../ScenicAntarctica/ScenicAntarctica.css'

function ScenicAntarctica() {


 const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

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


<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

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
     What Is Included on a Scenic Antarctica Expedition
    </h2>

    <p>
      Scenic structures its Antarctica voyages as all-inclusive. Details should always be confirmed at time of booking, but the model is designed to eliminate fragmented pricing.
    </p>

    <p>
        Typical inclusions:
    </p>

    <div className="Scenic_expert_cards">

      <div className="Scenic_expert_card">
        <div className="Scenic_icon_box"><i className="fas fa-route"></i></div>
        <p>Suite accommodations</p>
      </div>

      <div className="Scenic_expert_card">
        <div className="Scenic_icon_box"><i className="fas fa-sun"></i></div>
        <p>Dining across multiple venues</p>
      </div>

      <div className="Scenic_expert_card">
        <div className="icon_box"><i className="fas fa-clock"></i></div>
        <p>Beverages</p>
      </div>

      <div className="Scenic_expert_card">
        <div className="icon_box"><i className="fas fa-ship"></i></div>
        <p>Guided expedition landings and zodiac excursions</p>
      </div>

      <div className="Scenic_expert_card">
        <div className="icon_box"><i className="fas fa-plane"></i></div>
        <p>Onboard lectures and enrichment</p>
      </div>

    </div>

  </div>
</section>


{/* ================= SECTION 5 ================= */}
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

    <h2>How Scenic Compares to Other Antarctica Expedition Cruises</h2>

    <p>
      Travelers evaluating Antarctica often compare multiple expedition cruise lines.
    </p>

    <p>
      Scenic’s position is distinct within the market:
    </p>

    <p className="Scenic_team_points">
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
<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

    <h2>Is Antarctica the Right Experience for You</h2>

    <p>
      Antarctica is not a passive destination. It requires flexibility and a clear understanding of what the experience involves.
    </p>

    <p>Considerations include:</p>

    <p>
      • The Drake Passage crossing, which can vary in conditions <br/>
      • Zodiac transfers and uneven terrain during landings <br/>
      • Weather-driven itinerary adjustments
    </p>

    <p>
      Scenic is designed to provide a high level of comfort throughout, but the experience remains an active expedition.
    </p>

    <p>
      For many travelers, Antarctica becomes one of the most meaningful journeys they will take. The key is approaching it with the right expectations and preparation.
    </p>

  </div>
</section>


{/* ================= SECTION 7 ================= */}
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

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
<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

    <h2>Pricing and Investment Strategy</h2>

    <p>
      Antarctica is a limited-access destination with strict capacity controls. Scenic operates within the ultra-luxury segment.
    </p>

    <p>
      Expeditions represent a significant travel investment. The value is driven by:
    </p>

    <p>
      • Restricted access to the region <br/>
      • Limited ship capacity <br/>
      • Expedition execution and safety standards <br/>
      • All-inclusive structure
    </p>

    <p>
      Pricing varies based on suite category, itinerary length, timing, and availability.
    </p>

    <p>
      Strategic planning allows clients to secure the right experience well in advance.
    </p>

  </div>
</section>


{/* ================= SECTION 9 ================= */}
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

    <h2>When to Travel to Antarctica</h2>

    <p>
      The Antarctica season runs from November through March.
    </p>

    {/* NEW CARDS */}
    <div className="Scenic_season_cards">

      <div className="Scenic_season_card">
        <div className="Scenic_season_icon"><i className="fas fa-snowflake"></i></div>
        <h4>Early Season</h4>
        <p>Pristine ice and untouched landscapes</p>
      </div>

      <div className="Scenic_season_card">
        <div className="Scenic_season_icon"><i className="fas fa-paw"></i></div>
        <h4>Mid Season</h4>
        <p>Peak wildlife activity</p>
      </div>

      <div className="Scenic_season_card">
        <div className="Scenic_season_icon"><i className="fas fa-water"></i></div>
        <h4>Late Season</h4>
        <p>Whale activity and changing light</p>
      </div>

    </div>

    <p>
      The best timing depends on the traveler’s priorities.
    </p>

  </div>
</section>


{/* ================= SECTION 10 ================= */}
<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

    <h2>What Happens Next</h2>

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

    <h2>Why Book with Angela Hughes and Trips & Ships Luxury Travel</h2>

    <p>
      Antarctica requires strategic planning and execution.
    </p>

    <p>
      Angela Hughes brings over four decades of experience in the travel industry and has traveled to 121 countries and territories.
    </p>

    <p className="Scenic_team_points">
      • Strategic positioning across expedition inventory <br/>
      • Access to preferred availability and timing <br/>
      • Full itinerary coordination <br/>
      • Ongoing support throughout the journey
    </p>

    <p>
      Clients are often positioned into inventory that is no longer publicly available due to timing and relationships.
    </p>

    <p>
      Every Antarctica journey is reviewed and structured prior to confirmation to ensure accuracy and alignment.
    </p>

  </div>
</section>


{/* ================= SECTION 12 ================= */}
<section className="Scenic_about_yachts_section">
  <div className="Scenic_about_yachts_inner">

    <h2>Planned and Curated by Angela Hughes</h2>

    <p>CEO, Trips & Ships Luxury Travel</p>
    <p>40+ years in the travel industry</p>
    <p>Traveled to 121 countries and territories</p>
    <p>Luxury Travel Influencer of the Year (2024)</p>
    <p>Named among the Most Influential Women in Travel (2026)</p>
    <p>Featured in Travel Weekly, TravelPulse, and other publications</p>

  </div>
</section>


{/* ================= SECTION 13 ================= */}
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

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
<section className="Scenic_team_section">
  <div className="Scenic_team_inner">

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