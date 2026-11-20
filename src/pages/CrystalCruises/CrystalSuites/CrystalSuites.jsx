import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalSuites = () => {
  const pageUrl = pageData.seo.canonicalUrl;
  const organizationId = "https://www.tripsandships.com/#organization";
  const travelAgencyId = "https://www.tripsandships.com/#travelagency";
  const authorId = "https://www.tripsandships.com/about-angela-hughes/#person";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": pageData.seo.metaTitle,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/crystal-suites.webp",
        //   "caption": pageData.hero.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/crystal-suites.webp",
        "author": {
          "@id": authorId
        },
        "publisher": {
          "@id": organizationId
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": authorId
        }
      },
      {
        "@type": "TravelAgency",
        "@id": travelAgencyId,
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
        "parentOrganization": {
          "@id": organizationId
        }
      },
      {
        "@type": "Person",
        "@id": authorId,
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
          "@id": organizationId
        },
        "knowsAbout": [
          "Crystal Cruises",
          "Crystal Cruises Suites",
          "Penthouse Suites at Sea",
          "Butler Service",
          "Luxury Cruise Staterooms",
          "Ocean Liner Accommodations"
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
            "name": "Crystal Cruises Suites",
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
    <div className="w-full bg-white font-sans text-slate-800 antialiased selection:bg-ts-gold/20 selection:text-navy-950">
      {/* ─── SEO HEAD TAGS ─── */}
      <Helmet>
        <title>{pageData.seo.metaTitle}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:site_name" content="Trips & Ships Luxury Travel" />
        {/* <meta property="og:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-suites.webp" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-suites.webp" /> */}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero Component) ─── */}
      <ComparisonHero
        byline={true}
        updated={pageData.hero.lastUpdated}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={pageData.quickAnswer}
        watermarkText="SUITES"
      />

      {/* ─── SECTION 3: SUITE CATEGORIES AT A GLANCE (ComparisonTable Component) ─── */}
      <div className="relative">
        <ComparisonTable data={pageData.glanceTable} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16 text-center">
        </div>
      </div>

      {/* ─── SECTION 4: DETAILED SUITE BREAKDOWN (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.suiteDetails.title}
        intro={pageData.suiteDetails.intro}
        items={pageData.suiteDetails.items}
      />

      {/* ─── SECTION 5: SERENITY VS SYMPHONY SUITE SIZES (ComparisonTable Component) ─── */}
      <div className="relative">
        <ComparisonTable data={pageData.shipComparison} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16 text-center">
        </div>
      </div>

      {/* ─── SECTION 6: ANGELA HUGHES EXPERT SUITE ADVICE (AuthorityBox Component) ─── */}
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

      {/* ─── SECTION 7: MATCHMAKER: WHICH SUITE IS BEST FOR YOU? (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title={pageData.bestSuiteForYou.title}
        subtitle={pageData.bestSuiteForYou.subtitle}
        personas={pageData.bestSuiteForYou.personas}
      />

      {/* ─── SECTION 8: WHAT IS INCLUDED IN A CRYSTAL SUITE? (BentoGlassmorphismGrid Component) ─── */}
      <div className="relative">
        <BentoGlassmorphismGrid
          title={pageData.suiteInclusions.title}
          subtitle={pageData.suiteInclusions.subtitle}
          bentoItems={pageData.suiteInclusions.cards}
        />
        <div className="bg-navy-950 py-8 px-6 text-center">
          <p className="text-slate-300 font-sans text-sm md:text-base mb-4">
            Looking for a complete breakdown of complimentary amenities versus optional expenses?
          </p>
          <Link
            to="/crystal-cruises/whats-included"
            className="inline-flex items-center gap-2 font-sans font-bold text-ts-gold hover:text-white uppercase tracking-wider text-xs border border-ts-gold/40 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            Read Our Inclusions & Extras Guide →
          </Link>
        </div>
      </div>

      {/* ─── SECTION 9: HOW TO CHOOSE THE RIGHT SUITE LOCATION (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.locationGuide.title}
        subtitle={pageData.locationGuide.subtitle}
        steps={pageData.locationGuide.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 10: UPGRADE WORTH IT & COST EVALUATION (ProsConsCards & AuthorityBox) ─── */}
      <div className="py-16 bg-white border-t border-slate-200/60">
        <ProsConsCards
          title={pageData.upgradeWorthIt.title}
          prosTitle="Upgrade Is Strongly Worth It If:"
          consTitle="Stick to a Guest Room / Lower Tier If:"
          bestFor={pageData.upgradeWorthIt.bestFor}
          notBestFor={pageData.upgradeWorthIt.notBestFor}
          type="compare"
          bgClass="bg-white"
        />

        <div className="max-w-4xl mx-auto px-6 mt-8">
          <div className="text-center mb-6">
            <Link
              to="/crystal-cruises/is-it-worth-it"
              className="text-xs uppercase tracking-[0.2em] font-bold text-navy-800 hover:text-ts-gold underline underline-offset-4 transition-colors"
            >
              See Our Full Value Assessment: Is Crystal Cruises Worth the Money? →
            </Link>
          </div>

          <AuthorityBox
            eyebrow={pageData.costAdvice.eyebrow}
            heading={pageData.costAdvice.heading}
            quote={pageData.costAdvice.quote}
            author={pageData.costAdvice.author}
            authorRole={pageData.costAdvice.authorRole}
          />

          <div className="text-center mt-6">
            <Link
              to="/crystal-cruises/cost"
              className="text-xs uppercase tracking-[0.2em] font-bold text-navy-800 hover:text-ts-gold underline underline-offset-4 transition-colors"
            >
              Explore Cruise Fares & Budgeting: How Much Does a Crystal Cruise Cost? →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── SECTION 11: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY SUITE SPECIALIST"
        experienceBadge="40+ YEARS IN LUXURY TRAVEL"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Ocean Cruise Authority"
        credentials={[
          "Over 4 Decades Designing Bespoke Luxury Travel Experiences",
          "Traveled Firsthand to 121+ Countries Across Seven Continents",
          "Certified Luxury Ocean & Small Ship Cruise Specialist",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Travel Leaders Network Luxury Travel Influencer of the Year",
          "Named Most Influential Women in Travel 2026 by TravelPulse"
        ]}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 12: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Crystal Cruises Suites",
          subtitle: "Clear, expert answers to help you choose the best cabin category and understand suite inclusions.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 13: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalSuites;

