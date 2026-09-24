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
import VideoEmbed from "@/components/ui/VideoEmbed";
import CenterCTA from "@/components/ui/CenterCTA";

// Author & Profile Image
import angelaImage from "@/assets/Media (2).jpg";

// SEO Assets from assets/RitzCarltonYachtCollectionFamiliesChildren
import heroBgImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-yacht-families-children-hero.jpeg";
import introPoolImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/luxury-family-vacation-pool-deck.jpg";
import introTeaImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-afternoon-tea-lifestyle.jpeg";

// HighlightsSplit Images
import ritzKidsWatersportsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-kids-enrichment-watersports.jpg";
import familyMarinaSupervisionImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-marina-supervision-guidelines.jpg";

// Fleet Comparison Images
import evrimaFleetImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-evrima-family-yacht.jpeg";
import ilmaFleetImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-ilma-family-yacht.jpg";
import luminaraFleetImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-luminara-family-yacht.jpeg";

// Sample Day Timeline Images
import timelineBreakfastImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-family-breakfast.jpg";
import timelineRitzKidsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-ritz-kids-session.jpg";
import timelineParentsQuietImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-parents-quiet-time.jpg";
import timelinePoolLunchImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-poolside-family-lunch.jpg";
import timelineExcursionImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-family-shore-excursion.jpeg";
import timelineWatersportsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-marina-watersports-fun.jpeg";
import timelineSuiteRefreshImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-suite-evening-refresh.jpg";
import timelineDinnerImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-shared-family-dinner.jpg";
import timelineStarlitWalkImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/sample-day-starlit-deck-walk.jpg";

// Family Packing Checklist Images
import checklistChildrenImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-checklist-children.jpeg";
import checklistParentsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-checklist-parents.jpeg";
import checklistBookingImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-checklist-booking.jpeg";
import checklistSailingImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-checklist-sailing.jpeg";

// Gallery / HierarchicalGrid Images
import galleryExcursionsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/gallery-destination-exploration.jpg";
import galleryRitzKidsImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/gallery-ritz-kids-spaces.jpg";
import galleryMarinaImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/gallery-marina-watersports.jpg";
import galleryDiningImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/gallery-family-dining.jpg";


// CTA Background Image
import ctaBgImg from "@/assets/RitzCarltonYachtCollectionFamiliesChildren/family-vacation-cta-background.jpg";

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
      image: ritzKidsWatersportsImg,
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
      image: familyMarinaSupervisionImg,
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
  const fleetImages = [evrimaFleetImg, ilmaFleetImg, luminaraFleetImg];
  const fleetItems = pageData.fleetComparison.cards.map((card, idx) => ({
    title: card.title,
    description: card.description,
    image: fleetImages[idx % fleetImages.length],
    placeholderLabel: card.badge,
  }));

  // 6. Map Sample Day Timeline to InteractivePlanningRoadmap
  const timelineImages = [
    timelineBreakfastImg,
    timelineRitzKidsImg,
    timelineParentsQuietImg,
    timelinePoolLunchImg,
    timelineExcursionImg,
    timelineWatersportsImg,
    timelineSuiteRefreshImg,
    timelineDinnerImg,
    timelineStarlitWalkImg,
  ];
  const timelineSteps = pageData.sampleDay.timeline.map((item, idx) => ({
    timeframe: item.time,
    title: item.label,
    description: item.desc,
    image: timelineImages[idx % timelineImages.length],
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
  const galleryImages = [
    galleryExcursionsImg,
    galleryRitzKidsImg,
    galleryMarinaImg,
    galleryDiningImg,
  ];
  const galleryItems = pageData.gallery.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    image: galleryImages[idx % galleryImages.length],
    placeholderLabel: item.badge,
  }));



  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children",
        "name": pageData.seo.ogTitle || pageData.seo.title,
        "headline": pageData.hero.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-yacht-families-children-hero.jpeg",
          "caption": pageData.hero.title,
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-yacht-families-children-hero.jpeg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization",
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website",
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
        "description":
          "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader with over 40 years designing multigenerational and family yacht voyages across 121+ countries.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization",
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "Family Luxury Travel",
          "Multigenerational Cruises",
          "Ritz-Carlton Yacht Collection",
          "Ritz Kids Program",
          "Luxury Family Vacations",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children/#breadcrumb",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-families-children/#faq",
        "mainEntity": (pageData.faqs?.questions || pageData.faqs || []).map((faq) => ({
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

  const familyChecklistImages = [
    checklistChildrenImg,
    checklistParentsImg,
    checklistBookingImg,
    checklistSailingImg,
  ];

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta
          property="og:image"
          content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-yacht-families-children-hero.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle || pageData.seo.title} />
        <meta name="twitter:description" content={pageData.seo.ogDescription || pageData.seo.metaDescription} />
        <meta
          name="twitter:image"
          content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionFamiliesChildren/ritz-carlton-yacht-families-children-hero.jpeg"
        />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (Hero & H1) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBgImg}
        bgPosition="bg-center object-cover"
        overlayClassName="bg-gradient-to-b from-navy-950/55 via-navy-950/15 to-navy-950/70"
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro (Hero Read-More & Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={introPoolImg}
        image2={introTeaImg}
        alt1="Ritz-Carlton Yacht Family Pool Deck Experience"
        alt2="Ritz-Carlton Family Lifestyle & Dining"
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

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "Dc4_5xrUzUM",
          title: "Ritz-Carlton Yacht Family Experience",
          description: "Discover what makes a Ritz-Carlton yacht cruise a uniquely intimate and memorable journey for discerning families."
        }}
      />

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
        images={familyChecklistImages}
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
        image={angelaImage}
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

      {/* ─── SECTION 15: Center CTA (Final Family Consultation CTA) ─── */}
      <CenterCTA
        title="Planning a Ritz-Carlton Yacht Cruise With Your Family?"
        description="The right family yacht vacation starts with choosing the right itinerary, suite, and shore experiences. Talk with Trips & Ships Luxury Travel about planning a personalized Ritz-Carlton Yacht Collection vacation for your family."
        buttonText="Plan My Family Yacht Cruise"
        buttonLink="/contact"
        image={ctaBgImg}
      />
    </>
  );
};

export default RitzCarltonYachtCollectionFamiliesChildren;
