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
import FeatureGrid from '@/components/ui/FeatureGrid';
import DestinationFlipCards from '@/components/ui/DestinationFlipCards';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CuratedComforts from '@/components/ui/CuratedComforts';
import IconGrid from '@/components/ui/IconGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function CelebrityCaribbeanCruises() {
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
    title: "Celebrity Caribbean Cruises at a Glance",
    description: "Celebrity's Caribbean program includes Eastern, Western and Southern Caribbean itineraries, with routes visiting destinations such as the Bahamas, St. Thomas, St. Maarten, Puerto Rico, Jamaica, Grand Cayman, Aruba, Curaçao and other Caribbean islands.",
    headers: ["Program Feature", "Celebrity Caribbean Specification"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Data mappings for Regional Destination Spotlights
  const easternFlipCards = [
    {
      title: "St. Thomas & St. John",
      description: "Postcard-perfect beaches at Magen's Bay, Sapphire Beach, duty-free shopping in Charlotte Amalie, Drake's Seat mountain overlooks, and easy catamaran gateway access to St. John National Park.",
      features: [
        "Magen's Bay & Sapphire Beach turquoise waters",
        "Charlotte Amalie duty-free boutique shopping",
        "Drake's Seat mountain panoramic overlooks",
        "Gateway to protected St. John beaches"
      ]
    },
    {
      title: "St. Maarten / St. Martin",
      description: "Fascinating dual-nation island combining lively Dutch commerce and Philipsburg boardwalk shopping with French gourmet cuisine, charming bistros in Marigot, and Orient Bay.",
      features: [
        "Philipsburg Great Bay boardwalk & shopping",
        "French culinary dining in Marigot",
        "Maho Beach world-famous plane views",
        "Orient Bay and secluded coastal coves"
      ]
    },
    {
      title: "San Juan & British Virgin Islands",
      description: "Historic 500-year-old Spanish stone fortresses at El Morro, cobblestone colonial streets in Old San Juan, and pristine yacht anchorages in Tortola, British Virgin Islands.",
      features: [
        "San Juan UNESCO El Morro & San Cristóbal forts",
        "Historic Old San Juan cobblestone plazas",
        "Tortola & Virgin Gorda granite boulders",
        "Rich blend of Spanish and British heritage"
      ]
    }
  ];

  const westernHighlightsItems = [
    {
      title: "Cozumel & Costa Maya, Mexico",
      description: "Gateway to ancient Mayan ruins at Tulum, Chacchoben, and San Gervasio, along with world-class Palancar reef snorkeling and underground cenote swimming.",
      icon: "Compass"
    },
    {
      title: "Grand Cayman",
      description: "Home to famous Seven Mile Beach, Stingray City sandbar marine encounters, crystal-clear diving visibility, and luxury waterfront dining in George Town.",
      icon: "Sparkles"
    },
    {
      title: "Jamaica (Ocho Rios & Falmouth)",
      description: "Climb the terraced cascades of Dunn's River Falls, float down the Martha Brae on bamboo rafts, and enjoy authentic Jamaican jerk cuisine and reggae culture.",
      icon: "Heart"
    },
    {
      title: "Belize & Roatán, Honduras",
      description: "Pristine Mesoamerican Barrier Reef diving, rainforest canopy ziplining, monkey sanctuaries, and ancient Mayan ceremonial temples deep in the jungle.",
      icon: "Ship"
    },
    {
      title: "Key West, Florida",
      description: "Charming historic Old Town, Hemingway Home, colorful gingerbread architecture, key lime pie bakeries, and Mallory Square sunset celebrations.",
      icon: "Star"
    }
  ];

  const southernBentoItems = [
    {
      title: "Aruba (Eagle Beach & Trade Winds)",
      description: "Located outside the hurricane belt, famous for wide white powdery beaches, constant trade winds, Arikok National Park cactus landscapes, and colorful Dutch architecture in Oranjestad.",
      stat: "Dry Climate"
    },
    {
      title: "Curaçao & Willemstad Waterfront",
      description: "UNESCO World Heritage pastel waterfront buildings along the Handelskade, Queen Emma floating pontoon bridge, secluded coral coves, and spectacular reef diving.",
      stat: "UNESCO Port"
    },
    {
      title: "Bonaire & Marine Park",
      description: "World capital of shore diving featuring a fully protected marine park, crystal-clear sea visibility, salt flats, and tranquil flamingo sanctuaries.",
      stat: "Top Diving"
    },
    {
      title: "Barbados & St. Lucia's Pitons",
      description: "British-Caribbean elegance with historic rum distilleries in Barbados, paired with dramatic towering green volcanic Pitons and lush rainforests in St. Lucia.",
      stat: "Volcanic Vistas"
    }
  ];

  const whichIsBestCuratedData = {
    title: "Which Celebrity Caribbean Cruise Is Best for You?",
    subtitle: "There is no single best itinerary for every traveler. Match your vacation style with the ideal Caribbean region.",
    items: [
      {
        title: "Eastern Caribbean: Classic Beaches & Islands",
        description: "Choose Eastern Caribbean if you want classic postcard islands, world-famous white-sand beaches, easy snorkeling, duty-free shopping in St. Thomas, and gentle sightseeing. Ideal for first-time cruisers and couples."
      },
      {
        title: "Western Caribbean: Adventure & Mayan Ruins",
        description: "Choose Western Caribbean if you want ancient Mayan history, cenote diving, rainforest ziplining, climbing Dunn's River Falls in Jamaica, and Stingray City in Grand Cayman. Perfect for active families and history lovers."
      },
      {
        title: "Southern Caribbean: Distinctive & Exotic Islands",
        description: "Choose Southern Caribbean if you want deeper exploration of the ABC islands (Aruba, Curaçao, Bonaire), dramatic Pitons in St. Lucia, longer island routes, and fewer sea days. Best for repeat and seasoned travelers."
      },
      {
        title: "Short Getaways vs. Extended Grand Voyages",
        description: "4- to 5-night tropical getaways offer quick escapes to the Bahamas and Cozumel, while 9- to 12-night Southern Caribbean sailings provide extensive multi-country immersion."
      },
      {
        title: "Celebrity Caribbean Vacation Match",
        description: "Whether you prioritize beaches, diving, history, or all-inclusive suite luxury in The Retreat, Celebrity provides seamless multi-island logistics with zero hotel changes."
      }
    ]
  };

  // 4. Schema.org JSON-LD graph (Exact Ritz-Carlton pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/caribbean/",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-caribbean-cruises.jpg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/images/celebrity-caribbean-cruises.jpg",
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
          "caption": "Angela Hughes - Luxury Cruise Expert"
        },
        "description": pageData.angelaBio.bio,
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Caribbean Cruises",
          "Celebrity Cruises",
          "Eastern Caribbean Cruises",
          "Western Caribbean Cruises",
          "Southern Caribbean Cruises",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/#breadcrumb",
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
            "name": "Celebrity Caribbean Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises/caribbean/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/caribbean/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/images/celebrity-caribbean-cruises.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/images/celebrity-caribbean-cruises.jpg" />
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
        watermarkText="CARIBBEAN"
        alt1="Celebrity Caribbean Cruises - Tropical Beaches and Turquoise Waters"
      />

      {/* ─── SECTION 3: Program Overview Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={glanceTableData}
      />

      {/* ─── SECTION 4: Why Choose Celebrity Caribbean Cruises (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Choose Celebrity Caribbean Cruises?",
          subtitle: "The Caribbean works particularly well for travelers who want a combination of relaxation and exploration. A Celebrity Caribbean cruise allows travelers to experience several destinations while keeping the same luxurious accommodation throughout.",
          pillars: pageData.whyChoose
        }}
      />

      {/* ─── SECTION 5: Celebrity Caribbean Fleet (FeatureGrid Component) ─── */}
      <FeatureGrid
        title="Celebrity Caribbean Cruise Ships"
        subtitle="Compare Edge Series flagships, Solstice & Millennium Class ships, staterooms, and key itinerary considerations."
        features={pageData.fleetCards}
      />

      {/* ─── SECTION 6: Eastern Caribbean Cruises (DestinationFlipCards Component) ─── */}
      <DestinationFlipCards
        title="Celebrity Eastern Caribbean Cruises"
        subtitle="St. Thomas, St. Maarten, Puerto Rico & British Virgin Islands — classic white-sand beaches, snorkeling, and shopping."
        items={easternFlipCards}
      />

      {/* ─── SECTION 7: Western Caribbean Cruises (HighlightsSplit Component) ─── */}
      <HighlightsSplit
        title="Celebrity Western Caribbean Cruises"
        items={westernHighlightsItems}
      />

      {/* ─── SECTION 8: Southern Caribbean Cruises (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title="Celebrity Southern Caribbean Cruises"
        subtitle="Aruba, Curaçao, Bonaire, Barbados & St. Lucia — deep island exploration, Dutch architecture, and volcanic vistas."
        bentoItems={southernBentoItems}
      />

      {/* ─── SECTION 9: Eastern vs Western vs Southern Comparison (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.regionCompareTable}
      />

      {/* ─── SECTION 10: Which Caribbean Cruise Is Best (CuratedComforts Component) ─── */}
      <CuratedComforts
        data={whichIsBestCuratedData}
      />

      {/* ─── SECTION 11: Caribbean Islands Showcase (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Caribbean Islands"
        subtitle="Explore the diverse cultures, scenic coastlines, beaches, and historic ports across Celebrity's Caribbean network."
        items={pageData.islands}
      />

      {/* ─── SECTION 12: Port Network Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.portsTable}
      />

      {/* ─── SECTION 13: Shore Excursion Categories (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Caribbean Cruise Excursions"
        subtitle="Shore excursions are an essential part of a Caribbean cruise, spanning beach resort passes, reef snorkeling, canopy ziplining, and colonial history."
        items={pageData.excursionCategories}
      />

      {/* ─── SECTION 14: Inclusions vs What's Not Included (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Celebrity Caribbean Cruise Inclusions vs. What's Not Included"
        subtitle="Understanding what is included in your standard cruise fare versus optional shore excursions, specialty dining, and personal expenses."
        includedTitle="What's Included in the Core Cruise Fare"
        extrasTitle="What's Not Included (Budget Separately)"
        included={pageData.inclusions}
        extras={pageData.exclusions}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Experience the Caribbean With Celebrity?"
        description="Trips & Ships Luxury Travel can help you compare Celebrity Caribbean ships, choose between Eastern, Western and Southern routes, and coordinate Florida or Puerto Rico pre- or post-cruise stays."
        buttonText="Plan My Celebrity Caribbean Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ─── SECTION 15: Departure Ports (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Caribbean Cruise Departure Ports"
        subtitle="The departure city is an important part of the overall vacation. Compare Fort Lauderdale, Miami, and San Juan."
        items={pageData.departurePorts}
      />

      {/* ─── SECTION 16: Pre- & Post-Cruise Stays (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Caribbean Cruise + Pre- & Post-Cruise Stays"
        subtitle="Arriving early provides a buffer against flight delays, while a post-cruise extension turns a cruise into an extended tropical vacation."
        items={pageData.prePostStays}
      />

      {/* ─── SECTION 17: Cruise Season & Calendar (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.seasonsTable}
      />

      {/* ─── SECTION 18: Best Time to Sail (IconGrid Component) ─── */}
      <IconGrid
        title="Best Time for a Celebrity Caribbean Cruise"
        subtitle="The Caribbean offers warm tropical weather year-round. Compare peak winter sunshine, spring shoulder value, and summer family breaks."
        items={pageData.bestTime}
      />

      {/* ─── SECTION 19: Accommodations (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Caribbean Cruise Accommodations"
        subtitle="Celebrity offers interior, ocean view, veranda staterooms, and luxury suites in The Retreat. A veranda provides private outdoor space for Caribbean ocean breezes."
        items={pageData.accommodations}
      />

      {/* ─── SECTION 20: Is a Balcony Worth It (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Is a Balcony Worth It on a Celebrity Caribbean Cruise?"
        subtitles={["Private Outdoor Sanctuary Over Tropical Waters"]}
        summary="For many travelers, yes. The Caribbean is a destination where the scenery continues beyond the ports. A private veranda provides a quiet place to watch sunrise over calm waters, enjoy room-service breakfast, watch the ship approach islands, and relax under tropical trade winds."
        features={pageData.verandaList}
        bestFor={["Private sunrise coffee", "Scenic island arrivals", "Balcony room-service breakfast", "Romantic evening cocktails"]}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 21: Cruise vs Land-Based Vacation (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.cruiseVsLandTable}
      />

      {/* ─── SECTION 22: Traveler Personas (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Should Choose a Celebrity Caribbean Cruise?"
        subtitle="TRAVELER PROFILES & CARIBBEAN VACATION MATCH"
        personas={pageData.personas}
      />

      {/* ─── SECTION 23: Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Caribbean Cruises Pros & Cons"
        prosTitle="Pros & Advantages"
        consTitle="Cons & Considerations"
        bestFor={pageData.pros}
        notBestFor={pageData.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 24: Planning Walkthrough Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Choose the Best Celebrity Caribbean Cruise"
        subtitle="8-step walkthrough to select your region, departure port, cruise length, stateroom, and land extensions."
        steps={pageData.steps}
      />

      {/* ─── SECTION 25: Packing Checklist (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="What to Pack for a Celebrity Caribbean Cruise"
        subtitle="PACKING GUIDE & TROPICAL TRAVEL ESSENTIALS"
        cards={pageData.packingCards}
      />

      {/* ─── SECTION 26: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
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

      {/* ─── SECTION 27: Why Plan With Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Plan Your Celebrity Caribbean Cruise With Trips & Ships?",
          subtitle: "Planning a Caribbean cruise involves more than selecting a ship. Trips & Ships Luxury Travel matches the itinerary with how you actually want to experience the islands.",
          pillars: pageData.whyPlanPillars
        }}
      />

      {/* ─── SECTION 28: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Plan Your Celebrity Caribbean Cruise"
        description="Ready to explore the Caribbean with Celebrity? Trips & Ships Luxury Travel can help you compare Eastern, Western and Southern Caribbean itineraries, select the right Celebrity ship and stateroom, evaluate departure ports and excursions, and build a complete pre- or post-cruise vacation."
        buttonText="Plan My Celebrity Caribbean Cruise"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
}

export default CelebrityCaribbeanCruises;