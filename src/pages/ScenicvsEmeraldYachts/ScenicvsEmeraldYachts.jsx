import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import { Plus, Minus, Medal } from "lucide-react";
import { useState, useEffect } from "react";
import "./ScenicvsEmeraldYachts.css";
import myImage from "../../assets/image.jpg";
import Emerald1 from "../../assets/FourthPage/Emerald1.webp";
import Emerald2 from "../../assets/FourthPage/Emerald2.webp";
import Emerald4 from "../../assets/FourthPage/Emerald4.webp";
import Emerald5 from "../../assets/FourthPage/Emerald5.webp";
import Emerald6 from "../../assets/FourthPage/Emerald6.webp";
import Scenic1 from "../../assets/FourthPage/Scenic1.webp";
import Scenic2 from "../../assets/FourthPage/Scenic2.webp";
import Scenic3 from "../../assets/FourthPage/Scenic3.webp";
import Scenic5 from "../../assets/FourthPage/Scenic5.webp";
import Scenic6 from "../../assets/FourthPage/Scenic6.webp";
import Scenicdiff from "../../assets/FourthPage/Scenicdiff.webp";
import Emeralddiff from "../../assets/FourthPage/Emeralddiff.webp";
import FourthPage1 from "../../assets/FourthPage/FourthPage1.webp";
import FourthPage2 from "../../assets/FourthPage/FourthPage2.webp";
import FourthPage3 from "../../assets/FourthPage/FourthPage3.webp";

function YachtsComparison() {
  const [readMore, setReadMore] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [current, setCurrent] = useState(0);

  const images = [FourthPage2, FourthPage1, FourthPage3];

  useEffect(() => {
    const heroSlider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(heroSlider);
  }, [images.length]);

  const faqData = [
    {
      question: "Which is better, Scenic or Emerald yachts?",
      answer:
        "Scenic is ultra-luxury with a fully all-inclusive model, while Emerald offers a more accessible yacht experience. The better choice depends on your expectations and travel style.",
    },
    {
      question: "How much more expensive is Scenic compared to Emerald?",
      answer:
        "Scenic is typically 40 to 100 percent more expensive depending on itinerary and suite level due to its higher level of inclusions and service.",
    },
    {
      question: "Is Scenic worth the higher price?",
      answer:
        "For travelers seeking a seamless, high-end experience, Scenic often justifies the higher investment.",
    },
    {
      question: "Are Scenic and Emerald owned by the same company?",
      answer:
        "Yes. Both brands operate under the same parent company but are positioned in different tiers.",
    },
    {
      question: "Which is better for first-time yacht travelers?",
      answer:
        "Emerald is often a strong entry point due to its approachable pricing and relaxed environment.",
    },
    {
      question: "Do Scenic and Emerald visit the same destinations?",
      answer:
        "Yes, both operate in similar regions such as the Mediterranean and Caribbean.",
    },
    {
      question: "Is Scenic all-inclusive compared to Emerald?",
      answer:
        "Scenic emphasizes a fully all-inclusive structure, while Emerald includes many elements but is less comprehensive.",
    },
    {
      question: "Which yacht has better service?",
      answer:
        "Both offer strong service, though Scenic is positioned at a higher level.",
    },
    {
      question: "What type of traveler chooses Emerald?",
      answer:
        "Travelers seeking value, relaxation, and a boutique yacht experience.",
    },
    {
      question: "What type of traveler chooses Scenic?",
      answer:
        "Travelers seeking a structured, ultra-luxury, all-inclusive experience.",
    },
    {
      question: "Should I use a travel advisor?",
      answer:
        "Yes. Choosing the right yacht requires aligning expectations with experience.",
    },
    {
      question: "How do I decide between Scenic and Emerald?",
      answer:
        "The decision depends on whether you prioritize a high-end all-inclusive experience or a relaxed, value-driven yacht journey.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };



  return (
    <div>
      <Helmet>
        <title>
          Scenic vs Emerald Yachts: Which Experience Is Right for You
        </title>
        <meta
          name="description"
          content="Compare Scenic vs Emerald yacht cruises. Pricing, inclusions, experience, and expert recommendations from Angela Hughes to help you choose the right luxury yacht."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#webpage",
                url: "https://www.tripsandships.com/scenic-vs-emerald-yachts",
                name: "Scenic vs Emerald Yachts: Which Experience Is Right for You",
                headline:
                  "Scenic vs Emerald Yachts: Which Experience Is Right for You",
                description:
                  "Compare Scenic vs Emerald yacht cruises. Pricing, inclusions, experience, and expert recommendations from Angela Hughes to help you choose the right luxury yacht.",
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.tripsandships.com/#website" },
                about: [
                  {
                    "@type": "Organization",
                    name: "Scenic Luxury Cruises & Tours",
                  },
                  { "@type": "Organization", name: "Emerald Cruises" },
                  { "@type": "Thing", name: "Luxury yacht cruises" },
                ],
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#primaryimage",
                  contentUrl:
                    "https://www.tripsandships.com/path-to-yacht-comparison-image.jpg",
                },
                breadcrumb: {
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#breadcrumb",
                },
                author: {
                  "@id": "https://www.tripsandships.com/#angela-hughes",
                },
                publisher: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
                mainEntity: {
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#faq",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
                inLanguage: "en-US",
                publisher: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
              },
              {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#organization",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com/",
                logo: {
                  "@type": "ImageObject",
                  "@id": "https://www.tripsandships.com/#logo",
                  contentUrl: "https://www.tripsandships.com/path-to-logo.png",
                },
                description:
                  "Luxury travel agency specializing in yacht cruises, expedition travel, and high-end global experiences.",
                areaServed: "Worldwide",
                sameAs: [
                  "https://www.luxuryhostagency.com/",
                  "https://www.luxurytraveluniversity.com/",
                  "https://www.travelleaders.com/agent/17255",
                ],
              },
              {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                name: "Angela Hughes",
                jobTitle: "CEO",
                worksFor: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
                description:
                  "Angela Hughes is the CEO of Trips & Ships Luxury Travel with more than 40 years in the travel industry and travel experience across 121 countries and territories. She specializes in luxury travel, yacht cruises, and expedition planning.",
                sameAs: ["https://www.travelleaders.com/agent/17255"],
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Yacht Cruises",
                    item: "https://www.tripsandships.com/yacht-cruises",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic vs Emerald Yachts",
                    item: "https://www.tripsandships.com/scenic-vs-emerald-yachts",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which is better, Scenic or Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic is positioned as an ultra-luxury, fully all-inclusive yacht experience, while Emerald offers a more accessible luxury yacht experience. The better choice depends on your expectations, budget, and preferred travel style.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the main difference between Scenic and Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The main difference is positioning. Scenic delivers a fully all-inclusive, ultra-luxury experience, while Emerald provides a boutique yacht experience at a lower price point with fewer inclusions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much more expensive is Scenic compared to Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic is typically 40 to 100 percent more expensive than Emerald depending on itinerary and suite category, reflecting its higher level of inclusions and service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenic worth the higher price?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For travelers seeking a seamless, all-inclusive, high-end experience, Scenic often justifies the higher investment. The value depends on how much you prioritize inclusions and service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are Scenic and Emerald owned by the same company?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Scenic Luxury Cruises & Tours and Emerald Cruises operate under the same parent company but are positioned in different segments of the luxury yacht market.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which is better for first-time yacht travelers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald is often a strong entry point for first-time yacht travelers due to its approachable pricing and relaxed atmosphere, while Scenic is better suited for those seeking a higher-end experience.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do Scenic and Emerald yachts visit the same destinations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Both brands operate in similar regions such as the Mediterranean and Caribbean, though specific itineraries may vary.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenic all-inclusive compared to Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic emphasizes a fully all-inclusive structure, while Emerald includes many core elements but may not be as comprehensive depending on the itinerary.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which yacht has better service, Scenic or Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Both offer strong service, but Scenic is positioned at a higher luxury tier with a more structured and elevated service experience.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What type of traveler chooses Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald appeals to travelers who want a yacht experience with strong value, a relaxed atmosphere, and fewer formalities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What type of traveler chooses Scenic yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic attracts travelers seeking a high-end, fully inclusive, and design-forward yacht experience with minimal friction during the journey.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I use a travel advisor to choose between Scenic and Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. A travel advisor helps match your expectations with the right yacht experience and ensures your trip is structured correctly from the beginning.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
        {/* Preload first hero image for better performance */}
        <link rel="preload" as="image" href={images[0]} />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="Yachts_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Yachts_hero_bg ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Yachts_hero_overlay"></div>

        <div className="Yachts_hero_content">
          <h1>Scenic vs Emerald Yachts</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p className="Yachts_hero_p">
            Choosing the right luxury yacht experience
          </p>

          <p>
            For travelers considering a yacht cruise, the decision often comes
            down to choosing between Scenic Luxury Cruises & Tours and Emerald
            Cruises.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Both brands operate under the same ownership and visit similar
                destinations.
              </p>

              <p>The difference is not where they go.</p>
              <p>It is how the experience is delivered.</p>
              <p>
                The right decision ensures your expectations align with the
                journey from the beginning.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Yachts_readmore_wrapper">
            <button
              className="Yachts_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="Yachts_hero_buttons">
            <button className="Yachts_primary_btn">
              Get a Personalized Yacht Recommendation
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="Yachts_compare_section">
        <div className="Yachts_compare_inner">
          <h2>Scenic vs Emerald at a Glance</h2>

          <div className="Yachts_compare_table_wrapper">
            <table className="Yachts_compare_table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scenic</th>
                  <th>Emerald</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positioning</td>
                  <td>Ultra-luxury</td>
                  <td>Luxury</td>
                </tr>
                <tr>
                  <td>Pricing</td>
                  <td>Higher, all-inclusive</td>
                  <td>Lower, value-driven</td>
                </tr>
                <tr>
                  <td>Ship Style</td>
                  <td>Discovery yacht</td>
                  <td>Boutique yacht</td>
                </tr>
                <tr>
                  <td>Experience</td>
                  <td>Structured, elevated</td>
                  <td>Relaxed, social</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>High-end seamless travel</td>
                  <td>Approachable yacht experience</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3 Scenic vs Emerald Price Difference */}

      <section className="Yachts_price_section">
        <div className="Yachts_price_inner">
          <h2>Scenic vs Emerald Price Difference</h2>

          <p className="Yachts_price_subtext">
            Typical pricing reflects their positioning:
          </p>

          {/* CARDS */}
          <div className="Yachts_price_main_grid">
            {/* BRAND PRICING CARDS */}
            <div className="Yachts_price_premium_card emerald">
              <div className="Yachts_price_badge">Value Luxury</div>
              <div className="Yachts_price_icon_box">
                <i className="fas fa-anchor"></i>
              </div>
              <h3>Emerald Yachts</h3>
              <p className="Yachts_price_amount">Approximately <br /> $6,000 – $12,000</p>
              <p className="Yachts_price_unit">per person</p>
            </div>

            <div className="Yachts_price_premium_card scenic">
              <div className="Yachts_price_badge">Ultra-Luxury</div>
              <div className="Yachts_price_icon_box">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Scenic Yachts</h3>
              <p className="Yachts_price_amount">Approximately $10,000 – $25,000+</p>
              <p className="Yachts_price_unit">per person</p>
            </div>
          </div>

          <div className="Yachts_price_insights_box">
            <div className="Yachts_price_insight_item">
              <div className="Yachts_price_insight_icon">
                <i className="fas fa-percentage"></i>
              </div>
              <p>
                Scenic is typically 40 to 100 percent higher depending on
                itinerary and suite level.
              </p>
            </div>

            <div className="Yachts_price_insight_item">
              <div className="Yachts_price_insight_icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <p>
                The difference is driven by inclusions, service level, and
                overall experience structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}

      <section className="Yachts_difference_section">
        <div className="Yachts_difference_inner">
          <h2>The Biggest Differences Between <br /> Scenic and Emerald</h2>

          <div className="Yachts_diff_new_grid">
            {/* SCENIC CARD */}
            <div className="Yachts_diff_brand_card">
              <div className="Yachts_diff_img_box">
                <img src={Scenicdiff} alt="Scenic Luxury Yacht" />
                <div className="Yachts_diff_badge">Scenic</div>
              </div>
              <div className="Yachts_diff_content">
                <div className="Yachts_diff_point">
                  <i className="fas fa-check"></i>
                  <p>
                    Scenic delivers a fully all-inclusive, ultra-luxury
                    experience
                  </p>
                </div>
                <div className="Yachts_diff_point">
                  <i className="fas fa-check"></i>
                  <p>Scenic emphasizes seamless service and structure</p>
                </div>
              </div>
            </div>

            {/* EMERALD CARD */}
            <div className="Yachts_diff_brand_card">
              <div className="Yachts_diff_img_box">
                <img src={Emeralddiff} alt="Emerald Yacht" />
                <div className="Yachts_diff_badge">Emerald</div>
              </div>
              <div className="Yachts_diff_content">
                <div className="Yachts_diff_point">
                  <i className="fas fa-check"></i>
                  <p>
                    Emerald offers a more accessible luxury yacht experience
                  </p>
                </div>
                <div className="Yachts_diff_point">
                  <i className="fas fa-check"></i>
                  <p>Emerald focuses on relaxed, easygoing travel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Yachts_diff_footer">
            <p>The difference is not access. It is experience level.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="Yachts_feel_section">
        <div className="Yachts_feel_inner">
          <h2>How the Experience Feels Onboard?</h2>

          <p>Scenic feels structured, elevated, and seamless.</p>
          <p>Emerald feels relaxed, social, and easy.</p>
          <p>The difference is not just in features.</p>
          <p>It is in how you experience each day onboard.</p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="Yachts_ship_section">
        <div className="Yachts_ship_inner">
          <h2>Ship Design and Onboard Experience</h2>

          <p>
            Scenic yachts are designed as ultra-luxury discovery vessels with
            expansive suites, multiple dining venues, and a design-forward
            environment.
          </p>
          <p>
            Emerald yachts are smaller and more intimate, offering a boutique
            experience that prioritizes simplicity and comfort.
          </p>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="Yachts_inclusion_section">
        <div className="Yachts_inclusion_inner">
          <h2>What Is Included?</h2>

          <p>
            Scenic operates a fully all-inclusive model designed to eliminate
            additional costs and simplify the experience.
          </p>
          <p>
            Emerald includes many core elements but may offer a more flexible
            structure depending on itinerary.
          </p>
        </div>
      </section>

      {/* SECTION 8: Best Choice Based on Travel Style */}
      <section className="Yachts_best_section">
        <div className="Yachts_best_inner">
          <h2>Best Choice Based on Travel Style</h2>

          {/* SCENIC CHOICE (Text Left, Video Right) */}
          <div className="Yachts_choice_row">
            <div className="Yachts_choice_content">
              <h3>Choose Scenic for:</h3>
              <p>Luxury anniversaries or milestone trips</p>
              <p>Travelers who value structure and inclusions</p>
              <p>High-end, design-forward experiences</p>
            </div>
            <div className="Yachts_choice_video">
              <video autoPlay muted loop playsInline controls>
                <source
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AHDoC69hOnqPpbFkjXvNTuc/Scenic/Scenic%20Ocean/Videos/Scenic%20-%20Yacht%20-%2015%20sec%20-%20CBS.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=ptfv114l&raw=1"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* EMERALD CHOICE (Video Left, Text Right) */}
          <div className="Yachts_choice_row Yachts_choice_reverse">
            <div className="Yachts_choice_content">
              <h3>Choose Emerald for:</h3>
              <p>First-time yacht travelers seeking approachable luxury</p>
              <p>Relaxed, social travel style with boutique vibes</p>
              <p>Strong value within the premium yacht cruising segment</p>
              <p>
                Ideal for warm-weather coastal exploration and docking in small
                ports
              </p>
            </div>
            <div className="Yachts_choice_video">
              <video autoPlay muted loop playsInline controls>
                <source
                  src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AIKUdjJ96iUVyUnmWwwHKpk/Emerald%20Cruises/Yacht%20Cruising/Videos/Emerald%20Cruises%20Luxury%20Yacht%20Cruising.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=w90egx60&raw=1"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="Yachts_notfor_section">
        <div className="Yachts_notfor_inner">
          <h2>Who Each Option Is Not For?</h2>

          <p>Scenic may not be ideal for:</p>
          <p>Travelers focused primarily on lower pricing</p>
          <p>Those who do not value all-inclusive structure</p>

          <p>Emerald may not be ideal for:</p>
          <p>Travelers expecting ultra-luxury service</p>
          <p>Those wanting a highly structured experience</p>
        </div>
      </section>

      {/* SECTION 10 */}
      <section className="Yachts_mistake_section">
        <div className="Yachts_mistake_inner">
          <h2>Common Mistakes When Choosing</h2>

          <p>Choosing based only on price</p>
          <p>Assuming both experiences are identical</p>
          <p>Not aligning the choice with personal expectations</p>
        </div>
      </section>

      {/* ===== SECTION: EMERALD VS SCENIC — Side-by-Side Comparison with Sticky Header ===== */}
      <section className="Yachts_section Yachts_bg-white Yachts_comparison-section">
        <div className="Yachts_inner-full">
          <div className="Yachts_sticky-wrapper">
            {/* Left Column: Sticky Side-Heading */}
            <aside className="Yachts_side-sticky">
              <div className="Yachts_sticky-element">
                <span className="Yachts_section-number">COMPARISON</span>
                <h2 className="Yachts_h2">
                  See the Difference: <br />
                  Emerald vs Scenic
                </h2>
                <div className="Yachts_navy-divider-left"></div>
                <p className="Yachts_p Yachts_sticky-intro">
                  Two distinct approaches to luxury cruising. See the difference
                  between relaxed coastal elegance and expedition discovery.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Comparison Columns */}
            <main className="Yachts_content-column">
              <div className="Yachts_comparison-dual-grid">
                {/* Column 1: Emerald Yachts */}
                <div className="Yachts_brand-column">
                  <div className="Yachts_brand-header-box Yachts_bg-soft-blue">
                    <h3 className="Yachts_brand-name">Emerald Yachts</h3>
                    <p className="Yachts_brand-tagline">Relaxed Coastal Luxury</p>
                  </div>

                  <div className="Yachts_comparison-gallery">
                    <div className="Yachts_gallery-item Yachts_feat">
                      <img src={Emerald1} alt="Emerald Yachts luxury suite" />
                      <div className="Yachts_img-overlay">
                        <span>Luxury Suites</span>
                      </div>
                    </div>
                    <div className="Yachts_gallery-group">
                      <div className="Yachts_gallery-item">
                        <img src={Emerald2} alt="Emerald Yachts pool deck" />
                        <div className="Yachts_img-overlay">
                          <span>Pool Deck</span>
                        </div>
                      </div>
                      <div className="Yachts_gallery-item">
                        <img src={Emerald6} alt="Emerald Yachts coastal" />
                        <div className="Yachts_img-overlay">
                          <span>Coastal Journeys</span>
                        </div>
                      </div>
                    </div>
                    <div className="Yachts_gallery-item">
                      <img src={Emerald4} alt="Emerald Yachts lounge" />
                      <div className="Yachts_img-overlay">
                        <span>Elegant Lounges</span>
                      </div>
                    </div>
                    <div className="Yachts_gallery-group">
                      <div className="Yachts_gallery-item">
                        <img src={Emerald5} alt="Emerald Yachts view" />
                        <div className="Yachts_img-overlay">
                          <span>Ocean Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Scenic Eclipse */}
                <div className="Yachts_brand-column">
                  <div className="Yachts_brand-header-box Yachts_bg-navy">
                    <h3 className="Yachts_brand-name Yachts_text-white">
                      Scenic Eclipse
                    </h3>
                    <p className="Yachts_brand-tagline Yachts_text-white">
                      Expedition Discovery
                    </p>
                  </div>

                  <div className="Yachts_comparison-gallery">
                    <div className="Yachts_gallery-item Yachts_feat">
                      <img
                        src={Scenic1}
                        alt="Scenic Eclipse expedition yacht"
                      />
                      <div className="Yachts_img-overlay">
                        <span>Expedition Yacht</span>
                      </div>
                    </div>
                    <div className="Yachts_gallery-group">
                      <div className="Yachts_gallery-item">
                        <img
                          src={Scenic2}
                          alt="Scenic Eclipse discovery lounge"
                        />
                        <div className="Yachts_img-overlay">
                          <span>Discovery Lounge</span>
                        </div>
                      </div>
                      <div className="Yachts_gallery-item">
                        <img
                          src={Scenic3}
                          alt="Scenic Eclipse observation deck"
                        />
                        <div className="Yachts_img-overlay">
                          <span>Observation Deck</span>
                        </div>
                      </div>
                    </div>
                    <div className="Yachts_gallery-item">
                      <img src={Scenic6} alt="Scenic Eclipse suite interior" />
                      <div className="Yachts_img-overlay">
                        <span>Premium Suites</span>
                      </div>
                    </div>
                    <div className="Yachts_gallery-group">
                      <div className="Yachts_gallery-item">
                        <img src={Scenic5} alt="Scenic Eclipse polar" />
                        <div className="Yachts_img-overlay">
                          <span>Polar Expeditions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Comparison Note */}
              <div className="Yachts_comparison-footer">
                <div className="Yachts_editorial-note-white">
                  <p className="Yachts_p">
                    <strong>Key Difference:</strong> Emerald Yachts focus on
                    warm-weather coastal cruising with a relaxed, social
                    atmosphere, while Scenic Eclipse specializes in expedition
                    travel to remote destinations like Antarctica and the
                    Arctic.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* SECTION 11 */}
      {/* <section className="Yachts_expert_section">
        <div className="Yachts_expert_inner">
          <h2>Expert Insight from Angela Hughes</h2>

          <p>
            We work with both Scenic and Emerald regularly and guide clients
            through this exact decision based on how they want to travel, not
            just price.
          </p>
          <p>The goal is alignment.</p>
          <p>The difference is not which brand is better.</p>
          <p>It is which experience fits you.</p>
        </div>
      </section> */}

      {/* SECTION 12 */}
      <section className="Yachts_recommend_section">
        <div className="Yachts_recommend_inner">
          <h2>Our Recommendation</h2>

          <p>
            For travelers seeking a fully structured, ultra-luxury experience
            with seamless inclusions, Scenic is typically the stronger fit.
          </p>
          <p>
            For travelers looking for a relaxed yacht experience with strong
            value, Emerald is an excellent option.
          </p>
        </div>
      </section>

      {/* SECTION 13 */}
      {/* <section className="Yachts_next_section">
        <div className="Yachts_next_inner">
          <h2>What Happens Next?</h2>

          <p>Consultation to define travel style</p>
          <p>Personalized yacht recommendation</p>
          <p>Booking and full planning</p>
        </div>
      </section> */}

      {/* COMBINED SECTION 14 & 15 */}
      <section className="Yachts_author_section">
        <div className="Yachts_author_inner Yachts_author_split">
          {/* LEFT CONTENT */}
          <div className="Yachts_author_content Yachts_author_content_new">
            <h2>Why Work with Angela Hughes and Trips & Ships Luxury Travel?</h2>

            <p className="Yachts_author_desc">
              Angela Hughes has over four decades in the travel industry and has
              traveled to 121 countries and territories.
            </p>
            <p className="Yachts_author_desc">
              She leads a team of more than 140 luxury travel advisors and
              specializes in matching clients to the right travel experience.
            </p>

            {/* First Box: Benefits */}
            <div className="Yachts_author_box">
              <p className="Yachts_benefit_title">Clients benefit from:</p>
              <div className="Yachts_benefit_list">
                <div className="Yachts_benefit_item">
                  <i className="fas fa-check-circle"></i> Clear positioning
                  across yacht brands
                </div>
                <div className="Yachts_benefit_item">
                  <i className="fas fa-check-circle"></i> Access to preferred
                  inventory
                </div>
                <div className="Yachts_benefit_item">
                  <i className="fas fa-check-circle"></i> Full itinerary
                  coordination
                </div>
                <div className="Yachts_benefit_item">
                  <i className="fas fa-check-circle"></i> Ongoing support
                </div>
              </div>
            </div>

            {/* Second Box: Planned and Curated */}
            <div className="Yachts_author_box">
              <h3 className="Yachts_box_title">
                Planned and Curated by Angela Hughes
              </h3>
              <p className="Yachts_box_subtitle">
                CEO, TRIPS & SHIPS LUXURY TRAVEL
              </p>

              <div className="Yachts_box_grid">
                <div className="Yachts_box_grid_item">
                  <i className="fas fa-award"></i> 40+ years of experience
                </div>
                <div className="Yachts_box_grid_item">
                  <i className="fas fa-globe"></i> 121 countries traveled
                </div>
                <div className="Yachts_box_grid_item">
                  <Medal size={20} color="#2f4a6d" /> Luxury Travel Influencer
                  of the Year (2024)
                </div>
                <div className="Yachts_box_grid_item">
                  <i className="fas fa-crown"></i> Most Influential Women in
                  Travel (2026)
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="Yachts_author_image">
            <img src={myImage} alt="Yacht Experience" />
          </div>
        </div>
      </section>

      {/* VIDEO PRE FAQ SECTION */}
      <section className="Yachts_video_section">
        <div className="Yachts_video_inner">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/B90qoiaHDaE?si=yeOL4rhI-GjJ8lKt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="Scenic-faq-section">
        <div className="Scenic-faq-inner">
          <h2>Frequently Asked Questions <br /> About Scenic vs Emerald Yachts</h2>

          <div className="Scenic-faq-accordion">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`Scenic-faq-item ${activeFaq === index ? "Scenic-active" : ""
                  }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="Scenic-faq-question">
                  <span>{faq.question}</span>
                  <span className="Scenic-faq-icon">
                    {activeFaq === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </div>

                <div className="Scenic-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 17 */}
      <section className="Yachts_cta_section">
        <div className="Yachts_cta_inner">
          <h2>Choose the Right Yacht Experience</h2>

          <p>The difference between Scenic and Emerald is not just price.</p>
          <p>It is how you want to experience the journey.</p>
          <p>
            Yacht inventory is limited and popular sailings often sell out in
            advance.
          </p>
          <button className="Yachts_primary_btn">
            Get a Personalized Yacht Recommendation
          </button>

          <button className="Yachts_secondary_btn">
            Explore Scenic Yacht Cruises
          </button>
        </div>
      </section>
    </div>
  );
}

export default YachtsComparison;
