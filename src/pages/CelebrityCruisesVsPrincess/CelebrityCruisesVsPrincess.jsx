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
import SimplePersonaCards from '@/components/ui/SimplePersonaCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureGrid from '@/components/ui/FeatureGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import DestinationEditorialGrid from '@/components/ui/DestinationEditorialGrid';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import IconGrid from '@/components/ui/IconGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import InclusionsVideoOne from '@/components/ui/InclusionsVideoOne';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

import angelaImage from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.webp';

function CelebrityCruisesVsPrincess() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess',
        url: 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess',
        name: pageData.meta.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess',
        },
        publisher: {
          '@id': 'https://www.tripsandships.com/#organization',
        },
      },
      {
        '@type': 'Article',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#article',
        headline: pageData.hero.title,
        description: pageData.meta.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess',
        },
        publisher: {
          '@id': 'https://www.tripsandships.com/#organization',
        },
        articleSection: [
          'Celebrity Cruises vs Princess Cruises',
          'Ships',
          'Dining',
          'Cabins',
          'Entertainment',
          'Itineraries',
          'Value',
          'Frequently Asked Questions',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#faq',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#breadcrumb',
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
            name: 'Celebrity Cruises vs. Princess Cruises',
            item: 'https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.tripsandships.com/#organization',
        name: 'Trips & Ships',
        url: 'https://www.tripsandships.com',
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

      <main className="w-full bg-slate-950 text-slate-100 selection:bg-gold-500 selection:text-navy-950 overflow-hidden">
        {/* ─── SECTION 1: HERO (Comparison Hero) ─── */}
        <ComparisonHero
          eyebrow={pageData.hero.eyebrow}
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          badge="Head-to-Head Comparison"
          primaryCtaText="Speak with a cruise specialist"
          primaryCtaLink="/contact"
        />

        {/* ─── SECTION 2: AT A GLANCE (Comparison Table) ─── */}
        <ComparisonTable
          title={pageData.atAGlance.title}
          subtitle={`${pageData.atAGlance.lead1} ${pageData.atAGlance.lead2}`}
          headers={['Category', 'Celebrity Cruises', 'Princess Cruises']}
          rows={pageData.atAGlance.table.map((row) => [
            row.category,
            row.celebrity,
            row.princess,
          ])}
        />

        {/* ─── SECTION 3: THE MAIN DIFFERENCE (Contained Showdown) ─── */}
        <ContainedShowdown
          title={pageData.mainDifference.title}
          brandA={{
            name: pageData.mainDifference.celebrity.title,
            features: [
              pageData.mainDifference.celebrity.description,
              'Contemporary architecture and design-forward spaces',
              'Edge Series magic carpet & innovative venues',
              'Upscale dining concepts and sophisticated vibes',
              'Polished resort atmosphere for adults & couples',
            ],
          }}
          brandB={{
            name: pageData.mainDifference.princess.title,
            features: [
              pageData.mainDifference.princess.description,
              'Classic cruise layout with modern enhancements',
              'Signature MedallionClass wearable technology',
              'Renowned destination-focused itineraries & Alaska presence',
              'Broad multi-generational family and couple appeal',
            ],
          }}
        />

        {/* ─── SECTION 4: SHIPS & FLEET STYLE (Cost Value Analysis Cards) ─── */}
        <CostValueAnalysisCards
          title={pageData.ships.title}
          subtitle={`${pageData.ships.intro} ${pageData.ships.choiceBox.celebrityPref} ${pageData.ships.choiceBox.princessPref} ${pageData.ships.choiceBox.footer}`}
          includedTitle={pageData.ships.celebrity.title}
          extrasTitle={pageData.ships.princess.title}
          included={pageData.ships.celebrity.features.map((f) => ({
            title: f,
            description: `${pageData.ships.celebrity.lead} ${pageData.ships.celebrity.note}`,
          }))}
          extras={pageData.ships.princess.features.map((f) => ({
            title: f,
            description: pageData.ships.princess.lead,
          }))}
        />

        {/* ─── SECTION 5: COUPLES TRAVEL (Simple Persona Cards) ─── */}
        <SimplePersonaCards
          title={pageData.couples.title}
          subtitle={`${pageData.couples.lead} ${pageData.couples.note}`}
          personas={[
            {
              title: pageData.couples.celebrity.title,
              description: pageData.couples.celebrity.points.join(' · '),
              icon: 'Heart',
            },
            {
              title: pageData.couples.princess.title,
              description: pageData.couples.princess.points.join(' · '),
              icon: 'Compass',
            },
          ]}
        />

        {/* ─── SECTION 6: FAMILY TRAVEL (Brand Pillars Showcase) ─── */}
        <BrandPillarsShowcase
          data={{
            title: pageData.families.title,
            subtitle: `${pageData.families.lead} ${pageData.families.princessDesc} ${pageData.families.celebrityDesc} Note: ${pageData.families.note}`,
            pillars: [
              {
                icon: 'star',
                title: pageData.families.checklistTitle,
                description: pageData.families.checklist.join(', '),
              },
              {
                icon: 'compass',
                title: 'Family Atmosphere & Style',
                description: `${pageData.families.princessDesc} ${pageData.families.celebrityDesc}`,
              },
            ],
          }}
        />

        {/* ─── SECTION 7: DINING EXPERIENCE (Editorial Feature Showcase) ─── */}
        <EditorialFeatureShowcase
          title={pageData.dining.title}
          subtitle={`${pageData.dining.intro} ${pageData.dining.choiceBox.celebrityFocus} ${pageData.dining.choiceBox.princessFocus} ${pageData.dining.choiceBox.note}`}
          features={[
            {
              title: pageData.dining.celebrity.title,
              description: `${pageData.dining.celebrity.lead} ${pageData.dining.celebrity.venues.join(', ')}. ${pageData.dining.celebrity.note}`,
            },
            {
              title: pageData.dining.princess.title,
              description: `${pageData.dining.princess.lead} ${pageData.dining.princess.venues.join(', ')}.`,
            },
          ]}
        />

        {/* ─── SECTION 8: DRINK PACKAGES (Inclusions List) ─── */}
        <InclusionsList
          title={pageData.drinks.title}
          inclusions={pageData.drinks.considerations.map((c) => ({
            title: c,
            description: 'Evaluate individual daily consumption vs package pricing to maximize value.',
          }))}
          expertNote={`${pageData.drinks.lead} ${pageData.drinks.note}`}
        />

        {/* ─── SECTION 9: CABINS & SUITES (Feature Grid) ─── */}
        <FeatureGrid
          title={pageData.cabins.title}
          subtitle={`${pageData.cabins.lead} ${pageData.cabins.sub} ${pageData.cabins.choiceBox.celebrityFocus} ${pageData.cabins.choiceBox.princessFocus} ${pageData.cabins.choiceBox.note}`}
          features={pageData.cabins.table.map((cab) => ({
            title: `${cab.type} Staterooms`,
            description: `Celebrity: ${cab.celebrity} | Princess: ${cab.princess}`,
            badge: cab.type,
          }))}
        />

        {/* ─── SECTION 10: ENTERTAINMENT & NIGHTLIFE (Highlights Split) ─── */}
        <HighlightsSplit
          title={pageData.entertainment.title}
          items={[
            {
              title: pageData.entertainment.celebrity.title,
              description: `Sophisticated theater productions, live musical performances, and curated evening lounges. ${pageData.entertainment.footer}`,
              features: pageData.entertainment.celebrity.items,
            },
            {
              title: pageData.entertainment.princess.title,
              description: `Broad programming featuring Movies Under the Stars, theater shows, games, and destination enrichment. ${pageData.entertainment.footer}`,
              features: pageData.entertainment.princess.items,
            },
          ]}
        />

        {/* ─── SECTION 11: ITINERARIES & DESTINATIONS (Three Column Grid) ─── */}
        <div className="w-full bg-white">
          <ThreeColumnGrid
            title={pageData.itineraries.title}
            subtitle={`${pageData.itineraries.lead} ${pageData.itineraries.mid} ${pageData.itineraries.matterBox.footer}`}
            items={[
              {
                title: 'Global Sailing Regions',
                category: 'Destinations',
                description: pageData.itineraries.regions.join(', '),
              },
              {
                title: pageData.itineraries.matterBox.title,
                category: 'Itinerary Planning',
                description: pageData.itineraries.matterBox.checklist.slice(0, 5).join(', '),
              },
              {
                title: 'Key Port Factors',
                category: 'Trip Priorities',
                description: pageData.itineraries.matterBox.checklist.slice(5).join(', '),
              },
            ]}
          />
        </div>

        {/* ─── SECTION 12: SERVICE & ATMOSPHERE (Premium Intro) ─── */}
        <PremiumIntro
          sections={[
            {
              eyebrow: pageData.service.eyebrow,
              heading: pageData.service.title,
              paragraphs: [
                pageData.service.lead,
                pageData.service.sub,
                pageData.service.footer,
              ],
              list: pageData.service.factors.map(
                (factor) => `${pageData.service.cardLabel}: ${factor}`
              ),
            },
          ]}
        />

        {/* ─── CENTER OF THE PAGE: INSIDER TIP (Authority Box with image.webp) ─── */}
        <div className="max-w-[1200px] mx-auto px-6 my-16">
          <AuthorityBox
            content={pageData.atAGlance.note}
            authorImage={insiderTipImg}
          />
        </div>

        {/* ─── SECTION 13: TECHNOLOGY (Value Proposition Highlight) ─── */}
        <ValuePropositionHighlight
          title={pageData.technology.title}
          subtitle={`${pageData.technology.text1} ${pageData.technology.text2}`}
          items={[
            {
              title: 'Princess MedallionClass',
              description: 'Wearable token & app providing touchless stateroom access, on-demand food/drink delivery anywhere on ship, expedited port check-in, and interactive navigation.',
              icon: 'Cpu',
            },
            {
              title: 'Celebrity Digital Platform',
              description: 'Mobile app and guest portal focused on seamless dining reservations, shore excursion bookings, digital key access, and onboard automation on Edge Series ships.',
              icon: 'Sparkles',
            },
          ]}
        />

        {/* ─── SECTION 14: WHICH IS MORE RELAXED (Curvilinear Grid) ─── */}
        <CurvilinearGrid
          title={pageData.relaxed.title}
          subtitle={pageData.relaxed.subLabel}
          paragraphs={[pageData.relaxed.celebrityText, pageData.relaxed.princessText]}
          items={pageData.relaxed.checklist.map((item) => ({
            title: item,
            description: `Key consideration determining overall cruise pace and onboard relaxation.`,
            icon: 'Waves',
          }))}
        />

        {/* ─── SECTION 15: ALASKA CRUISES (Destination Editorial Grid) ─── */}
        <DestinationEditorialGrid
          eyebrow={pageData.alaska.eyebrow}
          title={pageData.alaska.title}
          subtitle={`${pageData.alaska.lead} ${pageData.alaska.sub} ${pageData.alaska.footer}`}
          items={pageData.alaska.checklist.map((item, idx) => ({
            title: item,
            subtitle: `Priority #${idx + 1}`,
            description: `Vital planning consideration for comparing Celebrity and Princess sailings in Alaska.`,
          }))}
        />

        {/* ─── SECTION 16: VALUE FOR MONEY (Budget Breakdown Table) ─── */}
        <BudgetBreakdownTable
          data={{
            title: pageData.value.title,
            description: `${pageData.value.intro} ${pageData.value.mid} ${pageData.value.methodBox.footer}`,
            headers: ['Cost Factor / Item', 'Comparison Consideration'],
            rows: pageData.value.factors.map((item, idx) => [
              item,
              `Evaluate for exact travel dates and ${pageData.value.methodBox.checklist[idx % pageData.value.methodBox.checklist.length].toLowerCase()}.`,
            ]),
          }}
        />

        {/* ─── SECTION 17: WHICH CRUISE LINE SHOULD YOU CHOOSE (Generic Checklist Cards) ─── */}
        <GenericChecklistCards
          title={pageData.choice.title}
          subtitle={pageData.choice.lead}
          cards={[
            {
              title: pageData.choice.celebrity.title,
              items: pageData.choice.celebrity.items,
            },
            {
              title: pageData.choice.princess.title,
              items: pageData.choice.princess.items,
            },
          ]}
        />

        {/* ─── SECTION 18: IF YOU ARE STILL UNSURE (Step By Step Guide) ─── */}
        <StepByStepGuide
          title={pageData.unsure.title}
          subtitle={`${pageData.unsure.eyebrow} · ${pageData.unsure.footer}`}
          steps={pageData.unsure.sequence.map((step, idx) => ({
            title: `Step ${idx + 1}: ${step}`,
            description: `Evaluate ${step.toLowerCase()} first before making brand-level assumptions to ensure the itinerary and ship fit your vacation style.`,
          }))}
        />

        {/* ─── SECTION 19: CHECKLIST BEFORE BOOKING (Icon Grid) ─── */}
        <IconGrid
          title={pageData.bookingChecklist.title}
          subtitle={`${pageData.bookingChecklist.intro} ${pageData.bookingChecklist.footer}`}
          items={pageData.bookingChecklist.checklist.map((item) => ({
            title: item,
            description: 'Essential verification checkpoint prior to confirming your cruise reservation.',
            icon: 'activity',
          }))}
        />

        {/* ─── SECTION 20: VIDEO SHOWCASE (Inclusions Video One) ─── */}
        <InclusionsVideoOne
          data={{
            youtubeId: 'placeholder',
            title: pageData.video.title,
            subtitle: pageData.video.caption,
            description: pageData.video.subtitle,
          }}
        />

        {/* ─── SECTION 21: ANGELA HUGHES AUTHORITY & CREDENTIALS (Expert Credentials with Media (2).jpg) ─── */}
        <ExpertCredentials
          name={pageData.expertAdvisor.name}
          role={pageData.expertAdvisor.role}
          eyebrow={pageData.expertAdvisor.eyebrow}
          heading={pageData.expertAdvisor.heading}
          quote={pageData.expertAdvisor.quote}
          bio={pageData.expertAdvisor.bio}
          experienceBadge={pageData.expertAdvisor.experienceBadge}
          standoutPills={pageData.expertAdvisor.pills}
          stats={pageData.expertAdvisor.stats}
          image={angelaImage}
        />

        {/* ─── SECTION 22: KEY TAKEAWAYS (Expert Authority Checklist) ─── */}
        <ExpertAuthorityChecklist
          title={pageData.keyTakeaways.title}
          subtitle={pageData.keyTakeaways.lead}
          points={pageData.keyTakeaways.items}
        />

        {/* ─── SECTION 23: FAQS (FAQ Accordion) ─── */}
        <FAQAccordion
          title="Frequently Asked Questions"
          subtitle="Clear, honest answers to help you choose between Celebrity Cruises and Princess Cruises."
          faqs={pageData.faqs}
        />

        {/* ─── SECTION 24: CTA (Center CTA) ─── */}
        <CenterCTA
          title={pageData.cta.title}
          subtitle={pageData.cta.subtitle}
          primaryText={pageData.cta.primaryBtnText}
          primaryUrl={pageData.cta.primaryBtnUrl}
        />
      </main>
    </>
  );
}

export default CelebrityCruisesVsPrincess;