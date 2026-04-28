import { useState, useEffect } from "react";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Shield,
  Quote,
  AlertTriangle,
} from "lucide-react";
import "./AzamaravsVikingOcean.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/AzamaravsVikingOcean/hero1.webp";
import HeroImage2 from "../../assets/AzamaravsVikingOcean/hero2.webp";
import HeroImage3 from "../../assets/AzamaravsVikingOcean/hero3.webp";
import CTAImage from "../../assets/AzamaravsVikingOcean/cta.webp";
import ImageGallery1 from "../../assets/AzamaravsVikingOcean/gallery1.webp";
import ImageGallery2 from "../../assets/AzamaravsVikingOcean/gallery2.webp";
import ImageGallery3 from "../../assets/AzamaravsVikingOcean/gallery3.webp";
import ImageGallery4 from "../../assets/AzamaravsVikingOcean/gallery4.webp";
import AzamaraImage from "../../assets/AzamaravsVikingOcean/azamara.webp";
import VikingImage from "../../assets/AzamaravsVikingOcean/viking.webp";
import onboard1 from "../../assets/AzamaravsVikingOcean/onboard1.webp";
import onboard2 from "../../assets/AzamaravsVikingOcean/onboard2.webp";
import ChoseAzamara from "../../assets/AzamaravsVikingOcean/ChoseAzamara.webp";
import ChoseViking from "../../assets/AzamaravsVikingOcean/ChoseViking.webp";
import { Helmet } from "react-helmet-async";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is better, Azamara or Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your travel style. Azamara is better for destination immersion and flexibility, while Viking Ocean Cruises is better for structure and inclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Azamara more luxurious than Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They are positioned similarly, but Viking feels more modern and inclusive, while Azamara focuses more on immersive experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking cruises more expensive than Azamara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically yes, but Viking includes more in the base fare, which can balance overall value.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has better itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara generally offers more immersive itineraries with longer port stays and overnight visits.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking include excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Viking typically includes one shore excursion per port.",
          },
        },
        {
          "@type": "Question",
          name: "Does Azamara include excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Azamara excursions are additional, although some cultural experiences may be included.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean Cruises is often better for first-time cruisers due to its structured and inclusive experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has smaller ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara ships are slightly smaller, offering a more intimate onboard experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Azamara more relaxed than Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Azamara has a more flexible and casual onboard atmosphere compared to Viking.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on both cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both include some beverages. Viking includes beer and wine with meals, while Azamara includes select beverages.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better for cultural travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both cater to cultural travelers, but Azamara's longer port stays and overnight experiences allow more independence.",
          },
        },
        {
          "@type": "Question",
          name: "Are there formal nights on Azamara or Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, neither cruise line has formal nights.",
          },
        },
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Which is better, Azamara or Viking Ocean Cruises",
      a: "It depends on your travel style. Azamara is better for destination immersion and flexibility, while Viking Ocean Cruises is better for structure and inclusions.",
    },
    {
      q: "Is Azamara more luxurious than Viking Ocean Cruises",
      a: "They are similar, with Viking feeling more modern and Azamara more experiential. Both operate in the upper premium to luxury space.",
    },
    {
      q: "Are Viking cruises more expensive",
      a: "Typically yes, but they include more upfront. The better value depends on how you travel.",
    },
    {
      q: "Which has better itineraries",
      a: "Azamara offers more immersive itineraries with more overnight stays, late departures, and access to smaller ports.",
    },
    {
      q: "Does Viking include excursions",
      a: "Yes, Viking typically includes one shore excursion per port.",
    },
    {
      q: "Does Azamara include excursions",
      a: "Most Azamara excursions are additional, although some cultural experiences may be included.",
    },
    {
      q: "Which is better for first-time luxury cruisers",
      a: "Viking is often the better fit for first-time luxury cruisers because the structure and inclusions make the experience easier and more seamless.",
    },
    {
      q: "Which has smaller ships",
      a: "Azamara ships are slightly smaller at around 700 guests, offering a more intimate onboard experience compared to Viking at around 900 guests.",
    },
    {
      q: "Is Azamara more relaxed",
      a: "Yes, Azamara has a more relaxed and boutique onboard atmosphere compared to Viking's more refined and structured environment.",
    },
    {
      q: "Are drinks included on both cruise lines",
      a: "Both include some beverages. Viking includes beer and wine with meals, while Azamara includes select beverages.",
    },
    {
      q: "Which is better for cultural travelers",
      a: "Both cater to cultural travelers, but Azamara allows more independence with longer time in port and overnight stays.",
    },
    {
      q: "Are there formal nights",
      a: "No, neither Azamara nor Viking Ocean Cruises has formal nights.",
    },
  ];

  return (
    <div className="AzaVik-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`AzaVik-faq-item${open === i ? " AzaVik-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="AzaVik-faq-q">
            <span>{item.q}</span>
            <span className="AzaVik-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="AzaVik-faq-a">
              <div className="AzaVik-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const AzamaraVSVikingCruise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="AzaVik-page-wrapper">
      <Helmet>
        <title>
          Azamara vs Viking Ocean Cruises: Which Small Ship Cruise Is Better?
        </title>
        <meta
          name="title"
          content="Azamara vs Viking Ocean Cruises: Which Small Ship Cruise Is Better?"
        />
        <meta
          name="description"
          content="Compare Azamara vs Viking Ocean Cruises. Ships, pricing, itineraries, inclusions, and expert insight on which cruise line is best for your travel style."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="AzaVik-hero-section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`AzaVik-hero-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="AzaVik-hero-overlay"></div>
        <div className="AzaVik-hero-content">
          <h1 className="AzaVik-hero-h1">
            Azamara vs Viking Ocean Cruises: Which Small Ship Cruise Is Better?
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="AzaVik-section AzaVik-bg-soft" id="AzaVik-overview">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              Azamara vs Viking Ocean Cruises: Quick Answer
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-intro-wrapper">
            <p className="AzaVik-intro-text AzaVik-intro-spacing">
              If you are deciding between Azamara and Viking Ocean Cruises, the
              right choice comes down to how you like to travel.
            </p>

            <ul className="AzaVik-intro-list">
              <li className="AzaVik-intro-card">
                <span className="AzaVik-intro-text-large">
                  <strong className="AzaVik-strong">Choose Azamara</strong> if
                  you want deeper destination immersion, longer stays in port,
                  and more flexibility
                </span>
              </li>

              <li className="AzaVik-intro-card">
                <span className="AzaVik-intro-text-large">
                  <strong className="AzaVik-strong">
                    Choose Viking Ocean Cruises
                  </strong>{" "}
                  if you prefer a structured, modern, and more inclusive
                  experience
                </span>
              </li>
            </ul>

            <p className="AzaVik-intro-text">
              Both are excellent—but they deliver very different experiences.
            </p>
          </div>
        </div>
      </section>

      {/* IS AZAMARA BETTER */}
      <section className="AzaVik-better-comparison-section">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              Is Azamara Better Than Viking Ocean Cruises?
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-better-grid">
            <div className="AzaVik-better-card azamara">
              <h3 className="AzaVik-better-title">Azamara is better for</h3>
              <p className="AzaVik-better-text">
                Travelers who prioritize time in port, flexibility, and
                independent exploration.
              </p>
            </div>

            <div className="AzaVik-better-card viking">
              <h3 className="AzaVik-better-title">Viking is better for</h3>
              <p className="AzaVik-better-text">
                Travelers who want ease, structure, and a more inclusive
                experience with less planning.
              </p>
            </div>
          </div>

          <div className="AzaVik-better-summary">
            <p className="AzaVik-summary-text-main">
              The better cruise line is the one that aligns with how you like to
              travel.
            </p>
          </div>
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <section className="AzaVik-section AzaVik-bg-soft" id="AzaVik-fleet">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Which Cruise Line Is More Luxurious?</h2>
            <div className="AzaVik-accent-line"></div>
            <p className="AzaVik-body-text" style={{ marginTop: "20px" }}>
              Both operate in the upper premium to luxury space, but luxury here
              is defined differently.
            </p>
          </div>
          <div className="AzaVik-fleet-grid">
            <div className="AzaVik-fleet-card">
              <div className="AzaVik-fleet-image">
                <img src={AzamaraImage} alt="Azamara Cruise Ship" />
              </div>
              <div className="AzaVik-fleet-content">
                <h3 className="AzaVik-fleet-title">Azamara</h3>
                <p className="AzaVik-fleet-desc">
                  Azamara feels more intimate and experience-driven. It is the
                  better fit for travelers who define luxury as being{" "}
                  <strong>immersive and flexible</strong>.
                </p>
              </div>
            </div>

            <div className="AzaVik-fleet-card">
              <div className="AzaVik-fleet-image">
                <img src={VikingImage} alt="Viking Ocean Cruises Ship" />
              </div>
              <div className="AzaVik-fleet-content">
                <h3 className="AzaVik-fleet-title">Viking Ocean Cruises</h3>
                <p className="AzaVik-fleet-desc">
                  Viking feels more modern, polished, and inclusive. It is the
                  better fit for travelers who define luxury as being{" "}
                  <strong>refined and seamless</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY DIFFERENCES TABLE */}
      <section
        className="AzaVik-section AzaVik-bg-white"
        id="AzaVik-comparison"
      >
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              Key Differences Between Azamara and Viking Ocean Cruises
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-table-scroll">
            <table className="AzaVik-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Azamara</th>
                  <th>Viking Ocean Cruises</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ship Size</td>
                  <td>Small (700 guests)</td>
                  <td>Small to mid-size (900 guests)</td>
                </tr>
                <tr>
                  <td>Atmosphere</td>
                  <td>Relaxed, boutique</td>
                  <td>Modern, refined</td>
                </tr>
                <tr>
                  <td>Destination Focus</td>
                  <td>Very high</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Overnight Ports</td>
                  <td>Frequent</td>
                  <td>Occasional</td>
                </tr>
                <tr>
                  <td>Inclusions</td>
                  <td>Partial</td>
                  <td>More inclusive</td>
                </tr>
                <tr>
                  <td>Excursions</td>
                  <td>Mostly additional</td>
                  <td>One included per port</td>
                </tr>
                <tr>
                  <td>Price Range</td>
                  <td>Moderate</td>
                  <td>Upper moderate</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Cultural immersion</td>
                  <td>Structured luxury</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT MOST PEOPLE GET WRONG */}
      <section className="AzaVik-misconception-modern-section">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              What Most People Get Wrong When Comparing These Cruise Lines
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-misconception-grid">
            <div className="AzaVik-misconception-banner">
              <div className="AzaVik-banner-icon-wrap">
                <AlertTriangle size={28} />
              </div>
              <p className="AzaVik-banner-text-main">
                Most travelers compare Azamara and Viking based on price and
                inclusions. <strong>That is the wrong comparison.</strong>
              </p>
            </div>

            <p className="AzaVik-misconception-lead-text">
              The real difference is how you experience the destination.
            </p>

            <div className="AzaVik-insight-matrix">
              <div className="AzaVik-insight-card azamara">
                <div className="AzaVik-insight-badge azamara">Azamara</div>
                <p className="AzaVik-insight-body">
                  <strong>Azamara</strong> is built for travelers who want to
                  stay longer, move slower, and explore more independently. You
                  are often in port late into the evening or overnight, which
                  allows for a completely different experience.
                </p>
              </div>

              <div className="AzaVik-insight-card viking">
                <div className="AzaVik-insight-badge viking">Viking</div>
                <p className="AzaVik-insight-body">
                  <strong>Viking</strong> is built for travelers who want a
                  seamless, well-structured journey where much of the planning
                  is done for them. The included excursions and consistent
                  pacing create a smooth and predictable experience.
                </p>
              </div>
            </div>

            <div className="AzaVik-misconception-footer">
              <p className="AzaVik-footer-text">
                This is why two people can take similar itineraries and walk
                away with completely different impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL DIFFERENCE */}
      <section className="AzaVik-section AzaVik-bg-white">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              What the Experience Actually Feels Like
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-diff-grid">
            <div className="AzaVik-diff-card">
              <div className="AzaVik-diff-badge AzaVik-badge-azamara">
                Azamara
              </div>
              <p className="AzaVik-diff-text">
                Azamara feels like a destination-first journey where the ship is
                simply your base. You have more freedom, more time, and more
                control over how you experience each port.
              </p>
            </div>
            <div className="AzaVik-diff-card">
              <div className="AzaVik-diff-badge AzaVik-badge-viking">
                Viking
              </div>
              <p className="AzaVik-diff-text">
                Viking feels like a curated experience where everything is
                organized, predictable, and thoughtfully structured from start
                to finish.
              </p>
            </div>
          </div>
          <p className="AzaVik-body-text" style={{ marginTop: "30px" }}>
            This is often the deciding factor for our clients.
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="AzaVik-section AzaVik-bg-soft">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Experience the Journey</h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LIkutVSgTGI"
              title="Azamara vs Viking Ocean Cruises"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="AzaVik-video-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ITINERARIES */}
      <section className="AzaVik-section AzaVik-bg-soft" id="AzaVik-pricing">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              Which Cruise Line Has Better Itineraries?
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-pricing-analysis-grid">
            <div className="AzaVik-pricing-card AzaVik-pricing-azamara">
              <div className="AzaVik-pricing-card-header">
                <span className="AzaVik-pricing-brand-badge">
                  Azamara: Built for Destination Depth
                </span>
              </div>
              <ul
                className="AzaVik-choose-list"
                style={{ marginTop: "15px", gap: "5px" }}
              >
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> More overnight stays
                </li>
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> Late departures
                </li>
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> Access to smaller ports
                </li>
              </ul>
              <p className="AzaVik-pricing-text" style={{ marginTop: "15px" }}>
                This creates a more immersive and less rushed experience.
              </p>
            </div>

            <div className="AzaVik-pricing-card AzaVik-pricing-viking">
              <div className="AzaVik-pricing-card-header">
                <span className="AzaVik-pricing-brand-badge">
                  Viking: Structured Exploration
                </span>
              </div>
              <ul
                className="AzaVik-choose-list"
                style={{ marginTop: "15px", gap: "5px" }}
              >
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> Balanced itineraries
                </li>
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> Included excursions
                </li>
                <li style={{ background: "transparent", padding: "5px 0" }}>
                  <Check size={14} strokeWidth={3} /> Predictable pacing
                </li>
              </ul>
              <p className="AzaVik-pricing-text" style={{ marginTop: "15px" }}>
                This creates a more guided and efficient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="AzaVik-gallery-section">
        <div className="AzaVik-gallery-inner">
          <div className="AzaVik-gallery-header">
            <h2 className="AzaVik-gallery-h2">
              Life Aboard Small Ship Cruises
            </h2>
            <div className="AzaVik-gallery-divider"></div>
            <p className="AzaVik-gallery-p">
              From intimate port evenings to modern Scandinavian design —
              experience what small ship luxury on the ocean truly looks and
              feels like.
            </p>
          </div>

          <div className="AzaVik-gallery-bento-grid">
            <div className="AzaVik-gallery-item AzaVik-gallery-feature">
              <div className="AzaVik-gallery-image-box">
                <img
                  src={ImageGallery1}
                  alt="Azamara Onboard Experience"
                  className="AzaVik-gallery-img"
                />
                <div className="AzaVik-gallery-overlay">
                  <span className="AzaVik-gallery-badge">
                    Azamara Suite Living
                  </span>
                  <h3 className="AzaVik-gallery-h3">
                    Relaxed River Views in Elegant Comfort
                  </h3>
                  <p className="AzaVik-gallery-item_p">
                    Unwind in a beautifully designed suite with panoramic river
                    views, where every moment feels and personal — from morning
                    coffee to evening wine as the landscapes drift by.
                  </p>
                </div>
              </div>
            </div>

            <div className="AzaVik-gallery-item AzaVik-gallery-tall">
              <div className="AzaVik-gallery-image-box">
                <img
                  src={ImageGallery2}
                  alt="Viking Scandinavian Design"
                  className="AzaVik-gallery-img"
                />
                <div className="AzaVik-gallery-overlay">
                  <span className="AzaVik-gallery-badge">Panoramic Lounge</span>
                  <h3 className="AzaVik-gallery-h3">
                    Light-Filled Spaces with Sweeping River Views
                  </h3>
                </div>
              </div>
            </div>

            <div className="AzaVik-gallery-item">
              <div className="AzaVik-gallery-image-box">
                <img
                  src={ImageGallery3}
                  alt="Luxury Ocean Suite"
                  className="AzaVik-gallery-img"
                />
                <div className="AzaVik-gallery-overlay">
                  <span className="AzaVik-gallery-badge">Fine Dining</span>
                  <h3 className="AzaVik-gallery-h3">
                    Elegant Dining with Thoughtfully Crafted Cuisine
                  </h3>
                </div>
              </div>
            </div>

            <div className="AzaVik-gallery-item">
              <div className="AzaVik-gallery-image-box">
                <img
                  src={ImageGallery4}
                  alt="Enrichment Programming"
                  className="AzaVik-gallery-img"
                />
                <div className="AzaVik-gallery-overlay">
                  <span className="AzaVik-gallery-badge">Pool Deck</span>
                  <h3 className="AzaVik-gallery-h3">
                    Relaxed Poolside Lounging in a Serene Setting
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="AzaVik-section AzaVik-bg-soft" id="AzaVik-best-for">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">
              Real Client Scenarios: Which One We Recommend and Why
            </h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-best-for-grid">
            <div className="AzaVik-best-for-card azamara">
              <div className="AzaVik-best-for-icon">
                <Users size={24} />
              </div>
              <h4 className="AzaVik-best-for-title">Experienced Travelers</h4>
              <p className="AzaVik-best-for-text">
                We recommend Azamara. They typically want more flexibility and
                deeper exploration.
              </p>
            </div>

            <div className="AzaVik-best-for-card viking">
              <div className="AzaVik-best-for-icon">
                <Ship size={24} />
              </div>
              <h4 className="AzaVik-best-for-title">
                First-Time Luxury Cruisers
              </h4>
              <p className="AzaVik-best-for-text">
                We recommend Viking. The structure and inclusions make the
                experience easier and more seamless.
              </p>
            </div>

            <div className="AzaVik-best-for-card">
              <div className="AzaVik-best-for-icon">
                <Award size={24} />
              </div>
              <h4 className="AzaVik-best-for-title">
                Milestone or Celebration Trips
              </h4>
              <p className="AzaVik-best-for-text">
                It depends. If ease matters more, Viking wins. If uniqueness
                matters more, Azamara wins.
              </p>
            </div>

            <div className="AzaVik-best-for-card azamara">
              <div className="AzaVik-best-for-icon">
                <MapPin size={24} />
              </div>
              <h4 className="AzaVik-best-for-title">Cultural Travelers</h4>
              <p className="AzaVik-best-for-text">
                We lean toward Azamara. More time in port allows for deeper
                engagement with the destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARD EXPERIENCE */}
      <section className="AzaVik-section AzaVik-onboard-section">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Ships and Onboard Experience</h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-onboard-grid">
            <div className="AzaVik-onboard-card">
              <div className="AzaVik-onboard-image-wrap">
                <img src={onboard1} alt="Azamara Ship" />
              </div>
              <h3 className="AzaVik-onboard-title">Azamara</h3>
              <ul className="AzaVik-onboard-list">
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Smaller,
                  intimate ships
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Social,
                  relaxed atmosphere
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Less
                  emphasis on entertainment
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Focus on
                  destination
                </li>
              </ul>
            </div>

            <div className="AzaVik-onboard-card">
              <div className="AzaVik-onboard-image-wrap">
                <img src={onboard2} alt="Viking Ocean Cruises Ship" />
              </div>
              <h3 className="AzaVik-onboard-title">Viking</h3>
              <ul className="AzaVik-onboard-list">
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Modern
                  Scandinavian design
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Larger,
                  more open spaces
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Quiet,
                  refined atmosphere
                </li>
                <li className="AzaVik-onboard-list-item">
                  <Check size={18} className="AzaVik-onboard-icon" /> Strong
                  enrichment programming
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="AzaVik-section AzaVik-bg-soft">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Inclusions and What You Actually Get</h2>
            <div className="AzaVik-accent-line"></div>
          </div>
          <div className="AzaVik-choose-grid">
            <div className="AzaVik-choose-card">
              <div className="AzaVik-choose-card-top">
                <div className="AzaVik-diff-badge AzaVik-badge-azamara">
                  Azamara
                </div>
                <h3 className="AzaVik-choose-title">Azamara Includes</h3>
              </div>
              <ul className="AzaVik-choose-list" style={{ marginTop: "20px" }}>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Gratuities</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Select beverages</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Cultural programming</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Some onboard experiences</span>
                </li>
              </ul>
            </div>

            <div className="AzaVik-choose-card">
              <div className="AzaVik-choose-card-top">
                <div className="AzaVik-diff-badge AzaVik-badge-viking">
                  Viking
                </div>
                <h3 className="AzaVik-choose-title">Viking Includes</h3>
              </div>
              <ul className="AzaVik-choose-list" style={{ marginTop: "20px" }}>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>One excursion per port</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Beer and wine with meals</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Wi-Fi</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Gratuities in many cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="AzaVik-pricing-comparison-modern">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Pricing Comparison</h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-pricing-matrix">
            <div className="AzaVik-pricing-perspective">
              <div className="AzaVik-perspective-brand azamara">Azamara</div>
              <p className="AzaVik-perspective-text">
                Azamara typically has a <strong>lower base price</strong>
              </p>
            </div>

            <div className="AzaVik-pricing-perspective">
              <div className="AzaVik-perspective-brand viking">Viking</div>
              <p className="AzaVik-perspective-text">
                Viking typically includes <strong>more upfront</strong>
              </p>
            </div>
          </div>

          <div className="AzaVik-pricing-summary-box">
            <div className="AzaVik-summary-icon-wrap">
              <Shield size={24} />
            </div>
            <p className="AzaVik-summary-text">
              The better value depends on how you travel.
            </p>
          </div>
        </div>
      </section>

      {/* WINS AND CHALLENGES */}
      <section className="AzaVik-section AzaVik-bg-soft">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Where Each Cruise Line Wins and Loses</h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-win-loss-grid">
            {/* AZAMARA */}
            <div className="AzaVik-win-loss-card">
              <div className="AzaVik-choose-card-top">
                <div className="AzaVik-diff-badge AzaVik-badge-azamara">
                  Azamara
                </div>
                <h3 className="AzaVik-choose-title">Wins & Challenges</h3>
              </div>

              <div className="AzaVik-content-spacing">
                <h4 className="AzaVik-subheading">Where Azamara Wins:</h4>
                <ul className="AzaVik-choose-list">
                  <li>
                    <Check size={14} /> Time in port
                  </li>
                  <li>
                    <Check size={14} /> Overnight experiences
                  </li>
                  <li>
                    <Check size={14} /> Flexibility
                  </li>
                  <li>
                    <Check size={14} /> Unique destinations
                  </li>
                </ul>

                <h4 className="AzaVik-subheading AzaVik-subheading-spaced">
                  Where Azamara Falls Short:
                </h4>
                <ul className="AzaVik-choose-list">
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> Older
                    ships
                  </li>
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> Fewer
                    inclusions
                  </li>
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> Less
                    polished onboard
                  </li>
                </ul>
              </div>
            </div>

            {/* VIKING */}
            <div className="AzaVik-win-loss-card">
              <div className="AzaVik-choose-card-top">
                <div className="AzaVik-diff-badge AzaVik-badge-viking">
                  Viking
                </div>
                <h3 className="AzaVik-choose-title">Wins & Challenges</h3>
              </div>

              <div className="AzaVik-content-spacing">
                <h4 className="AzaVik-subheading">Where Viking Wins:</h4>
                <ul className="AzaVik-choose-list">
                  <li>
                    <Check size={14} /> Simplicity
                  </li>
                  <li>
                    <Check size={14} /> Modern design
                  </li>
                  <li>
                    <Check size={14} /> Included excursions
                  </li>
                  <li>
                    <Check size={14} /> Consistency
                  </li>
                </ul>

                <h4 className="AzaVik-subheading AzaVik-subheading-spaced">
                  Where Viking Falls Short:
                </h4>
                <ul className="AzaVik-choose-list">
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> Less time
                    in port
                  </li>
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> More
                    structure
                  </li>
                  <li>
                    <Minus size={14} className="AzaVik-icon-muted" /> Less
                    flexibility
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="AzaVik-choose-guide-section">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Choose Azamara If… Choose Viking If…</h2>
            <div className="AzaVik-accent-line"></div>
          </div>

          <div className="AzaVik-choose-guide-container">
            {/* AZAMARA */}
            <div className="AzaVik-choose-block block-azamara">
              <div className="AzaVik-choose-image-box">
                <img
                  src={ChoseAzamara}
                  alt="Azamara Ship"
                  className="AzaVik-choose-img"
                />
                <div className="AzaVik-brand-tag tag-azamara">Azamara</div>
              </div>
              <div className="AzaVik-choose-text-box">
                <h3 className="AzaVik-choose-h3">Choose Azamara If...</h3>
                <ul className="AzaVik-choose-ul">
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You want more time in port</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You prefer independent exploration</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You value flexibility</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You have cruised before</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VIKING */}
            <div className="AzaVik-choose-block block-viking">
              <div className="AzaVik-choose-image-box">
                <img
                  src={ChoseViking}
                  alt="Viking Ocean Cruises Ship"
                  className="AzaVik-choose-img"
                />
                <div className="AzaVik-brand-tag tag-viking">Viking</div>
              </div>
              <div className="AzaVik-choose-text-box">
                <h3 className="AzaVik-choose-h3">Choose Viking If...</h3>
                <ul className="AzaVik-choose-ul">
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You want a structured experience</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You prefer inclusions upfront</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You want a modern ship</span>
                  </li>
                  <li>
                    <div className="AzaVik-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>You want ease and simplicity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VERDICT */}
      <section className="AzaVik-verdict-impact-section">
        <div className="AzaVik-container">
          <div className="AzaVik-verdict-header">
            <h2 className="AzaVik-verdict-h2">
              Our Verdict: Azamara vs Viking
            </h2>
            <div className="AzaVik-verdict-accent"></div>
          </div>
          <div className="AzaVik-verdict-content">
            <p className="AzaVik-verdict-main-text">
              There is no universal winner—but there is a right fit.
              <strong>Azamara</strong> wins for destination immersion and
              flexibility.
              <strong>Viking</strong> wins for ease, structure, and inclusions.
            </p>
            <div className="AzaVik-verdict-divider"></div>
            <p className="AzaVik-verdict-sub-text">
              After decades in the industry, the clients who are happiest are
              the ones who choose based on how they like to travel, not just
              price or itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* The Biggest Mistake You Can Make */}
      <section className="AzaVik-mistake-impact-section">
        <div className="AzaVik-container">
          <div className="AzaVik-mistake-alert-badge">
            <AlertTriangle size={18} />
            <span>Critical Insight</span>
          </div>
          <h2 className="AzaVik-mistake-impact-h2">
            The Biggest Mistake You Can Make
          </h2>
          <div className="AzaVik-mistake-content">
            <p className="AzaVik-mistake-intro-p">
              The biggest mistake is assuming these two cruise lines deliver the
              same experience because they are priced similarly.
            </p>

            <div className="AzaVik-mistake-reveal">
              <div className="AzaVik-reveal-line"></div>
              <p className="AzaVik-reveal-text">They do not.</p>
              <div className="AzaVik-reveal-line"></div>
            </div>

            <div className="AzaVik-mistake-comparison-grid">
              <div className="AzaVik-mistake-comparison-item">
                <span className="AzaVik-comparison-label">One Gives You</span>
                <span className="AzaVik-comparison-value">Structure</span>
              </div>
              <div className="AzaVik-mistake-comparison-divider">
                <div className="AzaVik-divider-dot"></div>
              </div>
              <div className="AzaVik-mistake-comparison-item">
                <span className="AzaVik-comparison-label">
                  The Other Gives You
                </span>
                <span className="AzaVik-comparison-value">Freedom</span>
              </div>
            </div>

            <div className="AzaVik-mistake-footer">
              <p className="AzaVik-mistake-consequence">
                If you choose the wrong one, you will feel it throughout your
                entire trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT PROFILE SECTION */}
      <section className="AzaVik-expert-section" id="AzaVik-expert">
        <div className="AzaVik-container">
          <div className="AzaVik-expert-profile-split">
            <div className="AzaVik-expert-left">
              <div className="AzaVik-expert-portrait-container">
                <div className="AzaVik-expert-portrait-wrap">
                  <img
                    src={AboutImage}
                    alt="Angela Hughes"
                    className="AzaVik-expert-img"
                  />
                  <div className="AzaVik-expert-badge-overlay">
                    <Award size={18} />
                    <span>40+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="AzaVik-expert-right">
              <div className="AzaVik-expert-content-wrap">
                <div className="AzaVik-expert-header-info">
                  <span className="AzaVik-expert-label">
                    Expert Perspective
                  </span>
                  <h2 className="AzaVik-expert-name">Angela Hughes</h2>
                  <div className="AzaVik-expert-titles">
                    <p className="AzaVik-expert-title-main">
                      CEO, Trips & Ships Luxury Travel
                    </p>
                    <p className="AzaVik-expert-title-sub">
                      Luxury Travel Influencer of the Year | Travel Leaders
                      Network
                    </p>
                  </div>
                </div>

                <div className="AzaVik-expert-bio-v2">
                  <p className="AzaVik-expert-intro-text">
                    After more than 40 years in the travel industry, this is one
                    of the most common comparisons we guide clients through.
                  </p>

                  <div className="AzaVik-expert-verdict-box">
                    <div className="AzaVik-quote-icon-wrap">
                      <Quote className="AzaVik-quote-icon" size={32} />
                    </div>
                    <p className="AzaVik-expert-quote-text">
                      "We do not sell cruise lines. We match people to the right
                      experience."
                    </p>
                    <div className="AzaVik-expert-signature">
                      <div className="AzaVik-sig-line"></div>
                      <span>Angela Hughes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="AzaVik-help-section">
        <div className="AzaVik-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Luxury Cruise background"
            className="AzaVik-help-bg-img"
          />
          <div className="AzaVik-help-overlay"></div>
        </div>

        <div className="AzaVik-container">
          <div className="AzaVik-help-card">
            <div className="AzaVik-help-content">
              <div className="AzaVik-help-header">
                <span className="AzaVik-help-eyebrow">
                  Personalized Planning
                </span>
                <h2 className="AzaVik-help-h2">
                  Not Sure Which Is Right for You?
                </h2>
                <div className="AzaVik-help-accent"></div>
              </div>

              <div className="AzaVik-help-grid">
                <div className="AzaVik-help-info">
                  <p className="AzaVik-help-intro">
                    Deciding between Azamara and Viking is about more than just
                    price—it's about matching your travel style to the right
                    experience.
                  </p>
                  <div className="AzaVik-help-btn-container">
                    <button className="AzaVik-help-cta-btn">
                      Start Planning With An Expert
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="AzaVik-help-list-box">
                  <h3 className="AzaVik-help-list-title">How we help you:</h3>
                  <ul className="AzaVik-help-bullets">
                    <li>
                      <div className="AzaVik-bullet-icon">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>Compare itineraries side by side</span>
                    </li>
                    <li>
                      <div className="AzaVik-bullet-icon">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>Identify the best value sailing</span>
                    </li>
                    <li>
                      <div className="AzaVik-bullet-icon">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>Choose the right cabin and timing</span>
                    </li>
                    <li>
                      <div className="AzaVik-bullet-icon">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>Avoid costly mistakes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="AzaVik-section AzaVik-bg-soft" id="AzaVik-faq">
        <div className="AzaVik-container">
          <div className="AzaVik-section-header">
            <h2 className="AzaVik-h2">Frequently Asked Questions</h2>
            <div className="AzaVik-accent-line"></div>
            <p className="AzaVik-faq-intro">
              Everything you need to know about Azamara vs Viking Ocean Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default AzamaraVSVikingCruise;
