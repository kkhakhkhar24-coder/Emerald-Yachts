import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Image Placeholders & Angela Photo
import angelaPortrait from '@/assets/Media (2).jpg';

const ritzImage = 'https://placehold.co/1200x800/1e293b/d4af37?text=Ritz-Carlton+Yacht+Collection';
const seabournImage = 'https://placehold.co/1200x800/0f172a/d4af37?text=Seabourn+Luxury+Cruises';
const expeditionImage = 'https://placehold.co/1200x800/1e293b/ffffff?text=Seabourn+Expedition+Vessel';
const atmosphereImage = 'https://placehold.co/1200x800/0f172a/ffffff?text=Understated+Luxury+Atmosphere';
const wellnessImage = 'https://placehold.co/1200x800/1e3a5f/ffffff?text=Wellness+%26+Spa+Comparison';

// Shared UI System Components (100% Component-Based Architecture matching EmeraldYachts.tsx)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
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
import PillarDirectory from '@/components/ui/PillarDirectory';

const RitzCarltonVsSeabourn = () => {
  // Schema JSON-LD
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn#article",
        "headline": "Ritz-Carlton Yacht Collection vs. Seabourn: Which Luxury Cruise Is Right for You?",
        "description": "A detailed comparison of Ritz-Carlton Yacht Collection and Seabourn covering suites, service, dining, inclusions, itineraries, expedition cruising and overall luxury cruise value.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn#webpage"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn",
        "name": "Ritz-Carlton Yacht Collection vs. Seabourn",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection vs. Seabourn",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn#faq",
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

      {/* ─── SECTION 2: PremiumIntro Quick Answer / Verdict ─── */}
      <PremiumIntro
        sections={pageData.quickAnswer}
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: DualPhilosophyShowcase The Biggest Difference ─── */}
      <DualPhilosophyShowcase
        data={pageData.dualPhilosophy}
        imageSailing={ritzImage}
        imageAllSuite={seabournImage}
      />

      {/* ─── SECTION 4: BudgetBreakdownTable Quick Verdict at a Glance ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 4A: BrandPillarsShowcase Core Differences ─── */}
      <BrandPillarsShowcase data={pageData.coreDifferencePillars} />

      {/* ─── SECTION 5: HeadToHeadVisualShowdown Ship Size & Intimacy ─── */}
      {pageData.shipSizeShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.shipSizeShowdownData}
          image1={ritzImage}
          image2={seabournImage}
        />
      )}

      {/* ─── SECTION 5A: CostValueAnalysisCards Ship Size Comparison ─── */}
      {pageData.shipSizeComparison && (
        <CostValueAnalysisCards
          title={pageData.shipSizeComparison.title}
          subtitle={pageData.shipSizeComparison.subtitle}
          includedTitle={pageData.shipSizeComparison.includedTitle}
          extrasTitle={pageData.shipSizeComparison.extrasTitle}
          included={pageData.shipSizeComparison.included}
          extras={pageData.shipSizeComparison.extras}
        />
      )}

      {/* ─── SECTION 6: TabbedComparison Suites Deep Dive ─── */}
      <TabbedComparison
        title="Ritz-Carlton vs. Seabourn Suites"
        mainBrand={{ name: "Luxury Suite Accommodations" }}
        competitors={pageData.suitesTabbedData}
        hideVs={true}
        leftLabel="Suite Features & Amenities"
        rightLabel="Best For & Verdict"
      />

      {/* ─── SECTION 7: LuxuryZigZagShowcase Service & Dining ─── */}
      {pageData.serviceAndDiningZigZag && (
        <LuxuryZigZagShowcase
          title={pageData.serviceAndDiningZigZag.title}
          subtitle={pageData.serviceAndDiningZigZag.subtitle}
          items={pageData.serviceAndDiningZigZag.items}
          images={[ritzImage, seabournImage]}
        />
      )}

      {/* ─── SECTION 7A: CostValueAnalysisCards Dining & Beverages ─── */}
      {pageData.diningAndBeverageComparison && (
        <CostValueAnalysisCards
          title={pageData.diningAndBeverageComparison.title}
          subtitle={pageData.diningAndBeverageComparison.subtitle}
          includedTitle={pageData.diningAndBeverageComparison.includedTitle}
          extrasTitle={pageData.diningAndBeverageComparison.extrasTitle}
          included={pageData.diningAndBeverageComparison.included}
          extras={pageData.diningAndBeverageComparison.extras}
        />
      )}

      {/* ─── SECTION 8: EditorialFeatureShowcase Atmosphere & Design ─── */}
      {pageData.atmosphereEditorial && (
        <EditorialFeatureShowcase
          title={pageData.atmosphereEditorial.title}
          subtitle={pageData.atmosphereEditorial.subtitle}
          image={atmosphereImage}
          features={pageData.atmosphereEditorial.features}
          bgClass="bg-slate-50"
        />
      )}

      {/* ─── SECTION 9: ProsConsWithImage Itineraries & Expedition Cruising ─── */}
      {pageData.itineraryAndExpeditionData && (
        <ProsConsWithImage
          title={pageData.itineraryAndExpeditionData.title}
          prosTitle={pageData.itineraryAndExpeditionData.prosTitle}
          consTitle={pageData.itineraryAndExpeditionData.consTitle}
          bestFor={pageData.itineraryAndExpeditionData.bestFor}
          notBestFor={pageData.itineraryAndExpeditionData.notBestFor}
          bottomNote={pageData.itineraryAndExpeditionData.bottomNote}
          image={expeditionImage}
        />
      )}

      {/* ─── SECTION 9A: HeadToHeadVisualShowdown Wellness Comparison ─── */}
      {pageData.wellnessShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.wellnessShowdownData}
          image1={ritzImage}
          image2={seabournImage}
        />
      )}

      {/* ─── SECTION 9B: ThreeColumnGrid Entertainment & Enrichment ─── */}
      {pageData.enrichmentData && (
        <ThreeColumnGrid
          title="Entertainment & Enrichment: Ritz-Carlton vs. Seabourn"
          subtitle="Comparing onboard activities, enrichment programs, and guest experience philosophy:"
          items={pageData.enrichmentData}
        />
      )}

      {/* ─── SECTION 10: BudgetBreakdownTable Inclusions Matrix ─── */}
      <BudgetBreakdownTable data={pageData.inclusionsTable} />

      {/* ─── SECTION 10B: BudgetBreakdownTable Wi-Fi, Gratuities & Dress Code ─── */}
      {pageData.quickFactsTable && (
        <BudgetBreakdownTable data={pageData.quickFactsTable} />
      )}

      {/* ─── SECTION 10A: CostValueAnalysisCards Price Comparison ─── */}
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

      {/* ─── SECTION 11: Head-to-Head Answers (Service, Food, Suites, Expedition, Exclusivity) ─── */}
      <ThreeColumnGrid
        title="Head-to-Head Answers: Service, Food, Suites, Expedition & Exclusivity"
        subtitle="Direct analysis answering the top cruiser questions:"
        items={pageData.headToHeadAnswers}
      />

      {/* ─── SECTION 12: ProsConsCards Who Should Book Which ─── */}
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

      {/* ─── SECTION 12B: ProsConsCards Family & Couples Matchmaker ─── */}
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

      {/* ─── SECTION 12D: ProsConsCards First-Time Luxury Cruiser / Luxury Philosophy ─── */}
      {pageData.firstTimeCruiserData && (
        <ProsConsCards
          title={pageData.firstTimeCruiserData.title}
          prosTitle={pageData.firstTimeCruiserData.prosTitle}
          consTitle={pageData.firstTimeCruiserData.consTitle}
          bestFor={pageData.firstTimeCruiserData.bestFor}
          notBestFor={pageData.firstTimeCruiserData.notBestFor}
          bottomNote={pageData.firstTimeCruiserData.bottomNote}
          type="compare"
          bgClass="bg-white"
        />
      )}

      {/* ─── SECTION 12C: ThreeColumnGrid Travel Advisor Framework ─── */}
      <ThreeColumnGrid
        title="Which Is Better? A Travel Advisor's Framework"
        subtitle="Angela Hughes' 6-scenario guide for recommending the right luxury cruise line:"
        items={pageData.travelAdvisorFramework}
      />

      {/* ─── SECTION 13: BudgetBreakdownTable Decision Matrix ─── */}
      <BudgetBreakdownTable data={pageData.decisionTable} />

      {/* ─── SECTION 14: AuthorityBox Angela's Perspective ─── */}
      <AuthorityBox
        title={pageData.angelaPerspective.title}
        content={pageData.angelaPerspective.content}
        author={pageData.angelaPerspective.author}
        authorImage={angelaPortrait}
      />

      {/* ─── SECTION 15: FAQAccordion ─── */}
      <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }} />

      {/* ─── SECTION 16: ConclusionSection Final Verdict ─── */}
      <ConclusionSection sections={pageData.finalVerdictSections} />

      {/* ─── SECTION 17: ExpertCredentials ─── */}
      <ExpertCredentials image={angelaPortrait} />

      {/* ─── SECTION 17A: PillarDirectory Related Ritz-Carlton Guides ─── */}
      {pageData.relatedGuides && (
        <PillarDirectory
          brandName={pageData.relatedGuides.brandName}
          items={pageData.relatedGuides.items}
        />
      )}

      {/* ─── SECTION 18: CenterCTA ─── */}
      <CenterCTA
        title={pageData.centerCTA.title}
        subtitle={pageData.centerCTA.subtitle}
        buttonLabel={pageData.centerCTA.buttonLabel}
        buttonUrl={pageData.centerCTA.buttonUrl}
      />
    </div>
  );
};

export default RitzCarltonVsSeabourn;
