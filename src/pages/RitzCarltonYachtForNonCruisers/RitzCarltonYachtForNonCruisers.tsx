import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import DualPhilosophyShowcase from "@/components/ui/DualPhilosophyShowcase";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import AuthorityBox from "@/components/ui/AuthorityBox";
import CulinaryMenuShowcase from "@/components/ui/CulinaryMenuShowcase";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CenterCTA from "@/components/ui/CenterCTA";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Author & Profile Images
import angelaImage from "@/assets/Media (2).jpg";

// Assets from assets/RitzCarltonYachtForNonCruisers (SEO Optimized)
// 1. Hero Background Image (intimate superyacht against coastal scenery)
import heroBgImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-non-cruisers-luxury-yachting-hero.jpeg";

// 2. Executive Narrative Intro (PremiumIntro)
import introArchImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-relaxed-embarkation-no-crowds.jpeg";
import introInsetImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-afternoon-tea-lifestyle.jpeg";

// 3. Crowds & Scale Breakdown (EditorialFeatureShowcase)
import crowdsAndScaleImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-uncrowded-pool-deck.jpg";

// 3B. Traditional Cruise Comparison (AsymmetricStoryIntro - Section 5)
import traditionalComparisonMainImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-traditional-cruise-comparison-sorrento.jpeg";
import traditionalComparisonScaleImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-superyacht-vessel-scale.jpeg";

// 4. Hotel vs. Yacht Philosophy (DualPhilosophyShowcase)
import hotelResortSuiteImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-owners-suite-resort-terrace.jpeg";
import yachtSeaMotionImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-sailing-open-ocean-motion.jpeg";

// 5. Relaxation & Activity Freedom (ThreeColumnGrid)
import relaxationSuiteImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-private-suite-terrace-leisure.jpg";
import relaxationWellnessImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-spa-wellness-terrace.jpg";
import relaxationDestinationImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-marina-watersports-destination.jpeg";

// 6. Dining In-Depth (CulinaryMenuShowcase)
import diningRestaurantsImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-mistral-open-seating-dining.jpg";
import diningInSuiteImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-24-hour-in-suite-dining.jpeg";
import diningBeveragesImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-living-room-premium-beverages-bar.jpg";
import diningSpecialtyImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-memori-specialty-fine-dining.jpg";

// 7. Traveler Personas (ThreeColumnGrid)
import personaCouplesImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-couples-romance-caribbean.jpeg";
import personaHoneymoonImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-loft-suite-honeymoon-luxury.jpg";
import personaFamilyImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-family-watersports-platform.jpeg";
import personaSoloImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-observation-terrace-solo-traveler.jpg";

// 8. Decision Framework Roadmap (InteractivePlanningRoadmap)
import roadmapCrowdsImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-pool-house-small-crowds-decision.jpg";
import roadmapFormalImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-relaxed-dress-code-sophisticated.jpeg";
import roadmapEntertainmentImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-living-room-premium-beverages-bar.jpg";
import roadmapDiningImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-mistral-flexible-open-seating.jpg";
import roadmapOceanImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-marina-sea-access-calm-waters.jpg";
import roadmapDestinationsImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-kotor-multiple-destination-ports.jpg";
import roadmapHotelImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-grand-suite-luxury-hotel-comfort.jpg";

// 8B. First Cruise & Brand Distinction (AsymmetricStoryIntro - Section 18)
import firstCruiseSuiteImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-view-suite-first-time-cruiser.jpg";
import firstCruiseLifestyleImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-lifestyle-drone-destination.jpeg";

// 9. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid)
import bentoRitzYachtImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-collection-advisor-travel-style.jpeg";
import bentoMegaShipImg from "@/assets/RitzCarltonYachtForNonCruisers/traditional-mega-cruise-ship-comparison.jpg";
import bentoSmallShipImg from "@/assets/RitzCarltonYachtForNonCruisers/luxury-small-ship-cruise-comparison.jpg";
import bentoRiverImg from "@/assets/RitzCarltonYachtForNonCruisers/river-cruise-destination-comparison.jpg";
import bentoCharterImg from "@/assets/RitzCarltonYachtForNonCruisers/private-yacht-charter-comparison.jpeg";
import bentoResortImg from "@/assets/RitzCarltonYachtForNonCruisers/luxury-resort-vacation-comparison.jpg";
import bentoLandImg from "@/assets/RitzCarltonYachtForNonCruisers/land-based-custom-itinerary-comparison.jpeg";


// 11. Final CTA Image (CenterCTA)
import ctaBgImg from "@/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-for-non-cruisers-cta-background.jpg";

const RitzCarltonYachtForNonCruisers = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Understanding the Core Distinction",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Why Non-Cruisers Like It (BrandPillarsShowcase)
  const whyNonCruisersPillars = {
    title: pageData.whyNonCruisersLikeIt.title,
    subtitle: pageData.whyNonCruisersLikeIt.subtitle,
    pillars: pageData.whyNonCruisersLikeIt.pillars,
  };

  // 3. Data mapping for Relaxation & Activity Categories (ThreeColumnGrid with Images)
  const relaxationImages = [relaxationSuiteImg, relaxationWellnessImg, relaxationDestinationImg];
  const relaxationItems = pageData.relaxationAndActivities.items.map((item, idx) => ({
    title: item.title,
    category: item.category,
    image: relaxationImages[idx % relaxationImages.length],
    placeholderLabel: item.title,
    description: item.description,
    features: item.features,
    highlight: item.highlight,
  }));

  // 4. Dining Deep Dive Images (CulinaryMenuShowcase)
  const diningImages = [
    diningRestaurantsImg,
    diningInSuiteImg,
    diningBeveragesImg,
    diningSpecialtyImg,
  ];

  // 5. Data mapping for Traveler Personas (ThreeColumnGrid with Images)
  const personaImages = [personaCouplesImg, personaHoneymoonImg, personaFamilyImg, personaSoloImg];
  const personaItems = pageData.travelerPersonas.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: personaImages[idx % personaImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 6. Data mapping for Who Should Not Book (BrandPillarsShowcase)
  const whoShouldNotBookPillars = {
    title: pageData.whoShouldNotBook.title,
    subtitle: pageData.whoShouldNotBook.subtitle,
    pillars: pageData.whoShouldNotBook.pillars,
  };

  // 7. Data mapping for Decision Framework (InteractivePlanningRoadmap)
  const roadmapImages = [
    roadmapCrowdsImg,
    roadmapFormalImg,
    roadmapEntertainmentImg,
    roadmapDiningImg,
    roadmapOceanImg,
    roadmapDestinationsImg,
    roadmapHotelImg,
  ];
  const decisionRoadmapSteps = pageData.decisionFrameworkRoadmap.steps.map((step, idx) => ({
    timeframe: step.timeframe,
    title: step.title,
    description: step.description,
    image: roadmapImages[idx % roadmapImages.length],
  }));

  // 8. Data mapping for FAQs (FAQAccordion)
  const faqItems = pageData.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  // 9. Data mapping for Advisor Value Bento Grid (BentoGlassmorphismGrid)
  const bentoImages = [
    bentoRitzYachtImg,
    bentoMegaShipImg,
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

  
  // 11. Comprehensive JSON-LD Schema (matching RitzCarltonYachtCollectionCost.jsx structure)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises",
        "name": pageData.seo.title,
        "headline": pageData.seo.h1 || pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-non-cruisers-luxury-yachting-hero.jpeg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-non-cruisers-luxury-yachting-hero.jpeg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises/#breadcrumb"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection for Non-Cruisers",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises/#faq",
        "mainEntity": pageData.faqs.map((faq) => ({
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
    <div className="min-h-screen bg-slate-50 text-navy-950">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.primaryKeywords?.join(", ")} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-non-cruisers-luxury-yachting-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtForNonCruisers/ritz-carlton-yacht-non-cruisers-luxury-yachting-hero.jpeg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
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

      {/* 2. Executive Narrative Intro (PremiumIntro) */}
      <div id="content">
        <PremiumIntro
          eyebrow={pageData.executivePhilosophy.badge}
          title={pageData.executivePhilosophy.title}
          highlight={pageData.executivePhilosophy.highlight}
          quote={pageData.executivePhilosophy.quote}
          sections={introSections}
          image1={introArchImg}
          image2={introInsetImg}
          alt1="Ritz-Carlton Yacht Collection relaxed embarkation"
          alt2="Luxury yacht lifestyle"
          watermarkText="NON-CRUISER"
        />
      </div>

      {/* 3. Quick Answer: Is It Good for Non-Cruisers? (LuxuryCruiseComparisonTable) */}
      <div id="quick-answer-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.quickAnswerTable.title}
          headers={pageData.quickAnswerTable.headers}
          rows={pageData.quickAnswerTable.rows}
        />
      </div>

      {/* 4. Why People Who Dislike Cruises May Like Ritz-Carlton Yacht (BrandPillarsShowcase) */}
      <div id="why-like-yacht">
        <BrandPillarsShowcase data={whyNonCruisersPillars} />
      </div>

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "lwQWPPM-hlE",
          title: "Experience The Ritz-Carlton Yacht Collection",
          description: "Discover how intimate yacht design, uncrowded open decks, and relaxed luxury redefine cruising for travelers who avoid traditional mega-ships."
        }}
      />

      {/* 5. Is Ritz-Carlton Yacht Like a Traditional Cruise? (AsymmetricStoryIntro) */}
      <div id="traditional-cruise-distinction">
        <AsymmetricStoryIntro
          eyebrow={pageData.traditionalCruiseComparison.eyebrow}
          heading={pageData.traditionalCruiseComparison.title}
          paragraphs={pageData.traditionalCruiseComparison.paragraphs}
          highlights={pageData.traditionalCruiseComparison.features}
          image1={traditionalComparisonMainImg}
          image2={traditionalComparisonScaleImg}
        />
      </div>

      {/* 6. Crowds & Scale Breakdown (EditorialFeatureShowcase with Image) */}
      <div id="crowds-and-scale">
        <EditorialFeatureShowcase
          title={pageData.crowdsAndScale.title}
          subtitle={pageData.crowdsAndScale.subtitle}
          features={pageData.crowdsAndScale.features}
          image={crowdsAndScaleImg}
          bgClass="bg-white"
        />
      </div>

      {/* 7. Hotel vs. Yacht Experience (DualPhilosophyShowcase) */}
      <div id="hotel-vs-yacht">
        <DualPhilosophyShowcase
          data={pageData.hotelVsYachtPhilosophy}
          imageSailing={hotelResortSuiteImg}
          imageAllSuite={yachtSeaMotionImg}
        />
      </div>

      {/* 8. Formal Nights & Evening Dress Code (GenericChecklistCards) */}
      <div id="formal-nights-dress">
        <GenericChecklistCards
          title={pageData.formalNightsAndDressCode.title}
          subtitle={pageData.formalNightsAndDressCode.subtitle}
          cards={pageData.formalNightsAndDressCode.cards}
        />
      </div>

      {/* 9. Relaxation & Activity Freedom (ThreeColumnGrid with Images) */}
      <div id="relaxation-activities">
        <ThreeColumnGrid
          title={pageData.relaxationAndActivities.title}
          subtitle={pageData.relaxationAndActivities.subtitle}
          items={relaxationItems}
        />
      </div>

      {/* 10. Entertainment & Atmosphere Authority Box */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <AuthorityBox
          title={pageData.entertainmentPhilosophy.title}
          content={pageData.entertainmentPhilosophy.text}
          author="Angela Hughes, Luxury Cruise Specialist & CEO"
          authorImage={angelaImage}
        />
      </div>

      {/* 11. Dining In-Depth: Flexible, Multi-Venue & 24-Hour Room Service (CulinaryMenuShowcase) */}
      <div id="dining-experience">
        <CulinaryMenuShowcase
          title={pageData.diningDeepDive.title}
          subtitle={pageData.diningDeepDive.subtitle}
          items={pageData.diningDeepDive.items}
          images={diningImages}
        />
      </div>

      {/* 12. All-Inclusive Inclusions Breakdown (CostValueAnalysisCards) */}
      <div id="all-inclusive-breakdown">
        <CostValueAnalysisCards
          title={pageData.allInclusiveBreakdown.title}
          subtitle={pageData.allInclusiveBreakdown.subtitle}
          includedTitle={pageData.allInclusiveBreakdown.includedTitle}
          included={pageData.allInclusiveBreakdown.included}
          extrasTitle={pageData.allInclusiveBreakdown.excludedTitle}
          extras={pageData.allInclusiveBreakdown.excluded}
        />
      </div>

      {/* 13. Excursions & Schedules (GenericChecklistCards) */}
      
      {/* Middle Video Feature Section */}
      <div id="excursions-schedules">
        <GenericChecklistCards
          title={pageData.excursionsAndSchedules.title}
          subtitle={pageData.excursionsAndSchedules.subtitle}
          cards={pageData.excursionsAndSchedules.cards}
        />
      </div>

      {/* 14. Traveler Personas: Couples, Honeymoons, Families & Solos (ThreeColumnGrid) */}
      <div id="traveler-profiles">
        <ThreeColumnGrid
          title={pageData.travelerPersonas.title}
          subtitle={pageData.travelerPersonas.subtitle}
          items={personaItems}
        />
      </div>

      {/* 15. Who Should NOT Book Ritz-Carlton Yacht (BrandPillarsShowcase) */}
      <div id="who-should-not-book">
        <BrandPillarsShowcase data={whoShouldNotBookPillars} />
      </div>

      {/* 16. Head-to-Head Comparison: Yacht vs Traditional Cruise (LuxuryCruiseComparisonTable) */}
      <div id="yacht-vs-cruise">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonVsTraditionalCruise.title}
          headers={pageData.comparisonVsTraditionalCruise.headers}
          rows={pageData.comparisonVsTraditionalCruise.rows}
        />
      </div>

      {/* 17. Head-to-Head Comparison: Yacht vs Luxury Resort (LuxuryCruiseComparisonTable) */}
      <div id="yacht-vs-resort">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonVsLuxuryResort.title}
          headers={pageData.comparisonVsLuxuryResort.headers}
          rows={pageData.comparisonVsLuxuryResort.rows}
        />
      </div>

      {/* 18. What Makes It Different & Is It a Good First Cruise? (AsymmetricStoryIntro) */}
      <div id="what-makes-different">
        <AsymmetricStoryIntro
          eyebrow={pageData.whatMakesItDifferent.eyebrow}
          heading={pageData.whatMakesItDifferent.title}
          paragraphs={pageData.whatMakesItDifferent.paragraphs}
          image1={firstCruiseSuiteImg}
          image2={firstCruiseLifestyleImg}
        />
      </div>

      {/* 19. Decision Framework Roadmap (InteractivePlanningRoadmap) */}
      <div id="decision-framework">
        <InteractivePlanningRoadmap
          title={pageData.decisionFrameworkRoadmap.title}
          subtitle={pageData.decisionFrameworkRoadmap.subtitle}
          steps={decisionRoadmapSteps}
        />
      </div>

      {/* 20. 12 Questions to Ask Your Advisor (GenericChecklistCards) */}
      <div id="advisor-questions">
        <GenericChecklistCards
          title={pageData.questionsToAskAdvisor.title}
          subtitle={pageData.questionsToAskAdvisor.subtitle}
          cards={pageData.questionsToAskAdvisor.cards}
        />
      </div>

      {/* 21. Why Work With a Luxury Travel Advisor (BentoGlassmorphismGrid) */}
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
                Travel Style Philosophy
              </span>
              <p className="font-display text-xl md:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto">
                "{pageData.advisorValue.takeaway}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 22. Angela Hughes Credentials & Expertise */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        heading={pageData.angelaPerspective.heading}
        bio={pageData.angelaPerspective.bio}
        image={angelaImage}
        text={pageData.angelaPerspective.text}
      />

      {/* 23. Comprehensive FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Direct answers to common questions about The Ritz-Carlton Yacht Collection for travelers who dislike traditional cruises.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      
      {/* 25. Final Answer Narrative Summary */}
      <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6">
            {pageData.finalAnswer.title}
          </h2>
          <p className="font-sans text-xl text-navy-800 font-medium leading-relaxed mb-6">
            {pageData.finalAnswer.lead}
          </p>
          <div className="space-y-4 text-slate-600 font-sans text-base leading-relaxed max-w-3xl mx-auto">
            {pageData.finalAnswer.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 26. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Find Out If Yachting Is Right for You?"
        subtitle="Connect with certified luxury yacht specialist Angela Hughes to compare itineraries, suite categories, and personalized luxury travel options."
        buttonText="Speak with a Yacht Specialist"
        buttonLink="/contact"
        image={ctaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtForNonCruisers;
