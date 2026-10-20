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
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Media Assets from @/assets/UniworldCruise/UniworldSoloTravel
import benefit1Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-river-duchess-exterior-docked-hoorn-netherlands.webp';
import benefit2Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-emilie-luxury-salon-lounge.webp';
import benefit3Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-budapest-city-excursion-highlights-hungary.jpg';
import benefit4Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-emilie-dining-room-banquette-seating.webp';
import benefit5Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-maria-theresa-baroque-habsburg-salon-lounge.webp';
import benefit6Img from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-prague-czech-republic-historic-old-town.jpg';
import classicCabinImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-river-princess-classic-stateroom-interior.webp';
import frenchBalconyImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-antoinette-french-balcony-cabin-bedroom.webp';
import suiteImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-emilie-deluxe-suite-master-king-bed.webp';
import diningImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import castleVisitsImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-burg-rheinstein-rhine-gorge-castle-view-germany.jpg';
import museumsImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-wurzburg-residence-unesco-imperial-hall-germany.jpg';
import culinaryImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-european-vineyard-culinary-tasting-experience.webp';
import bicycleToursImg from '@/assets/UniworldCruise/UniworldSoloTravel/amsterdam-canals-bicycles-tulips-netherlands-spring-city-break.webp';
import ctaBgImg from '@/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

function UniworldSoloTravel() {
    // 1. Data mapping for Benefits for Solo Travelers (ThreeColumnGrid)
    const benefitImages = [benefit1Img, benefit2Img, benefit3Img, benefit4Img, benefit5Img, benefit6Img];
    const benefitItems = pageData.benefits.items.map((item, idx) => ({
        title: item.title,
        description: item.description,
        features: item.features,
        image: benefitImages[idx],
        category: item.tag,
        placeholderLabel: `${item.title} - ${item.tag}`
    }));

    // 2. Data mapping for Cabin Options (ThreeColumnGrid)
    const cabinImages = [classicCabinImg, frenchBalconyImg, suiteImg];
    const cabinItems = pageData.cabins.items.map((cabin, idx) => ({
        title: cabin.title,
        description: cabin.description,
        features: cabin.features,
        image: cabinImages[idx],
        category: cabin.tag,
        placeholderLabel: `${cabin.title} - ${cabin.tag}`
    }));

    // 3. Data mapping for Shore Excursions (ThreeColumnGrid - placeholders for unmatched cards)
    const excursionImages = [
        null, // Walking Tours - placeholder
        castleVisitsImg, // Castle Visits - Burg Rheinstein
        museumsImg, // Museums - Würzburg UNESCO Hall
        null, // Wine Tastings - placeholder
        culinaryImg, // Culinary Experiences - Tasting pairing
        null, // Local Markets - placeholder
        bicycleToursImg // Bicycle Tours - Amsterdam Canal Bicycles
    ];
    const excursionItems = pageData.excursions.items.map((exc, idx) => ({
        title: exc.title,
        description: exc.description,
        features: exc.features,
        image: excursionImages[idx],
        category: exc.tag,
        placeholderLabel: `${exc.title} - ${exc.tag}`
    }));

    // 4. Data mapping for Social Opportunities (CurvilinearGrid)
    const socialItems = pageData.socialOpportunities.strategies.map(s => ({
        title: s.title,
        description: s.description,
        icon: s.icon
    }));

    // 5. Structured Data Schema matching reference schema standard (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp",
                    "caption": "Uniworld Solo River Cruises and Single Supplement Guide"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp",
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
                    "Solo River Cruising",
                    "Single Supplement Waivers & Promotions",
                    "Solo Cabin Selection & Logistics"
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
                        "name": "Solo Travel",
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
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldSoloTravel/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp" />
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

                {/* ─── SECTION 3: SOLO CRUISING EMPOWERMENT / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title={pageData.executiveInsight.title}
                        content={pageData.executiveInsight.quote}
                        author={pageData.executiveInsight.author}
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── SECTION 4: BENEFITS FOR SOLO TRAVELERS ─── */}
                <ThreeColumnGrid
                    title={pageData.benefits.title}
                    subtitle={pageData.benefits.subtitle}
                    items={benefitItems}
                />

                {/* ─── SECTION 5: UNDERSTANDING THE SINGLE SUPPLEMENT ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={null}
                    title={pageData.singleSupplement.title}
                    subtitles={[
                        pageData.singleSupplement.lead,
                        ...pageData.singleSupplement.subtitles
                    ]}
                    features={pageData.singleSupplement.factors}
                    summary={pageData.singleSupplement.callout}
                    ctaText="Explore Itineraries"
                    ctaLink="/uniworld-river-cruises/best-itineraries"
                />

                {/* ─── SECTION 6: CHOOSING THE BEST CABIN AS A SOLO TRAVELER ─── */}
                <ThreeColumnGrid
                    title={pageData.cabins.title}
                    subtitle={pageData.cabins.subtitle}
                    items={cabinItems}
                />

                {/* ─── SECTION 7: DINING AS A SOLO GUEST ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.title}
                    subtitles={[
                        pageData.dining.lead,
                        ...pageData.dining.subtitles
                    ]}
                    features={pageData.dining.features}
                    summary={pageData.dining.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 8: SHORE EXCURSIONS FOR SOLO TRAVELERS ─── */}
                <ThreeColumnGrid
                    title={pageData.excursions.title}
                    subtitle={pageData.excursions.subtitle}
                    items={excursionItems}
                />

                {/* ─── SECTION 9: SAFETY WHILE TRAVELING ALONE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={null}
                    title={pageData.safety.title}
                    subtitles={[
                        pageData.safety.lead,
                        ...pageData.safety.subtitles
                    ]}
                    features={pageData.safety.features}
                    summary={pageData.safety.callout}
                    ctaText="Plan with an Advisor"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: MEETING OTHER TRAVELERS (SOCIAL OPPORTUNITIES) ─── */}
                <CurvilinearGrid
                    title={pageData.socialOpportunities.title}
                    subtitle={pageData.socialOpportunities.eyebrow}
                    paragraphs={[
                        pageData.socialOpportunities.lead,
                        pageData.socialOpportunities.callout
                    ]}
                    items={socialItems}
                />

                {/* ─── SECTION 11: IS SOLO TRAVEL MORE EXPENSIVE? (ALL-INCLUSIVE VALUE) ─── */}
                <InclusionsList
                    title={pageData.valueCost.title}
                    inclusions={pageData.valueCost.inclusions}
                    expertNote={pageData.valueCost.callout}
                    image={null}
                />

                {/* ─── SECTION 12: TIPS FOR BOOKING A SOLO CRUISE ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={null}
                    title={pageData.bookingTips.title}
                    subtitles={[pageData.bookingTips.lead]}
                    features={pageData.bookingTips.tips}
                    summary={pageData.bookingTips.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 13: PACKING TIPS FOR SOLO TRAVELERS ─── */}
                <InclusionsList
                    title={pageData.packingTips.title}
                    inclusions={pageData.packingTips.items}
                    expertNote={pageData.packingTips.callout}
                    image={null}
                />

                {/* ─── SECTION 14: THE VERDICT & KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.verdict.title,
                            paragraphs: pageData.verdict.paragraphs
                        },
                        {
                            heading: pageData.keyTakeaways.title,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 15: INSIGHT FROM ANGELA HUGHES (EXPERT CREDENTIALS) ─── */}
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

                {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld Solo River Cruises, single supplements, cabins, and travel planning.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CENTER CTA ─── */}
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

export default UniworldSoloTravel;
