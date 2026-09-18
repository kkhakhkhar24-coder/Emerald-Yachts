import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared UI Components from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import CardGrid from "@/components/ui/CardGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import FeatureGrid from "@/components/ui/FeatureGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "@/components/ui/ExpertAuthorityChecklist";
import AuthorityGrid12 from "@/components/ui/AuthorityGrid12";
import BentoQuickFacts from "@/components/ui/BentoQuickFacts";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

// Media Assets
import angelaImage from "@/assets/Media (2).jpg";
// Commented-out image imports as per project conventions:
// import heroOrlandoAdvisorImg from "@/assets/images/ritz-orlando-advisor-hero.jpg";

const RitzCarltonYachtTravelAdvisorOrlando = () => {
  // 1. Data mapping for Executive Philosophy (PremiumIntro)
  const introSections = [
    {
      heading: "Orlando & Central Florida Luxury Yacht Travel Specialists",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Central Florida Advantage Cards (ThreeColumnGrid)
  const centralFloridaAdvantageItems = pageData.centralFloridaAdvantage.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Couples, Families & Occasions (ThreeColumnGrid)
  const occasionItems = pageData.couplesFamiliesOccasions.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 4. Data mapping for Shore Excursions (GenericChecklistCards - Usage 1 of 2)
  const excursionCards = pageData.shoreExcursionsAndPrivate.cards.map((card) => ({
    title: card.title,
    items: card.points,
    takeaway: card.takeaway,
  }));

  // 5. Data mapping for Questions & Timeline (GenericChecklistCards - Usage 2 of 2)
  const roadmapCards = pageData.bookingRoadmapAndQuestions.cards.map((card) => ({
    title: card.title,
    items: card.points,
    takeaway: card.takeaway,
  }));

  // 6. Data mapping for Hub Resources (InteractivePillarHubGrid)
  const hubItems = pageData.hubResources.map((res) => ({
    title: res.title,
    category: res.category,
    description: res.description,
    mainUrl: res.link,
    link: res.link,
  }));

  return (
    <div className="min-h-screen bg-slate-50 text-navy-950">
      {/* 1. Helmet SEO Metadata & JSON-LD Schema Graph */}
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
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
        primaryCtaText="Speak with an Orlando Advisor"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Planning Services"
        secondaryCtaLink="#quick-answer"
        // bgImage={heroOrlandoAdvisorImg}
      />

      {/* 4. Executive Narrative & Agency Introduction (PremiumIntro) */}
      <div id="executive-philosophy">
        <PremiumIntro
          title="Ritz-Carlton Yacht Collection Travel Advisor in Orlando"
          sections={introSections}
          highlightQuote="For Orlando-area travelers, the goal is to coordinate the entire vacation rather than treating the yacht reservation as an isolated booking."
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
          bgClass="bg-white"
        />
      </div>

      {/* 7. Why Choose an Orlando-Based Luxury Travel Advisor? (ThreeColumnGrid) */}
      <div id="orlando-advantage">
        <ThreeColumnGrid
          title={pageData.centralFloridaAdvantage.title}
          subtitle={pageData.centralFloridaAdvantage.subtitle}
          items={centralFloridaAdvantageItems}
        />
      </div>

      {/* 8. Ritz-Carlton Yacht Departures From Orlando (FeatureGrid) */}
      <div id="orlando-departures">
        <FeatureGrid
          title={pageData.orlandoDeparturesLogistics.title}
          subtitle={pageData.orlandoDeparturesLogistics.subtitle}
          features={pageData.orlandoDeparturesLogistics.features}
          bgClass="bg-ice-50"
        />
      </div>

      {/* 9. Voyage, Suite & Inclusions Strategy (BrandPillarsShowcase) */}
      <div id="voyage-suite-strategy">
        <BrandPillarsShowcase data={pageData.voyageAndSuiteStrategy} />
      </div>

      {/* 10. Advisor Costs, Compensation & Questions to Ask (CostValueAnalysisCards) */}
      <div id="advisor-costs-transparency">
        <CostValueAnalysisCards
          title={pageData.advisorCostsAndTransparency.title}
          subtitle={pageData.advisorCostsAndTransparency.subtitle}
          includedTitle={pageData.advisorCostsAndTransparency.includedTitle}
          included={pageData.advisorCostsAndTransparency.included}
          extrasTitle={pageData.advisorCostsAndTransparency.extrasTitle}
          extras={pageData.advisorCostsAndTransparency.extras}
        />
      </div>

      {/* 11. Shore Excursions & Private Experiences (GenericChecklistCards - Usage 1 of 2) */}
      <div id="shore-excursions-private">
        <GenericChecklistCards
          title={pageData.shoreExcursionsAndPrivate.title}
          subtitle={pageData.shoreExcursionsAndPrivate.subtitle}
          cards={excursionCards}
        />
      </div>

      {/* 12. Couples, Families, Milestones & Partner Programs (ThreeColumnGrid) */}
      <div id="couples-families-programs">
        <ThreeColumnGrid
          title={pageData.couplesFamiliesOccasions.title}
          subtitle={pageData.couplesFamiliesOccasions.subtitle}
          items={occasionItems}
        />
      </div>

      {/* 13. 16 Questions to Ask & Booking Timelines (GenericChecklistCards - Usage 2 of 2) */}
      <div id="questions-and-support">
        <GenericChecklistCards
          title={pageData.bookingRoadmapAndQuestions.title}
          subtitle={pageData.bookingRoadmapAndQuestions.subtitle}
          cards={roadmapCards}
        />
      </div>

      {/* 14. How Far in Advance Should You Contact an Orlando Travel Advisor? (ExpertAuthorityChecklist) */}
      <div id="booking-advance-timeline">
        <ExpertAuthorityChecklist
          title={pageData.howFarInAdvance.title}
          subtitle={pageData.howFarInAdvance.subtitle}
          points={pageData.howFarInAdvance.points}
        />
      </div>

      {/* 15. Why Trips & Ships Luxury Travel? (AuthorityGrid12) */}
      <div id="why-trips-and-ships">
        <AuthorityGrid12
          data={{
            title: pageData.whyTripsAndShips.title,
            subtitle: pageData.whyTripsAndShips.lead,
            image: angelaImage,
            quote: pageData.whyTripsAndShips.takeaway,
            author: "Trips & Ships Luxury Travel",
            credentials: pageData.whyTripsAndShips.specialties.map((spec) => ({
              title: spec.title,
              description: spec.description,
            })),
          }}
        />
      </div>

      {/* 16. How to Request Ritz-Carlton Yacht Planning From Orlando (BentoQuickFacts) */}
      <div id="how-to-request-planning">
        <BentoQuickFacts
          title={pageData.howToRequestPlanning.title}
          paragraphs={[
            pageData.howToRequestPlanning.lead,
            "Providing these details gives your advisor enough information to begin comparing the appropriate yachts, suites, and itineraries:"
          ]}
          items={pageData.howToRequestPlanning.items}
        />
        <div className="w-full bg-white pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gold-50/50 border border-gold-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-sans text-navy-950 text-base md:text-lg font-medium text-left">
              {pageData.howToRequestPlanning.takeaway}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-navy-950 text-ts-gold font-sans font-semibold text-sm hover:bg-navy-900 transition-colors shrink-0 shadow-lg"
            >
              Request Yacht Planning
            </a>
          </div>
        </div>
      </div>

      {/* 17. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        heading={pageData.angelaPerspective.heading}
        bio={pageData.angelaPerspective.bio}
        image={angelaImage}
        text={pageData.angelaPerspective.text}
      />

      {/* 18. Comprehensive 20 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Ritz-Carlton Yacht Collection Travel Advisor in Orlando: FAQs",
            subtitle: "Direct answers to common questions about booking, suites, flights from Orlando, pre-cruise hotels, and travel advisor services.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      {/* 19. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht & Luxury Cruise Guides"
        subtitle="Deepen your luxury cruise research with detailed guides on Florida advisors, Miami departures, Caribbean itineraries, suites, and inclusions."
        items={hubItems}
      />

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
        title="Ready to Plan Your Orlando-Based Ritz-Carlton Yacht Vacation?"
        subtitle="Connect with Orlando-area luxury cruise specialist Angela Hughes to curate your yacht suite, Orlando flight logistics, pre-cruise hotels, and bespoke amenities."
        buttonText="Request Orlando Advisor Consultation"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtTravelAdvisorOrlando;
