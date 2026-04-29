import Navbar from "../../components/Navbar/Navbar";
import "./AzamaraAlaskaCruises.css";
import {
  Ship,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Compass,
  Sparkles,
  Anchor,
  Calendar,
  ChevronRight,
  Crown,
  Phone,
  Plus,
  Minus,
  Mountain,
  Binoculars,
  Camera,
  Sun,
  Snowflake,
  Leaf,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import profilePicture from "../../assets/image.jpg";
// Hero images — replace these with Alaska-specific assets
import heroImage1 from "../../assets/AzamaraAlaskaCruises/Hero1.webp";
import heroImage2 from "../../assets/AzamaraAlaskaCruises/Hero2.webp";
import heroImage3 from "../../assets/AzamaraAlaskaCruises/Hero3.webp";
import chooseImg1 from "../../assets/AzamaraAlaskaCruises/Small_Ship.webp";
import chooseImg2 from "../../assets/AzamaraAlaskaCruises/Onboard_ entertainment.webp";
import extendImg1 from "../../assets/AzamaraAlaskaCruises/gallery1.webp";
import extendImg2 from "../../assets/AzamaraAlaskaCruises/gallery2.webp";
import extendImg3 from "../../assets/AzamaraAlaskaCruises/wildlife_extension.webp";

function AzamaraAlaskaCruises() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentHero, setCurrentHero] = useState(0);

  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % (heroImages.length || 1));
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Azamara Cruises good for an Alaska cruise?",
      answer:
        "Yes. Azamara is one of the best options for travelers who want a smaller ship, longer port stays, and a more immersive Alaska experience without the crowds of large cruise lines.",
    },
    {
      question: "What makes Azamara different from other Alaska cruise lines?",
      answer:
        "Azamara focuses on destination immersion, meaning longer stays, overnight ports, and access to smaller, less crowded locations compared to traditional Alaska cruises.",
    },
    {
      question: "Does Azamara cruise to Glacier Bay National Park?",
      answer:
        "Some itineraries include glacier regions, but not all include Glacier Bay specifically. Choosing the right itinerary is critical when booking Alaska.",
    },
    {
      question: "Is Azamara considered luxury or premium for Alaska cruises?",
      answer:
        "Azamara sits in the boutique luxury category. It offers elevated service and curated experiences without the formality or pricing of ultra-luxury cruise lines.",
    },
    {
      question: "How does Azamara compare to Viking Cruises in Alaska?",
      answer:
        "Azamara offers a more relaxed, social atmosphere with longer port stays, while Viking focuses on a quieter, culturally focused experience with a more structured onboard environment.",
    },
    {
      question: "How does Azamara compare to Princess Cruises for Alaska?",
      answer:
        "Princess operates larger ships with more onboard entertainment, while Azamara offers a smaller ship experience with deeper destination access and fewer crowds.",
    },
    {
      question: "Is Azamara Alaska worth the price?",
      answer:
        "Yes, for travelers who prioritize access, time in port, and a more refined experience. It may not be ideal for those focused on price or onboard entertainment.",
    },
    {
      question: "What is included in an Azamara Alaska cruise fare?",
      answer:
        "Most fares include gratuities, select beverages, onboard cultural programming, and destination-focused experiences.",
    },
    {
      question: "What is the best time to cruise Alaska with Azamara?",
      answer:
        "May through September, with May and September offering fewer crowds and better pricing, and June through August offering peak weather and wildlife viewing.",
    },
    {
      question: "What type of traveler is Azamara Alaska best for?",
      answer:
        "Azamara attracts well-traveled individuals who prefer boutique experiences, cultural depth, and a slower, more immersive pace.",
    },
    {
      question: "What are the best cabins on Azamara for Alaska views?",
      answer:
        "Veranda cabins are ideal, allowing private glacier viewing and scenic cruising directly from your balcony.",
    },
    {
      question: "Are Azamara Alaska cruises good for first-time visitors?",
      answer:
        "Yes, but they are especially ideal for travelers who want a deeper, less commercialized Alaska experience rather than a traditional cruise.",
    },
    {
      question: "How far in advance should I book an Azamara Alaska cruise?",
      answer:
        "Booking 9–15 months in advance is recommended for the best pricing, cabin selection, and itinerary options.",
    },
    {
      question: "What mistakes should I avoid when booking an Alaska cruise?",
      answer:
        "Common mistakes include choosing the wrong itinerary, focusing only on price, underestimating logistics, and not planning pre- and post-cruise experiences.",
    },
    {
      question: "Do I need to plan a pre- or post-cruise stay for Alaska?",
      answer:
        "Yes. Adding time in destinations like Vancouver or Anchorage significantly enhances the overall experience and allows for better logistics and exploration.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/azamara-alaska-cruises#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Angela Hughes",
        jobTitle: "CEO and Luxury Travel Advisor",
        description:
          "Angela Hughes is a luxury travel expert with over 40 years of experience and travel to 121+ countries. She specializes in designing high-end cruise, expedition, and bespoke travel experiences, with a strong focus on strategic itinerary planning and destination expertise.",
        url: "https://www.tripsandships.com",
        worksFor: {
          "@type": "Organization",
          name: "Trips & Ships Luxury Travel",
          url: "https://www.tripsandships.com",
        },
        affiliation: {
          "@type": "Organization",
          name: "Luxury Travel University",
        },
        award: [
          "Luxury Travel Influencer of the Year - Travel Leaders Network",
          "TravelPulse Most Influential Women in Travel 2026",
          "Travel Weekly Magellan Awards",
        ],
        sameAs: [
          "https://www.linkedin.com",
          "https://www.instagram.com/tripsandships",
          "https://www.youtube.com",
        ],
        knowsAbout: [
          "Luxury Travel",
          "Alaska Cruises",
          "Azamara Cruises",
          "Small Ship Cruising",
          "Expedition Travel",
          "River Cruises",
          "Travel Business Development",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Luxury Travel Advisor",
          occupationLocation: {
            "@type": "Country",
            name: "United States",
          },
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Azamara Alaska Cruises: The Insider Guide to Small Ship Luxury in
          Alaska
        </title>
        <meta
          name="description"
          content="Expert guide to Azamara Alaska Cruises. Smaller ships, longer port stays, and deeper access to Alaska's Inside Passage, glaciers, and wildlife. Designed by a luxury travel advisor."
        />
        <meta
          name="keywords"
          content="Azamara Alaska cruises, Alaska small ship cruise, Inside Passage, Glacier Bay, Azamara Alaska itinerary, luxury Alaska cruise"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="preload" as="image" href={heroImages[0]} />
      </Helmet>

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="AzaAlaska-hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`AzaAlaska-hero-bg ${index === currentHero ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="AzaAlaska-hero-overlay"></div>
        <div className="AzaAlaska-inner AzaAlaska-hero-inner">
          <h1 className="AzaAlaska-h1">
            Azamara Alaska Cruises
            <br />
            Small Ship Luxury
            <br />
            in Alaska
          </h1>
          <p className="AzaAlaska-hero-sub">
            Most Alaska cruises are built for volume. Azamara is built for
            experience.
          </p>
        </div>
      </section>

      {/* ── OPENING STATEMENT ──────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-soft">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-opening-layout">
            <div className="AzaAlaska-opening-left">
              <h2 className="AzaAlaska-h2">
                Most Alaska Cruises Look Impressive.
                <br />
                Very Few Are Designed Well.
              </h2>
              <div
                className="AzaAlaska-bar AzaAlaska-bar-left1"
              ></div>
            </div>
            <div className="AzaAlaska-opening-right">
              <p className="AzaAlaska-p">
                Most Alaska cruises are built for volume. Big ships. Tight
                schedules. Quick port stops. You see Alaska… but you don't
                really experience it.
              </p>
              <p className="AzaAlaska-p">
                Azamara does it differently. Smaller ships. Longer stays. Better
                access. And a pace that actually allows Alaska to unfold the way
                it should.
              </p>
              <p className="AzaAlaska-p AzaAlaska-p-bold">
                If you're going to invest in Alaska, this is where you start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST THIS GUIDE ───────────────────────────────────────── */}
      {/* ── EXPERT PROFILE: WHY TRUST THIS GUIDE & ABOUT ANGELA ───────────────── */}
      <section className="AzaAlaska-section AzaAlaska-about-section">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-about-layout">
            <div className="AzaAlaska-about-img-col">
              <div className="AzaAlaska-about-img-wrap">
                <img
                  src={profilePicture}
                  alt="Angela Hughes"
                  className="AzaAlaska-about-img"
                />
              </div>
              <div className="AzaAlaska-about-awards">
                <div className="AzaAlaska-about-award-item">
                  <Star size={16} strokeWidth={1.5} />
                  <span>
                    Luxury Travel Influencer of the Year · Travel Leaders
                    Network
                  </span>
                </div>
                <div className="AzaAlaska-about-award-item">
                  <Star size={16} strokeWidth={1.5} />
                  <span>TravelPulse Most Influential Women in Travel 2026</span>
                </div>
                <div className="AzaAlaska-about-award-item">
                  <Star size={16} strokeWidth={1.5} />
                  <span>Travel Weekly Magellan Awards</span>
                </div>
              </div>
            </div>

            <div className="AzaAlaska-about-content">
              <span className="AzaAlaska-about-eyebrow">
                Why Trust This Guide
              </span>
              <h2 className="AzaAlaska-h2">Angela Hughes</h2>
              <p className="AzaAlaska-about-role">
                CEO, Trips &amp; Ships Luxury Travel · Founder, Luxury Travel
                University
              </p>

              <div
                className="AzaAlaska-trust-stats"
                style={{ marginBottom: "32px" }}
              >
                <div className="AzaAlaska-trust-stat">
                  <span className="AzaAlaska-trust-stat-number">40+</span>
                  <span className="AzaAlaska-trust-stat-label">
                    Years in Travel
                  </span>
                </div>
                <div className="AzaAlaska-trust-stat">
                  <span className="AzaAlaska-trust-stat-number">121+</span>
                  <span className="AzaAlaska-trust-stat-label">
                    Countries Visited
                  </span>
                </div>
                <div className="AzaAlaska-trust-stat">
                  <span className="AzaAlaska-trust-stat-number">100+</span>
                  <span className="AzaAlaska-trust-stat-label">
                    Luxury Advisors
                  </span>
                </div>
              </div>

              <p className="AzaAlaska-p">
                I've spent over 40 years in the travel industry and traveled to
                121+ countries. I've built a multi-million dollar luxury travel
                business and personally design Alaska itineraries for clients
                who expect more than a standard cruise experience.
              </p>
              <p className="AzaAlaska-p">
                Alaska is one of the most misunderstood destinations in
                cruising. And most travelers get it wrong before they even book.
              </p>

              <div
                className="AzaAlaska-about-divider"
                style={{
                  height: "1px",
                  background: "rgba(39, 68, 114, 0.1)",
                  margin: "40px 0",
                }}
              ></div>

              <p className="AzaAlaska-p">
                Angela Hughes is not just a travel advisor—she is one of the
                most recognized voices in the luxury travel industry today.
              </p>
              <p className="AzaAlaska-p">
                With over 40 years of experience and travel spanning 121+
                countries, Angela has built a career around one core principle:
                travel should be designed, not just booked.
              </p>
              <p className="AzaAlaska-p">
                As the CEO of Trips &amp; Ships Luxury Travel, she leads a
                global network of over 100 luxury travel advisors, specializing
                in high-end cruises, safaris, expeditions, and bespoke
                itineraries. She is also the founder of Luxury Travel
                University, where she trains and mentors advisors and industry
                professionals on how to elevate their business and deliver
                exceptional client experiences.
              </p>
              <p className="AzaAlaska-p">
                Angela’s expertise has been recognized across the industry. She
                was named Luxury Travel Influencer of the Year by Travel Leaders
                Network and has been featured in leading publications including
                Travel Weekly, TravelPulse, Insider Travel Report, and more.
              </p>

              <div className="AzaAlaska-about-thinking-wrap">
                <p
                  className="AzaAlaska-p-bold"
                  style={{ margin: "32px 0 12px" }}
                >
                  But what truly sets her apart is not the accolades—it is how
                  she thinks about travel.
                </p>
                <p className="AzaAlaska-p">
                  Angela approaches destinations like Alaska with a strategic
                  lens:
                </p>

                <div className="AzaAlaska-about-strategy-grid">
                  <div className="AzaAlaska-about-strategy-box">
                    <CheckCircle size={18} />
                    <span>
                      Understanding that not all itineraries are equal
                    </span>
                  </div>
                  <div className="AzaAlaska-about-strategy-box">
                    <CheckCircle size={18} />
                    <span>
                      Knowing which ships truly deliver the experience clients
                      expect
                    </span>
                  </div>
                  <div className="AzaAlaska-about-strategy-box">
                    <CheckCircle size={18} />
                    <span>
                      Designing trips that extend beyond the cruise itself
                    </span>
                  </div>
                </div>
              </div>

              <p className="AzaAlaska-p" style={{ marginTop: "24px" }}>
                She has worked extensively with cruise lines across every
                category—from premium to ultra-luxury—and brings that
                comparative insight into every recommendation she makes.
              </p>

              <div className="AzaAlaska-about-access-box">
                <p className="AzaAlaska-about-access-title">
                  When clients work with Angela and her team, they are not just
                  choosing a cruise. They are gaining access to:
                </p>
                <ul className="AzaAlaska-about-access-list">
                  <li>
                    <ChevronRight size={16} />
                    <span>Insider knowledge that avoids costly mistakes</span>
                  </li>
                  <li>
                    <ChevronRight size={16} />
                    <span>
                      Strategic itinerary design tailored to how they travel
                    </span>
                  </li>
                  <li>
                    <ChevronRight size={16} />
                    <span>Exclusive partnerships and elevated experiences</span>
                  </li>
                </ul>
              </div>

              <p className="AzaAlaska-p">
                Alaska, in particular, is a destination where her expertise
                matters.
              </p>

              <p className="AzaAlaska-p AzaAlaska-p-italic">
                Because the difference between a good Alaska trip and an
                unforgettable one is almost always determined before the journey
                even begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES AZAMARA DIFFERENT IN ALASKA ─────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-soft">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-diff-header">
            <h2 className="AzaAlaska-h2" style={{ textAlign: "center" }}>
              What Makes Azamara Different in Alaska
            </h2>
            <div className="AzaAlaska-bar AzaAlaska-bar-center"></div>
          </div>

          <div className="AzaAlaska-diff-grid">
            {/* Card 1 */}
            <div className="AzaAlaska-diff-card">
              <div className="AzaAlaska-diff-icon">
                <Ship size={32} strokeWidth={1.5} />
              </div>
              <h3 className="AzaAlaska-h3">Small Ships That Get You Close</h3>
              <p className="AzaAlaska-p">
                Azamara ships are intentionally smaller. That means access to
                tighter fjords, closer glacier viewing, and docking in ports
                larger ships can't reach.
              </p>
              <ul className="AzaAlaska-diff-list">
                <li>
                  <ChevronRight size={16} />
                  <span>Access to tighter fjords</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>Closer glacier viewing</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>Ports larger ships can't reach</span>
                </li>
              </ul>
              <p className="AzaAlaska-diff-note">
                In regions like the Inside Passage, that changes the entire
                experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="AzaAlaska-diff-card">
              <div className="AzaAlaska-diff-icon">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="AzaAlaska-h3">Longer Port Stays and Overnights</h3>
              <p className="AzaAlaska-p">
                Most ships leave Alaska ports mid-afternoon. Azamara stays. You
                experience places after the crowds are gone — when Alaska feels
                real.
              </p>
              <ul className="AzaAlaska-diff-list">
                <li>
                  <ChevronRight size={16} />
                  <span>Sitka</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>Ketchikan</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>Juneau</span>
                </li>
              </ul>
              <p className="AzaAlaska-diff-note">
                That is when Alaska feels real.
              </p>
            </div>

            {/* Card 3 */}
            <div className="AzaAlaska-diff-card">
              <div className="AzaAlaska-diff-icon">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <h3 className="AzaAlaska-h3">
                Destination Immersion Over Onboard Distraction
              </h3>
              <p className="AzaAlaska-p">
                This is not a ship designed to entertain you. It's designed to
                connect you to where you are.
              </p>
              <ul className="AzaAlaska-diff-list">
                <li>
                  <ChevronRight size={16} />
                  <span>Fewer crowds</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>More time in port</span>
                </li>
                <li>
                  <ChevronRight size={16} />
                  <span>Curated experiences instead of generic excursions</span>
                </li>
              </ul>
              <p className="AzaAlaska-diff-note">
                Experience Alaska at a more deliberate, meaningful pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS AZAMARA ALASKA FOR ──────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-dark">
        <div className="AzaAlaska-bg-pattern"></div>
        <div className="AzaAlaska-overlay"></div>
        <div className="AzaAlaska-inner AzaAlaska-relative">
          <div className="AzaAlaska-fit-header">
            <h2 className="AzaAlaska-h2-white" style={{ textAlign: "center" }}>
              Who Azamara Alaska Is For
            </h2>
            <div className="AzaAlaska-bar-white AzaAlaska-bar-center"></div>
            <p
              className="AzaAlaska-p-white"
              style={{
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto 56px",
              }}
            >
              This is where most people make the wrong decision.
            </p>
          </div>

          <div className="AzaAlaska-fit-panels">
            {/* YES Panel */}
            <div className="AzaAlaska-fit-panel AzaAlaska-fit-yes">
              <div className="AzaAlaska-fit-panel-header">
                <h3 className="AzaAlaska-fit-panel-title">
                  This Is For You If:
                </h3>
              </div>
              <ul className="AzaAlaska-fit-list">
                <li>
                  <span>You've already traveled extensively</span>
                </li>
                <li>
                  <span>You prefer boutique hotels over big resorts</span>
                </li>
                <li>
                  <span>You want depth, not just scenery</span>
                </li>
                <li>
                  <span>You care about time in destination</span>
                </li>
              </ul>
            </div>

            {/* NO Panel */}
            <div className="AzaAlaska-fit-panel AzaAlaska-fit-no">
              <div className="AzaAlaska-fit-panel-header">
                <h3 className="AzaAlaska-fit-panel-title">
                  This Is NOT For You If:
                </h3>
              </div>
              <ul className="AzaAlaska-fit-list">
                <li>
                  <span>
                    You want water slides, casinos, and big production shows
                  </span>
                </li>
                <li>
                  <span>You're traveling primarily with young kids</span>
                </li>
                <li>
                  <span>You're comparing purely on price</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOULD YOU CHOOSE AZAMARA ──────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-white">
        <div className="AzaAlaska-inner">
          <div style={{ textAlign: "center" }}>
            <h2 className="AzaAlaska-h2">
              Should You Choose Azamara for Alaska?
            </h2>
            <div
              className="AzaAlaska-bar AzaAlaska-bar-center"
              style={{ margin: "0 auto 56px" }}
            ></div>
          </div>

          <div className="AzaAlaska-choose-grid">
            {/* YES Card */}
            <div className="AzaAlaska-choose-card">
              <div className="AzaAlaska-choose-img-wrap">
                <img src={chooseImg1} alt="Small Ship Alaska" />
                <div className="AzaAlaska-choose-badge AzaAlaska-badge-yes">
                  <CheckCircle size={14} fill="currentColor" /> Recommended
                </div>
              </div>
              <div className="AzaAlaska-choose-content">
                <h3 className="AzaAlaska-h3">Choose Azamara If:</h3>
                <ul className="AzaAlaska-choose-list">
                  <li>
                    <CheckCircle size={18} strokeWidth={1.5} />
                    <span>You want longer port stays</span>
                  </li>
                  <li>
                    <CheckCircle size={18} strokeWidth={1.5} />
                    <span>You value access over amenities</span>
                  </li>
                  <li>
                    <CheckCircle size={18} strokeWidth={1.5} />
                    <span>You prefer smaller ships</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* NO Card */}
            <div className="AzaAlaska-choose-card">
              <div className="AzaAlaska-choose-img-wrap">
                <img src={chooseImg2} alt="Alaska Exploration" />
                <div className="AzaAlaska-choose-badge AzaAlaska-badge-no">
                  <XCircle size={14} fill="currentColor" /> Consider Carefully
                </div>
              </div>
              <div className="AzaAlaska-choose-content">
                <h3 className="AzaAlaska-h3">Do NOT Choose Azamara If:</h3>
                <ul className="AzaAlaska-choose-list">
                  <li>
                    <XCircle size={18} strokeWidth={1.5} />
                    <span>
                      You want guaranteed glacier-specific itineraries every
                      time
                    </span>
                  </li>
                  <li>
                    <XCircle size={18} strokeWidth={1.5} />
                    <span>You prioritize onboard entertainment</span>
                  </li>
                  <li>
                    <XCircle size={18} strokeWidth={1.5} />
                    <span>You are looking for the lowest price option</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-soft">
        <div className="AzaAlaska-inner">
          <div style={{ textAlign: "center" }}>
            <h2 className="AzaAlaska-h2">
              Azamara vs Other Alaska Cruise Lines
            </h2>
            <div
              className="AzaAlaska-bar AzaAlaska-bar-center"
              style={{ margin: "0 auto 48px" }}
            ></div>
          </div>
          <div className="AzaAlaska-table-container">
            <table className="AzaAlaska-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="AzaAlaska-col-highlight">Azamara</th>
                  <th>Viking Cruises</th>
                  <th>Princess Cruises</th>
                  <th>Seabourn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ship Size</td>
                  <td className="AzaAlaska-col-highlight">Small</td>
                  <td>Small</td>
                  <td>Large</td>
                  <td>Small</td>
                </tr>
                <tr>
                  <td>Port Time</td>
                  <td className="AzaAlaska-col-highlight">Long</td>
                  <td>Long</td>
                  <td>Short</td>
                  <td>Long</td>
                </tr>
                <tr>
                  <td>Atmosphere</td>
                  <td className="AzaAlaska-col-highlight">Boutique</td>
                  <td>Quiet Luxury</td>
                  <td>Mass Market</td>
                  <td>Ultra Luxury</td>
                </tr>
                <tr>
                  <td>Pricing</td>
                  <td className="AzaAlaska-col-highlight">Mid-Luxury</td>
                  <td>Premium</td>
                  <td>Mid-Market</td>
                  <td>High Luxury</td>
                </tr>
                <tr>
                  <td>Experience</td>
                  <td className="AzaAlaska-col-highlight">Immersive</td>
                  <td>Cultural</td>
                  <td>Entertainment</td>
                  <td>All-Inclusive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BEST ITINERARIES ───────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-white">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-itin-layout">
            <div className="AzaAlaska-itin-sticky">
              <h2 className="AzaAlaska-h2">Best Azamara Alaska Itineraries</h2>
              <div className="AzaAlaska-bar AzaAlaska-bar-left"></div>
              <p className="AzaAlaska-p AzaAlaska-subtitle">
                Typical routes and key highlights that define the Alaska
                experience.
              </p>
            </div>

            <div className="AzaAlaska-itin-list">
              <div className="AzaAlaska-itin-card">
                <span className="AzaAlaska-itin-number">01</span>
                <div className="AzaAlaska-itin-content">
                  <h3 className="AzaAlaska-h3">Vancouver to Whittier</h3>
                  <p className="AzaAlaska-p">
                    A classic Alaska passage sailing north through the Inside
                    Passage with glacier access and wildlife-rich Southeast
                    Alaska.
                  </p>
                </div>
                <div className="AzaAlaska-itin-arrow">
                  <ChevronRight size={24} />
                </div>
              </div>

              <div className="AzaAlaska-itin-card">
                <span className="AzaAlaska-itin-number">02</span>
                <div className="AzaAlaska-itin-content">
                  <h3 className="AzaAlaska-h3">Seattle Roundtrip Sailings</h3>
                  <p className="AzaAlaska-p">
                    Convenient departures from Seattle with access to key Alaska
                    highlights including Skagway and the Inside Passage.
                  </p>
                </div>
                <div className="AzaAlaska-itin-arrow">
                  <ChevronRight size={24} />
                </div>
              </div>

              <div className="AzaAlaska-itin-card">
                <span className="AzaAlaska-itin-number">03</span>
                <div className="AzaAlaska-itin-content">
                  <h3 className="AzaAlaska-h3">Glacier Bay National Park</h3>
                  <p className="AzaAlaska-p">
                    Select itineraries include glacier regions. Not all include
                    Glacier Bay specifically — choosing the right itinerary is
                    critical.
                  </p>
                </div>
                <div className="AzaAlaska-itin-arrow">
                  <ChevronRight size={24} />
                </div>
              </div>

              <div className="AzaAlaska-itin-card">
                <span className="AzaAlaska-itin-number">04</span>
                <div className="AzaAlaska-itin-content">
                  <h3 className="AzaAlaska-h3">
                    Wildlife-Rich Southeast Alaska
                  </h3>
                  <p className="AzaAlaska-p">
                    Skagway, Sitka, Ketchikan, and Juneau — experienced after
                    the crowds leave, the way Alaska was meant to be seen.
                  </p>
                </div>
                <div className="AzaAlaska-itin-arrow">
                  <ChevronRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I TELL MY CLIENTS ─────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-soft">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-clients-wrapper">
            <div className="AzaAlaska-clients-header">
              <h2 className="AzaAlaska-h2">
                What I Tell My Clients About Alaska Cruises
              </h2>
              <div className="AzaAlaska-bar AzaAlaska-bar-left"></div>
              <p className="AzaAlaska-p">
                Alaska is not a cruise you "plug and play." It needs to be
                designed.
              </p>
            </div>
            <div className="AzaAlaska-clients-mistakes">
              <p className="AzaAlaska-clients-subtitle">
                This is where most people go wrong:
              </p>
              <div className="AzaAlaska-clients-mistake-grid">
                <div className="AzaAlaska-clients-mistake-item">
                  <div className="AzaAlaska-clients-mistake-icon">
                    <Star size={22} strokeWidth={1.5} />
                  </div>
                  <p>Not all Alaska itineraries are equal</p>
                </div>
                <div className="AzaAlaska-clients-mistake-item">
                  <div className="AzaAlaska-clients-mistake-icon">
                    <Mountain size={22} strokeWidth={1.5} />
                  </div>
                  <p>Glacier viewing is often misunderstood</p>
                </div>
                <div className="AzaAlaska-clients-mistake-item">
                  <div className="AzaAlaska-clients-mistake-icon">
                    <Clock size={22} strokeWidth={1.5} />
                  </div>
                  <p>Port time matters more than ship size</p>
                </div>
                <div className="AzaAlaska-clients-mistake-item">
                  <div className="AzaAlaska-clients-mistake-icon">
                    <ArrowRight size={22} strokeWidth={1.5} />
                  </div>
                  <p>Air routing can make or break your trip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ANGELA ───────────────────────────────────────────────── */}


      {/* ── EXTEND YOUR CRUISE ─────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-dark">
        <div className="AzaAlaska-bg-pattern"></div>
        <div className="AzaAlaska-overlay"></div>
        <div className="AzaAlaska-inner AzaAlaska-relative">
          <div className="AzaAlaska-extend-header-centered">
            <h2 className="AzaAlaska-h2-white">
              How to Extend Your Azamara Alaska Cruise
            </h2>
            <div className="AzaAlaska-bar-white AzaAlaska-bar-center"></div>
            <p className="AzaAlaska-p-white">
              This is where the trip becomes exceptional. Most travelers skip
              this. They shouldn't.
            </p>
          </div>

          <div className="AzaAlaska-extend-grid">
            <div className="AzaAlaska-extend-card">
              <div className="AzaAlaska-extend-img-wrap">
                <img src={extendImg1} alt="Vancouver" />
              </div>
              <div className="AzaAlaska-extend-content">
                <h3 className="AzaAlaska-extend-card-title">
                  Vancouver Pre-Cruise
                </h3>
                <p className="AzaAlaska-p-white">
                  2–3 nights in Vancouver before sailing sets the tone and
                  removes logistics pressure.
                </p>
              </div>
            </div>

            <div className="AzaAlaska-extend-card">
              <div className="AzaAlaska-extend-img-wrap">
                <img src={extendImg2} alt="Anchorage" />
              </div>
              <div className="AzaAlaska-extend-content">
                <h3 className="AzaAlaska-extend-card-title">
                  Anchorage Land Experience
                </h3>
                <p className="AzaAlaska-p-white">
                  Land experiences in Anchorage add depth that the cruise alone
                  cannot deliver.
                </p>
              </div>
            </div>

            <div className="AzaAlaska-extend-card">
              <div className="AzaAlaska-extend-img-wrap">
                <img src={extendImg3} alt="Wildlife" />
              </div>
              <div className="AzaAlaska-extend-content">
                <h3 className="AzaAlaska-extend-card-title">
                  Custom Wildlife Extensions
                </h3>
                <p className="AzaAlaska-p-white">
                  Custom wildlife or cultural extensions designed around how you
                  travel, not how ships depart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-white">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-pricing-layout">
            <div className="AzaAlaska-pricing-left">
              <h2 className="AzaAlaska-h2">Pricing: What to Expect</h2>
              <div className="AzaAlaska-bar AzaAlaska-bar-left"></div>
              <p className="AzaAlaska-p">
                Azamara sits in boutique luxury. You're paying for access, time,
                and experience — not excess.
              </p>
            </div>
            <div className="AzaAlaska-pricing-right">
              <div className="AzaAlaska-pricing-range">
                <div className="AzaAlaska-pricing-tag">
                  <div>
                    <span className="AzaAlaska-pricing-value">
                      $3,500 – $6,500
                    </span>
                    <span className="AzaAlaska-pricing-label">
                      per person · typical range
                    </span>
                  </div>
                </div>
                <p
                  className="AzaAlaska-p"
                  style={{ color: "#64748b", fontSize: "16px" }}
                >
                  Higher for suites and peak dates.
                </p>
              </div>
              <div className="AzaAlaska-pricing-includes">
                <p className="AzaAlaska-pricing-includes-title">
                  You're paying for:
                </p>
                <div className="AzaAlaska-pricing-includes-grid">
                  <div className="AzaAlaska-pricing-include-item">
                    <Compass size={20} strokeWidth={1.5} />
                    <span>Access</span>
                  </div>
                  <div className="AzaAlaska-pricing-include-item">
                    <Clock size={20} strokeWidth={1.5} />
                    <span>Time</span>
                  </div>
                  <div className="AzaAlaska-pricing-include-item">
                    <Sparkles size={20} strokeWidth={1.5} />
                    <span>Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-soft">
        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-faq-header">
            <h2 className="AzaAlaska-h2" style={{ textAlign: "center" }}>
              Azamara Alaska Cruises — FAQs
            </h2>
            <div
              className="AzaAlaska-bar AzaAlaska-bar-center"
              style={{ margin: "0 auto 40px" }}
            ></div>
          </div>
          <div className="AzaAlaska-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`AzaAlaska-faq-item ${isOpen ? "AzaAlaska-faq-open" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="AzaAlaska-faq-q">
                    <span>{faq.question}</span>
                    <span className="AzaAlaska-faq-icon">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </div>
                  {isOpen && (
                    <div className="AzaAlaska-faq-a">
                      <div className="AzaAlaska-faq-a-inner">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PLAN YOUR CRUISE (CTA) ─────────────────────────────────────── */}
      <section className="AzaAlaska-cta-section">
        <div className="AzaAlaska-cta-bg-wrap">
          <img
            src={heroImage1}
            alt="Alaska Cruise Background"
            className="AzaAlaska-cta-bg-img"
          />
          <div className="AzaAlaska-cta-overlay"></div>
        </div>

        <div className="AzaAlaska-inner">
          <div className="AzaAlaska-cta-card">
            <div className="AzaAlaska-cta-content">
              <div className="AzaAlaska-cta-header">
                <span className="AzaAlaska-cta-eyebrow">
                  Personalized Planning
                </span>
                <h2 className="AzaAlaska-h2-white">
                  Plan Your Azamara Alaska Cruise
                </h2>
                <div className="AzaAlaska-bar-white AzaAlaska-bar-center"></div>
                <p className="AzaAlaska-p-white">
                  If you are considering Alaska, I will tell you very quickly
                  whether Azamara is the right fit — or not. That is where the
                  value is. Not just booking the cruise. Designing the
                  experience around it.
                </p>
              </div>

              <div className="AzaAlaska-cta-grid">
                <div className="AzaAlaska-cta-info">
                  <div className="AzaAlaska-cta-steps-v2">
                    <div className="AzaAlaska-cta-step-v2">
                      <div className="AzaAlaska-cta-step-icon-v2">
                        <MapPin size={20} />
                      </div>
                      <div className="AzaAlaska-cta-step-text-v2">
                        <h3 className="AzaAlaska-cta-step-title-v2">
                          Match Itinerary
                        </h3>
                        <p className="AzaAlaska-cta-step-desc-v2">
                          Match you with the right Alaska itinerary
                        </p>
                      </div>
                    </div>

                    <div className="AzaAlaska-cta-step-v2">
                      <div className="AzaAlaska-cta-step-icon-v2">
                        <Star size={20} />
                      </div>
                      <div className="AzaAlaska-cta-step-text-v2">
                        <h3 className="AzaAlaska-cta-step-title-v2">
                          Design Extensions
                        </h3>
                        <p className="AzaAlaska-cta-step-desc-v2">
                          Plan pre and post-cruise stays in Vancouver or
                          Anchorage
                        </p>
                      </div>
                    </div>

                    <div className="AzaAlaska-cta-step-v2">
                      <div className="AzaAlaska-cta-step-icon-v2">
                        <Sparkles size={20} />
                      </div>
                      <div className="AzaAlaska-cta-step-text-v2">
                        <h3 className="AzaAlaska-cta-step-title-v2">
                          Elevate Experience
                        </h3>
                        <p className="AzaAlaska-cta-step-desc-v2">
                          Maximize the value of every day in Alaska
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="AzaAlaska-cta-action-v2">
                  <div className="AzaAlaska-cta-btn-wrap">
                    <button className="AzaAlaska-btn-cta-v2">
                      Start Planning With An Expert
                      <ArrowRight size={20} />
                    </button>
                  </div>
                  <p className="AzaAlaska-cta-note">
                    Get personalized expert advice for your Alaska voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL THOUGHT ──────────────────────────────────────────────── */}
      <section className="AzaAlaska-section AzaAlaska-bg-dark">
        <div className="AzaAlaska-bg-pattern"></div>
        <div className="AzaAlaska-overlay"></div>
        <div className="AzaAlaska-inner AzaAlaska-relative AzaAlaska-final-inner">
          <Snowflake
            size={40}
            strokeWidth={1}
            className="AzaAlaska-final-icon"
          />
          <h2 className="AzaAlaska-h2-white" style={{ textAlign: "center" }}>
            Final Thought
          </h2>
          <div
            className="AzaAlaska-bar-white AzaAlaska-bar-center"
            style={{ margin: "0 auto 32px" }}
          ></div>
          <p className="AzaAlaska-final-quote">
            Alaska is one of the last places in the world that still feels
            untouched.
            <br />
            How you experience it matters.
          </p>
        </div>
      </section>
    </>
  );
}

export default AzamaraAlaskaCruises;
