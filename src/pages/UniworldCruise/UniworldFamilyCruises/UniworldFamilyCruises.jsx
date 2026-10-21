import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching Uniworld architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Media Assets from @/assets/UniworldCruise/UniworldFamilyCruises
import heroBgImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-multigenerational-family-generations-river-cruise.webp';
import introPrimaryImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-amsterdam-canals-historic-boat-tour-netherlands.jpeg';
import introSecondaryImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-beatrice-open-air-sundeck-terrace-seating.webp';
import generationsImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-antoinette-indoor-heated-swimming-pool.webp';
import danubeImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-austria-melk-abbey-danube-river-cruise.jpg';
import rhineImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-burg-rheinstein-rhine-gorge-castle-view-germany.jpg';
import seineImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-giverny-monets-garden-normandy-france.jpg';
import veniceImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-venice-grand-canal-gondolas-italy.jpg';
import educationImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-pont-du-gard-roman-aqueduct-provence-france.jpg';
import familyDiningImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import ctaBgImg from '@/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

function UniworldFamilyCruises() {
    // 1. Data mapping for Family-Friendly Destinations (ThreeColumnGrid)
    const destinationImages = [danubeImg, rhineImg, seineImg, veniceImg];
    const destinationItems = pageData.destinations.items.map((item, idx) => ({
        title: item.river,
        description: item.tag,
        features: item.highlights,
        image: destinationImages[idx],
        category: "Generations Itinerary",
        placeholderLabel: `${item.river} Family Cruise`
    }));

    // 2. Data mapping for Young Explorers Activities (ThreeColumnGrid)
    const youngExplorersItems = pageData.youngExplorers.items.map(item => ({
        title: item.title,
        description: item.description,
        features: [],
        image: null,
        category: "Kids & Teens",
        placeholderLabel: item.title
    }));

    // 3. Data mapping for Why Families Choose River Cruises (BrandPillarsShowcase)
    const whyRiverCruisingData = {
        title: pageData.whyRiverCruising.title,
        subtitle: pageData.whyRiverCruising.lead,
        pillars: [
            ...pageData.whyRiverCruising.pillars.map((pillar, idx) => {
                const iconTypes = ["ship", "star", "compass", "window", "compass", "star", "ship"];
                return {
                    title: pillar.title,
                    description: pillar.description,
                    icon: iconTypes[idx % iconTypes.length]
                };
            }),
            {
                title: pageData.whyRiverCruising.ageHeading || "Is There a Minimum Age?",
                description: pageData.whyRiverCruising.ageBody,
                icon: "star"
            }
        ]
    };

    // 4. Structured Data Schema matching RitzCarlton and Uniworld standards (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldFamilyCruises/uniworld-multigenerational-family-generations-river-cruise.webp",
                    "caption": "Uniworld Family River Cruises and Generations Collection"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldFamilyCruises/uniworld-multigenerational-family-generations-river-cruise.webp",
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
                "url": "https://www.tripsandships.com",
                "founder": {
                    "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
                }
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "parentOrganization": {
                    "@id": "https://www.tripsandships.com/#organization"
                }
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
                "name": "Angela Hughes",
                "jobTitle": "CEO & Multigenerational River Cruise Specialist",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com"
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
                        "name": "Family Cruises",
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
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldFamilyCruises/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
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
                    bgPosition="bg-top"
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
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.lead,
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: EXECUTIVE INSIGHT / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title={pageData.executiveInsight.title}
                        content={pageData.executiveInsight.quote}
                        author={pageData.executiveInsight.author}
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── SECTION 4: WHAT IS THE GENERATIONS COLLECTION? (Editorial Magazine Spread) ─── */}
                <EditorialFeatureShowcase
                    title={pageData.generationsCollection.title}
                    subtitle={`${pageData.generationsCollection.lead} ${pageData.generationsCollection.subtitle}`}
                    image={generationsImg}
                    features={pageData.generationsCollection.features}
                    bgClass="bg-stone-50"
                />

                {/* ─── SECTION 5: WHO ARE THESE CRUISES BEST FOR? ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={introSecondaryImg}
                    title={pageData.idealGuests.title}
                    subtitles={[pageData.idealGuests.lead]}
                    features={pageData.idealGuests.items}
                    summary={pageData.idealGuests.callout}
                />

                {/* ─── SECTION 6: FAMILY-FRIENDLY DESTINATIONS ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.subtitle}
                    items={destinationItems}
                />

                {/* ─── SECTION 7: EDUCATIONAL EXPERIENCES ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={educationImg}
                    title={pageData.educationalExperiences.title}
                    subtitles={[
                        pageData.educationalExperiences.lead,
                        pageData.educationalExperiences.bodyIntro
                    ]}
                    features={pageData.educationalExperiences.pillars}
                    summary={pageData.educationalExperiences.callout}
                />

                {/* ─── SECTION 8: ACTIVITIES FOR YOUNGER GUESTS ─── */}
                <ThreeColumnGrid
                    title={pageData.youngExplorers.title}
                    subtitle={pageData.youngExplorers.subtitle}
                    items={youngExplorersItems}
                />

                {/* ─── SECTION 9: DINING FOR FAMILIES ─── */}
                <InclusionsList
                    title={pageData.familyDining.title}
                    inclusions={pageData.familyDining.inclusions}
                    expertNote={pageData.familyDining.callout}
                    image={familyDiningImg}
                />

                {/* ─── SECTION 10: CABINS FOR FAMILIES ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.accommodations.title}
                    headers={["Family Size", "Recommended Cabin", "Configuration & Details"]}
                    rows={pageData.accommodations.options.map(opt => [
                        opt.familySize,
                        opt.recommendation,
                        opt.description
                    ])}
                />

                {/* ─── SECTION 11: WHY FAMILIES CHOOSE RIVER CRUISES & MINIMUM AGE (BrandPillarsShowcase) ─── */}
                <BrandPillarsShowcase data={whyRiverCruisingData} />

                {/* ─── SECTION 12: TIPS FOR PLANNING A FAMILY CRUISE ─── */}
                <CurvilinearGrid
                    title={pageData.planningTips.title}
                    subtitle={pageData.planningTips.eyebrow}
                    items={pageData.planningTips.strategies}
                    paragraphs={[
                        pageData.planningTips.subtitle,
                        pageData.planningTips.callout
                    ]}
                />

                {/* ─── SECTION 13: KEY TAKEAWAYS & IS IT WORTH IT? ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.worthIt.title,
                            paragraphs: [
                                ...pageData.worthIt.paragraphs,
                                `Key Highlights: ${pageData.worthIt.takeaways.join(', ')}`
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 14: ANGELA HUGHES EXPERT CREDENTIALS ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge="MEET THE CEO"
                    image={ProfilePictureAH}
                    quote={pageData.executiveInsight.quote}
                    quoteSubtitle="Insight from Angela Hughes"
                    bio={pageData.executiveInsight.bio}
                    credentials={[
                        "Generations Program Sailings",
                        "Connecting & Family Suites",
                        "Dedicated Family Hosts",
                        "Kid-Friendly Shore Tours",
                        "Young Travelers Menus",
                        "Onboard Activity Zones"
                    ]}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 15: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld Generations Collection family river cruises.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 16: BOTTOM CENTER CTA ─── */}
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
        </div>
    );
}

export default UniworldFamilyCruises;
