import React from 'react';
import { Helmet } from 'react-helmet-async';
import pageData from './data.json';
import { Link } from 'react-router-dom';
import { Check, Award, X, Star, ShieldCheck, Compass, Info, CheckCircle2, XCircle, ArrowRight, Play, Clock, HelpCircle } from 'lucide-react';
import Navbar from "@/components/Navbar/Navbar";

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Ritz-Carlton Yacht Collection Assets (SEO Optimized)
import heroExteriorImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-luxury-cruise.jpg';
import ctaExteriorImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-travel-advisory.jpeg';

// Interactive Hub Grid Images (SEO Optimized)
import pricingLifestyleImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-cost-and-inclusions.jpeg';
import comparisonVallettaImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-fleet-comparisons.jpg';
import lifestyleCabanaImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-onboard-lifestyle-and-suites.jpg';
import shoreExcursionImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-shore-excursions-and-destinations.jpeg';
import advisorEmbarkationImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-travel-advisor-commercial-services.jpg';

// Fleet Overview Images (SEO Optimized)
import evrimaImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-evrima-yacht-fleet-overview.jpeg';
import ilmaImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-ilma-yacht-fleet-overview.jpeg';
import luminaraImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-luminara-yacht-fleet-overview.jpeg';

// Cabin Innovations Images (SEO Optimized)
import terraceSuiteImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-private-ocean-terraces.jpg';
import conciergeSuiteImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-suite-ambassador-service.jpg';
import grandSuiteImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-expansive-suite-layouts.jpg';

// Dining & Inclusions Images (SEO Optimized)
import diningMistralImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-all-inclusive-dining.jpg';
import beverageBarImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-premium-included-beverages.jpg';
import marinaAmenitiesImg from '@/assets/RitzCartlonPillarPage/ritz-carlton-yacht-marina-and-onboard-amenities.jpg';

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

const RitzCarltonYachtCollection = () => {
  // Map images for fleet overview (SEO Optimized labels)
  const fleetOverviewItems = pageData.fleetOverview.items.map((item, idx) => {
    const fleetImages = [evrimaImg, ilmaImg, luminaraImg];
    const seoLabels = [
      "Ritz-Carlton Evrima Luxury Yacht",
      "Ritz-Carlton Ilma Luxury Yacht",
      "Ritz-Carlton Luminara Luxury Yacht"
    ];
    return {
      ...item,
      image: fleetImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map images for cabin innovations (SEO Optimized labels)
  const cabinInnovationItems = pageData.cabinInnovations.features.map((item, idx) => {
    const cabinImages = [terraceSuiteImg, conciergeSuiteImg, grandSuiteImg];
    const seoLabels = [
      "Ritz-Carlton Yacht Private Ocean Terraces",
      "Ritz-Carlton Yacht Suite Ambassador Service",
      "Ritz-Carlton Yacht Expansive Suite Layouts"
    ];
    return {
      ...item,
      image: cabinImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // Map images for dining & inclusions (SEO Optimized labels)
  const diningInclusionItems = pageData.diningAndInclusions.items.map((item, idx) => {
    const diningImages = [diningMistralImg, beverageBarImg, marinaAmenitiesImg];
    const seoLabels = [
      "Ritz-Carlton Yacht All-Inclusive Dining",
      "Ritz-Carlton Yacht Premium Included Beverages",
      "Ritz-Carlton Yacht Marina & Onboard Amenities"
    ];
    return {
      ...item,
      image: diningImages[idx] || null,
      placeholderLabel: seoLabels[idx] || item.title
    };
  });

  // EXACT Highest-Priority Supporting Pages list
  const highestPrioritySupportingPages = [
    { title: "How Much Does a Ritz-Carlton Yacht Cruise Cost?", url: "/ritz-carlton-yacht-collection-cost" },
    { title: "What Is Included on a Ritz-Carlton Yacht Cruise?", url: "/ritz-carlton-yacht-collection-included" },
    { title: "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review", url: "/ritz-carlton-yacht-collection-reviews" },
    { title: "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?", url: "/ritz-carlton-evrima-vs-ilma-vs-luminara" },
    { title: "Ritz-Carlton Yacht Collection vs. Explora Journeys", url: "/ritz-carlton-yacht-collection-vs-explora-journeys" },
    { title: "Ritz-Carlton Yacht Collection vs. Seabourn", url: "/ritz-carlton-yacht-collection-vs-seabourn" },
    { title: "What Is the Dress Code on Ritz-Carlton Yachts?", url: "/ritz-carlton-yacht-collection-dress-code" },
    { title: "Are Ritz-Carlton Yacht Cruises Good for Families and Children?", url: "/ritz-carlton-yacht-collection-families-children" },
    { title: "How Do Marriott Bonvoy Points Work on Ritz-Carlton Yacht Cruises?", url: "/ritz-carlton-yacht-collection-marriott-bonvoy-points" },
    { title: "What Are the Best Suites on Ritz-Carlton Yachts?", url: "/ritz-carlton-yacht-collection-suites" },
    { title: "Are Ritz-Carlton Yacht Shore Excursions Included?", url: "/ritz-carlton-yacht-shore-excursions-included" },
    { title: "Is The Ritz-Carlton Yacht Collection Good for People Who Do Not Like Cruises?", url: "/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises" },
    { title: "Ritz-Carlton Yacht Cruises from Miami: What You Need to Know", url: "/ritz-carlton-yacht-cruises-from-miami" },
    { title: "Ritz-Carlton Yacht Caribbean Cruises: Best Itineraries and When to Go", url: "/ritz-carlton-yacht-caribbean-cruises" }
  ];

  // EXACT Strong Commercial Pages list
  const strongCommercialPages = [
    { title: "Why Book a Ritz-Carlton Yacht Cruise Through a Travel Advisor?", url: "/ritz-carlton-yacht-cruises/travel-advisor" },
    { title: "Ritz-Carlton Yacht Collection Travel Advisor in Florida", url: "/ritz-carlton-yacht-collection-travel-advisor-florida" },
    { title: "Ritz-Carlton Yacht Collection Travel Advisor in Orlando", url: "/ritz-carlton-yacht-collection-travel-advisor-orlando" },
    { title: "How to Choose the Right Ritz-Carlton Yacht, Suite and Itinerary", url: "/how-to-choose-right-ritz-carlton-yacht-suite-itinerary" }
  ];

  // Interactive Hub Cards (SEO Optimized)
  const highestPriorityHubItems = [
    {
      title: "Cost & Inclusions Guides",
      category: "Pricing & Inclusions",
      description: "Detailed analyses of fares, inclusions, daily rates, and honest value assessments.",
      image: pricingLifestyleImg,
      imagePosition: "object-[center_90%]",
      placeholderLabel: "Ritz-Carlton Yacht Cost & Inclusions Guide",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "How Much Does a Ritz-Carlton Yacht Cruise Cost?", url: "/ritz-carlton-yacht-collection-cost" },
        { label: "What Is Included on a Ritz-Carlton Yacht Cruise?", url: "/ritz-carlton-yacht-collection-included" },
        { label: "Is The Ritz-Carlton Yacht Collection Worth It?", url: "/ritz-carlton-yacht-collection-reviews" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-cost"
    },
    {
      title: "Fleet & Competitor Comparisons",
      category: "Fleet Comparisons",
      description: "Direct side-by-side evaluations across Evrima, Ilma, Luminara, and rival ultra-luxury lines.",
      image: comparisonVallettaImg,
      placeholderLabel: "Ritz-Carlton Yacht Fleet Comparisons",
      actionLabel: "Compare Fleet & Lines",
      links: [
        { label: "Evrima vs. Ilma vs. Luminara", url: "/ritz-carlton-evrima-vs-ilma-vs-luminara" },
        { label: "Ritz-Carlton vs. Explora Journeys", url: "/ritz-carlton-yacht-collection-vs-explora-journeys" },
        { label: "Ritz-Carlton vs. Seabourn", url: "/ritz-carlton-yacht-collection-vs-seabourn" }
      ],
      mainUrl: "/ritz-carlton-evrima-vs-ilma-vs-luminara"
    },
    {
      title: "Lifestyle & Experience Guides",
      category: "Onboard Lifestyle",
      description: "Suites, dress codes, dining philosophies, family suitability, and loyalty benefits.",
      image: lifestyleCabanaImg,
      placeholderLabel: "Ritz-Carlton Yacht Lifestyle & Experience",
      actionLabel: "View Lifestyle Guides",
      links: [
        { label: "Dress Code & Attire Essentials", url: "/ritz-carlton-yacht-collection-dress-code" },
        { label: "Family & Children Considerations", url: "/ritz-carlton-yacht-collection-families-children" },
        { label: "Marriott Bonvoy Points & Redemption", url: "/ritz-carlton-yacht-collection-marriott-bonvoy-points" },
        { label: "Suites, Layouts & Best Cabins", url: "/ritz-carlton-yacht-collection-suites" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-suites"
    },
    {
      title: "Destinations & Excursions",
      category: "Destinations",
      description: "Shore excursions, port accessibility, Miami departures, and Caribbean sailings.",
      image: shoreExcursionImg,
      placeholderLabel: "Ritz-Carlton Yacht Destinations & Excursions",
      actionLabel: "Discover Destinations",
      links: [
        { label: "Shore Excursion Inclusions & Costs", url: "/ritz-carlton-yacht-shore-excursions-included" },
        { label: "Guide for Non-Cruisers", url: "/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises" },
        { label: "Miami Sailings & Ports", url: "/ritz-carlton-yacht-cruises-from-miami" },
        { label: "Caribbean Voyages & Seasons", url: "/ritz-carlton-yacht-caribbean-cruises" }
      ],
      mainUrl: "/ritz-carlton-yacht-caribbean-cruises"
    },
    {
      title: "Advisory & Planning Services",
      category: "Advisor Services",
      description: "Working with certified luxury cruise specialists, advisor benefits, and itinerary selection.",
      image: advisorEmbarkationImg,
      placeholderLabel: "Ritz-Carlton Yacht Travel Advisor Services",
      actionLabel: "Connect With Advisor",
      links: [
        { label: "Why Book Through a Travel Advisor?", url: "/ritz-carlton-yacht-cruises/travel-advisor" },
        { label: "Advisor Services: Florida", url: "/ritz-carlton-yacht-collection-travel-advisor-florida" },
        { label: "Advisor Services: Orlando", url: "/ritz-carlton-yacht-collection-travel-advisor-orlando" },
        { label: "How to Choose Yacht, Suite & Itinerary", url: "/how-to-choose-right-ritz-carlton-yacht-suite-itinerary" }
      ],
      mainUrl: "/ritz-carlton-yacht-cruises/travel-advisor"
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/logo.png"
        },
        "description": "Luxury travel planning and advisory services specializing in luxury cruises, safaris, expeditions, river cruising and premium travel experiences.",
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
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "River Cruising",
          "Expedition Cruises",
          "Luxury Safaris",
          "Premium Travel"
        ],
        "sameAs": [
          "https://www.travelleaders.com/agent/17255",
          "https://www.linkedin.com/in/angela-hughes-1675081"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection",
        "name": pageData.seo.ogTitle || pageData.seo.title,
        "headline": pageData.hero.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-luxury-cruise.jpg",
          "caption": pageData.hero.title
        },
        "image": "https://www.tripsandships.com/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-luxury-cruise.jpg",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "The Ritz-Carlton Yacht Collection"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-luxury-cruise.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCartlonPillarPage/ritz-carlton-yacht-collection-luxury-cruise.jpg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: Comparison Hero ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroExteriorImg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: Video Placeholder & Overview ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              The Ritz-Carlton Yacht Difference
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6">
              {pageData.videoSection.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              {pageData.videoSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-navy-950 mb-6">
                What Defines The Experience:
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-slate-700">
                {pageData.videoSection.specialties.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                {pageData.videoSection.videoText}
              </p>
            </div>

            <div className="w-full">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOb5B2OIQx4"
                  title="The Ritz-Carlton Yacht Difference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Interactive Destination Grid (Supporting Guides) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Curated Supporting Guides & Topic Clusters"
          subtitle="Explore in-depth articles on cost, inclusions, honest reviews, competitor comparisons, and suite selection."
          items={highestPriorityHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 4: Why Discerning Travelers Choose Ritz-Carlton (Dark Navy Section) ─── */}
      <section className="py-20 bg-gradient-to-b from-navy-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                Expert Insight
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-6">
                {pageData.whyAttention.title}
              </h2>
              <div className="w-12 h-0.5 bg-blue-500 mb-8" />
              <p className="font-display text-xl text-blue-100 italic leading-relaxed mb-6">
                "{pageData.whyAttention.quote}"
              </p>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-8">
                — {pageData.whyAttention.author}
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                {pageData.whyAttention.body}
              </p>
            </div>

            <div className="w-full lg:w-5/12 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" /> Key Differentiators at a Glance
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Small Guest Capacity:</strong> 298 to 452 guests max across the fleet.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>All-Suite & Terraces:</strong> 100% all-suite accommodation with private ocean terraces.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Suite Ambassador:</strong> Dedicated high-touch hotel-style service.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Signature Marina:</strong> Direct water access for paddleboarding and water sports.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Fleet Overview (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.fleetOverview.title}
        items={fleetOverviewItems}
      />

      {/* ─── SECTION 6: Cabin Innovations (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.cabinInnovations.title}
        subtitle={pageData.cabinInnovations.subtitle}
        items={cabinInnovationItems}
      />

      {/* ─── SECTION 7: Dining & All-Inclusive Value (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.diningAndInclusions.title}
        subtitle={pageData.diningAndInclusions.subtitle}
        items={diningInclusionItems}
      />

      {/* ─── SECTION 8: Vacation Investment & Pricing (4-Column Grid) ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Vacation Investment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              {pageData.pricingEstimates.title}
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              {pageData.pricingEstimates.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.pricingEstimates.tiers.map((tier, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-bold tracking-wider px-4 py-2 rounded-full mb-4">
                    {tier.priceRange}
                  </span>
                  <h3 className="font-semibold text-xl text-navy-950 leading-snug">
                    {tier.duration}
                  </h3>
                </div>
                <p className="text-slate-600 font-light leading-relaxed mt-auto border-t border-slate-100 pt-6">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILED BRAND COMPARISON TABLE ─── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Comparative Analysis</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              Ritz-Carlton Yacht Collection vs. Traditional Luxury Cruise Lines
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-3xl mx-auto">
              When comparing Ritz-Carlton with Regent Seven Seas, Silversea, Seabourn, Explora Journeys or other luxury products, do not simply compare star ratings. Compare the experience.
            </p>
          </div>

          <div className="overflow-x-auto mb-12 rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold border-b border-slate-800">Factor</th>
                  <th className="p-4 font-bold border-b border-slate-800 text-blue-400">Ritz-Carlton Yacht Collection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                <tr className="bg-slate-50"><td className="p-4 font-semibold text-slate-900">Atmosphere</td><td className="p-4">Yacht / boutique hotel</td></tr>
                <tr><td className="p-4 font-semibold text-slate-900">Scale</td><td className="p-4">Small (298 - 452 guests)</td></tr>
                <tr className="bg-slate-50"><td className="p-4 font-semibold text-slate-900">Accommodation</td><td className="p-4">All-suite</td></tr>
                <tr><td className="p-4 font-semibold text-slate-900">Private outdoor space</td><td className="p-4">Core feature (Private terrace in all suites)</td></tr>
                <tr className="bg-slate-50"><td className="p-4 font-semibold text-slate-900">Service</td><td className="p-4">Highly personalized Suite Ambassador service</td></tr>
                <tr><td className="p-4 font-semibold text-slate-900">Entertainment</td><td className="p-4">More intimate & curated</td></tr>
                <tr className="bg-slate-50"><td className="p-4 font-semibold text-slate-900">Dining</td><td className="p-4">Luxury-focused multiple restaurants</td></tr>
                <tr><td className="p-4 font-semibold text-slate-900">Casino</td><td className="p-4">No traditional casino experience</td></tr>
                <tr className="bg-slate-50"><td className="p-4 font-semibold text-slate-900">Best for</td><td className="p-4">Couples, luxury travelers, first-time cruisers</td></tr>
                <tr><td className="p-4 font-semibold text-slate-900">Overall feeling</td><td className="p-4">Relaxed, sophisticated, intimate</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-navy-950 text-base mb-2">Ritz-Carlton vs. Regent</h4>
              <p className="leading-relaxed">Choose Ritz-Carlton if the yacht atmosphere, private terraces and hotel-style identity are especially important. Consider Regent if your priorities lean more heavily toward an established luxury-cruise format and broader ultra-luxury cruise infrastructure.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-navy-950 text-base mb-2">Ritz-Carlton vs. Silversea</h4>
              <p className="leading-relaxed">Silversea can be particularly compelling for travelers who prioritize expedition-style travel, destination depth or an established ultra-luxury cruising ecosystem. Ritz-Carlton is especially attractive when hotel-style service, design and yacht ambiance are the priority.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-navy-950 text-base mb-2">Ritz-Carlton vs. Seabourn</h4>
              <p className="leading-relaxed">Both appeal to sophisticated travelers who value smaller ships and high-touch service. The decision often comes down to itinerary, ship personality, dining preferences and the type of onboard atmosphere you prefer.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-navy-950 text-base mb-2">Ritz-Carlton vs. Explora Journeys</h4>
              <p className="leading-relaxed">Both are part of the new generation of luxury hotel-inspired ocean travel. Ritz-Carlton has the advantage of an instantly recognizable luxury-hospitality identity, while Explora has built its own distinct resort-at-sea positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROS AND CONS SECTION ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Analysis</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950">
              The Ritz-Carlton Yacht Collection: Pros and Cons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/60 p-8 rounded-2xl border border-emerald-200 shadow-sm">
              <h3 className="text-2xl font-display font-medium text-emerald-900 mb-6 flex items-center gap-2">
                <CheckCircle2 size={24} className="text-emerald-600" />
                Pros
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base">
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Intimate guest count (fewer than 500 guests)</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>All-suite accommodation model</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Private terrace in every suite</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Strong luxury-hotel brand identity & service</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Personalized Suite Ambassador service</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Premium dining options</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Relaxed yacht atmosphere</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Smaller-port access to intimate harbors</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Excellent choice for couples</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Attractive option for first-time cruisers</span></li>
                <li className="flex items-start gap-2"><Check size={18} className="text-emerald-600 mt-1 shrink-0" /><span>Strong fit for travelers who dislike mega-ships</span></li>
              </ul>
            </div>

            <div className="bg-rose-50/60 p-8 rounded-2xl border border-rose-200 shadow-sm">
              <h3 className="text-2xl font-display font-medium text-rose-900 mb-6 flex items-center gap-2">
                <XCircle size={24} className="text-rose-600" />
                Cons
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base">
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>High price point</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Value depends heavily on expectations</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Entertainment is intentionally more limited</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Some guest reviews report service inconsistencies</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Some travelers may find the onboard experience too quiet</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Certain experiences cost extra</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Not necessarily the best fit for families seeking extensive children's programming</span></li>
                <li className="flex items-start gap-2"><X size={18} className="text-rose-500 mt-1 shrink-0" /><span>Different yachts offer different strengths</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXACT RESOURCE HUB SECTION WITH ALL 18 INTERNAL LINKS ─── */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-12 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Internal Linking Directory</span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white">
              Ritz-Carlton Yacht Collection Resource Hub
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Access all supporting guides and commercial advisory pages below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Highest-Priority Supporting Pages */}
            <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/80">
              <h3 className="text-xl font-display font-semibold text-amber-400 mb-6 pb-3 border-b border-slate-700 flex items-center justify-between">
                <span>Highest-Priority Supporting Pages</span>
                <span className="text-xs font-normal text-slate-400">14 Guides</span>
              </h3>
              <div className="space-y-3">
                {highestPrioritySupportingPages.map((page, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-900/80 hover:bg-slate-900 rounded-xl border border-slate-700/60 transition-all group">
                    <Link to={page.url} className="text-slate-200 group-hover:text-amber-300 text-sm font-medium flex items-center justify-between">
                      <span>{page.title}</span>
                      <ArrowRight size={14} className="text-amber-400 shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Strong Commercial Pages */}
            <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-semibold text-amber-400 mb-6 pb-3 border-b border-slate-700 flex items-center justify-between">
                  <span>Strong Commercial Pages</span>
                  <span className="text-xs font-normal text-slate-400">4 Guides</span>
                </h3>
                <div className="space-y-3 mb-8">
                  {strongCommercialPages.map((page, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-900/80 hover:bg-slate-900 rounded-xl border border-slate-700/60 transition-all group">
                      <Link to={page.url} className="text-slate-200 group-hover:text-amber-300 text-sm font-medium flex items-center justify-between">
                        <span>{page.title}</span>
                        <ArrowRight size={14} className="text-amber-400 shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl">
                <h4 className="font-semibold text-amber-300 text-base mb-2">Advisory & Link Disclaimer</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  These 18 exact supporting pages and commercial landing pages serve as internal links designed to connect your comprehensive luxury cruise resource hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MIDDLE CTA ─── */}
      <CenterCTA
        title="Ready to Start Planning?"
        description="Connect with our luxury travel advisors to find the perfect Ritz-Carlton Yacht itinerary for your travel style and budget."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={ctaExteriorImg}
      />

      {/* ─── SECTION 10: Video Showcase Section ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              See Ritz-Carlton Yacht in Action
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              Experience Luxury Yacht Cruising
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              Watch what makes The Ritz-Carlton Yacht Collection an extraordinary way to travel the world.
            </p>
          </div>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/sQPnGRkiLdg"
              title="Experience Luxury Yacht Cruising"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: Angela Hughes Authority Bio ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={angelaImage}
        badge="LUXURY YACHT EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Yacht & Cruise Authority"
        credentials={[
          "Over 4 Decades Designing Luxury Travel Experiences",
          "Explored 121+ Countries Across Seven Continents",
          "Certified Luxury Yacht & Small Ship Cruise Specialist",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Travel Leaders Network Luxury Travel Influencer of the Year",
          "Named Most Influential Women in Travel 2026 by TravelPulse"
        ]}
        quote="The right luxury trip is not necessarily the cheapest trip or the most expensive trip. It is the trip that delivers the greatest value for the individual traveler."
        quoteSubtitle="On Ritz-Carlton Yacht Selection"
        ctaText="Book With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ─── SECTION 12: Comprehensive FAQ ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── SECTION 13: Final Center CTA ─── */}
      <CenterCTA
        title="Ready to Plan Your Ritz-Carlton Yacht Cruise?"
        description="Connect with our luxury yacht cruise experts to reserve your perfect itinerary and unlock exclusive VIP perks."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={heroExteriorImg}
      />
    </div>
  );
};

export default RitzCarltonYachtCollection;
