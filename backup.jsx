import React, { useEffect, useState } from "react";
import "./DistinctiveVoyageSailings.css";
import Navbar from "../../components/Navbar/Navbar";
import HomePage1 from "../../assets/HomePage/HomePage1.jpg";
import HomePage3 from "../../assets/HomePage/HomePage3.jpg";
import HomePage4 from "../../assets/HomePage/HomePage4.jpg";
import SailImg1 from "../../assets/HomePage/HomePage1.jpg";
import SailImg2 from "../../assets/HomePage/HomePage4.jpg";
import { Check } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import TrustImage from "../../assets/HomePage/HomePage3.jpg";

const DistinctiveVoyageSailings = () => {

  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  const faqData = [
    {
      q: "What is a hosted sailing with Angela Hughes?",
      a: "A hosted sailing means Angela Hughes is connected to the voyage as host, offering added expertise, support, and a more personalized travel experience."
    },
    {
      q: "What is included in a Distinctive Voyage?",
      a: "Many Distinctive Voyages include exclusive amenities such as private cocktail receptions, shore events, and added hosted benefits."
    },
    {
      q: "Does it cost more to book with Angela Hughes instead of booking direct?",
      a: "No. In most cases, booking through Angela Hughes and Trips & Ships Luxury Travel does not cost more than booking direct. In fact, Distinctive Voyage amenities and hosted benefits are often not available when booking directly with the cruise line."
    },
    {
      q: "Are these group sailings?",
      a: "Some hosted sailings may include group amenities or hosted experiences depending on the voyage. Details vary by departure and availability."
    },
    {
      q: "Do I have to travel with the group?",
      a: "No. You can enjoy all eligible hosted amenities while still traveling independently. Join as little or as much of the hosted experience as you would like throughout the voyage."
    },
    {
      q: "Can you assist with flights and hotels?",
      a: "Yes. Trips & Ships Luxury Travel can assist with pre and post cruise hotels, transfers, touring, and airfare guidance."
    },
    {
      q: "Who are these sailings best suited for?",
      a: "These voyages are ideal for travelers seeking elevated luxury cruising with expert guidance and curated support."
    },
    {
      q: "How do I reserve my space?",
      a: "You can contact our team directly to request pricing, review current availability, and begin the booking process."
    }
  ];

const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  


  const images = [HomePage1, HomePage3, HomePage4];



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
      <section className="Dist_hero_section">
        {/* BACKGROUND WRAPPER */}
        <div className="Dist_hero_bg_wrapper">
          <div
            key={current}
            className="Dist_hero_bg fade"
            style={{ backgroundImage: `url(${images[current]})` }}
          ></div>
        </div>

        {/* OVERLAY */}
        <div className="Dist_hero_overlay"></div>

        {/* CONTENT */}
        <div className="Dist_hero_content">
          <h1>Distinctive Voyage Sailings</h1>

          {/* FIRST PARAGRAPH */}
          <p>
            Explore Distinctive Voyage hosted sailings curated by Angela Hughes and Trips & Ships Luxury Travel.

          </p>


          {/* READ MORE */}
          {readMore && (
            <>
              <p>
                There is something special about sailing with someone who truly knows this industry from the inside out. Angela Hughes, CEO of Trips & Ships Luxury Travel, has spent decades building relationships across the luxury travel space and helping clients experience the world in a more meaningful way. These hosted sailings are designed for travelers who want more than just a cruise. They want expert guidance, thoughtful planning, elevated experiences, and the confidence of traveling with a trusted name in luxury travel.
              </p>


            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Dist_readmore_wrapper">
            <button
              className="Dist_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>



          {/* BUTTONS */}
          <div className="Dist_hero_buttons">
            <button className="Dist_primary_btn">
              Reserve Your Spot
            </button>

            <button className="Dist_secondary_btn">
              Request Sailing Details
            </button>
          </div>
        </div>
      </section>


      {/* ================= TRUST SECTION ================= */}

      <section className="Dist_trustclean_section">

        <div className="Dist_trustclean_container">

          {/* LEFT */}
          <div className="Dist_trustclean_left">

            <h2 className="Dist_trustclean_heading">
              Why Travelers Trust Angela Hughes for Hosted Luxury Cruises
            </h2>

            <p className="Dist_trustclean_intro">
              Angela Hughes is one of the most recognized voices in luxury travel today, serving as CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University. With more than four decades in the travel industry, Angela has personally sailed, inspected, and vetted many of the world’s leading luxury cruise brands and destinations.
            </p>

            <div className="Dist_trustclean_points">

              <div className="Dist_trustclean_point_1">
                <Check size={16} />
                <p>40+ Years in Luxury Travel</p>
              </div>

              <div className="Dist_trustclean_point_2">
                <Check size={16} />
                <p>CEO of Trips & Ships Luxury Travel</p>
              </div>

              <div className="Dist_trustclean_point_3">
                <Check size={16} />
                <p>Founder of Luxury Travel University</p>
              </div>

              <div className="Dist_trustclean_point_4">
                <Check size={16} />
                <p>Leads a Host Agency of 140+ Advisors</p>
              </div>

              <div className="Dist_trustclean_point_5">
                <Check size={16} />
                <p>Global Speaker on Luxury Travel Trends</p>
              </div>

              <div className="Dist_trustclean_point_6">
                <Check size={16} />
                <p>Featured in Major Travel Media Publications</p>
              </div>

              <div className="Dist_trustclean_point_7">
                <Check size={16} />
                <p>Personally Hosts Luxury Sailings Worldwide</p>
              </div>

              <div className="Dist_trustclean_point_8">
                <Check size={16} />
                <p>Trusted Relationships with Leading Luxury Cruise Lines</p>
              </div>

            </div>

            <p className="Dist_trustclean_outro">
              Traveling with Angela means more than booking a cruise. It means sailing with a host who deeply understands the ships, destinations, and nuances that elevate a luxury travel experience from good to unforgettable.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="Dist_trustclean_right">
            <img src={TrustImage} alt="Luxury Cruise" />
          </div>

        </div>

      </section>


      {/* ================= HOSTED INTRO SECTION ================= */}
      <section className="Dist_hosted_section">
        <div className="Dist_hosted_container">

          <h2 className="Dist_hosted_heading">
            Hosted Luxury Sailings with Angela Hughes
          </h2>

          <p className="Dist_hosted_text">
            Angela Hughes has spent more than four decades in the travel industry and is recognized globally for her expertise in luxury travel, cruise strategy, and high touch client service. Sailing with Angela means joining a thoughtfully selected journey with a host who understands the ships, the destinations, and the details that matter.
          </p>

        </div>
      </section>


      {/* ================= DISTINCTIVE VOYAGES ================= */}
      <section className="Dist_voyage_section">
        <div className="Dist_voyage_container">

          <h2 className="Dist_voyage_heading">
            What Is Distinctive Voyages?
          </h2>

          <p className="Dist_voyage_text">
            There is always a better way to travel. The better way to cruise is Distinctive Voyages — a hosted luxury cruise program offered at no additional cost when you book eligible sailings through Trips & Ships Luxury Travel.
          </p>

          <p className="Dist_voyage_text2">
            On a Distinctive Voyage, guests enjoy complimentary amenities designed to elevate the entire cruise experience while adding value, connection, and insider support throughout the journey.
          </p>

        </div>
      </section>


      {/* ================= INCLUDED BENEFITS ================= */}
      <section className="Dist_include_section">
        <div className="Dist_include_container">

          <h2 className="Dist_include_heading">
            What Is Included with Distinctive Voyages
          </h2>

          <div className="Dist_include_grid">

            <div className="Dist_include_card_1">
              <h4>The Services of a Distinctive Voyages Host</h4>
              <p>
                Your onboard concierge and host to help ensure your experience is seamless and elevated throughout the sailing.
              </p>
            </div>

            <div className="Dist_include_card_2">
              <h4>Invitation to a Private Welcome Reception</h4>
              <p>
                Meet your host, fellow guests, and learn what to expect throughout the journey.
              </p>
            </div>

            <div className="Dist_include_card_3">
              <h4>Exclusive Shore Event</h4>
              <p>
                A complimentary curated event designed to immerse you more deeply in the local culture.
              </p>
            </div>

          </div>

          <p className="Dist_include_note">
            Trips & Ships Luxury Travel is proud to offer access to more than 1,000 Distinctive Voyages sailings across 14 cruise lines through 2027.
          </p>

          <p className="Dist_include_note2">
            Distinctive Voyage amenities are complimentary when booking eligible sailings through our agency. Hosted amenities vary by sailing and supplier program.
          </p>

        </div>
      </section>

      {/* ================= COMPARE TABLE 1 ================= */}
<section className="Dist_compare_section">
  <div className="Dist_compare_container">

    <h2 className="Dist_compare_heading">
      Compare Hosted Sailings
    </h2>

    <div className="Dist_table_wrapper">
      <table className="Dist_compare_table">

        <thead>
          <tr>
            <th>Voyage</th>
            <th>Dates</th>
            <th>Cruise Line / Ship</th>
            <th>Region</th>
            <th>Nights</th>
            <th>Starting From</th>
            <th>Best For</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Greek Isles & Adriatic</td>
            <td>Aug 3–10, 2026</td>
            <td>Explora II</td>
            <td>Mediterranean</td>
            <td>7</td>
            <td>$5,500 pp</td>
            <td>Couples / First-Time Luxury Cruisers</td>
          </tr>

          <tr>
            <td>Adriatic to Greece</td>
            <td>Aug 10–17, 2026</td>
            <td>Explora II</td>
            <td>Mediterranean</td>
            <td>7</td>
            <td>$5,200 pp</td>
            <td>Mediterranean Repeat Travelers</td>
          </tr>

          <tr>
            <td>Antarctica Fly Cruise</td>
            <td>Nov 19–25, 2026</td>
            <td>Silver Endeavour</td>
            <td>Antarctica</td>
            <td>6</td>
            <td>$24,500 pp</td>
            <td>Bucket List Expedition Travelers</td>
          </tr>

          <tr>
            <td>Hong Kong to Singapore</td>
            <td>Jan 3–17, 2027</td>
            <td>Silver Muse</td>
            <td>Asia</td>
            <td>14</td>
            <td>$8,500 pp</td>
            <td>Asia / Culture Enthusiasts</td>
          </tr>

          <tr>
            <td>Cape Town to Dakar</td>
            <td>Apr 11–30, 2027</td>
            <td>Silver Dawn</td>
            <td>Africa</td>
            <td>19</td>
            <td>$13,500 pp</td>
            <td>Well-Traveled Luxury Explorers</td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>



{/* ================= COMPARE TABLE 2 ================= */}
<section className="Dist_compare_section">
  <div className="Dist_compare_container">

    <h2 className="Dist_compare_heading">
      Compare Hosted Sailings
    </h2>

    <div className="Dist_table_wrapper">
      <table className="Dist_compare_table">

        <thead>
          <tr>
            <th>Voyage</th>
            <th>Dates</th>
            <th>Cruise Line / Ship</th>
            <th>Region</th>
            <th>Nights</th>
            <th>Starting From</th>
            <th>Best For</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Greek Isles & Adriatic</td>
            <td>Aug 3–10, 2026</td>
            <td>Explora Journeys / EXPLORA II</td>
            <td>Mediterranean</td>
            <td>7</td>
            <td>$5,500 pp</td>
            <td>Couples / First-Time Luxury Cruisers</td>
          </tr>

          <tr>
            <td>Adriatic to Greece</td>
            <td>Aug 10–17, 2026</td>
            <td>Explora Journeys / EXPLORA II</td>
            <td>Mediterranean</td>
            <td>7</td>
            <td>$5,200 pp</td>
            <td>Mediterranean Repeat Travelers</td>
          </tr>

          <tr>
            <td>Antarctica Fly Cruise</td>
            <td>Nov 19–25, 2026</td>
            <td>Silversea / Silver Endeavour</td>
            <td>Antarctica</td>
            <td>6</td>
            <td>$24,500 pp</td>
            <td>Bucket List Expedition Travelers</td>
          </tr>

          <tr>
            <td>Hong Kong to Singapore</td>
            <td>Jan 3–17, 2027</td>
            <td>Silversea / Silver Muse</td>
            <td>Asia</td>
            <td>14</td>
            <td>$8,500 pp</td>
            <td>Asia / Culture Enthusiasts</td>
          </tr>

          <tr>
            <td>Phuket to Bangkok</td>
            <td>Jan 17–24, 2027</td>
            <td>Windstar Cruises / Star Seeker</td>
            <td>Asia</td>
            <td>7</td>
            <td>$4,999 pp</td>
            <td>Boutique Yacht Cruisers / Asia Explorers</td>
          </tr>

          <tr>
            <td>Cape Town to Dakar</td>
            <td>Apr 11–30, 2027</td>
            <td>Silversea / Silver Dawn</td>
            <td>Africa</td>
            <td>19</td>
            <td>$13,500 pp</td>
            <td>Well-Traveled Luxury Explorers</td>
          </tr>

          <tr>
            <td>Dreams of Tahiti</td>
            <td>Jul 8–15, 2027</td>
            <td>Windstar Cruises / Star Breeze</td>
            <td>French Polynesia</td>
            <td>7</td>
            <td>$5,499 pp</td>
            <td>Active Couples / Warm Weather Luxury Travelers</td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>




      {/* ================= PREMIUM SAILINGS ================= */}
      <section className="Dist_sailpro_section">
        <div className="Dist_sailpro_container">

          <h2 className="Dist_sailpro_heading">
            2026 Sailings with Angela Hughes
          </h2>

          {/* ===== CARD 1 ===== */}
          <div className="Dist_sailpro_card_one">

            <div className="Dist_sailpro_imgwrap_one">
              <img src={SailImg1} alt="Explora Journey" />
            </div>

            <div className="Dist_sailpro_content_one">
              <p className="Dist_sailpro_meta_one">August 3 to August 10, 2026</p>

              <h3 className="Dist_sailpro_title_one">
                Explora Journeys | EXPLORA II
              </h3>

              <p className="Dist_sailpro_desc_one">
                7-Night A Journey through Cycladic Charms & Culture-infused Coastal Allure
              </p>

              <p className="Dist_sailpro_route_one">
                Piraeus (Athens) → Paros → Rhodes → Corfu → Hvar → Rijeka → Fusina (Venice)
              </p>

              <p className="Dist_sailpro_text_one">
                Set sail from Athens through the dazzling Greek Isles before crossing into the Adriatic toward Croatia and Venice.
              </p>

              <p className="Dist_sailpro_ideal_one">
                Ideal for: Couples, luxury cruise lovers, Mediterranean enthusiasts.
              </p>

              <button className="Dist_sailpro_btn_one">
                Inquire About This Sailing
              </button>
            </div>
          </div>


          {/* ===== CARD 2 ===== */}
          <div className="Dist_sailpro_card_two">

            <div className="Dist_sailpro_imgwrap_two">
              <img src={SailImg2} alt="Explora Journey" />
            </div>

            <div className="Dist_sailpro_content_two">
              <p className="Dist_sailpro_meta_two">August 10 to August 17, 2026</p>

              <h3 className="Dist_sailpro_title_two">
                Explora Journeys | EXPLORA II
              </h3>

              <p className="Dist_sailpro_desc_two">
                7-Night A Journey from Venetian Elegance to Stunning Nature & Tranquil Harbour Hues
              </p>

              <p className="Dist_sailpro_route_two">
                Fusina (Venice) → Rovinj → Dubrovnik → Brindisi → Fiskardo → Syros → Piraeus (Athens)
              </p>

              <p className="Dist_sailpro_text_two">
                This Adriatic and Greek Isles voyage blends historic coastal cities and island charm.
              </p>

              <p className="Dist_sailpro_ideal_two">
                Ideal for: Sophisticated travelers, repeat luxury cruisers, modern luxury seekers.
              </p>

              <button className="Dist_sailpro_btn_two">
                Request Pricing and Availability
              </button>
            </div>
          </div>


          {/* ===== CARD 3 ===== */}
          <div className="Dist_sailpro_card_three">

            <div className="Dist_sailpro_imgwrap_three">
              <img src={SailImg1} alt="Antarctica Cruise" />
            </div>

            <div className="Dist_sailpro_content_three">
              <p className="Dist_sailpro_meta_three">November 19 to November 25, 2026</p>

              <h3 className="Dist_sailpro_title_three">
                Silversea | Silver Endeavour
              </h3>

              <p className="Dist_sailpro_desc_three">
                Antarctica Fly Cruise – King George Island Roundtrip
              </p>

              <p className="Dist_sailpro_route_three">
                King George Island → Antarctic Sound → Antarctic Peninsula → South Shetland Islands → King George Island
              </p>

              <p className="Dist_sailpro_text_three">
                Fly directly to Antarctica and explore the peninsula in ultra-luxury expedition style.
              </p>

              <p className="Dist_sailpro_ideal_three">
                Ideal for: Bucket list travelers, photographers, wildlife enthusiasts.
              </p>

              <button className="Dist_sailpro_btn_three">
                Learn More About Antarctica
              </button>
            </div>
          </div>


          {/* ===== CARD 4 ===== */}
          <div className="Dist_sailpro_card_four">

            <div className="Dist_sailpro_imgwrap_four">
              <img src={SailImg2} alt="Asia Cruise" />
            </div>

            <div className="Dist_sailpro_content_four">
              <p className="Dist_sailpro_meta_four">January 3 to January 17, 2027</p>

              <h3 className="Dist_sailpro_title_four">
                Silversea | Silver Muse
              </h3>

              <p className="Dist_sailpro_desc_four">
                Hong Kong to Singapore
              </p>

              <p className="Dist_sailpro_route_four">
                Hong Kong → Keelung → Manila → Palawan → Borneo → Singapore
              </p>

              <p className="Dist_sailpro_text_four">
                A rich Southeast Asia journey blending cities, islands, and culture.
              </p>

              <p className="Dist_sailpro_ideal_four">
                Ideal for: Asia lovers, repeat cruisers, warm-weather escapes.
              </p>

              <button className="Dist_sailpro_btn_four">
                Ask About This Sailing
              </button>
            </div>
          </div>


          {/* ===== CARD 5 ===== */}
          <div className="Dist_sailpro_card_five">

            <div className="Dist_sailpro_imgwrap_five">
              <img src={SailImg1} alt="Africa Cruise" />
            </div>

            <div className="Dist_sailpro_content_five">
              <p className="Dist_sailpro_meta_five">April 11 to April 30, 2027</p>

              <h3 className="Dist_sailpro_title_five">
                Silversea | Silver Dawn
              </h3>

              <p className="Dist_sailpro_desc_five">
                Cape Town to Dakar
              </p>

              <p className="Dist_sailpro_route_five">
                Cape Town → Namibia → Angola → Ghana → Dakar
              </p>

              <p className="Dist_sailpro_text_five">
                A rare Africa coastal journey with deep cultural and destination immersion.
              </p>

              <p className="Dist_sailpro_ideal_five">
                Ideal for: Experienced travelers and unique itinerary seekers.
              </p>

              <button className="Dist_sailpro_btn_five">
                Get Sailing Information
              </button>
            </div>
          </div>

          {/* ===== CARD 6 ===== */}
          <div className="Dist_sailpro_card_six">

            <div className="Dist_sailpro_imgwrap_six">
              <img src={SailImg2} alt="Tahiti Cruise" />
            </div>

            <div className="Dist_sailpro_content_six">

              <p className="Dist_sailpro_meta_six">
                July 8, 2027
              </p>

              <h3 className="Dist_sailpro_title_six">
                Windstar Cruises | Star Breeze
              </h3>

              <p className="Dist_sailpro_desc_six">
                Dreams of Tahiti Hosted Sailing
              </p>

              <p className="Dist_sailpro_route_six">
                Papeete → Moorea → Raiatea → Bora Bora → Huahine → Tahiti
              </p>

              <p className="Dist_sailpro_text_six">
                Experience the romance and beauty of French Polynesia aboard Star Breeze with relaxed luxury and stunning lagoons.
              </p>

              <p className="Dist_sailpro_ideal_six">
                Ideal for: Honeymooners, couples, Tahiti lovers, and warm-weather luxury seekers.
              </p>

              <button className="Dist_sailpro_btn_six">
                Request Windstar Details
              </button>

            </div>
          </div>
        </div>
      </section>



      <section className="Dist_past_section">
  <div className="Dist_past_container">

    <h2 className="Dist_past_heading">
      Past Hosted Sailings
    </h2>

    {/* CARD 1 */}
    <div className="Dist_past_card">
      <div className="Dist_past_imgwrap">
        <img src={SailImg1} alt="Greek Isles & Adriatic" />
      </div>

      <div className="Dist_past_content">
        <p className="meta">Aug 3–10, 2026</p>
        <h3>Greek Isles & Adriatic</h3>
        <p className="desc">Explora II</p>
        <p className="route">Mediterranean</p>
        <p>Nights: 7</p>
        <p>Starting From: $5,500 pp</p>
        <p className="ideal">Couples / First-Time Luxury Cruisers</p>

        <button className="btn">View Details</button>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="Dist_past_card">
      <div className="Dist_past_imgwrap">
        <img src={SailImg2} alt="Adriatic to Greece" />
      </div>

      <div className="Dist_past_content">
        <p className="meta">Aug 10–17, 2026</p>
        <h3>Adriatic to Greece</h3>
        <p className="desc">Explora II</p>
        <p className="route">Mediterranean</p>
        <p>Nights: 7</p>
        <p>Starting From: $5,200 pp</p>
        <p className="ideal">Mediterranean Repeat Travelers</p>

        <button className="btn">View Details</button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="Dist_past_card">
      <div className="Dist_past_imgwrap">
        <img src={SailImg1} alt="Antarctica Fly Cruise" />
      </div>

      <div className="Dist_past_content">
        <p className="meta">Nov 19–25, 2026</p>
        <h3>Antarctica Fly Cruise</h3>
        <p className="desc">Silver Endeavour</p>
        <p className="route">Antarctica</p>
        <p>Nights: 6</p>
        <p>Starting From: $24,500 pp</p>
        <p className="ideal">Bucket List Expedition Travelers</p>

        <button className="btn">View Details</button>
      </div>
    </div>

  </div>
</section>




      {/* WHY SAIL SECTION  */}
      <section className="Dist_whysail_section">
        <div className="Dist_whysail_container">

          <h2 className="Dist_whysail_heading">
            Why Sail with Angela Hughes
          </h2>

          <p className="Dist_whysail_intro">
            When you book a hosted sailing with Angela Hughes through Trips & Ships Luxury Travel, you are not simply reserving a cabin. You are gaining access to the expertise of one of the most recognized voices in luxury travel.
          </p>

          <div className="Dist_whysail_points">

            <div className="Dist_whysail_point_1">
              <Check size={16} />
              <p>Expert guidance before departure</p>
            </div>

            <div className="Dist_whysail_point_2">
              <Check size={16} />
              <p>Trusted cruise and destination insight</p>
            </div>

            <div className="Dist_whysail_point_3">
              <Check size={16} />
              <p>Elevated planning support</p>
            </div>

            <div className="Dist_whysail_point_4">
              <Check size={16} />
              <p>A personal connection to their travel advisor</p>
            </div>

            <div className="Dist_whysail_point_5">
              <Check size={16} />
              <p>A more thoughtful and curated travel experience</p>
            </div>

          </div>

        </div>
      </section>


      {/* BOOKING BENEFITS  */}
      <section className="Dist_booking_section">
        <div className="Dist_booking_container">

          <h2 className="Dist_booking_heading">
            Why Book a Distinctive Voyage Instead of Booking Direct?
          </h2>

          <p className="Dist_booking_intro">
            Booking a Distinctive Voyage through Angela Hughes and Trips & Ships Luxury Travel provides added value that typically is not available when booking directly with the cruise line.
          </p>

          <div className="Dist_booking_points">

            <div className="Dist_booking_point_1"><Check size={16} /><p>Complimentary Hosted Amenities</p></div>
            <div className="Dist_booking_point_2"><Check size={16} /><p>Private Cocktail Reception</p></div>
            <div className="Dist_booking_point_3"><Check size={16} /><p>Exclusive Shore Event</p></div>
            <div className="Dist_booking_point_4"><Check size={16} /><p>Concierge Planning Support</p></div>
            <div className="Dist_booking_point_5"><Check size={16} /><p>Expert Cruise Guidance</p></div>
            <div className="Dist_booking_point_6"><Check size={16} /><p>Personalized Service Before and After Travel</p></div>

          </div>

        </div>
      </section>


      {/* READY SECTION  */}
      <section className="Dist_ready_section">
        <div className="Dist_ready_container">

          <h2 className="Dist_ready_heading">
            Ready to Sail?
          </h2>

          <p className="Dist_ready_text">
            Hosted sailings often sell out well in advance. Early booking is strongly recommended to secure preferred suite categories, hosted group amenities, and the best available pricing.
          </p>

          <p className="Dist_ready_text2">
            If one of these voyages speaks to you, our team would love to help you explore the details.
          </p>

        </div>
      </section>


      {/* FORM  */}
      <section className="Dist_form_section">
        <div className="Dist_form_container">

          <h3 className="Dist_form_heading">Booking Inquiry</h3>

          <div className="Dist_form_grid">

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Sailing of Interest" />
            <input type="text" placeholder="Number of Travelers" />
            <input type="text" placeholder="Preferred Cabin Category" />

            <textarea placeholder="Additional Notes"></textarea>

          </div>

          <button className="Dist_form_btn">Submit Inquiry</button>

        </div>
      </section>


      {/* CONTACT */}
      <section className="Dist_contact_section">
        <div className="Dist_contact_container">

          <h4 className="Dist_contact_heading">
            Trips & Ships Luxury Travel
          </h4>

          <p>Website: www.tripsandships.com</p>
          <p>Email: sales@tripsandships.com</p>
          <p>Phone: +1 (603) 860-3274</p>

        </div>
      </section>


{/* ================= FAQ SECTION ================= */}
<section className="Dist_faq_section">
  <div className="Dist_faq_container">

    <h2 className="Dist_faq_heading">
      Frequently Asked Questions
    </h2>

    <div className="Dist_faq_list">
      {faqData.map((item, index) => (
        <div key={index} className="Dist_faq_item">

          <div
            className="Dist_faq_question"
            onClick={() => toggleFAQ(index)}
          >
            <h4>{item.q}</h4>
            {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
          </div>

          <div className={`Dist_faq_answer ${activeIndex === index ? "active" : ""}`}>
            <p>{item.a}</p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

    </>
  )
}

export default DistinctiveVoyageSailings