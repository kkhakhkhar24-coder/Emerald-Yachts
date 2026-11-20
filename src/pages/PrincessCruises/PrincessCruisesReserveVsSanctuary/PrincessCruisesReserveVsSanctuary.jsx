import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/hero-sanctuary-pool.webp';
import IntroImage1 from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/intro-reserve-suite.webp';
import IntroImage2 from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/intro-sanctuary-bar.webp';
import ReserveSuiteImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/reserve-collection-suite.webp';
import SanctuaryDiningImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-collection-dining.webp';
import DiningAmbianceImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-restaurant-ambiance.webp';
import FleetShipImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/fleet-modernization-ship.webp';
import SanctuaryRetreatImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-club-retreat.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/cta-luxury-reserve-sanctuary.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesReserveVsSanctuary = () => {
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

  // Section 4 & 5: Deep Dive Items for LuxuryZigZagShowcase
  const zigZagItems = [
    {
      title: pageData.reserveDeepDive.title,
      badge: "EXPEDITED DINING & PREMIUM PLACEMENT",
      subtitle: pageData.reserveDeepDive.subtitle,
      description: `${pageData.reserveDeepDive.description} ${pageData.reserveDeepDive.summary}`,
      highlights: [
        { label: "Core Concept", desc: "Upgraded stateroom & expedited walk-in dining in main venue" },
        { label: "Eligible Rooms", desc: "Qualifying Mini-Suites and Suites on participating ships" },
        { label: "Key Distinction", desc: "No top-deck private pool club; Princess Premier not automatically bundled" }
      ],
      bullets: pageData.reserveDeepDive.benefits.map((b) => `${b.title}: ${b.description}`),
      image: ReserveSuiteImage,
      alt: "Princess Cruises Reserve Collection Suite"
    },
    {
      title: pageData.sanctuaryDeepDive.title,
      badge: "EXCLUSIVE RETREAT & ALL-INCLUSIVE BUNDLE",
      subtitle: pageData.sanctuaryDeepDive.subtitle,
      description: `${pageData.sanctuaryDeepDive.description} ${pageData.sanctuaryDeepDive.adultsOnlyNote}`,
      highlights: [
        { label: "Core Concept", desc: "Private adults-only Sanctuary Club retreat and dedicated restaurant" },
        { label: "Eligible Rooms", desc: "All suites, designated Mini-Suites, Balconies, and Oceanviews" },
        { label: "Key Distinction", desc: "Princess Premier package included with eligible bookings" }
      ],
      bullets: pageData.sanctuaryDeepDive.benefits.map((b) => `${b.title}: ${b.description}`),
      image: SanctuaryDiningImage,
      alt: "The Sanctuary Collection Restaurant and Private Retreat"
    }
  ];

  // Section 6: Detailed Inclusions List for Princess Premier package
  const premierItems = pageData.premierDifference.premierInclusions.map((item) => ({
    title: item.title,
    paragraphs: [item.description],
    highlight: {
      title: "Sanctuary Included Privilege",
      text: "Bundled with eligible Sanctuary Collection bookings."
    }
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
        "inLanguage": "en-US",
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/hero-sanctuary-pool.webp"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/hero-sanctuary-pool.webp",
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
        "description": "Angela Hughes is a luxury travel expert with more than 40 years of travel industry experience, having visited over 121 countries. She is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Cruises",
          "Princess Cruises",
          "Luxury Cruise Staterooms",
          "Luxury Cruise Packages",
          "Premium Cruise Experiences",
          "Luxury Travel Planning"
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
            "name": "Reserve Collection vs. The Sanctuary Collection",
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
        updated="2026-11-06"
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
        watermarkText="COLLECTION"
        image1={IntroImage1}
        image2={IntroImage2}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON TABLE ─── */}
      <ComparisonTable data={pageData.atAGlanceTable} />

      {/* ─── SECTION 4 & 5: LUXURY ZIG-ZAG SHOWCASE (RESERVE VS. SANCTUARY DEEP DIVES) ─── */}
      <LuxuryZigZagShowcase
        title="Collection Deep Dives"
        subtitle="Comparing stateroom comforts, dining privileges, top-deck retreats, and personalized service."
        items={zigZagItems}
        images={[ReserveSuiteImage, SanctuaryDiningImage]}
      />

      {/* ─── SECTION 6: DINING & PRIVATE SPACES SHOWCASE ─── */}
      <EditorialFeatureShowcase
        title={pageData.diningAndSpacesShowcase.title}
        subtitle={pageData.diningAndSpacesShowcase.subtitle}
        image={DiningAmbianceImage}
        features={pageData.diningAndSpacesShowcase.features}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 7: PRINCESS PREMIER INCLUSIONS LIST ─── */}
      <DetailedInclusionsList
        title={pageData.premierDifference.title}
        intro={[
          pageData.premierDifference.description,
          pageData.premierDifference.financialTakeaway
        ]}
        items={premierItems}
      />

      {/* ─── SECTION 8: FLEET ROLLOUT SCHEDULE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.fleetRollout.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.fleetRollout.subtitle}
            </p>
            <p className="font-sans text-sm text-slate-500 max-w-3xl mx-auto mt-4 leading-relaxed">
              {pageData.fleetRollout.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <ComparisonTable data={pageData.fleetRollout.table} />

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-6">
            <img
              src={FleetShipImage}
              alt="Princess Cruises Ship Modernization"
              className="w-full md:w-48 h-32 object-cover rounded-xl shadow-sm"
            />
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              {pageData.fleetRollout.scheduleNote}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 9: VALUE COMPARISON (SANCTUARY VS. RESERVE WORTH IT) ─── */}
      <ProsConsCards
        title={pageData.valueComparison.title}
        prosTitle="When The Sanctuary Collection Is Worth It"
        consTitle="When Reserve Collection Is the Smarter Choice"
        bestFor={pageData.valueComparison.sanctuaryWorthIt}
        notBestFor={pageData.valueComparison.reserveWorthIt}
        bottomNote="Calculate the net upgrade cost by deducting the $105–$110 daily value of Princess Premier from the Sanctuary Collection fare difference."
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 10: MID-PAGE CTA ─── */}
      <CenterCTA
        title="Need Help Choosing Between Reserve and Sanctuary?"
        description="Connect with Angela Hughes to compare live availability, preview dates, and package savings on your chosen Princess sailing."
        buttonText="Plan Your Princess Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 11: RECOMMENDATION SUMMARY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-ts-gold bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
                EXPERT GUIDANCE
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

      {/* ─── SECTION 12: EXPERT CREDENTIALS ─── */}
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

      {/* ─── SECTION 13: FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Reserve vs. The Sanctuary Collection",
          subtitle: "Clear answers to essential questions regarding dining venues, private club access, ship rollout dates, and bundled Premier benefits.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 14: FINAL CENTER CTA ─── */}
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

export default PrincessCruisesReserveVsSanctuary;

