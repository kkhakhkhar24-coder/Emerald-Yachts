import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp';
import DiningPanoramicImage from '@/assets/Princess-Cruises/PrincessCruisesPremier/princess-cruises-sun-princess-sanctuary-dining-panoramic-view.webp';
import RestaurantAmbiance from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-restaurant-ambiance.webp';
import SanctuaryCollectionDining from '@/assets/Princess-Cruises/PrincessCruisesReserveVsSanctuary/sanctuary-collection-dining.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import DiningVenuesMasonry from '@/components/ui/DiningVenuesMasonry';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesDining = () => {
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

  // Section 2: Complimentary Dining items for DetailedInclusionsList
  const complimentaryItems = pageData.complimentaryDining.items.map((item, idx) => ({
    ...item,
    image: idx === 0 ? SanctuaryCollectionDining : undefined,
    placeholderLabel: item.title
  }));

  // Section 3: Specialty Venues for LuxuryZigZagShowcase (Use component's built-in placeholder)
  const specialtyImages = [undefined];
  const specialtyItems = pageData.specialtyDining.venues.map((venue) => ({
    title: venue.title,
    category: venue.category,
    description: venue.description,
    bestFor: venue.bestFor,
    image: undefined,
    placeholderLabel: venue.title
  }));

  // Section 3: Other Specialty & Experiential Venues for DiningVenuesMasonry
  const otherSpecialtyVenues = pageData.specialtyDining.otherSpecialty.venues.map((venue) => ({
    ...venue,
    image: undefined,
    placeholderLabel: venue.title
  }));

  // Section 6 & 7: Logistics Bento items
  const logisticsBentoItems = pageData.pricingAndReservations.items.map((item) => ({
    ...item,
    image: undefined,
    placeholderLabel: item.title
  }));

  // Section 11: Which Dining Worth Trying items for ThreeColumnGrid
  const worthTryingItems = pageData.whichDiningWorthTrying.items.map((item) => ({
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
          "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp"
        },
        "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesWhatsIncluded/princess-cruises-sun-princess-sanctuary-dining.webp",
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
          "Cruise ship dining",
          "Specialty dining",
          "Luxury cruise experiences",
          "Cruise dining packages",
          "Princess Plus",
          "Princess Premier"
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
            "name": "Princess Cruises Dining Guide",
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

      {/* ─── SECTION 1: HERO HEADER (Clean Byline) ─── */}
      <ComparisonHero
        byline={true}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        backgroundImage={DiningPanoramicImage}
      />

      {/* ─── SECTION 2: INTRO NARRATIVE (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="DINING"
        image1={HeroImage}
        image2={RestaurantAmbiance}
      />

      {/* ─── SECTION 3: 1. HOW DINING WORKS (BrandPillarsShowcase) ─── */}
      <div id="how-dining-works" className="bg-slate-50/50 py-4 border-t border-slate-100">
        <BrandPillarsShowcase data={pageData.diningCategories} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-10 mb-16 text-center">
          <FadeIn>
            <p className="font-sans text-sm text-slate-500 italic max-w-3xl mx-auto">
              {pageData.diningCategories.shipNote}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ─── SECTION 4: 2. WHAT IS INCLUDED (DetailedInclusionsList) ─── */}
      <div id="included-dining" className="bg-white py-4 border-t border-slate-100">
        <DetailedInclusionsList
          title={pageData.complimentaryDining.title}
          intro={pageData.complimentaryDining.intro}
          items={complimentaryItems}
        />
      </div>

      {/* ─── SECTION 5: 3. SPECIALTY RESTAURANTS (LuxuryZigZagShowcase) ─── */}
      <div id="specialty-dining">
        <LuxuryZigZagShowcase
          title={pageData.specialtyDining.title}
          subtitle={pageData.specialtyDining.subtitle}
          items={specialtyItems}
          images={specialtyImages}
        />

        {/* Other Specialty & Experiential Venues (DiningVenuesMasonry) */}
        <div className="mt-8">
          <DiningVenuesMasonry
            title={pageData.specialtyDining.otherSpecialty.title}
            subtitle={pageData.specialtyDining.otherSpecialty.subtitle}
            items={otherSpecialtyVenues}
          />
        </div>
      </div>

      {/* ─── SECTION 6: 4. CASUAL DINING (EditorialFeatureShowcase) ─── */}
      <div id="casual-dining">
        <EditorialFeatureShowcase
          title={pageData.casualDining.title}
          subtitle={pageData.casualDining.subtitle}
          image={undefined}
          features={pageData.casualDining.features}
          bgClass="bg-slate-50"
        />
      </div>

      {/* ─── SECTION 7: 5. PLUS VS. PREMIER DINING BENEFITS (ComparisonTable) ─── */}
      <div id="packages-dining" className="py-16 bg-white border-t border-slate-100">
        <ComparisonTable
          data={{
            title: pageData.packageDiningBenefits.title,
            headers: pageData.packageDiningBenefits.table.headers,
            rows: pageData.packageDiningBenefits.table.rows
          }}
        />

        {/* Princess Plus & Princess Premier Dining Rules (GenericChecklistCards) */}
        <div className="-mt-10">
          <GenericChecklistCards
            title="Princess Package Dining Rules"
            subtitle="Package Policies & Entitlements"
            cards={pageData.packageDiningBenefits.packageRulesCards}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12 text-center">
          <FadeIn>
            <p className="font-sans text-sm text-slate-600">
              For complete package costs and inclusion comparisons, see our dedicated guide to{" "}
              <a href="/princess-cruises/plus-vs-premier" className="text-navy-900 font-semibold underline hover:text-gold-600 transition-colors">
                Princess Plus vs. Princess Premier
              </a>.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ─── SECTION 8: 6 & 7. SPECIALTY PRICING & RESERVATIONS (BentoGlassmorphismGrid) ─── */}
      <div id="pricing-reservations">
        <BentoGlassmorphismGrid
          title={pageData.pricingAndReservations.title}
          subtitle={pageData.pricingAndReservations.subtitle}
          bentoItems={logisticsBentoItems}
        />
      </div>

      {/* ─── SECTION 9: 8. DRESS CODE (ProsConsCards) ─── */}
      <div id="dress-code" className="py-8 bg-slate-50 border-t border-slate-100">
        <ProsConsCards
          title={pageData.dressCode.title}
          prosTitle={pageData.dressCode.smartCasual.title}
          consTitle={pageData.dressCode.formalNights.title}
          bestFor={pageData.dressCode.smartCasual.items}
          notBestFor={pageData.dressCode.formalNights.items}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ─── SECTION 10: 9 & 10. DIETARY & FAMILY DINING (EditorialFeatureShowcase) ─── */}
      <div id="dietary-family">
        <EditorialFeatureShowcase
          title={pageData.dietaryAndFamily.title}
          subtitle={pageData.dietaryAndFamily.subtitle}
          image={undefined}
          features={pageData.dietaryAndFamily.features}
          bgClass="bg-white"
        />
      </div>

      {/* ─── SECTION 11: 11. OPTIONS WORTH TRYING (ThreeColumnGrid) ─── */}
      <div id="options-worth-trying" className="bg-slate-50/70 py-8 border-y border-slate-100">
        <ThreeColumnGrid
          title={pageData.whichDiningWorthTrying.title}
          subtitle={pageData.whichDiningWorthTrying.subtitle}
          items={worthTryingItems}
        />
      </div>

      {/* ─── SECTION 12: 12. MAKE THE MOST OF DINING (StepByStepGuide) ─── */}
      <div id="make-the-most">
        <StepByStepGuide
          title={pageData.howToMakeTheMost.title}
          subtitle={pageData.howToMakeTheMost.subtitle}
          steps={pageData.howToMakeTheMost.steps}
          layout="grid"
          columns={3}
        />
      </div>

      {/* ─── SECTION 13: FAQS (FAQAccordion) ─── */}
      <FAQAccordion faqs={pageData.faqs} />

      {/* ─── SECTION 14: EXPERT CREDENTIALS & CALL TO ACTION ─── */}
      <ExpertCredentials
        image={AboutImage}
        name="Angela Hughes"
        title="Princess Cruises Specialist & CEO, Trips & Ships Luxury Travel"
        ctaText="Plan Your Princess Dining Experience"
        ctaLink="/contact"
        bio="Angela Hughes has spent over four decades curating high-end worldwide journeys across 121+ countries. Her firsthand culinary knowledge across the Princess Cruises fleet ensures each client discovers the finest complimentary menus, books high-demand specialty venues, and leverages package perks for maximum vacation value."
        credentials={[
          "40+ Years Luxury Cruise Experience",
          "Traveled to 121+ Countries Worldwide",
          "Princess Cruises Certified Specialist",
          "CLIA Master Cruise Counselor"
        ]}
        quote="Dining on Princess Cruises combines relaxed daily freedom with some of the finest culinary artistry at sea. Balancing complimentary favorites with signature steakhouse and Italian evenings delivers the ultimate cruise experience."
      />

      <CenterCTA
        title="Plan Your Princess Cruise Dining Experience"
        subtitle="Speak with Angela Hughes and the Trips & Ships luxury cruise specialists to match your food preferences with the ideal ship, dining reservations, and Princess package perks."
        primaryCtaText="Plan Your Princess Cruise"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Princess Cruises Guide"
        secondaryCtaLink="/princess-cruises"
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesDining;

