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

function CelebrityGalapagosCruises() {
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
    title: "Celebrity Galápagos Cruises at a Glance",
    description: "Celebrity describes the Galápagos experience as all-inclusive, with excursions, equipment, meals, drinks, Wi-Fi, gratuities and park-related fees included.",
    headers: ["Program Feature", "Celebrity Flora Specification"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Schema.org JSON-LD graph (Exact Ritz-Carlton pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/galapagos/",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-galapagos-cruises.jpg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/images/celebrity-galapagos-cruises.jpg",
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
          "Yacht Cruising",
          "Galápagos Cruises",
          "Celebrity Cruises",
          "Expedition Cruises",
          "South America Travel",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/#breadcrumb",
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
            "name": "Celebrity Galápagos Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises/galapagos/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/galapagos/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/images/celebrity-galapagos-cruises.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/images/celebrity-galapagos-cruises.jpg" />
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
        watermarkText="GALÁPAGOS"
        alt1="Celebrity Galápagos Cruises - Celebrity Flora"
      />

      {/* ─── SECTION 3: Program Overview Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={glanceTableData}
      />

      {/* ─── SECTION 4: Why Choose Celebrity Galápagos Cruises (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Choose Celebrity Galápagos Cruises?",
          subtitle: "The Galápagos is different from a conventional cruise destination. The emphasis is on wildlife, nature, conservation and expedition exploration, rather than traditional cruise entertainment. The Galápagos Islands are located on the equator approximately 800 kilometers west of mainland Ecuador.",
          pillars: pageData.whyChoose
        }}
      />

      {/* ─── SECTION 5: Celebrity Flora - Ship & Specs (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Flora: The Ship Behind the Experience"
        subtitles={["100-Guest Purpose-Built All-Suite Mega-Yacht"]}
        summary="Celebrity Flora is the signature ship for Celebrity's Galápagos program. The ship was designed specifically for the Galápagos environment and carries approximately 100 guests, creating a more intimate expedition atmosphere than a conventional ocean cruise. Celebrity describes Flora as an all-suite mega-yacht purpose-built for the Galápagos."
        features={pageData.floraHighlights}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 6: Celebrity Flora Accommodations (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Flora Accommodations"
        subtitles={["Every Guest, A Luxury Suite"]}
        summary="Every guest aboard Celebrity Flora stays in a suite. Celebrity's suite experience includes amenities designed to make the accommodation comfortable between shore excursions. The Royal Suite, for example, includes a private veranda, king-sized bed, spa tub, separate shower, in-suite filtered water station and full-suite automation."
        features={pageData.suiteFeatures}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 7: Inner Loop Itinerary (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Galápagos Inner Loop"
        subtitles={["Islands: " + pageData.innerLoop.islands.join(" • ")]}
        summary={pageData.innerLoop.summary}
        bestFor={pageData.innerLoop.bestFor}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 8: Outer Loop Itinerary (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Galápagos Outer Loop"
        subtitles={["Islands: " + pageData.outerLoop.islands.join(" • ")]}
        summary={pageData.outerLoop.summary}
        bestFor={pageData.outerLoop.bestFor}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 9: Key Destinations (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Galápagos Destinations"
        subtitle="Celebrity's Galápagos program includes numerous iconic islands and visitor sites across the archipelago."
        items={pageData.destinations}
      />

      {/* ─── SECTION 10: Wildlife & Naturalist Learning (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Celebrity Galápagos Wildlife & What Makes It Different",
          subtitle: "Wildlife is the central reason many travelers choose a Galápagos expedition. Close encounters with animals evolved in isolation, guided by Galápagos National Park-certified naturalists focusing on evolution, adaptation, ecosystems, and conservation.",
          pillars: pageData.wildlifePillars
        }}
      />

      {/* ─── SECTION 11: Excursions & Certified Naturalists (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Galápagos Excursions & Naturalists"
        subtitles={["Twice-Daily Guided Expeditions Included"]}
        summary="Celebrity includes twice-daily guided excursions led by Galápagos National Park-certified naturalists. Excursions involve hiking, snorkeling, tendering, and wildlife observation. Each evening, travelers receive briefings detailing activity levels, terrain, what to wear, and landing conditions."
        features={pageData.activities}
        bestFor={['Snorkeling equipment', 'Mini-wetsuits', 'Marine binoculars', 'Walking sticks']}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 12: Inclusions vs What's Not Included (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Celebrity Galápagos Cruise Inclusions vs. What Costs Extra"
        subtitle="Understanding what is included in your all-inclusive 7-night cruise fare versus optional vacation expenses."
        includedTitle="What's Included in the Cruise Fare"
        extrasTitle="What's Not Included (Extra Costs)"
        included={pageData.inclusions}
        extras={pageData.exclusions}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Experience the Galápagos With Celebrity?"
        description="Trips & Ships Luxury Travel can help you compare Celebrity Flora itineraries, choose between Inner and Outer Loop routes, and coordinate your complete South American journey."
        buttonText="Plan My Celebrity Galápagos Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ─── SECTION 13: 10-, 11- & 16-Night Extended Packages (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Galápagos 10-, 11- & 16-Night Packages"
        subtitle="Extend your Galápagos vacation with pre-cruise hotel stays in historic Quito and grand South American extensions to Peru and Machu Picchu."
        items={pageData.packages}
      />

      {/* ─── SECTION 14: Best Time & Seasons (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.seasonsTable}
      />

      {/* ─── SECTION 15: Celebrity Galápagos vs Traditional Cruise (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.vsTraditionalTable}
      />

      {/* ─── SECTION 16: Choose Celebrity vs Other Expedition Operators (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Galápagos vs. Other Expedition Cruises"
        prosTitle="Choose Celebrity if you want:"
        consTitle="Consider another expedition operator if you want:"
        bestFor={pageData.chooseCelebrity}
        notBestFor={pageData.chooseAnother}
        type="compare"
        bottomNote="Are Celebrity Galápagos Cruises Worth It? For travelers who want to simplify the logistics of a complex wildlife-focused vacation with all-suite accommodations, twice-daily guided excursions, meals, drinks, Wi-Fi, gratuities, park fees, and transfers included, Celebrity Flora delivers outstanding all-inclusive value."
      />

      {/* ─── SECTION 17: Who Should Choose a Celebrity Galápagos Cruise (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Should Choose a Celebrity Galápagos Cruise?"
        subtitle="TRAVELER PROFILES & EXPEDITION MATCH"
        personas={pageData.personas}
      />

      {/* ─── SECTION 18: Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Galápagos Cruises Pros & Cons"
        prosTitle="Pros & Advantages"
        consTitle="Cons & Considerations"
        bestFor={pageData.pros}
        notBestFor={pageData.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 19: Planning Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Choose the Best Celebrity Galápagos Cruise"
        subtitle="6-step luxury planning walkthrough to select your itinerary, cruise length, mainland extension, and suite."
        steps={pageData.steps}
      />

      {/* ─── SECTION 20: Packing Checklist (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="What to Pack for a Celebrity Galápagos Cruise"
        subtitle="PACKING LIST & GEAR ADVICE"
        cards={pageData.packingCards}
      />

      {/* ─── SECTION 21: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
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

      {/* ─── SECTION 22: Why Plan With Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Plan Your Celebrity Galápagos Cruise With Trips & Ships?",
          subtitle: "Planning the Galápagos requires more than selecting a cruise date. A Galápagos journey easily becomes a once-in-a-lifetime South American vacation when planned as part of a seamless luxury itinerary.",
          pillars: pageData.whyPlanPillars
        }}
      />

      {/* ─── SECTION 23: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Plan Your Celebrity Galápagos Cruise"
        description="Ready to experience the Galápagos with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Flora itineraries, choose between Inner and Outer Loop routes, select the right suite, add Quito or Machu Picchu, and coordinate the complete South American journey."
        buttonText="Plan My Celebrity Galápagos Cruise"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
}

export default CelebrityGalapagosCruises;