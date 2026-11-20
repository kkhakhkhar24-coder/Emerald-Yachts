import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/hero-balcony-vs-mini-suite.webp';
import IntroImage1 from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/intro-suite-living.webp';
import IntroImage2 from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/intro-stateroom-detail.webp';
import BalconyImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/balcony-stateroom.webp';
import MiniSuiteImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/mini-suite-living-area.webp';
import DimensionsBathImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/stateroom-dimensions-bath.webp';
import SanctuaryImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/sanctuary-collection-pool.webp';
import AlaskaImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/alaska-scenic-cruising.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/cta-luxury-stateroom.webp';

// Shared UI System Components (Strict 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesBalconyVsMiniSuite = () => {
  // Section 2: Narrative Intro mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.introSection.heading,
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3
      ]
    }
  ];

  // Section 3: Quick Answer Items for ThreeColumnGrid
  const quickAnswerItems = pageData.quickAnswer.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    stats: Array.isArray(item.stats) ? item.stats : undefined,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 4 & 5: Deep Dive Items for LuxuryZigZagShowcase
  const zigZagItems = [
    {
      title: pageData.balconyDeepDive.title,
      badge: "VERANDA VALUE & FRESH SEA AIR",
      subtitle: pageData.balconyDeepDive.subtitle,
      description: `${pageData.balconyDeepDive.sizeInfo} Standard Balcony staterooms feature two twin beds convertible to a queen-size Princess Luxury Bed, an ensuite bathroom with shower, and private furnished veranda. Categories include Standard Balcony, Deluxe Balcony with sofa bed, Premium Deluxe Balcony, Cove Balcony on Sphere-class ships, and Sanctuary Balcony.`,
      highlights: [
        { label: "Approx. Size", desc: "179–279 sq. ft. including veranda" },
        { label: "Key Advantage", desc: "Private outdoor space at an economical price point" },
        { label: "Best Suited For", desc: pageData.balconyDeepDive.bestFor }
      ],
      bullets: pageData.balconyDeepDive.standardFeatures,
      image: BalconyImage,
      alt: "Princess Cruises Balcony Stateroom with Veranda"
    },
    {
      title: pageData.miniSuiteDeepDive.title,
      badge: "EXPANDED LIVING & DEDICATED LOUNGE",
      subtitle: pageData.miniSuiteDeepDive.subtitle,
      description: `${pageData.miniSuiteDeepDive.sizeInfo} The defining advantage of a Mini-Suite is its architectural sitting area equipped with a full sofa bed, coffee table, second flat-panel television, and enhanced bathroom. It provides true daytime relaxation without having to lounge on the bed.`,
      highlights: [
        { label: "Approx. Size", desc: "304–329 sq. ft. (up to 389 sq. ft.)" },
        { label: "Key Advantage", desc: "Separate sitting area with sofa bed and larger bathroom" },
        { label: "Best Suited For", desc: pageData.miniSuiteDeepDive.bestFor }
      ],
      bullets: pageData.miniSuiteDeepDive.standardFeatures,
      image: MiniSuiteImage,
      alt: "Princess Cruises Mini-Suite with Separate Sitting Area"
    }
  ];

  // Section 9: Travel Styles Items for ThreeColumnGrid
  const travelStyleItems = pageData.travelStylesComparison.styles.map((style, idx) => ({
    title: style.title,
    description: style.description,
    category: style.category,
    stats: style.stats,
    image: idx === 1 ? SanctuaryImage : idx === 2 ? AlaskaImage : BalconyImage,
    placeholderLabel: style.title
  }));

  // JSON-LD Schema (Strictly without trailing slashes)
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
        "inLanguage": "en",
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/hero-balcony-vs-mini-suite.webp"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesBalconyVsMiniSuite/hero-balcony-vs-mini-suite.webp",
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
        "description": "Angela Hughes is CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel professional with more than 40 years in the travel industry.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Princess Balcony Staterooms",
          "Princess Mini-Suites",
          "Luxury Cruise Accommodation",
          "Reserve Collection",
          "Sanctuary Collection",
          "Luxury Travel"
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
            "name": "Princess Cruises",
            "item": "https://www.tripsandships.com/princess-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Balcony vs. Mini-Suite",
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO ─── */}
      <ComparisonHero
        byline={true}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        heroImage={HeroImage}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="STATEROOMS"
        image1={IntroImage1}
        image2={IntroImage2}
      />

      {/* ─── SECTION 3: QUICK ANSWER GUIDELINES ─── */}
      <ThreeColumnGrid
        title={pageData.quickAnswer.title}
        subtitle={pageData.quickAnswer.subtitle}
        items={quickAnswerItems}
      />

      {/* ─── SECTION 3B: MAIN DIFFERENCES TABLE ─── */}
      <ComparisonTable data={pageData.mainDifferencesTable} />

      {/* ─── SECTION 4 & 5: LUXURY ZIG-ZAG SHOWCASE (BALCONY VS. MINI-SUITE DEEP DIVE) ─── */}
      <LuxuryZigZagShowcase
        title="Stateroom Category Deep Dives"
        subtitle="Comparing floor plans, veranda configurations, in-room amenities, and living comforts."
        items={zigZagItems}
        images={[BalconyImage, MiniSuiteImage]}
      />

      {/* ─── SECTION 6: DIMENSIONS & BATHROOM SHOWCASE ─── */}
      <EditorialFeatureShowcase
        title={pageData.sizeAndBathroomShowcase.title}
        subtitle={pageData.sizeAndBathroomShowcase.subtitle}
        image={DimensionsBathImage}
        features={pageData.sizeAndBathroomShowcase.features}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 7: BENEFITS & COLLECTIONS EXPLANATION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.benefitsAndCollections.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-xl text-navy-800 font-medium mb-3">
              {pageData.benefitsAndCollections.subtitle}
            </p>
            <p className="font-sans text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {pageData.benefitsAndCollections.description}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Reserve Collection Card */}
            <FadeIn direction="right">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-ts-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Grand & Royal Class Ships
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 mt-3 mb-2">
                    {pageData.benefitsAndCollections.reserveCollection.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 italic">
                    {pageData.benefitsAndCollections.reserveCollection.ships}
                  </p>
                </div>
                <ul className="space-y-3 mt-4 text-sm font-sans text-slate-700 flex-grow">
                  {pageData.benefitsAndCollections.reserveCollection.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-ts-gold font-bold">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Sanctuary Collection Card */}
            <FadeIn direction="left">
              <div className="bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-navy-900 px-3 py-1 rounded-full border border-amber-300/30">
                    Sun & Star Princess
                  </span>
                  <h3 className="font-display text-2xl text-white mt-3 mb-2">
                    {pageData.benefitsAndCollections.sanctuaryCollection.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 italic">
                    {pageData.benefitsAndCollections.sanctuaryCollection.ships}
                  </p>
                </div>
                <ul className="space-y-3 mt-4 text-sm font-sans text-slate-200 flex-grow">
                  {pageData.benefitsAndCollections.sanctuaryCollection.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7B: RESERVE VS. SANCTUARY COMPARISON TABLE ─── */}
      <ComparisonTable data={pageData.collectionComparisonTable} />

      {/* ─── SECTION 8: PRICING ANALYSIS & SEVEN-NIGHT COST TABLE ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.pricingAnalysis.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.pricingAnalysis.subtitle}
            </p>
            <p className="font-sans text-sm text-slate-500 max-w-3xl mx-auto mt-4 leading-relaxed">
              {pageData.pricingAnalysis.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <ComparisonTable data={pageData.pricingAnalysis.exampleTable} />

      {/* ─── SECTION 8B: WHEN UPGRADE IS WORTH IT VS. BALCONY SMARTER CHOICE ─── */}
      <ProsConsCards
        title="Balcony vs. Mini-Suite: When Is the Upgrade Worth It?"
        prosTitle="When a Mini-Suite Upgrade Is Worth It"
        consTitle="When a Balcony Is the Smarter Choice"
        bestFor={pageData.pricingAnalysis.worthItScenarios}
        notBestFor={pageData.pricingAnalysis.balconySmarterScenarios}
        bottomNote={pageData.pricingAnalysis.exampleTakeaway}
        type="compare"
        bgClass="bg-white"
      />

      {/* ─── SECTION 9: TRAVEL STYLES COMPARISON (COUPLES, FAMILIES, ALASKA) ─── */}
      <ThreeColumnGrid
        title={pageData.travelStylesComparison.title}
        subtitle={pageData.travelStylesComparison.subtitle}
        items={travelStyleItems}
      />

      {/* ─── SECTION 10: MID-PAGE CTA ─── */}
      <CenterCTA
        title="Need Advice on the Best Princess Cabin Location?"
        description="Angela Hughes can review live deck plans, sightlines, and exclusive promotion perks to secure your ideal stateroom at the lowest verified rate."
        buttonText="Plan Your Princess Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 11: 8-POINT BOOKING CHECKLIST ─── */}
      <StepByStepGuide
        title={pageData.bookingChecklist.title}
        subtitle={pageData.bookingChecklist.subtitle}
        steps={pageData.bookingChecklist.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 12: RECOMMENDATION SUMMARY ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-ts-gold bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
                FINAL VERDICT
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mt-4">
                {pageData.recommendation.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold mx-auto mt-4"></div>
            </div>
            <div className="space-y-4 font-sans text-base text-slate-700 leading-relaxed">
              <p>{pageData.recommendation.p1}</p>
              <p>{pageData.recommendation.p2}</p>
              <p>{pageData.recommendation.p3}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 13: EXPERT CREDENTIALS ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 14: FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess Balcony vs. Mini-Suite",
          subtitle: "Clear answers to essential questions regarding cabin sizes, bathtubs, sofa beds, and Reserve vs. Sanctuary Collection perks.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 15: FINAL CENTER CTA ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesBalconyVsMiniSuite;

