import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '../../../components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (100% Existing Shared Components)
import ComparisonHero from '../../../components/ui/ComparisonHero';
import EditorialIntroSplit from '../../../components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '../../../components/ui/LuxuryScorecardVisual';
import AuthorityBox from '../../../components/ui/AuthorityBox';
import AuthorityGrid from '../../../components/ui/AuthorityGrid';
import InclusionsList from '../../../components/ui/InclusionsList';
import ThreeColumnGrid from '../../../components/ui/ThreeColumnGrid';
import FeatureSplit from '../../../components/ui/FeatureSplit';
import CardGrid from '../../../components/ui/CardGrid';
import ConclusionSection from '../../../components/ui/ConclusionSection';
import ProsConsCards from '../../../components/ui/ProsConsCards';
import StepByStepGuide from '../../../components/ui/StepByStepGuide';
import LuxuryGrid from '../../../components/ui/LuxuryGrid';
import ExpertCredentials from '../../../components/ui/ExpertCredentials';
import FAQAccordion from '../../../components/ui/FAQAccordion';
import CenterCTA from '../../../components/ui/CenterCTA';

// Media Assets from @/assets/UniworldEgyptNileRiverCruises & Profile
import ProfilePictureAH from '../../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg';
import heroBgImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/nile-river-cruise-giza-pyramids-egypt-luxury-travel-experience.webp';
import introPrimaryImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/nile-river-luxury-cruise-egypt.jpg';
import introSecondaryImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-river-tosca-nile-cruise-sundeck-observation-terrace.webp';
import scorecardImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-river-tosca-sundeck-swimming-pool-nile-river.webp';
import inclusionsImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-river-tosca-sundeck-butler-drink-service-nile.webp';
import diningImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-luxury-cruise-chef-tasting-menu.webp';
import cabinImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-french-balcony-stateroom-interior-rendering.webp';
import ctaBgImg from '../../../assets/UniworldCruise/UniworldEgyptNileRiverCruises/uniworld-river-tosca-top-deck-plunge-pool-egypt.webp';

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

function UniworldEgyptNileRiverCruises() {
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
                    "url": "https://www.tripsandships.com/assets/UniworldEgyptNileRiverCruises/nile-river-cruise-giza-pyramids-egypt-luxury-travel-experience.webp",
                    "caption": "Uniworld Egypt & Nile River Cruises"
                },
                "image": "https://www.tripsandships.com/assets/UniworldEgyptNileRiverCruises/nile-river-cruise-giza-pyramids-egypt-luxury-travel-experience.webp",
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
                    "Egypt & Nile River Cruises",
                    "River Tosca",
                    "Pyramids of Giza & Ancient Egyptian Landmarks",
                    "Private Egyptologist Guided Excursions"
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
                        "name": "Uniworld Egypt & Nile River Cruises",
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

    // Destinations mapping (Authentic image for Cairo/Pyramids; clean built-in placeholder for others)
    const destinationImages = [
        heroBgImg, // Cairo & Pyramids
        null,      // Luxor
        null,      // Aswan
        null,      // Kom Ombo
        null,      // Edfu
        null       // Abu Simbel
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

    // Highlights mapped for existing untouched AuthorityGrid
    const highlightItems = pageData.highlights.items.map((item) => ({
        title: item,
        description: ""
    }));

    // Why Book items mapped for existing untouched LuxuryGrid
    const whyBookItems = pageData.whyBook.items.map((item) => ({
        title: item,
        description: "",
        icon: "check"
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
                <meta property="og:title" content={pageData.seo.metaTitle} />
                <meta property="og:description" content={pageData.seo.metaDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldEgyptNileRiverCruises/nile-river-cruise-giza-pyramids-egypt-luxury-travel-experience.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.metaTitle} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldEgyptNileRiverCruises/nile-river-cruise-giza-pyramids-egypt-luxury-travel-experience.webp" />
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
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO (EditorialIntroSplit) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[...pageData.intro.leadParagraphs, pageData.intro.quote]}
                />

                {/* ─── SECTION 3: RATING SCORECARD (LuxuryScorecardVisual) ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.score} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings.map(r => ({
                        ...r,
                        rating: r.rating !== undefined ? r.rating : (r.stars ? (r.stars.match(/⭐/g) || []).length : 5)
                    }))}
                    image={scorecardImg}
                />

                {/* ─── SECTION 4: QUICK ANSWER (AuthorityBox) ─── */}
                <div className="max-w-4xl mx-auto px-6 my-12">
                    <AuthorityBox
                        title={pageData.quickAnswer.title}
                        content={pageData.quickAnswer.text}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── INLINE CTA 1 ─── */}
                {pageData.inlineCtas[0] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[0].tag}
                        text={pageData.inlineCtas[0].text}
                        btnText={pageData.inlineCtas[0].btnText}
                        btnLink={pageData.inlineCtas[0].btnLink}
                    />
                )}

                {/* ─── SECTION 5: WHY CHOOSE A NILE RIVER CRUISE (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.highlights.heading}
                    subtitle={`${pageData.highlights.eyebrow}: ${pageData.highlights.lead}`}
                    items={highlightItems}
                />

                {/* ─── SECTION 6: WHAT'S INCLUDED (InclusionsList) ─── */}
                <InclusionsList
                    title={pageData.included.heading}
                    inclusions={pageData.included.items.map(item => ({
                        title: item,
                        description: "Included in standard luxury cruise fare"
                    }))}
                    expertNote={pageData.included.expertNote}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 7: TOP DESTINATIONS (ThreeColumnGrid) ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.heading}
                    subtitle={`${pageData.destinations.eyebrow}: Discover Cairo, Luxor, Aswan, and the Temples of Ancient Egypt`}
                    items={destinationItems}
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

                {/* ─── SECTION 8: DINING ONBOARD (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.heading}
                    subtitles={[pageData.dining.eyebrow, pageData.dining.lead]}
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
                    subtitles={[pageData.accommodations.eyebrow, pageData.accommodations.lead]}
                    features={pageData.accommodations.items}
                    summary={pageData.accommodations.summary}
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

                {/* ─── SECTION 10: BEST TIME TO CRUISE EGYPT (CardGrid) ─── */}
                <CardGrid
                    title={pageData.seasons.heading}
                    subtitle={pageData.seasons.eyebrow}
                    cards={seasonCards}
                    columns={3}
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

                {/* ─── INLINE CTA 4 ─── */}
                {pageData.inlineCtas[3] && (
                    <InlineCTA
                        tag={pageData.inlineCtas[3].tag}
                        text={pageData.inlineCtas[3].text}
                        btnText={pageData.inlineCtas[3].btnText}
                        btnLink={pageData.inlineCtas[3].btnLink}
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
                    items={whyBookItems}
                />

                {/* ─── SECTION 16: EXPERT INSIGHT FROM ANGELA HUGHES (ExpertCredentials) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title={pageData.expert.title}
                    image={ProfilePictureAH}
                    badge={pageData.expert.eyebrow}
                    experienceBadge="40+ YEARS DESIGNING TRAVEL • 121+ COUNTRIES"
                    authorityBoxTitle="Insight from Angela Hughes"
                    authoritySubtitle="Why Discerning Travelers Choose Uniworld River Cruises"
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
                        subtitle: "Everything you need to know about planning a Uniworld Egypt & Nile River Cruise.",
                        questions: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CTA (CenterCTA) ─── */}
                <CenterCTA
                    title={pageData.cta.heading}
                    description={pageData.cta.text}
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

export default UniworldEgyptNileRiverCruises;