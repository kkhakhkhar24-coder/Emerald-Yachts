import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Angela Portrait
import angelaPortrait from '@/assets/Media (2).jpg';

// SEO Optimized Assets from assets/RitzCarltonVsSeabourn
import heroBgImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-vs-seabourn-luxury-cruise.jpeg';

// Intro Section Images
import introLifestyleImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-intimate-ship-size.jpg';
import introDiningImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-mistral-dining-terrace.jpg';

// Dual Philosophy
import ritzPhilosophyImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-philosophy-marina.jpg';
import seabournPhilosophyImg from '@/assets/RitzCarltonVsSeabourn/seabourn-cruises-expedition-philosophy-alaska.jpg';

// Ship Size Showdown
import ritzShipImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-intimate-ship-size.jpg';
import seabournShipImg from '@/assets/RitzCarltonVsSeabourn/seabourn-luxury-fleet-kotor-harbor.jpg';

// Suites Tabs
import ritzSuitesTabImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-grand-suite-private-terrace.jpg';
import seabournSuitesTabImg from '@/assets/RitzCarltonVsSeabourn/seabourn-ocean-front-veranda-suite.jpg';

// Service & Dining ZigZag
import ritzServiceImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-mistral-dining-terrace.jpg';
import seabournDiningImg from '@/assets/RitzCarltonVsSeabourn/seabourn-dining-beach-house-caviar-lunch.jpg';

// Atmosphere & Design
import atmosphereDesignImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-atmosphere-design-art-bar.jpg';

// Itineraries & Expedition
import itineraryExpeditionImg from '@/assets/RitzCarltonVsSeabourn/seabourn-expedition-itineraries-alaska-wildlife.jpg';

// Wellness Showdown
import ritzSpaImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-spa-terrace-wellness.jpg';
import seabournWellnessImg from '@/assets/RitzCarltonVsSeabourn/seabourn-wellness-deck-whirlpools.jpeg';

// Entertainment & Enrichment
import enrichmentRitzImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-curated-entertainment-embarkation.jpeg';
import enrichmentSeabournImg from '@/assets/RitzCarltonVsSeabourn/seabourn-conversations-enrichment-destination-valletta.jpg';
import enrichmentVerdictImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-entertainment-pool-bar.jpg';

// Head-to-Head Visual Answers
import battleServiceImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-service-culture-afternoon-tea.jpeg';
import battleFoodImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-culinary-beverage-showdown.jpg';
import battleSuitesImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-suites-comparison.jpg';
import battleExpeditionImg from '@/assets/RitzCarltonVsSeabourn/seabourn-antarctica-arctic-expedition-cruising.jpg';
import battleWatersportsImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-watersports-marina-sea-access.jpeg';
import battleExclusivityImg from '@/assets/RitzCarltonVsSeabourn/ritz-carlton-vs-seabourn-exclusivity-superyacht.jpg';

// Travel Advisor Framework
import frameworkYachtImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-private-yacht-feeling.jpg';
import frameworkExpeditionImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-antarctica-arctic-expedition.jpg';
import frameworkBrandImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-ritz-carlton-brand-loyalty.jpeg';
import frameworkDiningImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-dining-caviar-priority.jpg';
import frameworkItineraryImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-itinerary-port-access.jpeg';
import frameworkUndecidedImg from '@/assets/RitzCarltonVsSeabourn/travel-advisor-framework-undecided-traveler-guide.jpg';

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
import VideoEmbed from '@/components/ui/VideoEmbed';

const RitzCarltonVsSeabourn = () => {
  // Suite Tabs with Images
  const suitesTabbedItems = (pageData.suitesTabbedData || []).map((tab, idx) => ({
    ...tab,
    image: idx === 0 ? ritzSuitesTabImg : seabournSuitesTabImg
  }));

  // Entertainment & Enrichment Cards with Images
  const enrichmentImages = [enrichmentRitzImg, enrichmentSeabournImg, enrichmentVerdictImg];
  const enrichmentItems = (pageData.enrichmentData || []).map((item, idx) => ({
    ...item,
    image: enrichmentImages[idx % enrichmentImages.length]
  }));

  // Head-to-Head Answer Cards with Images
  const headToHeadImages = [
    battleServiceImg,
    battleFoodImg,
    battleSuitesImg,
    battleExpeditionImg,
    battleWatersportsImg,
    battleExclusivityImg
  ];
  const headToHeadItems = (pageData.headToHeadAnswers || []).map((item, idx) => ({
    ...item,
    image: headToHeadImages[idx % headToHeadImages.length]
  }));

  // Travel Advisor Framework Cards with Images
  const frameworkImages = [
    frameworkYachtImg,
    frameworkExpeditionImg,
    frameworkBrandImg,
    frameworkDiningImg,
    frameworkItineraryImg,
    frameworkUndecidedImg
  ];
  const frameworkItems = (pageData.travelAdvisorFramework || []).map((item, idx) => ({
    ...item,
    image: frameworkImages[idx % frameworkImages.length]
  }));

  // Schema JSON-LD
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn",
        "name": "Ritz-Carlton Yacht Collection vs. Seabourn: Which Luxury Cruise Is Right for You?",
        "headline": "Ritz-Carlton Yacht Collection vs. Seabourn",
        "description": "A detailed comparison of Ritz-Carlton Yacht Collection and Seabourn covering suites, service, dining, inclusions, itineraries, expedition cruising and overall luxury cruise value.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-vs-seabourn-luxury-cruise.jpeg",
          "caption": "Ritz-Carlton Yacht Collection vs. Seabourn: Which Luxury Cruise Is Right for You?"
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-vs-seabourn-luxury-cruise.jpeg",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection vs. Seabourn",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-vs-seabourn/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-vs-seabourn-luxury-cruise.jpeg" />
        <meta property="og:image:alt" content="Ritz-Carlton Yacht Collection vs. Seabourn: Which Luxury Cruise Is Right for You?" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonVsSeabourn/ritz-carlton-yacht-vs-seabourn-luxury-cruise.jpeg" />
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
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        backgroundImage={heroBgImg}
      />

      {/* ─── SECTION 2: PremiumIntro Quick Answer / Verdict ─── */}
      <PremiumIntro
        sections={pageData.quickAnswer}
        image1={introLifestyleImg}
        image2={introDiningImg}
        alt1="Ritz-Carlton Yacht Collection vs Seabourn Private Yacht Lifestyle and Intimacy"
        alt2="Ritz-Carlton and Seabourn Luxury Cruise Dining Experience"
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: DualPhilosophyShowcase The Biggest Difference ─── */}
      <DualPhilosophyShowcase
        data={pageData.dualPhilosophy}
        imageSailing={ritzPhilosophyImg}
        imageAllSuite={seabournPhilosophyImg}
      />

      {/* ─── SECTION 4: BudgetBreakdownTable Quick Verdict at a Glance ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 4A: BrandPillarsShowcase Core Differences ─── */}
      <BrandPillarsShowcase data={pageData.coreDifferencePillars} />

      {/* ─── Video Feature Section ─── */}
      <VideoEmbed
        data={{
          youtubeId: "YfsfOloEHOo",
          title: "Ritz-Carlton Yacht Collection vs. Seabourn",
          description: "Compare the luxury yacht experience of Ritz-Carlton with Seabourn's ultra-luxury cruise hospitality."
        }}
      />

      {/* ─── SECTION 5: HeadToHeadVisualShowdown Ship Size & Intimacy ─── */}
      {pageData.shipSizeShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.shipSizeShowdownData}
          image1={ritzShipImg}
          image2={seabournShipImg}
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
        competitors={suitesTabbedItems}
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
          images={[ritzServiceImg, seabournDiningImg]}
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
          image={atmosphereDesignImg}
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
          image={itineraryExpeditionImg}
        />
      )}

      {/* ─── SECTION 9A: HeadToHeadVisualShowdown Wellness Comparison ─── */}
      {pageData.wellnessShowdownData && (
        <HeadToHeadVisualShowdown
          data={pageData.wellnessShowdownData}
          image1={ritzSpaImg}
          image2={seabournWellnessImg}
        />
      )}

      {/* ─── SECTION 9B: ThreeColumnGrid Entertainment & Enrichment ─── */}
      {enrichmentItems && (
        <ThreeColumnGrid
          title="Entertainment & Enrichment: Ritz-Carlton vs. Seabourn"
          subtitle="Comparing onboard activities, enrichment programs, and guest experience philosophy:"
          items={enrichmentItems}
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
        items={headToHeadItems}
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
        items={frameworkItems}
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
