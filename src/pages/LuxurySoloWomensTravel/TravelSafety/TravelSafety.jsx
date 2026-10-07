import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Navbar from "../../../components/Navbar/Navbar";

// Shared Existing UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ItineraryCards from '@/components/ui/ItineraryCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
// import angelaHughesImg from '@/assets/Angela_Hughes.jpg';

// Assets (Commented out per project preference)
// import WomenOnlyToursImg from "../../../assets/WomenOnlyTours.jpg";
// import WomenOver50Img from "../../../assets/WomenOver50.jpg";
// import DestinationSafetyImg from "../../../assets/DestinationSafety.jpg";
// import CruiseSafetyImg from "../../../assets/CruiseSafety.jpg";
// import SafariSafetyImg from "../../../assets/SafariSafety.jpg";
// import RiverSafetyImg from "../../../assets/RiverSafety.jpg";

const TravelSafety = () => {

  // 1. Independence Matrix Table Data
  const independenceTableData = {
    title: pageData.independenceMatrix.title,
    headers: pageData.independenceMatrix.headers,
    rows: pageData.independenceMatrix.rows.map((row) =>
      Array.isArray(row) ? row : [row.style, row.level, row.support]
    )
  };

  // 2. Cruise & River Philosophy Comparison Data
  const cruiseAndRiverPhilosophyData = {
    title: "Is Solo Travel Safe on a Luxury Cruise & River Journeys?",
    subtitle: pageData.cruiseAndRiverSafety.cruise.lead,
    sailing: {
      label: pageData.cruiseAndRiverSafety.cruise.title,
      philosophy: "Full-Service Structured Ocean Cruising",
      points: pageData.cruiseAndRiverSafety.cruise.accessPoints
    },
    allSuite: {
      label: pageData.cruiseAndRiverSafety.river.title,
      philosophy: "Intimate Destination-Focused River Cruising",
      points: [
        "Consistent onboard environment across destinations",
        "Explore multiple destinations without repeatedly packing or changing hotels",
        "Simplified transportation logistics between historic ports and cities",
        "Organized shore excursions with experienced local guides",
        "Intimate ship community with natural opportunities to meet fellow travelers"
      ]
    },
    verdict: pageData.cruiseAndRiverSafety.cruise.conclusion
  };

  // 3. Women-Only & Over 50 Showdown Cards
  const womenOnlyBrandA = {
    name: pageData.womenOnlyAndOver50.womenOnly.title,
    // image: WomenOnlyToursImg,
    features: [
      pageData.womenOnlyAndOver50.womenOnly.lead,
      ...pageData.womenOnlyAndOver50.womenOnly.inclusions,
      pageData.womenOnlyAndOver50.womenOnly.conclusion
    ]
  };

  const womenOver50BrandB = {
    name: pageData.womenOnlyAndOver50.over50.title,
    // image: WomenOver50Img,
    features: [
      `${pageData.womenOnlyAndOver50.over50.lead} ${pageData.womenOnlyAndOver50.over50.sublead}`,
      ...pageData.womenOnlyAndOver50.over50.preferences,
      pageData.womenOnlyAndOver50.over50.conclusion
    ]
  };

  // 4. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions About Solo Female Travel Safety",
    subtitle: "Practical advice on destination safety, luxury cruises, river journeys, women-only tours, and building confidence.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 5. Destinations & Safari Itinerary Cards
  const destinationAndSafariCards = [
    {
      title: pageData.destinationsAndSafari.destinations.title,
      duration: "Curated Global Possibilities",
      description: `${pageData.destinationsAndSafari.destinations.lead} Popular luxury possibilities include: ${pageData.destinationsAndSafari.destinations.possibilities.join(', ')}. ${pageData.destinationsAndSafari.destinations.conclusion}`,
      // image: null
    },
    {
      title: pageData.destinationsAndSafari.safari.title,
      duration: "Specialized Wildlife Expeditions",
      description: `${pageData.destinationsAndSafari.safari.lead} ${pageData.destinationsAndSafari.safari.sublead} Luxury safari options include: ${pageData.destinationsAndSafari.safari.options.join(', ')}. ${pageData.destinationsAndSafari.safari.conclusion}`,
      // image: null
    }
  ];

  // 6. Advisor & Single Supplements 2-Card Checklist Items
  const advisorAndSupplementsCards = [
    {
      title: pageData.advisorAndSupplements.advisor.title,
      items: [
        pageData.advisorAndSupplements.advisor.lead,
        pageData.advisorAndSupplements.advisor.factorsTitle,
        ...pageData.advisorAndSupplements.advisor.factors,
        pageData.advisorAndSupplements.advisor.conclusion
      ]
    },
    {
      title: pageData.advisorAndSupplements.supplements.title,
      items: [
        pageData.advisorAndSupplements.supplements.lead,
        pageData.advisorAndSupplements.supplements.sublead,
        ...pageData.advisorAndSupplements.supplements.totalExperience
      ]
    }
  ];

  // 7. Expert Credentials Formatted for UI Component
  const formattedCredentials = pageData.expert.credentials.map((cred) =>
    typeof cred === 'string'
      ? cred
      : cred.title && cred.description
      ? `${cred.title}: ${cred.description}`
      : cred.label || cred.title || ''
  );

  // 8. Related Pillar Guides
  const relatedHubGuides = pageData.relatedGuides.guides.map((guide) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    placeholderLabel: guide.title.toUpperCase(),
    alt: guide.title,
    badgeCount: 1,
    mainUrl: guide.mainUrl
  }));

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* ─── SEO METADATA & SCHEMA ─── */}
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.metaTitle} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={(pageData.meta.keywords || pageData.meta.secondaryKeywords || []).join(', ')} />
        <link rel="canonical" href={pageData.meta.canonicalUrl} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(pageData.meta.schema)}
        </script>
      </Helmet>

      {/* ─── NAVBAR ─── */}
      <Navbar />

      {/* ─── 1. HERO SECTION (ComparisonHero Component) ─── */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={[
          pageData.hero.lead,
          pageData.hero.conclusion
        ]}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="safety-factors">
        {/* ─── 2. WHAT MAKES SOLO TRAVEL SAFER FOR WOMEN? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.whatMakesSoloTravelSafer.title}
            subtitle={`${pageData.whatMakesSoloTravelSafer.subtitle}\n\n${pageData.whatMakesSoloTravelSafer.lead}`}
            features={pageData.whatMakesSoloTravelSafer.considerations}
          />
          {/* Section Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 mt-4 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {pageData.whatMakesSoloTravelSafer.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 3. HOW CAN WOMEN STAY SAFE WHEN TRAVELING ALONE? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.howToStaySafe.title}
            subtitle="PRE-DEPARTURE PREPARATION & SITUATIONAL AWARENESS"
            paragraphs={[pageData.howToStaySafe.subtitle]}
            items={pageData.howToStaySafe.pillars}
          />
        </div>

        {/* ─── 4. CRUISE & RIVER CRUISE SAFETY (DualPhilosophyShowcase Component) ─── */}
        <div className="relative">
          <DualPhilosophyShowcase
            data={cruiseAndRiverPhilosophyData}
            // imageSailing={CruiseSafetyImg}
            // imageAllSuite={RiverSafetyImg}
          />
          {/* Dual Interlink Navigation Box */}
          <div className="max-w-4xl mx-auto px-6 mt-8 mb-20">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md flex flex-col items-center text-center space-y-6">
              <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Compare dedicated luxury ocean cruises and European river journeys for solo women:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  to={pageData.cruiseAndRiverSafety.cruise.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-navy-950 text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-navy-900 transition-all shadow text-center"
                >
                  {pageData.cruiseAndRiverSafety.cruise.linkText} &rarr;
                </Link>
                <Link
                  to={pageData.cruiseAndRiverSafety.river.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-stone-100 text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-stone-200 transition-all border border-stone-200 text-center"
                >
                  Solo River Cruises Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. WOMEN-ONLY TRAVEL & WOMEN OVER 50 (ContainedShowdown Component) ─── */}
        <div className="relative">
          <ContainedShowdown
            title="Specialized Journeys: Women-Only Tours & Solo Travel Over 50"
            brandA={womenOnlyBrandA}
            brandB={womenOver50BrandB}
          />
          {/* Dual Navigation Interlink Box */}
          <div className="max-w-4xl mx-auto px-6 mt-8 mb-20">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md flex flex-col items-center text-center space-y-6">
              <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Explore specialized women-only departures and tailored journeys for solo women over 50:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  to={pageData.womenOnlyAndOver50.womenOnly.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-navy-950 text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-navy-900 transition-all shadow text-center"
                >
                  Women-Only Tours &rarr;
                </Link>
                <Link
                  to={pageData.womenOnlyAndOver50.over50.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-stone-100 text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-stone-200 transition-all border border-stone-200 text-center"
                >
                  Women Over 50 Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. PRACTICAL SOLO TRAVEL SAFETY TIPS (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.practicalSafetyTips.title}
            subtitle={pageData.practicalSafetyTips.subtitle}
            rules={pageData.practicalSafetyTips.tips}
          />
        </div>

        {/* ─── 7. HOW MUCH INDEPENDENCE DO YOU WANT? (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable data={independenceTableData} />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 mt-6 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.independenceMatrix.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 8. TRAVEL ADVISOR & SINGLE SUPPLEMENTS (GenericChecklistCards Component) ─── */}
        <div className="relative">
          <GenericChecklistCards
            title="Travel Advisor Support & Understanding Single Supplements"
            subtitle="EXPERT GUIDANCE & TOTAL VALUE TRANSPARENCY"
            cards={advisorAndSupplementsCards}
          />
          {/* Single Supplements Interlink Box */}
          <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 text-center">
            <div className="p-6 md:p-8 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.advisorAndSupplements.advisor.conclusion}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-800">
                <Link
                  to={pageData.advisorAndSupplements.supplements.linkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.advisorAndSupplements.supplements.linkText} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 9. DESTINATIONS & SAFARI EXPEDITIONS (ItineraryCards Component) ─── */}
        <div className="relative">
          <ItineraryCards
            title="Curated Destinations & Luxury Safari Expeditions"
            items={destinationAndSafariCards}
          />
          {/* Dual Navigation Callout */}
          <div className="max-w-4xl mx-auto px-6 mt-8 mb-20">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md flex flex-col items-center text-center space-y-6">
              <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Explore in-depth destination possibilities and dedicated safari planning for solo women:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  to={pageData.destinationsAndSafari.destinations.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-navy-950 text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-navy-900 transition-all shadow text-center"
                >
                  Best Destinations &rarr;
                </Link>
                <Link
                  to={pageData.destinationsAndSafari.safari.linkUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-stone-100 text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-stone-200 transition-all border border-stone-200 text-center"
                >
                  Solo African Safaris &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 10. EMPOWERING SAFETY (ExpertAuthorityChecklist Component) ─── */}
        <div className="relative">
          <ExpertAuthorityChecklist
            title={pageData.empoweringSafety.title}
            subtitle={`${pageData.empoweringSafety.lead} ${pageData.empoweringSafety.sublead}`}
            points={pageData.empoweringSafety.checklist}
          />
        </div>

        {/* ─── 11. HOW TRIPS & SHIPS HELPS WOMEN TRAVEL SOLO (AsymmetricStoryIntro Component) ─── */}
        <div className="relative">
          <AsymmetricStoryIntro
            eyebrow="Personalized Consultation"
            heading={pageData.howTripsAndShipsHelps.title}
            paragraphs={[
              pageData.howTripsAndShipsHelps.lead,
              pageData.howTripsAndShipsHelps.sublead,
              pageData.howTripsAndShipsHelps.conclusion
            ]}
            highlights={pageData.howTripsAndShipsHelps.considerations}
            // image1={angelaHughesImg}
            ctaText={pageData.finalCta.primaryCta.text}
            ctaLink={pageData.finalCta.primaryCta.link}
          />
        </div>

        {/* ─── 12. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <ExpertCredentials
          name={pageData.expert.name}
          title={pageData.expert.title}
          badge={pageData.expert.badge}
          experienceBadge={pageData.expert.experienceBadge}
          authorityBoxTitle={pageData.expert.authorityBoxTitle}
          authoritySubtitle={pageData.expert.authoritySubtitle}
          paragraphs={Array.isArray(pageData.expert.bio) ? pageData.expert.bio : [pageData.expert.bio]}
          credentials={formattedCredentials}
          ctaText="Plan My Solo Journey With Angela"
          ctaLink="/contact"
        />

        {/* Last Updated Callout */}
        <div className="max-w-4xl mx-auto px-6 mt-4 mb-12 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            {pageData.expert.lastUpdated}
          </span>
        </div>

        {/* ─── 12. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 13. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />
      </div>

      {/* ─── 14. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        subtitle={pageData.finalCta.subtitle}
        primaryCtaText={pageData.finalCta.primaryCta.text}
        primaryCtaLink={pageData.finalCta.primaryCta.link}
      />
    </div>
  );
};

export default TravelSafety;
