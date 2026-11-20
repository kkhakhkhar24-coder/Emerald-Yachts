import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/hero-cruisetour-wilderness-train.webp';
import IntroImage1 from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/intro-denali-lodge.webp';
import IntroImage2 from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/intro-mckinley-lodge.webp';
import EssentialsImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/package-denali-essentials.webp';
import ExplorerImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/package-denali-explorer.webp';
import EscortedImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/package-denali-escorted.webp';
import RailExperienceImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/rail-glass-domed-cars.webp';
import DenaliFlightImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/denali-mountain-flight.webp';
import LodgeGreatRoomImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/lodge-interior-great-room.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/cta-royal-princess-whittier.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ProsConsCards from '@/components/ui/ProsConsCards';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesAlaskaCruisetours = () => {
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

  // Section 5: LuxuryZigZagShowcase for the 3 Cruisetour packages
  const packageItems = [
    {
      title: pageData.packagesZigZag.packages[0].title,
      badge: pageData.packagesZigZag.packages[0].badge,
      subtitle: pageData.packagesZigZag.packages[0].subtitle,
      description: pageData.packagesZigZag.packages[0].description,
      highlights: pageData.packagesZigZag.packages[0].highlights,
      bullets: pageData.packagesZigZag.packages[0].bullets,
      image: EssentialsImage,
      alt: "Princess Cruises Denali Essentials Cruisetour"
    },
    {
      title: pageData.packagesZigZag.packages[1].title,
      badge: pageData.packagesZigZag.packages[1].badge,
      subtitle: pageData.packagesZigZag.packages[1].subtitle,
      description: pageData.packagesZigZag.packages[1].description,
      highlights: pageData.packagesZigZag.packages[1].highlights,
      bullets: pageData.packagesZigZag.packages[1].bullets,
      image: ExplorerImage,
      alt: "Princess Cruises Denali Explorer Cruisetour"
    },
    {
      title: pageData.packagesZigZag.packages[2].title,
      badge: pageData.packagesZigZag.packages[2].badge,
      subtitle: pageData.packagesZigZag.packages[2].subtitle,
      description: pageData.packagesZigZag.packages[2].description,
      highlights: pageData.packagesZigZag.packages[2].highlights,
      bullets: pageData.packagesZigZag.packages[2].bullets,
      image: EscortedImage,
      alt: "Princess Cruises Denali Escorted Cruisetour with Tour Director"
    }
  ];

  // Section 8: Wilderness Lodges mapping for BentoGlassmorphismGrid
  const bentoLodgeItems = [
    {
      title: pageData.lodgesShowcase.lodges[0].name,
      description: `${pageData.lodgesShowcase.lodges[0].description} Highlights: ${pageData.lodgesShowcase.lodges[0].highlights}`,
      stat: "Denali",
      image: IntroImage1
    },
    {
      title: pageData.lodgesShowcase.lodges[1].name,
      description: `${pageData.lodgesShowcase.lodges[1].description} Highlights: ${pageData.lodgesShowcase.lodges[1].highlights}`,
      stat: "Talkeetna",
      image: IntroImage2
    },
    {
      title: pageData.lodgesShowcase.lodges[2].name,
      description: `${pageData.lodgesShowcase.lodges[2].description} Highlights: ${pageData.lodgesShowcase.lodges[2].highlights}`,
      stat: "Fairbanks",
      image: undefined,
      placeholderLabel: pageData.lodgesShowcase.lodges[2].name
    },
    {
      title: pageData.lodgesShowcase.lodges[3].name,
      description: `${pageData.lodgesShowcase.lodges[3].description} Highlights: ${pageData.lodgesShowcase.lodges[3].highlights}`,
      stat: "Kenai",
      image: undefined,
      placeholderLabel: pageData.lodgesShowcase.lodges[3].name
    },
    {
      title: pageData.lodgesShowcase.lodges[4].name,
      description: `${pageData.lodgesShowcase.lodges[4].description} Highlights: ${pageData.lodgesShowcase.lodges[4].highlights}`,
      stat: "Copper River",
      image: undefined,
      placeholderLabel: pageData.lodgesShowcase.lodges[4].name
    }
  ];

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
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/hero-cruisetour-wilderness-train.webp"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaskaCruisetours/hero-cruisetour-wilderness-train.webp",
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
          "Alaska Cruisetours",
          "Denali National Park",
          "Alaska Rail Travel",
          "Luxury Cruise Planning",
          "Land and Sea Vacations"
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
            "name": "Princess Alaska Cruisetours",
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
        watermarkText="CRUISETOURS"
        image1={LodgeGreatRoomImage}
        image2={DenaliFlightImage}
      />

      {/* ─── SECTION 3: WHAT IS A CRUISETOUR? ─── */}
      <EditorialFeatureShowcase
        title={pageData.whatIsCruisetour.title}
        subtitle={pageData.whatIsCruisetour.subtitle}
        image={undefined}
        features={pageData.whatIsCruisetour.inclusions}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 4: HOW DOES A CRUISETOUR WORK? (PROS & CONS / COMPARE) ─── */}
      <ProsConsCards
        title={pageData.howItWorks.title}
        prosTitle={pageData.howItWorks.compare.prosTitle}
        consTitle={pageData.howItWorks.compare.consTitle}
        bestFor={pageData.howItWorks.compare.bestFor}
        notBestFor={pageData.howItWorks.compare.notBestFor}
        bottomNote={pageData.howItWorks.planningTip}
        type="compare"
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: PACKAGES ZIG-ZAG (ESSENTIALS, EXPLORER, ESCORTED) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.packagesZigZag.title}
        subtitle={pageData.packagesZigZag.subtitle}
        items={packageItems}
      />

      {/* ─── SECTION 6: PACKAGES COMPARISON TABLE ─── */}
      <ComparisonTable data={pageData.packageComparisonTable} />

      {/* ─── SECTION 7: HOW MANY NIGHTS (DETAILED INCLUSIONS LIST) ─── */}
      <DetailedInclusionsList
        title={pageData.nightsGuide.title}
        intro={[pageData.nightsGuide.subtitle, pageData.nightsGuide.planningTakeaway]}
        items={pageData.nightsGuide.items}
      />

      {/* ─── SECTION 8: PRINCESS WILDERNESS LODGES SHOWCASE (BENTO GLASSMORPHISM GRID) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.lodgesShowcase.title}
        subtitle={pageData.lodgesShowcase.subtitle}
        bentoItems={bentoLodgeItems}
      />

      {/* ─── SECTION 9: THE RAIL EXPERIENCE SHOWCASE ─── */}
      <EditorialFeatureShowcase
        title={pageData.railExperience.title}
        subtitle={pageData.railExperience.subtitle}
        image={RailExperienceImage}
        features={pageData.railExperience.features}
        bgClass="bg-white"
      />

      {/* ─── SECTION 10: DENALI NATIONAL PARK TOURING (EDITORIAL FEATURE SHOWCASE) ─── */}
      <EditorialFeatureShowcase
        title={pageData.denaliParkTouring.title}
        subtitle={pageData.denaliParkTouring.subtitle}
        image={undefined}
        features={pageData.denaliParkTouring.features}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 11: BEYOND DENALI (BRAND PILLARS SHOWCASE) ─── */}
      <BrandPillarsShowcase
        data={pageData.beyondDenali}
      />

      {/* ─── SECTION 12: INCLUSIONS TABLE ─── */}
      <ComparisonTable data={pageData.inclusionsTable} />

      {/* ─── SECTION 13: BEST TIME TO BOOK (STEP BY STEP SEASONAL GUIDE) ─── */}
      <StepByStepGuide
        title={pageData.bestTimeToBook.title}
        subtitle={pageData.bestTimeToBook.subtitle}
        steps={pageData.bestTimeToBook.steps}
        layout="grid"
      />

      {/* ─── SECTION 14: CRUISETOUR VS. CRUISE-ONLY COMPARISON TABLE ─── */}
      <ComparisonTable data={pageData.cruiseVsCruisetour} />

      {/* ─── SECTION 15: MID-PAGE CTA ─── */}
      <CenterCTA
        title="Need Guidance on the Best Alaska Cruisetour Package?"
        description="Connect with certified Alaska specialist Angela Hughes to match your travel dates with prime Denali lodge availability and optimal rail routes."
        buttonText="Plan Your Alaska Cruisetour"
        buttonLink="/contact"
      />

      {/* ─── SECTION 16: HOW TO CHOOSE (8 STEPS) ─── */}
      <StepByStepGuide
        title={pageData.howToChooseGuide.title}
        subtitle={pageData.howToChooseGuide.subtitle}
        steps={pageData.howToChooseGuide.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 17: EXPERT CREDENTIALS ─── */}
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

      {/* ─── SECTION 18: FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess Alaska Cruisetours",
          subtitle: "Clear answers to essential questions regarding package inclusions, rail services, Denali tours, and meal plans.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 19: FINAL CENTER CTA ─── */}
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

export default PrincessCruisesAlaskaCruisetours;

