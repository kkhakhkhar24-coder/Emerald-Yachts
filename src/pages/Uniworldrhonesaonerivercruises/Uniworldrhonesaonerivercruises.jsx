import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '@/components/ui/LuxuryScorecardVisual';
import AuthorityBox from '@/components/ui/AuthorityBox';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import CardGrid from '@/components/ui/CardGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets/Uniworldrhonesaonerivercruises
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-lyon-saone-rhone-river-cityscape-france.jpg';
import introPrimaryImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp';
import introSecondaryImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-pont-du-gard-roman-aqueduct-provence-france.jpg';
import scorecardImg from '@/assets/Uniworldrhonesaonerivercruises/france-provence-romantic-anniversary-vacation.jpg';
import inclusionsDiningImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-ss-emilie-dining-room-banquette-seating.webp';
import diningImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-ss-emilie-evening-ambient-dinner-ambiance.webp';
import cabinImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp';
import ctaBgImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-lyon-saone-rhone-river-cityscape-france.jpg';

// Destination Images (Matched authentic images; unmatched use null for built-in placeholder)
import lyonImg from '@/assets/Uniworldrhonesaonerivercruises/uniworld-lyon-saone-rhone-river-cityscape-france.jpg';
import avignonImg from '@/assets/Uniworldrhonesaonerivercruises/avignon-france-palace-of-the-popes.jpg';

// Styled Inline CTA matching original page banners
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

function UniworldRhoneSaoneRiverCruises() {
    // 6-Entity Structured Data Schema matching RitzCarltonYachtCollectionCost pattern
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
                    "url": "https://www.tripsandships.com/images/uniworld-rhone-saone-river-cruises.jpg",
                    "caption": "Uniworld Rhône and Saône River Cruises"
                },
                "image": "https://www.tripsandships.com/images/uniworld-rhone-saone-river-cruises.jpg",
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
                    "caption": "Angela Hughes - Luxury River Cruise Specialist"
                },
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury river cruise authority.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "Rhône River Cruising",
                    "Burgundy Wine Cruises",
                    "Provence River Cruises",
                    "Boutique River Ships",
                    "French River Travel"
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
                        "name": "Uniworld Rhône & Saône River Cruises",
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

    // Destinations mapping (Matched images where available; unmatched use null for clean built-in placeholder)
    const destinationImages = [
        lyonImg,    // Lyon
        avignonImg, // Avignon
        null,       // Arles (clean placeholder)
        null,       // Viviers (clean placeholder)
        null,       // Tournon (clean placeholder)
        null        // Beaune (Excursion) (clean placeholder)
    ];

    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        category: dest.category,
        description: dest.desc,
        image: destinationImages[idx],
        placeholderLabel: `${dest.name} View`
    }));

    // Seasons mapped for CardGrid
    const seasonCards = pageData.seasons.cards.map((season) => ({
        title: season.name,
        description: season.description,
        icon: season.icon
    }));

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
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-rhone-saone-river-cruises.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.title} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-rhone-saone-river-cruises.jpg" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main className="w-full">
                {/* ─── SECTION 1: HERO ─── */}
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

                {/* ─── SECTION 2: EDITORIAL INTRO ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[...pageData.intro.leadParagraphs, pageData.intro.quote]}
                />

                {/* ─── SECTION 3: RATING SCORECARD ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.score} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings}
                    image={scorecardImg}
                />

                {/* ─── SECTION 4: QUICK ANSWER ─── */}
                <AuthorityBox
                    title={pageData.quickAnswer.title}
                    content={pageData.quickAnswer.text}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={quickAnswerImg}
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

                {/* ─── SECTION 5: WHY CHOOSE A RHÔNE & SAÔNE RIVER CRUISE ─── */}
                <AuthorityGrid
                    title={pageData.whyChoose.heading}
                    subtitle={pageData.whyChoose.eyebrow}
                    items={pageData.whyChoose.items}
                />

                {/* ─── SECTION 6: WHAT'S INCLUDED ─── */}
                <InclusionsList
                    title={pageData.included.heading}
                    inclusions={pageData.included.items.map(item => ({
                        title: item,
                        description: "Included in standard luxury cruise fare"
                    }))}
                    expertNote="All-Inclusive Luxury on the Rhône. Fine dining, premium wines and spirits, guided excursions, airport transfers on select sailings, and gratuities are all covered seamlessly in your fare."
                    image={inclusionsDiningImg}
                />

                {/* ─── SECTION 7: TOP DESTINATIONS (ThreeColumnGrid) ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.heading}
                    subtitle={`${pageData.destinations.eyebrow}: Discover Burgundy and Provence along the Rhône & Saône`}
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
                    summary={pageData.dining.summary}
                    ctaText="Speak to a Dining Specialist"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 9: LUXURY ACCOMMODATIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={cabinImg}
                    title={pageData.accommodations.heading}
                    subtitles={[pageData.accommodations.eyebrow, pageData.accommodations.subheading]}
                    features={pageData.accommodations.items}
                    summary={pageData.accommodations.summary}
                    ctaText="Explore Suite Options"
                    ctaLink="/contact"
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

                {/* ─── SECTION 10: BEST TIME TO CRUISE (CardGrid) ─── */}
                <CardGrid
                    title={pageData.seasons.heading}
                    subtitle={pageData.seasons.eyebrow}
                    cards={seasonCards}
                    columns={4}
                />

                {/* ─── SECTION 11: IS IT WORTH THE MONEY & RECOMMENDATION (ConclusionSection) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.worthIt.heading,
                            paragraphs: pageData.worthIt.paragraphs
                        },
                        {
                            heading: `${pageData.recommendation.heading} (${pageData.recommendation.stars})`,
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

                {/* ─── INLINE CTA 3 ─── */}
                {pageData.inlineCtas[2] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[2].tag}
                        text={pageData.inlineCtas[2].text}
                        btnText={pageData.inlineCtas[2].btnText}
                        btnLink={pageData.inlineCtas[2].btnLink}
                    />
                )}

                {/* ─── SECTION 13: WHO SHOULD BOOK (ProsConsCards) ─── */}
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
                    steps={pageData.planningTips.steps}
                />

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS (LuxuryGrid) ─── */}
                <LuxuryGrid
                    title={pageData.whyBook.heading}
                    subtitle={pageData.whyBook.eyebrow}
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
                        subtitle: "Everything you need to know about planning a Uniworld Rhône & Saône River Cruise.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: RELATED LUXURY CRUISE GUIDES (CardGrid) ─── */}
                <CardGrid
                    title="Related Luxury Cruise Guides"
                    subtitle="Keep Exploring Southern Europe & Boutique River Cruising"
                    cards={pageData.relatedGuides}
                    columns={3}
                />

                {/* ─── SECTION 19: FINAL CTA (CenterCTA) ─── */}
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

export default UniworldRhoneSaoneRiverCruises;