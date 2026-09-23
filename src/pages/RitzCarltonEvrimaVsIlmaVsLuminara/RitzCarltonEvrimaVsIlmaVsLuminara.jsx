import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Fleet Comparison Assets
import heroBgImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-vs-luminara-which-ritz-carlton-yacht-is-best.jpg';
import introLifestyleImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-yacht-fleet-comparison-verdict.jpg';
import introDiningImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-yacht-suite-dining-experience.jpg';

// Tabbed Profiles Images
import tabEvrimaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-evrima-intimate-luxury-yacht.jpeg';
import tabIlmaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-ilma-next-generation-yacht.jpeg';
import tabLuminaraImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-luminara-spacious-destination-yacht.jpeg';

// Interactive Fleet Selector Images
import selectorEvrimaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-intimate-marina-terrace.jpeg';
import selectorIlmaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ilma-sun-soaked-pool-deck.jpg';
import selectorLuminaraImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/luminara-enhanced-pool-deck.jpg';

// Yacht Duels Images (3 Cards)
import duelEvrimaIlmaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-yacht-duel.jpg';
import duelIlmaLuminaraImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ilma-vs-luminara-yacht-duel.jpg';
import duelEvrimaLuminaraImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-luminara-yacht-duel.jpeg';

// Our Ranking Images (3 Cards)
import rankIlmaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ilma-best-overall-luxury-yacht.jpg';
import rankLuminaraImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/luminara-best-for-space-and-destinations.jpg';
import rankEvrimaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-best-for-intimacy-yacht.jpg';

// Final CTA Image
import finalCtaImg from '@/assets/RitzCarltonEvrimaVsIlmaVsLuminara/plan-ritz-carlton-yacht-voyage-advisor.jpg';


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
import VideoEmbed from '@/components/ui/VideoEmbed';

const RitzCarltonEvrimaVsIlmaVsLuminara = () => {
  // Map images to Tabbed Comparison Profiles
  const tabbedComparisonData = [
    {
      ...pageData.yachtTabbedComparisonData[0],
      image: tabEvrimaImg
    },
    {
      ...pageData.yachtTabbedComparisonData[1],
      image: tabIlmaImg
    },
    {
      ...pageData.yachtTabbedComparisonData[2],
      image: tabLuminaraImg
    }
  ];

  // Map images to Interactive Fleet Selector
  const interactiveYachtShips = [
    {
      ...pageData.interactiveYachtShips[0],
      image: selectorEvrimaImg
    },
    {
      ...pageData.interactiveYachtShips[1],
      image: selectorIlmaImg
    },
    {
      ...pageData.interactiveYachtShips[2],
      image: selectorLuminaraImg
    }
  ];

  // Map images to Yacht Duels
  const yachtDuelsItems = [
    {
      ...pageData.yachtDuels[0],
      image: duelEvrimaIlmaImg,
      placeholderLabel: "Evrima vs Ilma - Head-to-Head Ritz-Carlton Yacht Comparison"
    },
    {
      ...pageData.yachtDuels[1],
      image: duelIlmaLuminaraImg,
      placeholderLabel: "Ilma vs Luminara - Next-Generation Ritz-Carlton Yacht Comparison"
    },
    {
      ...pageData.yachtDuels[2],
      image: duelEvrimaLuminaraImg,
      placeholderLabel: "Evrima vs Luminara - Intimacy vs Space & Destinations"
    }
  ];

  // Map images to Our Ranking
  const ourRankingItems = [
    {
      ...pageData.ourRanking.items[0],
      image: rankIlmaImg,
      placeholderLabel: "Ritz-Carlton Ilma - Best Overall Luxury Yacht Rating"
    },
    {
      ...pageData.ourRanking.items[1],
      image: rankLuminaraImg,
      placeholderLabel: "Ritz-Carlton Luminara - Best for Space & Destinations"
    },
    {
      ...pageData.ourRanking.items[2],
      image: rankEvrimaImg,
      placeholderLabel: "Ritz-Carlton Evrima - Best for Small-Ship Intimacy"
    }
  ];



  // Schema JSON-LD
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara",
        "name": "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?",
        "headline": "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?",
        "description": "Compare Ritz-Carlton Yacht Collection's Evrima, Ilma and Luminara by size, suites, design, dining, destinations, amenities and atmosphere.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-vs-luminara-which-ritz-carlton-yacht-is-best.jpg",
          "caption": "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?"
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-vs-luminara-which-ritz-carlton-yacht-is-best.jpg",
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
        "@type": "ItemList",
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara/#yachts",
        "name": "Ritz-Carlton Yacht Collection Fleet",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Evrima",
            "image": "https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-evrima-intimate-luxury-yacht.jpeg"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ilma",
            "image": "https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-ilma-next-generation-yacht.jpeg"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Luminara",
            "image": "https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/ritz-carlton-luminara-spacious-destination-yacht.jpeg"
          }
        ]
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
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader with over 40 years of experience across 121 countries.",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara/#breadcrumb",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-evrima-vs-ilma-vs-luminara/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-vs-luminara-which-ritz-carlton-yacht-is-best.jpg" />
        <meta property="og:image:alt" content="Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonEvrimaVsIlmaVsLuminara/evrima-vs-ilma-vs-luminara-which-ritz-carlton-yacht-is-best.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: ComparisonHero (100% Component-Based from data.json) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBgImg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Quick Answer (100% Component-Based from data.json) ─── */}
      <PremiumIntro 
        sections={pageData.quickAnswer}
        image1={introLifestyleImg}
        image2={introDiningImg}
        alt1="Evrima vs Ilma vs Luminara - Ritz-Carlton Yacht Fleet Overview"
        alt2="Ritz-Carlton Yacht Collection Suite & Dining Experience"
        watermarkText="Verdict"
      />

      {/* ─── SECTION 3: BudgetBreakdownTable Fleet at a Glance (100% Component-Based from data.json) ─── */}
      <BudgetBreakdownTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 4: BrandPillarsShowcase Core Differences (100% Component-Based from data.json) ─── */}
      <BrandPillarsShowcase
        data={pageData.coreDifferencePillars}
      />

      {/* ─── SECTION 5: TabbedComparison Detailed Yacht Profiles (100% Component-Based from data.json) ─── */}
      <TabbedComparison
        title="Detailed Yacht Profiles: Evrima, Ilma & Luminara"
        mainBrand={{ name: "Fleet Comparison" }}
        competitors={tabbedComparisonData}
        hideVs={true}
        leftLabel="Specifications & Features"
        rightLabel="Who Should Choose & Verdict"
      />

      {/* ─── SECTION 6: InteractiveFleetComparison Interactive Yacht Selector (100% Component-Based from data.json) ─── */}
      <InteractiveFleetComparison
        title="Interactive Ritz-Carlton Yacht Selector"
        subtitle="Click between Evrima, Ilma, and Luminara to compare specifications, guest capacity, and key strengths:"
        ships={interactiveYachtShips}
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
        items={yachtDuelsItems}
      />

      {/* ─── SECTION 10: Our Ranking (100% Component-Based UI reading from data.json) ─── */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200">
        <ThreeColumnGrid
          title={pageData.ourRanking.title}
          subtitle={pageData.ourRanking.subtitle}
          items={ourRankingItems}
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

      {/* ─── SECTION 14: Video Section Component (VideoEmbed Component) ─── */}
      <VideoEmbed
        data={{
          youtubeId: "sQPnGRkiLdg",
          title: "Experience Evrima, Ilma & Luminara",
          description: "Watch what makes each yacht in The Ritz-Carlton Yacht Collection distinct, intimate, and extraordinary."
        }}
      />

      {/* ─── SECTION 15: FAQAccordion (100% Component-Based from data.json) ─── */}
      <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }} />

      {/* ─── SECTION 16: ConclusionSection Final Verdict (100% Component-Based from data.json) ─── */}
      <ConclusionSection sections={pageData.finalVerdictSections} />

      {/* ─── SECTION 17: ExpertCredentials (100% Component-Based) ─── */}
      <ExpertCredentials image={angelaImage} />

      {/* ─── SECTION 18: CenterCTA (100% Component-Based from data.json) ─── */}
      <CenterCTA
        title={pageData.centerCTA.title}
        description={pageData.centerCTA.subtitle}
        buttonText={pageData.centerCTA.buttonLabel}
        buttonLink={pageData.centerCTA.buttonUrl}
        image={finalCtaImg}
        imagePosition="object-[center_55%]"
      />
    </div>
  );
};

export default RitzCarltonEvrimaVsIlmaVsLuminara;
