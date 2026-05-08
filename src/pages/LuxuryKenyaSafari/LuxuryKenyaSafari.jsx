import Navbar from "../../components/Navbar/Navbar";
import "./LuxuryKenyaSafari.css";
import image from "../../assets/image.webp";
import hero1 from "../../assets/HomePage/HomePage1.webp";
import hero2 from "../../assets/SecondPage/SecondPage2.webp";
import hero3 from "../../assets/SecondPage/SecondPage6.webp";
import luxuryRefined from "../../assets/HomePage/Refined_Luxury.jpeg";
import cruiseView from "../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp";
import singaporeSkyline from "../../assets/DistinctiveVoyageSailings/singapore-marina-bay-sands-skyline-luxury-travel.png";
import kenyaNarrative from "../../assets/LuxuryKenyaSafari/kenya_narrative.png";
import kenyaLeopard from "../../assets/LuxuryKenyaSafari/kenya_leopard_dusk.png";
import TravelWeeklyLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Weekly.webp";
import TravelPulseLogo from "../../assets/BestTimeGreatMigrationSafari/TravelPulse.webp";
import InsiderReportLogo from "../../assets/BestTimeGreatMigrationSafari/Insider_Travel_Report.webp";
import TravelAgeWestLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Age_West.webp";
import angelaHughes from "../../assets/image.jpg";

import {
  MapPin,
  Star,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Compass,
  Sparkles,
  Calendar,
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
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

function LuxuryKenyaSafari() {
  const [currentHero, setCurrentHero] = useState(0);
  const [showFullHero, setShowFullHero] = useState(false);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const [activeFaq, setActiveFaq] = useState(null);
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
        "This region works particularly well for first time safari travelers, photographers, honeymooners, and travelers wanting the classic luxury safari experience.",
      tier: "iconic",
    },
    {
      name: "AMBOSELI",
      intro:
        "Amboseli National Park is known for massive elephant herds and extraordinary views of Mount Kilimanjaro.",
      worksWellFor:
        "This region works particularly well for photography, families, and travelers wanting iconic Kenya landscapes.",
      tier: "iconic",
    },
    {
      name: "SAMBURU",
      intro:
        "Samburu National Reserve feels completely different from the Maasai Mara. Travelers move from sweeping grasslands into dramatic northern terrain with unique wildlife species not commonly seen in southern Kenya.",
      worksWellFor:
        "This region appeals strongly to travelers wanting a more layered and less predictable Kenya safari experience.",
      tier: "specialist",
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
      conclusion:
        "This is often where experienced safari travelers gravitate after their first East Africa safari.",
      tier: "ultra",
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
      tier: "ultra",
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
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com",
      },
      {
        "@type": "Person",
        name: "Angela Hughes",
        jobTitle: "CEO",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Luxury Kenya Safari | Trips & Ships Luxury Travel</title>
        <meta
          name="description"
          content="Plan a luxury Kenya safari with Angela Hughes. Expert guidance on the Maasai Mara, Amboseli, Laikipia, camp placement, migration timing, and high end safari travel."
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
          <span className="kenya-eyebrow">
            <MapPin size={14} />
            East Africa · Luxury Safari
          </span>

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
              crossing the savanna at sunrise. Luxury tented camps glowing under
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
                  placement rather than generic itineraries.
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
          <div className="kenya-seen-bento">
            <div className="kenya-seen-box">
              <img
                src={TravelWeeklyLogo}
                alt="Travel Weekly"
                className="kenya-seen-logo"
              />
              <span className="kenya-seen-text">Travel Weekly</span>
            </div>
            <div className="kenya-seen-box">
              <img
                src={TravelPulseLogo}
                alt="TravelPulse"
                className="kenya-seen-logo"
              />
              <span className="kenya-seen-text">TravelPulse</span>
            </div>
            <div className="kenya-seen-box">
              <img
                src={InsiderReportLogo}
                alt="Insider Travel Report"
                className="kenya-seen-logo"
              />
              <span className="kenya-seen-text">Insider Travel Report</span>
            </div>
            <div className="kenya-seen-box">
              <img
                src={TravelAgeWestLogo}
                alt="Travel Age West"
                className="kenya-seen-logo"
              />
              <span className="kenya-seen-text">Travel Age West</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRAVELERS FALL IN LOVE ───────────────────────────────────────────── */}
      <section className="kenya-pinnacle-gallery">
        <div className="kenya-pinnacle-gallery-container">
          <div className="kenya-pinnacle-panels">
            <div className="kenya-pinnacle-side-label">EST. 1984</div>
            <div className="kenya-pinnacle-panel">
              <img
                src={luxuryRefined}
                alt="Luxury Safari Interior"
                loading="lazy"
              />
            </div>
            <div className="kenya-pinnacle-panel">
              <img src={cruiseView} alt="Safari Landscape" loading="lazy" />
            </div>
            <div className="kenya-pinnacle-panel">
              <img src={singaporeSkyline} alt="Safari Camp" loading="lazy" />
            </div>
          </div>

          <div className="kenya-pinnacle-gallery-text">
            <span className="kenya-pinnacle-eyebrow">
              Why Travelers Fall In Love With Kenya
            </span>
            <h2>Kenya Changes People.</h2>
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
                <img src={kenyaNarrative} alt="Kenya Safari Landscape" />
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
            <h2 className="kenya-truth-h2">WHAT KENYA SAFARI IS NOT</h2>

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
              src={kenyaLeopard}
              alt="Leopard at Dusk"
              className="kenya-truth-img"
            />
            <div className="kenya-truth-img-overlay"></div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DUALITY DOSSIER (KENYA VS TANZANIA) ───────────────────────── */}
      <section className="kenya-vs-section">
        <div className="kenya-vs-bg-watermark">COMPARISON</div>

        <div className="kenya-vs-header">
          <h2 className="kenya-vs-h2">
            WHAT MAKES KENYA DIFFERENT FROM TANZANIA
          </h2>
        </div>

        <div className="kenya-vs-container">
          <div className="kenya-vs-split">
            <div className="kenya-vs-emblem">VS</div>

            {/* Kenya Column */}
            <div className="kenya-vs-col kenya-focus">
              <div className="kenya-vs-branding">
                <span className="kenya-vs-num">01</span>
                <h3 className="kenya-vs-title">THE KENYA EXPERIENCE</h3>
              </div>
              <div className="kenya-vs-points">
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Easier logistics</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Shorter transfer times</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Concentrated wildlife viewing</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Strong conservancy systems</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Shorter high impact itineraries</p>
                </div>
              </div>
            </div>

            {/* Tanzania Column */}
            <div className="kenya-vs-col tanzania-focus">
              <div className="kenya-vs-branding">
                <span className="kenya-vs-num">02</span>
                <h3 className="kenya-vs-title">THE TANZANIA EXPERIENCE</h3>
              </div>
              <div className="kenya-vs-points">
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Larger landscapes</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>More expansive routing</p>
                </div>
                <div className="kenya-vs-point">
                  <span className="kenya-vs-bullet"></span>
                  <p>Longer immersive journeys</p>
                </div>
              </div>
            </div>
          </div>

          <div className="kenya-vs-conclusion">
            <div className="kenya-vs-conclusion-inner">
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
        <div className="kenya-inner">
          <div className="collection-header">
            <h2 className="collection-h2">BEST LUXURY SAFARI REGIONS</h2>
            <div className="collection-line"></div>
          </div>

          <div className="regions-slider-wrap">
            {regions.map((region, i) => (
              <div
                key={i}
                className={`region-slide ${i === activeRegion ? "active" : ""} ${i < activeRegion ? "prev" : ""} ${i > activeRegion ? "next" : ""}`}
              >
                <div className={`region-dossier tier-${region.tier}`}>
                  <div className="region-meta">
                    <span className="region-num">0{i + 1}</span>
                    <span className="region-tier-tag">{region.tier}</span>
                  </div>

                  <div className="region-main-content">
                    <h3 className="region-name">{region.name}</h3>
                    <p className="region-intro-text">{region.intro}</p>

                    {region.knownFor && (
                      <div className="region-known-block">
                        <span className="region-sublabel">
                          SIGNATURE FEATURES:
                        </span>
                        <div className="region-tag-cloud">
                          {region.knownFor.map((item, idx) => (
                            <span key={idx} className="region-tag">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="region-suitability">
                      <span className="region-sublabel">
                        EXPERT SUITABILITY:
                      </span>
                      <p className="region-suitability-text">
                        {region.worksWellFor}
                      </p>
                    </div>

                    {region.conclusion && (
                      <p className="region-conclusion-quote">
                        {region.conclusion}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Progress Controls */}
          <div className="regions-controls">
            {regions.map((_, i) => (
              <button
                key={i}
                className={`region-dot ${i === activeRegion ? "active" : ""}`}
                onClick={() => setActiveRegion(i)}
              >
                <span className="dot-label">0{i + 1}</span>
                <div className="dot-bar">
                  <div
                    className="dot-fill"
                    style={{ width: i === activeRegion ? "100%" : "0%" }}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          <div className="kenya-conservancy-ledger">
            <div className="kenya-ledger-inner">
              <Gem size={28} className="kenya-ledger-icon" />
              <div className="kenya-ledger-content">
                <h3 className="kenya-ledger-h3">
                  Why Kenya's Conservancies Matter
                </h3>
                <p className="kenya-ledger-p">
                  Private conservancies often provide lower vehicle density,
                  more exclusive experiences, stronger wildlife positioning,
                  greater flexibility, and stronger conservation funding. Many
                  luxury travelers eventually realize that privacy and pacing
                  become just as valuable as wildlife itself. The most luxurious
                  thing in Kenya is often space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE STRATEGIC CHOICE (LUXURY & PLACEMENT) ──────────────────────────────── */}
      {/* ── THE STRATEGIC OVERLAY (LUXURY & PLACEMENT) ──────────────────────────────── */}
      <section className="kenya-strategy-blueprint">
        <div className="strategy-bg-watermark">POSITIONING</div>
        <div className="strategy-container">
          <div className="strategy-visual-wrap">
            {/* Card 01: The Luxury Paradox */}
            <div className="strategy-card card-dark-glass">
              <div className="strategy-marker">SECTION // 01</div>
              <span className="strategy-eyebrow">The Luxury Paradox</span>
              <h2 className="strategy-h2">
                WHY LUXURY CHANGES THE SAFARI EXPERIENCE
              </h2>
              <p className="strategy-p">
                Luxury safari is not simply about beautiful rooms. It is often
                operational rather than cosmetic.
              </p>
              <div className="strategy-detail">
                <span className="strategy-label">LUXURY OFTEN CHANGES:</span>
                <div className="strategy-grid">
                  <div className="strategy-item">Wildlife access</div>
                  <div className="strategy-item">Guide quality</div>
                  <div className="strategy-item">Conservancy access</div>
                  <div className="strategy-item">Flexibility</div>
                  <div className="strategy-item">Transfer efficiency</div>
                  <div className="strategy-item">Crowd levels</div>
                </div>
              </div>
              <div className="strategy-footer">
                <p>
                  "Safari is one of the few trips in the world where where you
                  sleep can completely change what you see."
                </p>
              </div>
            </div>

            {/* Card 02: Strategic Positioning */}
            <div className="strategy-card card-light-solid">
              <div className="strategy-marker">TACTICAL // 02</div>
              <span className="strategy-eyebrow">Strategic Positioning</span>
              <h2 className="strategy-h2">
                WHY CAMP PLACEMENT MATTERS MORE THAN BRAND
              </h2>
              <p className="strategy-p">
                Many travelers focus almost entirely on camp photography. But in
                safari planning, camp location often matters far more than
                aesthetics.
              </p>
              <div className="strategy-quote">
                "The wrong camp in the right region can still create the wrong
                safari."
              </div>
              <div className="strategy-detail">
                <span className="strategy-label">POSITIONING AFFECTS:</span>
                <div className="strategy-grid">
                  <div className="strategy-item">Wildlife access</div>
                  <div className="strategy-item">Migration timing</div>
                  <div className="strategy-item">Drive times</div>
                  <div className="strategy-item">Crowd density</div>
                  <div className="strategy-item">Safari rhythm</div>
                </div>
              </div>
              <div className="strategy-footer">
                <p>
                  This is one of the biggest mistakes travelers make when
                  booking safari without experienced guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ATMOSPHERIC IMMERSION (SAFARI SOUL) ───────────────────────────────── */}
      <section className="kenya-soul-immersion">
        <div className="kenya-inner">
          <div className="soul-header">
            <h2 className="soul-h2">THE DAILY SAFARI RHYTHM</h2>
          </div>

          <div className="soul-layout">
            <div className="soul-narrative">
              <div className="soul-block">
                <span className="soul-time">DAWN // 05:30 AM</span>
                <p className="soul-p">
                  Most days begin before sunrise with coffee quietly delivered
                  to your tent while camp is still dark. Vehicles leave early
                  because wildlife activity is strongest in the cooler morning
                  hours.
                </p>
              </div>

              <div className="soul-quote-box">
                <div className="soul-quote-inner">
                  "Safari changes the way people think about silence."
                </div>
              </div>

              <div className="soul-block">
                <span className="soul-time">AFTERNOON // 01:00 PM</span>
                <p className="soul-p">
                  Afternoons are slower. Travelers often spend time reading,
                  watching wildlife from camp, or simply sitting quietly
                  overlooking the plains. Evenings return to lanterns, fire
                  pits, storytelling, and silence under enormous African skies.
                </p>
              </div>

              <div className="soul-conclusion">
                Many travelers arrive expecting constant activity. Instead,
                safari often becomes one of the most emotionally grounding trips
                they have ever taken.
              </div>
            </div>

            {/* Sticky Feature Card */}
            <div className="soul-feature-card">
              <h3 className="soul-feature-h3">Waking Up in the Mara</h3>
              <p className="soul-feature-p">
                Before sunrise, camp is quiet except for distant wildlife moving
                through darkness. Lanterns flicker outside tents while the sky
                slowly changes color across the plains.
              </p>
              <p className="soul-feature-p">
                There are mornings when elephants walk directly through camp.
                Evenings where lions can be heard after dinner.
              </p>
              <div className="soul-feature-seal">
                Luxury in Kenya is not disconnected from nature. The best camps
                make travelers feel immersed inside it.
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
          <div className="kenya-migration-editorial">
            <div className="kenya-migration-header-block">
              <h2 className="kenya-migration-h2">
                WHY SOME TRAVELERS SHOULD NOT DO PEAK MIGRATION SEASON
              </h2>
              <p className="kenya-migration-p">
                The Great Migration is extraordinary, but peak river crossing
                season is not automatically the best safari for every traveler.
              </p>
            </div>

            <div className="kenya-migration-comparison-grid">
              <div className="migration-challenges">
                <span className="migration-label">
                  DURING MIGRATION SEASON:
                </span>
                <ul className="migration-list">
                  <li>Pricing is at its absolute highest</li>
                  <li>Camps sell out far in advance</li>
                  <li>Vehicle density can significantly increase</li>
                  <li>Safari pacing can feel more intense</li>
                </ul>
              </div>

              <div className="migration-alternatives">
                <span className="migration-label">BETTER ALTERNATIVES:</span>
                <h4 className="migration-sub-h4">
                  Some travelers are actually happier traveling during:
                </h4>
                <div className="migration-tag-cloud">
                  <span>January through March</span>
                  <span>Green Season</span>
                  <span>Quieter Conservancy Periods</span>
                </div>
              </div>
            </div>

            <div className="kenya-migration-conclusion">
              <p>
                "The best safari is not always the most famous season. It is the
                season that best matches the traveler."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC TIMING (SEASONS - WOW UI) ─────────────────────────────────── */}
      <section className="kenya-seasons-timing">
        <div className="kenya-inner">
          <div className="seasons-header">
            <span className="seasons-eyebrow">The Expert Schedule</span>
            <h2 className="seasons-h2">BEST TIME TO VISIT KENYA</h2>
          </div>

          <div className="seasons-grid">
            <div className="season-card">
              <div className="season-icon">
                <Binoculars size={32} />
              </div>
              <span className="season-months">JULY – OCTOBER</span>
              <h3 className="season-title">Peak Migration</h3>
              <p className="season-p">
                Peak Great Migration season in the Maasai Mara. Best for river
                crossings, predator activity, and first time safari travelers.
              </p>
              <div className="season-highlights">
                <span>River crossings</span>
                <span>Predator activity</span>
                <span>First-time travelers</span>
              </div>
            </div>

            <div className="season-card">
              <div className="season-icon">
                <Star size={32} />
              </div>
              <span className="season-months">JANUARY – MARCH</span>
              <h3 className="season-title">The Secret Season</h3>
              <p className="season-p">
                Excellent wildlife viewing with fewer crowds. Best for
                photographers, repeat safari travelers, and luxury value
                seekers.
              </p>
              <div className="season-highlights">
                <span>Photographers</span>
                <span>Fewer crowds</span>
                <span>Repeat travelers</span>
              </div>
            </div>

            <div className="season-card">
              <div className="season-icon">
                <TreePine size={32} />
              </div>
              <span className="season-months">APRIL – MAY</span>
              <h3 className="season-title">The Green Season</h3>
              <p className="season-p">
                Green season with lower pricing, dramatic scenery, and fewer
                tourists. Requires flexibility with weather.
              </p>
              <div className="season-highlights">
                <span>Lower pricing</span>
                <span>Dramatic scenery</span>
                <span>Fewer tourists</span>
              </div>
            </div>
          </div>

          <div className="migration-ledger">
            <h4 className="migration-h4">THE MIGRATION LEDGER</h4>
            <p className="migration-p">
              River crossings in the Maasai Mara typically occur between July
              and October, though movement is never guaranteed. This is where
              positioning matters. The difference between being properly
              positioned and poorly positioned can define the entire safari
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── KENYA: LUXURY COST FACTORS ───────────────────────────────── */}
      <section className="kenya-cost-factors-section">
        <div className="kenya-inner">
          <div className="kenya-cost-editorial">
            <div className="kenya-cost-header">
              <h2 className="kenya-cost-h2">LUXURY KENYA SAFARI COST</h2>
              <p className="kenya-cost-p">
                Luxury Kenya safari pricing is not fixed. It is a highly
                variable investment that scales based on the specific
                architecture of your journey.
              </p>
            </div>

            <div className="kenya-cost-factors-block">
              <span className="kenya-cost-eyebrow">PRIMARY DRIVERS</span>
              <h3 className="kenya-cost-h3">
                Pricing varies significantly based on:
              </h3>
              <div className="kenya-cost-grid">
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Season</span>
                </div>
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Camp Level</span>
                </div>
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Private versus Shared Safari</span>
                </div>
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Internal Flights</span>
                </div>
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Migration Timing</span>
                </div>
                <div className="cost-factor-item">
                  <div className="factor-dot"></div>
                  <span>Conservancy Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT TIERS (PRICE LEVELS - WOW UI) ────────────────────────────── */}
      <section className="kenya-investment-tiers">
        <div className="kenya-inner">
          <div className="tiers-header">
            <span className="tiers-eyebrow">Financial Architecture</span>
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
            <span className="camps-eyebrow">The Expert Selection</span>
            <h2 className="camps-h2">BEST LUXURY SAFARI CAMPS IN KENYA</h2>
            <div className="camps-bar"></div>
          </div>

          <div className="camps-editorial-grid">
            {/* Angama Mara */}
            <div className="camp-editorial-card">
              <div className="camp-card-header">
                <span className="camp-card-num">01</span>
                <h3 className="camp-card-title">Angama Mara</h3>
              </div>
              <p className="camp-card-desc">
                Angama Mara appeals strongly to travelers wanting cinematic
                scenery, elevated design, and direct access to the Mara
                Triangle.
              </p>
              <div className="camp-card-suitability">
                <span className="suitability-label">EXPERT SUITABILITY:</span>
                <p>
                  The camp works particularly well for honeymooners, couples,
                  and first time luxury safari travelers wanting a refined but
                  iconic Kenya safari experience.
                </p>
              </div>
            </div>

            {/* Mara Plains Camp */}
            <div className="camp-editorial-card">
              <div className="camp-card-header">
                <span className="camp-card-num">02</span>
                <h3 className="camp-card-title">Mara Plains Camp</h3>
              </div>
              <p className="camp-card-desc">
                Mara Plains is known for exceptional guiding and wildlife
                positioning.
              </p>
              <div className="camp-card-suitability">
                <span className="suitability-label">EXPERT SUITABILITY:</span>
                <p>
                  This camp appeals strongly to experienced safari travelers,
                  photographers, and travelers prioritizing wildlife access over
                  flashy design.
                </p>
              </div>
            </div>

            {/* Cottar’s 1920s Camp */}
            <div className="camp-editorial-card">
              <div className="camp-card-header">
                <span className="camp-card-num">03</span>
                <h3 className="camp-card-title">Cottar’s 1920s Camp</h3>
              </div>
              <p className="camp-card-desc">
                Cottar’s delivers one of the strongest classic East Africa
                safari atmospheres in Kenya.
              </p>
              <div className="camp-card-suitability">
                <span className="suitability-label">EXPERT SUITABILITY:</span>
                <p>
                  This camp works particularly well for travelers wanting
                  heritage, storytelling, and old world safari character.
                </p>
              </div>
            </div>

            {/* Segera Retreat */}
            <div className="camp-editorial-card">
              <div className="camp-card-header">
                <span className="camp-card-num">04</span>
                <h3 className="camp-card-title">Segera Retreat</h3>
              </div>
              <p className="camp-card-desc">
                Segera combines ultra luxury safari with conservation, art,
                wellness, and privacy.
              </p>
              <div className="camp-card-suitability">
                <span className="suitability-label">EXPERT SUITABILITY:</span>
                <p>
                  This is one of Kenya’s most sophisticated safari experiences.
                </p>
              </div>
            </div>

            {/* ol Donyo Lodge */}
            <div className="camp-editorial-card">
              <div className="camp-card-header">
                <span className="camp-card-num">05</span>
                <h3 className="camp-card-title">ol Donyo Lodge</h3>
              </div>
              <p className="camp-card-desc">
                ol Donyo is known for privacy, horseback safari experiences, and
                extraordinary Kilimanjaro views.
              </p>
              <div className="camp-card-suitability">
                <span className="suitability-label">EXPERT SUITABILITY:</span>
                <p>
                  This camp appeals strongly to honeymooners and travelers
                  wanting a quieter, highly immersive safari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERHYPED WARNING (INSIDER INTEL - WOW UI) ────────────────────────────── */}
      <section className="kenya-overhyped-section">
        <div className="kenya-inner">
          <div className="overhyped-container">
            <div className="overhyped-header">
              <ShieldCheck size={32} className="overhyped-icon" />
              <h2 className="overhyped-h2">WHY SOME CAMPS ARE OVERHYPED</h2>
            </div>

            <div className="overhyped-content">
              <p className="overhyped-lead">
                Beautiful camp photography does not always create the best
                safari experience.
              </p>

              <div className="overhyped-grid">
                <div className="overhyped-list-block">
                  <span className="overhyped-label">
                    Some highly marketed camps may have:
                  </span>
                  <ul className="overhyped-list">
                    <li>
                      <span className="bullet">/</span> weaker wildlife
                      positioning
                    </li>
                    <li>
                      <span className="bullet">/</span> longer drive times
                    </li>
                    <li>
                      <span className="bullet">/</span> heavier vehicle density
                    </li>
                    <li>
                      <span className="bullet">/</span> less experienced guiding
                    </li>
                  </ul>
                </div>

                <div className="overhyped-conclusion-block">
                  <p className="overhyped-p">
                    Meanwhile, some of the most extraordinary safari experiences
                    happen in quieter camps with exceptional location and
                    guiding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE ITINERARY (VERTICAL JOURNEY - WOW UI) ─────────────────────────── */}
      <section className="kenya-itinerary-section">
        <div className="kenya-inner">
          <div className="itinerary-header">
            <span className="itinerary-eyebrow">Expert Curation</span>
            <h2 className="itinerary-h2">
              SAMPLE LUXURY KENYA SAFARI ITINERARY
            </h2>
            <p className="itinerary-lead">9 Day Luxury Kenya Safari Example</p>
            <div className="itinerary-bar"></div>
          </div>

          <div className="itinerary-layout">
            <div className="itinerary-steps">
              {[
                {
                  day: "Day 1",
                  title: "Arrival in Nairobi",
                  desc: "Arrive and settle into luxury Nairobi. Spending your first night here ensures a smoother transition into East Africa.",
                },
                {
                  day: "Day 2 through 5",
                  title: "Maasai Mara Conservancy",
                  desc: "Immersive conservancy experience focused on migration positioning and wildlife density. Direct access to the Mara's most iconic sightings.",
                },
                {
                  day: "Day 6 through 8",
                  title: "Lewa Conservancy",
                  desc: "Lewa Conservancy for rhino conservation and lower density safari experiences. Exceptional guiding and highly refined safari operations.",
                },
                {
                  day: "Day 9",
                  title: "Departure",
                  desc: "Return through Nairobi for departure, carrying the rhythm of the bush home with you.",
                },
              ].map((step, i) => (
                <div key={i} className="itinerary-step">
                  <div className="step-marker">
                    <div className="step-dot"></div>
                    {i !== 3 && <div className="step-line"></div>}
                  </div>
                  <div className="step-content">
                    <span className="step-day">{step.day}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="itinerary-intel">
              <div className="intel-card">
                <Compass size={28} className="intel-icon" />
                <h3 className="intel-h3">Why This Itinerary Works</h3>
                <p className="intel-p">
                  This itinerary works particularly well because it balances
                  iconic wildlife experiences with quieter conservation focused
                  safari experiences.
                </p>
                <div className="intel-highlight">
                  Most luxury Kenya safaris work best between 7 and 10 days.
                </div>
              </div>
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
              <div className="panel-content">
                <h2 className="panel-h2">
                  WHY KENYA IS A TOP HONEYMOON DESTINATION
                </h2>
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
                    <li>Private tented camps</li>
                    <li>Candlelit dinners under the stars</li>
                    <li>Outdoor bathtubs overlooking the plains</li>
                    <li>Hot air balloon experiences</li>
                    <li>Seamless beach extensions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Family Panel */}
            <div className="lifestyle-panel family-panel">
              <div className="panel-content">
                <h2 className="panel-h2">
                  WHY KENYA WORKS SO WELL FOR FAMILIES
                </h2>
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
                    <li>Private multi-room villas</li>
                    <li>Expert guides specialized in children</li>
                    <li>Bush school and conservation tracking</li>
                    <li>Archery and traditional Maasai skills</li>
                    <li>Secure, high-end camp environments</li>
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
                  <li>Travel distances</li>
                  <li>Luggage restrictions on bush flights</li>
                  <li>How early top camps sell out</li>
                  <li>How much camp placement matters</li>
                  <li>How emotionally immersive safari becomes</li>
                </ul>
              </div>
            </div>

            <div className="kenya-wisdom-col kenya-bg-soft">
              <div className="kenya-wisdom-header">
                <h2 className="kenya-wisdom-h2">
                  WHY PACING MATTERS EMOTIONALLY ON SAFARI
                </h2>
              </div>
              <p className="kenya-wisdom-p">
                Safari is not just about wildlife. It is about rhythm. Too many
                flights and camp changes can create emotional fatigue rather
                than immersion.
              </p>
              <div className="kenya-wisdom-list">
                <span className="kenya-list-label">
                  THE BEST SAFARIS CREATE:
                </span>
                <ul>
                  <li>Stillness</li>
                  <li>Pacing</li>
                  <li>Flexibility</li>
                  <li>Time to absorb the experience</li>
                </ul>
              </div>
              <div className="kenya-wisdom-quote">
                "Safari is one of the few trips where slowing down actually
                increases the quality of the experience."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE DESIGN KENYA SAFARIS (STRATEGIC GRID - WOW UI) ────────────────── */}
      <section className="kenya-section kenya-bg-soft">
        <div className="kenya-inner">
          <div className="design-header-premium">
            <span className="design-eyebrow">Methodology</span>
            <h2 className="design-h2">
              HOW WE DESIGN KENYA SAFARIS DIFFERENTLY
            </h2>
            <div className="design-divider"></div>
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
                <span className="angela-eyebrow">The Designer</span>
                <h2 className="angela-h2">ABOUT ANGELA HUGHES</h2>
                <div className="angela-divider"></div>

                <div className="angela-bio">
                  <p>
                    Angela Hughes is one of the most recognized voices in luxury
                    travel. She has spent decades designing complex luxury
                    itineraries across Africa and around the world.
                  </p>
                </div>

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
      <section className="kenya-section kenya-bg-dark2">
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
      </section>
    </>
  );
}

export default LuxuryKenyaSafari;
