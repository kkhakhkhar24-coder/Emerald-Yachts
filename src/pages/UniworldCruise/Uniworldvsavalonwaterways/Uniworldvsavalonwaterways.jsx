import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching Uniworld architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import FeatureSplit from '@/components/ui/FeatureSplit';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority and Insider Tip
import ProfilePictureAH from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

// Media Assets from @/assets/UniworldCruise/Uniworldvsavalonwaterways
import heroBgImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/hero-avalon-sunrise-river-cruise.webp';
import introPrimaryImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp';
import avalonShipImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/avalon-vista-danube-budapest.webp';
import shipDesignImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-presidential-observation-lounge.jpeg';
import avalonSuiteImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/avalon-panorama-suite.png';
import diningImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-ss-emilie-evening-ambient-dinner.webp';
import inclusionsImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-ss-bon-voyage-soleil-deck-infinity-pool-day.webp';
import avalonActiveImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/avalon-active-discovery-canoeing.webp';
import uniworldExcursionImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-amsterdam-canals-historic-boat-tour-netherlands.jpeg';
import ctaBgImg from '@/assets/UniworldCruise/Uniworldvsavalonwaterways/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

function UniworldVsAvalonWaterways() {
    // 1. Data mapping for Excursions (ThreeColumnGrid) with matched Avalon Active & Uniworld Masterpiece images
    const excursionImages = [avalonActiveImg, uniworldExcursionImg, null];
    const excursionItems = pageData.excursions.items.map((item, idx) => ({
        title: item.title,
        description: item.description,
        features: [],
        category: "Excursion Highlights",
        image: excursionImages[idx],
        placeholderLabel: item.title
    }));

    // 2. Data mapping for Cost & Value Analysis Cards
    const pricingIncluded = pageData.pricing.uniworldPoints.map(point => ({
        title: "Uniworld Inclusions",
        description: point
    }));
    const pricingExtras = pageData.pricing.avalonPoints.map(point => ({
        title: "Avalon Inclusions",
        description: point
    }));

    // 3. Data mapping for Who Should Choose Cards (CurvilinearGrid)
    const whoShouldChooseItems = [
        ...pageData.whoShouldChoose.uniworld.items.map(item => ({
            title: "Uniworld Traveler",
            description: item,
            icon: "star"
        })),
        ...pageData.whoShouldChoose.avalon.items.map(item => ({
            title: "Avalon Traveler",
            description: item,
            icon: "compass"
        }))
    ];

    // 4. Data mapping for Why Book With Us (CurvilinearGrid)
    const planningBenefits = pageData.whyBookWithUs.benefits.map((benefit, idx) => {
        const icons = ["compass", "star", "ship", "map", "user", "utensils", "check"];
        return {
            title: `Advantage ${idx + 1}`,
            description: benefit,
            icon: icons[idx % icons.length]
        };
    });

    // 5. Structured Data Schema matching exact RitzCarlton and Uniworld standards (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/Uniworldvsavalonwaterways/hero-avalon-sunrise-river-cruise.webp",
                    "caption": "Uniworld vs Avalon Waterways Comparison"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/Uniworldvsavalonwaterways/hero-avalon-sunrise-river-cruise.webp",
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
                "description": "Luxury travel agency specializing in luxury river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "Uniworld Boutique River Cruises",
                    "Avalon Waterways",
                    "European River Cruises",
                    "Rhine & Danube River Cruises"
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
                        "name": "Uniworld vs Avalon Waterways",
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

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* SEO and Schema Tags */}
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
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
                    showReadMore={false}
                    backgroundImage={heroBgImg}
                    bgPosition="bg-center"
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={avalonShipImg}
                    paragraphs={[
                        pageData.intro.lead,
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: QUICK ANSWER / INSIDER TIP AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 my-8">
                    <AuthorityBox
                        title="Insider Tip"
                        content={pageData.quickAnswer.quote}
                        author={`${pageData.quickAnswer.author}, ${pageData.quickAnswer.role}`}
                        authorImage={insiderTipImg}
                    />
                </div>

                {/* ─── SECTION 4: AT A GLANCE HEAD-TO-HEAD COMPARISON TABLE ─── */}
                <div id="comparison">
                    <LuxuryCruiseComparisonTable
                        title={pageData.atAGlance.title}
                        headers={pageData.atAGlance.headers}
                        rows={pageData.atAGlance.rows}
                    />
                </div>

                {/* ─── SECTION 5: EXECUTIVE BENCHMARK RATINGS ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.ratings.title}
                    headers={pageData.ratings.headers}
                    rows={pageData.ratings.rows}
                />

                {/* ─── SECTION 6: SHIP DESIGN COMPARISON ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={shipDesignImg}
                    title={pageData.shipDesign.title}
                    subtitles={[
                        pageData.shipDesign.lead,
                        `Winner: ${pageData.shipDesign.winner}`
                    ]}
                    features={[
                        ...pageData.shipDesign.uniworldPillars.map(p => `Uniworld: ${p}`),
                        ...pageData.shipDesign.avalonPillars.map(p => `Avalon: ${p}`)
                    ]}
                    summary={pageData.shipDesign.verdict}
                    ctaText="Explore Uniworld Ships"
                    ctaLink="/uniworld-river-cruises/ships"
                />

                {/* ─── SECTION 7: SUITES & CABINS COMPARISON ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={avalonSuiteImg}
                    title={pageData.accommodations.title}
                    subtitles={[
                        pageData.accommodations.lead,
                        `Winner: ${pageData.accommodations.winner}`
                    ]}
                    features={[
                        ...pageData.accommodations.uniworldDetails.map(d => `Uniworld: ${d}`),
                        ...pageData.accommodations.avalonDetails.map(d => `Avalon: ${d}`)
                    ]}
                    summary={pageData.accommodations.verdict}
                    ctaText="Compare Cabin Categories"
                    ctaLink="/uniworld-river-cruises/best-cabins"
                />

                {/* ─── SECTION 8: DINING COMPARISON ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={diningImg}
                    title={pageData.dining.title}
                    subtitles={[
                        pageData.dining.lead,
                        `Winner: ${pageData.dining.winner}`
                    ]}
                    features={[
                        ...pageData.dining.uniworldDetails.map(d => `Uniworld: ${d}`),
                        ...pageData.dining.avalonDetails.map(d => `Avalon: ${d}`)
                    ]}
                    summary={pageData.dining.verdict}
                    ctaText="Uniworld Food & Dining Guide"
                    ctaLink="/uniworld-river-cruises/food-dining"
                />

                {/* ─── SECTION 9: WHAT'S INCLUDED COMPARISON ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.uniworldItems}
                    expertNote={pageData.inclusions.expertNote}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 10: SHORE EXCURSIONS ─── */}
                <ThreeColumnGrid
                    title={pageData.excursions.title}
                    subtitle={pageData.excursions.lead}
                    items={excursionItems}
                />

                {/* ─── SECTION 11: PRICING & VALUE ANALYSIS ─── */}
                <CostValueAnalysisCards
                    title={pageData.pricing.title}
                    subtitle={pageData.pricing.subtitle}
                    includedTitle={pageData.pricing.uniworldTitle}
                    extrasTitle={pageData.pricing.avalonTitle}
                    included={pricingIncluded}
                    extras={pricingExtras}
                />

                {/* ─── SECTION 12: WHO SHOULD CHOOSE EACH CRUISE LINE ─── */}
                <CurvilinearGrid
                    title={pageData.whoShouldChoose.title}
                    subtitle="TRAVELER MATCHMAKER"
                    items={whoShouldChooseItems}
                    paragraphs={[pageData.whoShouldChoose.subtitle]}
                />

                {/* ─── SECTION 13: OUR RECOMMENDATION & VERDICT ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.recommendation.title,
                            paragraphs: [
                                ...pageData.recommendation.paragraphs,
                                `Key Highlights: ${pageData.recommendation.takeaways.join(', ')}`
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 14: WHY BOOK WITH TRIPS & SHIPS ─── */}
                <CurvilinearGrid
                    title={pageData.whyBookWithUs.title}
                    subtitle={pageData.whyBookWithUs.eyebrow}
                    items={planningBenefits}
                    paragraphs={[pageData.whyBookWithUs.lead]}
                />

                {/* ─── SECTION 15: EXPERT CREDENTIALS (ANGELA HUGHES) ─── */}
                <ExpertCredentials
                    name={pageData.expertInsight.name}
                    title={pageData.expertInsight.title}
                    badge={pageData.expertInsight.badge}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.quote}
                    quoteSubtitle="Insight from Angela Hughes"
                    bio={pageData.expertInsight.bio}
                    credentials={pageData.expertInsight.credentials}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know when comparing Uniworld Boutique River Cruises and Avalon Waterways.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: BOTTOM CENTER CTA ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    primaryCtaText={pageData.cta.primaryCtaText}
                    primaryCtaLink={pageData.cta.primaryCtaLink}
                    secondaryCtaText={pageData.cta.secondaryCtaText}
                    secondaryCtaLink={pageData.cta.secondaryCtaLink}
                    backgroundImage={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default UniworldVsAvalonWaterways;