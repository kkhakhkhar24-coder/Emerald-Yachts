import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared UI Components exclusively from src/components/ui/ (All Distinct)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import IconGrid from '@/components/ui/IconGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureGrid from '@/components/ui/FeatureGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import EventTimelineShowcase from '@/components/ui/EventTimelineShowcase';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

function WhyBookCelebrityWithTripsAndShips() {
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us',
        name: 'Why Book Celebrity With Trips & Ships?',
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us#article',
        headline: 'Why Book Celebrity With Trips & Ships?',
        description:
          'A practical guide to planning and booking a Celebrity Cruises vacation, including ships, fares, staterooms, inclusions, dining, drinks and trip planning.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us',
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tripsandships.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Celebrity Cruises',
            item: 'https://www.tripsandships.com/celebrity-cruises',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Why Book Celebrity With Trips & Ships?',
            item: 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/why-book-with-us#faq',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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

        {/* 2. WHY BOOK SECTION */}
        <PremiumIntro
          sections={[
            {
              heading: pageData.whyBook.title,
              paragraphs: pageData.whyBook.points,
              list: [
                'Smart Planning Starts Here',
                'Simplified Options',
                'Better Decisions',
              ],
            },
          ]}
          ctaText="Explore Options"
          ctaLink="/contact"
          watermarkText="ADVICE"
        />

        {/* 3. WHAT MAKES PLANNING DIFFERENT */}
        <ValuePropositionHighlight
          title={pageData.planningDifferences.title}
          subtitle={pageData.planningDifferences.intro}
          items={pageData.planningDifferences.items.map((item, idx) => ({
            title: `Planning Pillar 0${idx + 1}`,
            description: item,
            impact: 'Essential Step',
          }))}
        />

        {/* 4. COMPARE FACTORS */}
        <IconGrid
          title={pageData.compareFactors.title}
          subtitle={pageData.compareFactors.intro}
          items={pageData.compareFactors.factors.map((f, idx) => ({
            title: f.label,
            description: f.desc,
            icon: ['activity', 'sun', 'tag', 'clock'][idx % 4],
          }))}
        />

        {/* 5. FARE COMPARISON TABLE */}
        <ComparisonTable
          data={{
            title: pageData.fareComparison.title,
            headers: pageData.fareComparison.headers,
            rows: pageData.fareComparison.rows.map((r) => [r.consideration, r.check]),
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.fareComparison.note} authorImage={insiderTipImg} />
        </div>

        {/* 6. STATEROOMS */}
        <FeatureGrid
          title={pageData.staterooms.title}
          subtitle={pageData.staterooms.intro}
          features={pageData.staterooms.categories.map((c) => ({
            title: c.name,
            description: c.description,
          }))}
        />

        {/* 7. ALL INCLUDED OPTION */}
        <InclusionsList
          title={pageData.allIncluded.title}
          subtitle={`${pageData.allIncluded.lead} ${pageData.allIncluded.description}`}
          items={pageData.allIncluded.checklist.map((item) => ({
            title: item,
            desc: 'Key verification point before confirming All Included pricing.',
          }))}
          expertNote={{
            lead: pageData.allIncluded.subLabel,
            sub: pageData.allIncluded.note,
          }}
        />

        {/* 8. DINING: INCLUDED VS SPECIALTY */}
        <CostValueAnalysisCards
          title={pageData.dining.title}
          subtitle={`${pageData.dining.lead} ${pageData.dining.sub}`}
          includedTitle={pageData.dining.includedHeading}
          extrasTitle={pageData.dining.specialtyHeading}
          included={pageData.dining.includedVenues.map((venue) => ({
            title: venue,
            description: 'Complimentary dining included in the cruise fare across eligible decks.',
          }))}
          extras={[
            {
              title: 'Specialty Restaurants',
              description: pageData.dining.specialtySub,
            },
            {
              title: 'Budgeting Tip',
              description: pageData.dining.specialtyNote,
            },
          ]}
        />

        {/* 9. EXTRAS: DRINKS, WI-FI & MORE */}
        <CurvilinearGrid
          title={pageData.extras.title}
          subtitle={pageData.extras.eyebrow}
          paragraphs={[pageData.extras.intro, pageData.extras.sub]}
          items={pageData.extras.items.map((item, idx) => ({
            title: item,
            description:
              'Optional amenity or service charged separately unless included in your specific package.',
            icon: ['DollarSign', 'Wine', 'Wifi', 'Sparkles'][idx % 4],
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.extras.note} authorImage={insiderTipImg} />
        </div>

        {/* 10. WHAT WE HELP COMPARE */}
        <ThreeColumnGrid
          title={pageData.whatWeHelp.title}
          subtitle={pageData.whatWeHelp.intro}
          items={pageData.whatWeHelp.steps.map((s) => ({
            title: `${s.num}. ${s.title}`,
            category: 'COMPARISON STEP',
            description: s.description,
            placeholderLabel: s.title,
          }))}
        />

        {/* 11. TRAVEL ADVISOR UTILITY */}
        <TravelerTypeGrid
          title={pageData.advisorUseful.title}
          subtitle={`${pageData.advisorUseful.intro} ${pageData.advisorUseful.sub}`}
          items={pageData.advisorUseful.groups.map((group, idx) => ({
            title: group,
            description:
              'Benefits greatly from tailored recommendations and coordinated itinerary planning.',
            icon: ['UserCheck', 'Users', 'Heart', 'ShieldCheck'][idx % 4],
            tag: `Profile 0${idx + 1}`,
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.advisorUseful.note} authorImage={insiderTipImg} />
        </div>

        {/* 12. QUESTIONS BEFORE BOOKING */}
        <DetailedInclusionsList
          title={pageData.questionsBeforeBooking.title}
          intro={[pageData.questionsBeforeBooking.intro]}
          items={pageData.questionsBeforeBooking.questions.map((q, idx) => ({
            title: `${String(idx + 1).padStart(2, '0')}. ${q}`,
            paragraphs: [
              'Clarify this item prior to finalizing booking to ensure total fare transparency.',
            ],
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.questionsBeforeBooking.note} authorImage={insiderTipImg} />
        </div>

        {/* 13. TRIPS & SHIPS DIFFERENCE PLANNING FLOW */}
        <EventTimelineShowcase
          data={{
            title: pageData.whyChooseFlow.title,
            subtitle: `${pageData.whyChooseFlow.intro} ${pageData.whyChooseFlow.subtitle} ${pageData.whyChooseFlow.outcome}`,
            events: pageData.whyChooseFlow.stages.map((s) => ({
              id: s.id,
              occasion: s.title,
              description: s.description,
              icon: s.icon,
            })),
          }}
        />

        {/* 14. KEY TAKEAWAYS */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeaways.title}
          subtitle="Essential highlights and summary takeaways for planning a Celebrity cruise."
          points={pageData.keyTakeaways.items}
        />

        {/* 15. VIDEO SHOWCASE (PLACEHOLDER) */}
        <InclusionsVideoOne
          data={{
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
            youtubeId: 'placeholder',
          }}
        />

        {/* 16. ANGELA HUGHES EXPERT CREDENTIALS */}
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

        {/* 17. 15 FAQS ACCORDION */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions',
            faqs: pageData.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            })),
          }}
        />

        {/* 18. FINAL CTA */}
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

export default WhyBookCelebrityWithTripsAndShips;