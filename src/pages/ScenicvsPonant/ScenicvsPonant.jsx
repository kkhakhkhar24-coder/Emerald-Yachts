import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — Exact original content preserved
import pageData from './data.json';
import './ScenicvsPonant.css';

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

// 100% Unique Authentic Media Assets from @/assets/ScenicvsPonant
import heroBgImg from '@/assets/ScenicvsPonant/hero-scenic-vs-ponant.webp';
import introImg from '@/assets/ScenicvsPonant/intro-expedition-ships.webp';
import aboutScenicImg from '@/assets/ScenicvsPonant/about-scenic-eclipse.webp';
import aboutPonantImg from '@/assets/ScenicvsPonant/about-ponant-expedition.webp';
import shipScenicImg from '@/assets/ScenicvsPonant/ship-scenic-eclipse.webp';
import shipPonantImg from '@/assets/ScenicvsPonant/ship-ponant-style.webp';
import suitesScenicImg from '@/assets/ScenicvsPonant/suites-scenic-verandah.webp';
import suitesPonantImg from '@/assets/ScenicvsPonant/suites-ponant-stateroom.webp';
import diningScenicImg from '@/assets/ScenicvsPonant/dining-scenic-gourmet.webp';
import diningPonantImg from '@/assets/ScenicvsPonant/dining-ponant-french.webp';
import destScenicImg from '@/assets/ScenicvsPonant/dest-scenic-polar.webp';
import destPonantImg from '@/assets/ScenicvsPonant/dest-ponant-remote.webp';
import expeditionScenicImg from '@/assets/ScenicvsPonant/expedition-scenic-heli.webp';
import expeditionPonantImg from '@/assets/ScenicvsPonant/expedition-ponant-zodiac.webp';
import amenitiesScenicImg from '@/assets/ScenicvsPonant/amenities-scenic-all-inclusive.webp';
import amenitiesPonantImg from '@/assets/ScenicvsPonant/amenities-ponant-inclusions.webp';
import wellnessScenicImg from '@/assets/ScenicvsPonant/wellness-scenic-spa.webp';
import wellnessPonantImg from '@/assets/ScenicvsPonant/wellness-ponant-spa.webp';
import entertainmentScenicImg from '@/assets/ScenicvsPonant/entertainment-scenic.webp';
import entertainmentPonantImg from '@/assets/ScenicvsPonant/entertainment-ponant.webp';
import serviceScenicImg from '@/assets/ScenicvsPonant/service-scenic-butler.webp';
import servicePonantImg from '@/assets/ScenicvsPonant/service-ponant-crew.webp';
import chooseScenicImg from '@/assets/ScenicvsPonant/choose-scenic.webp';
import choosePonantImg from '@/assets/ScenicvsPonant/choose-ponant.webp';
import ctaBgImg from '@/assets/ScenicvsPonant/cta-scenic-vs-ponant-bg.webp';

function ScenicVsPonant() {
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
                    "url": "https://www.tripsandships.com/assets/ScenicvsPonant/hero-scenic-vs-ponant.webp",
                    "caption": "Scenic vs Ponant Luxury Expedition Cruise Comparison"
                },
                "image": "https://www.tripsandships.com/assets/ScenicvsPonant/hero-scenic-vs-ponant.webp",
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
                    { "@type": "Brand", "name": "Ponant" }
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
        <div className="svp-page-wrapper">
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

            {/* 4. About the Brands — Scenic vs Ponant Editorial Showcases */}
            <FeatureSplit
                title={pageData.about.scenic.name}
                subtitles={[pageData.about.scenic.badge]}
                summary={pageData.about.scenic.description}
                image={aboutScenicImg}
                imagePosition="left"
                theme="light"
            />
            <FeatureSplit
                title={pageData.about.ponant.name}
                subtitles={[pageData.about.ponant.badge]}
                summary={pageData.about.ponant.description}
                image={aboutPonantImg}
                imagePosition="right"
                theme="white"
            />

            {/* 5. Ships and Onboard Experience */}
            <ContainedShowdown
                title={pageData.ships.title}
                brandA={{
                    name: pageData.ships.scenic.name,
                    image: shipScenicImg,
                    features: pageData.ships.scenic.features
                }}
                brandB={{
                    name: pageData.ships.ponant.name,
                    image: shipPonantImg,
                    features: pageData.ships.ponant.features
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
                    name: pageData.suites.ponant.name,
                    image: suitesPonantImg,
                    features: pageData.suites.ponant.features
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
                    name: pageData.dining.ponant.name,
                    image: diningPonantImg,
                    features: pageData.dining.ponant.features
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
                    name: "Ponant Remote Itineraries",
                    image: destPonantImg,
                    features: pageData.destinations.ponant
                }}
            />

            {/* 9. Expedition Experience */}
            <ContainedShowdown
                title={pageData.expedition.title}
                brandA={{
                    name: pageData.expedition.scenic.name,
                    image: expeditionScenicImg,
                    features: pageData.expedition.scenic.features
                }}
                brandB={{
                    name: pageData.expedition.ponant.name,
                    image: expeditionPonantImg,
                    features: pageData.expedition.ponant.features
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
                    name: "Ponant Premium Inclusions",
                    image: amenitiesPonantImg,
                    features: pageData.includedAmenities.ponant
                }}
            />

            {/* 11. Wellness and Spa */}
            <ContainedShowdown
                title={pageData.wellnessAndSpa.title}
                brandA={{
                    name: "Scenic Senses Spa & Wellness",
                    image: wellnessScenicImg,
                    features: pageData.wellnessAndSpa.scenic
                }}
                brandB={{
                    name: "Ponant Wellness & Relaxation",
                    image: wellnessPonantImg,
                    features: pageData.wellnessAndSpa.ponant
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
                    name: "Ponant Cultural Evenings",
                    image: entertainmentPonantImg,
                    features: pageData.entertainment.ponant
                }}
            />

            {/* 13. Service Comparison */}
            <ContainedShowdown
                title={pageData.service.title}
                brandA={{
                    name: "Scenic Butler & Personalized Hospitality",
                    image: serviceScenicImg,
                    features: pageData.service.scenic
                }}
                brandB={{
                    name: "Ponant French Hospitality & Crew",
                    image: servicePonantImg,
                    features: pageData.service.ponant
                }}
            />

            {/* 14. Pricing & Investment */}
            <FeatureGrid
                title={pageData.pricing.title}
                subtitle={pageData.pricing.subtitle}
                features={[
                    {
                        title: "Scenic Luxury Investment",
                        description: pageData.pricing.scenic
                    },
                    {
                        title: "Ponant Expedition Value",
                        description: pageData.pricing.ponant
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
                    name: pageData.whoShouldChoose.ponant.name,
                    image: choosePonantImg,
                    features: pageData.whoShouldChoose.ponant.features
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
                    subtitle: "Everything you need to know when comparing Scenic and Ponant luxury expeditions.",
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

export default ScenicVsPonant;