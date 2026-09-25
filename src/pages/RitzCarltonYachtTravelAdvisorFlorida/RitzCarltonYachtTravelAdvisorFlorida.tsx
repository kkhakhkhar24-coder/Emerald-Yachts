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
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import FeatureGrid from "@/components/ui/FeatureGrid";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "@/components/ui/ExpertAuthorityChecklist";
import BentoQuickFacts from "@/components/ui/BentoQuickFacts";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CenterCTA from "@/components/ui/CenterCTA";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Media Assets
import angelaImage from "@/assets/Media (2).jpg";

// Assets strictly from assets/RitzCarltonYachtTravelAdvisorFlorida
// 1. Hero Background Image (Dedicated luxury superyacht voyage curated by Florida advisor)
import heroFloridaAdvisorImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-travel-advisor-florida-hero.jpg";

// 2. Executive Narrative Intro (PremiumIntro: Florida Luxury Yacht Planning Expertise)
import introArchImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-florida-planning-embarkation.jpg";
import introInsetImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-florida-concierge-lifestyle.jpeg";

// 3. What Does a Ritz-Carlton Yacht Travel Advisor Do? (EditorialFeatureShowcase)
import advisorConsultationImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-florida-advisor-consultation.jpg";

// 4. Florida Advantage Cards (ThreeColumnGrid: PortMiami, Flight Logistics, Pre-Cruise Hotels)
import portMiamiEmbarkationImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/florida-advantage-portmiami-embarkation-insights.jpeg";
import flightLogisticsImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/florida-advantage-caribbean-flight-logistics.jpeg";
import hotelPartnershipsImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/florida-advantage-hotel-precruise-partnerships.jpg";

// 5. Tailored Planning: Couples, Families, Milestones (ThreeColumnGrid)
import couplesHoneymoonImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-couples-honeymoon-travel.jpg";
import familyTravelImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-family-multigen-travel.jpg";
import milestoneChartersImg from "@/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-milestones-group-charters.jpg";

const RitzCarltonYachtTravelAdvisorFlorida = () => {
  // 1. Data mapping for Executive Philosophy (PremiumIntro)
  const introSections = [
    {
      heading: "Florida Luxury Yacht Planning Expertise",
      paragraphs: pageData.executivePhilosophy.paragraphs,
    },
  ];

  // 2. Data mapping for Florida Advantage Cards (ThreeColumnGrid)
  const floridaAdvantageImages = [
    portMiamiEmbarkationImg,
    flightLogisticsImg,
    hotelPartnershipsImg,
  ];
  const floridaAdvantageItems = pageData.floridaAdvantageGrid.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: floridaAdvantageImages[idx % floridaAdvantageImages.length],
    placeholderLabel: card.title,
    description: card.description,
    features: card.features,
    highlight: card.highlight,
  }));

  // 3. Data mapping for Couples, Families & Occasions (ThreeColumnGrid)
  const occasionImages = [
    couplesHoneymoonImg,
    familyTravelImg,
    milestoneChartersImg,
  ];
  const occasionItems = pageData.couplesFamiliesOccasions.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: occasionImages[idx % occasionImages.length],
    placeholderLabel: card.title,
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
  const roadmapCards = pageData.bookingRoadmapAndOngoingSupport.cards.map((card) => ({
    title: card.title,
    items: card.points,
    takeaway: card.takeaway,
  }));

  // 6. Data mapping for Why Trips & Ships Specialties (CardGrid)
  const whyTripsIcons = [
    "Anchor",
    "Ship",
    "Compass",
    "Navigation",
    "Globe",
    "Compass",
    "Building2",
    "MapPin",
    "Users",
    "Sparkles",
    "PlaneTakeoff",
  ];
  const whyTripsCards = pageData.whyTripsAndShips.specialties.map((spec, idx) => ({
    title: spec.title,
    description: spec.description,
    icon: whyTripsIcons[idx % whyTripsIcons.length] || "Star",
  }));

  // 8. Comprehensive JSON-LD Schema Graph (matching RitzCarltonYachtCollectionCost.jsx)
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
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-travel-advisor-florida-hero.jpg",
          "caption": pageData.seo.title,
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-travel-advisor-florida-hero.jpg",
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
            "name": "Luxury Cruises",
            "item": "https://www.tripsandships.com/luxury-cruises",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Collection Travel Advisor in Florida",
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-travel-advisor-florida-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtTravelAdvisorFlorida/ritz-carlton-yacht-travel-advisor-florida-hero.jpg" />
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
        primaryCtaText="Speak with a Florida Advisor"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Planning Services"
        secondaryCtaLink="#quick-answer"
        backgroundImage={heroFloridaAdvisorImg}
      />

      {/* 4. Executive Narrative & Agency Introduction (PremiumIntro) */}
      <div id="executive-philosophy">
        <PremiumIntro
          title="Ritz-Carlton Yacht Collection Travel Advisor in Florida"
          sections={introSections}
          image1={introArchImg}
          image2={introInsetImg}
          alt1="Ritz-Carlton Yacht Florida Embarkation & Luxury Planning"
          alt2="Ritz-Carlton Yacht Luxury Concierge & Caribbean Lifestyle"
          highlightQuote="For a Ritz-Carlton Yacht Collection vacation, the value of an advisor is not simply finding a sailing. It is understanding how the yacht fits into the entire trip."
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

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "b0FqYRs96R4",
          title: "Ritz-Carlton Yacht Departures & Florida Travel Planning",
          description: "Discover how expert Florida luxury travel planning, PortMiami embarkation logistics, and intimate yacht suites create an extraordinary vacation."
        }}
      />

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

      {/* 7. Why Choose a Florida-Based Luxury Travel Advisor? (ThreeColumnGrid) */}
      <div id="florida-advantage">
        <ThreeColumnGrid
          title={pageData.floridaAdvantageGrid.title}
          subtitle={pageData.floridaAdvantageGrid.subtitle}
          items={floridaAdvantageItems}
        />
      </div>

      {/* 8. Voyage, Suite & Inclusions Strategy (BrandPillarsShowcase) */}
      <div id="voyage-suite-strategy">
        <BrandPillarsShowcase data={pageData.voyageAndSuiteStrategy} />
      </div>

      {/* 9. Advisor Costs, Inclusions & Transparency Questions (CostValueAnalysisCards) */}
      <div id="advisor-costs-transparency">
        <CostValueAnalysisCards
          title={pageData.costsAndAdvisorValue.title}
          subtitle={pageData.costsAndAdvisorValue.subtitle}
          includedTitle={pageData.costsAndAdvisorValue.includedTitle}
          included={pageData.costsAndAdvisorValue.included}
          extrasTitle={pageData.costsAndAdvisorValue.extrasTitle}
          extras={pageData.costsAndAdvisorValue.extras}
        />
      </div>

      {/* 10. Travel Advisor vs. Booking Direct Table (LuxuryCruiseComparisonTable) */}
      <div id="advisor-vs-direct">
        <LuxuryCruiseComparisonTable
          title={pageData.comparisonTable.title}
          lead={pageData.comparisonTable.lead}
          headers={pageData.comparisonTable.headers}
          rows={pageData.comparisonTable.rows}
          takeaway={pageData.comparisonTable.takeaway}
        />
      </div>

      {/* 11. Flights, Early Arrival & Miami Port Stays (FeatureGrid) */}
      <div id="flights-miami-port">
        <FeatureGrid
          title={pageData.flightsAndEarlyArrival.title}
          subtitle={pageData.flightsAndEarlyArrival.subtitle}
          features={pageData.flightsAndEarlyArrival.features}
          bgClass="bg-ice-50"
        />
      </div>

      {/* 12. Shore Excursions & Private Experiences (GenericChecklistCards - Usage 1 of 2) */}
      <div id="shore-excursions-private">
        <GenericChecklistCards
          title={pageData.shoreExcursionsAndPrivate.title}
          subtitle={pageData.shoreExcursionsAndPrivate.subtitle}
          cards={excursionCards}
        />
      </div>

      {/* 13. Couples, Families, Milestones & Virtuoso Amenities (ThreeColumnGrid) */}
      <div id="couples-families-virtuoso">
        <ThreeColumnGrid
          title={pageData.couplesFamiliesOccasions.title}
          subtitle={pageData.couplesFamiliesOccasions.subtitle}
          items={occasionItems}
        />
      </div>

      {/* 14. 15 Essential Questions & Advance Booking (GenericChecklistCards - Usage 2 of 2) */}
      <div id="questions-and-support">
        <GenericChecklistCards
          title={pageData.bookingRoadmapAndOngoingSupport.title}
          subtitle={pageData.bookingRoadmapAndOngoingSupport.subtitle}
          cards={roadmapCards}
        />
      </div>

      {/* 15. Can a Travel Advisor Help After You Book? (ExpertAuthorityChecklist) */}
      <div id="advisor-help-after-booking">
        <ExpertAuthorityChecklist
          title={pageData.canAdvisorHelpAfterBooking.title}
          subtitle={pageData.canAdvisorHelpAfterBooking.subtitle}
          points={pageData.canAdvisorHelpAfterBooking.points}
        />
        <div className="w-full bg-slate-50 pb-12 px-6 text-center border-b border-slate-200">
          <p className="font-sans text-slate-700 text-sm md:text-base italic max-w-3xl mx-auto">
            {pageData.canAdvisorHelpAfterBooking.takeaway}
          </p>
        </div>
      </div>

      {/* 16. Why Trips & Ships Luxury Travel? (CardGrid) */}
      <div id="why-trips-and-ships">
        <CardGrid
          title={pageData.whyTripsAndShips.title}
          subtitle={pageData.whyTripsAndShips.lead}
          cards={whyTripsCards}
          columns={3}
          stagger={false}
        />
        {pageData.whyTripsAndShips.takeaway && (
          <div className="w-full bg-slate-50 pb-16 px-6 text-center">
            <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
              <p className="font-sans text-navy-950 text-base md:text-lg font-medium leading-relaxed">
                {pageData.whyTripsAndShips.takeaway}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 17. How to Request Ritz-Carlton Yacht Collection Travel Planning in Florida (BentoQuickFacts) */}
      <div id="how-to-request-planning">
        <BentoQuickFacts
          title={pageData.howToRequestPlanning.title}
          paragraphs={[
            pageData.howToRequestPlanning.lead,
            pageData.howToRequestPlanning.takeaway,
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
              Request Florida Planning
            </a>
          </div>
        </div>
      </div>

      {/* 18. Angela Hughes Credentials & Expertise (ExpertCredentials) */}
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

      {/* 19. Comprehensive 18 FAQs (FAQAccordion) */}
      <div id="faqs">
        <FAQAccordion
          data={{
            title: "Ritz-Carlton Yacht Collection Travel Advisor in Florida: FAQs",
            subtitle: "Direct answers to common questions about booking, suites, flights, Miami hotels, and Florida travel advisor services.",
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

      {/* 19. Final Bottom Center CTA */}
      <CenterCTA
        title="Ready to Plan Your Florida-Based Ritz-Carlton Yacht Vacation?"
        subtitle="Connect with Florida luxury cruise specialist Angela Hughes to curate your ideal yacht suite, Miami hotel arrangements, flights, and exclusive amenities."
        buttonText="Request Florida Advisor Consultation"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtTravelAdvisorFlorida;
