import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared Components & UI System exclusively from src/components/ui/ (All Distinct)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import InclusionsBeverageHub from '@/components/ui/InclusionsBeverageHub';
import CreativeShardGrid from '@/components/ui/CreativeShardGrid';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import MistakesGrid from '@/components/ui/MistakesGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';
import imageWebp from '../../assets/image.webp';

function CelebrityDrinkPackages() {
  // 1. Intro Section Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Packages Overview for BentoGlassmorphismGrid (Distinct)
  const packagesBentoItems = pageData.packagesOverview.packages.map((pkg) => ({
    title: pkg.name,
    stat: pkg.limit,
    description: `${pkg.description}. Included selections: ${pkg.features.join(', ')}. Wine bottle discount: ${pkg.discount}.`,
  }));

  // 3. Classic Drink Package Features for EditorialFeatureShowcase (Distinct)
  const classicFeatures = [
    {
      title: 'Covered Beverage Inclusions',
      description: pageData.classicPackage.inclusions.join(', '),
    },
    {
      title: 'Package Price Threshold & Bottle Discount',
      description: `${pageData.classicPackage.thresholdNote} ${pageData.classicPackage.bottleDiscountFootnote}`,
    },
  ];

  // 4. Premium Drink Package Data for InclusionsBeverageHub (Distinct)
  const premiumBeverageHubData = {
    headline: pageData.premiumPackage.title,
    intro: `${pageData.premiumPackage.lead} ${pageData.premiumPackage.body} ${pageData.premiumPackage.thresholdNote}`,
    items: [
      {
        badge: 'TOP-SHELF SPIRITS',
        title: 'Premium Spirits & Cocktails',
        desc: 'Includes craft & artisan beers, premium spirits, handcrafted cocktails, and frozen drinks.',
      },
      {
        badge: 'FINE WINES',
        title: 'Wines by the Glass & Sodas',
        desc: 'Expanded selection of higher-priced wines by the glass, Coca-Cola products, and premium bottled water.',
      },
      {
        badge: 'SPECIALTY CAFÉS',
        title: 'Specialty Coffees & Teas',
        desc: 'Specialty coffees, organic teas, and additional premium beverage selections onboard.',
      },
      {
        badge: 'BOTTLE PERKS',
        title: '20% Wine Bottle Discount',
        desc: pageData.premiumPackage.bottleDiscountFootnote,
      },
    ],
  };

  // 5. Zero Proof Drink Package Shard Items for CreativeShardGrid (Distinct)
  const zeroProofShardItems = [
    {
      title: 'Premium Water & Sodas',
      description: 'Includes premium bottled water, Vitamin Water, and Coca-Cola selections.',
      icon: 'Coffee',
    },
    {
      title: 'Specialty Coffees & Teas',
      description: 'Includes barista specialty coffees, organic teas, and bottled iced teas.',
      icon: 'Coffee',
    },
    {
      title: 'Energy & Smoothies',
      description: 'Includes Red Bull, energy drinks, and freshly blended frozen smoothies.',
      icon: 'Heart',
    },
    {
      title: 'Zero-Proof Cocktails',
      description: `${pageData.zeroProofPackage.targetAudienceFootnote} ${pageData.zeroProofPackage.availabilityAlert}`,
      icon: 'Compass',
    },
  ];

  // 6. Comparison Table Rows for LuxuryCruiseComparisonTable (Distinct)
  const comparisonRows = pageData.comparisonTable.rows.map((row) => [
    row.feature,
    row.classic,
    row.premium,
    row.zero,
  ]);

  // 7. Pricing & Gratuity Items for DetailedInclusionsList (Distinct)
  const pricingItems = [
    {
      title: pageData.pricing.gratuityCard.title,
      paragraphs: [
        `Service Charge: ${pageData.pricing.gratuityCard.statValue} ${pageData.pricing.gratuityCard.statLabel}`,
        pageData.pricing.gratuityCard.text1,
        pageData.pricing.gratuityCard.text2,
      ],
    },
  ];

  // 8. Purchase Info Cards for GenericChecklistCards (Distinct)
  const purchaseCards = pageData.purchaseInfo.options.map((opt) => ({
    title: opt.title,
    items: [...opt.items, opt.note],
  }));

  // 9. Upgrade Pillars for ValuePropositionHighlight (Distinct)
  const upgradePillars = [
    {
      title: 'Daily Upgrade Pricing',
      description: pageData.upgrade.paragraphs[0],
      icon: 'DollarSign',
      impact: '$20 / Day + 20% Gratuity',
    },
    {
      title: 'Access to Premium Brands',
      description: pageData.upgrade.paragraphs[1],
      icon: 'Crown',
      impact: 'Top-Shelf Selections',
    },
  ];

  // 10. Exclusions Grid Items for MistakesGrid (Distinct)
  const exclusionsGridItems = pageData.exclusions.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.description,
  }));

  // 11. All Included & The Retreat Data for BrandPillarsShowcase (Distinct)
  const fareBundlingData = {
    title: 'All Included & The Retreat Beverage Benefits',
    subtitle: 'Understanding fare bundling vs standalone packages.',
    pillars: [
      {
        title: pageData.allIncluded.title,
        description: `${pageData.allIncluded.intro} Core inclusions: ${pageData.allIncluded.inclusionsList.join(', ')}. ${pageData.allIncluded.cardText}`,
        icon: 'ship',
      },
      {
        title: pageData.retreat.title,
        description: `${pageData.retreat.lead} ${pageData.retreat.paragraphs.join(' ')}`,
        icon: 'star',
      },
    ],
  };

  // 12. Value Calculation Lists for CostValueAnalysisCards (Distinct)
  const valueMakesSense = pageData.valueCalculation.makesSenseList.map((item) => ({
    title: item,
    desc: 'Favorable beverage spending scenario.',
  }));
  const valueNotSense = pageData.valueCalculation.notSenseList.map((item) => ({
    title: item,
    desc: 'Better suited for Cruise Only pay-as-you-go.',
  }));

  // 13. Tips Items for ThreeColumnGrid (Distinct)
  const tipsItems = pageData.tips.items.map((tip, idx) => ({
    title: tip.title,
    description: tip.desc,
    placeholderLabel: `TIP 0${idx + 1}`,
    image: null,
  }));

  // Schema Structured Data
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.tripsandships.com#organization',
        name: 'Trips and Ships Luxury Travel',
        url: 'https://www.tripsandships.com',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/drink-packages/',
        name: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/',
        },
        isPartOf: {
          '@id': 'https://www.tripsandships.com#organization',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/#article',
        headline: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/',
        },
        author: {
          '@type': 'Organization',
          name: 'Trips and Ships Luxury Travel',
          url: 'https://www.tripsandships.com',
        },
        publisher: {
          '@id': 'https://www.tripsandships.com#organization',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/#breadcrumb',
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
            item: 'https://www.tripsandships.com/celebrity-cruises/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Celebrity Cruises Drink Packages',
            item: 'https://www.tripsandships.com/celebrity-cruises/drink-packages/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/drink-packages/#faq',
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
        watermarkText={pageData.intro.badge}
      />

      {/* ─── 3. PACKAGES OVERVIEW (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.packagesOverview.title}
        subtitle={pageData.packagesOverview.eyebrow}
        bentoItems={packagesBentoItems}
      />

      {/* ─── 4. CLASSIC DRINK PACKAGE (EditorialFeatureShowcase & AuthorityBox) ─── */}
      <EditorialFeatureShowcase
        title={pageData.classicPackage.title}
        subtitle={`${pageData.classicPackage.lead} ${pageData.classicPackage.body}`}
        image={null}
        features={classicFeatures}
      />
      <AuthorityBox
        title="EXCESS CHARGE POLICY"
        content={pageData.classicPackage.excessChargeAlert}
        author="Celebrity Cruises Booking Policy"
        authorImage={imageWebp}
      />

      {/* ─── 5. PREMIUM DRINK PACKAGE (InclusionsBeverageHub & AuthorityBox) ─── */}
      <InclusionsBeverageHub data={premiumBeverageHubData} />
      <AuthorityBox
        title="PREMIUM SELECTION VALUE"
        content={pageData.premiumPackage.relevanceAlert}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 6. ZERO PROOF DRINK PACKAGE (CreativeShardGrid & AuthorityBox) ─── */}
      <CreativeShardGrid
        title={pageData.zeroProofPackage.title}
        subtitle={pageData.zeroProofPackage.eyebrow}
        items={zeroProofShardItems}
      />
      <AuthorityBox
        title="AVAILABILITY ADVISORY"
        content={pageData.zeroProofPackage.availabilityAlert}
        author="Celebrity Cruises Terms & Conditions"
        authorImage={imageWebp}
      />

      {/* ─── 7. COMPARISON TABLE (LuxuryCruiseComparisonTable & AuthorityBox) ─── */}
      <LuxuryCruiseComparisonTable
        title={pageData.comparisonTable.title}
        headers={pageData.comparisonTable.headers}
        rows={comparisonRows}
      />
      <AuthorityBox
        title="PACKAGE TERMS ADVISORY"
        content={pageData.comparisonTable.footnote}
        author="Celebrity Cruises Terms & Conditions"
        authorImage={imageWebp}
      />

      {/* ─── 8. PRICING & GRATUITIES (DetailedInclusionsList & AuthorityBox) ─── */}
      <DetailedInclusionsList
        title={pageData.pricing.title}
        intro={[
          pageData.pricing.lead,
          pageData.pricing.description,
          pageData.pricing.body,
        ]}
        items={pricingItems}
      />
      <AuthorityBox
        title="CRUISE PLANNER PRICING METHOD"
        content={pageData.pricing.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 9. PRE-CRUISE VS ONBOARD PURCHASE (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.purchaseInfo.title}
        subtitle={pageData.purchaseInfo.intro}
        cards={purchaseCards}
      />

      {/* ─── 10. UPGRADE FROM CLASSIC TO PREMIUM (ValuePropositionHighlight & AuthorityBox) ─── */}
      <ValuePropositionHighlight
        title={pageData.upgrade.title}
        subtitle={pageData.upgrade.lead}
        items={upgradePillars}
      />
      <AuthorityBox
        title="UPGRADE VALUE CALCULATION"
        content={pageData.upgrade.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 11. EXCLUSIONS (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.exclusions.title}
        items={exclusionsGridItems}
      />

      {/* ─── 12. SHARING POLICY & SAME STATEROOM RULE (ProsConsCards & AuthorityBox) ─── */}
      <ProsConsCards
        title="Celebrity Beverage Package Stateroom & Sharing Rules"
        prosTitle={pageData.sharingPolicy.title}
        consTitle={pageData.stateroomRule.title}
        bestFor={[pageData.sharingPolicy.lead, pageData.sharingPolicy.body]}
        notBestFor={[pageData.stateroomRule.lead, pageData.stateroomRule.body]}
        bottomNote={`${pageData.sharingPolicy.footnote} ${pageData.stateroomRule.footnote}`}
        type="compare"
      />
      <AuthorityBox
        title="STATEROOM POLICY REQUIREMENT"
        content={`${pageData.sharingPolicy.footnote} ${pageData.stateroomRule.footnote}`}
        author="Celebrity Cruises Booking Policy"
        authorImage={imageWebp}
      />

      {/* ─── 13. ALL INCLUDED & THE RETREAT (BrandPillarsShowcase & AuthorityBox) ─── */}
      <BrandPillarsShowcase data={fareBundlingData} />
      <AuthorityBox
        title="FARE BUNDLING STRATEGY"
        content="Compare Cruise Only + Beverage Package vs All Included and The Retreat fares to maximize vacation value."
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 14. IS IT WORTH IT & CALCULATION (CostValueAnalysisCards & AuthorityBox) ─── */}
      <CostValueAnalysisCards
        title={pageData.valueCalculation.title}
        subtitle={pageData.valueCalculation.calculationTitle}
        includedTitle="A Package May Make Sense If You:"
        included={valueMakesSense}
        extrasTitle="A Package May Not Make Sense If You:"
        extras={valueNotSense}
      />
      <AuthorityBox
        title="BREAK-EVEN VALUE FORMULA"
        content={`${pageData.valueCalculation.calculationLead} ${pageData.valueCalculation.formula}. ${pageData.valueCalculation.calculationBody} ${pageData.valueCalculation.exampleText} ${pageData.valueCalculation.exampleNote}`}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 15. TIPS FOR FIRST-TIME CRUISERS (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.tips.title}
        subtitle={pageData.tips.eyebrow}
        items={tipsItems}
      />

      {/* ─── 16. VIDEO SHOWCASE (InclusionsVideoOne) ─── */}
      <InclusionsVideoOne data={pageData.video} />

      {/* ─── 17. KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle={pageData.keyTakeaways.subtitle}
        points={pageData.keyTakeaways.items}
      />

      {/* ─── 18. ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertAdvisor.name}
        title={pageData.expertAdvisor.role}
        badge={pageData.expertAdvisor.badge}
        experienceBadge={pageData.expertAdvisor.experienceBadge}
        bio={pageData.expertAdvisor.bio}
        quote={pageData.expertAdvisor.quote}
        quoteSubtitle="On Celebrity Drink Package Value"
        authorityBoxTitle="WHAT MAKES CELEBRITY'S DRINK PACKAGES STAND OUT"
        authoritySubtitle="Trusted Luxury Cruise Authority & Insight"
        image={Profile_Picture_AH}
        credentials={pageData.expertAdvisor.standoutPills}
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* ─── 19. FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── 20. CENTER CTA (CenterCTA) ─── */}
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

export default CelebrityDrinkPackages;