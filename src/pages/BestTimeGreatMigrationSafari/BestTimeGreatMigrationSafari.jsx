import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Compass,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Target,
  Globe,
  ShieldCheck,
  Quote,
  Sun,
  CloudSun,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

// AS SEEN IN LOGOS
import TravelWeeklyLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Weekly.webp";
import TravelPulseLogo from "../../assets/BestTimeGreatMigrationSafari/TravelPulse.webp";
import InsiderReportLogo from "../../assets/BestTimeGreatMigrationSafari/Insider_Travel_Report.webp";
import TravelAgeWestLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Age_West.webp";
import Safari1 from "../../assets/BestTimeGreatMigrationSafari/Safari1.jpg";
import Safari2 from "../../assets/BestTimeGreatMigrationSafari/Safari2.jpg";
import Safari3 from "../../assets/BestTimeGreatMigrationSafari/Safari3.jpg";
import CTAImage from "../../assets/BestTimeGreatMigrationSafari/Consultation.jpg";
import Planning from "../../assets/BestTimeGreatMigrationSafari/Maasai_Mara.png";
import AboutImage from "../../assets/Angela_Hughes.jpg";

import "./BestTimeGreatMigrationSafari.css";

export default function BestTimeGreatMigrationSafari() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.tripsandships.com/best-time-great-migration-safari/#webpage",
        url: "https://www.tripsandships.com/best-time-great-migration-safari/",
        name: "Best Time to See the Great Migration: Month-by-Month Safari Guide",
        description:
          "Discover the best time to see the Great Migration in Kenya and Tanzania. Month-by-month safari guide covering river crossings, calving season, wildlife movement, costs, and expert planning tips.",
        isPartOf: {
          "@id": "https://www.tripsandships.com/#website",
        },
        about: [
          { "@type": "Thing", name: "Great Migration" },
          { "@type": "Place", name: "Serengeti" },
          { "@type": "Place", name: "Maasai Mara" },
          { "@type": "Place", name: "Kenya" },
          { "@type": "Place", name: "Tanzania" },
          { "@type": "Thing", name: "Luxury Safari" },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000",
        },
      },
      {
        "@type": "Article",
        "@id":
          "https://www.tripsandships.com/best-time-great-migration-safari/#article",
        headline:
          "Best Time to See the Great Migration: Month-by-Month Safari Guide",
        description:
          "A luxury safari guide explaining the best time to see the Great Migration in Kenya and Tanzania, including river crossings, calving season, monthly timing, costs, and planning strategy.",
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
            "Great Migration safaris",
            "Kenya safaris",
            "Tanzania safaris",
            "Luxury safari planning",
            "Serengeti safaris",
            "Maasai Mara safaris",
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
            "https://www.tripsandships.com/best-time-great-migration-safari/#webpage",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.tripsandships.com/best-time-great-migration-safari/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best month to see the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best month depends on what you want to experience. July through October is best for dramatic river crossings in Kenya and northern Tanzania, while January through March is best for calving season in the southern Serengeti.",
            },
          },
          {
            "@type": "Question",
            name: "When do river crossings happen in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Great Migration river crossings in Kenya typically happen from July through October in the Maasai Mara. Exact timing varies because herd movement is driven by rainfall, grazing, and natural conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Is the Great Migration guaranteed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The Great Migration is a natural wildlife movement and cannot be guaranteed on a specific day. Careful planning, camp placement, and timing improve the chances of seeing key migration activity.",
            },
          },
          {
            "@type": "Question",
            name: "Where is the Great Migration in January?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In January, the herds are usually in the southern Serengeti in Tanzania. This is part of calving season, when large numbers of wildebeest calves are born and predator activity can be intense.",
            },
          },
          {
            "@type": "Question",
            name: "Is April a bad time for safari in Tanzania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "April is part of the rainy season, but it is not necessarily a bad time for safari. Travelers may find fewer crowds, lush landscapes, and better value, although weather and road conditions require careful planning.",
            },
          },
          {
            "@type": "Question",
            name: "Is June a good time to see the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "June can be an excellent time to see the migration as the herds begin moving north. This period may include early river crossing activity in the western Serengeti and fewer crowds than peak season.",
            },
          },
          {
            "@type": "Question",
            name: "Is Kenya or Tanzania better for the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kenya is best known for dramatic Mara River crossings from July through October. Tanzania offers a longer migration viewing window throughout the year, including calving season, Grumeti movement, and northern Serengeti crossings.",
            },
          },
          {
            "@type": "Question",
            name: "How far in advance should I book a Great Migration safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury Great Migration safaris should often be booked 9 to 18 months in advance, especially for peak river crossing season from July through October when top camps sell out early.",
            },
          },
          {
            "@type": "Question",
            name: "What is the most dramatic part of the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "River crossings are often considered the most dramatic part of the Great Migration, but calving season can also be extraordinary because of the concentration of newborn calves and predator activity.",
            },
          },
          {
            "@type": "Question",
            name: "Is the Great Migration worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the Great Migration can be one of the most extraordinary wildlife experiences in the world when planned correctly. The key is aligning the right region, season, camp location, and safari style.",
            },
          },
          {
            "@type": "Question",
            name: "Can I see the Great Migration without river crossings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Great Migration includes calving, grazing movement, predator interactions, and long-distance herd movement. River crossings are only one part of the larger annual cycle.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best Great Migration safari for photographers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Photographers often value both calving season in the southern Serengeti and river crossing season in Kenya or northern Tanzania. The best choice depends on whether the goal is predator action, newborn calves, landscapes, or dramatic crossings.",
            },
          },
          {
            "@type": "Question",
            name: "Is the Great Migration crowded?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Peak river crossing season can be crowded, especially in popular areas of the Maasai Mara. Tanzania and carefully selected private conservancies or camp locations can provide more space depending on timing and budget.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a private guide for the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A private guide can significantly improve the migration experience by helping with positioning, timing, and flexibility. This is especially valuable during peak crossing season or for photographers and luxury travelers.",
            },
          },
          {
            "@type": "Question",
            name: "What determines where the Great Migration goes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Great Migration is influenced by rainfall, grazing patterns, water availability, and natural herd movement. Because these factors change from year to year, expert planning matters.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.tripsandships.com/best-time-great-migration-safari/#breadcrumb",
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
            name: "Best Time to See the Great Migration",
            item: "https://www.tripsandships.com/best-time-great-migration-safari/",
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
          "Great Migration safaris",
          "Kenya luxury safaris",
          "Tanzania luxury safaris",
          "Custom safari planning",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/images/logo.png",
        },
      },
    ],
  };

  const migrationGlance = [
    {
      month: "Jan–Mar",
      location: "Southern Serengeti",
      happens: "Calving season",
      bestFor: "Photographers, repeat travelers",
    },
    {
      month: "Apr–May",
      location: "Central Serengeti",
      happens: "Movement, green season",
      bestFor: "Value, fewer crowds",
    },
    {
      month: "June",
      location: "Western Serengeti",
      happens: "Grumeti crossings",
      bestFor: "Early migration",
    },
    {
      month: "Jul–Oct",
      location: "Mara + Northern Serengeti",
      happens: "River crossings",
      bestFor: "First-time safari",
    },
    {
      month: "Nov–Dec",
      location: "Southern Serengeti",
      happens: "Return migration",
      bestFor: "Lower crowds",
    },
  ];

  const monthByMonth = [
    {
      title: "JANUARY – MARCH",
      desc: "Calving season in the southern Serengeti.",
      highlight:
        "High predator activity. Intense wildlife interaction. This is one of the most underrated times to go.",
    },
    {
      title: "APRIL – MAY",
      desc: "Movement season with rain.",
      highlight:
        "Fewer crowds, lush landscapes, and better pricing. Requires the right mindset and planning.",
    },
    {
      title: "JUNE",
      desc: "The herds begin moving north.",
      highlight:
        "Grumeti River crossings start. Fewer crowds than peak season.",
    },
    {
      title: "JULY – OCTOBER",
      desc: "Peak migration period.",
      highlight:
        "River crossings in the Maasai Mara and northern Serengeti. This is the most requested time, but also the most misunderstood. Crossings are not guaranteed. Timing and positioning matter.",
    },
    {
      title: "NOVEMBER – DECEMBER",
      desc: "The herds begin returning south.",
      highlight:
        "Strong wildlife viewing with fewer crowds and transitional pricing.",
    },
  ];

  const faqs = [
    {
      q: "What is the best month to see the Great Migration",
      a: "July through October for river crossings, January through March for calving season.",
    },
    {
      q: "When do river crossings happen in Kenya",
      a: "Typically July through October, but timing varies based on herd movement.",
    },
    {
      q: "Is the Great Migration guaranteed",
      a: "No. It is a natural movement driven by rainfall and grazing.",
    },
    {
      q: "Where is the migration in January",
      a: "Southern Serengeti during calving season.",
    },
    {
      q: "Is April a bad time for safari",
      a: "No. It offers fewer crowds and strong value.",
    },
    {
      q: "Is June a good time to go",
      a: "Yes. Early movement and fewer crowds.",
    },
    {
      q: "Kenya or Tanzania for migration",
      a: "Kenya for crossings, Tanzania for year-round movement.",
    },
    {
      q: "How far in advance should I book",
      a: "9 to 18 months for peak season.",
    },
    {
      q: "Most dramatic part of migration",
      a: "River crossings and calving season.",
    },
    { q: "Is it worth it", a: "Yes, when planned correctly." },
    {
      q: "Can I see migration without crossings",
      a: "Yes. The migration includes multiple phases.",
    },
    {
      q: "Best safari for photographers",
      a: "Calving or crossings depending on goals.",
    },
    {
      q: "Is it crowded",
      a: "Peak Kenya can be. Tanzania often offers more space.",
    },
    {
      q: "Do I need a private guide",
      a: "Strongly recommended for positioning and experience.",
    },
    {
      q: "What determines migration movement",
      a: "Rainfall and grazing patterns.",
    },
  ];

  const [showAnswer, setShowAnswer] = useState(false);
  const [showTrustMore, setShowTrustMore] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);

  const heroImages = [Safari1, Safari2, Safari3];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  return (
    <div className="btgms-root">
      <Helmet>
        <title>
          Best Time to See the Great Migration (Month-by-Month Safari Guide for
          2026)
        </title>
        <meta
          name="description"
          content="Discover the best time to see the Great Migration in Kenya and Tanzania. Month-by-month safari guide covering river crossings, calving season, wildlife movement, costs, and expert planning tips."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* HERO SECTION */}
      <section className="btgms-section btgms-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`btgms-hero-bg ${index === currentHero ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="btgms-hero-overlay"></div>

        <div className="btgms-container btgms-hero-inner">
          <h1 className="btgms-h1 btgms-h1-hero">
            Best Time to See the Great Migration: Month-by-Month Safari Guide
          </h1>

          <div className={`btgms-hero-details ${showAnswer ? "expanded" : ""}`}>
            <div className="btgms-snippet-card">
              <h2 className="btgms-snippet-label">
                <Sparkles size={16} />
                Expert Perspective: Timing & Strategy
              </h2>
              <p className="btgms-hero-p">
                The Great Migration is one of the most sought-after wildlife
                experiences in the world. It is also one of the most
                misunderstood.
              </p>
              <p className="btgms-hero-p btgms-mt-sm">
                To experience it correctly, you must understand three critical
                truths:
              </p>
              <ul className="btgms-qa-pills">
                <li className="btgms-qa-pill">No Single Best Time</li>
                <li className="btgms-qa-pill">No Guaranteed River Crossing</li>
                <li className="btgms-qa-pill">No Fixed Schedule</li>
              </ul>
              <p className="btgms-hero-p btgms-mt-sm">
                This is a year-round movement of over a million wildebeest,
                zebra, and gazelle across East Africa. And if timing, location,
                and camp placement are not aligned, the experience falls apart.
              </p>
              <p className="btgms-hero-p btgms-mt-sm">
                With over four decades in the travel industry, travel to 121+
                countries, and extensive safari experience across Africa, Angela
                Hughes works with clients to align timing and location so the
                migration is experienced correctly.
              </p>
              <p className="btgms-hero-p btgms-mt-sm btgms-bold">
                This is not about luck. It is about strategy.
              </p>
            </div>
          </div>

          <div className="btgms-hero-cta-box">
            <h2 className="btgms-hero-cta-title">
              Schedule a 15-Minute Great Migration <br /> Strategy Call
            </h2>
            <p className="btgms-hero-cta-subtext">
              If your trip depends on timing, you need to get this right.
            </p>

            <button
              className="btgms-hero-toggle"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "Read Less" : "Read More"}
              {showAnswer ? <Minus size={16} /> : <Plus size={16} />}
            </button>

            <div className="btgms-hero-btns">
              <button className="btgms-btn-primary">
                Schedule a 15-Minute Great Migration Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AS SEEN IN */}
      <section className="btgms-as-seen">
        <div className="btgms-container">
          <span className="btgms-seen-label-top">AS SEEN IN</span>
          <div className="btgms-seen-slider">
            <div className="btgms-seen-track">
              {[
                { logo: TravelWeeklyLogo, name: "Travel Weekly" },
                { logo: TravelPulseLogo, name: "TravelPulse" },
                { logo: InsiderReportLogo, name: "Insider Travel Report" },
                { logo: TravelAgeWestLogo, name: "Travel Age West" },
              ]
                .concat([
                  { logo: TravelWeeklyLogo, name: "Travel Weekly" },
                  { logo: TravelPulseLogo, name: "TravelPulse" },
                  { logo: InsiderReportLogo, name: "Insider Travel Report" },
                  { logo: TravelAgeWestLogo, name: "Travel Age West" },
                ])
                .map((item, index) => (
                  <div key={index} className="btgms-seen-box">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="btgms-seen-logo"
                    />
                    <span className="btgms-seen-text">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section className="btgms-section btgms-specialization">
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

      {/* WHAT IT ACTUALLY IS */}
      <section className="btgms-section btgms-definition">
        <div className="btgms-container">
          <div className="btgms-def-flex">
            <div className="btgms-def-text">
              <h2 className="btgms-h2">What The Great Migration Actually Is</h2>
              <p className="btgms-p">
                The Great Migration is not a single event. It is a circular
                movement driven by rainfall and grazing patterns.
              </p>
              <p className="btgms-p">
                More than 1.5 million wildebeest move continuously between:
              </p>
              <div className="btgms-location-pills">
                <span className="btgms-pill">Serengeti</span>
                <span className="btgms-pill">Maasai Mara</span>
              </div>
              <p className="btgms-p">
                This includes calving, predator interaction, river crossings,
                and long-distance movement.
              </p>
              <p className="btgms-p-display">
                Most travelers plan for a moment. The reality is movement.
              </p>
            </div>
            <div className="btgms-def-image">
              <img src={Planning} alt="Wildlife Movement" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="btgms-section btgms-video-section">
        <div className="btgms-container">
          <div className="btgms-video-wrapper">
            <div className="btgms-video-content">
              <h2 className="btgms-h2">Experience the Great Migration</h2>
              <p className="btgms-p">
                Witness the raw power and dramatic river crossings of the
                world's most spectacular wildlife movement. This is what you are
                planning for.
              </p>
            </div>
            <div className="btgms-video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nsBBl4jCyqQ"
                title="Great Migration Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL TABLE */}
      <section className="btgms-section btgms-glance">
        <div className="btgms-container">
          <h2 className="btgms-h2">Great Migration at a Glance</h2>
          <div className="btgms-table-container">
            <div className="btgms-table-wrap">
              <table className="btgms-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Location</th>
                    <th>What Happens</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {migrationGlance.map((row, i) => (
                    <tr key={i}>
                      <td className="btgms-td-month" data-label="Month">
                        {row.month}
                      </td>
                      <td data-label="Location">{row.location}</td>
                      <td data-label="What Happens">{row.happens}</td>
                      <td data-label="Best For">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MONTH BY MONTH */}
      <section className="btgms-section btgms-months">
        <div className="btgms-container">
          <h2 className="btgms-h2">Great Migration Month-by-Month</h2>
          <div className="btgms-months-timeline">
            {monthByMonth.map((m, i) => (
              <div className="btgms-month-row" key={i}>
                <div className="btgms-month-marker">
                  <div className="btgms-month-dot"></div>
                  <div className="btgms-month-line"></div>
                </div>
                <div className="btgms-month-card">
                  <div className="btgms-month-info">
                    <div className="btgms-month-header">
                      <Calendar className="btgms-month-icon" size={24} />
                      <h3 className="btgms-h3">{m.title}</h3>
                    </div>
                    <div className="btgms-month-body">
                      <p className="btgms-month-desc">{m.desc}</p>
                      <div className="btgms-month-highlight">
                        <Sparkles size={16} />
                        <span>{m.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* WHY TRUST THIS GUIDE */}
      <section className="btgms-section btgms-trust-compact">
        <div className="btgms-container">
          <div className="btgms-trust-layout">
            <div className="btgms-trust-image-side">
              <div className="btgms-about-img-frame">
                <img
                  src={AboutImage}
                  alt="Angela Hughes"
                  className="btgms-about-img"
                />
              </div>

              <div className="btgms-trust-stats-grid">
                {[
                  {
                    label: "40+ Years",
                    text: "In the travel industry",
                    icon: Compass,
                  },
                  {
                    label: "121+ Countries",
                    text: "Traveled worldwide",
                    icon: Globe,
                  },
                  {
                    label: "10+ Safaris",
                    text: "Across Africa in recent years",
                    icon: MapPin,
                  },
                  {
                    label: "CEO",
                    text: "Trips & Ships Luxury Travel",
                    icon: Award,
                  },
                ].map((item, i) => (
                  <div className="btgms-trust-stat-card" key={i}>
                    <div className="btgms-stat-icon-wrap">
                      <item.icon size={20} />
                    </div>
                    <div className="btgms-stat-text">
                      <strong>{item.label}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="btgms-trust-content-side">
              <div className="btgms-trust-header">
                <span className="btgms-trust-eyebrow">ABOUT ANGELA HUGHES</span>
                <h2 className="btgms-h2">Why Trust This Guide</h2>
                <div className="btgms-trust-description">
                  <p className="btgms-p-small">
                    Angela Hughes is one of the most recognized voices in luxury
                    travel. She has spent decades designing high-end itineraries
                    across Africa and around the world, working directly with
                    top safari operators and camps.
                  </p>
                  <p className="btgms-p-small">
                    Her work has been recognized across the industry through
                    multiple awards and global media features. Clients do not
                    work with Angela Hughes to book travel. They work with her
                    to get it right.
                  </p>
                  <p className="btgms-p-small">
                    Luxury safari planning requires far more than choosing a
                    lodge or deciding between Kenya and Tanzania. The timing of
                    the migration, regional weather patterns, wildlife movement,
                    flight logistics, conservation access, guide quality, and
                    pacing of the itinerary all shape the overall experience. As
                    a professor of Travel and Tourism and Geography, award
                    winning luxury travel advisor, and one of the most
                    recognized voices in luxury travel media today, Angela
                    Hughes brings both destination knowledge and real world
                    safari experience to the planning process.
                  </p>

                  <div
                    className={`btgms-trust-expandable ${
                      showTrustMore ? "expanded" : ""
                    }`}
                  >
                    <div className="btgms-trust-expandable-inner">
                      <p className="btgms-p-small">
                        Having traveled extensively throughout Africa and more
                        than 121 countries worldwide, Angela works closely with
                        trusted luxury safari partners to help clients select
                        the right destination, camp style, safari pacing, and
                        seasonal timing based on their goals, comfort level, and
                        travel investment.
                      </p>
                    </div>
                  </div>

                  <button
                    className="btgms-trust-toggle"
                    onClick={() => setShowTrustMore(!showTrustMore)}
                  >
                    <span>{showTrustMore ? "Read Less" : "Read More"}</span>
                    {showTrustMore ? (
                      <Minus size={14} style={{ marginLeft: "8px" }} />
                    ) : (
                      <Plus size={14} style={{ marginLeft: "8px" }} />
                    )}
                  </button>
                </div>
              </div>

              <div className="btgms-recognition-compact">
                <h3 className="btgms-h3">Industry Recognition</h3>
                <ul className="btgms-recognition-list-small">
                  <li>
                    <CheckCircle2 size={16} />{" "}
                    <span>
                      Luxury Travel Influencer of the Year by Travel Leaders
                      Network
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />{" "}
                    <span>Most Influential Women in Travel by TravelPulse</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />{" "}
                    <span>Multiple Magellan Awards from Travel Weekly</span>
                  </li>
                </ul>
                <div className="btgms-recognition-footer-compact">
                  <Sparkles size={18} />
                  <p>This is experience built over decades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO GO */}
      <section className="btgms-section btgms-where">
        <div className="btgms-container">
          <div className="btgms-where-grid">
            <div className="btgms-where-content">
              <h2 className="btgms-h2">Where to Go Based on Timing</h2>
              <div className="btgms-where-cards">
                <div className="btgms-where-card">
                  <MapPin className="btgms-where-icon" size={24} />
                  <div className="btgms-where-card-text">
                    <strong>River crossings</strong>
                    <span>Kenya</span>
                  </div>
                </div>
                <div className="btgms-where-card">
                  <MapPin className="btgms-where-icon" size={24} />
                  <div className="btgms-where-card-text">
                    <strong>Calving season</strong>
                    <span>Tanzania</span>
                  </div>
                </div>
                <div className="btgms-where-card">
                  <MapPin className="btgms-where-icon" size={24} />
                  <div className="btgms-where-card-text">
                    <strong>Fewer crowds</strong>
                    <span>Tanzania shoulder season</span>
                  </div>
                </div>
                <div className="btgms-where-card">
                  <MapPin className="btgms-where-icon" size={24} />
                  <div className="btgms-where-card-text">
                    <strong>First safari</strong>
                    <span>Kenya</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="btgms-internal-link">
              <div className="btgms-link-card">
                <Compass size={40} className="btgms-link-card-icon" />
                <h3 className="btgms-h3">
                  Not sure which destination is right for you?
                </h3>
                <p className="btgms-p">
                  Kenya vs Tanzania Safari: Which Is Best for Luxury Travelers
                </p>
                <button className="btgms-btn-outline">
                  Read Comparison Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE TRUTH */}
      <section className="btgms-section btgms-truth">
        <div className="btgms-container">
          <div className="btgms-truth-header">
            <h2 className="btgms-h2">The Truth About the Great Migration</h2>
            <p className="btgms-p-display">
              This is where expectations need to be reset.
            </p>
          </div>
          <div className="btgms-truth-grid">
            {[
              "River crossings are not guaranteed",
              "You may wait hours or days",
              "Herds move based on weather",
              "Camp location matters more than brand",
              "Timing matters more than destination",
            ].map((truth, i) => (
              <div className="btgms-truth-card" key={i}>
                <div className="btgms-truth-card-inner">
                  <ShieldCheck size={32} className="btgms-truth-icon" />
                  <p className="btgms-truth-text">{truth}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="btgms-p-center">
            This is not a checklist experience. It is a natural one.
          </p>
        </div>
      </section>

      {/* HOW WE DESIGN */}
      <section className="btgms-section btgms-design">
        <div className="btgms-container">
          <div className="btgms-design-grid">
            <div className="btgms-design-image-container">
              <div className="btgms-design-image-wrapper">
                <img
                  src={CTAImage}
                  alt="Safari Strategy Planning"
                  className="btgms-design-main-img"
                />
                <div className="btgms-design-badge">
                  <Sparkles size={20} />
                  <span>Strategic Approach</span>
                </div>
              </div>
            </div>
            <div className="btgms-design-content">
              <span className="btgms-eyebrow">DESIGN PHILOSOPHY</span>
              <h2 className="btgms-h2">How We Design Migration Safaris</h2>
              <p className="btgms-p-display">
                This is where most trips are won or lost.
              </p>

              <div className="btgms-design-focus">
                <p className="btgms-focus-label">OUR CORE FOCUS:</p>
                <div className="btgms-design-focus-grid">
                  {[
                    "Precise camp placement based on movement",
                    "Timing aligned to herd patterns",
                    "Guide quality and positioning",
                    "Flexibility in routing",
                    "Strong operator relationships",
                  ].map((item, i) => (
                    <div className="btgms-focus-item" key={i}>
                      <Target size={18} className="btgms-focus-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="btgms-design-quote">
                <ShieldCheck size={24} className="btgms-quote-icon" />
                <p className="btgms-p-display-strong">
                  This is not about booking a lodge. It is about building a
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION - STRATEGY */}
      <section className="btgms-section btgms-video-section">
        <div className="btgms-container">
          <div className="btgms-video-wrapper">
            <div className="btgms-video-content">
              <h2 className="btgms-h2">The Strategy Behind the Safari</h2>
              <p className="btgms-p">
                Go behind the scenes to see how we align every detail—from camp
                placement to guide expertise—to ensure you are in the right
                place at the right time.
              </p>
            </div>
            <div className="btgms-video-container">
              <iframe
                src="https://www.youtube.com/embed/M753pgZrNS4"
                title="Safari Strategy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* COST BY SEASON */}
      <section className="btgms-section btgms-cost">
        <div className="btgms-container">
          <h2 className="btgms-h2">Cost by Season</h2>
          <div className="btgms-cost-grid">
            <div className="btgms-cost-item">
              <Sun size={32} className="btgms-cost-icon" />
              <div className="btgms-cost-text">
                <h3 className="btgms-h3">Peak Season (July–October)</h3>
                <p className="btgms-p">Highest pricing and demand</p>
              </div>
            </div>
            <div className="btgms-cost-item">
              <CloudSun size={32} className="btgms-cost-icon" />
              <div className="btgms-cost-text">
                <h3 className="btgms-h3">Calving Season</h3>
                <p className="btgms-p">
                  High value with strong wildlife activity
                </p>
              </div>
            </div>
            <div className="btgms-cost-item">
              <TrendingDown size={32} className="btgms-cost-icon" />
              <div className="btgms-cost-text">
                <h3 className="btgms-h3">Shoulder Season</h3>
                <p className="btgms-p">Better pricing and availability</p>
              </div>
            </div>
          </div>
          <div className="btgms-cost-total">
            <div className="btgms-price-box">
              <DollarSign size={40} className="btgms-price-icon" />
              <div className="btgms-price-content">
                <span className="btgms-price-label">AVERAGE COST</span>
                <span className="btgms-price-value">
                  $1,500 – $3,000+ PER PERSON / PER DAY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="btgms-section btgms-for">
        <div className="btgms-container">
          <h2 className="btgms-h2">Who This Is For</h2>
          <div className="btgms-for-grid">
            {[
              { text: "First-time safari travelers", icon: Compass },
              { text: "Experienced Africa travelers", icon: MapPin },
              { text: "Luxury clients planning $25K+ safaris", icon: Award },
              {
                text: "Travelers deciding between Kenya and Tanzania",
                icon: Users,
              },
            ].map((item, i) => (
              <div className="btgms-for-card" key={i}>
                <item.icon size={32} className="btgms-for-icon" />
                <p className="btgms-p-strong">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="btgms-section btgms-faq">
        <div className="btgms-container">
          <h2 className="btgms-h2">FAQ: Best Time for the Great Migration</h2>
          <div className="btgms-faq-list">
            {faqs.map((faq, i) => (
              <div
                className={`btgms-faq-item ${openFaq === i ? "active" : ""}`}
                key={i}
              >
                <button
                  className="btgms-faq-question"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div className="btgms-faq-answer">
                  <p className="btgms-p">{faq.a}</p>
                </div>
              </div>
            ))}
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
