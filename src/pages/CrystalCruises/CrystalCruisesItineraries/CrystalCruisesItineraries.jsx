import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Shared UI System Components (Exact Architecture from CrystalSerenityGuide & CrystalVsRegent)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalCruisesItineraries = () => {
  const pageUrl = pageData.seo.canonicalUrl;

  // 1. Crystal Itineraries at a Glance Table format for ComparisonTable
  const atAGlanceTableData = {
    title: pageData.atAGlance.title,
    subtitle: pageData.atAGlance.subtitle,
    headers: pageData.atAGlance.headers,
    rows: pageData.atAGlance.rows,
    footnote: pageData.atAGlance.footnote
  };

  // 2. 10 Detailed Regions Mapping for ThreeColumnGrid (Using Placeholders for now)
  const regionGridItems = pageData.regionsDetailed.map((region) => ({
    title: region.name,
    category: region.tag,
    description: region.description,
    features: region.highlights.slice(0, 4),
    highlight: `Best for: ${region.verdict}`,
    image: null,
    placeholderLabel: region.name
  }));

  // 3. Voyage Formats for BrandPillarsShowcase
  const voyageFormatsPillarsData = {
    title: pageData.voyageFormats.title,
    subtitle: pageData.voyageFormats.subtitle,
    pillars: [
      {
        icon: "ship",
        title: "Standard Regional Voyages (7–14 Nights)",
        description: "Curated regional itineraries across a single destination like the Mediterranean, Caribbean, or Alaska. Balanced cadence of immersive port days and relaxing sea days with full butler hospitality."
      },
      {
        icon: "compass",
        title: "Crystal Grand Journeys (54–85 Nights)",
        description: "Extended multi-region journeys connecting continents without repacking. Includes overnight port stays, private chauffeur transfers, and exclusive gala events (e.g., 54-night Lisbon to Reykjavik, 71-night New York to Fort Lauderdale, 85-night Fort Lauderdale to Singapore)."
      },
      {
        icon: "star",
        title: "Crystal World Cruises (127–150 Nights)",
        description: "The ultimate global circumnavigation connecting up to 39 countries in one continuous voyage. Features complimentary business-class airfare, baggage valet, private ambassador hosting, and exclusive shoreside galas (e.g., 2027 Stories of the South Seas, 2028 Treasures of the Tides, 2029 Connecting Cultures)."
      },
      {
        icon: "window",
        title: "Consecutive Voyage Combinations",
        description: "Combine back-to-back sailings into customized extended journeys. Keep the same suite throughout, enjoy seamless port transitions, and unlock special combined voyage savings."
      }
    ]
  };

  // 4. 7-Step Itinerary Selection Framework for StepByStepGuide
  const decisionSteps = pageData.decisionGuide7Steps.steps.map((item) => ({
    step: item.step,
    title: item.title,
    description: item.description
  }));

  // 5. Duration Planning Matrix for ComparisonTable
  const durationMatrixTableData = {
    title: pageData.decisionGuide7Steps.durationTable.title,
    subtitle: "Select the ideal voyage length based on your personal schedule and vacation availability.",
    headers: pageData.decisionGuide7Steps.durationTable.headers,
    rows: pageData.decisionGuide7Steps.durationTable.rows
  };

  // 6. Grand Journey and World Cruise Benefits for CostValueAnalysisCards
  const benefitsIncluded = pageData.benefitsSection.included.map((item) =>
    typeof item === 'string'
      ? { title: item.split(':')[0] || item, description: item.split(':')[1]?.trim() || item }
      : item
  );
  const benefitsExtras = pageData.benefitsSection.additional.map((item) =>
    typeof item === 'string'
      ? { title: item.split(':')[0] || item, description: item.split(':')[1]?.trim() || item }
      : item
  );

  // Exact JSON-LD Structured Data Schema matching specification
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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesItineraries/crystal-itineraries-hero.webp",
        //   "caption": pageData.seo.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesItineraries/crystal-itineraries-hero.webp",
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
          "Luxury Cruise Planning",
          "Crystal Cruises Itineraries",
          "Grand Journeys",
          "World Cruises",
          "Mediterranean Luxury Cruises",
          "Alaska Luxury Cruises",
          "Extended Ocean Voyages",
          "Luxury Cruise Travel Planning"
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
            "name": "Crystal Cruises Itineraries",
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
    <div className="bg-white min-h-screen text-navy-900 font-sans selection:bg-gold-500 selection:text-white">
      {/* ─── SEO HEAD TAGS & STRUCTURED DATA ─── */}
      <Helmet>
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageData.seo.metaTitle} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
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
        sections={[
          {
            heading: pageData.introSection.heading,
            paragraphs: pageData.introSection.paragraphs
          }
        ]}
        watermarkText="ITINERARIES"
      />

      {/* ─── SECTION 3: ITINERARIES AT A GLANCE (ComparisonTable Component) ─── */}
      <ComparisonTable data={atAGlanceTableData} />

      {/* ─── SECTION 4: 10 REGIONS IN-DEPTH (ThreeColumnGrid Component with Destination Imagery) ─── */}
      <ThreeColumnGrid
        title="Explore Crystal Cruises Destinations by Region"
        subtitle="Worldwide Luxury Ocean Itineraries & Signature Regional Highlights"
        items={regionGridItems}
      />

      {/* ─── SECTION 5: VOYAGE FORMATS & GRAND JOURNEYS (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase data={voyageFormatsPillarsData} />

      {/* ─── SECTION 6: 7-STEP ITINERARY DECISION FRAMEWORK (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.decisionGuide7Steps.title}
        subtitle="HOW TO CHOOSE YOUR DESTINATION & VOYAGE"
        steps={decisionSteps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 7: VOYAGE DURATION PLANNING MATRIX (ComparisonTable Component) ─── */}
      <ComparisonTable data={durationMatrixTableData} />

      {/* ─── SECTION 8: SERENITY VS SYMPHONY SHIP CHOICE (ContainedShowdown & AuthorityBox Components) ─── */}
      <ContainedShowdown
        title={pageData.shipShowdown.title}
        brandA={pageData.shipShowdown.serenity}
        brandB={pageData.shipShowdown.symphony}
      />
      <div className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <AuthorityBox
            eyebrow="SHIP SELECTION GUIDANCE"
            heading="Choosing Between Serenity and Symphony"
            quote={pageData.shipShowdown.verdict}
            author="Angela Hughes"
            authorRole="CEO of Trips & Ships Luxury Travel"
          />
        </div>
      </div>

      {/* ─── SECTION 9: GRAND JOURNEY & WORLD CRUISE BENEFITS (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.benefitsSection.title}
        subtitle={pageData.benefitsSection.subtitle}
        includedTitle={pageData.benefitsSection.includedTitle}
        extrasTitle={pageData.benefitsSection.additionalTitle}
        included={benefitsIncluded}
        extras={benefitsExtras}
      />

      {/* ─── SECTION 10: FIRST-TIME CRUISERS & COMBINING VOYAGES (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.firstTimeAndCombining.title}
        subtitles={[
          pageData.firstTimeAndCombining.firstTimeTitle,
          pageData.firstTimeAndCombining.combiningTitle
        ]}
        summary={pageData.firstTimeAndCombining.firstTimeDesc}
        features={[
          pageData.firstTimeAndCombining.combiningDesc,
          "Seamless back-to-back booking without changing suites or packing bags between segments."
        ]}
        bestFor={pageData.firstTimeAndCombining.checklist}
        theme="light"
      />

      {/* ─── SECTION 11: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE SPECIALIST"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Ocean Cruise Authority"
        credentials={pageData.angelaBio.credentials}
        quote={pageData.angelaBio.quote}
        quoteSubtitle="Angela Hughes, CEO & Founder of Trips & Ships Luxury Travel"
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 12: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Crystal Cruises Itineraries",
          subtitle: "Clear, expert answers to help you select destinations, voyage lengths, and sailing formats.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 13: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Plan Your Crystal Cruises Itinerary?"
        description="Connect with Angela Hughes and our luxury cruise specialists to compare upcoming worldwide sailings, check suite availability, and curate your bespoke journey."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CrystalCruisesItineraries;

