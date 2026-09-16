import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Images
import angelaImage from '@/assets/Media (2).jpg';
// import yachtHeroImage from '@/assets/EmeraldVSRitzCarltonYacht/Ritzcarton.webp';
// import yachtImage1 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr1.webp';
// import yachtImage2 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr2.webp';
// import yachtImage3 from '@/assets/EmeraldVSRitzCarltonYacht/Evcr3.webp';
// import yachtExperienceImage from '@/assets/EmeraldVSRitzCarltonYacht/Experice.webp';

const yachtHeroImage = null;
const yachtImage1 = null;
const yachtImage2 = null;
const yachtImage3 = null;
const yachtExperienceImage = null;

// Shared UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import MistakesShowcase from '@/components/ui/MistakesShowcase';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';

const RitzCarltonMarriottBonvoyPoints = () => {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: "How Do Marriott Bonvoy Points Work on Ritz-Carlton Yacht Cruises?",
      paragraphs: pageData.intro.paragraphs
    }
  ];

  // 2. Data mapping for Quick Answer (Section 3: CostValueAnalysisCards)
  const quickAnswerEarnMapped = pageData.quickAnswer.earningBullets.map((bullet, idx) => {
    const titles = [
      "5 Points Per $1 on Cruise Fare",
      "5 Points Per $1 on Hotel Packages",
      "1 Elite Night Credit Per Yacht Night",
      "Marriott Credit Card Multipliers"
    ];
    return {
      title: titles[idx] || "Earning Benefit",
      description: bullet
    };
  });

  const quickAnswerRedeemMapped = pageData.quickAnswer.redemptionBullets.map((bullet, idx) => {
    const titles = [
      "180,000 Points = $1,000 Off",
      "90,000 Additional Points = $500 Off",
      "Standard Incremental Redemptions",
      "Full Points Redemption Option",
      "Taxes & Port Fees Excluded"
    ];
    return {
      title: titles[idx] || "Redemption Rule",
      description: bullet
    };
  });

  // 3. Data mapping for Qualifying Fare vs Not Qualifying (Section 6: CostValueAnalysisCards)
  const qualifyingFareMapped = pageData.qualifyingFareSection.includedDetailed;
  const notEarnMapped = pageData.notEarnSection.notEarnDetailed;

  // 4. Data mapping for Hotel Packages & Example (Section 8: PricingTiersCards)
  const hotelPackagesPricingCards = [
    {
      name: "Qualifying Hotel Package Rate",
      price: "5 Points / $1",
      nights: "Room + Transfers + Breakfast",
      description: "Qualifying Marriott Bonvoy hotel packages booked through RCYC earn 5 points per $1. Particularly useful when combining a pre-cruise hotel stay with your yacht vacation."
    },
    {
      name: "Example: Cruise Spend ($20,000)",
      price: "100,000 Base Points",
      nights: "$20,000 × 5 Points",
      description: "Cruise fare points: $20,000 × 5 = 100,000 Marriott Bonvoy points calculated on qualifying cruise fare paid."
    },
    {
      name: "Example: Hotel Package ($1,500)",
      price: "7,500 Base Points",
      nights: "$1,500 × 5 Points",
      description: "Hotel package points: $1,500 × 5 = 7,500 points. Combined trip total: 107,500 base Marriott Bonvoy points (excludes credit card multipliers)."
    }
  ];

  // 5. Data mapping for Elite Night Credits (Section 9: PricingTiersCards)
  const eliteNightsCards = [
    {
      name: "7-Night Yacht Cruise",
      price: "7 Elite Night Credits",
      nights: "1 Credit Per Night",
      description: "Earn 1 Elite Night Credit for each qualifying night aboard the yacht personally paid for and stayed in by the member."
    },
    {
      name: "10-Night Yacht Cruise",
      price: "10 Elite Night Credits",
      nights: "1 Credit Per Night",
      description: "10-night voyage provides 10 Elite Night Credits toward Platinum, Titanium, or Ambassador status qualification."
    },
    {
      name: "14-Night Yacht Cruise",
      price: "14 Elite Night Credits",
      nights: "1 Credit Per Night",
      description: "14-night voyage provides 14 Elite Night Credits. Qualifying hotel packages also generate hotel night credits."
    }
  ];

  // 6. Data mapping for Elite Bonus Points Checkcards (Section 10: GenericChecklistCards)
  const eliteBonusPointsCards = [
    {
      title: "Base Cruise Earning Rules",
      items: [
        "The standard RCYC terms specify 5 base points per qualifying dollar regardless of Marriott Bonvoy Elite status.",
        "Don't automatically calculate the cruise using the hotel-style Marriott Elite bonus multiplier percentages.",
        "Earning is fixed at 5 base points per qualifying $1 paid toward eligible cruise fare."
      ]
    },
    {
      title: "Elite Status Recognition Rules",
      items: [
        "Marriott Bonvoy Elite members receive dedicated onboard benefits depending on their Marriott Bonvoy tier.",
        "The RCYC-specific program operates its own tailored onboard Elite benefits structure.",
        "Status recognition is separated into cash cruise earning (5x base) and dedicated onboard yacht privileges."
      ]
    }
  ];

  // 7. Data mapping for Elite Tier Onboard Benefits (Section 11: BrandPillarsShowcase)
  const eliteBenefitsPillars = {
    title: pageData.eliteBenefitsSection.title,
    subtitle: pageData.eliteBenefitsSection.intro,
    pillars: pageData.eliteBenefitsSection.tiers.map((t, idx) => {
      const icons = ["shield", "star", "award", "compass", "crown"];
      return {
        title: t.name,
        description: `${t.subtitle} ${t.benefits.join(' • ')}`,
        icon: icons[idx % icons.length]
      };
    })
  };

  // 8. Data mapping for Status Transfer (Section 12: HighlightsSplit)
  const statusTransferHighlights = [
    {
      title: "RCYC-Specific Elite Benefits",
      description: "Yes, but the benefits are RCYC-specific. Having Marriott Bonvoy Platinum, Titanium or Ambassador Elite status does not mean that every hotel benefit automatically carries over to the yacht. The Ritz-Carlton Yacht Collection has its own list of Elite onboard benefits.",
      image: yachtExperienceImage,
      icon: "Compass"
    },
    {
      title: "Hotel Property Guarantees Excluded",
      description: "The current terms specifically state that certain Marriott Bonvoy benefits available at participating hotel properties are not available at RCYC, including the Elite Benefits Guarantee and Ultimate Reservation Guarantee. Your status is recognized, but the yacht applies its own onboard Elite benefits.",
      image: yachtImage3,
      icon: "Star"
    }
  ];

  // 9. Data mapping for Point Valuation Cards (Section 14: PricingTiersCards)
  const pointValuationPricingCards = [
    {
      name: "180,000 Points = $1,000 Off",
      price: "~0.556¢ / Point",
      nights: "Initial Threshold",
      description: "$1,000 ÷ 180,000 = approximately 0.556 cents per point applied toward eligible cruise fare savings."
    },
    {
      name: "90,000 Points = $500 Off",
      price: "~0.556¢ / Point",
      nights: "Subsequent Increment",
      description: "$500 ÷ 90,000 = approximately 0.556 cents per point for each additional redemption block."
    },
    {
      name: "Standard Conversion Rate",
      price: "≈ 0.56 Cents",
      nights: "Mathematical Value",
      description: "The standard redemption structure effectively values 1 Marriott Bonvoy point at approximately 0.56 cents toward eligible Ritz-Carlton Yacht cruise fare."
    }
  ];

  // 10. Data mapping for Is Using Points a Good Use? (Section 15: CostValueAnalysisCards)
  const goodUsePointsMapped = pageData.isGoodUse.considerUsingPoints.items.map((item, idx) => ({
    title: `Point Strategy Factor #${idx + 1}`,
    description: item
  }));

  const goodUseCashMapped = pageData.isGoodUse.considerPayingCash.items.map((item, idx) => ({
    title: `Cash Strategy Factor #${idx + 1}`,
    description: item
  }));

  // 11. Data mapping for Policy Rules Grids (Sections 17 & 18: ThreeColumnGrid)
  const policyItemsGroup1 = pageData.detailedPolicies.slice(0, 6).map((p, idx) => {
    const images = [yachtHeroImage, yachtImage1, yachtImage2, yachtImage3, yachtExperienceImage, yachtImage1];
    return {
      title: p.title,
      category: p.badge,
      description: p.paragraphs.join(' ') + (p.highlight ? ` [Important: ${p.highlight.intro} ${p.highlight.items.join(', ')}]` : '') + (p.summaryBox ? ` [In Simple Terms: ${p.summaryBox.items.join('; ')}]` : ''),
      image: images[idx % images.length],
      placeholderLabel: p.badge.toUpperCase()
    };
  });

  const policyItemsGroup2 = pageData.detailedPolicies.slice(6).map((p, idx) => {
    const images = [yachtImage2, yachtImage3, yachtExperienceImage, yachtHeroImage, yachtImage1, yachtImage2, yachtImage3, yachtExperienceImage];
    return {
      title: p.title,
      category: p.badge,
      description: p.paragraphs.join(' ') + (p.bestPractice ? ` [Best Practice: ${p.bestPractice.text}]` : '') + (p.ifPointsDoNotAppear ? ` [Note: ${p.ifPointsDoNotAppear.text}]` : ''),
      image: images[idx % images.length],
      placeholderLabel: p.badge.toUpperCase()
    };
  });

  // 12. Data mapping for Real-World Trip Calculations (Section 19: PricingTiersCards)
  const realTripCalculationsCards = [
    {
      name: "Earning: $25,000 Yacht Cruise",
      price: "125,000+ Points",
      nights: "10 Elite Night Credits",
      description: "Base earning: $25,000 × 5 = 125,000 Marriott Bonvoy points. Plus 10 Elite Night Credits on a 10-night cruise, plus additional points from eligible co-branded credit card."
    },
    {
      name: "Redeeming: $30,000 Yacht Cruise",
      price: "$2,000 Fare Savings",
      nights: "360,000 Points Applied",
      description: "Standard increment conversion: 360,000 points → $2,000 cruise fare savings. Remaining cruise fare: $28,000 before taxes, fees, and port expenses."
    }
  ];

  // 13. Data mapping for Ambassador & Charters (Section 20: ThreeColumnGrid)
  const ambassadorAndChartersItems = [
    {
      title: "Ambassador Elite Onboard Perks",
      category: "Ambassador Tier",
      description: "Ambassador Elite members receive private Elite reception, in-suite welcome gift, first-evening laundry pressing, priority boarding/departure, early S.E.A. access, and complimentary laundry throughout the cruise.",
      image: yachtExperienceImage,
      placeholderLabel: "AMBASSADOR PERKS"
    },
    {
      title: "Ambassador Qualifying Spend",
      category: "Status Spend",
      description: "The cash portion paid toward qualifying Cruise Fare and qualifying hotel package rates counts toward the qualified annual spend requirement for Marriott Bonvoy Ambassador Elite status.",
      image: yachtImage1,
      placeholderLabel: "QUALIFYING SPEND"
    },
    {
      title: "Full-Yacht Buyouts & Charters",
      category: "Charters & Groups",
      description: "Members cannot earn points or benefits on full-yacht buyouts/charters and incentive groups booked through the RCYC Meetings and Incentive department.",
      image: yachtHeroImage,
      placeholderLabel: "CHARTER RULES"
    }
  ];

  // 14. Data mapping for 8-Step Strategy Sequence (Section 22: InteractivePlanningRoadmap)
  const strategyStepsMapped = pageData.strategySection.steps.map((stepItem, idx) => {
    const images = [yachtHeroImage, yachtImage1, yachtImage2, yachtImage3, yachtExperienceImage, yachtImage1, yachtImage2, yachtHeroImage];
    return {
      timeframe: stepItem.step,
      title: stepItem.step,
      description: stepItem.description,
      image: images[idx % images.length]
    };
  });

  // 15. Data mapping for How Travel Advisors Help (Section 23: BrandPillarsShowcase)
  const advisorHelpPillars = {
    title: pageData.advisorHelpSection.title,
    subtitle: "Marriott Bonvoy points add complexity to luxury yacht travel. An advisor coordinates every trip layer to ensure points, suites, and itineraries work together seamlessly.",
    pillars: [
      { title: "Yacht & Suite Selection", description: "Selecting the ideal vessel (Evrima, Ilma, Luminara) and suite category with optimal terrace layouts.", icon: "ship" },
      { title: "Bonvoy Account Association", description: "Attaching your Marriott Bonvoy number at least 30 days prior to departure to secure points eligibility.", icon: "star" },
      { title: "Points Redemption Deadlines", description: "Applying points toward eligible cruise fare before the 121-day final payment deadline.", icon: "compass" },
      { title: "Hotels, Transfers & Excursions", description: "Coordinating pre-cruise Marriott hotel packages, private airport transfers, and private excursions.", icon: "window" }
    ]
  };

  // 16. Data mapping for What to Remember Summary (Section 24: BrandPillarsShowcase)
  const whatToRememberPillars = {
    title: pageData.whatToRemember.title,
    subtitle: "Key takeaways and essential rules for Marriott Bonvoy members sailing with The Ritz-Carlton Yacht Collection.",
    pillars: pageData.whatToRemember.items.map((item, idx) => {
      const icons = ["star", "ship", "compass", "window", "star", "compass", "ship", "window"];
      return {
        title: item.label,
        description: item.text,
        icon: icons[idx % icons.length]
      };
    })
  };

  // 17. Data mapping for Resource Hub (Section 28: InteractivePillarHubGrid)
  const resourceHubItems = [
    {
      title: "Cost & Inclusions Guides",
      category: "Pricing & Inclusions",
      description: "Detailed analyses of fares, inclusions, daily rates, and honest value assessments.",
      image: yachtHeroImage,
      placeholderLabel: "PRICING PLACEHOLDER",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "How Much Does a Ritz-Carlton Yacht Cruise Cost?", url: "/ritz-carlton-yacht-collection-cost" },
        { label: "What Is Included on a Ritz-Carlton Yacht Cruise?", url: "/ritz-carlton-yacht-collection-included" },
        { label: "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review", url: "/ritz-carlton-yacht-collection-reviews" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-cost"
    },
    {
      title: "Yacht & Brand Comparisons",
      category: "Fleet & Competitor Showdowns",
      description: "Side-by-side comparisons of Evrima, Ilma, Luminara, Explora, and Seabourn.",
      image: yachtImage1,
      placeholderLabel: "COMPARISONS PLACEHOLDER",
      actionLabel: "Explore Comparisons",
      links: [
        { label: "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?", url: "/ritz-carlton-evrima-vs-ilma-vs-luminara" },
        { label: "Ritz-Carlton Yacht Collection vs. Explora Journeys", url: "/ritz-carlton-yacht-collection-vs-explora-journeys" },
        { label: "Ritz-Carlton Yacht Collection vs. Seabourn", url: "/ritz-carlton-yacht-collection-vs-seabourn" }
      ],
      mainUrl: "/ritz-carlton-evrima-vs-ilma-vs-luminara"
    },
    {
      title: "Onboard Lifestyle & Suites",
      category: "Suites & Amenities",
      description: "Guides to dress code, family friendliness, Bonvoy points, and suite selection.",
      image: yachtImage2,
      placeholderLabel: "LIFESTYLE PLACEHOLDER",
      actionLabel: "Explore Onboard Guides",
      links: [
        { label: "How Do Marriott Bonvoy Points Work on Ritz-Carlton Yacht Cruises?", url: "/ritz-carlton-yacht-collection-marriott-bonvoy-points" },
        { label: "Ritz-Carlton Yacht Collection Fleet & Suites Overview", url: "/ritz-carlton-yacht-collection" },
        { label: "Emerald Yachts vs. Ritz-Carlton Yacht Collection", url: "/emerald-yachts-vs-ritz-carlton-yacht-collection" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-marriott-bonvoy-points"
    }
  ];

  // Complete Schema JSON-LD Graph
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points",
        "name": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Marriott Bonvoy points on Ritz-Carlton Yacht Collection cruises"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#breadcrumb"
        },
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#article",
        "headline": pageData.hero.title,
        "description": pageData.seo.metaDescription,
        "url": pageData.seo.canonicalUrl,
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#webpage"
        },
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "articleSection": "Luxury Cruises",
        "keywords": pageData.seo.keywords.split(', '),
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#breadcrumb",
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
            "name": "Luxury Cruises",
            "item": "https://www.tripsandships.com/cruise/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ritz-Carlton Yacht Collection",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Marriott Bonvoy Points on Ritz-Carlton Yachts",
            "item": pageData.seo.canonicalUrl
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/path-to-your-approved-logo.webp"
        },
        "sameAs": [
          "https://www.facebook.com/tripsandships",
          "https://www.instagram.com/tripsandships",
          "https://www.linkedin.com/company/trips-and-ships"
        ]
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel advisors specializing in luxury cruises, yachts, expeditions, safaris and personalized travel planning.",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes#person",
        "name": "Angela Hughes",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel and a luxury travel expert specializing in cruises, yachts, expeditions, safaris and high-end travel planning.",
        "knowsAbout": [
          "Luxury Cruises",
          "Luxury Yacht Travel",
          "Ritz-Carlton Yacht Collection",
          "Marriott Bonvoy",
          "Luxury Travel",
          "Expedition Cruises",
          "River Cruises",
          "Luxury Safaris"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-marriott-bonvoy-points#faq",
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
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation Bar Component */}
      <Navbar />

      {/* ─── SECTION 1: Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={yachtHeroImage}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: Premium Narrative Intro Component ─── */}
      <PremiumIntro
        sections={introSections}
        image1={yachtImage1}
        image2={yachtImage2}
        watermarkText="BONVOY"
      />

      {/* ─── SECTION 3: Quick Answer Earning vs Redemptions (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.quickAnswer.title}
        subtitle={pageData.quickAnswer.introText}
        includedTitle="Members Can Earn:"
        extrasTitle="For Redemptions:"
        included={quickAnswerEarnMapped}
        extras={quickAnswerRedeemMapped}
      />

      {/* ─── SECTION 4: Crucial Program Distinction (AuthorityBox #1) ─── */}
      <AuthorityBox
        title="Crucial Program Distinction"
        content="You are not booking a Ritz-Carlton Yacht cruise as a conventional Marriott Bonvoy award night. Instead, Marriott Bonvoy points are applied as a savings amount against eligible cruise fare (taxes, fees, and port expenses require cash)."
        author="Marriott Bonvoy Program Architecture"
      />

      {/* ─── SECTION 5: How Many Points Do You Earn Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={{
          title: pageData.howManyPointsEarn.title,
          description: `${pageData.howManyPointsEarn.headlineRate}. These are base points calculated from qualifying cash paid toward the cruise fare under official terms.`,
          headers: pageData.howManyPointsEarn.table.headers,
          rows: pageData.howManyPointsEarn.table.rows
        }}
      />

      {/* ─── SECTION 6: Qualifying Cruise Fare vs NOT Qualifying (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.qualifyingFareSection.title}
        subtitle="The five-points-per-dollar calculation applies to qualifying Cruise Fare components, while separately charged services do not earn points."
        includedTitle="Qualifying Cruise Fare Includes:"
        extrasTitle={pageData.notEarnSection.title}
        included={qualifyingFareMapped}
        extras={notEarnMapped}
      />

      {/* ─── SECTION 7: The Simple Rule (AuthorityBox #2) ─── */}
      <AuthorityBox
        title="The Simple Rule"
        content="Don't assume that every dollar you spend onboard earns Marriott points. The important number is your qualifying Cruise Fare, not your total onboard spending."
        author="Angela Hughes, Luxury Travel Expert & CEO"
      />

      {/* ─── SECTION 8: Hotel Packages & Cruise + Hotel Example (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.hotelPackagesSection.title}
        subtitle="HOTEL PACKAGES & COMBINED TRIP CALCULATIONS"
        items={hotelPackagesPricingCards}
        theme="light"
      />

      {/* ─── SECTION 9: Elite Night Credits Advancement (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.eliteNightCreditsSection.title}
        subtitle="ELITE STATUS ADVANCEMENT (1 QUALIFYING NIGHT = 1 CREDIT)"
        items={eliteNightsCards}
        theme="dark"
      />

      {/* ─── SECTION 10: Elite Bonus Points Rules (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title={pageData.eliteBonusPointsSection.title}
        subtitle="BONUS POINTS VS. ONBOARD PRIVILEGES"
        cards={eliteBonusPointsCards}
      />

      {/* ─── SECTION 11: Elite Tier Onboard Benefits (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={eliteBenefitsPillars}
      />

      {/* ─── SECTION 12: Status Transfer Rule (HighlightsSplit Component) ─── */}
      <HighlightsSplit
        title={pageData.eliteBenefitsSection.statusTransfer.title}
        items={statusTransferHighlights}
      />

      {/* ─── SECTION 13: Redemption Examples Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={{
          title: pageData.redeemPointsSection.examplesTable.title,
          description: "180,000 Points → $1,000 Cruise Fare Savings, followed by 90,000-point increments for $500 savings. Points reduce the qualifying cruise fare cash balance.",
          headers: pageData.redeemPointsSection.examplesTable.headers,
          rows: pageData.redeemPointsSection.examplesTable.rows
        }}
      />

      {/* ─── SECTION 14: Point Valuation Analysis (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title={pageData.redeemPointsSection.pointValue.title}
        subtitle="MATHEMATICAL POINT CONVERSION & VALUATION"
        items={pointValuationPricingCards}
        theme="light"
      />

      {/* ─── SECTION 15: Is Using Points a Good Use? (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.isGoodUse.title}
        subtitle="Evaluating the ~0.56 cents per point fixed value against your personal travel goals. Compare the actual value you receive with your other realistic redemption options."
        includedTitle={pageData.isGoodUse.considerUsingPoints.title}
        extrasTitle={pageData.isGoodUse.considerPayingCash.title}
        included={goodUsePointsMapped}
        extras={goodUseCashMapped}
      />

      {/* ─── SECTION 16: RCYC vs Marriott Hotel Awards Comparison (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={{
          title: pageData.comparisonTable.title,
          description: pageData.comparisonTable.description,
          headers: pageData.comparisonTable.headers,
          rows: pageData.comparisonTable.rows
        }}
      />

      {/* ─── SECTION 17: Detailed Policy Rules - Part 1 (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Marriott Bonvoy Yacht Booking Policies & Rules"
        subtitle="Key details covering full point bookings, taxes, port expenses, hotel portions, multi-suite allowances, and travel advisor reservations."
        items={policyItemsGroup1}
      />

      {/* ─── SECTION 18: Detailed Policy Rules - Part 2 (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Redemption Deadlines, Cancellations & Card Multipliers"
        subtitle="Important timelines including the 121-day final payment deadline, cancellation refunds, point transfers, and co-branded card earnings."
        items={policyItemsGroup2}
      />

      {/* ─── SECTION 19: Real-World Trip Calculations (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title="Real-World Voyage Calculation Examples"
        subtitle="SAMPLE EARNING AND REDEMPTION BENCHMARKS"
        items={realTripCalculationsCards}
        theme="light"
      />

      {/* ─── SECTION 20: Ambassador Status & Charters (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Ambassador Elite Benefits, Spend & Full-Yacht Charters"
        subtitle="Understanding annual qualifying spend recognition for Ambassador status and policy constraints for full-yacht charter buyouts."
        items={ambassadorAndChartersItems}
      />

      {/* ─── SECTION 21: Middle Call to Action (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Yacht Vacation?"
        description="Navigate complex Bonvoy redemptions, suite allocations, and pre-cruise arrangements with expert guidance from certified luxury cruise specialists."
        buttonText="Contact a Travel Advisor"
        buttonLink="/contact"
        image={yachtExperienceImage}
      />

      {/* ─── SECTION 22: 8-Step Strategy Sequence (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.strategySection.title}
        subtitle={pageData.strategySection.intro}
        steps={strategyStepsMapped}
      />

      {/* ─── SECTION 23: How a Luxury Travel Advisor Can Help (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={advisorHelpPillars}
      />

      {/* ─── SECTION 24: What to Remember Summary (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={whatToRememberPillars}
      />

      {/* ─── SECTION 25: 7 Common Mistakes to Avoid (MistakesShowcase Component) ─── */}
      <MistakesShowcase
        mistakes={pageData.mistakes}
      />

      {/* ─── SECTION 26: Angela Hughes Credentials (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO & Luxury Travel Advisor, Trips & Ships Luxury Travel"
        bio="Angela Hughes is an acclaimed luxury travel expert, CEO of Trips & Ships Luxury Travel, and founder of Luxury Travel University. With over three decades of luxury travel experience, Angela specializes in curating ultra-luxury yacht voyages, private expeditions, and optimizing loyalty rewards for affluent travelers worldwide."
        image={angelaImage}
        quote="Marriott Bonvoy points add immense value to high-end yacht travel when applied strategically. The key is knowing exactly when to redeem and ensuring your loyalty account is correctly synchronized before the final payment deadline."
      />

      {/* ─── SECTION 27: FAQ Accordion Component (All 20 FAQs) ─── */}
      <FAQAccordion
        data={pageData.faqs}
      />

      {/* ─── SECTION 28: Related Resource Guides Hub (InteractivePillarHubGrid Component) ─── */}
      <InteractivePillarHubGrid
        title="Explore The Ritz-Carlton Yacht Collection Guides"
        subtitle="Explore our comprehensive library of pricing, suites, competitor comparisons, and luxury cruise planning guides."
        items={resourceHubItems}
      />

      {/* ─── SECTION 29: Final Call to Action (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Book Your Ritz-Carlton Yacht Journey?"
        description="Whether you want to earn 5x Bonvoy points on an upcoming voyage or apply hundreds of thousands of points toward cruise fare savings, our certified luxury advisors handle every detail from start to finish."
        buttonText="Request a Luxury Yacht Consultation"
        buttonLink="/contact"
        image={yachtHeroImage}
      />
    </div>
  );
};

export default RitzCarltonMarriottBonvoyPoints;
