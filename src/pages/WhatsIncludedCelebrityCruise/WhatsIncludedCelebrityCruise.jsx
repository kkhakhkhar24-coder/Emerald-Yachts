import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Icons
import {
  Ship,
  CheckCircle,
  XCircle,
  Wine,
  Coffee,
  Martini,
  Wifi,
  Waves,
  Dumbbell,
  Baby,
  MapPin,
  Sparkles,
  Award,
  Crown,
  AlertCircle,
  HelpCircle,
  Phone,
  LayoutList,
  ArrowRight,
  Music,
  Star,
  Globe,
  Utensils,
  Mic,
  Gem,
  Moon,
  DollarSign,
  CreditCard,
  Users,
  Compass,
  Play,
} from 'lucide-react';

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';

function WhatsIncludedCelebrityCruise() {
  // 1. Intro Sections Mapping (Placeholders enabled)
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Core Fare Inclusions Mapping for CostValueAnalysisCards
  const coreFareIncluded = pageData.coreFareInclusions.items.map((item) => ({
    title: item,
    description: 'Standard inclusion across all Celebrity Cruise fares.',
  }));

  const coreFareExtras = [
    {
      title: 'Ship & Itinerary Dependent',
      description: `${pageData.coreFareInclusions.description} ${pageData.coreFareInclusions.footerNote}`,
    },
    {
      title: 'Beverages, Wi-Fi & Gratuities',
      description: 'Optional separately on Cruise-Only rates or bundled when selecting All Included.',
    },
  ];

  // 3. Glance Table Data
  const glanceTableData = {
    title: pageData.glanceTable.title,
    headers: pageData.glanceTable.headers,
    rows: pageData.glanceTable.rows.map((row) => [
      row.feature,
      row.cruiseOnly,
      row.allIncluded,
    ]),
  };

  // 4. Dining Split Highlights (Placeholders enabled)
  const diningHighlights = [
    {
      title: pageData.dining.included.title,
      description: pageData.dining.included.lead,
      bulletPoints: pageData.dining.included.options,
      image: null,
      placeholderLabel: 'Main Dining Room Experience Aboard Celebrity Cruises',
      icon: 'Utensils',
    },
    {
      title: pageData.dining.specialty.title,
      description: `${pageData.dining.specialty.lead} ${pageData.dining.specialty.footnote}`,
      bulletPoints: pageData.dining.specialty.cuisines,
      image: null,
      placeholderLabel: 'Specialty Dining Restaurant Aboard Celebrity Cruises',
      icon: 'Sparkles',
    },
  ];

  // 5. Drinks Showcase for ThreeColumnGrid (Placeholders enabled)
  const drinksOptionsItems = pageData.drinks.options.map((opt) => ({
    title: opt.title,
    category: opt.badge || 'Drink Option',
    description: opt.description,
    image: null,
    placeholderLabel: `${opt.title} Beverage Selection`,
  }));

  // 6. Wi-Fi Comparison Table
  const wifiTableData = {
    title: pageData.wifi.comparison.title,
    headers: pageData.wifi.comparison.headers,
    rows: pageData.wifi.comparison.rows.map((row) => [
      row.feature,
      row.basic,
      row.premium,
    ]),
  };

  // 7. Recreation Items for ThreeColumnGrid (Placeholders enabled)
  const recreationItems = [
    {
      title: pageData.recreation.pools.title,
      category: 'Deck & Relaxation',
      description: `${pageData.recreation.pools.body} Features: ${pageData.recreation.pools.features.join(', ')}. ${pageData.recreation.pools.note}`,
      image: null,
      placeholderLabel: 'Pools & Outdoor Spaces',
    },
    {
      title: pageData.recreation.fitness.title,
      category: 'Wellness & Health',
      description: `${pageData.recreation.fitness.body} Features: ${pageData.recreation.fitness.features.join(', ')}. ${pageData.recreation.fitness.note}`,
      image: null,
      placeholderLabel: 'Fitness Center Equipment',
    },
    {
      title: pageData.recreation.kids.title,
      category: 'Family & Youth',
      description: `${pageData.recreation.kids.body} Features: ${pageData.recreation.kids.features.join(', ')}. ${pageData.recreation.kids.note}`,
      image: null,
      placeholderLabel: 'Camp at Sea Youth Club',
    },
  ];

  // 8. Extras Good To Know Items for ThreeColumnGrid (Placeholders enabled)
  const extrasGoodToKnowItems = [
    {
      title: pageData.extrasGoodToKnow.coffee.title,
      category: 'Specialty Coffee',
      description: pageData.extrasGoodToKnow.coffee.text,
      image: null,
      placeholderLabel: 'Café & Specialty Coffee',
    },
    {
      title: pageData.extrasGoodToKnow.roomService.title,
      category: 'In-Cabin Dining',
      description: pageData.extrasGoodToKnow.roomService.text,
      image: null,
      placeholderLabel: 'Stateroom Room Service',
    },
    {
      title: pageData.extrasGoodToKnow.miniBar.title,
      category: 'Stateroom Amenities',
      description: pageData.extrasGoodToKnow.miniBar.text,
      image: null,
      placeholderLabel: 'In-Room Mini-Bar',
    },
  ];

  // 9. All Included Details for ThreeColumnGrid (Placeholders enabled)
  const allIncludedDetailsItems = [
    {
      title: pageData.allIncludedDetails.cost.title,
      category: 'Pricing Factors',
      description: `${pageData.allIncludedDetails.cost.body} Key factors: ${pageData.allIncludedDetails.cost.factors.join(', ')}. ${pageData.allIncludedDetails.cost.note}`,
      image: null,
      placeholderLabel: 'All Included Fare Pricing',
    },
    {
      title: pageData.allIncludedDetails.afterBooking.title,
      category: 'Timing Policy',
      description: `${pageData.allIncludedDetails.afterBooking.body} ${pageData.allIncludedDetails.afterBooking.note}`,
      image: null,
      placeholderLabel: 'Booking Window Rules',
    },
    {
      title: pageData.allIncludedDetails.samePackage.title,
      category: 'Stateroom Policy',
      description: `${pageData.allIncludedDetails.samePackage.body} ${pageData.allIncludedDetails.samePackage.note}`,
      image: null,
      placeholderLabel: 'Stateroom Guest Policies',
    },
  ];

  // 10. Cruise-Only vs All Included Mapping for CostValueAnalysisCards
  const cruiseVsAllIncluded = pageData.cruiseOnlyVsAllIncluded.allIncludedReasons.map((reason) => ({
    title: reason,
    description: 'Included in bundled All Included pricing for total vacation peace of mind.',
  }));

  const cruiseVsAllExtras = pageData.cruiseOnlyVsAllIncluded.cruiseOnlyReasons.map((reason) => ({
    title: reason,
    description: 'Cruise-Only fare provides lowest upfront rate with pay-as-you-go flexibility.',
  }));

  // 11. Budget Phases for InteractivePlanningRoadmap (Placeholders enabled)
  const budgetRoadmapSteps = [
    {
      timeframe: 'Phase 01',
      title: 'Before Sailing',
      description: `Plan upfront expenses: ${pageData.budgetPhases.beforeSailing.join(', ')}.`,
      image: null,
    },
    {
      timeframe: 'Phase 02',
      title: 'During the Cruise',
      description: `Anticipate discretionary costs: ${pageData.budgetPhases.duringCruise.join(', ')}.`,
      image: null,
    },
    {
      timeframe: 'Phase 03',
      title: 'After the Cruise',
      description: `Account for return logistics: ${pageData.budgetPhases.afterCruise.join(', ')}.`,
      image: null,
    },
  ];

  // 12. Best Value Steps for InteractivePlanningRoadmap (Placeholders enabled)
  const bestValueRoadmapSteps = pageData.bestValueSteps.steps.map((step, idx) => ({
    timeframe: `Step 0${idx + 1}`,
    title: step.title,
    description: step.desc,
    image: null,
  }));

  // 13. Category Inclusions Table Data
  const categoryTableData = {
    title: pageData.inclusionsByCategoryTable.title,
    headers: pageData.inclusionsByCategoryTable.headers,
    rows: pageData.inclusionsByCategoryTable.rows.map((row) => [
      row.category,
      row.included,
      row.note,
    ]),
  };

  // 14. Entertainment Icons
  const entertainmentIcons = [
    Music,
    Star,
    Globe,
    Utensils,
    Mic,
    Wine,
    Award,
    Sparkles,
    Gem,
    Moon,
  ];

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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/whats-included',
        name: pageData.seo.title,
        description: pageData.seo.metaDescription,
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included#article',
        headline: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included',
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included#breadcrumb',
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
            name: "What's Included",
            item: 'https://www.tripsandships.com/celebrity-cruises/whats-included',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/whats-included#faq',
        mainEntity: pageData.faqs.questions.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
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

      {/* ─── SECTION 1: Hero (Placeholder Enabled) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.eyebrow}
        backgroundImage={null}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: PremiumIntro (Placeholders Enabled) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="Inclusions"
      />

      {/* ─── SECTION 3: Core Fare Inclusions (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.coreFareInclusions.title}
        subtitle={pageData.coreFareInclusions.eyebrow}
        includedTitle={pageData.coreFareInclusions.chipsTitle}
        extrasTitle="Fare Nuances & Notes"
        included={coreFareIncluded}
        extras={coreFareExtras}
      />

      {/* ─── SECTION 4: Inclusions At A Glance Table (ComparisonTable) ─── */}
      <div id="inclusions-glance">
        <ComparisonTable data={glanceTableData} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
          <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
            <AlertCircle size={18} className="text-gold-500 shrink-0" />
            <span>{pageData.glanceTable.footnote}</span>
          </div>
        </div>
      </div>

      {/* ─── SECTION 5: Food & Specialty Dining (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Culinary Inclusions & Specialty Dining"
        items={diningHighlights}
      />

      {/* ─── SECTION 6: Drinks Included (ThreeColumnGrid + Package Details) ─── */}
      <ThreeColumnGrid
        title={pageData.drinks.title}
        subtitle={pageData.drinks.subtitle}
        items={drinksOptionsItems}
      />

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Wine size={24} className="text-gold-400" />
                <h3 className="font-display text-2xl md:text-3xl text-white">
                  {pageData.drinks.classicPackageTitle}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
                {pageData.drinks.classicPackageItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 text-sm text-ice-100"
                  >
                    <CheckCircle size={14} className="text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 italic">
                {pageData.drinks.note}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: Wi-Fi Inclusions & Comparison Table ─── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
              {pageData.wifi.overview.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
              {pageData.wifi.overview.title}
            </h2>
            <p className="font-sans text-slate-600 max-w-3xl mx-auto mb-4 text-base md:text-lg leading-relaxed">
              {pageData.wifi.overview.lead}
            </p>
            <p className="font-sans text-slate-500 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
              {pageData.wifi.overview.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <ComparisonTable data={wifiTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <Sparkles size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.wifi.comparison.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 8: Gratuities & Onboard Entertainment ─── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Gratuities */}
            <FadeIn direction="right">
              <div className="bg-ice-50 rounded-3xl p-8 md:p-10 border border-ice-100 shadow-sm">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                  {pageData.gratuities.eyebrow}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                  {pageData.gratuities.title}
                </h3>
                <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">
                  {pageData.gratuities.description}
                </p>
              </div>
            </FadeIn>

            {/* Right: Entertainment */}
            <FadeIn direction="left">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                  {pageData.entertainment.eyebrow}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                  {pageData.entertainment.title}
                </h3>
                <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                  {pageData.entertainment.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {pageData.entertainment.items.map((item, idx) => {
                    const Icon =
                      entertainmentIcons[idx % entertainmentIcons.length];
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm text-xs font-medium text-navy-900"
                      >
                        <Icon size={16} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 font-sans text-xs text-slate-400 italic">
                  {pageData.entertainment.footnote}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: Recreation (Pools, Fitness, Kids) (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title="Pools, Fitness & Youth Programming"
        subtitle="Access to resort amenities, sports decks, and Camp at Sea youth spaces."
        items={recreationItems}
      />

      {/* ─── SECTION 10: Shore Excursions & Good To Know ─── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                {pageData.shoreExcursions.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
                {pageData.shoreExcursions.title}
              </h2>
              <p className="font-sans text-slate-600 leading-relaxed">
                {pageData.shoreExcursions.lead}
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {pageData.shoreExcursions.types.map((type, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-navy-900 shadow-sm flex items-center gap-2"
              >
                <MapPin size={14} className="text-gold-500" />
                {type}
              </span>
            ))}
          </div>
          <p className="text-center font-sans text-xs text-slate-400 italic">
            {pageData.shoreExcursions.footnote}
          </p>
        </div>
      </section>

      <ThreeColumnGrid
        title="Coffee, Room Service & Mini-Bar"
        subtitle="Important details on everyday in-stateroom and specialty service charges."
        items={extrasGoodToKnowItems}
      />

      {/* ─── SECTION 11: The Retreat Suite Inclusions ─── */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-navy-800 bg-navy-900/90 flex flex-col items-center justify-center text-center p-8">
                <Crown size={56} className="text-gold-400 mb-4 opacity-80" />
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-2">
                  SUITE-EXCLUSIVE EXPERIENCE
                </span>
                <h3 className="font-display text-2xl text-white mb-2">
                  The Retreat aboard Celebrity
                </h3>
                <span className="text-slate-400 text-xs uppercase tracking-wider">
                  Visual Showcase Placeholder
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-3 block">
                  {pageData.retreat.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                  {pageData.retreat.title}
                </h2>
                <p className="font-sans text-ice-200 leading-relaxed mb-8 text-sm md:text-base">
                  {pageData.retreat.lead}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {pageData.retreat.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 text-sm text-white"
                    >
                      <CheckCircle size={16} className="text-gold-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-xs text-slate-300 italic">
                  {pageData.retreat.body}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: What's Not Included on a Celebrity Cruise ─── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
              {pageData.notIncluded.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.notIncluded.title}
            </h2>
            <p className="font-sans text-slate-600 leading-relaxed">
              {pageData.notIncluded.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-navy-50 rounded-3xl p-8 md:p-12 border border-navy-100 shadow-inner">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-navy-200">
                <XCircle size={24} className="text-navy-400" />
                <h3 className="font-display text-2xl text-navy-900">
                  {pageData.notIncluded.cardHeader}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pageData.notIncluded.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-navy-100 shadow-sm text-sm text-navy-800"
                  >
                    <XCircle size={16} className="text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-sans text-xs text-navy-500 italic text-center">
                {pageData.notIncluded.note}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 13: Cruise-Only vs All Included (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.cruiseOnlyVsAllIncluded.title}
        subtitle={pageData.cruiseOnlyVsAllIncluded.intro}
        includedTitle="Select All Included If:"
        extrasTitle="Select Cruise-Only If:"
        included={cruiseVsAllIncluded}
        extras={cruiseVsAllExtras}
      />

      {/* ─── SECTION 14: All Included Details (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title="All Included Costs, Policies & Timing"
        subtitle="Key booking guidelines to understand before finalizing your reservation."
        items={allIncludedDetailsItems}
      />

      {/* ─── SECTION 15: 3-Phase Budget Timeline (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.budgetPhases.title}
        subtitle={pageData.budgetPhases.intro}
        steps={budgetRoadmapSteps}
      />

      {/* ─── SECTION 16: How to Get Best Value (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.bestValueSteps.title}
        subtitle={pageData.bestValueSteps.intro}
        steps={bestValueRoadmapSteps}
      />

      {/* ─── SECTION 17: Is It All Inclusive? + First-Time Cruisers Checklist ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                  {pageData.isItAllInclusive.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
                  {pageData.isItAllInclusive.title}
                </h2>
                <p className="font-sans text-slate-700 leading-relaxed mb-4 text-base">
                  {pageData.isItAllInclusive.lead}
                </p>
                <p className="font-sans text-slate-600 leading-relaxed mb-8 text-sm">
                  {pageData.isItAllInclusive.description}
                </p>
                <div className="p-6 bg-white rounded-2xl border-l-4 border-gold-500 shadow-sm">
                  <p className="font-serif italic text-navy-900 text-base">
                    "{pageData.isItAllInclusive.quote}"
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl">
                <h3 className="font-display text-2xl text-navy-950 mb-2">
                  {pageData.isItAllInclusive.firstTimeTitle}
                </h3>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Core Fare Covers:
                </p>
                <div className="space-y-3 mb-6">
                  {pageData.isItAllInclusive.firstTimeCore.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-navy-800"
                    >
                      <CheckCircle size={16} className="text-gold-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 pt-4 border-t border-slate-100">
                  Then Verify If Your Fare Bundles:
                </p>
                <div className="space-y-3">
                  {pageData.isItAllInclusive.firstTimeCheck.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-navy-800"
                    >
                      <HelpCircle size={16} className="text-navy-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 18: Inclusions by Category Table (ComparisonTable) ─── */}
      <ComparisonTable data={categoryTableData} />

      {/* ─── SECTION 19: Video Showcase Section (Video Placeholder) ─── */}
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
                <Play size={36} className="fill-gold-400 ml-1" />
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

      {/* ─── SECTION 20: Angela Hughes Authority & Credentials (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        bio={pageData.expertInsight.bio}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Cruise Inclusions"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        image={Profile_Picture_AH}
        credentials={pageData.expertInsight.priorities}
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 21: Key Takeaways ─── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
              {pageData.keyTakeaways.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.keyTakeaways.title}
            </h2>
            <p className="font-sans text-slate-500 leading-relaxed">
              {pageData.keyTakeaways.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.keyTakeaways.items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-ice-50 rounded-2xl p-6 border border-ice-100 shadow-sm h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider font-bold text-navy-800">
                      Takeaway 0{idx + 1}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed flex-grow">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 22: FAQ Accordion (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 23: Conclusion / Booking Advice & Final Verdict ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Visual summary card */}
            <FadeIn direction="right">
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <Award size={32} className="text-gold-400" />
                  <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-400">
                    {pageData.conclusion.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-6">
                  {pageData.conclusion.title}
                </h3>
                <p className="font-serif italic text-ice-200 text-lg leading-relaxed">
                  "{pageData.conclusion.quote}"
                </p>
              </div>
            </FadeIn>

            {/* Right Column: Key summary bullets */}
            <FadeIn direction="left">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-3 block">
                  {pageData.conclusion.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
                  {pageData.conclusion.heading}
                </h2>

                <div className="space-y-4">
                  {pageData.conclusion.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm"
                    >
                      <CheckCircle size={20} className="text-gold-500 mt-1 shrink-0" />
                      <p className="font-sans text-sm text-slate-700 leading-relaxed">
                        <strong className="text-navy-950">{bullet.title} </strong>
                        {bullet.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 24: Center CTA ─── */}
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

export default WhatsIncludedCelebrityCruise;