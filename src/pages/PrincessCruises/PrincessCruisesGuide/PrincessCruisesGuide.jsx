import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// Princess Fleet & Ship Images (Strictly Matched to Section Headings)
import SunPrincessImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-amalfi-italy-sunrise-sun-princess.webp';
import StarPrincessImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-genoa-italy-star-princess-sunrise.webp';
import DiscoveryPrincessImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-discovery-princess-haines-alaska-usa-ship-aerial-drone.webp';
import CrownPrincessImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-crown-princess-haines-alaska-usa-ship-aerial-drone.webp';

// Stateroom Images (Exact Category Matches)
import StateroomInteriorImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-social-media-discovery-princess-stateroom-interior.webp';
import StateroomOceanviewImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-discovery-princess-stateroom-window-suite.webp';
import StateroomBalconyImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-discovery-princess-stateroom-premium-suite.webp';
import StateroomMiniSuiteImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-discovery-princess-stateroom-vista-suite.webp';
import StateroomPenthouseImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-discovery-princess-stateroom-penthouse-suite.webp';
import SanctuarySuiteImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-sun-princess-sanctuary-pool.webp';

// Destination & Venue Images (Single-Use Authentic Matches)
import DestAmalfiImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-amalfi-italy-coastline-overview.webp';
import SanctuaryDiningImg from '@/assets/Princess-Cruises/PrincessCruisesGuide/princess-cruises-sun-princess-sanctuary-dining.webp';

// Shared UI System Components (Exact Architecture from CrystalVsRegent & CrystalCruisesGuide)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import FeatureSplit from '@/components/ui/FeatureSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CardGrid from '@/components/ui/CardGrid';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import VideoEmbed from '@/components/ui/VideoEmbed';

const PrincessCruisesGuide = () => {
  const pageUrl = pageData.seo.canonicalUrl;

  // 1. At a Glance items for BentoQuickFacts (10-Item Interlocking Bento)
  const atAGlanceBentoItems = pageData.atAGlance.rows.map(([label, value]) => ({
    label,
    value
  }));

  // 2. Fleet Class Showcase for HighlightsSplit (Only exact matched ship photos, placeholder for Coral Class)
  const fleetHighlightItems = [
    {
      title: "Sphere Class: Sun Princess & Star Princess",
      subtitle: "Next-Generation Flagships (4,300 Guests)",
      description: "Princess Cruises' largest and most innovative vessels, introducing contemporary architectural design, a multi-deck glass-enclosed Piazza, The Dome geodesic entertainment feature, and the exclusive Sanctuary Collection enclave.",
      bullets: [
        "Sun Princess (2024) and Star Princess (2025)",
        "The Dome entertainment venue & glass Piazza",
        "Exclusive Sanctuary Collection suites, deck & dining",
        "Over 29 restaurants, bars and specialty dining spaces"
      ],
      image: StarPrincessImg,
      icon: "Sparkles",
      tag: "FLAGSHIP CLASS"
    },
    {
      title: "Royal Class: Discovery, Enchanted & Sky",
      subtitle: "Contemporary Large Ships (3,560 - 3,660 Guests)",
      description: "Modern, feature-rich ships offering a high proportion of balcony accommodation, expanded Piazza spaces, multiple specialty dining venues, and Sky Suites featuring Princess's largest continuous balconies at sea.",
      bullets: [
        "Discovery, Enchanted, Sky, Majestic, Regal & Royal Princess",
        "Sky Suites with 700+ sq ft continuous private balconies",
        "Crown Grill, Sabatini's, and specialty culinary venues",
        "Extensive outdoor pools, retreat spaces, and Lotus Spa"
      ],
      image: DiscoveryPrincessImg,
      icon: "Ship",
      tag: "POPULAR CLASS"
    },
    {
      title: "Grand Class: Crown, Caribbean & Ruby",
      subtitle: "Classic Mid-to-Large Vessels (2,600 - 3,100 Guests)",
      description: "Well-established vessels offering classic Princess design with updated amenities, multiple pools, Movies Under the Stars, traditional promenade decks, and versatile global itineraries.",
      bullets: [
        "Caribbean, Crown, Diamond, Emerald, Ruby & Sapphire Princess",
        "Multiple pool decks & wraparound promenade decks",
        "Movies Under the Stars poolside amphitheater",
        "Global deployment across Alaska, Europe, and Asia"
      ],
      image: CrownPrincessImg,
      icon: "Compass",
      tag: "CLASSIC CLASS"
    },
    {
      title: "Coral Class: Coral & Island Princess",
      subtitle: "Panamax Exploration Vessels (2,000 - 2,200 Guests)",
      description: "Smaller, more intimate vessels built to transit the historic Panama Canal locks, offering higher space ratios, oceanview lounges, and specialized longer World Cruise itineraries.",
      bullets: [
        "Coral Princess & Island Princess",
        "Panamax dimensions for historic Panama Canal transit",
        "High percentage of oceanview and balcony staterooms",
        "Extended World Cruises and boutique port access"
      ],
      image: undefined,
      placeholderLabel: "Coral Class: Coral & Island Princess",
      icon: "Star",
      tag: "DESTINATION CLASS"
    }
  ];

  // 3. Staterooms for ThreeColumnGrid with actual stateroom images
  const stateroomImages = [
    StateroomInteriorImg,
    StateroomOceanviewImg,
    StateroomBalconyImg,
    StateroomMiniSuiteImg,
    StateroomPenthouseImg,
    SanctuarySuiteImg
  ];

  const stateroomGridItems = pageData.staterooms.categories.map((cat, idx) => ({
    title: cat.title,
    category: cat.category,
    description: cat.description,
    features: cat.features,
    highlight: `Best for: ${cat.verdict}`,
    image: stateroomImages[idx % stateroomImages.length],
    placeholderLabel: cat.title
  }));

  // 4. Decision steps for StepByStepGuide
  const decisionSteps = pageData.fleetDecisionGuide.steps.map((item) => ({
    step: item.step,
    title: item.title,
    description: item.description
  }));

  // 5. Package Inclusions for DetailedInclusionsList (Clean numbered format with placeholders, matching CrystalCruisesCost)
  const packageInclusionItems = [
    {
      title: "Princess Standard Fare",
      image: undefined,
      placeholderLabel: "Princess Standard Fare",
      paragraphs: [
        "The baseline cruise fare covering essential voyage needs across all 17 Princess ships.",
        "Ideal for travelers who prefer to pay as they go, drink moderately, or disconnect while at sea."
      ],
      bullets: [
        "Full stateroom accommodation with twice-daily housekeeping",
        "All main dining room meals, multi-course dinners and breakfast",
        "World Fresh Marketplace buffet and casual poolside grill items",
        "Broadway-style theater productions and live entertainment",
        "Movies Under the Stars poolside cinema and fitness center",
        "Youth and teen centers (Camp Discovery) with supervised programs"
      ]
    },
    {
      title: "Princess Plus Package ($60/day)",
      image: undefined,
      placeholderLabel: "Princess Plus Package",
      paragraphs: [
        "Princess's most popular package adding essential convenience and beverage inclusions at exceptional value.",
        "Pre-cruise published cost of $60 USD per person per day ($65 USD on select voyages)."
      ],
      bullets: [
        "Plus Beverage Package: drinks up to $15 USD each (15 alcoholic drinks/day + unlimited non-alcoholic)",
        "Wi-Fi: MedallionNet single-device connection per guest",
        "Crew Appreciation: daily gratuities fully covered",
        "2 casual dining meals per voyage (Alfredo's, Kai Sushi, pub dining)",
        "OceanNow on-demand delivery anywhere on the ship included",
        "Room service stateroom delivery charges waived",
        "2 fitness classes per voyage & unlimited premium juices/smoothies"
      ]
    },
    {
      title: "Princess Premier Package ($90/day)",
      image: undefined,
      placeholderLabel: "Princess Premier Package",
      paragraphs: [
        "The comprehensive premium package offering top-tier beverages, multi-device connectivity, and specialty dining.",
        "Pre-cruise published cost of $90 USD per person per day ($95 USD on select voyages)."
      ],
      bullets: [
        "Premier Beverage Package: premium drinks up to $20 USD each (top-shelf spirits, craft cocktails)",
        "Wi-Fi: MedallionNet 4 devices per guest simultaneously",
        "Crew Appreciation: daily gratuities fully covered",
        "2 specialty dining meals per voyage (Crown Grill, Sabatini's, The Catch)",
        "Unlimited casual dining throughout the voyage",
        "Reserved theater seating for evening production shows",
        "Photo package: digital photo downloads plus 3 printed photos",
        "Princess Prizes onboard gaming entries & unlimited fitness classes"
      ]
    }
  ];

  // 6. Pricing Tiers for PricingTiersCards
  const packagePricingTierItems = [
    {
      name: "Standard Fare",
      price: "Cruise Fare Only",
      nights: "Pay As You Go",
      description: "Baseline voyage fare covering stateroom, main dining, and entertainment. Drinks, Wi-Fi, and gratuities billed separately.",
      features: [
        "Stateroom accommodation & twice-daily service",
        "Main Dining Rooms, Buffet & Poolside Grills",
        "Broadway-style theater productions & live music",
        "Movies Under the Stars poolside screenings",
        "Camp Discovery youth & teen programs",
        "Fitness center & sports court access"
      ]
    },
    {
      name: "Princess Plus",
      price: "$60 / person / day",
      nights: "Most Popular Value",
      description: "Bundles drinks, Wi-Fi, and gratuities for travelers seeking convenience and predictable onboard spending.",
      features: [
        "Plus Beverage Package (drinks up to $15 each)",
        "MedallionNet Wi-Fi (1 device per guest)",
        "Crew Appreciation (daily gratuities covered)",
        "2 Casual Dining meals per voyage",
        "OceanNow on-demand delivery included",
        "Complimentary room service delivery",
        "2 fitness classes & premium desserts"
      ]
    },
    {
      name: "Princess Premier",
      price: "$90 / person / day",
      nights: "Maximum Inclusions",
      description: "Top-tier package for guests wanting premium spirits, multi-device connectivity, specialty dining, and VIP theater seating.",
      features: [
        "Premier Beverage Package (drinks up to $20 each)",
        "MedallionNet Wi-Fi (4 devices per guest)",
        "Crew Appreciation (daily gratuities covered)",
        "2 Specialty Dining meals (Crown Grill, Sabatini's)",
        "Unlimited casual dining meals",
        "Reserved production show theater seating",
        "Professional photo downloads + print package",
        "Unlimited boutique fitness classes"
      ]
    }
  ];

  // 7. MedallionClass Tech Bento Items for BentoGlassmorphismGrid (Clean glowing glassmorphism without repeated photos, matching CrystalCruisesGuide)
  const medallionBentoItems = [
    {
      title: "Keyless Stateroom Access",
      subtitle: "Hands-Free Door Unlocking",
      tag: "SEAMLESS COMFORT",
      description: "As you approach your cabin, your stateroom door unlocks automatically via proximity sensors, greeting you on the personal digital portal.",
      stat: "Instant Unlocking"
    },
    {
      title: "OceanNow On-Demand Delivery",
      subtitle: "Food, Cocktails & Essentials Anywhere",
      tag: "PERSONALIZED SERVICE",
      description: "Order drinks, gourmet bites, or suncare products directly in the app, and crew members locate and deliver directly to your deck lounger or lounge seat.",
      stat: "Ship-Wide Tracking"
    },
    {
      title: "OceanReady Expedited Boarding",
      subtitle: "Streamlined Terminal Check-In",
      tag: "DIGITAL ARRIVAL",
      description: "Upload your passport, security photo, and travel preferences ahead of time for fast-track boarding from terminal curb to ship in minutes.",
      stat: "Expedited Boarding"
    },
    {
      title: "ShipMate & Interactive Navigation",
      subtitle: "Wayfinding & Companion Locator",
      tag: "SMART CONNECTIVITY",
      description: "Navigate ship decks with turn-by-turn wayfinding directions and easily locate family or travel companions anywhere across the vessel.",
      stat: "Interactive Deck Maps"
    }
  ];

  // 8. Destination Cards for CardGrid
  const destinationCards = pageData.destinations.regions.map((region, idx) => {
    const icons = ["Compass", "Sun", "Anchor", "Waves", "Camera", "Globe", "Sparkles", "Ship", "MapPin", "Mountain", "Palmtree", "Navigation"];
    return {
      title: region.title,
      description: `${region.category}: ${region.description}`,
      icon: icons[idx % icons.length],
      bullets: [region.highlight]
    };
  });

  // 9. Traveler Profiles (Clean placeholder styling, matching CrystalCruisesGuide Section 18)
  const travelerProfileItems = pageData.travelerProfiles.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Curated Supporting Guides & Topic Clusters (Pillar Page Hub - Reference CrystalCruisesGuide)
  // Individual page names and links are commented out until sub-pages are created in App.tsx
  const princessHubItems = [
    {
      title: "Cost, Packages & Value Guides",
      category: "Pricing & Packages",
      description: "Comprehensive breakdowns of cruise fares, standard vs Plus vs Premier packages, and inclusions.",
      image: undefined,
      placeholderLabel: "Princess Cruises Cost & Packages",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "Cruise Cost & Pricing", url: "/princess-cruises/cost" },
        { label: "What Is Included & Extra", url: "/princess-cruises/whats-included" },
        { label: "Princess Plus vs. Premier", url: "/princess-cruises/plus-vs-premier" },
        { label: "Is Princess Plus Worth It?", url: "/princess-cruises/princess-plus" },
        { label: "Is Princess Premier Worth It?", url: "/princess-cruises/princess-premier" }
      ],
      mainUrl: "/princess-cruises/cost"
    },
    {
      title: "Ships, Classes, Staterooms & Suites",
      category: "Fleet & Staterooms",
      description: "Detailed walkthroughs of the 17-ship fleet, ship classes, cabin categories, and luxury collections.",
      image: undefined,
      placeholderLabel: "Princess Ships & Staterooms",
      actionLabel: "Explore Ships & Suites",
      links: [
        { label: "Fleet & Ships Guide", url: "/princess-cruises/ships" },
        { label: "Ship Classes Compared", url: "/princess-cruises/ship-classes" },
        { label: "Staterooms & Suites Guide", url: "/princess-cruises/staterooms-and-suites" },
        { label: "Balcony vs. Mini-Suite", url: "/princess-cruises/balcony-vs-mini-suite" },
        { label: "Reserve vs. Sanctuary Collection", url: "/princess-cruises/reserve-vs-sanctuary-collection" }
      ],
      mainUrl: "/princess-cruises/ships"
    },
    {
      title: "Alaska Cruises & Cruisetours",
      category: "Alaska Travel Guides",
      description: "Comprehensive guides to Alaska glacier routes, land lodges, wilderness trains, and departure ports.",
      image: undefined,
      placeholderLabel: "Princess Alaska Cruises",
      actionLabel: "Explore Alaska Guides",
      links: [
        { label: "Alaska Cruises Overview", url: "/princess-cruises/alaska" },
        { label: "Alaska Cruisetours & Land Lodges", url: "/princess-cruises/alaska-cruisetours" },
        { label: "Voyage of Glaciers vs. Inside Passage", url: "/princess-cruises/voyage-of-the-glaciers-vs-inside-passage" },
        { label: "Alaska Departure Ports Compared", url: "/princess-cruises/alaska-departure-ports" }
      ],
      mainUrl: "/princess-cruises/alaska"
    },
    {
      title: "Dining, Medallion & Onboard Life",
      category: "Onboard Experience",
      description: "In-depth guides to specialty restaurants, beverage packages, MedallionClass tech, dress codes, and gratuities.",
      image: undefined,
      placeholderLabel: "Princess Dining & Medallion",
      actionLabel: "Explore Onboard Life",
      links: [
        { label: "Dining & Restaurants Guide", url: "/princess-cruises/dining" },
        { label: "Drink Packages & Beverage Costs", url: "/princess-cruises/drink-packages" },
        { label: "Wi-Fi & MedallionNet Packages", url: "/princess-cruises/wifi" },
        { label: "Medallion & App Setup Guide", url: "/princess-cruises/medallion-and-app" },
        { label: "Gratuities & Crew Appreciation", url: "/princess-cruises/gratuities" },
        { label: "Dress Code & Packing Essentials", url: "/princess-cruises/dress-code" }
      ],
      mainUrl: "/princess-cruises/dining"
    },
    {
      title: "Cruise Line Comparisons & Showdowns",
      category: "Brand Comparisons",
      description: "Direct head-to-head showdowns comparing Princess Cruises against Celebrity, Holland America, and Royal Caribbean.",
      image: undefined,
      placeholderLabel: "Princess Competitor Showdowns",
      actionLabel: "Compare Cruise Lines",
      links: [
        { label: "Princess vs. Celebrity", url: "/princess-cruises/princess-vs-celebrity" },
        { label: "Princess vs. Holland America (Alaska)", url: "/princess-cruises/princess-vs-holland-america-alaska" },
        { label: "Princess vs. Royal Caribbean", url: "/princess-cruises/princess-vs-royal-caribbean" }
      ],
      mainUrl: "/princess-cruises/princess-vs-celebrity"
    },
    {
      title: "Destinations, Travelers & Loyalty",
      category: "Worldwide & Traveler Styles",
      description: "Dedicated resources for families, solo travelers, accessibility, Mediterranean, Caribbean, World Cruises, and Captain's Circle.",
      image: undefined,
      placeholderLabel: "Princess Destinations & Travelers",
      actionLabel: "Explore More Guides",
      links: [
        { label: "Princess Cruises for Families", url: "/princess-cruises/families" },
        { label: "Accessible Staterooms & Facilities", url: "/princess-cruises/accessibility" },
        // { label: "Princess for Solo Travelers", url: "/princess-cruises/solo-travelers" },
        // { label: "Mediterranean Cruises Guide", url: "/princess-cruises/mediterranean" },
        // { label: "Caribbean Cruises & Islands", url: "/princess-cruises/caribbean" },
        // { label: "World Cruises & Grand Voyages", url: "/princess-cruises/world-cruises" },
        // { label: "Captain's Circle Loyalty Program", url: "/princess-cruises/captains-circle" }
      ],
      mainUrl: "/princess-cruises/families"
    }
  ];

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
        //   "url": "https://www.tripsandships.com/assets/PRINCESS/Ships/princess-cruises-amalfi-italy-sunrise-sun-princess.webp",
        //   "caption": "Princess Cruises - Ships, Staterooms, Packages and Destinations"
        // },
        // "image": "https://www.tripsandships.com/assets/PRINCESS/Ships/princess-cruises-amalfi-italy-sunrise-sun-princess.webp",
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
          "caption": "Angela Hughes - Luxury Cruise and Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises, river cruises and personalized travel planning.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Ocean Cruises",
          "Princess Cruises",
          "Princess Cruise Ships",
          "Cruise Stateroom Selection",
          "Princess Plus and Princess Premier Packages",
          "Cruise Destinations",
          "Cruise Vacation Planning"
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
            "name": "Princess Cruises",
            "item": "https://www.tripsandships.com/princess-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Princess Cruises: The Complete Guide",
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
    <div className="princess-cruises-guide-page bg-white min-h-screen font-sans text-slate-800">
      {/* ─── SEO HEAD TAGS & STRUCTURED DATA ─── */}
      <Helmet>
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
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
        backgroundImage={SunPrincessImg}
        imageAlt="Princess Cruises flagship Sun Princess ocean voyage at sunrise"
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
        watermarkText="PRINCESS"
      />

      {/* ─── SECTION 3: PRINCESS AT A GLANCE (BentoQuickFacts Component - 10-Item Interlocking Bento) ─── */}
      <BentoQuickFacts
        title={pageData.atAGlance.title}
        items={atAGlanceBentoItems}
        paragraphs={[pageData.atAGlance.footnote]}
      />

      {/* ─── SECTION 4: WHAT PRINCESS IS KNOWN FOR (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase data={pageData.brandPillars} />

      {/* ─── SECTION 5: CURATED SUPPORTING GUIDES & TOPIC CLUSTERS (InteractivePillarHubGrid - Matching CrystalCruisesGuide) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Curated Supporting Guides & Topic Clusters"
          subtitle="Explore in-depth articles on Princess cruise costs, packages, ship comparisons, stateroom upgrades, dining, and worldwide destinations."
          items={princessHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 6: THE PRINCESS FLEET: SHIPS & CLASSES (HighlightsSplit Component - Matching CrystalCruisesGuide) ─── */}
      <HighlightsSplit
        title={pageData.fleetSection.title}
        subtitle={pageData.fleetSection.subtitle}
        items={fleetHighlightItems}
      />

      {/* ─── SECTION 7: HOW TO CHOOSE THE RIGHT PRINCESS SHIP (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.fleetDecisionGuide.title}
        subtitle={pageData.fleetDecisionGuide.subtitle}
        steps={decisionSteps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 8: STATEROOMS & SUITES (ThreeColumnGrid with Stateroom Images) ─── */}
      <ThreeColumnGrid
        title={pageData.staterooms.title}
        subtitle={pageData.staterooms.subtitle}
        items={stateroomGridItems}
      />

      {/* ─── SECTION 9: STATEROOM DECISION MATRIX (ComparisonTable Component) ─── */}
      <ComparisonTable data={pageData.staterooms.selectionTable} />

      {/* ─── SECTION 10: RESERVE COLLECTION VS SANCTUARY COLLECTION (ContainedShowdown Component) ─── */}
      <ContainedShowdown
        title={pageData.showdownCollections.title}
        brandA={pageData.showdownCollections.reserve}
        brandB={pageData.showdownCollections.sanctuary}
      />

      {/* ─── SECTION 11: PRINCESS PACKAGES: PLUS VS PREMIER INCLUSIONS & PRICING ─── */}
      <div id="packages">
        {/* Package Inclusions (DetailedInclusionsList Component) */}
        <DetailedInclusionsList
          title={pageData.packages.comparisonTable.title}
          intro={[pageData.packages.comparisonTable.subtitle]}
          items={packageInclusionItems}
        />

        {/* Published Package Pricing (PricingTiersCards Component) */}
        <PricingTiersCards
          title={pageData.packages.pricingTable.title}
          subtitle="Pre-Cruise Published Daily Rates"
          items={packagePricingTierItems}
          theme="light"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <AuthorityBox
          eyebrow="PACKAGE VALUE ASSESSMENT"
          heading="Evaluating Princess Plus vs. Princess Premier"
          quote={`${pageData.packages.analysis.plusDesc} ${pageData.packages.analysis.premierDesc}`}
          author="Angela Hughes"
          authorRole="CEO of Trips & Ships Luxury Travel"
        />
      </div>

      {/* ─── SECTION 12: DINING & CULINARY EXPERIENCES (FeatureSplit Component) ─── */}
      <FeatureSplit
        title={pageData.dining.title}
        subtitles={[
          "Signature Steakhouses & Fine Trattorias",
          "Casual Eateries & Included Main Dining"
        ]}
        summary={pageData.dining.subtitle}
        features={pageData.dining.venues.map((v) => `${v.title} (${v.category}): ${v.description}`)}
        bestFor={[
          "World Fresh Marketplace flexible buffet dining",
          "Crown Grill signature premium steak and lobster",
          "Sabatini's artisan handmade pastas and Italian classics",
          "Alfredo's Neapolitan pizza baked fresh to order",
          "The Catch by Rudi seafood creations by Master Chef Rudi Sodamin"
        ]}
        image={SanctuaryDiningImg}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 13: MEDALLIONCLASS: HOW PRINCESS TECHNOLOGY WORKS (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.technology.title}
        subtitle={pageData.technology.subtitle}
        bentoItems={medallionBentoItems}
      />

      {/* ─── SECTION 14: PRINCESS CRUISES DESTINATIONS: WHERE CAN YOU SAIL? (CardGrid Component) ─── */}
      <CardGrid
        title={pageData.destinations.title}
        subtitle={pageData.destinations.subtitle}
        cards={destinationCards}
        columns={4}
        stagger={false}
      />

      {/* ─── SECTION 15: TRAVELER PROFILES: COUPLES, FAMILIES, ADULTS (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.travelerProfiles.title}
        subtitle={pageData.travelerProfiles.subtitle}
        items={travelerProfileItems}
      />

      {/* ─── SECTION 16: PRINCESS CRUISES VS. LUXURY CRUISE LINES (LuxuryComparisonMatrix Component) ─── */}
      <LuxuryComparisonMatrix
        title={pageData.luxuryComparison.title}
        subtitle={pageData.luxuryComparison.subtitle}
        headers={pageData.luxuryComparison.headers}
        rows={pageData.luxuryComparison.rows}
        image={DestAmalfiImg}
      />

      {/* ─── SECTION 17: VIDEO SHOWCASE SECTION (VideoEmbed Component with Placeholder - Matching CrystalCruisesGuide) ─── */}
      <VideoEmbed
        data={{
          badge: "See Princess Cruises in Action",
          title: "Experience Destination-Led Ocean Cruising",
          description: "Discover what makes Sun Princess, MedallionClass technology, and worldwide itineraries an extraordinary voyage at sea.",
          youtubeId: "placeholder"
        }}
      />

      {/* ─── SECTION 18: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE SPECIALIST"
        experienceBadge="40+ YEARS IN TRAVEL LEADERSHIP"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Cruise & Vacation Authority"
        credentials={pageData.angelaBio.credentials}
        quote={pageData.angelaBio.quote}
        quoteSubtitle="Angela Hughes, CEO & Founder of Trips & Ships Luxury Travel"
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Princess Cruises",
          subtitle: "Clear, expert guidance on ships, staterooms, packages, inclusions, and worldwide itineraries.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 18: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Plan Your Princess Cruise?"
        description="Connect with Angela Hughes and our cruise specialists to compare upcoming sailings, evaluate Princess Plus vs. Premier, select the best stateroom, and curate your seamless journey."
        buttonText="Plan Your Princess Cruise"
        buttonLink="/contact"
      />
    </div>
  );
};

export default PrincessCruisesGuide;

