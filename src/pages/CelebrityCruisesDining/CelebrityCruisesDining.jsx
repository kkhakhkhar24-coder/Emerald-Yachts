import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared Components & UI System exclusively from src/components/ui/ (All Distinct)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import InclusionsList from '@/components/ui/InclusionsList';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import CreativeShardGrid from '@/components/ui/CreativeShardGrid';
import InclusionsBeverageHub from '@/components/ui/InclusionsBeverageHub';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CulinaryExcellence from '@/components/ui/CulinaryExcellence';
import ProsConsCards from '@/components/ui/ProsConsCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import InclusionCheckerGrid from '@/components/ui/InclusionCheckerGrid';
import EventTimelineShowcase from '@/components/ui/EventTimelineShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/Media (1).jpg';
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';
// import imageWebp from '../../assets/image.webp';

function CelebrityCruisesDining() {
  // 1. Intro Section Mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Main Dining Room Showcase Features for EditorialFeatureShowcase (Distinct)
  const mainDiningFeatures = [
    {
      title: 'Traditional Destination-Inspired Dining',
      description: pageData.mainDiningRoom.body,
    },
    {
      title: pageData.mainDiningRoom.subLabel,
      description: pageData.mainDiningRoom.expectList.join(' • '),
    },
  ];

  // 3. Celebrity Select Dining Shards for CreativeShardGrid (Distinct)
  const selectDiningShards = pageData.selectDining.reasons.map((reason) => ({
    title: reason.text,
    description: pageData.selectDining.subLabel,
    icon: 'Compass',
  }));

  // 4. Casual Complimentary Venues Hub for InclusionsBeverageHub (Distinct)
  const casualBeverageHubData = {
    headline: pageData.casualVenues.title,
    intro: pageData.casualVenues.intro,
    items: pageData.casualVenues.venues.map((venue) => ({
      badge: venue.tag,
      title: venue.name,
      desc: `${venue.description} ${venue.usefulHeading}: ${venue.useful.join(', ')}. Note: ${venue.note}`,
    })),
  };

  // 5. Specialty Dining Overview for DetailedInclusionsList (Distinct)
  const specialtyDetailedItems = [
    {
      title: 'Specialty Dining Concepts',
      paragraphs: [pageData.specialtyDining.intro, pageData.specialtyDining.note],
      lists: [
        {
          title: 'Available Cuisines & Concepts',
          items: pageData.specialtyDining.concepts,
        },
        {
          title: pageData.specialtyDining.whyChooseLabel,
          items: pageData.specialtyDining.whyChooseReasons,
        },
      ],
    },
  ];

  // 6. Featured Specialty Venues for CulinaryExcellence (Distinct)
  const featuredCulinaryVenues = pageData.specialtyDining.featuredVenues.map((venue) => ({
    name: venue.name,
    cuisine: venue.tag,
    description: `${venue.description} Practical tip: ${venue.tip}`,
    signatureDish: venue.tag,
    atmosphere: 'Specialty Sit-Down Restaurant',
  }));

  // 7. Exclusive Dining Pillars for BrandPillarsShowcase (Distinct)
  const exclusivePillarsData = {
    title: 'Exclusive Category Dining: Blu & Luminae',
    subtitle: 'Dedicated dining concepts reserved exclusively for AquaClass and The Retreat suite guests.',
    pillars: [
      {
        title: pageData.exclusiveDining.blu.title,
        description: `${pageData.exclusiveDining.blu.lead} ${pageData.exclusiveDining.blu.subLabel} ${pageData.exclusiveDining.blu.sub}`,
        icon: 'star',
      },
      {
        title: pageData.exclusiveDining.luminae.title,
        description: `${pageData.exclusiveDining.luminae.lead} ${pageData.exclusiveDining.luminae.sub}`,
        icon: 'star',
      },
    ],
  };

  // 8. Cost & Room Service for GenericChecklistCards (Distinct)
  const costAndRoomServiceCards = [
    {
      title: pageData.costAndRoomService.cost.title,
      items: [
        `${pageData.costAndRoomService.cost.intro} ${pageData.costAndRoomService.cost.factors.join(', ')}.`,
        pageData.costAndRoomService.cost.note,
      ],
    },
    {
      title: pageData.costAndRoomService.cost.packageAdviceTitle,
      items: [
        pageData.costAndRoomService.cost.packageAdviceText,
        'Compare individual specialty restaurant pricing against dining package prices before your cruise.',
      ],
    },
    {
      title: pageData.costAndRoomService.roomService.title,
      items: [
        pageData.costAndRoomService.roomService.lead,
        pageData.costAndRoomService.roomService.sub,
        pageData.costAndRoomService.roomService.note,
      ],
    },
  ];

  // 9. Dietary Requirements for InclusionCheckerGrid (Distinct)
  const dietaryInclusions = pageData.dietary.considerations.map((item) => ({
    name: item.text,
    description: 'Can be accommodated onboard across complimentary and specialty restaurants. Notify in advance.',
  }));
  const dietaryExclusions = [
    {
      name: pageData.dietary.vegetarianSection.title,
      description: pageData.dietary.vegetarianSection.text,
    },
  ];

  // 10. Daily Dining Timeline for EventTimelineShowcase (Distinct)
  const timelineData = {
    title: pageData.dressCodeAndTimeline.timeline.title,
    subtitle: `${pageData.dressCodeAndTimeline.timeline.intro} ${pageData.dressCodeAndTimeline.timeline.note}`,
    events: pageData.dressCodeAndTimeline.timeline.steps.map((step, idx) => ({
      id: idx + 1,
      title: step.time,
      subtitle: step.choice,
      description: `Enjoy a meal at ${step.choice} during ${step.time.toLowerCase()} on your Celebrity cruise.`,
      icon: 'Briefcase',
    })),
  };

  // 11. First-Time Tips for ThreeColumnGrid (Distinct)
  const firstTimeTipsItems = pageData.firstTimeTips.tips.map((tip, idx) => ({
    title: `Dining Tip ${idx + 1}`,
    description: tip,
    category: 'FIRST-TIME ADVICE',
    placeholderLabel: `Celebrity Dining Tip ${idx + 1}`,
  }));

  // 12. Guest Category & Decision Guide for CostValueAnalysisCards (Distinct)
  const guestCategoryIncluded = pageData.guestCategoriesAndDecision.categories.rows.map((r) => ({
    title: r.guest,
    description: r.benefit,
  }));

  const decisionGuideExtras = pageData.guestCategoriesAndDecision.decisionGuide.choices.map((c) => ({
    title: c.label,
    description: c.value,
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
          primaryCtaText="Speak with a Dining Specialist"
          primaryCtaLink="/contact"
        />

        {/* 2. INTRO & DINING TYPES TABLE */}
        <PremiumIntro
          eyebrow={pageData.intro.eyebrow}
          title={pageData.intro.title}
          sections={introSections}
        />

        <ComparisonTable
          data={{
            title: 'Celebrity Cruises Dining Overview',
            headers: pageData.intro.diningTypesTable.headers,
            rows: pageData.intro.diningTypesTable.rows.map((row) => [
              row.type,
              row.examples,
              row.included,
            ]),
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.intro.statement} authorImage={insiderTipImg} />
        </div>

        {/* 3. WHICH DINING OPTIONS INCLUDED */}
        <InclusionsList
          title={pageData.includedOptions.title}
          inclusions={pageData.includedOptions.venues.map((v) => ({
            title: v.name,
            description: v.desc,
          }))}
          expertNote={`${pageData.includedOptions.lead} ${pageData.includedOptions.footnote}`}
          /* image={imageWebp} */
        />

        {/* 4. MAIN DINING ROOM */}
        <EditorialFeatureShowcase
          title={pageData.mainDiningRoom.title}
          subtitle={pageData.mainDiningRoom.lead}
          features={mainDiningFeatures}
          /* image={imageWebp} */
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.mainDiningRoom.note} authorImage={insiderTipImg} />
        </div>

        {/* 5. SELECT DINING & DINNER TIMES */}
        <CreativeShardGrid
          title={pageData.selectDining.title}
          subtitle={pageData.selectDining.intro}
          items={selectDiningShards}
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.selectDining.footer} authorImage={insiderTipImg} />
        </div>

        {/* 6. CASUAL COMPLIMENTARY VENUES */}
        <InclusionsBeverageHub data={casualBeverageHubData} />

        {/* 7. SPECIALTY DINING OVERVIEW */}
        <DetailedInclusionsList
          title={pageData.specialtyDining.title}
          intro={[pageData.specialtyDining.intro]}
          items={specialtyDetailedItems}
        />

        {/* 8. FEATURED SPECIALTY RESTAURANTS */}
        <CulinaryExcellence
          title="Featured Celebrity Specialty Restaurants"
          subtitle="Explore flagship specialty venues offering French fine dining, modern Italian cuisine, Japanese sushi and animated culinary entertainment."
          venues={featuredCulinaryVenues}
          images={[]}
          /* images={[imageWebp, imageWebp, imageWebp, imageWebp]} */
        />

        {/* 9. EDGE SERIES VS SOLSTICE/MILLENNIUM SERIES */}
        <ProsConsCards
          title="Ship-Specific Dining: Edge Series vs Solstice & Millennium Series"
          prosTitle={pageData.shipClasses.edgeSeries.title}
          consTitle={pageData.shipClasses.solsticeSeries.title}
          bestFor={pageData.shipClasses.edgeSeries.venues.map(
            (v) => `${v} (Edge Series Venue)`
          )}
          notBestFor={pageData.shipClasses.solsticeSeries.venues.map(
            (v) => `${v} (Solstice / Millennium Venue)`
          )}
          bottomNote={`${pageData.shipClasses.edgeSeries.lead} ${pageData.shipClasses.edgeSeries.note} | ${pageData.shipClasses.solsticeSeries.intro} ${pageData.shipClasses.solsticeSeries.footer}`}
          type="compare"
        />

        {/* 10. EXCLUSIVE DINING: BLU & LUMINAE */}
        <BrandPillarsShowcase data={exclusivePillarsData} />

        {/* 11. SPECIALTY DINING COST & ROOM SERVICE */}
        <GenericChecklistCards
          title={pageData.costAndRoomService.cost.title}
          subtitle="Specialty Pricing, Dining Packages & Room Service"
          cards={costAndRoomServiceCards}
        />

        {/* 12. DIETARY REQUIREMENTS & PLANT-FORWARD */}
        <InclusionCheckerGrid
          title={pageData.dietary.title}
          subtitle={pageData.dietary.intro}
          inclusions={dietaryInclusions}
          exclusions={dietaryExclusions}
        />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.dietary.footer} authorImage={insiderTipImg} />
        </div>

        {/* 13. DRESS CODE & A DAY OF DINING TIMELINE */}
        <EventTimelineShowcase data={timelineData} />

        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox
            content={`${pageData.dressCodeAndTimeline.dressCode.title}: ${pageData.dressCodeAndTimeline.dressCode.lead} Packing recommendations: ${pageData.dressCodeAndTimeline.dressCode.packing.join(', ')}. ${pageData.dressCodeAndTimeline.dressCode.note}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* 14. FIRST-TIME CRUISER DINING TIPS */}
        <ThreeColumnGrid
          title={pageData.firstTimeTips.title}
          subtitle="Essential advice for getting the most value and variety from Celebrity Cruises dining."
          items={firstTimeTipsItems}
        />

        {/* 15. GUEST CATEGORIES & DECISION GUIDE */}
        <CostValueAnalysisCards
          title="Celebrity Dining: Guest Categories & Decision Guide"
          subtitle={`${pageData.guestCategoriesAndDecision.categories.footer} — ${pageData.guestCategoriesAndDecision.decisionGuide.intro}`}
          includedTitle={pageData.guestCategoriesAndDecision.categories.title}
          extrasTitle={pageData.guestCategoriesAndDecision.decisionGuide.title}
          included={guestCategoryIncluded}
          extras={decisionGuideExtras}
        />

        {/* 16. VIDEO SHOWCASE (PLACEHOLDER) */}
        <InclusionsVideoOne
          data={{
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
            youtubeId: 'placeholder',
          }}
        />

        {/* 17. KEY TAKEAWAYS & CONCLUSION */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeawaysAndConclusion.takeaways.title}
          subtitle="Summary of essential facts to keep in mind when planning Celebrity Cruises dining."
          points={pageData.keyTakeawaysAndConclusion.takeaways.items}
        />

        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <AuthorityBox
            content={`${pageData.keyTakeawaysAndConclusion.conclusion.title}: ${pageData.keyTakeawaysAndConclusion.conclusion.paragraphs.join(' ')} ${pageData.keyTakeawaysAndConclusion.conclusion.reviewCta}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* 18. ANGELA HUGHES EXPERT CREDENTIALS */}
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

        {/* 19. FAQS ACCORDION */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions: Celebrity Cruises Dining',
            faqs: pageData.faqs,
          }}
        />

        {/* 20. CENTER CTA */}
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

export default CelebrityCruisesDining;