import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Navbar from "../../../components/Navbar/Navbar";

// Shared Existing UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CruiseLineShowcase from '@/components/ui/CruiseLineShowcase';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ItineraryCards from '@/components/ui/ItineraryCards';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Assets (Commented out per project preference)
// import AmaWaterwaysImg from "../../../assets/AmaWaterways.jpg";
// import AvalonWaterwaysImg from "../../../assets/AvalonWaterways.jpg";
// import ScenicRiverImg from "../../../assets/ScenicRiver.jpg";
// import RiversideImg from "../../../assets/Riverside.jpg";
// import DestinationEuropeImg from "../../../assets/EuropeRiver.jpg";
// import DestinationWineImg from "../../../assets/WineRegionsRiver.jpg";
// import DestinationHistoricImg from "../../../assets/HistoricCitiesRiver.jpg";

const SoloRiverCruises = () => {

  // 1. Comparison Table Data for River vs. Ocean Cruising
  const riverVsOceanTableData = {
    title: pageData.riverVsOcean.title,
    headers: pageData.riverVsOcean.headers,
    rows: pageData.riverVsOcean.rows
  };

  // 2. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions About River Cruises for Solo Travelers",
    subtitle: "Everything you need to know about solo river cruise pricing, single supplements, social atmosphere, and luxury ship choices.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 3. Cruise Line Brand Items for CruiseLineShowcase
  const cruiseBrandItems = pageData.bestRiverCruiseBrands.brands.map((brand) => {
    const pText = brand.paragraphs.join(' ');
    const listItems = brand.lists && brand.lists.length > 0
      ? ` Key evaluation factors: ${brand.lists[0].items.join(', ')}.`
      : '';
    return {
      title: brand.title,
      category: "River Line",
      description: `${pText}${listItems}`
    };
  });

  // 4. Destination Items for ItineraryCards
  const destinationItems = pageData.bestDestinations.items.map((dest) => ({
    title: dest.title,
    duration: pageData.bestDestinations.subtitle,
    description: dest.description,
    // image: null
  }));

  // 5. Related Pillar Guides
  const relatedHubGuides = pageData.relatedGuides.guides.map((guide) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    placeholderLabel: guide.title.toUpperCase(),
    alt: guide.title,
    badgeCount: guide.links ? guide.links.length : 1,
    links: guide.links,
    mainUrl: guide.mainUrl
  }));

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* ─── SEO METADATA & SCHEMA ─── */}
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.metaTitle} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={pageData.meta.keywords.join(', ')} />
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
          pageData.hero.sublead,
          pageData.hero.conclusion
        ]}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content">
        {/* ─── 2. WHY CHOOSE A RIVER CRUISE AS A SOLO TRAVELER? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.whyChooseRiverCruise.title}
            subtitle={pageData.whyChooseRiverCruise.subtitle}
            features={pageData.whyChooseRiverCruise.features}
          />
        </div>

        {/* ─── 3. WHAT ARE THE BEST RIVER CRUISES FOR SOLO TRAVELERS? (CruiseLineShowcase Component) ─── */}
        <div id="cruise-lines" className="relative">
          <CruiseLineShowcase
            eyebrow="PREMIER RIVER LINES EVALUATED"
            title={pageData.bestRiverCruiseBrands.title}
            subtitle={pageData.bestRiverCruiseBrands.intro.join(' ')}
            items={cruiseBrandItems}
            // images={[AmaWaterwaysImg, AvalonWaterwaysImg, ScenicRiverImg, RiversideImg]}
          />
        </div>

        {/* ─── 4. UNDERSTANDING SOLO RIVER CRUISE PRICING (ValueBreakdownSplit Component) ─── */}
        <div className="relative">
          <ValueBreakdownSplit
            title={pageData.soloPricing.title}
            subtitle={pageData.soloPricing.subtitle}
            includedTitle={pageData.soloPricing.supplementsTitle}
            extrasTitle={pageData.soloPricing.compareTitle}
            included={pageData.soloPricing.singleSupplementIncluded}
            extras={pageData.soloPricing.comparePricesExtras}
          />
          {/* Single Supplement Interlink Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed italic">
                {pageData.soloPricing.conclusion}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-800">
                For a detailed explanation, see{' '}
                <Link
                  to={pageData.soloPricing.linkSupplementsUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.soloPricing.linkSupplementsTitle} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 5. ARE RIVER CRUISES SOCIAL FOR SOLO TRAVELERS? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.socialExperience.title}
            subtitle={pageData.socialExperience.subtitle}
            paragraphs={[pageData.socialExperience.lead]}
            items={pageData.socialExperience.items}
          />
        </div>

        {/* ─── 6. WHAT ARE SHORE EXCURSIONS LIKE ON A RIVER CRUISE? (InclusionsList Component) ─── */}
        <div className="relative">
          <InclusionsList
            title={pageData.shoreExcursions.title}
            expertNote={`${pageData.shoreExcursions.lead}. ${pageData.shoreExcursions.conclusion}`}
            inclusions={pageData.shoreExcursions.focusAreas}
          />
        </div>

        {/* ─── 7. RIVER CRUISE VS. OCEAN CRUISE FOR SOLO TRAVELERS (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable data={riverVsOceanTableData} />
          {/* Table Conclusion & Link Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.riverVsOcean.conclusion}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-800">
                For ocean cruising, explore{' '}
                <Link
                  to={pageData.riverVsOcean.linkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.riverVsOcean.linkText} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 8. WHO IS A RIVER CRUISE BEST FOR? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.whoIsItBestFor.title}
            subtitle={pageData.whoIsItBestFor.subtitle}
            features={pageData.whoIsItBestFor.features}
          />
          {/* Best For Counterpoint Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.whoIsItBestFor.counterpoint}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 9. BEST RIVER CRUISE DESTINATIONS FOR SOLO TRAVELERS (ItineraryCards Component) ─── */}
        <div className="relative">
          <ItineraryCards
            title={pageData.bestDestinations.title}
            items={destinationItems}
          />
        </div>

        {/* ─── 10. HOW TO CHOOSE THE RIGHT RIVER CRUISE AS A SOLO TRAVELER (TopQuestionsReveal Component) ─── */}
        <div className="relative">
          <TopQuestionsReveal
            title={pageData.howToChoose.title}
            subtitle={pageData.howToChoose.subtitle}
            questions={pageData.howToChoose.steps}
          />
        </div>

        {/* ─── 11. IS A RIVER CRUISE GOOD FOR WOMEN TRAVELING ALONE? & WOMEN OVER 50 (EditorialIntroSplit Component) ─── */}
        <div className="relative">
          <EditorialIntroSplit
            eyebrow={pageData.soloWomenAndOver50.eyebrow}
            heading={pageData.soloWomenAndOver50.title}
            paragraphs={pageData.soloWomenAndOver50.paragraphs}
            ctaText="Find My Luxury Solo River Cruise"
            ctaLink="/contact"
          />
          {/* Dual Navigation Interlink Box */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                Explore our dedicated guides for tailored women-only departures and specialized travel for women over 50:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to={pageData.soloWomenAndOver50.womenOnlyLinkUrl}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-navy-950 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-full hover:bg-navy-900 transition-all shadow"
                >
                  {pageData.soloWomenAndOver50.womenOnlyLinkText} &rarr;
                </Link>
                <Link
                  to={pageData.soloWomenAndOver50.over50LinkUrl}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-stone-100 text-navy-950 font-sans text-xs font-bold tracking-wider uppercase rounded-full hover:bg-stone-200 transition-all border border-stone-200"
                >
                  {pageData.soloWomenAndOver50.over50LinkText} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 12. HOW TRIPS & SHIPS HELPS FIND THE RIGHT SOLO RIVER CRUISE (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.howTripsAndShipsHelps.title}
            subtitle={pageData.howTripsAndShipsHelps.subtitle}
            rules={pageData.howTripsAndShipsHelps.considerations}
          />
        </div>

        {/* ─── 13. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <ExpertCredentials
          name={pageData.expert.name}
          title={pageData.expert.title}
          badge={pageData.expert.badge}
          experienceBadge={pageData.expert.experienceBadge}
          authorityBoxTitle={pageData.expert.authorityBoxTitle}
          authoritySubtitle={pageData.expert.authoritySubtitle}
          bio={pageData.expert.bio}
          credentials={pageData.expert.credentials}
          ctaText="Plan My Solo River Cruise With Angela"
          ctaLink="/contact"
        />

        {/* Last Updated Callout */}
        <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            {pageData.expert.lastUpdated}
          </span>
        </div>

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 15. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />
      </div>

      {/* ─── 16. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        subtitle={`${pageData.finalCta.lead}\n\n${pageData.finalCta.sublead}\n\n${pageData.finalCta.conclusion}`}
        primaryCtaText={pageData.finalCta.primaryCta.text}
        primaryCtaLink={pageData.finalCta.primaryCta.link}
      />
    </div>
  );
};

export default SoloRiverCruises;
