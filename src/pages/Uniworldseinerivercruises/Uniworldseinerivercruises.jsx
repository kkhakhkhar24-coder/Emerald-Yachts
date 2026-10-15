import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (100% Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '@/components/ui/LuxuryScorecardVisual';
import AuthorityBox from '@/components/ui/AuthorityBox';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CardGrid from '@/components/ui/CardGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets/Uniworldseinerivercruises (100% unique across site, 0 repeats from previous pages)
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-joie-de-vivre-exterior-seine-river-france.webp';
import introPrimaryImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-bon-voyage-morning-riverfront-view-france.webp';
import introSecondaryImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-bon-voyage-twilight-harbor-reflections.webp';
import scorecardImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-emilie-sundeck-open-air-observation-deck.webp';
import inclusionsDiningImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-emilie-gourmet-culinary-buffet-presentation.webp';
import diningImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import cabinImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp';
import ctaBgImg from '@/assets/Uniworldseinerivercruises/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

// Destination Images (Matched images used; unmatched use clean placeholders per instruction)
import parisImg from '@/assets/Uniworldseinerivercruises/seine-river-luxury-cruise-paris.jpg';
import normandyBeachesImg from '@/assets/Uniworldseinerivercruises/mont-saint-michel-france-normandy-dusk-reflection-travel-photography.webp';
import vernonGivernyImg from '@/assets/Uniworldseinerivercruises/uniworld-giverny-monets-garden-normandy-france.jpg';

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
                <a
                    href={btnLink}
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm shrink-0"
                >
                    <span>{btnText}</span>
                    <ChevronRight size={16} />
                </a>
            </div>
        </div>
    );
}

function UniworldSeineRiverCruises() {
    // 6-Entity JSON-LD Schema matching RitzCarltonYachtCollectionCost pattern
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
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/uniworld-seine-river-cruises.jpg",
                    "caption": "Uniworld Seine River Cruises: Paris and Normandy"
                },
                "image": "https://www.tripsandships.com/images/uniworld-seine-river-cruises.jpg",
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
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury river cruise industry leader.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury River Cruising",
                    "Seine River Cruises",
                    "Paris and Normandy Itineraries",
                    "French Boutique River Ships",
                    "Gourmet French Cuisine",
                    "Butler & Suite Services",
                    "All-Inclusive Cruise Planning"
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
                        "name": "Uniworld Seine River Cruises",
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

    // Destinations mapping (Matched images where available; null defaults to elegant placeholder per instructions)
    const destinationImages = [
        parisImg,           // Paris
        null,               // Rouen (clean placeholder)
        null,               // Honfleur (clean placeholder)
        normandyBeachesImg, // Normandy Beaches
        vernonGivernyImg,   // Vernon / Monet's Gardens
        null                // La Roche-Guyon (clean placeholder)
    ];

    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.desc,
        image: destinationImages[idx],
        placeholderLabel: `${dest.name} View`
    }));

    // Why Choose items mapped for AuthorityGrid
    const whyChooseItems = pageData.whyChoose.items.map((item) => ({
        title: item,
        description: `Experience the finest ${item.toLowerCase()} aboard Uniworld's boutique French river voyages.`
    }));

    // Seasons mapped for CardGrid
    const seasonCards = pageData.seasons.items.map((season) => {
        const iconName = season.name === "Spring" ? "Flower2"
                       : season.name === "Summer" ? "Sun"
                       : season.name === "Fall" ? "Trees"
                       : "Snowflake";
        return {
            title: season.name,
            description: season.desc,
            icon: iconName
        };
    });

    // Planning Tips mapped for StepByStepGuide
    const planningSteps = [
        { title: "Advance Booking", description: pageData.planningTips.tips[0] },
        { title: "Seasonal Timing", description: pageData.planningTips.tips[1] },
        { title: "Cabin Choice", description: pageData.planningTips.tips[2] },
        { title: "Paris Extension", description: pageData.planningTips.tips[3] }
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
                <meta property="og:title" content={pageData.seo.title} />
                <meta property="og:description" content={pageData.seo.metaDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-seine-river-cruises.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.title} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-seine-river-cruises.jpg" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION (ComparisonHero) ─── */}
                <ComparisonHero
                    badge={pageData.hero.tag}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: INTRO SECTION (EditorialIntroSplit) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.leadParagraphs[0],
                        pageData.intro.leadParagraphs[1],
                        pageData.intro.leadParagraphs[2],
                        pageData.intro.quote
                    ]}
                />

                {/* ─── SECTION 3: QUICK ANSWER (AuthorityBox) ─── */}
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <AuthorityBox
                        title={pageData.quickAnswer.title}
                        content={pageData.quickAnswer.text}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── SECTION 4: RATING SUMMARY (LuxuryScorecardVisual) ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.score} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings}
                    image={scorecardImg}
                />

                {/* ─── INLINE CTA 1 ─── */}
                {pageData.inlineCtas[0] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[0].tag}
                        text={pageData.inlineCtas[0].text}
                        btnText={pageData.inlineCtas[0].btnText}
                        btnLink={pageData.inlineCtas[0].btnLink}
                    />
                )}

                {/* ─── SECTION 5: WHY CHOOSE A SEINE CRUISE (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.whyChoose.heading}
                    subtitle={pageData.whyChoose.eyebrow}
                    items={whyChooseItems}
                />

                {/* ─── SECTION 6: WHAT IS INCLUDED (InclusionsList) ─── */}
                <InclusionsList
                    title={pageData.included.heading}
                    inclusions={pageData.included.items.map(item => ({
                        title: item,
                        description: "Included in standard luxury cruise fare"
                    }))}
                    image={inclusionsDiningImg}
                />

                {/* ─── INLINE CTA 2 ─── */}
                {pageData.inlineCtas[1] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[1].tag}
                        text={pageData.inlineCtas[1].text}
                        btnText={pageData.inlineCtas[1].btnText}
                        btnLink={pageData.inlineCtas[1].btnLink}
                    />
                )}

                {/* ─── SECTION 7: TOP DESTINATIONS (ThreeColumnGrid with placeholders where needed) ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.heading}
                    subtitle={`${pageData.destinations.eyebrow}: Discover iconic French landmarks along the Seine`}
                    items={destinationItems}
                />

                {/* ─── SECTION 8: DINING ONBOARD (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.heading}
                    subtitles={[pageData.dining.eyebrow, pageData.dining.subheading]}
                    features={pageData.dining.items}
                    summary="French-inspired gourmet cuisine featuring farm-to-table seasonal ingredients, fine regional wines, and decadent Parisian pastries."
                    ctaText="Speak to a Dining Specialist"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 9: ACCOMMODATIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={cabinImg}
                    title={pageData.accommodations.heading}
                    subtitles={[pageData.accommodations.eyebrow]}
                    features={pageData.accommodations.items}
                    summary="Every stateroom on S.S. Joie de Vivre features handcrafted French furnishings, marble baths, French balconies, and luxury bedding."
                    ctaText="Explore Suite Options"
                    ctaLink="/contact"
                />

                {/* ─── INLINE CTA 3 ─── */}
                {pageData.inlineCtas[2] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[2].tag}
                        text={pageData.inlineCtas[2].text}
                        btnText={pageData.inlineCtas[2].btnText}
                        btnLink={pageData.inlineCtas[2].btnLink}
                    />
                )}

                {/* ─── SECTION 10: BEST TIME TO CRUISE (CardGrid) ─── */}
                <CardGrid
                    title={pageData.seasons.heading}
                    subtitle={pageData.seasons.eyebrow}
                    cards={seasonCards}
                    columns={4}
                />

                {/* ─── SECTION 11: IS IT WORTH IT & RECOMMENDATION (ConclusionSection) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: `${pageData.worthIt.heading} (${pageData.worthIt.stars})`,
                            paragraphs: pageData.worthIt.paragraphs
                        },
                        {
                            heading: pageData.recommendation.heading,
                            paragraphs: pageData.recommendation.paragraphs
                        }
                    ]}
                />

                {/* ─── SECTION 12: PROS & CONS (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.prosCons.heading}
                    prosTitle={pageData.prosCons.prosTitle}
                    consTitle={pageData.prosCons.consTitle}
                    bestFor={pageData.prosCons.pros}
                    notBestFor={pageData.prosCons.cons}
                />

                {/* ─── INLINE CTA 4 ─── */}
                {pageData.inlineCtas[3] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[3].tag}
                        text={pageData.inlineCtas[3].text}
                        btnText={pageData.inlineCtas[3].btnText}
                        btnLink={pageData.inlineCtas[3].btnLink}
                    />
                )}

                {/* ─── SECTION 13: WHO IS IT FOR (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.audience.heading}
                    prosTitle={pageData.audience.whoShouldTitle}
                    consTitle={pageData.audience.whoPreferTitle}
                    bestFor={pageData.audience.whoShould}
                    notBestFor={pageData.audience.whoPrefer}
                    bgClass="bg-slate-50"
                />

                {/* ─── SECTION 14: PLANNING TIPS (StepByStepGuide) ─── */}
                <StepByStepGuide
                    title={pageData.planningTips.heading}
                    subtitle={pageData.planningTips.eyebrow}
                    steps={planningSteps}
                />

                {/* ─── INLINE CTA 5 ─── */}
                {pageData.inlineCtas[4] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[4].tag}
                        text={pageData.inlineCtas[4].text}
                        btnText={pageData.inlineCtas[4].btnText}
                        btnLink={pageData.inlineCtas[4].btnLink}
                    />
                )}

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS (LuxuryGrid) ─── */}
                <LuxuryGrid
                    title={pageData.whyBook.heading}
                    subtitle={`${pageData.whyBook.eyebrow}: ${pageData.whyBook.lead}`}
                    items={pageData.whyBook.items}
                />

                {/* ─── SECTION 16: EXPERT INSIGHT FROM ANGELA HUGHES (ExpertCredentials) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title={pageData.expert.title}
                    image={ProfilePictureAH}
                    badge={pageData.expert.eyebrow}
                    quote={pageData.expert.lead}
                    quoteSubtitle="Travel Prioritization Matrix: Boutique, museum-quality ships, Truly all-inclusive luxury, Butler service in select suites, Gourmet farm-to-table dining"
                    bio={pageData.expert.bio}
                    credentials={pageData.expert.priorities}
                    ctaText={pageData.expert.ctaText}
                    ctaLink={pageData.expert.ctaLink}
                />

                {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about planning a Uniworld Seine River Cruise.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CTA (CenterCTA) ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    buttonText={pageData.cta.primaryBtn}
                    buttonLink={pageData.cta.primaryBtnLink}
                    image={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default UniworldSeineRiverCruises;