import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

/* ── Placeholder image imports (kept commented out as in RiversideRhoneCruises) ─────────────────
   // import HeroImage from "@/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-inclusions.jpg";
   // import LifestyleImage from "@/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-lifestyle.jpg";
   // import DiningImage from "@/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-dining.jpg";
─────────────────────────────────────────────────────────────────── */

// Shared UI System Components (From RitzCarltonVsSeabourn Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalCruisesWhatsIncluded = () => {
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
    stats: Array.isArray(item.stats) ? item.stats : undefined,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Exact JSON-LD Schema provided by User (Strictly without trailing slash)
  const crystalIncludedImageUrl =
    pageData.seo.primaryImageUrl ||
    "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-inclusions.jpg";

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
        //   "url": crystalIncludedImageUrl,
        //   "caption": "What Is Included on a Crystal Cruise and What Costs Extra?"
        // },
        // "image": crystalIncludedImageUrl,
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
          "Crystal Cruises Inclusions",
          "Crystal Cruises Dining",
          "Crystal Cruises Beverage Packages",
          "Luxury Cruise Butler Service",
          "Luxury Cruise Wi-Fi",
          "Luxury Cruise Gratuities",
          "Luxury Cruise Shore Excursions",
          "Luxury Cruise Budget Planning"
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
            "name": "What's Included on Crystal Cruises",
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
        {/* <meta property="og:image" content={crystalIncludedImageUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content={crystalIncludedImageUrl} /> */}

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
        secondaryCtaText={pageData.hero.secondaryCtaLabel || "Explore Pricing & Fares"}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl || "/crystal-cruises/cost"}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="INCLUSIONS"
        image1={
          // "src/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-lifestyle.jpg"
          undefined
        }
        image2={
          // "src/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-dining.jpg"
          undefined
        }
      />

      {/* ─── SECTION 3: QUICK ANSWER (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.quickAnswer.title}
        subtitle={pageData.quickAnswer.subtitle}
        items={quickAnswerItems}
      />

      {/* ─── SECTION 4: INCLUSIONS AT A GLANCE (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.inclusionsEditorial.title}
        subtitle={pageData.inclusionsEditorial.subtitle}
        image={
          // "src/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-inclusions.jpg"
          undefined
        }
        features={pageData.inclusionsEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: SUITE & STATEROOM INCLUSIONS (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.suitePricing.title}
        intro={pageData.suitePricing.intro}
        items={pageData.suitePricing.items}
      />

      {/* ─── SECTION 6: DINING INCLUSIONS (LuxuryZigZagShowcase Component - Image-Based) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.diningZigZag.title}
        subtitle={pageData.diningZigZag.subtitle}
        items={pageData.diningZigZag.items}
        images={[
          // "src/assets/CrystalCruises/CrystalCruisesWhatsIncluded/crystal-cruises-dining.jpg",
          undefined
        ]}
      />

      {/* ─── SECTION 6B: SPECIALTY DINING RESERVATION POLICY (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.reservationPolicyCards.title}
        prosTitle={pageData.reservationPolicyCards.prosTitle}
        consTitle={pageData.reservationPolicyCards.consTitle}
        bestFor={pageData.reservationPolicyCards.bestFor}
        notBestFor={pageData.reservationPolicyCards.notBestFor}
        bottomNote={pageData.reservationPolicyCards.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 7: DRINKS, WI-FI & GRATUITIES (BentoGlassmorphismGrid - Dark Navy Theme) ─── */}
      <BentoGlassmorphismGrid
        title="Beverages, Wi-Fi, Butler Service & Gratuities"
        subtitle="SIGNATURE ONBOARD PRIVILEGES INCLUDED IN EVERY FARE"
        bentoItems={pageData.onboardPerksBento}
      />

      {/* ─── SECTION 8: INCLUSIONS VS EXTRA CHARGES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.inclusionsVsExtras.title}
        subtitle={pageData.inclusionsVsExtras.subtitle}
        includedTitle={pageData.inclusionsVsExtras.includedTitle}
        extrasTitle={pageData.inclusionsVsExtras.extrasTitle}
        included={pageData.inclusionsVsExtras.included}
        extras={pageData.inclusionsVsExtras.extras}
      />

      {/* ─── SECTION 9: SUITE CATEGORY INCLUSIONS (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.suitesTabbedComparison.title}
        mainBrand={{ name: "Suite Category Privileges" }}
        competitors={pageData.suitesTabbedComparison.categories}
        hideVs={true}
        leftLabel="Suite Features & Privileges"
        rightLabel="Category Inclusions & Highlights"
      />

      {/* ─── SECTION 10: MIDDLE CTA (CenterCTA - Connected to /contact) ─── */}
      <CenterCTA
        title="Ready to Experience Crystal's All-Inclusive Luxury?"
        description="Connect with our luxury cruise specialists to compare Crystal Serenity, Symphony, and Grace suites and all-inclusive inclusions."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 11: HOW TO CALCULATE THE REAL COST (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.budgetRoadmap.title}
        subtitle={pageData.budgetRoadmap.subtitle}
        steps={pageData.budgetRoadmap.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 12: COMPETITOR VALUE COMPARISON (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={pageData.brandComparison}
      />

      {/* ─── SECTION 13: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
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

      {/* ─── SECTION 14: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Crystal Cruises Inclusions",
          subtitle: "Clear answers to the most common questions about fares, suites, dining, and inclusions.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 15: FINAL CENTER CTA (Connected to /contact) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalCruisesWhatsIncluded;

