import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import HighlightsSplit from "@/components/ui/HighlightsSplit";
// import RitzCasualExplorer from "@/components/ui/RitzCasualExplorer";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
// import RitzPackingWizard from "@/components/ui/RitzPackingWizard";
import InteractivePackingChecklist from "@/components/ui/InteractivePackingChecklist";
import DressShoeGuide from "@/components/ui/DressShoeGuide";
// import RitzDestinationSpecs from "@/components/ui/RitzDestinationSpecs";
import PricingTiersCards from "@/components/ui/PricingTiersCards";
import HierarchicalGrid from "@/components/ui/HierarchicalGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import CenterCTA from "@/components/ui/CenterCTA";

const RitzCarltonYachtCollectionDressCode = () => {
  // 1. Map slides for PremiumIntro (Hero & Quick Answer)
  const introSections = [
    {
      heading: "What Should You Wear on a Ritz-Carlton Yacht?",
      paragraphs: pageData.hero.readMoreParagraphs,
    },
    {
      heading: pageData.quickAnswer.title,
      paragraphs: [
        pageData.quickAnswer.description,
        "You do NOT need: A tuxedo, a formal gown, a tie, a dinner jacket, or traditional formal cruise wear.",
        "You SHOULD pack: Polished resort wear, linen shirts, lightweight trousers, dresses, skirts, blouses, smart-casual separates, elegant sandals, loafers, comfortable walking shoes, and elevated evening outfits.",
        "For dinner avoid: Shorts, ball caps, hats, flip-flops, swimwear, and sleeveless T-shirts.",
      ],
    },
  ];

  // 2. Map real experience tabs for HighlightsSplit (Yacht Casual vs Yacht Sophisticated)
  const dressCodeHighlights = [
    {
      title: "What Is Yacht Casual? (Daytime Standard)",
      description:
        "Daytime dress code. Think of what you would wear at an upscale luxury resort. Comfortable, polished, and resort-appropriate. You do not need to dress formally during the day.",
      bulletPoints: [
        "Women: Sundresses, linen dresses, skirts, lightweight trousers, linen pants, blouses, polished shorts, resort sets, polo shirts, stylish sandals, clean sneakers.",
        "Men: Polo shirts, linen shirts, button-downs, lightweight trousers, chinos, tailored resort shorts, linen pants, loafers, boat shoes, clean sneakers.",
        "Breakfast & Lunch: Relaxed resort wear. If heading into indoor dining venues, avoid showing up in swimwear.",
        "Pool & Marina: Swimsuit, cover-up, sandals, sunglasses, sun hat. A cover-up allows comfortable transitions across the yacht.",
      ],
      image: null,
      placeholderLabel: "YACHT CASUAL PLACEHOLDER",
      icon: "Sun",
    },
    {
      title: "What Is Yacht Sophisticated? (Dinner Standard)",
      description:
        "The Ritz-Carlton dinner dress code for indoor restaurants. Best understood as resort chic + elegant casual. Jackets and ties are not required, but collared shirts, slacks, and elegant attire are recommended.",
      bulletPoints: [
        "Men: Collared shirts, button-downs, polos with tailored trousers, linen shirts, chinos, dress trousers, loafers, smart leather shoes. Optional lightweight blazer.",
        "Do Men Need a Jacket or Tie?: No. A jacket is optional for special dining; ties are completely optional.",
        "Women: Elegant dresses, midi/maxi dresses, jumpsuits, dressy trousers, silk/satin blouses, skirts, elegant sandals, low heels, dress shoes.",
        "Dinner Prohibitions: Shorts, ball caps, hats, flip-flops, swimwear, and sleeveless T-shirts are not permitted during dinner service.",
        "Specialty Dining (S.E.A.): A polished dinner outfit is recommended for Chef Sven Elverfeld's specialty restaurant.",
      ],
      image: null,
      placeholderLabel: "YACHT SOPHISTICATED PLACEHOLDER",
      icon: "Sparkles",
    },
  ];

  // 3. Map Suitability to CostValueAnalysisCards format (Permitted vs Restrictions)
  const permittedMapped = pageData.rulesSuitability.permittedList.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  const restrictionsMapped = pageData.rulesSuitability.notPermittedList.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  // 4. Map Packing Method to BrandPillarsShowcase
  const considerationsData = {
    title: pageData.packingMethod.title,
    subtitle: pageData.packingMethod.subtitle,
    pillars: pageData.packingMethod.pillars.map((pillar) => ({
      title: pillar.title,
      description: pillar.description,
      icon: pillar.icon.toLowerCase(),
    })),
  };

  // 5. Map Showcase to ThreeColumnGrid (7-Night Wardrobe & Shoe Strategy)
  const showcaseItems = pageData.showcase.cards.map((card) => ({
    title: card.title,
    description: card.description,
    image: null,
    placeholderLabel: card.badge,
  }));

  // 6. Map planning steps to InteractivePlanningRoadmap (Daily Transition Pathway)
  const roadmapSteps = pageData.planningRoadmap.steps.map((step, idx) => {
    const descList = [
      "Relaxed resort wear such as linen trousers, breezy blouses, polo shirts, or casual resort dresses.",
      "Swimsuits paired with stylish cover-ups, sunglasses, and UV protection for watersports & pool lounging.",
      "Supportive walking shoes, breathable cotton/linen separates, and cultural site shoulder cover layers.",
      "Elevated resort wear on open-air lounge terraces for champagne, ocean breezes, and sunsets.",
      "Yacht Sophisticated collared shirts, tailored slacks, midi dresses, and smart leather footwear.",
    ];
    return {
      timeframe: `Phase 0${idx + 1}`,
      title: step.split(":")[0],
      description: descList[idx] || step,
      image: null,
      placeholderLabel: `STAGE 0${idx + 1} PLACEHOLDER`,
    };
  });

  // 7. Map Destination Tiers to PricingTiersCards format
  const destinationItems = pageData.destinationTiers.items.map((item) => ({
    name: item.label,
    price: item.price,
    description: item.description,
    nights: item.nights,
  }));

  // 8. Map Gallery to HierarchicalGrid (One Yacht. Many Ways to Dress.)
  const galleryItems = pageData.gallery.items.map((item) => ({
    title: item.title,
    description: item.description,
    image: null,
    placeholderLabel: item.badge,
  }));

  // 9. Map Curated Pillar Hub Guides (All Related Guides)
  const curatedGuides = [
    {
      title: "Ritz-Carlton Yacht Collection Pillar",
      category: "Main Fleet Guide",
      description:
        "The Ritz-Carlton Yacht Collection: Reviews, prices, suite categories, dining, and everything you need to know.",
      image: null,
      placeholderLabel: "PILLAR GUIDE",
      links: [
        { label: "Ritz-Carlton Yacht Collection Guide", url: "/ritz-carlton-yacht-collection" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection",
    },
    {
      title: "How Much Does a Ritz-Carlton Cruise Cost?",
      category: "Cost & Inclusions",
      description:
        "Understand fares, suite categories, and total vacation investment for a Ritz-Carlton yacht sailing.",
      image: null,
      placeholderLabel: "COST GUIDE",
      links: [
        { label: "Ritz-Carlton Cruise Cost Guide", url: "/ritz-carlton-yacht-collection-cost" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-cost",
    },
    {
      title: "What Is Included on a Ritz-Carlton Cruise?",
      category: "Onboard Inclusions",
      description:
        "A detailed guide to dining, beverages, Wi-Fi, gratuities, marina sports, and suite inclusions.",
      image: null,
      placeholderLabel: "INCLUSIONS GUIDE",
      links: [
        { label: "Ritz-Carlton Inclusions Guide", url: "/ritz-carlton-yacht-collection-included" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-included",
    },
    {
      title: "Is Ritz-Carlton Yacht Collection Worth It?",
      category: "Reviews & Verdict",
      description:
        "An honest review exploring the luxury value proposition, guest feedback, and suite experience.",
      image: null,
      placeholderLabel: "REVIEWS GUIDE",
      links: [
        { label: "Honest Ritz-Carlton Review", url: "/ritz-carlton-yacht-collection-reviews" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-reviews",
    },
    {
      title: "Evrima vs. Ilma vs. Luminara",
      category: "Fleet Comparison",
      description:
        "Compare the three Ritz-Carlton yachts by size, suites, dining venues, atmosphere, and traveler type.",
      image: null,
      placeholderLabel: "FLEET COMPARISON",
      links: [
        { label: "Evrima vs Ilma vs Luminara", url: "/ritz-carlton-evrima-vs-ilma-vs-luminara" },
      ],
      mainUrl: "/ritz-carlton-evrima-vs-ilma-vs-luminara",
    },
    {
      title: "Ritz-Carlton vs. Explora & Seabourn",
      category: "Brand Comparisons",
      description:
        "Compare Ritz-Carlton Yacht Collection with Explora Journeys and Seabourn luxury cruises.",
      image: null,
      placeholderLabel: "BRAND FACEOFFS",
      links: [
        { label: "Ritz-Carlton vs Explora Journeys", url: "/ritz-carlton-yacht-collection-vs-explora-journeys" },
        { label: "Ritz-Carlton vs Seabourn", url: "/ritz-carlton-yacht-collection-vs-seabourn" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-vs-explora-journeys",
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-dress-code#article",
        "headline": "What Is the Dress Code on Ritz-Carlton Yachts? A Complete Guide to What to Wear",
        "description":
          "A complete guide to the Ritz-Carlton Yacht Collection dress code, including Yacht Casual, Yacht Sophisticated, dinner attire, formal nights, shoes and packing tips.",
        "author": {
          "@type": "Person",
          "name": "Angela Hughes",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Trips & Ships Luxury Travel",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-dress-code",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-dress-code#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Luxury Cruises",
            "item": "https://www.tripsandships.com/cruise/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Collection Dress Code",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-dress-code",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-dress-code#faq",
        "mainEntity": pageData.faqs.questions.slice(0, 14).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (Hero Section & H1) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro (Hero & Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="Resort Chic"
      />

      {/* ─── SECTION 3: HighlightsSplit (Yacht Casual vs Yacht Sophisticated Standards) ─── */}
      <HighlightsSplit
        title="Yacht Casual vs. Yacht Sophisticated Standards"
        items={dressCodeHighlights}
      />

      {/* ─── SECTION 4: Day-to-Night Wardrobe Transition (RitzCasualExplorer) ─── */}
      {/* <RitzCasualExplorer image={null} /> */}

      {/* ─── SECTION 5: Suitability & Rules: Permitted vs Dinner Restrictions (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.rulesSuitability.title}
        subtitle="Aligning your onboard wardrobe with Ritz-Carlton yacht venue expectations."
        includedTitle={pageData.rulesSuitability.permittedTitle}
        extrasTitle={pageData.rulesSuitability.notPermittedTitle}
        included={permittedMapped}
        extras={restrictionsMapped}
      />

      {/* ─── SECTION 6: Expert Packing Strategy: The 5-Category Method (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={considerationsData} />

      {/* ─── SECTION 7: 7-Night Wardrobe Showcase (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.showcase.title}
        subtitle="Capsule wardrobe strategy for men, women, and essential footwear."
        items={showcaseItems}
      />

      {/* ─── SECTION 8: Footwear Three-Shoe Strategy (DressShoeGuide) ─── */}
      <DressShoeGuide image={null} />

      {/* ─── SECTION 9: Destination Climate Guidelines (RitzDestinationSpecs) ─── */}
      {/* <RitzDestinationSpecs image={null} /> */}

      {/* ─── SECTION 10: Daily Transition Pathway (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.planningRoadmap.title}
        subtitle="How to effortlessly transition from daytime pool lounging to evening dinner."
        steps={roadmapSteps}
      />

      {/* ─── SECTION 11: Destination Climate Tiers (PricingTiersCards) ─── */}
      <PricingTiersCards
        title={pageData.destinationTiers.title}
        subtitle={pageData.destinationTiers.subtitle}
        items={destinationItems}
        theme="light"
      />

      {/* ─── SECTION 12: Interactive Section: Build Your Ritz-Carlton Yacht Packing List (RitzPackingWizard) ─── */}
      {/* <RitzPackingWizard /> */}

      {/* ─── SECTION 13: Interactive Itemized Packing Checklist (InteractivePackingChecklist) ─── */}
      <InteractivePackingChecklist
        title="Interactive Ritz-Carlton Yacht Packing Checklist"
        subtitle="Select any wardrobe category below to review itemized clothing and accessory recommendations."
        categories={pageData.interactivePackingCategories}
        images={[]}
      />

      {/* ─── SECTION 14: Scrolling Media Showcase: One Yacht. Many Ways to Dress. (HierarchicalGrid) ─── */}
      <HierarchicalGrid
        title={pageData.gallery.title}
        subtitle={pageData.gallery.subtitle}
        items={galleryItems}
      />

      {/* ─── SECTION 15: Expert Credentials Plaque (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expert.name}
        title={pageData.expert.role}
        bio={`${pageData.expert.description1} ${pageData.expert.description2}`}
        image={null}
        badge="LUXURY YACHT CRUISE SPECIALIST"
        experienceBadge="40+ YEARS LEGACY EXPERTISE"
        credentials={[
          "Named Luxury Travel Influencer of the Year by Travel Leaders Network",
          "Recognized among Most Influential Women in Travel by TravelPulse",
          "Over 4 Decades Designing Bespoke Yacht & Luxury Voyages",
          "Traveled to more than 121 Countries Worldwide",
          "Founder of Luxury Travel University training top travel advisors",
        ]}
      />

      {/* ─── SECTION 16: FAQ Accordion - All 20 Questions (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 17: Curated Guides Hub (InteractivePillarHubGrid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Related Ritz-Carlton Yacht Collection Guides & Comparisons"
          subtitle="Explore in-depth articles on cost, inclusions, honest reviews, fleet comparisons, and competitor showdowns."
          items={curatedGuides}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 18: Editorial Dress Code & Packing Blueprint (EditorialFeatureShowcase) ─── */}
      <EditorialFeatureShowcase
        title={pageData.detailedBlueprint.title}
        subtitle={pageData.detailedBlueprint.subtitle}
        image={null}
        features={pageData.detailedBlueprint.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 19: Center CTA (Final Consultation CTA) ─── */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Yacht Vacation?"
        description="Knowing what to wear is one small part of preparing for a luxury yacht voyage. Choosing the right yacht, suite, itinerary and shore experiences is where personalized planning makes all the difference."
        buttonText="Plan My Ritz-Carlton Yacht Vacation"
        buttonLink="/contact"
        image={null}
      />
    </>
  );
};

export default RitzCarltonYachtCollectionDressCode;
