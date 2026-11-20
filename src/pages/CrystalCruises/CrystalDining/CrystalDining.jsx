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
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalDining = () => {
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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/crystal-dining.webp",
        //   "caption": pageData.hero.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/crystal-dining.webp",
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
          "Crystal Cruises Dining",
          "Umi Uma by Nobu Matsuhisa",
          "Osteria d'Ovidio",
          "Beefbar",
          "Luxury Cruise Cuisine",
          "Cruise Wine Pairings"
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
            "name": "Crystal Cruises Dining",
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
        {/* <meta property="og:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-dining.webp" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-dining.webp" /> */}

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
        watermarkText="DINING"
      />

      {/* ─── SECTION 3: RESTAURANTS AT A GLANCE (ComparisonTable Component) ─── */}
      <div className="relative">
        <ComparisonTable data={pageData.glanceTable} />
      </div>

      {/* ─── SECTION 4: DETAILED RESTAURANT COLLECTION & MENUS (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.venueDetails.title}
        intro={pageData.venueDetails.intro}
        items={pageData.venueDetails.items}
      />

      {/* ─── SECTION 5: FARE INCLUSIONS VS EXTRA CHARGES (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.costAnalysis.title}
        subtitle={pageData.costAnalysis.subtitle}
        includedTitle={pageData.costAnalysis.includedTitle}
        extrasTitle={pageData.costAnalysis.extrasTitle}
        included={pageData.costAnalysis.included}
        extras={pageData.costAnalysis.extras}
      />

      {/* ─── SECTION 6: HOW TO BOOK SPECIALTY RESERVATIONS (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.bookingGuide.title}
        subtitle={pageData.bookingGuide.subtitle}
        steps={pageData.bookingGuide.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 7: ALLOWANCES, DIETARY CARE & DRESS CODE (BentoGlassmorphismGrid Component) ─── */}
      <div className="relative">
        <BentoGlassmorphismGrid
          title={pageData.bentoHighlights.title}
          subtitle={pageData.bentoHighlights.subtitle}
          bentoItems={pageData.bentoHighlights.cards}
        />
        <div className="bg-navy-950 py-8 px-6 text-center">
          <p className="text-slate-300 font-sans text-sm md:text-base mb-4">
            Need packing tips for Evening Resort and Formal Nights in specialty restaurants?
          </p>
          <Link
            to="/crystal-cruises/dress-code"
            className="inline-flex items-center gap-2 font-sans font-bold text-ts-gold hover:text-white uppercase tracking-wider text-xs border border-ts-gold/40 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            Explore the Crystal Cruises Dress Code Guide →
          </Link>
        </div>
      </div>

      {/* ─── SECTION 8: WHICH RESTAURANT SHOULD YOU TRY FIRST? (ComparisonTable Component) ─── */}
      <div className="relative py-12">
        <ComparisonTable data={pageData.matchmakerTable} />
      </div>

      {/* ─── SECTION 9: ANGELA HUGHES EXPERT CULINARY ADVICE (AuthorityBox Component) ─── */}
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

      {/* ─── SECTION 10: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        badge="LUXURY CRUISE CULINARY SPECIALIST"
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

      {/* ─── SECTION 11: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Crystal Cruises Dining",
          subtitle: "Everything you need to know about restaurants, reservations, allowances, and in-suite dining.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 12: FINAL CENTER CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
      />
    </div>
  );
};

export default CrystalDining;

