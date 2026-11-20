import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Plus vs. Princess Premier Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-star-princess-skagway-alaska-usa-ship-aerial-drone.webp';
import IntroPoolImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-sun-princess-sanctuary-pool.webp';
import IntroMusicianImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-sun-princess-sanctuary-musician.webp';
import PlusCabanaImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-bahamas-celebration-key-starfish-overwater-cabana.webp';
import PremierDiningImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-sun-princess-sanctuary-dining-panoramic-view.webp';
import BarImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-sun-princess-sanctuary-bar.webp';
import DiningImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-sun-princess-sanctuary-dining.webp';
import StateroomInteriorImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import ShipCrownImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-crown-princess-haines-alaska-usa-ship-aerial-drone.webp';
import SuiteOwnerImg from '@/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-discovery-princess-stateroom-owners-suite-panoramic-view.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesPlusVsPremier = () => {
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

  // ─── Section 5: LuxuryZigZagShowcase for Plus vs Premier Packages ───
  const packageZigZagItems = [
    {
      title: pageData.packageBreakdowns.plus.title,
      category: `STANDARD FLEET: ${pageData.packageBreakdowns.plus.cost}`,
      description: `${pageData.packageBreakdowns.plus.description} Includes Plus Beverage Package up to $15/drink, MedallionNet Max Wi-Fi (1 device), prepaid crew gratuities, 4 qualifying casual dining meals, waived OceanNow delivery fee, and complimentary room-service delivery. 7-night investment: ${pageData.packageBreakdowns.plus.sevenNightCost}.`,
      bestFor: "Guests seeking budget predictability with daily cocktails, specialty coffee, reliable single-device Wi-Fi, and prepaid gratuities.",
      image: PlusCabanaImg,
      alt: "Princess Plus Beverage and Casual Dining Package"
    },
    {
      title: pageData.packageBreakdowns.premier.title,
      category: `STANDARD FLEET: ${pageData.packageBreakdowns.premier.cost}`,
      description: `${pageData.packageBreakdowns.premier.description} Includes Premier Beverage Package up to $20/drink with no daily limit, MedallionNet Max Wi-Fi (up to 4 devices), prepaid crew gratuities, unlimited qualifying specialty and casual dining, shore excursion credits ($100–$300), unlimited digital photo package, and reserved theater seating. 7-night investment: ${pageData.packageBreakdowns.premier.sevenNightCost}.`,
      bestFor: "Culinary enthusiasts planning multiple specialty dinners, multi-device users, photo collectors, and guests seeking VIP theater seating.",
      image: PremierDiningImg,
      alt: "Princess Premier Package Specialty Dining and VIP Perks"
    }
  ];

  // ─── Section 6: ThreeColumnGrid for Head-to-Head Comparisons ───
  const headToHeadImages = [BarImg, DiningImg, StateroomInteriorImg];
  const headToHeadItems = pageData.headToHead.categories.map((cat, idx) => ({
    title: cat.title,
    category: cat.category,
    description: `${cat.description} Guidance: ${cat.bestFor}`,
    image: headToHeadImages[idx],
    placeholderLabel: cat.title
  }));

  // ─── Section 10: BentoGlassmorphismGrid for Decision Guide ───
  const bentoDecisionItems = [
    {
      title: "Princess Premier: The All-Inclusive Choice",
      stat: "$105/day",
      category: "FINE DINING & VIP PRIVILEGES",
      description: "Unlimited specialty dining at Crown Grill & Sabatini's, top-tier drinks up to $20, 4-device Wi-Fi, $100–$300 excursion credits, photo downloads, and reserved theater seating.",
      image: undefined
    },
    {
      title: "Princess Plus: The Popular Sweet Spot",
      stat: "$70/day",
      category: "BALANCED VALUE & CONVENIENCE",
      description: "15 eligible drinks daily up to $15, 1-device MedallionNet Max Wi-Fi, 4 casual dining meals, prepaid crew appreciation, and waived OceanNow delivery fees.",
      image: undefined
    },
    {
      title: "Standard Fare: A La Carte Freedom",
      stat: "Base Ticket",
      category: "TOTAL SPENDING CONTROL",
      description: "Lowest initial fare for cruisers who drink moderately, prefer disconnecting without Wi-Fi, and enjoy complimentary main dining rooms and buffet venues.",
      image: undefined
    }
  ];

  // ─── Section 12: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Plus vs. Princess Premier pricing, dining allowances, beverage limits, and upgrades",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-star-princess-skagway-alaska-usa-ship-aerial-drone.webp",
        //   "caption": "Princess Cruises onboard experience with dining and ocean views"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesPlusVsPremier/princess-cruises-star-princess-skagway-alaska-usa-ship-aerial-drone.webp",
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
          "Luxury cruise package comparisons",
          "Cruise dining and beverage packages",
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
            "name": "Princess Plus vs. Princess Premier: Which Package Should You Choose?",
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
        badge="Princess Cruises Package Guide"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Explore What's Included"
        secondaryCtaLink="/princess-cruises/whats-included"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="PACKAGES"
        image1={IntroPoolImg}
        image2={IntroMusicianImg}
      />

      {/* ─── SECTION 3: QUICK COMPARISON TABLE ─── */}
      <ComparisonTable
        data={pageData.quickComparison}
      />

      {/* ─── SECTION 4: PACKAGE PRICING & COST DIFFERENCE ─── */}
      <CostComparisonMatrix
        title={pageData.packagePricing.title}
        subtitle={pageData.packagePricing.subtitle}
        items={pageData.packagePricing.tiers}
      />

      {/* ─── SECTION 5: WHAT EACH PACKAGE INCLUDES ─── */}
      <LuxuryZigZagShowcase
        title={pageData.packageBreakdowns.title}
        subtitle={pageData.packageBreakdowns.subtitle}
        items={packageZigZagItems}
      />

      {/* ─── SECTION 6: HEAD-TO-HEAD CATEGORY COMPARISONS ─── */}
      <ThreeColumnGrid
        title={pageData.headToHead.title}
        subtitle={pageData.headToHead.subtitle}
        items={headToHeadItems}
      />

      {/* ─── SECTION 7: IS PREMIER WORTH THE EXTRA $35/DAY? ─── */}
      <ProsConsCards
        title={pageData.valueAnalysis.title}
        prosTitle={pageData.valueAnalysis.prosTitle}
        consTitle={pageData.valueAnalysis.consTitle}
        bestFor={pageData.valueAnalysis.plusPoints}
        notBestFor={pageData.valueAnalysis.premierPoints}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 8: HOW & WHEN TO PURCHASE PACKAGES ─── */}
      <StepByStepGuide
        title={pageData.purchaseSteps.title}
        subtitle={pageData.purchaseSteps.subtitle}
        steps={pageData.purchaseSteps.steps}
        layout="grid"
        columns={2}
      />

      {/* ─── SECTION 9: WHAT IF YOU DO NOT BUY EITHER PACKAGE? ─── */}
      <EditorialFeatureShowcase
        title={pageData.standardFareAlternative.title}
        subtitle={pageData.standardFareAlternative.subtitle}
        image={ShipCrownImg}
        features={pageData.standardFareAlternative.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 10: WHICH PACKAGE SHOULD YOU CHOOSE? ─── */}
      <BentoGlassmorphismGrid
        title={pageData.decisionGuide.title}
        subtitle={pageData.decisionGuide.subtitle}
        bentoItems={bentoDecisionItems}
      />

      {/* ─── SECTION 11: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="PRINCESS PACKAGE & CRUISE SPECIALIST"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Personalized Luxury Cruise Itineraries",
          "Explored 121+ Countries Across All Seven Continents",
          "Specialist in Princess Fare Optimization & Stateroom Selection",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Personalized Package Cost-Benefit Math for Every Client"
        ]}
      />

      {/* ─── SECTION 12: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 13: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Select Your Ideal Princess Package?"
        description="Speak with Angela Hughes and our dedicated cruise specialists to compare Princess Plus and Premier for your exact sailing, evaluate promotional fares, and book with complete confidence."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={SuiteOwnerImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesPlusVsPremier;

