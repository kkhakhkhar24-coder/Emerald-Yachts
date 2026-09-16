import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Images
import angelaImage from '@/assets/Media (2).jpg';
// import yachtHeroImage from '@/assets/EmeraldVSRitzCarltonYacht/Ritzcarton.webp';
// import yachtImage1 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr1.webp';
// import yachtImage2 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr2.webp';
// import yachtImage3 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr3.webp';
// import yachtExperienceImage from '@/assets/EmeraldVSRitzCarltonYacht/Experice.webp';

const yachtHeroImage = null;
const yachtImage1 = null;
const yachtImage2 = null;
const yachtImage3 = null;
const yachtExperienceImage = null;

// Shared UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import InteractiveCabinComparison from '@/components/ui/InteractiveCabinComparison';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

const RitzCarltonYachtCollectionSuites = () => {
  // 1. Data mapping for PremiumIntro (Section 1)
  const introSections = [
    {
      heading: "What Are the Best Suites on Ritz-Carlton Yachts?",
      paragraphs: pageData.intro.paragraphs
    }
  ];

  // 2. Data mapping for Quick Answer Table (Section 2)
  const quickAnswerTableData = {
    title: pageData.quickAnswer.title,
    description: pageData.quickAnswer.lead,
    headers: pageData.quickAnswer.tableHeaders,
    rows: pageData.quickAnswer.tableRows
  };

  // 3. Data mapping for Fleet Overview (Section 3) - ThreeColumnGrid
  const fleetCards = pageData.fleetOverview.ships.map((ship) => ({
    title: ship.name,
    category: ship.suitesCount,
    description: `${ship.tagline}. ${ship.description} Included categories: ${ship.categories.join(', ')}. ${ship.specialNote}`,
    image: null
  }));

  // 4. Data mapping for 9 Detailed Suite Categories (Section 4) - InteractiveCabinComparison
  const cabinComparisonData = {
    title: "Complete Suite Category Breakdown",
    subtitle: "Explore all 9 primary suite tiers across Evrima, Ilma, and Luminara to find your ideal accommodation.",
    cabins: pageData.suiteCategoriesDetailed.map((suite) => ({
      id: suite.id,
      name: suite.name,
      bestFor: suite.bestFor,
      description: `${suite.overview} Why choose: ${suite.whyChoose}${suite.consideration ? ` (Note: ${suite.consideration})` : ''} Dimensions: ${suite.size} • Yacht: ${suite.yacht}.`,
      features: suite.features
    }))
  };

  const cabinComparisonImages = [
    yachtImage1,
    yachtImage2,
    yachtImage3,
    yachtHeroImage,
    yachtExperienceImage,
    yachtImage1,
    yachtImage2,
    yachtImage3,
    yachtHeroImage
  ];

  // 5. Data mapping for Yacht Comparison (Section 6) - GenericChecklistCards
  const yachtComparisonCards = pageData.yachtComparisonSection.yachts.map((yacht) => ({
    title: yacht.name,
    items: yacht.features
  }));

  // 6. Data mapping for Inclusions & Benefits Distinction (Section 7 & 8) - GenericChecklistCards
  const inclusionsAndBenefitsCards = [
    {
      title: pageData.inclusionsSection.title,
      items: [
        ...pageData.inclusionsSection.amenities,
        `Special Owner's Suite Note: ${pageData.inclusionsSection.specialNote}`
      ]
    },
    {
      title: pageData.benefitsDistinction.title,
      items: pageData.benefitsDistinction.paragraphs
    }
  ];

  // 7. Data mapping for CostValueAnalysisCards (Section 9: Are Suites Worth the Upgrade?)
  const worthUpgradeLargerMapped = pageData.worthUpgrade.largerSense.points.map((pt, idx) => ({
    title: `Scenario ${idx + 1}`,
    description: pt
  }));

  const worthUpgradeSmallerMapped = pageData.worthUpgrade.smallerSense.points.map((pt, idx) => ({
    title: `Scenario ${idx + 1}`,
    description: pt
  }));

  // 8. Data mapping for InteractivePlanningRoadmap (Section 10: 5 Steps)
  const roadmapSteps = pageData.selectionProcess.steps.map((st) => ({
    timeframe: `Step ${st.step}`,
    title: st.title,
    description: st.description,
    image: yachtExperienceImage
  }));

  // 9. Data mapping for BrandPillarsShowcase (Section 11: Best Suite by Traveler Type)
  const travelerTypePillars = {
    title: pageData.travelerTypes.title,
    subtitle: "Matching specific cabin and suite categories to your unique voyage goals.",
    pillars: pageData.travelerTypes.categories.map((cat, idx) => {
      const icons = ['heart', 'star', 'award', 'users', 'compass', 'ship', 'window', 'check'];
      return {
        icon: icons[idx % icons.length],
        title: cat.persona,
        description: cat.recommendation
      };
    })
  };

  // 10. Data mapping for Deck Locations (Section 12) - ThreeColumnGrid
  const deckLocationCards = pageData.deckLocation.locations.map((loc) => ({
    title: loc.area,
    category: "Position Analysis",
    description: loc.detail,
    image: null
  }));

  // 11. Data mapping for Upgrade Strategy (Section 14) - BrandPillarsShowcase
  const upgradeStrategyPillars = {
    title: pageData.upgradeStrategy.title,
    subtitle: pageData.upgradeStrategy.lead,
    pillars: pageData.upgradeStrategy.strategies.map((strat, idx) => {
      const icons = ['star', 'window', 'award', 'compass'];
      return {
        icon: icons[idx % icons.length],
        title: strat.pillar,
        description: strat.description
      };
    })
  };

  // 12. Hub Resources for InteractivePillarHubGrid
  const hubItems = [
    {
      title: "Marriott Bonvoy Points on RCYC",
      description: "Master how to earn 5x points per $1 and redeem Bonvoy points toward Ritz-Carlton Yacht cruises.",
      link: "/ritz-carlton-yacht-collection-marriott-bonvoy-points",
      actionLabel: "VIEW BONVOY GUIDE"
    },
    {
      title: "Ritz-Carlton Yacht Collection Overview",
      description: "Explore complete fleet schedules, Caribbean & Mediterranean itineraries, and dining venues.",
      link: "/ritz-carlton-yacht-collection",
      actionLabel: "EXPLORE FLEET"
    },
    {
      title: "Ritz-Carlton vs. Seabourn Cruises",
      description: "Discover how Ritz-Carlton's ultra-luxury yachting compares against Seabourn's classic luxury cruise fleet.",
      link: "/ritz-carlton-vs-seabourn",
      actionLabel: "COMPARE SEABOURN"
    }
  ];

  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      {/* 1. Helmet SEO Metadata & Schema Graph */}
      <Helmet>
        <title>{pageData.meta.seoTitle}</title>
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={[pageData.meta.primaryKeyword, ...pageData.meta.secondaryKeywords].join(', ')} />
        <link rel="canonical" href={pageData.meta.canonical} />
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
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink="#suite-comparison-matrix"
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink="#suite-advisor-consultation"
        backgroundImage={yachtHeroImage}
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <PremiumIntro
        badge="EXECUTIVE SUITE OVERVIEW"
        title="Luxury Accommodations at Sea"
        highlight="EVERY SUITE FEATURES A PRIVATE TERRACE"
        quote="For travelers considering a Ritz-Carlton Yacht cruise, choosing the right suite is about more than simply booking the largest room available. A well-chosen suite can change how you experience the yacht."
        sections={introSections}
        image={yachtExperienceImage}
        watermarkText="SUITES"
      />

      {/* 5. Quick Answer Decision Table (BudgetBreakdownTable) */}
      <div id="quick-answer-suite-matrix">
        <BudgetBreakdownTable
          data={quickAnswerTableData}
        />
      </div>

      {/* 6. Authority Box #1 - Suite Selection Core Philosophy */}
      <div className="max-w-5xl mx-auto px-6">
        <AuthorityBox
          title="KEY TAKEAWAY: SUITE SELECTION PHILOSOPHY"
          content="The important point is that 'best' depends on how you intend to use the suite. If you spend very little time in your room, paying for the largest accommodation may not make sense. If your suite is going to function as your private retreat for a longer voyage, however, additional living space and terrace space can become much more valuable."
          author="Angela Hughes, Luxury Cruise Specialist & CEO"
          authorImage={angelaImage}
        />
      </div>

      {/* 7. Fleet Overview by Vessel (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.fleetOverview.title}
        subtitle={pageData.fleetOverview.description}
        items={fleetCards}
      />

      {/* 8. Detailed Suite Categories 1 to 9 (InteractiveCabinComparison) */}
      <div id="suite-categories-breakdown">
        <InteractiveCabinComparison
          data={cabinComparisonData}
          images={cabinComparisonImages}
        />
      </div>

      {/* 9. Comprehensive Comparison Matrix Table (LuxuryCruiseComparisonTable) */}
      <div id="suite-comparison-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonTable.title}
          headers={pageData.comparisonTable.headers}
          rows={pageData.comparisonTable.rows}
        />
        <div className="max-w-4xl mx-auto px-6 py-4 text-center">
          <p className="font-sans text-xs text-slate-500 italic">
            {pageData.comparisonTable.disclaimer}
          </p>
        </div>
      </div>

      {/* 10. Which Ritz-Carlton Yacht Has the Best Suites? (GenericChecklistCards) */}
      <GenericChecklistCards
        title={pageData.yachtComparisonSection.title}
        subtitle={pageData.yachtComparisonSection.lead}
        cards={yachtComparisonCards}
      />

      {/* 11. Suite Inclusions vs Benefits Distinction (GenericChecklistCards) */}
      <GenericChecklistCards
        title="Suite Inclusions & Benefits Distinction"
        subtitle="WHAT IS INCLUDED VS. WHAT ADDS VALUE"
        cards={inclusionsAndBenefitsCards}
      />

      {/* 12. Are Ritz-Carlton Yacht Suites Worth the Upgrade? (CostValueAnalysisCards) */}
      <CostValueAnalysisCards
        title={pageData.worthUpgrade.title}
        subtitle={pageData.worthUpgrade.lead}
        includedTitle={pageData.worthUpgrade.largerSense.title}
        included={worthUpgradeLargerMapped}
        extrasTitle={pageData.worthUpgrade.smallerSense.title}
        extras={worthUpgradeSmallerMapped}
      />

      {/* 13. How to Choose the Right Suite (InteractivePlanningRoadmap - 5 Steps) */}
      <InteractivePlanningRoadmap
        title={pageData.selectionProcess.title}
        subtitle={pageData.selectionProcess.subtitle}
        steps={roadmapSteps}
      />

      {/* 14. Best Suite by Traveler Type (BrandPillarsShowcase) */}
      <BrandPillarsShowcase
        data={travelerTypePillars}
      />

            {/* 18. Mid-Page Consultation CTA (CenterCTA) */}
      <div id="suite-advisor-consultation">
        <CenterCTA
          title="Find Your Perfect Suite on Evrima, Ilma, or Luminara"
          description="Unlock expert deck plan selection, exclusive Virtuoso amenities, Suite Ambassador coordination, and Marriott Bonvoy point optimization."
          buttonText="Request Complimentary Suite Consultation"
          buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Suite%20Inquiry"
          theme="dark"
        />
      </div>

      {/* 15. Suite Location: Does the Deck Matter? (ThreeColumnGrid) */}
      <ThreeColumnGrid
        title={pageData.deckLocation.title}
        subtitle={pageData.deckLocation.lead}
        items={deckLocationCards}
      />

      {/* 16. Authority Box #2 - Largest Suite Benchmark */}
      <div className="max-w-5xl mx-auto px-6">
        <AuthorityBox
          title="LARGEST SUITE BENCHMARK & COMPARISON"
          content="On Evrima, the Owner's Suite is approximately 1,091 square feet with a 635-square-foot terrace, making it substantially larger than the yacht's other published suite categories. However, suite sizes differ between Evrima, Ilma and Luminara. For that reason, don't compare only the category name. Compare: Interior space + terrace + layout + location + amenities."
          author="Angela Hughes, Luxury Travel Advisor"
          authorImage={angelaImage}
        />
      </div>

      {/* 17. Suite Upgrade Strategy (BrandPillarsShowcase) */}
      <BrandPillarsShowcase
        data={upgradeStrategyPillars}
      />



      {/* 19. Angela Hughes Expert Credentials */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        bio={pageData.angelaPerspective.bio}
        heading={pageData.angelaPerspective.heading}
        text={pageData.angelaPerspective.text}
        image={angelaImage}
        badge="LUXURY YACHT EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        ctaText="Book With Angela Hughes"
        ctaLink="mailto:angela@tripsandships.com"
      />

      {/* 20. FAQ Accordion (All 16 FAQs) */}
      <FAQAccordion
        data={{
          title: "Ritz-Carlton Yacht Suites: Frequently Asked Questions",
          subtitle: "Expert answers to the most common questions regarding suite sizes, terraces, bathtubs, and upgrade strategies.",
          faqs: pageData.faqs
        }}
      />

      {/* 21. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Resources"
        subtitle="Deepen your research with comprehensive loyalty guides, brand face-offs, and destination itineraries."
        items={hubItems}
      />

      {/* 22. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Experience The Ritz-Carlton Yacht Collection?"
        description="Speak with our dedicated luxury cruise advisors to secure the best available suite, locked-in rates, and personalized stateroom placement."
        buttonText="Contact a Yacht Specialist"
        buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Cruise%20Booking"
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionSuites;
