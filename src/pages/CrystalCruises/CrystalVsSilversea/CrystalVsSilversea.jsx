import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

/* ── Placeholder image imports (kept commented out until official media assets are provided) ──
   // import CrystalShipImg from "@/assets/CrystalCruises/CrystalVsSilversea/crystal-fleet.jpg";
   // import SilverseaShipImg from "@/assets/CrystalCruises/CrystalVsSilversea/silversea-fleet.jpg";
───────────────────────────────────────────────────────────────────────────── */

// UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import TabbedComparison from '@/components/ui/TabbedComparison';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalVsSilversea = () => {
  const pageUrl = pageData.seo.canonicalUrl;

  // JSON-LD Structured Data Schema
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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/CrystalVsSilversea/hero.jpg",
        //   "caption": pageData.seo.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/CrystalVsSilversea/hero.jpg",
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
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Crystal Cruises",
          "Silversea",
          "Luxury Cruise Comparison",
          "All-Inclusive Cruising",
          "Expedition Cruising",
          "Luxury Cruise Suites",
          "Luxury Cruise Dining"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            "name": "Crystal Cruises",
            "item": "https://www.tripsandships.com/crystal-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Crystal Cruises vs. Silversea",
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
    <div className="crystal-vs-silversea-page bg-white min-h-screen text-navy-950 antialiased selection:bg-ts-gold/20 selection:text-navy-900">
      <Helmet>
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:image" content="https://www.tripsandships.com/assets/CrystalCruises/CrystalVsSilversea/hero.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content="https://www.tripsandships.com/assets/CrystalCruises/CrystalVsSilversea/hero.jpg" /> */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ══════════════ HERO SECTION ══════════════ */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        authorName="Angela Hughes"
        authorRole="CEO & Luxury Cruise Specialist"
        lastUpdated={pageData.hero.lastUpdated}
        ctaText={pageData.hero.ctaText}
        ctaLink={pageData.hero.ctaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ══════════════ EDITORIAL INTRO ══════════════ */}
      <PremiumIntro
        heading={pageData.quickAnswer[0].heading}
        paragraphs={pageData.quickAnswer[0].paragraphs}
        watermarkText="SILVERSEA"
      />

      {/* ══════════════ QUICK COMPARISON TABLE ══════════════ */}
      <div className="py-12 bg-white">
        <ComparisonTable data={pageData.quickComparison} />
      </div>

      {/* ══════════════ SECTION 1: FLEET & SHIP SIZE (LuxuryZigZagShowcase Component - Image Placeholder) ══════════════ */}
      <LuxuryZigZagShowcase
        title={pageData.fleetShowdown.title}
        subtitle={pageData.fleetShowdown.subtitle}
        items={pageData.fleetShowdown.items}
        images={[
          { placeholder: true },
          { placeholder: true }
        ]}
      />

      {/* ══════════════ SECTION 2: SUITES & BUTLER CARE ══════════════ */}
      <div className="bg-ice-50">
        <TabbedComparison
          title={pageData.suitesAndService.title}
          competitors={pageData.suitesAndService.tabs}
          leftLabel="Key Accommodations"
          rightLabel="Butler & Suite Inclusions"
        />
        <div className="text-center pb-12 -mt-4">
          <Link
            to="/crystal-cruises/suites"
            className="inline-flex items-center text-sm font-semibold text-navy-800 hover:text-navy-950 hover:underline transition-colors"
          >
            Explore our complete Crystal Suites & Butler Guide →
          </Link>
        </div>
      </div>

      {/* ══════════════ SECTION 3 & 5: DINING & INCLUSIONS ══════════════ */}
      <div className="bg-white">
        <DetailedInclusionsList
          title={pageData.diningAndInclusions.title}
          intro={pageData.diningAndInclusions.intro}
          items={pageData.diningAndInclusions.items}
        />
        <div className="text-center pb-12 -mt-4 space-x-6">
          <Link
            to="/crystal-cruises/dining"
            className="inline-flex items-center text-sm font-semibold text-navy-800 hover:text-navy-950 hover:underline transition-colors"
          >
            Explore our complete Crystal Dining Guide →
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            to="/crystal-cruises/whats-included"
            className="inline-flex items-center text-sm font-semibold text-navy-800 hover:text-navy-950 hover:underline transition-colors"
          >
            See Full Crystal Inclusions Breakdown →
          </Link>
        </div>
      </div>

      {/* ══════════════ SECTION 4, 6, 7, 8, 9: BENTO HIGHLIGHTS ══════════════ */}
      <div>
        <BentoGlassmorphismGrid
          title={pageData.bentoHighlights.title}
          subtitle={pageData.bentoHighlights.subtitle}
          bentoItems={pageData.bentoHighlights.cards}
        />
        <div className="bg-navy-950 text-center pb-12">
          <Link
            to="/crystal-cruises/cost"
            className="inline-flex items-center text-sm font-semibold text-ts-gold hover:underline transition-colors"
          >
            Calculate your voyage total with our Crystal Cost & Pricing Guide →
          </Link>
        </div>
      </div>

      {/* ══════════════ SECTION 10: TRAVELER PERSONAS ══════════════ */}
      <TravelerPersonaCards
        title={pageData.travelerPersonas.title}
        subtitle={pageData.travelerPersonas.subtitle}
        personas={pageData.travelerPersonas.personas}
      />

      {/* ══════════════ SECTION 11: PROS AND CONSIDERATIONS ══════════════ */}
      <div className="py-6 bg-slate-50">
        <ProsConsCards
          title="Crystal Cruises: Strengths & Considerations"
          prosTitle="Crystal Key Advantages"
          consTitle="Consider Before Booking"
          bestFor={pageData.prosAndCons.crystalPros}
          notBestFor={pageData.prosAndCons.crystalCons}
          type="compare"
          bgClass="bg-slate-50"
        />
        <ProsConsCards
          title="Silversea: Strengths & Considerations"
          prosTitle="Silversea Key Advantages"
          consTitle="Consider Before Booking"
          bestFor={pageData.prosAndCons.silverseaPros}
          notBestFor={pageData.prosAndCons.silverseaCons}
          type="compare"
          bgClass="bg-white"
        />
      </div>

      {/* ══════════════ SECTION 12: DECISION GUIDE (CHOOSE CRYSTAL IF / CHOOSE SILVERSEA IF) ══════════════ */}
      <div className="py-6 bg-slate-50">
        <ProsConsCards
          title={pageData.decisionGuide.title}
          prosTitle="Choose Crystal If:"
          consTitle="Choose Silversea If:"
          bestFor={pageData.decisionGuide.crystalPoints}
          notBestFor={pageData.decisionGuide.silverseaPoints}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ══════════════ ANGELA HUGHES ADVICE (SINGLE AUTHORITY BOX) ══════════════ */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AuthorityBox
            eyebrow={pageData.angelaAdvice.eyebrow}
            heading={pageData.angelaAdvice.heading}
            quote={pageData.angelaAdvice.quote}
            author={pageData.angelaAdvice.author}
            authorRole={pageData.angelaAdvice.authorRole}
          />
        </div>
      </div>

      {/* ══════════════ ANGELA HUGHES CREDENTIALS ══════════════ */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE EXPERT"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Ocean Cruise Authority"
        credentials={[
          "Over 4 Decades Designing Bespoke Luxury Travel Experiences",
          "Traveled Firsthand to 121+ Countries Across Seven Continents",
          "Certified Luxury Ocean & Expedition Cruise Specialist",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Travel Leaders Network Luxury Travel Influencer of the Year",
          "Named Most Influential Women in Travel 2026 by TravelPulse"
        ]}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ══════════════ FREQUENTLY ASKED QUESTIONS ══════════════ */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Crystal vs. Silversea",
          subtitle: "Clear, expert answers to the most common questions when choosing between Crystal and Silversea.",
          faqs: pageData.faqs
        }}
      />

      {/* ══════════════ FINAL CALL TO ACTION ══════════════ */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalVsSilversea;

