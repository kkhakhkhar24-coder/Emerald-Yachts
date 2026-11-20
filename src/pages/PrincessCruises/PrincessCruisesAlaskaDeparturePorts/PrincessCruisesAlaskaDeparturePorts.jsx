import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp';
import SeattleShipImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-discovery-princess-seattle-washington-usa-ship-aerial-drone.webp';
import VancouverWhittierImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-voyage-glaciers-whittier.webp';
import InsidePassageImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-inside-passage-haines.webp';
import GlacierFlightImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/glacier-flight-landing.webp';
import TrainImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cruisetour-wilderness-train.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import PremiumAlternatingShowcase from '@/components/ui/PremiumAlternatingShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesAlaskaDeparturePorts = () => {
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

  // Section 5: Vancouver Features with authentic imagery for PremiumAlternatingShowcase
  const vancouverFeatures = pageData.vancouverAlternating.features.map((feature, idx) => ({
    ...feature,
    image: idx === 0 ? VancouverWhittierImage : InsidePassageImage
  }));

  // Section 8: Denali Cruisetour Items for DetailedInclusionsList
  const denaliItems = pageData.denaliCruisetourList.items.map((item, idx) => ({
    ...item,
    image: idx === 0 ? TrainImage : undefined,
    placeholderLabel: item.title
  }));

  // Section 9: Logistics Items for BentoGlassmorphismGrid
  const logisticsItems = pageData.logisticsBento.items.map((item) => ({
    ...item,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 11: How to Choose Items for ThreeColumnGrid
  const howToChooseItems = pageData.howToChoose.items.map((item) => ({
    title: item.title,
    category: item.category,
    features: item.features,
    image: undefined,
    placeholderLabel: item.title
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
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp"
        },
        "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp",
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
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg"
        },
        "description": "Angela Hughes is CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel professional with more than 40 years in the travel industry.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Princess Cruises",
          "Alaska cruises",
          "Alaska cruise departure ports",
          "Voyage of the Glaciers",
          "Luxury cruise travel",
          "Alaska cruisetours",
          "Denali National Park"
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
            "name": "Princess Alaska Departure Ports",
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

      {/* ─── SECTION 1: HERO HEADER ─── */}
      <ComparisonHero
        byline={true}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        backgroundImage={HeroImage}
      />

      {/* ─── SECTION 2: INTRO NARRATIVE (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="GATEWAYS"
        image1={GlacierFlightImage}
        image2={undefined}
      />

      {/* ─── SECTION 3: AT A GLANCE COMPARISON (LuxuryComparisonMatrix) ─── */}
      <div id="at-a-glance">
        <LuxuryComparisonMatrix
          title={pageData.atAGlanceMatrix.title}
          subtitle={`${pageData.atAGlanceMatrix.subtitle} ${pageData.atAGlanceMatrix.footnote}`}
          headers={pageData.atAGlanceMatrix.headers}
          rows={pageData.atAGlanceMatrix.rows}
          image={undefined}
        />
      </div>

      {/* ─── SECTION 4: 1. PRINCESS ALASKA CRUISES FROM SEATTLE (EditorialFeatureShowcase) ─── */}
      <div id="seattle-cruises">
        <EditorialFeatureShowcase
          title={pageData.seattleEditorial.title}
          subtitle={pageData.seattleEditorial.subtitle}
          image={SeattleShipImage}
          features={pageData.seattleEditorial.features}
          bgClass="bg-white"
        />
      </div>

      {/* ─── SECTION 5: 2. PRINCESS ALASKA CRUISES FROM VANCOUVER (PremiumAlternatingShowcase) ─── */}
      <div id="vancouver-cruises">
        <PremiumAlternatingShowcase
          title={pageData.vancouverAlternating.title}
          subtitle={pageData.vancouverAlternating.subtitle}
          features={vancouverFeatures}
        />
      </div>

      {/* ─── SECTION 6: 3. PRINCESS ALASKA CRUISES FROM SAN FRANCISCO (ProsConsCards) ─── */}
      <div id="san-francisco-cruises">
        <ProsConsCards
          title={pageData.sanFranciscoCompare.title}
          prosTitle={pageData.sanFranciscoCompare.prosTitle}
          consTitle={pageData.sanFranciscoCompare.consTitle}
          bestFor={pageData.sanFranciscoCompare.bestFor}
          notBestFor={pageData.sanFranciscoCompare.notBestFor}
          bottomNote={pageData.sanFranciscoCompare.bottomNote}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ─── SECTION 7: BEST GLACIER EXPERIENCE (BrandPillarsShowcase) ─── */}
      <div className="bg-ice-50/50 py-4 border-t border-slate-100">
        <BrandPillarsShowcase data={pageData.glacierShowcase} />
      </div>

      {/* ─── SECTION 8: DENALI CRUISETOUR BEST PORT (DetailedInclusionsList) ─── */}
      <div className="bg-white py-4 border-t border-slate-100">
        <DetailedInclusionsList
          title={pageData.denaliCruisetourList.title}
          intro={pageData.denaliCruisetourList.intro}
          items={denaliItems}
        />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-20 text-center">
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="font-sans text-base text-slate-700">
                For complete cruisetour package styles, wilderness lodge comparisons and rail schedules, explore our detailed guide to{" "}
                <a href="/princess-cruises/alaska-cruisetours" className="text-navy-900 font-semibold underline hover:text-gold-600 transition-colors">
                  Princess Alaska Cruisetours
                </a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ─── SECTION 9: FLIGHT, AIRPORT & PORT LOGISTICS (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.logisticsBento.title}
        subtitle={pageData.logisticsBento.subtitle}
        bentoItems={logisticsItems}
      />

      {/* ─── SECTION 10: SIDE-BY-SIDE COMPARISON TABLE (ComparisonTable) ─── */}
      <div className="py-8 bg-white">
        <ComparisonTable data={pageData.comparisonTable} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16 text-center">
          <p className="font-sans text-sm text-slate-500 italic max-w-2xl mx-auto">
            {pageData.comparisonTable.footnote}
          </p>
        </div>
      </div>

      {/* ─── SECTION 11: HOW TO CHOOSE YOUR DEPARTURE (ThreeColumnGrid) ─── */}
      <div className="bg-slate-50/80 py-8 border-y border-slate-100">
        <ThreeColumnGrid
          title={pageData.howToChoose.title}
          subtitle={pageData.howToChoose.subtitle}
          items={howToChooseItems}
        />
      </div>

      {/* ─── SECTION 12: FAQS (FAQAccordion) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 13: EXPERT CREDENTIALS & CALL TO ACTION ─── */}
      <ExpertCredentials
        image={AboutImage}
        name="Angela Hughes"
        title="Princess Cruises Alaska Specialist & CEO, Trips & Ships Luxury Travel"
        ctaText="Plan Your Alaska Cruise"
        ctaLink="/contact"
        bio="Angela Hughes has spent over four decades curating high-end worldwide journeys across 121+ countries. Her deep firsthand knowledge of Princess Cruises, Alaska homeport logistics, and Gulf of Alaska sailing routes ensures each client selects the ideal embarkation port, stateroom location, and land tour integration for an unforgettable voyage."
        credentials={[
          "40+ Years Luxury Travel Experience",
          "Traveled to 121+ Countries Worldwide",
          "Princess Cruises Alaska & Cruisetour Specialist",
          "CLIA Master Cruise Counselor"
        ]}
        quote="Choosing between Seattle, Vancouver and San Francisco is far more than a question of airfare. It defines whether you cruise calm inland channels, witness two distinct tidewater glaciers, or connect seamlessly to a private glass-domed rail journey into Denali."
      />

      <CenterCTA
        title="Plan Your Princess Alaska Cruise With Expert Guidance"
        subtitle="Speak with Angela Hughes and the Trips & Ships luxury cruise specialists to match your vacation goals with the ideal Alaska departure port, ship class, and wilderness itinerary."
        primaryCtaText="Plan Your Alaska Cruise"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Princess Cruises Guide"
        secondaryCtaLink="/princess-cruises"
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesAlaskaDeparturePorts;
