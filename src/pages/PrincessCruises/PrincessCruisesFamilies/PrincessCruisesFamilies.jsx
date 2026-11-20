import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
// Verified Heading-Matched Princess Assets
import SunPrincessShip from '@/assets/Princess-Cruises/PrincessCruisesShips/princess-cruises-sun-princess-sanctuary-alaska.webp';
import ConnectingSuiteImage from '@/assets/Princess-Cruises/PrincessCruisesPlus/princess-cruises-discovery-princess-stateroom-vista-suite-panoramic-view.webp';
import PrincessSuiteImage from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-discovery-princess-stateroom-premium-suite.webp';
import AlaskaGlacierShip from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/alaska-scenic-cruising.webp';
import CaribbeanBeachImage from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-bahamas-celebration-key-starfish-beach.webp';
import MediterraneanAmalfiImage from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-amalfi-italy-coastline-overview.webp';
import NorthernEuropeFjordDrone from '@/assets/Princess-Cruises/PrincessCruisesCost/princess-cruises-flam-norway-sky-princess-drone.webp';

// Shared UI System Components (From CrystalCruisesWhatsIncluded Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ProsConsCards from '@/components/ui/ProsConsCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import TabbedComparison from '@/components/ui/TabbedComparison';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const PrincessCruisesFamilies = () => {
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

  // Kids' Clubs mapping for DetailedInclusionsList (Native component placeholder)
  const kidsClubItems = pageData.kidsClubsDetailed.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Staterooms & Suites mapping for ThreeColumnGrid (Unique suite image + native placeholders)
  const stateroomItems = [
    {
      ...pageData.stateroomsThreeCol.items[0],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[0].title
    },
    {
      ...pageData.stateroomsThreeCol.items[1],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[1].title
    },
    {
      ...pageData.stateroomsThreeCol.items[2],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[2].title
    },
    {
      ...pageData.stateroomsThreeCol.items[3],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[3].title
    },
    {
      ...pageData.stateroomsThreeCol.items[4],
      image: PrincessSuiteImage,
      placeholderLabel: pageData.stateroomsThreeCol.items[4].title
    },
    {
      ...pageData.stateroomsThreeCol.items[5],
      image: undefined,
      placeholderLabel: pageData.stateroomsThreeCol.items[5].title
    }
  ];

  // Dining Showcase items mapping for LuxuryZigZagShowcase (Native luxury placeholders - no duplicate images)
  const diningItems = pageData.familyDiningZigZag.items.map((item) => ({
    ...item,
    image: undefined
  }));

  // Fleet Categories mapping for TabbedComparison (Unique Sun Princess aerial photo for Tab 1)
  const fleetCategories = [
    {
      ...pageData.shipsTabbedComparison.categories[0],
      image: SunPrincessShip
    },
    {
      ...pageData.shipsTabbedComparison.categories[1],
      image: undefined
    },
    {
      ...pageData.shipsTabbedComparison.categories[2],
      image: undefined
    },
    {
      ...pageData.shipsTabbedComparison.categories[3],
      image: undefined
    }
  ];

  // Destinations mapping for ThreeColumnGrid (Authentic heading-matched photography)
  const destinationItems = [
    {
      ...pageData.destinationsShowcase.items[0],
      image: AlaskaGlacierShip,
      placeholderLabel: pageData.destinationsShowcase.items[0].title
    },
    {
      ...pageData.destinationsShowcase.items[1],
      image: CaribbeanBeachImage,
      placeholderLabel: pageData.destinationsShowcase.items[1].title
    },
    {
      ...pageData.destinationsShowcase.items[2],
      image: MediterraneanAmalfiImage,
      placeholderLabel: pageData.destinationsShowcase.items[2].title
    },
    {
      ...pageData.destinationsShowcase.items[3],
      image: NorthernEuropeFjordDrone,
      placeholderLabel: pageData.destinationsShowcase.items[3].title
    }
  ];

  // Cost analysis mapping for CostValueAnalysisCards
  const costIncluded = pageData.costAnalysis.included.map((item) =>
    typeof item === 'string'
      ? { title: item, description: '' }
      : { title: item.title, description: item.description || '' }
  );

  const costExtras = pageData.costAnalysis.extras.map((item) =>
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
        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader specializing in premium cruises and customized travel.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Family cruises",
          "Princess Cruises",
          "Family travel",
          "Multigenerational travel",
          "Cruise staterooms",
          "Alaska cruises",
          "Caribbean cruises",
          "Luxury travel planning"
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
            "name": "Princess Cruises for Families",
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
        primaryCtaText={pageData.hero.primaryCtaText || "Plan Your Family Cruise"}
        primaryCtaLink={pageData.hero.primaryCtaLink || "/contact"}
        secondaryCtaText={pageData.hero.secondaryCtaText || "Explore Staterooms"}
        secondaryCtaLink={pageData.hero.secondaryCtaLink || "#staterooms"}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText={pageData.hero.watermarkText}
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 3: IS PRINCESS GOOD FOR FAMILIES? (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.goodForFamilies.title}
        prosTitle={pageData.goodForFamilies.prosTitle}
        consTitle={pageData.goodForFamilies.consTitle}
        bestFor={pageData.goodForFamilies.bestFor}
        notBestFor={pageData.goodForFamilies.notBestFor}
        bottomNote={pageData.goodForFamilies.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 4: KIDS' CLUBS PROGRAMS BY AGE (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.kidsClubsDetailed.title}
        intro={pageData.kidsClubsDetailed.intro}
        items={kidsClubItems}
      />

      {/* ─── SECTION 5: ARE KIDS' CLUBS FREE? (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.kidsClubsFreeTable}
      />

      {/* ─── SECTION 6: BEST PRINCESS STATEROOMS FOR FAMILIES (ThreeColumnGrid Component) ─── */}
      <div id="staterooms" className="scroll-mt-24" />
      <ThreeColumnGrid
        title={pageData.stateroomsThreeCol.title}
        subtitle={pageData.stateroomsThreeCol.subtitle}
        items={stateroomItems}
      />

      {/* ─── SECTION 7: FAMILY STATEROOM COMPARISON (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={pageData.stateroomComparisonTable}
      />

      {/* ─── SECTION 8: CONNECTING STATEROOMS (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.connectingStaterooms.title}
        subtitle={pageData.connectingStaterooms.subtitle}
        image={ConnectingSuiteImage}
        features={pageData.connectingStaterooms.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 9: FAMILY DINING SHOWCASE (LuxuryZigZagShowcase Component - No bestFor badges) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.familyDiningZigZag.title}
        subtitle={pageData.familyDiningZigZag.subtitle}
        items={diningItems}
        images={[]}
      />

      {/* ─── SECTION 10: BEST PRINCESS SHIPS FOR FAMILIES (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.shipsTabbedComparison.title}
        mainBrand={{ name: "Family Ship Categories" }}
        competitors={fleetCategories}
        hideVs={true}
        leftLabel="Ship Class & Scale"
        rightLabel="Key Family Venues & Features"
      />

      {/* ─── SECTION 11: BEST PRINCESS CRUISE DESTINATIONS (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.destinationsShowcase.title}
        subtitle={pageData.destinationsShowcase.subtitle}
        items={destinationItems}
      />

      {/* ─── SECTION 12: ACTIVITIES BEYOND KIDS' CLUBS (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.beyondKidsClubsBento.title}
        subtitle={pageData.beyondKidsClubsBento.subtitle}
        bentoItems={pageData.beyondKidsClubsBento.items}
      />

      {/* ─── SECTION 13: FAMILY CRUISE COSTS (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.costAnalysis.title}
        subtitle={pageData.costAnalysis.subtitle}
        includedTitle={pageData.costAnalysis.includedTitle}
        extrasTitle={pageData.costAnalysis.extrasTitle}
        included={costIncluded}
        extras={costExtras}
      />

      {/* ─── SECTION 14: PRACTICAL PLANNING TIPS (StepByStepGuide Component - grid layout) ─── */}
      <StepByStepGuide
        title={pageData.planningSteps.title}
        subtitle={pageData.planningSteps.subtitle}
        steps={pageData.planningSteps.steps}
      />

      {/* ─── SECTION 15: IS PRINCESS RIGHT FOR YOUR FAMILY? (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.rightForFamilyCompare.title}
        prosTitle={pageData.rightForFamilyCompare.prosTitle}
        consTitle={pageData.rightForFamilyCompare.consTitle}
        bestFor={pageData.rightForFamilyCompare.bestFor}
        notBestFor={pageData.rightForFamilyCompare.notBestFor}
        bottomNote={pageData.rightForFamilyCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Essential answers for planning a family cruise with children, toddlers, or teenagers on Princess.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 17: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        image={AboutImage}
        name="Angela Hughes"
        role="CEO & Luxury Travel Advisor"
        bio="With over 30 years of hands-on luxury cruise experience and thousands of multigenerational family itineraries planned, Angela Hughes provides candid, expert advice on selecting the perfect ship, stateroom configurations, and destination experiences for every generation."
        credentials={[
          "30+ Years Family & Luxury Cruise Planning",
          "Founder, Luxury Travel University",
          "Multigenerational Family Travel Specialist",
          "Certified Master Cruise Counselor (MCC)"
        ]}
        ctaText="Plan with Angela Hughes"
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

export default PrincessCruisesFamilies;
