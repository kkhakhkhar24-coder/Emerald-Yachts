import Navbar from "../../components/Navbar/Navbar";
import "./LuxuryKenyaSafari.css";
import TravelWeeklyLogo from "../../assets/LuxuryKenyaSafari/Travel_Weekly.webp";
import TravelPulseLogo from "../../assets/LuxuryKenyaSafari/TravelPulse.webp";
import InsiderReportLogo from "../../assets/LuxuryKenyaSafari/Insider_Travel_Report.webp";
import TravelAgeWestLogo from "../../assets/LuxuryKenyaSafari/Travel_Age_West.webp";
import angelaHughes from "../../assets/Angela_Hughes.jpg";

import africa1 from "../../assets/LuxuryKenyaSafari/africa1.jpg";
import africa2 from "../../assets/LuxuryKenyaSafari/africa2.jpg";
import africa3 from "../../assets/LuxuryKenyaSafari/africa3.jpg";
import africa4 from "../../assets/LuxuryKenyaSafari/africa4.jpg";
import africa5 from "../../assets/LuxuryKenyaSafari/africa5.jpg";
import africa6 from "../../assets/LuxuryKenyaSafari/africa6.jpg";
import africa7 from "../../assets/LuxuryKenyaSafari/africa7.jpg";
import africa8 from "../../assets/LuxuryKenyaSafari/africa8.jpg";
import Aafrica_28 from "../../assets/LuxuryKenyaSafari/Aafrica_28.jpg";


import {
  MapPin,
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Compass,
  Sparkles,
  ShieldCheck,
  Gem,
  ChevronRight,
  Crown,
  Phone,
  Plus,
  Minus,
  Award,
  Heart,
  Camera,
  Binoculars,
  Sunrise,
  TreePine,
  Globe,
  LayoutList,
  TrendingUp,
  Sun,
  Quote,
  Activity,
  Zap,
  UserCheck,
  Shield,
  Wind,
  Plane,
  ShieldAlert,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LuxuryKenyaSafari() {
  const [currentHero, setCurrentHero] = useState(0);
  const [showFullHero, setShowFullHero] = useState(false);
  const heroImages = [
    africa1,
    africa2,
    Aafrica_28,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [showBioFull, setShowBioFull] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % 5); // Based on 5 regions
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const regions = [
    {
      name: "MAASAI MARA",
      intro:
        "The Maasai Mara remains Kenya’s most iconic safari region for a reason.",
      knownFor: [
        "dense wildlife populations",
        "predator sightings",
        "Great Migration river crossings",
        "classic East Africa scenery",
      ],
      worksWellFor:
        "first time safari travelers, photographers, honeymooners, and travelers wanting the classic luxury safari experience.",
      tier: "Iconic Heritage",
      image: africa1,
    },
    {
      name: "AMBOSELI",
      intro:
        "Amboseli National Park is known for massive elephant herds and extraordinary views of Mount Kilimanjaro.",
      worksWellFor:
        "photography, families, and travelers wanting iconic Kenya landscapes.",
      tier: "Elephant Empire",
      image: africa2,
    },
    {
      name: "SAMBURU",
      intro:
        "Samburu National Reserve feels completely different from the Maasai Mara. Travelers move from sweeping grasslands into dramatic northern terrain with unique wildlife species not commonly seen in southern Kenya.",
      worksWellFor:
        "travelers wanting a more layered and less predictable Kenya safari experience.",
      tier: "Northern Frontier",
      image: africa3,
    },
    {
      name: "LAIKIPIA",
      intro:
        "Laikipia is one of Kenya’s most sophisticated luxury safari regions.",
      knownFor: [
        "private conservancies",
        "rhino conservation",
        "horseback safaris",
        "helicopter experiences",
        "ultra luxury safari camps",
      ],
      worksWellFor:
        "experienced safari travelers gravitate after their first East Africa safari.",
      tier: "Private Exclusive",
      image: africa4,
    },
    {
      name: "LEWA CONSERVANCY",
      intro:
        "Lewa Wildlife Conservancy is one of Kenya’s most respected conservation focused safari regions.",
      knownFor: [
        "rhino conservation",
        "low vehicle density",
        "highly refined safari operations",
        "exceptional guiding",
      ],
      tier: "Conservation Elite",
      image: africa5,
    },
  ];

  const camps = [
    {
      name: "Angama Mara",
      desc: "Cinematic scenery, elevated design, and direct access to the Mara Triangle. Works particularly well for honeymooners, couples, and first time luxury safari travelers.",
    },
    {
      name: "Mara Plains Camp",
      desc: "Exceptional guiding and wildlife positioning. Appeals strongly to experienced safari travelers, photographers, and travelers prioritizing wildlife access over flashy design.",
    },
    {
      name: "Cottar's 1920s Camp",
      desc: "One of the strongest classic East Africa safari atmospheres in Kenya. Works particularly well for travelers wanting heritage, storytelling, and old world safari character.",
    },
    {
      name: "Segera Retreat",
      desc: "Ultra luxury safari combined with conservation, art, wellness, and privacy. One of Kenya's most sophisticated safari experiences.",
    },
    {
      name: "ol Donyo Lodge",
      desc: "Privacy, horseback safari experiences, and extraordinary Kilimanjaro views. Appeals strongly to honeymooners and travelers wanting a quieter, highly immersive safari.",
    },
  ];

  const pricing = [
    {
      level: "Entry Luxury",
      experience: "Shared safari, upscale camps, regional flights",
      investment: "$15,000 to $25,000 per couple",
      tier: "entry",
    },
    {
      level: "Premium Luxury",
      experience: "Strong conservancies, luxury camps, refined routing",
      investment: "$35,000 to $70,000 per couple",
      tier: "premium",
    },
    {
      level: "Ultra Luxury",
      experience:
        "Private guides, charter flights, elite camps, highly customized itineraries",
      investment: "$80,000 to $250,000+",
      tier: "ultra",
    },
  ];

  const faqs = [
    {
      question: "How much does a luxury Kenya safari cost?",
      answer:
        "Most luxury Kenya safaris range from $25,000 to $100,000+ depending on season, camp level, conservancy access, and private guiding.",
    },
    {
      question: "What is the best month for a Kenya safari?",
      answer:
        "July through October for migration season and January through March for excellent wildlife viewing with fewer crowds.",
    },
    {
      question: "Is Kenya good for first time safari travelers?",
      answer:
        "Yes. Kenya is often one of the best first safari destinations due to wildlife density and relatively easy logistics.",
    },
    {
      question: "Is Kenya safe for luxury travel?",
      answer:
        "Yes, when designed properly with experienced safari operators and guides.",
    },
    {
      question: "How many days do I need for a Kenya safari?",
      answer: "Most luxury Kenya safaris work best between 7 and 10 days.",
    },
    {
      question: "What is the best safari area in Kenya?",
      answer: "The Maasai Mara remains Kenya's most iconic safari destination.",
    },
    {
      question: "Can I combine Kenya with beach destinations?",
      answer: "Yes. Seychelles and Zanzibar are popular luxury pairings.",
    },
    {
      question: "What is the Great Migration?",
      answer:
        "A year round movement of wildebeest and zebra through the Serengeti Maasai Mara ecosystem.",
    },
    {
      question: "Are private guides worth it?",
      answer:
        "Yes, especially for photographers, families, and migration safaris.",
    },
    {
      question: "Do luxury Kenya safaris include flights?",
      answer:
        "Internal bush flights are often included depending on itinerary structure.",
    },
    {
      question: "What makes Kenya different from Tanzania?",
      answer:
        "Kenya generally offers easier logistics and concentrated wildlife viewing.",
    },
    {
      question: "Can children go on safari in Kenya?",
      answer:
        "Yes. Many luxury safari camps accommodate families and children.",
    },
    {
      question: "What is the green season in Kenya?",
      answer:
        "Typically April and May when pricing is lower and landscapes are lush.",
    },
    {
      question: "Do I need vaccinations for Kenya?",
      answer:
        "Travel requirements vary and should always be discussed with a medical professional.",
    },
    {
      question: "Should I use a travel advisor for safari planning?",
      answer:
        "Safari planning is highly specialized and expert guidance can dramatically improve the experience.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/#webpage",
        url: "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/",
        name: "Luxury Kenya Safari: The Ultimate Guide for High End Travelers in 2026",
        description:
          "Plan the ultimate luxury Kenya safari with expert insights from Angela Hughes. Discover the best safari regions, luxury camps, Great Migration timing, safari costs, family safaris, honeymoon experiences, and what makes Kenya one of Africa’s top safari destinations.",
        isPartOf: {
          "@id": "https://www.tripsandships.com/#website",
        },
        about: [
          {
            "@type": "Place",
            name: "Kenya",
          },
          {
            "@type": "Place",
            name: "Maasai Mara",
          },
          {
            "@type": "Place",
            name: "Amboseli National Park",
          },
          {
            "@type": "Place",
            name: "Samburu National Reserve",
          },
          {
            "@type": "Place",
            name: "Laikipia",
          },
          {
            "@type": "Place",
            name: "Lewa Wildlife Conservancy",
          },
          {
            "@type": "Thing",
            name: "Luxury Safari",
          },
          {
            "@type": "Thing",
            name: "Great Migration",
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/images/luxury-kenya-safari.jpg",
        },
      },
      {
        "@type": "Article",
        "@id":
          "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/#article",
        headline:
          "Luxury Kenya Safari: The Ultimate Guide for High End Travelers",
        description:
          "A luxury Kenya safari guide covering the Maasai Mara, Amboseli, Samburu, Laikipia, Lewa Conservancy, Great Migration timing, safari costs, luxury camps, honeymoons, family safaris, and expert planning strategy.",
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
            "Luxury Kenya safaris",
            "African safaris",
            "Maasai Mara safaris",
            "Great Migration safaris",
            "Luxury safari planning",
            "Family safaris",
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
            "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/#webpage",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a luxury Kenya safari cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most luxury Kenya safaris range from $25,000 to $100,000 or more depending on season, camp level, conservancy access, private guiding, internal flights, and itinerary design.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best month for a Kenya safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "July through October is best for Great Migration river crossing season in the Maasai Mara. January through March can also be excellent for wildlife viewing with fewer crowds.",
            },
          },
          {
            "@type": "Question",
            name: "Is Kenya good for first time safari travelers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Kenya is often one of the best first safari destinations because it offers strong wildlife density, excellent guiding, efficient logistics, and a wide range of luxury safari camps.",
            },
          },
          {
            "@type": "Question",
            name: "Is Kenya safe for luxury travel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kenya can be a safe and rewarding luxury travel destination when planned with experienced safari operators, trusted guides, proper routing, and professional on the ground support.",
            },
          },
          {
            "@type": "Question",
            name: "How many days do I need for a Kenya safari?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most luxury Kenya safaris work best with 7 to 10 days on the ground. This allows enough time for Nairobi, the Maasai Mara, and one additional region such as Lewa, Laikipia, Samburu, or Amboseli.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best safari area in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Maasai Mara is Kenya’s most iconic safari region and is known for wildlife density, predator sightings, luxury tented camps, and Great Migration river crossings. Other excellent regions include Laikipia, Lewa, Amboseli, and Samburu.",
            },
          },
          {
            "@type": "Question",
            name: "Can I combine Kenya with beach destinations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Kenya combines beautifully with luxury beach destinations such as Seychelles, Zanzibar, and the Indian Ocean islands. These pairings work especially well for honeymoons and longer luxury itineraries.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Great Migration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Great Migration is the year round movement of wildebeest, zebra, and other animals through the Serengeti Maasai Mara ecosystem. In Kenya, the Maasai Mara is best known for dramatic river crossings, typically from July through October.",
            },
          },
          {
            "@type": "Question",
            name: "Are private safari guides worth it in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Private safari guides are often worth the investment, especially for photographers, families, honeymooners, and Great Migration safaris. Private guiding improves flexibility, pacing, positioning, and the overall quality of the safari experience.",
            },
          },
          {
            "@type": "Question",
            name: "Do luxury Kenya safaris include flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury Kenya safari itineraries often include internal bush flights, depending on the structure of the trip. International airfare is usually separate unless specifically included in the package.",
            },
          },
          {
            "@type": "Question",
            name: "What makes Kenya different from Tanzania?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kenya generally offers easier logistics, shorter transfer times, concentrated wildlife viewing, and strong conservancy systems. Tanzania often offers larger landscapes, longer distances, and more expansive safari routing.",
            },
          },
          {
            "@type": "Question",
            name: "Can children go on safari in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Many luxury safari camps in Kenya welcome children and offer family tents, private vehicles, flexible pacing, and educational wildlife experiences. The right camp selection is important for family safari planning.",
            },
          },
          {
            "@type": "Question",
            name: "What is the green season in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kenya’s green season typically falls around April and May. During this period, landscapes are lush, pricing may be lower, and crowds are often lighter, although weather requires flexible planning.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need vaccinations for Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Travel health requirements for Kenya can vary by traveler, routing, and current regulations. Travelers should consult a qualified medical professional or travel clinic before departure.",
            },
          },
          {
            "@type": "Question",
            name: "Should I use a travel advisor for Kenya safari planning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Luxury Kenya safari planning is highly specialized. Camp placement, timing, routing, guide quality, conservancy access, and operator selection can dramatically affect the overall safari experience.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/#breadcrumb",
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
            name: "Luxury Kenya Safari",
            item: "https://www.tripsandships.com/luxury-safaris/luxury-kenya-safari/",
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
          "Luxury Kenya safaris",
          "African safaris",
          "Great Migration safaris",
          "Maasai Mara safaris",
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

  return (
    <>
      <Helmet>
        <title>
          Luxury Kenya Safari: The Ultimate Guide for High End Travelers in 2026
        </title>
        <meta
          name="description"
          content="Plan the ultimate luxury Kenya safari with expert insights from Angela Hughes. Discover the best safari regions, luxury camps, Great Migration timing, safari costs, family safaris, honeymoon experiences, and what makes Kenya one of Africa’s top safari destinations."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────────────── */}
      <section className="kenya-hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`kenya-hero-bg ${i === currentHero ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="kenya-hero-overlay" />

        <div className="kenya-hero-inner">
          <h1 className="kenya-h1">
            Luxury Kenya Safari:
            <br />
            The Ultimate Guide for
            <br />
            High End Travelers
          </h1>

          <div className="kenya-hero-editorial">
            <p className="kenya-hero-lead">
              There is a reason Kenya remains one of the most iconic safari
              destinations in the world.
              <br />
              For many travelers, Kenya is where the dream of Africa begins. The
              images people carry in their minds of East Africa often come from
              here. Endless golden grasslands. Acacia trees stretched across the
              horizon. Elephants moving quietly through morning mist. Lions
              crossing the savanna at sunrise.Luxury tented camps <br /> glowing under
              lantern light at night.
            </p>

            {!showFullHero && (
              <button
                className="kenya-read-more-btn"
                onClick={() => setShowFullHero(true)}
              >
                Read More <Plus size={16} />
              </button>
            )}

            {showFullHero && (
              <div className="kenya-hero-extended">
                <p className="kenya-hero-lead">
                  But Kenya is not extraordinary simply because it is famous.
                  <br />
                  It is extraordinary because it delivers.
                </p>
                <p className="kenya-hero-lead">
                  Kenya offers some of the strongest wildlife density in Africa,
                  exceptional safari guiding, relatively efficient logistics,
                  and an extraordinary range of luxury safari experiences. For
                  first time safari travelers, it can provide one of the most
                  accessible introductions to East Africa. For experienced
                  travelers, it still delivers sophistication, depth,
                  conservation focused travel, and remarkable wildlife
                  encounters.
                </p>
                <p className="kenya-hero-lead">
                  With over four decades in the travel industry, travel to 121+
                  countries, and extensive safari experience across Africa,
                  Angela Hughes works with travelers to design Kenya safaris
                  based on timing, wildlife movement, routing, and camp
                  placement <br /> rather than generic itineraries.
                </p>
                <p className="kenya-hero-lead">
                  Because in Kenya, where you stay matters just as much as where
                  you go.
                </p>

                <div className="hero-toggle-wrap">
                  <button
                    className="kenya-read-more-btn"
                    onClick={() => setShowFullHero(false)}
                  >
                    Read Less <Minus size={16} />
                  </button>
                </div>
              </div>
            )}

            <div className="kenya-hero-btns">
              <button className="kenya-btn-primary">
                Schedule a 15 Minute Kenya Safari Consultation
              </button>
              <button className="kenya-btn-outline-white">
                Luxury safari is not about booking a lodge. It is about
                designing the experience correctly.
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN (BENTO GRID - WOW UI) ────────────────────────────────────── */}
      <section className="kenya-seen-in-premium">
        <div className="kenya-inner">
          <span className="kenya-seen-label-top">AS SEEN IN</span>
          <div className="kenya-seen-slider">
            <div className="kenya-seen-track">
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
                  <div key={index} className="kenya-seen-box">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="kenya-seen-logo"
                    />
                    <span className="kenya-seen-text">{item.name}</span>
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
          <div class="itinerary-bar"></div>
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

      {/* ── WHY TRAVELERS FALL IN LOVE ───────────────────────────────────────────── */}
      <section className="kenya-pinnacle-gallery">
        <div className="kenya-pinnacle-gallery-container">
          <div className="kenya-pinnacle-panels">
            <div className="kenya-pinnacle-side-label">EST. 1984</div>
            <div className="kenya-pinnacle-panel">
              <img
                src={africa3}
                alt="Luxury Safari Interior"
                loading="lazy"
              />
            </div>
            <div className="kenya-pinnacle-panel">
              <img
                src={africa4}
                alt="Safari Landscape"
                loading="lazy"
              />
            </div>
            <div className="kenya-pinnacle-panel">
              <img
                src={africa5}
                alt="Safari Camp"
                loading="lazy"
              />
            </div>
          </div>

          <div className="kenya-pinnacle-gallery-text">
            <span className="kenya-pinnacle-eyebrow">
              Why Travelers Fall In Love With Kenya
            </span>
            <h2>Kenya Changes People.</h2>
             <div class="kenya-wisdom-decor1"></div>
            <p className="kenya-p">
              There is something about the rhythm of safari life that slows the
              world down. Mornings begin before sunrise with coffee quietly
              delivered to your tent while the bush begins to wake. The sound of
              distant lions carries through the darkness. Vehicles leave camp
              while the sky slowly shifts from black to gold.
            </p>
            <p className="kenya-p">
              By midday, the pace softens. Evenings return to lanterns, fire
              pits, stories, and silence under enormous African skies.
            </p>
            <p className="kenya-p">
              Many travelers arrive expecting wildlife. What they do not expect
              is how Kenya makes them feel. The stillness. The scale. The
              emotional reset that comes from stepping completely outside normal
              life.
            </p>
            <div className="kenya-pinnacle-gallery-quote">
              <p>
                "That is often what stays with people long after the safari
                ends."
              </p>
              <span className="kenya-pinnacle-signature">
                Angela Hughes, CEO
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ── GLOBAL EXCELLENCE BENCHMARK (WOW UI) ────────────────────────────────── */}
      <section className="kenya-wow-section">
        <div className="kenya-wow-container">
          <div className="kenya-wow-header">
            <h2 className="kenya-wow-h2">
              <span className="kenya-wow-h2-top">Why Kenya Remains</span>
              <span className="kenya-wow-h2-bottom">
                One of the Best Safari Destinations in the World
              </span>
            </h2>
             <div class="kenya-wisdom-decor"  style={{ background: "#fff" }}></div>
          </div>

          <div className="kenya-wow-main">
            <div className="kenya-wow-content">
              <p className="kenya-wow-lead">
                Kenya remains one of the strongest safari destinations in Africa
                for several reasons.
              </p>

              <div className="kenya-wow-tiles">
                <div className="kenya-wow-tile">
                  <div className="kenya-wow-tile-icon">
                    <Star size={24} />
                  </div>
                  <div className="kenya-wow-tile-body">
                    <h3>Exceptional Wildlife Density</h3>
                    <p>
                      Wildlife density is exceptional, particularly in and
                      around the Maasai Mara, delivering consistent world-class
                      sightings.
                    </p>
                  </div>
                </div>
                <div className="kenya-wow-tile">
                  <div className="kenya-wow-tile-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="kenya-wow-tile-body">
                    <h3>Superior Infrastructure</h3>
                    <p>
                      Highly developed systems including strong internal flight
                      networks, experienced safari operators, and Africa's most
                      respected guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kenya-wow-visual">
              <div className="kenya-wow-image-frame">
                <img src={africa6} alt="Kenya Safari Landscape" />
                <div className="kenya-wow-seal">
                  <Award size={32} />
                  <div className="kenya-wow-seal-text">
                    <strong>#1</strong>
                    <span>Global Benchmark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Matrix Section */}
          <div className="kenya-wow-matrix-section">
            <div className="kenya-wow-matrix">
              <h4 className="kenya-wow-matrix-title">
                KENYA WORKS EXCEPTIONALLY WELL FOR:
              </h4>
              <div className="kenya-wow-matrix-grid">
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>First time safari travelers</span>
                </div>
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>Luxury honeymooners</span>
                </div>
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>Photographers</span>
                </div>
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>Families</span>
                </div>
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>Multi generational travelers</span>
                </div>
                <div className="kenya-wow-matrix-item">
                  <CheckCircle size={14} className="kenya-wow-item-icon" />
                  <span>Repeat Africa travelers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="kenya-wow-footer-section">
            <div className="kenya-wow-footer">
              <p>
                The pacing can feel easier than some neighboring countries while
                still delivering extraordinary wildlife experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERIC TRUTH SECTION ────────────────────────────────────────── */}
      <section className="kenya-truth-section">
        <div className="kenya-truth-container">
          <div className="kenya-truth-content">
            <span className="kenya-truth-eyebrow">Managing Expectations</span>
            <h2 className="kenya-truth-h2">WHAT KENYA <br /> SAFARI IS NOT</h2>
                 <div class="kenya-wisdom-decor"></div>

            <div className="kenya-truth-negatives">
              <div className="kenya-truth-neg-item">
                <span className="kenya-neg-slash">/</span>
                <p>Kenya is not a zoo.</p>
              </div>
              <div className="kenya-truth-neg-item">
                <span className="kenya-neg-slash">/</span>
                <p>
                  It is not guaranteed wildlife theater operating on a fixed
                  schedule.
                </p>
              </div>
              <div className="kenya-truth-neg-item">
                <span className="kenya-neg-slash">/</span>
                <p>
                  It is not a checklist experience where every sighting happens
                  on command.
                </p>
              </div>
            </div>

            <div className="kenya-truth-philosophical">
              <p className="kenya-philosophy-lead">
                Safari rewards patience, positioning, timing, and excellent
                guiding far more than speed.
              </p>
              <p className="kenya-philosophy-body">
                Some of the most extraordinary moments happen unexpectedly. A
                leopard appearing at dusk. Elephants moving silently through
                camp. A crossing that begins after hours of waiting.
              </p>
            </div>

            <div className="kenya-truth-conclusion">
              <p>
                This unpredictability is part of what makes safari
                extraordinary.
              </p>
            </div>
          </div>

          <div className="kenya-truth-visual">
            <img
              src={africa7}
              alt="Leopard at Dusk"
              className="kenya-truth-img"
            />
            <div className="kenya-truth-img-overlay"></div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DUALITY DOSSIER (KENYA VS TANZANIA) ───────────────────────── */}
      <section className="kenya-vs-section">
        <div className="kenya-vs-header">
          <h2 className="kenya-vs-h2">
            What Makes Kenya Different From Tanzania
          </h2>
          <div class="itinerary-bar"></div>
          <p className="kenya-vs-lead">
            Kenya and Tanzania share ecosystems, wildlife movement, and
            migration patterns, but the experience feels very different.
          </p>
        </div>

        <div className="kenya-vs-container">
          <div className="kenya-vs-split">
            <div className="kenya-vs-emblem">VS</div>

            {/* Kenya Column */}
            <div className="kenya-vs-col kenya-focus">
              <div className="kenya-vs-branding">
                <h3 className="kenya-vs-title">THE KENYA EXPERIENCE</h3>
              </div>
              <div className="kenya-vs-points">
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Clock size={20} />
                  </div>
                  <p>Easier logistics</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Activity size={20} />
                  </div>
                  <p>Shorter transfer times</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Binoculars size={20} />
                  </div>
                  <p>Concentrated wildlife viewing</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <p>Strong conservancy systems</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <TrendingUp size={20} />
                  </div>
                  <p>Shorter high impact itineraries</p>
                </div>
              </div>
            </div>

            {/* Tanzania Column */}
            <div className="kenya-vs-col tanzania-focus">
              <div className="kenya-vs-branding">
                <h3 className="kenya-vs-title">THE TANZANIA EXPERIENCE</h3>
              </div>
              <div className="kenya-vs-points">
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Globe size={20} />
                  </div>
                  <p>Larger landscapes</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Compass size={20} />
                  </div>
                  <p>More expansive routing</p>
                </div>
                <div className="kenya-vs-point">
                  <div className="kenya-vs-point-icon">
                    <Clock size={20} />
                  </div>
                  <p>Longer immersive journeys</p>
                </div>
              </div>
            </div>
          </div>

          <div className="kenya-vs-conclusion">
            <div className="kenya-vs-conclusion-inner">
              <Sparkles
                size={32}
                className="kenya-ledger-icon"
                style={{
                  marginBottom: "20px",
                  color: "var(--kenya-navy)",
                  opacity: 0.6,
                }}
              />
              <h4>Neither is universally better.</h4>
              <p>
                The right choice depends on timing, travel style, and
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ── THE REGIONAL SHOWCASE SLIDER (REGIONS) ────────────────────────────────── */}
      <section className="kenya-regions-sector">
        {regions.map((region, i) => (
          <div
            key={`bg-${i}`}
            className={`region-bg-image ${i === activeRegion ? "active" : ""}`}
            style={{ backgroundImage: `url(${region.image})` }}
          />
        ))}
        <div className="region-overlay-dark" />
        <div className="kenya-inner">
          <div className="collection-header">
            <h2 className="collection-h2">
              BEST LUXURY SAFARI REGIONS IN KENYA
            </h2>
            <div className="collection-line"></div>
          </div>

          <div className="regions-display-modern">
            <div className="regions-content-stack">
              {regions.map((region, i) => (
                <div
                  key={i}
                  className={`region-folio-card ${i === activeRegion ? "active" : ""}`}
                >
                  <div className="folio-header">
                    <span className="folio-index">REGION 0{i + 1}</span>
                    <h3 className="folio-title">{region.name}</h3>
                  </div>

                  <div className="folio-body">
                    <p className="folio-intro">{region.intro}</p>

                    {region.knownFor && (
                      <div className="folio-feature-block">
                        <span className="folio-sublabel">KNOWN FOR:</span>
                        <ul className="folio-feature-list">
                          {region.knownFor.map((item, idx) => (
                            <li key={idx}>
                              <CheckCircle size={14} className="feature-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="folio-suitability-block">
                      <span className="folio-sublabel">
                        OPTIMAL SUITABILITY:
                      </span>
                      <p className="folio-suitability-text">
                        {region.worksWellFor}
                      </p>
                    </div>
                  </div>

                  <div className="folio-footer-minimal">
                    <div className="folio-cta-line"></div>
                    <button className="folio-luxury-cta">
                      Explore Experience <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Side Navigation / Indicator */}
            <div className="regions-side-nav">
              {regions.map((region, i) => (
                <button
                  key={i}
                  className={`side-nav-item ${i === activeRegion ? "active" : ""}`}
                  onClick={() => setActiveRegion(i)}
                >
                  <span className="side-nav-num">0{i + 1}</span>
                  <span className="side-nav-name">{region.name}</span>
                  <div className="side-nav-progress">
                    <div
                      className="side-nav-fill"
                      style={{
                        width: i === activeRegion ? "100%" : "0%",
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY KENYA’S CONSERVANCIES MATTER ───────────────────────────────────────── */}
      <section className="kenya-conservancy-premium">
        <div className="kenya-inner">
          <div className="conservancy-header-simple">
            <h2 className="conservancy-h2">WHY KENYA’S CONSERVANCIES MATTER</h2>
            <div class="itinerary-bar"></div>
            <p className="conservancy-intro-simple">
              Private conservancies often provide:
            </p>
          </div>

          <div className="conservancy-list-minimal">
            <div className="conservancy-minimal-item">
              <div className="minimal-bullet" />
              <span>lower vehicle density</span>
            </div>
            <div className="conservancy-minimal-item">
              <div className="minimal-bullet" />
              <span>more exclusive experiences</span>
            </div>
            <div className="conservancy-minimal-item">
              <div className="minimal-bullet" />
              <span>stronger wildlife positioning</span>
            </div>
            <div className="conservancy-minimal-item">
              <div className="minimal-bullet" />
              <span>greater flexibility</span>
            </div>
            <div className="conservancy-minimal-item">
              <div className="minimal-bullet" />
              <span>stronger conservation funding</span>
            </div>
          </div>

          <div className="conservancy-quote-wrap">
            <p className="conservancy-quote-main">
              Many luxury travelers eventually realize that privacy and pacing
              become just as valuable as wildlife itself.
            </p>
            <p className="conservancy-quote-highlight">
              The most luxurious thing in Kenya is often space.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE STRATEGIC OVERLAY (LUXURY & PLACEMENT) ──────────────────────────────── */}
      <section className="kenya-strategy-blueprint">
        <div className="kenya-inner">
          <div className="strategy-folio-layout">
            {/* Dossier 01: The Luxury Paradox */}
            <div className="folio-dossier dossier-dark">
              <div className="dossier-main">
                <h2 className="dossier-h2">
                  WHY LUXURY CHANGES THE <br />
                  <span className="dossier-highlight">SAFARI EXPERIENCE</span>
                </h2>
                <div class="kenya-wisdom-decor"  style={{ background: "#fff" }}></div>
                <p className="dossier-p">
                  Luxury safari is not simply about beautiful rooms. It is often
                  operational rather than cosmetic—shifting the very nature of
                  how you interact with the wilderness.
                </p>

                <div className="dossier-breakdown">
                  <span className="breakdown-eyebrow">
                    KEY OPERATIONAL SHIFTS
                  </span>
                  <div className="breakdown-grid-modern">
                    {[
                      { label: "Wildlife access", icon: <Zap size={14} /> },
                      { label: "Guide quality", icon: <UserCheck size={14} /> },
                      {
                        label: "Conservancy access",
                        icon: <MapPin size={14} />,
                      },
                      { label: "Flexibility", icon: <Activity size={14} /> },
                      {
                        label: "Transfer efficiency",
                        icon: <Clock size={14} />,
                      },
                      { label: "Crowd levels", icon: <Shield size={14} /> },
                    ].map((item, i) => (
                      <div key={i} className="modern-breakdown-item">
                        <span className="item-icon-wrap">{item.icon}</span>
                        <span className="item-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dossier-quote">
                <Quote size={20} className="quote-icon" />
                <p>
                  "Safari is one of the few trips in the world where where you
                  sleep can completely change what you see."
                </p>
              </div>
            </div>

            {/* Dossier 02: Strategic Positioning */}
            <div className="folio-dossier dossier-light">
              <div className="dossier-main">
                <h2 className="dossier-h21">
                  WHY CAMP PLACEMENT MATTERS <br />
                  <span className="dossier-highlight">MORE THAN BRAND</span>
                </h2>
                <div class="kenya-wisdom-decor"></div>
                <p className="dossier-p1">
                  Many travelers focus almost entirely on camp photography. But
                  in safari planning, camp location often matters far more than
                  aesthetics or brand name.
                </p>

                <div className="dossier-insight-callout">
                  <p>
                    "The wrong camp in the right region can still create the
                    wrong safari."
                  </p>
                </div>

                <div className="dossier-breakdown">
                  <span className="breakdown-eyebrow">POSITIONING IMPACT</span>
                  <div className="impact-tags-container">
                    {[
                      "Wildlife access",
                      "Migration timing",
                      "Drive times",
                      "Crowd density",
                      "Safari rhythm",
                    ].map((item, i) => (
                      <span key={i} className="impact-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dossier-footer-note">
                <p>
                  This is one of the biggest mistakes travelers make when
                  booking safari without experienced guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KENYA SAFARI VIDEO FEATURE ──────────────────────────────────────────── */}
      <section className="kenya-video-feature-section">
        <div className="kenya-inner">
          <div className="kenya-video-full-header">
            <h2 className="kenya-video-h2">
              Experience Kenya Through the Lens
            </h2>
            <div class="itinerary-bar"></div>
          </div>

          <div className="kenya-video-full-frame">
            <div className="kenya-video-glow-ring"></div>
            <div className="kenya-video-frame-wrap">
              <iframe
                src="https://www.youtube.com/embed/WkYDd6tLLYE?rel=0&modestbranding=1"
                title="Kenya Luxury Safari Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="kenya-video-iframe"
              ></iframe>
            </div>
            </div>
          </div>
      </section>


      <section className="kenya-soul-immersion">
        <div className="kenya-inner">
          <div className="soul-header-folio">
            <h2 className="soul-h2">
              WHAT DAILY LIFE ON SAFARI <br />
              ACTUALLY LOOKS LIKE
            </h2>
            <div class="itinerary-bar"></div>
          </div>

          <div className="soul-card-row">
            <div className="soul-moment-card">
              <div className="moment-index">DAWN</div>
              <span className="moment-time">05:30 AM</span>
              <p className="moment-p">
                Most days begin before sunrise with coffee quietly delivered to
                your tent while camp is still dark. Vehicles leave early because
                wildlife activity is strongest in the cooler morning hours.
              </p>
            </div>

            <div className="soul-moment-card">
              <div className="moment-index">AFTERNOON</div>
              <span className="moment-time">01:00 PM</span>
              <p className="moment-p">
                Afternoons are slower. Travelers often spend time reading,
                watching wildlife from camp, or simply sitting quietly
                overlooking the plains.
              </p>
            </div>

            <div className="soul-moment-card">
              <div className="moment-index">EVENING</div>
              <span className="moment-time">06:30 PM</span>
              <p className="moment-p">
                Evenings return to lanterns, fire pits, storytelling, and
                silence under enormous African skies.
              </p>
            </div>
          </div>

          <div className="soul-grounding-block">
            <p className="grounding-p">
              Many travelers arrive expecting constant activity. Instead, safari
              often becomes one of the most emotionally grounding trips they
              have ever taken.
            </p>
            <div className="soul-quote-minimal">
              "Safari changes the way people think about silence."
            </div>
          </div>
        </div>
      </section>

      {/* ── SENSE OF PLACE: WAKING UP IN THE MARA (MAGAZINE SPREAD DESIGN) ───────── */}
      <section className="kenya-mara-awakening-v2">
        <div className="kenya-inner">
          <div className="awakening-split-grid">
            <div className="awakening-visual-col">
              <div className="awakening-main-img-wrap">
                <img src={africa2} alt="Maasai Mara" className="awakening-main-img" />
                <div className="awakening-img-label">05:30 AM / DAWN IN THE MARA</div>
              </div>
              <div className="awakening-secondary-img-wrap">
                <img src={africa8} alt="Safari Detail" className="awakening-secondary-img" />
              </div>
            </div>

            <div className="awakening-text-col">
              <span className="awakening-eyebrow-v2">SENSE OF PLACE</span>
              <h2 className="awakening-h2-v2">
                What it feels like <br />
                <span className="h2-v2-accent">To Wake Up</span> <br />
                in the Maasai Mara
              </h2>
              
              <div className="awakening-narrative-v2">
                <p className="narrative-lead-v2">
                  Before sunrise, camp is quiet except for distant wildlife
                  moving through darkness.
                </p>
                <div className="narrative-columns-v2">
                  <p>
                    Lanterns flicker outside tents while the sky slowly changes
                    color across the plains. There are mornings when elephants
                    walk directly through camp.
                  </p>
                  <p>
                    Evenings where lions can be heard after dinner. Luxury in
                    Kenya is not disconnected from nature. The best camps make
                    travelers feel immersed inside it.
                  </p>
                </div>
              </div>

              <div className="awakening-quote-block-v2">
                <div className="quote-line-v2" />
                <p>"Safari changes the way people think about silence."</p>
                <span className="quote-author-v2">— TRIPS & SHIPS PHILOSOPHY</span>
              </div>
            </div>
          </div>
        </div>
      </section>



            {/* ── ABOUT ANGELA HUGHES (PROFILE - WOW UI) ───────────────────────────────── */}
      <section className="kenya-about-angela">
        <div className="kenya-inner">
          <div className="angela-grid">
            {/* Left: Photo */}
            <div className="angela-photo-wrap">
              <div className="angela-image-container">
                <img
                  src={angelaHughes}
                  alt="Angela Hughes - Luxury Travel Designer"
                  className="angela-image"
                />
                <div className="angela-accent-box"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="angela-content">
              <div className="angela-content-inner">
                <h2 className="angela-h2">About Angela Hughes</h2>
                <div className="angela-divider"></div>

                {/* Expertise Markers */}
                <div className="kenya-angela-markers">
                  <div className="kenya-angela-marker">
                    <Award size={16} />
                    <span>Award Winning</span>
                  </div>
                  <div className="kenya-angela-marker">
                    <Navigation size={16} />
                    <span>121+ Countries</span>
                  </div>
                  <div className="kenya-angela-marker">
                    <Zap size={16} />
                    <span>Geography Professor</span>
                  </div>
                </div>

                <div className="angela-bio">
                  <p>
                    Angela Hughes is one of the most recognized voices in luxury
                    travel. She has spent decades designing complex luxury
                    itineraries across Africa and around the world.
                  </p>
                </div>

                <div className={`kenya-angela-expandable ${showBioFull ? "expanded" : ""}`}>
                  <p className="kenya-angela-expand-p">
                    Luxury safari planning requires far more than choosing a
                    lodge or deciding between Kenya and Tanzania. The timing of
                    the migration, regional weather patterns, wildlife movement,
                    flight logistics, conservation access, guide quality, and
                    pacing of the itinerary all shape the overall experience.
                    As a professor of Travel and Tourism and Geography, award
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
                  className="kenya-angela-read-more"
                  onClick={() => setShowBioFull(!showBioFull)}
                >
                  {showBioFull ? "Read Less" : "Read More About Angela"}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: showBioFull ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </button>

                <div className="angela-recognition">
                  <span className="recognition-label">
                    Industry Recognition
                  </span>
                  <ul className="recognition-list">
                    <li>
                      <Award size={18} className="recognition-icon" />
                      <span>
                        Named Luxury Travel Influencer of the Year by Travel
                        Leaders Network
                      </span>
                    </li>
                    <li>
                      <Award size={18} className="recognition-icon" />
                      <span>
                        Recognized as one of the Most Influential Women in
                        Travel by TravelPulse
                      </span>
                    </li>
                    <li>
                      <Award size={18} className="recognition-icon" />
                      <span>
                        Winner of multiple Magellan Awards from Travel Weekly
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="angela-manifesto">
                  <p className="manifesto-p">
                    Clients do not work with Angela Hughes to simply book
                    travel.
                    <br />
                    <span className="manifesto-bold">
                      They work with her to get it right.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── LOGISTICS: INTERNATIONAL ARRIVAL ───────────────────────────────── */}
      <section className="kenya-logistics-dossier">
        <div className="kenya-inner">
          <div className="logistics-arrival-editorial">
            <div className="arrival-text-block">
              <h2 className="arrival-h2">
                PLANNING A LUXURY KENYA SAFARI FROM THE UNITED STATES
              </h2>
              <div class="kenya-wisdom-decor1"></div>
              <p className="arrival-p">
                Flights typically connect through Europe, the Middle East, or
                African gateways before arriving in Nairobi.
              </p>
              <div className="arrival-timeline-box">
                <span className="timeline-label">OPTIMAL DURATION</span>
                <p className="timeline-text">
                  For most luxury travelers: <strong>7 to 10 days</strong> is
                  ideal.
                </p>
              </div>
            </div>

            <div className="arrival-tactical-block">
              <span className="tactical-eyebrow">PRIMARY GATEWAYS</span>
              <h3 className="tactical-h3">
                Most American travelers reach Kenya through:
              </h3>
              <div className="gateway-grid-modern">
                <span>New York</span>
                <span>Atlanta</span>
                <span>Washington DC</span>
                <span>Chicago</span>
                <span>Miami</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGISTICS: NAIROBI EXPERIENCE ───────────────────────────────── */}
      <section className="kenya-logistics-dossier nairobi-editorial-section">
        <div className="kenya-inner">
          <div className="nairobi-experience-editorial">
            <div className="nairobi-content-block">
              <h2 className="nairobi-h2">LUXURY NAIROBI BEFORE SAFARI</h2>
                 <div class="kenya-wisdom-decor1"></div>
              <p className="nairobi-p">
                Nairobi is often treated as simply an arrival point, but for
                luxury travelers it can become an important part of the
                experience.
              </p>
              <div className="nairobi-conclusion-box">
                <p className="nairobi-conclusion-text">
                  "Spending one or two nights in Nairobi before safari often
                  creates a much smoother transition into East Africa."
                </p>
              </div>
            </div>

            <div className="nairobi-tactical-block">
              <span className="nairobi-eyebrow">CURATED EXPERIENCES</span>
              <h3 className="nairobi-h3">
                Popular luxury experiences include:
              </h3>
              <div className="nairobi-experience-grid">
                <span>Giraffe Manor</span>
                <span>Hemingways Nairobi</span>
                <span>Karen Blixen experiences</span>
                <span>private cultural touring</span>
                <span>fine dining experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KENYA: WORRIES & REALITY ───────────────────────────────── */}
      <section className="kenya-worries-reality-section">
        <div className="kenya-inner">
          <div className="kenya-worries-editorial">
            <div className="kenya-worries-content">
              <h2 className="kenya-worries-h2">
                WHAT FIRST TIME KENYA SAFARI TRAVELERS ARE OFTEN WORRIED ABOUT
              </h2>
                 <div class="kenya-wisdom-decor1"></div>
              <div className="kenya-reality-box">
                <span className="kenya-reality-label">THE REALITY</span>
                <p className="kenya-reality-p">
                  The reality is that luxury safari camps today are often highly
                  sophisticated operations with exceptional hospitality and
                  comfort.
                </p>
                <p className="kenya-reality-highlight">
                  "Many travelers are surprised by how refined the experience
                  feels."
                </p>
              </div>
            </div>

            <div className="kenya-concerns-block">
              <span className="kenya-concerns-eyebrow">COMMON CONCERNS</span>
              <h3 className="kenya-concerns-h3">
                Many first time safari travelers worry about:
              </h3>
              <div className="kenya-concerns-grid">
                <span>Safety</span>
                <span>Bugs</span>
                <span>Bush Flights</span>
                <span>Bathrooms</span>
                <span>Malaria</span>
                <span>Food Quality</span>
                <span>Medical Care</span>
                <span>Comfort Levels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KENYA: MIGRATION INSIGHTS ───────────────────────────────── */}
      <section className="kenya-migration-intel-section">
        <div className="kenya-inner">
          <div className="migration-intel-header">
            <h2 className="migration-h2">
              WHY SOME TRAVELERS SHOULD NOT DO <br />
              PEAK MIGRATION SEASON
            </h2>
            <div class="itinerary-bar"></div>
            <p className="migration-lead">
              The Great Migration is extraordinary, but peak river crossing
              season is not automatically the best safari for every traveler.
            </p>
          </div>

          <div className="migration-dual-perspective">
            <div className="migration-card card-dark-warning">
              <span className="perspective-label">
                DURING MIGRATION SEASON:
              </span>
              <ul className="perspective-list">
                <li>Pricing is at its absolute highest</li>
                <li>Camps sell out far in advance</li>
                <li>Vehicle density can significantly increase</li>
                <li>Safari pacing can feel more intense</li>
              </ul>
            </div>

            <div className="migration-card card-light-strategic">
              <span className="perspective-label">BETTER ALTERNATIVES:</span>
              <h4 className="perspective-h4">
                Some travelers are actually happier traveling during:
              </h4>
              <div className="perspective-tags">
                <span className="p-tag">January through March</span>
                <span className="p-tag">Green Season</span>
                <span className="p-tag">Quieter Conservancy Periods</span>
              </div>
            </div>
          </div>

          <div className="migration-closing-quote">
            <p className="quote-p">
              "The best safari is not always the most famous season. It is the
              season that best matches the traveler."
            </p>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC TIMING (SEASONS - WOW UI) ─────────────────────────────────── */}
      <section className="kenya-seasons-timing">
        <div className="kenya-inner">
          <div className="seasons-header-folio">
            <h2 className="seasons-h2">BEST TIME FOR A LUXURY KENYA SAFARI</h2>
            <div class="itinerary-bar"></div>
          </div>

          <div className="seasons-triptych">
            <div className="season-card-minimal">
              <span className="season-meta">JULY THROUGH OCTOBER</span>
              <p className="season-p-main">
                Peak Great Migration season in the Maasai Mara.
              </p>
              <div className="season-best-for">
                <span className="best-for-label">Best for:</span>
                <ul className="best-for-list">
                  <li>river crossings</li>
                  <li>predator activity</li>
                  <li>first time safari travelers</li>
                </ul>
              </div>
            </div>

            <div className="season-card-minimal">
              <span className="season-meta">JANUARY THROUGH MARCH</span>
              <p className="season-p-main">
                Excellent wildlife viewing with fewer crowds.
              </p>
              <div className="season-best-for">
                <span className="best-for-label">Best for:</span>
                <ul className="best-for-list">
                  <li>photographers</li>
                  <li>repeat safari travelers</li>
                  <li>luxury value seekers</li>
                </ul>
              </div>
            </div>

            <div className="season-card-minimal">
              <span className="season-meta">APRIL THROUGH MAY</span>
              <p className="season-p-main">
                Green season. Requires flexibility with weather.
              </p>
              <div className="season-best-for">
                <span className="best-for-label">Benefits include:</span>
                <ul className="best-for-list">
                  <li>lower pricing</li>
                  <li>dramatic scenery</li>
                  <li>fewer tourists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="kenya-migration-intel-block">
            <h3 className="migration-intel-h3">GREAT MIGRATION IN KENYA</h3>
            <div className="migration-intel-grid">
              <div className="intel-main-text">
                <p>
                  River crossings in the Maasai Mara typically occur between
                  July and October, though movement is never guaranteed.
                </p>
              </div>
              <div className="intel-positioning">
                <p className="p-position">This is where positioning matters.</p>
                <p className="p-sub">
                  The difference between being properly positioned and poorly
                  positioned can define the entire safari experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KENYA: LUXURY COST FACTORS ───────────────────────────────── */}
      <section className="kenya-cost-factors-section-v2">
        <div className="kenya-inner">
          <div className="cost-factors-grid-v2">
            {/* Left: Content */}
            <div className="cost-factors-content-v2">
              <div className="cost-header-v2">
                <h2 className="cost-h2-v2">LUXURY KENYA <br /> SAFARI COST</h2>
                 <div class="kenya-wisdom-decor"></div>
                <div className="itinerary-bar-left"></div>
                <p className="cost-p-lead-v2">
                  Luxury Kenya safari pricing is not fixed. It is a highly
                  variable investment that scales based on the specific
                  architecture of your journey.
                </p>
              </div>

              <div className="cost-drivers-v2">
                <h3 className="drivers-h3-v2">
                  Pricing varies significantly based on:
                </h3>
                <div className="drivers-grid-v2">
                  {[
                    { label: "Season", icon: <Clock size={20} /> },
                    { label: "Camp Level", icon: <Star size={20} /> },
                    {
                      label: "Private versus Shared Safari",
                      icon: <Users size={20} />,
                    },
                    { label: "Internal Flights", icon: <Wind size={20} /> },
                    { label: "Migration Timing", icon: <Activity size={20} /> },
                    { label: "Conservancy Access", icon: <Shield size={20} /> },
                  ].map((factor, idx) => (
                    <div key={idx} className="driver-item-v2">
                      <div className="driver-icon-v2">{factor.icon}</div>
                      <span className="driver-label-v2">{factor.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="cost-factors-image-v2">
              <div className="cost-image-wrapper">
                <img
                  src={africa8}
                  alt="Kenya Safari Tour"
                  className="cost-main-img"
                />
                <div className="cost-image-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT TIERS (PRICE LEVELS - WOW UI) ────────────────────────────── */}
      <section className="kenya-investment-tiers">
        <div className="kenya-inner">
          <div className="tiers-header">
            <h2 className="tiers-h2">
              WHAT LUXURY KENYA SAFARI LOOKS LIKE AT DIFFERENT PRICE LEVELS
            </h2>
            <div className="tiers-bar"></div>
          </div>

          <div className="tiers-grid">
            {/* Tier 1: $25k */}
            <div className="tier-card">
              <div className="tier-header-block">
                <span className="tier-price">Around $25,000</span>
                <span className="tier-unit">Per Couple</span>
              </div>
              <div className="tier-body">
                <p className="tier-includes-label">Typically includes:</p>
                <ul className="tier-list">
                  <li>Upscale camps</li>
                  <li>Shared game drives</li>
                  <li>Internal flights</li>
                  <li>Shorter itineraries</li>
                </ul>
              </div>
              <div className="tier-footer">
                <p>Excellent first luxury safari level.</p>
              </div>
            </div>

            {/* Tier 2: $50k */}
            <div className="tier-card tier-featured">
              <div className="tier-header-block">
                <span className="tier-price">Around $50,000</span>
                <span className="tier-unit">Per Couple</span>
              </div>
              <div className="tier-body">
                <p className="tier-includes-label">Typically includes:</p>
                <ul className="tier-list">
                  <li>Stronger camp positioning</li>
                  <li>Luxury conservancies</li>
                  <li>Private guiding options</li>
                  <li>More refined routing</li>
                </ul>
              </div>
              <div className="tier-footer">
                <p>
                  This is where safari becomes dramatically more personalized.
                </p>
              </div>
            </div>

            {/* Tier 3: $100k+ */}
            <div className="tier-card">
              <div className="tier-header-block">
                <span className="tier-price">$100,000+</span>
                <span className="tier-unit">Per Couple</span>
              </div>
              <div className="tier-body">
                <p className="tier-includes-label">This level may include:</p>
                <ul className="tier-list">
                  <li>Private charter aircraft</li>
                  <li>Exclusive use villas</li>
                  <li>Elite conservancies</li>
                  <li>Highly customized experiences</li>
                  <li>Private photography guides</li>
                  <li>Multi-country itineraries</li>
                </ul>
              </div>
              <div className="tier-footer">
                <p>
                  At this level, safari becomes almost entirely tailored around
                  the traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST CAMPS EDITORIAL (CURATED COLLECTION) ───────────────────────────── */}
      <section className="kenya-camps-editorial">
        <div className="kenya-inner">
          <div className="camps-editorial-header">
            <h2 className="camps-h2">BEST LUXURY SAFARI CAMPS IN KENYA</h2>
            <div className="itinerary-bar"></div>
          </div>
        </div>

        <div className="camps-editorial-slider">
          <div className="camps-editorial-track">
            {[
              {
                id: "01",
                name: "Angama Mara",
                desc: "Angama Mara appeals strongly to travelers wanting cinematic scenery, elevated design, and direct access to the Mara Triangle.",
                suitability:
                  "The camp works particularly well for honeymooners, couples, and first time luxury safari travelers wanting a refined but iconic Kenya safari experience.",
              },
              {
                id: "02",
                name: "Mara Plains Camp",
                desc: "Mara Plains is known for exceptional guiding and wildlife positioning.",
                suitability:
                  "This camp appeals strongly to experienced safari travelers, photographers, and travelers prioritizing wildlife access over flashy design.",
              },
              {
                id: "03",
                name: "Cottar’s 1920s Camp",
                desc: "Cottar’s delivers one of the strongest classic East Africa safari atmospheres in Kenya.",
                suitability:
                  "This camp works particularly well for travelers wanting heritage, storytelling, and old world safari character.",
              },
              {
                id: "04",
                name: "Segera Retreat",
                desc: "Segera combines ultra luxury safari with conservation, art, wellness, and privacy.",
                suitability:
                  "This is one of Kenya’s most sophisticated safari experiences.",
              },
              {
                id: "05",
                name: "ol Donyo Lodge",
                desc: "ol Donyo is known for privacy, horseback safari experiences, and extraordinary Kilimanjaro views.",
                suitability:
                  "This camp appeals strongly to honeymooners and travelers wanting a quieter, highly immersive safari.",
              },
            ]
              .concat([
                {
                  id: "01",
                  name: "Angama Mara",
                  desc: "Angama Mara appeals strongly to travelers wanting cinematic scenery, elevated design, and direct access to the Mara Triangle.",
                  suitability:
                    "The camp works particularly well for honeymooners, couples, and first time luxury safari travelers wanting a refined but iconic Kenya safari experience.",
                },
                {
                  id: "02",
                  name: "Mara Plains Camp",
                  desc: "Mara Plains is known for exceptional guiding and wildlife positioning.",
                  suitability:
                    "This camp appeals strongly to experienced safari travelers, photographers, and travelers prioritizing wildlife access over flashy design.",
                },
                {
                  id: "03",
                  name: "Cottar’s 1920s Camp",
                  desc: "Cottar’s delivers one of the strongest classic East Africa safari atmospheres in Kenya.",
                  suitability:
                    "This camp works particularly well for travelers wanting heritage, storytelling, and old world safari character.",
                },
                {
                  id: "04",
                  name: "Segera Retreat",
                  desc: "Segera combines ultra luxury safari with conservation, art, wellness, and privacy.",
                  suitability:
                    "This is one of Kenya’s most sophisticated safari experiences.",
                },
                {
                  id: "05",
                  name: "ol Donyo Lodge",
                  desc: "ol Donyo is known for privacy, horseback safari experiences, and extraordinary Kilimanjaro views.",
                  suitability:
                    "This camp appeals strongly to honeymooners and travelers wanting a quieter, highly immersive safari.",
                },
              ])
              .map((camp, index) => (
                <div key={index} className="camp-folio-card">
                  <span className="camp-folio-num">{camp.id}</span>
                  <div className="camp-folio-content">
                    <h3 className="camp-folio-title">{camp.name}</h3>
                    <p className="camp-folio-desc">{camp.desc}</p>
                    <div className="camp-folio-suitability">
                      <span className="suitability-label">
                        EXPERT SUITABILITY
                      </span>
                      <p className="suitability-text">{camp.suitability}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── OVERHYPED WARNING (EXPERT ALERT - WOW UI) ────────────────────────────── */}
      <section className="kenya-overhyped-section">
        <div className="kenya-inner">
          <div className="expert-alert-box">
            <div className="alert-header-area">
              <div className="alert-badge">
                <ShieldAlert size={20} />
                <span>EXPERT ALERT</span>
              </div>
              <h2 className="alert-h2">WHY SOME CAMPS ARE OVERHYPED</h2>
              <div class="itinerary-bar"></div>
              <p className="alert-lead">
                Beautiful camp photography does not always create the best
                safari experience.
              </p>
            </div>

            <div className="alert-grid-layout">
              <div className="alert-list-section">
                <span className="alert-small-label">
                  MARKETING VS. REALITY:
                </span>
                <ul className="alert-ul">
                  <li>
                    <span className="alert-marker">01</span>
                    <div className="alert-li-content">
                      <strong>Weaker wildlife positioning</strong>
                      <span>Aesthetics over location access.</span>
                    </div>
                  </li>
                  <li>
                    <span className="alert-marker">02</span>
                    <div className="alert-li-content">
                      <strong>Longer drive times</strong>
                      <span>Hidden logistical compromises.</span>
                    </div>
                  </li>
                  <li>
                    <span className="alert-marker">03</span>
                    <div className="alert-li-content">
                      <strong>Heavier vehicle density</strong>
                      <span>High-traffic public areas.</span>
                    </div>
                  </li>
                  <li>
                    <span className="alert-marker">04</span>
                    <div className="alert-li-content">
                      <strong>Less experienced guiding</strong>
                      <span>Style over substance in the field.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="alert-conclusion-section">
                <div className="conclusion-card-v3">
                  <div className="conclusion-icon">
                    <Zap size={24} />
                  </div>
                  <p className="conclusion-p">
                    "Meanwhile, some of the most extraordinary safari
                    experiences happen in quieter camps with exceptional
                    location and guiding."
                  </p>
                  <div className="conclusion-decor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE ITINERARY (HORIZONTAL JOURNEY - WOW UI) ─────────────────────────── */}
      <section className="kenya-itinerary-section">
        <div className="kenya-inner">
          <div className="itinerary-header">
            <h2 className="itinerary-h2">
              SAMPLE LUXURY KENYA SAFARI ITINERARY
            </h2>
            <div className="itinerary-bar"></div>
            <p className="itinerary-lead">9 Day Luxury Kenya Safari Example</p>
          </div>

          <div className="itinerary-grid-horizontal">
            {[
              {
                day: "Day 1",
                title: "Arrival in Nairobi",
                icon: Plane,
              },
              {
                day: "Day 2 through 5",
                title: "Maasai Mara conservancy experience",
                icon: Binoculars,
              },
              {
                day: "Day 6 through 8",
                title: "Lewa Conservancy for rhino conservation",
                icon: ShieldCheck,
              },
              {
                day: "Day 9",
                title: "Departure",
                icon: MapPin,
              },
            ].map((step, i) => (
              <div key={i} className="itinerary-card-v3">
                <div className="card-step-num">{step.day}</div>
                <div className="card-icon-wrap">
                  <step.icon size={24} />
                </div>
                <h3 className="card-step-title">{step.title}</h3>
                {i < 3 && <div className="card-connector"></div>}
              </div>
            ))}
          </div>

          <div className="itinerary-footer-intel">
            <div className="intel-content-wrap">
              <Compass size={32} className="intel-icon-bottom" />
              <p className="intel-p-v3">
                This itinerary works particularly well because it balances
                iconic wildlife experiences with quieter conservation focused
                safari experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE DUALITY (HONEYMOONS & FAMILIES - WOW UI) ────────────────────── */}
      <section className="kenya-lifestyle-section">
        <div className="kenya-inner">
          <div className="lifestyle-grid">
            {/* Honeymoon Panel */}
            <div className="lifestyle-panel honeymoon-panel">
              <div className="panel-image-bg honeymoon-bg"></div>
              <div className="panel-overlay"></div>
              <div className="panel-content">
                <div className="panel-header-top">
                  <Heart size={24} className="panel-icon-glow" />
                  <span className="panel-eyebrow">ROMANTIC EXPEDITIONS</span>
                </div>
                <h2 className="panel-h2">
                  WHY KENYA IS A TOP HONEYMOON DESTINATION
                </h2>
                <div class="kenya-wisdom-decor"  style={{ background: "#fff" }}></div>
                <p className="panel-p">
                  Few trips combine adventure, intimacy, and emotional
                  connection the way safari does. Many couples describe it as
                  one of the few trips where they truly disconnected from the
                  outside world together.
                </p>
                <div className="panel-features">
                  <span className="features-label">
                    HONEYMOON SAFARIS OFTEN INCLUDE:
                  </span>
                  <ul className="features-list">
                    <li>
                      <Sparkles size={14} /> <span>Private tented camps</span>
                    </li>
                    <li>
                      <Sparkles size={14} />{" "}
                      <span>Candlelit dinners under the stars</span>
                    </li>
                    <li>
                      <Sparkles size={14} />{" "}
                      <span>Outdoor bathtubs overlooking the plains</span>
                    </li>
                    <li>
                      <Sparkles size={14} />{" "}
                      <span>Hot air balloon experiences</span>
                    </li>
                    <li>
                      <Sparkles size={14} />{" "}
                      <span>Seamless beach extensions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Family Panel */}
            <div className="lifestyle-panel family-panel">
              <div className="panel-image-bg family-bg"></div>
              <div className="panel-overlay"></div>
              <div className="panel-content">
                <div className="panel-header-top">
                  <Users size={24} className="panel-icon-glow" />
                  <span className="panel-eyebrow">
                    MULTI-GENERATIONAL JOURNEYS
                  </span>
                </div>
                <h2 className="panel-h2">
                  WHY KENYA WORKS SO WELL FOR FAMILIES
                </h2>
                <div
                  class="kenya-wisdom-decor"
                  style={{ background: "#fff" }}
                ></div>
                <p className="panel-p">
                  Luxury safari can become one of the most meaningful family
                  trips travelers ever take. Children often become deeply
                  engaged because safari feels immersive rather than passive.
                </p>
                <div className="panel-features">
                  <span className="features-label">
                    FAMILY SAFARIS OFTEN INCLUDE:
                  </span>
                  <ul className="features-list">
                    <li>
                      <CheckCircle size={14} />{" "}
                      <span>Private multi-room villas</span>
                    </li>
                    <li>
                      <CheckCircle size={14} />{" "}
                      <span>Expert guides specialized in children</span>
                    </li>
                    <li>
                      <CheckCircle size={14} />{" "}
                      <span>Bush school and conservation tracking</span>
                    </li>
                    <li>
                      <CheckCircle size={14} />{" "}
                      <span>Archery and traditional Maasai skills</span>
                    </li>
                    <li>
                      <CheckCircle size={14} />{" "}
                      <span>Secure, high-end camp environments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WISDOM COLUMNS (UNDERESTIMATES & PACING) ─────────────────────────────── */}
      <section className="kenya-wisdom-columns">
        <div className="kenya-inner">
          <div className="kenya-wisdom-grid">
            <div className="kenya-wisdom-col">
              <div className="kenya-wisdom-header">
                <h2 className="kenya-wisdom-h2">
                  WHAT LUXURY TRAVELERS UNDERESTIMATE MOST
                </h2>
                <div className="kenya-wisdom-decor"></div>
              </div>
              <p className="kenya-wisdom-p">
                Even experienced luxury travelers often underestimate the
                critical nuances of a Kenya safari. Luxury here is not about
                excess; in the best camps, luxury disappears into the experience
                itself.
              </p>
              <div className="kenya-wisdom-list">
                <span className="kenya-list-label">
                  COMMONLY UNDERESTIMATED:
                </span>
                <ul>
                  <li>
                    <Zap size={16} className="wisdom-icon" />
                    <span>Travel distances between remote conservancies</span>
                  </li>
                  <li>
                    <Zap size={16} className="wisdom-icon" />
                    <span>Luggage restrictions on internal bush flights</span>
                  </li>
                  <li>
                    <Zap size={16} className="wisdom-icon" />
                    <span>How early top-tier camps reach capacity</span>
                  </li>
                  <li>
                    <Zap size={16} className="wisdom-icon" />
                    <span>The strategic importance of camp placement</span>
                  </li>
                  <li>
                    <Zap size={16} className="wisdom-icon" />
                    <span>How emotionally immersive the safari becomes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="kenya-wisdom-col wisdom-featured">
              <div className="kenya-wisdom-header">
                <h2 className="kenya-wisdom-h2">
                  WHY PACING MATTERS EMOTIONALLY ON SAFARI
                </h2>
                <div className="kenya-wisdom-decor"></div>
              </div>
              <p className="kenya-wisdom-p">
                Safari is not just about wildlife. It is about rhythm. Too many
                flights and camp changes can create emotional fatigue rather
                than deep immersion.
              </p>
              <div className="kenya-wisdom-list">
                <span className="kenya-list-label">
                  THE BEST SAFARIS CREATE:
                </span>
                <ul>
                  <li>
                    <Wind size={16} className="wisdom-icon" />
                    <span>Profound Stillness</span>
                  </li>
                  <li>
                    <Wind size={16} className="wisdom-icon" />
                    <span>Intentional Pacing</span>
                  </li>
                  <li>
                    <Wind size={16} className="wisdom-icon" />
                    <span>Guiding Flexibility</span>
                  </li>
                  <li>
                    <Wind size={16} className="wisdom-icon" />
                    <span>Time to absorb the experience</span>
                  </li>
                </ul>
              </div>
              <div className="kenya-wisdom-quote-box">
                <Quote size={24} className="wisdom-quote-icon" />
                <p className="kenya-wisdom-quote">
                  "Safari is one of the few trips where slowing down actually
                  increases the quality of the experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE DESIGN KENYA SAFARIS (STRATEGIC GRID - WOW UI) ────────────────── */}
      <section className="kenya-section kenya-bg-soft">
        <div className="kenya-inner">
          <div className="design-header-premium">
            <h2 className="design-h2">
              How We Design Kenya Safaris Differently
            </h2>
            <div class="itinerary-bar"></div>
          </div>

          <div className="design-strategic-grid">
            {[
              {
                icon: MapPin,
                title: "strategic camp placement",
              },
              {
                icon: TrendingUp,
                title: "wildlife movement",
              },
              {
                icon: Compass,
                title: "routing efficiency",
              },
              {
                icon: Users,
                title: "guide quality",
              },
              {
                icon: Activity,
                title: "balancing logistics with experience",
              },
              {
                icon: Clock,
                title: "minimizing unnecessary transit time",
              },
            ].map((step, i) => (
              <div key={i} className="design-card">
                <div className="design-card-header">
                  <div className="design-icon-box">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="design-card-body">
                  <h3 className="design-step-title">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="design-footer-premium">
            <div className="design-footer-inner">
              <p className="design-footer-lead">
                Luxury safari is not about checking boxes.
              </p>
              <p className="design-footer-main">
                It is about creating rhythm, positioning, and immersion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSOLIDATED INTERNAL LINKS: THE SAFARI INTELLIGENCE DUO ────────────── */}
      <section className="kenya-resource-duo">
        <div className="kenya-inner">
          <div className="resource-duo-grid">
            <Link to="/kenya-vs-tanzania-safari" className="resource-card">
              <div className="resource-card-content">
                <span className="resource-tag">COMPARISON GUIDE</span>
                <h3 className="resource-h3">Kenya vs Tanzania Safari</h3>
                <p className="resource-p">Trying to decide between the two? Read which is best for luxury travelers.</p>
                <span className="resource-cta">Read Guide <ChevronRight size={16} /></span>
              </div>
            </Link>

            <Link to="/best-time-great-migration-safari" className="resource-card">
              <div className="resource-card-content">
                <span className="resource-tag">MIGRATION GUIDE</span>
                <h3 className="resource-h3">The Great Migration Guide</h3>
                <p className="resource-p">Everything you need to know about timing and location for the migration.</p>
                <span className="resource-cta">Read Guide <ChevronRight size={16} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* ── FAQ ───────────────────────────────────────────────────────────────────── */}
      <section className="kenya-faq-section">
        <div className="kenya-faq-inner">
          <div style={{ textAlign: "center" }}>
            <h2 className="kenya-h2">Luxury Kenya Safari FAQs</h2>
            <div className="kenya-bar kenya-bar-center"></div>
          </div>

          <div className="kenya-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="kenya-faq-item"
                onClick={() => toggleFaq(index)}
              >
                <div className="kenya-faq-question">
                  <span>{faq.question}</span>
                  <span className="kenya-faq-icon">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </div>
                {activeFaq === index && (
                  <p className="kenya-faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────────── */}
      {/* <section className="kenya-section kenya-bg-dark2">
        <div className="kenya-bg-pattern"></div>
        <div className="kenya-inner kenya-relative">
          <div className="kenya-cta-section-inner">
            <h2 className="kenya-h2-white">
              Schedule a 15 Minute Kenya Safari Consultation
            </h2>
            <div
              className="kenya-bar-white kenya-bar-center"
              style={{ margin: "0 auto 20px" }}
            ></div>
            <p
              className="kenya-p-white"
              style={{
                textAlign: "center",
                maxWidth: "680px",
                margin: "0 auto 12px",
              }}
            >
              The best safari camps in Kenya are intentionally small, often with
              fewer than a dozen tents. During peak migration season, the
              difference between planning early and planning late can completely
              change the quality of the experience.
            </p>
            <p
              className="kenya-p-white"
              style={{
                textAlign: "center",
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Angela Hughes and Trips &amp; Ships Luxury Travel create Kenya
              safaris based on wildlife movement, camp placement, conservation,
              and experience rather than generic packages.
            </p>
            <div className="kenya-cta-actions">
              <button className="kenya-btn-primary">
                <Phone size={18} />
                Schedule a Consultation
              </button>
              <button className="kenya-btn-outline-white">
                <LayoutList size={18} />
                Request Kenya Safari Options
              </button>
            </div>
          </div>
        </div>
      </section> */}
            <section className="btgms-section btgms-final-cta-v3"  style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${africa2})`,
        }}>
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
    </>
  );
}

export default LuxuryKenyaSafari;
