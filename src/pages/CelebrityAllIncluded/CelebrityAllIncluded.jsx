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
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';
import imageWebp from '../../assets/image.webp';

function CelebrityAllIncluded() {
  // 1. Intro Section Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. What Is Celebrity All Included Items for CurvilinearGrid
  const iconList = ['ship', 'utensils', 'Coffee', 'Compass', 'check', 'Plane', 'Wifi', 'Music', 'Heart', 'user'];
  const whatIsAllIncludedItems = pageData.whatIsAllIncluded.includedList.map((item, idx) => ({
    title: item,
    description: `Core feature of Celebrity All Included fare bundling. ${pageData.whatIsAllIncluded.footerCard}`,
    icon: iconList[idx] || 'check',
  }));

  // 3. What Does Celebrity All Included Include Table for ComparisonTable
  const whatIsIncludedTableData = {
    title: pageData.whatIsIncluded.title,
    headers: pageData.whatIsIncluded.headers,
    rows: pageData.whatIsIncluded.rows.map((row) => [
      row.benefit,
      row.cruiseOnly,
      row.allIncluded,
    ]),
  };

  // 4. Celebrity Classic Drinks Package for BentoGlassmorphismGrid
  const classicDrinksBentoItems = [
    {
      title: pageData.classicDrinks.alcoholicTitle,
      stat: 'UP TO $10',
      description: `${pageData.classicDrinks.lead} Included alcoholic selections: ${pageData.classicDrinks.alcoholicChoices.join(', ')}.`,
    },
    {
      title: pageData.classicDrinks.nonAlcoholicTitle,
      stat: '100% INCLUDED',
      description: `Complimentary non-alcoholic options: ${pageData.classicDrinks.nonAlcoholicChoices.join(', ')}.`,
    },
    {
      title: 'Beverage Venues & Limits',
      stat: 'ZERO LIMIT',
      description: `${pageData.classicDrinks.questions[0].question} ${pageData.classicDrinks.questions[0].answers.join(' ')} ${pageData.classicDrinks.questions[1].question} ${pageData.classicDrinks.questions[1].answers.join(' ')}`,
    },
    {
      title: 'Café al Bacio & Gratuities',
      stat: 'TIPS COVERED',
      description: `${pageData.classicDrinks.questions[2].question} ${pageData.classicDrinks.questions[2].answers.join(' ')} ${pageData.classicDrinks.body}`,
    },
  ];

  // 5. Classic vs Premium Drinks Rows for LuxuryCruiseComparisonTable
  const classicVsPremiumRows = pageData.classicVsPremiumDrinks.rows.map((row) => [
    row.feature,
    row.classic,
    row.premium,
  ]);

  // 6. Basic Wi-Fi Features for EditorialFeatureShowcase
  const basicWifiFeatures = [
    {
      title: 'Everyday Connectivity Uses',
      description: `${pageData.basicWifi.leftFootnote} Supports: ${pageData.basicWifi.uses.join(', ')}.`,
    },
    {
      title: 'High-Bandwidth Limitations',
      description: pageData.basicWifi.alertNote,
    },
  ];

  // 7. Upgrades Items for DetailedInclusionsList
  const upgradeItems = [
    {
      title: 'Classic to Premium Drinks Upgrade',
      paragraphs: [
        pageData.upgrades.premiumDrinksDesc,
        pageData.upgrades.leftFootnote,
      ],
    },
    {
      title: 'Basic to Premium Wi-Fi Upgrade',
      paragraphs: [
        pageData.upgrades.premiumWifiDesc,
        pageData.upgrades.noteBadge,
      ],
    },
  ];

  // 8. Gratuities Cards for ThreeColumnGrid
  const gratuitiesGridItems = pageData.gratuities.cards.map((card, idx) => ({
    title: card,
    description: 'Celebrity fare condition and gratuity policy clarification.',
    image: null,
    placeholderLabel: `POLICY 0${idx + 1}`,
  }));

  // 9. What Is Not Included Cards for GenericChecklistCards
  const notIncludedCards = [
    {
      title: 'Typically Included',
      items: pageData.whatIsNotIncluded.includedVsExtra.map((item) => item.included),
    },
    {
      title: 'Usually Extra Cost',
      items: pageData.whatIsNotIncluded.includedVsExtra.map((item) => item.extra),
    },
  ];

  // 10. All Included vs Cruise Only Table Data for ComparisonTable
  const allIncludedVsCruiseOnlyTableData = {
    title: pageData.allIncludedVsCruiseOnly.title,
    headers: pageData.allIncludedVsCruiseOnly.headers,
    rows: pageData.allIncludedVsCruiseOnly.rows.map((row) => [
      row.feature,
      row.cruiseOnly,
      row.allIncluded,
    ]),
  };

  // 11. Value Calculation Steps for CostValueAnalysisCards
  const worthIncludedSteps = pageData.isItWorthIt.steps.map((step) => ({
    title: step.title,
    description: step.desc,
  }));

  const worthStrategyGuidance = [
    {
      title: 'Fare Comparison Recommendation',
      description: pageData.isItWorthIt.quote,
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/all-included/',
        name: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/#article',
        headline: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/',
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/#breadcrumb',
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
            name: 'Celebrity All Included',
            item: 'https://www.tripsandships.com/celebrity-cruises/all-included/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/all-included/#faq',
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
        watermarkText="All Included"
      />

      {/* ─── 3. WHAT IS CELEBRITY ALL INCLUDED (CurvilinearGrid & AuthorityBox) ─── */}
      <CurvilinearGrid
        title={pageData.whatIsAllIncluded.title}
        subtitle={pageData.whatIsAllIncluded.eyebrow}
        paragraphs={[
          pageData.whatIsAllIncluded.lead,
          pageData.whatIsAllIncluded.body,
        ]}
        items={whatIsAllIncludedItems}
      />
      <AuthorityBox
        title="ALL INCLUDED PACKAGE SCOPE"
        content={pageData.whatIsAllIncluded.footerCard}
        author="Celebrity Cruises Booking Policy"
        authorImage={imageWebp}
      />

      {/* ─── 4. WHAT DOES ALL INCLUDED INCLUDE (ComparisonTable) ─── */}
      <ComparisonTable data={whatIsIncludedTableData} />

      {/* ─── 5. CLASSIC DRINKS PACKAGE (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.classicDrinks.title}
        subtitle={pageData.classicDrinks.eyebrow}
        bentoItems={classicDrinksBentoItems}
      />

      {/* ─── 6. CLASSIC VS PREMIUM DRINKS (LuxuryCruiseComparisonTable & AuthorityBox) ─── */}
      <LuxuryCruiseComparisonTable
        title={pageData.classicVsPremiumDrinks.title}
        headers={pageData.classicVsPremiumDrinks.headers}
        rows={classicVsPremiumRows}
      />
      <AuthorityBox
        title="BEVERAGE UPGRADE ADVISORY"
        content={pageData.classicVsPremiumDrinks.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 7. BASIC WI-FI (EditorialFeatureShowcase) ─── */}
      <EditorialFeatureShowcase
        title={pageData.basicWifi.title}
        subtitle={`${pageData.basicWifi.lead} ${pageData.basicWifi.body}`}
        image={null}
        features={basicWifiFeatures}
      />

      {/* ─── 8. CAN YOU UPGRADE? (DetailedInclusionsList) ─── */}
      <DetailedInclusionsList
        title={pageData.upgrades.title}
        intro={[pageData.upgrades.lead]}
        items={upgradeItems}
      />

      {/* ─── 9. ARE GRATUITIES INCLUDED? (ThreeColumnGrid & AuthorityBox) ─── */}
      <ThreeColumnGrid
        title={pageData.gratuities.title}
        subtitle={`${pageData.gratuities.lead} ${pageData.gratuities.body}`}
        items={gratuitiesGridItems}
      />
      <AuthorityBox
        title="REGIONAL GRATUITIES POLICY"
        content={pageData.gratuities.footnote}
        author="Celebrity Cruises Terms & Conditions"
        authorImage={imageWebp}
      />

      {/* ─── 10. WHAT IS NOT INCLUDED (GenericChecklistCards & AuthorityBox) ─── */}
      <GenericChecklistCards
        title={pageData.whatIsNotIncluded.title}
        subtitle={pageData.whatIsNotIncluded.eyebrow}
        cards={notIncludedCards}
      />
      <AuthorityBox
        title="ITINERARY INCLUSIONS NOTE"
        content={pageData.whatIsNotIncluded.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 11. ALL INCLUDED VS CRUISE ONLY (ComparisonTable & AuthorityBox) ─── */}
      <ComparisonTable data={allIncludedVsCruiseOnlyTableData} />
      <AuthorityBox
        title="CRUISE ONLY VS ALL INCLUDED VERDICT"
        content={pageData.allIncludedVsCruiseOnly.footnote}
        author="Angela Hughes, Luxury Cruise Specialist"
        authorImage={imageWebp}
      />

      {/* ─── 12. IS CELEBRITY ALL INCLUDED WORTH IT? (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.isItWorthIt.title}
        subtitle={`${pageData.isItWorthIt.lead} ${pageData.isItWorthIt.body}`}
        includedTitle={pageData.isItWorthIt.calculateCardTitle}
        included={worthIncludedSteps}
        extrasTitle="Value Strategy & Guidance"
        extras={worthStrategyGuidance}
      />

      {/* ─── 13. VIDEO SHOWCASE (InclusionsVideoOne) ─── */}
      <InclusionsVideoOne data={pageData.video} />

      {/* ─── 14. KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle={pageData.keyTakeaways.subtitle}
        points={pageData.keyTakeaways.items}
      />

      {/* ─── 15. ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertAdvisor.name}
        title={pageData.expertAdvisor.role}
        badge={pageData.expertAdvisor.badge}
        experienceBadge={pageData.expertAdvisor.experienceBadge}
        bio={pageData.expertAdvisor.bio}
        quote={pageData.expertAdvisor.quote}
        quoteSubtitle="On Celebrity All Included Value"
        authorityBoxTitle="WHAT MAKES ALL INCLUDED STAND OUT"
        authoritySubtitle="Trusted Luxury Cruise Authority & Insight"
        image={Profile_Picture_AH}
        credentials={pageData.expertAdvisor.standoutPills}
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* ─── 16. FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── 17. CENTER CTA (CenterCTA) ─── */}
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

export default CelebrityAllIncluded;