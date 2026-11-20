import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import BarImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-bar.webp';
import RestaurantAmbiance from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-restaurant-ambiance.webp';
import SwingsBarImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-bahamas-celebration-key-swings-bar.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CardGrid from '@/components/ui/CardGrid';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import VsComparisonGrid from '@/components/ui/VsComparisonGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesDrinkPackages = () => {
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

  // Section 3: BrandPillarsShowcase data mapping
  const atAGlancePillarsData = {
    title: pageData.atAGlance.title,
    subtitle: pageData.atAGlance.subtitle,
    pillars: pageData.atAGlance.items.map((item) => ({
      title: item.title,
      description: item.description,
      bullets: item.bullets
    }))
  };

  // Section 5: Plus & Premier Deep Dive for LuxuryZigZagShowcase (Omitted bestFor to prevent "Ideal For" label)
  const deepDiveItems = [
    {
      title: pageData.plusPackage.title,
      category: "Up to $15 USD per Drink",
      description: `${pageData.plusPackage.intro} Includes cocktails, spirits, wine by the glass, beer, specialty coffees, mocktails, fountain sodas, and up to 12 bottles of water (<=500ml) per day. Suitable for guests who enjoy a combination of alcoholic and non-alcoholic drinks throughout the day.`
    },
    {
      title: pageData.premierPackage.title,
      category: "Up to $20 USD per Drink • No Daily Alcoholic Limit",
      description: `${pageData.premierPackage.intro} Features top-shelf spirits, reserve wines by the glass, high-end crafted cocktails, unlimited specialty coffees, frappes, and no daily alcoholic beverage limits under current terms. Better fit for guests who regularly choose premium spirits or reserve wines.`
    }
  ];

  const deepDiveImages = [
    undefined,
    undefined
  ];

  // Section 5B: Limits Comparison for VsComparisonGrid
  const limitComparisonData = {
    title: "Daily Beverage Limits & Service Policies",
    rhine: {
      title: pageData.plusPackage.dailyLimit.title,
      subtitle: "Princess Plus (15-Drink Cap)",
      features: [
        pageData.plusPackage.dailyLimit.p1,
        pageData.plusPackage.dailyLimit.p2,
        pageData.plusPackage.dailyLimit.p3,
        `Additional Perk: ${pageData.plusPackage.additionalBenefits}`
      ]
    },
    danube: {
      title: pageData.premierPackage.dailyLimit.title,
      subtitle: "Princess Premier (No Daily Limit)",
      features: [
        pageData.premierPackage.dailyLimit.p1,
        pageData.premierPackage.dailyLimit.p2,
        "All alcohol service remains subject to Princess's responsible service policies, bartender discretion, venue availability and package exclusions.",
        `Additional Perk: ${pageData.premierPackage.additionalBenefits}`
      ]
    }
  };

  // Section 6: Non-Alcoholic GenericChecklistCards
  const nonAlcoholicCards = pageData.nonAlcoholicSection.packages.map((pkg) => ({
    title: pkg.name,
    items: pkg.inclusions
  }));

  // Section 7B: Cruise Package Pricing Tiers for PricingTiersCards
  const cruisePricingTiers = [
    {
      name: "Princess Plus (Most Ships)",
      price: "$70 / day",
      nights: "Per Guest",
      description: "Includes Plus Beverage Package (drinks up to $15, 15 daily limit), single-device Wi-Fi, crew appreciation (gratuities), and 4 casual dining meals per voyage."
    },
    {
      name: "Princess Plus (Sun & Star Princess)",
      price: "$75 / day",
      nights: "Per Guest",
      description: "Sphere-class package rate including Plus Beverage Package, single-device Wi-Fi, crew appreciation, and 4 casual dining meals per voyage."
    },
    {
      name: "Princess Premier (All Ships)",
      price: "$105–$110 / day",
      nights: "Top-Tier",
      description: "Includes Premier Beverage Package (drinks up to $20, no daily alcoholic limit), 4-device Wi-Fi, crew appreciation, unlimited casual dining, and unlimited specialty dining meals. ($105/day most ships; $110/day Sun & Star Princess)."
    }
  ];

  // Section 8: Excluded items for DetailedInclusionsList
  const detailedExclusionItems = pageData.exclusions.items.map((item) => ({
    title: item.title,
    category: "Package Exclusion",
    paragraphs: [item.description],
    image: undefined,
    placeholderLabel: item.title,
    lists: [
      {
        title: "Policy & Status",
        items: [
          item.description.includes("25% discount") ? "Eligible for 25% discount" : "Standard venue pricing applies",
          "Charged separately to stateroom account"
        ]
      }
    ]
  }));

  // Section 9 & 11: Logistics Bento Items for BentoGlassmorphismGrid
  const bentoGridItems = pageData.logisticsBento.items.map((item) => ({
    title: item.title,
    stat: item.stat,
    description: item.description,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 10B: Calculation Steps for StepByStepGuide
  const calculationSteps = [
    {
      title: "Estimate Daily Drink Orders",
      description: pageData.valueEvaluation.calculationP1
    },
    {
      title: "Calculate Projected Spending",
      description: pageData.valueEvaluation.calculationP2
    },
    {
      title: "Account for Bundled Amenities",
      description: pageData.valueEvaluation.calculationP3
    }
  ];

  // Section 11: Traveler Profiles for ThreeColumnGrid
  const profileItems = pageData.howToChoose.profiles.map((profile) => ({
    title: profile.title,
    category: profile.badge,
    description: profile.description
  }));

  // JSON-LD Schema (Strictly without trailing slash)
  const canonicalUrl = pageData.seo.canonicalUrl;
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageData.seo.canonicalUrl}#webpage`,
        "url": canonicalUrl,
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
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Cruise Specialist"
        },
        "description": "Angela Hughes is CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel professional with more than 40 years in the travel industry.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Princess Plus",
          "Princess Premier",
          "Cruise beverage packages",
          "Luxury cruise experiences",
          "Cruise planning"
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
            "name": "Drink Packages",
            "item": canonicalUrl
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
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero - Clean, no date stamps) ─── */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        backgroundImage={BarImage}
      />

      {/* ─── SECTION 2: INTRO NARRATIVE (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="BEVERAGES"
        image1={SwingsBarImage}
        image2={RestaurantAmbiance}
      />

      {/* ─── SECTION 3: DRINK PACKAGES AT A GLANCE (CardGrid) ─── */}
      <CardGrid
        title={pageData.atAGlance.title}
        subtitle={pageData.atAGlance.subtitle}
        cards={pageData.atAGlance.items}
        columns={4}
      />

      {/* ─── SECTION 4: DRINK PACKAGE PRICES & 7-NIGHT COST (ComparisonTable & CardGrid) ─── */}
      <ComparisonTable
        data={{
          title: pageData.pricing.title,
          headers: pageData.pricing.table.headers,
          rows: pageData.pricing.table.rows
        }}
      />

      <CardGrid
        title="Key Pricing Terms & Payment Policies"
        subtitle="Essential details regarding standalone values, currency exchange, and mandatory service charges."
        cards={pageData.pricing.importantNotesCards}
        columns={3}
      />

      {/* ─── SECTION 5: PLUS & PREMIER PACKAGES DEEP DIVE (LuxuryZigZagShowcase & VsComparisonGrid) ─── */}
      <LuxuryZigZagShowcase
        title="Plus vs. Premier Beverage Packages: Inclusions & Limits"
        subtitle="Explore the differences in price caps, spirits selection, wine varieties, and daily beverage limits."
        items={deepDiveItems}
        images={deepDiveImages}
      />

      <VsComparisonGrid data={limitComparisonData} />

      {/* ─── SECTION 6: NON-ALCOHOLIC PACKAGES (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.nonAlcoholicSection.title}
        subtitle="Non-Alcoholic Solutions"
        cards={nonAlcoholicCards}
      />

      {/* ─── SECTION 7: PRINCESS PLUS VS. PREMIER CRUISE PACKAGES (ComparisonTable & PricingTiersCards) ─── */}
      <ComparisonTable
        data={{
          title: pageData.plusVsPremierCruisePackages.title,
          headers: pageData.plusVsPremierCruisePackages.table.headers,
          rows: pageData.plusVsPremierCruisePackages.table.rows
        }}
      />

      <PricingTiersCards
        title={pageData.plusVsPremierCruisePackages.pricingTiers.title}
        subtitle={pageData.plusVsPremierCruisePackages.pricingTiers.subtitle}
        items={cruisePricingTiers}
      />

      {/* ─── SECTION 8: WHAT IS NOT INCLUDED (DetailedInclusionsList) ─── */}
      <DetailedInclusionsList
        title={pageData.exclusions.title}
        intro={pageData.exclusions.intro || [pageData.exclusions.subtitle]}
        items={detailedExclusionItems}
      />

      {/* ─── SECTION 9 & 11: HOW PACKAGES WORK & PRIVATE ISLANDS (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.logisticsBento.title}
        subtitle={pageData.logisticsBento.subtitle}
        bentoItems={bentoGridItems}
      />

      {/* ─── SECTION 10: DO YOU NEED A DRINK PACKAGE? (ProsConsCards & StepByStepGuide) ─── */}
      <ProsConsCards
        title={pageData.valueEvaluation.title}
        prosTitle="When a Drink Package Is Worth It"
        consTitle="When Paying Individually Is Better"
        bestFor={pageData.valueEvaluation.whenWorthIt}
        notBestFor={pageData.valueEvaluation.whenPayIndividually}
        type="compare"
      />

      <StepByStepGuide
        title="A Simple Way to Calculate Value"
        subtitle="Three-Step Beverage Budget Framework"
        steps={calculationSteps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 11: HOW TO CHOOSE (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.howToChoose.title}
        subtitle={pageData.howToChoose.subtitle}
        items={profileItems}
      />

      {/* ─── SECTION 12: FAQS (FAQAccordion) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 13: EXPERT CREDENTIALS & CALL TO ACTION ─── */}
      <ExpertCredentials
        image={AboutImage}
        name="Angela Hughes"
        title="Princess Cruises Specialist & CEO, Trips & Ships Luxury Travel"
        ctaText="Plan Your Princess Cruise"
        ctaLink="/contact"
        bio="Angela Hughes has spent over four decades curating high-end worldwide journeys across 121+ countries. Her firsthand cruise experience across the Princess Cruises fleet ensures clients evaluate beverage packages with precision, avoid unexpected service charges, and secure maximum value from onboard packages."
        credentials={[
          "40+ Years Luxury Cruise Experience",
          "Traveled to 121+ Countries Worldwide",
          "Princess Cruises Certified Specialist",
          "CLIA Master Cruise Counselor"
        ]}
        quote="Evaluating a Princess beverage package requires looking beyond drink counts. Factoring in specialty coffee, bottled water, and bundled cruise benefits like Wi-Fi and gratuities reveals whether a package truly saves you money."
      />

      <CenterCTA
        title="Plan Your Princess Cruise With Expert Guidance"
        subtitle="Speak with Angela Hughes and the Trips & Ships luxury cruise team to match your beverage preferences with the ideal ship, package benefits, and itinerary arrangements."
        primaryCtaText="Plan Your Princess Cruise"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Princess Cruises Guide"
        secondaryCtaLink="/princess-cruises"
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesDrinkPackages;
