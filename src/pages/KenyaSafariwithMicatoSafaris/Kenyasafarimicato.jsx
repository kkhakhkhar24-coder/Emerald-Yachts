import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Quote,
  AlertTriangle,
  Star,
  Users,
  Shield,
  Compass,
  Camera,
  Phone,
} from "lucide-react";
import "./Kenyasafarimicato.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/AzamaravsVikingOcean/hero1.webp";
import HeroImage2 from "../../assets/AzamaravsVikingOcean/hero2.webp";
import HeroImage3 from "../../assets/AzamaravsVikingOcean/hero3.webp";
import CTAImage from "../../assets/AzamaravsVikingOcean/cta.webp";
import { Helmet } from "react-helmet-async";

/* ── Schema ──────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      founder: {
        "@id": "https://www.tripsandships.com/#angela-hughes",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angela-hughes",
      name: "Angela Hughes",
      jobTitle: "Luxury Travel Advisor and Safari Travel Expert",
      worksFor: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      knowsAbout: [
        "Luxury Kenya safaris",
        "Micato Safaris",
        "African safari planning",
        "Luxury travel",
        "Kenya travel",
        "Maasai Mara safaris",
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/luxury-kenya-safari-micato/#webpage",
      url: "https://www.tripsandships.com/luxury-kenya-safari-micato/",
      name: "Luxury Kenya Safari with Micato Safaris | Angela Hughes | Trips & Ships Luxury Travel",
      description:
        "Plan a luxury Kenya safari with Micato Safaris and expert advisor Angela Hughes. 40+ years experience, 121+ countries, and 10+ safaris across Africa. Custom high-end itineraries designed to get it right.",
      about: [
        {
          "@type": "Place",
          name: "Kenya",
        },
        {
          "@type": "Organization",
          name: "Micato Safaris",
        },
        {
          "@type": "Thing",
          name: "Luxury Kenya Safari",
        },
      ],
      author: {
        "@id": "https://www.tripsandships.com/#angela-hughes",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.tripsandships.com/luxury-kenya-safari-micato/#service",
      name: "Luxury Kenya Safari Planning with Micato Safaris",
      serviceType: "Luxury safari travel planning",
      provider: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Luxury travelers planning a Kenya safari",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "25000",
        description:
          "Luxury Kenya safaris with top-tier operators like Micato Safaris typically start around $25,000 per person and may exceed $45,000+ per person depending on itinerary, routing, camps, and customization.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/luxury-kenya-safari-micato/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best luxury safari company in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top-tier operators like Micato Safaris are known for consistent execution, expert guiding, seamless logistics, and deep relationships on the ground in Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "Is Micato Safaris worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Micato Safaris can be worth it for travelers seeking a high-end, seamless safari experience with expert guiding, strong logistics, premium accommodations, and elevated service.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a luxury Kenya safari cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A true luxury Kenya safari with top-tier operators like Micato Safaris typically ranges from $25,000 to $45,000 or more per person, depending on camps, routing, season, and customization.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to visit Kenya for safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "July through October is popular for the Great Migration, but Kenya can be planned year-round depending on wildlife goals, budget, crowds, and preferred safari regions.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a Kenya safari luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A luxury Kenya safari is defined by expert guiding, seamless logistics, premium camps, strategic routing, personalized service, and access—not simply by expensive accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the safari guide matter so much?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guide can define the safari experience. A strong guide understands wildlife movement, timing, safety, positioning, and how to create a richer experience on the ground.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kenya safe for luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya can be safe for luxury travelers when the safari is planned with experienced advisors, trusted operators, vetted accommodations, and strong on-the-ground logistics.",
          },
        },
        {
          "@type": "Question",
          name: "How long should a luxury Kenya safari be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most luxury Kenya safaris work well at 7 to 10 days, allowing enough time for key safari regions, internal flights, and a more complete wildlife experience.",
          },
        },
        {
          "@type": "Question",
          name: "What animals will I see on a Kenya safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya is known for the Big Five and a wide range of wildlife, including lions, elephants, leopards, buffalo, rhinos, giraffes, zebras, cheetahs, and many plains animals.",
          },
        },
        {
          "@type": "Question",
          name: "Can I combine Kenya with other destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kenya is often combined with Tanzania, Rwanda, Uganda, South Africa, or beach destinations depending on the traveler’s goals, timing, and budget.",
          },
        },
        {
          "@type": "Question",
          name: "What can go wrong on a Kenya safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Poor guide selection, weak routing, bad camp location, poor timing, and inexperienced operators can all negatively impact a Kenya safari.",
          },
        },
        {
          "@type": "Question",
          name: "Are private safaris better than group safaris?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private safaris offer more flexibility, personalization, and control over pacing, which can be especially valuable for luxury travelers and families.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a travel advisor for a Kenya safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A knowledgeable travel advisor can be extremely valuable for a Kenya safari because the trip involves complex routing, camp selection, operator choice, timing, and logistics.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book a Kenya safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For peak season and luxury camps, booking 6 to 12 months in advance is recommended. Some high-demand departures and private safaris may require even earlier planning.",
          },
        },
        {
          "@type": "Question",
          name: "Is a luxury Kenya safari worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A luxury Kenya safari can be worth the cost when the trip is designed correctly with expert guiding, strong logistics, premium camps, and a trusted operator.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between safari camps in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safari camps vary by location, exclusivity, guiding quality, access to wildlife, service level, and overall experience. Camp choice can significantly affect the trip.",
          },
        },
        {
          "@type": "Question",
          name: "Will I see the Big Five in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Big Five sightings are possible in Kenya, especially with the right routing and guide, but wildlife sightings are never guaranteed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest mistake travelers make when booking a safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One of the biggest mistakes is choosing a safari based only on price instead of operator quality, guide expertise, camp location, and itinerary design.",
          },
        },
        {
          "@type": "Question",
          name: "Is Micato better than Abercrombie & Kent for Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both Micato Safaris and Abercrombie & Kent are top-tier luxury operators. Micato is especially known for Kenya expertise, guiding consistency, and strong on-the-ground execution.",
          },
        },
        {
          "@type": "Question",
          name: "Does Micato offer private safaris?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Micato offers private safari options, and many luxury travelers choose private experiences for greater flexibility, privacy, and personalization.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Micato Safaris different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Micato is known for consistency, expert guiding, high-touch logistics, deep Kenya experience, and strong relationships on the ground.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kenya or Tanzania better for safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both Kenya and Tanzania offer exceptional safari experiences. Kenya is often ideal for first-time safari travelers, while Tanzania offers different landscapes, parks, and migration experiences.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is the best luxury safari company in Kenya?",
      a: "Top-tier operators like Micato Safaris are known for consistent execution, expert guiding, seamless logistics, and deep relationships on the ground in Kenya.",
    },
    {
      q: "Is Micato Safaris worth it?",
      a: "Micato Safaris can be worth it for travelers seeking a high-end, seamless safari experience with expert guiding, strong logistics, premium accommodations, and elevated service.",
    },
    {
      q: "How much does a luxury Kenya safari cost?",
      a: "A true luxury Kenya safari with top-tier operators like Micato Safaris typically ranges from $25,000 to $45,000 or more per person, depending on camps, routing, season, and customization.",
    },
    {
      q: "When is the best time to visit Kenya for safari?",
      a: "July through October is popular for the Great Migration, but Kenya can be planned year-round depending on wildlife goals, budget, crowds, and preferred safari regions.",
    },
    {
      q: "What makes a Kenya safari luxury?",
      a: "A luxury Kenya safari is defined by expert guiding, seamless logistics, premium camps, strategic routing, personalized service, and access—not simply by expensive accommodations.",
    },
    {
      q: "Why does the safari guide matter so much?",
      a: "The guide can define the safari experience. A strong guide understands wildlife movement, timing, safety, positioning, and how to create a richer experience on the ground.",
    },
    {
      q: "Is Kenya safe for luxury travelers?",
      a: "Kenya can be safe for luxury travelers when the safari is planned with experienced advisors, trusted operators, vetted accommodations, and strong on-the-ground logistics.",
    },
    {
      q: "How long should a luxury Kenya safari be?",
      a: "Most luxury Kenya safaris work well at 7 to 10 days, allowing enough time for key safari regions, internal flights, and a more complete wildlife experience.",
    },
    {
      q: "What animals will I see on a Kenya safari?",
      a: "Kenya is known for the Big Five and a wide range of wildlife, including lions, elephants, leopards, buffalo, rhinos, giraffes, zebras, cheetahs, and many plains animals.",
    },
    {
      q: "Can I combine Kenya with other destinations?",
      a: "Yes. Kenya is often combined with Tanzania, Rwanda, Uganda, South Africa, or beach destinations depending on the traveler's goals, timing, and budget.",
    },
    {
      q: "What can go wrong on a Kenya safari?",
      a: "Poor guide selection, weak routing, bad camp location, poor timing, and inexperienced operators can all negatively impact a Kenya safari.",
    },
    {
      q: "Are private safaris better than group safaris?",
      a: "Private safaris offer more flexibility, personalization, and control over pacing, which can be especially valuable for luxury travelers and families.",
    },
    {
      q: "Do I need a travel advisor for a Kenya safari?",
      a: "A knowledgeable travel advisor can be extremely valuable for a Kenya safari because the trip involves complex routing, camp selection, operator choice, timing, and logistics.",
    },
    {
      q: "How far in advance should I book a Kenya safari?",
      a: "For peak season and luxury camps, booking 6 to 12 months in advance is recommended. Some high-demand departures and private safaris may require even earlier planning.",
    },
    {
      q: "Is a luxury Kenya safari worth the cost?",
      a: "A luxury Kenya safari can be worth the cost when the trip is designed correctly with expert guiding, strong logistics, premium camps, and a trusted operator.",
    },
    {
      q: "What is the difference between safari camps in Kenya?",
      a: "Safari camps vary by location, exclusivity, guiding quality, access to wildlife, service level, and overall experience. Camp choice can significantly affect the trip.",
    },
    {
      q: "Will I see the Big Five in Kenya?",
      a: "Big Five sightings are possible in Kenya, especially with the right routing and guide, but wildlife sightings are never guaranteed.",
    },
    {
      q: "What is the biggest mistake travelers make when booking a safari?",
      a: "One of the biggest mistakes is choosing a safari based only on price instead of operator quality, guide expertise, camp location, and itinerary design.",
    },
    {
      q: "Is Micato better than Abercrombie & Kent for Kenya?",
      a: "Both Micato Safaris and Abercrombie & Kent are top-tier luxury operators. Micato is especially known for Kenya expertise, guiding consistency, and strong on-the-ground execution.",
    },
    {
      q: "Does Micato offer private safaris?",
      a: "Yes. Micato offers private safari options, and many luxury travelers choose private experiences for greater flexibility, privacy, and personalization.",
    },
    {
      q: "What makes Micato Safaris different?",
      a: "Micato is known for consistency, expert guiding, high-touch logistics, deep Kenya experience, and strong relationships on the ground.",
    },
    {
      q: "Is Kenya or Tanzania better for safari?",
      a: "Both Kenya and Tanzania offer exceptional safari experiences. Kenya is often ideal for first-time safari travelers, while Tanzania offers different landscapes, parks, and migration experiences.",
    },
  ];

  return (
    <div className="KenSafari-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`KenSafari-faq-item${open === i ? " KenSafari-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="KenSafari-faq-q">
            <span>{item.q}</span>
            <span className="KenSafari-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="KenSafari-faq-a">
              <div className="KenSafari-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
const KenyaSafariMicato = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="KenSafari-page-wrapper">
      <Helmet>
        <title>
          Luxury Kenya Safari with Micato Safaris | Angela Hughes | Trips &
          Ships Luxury Travel
        </title>
        <meta
          name="description"
          content="Plan a luxury Kenya safari with Micato Safaris and expert advisor Angela Hughes. 40+ years experience, 121+ countries, and 10+ safaris across Africa. Custom high-end itineraries designed to get it right."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="KenSafari-hero-section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`KenSafari-hero-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="KenSafari-hero-overlay" />
        <div className="KenSafari-hero-content">
          <span className="KenSafari-hero-eyebrow">
            <Compass size={14} /> Expert-Designed Safaris
          </span>
          <h1 className="KenSafari-hero-h1">
            Luxury Kenya Safari
            <br />
            with Micato Safaris
          </h1>
          <p className="KenSafari-hero-sub">
            Luxury Kenya safaris designed by one of the most experienced travel
            advisors in the United States. With over four decades in the
            industry, travel to 121+ countries, and more than 10 safaris across
            Africa since COVID alone, Angela Hughes designs safari experiences
            that are executed at the highest level.
          </p>
          <p className="KenSafari-hero-statement">
            Not all safaris are created equal. Not even close.
          </p>
          <button className="KenSafari-hero-cta">
            <Phone size={18} />
            Schedule a 15-Minute Luxury Safari Consultation with Angela Hughes
          </button>
          <p className="KenSafari-hero-cta-note">
            Designed for travelers planning a luxury Kenya safari who want to
            get it right the first time.
          </p>
        </div>
      </section>

      {/* ── NOT ALL SAFARIS EQUAL ─────────────────────────────────── */}
      <section
        className="KenSafari-section KenSafari-bg-soft"
        id="KenSafari-overview"
      >
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">
              Why Kenya Safaris Are Not All Created Equal
            </h2>
            <div className="KenSafari-accent-line" />
          </div>
          <div className="KenSafari-intro-wrapper">
            <p className="KenSafari-intro-text KenSafari-intro-spacing">
              Kenya is one of the most iconic safari destinations in the world.
              It is also one of the easiest places to get wrong.
            </p>
            <div className="KenSafari-intro-cards">
              <div className="KenSafari-intro-card">
                <div className="KenSafari-intro-card-icon">
                  <AlertTriangle size={26} strokeWidth={1.5} />
                </div>
                <p className="KenSafari-intro-card-text">
                  We are in an industry with no real barrier to entry. Anyone
                  can say they sell travel. Anyone can say they "do" Africa.
                </p>
              </div>
              <div className="KenSafari-intro-card">
                <div className="KenSafari-intro-card-icon">
                  <Users size={26} strokeWidth={1.5} />
                </div>
                <p className="KenSafari-intro-card-text">
                  After COVID, even more operators entered the market, creating
                  a wide gap between average and exceptional safari experiences.
                </p>
              </div>
              <div className="KenSafari-intro-card KenSafari-intro-card-accent">
                <div className="KenSafari-intro-card-icon">
                  <Star size={26} strokeWidth={1.5} />
                </div>
                <p className="KenSafari-intro-card-text">
                  The difference becomes clear once you are on the ground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MICATO ───────────────────────────────────────────── */}
      <section
        className="KenSafari-section KenSafari-bg-white"
        id="KenSafari-micato"
      >
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">Why We Recommend Micato Safaris</h2>
            <div className="KenSafari-accent-line" />
            <p className="KenSafari-body-text" style={{ marginTop: "20px" }}>
              Micato is consistently ranked among the best luxury safari
              companies in Kenya because of one thing: execution.
            </p>
          </div>

          <div className="KenSafari-micato-grid">
            <div className="KenSafari-micato-card">
              <div className="KenSafari-micato-icon">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="KenSafari-micato-title">Elite Guiding</h3>
              <p className="KenSafari-micato-text">
                The guide determines the overall experience. Micato's guides are
                among the most skilled in Kenya.
              </p>
            </div>
            <div className="KenSafari-micato-card">
              <div className="KenSafari-micato-icon">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="KenSafari-micato-title">
                Deep-Rooted Relationships
              </h3>
              <p className="KenSafari-micato-text">
                Decades of relationships in Kenya give Micato access and
                influence that newer operators simply cannot match.
              </p>
            </div>
            <div className="KenSafari-micato-card">
              <div className="KenSafari-micato-icon">
                <Shield size={28} strokeWidth={1.5} />
              </div>
              <h3 className="KenSafari-micato-title">Seamless Logistics</h3>
              <p className="KenSafari-micato-text">
                Every internal flight, transfer, and camp transition is managed
                with precision from start to finish.
              </p>
            </div>
            <div className="KenSafari-micato-card">
              <div className="KenSafari-micato-icon">
                <Star size={28} strokeWidth={1.5} />
              </div>
              <h3 className="KenSafari-micato-title">Premier Camp Access</h3>
              <p className="KenSafari-micato-text">
                Access to the best camps in the most strategic locations across
                Kenya's top wildlife regions.
              </p>
            </div>
            <div className="KenSafari-micato-card">
              <div className="KenSafari-micato-icon">
                <Check size={28} strokeWidth={1.5} />
              </div>
              <h3 className="KenSafari-micato-title">Consistent Delivery</h3>
              <p className="KenSafari-micato-text">
                Consistent delivery across every itinerary. Micato is not
                competing with mid-market companies — it sits at the top.
              </p>
            </div>
            <div className="KenSafari-micato-card KenSafari-micato-card-dark">
              <p className="KenSafari-micato-statement">
                Micato is not competing with mid-market safari companies. It
                sits at the top of the luxury safari space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRIPS & SHIPS ─────────────────────────────────────── */}
      <section className="KenSafari-why-split-section">
        <div className="KenSafari-container">
          <div className="KenSafari-why-split-grid">
            <div className="KenSafari-why-split-image-wrap">
              <img
                src={AboutImage}
                alt="Luxury Travel Experience"
                className="KenSafari-why-split-img"
              />
              <div className="KenSafari-why-image-accent" />
            </div>

            <div className="KenSafari-why-split-content">
              <div className="KenSafari-why-header">
                <span className="KenSafari-why-eyebrow">
                  The Trips & Ships Advantage
                </span>
                <h2 className="KenSafari-why-h2">
                  Why Clients Choose Trips &amp; Ships Luxury Travel
                </h2>
                <div className="KenSafari-why-line" />
              </div>

              <p className="KenSafari-why-intro-text">
                Clients work with Angela Hughes because experience matters. We
                don't just book trips; we design legacies.
              </p>

              <div className="KenSafari-why-stats-grid">
                <div className="KenSafari-why-stat">
                  <span className="KenSafari-why-stat-num">40+</span>
                  <span className="KenSafari-why-stat-label">
                    Years of Industry Leadership
                  </span>
                </div>
                <div className="KenSafari-why-stat">
                  <span className="KenSafari-why-stat-num">121+</span>
                  <span className="KenSafari-why-stat-label">
                    Countries Explored First-Hand
                  </span>
                </div>
                <div className="KenSafari-why-stat">
                  <span className="KenSafari-why-stat-num">10+</span>
                  <span className="KenSafari-why-stat-label">
                    Post-COVID African Safaris
                  </span>
                </div>
              </div>

              <div className="KenSafari-why-features">
                <div className="KenSafari-why-feature">
                  <div className="KenSafari-why-feature-icon">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span>Deep knowledge of Kenya and East Africa</span>
                </div>
                <div className="KenSafari-why-feature">
                  <div className="KenSafari-why-feature-icon">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span>Strong operator preferences by destination</span>
                </div>
              </div>

              <div className="KenSafari-why-quote">
                <Quote size={20} className="KenSafari-why-quote-icon" />
                <p>
                  Clients do not hire Angela Hughes to book travel. They hire
                  her to get it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section className="KenSafari-pricing-section">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">
              How Much Does a Luxury Kenya Safari Cost?
            </h2>
            <div className="KenSafari-accent-line" />
          </div>

          <div className="KenSafari-pricing-grid">
            <div className="KenSafari-pricing-main">
              <div className="KenSafari-pricing-range">
                <div>
                  <span className="KenSafari-price-value">
                    $25,000 – $45,000+
                  </span>
                  <span className="KenSafari-price-label">
                    per person · typical range
                  </span>
                </div>
              </div>
              <p className="KenSafari-pricing-note">
                Private safaris can exceed this depending on camps and routing.
              </p>
            </div>
            <div className="KenSafari-pricing-includes">
              <h3 className="KenSafari-pricing-includes-title">
                A fully managed, high-touch experience including:
              </h3>
              <ul className="KenSafari-pricing-list">
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Expert guides</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Premium accommodations</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Seamless logistics</span>
                </li>
                <li>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Concierge-level service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT CAN GO WRONG ─────────────────────────────────────── */}
      <section className="KenSafari-section KenSafari-bg-dark">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2-white">
              What Can Go Wrong on a Kenya Safari
            </h2>
            <div className="KenSafari-accent-line-white" />
          </div>

          <div className="KenSafari-wrong-grid">
            {[
              "Poor guide selection",
              "Incorrect camp location",
              "Weak routing between regions",
              "Poor timing for wildlife movement",
              "Inexperienced operators",
            ].map((risk, i) => (
              <div key={i} className="KenSafari-wrong-card">
                <div className="KenSafari-wrong-icon">
                  <AlertTriangle size={22} strokeWidth={1.5} />
                </div>
                <p className="KenSafari-wrong-text">{risk}</p>
              </div>
            ))}
            <div className="KenSafari-wrong-card KenSafari-wrong-card-highlight">
              <p className="KenSafari-wrong-highlight-text">
                The difference between the right guide and the wrong guide can
                define the entire experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST DESTINATIONS ─────────────────────────────────────── */}
      <section
        className="KenSafari-section KenSafari-bg-white"
        id="KenSafari-destinations"
      >
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">Best Kenya Safari Destinations</h2>
            <div className="KenSafari-accent-line" />
            <p className="KenSafari-body-text" style={{ marginTop: "20px" }}>
              Each region requires a different strategy and approach.
            </p>
          </div>

          <div className="KenSafari-dest-grid">
            <div className="KenSafari-dest-card">
              <span className="KenSafari-dest-number">01</span>
              <div className="KenSafari-dest-icon">
                <MapPin size={30} strokeWidth={1.5} />
              </div>
              <div className="KenSafari-dest-content">
                <h3 className="KenSafari-dest-title">Maasai Mara</h3>
                <p className="KenSafari-dest-text">
                  Big Five sightings and the Great Migration. Guide quality is
                  critical.
                </p>
              </div>
            </div>
            <div className="KenSafari-dest-card">
              <span className="KenSafari-dest-number">02</span>
              <div className="KenSafari-dest-icon">
                <Star size={30} strokeWidth={1.5} />
              </div>
              <div className="KenSafari-dest-content">
                <h3 className="KenSafari-dest-title">Laikipia Conservancies</h3>
                <p className="KenSafari-dest-text">
                  Exclusive, less crowded, highly curated experiences.
                </p>
              </div>
            </div>
            <div className="KenSafari-dest-card">
              <span className="KenSafari-dest-number">03</span>
              <div className="KenSafari-dest-icon">
                <Camera size={30} strokeWidth={1.5} />
              </div>
              <div className="KenSafari-dest-content">
                <h3 className="KenSafari-dest-title">Amboseli National Park</h3>
                <p className="KenSafari-dest-text">
                  Known for large elephant herds and Kilimanjaro views.
                </p>
              </div>
            </div>
            <div className="KenSafari-dest-card">
              <span className="KenSafari-dest-number">04</span>
              <div className="KenSafari-dest-icon">
                <Compass size={30} strokeWidth={1.5} />
              </div>
              <div className="KenSafari-dest-content">
                <h3 className="KenSafari-dest-title">Samburu</h3>
                <p className="KenSafari-dest-text">
                  Unique species and fewer crowds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ─────────────────────────────────────────── */}
      <section className="KenSafari-section KenSafari-bg-soft">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">
              Experience Kenya with Micato Safaris
            </h2>
            <div className="KenSafari-accent-line" />
          </div>
          <div className="KenSafari-video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/r-CNSFClNqk"
              title="Micato Safaris Kenya"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="KenSafari-video-iframe"
            />
          </div>
          {/* <p className="KenSafari-video-note">
            View the full Micato Safaris channel at{" "}
            <a
              href="https://www.youtube.com/@micatosafaris/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="KenSafari-video-link"
            >
              youtube.com/@micatosafaris
            </a>
          </p> */}
        </div>
      </section>

      {/* ── HOW MICATO COMPARES ───────────────────────────────────── */}
      <section className="KenSafari-section KenSafari-bg-white">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">
              How Micato Compares to Other Safari Companies
            </h2>
            <div className="KenSafari-accent-line" />
            <p className="KenSafari-body-text" style={{ marginTop: "20px" }}>
              Clients often compare Micato to operators like Abercrombie &amp;
              Kent and &amp;Beyond. The right choice depends on the traveler,
              destination, and expectations.
            </p>
          </div>

          <div className="KenSafari-compare-grid">
            <div className="KenSafari-compare-card KenSafari-compare-featured">
              <div className="KenSafari-compare-badge">Our Recommendation</div>
              <h3 className="KenSafari-compare-title">Micato Safaris</h3>
              <div className="KenSafari-compare-divider" />
              <p className="KenSafari-compare-desc">
                Known for consistency and guiding excellence. Especially strong
                in Kenya.
              </p>
            </div>
            <div className="KenSafari-compare-card">
              <h3 className="KenSafari-compare-title">
                Abercrombie &amp; Kent
              </h3>
              <div className="KenSafari-compare-divider" />
              <p className="KenSafari-compare-desc">
                Global luxury operator with structured itineraries.
              </p>
            </div>
            <div className="KenSafari-compare-card">
              <h3 className="KenSafari-compare-title">&amp;Beyond</h3>
              <div className="KenSafari-compare-divider" />
              <p className="KenSafari-compare-desc">
                Strong camp portfolio and conservation focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT A TRUE LUXURY SAFARI INCLUDES ───────────────────── */}
      <section className="KenSafari-section KenSafari-bg-soft">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">
              What a True Luxury Kenya Safari Includes
            </h2>
            <div className="KenSafari-accent-line" />
          </div>
          <div className="KenSafari-includes-grid">
            {[
              {
                icon: <Award size={26} strokeWidth={1.5} />,
                text: "Expert-level guides",
              },
              {
                icon: <Star size={26} strokeWidth={1.5} />,
                text: "Carefully selected luxury camps",
              },
              {
                icon: <Compass size={26} strokeWidth={1.5} />,
                text: "Seamless internal flights",
              },
              {
                icon: <MapPin size={26} strokeWidth={1.5} />,
                text: "Strategic routing",
              },
              {
                icon: <Users size={26} strokeWidth={1.5} />,
                text: "Personalized itinerary design",
              },
              {
                icon: <Shield size={26} strokeWidth={1.5} />,
                text: "Full on-the-ground coordination",
              },
            ].map((item, i) => (
              <div key={i} className="KenSafari-includes-card">
                <div className="KenSafari-includes-icon">{item.icon}</div>
                <p className="KenSafari-includes-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIAL ────────────────────────────────────── */}
      <section className="KenSafari-section KenSafari-bg-dark">
        <div className="KenSafari-container">
          <div className="KenSafari-testimonial-wrap">
            <div className="KenSafari-testimonial-quote-icon">
              <Quote size={48} strokeWidth={1} />
            </div>
            <blockquote className="KenSafari-testimonial-text">
              We had no idea how much detail went into planning a safari. Every
              part of the trip was seamless, and it completely changed how we
              travel.
            </blockquote>
            <div className="KenSafari-testimonial-attr">
              — Client Experience
            </div>
          </div>
        </div>
      </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section
        className="KenSafari-section KenSafari-bg-soft"
        id="KenSafari-faq"
      >
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">FAQ: Luxury Kenya Safaris</h2>
            <div className="KenSafari-accent-line" />
            <p className="KenSafari-faq-intro">
              These are the most common questions we are asked when planning a
              luxury Kenya safari.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── HOW WE HELP (CTA) ─────────────────────────────────────── */}
      <section className="KenSafari-help-section">
        <div className="KenSafari-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Luxury Kenya Safari"
            className="KenSafari-help-bg-img"
          />
          <div className="KenSafari-help-overlay" />
        </div>

        <div className="KenSafari-container">
          <div className="KenSafari-help-card">
            <div className="KenSafari-help-content">
              <div className="KenSafari-help-header">
                <span className="KenSafari-help-eyebrow">
                  Personalized Planning
                </span>
                <h2 className="KenSafari-help-h2">
                  Start Planning Your Luxury Kenya Safari
                </h2>
                <div className="KenSafari-help-accent" />
              </div>

              <div className="KenSafari-help-centered-content">
                <p className="KenSafari-help-intro">
                  If you are planning a luxury Kenya safari and want it done
                  right the first time, experience matters.
                </p>
                <p className="KenSafari-help-intro">
                  With over four decades in the industry, Angela Hughes and
                  Trips & Ships Luxury Travel design safari experiences that are
                  executed at the highest level.
                </p>
                <div className="KenSafari-help-btn-container">
                  <button className="KenSafari-help-cta-btn">
                    Schedule a 15-Minute Luxury Safari Consultation
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KenyaSafariMicato;
