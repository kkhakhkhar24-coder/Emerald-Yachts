import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Angela Photo
import angelaPortrait from '@/assets/Media (2).jpg';

// SEO Optimized Assets from assets/RitzCarltonVsExploraJourneys
import heroBgImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-vs-explora-journeys-luxury-cruise.jpeg';
import introLifestyleImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-marina-lifestyle-terrace.jpeg';
import introDiningImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-dining-mistral-terrace.jpg';

import sailingYachtImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-private-marina-experience.jpg';
import allSuiteResidenceImg from '@/assets/RitzCarltonVsExploraJourneys/explora-journeys-ocean-residence-deck-pool.jpg';

import ritzPhilosophyImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-philosophy-small-ship.jpg';
import exploraPhilosophyImg from '@/assets/RitzCarltonVsExploraJourneys/explora-journeys-residence-philosophy-art-bar.jpg';
import inclusionsShowcaseImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-inclusions-beverages.jpg';

import exploraWellnessImg from '@/assets/RitzCarltonVsExploraJourneys/explora-ocean-wellness-spa-thermal-whirlpool.jpeg';
import ritzSpaImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-spa-terrace-wellness.jpg';

import ritzServiceImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-service-culture-afternoon-tea.jpeg';
import exploraServiceImg from '@/assets/RitzCarltonVsExploraJourneys/explora-intuitive-hospitality-lounge-bar.jpg';

import atmosphereDesignImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-atmosphere-design-suite.jpg';
import itineraryDestinationsImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-itineraries-st-lucia.jpg';

import battleServiceImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-service-comparison-embarkation.jpeg';
import battleFoodImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-dining-beach-house-lunch.jpg';
import battleSuitesImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-suites-comparison-grand-suite.jpg';
import battleWellnessImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-wellness-spa-fitness.jpeg';
import battleExclusivityImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-vs-explora-exclusivity-intimate-yacht.jpg';

import frameworkIntimacyImg from '@/assets/RitzCarltonVsExploraJourneys/travel-advisor-framework-intimacy-vs-space.jpg';
import frameworkDesignImg from '@/assets/RitzCarltonVsExploraJourneys/travel-advisor-framework-design-style-valletta.jpg';
import frameworkWellnessImg from '@/assets/RitzCarltonVsExploraJourneys/travel-advisor-framework-wellness-focus-aquabana.jpg';
import frameworkLoyaltyImg from '@/assets/RitzCarltonVsExploraJourneys/travel-advisor-framework-brand-loyalty-grand-suite.jpg';
import frameworkItineraryImg from '@/assets/RitzCarltonVsExploraJourneys/travel-advisor-framework-itinerary-caribbean.jpeg';

import ritzSuitesTabImg from '@/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-suites-private-terrace.jpg';
import exploraSuitesTabImg from '@/assets/RitzCarltonVsExploraJourneys/explora-journeys-ocean-suites-residence.jpg';

import finalCtaBgImg from '@/assets/RitzCarltonVsExploraJourneys/plan-your-ritz-carlton-vs-explora-luxury-voyage.jpeg';

// Shared UI System Components (100% Component-Based Architecture matching EmeraldYachts.tsx)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ProsConsWithImage from '@/components/ui/ProsConsWithImage';
import HeadToHeadVisualShowdown from '@/components/ui/HeadToHeadVisualShowdown';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import VideoEmbed from '@/components/ui/VideoEmbed';

const RitzCarltonVsExploraJourneys = () => {
  // Map images for Suites Tabbed Comparison (2 tabs: Ritz-Carlton vs Explora Suites)
  const suitesTabbedItems = pageData.suitesTabbedData.map((item, idx) => {
    const suiteTabImages = [ritzSuitesTabImg, exploraSuitesTabImg];
    return {
      ...item,
      image: suiteTabImages[idx] || null
    };
  });

  // Map images for Yacht vs Ocean Residence Duels (3 cards)
  const yachtDuelsItems = pageData.yachtVersusResidenceDuels.map((item, idx) => {
    const duelImages = [ritzPhilosophyImg, exploraPhilosophyImg, inclusionsShowcaseImg];
    const seoLabels = [
      "Ritz-Carlton Yacht-Like Travel Philosophy",
      "Explora Contemporary Ocean Residence Philosophy",
      "Inclusions, High-Speed Wi-Fi & Premium Amenities"
    ];
    return {
      ...item,
      image: duelImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map images for Head-to-Head Battle Answers (5 cards)
  const battleAnswersItems = pageData.headToHeadBattleAnswers.map((item, idx) => {
    const battleImages = [
      battleServiceImg,
      battleFoodImg,
      battleSuitesImg,
      battleWellnessImg,
      battleExclusivityImg
    ];
    const seoLabels = [
      "Ritz-Carlton vs Explora Service Style Comparison",
      "Ritz-Carlton vs Explora Culinary Experience & Fine Dining",
      "Ritz-Carlton vs Explora Luxury Ocean Suites & Terraces",
      "Ritz-Carlton vs Explora Ocean Wellness & Spa Facilities",
      "Ritz-Carlton vs Explora Yacht Exclusivity & Intimacy"
    ];
    return {
      ...item,
      image: battleImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map images for Travel Advisor Framework (5 cards)
  const advisorFrameworkItems = pageData.travelAdvisorFramework.map((item, idx) => {
    const frameworkImages = [
      frameworkIntimacyImg,
      frameworkDesignImg,
      frameworkWellnessImg,
      frameworkLoyaltyImg,
      frameworkItineraryImg
    ];
    const seoLabels = [
      "Luxury Yacht Intimacy vs Ocean Residence Space",
      "Classic Yacht Contemporary vs European Design Style",
      "Integrated Ocean Wellness & Spa Experience",
      "Ritz-Carlton Brand Loyalty & Marriott Bonvoy Benefits",
      "Global Itinerary Selection & Port Accessibility"
    ];
    return {
      ...item,
      image: frameworkImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Schema JSON-LD (Exact matching structure with RitzCarltonYachtCollectionCost.jsx)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys",
        "name": "Ritz-Carlton Yacht Collection vs. Explora Journeys: Which Luxury Cruise Is Right for You?",
        "headline": "Ritz-Carlton Yacht Collection vs. Explora Journeys",
        "description": "A detailed comparison of Ritz-Carlton Yacht Collection and Explora Journeys covering price, suites, dining, service, inclusions, wellness, ships and itineraries.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-vs-explora-journeys-luxury-cruise.jpeg",
          "caption": "Ritz-Carlton Yacht Collection vs. Explora Journeys: Which Luxury Cruise Is Right for You?"
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-vs-explora-journeys-luxury-cruise.jpeg",
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
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "Luxury Safaris",
          "Expedition Cruises",
          "River Cruising",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Collection vs. Explora Journeys",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
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
    <div className="min-h-screen bg-white font-sans text-navy-950 antialiased selection:bg-gold-500/30 selection:text-gold-900">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-vs-explora-journeys-luxury-cruise.jpeg" />
        <meta property="og:image:alt" content="Ritz-Carlton Yacht Collection vs. Explora Journeys: Which Luxury Cruise Is Right for You?" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonVsExploraJourneys/ritz-carlton-yacht-vs-explora-journeys-luxury-cruise.jpeg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (100% Component-Based with SEO-optimized Hero background image) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBgImg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Quick Answer / Verdict (100% Component-Based) ─── */}
      <PremiumIntro 
        sections={pageData.quickAnswer} 
        image1={introLifestyleImg}
        image2={introDiningImg}
        alt1="Ritz-Carlton Yacht Collection vs Explora Journeys Marina Lifestyle and Private Ocean Terraces"
        alt2="Ritz-Carlton and Explora Luxury Cruise Culinary and Dining Experience"
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: DualPhilosophyShowcase The Biggest Difference (100% Component-Based) ─── */}
      <DualPhilosophyShowcase
        data={pageData.dualPhilosophy}
        imageSailing={sailingYachtImg}
        imageAllSuite={allSuiteResidenceImg}
      />

      {/* ─── SECTION 4: BudgetBreakdownTable Quick Verdict at a Glance (100% Component-Based) ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 5: BrandPillarsShowcase Core Differences (100% Component-Based) ─── */}
      <BrandPillarsShowcase
        title={pageData.coreDifferencePillars.title}
        subtitle={pageData.coreDifferencePillars.subtitle}
        pillars={pageData.coreDifferencePillars.pillars}
      />

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "bGvlj32SXnQ",
          title: "Ritz-Carlton Yacht Collection vs. Explora Journeys",
          description: "Explore the differences in design, suites, dining, and luxury philosophies between Ritz-Carlton and Explora Journeys."
        }}
      />

      {/* ─── SECTION 6: CostValueAnalysisCards Ship Size Comparison (100% Component-Based) ─── */}
      <CostValueAnalysisCards
        title={pageData.shipSizeComparison.title}
        subtitle={pageData.shipSizeComparison.subtitle}
        includedTitle={pageData.shipSizeComparison.includedTitle}
        extrasTitle={pageData.shipSizeComparison.extrasTitle}
        included={pageData.shipSizeComparison.included}
        extras={pageData.shipSizeComparison.extras}
      />

      {/* ─── SECTION 7: TabbedComparison Suites Deep Dive (100% Component-Based) ─── */}
      <TabbedComparison
        title="Ritz-Carlton vs. Explora Suites"
        mainBrand={{ name: "Luxury Suite Accommodations" }}
        competitors={suitesTabbedItems}
        hideVs={true}
        leftLabel="Suite Features & Amenities"
        rightLabel="Best For & Verdict"
      />

      {/* ─── SECTION 8: CostValueAnalysisCards Dining & Drinks (100% Component-Based) ─── */}
      <CostValueAnalysisCards
        title={pageData.diningComparison.title}
        subtitle={pageData.diningComparison.subtitle}
        includedTitle={pageData.diningComparison.includedTitle}
        extrasTitle={pageData.diningComparison.extrasTitle}
        included={pageData.diningComparison.included}
        extras={pageData.diningComparison.extras}
      />

      {/* ─── SECTION 9: ThreeColumnGrid Yacht vs Ocean Residence Duels (100% Component-Based) ─── */}
      <ThreeColumnGrid
        title="Yacht vs. Ocean Residence Matchup"
        subtitle="Comparing core travel philosophies and inclusions:"
        items={yachtDuelsItems}
      />

      {/* ─── SECTION 10: BudgetBreakdownTable Inclusions Matrix (100% Component-Based) ─── */}
      <BudgetBreakdownTable data={pageData.inclusionsTable} />

      {/* ─── SECTION 10A: Wellness Comparison (Visual Showdown with Images) ─── */}
      {pageData.wellnessShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.wellnessShowdownData}
          image1={exploraWellnessImg}
          image2={ritzSpaImg}
        />
      )}

      {/* ─── SECTION 10B: Service Comparison (Luxury ZigZag Showcase with Images) ─── */}
      {pageData.serviceComparisonZigZag && (
        <LuxuryZigZagShowcase
          title={pageData.serviceComparisonZigZag.title}
          subtitle={pageData.serviceComparisonZigZag.subtitle}
          items={pageData.serviceComparisonZigZag.items}
          images={[ritzServiceImg, exploraServiceImg]}
        />
      )}

      {/* ─── SECTION 10C: Atmosphere & Design (Editorial Feature Showcase with Image) ─── */}
      {pageData.atmosphereAndDesignEditorial && (
        <EditorialFeatureShowcase
          title={pageData.atmosphereAndDesignEditorial.title}
          subtitle={pageData.atmosphereAndDesignEditorial.subtitle}
          image={atmosphereDesignImg}
          features={pageData.atmosphereAndDesignEditorial.features}
          bgClass="bg-slate-50"
        />
      )}

      {/* ─── SECTION 10D: Itinerary Comparison (ProsCons with Destination Image) ─── */}
      {pageData.itineraryComparisonData && (
        <ProsConsWithImage
          title={pageData.itineraryComparisonData.title}
          prosTitle={pageData.itineraryComparisonData.prosTitle}
          consTitle={pageData.itineraryComparisonData.consTitle}
          bestFor={pageData.itineraryComparisonData.bestFor}
          notBestFor={pageData.itineraryComparisonData.notBestFor}
          bottomNote={pageData.itineraryComparisonData.bottomNote}
          image={itineraryDestinationsImg}
        />
      )}

      {/* ─── SECTION 10E: Price Comparison (Cost & Value Breakdown) ─── */}
      {pageData.priceComparisonData && (
        <CostValueAnalysisCards
          title={pageData.priceComparisonData.title}
          subtitle={pageData.priceComparisonData.subtitle}
          includedTitle={pageData.priceComparisonData.includedTitle}
          extrasTitle={pageData.priceComparisonData.extrasTitle}
          included={pageData.priceComparisonData.included}
          extras={pageData.priceComparisonData.extras}
        />
      )}

      {/* ─── SECTION 11: Head-to-Head Answers (Service, Food, Suites, Wellness, Exclusivity) ─── */}
      <ThreeColumnGrid
        title="Head-to-Head Answers: Service, Food, Suites, Wellness & Exclusivity"
        subtitle="Direct analysis answering the top cruiser questions:"
        items={battleAnswersItems}
      />

      {/* ─── SECTION 12: ProsConsCards Who Should Book Which (100% Component-Based) ─── */}
      <ProsConsCards
        title={pageData.whoShouldBookWhich.title}
        prosTitle={pageData.whoShouldBookWhich.prosTitle}
        consTitle={pageData.whoShouldBookWhich.consTitle}
        bestFor={pageData.whoShouldBookWhich.bestFor}
        notBestFor={pageData.whoShouldBookWhich.notBestFor}
        bottomNote={pageData.whoShouldBookWhich.bottomNote}
        type="compare"
        bgClass="bg-white"
      />

      {/* ─── SECTION 13: ThreeColumnGrid Travel Advisor 5-Question Framework ─── */}
      <ThreeColumnGrid
        title="Which Is Better for a Luxury Travel Advisor?"
        subtitle="The 5-question framework to select the right brand for your travel style:"
        items={advisorFrameworkItems}
      />

      {/* ─── SECTION 14: ProsConsCards Family & Couples Matchmaker (100% Component-Based) ─── */}
      <ProsConsCards
        title={pageData.familyAndCouplesData.title}
        prosTitle={pageData.familyAndCouplesData.prosTitle}
        consTitle={pageData.familyAndCouplesData.consTitle}
        bestFor={pageData.familyAndCouplesData.bestFor}
        notBestFor={pageData.familyAndCouplesData.notBestFor}
        bottomNote={pageData.familyAndCouplesData.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 15: BudgetBreakdownTable Decision Matrix (100% Component-Based) ─── */}
      <BudgetBreakdownTable data={pageData.decisionTreeTable} />

      {/* ─── SECTION 16: AuthorityBox Angela's Perspective (100% Component-Based) ─── */}
      <AuthorityBox
        title={pageData.angelaPerspective.title}
        content={pageData.angelaPerspective.content}
        author={pageData.angelaPerspective.author}
        authorImage={angelaPortrait}
      />

      {/* ─── SECTION 18: FAQAccordion (100% Component-Based) ─── */}
      <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }} />

      {/* ─── SECTION 18: ConclusionSection Final Verdict (100% Component-Based) ─── */}
      <ConclusionSection sections={pageData.finalVerdictSections} />

      {/* ─── SECTION 19: ExpertCredentials (100% Component-Based) ─── */}
      <ExpertCredentials image={angelaPortrait} />

      {/* ─── SECTION 20: CenterCTA (100% Component-Based) ─── */}
      <CenterCTA
        title={pageData.centerCTA.title}
        description={pageData.centerCTA.subtitle}
        buttonText={pageData.centerCTA.buttonLabel}
        buttonLink={pageData.centerCTA.buttonUrl}
        image={finalCtaBgImg}
      />
    </div>
  );
};

export default RitzCarltonVsExploraJourneys;
