import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

// Page Data JSON
import pageData from "./data.json";

// Shared Components & UI System from /src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import PremiumIntro from "@/components/ui/PremiumIntro";
import HighlightsSplit from "@/components/ui/HighlightsSplit";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import InteractivePlanningRoadmap from "@/components/ui/InteractivePlanningRoadmap";
import PricingTiersCards from "@/components/ui/PricingTiersCards";
import RitzFamilySelector from "@/components/ui/RitzFamilySelector";
import InteractivePackingChecklist from "@/components/ui/InteractivePackingChecklist";
import HierarchicalGrid from "@/components/ui/HierarchicalGrid";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import InteractivePillarHubGrid from "@/components/ui/InteractivePillarHubGrid";
import CenterCTA from "@/components/ui/CenterCTA";

const RitzCarltonYachtCollectionFamiliesChildren = () => {
  // 1. Map slides for PremiumIntro (Hero & Quick Answer)
  const introSections = [
    {
      heading: "A Luxury Family Vacation Built Around Exploration",
      paragraphs: pageData.hero.readMoreParagraphs,
    },
    {
      heading: pageData.quickAnswer.title,
      paragraphs: [
        pageData.quickAnswer.description,
        "What Ritz-Carlton Yacht Offers: Ritz Kids® programming, dedicated children's spaces, family-friendly dining, suite accommodations, Marina watersports, small-yacht intimacy, and destination-focused shore experiences.",
        "Important Limitations to Know: No onboard babysitting or nursery, Ritz Kids is aimed at ages 4–12, sessions may carry an extra fee, and there are no mega-ship waterslides or arcades.",
      ],
    },
  ];

  // 2. Map Ritz Kids highlights for HighlightsSplit
  const ritzKidsHighlights = [
    {
      title: "Ritz Kids® Enrichment Philosophy",
      description:
        "Ritz Kids® is designed to encourage children to explore the world through discovery, ocean conservation, creative workshops, and cultural learning. The guiding philosophy: Explore → Learn → Discover → Experience.",
      bulletPoints: [
        "Ages 4–12 Focus: Dedicated interactive programming connecting young travelers with maritime nature.",
        "Marine Conservation: Hands-on learning about ocean ecosystems and coral reef preservation.",
        "Fleetwide Spaces: Custom children's rooms aboard Evrima, Ilma, and Luminara.",
        "Holiday Enhancements: Expanded session offerings during peak summer and holiday voyages.",
      ],
      image: null,
      placeholderLabel: "RITZ KIDS PLACEHOLDER",
      icon: "Sparkles",
    },
    {
      title: "Childcare & Supervision Guidelines",
      description:
        "The Ritz-Carlton Yacht Collection does not provide private babysitting or infant care. Understanding supervision boundaries ensures a smooth family sailing.",
      bulletPoints: [
        "No Onboard Babysitting: Parents of infants and toddlers must supervise children directly outside Ritz Kids hours.",
        "Age Minimums: 6 months minimum for standard sailings; 1 year minimum for voyages with 3+ consecutive sea days.",
        "Family Dining: Shared-plate Asian-inspired and al fresco venues offer relaxed, convivial dining without formal nights.",
        "Marina Safety: Kayaking, paddleboarding, and swimming from the Marina platform under adult supervision.",
      ],
      image: null,
      placeholderLabel: "FAMILY MARINA PLACEHOLDER",
      icon: "Shield",
    },
  ];

  // 3. Map Suitability to CostValueAnalysisCards format
  const advantagesMapped = pageData.suitabilityAnalysis.advantages.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  const challengesMapped = pageData.suitabilityAnalysis.challenges.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  // 4. Map Best Activities to BrandPillarsShowcase format
  const activitiesData = {
    title: pageData.bestActivities.title,
    subtitle: pageData.bestActivities.subtitle,
    pillars: pageData.bestActivities.activities.map((act) => ({
      title: act.title,
      description: act.description,
      icon: "compass",
    })),
  };

  // 5. Map Fleet Comparison to ThreeColumnGrid
  const fleetItems = pageData.fleetComparison.cards.map((card) => ({
    title: card.title,
    description: card.description,
    image: null,
    placeholderLabel: card.badge,
  }));

  // 6. Map Sample Day Timeline to InteractivePlanningRoadmap
  const timelineSteps = pageData.sampleDay.timeline.map((item, idx) => ({
    timeframe: item.time,
    title: item.label,
    description: item.desc,
    image: null,
    placeholderLabel: `STAGE 0${idx + 1} PLACEHOLDER`,
  }));

  // 7. Map Age Tiers to PricingTiersCards format
  const ageTierItems = pageData.ageTierGuides.tiers.map((tier) => ({
    name: tier.title,
    price: tier.badge,
    description: tier.description,
    nights: "Age Suitability",
  }));

  // 8. Map Gallery to HierarchicalGrid
  const galleryItems = pageData.gallery.items.map((item) => ({
    title: item.title,
    description: item.description,
    image: null,
    placeholderLabel: item.badge,
  }));

  // 9. Map Curated Pillar Hub Guides
  const curatedGuides = [
    {
      title: "Ritz-Carlton Yacht Collection Pillar",
      category: "Main Fleet Guide",
      description:
        "The Ritz-Carlton Yacht Collection: Reviews, prices, suite categories, dining, and everything you need to know.",
      image: null,
      placeholderLabel: "PILLAR GUIDE",
      links: [
        { label: "Ritz-Carlton Yacht Collection Guide", url: "/ritz-carlton-yacht-collection" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection",
    },
    {
      title: "How Much Does a Ritz-Carlton Cruise Cost?",
      category: "Cost & Inclusions",
      description:
        "Understand fares, suite categories, and total vacation investment for a Ritz-Carlton yacht sailing.",
      image: null,
      placeholderLabel: "COST GUIDE",
      links: [
        { label: "Ritz-Carlton Cruise Cost Guide", url: "/ritz-carlton-yacht-collection-cost" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-cost",
    },
    {
      title: "What Is Included on a Ritz-Carlton Cruise?",
      category: "Onboard Inclusions",
      description:
        "A detailed guide to dining, beverages, Wi-Fi, gratuities, marina sports, and suite inclusions.",
      image: null,
      placeholderLabel: "INCLUSIONS GUIDE",
      links: [
        { label: "Ritz-Carlton Inclusions Guide", url: "/ritz-carlton-yacht-collection-included" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-included",
    },
    {
      title: "What Is the Dress Code on Ritz-Carlton Yachts?",
      category: "Style & Packing",
      description:
        "Complete guide to Yacht Casual, Yacht Sophisticated dinner attire, shoes, and 7-night capsule packing.",
      image: null,
      placeholderLabel: "DRESS CODE GUIDE",
      links: [
        { label: "Ritz-Carlton Yacht Dress Code Guide", url: "/ritz-carlton-yacht-collection-dress-code" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-dress-code",
    },
    {
      title: "Evrima vs. Ilma vs. Luminara",
      category: "Fleet Comparison",
      description:
        "Compare the three Ritz-Carlton yachts by size, suites, dining venues, atmosphere, and traveler type.",
      image: null,
      placeholderLabel: "FLEET COMPARISON",
      links: [
        { label: "Evrima vs Ilma vs Luminara", url: "/ritz-carlton-evrima-vs-ilma-vs-luminara" },
      ],
      mainUrl: "/ritz-carlton-evrima-vs-ilma-vs-luminara",
    },
    {
      title: "Ritz-Carlton vs. Explora & Seabourn",
      category: "Brand Comparisons",
      description:
        "Compare Ritz-Carlton Yacht Collection with Explora Journeys and Seabourn luxury cruises.",
      image: null,
      placeholderLabel: "BRAND FACEOFFS",
      links: [
        { label: "Ritz-Carlton vs Explora Journeys", url: "/ritz-carlton-yacht-collection-vs-explora-journeys" },
        { label: "Ritz-Carlton vs Seabourn", url: "/ritz-carlton-yacht-collection-vs-seabourn" },
      ],
      mainUrl: "/ritz-carlton-yacht-collection-vs-explora-journeys",
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#article",
        "headline": "Are Ritz-Carlton Yacht Cruises Good for Families and Children?",
        "description":
          "Discover whether Ritz-Carlton Yacht Collection is suitable for families and children, including Ritz Kids, age requirements, family accommodations, dining, activities, childcare and tips for planning a luxury family yacht cruise.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#webpage",
        },
        "author": {
          "@type": "Person",
          "@id": "https://www.tripsandships.com/about-angela-hughes#person",
          "name": "Angela Hughes",
        },
        "publisher": {
          "@type": "TravelAgency",
          "@id": "https://www.tripsandships.com/#organization",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children",
        "name": "Are Ritz-Carlton Yacht Cruises Good for Families and Children?",
        "description":
          "A family guide to Ritz-Carlton Yacht Collection, including Ritz Kids, age requirements, family accommodations, dining, activities and childcare.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#family-features",
        "name": "Ritz-Carlton Yacht Collection Family Features",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ritz Kids",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Family-Friendly Dining",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Family Suite Accommodations",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Pool and Marina Activities",
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Family Shore Excursions",
          },
        ],
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@type": "TravelAgency",
          "@id": "https://www.tripsandships.com/#organization",
          "name": "Trips & Ships Luxury Travel",
        },
        "description":
          "Luxury travel advisor and CEO of Trips & Ships Luxury Travel with more than 40 years of travel experience and travel experience spanning more than 121 countries.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#breadcrumb",
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
            "name": "Ritz-Carlton Yachts for Families & Children",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children#faq",
        "mainEntity": pageData.faqs.questions.map((faq) => ({
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
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (Hero & H1) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro (Hero Read-More & Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="Family Luxury"
      />

      {/* ─── SECTION 3: HighlightsSplit (Ritz Kids & Supervision Guidelines) ─── */}
      <HighlightsSplit
        title="Ritz Kids® Enrichment & Family Guidelines"
        items={ritzKidsHighlights}
      />

      {/* ─── SECTION 4: CostValueAnalysisCards (Advantages vs. Challenges) ─── */}
      <CostValueAnalysisCards
        title={pageData.suitabilityAnalysis.title}
        subtitle={pageData.suitabilityAnalysis.subtitle}
        includedTitle={pageData.suitabilityAnalysis.advantagesTitle}
        extrasTitle={pageData.suitabilityAnalysis.challengesTitle}
        included={advantagesMapped}
        extras={challengesMapped}
      />

      {/* ─── SECTION 5: BrandPillarsShowcase (Top 5 Family Activities) ─── */}
      <BrandPillarsShowcase data={activitiesData} />

      {/* ─── SECTION 6: ThreeColumnGrid (Fleet Comparison: Evrima, Ilma, Luminara) ─── */}
      <ThreeColumnGrid
        title={pageData.fleetComparison.title}
        subtitle={pageData.fleetComparison.subtitle}
        items={fleetItems}
      />

      {/* ─── SECTION 7: PricingTiersCards (Age Tier Planning Guidelines) ─── */}
      <PricingTiersCards
        title={pageData.ageTierGuides.title}
        subtitle={pageData.ageTierGuides.subtitle}
        items={ageTierItems}
        theme="light"
      />

      {/* ─── SECTION 8: Interactive Planning Roadmap (Sample Family Day Timeline) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.sampleDay.title}
        subtitle={pageData.sampleDay.subtitle}
        steps={timelineSteps}
      />

      {/* ─── SECTION 9: RitzFamilySelector (Interactive Selector Tool) ─── */}
      <RitzFamilySelector />

      {/* ─── SECTION 10: InteractivePackingChecklist (Family Planning & Packing Checklist) ─── */}
      <InteractivePackingChecklist
        title={pageData.familyChecklist.title}
        subtitle={pageData.familyChecklist.subtitle}
        categories={pageData.familyChecklist.categories}
        images={[]}
      />

      {/* ─── SECTION 11: HierarchicalGrid (Families at Sea Visual Showcase) ─── */}
      <HierarchicalGrid
        title={pageData.gallery.title}
        subtitle={pageData.gallery.subtitle}
        items={galleryItems}
      />

      {/* ─── SECTION 12: ExpertCredentials (Angela Hughes Perspective) ─── */}
      <ExpertCredentials
        name={pageData.expert.name}
        title={pageData.expert.role}
        bio={`${pageData.expert.description1} ${pageData.expert.description2}`}
        image={null}
        badge="LUXURY FAMILY VOYAGE SPECIALIST"
        experienceBadge="40+ YEARS LEGACY EXPERTISE"
        credentials={[
          "Named Luxury Travel Influencer of the Year by Travel Leaders Network",
          "Recognized among Most Influential Women in Travel by TravelPulse",
          "Over 4 Decades Designing Multigenerational Yacht & Luxury Voyages",
          "Traveled to more than 121 Countries Worldwide with Family",
          "Founder of Luxury Travel University training top luxury cruise advisors",
        ]}
      />

      {/* ─── SECTION 13: FAQ Accordion (All 20 FAQs) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 14: Curated Guides Hub (InteractivePillarHubGrid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Related Ritz-Carlton Yacht Collection Guides & Comparisons"
          subtitle="Continue planning your luxury yacht vacation with in-depth guides on cost, inclusions, dress codes, suite layouts, and fleet showdowns."
          items={curatedGuides}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 15: Center CTA (Final Family Consultation CTA) ─── */}
      <CenterCTA
        title="Planning a Ritz-Carlton Yacht Cruise With Your Family?"
        description="The right family yacht vacation starts with choosing the right itinerary, suite, and shore experiences. Talk with Trips & Ships Luxury Travel about planning a personalized Ritz-Carlton Yacht Collection vacation for your family."
        buttonText="Plan My Family Yacht Cruise"
        buttonLink="/contact"
        image={null}
      />
    </>
  );
};

export default RitzCarltonYachtCollectionFamiliesChildren;
