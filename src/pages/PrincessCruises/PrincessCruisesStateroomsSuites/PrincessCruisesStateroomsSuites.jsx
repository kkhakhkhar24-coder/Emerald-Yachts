import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Dedicated Princess Staterooms & Suites Assets (100% authentic & uniquely mapped)
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite-panoramic-view.webp';
import IntroOwnerImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-owners-suite.webp';
import IntroPenthouseEveningImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite-evening-ambiance.webp';
import InteriorImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import WindowSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-window-suite.webp';
import PremiumSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-premium-suite.webp';
import VistaSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-vista-suite.webp';
import PenthouseSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite.webp';
import SanctuaryPoolImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-sun-princess-sanctuary-pool.webp';
import OwnerSuiteCtaImg from '@/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-owners-suite-panoramic-view.webp';

// Shared UI System Components (Strictly 0 changes to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import TabbedComparison from '@/components/ui/TabbedComparison';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesStateroomsSuites = () => {
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

  // ─── Section 4: TabbedComparison mapping for 5 Stateroom Categories ───
  const categoryImages = [
    InteriorImg,
    WindowSuiteImg,
    PremiumSuiteImg,
    VistaSuiteImg,
    PenthouseSuiteImg
  ];

  const stateroomTabItems = pageData.detailedCategories.categories.map((cat, idx) => ({
    name: cat.name.split(':')[0],
    image: categoryImages[idx],
    mainBrandStrengths: [
      `Category Profile: ${cat.category}`,
      cat.description,
      "Includes signature Princess Luxury Bed, dedicated stateroom attendant, and daily housekeeping",
      "Automatic keyless stateroom door entry with wearable OceanMedallion"
    ],
    competitorStrengths: [
      `Best Suited For: ${cat.bestFor}`,
      "Features flat-panel satellite HDTV with on-demand movies, in-room refrigerator, and safe",
      "Full climate control and complimentary 24-hour room service delivery available",
      "Available across Sun, Royal, Grand, and Coral-class ships with verified deck plan configurations"
    ]
  }));

  // ─── Section 6: Recommendations (ThreeColumnGrid) ───
  const recommendationItems = pageData.recommendations.categories.map((cat) => ({
    title: cat.title,
    category: cat.badge,
    description: cat.description,
    image: undefined,
    placeholderLabel: cat.title
  }));

  // ─── Section 10: FAQAccordion Data ───
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Princess Cruises cabin sizes, suite privileges, deck locations, and collection benefits",
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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite-panoramic-view.webp",
        //   "caption": "Princess Cruises staterooms and suites guide"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesStateroomsSuites/princess-cruises-discovery-princess-stateroom-penthouse-suite-panoramic-view.webp",
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
          "Luxury Cruise Staterooms",
          "Cruise Suites",
          "Reserve Collection",
          "Sanctuary Collection",
          "Luxury Cruises",
          "Luxury Travel"
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
            "name": "Princess Cruises Staterooms and Suites",
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
        badge="Princess Staterooms & Suites"
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText="Explore Princess Fleet"
        secondaryCtaLink="/princess-cruises/ships"
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="STATEROOMS"
        image1={IntroOwnerImg}
        image2={IntroPenthouseEveningImg}
      />

      {/* ─── SECTION 3: CATEGORIES AT A GLANCE TABLE ─── */}
      <ComparisonTable
        data={pageData.categoriesAtAGlance}
      />

      {/* ─── SECTION 4: 5 PRINCIPAL STATEROOM CATEGORIES (TabbedComparison) ─── */}
      <TabbedComparison
        title={pageData.detailedCategories.title}
        mainBrand={{ name: "Princess Staterooms" }}
        competitors={stateroomTabItems}
        hideVs={true}
        leftLabel="Category Highlights"
        rightLabel="Key Advantages & Living Space"
      />

      {/* ─── SECTION 5: RESERVE VS SANCTUARY COLLECTION MATRIX ─── */}
      <ComparisonTable
        data={pageData.collectionComparison}
      />

      {/* ─── SECTION 6: WHICH CATEGORY SHOULD YOU CHOOSE ─── */}
      <ThreeColumnGrid
        title={pageData.recommendations.title}
        subtitle={pageData.recommendations.subtitle}
        items={recommendationItems}
      />

      {/* ─── SECTION 7: HOW TO CHOOSE CABIN LOCATION ─── */}
      <EditorialFeatureShowcase
        title={pageData.locationGuide.title}
        subtitle={pageData.locationGuide.subtitle}
        image={SanctuaryPoolImg}
        features={pageData.locationGuide.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 8: WHAT IS INCLUDED IN EVERY STATEROOM ─── */}
      <CostValueAnalysisCards
        title={pageData.standardAmenities.title}
        subtitle={pageData.standardAmenities.subtitle}
        includedTitle={pageData.standardAmenities.includedTitle}
        extrasTitle={pageData.standardAmenities.extrasTitle}
        included={pageData.standardAmenities.included}
        extras={pageData.standardAmenities.extras}
      />

      {/* ─── SECTION 9: 8-POINT BOOKING CHECKLIST ─── */}
      <StepByStepGuide
        title={pageData.bookingChecklist.title}
        subtitle={pageData.bookingChecklist.subtitle}
        steps={pageData.bookingChecklist.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 10: ADVISOR EXPERTISE ─── */}
      <ExpertCredentials
        title={pageData.advisor.title}
        name={pageData.advisor.name}
        image={AboutImage}
        badge="LUXURY STATEROOM & SUITE CONSULTANT"
        bio={pageData.advisor.bio}
        quote={pageData.advisor.quote}
        ctaText={pageData.advisor.ctaText}
        ctaLink={pageData.advisor.ctaLink}
        credentials={[
          "Over 40 Years Designing Luxury Cruise & Suite Itineraries",
          "Explored 121+ Countries Across All Seven Continents",
          "Specialist in Stateroom Deck Placement & Suite Selection",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Personalized Cabin Walkthroughs & Booking Support"
        ]}
      />

      {/* ─── SECTION 11: FAQS ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 12: CLOSING CALL TO ACTION ─── */}
      <CenterCTA
        title="Ready to Select Your Ideal Princess Stateroom?"
        description="Connect with Angela Hughes and our dedicated cruise specialists to compare deck plans, evaluate suite perks, and reserve your perfect stateroom."
        buttonText="Plan Your Cruise With Angela"
        buttonLink="/contact"
        image={OwnerSuiteCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default PrincessCruisesStateroomsSuites;

