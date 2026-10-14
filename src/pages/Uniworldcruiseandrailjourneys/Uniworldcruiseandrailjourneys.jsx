import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Component-Based Architecture - All Original Components Preserved)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '@/components/ui/LuxuryScorecardVisual';
import AuthorityBox from '@/components/ui/AuthorityBox';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import CardGrid from '@/components/ui/CardGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import LuxuryGrid from '@/components/ui/LuxuryGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets/Uniworldcruiseandrailjourneys
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-ss-elisabeth-scenic-rhine-river-cruise.webp';
import introPrimaryImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp';
import introSecondaryImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-austria-melk-abbey-danube-river-cruise.jpg';
import scorecardImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-ss-bon-voyage-soleil-sun-deck-loungers.webp';
import inclusionsDiningImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-super-ship-gourmet-restaurant-rendering.jpeg';
import ctaBgImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-ss-elisabeth-luxury-super-ship-rhine-waterway.webp';

// Section 7: Scenic Rail Regions assets
import switzerlandGlacierExpressImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-switzerland-glacier-express-scenic-railway.webp';
import austriaViennaImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-austria-vienna-danube-river-docked-ship.webp';
import germanyBlackForestImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-burg-rheinstein-rhine-river-valley-germany.jpg';
import francePontDuGardImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-pont-du-gard-roman-aqueduct-provence-france.jpg';
import centralEuropePragueImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-prague-czech-republic-historic-old-town.jpg';

// Section 13: Pricing Features assets
import luxuryRailBudapestTramImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-budapest-historic-yellow-tram-danube-promenade.jpg';
import luxurySuiteAccommodationImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-ss-victoria-royal-suite-living-room-interior.webp';
import transfersIncludedBoatImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-amsterdam-canals-historic-boat-tour-netherlands.jpeg';
import premiumServicesButlerImg from '@/assets/Uniworldcruiseandrailjourneys/uniworld-river-tosca-sundeck-butler-drink-service-nile.webp';

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

function UniworldCruiseAndRailJourneys() {
    // Structured Data Schema matching RitzCarltonYachtCollectionCost pattern
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
                    "url": "https://www.tripsandships.com/images/uniworld-cruise-and-rail.jpg",
                    "caption": "Uniworld Cruise and Rail Journeys"
                },
                "image": "https://www.tripsandships.com/images/uniworld-cruise-and-rail.jpg",
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
                    "River Cruising",
                    "Rail Journeys",
                    "Scenic European Rail",
                    "Boutique River Ships",
                    "Premium Travel"
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
                        "name": "Uniworld Cruise and Rail Journeys",
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

    // 1. Data mapping for Scenic Rail Regions (Section 7: FeatureGrid)
    // All 5 regions mapped to authentic matched images from @Uniworld-Pages
    const scenicRailFeatures = [
        {
            title: "Switzerland",
            description: pageData.scenicRail.regions[0].description,
            image: switzerlandGlacierExpressImg
        },
        {
            title: "Austria",
            description: pageData.scenicRail.regions[1].description,
            image: austriaViennaImg
        },
        {
            title: "Germany",
            description: pageData.scenicRail.regions[2].description,
            image: germanyBlackForestImg
        },
        {
            title: "France",
            description: pageData.scenicRail.regions[3].description,
            image: francePontDuGardImg
        },
        {
            title: "Central Europe",
            description: pageData.scenicRail.regions[4].description,
            image: centralEuropePragueImg
        }
    ];

    // 2. Data mapping for Pricing Features (Section 13: ThreeColumnGrid)
    // All 4 pricing items mapped to authentic matched images from @Uniworld-Pages
    const pricingImages = [
        luxuryRailBudapestTramImg,
        luxurySuiteAccommodationImg,
        transfersIncludedBoatImg,
        premiumServicesButlerImg
    ];

    const pricingItems = pageData.pricing.features.map((feat, idx) => ({
        title: feat.title,
        description: feat.description,
        image: pricingImages[idx]
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
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-cruise-and-rail.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-cruise-and-rail.jpg" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION (ComparisonHero with matched Hero image) ─── */}
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

                {/* ─── SECTION 2: INTRO SECTION (EditorialIntroSplit with matched Intro images) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.paragraphs[0],
                        pageData.intro.paragraphs[1],
                        pageData.intro.highlight
                    ]}
                />

                {/* ─── SECTION 3: RATING SUMMARY (LuxuryScorecardVisual with matched image) ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.overallScore} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings}
                    image={scorecardImg}
                />

                {/* ─── SECTION 4: QUICK ANSWER (AuthorityBox) ─── */}
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <AuthorityBox
                        title={pageData.quickAnswer.title}
                        content={`${pageData.quickAnswer.lead}\n\n${pageData.quickAnswer.subtext}`}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── SECTION 5: WHY CHOOSE A CRUISE AND RAIL JOURNEY (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.benefits.title}
                    subtitle={pageData.benefits.lead}
                    items={pageData.benefits.items}
                />

                {pageData.benefits.inlineCta && (
                    <InlineCTA
                        tag={pageData.benefits.inlineCta.tag}
                        text={pageData.benefits.inlineCta.text}
                        btnText={pageData.benefits.inlineCta.buttonText}
                        btnLink={pageData.benefits.inlineCta.buttonLink}
                    />
                )}

                {/* ─── SECTION 6: WHAT IS INCLUDED (InclusionsList with matched Gourmet Dining image) ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.items}
                    expertNote={pageData.inclusions.note}
                    image={inclusionsDiningImg}
                />

                {/* ─── SECTION 7: SCENIC RAIL TRAVEL (FeatureGrid Component Preserved) ─── */}
                <FeatureGrid
                    title={pageData.scenicRail.title}
                    subtitle={`${pageData.scenicRail.p1} ${pageData.scenicRail.footer}`}
                    features={scenicRailFeatures}
                    bgClass="bg-white border-b border-slate-100"
                />

                {/* ─── SECTION 8: BOUTIQUE RIVER SHIPS (CurvilinearGrid Component Preserved) ─── */}
                <CurvilinearGrid
                    title={pageData.boutiqueShips.title}
                    subtitle={pageData.boutiqueShips.eyebrow}
                    paragraphs={[pageData.boutiqueShips.p1]}
                    items={pageData.boutiqueShips.features}
                />

                {/* ─── SECTION 9: POPULAR DESTINATIONS (CardGrid Component Preserved) ─── */}
                <CardGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.lead}
                    cards={pageData.destinations.items}
                    columns={4}
                />

                {pageData.destinations.inlineCta && (
                    <InlineCTA
                        tag={pageData.destinations.inlineCta.tag}
                        text={pageData.destinations.inlineCta.text}
                        btnText={pageData.destinations.inlineCta.buttonText}
                        btnLink={pageData.destinations.inlineCta.buttonLink}
                    />
                )}

                {/* ─── SECTION 10: IS IT WORTH IT & RECOMMENDATION (ConclusionSection) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.isItWorthIt.title,
                            paragraphs: pageData.isItWorthIt.paragraphs
                        },
                        {
                            heading: `${pageData.recommendation.title} (${pageData.recommendation.stars})`,
                            paragraphs: [
                                pageData.recommendation.lead,
                                pageData.recommendation.body
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 11: PROS & CONS (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.prosCons.title}
                    prosTitle={pageData.prosCons.prosTitle}
                    consTitle={pageData.prosCons.consTitle}
                    bestFor={pageData.prosCons.pros}
                    notBestFor={pageData.prosCons.cons}
                />

                {/* ─── SECTION 12: WHO IS IT FOR / AUDIENCE (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.audience.title}
                    prosTitle={pageData.audience.perfectForTitle}
                    consTitle={pageData.audience.notForTitle}
                    bestFor={pageData.audience.perfectFor}
                    notBestFor={pageData.audience.notFor}
                    bgClass="bg-slate-50"
                />

                {/* ─── SECTION 13: HOW MUCH DO THEY COST / PRICING (ThreeColumnGrid with Placeholders) ─── */}
                <ThreeColumnGrid
                    title={pageData.pricing.title}
                    subtitle={pageData.pricing.paragraphs.join(' ')}
                    items={pricingItems}
                />

                {pageData.pricing.inlineCta && (
                    <InlineCTA
                        tag={pageData.pricing.inlineCta.tag}
                        text={pageData.pricing.inlineCta.text}
                        btnText={pageData.pricing.inlineCta.buttonText}
                        btnLink={pageData.pricing.inlineCta.buttonLink}
                    />
                )}

                {/* ─── SECTION 14: PLANNING TIPS (StepByStepGuide) ─── */}
                <StepByStepGuide
                    title={pageData.planningTips.title}
                    subtitle={pageData.planningTips.subtitle}
                    steps={pageData.planningTips.steps}
                />

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS (LuxuryGrid) ─── */}
                <LuxuryGrid
                    title={pageData.whyBook.title}
                    subtitle={pageData.whyBook.lead}
                    items={pageData.whyBook.cards}
                />

                {/* ─── SECTION 16: EXPERT INSIGHT FROM ANGELA HUGHES (ExpertCredentials) ─── */}
                <ExpertCredentials
                    name={pageData.expert.name}
                    title={pageData.expert.title}
                    badge={pageData.expert.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expert.lead}
                    quoteSubtitle={pageData.expert.headline}
                    bio={pageData.expert.body}
                    credentials={[...pageData.expert.priorities, ...pageData.expert.expertise]}
                    ctaText={pageData.expert.ctaText}
                    ctaLink={pageData.expert.ctaLink}
                />

                {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about planning a Uniworld Cruise and Rail Journey.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CTA (CenterCTA with matched background image) ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    buttonText={pageData.cta.primaryCta}
                    buttonLink={pageData.cta.primaryCtaLink}
                    image={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default UniworldCruiseAndRailJourneys;