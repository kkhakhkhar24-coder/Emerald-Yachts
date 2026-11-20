import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Shared UI System Components (From CrystalCruisesWhatsIncluded Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ProsConsCards from '@/components/ui/ProsConsCards';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesVsHollandAmerica = () => {
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

  // Section 7: Denali & Cruisetours mapping for DetailedInclusionsList
  const cruisetourItems = pageData.cruisetoursDetailed.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 8: Ships & Atmosphere mapping for ThreeColumnGrid
  const shipsItems = pageData.shipsThreeCol.items.map((item) => ({
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
        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader specializing in premium cruises and customized travel.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Alaska cruises",
          "Princess Cruises",
          "Holland America Line",
          "Glacier Bay National Park",
          "Denali National Park",
          "Luxury cruises",
          "Cruise and land vacations"
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
            "name": "Princess vs. Holland America for Alaska",
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
        watermarkText="ALASKA"
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.atAGlanceTable}
      />

      {/* ─── SECTION 4: REGIONAL EXPERTISE (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.regionalExpertise.title}
        prosTitle={pageData.regionalExpertise.prosTitle}
        consTitle={pageData.regionalExpertise.consTitle}
        bestFor={pageData.regionalExpertise.bestFor}
        notBestFor={pageData.regionalExpertise.notBestFor}
        bottomNote={pageData.regionalExpertise.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 5: GLACIER VIEWING COMPARISON (LuxuryZigZagShowcase Component - No bestFor badges) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.glacierViewingShowcase.title}
        subtitle={pageData.glacierViewingShowcase.subtitle}
        items={pageData.glacierViewingShowcase.items}
        images={[undefined]}
      />

      {/* ─── SECTION 6: HOW TO CHOOSE YOUR ALASKA ROUTE (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.routeComparisonTable}
      />

      {/* ─── SECTION 7: DENALI & ALASKA CRUISETOURS (DetailedInclusionsList Component - No number prefixes in titles) ─── */}
      <DetailedInclusionsList
        title={pageData.cruisetoursDetailed.title}
        intro={pageData.cruisetoursDetailed.intro}
        items={cruisetourItems}
      />

      {/* ─── SECTION 8: SHIPS & ONBOARD ATMOSPHERE (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.shipsThreeCol.title}
        subtitle={pageData.shipsThreeCol.subtitle}
        items={shipsItems}
      />

      {/* ─── SECTION 9: DINING & CULINARY EXPERIENCES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.diningCostValue.title}
        subtitle={pageData.diningCostValue.subtitle}
        includedTitle={pageData.diningCostValue.includedTitle}
        extrasTitle={pageData.diningCostValue.extrasTitle}
        included={pageData.diningCostValue.included}
        extras={pageData.diningCostValue.extras}
      />

      {/* ─── SECTION 10: TRAVELER PROFILES (GenericChecklistCards Component - 4 columns) ─── */}
      <GenericChecklistCards
        title={pageData.travelerChecklist.title}
        subtitle={pageData.travelerChecklist.subtitle}
        cards={pageData.travelerChecklist.cards}
      />

      {/* ─── SECTION 11: CRUISE FARES, PACKAGES & VALUE (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.packagesEditorial.title}
        subtitle={pageData.packagesEditorial.subtitle}
        image={undefined}
        features={pageData.packagesEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 12: DECISION COMPARISON (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.decisionCompare.title}
        prosTitle={pageData.decisionCompare.prosTitle}
        consTitle={pageData.decisionCompare.consTitle}
        bestFor={pageData.decisionCompare.bestFor}
        notBestFor={pageData.decisionCompare.notBestFor}
        bottomNote={pageData.decisionCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 13: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component - 10 FAQs) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess vs. Holland America Alaska",
          subtitle: "Clear comparisons of Glacier Bay, Denali cruisetours, dining, and value to guide your vacation planning.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 14: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO and Luxury Travel Advisor"
        bio="Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader specializing in Alaska cruises, wilderness cruisetours, and customized travel. Having personally planned and sailed dozens of Alaska itineraries, Angela provides unmatched clarity on staterooms, cruisetour logistics, and glacier viewing routes."
        image={AboutImage}
        quote="Choosing between Princess and Holland America in Alaska is about personal rhythm. If you want direct-to-wilderness rail journeys, expansive lodge options, and lively shipboard energy, Princess is unbeatable. If you prefer quiet observation decks, classical live music, and deep Yukon history, Holland America is your home."
        quoteSubtitle="Angela Hughes, 40+ Years Alaska Cruise Specialist"
        ctaText="Plan Your Alaska Cruise With Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 15: FINAL CALL TO ACTION (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default PrincessCruisesVsHollandAmerica;
