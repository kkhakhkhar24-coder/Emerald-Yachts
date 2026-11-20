import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';

// UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TabbedComparison from '@/components/ui/TabbedComparison';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const CrystalDressCode = () => {
  // Schema definition complying strictly with Google Structured Data standards
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
        //   "url": "https://www.tripsandships.com/assets/CrystalCruises/crystal-dress-code.webp",
        //   "caption": pageData.hero.title
        // },
        // "image": "https://www.tripsandships.com/assets/CrystalCruises/crystal-dress-code.webp",
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
          "Crystal Cruises",
          "Crystal Cruises Dress Code",
          "Luxury Cruise Packing",
          "Cruise Formal Wear",
          "Evening Resort Attire",
          "Luxury Ocean Cruises"
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
            "name": "Crystal Cruises Dress Code",
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
        {/* <meta property="og:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-dress-code.webp" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        {/* <meta name="twitter:image" content="https://www.tripsandships.com/assets/CrystalCruises/crystal-dress-code.webp" /> */}

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
        watermarkText="ETIQUETTE"
      />

      {/* ─── SECTION 3: DRESS CODE AT A GLANCE (ComparisonTable Component) ─── */}
      <div className="relative">
        <ComparisonTable data={pageData.dressCodeAtAGlance} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16 text-center">
          <p className="font-sans text-sm md:text-base text-slate-500 italic bg-ice-50 border border-slate-200/60 rounded-xl p-4">
            {pageData.dressCodeAtAGlance.note}
          </p>
        </div>
      </div>

      {/* ─── SECTION 4: DAY CASUAL: WHAT TO WEAR DURING THE DAY (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title={pageData.dayCasual.title}
        subtitle={pageData.dayCasual.subtitle}
        includedTitle={pageData.dayCasual.includedTitle}
        extrasTitle={pageData.dayCasual.extrasTitle}
        included={pageData.dayCasual.included}
        extras={pageData.dayCasual.restrictions}
      />

      {/* ─── SECTION 5: EVENING RESORT: WHAT TO WEAR AFTER 6:00 P.M. (DetailedInclusionsList Component) ─── */}
      <DetailedInclusionsList
        title={pageData.eveningResort.title}
        intro={pageData.eveningResort.intro}
        items={pageData.eveningResort.items}
      />

      {/* ─── SECTION 6: FORMAL EVENING & FREQUENCY (TabbedComparison Component) ─── */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-6 pt-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-ts-gold font-bold mb-3 block">
            {pageData.formalEvening.subtitle}
          </span>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            {pageData.formalEvening.description}
          </p>
        </div>

        <TabbedComparison
          title={pageData.formalEvening.title}
          mainBrand="Crystal Luxury Standard"
          competitors={pageData.formalEvening.tabs}
          hideVs={true}
          leftLabel="Recommended Attire & Guidelines"
          rightLabel="Pairing, Accents & Etiquette"
        />
      </div>

      {/* ─── SECTION 7: VENUES, SPECIAL EVENTS & SPECIALTY DINING (BentoGlassmorphismGrid Component) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.venueAndThemeGrid.title}
        subtitle={pageData.venueAndThemeGrid.subtitle}
        bentoItems={pageData.venueAndThemeGrid.cards}
      />

      {/* ─── SECTION 8: ANGELA HUGHES PACKING ADVICE (AuthorityBox Component) ─── */}
      <div className="py-14 bg-white">
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

      {/* ─── SECTION 9: COMPLETE PACKING ROADMAP (StepByStepGuide Component) ─── */}
      <StepByStepGuide
        title={pageData.packingGuide.title}
        subtitle={pageData.packingGuide.subtitle}
        steps={pageData.packingGuide.steps}
        layout="grid"
        columns={3}
      />

      {/* ─── SECTION 10: RULES & ETIQUETTE CLARIFICATIONS (CurvilinearGrid Component) ─── */}
      <CurvilinearGrid
        title={pageData.rulesAndEtiquette.title}
        subtitle="COMMON TRAVELER QUESTIONS"
        paragraphs={[
          `"${pageData.rulesAndEtiquette.dressyVsCasual.quote}" — ${pageData.rulesAndEtiquette.dressyVsCasual.author}, ${pageData.rulesAndEtiquette.dressyVsCasual.authorRole}`
        ]}
        items={[
          {
            title: pageData.rulesAndEtiquette.jeansCard.title,
            description: "When Jeans Are Permitted vs. Prohibited:",
            features: [
              ...pageData.rulesAndEtiquette.jeansCard.pros,
              ...pageData.rulesAndEtiquette.jeansCard.cons
            ],
            icon: "check"
          },
          {
            title: pageData.rulesAndEtiquette.shortsCard.title,
            description: "Daytime Allowance vs. Evening Dining Restrictions:",
            features: [
              ...pageData.rulesAndEtiquette.shortsCard.pros,
              ...pageData.rulesAndEtiquette.shortsCard.cons
            ],
            icon: "ship"
          },
          {
            title: pageData.rulesAndEtiquette.dressyVsCasual.heading,
            description: "Atmosphere & Wardrobe Philosophy:",
            features: [
              "Daytime: Relaxed resort luxury and comfort across all public decks and casual dining.",
              "Evening: Refined Evening Resort attire in all lounges and restaurants after 6:00 p.m.",
              "Formal Evenings: One optional formal night on qualifying sailings over 7 days."
            ],
            icon: "Compass"
          }
        ]}
      />

      {/* ─── SECTION 11: ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials Component) ─── */}
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
          title: "Frequently Asked Questions About the Crystal Cruises Dress Code",
          subtitle: "Clear, expert answers to the most common questions regarding onboard attire, packing, and formal nights.",
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

export default CrystalDressCode;

