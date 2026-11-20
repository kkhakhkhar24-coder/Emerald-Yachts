import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Fleet Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-genoa-italy-star-princess-sunrise-panoramic-view.webp';
import IntroDiscoveryImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-discovery-princess-haines-alaska-usa-ship-aerial-drone.webp';
import IntroSanctuaryImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-sun-princess-sanctuary-alaska.webp';
import SphereClassImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-genoa-italy-star-princess-sunrise-refined-elegance.webp';
import RoyalClassImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-anchorage-alaska-royal-princess-sailaway-whittier-drone.webp';
import GrandClassImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-crown-princess-haines-alaska-usa-ship-aerial-drone.webp';
import CoralClassImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-whittier-alaska-sapphire-princess-drone.webp';
import SkyPrincessNorwayImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-flam-norway-sky-princess-drone-panoramic-view.webp';
import AlesundSailawayCtaImg from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-alesund-norway-sky-princess-sailaway-drone.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesShips = () => {
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

  // ─── Section 3: Quick Answer Items for ThreeColumnGrid ───
  const quickAnswerItems = pageData.quickAnswer.priorities.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    image: undefined,
    placeholderLabel: item.title
  }));

  // ─── Section 4: 4 Fleet Classes for LuxuryZigZagShowcase ───
  const classImages = [
    SphereClassImg,
    RoyalClassImg,
    GrandClassImg,
    CoralClassImg
  ];

  const fleetClassItems = pageData.fleetClasses.classes.map((cls, idx) => ({
    title: cls.name,
    category: cls.category,
    description: cls.description,
    bestFor: cls.bestFor,
    image: classImages[idx],
    alt: cls.name
  }));

  // ─── Section 11: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Cruises ship classes, capacities, amenities, and fleet selection",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-genoa-italy-star-princess-sunrise-panoramic-view.webp",
        //   "caption": "Princess Cruises ship fleet guide"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-genoa-italy-star-princess-sunrise-panoramic-view.webp",
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
          "Princess Cruise Ships",
          "Luxury Cruises",
          "Cruise Ship Selection",
          "Sphere Class",
          "Royal Class",
          "Panama Canal Cruises"
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
            "name": "Which Princess Cruise Ship Should You Choose?",
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
        badge="Princess Cruises Fleet Guide"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Explore Princess Hub"
        secondaryCtaLink="/princess-cruises"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="FLEET"
        image1={IntroDiscoveryImg}
        image2={IntroSanctuaryImg}
      />

      {/* ─── SECTION 3: QUICK ANSWER BY TRAVEL PRIORITY ─── */}
      <ThreeColumnGrid
        title={pageData.quickAnswer.title}
        subtitle={pageData.quickAnswer.subtitle}
        items={quickAnswerItems}
      />

      {/* ─── SECTION 4: THE FOUR PRINCESS SHIP CLASSES ─── */}
      <LuxuryZigZagShowcase
        title={pageData.fleetClasses.title}
        subtitle={pageData.fleetClasses.subtitle}
        items={fleetClassItems}
      />

      {/* ─── SECTION 5: COMPLETE 17-SHIP COMPARISON TABLE ─── */}
      <ComparisonTable
        data={pageData.fleetComparison}
      />

      {/* ─── SECTION 6: BEST SHIPS FOR DIFFERENT TRAVELLERS ─── */}
      <EditorialFeatureShowcase
        title={pageData.travellerProfiles.title}
        subtitle={pageData.travellerProfiles.subtitle}
        image={SkyPrincessNorwayImg}
        features={pageData.travellerProfiles.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 7: SUN PRINCESS VS. STAR PRINCESS ─── */}
      <ProsConsCards
        title={pageData.sunVsStar.title}
        prosTitle={pageData.sunVsStar.prosTitle}
        consTitle={pageData.sunVsStar.consTitle}
        bestFor={pageData.sunVsStar.sunPoints}
        notBestFor={pageData.sunVsStar.starPoints}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 8: NEWER VS. OLDER PRINCESS SHIPS ─── */}
      <CostValueAnalysisCards
        title={pageData.newerVsOlder.title}
        subtitle={pageData.newerVsOlder.subtitle}
        includedTitle={pageData.newerVsOlder.includedTitle}
        extrasTitle={pageData.newerVsOlder.extrasTitle}
        included={pageData.newerVsOlder.included}
        extras={pageData.newerVsOlder.extras}
      />

      {/* ─── SECTION 9: 8-POINT SELECTION CHECKLIST ─── */}
      <StepByStepGuide
        title={pageData.checklist.title}
        subtitle={pageData.checklist.subtitle}
        steps={pageData.checklist.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 10: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="PRINCESS FLEET & CRUISE SPECIALIST"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Custom Global Cruise Itineraries",
          "Explored 121+ Countries Across All Seven Continents",
          "Specialist in Fleet Comparison & Stateroom Selection",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Personalized Itinerary Consultation for Every Client"
        ]}
      />

      {/* ─── SECTION 11: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 12: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Find Your Ideal Princess Cruise Ship?"
        description="Speak with Angela Hughes and our dedicated luxury cruise advisors to compare ships, explore deck plans, review seasonal promotions, and book your dream voyage."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={AlesundSailawayCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesShips;

