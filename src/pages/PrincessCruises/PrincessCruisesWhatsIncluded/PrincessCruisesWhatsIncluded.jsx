import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Princess Cruises Whats Included Assets (Dedicated folder & 100% uniquely matched images)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-amalfi-italy-sunrise-sun-princess.webp';
import IntroStateroomImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import IntroBarImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-bar.webp';
import DiscoveryShipImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp';
import PlusPackageImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-bahamas-celebration-key-swings-bar.webp';
import PremierPackageImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-stateroom-owners-suite.webp';
import WindowSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-stateroom-window-suite.webp';
import PremiumSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-stateroom-premium-suite.webp';
import PenthouseSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-stateroom-penthouse-suite.webp';
import SanctuaryDiningCtaImg from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesWhatsIncluded = () => {
  // ─── Section 2: Narrative Intro mapping for PremiumIntro ───
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

  // ─── Section 3: Standard Inclusions for EditorialFeatureShowcase ───
  const standardInclusionsList = pageData.standardInclusions.features.map((feature) => ({
    title: feature.title,
    description: feature.description
  }));

  // ─── Section 4: CostValueAnalysisCards mapping ───
  const includedItems = pageData.standardInclusions.features.map((feat) => ({
    title: feat.title,
    description: feat.description
  }));

  const extraExpenseItems = pageData.extraExpenses.items.map((item) => ({
    title: item.category,
    description: item.description
  }));

  // ─── Section 6: LuxuryZigZagShowcase for Plus vs Premier Packages ───
  const packageZigZagItems = [
    {
      title: pageData.packageBreakdowns.plus.title,
      category: `PRE-CRUISE USD: ${pageData.packageBreakdowns.plus.cost}`,
      description: `${pageData.packageBreakdowns.plus.description} Includes Plus Beverage Package up to $15/drink, MedallionNet Max Wi-Fi (1 device), prepaid crew gratuities, 4 qualifying casual dining meals, and waived OceanNow delivery fees. 7-night investment: ${pageData.packageBreakdowns.plus.sevenNightCost}.`,
      bestFor: "Cruisers wanting daily cocktails, specialty coffee, reliable single-device Wi-Fi, and prepaid gratuities without worrying about a final onboard bill.",
      image: PlusPackageImg,
      alt: "Princess Plus Beverage and Casual Dining Package"
    },
    {
      title: pageData.packageBreakdowns.premier.title,
      category: `PRE-CRUISE USD: ${pageData.packageBreakdowns.premier.cost}`,
      description: `${pageData.packageBreakdowns.premier.description} Includes Premier Beverage Package up to $20/drink with no daily limit, MedallionNet Max Wi-Fi (up to 4 devices), prepaid crew gratuities, unlimited qualifying specialty and casual dining, shore excursion credits ($100–$300), unlimited digital photo package, and reserved theater seating. 7-night investment: ${pageData.packageBreakdowns.premier.sevenNightCost}.`,
      bestFor: "Culinary enthusiasts planning multiple specialty dinners, multi-device users, portrait photo collectors, and guests desiring reserved theater seats.",
      image: PremierPackageImg,
      alt: "Princess Premier Package Specialty Dining and VIP Perks"
    }
  ];

  // ─── Section 7: ThreeColumnGrid for Fare Decision ───
  const decisionImages = [
    WindowSuiteImg,
    PremiumSuiteImg,
    PenthouseSuiteImg
  ];

  const fareDecisionItems = pageData.fareDecision.options.map((option, idx) => ({
    title: option.title,
    category: option.badge,
    description: `${option.description} Key considerations: ${option.criteria.join(' • ')}`,
    image: decisionImages[idx],
    placeholderLabel: option.title
  }));

  // ─── Section 9: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Cruises standard inclusions, beverage packages, and onboard expenses",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-amalfi-italy-sunrise-sun-princess.webp",
        //   "caption": "What Is Included on a Princess Cruise and What Costs Extra?"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-amalfi-italy-sunrise-sun-princess.webp",
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
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries across all seven continents, specializing in cruise vacation planning and fare structure optimization.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Princess Plus Package",
          "Princess Premier Package",
          "Cruise Fare Inclusions",
          "MedallionClass Technology",
          "Cruise Dining & Beverages",
          "Luxury Cruise Planning"
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
            "name": "What's Included on Princess Cruises",
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
        badge="Princess Cruises Fare Guide"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Explore Cruise Costs"
        secondaryCtaLink="/princess-cruises/cost"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="INCLUSIONS"
        image1={IntroStateroomImg}
        image2={IntroBarImg}
      />

      {/* ─── SECTION 3: STANDARD CRUISE FARE INCLUSIONS ─── */}
      <EditorialFeatureShowcase
        title={pageData.standardInclusions.title}
        subtitle={pageData.standardInclusions.subtitle}
        image={DiscoveryShipImg}
        features={standardInclusionsList}
        bgClass="bg-white"
      />

      {/* ─── SECTION 4: INCLUDED VS EXTRA COSTS BREAKDOWN ─── */}
      <CostValueAnalysisCards
        title="Included in Fare vs. Extra Expenses"
        subtitle="Compare standard cruise fare benefits against optional onboard out-of-pocket costs"
        includedTitle="Included in Standard Fare"
        extrasTitle="Extra Costs to Budget"
        included={includedItems}
        extras={extraExpenseItems}
      />

      {/* ─── SECTION 5: SIDE-BY-SIDE FARE COMPARISON MATRIX ─── */}
      <ComparisonTable
        data={pageData.fareComparison}
      />

      {/* ─── SECTION 6: PLUS & PREMIER UPGRADED PACKAGES ─── */}
      <LuxuryZigZagShowcase
        title="Princess Plus vs. Princess Premier Inclusions"
        subtitle="Detailed analysis of daily beverage allowances, multi-device connectivity, dining credits, and VIP services"
        items={packageZigZagItems}
      />

      {/* ─── SECTION 7: FARE DECISION CRITERIA ─── */}
      <ThreeColumnGrid
        title={pageData.fareDecision.title}
        subtitle={pageData.fareDecision.subtitle}
        items={fareDecisionItems}
      />

      {/* ─── SECTION 8: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="CRUISE FARE & PACKAGE SPECIALIST"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Custom Global Cruise Vacations",
          "Traveled to 121+ Countries Across All 7 Continents",
          "Specialist in Fare Package Optimization & Stateroom Selection",
          "Certified Luxury Cruise & Expedition Advisor",
          "Personalized Fare Cost-Benefit Calculations for Every Client"
        ]}
      />

      {/* ─── SECTION 9: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 10: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Plan Your Princess Cruise Vacation?"
        description="Connect with Angela Hughes and the Trips & Ships luxury travel team to compare Princess Standard, Plus, and Premier fares, secure real-time promotional pricing, and select your ideal stateroom."
        buttonText="Plan Your Cruise With An Expert"
        buttonLink="/contact"
        image={SanctuaryDiningCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesWhatsIncluded;

