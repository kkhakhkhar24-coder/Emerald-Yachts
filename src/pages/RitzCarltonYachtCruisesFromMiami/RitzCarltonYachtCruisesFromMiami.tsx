import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared UI Components from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import AuthorityBox from "@/components/ui/AuthorityBox";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ProsConsCards from "@/components/ui/ProsConsCards";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import DualPhilosophyShowcase from "@/components/ui/DualPhilosophyShowcase";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CenterCTA from "@/components/ui/CenterCTA";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Author & Profile Images
import angelaImage from "@/assets/Media (2).jpg";

// Assets from assets/RitzCarltonYachtCruisesFromMiami (SEO Optimized)
// 1. Hero Background Image (Intimate luxury superyacht cruising Miami & Caribbean waters)
import heroBgImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-cruises-from-miami-hero.jpeg";

// 2. Executive Narrative Intro (PremiumIntro)
import introArchImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-embarkation-luxury.jpeg";
import introInsetImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-lifestyle-hospitality.jpeg";

// 2B. Onboard Inclusions Feature (EditorialFeatureShowcase)
import inclusionsFeatureImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-onboard-inclusions-luxury.jpeg";

// 2C. Traveler Fit Comparison (ContainedShowdown)
import travelerFitConsiderImg from "@/assets/RitzCarltonYachtCruisesFromMiami/who-should-consider-miami-yacht-cruise.jpg";
import travelerFitDifferentImg from "@/assets/RitzCarltonYachtCruisesFromMiami/who-may-prefer-different-vacation.jpg";

// 3. Destinations Overview (ThreeColumnGrid)
import destBahamasImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-bahamas-roundtrip.jpeg";
import destSanJuanImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-to-san-juan-caribbean.jpg";
import destHarborsImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-caribbean-boutique-harbors.jpg";

// 4. Marina Day Feature (AsymmetricStoryIntro)
import marinaDayPlatformImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-marina-day-watersports-platform.jpeg";
import marinaDayTerraceImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-marina-terrace-caribbean-sea.jpeg";

// 5. Dual Philosophy Comparison (DualPhilosophyShowcase)
import traditionalCruiseImg from "@/assets/RitzCarltonYachtCruisesFromMiami/traditional-cruise-scale-comparison.jpg";
import ritzAllSuiteImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-all-suite-private-terrace.jpeg";

// 6. Traveler Suitability (ThreeColumnGrid)
import suitCouplesImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-couples-romantic-getaway.jpeg";
import suitFirstTimerImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-first-time-cruisers-luxury-suite.jpg";
import suitFamilyImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-family-marina-activities.jpg";

// 7. Pre-Cruise Miami Stay & Logistics (ThreeColumnGrid)
import stayHotelImg from "@/assets/RitzCarltonYachtCruisesFromMiami/miami-south-beach-brickell-luxury-hotel-stay.jpg";
import stayTerminalImg from "@/assets/RitzCarltonYachtCruisesFromMiami/portmiami-private-superyacht-terminal-embarkation.jpg";
import stayValetImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-concierge-luggage-valet-transfers.jpg";

// 8. 10-Step How to Choose Roadmap (InteractivePlanningRoadmap)
import stepVoyageLengthImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-voyage-length.jpg";
import stepItineraryFormatImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-itinerary-format.jpeg";
import stepYachtDeploymentImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-yacht-deployment-ilma.jpeg";
import stepSuiteSelectionImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-suite-selection.jpg";
import stepVacationBudgetImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-vacation-budget.jpeg";
import stepShoreExcursionsImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-shore-excursions.jpeg";
import stepMiamiHotelStayImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-miami-hotel-stay.jpg";
import stepFlightLogisticsImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-flight-logistics.jpeg";
import stepDiningSpaImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-dining-spa-reservations.jpg";
import stepAdvisorConsultationImg from "@/assets/RitzCarltonYachtCruisesFromMiami/roadmap-step-advisor-consultation.jpg";

// 9. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid)
import bentoRitzImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-ritz-carlton-yacht.jpeg";
import bentoOtherYachtsImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-other-luxury-yachts.jpeg";
import bentoSmallShipImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-luxury-small-ship.jpeg";
import bentoRiverImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-river-cruises.jpg";
import bentoCharterImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-private-yacht-charters.jpeg";
import bentoResortImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-luxury-resorts.jpg";
import bentoLandImg from "@/assets/RitzCarltonYachtCruisesFromMiami/bento-land-custom-itineraries.jpeg";


// 11. Final Bottom CTA Image (CenterCTA)
import ctaBgImg from "@/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-miami-cta-background.jpg";

const RitzCarltonYachtCruisesFromMiami = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Essential Considerations for Miami Yacht Departures",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Destinations (ThreeColumnGrid)
  const destinationImages = [
    destBahamasImg,
    destSanJuanImg,
    destHarborsImg,
  ];
  const destinationItems = pageData.destinationsOverview.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: destinationImages[idx % destinationImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Traveler Suitability (ThreeColumnGrid)
  const suitabilityImages = [
    suitCouplesImg,
    suitFirstTimerImg,
    suitFamilyImg,
  ];
  const travelerSuitabilityItems = pageData.travelerSuitability.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: suitabilityImages[idx % suitabilityImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 4. Data mapping for Pre-Cruise Miami Stay (ThreeColumnGrid)
  const miamiStayImages = [
    stayHotelImg,
    stayTerminalImg,
    stayValetImg,
  ];
  const miamiStayItems = pageData.miamiPreCruiseStay.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: miamiStayImages[idx % miamiStayImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 5. Data mapping for 10-Step How to Choose Roadmap (InteractivePlanningRoadmap)
  const roadmapImages = [
    stepVoyageLengthImg,
    stepItineraryFormatImg,
    stepYachtDeploymentImg,
    stepSuiteSelectionImg,
    stepVacationBudgetImg,
    stepShoreExcursionsImg,
    stepMiamiHotelStayImg,
    stepFlightLogisticsImg,
    stepDiningSpaImg,
    stepAdvisorConsultationImg,
  ];
  const roadmapSteps = pageData.howToChooseRoadmap.steps.map((step, idx) => ({
    timeframe: step.timeframe,
    title: step.title,
    description: step.description,
    image: roadmapImages[idx % roadmapImages.length],
  }));

  // 6. Data mapping for Advisor Bento Comparison Grid (BentoGlassmorphismGrid)
  const bentoImages = [
    bentoRitzImg,
    bentoOtherYachtsImg,
    bentoSmallShipImg,
    bentoRiverImg,
    bentoCharterImg,
    bentoResortImg,
    bentoLandImg,
  ];
  const advisorBentoItems = pageData.advisorValue.bentoItems.map((item, idx) => ({
    ...item,
    image: bentoImages[idx % bentoImages.length],
  }));

  
  // 8. Comprehensive JSON-LD Schema (matching RitzCarltonYachtCollectionCost.jsx structure)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-cruises-from-miami-hero.jpeg",
          "caption": pageData.seo.title,
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-cruises-from-miami-hero.jpeg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization",
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website",
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami/#breadcrumb",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization",
        },
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
          "caption": "Angela Hughes - Luxury Travel Expert",
        },
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization",
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "Luxury Safaris",
          "Expedition Cruises",
          "River Cruising",
          "Premium Travel",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Cruises from Miami",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-cruises-from-miami/#faq",
        "mainEntity": pageData.faqs.map((faq) => ({
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
    <div className="min-h-screen bg-slate-50 text-navy-950">
      {/* 1. Helmet SEO Metadata & Schema Graph */}
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.secondaryKeywords?.join(", ")} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-cruises-from-miami-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCruisesFromMiami/ritz-carlton-yacht-cruises-from-miami-hero.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* 2. Global Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        backgroundImage={heroBgImg}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <div id="content">
        <PremiumIntro
          eyebrow={pageData.executivePhilosophy.badge}
          title={pageData.executivePhilosophy.title}
          highlight={pageData.executivePhilosophy.highlight}
          quote={pageData.executivePhilosophy.quote}
          sections={introSections}
          image1={introArchImg}
          image2={introInsetImg}
          watermarkText="MIAMI"
        />
      </div>

      {/* 5. Quick Answer Table: What Are Ritz-Carlton Miami Yacht Cruises Like? (LuxuryCruiseComparisonTable) */}
      <div id="quick-answer-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.quickAnswerTable.title}
          headers={pageData.quickAnswerTable.headers}
          rows={pageData.quickAnswerTable.rows}
        />
      </div>

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "b0FqYRs96R4",
          title: "Ritz-Carlton Yacht Departures from Miami",
          description: "Take a visual tour of luxury yachting from PortMiami to the pristine harbors of the Bahamas and Caribbean."
        }}
      />

      {/* 6. Where Do Ritz-Carlton Yacht Cruises from Miami Go? (ThreeColumnGrid) */}
      <div id="miami-destinations">
        <ThreeColumnGrid
          title={pageData.destinationsOverview.title}
          subtitle={pageData.destinationsOverview.subtitle}
          items={destinationItems}
        />
      </div>

      {/* 7. How Long Are Ritz-Carlton Yacht Cruises from Miami? (GenericChecklistCards) */}
      <div id="voyage-lengths">
        <GenericChecklistCards
          title={pageData.voyageLengths.title}
          subtitle={pageData.voyageLengths.subtitle}
          cards={pageData.voyageLengths.cards}
        />
      </div>

      {/* 8. Which Ritz-Carlton Yacht Sails from Miami? (AuthorityBox) */}
      <div id="yacht-deployment" className="max-w-5xl mx-auto px-6 py-12">
        <AuthorityBox
          title={pageData.yachtDeployment.title}
          content={pageData.yachtDeployment.text}
          author="Angela Hughes, CEO & Luxury Yacht Specialist"
          authorImage={angelaImage}
        />
      </div>

      {/* 9. What Is Included on a Ritz-Carlton Yacht Cruise from Miami? (EditorialFeatureShowcase) */}
      <div id="onboard-inclusions">
        <EditorialFeatureShowcase
          title={pageData.onboardInclusions.title}
          subtitle={pageData.onboardInclusions.subtitle}
          features={pageData.onboardInclusions.features}
          image={inclusionsFeatureImg}
          bgClass="bg-white"
        />
      </div>

      {/* 10. Are Shore Excursions Included & Total Vacation Cost (CostValueAnalysisCards) */}
      <div id="shore-excursions-budget">
        <CostValueAnalysisCards
          title={pageData.shoreExcursionsAndBudget.title}
          subtitle={pageData.shoreExcursionsAndBudget.subtitle}
          includedTitle={pageData.shoreExcursionsAndBudget.includedTitle}
          included={pageData.shoreExcursionsAndBudget.included}
          extrasTitle={pageData.shoreExcursionsAndBudget.extrasTitle}
          extras={pageData.shoreExcursionsAndBudget.extras}
        />
      </div>

      {/* 11. What Is a Marina Day? (AsymmetricStoryIntro) */}
      <div id="marina-day">
        <AsymmetricStoryIntro
          eyebrow={pageData.marinaDayFeature.eyebrow}
          heading={pageData.marinaDayFeature.title}
          paragraphs={pageData.marinaDayFeature.paragraphs}
          highlights={pageData.marinaDayFeature.highlights}
          image1={marinaDayPlatformImg}
          image2={marinaDayTerraceImg}
        />
      </div>

      {/* 12. Is It Like a Traditional Cruise? (DualPhilosophyShowcase) */}
      <div id="traditional-cruise-comparison">
        <DualPhilosophyShowcase
          data={pageData.yachtVsTraditionalCruise}
          imageSailing={traditionalCruiseImg}
          imageAllSuite={ritzAllSuiteImg}
        />
      </div>

      {/* 13. Traveler Suitability: First-Timers, Couples & Honeymoons (ThreeColumnGrid) */}
      
      <div id="traveler-suitability">
        <ThreeColumnGrid
          title={pageData.travelerSuitability.title}
          subtitle={pageData.travelerSuitability.subtitle}
          items={travelerSuitabilityItems}
        />
      </div>

      {/* 14. Miami Round Trip vs. Miami to San Juan (LuxuryCruiseComparisonTable) */}
      <div id="miami-vs-san-juan">
        <LuxuryCruiseComparisonTable
          title={pageData.miamiRoundTripVsSanJuan.title}
          headers={pageData.miamiRoundTripVsSanJuan.headers}
          rows={pageData.miamiRoundTripVsSanJuan.rows}
        />
      </div>

      {/* 15. Dress Code & All-Inclusive Details (BrandPillarsShowcase) */}
      <div id="dress-code-inclusions">
        <BrandPillarsShowcase data={pageData.dressCodeAndAllInclusive} />
      </div>

      {/* 16. Pre-Cruise Miami Stay & Embarkation Logistics (ThreeColumnGrid) */}
      <div id="miami-pre-cruise">
        <ThreeColumnGrid
          title={pageData.miamiPreCruiseStay.title}
          subtitle={pageData.miamiPreCruiseStay.subtitle}
          items={miamiStayItems}
        />
      </div>

      {/* 17. Who Should Consider vs. Who May Want a Different Vacation (ContainedShowdown) */}
      <div id="traveler-fit">
        <ContainedShowdown
          title={pageData.travelerFitGrid.title}
          brandA={{
            ...pageData.travelerFitGrid.brandA,
            image: travelerFitConsiderImg,
          }}
          brandB={{
            ...pageData.travelerFitGrid.brandB,
            image: travelerFitDifferentImg,
          }}
        />
      </div>

      {/* 18. Cost Breakdown & Is It Worth Considering? (ProsConsCards) */}
      <div id="cost-and-worth">
        <ProsConsCards
          title={pageData.costAndWorthConsidering.title}
          prosTitle={pageData.costAndWorthConsidering.prosTitle}
          bestFor={pageData.costAndWorthConsidering.bestFor}
          consTitle={pageData.costAndWorthConsidering.consTitle}
          notBestFor={pageData.costAndWorthConsidering.notBestFor}
          type="compare"
        />
      </div>

      {/* 19. Ritz-Carlton Yacht vs. Luxury Caribbean Resort (LuxuryCruiseComparisonTable) */}
      <div id="yacht-vs-resort">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonVsResort.title}
          headers={pageData.comparisonVsResort.headers}
          rows={pageData.comparisonVsResort.rows}
        />
      </div>

      {/* 20. 10-Step How to Choose Roadmap (InteractivePlanningRoadmap) */}
      <div id="how-to-choose">
        <InteractivePlanningRoadmap
          title={pageData.howToChooseRoadmap.title}
          subtitle={pageData.howToChooseRoadmap.subtitle}
          steps={roadmapSteps}
        />
      </div>

      {/* 21. 15 Questions to Ask Before Booking (GenericChecklistCards) */}
      <div id="advisor-questions">
        <GenericChecklistCards
          title={pageData.questionsToAskBeforeBooking.title}
          subtitle={pageData.questionsToAskBeforeBooking.subtitle}
          cards={pageData.questionsToAskBeforeBooking.cards}
        />
      </div>

      {/* 22. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid) */}
      <div id="advisor-consultation" className="relative bg-navy-950">
        <BentoGlassmorphismGrid
          title={pageData.advisorValue.title}
          subtitle={pageData.advisorValue.subtitle}
          bentoItems={advisorBentoItems}
        />
        {pageData.advisorValue.takeaway && (
          <div className="max-w-4xl mx-auto px-6 -mt-10 pb-20 relative z-20">
            <div className="bg-white/5 backdrop-blur-xl text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl text-center">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold mb-3 block">
                The Core Principle
              </span>
              <p className="font-display text-xl md:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto">
                "{pageData.advisorValue.takeaway}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 23. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        heading={pageData.angelaPerspective.heading}
        bio={pageData.angelaPerspective.bio}
        image={angelaImage}
        text={pageData.angelaPerspective.text}
        paragraphs={[
          pageData.angelaPerspective.bio,
          pageData.angelaPerspective.text
        ]}
        ctaText="Book With Angela Hughes"
        ctaLink="/contact"
      />

      {/* 24. Comprehensive FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions: Miami Yacht Departures",
            subtitle: "Direct answers to essential questions about The Ritz-Carlton Yacht Collection sailings from Miami.",
            faqs: pageData.faqs,
          }}
        />
      </div>

            {/* 26. Final Takeaway Narrative Summary */}
      <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6">
            {pageData.finalAnswer.title}
          </h2>
          <p className="font-sans text-xl text-navy-800 font-medium leading-relaxed mb-6">
            {pageData.finalAnswer.lead}
          </p>
          <div className="space-y-4 text-slate-600 font-sans text-base leading-relaxed max-w-3xl mx-auto text-left">
            {pageData.finalAnswer.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 27. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Plan Your Miami Yacht Cruise?"
        subtitle="Connect with certified luxury yacht specialist Angela Hughes to secure locked-in rates, exclusive Virtuoso amenities, and personalized Miami trip curation."
        buttonText="Speak with a Yacht Specialist"
        buttonLink="/contact"
        image={ctaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCruisesFromMiami;
