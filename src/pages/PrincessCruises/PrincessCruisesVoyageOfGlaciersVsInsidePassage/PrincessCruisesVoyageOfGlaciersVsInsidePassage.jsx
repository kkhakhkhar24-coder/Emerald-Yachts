import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp';
import IntroVoyageGlaciers from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-voyage-glaciers-whittier.webp';
import IntroInsidePassage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-inside-passage-haines.webp';
import GlacierFlightImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/glacier-flight-landing.webp';
import WildlifeImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/intro-wildlife.webp';
import WhittierSailawayImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/intro-whittier-sailaway.webp';
import RailTrainImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cruisetour-wilderness-train.webp';
import DenaliParkImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/denali-national-park.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ItineraryCards from '@/components/ui/ItineraryCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TabbedComparison from '@/components/ui/TabbedComparison';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesVoyageOfGlaciersVsInsidePassage = () => {
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

  // Section 7: Itinerary Cards items mapped with authentic route imagery
  const itineraryCardItems = pageData.itineraryCards.items.map((item) => ({
    ...item,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 9: Denali Land Tour items mapped with authentic imagery
  const denaliTourItems = pageData.denaliLandTourGuide.items.map((item, idx) => ({
    ...item,
    image: idx === 0 ? RailTrainImage : undefined,
    placeholderLabel: item.title
  }));

  // Section 10: Tabbed Traveler Style Comparison with imagery
  const travelerStyleCategories = pageData.travelerMatchTabs.categories.map((cat, idx) => {
    let tabImage = GlacierFlightImage;
    if (idx === 1) tabImage = WildlifeImage;
    if (idx === 2) tabImage = undefined;
    return {
      ...cat,
      image: tabImage,
      placeholderLabel: cat.name || cat.title
    };
  });

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
        "description": "Angela Hughes is a luxury travel expert with more than 40 years of travel industry experience and has visited over 121 countries. She is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Princess Cruises",
          "Alaska Cruises",
          "Voyage of the Glaciers",
          "Inside Passage Cruises",
          "Alaska Cruisetours",
          "Luxury Cruise Planning"
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
            "name": "Princess Alaska Cruises",
            "item": "https://www.tripsandships.com/princess-cruises/alaska"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Voyage of the Glaciers vs. Inside Passage",
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
        watermarkText="ALASKA ROUTES"
        image1={IntroVoyageGlaciers}
        image2={DenaliParkImage}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON (LuxuryComparisonMatrix Component) ─── */}
      <div id="comparison-table">
        <LuxuryComparisonMatrix
          title={pageData.atAGlanceTable.title}
          subtitle={`${pageData.atAGlanceTable.subtitle} ${pageData.atAGlanceTable.footnote}`}
          headers={pageData.atAGlanceTable.headers}
          rows={pageData.atAGlanceTable.rows}
          image={undefined}
        />
      </div>

      {/* ─── SECTION 4: WHAT IS VOYAGE OF THE GLACIERS? ─── */}
      <EditorialFeatureShowcase
        title={pageData.voyageOfTheGlaciersShowcase.title}
        subtitle={pageData.voyageOfTheGlaciersShowcase.subtitle}
        image={WhittierSailawayImage}
        features={pageData.voyageOfTheGlaciersShowcase.inclusions}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 5: WHAT IS THE INSIDE PASSAGE? ─── */}
      <EditorialFeatureShowcase
        title={pageData.insidePassageShowcase.title}
        subtitle={pageData.insidePassageShowcase.subtitle}
        image={IntroInsidePassage}
        features={pageData.insidePassageShowcase.inclusions}
        bgClass="bg-white"
      />

      {/* ─── SECTION 6: GLACIER VIEWING COMPARISON (PROS & CONS / COMPARE) ─── */}
      <ProsConsCards
        title={pageData.glacierViewingCompare.title}
        prosTitle={pageData.glacierViewingCompare.prosTitle}
        consTitle={pageData.glacierViewingCompare.consTitle}
        bestFor={pageData.glacierViewingCompare.bestFor}
        notBestFor={pageData.glacierViewingCompare.notBestFor}
        bottomNote={pageData.glacierViewingCompare.bottomNote}
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 7: ROUTE & ITINERARY DIFFERENCES (ITINERARY CARDS) ─── */}
      <div id="itinerary-cards">
        <ItineraryCards
          title={pageData.itineraryCards.title}
          items={itineraryCardItems}
        />
        {pageData.itineraryCards.footnote && (
          <div className="bg-ice-50 pb-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="font-sans text-xs text-slate-500 italic">
                {pageData.itineraryCards.footnote}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ─── SECTION 8: DEPARTURE PORTS (BRAND PILLARS SHOWCASE) ─── */}
      <BrandPillarsShowcase
        data={pageData.departurePortsShowcase}
      />

      {/* ─── SECTION 9: DENALI & CRUISETOUR CONNECTION (DETAILED INCLUSIONS LIST) ─── */}
      <DetailedInclusionsList
        title={pageData.denaliLandTourGuide.title}
        intro={pageData.denaliLandTourGuide.intro}
        items={denaliTourItems}
      />

      {/* ─── SECTION 10: TRAVELER STYLE MATCHING (TABBED COMPARISON) ─── */}
      <TabbedComparison
        title={pageData.travelerMatchTabs.title}
        mainBrand={{ name: "Voyage of the Glaciers" }}
        competitors={travelerStyleCategories}
        hideVs={true}
        leftLabel="Voyage of the Glaciers Strengths"
        rightLabel="Inside Passage Strengths"
      />

      {/* ─── SECTION 11: COST BREAKDOWN TABLE ─── */}
      <ComparisonTable data={pageData.costComparisonTable} />

      {/* ─── SECTION 12: MID-PAGE CTA ─── */}
      <CenterCTA
        title="Need Guidance Choosing Your Princess Alaska Route?"
        description="Connect with certified Princess Alaska specialist Angela Hughes to compare glacier assignments, port times, ship classes, and Denali Cruisetour availability."
        buttonText="Plan Your Alaska Voyage"
        buttonLink="/contact"
      />

      {/* ─── SECTION 13: 8 ESSENTIAL DECISION FACTORS (STEP BY STEP GUIDE) ─── */}
      <StepByStepGuide
        title={pageData.howToChooseGuide.title}
        subtitle={pageData.howToChooseGuide.subtitle}
        steps={pageData.howToChooseGuide.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 14: FINAL VERDICT SUMMARY BANNER ─── */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ts-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold mb-4 block">
              THE EXPERT SUMMARY
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              {pageData.finalVerdict.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-8"></div>
            <p className="font-sans text-lg md:text-xl text-slate-200 leading-relaxed mb-10">
              {pageData.finalVerdict.description}
            </p>
            <a
              href={pageData.finalVerdict.ctaUrl}
              className="inline-block px-8 py-4 bg-ts-gold text-navy-950 font-sans font-bold text-sm tracking-wider uppercase rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-xl"
            >
              {pageData.finalVerdict.ctaLabel}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 15: EXPERT CREDENTIALS ─── */}
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

      {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Voyage of the Glaciers vs. Inside Passage",
          subtitle: "Clear answers to essential questions regarding glacier viewing, port schedules, Denali connections, and travel logistics.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 17: FINAL CENTER CTA ─── */}
      <CenterCTA
        title="Plan Your Princess Alaska Cruise with Trips & Ships"
        description="Choosing the right Alaska itinerary involves more than comparing departure dates. Angela Hughes and our luxury cruise specialists can evaluate your full travel arrangements to ensure an extraordinary Great Land journey."
        buttonText="Contact Trips & Ships Luxury Travel"
        buttonLink="/contact"
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesVoyageOfGlaciersVsInsidePassage;

