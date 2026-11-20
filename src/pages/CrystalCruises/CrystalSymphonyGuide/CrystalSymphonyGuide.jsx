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
import CardGrid from '@/components/ui/CardGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalSymphonyGuide = () => {
  const pageUrl = pageData.seo.canonicalUrl;

  // 1. Crystal Symphony at a Glance Table format for ComparisonTable
  const atAGlanceTableData = {
    title: pageData.atAGlance.title,
    subtitle: pageData.atAGlance.subtitle,
    headers: pageData.atAGlance.headers,
    rows: pageData.atAGlance.rows,
    footnote: pageData.atAGlance.footnote
  };

  // 2. What Is Crystal Symphony Like Cards for CardGrid
  const whatIsItLikeCards = pageData.whatIsItLike.appealsTo.map((appeal, idx) => {
    const icons = ["Sparkles", "Anchor", "Utensils", "Compass", "Award", "Globe"];
    return {
      title: `Core Highlight 0${idx + 1}`,
      description: appeal,
      icon: icons[idx % icons.length]
    };
  });

  // 3. Suites Data Mapping for DetailedInclusionsList
  const suitesDetailedItems = pageData.suitesSection.categories.map((cat) => ({
    title: `${cat.name} • ${cat.tag}`,
    paragraphs: [cat.description],
    lists: [
      {
        title: "Key Suite Features & Inclusions",
        items: cat.features
      }
    ],
    highlight: {
      title: "Best Suited For",
      text: cat.verdict
    }
  }));

  // 4. Suite Decision Steps for StepByStepGuide
  const suiteChoiceSteps = pageData.suitesSection.decisionGuide.options.map((opt, idx) => ({
    step: String(idx + 1),
    title: opt.recommendation,
    description: `${opt.priority}: ${opt.detail}`
  }));

  // 5. Dining Venues for BentoGlassmorphismGrid (All 9 venues)
  const diningBentoItems = pageData.diningSection.venues.map((venue, idx) => ({
    stat: `0${idx + 1}`,
    title: venue.name,
    description: `${venue.cuisine} • ${venue.description} — ${venue.highlights} (${venue.cost})`
  }));

  // 6. Public Spaces for ThreeColumnGrid
  const publicSpaceItems = pageData.publicSpaces.spaces.map((space) => ({
    title: space.name,
    category: space.type,
    description: space.description,
    highlight: space.updateNote,
    placeholderLabel: space.name
  }));

  // 7. Wellness & Fitness for ThreeColumnGrid
  const wellnessItems = pageData.wellnessAndFitness.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    highlight: item.highlight,
    placeholderLabel: item.title
  }));

  // 8. Itinerary Cards for CardGrid
  const itineraryCards = pageData.itineraries.regions.map((region, idx) => {
    const icons = ["Globe", "Sun", "Compass", "Waves", "Anchor", "MapPin", "Compass"];
    return {
      title: region.title,
      description: region.description,
      icon: icons[idx % icons.length]
    };
  });

  // 9. Entertainment & Enrichment Pillars for BrandPillarsShowcase
  const entertainmentPillarsData = {
    title: pageData.entertainment.title,
    subtitle: pageData.entertainment.subtitle,
    pillars: pageData.entertainment.pillars
  };

  // 10. Inclusions Data Mapping for CostValueAnalysisCards
  const inclusionsIncluded = pageData.inclusions.included.map((item) =>
    typeof item === 'string'
      ? { title: item.split(':')[0] || item, description: item.split(':')[1]?.trim() || item }
      : item
  );
  const inclusionsExtras = pageData.inclusions.additional.map((item) =>
    typeof item === 'string'
      ? { title: item.split(':')[0] || item, description: item.split(':')[1]?.trim() || item }
      : item
  );

  // 11. 2025 Refurbishment Highlights for HighlightsSplit
  const refurbishmentItems = [
    {
      title: "November 2025 Dry Dock Scope",
      subtitle: "3-Week Dry Dock Transformation",
      description: pageData.refurbishment.history,
      features: [
        pageData.refurbishment.highlights[0],
        pageData.refurbishment.highlights[1],
        pageData.refurbishment.highlights[2]
      ]
    },
    {
      title: "Public Spaces & Modern Appointments",
      subtitle: "Contemporary Refinements",
      description: "Design refinements intended to align the ship with the aesthetic introduced during its comprehensive 2023 transformation.",
      features: [
        pageData.refurbishment.highlights[3],
        pageData.refurbishment.highlights[4],
        pageData.refurbishment.highlights[5]
      ]
    }
  ];

  // 12. Traveler Personas for ThreeColumnGrid
  const travelerFitItems = pageData.travelerFit.personas.map((persona) => ({
    title: persona.persona,
    category: persona.fit.toUpperCase(),
    description: persona.description,
    placeholderLabel: persona.persona
  }));

  // 13. Symphony vs Serenity Fleet Showdown for ContainedShowdown
  const symphonyShipData = {
    name: "Crystal Symphony",
    features: [
      "Guest Capacity: 606 Guests across 330 Ocean-View Staterooms & Suites",
      "Dining: 9 World-Class Culinary Venues & Intimate Lounges (including Umi Uma & Beefbar)",
      "Dimensions: 781 ft (238 m) Length | 51,068 Gross Tonnage",
      "Refurbishment: Extensively updated in 2023 with November 2025 dry dock enhancements",
      "Suites: Elegant suites and staterooms with private European butler care in all categories",
      "Atmosphere: Classic boutique ocean cruising with agile navigation into smaller, intimate harbors"
    ]
  };

  const serenityShipData = {
    name: "Crystal Serenity",
    features: [
      "Guest Capacity: 740 Guests across 402 Ocean-View Staterooms & Suites",
      "Dining: 10 World-Class Culinary Venues & Lounges",
      "Dimensions: 820 ft (250 m) Length | 68,870 Gross Tonnage",
      "Refurbishment: Transformed in 2023 with scheduled October 2026 dry dock upgrades",
      "Accommodations: Expansive Penthouse Suites up to 1,265 sq. ft. & upcoming May 2028 Owner's Suite",
      "Atmosphere: Spacious ocean liner scale with relaxed luxury pacing and nearly 1:1 staff attention"
    ]
  };

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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/CrystalSymphony/crystal-symphony-hero.webp",
        //   "caption": pageData.seo.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/CrystalSymphony/crystal-symphony-hero.webp",
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
          "Luxury Ocean Cruising",
          "Crystal Cruises",
          "Crystal Symphony",
          "Boutique Ocean Cruises",
          "Private Butler Service",
          "Osteria d'Ovidio",
          "Luxury Suite Selection",
          "Luxury Cruise Planning"
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
            "name": "Crystal Symphony Guide",
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
        watermarkText="SYMPHONY"
      />

      {/* ─── SECTION 3: CRYSTAL SYMPHONY AT A GLANCE (ComparisonTable Component) ─── */}
      <div className="py-6 bg-white">
        <ComparisonTable data={atAGlanceTableData} />
      </div>

      {/* ─── SECTION 4: WHAT IS CRYSTAL SYMPHONY LIKE? (FeatureSplit & CardGrid Components) ─── */}
      <FeatureSplit
        title={pageData.whatIsItLike.title}
        subtitles={["Onboard Atmosphere & Relaxed Luxury"]}
        summary={pageData.whatIsItLike.atmosphere}
        features={[
          pageData.whatIsItLike.appealsTo[0],
          pageData.whatIsItLike.appealsTo[1],
          pageData.whatIsItLike.appealsTo[2]
        ]}
        bestFor={[
          "Nearly 1:1 staff attention with dedicated European butler service in every suite",
          "Boutique-scale luxury ocean cruising with nimble harbor navigation and no crowds"
        ]}
        theme="light"
      />

      <div className="py-6 bg-slate-50">
        <CardGrid
          title="What Discerning Travelers Value Aboard Crystal Symphony"
          subtitle={pageData.whatIsItLike.lead}
          cards={whatIsItLikeCards}
          columns={3}
          stagger={false}
        />
        <div className="max-w-4xl mx-auto px-6 mt-6">
          <AuthorityBox
            eyebrow="CRYSTAL SYMPHONY ATMOSPHERE"
            heading="Intimate Scale Without Compromise"
            quote={pageData.whatIsItLike.closingNote}
            author="Angela Hughes"
            authorRole="CEO of Trips & Ships Luxury Travel"
          />
        </div>
      </div>

      {/* ─── SECTION 5: SUITES & GUEST ROOMS (DetailedInclusionsList & StepByStepGuide Components) ─── */}
      <DetailedInclusionsList
        title={pageData.suitesSection.title}
        intro={[
          pageData.suitesSection.body,
          "Every stateroom and suite features private 24-hour butler attention, pillow selection menus, Italian linens, and marble bathrooms."
        ]}
        items={suitesDetailedItems}
      />

      {/* Suite Selection Roadmap */}
      <div className="py-12 bg-white">
        <StepByStepGuide
          title={pageData.suitesSection.decisionGuide.title}
          subtitle="SUITE SELECTION DECISION ROADMAP"
          steps={suiteChoiceSteps}
          layout="grid"
          columns={3}
        />
      </div>

      {/* ─── SECTION 6: DINING & CULINARY PROGRAM (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.diningSection.title}
        subtitle="9 WORLD-CLASS CULINARY VENUES"
        bentoItems={diningBentoItems}
      />

      {/* Dining Inclusions Authority Box */}
      <div className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AuthorityBox
            eyebrow="DINING INCLUSIONS POLICY"
            heading={pageData.diningSection.inclusionsPolicy.title}
            quote={pageData.diningSection.inclusionsPolicy.content}
            author="Angela Hughes"
            authorRole="CEO of Trips & Ships Luxury Travel"
          />
        </div>
      </div>

      {/* ─── SECTION 7: PUBLIC SPACES & LOUNGES (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.publicSpaces.title}
        subtitle={pageData.publicSpaces.subtitle}
        items={publicSpaceItems}
      />

      {/* ─── SECTION 8: WELLNESS, FITNESS & DECK RECREATION (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.wellnessAndFitness.title}
        subtitle={pageData.wellnessAndFitness.subtitle}
        items={wellnessItems}
      />

      {/* ─── SECTION 9: ENTERTAINMENT & ENRICHMENT (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase data={entertainmentPillarsData} />

      {/* ─── SECTION 10: INCLUSIONS VS ADDITIONAL EXPENSES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.inclusions.title}
        subtitle={pageData.inclusions.subtitle}
        includedTitle={pageData.inclusions.includedTitle}
        extrasTitle={pageData.inclusions.additionalTitle}
        included={inclusionsIncluded}
        extras={inclusionsExtras}
      />

      {/* ─── SECTION 11: ITINERARIES AND DESTINATIONS (CardGrid Component) ─── */}
      <div className="py-6 bg-slate-50">
        <CardGrid
          title={pageData.itineraries.title}
          subtitle={pageData.itineraries.subtitle}
          cards={itineraryCards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ─── SECTION 12: 2025 REFURBISHMENT (HighlightsSplit Component) ─── */}
      <HighlightsSplit
        title={pageData.refurbishment.title}
        subtitle={pageData.refurbishment.history}
        items={refurbishmentItems}
        footerLeft="Deck 10 Classic Suites Redesign"
        footerRight="Public Spaces Aesthetic Refinement"
      />

      {/* ─── SECTION 13: WHO SHOULD CHOOSE CRYSTAL SYMPHONY? (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.travelerFit.title}
        subtitle={pageData.travelerFit.subtitle}
        items={travelerFitItems}
      />

      {/* ─── SECTION 14: CRYSTAL SYMPHONY VS CRYSTAL SERENITY (ContainedShowdown & AuthorityBox Components) ─── */}
      <ContainedShowdown
        title={pageData.comparisonVsSerenity.title}
        brandA={symphonyShipData}
        brandB={serenityShipData}
      />
      <div className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <AuthorityBox
            eyebrow="FLEET COMPARISON VERDICT"
            heading="Symphony vs. Serenity Decision"
            quote={pageData.comparisonVsSerenity.verdict}
            author="Angela Hughes"
            authorRole="CEO of Trips & Ships Luxury Travel"
          />
        </div>
      </div>

      {/* ─── SECTION 15: IS CRYSTAL SYMPHONY WORTH BOOKING? (ProsConsCards Component) ─── */}
      <div className="py-6 bg-slate-50">
        <ProsConsCards
          title={pageData.isItWorthIt.title}
          prosTitle="Key Strengths"
          consTitle="Factors to Consider"
          bestFor={pageData.isItWorthIt.strengths}
          notBestFor={pageData.isItWorthIt.considerations}
          bottomNote={pageData.isItWorthIt.conclusion}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ─── SECTION 16: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Ocean Cruise Authority"
        credentials={pageData.angelaBio.credentials}
        quote={pageData.angelaBio.quote}
        quoteSubtitle="Angela Hughes, CEO & Founder of Trips & Ships Luxury Travel"
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Crystal Symphony",
          subtitle: "Clear, expert answers to the most common questions about suites, dining, and life onboard Crystal Symphony.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 18: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Explore Crystal Symphony?"
        description="Contact Angela Hughes and our luxury cruise specialists to compare current Crystal Symphony itineraries, verify suite availability, and plan your next luxury voyage."
        buttonText="Plan Your Crystal Symphony Cruise"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CrystalSymphonyGuide;

