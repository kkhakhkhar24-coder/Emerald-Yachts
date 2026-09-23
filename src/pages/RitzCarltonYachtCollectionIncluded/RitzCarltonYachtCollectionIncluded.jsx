import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';
import { Check, X } from 'lucide-react';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Ritz-Carlton Yacht Collection Inclusions Assets
import heroBgImg from '@/assets/RitzCarltonYachtCollectionIncluded/what-is-included-on-a-ritz-carlton-yacht-cruise.jpg';
import introLifestyleImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-inclusions-overview.jpg';
import introDiningImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-culinary-and-dining-inclusions.jpg';

// 12 Included Highlights Images
import highlightSuiteTerraceImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-all-suite-terrace-inclusions.jpg';
import highlightSuiteAmbassadorImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-suite-ambassador-service.jpg';
import highlightMultipleDiningImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-multiple-dining-venues.jpeg';
import highlightInSuiteDiningImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-24-hour-in-suite-dining.jpeg';
import highlightPremiumBeveragesImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-premium-beverages-included.jpg';
import highlightGratuitiesImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-onboard-gratuities-included.jpeg';
import highlightStarlinkWifiImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-complimentary-starlink-wifi.jpg';
import highlightEntertainmentImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-entertainment-and-enrichment.jpg';
import highlightMarinaWatersportsImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-marina-watersports-included.jpeg';
import highlightPoolsSpacesImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-pools-and-public-spaces.jpg';
import highlightFitnessCenterImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-fitness-facilities-access.jpg';
import highlightPortFeesImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-port-fees-included.jpg';

// Middle CTA Image
import middleCtaImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-yacht-true-vacation-cost.jpeg';

// Fleet Inclusions Images
import evrimaInclusionImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-evrima-yacht-inclusions.jpeg';
import ilmaInclusionImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-ilma-yacht-inclusions.jpeg';
import luminaraInclusionImg from '@/assets/RitzCarltonYachtCollectionIncluded/ritz-carlton-luminara-yacht-inclusions.jpeg';

// Final CTA Image
import finalCtaImg from '@/assets/RitzCarltonYachtCollectionIncluded/contact-ritz-carlton-yacht-advisor-inclusions.jpg';

// Shared UI System Components (Exact EmeraldYachts component-based architecture)
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
import VideoEmbed from '@/components/ui/VideoEmbed';


const RitzCarltonYachtCollectionIncluded = () => {
  const [activeTab, setActiveTab] = useState('included');

  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: "What Is Included on a Ritz-Carlton Yacht Cruise?",
      paragraphs: [
        "A Ritz-Carlton yacht cruise is designed around an all-inclusive luxury yachting experience, but 'all-inclusive' does not mean that every possible expense is included.",
        "Your cruise fare covers many of the experiences travelers typically pay extra for on conventional cruises — including your suite, onboard dining, a selection of premium beverages, Wi-Fi, onboard gratuities, entertainment and marina-style watersports.",
        "However, there are still important exclusions to understand, including many shore excursions, spa and salon treatments, certain specialty dining experiences, airfare, hotels, transfers and personal purchases.",
        "That distinction matters when you're comparing the true value of a Ritz-Carlton yacht vacation. In this guide, we break down exactly what is included, what costs extra, and what you should budget for before booking."
      ]
    }
  ];

  // 2. Data mapping for Quick Answer Table (Section 3: BudgetBreakdownTable)
  const quickAnswerTable = {
    title: "What Does the Ritz-Carlton Yacht Fare Include?",
    description: "For most guests, the Ritz-Carlton Yacht Collection cruise fare includes standard luxury inclusions while leaving external and personal expenses separate.",
    headers: ["Included Feature", "What's Covered"],
    rows: [
      ["Suite accommodation", "All-suite accommodation with a private terrace"],
      ["Suite Ambassador", "Dedicated personalized service throughout your voyage"],
      ["Dining", "Multiple onboard dining venues and meals"],
      ["In-suite dining", "24-hour in-suite dining"],
      ["Beverages", "Selected premium wines, spirits, cocktails, beers, mocktails, coffees and teas"],
      ["Wi-Fi", "Complimentary Starlink Wi-Fi"],
      ["Gratuities", "Onboard restaurant, bar and housekeeping gratuities"],
      ["Entertainment", "Live entertainment and enrichment programming"],
      ["Marina", "Access to marina-style watersports"],
      ["Port fees", "Applicable port fees associated with the itinerary"],
      ["Luxury service", "Personalized onboard hotel-style service"]
    ]
  };

  // 3. Data mapping for 13 Included Highlights (Section 4: ThreeColumnGrid)
  const includedHighlights = [
    {
      title: "1. All-Suite Accommodation & Terrace",
      description: "100% all-suite concept with ocean views, private terraces, luxury bathrooms, 24-hour in-suite dining, and Suite Ambassador service.",
      image: highlightSuiteTerraceImg,
      placeholderLabel: "Ritz-Carlton Yacht All-Suite Ocean Terrace Accommodation"
    },
    {
      title: "2. Suite Ambassador Service",
      description: "Personalized luxury-hotel style contact helping with dining arrangements, reservations, daily preferences, and onboard requests.",
      image: highlightSuiteAmbassadorImg,
      placeholderLabel: "Ritz-Carlton Yacht Suite Ambassador Personalized Service"
    },
    {
      title: "3. Multiple Dining Experiences",
      description: "Meals across multiple culinary venues including breakfast, lunch, dinner, casual poolside dining, and culinary specialties.",
      image: highlightMultipleDiningImg,
      placeholderLabel: "Ritz-Carlton Yacht Multiple Dining Venues & Culinary Specialties"
    },
    {
      title: "4. 24-Hour In-Suite Dining",
      description: "Enjoy meals and refreshments in the privacy of your suite anytime — perfect for early departures or quiet breakfasts.",
      image: highlightInSuiteDiningImg,
      placeholderLabel: "Ritz-Carlton Yacht 24-Hour In-Suite Dining Room Service"
    },
    {
      title: "5. Premium Beverages Included",
      description: "Fine wines, selected spirits, cocktails, mocktails, beer, soft drinks, specialty coffees, and teas included throughout the yacht.",
      image: highlightPremiumBeveragesImg,
      placeholderLabel: "Ritz-Carlton Yacht Included Selected Premium Wines & Cocktails"
    },
    {
      title: "6. Onboard Gratuities Included",
      description: "Covers service provided by onboard restaurant, bar, and housekeeping team members without daily service add-ons.",
      image: highlightGratuitiesImg,
      placeholderLabel: "Ritz-Carlton Yacht Included Onboard Gratuities & Service Tips"
    },
    {
      title: "7. Complimentary Starlink Wi-Fi",
      description: "High-speed Starlink Wi-Fi included for email, messaging, social media, work, browsing, and video calls at sea.",
      image: highlightStarlinkWifiImg,
      placeholderLabel: "Ritz-Carlton Yacht Complimentary Starlink Satellite Wi-Fi"
    },
    {
      title: "8. Entertainment & Enrichment",
      description: "Intimate live musicians, resident performances, cultural programming, and destination-focused social activities.",
      image: highlightEntertainmentImg,
      placeholderLabel: "Ritz-Carlton Yacht Live Music & Destination Enrichment"
    },
    {
      title: "9. Marina-Style Watersports",
      description: "Direct water access from the stern marina for paddleboards, kayaks, and snorkeling when sea conditions allow.",
      image: highlightMarinaWatersportsImg,
      placeholderLabel: "Ritz-Carlton Yacht Stern Marina Watersports Platform Access"
    },
    {
      title: "10. Pools & Public Spaces",
      description: "Full access to pools, lounges, outdoor decks, fitness center, wellness spaces, and quiet relaxation areas.",
      image: highlightPoolsSpacesImg,
      placeholderLabel: "Ritz-Carlton Yacht Infinity Pools & Outdoor Public Spaces"
    },
    {
      title: "11. Fitness Facilities Access",
      description: "Complimentary access to exercise equipment, fitness centers, and wellness relaxation spaces onboard.",
      image: highlightFitnessCenterImg,
      placeholderLabel: "Ritz-Carlton Yacht Modern Fitness Center & Gym Facilities"
    },
    {
      title: "12. Port Fees Included",
      description: "Applicable itinerary port fees are incorporated into the published cruise fare under standard fare terms.",
      image: highlightPortFeesImg,
      placeholderLabel: "Ritz-Carlton Yacht Itinerary Port Fees & Taxes Included"
    }
  ];

  // 4. Data mapping for Included vs Extras (Section 5: CostValueAnalysisCards)
  const fareInclusionsMapped = [
    { title: "All-Suite Accommodation", description: "All-suite layout with private ocean terrace in every suite category." },
    { title: "Suite Ambassador Service", description: "Dedicated high-touch personalized service and guest assistance." },
    { title: "Dining & 24-Hour Room Service", description: "Multiple dining venues plus complimentary 24-hour in-suite dining." },
    { title: "Selected Premium Beverages", description: "Wines, spirits, cocktails, beers, mocktails, coffees, and teas." },
    { title: "Wi-Fi & Onboard Gratuities", description: "Starlink Wi-Fi and restaurant, bar, and housekeeping gratuities." },
    { title: "Marina Watersports & Port Fees", description: "Stern marina water sports access and itinerary port fees." }
  ];

  const fareExtrasMapped = [
    { title: "Airfare & Transfers", description: "International flights and airport-to-yacht private transfers." },
    { title: "Pre & Post Cruise Hotels", description: "Nightly hotel stays in embarkation and disembarkation cities." },
    { title: "Shore Excursions", description: "Group guided tours and private custom shore excursions." },
    { title: "Spa & Salon Treatments", description: "Massages, facials, hair styling, manicures, and salon services." },
    { title: "Specialty Dining Venues", description: "Cover charges for S.E.A., Seta su Ilma, and Seta su Luminara." },
    { title: "Private Reserve & Caviar", description: "Private-reserve vintage wines, rare spirits, caviar, and medical services." }
  ];

  // 5. Data mapping for Complete Comparison Table (Section 6: BudgetBreakdownTable)
  const completeComparisonTable = {
    title: "Ritz-Carlton Yacht Collection: Included vs. Extra",
    description: "Full breakdown of onboard amenities and vacation expenses for accurate planning:",
    headers: ["Experience / Amenity", "Included?", "Notes"],
    rows: [
      ["Suite accommodation", "✓ Included", "All-suite accommodation with private ocean view"],
      ["Private terrace", "✓ Included", "Included with all suite categories"],
      ["Suite Ambassador", "✓ Included", "Personalized onboard service and guest assistance"],
      ["Breakfast & Lunch", "✓ Included", "Meals across multiple dining venues included"],
      ["Dinner", "✓ Included", "Most venues included"],
      ["24-hour in-suite dining", "✓ Included", "Complimentary 24-hour room service"],
      ["Selected premium beverages", "✓ Included", "Fine wines, spirits, cocktails, coffees & teas"],
      ["Starlink Wi-Fi", "✓ Included", "Complimentary satellite Wi-Fi access"],
      ["Onboard gratuities", "✓ Included", "Standard restaurant, bar, and housekeeping tips"],
      ["Entertainment & Enrichment", "✓ Included", "Intimate resident performances & cultural talks"],
      ["Marina watersports", "✓ Included", "Paddleboards, kayaks & snorkeling (weather permitting)"],
      ["Fitness facilities", "✓ Included", "Gym and wellness space access included"],
      ["Specialty dining (S.E.A. / Seta)", "Sometimes", "Selected specialty venues carry an additional cover charge"],
      ["Shore excursions", "✕ Extra", "Group and private tours carry additional cost"],
      ["Spa treatments", "✕ Extra", "Massages and wellness treatments charged separately"],
      ["Salon services", "✕ Extra", "Hair, nails, and beauty services charged separately"],
      ["Airfare & Hotels", "✕ Extra", "Flights, pre/post hotel stays arranged separately"],
      ["Transfers", "✕ Extra", "Airport/hotel transfers extra unless packaged"],
      ["Professional laundry", "Partially", "Self-service launderette free; dry cleaning extra"],
      ["Boutique & Caviar", "✕ Extra", "Boutique purchases, caviar, and rare reserve wines extra"]
    ]
  };

  // 6. Data mapping for Yacht Fleet Inclusions (Section 7: ThreeColumnGrid)
  const fleetInclusionItems = [
    {
      title: "Evrima (298 Guests)",
      description: "Original yacht featuring all-suite terraces, Suite Ambassador service, multiple restaurants, open bar, Wi-Fi, and marina watersports platform.",
      image: evrimaInclusionImg,
      placeholderLabel: "Ritz-Carlton Evrima Luxury Yacht Inclusions & Amenities"
    },
    {
      title: "Ilma (448 Guests)",
      description: "Expanded yacht with Forbes Five-Star rating, featuring core inclusions plus specialty dining at Seta su Ilma (additional cover charge).",
      image: ilmaInclusionImg,
      placeholderLabel: "Ritz-Carlton Ilma Luxury Yacht Inclusions & Amenities"
    },
    {
      title: "Luminara (452 Guests)",
      description: "Newest vessel continuing the all-inclusive model, with expanded suite terrace layouts and specialty dining at Seta su Luminara.",
      image: luminaraInclusionImg,
      placeholderLabel: "Ritz-Carlton Luminara Luxury Yacht Inclusions & Amenities"
    }
  ];

  // 7. Data mapping for Traditional Cruise Comparison Table (Section 8: BudgetBreakdownTable)
  const traditionalVsRitzTable = {
    title: "Ritz-Carlton Yacht vs. Traditional Cruise Comparison",
    description: "How Ritz-Carlton Yacht Collection inclusions compare directly with traditional ocean cruise lines:",
    headers: ["Expense Category", "Traditional Cruise", "Ritz-Carlton Yacht"],
    rows: [
      ["Suite accommodation", "Included", "Included (100% All-Suite)"],
      ["Private terrace", "Category dependent", "Standard suite concept"],
      ["Main dining", "Usually included", "Included (Multiple Venues)"],
      ["Premium drinks", "Often package-based", "Selected premium beverages included"],
      ["Wi-Fi", "Often package-based", "Included (Starlink)"],
      ["Gratuities", "Often additional", "Included"],
      ["Entertainment", "Included", "Included (Intimate Yacht Format)"],
      ["Watersports", "Varies / Extra", "Marina access included"],
      ["Specialty dining", "Often extra", "Selected venues extra"],
      ["Shore excursions", "Extra", "Extra"],
      ["Spa & Salon", "Extra", "Extra"],
      ["Airfare & Hotels", "Extra", "Extra"]
    ]
  };

  // 8. Data mapping for 12 Questions to Ask (Section 9: BrandPillarsShowcase)
  const askingQuestionsData = {
    title: "What Should You Ask Before Booking?",
    subtitle: "Confirm these 12 inclusion details with your travel advisor before placing a deposit.",
    pillars: [
      { title: "1. Which dining venues are included?", description: "Verify venue inclusions for your specific yacht.", icon: "compass" },
      { title: "2. Is specialty restaurant extra?", description: "Confirm cover charges for S.E.A. or Seta.", icon: "shield" },
      { title: "3. Which beverages are included?", description: "Check complimentary wine & spirit brands.", icon: "award" },
      { title: "4. Are reserve wines extra?", description: "Identify private reserve beverage surcharges.", icon: "star" },
      { title: "5. Are excursions included in offer?", description: "Verify if your promotional booking includes credits.", icon: "clock" },
      { title: "6. Are airport transfers included?", description: "Confirm transportation package availability.", icon: "check" },
      { title: "7. Is pre-cruise hotel included?", description: "Check pre/post stay package details.", icon: "compass" },
      { title: "8. What Wi-Fi level is included?", description: "Confirm Starlink Wi-Fi access terms.", icon: "map" },
      { title: "9. Are onboard gratuities included?", description: "Verify restaurant and housekeeping tips.", icon: "dollar" },
      { title: "10. Are spa treatments included?", description: "Distinguish facility access from paid treatments.", icon: "award" },
      { title: "11. Are there promotional credits?", description: "Inquire about Virtuoso or Bonvoy VIP perks.", icon: "star" },
      { title: "12. What is total price with fees?", description: "Confirm final door-to-door trip investment.", icon: "shield" }
    ]
  };

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included",
        "name": "What Is Included on a Ritz-Carlton Yacht Cruise?",
        "headline": "What Is Included on a Ritz-Carlton Yacht Cruise?",
        "description": "Learn what is included on a Ritz-Carlton Yacht Collection cruise, including suites, dining, premium beverages, Wi-Fi, gratuities, entertainment and marina watersports, plus what costs extra.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionIncluded/what-is-included-on-a-ritz-carlton-yacht-cruise.jpg",
          "caption": "What Is Included on a Ritz-Carlton Yacht Cruise?"
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionIncluded/what-is-included-on-a-ritz-carlton-yacht-cruise.jpg",
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
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Yacht Cruising",
          "Luxury Safaris",
          "Expedition Cruises",
          "River Cruising",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included/#breadcrumb",
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Is Included on a Ritz-Carlton Yacht Cruise",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionIncluded/what-is-included-on-a-ritz-carlton-yacht-cruise.jpg" />
        <meta property="og:image:alt" content="What Is Included on a Ritz-Carlton Yacht Cruise?" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionIncluded/what-is-included-on-a-ritz-carlton-yacht-cruise.jpg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={heroBgImg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Introduction) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={introLifestyleImg}
        image2={introDiningImg}
        alt1="What Is Included on a Ritz-Carlton Yacht Cruise - Marina Terrace & Luxury Yacht Lifestyle"
        alt2="Ritz-Carlton Yacht Collection Culinary Inclusions & Fine Dining"
        watermarkText="INCLUSIONS"
      />

      {/* ─── SECTION 3: Quick Answer Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={quickAnswerTable}
      />

      {/* ─── SECTION 4: 12 Included Highlights (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="What Is Included in the Ritz-Carlton Yacht Cruise Fare?"
        subtitle="12 core luxury inclusions provided as part of your onboard yachting experience."
        items={includedHighlights}
      />

      {/* ─── INTERACTIVE INCLUDED VS EXTRA FILTER COMPONENT ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Interactive Filter</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              Ritz-Carlton Yacht Cruise: What's Included?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Select a tab below to toggle between included amenities and extra vacation expenses.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('included')}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md ${activeTab === 'included'
                    ? 'bg-navy-950 text-white shadow-navy-950/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                Included in Fare
              </button>
              <button
                onClick={() => setActiveTab('extra')}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md ${activeTab === 'extra'
                    ? 'bg-amber-600 text-white shadow-amber-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                Additional Cost
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            {activeTab === 'included' ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-medium text-emerald-900 mb-6 flex items-center gap-2">
                  <Check className="text-emerald-600" size={24} /> Included Amenities & Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Suite accommodation with private terrace",
                    "Suite Ambassador personalized service",
                    "Multiple dining venues (breakfast, lunch, dinner)",
                    "24-hour in-suite dining",
                    "Selected fine wines, spirits, cocktails, beers",
                    "Specialty coffees, teas & soft drinks",
                    "Complimentary Starlink Wi-Fi",
                    "Onboard restaurant, bar & housekeeping gratuities",
                    "Live entertainment & destination enrichment",
                    "Marina-style watersports access",
                    "Fitness center & wellness space access",
                    "Applicable itinerary port fees"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-slate-800 text-sm font-medium">
                      <Check size={18} className="text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-medium text-amber-900 mb-6 flex items-center gap-2">
                  <X className="text-amber-600" size={24} /> Additional Vacation Expenses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "International and domestic airfare",
                    "Pre- and post-cruise luxury hotel stays",
                    "Airport to yacht private transfers",
                    "Shore excursions & private tours",
                    "Spa treatments (massages, facials)",
                    "Salon services (hair styling, manicures)",
                    "Specialty dining cover charges (S.E.A. / Seta)",
                    "Private-reserve vintage wines & rare spirits",
                    "Caviar & medical treatments",
                    "Professional laundry & dry cleaning",
                    "Boutique purchases & personal souvenirs",
                    "Travel insurance policy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-amber-50/60 rounded-xl border border-amber-100 text-slate-800 text-sm font-medium">
                      <X size={18} className="text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Inclusions vs Extras (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="What Is Included vs. What Costs Extra?"
        subtitle="Comparing standard onboard fare inclusions with optional external trip expenses."
        includedTitle="What the Fare Includes"
        extrasTitle="What Costs Extra"
        included={fareInclusionsMapped}
        extras={fareExtrasMapped}
      />

      {/* ─── SECTION 6: Complete Comparison Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={completeComparisonTable}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Want to Know the True Cost of a Ritz-Carlton Yacht Vacation?"
        description="The advertised cruise fare is only one part of the planning equation. Connect with our luxury advisors to calculate your complete door-to-door journey."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={middleCtaImg}
        imagePosition="object-[center_60%]"
      />

      {/* ─── SECTION 7: Fleet Inclusions Breakdown (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Evrima vs. Ilma vs. Luminara: Fleet Inclusions"
        subtitle="The core all-inclusive philosophy applies across the entire fleet."
        items={fleetInclusionItems}
      />

      {/* ─── SECTION 8: Traditional vs Ritz Comparison (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={traditionalVsRitzTable}
      />

      {/* ─── SECTION 9: 12 Questions to Ask (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={askingQuestionsData}
      />

      {/* ─── SECTION 10: Video Section Component (VideoEmbed Component) ─── */}
      <VideoEmbed
        data={{
          youtubeId: "mrdHjSeXwfc",
          title: "Experience All-Inclusive Yachting",
          description: "Watch what makes The Ritz-Carlton Yacht Collection an extraordinary way to travel the world."
        }}
      />

      {/* ─── SECTION 11: Angela Hughes Bio Component (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={angelaImage}
        quote="Don't evaluate a luxury yacht by its advertised fare alone. Build the entire trip — flights, hotels, transfers, excursions and onboard extras — and then compare the total experience."
      />

      {/* ─── SECTION 12: Inclusions Summary (AuthorityBox Component) ─── */}
      <AuthorityBox
        title="What Does 'All-Inclusive' Really Mean?"
        content="Your cruise fare covers the core luxury yacht experience — suite, private terrace, most dining, 24-hour room service, selected beverages, Wi-Fi, onboard gratuities, entertainment, and marina watersports — while leaving flights, hotels, transfers, shore excursions, spa services, and personal purchases separate."
        author="Angela Hughes, Luxury Travel Expert & CEO"
      />

      {/* ─── SECTION 13: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Want to Know the True Cost of a Ritz-Carlton Yacht Vacation?"
        description="Plan your voyage with an experienced luxury travel advisor and understand exactly what is included before you book."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={finalCtaImg}
        imagePosition="object-[center_55%]"
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionIncluded;

