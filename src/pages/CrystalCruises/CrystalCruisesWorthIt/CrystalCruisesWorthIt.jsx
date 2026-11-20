import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

/* ── Placeholder image imports (kept commented out as in sister pages) ───────────────────
   // import HeroImage from "@/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-worth.jpg";
   // import LifestyleImage from "@/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-lifestyle.jpg";
   // import DiningImage from "@/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-dining.jpg";
─────────────────────────────────────────────────────────────────── */

// Shared UI System Components (From RitzCarltonVsSeabourn Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const CrystalCruisesWorthIt = () => {
  // Section 1: Narrative Intro mapping for PremiumIntro
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

  // Section 8: First-timer guide items for ThreeColumnGrid
  const firstTimerItems = pageData.firstTimerGuide.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    stats: Array.isArray(item.stats) ? item.stats : undefined,
    image: undefined,
    placeholderLabel: item.title
  }));

  // JSON-LD Schema (Strictly without trailing slashes)
  const crystalWorthImageUrl =
    pageData.seo.primaryImageUrl ||
    "https://www.tripsandships.com/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-worth-the-money.jpg";

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
        //   "url": crystalWorthImageUrl,
        //   "caption": "Is Crystal Cruises Worth the Money?"
        // },
        // "image": crystalWorthImageUrl,
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
          "Crystal Cruises Value",
          "Luxury Cruise Budget Planning",
          "Crystal Cruises Inclusions",
          "Luxury Cruise Dining",
          "Luxury Cruise Butler Service",
          "Crystal Cruises vs Regent Seven Seas",
          "Crystal Cruises vs Seabourn"
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
            "name": "Is Crystal Cruises Worth the Money?",
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
        {/* <meta property="og:image" content={crystalWorthImageUrl} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content={crystalWorthImageUrl} /> */}

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
        primaryCtaText={pageData.hero.ctaText || "Plan Your Crystal Cruise"}
        primaryCtaLink={pageData.hero.ctaLink || "/contact"}
        secondaryCtaText={pageData.hero.secondaryCtaLabel || "What's Included & Extra"}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl || "/crystal-cruises/whats-included"}
        author={pageData.hero.author}
        authorRole={pageData.hero.authorRole}
        authorImage={AboutImage}
        date={pageData.hero.lastUpdated}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Crystal Cruises", href: "/crystal-cruises" },
          { label: "Is Crystal Worth It?", href: "/crystal-cruises/is-it-worth-it" }
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

      {/* ─── SECTION 3: OUR VERDICT (DualPhilosophyShowcase Component) ─── */}
      <DualPhilosophyShowcase
        data={pageData.verdictPhilosophy}
        imageSailing={
          // "src/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-value.jpg"
          undefined
        }
        imageAllSuite={
          // "src/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-expenses.jpg"
          undefined
        }
      />

      {/* ─── SECTION 4: FIVE PILLARS OF VALUE (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase data={pageData.pillarsOfWorth} />

      {/* ─── SECTION 5: INCLUSIONS BREAKDOWN TABLE (ComparisonTable Component) ─── */}
      <ComparisonTable data={pageData.inclusionsTable} />

      {/* ─── SECTION 6: WHAT CAN MAKE IT EXPENSIVE? (LuxuryZigZagShowcase Component - Image-Based) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.expensiveDrivers.title}
        subtitle={pageData.expensiveDrivers.subtitle}
        items={pageData.expensiveDrivers.items}
        images={[
          // "src/assets/CrystalCruises/CrystalCruisesWorthIt/crystal-cruises-excursions.jpg",
          undefined
        ]}
      />

      {/* ─── SECTION 7: WHO GETS THE BEST VALUE? (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.worthMatchmaker.title}
        subtitle={pageData.worthMatchmaker.subtitle}
        includedTitle={pageData.worthMatchmaker.includedTitle}
        extrasTitle={pageData.worthMatchmaker.extrasTitle}
        included={pageData.worthMatchmaker.included}
        extras={pageData.worthMatchmaker.extras}
      />

      {/* ─── SECTION 8: COMPETITOR VALUE COMPARISON (TabbedComparison Component) ─── */}
      <TabbedComparison
        title={pageData.competitorComparison.title}
        mainBrand={{ name: "Crystal Cruises Value" }}
        competitors={pageData.competitorComparison.categories}
        hideVs={true}
        leftLabel="Crystal Cruises Value Edge"
        rightLabel="Competitor Inclusions & Advantages"
      />

      {/* ─── SECTION 9: FIRST-TIME LUXURY CRUISER GUIDE (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.firstTimerGuide.title}
        subtitle={pageData.firstTimerGuide.subtitle}
        items={firstTimerItems}
      />

      {/* ─── SECTION 10: 5-STEP DECISION ROADMAP (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.decisionSteps.title}
        subtitle={pageData.decisionSteps.subtitle}
        steps={pageData.decisionSteps.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 11: MIDDLE CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Plan Your Crystal Cruise with Trips & Ships"
        description="Choosing a luxury cruise involves more than comparing advertised fares. Connect with Angela Hughes and our luxury cruise specialists to compare Crystal voyages, suite categories, and personalized vacation inclusions."
        buttonText="Plan Your Crystal Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 12: EXPERT BIO & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.expertBio.name}
        title={pageData.expertBio.title}
        bio={pageData.expertBio.bio}
        image={AboutImage}
        quote={pageData.expertBio.quote}
        credentials={pageData.expertBio.credentials}
        ctaText={pageData.expertBio.ctaText || "Plan Your Crystal Cruise"}
        ctaLink={pageData.expertBio.ctaLink || "/contact"}
      />

      {/* ─── SECTION 13: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        title="Crystal Cruises: Frequently Asked Questions"
        subtitle="Answers to the top traveler questions regarding Crystal's value proposition, inclusions, and dining before booking."
        faqs={pageData.faqs}
      />

      {/* ─── SECTION 14: FINAL BOTTOM CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title="Ready to Experience Crystal's Refined Luxury?"
        description="Speak with our luxury travel team to discuss your travel preferences, suite requirements, and begin planning your bespoke voyage."
        buttonText="Speak with Our Luxury Team"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CrystalCruisesWorthIt;

