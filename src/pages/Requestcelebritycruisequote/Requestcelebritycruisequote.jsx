import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Shared UI System Components (Unique Component Architecture - All Sections Unique)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import FeatureGrid from '@/components/ui/FeatureGrid';
import AuthorityBox from '@/components/ui/AuthorityBox';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ExpertReviewVerdict from '@/components/ui/ExpertReviewVerdict';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import IconGrid from '@/components/ui/IconGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

function RequestCelebrityCruiseQuote() {
  // 1. Data mapping for PremiumIntro (Section 2)
  const introSections = [
    {
      heading: pageData.intro.heading,
      paragraphs: pageData.intro.paragraphs
    }
  ];

  // 2. Data mapping for At a Glance Table (Section 4)
  const glanceTableData = {
    title: "What Can Be Included in a Celebrity Cruise Quote?",
    headers: ["Vacation Component", "Inclusion / Planning Support"],
    rows: pageData.glance.map(item => [item.feature, item.detail])
  };

  // 3. Data mapping for Why Request a Quote (Section 5: BentoGlassmorphismGrid)
  const whyRequestBentoItems = pageData.whyRequest.factors.map((f, i) => ({
    title: f.label,
    description: "Evaluated by certified advisors to ensure your itinerary, dates, and cabin fit your vision.",
    category: "PLANNING FACTOR",
    tag: `Factor 0${i + 1}`,
    span: i === 0 || i === 3 ? "col-span-1 md:col-span-2" : "col-span-1"
  }));

  // 4. Data mapping for Individual vs Suite Quotes (Section 6: CostValueAnalysisCards)
  const individualCards = pageData.individualQuote.factors.map(f => ({
    title: f.label,
    description: "Evaluated against sailing dates, destination ports, and preferred stateroom category."
  }));
  const suiteCards = [
    ...pageData.suiteQuote.factors.map(f => ({
      title: f.label,
      description: "Compared against The Retreat privileges, included services, and overall upgrade value."
    })),
    {
      title: "Upgrade Evaluation",
      description: pageData.suiteQuote.note
    }
  ];

  // 5. Data mapping for Family & Multi-Gen (Section 7: GenericChecklistCards)
  const familyMultiGenCards = [
    {
      title: pageData.familyQuote.title,
      items: [
        ...pageData.familyQuote.factors.map(f => f.label),
        pageData.familyQuote.note
      ]
    },
    {
      title: pageData.multiGenQuote.title,
      items: [
        ...pageData.multiGenQuote.factors.map(f => f.label),
        pageData.multiGenQuote.note
      ]
    }
  ];

  // 6. Data mapping for Group Quote (Section 8: BrandPillarsShowcase)
  const groupPillarsData = {
    title: pageData.groupQuote.title,
    subtitle: `${pageData.groupQuote.lead} (Celebrity standard group: 8 staterooms or more)`,
    pillars: pageData.groupQuote.types.map(t => ({
      title: t.label,
      description: "Dedicated group coordination, tiered pricing, dining arrangements, and stateroom blocks.",
      icon: "users"
    }))
  };

  // 7. Data mapping for What Information Do We Need (Section 9: BentoQuickFacts)
  const infoNeededItems = pageData.infoNeeded.items.map((item, idx) => ({
    title: `Item 0${idx + 1}`,
    label: `Item 0${idx + 1}`,
    value: item.label,
    description: item.label
  }));

  // 8. Data mapping for Quote Request Process (Section 10: InteractivePlanningRoadmap)
  const processSteps = pageData.steps.map((s, idx) => ({
    timeframe: `Step 0${idx + 1}`,
    title: s.title,
    description: `${s.desc} ${s.tags.length > 0 ? s.tags.join(' • ') : ''}`
  }));

  // 9. Data mapping for Destinations (Section 11: FeatureGrid)
  const destinationFeatures = pageData.destinations.map(d => ({
    title: d.name,
    description: d.intro,
    tags: d.bullets,
    highlight: d.highlight
  }));

  // 10. Data mapping for Family Rooms vs Groups (Section 13: DetailedInclusionsList)
  const familyGroupItems = [
    {
      title: "Can I Request Multiple Rooms?",
      paragraphs: [
        "Yes. If your family needs more than one stateroom, include the number of rooms and preferred configuration in the request. We can help explore:"
      ],
      lists: [
        {
          items: pageData.familyRooms
        }
      ]
    },
    {
      title: "When Should I Request a Group Quote?",
      paragraphs: [
        "The earlier the better. Group travel requires more coordination than an individual booking. Early planning can provide more time to evaluate:"
      ],
      lists: [
        {
          items: pageData.groupEvaluate
        }
      ],
      highlight: {
        text: pageData.familyGroupNote
      }
    }
  ];

  // 11. Data mapping for Direct vs Quote (Section 14: ExpertReviewVerdict)
  const directVsQuotePros = pageData.directVsQuote.quoteItems;
  const directVsQuoteCons = [
    "Suitable only if you already know exactly what ship, stateroom and fare you want",
    "Must compare promotions, cabin locations and loyalty perks entirely on your own",
    "No dedicated contact person to evaluate flights, pre/post hotels and transfers"
  ];

  // 12. Data mapping for What Makes a Good Quote (Section 15: ThreeColumnGrid)
  const goodQuoteItems = pageData.goodQuote.map(g => ({
    title: g.name,
    category: "EVALUATION CRITERIA",
    description: g.desc,
    stats: [
      { label: "Category", value: g.name },
      { label: "Role", value: "Value Factor" }
    ]
  }));

  // 13. Data mapping for What You Don't Need to Know (Section 16: AuthorityGrid)
  const dontNeedToKnowItems = pageData.dontNeedToKnow.map((item) => ({
    title: item,
    description: ""
  }));

  // 14. Data mapping for Traveler Personas (Section 17: TravelerPersonaCards)
  const travelerPersonas = pageData.whoShould.map(w => ({
    title: w.feature,
    description: w.detail,
    icon: w.feature.includes("First-Time") ? "Compass" : w.feature.includes("Couples") ? "Heart" : w.feature.includes("Families") ? "Landmark" : w.feature.includes("Luxury") ? "Crown" : "Users"
  }));

  // 15. Data mapping for Pre-Submission Checklist (Section 18: IconGrid)
  const checklistGridItems = pageData.checklist.map(c => ({
    title: c.label,
    description: "Helps tailor ship, stateroom, and itinerary options precisely to your vacation vision.",
    icon: c.icon === "Clock" ? "clock" : c.icon === "Wallet" ? "tag" : c.icon === "Sun" ? "sun" : "activity"
  }));

  // 16. Data mapping for Why Use Trips & Ships (Section 20: LuxuryGrid)
  const whyPlanItems = pageData.whyPlan.items.map(item => ({
    title: item.title,
    description: "Comprehensive personalized support to ensure you secure the genuine best value.",
    icon: "check"
  }));

  // 17. Schema.org JSON-LD Graph (Exact Ritz-Carlton Architecture Pattern)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/",
        "name": pageData.seo.title,
        "headline": pageData.seo.metaTitle,
        "description": pageData.seo.metaDescription,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": pageData.seo.imageUrl,
          "caption": pageData.seo.title
        },
        "image": pageData.seo.imageUrl,
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Celebrity Cruises",
          "Cruise Quote & Custom Planning",
          "Suite Planning",
          "Group Cruise Coordination",
          "Premium Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Request a Celebrity Cruise Quote",
            "item": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/request-a-quote/#faq",
        "mainEntity": pageData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question.replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="w-full bg-white">
        {/* ─── SECTION 1: Hero (ComparisonHero Component) ─── */}
        <ComparisonHero
          badge={pageData.hero.badge}
          title={pageData.hero.title}
          subtitle={pageData.hero.subtitle}
          primaryCtaText={pageData.hero.primaryCta}
          primaryCtaLink={pageData.hero.primaryCtaLink}
          secondaryCtaText={pageData.hero.secondaryCta}
          secondaryCtaLink={pageData.hero.secondaryCtaLink}
        />

        {/* ─── SECTION 2: Overview (PremiumIntro Component) ─── */}
        <PremiumIntro
          sections={introSections}
          watermarkText="Quote"
        />

        {/* ─── SECTION 3: What Can I Request a Quote For? (ExpertAuthorityChecklist Component) ─── */}
        <div className="relative">
          <ExpertAuthorityChecklist
            title={pageData.intro.quickAnswerHeading}
            subtitle={pageData.intro.quickAnswer}
            points={pageData.quoteFor.map(q => q.label)}
          />
          <div className="max-w-3xl mx-auto px-6 -mt-10 pb-12 text-center relative z-10">
            <p className="font-sans text-xs md:text-sm text-slate-600 italic bg-white border border-slate-200/90 rounded-full py-2.5 px-6 shadow-sm inline-block">
              {pageData.intro.quickAnswerFooter}
            </p>
          </div>
        </div>

        {/* ─── SECTION 4: What Can Be Included (ComparisonTable Component) ─── */}
        <ComparisonTable
          data={glanceTableData}
        />

        {/* ─── SECTION 5: Why Request a Quote (BentoGlassmorphismGrid Component) ─── */}
        <BentoGlassmorphismGrid
          title={pageData.whyRequest.heading}
          subtitle={pageData.whyRequest.lead}
          bentoItems={whyRequestBentoItems}
        />
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
          <p className="font-sans text-sm md:text-base text-slate-600 bg-ice-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm leading-relaxed">
            {pageData.whyRequest.footerNote}
          </p>
        </div>

        {/* ─── SECTION 6: Individual & Suite Cruise Quotes (CostValueAnalysisCards Component) ─── */}
        <CostValueAnalysisCards
          title="Individual vs. Suite Celebrity Cruise Quotes"
          subtitle="Comparing standard accommodations and The Retreat suite upgrades."
          includedTitle={pageData.individualQuote.title}
          extrasTitle={pageData.suiteQuote.title}
          included={individualCards}
          extras={suiteCards}
        />

        {/* ─── SECTION 7: Family & Multi-Generational Quotes (GenericChecklistCards Component) ─── */}
        <GenericChecklistCards
          title="Celebrity Family & Multi-Generational Cruise Quotes"
          subtitle="Accommodating diverse priorities across generations and connecting staterooms."
          cards={familyMultiGenCards}
        />

        {/* ─── SECTION 8: Group Cruise Quotes (BrandPillarsShowcase Component) ─── */}
        <BrandPillarsShowcase
          data={groupPillarsData}
        />

        {/* ─── SECTION 9: What Information Do We Need? (BentoQuickFacts Component) ─── */}
        <section className="w-full bg-white">
          <BentoQuickFacts
            title={pageData.infoNeeded.title}
            paragraphs={[pageData.infoNeeded.lead]}
            items={infoNeededItems}
          />
          <div className="max-w-4xl mx-auto px-6 -mt-8 pb-16 text-center">
            <p className="font-sans text-sm md:text-base text-slate-600 bg-ice-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm leading-relaxed">
              {pageData.infoNeeded.note}
            </p>
          </div>
        </section>

        {/* ─── SECTION 10: Quote Request Process (InteractivePlanningRoadmap Component) ─── */}
        <InteractivePlanningRoadmap
          title="Celebrity Cruise Quote Request Process"
          subtitle="A seamless 5-step collaborative journey from initial preferences to finalized booking."
          steps={processSteps}
        />

        {/* ─── SECTION 11: Celebrity Cruise Destinations (FeatureGrid Component) ─── */}
        <FeatureGrid
          title="Celebrity Cruise Destinations"
          subtitle="Matching top global itineraries and regional highlights to your vacation schedule."
          features={destinationFeatures}
          bgClass="bg-slate-50"
        />

        {/* ─── SECTION 12: Is a Suite Worth the Upgrade? (AuthorityBox Component) ─── */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <AuthorityBox
            title={pageData.suiteWorth.eyebrow}
            content={pageData.suiteWorth.lead}
            author="Angela Hughes, Luxury Cruise Planning Expert"
          />
        </div>

        {/* ─── SECTION 13: Celebrity Cruise Quotes for Families & Groups (DetailedInclusionsList Component) ─── */}
        <DetailedInclusionsList
          title="Celebrity Cruise Quotes for Families & Groups"
          items={familyGroupItems}
        />

        {/* ─── SECTION 14: Quote vs Booking Direct (ExpertReviewVerdict Component) ─── */}
        <ExpertReviewVerdict
          title={pageData.directVsQuote.heading}
          prosTitle={pageData.directVsQuote.quoteTitle}
          pros={directVsQuotePros}
          consTitle={pageData.directVsQuote.directTitle}
          cons={directVsQuoteCons}
          bottomNote={pageData.directVsQuote.note}
        />

        {/* ─── SECTION 15: What Makes a Good Quote? (ThreeColumnGrid Component) ─── */}
        <ThreeColumnGrid
          title="What Makes a Good Celebrity Cruise Quote?"
          subtitle="A useful quote should make it easy to understand more than just the base cruise fare."
          items={goodQuoteItems}
        />

        {/* ─── SECTION 16: What You Don't Need to Know (AuthorityGrid Component) ─── */}
        <AuthorityGrid
          title="Celebrity Cruise Quote: What You Don't Need to Know"
          subtitle="You do not need to know the following before requesting a quote:"
          items={dontNeedToKnowItems}
        />

        {/* ─── SECTION 17: Who Should Request a Quote? (TravelerPersonaCards Component) ─── */}
        <TravelerPersonaCards
          title="Who Should Request a Celebrity Cruise Quote?"
          subtitle="Tailored advice across every traveler style and group dynamic."
          personas={travelerPersonas}
        />

        {/* ─── SECTION 18: Pre-Submission Checklist (IconGrid Component) ─── */}
        <IconGrid
          title="Celebrity Cruise Quote Checklist"
          subtitle="Consider these helpful details before submitting your request — provide as much or as little as you currently know."
          items={checklistGridItems}
        />

        {/* ─── SECTION 19: Expert Insight from Angela Hughes (ExpertCredentials Component) ─── */}
        <ExpertCredentials
          name={pageData.expert.name}
          title={pageData.expert.title}
          image={ProfilePictureAH}
          quote={pageData.expert.quote}
          quoteSubtitle={pageData.expert.headline}
          bio={pageData.expert.lead}
          credentials={pageData.expert.expertise}
          ctaText="Request My Celebrity Cruise Quote"
          ctaLink="/contact"
        />

        {/* ─── SECTION 20: Why Use Trips & Ships Luxury Travel? (LuxuryGrid Component) ─── */}
        <LuxuryGrid
          title={pageData.whyPlan.heading}
          subtitle={pageData.whyPlan.lead}
          items={whyPlanItems}
        />

        {/* ─── SECTION 21: Frequently Asked Questions (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Essential answers to common questions about requesting a Celebrity Cruise quote.",
            faqs: pageData.faqs
          }}
        />

        {/* ─── SECTION 22: Final Verdict & CTA (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.centerCta.title}
          description={`${pageData.finalVerdict.p1} ${pageData.finalVerdict.p2} ${pageData.centerCta.description}`}
          buttonText={pageData.centerCta.primaryCta}
          buttonLink="/contact"
        />
      </main>

      <Navbar />
    </>
  );
}

export default RequestCelebrityCruiseQuote;