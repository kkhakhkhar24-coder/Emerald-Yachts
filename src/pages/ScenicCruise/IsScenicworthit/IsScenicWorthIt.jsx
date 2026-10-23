import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — 100% original content preserved
import pageData from './data.json';
import './IsScenicWorthIt.css';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/IsScenicworthit (Exact original SEO filenames preserved)
import heroBgImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-exterior-rotterdam-panoramic-view.webp';
import introImg from '@/assets/ScenicCruise/IsScenicworthit/captain-welcome-christmas-antarctica-scenic-eclipse-i.webp';
import differenceImg from '@/assets/ScenicCruise/IsScenicworthit/damoy-point-eclipse-scenic-eclipse-i-antarctica.webp';
import riverCruiseImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-space-ship-durnstein-austria.webp';
import oceanCruiseImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-exterior-antarctica-leopard-seals.webp';
import expeditionImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-antarctica-zodiacs-jason-flesher.webp';
import accommodationsImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-deluxe-verandah-suite.webp';
import diningImg from '@/assets/ScenicCruise/IsScenicworthit/kokos-asian-fusion-scenic-eclipse-ii.webp';
import butlerImg from '@/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-butler-breakfast.webp';
import riverDanubeImg from '@/assets/ScenicCruise/IsScenicworthit/sr-sjs-hungary-budapest-danube-aerial-ret-ext.webp';
import ctaBgImg from '@/assets/ScenicCruise/IsScenicworthit/scer-scenic-azure-douro-valley-portugal-dour.webp';

function IsScenicWorthIt() {
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-exterior-rotterdam-panoramic-view.webp",
                    "caption": "Is Scenic Worth It - Luxury Cruises Review"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/IsScenicworthit/scenic-eclipse-exterior-rotterdam-panoramic-view.webp",
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
                    "Scenic River Cruises",
                    "Scenic Eclipse Discovery Yachts",
                    "All-Inclusive Cruise Value Analysis",
                    "Polar Expeditions",
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
                        "name": "Is Scenic Worth It",
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
        <div className="isw-page-wrapper">
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

            {/* 3. What Makes Scenic Different */}
            <FeatureSplit
                title={pageData.difference.title}
                subtitles={[pageData.difference.subtitle]}
                summary={pageData.difference.summary}
                features={pageData.difference.features}
                image={differenceImg}
                imagePosition="right"
                theme="light"
            />

            {/* 4. Complete Inclusions Feature Grid */}
            <FeatureGrid
                title={pageData.inclusions.title}
                subtitle={pageData.inclusions.subtitle}
                features={pageData.inclusions.items}
            />

            {/* 5. Scenic River Cruises vs. Scenic Ocean Cruises */}
            <ContainedShowdown
                title={pageData.riverVsOcean.title}
                brandA={{
                    name: pageData.riverVsOcean.river.name,
                    image: riverCruiseImg,
                    features: pageData.riverVsOcean.river.features
                }}
                brandB={{
                    name: pageData.riverVsOcean.ocean.name,
                    image: oceanCruiseImg,
                    features: pageData.riverVsOcean.ocean.features
                }}
            />

            {/* 6. Outstanding Expedition Experiences */}
            <FeatureSplit
                title={pageData.expedition.title}
                subtitles={[pageData.expedition.subtitle]}
                summary={pageData.expedition.footnote}
                features={pageData.expedition.features}
                image={expeditionImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Exceptional Accommodations */}
            <FeatureSplit
                title={pageData.accommodations.title}
                subtitles={[pageData.accommodations.subtitle]}
                summary={pageData.accommodations.footnote}
                features={pageData.accommodations.features}
                image={accommodationsImg}
                imagePosition="right"
                theme="light"
            />

            {/* 8. Dining That Rivals Luxury Hotels */}
            <FeatureSplit
                title={pageData.dining.title}
                subtitles={[pageData.dining.subtitle]}
                summary={pageData.dining.footnote}
                features={pageData.dining.features}
                image={diningImg}
                imagePosition="left"
                theme="white"
            />

            {/* 9. Personalized Butler Service */}
            <FeatureSplit
                title={pageData.butler.title}
                subtitles={[pageData.butler.subtitle]}
                summary={pageData.butler.footnote}
                features={pageData.butler.features}
                image={butlerImg}
                imagePosition="right"
                theme="light"
            />

            {/* 10. Is Scenic Good for River Cruises? */}
            <FeatureSplit
                title={pageData.riverValue.title}
                subtitles={[pageData.riverValue.subtitle]}
                summary={pageData.riverValue.footnote}
                features={pageData.riverValue.features}
                image={riverDanubeImg}
                imagePosition="left"
                theme="white"
            />

            {/* 11. Who Gets the Most Value vs. Potential Drawbacks */}
            <ProsConsCards
                title={pageData.valueAnalysis.title}
                prosTitle={pageData.valueAnalysis.prosTitle}
                bestFor={pageData.valueAnalysis.bestFor}
                consTitle={pageData.valueAnalysis.consTitle}
                notBestFor={pageData.valueAnalysis.notBestFor}
                bottomNote={pageData.valueAnalysis.bottomNote}
            />

            {/* 12. Authority Box — The Bottom Line Value Verdict */}
            <div className="max-w-6xl mx-auto px-6">
                <AuthorityBox
                    title={pageData.bottomLine.title}
                    content={pageData.bottomLine.paragraphs.join(' ')}
                    author="Angela Hughes, CEO & Luxury Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 13. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points}
            />

            {/* 14. Expert Insight & Credentials — Angela Hughes */}
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

            {/* 15. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to the most common questions about Scenic Luxury Cruises.",
                    faqs: pageData.faqs
                }}
            />

            {/* 16. Final Call to Action */}
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

export default IsScenicWorthIt;
