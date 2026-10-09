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
import FeatureGrid from '@/components/ui/FeatureGrid';
import DestinationFlipCards from '@/components/ui/DestinationFlipCards';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import IconGrid from '@/components/ui/IconGrid';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CuratedComforts from '@/components/ui/CuratedComforts';

function CelebrityMediterraneanCruises() {
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
    title: "Celebrity Mediterranean Cruises at a Glance",
    description: "Celebrity's current Mediterranean program includes seven ships in the region during the 2026/2027 season, including Celebrity Xcel, Celebrity Ascent, Celebrity Constellation, Celebrity Infinity and Celebrity Equinox, with the fleet varying by season and itinerary.",
    headers: ["Program Feature", "Celebrity Mediterranean Specification"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Data mappings for Distinct Country & Fleet Sections
  const fleetFeatureGridItems = [
    {
      title: "Celebrity Xcel (Edge Series Flagship)",
      description: "Celebrity Xcel debuted in the Mediterranean and is scheduled to return for the 2027/2028 season, featuring revolutionary outward-facing design and next-generation luxury spaces.",
      tags: ["Magic Carpet", "Infinite Veranda", "The Retreat", "Sunset Bar & Rooftop Garden"],
      highlight: "Debuted in the Mediterranean & returning for 2027/2028"
    },
    {
      title: "Celebrity Ascent & Celebrity Apex",
      description: "Award-winning Edge-class ships sailing premier Mediterranean routes, featuring 32 distinct food and beverage experiences and world-class entertainment.",
      tags: ["32 Food & Beverage Venues", "The Grand Plaza", "Resort Deck Lap Pool", "Adults-Only Solarium"],
      highlight: "Edge Series flagships with multi-deck outward facing venues"
    },
    {
      title: "Celebrity Equinox, Constellation & Infinity",
      description: "Beloved classic ships offering intimate European cruising with real grass lawns, exceptional personalized service, and access to boutique Mediterranean ports.",
      tags: ["Half-Acre Lawn Club", "Boutique Port Access", "The Spa Thermal Suites", "Oceanview Cafe Al Fresco"],
      highlight: "Solstice & Millennium Class ships with intimate boutique harbor access"
    },
    {
      title: "Ship Selection Advice for the Mediterranean",
      description: "For a Mediterranean vacation, the itinerary and port time can be just as important as the ship. When comparing Celebrity Mediterranean ships, consider ship size, stateroom categories, suite amenities in The Retreat, and port durations.",
      tags: ["Ship Size & Infinite Verandas", "The Retreat Suite Amenities", "Specialty Dining Variety", "Overnight Stays & Port Time"],
      highlight: "Itinerary and port time can be just as important as the ship."
    }
  ];

  const greeceFlipCards = [
    {
      title: "Santorini & Mykonos",
      description: "Iconic Cyclades islands featuring world-famous cliffside whitewashed towns, dramatic volcanic caldera vistas, vibrant beach culture, and world-renowned Aegean sunsets.",
      features: [
        "Santorini cliffside caldera & blue domes",
        "Mykonos windmills & Little Venice",
        "Whitewashed village architecture",
        "Spectacular Aegean sunset sailing"
      ]
    },
    {
      title: "Rhodes, Corfu & Katakolon",
      description: "Immersive historic ports spanning the UNESCO medieval walled city of the Palace of the Grand Master in Rhodes, lush Venetian fortresses in Corfu, and the birthplace of the ancient Olympics at Katakolon.",
      features: [
        "Rhodes UNESCO medieval fortress town",
        "Corfu Ionian architecture & Venetian palaces",
        "Katakolon gateway to Ancient Olympia",
        "Rich blend of Byzantine and classical history"
      ]
    },
    {
      title: "Crete, Kefalonia & Athens",
      description: "Deep exploration of Chania's Venetian harbor in Crete, the turquoise subterranean Melissani Lake in Kefalonia, and Athens (Piraeus) gateway to the Acropolis and Parthenon.",
      features: [
        "Chania (Crete) Venetian harbor & Cretan cuisine",
        "Kefalonia dramatic coastline & Melissani Cave",
        "Athens (Piraeus) Acropolis & ancient landmarks",
        "Thessaloniki Byzantine heritage"
      ]
    }
  ];

  const italyHighlightsItems = [
    {
      title: "Rome (Civitavecchia)",
      description: "The Eternal City gateway offering access to the Colosseum, Vatican Museums, St. Peter's Basilica, Roman Forum, Trevi Fountain, and world-class Italian dining.",
      icon: "Compass"
    },
    {
      title: "Florence / Pisa (Livorno)",
      description: "Gateway to the Tuscan Renaissance featuring the Uffizi Gallery, Florence Duomo, Ponte Vecchio, the Leaning Tower of Pisa, and Tuscan wine country estates.",
      icon: "Sparkles"
    },
    {
      title: "Naples, Amalfi Coast & Capri",
      description: "The stunning southern Italian coastline offering visits to the ruins of Pompeii and Herculaneum, scenic boat tours to Capri, and clifftop villages along the Amalfi Coast.",
      icon: "Heart"
    },
    {
      title: "Portofino & Italian Riviera",
      description: "Glamorous Ligurian fishing village renowned for pastel-colored harbor houses, luxury boutiques, seaside seafood trattorias, and scenic coastal hiking trails.",
      icon: "Ship"
    },
    {
      title: "Sicily, Venice/Ravenna & Sardinia",
      description: "Diverse Italian islands and northern Adriatic gateways including Messina (Sicily) gateway to Taormina and Mount Etna, Cagliari (Sardinia), and Taranto in Puglia.",
      icon: "Star"
    }
  ];

  const spainIconGridItems = [
    {
      title: "Barcelona & Catalonia (7–12 Night Hub)",
      description: "Important starting point for Mediterranean cruises. Explore Gaudí's Sagrada Família, Park Güell, the Gothic Quarter, and world-class tapas culture before sailing.",
      icon: "sun"
    },
    {
      title: "Balearic Islands (Mallorca & Ibiza)",
      description: "Palma de Mallorca's historic Gothic cathedral, mountain villages like Valldemossa, and Ibiza's secluded turquoise beach coves and seaside dining.",
      icon: "activity"
    },
    {
      title: "Andalusia (Malaga, Seville & Cadiz)",
      description: "Gateway to the Moorish Alhambra in Granada, Seville's Alcázar and flamenco heritage via Cadiz, and Picasso's historic birthplace in Malaga.",
      icon: "tag"
    },
    {
      title: "Valencia, Alicante & Cartagena",
      description: "The birthplace of authentic paella in Valencia, the Castle of Santa Barbara in Alicante, and the ancient Roman amphitheater in historic Cartagena.",
      icon: "clock"
    }
  ];

  const croatiaBentoItems = [
    {
      title: "Split & Diocletian's Palace",
      description: "Croatia provides a different Mediterranean experience combining Adriatic scenery, historic towns and island landscapes. Split is among Celebrity's highlighted Mediterranean destinations for 2026 and 2027.",
      stat: "2026/27"
    },
    {
      title: "Dubrovnik (Pearl of the Adriatic)",
      description: "UNESCO World Heritage walled city featuring intact 16th-century stone ramparts, baroque limestone streets, and shimmering turquoise Adriatic views.",
      stat: "UNESCO"
    },
    {
      title: "Zadar & Rijeka Harbors",
      description: "Historic Adriatic coastal towns famous for the Roman Forum, Sea Organ wave architecture, and authentic local seafood.",
      stat: "Adriatic"
    },
    {
      title: "Kotor & Nearby Adriatic Coast",
      description: "Dramatic sailing through Europe's southernmost fjord into Montenegro's medieval walled bay surrounded by soaring limestone cliffs.",
      stat: "Fjord Bay"
    }
  ];

  const franceCuratedData = {
    title: "Celebrity France Cruises",
    subtitle: "Selected Celebrity Mediterranean itineraries visit the French Riviera and southern France, including Cannes, Nice, Provence, and Corsica.",
    items: [
      {
        title: "Cannes & Boulevard de la Croisette",
        description: "The glamorous French Riviera epicenter famous for its palm-lined seaside promenade, luxury boutiques, yacht marinas, and film festival history."
      },
      {
        title: "Nice & Villefranche-sur-Mer",
        description: "Pastel-hued harbor nestled between deep coastal cliffs, offering effortless access to the Promenade des Anglais, Monaco, and hilltop Eze."
      },
      {
        title: "Provence (Marseille & Toulon)",
        description: "Celebrity's current Mediterranean destination highlights include Provence, featuring fragrant lavender landscapes, Aix-en-Provence, and local rosé vineyards."
      },
      {
        title: "Sete & Ajaccio (Corsica)",
        description: "Picturesque Languedoc canals in Sete and Napoleon Bonaparte's historic birthplace with rugged mountain scenery in Ajaccio, Corsica."
      },
      {
        title: "French Riviera Luxury Highlights",
        description: "Best for: French Riviera coastline, fine wine, Provençal cuisine, impressionist art history, boutique shopping, and scenic coastal villages."
      }
    ]
  };

  // 3. Schema.org JSON-LD graph (Exact Ritz-Carlton pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/mediterranean/",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-mediterranean-cruises.jpg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/images/celebrity-mediterranean-cruises.jpg",
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
          "Mediterranean Cruises",
          "Celebrity Cruises",
          "Greek Islands Cruises",
          "Italy Cruises",
          "European Vacations",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/#breadcrumb",
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
            "name": "Celebrity Mediterranean Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises/mediterranean/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/mediterranean/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/images/celebrity-mediterranean-cruises.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/images/celebrity-mediterranean-cruises.jpg" />
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
        watermarkText="MEDITERRANEAN"
        alt1="Celebrity Mediterranean Cruises - Santorini and Mediterranean Coast"
      />

      {/* ─── SECTION 3: Program Overview Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={glanceTableData}
      />

      {/* ─── SECTION 4: Why Choose Celebrity Mediterranean Cruises (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Choose Celebrity Mediterranean Cruises?",
          subtitle: "The Mediterranean is one of the world's most diverse cruise regions. Celebrity Mediterranean Cruises allow travelers to experience multiple countries without repeatedly changing hotels or arranging transportation between cities.",
          pillars: pageData.whyChoose
        }}
      />

      {/* ─── SECTION 5: Celebrity Mediterranean Fleet (FeatureGrid Component) ─── */}
      <FeatureGrid
        title="Celebrity Mediterranean Cruise Ships"
        subtitle="Compare Edge Series flagships, Solstice & Millennium Class ships, staterooms, and key itinerary considerations."
        features={fleetFeatureGridItems}
      />

      {/* ─── SECTION 6: Itinerary Route Styles (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Celebrity Mediterranean Itinerary Styles",
          subtitle: "Celebrity's Mediterranean itineraries can broadly be divided into several distinct travel styles across Greece, Italy, Spain, France, and Croatia.",
          pillars: pageData.itineraryStyles
        }}
      />

      {/* ─── SECTION 7: Greek Islands Cruises (DestinationFlipCards Component) ─── */}
      <DestinationFlipCards
        title="Celebrity Greek Islands Cruises"
        subtitle="Explore whitewashed villages, dramatic volcanic caldera vistas, historic harbors, and world-renowned Aegean sunsets."
        items={greeceFlipCards}
      />

      {/* ─── SECTION 8: Italy Cruises (HighlightsSplit Component) ─── */}
      <HighlightsSplit
        title="Celebrity Italy Cruises"
        items={italyHighlightsItems}
      />

      {/* ─── SECTION 9: Spain Cruises (IconGrid Component) ─── */}
      <IconGrid
        title="Celebrity Spain Cruises"
        subtitle="Celebrity offers Mediterranean itineraries visiting several Spanish destinations, from vibrant Catalan culture to sunny Balearic islands."
        items={spainIconGridItems}
      />

      {/* ─── SECTION 10: Croatia Cruises (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title="Celebrity Croatia Cruises"
        subtitle="Adriatic scenery, UNESCO walled cities, historic harbors, and dramatic coastal landscapes across Split, Dubrovnik, Zadar, and Kotor."
        bentoItems={croatiaBentoItems}
      />

      {/* ─── SECTION 11: France Cruises (CuratedComforts Component) ─── */}
      <CuratedComforts
        data={franceCuratedData}
      />

      {/* ─── SECTION 13: Departure Ports (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Mediterranean Departure Ports"
        subtitle="The departure city can significantly affect the overall vacation. Compare Barcelona, Rome, Athens, and Ravenna."
        items={pageData.departurePorts}
      />

      {/* ─── SECTION 14: Port Network Overview Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.portsTable}
      />

      {/* ─── SECTION 15: Shore Excursions Categories (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Mediterranean Shore Excursions"
        subtitle="Shore excursions are an important part of a Mediterranean cruise, spanning ancient history, food and wine, scenic coastlines, and beach experiences."
        items={pageData.excursionCategories}
      />

      {/* ─── SECTION 16: Inclusions vs What's Not Included (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Celebrity Mediterranean Cruise Inclusions vs. What's Not Included"
        subtitle="Understanding what is included in your standard cruise fare versus optional shore excursions and personal vacation expenses."
        includedTitle="What's Included in the Core Cruise Fare"
        extrasTitle="What's Not Included (Budget Separately)"
        included={pageData.inclusions}
        extras={pageData.exclusions}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Experience the Mediterranean With Celebrity?"
        description="Trips & Ships Luxury Travel can help you compare Celebrity Mediterranean ships, choose between Western and Eastern routes, and coordinate European pre- or post-cruise stays."
        buttonText="Plan My Celebrity Mediterranean Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ─── SECTION 17: Cruise Season & Best Time (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.seasonsTable}
      />

      {/* ─── SECTION 18: Accommodations (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Mediterranean Cruise Accommodations"
        subtitle="Celebrity offers interior, ocean view, veranda staterooms, and luxury suites in The Retreat. For the Mediterranean, a veranda provides private outdoor space for scenic coastlines."
        items={pageData.accommodations}
      />

      {/* ─── SECTION 19: Is a Balcony Worth It (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Is a Balcony Worth It on a Celebrity Mediterranean Cruise?"
        subtitles={["Private Outdoor Sanctuary Over the Sea"]}
        summary="A veranda can be particularly appealing on Mediterranean itineraries because scenic sailing is part of the experience. A private balcony provides a quiet place to watch the coastline, enjoy sunrise over the Aegean, watch the ship approach ports, and relax after long excursions."
        features={pageData.balconyList}
        bestFor={["Scenic coastal sailing", "Island port arrivals", "Private sunrise coffee", "Romantic sunset dinners"]}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 20: Western vs Eastern Mediterranean (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.regionsComparison.title}
        prosTitle={pageData.regionsComparison.westernTitle}
        consTitle={pageData.regionsComparison.easternTitle}
        bestFor={pageData.regionsComparison.western}
        notBestFor={pageData.regionsComparison.eastern}
        type="compare"
        bottomNote="Are Celebrity Mediterranean Shore Excursions Included? Shore excursions are generally not automatically included in the standard cruise fare. Travelers can select and purchase excursions based on their itinerary and ports."
      />

      {/* ─── SECTION 21: Cruise vs Land-Based Europe (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={pageData.cruiseVsLandTable}
      />

      {/* ─── SECTION 22: Pre-Cruise Land Stays (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Mediterranean Cruise + Pre-Cruise Stay"
        subtitle="A pre-cruise stay allows you to explore major departure cities in depth and provides a buffer against flight delays."
        items={pageData.prePostStays}
      />

      {/* ─── SECTION 23: Post-Cruise Cities (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Celebrity Mediterranean Cruise + Post-Cruise Stay",
          subtitle: "A post-cruise extension allows travelers to slow down after the cruise rather than immediately returning home.",
          pillars: pageData.postCruiseCities
        }}
      />

      {/* ─── SECTION 24: Are Celebrity Mediterranean Cruises Worth It? (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Are Celebrity Mediterranean Cruises Worth It?",
          subtitle: "Celebrity Mediterranean Cruises can be an excellent choice for travelers who want to combine luxury cruising with European culture, history, food, and scenery with maximum convenience.",
          pillars: pageData.worthItPillars
        }}
      />

      {/* ─── SECTION 25: Who Should Choose (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Should Choose a Celebrity Mediterranean Cruise?"
        subtitle="TRAVELER PROFILES & EUROPEAN VACATION MATCH"
        personas={pageData.personas}
      />

      {/* ─── SECTION 26: Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Mediterranean Cruises Pros & Cons"
        prosTitle="Pros & Advantages"
        consTitle="Cons & Considerations"
        bestFor={pageData.pros}
        notBestFor={pageData.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 27: Planning Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Choose the Best Celebrity Mediterranean Cruise"
        subtitle="6-step luxury planning walkthrough to select your region, departure port, stateroom, and land extensions."
        steps={pageData.steps}
      />

      {/* ─── SECTION 28: Packing Checklist (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="What to Pack for a Celebrity Mediterranean Cruise"
        subtitle="PACKING GUIDE & EUROPEAN TRAVEL GEAR"
        cards={pageData.packingCards}
      />

      {/* ─── SECTION 29: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
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

      {/* ─── SECTION 30: Why Plan With Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Plan Your Celebrity Mediterranean Cruise With Trips & Ships?",
          subtitle: "Planning a Mediterranean cruise involves much more than selecting a sailing date. Trips & Ships Luxury Travel matches your cruise with how you actually want to experience Europe.",
          pillars: pageData.whyPlanPillars
        }}
      />

      {/* ─── SECTION 31: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Plan Your Celebrity Mediterranean Cruise"
        description="Ready to experience the Mediterranean with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity ships, Greece and Italy itineraries, Western and Eastern Mediterranean routes, shore excursions, staterooms, and pre- or post-cruise stays."
        buttonText="Plan My Celebrity Mediterranean Cruise"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
}

export default CelebrityMediterraneanCruises;