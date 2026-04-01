import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from 'react';
import '../ScenicAntarctica/ScenicAntarctica.css';
import myImage from "../../assets/image.jpg";


function ScenicAntarctica() {


  const [current, setCurrent] = useState(0);
  const [galleryCurrent, setGalleryCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const images = [
    "https://ucad543950156cf5951892cfcf68.previews.dropboxusercontent.com/p/thumb/AC_-VR2tAgRX4SbbdyZSMUxJ0Gn_E3zJK7hKvMGx0na6gQxxwPsS9NRBuES1aaQmK0KZcYfrtFRCwoijGvDEosXOg88HW1JjH4bQY6X14_IHWs_nIIAJINHKFcoMByurvNfmKug2H0HEJw9nD7dy8Z99-h0xbmOLLDs5DiSl1Kc1WYT8G_Ub6coAAwa47gbuqtVXi-wOw4DSYoa5fcTLWttcQQcyw-5zefzlTmr52vLOZdkUHVCo1aY0hFImclzaiLzJ2BTxfUklGi2lgbUcYhR_CFPhBWFkdyP-haSuM1a7QSFhEtWQ5wWoHyf5ZarUvrBbBNrx58p-iZIwyXKxFa7viRfY1oVUVwthIuOKOT98yyhgoQuycmWO8fH2Zl-VoTir6hFc9w2GuCvpp89y0YsWIWcvs4olRmTMJtbrRzcc2Q/p.jpeg",
    "https://ucd7950d9692d1cde772610c7702.previews.dropboxusercontent.com/p/thumb/AC8T4ZhbVovwny9BwYX2HkgFAPkljbLuPw8BNynXPm2xFlPSBtHt2iiswaiH95Kse5H5q2_fKf5REVhIdZoIdBC9V8YCshT1Kig3prXdAkWoAbr2q2YYpXIxNydkwzM7S6U9U_yxXV4PnNd9LUNnsJRPBETvqLtWBcILYPqp08nSN9kzgY0SvFWd1iXs8sYh4KEUZoP9NwcubQ6GjpJKhfGcSb8wZL4V5OWYipBBHELVwi8RwY3eFbIiKPkLErxiu0vaP1lxrnI7cu3SVhmGPoQF2cIYwV8QgcWtKOdeJmYHteKypxbA-uHjjMuHA7cwNL0nYoRwyExZ0tMzg5ZhW3ifj4YXnkqW14HTM56WsAs8XTz9EKK65gxrDXqHQcZhdMSzGZdM9tAPWvz7ChBaNk6N41vsryWN41Dus0FaVXUX3A/p.jpeg",
    "https://uccb6324b97673307f62df953b14.previews.dropboxusercontent.com/p/thumb/AC_PRH2CFPmhVx0XIwPyFAiNiEAgseUip9MfWSkfBWm8n5Fz-lzwbmJPWj-OGPDmYJp5qaPmKGk0Bcvy3xDY2cVJ2vN7SQ-JupOo1nDfhiUTa_nnZWaYnHKbhXCUH5kzxa3RHD8vfyZJnjOxH027bBi_N6l1vDa_BgtiCXsQR6cP9q6_oDKsLKkMexVBcMHpakg4u14Kw8XGlxT3QNY0e6BfsHLJxnlsdDJ8iLcSJViawKdeArN3ErC_I6TmS7c-5yWrvlPNOwxnoxrQb-XSrvTIVWvUjs_mxFKhxDBgnZ45yPoLiIv8m52c9dUSIo4aZWOyeRvsY6pvHq6FOfyNLujcC3sS4mxyNJJznR3RVoQ8BuxvAqtBBDo9m7UC4iakhDMKXgRcARnvGppJq5mLNwf0l-ifuD7MozvbJ4YZA_wJ5w/p.jpeg"
  ];

  const galleryImages = [
    "https://uc2638e406449897a43dc0796e47.previews.dropboxusercontent.com/p/thumb/AC9WqdDAK77RH-nIhvacxDMuup5aJ4-ukccY9qs-norLuRsB6hdOzfG1JzXXqPxMfrMzbD69yeVvHtcftYxN4e5pie5x1FQSHIInflizXm-b6E6mam9kNaQPRE5ccqfCPCuxSD3GrF41011186_eKERVq7qvwID2_dTJds87WC6SDWieWBKqAz5dnsN_tqh3f1K7wITfCnCzLpKm06k7W7ceUGuhyvWuyDLQsQ8rcPGvP7jCzoTBeVFRovjzQcwhsiBeDMUKTGRfHsvELE03CpsCkCd4qDzvtew_u3YTB48pYS6RT6pk-59BM8oWnXndIIhRkSA9JC4OtctfcMcIKKejSjL2k00Qvr5-fggANf_pmezqCn7BqjZgUq3tl4PMSMxNm4xbo4YEiTq4s16hL_Yo-6h1LUDq0r2SLRPkUGfmhw/p.jpeg",
    "https://ucb3eb83518843a4a3afe89fb158.previews.dropboxusercontent.com/p/thumb/AC_Krb_nJtbHKvZY4l2-eW1N_HyPSJDQnsy5-Yb_KwHmGXRqNamR_AmiIuW31FqulD6_Z34T0mU_zNqv4OAa2zfTXazkh9-flUGbJ7rqVcFJlgG5Qd_TpfrxrU_GfrZA28WKfPAQkQzCjwRi8iiqR34EoRF-6U7o1ODhYoISXJEonwvhVYuhsmyGlrkNHz6PrOLGjuSmBsVZKMNGp9kZvRv8xh0VZBhHzK-fd7dlPTQDb5iHs2heSqEyJOKk4ReSyVlijDHLy_oRLtFYDAM5_XjEyEpwNCGEry1AeygJmCKmPPerBHyU-bMX5ayzCFf_FIqN2EiJl6Kwfx3mjpQ91GGWJtSHvLMraFcruYGQ0tOI3g/p.jpeg",
    "https://ucc68ffeff1c43fb342d5b81b9b4.previews.dropboxusercontent.com/p/thumb/AC_CyCuf2q5X4p_Z8dMoQrWrvJwUUAfv3P9D_85ovk8nNs-tmRzWE3dMgNkOFMxZwrqj7cEAYVWX40i17uLjypxqJPY1TbSGcDYvsJebO4M2D6QPjz1hwECkt2XkQsFBMmWGDJO-AR5wCLiWf6fw8sYFgnRhTeh_f1zZsPwNa4P5sDCWBEaUFVz7GF4FQBWRPSgCopdwdFngx3xVhAnfxqta8dZGltdx69Subwj7s-H9SFZA3iuvUsGeJ49speIEk2ZgsNQ3q_OTMd8iv_piMgioBZd9Rn390FCW2wwxs8YWqjtOx7NzG3HFWbHx9Kk-ZZdpW5qkpH1Hb4rAyYAB2eiz9sMFARsNoAzBr4wq2fJDkg/p.jpeg",
    "https://uc729644c4abf5f6b2344dc569cf.previews.dropboxusercontent.com/p/thumb/AC_wD0COjP-wglE_eTR5ev9gC5cEoLahAL7V4tbzWIVMVWRNoVbz_CiwS8yodVwEsbngzJqLMsaeFcmmLAwYIzb0v8-ciJGTnC__E16UxS9zT5-qjmvG-cfiydQZv_nNZe1A8RkATOUBU-Xzl2il7mqLz50rWeeWdn-eS1SK4UwW6uAcfzRUixE8fhcGnztCMoFUcadL6WzLVX8I3Q8JIAfMlhge7w6x7iRpPtWdWV27j-4_I2k3Fqh7Ld4c5Xw1Z0CT92dLexcrpLLOwFi_v8tTCR8oV7IdfR1O2LNW21r6KQrCiZP31mG_VQd4Z7nozhY4ZSyjiznaeGEs0DLVtuABfPrEZTHgTrOabDQt6Bfy8w/p.jpeg",
    "https://uc19847a53eeb49ff6ce98c13423.previews.dropboxusercontent.com/p/thumb/AC96S-Jvtss46JkbC9ZrNtjE5feaF4wR_Chzwdgp-kNnNiVfXM5mc7CNo4npe03ZvL_nHj82FcHgcKwHmZKFEpdb8fBhJKLrUOKI3lQZTALotpFTXcAbqWKRYu-fQBU6UeCKBRcDvvHInSeutv_Lo_4Tf3yzo9fB_EZ_my5C1ob62a-QT7V5sUeFQNhpNLmgBToUIgL5zecci-nNBbsAn7dLZ0yAJSZg_oCzc53ronHwxPN6edOXU5eml_Tt0lpQK_49Qz40YkqnX_As-fPHRWCUO-ft4kPWPbmpJ9FlXYBLJvqiUEEtiNEVAbE3u5zRVDW_Wh2LPzkmy0q_B54fxtb471OTPA_JGi1kQxgHJQYqbw/p.jpeg",
    "https://uc8524b4870d68527df3f2365a3b.previews.dropboxusercontent.com/p/thumb/AC9vme7oRJb7_EHQ9kb-qQ-0fIGbLuaCxJJgzlvmQh-vKqgr2oLvVn6XExzdjjkFekwEQ8cN7tLtt5JqsnUGwKpq5QeFfSSGYcNkKAal8Xjyuj54s4FMNG6zsaTcaEfASaY5UcVITmjPqV5j2xmwatVfxpRIpUsMKrH7aIvQjGJYPhNwcndwB2n2zB8YUOFvmkhzOx8iqx2bUjQX3Zn84HAaJg9FCAFtl9LYH4OTNALc1dRgGHBVpJCWFsB0DjeqH7yJqJRl903qmgyUyrx_wzLl8VujmOHFpRhyuoZGuxwNdHpe5u_nAnIhtv65KEtSRIzfBTSaMIDSKQF88PHf3yjJ5s8msNQGXXXH1bnD2-wEUQ/p.jpeg",
    "https://uc4d774fa30995fb504b9c28d7f4.previews.dropboxusercontent.com/p/thumb/AC9z7B_aBdn6zkpXoa58J2NQbUbtROupZrFrqWZEGU5nGTiA6hm5LN2zYfVkcMbjPY1fOC3Xcst_G8M4Wj_61kxHPBYVjqSqreP5ER0Mv_AcJybLR8jxGaRP0bcsYn4y1WlxjWW9ap6mkQHwr9bwHLHF42vp4-bygFKX9Oqp8Ke3g7fBkKygcIBm86O0tyIYrOdBuYWpPd65x8tXz9jQAf03sAc0j7msGOHz_bown9bKw3evonDakNG9RPEXmUhS89-aiIqaGecxo25KMx7TaeUfa5lxValvSOwbNkJJ5F_YVAaENbvLzrMmV6xf5Ryb-EpG6EP2vI-GZ-lzpEKJ-OEy_dTpt-C2Ejin8VmjHo4hrw/p.jpeg"
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
      <img src="https://ucc68ffeff1c43fb342d5b81b9b4.previews.dropboxusercontent.com/p/thumb/AC_CyCuf2q5X4p_Z8dMoQrWrvJwUUAfv3P9D_85ovk8nNs-tmRzWE3dMgNkOFMxZwrqj7cEAYVWX40i17uLjypxqJPY1TbSGcDYvsJebO4M2D6QPjz1hwECkt2XkQsFBMmWGDJO-AR5wCLiWf6fw8sYFgnRhTeh_f1zZsPwNa4P5sDCWBEaUFVz7GF4FQBWRPSgCopdwdFngx3xVhAnfxqta8dZGltdx69Subwj7s-H9SFZA3iuvUsGeJ49speIEk2ZgsNQ3q_OTMd8iv_piMgioBZd9Rn390FCW2wwxs8YWqjtOx7NzG3HFWbHx9Kk-ZZdpW5qkpH1Hb4rAyYAB2eiz9sMFARsNoAzBr4wq2fJDkg/p.jpeg" alt="Scenic Antarctica Explorer" />
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


{/* ================= SECTION 11 — EXPERT TEAM & PERSONAL CURATOR ================= */}
<section className="Scenic_expert_team_merged_section">
  <div className="Scenic_insight_inner">
    <div className="Scenic_insight_flex">
      
      {/* CONTENT (LEFT) */}
      <div className="Scenic_insight_content">
        <h2>Why Book with Angela Hughes and Trips & Ships Luxury Travel?</h2>
        
        <div className="Scenic_expert_sub">
          <p>Antarctica requires strategic planning and execution.</p>
          <p>Angela Hughes brings over four decades of experience in the travel industry and has traveled to 121 countries and territories.</p>
        </div>

        <ul className="Scenic_styled_list Scenic_team_points_styled">
          <li><i className="fas fa-check-circle"></i> Strategic positioning across expedition inventory</li>
          <li><i className="fas fa-check-circle"></i> Access to preferred availability and timing</li>
          <li><i className="fas fa-check-circle"></i> Full itinerary coordination</li>
          <li><i className="fas fa-check-circle"></i> Ongoing support throughout the journey</li>
        </ul>

        <div className="Scenic_curated_card">
          <div className="Scenic_curated_card_header">
            <div className="Scenic_curated_card_title">
              <h3>Planned and Curated by Angela Hughes</h3>
              <p className="Scenic_curator_subtitle">CEO & Founder, Trips & Ships Luxury Travel</p>
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
              <i className="fas fa-star"></i>
              <span>Luxury Travel Influencer of the Year</span>
            </div>
            <div className="Scenic_curated_badge_item">
              <i className="fas fa-crown"></i>
              <span>Most Influential Women in Travel (2026)</span>
            </div>
          </div>

          <p className="Scenic_curator_featured">
            Featured in <strong>Travel Weekly</strong>, <strong>TravelPulse</strong>, and other leading industry publications.
          </p>
        </div>

        <div className="Scenic_expert_sub Scenic_margin_top">
          <p>Clients are often positioned into inventory that is no longer publicly available due to timing and relationships.</p>
          <p>Every Antarctica journey is reviewed and structured prior to confirmation to ensure accuracy and alignment.</p>
        </div>
      </div>

      {/* IMAGE (RIGHT) */}
      <div className="Scenic_insight_image_container">
        <div className="Scenic_insight_image_wrapper">
          <img 
            src={myImage} 
            alt="Angela Hughes - Luxury Travel Advisor" 
            className="Scenic_insight_expert_image"
          />
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= SECTION 11.5 — IMAGE GALLERY SLIDER ================= */}
<section className="Scenic_gallery_section">
  <div className="Scenic_gallery_inner">
    <div className="Scenic_gallery_wrapper">
      
      {/* NAVIGATION ARROWS */}
      <button 
        className="Scenic_gallery_arrow Scenic_gallery_arrow--prev"
        onClick={() => setGalleryCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button 
        className="Scenic_gallery_arrow Scenic_gallery_arrow--next"
        onClick={() => setGalleryCurrent((prev) => (prev + 1) % galleryImages.length)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* IMAGES */}
      <div 
        className="Scenic_gallery_slide"
        style={{ backgroundImage: `url(${galleryImages[galleryCurrent]})` }}
      >
        <div className="Scenic_gallery_overlay">
          <span className="Scenic_image_counter">{galleryCurrent + 1} / {galleryImages.length}</span>
        </div>
      </div>

      {/* PAGINATION DOTS */}
      <div className="Scenic_gallery_dots">
        {galleryImages.map((_, index) => (
          <span 
            key={index} 
            className={`Scenic_gallery_dot ${index === galleryCurrent ? 'active' : ''}`}
            onClick={() => setGalleryCurrent(index)}
          ></span>
        ))}
      </div>

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