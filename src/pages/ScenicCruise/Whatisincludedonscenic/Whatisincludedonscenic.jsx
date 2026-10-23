import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — Exact original content preserved
import pageData from './data.json';
import './Whatisincludedonscenic.css';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ConclusionSection from '@/components/ui/ConclusionSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/Whatisincludedonscenic (Original SEO filenames preserved)
import heroBgImg from '@/assets/ScenicCruise/Whatisincludedonscenic/danco-island-antarctic-peninsula-scenic-eclipse-i.webp';
import introImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-exterior-antarctic-pensisula-exterior.webp';
import accommodationsImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-grand-panorama-suite.webp';
import butlerImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-spa-suite-lounge-panoramic-view.webp';
import diningImg from '@/assets/ScenicCruise/Whatisincludedonscenic/lumiere-scenic-eclipse-ii-luxurious-setting.webp';
import beveragesImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-lumiere-champagne-bar-katerina-sommelier.webp';
import excursionsImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-san-gimignano-italy.webp';
import enrichImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-vineyards-bordeaux-francejpg.webp';
import expeditionImg from '@/assets/ScenicCruise/Whatisincludedonscenic/discovery-team-zodiac-panoramic-view.webp';
import wellnessImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-pure-yoga-pilates-studio.webp';
import ctaBgImg from '@/assets/ScenicCruise/Whatisincludedonscenic/scenic-eclipse-kimberley-broome.webp';

function WhatIsIncludedOnScenic() {
    // Structured Data Schema matching exact Trips & Ships reference standard
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Whatisincludedonscenic/danco-island-antarctic-peninsula-scenic-eclipse-i.webp",
                    "caption": "What Is Included on Scenic Cruises"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Whatisincludedonscenic/danco-island-antarctic-peninsula-scenic-eclipse-i.webp",
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
                    "caption": "Angela Hughes - Luxury Cruise Specialist"
                },
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Scenic Luxury Cruises & Tours",
                    "Scenic Eclipse Discovery Yachts",
                    "Scenic River Cruises",
                    "All-Inclusive Luxury Cruise Inclusions",
                    "Expedition Cruising",
                    "Butler Service & Ultra-Luxury Travel"
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
                        "name": "Scenic Luxury Yacht Guide",
                        "item": "https://www.tripsandships.com/scenic-luxury-yacht-guide"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "What Is Included",
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
        <div className="wis-page-wrapper">
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

            {/* 3. Luxury Accommodations */}
            <FeatureSplit
                title={pageData.accommodations.title}
                subtitles={[pageData.accommodations.subtitle]}
                summary={pageData.accommodations.footnote}
                features={pageData.accommodations.features}
                image={accommodationsImg}
                imagePosition="right"
                theme="light"
            />

            {/* 4. Butler Service */}
            <FeatureSplit
                title={pageData.butlerService.title}
                subtitles={[pageData.butlerService.subtitle]}
                summary={pageData.butlerService.footnote}
                features={pageData.butlerService.features}
                image={butlerImg}
                imagePosition="left"
                theme="white"
            />

            {/* 5. Fine Dining */}
            <FeatureSplit
                title={pageData.fineDining.title}
                subtitles={[pageData.fineDining.subtitle]}
                summary={pageData.fineDining.footnote}
                features={pageData.fineDining.features}
                image={diningImg}
                imagePosition="right"
                theme="light"
            />

            {/* 6. Premium Beverages */}
            <FeatureSplit
                title={pageData.premiumBeverages.title}
                subtitles={[pageData.premiumBeverages.subtitle]}
                features={pageData.premiumBeverages.features}
                image={beveragesImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Shore Excursions */}
            <FeatureSplit
                title={pageData.shoreExcursions.title}
                subtitles={[pageData.shoreExcursions.subtitle]}
                summary={pageData.shoreExcursions.footnote}
                features={pageData.shoreExcursions.features}
                image={excursionsImg}
                imagePosition="right"
                theme="light"
            />

            {/* 8. Scenic Enrich Experiences */}
            <FeatureSplit
                title={pageData.scenicEnrich.title}
                subtitles={[pageData.scenicEnrich.subtitle]}
                summary={pageData.scenicEnrich.footnote}
                features={pageData.scenicEnrich.features}
                image={enrichImg}
                imagePosition="left"
                theme="white"
            />

            {/* 9. Expedition Experiences */}
            <FeatureSplit
                title={pageData.expeditionExperiences.title}
                subtitles={[pageData.expeditionExperiences.subtitle]}
                summary={pageData.expeditionExperiences.footnote}
                features={pageData.expeditionExperiences.features}
                image={expeditionImg}
                imagePosition="right"
                theme="light"
            />

            {/* 10. Wellness & Fitness */}
            <FeatureSplit
                title={pageData.wellnessAndFitness.title}
                subtitles={[pageData.wellnessAndFitness.subtitle]}
                summary={pageData.wellnessAndFitness.footnote}
                features={pageData.wellnessAndFitness.features}
                image={wellnessImg}
                imagePosition="left"
                theme="white"
            />

            {/* 11. Good to Know: Everyday Luxuries (Wi-Fi, Gratuities, Transfers) */}
            <FeatureGrid
                title={pageData.goodToKnow.title}
                subtitle={pageData.goodToKnow.subtitle}
                features={pageData.goodToKnow.items}
            />

            {/* 12. What Is Included vs. What's Not Included */}
            <ProsConsCards
                title="What Is Included vs. What's Not Included"
                prosTitle="What Is Fully Included"
                bestFor={[
                    "All fine dining & specialty restaurants with no surcharges",
                    "Unlimited premium beverages, fine wines & Champagnes",
                    "Personalized butler service in every suite",
                    "Daily Scenic Freechoice guided shore excursions",
                    "Exclusive Scenic Enrich cultural events and private palace concerts",
                    "Zodiac excursions, expedition gear & expert naturalists",
                    "All onboard tipping and gratuities included",
                    "Complimentary Wi-Fi throughout your entire voyage"
                ]}
                consTitle="What's Not Included (Optional / Extra)"
                notBestFor={pageData.notIncluded.items}
                bottomNote="Access to all thermal spa facilities, saunas, vitality pools, and observation lounges is completely complimentary on every voyage."
            />

            {/* 13. Insider Authority Tip on Overall Value */}
            <div className="max-w-6xl mx-auto px-6">
                <AuthorityBox
                    title="Insider Value Perspective"
                    content={pageData.valueProposition.lead}
                    author="Angela Hughes, CEO & Luxury Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 14. Value Conclusion */}
            <ConclusionSection
                sections={[
                    {
                        heading: pageData.valueProposition.title,
                        paragraphs: [
                            pageData.valueProposition.lead,
                            pageData.valueProposition.description
                        ]
                    }
                ]}
            />

            {/* 15. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBookWithUs.title}
                subtitle={pageData.whyBookWithUs.subtitle}
                points={pageData.whyBookWithUs.points}
            />

            {/* 16. Expert Insight & Credentials — Angela Hughes */}
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
                ctaText="Speak with a Scenic Specialist"
                ctaLink="/contact"
            />

            {/* 17. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about what is included on Scenic Cruises.",
                    faqs: pageData.faqs
                }}
            />

            {/* 18. Final Call to Action */}
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

export default WhatIsIncludedOnScenic;