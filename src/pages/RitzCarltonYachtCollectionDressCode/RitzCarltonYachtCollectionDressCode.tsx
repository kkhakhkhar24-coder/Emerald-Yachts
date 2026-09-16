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
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import MistakesShowcase from "@/components/ui/MistakesShowcase";
import AuthorityBox from "@/components/ui/AuthorityBox";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";
// 7-Night Packing List Images (commented out as requested):
// import womenPackingImg from "@/assets/images/women-packing.jpg";
// import menPackingImg from "@/assets/images/men-packing.jpg";
// import whatNotToPackImg from "@/assets/images/what-not-to-pack.jpg";

const RitzCarltonYachtCollectionDressCode = () => {
  // 1. Data mapping for PremiumIntro (Section 1: Hero narrative)
  const introSections = [
    {
      heading: "What Should You Wear on a Ritz-Carlton Yacht?",
      paragraphs: pageData.hero.paragraphs,
    },
  ];

  // 2. Data mapping for Quick Answer (Section 2: CostValueAnalysisCards)
  const quickAnswerShouldPack = pageData.quickAnswer.shouldPack.map((item, idx) => ({
    title: `Essential ${idx + 1}`,
    description: item,
  }));

  const quickAnswerNotNeeded = [
    ...pageData.quickAnswer.notNeeded.map((item) => ({
      title: "Not Needed",
      description: item,
    })),
    ...pageData.quickAnswer.dinnerAvoid.map((item) => ({
      title: "Avoid for Dinner",
      description: item,
    })),
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

  // 5. Data mapping for Daytime Venues (Section 5: ThreeColumnGrid)
  const daytimeVenueCards = pageData.daytimeVenues.venues.map((venue) => ({
    title: venue.name,
    category: venue.tagline,
    description: `${venue.description} ${venue.womenOutfit ? `Women: ${venue.womenOutfit}. ` : ""}${venue.menOutfit ? `Men: ${venue.menOutfit}.` : ""}`,
    image: null,
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

  // 7. Data mapping for Dinner Rules & Prohibited Items (Section 7: BrandPillarsShowcase)
  const dinnerRulesPillars = {
    title: pageData.specificRulesAndClarifications.title,
    subtitle: pageData.specificRulesAndClarifications.subtitle,
    pillars: pageData.specificRulesAndClarifications.rules.map((rule, idx) => {
      const icons = ["shield", "star", "window", "compass", "ship", "heart", "award", "check"];
      return {
        icon: icons[idx % icons.length],
        title: `${rule.topic} (${rule.verdict})`,
        description: rule.explanation,
      };
    }),
  };

  // 8. Data mapping for 7-Night Packing Lists (Section 12: ThreeColumnGrid with Images)
  const sevenNightPackingItems = [
    {
      title: pageData.sevenNightPackingLists.women.title,
      category: "Women's Capsule Wardrobe",
      image: null, // womenPackingImg,
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
      image: null, // menPackingImg,
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
      image: null, // whatNotToPackImg,
      description: "Avoid overpacking formalwear and unnecessary heavy attire on your voyage.",
      features: (pageData.sevenNightPackingLists.whatNotToPack.items || []).map(
        (item) => `Leave Behind: ${item}`
      ),
      highlight: pageData.sevenNightPackingLists.whatNotToPack.takeaway,
    },
  ];

  // 9. Data mapping for Shoes Guide (Section 9: ThreeColumnGrid)
  const shoesCards = pageData.shoesGuide.recommendations.map((shoe) => ({
    title: `${shoe.number}. ${shoe.type}`,
    category: "Footwear Requirement",
    description: shoe.purpose,
    image: null,
  }));

  // 10. Data mapping for Shore Excursions & Sea Days (Section 10: ThreeColumnGrid)
  const shoreAndSeaCards = [
    ...pageData.shoreExcursionsAndSeaDays.shore.map((sh) => ({
      title: sh.activity,
      category: "Shore Excursion Style",
      description: sh.attire,
      image: null,
    })),
    ...pageData.shoreExcursionsAndSeaDays.seaDays.progression.map((prog) => ({
      title: `Sea Day: ${prog.time}`,
      category: "Sea Day Timeline",
      description: prog.outfit,
      image: null,
    })),
  ];

  // 11. Data mapping for Scenarios (Section 12: CostValueAnalysisCards)
  const scenariosIncluded = [
    {
      title: pageData.dressCodeScenarios.scenarios[0].subtitle,
      description: pageData.dressCodeScenarios.scenarios[0].description,
    },
    {
      title: pageData.dressCodeScenarios.scenarios[1].subtitle,
      description: pageData.dressCodeScenarios.scenarios[1].description,
    },
  ];

  const scenariosRestrictions = [
    {
      title: pageData.dressCodeScenarios.scenarios[2].subtitle,
      description: pageData.dressCodeScenarios.scenarios[2].description,
    },
    {
      title: "Strictness Policy",
      description: pageData.expertPackingFramework.strictnessAndFleet.isStrict,
    },
  ];

  // 12. Data mapping for Brand Comparisons (Section 13: BrandPillarsShowcase)
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

  // 13. Data mapping for Destinations (Section 14: ThreeColumnGrid)
  const destinationCards = pageData.destinationsAndLongVoyages.destinations.map((dest) => ({
    title: dest.region,
    category: "Regional Packing Specification",
    description: dest.details,
    image: null,
  }));

  // 14. Data mapping for 5-Category Packing Strategy (Section 15: InteractivePlanningRoadmap)
  const roadmapSteps = pageData.expertPackingFramework.categories.map((cat) => ({
    timeframe: `Category 0${cat.number}`,
    title: cat.title,
    description: cat.description,
    image: null,
  }));

  // 15. Data mapping for 10 Essentials & Mistakes (Section 16: GenericChecklistCards & MistakesShowcase)
  const tenEssentialsCards = [
    {
      title: "The 10 Essentials to Pack",
      items: pageData.expertPackingFramework.tenEssentials,
    },
    {
      title: "Special Celebrations & Themed Evenings",
      items: [
        pageData.expertPackingFramework.strictnessAndFleet.specialCelebrations,
        pageData.expertPackingFramework.strictnessAndFleet.fleetDifferences,
        ...pageData.capsuleChecklists.quickChecklist,
      ],
    },
  ];

  const mistakesMapped = pageData.expertPackingFramework.commonMistakes.map((m) => ({
    title: m.title,
    description: m.desc,
  }));

  // 16. Hub Resources
  const hubItems = [
    {
      title: "Best Suites on Ritz-Carlton Yachts",
      description: "Explore Owner's, Loft, Grand, and View Suites across Evrima, Ilma, and Luminara.",
      link: "/ritz-carlton-yacht-collection-suites",
      actionLabel: "EXPLORE SUITES",
    },
    {
      title: "Marriott Bonvoy Points on RCYC",
      description: "Master how to earn 5x points per $1 and redeem Bonvoy points toward Ritz-Carlton Yacht cruises.",
      link: "/ritz-carlton-yacht-collection-marriott-bonvoy-points",
      actionLabel: "VIEW BONVOY GUIDE",
    },
    {
      title: "Ritz-Carlton Yacht Collection Overview",
      description: "Explore complete fleet schedules, Caribbean & Mediterranean itineraries, and dining venues.",
      link: "/ritz-carlton-yacht-collection",
      actionLabel: "EXPLORE FLEET",
    },
    {
      title: "Ritz-Carlton for Families & Kids",
      description: "Discover Ritz Kids programming, connecting staterooms, and family voyage planning.",
      link: "/ritz-carlton-yacht-collection-families-children",
      actionLabel: "FAMILY GUIDE",
    },
  ];

  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      {/* 1. SEO Metadata */}
      <Helmet>
        <title>{pageData.seo.title}</title>
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
      </Helmet>

      {/* 2. Global Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
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
          watermarkText="STYLE"
        />
      </div>

      {/* 5. Terminology Breakdown Table (BudgetBreakdownTable) */}
      <div id="terminology-table">
        <BudgetBreakdownTable data={terminologyTableData} />
      </div>

      {/* 6. Quick Answer: What to Pack vs What to Avoid (CostValueAnalysisCards) */}
      <div id="packing-breakdown">
        <CostValueAnalysisCards
          title={pageData.quickAnswer.title}
          subtitle={pageData.quickAnswer.lead}
          includedTitle="You SHOULD Pack (Recommended Attire)"
          included={quickAnswerShouldPack}
          extrasTitle="You Do NOT Need / Avoid for Dinner"
          extras={quickAnswerNotNeeded}
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

      {/* 9. Daytime Venues: Breakfast, Lunch, Pool & Marina (ThreeColumnGrid) */}
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

      {/* 11. Dinner Rules & Restricted Items (BrandPillarsShowcase) */}
      <BrandPillarsShowcase data={dinnerRulesPillars} />

      {/* 12. 7-Night Packing Lists & Double Duty Capsule (ThreeColumnGrid with Images) */}
      <ThreeColumnGrid
        title={pageData.sevenNightPackingLists.title}
        subtitle={pageData.sevenNightPackingLists.subtitle}
        items={sevenNightPackingItems}
      />

      {/* 13. What Shoes Should You Pack? (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.shoesGuide.title}
        subtitle={pageData.shoesGuide.subtitle}
        items={shoesCards}
      />

      {/* 14. Shore Excursions & Sea Day Style (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.shoreExcursionsAndSeaDays.title}
        subtitle={pageData.shoreExcursionsAndSeaDays.subtitle}
        items={shoreAndSeaCards}
      />

      {/* 15. Dress Code by Time of Day Matrix */}
      <div id="time-of-day-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.timeOfDay.title}
          headers={pageData.matrices.timeOfDay.headers}
          rows={pageData.matrices.timeOfDay.rows}
        />
      </div>

      {/* 16. Dress Code by Location Across Yacht Matrix */}
      <div id="location-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.byLocation.title}
          headers={pageData.matrices.byLocation.headers}
          rows={pageData.matrices.byLocation.rows}
        />
      </div>

      {/* 17. What to Wear: Men vs. Women Side-by-Side Matrix */}
      <div id="men-vs-women-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.matrices.menVsWomen.title}
          headers={pageData.matrices.menVsWomen.headers}
          rows={pageData.matrices.menVsWomen.rows}
        />
      </div>

      {/* 16. Common Scenarios: Dressing Up, Overdressing & Underdressing (CostValueAnalysisCards) */}
      <CostValueAnalysisCards
        title={pageData.dressCodeScenarios.title}
        subtitle="Navigating comfort levels, dinner guidelines, and personal style on the yacht."
        includedTitle="Effortless Elegance & Dressing Up"
        included={scenariosIncluded}
        extrasTitle="What to Avoid at Dinner"
        extras={scenariosRestrictions}
      />

      {/* 17. Brand Comparisons: Traditional Cruises, Seabourn & Explora (BrandPillarsShowcase) */}
      <BrandPillarsShowcase data={brandComparisonPillars} />

          {/* 23. Mid-Page Consultation CTA (CenterCTA) */}
      <div id="advisor-consultation">
        <CenterCTA
          title="Plan Your Ritz-Carlton Yacht Vacation"
          description="Speak with our certified luxury yacht specialists to get personalized itinerary recommendations, stateroom placement, and packing advice."
          buttonText="Request Complimentary Consultation"
          buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Vacation%20Inquiry"
          theme="dark"
        />
      </div>

      {/* 18. Destination-Specific Packing & Long Voyages (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.destinationsAndLongVoyages.title}
        subtitle="Tailoring your luggage to Caribbean warmth, Mediterranean coastlines, Alaska wilderness, or multi-week itineraries."
        items={destinationCards}
      />

      {/* 19. 5-Category Expert Packing Roadmap (InteractivePlanningRoadmap) */}
      <InteractivePlanningRoadmap
        title={pageData.expertPackingFramework.title}
        subtitle={pageData.expertPackingFramework.subtitle}
        steps={roadmapSteps}
      />

      {/* 20. 10 Essentials & Quick Checklist (GenericChecklistCards) */}
      <GenericChecklistCards
        title="The 10 Essentials & Quick Packing Checklist"
        subtitle="EVERYTHING YOU NEED FOR A FLAWLESS YACHT VOYAGE"
        cards={tenEssentialsCards}
      />

      {/* 21. Common Dress-Code Mistakes (MistakesShowcase) */}
      <MistakesShowcase mistakes={mistakesMapped} />

      {/* 22. Authority Box #2 - 60-Second Dress-Code Guide */}
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

  

      {/* 24. Angela Hughes Expert Credentials */}
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

      {/* 25. Complete FAQ Accordion (All 20 FAQs) */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Ritz-Carlton Yacht Dress Code",
          subtitle: "Expert answers to the 20 most common questions regarding dinner attire, formal nights, shoes, and packing rules.",
          faqs: pageData.faqs,
        }}
      />

      {/* 26. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Resources"
        subtitle="Deepen your knowledge with complete suite guides, loyalty points optimization, and family cruise planning."
        items={hubItems}
      />

      {/* 27. Final Bottom CTA */}
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
