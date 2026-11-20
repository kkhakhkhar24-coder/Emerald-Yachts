import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Plus Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-genoa-italy-sun-princess-sunrise.webp';
import IntroBarImg from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-bahamas-celebration-key-swings-bar.webp';
import IntroYogaImg from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-sun-princess-sanctuary-yoga.webp';
import InclusionsShipImg from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-flam-norway-sky-princess-sailaway-drone-panoramic-view.webp';
import NorwaySailawayCtaImg from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-olden-norway-sky-princess-sailaway-drone-panoramic-view.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesPlus = () => {
  // ─── Section 2: Narrative Intro mapping ───
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

  // ─── Section 7: 7-Night Cost Math items for CostComparisonMatrix ───
  const sevenNightMathItems = pageData.sevenNightMath.items.map((item) => ({
    category: item.title,
    cost: item.cost,
    description: item.description,
    priority: item.priority
  }));

  // ─── Section 11: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Plus pricing, beverage allowances, Wi-Fi connectivity, and gratuities",
    faqs: pageData.faqs
  };

  // ─── Schema.org JSON-LD (Strictly without trailing slashes, commented out images) ───
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-genoa-italy-sun-princess-sunrise.webp",
        //   "caption": "Princess Cruises guests enjoying a beverage onboard"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-genoa-italy-sun-princess-sunrise.webp",
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
        "description": "Angela Hughes is a luxury travel expert with more than 40 years of travel-industry experience. She is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University, and has visited more than 121 countries.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Princess Plus package",
          "Princess Premier package",
          "Cruise beverage packages",
          "Cruise Wi-Fi and onboard services",
          "Cruise dining and gratuities",
          "Luxury cruise planning"
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
            "name": "Is Princess Plus Worth It?",
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
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.metaTitle} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.metaTitle} />
        <meta name="twitter:description" content={pageData.seo.metaDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO ─── */}
      <ComparisonHero
        badge="Princess Plus Value Guide"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Compare Plus vs Premier"
        secondaryCtaLink="/princess-cruises/plus-vs-premier"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="PLUS"
        image1={IntroBarImg}
        image2={IntroYogaImg}
      />

      {/* ─── SECTION 3: COST BY CRUISE LENGTH ─── */}
      <ComparisonTable
        data={pageData.costOverview}
      />

      {/* ─── SECTION 4: WHAT PRINCESS PLUS INCLUDES ─── */}
      <EditorialFeatureShowcase
        title={pageData.inclusions.title}
        subtitle={pageData.inclusions.subtitle}
        image={InclusionsShipImg}
        features={pageData.inclusions.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: INCLUDED VS EXTRA COSTS ─── */}
      <CostValueAnalysisCards
        title={pageData.inclusionsVsExtras.title}
        subtitle={pageData.inclusionsVsExtras.subtitle}
        includedTitle={pageData.inclusionsVsExtras.includedTitle}
        extrasTitle={pageData.inclusionsVsExtras.extrasTitle}
        included={pageData.inclusionsVsExtras.included}
        extras={pageData.inclusionsVsExtras.extras}
      />

      {/* ─── SECTION 6: FARE TIER COMPARISON MATRIX ─── */}
      <ComparisonTable
        data={pageData.packageComparison}
      />

      {/* ─── SECTION 7: 7-NIGHT COST-BENEFIT CALCULATION ─── */}
      <CostComparisonMatrix
        title={pageData.sevenNightMath.title}
        subtitle={pageData.sevenNightMath.subtitle}
        items={sevenNightMathItems}
      />

      {/* ─── SECTION 8: WHO SHOULD BUY VS WHO MAY NOT NEED IT ─── */}
      <ProsConsCards
        title={pageData.decisionGuide.title}
        prosTitle={pageData.decisionGuide.prosTitle}
        consTitle={pageData.decisionGuide.consTitle}
        bestFor={pageData.decisionGuide.shouldBuy}
        notBestFor={pageData.decisionGuide.mayNotNeed}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 9: BOOKING RULES & DEADLINES ─── */}
      <StepByStepGuide
        title={pageData.bookingRules.title}
        subtitle={pageData.bookingRules.subtitle}
        steps={pageData.bookingRules.steps}
        layout="grid"
        columns={2}
      />

      {/* ─── SECTION 10: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="PRINCESS PLUS PACKAGE SPECIALIST"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 4 Decades Designing Custom Cruise Vacations",
          "Visited 121+ Countries Across All Seven Continents",
          "Specialist in Cruise Package Value & Math Optimization",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Dedicated One-on-One Booking Support"
        ]}
      />

      {/* ─── SECTION 11: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 12: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Book Your Princess Cruise with Princess Plus?"
        description="Let Angela Hughes and the Trips & Ships luxury travel team compare available promotional fares, verify real-time package rates, and secure your ideal stateroom."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={NorwaySailawayCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesPlus;

