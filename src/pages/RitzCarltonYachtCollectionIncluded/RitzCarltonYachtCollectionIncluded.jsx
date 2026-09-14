import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';
import { Play, Check, X } from 'lucide-react';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

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
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Video Placeholder component
const VideoPlaceholder = ({ title = "What Is Included on a Ritz-Carlton Yacht Cruise" }) => (
  <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-navy-950 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700/60 flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
    <div className="w-20 h-20 bg-blue-600/30 group-hover:bg-blue-600/60 text-blue-400 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-blue-400/40 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
      <Play size={32} className="text-white fill-white ml-1" />
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">VIDEO PLACEHOLDER</span>
    <h3 className="text-white text-lg md:text-xl font-display font-medium max-w-lg">{title}</h3>
    <p className="text-slate-400 text-xs mt-2">Video player placeholder — Ready for media integration</p>
  </div>
);

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
    title: "Quick Answer: What Does the Ritz-Carlton Yacht Fare Include?",
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
      placeholderLabel: "ALL-SUITE TERRACE"
    },
    {
      title: "2. Suite Ambassador Service",
      description: "Personalized luxury-hotel style contact helping with dining arrangements, reservations, daily preferences, and onboard requests.",
      placeholderLabel: "SUITE AMBASSADOR"
    },
    {
      title: "3. Multiple Dining Experiences",
      description: "Meals across multiple culinary venues including breakfast, lunch, dinner, casual poolside dining, and culinary specialties.",
      placeholderLabel: "MULTIPLE DINING"
    },
    {
      title: "4. 24-Hour In-Suite Dining",
      description: "Enjoy meals and refreshments in the privacy of your suite anytime — perfect for early departures or quiet breakfasts.",
      placeholderLabel: "IN-SUITE DINING"
    },
    {
      title: "5. Premium Beverages Included",
      description: "Fine wines, selected spirits, cocktails, mocktails, beer, soft drinks, specialty coffees, and teas included throughout the yacht.",
      placeholderLabel: "PREMIUM BEVERAGES"
    },
    {
      title: "6. Onboard Gratuities Included",
      description: "Covers service provided by onboard restaurant, bar, and housekeeping team members without daily service add-ons.",
      placeholderLabel: "GRATUITIES INCLUDED"
    },
    {
      title: "7. Complimentary Starlink Wi-Fi",
      description: "High-speed Starlink Wi-Fi included for email, messaging, social media, work, browsing, and video calls at sea.",
      placeholderLabel: "STARLINK WI-FI"
    },
    {
      title: "8. Entertainment & Enrichment",
      description: "Intimate live musicians, resident performances, cultural programming, and destination-focused social activities.",
      placeholderLabel: "YACHT ENTERTAINMENT"
    },
    {
      title: "9. Marina-Style Watersports",
      description: "Direct water access from the stern marina for paddleboards, kayaks, and snorkeling when sea conditions allow.",
      placeholderLabel: "MARINA WATERSPORTS"
    },
    {
      title: "10. Pools & Public Spaces",
      description: "Full access to pools, lounges, outdoor decks, fitness center, wellness spaces, and quiet relaxation areas.",
      placeholderLabel: "POOLS & LOUNGES"
    },
    {
      title: "11. Fitness Facilities Access",
      description: "Complimentary access to exercise equipment, fitness centers, and wellness relaxation spaces onboard.",
      placeholderLabel: "FITNESS CENTER"
    },
    {
      title: "12. Port Fees Included",
      description: "Applicable itinerary port fees are incorporated into the published cruise fare under standard fare terms.",
      placeholderLabel: "PORT FEES"
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
      placeholderLabel: "EVRIMA INCLUSIONS"
    },
    {
      title: "Ilma (448 Guests)",
      description: "Expanded yacht with Forbes Five-Star rating, featuring core inclusions plus specialty dining at Seta su Ilma (additional cover charge).",
      placeholderLabel: "ILMA INCLUSIONS"
    },
    {
      title: "Luminara (452 Guests)",
      description: "Newest vessel continuing the all-inclusive model, with expanded suite terrace layouts and specialty dining at Seta su Luminara.",
      placeholderLabel: "LUMINARA INCLUSIONS"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included",
        "name": "What Is Included on a Ritz-Carlton Yacht Cruise?",
        "description": "Learn what is included on a Ritz-Carlton Yacht Collection cruise, including suites, dining, premium beverages, Wi-Fi, gratuities, entertainment and marina watersports, plus what costs extra.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        },
        "about": {
          "@type": "Thing",
          "name": "Ritz-Carlton Yacht Collection"
        },
        "author": {
          "@type": "Person",
          "name": "Angela Hughes"
        },
        "publisher": {
          "@type": "TravelAgency",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@type": "TravelAgency",
          "name": "Trips & Ships Luxury Travel"
        },
        "description": "Luxury travel advisor and CEO of Trips & Ships Luxury Travel with more than 40 years of travel experience and travel experience spanning more than 121 countries."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included#breadcrumb",
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
            "name": "What's Included",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-included#faq",
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

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Introduction) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
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
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md ${
                  activeTab === 'included'
                    ? 'bg-navy-950 text-white shadow-navy-950/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Included in Fare
              </button>
              <button
                onClick={() => setActiveTab('extra')}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md ${
                  activeTab === 'extra'
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
        image={null}
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

      {/* ─── SECTION 10: Video Section Component ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Inside the Ritz-Carlton Yacht Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
            Experience All-Inclusive Yachting
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto mb-8">
            Watch what makes The Ritz-Carlton Yacht Collection an extraordinary way to travel the world.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <VideoPlaceholder title="The Ritz-Carlton Yacht Collection Inclusions Showcase" />
          </div>
        </div>
      </section>

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
        data={pageData.faqs}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Want to Know the True Cost of a Ritz-Carlton Yacht Vacation?"
        description="Plan your voyage with an experienced luxury travel advisor and understand exactly what is included before you book."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionIncluded;
