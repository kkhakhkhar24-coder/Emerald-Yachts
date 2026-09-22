import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar/Navbar";
import pageData from './data.json';

// Angela image
import angelaImage from '@/assets/Media (2).jpg';

// Ritz-Carlton Yacht Collection Review Assets
import heroBgImg from '@/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg';
import introLifestyleImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-collection-review-verdict.jpg';
import introDiningImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-culinary-dining-review.jpg';

// What Guests Like Highlights (6 Cards)
import likeSmallShipImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-small-ship-intimacy-review.jpg';
import likeSuitesImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-luxury-suites-review.jpeg';
import likeServiceImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-personalized-crew-service-review.jpeg';
import likeDiningImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-dining-experience-review.jpeg';
import likeBeveragesImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-included-beverage-program-review.jpg';
import likeHotelAtmosphereImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-yacht-hotel-at-sea-atmosphere-review.jpeg';

// Yacht Comparisons (Evrima, Ilma, Luminara)
import evrimaReviewImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-evrima-yacht-review.jpeg';
import ilmaReviewImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-ilma-yacht-review.jpeg';
import luminaraReviewImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-luminara-yacht-review.jpeg';

// Competitor Showdowns (Regent, Silversea, Explora, Seabourn)
import showdownRegentImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-vs-regent-seven-seas-showdown.webp';
import showdownSilverseaImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-vs-silversea-showdown.webp';
import showdownExploraImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-vs-explora-journeys-showdown.webp';
import showdownSeabournImg from '@/assets/RitzCarltonYachtCollectionReviews/ritz-carlton-vs-seabourn-showdown.jpg';

// Middle CTA Image
import middleCtaImg from '@/assets/RitzCarltonYachtCollectionReviews/is-ritz-carlton-yacht-worth-it-advisor-consultation.jpeg';

// Final CTA Image
import finalCtaImg from '@/assets/RitzCarltonYachtCollectionReviews/plan-ritz-carlton-yacht-luxury-vacation-review.jpg';

// Interactive Hub Images
import hubPricingImg from '@/assets/RitzCarltonYachtCollectionReviews/hub-pricing-inclusions-guide.jpg';
import hubComparisonImg from '@/assets/RitzCarltonYachtCollectionReviews/hub-yacht-fleet-comparisons.jpg';
import hubLifestyleImg from '@/assets/RitzCarltonYachtCollectionReviews/hub-onboard-lifestyle-suites.jpg';
import hubExcursionImg from '@/assets/RitzCarltonYachtCollectionReviews/hub-destinations-shore-excursions.jpeg';
import hubAdvisorImg from '@/assets/RitzCarltonYachtCollectionReviews/hub-luxury-travel-advisor.jpg';

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
      image: likeSmallShipImg,
      placeholderLabel: "Ritz-Carlton Yacht Small-Ship Intimacy & Quiet Atmosphere"
    },
    {
      title: "2. The Suites Are a Major Strength",
      description: "Every room is a suite with ocean views, private terrace, high-end furnishings, and 24-hour in-suite dining. You don't pay extra just for outdoor space.",
      image: likeSuitesImg,
      placeholderLabel: "Ritz-Carlton Yacht Luxury Suites with Private Ocean Terraces"
    },
    {
      title: "3. Service Can Be Exceptional",
      description: "Crew members remember preferences, recognize returning guests, and provide personalized attention. Reviewers frequently praise dedicated staff.",
      image: likeServiceImg,
      placeholderLabel: "Personalized Ritz-Carlton Yacht Crew Service and Hospitality"
    },
    {
      title: "4. Dining Is Generally a Strength",
      description: "Multiple restaurant environments rather than a single main dining room. Guests enjoy fine dining, casual outdoor grills, and in-suite service.",
      image: likeDiningImg,
      placeholderLabel: "Ritz-Carlton Yacht Multi-Venue Dining & Gourmet Cuisine"
    },
    {
      title: "5. Premium Beverages Add Real Value",
      description: "Selected wines, spirits, cocktails, beers, coffees, and teas are included throughout the yacht, eliminating separate beverage package costs.",
      image: likeBeveragesImg,
      placeholderLabel: "Included Premium Beverage Program & Open Bar on Ritz-Carlton Yachts"
    },
    {
      title: "6. Luxury Hotel at Sea Atmosphere",
      description: "Intentionally avoids floating-resort elements like casinos or giant production shows in favor of privacy, relaxation, design, and yachting ports.",
      image: likeHotelAtmosphereImg,
      placeholderLabel: "Luxury Boutique Hotel Atmosphere at Sea on Ritz-Carlton Yacht"
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
      image: evrimaReviewImg,
      placeholderLabel: "Ritz-Carlton Evrima Yacht Review - Intimate 298-Guest Experience"
    },
    {
      title: "Ilma (448 Guests)",
      description: "Best for: Travelers wanting the newest-generation yacht experience. Recognized with a Forbes Five-Star rating in 2026, offering expanded suites and dining venues.",
      image: ilmaReviewImg,
      placeholderLabel: "Ritz-Carlton Ilma Yacht Review - Forbes Five-Star Luxury Rating"
    },
    {
      title: "Luminara (452 Guests)",
      description: "Best for: Travelers whose itinerary matters as much as the yacht. Features expanded Asia sailings, Grand Suites, and state-of-the-art residential styling.",
      image: luminaraReviewImg,
      placeholderLabel: "Ritz-Carlton Luminara Yacht Review - Expanded Asia Sailings & Grand Suites"
    }
  ];

  // 9. Data mapping for Competitor Showdowns (Section 10: ThreeColumnGrid Component)
  const competitorShowdownItems = [
    {
      title: "Ritz-Carlton vs. Regent Seven Seas",
      description: "Ritz-Carlton wins for yacht atmosphere, contemporary design, and private terraces. Regent wins for comprehensive inclusions (included shore excursions and door-to-door air).",
      image: showdownRegentImg,
      placeholderLabel: "Ritz-Carlton vs Regent Seven Seas Luxury Cruise Comparison"
    },
    {
      title: "Ritz-Carlton vs. Silversea",
      description: "Ritz-Carlton offers a modern hotel-at-sea vibe with a younger positioning. Silversea excels in expedition depth, traditional ultra-luxury cruising, and polar destinations.",
      image: showdownSilverseaImg,
      placeholderLabel: "Ritz-Carlton vs Silversea Luxury Cruise Line Showdown"
    },
    {
      title: "Ritz-Carlton vs. Explora Journeys",
      description: "Ritz-Carlton feels like a private luxury yacht. Explora Journeys feels like a contemporary ocean residence. Choose Ritz-Carlton for signature hotel brand hospitality.",
      image: showdownExploraImg,
      placeholderLabel: "Ritz-Carlton vs Explora Journeys Ocean Residence Comparison"
    },
    {
      title: "Ritz-Carlton vs. Seabourn",
      description: "Ritz-Carlton is stronger for modern private terraces and hotel positioning. Seabourn is stronger for long-established ultra-luxury cruise expertise and traditional clientele.",
      image: showdownSeabournImg,
      placeholderLabel: "Ritz-Carlton vs Seabourn Ultra-Luxury Cruise Showdown"
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
      image: hubPricingImg,
      placeholderLabel: "Ritz-Carlton Yacht Cost & Inclusions Comprehensive Guides",
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
      image: hubComparisonImg,
      placeholderLabel: "Ritz-Carlton Fleet Comparisons - Evrima vs Ilma vs Luminara",
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
      image: hubLifestyleImg,
      placeholderLabel: "Ritz-Carlton Yacht Onboard Lifestyle, Dress Code & Luxury Suites",
      actionLabel: "Explore Onboard Guides",
      links: [
        { label: "What Is the Dress Code on Ritz-Carlton Yachts?", url: "/ritz-carlton-yacht-collection-dress-code" },
        { label: "Are Ritz-Carlton Yacht Cruises Good for Families and Children?", url: "/ritz-carlton-yacht-collection-families-children" },
        { label: "How Do Marriott Bonvoy Points Work on Ritz-Carlton Yacht Cruises?", url: "/ritz-carlton-yacht-collection-marriott-bonvoy-points" },
        { label: "What Are the Best Suites on Ritz-Carlton Yachts?", url: "/ritz-carlton-yacht-collection-suites" }
      ],
      mainUrl: "/ritz-carlton-yacht-collection-suites"
    },
    {
      title: "Excursions & Destinations",
      category: "Regions & Non-Cruisers",
      description: "Exploring shore excursions, Caribbean itineraries, Miami sailings, and non-cruiser guides.",
      image: hubExcursionImg,
      placeholderLabel: "Ritz-Carlton Yacht Destinations & Shore Excursions",
      actionLabel: "Explore Destinations",
      links: [
        { label: "Are Ritz-Carlton Yacht Shore Excursions Included?", url: "/ritz-carlton-yacht-shore-excursions-included" },
        { label: "Is The Ritz-Carlton Yacht Collection Good for People Who Do Not Like Cruises?", url: "/ritz-carlton-yacht-collection-for-people-who-dont-like-cruises" },
        { label: "Ritz-Carlton Yacht Cruises from Miami: What You Need to Know", url: "/ritz-carlton-yacht-cruises-from-miami" },
        { label: "Ritz-Carlton Yacht Caribbean Cruises: Best Itineraries and When to Go", url: "/ritz-carlton-yacht-caribbean-cruises" }
      ],
      mainUrl: "/ritz-carlton-yacht-caribbean-cruises"
    },
    {
      title: "Commercial & Advisor Services",
      category: "Advisor Advisory",
      description: "Why booking through a specialized travel advisor in Florida or Orlando unlocks VIP perks.",
      image: hubAdvisorImg,
      placeholderLabel: "Ritz-Carlton Yacht Collection Travel Advisor Services",
      actionLabel: "Explore Advisory",
      links: [
        { label: "Why Book a Ritz-Carlton Yacht Cruise Through a Travel Advisor?", url: "/ritz-carlton-yacht-cruises/travel-advisor" },
        { label: "Ritz-Carlton Yacht Collection Travel Advisor in Florida", url: "/ritz-carlton-yacht-collection-travel-advisor-florida" },
        { label: "Ritz-Carlton Yacht Collection Travel Advisor in Orlando", url: "/ritz-carlton-yacht-collection-travel-advisor-orlando" },
        { label: "How to Choose the Right Ritz-Carlton Yacht, Suite and Itinerary", url: "/how-to-choose-right-ritz-carlton-yacht-suite-itinerary" }
      ],
      mainUrl: "/ritz-carlton-yacht-cruises/travel-advisor"
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews/#webpage",
        "url": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews",
        "name": "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review",
        "headline": "Is The Ritz-Carlton Yacht Collection Worth It?",
        "description": "An honest review of the Ritz-Carlton Yacht Collection covering suites, service, dining, value, guest reviews, drawbacks, inclusions and whether the experience is worth the price.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg",
          "caption": "Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review"
        },
        "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg",
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
        "@type": "Review",
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews/#review",
        "name": "Trips & Ships Editorial Review of Ritz-Carlton Yacht Collection",
        "reviewBody": "Trips & Ships evaluates Ritz-Carlton Yacht Collection based on its yacht atmosphere, suites, service, dining, inclusions, entertainment, destinations and overall value.",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "itemReviewed": {
          "@type": "Thing",
          "name": "Ritz-Carlton Yacht Collection",
          "image": "https://www.tripsandships.com/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.3",
          "bestRating": "5.0"
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
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader with over 40 years of experience across 121 countries.",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews/#breadcrumb",
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
        "@id": "https://www.tripsandships.com/ritz-carlton-yacht-collection-reviews/#faq",
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
        <meta property="og:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg" />
        <meta property="og:image:alt" content="Is The Ritz-Carlton Yacht Collection Worth It? An Honest Review" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/RitzCarltonYachtCollectionReviews/is-the-ritz-carlton-yacht-collection-worth-it-review.jpg" />
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

      {/* ─── SECTION 2: PremiumIntro Component (Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={introLifestyleImg}
        image2={introDiningImg}
        alt1="Is The Ritz-Carlton Yacht Collection Worth It? Comprehensive Review & Luxury Lifestyle"
        alt2="Ritz-Carlton Yacht Collection Culinary Dining Experience"
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
        image={middleCtaImg}
        imagePosition="object-[center_60%]"
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
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mrdHjSeXwfc"
              title="Is Ritz-Carlton Yacht Collection Worth It? Honest Review & Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── SECTION 17: Curated Topic Clusters (InteractivePillarHubGrid Component) ─── */}
      <InteractivePillarHubGrid
        title="Explore More Ritz-Carlton Yacht Guides & Comparisons"
        subtitle="Comprehensive resources covering cost, fleet comparisons, suites, and destinations."
        items={resourceHubItems}
      />

      {/* ─── SECTION 18: Comprehensive 15 FAQs (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{ title: "Frequently Asked Questions", faqs: pageData.faqs }}
      />

      {/* ─── FINAL CENTER CTA Component ─── */}
      <CenterCTA
        title="Ready to Find Out If Ritz-Carlton Yacht Is Worth It?"
        description="Plan your luxury voyage with an experienced travel advisor and discover exclusive Virtuoso amenities and custom itinerary planning."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
        image={finalCtaImg}
        imagePosition="object-[center_55%]"
      />
    </div>
  );
};

export default RitzCarltonYachtCollectionReviews;
