import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

// Shared Components & UI System (All imported from src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CardGrid from '@/components/ui/CardGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets
import Profile_Picture_AH from '@/assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';

function WhatsIncludedCelebrityCruise() {
  // 1. Intro Sections Mapping (PremiumIntro)
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Core Fare Inclusions Mapping (CostValueAnalysisCards)
  const coreFareIncluded = pageData.coreFareInclusions.items.map((item) => ({
    title: item,
    description: 'Standard inclusion across all Celebrity Cruise fares.',
  }));

  const coreFareExtras = [
    {
      title: 'Ship & Itinerary Dependent',
      description: `${pageData.coreFareInclusions.description} ${pageData.coreFareInclusions.footerNote}`,
    },
    {
      title: 'Beverages, Wi-Fi & Gratuities',
      description: 'Optional separately on Cruise-Only rates or bundled when selecting All Included.',
    },
  ];

  // 3. Glance Table Data (ComparisonTable)
  const glanceTableData = {
    title: pageData.glanceTable.title,
    headers: pageData.glanceTable.headers,
    rows: pageData.glanceTable.rows.map((row) => [
      row.feature,
      row.cruiseOnly,
      row.allIncluded,
    ]),
  };

  // 4. Dining Split Highlights (HighlightsSplit)
  const diningHighlights = [
    {
      title: pageData.dining.included.title,
      description: pageData.dining.included.lead,
      bulletPoints: pageData.dining.included.options,
      image: null,
      placeholderLabel: 'Main Dining Room Experience Aboard Celebrity Cruises',
      icon: 'Utensils',
    },
    {
      title: pageData.dining.specialty.title,
      description: `${pageData.dining.specialty.lead} ${pageData.dining.specialty.footnote}`,
      bulletPoints: pageData.dining.specialty.cuisines,
      image: null,
      placeholderLabel: 'Specialty Dining Restaurant Aboard Celebrity Cruises',
      icon: 'Sparkles',
    },
  ];

  // 5. Drinks Showcase (ThreeColumnGrid)
  const drinksOptionsItems = pageData.drinks.options.map((opt) => ({
    title: opt.title,
    category: opt.badge || 'Drink Option',
    description: opt.description,
    image: null,
    placeholderLabel: `${opt.title} Beverage Selection`,
  }));

  // 6. Wi-Fi Comparison Table (ComparisonTable)
  const wifiTableData = {
    title: pageData.wifi.comparison.title,
    headers: pageData.wifi.comparison.headers,
    rows: pageData.wifi.comparison.rows.map((row) => [
      row.feature,
      row.basic,
      row.premium,
    ]),
  };

  // 7. Gratuities & Entertainment (DetailedInclusionsList)
  const gratuitiesEntertainmentItems = [
    {
      title: pageData.gratuities.title,
      paragraphs: [pageData.gratuities.description],
      highlight: {
        title: 'Gratuities Advisory',
        text: 'Comparing the total fare rather than the headline cruise price is essential, as All Included bundles applicable tips while Cruise-Only does not.',
      },
    },
    {
      title: pageData.entertainment.title,
      paragraphs: [pageData.entertainment.description],
      lists: [
        {
          title: 'Included Shows & Programming',
          items: pageData.entertainment.items,
        },
      ],
      paragraphsAfter: [`Note: ${pageData.entertainment.footnote}`],
    },
  ];

  // 8. Recreation Items (CardGrid with 3 columns, wave/activity/smile icons, bullet points)
  const recreationCards = [
    {
      title: pageData.recreation.pools.title,
      description: `${pageData.recreation.pools.body} ${pageData.recreation.pools.note}`,
      bullets: pageData.recreation.pools.features,
      icon: 'Waves',
    },
    {
      title: pageData.recreation.fitness.title,
      description: `${pageData.recreation.fitness.body} ${pageData.recreation.fitness.note}`,
      bullets: pageData.recreation.fitness.features,
      icon: 'Activity',
    },
    {
      title: pageData.recreation.kids.title,
      description: `${pageData.recreation.kids.body} ${pageData.recreation.kids.note}`,
      bullets: pageData.recreation.kids.features,
      icon: 'Smile',
    },
  ];

  // 9. Shore Excursions (BrandPillarsShowcase)
  const shoreExcursionsPillars = {
    title: pageData.shoreExcursions.title,
    subtitle: `${pageData.shoreExcursions.lead} ${pageData.shoreExcursions.footnote}`,
    pillars: pageData.shoreExcursions.types.map((type) => ({
      title: type,
      description: 'Curated shore excursions with expert local guides and guaranteed return to ship.',
      icon: 'compass',
    })),
  };

  // 10. Extras Good To Know Items (FeatureGrid)
  const extrasGoodToKnowFeatures = [
    {
      title: pageData.extrasGoodToKnow.coffee.title,
      description: pageData.extrasGoodToKnow.coffee.text,
      category: 'Specialty Coffee',
      highlight: 'Package Limit Terms Apply',
    },
    {
      title: pageData.extrasGoodToKnow.roomService.title,
      description: pageData.extrasGoodToKnow.roomService.text,
      category: 'In-Cabin Dining',
      highlight: 'Delivery & Menu Charges',
    },
    {
      title: pageData.extrasGoodToKnow.miniBar.title,
      description: pageData.extrasGoodToKnow.miniBar.text,
      category: 'Stateroom Amenities',
      highlight: 'Excluded From Packages',
    },
  ];

  // 11. What's Not Included (GenericChecklistCards)
  const notIncludedCards = [
    {
      title: 'Specialty Dining & Beverage Extras',
      items: pageData.notIncluded.items.slice(0, 4),
    },
    {
      title: 'Onboard Services & Experiences',
      items: pageData.notIncluded.items.slice(4, 8),
    },
    {
      title: 'Shore Excursions & Travel Logistics',
      items: [
        ...pageData.notIncluded.items.slice(8),
        `Note: ${pageData.notIncluded.note}`,
      ],
    },
  ];

  // 12. All Included Booking Rules (ExpertRulesGrid)
  const allIncludedRules = [
    {
      number: '01',
      title: pageData.allIncludedDetails.cost.title,
      takeaway: 'Variable Pricing Factors',
      body: `${pageData.allIncludedDetails.cost.body} Key factors: ${pageData.allIncludedDetails.cost.factors.join(', ')}. ${pageData.allIncludedDetails.cost.note}`,
      tag: 'Pricing Policy',
    },
    {
      number: '02',
      title: pageData.allIncludedDetails.afterBooking.title,
      takeaway: 'Selection at Booking Required',
      body: `${pageData.allIncludedDetails.afterBooking.body} ${pageData.allIncludedDetails.afterBooking.note}`,
      tag: 'Booking Window',
    },
    {
      number: '03',
      title: pageData.allIncludedDetails.samePackage.title,
      takeaway: 'Uniform Stateroom Package Rule',
      body: `${pageData.allIncludedDetails.samePackage.body} ${pageData.allIncludedDetails.samePackage.note}`,
      tag: 'Guest Policy',
    },
  ];

  // 13. Best Value Steps (StepByStepGuide)
  const bestValueGuideSteps = pageData.bestValueSteps.steps.map((step) => ({
    title: step.title,
    description: step.desc,
  }));

  // 14. 3-Phase Budget Timeline (InteractivePlanningRoadmap)
  const budgetRoadmapSteps = [
    {
      timeframe: 'Phase 01',
      title: 'Before Sailing',
      description: `Plan upfront expenses: ${pageData.budgetPhases.beforeSailing.join(', ')}.`,
      image: null,
    },
    {
      timeframe: 'Phase 02',
      title: 'During the Cruise',
      description: `Anticipate discretionary costs: ${pageData.budgetPhases.duringCruise.join(', ')}.`,
      image: null,
    },
    {
      timeframe: 'Phase 03',
      title: 'After the Cruise',
      description: `Account for return logistics: ${pageData.budgetPhases.afterCruise.join(', ')}.`,
      image: null,
    },
  ];

  // 15. Is It All Inclusive Bento Facts (BentoQuickFacts - 10 items)
  const isItAllInclusiveFacts = [
    ...pageData.isItAllInclusive.firstTimeCore.map((item) => ({
      title: 'Core Fare Inclusion',
      description: item,
    })),
    ...pageData.isItAllInclusive.firstTimeCheck.map((item) => ({
      title: 'Optional / Bundled',
      description: item,
    })),
    {
      title: 'Expert Recommendation',
      description: pageData.isItAllInclusive.quote,
    },
  ];

  // 16. Category Inclusions Table Data (ComparisonTable)
  const categoryTableData = {
    title: pageData.inclusionsByCategoryTable.title,
    headers: pageData.inclusionsByCategoryTable.headers,
    rows: pageData.inclusionsByCategoryTable.rows.map((row) => [
      row.category,
      row.included,
      row.note,
    ]),
  };

  // 17. Curvilinear Items for Final Verdict (CurvilinearGrid)
  const conclusionItems = pageData.conclusion.bullets.map((b, idx) => ({
    title: b.title.replace(':', ''),
    description: b.text,
    icon: idx === 0 ? 'ship' : idx === 1 ? 'check' : 'dollar',
  }));

  // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonicalUrl || pageData.seo?.canonical || pageData.meta?.canonicalUrl || pageData.meta?.canonical || 'https://www.tripsandships.com/celebrity-cruises/whats-included';
  const pageTitle = pageData.seo?.title || pageData.meta?.title || "What's Included on a Celebrity Cruise?";
  const metaTitle = pageData.seo?.metaTitle || pageData.meta?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || pageData.meta?.metaDescription || pageData.meta?.description || 'Detailed breakdown of everything included in a Celebrity cruise fare, from dining and entertainment to All Included packages, drinks, Wi-Fi, and gratuities.';

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metaTitle,
        "headline": pageTitle,
        "description": metaDescription,
        "inLanguage": "en-US",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-whats-included.jpg",
          "caption": pageTitle
        },
        "image": "https://www.tripsandships.com/images/celebrity-whats-included.jpg",
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
        "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
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
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Celebrity Cruises",
          "All Included Packages",
          "Cruise Dining Inclusions",
          "Beverage Packages",
          "The Retreat"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What's Included",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": (Array.isArray(pageData.faqs) ? pageData.faqs : (pageData.faqs?.questions || [])).map(faq => ({
          "@type": "Question",
          "name": (faq.question || faq.q || "").replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer || faq.a || ""
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.eyebrow}
        backgroundImage={null}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: INTRO (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        alt1="Celebrity Cruises Suite & Dining Amenities"
        alt2="Celebrity Cruises Modern Onboard Experience"
        watermarkText="Included"
      />

      {/* ─── SECTION 3: QUICK COMPARISON GLANCE (ComparisonTable) ─── */}
      <div id="inclusions-glance">
        <ComparisonTable data={glanceTableData} />
      </div>

      {/* ─── SECTION 4: CORE FARE INCLUSIONS (CostValueAnalysisCards) ─── */}
      <div className="max-w-[1280px] mx-auto px-6 pt-12">
        <CostValueAnalysisCards
          title={pageData.coreFareInclusions.title}
          subtitle={pageData.coreFareInclusions.description}
          includedTitle="Core Fare Includes"
          extrasTitle="Good to Know"
          included={coreFareIncluded}
          extras={coreFareExtras}
        />
      </div>

      {/* ─── SECTION 5: FOOD & SPECIALTY DINING (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Culinary Inclusions & Specialty Dining"
        items={diningHighlights}
      />

      {/* ─── SECTION 6: DRINKS INCLUSIONS (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.drinks.title}
        subtitle={pageData.drinks.subtitle}
        items={drinksOptionsItems}
      />

      {/* ─── SECTION 6b: CLASSIC DRINKS PACKAGE (InclusionsList) ─── */}
      <InclusionsList
        title={pageData.drinks.classicPackageTitle}
        inclusions={pageData.drinks.classicPackageItems}
        expertNote={pageData.drinks.note}
        image={null}
      />

      {/* ─── SECTION 7: WI-FI INCLUSIONS & TABLE (EditorialIntroSplit + ComparisonTable + AuthorityBox) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.wifi.overview.eyebrow}
        heading={pageData.wifi.overview.title}
        paragraphs={[pageData.wifi.overview.lead, pageData.wifi.overview.body]}
      />

      <ComparisonTable data={wifiTableData} />

      <AuthorityBox
        title="WI-FI ACCESS POLICY"
        content={pageData.wifi.comparison.footnote}
        author="Angela Hughes, Luxury Travel Expert"
        authorImage={Profile_Picture_AH}
      />

      {/* ─── SECTION 8: GRATUITIES & ENTERTAINMENT (DetailedInclusionsList) ─── */}
      <DetailedInclusionsList
        title="Gratuities & Onboard Entertainment"
        intro={["Service charges and world-class live entertainment aboard Celebrity ships."]}
        items={gratuitiesEntertainmentItems}
      />

      {/* ─── SECTION 9: RECREATION & WELLNESS (CardGrid) ─── */}
      <CardGrid
        title="Pools, Fitness & Youth Programming"
        subtitle="Access to resort amenities, sports decks, and Camp at Sea youth spaces."
        cards={recreationCards}
        columns={3}
        stagger={false}
      />

      {/* ─── SECTION 10: SHORE EXCURSIONS (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={shoreExcursionsPillars} />

      {/* ─── SECTION 10b: EVERYDAY EXTRA CHARGES (FeatureGrid) ─── */}
      <FeatureGrid
        title="Coffee, Room Service & Mini-Bar"
        subtitle="Important details on everyday in-stateroom and specialty service charges."
        features={extrasGoodToKnowFeatures}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 11: THE RETREAT SUITE INCLUSIONS (FeatureSplit) ─── */}
      <FeatureSplit
        theme="light"
        imagePosition="right"
        title={pageData.retreat.title}
        subtitles={[pageData.retreat.eyebrow, pageData.retreat.badge]}
        summary={`${pageData.retreat.lead} ${pageData.retreat.body}`}
        features={pageData.retreat.includes}
        ctaText="Explore The Retreat"
        ctaLink="/celebrity-cruises/the-retreat"
      />

      {/* ─── SECTION 12: WHAT'S NOT INCLUDED (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.notIncluded.title}
        subtitle={pageData.notIncluded.eyebrow}
        cards={notIncludedCards}
      />

      {/* ─── SECTION 13: CRUISE-ONLY VS. ALL INCLUDED (ProsConsCards) ─── */}
      <ProsConsCards
        title={pageData.cruiseOnlyVsAllIncluded.title}
        type="compare"
        prosTitle="Select All Included If:"
        consTitle="Select Cruise-Only If:"
        bestFor={pageData.cruiseOnlyVsAllIncluded.allIncludedReasons}
        notBestFor={pageData.cruiseOnlyVsAllIncluded.cruiseOnlyReasons}
        bottomNote={pageData.cruiseOnlyVsAllIncluded.badge}
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 14: ALL INCLUDED POLICIES & TIMING (ExpertRulesGrid) ─── */}
      <ExpertRulesGrid
        title="All Included Costs, Policies & Timing"
        subtitle="Key booking guidelines to understand before finalizing your reservation."
        rules={allIncludedRules}
      />

      {/* ─── SECTION 15: HOW TO GET BEST VALUE (StepByStepGuide - Placed between Policies & Budget) ─── */}
      <StepByStepGuide
        title={pageData.bestValueSteps.title}
        subtitle={pageData.bestValueSteps.intro}
        steps={bestValueGuideSteps}
      />

      {/* ─── SECTION 16: 3-PHASE BUDGET TIMELINE (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.budgetPhases.title}
        subtitle={pageData.budgetPhases.intro}
        steps={budgetRoadmapSteps}
      />

      {/* ─── SECTION 17: IS IT ALL INCLUSIVE? (BentoQuickFacts) ─── */}
      <BentoQuickFacts
        title={pageData.isItAllInclusive.title}
        paragraphs={[pageData.isItAllInclusive.lead, pageData.isItAllInclusive.description]}
        items={isItAllInclusiveFacts}
      />

      {/* ─── SECTION 18: INCLUSIONS BY CATEGORY TABLE (ComparisonTable) ─── */}
      <ComparisonTable data={categoryTableData} />

      {/* ─── SECTION 19: VIDEO SHOWCASE (InclusionsVideoOne) ─── */}
      <InclusionsVideoOne
        data={{
          title: pageData.video.title,
          subtitle: pageData.video.captionTag,
          description: `${pageData.video.subtitle} — ${pageData.video.captionText}`,
          youtubeId: 'placeholder',
        }}
      />

      {/* ─── SECTION 20: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        bio={pageData.expertInsight.bio}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Cruise Inclusions"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        image={Profile_Picture_AH}
        credentials={pageData.expertInsight.priorities}
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/celebrity-cruises/request-a-quote"
      />

      {/* ─── SECTION 21: KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle={pageData.keyTakeaways.subtitle || pageData.keyTakeaways.eyebrow}
        points={pageData.keyTakeaways.items}
      />

      {/* ─── SECTION 22: FAQ ACCORDION (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 23: CONCLUSION & FINAL VERDICT (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.conclusion.heading}
        subtitle={pageData.conclusion.eyebrow}
        paragraphs={[
          pageData.conclusion.title,
          `"${pageData.conclusion.quote}"`,
        ]}
        items={conclusionItems}
      />

      {/* ─── SECTION 24: CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.subtitle}
        buttonText={pageData.cta.primaryButtonText}
        buttonLink={pageData.cta.primaryButtonLink}
        image={null}
      />
    </>
  );
}

export default WhatsIncludedCelebrityCruise;
