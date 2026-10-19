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
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets and @/assets/Uniworldrhinerivercruises
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-ss-elisabeth-exterior-sailing-rhine-river.webp';
import introPrimaryImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-ss-elisabeth-luxury-super-ship-rhine-waterway.webp';
import introSecondaryImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-burg-rheinstein-rhine-river-valley-germany.jpg';
import scorecardImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-luxury-super-ship-grand-lounge-interior-rendering.webp';
import inclusionsImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp';
import diningImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-luxury-super-ship-fine-dining-restaurant-rendering.jpeg';
import accommodationsImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-ss-antoinette-french-balcony-cabin-bedroom.webp';
import ctaBgImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-ss-elisabeth-scenic-rhine-gorge-voyage-extended.webp';

// Destination-specific matched images
import amsterdamImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-amsterdam-canals-historic-boat-tour-netherlands.jpeg';
import cologneImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/Cologne.jpg';
import koblenzImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/Koblenz.jpg';
import rhineGorgeImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-burg-rheinstein-rhine-gorge-castle-view-germany.jpg';
import rudesheimImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/uniworld-schloss-vollrads-rheingau-wine-estate-germany.jpg';
import strasbourgImg from '@/assets/UniworldCruise/Uniworldrhinerivercruises/Strasbourg.jpg';

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

function UniworldRhineRiverCruises() {
    // Structured Data Schema matching RitzCarlton and Uniworld cruise pages
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageData.seo.canonicalUrl}#webpage`,
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.ogTitle,
                "headline": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/uniworld-rhine-river-cruises.jpg",
                    "caption": "Uniworld Rhine River Cruises"
                },
                "image": "https://www.tripsandships.com/images/uniworld-rhine-river-cruises.jpg",
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
                    "Luxury River Cruising",
                    "Rhine River Cruises",
                    "European River Itineraries",
                    "Boutique River Ships",
                    "All-Inclusive Cruise Planning",
                    "Gourmet & Cultural Travel"
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
                        "name": "Uniworld Rhine River Cruises",
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

    // Destination cards with matched photos
    const destinationImages = [
        amsterdamImg,
        cologneImg,
        koblenzImg,
        rhineGorgeImg,
        rudesheimImg,
        strasbourgImg
    ];

    const destinationCards = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.desc,
        image: destinationImages[idx]
    }));

    // Seasons formatted for CurvilinearGrid
    const seasonIcons = ['map', 'Eye', 'Compass', 'Heart'];
    const seasonItems = pageData.seasons.items.map((season, idx) => ({
        title: season.title,
        description: season.text,
        icon: seasonIcons[idx % seasonIcons.length]
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
                <meta property="og:title" content={pageData.seo.ogTitle} />
                <meta property="og:description" content={pageData.seo.ogDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-rhine-river-cruises.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-rhine-river-cruises.jpg" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION ─── */}
                <ComparisonHero
                    badge={pageData.hero.badge}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    description={pageData.hero.description}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.paragraphs[0],
                        pageData.intro.paragraphs[1],
                        pageData.intro.paragraphs[2],
                        pageData.intro.highlight
                    ]}
                />

                {/* ─── SECTION 3: RATING SUMMARY ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.overallScore} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings}
                    image={scorecardImg}
                />

                {/* ─── SECTION 4: QUICK ANSWER ─── */}
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <AuthorityBox
                        title={pageData.quickAnswer.title}
                        content={`${pageData.quickAnswer.lead}\n\n${pageData.quickAnswer.subtext}`}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── INLINE CTA 1 ─── */}
                {pageData.inlineCta1 && (
                    <InlineCTA
                        tag={pageData.inlineCta1.tag}
                        text={pageData.inlineCta1.text}
                        btnText={pageData.inlineCta1.buttonText}
                        btnLink={pageData.inlineCta1.buttonLink}
                    />
                )}

                {/* ─── SECTION 5: WHY CHOOSE A RHINE RIVER CRUISE ─── */}
                <AuthorityGrid
                    title={pageData.whyChoose.title}
                    subtitle={`${pageData.whyChoose.lead} ${pageData.whyChoose.closing}`}
                    items={pageData.whyChoose.items.map(item => ({
                        title: item.name,
                        description: item.description
                    }))}
                />

                {/* ─── SECTION 6: WHAT IS INCLUDED ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.items}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 7: TOP RHINE RIVER DESTINATIONS ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.lead}
                    items={destinationCards}
                />

                {/* ─── SECTION 8: BEST TIME TO CRUISE (SEASONS) ─── */}
                <CurvilinearGrid
                    title={pageData.seasons.title}
                    subtitle={pageData.seasons.eyebrow}
                    paragraphs={[pageData.seasons.lead]}
                    items={seasonItems}
                />

                {/* ─── SECTION 9: DINING ONBOARD (FeatureSplit Image Left) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={diningImg}
                    title={pageData.dining.title}
                    subtitles={[pageData.dining.lead]}
                    features={pageData.dining.items.map(item => item.text)}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: ACCOMMODATIONS (FeatureSplit Image Right) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={accommodationsImg}
                    title={pageData.accommodations.title}
                    subtitles={[pageData.accommodations.lead]}
                    features={pageData.accommodations.items.map(item => item.text)}
                    ctaText="Request Itinerary Options"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 11: VALUE ANALYSIS & RECOMMENDATION ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.worthTheMoney.title,
                            paragraphs: [
                                pageData.worthTheMoney.lead,
                                pageData.worthTheMoney.subtext
                            ]
                        },
                        {
                            heading: pageData.recommendation.title,
                            paragraphs: pageData.recommendation.paragraphs
                        }
                    ]}
                />

                {/* ─── INLINE CTA 2 ─── */}
                {pageData.inlineCta2 && (
                    <InlineCTA
                        tag={pageData.inlineCta2.tag}
                        text={pageData.inlineCta2.text}
                        btnText={pageData.inlineCta2.buttonText}
                        btnLink={pageData.inlineCta2.buttonLink}
                    />
                )}

                {/* ─── SECTION 12: PROS & CONS ─── */}
                <ProsConsCards
                    title={pageData.prosCons.title}
                    prosTitle={pageData.prosCons.prosTitle}
                    consTitle={pageData.prosCons.consTitle}
                    bestFor={pageData.prosCons.pros.map(p => `${p.title}: ${p.desc}`)}
                    notBestFor={pageData.prosCons.cons.map(c => `${c.title}: ${c.desc}`)}
                />

                {/* ─── SECTION 13: WHO IS IT FOR (AUDIENCE) ─── */}
                <ProsConsCards
                    title={pageData.audience.title}
                    prosTitle={pageData.audience.perfectForTitle}
                    consTitle={pageData.audience.whoPreferTitle}
                    bestFor={pageData.audience.whoShould}
                    notBestFor={pageData.audience.whoPrefer}
                    bgClass="bg-slate-50"
                />

                {/* ─── SECTION 14: PLANNING TIPS ─── */}
                <StepByStepGuide
                    title={pageData.planningTips.title}
                    subtitle={pageData.planningTips.eyebrow}
                    steps={pageData.planningTips.tips.map((tip, idx) => ({
                        title: `Tip 0${idx + 1}`,
                        description: tip
                    }))}
                />

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS ─── */}
                <LuxuryGrid
                    title={pageData.whyBook.title}
                    subtitle={`${pageData.whyBook.lead} ${pageData.whyBook.closing}`}
                    items={pageData.whyBook.items.map((item, idx) => ({
                        title: item.title,
                        description: "Our dedicated luxury travel advisors ensure every detail of your Rhine River journey is arranged with VIP care and personalized precision.",
                        icon: idx % 2 === 0 ? "ship" : "map"
                    }))}
                />

                {/* ─── SECTION 16: EXPERT INSIGHT FROM ANGELA HUGHES ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge={pageData.expertInsight.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.lead}
                    quoteSubtitle={pageData.expertInsight.title}
                    bio={pageData.expertInsight.bodyPara}
                    credentials={[
                        ...pageData.expertInsight.priorities,
                        ...pageData.expertInsight.expertiseList
                    ]}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about planning a Uniworld Rhine River Cruise.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CTA ─── */}
                <CenterCTA
                    title={pageData.cta.heading}
                    description={pageData.cta.text}
                    buttonText={pageData.cta.primaryCtaText}
                    buttonLink={pageData.cta.primaryCtaLink}
                    image={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default UniworldRhineRiverCruises;