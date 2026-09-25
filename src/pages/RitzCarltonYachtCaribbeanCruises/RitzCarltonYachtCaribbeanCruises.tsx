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
import CenterCTA from "@/components/ui/CenterCTA";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Author & Profile Images
import angelaImage from "@/assets/Media (2).jpg";

// Assets from assets/RitzCarltonYachtCaribbeanCruises (SEO Optimized)
// 1. Hero Background Image (Superyacht cruising crystal turquoise Caribbean waters)
import heroBgImg from "@/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cruises-hero.jpeg";

// 2. Executive Narrative Intro (PremiumIntro)
import introArchImg from "@/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-embarkation-luxury.jpeg";
import introInsetImg from "@/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-hospitality-lifestyle.jpeg";

// 3. Best Time Overview (EditorialFeatureShowcase)
import bestTimeImg from "@/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-best-time-weather.jpg";

// 4. Destinations Part 1 (ThreeColumnGrid)
import destBahamasImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-destination-bahamas-miami-roundtrips.jpg";
import destStBarthsImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-destination-st-barths-gustavia-yacht.jpg";
import destVirginIslandsImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-destination-virgin-islands-yacht-havens.jpeg";

// 5. British Virgin Islands Itineraries (DestinationFlipCards)
import bviJostImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-bvi-jost-van-dyke-white-bay.jpg";
import bviVirginGordaImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-bvi-virgin-gorda-the-baths.jpeg";
import bviNormanImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-bvi-norman-island-snorkeling.jpg";

// 6. Scenic Landscapes (ThreeColumnGrid)
import scenicStLuciaImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-scenic-st-lucia-pitons-yacht.jpeg";
import scenicAntiguaImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-scenic-antigua-harbor-beaches.jpeg";
import scenicGrenadinesImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-scenic-grenadines-tobago-cays.jpg";

// 7. Regional Departures (CinematicDestinations)
import depSanJuanImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-departure-san-juan-turnaround.jpeg";
import depBarbadosImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-departure-barbados-southern-islands.jpeg";
import depStMaartenImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-departure-st-maarten-anguilla.jpg";

// 8. Traveler Style Personas (ThreeColumnGrid)
import personaCouplesImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-couples-romance.jpeg";
import personaHoneymoonImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-honeymoon-suite-luxury.jpg";
import personaFirstTimerImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-first-time-yacht-travelers.jpeg";
import personaBeachImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-beach-lovers-coves.jpg";
import personaNatureActiveImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-nature-active-watersports.jpeg";
import personaFoodCultureImg from "@/assets/RitzCarltonYachtCaribbeanCruises/caribbean-traveler-food-culture-dining.jpg";

// 9. Miami vs San Juan Showdown (ContainedShowdown)
import showdownMiamiImg from "@/assets/RitzCarltonYachtCaribbeanCruises/showdown-miami-caribbean-departures.jpg";
import showdownSanJuanImg from "@/assets/RitzCarltonYachtCaribbeanCruises/showdown-san-juan-caribbean-departures.jpg";

// 10. 10-Step How to Choose Roadmap (InteractivePlanningRoadmap)
import stepVoyageLengthImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-voyage-length.jpg";
import stepItineraryFormatImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-itinerary-format.jpeg";
import stepYachtDeploymentImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-yacht-deployment-ilma.jpeg";
import stepSuiteSelectionImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-suite-selection.jpg";
import stepVacationBudgetImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-vacation-budget.jpeg";
import stepShoreExcursionsImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-shore-excursions.jpeg";
import stepMiamiHotelStayImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-miami-hotel-stay.jpg";
import stepFlightLogisticsImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-flight-logistics.jpeg";
import stepDiningSpaImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-dining-spa-reservations.jpg";
import stepAdvisorConsultationImg from "@/assets/RitzCarltonYachtCaribbeanCruises/roadmap-step-advisor-consultation.jpg";

// 11. Advisor Bento Grid (BentoGlassmorphismGrid)
import bentoRitzImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-ritz-carlton-yacht.jpeg";
import bentoOtherYachtsImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-other-luxury-yachts.jpeg";
import bentoSmallShipImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-luxury-small-ship.jpeg";
import bentoRiverImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-river-cruises.jpg";
import bentoCharterImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-private-yacht-charters.jpeg";
import bentoResortImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-luxury-resorts.jpg";
import bentoLandImg from "@/assets/RitzCarltonYachtCaribbeanCruises/bento-land-custom-itineraries.jpeg";


// 13. Final Bottom CTA Background (CenterCTA)
import ctaBgImg from "@/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cta-background.jpg";

const RitzCarltonYachtCaribbeanCruises = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Essential Considerations for Caribbean Yacht Voyages",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Part 1 Destinations (ThreeColumnGrid)
  const destPartOneImages = [destBahamasImg, destStBarthsImg, destVirginIslandsImg];
  const destinationsPartOneItems = pageData.destinationsPartOne.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: destPartOneImages[idx % destPartOneImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for British Virgin Islands (DestinationFlipCards)
  const bviImages = [bviJostImg, bviVirginGordaImg, bviNormanImg];
  const bviItems = pageData.bviItineraries.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: bviImages[idx % bviImages.length],
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 4. Data mapping for Scenic Landscapes & Southern Gems (ThreeColumnGrid)
  const scenicImages = [scenicStLuciaImg, scenicAntiguaImg, scenicGrenadinesImg];
  const scenicItems = pageData.scenicDestinations.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: scenicImages[idx % scenicImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 5. Data mapping for Departure Hubs & Open-Jaw Routes (CinematicDestinations)
  const departureImages = [depSanJuanImg, depBarbadosImg, depStMaartenImg];
  const departureItems = pageData.departureRoutes.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: departureImages[idx % departureImages.length],
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 6. Data mapping for Traveler Style Personas (ThreeColumnGrid)
  const personaImages = [
    personaCouplesImg,
    personaHoneymoonImg,
    personaFirstTimerImg,
    personaBeachImg,
    personaNatureActiveImg,
    personaFoodCultureImg,
  ];
  const personaItems = pageData.travelerPersonas.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: personaImages[idx % personaImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 7. Data mapping for 10-Step Decision Roadmap (InteractivePlanningRoadmap)
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

  // 8. Data mapping for Advisor Bento Comparison Grid (BentoGlassmorphismGrid)
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

  
  // 10. Comprehensive JSON-LD Schema (matching RitzCarltonYachtCollectionCost.jsx structure)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cruises-hero.jpeg",
          "caption": pageData.seo.title,
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cruises-hero.jpeg",
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
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises/#breadcrumb",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Caribbean Cruises",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-caribbean-cruises/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cruises-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCaribbeanCruises/ritz-carlton-yacht-caribbean-cruises-hero.jpeg" />
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
        primaryCtaText="Plan Your Caribbean Voyage"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Itineraries"
        secondaryCtaLink="#quick-answer-table"
        backgroundImage={heroBgImg}
      />

      {/* 4. Executive Narrative & Planning Criteria (PremiumIntro) */}
      <div id="itinerary-planning-philosophy">
        <PremiumIntro
          title="Ritz-Carlton Yacht Caribbean Cruises: Best Itineraries and When to Go"
          sections={introSections}
          image1={introArchImg}
          image2={introInsetImg}
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

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "PnttCkVBqbs",
          title: "Sailing the Caribbean with The Ritz-Carlton Yacht Collection",
          description: "Watch intimate Caribbean yachting come to life, from secluded BVI coves to iconic St. Barths harbors."
        }}
      />

      {/* 6. Best Time to Go & Seasonal Overview (EditorialFeatureShowcase) */}
      <div id="when-to-go">
        <EditorialFeatureShowcase
          title={pageData.bestTimeOverview.title}
          subtitle={pageData.bestTimeOverview.subtitle}
          features={pageData.bestTimeOverview.features}
          image={bestTimeImg}
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

      {/* 16. Inclusions vs. Shore Excursion Realities (CostValueAnalysisCards) */}
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

      {/* 17. How Long Should a Ritz-Carlton Caribbean Cruise Be? (GenericChecklistCards) */}
      <div id="voyage-durations">
        <GenericChecklistCards
          title={pageData.voyageDurationsBreakdown.title}
          subtitle={pageData.voyageDurationsBreakdown.subtitle}
          cards={pageData.voyageDurationsBreakdown.cards}
        />
      </div>

      {/* 18. Miami vs. San Juan Departure Showdown (ContainedShowdown) */}
      <div id="miami-vs-san-juan">
        <ContainedShowdown
          title={pageData.miamiVsSanJuanShowdown.title}
          brandA={{
            ...pageData.miamiVsSanJuanShowdown.brandA,
            image: showdownMiamiImg,
          }}
          brandB={{
            ...pageData.miamiVsSanJuanShowdown.brandB,
            image: showdownSanJuanImg,
          }}
        />
      </div>

      {/* 19. 10-Step How to Choose Roadmap (InteractivePlanningRoadmap) */}
      <div id="how-to-choose-roadmap">
        <InteractivePlanningRoadmap
          title={pageData.howToChooseRoadmap.title}
          subtitle={pageData.howToChooseRoadmap.subtitle}
          steps={roadmapSteps}
        />
      </div>

      {/* 20. Ritz-Carlton Yacht vs. Caribbean Resort (LuxuryCruiseComparisonTable) */}
      <div id="yacht-vs-resort">
        <LuxuryCruiseComparisonTable
          title={pageData.yachtVsResortTable.title}
          lead={pageData.yachtVsResortTable.lead}
          headers={pageData.yachtVsResortTable.headers}
          rows={pageData.yachtVsResortTable.rows}
          takeaway={pageData.yachtVsResortTable.takeaway}
        />
      </div>

      {/* 21. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid) */}
      <div id="advisor-value" className="relative bg-navy-950">
        <BentoGlassmorphismGrid
          title={pageData.advisorValue.title}
          subtitle={pageData.advisorValue.subtitle}
          bentoItems={advisorBentoItems}
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

      {/* 22. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
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

      {/* 23. Comprehensive 18 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Ritz-Carlton Yacht Caribbean Cruises: Frequently Asked Questions",
            subtitle: "Direct answers to common questions about Caribbean itineraries, seasons, destinations, and booking.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      
      {/* 25. Final Takeaway Narrative Summary */}
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

      {/* 26. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Caribbean Voyage?"
        subtitle="Connect with certified luxury yacht specialist Angela Hughes to secure locked-in rates, exclusive Virtuoso amenities, and personalized Caribbean trip curation."
        buttonText="Speak with a Yacht Specialist"
        buttonLink="/contact"
        image={ctaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCaribbeanCruises;
