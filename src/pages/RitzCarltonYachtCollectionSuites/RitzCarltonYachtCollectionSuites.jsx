import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Images
import angelaImage from '@/assets/Media (2).jpg';

// Hero
import suitesHeroImg from '@/assets/RitzCarltonYachtCollectionSuites/ritz-carlton-suites-hero.jpg';

// Executive Narrative Intro (PremiumIntro)
import introTerraceImg from '@/assets/RitzCarltonYachtCollectionSuites/suites-intro-terrace-lifestyle.jpg';
import introInteriorImg from '@/assets/RitzCarltonYachtCollectionSuites/suites-intro-luxury-interior.jpg';

// Fleet Overview (ThreeColumnGrid - 3 Ships)
import fleetEvrimaImg from '@/assets/RitzCarltonYachtCollectionSuites/fleet-evrima-suites.jpg';
import fleetIlmaImg from '@/assets/RitzCarltonYachtCollectionSuites/fleet-ilma-suites.jpg';
import fleetLuminaraImg from '@/assets/RitzCarltonYachtCollectionSuites/fleet-luminara-suites.jpg';

// 9 Detailed Suite Categories (InteractiveCabinComparison)
import suiteOwnersImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-owners-suite.jpg';
import suiteViewImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-view-suite.jpg';
import suiteLoftImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-loft-suite.jpg';
import suiteGrandImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-grand-suite.jpg';
import suiteSignatureImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-signature-suite.jpg';
import suiteConciergeImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-concierge-suite.jpg';
import suiteTerraceImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-terrace-suite.jpg';
import suiteIlmaLuminaraOwnersImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-ilma-luminara-owners.jpg';
import suiteIlmaLuminaraViewConciergeImg from '@/assets/RitzCarltonYachtCollectionSuites/suite-category-ilma-luminara-view-concierge.jpg';

// Roadmap (5 Steps)
import step1SpaceImg from '@/assets/RitzCarltonYachtCollectionSuites/step1-determine-interior-space.jpg';
import step2TerraceImg from '@/assets/RitzCarltonYachtCollectionSuites/step2-evaluate-terrace-space.jpg';
import step3LoftImg from '@/assets/RitzCarltonYachtCollectionSuites/step3-review-two-story-loft-layout.jpg';
import step4DeckImg from '@/assets/RitzCarltonYachtCollectionSuites/step4-assess-deck-and-position.jpg';
import step5YachtImg from '@/assets/RitzCarltonYachtCollectionSuites/step5-compare-evrima-ilma-luminara.jpg';

// Deck Locations (Four Cards)
import deckMidshipImg from '@/assets/RitzCarltonYachtCollectionSuites/deck-location-midship-stability.jpg';
import deckHighImg from '@/assets/RitzCarltonYachtCollectionSuites/deck-location-high-decks-views.jpg';
import deckLowImg from '@/assets/RitzCarltonYachtCollectionSuites/deck-location-low-decks-marina.jpg';
import deckPublicImg from '@/assets/RitzCarltonYachtCollectionSuites/deck-location-public-areas.jpg';

// Mid CTA
import midCtaBgImg from '@/assets/RitzCarltonYachtCollectionSuites/suites-mid-cta-background.jpg';


// Final CTA
import finalCtaBgImg from '@/assets/RitzCarltonYachtCollectionSuites/suites-final-cta-background.jpg';

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
import VideoEmbed from '@/components/ui/VideoEmbed';

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
  const fleetImages = [fleetEvrimaImg, fleetIlmaImg, fleetLuminaraImg];
  const fleetCards = pageData.fleetOverview.ships.map((ship, idx) => ({
    title: ship.name,
    category: ship.suitesCount,
    description: `${ship.tagline}. ${ship.description} Included categories: ${ship.categories.join(', ')}. ${ship.specialNote}`,
    image: fleetImages[idx % fleetImages.length],
    placeholderLabel: ship.name
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
    suiteOwnersImg,
    suiteViewImg,
    suiteLoftImg,
    suiteGrandImg,
    suiteSignatureImg,
    suiteConciergeImg,
    suiteTerraceImg,
    suiteIlmaLuminaraOwnersImg,
    suiteIlmaLuminaraViewConciergeImg
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
  const roadmapImages = [
    step1SpaceImg,
    step2TerraceImg,
    step3LoftImg,
    step4DeckImg,
    step5YachtImg
  ];
  const roadmapSteps = pageData.selectionProcess.steps.map((st, idx) => ({
    timeframe: `Step ${st.step}`,
    title: st.title,
    description: st.description,
    image: roadmapImages[idx % roadmapImages.length],
    placeholderLabel: `STEP 0${st.step} PLACEHOLDER`
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
  const deckImages = [deckMidshipImg, deckHighImg, deckLowImg, deckPublicImg];
  const deckLocationCards = pageData.deckLocation.locations.map((loc, idx) => ({
    title: loc.area,
    category: "Position Analysis",
    description: loc.detail,
    image: deckImages[idx % deckImages.length],
    placeholderLabel: loc.area
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

  // Complete Schema JSON-LD Graph (1:1 with RitzCarltonYachtCollectionCost schema structure)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-suites/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-suites",
        "name": pageData.meta.ogTitle || pageData.meta.seoTitle,
        "headline": pageData.hero.title,
        "description": pageData.meta.description,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionSuites/ritz-carlton-suites-hero.jpg",
          "caption": pageData.hero.title
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionSuites/ritz-carlton-suites-hero.jpg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "Luxury Safaris",
          "Expedition Cruises",
          "River Cruising",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-suites/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ritz-Carlton Yacht Collection",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Collection Suites",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-suites"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-suites/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      {/* 1. Helmet SEO Metadata & Schema Graph */}
      <Helmet>
        <title>{pageData.meta.seoTitle}</title>
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={[pageData.meta.primaryKeyword, ...pageData.meta.secondaryKeywords].join(', ')} />
        <link rel="canonical" href={pageData.meta.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.meta.ogTitle || pageData.meta.seoTitle} />
        <meta property="og:description" content={pageData.meta.description} />
        <meta property="og:url" content={pageData.meta.canonical} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionSuites/ritz-carlton-suites-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta.ogTitle || pageData.meta.seoTitle} />
        <meta name="twitter:description" content={pageData.meta.description} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionSuites/ritz-carlton-suites-hero.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
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
        secondaryCtaLink="/contact"
        backgroundImage={suitesHeroImg}
        bgPosition="bg-center object-cover"
        overlayClassName="bg-gradient-to-b from-navy-950/55 via-navy-950/15 to-navy-950/70"
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <PremiumIntro
        sections={introSections}
        image1={introTerraceImg}
        image2={introInteriorImg}
        alt1="Ritz-Carlton Yacht Suite Private Terrace"
        alt2="Ritz-Carlton Yacht Luxury Suite Interior"
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
          buttonLink="/contact"
          image={midCtaBgImg}
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
        ctaLink="/contact"
      />

      {/* 20. FAQ Accordion (All 16 FAQs) */}
      <FAQAccordion
        data={{
          title: "Ritz-Carlton Yacht Suites: Frequently Asked Questions",
          subtitle: "Expert answers to the most common questions regarding suite sizes, terraces, bathtubs, and upgrade strategies.",
          faqs: pageData.faqs
        }}
      />

      {/* 21. Video Section Component (VideoEmbed Component) ─── */}
      <VideoEmbed
        data={{
          youtubeId: "sQPnGRkiLdg",
          title: "Ritz-Carlton Yacht All-Suite Experience",
          description: "Take a visual tour inside the expansive suites, private ocean-view terraces, and personalized Suite Ambassador service."
        }}
      />

      {/* 22. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Experience The Ritz-Carlton Yacht Collection?"
        description="Speak with our dedicated luxury cruise advisors to secure the best available suite, locked-in rates, and personalized stateroom placement."
        buttonText="Contact a Yacht Specialist"
        buttonLink="/contact"
        image={finalCtaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionSuites;
