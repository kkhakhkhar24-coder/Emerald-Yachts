import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import SunPrincessShip from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-sun-princess-sanctuary-alaska.webp';
import IconOfTheSeasShip from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-anchorage-alaska-royal-princess-sailaway-whittier-drone.webp';
import PrincessDiningImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp';
import RoyalDiningImage from '@/assets/Disneyvsroyalcaribbean/disney-wish-enchante-restaurant-luxury-booth-seating-adults.webp';
import RoyalCelebrationDining from '@/assets/Disneyvsroyalcaribbean/disney-wish-palo-steakhouse-adult-exclusive-restaurant-layout.webp';
import PrincessSuiteImage from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite.webp';
import RoyalSuiteImage from '@/assets/Disneycruisebookingtimeline/disney-cruise-royal-suite-multigenerational-family-luxury-travel.jpg';

// Shared UI System Components (From CrystalCruisesWhatsIncluded Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesVsRoyalCaribbean = () => {
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

  // Fleet Categories mapping for TabbedComparison (Authentic flagship exterior photos)
  const fleetCategories = [
    {
      ...pageData.fleetTabbedComparison.categories[0],
      image: SunPrincessShip
    },
    {
      ...pageData.fleetTabbedComparison.categories[1],
      image: IconOfTheSeasShip
    }
  ];

  // Section 6: Family mapping for DetailedInclusionsList
  const familyItems = pageData.familyDetailed.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Dining Showcase items mapping for LuxuryZigZagShowcase (Authentic dining venues)
  const diningItems = [
    {
      ...pageData.diningZigZag.items[0],
      image: PrincessDiningImage
    },
    {
      ...pageData.diningZigZag.items[1],
      image: RoyalDiningImage
    },
    {
      ...pageData.diningZigZag.items[2],
      image: RoyalCelebrationDining
    }
  ];

  // Section 9: Staterooms & Suites mapping for ThreeColumnGrid (Authentic suites)
  const stateroomItems = [
    {
      ...pageData.stateroomsThreeCol.items[0],
      image: PrincessSuiteImage
    },
    {
      ...pageData.stateroomsThreeCol.items[1],
      image: RoyalSuiteImage
    },
    {
      ...pageData.stateroomsThreeCol.items[2],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[2].title
    }
  ];

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
        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader specializing in premium cruises and customized travel.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Royal Caribbean",
          "Luxury cruises",
          "Cruise ship comparisons",
          "Cruise destinations",
          "Family cruises",
          "Cruise accommodations"
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
            "name": "Princess vs. Royal Caribbean",
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
        watermarkText="VS ROYAL"
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.atAGlanceTable}
      />

      {/* ─── SECTION 4: OVERALL CRUISE EXPERIENCE (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.overallExperienceCompare.title}
        prosTitle={pageData.overallExperienceCompare.prosTitle}
        consTitle={pageData.overallExperienceCompare.consTitle}
        bestFor={pageData.overallExperienceCompare.bestFor}
        notBestFor={pageData.overallExperienceCompare.notBestFor}
        bottomNote={pageData.overallExperienceCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 5: ENTERTAINMENT & NIGHTLIFE (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.entertainmentCostValue.title}
        subtitle={pageData.entertainmentCostValue.subtitle}
        includedTitle={pageData.entertainmentCostValue.includedTitle}
        extrasTitle={pageData.entertainmentCostValue.extrasTitle}
        included={pageData.entertainmentCostValue.included}
        extras={pageData.entertainmentCostValue.extras}
      />

      {/* ─── SECTION 6: SHIPS & FLEET (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.fleetTabbedComparison.title}
        mainBrand={{ name: "Fleet Scale & Design" }}
        competitors={fleetCategories}
        hideVs={true}
        leftLabel="Ship Classes & Scale"
        rightLabel="Key Venues & Strengths"
      />

      {/* ─── SECTION 7: FAMILIES & CHILDREN (DetailedInclusionsList Component - No number prefixes in titles) ─── */}
      <DetailedInclusionsList
        title={pageData.familyDetailed.title}
        intro={pageData.familyDetailed.intro}
        items={familyItems}
      />

      {/* ─── SECTION 8: DINING SHOWDOWN (LuxuryZigZagShowcase Component - No bestFor badges) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.diningZigZag.title}
        subtitle={pageData.diningZigZag.subtitle}
        items={diningItems}
        images={[]}
      />

      {/* ─── SECTION 9: STATEROOMS & SUITES (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.stateroomsThreeCol.title}
        subtitle={pageData.stateroomsThreeCol.subtitle}
        items={stateroomItems}
      />

      {/* ─── SECTION 10: DESTINATIONS & ITINERARIES (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.destinationsTable}
      />

      {/* ─── SECTION 11: ONBOARD TECHNOLOGY (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.technologyBento.title}
        subtitle={pageData.technologyBento.subtitle}
        bentoItems={pageData.technologyBento.items}
      />

      {/* ─── SECTION 12: PRICING, PACKAGES & VALUE (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.packagesEditorial.title}
        subtitle={pageData.packagesEditorial.subtitle}
        image={undefined}
        features={pageData.packagesEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 13: TRAVELER PROFILES (StepByStepGuide Component - grid layout) ─── */}
      <StepByStepGuide
        title={pageData.travelerProfilesSteps.title}
        subtitle={pageData.travelerProfilesSteps.subtitle}
        steps={pageData.travelerProfilesSteps.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 14: EXPERT RECOMMENDATION (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.recommendationCompare.title}
        prosTitle={pageData.recommendationCompare.prosTitle}
        consTitle={pageData.recommendationCompare.consTitle}
        bestFor={pageData.recommendationCompare.bestFor}
        notBestFor={pageData.recommendationCompare.notBestFor}
        bottomNote={pageData.recommendationCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 15: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component - 10 FAQs) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess vs. Royal Caribbean",
          subtitle: "Clear answers to the most common questions about entertainment, ships, dining, families, and overall value.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 16: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO and Luxury Travel Advisor"
        bio="Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader specializing in premium cruises, ship comparisons, and customized vacation planning. Having personally sailed across both fleets, Angela offers candid insights into choosing between mega-resort thrills and destination-rich elegance."
        image={AboutImage}
        quote="Choosing between Princess and Royal Caribbean comes down to where you want the energy focused: on the destination or on the ship itself. If you want a floating resort filled with jaw-dropping thrills and Broadway spectacles, Royal Caribbean is unmatched. If you want a serene, refined journey where ocean views, exquisite dining, and world-class ports take center stage, Princess is perfection."
        quoteSubtitle="Angela Hughes, 40+ Years Cruise Industry Leader"
        ctaText="Plan Your Cruise With Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 17: FINAL CALL TO ACTION (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default PrincessCruisesVsRoyalCaribbean;
