
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared UI Components from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import DestinationFlipCards from "@/components/ui/DestinationFlipCards";
import CinematicDestinations from "@/components/ui/CinematicDestinations";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ProsConsCards from "@/components/ui/ProsConsCards";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";
// Commented-out image imports as per project conventions:
// import heroCaribbeanImg from "@/assets/images/ritz-caribbean-hero.jpg";
// import biminiBahamasImg from "@/assets/images/ritz-bimini-bahamas.jpg";
// import stBarthsImg from "@/assets/images/ritz-st-barths-gustavia.jpg";
// import virginGordaImg from "@/assets/images/ritz-virgin-gorda-baths.jpg";
// import stLuciaPitonsImg from "@/assets/images/ritz-st-lucia-pitons.jpg";
// import sanJuanHarborImg from "@/assets/images/ritz-san-juan-harbor.jpg";

const RitzCarltonYachtCaribbeanCruises = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Essential Considerations for Caribbean Yacht Voyages",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Part 1 Destinations (ThreeColumnGrid)
  const destinationsPartOneItems = pageData.destinationsPartOne.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for British Virgin Islands (ThreeColumnGrid)
  const bviItems = pageData.bviItineraries.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 4. Data mapping for Scenic Landscapes & Southern Gems (ThreeColumnGrid)
  const scenicItems = pageData.scenicDestinations.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 5. Data mapping for Departure Hubs & Open-Jaw Routes (ThreeColumnGrid)
  const departureItems = pageData.departureRoutes.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 6. Data mapping for Traveler Style Personas (ThreeColumnGrid)
  const personaItems = pageData.travelerPersonas.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 7. Data mapping for 10-Step Decision Roadmap (InteractivePlanningRoadmap)
  const roadmapSteps = pageData.howToChooseRoadmap.steps.map((step) => ({
    timeframe: step.timeframe,
    title: step.title,
    description: step.description,
    image: null,
  }));

  // 8. Data mapping for Hub Resources (InteractivePillarHubGrid)
  const hubItems = pageData.hubResources.map((res) => ({
    title: res.title,
    category: res.category,
    description: res.description,
    mainUrl: res.link,
    link: res.link,
  }));

  return (
    <div className="min-h-screen bg-slate-50 text-navy-950">
      {/* 1. Helmet SEO Metadata & Schema Graph */}
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(pageData.schema)}
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
        primaryCtaText="Plan Your Caribbean Voyage"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Itineraries"
        secondaryCtaLink="#quick-answer-table"
        // bgImage={heroCaribbeanImg}
      />

      {/* 4. Executive Narrative & Planning Criteria (PremiumIntro) */}
      <div id="itinerary-planning-philosophy">
        <PremiumIntro
          title="Ritz-Carlton Yacht Caribbean Cruises: Best Itineraries and When to Go"
          sections={introSections}
          highlightQuote="Choosing the right itinerary is about more than picking the longest cruise or the most famous island—it is about matching the voyage cadence to your travel lifestyle."
        />
      </div>

      {/* 5. Quick Answer Comparison Table: Best Caribbean Itineraries (LuxuryCruiseComparisonTable) */}
      <div id="quick-answer-table">
        <LuxuryCruiseComparisonTable
          title={pageData.quickAnswerTable.title}
          lead={pageData.quickAnswerTable.lead}
          headers={pageData.quickAnswerTable.headers}
          rows={pageData.quickAnswerTable.rows}
          takeaway={pageData.quickAnswerTable.takeaway}
        />
      </div>

      {/* 6. Best Time to Go & Seasonal Overview (EditorialFeatureShowcase) */}
      <div id="when-to-go">
        <EditorialFeatureShowcase
          title={pageData.bestTimeOverview.title}
          subtitle={pageData.bestTimeOverview.subtitle}
          features={pageData.bestTimeOverview.features}
          bgClass="bg-white"
        />
      </div>

      {/* 7. Seasons at a Glance Table (LuxuryCruiseComparisonTable) */}
      <div id="seasons-at-a-glance">
        <LuxuryCruiseComparisonTable
          title={pageData.seasonsAtAGlance.title}
          lead={pageData.seasonsAtAGlance.lead}
          headers={pageData.seasonsAtAGlance.headers}
          rows={pageData.seasonsAtAGlance.rows}
          takeaway={pageData.seasonsAtAGlance.takeaway}
        />
      </div>

      {/* 8. Destinations Part 1: Bahamas, Miami Round Trips, St. Barths (ThreeColumnGrid) */}
      <div id="signature-destinations">
        <ThreeColumnGrid
          title={pageData.destinationsPartOne.title}
          subtitle={pageData.destinationsPartOne.subtitle}
          items={destinationsPartOneItems}
        />
      </div>

      {/* 9. British Virgin Islands Itineraries (DestinationFlipCards) */}
      <div id="bvi-itineraries">
        <DestinationFlipCards
          title={pageData.bviItineraries.title}
          subtitle={pageData.bviItineraries.subtitle}
          items={bviItems}
        />
      </div>

      {/* 10. Scenic Landscapes: St. Lucia, Antigua & The Grenadines (ThreeColumnGrid) */}
      <div id="scenic-destinations">
        <ThreeColumnGrid
          title={pageData.scenicDestinations.title}
          subtitle={pageData.scenicDestinations.subtitle}
          items={scenicItems}
        />
      </div>

      {/* 11. Regional Departures & Open-Jaw Routes (CinematicDestinations) */}
      <div id="departure-routes">
        <CinematicDestinations
          title={pageData.departureRoutes.title}
          subtitle={pageData.departureRoutes.subtitle}
          items={departureItems}
        />
      </div>

      {/* 12. Which Itinerary Is Right for You by Duration (BrandPillarsShowcase) */}
      <div id="itinerary-duration-guide">
        <BrandPillarsShowcase data={pageData.durationShowcase} />
      </div>

      {/* 13. Best Itineraries by Traveler Style & Persona (ThreeColumnGrid) */}
      <div id="traveler-styles">
        <ThreeColumnGrid
          title={pageData.travelerPersonas.title}
          subtitle={pageData.travelerPersonas.subtitle}
          items={personaItems}
        />
      </div>

      {/* 14. What Is the Best Month for a Ritz-Carlton Caribbean Cruise? (LuxuryCruiseComparisonTable) */}
      <div id="best-month-to-cruise">
        <LuxuryCruiseComparisonTable
          title={pageData.bestMonthToCruise.title}
          lead={pageData.bestMonthToCruise.lead}
          headers={pageData.bestMonthToCruise.headers}
          rows={pageData.bestMonthToCruise.rows}
          takeaway={pageData.bestMonthToCruise.takeaway}
        />
      </div>

      {/* 15. Holiday Sailings & Seasonal Weather / Hurricane Awareness (ProsConsCards) */}
      <div id="holiday-and-weather">
        <ProsConsCards
          title={pageData.holidayAndWeather.title}
          prosTitle={pageData.holidayAndWeather.prosTitle}
          bestFor={pageData.holidayAndWeather.bestFor}
          consTitle={pageData.holidayAndWeather.consTitle}
          notBestFor={pageData.holidayAndWeather.notBestFor}
          bottomNote={pageData.holidayAndWeather.bottomNote}
          type="compare"
        />
      </div>

      {/* 15. Inclusions vs. Shore Excursion Realities (CostValueAnalysisCards) */}
      <div id="inclusions-and-excursions">
        <CostValueAnalysisCards
          title={pageData.inclusionsAndExcursions.title}
          subtitle={pageData.inclusionsAndExcursions.subtitle}
          includedTitle={pageData.inclusionsAndExcursions.includedTitle}
          included={pageData.inclusionsAndExcursions.included}
          extrasTitle={pageData.inclusionsAndExcursions.extrasTitle}
          extras={pageData.inclusionsAndExcursions.extras}
        />
      </div>

      {/* 16. How Long Should a Ritz-Carlton Caribbean Cruise Be? (GenericChecklistCards) */}
      <div id="voyage-durations">
        <GenericChecklistCards
          title={pageData.voyageDurationsBreakdown.title}
          subtitle={pageData.voyageDurationsBreakdown.subtitle}
          cards={pageData.voyageDurationsBreakdown.cards}
        />
      </div>

      {/* 17. Miami vs. San Juan Departure Showdown (ContainedShowdown) */}
      <div id="miami-vs-san-juan">
        <ContainedShowdown
          title={pageData.miamiVsSanJuanShowdown.title}
          brandA={pageData.miamiVsSanJuanShowdown.brandA}
          brandB={pageData.miamiVsSanJuanShowdown.brandB}
        />
      </div>

      {/* 17. 10-Step How to Choose Roadmap (InteractivePlanningRoadmap) */}
      <div id="how-to-choose-roadmap">
        <InteractivePlanningRoadmap
          title={pageData.howToChooseRoadmap.title}
          subtitle={pageData.howToChooseRoadmap.subtitle}
          steps={roadmapSteps}
        />
      </div>

      {/* 18. Ritz-Carlton Yacht vs. Caribbean Resort (LuxuryCruiseComparisonTable) */}
      <div id="yacht-vs-resort">
        <LuxuryCruiseComparisonTable
          title={pageData.yachtVsResortTable.title}
          lead={pageData.yachtVsResortTable.lead}
          headers={pageData.yachtVsResortTable.headers}
          rows={pageData.yachtVsResortTable.rows}
          takeaway={pageData.yachtVsResortTable.takeaway}
        />
      </div>

      {/* 19. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid) */}
      <div id="advisor-value" className="relative bg-navy-950">
        <BentoGlassmorphismGrid
          title={pageData.advisorValue.title}
          subtitle={pageData.advisorValue.subtitle}
          bentoItems={pageData.advisorValue.bentoItems}
        />
        {pageData.advisorValue.takeaway && (
          <div className="max-w-4xl mx-auto px-6 -mt-10 pb-20 relative z-20">
            <div className="bg-white/5 backdrop-blur-xl text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl text-center">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold mb-3 block">
                The Core Objective
              </span>
              <p className="font-display text-xl md:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto">
                "{pageData.advisorValue.takeaway}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 20. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        heading={pageData.angelaPerspective.heading}
        bio={pageData.angelaPerspective.bio}
        image={angelaImage}
        text={pageData.angelaPerspective.text}
      />

      {/* 21. Comprehensive 18 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Ritz-Carlton Yacht Caribbean Cruises: Frequently Asked Questions",
            subtitle: "Direct answers to common questions about Caribbean itineraries, seasons, destinations, and booking.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      {/* 22. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Guides"
        subtitle="Deepen your luxury yacht knowledge with suite guides, shore excursion pricing, dress codes, and fleet comparisons."
        items={hubItems}
      />

      {/* 23. Final Takeaway Narrative Summary */}
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

      {/* 24. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Caribbean Voyage?"
        subtitle="Connect with certified luxury yacht specialist Angela Hughes to secure locked-in rates, exclusive Virtuoso amenities, and personalized Caribbean trip curation."
        buttonText="Speak with a Yacht Specialist"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCaribbeanCruises;
