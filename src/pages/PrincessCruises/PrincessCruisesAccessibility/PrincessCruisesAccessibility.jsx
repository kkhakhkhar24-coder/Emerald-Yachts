import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import pageData from './data.json';

const PrincessCruisesAccessibility = () => {
  // Narrative Intro mapping for PremiumIntro
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

  // Category items mapping for ThreeColumnGrid (Native luxury placeholders)
  const categoryItems = pageData.categoriesThreeCol.items.map((item) => ({
    ...item,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Bathroom detailed items for DetailedInclusionsList
  const bathroomItems = pageData.bathroomDetailed.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Sensory items mapping for ThreeColumnGrid
  const sensoryItems = pageData.sensoryAccommodations.items.map((item) => ({
    ...item,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Cost analysis mapping for CostValueAnalysisCards (Guaranteeing title and description)
  const shoreExcursionsIncluded = pageData.shoreExcursionsCostValue.included.map((item) =>
    typeof item === 'string'
      ? { title: item, description: '' }
      : { title: item.title, description: item.description || '' }
  );

  const shoreExcursionsExtras = pageData.shoreExcursionsCostValue.extras.map((item) =>
    typeof item === 'string'
      ? { title: item, description: '' }
      : { title: item.title, description: item.description || '' }
  );

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
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Cruise Specialist"
        },
        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University, and an acclaimed cruise expert specializing in accessible stateroom selection, cruise ship logistics, and customized worldwide travel planning.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Accessible cruising",
          "Princess Cruises",
          "Wheelchair accessible staterooms",
          "Mobility scooter cruise guidelines",
          "Cruise ship accessibility",
          "Accessible shore excursions",
          "Luxury cruise travel advisory"
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
            "name": "Princess Cruises Accessible Staterooms",
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
      {/* ─── SEO / HELMET ─── */}
      <Helmet>
        <title>{pageData.seo.metaTitle}</title>
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

      {/* ─── SECTION 1: COMPARISON HERO (Byline, Author, No Updated Date Stamp) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={undefined}
        byline={true}
        authorName="Angela Hughes"
        authorRole="Luxury Cruise Expert"
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText={pageData.hero.watermarkText}
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: DOES PRINCESS OFFER ACCESSIBLE STATEROOMS? (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.overviewProsCons.title}
        prosTitle={pageData.overviewProsCons.prosTitle}
        consTitle={pageData.overviewProsCons.consTitle}
        bestFor={pageData.overviewProsCons.bestFor}
        notBestFor={pageData.overviewProsCons.notBestFor}
        bottomNote={pageData.overviewProsCons.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 4: THREE ACCESSIBLE STATEROOM CATEGORIES (ThreeColumnGrid Component) ─── */}
      <div id="categories" className="scroll-mt-24" />
      <ThreeColumnGrid
        title={pageData.categoriesThreeCol.title}
        subtitle={pageData.categoriesThreeCol.subtitle}
        items={categoryItems}
      />

      {/* ─── SECTION 5: ACCESSIBLE BATHROOM FEATURES (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.bathroomDetailed.title}
        intro={pageData.bathroomDetailed.intro}
        items={bathroomItems}
      />

      {/* ─── SECTION 6: BATHROOM BOOKING CHECKLIST TABLE (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.bathroomChecklistTable}
      />

      {/* ─── SECTION 7: WHEELCHAIR & MOBILITY SCOOTER REQUIREMENTS (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.mobilityRequirements}
      />

      {/* ─── SECTION 8: RENTING MOBILITY EQUIPMENT (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.equipmentRentalEditorial.title}
        subtitle={pageData.equipmentRentalEditorial.subtitle}
        image={undefined}
        features={pageData.equipmentRentalEditorial.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 9: ACCESSIBILITY AROUND THE SHIP (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.publicShipAccessibilityBento.title}
        subtitle={pageData.publicShipAccessibilityBento.subtitle}
        bentoItems={pageData.publicShipAccessibilityBento.items}
      />

      {/* ─── SECTION 10: HEARING & VISUAL ACCESSIBILITY (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.sensoryAccommodations.title}
        subtitle={pageData.sensoryAccommodations.subtitle}
        items={sensoryItems}
      />

      {/* ─── SECTION 11: DINING ACCESSIBILITY & DIETARY REQUESTS (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.diningAndDietary.title}
        prosTitle={pageData.diningAndDietary.prosTitle}
        consTitle={pageData.diningAndDietary.consTitle}
        bestFor={pageData.diningAndDietary.bestFor}
        notBestFor={pageData.diningAndDietary.notBestFor}
        bottomNote={pageData.diningAndDietary.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 12: SHORE EXCURSIONS & ACCESSIBILITY ASHORE (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.shoreExcursionsCostValue.title}
        subtitle={pageData.shoreExcursionsCostValue.subtitle}
        includedTitle={pageData.shoreExcursionsCostValue.includedTitle}
        extrasTitle={pageData.shoreExcursionsCostValue.extrasTitle}
        included={shoreExcursionsIncluded}
        extras={shoreExcursionsExtras}
      />

      {/* ─── SECTION 13: MOBILITY QUESTIONNAIRE (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.mobilityQuestionnaire.title}
        subtitle={pageData.mobilityQuestionnaire.subtitle}
        image={undefined}
        features={pageData.mobilityQuestionnaire.features}
        bgClass="bg-stone-50/50"
      />

      {/* ─── SECTION 14: HOW TO BOOK AN ACCESSIBLE STATEROOM (StepByStepGuide Component - grid layout) ─── */}
      <StepByStepGuide
        title={pageData.bookingStepByStep.title}
        subtitle={pageData.bookingStepByStep.subtitle}
        steps={pageData.bookingStepByStep.steps}
        layout="grid"
      />

      {/* ─── SECTION 15: ACCESSIBLE STATEROOM BOOKING CHECKLIST (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.checklistTable}
      />

      {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Essential answers for planning an accessible voyage with mobility, hearing, or visual accommodations on Princess.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 17: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        image={AboutImage}
        name="Angela Hughes"
        role="CEO & Luxury Travel Advisor"
        bio="With over 30 years of hands-on luxury cruise experience and specialized expertise in accessible travel logistics, Angela Hughes provides dedicated guidance to ensure your stateroom, transfers, dining, and shore excursions meet your exact mobility and comfort requirements."
        credentials={[
          "30+ Years Luxury & Accessible Cruise Planning",
          "Founder, Luxury Travel University",
          "Special Needs & Accessible Cruise Specialist",
          "Certified Master Cruise Counselor (MCC)"
        ]}
        ctaText="Consult with Angela Hughes"
        ctaLink="/contact"
      />

      {/* ─── SECTION 18: FINAL CALL TO ACTION (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default PrincessCruisesAccessibility;
