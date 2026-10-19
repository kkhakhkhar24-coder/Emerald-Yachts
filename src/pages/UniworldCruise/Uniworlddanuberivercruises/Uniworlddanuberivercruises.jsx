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

// Media Assets from @/assets/Uniworlddanuberivercruises
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-ss-maria-theresa-sailing-past-budapest-parliament.webp';
import introPrimaryImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-ss-maria-theresa-docked-danube-budapest.webp';
import introSecondaryImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-austria-vienna-danube-river-docked-ship.webp';
import scorecardImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-ss-maria-theresa-wachau-valley-vineyards-austria.webp';
import inclusionsDiningImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-super-ship-gourmet-restaurant-rendering.jpeg';
import diningImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-luxury-cruise-chef-tasting-menu.webp';
import cabinImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-presidential-royal-suite-bedroom-rendering.jpeg';
import ctaBgImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-budapest-illuminated-night-cruise-danube-hungary.jpg';

// Destination Images (100% matched to headings)
import budapestImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-budapest-szechenyi-chain-bridge-danube-hungary.jpg';
import viennaImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/vienna-hofburg-palace-danube-austria.jpg';
import bratislavaImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/bratislava-castle-danube-slovakia.jpg';
import passauImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/passau-three-rivers-danube-germany.jpg';
import wachauImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-ss-maria-theresa-wachau-valley-vineyards-austria.webp';
import melkImg from '@/assets/UniworldCruise/Uniworlddanuberivercruises/uniworld-austria-melk-abbey-danube-river-cruise.jpg';

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

function Uniworlddanuberivercruises() {
    // Structured Data Schema matching RitzCarltonYachtCollectionCost pattern (6 Entities)
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
                    "url": "https://www.tripsandships.com/images/uniworld-danube-river-cruise.jpg",
                    "caption": "Uniworld Danube River Cruises"
                },
                "image": "https://www.tripsandships.com/images/uniworld-danube-river-cruise.jpg",
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
                    "Luxury River Cruises",
                    "Uniworld Boutique River Cruises",
                    "Danube River Cruising",
                    "Central European Itineraries",
                    "Boutique River Ships",
                    "Gourmet Dining Onboard"
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
                        "name": "Uniworld Danube River Cruises",
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

    // Destinations data mapping with authentic images
    const destinationImages = [
        budapestImg,
        viennaImg,
        bratislavaImg,
        passauImg,
        wachauImg,
        melkImg
    ];

    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.desc,
        image: destinationImages[idx]
    }));

    // Highlights data mapping for AuthorityGrid
    const highlightItems = pageData.highlights.items.map((item) => ({
        title: item,
        description: `Experience the finest ${item.toLowerCase()} along the legendary Danube waterway with Uniworld.`
    }));

    // Seasons data mapping for CardGrid
    const seasonCards = pageData.seasons.seasons.map((season) => {
        const iconName = season.title === "Spring" ? "Flower2" 
                       : season.title === "Summer" ? "Sun" 
                       : season.title === "Fall" ? "Leaf" 
                       : "Sparkles";
        return {
            title: season.title,
            description: season.text,
            icon: iconName
        };
    });

    // Planning Tips mapped for StepByStepGuide
    const planningSteps = [
        { title: "Advance Booking", description: pageData.planningTips.tips[0] },
        { title: "Optimal Season", description: pageData.planningTips.tips[1] },
        { title: "Cabin Selection", description: pageData.planningTips.tips[2] },
        { title: "City Extensions", description: pageData.planningTips.tips[3] },
        { title: "Footwear & Logistics", description: pageData.planningTips.tips[4] }
    ];

    // Why Book items mapped for LuxuryGrid
    const whyBookIcons = ["compass", "ship", "map", "dollar", "user", "check"];
    const whyBookItems = pageData.whyBook.items.map((item, idx) => ({
        title: item,
        description: `Our advisors assist with every aspect of your reservation, ensuring you ${item.toLowerCase()} with VIP amenities.`,
        icon: whyBookIcons[idx % whyBookIcons.length]
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
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-danube-river-cruise.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.title} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-danube-river-cruise.jpg" />
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

                {/* ─── SECTION 5: WHY CHOOSE A DANUBE CRUISE (AuthorityGrid) ─── */}
                <AuthorityGrid
                    title={pageData.highlights.heading}
                    subtitle={`${pageData.highlights.lead} ${pageData.highlights.footer}`}
                    items={highlightItems}
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

                {/* ─── SECTION 7: TOP DESTINATIONS (ThreeColumnGrid) ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.heading}
                    subtitle={`${pageData.destinations.eyebrow}: ${pageData.destinations.lead}`}
                    items={destinationItems}
                />

                {/* ─── SECTION 8: DINING ONBOARD (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.heading}
                    subtitles={[pageData.dining.eyebrow, pageData.dining.lead]}
                    features={pageData.dining.items}
                    summary="Dining is one of Uniworld's signature experiences. Menus reflect the destinations visited throughout the Danube region, featuring farm-to-table cuisine and regional wine pairings."
                    ctaText="Speak to a Dining Specialist"
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

                {/* ─── SECTION 9: ACCOMMODATIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={cabinImg}
                    title={pageData.accommodations.heading}
                    subtitles={[pageData.accommodations.eyebrow, pageData.accommodations.lead]}
                    features={pageData.accommodations.items}
                    summary="Every stateroom features elegant European-inspired décor, handcrafted furnishings, marble baths, French balconies, and luxury bedding."
                    ctaText="Explore Suite Options"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: BEST TIME TO CRUISE (CardGrid) ─── */}
                <CardGrid
                    title={pageData.seasons.heading}
                    subtitle={`${pageData.seasons.eyebrow}: ${pageData.seasons.lead}`}
                    cards={seasonCards}
                    columns={4}
                />

                {/* ─── SECTION 11: IS IT WORTH IT & RECOMMENDATION (ConclusionSection) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.worthIt.heading,
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
                    bestFor={pageData.prosCons.pros.map(p => `${p.title}: ${p.desc}`)}
                    notBestFor={pageData.prosCons.cons.map(c => `${c.title}: ${c.desc}`)}
                />

                {/* ─── SECTION 13: WHO IS IT FOR (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.audience.heading}
                    prosTitle={pageData.audience.whoShouldTitle}
                    consTitle={pageData.audience.whoPreferTitle}
                    bestFor={pageData.audience.whoShould}
                    notBestFor={pageData.audience.whoPrefer}
                    bgClass="bg-slate-50"
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

                {/* ─── SECTION 14: PLANNING TIPS (StepByStepGuide) ─── */}
                <StepByStepGuide
                    title={pageData.planningTips.heading}
                    subtitle={pageData.planningTips.eyebrow}
                    steps={planningSteps}
                />

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS (LuxuryGrid) ─── */}
                <LuxuryGrid
                    title={pageData.whyBook.heading}
                    subtitle={`${pageData.whyBook.featuredTitle}: ${pageData.whyBook.featuredDesc}`}
                    items={whyBookItems}
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
                        subtitle: "Everything you need to know about planning a Uniworld Danube River Cruise.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CTA (CenterCTA) ─── */}
                <CenterCTA
                    title={pageData.cta.heading}
                    description={pageData.cta.text}
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

export default Uniworlddanuberivercruises;
