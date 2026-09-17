import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import AuthorityBox from "@/components/ui/AuthorityBox";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import CardGrid from "@/components/ui/CardGrid";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import DualPhilosophyShowcase from "@/components/ui/DualPhilosophyShowcase";
import CabinComparisonGallery from "@/components/ui/CabinComparisonGallery";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";
// Shore Excursion Images (commented out as requested):
// import selectGroupExcursionImg from "@/assets/images/select-group-excursions.jpg";
// import preDesignedPrivateImg from "@/assets/images/pre-designed-private.jpg";
// import customPrivateExcursionImg from "@/assets/images/custom-private-excursions.jpg";
// import couplesExcursionImg from "@/assets/images/couples-excursions.jpg";
// import familyExcursionImg from "@/assets/images/family-excursions.jpg";
// import multigenerationalImg from "@/assets/images/multigenerational-excursions.jpg";
// Budget Planning Images (commented out as requested):
// import cruiseFareBudgetImg from "@/assets/images/cruise-fare-budget.jpg";
// import shoreExcursionBudgetImg from "@/assets/images/shore-excursions-budget.jpg";
// import prePostHotelBudgetImg from "@/assets/images/pre-post-hotel-budget.jpg";
// import onboardSpaBudgetImg from "@/assets/images/onboard-spa-budget.jpg";
// Shore Excursion vs Independent Exploration Images (commented out as requested):
// import shoreExcursionComparisonImg from "@/assets/images/shore-excursion-comparison.jpg";
// import independentExplorationImg from "@/assets/images/independent-exploration.jpg";
// What Is Included In Cruise Fare Images (commented out as requested):
// import inclusionsMainImg from "@/assets/images/ritz-inclusions-main.jpg";
// import inclusionsDetailImg from "@/assets/images/ritz-inclusions-detail.jpg";

const RitzCarltonYachtShoreExcursionsIncluded = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Are Shore Excursions Included in the Standard Cruise Fare?",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Why Not Included Pillars (BrandPillarsShowcase)
  const whyNotIncludedPillars = {
    title: pageData.whyNotIncluded.title,
    subtitle: pageData.whyNotIncluded.subtitle,
    pillars: pageData.whyNotIncluded.pillars,
  };

  // 3. Data mapping for 3 Primary Shore Excursion Categories (ThreeColumnGrid with Images)
  const excursionCategoriesItems = pageData.excursionCategories.categories.map(
    (cat) => ({
      title: cat.title,
      category: cat.category,
      image: null, // cat.number === "01" ? selectGroupExcursionImg : cat.number === "02" ? preDesignedPrivateImg : customPrivateExcursionImg,
      description: cat.description,
      features: cat.features,
      highlight: cat.highlight,
    })
  );

  // 4. Data mapping for Excursion Cost Factors (CardGrid)
  const costFactorCards = pageData.costFactors.factors.map((factor) => ({
    icon: factor.icon === "map-pin" ? "MapPin" : factor.icon === "clock" ? "Clock" : factor.icon === "car" ? "Car" : "Utensils",
    title: factor.title,
    description: factor.description,
    bullets: factor.bullets,
  }));

  // 5. Data mapping for Port Shuttles & Gratuities (GenericChecklistCards)
  const shuttleCardsData = pageData.portShuttlesAndGratuities.shuttleSection.cards.map(
    (card) => ({
      title: card.title,
      items: card.bullets,
    })
  );

  // 6. Data mapping for Booking Timeline (InteractivePlanningRoadmap)
  const bookingTimelineSteps = pageData.bookingTimelineRoadmap.steps.map(
    (step) => ({
      timeframe: step.timeframe,
      title: step.title,
      description: step.description,
      image: null,
    })
  );

  // 7. Data mapping for Budget Planning Gallery (CabinComparisonGallery with Images)
  const budgetGalleryItems = pageData.completeBudgetFramework.items.map((item) => ({
    name: item.name,
    price: item.price,
    description: item.description,
    features: item.features,
    image: null, // cruiseFareBudgetImg, shoreExcursionBudgetImg, prePostHotelBudgetImg, onboardSpaBudgetImg,
  }));

  const budgetExpertRecommendation = {
    title: pageData.completeBudgetFramework.takeaway.title,
    content: pageData.completeBudgetFramework.takeaway.content,
  };

  // 8. Data mapping for Traveler Personas (ThreeColumnGrid with Images)
  const personaItems = pageData.travelerPersonas.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null, // couplesExcursionImg, familyExcursionImg, multigenerationalImg,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 9. Data mapping for 15 Questions Checklist (GenericChecklistCards)
  const fifteenQuestionsCards = pageData.fifteenQuestionsChecklist.cards;

  // 10. Data mapping for Advisor Value Pillars (BrandPillarsShowcase)
  const advisorValuePillars = {
    title: pageData.advisorValue.title,
    subtitle: pageData.advisorValue.subtitle,
    pillars: pageData.advisorValue.pillars,
  };

  // 11. Hub Resources for InteractivePillarHubGrid
  const hubItems = [
    {
      title: "Ritz-Carlton Yacht All-Inclusive Guide",
      description: "Discover what is included in standard cruise fares: dining, open bars, gratuities, Wi-Fi, and marina sports.",
      link: "/ritz-carlton-yacht-collection-included",
      actionLabel: "VIEW ALL INCLUSIONS",
    },
    {
      title: "Ritz-Carlton Yacht Collection Dress Code",
      description: "Learn what to wear for Yacht Casual days and Yacht Sophisticated dinner evenings with zero formal nights.",
      link: "/ritz-carlton-yacht-collection-dress-code",
      actionLabel: "EXPLORE DRESS CODE",
    },
    {
      title: "Best Suites on Ritz-Carlton Yachts",
      description: "Explore the complete suite category breakdown from Terrace Suites to Owner's Suites across Evrima, Ilma, and Luminara.",
      link: "/ritz-carlton-yacht-collection-suites",
      actionLabel: "COMPARE SUITES",
    },
    {
      title: "Marriott Bonvoy Points on Ritz-Carlton Yachts",
      description: "Master earning and redeeming Marriott Bonvoy points, elite night credits, and member savings on your yacht voyage.",
      link: "/ritz-carlton-yacht-collection-marriott-bonvoy-points",
      actionLabel: "MAXIMIZE POINTS",
    },
    {
      title: "Ritz-Carlton Yacht Collection Reviews",
      description: "Read verified guest experiences, culinary ratings, service scores, and detailed yacht feedback.",
      link: "/ritz-carlton-yacht-collection-reviews",
      actionLabel: "READ REVIEWS",
    },
    {
      title: "Evrima vs. Ilma vs. Luminara Comparison",
      description: "Compare ship specifications, suite sizes, dining venues, and deck layouts across the entire fleet.",
      link: "/ritz-carlton-evrima-vs-ilma-vs-luminara",
      actionLabel: "COMPARE FLEET",
    },
  ];

  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      {/* 1. Helmet SEO Metadata & Schema Graph */}
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
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <div id="content">
        <PremiumIntro
          badge={pageData.executivePhilosophy.badge}
          title={pageData.executivePhilosophy.title}
          highlight={pageData.executivePhilosophy.highlight}
          quote={pageData.executivePhilosophy.quote}
          sections={introSections}
          watermarkText="EXCURSIONS"
        />
      </div>

      {/* 5. Quick Answer: Are Shore Excursions Included? Table */}
      <div id="quick-answer-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.quickAnswerTable.title}
          headers={pageData.quickAnswerTable.headers}
          rows={pageData.quickAnswerTable.rows}
        />
      </div>

      {/* 6. Authority Box #1: Core Policy Distinction */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        <AuthorityBox
          title={pageData.coreDistinctionAuthority.title}
          content={pageData.coreDistinctionAuthority.text}
          author="Angela Hughes, Luxury Cruise Specialist & CEO"
          authorImage={angelaImage}
        />
      </div>

      {/* 7. What Is Included in Cruise Fare (AsymmetricStoryIntro with Image Collage) */}
      <div id="inclusions-breakdown">
        <AsymmetricStoryIntro
          eyebrow={pageData.includedVsExcluded.eyebrow}
          heading={pageData.includedVsExcluded.title}
          paragraphs={pageData.includedVsExcluded.paragraphs}
          highlights={pageData.includedVsExcluded.features}
          // image1={inclusionsMainImg}
          // image2={inclusionsDetailImg}
        />
      </div>

      {/* 8. Why Aren't Excursions Included? (BrandPillarsShowcase) */}
      <BrandPillarsShowcase data={whyNotIncludedPillars} />

      {/* 9. 3 Primary Categories of Shore Excursions (ThreeColumnGrid with Images) */}
      <div id="excursion-categories">
        <ThreeColumnGrid
          title={pageData.excursionCategories.title}
          subtitle={pageData.excursionCategories.subtitle}
          items={excursionCategoriesItems}
        />
      </div>

      {/* 10. Private vs Group Inclusions Breakdown (CostValueAnalysisCards) */}
      <CostValueAnalysisCards
        title={pageData.privateVsGroupInclusions.title}
        subtitle={pageData.privateVsGroupInclusions.subtitle}
        includedTitle={pageData.privateVsGroupInclusions.includedTitle}
        included={pageData.privateVsGroupInclusions.included}
        extrasTitle={pageData.privateVsGroupInclusions.extrasTitle}
        extras={pageData.privateVsGroupInclusions.extras}
      />

      {/* 11. Shore Excursion Cost Factors (CardGrid) */}
      <CardGrid
        title={pageData.costFactors.title}
        subtitle={pageData.costFactors.subtitle}
        cards={costFactorCards}
        columns={4}
      />

      {/* Free Excursions Reality Authority Box */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <AuthorityBox
          title={pageData.costFactors.freeExcursionsNote.title}
          content={pageData.costFactors.freeExcursionsNote.text}
          author="Angela Hughes, Luxury Travel Advisor"
          authorImage={angelaImage}
        />
      </div>

      {/* 12. Mid-Page Consultation CTA (CenterCTA) */}
      <div id="advisor-consultation">
        <CenterCTA
          title="Planning a Ritz-Carlton Yacht Vacation?"
          description="Speak with our certified luxury yacht specialists to navigate excursion choices, secure locked-in rates, and receive exclusive Virtuoso amenities."
          buttonText="Request Complimentary Yacht Consultation"
          buttonLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Shore%20Excursions%20Inquiry"
          theme="dark"
        />
      </div>

      {/* 13. Port Shuttles & Gratuities Explained (GenericChecklistCards & AuthorityBox) */}
      <GenericChecklistCards
        title={pageData.portShuttlesAndGratuities.shuttleSection.title}
        subtitle={pageData.portShuttlesAndGratuities.shuttleSection.subtitle}
        cards={shuttleCardsData}
      />

      <div className="max-w-5xl mx-auto px-6 py-4">
        <AuthorityBox
          title={pageData.portShuttlesAndGratuities.gratuitiesSection.title}
          content={pageData.portShuttlesAndGratuities.gratuitiesSection.text}
          author="Angela Hughes, Luxury Cruise Specialist"
          authorImage={angelaImage}
        />
      </div>

      {/* 14. Booking Timelines & Advance Strategy (InteractivePlanningRoadmap) */}
      <div id="booking-timeline">
        <InteractivePlanningRoadmap
          title={pageData.bookingTimelineRoadmap.title}
          subtitle={pageData.bookingTimelineRoadmap.subtitle}
          steps={bookingTimelineSteps}
        />
      </div>

      {/* 15. Shore Excursion vs Independent Exploration (DualPhilosophyShowcase) */}
      <div id="shore-vs-independent">
        <DualPhilosophyShowcase
          data={pageData.shoreVsIndependent}
          // imageSailing={shoreExcursionComparisonImg}
          // imageAllSuite={independentExplorationImg}
        />
      </div>



      {/* 16. Total Vacation Budget Framework (CabinComparisonGallery with Images) */}
      <div id="budget-framework">
        <CabinComparisonGallery
          title={pageData.completeBudgetFramework.title}
          subtitle={pageData.completeBudgetFramework.subtitle}
          items={budgetGalleryItems}
          expertRecommendation={budgetExpertRecommendation}
        />
      </div>

      {/* 17. Luxury Cruise Line Inclusions Comparison: Why Inclusions Matter */}
      <div id="competitor-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.luxuryCompetitorComparison.title}
          headers={pageData.luxuryCompetitorComparison.headers}
          rows={pageData.luxuryCompetitorComparison.rows}
        />
      </div>

      {/* 18. Tailoring Excursions for Specific Traveler Profiles (ThreeColumnGrid with Images) */}
      <div id="traveler-personas">
        <ThreeColumnGrid
          title={pageData.travelerPersonas.title}
          subtitle={pageData.travelerPersonas.subtitle}
          items={personaItems}
        />
      </div>

      {/* 19. Return Guarantee Authority Box */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        <AuthorityBox
          title={pageData.returnGuarantee.title}
          content={pageData.returnGuarantee.text}
          author="Angela Hughes, Luxury Cruise Specialist"
          authorImage={angelaImage}
        />
      </div>

      {/* 20. 15 Crucial Questions to Ask (GenericChecklistCards) */}
      <GenericChecklistCards
        title={pageData.fifteenQuestionsChecklist.title}
        subtitle={pageData.fifteenQuestionsChecklist.subtitle}
        cards={fifteenQuestionsCards}
      />

      {/* 21. Why Book with Trips & Ships (BrandPillarsShowcase) */}
      <BrandPillarsShowcase data={advisorValuePillars} />

      {/* 22. Angela Hughes Expert Credentials */}
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
        ctaLink="mailto:angela@tripsandships.com?subject=Ritz-Carlton%20Yacht%20Shore%20Excursions%20Planning"
      />

      {/* 23. Complete 16 FAQs Accordion */}
      <div id="faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Ritz-Carlton Yacht Shore Excursions",
            subtitle: "Clear answers to the 16 most common questions regarding excursion costs, private tours, Wi-Fi, drinks, and booking policies.",
            faqs: pageData.faqs,
          }}
        />
      </div>


      {/* 25. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Resources"
        subtitle="Deepen your luxury yacht knowledge with suite guides, dress code recommendations, Marriott Bonvoy points, and fleet comparisons."
        items={hubItems}
      />

      
      {/* 24. Final Answer Narrative Summary */}
      <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-4">
            {pageData.finalAnswer.title}
          </h2>
          <div className="w-16 h-0.5 bg-navy-900 mx-auto mb-8" />
          <p className="font-sans text-xl font-medium text-navy-900 mb-6">
            {pageData.finalAnswer.lead}
          </p>
          <div className="space-y-4 text-left font-sans text-slate-700 leading-relaxed">
            {pageData.finalAnswer.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 26. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Plan Your Yacht Vacation?"
        description="Connect with Trips & Ships Luxury Travel to secure locked-in cruise rates, exclusive Virtuoso amenities, and expert shoreside planning support."
        buttonText="Contact a Yacht Specialist"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtShoreExcursionsIncluded;
