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

function CelebrityCruiseShipsCompleteFleetGuide() {
  // 1. Intro Sections Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Fleet Overview Table Data for ComparisonTable
  const fleetOverviewTableData = {
    title: pageData.fleetOverview.title,
    headers: pageData.fleetOverview.headers,
    rows: pageData.fleetOverview.rows.map((row) => [
      row.series,
      row.ships,
      row.defines,
    ]),
  };

  // 3. Is Xcel Newest Ship for HighlightsSplit
  const xcelHighlights = [
    {
      title: pageData.isXcelNewest.title,
      description: `${pageData.isXcelNewest.lead} ${pageData.isXcelNewest.paragraphs.join(' ')}`,
      bulletPoints: [
        'Debuted in the Caribbean in November 2025',
        'Fifth vessel in the revolutionary Edge Series',
        'Operates Caribbean and European deployments',
        'Celebrity Xcite announced for 2028',
      ],
      image: null,
      placeholderLabel: 'Celebrity Xcel — Newest Operating Ship',
      icon: 'Sparkles',
    },
  ];

  // 4. Edge Series Ships for ThreeColumnGrid
  const edgeSeriesItems = pageData.edgeSeries.ships.map((ship) => ({
    title: ship.name,
    category: 'Edge Series Vessel',
    description: `${ship.intro} Deployment: ${ship.deployment}${ship.who?.text ? ' ' + ship.who.text : ''}`,
    image: null,
    placeholderLabel: `${ship.name} — Edge Series`,
  }));

  // 5. Solstice Series Ships for ThreeColumnGrid
  const solsticeSeriesItems = pageData.solsticeSeries.ships.map((ship) => ({
    title: ship.name,
    category: 'Solstice Series Vessel',
    description: `${ship.intro} ${ship.deployment || ''}${ship.who?.text ? ' ' + ship.who.text : ''}`,
    image: null,
    placeholderLabel: `${ship.name} — Solstice Series`,
  }));

  // 6. Millennium Series Ships for ThreeColumnGrid
  const millenniumSeriesItems = pageData.millenniumSeries.ships.map((ship) => ({
    title: ship.name,
    category: 'Millennium Series Vessel',
    description: ship.text,
    image: null,
    placeholderLabel: `${ship.name} — Millennium Series`,
  }));

  // 7. Celebrity Flora Galápagos Expedition for HighlightsSplit
  const floraHighlights = [
    {
      title: pageData.flora.title,
      description: `${pageData.flora.subtitle} ${pageData.flora.description}`,
      bulletPoints: pageData.flora.stats.map((s) => `${s.label}: ${s.value}`),
      image: null,
      placeholderLabel: 'Celebrity Flora — Galápagos Mega-Yacht',
      icon: 'Ship',
    },
    {
      title: pageData.flora.whoTitle,
      description: `${pageData.flora.whoIntro} ${pageData.flora.footnote}`,
      bulletPoints: pageData.flora.experiences,
      image: null,
      placeholderLabel: 'Galápagos Wildlife & Expedition Exploration',
      icon: 'Compass',
    },
  ];

  // 8. Series Comparison Table Data for ComparisonTable
  const seriesTableData = {
    title: pageData.seriesTable.title,
    headers: pageData.seriesTable.headers,
    rows: pageData.seriesTable.rows.map((row) => [
      row.series,
      row.ships,
      row.style,
    ]),
  };

  // 9. Destination Comparison Table Data for ComparisonTable
  const destinationTableData = {
    title: pageData.destinationTable.title,
    headers: pageData.destinationTable.headers,
    rows: pageData.destinationTable.rows.map((row) => [
      row.dest,
      row.ships,
    ]),
  };

  // 10. Which Ship Is Best For You for CostValueAnalysisCards
  const bestShipIncluded = pageData.whichShipBest.cards.slice(0, 2).map((card) => ({
    title: card.title,
    description: `${card.lead} ${card.items.join(', ')}.`,
  }));

  const bestShipExtras = pageData.whichShipBest.cards.slice(2, 4).map((card) => ({
    title: card.title,
    description: `${card.lead} ${card.items.join(', ')}.`,
  }));

  // 11. Edge vs Solstice vs Millennium Matrix for ComparisonTable
  const comparisonMatrixData = {
    title: pageData.comparisonTable.title,
    headers: pageData.comparisonTable.headers,
    rows: pageData.comparisonTable.rows.map((row) => [
      row.category,
      row.edge,
      row.solstice,
      row.millennium,
    ]),
  };

  // 12. Sizes, Capacity & Cabins for HighlightsSplit
  const sizeAndCabinsHighlights = [
    {
      title: pageData.sizeCapacity.title,
      description: `${pageData.sizeCapacity.lead} ${pageData.sizeCapacity.paragraphs.join(' ')} ${pageData.sizeCapacity.footnote}`,
      bulletPoints: pageData.sizeCapacity.points,
      image: null,
      placeholderLabel: 'Ship Sizes & Passenger Capacity',
      icon: 'Star',
    },
    {
      title: pageData.cabins.title,
      description: `${pageData.cabins.lead} ${pageData.cabins.note} ${pageData.cabins.footnote}`,
      bulletPoints: pageData.cabins.types,
      image: null,
      placeholderLabel: 'Cabin Categories & Stateroom Types',
      icon: 'Heart',
    },
  ];

  // 13. Dining & Entertainment for BrandPillarsShowcase
  const diningPillarsData = {
    title: pageData.diningEntertainment.title,
    subtitle: `${pageData.diningEntertainment.intro} ${pageData.diningEntertainment.footnote}`,
    pillars: pageData.diningEntertainment.items.map((item, idx) => {
      const iconNames = ['window', 'ship', 'compass', 'star'];
      return {
        title: item,
        description: 'Refined culinary excellence, specialty dining, and sophisticated evening entertainment.',
        icon: iconNames[idx % iconNames.length],
      };
    }),
  };

  // 14. Deck Plans Checklist for HighlightsSplit
  const deckPlanHighlights = [
    {
      title: pageData.deckPlans.title,
      description: `${pageData.deckPlans.lead} ${pageData.deckPlans.footnote}`,
      bulletPoints: pageData.deckPlans.checklist,
      image: null,
      placeholderLabel: 'Interactive Deck Plans & Layout Checkpoints',
      icon: 'Compass',
    },
  ];

  // 15. Different Travelers for ThreeColumnGrid
  const travelerItems = pageData.differentTravelers.items.map((item) => ({
    title: item.title,
    category: 'Travel Style Match',
    description: item.text,
    image: null,
    placeholderLabel: item.title,
  }));

  // 16. 2026-2027 Season Highlights for BrandPillarsShowcase
  const seasonPillarsData = {
    title: pageData.season2026_2027.title,
    subtitle: `${pageData.season2026_2027.lead} ${pageData.season2026_2027.footnote}`,
    pillars: pageData.season2026_2027.highlights.map((hl) => ({
      title: hl,
      description: 'Comprehensive global deployment across all seven continents with iconic destinations and overnight port stays.',
      icon: 'compass',
    })),
  };

  // 17. 7-Step Planning Roadmap for InteractivePlanningRoadmap
  const chooseRoadmapSteps = pageData.chooseSteps.steps.map((step, idx) => ({
    timeframe: `Step 0${idx + 1}`,
    title: step.title,
    description: step.text,
    image: null,
  }));


  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/ships/',
        name: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/',
        },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
        breadcrumb: {
          '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/#breadcrumb',
        },
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/#article',
        url: 'https://www.tripsandships.com/celebrity-cruises/ships/',
        headline: pageData.seo.title,
        description: pageData.seo.metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/',
        },
        publisher: { '@id': 'https://www.tripsandships.com#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/#faq',
        mainEntity: pageData.faqs.questions.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/ships/#breadcrumb',
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
            item: 'https://www.tripsandships.com/celebrity-cruises/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Celebrity Cruise Ships',
            item: 'https://www.tripsandships.com/celebrity-cruises/ships/',
          },
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
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: HERO (ComparisonHero) ─── */}
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

      {/* ─── SECTION 2: INTRO (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={null}
        image2={null}
        watermarkText="Fleet"
      />

      {/* ─── SECTION 3: FLEET OVERVIEW TABLE (ComparisonTable) ─── */}
      <div id="fleet-overview">
        <ComparisonTable data={fleetOverviewTableData} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
          <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
            <AlertCircle size={18} className="text-gold-500 shrink-0" />
            <span>{pageData.fleetOverview.footnote}</span>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: IS XCEL THE NEWEST SHIP (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Newest Vessel in the Operating Fleet"
        items={xcelHighlights}
      />

      {/* ─── SECTION 5: EDGE SERIES FLEET (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.edgeSeries.title}
        subtitle={pageData.edgeSeries.description}
        items={edgeSeriesItems}
      />

      {/* ─── SECTION 6: SOLSTICE SERIES FLEET (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.solsticeSeries.title}
        subtitle="Established large-ship architecture with extensive dining, entertainment, and sprawling outdoor deck venues."
        items={solsticeSeriesItems}
      />

      {/* ─── SECTION 7: MILLENNIUM SERIES FLEET (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.millenniumSeries.title}
        subtitle="Traditional Celebrity layouts serving diverse regional and global itineraries across Europe, Asia, Alaska, and the Caribbean."
        items={millenniumSeriesItems}
      />

      {/* ─── SECTION 8: CELEBRITY FLORA GALÁPAGOS EXPEDITION (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Celebrity Flora: The Galápagos Expedition Mega-Yacht"
        items={floraHighlights}
      />

      {/* ─── SECTION 9: SHIPS BY SERIES & DESTINATION TABLES (ComparisonTable) ─── */}
      <ComparisonTable data={seriesTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <Award size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.seriesTable.footnote}</span>
        </div>
      </div>

      <ComparisonTable data={destinationTableData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <AlertCircle size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.destinationTable.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 10: WHICH SHIP IS BEST FOR YOU (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.whichShipBest.title}
        subtitle={pageData.whichShipBest.intro}
        includedTitle="Edge & Solstice Series"
        extrasTitle="Millennium Series & Celebrity Flora"
        included={bestShipIncluded}
        extras={bestShipExtras}
      />

      {/* ─── SECTION 11: EDGE VS SOLSTICE VS MILLENNIUM (ComparisonTable) ─── */}
      <ComparisonTable data={comparisonMatrixData} />
      <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
        <div className="flex items-center gap-3 p-4 bg-ice-50 rounded-xl border border-ice-100 text-slate-600 text-xs sm:text-sm">
          <AlertCircle size={18} className="text-gold-500 shrink-0" />
          <span>{pageData.comparisonTable.footnote}</span>
        </div>
      </div>

      {/* ─── SECTION 12: SHIP SIZES, CAPACITY & CABINS (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Fleet Specifications & Stateroom Categories"
        items={sizeAndCabinsHighlights}
      />

      {/* ─── SECTION 13: DINING & ENTERTAINMENT (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={diningPillarsData} />

      {/* ─── SECTION 14: DECK PLANS CHECKLIST (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Stateroom Selection & Deck Plan Analysis"
        items={deckPlanHighlights}
      />

      {/* ─── SECTION 15: SHIPS FOR DIFFERENT TRAVELERS (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.differentTravelers.title}
        subtitle={pageData.differentTravelers.intro}
        items={travelerItems}
      />

      {/* ─── SECTION 16: 2026-2027 SEASON HIGHLIGHTS (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={seasonPillarsData} />

      {/* ─── SECTION 17: 7-STEP PLANNING ROADMAP (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.chooseSteps.title}
        subtitle={pageData.chooseSteps.intro}
        steps={chooseRoadmapSteps}
      />

      {/* ─── SECTION 18: VIDEO SHOWCASE SECTION (Video Placeholder) ─── */}
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

      {/* ─── SECTION 19: ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        bio={pageData.expertInsight.bio}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Fleet Selection"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        image={Profile_Picture_AH}
        credentials={pageData.expertInsight.standoutPills}
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 20: KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle="12 Essential Insights to Selecting the Perfect Celebrity Ship for Your Next Voyage"
        points={pageData.keyTakeaways.items}
      />

      {/* ─── SECTION 21: FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 22: CENTER CTA (CenterCTA) ─── */}
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

export default CelebrityCruiseShipsCompleteFleetGuide;