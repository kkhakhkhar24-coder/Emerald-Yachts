import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Shared UI System Components (Unique Component Architecture - All Sections Unique)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FeatureSplit from '@/components/ui/FeatureSplit';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExpertReviewVerdict from '@/components/ui/ExpertReviewVerdict';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import CardGrid from '@/components/ui/CardGrid';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import DualBrandComparisonTable from '@/components/ui/DualBrandComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import CuratedComforts from '@/components/ui/CuratedComforts';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function Celebrityoffersloyalty() {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: pageData.intro.heading,
      paragraphs: pageData.intro.paragraphs
    }
  ];

  // 2. Data mapping for At a Glance Table (Section 3)
  const glanceTableData = {
    title: "Celebrity Offers & Captain's Club at a Glance",
    headers: ["Program Feature", "Specification / Availability"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Data mapping for Current Offers FeatureSplit (Section 4)
  const currentOffersFeatures = pageData.currentOffers.types.map(t => ({
    title: t.label,
    description: "Eligible promotion across select staterooms and voyages."
  }));

  // 4. Data mapping for Savings Factors Bento (Section 5)
  const savingsFactorsItems = pageData.savingsFactors.map((f, idx) => ({
    title: `Factor ${String(idx + 1).padStart(2, '0')}`,
    label: `Factor ${String(idx + 1).padStart(2, '0')}`,
    value: f.label,
    description: f.label
  }));

  // 5. Data mapping for Second Guest ValueBreakdownSplit (Section 6)
  const secondGuestIncluded = pageData.secondGuestOffers.map(o => ({
    title: o.label,
    description: "Available on select qualifying stateroom categories."
  }));
  const secondGuestExtras = [
    {
      title: "Fare-Type Restrictions",
      description: "Eligibility depends on the specific promotion, sailing, and fare type (refundable vs. non-refundable)."
    },
    {
      title: "Group & Charter Exclusions",
      description: pageData.secondGuestEligibility
    }
  ];

  // 6. Data mapping for 3rd, 4th & 5th Guest GenericChecklistCards (Section 7)
  const additionalGuestCards = [
    {
      title: "Promotional Structure",
      items: [
        pageData.additionalGuests.description,
        pageData.additionalGuests.note
      ]
    },
    {
      title: pageData.additionalGuests.usefulHeading,
      items: pageData.additionalGuests.usefulFor.map(u => u.label)
    }
  ];

  // 7. Data mapping for Onboard Credit & Upgrades CostValueAnalysisCards (Section 8)
  const obcIncluded = pageData.onboardCredit.paragraphs.map((p, i) => ({
    title: `Onboard Credit Detail ${i + 1}`,
    description: p
  }));
  const upgradeExtras = [
    { title: pageData.cabinUpgrades.title, description: pageData.cabinUpgrades.description },
    ...pageData.cabinUpgrades.goodWhen.map(g => ({ title: "Upgrade Advantage", description: g })),
    { title: "Capacity Note", description: pageData.cabinUpgrades.note }
  ];

  // 8. Data mapping for Tier Benefits CardGrid (Section 11)
  const tierCards = Object.values(pageData.tiers).map(tier => ({
    icon: tier.name === "Zenith" ? "Crown" : tier.name.includes("Elite") ? "Award" : tier.name === "Select" ? "Star" : "CheckCircle",
    title: `${tier.name} (${tier.points})`,
    description: tier.intro,
    bullets: [
      ...tier.benefits.map(b => b.label),
      tier.footer
    ]
  }));

  // 9. Data mapping for Milestone InteractivePlanningRoadmap (Section 12)
  const milestoneSteps = pageData.milestones.map(m => ({
    timeframe: m.timeframe,
    title: m.title,
    description: `${m.description} ${m.tags.join(' • ')}`
  }));

  // 10. Data mapping for Earning & Power Up Points ThreeColumnGrid (Section 13)
  const earningGridItems = [
    {
      title: "Sailing Stateroom & Nights",
      category: "AT SEA",
      description: pageData.earnDetail,
      stats: [
        { label: "Factor 1", value: "Stateroom" },
        { label: "Factor 2", value: "Nights" }
      ]
    },
    {
      title: "Power Up Points Program",
      category: "BETWEEN CRUISES",
      description: pageData.powerUpDetail,
      stats: [
        { label: "Exchange", value: "10 to 1" },
        { label: "Cadence", value: "Monthly" }
      ]
    },
    {
      title: "Eligible Online Activities",
      category: "EARNING METHODS",
      description: `Participate in ${pageData.powerUpActivities.map(a => a.label).join(', ')} to accumulate loyalty credits without setting foot on a ship.`,
      stats: [
        { label: "Activities", value: "Surveys" },
        { label: "Learning", value: "Webinars" }
      ]
    }
  ];

  // 11. Data mapping for Status Match BudgetBreakdownTable (Section 14)
  const statusMatchTableData = {
    title: "Celebrity Status Match Matrix (Royal Caribbean & Silversea)",
    description: "Qualifying members can receive a corresponding membership level across Royal Caribbean Crown & Anchor Society, Celebrity Captain's Club, and Silversea Venetian Society (effective July 1, 2026).",
    headers: ["Royal Caribbean Status", "Celebrity Captain's Club Tier"],
    rows: pageData.statusMatchTiers.map(t => [t.royal, t.celebrity])
  };

  // 12. Data mapping for Onboard Perks BentoGlassmorphismGrid (Section 15)
  const onboardPerksBentoItems = [
    {
      title: "Specialty Drink Package Discounts",
      description: pageData.drinkDiscounts.map(d => `${d.feature}: ${d.detail}`).join(' | '),
      badge: "Drink Packages"
    },
    {
      title: "Tiered Wi-Fi Connectivity Discounts",
      description: pageData.wifiDiscounts.map(w => `${w.feature}: ${w.detail}`).join(' | '),
      badge: "Wi-Fi Access"
    },
    {
      title: "Specialty Dining Cover Charges",
      description: pageData.diningBenefits.map(db => `${db.feature}: ${db.detail}`).join(' | ') + ". Milestone levels provide additional dining savings.",
      badge: "Specialty Dining"
    },
    {
      title: "Member-Only Exclusive Cruise Offers",
      description: pageData.exclusiveOffers.map(eo => eo.label).join(' • ') + ". Exclusive offers reserved specifically for Captain's Club members.",
      badge: "Exclusive Offers"
    }
  ];

  // 13. Data mapping for Laundry Benefits PricingTiersCards (Section 16)
  const laundryPricingItems = pageData.laundryBenefits.map(lb => ({
    name: lb.name,
    price: lb.bestFor,
    nights: "Tier Perk",
    description: lb.feature
  }));

  // 14. Data mapping for Club vs Promo DualBrandComparisonTable (Section 17)
  const clubVsPromoRows = pageData.clubVsPromo.map(row => ({
    category: row.club.split(' ')[0] + " Aspect",
    avalon: row.club,
    ama: row.promo,
    winner: "Compare Both"
  }));

  // 15. Data mapping for Group Cruise Types BrandPillarsShowcase (Section 18)
  const groupPillarsData = {
    title: "Types of Celebrity Group Cruises",
    subtitle: "A standard Celebrity group generally begins at eight staterooms or more (five for Galápagos).",
    pillars: pageData.groupTypes.map((gt, i) => ({
      title: gt.name,
      description: `${gt.intro} ${gt.bullets.join(', ')}. ${gt.highlight}`,
      icon: i === 0 ? "ship" : i === 1 ? "star" : "compass"
    }))
  };

  // 16. Data mapping for Group Benefits CuratedComforts (Section 19)
  const groupComfortsData = {
    title: "Celebrity Group Cruise Benefits & Rewards",
    subtitle: "Dedicated Planning, Flexible Payments & Leader Rewards",
    items: [
      {
        title: "Dedicated Group Planning & Venue Options",
        description: `${pageData.groupBenefits.map(b => b.label).join(', ')}. ${pageData.groupBenefitsNote}`
      },
      {
        title: "Exclusive Group Leader Rewards",
        description: `Group bookings can provide rewards for the group leader, including onboard credits for: ${pageData.groupRewards.join(', ')}. ${pageData.groupRewardsNote}`
      },
      {
        title: "Group Pricing vs. Public Offers",
        description: pageData.groupVsPublic
      },
      {
        title: "Price Lock Guarantee",
        description: "For groups of eight staterooms or more, Celebrity can hold cruise-fare pricing for 30 days while arrangements are finalized."
      },
      {
        title: "Galápagos Group Program",
        description: "Celebrity states that Galápagos group bookings can require five staterooms under its dedicated group program."
      }
    ]
  };

  // 17. Data mapping for Traveler Personas (Section 21)
  const travelerPersonas = pageData.whoBenefits.map(wb => ({
    title: wb.feature,
    description: wb.detail,
    icon: wb.feature === "Couples" ? "Heart" : wb.feature === "Families" ? "Landmark" : wb.feature.includes("Royal") ? "Gem" : wb.feature.includes("Silversea") ? "Wine" : "Camera"
  }));

  // 18. Data mapping for Why Plan With Us LuxuryGrid (Section 24)
  const whyPlanLuxuryGridItems = pageData.whyPlan.map(wp => ({
    title: wp.title,
    description: "Our certified advisors verify combinations, loyalty tier rules, and price locks to ensure you secure the genuine best deal.",
    icon: "check"
  }));

  // 19. Schema.org JSON-LD Graph (Exact site schema pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/",
        "name": pageData.seo.title,
        "headline": pageData.seo.metaTitle,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": pageData.seo.imageUrl,
          "caption": pageData.seo.title
        },
        "image": pageData.seo.imageUrl,
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
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Celebrity Cruises",
          "Captain's Club Loyalty",
          "Cruise Promotions",
          "Group Cruise Planning",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/#breadcrumb",
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
            "name": "Celebrity Offers & Captain's Club Benefits",
            "item": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/offers-loyalty/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question.replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="w-full bg-white">
        {/* ─── SECTION 1: Hero (ComparisonHero Component) ─── */}
        <ComparisonHero
          badge={pageData.hero.badge}
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          primaryCtaText={pageData.hero.primaryCta}
          primaryCtaLink={pageData.hero.primaryCtaLink}
          secondaryCtaText={pageData.hero.secondaryCta}
          secondaryCtaLink={pageData.hero.secondaryCtaLink}
        />

        {/* ─── SECTION 2: Overview (PremiumIntro Component) ─── */}
        <PremiumIntro
          sections={introSections}
          watermarkText="Offers"
        />

        {/* ─── SECTION 3: What Are Celebrity Cruise Offers? (ExpertAuthorityChecklist Component) ─── */}
        <div className="relative">
          <ExpertAuthorityChecklist
            title={pageData.intro.quickAnswerHeading}
            subtitle={pageData.intro.quickAnswer}
            points={pageData.intro.offerTypes}
          />
          <div className="max-w-3xl mx-auto px-6 -mt-10 pb-12 text-center relative z-10">
            <p className="font-sans text-xs md:text-sm text-slate-600 italic bg-white border border-slate-200/90 rounded-full py-2.5 px-6 shadow-sm inline-block">
              {pageData.intro.quickAnswerFooter}
            </p>
          </div>
        </div>

        {/* ─── SECTION 4: Program Overview (ComparisonTable Component) ─── */}
        <ComparisonTable
          data={glanceTableData}
        />

        {/* ─── SECTION 4: Current Offers & $650 OBC (FeatureSplit Component) ─── */}
        <FeatureSplit
          title={pageData.currentOffers.title}
          subtitles={[pageData.currentOffers.eyebrow, pageData.currentOffers.description]}
          features={currentOffersFeatures}
          summary={`${pageData.currentOffers.detail}\n\n${pageData.currentOffers.importantNote}`}
          theme="white"
          imagePosition="right"
        />

        {/* ─── SECTION 5: Savings Factors (BentoQuickFacts Component) ─── */}
        <section className="w-full bg-white">
          <BentoQuickFacts
            title="Celebrity Cruise Deals: What Can You Save?"
            paragraphs={[
              "The value of a Celebrity promotion depends on:"
            ]}
            items={savingsFactorsItems}
          />
          <div className="max-w-4xl mx-auto px-6 -mt-8 pb-16 text-center">
            <p className="font-sans text-sm md:text-base text-slate-600 bg-ice-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm leading-relaxed">
              {pageData.savingsNote}
            </p>
          </div>
        </section>

        {/* ─── SECTION 6: Second Guest Offers (ValueBreakdownSplit Component) ─── */}
        <ValueBreakdownSplit
          title="Celebrity Second Guest Offers"
          subtitle="One of the most searched Celebrity promotions involves discounts for the second guest."
          includedTitle="Eligible Promotions"
          extrasTitle="Terms & Restrictions"
          included={secondGuestIncluded}
          extras={secondGuestExtras}
        />

        {/* ─── SECTION 7: 3rd, 4th & 5th Guest Offers (GenericChecklistCards Component) ─── */}
        <GenericChecklistCards
          title={pageData.additionalGuests.title}
          subtitle="Family & Multi-Guest Accommodations"
          cards={additionalGuestCards}
        />

        {/* ─── SECTION 8: Onboard Credit & Cabin Upgrades (CostValueAnalysisCards Component) ─── */}
        <CostValueAnalysisCards
          title="Onboard Credit & Cabin Upgrade Offers"
          subtitle="Evaluating high-value stateroom incentives and onboard spending credits."
          includedTitle="Onboard Credit Incentives"
          extrasTitle="Cabin Upgrade Opportunities"
          included={obcIncluded}
          extras={upgradeExtras}
        />

        {/* ─── SECTION 9: Capacity & Combinability (ExpertReviewVerdict Component) ─── */}
        <ExpertReviewVerdict
          title="Are Celebrity Cruise Offers Available on Every Sailing & Combinable?"
          prosTitle="Capacity Controlled Realities"
          pros={pageData.capacityFactors}
          consTitle="Combinability Guidelines"
          cons={[
            "Promotional terms specify which offers may be combined",
            "Certain savings or OBC combine with select 2nd-guest offers",
            "Never assume every Celebrity offer stacks with another",
            "Captain's Club benefits have separate combinability rules",
            "Public sales fares generally do not combine automatically with member perks"
          ]}
          bottomNote={`${pageData.capacityNote} ${pageData.combinabilityText}`}
        />

        {/* ─── SECTION 10: Captain's Club Point Thresholds (LuxuryCruiseComparisonTable Component) ─── */}
        <LuxuryCruiseComparisonTable
          title="Celebrity Captain's Club Tiers & Point Thresholds"
          headers={["Loyalty Tier", "Club Point Range"]}
          rows={pageData.tierTable.map(t => [t.feature, t.detail])}
        />

        {/* ─── SECTION 11: Tier by Tier Benefits (CardGrid Component) ─── */}
        <CardGrid
          title="Captain's Club Tier Benefits"
          subtitle="Each Captain's Club tier unlocks a progressively richer set of benefits."
          columns={3}
          cards={tierCards}
        />

        {/* ─── SECTION 12: Milestone Benefits (InteractivePlanningRoadmap Component) ─── */}
        <InteractivePlanningRoadmap
          title="Celebrity Captain's Club Milestone Benefits"
          subtitle="Milestone benefits beginning at higher Club Point levels for sailings departing on or after June 11, 2026."
          steps={milestoneSteps}
        />

        {/* ─── SECTION 13: Earning Points & Power Up Points (ThreeColumnGrid Component) ─── */}
        <ThreeColumnGrid
          title="How to Earn Club Points & Power Up Points"
          subtitle="Accelerating your loyalty status at sea and from home."
          items={earningGridItems}
        />

        {/* ─── SECTION 14: Cross-Brand Status Match (BudgetBreakdownTable Component) ─── */}
        <BudgetBreakdownTable
          data={statusMatchTableData}
        />

        {/* ─── SECTION 15: Member-Only Perks (BentoGlassmorphismGrid Component) ─── */}
        <BentoGlassmorphismGrid
          title="Captain's Club Onboard Savings & Discounts"
          subtitle="Exclusive Drink, Wi-Fi, Specialty Dining and Member-Only Perks"
          bentoItems={onboardPerksBentoItems}
        />

        {/* ─── SECTION 16: Laundry Benefits by Tier (PricingTiersCards Component) ─── */}
        <PricingTiersCards
          title="Celebrity Captain's Club Laundry Benefits"
          subtitle="Practical everyday perks that become exceptionally valuable on longer voyages."
          items={laundryPricingItems}
        />

        {/* ─── SECTION 17: Captain's Club vs Cruise Promotion (DualBrandComparisonTable Component) ─── */}
        <DualBrandComparisonTable
          title="Celebrity Captain's Club vs. Current Cruise Offers"
          subtitle="Two completely different value programs"
          headers={["Program Aspect", "Captain's Club", "Cruise Promotion", "Strategy"]}
          rows={clubVsPromoRows}
        />

        {/* ─── SECTION 18: Types of Celebrity Group Cruises (BrandPillarsShowcase Component) ─── */}
        <BrandPillarsShowcase
          data={groupPillarsData}
        />

        {/* ─── SECTION 19: Group Benefits & Rewards (CuratedComforts Component) ─── */}
        <CuratedComforts
          data={groupComfortsData}
        />

        {/* ─── SECTION 20: 7-Step Planning Walkthrough (StepByStepGuide Component) ─── */}
        <StepByStepGuide
          title="How to Find the Best Celebrity Cruise Offer"
          subtitle="A 7-step comprehensive planning walkthrough"
          steps={pageData.steps}
        />

        {/* ─── SECTION 21: Who Benefits Most (TravelerPersonaCards Component) ─── */}
        <TravelerPersonaCards
          title="Celebrity Cruise Offers: Who Benefits Most?"
          subtitle="Targeted Travel Personas"
          personas={travelerPersonas}
        />

        {/* ─── SECTION 22: Pros & Cons (ProsConsCards Component) ─── */}
        <ProsConsCards
          title="Celebrity Offers Pros & Cons"
          prosTitle="Celebrity Offers Advantages"
          consTitle="Important Limitations & Cons"
          bestFor={pageData.worthIt}
          notBestFor={pageData.cons}
          bottomNote={`${pageData.worthItText} ${pageData.worthItFormula}`}
        />

        {/* ─── SECTION 23: Angela Hughes Authority & Credentials (ExpertCredentials Component) ─── */}
        <ExpertCredentials
          name={pageData.expert.name}
          title={pageData.expert.title}
          image={ProfilePictureAH}
          quote={pageData.expert.quote}
          quoteSubtitle={pageData.expert.headline}
          bio={pageData.expert.lead}
          credentials={pageData.expert.expertise}
          ctaText="Compare My Celebrity Cruise Offers"
          ctaLink="/contact"
        />

        {/* ─── SECTION 24: Why Plan With Trips & Ships (LuxuryGrid Component) ─── */}
        <LuxuryGrid
          title="Why Plan Celebrity Offers With Trips & Ships Luxury Travel?"
          subtitle="The goal is to evaluate the complete vacation value, not just the advertised discount."
          items={whyPlanLuxuryGridItems}
        />

        {/* ─── SECTION 25: Frequently Asked Questions (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Essential questions on Celebrity promotions, Captain's Club, tiers, and group bookings.",
            faqs: pageData.faqs
          }}
        />

        {/* ─── SECTION 26: Final CTA (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.centerCta.title}
          description={pageData.centerCta.description}
          buttonText={pageData.centerCta.primaryCta}
          buttonLink="/contact"
        />
      </main>

      <Navbar />
    </>
  );
}

export default Celebrityoffersloyalty;