import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared UI Components exclusively from src/components/ui/ (All Distinct)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import CreativeShardGrid from '@/components/ui/CreativeShardGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

function CelebrityCruisesFAQs() {
  // 1. Cabin Questions mapping for FeatureGrid
  const cabinFeatures = pageData.cabinQuestions.questions.map((item) => ({
    title: item.q,
    description: item.a,
  }));

  // 2. Dining Questions mapping for DetailedInclusionsList
  const diningDetailedItems = pageData.diningQuestions.questions.map((q) => ({
    title: q.q,
    paragraphs: [q.a],
  }));

  // 3. Drink Questions mapping for CurvilinearGrid
  const drinkCurvilinearItems = pageData.drinkQuestions.questions.map((q, idx) => ({
    title: q.q,
    description: q.a,
    icon: ['Wine', 'Coffee', 'CheckCircle'][idx % 3],
  }));

  // 4. Fare Questions mapping for ValuePropositionHighlight
  const fareHighlightItems = pageData.fareQuestions.questions.map((q, idx) => ({
    title: q.q,
    description: q.a,
    impact: `Pricing Point 0${idx + 1}`,
  }));

  // 5. Itinerary Questions mapping for ThreeColumnGrid
  const itineraryGridItems = pageData.itineraryQuestions.questions.map((q) => ({
    title: q.q,
    category: 'DESTINATIONS & ROUTES',
    description: q.a,
    placeholderLabel: 'Itinerary Guide',
  }));

  // 6. Family Questions mapping for BrandPillarsShowcase
  const familyPillarsData = {
    title: pageData.familyQuestions.title,
    subtitle: pageData.familyQuestions.eyebrow,
    pillars: [
      {
        title: pageData.familyQuestions.questions[0]?.q || 'Family Cruising',
        description: pageData.familyQuestions.questions[0]?.a || '',
        icon: 'star',
      },
      {
        title: pageData.familyQuestions.questions[1]?.q || 'Kids Activities',
        description: pageData.familyQuestions.questions[1]?.a || '',
        icon: 'compass',
      },
    ],
  };

  // 7. Planning Questions mapping for TravelerTypeGrid
  const planningQuestionsItems = pageData.planningQuestions.questions.map((q, idx) => ({
    title: q.q,
    description: q.a,
    icon: ['Compass', 'Calendar', 'Ship'][idx % 3],
    tag: `Question 0${idx + 1}`,
  }));

  // 8. Planning Factors mapping for CreativeShardGrid
  const planningFactorsShards = pageData.planningQuestions.planningFactors.map((f) => ({
    title: f.label,
    description: f.text,
    icon: 'CheckCircle',
  }));

  // 9. Checklist mapping for InclusionsList
  const checklistInclusions = pageData.checklist.items.map((item) => ({
    title: item,
    desc: 'Critical verification item before finalizing your reservation.',
  }));

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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/faqs#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/faqs',
        name: 'Celebrity Cruises Frequently Asked Questions',
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/faqs',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/faqs#faq',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={pageData.meta.keywords} />
        <link rel="canonical" href={pageData.meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      <main className="w-full bg-white overflow-hidden">
        {/* 1. HERO SECTION */}
        <ComparisonHero
          eyebrow={pageData.hero.eyebrow}
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          primaryCtaText="Speak with a Celebrity Cruises Specialist"
          primaryCtaLink="/contact"
        />

        {/* 2. AT A GLANCE (OVERVIEW TABLE) */}
        <ComparisonTable
          data={{
            title: pageData.atAGlance.title,
            headers: pageData.atAGlance.headers,
            rows: pageData.atAGlance.rows.map((row) => [row.topic, row.detail]),
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.atAGlance.note} authorImage={insiderTipImg} />
        </div>

        {/* 3. SHIP QUESTIONS */}
        <EditorialFeatureShowcase
          title={pageData.shipQuestions.title}
          subtitle={`${pageData.shipQuestions.lead} ${pageData.shipQuestions.introText}`}
          features={pageData.shipQuestions.questions.map((q) => ({
            title: q.q,
            description: q.a,
          }))}
        />

        {/* 4. CABIN QUESTIONS */}
        <FeatureGrid
          title={pageData.cabinQuestions.title}
          subtitle={pageData.cabinQuestions.eyebrow}
          features={cabinFeatures}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.cabinQuestions.tip} authorImage={insiderTipImg} />
        </div>

        {/* 5. DINING QUESTIONS */}
        <DetailedInclusionsList
          title={pageData.diningQuestions.title}
          intro={['Essential insights into dining options, included food venues, and specialty restaurants.']}
          items={diningDetailedItems}
        />

        {/* 6. DRINK QUESTIONS */}
        <CurvilinearGrid
          title={pageData.drinkQuestions.title}
          subtitle={pageData.drinkQuestions.eyebrow}
          paragraphs={[
            'Understanding drink inclusions, beverage package values, and alcohol policies helps ensure a seamless cruise experience.',
          ]}
          items={drinkCurvilinearItems}
        />

        {/* 7. FARE & COST QUESTIONS */}
        <ValuePropositionHighlight
          title={pageData.fareQuestions.title}
          subtitle={pageData.fareQuestions.eyebrow}
          items={fareHighlightItems}
        />

        {/* 8. ITINERARY QUESTIONS */}
        <ThreeColumnGrid
          title={pageData.itineraryQuestions.title}
          subtitle="Explore cruise regions, sailing lengths, and destination options across the Celebrity fleet."
          items={itineraryGridItems}
        />

        {/* 9. FAMILY QUESTIONS */}
        <BrandPillarsShowcase data={familyPillarsData} />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.familyQuestions.note} authorImage={insiderTipImg} />
        </div>

        {/* 10. PLANNING QUESTIONS & PLANNING FACTORS */}
        <TravelerTypeGrid
          title={pageData.planningQuestions.title}
          subtitle={pageData.planningQuestions.eyebrow}
          items={planningQuestionsItems}
        />

        <CreativeShardGrid
          title="Key Factors to Consider When Choosing a Cruise"
          subtitle="Evaluate these 8 core pillars to find your ideal sailing:"
          items={planningFactorsShards}
        />

        {/* 11. BOOKING CHECKLIST */}
        <InclusionsList
          title={pageData.checklist.title}
          subtitle={pageData.checklist.intro}
          items={checklistInclusions}
          expertNote={{
            lead: 'Expert Booking Advice',
            sub: pageData.checklist.note,
          }}
        />

        {/* 12. KEY TAKEAWAYS */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeaways.title}
          subtitle="Essential highlights and summary takeaways for planning a Celebrity cruise."
          points={pageData.keyTakeaways.items}
        />

        {/* 13. VIDEO SHOWCASE (PLACEHOLDER) */}
        <InclusionsVideoOne
          data={{
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
            youtubeId: 'placeholder',
          }}
        />

        {/* 14. ANGELA HUGHES EXPERT CREDENTIALS */}
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

        {/* 15. 15 FAQS ACCORDION */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions',
            faqs: pageData.faqs.map((f) => ({
              question: f.q,
              answer: f.a,
            })),
          }}
        />

        {/* 16. FINAL CTA */}
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

export default CelebrityCruisesFAQs;