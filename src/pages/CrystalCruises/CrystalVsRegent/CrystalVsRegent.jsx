import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// UI System Components from RitzCarltonVsSeabourn
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import HeadToHeadVisualShowdown from '@/components/ui/HeadToHeadVisualShowdown';
import TabbedComparison from '@/components/ui/TabbedComparison';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import FeatureSplit from '@/components/ui/FeatureSplit';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalVsRegent = () => {
  // Inclusions Data Mapping for DetailedInclusionsList
  const inclusionsItems = [
    {
      title: pageData.inclusionsComparison.crystalTitle,
      paragraphs: [
        "Crystal Cruises focuses on a refined, restaurant-led luxury experience with attentive butler service in every stateroom and suite category.",
        "Shore excursions are unbundled from the standard fare, giving guests the flexibility to explore independently or choose bespoke private arrangements."
      ],
      lists: [
        {
          title: "Standard Fare Inclusions",
          items: pageData.inclusionsComparison.crystalItems
        }
      ],
      highlight: {
        title: "Crystal Value Focus",
        text: "Ideal for travelers who want world-class culinary partnerships, personal butler service across all rooms, and complete control over their shoreside spending."
      }
    },
    {
      title: pageData.inclusionsComparison.regentTitle,
      paragraphs: [
        "Regent Seven Seas Cruises delivers one of the cruise industry's most comprehensive all-inclusive standard packages.",
        "Nearly all shipboard and shoreside elements are bundled upfront, from unlimited shore excursions to valet laundry and specialty restaurants."
      ],
      lists: [
        {
          title: "Standard Fare Inclusions",
          items: pageData.inclusionsComparison.regentItems
        }
      ],
      highlight: {
        title: "Regent Value Focus",
        text: pageData.inclusionsComparison.verdict
      }
    }
  ];

  // HeadToHead Data Mapping for Fleet Comparison
  const fleetShowdownData = {
    title: pageData.fleetShowdown.title,
    subtitle: pageData.fleetShowdown.subtitle,
    brand1: {
      name: "Crystal Cruises",
      style: "740 & 606 Guests • Refurbished 2023",
      cabin: "Crystal Serenity & Symphony",
      excursions: "Spacious wrap-around teak promenade decks",
      vibe: pageData.fleetShowdown.crystal.takeaway
    },
    brand2: {
      name: "Regent Seven Seas",
      style: "490–746 Guests • Modern All-Suite Fleet",
      cabin: "Explorer, Splendor, Grandeur & Prestige Class",
      excursions: "All-Suite, all-balcony architectural design",
      vibe: pageData.fleetShowdown.regent.takeaway
    },
    verdict: {
      title: "Fleet Takeaway",
      description: "Choose Crystal if you prefer established ships with traditional ocean liner proportions and high crew-to-guest ratios. Choose Regent if you want a larger modern fleet of all-suite vessels with guaranteed private verandas."
    }
  };

  // Tabbed Suites Comparison Items
  const suitesTabbedItems = [
    {
      name: "Crystal Cruises Suites",
      mainBrandStrengths: pageData.suitesComparison[0].features,
      competitorStrengths: [
        "European butler service included in 100% of guest rooms and suites",
        "Dedicated Single Guest Rooms for solo travelers with zero supplement",
        "Expansive Penthouse suites up to 1,265 sq. ft. with wrap-around balconies",
        pageData.suitesComparison[0].verdict
      ]
    },
    {
      name: "Regent Seven Seas Suites",
      mainBrandStrengths: pageData.suitesComparison[1].features,
      competitorStrengths: [
        "100% All-Suite fleet architecture across every vessel",
        "Private balconies on 98%+ of all suites across the fleet",
        "Custom Elite Slumber beds and lavish marble master bathrooms",
        pageData.suitesComparison[1].verdict
      ]
    }
  ];

  // JSON-LD Structured Data Schema (Matching reference schema architecture)
  const crystalVsRegentImageUrl =
    pageData.seo.primaryImageUrl ||
    "https://www.tripsandships.com/assets/CrystalCruises/CrystalVsRegent/crystal-vs-regent-hero.jpg";

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
        //   "url": crystalVsRegentImageUrl,
        //   "caption": pageData.seo.title
        // },
        // "image": crystalVsRegentImageUrl,
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
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Crystal Cruises",
          "Regent Seven Seas Cruises",
          "Luxury Cruise Comparison",
          "All-Inclusive Cruising",
          "Luxury Cruise Suites",
          "Luxury Cruise Dining",
          "Luxury Cruise Inclusions"
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
            "name": "Crystal Cruises",
            "item": "https://www.tripsandships.com/crystal-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Crystal Cruises vs. Regent Seven Seas",
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
        <meta property="og:site_name" content="Trips & Ships Luxury Travel" />
        {/* <meta property="og:image" content={crystalVsRegentImageUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content={crystalVsRegentImageUrl} /> */}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO ─── */}
      <ComparisonHero
        byline={true}
        updated={pageData.hero.lastUpdated}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={pageData.quickAnswer}
        watermarkText="VERDICT"
      />

      {/* ─── QUICK COMPARISON TABLE (ComparisonTable Component) ─── */}
      <div className="py-6 bg-white">
        <ComparisonTable data={pageData.quickComparisonTable} />
      </div>

      {/* ─── SECTION 1: VALUE SHOWDOWN (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.valueShowdown.title}
        subtitle={pageData.valueShowdown.subtitle}
        includedTitle={pageData.valueShowdown.includedTitle}
        extrasTitle={pageData.valueShowdown.extrasTitle}
        included={pageData.valueShowdown.included}
        extras={pageData.valueShowdown.extras}
      />

      {/* ─── SECTION 2: WHAT'S INCLUDED (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.inclusionsComparison.title}
        intro={[pageData.inclusionsComparison.subtitle]}
        items={inclusionsItems}
      />

      {/* ─── SECTION 3: SHIPS AND FLEET EXPERIENCE (HeadToHeadVisualShowdown Component) ─── */}
      <HeadToHeadVisualShowdown
        data={fleetShowdownData}
        image1={undefined}
        image2={undefined}
      />

      {/* ─── SECTION 4: SUITES & ACCOMMODATION (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.suitesComparison[0].title}
        mainBrand={{ name: "Crystal Cruises" }}
        competitors={suitesTabbedItems}
        hideVs={true}
        leftLabel="Crystal Features"
        rightLabel="Regent Comparison"
      />

      {/* ─── SECTION 5: DINING SHOWDOWN (LuxuryZigZagShowcase Component) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.diningShowdown.title}
        subtitle={pageData.diningShowdown.subtitle}
        items={pageData.diningShowdown.items}
        images={[undefined, undefined]}
      />

      {/* ─── SECTION 6: SHORE EXCURSIONS (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.shoreExcursions.title}
        subtitles={[
          pageData.shoreExcursions.crystalTitle,
          pageData.shoreExcursions.regentTitle
        ]}
        summary={pageData.shoreExcursions.subtitle}
        features={[
          pageData.shoreExcursions.crystalDesc,
          pageData.shoreExcursions.regentDesc,
          pageData.shoreExcursions.verdict
        ]}
        bestFor={[
          "Crystal: Independent travelers seeking custom private arrangements",
          "Regent: Cruisers who want multiple guided excursions daily included"
        ]}
        theme="light"
      />

      {/* ─── SECTION 7: BEVERAGES, WI-FI & GRATUITIES (ComparisonTable Component) ─── */}
      <div className="py-12 bg-white">
        <ComparisonTable data={pageData.beveragesWifiGratuitiesTable} />
      </div>

      {/* ─── SECTION 8: FLIGHTS, TRANSFERS & PRE-CRUISE HOTELS (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.flightsAndHotels.title}
        subtitle="AIR & LAND ARRANGEMENTS"
        bentoItems={pageData.flightsAndHotels.bentoItems}
      />

      {/* ─── SECTION 9: COUPLES, FAMILIES AND SOLO TRAVELERS (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.travelerTypes.title}
        subtitle={pageData.travelerTypes.subtitle}
        items={pageData.travelerTypes.items}
      />

      {/* ─── SECTION 10: LONGER VOYAGES & WORLD CRUISES (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.longerVoyages.title}
        subtitle="WORLD CRUISE & EXTENDED VOYAGE ROADMAP"
        steps={pageData.longerVoyages.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 11: PROS AND CONSIDERATIONS (ProsConsCards Component - Side-by-Side) ─── */}
      <div className="py-6 bg-slate-50">
        <ProsConsCards
          title={`${pageData.prosAndCons.title} Crystal Cruises`}
          prosTitle="Why Choose Crystal"
          consTitle="Consider Before Booking"
          bestFor={pageData.prosAndCons.crystalPros}
          notBestFor={pageData.prosAndCons.crystalCons}
          type="compare"
          bgClass="bg-slate-50"
        />
        <ProsConsCards
          title={`${pageData.prosAndCons.title} Regent Seven Seas`}
          prosTitle="Why Choose Regent"
          consTitle="Consider Before Booking"
          bestFor={pageData.prosAndCons.regentPros}
          notBestFor={pageData.prosAndCons.regentCons}
          type="compare"
          bgClass="bg-white"
        />
      </div>

      {/* ─── SECTION 12: FINAL VERDICT (AuthorityBox & ProsConsCards Component) ─── */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 mb-6">
          <AuthorityBox
            eyebrow="EXPERT COMPARISON VERDICT"
            heading={pageData.finalVerdict.title}
            quote={pageData.finalVerdict.recommendation}
            author="Angela Hughes"
            authorRole="CEO of Trips & Ships Luxury Travel"
          />
        </div>

        <ProsConsCards
          title="Summary Decision Guide: Which Should You Book?"
          prosTitle="Choose Crystal If:"
          consTitle="Choose Regent If:"
          bestFor={pageData.finalVerdict.crystalPoints}
          notBestFor={pageData.finalVerdict.regentPoints}
          type="compare"
          bgClass="bg-white"
        />
      </div>

      {/* ─── SECTION 13: ANGELA HUGHES AUTHORITY & CREDENTIALS ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Ocean Cruise Authority"
        credentials={[
          "Over 4 Decades Designing Bespoke Luxury Travel Experiences",
          "Traveled Firsthand to 121+ Countries Across Seven Continents",
          "Certified Luxury Ocean & Small Ship Cruise Specialist",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Travel Leaders Network Luxury Travel Influencer of the Year",
          "Named Most Influential Women in Travel 2026 by TravelPulse"
        ]}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 14: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Crystal vs. Regent Seven Seas",
          subtitle: "Clear, expert answers to the most common questions when choosing between Crystal and Regent.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 15: FINAL CENTER CTA ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalVsRegent;

