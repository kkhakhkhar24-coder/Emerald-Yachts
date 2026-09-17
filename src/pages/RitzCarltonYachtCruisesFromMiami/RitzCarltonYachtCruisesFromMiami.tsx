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
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";
// Commented-out image imports as requested:
// import heroMiamiImg from "@/assets/images/ritz-miami-skyline.jpg";
// import biminiBahamasImg from "@/assets/images/ritz-bimini-bahamas.jpg";
// import sanJuanPortImg from "@/assets/images/ritz-san-juan-puerto-rico.jpg";
// import marinaPlatformImg from "@/assets/images/ritz-marina-watersports.jpg";
// import miamiSouthBeachImg from "@/assets/images/ritz-south-beach.jpg";
// import ilmaYachtMiamiImg from "@/assets/images/ritz-ilma-yacht.jpg";
// import traditionalCruiseImg from "@/assets/images/traditional-large-cruise.jpg";
// import ritzYachtLifestyleImg from "@/assets/images/ritz-yacht-lifestyle.jpg";

const RitzCarltonYachtCruisesFromMiami = () => {
  // 1. Data mapping for Executive Narrative Intro (PremiumIntro)
  const introSections = [
    {
      heading: "Essential Considerations for Miami Yacht Departures",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Destinations (ThreeColumnGrid)
  const destinationItems = pageData.destinationsOverview.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null, // card.category.includes("ROUND") ? biminiBahamasImg : sanJuanPortImg,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Traveler Suitability (ThreeColumnGrid)
  const travelerSuitabilityItems = pageData.travelerSuitability.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 4. Data mapping for Pre-Cruise Miami Stay (ThreeColumnGrid)
  const miamiStayItems = pageData.miamiPreCruiseStay.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null, // card.category.includes("CURATED") ? miamiSouthBeachImg : null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 5. Data mapping for 10-Step How to Choose Roadmap (InteractivePlanningRoadmap)
  const roadmapSteps = pageData.howToChooseRoadmap.steps.map((step) => ({
    timeframe: step.timeframe,
    title: step.title,
    description: step.description,
    image: null,
  }));

  // 6. Data mapping for FAQs (FAQAccordion)
  const faqItems = pageData.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  // 7. Data mapping for Hub Resources (InteractivePillarHubGrid)
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
        />
      </div>

      {/* 12. Is It Like a Traditional Cruise? (DualPhilosophyShowcase) */}
      <div id="traditional-cruise-comparison">
        <DualPhilosophyShowcase
          data={pageData.yachtVsTraditionalCruise}
          // imageSailing={traditionalCruiseImg}
          // imageAllSuite={ritzYachtLifestyleImg}
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

      
      {/* 16. Miami Round Trip vs. Miami to San Juan (LuxuryCruiseComparisonTable) */}
      <div id="miami-vs-san-juan">
        <LuxuryCruiseComparisonTable
          title={pageData.miamiRoundTripVsSanJuan.title}
          headers={pageData.miamiRoundTripVsSanJuan.headers}
          rows={pageData.miamiRoundTripVsSanJuan.rows}
        />
       
      </div>

      {/* 14. Dress Code & All-Inclusive Details (BrandPillarsShowcase) */}
      <div id="dress-code-inclusions">
        <BrandPillarsShowcase data={pageData.dressCodeAndAllInclusive} />
      </div>

      {/* 15. Pre-Cruise Miami Stay & Embarkation Logistics (ThreeColumnGrid) */}
      <div id="miami-pre-cruise">
        <ThreeColumnGrid
          title={pageData.miamiPreCruiseStay.title}
          subtitle={pageData.miamiPreCruiseStay.subtitle}
          items={miamiStayItems}
        />
      </div>


       {/* 19. Who Should Consider vs. Who May Wa
      nt a Different Vacation (ContainedShowdown) */}
      <div id="traveler-fit">
        <ContainedShowdown
          title={pageData.travelerFitGrid.title}
          brandA={pageData.travelerFitGrid.brandA}
          brandB={pageData.travelerFitGrid.brandB}
        />
      </div>


      {/* 17. Cost Breakdown & Is It Worth Considering? (ProsConsCards) */}
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

      {/* 18. Ritz-Carlton Yacht vs. Luxury Caribbean Resort (LuxuryCruiseComparisonTable) */}
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
          bentoItems={pageData.advisorValue.bentoItems}
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

      {/* 25. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Guides"
        subtitle="Deepen your luxury yacht knowledge with suite guides, shore excursion pricing, dress codes, and fleet comparisons."
        items={hubItems}
      />

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
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtCruisesFromMiami;
