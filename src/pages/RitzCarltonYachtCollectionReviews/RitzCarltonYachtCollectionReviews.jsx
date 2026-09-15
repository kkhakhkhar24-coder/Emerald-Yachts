import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';
import { Play, Star, CheckCircle2, XCircle } from 'lucide-react';

// Angela images
import angelaImage from '@/assets/Media (2).jpg';
import profileAH from '@/assets/Profile_AH.jpg';

// Shared UI System Components (Exact EmeraldYachts component-based architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import MistakesShowcase from '@/components/ui/MistakesShowcase';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Video Placeholder component
const VideoPlaceholder = ({ title = "Is Ritz-Carlton Yacht Collection Worth It? Honest Review" }) => (
  <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-navy-950 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700/60 flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
    <div className="w-20 h-20 bg-blue-600/30 group-hover:bg-blue-600/60 text-blue-400 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-blue-400/40 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
      <Play size={32} className="text-white fill-white ml-1" />
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">VIDEO PLACEHOLDER</span>
    <h3 className="text-white text-lg md:text-xl font-display font-medium max-w-lg">{title}</h3>
    <p className="text-slate-400 text-xs mt-2">Video player placeholder — Ready for media integration</p>
  </div>
);

const RitzCarltonYachtCollectionReviews = () => {
  // 1. Data mapping for PremiumIntro (Section 1: Quick Answer Narrative)
  const introSections = [
    {
      heading: "Quick Answer: Is The Ritz-Carlton Yacht Collection Worth It?",
      paragraphs: [
        "For the right traveler, yes — but it is not automatically worth the premium for everyone.",
        "Ritz-Carlton Yacht Collection is strongest for travelers who value small-ship luxury, all-suite accommodations, private terraces, personalized service, premium dining, a quieter atmosphere, fewer guests, luxury-hotel-style service, unique ports and yacht-style experiences, and a more intimate alternative to traditional cruising.",
        "The biggest question is value. Recent guest reviews show that some travelers consider the experience exceptional and say the inclusions help justify the fare, while others feel that service inconsistencies, entertainment, excursions or the overall experience don't always justify the premium price.",
        "Our verdict: Ritz-Carlton Yacht Collection is worth considering if you want a luxury hotel experience at sea rather than a traditional cruise. But if your priority is maximizing the number of included excursions, entertainment options or overall value per dollar, there may be better choices."
      ]
    }
  ];

  // 2. Data mapping for Review at a Glance Table (Section 2: BudgetBreakdownTable Component)
  const reviewAtAGlanceTable = {
    title: "Ritz-Carlton Yacht Collection Review at a Glance",
    description: "Our comprehensive assessment across 18 core luxury evaluation metrics:",
    headers: ["Category", "Our Assessment"],
    rows: [
      ["Suites", "Excellent"],
      ["Private terraces", "Excellent"],
      ["Service", "Excellent when consistently delivered"],
      ["Dining", "Very good to excellent"],
      ["Beverage program", "Excellent"],
      ["Wi-Fi", "Excellent"],
      ["Ship design", "Excellent"],
      ["Yacht atmosphere", "Excellent"],
      ["Guest count", "Excellent for travelers seeking intimacy"],
      ["Entertainment", "More limited than large luxury ships"],
      ["Shore excursions", "Can be expensive"],
      ["Value", "Highly subjective"],
      ["Family experience", "Good for luxury multigenerational travel"],
      ["Couples", "Excellent"],
      ["Solo travelers", "Good"],
      ["Traditional cruise fans", "Depends on expectations"],
      ["Luxury travelers", "Excellent fit"],
      ["Overall", "Worth it for the right traveler"]
    ]
  };

  // 3. Data mapping for What Are You Paying For? (Section 3: BrandPillarsShowcase Component)
  const payingForData = {
    title: "The Biggest Question: What Are You Paying For?",
    subtitle: "A Ritz-Carlton yacht is not simply an expensive cruise ship. The product is built around a different idea: A luxury hotel that happens to travel between destinations.",
    pillars: [
      { title: "Smaller Scale & Guest Count", description: "Only 298 to 452 guests max per voyage for an intimate boutique environment.", icon: "compass" },
      { title: "All-Suite & Ocean Terraces", description: "100% all-suite accommodations with private outdoor space standard in every suite.", icon: "star" },
      { title: "Personalized Hotel Service", description: "Suite Ambassador service operating closer to a private luxury-hotel contact.", icon: "award" },
      { title: "Premium Dining & Open Bar", description: "Multiple restaurant-style venues plus fine wines, spirits, and coffees included.", icon: "shield" },
      { title: "Yacht Design & Stern Marina", description: "Direct water access for paddleboarding and kayaks from the stern marina.", icon: "check" },
      { title: "Quieter, Private Atmosphere", description: "Avoiding giant crowds, massive buffets, water slides, and theater traffic.", icon: "clock" }
    ]
  };

  // 4. Data mapping for What Guests Like (Section 4: ThreeColumnGrid Component)
  const whatGuestsLikeItems = [
    {
      title: "1. The Smaller Yacht Experience",
      description: "Evrima accommodates 298 guests; Ilma and Luminara carry roughly 448–452 guests. No massive buffet crowds, embarkation lines, or floating resort traffic.",
      placeholderLabel: "SMALL-SHIP INTIMACY"
    },
    {
      title: "2. The Suites Are a Major Strength",
      description: "Every room is a suite with ocean views, private terrace, high-end furnishings, and 24-hour in-suite dining. You don't pay extra just for outdoor space.",
      placeholderLabel: "SUITE STRENGTH"
    },
    {
      title: "3. Service Can Be Exceptional",
      description: "Crew members remember preferences, recognize returning guests, and provide personalized attention. Reviewers frequently praise dedicated staff.",
      placeholderLabel: "PERSONALIZED SERVICE"
    },
    {
      title: "4. Dining Is Generally a Strength",
      description: "Multiple restaurant environments rather than a single main dining room. Guests enjoy fine dining, casual outdoor grills, and in-suite service.",
      placeholderLabel: "EXCELLENT DINING"
    },
    {
      title: "5. Premium Beverages Add Real Value",
      description: "Selected wines, spirits, cocktails, beers, coffees, and teas are included throughout the yacht, eliminating separate beverage package costs.",
      placeholderLabel: "INCLUDED BEVERAGES"
    },
    {
      title: "6. Luxury Hotel at Sea Atmosphere",
      description: "Intentionally avoids floating-resort elements like casinos or giant production shows in favor of privacy, relaxation, design, and yachting ports.",
      placeholderLabel: "HOTEL AT SEA"
    }
  ];

  // 5. Data mapping for What Guests Don't Like (Section 5: MistakesShowcase Component)
  const whatGuestsDislikeItems = [
    { title: "Drawback 1: The Price Is Very High", description: "Ritz-Carlton Yacht Collection is expensive. Higher fares create higher guest expectations for flawless execution." },
    { title: "Drawback 2: Not Everything Is Included", description: "Shore excursions, spa/salon services, certain specialty dining, and flights carry additional charges." },
    { title: "Drawback 3: Excursions Can Change Value", description: "Excursion pricing can be high relative to independent options; travelers should compare private local guides." },
    { title: "Drawback 4: Entertainment Is Limited", description: "No mega-ship production shows or casinos. Evenings focus on live music, conversation, and quiet lounge relaxation." },
    { title: "Drawback 5: Service Inconsistencies", description: "Some recent reviews report slow or inconsistent service during busy breakfast and lunch periods." },
    { title: "Drawback 6: Experience Depends on Expectations", description: "Travelers seeking giant resort amenities may feel disappointed, while privacy-focused travelers consider it exceptional." }
  ];

  // 6. Data mapping for Pros and Cons (Section 6: CostValueAnalysisCards Component)
  const prosListMapped = [
    { title: "All-Suite Accommodations", description: "100% all-suite layout with private terrace included in every suite category." },
    { title: "Small Guest Counts", description: "298 to 452 guests max for maximum intimacy and small-harbor access." },
    { title: "Luxury-Hotel Service", description: "Personalized Suite Ambassador service and high crew-to-guest ratio." },
    { title: "Premium Beverage & Wi-Fi Inclusions", description: "Fine wines, spirits, cocktails, coffees, Starlink Wi-Fi, and gratuities included." },
    { title: "High-Quality Dining & Marina Access", description: "Multiple dining venues plus direct water sports access from the stern marina." }
  ];

  const consListMapped = [
    { title: "Very High Fares", description: "High cruise fares mean expectations are exceptionally strict." },
    { title: "Excursions & Specialty Dining Extra", description: "Shore tours and specialty venues like S.E.A. / Seta carry added costs." },
    { title: "Limited Onboard Entertainment", description: "Intentionally understated evening entertainment without casinos or big shows." },
    { title: "Service Inconsistencies Reported", description: "Some guest reviews report service delays during peak dining hours." },
    { title: "Fewer Family Features", description: "Children's programming and family features are minimal compared to mega-ships." }
  ];

  // 7. Data mapping for Who Should Book vs Who Should NOT Book (Section 8: CostValueAnalysisCards Component)
  const whoShouldBookMapped = [
    { title: "Couples & Milestone Celebrations", description: "Perfect for honeymoons, anniversaries, milestone birthdays, and romantic escapes." },
    { title: "Luxury Travelers Who Dislike Cruises", description: "Ideal if you love luxury hotels (Four Seasons, Aman) but dislike giant cruise ships." },
    { title: "Experienced Luxury Cruisers", description: "Travelers who appreciate Regent, Silversea, or Seabourn and want a modern yacht vibe." },
    { title: "Multigenerational Luxury Families", description: "Great for families who prioritize private suite accommodation and personalized care." }
  ];

  const whoShouldNotBookMapped = [
    { title: "Budget-Conscious Shoppers", description: "Not suitable if you are looking for the lowest price per night." },
    { title: "Mega-Ship & Casino Fans", description: "Avoid if you want water slides, big theaters, casinos, or non-stop activities." },
    { title: "Travelers Wanting Free Excursions", description: "If included excursions are essential, compare carefully with Regent Seven Seas." },
    { title: "Travelers Expecting Huge Shows", description: "Understated evening entertainment may feel too quiet for show lovers." }
  ];

  // 8. Data mapping for Which Yacht Is Best? (Section 9: ThreeColumnGrid Component)
  const yachtComparisonItems = [
    {
      title: "Evrima (298 Guests)",
      description: "Best for: Travelers who want the most intimate Ritz-Carlton yacht experience. Smallest fleet vessel with 298 guests, ideal for Caribbean and Mediterranean harbors.",
      placeholderLabel: "EVRIMA REVIEW"
    },
    {
      title: "Ilma (448 Guests)",
      description: "Best for: Travelers wanting the newest-generation yacht experience. Recognized with a Forbes Five-Star rating in 2026, offering expanded suites and dining venues.",
      placeholderLabel: "ILMA FIVE-STAR"
    },
    {
      title: "Luminara (452 Guests)",
      description: "Best for: Travelers whose itinerary matters as much as the yacht. Features expanded Asia sailings, Grand Suites, and state-of-the-art residential styling.",
      placeholderLabel: "LUMINARA ASIA"
    }
  ];

  // 9. Data mapping for Competitor Showdowns (Section 10: ThreeColumnGrid Component)
  const competitorShowdownItems = [
    {
      title: "Ritz-Carlton vs. Regent Seven Seas",
      description: "Ritz-Carlton wins for yacht atmosphere, contemporary design, and private terraces. Regent wins for comprehensive inclusions (included shore excursions and door-to-door air).",
      placeholderLabel: "VS. REGENT"
    },
    {
      title: "Ritz-Carlton vs. Silversea",
      description: "Ritz-Carlton offers a modern hotel-at-sea vibe with a younger positioning. Silversea excels in expedition depth, traditional ultra-luxury cruising, and polar destinations.",
      placeholderLabel: "VS. SILVERSEA"
    },
    {
      title: "Ritz-Carlton vs. Explora Journeys",
      description: "Ritz-Carlton feels like a private luxury yacht. Explora Journeys feels like a contemporary ocean residence. Choose Ritz-Carlton for signature hotel brand hospitality.",
      placeholderLabel: "VS. EXPLORA"
    },
    {
      title: "Ritz-Carlton vs. Seabourn",
      description: "Ritz-Carlton is stronger for modern private terraces and hotel positioning. Seabourn is stronger for long-established ultra-luxury cruise expertise and traditional clientele.",
      placeholderLabel: "VS. SEABOURN"
    }
  ];

  // 10. Data mapping for Cruise Critic Review Stats (Section 11: BudgetBreakdownTable Component)
  const reviewStatsTable = {
    title: "What Do Recent Guest Reviews Actually Say?",
    description: "Current independent Cruise Critic review averages for Ritz-Carlton Yacht Collection fleet (as of 2026):",
    headers: ["Yacht / Collection", "Average Rating", "Review Count"],
    rows: [
      ["Ritz-Carlton Yacht Collection Overall", "3.5 / 5.0 Stars", "69 total reviews"],
      ["Evrima Member Average", "3.4 / 5.0 Stars", "43 member reviews"],
      ["Ilma Member Average", "3.7 / 5.0 Stars", "20 member reviews"],
      ["Luminara Member Average", "3.5 / 5.0 Stars", "6 member reviews"]
    ]
  };

  // 11. Data mapping for Evaluation Criteria (Section 12: BrandPillarsShowcase Component)
  const evaluationCriteriaData = {
    title: "The Biggest Mistake: Comparing Price Without Comparing Experience",
    subtitle: "Suppose another luxury cruise costs less. Ask these 11 evaluation questions to calculate true luxury value before booking:",
    pillars: [
      { title: "1. Suite Accommodation", description: "What suite category and terrace square footage are you receiving?", icon: "star" },
      { title: "2. Inclusions & Wi-Fi", description: "Are Starlink Wi-Fi, fine wines, and gratuities included in the fare?", icon: "check" },
      { title: "3. Guest Count & Ratio", description: "How many passengers are onboard and what is the crew service ratio?", icon: "compass" },
      { title: "4. Dining & Excursions", description: "How many restaurants are included and how much do shore tours cost?", icon: "award" }
    ]
  };

  // 12. Data mapping for Editorial Scorecard (Section 14: BudgetBreakdownTable Component)
  const editorialScorecardTable = {
    title: "Trips & Ships Editorial Scorecard: 4.3 / 5.0 Overall",
    description: "Our independent evaluation across 10 key luxury cruise categories:",
    headers: ["Evaluation Category", "Our Rating"],
    rows: [
      ["Service", "4.5 / 5.0"],
      ["Suites", "4.8 / 5.0"],
      ["Dining", "4.4 / 5.0"],
      ["Design", "4.8 / 5.0"],
      ["Yacht Atmosphere", "4.9 / 5.0"],
      ["Destinations", "4.5 / 5.0"],
      ["Entertainment", "3.6 / 5.0"],
      ["Excursion Value", "3.2 / 5.0"],
      ["Overall Value", "3.8 / 5.0"],
      ["Overall Experience", "4.3 / 5.0"]
    ]
  };

  // 13. Data mapping for Resource Hub (Section 15)
  const resourceHubItems = [
    {
      title: "Cost & Inclusions Guides",
      category: "Pricing & Inclusions",
      description: "Detailed analyses of fares, inclusions, daily rates, and honest value assessments.",
      image: null,
      placeholderLabel: "PRICING PLACEHOLDER",
      actionLabel: "Explore Cost Guides",
      links: [
        { label: "How Much Does a Ritz-Carlton Yacht Cruise Cost?", url: "/ritz-carlton-yacht-collection-cost" },
        { label: "What Is Included on a Ritz-Carlton Yacht Cruise?", url: "/ritz-carlton-yacht-collection-included" },
        { label: "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review", url: "/ritz-carlton-yacht-collection-reviews" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-reviews"
    },
    {
      title: "Yacht & Brand Comparisons",
      category: "Fleet & Competitor Showdowns",
      description: "Side-by-side comparisons of Evrima, Ilma, Luminara, Explora, and Seabourn.",
      image: null,
      placeholderLabel: "COMPARISONS PLACEHOLDER",
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
      image: null,
      placeholderLabel: "LIFESTYLE PLACEHOLDER",
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
      image: null,
      placeholderLabel: "DESTINATIONS PLACEHOLDER",
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
      image: null,
      placeholderLabel: "ADVISOR PLACEHOLDER",
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
        "@type": "Article",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#article",
        "headline": "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review",
        "description": "An honest review of the Ritz-Carlton Yacht Collection covering suites, service, dining, value, guest reviews, drawbacks, inclusions and whether the experience is worth the price.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#webpage"
        },
        "author": {
          "@type": "Person",
          "name": "Angela Hughes"
        },
        "publisher": {
          "@type": "TravelAgency",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        },
        "about": {
          "@type": "Thing",
          "name": "Ritz-Carlton Yacht Collection"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews",
        "name": "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Trips & Ships Luxury Travel",
          "url": "https://www.tripsandships.com/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#review",
        "name": "Trips & Ships Editorial Review of Ritz-Carlton Yacht Collection",
        "reviewBody": "Trips & Ships evaluates Ritz-Carlton Yacht Collection based on its yacht atmosphere, suites, service, dining, inclusions, entertainment, destinations and overall value.",
        "author": {
          "@type": "Organization",
          "name": "Trips & Ships Luxury Travel"
        },
        "itemReviewed": {
          "@type": "Thing",
          "name": "Ritz-Carlton Yacht Collection"
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#breadcrumb",
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
            "name": "Reviews",
            "item": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews#faq",
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

      {/* ─── SECTION 1: Comparison Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="VERDICT"
      />

      {/* ─── SECTION 3: Review at a Glance Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={reviewAtAGlanceTable}
      />

      {/* ─── SECTION 4: What Are You Paying For? (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={payingForData}
      />

      {/* ─── SECTION 5: What Guests Like - 6 Key Strengths (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="What Guests Like About Ritz-Carlton Yacht Collection"
        subtitle="6 core product strengths highlighted by satisfied luxury travelers."
        items={whatGuestsLikeItems}
      />

      {/* ─── SECTION 6: What Guests Don't Like - 6 Drawbacks (MistakesShowcase Component) ─── */}
      <MistakesShowcase
        mistakes={whatGuestsDislikeItems}
      />

      {/* ─── SECTION 7: Pros and Cons (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Ritz-Carlton Yacht Collection Pros and Cons"
        subtitle="A balanced look at advantages vs areas to consider before booking."
        includedTitle="Ritz-Carlton Yacht Pros"
        extrasTitle="Ritz-Carlton Yacht Cons"
        included={prosListMapped}
        extras={consListMapped}
      />
      {/* ─── SECTION 8: Is It Worth the Money? (AuthorityBox Component) ─── */}
      <AuthorityBox
        title="Is Ritz-Carlton Yacht Collection Worth the Money? Our Honest Answer"
        content="Yes — if you value privacy, personalized service, suite space, design, dining, smaller ships, and a hotel-at-sea atmosphere. But no — if your primary goal is maximum included excursions, non-stop entertainment, or the lowest luxury-cruise price."
        author="Angela Hughes & Trips & Ships Editorial Board"
        authorImage={angelaImage}
      />

      {/* ─── SECTION 9: Who Should Book vs Who Should NOT Book (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Who Should Book vs. Who Should Choose Another Line"
        prosTitle="Who Will Love Ritz-Carlton Yacht"
        consTitle="Who Should Choose Another Line"
        bestFor={whoShouldBookMapped.map(item => `${item.title}: ${item.description}`)}
        notBestFor={whoShouldNotBookMapped.map(item => `${item.title}: ${item.description}`)}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 10: Which Ritz-Carlton Yacht Is Best? (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Evrima vs. Ilma vs. Luminara: Which Yacht Is Best?"
        subtitle="Comparing the three vessels across guest capacity, Forbes ratings, and itineraries."
        items={yachtComparisonItems}
      />

      {/* ─── SECTION 11: Competitor Showdowns (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title="Ritz-Carlton vs. Regent, Silversea, Explora & Seabourn"
        subtitle="Side-by-side competitor analysis for luxury cruise travelers."
        items={competitorShowdownItems}
      />

      {/* ─── SECTION 12: Cruise Critic Review Data (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={reviewStatsTable}
      />

      {/* ─── SECTION 13: The Biggest Mistake Travelers Make (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={evaluationCriteriaData}
      />

      {/* ─── MIDDLE CENTER CTA Component ─── */}
      <CenterCTA
        title="Is The Ritz-Carlton Yacht Collection Worth It For You?"
        description="Don't guess. Connect with our luxury travel advisors to compare sailings, suite categories, and build the complete trip around your yacht cruise."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={null}
      />

      {/* ─── SECTION 14: Angela Hughes Expert Perspective & Scorecard ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={angelaImage}
        quote="Don't book Ritz-Carlton because the name sounds luxurious. Book it because the experience matches how you actually like to travel. That is the difference between buying a luxury brand and choosing the right luxury vacation."
      />

      {/* ─── SECTION 15: Editorial Scorecard Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={editorialScorecardTable}
      />

      {/* ─── SECTION 16: Video Section Component ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Ritz-Carlton Yacht Collection Review Showcase
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
            See the Ritz-Carlton Yacht Experience
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto mb-8">
            Watch an in-depth walkthrough of Ritz-Carlton Yacht Collection suites, dining, service, and yacht amenities.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <VideoPlaceholder title="Ritz-Carlton Yacht Collection Honest Review & Showcase" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 17: Comprehensive 15 FAQs (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={pageData.faqs}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Find Out If Ritz-Carlton Yacht Is Worth It?"
        description="Plan your luxury voyage with an experienced travel advisor and discover exclusive Virtuoso amenities and custom itinerary planning."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionReviews;
