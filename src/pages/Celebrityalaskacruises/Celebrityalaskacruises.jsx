import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Shared UI System Components (Exact EmeraldYachts Component Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function CelebrityAlaskaCruises() {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: pageData.intro.heading,
      paragraphs: pageData.intro.paragraphs
    },
    {
      heading: pageData.intro.quickAnswerHeading,
      paragraphs: [pageData.intro.quickAnswer]
    }
  ];

  // 2. Data mapping for At a Glance Table (Section 3)
  const glanceTableData = {
    title: "Celebrity Alaska Cruises at a Glance",
    description: "Celebrity's Alaska program currently includes a variety of cruise routes and Cruisetours, with exact ships, dates and destinations varying by sailing.",
    headers: ["Program Feature", "Celebrity Alaska Program Specification"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Schema.org JSON-LD graph (Exact Ritz-Carlton pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/alaska/",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-alaska-cruises.jpg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/images/celebrity-alaska-cruises.jpg",
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
        "description": pageData.angelaBio.bio,
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Alaska Cruises",
          "Celebrity Cruises",
          "Denali Cruisetours",
          "Glacier Cruising",
          "Inside Passage",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/#breadcrumb",
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Celebrity Alaska Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises/alaska/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/alaska/#faq",
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
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/images/celebrity-alaska-cruises.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/images/celebrity-alaska-cruises.jpg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: Comparison Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Narrative Intro & Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="ALASKA"
        alt1="Celebrity Alaska Cruises - Glaciers and Inside Passage"
      />

      {/* ─── SECTION 3: Program Overview Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={glanceTableData}
      />

      {/* ─── SECTION 4: Why Choose Celebrity Alaska Cruises (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Choose Celebrity Alaska Cruises?",
          subtitle: "Alaska is different from a conventional cruise destination. The scenery is a major part of the journey, with ships sailing through waters surrounded by mountains, forests, glaciers and wildlife habitats. The experience combines scenic cruising, adventure and luxury in one Alaska vacation.",
          pillars: pageData.whyChoose
        }}
      />

      {/* ─── SECTION 5: Celebrity Alaska Cruise Ships & Factors (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Alaska Cruise Ships"
        subtitles={["The Fleet & Itinerary Selection"]}
        summary="Celebrity's Alaska fleet varies by season and itinerary. Current and recent Alaska itineraries include ships such as Celebrity Solstice, Celebrity Summit and Celebrity Edge, with specific ship assignments changing according to the sailing. When comparing Celebrity Alaska cruises, travelers should look at the ship and itinerary together."
        features={pageData.fleetHighlights}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 6: Northbound Glacier Itinerary (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.northboundGlacier.title}
        subtitles={["Vancouver to Seward 7-Night Route: " + pageData.northboundGlacier.islands.join(" • ")]}
        summary={pageData.northboundGlacier.summary}
        bestFor={pageData.northboundGlacier.bestFor}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 7: Southbound Glacier Itinerary (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.southboundGlacier.title}
        subtitles={["Seward to Vancouver 7-Night Route: " + pageData.southboundGlacier.islands.join(" • ")]}
        summary={pageData.southboundGlacier.summary}
        bestFor={pageData.southboundGlacier.bestFor}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 8: Northbound vs. Southbound Pair Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.glacierPairTable}
      />

      {/* ─── SECTION 9: Hubbard Glacier Signature Experience (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.hubbardGlacier.title}
        subtitles={["Signature Glacier Experience: " + pageData.hubbardGlacier.stops.join(" • ")]}
        summary={pageData.hubbardGlacier.summary}
        bestFor={pageData.hubbardGlacier.stops}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 10: Dawes Glacier Signature Experience (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.dawesGlacier.title}
        subtitles={["Endicott Arm & Dawes Glacier Itineraries"]}
        summary={pageData.dawesGlacier.summary}
        bestFor={pageData.dawesGlacier.bestFor}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 11: Inside Passage Scenic Cruising (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.insidePassage.title}
        subtitles={["Defining Scenic Waterways of Southeast Alaska"]}
        summary={pageData.insidePassage.summary}
        features={pageData.insidePassage.features}
        bestFor={pageData.insidePassage.wildlife}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 12: Alaska Cruise Ports (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Alaska Cruise Ports"
        subtitle="Celebrity's Alaska program includes a wide selection of iconic ports, gold rush towns, and Native cultural centers."
        items={pageData.ports}
      />

      {/* ─── SECTION 13: Alaska Wildlife (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Celebrity Alaska Wildlife Encounters",
          subtitle: "Wildlife is one of the major reasons travelers choose Alaska. Depending on the destination, excursion, and season, travelers encounter humpback whales, orcas, bald eagles, coastal brown bears, seals, and sea otters in their natural habitats.",
          pillars: pageData.wildlifePillars
        }}
      />

      {/* ─── SECTION 14: Shore Excursions Categories (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Alaska Shore Excursions"
        subtitle="Celebrity offers a broad range of Alaska shore excursions spanning glaciers, marine wildlife safaris, wilderness adventure, and Native cultural heritage."
        items={pageData.excursionCategories}
      />

      {/* ─── SECTION 15: Inclusions vs What's Not Included (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Celebrity Alaska Cruise Inclusions vs. What's Not Included"
        subtitle="Understanding what is included in your standard cruise fare versus optional shore excursions and personal vacation expenses."
        includedTitle="What's Included in the Core Cruise Fare"
        extrasTitle="What's Not Included (Budget Separately)"
        included={pageData.inclusions}
        extras={pageData.exclusions}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Experience Alaska With Celebrity?"
        description="Trips & Ships Luxury Travel can help you compare Celebrity Alaska ships, choose between Northbound and Southbound glacier routes, and coordinate Denali Cruisetours."
        buttonText="Plan My Celebrity Alaska Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ─── SECTION 16: Cruisetours & Denali (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.cruisetours.title}
        subtitles={["Combine 7-Night Cruise + Multi-Night Inland Tour"]}
        summary={pageData.cruisetours.summary}
        features={pageData.cruisetours.destinations}
        bestFor={pageData.denali.highlights}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 17: Departure Ports (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Alaska Departure Ports"
        subtitle="Choose the ideal embarkation port for your Alaska vacation: Vancouver, Seattle, or Seward."
        items={pageData.departurePorts}
      />

      {/* ─── SECTION 18: Cruise Season & Best Time (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.seasonsTable}
      />

      {/* ─── SECTION 19: Staterooms & Accommodations (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Alaska Cruise Accommodations"
        subtitle="Celebrity offers interior, ocean view, veranda staterooms, and luxury suites in The Retreat. For Alaska, a veranda provides uninterrupted private scenery."
        items={pageData.accommodations}
      />

      {/* ─── SECTION 20: One-Way vs Round-Trip (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.oneWayVsRoundTrip.title}
        prosTitle={pageData.oneWayVsRoundTrip.oneWayTitle}
        consTitle={pageData.oneWayVsRoundTrip.roundTripTitle}
        bestFor={pageData.oneWayVsRoundTrip.oneWay}
        notBestFor={pageData.oneWayVsRoundTrip.roundTrip}
        type="compare"
        bottomNote="Is a Balcony Worth It on a Celebrity Alaska Cruise? For many Alaska travelers, yes. A veranda provides private space to watch mountains, glaciers and wildlife as the ship navigates scenic waterways."
      />

      {/* ─── SECTION 21: Cruise vs Independent Land Vacation (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.cruiseVsLandTable}
      />

      {/* ─── SECTION 22: Are Celebrity Alaska Cruises Worth It? (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Are Celebrity Alaska Cruises Worth It?",
          subtitle: "Celebrity Alaska Cruises are an excellent choice for travelers who want to experience several Alaska destinations without repeatedly changing hotels. The right itinerary is more important than simply choosing the most attractive ship.",
          pillars: pageData.worthItPillars
        }}
      />

      {/* ─── SECTION 23: Who Should Choose a Celebrity Alaska Cruise (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Should Choose a Celebrity Alaska Cruise?"
        subtitle="TRAVELER PROFILES & ALASKA VACATION MATCH"
        personas={pageData.personas}
      />

      {/* ─── SECTION 24: Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Alaska Cruises Pros & Cons"
        prosTitle="Pros & Advantages"
        consTitle="Cons & Considerations"
        bestFor={pageData.pros}
        notBestFor={pageData.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 25: Planning Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Choose the Best Celebrity Alaska Cruise"
        subtitle="6-step luxury planning walkthrough to select your departure port, glacier itinerary, veranda, and excursions."
        steps={pageData.steps}
      />

      {/* ─── SECTION 26: Packing Checklist (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="What to Pack for a Celebrity Alaska Cruise"
        subtitle="PACKING GUIDE & GEAR ADVICE"
        cards={pageData.packingCards}
      />

      {/* ─── SECTION 27: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        image={ProfilePictureAH}
        badge={pageData.angelaBio.badge}
        experienceBadge={pageData.angelaBio.experienceBadge}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        bio={pageData.angelaBio.bio}
        credentials={pageData.angelaBio.credentials}
        ctaText="Plan With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ─── SECTION 28: Why Plan With Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Plan Your Celebrity Alaska Cruise With Trips & Ships?",
          subtitle: "Planning Alaska involves more than selecting a cruise date. Trips & Ships Luxury Travel matches your cruise route with how you actually want to experience Alaska.",
          pillars: pageData.whyPlanPillars
        }}
      />

      {/* ─── SECTION 29: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Plan Your Celebrity Alaska Cruise"
        description="Ready to experience Alaska with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Alaska ships, glacier itineraries, Inside Passage routes, excursions, Cruisetours, cabins, and pre- or post-cruise stays."
        buttonText="Plan My Celebrity Alaska Cruise"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
}

export default CelebrityAlaskaCruises;