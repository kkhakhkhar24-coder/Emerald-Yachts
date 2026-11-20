import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp';
import LoungeImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-bar.webp';
import StateroomImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import CardGrid from '@/components/ui/CardGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesMedallionApp = () => {
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

  // Section 7: Onboard Features for LuxuryZigZagShowcase (Omit bestFor to prevent "Ideal For" label)
  const onboardItems = pageData.onboardFeatures.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description
  }));

  const onboardImages = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ];

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
          "Luxury cruising",
          "Cruise planning",
          "MedallionClass",
          "Cruise technology",
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
            "name": "Medallion and App Guide",
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
        watermarkText="MEDALLION"
        image1={LoungeImage}
        image2={StateroomImage}
      />

      {/* ─── SECTION 3: WHAT IS THE MEDALLION? (CardGrid Component) ─── */}
      <CardGrid
        title={pageData.whatIsMedallion.title}
        subtitle={pageData.whatIsMedallion.intro}
        cards={pageData.whatIsMedallion.capabilities}
        columns={3}
      />

      {/* ─── SECTION 4: WHAT IS THE APP? (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.whatIsApp.title}
        subtitle={pageData.whatIsApp.intro}
        image={undefined}
        features={pageData.whatIsApp.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: HOW TO SET UP THE APP (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.setupSteps.title}
        subtitle={pageData.setupSteps.subtitle}
        steps={pageData.setupSteps.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 6: WHAT CAN YOU DO BEFORE EMBARKATION (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.preCruiseCapabilities.title}
        subtitle={pageData.preCruiseCapabilities.subtitle}
        cards={pageData.preCruiseCapabilities.cards}
      />

      {/* ─── SECTION 7: HOW TO USE ONBOARD (LuxuryZigZagShowcase Component) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.onboardFeatures.title}
        subtitle={pageData.onboardFeatures.subtitle}
        items={onboardItems}
        images={onboardImages}
      />

      {/* ─── SECTION 8: DOES THE APP REQUIRE WI-FI? (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.wifiVsApp.title}
        prosTitle={pageData.wifiVsApp.prosTitle}
        consTitle={pageData.wifiVsApp.consTitle}
        bestFor={pageData.wifiVsApp.bestFor}
        notBestFor={pageData.wifiVsApp.notBestFor}
        bottomNote={pageData.wifiVsApp.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 9: TROUBLESHOOTING (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.troubleshooting.title}
        subtitle={pageData.troubleshooting.subtitle}
        cards={pageData.troubleshooting.cards}
      />

      {/* ─── SECTION 10: WHAT TO BRING ON EMBARKATION DAY (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.embarkationChecklist.title}
        subtitle={pageData.embarkationChecklist.subtitle}
        cards={pageData.embarkationChecklist.cards}
      />

      {/* ─── SECTION 11: FAQS (FAQAccordion Component) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 12: EXPERT CREDENTIALS (ExpertCredentials Component) ─── */}
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

      {/* ─── SECTION 13: FINAL CTA (CenterCTA Component) ─── */}
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

export default PrincessCruisesMedallionApp;

