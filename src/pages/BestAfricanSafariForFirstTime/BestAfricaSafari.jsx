import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Quote,
  Star,
  Users,
  Shield,
  Compass,
  Camera,
  Globe,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Heart,
} from "lucide-react";
import "./BestAfricaSafari.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutImage from "../../assets/Angela_Hughes.jpg";
import BafricaImage1 from "../../assets/BestAfricanSafariForFirstTime/Bestafrica1.jpg";
import BafricaImage2 from "../../assets/BestAfricanSafariForFirstTime/Bestafrica2.jpg";
import BafricaImage3 from "../../assets/BestAfricanSafariForFirstTime/Bestafrica3.jpg";
import BafricaImage8 from "../../assets/BestAfricanSafariForFirstTime/Bestafrica4.jpg";
import BafricaImage4 from "../../assets/BestAfricanSafariForFirstTime/Cheetahs.jpg";
import BafricaImage5 from "../../assets/BestAfricanSafariForFirstTime/Hippos.jpg";
import BafricaImage6 from "../../assets/BestAfricanSafariForFirstTime/KenyaTravel.jpg";
import BafricaImage7 from "../../assets/BestAfricanSafariForFirstTime/Kenya2.jpg";
import Park from "../../assets/BestAfricanSafariForFirstTime/Park.jpg";
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
      areaServed: ["Kenya", "Tanzania", "East Africa", "Africa"],
      knowsAbout: [
        "Luxury African Safaris",
        "Kenya Safaris",
        "Tanzania Safaris",
        "East Africa Travel",
        "Luxury Safari Planning",
        "Micato Safaris",
        "Great Migration Safaris",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angela-hughes",
      name: "Angela Hughes",
      jobTitle:
        "CEO of Trips & Ships Luxury Travel and Founder of Luxury Travel University",
      url: "https://www.tripsandships.com",
      sameAs: ["https://www.luxurytraveluniversity.com"],
      knowsAbout: [
        "Luxury Travel",
        "Luxury African Safaris",
        "Kenya Safaris",
        "Tanzania Safaris",
        "East Africa Safari Planning",
        "Luxury Cruises",
        "Expedition Travel",
      ],
      affiliation: {
        "@id": "https://www.tripsandships.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/best-african-safari-for-first-timers/#webpage",
      url: "https://www.tripsandships.com/best-african-safari-for-first-timers/",
      name: "Best African Safari for First Timers in 2026 | Kenya vs Tanzania Luxury Safari Guide",
      description:
        "Planning your first African safari? Discover whether Kenya or Tanzania is best for first time luxury safari travelers including safari costs, migration timing, luxury camps, family safaris, and expert safari advice from Angela Hughes of Trips & Ships Luxury Travel.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        { "@type": "Thing", name: "Luxury African Safaris" },
        { "@type": "Place", name: "Kenya" },
        { "@type": "Place", name: "Tanzania" },
        { "@type": "Thing", name: "Great Migration Safaris" },
        { "@type": "Organization", name: "Micato Safaris" },
      ],
      author: {
        "@id": "https://www.tripsandships.com/#angela-hughes",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntity: {
        "@id":
          "https://www.tripsandships.com/best-african-safari-for-first-timers/#faq",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/best-african-safari-for-first-timers/#breadcrumb",
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
          name: "Luxury African Safaris",
          item: "https://www.tripsandships.com/luxury-african-safaris/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best African Safari for First Timers",
          item: "https://www.tripsandships.com/best-african-safari-for-first-timers/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/best-african-safari-for-first-timers/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best African safari country for first timers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most first time luxury safari travelers, Kenya and Tanzania are the strongest choices because of their incredible wildlife, luxury safari infrastructure, experienced guides, and iconic landscapes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kenya or Tanzania better for a first safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both Kenya and Tanzania are excellent for a first safari. Kenya is often ideal for families, conservancy experiences, and photography, while Tanzania is famous for dramatic landscapes, the Serengeti, Ngorongoro Crater, and Great Migration safaris.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a luxury African safari cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most luxury East Africa safaris range from approximately $8,000 to more than $30,000 per person depending on seasonality, camp level, internal flights, private guiding, itinerary length, and level of customization.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best month for safari in Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best month for safari depends on the destination and your goals. Migration timing, weather, crowd levels, and wildlife movement vary throughout the year, which is why Kenya and Tanzania safari planning should be matched to the traveler's priorities.",
          },
        },
        {
          "@type": "Question",
          name: "How many days do I need for safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most first time safari travelers should plan a minimum of 7 to 10 days in Africa for a well paced luxury safari experience. This allows time for multiple safari regions without rushing between camps.",
          },
        },
        {
          "@type": "Question",
          name: "Are African safaris safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury safaris in Kenya and Tanzania are generally very safe when planned through experienced safari operators and advisors. Professional guides, vetted camps, reliable logistics, and trusted ground partners are essential.",
          },
        },
        {
          "@type": "Question",
          name: "Can children go on safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many luxury safari camps and conservancies offer excellent family safari experiences. The best family safaris are designed around age appropriate activities, camp rules, guide quality, travel pacing, and comfort.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "First time safari travelers should pack neutral colored lightweight clothing, layers for cool mornings, comfortable shoes, sun protection, binoculars, camera equipment, and soft sided luggage when required for internal safari flights.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Great Migration worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Great Migration is considered one of the greatest wildlife spectacles on earth and is one of the most requested safari experiences for first time travelers visiting Kenya or Tanzania.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best luxury safari company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are several outstanding luxury safari companies in Africa. Trips & Ships Luxury Travel often recommends trusted partners such as Micato Safaris based on the traveler's goals, destination, travel style, budget, and desired level of luxury.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ───────────────────────────────────────────────── */
function BafsFAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is the best African safari country for first timers?",
      a: "For most first time luxury safari travelers, Kenya and Tanzania are the strongest choices because of their incredible wildlife, luxury safari infrastructure, experienced guides, and iconic landscapes.",
    },
    {
      q: "Is Kenya or Tanzania better for a first safari?",
      a: "Both are excellent. Kenya is often ideal for families and conservancy experiences, while Tanzania is famous for dramatic landscapes and Great Migration safaris.",
    },
    {
      q: "How much does a luxury African safari cost?",
      a: "Most luxury East Africa safaris range from approximately $8,000 to more than $30,000 per person depending on seasonality, camps, flights, and level of customization.",
    },
    {
      q: "What is the best month for safari in Africa?",
      a: "The best time depends on the destination and your goals. Migration timing, weather, crowd levels, and wildlife movement vary throughout the year.",
    },
    {
      q: "How many days do I need for safari?",
      a: "Most first time travelers should plan a minimum of 7 to 10 days in Africa for a well paced luxury safari experience.",
    },
    {
      q: "Are African safaris safe?",
      a: "Luxury safaris in Kenya and Tanzania are generally very safe when planned through experienced safari operators and advisors.",
    },
    {
      q: "Can children go on safari?",
      a: "Absolutely. Many luxury safari camps and conservancies offer exceptional family safari experiences and educational wildlife programs.",
    },
    {
      q: "What should I pack for safari?",
      a: "Neutral colored lightweight clothing, layers for cool mornings, binoculars, comfortable shoes, sun protection, and camera equipment are all highly recommended.",
    },
    {
      q: "Is the Great Migration worth it?",
      a: "Absolutely. The Great Migration is considered one of the greatest wildlife spectacles on earth and is one of the most requested safari experiences for first time travelers.",
    },
    {
      q: "What is the best luxury safari company?",
      a: "There are several outstanding luxury safari companies in Africa. We often recommend trusted partners such as Micato Safaris based on the traveler's goals, travel style, and desired level of luxury.",
    },
  ];

  return (
    <div className="Bafs-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`Bafs-faq-item${open === i ? " Bafs-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="Bafs-faq-q">
            <span>{item.q}</span>
            <span className="Bafs-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="Bafs-faq-a">
              <div className="Bafs-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
const BestAfricaSafari = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const images = [BafricaImage1, BafricaImage8, BafricaImage3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Bafs-page-wrapper">
      <Helmet>
        <title>
          Best African Safari for First Timers in 2026 | Kenya vs Tanzania
          Luxury Safari Guide
        </title>
        <meta
          name="description"
          content="Planning your first African safari? Discover whether Kenya or Tanzania is best for first time luxury safari travelers including safari costs, migration timing, luxury camps, family safaris, and expert safari advice from Angela Hughes of Trips & Ships Luxury Travel."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="Bafs-hero-section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Bafs-hero-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="Bafs-hero-overlay" />
        <div className="Bafs-hero-content">
          <div className="Bafs-hero-eyebrow">
            <Sparkles size={13} />
            East Africa Safari Guide 2026
          </div>
          <h1 className="Bafs-hero-h1">
            What Is the Best African Safari for First Timers?
          </h1>
          <p className="Bafs-hero-sub">
            For many travelers, an African safari is not simply another
            vacation. It is the trip they have dreamed about for years. The
            images live in our minds long before we ever arrive. Lions moving
            through golden grass at sunrise. Elephants crossing dusty plains
            beneath Mount Kilimanjaro. Giraffes silhouetted against acacia
            trees. The sound of hyenas echoing through the night from somewhere
            deep in the bush.
          </p>

          {!showMore ? (
            <button
              className="Bafs-read-more-btn"
              onClick={() => setShowMore(true)}
            >
              <span>Read More</span>
              <ChevronDown size={14} />
            </button>
          ) : (
            <div className="Bafs-hero-expanded-content">
              <p className="Bafs-hero-sub">And then there is the silence.</p>
              <p className="Bafs-hero-sub">
                One of the greatest surprises for first time safari travelers is
                how emotional Africa becomes. Safari is rarely just about
                spotting animals. It is the stillness before sunrise. The smell
                of earth after rain. The vastness of the Serengeti stretching
                endlessly beyond the horizon. The realization that there are
                still places in the world where nature completely governs the
                rhythm of life.
              </p>
              <p className="Bafs-hero-sub">
                One of the first questions travelers ask when planning Africa
                for the first time is simple:
              </p>
              <p className="Bafs-hero-sub" style={{ fontWeight: 600 }}>
                What is the best African safari for beginners?
              </p>
              <p className="Bafs-hero-sub">
                After years of designing luxury journeys around the world and
                extensive experience throughout Africa, I almost always
                recommend that first time safari travelers begin with either
                Kenya or Tanzania.
              </p>
              <p className="Bafs-hero-sub" style={{ fontWeight: 600 }}>
                Why?
              </p>
              <p className="Bafs-hero-statement">
                Because East Africa delivers the iconic safari experience most
                travelers imagine when they dream about Africa for the first
                time.
              </p>
              <button
                className="Bafs-read-more-btn"
                onClick={() => setShowMore(false)}
                style={{ marginBottom: "32px" }}
              >
                <span>Read Less</span>
                <ChevronUp size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY KENYA & TANZANIA ─────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              Why Kenya and Tanzania Are the Best <br /> African Safaris for First
              Timers
            </h2>
            <div className="Bafs-accent-line" />
            <div
              className="Bafs-section-intro-text"
              style={{ marginTop: "32px" }}
            >
              <p className="Bafs-body-text">
                When travelers picture Africa, they are usually imagining East
                Africa.
              </p>
              <p className="Bafs-body-text">
                They are imagining the sweeping plains of the Serengeti National
                Park. The legendary wildlife of the Maasai Mara National
                Reserve. Massive elephant herds moving beneath Mount
                Kilimanjaro. The extraordinary landscapes of the Ngorongoro
                Crater. Luxury tented camps under star filled skies. Sundowners
                overlooking the savanna at sunset.
              </p>
              <p className="Bafs-body-text" style={{ marginTop: "24px" }}>
                For first time safari travelers, Kenya and Tanzania offer a
                balance of adventure, wildlife, luxury, and infrastructure that
                is difficult to match anywhere else in Africa.
              </p>
              <p
                className="Bafs-body-text"
                style={{ fontWeight: 600, marginTop: "16px" }}
              >
                Both destinations provide:
              </p>
            </div>
          </div>

          <div className="Bafs-benefits-grid">
            {[
              {
                icon: <Award size={26} strokeWidth={1.5} />,
                text: "Exceptional wildlife viewing",
              },
              {
                icon: <Star size={26} strokeWidth={1.5} />,
                text: "The opportunity to see the Big Five",
              },
              {
                icon: <Shield size={26} strokeWidth={1.5} />,
                text: "Luxury lodges and tented camps",
              },
              {
                icon: <Compass size={26} strokeWidth={1.5} />,
                text: "Highly trained safari guides",
              },
              {
                icon: <Globe size={26} strokeWidth={1.5} />,
                text: "Fly in safari options",
              },
              {
                icon: <Users size={26} strokeWidth={1.5} />,
                text: "Family friendly safaris",
              },
              {
                icon: <MapPin size={26} strokeWidth={1.5} />,
                text: "Luxury honeymoon experiences",
              },
              {
                icon: <CheckCircle2 size={26} strokeWidth={1.5} />,
                text: "Conservation focused travel",
              },
              {
                icon: <Camera size={26} strokeWidth={1.5} />,
                text: "Extraordinary photography opportunities",
              },
              {
                icon: <Sparkles size={26} strokeWidth={1.5} />,
                text: "Seamless safari extensions such as Zanzibar or Cape Town",
              },
            ].map((item, i) => (
              <div key={i} className="Bafs-benefit-card">
                <div className="Bafs-benefit-icon">{item.icon}</div>
                <p className="Bafs-benefit-text">{item.text}</p>
              </div>
            ))}
          </div>

          <p
            className="Bafs-body-text"
            style={{ marginTop: "48px", fontStyle: "italic", fontWeight: 500 }}
          >
            For many travelers, East Africa becomes the safari that sparks a
            lifelong relationship with the continent.
          </p>
        </div>
      </section>

      {/* ── KENYA VS TANZANIA ─────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-white" id="Bafs-comparison">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              Kenya vs Tanzania Safari for First Timers
            </h2>
            <div className="Bafs-accent-line" />
            <p className="Bafs-body-text" style={{ marginTop: "20px" }}>
              One of the most common safari planning questions is whether Kenya
              or Tanzania is better for a first safari. The truth is that both
              are extraordinary, but they offer slightly different experiences.
            </p>
          </div>

          {/* Destination Cards */}
          <div className="Bafs-destination-grid">
            {/* Tanzania */}
            <div className="Bafs-destination-card">
              <div
                className="Bafs-destination-img"
                style={{ backgroundImage: `url(${Park})` }}
              >
                <div className="Bafs-destination-overlay" />
                <h3 className="Bafs-destination-name">Tanzania</h3>
              </div>
              <div className="Bafs-destination-body">
                <p className="Bafs-destination-desc">
                  Tanzania often feels more dramatic, expansive, and remote. It
                  is home to some of the most iconic safari landscapes on earth
                  including the Serengeti and Ngorongoro Crater. The Serengeti
                  itself feels almost endless — during migration season,
                  millions of wildebeest and zebra move across the plains in one
                  of the greatest wildlife spectacles on earth.
                </p>
                <p className="Bafs-destination-ideal">
                  Tanzania is often ideal for:
                </p>
                <ul className="Bafs-destination-list">
                  {[
                    "Classic luxury safari experiences",
                    "Great Migration safaris",
                    "Ultra luxury tented camps",
                    "Honeymoon safaris",
                    "Safari and Zanzibar combinations",
                    "Vast open landscapes",
                  ].map((item, i) => (
                    <li key={i} className="Bafs-destination-list-item">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className="Bafs-list-check"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kenya */}
            <div className="Bafs-destination-card">
              <div
                className="Bafs-destination-img"
                style={{ backgroundImage: `url(${BafricaImage2})` }}
              >
                <div className="Bafs-destination-overlay" />
                <h3 className="Bafs-destination-name">Kenya</h3>
              </div>
              <div className="Bafs-destination-body">
                <p className="Bafs-destination-desc">
                  Kenya often feels slightly more approachable for first time
                  safari travelers while still offering extraordinary wildlife
                  experiences and exceptional luxury camps. Kenya's private
                  conservancies are one of the country's greatest strengths —
                  providing fewer vehicles, more intimate wildlife encounters,
                  walking safaris, and extraordinary guiding.
                </p>
                <p className="Bafs-destination-ideal">
                  Kenya is particularly strong for:
                </p>
                <ul className="Bafs-destination-list">
                  {[
                    "Family safaris",
                    "First time safari travelers",
                    "Conservancy safaris",
                    "Photography safaris",
                    "Cultural experiences with Maasai communities",
                    "Highly personalized safari experiences",
                  ].map((item, i) => (
                    <li key={i} className="Bafs-destination-list-item">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className="Bafs-list-check"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft" id="Bafs-comparison-table">
        <div className="Bafs-container">
          <div className="Bafs-table-wrap">
            <div className="Bafs-section-header">
              <h2 className="Bafs-h2">Kenya vs Tanzania Safari Comparison</h2>
              <div className="Bafs-accent-line" />
            </div>
            <div className="Bafs-table-container">
              <table className="Bafs-compare-table">
                <thead>
                  <tr>
                    <th className="Bafs-th Bafs-th-feature">Feature</th>
                    <th className="Bafs-th Bafs-th-kenya">Kenya</th>
                    <th className="Bafs-th Bafs-th-tanzania">Tanzania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Best For",
                      "Families, conservancies, photography",
                      "Migration, honeymoon, dramatic landscapes",
                    ],
                    [
                      "Famous Parks",
                      "Maasai Mara, Amboseli, Lewa",
                      "Serengeti, Ngorongoro, Tarangire",
                    ],
                    ["Luxury Camps", "Exceptional", "Exceptional"],
                    ["Ease for First Timers", "Excellent", "Excellent"],
                    ["Great Migration", "Excellent", "Excellent"],
                    [
                      "Safari + Beach Combinations",
                      "Strong",
                      "Outstanding with Zanzibar",
                    ],
                    ["Family Safaris", "Outstanding", "Very Strong"],
                    ["Photography", "Excellent", "Excellent"],
                    ["Fly In Safari Infrastructure", "Strong", "Strong"],
                    ["Wildlife Density", "Extremely High", "Extremely High"],
                  ].map(([feature, kenya, tanzania], i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "Bafs-tr-even" : "Bafs-tr-odd"}
                    >
                      <td className="Bafs-td Bafs-td-feature">{feature}</td>
                      <td className="Bafs-td">{kenya}</td>
                      <td className="Bafs-td">{tanzania}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── WILDLIFE ──────────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-white" id="Bafs-wildlife">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              What Animals Will You See on Your First Safari?
            </h2>
            <div className="Bafs-accent-line" />
            <p className="Bafs-body-text" style={{ marginTop: "20px" }}>
              Most first time safari travelers hope to see the famous Big Five.
              But one of the greatest surprises is that safari is not only about
              predators.
            </p>
          </div>

          <div className="Bafs-wildlife-grid">
            {/* The Big Five */}
            <div className="Bafs-wildlife-col">
              <div
                className="Bafs-wildlife-card-img"
                style={{ backgroundImage: `url(${BafricaImage4})` }}
              >
                <div className="Bafs-wildlife-card-overlay" />
              </div>
              <div className="Bafs-wildlife-card-body">
                <h4 className="Bafs-wildlife-col-title">The Big Five</h4>
                <div className="Bafs-wildlife-items">
                  {["Lion", "Leopard", "Elephant", "Rhino", "Cape Buffalo"].map(
                    (animal, i) => (
                      <div key={i} className="Bafs-wildlife-item">
                        <Star
                          size={16}
                          strokeWidth={1.5}
                          className="Bafs-wildlife-icon"
                        />
                        <span>{animal}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Also Frequently Seen */}
            <div className="Bafs-wildlife-col">
              <div
                className="Bafs-wildlife-card-img"
                style={{ backgroundImage: `url(${BafricaImage5})` }}
              >
                <div className="Bafs-wildlife-card-overlay" />
              </div>
              <div className="Bafs-wildlife-card-body">
                <h4 className="Bafs-wildlife-col-title">Also Frequently Seen</h4>
                <div className="Bafs-wildlife-items">
                  {[
                    "Cheetahs",
                    "Giraffes",
                    "Hippos",
                    "Crocodiles",
                    "Hyenas",
                    "Wildebeest",
                    "Zebra",
                    "Thousands of bird species",
                  ].map((animal, i) => (
                    <div key={i} className="Bafs-wildlife-item">
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.5}
                        className="Bafs-wildlife-icon"
                      />
                      <span>{animal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="Bafs-wildlife-quote-col">
              <div className="Bafs-wildlife-quote-card">
                <Quote
                  size={32}
                  strokeWidth={1}
                  className="Bafs-wildlife-quote-icon"
                />
                <p className="Bafs-wildlife-quote-text">
                  Some of the most emotional moments happen quietly. Watching
                  elephants move silently through the bush. Listening to lions
                  roaring at night from your tented camp. Africa has a way of
                  slowing people down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFARI COSTS ──────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft" id="Bafs-cost">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              How Much Does a Luxury African <br /> Safari Cost?
            </h2>
            <div className="Bafs-accent-line" />
            <div
              className="Bafs-section-intro-text"
              style={{ marginTop: "32px" }}
            >
              <p className="Bafs-body-text">
                One of the biggest misconceptions about safari is that there is
                one standard price.
              </p>
              <p
                className="Bafs-body-text"
                style={{ marginTop: "24px", fontWeight: 600 }}
              >
                In reality, luxury African safaris vary enormously depending on:
              </p>
              <div className="Bafs-factors-wrap">
                {[
                  "Seasonality",
                  "Migration timing",
                  "Internal flights",
                  "Camp level",
                  "Private guiding",
                  "Length of stay",
                  "Conservation areas",
                  "Charter flights",
                  "Group size",
                ].map((item, i) => (
                  <div key={i} className="Bafs-factor-tag">
                    <div className="Bafs-factor-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="Bafs-pricing-grid">
            {/* Premium */}
            <div className="Bafs-pricing-card">
              <div className="Bafs-pricing-card-inner">
                <div className="Bafs-pricing-icon">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="Bafs-pricing-tier">Premium Safari Experience</h3>
                <div className="Bafs-pricing-amount">$8,000 to $15,000+</div>
                <div className="Bafs-pricing-per">Per Person</div>
                <div className="Bafs-pricing-divider" />
                <p className="Bafs-pricing-desc">
                  This level typically includes beautiful luxury tented camps or
                  lodges, highly trained guides, game drives, most meals, and
                  thoughtfully designed itineraries. For many first time safari
                  travelers, this range provides an excellent balance between
                  comfort, luxury, and value.
                </p>
              </div>
            </div>

            {/* Luxury */}
            <div className="Bafs-pricing-card Bafs-pricing-featured">
              <div className="Bafs-pricing-card-inner">
                <div className="Bafs-pricing-badge">Most Popular</div>
                <div className="Bafs-pricing-icon">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="Bafs-pricing-tier">Luxury Safari Experience</h3>
                <div className="Bafs-pricing-amount">$15,000 to $30,000+</div>
                <div className="Bafs-pricing-per">Per Person</div>
                <div className="Bafs-pricing-divider" />
                <p className="Bafs-pricing-desc">
                  This category often includes ultra luxury camps, fly in
                  safaris, exceptional guiding, premium migration experiences,
                  and highly personalized service. Many luxury honeymoon safaris
                  and family safaris fall into this range.
                </p>
              </div>
              <div className="Bafs-pricing-card-glow" />
            </div>

            {/* Ultra Luxury */}
            <div className="Bafs-pricing-card">
              <div className="Bafs-pricing-card-inner">
                <div className="Bafs-pricing-icon">
                  <Sparkles size={32} strokeWidth={1.5} />
                </div>
                <h3 className="Bafs-pricing-tier">
                  Ultra Luxury Safari Experience
                </h3>
                <div className="Bafs-pricing-amount">$30,000+</div>
                <div className="Bafs-pricing-per">Per Person</div>
                <div className="Bafs-pricing-divider" />
                <p className="Bafs-pricing-desc">
                  At the highest level, safaris become deeply customized and
                  extraordinarily exclusive. These experiences may include
                  private villas, private safari vehicles, helicopter transfers,
                  private charters, elite guiding, and access to some of
                  Africa’s most extraordinary camps and conservation
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SO EXPENSIVE ──────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-white">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">Why Are African Safaris So Expensive?</h2>
            <div className="Bafs-accent-line" />
          </div>

          <div className="Bafs-expensive-split">
            <div className="Bafs-expensive-content">
              <p
                className="Bafs-body-text"
                style={{ textAlign: "left", marginBottom: "24px" }}
              >
                Luxury safaris operate in remote wilderness areas where nearly
                everything must be transported long distances including food,
                fuel, supplies, and staff support.
              </p>
              <p
                className="Bafs-body-text"
                style={{
                  textAlign: "left",
                  fontWeight: 600,
                  marginBottom: "0",
                }}
              >
                Safari pricing also includes:
              </p>

              <div className="Bafs-expensive-list">
                {[
                  "Conservation fees",
                  "National park fees",
                  "Expert guiding",
                  "Safari vehicles",
                  "Luxury accommodations",
                  "Internal charter flights",
                  "Hospitality staff",
                  "Wildlife preservation support",
                ].map((item, i) => (
                  <div key={i} className="Bafs-expensive-list-item">
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="Bafs-expensive-check"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="Bafs-expensive-highlight">
              <div className="Bafs-expensive-highlight-title">
                <Heart
                  size={20}
                  className="Bafs-expensive-highlight-icon"
                  fill="currentColor"
                />
                Community & Conservation Impact
              </div>
              <p className="Bafs-expensive-highlight-text">
                Many luxury safari operators also invest heavily in local
                communities, schools, conservation initiatives, and anti
                poaching programs throughout East Africa. Your safari investment
                directly supports the preservation of these extraordinary
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── VIDEO SECTION ────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft" id="Bafs-video">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">Experience the Magic of an African Safari</h2>
            <div className="Bafs-accent-line" />
            <p className="Bafs-body-text" style={{ marginTop: "20px" }}>
              Watch this breathtaking showcase of East Africa's wildlife and
              landscapes to get a glimpse of what awaits you on your first
              luxury safari.
            </p>
          </div>
          <div className="Bafs-video-wrapper">
            <iframe
              className="Bafs-video-iframe"
              src="https://www.youtube.com/embed/tCePzjB03UI"
              title="African Safari Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>


      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-dark" id="Bafs-mistakes">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2-white">
              Common Mistakes First Time Safari Travelers Make
            </h2>
            <div className="Bafs-accent-line-white" />
            <p className="Bafs-body-text-white" style={{ marginTop: "20px" }}>
              One of the biggest advantages of working with a safari specialist
              is avoiding common planning mistakes.
            </p>
          </div>

          <div className="Bafs-mistakes-grid">
            {[
              {
                title: "Trying to Visit Too Many Parks",
                desc: "Safari should not feel rushed. Spending fewer nights in too many locations often leaves travelers exhausted.",
              },
              {
                title: "Booking Solely Based on Price",
                desc: "Not all safaris are created equally. Guiding quality, camp location, conservation models, and logistics vary enormously.",
              },
              {
                title: "Choosing the Wrong Season",
                desc: "Migration timing, weather, crowd levels, and wildlife movement can dramatically impact the safari experience.",
              },
              {
                title: "Underestimating Internal Flights",
                desc: "Africa is vast. Distances between parks are often much greater than travelers expect.",
              },
              {
                title: "Ignoring Camp Style Differences",
                desc: "Some travelers prefer classic luxury tented camps while others prioritize air conditioning, pools, family accommodations, or modern design.",
              },
            ].map((item, i) => (
              <div key={i} className="Bafs-mistake-card">
                <div className="Bafs-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="Bafs-mistake-title">{item.title}</h4>
                <p className="Bafs-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW MANY DAYS ─────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-white">
        <div className="Bafs-container">
          <div className="Bafs-days-split">
            <div className="Bafs-days-content">
              <div className="Bafs-section-header Bafs-intro-header">
                <h2 className="Bafs-h2">
                  How Many Days Do You Need for a First Safari?
                </h2>
                <div className="Bafs-accent-line" />
              </div>
              <p className="Bafs-intro-text Bafs-intro-spacing">
                For most luxury safari travelers, spending at least 7 to 10 days
                in Africa is recommended, visiting 2 to 4 safari regions with at
                least three nights per camp whenever possible.
              </p>
              <div className="Bafs-days-recs">
                {[
                  {
                    label: "7–10 days",
                    desc: "Minimum recommended time in Africa",
                  },
                  {
                    label: "2–4 regions",
                    desc: "Maximum safari regions for a well-paced trip",
                  },
                  { label: "3+ nights", desc: "Per camp whenever possible" },
                ].map((rec, i) => (
                  <div key={i} className="Bafs-days-rec-item">
                    <div className="Bafs-days-rec-label">{rec.label}</div>
                    <div className="Bafs-days-rec-desc">{rec.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Bafs-days-extensions">
              <h3 className="Bafs-days-ext-title">Popular Safari Extensions</h3>
              <p className="Bafs-days-ext-sub">
                Many travelers combine safari with:
              </p>
              {["Zanzibar", "Seychelles", "Cape Town", "Victoria Falls"].map(
                (dest, i) => (
                  <div key={i} className="Bafs-days-ext-item">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="Bafs-days-ext-icon"
                    />
                    <span>{dest}</span>
                  </div>
                ),
              )}
              <p className="Bafs-days-ext-note">
                These combinations create an incredible blend of adventure and
                recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MICATO ────────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft" id="Bafs-micato">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              Why We Often Recommend Micato Safaris for First Time Safari
              Travelers
            </h2>
            <div className="Bafs-accent-line" />
          </div>
          <div className="Bafs-micato-split">
            <div className="Bafs-micato-content">
              <p className="Bafs-micato-body-text">
                Over the years, I have worked with many luxury safari companies
                throughout Africa, but one of the reasons we frequently
                recommend Micato Safaris for first time safari travelers is
                because of their extraordinary service, logistics, guiding, and
                attention to detail.
              </p>
              <p className="Bafs-micato-body-text">
                For travelers planning Africa for the very first time, Micato
                helps remove much of the uncertainty that can feel intimidating
                when organizing a safari independently.
              </p>
              <p className="Bafs-micato-body-text">
                Their itineraries are exceptionally well executed, their guides
                are among the best in the industry, and their ability to
                personalize experiences for families, couples, and luxury
                travelers is one of the reasons they continue to stand apart in
                the East Africa safari space.
              </p>
            </div>

            <div className="Bafs-micato-gallery">
              <div className="Bafs-micato-img-card Bafs-micato-img-2">
                <img src={BafricaImage7} alt="Safari Landscape" />
              </div>
              <div className="Bafs-micato-img-card Bafs-micato-img-1">
                <img src={BafricaImage6} alt="Luxury Safari Experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ANGELA ──────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-white" id="Bafs-about">
        <div className="Bafs-container">
          <div className="Bafs-about-split">
            <div className="Bafs-about-left-col">
              <div className="Bafs-about-img-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes"
                  className="Bafs-about-img"
                />
                <div className="Bafs-about-img-accent" />
              </div>

              <div className="Bafs-about-stats">
                {[
                  { number: "121+", label: "Countries Visited" },
                  { number: "40+", label: "Years Experience" },
                  { number: "10+", label: "Safaris Since 2020" },
                ].map((stat, i) => (
                  <div key={i} className="Bafs-about-stat">
                    <div className="Bafs-about-stat-number">{stat.number}</div>
                    <div className="Bafs-about-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Bafs-about-content">
              <div className="Bafs-about-header">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <Sparkles size={16} className="Bafs-wildlife-icon" />
                  <span
                    className="Bafs-about-eyebrow"
                    style={{ marginBottom: 0 }}
                  >
                    Luxury Safari Expert
                  </span>
                </div>
                <h2
                  className="Bafs-h2"
                  style={{ textAlign: "left"}}
                >
                  About Angela Hughes
                </h2>
                <div
                  className="Bafs-accent-line"
                  style={{ margin: "16px 0 32px" }}
                />
              </div>

              <p className="Bafs-about-text">
                Angela Hughes is the CEO of Trips & Ships Luxury Travel and
                founder of Luxury Travel University. She has traveled to more
                than 121 countries and specializes in luxury safaris,
                expeditions, cruises, and custom global travel experiences.
              </p>
              <p className="Bafs-about-text">
                Angela was named Luxury Travel Influencer of the Year by Travel
                Leaders Network and has been featured in Travel Weekly,
                TravelPulse, Insider Travel Report, Travel Market Report, Luxury
                Travel Advisor, and the Wall Street Journal.
              </p>
              <p className="Bafs-about-text">
                In addition to her luxury travel expertise, Angela has spent
                years involved in humanitarian and sustainable tourism
                initiatives in developing countries around the world including
                Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST CTA ────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-dark2">
        <div className="Bafs-container">
          <div className="Bafs-specialist-wrap">
            <div className="Bafs-specialist-quote-icon">
              <Quote size={48} strokeWidth={1} />
            </div>
            <h2 className="Bafs-specialist-title">
              Should You Use a Safari Specialist?
            </h2>
            <div
              className="Bafs-accent-line-white"
              style={{ margin: "20px auto" }}
            />
            <p className="Bafs-specialist-text">
              Absolutely. African safaris are unlike almost any other luxury
              travel experience. Migration timing, wildlife movement, internal
              flights, conservation areas, guiding quality, camp selection, and
              logistics all matter enormously. A well designed safari should
              feel seamless from the moment you arrive in Africa until the
              moment you return home. The difference between an average safari
              and an extraordinary safari often comes down to planning.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="Bafs-section Bafs-bg-soft" id="Bafs-faq">
        <div className="Bafs-container">
          <div className="Bafs-section-header">
            <h2 className="Bafs-h2">
              Frequently Asked Questions About First Time African Safaris
            </h2>
            <div className="Bafs-accent-line" />
            <p className="Bafs-faq-intro">
              These are the most common questions we are asked when planning a
              first African safari.
            </p>
          </div>
          <BafsFAQ />
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section
        className="Bafs-final-cta-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BafricaImage1})`,
        }}
      >
        <div className="Bafs-container">
          <div className="Bafs-final-card">
            <div className="Bafs-final-card-content">
              <h2 className="Bafs-final-title">
                Planning Your First African Safari
              </h2>
              <div className="Bafs-final-divider" />
              <p className="Bafs-final-text">
                At Trips & Ships Luxury Travel, we help travelers design highly
                customized luxury safari experiences throughout East Africa
                including Kenya, Tanzania, Rwanda, Botswana, and beyond.
              </p>

              <div className="Bafs-final-list-grid">
                {[
                  "A first time luxury safari",
                  "A family safari",
                  "A honeymoon safari",
                  "Great Migration experiences",
                  "Private guides",
                  "Luxury tented camps",
                  "Fly-in safaris",
                  "Safari and beach combinations",
                ].map((item, i) => (
                  <div key={i} className="Bafs-final-feature-item">
                    <Check size={14} className="Bafs-final-check" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="Bafs-final-text">
                …our team works closely with trusted luxury safari partners to
                create personalized safari experiences tailored to each
                traveler’s goals, comfort level, and style of travel.
              </p>

              <div className="Bafs-final-actions">
                <button
                  className="Bafs-btn-luxury"
                  onClick={() =>
                    (window.location.href = "mailto:angela@tripsandships.com")
                  }
                >
                  Begin Planning My Safari
                  <ArrowRight size={22} className="Bafs-btn-icon" />
                </button>
              </div>
            </div>
            <div className="Bafs-card-glow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestAfricaSafari;
