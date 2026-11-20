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
import VsComparisonGrid from '@/components/ui/VsComparisonGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesWiFi = () => {
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

  // Section 4: Classic vs Max VsComparisonGrid
  const classicVsMaxData = {
    title: pageData.classicVsMax.title,
    rhine: {
      title: pageData.classicVsMax.classic.title,
      subtitle: pageData.classicVsMax.classic.badge,
      features: [
        pageData.classicVsMax.classic.description,
        ...pageData.classicVsMax.classic.features
      ]
    },
    danube: {
      title: pageData.classicVsMax.max.title,
      subtitle: pageData.classicVsMax.max.badge,
      features: [
        pageData.classicVsMax.max.description,
        ...pageData.classicVsMax.max.features
      ]
    }
  };

  // Section 7: What Can You Do items for ThreeColumnGrid
  const whatYouCanDoItems = pageData.whatYouCanDo.cards.map((card) => ({
    title: card.title,
    category: "Online Activity",
    features: [card.description],
    image: undefined,
    placeholderLabel: card.title
  }));

  // Section 8-10: Expectations & Roaming for LuxuryZigZagShowcase
  const expectationsItems = pageData.expectationsAndRoaming.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    placeholderLabel: item.title
  }));

  const expectationsImages = [
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
        "description": "Angela Hughes is CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel professional with more than 40 years in the travel industry.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "MedallionNet Wi-Fi",
          "Cruise ship internet",
          "Princess Plus",
          "Princess Premier",
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
            "name": "Princess Cruises Wi-Fi",
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

      {/* ─── SECTION 2: INTRO NARRATIVE (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="CONNECTIVITY"
        image1={LoungeImage}
        image2={StateroomImage}
      />

      {/* ─── SECTION 3: WHAT IS MEDALLIONNET WI-FI? (CardGrid) ─── */}
      <CardGrid
        title={pageData.whatIsMedallionNet.title}
        subtitle={pageData.whatIsMedallionNet.intro}
        cards={pageData.whatIsMedallionNet.promotedActivities}
        columns={3}
      />

      {/* ─── SECTION 4: CLASSIC VS MAX (VsComparisonGrid) ─── */}
      <VsComparisonGrid data={classicVsMaxData} />

      {/* ─── SECTION 5: STANDALONE WI-FI PRICES (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: pageData.pricing.title,
          headers: pageData.pricing.table.headers,
          rows: pageData.pricing.table.rows
        }}
      />

      {/* ─── SECTION 6: WI-FI INCLUDED WITH PLUS & PREMIER (ComparisonTable & PricingTiersCards) ─── */}
      <ComparisonTable
        data={{
          title: pageData.bundledWithPlusPremier.title,
          headers: pageData.bundledWithPlusPremier.table.headers,
          rows: pageData.bundledWithPlusPremier.table.rows
        }}
      />

      <PricingTiersCards
        title={pageData.bundledWithPlusPremier.pricingTiers.title}
        subtitle={pageData.bundledWithPlusPremier.pricingTiers.subtitle}
        items={pageData.bundledWithPlusPremier.pricingTiers.tiers}
      />

      {/* ─── SECTION 7: HOW MANY DEVICES CAN YOU CONNECT? (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.deviceAllowances.title}
        subtitle={pageData.deviceAllowances.subtitle}
        cards={pageData.deviceAllowances.cards}
      />

      {/* ─── SECTION 8: HOW TO CONNECT (StepByStepGuide) ─── */}
      <StepByStepGuide
        title={pageData.howToConnect.title}
        subtitle={pageData.howToConnect.subtitle}
        steps={pageData.howToConnect.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 9: WHAT CAN YOU DO WITH PRINCESS WI-FI? (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatYouCanDo.title}
        subtitle={pageData.whatYouCanDo.subtitle}
        items={whatYouCanDoItems}
      />

      {/* ─── SECTION 10: EXPECTATIONS & CELLULAR ROAMING (LuxuryZigZagShowcase) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.expectationsAndRoaming.title}
        subtitle={pageData.expectationsAndRoaming.subtitle}
        items={expectationsItems}
        images={expectationsImages}
      />

      {/* ─── SECTION 11: IS PRINCESS WI-FI WORTH THE COST? (ProsConsCards) ─── */}
      <ProsConsCards
        title={pageData.valueEvaluation.title}
        prosTitle="When Standalone Wi-Fi Is Worth It"
        consTitle="When Princess Plus or Premier Is Better"
        bestFor={pageData.valueEvaluation.whenStandaloneWorthIt}
        notBestFor={pageData.valueEvaluation.whenPlusPremierBetter}
        type="compare"
      />

      {/* ─── SECTION 12: TIPS FOR GETTING THE MOST (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.tips.title}
        subtitle={pageData.tips.subtitle}
        cards={pageData.tips.cards}
      />

      {/* ─── SECTION 13: FAQS (FAQAccordion) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 14: EXPERT CREDENTIALS & CALL TO ACTION ─── */}
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

export default PrincessCruisesWiFi;

