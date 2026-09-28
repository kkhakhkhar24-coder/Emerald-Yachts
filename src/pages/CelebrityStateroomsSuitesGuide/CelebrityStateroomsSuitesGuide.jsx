import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Icons
import { AlertCircle, Award, Play } from 'lucide-react';

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';

function CelebrityStateroomsSuitesGuide() {
  // 1. Intro Section Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Categories Glance Table for ComparisonTable
  const categoriesGlanceTableData = {
    title: pageData.categoriesGlance.title,
    headers: pageData.categoriesGlance.headers,
    rows: pageData.categoriesGlance.rows.map((row) => [
      row.category,
      row.appeal,
      row.outdoor,
      row.bestFor,
    ]),
  };

  // 3. Inside & Ocean View Highlights for HighlightsSplit
  const standardCabinsHighlights = [
    {
      title: pageData.insideStaterooms.title,
      description: `${pageData.insideStaterooms.lead} ${pageData.insideStaterooms.body} ${pageData.insideStaterooms.footnote}`,
      bulletPoints: pageData.insideStaterooms.worksFor,
      image: null,
      placeholderLabel: 'Inside Stateroom — Practical & Value Focused',
      icon: 'Home',
    },
    {
      title: pageData.oceanViewStaterooms.title,
      description: `${pageData.oceanViewStaterooms.lead} ${pageData.oceanViewStaterooms.body} ${pageData.oceanViewStaterooms.footnote}`,
      bulletPoints: pageData.oceanViewStaterooms.chooseReasons,
      image: null,
      placeholderLabel: 'Ocean View Stateroom — Natural Light with Views',
      icon: 'Eye',
    },
  ];

  // 4. Veranda Staterooms for HighlightsSplit
  const verandaHighlights = [
    {
      title: pageData.verandaStaterooms.title,
      description: `${pageData.verandaStaterooms.lead} ${pageData.verandaStaterooms.body} ${pageData.verandaStaterooms.footnote}`,
      bulletPoints: pageData.verandaStaterooms.bestFor,
      image: null,
      placeholderLabel: 'Traditional Veranda Stateroom — Private Outdoor Space',
      icon: 'Sun',
    },
    {
      title: pageData.infiniteVeranda.title,
      description: `${pageData.infiniteVeranda.lead} ${pageData.infiniteVeranda.body}`,
      bulletPoints: [
        'Integrated convertible balcony at the touch of a button',
        'Approximately 243 sq. ft. total living space with 42 sq. ft. veranda',
        'Signature architectural design of Celebrity Edge Series',
        'Seamless indoor/outdoor floor-to-ceiling panoramic glass',
      ],
      image: null,
      placeholderLabel: 'Infinite Veranda — Edge Series Convertible Living',
      icon: 'Layers',
    },
  ];

  // 5. Infinite Veranda vs Traditional Balcony Table
  const infiniteVsTraditionalTableData = {
    title: pageData.infiniteVeranda.compareTitle,
    headers: pageData.infiniteVeranda.headers,
    rows: pageData.infiniteVeranda.rows.map((row) => [
      row.feature,
      row.infinite,
      row.traditional,
    ]),
  };

  // 6. Single & Concierge Class Highlights for HighlightsSplit
  const singleAndConciergeHighlights = [
    {
      title: pageData.singleStaterooms.title,
      description: `${pageData.singleStaterooms.lead} ${pageData.singleStaterooms.body} ${pageData.singleStaterooms.footnote}`,
      bulletPoints: [
        ...pageData.singleStaterooms.stats.map((s) => `${s.label}: ${s.value}`),
        ...pageData.singleStaterooms.wants,
      ],
      image: null,
      placeholderLabel: 'Edge Single Stateroom with Infinite Veranda',
      icon: 'Users',
    },
    {
      title: pageData.conciergeClass.title,
      description: `${pageData.conciergeClass.lead} ${pageData.conciergeClass.body} ${pageData.conciergeClass.footnote}`,
      bulletPoints: pageData.conciergeClass.wants,
      image: null,
      placeholderLabel: 'Concierge Class Stateroom — Dedicated Service & Amenities',
      icon: 'Star',
    },
  ];

  // 7. AquaClass by Series for BrandPillarsShowcase
  const aquaClassPillarsData = {
    title: pageData.aquaClass.title,
    subtitle: `${pageData.aquaClass.intro} ${pageData.aquaClass.footnote}`,
    pillars: pageData.aquaClass.series.map((item) => ({
      title: item.series,
      description: `${item.specs} ${item.benefits.join(', ')}.`,
      icon: 'star',
    })),
  };

  // 8. The Retreat & Suite Inclusions for HighlightsSplit
  const retreatHighlights = [
    {
      title: pageData.theRetreat.title,
      description: `${pageData.theRetreat.lead} ${pageData.theRetreat.body} ${pageData.theRetreat.footnote}`,
      bulletPoints: pageData.theRetreat.includes,
      image: null,
      placeholderLabel: 'The Retreat — Exclusive Suite Lounge, Sun Deck & Luminae',
      icon: 'Crown',
    },
    {
      title: pageData.suiteExtraBenefits.title,
      description: `${pageData.suiteExtraBenefits.body} ${pageData.suiteExtraBenefits.note}`,
      bulletPoints: [
        'Dedicated Private Luminae Restaurant & Retreat Lounge',
        'Exclusive Sundeck with Private Pool & Bar Access',
        'Dedicated Butler & Concierge Services on Applicable Fares',
        'Premium Drinks, Premium Wi-Fi & Gratuities Included',
      ],
      image: null,
      placeholderLabel: 'Suite Extra Benefits & All-Inclusive Perks',
      icon: 'Gem',
    },
  ];

  // 9. Suite Categories & Profiles for BrandPillarsShowcase
  const suiteProfilesData = {
    title: pageData.suiteProfiles.title,
    subtitle: `${pageData.suiteCategories.intro} ${pageData.suiteCategories.footerNote}`,
    pillars: [
      {
        title: pageData.skySuites.title,
        description: `${pageData.skySuites.intro} Features: ${pageData.skySuites.features.join(', ')}. ${pageData.skySuites.footnote}`,
        icon: 'star',
      },
      ...pageData.suiteProfiles.suites.map((suite) => ({
        title: suite.title,
        description: `${suite.text}${suite.features ? ' Key Features: ' + suite.features.join(', ') + '.' : ''}`,
        icon: 'ship',
      })),
    ],
  };

  // 10. Stateroom Sizes by Ship Class for ComparisonTable
  const stateroomSizesTableData = {
    title: pageData.stateroomSizes.title,
    headers: pageData.stateroomSizes.headers,
    rows: pageData.stateroomSizes.rows.map((row) => [
      row.ship,
      row.accommodation,
      row.size,
    ]),
  };

  // 11. Common Amenities for BrandPillarsShowcase
  const commonAmenitiesData = {
    title: pageData.commonAmenities.title,
    subtitle: `${pageData.commonAmenities.intro} ${pageData.commonAmenities.note}`,
    pillars: pageData.commonAmenities.items.map((item) => ({
      title: item,
      description: 'Standard in-room comfort and luxury design feature available across Celebrity accommodation categories.',
      icon: 'compass',
    })),
  };

  // 12. Balcony Categories for ThreeColumnGrid
  const balconyCategoriesItems = pageData.balconiesOverview.categories.map((cat, idx) => ({
    title: cat,
    category: 'Private Veranda Category',
    description: `Provides dedicated outdoor space and ocean panoramas tailored to scenic voyages and relaxed sea days.`,
    image: null,
    placeholderLabel: `${cat} Outdoor Balcony`,
  }));

  // 13. Veranda vs Infinite Veranda for CostValueAnalysisCards
  const verandaVsInfiniteIncluded = pageData.verandaVsInfinite.traditional.items.map((item) => ({
    title: item,
    description: 'Classic open-air balcony separation with dedicated exterior seating.',
  }));

  const verandaVsInfiniteExtras = pageData.verandaVsInfinite.infinite.items.map((item) => ({
    title: item,
    description: 'Modern indoor/outdoor convertible layout providing expanded interior living space.',
  }));

  // 14. Best Stateroom by Traveler for ComparisonTable
  const bestByTravelerTableData = {
    title: pageData.bestForTravelers.title,
    headers: pageData.bestForTravelers.headers,
    rows: pageData.bestForTravelers.rows.map((row) => [
      row.priority,
      row.category,
    ]),
  };

  // 15. How to Choose Roadmap for InteractivePlanningRoadmap
  const chooseRoadmapSteps = pageData.howToChoose.steps.map((s) => ({
    timeframe: `Step ${s.step}`,
    title: s.title,
    description: s.text,
    image: null,
  }));

  // 16. Staterooms vs Suites for ComparisonTable
  const stateroomsVsSuitesTableData = {
    title: pageData.stateroomsVsSuites.title,
    headers: pageData.stateroomsVsSuites.headers,
    rows: pageData.stateroomsVsSuites.rows.map((row) => [
      row.feature,
      row.standard,
      row.aqua,
      row.retreat,
    ]),
  };

  // 17. Family, Solo & Accessibility for HighlightsSplit
  const specialTravelersHighlights = [
    {
      title: pageData.families.title,
      description: `${pageData.families.lead} ${pageData.families.body}`,
      bulletPoints: pageData.families.checklist,
      image: null,
      placeholderLabel: 'Connecting Staterooms & Family Accommodations',
      icon: 'Users',
    },
    {
      title: pageData.soloTravelers.title,
      description: `${pageData.soloTravelers.lead} ${pageData.soloTravelers.body} ${pageData.soloTravelers.footnote}`,
      bulletPoints: [
        'Dedicated solo-occupancy staterooms',
        'Avoid single supplement charges on select sailings',
        'Infinite Veranda design on Edge Series',
        'Book early for optimal solo cabin availability',
      ],
      image: null,
      placeholderLabel: 'Solo Traveler Dedicated Accommodations',
      icon: 'Users',
    },
    {
      title: pageData.accessibility.title,
      description: `${pageData.accessibility.body} ${pageData.accessibility.note}`,
      bulletPoints: pageData.accessibility.checklist,
      image: null,
      placeholderLabel: 'Accessible Staterooms & Barrier-Free Configurations',
      icon: 'Home',
    },
  ];

  // 18. Cabin Booking Checks & Location Tips for ThreeColumnGrid
  const bookingChecksItems = [
    ...pageData.bookingChecks.items.map((item) => ({
      title: item.title,
      category: 'Pre-Booking Check',
      description: `${item.body}${item.items.length > 0 ? ' ' + item.items.join(', ') : ''}`,
      image: null,
      placeholderLabel: `Cabin Check: ${item.title}`,
    })),
    ...pageData.locationTips.items.map((item) => ({
      title: item.title,
      category: 'Deck Location Tip',
      description: item.text,
      image: null,
      placeholderLabel: `Location: ${item.title}`,
    })),
  ];

  // 19. Maximizing Value for CostValueAnalysisCards
  const spendMoreMapped = pageData.maximizingValue.spendMore.map((item) => ({
    title: item,
    description: 'Higher stateroom investment delivers high return on experience and personal enjoyment.',
  }));

  const spendLessMapped = pageData.maximizingValue.spendLess.map((item) => ({
    title: item,
    description: 'Savings on accommodation can be reallocated toward shore excursions, dining, and spa.',
  }));

  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.tripsandships.com#organization',
        name: 'Trips and Ships',
        url: 'https://www.tripsandships.com',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites',
        name: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites#article',
        headline: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites',
        },
        author: {
          '@type': 'Organization',
          name: 'Trips and Ships',
          url: 'https://www.tripsandships.com',
        },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.tripsandships.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Celebrity Cruises',
            item: 'https://www.tripsandships.com/celebrity-cruises',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Staterooms and Suites',
            item: 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/staterooms-suites#faq',
        mainEntity: pageData.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        eyebrow={pageData.hero.eyebrow}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: INTRO (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="Cabins"
      />

      {/* ─── SECTION 3: CABIN CATEGORIES AT A GLANCE (ComparisonTable) ─── */}
      <div id="categories-glance">
        <ComparisonTable data={categoriesGlanceTableData} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
          <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
            <AlertCircle size={18} className="text-gold-500 shrink-0" />
            <span>{pageData.categoriesGlance.footnote}</span>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: INSIDE & OCEAN VIEW STATEROOMS (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Standard Stateroom Categories: Inside &amp; Ocean View"
        items={standardCabinsHighlights}
      />

      {/* ─── SECTION 5: VERANDA & INFINITE VERANDA (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Balcony Accommodations: Traditional Veranda &amp; Infinite Veranda"
        items={verandaHighlights}
      />

      {/* ─── SECTION 6: INFINITE VERANDA VS TRADITIONAL BALCONY (ComparisonTable) ─── */}
      <ComparisonTable data={infiniteVsTraditionalTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <AlertCircle size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.infiniteVeranda.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 7: SINGLE & CONCIERGE CLASS (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Dedicated Solo Cabins &amp; Elevated Concierge Class"
        items={singleAndConciergeHighlights}
      />

      {/* ─── SECTION 8: AQUACLASS STATEROOMS (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={aquaClassPillarsData} />

      {/* ─── SECTION 9: THE RETREAT SUITE LIVING (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="The Retreat: All-Suite Living &amp; Exclusive Private Venues"
        items={retreatHighlights}
      />

      {/* ─── SECTION 10: SUITE CATEGORIES & PROFILES (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={suiteProfilesData} />

      {/* ─── SECTION 11: STATEROOM SIZES BY SHIP CLASS (ComparisonTable) ─── */}
      <ComparisonTable data={stateroomSizesTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <AlertCircle size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.stateroomSizes.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 12: COMMON IN-ROOM AMENITIES (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={commonAmenitiesData} />

      {/* ─── SECTION 13: BALCONY CATEGORIES (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.balconiesOverview.title}
        subtitle={pageData.balconiesOverview.intro}
        items={balconyCategoriesItems}
      />

      {/* ─── SECTION 14: VERANDA VS INFINITE VERANDA (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.verandaVsInfinite.title}
        subtitle={pageData.verandaVsInfinite.intro}
        includedTitle="Traditional Veranda"
        extrasTitle="Infinite Veranda"
        included={verandaVsInfiniteIncluded}
        extras={verandaVsInfiniteExtras}
      />

      {/* ─── SECTION 15: BEST STATEROOM BY TRAVELER (ComparisonTable) ─── */}
      <ComparisonTable data={bestByTravelerTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <Award size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.bestForTravelers.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 16: HOW TO CHOOSE THE RIGHT CABIN (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.howToChoose.title}
        subtitle="Follow this 5-step process and critical checks to select the perfect stateroom for your voyage."
        steps={chooseRoadmapSteps}
      />

      {/* ─── SECTION 17: STATEROOMS VS SUITES (ComparisonTable) ─── */}
      <ComparisonTable data={stateroomsVsSuitesTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <AlertCircle size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.stateroomsVsSuites.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 18: SPECIAL TRAVELERS: FAMILIES, SOLO & ACCESSIBILITY (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Special Travel Configurations: Families, Solo Guests &amp; Accessibility"
        items={specialTravelersHighlights}
      />

      {/* ─── SECTION 19: CABIN CHECKS & LOCATION TIPS (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.bookingChecks.title}
        subtitle={pageData.bookingChecks.intro}
        items={bookingChecksItems}
      />

      {/* ─── SECTION 20: MAXIMIZING VALUE (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.maximizingValue.title}
        subtitle={`${pageData.maximizingValue.lead} ${pageData.maximizingValue.desc} "${pageData.maximizingValue.quote}"`}
        includedTitle="Consider Spending More When"
        extrasTitle="Consider Spending Less When"
        included={spendMoreMapped}
        extras={spendLessMapped}
      />

      {/* ─── SECTION 21: VIDEO SHOWCASE SECTION (Video Placeholder) ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2 block">
            {pageData.video.title.toUpperCase()}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
            {pageData.video.title}
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            {pageData.video.subtitle}
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-navy-950 p-2">
            <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 flex flex-col items-center justify-center text-center p-8 relative group border border-navy-800">
              <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-4 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play size={36} className="fill-gold-400 ml-1 text-gold-400" />
              </div>
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-2">
                VIDEO PLACEHOLDER
              </span>
              <h3 className="font-display text-xl md:text-2xl text-white max-w-lg mb-2">
                {pageData.video.title}
              </h3>
              <p className="font-sans text-xs text-slate-400 max-w-md">
                {pageData.video.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-6 font-sans text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gold-500 mr-2">
              {pageData.video.captionTag}
            </strong>
            {pageData.video.captionText}
          </p>
        </div>
      </section>

      {/* ─── SECTION 22: ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        bio={pageData.expertInsight.bio}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Stateroom Selection"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        image={Profile_Picture_AH}
        credentials={pageData.expertInsight.standoutPills}
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 23: KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle="8 Essential Takeaways for Selecting Your Ideal Celebrity Stateroom or Suite"
        points={pageData.keyTakeaways.items}
      />

      {/* ─── SECTION 24: FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 25: CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.subtitle}
        buttonText={pageData.cta.primaryButtonText}
        buttonLink={pageData.cta.primaryButtonLink}
        image={null}
      />
    </>
  );
}

export default CelebrityStateroomsSuitesGuide;