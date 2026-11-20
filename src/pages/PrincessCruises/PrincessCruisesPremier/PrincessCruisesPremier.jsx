import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Premier Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-genoa-italy-star-princess-sunrise-luxurious-setting.webp';
import IntroDiningImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-sun-princess-sanctuary-dining-panoramic-view.webp';
import IntroMusicianImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-sun-princess-sanctuary-musician.webp';
import SuitePenthouseImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-discovery-princess-stateroom-penthouse-suite-panoramic-view.webp';
import FlightImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-denali-national-park-alaska-denali-air-flight.webp';
import VillaImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-bahamas-celebration-key-pearl-cove-super-villa-panoramic-view.webp';
import MessinaSailInCtaImg from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-messina-italy-star-princess-sail-in-sunrise-drone.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesPremier = () => {
  // ─── Section 2: Narrative Intro mapping ───
  const introSections = [
    {
      heading: pageData.introSection.heading,
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3,
        pageData.introSection.p4
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

  // ─── Section 8: LuxuryZigZagShowcase for Signature Premier Perks ───
  const premierPerksZigZag = [
    {
      title: "Shore Excursion Credit & Global Exploration",
      category: "PORT ADVENTURE PERK",
      description: "Princess Premier delivers direct credits toward eligible Princess-booked shore excursions: $100 per guest (6–9 days), $200 (10–20 days), or $300 (21+ days). From glacier flightseeing in Alaska to private wine tastings in Tuscany, your port adventures are substantially subsidized.",
      bestFor: "Travelers who want organized, professionally guided cultural tours and excursions in every destination.",
      image: FlightImg,
      alt: "Princess Cruises Alaska Glacier Flightseeing Shore Excursion"
    },
    {
      title: "Reserved Theater Seating, Photo Package & On-Demand Delivery",
      category: "EXCLUSIVE VIP PRIVILEGES",
      description: "Enjoy access to dedicated prime reserved seating in the Princess Theater for Broadway-style musical productions without waiting in lines. Plus, receive unlimited digital downloads of professional portraits and 3 prints, alongside waived OceanNow and room-service delivery fees.",
      bestFor: "Guests who cherish vacation memories, photography, and frictionless access to evening entertainment.",
      image: VillaImg,
      alt: "Princess Cruises VIP Poolside Cabanas and Luxury Relaxation"
    }
  ];

  // ─── Section 12: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Premier pricing, specialty dining allowances, beverage caps, and excursion credits",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-genoa-italy-star-princess-sunrise-luxurious-setting.webp",
        //   "caption": "Princess Premier luxury cruise experience"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-genoa-italy-star-princess-sunrise-luxurious-setting.webp",
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
          "Princess Premier package",
          "Princess Plus package",
          "Luxury cruise dining and specialty restaurants",
          "Cruise beverage packages",
          "Cruise shore excursions",
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
            "name": "Is Princess Premier Worth It?",
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
        badge="Princess Premier VIP Guide"
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
        watermarkText="PREMIER"
        image1={IntroDiningImg}
        image2={IntroMusicianImg}
      />

      {/* ─── SECTION 3: COST BY CRUISE LENGTH ─── */}
      <ComparisonTable
        data={pageData.costOverview}
      />

      {/* ─── SECTION 4: WHAT PRINCESS PREMIER INCLUDES ─── */}
      <EditorialFeatureShowcase
        title={pageData.inclusions.title}
        subtitle={pageData.inclusions.subtitle}
        image={SuitePenthouseImg}
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

      {/* ─── SECTION 6: PREMIER VS PLUS SIDE-BY-SIDE MATRIX ─── */}
      <ComparisonTable
        data={pageData.packageComparison}
      />

      {/* ─── SECTION 7: 7-NIGHT COST-BENEFIT CALCULATION ─── */}
      <CostComparisonMatrix
        title={pageData.sevenNightMath.title}
        subtitle={pageData.sevenNightMath.subtitle}
        items={sevenNightMathItems}
      />

      {/* ─── SECTION 8: SIGNATURE PREMIER LUXURY PERKS ─── */}
      <LuxuryZigZagShowcase
        title="Signature Princess Premier Privileges"
        subtitle="Exclusive VIP benefits that elevate your vacation far beyond standard cruising"
        items={premierPerksZigZag}
      />

      {/* ─── SECTION 9: WHO SHOULD BUY VS WHO MAY NOT NEED IT ─── */}
      <ProsConsCards
        title={pageData.decisionGuide.title}
        prosTitle={pageData.decisionGuide.prosTitle}
        consTitle={pageData.decisionGuide.consTitle}
        bestFor={pageData.decisionGuide.shouldBuy}
        notBestFor={pageData.decisionGuide.mayNotNeed}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 10: BOOKING RULES & DEADLINES ─── */}
      <StepByStepGuide
        title={pageData.bookingRules.title}
        subtitle={pageData.bookingRules.subtitle}
        steps={pageData.bookingRules.steps}
        layout="grid"
        columns={2}
      />

      {/* ─── SECTION 11: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="PRINCESS PREMIER PACKAGE SPECIALIST"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Luxury Cruise & Expedition Journeys",
          "Visited 121+ Countries Across All Seven Continents",
          "Specialist in Fine Dining Optimization & Suite Selection",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Dedicated One-on-One Concierge Travel Planning"
        ]}
      />

      {/* ─── SECTION 12: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 13: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Experience Princess Premier All-Inclusive Luxury?"
        description="Connect with Angela Hughes and our dedicated luxury cruise specialists to compare promotional fares, secure prime dining reservations, and book your ideal Princess stateroom."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={MessinaSailInCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesPremier;

