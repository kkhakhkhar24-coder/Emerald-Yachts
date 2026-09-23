import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import BudgetBreakdownTable from "@/components/ui/BudgetBreakdownTable";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import ProsConsCards from "@/components/ui/ProsConsCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ExpertRulesGrid from "@/components/ui/ExpertRulesGrid";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import InteractivePackingChecklist from "@/components/ui/InteractivePackingChecklist";
import MistakesShowcase from "@/components/ui/MistakesShowcase";
import AuthorityBox from "@/components/ui/AuthorityBox";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import VideoEmbed from "@/components/ui/VideoEmbed";
import CenterCTA from "@/components/ui/CenterCTA";

// Author & Profile Images
import angelaImage from "@/assets/Media (2).jpg";

// SEO Optimized Assets from assets/RitzCarltonYachtCollectionDressCode
import heroBgImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-yacht-dress-code-packing-guide-hero.jpg";
import introLifestyleImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-yacht-casual-lifestyle-terrace.jpeg";
import introDiningImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-yacht-evening-dining-sophisticated.jpg";

// Daytime Venues Images (Exact Venue Matches)
import poolHouseVenueImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-pool-house-outdoor-decks.jpg";
import marinaVenueImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-yacht-marina-watersports.jpg";
import mistralVenueImg from "@/assets/RitzCarltonYachtCollectionDressCode/ritz-carlton-yacht-living-room-mistral-lunch.jpg";

// Shore Excursions & Sea Day Progression Images
import historicExcursionImg from "@/assets/RitzCarltonYachtCollectionDressCode/historic-walking-excursion-attire.jpg";
import beachExcursionImg from "@/assets/RitzCarltonYachtCollectionDressCode/beach-water-excursion-swimwear.jpg";
import activeExcursionImg from "@/assets/RitzCarltonYachtCollectionDressCode/active-nature-excursion-layers.jpg";
import morningDeckImg from "@/assets/RitzCarltonYachtCollectionDressCode/morning-deck-casual-attire.jpg";
import afternoonPoolImg from "@/assets/RitzCarltonYachtCollectionDressCode/afternoon-pool-marina-resortwear.jpeg";
import sunsetCocktailsImg from "@/assets/RitzCarltonYachtCollectionDressCode/sunset-cocktails-yacht-sophisticated.jpg";
import eveningDinnerImg from "@/assets/RitzCarltonYachtCollectionDressCode/evening-dinner-indoor-dining-style.jpg";

// Regional Destination Packing Images
import caribbeanDestImg from "@/assets/RitzCarltonYachtCollectionDressCode/caribbean-yacht-packing-resortwear.jpeg";
import mediterraneanDestImg from "@/assets/RitzCarltonYachtCollectionDressCode/mediterranean-yacht-packing-chic.jpeg";
import northernEuropeDestImg from "@/assets/RitzCarltonYachtCollectionDressCode/alaska-northern-europe-layering-guide.jpg";
import transatlanticDestImg from "@/assets/RitzCarltonYachtCollectionDressCode/transatlantic-crossing-capsule-wardrobe.jpeg";
import roadmapLayeringImg from "@/assets/RitzCarltonYachtCollectionDressCode/caribbean-warm-weather-layering.jpeg";

const RitzCarltonYachtCollectionDressCode = () => {
  // 1. Data mapping for PremiumIntro (Section 1: Hero narrative)
  const introSections = [
    {
      heading: "What Should You Wear on a Ritz-Carlton Yacht?",
      paragraphs: pageData.hero.paragraphs,
    },
  ];

  // 2. Data mapping for Quick Answer (ProsConsCards)
  const quickAnswerShouldPackList = pageData.quickAnswer.shouldPack;
  const quickAnswerNotNeededList = [
    ...pageData.quickAnswer.notNeeded,
    ...pageData.quickAnswer.dinnerAvoid.map((item) => `Dinner: ${item}`),
  ];

  // 3. Data mapping for Terminology Table (Section 3: BudgetBreakdownTable)
  const terminologyTableData = {
    title: pageData.dressCodeTerminologyTable.title,
    description: pageData.dressCodeTerminologyTable.subtitle,
    headers: pageData.dressCodeTerminologyTable.headers,
    rows: pageData.dressCodeTerminologyTable.rows,
  };

  // 4. Data mapping for Daytime Yacht Casual (Section 4: GenericChecklistCards)
  const daytimeCasualCards = [
    {
      title: pageData.daytimeYachtCasual.women.title,
      items: pageData.daytimeYachtCasual.women.items,
    },
    {
      title: pageData.daytimeYachtCasual.men.title,
      items: pageData.daytimeYachtCasual.men.items,
    },
  ];

  // 5. Data mapping for Daytime Venues (Section 5: ThreeColumnGrid with Exact Venue Images)
  const daytimeVenueImages = [poolHouseVenueImg, marinaVenueImg, mistralVenueImg];
  const daytimeVenueCards = pageData.daytimeVenues.venues.map((venue, idx) => ({
    title: venue.name,
    category: venue.tagline,
    description: `${venue.description} ${venue.womenOutfit ? `Women: ${venue.womenOutfit}. ` : ""}${venue.menOutfit ? `Men: ${venue.menOutfit}.` : ""}`,
    image: daytimeVenueImages[idx % daytimeVenueImages.length],
  }));

  // 6. Data mapping for Evening Yacht Sophisticated (Section 6: GenericChecklistCards)
  const eveningSophisticatedCards = [
    {
      title: `${pageData.eveningYachtSophisticated.menAttire.title} (${pageData.eveningYachtSophisticated.menAttire.subtitle})`,
      items: [
        ...pageData.eveningYachtSophisticated.menAttire.excellentChoices,
        pageData.eveningYachtSophisticated.menAttire.simpleOutfit,
        `Jackets: ${pageData.eveningYachtSophisticated.jacketAndTieRules[0].answer}`,
        `Ties: ${pageData.eveningYachtSophisticated.jacketAndTieRules[1].answer}`,
      ],
    },
    {
      title: `${pageData.eveningYachtSophisticated.womenAttire.title} (${pageData.eveningYachtSophisticated.womenAttire.subtitle})`,
      items: [
        ...pageData.eveningYachtSophisticated.womenAttire.goodChoices,
        ...pageData.eveningYachtSophisticated.womenAttire.simpleOutfits.map(
          (outfit) => `Outfit Idea: ${outfit}`
        ),
      ],
    },
  ];

  // 7. Data mapping for Specific Rules & Dinner Guidelines (Section 7: ExpertRulesGrid)
  const dinnerExpertRules = pageData.specificRulesAndClarifications.rules.map((rule) => ({
    title: `${rule.topic} (${rule.verdict})`,
    description: rule.explanation,
  }));

  // 8. Data mapping for 7-Night Packing Lists (Section 8: Placeholders for Wardrobe Capsules)
  const sevenNightPackingItems = [
    {
      title: pageData.sevenNightPackingLists.women.title,
      category: "Women's Capsule Wardrobe",
      image: null,
      description: "A smart, versatile daytime-to-evening capsule wardrobe designed for 7 nights onboard.",
      features: [
        `Daytime: ${pageData.sevenNightPackingLists.women.daytime?.join(", ") || ""}`,
        `Evening: ${pageData.sevenNightPackingLists.women.evening?.join(", ") || ""}`,
        `Shoes: ${pageData.sevenNightPackingLists.women.shoes?.join(", ") || ""}`,
        `Accessories: ${pageData.sevenNightPackingLists.women.accessories?.join(", ") || ""}`,
      ],
      highlight: `Capsule Strategy: ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.womenExample?.day || ""} (Day) → ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.womenExample?.evening || ""} (Evening)`,
    },
    {
      title: pageData.sevenNightPackingLists.men.title,
      category: "Men's Capsule Wardrobe",
      image: null,
      description: "Effortless resort casual pieces transitioning seamlessly from deck activities to elegant specialty dining.",
      features: [
        `Daytime: ${pageData.sevenNightPackingLists.men.daytime?.join(", ") || ""}`,
        `Evening: ${pageData.sevenNightPackingLists.men.evening?.join(", ") || ""}`,
        `Shoes: ${pageData.sevenNightPackingLists.men.shoes?.join(", ") || ""}`,
        `Accessories: ${pageData.sevenNightPackingLists.men.accessories?.join(", ") || ""}`,
      ],
      highlight: `Capsule Strategy: ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.menExample?.day || ""} (Day) → ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.menExample?.evening || ""} (Evening)`,
    },
    {
      title: pageData.sevenNightPackingLists.whatNotToPack.title,
      category: "Leave Formalwear at Home",
      image: null,
      description: "Avoid overpacking formalwear and unnecessary heavy attire on your voyage.",
      features: (pageData.sevenNightPackingLists.whatNotToPack.items || []).map(
        (item) => `Leave Behind: ${item}`
      ),
      highlight: pageData.sevenNightPackingLists.whatNotToPack.takeaway,
    },
  ];

  // 9. Data mapping for Shoes Guide (Section 9: Placeholders for Shoe Categories)
  const shoesCards = pageData.shoesGuide.recommendations.map((shoe) => ({
    title: `${shoe.number}. ${shoe.type}`,
    category: "Footwear Requirement",
    description: shoe.purpose,
    image: null,
  }));

  // 10. Data mapping for Shore Excursions (Section 10: ThreeColumnGrid)
  const shoreExcursionImages = [historicExcursionImg, beachExcursionImg, activeExcursionImg];
  const shoreExcursionCards = pageData.shoreExcursionsAndSeaDays.shore.map((sh, idx) => ({
    title: sh.activity,
    category: "Shore Excursion Style",
    description: sh.attire,
    image: shoreExcursionImages[idx % shoreExcursionImages.length],
  }));

  // 11. Data mapping for Sea Day Progression (Section 11: ThreeColumnGrid)
  const seaDayImages = [morningDeckImg, afternoonPoolImg, sunsetCocktailsImg, eveningDinnerImg];
  const seaDayTimelineCards = pageData.shoreExcursionsAndSeaDays.seaDays.progression.map((prog, idx) => ({
    title: `Sea Day: ${prog.time}`,
    category: "Sea Day Timeline",
    description: prog.outfit,
    image: seaDayImages[idx % seaDayImages.length],
  }));

  // 12. Data mapping for Scenarios (Section 12: BentoGlassmorphismGrid)
  const scenarioBentoItems = [
    {
      title: pageData.dressCodeScenarios.scenarios[0].subtitle,
      description: pageData.dressCodeScenarios.scenarios[0].description,
      image: sunsetCocktailsImg,
    },
    {
      title: pageData.dressCodeScenarios.scenarios[1].subtitle,
      description: pageData.dressCodeScenarios.scenarios[1].description,
      image: introDiningImg,
    },
    {
      title: pageData.dressCodeScenarios.scenarios[2].subtitle,
      description: pageData.dressCodeScenarios.scenarios[2].description,
      image: null,
    },
    {
      title: "The Strictness Policy",
      description: pageData.expertPackingFramework.strictnessAndFleet.isStrict,
      image: introLifestyleImg,
    },
  ];

  // 13. Data mapping for Brand Comparisons (Section 13: BrandPillarsShowcase)
  const brandComparisonPillars = {
    title: pageData.brandComparisons.title,
    subtitle: "How Ritz-Carlton's dress code compares against traditional cruise lines and modern luxury competitors.",
    pillars: pageData.brandComparisons.comparisons.map((comp, idx) => {
      const icons = ["ship", "star", "compass"];
      return {
        icon: icons[idx % icons.length],
        title: comp.brand,
        description: comp.comparison,
      };
    }),
  };

  // 14. Data mapping for Destinations (Section 14: ThreeColumnGrid)
  const destinationImages = [
    caribbeanDestImg,
    mediterraneanDestImg,
    northernEuropeDestImg,
    transatlanticDestImg,
    roadmapLayeringImg,
  ];
  const destinationCards = pageData.destinationsAndLongVoyages.destinations.map((dest, idx) => ({
    title: dest.region,
    category: "Regional Packing Specification",
    description: dest.details,
    image: destinationImages[idx % destinationImages.length],
  }));

  // 15. Data mapping for 5-Category Packing Strategy (Section 15: Placeholders for Strategy Steps)
  const roadmapSteps = pageData.expertPackingFramework.categories.map((cat) => ({
    timeframe: `Category 0${cat.number}`,
    title: cat.title,
    description: cat.description,
    image: null,
  }));

  // 16. Data mapping for Interactive Packing Checklist (Section 16: InteractivePackingChecklist)
  const checklistCategories = [
    {
      id: "ten-essentials",
      label: "The 10 Packing Essentials",
      icon: "BackpackIcon",
      items: pageData.expertPackingFramework.tenEssentials,
    },
    {
      id: "special-celebrations",
      label: "Special Celebrations & Themes",
      icon: "ShirtIcon",
      items: [
        pageData.expertPackingFramework.strictnessAndFleet.specialCelebrations,
        pageData.expertPackingFramework.strictnessAndFleet.fleetDifferences,
      ],
    },
    {
      id: "quick-checklist",
      label: "Quick Capsule Checklist",
      icon: "DocumentIcon",
      items: pageData.capsuleChecklists.quickChecklist,
    },
    {
      id: "double-duty",
      label: "Double-Duty Strategy",
      icon: "ShoeIcon",
      items: [
        `Women: ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.womenExample?.day || ""} (Day) → ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.womenExample?.evening || ""} (Evening)`,
        `Men: ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.menExample?.day || ""} (Day) → ${pageData.sevenNightPackingLists.capsuleDoubleDuty?.menExample?.evening || ""} (Evening)`,
        pageData.sevenNightPackingLists.whatNotToPack.takeaway,
      ],
    },
  ];

  const mistakesMapped = pageData.expertPackingFramework.commonMistakes.map((m) => ({
    title: m.title,
    description: m.desc,
  }));


  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      {/* 1. SEO Metadata & Schema */}
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta
          name="keywords"
          content={[
            ...pageData.seo.primaryKeywords,
            ...pageData.seo.secondaryKeywords,
            ...pageData.seo.longTailKeywords,
          ].join(", ")}
        />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(pageData.schema)}
        </script>
      </Helmet>

      {/* 2. Global Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBgImg}
        primaryCtaText="Explore What to Pack"
        primaryCtaLink="#packing-breakdown"
        secondaryCtaText="Contact a Yacht Specialist"
        secondaryCtaLink="#advisor-consultation"
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <div id="content">
        <PremiumIntro
          badge="EXECUTIVE DRESS CODE PHILOSOPHY"
          title="Resort Chic Without Formal Rigidity"
          highlight="NO FORMAL NIGHTS REQUIRED ONBOARD"
          quote="The Ritz-Carlton Yacht Collection is intentionally more relaxed than a traditional formal cruise. During the day, think Yacht Casual; for dinner in indoor restaurants, think Yacht Sophisticated."
          sections={introSections}
          image1={introLifestyleImg}
          image2={introDiningImg}
          alt1="Ritz-Carlton Yacht Casual Daytime Lifestyle on the Terrace"
          alt2="Ritz-Carlton Yacht Sophisticated Evening Dining Experience"
          watermarkText="STYLE"
        />
      </div>

      {/* 5. Terminology Breakdown Table (BudgetBreakdownTable) */}
      <div id="terminology-table">
        <BudgetBreakdownTable data={terminologyTableData} />
      </div>

      {/* 6. Quick Answer: What to Pack vs What to Avoid (ProsConsCards) */}
      <div id="packing-breakdown">
        <ProsConsCards
          title={pageData.quickAnswer.title}
          prosTitle="You SHOULD Pack (Recommended Attire)"
          bestFor={quickAnswerShouldPackList}
          consTitle="You Do NOT Need / Avoid for Dinner"
          notBestFor={quickAnswerNotNeededList}
          bottomNote={pageData.quickAnswer.lead}
          type="compare"
        />
      </div>

      {/* 7. Authority Box #1 - Terminology Core Rule */}
      <div className="max-w-5xl mx-auto px-6">
        <AuthorityBox
          title="KEY TAKEAWAY: DRESS CODE PHILOSOPHY"
          content={pageData.dressCodeTerminologyTable.takeaway}
          author="Angela Hughes, Luxury Cruise Specialist & CEO"
          authorImage={angelaImage}
        />
      </div>

      {/* 8. Daytime Yacht Casual: Women vs Men (GenericChecklistCards) */}
      <GenericChecklistCards
        title={pageData.daytimeYachtCasual.title}
        subtitle={pageData.daytimeYachtCasual.subtitle}
        cards={daytimeCasualCards}
      />

      {/* 9. Daytime Venues: Breakfast, Lunch, Pool & Marina (ThreeColumnGrid with Exact Venue Images) */}
      <ThreeColumnGrid
        title={pageData.daytimeVenues.title}
        subtitle={pageData.daytimeVenues.subtitle}
        items={daytimeVenueCards}
      />

      {/* 10. Evening Yacht Sophisticated: Men vs Women (GenericChecklistCards) */}
      <GenericChecklistCards
        title={pageData.eveningYachtSophisticated.title}
        subtitle={pageData.eveningYachtSophisticated.subtitle}
        cards={eveningSophisticatedCards}
      />

      {/* 11. Dinner Rules & Restricted Items (ExpertRulesGrid) */}
      <ExpertRulesGrid
        title={pageData.specificRulesAndClarifications.title}
        subtitle={pageData.specificRulesAndClarifications.subtitle}
        rules={dinnerExpertRules}
      />

      {/* 12. 7-Night Packing Lists & Double Duty Capsule (ThreeColumnGrid with Placeholders) */}
      <ThreeColumnGrid
        title={pageData.sevenNightPackingLists.title}
        subtitle={pageData.sevenNightPackingLists.subtitle}
        items={sevenNightPackingItems}
      />

      {/* 13. What Shoes Should You Pack? (ThreeColumnGrid with Placeholders) */}
      <ThreeColumnGrid
        title={pageData.shoesGuide.title}
        subtitle={pageData.shoesGuide.subtitle}
        items={shoesCards}
      />

      {/* 14. Shore Excursions: What to Wear by Activity (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title="Shore Excursions: What to Wear by Activity"
        subtitle={pageData.shoreExcursionsAndSeaDays.subtitle}
        items={shoreExcursionCards}
      />

      {/* 15. Sea Day Style: Timeline Progression (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title="Sea Day Style: Morning to Evening Timeline"
        subtitle={pageData.shoreExcursionsAndSeaDays.seaDays.description}
        items={seaDayTimelineCards}
      />

      {/* 16. Dress Code by Time of Day Matrix */}
      <div id="time-of-day-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.timeOfDay.title}
          headers={pageData.matrices.timeOfDay.headers}
          rows={pageData.matrices.timeOfDay.rows}
        />
      </div>

      {/* 17. Dress Code by Location Across Yacht Matrix */}
      <div id="location-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.byLocation.title}
          headers={pageData.matrices.byLocation.headers}
          rows={pageData.matrices.byLocation.rows}
        />
      </div>

      {/* 18. What to Wear: Men vs. Women Side-by-Side Matrix */}
      <div id="men-vs-women-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.menVsWomen.title}
          headers={pageData.matrices.menVsWomen.headers}
          rows={pageData.matrices.menVsWomen.rows}
        />
      </div>

      {/* 19. Common Scenarios: Dressing Up, Overdressing & Underdressing (BentoGlassmorphismGrid) */}
      <BentoGlassmorphismGrid
        title={pageData.dressCodeScenarios.title}
        subtitle="Dressing Guidelines & Yacht Atmosphere"
        bentoItems={scenarioBentoItems}
      />

      {/* 20. Brand Comparisons: Traditional Cruises, Seabourn & Explora (BrandPillarsShowcase) */}
      <BrandPillarsShowcase data={brandComparisonPillars} />

      {/* 21. Mid-Page Consultation CTA (CenterCTA) */}
      <div id="advisor-consultation">
        <CenterCTA
          title="Plan Your Ritz-Carlton Yacht Vacation"
          description="Speak with our certified luxury yacht specialists to get personalized itinerary recommendations, stateroom placement, and packing advice."
          buttonText="Request Complimentary Consultation"
          buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Vacation%20Inquiry"
          theme="dark"
        />
      </div>

      {/* 22. Destination-Specific Packing & Long Voyages (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.destinationsAndLongVoyages.title}
        subtitle="Tailoring your luggage to Caribbean warmth, Mediterranean coastlines, Alaska wilderness, or multi-week itineraries."
        items={destinationCards}
      />

      {/* 23. 5-Category Expert Packing Roadmap (InteractivePlanningRoadmap with Visual Placeholders) */}
      <InteractivePlanningRoadmap
        title={pageData.expertPackingFramework.title}
        subtitle={pageData.expertPackingFramework.subtitle}
        steps={roadmapSteps}
      />

      {/* 24. 10 Essentials & Quick Checklist (InteractivePackingChecklist) */}
      <InteractivePackingChecklist
        title="The 10 Essentials & Quick Packing Checklist"
        subtitle="EVERYTHING YOU NEED FOR A FLAWLESS YACHT VOYAGE"
        categories={checklistCategories}
      />

      {/* 25. Common Dress-Code Mistakes (MistakesShowcase) */}
      <MistakesShowcase mistakes={mistakesMapped} />

      {/* 26. Authority Box #2 - 60-Second Dress-Code Guide */}
      <div className="max-w-5xl mx-auto px-6">
        <AuthorityBox
          title={pageData.sixtySecondGuide.title}
          content={pageData.sixtySecondGuide.rules
            ?.map((r) => `<strong>${r.label}:</strong> ${r.value}`)
            ?.join(" • ") || ""}
          author="Angela Hughes, Luxury Travel Advisor"
          authorImage={angelaImage}
        />
      </div>

      {/* 27. Angela Hughes Expert Credentials */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        bio={pageData.angelaPerspective.bio}
        heading={pageData.angelaPerspective.heading}
        text={pageData.angelaPerspective.text}
        image={angelaImage}
        badge="LUXURY CRUISE EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        ctaText="Book With Angela Hughes"
        ctaLink="mailto:angela@tripsandships.com"
      />

      {/* 28. Complete FAQ Accordion (All 20 FAQs) */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Ritz-Carlton Yacht Dress Code",
          subtitle: "Expert answers to the 20 most common questions regarding dinner attire, formal nights, shoes, and packing rules.",
          faqs: pageData.faqs,
        }}
      />

      {/* 29. Video Section Component (VideoEmbed Component) ─── */}
      <VideoEmbed
        data={{
          youtubeId: "sQPnGRkiLdg",
          title: "Inside the Ritz-Carlton Yacht Lifestyle",
          description: "Explore the relaxed elegance, Yacht Sophisticated evenings, and casual luxury of The Ritz-Carlton Yacht Collection."
        }}
      />

      {/* 30. Final Bottom CTA */}
      <div id="advisor-consultation">
        <CenterCTA
          title="Ready to Sail in Relaxed Luxury?"
          description="Connect with Trips & Ships Luxury Travel to secure locked-in rates, exclusive Virtuoso amenities, and expert planning support."
          buttonText="Contact a Yacht Specialist"
          buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Booking"
          theme="dark"
        />
      </div>
    </div>
  );
};

export default RitzCarltonYachtCollectionDressCode;
