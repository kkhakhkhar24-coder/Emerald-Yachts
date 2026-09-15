import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Shared UI System Components (100% Component-Based Architecture matching EmeraldYachts.tsx)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import TabbedComparison from '@/components/ui/TabbedComparison';
import InteractiveFleetComparison from '@/components/ui/InteractiveFleetComparison';
import ProsConsCards from '@/components/ui/ProsConsCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';

const RitzCarltonEvrimaVsIlmaVsLuminara = () => {
  // Schema JSON-LD
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#article",
        "headline": "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?",
        "description": "Compare Ritz-Carlton Yacht Collection's Evrima, Ilma and Luminara by size, suites, design, dining, destinations, amenities and atmosphere.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#webpage"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara",
        "name": "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#yachts",
        "name": "Ritz-Carlton Yacht Collection Fleet",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Evrima"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ilma"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Luminara"
          }
        ]
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@type": "TravelAgency",
          "name": "Trips & Ships Luxury Travel"
        },
        "description": "Luxury travel advisor and CEO of Trips & Ships Luxury Travel with more than 40 years of travel experience and travel experience spanning more than 121 countries."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#breadcrumb",
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
            "name": "Evrima vs. Ilma vs. Luminara",
            "item": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara#faq",
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

      {/* ─── SECTION 1: ComparisonHero (100% Component-Based from data.json) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        ctaLabel={pageData.hero.ctaLabel}
        ctaUrl={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Quick Answer (100% Component-Based from data.json) ─── */}
      <PremiumIntro 
        sections={pageData.quickAnswer} 
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: BudgetBreakdownTable Fleet at a Glance (100% Component-Based from data.json) ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 4: BrandPillarsShowcase Core Differences (100% Component-Based from data.json) ─── */}
      <BrandPillarsShowcase
        title={pageData.coreDifferencePillars.title}
        subtitle={pageData.coreDifferencePillars.subtitle}
        pillars={pageData.coreDifferencePillars.pillars}
      />

      {/* ─── SECTION 5: TabbedComparison Detailed Yacht Profiles (100% Component-Based from data.json) ─── */}
      <TabbedComparison
        title="Detailed Yacht Profiles: Evrima, Ilma & Luminara"
        mainBrand={{ name: "Fleet Comparison" }}
        competitors={pageData.yachtTabbedComparisonData}
        hideVs={true}
        leftLabel="Specifications & Features"
        rightLabel="Who Should Choose & Verdict"
      />

      {/* ─── SECTION 6: InteractiveFleetComparison Interactive Yacht Selector (100% Component-Based from data.json) ─── */}
      <InteractiveFleetComparison
        title="Interactive Ritz-Carlton Yacht Selector"
        subtitle="Click between Evrima, Ilma, and Luminara to compare specifications, guest capacity, and key strengths:"
        ships={pageData.interactiveYachtShips}
      />

      {/* ─── SECTION 7: BudgetBreakdownTable Detailed Comparison (100% Component-Based from data.json) ─── */}
      <BudgetBreakdownTable data={pageData.detailedComparisonTable} />

      {/* ─── SECTION 8: CostValueAnalysisCards Category Battles (100% Component-Based from data.json) ─── */}
      <CostValueAnalysisCards
        title={pageData.categoryBattlesData.title}
        subtitle={pageData.categoryBattlesData.subtitle}
        includedTitle={pageData.categoryBattlesData.includedTitle}
        extrasTitle={pageData.categoryBattlesData.extrasTitle}
        included={pageData.categoryBattlesData.included}
        extras={pageData.categoryBattlesData.extras}
      />

      {/* ─── SECTION 9: ThreeColumnGrid Yacht vs Yacht Duels (100% Component-Based from data.json) ─── */}
      <ThreeColumnGrid
        title="Yacht vs. Yacht Duels"
        subtitle="Direct head-to-head match-ups to help narrow your choice:"
        items={pageData.yachtDuels}
      />

      {/* ─── SECTION 10: Our Ranking (100% Component-Based UI reading from data.json) ─── */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200">
        <ThreeColumnGrid
          title={pageData.ourRanking.title}
          subtitle={pageData.ourRanking.subtitle}
          items={pageData.ourRanking.items}
        />

        {/* Important Disclaimer Notice */}
        <div className="max-w-[1280px] mx-auto px-6 mt-8">
          <div className="bg-white border-l-4 border-gold-500 rounded-2xl p-6 md:p-8 shadow-md border-y border-r border-slate-200">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-navy-950 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500"></span>
              {pageData.ourRanking.important.title}
            </h4>
            <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed mb-4">
              {pageData.ourRanking.important.disclaimer}
            </p>
            <ul className="space-y-2 font-sans text-sm md:text-base text-slate-700">
              {pageData.ourRanking.important.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: ProsConsCards Itinerary Importance (100% Component-Based from data.json) ─── */}
      <ProsConsCards
        title={pageData.itineraryFactorsData.title}
        prosTitle={pageData.itineraryFactorsData.prosTitle}
        consTitle={pageData.itineraryFactorsData.consTitle}
        bestFor={pageData.itineraryFactorsData.bestFor}
        notBestFor={pageData.itineraryFactorsData.notBestFor}
        bottomNote={pageData.itineraryFactorsData.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 12: BudgetBreakdownTable Value Matrix (100% Component-Based from data.json) ─── */}
      <BudgetBreakdownTable data={pageData.valueComparisonTable} />

      {/* ─── SECTION 13: ProsConsCards First-Time vs Experienced Cruisers (100% Component-Based from data.json) ─── */}
      <ProsConsCards
        title={pageData.cruiserMatchmakerData.title}
        prosTitle={pageData.cruiserMatchmakerData.prosTitle}
        consTitle={pageData.cruiserMatchmakerData.consTitle}
        bestFor={pageData.cruiserMatchmakerData.bestFor}
        notBestFor={pageData.cruiserMatchmakerData.notBestFor}
        bottomNote={pageData.cruiserMatchmakerData.bottomNote}
        type="compare"
        bgClass="bg-white"
      />

      {/* ─── SECTION 14: FAQAccordion (100% Component-Based from data.json) ─── */}
      <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }} />

      {/* ─── SECTION 15: ConclusionSection Final Verdict (100% Component-Based from data.json) ─── */}
      <ConclusionSection sections={pageData.finalVerdictSections} />

      {/* ─── SECTION 16: ExpertCredentials (100% Component-Based) ─── */}
      <ExpertCredentials image={angelaImage} />

      {/* ─── SECTION 17: CenterCTA (100% Component-Based from data.json) ─── */}
      <CenterCTA
        title={pageData.centerCTA.title}
        subtitle={pageData.centerCTA.subtitle}
        buttonLabel={pageData.centerCTA.buttonLabel}
        buttonUrl={pageData.centerCTA.buttonUrl}
      />
    </div>
  );
};

export default RitzCarltonEvrimaVsIlmaVsLuminara;
