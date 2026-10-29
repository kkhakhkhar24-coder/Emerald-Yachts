import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Shared UI System Components (Unique Component Architecture - All 25 Sections Unique)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CuratedComforts from '@/components/ui/CuratedComforts';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import IconGrid from '@/components/ui/IconGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import ExpertReviewVerdict from '@/components/ui/ExpertReviewVerdict';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import CardGrid from '@/components/ui/CardGrid';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function CelebrityInfiniteVeranda() {
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

  // 2. Data mapping for At a Glance Bento Facts (Section 3)
  const glanceFactsItems = pageData.glance.map(item => ({
    label: item.feature,
    value: item.detail
  }));

  // 3. Data mapping for HighlightsSplit (Section 4: Mechanism)
  const mechanismHighlightsItems = [
    {
      title: "When Window is Closed",
      description: "The stateroom remains completely enclosed and climate-controlled. The area feels like an integrated part of the cabin living space with panoramic ocean views through the expansive floor-to-ceiling glass.",
      icon: "Ship",
      features: pageData.windowClosed.map(item => `${item.title}: ${item.description}`)
    },
    {
      title: "When Window is Lowered",
      description: "With the push of a button, the upper glass panel retracts to railing height, converting the front of the stateroom into an open-air veranda directly exposed to the sea air.",
      icon: "Waves",
      features: pageData.windowOpen.map(item => `${item.title}: ${item.description}`)
    }
  ];

  // 4. Data mapping for Infinite vs Traditional Balcony Table (Section 6)
  const vsBalconyTableData = {
    title: "Infinite Veranda vs. Traditional Balcony",
    headers: ["Feature", "Infinite Veranda", "Traditional Balcony"],
    rows: pageData.vsBalconyTable.map(row => [row.feature, row.infinite, row.balcony])
  };

  // 5. Data mapping for BentoGlassmorphismGrid (Section 7: Core Difference)
  const bentoDifferenceItems = [
    {
      title: "Traditional Balcony: Exterior Room",
      description: "Cabin → Sliding Glass Door → Outdoor Balcony. Creates a physically separate exterior patio space that remains apart from the sleeping quarters.",
      stat: "Separate Room"
    },
    {
      title: "Infinite Veranda: Convertible Living Space",
      description: "Cabin → Convertible Window → Open-Air Veranda. The veranda area is permanently integrated into the stateroom floor plan, expanding interior living square footage.",
      stat: "Integrated Space"
    },
    {
      title: "Airflow & Climate Control",
      description: "When closed, active AC keeps the room cool. When lowered, fresh ocean air flows through the entire stateroom.",
      stat: "Smart Climate"
    },
    {
      title: "Panoramic Visual Connection",
      description: "Floor-to-ceiling glass creates an open, unobstructed visual connection with the sea from anywhere inside the stateroom.",
      stat: "Floor-to-Ceiling"
    }
  ];

  // 6. Data mapping for CuratedComforts (Section 8: Benefits)
  const curatedBenefitsData = {
    title: "Celebrity Infinite Veranda Benefits",
    subtitle: "SIGNATURE ADVANTAGES",
    items: pageData.benefits
  };

  // 6b. Data mapping for LuxuryGrid (Section 9: Disadvantages & Trade-offs)
  const disadvantagesItems = pageData.disadvantages.map((item, idx) => {
    const [title, ...descParts] = item.split(' — ');
    const icons = ['ship', 'user', 'map', 'check', 'dollar'];
    return {
      title,
      description: descParts.join(' — '),
      icon: icons[idx % icons.length]
    };
  });

  // 7. Data mapping for IconGrid (Section 10: Privacy & Weather)
  const privacyWeatherIconItems = [
    {
      type: "shield",
      title: "Is a Celebrity Infinite Veranda Private?",
      description: "It provides a private stateroom veranda area, but the experience of privacy differs from a traditional balcony. Because the veranda is integrated into the room, travelers should consider: adjacent cabin configurations, ship hull design, window positions, curtains, and deck placement. Automated blackout blinds allow complete privacy from the exterior whenever needed."
    },
    {
      type: "sun",
      title: "Can You Use It in Bad Weather?",
      description: "You can still enjoy the view with the window closed in any weather. When the window is open, rain, wind, and colder temperatures naturally affect the experience. However, unlike traditional balconies where you are forced back inside, simply close the window and continue enjoying the ocean views from inside your warm, dry cabin."
    }
  ];

  // 8. Data mapping for Alaska Comparison Table (Section 12: LuxuryCruiseComparisonTable)
  const alaskaTableHeaders = ["Alaska Feature", "Infinite Veranda", "Traditional Balcony"];
  const alaskaTableRows = pageData.alaskaTable.map(row => [row.feature, row.infinite, row.balcony]);

  // 9. Data mapping for GenericChecklistCards (Section 13: Caribbean & Mediterranean)
  const warmWeatherCards = [
    {
      title: "Caribbean Cruises",
      items: [
        "Caribbean cruises are generally more conducive to outdoor relaxation and sunbathing.",
        "Traditional balconies favor extended sunbathing and open-air lounging",
        "Infinite Verandas provide flexible indoor/outdoor space when tropical humidity is high",
        "Large glass windows offer magnificent views arriving into tropical island ports",
        "Air conditioning can be preserved during hot midday sun by keeping the window closed"
      ]
    },
    {
      title: "Mediterranean Cruises",
      items: [
        "Mediterranean cruises involve long scenic stretches between ports along the French Riviera, Amalfi Coast, and Greek Isles.",
        "Ideal for morning coffee watching coastal cliffs and dramatic European harbors",
        "Provides a cool, serene retreat after hot summer walking tours in port",
        "Unobstructed sunset views while sailing along the Mediterranean coastline",
        "Travelers who strongly prefer a separate outdoor balcony may still prefer traditional designs"
      ]
    }
  ];

  // 10. Data mapping for Ocean View Comparison (Section 15: ValueBreakdownSplit)
  const oceanViewIncluded = pageData.vsOceanView.slice(0, 3).map(i => ({
    title: i.feature,
    description: `Infinite Veranda: ${i.infinite} — Convertible stateroom space with direct outdoor sea connection.`
  }));
  const oceanViewExtras = pageData.vsOceanView.slice(3, 6).map(i => ({
    title: i.feature,
    description: `Ocean View: ${i.oceanView} — Fixed sealed window without fresh air or open balcony access.`
  }));

  // 11. Data mapping for Destination Verdicts Cards (Section 20: CardGrid)
  const destinationIcons = ["Mountain", "Sun", "Anchor", "Compass", "Waves"];
  const destinationVerdictCards = pageData.destinationVerdict.map((item, idx) => ({
    title: item.destination,
    description: item.verdict,
    icon: destinationIcons[idx % destinationIcons.length]
  }));

    // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonicalUrl || pageData.seo?.canonical || pageData.meta?.canonicalUrl || pageData.meta?.canonical || 'https://www.tripsandships.com/celebrity-cruises/infinite-veranda';
  const pageTitle = pageData.seo?.title || pageData.meta?.title || 'Celebrity Infinite Veranda: Complete Guide & Review';
  const metaTitle = pageData.seo?.metaTitle || pageData.meta?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || pageData.meta?.metaDescription || pageData.meta?.description || 'In-depth guide to Celebrity Infinite Verandas: how they work, open vs closed window modes, pros & cons, vs traditional balconies, and expert verdict.';

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metaTitle,
        "headline": pageTitle,
        "description": metaDescription,
        "inLanguage": "en-US",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Media%20(2).jpg",
          "caption": pageTitle
        },
        "image": "https://www.tripsandships.com/assets/Media%20(2).jpg",
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
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Celebrity Cruises",
          "Infinite Veranda",
          "Edge Series Cabins",
          "Traditional Balcony vs Infinite Veranda",
          "Stateroom Selection"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Infinite Veranda Guide",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": (Array.isArray(pageData.faqs) ? pageData.faqs : (pageData.faqs?.questions || [])).map(faq => ({
          "@type": "Question",
          "name": (faq.question || faq.q || "").replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer || faq.a || ""
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/Media%20(2).jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/Media%20(2).jpg" />
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
        watermarkText="VERANDA"
        alt1="Celebrity Infinite Veranda Explained"
      />

      {/* ─── SECTION 3: At a Glance Facts (BentoQuickFacts Component) ─── */}
      <div id="overview">
        <BentoQuickFacts
          title="Celebrity Infinite Veranda at a Glance"
          paragraphs={["Key technical and experiential specifications of the Celebrity Infinite Veranda stateroom design."]}
          items={glanceFactsItems}
        />
      </div>

      {/* ─── SECTION 4: The Mechanism (HighlightsSplit Component - Interactive Tabs) ─── */}
      <HighlightsSplit
        title="How Celebrity Infinite Verandas Work"
        items={mechanismHighlightsItems}
      />

      {/* ─── SECTION 5: Visual Design & Layout (FeatureGrid Component) ─── */}
      <FeatureGrid
        title="What Does an Infinite Veranda Look Like?"
        subtitle="The biggest visual difference is the absence of a traditional sliding balcony door. Instead, you have:"
        features={pageData.lookFeatures}
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 6: Head-to-Head Comparison (ComparisonTable Component) ─── */}
      <ComparisonTable
        data={vsBalconyTableData}
      />

      {/* ─── SECTION 7: The Spatial Difference (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title="The Core Spatial Difference"
        subtitle="TRADITIONAL BALCONY VS. INFINITE VERANDA ARCHITECTURE"
        bentoItems={bentoDifferenceItems}
      />

      {/* ─── SECTION 8: Signature Benefits (CuratedComforts Component) ─── */}
      <CuratedComforts
        data={curatedBenefitsData}
      />

      {/* ─── SECTION 9: Disadvantages & Trade-offs (LuxuryGrid Component) ─── */}
      <LuxuryGrid
        title="Celebrity Infinite Veranda Disadvantages"
        subtitle="THE TRADE-OFFS"
        items={disadvantagesItems}
      />

      {/* ─── SECTION 10: Privacy & Weather Reality (IconGrid Component) ─── */}
      <IconGrid
        title="Privacy & Weather Considerations"
        subtitle="Two of the most frequently asked questions about Infinite Verandas explained in detail."
        items={privacyWeatherIconItems}
      />

      {/* ─── SECTION 11: Alaska Scenic Cruising Focus (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Is an Infinite Veranda Good for Alaska?"
        subtitles={["Premier Glacier & Cold-Weather Scenic Viewing"]}
        summary="Yes, it can be an excellent option for Alaska cruises. Alaska is one of the itineraries where a large indoor viewing area is especially valuable. You can watch glaciers, mountains, wildlife, fjords, and coastal scenery from inside the heated stateroom. On colder or rainy days, you can keep the window closed while still enjoying panoramic views."
        features={pageData.alaskaViews}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 12: Alaska Comparison Table (LuxuryCruiseComparisonTable Component) ─── */}
      <LuxuryCruiseComparisonTable
        title="Infinite Veranda for Alaska vs. Traditional Balcony"
        headers={alaskaTableHeaders}
        rows={alaskaTableRows}
      />

      {/* ─── SECTION 13: Warm-Weather Routes (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="Warm-Weather Itineraries: Caribbean & Mediterranean"
        subtitle="WARM-CLIMATE REGIONAL PERFORMANCE"
        cards={warmWeatherCards}
      />

      {/* ─── SECTION 14: Edge Series Ships Breakdown (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Celebrity Ships With Infinite Verandas"
        subtitle="Infinite Verandas are the signature stateroom innovation of Celebrity's award-winning Edge Series fleet."
        items={pageData.ships}
      />

      {/* ─── SECTION 15: Infinite Veranda vs Ocean View (ValueBreakdownSplit Component) ─── */}
      <ValueBreakdownSplit
        title="Infinite Veranda vs. Ocean View Cabin"
        subtitle="An Infinite Veranda is fundamentally different from a standard ocean-view cabin."
        includedTitle="Infinite Veranda Advantages"
        extrasTitle="Ocean View Stateroom Realities"
        included={oceanViewIncluded}
        extras={oceanViewExtras}
      />

      {/* ─── SECTION 16: Infinite vs Standard Veranda (ExpertReviewVerdict Component) ─── */}
      <ExpertReviewVerdict
        title="Infinite Veranda vs. Standard Veranda"
        prosTitle="Infinite Veranda — Best For:"
        pros={pageData.vsStandardInfinite}
        consTitle="Traditional Veranda — Best For:"
        cons={pageData.vsStandardTraditional}
        bottomNote="Neither is universally better. Choose Infinite Veranda for integrated space and cooler climates; choose traditional for exterior privacy and classic balcony lounging."
      />

      {/* ─── SECTION 17: Is It Worth It? (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Is Celebrity Infinite Veranda Worth It?"
        subtitle="It can be worth it — or not — depending on what you actually want from your outdoor space."
        includedTitle="You Should Book an Infinite Veranda If:"
        extrasTitle="Consider a Traditional Balcony Instead If:"
        included={pageData.worthItYes}
        extras={pageData.worthItNo}
      />

      {/* ─── SECTION 18: Traveler Personas (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Should Book an Infinite Veranda?"
        subtitle="TRAVELER MATCHMAKER"
        personas={pageData.personas}
      />

      {/* ─── SECTION 19: Comprehensive Pros & Cons (ProsConsCards Component - Pros-Cons) ─── */}
      <ProsConsCards
        title="Celebrity Infinite Veranda Pros & Cons"
        prosTitle="Pros"
        consTitle="Cons"
        bestFor={pageData.pros}
        notBestFor={pageData.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 20: Destination Verdicts (CardGrid Component) ─── */}
      <CardGrid
        title="Infinite Veranda vs. Traditional Balcony: Which Is Better?"
        subtitle="There is no universal winner. Choose Infinite Veranda if you prioritize views, flexibility and indoor comfort. Choose Traditional Balcony if you prioritize outdoor privacy and the classic balcony experience. The destination should also influence your decision."
        cards={destinationVerdictCards}
        columns={3}
      />

      {/* ─── SECTION 21: 7-Step Decision Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Decide Between Infinite Veranda and Traditional Balcony"
        subtitle="A step-by-step decision framework to choose the ideal veranda stateroom for your cruise."
        steps={pageData.steps}
      />

      {/* ─── SECTION 22: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        image={ProfilePictureAH}
        badge="LUXURY CRUISE SPECIALIST"
        experienceBadge="40+ YEARS EXPERTISE"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Celebrity Cruises Luxury Travel Authority"
        credentials={pageData.angelaBio.expertise}
        bio={pageData.angelaBio.leadParagraph}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteHeading}
        ctaText="Speak With a Celebrity Cruise Expert"
        ctaLink="/celebrity-cruises/why-book-with-us"
      />

      {/* ─── SECTION 23: Why Choose Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Choose Trips & Ships Luxury Travel for Your Celebrity Cabin?",
          subtitle: "Selecting between an Infinite Veranda and a traditional balcony is only one part of planning the right Celebrity cruise. Trips & Ships Luxury Travel can help you match your cabin, ship and itinerary with the way you actually want to travel.",
          pillars: pageData.whyPlan.map(p => ({
            title: p.title,
            description: p.description,
            icon: p.icon.toLowerCase()
          }))
        }}
      />

      {/* ─── SECTION 24: Frequently Asked Questions (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Clear, expert answers to the most common questions about Celebrity Infinite Veranda staterooms.",
          questions: pageData.faqs
        }}
      />

      {/* ─── SECTION 25: Call to Action (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.cta.heading}
        description={pageData.cta.text}
        buttonText={pageData.cta.primaryCtaLabel}
        buttonLink={pageData.cta.primaryCtaUrl}
        theme="dark"
      />
    </div>
  );
}

export default CelebrityInfiniteVeranda;