import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import SunPrincessShip from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-sun-princess-sanctuary-alaska.webp';
import ScenicDestinationsImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-voyage-glaciers-whittier.webp';

// Shared UI System Components (From CrystalCruisesWhatsIncluded Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesVsCelebrity = () => {
  // Section 2: Narrative Intro mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.introSection.heading,
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3
      ]
    },
    {
      heading: pageData.introSection.codeHeading,
      paragraphs: [
        pageData.introSection.codeP1,
        pageData.introSection.codeP2,
        pageData.introSection.codeP3
      ]
    }
  ];

  // Section 6: Fleet Categories mapping for TabbedComparison (Authentic Sun Princess photo for Tab 1)
  const fleetCategories = [
    {
      ...pageData.fleetTabbedComparison.categories[0],
      image: SunPrincessShip
    },
    {
      ...pageData.fleetTabbedComparison.categories[1],
      image: undefined
    }
  ];

  // Section 8: Staterooms & Suites mapping for DetailedInclusionsList
  const stateroomItems = pageData.stateroomsDetailed.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 9: Entertainment mapping for ThreeColumnGrid
  const entertainmentItems = pageData.entertainmentThreeCol.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    features: item.features,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Exact JSON-LD Schema (Canonical URL strictly without trailing slash)
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
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg"
        },
        "description": "Angela Hughes is a luxury travel industry leader with more than 40 years of experience and expertise in luxury cruises, river cruising, expeditions and personalised travel.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Celebrity Cruises",
          "Luxury cruising",
          "Cruise ship comparisons",
          "Luxury cruise accommodation",
          "Cruise itineraries",
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
            "name": "Princess Cruises vs. Celebrity",
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO (Byline, No Updated Date) ─── */}
      <ComparisonHero
        byline={true}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        backgroundImage={undefined}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="VS CELEBRITY"
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.atAGlanceTable}
      />

      {/* ─── SECTION 4: OVERALL ATMOSPHERE (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.atmosphereCompare.title}
        prosTitle={pageData.atmosphereCompare.prosTitle}
        consTitle={pageData.atmosphereCompare.consTitle}
        bestFor={pageData.atmosphereCompare.bestFor}
        notBestFor={pageData.atmosphereCompare.notBestFor}
        bottomNote={pageData.atmosphereCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 5: PRIORITY MATCH GUIDE (Moved here between Atmosphere and Ships & Fleet) ─── */}
      <ComparisonTable
        data={pageData.priorityTable}
      />

      {/* ─── SECTION 6: SHIPS & FLEET (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.fleetTabbedComparison.title}
        mainBrand={{ name: "Fleet Architecture" }}
        competitors={fleetCategories}
        hideVs={true}
        leftLabel="Ship Classes & Design"
        rightLabel="Key Venues & Strengths"
      />

      {/* ─── SECTION 7: DINING COMPARISON (LuxuryZigZagShowcase Component - No bestFor badges) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.diningZigZag.title}
        subtitle={pageData.diningZigZag.subtitle}
        items={pageData.diningZigZag.items}
        images={[undefined]}
      />

      {/* ─── SECTION 8: STATEROOMS & SUITES (DetailedInclusionsList Component - No number prefixes in titles) ─── */}
      <DetailedInclusionsList
        title={pageData.stateroomsDetailed.title}
        intro={pageData.stateroomsDetailed.intro}
        items={stateroomItems}
      />

      {/* ─── SECTION 9: ENTERTAINMENT & FAMILY (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.entertainmentThreeCol.title}
        subtitle={pageData.entertainmentThreeCol.subtitle}
        items={entertainmentItems}
      />

      {/* ─── SECTION 10: DESTINATIONS & ITINERARIES (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.destinationsEditorial.title}
        subtitle={pageData.destinationsEditorial.subtitle}
        image={ScenicDestinationsImage}
        features={pageData.destinationsEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 11: ONBOARD TECHNOLOGY (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.technologyBento.title}
        subtitle={pageData.technologyBento.subtitle}
        bentoItems={pageData.technologyBento.items}
      />

      {/* ─── SECTION 12: DRINKS, WI-FI & PACKAGES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.packagesCostValue.title}
        subtitle={pageData.packagesCostValue.subtitle}
        includedTitle={pageData.packagesCostValue.includedTitle}
        extrasTitle={pageData.packagesCostValue.extrasTitle}
        included={pageData.packagesCostValue.included}
        extras={pageData.packagesCostValue.extras}
      />

      {/* ─── SECTION 13: DECISION FRAMEWORK FOR TRAVEL STYLES (StepByStepGuide Component - grid layout) ─── */}
      <StepByStepGuide
        title={pageData.decisionFrameworkSteps.title}
        subtitle={pageData.decisionFrameworkSteps.subtitle}
        steps={pageData.decisionFrameworkSteps.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 14: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component - 11 FAQs) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess Cruises vs. Celebrity",
          subtitle: "Clear comparisons of dining, ships, suites, packages, and destinations to help you decide.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 15: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO of Trips & Ships Luxury Travel"
        bio="Angela Hughes is a luxury travel industry leader with more than 40 years of experience and expertise in luxury cruises, river cruising, expeditions and personalised travel. Having guided thousands of clients across every major cruise line, Angela provides insider guidance on matching travellers with their ideal ship, suite, and itinerary."
        image={AboutImage}
        quote="Choosing between Princess and Celebrity isn't about which brand is universally better—it's about matching your travel personality. If you crave cutting-edge architectural design and vibrant resort energy, Celebrity shines. If you cherish rich destination immersion, seamless wearable technology, and classic cruise elegance, Princess delivers an unmatched voyage."
        quoteSubtitle="Angela Hughes, 40+ Years Luxury Cruise Specialist"
        ctaText="Plan Your Cruise With Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 16: FINAL CALL TO ACTION (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default PrincessCruisesVsCelebrity;
