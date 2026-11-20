import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Princess Cruises Cost Assets (Dedicated folder & 100% uniquely matched images)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-genoa-italy-sun-princess-sunrise.webp';
import PriceFactorsShipImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-haines-alaska-usa-ship-aerial-drone.webp';
import AmalfiCoastImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-amalfi-italy-coastline-overview.webp';
import SanctuaryPoolImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-sun-princess-sanctuary-pool.webp';

// Stateroom Category Images for TabbedComparison
import InteriorStateroomImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import OceanviewStateroomImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-stateroom-window-suite.webp';
import BalconyStateroomImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-stateroom-premium-suite.webp';
import MiniSuiteStateroomImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-stateroom-vista-suite.webp';
import PenthouseSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-stateroom-penthouse-suite.webp';

// Package Showcase Images for LuxuryZigZagShowcase
import SanctuaryBarImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-sun-princess-sanctuary-bar.webp';
import SanctuaryDiningImg from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-sun-princess-sanctuary-dining.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import TabbedComparison from '@/components/ui/TabbedComparison';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesCost = () => {
  // ─── Section 2: Narrative Intro mapping for PremiumIntro ───
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

  // ─── Section 3: CostComparisonMatrix for Typical Price Ranges ───
  const priceMatrixPriorities = [
    "Weekend Coastal & Regional Samplers",
    "Core Week-Long Vacation (Alaska & Caribbean)",
    "Grand Adventures & World Cruise Segments"
  ];

  const priceMatrixItems = pageData.typicalPricingRanges.tiers.map((tier, idx) => ({
    category: tier.name,
    cost: tier.price,
    description: `${tier.description} Includes main dining room and buffet meals, Broadway-style theater entertainment, and pool facilities.`,
    priority: priceMatrixPriorities[idx]
  }));

  // ─── Section 4: What Determines Price for EditorialFeatureShowcase ───
  const pricingFactors = pageData.priceFactors.factors.map((factor) => ({
    title: factor.title,
    description: factor.description
  }));

  // ─── Section 5: Stateroom Categories for TabbedComparison ───
  const stateroomImages = [
    InteriorStateroomImg,
    OceanviewStateroomImg,
    BalconyStateroomImg,
    MiniSuiteStateroomImg,
    PenthouseSuiteImg
  ];

  const stateroomTabItems = pageData.stateroomPricing.rows.map((row, idx) => ({
    name: row[0],
    image: stateroomImages[idx],
    mainBrandStrengths: [
      `Price Position: ${row[1]}`,
      "Accessible entry point with full access to standard dining, theater entertainment, and ship amenities",
      "Ideal for budget predictability and maximizing savings for destination shore excursions"
    ],
    competitorStrengths: [
      `Best Suited To: ${row[2]}`,
      "Features Princess Luxury Bed, daily dedicated housekeeping, and touchless MedallionClass stateroom entry",
      "Varies across Sun, Royal, Grand, and Coral-class ships with customized cabin square footage"
    ]
  }));

  // ─── Section 6: Princess Plus vs Premier for LuxuryZigZagShowcase ───
  const packageZigZagItems = [
    {
      title: "Princess Plus Package",
      category: "$70 Per Person / Per Day ($75 on Sun & Star)",
      description: "Princess Plus bundles essential onboard amenities into one predictable daily fee, saving guests significant money compared to purchasing drinks, Wi-Fi, and crew appreciation separately.",
      bullets: pageData.packagePricing.plusInclusions,
      stat: "$490 / $980",
      statLabel: "Total Cost for 7-Night Cruise (1 Guest / 2 Guests)",
      image: SanctuaryBarImg
    },
    {
      title: "Princess Premier Package",
      category: "$105 Per Person / Per Day ($110 on Sun & Star)",
      description: "Princess Premier offers an elevated, comprehensive vacation package featuring premium top-shelf drinks, multi-device connectivity, specialty dining, reserved theater seating, and unlimited photo downloads.",
      bullets: pageData.packagePricing.premierInclusions,
      stat: "$735 / $1,470",
      statLabel: "Total Cost for 7-Night Cruise (1 Guest / 2 Guests)",
      image: SanctuaryDiningImg
    }
  ];

  // ─── Section 7: Standard Fare Inclusions vs Extra Out-of-Pocket Expenses (CostValueAnalysisCards) ───
  const standardInclusionsList = pageData.standardInclusions.inclusions.map((text) => {
    const parts = text.split(" (");
    return {
      title: parts[0],
      description: parts[1] ? `(${parts[1]}` : "Included in your standard cruise fare."
    };
  });

  const additionalExpensesList = pageData.additionalCosts.items.map((item) => ({
    title: item.category,
    description: item.description
  }));

  // ─── Section 8: 7-Night Cruise Budget Scenarios for BentoGlassmorphismGrid (Dark Navy Theme) ───
  const budgetBentoItems = [
    {
      title: pageData.budgetExamples.scenarios[0].title,
      stat: "VALUE FOCUS",
      description: `${pageData.budgetExamples.scenarios[0].stateroom} • ${pageData.budgetExamples.scenarios[0].package}. ${pageData.budgetExamples.scenarios[0].summary} Verdict: ${pageData.budgetExamples.scenarios[0].verdict}`
    },
    {
      title: pageData.budgetExamples.scenarios[1].title,
      stat: "BALANCED LUXURY",
      description: `${pageData.budgetExamples.scenarios[1].stateroom} • ${pageData.budgetExamples.scenarios[1].package}. Total package cost: $980 for two. Verdict: ${pageData.budgetExamples.scenarios[1].verdict}`
    },
    {
      title: pageData.budgetExamples.scenarios[2].title,
      stat: "ELEVATED PREMIER",
      description: `${pageData.budgetExamples.scenarios[2].stateroom} • ${pageData.budgetExamples.scenarios[2].package}. Total package cost: $1,470 for two ($1,540 on Sun/Star). Verdict: ${pageData.budgetExamples.scenarios[2].verdict}`
    },
    {
      title: "Essential Vacation Budgeting Rule",
      stat: "FULL PICTURE",
      description: "Always calculate the complete door-to-door investment including government port fees, airport transfers, shore excursions, and optional package bundles before booking."
    }
  ];

  // ─── Section 10: Money Saving Steps for StepByStepGuide ───
  const savingSteps = pageData.moneySavingTips.steps.map((st) => ({
    step: st.step,
    title: st.title,
    description: st.description
  }));

  // ─── Section 14: FAQ List for FAQAccordion ───
  const faqAccordionData = {
    title: "Frequently Asked Questions About Princess Cruise Costs",
    subtitle: "Clear, factual answers to common pricing, package, gratuity, and dining questions",
    faqs: pageData.faqs
  };

  // Exact JSON-LD Structured Data Schema matching specification
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
        /* "image": {
          "@type": "ImageObject",
          "url": "REPLACE_WITH_APPROVED_ANGELA_HUGHES_IMAGE_URL"
        }, */
        "description": "Angela Hughes is a luxury travel expert with more than 40 years of travel-industry experience. She is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University, and has visited more than 121 countries.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Princess cruise fares and pricing",
          "Princess Plus and Princess Premier packages",
          "Luxury cruise planning",
          "Cruise stateroom categories",
          "Cruise destinations and itineraries",
          "Luxury travel budgeting"
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
            "name": "Princess Cruises",
            "item": "https://www.tripsandships.com/princess-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How Much Does a Princess Cruise Cost?",
            "item": "https://www.tripsandships.com/princess-cruises/cost"
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
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO (With Primary CTA & Sun Princess Flagship Hero Image) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge="2026 Princess Cruises Cost & Pricing Guide"
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        backgroundImage={HeroImage}
        imageAlt={pageData.hero.title}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        title="Princess Cruise Pricing Overview"
        sections={introSections}
        watermarkText="PRICING"
      />

      {/* ─── SECTION 3: TYPICAL CRUISE PRICE RANGES (CostComparisonMatrix Component) ─── */}
      <CostComparisonMatrix
        title={pageData.typicalPricingRanges.title}
        subtitle={pageData.typicalPricingRanges.subtitle}
        items={priceMatrixItems}
      />

      {/* ─── SECTION 4: WHAT DETERMINES THE PRICE (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.priceFactors.title}
        subtitle={pageData.priceFactors.subtitle}
        image={PriceFactorsShipImg}
        features={pricingFactors}
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: STATEROOM CATEGORIES & PRICING POSITIONING (TabbedComparison Component) ─── */}
      <div className="py-8 bg-ice-50">
        <TabbedComparison
          title={pageData.stateroomPricing.title}
          mainBrand={{ name: "Price Position" }}
          competitors={stateroomTabItems}
          hideVs={true}
          leftLabel="Pricing & Value Position"
          rightLabel="Features & Best Suited To"
        />
      </div>

      {/* ─── SECTION 6: PRINCESS PLUS VS PREMIER PACKAGES (LuxuryZigZagShowcase Component) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.packagePricing.title}
        subtitle={pageData.packagePricing.subtitle}
        items={packageZigZagItems}
      />

      <div className="max-w-4xl mx-auto px-6 -mt-16 mb-20 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="font-sans text-sm text-navy-900 font-semibold">
            {pageData.packagePricing.sunStarNote}
          </p>
        </div>
      </div>

      {/* ─── SECTION 7: STANDARD FARE INCLUSIONS VS EXTRA EXPENSES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Standard Cruise Fare vs. Out-of-Pocket Extras"
        subtitle="Understand what your ticket covers and where additional expenses arise during your voyage"
        includedTitle="Included in Standard Fare"
        extrasTitle="Additional Costs to Budget"
        included={standardInclusionsList}
        extras={additionalExpensesList}
      />

      {/* ─── SECTION 8: 7-NIGHT CRUISE BUDGET SCENARIOS (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.budgetExamples.title}
        subtitle={pageData.budgetExamples.subtitle}
        bentoItems={budgetBentoItems}
      />

      {/* ─── SECTION 9: IS PRINCESS EXPENSIVE? (FeatureSplit Component with Amalfi Image) ─── */}
      <FeatureSplit
        title={pageData.isPrincessExpensive.title}
        subtitles={[pageData.isPrincessExpensive.subtitle]}
        image={AmalfiCoastImg}
        imagePosition="right"
        theme="light"
        summary={`${pageData.isPrincessExpensive.p1} ${pageData.isPrincessExpensive.p2}`}
        features={pageData.isPrincessExpensive.valuePoints}
      >
        <p className="font-sans text-slate-600 leading-relaxed mt-4">
          {pageData.isPrincessExpensive.p3}
        </p>
      </FeatureSplit>

      {/* ─── SECTION 10: MONEY SAVING TIPS (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.moneySavingTips.title}
        subtitle={pageData.moneySavingTips.subtitle}
        steps={savingSteps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 11: IS PRINCESS WORTH THE COST? (EditorialIntroSplit with Sanctuary Pool Image) ─── */}
      <EditorialIntroSplit
        heading={pageData.worthTheCost.title}
        eyebrow="VALUE VERDICT & ADVISOR PERSPECTIVE"
        paragraphs={[
          pageData.worthTheCost.p1,
          pageData.worthTheCost.p2,
          pageData.worthTheCost.p3
        ]}
        primaryImage={SanctuaryPoolImg}
        primaryAlt="Princess Cruises luxury sanctuary experience"
      />

      {/* ─── SECTION 12: TRAVEL ADVISOR BIO & CONSULTATION (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.advisor.name}
        title={pageData.advisor.title}
        image={AboutImage}
        experienceBadge="40+ YEARS INDUSTRY EXPERTISE"
        credentials={[
          "Over 40 Years Designing Custom Cruise Vacations",
          "Explored Over 121 Countries Across All 7 Continents",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Founder of Luxury Travel University",
          "Expert in Princess Staterooms, Packages & Alaska Cruisetours",
          "Direct Relationships with Cruise Line Executives"
        ]}
        paragraphs={[
          "Choosing the right Princess sailing involves more than finding the lowest advertised price. It means comparing ships, departure dates, stateroom locations, package benefits, and the practical costs of reaching the port.",
          "Angela Hughes brings four decades of luxury travel experience and firsthand voyage knowledge. Her team provides personalized guidance to ensure your vacation budget matches your travel expectations."
        ]}
        quote={pageData.advisor.quote}
        ctaText="Plan Your Princess Cruise With Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 13: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion data={faqAccordionData} />

      {/* ─── SECTION 14: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Plan Your Princess Cruise Vacation?"
        description="Connect with Angela Hughes and the Trips & Ships Luxury Travel team to compare ships, staterooms, packages, and custom itineraries."
        buttonText="Contact Trips & Ships"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesCost;
