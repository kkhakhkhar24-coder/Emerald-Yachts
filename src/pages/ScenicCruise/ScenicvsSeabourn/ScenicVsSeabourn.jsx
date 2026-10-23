import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — Exact original content preserved
import pageData from './data.json';
import './ScenicVsSeabourn.css';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ConclusionSection from '@/components/ui/ConclusionSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/ScenicVsSeabourn
import heroBgImg from '@/assets/ScenicCruise/ScenicVsSeabourn/hero-scenic-vs-seabourn.webp';
import introImg from '@/assets/ScenicCruise/ScenicVsSeabourn/intro-scenic-seabourn.webp';
import aboutScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/about-scenic-eclipse.webp';
import aboutSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/about-seabourn-fleet.jpg';
import shipScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/ship-scenic-discovery.webp';
import shipSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/ship-seabourn-luxury.jpg';
import suitesScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/suites-scenic-verandah.webp';
import suitesSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/suites-seabourn-veranda.jpg';
import diningScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/dining-scenic-culinary.webp';
import diningSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/dining-seabourn-gourmet.jpg';
import destScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/dest-scenic-global.webp';
import destSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/dest-seabourn-alaska.jpg';
import expeditionScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/expedition-scenic-zodiac.webp';
import expeditionSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/expedition-seabourn-polar.jpg';
import amenitiesScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/amenities-scenic-inclusions.webp';
import amenitiesSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/amenities-seabourn-pool.jpg';
import wellnessScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/wellness-scenic-spa.webp';
import wellnessSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/wellness-seabourn-deck.jpeg';
import entertainmentScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/entertainment-scenic.webp';
import entertainmentSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/entertainment-seabourn.jpg';
import serviceScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/service-scenic-butler.webp';
import serviceSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/service-seabourn-hosts.jpeg';
import chooseScenicImg from '@/assets/ScenicCruise/ScenicVsSeabourn/choose-scenic.webp';
import chooseSeabournImg from '@/assets/ScenicCruise/ScenicVsSeabourn/choose-seabourn.webp';
import ctaBgImg from '@/assets/ScenicCruise/ScenicVsSeabourn/cta-scenic-seabourn-bg.webp';

function ScenicVsSeabourn() {
    // Structured Data Schema matching RitzCarltonYachtCollectionCost reference standard
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/ScenicVsSeabourn/hero-scenic-vs-seabourn.webp",
                    "caption": "Scenic vs Seabourn Ultra-Luxury Cruise Comparison"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/ScenicVsSeabourn/hero-scenic-vs-seabourn.webp",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/logo.png"
                }
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in ultra-luxury ocean, expedition, and river cruises."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO & Luxury Cruise Specialist",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "description": "Luxury travel expert with 40+ years of experience and travels across 121+ countries."
            },
            {
                "@type": "ComparisonPage",
                "name": pageData.seo.metaTitle,
                "about": [
                    { "@type": "Brand", "name": "Scenic Luxury Cruises & Tours" },
                    { "@type": "Brand", "name": "Seabourn" }
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
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Comparisons",
                        "item": "https://www.tripsandships.com/cruise-comparisons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": pageData.seo.metaTitle,
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
        <div className="svs-page-wrapper">
            <Helmet>
                <title>{pageData.seo.metaTitle}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
            </Helmet>

            {/* Navigation */}
            <Navbar />

            {/* 1. Hero Section */}
            <ComparisonHero
                badge={pageData.hero.badge}
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                backgroundImage={heroBgImg}
                primaryCtaText={pageData.hero.primaryCta.text}
                primaryCtaLink={pageData.hero.primaryCta.link}
                secondaryCtaText={pageData.hero.secondaryCta.text}
                secondaryCtaLink={pageData.hero.secondaryCta.link}
            />

            {/* 2. Editorial Intro Split */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={pageData.intro.paragraphs}
                primaryImage={introImg}
            />

            {/* 3. At A Glance Side-by-Side Comparison Table */}
            <ComparisonTable
                data={{
                    title: pageData.atAGlance.title,
                    headers: pageData.atAGlance.headers,
                    rows: pageData.atAGlance.rows
                }}
            />

            {/* 4. About the Brands — Scenic vs Seabourn Showcases */}
            <FeatureSplit
                title={pageData.about.scenic.name}
                subtitles={[pageData.about.scenic.badge]}
                summary={pageData.about.scenic.description}
                image={aboutScenicImg}
                imagePosition="left"
                theme="light"
            />
            <FeatureSplit
                title={pageData.about.seabourn.name}
                subtitles={[pageData.about.seabourn.badge]}
                summary={pageData.about.seabourn.description}
                image={aboutSeabournImg}
                imagePosition="right"
                theme="white"
            />

            {/* 5. Ships and Onboard Atmosphere */}
            <ContainedShowdown
                title={pageData.ships.title}
                brandA={{
                    name: pageData.ships.scenic.name,
                    image: shipScenicImg,
                    features: pageData.ships.scenic.features
                }}
                brandB={{
                    name: pageData.ships.seabourn.name,
                    image: shipSeabournImg,
                    features: pageData.ships.seabourn.features
                }}
            />

            {/* 6. Suites and Accommodations */}
            <ContainedShowdown
                title={pageData.suites.title}
                brandA={{
                    name: pageData.suites.scenic.name,
                    image: suitesScenicImg,
                    features: pageData.suites.scenic.features
                }}
                brandB={{
                    name: pageData.suites.seabourn.name,
                    image: suitesSeabournImg,
                    features: pageData.suites.seabourn.features
                }}
            />

            {/* 7. Dining Experience */}
            <ContainedShowdown
                title={pageData.dining.title}
                brandA={{
                    name: pageData.dining.scenic.name,
                    image: diningScenicImg,
                    features: pageData.dining.scenic.features
                }}
                brandB={{
                    name: pageData.dining.seabourn.name,
                    image: diningSeabournImg,
                    features: pageData.dining.seabourn.features
                }}
            />

            {/* 8. Destinations Across the Globe */}
            <ContainedShowdown
                title={pageData.destinations.title}
                brandA={{
                    name: "Scenic Discovery Destinations",
                    image: destScenicImg,
                    features: pageData.destinations.scenic
                }}
                brandB={{
                    name: "Seabourn Global Ports & Expeditions",
                    image: destSeabournImg,
                    features: pageData.destinations.seabourn
                }}
            />

            {/* 9. Expedition Cruising */}
            <ContainedShowdown
                title={pageData.expedition.title}
                brandA={{
                    name: pageData.expedition.scenic.name,
                    image: expeditionScenicImg,
                    features: pageData.expedition.scenic.features
                }}
                brandB={{
                    name: pageData.expedition.seabourn.name,
                    image: expeditionSeabournImg,
                    features: pageData.expedition.seabourn.features
                }}
            />

            {/* 10. Included Amenities */}
            <ContainedShowdown
                title={pageData.includedAmenities.title}
                brandA={{
                    name: "Scenic All-Inclusive Luxuries",
                    image: amenitiesScenicImg,
                    features: pageData.includedAmenities.scenic
                }}
                brandB={{
                    name: "Seabourn Premium Inclusions",
                    image: amenitiesSeabournImg,
                    features: pageData.includedAmenities.seabourn
                }}
            />

            {/* 11. Wellness and Relaxation */}
            <ContainedShowdown
                title={pageData.wellnessAndSpa.title}
                brandA={{
                    name: "Scenic Senses Spa & Wellness",
                    image: wellnessScenicImg,
                    features: pageData.wellnessAndSpa.scenic
                }}
                brandB={{
                    name: "Seabourn Spa & Wellness Center",
                    image: wellnessSeabournImg,
                    features: pageData.wellnessAndSpa.seabourn
                }}
            />

            {/* 12. Entertainment */}
            <ContainedShowdown
                title={pageData.entertainment.title}
                brandA={{
                    name: "Scenic Onboard Entertainment",
                    image: entertainmentScenicImg,
                    features: pageData.entertainment.scenic
                }}
                brandB={{
                    name: "Seabourn Shows & Enrichment",
                    image: entertainmentSeabournImg,
                    features: pageData.entertainment.seabourn
                }}
            />

            {/* 13. Service Comparison */}
            <ContainedShowdown
                title={pageData.service.title}
                brandA={{
                    name: "Scenic Butler Hospitality",
                    image: serviceScenicImg,
                    features: pageData.service.scenic
                }}
                brandB={{
                    name: "Seabourn Suite Host Attention",
                    image: serviceSeabournImg,
                    features: pageData.service.seabourn
                }}
            />

            {/* 14. Pricing & Investment */}
            <FeatureGrid
                title={pageData.pricing.title}
                subtitle={pageData.pricing.subtitle}
                features={[
                    {
                        title: "Scenic Expedition Investment",
                        description: pageData.pricing.scenic
                    },
                    {
                        title: "Seabourn Ultra-Luxury Value",
                        description: pageData.pricing.seabourn
                    }
                ]}
            />

            {/* 15. Which Cruise Line Is Right for You? */}
            <ContainedShowdown
                title={pageData.whoShouldChoose.title}
                brandA={{
                    name: pageData.whoShouldChoose.scenic.name,
                    image: chooseScenicImg,
                    features: pageData.whoShouldChoose.scenic.features
                }}
                brandB={{
                    name: pageData.whoShouldChoose.seabourn.name,
                    image: chooseSeabournImg,
                    features: pageData.whoShouldChoose.seabourn.features
                }}
            />

            {/* 16. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBookWithUs.title}
                subtitle={pageData.whyBookWithUs.subtitle}
                points={pageData.whyBookWithUs.points}
            />

            {/* 17. Expert Insight & Credentials — Angela Hughes */}
            <ExpertCredentials
                title={pageData.expertInsight.title}
                name={pageData.expertInsight.name}
                authorName={pageData.expertInsight.name}
                image={ProfilePictureAH}
                badge={pageData.expertInsight.badge}
                quote={pageData.expertInsight.quote}
                quoteSubtitle={pageData.expertInsight.prioritiesTitle}
                credentials={pageData.expertInsight.priorities}
                bio={pageData.expertInsight.bio}
                ctaText="Schedule a Consultation"
                ctaLink="/contact"
            />

            {/* 18. Conclusion */}
            <ConclusionSection
                sections={[
                    {
                        heading: pageData.conclusion.heading,
                        paragraphs: pageData.conclusion.paragraphs
                    }
                ]}
            />

            {/* 19. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know when comparing Scenic and Seabourn ultra-luxury cruises.",
                    faqs: pageData.faqs
                }}
            />

            {/* 20. Final Call to Action */}
            <CenterCTA
                title={pageData.finalCta.title}
                description={pageData.finalCta.subtitle}
                buttonText={pageData.finalCta.primaryCta.text}
                buttonLink={pageData.finalCta.primaryCta.link}
                image={ctaBgImg}
            />
        </div>
    );
}

export default ScenicVsSeabourn;
