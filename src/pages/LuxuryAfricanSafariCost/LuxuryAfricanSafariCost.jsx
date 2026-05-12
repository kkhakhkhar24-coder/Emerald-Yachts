import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Compass,
  DollarSign,
  Users,
  Activity,
  ShieldCheck,
  MapPin,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plane,
  Binoculars,
  Home,
  Heart,
  Zap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Target,
  Award,
  Navigation,
  Info,
  LayoutGrid,
  Ship,
  Plus,
  Minus,
  Shield,
  Crown,
  Diamond,
  Check,
  ShieldAlert,
  XCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import "./LuxuryAfricanSafariCost.css";

// Hero Images
import hero1 from "../../assets/LuxuryAfricanSafariCost/Hero_1.jpg";
import hero2 from "../../assets/LuxuryAfricanSafariCost/Hero_2.jpg";
import hero3 from "../../assets/LuxuryAfricanSafariCost/Hero_3.jpg";

// Profile Image
import profileImg from "../../assets/LuxuryAfricanSafariCost/Angela_Hughes.jpg";

// Brand Logos
import logo1 from "../../assets/LuxuryAfricanSafariCost/Travel_Weekly.webp";
import logo2 from "../../assets/LuxuryAfricanSafariCost/TravelPulse.webp";
import logo3 from "../../assets/LuxuryAfricanSafariCost/Travel_Leaders_Network.webp";
import logo4 from "../../assets/LuxuryAfricanSafariCost/The_Wall_Street_Journal.webp";
import logo5 from "../../assets/LuxuryAfricanSafariCost/The_Washington_Post.webp";
import logo6 from "../../assets/LuxuryAfricanSafariCost/Travel_Age_West.webp";
import logo7 from "../../assets/LuxuryAfricanSafariCost/Travelmarket_Report.webp";
import logo8 from "../../assets/LuxuryAfricanSafariCost/Insider_Travel_Report.webp";

// Local Images
import imgWhyCostsMore from "../../assets/LuxuryAfricanSafariCost/MOST_TRAVEL.jpg";
import imgKenya from "../../assets/LuxuryAfricanSafariCost/KENYA.jpg";
import imgTanzania from "../../assets/LuxuryAfricanSafariCost/TANZANIA.jpg";
import imgHoneymoon from "../../assets/LuxuryAfricanSafariCost/HONEYMOON.jpg";
import imgCalving from "../../assets/LuxuryAfricanSafariCost/JAN_MAR.jpg";
import imgJune from "../../assets/LuxuryAfricanSafariCost/JUNE.jpg";
import imgNovember from "../../assets/LuxuryAfricanSafariCost/NOVEMBER.jpg";

const imgFamily =
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80";

export default function LuxuryAfricanSafariCost() {
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [openFaq, setOpenFaq] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showBioFull, setShowBioFull] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);

  const faqItems = [
    {
      q: "How much does a luxury African safari cost for two people?",
      a: "Most luxury safaris range between $25,000 and $45,000+ per couple depending on season, camps, flights, and itinerary design.",
    },
    {
      q: "Why are African safaris so expensive?",
      a: "Safaris involve remote operations, conservation fees, guides, aircraft, and highly specialized logistics.",
    },
    {
      q: "What is included in a luxury safari?",
      a: "Typically accommodations, guiding, game drives, many meals, park fees, and internal safari logistics.",
    },
    {
      q: "Are luxury safaris worth the money?",
      a: "When designed correctly, luxury safaris can be among the most transformative travel experiences in the world.",
    },
    {
      q: "How much does a Kenya safari cost?",
      a: "Luxury Kenya safaris often range from $18,000 to $45,000+ per couple.",
    },
    {
      q: "Is Tanzania more expensive than Kenya?",
      a: "Tanzania can sometimes cost more due to longer routing and additional internal flights.",
    },
    {
      q: "How much does a Great Migration safari cost?",
      a: "Migration safaris during peak river crossing season often range from $35,000 to $60,000+ per couple.",
    },
    {
      q: "Can safari be all inclusive?",
      a: "Many luxury safari camps include meals, drinks, guiding, and activities.",
    },
    {
      q: "What is the cheapest time to go on safari?",
      a: "Shoulder and green seasons often provide the best value.",
    },
    {
      q: "Do luxury safaris include flights?",
      a: "International airfare is often separate, while bush flights may be included depending on itinerary structure.",
    },
    {
      q: "How much does a family safari cost?",
      a: "Luxury family safaris often begin around $30,000 and increase significantly based on size and routing.",
    },
    {
      q: "Are private safari guides worth it?",
      a: "Yes, particularly for photographers, families, and migration safaris.",
    },
    {
      q: "How early should I book a safari?",
      a: "9–18 months in advance for peak migration season.",
    },
    {
      q: "What impacts safari pricing most?",
      a: "Season, camp level, private guiding, flights, and routing.",
    },
    {
      q: "Can I combine safari with beaches?",
      a: "Yes. Zanzibar, Seychelles, and the Maldives are common luxury pairings.",
    },
    {
      q: "Is safari better in Kenya or Tanzania?",
      a: "Both are exceptional, but they deliver different experiences depending on timing and goals.",
    },
    {
      q: "Do I need a travel advisor for safari planning?",
      a: "Safari logistics are complex and expert guidance dramatically impacts the outcome.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.tripsandships.com/luxury-african-safari-cost/#webpage",
        url: "https://www.tripsandships.com/luxury-african-safari-cost/",
        name: "Luxury African Safari Cost: What a High-End Safari Really Costs in 2027",
        description:
          "How much does a luxury African safari cost? Detailed 2027 pricing guide for Kenya, Tanzania, Great Migration safaris, private guides, luxury camps, family safaris, honeymoon pricing, and what actually impacts safari costs.",
        isPartOf: {
          "@id": "https://www.tripsandships.com/#website",
        },
        about: [
          {
            "@type": "Thing",
            name: "Luxury African Safari",
          },
          {
            "@type": "Place",
            name: "Kenya",
          },
          {
            "@type": "Place",
            name: "Tanzania",
          },
          {
            "@type": "Thing",
            name: "Great Migration Safari",
          },
          {
            "@type": "Thing",
            name: "Safari Cost",
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/images/luxury-african-safari-cost.jpg",
        },
      },
      {
        "@type": "Article",
        "@id":
          "https://www.tripsandships.com/luxury-african-safari-cost/#article",
        headline:
          "Luxury African Safari Cost: What a High-End Safari Really Costs",
        description:
          "A detailed luxury safari pricing guide explaining African safari costs, Kenya and Tanzania safari pricing, Great Migration safari costs, family safari budgets, honeymoon safari pricing, and what impacts safari value.",
        author: {
          "@type": "Person",
          "@id": "https://www.tripsandships.com/#angela-hughes",
          name: "Angela Hughes",
          url: "https://www.tripsandships.com/about-angela-hughes",
          jobTitle: "CEO of Trips & Ships Luxury Travel",
          worksFor: {
            "@id": "https://www.tripsandships.com/#travelagency",
          },
          knowsAbout: [
            "Luxury travel",
            "African safaris",
            "Luxury safari planning",
            "Kenya safaris",
            "Tanzania safaris",
            "Great Migration safaris",
            "Safari pricing",
            "Luxury family safaris",
            "Safari honeymoons",
          ],
          award: [
            "Luxury Travel Influencer of the Year by Travel Leaders Network",
            "Most Influential Women in Travel by TravelPulse",
            "Travel Weekly Magellan Awards",
          ],
        },
        publisher: {
          "@id": "https://www.tripsandships.com/#travelagency",
        },
        mainEntityOfPage: {
          "@id":
            "https://www.tripsandships.com/luxury-african-safari-cost/#webpage",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a luxury African safari cost for two people?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most luxury African safaris range between $25,000 and $45,000 or more per couple depending on season, camp level, private guiding, internal flights, and itinerary design.",
            },
          },
          {
            "@type": "Question",
            name: "Why are African safaris so expensive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "African safaris are expensive because they involve remote operations, conservation fees, highly trained guides, bush aircraft, limited camp inventory, and complex logistics in protected wildlife regions.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in a luxury safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury safaris typically include accommodations, game drives, many meals, guiding, park or conservation fees, and internal safari logistics. Inclusions vary by camp, country, and itinerary.",
            },
          },
          {
            "@type": "Question",
            name: "Are luxury safaris worth the money?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A luxury safari can be worth the investment when the itinerary is designed correctly. The right camp location, guide quality, routing, timing, and operator relationships can dramatically improve the experience.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a Kenya luxury safari cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A luxury Kenya safari often ranges from $18,000 to $45,000 or more per couple depending on the Maasai Mara camp selected, travel season, internal flights, and whether the safari includes private guiding.",
            },
          },
          {
            "@type": "Question",
            name: "Is Tanzania more expensive than Kenya for safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tanzania can sometimes cost more than Kenya because itineraries may involve longer distances, multiple safari regions, additional bush flights, and extended stays across the Serengeti, Ngorongoro Crater, or other areas.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a Great Migration safari cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Great Migration safari during peak river crossing season often ranges from $35,000 to $60,000 or more per couple, especially when using top camps, private guiding, and strategic camp placement.",
            },
          },
          {
            "@type": "Question",
            name: "Can a luxury safari be all inclusive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many luxury safari camps include meals, drinks, guiding, game drives, and activities, but international airfare, some internal flights, premium beverages, visas, gratuities, and special experiences may be additional.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cheapest time to go on safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Shoulder seasons and green seasons often provide the best value for luxury safaris. January through March, June, and November can offer strong wildlife experiences with better pricing than peak river crossing season.",
            },
          },
          {
            "@type": "Question",
            name: "Do luxury safaris include flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "International airfare is often separate from safari pricing. Internal bush flights or charter flights may be included depending on how the itinerary is structured and which safari operator is used.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a luxury family safari cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury family safaris often begin around $30,000 and can increase significantly depending on family size, private vehicles, family tents or villas, routing, guide selection, and travel season.",
            },
          },
          {
            "@type": "Question",
            name: "Are private safari guides worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Private safari guides are often worth the investment, especially for families, photographers, honeymooners, and Great Migration safaris. A private guide can improve pacing, positioning, flexibility, and the overall quality of the experience.",
            },
          },
          {
            "@type": "Question",
            name: "How early should I book a luxury safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury safaris should often be booked 9 to 18 months in advance, especially for peak Great Migration season, holiday periods, family travel, and top luxury camps with limited inventory.",
            },
          },
          {
            "@type": "Question",
            name: "What impacts safari pricing the most?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Safari pricing is most affected by travel season, camp level, camp location, private versus shared guiding, internal flights, charter aircraft, country combination, and overall itinerary design.",
            },
          },
          {
            "@type": "Question",
            name: "Can I combine a safari with a beach vacation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Popular luxury safari and beach combinations include Tanzania with Zanzibar, Kenya with the Seychelles, and Southern Africa with the Indian Ocean islands.",
            },
          },
          {
            "@type": "Question",
            name: "Is safari better in Kenya or Tanzania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kenya and Tanzania are both exceptional safari destinations, but they deliver different experiences. Kenya often works well for first-time travelers and shorter trips, while Tanzania is ideal for longer, more immersive safaris.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a travel advisor for safari planning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A knowledgeable travel advisor is highly valuable for safari planning because camp placement, timing, routing, guide quality, and operator selection directly impact the outcome of the trip.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.tripsandships.com/luxury-african-safari-cost/#breadcrumb",
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
            name: "Luxury Safaris",
            item: "https://www.tripsandships.com/luxury-safaris/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Luxury African Safari Cost",
            item: "https://www.tripsandships.com/luxury-african-safari-cost/",
          },
        ],
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com",
        telephone: "+1-603-860-3274",
        email: "sales@tripsandships.com",
        areaServed: "Worldwide",
        founder: {
          "@id": "https://www.tripsandships.com/#angela-hughes",
        },
        knowsAbout: [
          "Luxury travel",
          "African safaris",
          "Luxury safari pricing",
          "Kenya luxury safaris",
          "Tanzania luxury safaris",
          "Great Migration safaris",
          "Luxury family safaris",
          "Safari honeymoons",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/images/logo.png",
        },
      },
    ],
  };

  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  return (
    <div className="lasc-root">
      <Helmet>
        <title>
          Luxury African Safari Cost: What a High-End Safari Really Costs in
          2027
        </title>
        <meta
          name="description"
          content="How much does a luxury African safari cost? Detailed 2027 pricing guide for Kenya, Tanzania, Great Migration safaris, private guides, luxury camps, family safaris, honeymoon pricing, and what actually impacts safari costs."
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/luxury-african-safari-cost/"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="lasc-section lasc-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`lasc-hero-bg ${index === currentHero ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="lasc-hero-overlay"></div>

        <div className="lasc-container lasc-hero-inner">
          <h1 className="lasc-h1 lasc-h1-hero">
            Luxury African Safari Cost <br /> What a High-End Safari Really
            Costs
          </h1>

          <div className="lasc-hero-text">
            <p>
              Luxury safari pricing is one of the most misunderstood parts of
              travel. Many travelers begin researching Africa expecting safari
              pricing to function like a traditional beach vacation or European
              hotel stay. It does not.
            </p>
            <p>
              Luxury safaris are highly logistical experiences involving
              aircraft, conservation fees, remote camps, migration movement,
              private guides, and some of the most specialized hospitality
              operations in the world.
            </p>
          </div>

          <div className={`lasc-hero-details ${showAnswer ? "expanded" : ""}`}>
            <div className="lasc-snippet-card">
              <div className="lasc-snippet-header">
                <h2 className="lasc-snippet-title">
                  <Sparkles size={18} className="lasc-accent-icon" />
                  Quick Answer: What determines the difference between a $10,000
                  and $40,000 safari?
                </h2>
                <p className="lasc-snippet-intro">
                  The difference between a $10,000 safari and a $40,000 safari
                  is often{" "}
                  <strong className="lasc-bold">
                    operational, not cosmetic
                  </strong>
                  .
                </p>
              </div>

              <div className="lasc-snippet-grid">
                <div className="lasc-snippet-feature">
                  <Target size={20} className="lasc-feature-icon" />
                  <div className="lasc-feature-text">
                    <span className="lasc-feature-label">Movement</span>
                    <p>
                      Positioning directly in wildlife movement vs. hours in
                      transit
                    </p>
                  </div>
                </div>
                <div className="lasc-snippet-feature">
                  <Users size={20} className="lasc-feature-icon" />
                  <div className="lasc-feature-text">
                    <span className="lasc-feature-label">Guiding</span>
                    <p>Private guiding vs. crowded game vehicles</p>
                  </div>
                </div>
                <div className="lasc-snippet-feature">
                  <MapPin size={20} className="lasc-feature-icon" />
                  <div className="lasc-feature-text">
                    <span className="lasc-feature-label">Placement</span>
                    <p>Strategic camp placement vs. generic routing</p>
                  </div>
                </div>
              </div>

              <div className="lasc-expert-takeaway">
                <div className="lasc-expert-badge">Expert Takeaway</div>
                <p className="lasc-expert-quote">
                  "In Africa, location matters more than luxury branding. With
                  over four decades in the travel industry, travel to 121+
                  countries, and extensive safari experience across East Africa,
                  Angela Hughes helps travelers understand not only what a
                  luxury safari costs, but why. Because the cheapest safari and
                  the right safari are almost never the same thing."
                </p>
              </div>
            </div>
          </div>

          <button
            className="lasc-hero-toggle"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <span className="lasc-flex-center">
              {showAnswer ? (
                <Minus size={14} style={{ marginRight: "6px" }} />
              ) : (
                <Plus size={14} style={{ marginRight: "6px" }} />
              )}
              {showAnswer ? "Hide Quick Answer" : "View Quick Answer"}
            </span>
          </button>

          <div className="lasc-hero-btns">
            <a href="#consultation" className="lasc-btn-primary">
              Schedule a 15-Minute Luxury Safari Consultation
            </a>
            <p className="lasc-cta-subtext">
              If you are investing this much into Africa, the itinerary needs to
              be designed correctly.
            </p>
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN (Continuous Marquee) ── */}
      <section className="lasc-media-marquee">
        <div className="lasc-marquee-track">
          <div className="lasc-marquee-content">
            <img src={logo1} alt="Travel Weekly" />
            <img src={logo2} alt="TravelPulse" />
            <img src={logo3} alt="Travel Leaders Network" />
            <img src={logo4} alt="The Wall Street Journal" />
            <img src={logo5} alt="The Washington Post" />
            <img src={logo6} alt="Travel Age West" />
            <img src={logo7} alt="Travel Market Report" />
            <img src={logo8} alt="Insider Travel Report" />

            {/* Duplicate for seamless continuous loop */}
            <img src={logo1} alt="Travel Weekly" />
            <img src={logo2} alt="TravelPulse" />
            <img src={logo3} alt="Travel Leaders Network" />
            <img src={logo4} alt="The Wall Street Journal" />
            <img src={logo5} alt="The Washington Post" />
            <img src={logo6} alt="Travel Age West" />
            <img src={logo7} alt="Travel Market Report" />
            <img src={logo8} alt="Insider Travel Report" />
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section className="btgms-section btgms-specialization"   style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="btgms-container">
          <h2 className="btgms-h2">
            Experts in African Safari & Expedition Travel
          </h2>
          <p className="btgms-p">
            Angela Hughes and Trips & Ships Luxury Travel specialize in custom
            luxury African safaris and expedition travel throughout Kenya,
            Tanzania, Botswana, South Africa, Zimbabwe, Rwanda, Uganda, and
            beyond. With firsthand safari experience across Africa, decades of
            luxury travel expertise, and relationships with some of the world’s
            most respected safari partners, Angela and her team help travelers
            navigate the details that transform a safari from simply beautiful
            to deeply meaningful. From witnessing the Great Migration to
            designing multi generational journeys, gorilla trekking experiences,
            conservation focused travel, and luxury safari itineraries tailored
            to individual travel styles, Trips & Ships Luxury Travel provides
            concierge level guidance for travelers seeking a highly personalized
            Africa experience.
          </p>
        </div>
      </section>

      {/* ── 3. WHY LUXURY AFRICAN SAFARIS COST MORE ── */}
      <section className="lasc-why-more">
        <div className="lasc-why-more-inner">
          <div className="lasc-why-split">
            <div className="lasc-why-content-side">
              <h2 className="lasc-h2">
                WHY LUXURY AFRICAN SAFARIS COST MORE THAN MOST TRAVEL
              </h2>
              <div className="lasc-accent-line"></div>
              <p className="lasc-p">
                Unlike traditional vacations, luxury safaris involve layered
                operational costs that most travelers never see. These include:
              </p>

              <div className="lasc-operational-layers-v2">
                {[
                  {
                    num: "01",
                    text: "remote bush flights",
                    icon: <Plane size={20} />,
                  },
                  {
                    num: "02",
                    text: "conservation and park fees",
                    icon: <ShieldCheck size={20} />,
                  },
                  {
                    num: "03",
                    text: "highly trained guides",
                    icon: <Binoculars size={20} />,
                  },
                  {
                    num: "04",
                    text: "private safari vehicles",
                    icon: <Activity size={20} />,
                  },
                  {
                    num: "05",
                    text: "migration-based positioning",
                    icon: <Navigation size={20} />,
                  },
                  {
                    num: "06",
                    text: "small camp inventory",
                    icon: <LayoutGrid size={20} />,
                  },
                ].map((layer, idx) => (
                  <div className="lasc-layer-pill" key={idx}>
                    <span className="lasc-layer-pill-num">{layer.num}</span>
                    <span className="lasc-layer-pill-text">{layer.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lasc-why-image-side">
              <img
                src={imgWhyCostsMore}
                alt="Luxury Safari Experience"
                className="lasc-split-img"
              />
              <div className="lasc-img-overlay-text">
                Built around access & expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT DOES A LUXURY SAFARI ACTUALLY COST? (New Look) ── */}
      <section className="lasc-pricing-v3">
        <div className="lasc-container">
          <div className="lasc-pricing-header-v3">
            <h2 className="lasc-h2">
              What Does a Luxury Safari Actually Cost?
            </h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
          </div>

          <div className="lasc-pricing-grid-v3">
            {/* Entry Luxury */}
            <div className="lasc-pricing-card-v3">
              <div className="lasc-card-header-v3">
                <ShieldCheck className="lasc-card-icon-v3" size={24} />
                <h3 className="lasc-h3">Entry Luxury</h3>
              </div>
              <p className="lasc-p">
                Shared safari, regional flights, upscale camps
              </p>
              <div className="lasc-card-price-v3">
                <div className="lasc-price-value-v3">$12,000–18,000</div>
                <span className="lasc-price-unit-v3">per couple</span>
              </div>
            </div>

            {/* Premium Luxury */}
            <div className="lasc-pricing-card-v3 lasc-pricing-card-v3--featured">
              <div className="lasc-card-header-v3">
                <Crown className="lasc-card-icon-v3" size={24} />
                <h3 className="lasc-h3">Premium Luxury</h3>
              </div>
              <p className="lasc-p">
                Luxury camps, excellent guides, strategic routing
              </p>
              <div className="lasc-card-price-v3">
                <div className="lasc-price-value-v3">$25,000–45,000</div>
                <span className="lasc-price-unit-v3">per couple</span>
              </div>
            </div>

            {/* Ultra Luxury */}
            <div className="lasc-pricing-card-v3">
              <div className="lasc-card-header-v3">
                <Diamond className="lasc-card-icon-v3" size={24} />
                <h3 className="lasc-h3">Ultra Luxury</h3>
              </div>
              <p className="lasc-p">
                Private charters, Singita-level properties, exclusive-use
                experiences
              </p>
              <div className="lasc-card-price-v3">
                <div className="lasc-price-value-v3">$50,000–250,000+</div>
                <span className="lasc-price-unit-v3">per couple</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BUDGET EXAMPLES (Safari Itinerary Ledger Design) ── */}
      {/* ── 5. REAL LUXURY SAFARI BUDGET EXAMPLES (New Look) ── */}
      <section className="lasc-budgets-v2">
        <div className="lasc-container">
          <div className="lasc-budgets-header-v2">
            <h2 className="lasc-h2">Real Luxury Safari Budget Examples</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
          </div>

          <div className="lasc-budgets-grid-v2">
            {/* Kenya Safari */}
            <div className="lasc-budget-card-v2">
              <div className="lasc-budget-card-top-v2">
                <span className="lasc-budget-meta-v2">7-DAY EXPERIENCE</span>
                <h3 className="lasc-h3">Kenya Luxury Safari</h3>
              </div>
              <div className="lasc-budget-card-body-v2">
                <ul className="lasc-budget-list-v2">
                  <li>
                    <Check size={16} /> luxury tented camp
                  </li>
                  <li>
                    <Check size={16} /> internal flights
                  </li>
                  <li>
                    <Check size={16} /> shared game drives
                  </li>
                  <li>
                    <Check size={16} /> premium safari guides
                  </li>
                </ul>
              </div>
              <div className="lasc-budget-card-footer-v2">
                <div className="lasc-budget-price-v2">$18,000–28,000</div>
                <span className="lasc-budget-unit-v2">per couple</span>
              </div>
            </div>

            {/* Migration Safari */}
            <div className="lasc-budget-card-v2 lasc-budget-card-v2--featured">
              <div className="lasc-budget-card-top-v2">
                <span className="lasc-budget-meta-v2">10-DAY EXPERIENCE</span>
                <h3 className="lasc-h3">Great Migration Safari</h3>
              </div>
              <div className="lasc-budget-card-body-v2">
                <ul className="lasc-budget-list-v2">
                  <li>
                    <Check size={16} /> two luxury camps
                  </li>
                  <li>
                    <Check size={16} /> migration season timing
                  </li>
                  <li>
                    <Check size={16} /> charter or bush flights
                  </li>
                  <li>
                    <Check size={16} /> private safari vehicle
                  </li>
                </ul>
              </div>
              <div className="lasc-budget-card-footer-v2">
                <div className="lasc-budget-price-v2">$35,000–60,000+</div>
                <span className="lasc-budget-unit-v2">per couple</span>
              </div>
            </div>

            {/* Kenya + Zanzibar */}
            <div className="lasc-budget-card-v2">
              <div className="lasc-budget-card-top-v2">
                <span className="lasc-budget-meta-v2">ITINERARY PAIRING</span>
                <h3 className="lasc-h3">Kenya + Zanzibar</h3>
              </div>
              <div className="lasc-budget-card-body-v2">
                <ul className="lasc-budget-list-v2">
                  <li>
                    <Check size={16} /> luxury bush camp
                  </li>
                  <li>
                    <Check size={16} /> boutique beach resort
                  </li>
                  <li>
                    <Check size={16} /> all transfers included
                  </li>
                  <li>
                    <Check size={16} /> guided island excursions
                  </li>
                </ul>
              </div>
              <div className="lasc-budget-card-footer-v2">
                <div className="lasc-budget-price-v2">$25,000–45,000+</div>
                <span className="lasc-budget-unit-v2">per couple</span>
              </div>
            </div>

            {/* Ultra Luxury Safari */}
            <div className="lasc-budget-card-v2">
              <div className="lasc-budget-card-top-v2">
                <span className="lasc-budget-meta-v2">
                  ULTRA LUXURY EXPEDITION
                </span>
                <h3 className="lasc-h3">Ultra Luxury East Africa Safari</h3>
              </div>
              <div className="lasc-budget-card-body-v2">
                <ul className="lasc-budget-list-v2">
                  <li>
                    <Check size={16} /> private charter aircraft
                  </li>
                  <li>
                    <Check size={16} /> exclusive-use camps
                  </li>
                  <li>
                    <Check size={16} /> Singita or ultra-premium operators
                  </li>
                  <li>
                    <Check size={16} /> multiple countries
                  </li>
                </ul>
              </div>
              <div className="lasc-budget-card-footer-v2">
                <div className="lasc-budget-price-v2">$80,000–250,000+</div>
                <span className="lasc-budget-unit-v2">starting price</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY EXPENSIVE (Modern High-End Explainer Design) ── */}
      <section className="lasc-why-section">
        <div className="lasc-why-inner">
          <div className="lasc-why-content">
            <h2 className="lasc-h2">Why Are African Safaris So Expensive?</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">
              This is one of the most searched safari questions online. The
              answer is not simple because safaris are not simple operations. A
              luxury safari may involve:
            </p>
          </div>

          <div className="lasc-why-pillar-grid">
            <div className="lasc-why-pillar">
              <Plane
                className="lasc-why-pillar-icon"
                size={32}
                strokeWidth={1}
              />
              <p className="lasc-why-pillar-text">
                bush aircraft into remote regions
              </p>
            </div>
            <div className="lasc-why-pillar">
              <Users
                className="lasc-why-pillar-icon"
                size={32}
                strokeWidth={1}
              />
              <p className="lasc-why-pillar-text">
                guides with decades of wildlife expertise
              </p>
            </div>
            <div className="lasc-why-pillar">
              <Home
                className="lasc-why-pillar-icon"
                size={32}
                strokeWidth={1}
              />
              <p className="lasc-why-pillar-text">
                highly restricted camp inventory
              </p>
            </div>
            <div className="lasc-why-pillar">
              <Heart
                className="lasc-why-pillar-icon"
                size={32}
                strokeWidth={1}
              />
              <p className="lasc-why-pillar-text">
                conservation fees that directly support wildlife protection
              </p>
            </div>
            <div className="lasc-why-pillar">
              <Activity
                className="lasc-why-pillar-icon"
                size={32}
                strokeWidth={1}
              />
              <p className="lasc-why-pillar-text">
                staffing and supply chains operating far from cities
              </p>
            </div>
          </div>

          <div className="lasc-sleek-box">
            <p className="lasc-sleek-text">
              You are not simply paying for a hotel room.
            </p>
            <div className="lasc-sleek-line"></div>
            <h3 className="lasc-sleek-main">
              You are paying for access to some of the most remote wildlife
              regions left on earth.
            </h3>
          </div>
        </div>
      </section>

      {/* ── 7. WHAT CHEAP SAFARIS MISS (Modular Grid Ledger Design) ── */}
      <section className="lasc-miss-section">
        <div className="lasc-miss-inner">
          <div className="lasc-miss-header">
            <div className="lasc-miss-eyebrow">OPERATIONAL RISKS</div>
            <h2 className="lasc-h2">WHAT CHEAP SAFARIS OFTEN MISS</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">
              This is where many travelers make expensive mistakes trying to
              save money.
            </p>
            <p className="lasc-p-small">Lower-cost safaris often involve:</p>
          </div>

          <div className="lasc-miss-ledger">
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">long daily drives</span>
            </div>
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">
                overcrowded vehicles
              </span>
            </div>
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">
                weak camp positioning
              </span>
            </div>
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">
                inexperienced guides
              </span>
            </div>
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">
                poor wildlife access
              </span>
            </div>
            <div className="lasc-miss-ledger-item">
              <div className="lasc-miss-ledger-icon">
                <XCircle size={24} />
              </div>
              <span className="lasc-miss-ledger-text">
                excessive transit time
              </span>
            </div>
          </div>

          <div className="lasc-split-callout">
            <div className="lasc-split-callout-left">
              <p className="lasc-p">
                A safari can look luxurious online while being{" "}
                <span className="lasc-accent-text">
                  poorly designed operationally
                </span>
                .
              </p>
            </div>
            <div className="lasc-split-callout-divider"></div>
            <div className="lasc-split-callout-right">
              <p className="lasc-p-display">This is why experience matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. KENYA VS TANZANIA ── */}
      <section className="lasc-ledger-section">
        <div className="lasc-ledger-inner">
          <div className="lasc-ledger-header">
            <div className="lasc-ledger-eyebrow">REGIONAL COMPARISON</div>
            <h2 className="lasc-h2">KENYA VS TANZANIA SAFARI COST</h2>
            <div className="lasc-ledger-header-line"></div>
          </div>

          <div className="lasc-comparison-visual-grid">
            {/* Kenya Card */}
            <div className="lasc-comparison-card">
              <div className="lasc-comparison-img-wrap">
                <img src={imgKenya} alt="Kenya Safari" />
                <div className="lasc-comparison-tag">KENYA</div>
              </div>
              <div className="lasc-comparison-content">
                <h3 className="lasc-h3">Efficiency & Access</h3>
                <p className="lasc-p">
                  Ideal for shorter luxury safaris and first-time travelers with
                  a Maasai Mara focus.
                </p>
                <ul className="lasc-comparison-list">
                  <li>
                    <ArrowRight size={14} /> Efficient bush flight logistics
                  </li>
                  <li>
                    <ArrowRight size={14} /> Iconic savanna landscapes
                  </li>
                  <li>
                    <ArrowRight size={14} /> High-end boutique camps
                  </li>
                </ul>
              </div>
            </div>

            {/* Tanzania Card */}
            <div className="lasc-comparison-card lasc-card-dark">
              <div className="lasc-comparison-img-wrap">
                <img src={imgTanzania} alt="Tanzania Safari" />
                <div className="lasc-comparison-tag">TANZANIA</div>
              </div>
              <div className="lasc-comparison-content">
                <h3 className="lasc-h3">Immersion & Scale</h3>
                <p className="lasc-p">
                  Typically involves longer distances and multiple ecosystems
                  across the Serengeti.
                </p>
                <ul className="lasc-comparison-list">
                  <li>
                    <ArrowRight size={14} /> Diverse wildlife corridors
                  </li>
                  <li>
                    <ArrowRight size={14} /> Ngorongoro Crater access
                  </li>
                  <li>
                    <ArrowRight size={14} /> Extended safari itineraries
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lasc-ledger-footer">
            <div className="lasc-premium-cta">
              <div className="lasc-premium-cta-left">
                <div className="lasc-premium-cta-tag">DECISION GUIDE</div>
                <h4 className="lasc-premium-cta-title">
                  Trying to decide between the two?
                </h4>
              </div>
              <div className="lasc-premium-cta-right">
                <a
                  href="/kenya-vs-tanzania-safari"
                  className="lasc-premium-cta-btn"
                >
                  <span>READ THE FULL COMPARISON</span>
                  <div className="lasc-premium-cta-icon">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8.5. SIGNATURE VIDEO: THE GREAT MIGRATION ── */}
      <section className="lasc-migration-architectural">
        <div className="lasc-migration-container">
          <div className="lasc-migration-text-column">
            <span className="lasc-migration-eyebrow">A VISUAL JOURNEY</span>
            <h2 className="lasc-h2">THE GREAT MIGRATION EXPERIENCE</h2>
            <div className="lasc-accent-line"></div>
            <p className="lasc-p">
              The Great Migration is the heartbeat of the African savanna.
              Witnessing this spectacle requires an itinerary designed with
              precision, placing you in the right place at the exact moment of
              the crossing.
            </p>
          </div>
          <div className="lasc-migration-video-column">
            <div className="lasc-video-wrapper-architectural">
              <iframe
                src="https://www.youtube.com/embed/jST68PUiHu8"
                title="The Great Migration Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. BEST VALUE TIMES FOR A LUXURY SAFARI (New Look) ── */}
      <section className="lasc-value-v2">
        <div className="lasc-container">
          <div className="lasc-value-header-v2">
            <h2 className="lasc-h2">BEST VALUE TIMES FOR A LUXURY SAFARI</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">
              Luxury safari does not always mean peak season. Some of the best
              value periods include:
            </p>
          </div>

          <div className="lasc-value-grid-v2">
            {/* January–March */}
            <div className="lasc-value-card-v2">
              <div className="lasc-value-card-img-v2">
                <img src={imgCalving} alt="Calving Season" />
                <div className="lasc-value-tag-v2">JAN – MAR</div>
              </div>
              <div className="lasc-value-card-content-v2">
                <h3 className="lasc-h3">Calving season in Tanzania</h3>
                <p className="lasc-p">
                  Strong wildlife activity with excellent photography
                  opportunities.
                </p>
              </div>
            </div>

            {/* June */}
            <div className="lasc-value-card-v2">
              <div className="lasc-value-card-img-v2">
                <img src={imgJune} alt="Early Migration" />
                <div className="lasc-value-tag-v2">JUNE</div>
              </div>
              <div className="lasc-value-card-content-v2">
                <h3 className="lasc-h3">Early migration movement</h3>
                <p className="lasc-p">
                  Fewer crowds than peak river crossing season with lush
                  landscapes.
                </p>
              </div>
            </div>

            {/* November */}
            <div className="lasc-value-card-v2">
              <div className="lasc-value-card-img-v2">
                <img src={imgNovember} alt="Value Season" />
                <div className="lasc-value-tag-v2">NOVEMBER</div>
              </div>
              <div className="lasc-value-card-content-v2">
                <h3 className="lasc-h3">
                  Lower crowds and transitional pricing
                </h3>
                <p className="lasc-p">
                  Excellent overall value for luxury travelers before holiday
                  peak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── 15. ABOUT ANGELA HUGHES (New Look) ── */}
      <section className="lasc-about-v2">
        <div className="lasc-container">
          <div className="lasc-about-grid-v2">
            <div className="lasc-about-portrait-v2">
              <div className="lasc-about-image-inner-v2">
                <img src={profileImg} alt="Angela Hughes" />
                <div className="lasc-about-frame-v2"></div>
              </div>
            </div>

            <div className="lasc-about-details-v2">
              <div className="lasc-about-header-v2">
                <h2 className="lasc-h2">ABOUT ANGELA HUGHES</h2>
                <div className="lasc-accent-line"></div>

                {/* Expertise Markers */}
                <div className="lasc-expertise-markers">
                  <div className="lasc-marker">
                    <Award size={18} />
                    <span>Award Winning</span>
                  </div>
                  <div className="lasc-marker">
                    <Navigation size={18} />
                    <span>121+ Countries</span>
                  </div>
                  <div className="lasc-marker">
                    <Zap size={18} />
                    <span>Geography Professor</span>
                  </div>
                </div>

                <p className="lasc-p">
                  Angela Hughes is one of the most recognized voices in luxury
                  travel. She has spent decades designing complex, high-end
                  itineraries across Africa and around the world, working
                  directly with top safari operators, camps, and on-the-ground
                  teams. Her work has been recognized across the industry.
                </p>

                <div
                  className={`lasc-bio-expandable ${showBioFull ? "expanded" : ""}`}
                >
                  <p className="lasc-p">
                    Luxury safari planning requires far more than choosing a
                    lodge or deciding between Kenya and Tanzania. The timing of
                    the migration, regional weather patterns, wildlife movement,
                    flight logistics, conservation access, guide quality, and
                    pacing of the itinerary all shape the overall experience. As
                    a professor of Travel and Tourism and Geography, award
                    winning luxury travel advisor, and one of the most
                    recognized voices in luxury travel media today, Angela
                    Hughes brings both destination knowledge and real world
                    safari experience to the planning process. Having traveled
                    extensively throughout Africa and more than 121 countries
                    worldwide, Angela works closely with trusted luxury safari
                    partners to help clients select the right destination, camp
                    style, safari pacing, and seasonal timing based on their
                    goals, comfort level, and travel investment.
                  </p>
                </div>

                <button
                  className="lasc-read-more-btn"
                  onClick={() => setShowBioFull(!showBioFull)}
                >
                  {showBioFull ? "Read Less" : "Read More About Angela"}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: showBioFull ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </button>
              </div>

              <div className="lasc-about-recognition-v2">
                <h3 className="lasc-h3">Industry Recognition</h3>
                <ul className="lasc-about-list-v2">
                  <li>
                    Named Luxury Travel Influencer of the Year by Travel Leaders
                    Network
                  </li>
                  <li>
                    Recognized as one of the Most Influential Women in Travel by
                    TravelPulse
                  </li>
                  <li>Winner of multiple Magellan Awards from Travel Weekly</li>
                </ul>
              </div>

              <div className="lasc-about-footer-v2">
                <p className="lasc-p">
                  Clients do not work with Angela Hughes to simply book travel.
                </p>
                <p className="lasc-p-bold">
                  They work with her to get it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. MOST EXPENSIVE TIMES (Peak Alert Design) ── */}
      <section className="lasc-peak-section">
        <div className="lasc-peak-inner">
          <div className="lasc-peak-header">
            <h2 className="lasc-h2">MOST EXPENSIVE TIMES FOR SAFARI</h2>
            <p className="lasc-p">
              Peak season pricing reflects extraordinary demand. Plan well
              ahead.
            </p>
          </div>

          <div className="lasc-peak-body">
            {/* Left — period + context */}
            <div className="lasc-peak-left">
              <div className="lasc-peak-period">JULY – OCTOBER</div>
              <h3 className="lasc-h3">
                Peak Great Migration river crossing season.
              </h3>
              <p className="lasc-p">
                This period typically includes the highest demand across all
                luxury camps. This is when planning far in advance becomes
                critical.
              </p>
            </div>

            {/* Right — three alert pills */}
            <div className="lasc-peak-right">
              <div className="lasc-peak-pill">
                <TrendingUp
                  size={22}
                  strokeWidth={1.5}
                  className="lasc-peak-icon"
                />
                <div className="lasc-peak-pill-text">
                  <span className="lasc-peak-pill-label">
                    HIGHEST CAMP PRICING
                  </span>
                  <span className="lasc-peak-pill-sub">
                    Rates climb to annual peaks
                  </span>
                </div>
              </div>
              <div className="lasc-peak-pill">
                <AlertCircle
                  size={22}
                  strokeWidth={1.5}
                  className="lasc-peak-icon"
                />
                <div className="lasc-peak-pill-text">
                  <span className="lasc-peak-pill-label">
                    LOWEST AVAILABILITY
                  </span>
                  <span className="lasc-peak-pill-sub">
                    Camps book out months ahead
                  </span>
                </div>
              </div>
              <div className="lasc-peak-pill">
                <Users size={22} strokeWidth={1.5} className="lasc-peak-icon" />
                <div className="lasc-peak-pill-text">
                  <span className="lasc-peak-pill-label">STRONGEST DEMAND</span>
                  <span className="lasc-peak-pill-sub">
                    Highest traveler competition globally
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. EXPERIENCE GUIDES (New Look) ── */}
      <section className="lasc-exp-v3">
        <div className="lasc-container">
          <div className="lasc-exp-grid-v3">
            {/* Family Card */}
            <div
              className="lasc-exp-card-v3"
              style={{ backgroundImage: `url(${imgFamily})` }}
            >
              <div className="lasc-exp-overlay-v3"></div>
              <div className="lasc-exp-content-v3">
                <span className="lasc-exp-eyebrow-v3">EXPERIENCE GUIDE</span>
                <h2 className="lasc-h2">LUXURY FAMILY SAFARI COST</h2>
                <p className="lasc-p">
                  Luxury family safaris require different planning than couples
                  travel.
                </p>
                <ul className="lasc-exp-list-v3">
                  <li>larger family tents or villas</li>
                  <li>private vehicles</li>
                  <li>pacing for children</li>
                  <li>guide selection</li>
                  <li>safety and age requirements</li>
                </ul>
                <div className="lasc-exp-price-v3">
                  Typical range: $30,000–80,000+
                </div>
              </div>
            </div>

            {/* Honeymoon Card */}
            <div
              className="lasc-exp-card-v3"
              style={{ backgroundImage: `url(${imgHoneymoon})` }}
            >
              <div className="lasc-exp-overlay-v3"></div>
              <div className="lasc-exp-content-v3">
                <span className="lasc-exp-eyebrow-v3">EXPERIENCE GUIDE</span>
                <h2 className="lasc-h2">LUXURY SAFARI HONEYMOON COST</h2>
                <p className="lasc-p">
                  Luxury safari honeymoons remain one of the most extraordinary
                  travel experiences in the world.
                </p>
                <ul className="lasc-exp-list-v3">
                  <li>Kenya + Seychelles</li>
                  <li>Tanzania + Zanzibar</li>
                  <li>South Africa + Victoria Falls</li>
                </ul>
                <div className="lasc-exp-price-v3">
                  Typical range: $25,000–75,000+ per couple
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. MOST COMMON SAFARI PRICING MISTAKES (New Look) ── */}
      <section className="lasc-mistakes-v2">
        <div className="lasc-container">
          <div className="lasc-mistakes-header-v2">
            <h2 className="lasc-h2">MOST COMMON SAFARI PRICING MISTAKES</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">
              This is where travelers often overspend or misunderstand value.
            </p>
          </div>

          <div className="lasc-mistakes-grid-v2">
            {[
              "underestimating internal flight costs",
              "choosing camps too far apart",
              "focusing only on lodge design",
              "misunderstanding migration pricing",
              "skipping private guides",
              "choosing based on price instead of routing",
            ].map((mistake, i) => (
              <div className="lasc-mistake-card-v2" key={i}>
                <div className="lasc-mistake-icon-v2">
                  <XCircle size={22} strokeWidth={1.5} />
                </div>
                <span className="lasc-mistake-text-v2">{mistake}</span>
              </div>
            ))}
          </div>

          <div className="lasc-mistakes-footer-v2">
            <p className="lasc-p">
              The wrong design creates expensive disappointment.
            </p>
          </div>
        </div>
      </section>

      {/* ── 13. WHO THIS GUIDE IS FOR (New Look) ── */}
      <section className="lasc-audience-v2">
        <div className="lasc-container">
          <div className="lasc-audience-header-v2">
            <h2 className="lasc-h2">Who This Guide Is For</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">This guide is designed for:</p>
          </div>

          <div className="lasc-audience-grid-v2">
            {[
              {
                text: "luxury travelers researching Africa",
                icon: <Diamond size={24} strokeWidth={1.5} />,
              },
              {
                text: "first-time safari travelers",
                icon: <Compass size={24} strokeWidth={1.5} />,
              },
              {
                text: "honeymoon clients",
                icon: <Heart size={24} strokeWidth={1.5} />,
              },
              {
                text: "families planning multi-generational safaris",
                icon: <Users size={24} strokeWidth={1.5} />,
              },
              {
                text: "travelers considering Kenya vs Tanzania",
                icon: <MapPin size={24} strokeWidth={1.5} />,
              },
              {
                text: "travelers planning Great Migration safaris",
                icon: <Sparkles size={24} strokeWidth={1.5} />,
              },
            ].map((item, i) => (
              <div className="lasc-audience-card-v2" key={i}>
                <div className="lasc-audience-icon-v2">{item.icon}</div>
                <span className="lasc-audience-text-v2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. HOW WE DESIGN SAFARIS DIFFERENTLY (New Look v2) ── */}
      <section className="lasc-design-v4">
        <div className="lasc-container">
          <div className="lasc-design-header-v4">
            <h2 className="lasc-h2">HOW WE DESIGN SAFARIS DIFFERENTLY</h2>
            <div className="lasc-accent-line lasc-accent-line--center"></div>
            <p className="lasc-p">
              This is where safari planning becomes strategic.
            </p>
          </div>

          <div className="lasc-design-grid-v4">
            {[
              { title: "Camp Placement", text: "Over branding" },
              { title: "Wildlife Movement", text: "Over marketing" },
              { title: "Routing", text: "Efficiency & Logic" },
              { title: "Guide Partnerships", text: "Elite expertise" },
              { title: "Experience", text: "Balanced with logistics" },
            ].map((item, idx) => (
              <div className="lasc-design-card-v4" key={idx}>
                <div className="lasc-design-card-index-v4">0{idx + 1}</div>
                <h3 className="lasc-h3">{item.title}</h3>
                <p className="lasc-p">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="lasc-design-quote-card-v4">
            <div className="lasc-design-quote-wrap-v4">
              <p className="lasc-design-quote-v4">
                "Luxury safari is not about booking a room. It is about
                engineering an experience."
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── 16. FAQ SECTION ── */}
      <section className="lasc-section lasc-faq">
        <div className="lasc-container">
          <div className="lasc-faq-header-v2">
            <h2 className="lasc-h2">FAQ: Luxury African Safari Cost</h2>
            <div className="lasc-wrong-accent-line lasc-center"></div>
          </div>

          <div className="lasc-faq-simple-wrapper">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`lasc-faq-item-simple ${isOpen ? "lasc-open" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="lasc-faq-q-simple">
                    <span>
                      {index + 1}. {faq.q}
                    </span>
                    <span className="lasc-faq-icon-simple">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={1.5} />
                      ) : (
                        <Plus size={20} strokeWidth={1.5} />
                      )}
                    </span>
                  </div>
                  {isOpen && (
                    <div className="lasc-faq-a-simple">
                      <div className="lasc-faq-a-inner-simple">{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="btgms-section btgms-final-cta-v3">
        <div className="btgms-container">
          <div className="btgms-final-card-premium">
            <div className="btgms-final-card-content">
              <h2 className="btgms-final-title">
                Ready to begin planning your Africa journey?
              </h2>

              <div className="btgms-final-divider"></div>

              <p className="btgms-final-text">
                Schedule a consultation with Trips & Ships Luxury Travel to
                design a custom luxury safari experience built around your
                interests, travel style, timeline, and investment level. Whether
                you are planning your first safari, a multi generational family
                adventure, a honeymoon, a photography focused journey, or an
                expedition across East or Southern Africa, our team can help
                guide you through every step of the planning process with
                personalized recommendations, destination expertise, and
                concierge level support.
              </p>

              <div className="btgms-final-actions">
                <button className="btgms-btn-luxury">
                  <span>Plan My Luxury Safari</span>
                  <ArrowRight size={20} className="btgms-btn-icon" />
                </button>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="btgms-card-glow"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
