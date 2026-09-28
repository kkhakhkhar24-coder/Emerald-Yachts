import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Icons
import {
  Ship,
  MapPin,
  Users,
  CheckCircle,
  Sparkles,
  Compass,
  Anchor,
  Calendar,
  DollarSign,
  AlertCircle,
  Snowflake,
  Heart,
  Utensils,
  Wine,
  Sun,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Bed,
  Waves,
  Phone,
  LayoutList,
  Check,
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
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';

function CelebrityCruisesGuide() {
  // 1. Map Intro for PremiumIntro (Placeholders enabled)
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Map Featured Ships for HighlightsSplit (Placeholders enabled)
  const featuredShipHighlights = [
    {
      title: pageData.featuredShips.ascent.title,
      description: pageData.featuredShips.ascent.lead,
      bulletPoints: pageData.featuredShips.ascent.features,
      image: null,
      placeholderLabel: 'Celebrity Ascent — Edge Series Ship',
      icon: 'Ship',
    },
    {
      title: pageData.featuredShips.xcel.title,
      description: `${pageData.featuredShips.xcel.lead} ${pageData.featuredShips.xcel.body}`,
      image: null,
      placeholderLabel: 'Celebrity Xcel — Modern Architecture',
      icon: 'Sparkles',
    },
  ];

  // 3. Map Who Should Choose for CostValueAnalysisCards
  const suitedIncluded = pageData.knownForAndSuited.suitedList.map((item) => ({
    title: item,
    description: 'Designed for discerning travelers seeking premium modern ship amenities.',
  }));

  const suitedExtras = [
    {
      title: 'Different Travel Styles',
      description:
        pageData.knownForAndSuited.footerNote ||
        'Travelers seeking small expedition vessels or ultra-luxury boutique yachts should explore specialized alternatives.',
    },
  ];

  // 4. Map Destinations to ThreeColumnGrid format (Placeholders enabled)
  const destinationItems = [
    {
      title: pageData.destinations.caribbean.title,
      category: 'Tropical Coastlines',
      description: `${pageData.destinations.caribbean.lead} Top ports: ${pageData.destinations.caribbean.ports.join(', ')}.`,
      image: null,
      placeholderLabel: 'Caribbean Ports & Islands',
    },
    {
      title: pageData.destinations.mediterranean.title,
      category: 'European Culture',
      description: `${pageData.destinations.mediterranean.lead} Popular regions: ${pageData.destinations.mediterranean.regions.join(', ')}.`,
      image: null,
      placeholderLabel: 'Mediterranean & Europe',
    },
    {
      title: 'Alaska & Galápagos Expeditions',
      category: 'Scenic & Wildlife Journeys',
      description:
        'Scenic glacier viewing in Alaska and all-suite wildlife exploration in the Galápagos aboard Celebrity Flora.',
      image: null,
      placeholderLabel: 'Global & Expedition Regions',
    },
  ];

  // 5. Map Dining Styles to ThreeColumnGrid format (Placeholders enabled)
  const diningStyleItems = pageData.dining.styles.items.map((item) => {
    return {
      title: item.title,
      category: 'Dining Experience',
      description: item.desc,
      image: null,
      placeholderLabel: `${item.title} Dining Experience`,
    };
  });

  // 6. Map 5-Step Ship Selection to InteractivePlanningRoadmap (Placeholders enabled)
  const roadmapSteps = pageData.chooseShipSteps.steps.map((step, idx) => {
    return {
      timeframe: `Step 0${idx + 1}`,
      title: step.title,
      description: step.desc,
      image: null,
      placeholderLabel: `Step 0${idx + 1}: ${step.title}`,
    };
  });

  // 7. Map First-Time Tips to InteractivePlanningRoadmap (Placeholders enabled)
  const firstTimeSteps = pageData.firstTimeTips.tips.map((step, idx) => {
    return {
      timeframe: `Tip 0${idx + 1}`,
      title: step.title,
      description: step.desc,
      image: null,
      placeholderLabel: `Tip 0${idx + 1}: ${step.title}`,
    };
  });

  // 8. Map Curated Guides for InteractivePillarHubGrid (Placeholders enabled)
  const curatedGuideItems = pageData.curatedGuides.map((guide) => {
    return {
      title: guide.title,
      category: guide.category,
      description: guide.description,
      image: null,
      placeholderLabel: guide.title,
      links: guide.links,
      mainUrl: guide.mainUrl,
    };
  });

  // Schema LD+JSON Graph
  const ccSchemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageData.seo.canonical}#webpage`,
        url: pageData.seo.canonical,
        name: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageData.seo.canonical },
        breadcrumb: { '@id': `${pageData.seo.canonical}#breadcrumb` },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
      },
      {
        '@type': 'Article',
        '@id': `${pageData.seo.canonical}#article`,
        url: pageData.seo.canonical,
        headline: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageData.seo.canonical },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageData.seo.canonical}#faq`,
        mainEntity: pageData.faqs.questions.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageData.seo.canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tripsandships.com' },
          { '@type': 'ListItem', position: 2, name: 'Celebrity Cruises', item: pageData.seo.canonical },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.tripsandships.com#organization',
        name: 'Trips and Ships',
        url: 'https://www.tripsandships.com',
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
        <script type="application/ld+json">{JSON.stringify(ccSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (Image Placeholder / Clean Navy Background) ─── */}
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

      {/* ─── SECTION 2: INTRO (PremiumIntro with Placeholders) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        alt1="Celebrity Cruises Modern Ship Architecture"
        alt2="Celebrity Cruises Suite & Dining Amenities"
        watermarkText="Celebrity"
      />

      {/* ─── SECTION 3: WHAT IS CELEBRITY KNOWN FOR & SUITABILITY ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              {pageData.knownForAndSuited.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
              {pageData.knownForAndSuited.title}
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-light">
              <p>{pageData.knownForAndSuited.description1}</p>
              <p>{pageData.knownForAndSuited.description2}</p>
              <p>{pageData.knownForAndSuited.description3}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 4: WHO SHOULD CHOOSE CELEBRITY CRUISES ─── */}
      <CostValueAnalysisCards
        title={pageData.knownForAndSuited.bestSuitedTitle}
        subtitle="Comparing how Celebrity Cruises matches your travel style and vacation goals."
        includedTitle={pageData.knownForAndSuited.bestSuitedTitle}
        extrasTitle="Considerations & Alternatives"
        included={suitedIncluded}
        extras={suitedExtras}
      />

      {/* ─── SECTION 5: EDGE SERIES TABLE ─── */}
      <ComparisonTable
        data={{
          title: `${pageData.edgeSeries.eyebrow} — ${pageData.edgeSeries.title}`,
          headers: pageData.edgeSeries.headers,
          rows: pageData.edgeSeries.ships.map((s) => [s.ship, s.notable, s.regions]),
        }}
      />

      {/* ─── SECTION 6: FEATURED SHIPS (HighlightsSplit: Ascent & Xcel) ─── */}
      <HighlightsSplit
        title="Featured Edge Series Ships"
        subtitle="Explore cutting-edge amenities, modern architecture, and innovative open-air spaces."
        items={featuredShipHighlights}
      />

      {/* ─── SECTION 7: SOLSTICE, MILLENNIUM & CELEBRITY FLORA ─── */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-3 block">
              {pageData.fleetMore.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              {pageData.fleetMore.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Solstice Series */}
            <FadeIn delay={0.1}>
              <div className="bg-navy-900/90 border border-navy-800 rounded-3xl p-8 h-full shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <Ship size={20} />
                  </div>
                  <h3 className="font-display text-2xl text-white">
                    {pageData.fleetMore.solstice.title}
                  </h3>
                </div>
                <p className="font-sans text-ice-200 text-sm mb-6 leading-relaxed">
                  {pageData.fleetMore.solstice.description}
                </p>
                <div className="space-y-3">
                  {pageData.fleetMore.solstice.ships.map((ship, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-navy-950/80 border border-navy-800 text-sm text-ice-100"
                    >
                      <span className="font-medium flex items-center gap-2">
                        <Ship size={14} className="text-gold-400" />
                        {ship}
                      </span>
                      <ArrowRight size={14} className="text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Millennium Series */}
            <FadeIn delay={0.2}>
              <div className="bg-navy-900/90 border border-navy-800 rounded-3xl p-8 h-full shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <Ship size={20} />
                  </div>
                  <h3 className="font-display text-2xl text-white">
                    {pageData.fleetMore.millennium.title}
                  </h3>
                </div>
                <p className="font-sans text-ice-200 text-sm mb-6 leading-relaxed">
                  {pageData.fleetMore.millennium.description}
                </p>
                <div className="space-y-3">
                  {pageData.fleetMore.millennium.ships.map((ship, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-navy-950/80 border border-navy-800 text-sm text-ice-100"
                    >
                      <span className="font-medium flex items-center gap-2">
                        <Ship size={14} className="text-gold-400" />
                        {ship}
                      </span>
                      <ArrowRight size={14} className="text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Celebrity Flora Banner */}
          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center shrink-0">
                <Snowflake size={32} />
              </div>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 mb-1 block">
                  {pageData.fleetMore.flora.tag}
                </span>
                <h4 className="font-display text-2xl text-white mb-2">
                  {pageData.fleetMore.flora.title}
                </h4>
                <p className="font-sans text-ice-200 text-sm md:text-base leading-relaxed">
                  {pageData.fleetMore.flora.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 8: DESTINATIONS SHOWCASE (ThreeColumnGrid with Placeholders) ─── */}
      <ThreeColumnGrid
        title="Where Does Celebrity Cruises Sail?"
        subtitle="From the sunny Caribbean and historic Mediterranean ports to scenic Alaska and the Galápagos."
        items={destinationItems}
      />

      {/* ─── SECTION 9: ITINERARY SELECTION TABLE ─── */}
      <div id="itineraries">
        <ComparisonTable
          data={{
            title: pageData.itinerarySelection.title,
            headers: pageData.itinerarySelection.headers,
            rows: pageData.itinerarySelection.tripLengths.map((t) => [
              t.length,
              t.goodFor,
              t.consider,
            ]),
          }}
        />
      </div>

      {/* ─── SECTION 10: ACCOMMODATIONS (Interior, Veranda, Infinite Veranda, AquaClass, The Retreat) ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              {pageData.accommodations.interiorAndOceanView.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              Staterooms &amp; The Retreat Suite Living
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Interior & Ocean View */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center">
                      <Bed size={20} />
                    </div>
                    <h3 className="font-display text-2xl text-navy-950">
                      {pageData.accommodations.interiorAndOceanView.title}
                    </h3>
                  </div>
                  <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {pageData.accommodations.interiorAndOceanView.lead}
                  </p>
                  <h4 className="font-sans font-bold text-navy-900 text-sm mb-3">
                    {pageData.accommodations.interiorAndOceanView.body}
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {pageData.accommodations.interiorAndOceanView.goodFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle size={16} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-400 italic pt-4 border-t border-slate-100">
                  {pageData.accommodations.interiorAndOceanView.footnote}
                </p>
              </div>
            </FadeIn>

            {/* Veranda, AquaClass & The Retreat */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center">
                      <Waves size={20} />
                    </div>
                    <h3 className="font-display text-2xl text-navy-950">
                      {pageData.accommodations.verandaAquaClassSuites.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {pageData.accommodations.verandaAquaClassSuites.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle size={16} className="text-gold-500 shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-400 italic pt-4 border-t border-slate-100">
                  {pageData.accommodations.verandaAquaClassSuites.footnote}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: DINING OVERVIEW & STYLES (ThreeColumnGrid with Placeholders) ─── */}
      <ThreeColumnGrid
        title={pageData.dining.overview.title}
        subtitle={`${pageData.dining.overview.lead} Venues include: ${pageData.dining.overview.venues.join(', ')}.`}
        items={diningStyleItems}
      />

      {/* ─── SECTION 12: PACKAGES, ACTIVITIES & WELLNESS (Triple Cards) ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              Onboard Experiences, Packages &amp; Wellness
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Packages */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center mb-6">
                    <Wine size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.onboardPackagesAndWellness.packages.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm mb-6 leading-relaxed">
                    {pageData.onboardPackagesAndWellness.packages.body}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pageData.onboardPackagesAndWellness.packages.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-500 pt-4 border-t border-slate-100 leading-relaxed">
                  {pageData.onboardPackagesAndWellness.packages.note}
                </p>
              </div>
            </FadeIn>

            {/* Activities */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ice-50 text-navy-800 flex items-center justify-center mb-6">
                    <Sun size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.onboardPackagesAndWellness.activities.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm mb-6 leading-relaxed">
                    {pageData.onboardPackagesAndWellness.activities.body}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pageData.onboardPackagesAndWellness.activities.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-500 pt-4 border-t border-slate-100 leading-relaxed">
                  {pageData.onboardPackagesAndWellness.activities.note}
                </p>
              </div>
            </FadeIn>

            {/* Wellness */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.onboardPackagesAndWellness.wellness.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm mb-6 leading-relaxed">
                    {pageData.onboardPackagesAndWellness.wellness.body}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pageData.onboardPackagesAndWellness.wellness.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-500 pt-4 border-t border-slate-100 leading-relaxed">
                  {pageData.onboardPackagesAndWellness.wellness.note}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: TRAVELER PROFILES (Couples, Families & Solo) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              Celebrity Cruises for Every Traveler
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Couples */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-600 mb-2 block">
                    {pageData.travelerProfiles.couples.badge}
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.travelerProfiles.couples.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm mb-6 leading-relaxed">
                    {pageData.travelerProfiles.couples.lead}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pageData.travelerProfiles.couples.priorities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={14} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-400 italic pt-4 border-t border-slate-200">
                  {pageData.travelerProfiles.couples.footnote}
                </p>
              </div>
            </FadeIn>

            {/* Families */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-ice-600 mb-2 block">
                    {pageData.travelerProfiles.families.badge}
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.travelerProfiles.families.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm mb-6 leading-relaxed">
                    {pageData.travelerProfiles.families.lead}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pageData.travelerProfiles.families.considerations.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={14} className="text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-xs text-slate-400 italic pt-4 border-t border-slate-200">
                  {pageData.travelerProfiles.families.footnote}
                </p>
              </div>
            </FadeIn>

            {/* Solo Travelers */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-600 mb-2 block">
                    {pageData.travelerProfiles.solo.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 mb-3">
                    {pageData.travelerProfiles.solo.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
                    {pageData.travelerProfiles.solo.text}
                  </p>
                </div>
                <p className="font-sans text-xs text-slate-400 italic pt-4 border-t border-slate-200">
                  Consult with an advisor to evaluate current single supplement waivers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 14: COSTS TO BUDGET FOR (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: pageData.cost.title,
          headers: pageData.cost.headers,
          rows: pageData.cost.budgetTable.map((item) => [item.expense, item.included]),
        }}
      />

      {/* ─── SECTION 15: BEST TIME TO BOOK ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              {pageData.bestTimeToBook.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6">
              {pageData.bestTimeToBook.title}
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mb-6"></div>
            <p className="font-sans text-slate-700 text-base md:text-lg leading-relaxed font-light mb-8">
              {pageData.bestTimeToBook.lead}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
              {pageData.bestTimeToBook.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle size={18} className="text-gold-500 shrink-0" />
                  <span className="font-sans text-sm text-navy-950 font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {pageData.bestTimeToBook.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 16: HOW TO CHOOSE THE RIGHT SHIP (InteractivePlanningRoadmap with Placeholders) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.chooseShipSteps.title}
        subtitle={pageData.chooseShipSteps.subtext}
        steps={roadmapSteps}
      />

      {/* ─── SECTION 17: CELEBRITY VS OTHER PREMIUM CRUISE LINES (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: pageData.comparisonVsOthers.title,
          headers: pageData.comparisonVsOthers.headers,
          rows: pageData.comparisonVsOthers.factors.map((f) => [f.factor, f.value]),
        }}
      />

      {/* ─── SECTION 18: WHAT TO KNOW BEFORE FIRST CRUISE (InteractivePlanningRoadmap with Placeholders) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.firstTimeTips.title}
        subtitle={pageData.firstTimeTips.subtext}
        steps={firstTimeSteps}
      />

      {/* ─── SECTION 19: 2026-2027 HIGHLIGHTS ─── */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-3 block">
              {pageData.highlights2026.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              {pageData.highlights2026.title}
            </h2>
            <p className="font-sans text-ice-200 max-w-2xl mx-auto text-sm md:text-base">
              {pageData.highlights2026.subtext}
            </p>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-6"></div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {pageData.highlights2026.items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 text-center hover:border-gold-500/50 transition-colors">
                  <TrendingUp size={20} className="text-gold-400 mx-auto mb-2" />
                  <span className="font-sans text-sm text-ice-100 font-medium">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="font-sans text-xs text-ice-300 max-w-3xl mx-auto text-center leading-relaxed">
              {pageData.highlights2026.footer}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 20: ANGELA HUGHES EXPERT CREDENTIALS ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        bio={pageData.expertInsight.bio}
        image={Profile_Picture_AH}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        credentials={pageData.expertInsight.standoutPills}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Cruises Planning"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 21: KEY TAKEAWAYS ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              {pageData.keyTakeaways.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.keyTakeaways.title}
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.keyTakeaways.items.map((takeaway, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full flex flex-col justify-start">
                  <span className="font-mono text-xs font-bold text-gold-600 mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed font-light">
                    {takeaway}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 22: FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 23: CURATED GUIDES HUB (InteractivePillarHubGrid with Placeholders) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Celebrity Cruises Guides & Comparisons"
          subtitle="Discover specialized ship guides, dining reviews, destination itineraries, and competitor showdowns."
          items={curatedGuideItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 24: FINAL CENTER CTA (CenterCTA with Clean Luxury Gradient / Placeholder) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.description}
        buttonText={pageData.cta.primaryButtonText}
        buttonLink={pageData.cta.primaryButtonLink}
        image={null}
      />
    </>
  );
}

export default CelebrityCruisesGuide;