import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Image Placeholders & Angela Photo
import angelaPortrait from '@/assets/Media (2).jpg';

const ritzImage = 'https://placehold.co/1200x800/1e293b/d4af37?text=Ritz-Carlton+Yacht+Collection';
const exploraImage = 'https://placehold.co/1200x800/0f172a/d4af37?text=Explora+Journeys';
const stLuciaImage = 'https://placehold.co/1200x800/1e293b/ffffff?text=Itinerary+Destinations+Placeholder';
const skyBarImage = 'https://placehold.co/1200x800/0f172a/ffffff?text=Atmosphere+%26+Design+Placeholder';
const cocktailBarImage = 'https://placehold.co/1200x800/1e293b/ffffff?text=Price+Comparison+Placeholder';

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

const RitzCarltonVsExploraJourneys = () => {
  // Schema JSON-LD
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys#article",
        "headline": "Ritz-Carlton Yacht Collection vs. Explora Journeys: Which Luxury Cruise Is Right for You?",
        "description": "A detailed comparison of Ritz-Carlton Yacht Collection and Explora Journeys covering price, suites, dining, service, inclusions, wellness, ships and itineraries.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys#webpage"
        },
        "author": {
          "@type": "Person",
          "name": "Angela Hughes"
        },
        "publisher": {
          "@type": "TravelAgency",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys",
        "name": "Ritz-Carlton Yacht Collection vs Explora Journeys",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys#breadcrumb",
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
            "name": "Luxury Cruises",
            "item": "https://www.tripsandships.com/cruise/"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-explora-journeys#faq",
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
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (100% Component-Based) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        ctaLabel={pageData.hero.ctaLabel}
        ctaUrl={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Quick Answer / Verdict (100% Component-Based) ─── */}
      <PremiumIntro 
        sections={pageData.quickAnswer} 
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: DualPhilosophyShowcase The Biggest Difference (100% Component-Based) ─── */}
      <DualPhilosophyShowcase
        data={pageData.dualPhilosophy}
        imageSailing={ritzImage}
        imageAllSuite={exploraImage}
      />

      {/* ─── SECTION 4: BudgetBreakdownTable Quick Verdict at a Glance (100% Component-Based) ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 5: BrandPillarsShowcase Core Differences (100% Component-Based) ─── */}
      <BrandPillarsShowcase
        title={pageData.coreDifferencePillars.title}
        subtitle={pageData.coreDifferencePillars.subtitle}
        pillars={pageData.coreDifferencePillars.pillars}
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
        competitors={pageData.suitesTabbedData}
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
        items={pageData.yachtVersusResidenceDuels}
      />

      {/* ─── SECTION 10: BudgetBreakdownTable Inclusions Matrix (100% Component-Based) ─── */}
      <BudgetBreakdownTable data={pageData.inclusionsTable} />

      {/* ─── SECTION 10A: Wellness Comparison (Visual Showdown with Images) ─── */}
      {pageData.wellnessShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.wellnessShowdownData}
          image1={exploraImage}
          image2={ritzImage}
        />
      )}

      {/* ─── SECTION 10B: Service Comparison (Luxury ZigZag Showcase with Images) ─── */}
      {pageData.serviceComparisonZigZag && (
        <LuxuryZigZagShowcase
          title={pageData.serviceComparisonZigZag.title}
          subtitle={pageData.serviceComparisonZigZag.subtitle}
          items={pageData.serviceComparisonZigZag.items}
          images={[ritzImage, exploraImage]}
        />
      )}

      {/* ─── SECTION 10C: Atmosphere & Design (Editorial Feature Showcase with Image) ─── */}
      {pageData.atmosphereAndDesignEditorial && (
        <EditorialFeatureShowcase
          title={pageData.atmosphereAndDesignEditorial.title}
          subtitle={pageData.atmosphereAndDesignEditorial.subtitle}
          image={exploraImage}
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
          image={ritzImage}
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
        items={pageData.headToHeadBattleAnswers}
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
        items={pageData.travelAdvisorFramework}
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

      {/* ─── SECTION 14: FAQAccordion (100% Component-Based) ─── */}
      <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }} />

      {/* ─── SECTION 15: ConclusionSection Final Verdict (100% Component-Based) ─── */}
      <ConclusionSection sections={pageData.finalVerdictSections} />

      {/* ─── SECTION 16: ExpertCredentials (100% Component-Based) ─── */}
      <ExpertCredentials image={angelaPortrait} />

      {/* ─── SECTION 17: CenterCTA (100% Component-Based) ─── */}
      <CenterCTA
        title={pageData.centerCTA.title}
        subtitle={pageData.centerCTA.subtitle}
        buttonLabel={pageData.centerCTA.buttonLabel}
        buttonUrl={pageData.centerCTA.buttonUrl}
      />
    </div>
  );
};

export default RitzCarltonVsExploraJourneys;
