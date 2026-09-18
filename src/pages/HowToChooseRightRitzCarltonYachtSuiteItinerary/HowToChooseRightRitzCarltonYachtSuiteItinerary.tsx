import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared UI Components from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import CardGrid from "@/components/ui/CardGrid";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import IconGrid from "@/components/ui/IconGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import TravelerProfileTabs from "@/components/ui/TravelerProfileTabs";
import FeatureGrid from "@/components/ui/FeatureGrid";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import BentoQuickFacts from "@/components/ui/BentoQuickFacts";
import ExpertAuthorityChecklist from "@/components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";
import InclusionsList from "@/components/ui/InclusionsList";
import DetailedInclusionsList from "@/components/ui/DetailedInclusionsList";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";

// Media Assets
import angelaImage from "@/assets/Media (2).jpg";
// import medImage from "@/assets/AzamaraMediterraneanCruises/Boutique Mediterranean cruise experience.webp";
// import caribbeanImage from "@/assets/image.webp";
// import alaskaImage from "@/assets/AzamaraAlaskaCruises/Hero1.webp";
// import asiaImage from "@/assets/TripToJapan/Tokyo_Japan.jpg";
// import southPacificImage from "@/assets/DistinctiveVoyageSailings/sailing1.png";

const HowToChooseRightRitzCarltonYachtSuiteItinerary = () => {
  // 1. Data mapping for Executive Narrative (PremiumIntro)
  const introSections = [
    {
      heading: "Matching Fleet Vessels, Suite Categories & Itineraries",
      paragraphs: pageData.executiveNarrative.paragraphs,
    },
  ];

  // 2. Data mapping for Vessel Comparison (ThreeColumnGrid)
  const vesselItems = pageData.vesselComparisonCards.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Yacht Matcher (IconGrid)
  const yachtMatcherItems = pageData.yachtMatcher.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    icon: idx === 0 ? "sun" : idx === 1 ? "tag" : idx === 2 ? "activity" : "clock",
  }));

  // 4. Data mapping for Suite Selection Guide (BrandPillarsShowcase)
  const suiteStrategyData = {
    title: pageData.suiteSelectionGuide.title,
    subtitle: pageData.suiteSelectionGuide.subtitle,
    pillars: pageData.suiteSelectionGuide.categories.map((cat, idx) => ({
      number: `0${idx + 1}`,
      title: cat.title,
      subtitle: cat.subtitle,
      description: `${cat.description} Features include: ${cat.points.join(" • ")}. ${cat.takeaway}`,
    })),
  };

  // 5. Data mapping for Deck Selection & Special Occasions (ThreeColumnGrid)
  const suiteStrategicItems = pageData.suiteStrategicAdvice.cards.map((card) => ({
    title: card.title,
    category: card.category,
    image: null,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 6. Data mapping for Regional Itineraries (TravelerProfileTabs)
  // const regionImages = [medImage, caribbeanImage, alaskaImage, asiaImage, southPacificImage];
  const regionalTabs = pageData.itineraryGuide.regions.map((region) => ({
    name: region.title.replace(" Ritz-Carlton Yacht Itineraries", "").replace(" Itineraries", ""),
    tagline: region.subtitle,
    image: null,
    quote: region.description,
    recommendation: `Best For: ${region.bestFor}`,
    reason: `The ${region.title} program connects boutique ports with personalized shore access, curated culinary experiences, and secluded anchorages.`,
    whyFits: region.highlights,
  }));

  // 7. Data mapping for Voyage Length & Logistics (FeatureGrid)
  const logisticsFeatures = [
    ...pageData.voyageLengthAndLogistics.lengths.map((len) => ({
      title: len.title,
      description: len.description,
    })),
    ...pageData.voyageLengthAndLogistics.routingStyles.map((style) => ({
      title: style.title,
      description: style.description,
    })),
  ];

  // 8. Data mapping for Travel Style (CardGrid)
  const travelStyleCards = pageData.travelStyleMatcher.styles.map((style, idx) => ({
    title: style.title,
    description: style.description,
    icon: idx === 0 ? "Heart" : idx === 1 ? "Sparkles" : idx === 2 ? "Users" : idx === 3 ? "Compass" : idx === 4 ? "Wine" : "Anchor",
  }));

  // 9. Data mapping for Hub Resources (InteractivePillarHubGrid)
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
        primaryCtaText="Speak with a Yacht Advisor"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Selection Guide"
        secondaryCtaLink="#quick-answer"
      />

      {/* 4. Executive Narrative & Agency Introduction (PremiumIntro) */}
      <div id="executive-narrative">
        <PremiumIntro
          title={pageData.executiveNarrative.title}
          sections={introSections}
          highlightQuote="The best choice is not necessarily the newest yacht or the largest suite. It is the combination that fits your travel priorities, destination and preferred style of luxury travel."
        />
      </div>

      {/* 5. Quick Answer Decision Matrix (CardGrid) */}
      <div id="quick-answer">
        <CardGrid
          title={pageData.quickAnswer.title}
          subtitle={pageData.quickAnswer.subtitle}
          cards={pageData.quickAnswer.cards}
          columns={3}
          stagger={true}
        />
        <div className="w-full bg-slate-50 pb-12 px-6 text-center border-b border-slate-200">
          <p className="font-sans text-slate-700 text-sm md:text-base italic max-w-3xl mx-auto">
            {pageData.quickAnswer.takeaway}
          </p>
        </div>
      </div>

      {/* 6. Evrima vs. Ilma vs. Luminara Vessel Comparison (ThreeColumnGrid) */}
      <div id="fleet-comparison">
        <ThreeColumnGrid
          title={pageData.vesselComparisonCards.title}
          subtitle={pageData.vesselComparisonCards.subtitle}
          items={vesselItems}
        />
      </div>

      {/* 7. Which Ritz-Carlton Yacht Is Best for You? Priority Matcher (IconGrid) */}
      <div id="yacht-matcher">
        <IconGrid
          title={pageData.yachtMatcher.title}
          subtitle={pageData.yachtMatcher.subtitle}
          items={yachtMatcherItems}
        />
      </div>

      {/* 8. Suite Selection Guide (BrandPillarsShowcase) */}
      <div id="suite-selection-guide">
        <BrandPillarsShowcase data={suiteStrategyData} />
      </div>

      {/* 9. Deck Selection, Couples & Families (ThreeColumnGrid) */}
      <div id="deck-couples-families">
        <ThreeColumnGrid
          title={pageData.suiteStrategicAdvice.title}
          subtitle={pageData.suiteStrategicAdvice.subtitle}
          items={suiteStrategicItems}
        />
      </div>

      {/* 10. Regional Itinerary Guide (TravelerProfileTabs) */}
      <div id="itinerary-guide">
        <TravelerProfileTabs
          title={pageData.itineraryGuide.title}
          subtitle={pageData.itineraryGuide.subtitle}
          profiles={regionalTabs}
        />
        {pageData.itineraryGuide.intro && (
          <div className="w-full bg-navy-950 pb-12 px-6 text-center border-b border-slate-800">
            <p className="font-sans text-ice-200 text-sm md:text-base italic max-w-4xl mx-auto">
              {pageData.itineraryGuide.intro}
            </p>
          </div>
        )}
      </div>

      {/* 11. Voyage Length & Routing Logistics (FeatureGrid) */}
      <div id="voyage-length-logistics">
        <FeatureGrid
          title={pageData.voyageLengthAndLogistics.title}
          subtitle={pageData.voyageLengthAndLogistics.subtitle}
          features={logisticsFeatures}
          bgClass="bg-ice-50"
        />
        <div className="w-full bg-ice-50 pb-12 px-6 text-center border-b border-slate-200">
          <p className="font-sans text-navy-900 text-sm md:text-base font-medium max-w-3xl mx-auto">
            {pageData.voyageLengthAndLogistics.overnightPortsBenefit}
          </p>
        </div>
      </div>

      {/* 12. How to Choose an Itinerary Based on Your Travel Style (CardGrid) */}
      <div id="travel-style-matcher">
        <CardGrid
          title={pageData.travelStyleMatcher.title}
          subtitle={pageData.travelStyleMatcher.subtitle}
          cards={travelStyleCards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* 13. How to Compare Two Ritz-Carlton Yacht Itineraries Matrix (LuxuryCruiseComparisonTable) */}
      <div id="comparison-matrix">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonMatrix.title}
          lead={pageData.comparisonMatrix.lead}
          headers={pageData.comparisonMatrix.headers}
          rows={pageData.comparisonMatrix.rows}
          takeaway={pageData.comparisonMatrix.takeaway}
        />
      </div>

      {/* 14. Should You Choose the Cheapest Ritz-Carlton Yacht Suite? (InclusionsList) */}
      <div id="cheapest-suite-evaluation">
        <InclusionsList
          title={pageData.cheapestSuiteEvaluation.title}
          inclusions={pageData.cheapestSuiteEvaluation.factors}
          expertNote={`${pageData.cheapestSuiteEvaluation.lead} ${pageData.cheapestSuiteEvaluation.intro} ${pageData.cheapestSuiteEvaluation.takeaway}`}
        />
      </div>

      {/* 15. How a Travel Advisor Can Help Choose Your Yacht, Suite and Itinerary (DetailedInclusionsList) */}
      <div id="how-advisor-helps-detailed">
        <DetailedInclusionsList
          title={pageData.howAdvisorHelpsDetailed.title}
          intro={[
            pageData.howAdvisorHelpsDetailed.lead,
            pageData.howAdvisorHelpsDetailed.intro
          ]}
          items={[
            {
              title: "Comprehensive Yacht & Voyage Coordination",
              lists: [
                {
                  title: "Key Variables Evaluated Simultaneously",
                  items: pageData.howAdvisorHelpsDetailed.variables
                }
              ],
              highlight: {
                title: "Travel Advisor Coordination",
                text: pageData.howAdvisorHelpsDetailed.professionalResources
              }
            }
          ]}
        />
      </div>

      {/* 16. When Should You Book a Ritz-Carlton Yacht? (GenericChecklistCards) */}
      <div id="when-to-book-timing">
        <GenericChecklistCards
          title={pageData.whenToBookTiming.title}
          subtitle={pageData.whenToBookTiming.subtitle}
          cards={[
            {
              title: "Consider Planning Earlier If You Want",
              items: pageData.whenToBookTiming.earlierPlanningReasons
            },
            {
              title: "Booking Timing & Availability Considerations",
              items: [
                pageData.whenToBookTiming.lead,
                pageData.whenToBookTiming.flexibleTravelersNote
              ]
            }
          ]}
        />
      </div>

      {/* 17. What Should I Tell My Travel Advisor? (BentoQuickFacts) */}
      <div id="advisor-inquiry-details">
        <BentoQuickFacts
          title="What Should I Tell My Travel Advisor?"
          paragraphs={[
            "Before requesting recommendations, providing comprehensive details allows your advisor to compare and secure the optimal yacht, suite, and itinerary combination:",
            "The more information your advisor has, the easier it is to compare the right yacht, suite and itinerary."
          ]}
          items={pageData.advisorValueAndInquiry.inquiryDetails}
        />
      </div>

      {/* 18. Questions to Ask Before Booking a Ritz-Carlton Yacht (ExpertAuthorityChecklist) */}
      <div id="questions-before-booking">
        <ExpertAuthorityChecklist
          title={pageData.questionsBeforeBooking.title}
          subtitle={pageData.questionsBeforeBooking.subtitle}
          points={pageData.questionsBeforeBooking.questions}
        />
        <div className="w-full bg-slate-50 pb-12 px-6 text-center border-b border-slate-200">
          <p className="font-sans text-slate-700 text-sm md:text-base italic max-w-3xl mx-auto">
            {pageData.questionsBeforeBooking.takeaway}
          </p>
        </div>
      </div>

      {/* 19. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
      <ExpertCredentials
        name={pageData.angelaPerspective.name}
        title={pageData.angelaPerspective.title}
        heading={pageData.angelaPerspective.heading}
        bio={pageData.angelaPerspective.bio}
        image={angelaImage}
        text={pageData.angelaPerspective.text}
      />

      {/* 20. Comprehensive 19 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "How to Choose the Right Ritz-Carlton Yacht: FAQs",
            subtitle: "Direct answers to common questions about comparing yachts, suite sizes, destinations, voyage lengths, and travel advisor services.",
            faqs: pageData.faqs,
          }}
        />
      </div>

      {/* 21. Interactive Resource Pillar Hub */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht & Luxury Cruise Guides"
        subtitle="Deepen your luxury cruise research with detailed guides on Florida advisors, Orlando planning, Miami departures, Caribbean itineraries, and shore excursions."
        items={hubItems}
      />

      {/* 22. Final Takeaway Narrative Summary */}
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

      {/* 23. Final Bottom Center CTA */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Yacht Vacation?"
        subtitle="Connect with luxury cruise specialist Angela Hughes to compare live suite availability, select the perfect itinerary, and curate your complete luxury journey."
        buttonText="Request Yacht Planning Consultation"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default HowToChooseRightRitzCarltonYachtSuiteItinerary;
