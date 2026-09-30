import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import pageData from './data.json';

// Shared UI Components exclusively from src/components/ui/ (All Distinct with Alternating Image/Split Layouts)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import SimplePersonaCards from '@/components/ui/SimplePersonaCards';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import InclusionsList from '@/components/ui/InclusionsList';
import IconGrid from '@/components/ui/IconGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

function CelebrityCruisesVsRoyalCaribbean() {
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#webpage',
        url: 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean',
        name: 'Celebrity Cruises vs. Royal Caribbean',
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean',
        },
        isPartOf: { '@id': 'https://www.tripsandships.com#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#article',
        headline: 'Celebrity Cruises vs. Royal Caribbean',
        description:
          'A practical comparison of Celebrity Cruises and Royal Caribbean covering ships, dining, cabins, activities, entertainment, families, couples and cruise costs.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean',
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
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#breadcrumb',
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
            name: 'Celebrity Cruises vs. Royal Caribbean',
            item: 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#faq',
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
        {/* ─── SECTION 1: HERO (Image Background Layout) ─── */}
        <ComparisonHero
          eyebrow={pageData.hero.eyebrow}
          title={pageData.hero.title}
          subtitle={`${pageData.hero.subtitle} ${pageData.hero.readMoreParagraph1} ${pageData.hero.readMoreParagraph2}`}
          primaryCtaText="Speak with a cruise specialist"
          primaryCtaLink="/contact"
        />

        {/* ─── SECTION 2: AT A GLANCE (Comparison Table) ─── */}
        <ComparisonTable
          data={{
            title: pageData.atAGlance.title,
            headers: pageData.atAGlance.headers,
            rows: pageData.atAGlance.rows.map((r) => [r.category, r.celebrity, r.royal]),
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.atAGlance.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 3: THE BIGGEST DIFFERENCE (Visual Contained Showdown Cards) ─── */}
        <ContainedShowdown
          title={pageData.biggestDifference.title}
          brandA={{
            name: pageData.biggestDifference.celebrity.heading,
            features: pageData.biggestDifference.celebrity.points,
            image: '',
          }}
          brandB={{
            name: pageData.biggestDifference.royal.heading,
            features: pageData.biggestDifference.royal.points,
            image: '',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox
            content={`${pageData.biggestDifference.intro} ${pageData.biggestDifference.celebrityText} ${pageData.biggestDifference.royalText}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* ─── SECTION 4: FLEET COMPARISON / SHIPS DESIGN (CostValueAnalysisCards) ─── */}
        <CostValueAnalysisCards
          title={pageData.ships.title}
          subtitle={`${pageData.ships.intro} ${pageData.ships.sub}`}
          includedTitle={pageData.ships.celebrity.heading}
          extrasTitle={pageData.ships.royal.heading}
          included={pageData.ships.celebrity.points.map((p) => ({
            title: p,
            description:
              'Design emphasis on modern elegance, open stylish public spaces, and premium relaxation.',
          }))}
          extras={pageData.ships.royal.points.map((p) => ({
            title: p,
            description:
              'Design emphasis on high-energy attractions, diverse recreation zones, and large-scale entertainment.',
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.ships.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 5: FAMILY TRAVEL (Brand Pillars Showcase) ─── */}
        <BrandPillarsShowcase
          data={{
            title: pageData.families.title,
            subtitle: `${pageData.families.intro} ${pageData.families.note}`,
            pillars: [
              {
                title: pageData.families.royal.heading,
                description: pageData.families.royal.points.join('. '),
                icon: 'ship',
              },
              {
                title: pageData.families.celebrity.heading,
                description: pageData.families.celebrity.points.join('. '),
                icon: 'compass',
              },
            ],
          }}
        />

        {/* ─── SECTION 6: COUPLES TRAVEL (Simple Persona Cards) ─── */}
        <SimplePersonaCards
          title={pageData.couples.title}
          subtitle={pageData.couples.intro}
          personas={[
            {
              title: pageData.couples.celebrity.heading,
              description: `${pageData.couples.celebrity.points.join(', ')}. ${pageData.couples.celebrity.note}`,
              icon: 'Heart',
            },
            {
              title: pageData.couples.royal.heading,
              description: `${pageData.couples.royal.points.join(', ')}. ${pageData.couples.royal.note}`,
              icon: 'Gem',
            },
          ]}
        />

        {/* ─── SECTION 7: DINING (Editorial Split Showcase with Image Placeholder) ─── */}
        <EditorialFeatureShowcase
          title={pageData.dining.title}
          subtitle={`${pageData.dining.intro} ${pageData.dining.celebrityText} ${pageData.dining.royalText}`}
          features={pageData.dining.considerations.map((c, idx) => ({
            title: `Consideration 0${idx + 1}`,
            description: c,
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.dining.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 8: CABINS & SUITES (Feature Grid) ─── */}
        <FeatureGrid
          title={pageData.cabins.title}
          subtitle={`${pageData.cabins.intro} ${pageData.cabins.theRetreatText}`}
          features={pageData.cabins.types.map((type) => ({
            title: type,
            description:
              'Available across multiple decks with varying views, layouts, and included amenities.',
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.cabins.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 9: THE RETREAT VS ROYAL SUITES (Value Proposition Highlight) ─── */}
        <ValuePropositionHighlight
          title={pageData.retreatVsSuites.title}
          subtitle={`${pageData.retreatVsSuites.intro} ${pageData.retreatVsSuites.sub} ${pageData.retreatVsSuites.emphasis}`}
          items={[
            {
              title: pageData.retreatVsSuites.celebrity.title,
              description: pageData.retreatVsSuites.celebrity.description,
              impact: 'Celebrity The Retreat',
            },
            {
              title: pageData.retreatVsSuites.royal.title,
              description: pageData.retreatVsSuites.royal.description,
              impact: 'Royal Caribbean Suites',
            },
          ]}
        />

        {/* ─── SECTION 10: ENTERTAINMENT & NIGHTLIFE (Highlights Split Image Showcase) ─── */}
        <HighlightsSplit
          title={pageData.entertainment.title}
          items={[
            {
              title: pageData.entertainment.royal.title,
              description: pageData.entertainment.royal.description,
              icon: 'Sparkles',
            },
            {
              title: pageData.entertainment.celebrity.title,
              description: pageData.entertainment.celebrity.description,
              icon: 'UtensilsCrossed',
            },
          ]}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox
            content={`${pageData.entertainment.intro} ${pageData.entertainment.sub}`}
            authorImage={insiderTipImg}
          />
        </div>

        {/* ─── SECTION 11: ACTIVITIES COMPARISON (Curvilinear Grid) ─── */}
        <CurvilinearGrid
          title={pageData.activities.title}
          subtitle={pageData.activities.eyebrow}
          paragraphs={[
            pageData.activities.intro,
            pageData.activities.royalSummary,
            pageData.activities.celebritySummary,
          ]}
          items={pageData.activities.preferences.map((a, idx) => ({
            title: a.activity,
            description: `Better suited for: ${a.better}`,
            icon: ['Waves', 'Sparkles', 'Ship', 'Compass'][idx % 4],
          }))}
        />

        {/* ─── SECTION 12: SERVICE AND ATMOSPHERE (Premium Intro Arched Split) ─── */}
        <PremiumIntro
          sections={[
            {
              heading: pageData.service.title,
              paragraphs: [
                pageData.service.intro,
                pageData.service.sub,
                pageData.service.calmEnvironment,
                pageData.service.activeEnvironment,
              ],
            },
          ]}
          ctaText="Explore Options"
          ctaLink="/contact"
          watermarkText="SERVICE"
        />

        {/* ─── SECTION 13: DESTINATIONS AND ITINERARIES (Three Column Grid) ─── */}
        <ThreeColumnGrid
          title={pageData.destinations.title}
          subtitle={`${pageData.destinations.intro} ${pageData.destinations.sub}`}
          items={pageData.destinations.itineraryDetails.map((detail, idx) => ({
            title: detail,
            category: 'ITINERARY CHECK',
            description:
              'Evaluate this key itinerary factor when comparing sailings across world regions.',
            placeholderLabel: `Detail 0${idx + 1}`,
          }))}
        />

        {/* ─── SECTION 14: COST AND PRICING (Budget Breakdown Table) ─── */}
        <BudgetBreakdownTable
          data={{
            title: pageData.cost.title,
            description: `${pageData.cost.intro} ${pageData.cost.sub} ${pageData.cost.completePriceIntro}`,
            headers: ['Cost Factor / Item', 'Budget Consideration'],
            rows: pageData.cost.totalCostItems.map((item, idx) => [
              item,
              `Key factor influenced by ${pageData.cost.factors[idx % pageData.cost.factors.length]}.`,
            ]),
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.cost.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 15: INCLUSIONS & BOOKING QUESTIONS (Inclusions List) ─── */}
        <InclusionsList
          title={pageData.inclusions.title}
          inclusions={pageData.inclusions.questions.map((q) => ({
            title: q,
            description: 'Critical verification question before booking to avoid surprise onboard costs.',
          }))}
          expertNote={`${pageData.inclusions.sub} ${pageData.inclusions.intro} ${pageData.inclusions.note}`}
        />

        {/* ─── SECTION 16: FIRST-TIME CRUISERS & DECISION GUIDE (Icon Grid) ─── */}
        <IconGrid
          title={pageData.choiceGuide.title}
          subtitle={`${pageData.firstTime.intro} ${pageData.firstTime.celebrity} ${pageData.firstTime.royal} ${pageData.choiceGuide.intro}`}
          items={pageData.choiceGuide.guides.map((g) => ({
            title: g.label,
            description: g.items.join(', '),
            icon: 'compass',
          }))}
        />
        <div className="max-w-[1200px] mx-auto px-6 -mt-8 mb-16">
          <AuthorityBox content={pageData.choiceGuide.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 17: BETTER COMPARISON METHOD (Comparison Table) ─── */}
        <ComparisonTable
          data={{
            title: pageData.method.title,
            headers: ['Factor', 'What to compare'],
            rows: pageData.method.table.map((r) => [r.factor, r.compare]),
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <AuthorityBox content={pageData.method.note} authorImage={insiderTipImg} />
        </div>

        {/* ─── SECTION 18: KEY TAKEAWAYS (Expert Authority Checklist) ─── */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeaways.title}
          subtitle="Essential summary points when deciding between Celebrity Cruises and Royal Caribbean."
          points={pageData.keyTakeaways.items}
        />

        {/* ─── SECTION 19: VIDEO SHOWCASE (InclusionsVideoOne with Placeholder) ─── */}
        <InclusionsVideoOne
          data={{
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
            youtubeId: 'placeholder',
          }}
        />

        {/* ─── SECTION 20: ANGELA HUGHES EXPERT CREDENTIALS ─── */}
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

        {/* ─── SECTION 21: 15 FAQS ACCORDION ─── */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions',
            faqs: pageData.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            })),
          }}
        />

        {/* ─── SECTION 22: FINAL CTA ─── */}
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

export default CelebrityCruisesVsRoyalCaribbean;