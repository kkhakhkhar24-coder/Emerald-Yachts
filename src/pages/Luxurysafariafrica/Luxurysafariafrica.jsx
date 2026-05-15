import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Users,
  Award,
  Compass,
  Plus,
  Minus,
  CheckCircle,
  ArrowRight,
  Globe,
  ShieldCheck,
  Star,
  Heart,
  Camera,
} from "lucide-react";

import Safari1 from "../../assets/BestTimeGreatMigrationSafari/Safari1.jpg";
import Safari2 from "../../assets/BestTimeGreatMigrationSafari/Safari2.jpg";
import Safari3 from "../../assets/BestTimeGreatMigrationSafari/Safari3.jpg";
import AboutImage from "../../assets/Angela_Hughes.jpg";

import Kenya1 from "../../assets/LuxuryKenyaSafari/africa1.jpg";
import Kenya3 from "../../assets/LuxuryKenyaSafari/africa3.jpg";

import "./Luxurysafariafrica.css";

const destinations = [
  {
    country: "Kenya",
    tagline: "Best for Families, Conservancies, and First Time Luxury Safari Travelers",
    icon: Users,
    highlights: [
      "First time safaris",
      "Family safaris",
      "Luxury conservancy experiences",
      "Photography safaris",
      "Fly in safaris",
      "Cultural experiences",
      "Luxury tented camps",
    ],
    description:
      "Kenya remains one of the greatest safari destinations in the world and is often one of the easiest introductions to Africa for first time travelers. One of Kenya's greatest strengths is its conservancy model. Private conservancies surrounding the Maasai Mara often provide fewer vehicles, highly personalized guiding, walking safaris, and more intimate wildlife experiences. Kenya also works exceptionally well for multigenerational family travel because of its excellent guiding, strong camp infrastructure, and diverse range of luxury safari experiences.",
  },
  {
    country: "Tanzania",
    tagline: "Best for Great Migration Safaris and Dramatic Landscapes",
    icon: Compass,
    highlights: [
      "Great Migration safaris",
      "Luxury honeymoon safaris",
      "Fly in safaris",
      "Ultra luxury tented camps",
      "Safari and Zanzibar itineraries",
      "Expansive wilderness experiences",
    ],
    description:
      "Tanzania often feels larger, wilder, and more cinematic than almost anywhere else in Africa. It is home to some of the most legendary safari regions on earth including Serengeti National Park, Ngorongoro Crater, Tarangire National Park, and Ruaha National Park. During migration season, millions of wildebeest and zebra move across the ecosystem in one of the greatest wildlife spectacles on earth.",
  },
  {
    country: "Botswana",
    tagline: "Best for Ultra Luxury Wilderness Experiences",
    icon: ShieldCheck,
    highlights: [
      "Ultra luxury safaris",
      "Remote wilderness",
      "Water based safaris",
      "Privacy and exclusivity",
      "Exceptional guiding",
      "The Okavango Delta",
    ],
    description:
      "Botswana offers one of the most exclusive luxury safari experiences in Africa. Botswana is often best suited for experienced luxury safari travelers who prioritize exclusivity, conservation, and highly personalized experiences.",
  },
  {
    country: "South Africa",
    tagline: "Best for Combining Safari with Wine, Food, and Cities",
    icon: Globe,
    highlights: [
      "Safari plus city combinations",
      "Food and wine travel",
      "Luxury lodges",
      "Easier travel logistics",
      "Couples and honeymooners",
      "Malaria free safari regions",
    ],
    description:
      "South Africa offers one of the most accessible luxury safari experiences in Africa and combines exceptionally well with destinations such as Cape Town and the Cape Winelands.",
  },
  {
    country: "Rwanda",
    tagline: "Best for Gorilla Trekking and Conservation Travel",
    icon: Heart,
    highlights: [
      "Gorilla trekking",
      "Volcanoes National Park",
      "Conservation travel",
      "Emotional wildlife experiences",
      "Luxury lodges",
      "Unique wildlife encounters",
    ],
    description:
      "Rwanda offers a very different type of luxury wildlife experience. Travelers primarily come to Rwanda for one of the most emotional wildlife experiences in the world: gorilla trekking in Volcanoes National Park.",
  },
  {
    country: "Namibia",
    tagline: "Best for Landscapes and Photography",
    icon: Camera,
    highlights: [
      "Photography safaris",
      "Desert landscapes",
      "Scenic exploration",
      "Luxury adventure travel",
      "Self drive safaris",
    ],
    description:
      "Namibia feels dramatically different from East Africa. Namibia is especially strong for photography safaris, desert landscapes, scenic exploration, luxury adventure travel, and self drive safaris.",
  },
];

const comparisonData = [
  { country: "Kenya", bestFor: "Families, conservancies, first safaris", luxury: "Exceptional", wildlife: "Extremely High", ease: "Excellent" },
  { country: "Tanzania", bestFor: "Migration, honeymoon, dramatic landscapes", luxury: "Exceptional", wildlife: "Extremely High", ease: "Excellent" },
  { country: "Botswana", bestFor: "Ultra luxury, remote wilderness", luxury: "Ultra Luxury", wildlife: "High", ease: "Moderate" },
  { country: "South Africa", bestFor: "Safari plus wine and cities", luxury: "Exceptional", wildlife: "High", ease: "Excellent" },
  { country: "Rwanda", bestFor: "Gorilla trekking", luxury: "Exceptional", wildlife: "Specialized", ease: "Moderate" },
  { country: "Namibia", bestFor: "Photography and landscapes", luxury: "Luxury", wildlife: "Moderate", ease: "Moderate" },
];

const eastAfricaStrengths = [
  "Exceptional wildlife density",
  "The Big Five",
  "Great Migration opportunities",
  "Extraordinary luxury safari camps",
  "Highly trained safari guides",
  "Fly in safari logistics",
  "Family safari experiences",
  "Luxury honeymoon safaris",
  "Conservation focused tourism",
  "Remarkable photography opportunities",
];

const planningServices = [
  "A first time safari",
  "A luxury honeymoon",
  "A family safari",
  "A migration safari",
  "Gorilla trekking",
  "A private conservation focused experience",
];

const faqs = [
  {
    q: "What is the best country for safari in Africa?",
    a: "For most first time luxury safari travelers, Kenya and Tanzania remain the strongest safari destinations because of their wildlife density, luxury safari infrastructure, guiding quality, and iconic landscapes.",
  },
  {
    q: "Is Kenya or Tanzania better for safari?",
    a: "Both are exceptional. Kenya is particularly strong for conservancies and family safaris, while Tanzania is famous for the Serengeti, Ngorongoro Crater, and Great Migration experiences.",
  },
  {
    q: "What is the best African safari for first timers?",
    a: "Kenya and Tanzania are generally considered the best safari destinations for first time travelers because they offer extraordinary wildlife, excellent guides, luxury camps, and relatively seamless safari logistics.",
  },
  {
    q: "How much does a luxury African safari cost?",
    a: "Luxury African safaris typically range from approximately $8,000 to more than $30,000 per person depending on destination, camp level, seasonality, flights, and level of customization.",
  },
  {
    q: "Why are African safaris so expensive?",
    a: "Safari pricing reflects conservation fees, highly trained guides, remote logistics, luxury camps, charter flights, wildlife preservation, and low density tourism models.",
  },
  {
    q: "What is the best month for safari in Africa?",
    a: "The best safari timing depends on destination and goals. East Africa offers exceptional wildlife viewing throughout much of the year, while migration timing changes seasonally.",
  },
  {
    q: "What is the Great Migration?",
    a: "The Great Migration is the annual movement of millions of wildebeest and zebra across the Serengeti and Maasai Mara ecosystems in Kenya and Tanzania.",
  },
  {
    q: "Which African country has the best wildlife?",
    a: "Kenya and Tanzania are widely considered among the best wildlife destinations in Africa because of their massive ecosystems and exceptional predator populations.",
  },
  {
    q: "What is the most luxurious safari destination in Africa?",
    a: "Botswana is often considered one of the most exclusive and luxurious safari destinations because of its remote camps and conservation focused tourism model.",
  },
  {
    q: "Which African safari is best for families?",
    a: "Kenya is one of the strongest safari destinations for families because of its conservancies, guiding quality, family friendly camps, and ease of logistics.",
  },
  {
    q: "Which African safari is best for honeymooners?",
    a: "Tanzania is exceptionally popular for luxury honeymoon safaris because of the Serengeti, ultra luxury camps, and the ability to combine safari with Zanzibar.",
  },
  {
    q: "Is South Africa good for safari?",
    a: "Yes. South Africa is excellent for safari, particularly for travelers wanting to combine wildlife experiences with Cape Town, luxury lodges, and wine country.",
  },
  {
    q: "Is Botswana worth the cost?",
    a: "For travelers seeking ultra luxury wilderness experiences, exceptional guiding, and exclusivity, Botswana is absolutely worth considering.",
  },
  {
    q: "What is the best luxury safari company?",
    a: "There are several outstanding safari companies throughout Africa. We often recommend trusted luxury safari partners such as Micato Safaris based on the traveler's destination, travel style, and desired level of luxury.",
  },
  {
    q: "Should I use a safari travel advisor?",
    a: "Absolutely. African safaris involve complex logistics, migration timing, camp selection, wildlife movement, and internal flights. Working with a luxury safari specialist can dramatically improve the overall experience.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/best-country-luxury-safari-africa/#webpage",
      url: "https://www.tripsandships.com/best-country-luxury-safari-africa/",
      name: "What Is the Best Country for Luxury Safari in Africa?",
      description:
        "Discover the best African safari destinations for luxury travel. Expert comparison of Kenya, Tanzania, Botswana, South Africa, Rwanda, and Namibia for first time and experienced safari travelers.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/best-country-luxury-safari-africa/#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function LuxurySafariAfrica() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeDestination, setActiveDestination] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);

  const heroImages = [Safari1, Safari2, Safari3];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="lsa-root">
      <Helmet>
        <title>What Is the Best Country for Luxury Safari in Africa? | Trips & Ships</title>
        <meta
          name="description"
          content="Discover the best African safari destinations for luxury travel. Expert comparison of Kenya, Tanzania, Botswana, South Africa, Rwanda, and Namibia."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="lsa-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`lsa-hero-bg ${index === currentHero ? "lsa-hero-bg-active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="lsa-hero-overlay"></div>
        <div className="lsa-hero-inner">
          <span className="lsa-hero-eyebrow">
            <Star size={14} /> Luxury Safari Guide
          </span>
          <h1 className="lsa-hero-title">
            What Is the Best Country for Luxury Safari in Africa?
          </h1>
          <p className="lsa-hero-subtitle">
            The best African safari destination depends entirely on the type of traveler you are and the type of experience you are hoping to have.
          </p>

        </div>
      </section>

      {/* ── THE TRUTH ABOUT CHOOSING (CINEMATIC SPLIT) ── */}
      <section className="lsa-truth-cinematic">
        <div className="lsa-truth-container">
          <div className="lsa-truth-theatrical-grid">
            <div className="lsa-truth-text-content">
              <div className="lsa-truth-badge-minimal">
                <Compass size={14} />
                <span>Expert Truth</span>
              </div>
              <h2 className="lsa-truth-title-luxe">
                The Truth About Choosing an African Safari Destination
              </h2>
              <div className="lsa-truth-body-luxe">
                <p>
                  One of the most common questions travelers ask when planning Africa for the first time is simple: what is the best country for safari in Africa? The truth is that there is not one single answer because Africa is not one singular safari experience.
                </p>
                <p>
                  Each safari destination offers something completely different. Some countries are known for massive wildlife migration and dramatic landscapes. Others are famous for remote luxury camps, conservation experiences, gorilla trekking, photography, or highly exclusive wilderness experiences.
                </p>
                <p>
                  Are you dreaming about the Great Migration in East Africa? Looking for a luxury honeymoon safari? Hoping to take your children on a first safari experience? Interested in ultra luxury camps in remote wilderness areas? Wanting to combine safari with beaches, wine country, or gorilla trekking?
                </p>
              </div>
              
              <blockquote className="lsa-truth-blockquote-luxe">
                 "For most first time luxury safari travelers, Kenya and Tanzania remain the strongest overall safari destinations in Africa. But they are far from the only extraordinary safari experiences on the continent."
              </blockquote>
            </div>

            <div className="lsa-truth-video-canvas">
               <div className="lsa-video-frame-luxe">
                  <iframe 
                    src="https://www.youtube.com/embed/KWE-hQT1DFk?autoplay=1&mute=1&controls=0&loop=1&playlist=KWE-hQT1DFk&rel=0&modestbranding=1" 
                    className="lsa-cinema-video" 
                    title="African Safari Wildlife"
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                  ></iframe>
                  <div className="lsa-video-overlay-glow"></div>
                  <div className="lsa-video-caption">Atmospheric Savanna Wildlife</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EAST AFRICA ── */}
      <section className="lsa-eastafrica">
        <div className="lsa-eastafrica-container">
          <div className="lsa-eastafrica-main-layout">
            <div className="lsa-eastafrica-visual-col">
              <div className="lsa-eastafrica-image-canvas">
                <img src={Safari2} alt="East Africa safari landscape" className="lsa-eastafrica-main-img" />
                <div className="lsa-eastafrica-image-overlay"></div>

                <div className="lsa-eastafrica-experience-badge">
                  <div className="lsa-badge-icon">
                    <Award size={20} />
                  </div>
                  <div className="lsa-badge-text">
                    <span className="lsa-badge-title">The Classic Safari</span>
                    <span className="lsa-badge-subtitle">Global Standard of Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lsa-eastafrica-text-col">
              <div className="lsa-eastafrica-glass-card">
                <div className="lsa-eastafrica-card-header">
                  <span className="lsa-eastafrica-tag">Signature Region</span>
                  <h2 className="lsa-eastafrica-title">
                    Why East Africa Continues to Define the Classic Safari Experience
                  </h2>
                  <div className="lsa-eastafrica-accent-line"></div>
                </div>

                <div className="lsa-eastafrica-card-body">
                  <p className="lsa-eastafrica-description">
                    When most travelers imagine Africa in their minds, they are usually envisioning East Africa. The endless plains of the Serengeti National Park. Lions stretched beneath acacia trees in the Maasai Mara National Reserve. Elephants crossing dusty landscapes beneath Mount Kilimanjaro. Luxury tented camps glowing beneath star filled skies. Sundowners overlooking the savanna while the sounds of the bush slowly awaken after sunset.
                  </p>
                  <p className="lsa-eastafrica-description">
                    East Africa has become iconic because it delivers the safari experience most travelers have dreamed about their entire lives. Both Kenya and Tanzania offer:
                  </p>

                  <div className="lsa-eastafrica-perks-grid">
                    {eastAfricaStrengths.map((item, i) => (
                      <div className="lsa-perk-item" key={i}>
                        <div className="lsa-perk-bullet"></div>
                        <span className="lsa-perk-label">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="lsa-eastafrica-signature-footer">
                    <div className="lsa-footer-quote-mark">“</div>
                    <p className="lsa-footer-quote">
                      For many travelers, East Africa becomes the safari that changes the way they see the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS EXPLORER ── */}
      <section className="lsa-destinations">
        <div className="lsa-destinations-container">
          <div className="lsa-destinations-header">
            <span className="lsa-destinations-eyebrow">The Collection</span>
            <h2 className="lsa-destinations-heading">Explore Each Safari Destination</h2>
            <p className="lsa-destinations-intro">
              After traveling to Africa more than a dozen times and designing luxury safari experiences for travelers throughout East and Southern Africa, here is what sets each destination apart.
            </p>
          </div>

          <div className="lsa-destinations-nav-scroller">
            <div className="lsa-destinations-nav-grid">
              {destinations.map((dest, i) => {
                const Icon = dest.icon;
                return (
                  <button
                    key={i}
                    className={`lsa-destination-card-tab ${activeDestination === i ? "lsa-card-active" : ""}`}
                    onClick={() => setActiveDestination(i)}
                  >
                    <div className="lsa-card-icon-frame">
                      <Icon size={20} />
                    </div>
                    <span className="lsa-card-country">{dest.country}</span>
                    <div className="lsa-card-indicator"></div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lsa-destinations-viewer">
            {(() => {
              const dest = destinations[activeDestination];
              const Icon = dest.icon;
              return (
                <div className="lsa-viewer-inner" key={activeDestination}>
                  <div className="lsa-viewer-layout">
                    <div className="lsa-viewer-content-col">
                      <div className="lsa-viewer-header">
                        <div className="lsa-viewer-badge">
                          <Icon size={18} />
                          <span>Destination Profile</span>
                        </div>
                        <h3 className="lsa-viewer-title">{dest.country}</h3>
                        <p className="lsa-viewer-tagline">{dest.tagline}</p>
                      </div>

                      <div className="lsa-viewer-body">
                        <p className="lsa-viewer-description">{dest.description}</p>
                      </div>

                      <div className="lsa-viewer-highlights-section">
                        <h4 className="lsa-highlights-title">Core Specialties</h4>
                        <div className="lsa-highlights-ledger">
                          {dest.highlights.map((h, j) => (
                            <div className="lsa-ledger-entry" key={j}>
                              <div className="lsa-ledger-bullet"></div>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lsa-viewer-visual-col">
                      <div className="lsa-viewer-image-canvas">
                        <img
                          src={activeDestination === 0 ? Kenya1 : activeDestination === 1 ? Safari1 : activeDestination === 4 ? Kenya3 : Safari2}
                          alt={dest.country}
                          className="lsa-viewer-img"
                        />
                        <div className="lsa-viewer-img-overlay"></div>
                        <div className="lsa-viewer-img-content">
                          <span className="lsa-viewer-img-tag">Expert Recommendation</span>
                          <p className="lsa-viewer-img-text">Tailored for {dest.country} travel styles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="lsa-comparison">
        <div className="lsa-comparison-container">
          <h2 className="lsa-comparison-heading">
            Best African Safari Countries Comparison Table
          </h2>
          <div className="lsa-comparison-divider"></div>
          <div className="lsa-comparison-table-wrap">
            <table className="lsa-comparison-table">
              <thead>
                <tr>
                  <th className="lsa-th">Country</th>
                  <th className="lsa-th">Best For</th>
                  <th className="lsa-th">Luxury Level</th>
                  <th className="lsa-th">Wildlife Density</th>
                  <th className="lsa-th">Ease for First Timers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="lsa-tr">
                    <td className="lsa-td lsa-td-country" data-label="Country">{row.country}</td>
                    <td className="lsa-td" data-label="Best For">{row.bestFor}</td>
                    <td className="lsa-td" data-label="Luxury Level">{row.luxury}</td>
                    <td className="lsa-td" data-label="Wildlife Density">{row.wildlife}</td>
                    <td className="lsa-td" data-label="Ease for First Timers">{row.ease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── MICATO RECOMMENDATION ── */}
      <section className="lsa-micato">
        <div className="lsa-micato-container">
          <div className="lsa-micato-card">
            <div className="lsa-micato-visual">
              <div className="lsa-micato-img-wrap">
                <img src={Safari2} alt="Micato Safaris Excellence" className="lsa-micato-img" />
                <div className="lsa-micato-badge">
                  <Award size={20} />
                  <span>Premier Partner</span>
                </div>
              </div>
            </div>
            <div className="lsa-micato-content">
              <div className="lsa-micato-header">
                <span className="lsa-micato-eyebrow">Industry Excellence</span>
                <h2 className="lsa-micato-title">Why We Often Recommend Micato Safaris</h2>
                <div className="lsa-micato-divider"></div>
              </div>
              <div className="lsa-micato-body">
                <p className="lsa-micato-text lsa-micato-highlight">
                  One of the reasons we frequently work with partners such as Micato Safaris is because of their extraordinary expertise in East Africa luxury safaris, exceptional guiding, seamless logistics, and highly personalized service.
                </p>
                <p className="lsa-micato-text">
                  For travelers planning Africa for the first time, having the right safari operator and advisor can dramatically shape the overall experience.
                </p>
                <p className="lsa-micato-text lsa-micato-closing">
                  A luxury safari should feel seamless, immersive, and deeply personal from beginning to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SPECIALIST ── */}
      <section className="lsa-specialist">
        <div className="lsa-specialist-container">
          <div className="lsa-specialist-editorial-layout">
            <div className="lsa-specialist-header-block">
              <span className="lsa-specialist-badge-organic">Expert Guidance</span>
              <h2 className="lsa-specialist-title-editorial">
                Why Work with a Luxury Safari Specialist?
              </h2>
            </div>

            <div className="lsa-specialist-narrative-grid">
              <div className="lsa-narrative-col-left">
                <p className="lsa-specialist-intro-text">
                  African safaris are far more complex than many travelers initially realize. Migration timing, wildlife movement, conservation areas, internal flights, camp style, guiding quality, and pacing all significantly impact the experience.
                </p>
                <div className="lsa-specialist-image-organic">
                  <div className="lsa-organic-frame">
                    <img src={Safari3} alt="Luxury safari planning" className="lsa-organic-img" />
                    <div className="lsa-stat-circle">
                      <span className="lsa-stat-val">12+</span>
                      <span className="lsa-stat-txt">Expeditions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lsa-narrative-col-right">
                <div className="lsa-specialist-insight-box">
                  <p className="lsa-insight-highlight">
                    "The difference between an average safari and an extraordinary safari often comes down to planning."
                  </p>
                </div>

                <p className="lsa-specialist-detail-text">
                  At Trips & Ships Luxury Travel, we help travelers design highly customized luxury safari experiences throughout Africa including Kenya, Tanzania, Botswana, Rwanda, Namibia, South Africa, Zambia, and Zimbabwe.
                </p>

                <div className="lsa-specialist-planning-grid">
                  <h4 className="lsa-planning-subtitle">Our Custom Planning Includes:</h4>
                  <div className="lsa-planning-ledger">
                    {planningServices.map((service, i) => (
                      <div className="lsa-planning-card" key={i}>
                        <div className="lsa-planning-icon">
                          <CheckCircle size={14} />
                        </div>
                        <span className="lsa-planning-text">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lsa-specialist-closing-signature">
                  <p>Our team works closely with trusted luxury safari partners to create personalized journeys tailored to your travel style, goals, and comfort level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ANGELA ── */}
      <section className="lsa-about">
        <div className="lsa-about-container">
          <div className="lsa-about-museum-layout">
            <div className="lsa-about-visual">
              <div className="lsa-museum-frame">
                <img src={AboutImage} alt="Angela Hughes" className="lsa-museum-img" />
                <div className="lsa-museum-accent-box"></div>
              </div>
              <div className="lsa-expert-stats">
                <div className="lsa-stat-pill-luxe">
                  <span className="lsa-pill-val">121+</span>
                  <span className="lsa-pill-lab">Countries Visited</span>
                </div>
                <div className="lsa-stat-pill-luxe">
                  <span className="lsa-pill-val">12+</span>
                  <span className="lsa-pill-lab">Africa Visits</span>
                </div>
              </div>
            </div>

            <div className="lsa-about-narrative-luxe">
              <div className="lsa-about-badge-luxe">CEO & FOUNDER</div>
              <h2 className="lsa-about-title-museum">Angela Hughes</h2>
              <div className="lsa-about-divider-museum"></div>

              <div className="lsa-about-text-museum">
                <p className="lsa-p-drop">
                  Angela Hughes is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University. She has traveled to more than 121 countries and has visited Africa more than a dozen times, specializing in luxury safaris, expeditions, cruises, and highly customized global travel experiences.
                </p>
                <p>
                  Angela was named the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network and was recognized on the 2026 Most Influential Women in Travel list by TravelPulse. She has been featured in Travel Weekly, TravelPulse, Insider Travel Report, Luxury Travel Advisor, Travel Market Report, and the Wall Street Journal.
                </p>
                <p>
                  In addition to her extensive luxury travel expertise, Angela has spent years involved in humanitarian and sustainable tourism initiatives throughout developing countries around the world including Africa.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lsa-faq">
        <div className="lsa-faq-container">
          <h2 className="lsa-faq-heading">
            Frequently Asked Questions About Luxury African Safaris
          </h2>
          <div className="lsa-faq-divider"></div>
          <div className="lsa-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`lsa-faq-item ${openFaq === i ? "lsa-faq-open" : ""}`}
              >
                <button
                  className="lsa-faq-question"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className="lsa-faq-answer">
                  <p className="lsa-faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}