import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared UI Components from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import CardGrid from "@/components/ui/CardGrid";
import FeatureGrid from "@/components/ui/FeatureGrid";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CenterCTA from "@/components/ui/CenterCTA";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Media Assets
import angelaImage from "@/assets/Media (2).jpg";

// Assets strictly from assets/RitzCarltonYachtTravelAdvisor
// 1. Hero Background Image (Dedicated superyacht luxury voyage curated by advisor)
import heroAdvisorImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-hero.jpg";

// 2. Executive Narrative Intro (PremiumIntro: The Value of an Integrated Luxury Yacht Planning Partner)
import introArchImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-integrated-planning-embarkation.jpg";
import introInsetImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-luxury-concierge-lifestyle.jpeg";

// 3. What Does a Ritz-Carlton Yacht Travel Advisor Do? (EditorialFeatureShowcase)
import advisorConsultationImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-advisor-consultation-planning.jpg";

// 4. Yacht Selection, Suite Strategy & Itinerary Design (ThreeColumnGrid)
import yachtFleetImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-fleet-selection-evrima-ilma-luminara.jpg";
import suiteSelectionImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-suite-strategy-grand-suite.jpg";
import itineraryCompareImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-itinerary-design-destinations.jpeg";

// 5. Marriott STARS Program, Onboard Credit & Waitlist Priority (ThreeColumnGrid)
import starsProgramImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-marriott-stars-program-amenities.jpg";
import onboardCreditImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-onboard-credit-spa-dining.jpg";
import waitlistPriorityImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-waitlist-priority-owners-suite.jpg";

// 6. When Should You Book Through an Advisor vs. Directly? (ContainedShowdown)
import showdownAdvisorImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-advisor-booking-multi-piece.jpeg";
import showdownDirectImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-booking-direct-simple-trip.jpeg";

// 7. Trips & Ships Value Bento Grid (BentoGlassmorphismGrid)
import bentoJourneyImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-bow-view.jpg";
import bentoStarsImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-pool-deck.jpg";
import bentoPrePostImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-marina-terrace.jpg";

// 9. Final Bottom Center CTA (CenterCTA)
import ctaBgImg from "@/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-cta-background.jpg";

const RitzCarltonYachtTravelAdvisor = () => {
  // 1. Data mapping for Executive Philosophy (PremiumIntro)
  const introSections = [
    {
      heading: "The Value of an Integrated Luxury Yacht Planning Partner",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Fleet, Suite & Itinerary Selection (ThreeColumnGrid)
  const yachtSuiteImages = [yachtFleetImg, suiteSelectionImg, itineraryCompareImg];
  const yachtSuiteItems = pageData.yachtSuiteItinerarySelection.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: yachtSuiteImages[idx % yachtSuiteImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Shore Excursion & Private Experiences (CostValueAnalysisCards)
  const shoreExcursionIncluded = pageData.shoreExcursionsPrivate.included.map((item) => {
    const parts = item.split(":");
    return {
      title: parts[0]?.trim() || item,
      description: parts[1]?.trim() || "",
    };
  });

  const shoreExcursionExtras = pageData.shoreExcursionsPrivate.extras.map((item) => {
    const parts = item.split(":");
    return {
      title: parts[0]?.trim() || item,
      description: parts[1]?.trim() || "",
    };
  });

  // 4. Data mapping for STARS Program, Onboard Credit & Waitlists (ThreeColumnGrid)
  const starsImages = [starsProgramImg, onboardCreditImg, waitlistPriorityImg];
  const starsItems = pageData.starsAndAmenities.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: starsImages[idx % starsImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 5. Data mapping for Complex Coordination (GenericChecklistCards - Usage 1 of 2)
  const complexCoordinationCards = pageData.complexCoordination.cards.map((card) => ({
    title: card.title,
    items: card.points,
    takeaway: card.takeaway,
  }));

  // 6. Data mapping for How to Choose & Questions (GenericChecklistCards - Usage 2 of 2)
  const howToChooseCards = pageData.howToChooseAdvisor.cards.map((card) => ({
    title: card.title,
    items: card.points,
    takeaway: card.takeaway,
  }));

  // 7. Data mapping for Trips & Ships Value (BentoGlassmorphismGrid)
  const bentoImages = [bentoJourneyImg, bentoStarsImg, bentoPrePostImg];
  const bentoItems = pageData.tripsAndShipsValue.bentoItems.map((item, idx) => ({
    ...item,
    image: bentoImages[idx % bentoImages.length],
  }));

  
  // 9. Comprehensive JSON-LD Schema Graph (matching RitzCarltonYachtCollectionCost.jsx)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageData.seo.canonicalUrl}#webpage`,
        "url": pageData.seo.canonicalUrl,
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisor/ritz-carlton-yacht-travel-advisor-hero.jpg",
          "caption": pageData.seo.title,
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisor/LU_2025_Don Riddle_Sorrento Exterior_002.jpg",
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
          "@id": `${pageData.seo.canonicalUrl}#breadcrumb`,
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
        "@id": `${pageData.seo.canonicalUrl}#breadcrumb`,
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
            "name": "Ritz-Carlton Yacht Travel Advisor",
            "item": pageData.seo.canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageData.seo.canonicalUrl}#faq`,
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
      {/* 1. Helmet SEO Metadata & JSON-LD Schema Graph */}
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
        primaryCtaText="Request Advisor Consultation"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Advisor Benefits"
        secondaryCtaLink="#quick-answer"
        backgroundImage={heroAdvisorImg}
      />

      {/* 4. Executive Narrative & Ecosystem Context (PremiumIntro) */}
      <div id="executive-philosophy">
        <PremiumIntro
          title="Why Book a Ritz-Carlton Yacht Cruise Through a Travel Advisor?"
          sections={introSections}
          image1={introArchImg}
          image2={introInsetImg}
          highlightQuote="The value is not simply in making the reservation. It is in planning and coordinating the entire journey."
        />
      </div>

      {/* 5. Quick Answer Card Grid (CardGrid) */}
      <div id="quick-answer">
        <CardGrid
          title={pageData.quickAnswer.title}
          subtitle={pageData.quickAnswer.subtitle}
          cards={pageData.quickAnswer.cards}
          columns={4}
          stagger={true}
        />
      </div>

      {/* 6. What Does a Ritz-Carlton Yacht Travel Advisor Do? (EditorialFeatureShowcase) */}
      <div id="what-advisor-does">
        <EditorialFeatureShowcase
          title={pageData.whatAdvisorDoes.title}
          subtitle={pageData.whatAdvisorDoes.subtitle}
          features={pageData.whatAdvisorDoes.features}
          image={advisorConsultationImg}
          bgClass="bg-white"
        />
      </div>

      {/* 7. Sections 1, 2, 3: Yacht, Suite & Itinerary Selection (ThreeColumnGrid) */}
      <div id="yacht-suite-selection">
        <ThreeColumnGrid
          title={pageData.yachtSuiteItinerarySelection.title}
          subtitle={pageData.yachtSuiteItinerarySelection.subtitle}
          items={yachtSuiteItems}
        />
      </div>

      {/* 8. Sections 4, 5, 6: Inclusions, Flights & Pre-Cruise Hotels (BrandPillarsShowcase) */}
      <div id="inclusions-flights-logistics">
        <BrandPillarsShowcase data={pageData.inclusionsFlightsHotels} />
      </div>

      {/* 9. Sections 7 & 8: Shore Excursions & Curated Private Experiences (CostValueAnalysisCards) */}
      <div id="shore-excursions-private">
        <CostValueAnalysisCards
          title={pageData.shoreExcursionsPrivate.title}
          subtitle={pageData.shoreExcursionsPrivate.subtitle}
          includedTitle={pageData.shoreExcursionsPrivate.includedTitle}
          included={shoreExcursionIncluded}
          extrasTitle={pageData.shoreExcursionsPrivate.extrasTitle}
          extras={shoreExcursionExtras}
        />
      </div>

      {/* 10. Sections 9, 10, 11: STARS Program, Onboard Credit & Waitlist Priority (ThreeColumnGrid) */}
      
      {/* Middle Video Feature Section */}
      <VideoEmbed
        data={{
          youtubeId: "sQPnGRkiLdg",
          title: "Inside The Ritz-Carlton Yacht Collection Experience",
          description: "Explore the extraordinary lifestyle, all-suite accommodations, and personalized service of The Ritz-Carlton Yacht Collection."
        }}
      />

      <div id="stars-program-benefits">
        <ThreeColumnGrid
          title={pageData.starsAndAmenities.title}
          subtitle={pageData.starsAndAmenities.subtitle}
          items={starsItems}
        />
      </div>

      {/* 11. Sections 12, 13, 14, 15: Single Point of Contact, Changes & Promotions (FeatureGrid) */}
      <div id="trip-continuity">
        <FeatureGrid
          title={pageData.continuityAndPromotions.title}
          subtitle={pageData.continuityAndPromotions.subtitle}
          features={pageData.continuityAndPromotions.features}
          bgClass="bg-ice-50"
        />
      </div>

      {/* 12. Sections 16, 17, 18, 19, 20: Insurance, Milestones, Families, Groups & Costs (GenericChecklistCards - Usage 1 of 2) */}
      <div id="complex-coordination">
        <GenericChecklistCards
          title={pageData.complexCoordination.title}
          subtitle={pageData.complexCoordination.subtitle}
          cards={complexCoordinationCards}
        />
      </div>

      {/* 13. Travel Advisor vs. Booking Direct (LuxuryCruiseComparisonTable) */}
      <div id="advisor-vs-direct-table">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonTable.title}
          lead={pageData.comparisonTable.lead}
          headers={pageData.comparisonTable.headers}
          rows={pageData.comparisonTable.rows}
          takeaway={pageData.comparisonTable.takeaway}
        />
      </div>

      {/* 14. When Should You Book Through an Advisor vs. Directly? (ContainedShowdown) */}
      <div id="when-to-book-showdown">
        <ContainedShowdown
          title={pageData.whenToUseShowdown.title}
          brandA={{
            ...pageData.whenToUseShowdown.brandA,
            image: showdownAdvisorImg,
          }}
          brandB={{
            ...pageData.whenToUseShowdown.brandB,
            image: showdownDirectImg,
          }}
        />
      </div>

      {/* 15. How to Choose an Advisor & 10 Questions to Ask (GenericChecklistCards - Usage 2 of 2) */}
      <div id="how-to-choose-advisor">
        <GenericChecklistCards
          title={pageData.howToChooseAdvisor.title}
          subtitle={pageData.howToChooseAdvisor.subtitle}
          cards={howToChooseCards}
        />
      </div>

      {/* 16. Why Trips & Ships Luxury Travel for Ritz-Carlton Yacht (BentoGlassmorphismGrid) */}
      <div id="why-trips-and-ships" className="relative bg-navy-950">
        <BentoGlassmorphismGrid
          title={pageData.tripsAndShipsValue.title}
          subtitle={pageData.tripsAndShipsValue.subtitle}
          bentoItems={bentoItems}
        />
        {pageData.tripsAndShipsValue.takeaway && (
          <div className="max-w-4xl mx-auto px-6 -mt-10 pb-20 relative z-20">
            <div className="bg-white/5 backdrop-blur-xl text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl text-center">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold mb-3 block">
                Our Commitment
              </span>
              <p className="font-display text-xl md:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto">
                "{pageData.tripsAndShipsValue.takeaway}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 17. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
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

      {/* 18. Comprehensive 17 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Why Book a Ritz-Carlton Yacht Cruise Through a Travel Advisor?",
            subtitle: "Frequently Asked Questions about travel advisor value, STARS program benefits, pricing, suites, and coordination.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      
      {/* 20. Final Takeaway Narrative Summary */}
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

      {/* 21. Final Bottom Center CTA */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Yacht Journey?"
        subtitle="Connect with certified luxury yacht specialist Angela Hughes to access exclusive Marriott STARS program amenities, locked-in rates, and bespoke travel curation."
        buttonText="Speak with a Yacht Specialist"
        buttonLink="/contact"
        image={ctaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtTravelAdvisor;
