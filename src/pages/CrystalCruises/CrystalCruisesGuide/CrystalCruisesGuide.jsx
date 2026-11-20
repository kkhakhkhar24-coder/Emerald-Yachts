import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Media (2).jpg';
import { getLeadSource } from '@/lib/leadTracking';

/* ── Placeholder image imports (kept commented out as in RiversideRhoneCruises) ─────────────────
   // import HeroImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-hero.jpg";
   // import LifestyleImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-lifestyle.jpg";
   // import DiningImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-dining.jpg";
   // import SerenityImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-serenity.jpg";
   // import SymphonyImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-symphony.jpg";
   // import GraceImage from "@/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-grace.jpg";
─────────────────────────────────────────────────────────────────── */

// Shared Components & UI System (Exact Ritz-Carlton Component Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import FeatureSplit from '@/components/ui/FeatureSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import CardGrid from '@/components/ui/CardGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import SailingVesselSpecsShowcase from '@/components/ui/SailingVesselSpecsShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import VideoEmbed from '@/components/ui/VideoEmbed';
import StepByStepGuide from '@/components/ui/StepByStepGuide';

const CONTACT_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/CkOERndqFtUOOmdOo2Id";

const CrystalCruisesGuide = () => {
  const [formSrc, setFormSrc] = useState(CONTACT_FORM_SRC);

  // LeadConnector tracking
  useEffect(() => {
    const { sourcePage, landingPage } = getLeadSource();
    const params = new URLSearchParams();
    if (sourcePage) params.set("source_page", sourcePage);
    if (landingPage) params.set("landing_page", landingPage);
    const query = params.toString();
    if (query) setFormSrc(`${CONTACT_FORM_SRC}?${query}`);
  }, []);

  // LeadConnector script loader
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Intro Sections mapping for PremiumIntro (matching RitzCarltonYachtCollectionCost Section 2)
  const introSections = [
    {
      heading: "2026 Crystal Cruises Complete Guide",
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3
      ]
    }
  ];

  // Data mapping for Why Discerning Travelers Choose Crystal (Section 5: CardGrid)
  const whyAttentionCards = pageData.whyAttention.differentiators.map((diff, idx) => {
    const icons = ['ShieldCheck', 'Ship', 'Sparkles', 'UtensilsCrossed'];
    return {
      icon: icons[idx % icons.length],
      title: diff.label,
      description: diff.desc
    };
  });

  // Map fleet overview items for HighlightsSplit (matching Ritz-Carlton Section 5 & RiversideRhoneCruises placeholder pattern)
  const fleetOverviewItems = pageData.fleetOverview.items.map((item, idx) => {
    const seoLabels = [
      "Crystal Serenity Luxury Ocean Ship",
      "Crystal Symphony Luxury Ocean Ship",
      "Crystal Grace New Luxury Ship 2028"
    ];
    return {
      ...item,
      image: [
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-serenity.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-symphony.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-grace.jpg"
      ][idx],
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map cabin innovations for ThreeColumnGrid (matching Ritz-Carlton Section 6 & RiversideRhoneCruises placeholder pattern)
  const cabinInnovationItems = pageData.cabinInnovations.features.map((item, idx) => {
    const seoLabels = [
      "Crystal Cruises Penthouse Suite Layout",
      "Junior Crystal Penthouse Suite Living Space",
      "Sapphire Veranda Suite Private Balcony",
      "Crystal Cruises Ocean View Stateroom",
      "Aquamarine Veranda Suite Amenities",
      "Single Guest Room Dedicated Solo Stateroom"
    ];
    return {
      ...item,
      image: [
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-penthouse-suite.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-junior-penthouse.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-sapphire-veranda.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-ocean-view.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-aquamarine-veranda.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-single-guest-room.jpg"
      ][idx],
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map dining & inclusions for ThreeColumnGrid (matching Ritz-Carlton Section 7 & RiversideRhoneCruises placeholder pattern)
  const diningInclusionItems = pageData.diningAndInclusions.items.map((item, idx) => {
    const seoLabels = [
      "Umi Uma by Chef Nobu Matsuhisa Japanese Peruvian",
      "Osteria d’Ovidio Alajmo Brothers Italian Specialty",
      "Beefbar Beef Reef and Leaf Concept",
      "Waterside Main Dining Room",
      "Marketplace Buffet and Trident Grill Poolside",
      "The Bistro Café Scoops Gelato and 24-7 In-Suite Dining"
    ];
    return {
      ...item,
      image: [
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/umi-uma-nobu.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/osteria-d-ovidio.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/beefbar.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/waterside-restaurant.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/marketplace-trident-grill.jpg",
        // "src/assets/CrystalCruises/CrystalCruisesPillarPage/the-bistro-in-suite-dining.jpg"
      ][idx],
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Pricing Tier Items for PricingTiersCards (Component-based)
  const pricingTierItems = pageData.pricingEstimates.tiers.map((tier) => ({
    name: tier.duration,
    price: tier.priceRange,
    description: tier.description,
    nights: tier.duration
  }));

  // Traveler Guide Items for ThreeColumnGrid (Component-based)
  const travelerGuideItems = pageData.travelerGuides.items.map((guide) => ({
    title: guide.title,
    description: guide.summary,
    category: "PRACTICAL GUIDE",
    placeholderLabel: guide.title
  }));

  // Data for Section 8: SailingVesselSpecsShowcase (Crystal Ship Comparison)
  const fleetVesselSpecs = [
    {
      name: "Crystal Serenity",
      subtitle: "Fleet Flagship • Operating",
      description: "Crystal Serenity is the larger operating ship in the fleet, featuring generous public spaces, 10 distinct dining venues, and 402 ocean-view guest suites with dedicated butler service.",
      vibe: "Spacious Ocean Liner Luxury & Expansive Lounges",
      specs: [
        { label: "Operational Status", value: "Operating Worldwide", percentage: 100 },
        { label: "Guest Capacity", value: "740 Guests", percentage: 100 },
        { label: "Ocean-View Rooms & Suites", value: "402 Suites", percentage: 95 },
        { label: "Dining Venues", value: "10 Distinct Venues", percentage: 100 },
        { label: "Best Comparison Point", value: "Larger Current Ship", percentage: 90 },
        { label: "Butler Service", value: "Included in Every Category", percentage: 100 }
      ],
      verdict: "Best for travelers who value the widest selection of dining options, expansive public spaces, and longer grand voyages without sacrificing intimate luxury."
    },
    {
      name: "Crystal Symphony",
      subtitle: "Intimate Classic • Operating",
      description: "Crystal Symphony offers an intimate scale with 606 guest capacity and 330 ocean-view suites, creating an exclusive country-club ambiance with boutique access into smaller worldwide harbors.",
      vibe: "Intimate Mid-Size Scale & Refined Atmosphere",
      specs: [
        { label: "Operational Status", value: "Operating Worldwide", percentage: 100 },
        { label: "Guest Capacity", value: "606 Guests", percentage: 82 },
        { label: "Ocean-View Rooms & Suites", value: "330 Suites", percentage: 82 },
        { label: "Dining Venues", value: "9 Distinct Venues", percentage: 90 },
        { label: "Best Comparison Point", value: "Smaller Intimate Ship", percentage: 85 },
        { label: "Solo Staterooms", value: "Dedicated Single Guest Rooms", percentage: 100 }
      ],
      verdict: "Ideal for guests who prioritize a smaller guest capacity, quieter deck lounges, and dedicated solo guest room options without solo supplements."
    },
    {
      name: "Crystal Grace",
      subtitle: "Next-Generation Flagship • Planned for 2028",
      description: "Scheduled to debut in 2028, Crystal Grace represents the next era of Crystal cruising with 650 double-occupancy guests, state-of-the-art suite architecture, and brand-new culinary concepts.",
      vibe: "Next-Generation Ultra-Luxury Architecture",
      specs: [
        { label: "Operational Status", value: "Planned Debut 2028", percentage: 65 },
        { label: "Guest Capacity", value: "650 (Double Occupancy)", percentage: 88 },
        { label: "Ocean-View Rooms & Suites", value: "All Ocean-View Concepts", percentage: 95 },
        { label: "Dining Venues", value: "New Concepts Planned", percentage: 95 },
        { label: "Best Comparison Point", value: "Future New-Build Experience", percentage: 95 },
        { label: "Architecture", value: "Cutting-Edge Environmental Tech", percentage: 100 }
      ],
      verdict: "The future benchmark for Crystal ultra-luxury cruising, featuring newly engineered suites, innovative wellness spaces, and advance inaugural bookings."
    }
  ];

  // Data for Section 10: DetailedInclusionsList (Main Crystal Accommodation Categories)
  const accommodationCategoryItems = [
    {
      title: "Crystal Penthouse",
      paragraphs: [
        "Among the largest accommodation options in ultra-luxury cruising, with expansive residential living and dining areas reaching up to 1,265 square feet.",
        "Features expansive wrap-around verandas, master bath with jacuzzi, private dining area, and personalized European butler service."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Up to 1,265 Sq. Ft.", "Separate Dining & Living", "Private Teak Veranda", "Master Bath with Jacuzzi", "Dedicated Butler Service"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Guests seeking the most spacious suite experience, expansive entertaining space, and the highest echelon of personalized service."
      }
    },
    {
      title: "Junior Crystal Penthouse",
      paragraphs: [
        "Larger accommodation with separate living and dining areas, offering a generous residential suite layout with expansive oceanfront views.",
        "Includes walk-in closets, marble bathrooms, daily afternoon canapés, and dedicated butler care throughout your voyage."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Separate Living Area", "Private Veranda", "Walk-in Wardrobe", "Marble Bathroom", "Full Butler Privileges"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Travelers who value extra room, suite privileges, and generous square footage for extended worldwide voyages."
      }
    },
    {
      title: "Sapphire Veranda Suites",
      paragraphs: [
        "Higher-category luxury accommodation offering private outdoor verandas, dedicated sitting areas, and enhanced room amenities.",
        "Designed for travelers who enjoy spending time on their private veranda admiring coastal vistas with butler beverage service."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Private Outdoor Veranda", "Dedicated Sitting Lounge", "Enhanced Minibar", "Butler Packing & Unpacking", "Scenic Ocean Views"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Guests wanting more space, indoor-outdoor balcony living, and added luxury amenities between ports."
      }
    },
    {
      title: "Aquamarine Veranda Suites",
      paragraphs: [
        "Enhanced room amenities and selected veranda options designed for travelers seeking additional comforts and seamless outdoor balcony access.",
        "Strikes an exceptional balance between generous balcony space, stylish contemporary décor, and personalized butler attention."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Private Balcony Access", "Contemporary Bath", "Daily Canapés", "24-Hour Room Service", "Butler Service Included"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Travelers seeking additional comforts, fresh sea breezes, and private veranda access at an attractive luxury tier."
      }
    },
    {
      title: "Double Guest Room",
      paragraphs: [
        "Ocean-view or veranda configurations depending on ship, delivering full access to Crystal’s renowned hospitality, fine dining, and entertainment.",
        "Includes dedicated butler service, fine Italian linens, and marble bathrooms at an exceptional luxury value."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Ocean-View or Veranda", "Full Butler Attention", "Luxury Italian Linens", "Marble Bathroom", "Twice-Daily Housekeeping"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Guests prioritizing value within the ultra-luxury experience without sacrificing butler attention or shipboard amenities."
      }
    },
    {
      title: "Single Guest Room",
      paragraphs: [
        "Dedicated single-occupancy staterooms with expansive picture ocean views on selected ships, eliminating excessive solo supplement charges.",
        "Solo travelers enjoy full butler service, access to solo social gatherings, and Ambassador Hosts on dance and dinner evenings."
      ],
      lists: [
        {
          title: "Category Inclusions",
          items: ["Single Occupancy Layout", "Zero Solo Supplement", "Full Butler Care", "Panoramic Ocean View", "Solo Traveler Socials"]
        }
      ],
      highlight: {
        title: "May Suit",
        text: "Individual travelers seeking ultra-luxury cruising, personal safety, and social connection without paying double fares."
      }
    }
  ];

  // Data for Section 12: BentoGlassmorphismGrid (Other Dining Options - Dark Navy Theme)
  const otherDiningBentoItems = [
    {
      stat: "01",
      title: "Waterside Restaurant",
      description: "Crystal's elegant main dining room offering changing daily dinner menus, open seating, fresh seasonal specialties, and table-side sommelier service."
    },
    {
      stat: "02",
      title: "Marketplace",
      description: "Open-kitchen breakfast and lunch buffet with made-to-order stations, indoor seating, and panoramic ocean-view veranda dining."
    },
    {
      stat: "03",
      title: "Trident Grill",
      description: "Casual poolside venue serving made-to-order burgers, wraps, gourmet sandwiches, and light comfort food throughout the afternoon."
    },
    {
      stat: "04",
      title: "The Bistro",
      description: "Parisian café offering artisanal coffees, freshly baked pastries, light snacks, and evening international cheeses and charcuterie."
    },
    {
      stat: "05",
      title: "The Vintage Room",
      description: "Exclusive private gourmet dining experience featuring custom multi-course dinners paired with rare vintage wines from the sommelier's private cellar (supplement applies)."
    },
    {
      stat: "06",
      title: "Scoops Gelato Bar",
      description: "Handcrafted Italian-style gelato and refreshing fruit sorbets with gourmet toppings, served daily poolside at no additional cost."
    },
    {
      stat: "07",
      title: "In-Suite Dining",
      description: "24-hour room service delivered to your suite or private veranda, featuring course-by-course service prepared by Waterside and served by your butler."
    }
  ];

  // Data for Section 14: LuxuryComparisonMatrix (Crystal Cruises vs. Other Luxury Cruise Lines - Dark Navy Theme)
  const luxuryBrandComparisonRows = [
    [
      "Regent Seven Seas",
      "Crystal provides dedicated European butler service across all room tiers, signature Umi Uma by Nobu dining, and complete flexibility to customize private shore touring.",
      "Regent features an all-suite, all-balcony fleet and bundles unlimited standard group shore excursions into upfront cruise fares."
    ],
    [
      "Silversea",
      "Crystal delivers larger standard suite square footage, vibrant public entertainment spaces, and master culinary collaborations with Chef Nobu Matsuhisa.",
      "Silversea offers dedicated expedition itineraries across polar and remote regions alongside classic ultra-luxury ocean voyages."
    ],
    [
      "Seabourn",
      "Crystal Serenity and Symphony offer 9 to 10 distinct venues, larger show lounges, and expansive teak wrap-around promenade decks.",
      "Seabourn emphasizes yacht-like intimacy (264–600 guests) with water sports marina platforms and relaxed country-club ambiance."
    ],
    [
      "Explora Journeys",
      "Crystal provides heritage ultra-luxury service, European butler care in every suite, and comprehensive all-inclusive dining with no dinner reservation rationing.",
      "Explora features contemporary European ocean resort design with modern 2023+ architecture and flexible open dining concepts."
    ],
    [
      "Ritz-Carlton Yacht Collection",
      "Crystal offers larger ocean ship scale, Broadway-caliber entertainment lounges, and expansive multi-tier dining with complimentary specialty venues.",
      "Ritz-Carlton operates boutique superyachts (298–452 guests) with aft marinas and Marriott Bonvoy loyalty integration."
    ]
  ];

  // Interactive Hub Cards (Topic Clusters & Supporting Internal Guides)
  const highestPriorityHubItems = [
    {
      title: "Cost, Inclusions & Value Guides",
      category: "Pricing & Inclusions",
      description: "Detailed analyses of fares, inclusions, daily rates, and honest value assessments.",
      image: null,
      placeholderLabel: "Crystal Cruises Cost & Inclusions Guide",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "Cruise Cost & Pricing", url: "/crystal-cruises/cost" },
        { label: "What Is Included & Extra", url: "/crystal-cruises/whats-included" },
        { label: "Is Crystal Worth the Money?", url: "/crystal-cruises/is-it-worth-it" }
      ],
      mainUrl: "/crystal-cruises/cost"
    },
    {
      title: "Ship Guides & Fleet Comparisons",
      category: "Fleet Guides",
      description: "In-depth evaluations of Crystal Serenity and Crystal Symphony, suites, dining, and life onboard.",
      image: null,
      placeholderLabel: "Crystal Cruises Fleet Comparisons",
      actionLabel: "Compare Ships & Guides",
      links: [
        { label: "Serenity vs. Symphony", url: "/crystal-cruises/serenity-vs-symphony" },
        { label: "Crystal Serenity Ship Guide", url: "/crystal-cruises/crystal-serenity" },
        { label: "Crystal Symphony Ship Guide", url: "/crystal-cruises/crystal-symphony" },
        { label: "Worldwide Itineraries Guide", url: "/crystal-cruises/itineraries" }
      ],
      mainUrl: "/crystal-cruises/serenity-vs-symphony"
    },
    {
      title: "Suites & Accommodation Guides",
      category: "Suites & Cabins",
      description: "Detailed walkthroughs of Crystal Penthouses, Sapphire Verandas, Aquamarine Suites, and Single Staterooms.",
      image: null,
      placeholderLabel: "Crystal Cruises Suites Guide",
      actionLabel: "Explore Suite Guides",
      links: [
        { label: "Suites & Staterooms Guide", url: "/crystal-cruises/suites" }
      ],
      mainUrl: "/crystal-cruises/suites"
    },
    {
      title: "Dining, Menus & Gastronomy",
      category: "Culinary Highlights",
      description: "Everything you need to know about Umi Uma by Nobu, Osteria d’Ovidio, Beefbar, and all-inclusive dining policies.",
      image: null,
      placeholderLabel: "Crystal Cruises Dining Venues",
      actionLabel: "Explore Dining Guides",
      links: [
        { label: "Dining & Restaurants Guide", url: "/crystal-cruises/dining" }
      ],
      mainUrl: "/crystal-cruises/dining"
    },
    {
      title: "Luxury Competitor Showdowns",
      category: "Brand Comparisons",
      description: "Direct head-to-head showdowns comparing Crystal with Regent Seven Seas and Silversea.",
      image: null,
      placeholderLabel: "Crystal Cruises Competitor Comparisons",
      actionLabel: "Compare Luxury Brands",
      links: [
        { label: "Crystal vs. Regent Seven Seas", url: "/crystal-cruises/crystal-vs-regent" },
        { label: "Crystal vs. Silversea", url: "/crystal-cruises/crystal-vs-silversea" }
      ],
      mainUrl: "/crystal-cruises/crystal-vs-regent"
    },
    {
      title: "Dress Code & Traveler Essentials",
      category: "Traveler Resources",
      description: "Essential pre-cruise planning: evening dress codes, daytime attire guidelines, packing tips, and etiquette.",
      image: null,
      placeholderLabel: "Crystal Cruises Dress Code Guide",
      actionLabel: "View Dress Code Guide",
      links: [
        { label: "Dress Code Essentials", url: "/crystal-cruises/dress-code" }
      ],
      mainUrl: "/crystal-cruises/dress-code"
    }
  ];

  // Destination Cards for CardGrid (Simple, clean, image-free layout)
  const destinationCards = pageData.destinationsSection.regions.map((region, idx) => {
    const icons = ["Compass", "Anchor", "Camera", "Landmark", "Waves", "Sun", "Globe", "Sparkles"];
    return {
      title: region.name,
      description: region.desc,
      icon: icons[idx % icons.length]
    };
  });

  // Exact JSON-LD Structured Data Schema (Matching reference schema architecture)
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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-hero.jpg",
        //   "caption": pageData.seo.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-hero.jpg",
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
          "Luxury Ocean Cruises",
          "Crystal Cruises",
          "Crystal Serenity & Symphony",
          "Luxury Cruise Suite Selection",
          "Umi Uma Specialty Dining",
          "All-Inclusive Luxury Cruising"
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
        {/* <meta property="og:image" content="https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-hero.jpg" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content="https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-hero.jpg" /> */}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO ─── */}
      <ComparisonHero
        byline={true}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel || "View Pricing & Fares"}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl || "/crystal-cruises/cost"}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Narrative Intro - exact placeholder pattern as in RiversideRhoneCruises) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={
          // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-lifestyle.jpg"
          undefined
        }
        image2={
          // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-dining.jpg"
          undefined
        }
        watermarkText="CRYSTAL"
      />

      {/* ─── SECTION 3: THE CRYSTAL DIFFERENCE OVERVIEW (FeatureSplit Component) ─── */}
      <FeatureSplit
        imagePosition="right"
        theme="light"
        image={
          // "src/assets/CrystalCruises/CrystalCruisesPillarPage/crystal-cruises-overview.jpg"
          undefined
        }
        title={pageData.differenceSection.title}
        subtitles={[pageData.differenceSection.subtitle]}
        features={pageData.differenceSection.specialties}
        summary={pageData.differenceSection.body}
      >
        <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-700 shadow-sm mt-6">
          <strong className="text-navy-950 font-semibold">Fleet Update:</strong> {pageData.differenceSection.videoText}
        </div>
      </FeatureSplit>

      {/* ─── SECTION 4: INTERACTIVE HUB GRID (Supporting Guides - Matching Ritz-Carlton Section 3) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Curated Supporting Guides & Topic Clusters"
          subtitle="Explore in-depth articles on cost, inclusions, honest reviews, competitor comparisons, and suite selection."
          items={highestPriorityHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 5: WHY DISCERNING TRAVELERS CHOOSE CRYSTAL (AuthorityBox & CardGrid Components) ─── */}
      <AuthorityBox
        eyebrow={pageData.whyAttention.badge}
        quote={pageData.whyAttention.quote}
        authorName={pageData.whyAttention.author}
        authorRole="CEO, Trips & Ships Luxury Travel"
      />

      <CardGrid
        title={pageData.whyAttention.title}
        subtitle={`${pageData.whyAttention.body} ${pageData.whyAttention.operatingStatus}`}
        cards={whyAttentionCards}
        columns={4}
        stagger={false}
      />

      {/* ─── SECTION 6: CRYSTAL CRUISES AT A GLANCE (ComparisonTable Component) ─── */}
      <ComparisonTable data={pageData.atAGlance} />

      {/* ─── SECTION 7: FLEET OVERVIEW (HighlightsSplit Component - Matching Ritz-Carlton Section 5) ─── */}
      <HighlightsSplit
        title={pageData.fleetOverview.title}
        subtitle={pageData.fleetOverview.subtitle}
        items={fleetOverviewItems}
      />

      {/* ─── SECTION 8: FLEET COMPARISON SPECS (SailingVesselSpecsShowcase Component) ─── */}
      <SailingVesselSpecsShowcase
        title={pageData.fleetOverview.table.title}
        subtitle="Vessel Technical Specifications & Fleet Overview"
        brands={fleetVesselSpecs}
      />

      {/* ─── SECTION 9: CABIN INNOVATIONS & SUITES (ThreeColumnGrid - Matching Ritz-Carlton Section 6) ─── */}
      <ThreeColumnGrid
        title={pageData.cabinInnovations.title}
        subtitle={pageData.cabinInnovations.subtitle}
        items={cabinInnovationItems}
      />

      {/* ─── SECTION 10: ACCOMMODATION CATEGORIES (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.cabinInnovations.table.title}
        intro={[
          "Butler service is offered across all guest room and suite categories, with specific amenities and layout dimensions varying by category tier.",
          pageData.cabinInnovations.table.note
        ]}
        items={accommodationCategoryItems}
      />

      {/* ─── SECTION 11: DINING & ALL-INCLUSIVE VALUE (ThreeColumnGrid - Matching Ritz-Carlton Section 7) ─── */}
      <ThreeColumnGrid
        title={pageData.diningAndInclusions.title}
        subtitle={pageData.diningAndInclusions.subtitle}
        items={diningInclusionItems}
      />

      {/* ─── SECTION 12: OTHER DINING OPTIONS (BentoGlassmorphismGrid Component - Dark Navy Theme) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.diningAndInclusions.otherVenuesTable.title}
        subtitle="Casual poolside grills, artisan gelato, Parisian café bites, and 24-hour in-suite butler service."
        bentoItems={otherDiningBentoItems}
      />

      {/* ─── SECTION 13: VACATION INVESTMENT & PRICING (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.pricingEstimates.title}
        subtitle={pageData.pricingEstimates.subtitle}
        items={pricingTierItems}
      />

      {/* ─── SECTION 14: BRAND COMPARISON MATRIX (LuxuryComparisonMatrix Component - Dark Navy Theme) ─── */}
      <LuxuryComparisonMatrix
        title={pageData.brandComparison.table.title}
        subtitle="Side-by-side analysis comparing Crystal against the leading ultra-luxury ocean and yacht cruise lines."
        headers={["Luxury Cruise Line", "Crystal Experience & Strengths", "Competitor Focus & Inclusions"]}
        rows={luxuryBrandComparisonRows}
      />

      {/* ─── SECTION 15: INCLUSIONS VS ADDITIONAL EXPENSES (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.inclusionsVsExpenses.title}
        prosTitle={pageData.inclusionsVsExpenses.includedTitle}
        consTitle={pageData.inclusionsVsExpenses.additionalTitle}
        bestFor={pageData.inclusionsVsExpenses.included}
        notBestFor={pageData.inclusionsVsExpenses.additional}
        bottomNote="Shore excursions, top-shelf rare vintages, and spa services are generally billed separately. Confirm details for your specific voyage."
        type="pros-cons"
      />

      {/* ─── SECTION 16: MIDDLE CTA (CenterCTA - Matching Ritz-Carlton Section 11) ─── */}
      <CenterCTA
        title="Ready to Start Planning Your Crystal Cruise?"
        description="Connect with our luxury travel advisors to compare Crystal Serenity, Symphony, and Grace itineraries."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 17: DESTINATIONS SHOWCASE (CardGrid Component - Clean, Image-Free Grid) ─── */}
      <CardGrid
        title={pageData.destinationsSection.title}
        subtitle={pageData.destinationsSection.subtitle}
        cards={destinationCards}
        columns={4}
        stagger={false}
      />

      {/* ─── SECTION 18: KEY TRAVELER PRACTICAL ADVICE (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.travelerGuides.title}
        subtitle={pageData.travelerGuides.subtitle}
        items={travelerGuideItems}
      />

      {/* ─── SECTION 19: 6-STEP DECISION ROADMAP (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.howToChoose.title}
        subtitle="Decision Roadmap"
        steps={pageData.howToChoose.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 20: VIDEO SHOWCASE SECTION (VideoEmbed Component with Placeholder) ─── */}
      <VideoEmbed
        data={{
          badge: "See Crystal Cruises in Action",
          title: "Experience Ultra-Luxury Ocean Cruising",
          description: "Discover what makes Crystal Serenity and Crystal Symphony an extraordinary luxury vacation at sea.",
          youtubeId: "placeholder"
        }}
      />

      {/* ─── SECTION 21: ANGELA HUGHES AUTHORITY CREDENTIALS (ExpertCredentials - Matching Ritz-Carlton Section 11) ─── */}
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
          "Over 4 Decades Designing Luxury Travel Experiences",
          "Explored 121+ Countries Across Seven Continents",
          "Certified Luxury Small Ship & Ocean Cruise Specialist",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Travel Leaders Network Luxury Travel Influencer of the Year",
          "Named Most Influential Women in Travel 2026 by TravelPulse"
        ]}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText="Meet Angela Hughes"
        ctaLink="/about-angela-hughes"
      />

      {/* ─── SECTION 22: COMPREHENSIVE FAQ (FAQAccordion - Matching Ritz-Carlton Section 12) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Crystal Cruises",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 23: FINAL CENTER CTA (CenterCTA - Matching Ritz-Carlton Section 13) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalCruisesGuide;
