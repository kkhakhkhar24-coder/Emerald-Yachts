import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Ship Classes Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-genoa-italy-star-princess-sunrise-golden-hour-glow.webp';
import IntroDiscoveryImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp';
import IntroSanctuaryImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-sun-princess-sanctuary-pool.webp';
import SphereImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-star-princess-skagway-alaska-usa-ship-aerial-drone.webp';
import RoyalImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-flam-norway-sky-princess-drone.webp';
import GrandImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-amalfi-italy-coastline-overview.webp';
import CoralImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-olden-norway-sky-princess-sailaway-drone-scenic-perspective.webp';
import StateroomPenthouseImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-discovery-princess-stateroom-penthouse-suite-scenic-perspective.webp';
import EveningSailawayCtaImg from '@/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-olden-norway-sky-princess-sailaway-drone-evening-ambiance.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesShipClasses = () => {
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

  // ─── Section 4: Four Classes for LuxuryZigZagShowcase ───
  const classImages = [SphereImg, RoyalImg, GrandImg, CoralImg];
  const fleetClassItems = pageData.detailedClasses.classes.map((cls, idx) => ({
    title: cls.name,
    category: cls.category,
    description: cls.description,
    bestFor: cls.bestFor,
    image: classImages[idx],
    alt: cls.name
  }));

  // ─── Section 6: Which Class Is Best For You (ThreeColumnGrid) ───
  const suitabilityItems = pageData.classSuitability.categories.map((cat) => ({
    title: cat.title,
    category: cat.badge,
    description: cat.description,
    image: undefined,
    placeholderLabel: cat.title
  }));

  // ─── Section 9: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Cruises ship classes, capacities, amenities, and fleet differences",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-genoa-italy-star-princess-sunrise-golden-hour-glow.webp",
        //   "caption": "Princess Cruises ship classes comparison"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesShipClasses/princess-cruises-genoa-italy-star-princess-sunrise-golden-hour-glow.webp",
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
          "Princess Cruises Ship Classes",
          "Luxury Cruises",
          "Cruise Ship Selection",
          "Sphere Class",
          "Royal Class",
          "Grand Class",
          "Coral Class"
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
            "name": "Princess Cruises Ship Classes",
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
        badge="Princess Fleet Architecture"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Explore Princess Ships"
        secondaryCtaLink="/princess-cruises/ships"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="CLASSES"
        image1={IntroDiscoveryImg}
        image2={IntroSanctuaryImg}
      />

      {/* ─── SECTION 3: SHIP CLASSES AT A GLANCE TABLE ─── */}
      <ComparisonTable
        data={pageData.classesAtAGlance}
      />

      {/* ─── SECTION 4: IN-DEPTH 4 SHIP CLASSES SHOWCASE ─── */}
      <LuxuryZigZagShowcase
        title={pageData.detailedClasses.title}
        subtitle={pageData.detailedClasses.subtitle}
        items={fleetClassItems}
      />

      {/* ─── SECTION 5: HEAD-TO-HEAD COMPARISON TABLE ─── */}
      <ComparisonTable
        data={pageData.headToHeadComparison}
      />

      {/* ─── SECTION 6: WHICH CLASS IS BEST FOR YOU ─── */}
      <ThreeColumnGrid
        title={pageData.classSuitability.title}
        subtitle={pageData.classSuitability.subtitle}
        items={suitabilityItems}
      />

      {/* ─── SECTION 7: HOW SHIP CLASS AFFECTS YOUR EXPERIENCE ─── */}
      <EditorialFeatureShowcase
        title={pageData.featuresImpact.title}
        subtitle={pageData.featuresImpact.subtitle}
        image={StateroomPenthouseImg}
        features={pageData.featuresImpact.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 8: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="SHIP CLASS & FLEET CONSULTANT"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Personalized Cruise Itineraries",
          "Explored 121+ Countries Across All Seven Continents",
          "Specialist in Ship Architecture, Staterooms & Suite Selection",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Independent, Unbiased Guidance Across All 17 Princess Ships"
        ]}
      />

      {/* ─── SECTION 9: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 10: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Find the Perfect Princess Ship Class?"
        description="Speak with Angela Hughes and the Trips & Ships luxury cruise specialists to compare ship amenities, explore stateroom categories, and book your dream vacation."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={EveningSailawayCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesShipClasses;

