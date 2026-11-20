import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Shared UI System Components (From CrystalCruisesWhatsIncluded Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesDressCode = () => {
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

  // Section 8: Detailed Packing Situations (No number prefixes in titles)
  const packingSituationItems = pageData.packingSituations.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 9: Destination-Specific Wardrobes for ThreeColumnGrid
  const destinationItems = pageData.destinationPacking.destinations.map((dest) => ({
    title: dest.title,
    category: dest.category,
    description: dest.description,
    features: dest.features,
    highlight: dest.highlight,
    image: undefined,
    placeholderLabel: dest.title
  }));

  // JSON-LD Schema (Canonical URL strictly without trailing slash)
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
          "Luxury cruising",
          "Cruise dress codes",
          "Cruise packing",
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
            "name": "Dress Code",
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

      {/* ─── SECTION 1: COMPARISON HERO (Byline, Author) ─── */}
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
        watermarkText="DRESS CODE"
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: SMART CASUAL DRESS CODE (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.smartCasualChecklist.title}
        subtitle={pageData.smartCasualChecklist.subtitle}
        cards={pageData.smartCasualChecklist.cards}
      />

      {/* ─── SECTION 4: FORMAL NIGHTS SHOWCASE (LuxuryZigZagShowcase Component - No bestFor badges) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.formalNightsShowcase.title}
        subtitle={pageData.formalNightsShowcase.subtitle}
        items={pageData.formalNightsShowcase.items}
        images={[undefined]}
      />

      {/* ─── SECTION 5: FORMAL NIGHTS SCHEDULE TABLE (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.formalScheduleTable}
      />

      {/* ─── SECTION 6: SEVEN-NIGHT CRUISE BREAKDOWN (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.sevenNightEditorial.title}
        subtitle={pageData.sevenNightEditorial.subtitle}
        image={undefined}
        features={pageData.sevenNightEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 7: CAN YOU SKIP FORMAL NIGHT? (ProsConsCards Component - compare type) ─── */}
      <ProsConsCards
        title={pageData.skipFormalNight.title}
        prosTitle={pageData.skipFormalNight.prosTitle}
        consTitle={pageData.skipFormalNight.consTitle}
        bestFor={pageData.skipFormalNight.bestFor}
        notBestFor={pageData.skipFormalNight.notBestFor}
        bottomNote={pageData.skipFormalNight.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 8: PACKING SITUATIONS (DetailedInclusionsList Component - No number prefixes in titles) ─── */}
      <DetailedInclusionsList
        title={pageData.packingSituations.title}
        intro={pageData.packingSituations.intro}
        items={packingSituationItems}
      />

      {/* ─── SECTION 9: DESTINATION-SPECIFIC PACKING (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.destinationPacking.title}
        subtitle={pageData.destinationPacking.subtitle}
        items={destinationItems}
      />

      {/* ─── SECTION 10: COMPLETE PACKING CHECKLIST (GenericChecklistCards Component - 4 columns) ─── */}
      <GenericChecklistCards
        title={pageData.checklistGrid.title}
        subtitle={pageData.checklistGrid.subtitle}
        cards={pageData.checklistGrid.cards}
      />

      {/* ─── SECTION 11: PACKING EFFICIENCY TIPS (StepByStepGuide Component - grid layout) ─── */}
      <StepByStepGuide
        title={pageData.efficientPackingTips.title}
        subtitle={pageData.efficientPackingTips.subtitle}
        steps={pageData.efficientPackingTips.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 12: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component - 11 FAQs) ─── */}
      <FAQAccordion
        data={{
          title: "Princess Cruises Dress Code: Frequently Asked Questions",
          subtitle: "Clear answers to the most common questions about Smart Casual nights, formal evenings, packing essentials, and dining room etiquette.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 13: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO of Trips & Ships Luxury Travel"
        bio="Angela Hughes is a luxury travel industry leader with more than 40 years of experience and expertise in luxury cruises, river cruising, expeditions and personalised travel. Having guided thousands of clients across every major cruise line, Angela provides insider guidance on wardrobe planning, stateroom selection, and seamless embarkation."
        image={AboutImage}
        quote="The secret to packing for a Princess cruise is versatility: coordinate a tight neutral color palette, lean into lightweight layers, and never stress over formal night. Elegance at sea is about feeling confident, comfortable, and celebrating the journey."
        quoteSubtitle="Angela Hughes, 40+ Years Cruise Industry Leader"
        ctaText="Plan Your Princess Cruise With Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 14: FINAL CALL TO ACTION (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default PrincessCruisesDressCode;
