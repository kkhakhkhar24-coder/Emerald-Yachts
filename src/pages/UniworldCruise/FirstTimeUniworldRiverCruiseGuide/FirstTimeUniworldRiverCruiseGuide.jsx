import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '../../../components/Navbar/Navbar';

// Page Data JSON (100% Verbatim Content Preserved)
import pageData from './data.json';

// Shared UI System Components (100% Existing Untouched Components)
import ComparisonHero from '../../../components/ui/ComparisonHero';
import EditorialIntroSplit from '../../../components/ui/EditorialIntroSplit';
import AuthorityGrid from '../../../components/ui/AuthorityGrid';
import CardGrid from '../../../components/ui/CardGrid';
import ThreeColumnGrid from '../../../components/ui/ThreeColumnGrid';
import InclusionsList from '../../../components/ui/InclusionsList';
import ExpertAuthorityChecklist from '../../../components/ui/ExpertAuthorityChecklist';
import StepByStepGuide from '../../../components/ui/StepByStepGuide';
import FeatureSplit from '../../../components/ui/FeatureSplit';
import ProsConsCards from '../../../components/ui/ProsConsCards';
import ConclusionSection from '../../../components/ui/ConclusionSection';
import ExpertCredentials from '../../../components/ui/ExpertCredentials';
import FAQAccordion from '../../../components/ui/FAQAccordion';
import CenterCTA from '../../../components/ui/CenterCTA';

// Media Assets from @/assets/FirstTimeUniworldRiverCruiseGuide & Profile (11 authentic assets, 0 orphans)
import ProfilePictureAH from '../../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';
import heroBgImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp';
import introPrimaryImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-elisabeth-luxury-super-ship-rhine-waterway.webp';
import introSecondaryImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-french-balcony-stateroom-interior-rendering.webp';
import cabinClassicImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-classic-river-stateroom-cabin-rendering.jpeg';
import cabinFrenchBalconyImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-antoinette-french-balcony-cabin-bedroom.webp';
import cabinSuiteImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-victoria-royal-suite-living-room-interior.webp';
import inclusionsImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-river-tosca-sundeck-butler-drink-service-nile.webp';
import diningImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-emilie-dining-room-banquette-seating.webp';
import excursionsImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-european-vineyard-culinary-tasting-experience.webp';
import atmosphereImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-beatrice-sun-deck-lounge-danube-river.webp';
import ctaBgImg from '../../../assets/UniworldCruise/FirstTimeUniworldRiverCruiseGuide/uniworld-ss-maria-theresa-sailing-past-budapest-parliament.webp';

// Styled Inline CTA matching site pattern
function InlineCTA({ tag, text, btnText, btnLink = "/contact" }) {
    if (!tag || !text) return null;
    return (
        <div className="max-w-[1280px] mx-auto px-6 py-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy-800 bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-2 shadow-2xs">
                        {tag}
                    </span>
                    <p className="font-display text-lg sm:text-xl text-navy-950 font-normal">
                        {text}
                    </p>
                </div>
                <Link
                    to={btnLink}
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm shrink-0"
                >
                    <span>{btnText}</span>
                    <ChevronRight size={16} />
                </Link>
            </div>
        </div>
    );
}

function FirstTimeUniworldGuide() {
    // 6-Entity Structured Data Schema matching RitzCarltonYachtCollectionCost benchmark
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageData.seo.canonicalUrl}#webpage`,
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.metaTitle,
                "headline": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "inLanguage": "en-US",
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/FirstTimeUniworldRiverCruiseGuide/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp",
                    "caption": "First-Time Uniworld River Cruise Guide"
                },
                "image": "https://www.tripsandships.com/assets/FirstTimeUniworldRiverCruiseGuide/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp",
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
                "description": "Luxury travel agency specializing in luxury river cruises, ocean cruises, expedition cruises, yacht cruises, and personalized travel planning.",
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
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader with over 40 years of experience and travels to 121+ countries.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "Uniworld Boutique River Cruises",
                    "First-Time River Cruising",
                    "River Cruise Itineraries",
                    "Luxury Staterooms & Suites",
                    "European River Cruising"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageData.seo.canonicalUrl}#breadcrumb`,
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
                        "name": "Uniworld River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "First-Time Guide",
                        "item": pageData.seo.canonicalUrl
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `${pageData.seo.canonicalUrl}#faq`,
                "mainEntity": pageData.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    // Why Choose items mapped for AuthorityGrid
    const whyChooseItems = pageData.whyChoose.items.map(item => ({
        title: item,
        description: ""
    }));

    // Itinerary cards mapped for CardGrid
    const itineraryCards = pageData.itineraries.items.map(item => ({
        title: item.dest,
        description: item.best,
        icon: "MapPin"
    }));

    // Cabin items mapped with authentic photos for ThreeColumnGrid
    const cabinImages = [cabinClassicImg, cabinFrenchBalconyImg, cabinSuiteImg];
    const cabinItems = pageData.cabins.items.map((cabin, idx) => ({
        title: cabin.name,
        category: "Accommodations",
        description: cabin.desc,
        features: cabin.items,
        image: cabinImages[idx],
        placeholderLabel: cabin.name
    }));

    // Typical Day steps mapped for StepByStepGuide
    const typicalDaySteps = pageData.typicalDay.periods.map(p => ({
        title: p.label,
        description: p.items.join(" · ")
    }));

    // Key Takeaways mapped for AuthorityGrid
    const takeawayItems = pageData.takeaways.items.map(item => ({
        title: item,
        description: ""
    }));

    // Conclusion sections mapped for ConclusionSection
    const conclusionSections = [
        {
            heading: pageData.fit.heading,
            paragraphs: [
                `${pageData.fit.lead} ${pageData.fit.items.join(', ')}.`,
                pageData.fit.note
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
            {/* ─── SEO HEAD & SCHEMA ─── */}
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageData.seo.metaTitle} />
                <meta property="og:description" content={pageData.seo.metaDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/assets/FirstTimeUniworldRiverCruiseGuide/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.metaTitle} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/FirstTimeUniworldRiverCruiseGuide/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main className="w-full">
                {/* ─── SECTION 1: HERO (ComparisonHero) ─── */}
                <ComparisonHero
                    badge={pageData.hero.tag}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO (EditorialIntroSplit) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[...pageData.intro.leadParagraphs, pageData.intro.quote]}
                />

                {/* ─── SECTION 3: WHY CHOOSE UNIWORLD (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.whyChoose.heading}
                    subtitle={`${pageData.whyChoose.lead} ${pageData.whyChoose.body}`}
                    items={whyChooseItems}
                />

                {/* ─── INLINE CTA 1 ─── */}
                <InlineCTA
                    tag="EXPERT CRUISE PLANNING"
                    text="Ready to explore Uniworld itineraries with seasoned luxury cruise specialists?"
                    btnText="Plan Your Cruise"
                    btnLink="/contact"
                />

                {/* ─── SECTION 4: CHOOSING THE RIGHT ITINERARY (CardGrid) ─── */}
                <CardGrid
                    title={pageData.itineraries.heading}
                    subtitle={`${pageData.itineraries.lead} ${pageData.itineraries.footnote}`}
                    cards={itineraryCards}
                    columns={4}
                />

                {/* ─── SECTION 5: SELECTING THE BEST CABIN (ThreeColumnGrid) ─── */}
                <ThreeColumnGrid
                    title={pageData.cabins.heading}
                    subtitle={pageData.cabins.lead}
                    items={cabinItems}
                />

                {/* ─── SECTION 6: WHAT IS INCLUDED (InclusionsList) ─── */}
                <InclusionsList
                    title={pageData.included.heading}
                    inclusions={pageData.included.items}
                    expertNote={`${pageData.included.lead} ${pageData.included.note}`}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 7: WHAT TO PACK (ExpertAuthorityChecklist) ─── */}
                <ExpertAuthorityChecklist
                    title={pageData.packing.heading}
                    subtitle={`${pageData.packing.lead} ${pageData.packing.footnote}`}
                    points={pageData.packing.items}
                />

                {/* ─── SECTION 8: TYPICAL DAY ONBOARD (StepByStepGuide) ─── */}
                <StepByStepGuide
                    title={pageData.typicalDay.heading}
                    subtitle={`${pageData.typicalDay.eyebrow} — ${pageData.typicalDay.lead}`}
                    steps={typicalDaySteps}
                />

                {/* ─── SECTION 9: DINING EXPECTATIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.heading}
                    subtitles={[`${pageData.dining.eyebrow} — ${pageData.dining.lead}`, pageData.dining.body]}
                    features={pageData.dining.items}
                    summary={pageData.dining.footnote}
                />

                {/* ─── SECTION 10: SHORE EXCURSIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={excursionsImg}
                    title={pageData.excursions.heading}
                    subtitles={[`${pageData.excursions.eyebrow} — ${pageData.excursions.lead}`]}
                    features={pageData.excursions.items}
                    summary={pageData.excursions.footnote}
                />

                {/* ─── SECTION 11: ONBOARD ATMOSPHERE (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={atmosphereImg}
                    title={pageData.atmosphere.heading}
                    subtitles={[`${pageData.atmosphere.eyebrow} — ${pageData.atmosphere.lead}`, pageData.atmosphere.body]}
                    features={pageData.atmosphere.items}
                    summary={pageData.atmosphere.note}
                />

                {/* ─── INLINE CTA 2 ─── */}
                <InlineCTA
                    tag="FIRST-TIME RIVER CRUISER ASSISTANCE"
                    text="Have questions about cabins, packing, or daily schedules? Speak directly with our river cruise consultants."
                    btnText="Speak with an Advisor"
                    btnLink="/contact"
                />

                {/* ─── SECTION 12: TIPS & MISTAKES TO AVOID (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.tips.heading}
                    prosTitle={pageData.tips.tipsCol.title}
                    bestFor={pageData.tips.tipsCol.items}
                    consTitle={pageData.tips.mistakesCol.title}
                    notBestFor={pageData.tips.mistakesCol.items}
                    bottomNote={`${pageData.tips.tipsCol.footnote} ${pageData.tips.mistakesCol.footnote}`}
                    bgClass="bg-slate-50"
                />

                {/* ─── SECTION 13: IS UNIWORLD RIGHT FOR YOU? (ConclusionSection) ─── */}
                <ConclusionSection sections={conclusionSections} />

                {/* ─── SECTION 14: KEY TAKEAWAYS (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.takeaways.heading}
                    subtitle={pageData.takeaways.eyebrow}
                    items={takeawayItems}
                />

                {/* ─── SECTION 15: EXPERT CREDENTIALS (ExpertCredentials) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO & Luxury Cruise Specialist, Trips & Ships Luxury Travel"
                    badge={pageData.expert.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expert.quote}
                    quoteSubtitle={`${pageData.expert.prioritiesTitle} ${pageData.expert.priorities.join(' · ')}`}
                    bio={pageData.expert.bio}
                    ctaText="Connect with Angela Hughes"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 16: FAQ ACCORDION (FAQAccordion) ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything first-time guests need to know about Uniworld river cruises.",
                        questions: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CTA (CenterCTA) ─── */}
                <CenterCTA
                    title={pageData.cta.heading}
                    description={pageData.cta.subtitle}
                    buttonText={pageData.cta.primaryBtn}
                    buttonLink={pageData.cta.primaryBtnLink}
                    image={ctaBgImg}
                    theme="dark"
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default FirstTimeUniworldGuide;
