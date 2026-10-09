import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Shared UI System Components (Exact EmeraldYachts Component Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function CelebrityAquaClassVsConciergeClass() {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: pageData.intro.heading,
      paragraphs: pageData.intro.paragraphs
    },
    {
      heading: pageData.intro.quickAnswerHeading,
      paragraphs: [pageData.intro.quickAnswer]
    }
  ];

  // 2. Data mapping for At a Glance Table (Section 3)
  const glanceTableData = {
    title: "Celebrity Aqua Class vs. Concierge Class at a Glance",
    description: "Exact amenities can vary by ship and stateroom, so travelers should confirm the inclusions for their specific sailing.",
    headers: ["Feature", "AquaClass", "Concierge Class"],
    rows: pageData.glance.map(item => [item.feature, item.aquaClass, item.conciergeClass])
  };

  // 3. Data mapping for Dining Comparison Table (Section 10)
  const diningCompareTableData = {
    title: "Aqua Class vs. Concierge Class: Dining Comparison",
    description: "Dining is one of the clearest differences between the two categories. If Blu is important to you, AquaClass has a major advantage.",
    headers: ["Dining Feature", "AquaClass", "Concierge Class"],
    rows: pageData.diningCompare.map(row => [row.feature, row.aqua, row.concierge])
  };

  // 4. Data mapping for Wellness Comparison Table (Section 11)
  const wellnessCompareTableData = {
    title: "Aqua Class vs. Concierge Class: Wellness Comparison",
    description: "AquaClass is the stronger option for travelers who want their cruise to have a dedicated wellness and spa component.",
    headers: ["Wellness Feature", "AquaClass", "Concierge Class"],
    rows: pageData.wellnessCompare.map(row => [row.feature, row.aqua, row.concierge])
  };

  // 5. Data mapping for Decision Guide Table (Section 18)
  const decisionGuideTableData = {
    title: "Aqua Class vs. Concierge Class: Decision Table",
    description: "Match your vacation priorities against the category that provides the best value and experience.",
    headers: ["If You Value...", "Better Choice"],
    rows: pageData.decisionGuide.map(row => [row.feature, row.detail])
  };

  // 6. Schema.org JSON-LD graph (Exact Ritz-Carlton pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/",
        "name": pageData.seo.title,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Media%20(2).jpg",
          "caption": pageData.seo.title
        },
        "image": "https://www.tripsandships.com/assets/Media%20(2).jpg",
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
          "url": "https://www.tripsandships.com/assets/Media%20(2).jpg",
          "caption": "Angela Hughes - Luxury Cruise Specialist"
        },
        "description": pageData.angelaBio.leadParagraph,
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Celebrity Cruises",
          "AquaClass vs Concierge Class",
          "Blu Restaurant Dining",
          "Cruise Stateroom Selection",
          "Premium Cruise Planning"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/#breadcrumb",
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Celebrity AquaClass vs. Concierge Class",
            "item": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-class/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />
        <meta property="og:image" content="https://www.tripsandships.com/assets/Media%20(2).jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />
        <meta name="twitter:image" content="https://www.tripsandships.com/assets/Media%20(2).jpg" />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* ─── SECTION 1: Comparison Hero Component ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
      />

      {/* ─── SECTION 2: PremiumIntro Component (Narrative Intro & Quick Answer) ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="AQUACLASS"
        alt1="Celebrity AquaClass vs. Concierge Class Comparison"
      />

      {/* ─── SECTION 3: Side-by-Side Overview (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={glanceTableData}
      />

      {/* ─── SECTION 4: What Is Celebrity AquaClass (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="What Is Celebrity Aqua Class?"
        subtitles={["Centered Around Wellness, Relaxation & Enhanced Dining"]}
        summary="Celebrity AquaClass is a premium stateroom category centered around wellness, relaxation and enhanced dining. AquaClass is designed for travelers who want the cruise experience to feel more focused on relaxation, rejuvenation, and health-conscious luxury."
        features={pageData.whatIsAqua.map(item => `${item.title}: ${item.description}`)}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 5: What Is Celebrity Concierge Class (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="What Is Celebrity Concierge Class?"
        subtitles={["Designed Around Personalized Service & Convenience"]}
        summary="Celebrity Concierge Class is a premium stateroom category designed around personalized service, convenience and enhanced accommodations. Concierge Class can be appealing to travelers who want additional touches compared with a standard stateroom but do not necessarily need AquaClass's wellness-oriented benefits. Exact benefits depend on the ship and sailing."
        features={pageData.whatIsConcierge.map(item => `${item.title}: ${item.description}`)}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 6: Blu Restaurant Access & Dining Details (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Blu Restaurant Access & AquaClass Dining"
        subtitles={["Celebrity's Dedicated AquaClass-Exclusive Restaurant"]}
        summary="One of the biggest reasons travelers choose AquaClass is Blu. Blu is a specialty restaurant created for AquaClass guests and focuses on a more intimate dining experience. For travelers who enjoy dining as an important part of the cruise, Blu can be one of the most valuable AquaClass benefits. Yes, AquaClass guests have access to Blu as part of the AquaClass experience. However, access does not necessarily mean every specialty dining item or premium beverage is included."
        features={pageData.bluAppeal.map(item => `${item.title}: ${item.description}`)}
        imagePosition="right"
        theme="light"
      />

      {/* ─── SECTION 7: AquaClass Spa Benefits & Policies (FeatureSplit Component) ─── */}
      <FeatureSplit
        title="Celebrity Aqua Class Spa Benefits & Policies"
        subtitles={["Understanding Thermal Suite Access & Ship-Specific Inclusions"]}
        summary="AquaClass has a stronger connection to Celebrity's wellness and spa experience than Concierge Class. Depending on the ship, AquaClass can provide access to wellness-oriented amenities and spa-related benefits. Does AquaClass include spa access? AquaClass does not automatically mean unlimited access to every thermal suite or spa facility on every Celebrity ship. Travelers should verify the exact spa access included with their sailing before paying a significant AquaClass premium."
        features={pageData.spaFactors.map(item => `${item.title}: ${item.description}`)}
        imagePosition="left"
        theme="white"
      />

      {/* ─── SECTION 8: Inclusions & Amenities Breakdown (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Stateroom Inclusions & Benefits Breakdown"
        subtitle="Compare the signature stateroom amenities of AquaClass and Concierge Class side-by-side."
        includedTitle="AquaClass Wellness Amenities"
        extrasTitle="Concierge Class Dedicated Benefits"
        included={pageData.aquaAmenities}
        extras={pageData.conciergeBenefits}
      />

      {/* ─── SECTION 9: Cabin Locations & Selection Factors (FeatureGrid Component) ─── */}
      <FeatureGrid
        title="Aqua Class vs. Concierge Class: Cabin Locations"
        subtitle="A more expensive category does not automatically guarantee a better location. Consider these critical deck plan factors."
        features={pageData.cabinFactors}
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 10: Dining Comparison (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={diningCompareTableData}
      />

      {/* ─── SECTION 11: Wellness Comparison (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={wellnessCompareTableData}
      />

      {/* ─── SECTION 12: Stateroom & Service Checklist (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="What to Compare: Stateroom Amenities Checklist"
        subtitle="STATEROOM & SERVICE CHECKLIST"
        cards={[
          {
            title: "Key Stateroom Features to Evaluate",
            items: pageData.stateroomChecklist.map(i => `${i.title} – ${i.description}`)
          },
          {
            title: "Service & Convenience Comparison",
            items: [
              "Concierge Class places greater emphasis on concierge-style service and convenience",
              "AquaClass combines premium service with wellness-oriented amenities and Blu dining",
              "If service alone is your priority, Concierge Class can be completely sufficient",
              "If you want service plus wellness benefits, AquaClass provides superior overall value",
              "Both categories are positioned as premium choices well above standard verandas"
            ]
          }
        ]}
      />

      {/* ─── SECTION 13: Which Has Better Food? (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Aqua Class vs. Concierge Class: Which Has Better Food?"
        prosTitle={pageData.foodDecision.aquaTitle}
        consTitle={pageData.foodDecision.conciergeTitle}
        bestFor={pageData.foodDecision.aquaItems}
        notBestFor={pageData.foodDecision.conciergeItems}
        type="compare"
        bottomNote="AquaClass's biggest dining advantage is access to Blu, rather than simply having a different stateroom."
        bgClass="bg-white"
      />

      {/* ─── SECTION 14: Is AquaClass Worth the Extra Cost? (CostValueAnalysisCards Component) ─── */}
      <CostValueAnalysisCards
        title="Is Aqua Class Worth the Extra Cost?"
        subtitle="The price difference varies by ship, sailing date, seasonality, and demand. Evaluate whether the benefits match your habits."
        includedTitle="AquaClass Can Be Worth It If:"
        extrasTitle="AquaClass May Not Be Worth It If:"
        included={pageData.aquaWorthIf}
        extras={pageData.aquaNotWorthIf}
      />

      {/* ─── SECTION 15: Traveler Personas (TravelerPersonaCards Component) ─── */}
      <TravelerPersonaCards
        title="Who Is Each Category Best For?"
        subtitle="TRAVELER MATCHMAKER"
        personas={pageData.personas}
      />

      {/* ─── SECTION 16: AquaClass Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Aqua Class Pros & Cons"
        prosTitle="AquaClass Pros"
        consTitle="AquaClass Cons"
        bestFor={pageData.aquaPros}
        notBestFor={pageData.aquaCons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 17: Concierge Class Pros & Cons (ProsConsCards Component) ─── */}
      <ProsConsCards
        title="Celebrity Concierge Class Pros & Cons"
        prosTitle="Concierge Class Pros"
        consTitle="Concierge Class Cons"
        bestFor={pageData.conciergePros}
        notBestFor={pageData.conciergeCons}
        type="pros-cons"
        bgClass="bg-white"
      />

      {/* ─── SECTION 18: Decision Guide Table (BudgetBreakdownTable Component) ─── */}
      <BudgetBreakdownTable
        data={decisionGuideTableData}
      />

      {/* ─── SECTION 19: 7-Step Decision Roadmap (InteractivePlanningRoadmap Component) ─── */}
      <InteractivePlanningRoadmap
        title="How to Decide Between Aqua Class and Concierge Class"
        subtitle="A step-by-step framework to determine the exact right category and cabin for your Celebrity cruise."
        steps={pageData.steps}
      />

      {/* ─── SECTION 20: Real-World Example Scenarios (GenericChecklistCards Component) ─── */}
      <GenericChecklistCards
        title="Two Real-World Example Scenarios"
        subtitle="CASE STUDIES"
        cards={[
          {
            title: pageData.scenarios[0].title,
            items: [
              `Context: ${pageData.scenarios[0].description}`,
              ...pageData.scenarios[0].traits,
              `Outcome: ${pageData.scenarios[0].conclusion}`
            ]
          },
          {
            title: pageData.scenarios[1].title,
            items: [
              `Context: ${pageData.scenarios[1].description}`,
              ...pageData.scenarios[1].traits,
              `Outcome: ${pageData.scenarios[1].conclusion}`
            ]
          }
        ]}
      />

      {/* ─── SECTION 21: Angela Hughes Bio & Expert Insight (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        image={ProfilePictureAH}
        badge="LUXURY CRUISE SPECIALIST"
        experienceBadge="40+ YEARS EXPERTISE"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Celebrity Cruises Luxury Travel Authority"
        credentials={pageData.angelaBio.expertise}
        bio={pageData.angelaBio.leadParagraph}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteHeading}
        ctaText="Speak With a Celebrity Cruise Expert"
        ctaLink="/contact"
      />

      {/* ─── SECTION 22: Why Compare With Trips & Ships (BrandPillarsShowcase Component) ─── */}
      <BrandPillarsShowcase
        data={{
          title: "Why Compare Celebrity Aqua Class and Concierge Class With Trips & Ships Luxury Travel?",
          subtitle: "Choosing between AquaClass and Concierge Class is easier when the decision is based on your complete vacation rather than the stateroom category alone. The goal is to select the category that provides the most useful benefits for your travel style.",
          pillars: pageData.whyPlan.map(p => ({
            title: p.title,
            description: p.description,
            icon: p.icon.toLowerCase()
          }))
        }}
      />

      {/* ─── SECTION 23: Frequently Asked Questions (FAQAccordion Component) ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Clear, expert answers to the most common questions about Celebrity AquaClass and Concierge Class staterooms.",
          questions: pageData.faqs
        }}
      />

      {/* ─── SECTION 24: Final Verdict (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.finalVerdict.heading}
        prosTitle={pageData.finalVerdict.aquaTitle}
        consTitle={pageData.finalVerdict.conciergeTitle}
        bestFor={pageData.finalVerdict.aquaItems}
        notBestFor={pageData.finalVerdict.conciergeItems}
        type="compare"
        bottomNote={pageData.finalVerdict.conclusion}
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 25: Call to Action (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.cta.heading}
        description={pageData.cta.text}
        buttonText={pageData.cta.primaryCtaLabel}
        buttonLink={pageData.cta.primaryCtaUrl}
        theme="dark"
      />
    </div>
  );
}

export default CelebrityAquaClassVsConciergeClass;