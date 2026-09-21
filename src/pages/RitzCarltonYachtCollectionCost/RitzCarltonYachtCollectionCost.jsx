import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';
import { Play } from 'lucide-react';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Ritz-Carlton Yacht Cruise Cost Assets
import heroBgImg from '@/assets/Ritz-CarltonYachtCruiseCost/how-much-does-a-ritz-carlton-yacht-cruise-cost.jpg';
import introLifestyleImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-collection-pricing-guide.jpg';
import introDiningImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-collection-dining-experience.jpg';

// Quick Answer / Executive Summary Images
import quickAnswerFaresImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-realistic-vacation-fares.jpeg';
import quickAnswerLuminaraImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-luminara-suite-pricing.jpg';
import quickAnswerFactorsImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-core-price-factors.jpg';

// Middle CTA Image
import middleCtaImg from '@/assets/Ritz-CarltonYachtCruiseCost/find-your-ritz-carlton-yacht-price.jpeg';

// Fleet Breakdown Images
import evrimaFleetImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-evrima-yacht-cost-breakdown.jpeg';
import ilmaFleetImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-ilma-yacht-cost-breakdown.jpeg';
import luminaraFleetImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-luminara-yacht-cost-breakdown.jpeg';

// Suite & Entry Cost Images
import ownerSuiteImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-owners-suite-cost.jpg';
import couplesSuiteImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-cost-for-two-travelers.jpg';
import entryFareImg from '@/assets/Ritz-CarltonYachtCruiseCost/cheapest-ritz-carlton-yacht-cruise-entry-fares.jpg';

// Interactive Hub Images
import hubPricingImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-cost-and-inclusions-guide.jpeg';
import hubComparisonImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-fleet-brand-comparisons.jpg';
import hubLifestyleImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-onboard-lifestyle-and-suites.jpg';
import hubExcursionImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-shore-excursions-and-destinations.jpeg';
import hubAdvisorImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-travel-advisor-services.jpg';

// Strategy Roadmap Images
import strategyDailyRateImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-compare-daily-rate.jpeg';
import strategyDepartureDatesImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-compare-departure-dates.jpeg';
import strategySuiteCategoryImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-compare-suite-categories.jpg';
import strategyItineraryImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-compare-itinerary.jpg';
import strategyShoulderSeasonImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-shoulder-season.jpg';
import strategyLongVoyagesImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-longer-voyages.jpg';
import strategyTotalVacationImg from '@/assets/Ritz-CarltonYachtCruiseCost/ritz-carlton-yacht-value-total-vacation-cost.jpeg';

// Final CTA Image
import finalCtaImg from '@/assets/Ritz-CarltonYachtCruiseCost/contact-ritz-carlton-yacht-collection-advisor.jpg';

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
const VideoPlaceholder = ({ title = "Ritz-Carlton Yacht Pricing Breakdown" }) => (
  <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-navy-950 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700/60 flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
    <div className="w-20 h-20 bg-blue-600/30 group-hover:bg-blue-600/60 text-blue-400 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-blue-400/40 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
      <Play size={32} className="text-white fill-white ml-1" />
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">VIDEO PLACEHOLDER</span>
    <h3 className="text-white text-lg md:text-xl font-display font-medium max-w-lg">{title}</h3>
    <p className="text-slate-400 text-xs mt-2">Video player placeholder — Ready for media integration</p>
  </div>
);

const RitzCarltonYachtCollectionCost = () => {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: "2026 Ritz-Carlton Yacht Collection Pricing Guide",
      paragraphs: [
        "If you're researching a Ritz-Carlton Yacht Collection cruise, you've probably discovered that there isn't one simple answer to the question: 'How much does it cost?'",
        "A Ritz-Carlton yacht cruise can cost several thousand dollars per person for a short voyage and tens of thousands of dollars per person for longer itineraries or premium suites.",
        "Current 2026 examples published by The Ritz-Carlton Yacht Collection include fares from approximately $9,300 per person for a 13-night Caribbean voyage, $12,800 for an 18-night crossing, $16,200 for a 10-night Asia itinerary, and $17,900 for an 11-night voyage. These are cruise fares, generally based on double occupancy and subject to availability and itinerary.",
        "But those numbers only tell part of the story. The better question is: How much should you realistically budget for the entire Ritz-Carlton yacht vacation? That's what this guide is designed to answer."
      ]
    }
  ];

  // 2. Data mapping for Quick Answer Executive Summary (Section 3: ThreeColumnGrid)
  const quickAnswerItems = [
    {
      title: "Realistic Vacation Fares",
      description: "For 2026, a realistic starting point is several thousand dollars per person for shorter sailings, while longer itineraries reach $10,000–$20,000+ per person before suite upgrades.",
      image: quickAnswerFaresImg,
      placeholderLabel: "Ritz-Carlton Yacht Realistic Vacation Fares"
    },
    {
      title: "Luminara & Suite Pricing",
      description: "A 2026 report documented a 10-night Luminara Japan sailing at $35,000 per person, with Owner's Suites on Asia voyages reaching $42,300–$136,500 per person.",
      image: quickAnswerLuminaraImg,
      placeholderLabel: "Ritz-Carlton Luminara & Suite Pricing"
    },
    {
      title: "Core Price Factors",
      description: "Final cost depends on yacht, sailing date, destination, voyage length, suite category, availability, season, flights, hotels, transfers, excursions, and spa services.",
      image: quickAnswerFactorsImg,
      placeholderLabel: "Ritz-Carlton Yacht Core Price Factors"
    }
  ];

  // 3. Data mapping for 2026 Examples Table (Section 4: BudgetBreakdownTable)
  const publishedPricesTable = {
    title: "Current Ritz-Carlton Yacht Collection Prices: 2026 Examples",
    description: "The best way to understand Ritz-Carlton pricing is to look at actual current published examples and independent reporting.",
    headers: ["Example Itinerary", "Approximate Published Fare"],
    rows: [
      ["Caribbean — 13 nights", "From $9,300 per person"],
      ["11-night voyage", "From $17,900 per person"],
      ["18-night crossing", "From $12,800 per person"],
      ["Asia — 10 nights", "From $16,200 per person"],
      ["Japan — 10 nights, premium example", "$35,000 per person"],
      ["Luminara Owner's Suite — selected Asia voyages", "Approximately $42,300 – $136,500 per person"]
    ]
  };

  // 4. Data mapping for Per Person & Per Night (Section 5: PricingTiersCards)
  const perNightPricingItems = [
    {
      name: "13-Night Caribbean Voyage",
      price: "$9,300 / person",
      nights: "~$715 / night",
      description: "Two guests total: ~$18,600. Ritz-Carlton advertises cruise fares per person based on double occupancy."
    },
    {
      name: "18-Night Ocean Crossing",
      price: "$12,800 / person",
      nights: "~$711 / night",
      description: "Two guests total: ~$25,600. Longer voyages can provide a lower effective daily rate."
    },
    {
      name: "10-Night Asia Sailing",
      price: "$16,200 / person",
      nights: "~$1,620 / night",
      description: "Two guests total: ~$32,400. Premium regional destinations command higher daily rates."
    },
    {
      name: "11-Night Voyage",
      price: "$17,900 / person",
      nights: "~$1,627 / night",
      description: "Two guests total: ~$35,800. Always request total reservation pricing from your advisor."
    }
  ];

  // 5. Data mapping for Included vs Extra (Section 6: CostValueAnalysisCards)
  const fareInclusionsMapped = [
    { title: "All-Suite Accommodation", description: "100% all-suite yacht layout with a private terrace in every suite." },
    { title: "Dining & Premium Drinks", description: "Multiple dining venues plus selected wines, spirits, and non-alcoholic beverages." },
    { title: "Wi-Fi & Gratuities", description: "Complimentary high-speed Wi-Fi and onboard crew gratuities included in your fare." },
    { title: "Marina & Water Sports", description: "Direct water access from the stern marina for paddleboarding and water sports." }
  ];

  const fareExtrasMapped = [
    { title: "Airfare & Transfers", description: "International business/first-class flights and private airport-to-yacht transfers." },
    { title: "Pre/Post Luxury Hotels", description: "Nightly hotel stays in departure and arrival ports before or after your sailing." },
    { title: "Shore Excursions", description: "Private guided shore excursions and immersive land experiences in ports of call." },
    { title: "Spa & Reserve Experiences", description: "Wellness massages, spa treatments, and specialized dining reserve selections." }
  ];

  // 6. Data mapping for Real Cost Table (Section 7: BudgetBreakdownTable)
  const realVacationCostTable = {
    title: "What Is the Real Cost of a Ritz-Carlton Yacht Vacation?",
    description: "Consider a hypothetical couple booking a luxury 2026 Ritz-Carlton voyage to understand complete vacation budgeting:",
    headers: ["Expense Category", "Example Budget"],
    rows: [
      ["Cruise fare (for two)", "$18,600"],
      ["Business-class flights", "$6,000"],
      ["Pre-cruise hotel", "$1,500"],
      ["Transfers", "$600"],
      ["Private excursions", "$2,000"],
      ["Travel insurance", "$1,000"],
      ["Miscellaneous", "$800"],
      ["Estimated Total Vacation Cost", "$30,500"]
    ]
  };

  // 7. Data mapping for Fleet Breakdown (Section 8: ThreeColumnGrid)
  const fleetBreakdownItems = [
    {
      title: "Evrima (298 Guests)",
      description: "The original and smallest fleet vessel, focusing on maximum intimacy. Evaluate Evrima prices by itinerary, suite category, and sailing date.",
      image: evrimaFleetImg,
      placeholderLabel: "Ritz-Carlton Evrima Yacht Cost Breakdown"
    },
    {
      title: "Ilma (448 Guests)",
      description: "Forbes Five-Star cruise ship distinction in 2026. Offers expanded dining, wellness, and generous private terrace suite layouts.",
      image: ilmaFleetImg,
      placeholderLabel: "Ritz-Carlton Ilma Yacht Cost Breakdown"
    },
    {
      title: "Luminara (452 Guests)",
      description: "Newest vessel. Southern Japan 10-night sailings documented at $35,000/person; Grand Suites offer ~600 sq ft + 95 sq ft terrace.",
      image: luminaraFleetImg,
      placeholderLabel: "Ritz-Carlton Luminara Yacht Cost Breakdown"
    }
  ];

  // 8. Data mapping for Suite & Entry Costs (Section 9: ThreeColumnGrid)
  const suiteAndEntryItems = [
    {
      title: "Ritz-Carlton Owner's Suite Cost",
      description: "Luminara Owner's Suites on winter 2026/27 Asia voyages range from $42,300 to $136,500 per person depending on sailing demand.",
      image: ownerSuiteImg,
      placeholderLabel: "Ritz-Carlton Owner's Suite Cost"
    },
    {
      title: "Cost for Two Travelers",
      description: "Double per-person fare for total cruise fare ($9,300 × 2 = $18,600; $17,900 × 2 = $35,800), plus flights, hotels & transfers.",
      image: couplesSuiteImg,
      placeholderLabel: "Ritz-Carlton Yacht Cost for Two Travelers"
    },
    {
      title: "Cheapest Ritz-Carlton Cruise?",
      description: "Shorter 3-night sailings begin around $3,200–$3,400 per person, though shorter sailings carry higher per-night daily rates.",
      image: entryFareImg,
      placeholderLabel: "Cheapest Ritz-Carlton Yacht Cruise Entry Fares"
    }
  ];

  // 9. Data mapping for 7 Value Strategies (Section 10: InteractivePlanningRoadmap)
  const valueStrategiesSteps = [
    { timeframe: "Strategy 01", title: "Compare Daily Rate", description: "Calculate Cruise fare ÷ number of nights to determine true daily value.", image: strategyDailyRateImg },
    { timeframe: "Strategy 02", title: "Compare Departure Dates", description: "Shifting travel dates by a few weeks can change pricing substantially.", image: strategyDepartureDatesImg },
    { timeframe: "Strategy 03", title: "Compare Suite Categories", description: "Ask what you actually gain before automatically booking top suite categories.", image: strategySuiteCategoryImg },
    { timeframe: "Strategy 04", title: "Compare Complete Itinerary", description: "A $12,000 cruise visiting dream ports beats an $8,000 cruise to repeated ports.", image: strategyItineraryImg },
    { timeframe: "Strategy 05", title: "Consider Shoulder-Season", description: "Avoid peak pricing windows for better rate flexibility and suite availability.", image: strategyShoulderSeasonImg },
    { timeframe: "Strategy 06", title: "Compare Longer Voyages", description: "Effective daily rates often decrease as overall voyage length increases.", image: strategyLongVoyagesImg },
    { timeframe: "Strategy 07", title: "Look at Total Vacation", description: "Cheapest cruise fare doesn't mean cheapest complete trip when flights are considered.", image: strategyTotalVacationImg }
  ];

  // 10. Data mapping for 7 Mistakes (Section 11: MistakesShowcase)
  const pricingMistakes = [
    { title: "Mistake #1: Looking only at starting price", description: "'From $9,300' does not mean every traveler will pay $9,300." },
    { title: "Mistake #2: Forgetting double occupancy", description: "Advertised fares are commonly quoted per person based on double occupancy." },
    { title: "Mistake #3: Ignoring the suite choice", description: "Suite category selection changes the total reservation cost dramatically." },
    { title: "Mistake #4: Forgetting international airfare", description: "Business-class flights can add thousands of dollars to your trip cost." },
    { title: "Mistake #5: Treating excursions as included", description: "Always verify which shore excursions are included and which carry extra fees." },
    { title: "Mistake #6: Comparing only total cruise prices", description: "Compare effective nightly rates and total trip value across lines." },
    { title: "Mistake #7: Choosing a cheaper itinerary simply because it is cheaper", description: "The itinerary is one of the biggest components of luxury travel value." }
  ];

  // 11. Data mapping for 10 Pricing Questions (Section 12: BrandPillarsShowcase)
  const pricingQuestionsData = {
    title: "Before You Book: Ask These 10 Pricing Questions",
    subtitle: "Essential checklist questions to confirm before placing a deposit on a Ritz-Carlton yacht cruise.",
    pillars: [
      { title: "1. What is total cruise fare for all travelers?", description: "Confirm total double-occupancy fare, not just per-person rate.", icon: "compass" },
      { title: "2. What taxes and fees are included?", description: "Verify government taxes, port charges, and fee inclusions.", icon: "shield" },
      { title: "3. Which suite category is included?", description: "Check square footage, deck location, and terrace layout.", icon: "award" },
      { title: "4. What is included in the fare?", description: "Dining venues, wines, spirits, Wi-Fi, and gratuities.", icon: "star" },
      { title: "5. What costs extra?", description: "Identify spa treatments, premium spirits, and private transfers.", icon: "clock" },
      { title: "6. Are gratuities included?", description: "Confirm onboard crew gratuities coverage.", icon: "check" },
      { title: "7. Which beverages are included?", description: "Verify complimentary open bar vs premium reserves.", icon: "compass" },
      { title: "8. Which excursions are included?", description: "Differentiate complimentary marina sports vs shore tours.", icon: "map" },
      { title: "9. What will complete trip cost?", description: "Factor in flights, pre/post hotels, and travel insurance.", icon: "dollar" },
      { title: "10. Are there current promotions?", description: "Inquire about Virtuoso perks or Bonvoy point opportunities.", icon: "award" }
    ]
  };

  // 12. Interactive Hub Cards mapping for Resource Hub (Section 13)
  const resourceHubItems = [
    {
      title: "Cost & Inclusions Guides",
      category: "Pricing & Inclusions",
      description: "Detailed analyses of fares, inclusions, daily rates, and honest value assessments.",
      image: hubPricingImg,
      imagePosition: "object-[center_90%]",
      placeholderLabel: "Ritz-Carlton Yacht Cost & Inclusions Guide",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "How Much Does a Ritz-Carlton Yacht Cruise Cost?", url: "/ritz-carlton-yacht-collection-cost" },
        { label: "What Is Included on a Ritz-Carlton Yacht Cruise?", url: "#" },
        { label: "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review", url: "#" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-cost"
    },
    {
      title: "Yacht & Brand Comparisons",
      category: "Fleet & Competitor Showdowns",
      description: "Side-by-side comparisons of Evrima, Ilma, Luminara, Explora, and Seabourn.",
      image: hubComparisonImg,
      placeholderLabel: "Ritz-Carlton Yacht Fleet Comparisons",
      actionLabel: "Explore Comparisons",
      links: [
        { label: "Evrima vs. Ilma vs. Luminara: Which Ritz-Carlton Yacht Is Best?", url: "#" },
        { label: "Ritz-Carlton Yacht Collection vs. Explora Journeys", url: "#" },
        { label: "Ritz-Carlton Yacht Collection vs. Seabourn", url: "#" }
      ],
      mainUrl: "#"
    },
    {
      title: "Onboard Lifestyle & Suites",
      category: "Suites & Amenities",
      description: "Guides to dress code, family friendliness, Bonvoy points, and suite selection.",
      image: hubLifestyleImg,
      placeholderLabel: "Ritz-Carlton Yacht Onboard Lifestyle & Suites",
      actionLabel: "Explore Onboard Guides",
      links: [
        { label: "What Is the Dress Code on Ritz-Carlton Yachts?", url: "#" },
        { label: "Are Ritz-Carlton Yacht Cruises Good for Families and Children?", url: "#" },
        { label: "How Do Marriott Bonvoy Points Work on Ritz-Carlton Yacht Cruises?", url: "#" },
        { label: "What Are the Best Suites on Ritz-Carlton Yachts?", url: "#" }
      ],
      mainUrl: "#"
    },
    {
      title: "Excursions & Destinations",
      category: "Regions & Non-Cruisers",
      description: "Exploring shore excursions, Caribbean itineraries, Miami sailings, and non-cruiser guides.",
      image: hubExcursionImg,
      placeholderLabel: "Ritz-Carlton Yacht Shore Excursions & Destinations",
      actionLabel: "Explore Destinations",
      links: [
        { label: "Are Ritz-Carlton Yacht Shore Excursions Included?", url: "#" },
        { label: "Is The Ritz-Carlton Yacht Collection Good for People Who Do Not Like Cruises?", url: "#" },
        { label: "Ritz-Carlton Yacht Cruises from Miami: What You Need to Know", url: "#" },
        { label: "Ritz-Carlton Yacht Caribbean Cruises: Best Itineraries and When to Go", url: "#" }
      ],
      mainUrl: "#"
    },
    {
      title: "Commercial & Advisor Services",
      category: "Advisor Advisory",
      description: "Why booking through a specialized travel advisor in Florida or Orlando unlocks VIP perks.",
      image: hubAdvisorImg,
      placeholderLabel: "Ritz-Carlton Yacht Travel Advisor Services",
      actionLabel: "Explore Advisory",
      links: [
        { label: "Why Book a Ritz-Carlton Yacht Cruise Through a Travel Advisor?", url: "#" },
        { label: "Ritz-Carlton Yacht Collection Travel Advisor in Florida", url: "#" },
        { label: "Ritz-Carlton Yacht Collection Travel Advisor in Orlando", url: "#" },
        { label: "How to Choose the Right Ritz-Carlton Yacht, Suite and Itinerary", url: "#" }
      ],
      mainUrl: "#"
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-cost/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-cost",
        "name": "How Much Does a Ritz-Carlton Yacht Cruise Cost? 2026 Pricing Guide",
        "headline": "How Much Does a Ritz-Carlton Yacht Cruise Cost?",
        "description": "Explore Ritz-Carlton Yacht Collection costs, current fare examples, price per person, suite pricing, inclusions and the real cost of a luxury yacht vacation.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Ritz-CarltonYachtCruiseCost/how-much-does-a-ritz-carlton-yacht-cruise-cost.jpg",
          "caption": "How Much Does a Ritz-Carlton Yacht Cruise Cost? 2026 Pricing Guide"
        },
        "image": "https://www.tripsandships.com/assets/Ritz-CarltonYachtCruiseCost/how-much-does-a-ritz-carlton-yacht-cruise-cost.jpg",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-cost/#breadcrumb",
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
            "name": "Ritz-Carlton Yacht Collection Cost",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-cost"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-cost/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/Ritz-CarltonYachtCruiseCost/how-much-does-a-ritz-carlton-yacht-cruise-cost.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/Ritz-CarltonYachtCruiseCost/how-much-does-a-ritz-carlton-yacht-cruise-cost.jpg" />
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
        backgroundImage={heroBgImg}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Narrative Intro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={introLifestyleImg}
        image2={introDiningImg}
        watermarkText="PRICING"
      />

      {/* ─── SECTION 3: Executive Summary (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="How Much Does a Ritz-Carlton Yacht Cruise Cost?"
        subtitle="For 2026, a realistic starting point is several thousand dollars per person for shorter sailings, while longer and more desirable itineraries reach $10,000–$20,000+ per person before suite upgrades."
        items={quickAnswerItems}
      />

      {/* ─── SECTION 4: Published Fares Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={publishedPricesTable}
      />

      {/* ─── SECTION 5: Per Person & Per Night Breakdown (PricingTiersCards Component) ─── */}
      <PricingTiersCards
        title="Cost Per Person & Cost Per Night Breakdown"
        subtitle="PRICE METRICS & PER-NIGHT VALUE"
        items={perNightPricingItems}
        theme="light"
      />

      {/* ─── SECTION 6: Inclusions vs Extras (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="What Does the Fare Include vs. What Costs Extra?"
        subtitle="Understanding your base cruise fare inclusions vs additional vacation expenses."
        includedTitle="What the Fare Includes"
        extrasTitle="What Costs Extra"
        included={fareInclusionsMapped}
        extras={fareExtrasMapped}
      />

      {/* ─── SECTION 7: Real Vacation Cost Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={realVacationCostTable}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Find Your Ritz-Carlton Yacht Price?"
        description="There is no reason to guess. Trips & Ships Luxury Travel can help you compare available sailings, evaluate suite categories and build the complete luxury journey around your yacht cruise."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={middleCtaImg}
        imagePosition="object-[center_60%]"
      />

      {/* ─── SECTION 8: Why Expensive & Fleet Breakdown (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Why Is Ritz-Carlton Yacht Collection So Expensive?"
        subtitle="You are paying for small-scale experience density (fewer than 500 guests, Forbes Five-Star hospitality, all-suite terraces) rather than mass-market cruise economics."
        items={fleetBreakdownItems}
      />

      {/* ─── SECTION 9: Suite & Entry Costs (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Suite Categories, Couples & Budget Entry Fares"
        subtitle="Key pricing benchmarks across suite categories, double occupancy totals, and shorter voyages."
        items={suiteAndEntryItems}
      />

      {/* ─── SECTION 10: 7 Value Strategies (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How Can You Get the Best Ritz-Carlton Yacht Value?"
        subtitle="7 smart luxury planning strategies to optimize your vacation investment."
        steps={valueStrategiesSteps}
      />

      {/* ─── SECTION 11: 7 Pricing Mistakes (MistakesShowcase Component) ─── */}
      <MistakesShowcase
        mistakes={pricingMistakes}
      />

      {/* ─── SECTION 12: 10 Pricing Questions (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={pricingQuestionsData}
      />

      {/* ─── SECTION 13: Curated Topic Clusters (InteractivePillarHubGrid Component) ─── */}
      <InteractivePillarHubGrid
        title="Curated Supporting Guides & Topic Clusters"
        subtitle="Explore in-depth articles on cost, inclusions, honest reviews, competitor comparisons, and suite selection."
        items={resourceHubItems}
        variant="destination"
      />

      {/* ─── SECTION 14: Video Section Component ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            See Ritz-Carlton Yacht in Action
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
            Experience Luxury Yacht Cruising
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto mb-8">
            Watch what makes The Ritz-Carlton Yacht Collection an extraordinary way to travel the world.
          </p>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cVKO6onRw-U"
              title="The Ritz-Carlton Yacht Collection Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── SECTION 15: Angela Hughes Bio Component (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={angelaImage}
        quote="The right luxury trip is not necessarily the cheapest trip or the most expensive trip. It is the trip that delivers the greatest value for the individual traveler."
      />

      {/* ─── SECTION 16: Pricing Disclosure (AuthorityBox Component) ─── */}
      <AuthorityBox
        title="Pricing & Fare Disclosure"
        content="Ritz-Carlton Yacht Collection fares change based on sailing date, itinerary, suite category, availability, promotions and other factors. Published 'from' fares should not be treated as guaranteed pricing. All prices referenced on this page should be reconfirmed for the specific sailing before booking."
        author="Angela Hughes, Luxury Travel Expert & CEO"
      />

      {/* ─── SECTION 17: FAQ Accordion Component (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={pageData.faqs}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Find Your Ritz-Carlton Yacht Price?"
        description="There is no reason to guess. Trips & Ships Luxury Travel can help you compare available sailings, evaluate suite categories and build the complete luxury journey around your yacht cruise."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={finalCtaImg}
        imagePosition="object-[center_55%]"
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionCost;
