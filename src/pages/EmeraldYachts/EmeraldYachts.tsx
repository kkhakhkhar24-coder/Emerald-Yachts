
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import {
  Quote,
  Play,
  MapPin,
  Sun,
  Clock,
  Ship,
  Plane,
} from "lucide-react";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import HighlightsSplit from "@/components/ui/HighlightsSplit";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import PricingTiersCards from "@/components/ui/PricingTiersCards";
import VideoEmbed from "@/components/ui/VideoEmbed";
import HierarchicalGrid from "@/components/ui/HierarchicalGrid";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Asset Images
import myImage from "../../assets/image.webp";
import Hero1 from "../../assets/HomePage/HomePage1.webp";
import Hero3 from "../../assets/HomePage/HomePage3.webp";
import Hero4 from "../../assets/HomePage/HomePage4.webp";
import HomePage2 from "../../assets/HomePage/HomePage2.webp";
import Logo1 from "../../assets/HomePage/Logo1.png";
import Logo2 from "../../assets/HomePage/Logo2.png";
import Logo3 from "../../assets/HomePage/Logo3.png";
import Logo4 from "../../assets/HomePage/Logo4.webp";
import Logo5 from "../../assets/HomePage/Logo5.png";
import Logo6 from "../../assets/HomePage/Logo6.png";
import Logo7 from "../../assets/HomePage/Logo7.png";
import EmeraldAzzurraVsEmeraldSakara1 from "../../assets/HomePage/EmeraldAzzurraVsEmeraldSakara1.webp";
import EmeraldAzzurraVsEmeraldSakara2 from "../../assets/HomePage/EmeraldAzzurraVsEmeraldSakara2.webp";
import EmeraldAzzurraVsEmeraldSakara3 from "../../assets/HomePage/EmeraldAzzurraVsEmeraldSakara3.webp";
import Coastal_Cruising from "../../assets/HomePage/Coastal_Cruising.jpeg";
import Refined_Luxury from "../../assets/HomePage/Refined_Luxury.jpeg";
import Curated_Journeys from "../../assets/HomePage/Curated_Journeys.jpeg";

const LuxuryPage = () => {
  // 1. Map slides for PremiumIntro
  const introSections = [
    {
      heading: "Boutique Cruising at Sea",
      paragraphs: pageData.hero.readMoreParagraphs,
    },
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.description],
    },
  ];

  // 2. Map real experience tabs for HighlightsSplit
  const realExperienceItems = [
    {
      title: pageData.experience.title,
      description: pageData.experience.description,
      image: HomePage2,
      icon: "Compass",
    },
    {
      title: pageData.team.title,
      description: pageData.team.description,
      bulletPoints: pageData.team.highlights,
      image: myImage,
      icon: "Sparkles",
    },
  ];

  // 3. Media Brands for As Seen In
  const brands = [
    { name: "The Washington Post", logo: Logo1 },
    { name: "Travel Weekly", logo: Logo2 },
    { name: "TravelPulse", logo: Logo3 },
    { name: "Insider Travel Report", logo: Logo4 },
    { name: "Travel Market Report", logo: Logo5 },
    { name: "Travel Leaders Network", logo: Logo6 },
    { name: "The Wall Street Journal", logo: Logo7 },
  ];

  // 4. Map Suitability to CostValueAnalysisCards format
  const idealListMapped = pageData.suitability.idealList.map((item, idx) => {
    const titleList = [
      "Warm-Weather Focus",
      "Intimate Environment",
      "Scenic Port Access",
      "Effortless Lifestyle",
    ];
    const descList = [
      "Designed for travelers who want sun, coastal access, and relaxed cruising.",
      "Boutique ship size creates an easy, social atmosphere at sea.",
      "Smaller yachts navigate shallow waters and smaller, intimate coastal ports.",
      "A lighter pace focused on leisure and casual onboard elegance.",
    ];
    return {
      title: titleList[idx] || item,
      description: descList[idx] || "Boutique yacht style value point.",
    };
  });

  const suitabilityNotIdeal = [
    {
      title: "Alternative Travel Styles",
      description: pageData.suitability.notIdealText,
    },
  ];

  // 5. Map Considerations to BrandPillarsShowcase
  const considerationsData = {
    title: pageData.considerations.title,
    subtitle: pageData.considerations.subtitle,
    pillars: pageData.considerations.cards.map((card, idx) => {
      const descList = [
        "Analyzing routes, port counts, and coastal navigation patterns.",
        "Aligning travel months with dry, sunny periods for best deck relaxation.",
        "Choosing schedules with late-night stays and minimal ocean crossings.",
        "Ensuring boutique social dynamics match your desired travel style.",
        "Planning airport connections, hotels, and tarmac transfers.",
      ];
      return {
        title: card.title,
        description: descList[idx] || "Essential yacht planning metric.",
        icon: card.icon.toLowerCase(),
      };
    }),
  };

  // 6. Map Showcase to ThreeColumnGrid
  const showcaseItems = pageData.showcase.cards.map((card, idx) => {
    const imgList = [Coastal_Cruising, Refined_Luxury, Curated_Journeys];
    return {
      title: card.title,
      description: card.description,
      image: imgList[idx] || Coastal_Cruising,
      placeholderLabel: card.badge,
    };
  });

  // 7. Map planning steps to InteractivePlanningRoadmap
  const roadmapSteps = pageData.method.steps.map((step, idx) => {
    const descList = [
      "Aligning your vacation goals and preferences with the boutique yacht style.",
      "Selecting the ideal sailing region, climate, and port entry strategy.",
      "Balancing time spent exploring historic ports with leisure hours at sea.",
      "Securing the perfect suite category and location on board for ultimate rest.",
      "Coordinating private transfers, flights, pre/post hotels, and VIP shore excursions.",
    ];
    const imgList = [
      Coastal_Cruising,
      Refined_Luxury,
      Curated_Journeys,
      EmeraldAzzurraVsEmeraldSakara1,
      EmeraldAzzurraVsEmeraldSakara2,
    ];
    return {
      timeframe: `Step 0${idx + 1}`,
      title: step,
      description: descList[idx] || "Yacht planning pathway stage.",
      image: imgList[idx] || Coastal_Cruising,
    };
  });

  // 8. Map Cost items to PricingTiersCards format
  const pricingItems = pageData.cost.items.map((item, idx) => {
    const descList = [
      "Boutique yacht cruising designed with intimate spaces and relaxed pacing.",
      "Immersive warmer-weather voyages spanning scenic coastal ports.",
    ];
    return {
      name: item.label,
      price: item.price,
      description: descList[idx] || "Boutique cruise investment details.",
      nights: idx === 0 ? "Short Routes" : "Standard Routes",
    };
  });

  // 9. Map Gallery to HierarchicalGrid
  const galleryItems = pageData.gallery.items.map((item, idx) => {
    const imgList = [
      EmeraldAzzurraVsEmeraldSakara2,
      EmeraldAzzurraVsEmeraldSakara3,
      EmeraldAzzurraVsEmeraldSakara1,
    ];
    return {
      title: item.title,
      description: item.description,
      image: imgList[idx] || EmeraldAzzurraVsEmeraldSakara2,
    };
  });

  // 10. Map Navbar sub-links to InteractivePillarHubGrid Curated Guides
  const curatedGuides = [
    {
      title: "Emerald Yachts",
      category: "Boutique Ocean Cruise Fleet",
      description: "Complete guide to Emerald Yachts — the boutique ocean cruise fleet from Emerald Cruises.",
      image: Coastal_Cruising,
      links: [
        { label: "Emerald Yachts Guide", url: "/emerald-yachts" }
      ],
      mainUrl: "/emerald-yachts",
    },
    {
      title: "Emerald Azzurra vs Emerald Sakara",
      category: "Boutique Sister Yachts",
      description: "Comparing the two Emerald ocean yachts — which ship is right for your voyage?",
      image: EmeraldAzzurraVsEmeraldSakara3,
      links: [
        { label: "Emerald Azzurra vs Emerald Sakara", url: "/emerald-azzurra-vs-emerald-sakara" },
      ],
      mainUrl: "/emerald-azzurra-vs-emerald-sakara",
    },
    {
      title: "Emerald Yachts vs Ritz-Carlton Yacht",
      category: "Luxury Yacht Faceoff",
      description: "Emerald Yachts vs the Ritz-Carlton Yacht Collection — luxury at sea compared.",
      image: EmeraldAzzurraVsEmeraldSakara2,
      links: [
        { label: "Emerald Yachts vs Ritz-Carlton Yacht", url: "/emerald-yachts-vs-ritz-carlton-yacht-collection" },
      ],
      mainUrl: "/emerald-yachts-vs-ritz-carlton-yacht-collection",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
              },
              {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO & Founder",
                "worksFor": {
                  "@id": "https://www.tripsandships.com/#organization",
                },
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tripsandships.com",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Yachts",
                    "item": "https://www.tripsandships.com/emerald-yachts",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Emerald Yachts",
                    "item": "https://www.tripsandships.com/emerald-yachts",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/emerald-yachts",
                "name": "Emerald Yachts",
                "url": "https://www.tripsandships.com/emerald-yachts",
              },
              {
                "@type": "FAQPage",
                "mainEntity": pageData.faqs.questions.slice(0, 2).map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                  },
                })),
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* ─── SECTION 1: Hero ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={Hero1}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro (Intro & Read-more) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={Hero3}
        image2={HomePage2}
        watermarkText="Boutique"
      />

      {/* ─── SECTION 3: HighlightsSplit (Real Experience & Team) ─── */}
      <HighlightsSplit
        title="Experience & Specialized Travel Advisors"
        items={realExperienceItems}
      />

      {/* ─── SECTION 4: Logo Slider (Industry Recognition) ─── */}
      <section className="py-16 bg-white overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-navy-950 mb-4">{pageData.recognition.title}</h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            {pageData.recognition.subtitle}
          </p>

          <div className="relative w-full overflow-hidden h-20 flex items-center">
            <div className="flex w-max space-x-12 animate-marquee-slider">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <div key={i} className="flex items-center space-x-4 bg-ice-50 px-6 py-3 rounded-xl border border-ice-100/60 shadow-sm shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="font-sans text-xs font-semibold text-navy-900">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 font-sans text-xs text-slate-400 italic flex items-center justify-center gap-2">
            <Quote size={12} className="text-gold-500 shrink-0" />
            {pageData.recognition.inquiryCaption}
          </p>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-slider {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee-slider {
            animation: marquee-slider 30s linear infinite;
          }
        `}} />
      </section>

      {/* ─── SECTION 5: Suitability (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.suitability.title}
        subtitle="Aligning your vacation preferences with Scenic Group's boutique fleet."
        includedTitle={pageData.suitability.idealTitle}
        extrasTitle={pageData.suitability.notIdealTitle}
        included={idealListMapped}
        extras={suitabilityNotIdeal}
      />

      {/* ─── SECTION 6: Considerations (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase
        data={considerationsData}
      />

      {/* ─── SECTION 7: Showcase (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.showcase.title}
        subtitle="Relaxed warm-weather lifestyles navigation intimate bays."
        items={showcaseItems}
      />

      {/* ─── SECTION 8: Method Steps (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.method.title}
        subtitle="A structured, high-touch consultation framework led by Angela Hughes."
        steps={roadmapSteps}
      />

      {/* ─── SECTION 9: Pricing Tiers (PricingTiersCards) ─── */}
      <PricingTiersCards
        title={pageData.cost.title}
        subtitle="ESTIMATED CRUISE FARES"
        items={pricingItems}
        theme="light"
      />

      {/* ─── SECTION 10: YouTube Video Showcase ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2 block">
            {pageData.video.title.toUpperCase()}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
            {pageData.video.title}
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            {pageData.video.subtitle}
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white p-2">
            <VideoEmbed
              youtubeId={pageData.video.youtubeId}
              title="Experience Emerald Yachts boutique ocean cruising"
            />
          </div>
          <p className="mt-6 font-sans text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gold-500 mr-2">{pageData.video.captionTag}</strong>
            {pageData.video.captionText}
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: Gallery Masonry (HierarchicalGrid) ─── */}
      <HierarchicalGrid
        title={pageData.gallery.title}
        subtitle={pageData.gallery.subtitle}
        items={galleryItems}
      />

      {/* ─── SECTION 12: Expert Credentials plaque (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expert.name}
        title={pageData.expert.role}
        bio={`${pageData.expert.description1} ${pageData.expert.description2}`}
        image={myImage}
        badge="BOUTIQUE YACHTING SPECIALIST"
        experienceBadge="40+ YEARS LEGACY EXPERTISE"
        credentials={[
          "Named Luxury Travel Influencer of the Year by Travel Leaders Network",
          "Recognized among Most Influential Women in Travel by TravelPulse",
          "Over 4 Decades Designing Bespoke Yacht & Luxury Voyages",
          "Featured in WSJ, Travel Weekly, and The Washington Post",
          "Advisors trained through Luxury Travel University",
        ]}
      />

      {/* ─── SECTION 13: FAQ Accordion (FAQAccordion) ─── */}
      <FAQAccordion
        data={pageData.faqs}
      />

      {/* ─── SECTION 14: Curated Guides Hub (Navbar Sub-Pages) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Emerald Yachts Guides & Comparisons"
          subtitle="Hover over any card below to slide open the guide drawer, access direct comparisons, and learn destination planning strategies."
          items={curatedGuides}
          variant="destination"
        />
      </div>

      {/* ═══════════════ SEO TEXT-TO-HTML RATIO OPTIMIZER ═══════════════ */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-serif font-light mb-6 text-brand-navy leading-tight">
            Boutique Ocean Yachting &amp; Superyacht Expeditions with Emerald Cruises
          </h3>
          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-slate-700">
            <p>
              Emerald Cruises has revolutionized small-ship ocean luxury by expanding beyond its award-winning river fleet with state-of-the-art superyachts: Emerald Azzurra and Emerald Sakara. Hosting just 100 guests per voyage across 50 custom-designed suites and staterooms, these boutique yachts deliver an intimate, private-yacht atmosphere designed to dock directly in historic harbors, hidden coves, and glamorous yachting ports across the Mediterranean, Adriatic, Red Sea, and Caribbean.
            </p>
            <p>
              Onboard facilities are designed for ultimate relaxation and water sports access. Each yacht features a marina platform at the stern, enabling guests to swim directly into the sea or launch SEABOBs, paddleboards, and snorkeling equipment. The top deck boasts an infinity-style pool, open-air sun loungers, an Elements Spa wellness center, and sleek indoor-outdoor dining spaces serving fresh, locally sourced regional cuisine paired with complimentary wine and beer during meals.
            </p>
            <p>
              Cruising aboard Emerald Yachts offers the flexibility and informal luxury of private yachting, avoiding rigid dining schedules or crowded public areas. With an exceptional crew-to-guest ratio, passengers experience highly personalized service, guided EmeraldPLUS shore excursions, and exclusive cultural encounters in picturesque ports like Amalfi, Dubrovnik, St. Barts, and the Greek Isles.
            </p>
            <p>
              At Trips &amp; Ships Luxury Travel, Angela Hughes and our team of yacht advisors provide expert guidance on suite selection, full yacht charters, and pairing your Emerald Yacht voyage with private pre- or post-cruise luxury hotel stays. Contact our specialists today to plan your boutique superyacht escape.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 15: Center CTA ─── */}
      <CenterCTA
        title="Ready to Plan Your Emerald Yacht Cruise?"
        description="Connect with our boutique yacht experts to reserve your perfect itinerary and unlock exclusive VIP perks."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={Hero1}
      />




    </>
  );
};

export default LuxuryPage;
