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
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import VideoEmbed from "@/components/ui/VideoEmbed";
import CenterCTA from "@/components/ui/CenterCTA";

// Images
import angelaImage from "@/assets/Media (2).jpg";

// Hero
import heroImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/ritz-carlton-excursions-hero.jpg";

// Executive Narrative Intro (PremiumIntro)
import introExcursionsImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/intro-excursions-caribbean.jpg";
import introWatersportsImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/intro-watersports-lifestyle.jpg";

// Inclusions Breakdown (AsymmetricStoryIntro)
import inclusionsDiningImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/inclusions-dining-mistral.jpg";
import inclusionsMarinaImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/inclusions-marina-watersports.jpg";

// 3 Shore Excursion Categories (ThreeColumnGrid)
import cat1GroupImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/cat1-small-group-shore-collection.jpg";
import cat2PrivateImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/cat2-pre-designed-private-tours.jpg";
import cat3CustomImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/cat3-custom-concierge-ashore.jpg";

// 5 Roadmap Steps (InteractivePlanningRoadmap)
import step1ReleaseImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/step1-120-days-excursion-release.jpg";
import step2PrivateImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/step2-90-days-private-requests.jpg";
import step3ScheduleImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/step3-30-days-confirm-schedule.jpg";
import step4DeskImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/step4-onboard-concierge-desk.jpg";
import step5DayImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/step5-day-of-excursion-execution.jpg";

// Dual Philosophy Showcase
import dualGuidedImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/dual-guided-shore-excursions.jpg";
import dualIndependentImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/dual-independent-port-exploration.jpg";

// Budget Planning Framework (CabinComparisonGallery)
import budgetCruiseImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/budget-cruise-fare-base.jpg";
import budgetExcursionImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/budget-shore-excursions-planning.jpg";
import budgetHotelImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/budget-pre-post-luxury-hotels.jpg";
import budgetSpaImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/budget-onboard-spa-specialties.jpg";

// Traveler Personas (ThreeColumnGrid)
import personaCouplesImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/persona-couples-romance.jpg";
import personaFamiliesImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/persona-families-children.jpg";
import personaAdventurersImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/persona-active-adventurers.jpg";

// CTAs
import midCtaBgImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/excursions-mid-cta-background.jpg";
import finalCtaBgImg from "@/assets/RitzCarltonYachtShoreExcursionsIncluded/excursions-final-cta-background.jpg";


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
  const categoryImages = [cat1GroupImg, cat2PrivateImg, cat3CustomImg];
  const excursionCategoriesItems = pageData.excursionCategories.categories.map(
    (cat, idx) => ({
      title: cat.title,
      category: cat.category,
      image: categoryImages[idx % categoryImages.length],
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
  const roadmapImages = [
    step1ReleaseImg,
    step2PrivateImg,
    step3ScheduleImg,
    step4DeskImg,
    step5DayImg,
  ];
  const bookingTimelineSteps = pageData.bookingTimelineRoadmap.steps.map(
    (step, idx) => ({
      timeframe: step.timeframe,
      title: step.title,
      description: step.description,
      image: roadmapImages[idx % roadmapImages.length],
    })
  );

  // 7. Data mapping for Budget Planning Framework (ThreeColumnGrid with Images & 100% Content Intact)
  const budgetImages = [
    budgetCruiseImg,
    budgetExcursionImg,
    budgetHotelImg,
    budgetSpaImg,
  ];
  const budgetCardsItems = pageData.completeBudgetFramework.items.map((item, idx) => ({
    title: item.name,
    category: item.price,
    description: item.description,
    features: item.features,
    image: budgetImages[idx % budgetImages.length],
    placeholderLabel: item.name,
  }));

  // 8. Data mapping for Traveler Personas (ThreeColumnGrid with Images)
  const personaImages = [
    personaCouplesImg,
    personaFamiliesImg,
    personaAdventurersImg,
  ];
  const personaItems = pageData.travelerPersonas.cards.map((card, idx) => ({
    title: card.title,
    category: card.category,
    image: personaImages[idx % personaImages.length],
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

  // Complete Schema JSON-LD Graph (1:1 with RitzCarltonYachtCollectionCost schema structure)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-shore-excursions-included/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-shore-excursions-included",
        "name": pageData.seo.ogTitle || pageData.seo.title,
        "headline": pageData.hero.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtShoreExcursionsIncluded/ritz-carlton-excursions-hero.jpg",
          "caption": pageData.hero.title
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtShoreExcursionsIncluded/ritz-carlton-excursions-hero.jpg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-shore-excursions-included/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Shore Excursions Included",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-shore-excursions-included"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-shore-excursions-included/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtShoreExcursionsIncluded/ritz-carlton-excursions-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.metaDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtShoreExcursionsIncluded/ritz-carlton-excursions-hero.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
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
        secondaryCtaLink="/contact"
        backgroundImage={heroImg}
        bgPosition="bg-center object-cover"
        overlayClassName="bg-gradient-to-b from-navy-950/55 via-navy-950/15 to-navy-950/70"
      />

      {/* 4. Executive Narrative Intro (PremiumIntro) */}
      <div id="content">
        <PremiumIntro
          badge={pageData.executivePhilosophy.badge}
          title={pageData.executivePhilosophy.title}
          highlight={pageData.executivePhilosophy.highlight}
          quote={pageData.executivePhilosophy.quote}
          sections={introSections}
          image1={introExcursionsImg}
          image2={introWatersportsImg}
          alt1="Ritz-Carlton Yacht Caribbean Shore Excursion"
          alt2="Ritz-Carlton Yacht Marina Watersports"
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
          image1={inclusionsDiningImg}
          image2={inclusionsMarinaImg}
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
          buttonLink="/contact"
          image={midCtaBgImg}
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
          imageSailing={dualGuidedImg}
          imageAllSuite={dualIndependentImg}
        />
      </div>

      {/* 16. Total Vacation Budget Framework (ThreeColumnGrid with Images & AuthorityBox) */}
      <div id="budget-framework">
        <ThreeColumnGrid
          title={pageData.completeBudgetFramework.title}
          subtitle={pageData.completeBudgetFramework.subtitle}
          items={budgetCardsItems}
        />
        <div className="max-w-5xl mx-auto px-6 py-6">
          <AuthorityBox
            title={pageData.completeBudgetFramework.takeaway.title}
            content={pageData.completeBudgetFramework.takeaway.content}
            author="Angela Hughes, Luxury Cruise Specialist & CEO"
            authorImage={angelaImage}
          />
        </div>
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
        ctaLink="/contact"
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

      {/* 25. Video Section Component (VideoEmbed Component) ─── */}
      <VideoEmbed
        data={{
          youtubeId: "sQPnGRkiLdg",
          title: "Experience Ritz-Carlton Yacht Shore Excursions",
          description: "Discover what makes shore excursions, marina water sports, and bespoke private tours extraordinary with The Ritz-Carlton Yacht Collection."
        }}
      />

      {/* 26. Final Bottom CTA */}
      <CenterCTA
        title="Ready to Plan Your Yacht Vacation?"
        description="Connect with Trips & Ships Luxury Travel to secure locked-in cruise rates, exclusive Virtuoso amenities, and expert shoreside planning support."
        buttonText="Contact a Yacht Specialist"
        buttonLink="/contact"
        image={finalCtaBgImg}
        theme="dark"
      />
    </div>
  );
};

export default RitzCarltonYachtShoreExcursionsIncluded;
