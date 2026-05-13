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
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "./Kenyasafarimicato.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutImage from "../../assets/Angela_Hughes.jpg";
import KenyaSafariImage1 from "../../assets/KenyaSafariwithMicatoSafaris/Kenya1.jpg";
import KenyaSafariImage2 from "../../assets/KenyaSafariwithMicatoSafaris/Kenya2.jpg";
import KenyaSafariImage3 from "../../assets/KenyaSafariwithMicatoSafaris/Kenya3.jpg";
import MaasaiMara from "../../assets/KenyaSafariwithMicatoSafaris/Maasai_Mara.jpg";
import Conservancies from "../../assets/KenyaSafariwithMicatoSafaris/Conservancies.jpg";
import Park from "../../assets/KenyaSafariwithMicatoSafaris/Park.jpg";
import Samburu from "../../assets/KenyaSafariwithMicatoSafaris/Samburu.jpg";
import KenyaSafariImage4 from "../../assets/KenyaSafariwithMicatoSafaris/Kenya4.jpg";
import KenyaTravel from "../../assets/KenyaSafariwithMicatoSafaris/KenyaTravel.jpg";
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
  const images = [KenyaSafariImage1, KenyaSafariImage2, KenyaSafariImage3];

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
        className="KenSafari-section KenSafari-bg-white"
        id="KenSafari-overview"
      >
        <div className="KenSafari-container">
          <div className="KenSafari-intro-split">
            {/* Left Column: Content */}
            <div className="KenSafari-intro-content">
              <div className="KenSafari-section-header KenSafari-intro-header">
                <h2 className="KenSafari-h2">
                  Why Kenya Safaris Are Not All Created Equal
                </h2>
                <div className="KenSafari-accent-line" />
              </div>
              
              <p className="KenSafari-intro-text KenSafari-intro-spacing">
                Kenya is one of the most iconic safari destinations in the world.
                It is also one of the easiest places to get wrong.
              </p>

              <div className="KenSafari-intro-cards-vertical">
                <div className="KenSafari-intro-card-v">
                  <div className="KenSafari-intro-card-icon-v">
                    <AlertTriangle size={22} strokeWidth={1.5} />
                  </div>
                  <p className="KenSafari-intro-card-text-v">
                    We are in an industry with no real barrier to entry. Anyone
                    can say they sell travel. Anyone can say they "do" Africa.
                  </p>
                </div>
                
                <div className="KenSafari-intro-card-v">
                  <div className="KenSafari-intro-card-icon-v">
                    <Users size={22} strokeWidth={1.5} />
                  </div>
                  <p className="KenSafari-intro-card-text-v">
                    After COVID, even more operators entered the market, creating
                    a wide gap between average and exceptional safari experiences.
                  </p>
                </div>

                <div className="KenSafari-intro-card-v KenSafari-intro-card-accent-v">
                  <div className="KenSafari-intro-card-icon-v">
                    <Star size={22} strokeWidth={1.5} />
                  </div>
                  <p className="KenSafari-intro-card-text-v">
                    The difference becomes clear once you are on the ground.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="KenSafari-intro-visual">
              <div className="KenSafari-intro-image-group">
                <div className="KenSafari-intro-img-frame KenSafari-intro-img-1">
                  <img src={KenyaTravel} alt="Luxury Kenya Safari" />
                  <div className="KenSafari-img-badge">
                    <Sparkles size={14} />
                    <span>Exceptional Standards</span>
                  </div>
                </div>
                <div className="KenSafari-intro-img-frame KenSafari-intro-img-2">
                  <img src={KenyaSafariImage4} alt="Kenya Wildlife" />
                </div>
                <div className="KenSafari-intro-decorative-blob" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section
        className="btgms-section btgms-specialization"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="btgms-container">
          <h2 className="btgms-h2">
            Experts in African Safari & Expedition Travel
          </h2>
                    <div className="btgms-accent-line"></div>
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

          <div className="KenSafari-micato-bento">
            {/* Card 1: Elite Guiding */}
            <div className="KenSafari-micato-item KenSafari-micato-guiding">
              <div className="KenSafari-micato-item-inner">
                <div className="KenSafari-micato-icon">
                  <Award size={28} strokeWidth={1.5} />
                </div>
                <h3 className="KenSafari-micato-title">Elite Guiding</h3>
                <p className="KenSafari-micato-text">
                  The guide determines the overall experience. Micato's guides
                  are among the most skilled in Kenya.
                </p>
          
              </div>
            </div>

            {/* Card 2: Relationships */}
            <div className="KenSafari-micato-item KenSafari-micato-relationships">
              <div className="KenSafari-micato-item-inner">
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
                <div className="KenSafari-micato-item-bg" />
              </div>
            </div>

            {/* Card 3: Logistics */}
            <div className="KenSafari-micato-item KenSafari-micato-logistics">
              <div className="KenSafari-micato-item-inner">
                <div className="KenSafari-micato-icon">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <h3 className="KenSafari-micato-title">Seamless Logistics</h3>
                <p className="KenSafari-micato-text">
                  Every internal flight, transfer, and camp transition is
                  managed with precision from start to finish.
                </p>
                <div className="KenSafari-micato-item-bg" />
              </div>
            </div>

            {/* Card 4: Camp Access */}
            <div className="KenSafari-micato-item KenSafari-micato-camps">
              <div className="KenSafari-micato-item-inner">
                <div className="KenSafari-micato-icon">
                  <Star size={28} strokeWidth={1.5} />
                </div>
                <h3 className="KenSafari-micato-title">Premier Camp Access</h3>
                <p className="KenSafari-micato-text">
                  Access to the best camps in the most strategic locations
                  across Kenya's top wildlife regions.
                </p>
         
              </div>
            </div>

            {/* Card 5: Consistent Delivery */}
            <div className="KenSafari-micato-item KenSafari-micato-delivery">
              <div className="KenSafari-micato-item-inner">
                <div className="KenSafari-micato-icon">
                  <Check size={28} strokeWidth={1.5} />
                </div>
                <h3 className="KenSafari-micato-title">Consistent Delivery</h3>
                <p className="KenSafari-micato-text">
                  Consistent delivery across every itinerary. Micato is not
                  competing with mid-market companies — it sits at the top.
                </p>
                <div className="KenSafari-micato-item-bg" />
              </div>
            </div>

            {/* Card 6: Statement */}
            <div className="KenSafari-micato-item KenSafari-micato-statement-card">
              <div className="KenSafari-micato-item-inner">
                <div className="KenSafari-micato-statement-content">
                  <Quote size={32} className="KenSafari-micato-quote-icon" />
                  <p className="KenSafari-micato-statement">
                    Micato is not competing with mid-market safari companies. It
                    sits at the top of the luxury safari space.
                  </p>
                </div>
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
          <div className="KenSafari-video-grid">
            <div className="KenSafari-video-item">
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
      <section className="KenSafari-wrong-section">
        <div className="KenSafari-wrong-pattern" />

        <div
          className="KenSafari-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Header */}
          <div className="KenSafari-wrong-header">
            <h2 className="KenSafari-h2">
              What Can Go Wrong on a Kenya Safari
            </h2>
            <div className="KenSafari-accent-line" />
          </div>

          {/* Staggered cards grid */}
          <div className="KenSafari-wrong-cards">
            {[
              "Poor guide selection",
              "Incorrect camp location",
              "Weak routing between regions",
              "Poor timing for wildlife movement",
              "Inexperienced operators",
            ].map((risk, i) => (
              <div key={i} className="KenSafari-wrisk-card">
                <span className="KenSafari-wrisk-num">0{i + 1}</span>
                <div className="KenSafari-wrisk-icon-wrap">
                  <AlertTriangle size={24} strokeWidth={1.5} />
                </div>
                <p className="KenSafari-wrisk-label">{risk}</p>
              </div>
            ))}
          </div>

          {/* Closing quote banner */}
          <div className="KenSafari-wrong-banner">
            <div className="KenSafari-wrong-banner-line" />
            <p className="KenSafari-wrong-banner-text">
              The difference between the right guide and the wrong guide can
              define the entire experience.
            </p>
            <div className="KenSafari-wrong-banner-line" />
          </div>
        </div>
      </section>

      {/* ── WHY TRIPS & SHIPS — Premium Editorial Layout ────────────────── */}
      <section
        className="btgms-trust-compact"
        style={{
          background: "var(--bg-soft)",
        }}
      >
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
                <span className="btgms-trust-eyebrow">
                  THE TRIPS & SHIPS ADVANTAGE
                </span>
                <h2 className="btgms-h2">
                  Why Clients Choose Trips &amp; Ships Luxury Travel
                </h2>
                <div className="btgms-trust-description">
                  <p className="btgms-p-small">
                    Clients work with Angela Hughes because experience matters.
                    We don't just book trips; we design legacies.
                  </p>

                  <p className="btgms-p-small">
                    Luxury safari planning requires far more than choosing a
                    lodge or deciding between Kenya and Tanzania. The timing of
                    the migration, regional weather patterns, wildlife movement,
                    flight logistics, conservation access, guide quality, and
                    pacing of the itinerary all shape the overall experience.
                  </p>

                  <p className="btgms-p-small">
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

      {/* ── BEST DESTINATIONS ─────────────────────────────────────── */}
      <section className="KenSafari-dest-section" id="KenSafari-destinations">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">Best Kenya Safari Destinations</h2>
            <div className="KenSafari-accent-line" />
            <p className="KenSafari-body-text" style={{ marginTop: "20px" }}>
              Each region requires a different strategy and approach.
            </p>
          </div>

          <div className="KenSafari-dest-grid">
            {/* 01 — Maasai Mara */}
            <div
              className="KenSafari-dest-card"
              style={{ backgroundImage: `url(${MaasaiMara})` }}
            >
              <div className="KenSafari-dest-overlay" />
              <span className="KenSafari-dest-number">01</span>
              <div className="KenSafari-dest-body">
                <div className="KenSafari-dest-icon">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="KenSafari-dest-content">
                  <h3 className="KenSafari-dest-title">Maasai Mara</h3>
                  <p className="KenSafari-dest-text">
                    Big Five sightings and the Great Migration. Guide quality is
                    critical.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 — Laikipia Conservancies */}
            <div
              className="KenSafari-dest-card"
              style={{ backgroundImage: `url(${Conservancies})` }}
            >
              <div className="KenSafari-dest-overlay" />
              <span className="KenSafari-dest-number">02</span>
              <div className="KenSafari-dest-body">
                <div className="KenSafari-dest-icon">
                  <Star size={24} strokeWidth={1.5} />
                </div>
                <div className="KenSafari-dest-content">
                  <h3 className="KenSafari-dest-title">
                    Laikipia Conservancies
                  </h3>
                  <p className="KenSafari-dest-text">
                    Exclusive, less crowded, highly curated experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — Amboseli National Park */}
            <div
              className="KenSafari-dest-card"
              style={{ backgroundImage: `url(${Park})` }}
            >
              <div className="KenSafari-dest-overlay" />
              <span className="KenSafari-dest-number">03</span>
              <div className="KenSafari-dest-body">
                <div className="KenSafari-dest-icon">
                  <Camera size={24} strokeWidth={1.5} />
                </div>
                <div className="KenSafari-dest-content">
                  <h3 className="KenSafari-dest-title">
                    Amboseli National Park
                  </h3>
                  <p className="KenSafari-dest-text">
                    Known for large elephant herds and Kilimanjaro views.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 — Samburu */}
            <div
              className="KenSafari-dest-card"
              style={{ backgroundImage: `url(${Samburu})` }}
            >
              <div className="KenSafari-dest-overlay" />
              <span className="KenSafari-dest-number">04</span>
              <div className="KenSafari-dest-body">
                <div className="KenSafari-dest-icon">
                  <Compass size={24} strokeWidth={1.5} />
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
        </div>
      </section>

      {/* ── VIDEO SECTION 2 ─────────────────────────────────────────── */}
      <section className="KenSafari-section KenSafari-bg-soft">
        <div className="KenSafari-container">
          <div className="KenSafari-section-header">
            <h2 className="KenSafari-h2">The Micato Safari Experience</h2>
            <div className="KenSafari-accent-line" />
          </div>
          <div className="KenSafari-video-grid">
            <div className="KenSafari-video-item">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jhsQZI1YY9g"
                title="Micato Safaris Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="KenSafari-video-iframe"
              />
            </div>
          </div>
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
            {/* Micato Safaris - Featured */}
            <div className="KenSafari-compare-card KenSafari-compare-featured">
              <div className="KenSafari-compare-badge-wrap">
                <span className="KenSafari-compare-badge">
                  Our Primary Recommendation
                </span>
              </div>
              <div className="KenSafari-compare-card-content">
                <div className="KenSafari-compare-icon-header">
                  <Award size={42} strokeWidth={1} />
                </div>
                <div className="KenSafari-compare-header">
                  <h3 className="KenSafari-compare-title">Micato Safaris</h3>
                  <div className="KenSafari-compare-divider" />
                </div>
                <div className="KenSafari-compare-body">
                  <div className="KenSafari-compare-highlight">
                    <Check
                      size={20}
                      strokeWidth={3}
                      className="KenSafari-compare-check"
                    />
                    <p className="KenSafari-compare-desc">
                      Known for consistency and guiding excellence.
                    </p>
                  </div>
                  <div className="KenSafari-compare-highlight">
                    <Check
                      size={20}
                      strokeWidth={3}
                      className="KenSafari-compare-check"
                    />
                    <p className="KenSafari-compare-desc">
                      Especially strong in Kenya.
                    </p>
                  </div>
                </div>
              </div>
              <div className="KenSafari-compare-card-accent" />
            </div>

            {/* Abercrombie & Kent */}
            <div className="KenSafari-compare-card">
              <div className="KenSafari-compare-card-content">
                <div className="KenSafari-compare-icon-header">
                  <Globe size={42} strokeWidth={1} />
                </div>
                <div className="KenSafari-compare-header">
                  <h3 className="KenSafari-compare-title">
                    Abercrombie & Kent
                  </h3>
                  <div className="KenSafari-compare-divider" />
                </div>
                <div className="KenSafari-compare-body">
                  <p className="KenSafari-compare-desc">
                    Global luxury operator with structured itineraries.
                  </p>
                </div>
              </div>
            </div>

            {/* &Beyond */}
            <div className="KenSafari-compare-card">
              <div className="KenSafari-compare-card-content">
                <div className="KenSafari-compare-icon-header">
                  <Shield size={42} strokeWidth={1} />
                </div>
                <div className="KenSafari-compare-header">
                  <h3 className="KenSafari-compare-title">&Beyond</h3>
                  <div className="KenSafari-compare-divider" />
                </div>
                <div className="KenSafari-compare-body">
                  <p className="KenSafari-compare-desc">
                    Strong camp portfolio and conservation focus.
                  </p>
                </div>
              </div>
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
            <div className="KenSafari-testimonial-attr">— Elizabeth Hope</div>
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

      {/* FINAL CTA */}
      <section
        className="btgms-section btgms-final-cta-v3"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${KenyaSafariImage3})`,
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
};

export default KenyaSafariMicato;
