import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

/* ── Placeholder image imports (kept commented out as in RiversideRhoneCruises) ─────────────────
   // import HeroImage from "@/assets/CrystalCruises/CrystalCruisesCost/how-much-does-a-crystal-cruise-cost.jpg";
   // import LifestyleImage from "@/assets/CrystalCruises/CrystalCruisesCost/crystal-cruises-pricing-guide.jpg";
   // import SuiteImage from "@/assets/CrystalCruises/CrystalCruisesCost/crystal-cruises-suite-pricing.jpg";
─────────────────────────────────────────────────────────────────── */

// Shared UI System Components (Exact Ritz-Carlton Component Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CardGrid from '@/components/ui/CardGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import FeatureSplit from '@/components/ui/FeatureSplit';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalCruisesCost = () => {
  // Section 2: Narrative Intro mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.introSection.heading,
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3
      ]
    }
  ];

  // Section 3: Quick Answer Items for ThreeColumnGrid (with placeholders)
  const quickAnswerItems = pageData.quickAnswer.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    stats: item.stats,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 4: Published Prices Table for ComparisonTable
  const publishedPricesTable = {
    title: pageData.publishedPrices.title,
    headers: pageData.publishedPrices.headers,
    rows: pageData.publishedPrices.rows
  };

  // Section 6: Dark Bento Grid Items for World Cruises (Dark Theme Component)
  const worldCruiseBentoItems = [
    {
      title: "2027: Stories of the South Seas",
      stat: "$76,200",
      description: "139-night epic voyage exploring the remote archipelagos of the South Pacific, Australia, New Zealand, and beyond with personalized butler service in every suite.",
      image: undefined
    },
    {
      title: "2028: Treasures of the Tides",
      stat: "$75,600",
      description: "150-night global odyssey spanning multiple continents, overnight cultural port stays, and world-class gastronomy onboard.",
      image: undefined
    },
    {
      title: "2029: Connecting Cultures",
      stat: "$75,200",
      description: "127-night immersive circumnavigation connecting historic global trade routes, iconic world harbors, and boutique anchorages.",
      image: undefined
    },
    {
      title: "Essential Expenses Beyond Cruise Fare",
      stat: "BUDGETING",
      description: "Plan for international airfare, pre/post luxury hotels, private transfers, visas, optional shore excursions, and comprehensive travel protection.",
      image: undefined
    }
  ];

  // Section 7: Price Factors Cards for CardGrid
  const priceFactorCards = pageData.priceFactors.factors.map((factor) => ({
    icon: factor.icon,
    title: factor.title,
    description: factor.description
  }));

  // Exact JSON-LD Schema provided by User
  const crystalCostImageUrl =
    pageData.seo.primaryImageUrl ||
    "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesCost/how-much-does-a-crystal-cruise-cost.jpg";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageData.seo.canonicalUrl}#webpage`,
        "url": pageData.seo.canonicalUrl,
        "name": pageData.seo.metaTitle,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": crystalCostImageUrl,
        //   "caption": "How Much Does a Crystal Cruise Cost? Crystal Cruises Pricing Guide"
        // },
        // "image": crystalCostImageUrl,
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
          "caption": "Angela Hughes - Luxury Cruise Specialist"
        },
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises, river cruises, expedition cruises, and personalized travel planning.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Crystal Cruises",
          "Crystal Cruises Pricing",
          "Crystal Cruises Suite Categories",
          "Crystal Cruises World Cruises",
          "Luxury Cruise Costs",
          "Luxury Cruise Budget Planning",
          "Luxury Cruise Inclusions",
          "Luxury Cruise Travel Planning"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageData.seo.canonicalUrl}#breadcrumb`,
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
            "name": "Crystal Cruises",
            "item": "https://www.tripsandships.com/crystal-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Crystal Cruises Cost",
            "item": pageData.seo.canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageData.seo.canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.map((faq) => ({
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
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        {/* <meta property="og:image" content={crystalCostImageUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content={crystalCostImageUrl} /> */}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO (Byline, Author, Updated Date) ─── */}
      <ComparisonHero
        byline={true}
        updated="2026-11-03"
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel || "Explore Complete Fleet Guide"}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl || "/crystal-cruises"}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="PRICING"
        image1={
          // "src/assets/CrystalCruises/CrystalCruisesCost/crystal-cruises-pricing-guide.jpg"
          undefined
        }
        image2={
          // "src/assets/CrystalCruises/CrystalCruisesCost/crystal-cruises-suite-pricing.jpg"
          undefined
        }
      />

      {/* ─── SECTION 3: QUICK ANSWER / EXECUTIVE SUMMARY (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.quickAnswer.title}
        subtitle={pageData.quickAnswer.subtitle}
        items={quickAnswerItems}
      />

      {/* ─── SECTION 4: PUBLISHED VOYAGE EXAMPLES TABLE (ComparisonTable Component) ─── */}
      <div className="py-6 bg-white">
        <ComparisonTable data={publishedPricesTable} />
      </div>

      {/* ─── SECTION 5: DURATION & PRICE TIERS (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.durationAnalysis.title}
        subtitle={pageData.durationAnalysis.subtitle}
        items={pageData.durationAnalysis.tiers}
        theme="light"
      />

      {/* ─── SECTION 6: WORLD CRUISES ANALYSIS (BentoGlassmorphismGrid Component - Dark Theme) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.worldCruises.title}
        subtitle="EPIC GLOBAL EXPEDITIONS & STARTING FARES"
        bentoItems={worldCruiseBentoItems}
      />

      {/* ─── SECTION 7: WHAT AFFECTS CRYSTAL CRUISE PRICES (CardGrid Component) ─── */}
      <CardGrid
        title={pageData.priceFactors.title}
        subtitle={pageData.priceFactors.subtitle}
        cards={priceFactorCards}
        columns={3}
        stagger={false}
      />

      {/* ─── SECTION 8: SUITE CATEGORIES & PRICING FACTORS (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.suitePricing.title}
        intro={pageData.suitePricing.intro}
        items={pageData.suitePricing.items}
      />

      {/* ─── SECTION 9: INCLUSIONS VS ADDITIONAL EXPENSES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.inclusionsVsExtras.title}
        subtitle={pageData.inclusionsVsExtras.subtitle}
        includedTitle={pageData.inclusionsVsExtras.includedTitle}
        extrasTitle={pageData.inclusionsVsExtras.extrasTitle}
        included={pageData.inclusionsVsExtras.included}
        extras={pageData.inclusionsVsExtras.extras}
      />

      {/* ─── SECTION 10: REAL VACATION COST BREAKDOWN (FeatureSplit Component with Image Placeholder & Budget Table) ─── */}
      <FeatureSplit
        imagePosition="right"
        theme="light"
        image={
          // "src/assets/CrystalCruises/CrystalCruisesCost/crystal-cruises-vacation-budget.jpg"
          undefined
        }
        title={pageData.exampleBudget.title}
        summary={pageData.exampleBudget.description}
      >
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-4 py-3 text-xs uppercase tracking-wider font-semibold">Budget Component</th>
                <th className="px-4 py-3 text-xs uppercase tracking-wider font-semibold">What to Include</th>
                <th className="px-4 py-3 text-xs uppercase tracking-wider font-semibold text-right">Estimate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {pageData.exampleBudget.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-navy-900">{row[0]}</td>
                  <td className="px-4 py-3 text-slate-600 text-xs sm:text-sm">{row[1]}</td>
                  <td className="px-4 py-3 font-semibold text-gold-600 text-right whitespace-nowrap">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
            <p className="font-sans text-xs text-slate-500 italic">
              {pageData.exampleBudget.note}
            </p>
          </div>
        </div>
      </FeatureSplit>

      {/* ─── SECTION 11: MIDDLE CTA (CenterCTA - Connected to /contact) ─── */}
      <CenterCTA
        title="Ready to Find Your Crystal Cruise Price?"
        description="Connect with our luxury cruise specialists to compare suitable Crystal Serenity, Symphony, and Grace itineraries and suite availability."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 12: COMPETITOR VALUE COMPARISON (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={pageData.brandComparison}
      />

      {/* ─── SECTION 13: 6 STRATEGIES TO GET THE BEST VALUE (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.bestValueRoadmap.title}
        subtitle={pageData.bestValueRoadmap.subtitle}
        steps={pageData.bestValueRoadmap.steps}
        layout="grid"
      />

      {/* ─── SECTION 14: ANGELA HUGHES BIO & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 15: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Crystal Cruises Cost",
          subtitle: "Clear answers to the most common questions about fares, suites, dining, and inclusions.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 16: FINAL CENTER CTA (Connected to /contact) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalCruisesCost;
