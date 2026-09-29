import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared UI Components exclusively from src/components/ui/ (All Distinct)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import InclusionsList from '@/components/ui/InclusionsList';
import EditorialShipTour from '@/components/ui/EditorialShipTour';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import ColonialEleganceSplitView from '@/components/ui/ColonialEleganceSplitView';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import InclusionsBeverageHub from '@/components/ui/InclusionsBeverageHub';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import FifteenPointComparisonMatrix from '@/components/ui/FifteenPointComparisonMatrix';
import InclusionCheckerGrid from '@/components/ui/InclusionCheckerGrid';
import MistakesGrid from '@/components/ui/MistakesGrid';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/Media (1).jpg';

function CelebrityEdgeSeriesShipsGuide() {
  // 1. Intro Section Mapping
  const introSections = [
    {
      heading: pageData.whichShips.title,
      paragraphs: [pageData.whichShips.lead],
    },
  ];

  // 2. Different Features Curvilinear Grid
  const differentFeaturesCurvilinear = pageData.differentFeatures.features.map((feature, idx) => ({
    title: feature,
    description: pageData.differentFeatures.note,
    icon: ['ship', 'utensils', 'Maximize', 'Compass', 'Activity', 'CheckCircle'][idx % 6],
  }));

  // 3. Ship-by-Ship Comparison Cards
  const shipComparisonItems = pageData.shipComparison.ships.map((ship) => ({
    title: ship.ship,
    category: `${ship.position} VESSEL`,
    description: ship.characteristics,
    placeholderLabel: ship.ship,
  }));

  // 4. Celebrity Beyond Features for EditorialShipTour
  const beyondFeatures = pageData.individualShips.beyond.features.map((feature) => ({
    title: feature,
    description: `Notable design element on Celebrity Beyond: ${feature}. ${pageData.individualShips.beyond.note}`,
  }));

  // 5. Celebrity Ascent Cards for GenericChecklistCards
  const ascentCards = [
    {
      title: pageData.individualShips.ascent.subLabel,
      items: pageData.individualShips.ascent.features,
    },
    {
      title: 'Traveler Guidance',
      items: [pageData.individualShips.ascent.note],
    },
  ];

  // 6. Celebrity Xcel Items for ValuePropositionHighlight
  const xcelItems = [
    {
      title: 'Fifth Edge Series Vessel',
      description: pageData.individualShips.xcel.sub,
      impact: 'Newest Evolution',
    },
    {
      title: 'Current Ship Information Advisory',
      description: pageData.individualShips.xcel.note,
      impact: 'Check Current Sailings',
    },
  ];

  // 7. Magic Carpet Split View Data
  const magicCarpetLeft = {
    category: 'SIGNATURE FEATURE',
    title: 'Cantilevered Ocean Platform',
    description: `${pageData.magicCarpet.lead} ${pageData.magicCarpet.sub}`,
    image: '',
  };
  const magicCarpetRight = {
    category: 'MULTI-DECK VERSATILITY',
    title: pageData.magicCarpet.subLabel,
    description: `${pageData.magicCarpet.uses.join(' • ')}. ${pageData.magicCarpet.note}`,
    image: '',
  };

  // 8. Suites & The Retreat Pillars
  const suitesRetreatPillarsData = {
    title: 'Edge Series Suites & The Retreat',
    subtitle: 'Elevated luxury accommodations and dedicated private suite amenities.',
    pillars: [
      {
        title: pageData.suitesAndRetreat.suites.title,
        description: `${pageData.suitesAndRetreat.suites.lead} Categories: ${pageData.suitesAndRetreat.suites.categories.join(', ')}. ${pageData.suitesAndRetreat.suites.note}`,
        icon: 'star',
      },
      {
        title: pageData.suitesAndRetreat.retreat.title,
        description: `${pageData.suitesAndRetreat.retreat.lead} Benefits: ${pageData.suitesAndRetreat.retreat.benefits.join(', ')}. ${pageData.suitesAndRetreat.retreat.note}`,
        icon: 'crown',
      },
    ],
  };

  // 9. Dining Hub Data
  const diningHubData = {
    headline: pageData.dining.mainDining.title,
    intro: `${pageData.dining.mainDining.intro} ${pageData.dining.mainDining.sub} ${pageData.dining.mainDining.noteTheRetreat} ${pageData.dining.mainDining.noteAquaClass}`,
    items: pageData.dining.mainDining.restaurants.map((restaurant) => ({
      badge: 'COMPLIMENTARY VENUE',
      title: restaurant,
      desc: `Distinctive complimentary main restaurant on applicable Edge Series ships.`,
    })),
  };

  // 10. Specialty Dining Detailed Items
  const specialtyDetailedItems = [
    {
      title: pageData.dining.specialtyDining.title,
      paragraphs: [
        pageData.dining.specialtyDining.intro,
        pageData.dining.specialtyDining.note,
      ],
      lists: [
        {
          title: 'Specialty Concepts',
          items: pageData.dining.specialtyDining.restaurants,
        },
      ],
    },
  ];

  // 11. Entertainment & Outdoor Spaces
  const entertainmentIncluded = pageData.entertainmentAndOutdoors.entertainment.options.map(
    (item) => ({
      title: item,
      description: pageData.entertainmentAndOutdoors.entertainment.note,
    })
  );
  const outdoorSpacesExtras = pageData.entertainmentAndOutdoors.outdoorSpaces.spaces.map(
    (item) => ({
      title: item,
      description: pageData.entertainmentAndOutdoors.outdoorSpaces.note,
    })
  );

  // 12. Cabin Selection Items
  const cabinTypeItems = pageData.cabinAndShipSelection.cabins.types.map((item, idx) => ({
    title: item.type,
    description: item.suited,
    tag: `Category 0${idx + 1}`,
    icon: 'Bed',
  }));

  // 13. Edge vs Solstice Comparison Matrix Points
  const vsSolsticePoints = pageData.vsSolstice.table.rows.map((row) => ({
    title: row.feature,
    description: `Edge Series: ${row.edge} • Solstice Series: ${row.solstice}`,
  }));

  // 14. Inclusions Data
  const fareInclusions = pageData.inclusions.included.map((item) => ({
    name: item,
    description: 'Complimentary on applicable Celebrity Edge Series cruises.',
  }));
  const fareExtras = pageData.inclusions.extra.map((item) => ({
    name: item,
    description: 'Carries additional charges on applicable sailings.',
  }));

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={pageData.meta.keywords} />
        <link rel="canonical" href={pageData.meta.canonical} />
      </Helmet>

      <Navbar />

      <main className="w-full bg-white overflow-hidden">
        {/* 1. HERO SECTION */}
        <ComparisonHero
          eyebrow={pageData.hero.eyebrow}
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          primaryCtaText="Speak with an Edge Series Specialist"
          primaryCtaLink="/contact"
        />

        {/* 2. WHICH SHIPS IN EDGE SERIES */}
        <PremiumIntro
          eyebrow={pageData.whichShips.eyebrow}
          title={pageData.whichShips.title}
          sections={introSections}
        />

        <ComparisonTable
          data={{
            title: 'Edge Series Fleet Overview',
            headers: pageData.whichShips.table.headers,
            rows: pageData.whichShips.table.rows.map((row) => [
              row.ship,
              row.year,
              row.identity,
            ]),
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.whichShips.footer} authorImage={insiderTipImg} />
        </div>

        {/* 3. WHAT MAKES EDGE SERIES DIFFERENT */}
        <CurvilinearGrid
          title={pageData.differentFeatures.title}
          subtitle={pageData.differentFeatures.eyebrow}
          paragraphs={[pageData.differentFeatures.intro]}
          items={differentFeaturesCurvilinear}
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-16 mb-16">
          <AuthorityBox content={pageData.differentFeatures.note} authorImage={insiderTipImg} />
        </div>

        {/* 4. SHIP-BY-SHIP COMPARISON */}
        <ThreeColumnGrid
          title={pageData.shipComparison.title}
          subtitle={pageData.shipComparison.intro}
          items={shipComparisonItems}
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.shipComparison.note} authorImage={insiderTipImg} />
        </div>

        {/* 5. CELEBRITY EDGE (FIRST IN SERIES) */}
        <EditorialFeatureShowcase
          title={pageData.individualShips.edge.title}
          subtitle={pageData.individualShips.edge.lead}
          features={[
            {
              title: pageData.individualShips.edge.subLabel,
              description: `${pageData.individualShips.edge.sub} Major features: ${pageData.individualShips.edge.features.join(' • ')}. Note: ${pageData.individualShips.edge.note}`,
            },
          ]}
        />

        {/* 6. CELEBRITY APEX (SECOND IN SERIES) */}
        <InclusionsList
          title={pageData.individualShips.apex.title}
          inclusions={pageData.individualShips.apex.features.map((f) => ({
            title: f,
            description: pageData.individualShips.apex.note,
          }))}
          expertNote={`${pageData.individualShips.apex.lead} ${pageData.individualShips.apex.sub}`}
        />

        {/* 7. CELEBRITY BEYOND (THIRD IN SERIES) */}
        <EditorialShipTour
          title={pageData.individualShips.beyond.title}
          subtitle={`${pageData.individualShips.beyond.lead} ${pageData.individualShips.beyond.sub}`}
          features={beyondFeatures}
        />

        {/* 8. CELEBRITY ASCENT (FOURTH IN SERIES) */}
        <GenericChecklistCards
          title={pageData.individualShips.ascent.title}
          subtitle={`${pageData.individualShips.ascent.lead} ${pageData.individualShips.ascent.sub}`}
          cards={ascentCards}
        />

        {/* 9. CELEBRITY XCEL (FIFTH IN SERIES) */}
        <ValuePropositionHighlight
          title={pageData.individualShips.xcel.title}
          subtitle={`${pageData.individualShips.xcel.lead} ${pageData.individualShips.xcel.sub}`}
          items={xcelItems}
          imageOverlayText="Celebrity Xcel: Fifth Edge Series Vessel"
        />

        {/* 10. THE MAGIC CARPET */}
        <ColonialEleganceSplitView
          title={pageData.magicCarpet.title}
          subtitle={pageData.magicCarpet.lead}
          leftPane={magicCarpetLeft}
          rightPane={magicCarpetRight}
        />

        {/* 11. INFINITE VERANDA STATEROOMS */}
        <LuxuryCruiseComparisonTable
          title={pageData.infiniteVeranda.title}
          headers={pageData.infiniteVeranda.table.headers}
          rows={pageData.infiniteVeranda.table.rows.map((row) => [
            row.feature,
            row.infinite,
            row.traditional,
          ])}
        />

        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox
            content={`${pageData.infiniteVeranda.intro} ${pageData.infiniteVeranda.sub} Note: ${pageData.infiniteVeranda.note}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* 12. SUITES & THE RETREAT */}
        <BrandPillarsShowcase data={suitesRetreatPillarsData} />

        {/* 13. EDGE SERIES DINING */}
        <InclusionsBeverageHub data={diningHubData} />

        {/* 14. SPECIALTY RESTAURANTS */}
        <DetailedInclusionsList
          title={pageData.dining.specialtyDining.title}
          intro={[
            pageData.dining.specialtyDining.intro,
            pageData.dining.specialtyDining.note,
          ]}
          items={specialtyDetailedItems}
        />

        {/* 15. ENTERTAINMENT & OUTDOOR SPACES */}
        <CostValueAnalysisCards
          title="Edge Series Entertainment & Open-Air Spaces"
          subtitle="Experience world-class integrated entertainment and resort-style open-air decks."
          includedTitle={pageData.entertainmentAndOutdoors.entertainment.title}
          extrasTitle={pageData.entertainmentAndOutdoors.outdoorSpaces.title}
          included={entertainmentIncluded}
          extras={outdoorSpacesExtras}
        />

        {/* 16. SIGNATURE SPACES: ROOFTOP GARDEN & EDEN */}
        <ProsConsCards
          title="Signature Social Spaces: Rooftop Garden & Eden"
          prosTitle={pageData.signatureSpaces.rooftopGarden.title}
          consTitle={pageData.signatureSpaces.eden.title}
          bestFor={pageData.signatureSpaces.rooftopGarden.activities.map(
            (a) => `${a} (Rooftop Garden)`
          )}
          notBestFor={pageData.signatureSpaces.eden.functions.map(
            (f) => `${f} (Eden Space)`
          )}
          bottomNote={`${pageData.signatureSpaces.rooftopGarden.lead} ${pageData.signatureSpaces.rooftopGarden.note} | ${pageData.signatureSpaces.eden.lead} ${pageData.signatureSpaces.eden.note}`}
          type="compare"
        />

        {/* 17. CABIN SELECTION GUIDE */}
        <TravelerTypeGrid
          title={pageData.cabinAndShipSelection.cabins.title}
          subtitle={`${pageData.cabinAndShipSelection.cabins.intro} Note: ${pageData.cabinAndShipSelection.cabins.note}`}
          items={cabinTypeItems}
        />

        {/* 18. EDGE SERIES VS SOLSTICE SERIES */}
        <FifteenPointComparisonMatrix
          title={pageData.vsSolstice.title}
          subtitle={`${pageData.vsSolstice.intro} ${pageData.vsSolstice.note}`}
          points={vsSolsticePoints}
        />

        {/* 19. FARE INCLUSIONS */}
        <InclusionCheckerGrid
          title={pageData.inclusions.title}
          subtitle={pageData.inclusions.lead}
          inclusions={fareInclusions}
          exclusions={fareExtras}
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.inclusions.note} authorImage={insiderTipImg} />
        </div>

        {/* 20. CRUISE PLANNING TIPS */}
        <MistakesGrid
          title={pageData.planningTips.title}
          items={pageData.planningTips.tips}
        />

        {/* 21. VIDEO SHOWCASE (PLACEHOLDER) */}
        <InclusionsVideoOne
          data={{
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
            youtubeId: 'placeholder',
          }}
        />

        {/* 22. KEY TAKEAWAYS & CONCLUSION */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeaways.title}
          subtitle="Essential insights to keep in mind when exploring Celebrity Edge Series ships."
          points={pageData.keyTakeaways.items}
        />

        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <AuthorityBox
            content={`${pageData.conclusion.title}: ${pageData.conclusion.paragraphs.join(' ')} ${pageData.conclusion.ctaText}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* 23. ANGELA HUGHES EXPERT CREDENTIALS */}
        <ExpertCredentials
          name={pageData.expertAdvisor.name}
          role={pageData.expertAdvisor.role}
          bio={pageData.expertAdvisor.bio}
          quote={pageData.expertAdvisor.quote}
          credentials={pageData.expertAdvisor.standoutPills}
          image={angelaImage}
          experienceBadge={pageData.expertAdvisor.experienceBadge}
          ctaText="Consult with Angela Hughes"
          ctaLink="/contact"
        />

        {/* 24. FAQS ACCORDION */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions',
            faqs: pageData.faqs,
          }}
        />

        {/* 25. CENTER CTA */}
        <CenterCTA
          title={pageData.cta.title}
          description={pageData.cta.subtitle}
          buttonText={pageData.cta.primaryBtnText}
          buttonLink={pageData.cta.primaryBtnUrl}
        />
      </main>
    </>
  );
}

export default CelebrityEdgeSeriesShipsGuide;