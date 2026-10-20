import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching Uniworldrivercruisecost architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Media Assets from @/assets/UniworldCruise/UniworldDressCodePacking
import ctaBgImg from '@/assets/UniworldCruise/UniworldDressCodePacking/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

function UniworldDressCodePacking() {
    // 1. Data mapping for Seasonal Packing Guide (ThreeColumnGrid - placeholder when no clothing image matches)
    const seasonalItems = pageData.seasonal.seasons.map(season => ({
        title: season.season,
        description: season.note,
        features: season.items,
        image: null,
        placeholderLabel: `${season.season} River Cruise Packing`
    }));

    // 2. Data mapping for Essential Packing Checklist (ThreeColumnGrid - placeholder when no clothing image matches)
    const checklistItems = pageData.checklist.categories.map(cat => ({
        title: cat.title,
        description: cat.description,
        features: cat.items,
        image: null,
        placeholderLabel: `${cat.title} Checklist`
    }));

    // 3. Data mapping for Weather Considerations & Luggage (CostValueAnalysisCards)
    const layeringList = pageData.weatherLuggage.layeringItems.map(item => ({
        title: item.title,
        description: item.description
    }));

    const luggageList = pageData.weatherLuggage.luggageItems.map(item => ({
        title: item.title,
        description: item.description
    }));

    // 4. Data mapping for Tips (CurvilinearGrid)
    const tipItems = pageData.tips.strategies.map((tip, idx) => ({
        title: tip.title,
        description: tip.description,
        icon: ['Compass', 'Map', 'Heart', 'Ship', 'Sparkles', 'Star'][idx % 6]
    }));

    // Structured Data Schema matching reference schema standard
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldDressCodePacking/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp",
                    "caption": "Uniworld Dress Code and Packing Guide"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldDressCodePacking/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp",
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
                "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
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
                    "River Cruise Packing",
                    "Smart Casual Dress Code",
                    "Excursion Footwear & Preparation"
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
                        "name": "Dress Code & Packing",
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
        <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-gold-500 selection:text-white">
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
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldDressCodePacking/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldDressCodePacking/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp" />
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
                    backgroundImage="null"
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage="null"
                    secondaryImage="null"
                    paragraphs={[
                        pageData.intro.lead,
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: EXECUTIVE PACKING OVERVIEW / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title={pageData.executiveInsight.title}
                        content={pageData.executiveInsight.quote}
                        author={pageData.executiveInsight.author}
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── SECTION 4: UNDERSTANDING THE ONBOARD DRESS CODE ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={null}
                    title={pageData.onboardDressCode.title}
                    subtitles={[
                        pageData.onboardDressCode.lead,
                        pageData.onboardDressCode.subtitle
                    ]}
                    features={pageData.onboardDressCode.items}
                    summary={pageData.onboardDressCode.callout}
                    ctaText="Explore Itineraries"
                    ctaLink="/uniworld-river-cruises/best-itineraries"
                />

                {/* ─── SECTION 5: WHAT TO WEAR DURING THE DAY ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={null}
                    title={pageData.daytimeWear.title}
                    subtitles={[
                        pageData.daytimeWear.lead,
                        pageData.daytimeWear.subtitle
                    ]}
                    features={pageData.daytimeWear.items}
                    summary={pageData.daytimeWear.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 6: EVENING DINING ATTIRE ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={null}
                    title={pageData.eveningAttire.title}
                    subtitles={[
                        pageData.eveningAttire.lead,
                        pageData.eveningAttire.subtitle
                    ]}
                    features={[
                        ...pageData.eveningAttire.women.map(w => `Women: ${w}`),
                        ...pageData.eveningAttire.men.map(m => `Men: ${m}`)
                    ]}
                    summary={pageData.eveningAttire.callout}
                    ctaText="Plan with an Advisor"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 7: SEASONAL PACKING GUIDE ─── */}
                <ThreeColumnGrid
                    title={pageData.seasonal.title}
                    subtitle={pageData.seasonal.subtitle}
                    items={seasonalItems}
                />

                {/* ─── SECTION 8: ESSENTIAL PACKING CHECKLIST ─── */}
                <ThreeColumnGrid
                    title={pageData.checklist.title}
                    subtitle={pageData.checklist.subtitle}
                    items={checklistItems}
                />

                {/* ─── SECTION 9: SHOES YOU'LL ACTUALLY WEAR & EXCURSION READINESS ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={null}
                    title={pageData.shoesExcursions.title}
                    subtitles={[
                        pageData.shoesExcursions.lead,
                        pageData.shoesExcursions.subtitle
                    ]}
                    features={pageData.shoesExcursions.items}
                    summary={pageData.shoesExcursions.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: WEATHER CONSIDERATIONS & LUGGAGE STRATEGIES ─── */}
                <CostValueAnalysisCards
                    title={pageData.weatherLuggage.title}
                    subtitle={pageData.weatherLuggage.subtitle}
                    includedTitle={pageData.weatherLuggage.layeringTitle}
                    extrasTitle={pageData.weatherLuggage.luggageTitle}
                    included={layeringList}
                    extras={luggageList}
                />

                {/* ─── SECTION 11: ITEMS YOU CAN LEAVE AT HOME ─── */}
                <InclusionsList
                    title={pageData.leaveAtHome.title}
                    inclusions={pageData.leaveAtHome.items.map(item => `${item.title} — ${item.description}`)}
                    expertNote={pageData.leaveAtHome.callout}
                    image={null}
                />

                {/* ─── SECTION 12: HELPFUL PACKING TIPS ─── */}
                <CurvilinearGrid
                    title={pageData.tips.title}
                    subtitle={pageData.tips.eyebrow}
                    paragraphs={[
                        pageData.tips.intro,
                        pageData.tips.callout
                    ]}
                    items={tipItems}
                />

                {/* ─── SECTION 13: KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.keyTakeaways.title,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 14: INSIGHT FROM ANGELA HUGHES (EXPERT CREDENTIALS) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge={pageData.expertInsight.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.quote}
                    quoteSubtitle={pageData.expertInsight.title}
                    bio={pageData.expertInsight.bio}
                    credentials={pageData.expertInsight.priorities}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 15: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld River Cruises dress code, packing, evening wear, and luggage.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 16: FINAL CENTER CTA ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.subtitle}
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

export default UniworldDressCodePacking;