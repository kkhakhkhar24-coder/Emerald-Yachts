import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching Uniworld architecture)
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

// Media Assets from @/assets/UniworldCruise/UniworldAirfareTransfers
import ctaBgImg from '@/assets/UniworldCruise/UniworldAirfareTransfers/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

function UniworldAirfareTransfers() {
    // 1. Data mapping for What to Expect Upon Arrival (ThreeColumnGrid - built-in placeholder)
    const arrivalStepItems = pageData.arrivalSteps.steps.map(step => ({
        title: step.title,
        description: step.description,
        features: step.features,
        image: null,
        category: step.tag,
        placeholderLabel: `${step.title} - ${step.tag}`
    }));

    // 2. Data mapping for International Arrival Tips (CurvilinearGrid)
    const arrivalTipItems = pageData.arrivalTips.strategies.map(tip => ({
        title: tip.title,
        description: tip.description,
        icon: tip.icon
    }));

    // 3. Structured Data Schema matching reference schema standard (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldAirfareTransfers/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp",
                    "caption": "Uniworld Airfare, Airport Transfers and Arrival Guide"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldAirfareTransfers/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp",
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
                    "Flight Routing & Booking Logistics",
                    "Airport & Port Transfers",
                    "Embarkation & Disembarkation Procedures"
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
                        "name": "Airfare & Transfers",
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
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldAirfareTransfers/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldAirfareTransfers/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
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

                {/* ─── SECTION 3: SEAMLESS ARRIVAL INSIGHT / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title={pageData.executiveInsight.title}
                        content={pageData.executiveInsight.quote}
                        author={pageData.executiveInsight.author}
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── SECTION 4: PLANNING CHECKLIST BEFORE THE CRUISE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={null}
                    title={pageData.planningChecklist.title}
                    subtitles={[pageData.planningChecklist.lead]}
                    features={pageData.planningChecklist.items}
                    summary={pageData.planningChecklist.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 5: BOOKING AIRFARE (INDEPENDENT VS CRUISE PROVIDER) ─── */}
                <CostValueAnalysisCards
                    title={pageData.flightOptions.title}
                    subtitle={pageData.flightOptions.subtitle}
                    includedTitle={pageData.flightOptions.independentTitle}
                    extrasTitle={pageData.flightOptions.packageTitle}
                    included={pageData.flightOptions.independentBenefits}
                    extras={pageData.flightOptions.packageBenefits}
                />

                {/* ─── SECTION 6: SHOULD YOU ARRIVE EARLY? ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={null}
                    title={pageData.arriveEarly.title}
                    subtitles={[
                        pageData.arriveEarly.lead,
                        pageData.arriveEarly.subtitle
                    ]}
                    features={pageData.arriveEarly.benefits}
                    summary={pageData.arriveEarly.callout}
                    ctaText="Explore Itineraries"
                    ctaLink="/uniworld-river-cruises/best-itineraries"
                />

                {/* ─── SECTION 7: AIRPORT TRANSFERS EXPLAINED ─── */}
                <InclusionsList
                    title={pageData.airportTransfers.title}
                    inclusions={pageData.airportTransfers.factors.map(f => `${f.title}: ${f.description}`)}
                    expertNote={pageData.airportTransfers.callout}
                    image={null}
                />

                {/* ─── SECTION 8: WHAT TO EXPECT UPON ARRIVAL (5-STEP PROCESS) ─── */}
                <ThreeColumnGrid
                    title={pageData.arrivalSteps.title}
                    subtitle={pageData.arrivalSteps.subtitle}
                    items={arrivalStepItems}
                />

                {/* ─── SECTION 9: EMBARKATION DAY STEPS ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={null}
                    title={pageData.embarkationDay.title}
                    subtitles={[pageData.embarkationDay.lead]}
                    features={pageData.embarkationDay.steps}
                    summary={pageData.embarkationDay.callout}
                    ctaText="Plan with an Advisor"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: LUGGAGE GUIDELINES & SMART PACKING ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={null}
                    title={pageData.luggageGuidelines.title}
                    subtitles={[
                        pageData.luggageGuidelines.lead,
                        pageData.luggageGuidelines.subtitle
                    ]}
                    features={pageData.luggageGuidelines.items}
                    summary={pageData.luggageGuidelines.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 11: TRANSFERS BETWEEN HOTELS AND SHIPS ─── */}
                <InclusionsList
                    title={pageData.hotelShipTransfers.title}
                    inclusions={pageData.hotelShipTransfers.items}
                    expertNote={pageData.hotelShipTransfers.callout}
                    image={null}
                />

                {/* ─── SECTION 12: FLIGHT TIMING TIPS (BEFORE & AFTER CRUISE) ─── */}
                <CostValueAnalysisCards
                    title={pageData.flightTiming.title}
                    subtitle={pageData.flightTiming.subtitle}
                    includedTitle={pageData.flightTiming.beforeTitle}
                    extrasTitle={pageData.flightTiming.afterTitle}
                    included={pageData.flightTiming.beforeItems}
                    extras={pageData.flightTiming.afterItems}
                />

                {/* ─── SECTION 13: TRAVEL DOCUMENTS YOU'LL NEED ─── */}
                <InclusionsList
                    title={pageData.travelDocuments.title}
                    inclusions={pageData.travelDocuments.items}
                    expertNote={pageData.travelDocuments.warning}
                    image={null}
                />

                {/* ─── SECTION 14: ARRIVAL TIPS FOR INTERNATIONAL TRAVELERS ─── */}
                <CurvilinearGrid
                    title={pageData.arrivalTips.title}
                    subtitle={pageData.arrivalTips.eyebrow}
                    paragraphs={[
                        pageData.arrivalTips.lead,
                        pageData.arrivalTips.callout
                    ]}
                    items={arrivalTipItems}
                />

                {/* ─── SECTION 15: COMMON ARRIVAL MISTAKES TO AVOID ─── */}
                <InclusionsList
                    title={pageData.commonMistakes.title}
                    inclusions={pageData.commonMistakes.items}
                    expertNote={pageData.commonMistakes.callout}
                    image={null}
                />

                {/* ─── SECTION 16: KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.keyTakeaways.title,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 17: INSIGHT FROM ANGELA HUGHES (EXPERT CREDENTIALS) ─── */}
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

                {/* ─── SECTION 18: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld River Cruises airfare, airport transfers, arrival logistics, and embarkation.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 19: FINAL CENTER CTA ─── */}
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

export default UniworldAirfareTransfers;