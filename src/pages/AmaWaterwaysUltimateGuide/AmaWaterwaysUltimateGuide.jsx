
import React from 'react';
import { Helmet } from 'react-helmet-async';
import pageData from './data.json';
import { Link } from 'react-router-dom';
import { Check, Award } from 'lucide-react';
import Navbar from "../../components/Navbar/Navbar";

// Angela image
import angelaImage from '@/assets/Angela_Hughes.jpg';

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GrandBentoFeatures from '@/components/ui/GrandBentoFeatures';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import VideoEmbed from '@/components/ui/VideoEmbed';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Exact matching assets from src/assets/RiversidevsAmaWaterways/
import heroBg from '@/assets/RiversidevsAmaWaterways/AmaBella_Exterior.webp';
import amaMagnaImg from '@/assets/RiversidevsAmaWaterways/AmaLilia_Exterior.webp';
import signatureFleetImg from '@/assets/RiversidevsAmaWaterways/FR_Avignon_AmaCello.webp';
import twinBalconyImg from '@/assets/RiversidevsAmaWaterways/AmaBella_Twin-Balcony.webp';
import suiteBathImg from '@/assets/RiversidevsAmaWaterways/AmaCello_Bar_Lounge.webp';
import chefTableImg from '@/assets/RiversidevsAmaWaterways/AmaCello_ChefTable_Dining.webp';
import mainLoungeImg from '@/assets/RiversidevsAmaWaterways/AmaBella_MainLounge.webp';
import viennaBikeImg from '@/assets/RiversidevsAmaWaterways/Amawater.webp';
import danubeHikeImg from '@/assets/RiversidevsAmaWaterways/Magnificent Europe.webp';

// Additional exact images from RiversidevsAmaWaterways folder so ZERO cards have missing/null images
import seineImg from '@/assets/RiversidevsAmaWaterways/FR_Avignon_AmaCello.webp';
import douroImg from '@/assets/RiversidevsAmaWaterways/AmaBella_Exterior.webp';
import mekongImg from '@/assets/RiversidevsAmaWaterways/AmaLilia_Exterior.webp';
import nileImg from '@/assets/RiversidevsAmaWaterways/Amawater.webp';
import exoticFleetImg from '@/assets/RiversidevsAmaWaterways/AmaLilia_Exterior.webp';
import sunDeckImg from '@/assets/RiversidevsAmaWaterways/AmaBella_Exterior.webp';
import mainRestImg from '@/assets/RiversidevsAmaWaterways/AmaCello_ChefTable_Dining.webp';

const AmaWaterwaysUltimateGuide = () => {
  // Map exact images to the Fleet Overview items
  const fleetOverviewItems = pageData.fleetOverview.items.map((item, idx) => {
    const imgList = [amaMagnaImg, signatureFleetImg, exoticFleetImg];
    return {
      ...item,
      image: imgList[idx] || null
    };
  });

  // Map exact images to the Cabin Innovations section
  const cabinInnovationItems = pageData.cabinInnovations.features.map((item, idx) => {
    const imgList = [twinBalconyImg, suiteBathImg, sunDeckImg];
    return {
      ...item,
      image: imgList[idx] || null,
      placeholderLabel: item.title
    };
  });

  // Map exact images to Dining & Inclusions
  const diningInclusionItems = pageData.diningAndInclusions.items.map((item, idx) => {
    const imgList = [chefTableImg, mainLoungeImg, mainRestImg];
    return {
      ...item,
      image: imgList[idx] || null
    };
  });

  // Destination Hub grid data inspired directly by "Where You Can Go With Us" on expedition-cruises
  const destinationHubItems = [
    {
      title: "Danube River",
      category: "Europe's Imperial Heart",
      description: "Explore Budapest, Vienna, Melk Abbey, and the Wachau Valley vineyards with daily choices of cycling or fortress hiking.",
      image: amaMagnaImg,
      actionLabel: "Explore Danube River",
      links: [
        { label: "Danube River Cruises Overview", url: "/danube-river-cruises" },
        { label: "Best Time to Cruise the Danube", url: "/best-time-to-cruise-the-danube" },
        { label: "Danube Christmas Market Cruises", url: "/best-danube-christmas-market-cruises" }
      ],
      mainUrl: "/danube-river-cruises"
    },
    {
      title: "Rhine River & Gorge",
      category: "Fairytale Castles & Wine",
      description: "Sail from Amsterdam to Basel past more than 40 storybook castles, historic Cologne Cathedral, and the terraced vineyards of Rüdesheim.",
      image: signatureFleetImg,
      actionLabel: "Explore Rhine River",
      links: [
        { label: "Rhine River Cruises Guide", url: "/rhine-river-cruises" },
        { label: "Best Time to Cruise the Rhine", url: "/best-time-to-cruise-the-rhine" },
        { label: "Which River Cruise Should You Take First", url: "/which-river-cruise-should-you-take-first" },
        { label: "Best Rhine Christmas Market Cruises", url: "/best-rhine-christmas-market-cruises" }
      ],
      mainUrl: "/rhine-river-cruises"
    },
    {
      title: "Seine River & Normandy",
      category: "French Culture & History",
      description: "Cruise from Paris to Normandy, visiting Monet's Gardens at Giverny, Rouen's Gothic cathedral, and the D-Day historic landing beaches.",
      image: seineImg,
      placeholderLabel: "SEINE RIVER PARIS & NORMANDY",
      actionLabel: "Explore Seine River",
      links: [
        { label: "Seine River Cruises Overview", url: "/seine-river-cruises" },
        { label: "Best Time for French River Cruises", url: "/best-time-for-a-river-cruise" }
      ],
      mainUrl: "/seine-river-cruises"
    },
    {
      title: "Douro River Valley",
      category: "Portugal's Terraced Vineyards",
      description: "Enjoy slow travel through Portugal's UNESCO-listed Douro Valley, featuring port wine tastings at historic quintas and visits to Salamanca.",
      image: douroImg,
      placeholderLabel: "DOURO RIVER VALLEY PORTUGAL",
      actionLabel: "Explore Douro River",
      links: [
        { label: "Douro River Cruises Overview", url: "/douro-river-cruises" }
      ],
      mainUrl: "/douro-river-cruises"
    },
    {
      title: "Mekong River (Vietnam & Cambodia)",
      category: "Exotic Southeast Asia",
      description: "Experience authentic daily life floating villages, ancient Buddhist temples, and Angkor Wat aboard the custom-built AmaDara.",
      image: mekongImg,
      placeholderLabel: "MEKONG RIVER VIETNAM & CAMBODIA",
      actionLabel: "Explore Mekong River",
      links: [
        { label: "Mekong River Cruises Guide", url: "/mekong-river-cruises" }
      ],
      mainUrl: "/mekong-river-cruises"
    },
    {
      title: "Nile River & Egypt Archaeology",
      category: "Ancient Wonders",
      description: "Uncover the secrets of the Pharaohs with expert Egyptologists aboard the elegant AmaDahlia or AmaLilia, visiting Luxor and Aswan.",
      image: nileImg,
      placeholderLabel: "NILE RIVER & LUXOR EGYPT",
      actionLabel: "Explore Nile River",
      links: [
        { label: "Nile River Cruises Guide", url: "/nile-river-cruises" }
      ],
      mainUrl: "/nile-river-cruises"
    },
    {
      title: "Rhône & Colombia Rivers",
      category: "Culinary & Emerging Destinations",
      description: "Sail through France's culinary capital on the Rhône, or be among the first to explore South America's Magdalena River in Colombia.",
      image: mainLoungeImg,
      placeholderLabel: "RHONE & COLOMBIA RIVERS",
      actionLabel: "Explore New Destinations",
      links: [
        { label: "Rhône River Cruises", url: "/rhone-river-cruises" },
        { label: "Rhône River Cruise Guide", url: "/rhone-river-cruise-guide" },
        { label: "Colombia River Cruises", url: "/colombia-river-cruises" }
      ],
      mainUrl: "/rhone-river-cruises"
    },
    {
      title: "Specialty & Holiday Cruises",
      category: "Themed Sailings",
      description: "Experience the magic of Europe's Christmas Markets, vibrant Tulip Time sailings in spring, or exclusive wine-themed river cruises.",
      image: danubeHikeImg,
      placeholderLabel: "HOLIDAY & THEMED CRUISES",
      actionLabel: "Explore Themed Cruises",
      links: [
        { label: "Christmas River Market Cruises", url: "/christmas-river-market-cruises" },
        { label: "Holiday River Cruises", url: "/holiday-river-cruises" },
        { label: "Tulip Time River Cruises", url: "/tulip-time-river-cruises" },
        { label: "Wine River Cruises", url: "/wine-river-cruises" }
      ],
      mainUrl: "/christmas-river-market-cruises"
    }
  ];

  // Cluster Guide Hub data with slide-up overlay drawer & pulsing badges exactly like expedition-cruises
  const clusterGuideHubItems = [
    {
      title: "AmaWaterways Wellness Guide",
      category: "Active River Cruising",
      description: "Discover dedicated Wellness Hosts, morning sun deck yoga, guided vineyard cycling, and healthy gourmet dining.",
      image: viennaBikeImg,
      badgeCount: 4,
      links: [
        { label: "AmaWaterways Wellness Guide", url: "/amawaterways-wellness-guide" },
        { label: "What Is It Like to Cruise With AmaWaterways", url: "/what-is-it-like-to-cruise-with-amawaterways" },
        { label: "First Time River Cruise Guide", url: "/first-time-river-cruise-guide" },
        { label: "River Cruise Packing & Active Gear Guide", url: "/river-cruise-packing-guide" }
      ],
      mainUrl: "/amawaterways-wellness-guide"
    },
    {
      title: "AmaWaterways vs Competitors",
      category: "Direct Brand Comparisons",
      description: "In-depth comparisons evaluating dining, excursion choices, Twin Balcony room dimensions, and overall value vs Viking, Scenic, and Uniworld.",
      image: twinBalconyImg,
      badgeCount: 6,
      links: [
        { label: "AmaWaterways vs Scenic", url: "/amawaterways-vs-scenic" },
        { label: "AmaWaterways vs Uniworld", url: "/amawaterways-vs-uniworld" },
        { label: "AmaWaterways vs Avalon", url: "/amawaterways-vs-avalon" },
        { label: "AmaWaterways vs Emerald", url: "/amawaterways-vs-emerald" },
        { label: "AmaWaterways vs Tauck", url: "/amawaterways-vs-tauck" },
        { label: "Which River Cruise Line Is Better?", url: "/which-river-cruise-line-is-better" }
      ],
      mainUrl: "/which-river-cruise-line-is-better"
    },
    {
      title: "Ships, Suites & Inclusions Guide",
      category: "Fleet & Cabin Breakdown",
      description: "Everything included in your cruise fare, exact cabin dimensions, and a spotlight guide to the double-width AmaMagna.",
      image: chefTableImg,
      badgeCount: 5,
      links: [
        { label: "Best AmaWaterways Ships", url: "/best-amawaterways-ships" },
        { label: "What Is Included on AmaWaterways", url: "/amawaterways-inclusions" },
        { label: "AmaWaterways Cruise Cost & Pricing Guide", url: "/amawaterways-cruise-cost" },
        { label: "Best Time to Take a River Cruise", url: "/best-time-for-a-river-cruise" },
        { label: "River vs Ocean Cruising Breakdown", url: "/river-cruise-vs-ocean-cruise" }
      ],
      mainUrl: "/best-amawaterways-ships"
    },
    {
      title: "AmaWaterways Ship Reviews",
      category: "Detailed Vessel Guides",
      description: "Explore our comprehensive, firsthand reviews of the AmaWaterways fleet, from the revolutionary AmaMagna to the elegant ships of the Nile and Mekong.",
      image: suiteBathImg,
      badgeCount: 7,
      links: [
        { label: "AmaMagna Review", url: "/amawaterways-ama-magna-review" },
        { label: "AmaDahlia Review (Nile)", url: "/amawaterways-ama-dahlia-review" },
        { label: "AmaDara Review (Mekong)", url: "/amawaterways-ama-dara-review" },
        { label: "AmaLilia Review (Nile)", url: "/amawaterways-ama-lilia-review" },
        { label: "AmaLucia Review", url: "/amawaterways-ama-lucia-review" },
        { label: "AmaMagdalena Review", url: "/amawaterways-ama-magdalena-review" },
        { label: "AmaSofia Review", url: "/amawaterways-ama-sofia-review" }
      ],
      mainUrl: "/best-amawaterways-ships"
    },
    {
      title: "Planning & Onboard Experience",
      category: "Before You Sail",
      description: "Everything you need to know about dining, cabins, excursions, and whether AmaWaterways is the right fit for your travel style.",
      image: heroBg,
      badgeCount: 10,
      links: [
        { label: "AmaWaterways Complete Guide", url: "/amawaterways-river-cruises" },
        { label: "AmaWaterways Review", url: "/amawaterways-review" },
        { label: "Is AmaWaterways Worth It?", url: "/is-amawaterways-worth-it" },
        { label: "Best AmaWaterways Itineraries", url: "/best-amawaterways-itineraries" },
        { label: "Planning an AmaWaterways Cruise", url: "/planning-amawaterways-cruise" },
        { label: "AmaWaterways Cabin Guide", url: "/amawaterways-cabin-guide" },
        { label: "AmaWaterways Dining Guide", url: "/amawaterways-dining-guide" },
        { label: "AmaWaterways Excursions Guide", url: "/amawaterways-excursions-guide" },
        { label: "Best Luxury River Cruise", url: "/best-luxury-river-cruise" },
        { label: "River Cruise FAQ", url: "/river-cruise-faq" }
      ],
      mainUrl: "/amawaterways-river-cruises"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData?.seo?.title || "Ama Waterways Ultimate Guide | Trips & Ships"}</title>
        <meta name="description" content={pageData?.seo?.metaDescription || "Discover Ama Waterways Ultimate Guide with custom-planned luxury river cruises. Expert itinerary design and VIP partner perks."} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageData?.seo?.title || "Ama Waterways Ultimate Guide | Trips & Ships"} />
        <meta property="og:description" content={pageData?.seo?.metaDescription || "Discover Ama Waterways Ultimate Guide with custom-planned luxury river cruises. Expert itinerary design and VIP partner perks."} />
        <meta property="og:url" content={"https://www.tripsandships.com" + "/amawaterways-ultimate-guide"} />
        <meta property="og:image" content={"https://www.tripsandships.com" + heroBg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData?.seo?.title || "Ama Waterways Ultimate Guide | Trips & Ships"} />
        <meta name="twitter:description" content={pageData?.seo?.metaDescription || "Discover Ama Waterways Ultimate Guide with custom-planned luxury river cruises. Expert itinerary design and VIP partner perks."} />
        <meta name="twitter:image" content={"https://www.tripsandships.com" + heroBg} />

        {(Array.isArray(pageData?.faqs) ? pageData.faqs : pageData?.faqs?.questions) && (
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": (Array.isArray(pageData?.faqs) ? pageData.faqs : pageData?.faqs?.questions).map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Luxury River Cruise Planning",
                "provider": {
                  "@type": "Organization",
                  "name": "Trips & Ships Luxury Travel",
                  "url": "https://www.tripsandships.com"
                },
                "description": "Customized luxury river cruise planning services covering Europe, Asia, and Africa. We offer cabin selection, private tour curation, and VIP partner amenities."
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Luxury River Cruise Planning Services",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "84"
                }
              }
            ])}
          </script>
        )}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
                "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, and custom travel planning."
              },
              {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/amawaterways-ultimate-guide",
                "url": "https://www.tripsandships.com/amawaterways-ultimate-guide",
                "name": "Ama Waterways Ultimate Guide | Trips & Ships Luxury Travel",
                "isPartOf": { "@id": "https://www.tripsandships.com/#website" },
                "about": [{ "@type": "Organization", "name": "AmaWaterways" }]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/amawaterways-ultimate-guide#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                  { "@type": "ListItem", "position": 2, "name": "AmaWaterways", "item": "https://www.tripsandships.com/amawaterways-ultimate-guide" },
                  { "@type": "ListItem", "position": 3, "name": "Ama Waterways Ultimate Guide", "item": "https://www.tripsandships.com/amawaterways-ultimate-guide" }
                ]
              }
            ,
              {
                "@type": "Article",
                "@id": "https://www.tripsandships.com#article",
                "isPartOf": { "@id": "https://www.tripsandships.com" },
                "headline": "Trips & Ships Ultimate Guide",
                "datePublished": "2024-01-15T08:00:00+00:00",
                "dateModified": "2026-09-02T08:00:00+00:00",
                "author": {
                  "@type": "Person",
                  "name": "Angela Hughes",
                "url": "https://www.tripsandships.com/about-angela-hughes",
                "sameAs": ["https://www.linkedin.com/in/angelahughestravel/","https://www.virtuoso.com/advisor/angelahughes","https://www.instagram.com/tripsandships/","https://www.facebook.com/tripsandshipsluxurytravel/"]
                },
                "publisher": {
                  "@id": "https://www.tripsandships.com/#organization"
                }
              }
            ]
          })}
        </script>
        <link rel="canonical" href="https://www.tripsandships.com/amawaterways-ultimate-guide" />
      </Helmet>
      <Navbar/>
     


      {/* ─── SECTION 1: Comparison Hero ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: Video Embed & Specialties (Inspired by expedition-cruises "Discover the World Differently") ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              The River Cruise Difference
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
                We Specialize In:
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
              <VideoEmbed
                youtubeId={pageData.videoSection.youtubeId}
                title="Discover AmaWaterways River Cruising"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Interactive Destination Grid ("Where You Can Go With Us" - Expedition Style Overlay) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Where You Can Go With AmaWaterways"
          subtitle="From European castle valleys to the Mekong and Nile, explore our curated destination guides and river itineraries."
          items={destinationHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 4: Why Discerning Travelers Choose AmaWaterways (Dark Navy Section) ─── */}
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
                  <span><strong>Small Guest Capacity:</strong> ~150 to 196 passengers across intimate European ships.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Twin Balcony Suites:</strong> Both French and outside step-out balconies in one suite.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>La Chaîne des Rôtisseurs:</strong> Member of the world's premier gastronomic society.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Active & Wellness Focus:</strong> Daily sun deck fitness classes, fleetwide bicycles, and hikes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Fleet Overview & AmaMagna Spotlight (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.fleetOverview.title}
        items={fleetOverviewItems}
      />

      {/* ─── SECTION 6: Cabin Innovations & Twin Balcony Concept (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.cabinInnovations.title}
        subtitle={pageData.cabinInnovations.subtitle}
        items={cabinInnovationItems}
      />

      {/* ─── SECTION 7: Dining & All-Inclusive Value (GrandBentoFeatures) ─── */}
      <GrandBentoFeatures
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

      {/* ─── MIDDLE CTA ─── */}
      <CenterCTA
        title="Ready to Start Planning?"
        description="Connect with our luxury travel advisors to find the perfect AmaWaterways itinerary for your travel style and budget."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={heroBg}
      />

      {/* ─── SECTION 9: Interactive Cluster Guide Hub (Expedition Style Drawer Cards with Pulsing Badges) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated River Cruise Guides & Comparisons"
          subtitle="Hover over any card below to slide open the guide drawer, access direct comparisons, and explore detailed breakdowns."
          items={clusterGuideHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 10: YouTube Video ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              See AmaWaterways in Action
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              Experience Luxury River Cruising
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              Watch what makes AmaWaterways one of the world's most awarded luxury river cruise lines — from stunning destinations to onboard elegance.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <VideoEmbed
              youtubeId="Oicnd46AOyY"
              title="AmaWaterways Luxury River Cruise Experience"
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: Angela Hughes Authority Bio ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={angelaImage}
      />

      {/* ─── SECTION 12: Comprehensive FAQ ─── */}
      <FAQAccordion
        data={pageData.faqs}
      />

      {/* ─── SECTION 13: Center CTA ─── */}
      <CenterCTA
        title="Ready to Plan Your AmaWaterways Cruise?"
        description="Connect with our luxury river cruise experts to reserve your perfect itinerary and unlock exclusive VIP perks."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={amaMagnaImg}
      />

      
    </div>
  );
};

export default AmaWaterwaysUltimateGuide;
