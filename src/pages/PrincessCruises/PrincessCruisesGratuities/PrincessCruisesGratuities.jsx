import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp';
import LoungeImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-bar.webp';
import StateroomImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import DiningImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';
import SunPrincessImage from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-sun-princess-sanctuary-alaska.webp';
import AmalfiSunriseImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-amalfi-italy-sunrise-sun-princess.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import CardGrid from '@/components/ui/CardGrid';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesGratuities = () => {
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

  // Section 5: 7-Night Cruise Costs items for ThreeColumnGrid
  const sevenNightImages = [
    undefined,
    undefined,
    undefined
  ];

  const sevenNightItems = pageData.sevenNightGrid.map((item, idx) => ({
    title: item.title,
    category: item.category,
    features: item.features,
    image: sevenNightImages[idx % sevenNightImages.length],
    placeholderLabel: item.title
  }));

  // Section 11: Additional Tipping DetailedInclusionsList items
  const tippingDetailImages = [
    StateroomImage,
    DiningImage,
    LoungeImage,
    undefined
  ];

  const detailedTippingItems = pageData.extraTippingDetails.map((item, idx) => ({
    title: item.title,
    category: item.category,
    paragraphs: item.paragraphs,
    lists: item.lists,
    image: tippingDetailImages[idx % tippingDetailImages.length],
    placeholderLabel: item.title
  }));

  const canonicalUrl = pageData.seo.canonicalUrl;

  // JSON-LD Schema (Strictly without trailing slashes)
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
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp"
        },
        "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp",
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
        "description": "Angela Hughes is a luxury travel industry leader with more than 40 years of experience and expertise in luxury cruises, river cruising, expeditions and personalised travel.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Cruise gratuities",
          "Crew Appreciation",
          "Luxury cruising",
          "Cruise package planning",
          "Luxury travel"
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
            "name": "Gratuities and Crew Appreciation",
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
        backgroundImage={HeroImage}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="GRATUITIES"
        image1={AmalfiSunriseImage}
        image2={SunPrincessImage}
      />

      {/* ─── SECTION 3: WHAT ARE GRATUITIES? (CardGrid Component) ─── */}
      <CardGrid
        title={pageData.whatAreGratuities.title}
        subtitle={pageData.whatAreGratuities.intro}
        cards={pageData.whatAreGratuities.departments}
        columns={3}
      />

      {/* ─── SECTION 4: DAILY RATES (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.dailyRates.title}
        subtitle={pageData.dailyRates.subtitle}
        items={pageData.dailyPricingTiers}
      />

      {/* ─── SECTION 5: 7-NIGHT COSTS (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.sevenNightCosts.title}
        subtitle={pageData.sevenNightCosts.subtitle}
        items={sevenNightItems}
      />

      {/* ─── SECTION 6: LONGER VOYAGE COSTS (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.longerVoyageCosts.title}
        subtitle={pageData.longerVoyageCosts.subtitle}
        bentoItems={pageData.longerVoyageBento}
      />

      {/* ─── SECTION 7: HOW ARE GRATUITIES CHARGED? (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.paymentMethods.title}
        subtitle={pageData.paymentMethods.subtitle}
        steps={pageData.howChargedSteps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 8: PLUS & PREMIER INCLUSIONS (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.packageInclusions.title}
        subtitle={pageData.packageInclusions.subtitle}
        cards={pageData.packageInclusions.packages}
      />

      {/* ─── SECTION 9: ADDITIONAL SERVICE CHARGES (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.serviceCharges.title}
        subtitle={pageData.serviceCharges.intro}
        image={undefined}
        features={pageData.serviceCharges.categories}
        bgClass="bg-white"
      />

      {/* ─── SECTION 10: ADJUSTING OR REMOVING GRATUITIES (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.adjustingGratuities.title}
        subtitle={pageData.adjustingGratuities.subtitle}
        cards={pageData.adjustingGratuities.rules}
      />

      {/* ─── SECTION 11: SHOULD YOU TIP EXTRA? (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.additionalTipping.title}
        intro={[pageData.additionalTipping.intro, pageData.additionalTipping.guidance]}
        items={detailedTippingItems}
      />

      {/* ─── SECTION 12: BUDGETING ANALYSIS (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Princess Cruises Gratuities: What Should You Budget?"
        subtitle="Framework for Estimating Mandatory Daily Gratuities vs. Optional Onboard Spending"
        includedTitle={pageData.budgetAnalysis.includedTitle}
        extrasTitle={pageData.budgetAnalysis.extrasTitle}
        included={pageData.budgetAnalysis.included}
        extras={pageData.budgetAnalysis.extras}
      />

      {/* ─── SECTION 13: FAQS (FAQAccordion Component) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 14: EXPERT CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        image={AboutImage}
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
        bio={pageData.angelaBio.bio}
        credentials={pageData.angelaBio.credentials}
        quote={pageData.angelaBio.quote}
      />

      {/* ─── SECTION 15: FINAL CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        subtitle={pageData.finalCta.subtitle}
        primaryCtaText={pageData.finalCta.primaryCtaText}
        primaryCtaLink={pageData.finalCta.primaryCtaLink}
        secondaryCtaText={pageData.finalCta.secondaryCtaText}
        secondaryCtaLink={pageData.finalCta.secondaryCtaLink}
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesGratuities;
