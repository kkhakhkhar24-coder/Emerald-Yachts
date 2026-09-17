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
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";
// Commented-out image imports as requested:
// import heroYachtImg from "@/assets/images/ritz-yacht-lifestyle.jpg";
// import relaxationLeisureImg from "@/assets/images/ritz-yacht-leisure.jpg";
// import wellnessPoolImg from "@/assets/images/ritz-yacht-wellness.jpg";
// import independentPortImg from "@/assets/images/ritz-yacht-port.jpg";
// import diningRestaurantImg from "@/assets/images/ritz-yacht-dining.jpg";
// import inSuiteDiningImg from "@/assets/images/ritz-yacht-insuite.jpg";
// import premiumBeveragesImg from "@/assets/images/ritz-yacht-beverages.jpg";
// import specialtySeaImg from "@/assets/images/ritz-yacht-sea.jpg";
// import couplesRomanceImg from "@/assets/images/ritz-yacht-couples.jpg";
// import honeymoonImg from "@/assets/images/ritz-yacht-honeymoon.jpg";
// import familyYachtImg from "@/assets/images/ritz-yacht-families.jpg";
// import soloYachtImg from "@/assets/images/ritz-yacht-solo.jpg";
// import hotelVsYachtHotelImg from "@/assets/images/ritz-hotel-resort.jpg";
// import hotelVsYachtSeaImg from "@/assets/images/ritz-yacht-sea.jpg";
// import decisionRoadmapImg from "@/assets/images/ritz-decision-roadmap.jpg";
// import crowdsAndScaleImg from "@/assets/images/ritz-yacht-crowds-scale.jpg";
// import advisorConsultationImg from "@/assets/images/ritz-advisor-consultation.jpg";

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
  const relaxationItems = pageData.relaxationAndActivities.items.map((item) => ({
    title: item.title,
    category: item.category,
    image: null, // item.number === "01" ? relaxationLeisureImg : item.number === "02" ? wellnessPoolImg : independentPortImg,
    description: item.description,
    features: item.features,
    highlight: item.highlight,
  }));

  // 4. Data mapping for Dining Deep Dive (CabinComparisonGallery with Images)
  const diningGalleryItems = pageData.diningDeepDive.items.map((item) => ({
    name: item.name,
    price: item.price,
    description: item.description,
    features: item.features,
    image: null, // item.name.includes("Multiple") ? diningRestaurantImg : item.name.includes("24-Hour") ? inSuiteDiningImg : item.name.includes("Premium") ? premiumBeveragesImg : specialtySeaImg,
  }));

  const diningExpertRecommendation = {
    title: pageData.diningDeepDive.takeaway.title,
    content: pageData.diningDeepDive.takeaway.content,
  };

  // 5. Data mapping for Traveler Personas (ThreeColumnGrid with Images)
  const personaItems = pageData.travelerPersonas.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null, // card.category.includes("Romance") ? couplesRomanceImg : card.category.includes("Honeymoon") ? honeymoonImg : card.category.includes("Family") ? familyYachtImg : soloYachtImg,
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
  const decisionRoadmapSteps = pageData.decisionFrameworkRoadmap.steps.map((step) => ({
    timeframe: step.timeframe,
    title: step.title,
    description: step.description,
    image: null, // decisionRoadmapImg,
  }));

  // 8. Data mapping for FAQs (FAQAccordion)
  const faqItems = pageData.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  // 10. Data mapping for Hub Resources (InteractivePillarHubGrid)
  const hubItems = pageData.hubResources.map((res) => ({
    title: res.title,
    category: res.category,
    description: res.description,
    mainUrl: res.link,
    link: res.link,
  }));

  return (
    <div className="min-h-screen bg-slate-50 text-navy-950">
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

      {/* Global Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
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

      {/* 5. Is Ritz-Carlton Yacht Like a Traditional Cruise? (AsymmetricStoryIntro) */}
      <div id="traditional-cruise-distinction">
        <AsymmetricStoryIntro
          eyebrow={pageData.traditionalCruiseComparison.eyebrow}
          heading={pageData.traditionalCruiseComparison.title}
          paragraphs={pageData.traditionalCruiseComparison.paragraphs}
          highlights={pageData.traditionalCruiseComparison.features}
        />
      </div>

      {/* 6. Crowds & Scale Breakdown (EditorialFeatureShowcase with Image) */}
      <div id="crowds-and-scale">
        <EditorialFeatureShowcase
          title={pageData.crowdsAndScale.title}
          subtitle={pageData.crowdsAndScale.subtitle}
          features={pageData.crowdsAndScale.features}
          // image={crowdsAndScaleImg}
          bgClass="bg-white"
        />
      </div>

      {/* 7. Hotel vs. Yacht Experience (DualPhilosophyShowcase) */}
      <div id="hotel-vs-yacht">
        <DualPhilosophyShowcase
          data={pageData.hotelVsYachtPhilosophy}
          // imageSailing={hotelVsYachtHotelImg}
          // imageAllSuite={hotelVsYachtSeaImg}
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
          images={[]}
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
          bentoItems={pageData.advisorValue.bentoItems}
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

      {/* 24. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Resources"
        subtitle="Deepen your luxury yacht knowledge with suite guides, shore excursion pricing, dress codes, and fleet comparisons."
        items={hubItems}
      />

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
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtForNonCruisers;
