import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared Components & UI System exclusively from src/components/ui/
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import DynamicCulinaryShowcase from '@/components/ui/DynamicCulinaryShowcase';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';

function CelebrityCruisesTheRetreat() {
  // 1. Intro Section Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. What Is The Retreat Curvilinear Grid Items (100% exact 13 items from data.json)
  const iconList = ['ship', 'user', 'user', 'utensils', 'Compass', 'Compass', 'Coffee', 'Coffee', 'ship', 'check', 'user', 'Heart', 'ship'];
  const whatIsTheRetreatCurvilinearItems = pageData.whatIsTheRetreat.includedHighlights.map((item, idx) => ({
    title: item,
    description: `Core Retreat inclusion and suite-exclusive benefit. ${pageData.whatIsTheRetreat.footnote}`,
    icon: iconList[idx] || 'check',
  }));

  // 3. What Is Included Table for ComparisonTable
  const whatIsIncludedTableData = {
    title: pageData.whatIsIncluded.title,
    headers: pageData.whatIsIncluded.headers,
    rows: pageData.whatIsIncluded.rows.map((row) => [row.benefit, row.value]),
  };

  // 4. Cabin Comparison Gallery for Suite Categories Showcase
  const suiteGalleryItems = [
    {
      name: pageData.skySuite.title,
      price: 'Entry Point Suite',
      description: `${pageData.skySuite.lead} ${pageData.skySuite.body} ${pageData.skySuite.sideNote} ${pageData.skySuite.footnote}`,
      features: pageData.skySuite.highlights,
      image: null,
    },
    {
      name: pageData.aquaSkySuite.title,
      price: 'Wellness + Suite',
      description: `${pageData.aquaSkySuite.lead} ${pageData.aquaSkySuite.body} ${pageData.aquaSkySuite.benefitsLead} ${pageData.aquaSkySuite.footnote}`,
      features: pageData.aquaSkySuite.highlights,
      image: null,
    },
    {
      name: pageData.celebritySuite.title,
      price: 'Two-Room Suites',
      description: `${pageData.celebritySuite.lead} ${pageData.celebritySuite.body} ${pageData.celebritySuite.suitabilityLead} ${pageData.celebritySuite.sideNote}`,
      features: pageData.celebritySuite.highlights,
      image: null,
    },
    {
      name: pageData.royalSuite.title,
      price: 'Higher-Level Suite',
      description: `${pageData.royalSuite.lead} ${pageData.royalSuite.body} ${pageData.royalSuite.closing}`,
      features: [
        'Substantial living and sleeping space',
        'Complimentary specialty dining',
        'Daily laundry service',
        'Unlimited pressing service',
        'Enhanced suite amenities',
        'Full Retreat access and dedicated butler',
      ],
      image: null,
    },
    {
      name: pageData.signatureSuite.title,
      price: 'Ship-Specific (Reflection)',
      description: `${pageData.signatureSuite.lead} ${pageData.signatureSuite.body} ${pageData.signatureSuite.footnote}`,
      features: [
        'Approximately 441 sq. ft. interior space',
        '118 sq. ft. private terrace',
        'Higher ceilings & panoramic floor-to-ceiling windows',
        'Enhanced Retreat suite amenities',
        'Available exclusively on Celebrity Reflection',
      ],
      image: null,
    },
    {
      name: pageData.penthouseSuite.title,
      price: 'Largest Suite Categories',
      description: `${pageData.penthouseSuite.lead} ${pageData.penthouseSuite.body} ${pageData.penthouseSuite.featuresLead}`,
      features: pageData.penthouseSuite.highlights,
      image: null,
    },
    {
      name: pageData.edgeVilla.title,
      price: 'Two-Level Living',
      description: `${pageData.edgeVilla.lead} ${pageData.edgeVilla.body} ${pageData.edgeVilla.closing}`,
      features: [
        'Two-story architectural design',
        'Indoor and outdoor seamless living',
        'Private terrace with plunge pool',
        'Edge Series exclusive configuration',
        'Enhanced suite benefits eligible',
      ],
      image: null,
    },
    {
      name: pageData.iconicSuite.title,
      price: 'Top of the Fleet',
      description: `${pageData.iconicSuite.lead} ${pageData.iconicSuite.body} ${pageData.iconicSuite.sideNote}`,
      features: [
        'Fleet largest suite (~1,892 sq. ft. interior)',
        '689 sq. ft. expansive veranda',
        'Panoramic positioning over the bridge',
        'Highest tier of Retreat amenities and service',
      ],
      image: null,
    },
  ];

  // 5. Dynamic Culinary Showcase for Luminae at The Retreat
  const luminaeCulinaryItems = [
    {
      title: 'Luminae Breakfast',
      description: 'Exclusive morning menu served only to Retreat suite guests in an intimate private atmosphere.',
    },
    {
      title: 'Luminae Lunch',
      description: 'Private lunch dining featuring seasonal creations and dedicated culinary attention.',
    },
    {
      title: 'Luminae Dinner',
      description: 'Nightly evolving menus exclusive to The Retreat, paired with personalized wine selections.',
    },
    {
      title: 'Signature Daniel Boulud Dishes',
      description: 'Complimentary signature dishes crafted by Chef Daniel Boulud, Celebrity’s Global Culinary Brand Ambassador.',
    },
  ];

  // 6. Luxury ZigZag Showcase for Retreat Lounge & Sundeck
  const retreatVenuesZigZag = [
    {
      title: pageData.retreatLounge.title,
      subtitle: `${pageData.retreatLounge.lead} ${pageData.retreatLounge.body} ${pageData.retreatLounge.subBody}`,
      description: `${pageData.retreatLounge.amenitiesLead} ${pageData.retreatLounge.amenities.join(', ')}. ${pageData.retreatLounge.footnote}`,
      badge: '24/7 PRIVATE LOUNGE',
    },
    {
      title: pageData.retreatSundeck.title,
      subtitle: `${pageData.retreatSundeck.lead} ${pageData.retreatSundeck.body}`,
      description: `${pageData.retreatSundeck.featuresLead} ${pageData.retreatSundeck.features.join(', ')}. ${pageData.retreatSundeck.footnote} ${pageData.retreatSundeck.sideNote}`,
      badge: 'OUTDOOR SANCTUARY',
    },
  ];

  // 7. Editorial Feature Showcase for Butler & Concierge
  const butlerAndConciergeFeatures = [
    {
      title: 'Dedicated Butler Attention & Butler Chat',
      description: `${pageData.butlerService.lead} ${pageData.butlerService.body} Services include: ${pageData.butlerService.services.join(', ')}. ${pageData.butlerService.footnote} ${pageData.butlerService.chatTitle}: ${pageData.butlerService.chatParagraphs.join(' ')}`,
    },
    {
      title: 'Retreat Concierge & Destination Specialist',
      description: `${pageData.conciergeDestination.lead} ${pageData.conciergeDestination.body} ${pageData.conciergeDestination.helpLead} ${pageData.conciergeDestination.helpItems.join(', ')}.`,
    },
  ];

  // 8. Bento Glassmorphism Grid for Dining & Beverage Benefits
  const diningBeverageBentoItems = pageData.diningBeverageBenefits.cards.map((card) => ({
    title: card.title,
    description: card.uses ? `${card.description} ${card.usesLead} ${card.uses.join(', ')}.` : card.description,
    tag: 'F&B BENEFIT',
    image: null,
  }));

  // 9. Benefits by Suite Category Table for LuxuryCruiseComparisonTable
  const benefitsBySuiteRows = pageData.benefitsBySuite.rows.map((row) => [
    row.benefit,
    row.sky,
    row.aqua,
    row.royal,
  ]);

  // 10. Ships with The Retreat for ThreeColumnGrid
  const shipClassesGrid = pageData.shipsWithRetreat.shipClasses.map((item) => ({
    title: item.title,
    description: item.description,
    image: null,
    placeholderLabel: item.title,
  }));

  // 10b. Why Ship Selection Matters for GenericChecklistCards
  const whyShipMattersCards = [
    {
      title: 'Key Differences Across Ship Classes',
      items: pageData.shipsWithRetreat.checks,
    },
    {
      title: 'Design & Venue Architecture',
      items: [
        pageData.shipsWithRetreat.whyMattersLead,
        pageData.shipsWithRetreat.designNote,
      ],
    },
  ];

  // 11. Edge & Solstice Series for HighlightsSplit
  const shipClassesHighlights = [
    {
      title: pageData.edgeSeries.title,
      description: `${pageData.edgeSeries.lead} ${pageData.edgeSeries.body} ${pageData.edgeSeries.footnote}`,
      bulletPoints: pageData.edgeSeries.highlights,
      image: null,
      placeholderLabel: 'Edge Series Retreat — Luminae, Lounge & Sundeck',
      icon: 'Ship',
    },
    {
      title: pageData.solsticeSeries.title,
      description: `${pageData.solsticeSeries.lead} ${pageData.solsticeSeries.body} ${pageData.solsticeSeries.footnote}`,
      bulletPoints: pageData.solsticeSeries.highlights,
      image: null,
      placeholderLabel: 'Solstice Series Retreat — Renewed Venues & Daniel Boulud Menu',
      icon: 'Globe',
    },
  ];

  // 12. The Retreat vs. AquaClass Table for ComparisonTable
  const retreatVsAquaTableData = {
    title: pageData.retreatVsAquaClass.title,
    headers: pageData.retreatVsAquaClass.headers,
    rows: pageData.retreatVsAquaClass.rows.map((row) => [
      row.feature,
      row.aqua,
      row.retreat,
    ]),
  };

  // 13. The Retreat vs. Concierge Class for DetailedInclusionsList
  const retreatVsConciergeDetailedItems = [
    {
      title: pageData.retreatVsConcierge.title,
      paragraphs: [
        pageData.retreatVsConcierge.lead,
        pageData.retreatVsConcierge.body,
        pageData.retreatVsConcierge.footnote,
      ],
      lists: [
        {
          title: pageData.retreatVsConcierge.addsLead,
          items: pageData.retreatVsConcierge.highlights,
        },
      ],
    },
  ];

  // 14. Is The Retreat Worth Considering for CostValueAnalysisCards
  const worthAttractiveMapped = pageData.isRetreatWorthIt.attractiveList.map((item) => ({
    title: item,
    description: 'High return on investment through dedicated services, private venues, and luxury inclusions.',
  }));

  const worthLessCompellingMapped = pageData.isRetreatWorthIt.lessCompellingList.map((item) => ({
    title: 'Port-Focused Stateroom Priority',
    description: item,
  }));

  // 15. How to Choose Roadmap for InteractivePlanningRoadmap
  const chooseSuiteSteps = pageData.howToChoose.cards.map((card, idx) => ({
    title: card.title,
    timeframe: `OPTION 0${idx + 1}`,
    description: card.highlights ? `${card.description} Highlights: ${card.highlights.join(', ')}.` : card.description,
    image: null,
  }));

  // 16. What to Check Before Booking for BrandPillarsShowcase
  const whatToCheckPillars = {
    title: pageData.whatToCheckBeforeBooking.title,
    subtitle: `${pageData.whatToCheckBeforeBooking.lead} ${pageData.whatToCheckBeforeBooking.footnote}`,
    pillars: pageData.whatToCheckBeforeBooking.checks.map((check) => ({
      title: check.title,
      description: check.description,
      icon: 'shield-check',
    })),
  };

  // 17. Video Showcase Data for InclusionsVideoOne
  const videoShowcaseData = {
    youtubeId: 'placeholder',
    title: pageData.video.title,
    subtitle: pageData.video.title.toUpperCase(),
    description: `${pageData.video.subtitle} ${pageData.video.captionTag} ${pageData.video.captionText}`,
  };

  // 18. Conclusion Data for ConclusionSection
  const conclusionSectionsData = [
    {
      heading: pageData.conclusion.title,
      paragraphs: [
        ...pageData.conclusion.paragraphs,
        `"${pageData.conclusion.quote}"`,
      ],
    },
  ];

  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.tripsandships.com#organization',
        name: 'Trips and Ships',
        url: 'https://www.tripsandships.com',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/the-retreat',
        name: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat#article',
        headline: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat',
        },
        author: {
          '@type': 'Organization',
          name: 'Trips and Ships',
          url: 'https://www.tripsandships.com',
        },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.tripsandships.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Celebrity Cruises',
            item: 'https://www.tripsandships.com/celebrity-cruises',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'The Retreat',
            item: 'https://www.tripsandships.com/celebrity-cruises/the-retreat',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/the-retreat#faq',
        mainEntity: pageData.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={pageData.meta.keywords} />
        <link rel="canonical" href={pageData.meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ─── 1. HERO (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        eyebrow={pageData.hero.eyebrow}
        primaryCtaText={pageData.cta.primaryBtnText}
        primaryCtaLink={pageData.cta.primaryBtnUrl}
        secondaryCtaText={pageData.cta.secondaryBtnText}
        secondaryCtaLink={pageData.cta.secondaryBtnUrl}
      />

      {/* ─── 2. INTRO (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="The Retreat"
      />

      {/* ─── 3. WHAT IS THE RETREAT (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.whatIsTheRetreat.title}
        subtitle={pageData.whatIsTheRetreat.eyebrow}
        paragraphs={[
          pageData.whatIsTheRetreat.lead,
          pageData.whatIsTheRetreat.body,
          pageData.whatIsTheRetreat.footnote,
        ]}
        items={whatIsTheRetreatCurvilinearItems}
      />

      {/* ─── 4. WHAT IS INCLUDED (ComparisonTable & AuthorityBox) ─── */}
      <ComparisonTable data={whatIsIncludedTableData} />
      <AuthorityBox
        title="RETREAT INCLUSIONS POLICY"
        content={pageData.whatIsIncluded.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
      />

      {/* ─── 5. SUITE CATEGORIES GALLERY (CabinComparisonGallery) ─── */}
      <CabinComparisonGallery
        title={pageData.suiteCategories.title}
        subtitle={`${pageData.suiteCategories.lead} ${pageData.suiteCategories.body}`}
        items={suiteGalleryItems}
        expertRecommendation={{
          title: 'Angela Hughes Suite Recommendation',
          content: pageData.suiteCategories.footnote,
        }}
      />

      {/* ─── 6. LUMINAE PRIVATE DINING (DynamicCulinaryShowcase) ─── */}
      <DynamicCulinaryShowcase
        title={pageData.luminae.title}
        subtitle={`${pageData.luminae.lead} ${pageData.luminae.body} (${pageData.luminae.hoursFootnote})`}
        items={luminaeCulinaryItems}
      />

      {/* ─── 7. RETREAT LOUNGE & SUNDECK (LuxuryZigZagShowcase) ─── */}
      <LuxuryZigZagShowcase
        title="Exclusive Retreat Spaces"
        subtitle="Dedicated indoor and outdoor sanctuaries designed for suite guests."
        items={retreatVenuesZigZag}
      />

      {/* ─── 8. BUTLER & CONCIERGE (EditorialFeatureShowcase) ─── */}
      <EditorialFeatureShowcase
        title="Personalized Luxury Service"
        subtitle="Every Retreat voyage is supported by dedicated butler attention and specialized shore planning."
        image={null}
        features={butlerAndConciergeFeatures}
      />

      {/* ─── 9. DINING & BEVERAGE BENEFITS (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.diningBeverageBenefits.title}
        subtitle={pageData.diningBeverageBenefits.eyebrow}
        bentoItems={diningBeverageBentoItems}
      />

      {/* ─── 10. RETREAT SUITE AMENITIES (InclusionsList) ─── */}
      <InclusionsList
        title={pageData.suiteAmenities.title}
        expertNote={`${pageData.suiteAmenities.lead} ${pageData.suiteAmenities.footnote}`}
        inclusions={pageData.suiteAmenities.amenities}
        image={null}
      />

      {/* ─── 11. BENEFITS BY SUITE CATEGORY (LuxuryCruiseComparisonTable & AuthorityBox) ─── */}
      <LuxuryCruiseComparisonTable
        title={pageData.benefitsBySuite.title}
        headers={pageData.benefitsBySuite.headers}
        rows={benefitsBySuiteRows}
      />
      <AuthorityBox
        title="SUITE CATEGORY PRIVILEGES"
        content={pageData.benefitsBySuite.footnote}
        author="Celebrity Cruises Suite Privileges Guide"
      />

      {/* ─── 12. SHIPS WITH THE RETREAT (ThreeColumnGrid & GenericChecklistCards) ─── */}
      <ThreeColumnGrid
        title={pageData.shipsWithRetreat.title}
        subtitle={`${pageData.shipsWithRetreat.lead} ${pageData.shipsWithRetreat.body}`}
        items={shipClassesGrid}
      />
      <GenericChecklistCards
        title={pageData.shipsWithRetreat.whyMattersTitle}
        subtitle="Fleet Architecture & Deck Layout Insight"
        cards={whyShipMattersCards}
      />

      {/* ─── 13. EDGE & SOLSTICE SERIES (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Fleet Class Features: Edge Series & Solstice Series Retreats"
        items={shipClassesHighlights}
      />

      {/* ─── 14. THE RETREAT VS AQUACLASS (ComparisonTable & AuthorityBox) ─── */}
      <ComparisonTable data={retreatVsAquaTableData} />
      <AuthorityBox
        title="AQUACLASS & RETREAT ADVISORY"
        content={`${pageData.retreatVsAquaClass.tableNote} ${pageData.retreatVsAquaClass.footnote}`}
        author="Angela Hughes, Luxury Cruise Specialist"
      />

      {/* ─── 15. THE RETREAT VS CONCIERGE CLASS (DetailedInclusionsList) ─── */}
      <DetailedInclusionsList
        title={pageData.retreatVsConcierge.title}
        intro={[pageData.retreatVsConcierge.lead, pageData.retreatVsConcierge.body]}
        items={retreatVsConciergeDetailedItems}
      />

      {/* ─── 16. IS THE RETREAT WORTH IT (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.isRetreatWorthIt.title}
        subtitle={`${pageData.isRetreatWorthIt.lead} ${pageData.isRetreatWorthIt.footerText}`}
        includedTitle={pageData.isRetreatWorthIt.attractiveTitle}
        included={worthAttractiveMapped}
        extrasTitle={pageData.isRetreatWorthIt.lessCompellingTitle}
        extras={worthLessCompellingMapped}
      />

      {/* ─── 17. HOW TO CHOOSE THE RIGHT SUITE (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.howToChoose.title}
        subtitle="Evaluate your travel priorities to choose the ideal Retreat suite category."
        steps={chooseSuiteSteps}
      />

      {/* ─── 18. WHAT TO CHECK BEFORE BOOKING (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={whatToCheckPillars} />

      {/* ─── 19. VIDEO SHOWCASE SECTION (InclusionsVideoOne) ─── */}
      <InclusionsVideoOne data={videoShowcaseData} />

      {/* ─── 20. CONCLUSION & SUMMARY (ConclusionSection) ─── */}
      <ConclusionSection sections={conclusionSectionsData} />

      {/* ─── 21. KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle="9 Key Insights on Celebrity Cruises The Retreat Program"
        points={pageData.keyTakeaways.items}
      />

      {/* ─── 22. ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertAdvisor.name}
        title="Greece & Luxury Cruise Specialist · CEO, Trips & Ships Luxury Travel"
        badge={pageData.expertAdvisor.badge}
        experienceBadge="40+ YEARS EXPERTISE"
        bio={pageData.expertAdvisor.bio}
        quote={pageData.expertAdvisor.quote}
        quoteSubtitle="On Celebrity Cruises The Retreat"
        authorityBoxTitle="WHAT MAKES THE RETREAT STAND OUT"
        authoritySubtitle="Trusted Luxury Cruise Authority & Insight"
        image={Profile_Picture_AH}
        credentials={pageData.expertAdvisor.standoutPills}
        ctaText="Schedule a Retreat Consultation"
        ctaLink="/contact"
      />

      {/* ─── 23. FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── 24. CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.subtitle}
        buttonText={pageData.cta.primaryBtnText}
        buttonLink={pageData.cta.primaryBtnUrl}
        image={null}
      />
    </>
  );
}

export default CelebrityCruisesTheRetreat;