import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

/* ── Placeholder image imports (kept commented out as in sister pages) ───────────────────
   // import HeroImage from "@/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-serenity-vs-symphony.jpg";
   // import SerenityImg from "@/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-serenity.jpg";
   // import SymphonyImg from "@/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-symphony.jpg";
─────────────────────────────────────────────────────────────────── */

// Shared UI System Components (From RitzCarltonVsSeabourn Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import HeadToHeadVisualShowdown from '@/components/ui/HeadToHeadVisualShowdown';
import TabbedComparison from '@/components/ui/TabbedComparison';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalSerenityVsSymphony = () => {
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

  // Section 7: Itinerary & Value grid items for ThreeColumnGrid
  const itineraryItems = pageData.itineraryAndValueGrid.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    stats: Array.isArray(item.stats) ? item.stats : undefined,
    image: undefined,
    placeholderLabel: item.title
  }));

  // JSON-LD Schema (Strictly without trailing slashes)
  const crystalSerenitySymphonyImageUrl =
    pageData.seo.primaryImageUrl ||
    "https://www.tripsandships.com/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-serenity-vs-symphony.jpg";

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
        //   "url": crystalSerenitySymphonyImageUrl,
        //   "caption": "Crystal Serenity vs. Crystal Symphony"
        // },
        // "image": crystalSerenitySymphonyImageUrl,
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
        "description": "Angela Hughes is CEO of Trips & Ships Luxury Travel, with more than 40 years of travel industry experience and firsthand travel experience across more than 121 countries.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Crystal Cruises",
          "Crystal Serenity",
          "Crystal Symphony",
          "Crystal Cruises Suites",
          "Luxury Cruise Ship Comparison",
          "Luxury Cruise Dining",
          "Luxury Cruise Butler Service"
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
            "name": "Crystal Cruises",
            "item": "https://www.tripsandships.com/crystal-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Crystal Serenity vs. Crystal Symphony",
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
        <meta property="og:site_name" content="Trips & Ships Luxury Travel" />
        {/* <meta property="og:image" content={crystalSerenitySymphonyImageUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content={crystalSerenitySymphonyImageUrl} /> */}

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero Component) ─── */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
        secondaryCtaText={pageData.hero.secondaryCtaLabel || "Explore Complete Fleet Guide"}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl || "/crystal-cruises"}
        author={pageData.hero.author}
        authorRole={pageData.hero.authorRole}
        authorImage={AboutImage}
        date={pageData.hero.lastUpdated}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Crystal Cruises", href: "/crystal-cruises" },
          { label: "Serenity vs Symphony", href: "/crystal-cruises/serenity-vs-symphony" }
        ]}
      />

      {/* ─── SECTION 2: EDITORIAL NARRATIVE (PremiumIntro Component) ─── */}
      <PremiumIntro
        sections={introSections}
        author={{
          name: pageData.hero.author,
          role: pageData.hero.authorRole,
          image: AboutImage,
          bioUrl: "/about-angela-hughes"
        }}
        showBioCard={true}
      />

      {/* ─── SECTION 3: QUICK SPECS COMPARISON (ComparisonTable Component) ─── */}
      <ComparisonTable data={pageData.quickComparisonTable} />

      {/* ─── SECTION 4: SIZE & SCALE SHOWDOWN (HeadToHeadVisualShowdown Component) ─── */}
      <HeadToHeadVisualShowdown
        data={pageData.shipSizeShowdown}
        image1={
          // "src/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-serenity.jpg"
          undefined
        }
        image2={
          // "src/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-symphony.jpg"
          undefined
        }
      />

      {/* ─── SECTION 5: SUITES & ACCOMMODATION COMPARISON (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.suitesTabbedComparison.title}
        mainBrand={{ name: "Crystal Serenity Suites" }}
        competitors={pageData.suitesTabbedComparison.categories}
        hideVs={true}
        leftLabel="Crystal Serenity Accommodation"
        rightLabel="Crystal Symphony Accommodation"
      />

      {/* ─── SECTION 6: DINING COMPARISON (LuxuryZigZagShowcase Component - Image-Based) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.diningZigZag.title}
        subtitle={pageData.diningZigZag.subtitle}
        items={pageData.diningZigZag.items}
        images={[
          // "src/assets/CrystalCruises/CrystalSerenityVsSymphony/crystal-cruises-dining.jpg",
          undefined
        ]}
      />

      {/* ─── SECTION 7: PUBLIC SPACES, FACILITIES & SERVICE (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase data={pageData.onboardPillars} />

      {/* ─── SECTION 8: ITINERARIES & VALUE EVALUATION (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.itineraryAndValueGrid.title}
        subtitle={pageData.itineraryAndValueGrid.subtitle}
        items={itineraryItems}
      />

      {/* ─── SECTION 9: PROS & WHO SHOULD CHOOSE WHICH (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.shipProsComparison.title}
        subtitle={pageData.shipProsComparison.subtitle}
        includedTitle={pageData.shipProsComparison.includedTitle}
        extrasTitle={pageData.shipProsComparison.extrasTitle}
        included={pageData.shipProsComparison.included}
        extras={pageData.shipProsComparison.extras}
      />

      {/* ─── SECTION 10: MIDDLE CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Plan Your Crystal Cruise with Trips & Ships"
        description="Still deciding between Crystal Serenity and Crystal Symphony? Connect with Angela Hughes and our luxury cruise specialists to compare available voyages, accommodation categories, and exclusive VIP amenities."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 11: FINAL VERDICT PHILOSOPHY (DualPhilosophyShowcase Component) ─── */}
      <DualPhilosophyShowcase
        data={pageData.finalVerdictPhilosophy}
        imageSailing={
          // "src/assets/CrystalCruises/CrystalSerenityVsSymphony/serenity-verdict.jpg"
          undefined
        }
        imageAllSuite={
          // "src/assets/CrystalCruises/CrystalSerenityVsSymphony/symphony-verdict.jpg"
          undefined
        }
      />

      {/* ─── SECTION 12: EXPERT BIO & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.expertBio.name}
        title={pageData.expertBio.title}
        bio={pageData.expertBio.bio}
        image={AboutImage}
        quote={pageData.expertBio.quote}
        credentials={pageData.expertBio.credentials}
        ctaText={pageData.expertBio.ctaText}
        ctaLink={pageData.expertBio.ctaLink}
      />

      {/* ─── SECTION 13: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        title="Crystal Serenity vs. Crystal Symphony: Frequently Asked Questions"
        subtitle="Essential answers to help you choose the ideal ship for your luxury cruise vacation."
        faqs={pageData.faqs}
      />

      {/* ─── SECTION 14: FINAL BOTTOM CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Experience Crystal's Refined Luxury?"
        description="Speak with our luxury travel team to find the Crystal voyage, suite, and ship that best matches your personal travel style."
        buttonText="Speak with Our Luxury Team"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CrystalSerenityVsSymphony;

