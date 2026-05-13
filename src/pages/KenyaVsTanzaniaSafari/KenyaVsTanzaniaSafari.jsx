import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import {
  Compass,
  Plus,
  Minus,
  Sparkles,
  Globe,
  Map,
  Award,
  Star,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  UserCheck,
  Clock,
  AlertCircle,
  Plane,
  Home,
  ArrowRight,
  Play,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import "./KenyaVsTanzaniaSafari.css";

import profileImg from "../../assets/Angela_Hughes.jpg";
import TanzaniaImage1 from "../../assets/KenyaVsTanzaniaSafari/Tanzania1.jpg";
import TanzaniaImage2 from "../../assets/KenyaVsTanzaniaSafari/Tanzania2.jpg";
import TanzaniaImage3 from "../../assets/KenyaVsTanzaniaSafari/Tanzania3.jpg";
import TanzaniaImage4 from "../../assets/KenyaVsTanzaniaSafari/Tanzania4.jpg";
import KenyaImage from "../../assets/KenyaVsTanzaniaSafari/Kenya.jpg";
import MaasaiMara from "../../assets/KenyaVsTanzaniaSafari/Maasai_Mara.jpg";
import Luxury from "../../assets/KenyaVsTanzaniaSafari/LuxuryTravel.jpg";
import Migration from "../../assets/KenyaVsTanzaniaSafari/Migration.png";
import LuxuryTravel from "../../assets/KenyaVsTanzaniaSafari/LuxuryTravelAngela.jpg";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/kenya-vs-tanzania-safari/#webpage",
      url: "https://www.tripsandships.com/kenya-vs-tanzania-safari/",
      name: "Kenya vs Tanzania Safari: Which Is Best for Luxury Travelers in 2026?",
      description:
        "Kenya vs Tanzania safari comparison by luxury travel expert Angela Hughes. Discover the best safari for first-time travelers, Great Migration timing, luxury camps, costs, and how to design the right East Africa experience.",
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
          name: "Tanzania",
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
        url: "https://www.tripsandships.com/images/kenya-vs-tanzania-safari.jpg",
      },
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/kenya-vs-tanzania-safari/#article",
      headline: "Kenya vs Tanzania Safari: Which Is Best for Luxury Travelers?",
      description:
        "A luxury safari comparison of Kenya and Tanzania, including first-time safari travel, Great Migration timing, wildlife, luxury camps, logistics, cost, and itinerary design.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
        url: "https://www.tripsandships.com/about-angela-hughes",
        jobTitle: "CEO of Trips & Ships Luxury Travel",
        worksFor: {
          "@type": "Organization",
          name: "Trips & Ships Luxury Travel",
          url: "https://www.tripsandships.com",
        },
        knowsAbout: [
          "Luxury travel",
          "African safaris",
          "Kenya safaris",
          "Tanzania safaris",
          "Luxury safari planning",
          "Great Migration travel",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.tripsandships.com/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@id":
          "https://www.tripsandships.com/kenya-vs-tanzania-safari/#webpage",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/kenya-vs-tanzania-safari/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Kenya or Tanzania better for a luxury safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both Kenya and Tanzania offer exceptional luxury safari experiences. Kenya is often better for shorter, high-impact safaris, while Tanzania is better for longer, more immersive journeys across larger landscapes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between the Maasai Mara and the Serengeti?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Maasai Mara in Kenya is more compact with highly concentrated wildlife. The Serengeti in Tanzania is much larger and offers more varied landscapes, seasonal movement, and a greater sense of scale.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to see the Great Migration in Kenya vs Tanzania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya is best known for dramatic river crossings in the Maasai Mara, typically from July through October. Tanzania offers Great Migration viewing throughout the year depending on herd movement, including calving season in the southern Serengeti early in the year.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kenya better for first-time safari travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya is often an excellent choice for first-time safari travelers because the logistics are easier, the wildlife density is strong, and the Maasai Mara can deliver a powerful safari experience in a shorter amount of time.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tanzania better for experienced safari travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tanzania can be a strong choice for experienced safari travelers because it allows for deeper exploration across the Serengeti, Ngorongoro Crater, Tarangire, and other regions. It generally requires more time and careful itinerary planning.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a Kenya vs Tanzania luxury safari cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury safaris in Kenya and Tanzania typically range from $25,000 to $45,000 or more per person. Pricing depends on the season, camp level, number of regions, private versus shared safari arrangements, and internal flights.",
          },
        },
        {
          "@type": "Question",
          name: "Can I combine Kenya and Tanzania in one trip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Combining Kenya and Tanzania can create one of the most complete East Africa safari experiences, especially for travelers who want to see both the Maasai Mara and Serengeti. This usually requires a longer itinerary and a higher budget.",
          },
        },
        {
          "@type": "Question",
          name: "Which destination has better wildlife sightings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both Kenya and Tanzania offer exceptional wildlife. Kenya tends to provide more concentrated sightings in a compact area, while Tanzania offers broader diversity across larger landscapes and multiple safari regions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tanzania more remote than Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tanzania often feels more remote because of its scale and the longer distances between safari regions. This can create a more expansive experience, but it also requires more time and stronger logistical planning.",
          },
        },
        {
          "@type": "Question",
          name: "Which safari is better for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya often works well for families because the travel distances can be shorter, the wildlife viewing is consistent, and the pacing can be easier for multi-generational travelers. Tanzania can also work well for families when the itinerary is designed carefully.",
          },
        },
        {
          "@type": "Question",
          name: "Can I combine Tanzania with Zanzibar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tanzania pairs beautifully with Zanzibar, making it one of the most popular safari and beach combinations in East Africa.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest mistake travelers make when choosing Kenya or Tanzania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is choosing based on price or popularity instead of timing, routing, camp location, and overall experience design. A poorly structured safari can result in too much travel time, weak wildlife viewing, or missed seasonal opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How long should a safari be in Kenya vs Tanzania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya can work well for a 7 to 10 day safari, especially for first-time travelers. Tanzania usually requires 10 to 14 days or more because the distances are greater and the regions are more spread out.",
          },
        },
        {
          "@type": "Question",
          name: "Are safaris in Kenya and Tanzania similar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kenya and Tanzania share part of the same East Africa ecosystem, but the experience can feel very different. Kenya is often more compact and efficient, while Tanzania is more expansive and immersive.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a travel advisor for a luxury safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a luxury safari, expert planning is extremely valuable. The right advisor helps determine timing, routing, camp placement, guide quality, operator selection, and whether Kenya, Tanzania, or both will deliver the best experience.",
          },
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
        "@type": "Person",
        name: "Angela Hughes",
      },
      knowsAbout: [
        "Luxury travel",
        "African safaris",
        "Kenya luxury safaris",
        "Tanzania luxury safaris",
        "Great Migration safaris",
        "Custom safari planning",
      ],
    },
  ],
};

export default function KenyaVsTanzaniaSafari() {
  const [showContent, setShowContent] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const heroImages = [TanzaniaImage1, TanzaniaImage2, TanzaniaImage3];

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Is Kenya or Tanzania better for a luxury safari?",
      answer:
        "Both are exceptional, but Kenya is often better for shorter, high-impact trips while Tanzania is better for longer, immersive journeys.",
    },
    {
      question:
        "What is the difference between the Maasai Mara and the Serengeti?",
      answer:
        "The Maasai Mara is compact with dense wildlife, while the Serengeti is vast and offers more varied landscapes and movement.",
    },
    {
      question:
        "When is the best time to see the Great Migration in Kenya vs Tanzania?",
      answer:
        "Kenya is best for river crossings from July through October. Tanzania offers migration viewing year-round depending on herd location.",
    },
    {
      question: "Is Kenya better for first-time safari travelers?",
      answer:
        "Often yes, due to easier logistics, shorter travel distances, and strong wildlife sightings.",
    },
    {
      question: "Is Tanzania better for experienced safari travelers?",
      answer:
        "Often yes, because it allows for deeper exploration across multiple regions.",
    },
    {
      question: "How much does a Kenya vs Tanzania luxury safari cost?",
      answer:
        "Typically between $25,000 and $45,000+ per person depending on design and season.",
    },
    {
      question: "Can I combine Kenya and Tanzania in one trip?",
      answer:
        "Yes, and for many travelers this creates the most complete East Africa safari experience.",
    },
    {
      question: "Which destination has better wildlife sightings?",
      answer:
        "Both offer exceptional wildlife, but Kenya tends to provide more concentrated sightings while Tanzania offers more diversity.",
    },
    {
      question: "Is Tanzania more remote than Kenya?",
      answer:
        "Yes, Tanzania generally feels more remote due to its scale and longer travel distances.",
    },
    {
      question: "Which safari is better for families?",
      answer: "Kenya often works better due to logistics and pacing.",
    },
    {
      question: "Can I combine Tanzania with Zanzibar?",
      answer:
        "Yes, this is one of the most popular safari and beach combinations.",
    },
    {
      question: "What is the biggest mistake travelers make?",
      answer:
        "Choosing based on price instead of experience and itinerary design.",
    },
    {
      question: "How long should a safari be in Kenya vs Tanzania?",
      answer:
        "Kenya works well in 7 to 10 days, while Tanzania typically requires 10 to 14 days or more.",
    },
    {
      question: "Are safaris in Kenya and Tanzania similar?",
      answer:
        "They share ecosystems but feel very different in pacing, structure, and scale.",
    },
    {
      question: "Do I need a travel advisor for a safari?",
      answer:
        "For luxury safaris, expert planning is critical and directly impacts the outcome of the trip.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="kvts-root">
      <Helmet>
        <title>
          Kenya vs Tanzania Safari: Which Is Best for Luxury Travelers in 2026?
        </title>
        <meta
          name="description"
          content="Kenya vs Tanzania safari comparison by luxury travel expert Angela Hughes. Discover the best safari for first-time travelers, Great Migration timing, luxury camps, costs, and how to design the right East Africa experience."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="kvts-section kvts-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`kvts-hero-bg ${index === currentBg ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="kvts-hero-overlay"></div>

        <div className="kvts-container kvts-hero-inner">
          <h1 className="kvts-h1 kvts-h1-hero">
            Kenya vs Tanzania Safari <br /> Which Is Best for Luxury Travelers?
          </h1>

          <div className={`kvts-hero-details ${showContent ? "expanded" : ""}`}>
            <div className="kvts-snippet-card">
              <h2 className="kvts-snippet-label">
                <Sparkles size={16} />
                Expert Overview
              </h2>
              <p className="kvts-hero-p">
                Not all safaris are created equal, and Kenya and Tanzania are
                not interchangeable.
              </p>
              <p className="kvts-hero-p kvts-mt-sm">
                Both destinations sit within the same ecosystem and both can
                deliver extraordinary wildlife experiences. But how they feel,
                how they are structured, and how they are experienced on the
                ground are very different.
              </p>
              <p className="kvts-hero-p kvts-mt-sm">
                With over four decades in the travel industry, travel to 121+
                countries, and more than 10 safaris across Africa in recent
                years, Angela Hughes works with clients to determine which
                destination or combination will actually deliver the experience
                they are expecting.
              </p>
              <p className="kvts-hero-p kvts-mt-sm">
                This is not about picking the more famous destination. It is
                about getting the safari right.
              </p>
            </div>
          </div>

          <button
            className="kvts-hero-toggle"
            onClick={() => setShowContent(!showContent)}
          >
            {showContent ? "Read Less" : "Read More"}
            {showContent ? <Minus size={16} /> : <Plus size={16} />}
          </button>

          <div className="kvts-hero-btns">
            <button className="kvts-btn-primary">Help Me Plan My Safari</button>
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

      {/* ── 3. PRIMARY CTA (MODERN SPLIT) ── */}
      <section className="kvts-section kvts-cta-modern">
        <div className="kvts-container">
          <div className="kvts-cta-modern-grid">
            <div className="kvts-cta-modern-content">
              <span className="kvts-cta-eyebrow">Strategic Planning</span>
              <h2 className="kvts-h2 kvts-cta-modern-h2">
                Schedule a 15-Minute Luxury Safari Consultation with Angela
                Hughes
              </h2>
              <p className="kvts-p kvts-cta-modern-p">
                Designed for travelers deciding between Kenya and Tanzania who
                want to get it right the first time.
              </p>
              <div className="kvts-cta-modern-actions">
                <button className="kvts-cta-modern-btn">
                  Book Your Free Consultation
                </button>
              </div>
            </div>
            <div className="kvts-cta-modern-image-side">
              <div className="kvts-cta-image-frame">
                <img
                  src={LuxuryTravel}
                  alt="Luxury Safari Experience"
                  className="kvts-cta-img"
                />
                <div className="kvts-cta-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. QUICK COMPARISON (V2 PROFILES) ── */}
      <section className="kvts-section kvts-comparison-v2">
        <div className="kvts-container">
          <div className="kvts-comp-v2-header">
            <h2 className="kvts-h2">
              Kenya vs Tanzania Safari: Quick Comparison
            </h2>
            <div className="kvts-comp-v2-accent"></div>
          </div>

          <div className="kvts-comp-v2-grid">
            {/* Kenya Card */}
            <div className="kvts-comp-v2-card">
              <div className="kvts-comp-v2-card-head">
                <h3>Kenya Safari</h3>
              </div>
              <div className="kvts-comp-v2-card-body">
                {[
                  { label: "Best for", val: "First-time safari travelers" },
                  { label: "Iconic region", val: "Maasai Mara" },
                  { label: "Great Migration", val: "Peak river crossings" },
                  { label: "Wildlife density", val: "Extremely concentrated" },
                  { label: "Logistics", val: "Easier, more efficient" },
                  {
                    label: "Safari style",
                    val: "High-impact, shorter itineraries",
                  },
                  { label: "Luxury level", val: "Exceptional" },
                  { label: "Crowd levels", val: "Moderate in peak season" },
                  { label: "Ideal length", val: "7–10 days" },
                  { label: "Combinations", val: "Rwanda, Uganda" },
                ].map((item, idx) => (
                  <div className="kvts-comp-v2-item" key={idx}>
                    <span className="kvts-comp-v2-label">{item.label}</span>
                    <span className="kvts-comp-v2-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Badge */}
            <div className="kvts-comp-v2-vs">VS</div>

            {/* Tanzania Card */}
            <div className="kvts-comp-v2-card kvts-comp-v2-tanzania">
              <div className="kvts-comp-v2-card-head">
                <h3>Tanzania Safari</h3>
              </div>
              <div className="kvts-comp-v2-card-body">
                {[
                  { label: "Best for", val: "Longer, immersive safaris" },
                  { label: "Iconic region", val: "Serengeti" },
                  { label: "Great Migration", val: "Year-round movement" },
                  {
                    label: "Wildlife density",
                    val: "Spread across vast regions",
                  },
                  { label: "Logistics", val: "More complex, longer distances" },
                  { label: "Safari style", val: "Slower, deeper exploration" },
                  { label: "Luxury level", val: "Exceptional" },
                  { label: "Crowd levels", val: "Can feel more remote" },
                  { label: "Ideal length", val: "10–14+ days" },
                  { label: "Combinations", val: "Zanzibar" },
                ].map((item, idx) => (
                  <div className="kvts-comp-v2-item" key={idx}>
                    <span className="kvts-comp-v2-label">{item.label}</span>
                    <span className="kvts-comp-v2-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHICH SAFARI IS BEST FOR YOU ── */}
      <section className="kvts-section kvts-best-for">
        <div className="kvts-container">
          <div className="kvts-best-for-header">
            <h2 className="kvts-h2">WHICH SAFARI IS BEST FOR YOU</h2>
            <div className="kvts-best-for-accent"></div>
          </div>

          <div className="kvts-best-for-grid">
            {/* Kenya */}
            <div className="kvts-best-card">
              <div className="kvts-best-card-icon">
                <Map size={28} />
              </div>
              <h3 className="kvts-best-card-title">Choose Kenya if you want</h3>
              <ul className="kvts-best-list">
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>
                    A powerful first safari experience that delivers quickly
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>
                    The Maasai Mara, one of the most wildlife-dense regions in
                    Africa
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>
                    Strong predator sightings and consistent game viewing
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>Easier logistics with less time in transit</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>A shorter trip that still feels complete</span>
                </li>
              </ul>
            </div>

            {/* Tanzania */}
            <div className="kvts-best-card kvts-best-card-tanzania">
              <div className="kvts-best-card-icon">
                <Compass size={28} />
              </div>
              <h3 className="kvts-best-card-title">
                Choose Tanzania if you want
              </h3>
              <ul className="kvts-best-list">
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>The Serengeti and Ngorongoro Crater</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>A longer safari with more geographic variation</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>Expansive landscapes and a sense of scale</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>
                    A safari combined with Zanzibar for a beach finish
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>A deeper, more immersive East Africa experience</span>
                </li>
              </ul>
            </div>

            {/* Both */}
            <div className="kvts-best-card kvts-best-card-both">
              <div className="kvts-best-card-icon">
                <Globe size={28} />
              </div>
              <h3 className="kvts-best-card-title">
                Choose Both Kenya and Tanzania if you want
              </h3>
              <ul className="kvts-best-list">
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>The full East Africa safari experience</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>Maasai Mara and Serengeti in one itinerary</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>A longer, high-budget trip with maximum diversity</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />{" "}
                  <span>
                    A broader understanding of the ecosystem and migration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5.5 VIDEO SHOWCASE SECTION ── */}
      <section className="kvts-section kvts-video-showcase">
        <div className="kvts-container">
          <div className="kvts-video-header">
            <h2 className="kvts-h2">Experience the Spirit of East Africa</h2>
            <div className="kvts-video-accent"></div>
            <p className="kvts-video-intro">
              Witness the breathtaking landscapes and unparalleled wildlife
              encounters that make Kenya and Tanzania the world's premier safari
              destinations.
            </p>
          </div>

          <div className="kvts-video-wrapper">
            <div className="kvts-video-frame">
              <iframe
                src="https://www.youtube.com/embed/nr0spUZBIp8?si=Z6M2G0pE_Fz8N5T9"
                title="East Africa Safari Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. MID-PAGE CTA ── */}
      <section className="kvts-section kvts-cta-mid">
        <div className="kvts-container kvts-cta-mid-container">
          <div className="kvts-cta-mid-text">
            <h2 className="kvts-h2">
              Schedule a 15-Minute <br /> Safari Strategy Call
            </h2>
            <p>
              Because the difference between a good safari and an exceptional
              one is how it is designed.
            </p>
          </div>
          <div className="kvts-cta-mid-action">
            <button className="kvts-cta-mid-btn">Schedule Call</button>
          </div>
        </div>
      </section>

      {/* ── 7. WHY KENYA MAY BE THE BETTER CHOICE ── */}
      <section className="kvts-section kvts-why-kenya">
        <div className="kvts-container">
          <div className="kvts-why-kenya-layout">
            {/* Left Side: Sticky Heading */}
            <div className="kvts-why-kenya-left">
              <div className="kvts-why-kenya-sticky">
                <h2 className="kvts-h2">WHY KENYA MAY BE THE BETTER CHOICE</h2>
                <div className="kvts-why-kenya-accent"></div>
                <div className="kvts-section-img-wrap">
                  <img
                    src={KenyaImage}
                    alt="Kenya Safari Elephant"
                    className="kvts-section-img"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Content Stack */}
            <div className="kvts-why-kenya-right">
              <div className="kvts-why-kenya-stack">
                <div className="kvts-why-kenya-item">
                  <div className="kvts-why-kenya-icon">
                    <Sparkles size={28} />
                  </div>
                  <p>
                    Kenya is often the strongest entry point into safari for one
                    simple reason. It delivers.
                  </p>
                </div>
                <div className="kvts-why-kenya-item">
                  <div className="kvts-why-kenya-icon">
                    <Map size={28} />
                  </div>
                  <p>
                    The Maasai Mara is known for consistent wildlife density,
                    high predator activity, and relatively compact geography.
                    That means less time driving between regions and more time
                    actually experiencing wildlife.
                  </p>
                </div>
                <div className="kvts-why-kenya-item">
                  <div className="kvts-why-kenya-icon">
                    <Award size={28} />
                  </div>
                  <p>
                    Kenya also benefits from strong infrastructure,
                    well-established safari routes, highly trained guides, and
                    efficient internal flights.
                  </p>
                </div>
                <div className="kvts-why-kenya-item">
                  <div className="kvts-why-kenya-icon">
                    <Star size={28} />
                  </div>
                  <p>
                    For many travelers, especially those new to Africa, Kenya
                    creates a sense of ease without sacrificing quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. WHY TANZANIA MAY BE THE BETTER CHOICE ── */}
      <section className="kvts-section kvts-why-tanzania">
        <div className="kvts-container">
          <div className="kvts-why-tanzania-header">
            <h2 className="kvts-h2">WHY TANZANIA MAY BE THE BETTER CHOICE</h2>
          </div>

          <div className="kvts-why-tanzania-grid">
            <div className="kvts-why-tanzania-card">
              <div className="kvts-why-tanzania-icon">
                <Sparkles size={28} />
              </div>
              <p>Tanzania offers something different. It offers space.</p>
            </div>
            <div className="kvts-why-tanzania-card">
              <div className="kvts-why-tanzania-icon">
                <Map size={28} />
              </div>
              <p>
                The Serengeti is vast. Ngorongoro Crater is dramatic. Tarangire
                has a completely different feel.
              </p>
            </div>
            <div className="kvts-why-tanzania-card">
              <div className="kvts-why-tanzania-icon">
                <Compass size={28} />
              </div>
              <p>
                This creates more varied landscapes, a slower pace, and longer
                time in the bush.
              </p>
            </div>
            <div className="kvts-why-tanzania-card">
              <div className="kvts-why-tanzania-icon">
                <Award size={28} />
              </div>
              <p>
                Tanzania can feel less structured and more expansive, which is
                exactly what some travelers are looking for. But it also
                requires more time, more strategic routing, and stronger
                logistical planning.
              </p>
            </div>
            <div className="kvts-why-tanzania-card">
              <div className="kvts-why-tanzania-icon">
                <Star size={28} />
              </div>
              <p>
                Without that, it can feel long and disconnected. When done
                right, it is extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TRUST SECTION (PREMIUM EDITORIAL) ────────────────── */}
      <section
        className="btgms-trust-compact"
        style={{
          background: "var(--bg-white)",
        }}
      >
        <div className="btgms-container">
          <div className="btgms-trust-layout">
            <div className="btgms-trust-image-side">
              <div className="btgms-about-img-frame">
                <img
                  src={profileImg}
                  alt="Angela Hughes - Luxury Safari Expert"
                  className="btgms-about-img"
                />
              </div>

              {/* Stats Grid Overlay */}
              <div className="btgms-trust-stats-grid">
                <div className="btgms-trust-stat-card">
                  <div className="btgms-stat-icon-wrap">
                    <Globe size={20} />
                  </div>
                  <div className="btgms-stat-text">
                    <strong style={{ fontSize: "30px" }}>121+</strong>
                    <span style={{ fontSize: "18px" }}>Countries Visited</span>
                  </div>
                </div>
                <div className="btgms-trust-stat-card">
                  <div className="btgms-stat-icon-wrap">
                    <Compass size={20} />
                  </div>
                  <div className="btgms-stat-text">
                    <strong style={{ fontSize: "30px" }}>40+ Years</strong>
                    <span style={{ fontSize: "18px" }}>Travel Expertise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="btgms-trust-content-side">
              <span className="btgms-trust-eyebrow">Expert Guidance</span>
              <h2 className="btgms-h2">Why Trust This Guide</h2>

              <p className="btgms-p-lead">
                Angela Hughes brings real, on-the-ground experience to safari
                planning.
              </p>

              <div className="btgms-philosophy-text">
                <p>
                  Luxury safari planning requires far more than choosing a lodge
                  or deciding between Kenya and Tanzania. The timing of the
                  migration, regional weather patterns, wildlife movement,
                  flight logistics, conservation access, guide quality, and
                  pacing of the itinerary all shape the overall experience.
                </p>
                <p>
                  As a professor of Travel and Tourism and Geography, award
                  winning luxury travel advisor, and one of the most recognized
                  voices in luxury travel media today, Angela Hughes brings both
                  destination knowledge and real world safari experience to the
                  planning process.
                </p>
                <p>
                  Having traveled extensively throughout Africa and more than
                  121 countries worldwide, Angela works closely with trusted
                  luxury safari partners to help clients select the right
                  destination, camp style, safari pacing, and seasonal timing
                  based on their goals, comfort level, and travel investment.
                </p>
              </div>

              <div className="btgms-recognition-compact">
                <h3 className="btgms-h3">Professional Recognition</h3>
                <ul className="btgms-recognition-list-small">
                  <li>
                    <Award size={18} /> Travel Leaders Network Advisory Board
                  </li>
                  <li>
                    <Star size={18} /> Featured in Travel Weekly & TravelPulse
                  </li>
                  <li>
                    <CheckCircle2 size={18} /> CEO, Trips & Ships Luxury Travel
                  </li>
                  <li>
                    <Map size={18} /> 10+ Safaris across Africa in recent years
                  </li>
                </ul>
                <div className="btgms-recognition-footer-compact">
                  <Sparkles size={14} className="btgms-footer-icon" />
                  <span>
                    "This is not theory. This is experience built over decades."
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WHAT LUXURY TRAVELERS OFTEN GET WRONG ── */}
      <section className="kvts-section kvts-mistakes">
        <div className="kvts-container">
          <div className="kvts-mistakes-header">
            <h2 className="kvts-h2">
              KENYA VS TANZANIA: WHAT LUXURY TRAVELERS OFTEN GET WRONG
            </h2>
            <p className="kvts-mistakes-subtitle">
              This is where most safaris succeed or fail.
            </p>
            <div className="kvts-mistakes-accent"></div>
          </div>
          <div className="kvts-mistakes-grid">
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Choosing Tanzania without enough time</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Choosing Kenya when a longer experience was needed</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Selecting the wrong camp location</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Poor timing for migration</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Underestimating travel time between regions</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Focusing on price instead of experience design</p>
            </div>
            <div className="kvts-mistakes-item">
              <div className="kvts-mistakes-icon">
                <AlertTriangle size={22} />
              </div>
              <p>Relying on inexperienced operators</p>
            </div>
          </div>
          <div className="kvts-mistakes-footer">
            <div className="kvts-mistakes-footer-box">
              <p>These are not small mistakes. They define the trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. KENYA VS TANZANIA FOR THE GREAT MIGRATION ── */}
      <section className="kvts-section kvts-migration-clean">
        <div className="kvts-container">
          {/* Centered Header (Azamara Style) */}
          <div className="kvts-migration-clean-header">
            <h2 className="kvts-h2">
              KENYA VS TANZANIA FOR <br /> THE GREAT MIGRATION
            </h2>
            <div className="kvts-migration-clean-accent"></div>
            <p className="kvts-migration-clean-intro">
              The Great Migration is not one event. It is a year-round movement
              across the Serengeti–Maasai Mara ecosystem.
            </p>
          </div>

          {/* Structured Grid */}
          <div className="kvts-migration-clean-grid">
            {/* Kenya Card */}
            <div className="kvts-migration-clean-card">
              <div className="kvts-migration-card-img-side">
                <img
                  src={MaasaiMara}
                  alt="Kenya Great Migration"
                  className="kvts-migration-img"
                />
                <div className="kvts-migration-img-overlay"></div>
              </div>
              <div className="kvts-migration-card-content">
                <div className="kvts-migration-clean-card-head">
                  <div className="kvts-migration-clean-icon-box">
                    <MapPin size={20} />
                  </div>
                  <span className="kvts-migration-clean-label">
                    Kenya Focus
                  </span>
                </div>
                <p>
                  Kenya is known for dramatic river crossings in the Maasai
                  Mara, typically July through October.
                </p>
              </div>
            </div>

            {/* Tanzania Card */}
            <div className="kvts-migration-clean-card">
              <div className="kvts-migration-card-img-side">
                <img
                  src={TanzaniaImage4}
                  alt="Tanzania Great Migration"
                  className="kvts-migration-img"
                />
                <div className="kvts-migration-img-overlay"></div>
              </div>
              <div className="kvts-migration-card-content">
                <div className="kvts-migration-clean-card-head">
                  <div className="kvts-migration-clean-icon-box">
                    <Compass size={20} />
                  </div>
                  <span className="kvts-migration-clean-label">
                    Tanzania Focus
                  </span>
                </div>
                <p>
                  Tanzania offers migration viewing across multiple regions of
                  the Serengeti and can be experienced at different times of
                  year depending on herd movement, including calving season
                  early in the year.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Advisor Takeaway */}
          <div className="kvts-migration-clean-footer">
            <div className="kvts-migration-clean-expert-box">
              <p>
                If your entire trip is built around the migration, timing
                matters more than destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. KENYA VS TANZANIA FOR LUXURY TRAVELERS (STICKY SIDE-BY-SIDE) ── */}
      <section className="kvt-lux-sticky-section">
        <div className="kvt-lux-sticky-container">
          <div className="kvt-lux-sticky-wrapper">
            {/* Left Side: Sticky Manifesto */}
            <div className="kvt-lux-sticky-left">
              <div className="kvt-lux-sticky-header">
                <h2 className="kvt-lux-sticky-h2">
                  KENYA VS TANZANIA FOR LUXURY TRAVELERS
                </h2>
                <div className="kvt-lux-sticky-accent"></div>
                <div className="kvt-lux-sticky-quote-box">
                  <p className="kvt-lux-sticky-quote">
                    Luxury safari is not about{" "}
                    <span className="kvt-lux-sticky-bold">thread count</span> or
                    lodge design.
                  </p>
                </div>
                <div className="kvts-section-img-wrap">
                  <img
                    src={Luxury}
                    alt="Majestic Lion Safari"
                    className="kvts-section-img"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Scrollable Content (Clean Look) */}
            <div className="kvt-lux-sticky-right">
              <div className="kvt-lux-clean-wrap">
                <div className="kvt-lux-clean-intro">
                  <h3 className="kvt-lux-clean-label">
                    The True Luxury Equation
                  </h3>
                  <div className="kvt-lux-clean-list">
                    {[
                      {
                        title: "The Guide",
                        desc: "The expert who interprets the bush and makes every moment count.",
                      },
                      {
                        title: "The Timing",
                        desc: "Being in the right place at the exact right moment of the season.",
                      },
                      {
                        title: "The Routing",
                        desc: "A logical, efficient path that maximizes wildlife viewing time.",
                      },
                      {
                        title: "Camp Location",
                        desc: "Private concessions and exclusive access points away from the crowds.",
                      },
                      {
                        title: "The Operator",
                        desc: "The invisible hand that ensures safety, logistics, and total luxury.",
                      },
                    ].map((item, idx) => (
                      <div className="kvt-lux-clean-item" key={idx}>
                        <div className="kvt-lux-clean-num">0{idx + 1}</div>
                        <div className="kvt-lux-clean-body">
                          <h4 className="kvt-lux-clean-title">{item.title}</h4>
                          <p className="kvt-lux-clean-desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="kvt-lux-clean-tag">...behind the scenes.</p>
                </div>

                <div className="kvt-lux-clean-footer">
                  <div className="kvt-lux-clean-verdict">
                    <p className="kvt-lux-clean-p">
                      Both Kenya and Tanzania can deliver exceptional luxury
                      experiences, but{" "}
                      <span className="kvt-lux-clean-high">
                        only when they are designed correctly.
                      </span>
                    </p>
                    <div className="kvt-lux-clean-alert">
                      <AlertCircle size={18} className="kvt-lux-clean-icon" />
                      <span className="kvt-lux-clean-status">
                        This is where most trips succeed or fail.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. VIDEO FEATURE SECTION ── */}
      <section className="kvt-video-feature">
        <div className="kvts-container">
          <div className="kvt-video-split">
            <div className="kvt-video-copy">
              <span className="kvt-video-eyebrow">
                <Play size={14} fill="currentColor" />
                Visual Safari Guide
              </span>
              <h2 className="kvts-h2">
                Experience the <br /> Great Migration
              </h2>
              <div className="kvt-video-accent"></div>
              <p className="kvts-p">
                Witness the dramatic river crossings and vast landscapes that
                define the East African safari. Understanding the movement of
                the herds is key to designing a successful luxury itinerary.
              </p>
            </div>

            <div className="kvt-video-player-wrap">
              <div className="kvt-video-glow"></div>
              <div className="kvt-video-frame">
                <img
                  src={Migration}
                  alt="East Africa Great Migration"
                  className="kvts-showcase-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12.5 SUPPLEMENTARY VIDEO SHOWCASE ── */}
      <section className="kvts-section kvts-video-showcase-alt">
        <div className="kvts-container">
          <div className="kvts-video-header">
            <h2 className="kvts-h2">East Africa: A Cinematic Journey</h2>
            <div className="kvts-video-accent"></div>
            <p className="kvts-video-intro">
              Dive deeper into the rhythmic beauty of the Serengeti and Maasai
              Mara ecosystems.
            </p>
          </div>

          <div className="kvts-video-wrapper">
            <div className="kvts-video-frame">
              <iframe
                src="https://www.youtube.com/embed/jST68PUiHu8?rel=0&modestbranding=1"
                title="Cinematic Safari Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. KENYA VS TANZANIA SAFARI COST (NARRATIVE VS VALUE V7) ── */}
      <section className="kvt-cost-v7-section">
        <div className="kvt-cost-v7-container">
          <div className="kvt-cost-v7-split">
            {/* Left: The Value */}
            <div className="kvt-cost-v7-value">
              <div className="kvt-cost-v7-price-card">
                <span className="kvt-cost-v7-label">
                  Expert Pricing Estimate
                </span>
                <div className="kvt-cost-v7-amount">
                  <span className="kvt-cost-v7-curr">$</span>
                  <span className="kvt-cost-v7-val">25,000 — 45,000</span>
                  <span className="kvt-cost-v7-plus">+</span>
                </div>
                <p className="kvt-cost-v7-per">
                  Per person for high-end experiences
                </p>
              </div>

              <div className="kvt-cost-v7-verdict">
                <p className="kvt-cost-v7-verdict-p">
                  The difference in price between Kenya and Tanzania is often
                  less important than{" "}
                  <span className="kvt-cost-v7-high">
                    how the itinerary is structured.
                  </span>
                </p>
              </div>
            </div>

            {/* Right: The Logic */}
            <div className="kvt-cost-v7-logic">
              <h2 className="kvt-cost-v7-h2">
                KENYA VS TANZANIA <br /> SAFARI COST
              </h2>
              <div className="kvt-cost-v7-accent"></div>

              <p className="kvt-cost-v7-p kvts-mt-md">
                Luxury safaris in Kenya and Tanzania sit in the same general
                pricing tier.
              </p>

              <div className="kvt-cost-v7-factors">
                <h3 className="kvt-cost-v7-factors-h3">
                  Primary Cost Pillars:
                </h3>
                <div className="kvt-cost-v7-list">
                  {[
                    { icon: Sparkles, text: "Level of camps and lodges" },
                    { icon: UserCheck, text: "Private versus shared safari" },
                    { icon: MapPin, text: "Number of regions visited" },
                    { icon: Clock, text: "Season of travel" },
                    { icon: Plane, text: "Internal flights between camps" },
                  ].map((item, idx) => (
                    <div className="kvt-cost-v7-item" key={idx}>
                      <item.icon size={18} className="kvt-cost-v7-icon" />
                      <span className="kvt-cost-v7-item-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. WHAT CAN GO WRONG (PREMIUM ALERT GRID V3) ── */}
      <section className="kvt-wrong-v3-section">
        <div className="kvt-wrong-v3-container">
          <div className="kvt-wrong-v3-header">
            <h2 className="kvt-wrong-v3-h2">
              WHAT CAN GO WRONG WHEN <br /> CHOOSING THE WRONG DESTINATION
            </h2>
            <div className="kvt-wrong-v3-accent"></div>
          </div>

          <div className="kvt-wrong-v3-grid">
            {[
              { icon: Clock, text: "Poor migration timing" },
              { icon: MapPin, text: "Weak routing between regions" },
              { icon: Home, text: "Wrong camp placement" },
              { icon: Plane, text: "Too much time in transit" },
              { icon: UserCheck, text: "Inexperienced operators" },
            ].map((item, idx) => (
              <div className="kvt-wrong-v3-card" key={idx}>
                <div className="kvt-wrong-v3-icon-box">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="kvt-wrong-v3-content">
                  <span className="kvt-wrong-v3-text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="kvt-wrong-v3-footer">
            <p className="kvt-wrong-v3-conclusion">
              These are the differences between a good trip and an exceptional
              one.
            </p>
          </div>
        </div>
      </section>
      {/* ── 14. FAQ SECTION ── */}
      <section className="kvt-faq-section">
        <div className="kvt-faq-container">
          <div className="kvt-faq-header">
            <h2 className="kvt-faq-h2">FAQ: KENYA VS TANZANIA SAFARI</h2>
            <div className="kvt-faq-accent"></div>
          </div>

          <div className="kvt-faq-wrapper">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`kvt-faq-item ${isOpen ? "active" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="kvt-faq-question">
                    <span>
                      {index + 1}. {faq.question}
                    </span>
                    <span className="kvt-faq-icon">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={1.5} />
                      ) : (
                        <Plus size={20} strokeWidth={1.5} />
                      )}
                    </span>
                  </div>
                  {isOpen && (
                    <div className="kvt-faq-answer">
                      <div className="kvt-faq-answer-inner">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="btgms-section btgms-final-cta-v3"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${TanzaniaImage2})`,
        }}
      >
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
