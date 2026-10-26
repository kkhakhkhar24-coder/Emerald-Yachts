import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — 100% original content preserved
import pageData from './data.json';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CountriesGrid from '@/components/ui/CountriesGrid';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Unique Authentic Scenic Eclipse Luxury Suite Media Assets
import heroBgImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-best-suites-hero.webp';
import introImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-best-suites-intro.webp';
import destVerandahImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-verandah-suite-best.webp';
import destDeluxeVerandahImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-deluxe-verandah-suite-best.webp';
import destGrandDeluxeImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-grand-deluxe-verandah-suite-best.webp';
import destSpaImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-spa-suite-best.webp';
import destPanoramaImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-panorama-suite-best.webp';
import destGrandPanoramaImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-grand-panorama-suite-best.webp';
import destOwnersPenthouseImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-owners-penthouse-suite-best.webp';
import destTwoBedroomPenthouseImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-two-bedroom-penthouse-suite-best.webp';
import butlerImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-butler-room-service.webp';
import spaJacuzziImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-spa-suite-jacuzzi-bathroom.webp';
import penthouseTerraceImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-penthouse-terrace-spa-pool.webp';
import ctaBgImg from '@/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-cta-suite-elegance.webp';

function BestScenicSuites() {
    // Suite image lookup map
    const suiteImageMap = {
        verandah: destVerandahImg,
        deluxeVerandah: destDeluxeVerandahImg,
        grandDeluxeVerandah: destGrandDeluxeImg,
        spaSuite: destSpaImg,
        panoramaSuite: destPanoramaImg,
        grandPanoramaSuite: destGrandPanoramaImg,
        ownersPenthouse: destOwnersPenthouseImg,
        twoBedroomPenthouse: destTwoBedroomPenthouseImg
    };

    // Smooth scroll for in-page anchor links (e.g., #suites)
    useEffect(() => {
        const scrollToElement = (id) => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a');
            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const id = href.slice(1);
                    const el = document.getElementById(id);
                    if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', `#${id}`);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        if (window.location.hash) {
            setTimeout(() => scrollToElement(window.location.hash.slice(1)), 150);
        }

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    // Standard JSON-LD Schema strictly matching the reference schema & RitzCarltonYachtCollectionCost
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-best-suites-hero.webp",
                    "caption": "Best Scenic Suites - Scenic Eclipse Suite Guide"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Bestscenicsuites/scenic-eclipse-best-suites-hero.webp",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury suites, expedition yachting, butler services, and custom luxury cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Best Scenic Suites",
                    "Scenic Eclipse Suites",
                    "Verandah Suite Selection",
                    "Penthouse & Spa Suites",
                    "Butler Service at Sea",
                    "Luxury Expedition Cruising",
                    "Ship Deck Plans & Suite Selection"
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
                        "name": "Best Scenic Suites",
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
        <div className="bss-page-wrapper">
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

            {/* 3. Why Scenic Suites Stand Out */}
            <FeatureGrid
                title={pageData.standoutFeatures.title}
                subtitle={pageData.standoutFeatures.subtitle}
                features={pageData.standoutFeatures.features}
            />

            {/* 4. The Best Scenic Suites Showcase */}
            <div id="suites">
                <CountriesGrid
                    title={pageData.suites.title}
                    subtitle={pageData.suites.subtitle}
                    items={pageData.suites.items.map(suite => ({
                        title: suite.name,
                        description: suite.desc,
                        image: suiteImageMap[suite.imageKey] || destVerandahImg
                    }))}
                />
            </div>

            {/* 5. Butler Care & In-Suite Dining */}
            <FeatureSplit
                title={pageData.butlerCare.title}
                subtitles={[pageData.butlerCare.subtitle]}
                summary={pageData.butlerCare.footnote}
                features={pageData.butlerCare.features}
                image={butlerImg}
                imagePosition="left"
                theme="white"
            />

            {/* 6. Wellness & Spa Suite Sanctuary */}
            <FeatureSplit
                title={pageData.spaWellness.title}
                subtitles={[pageData.spaWellness.subtitle]}
                summary={pageData.spaWellness.footnote}
                features={pageData.spaWellness.features}
                image={spaJacuzziImg}
                imagePosition="right"
                theme="light"
            />

            {/* 7. Owner's Penthouse Private Terrace */}
            <FeatureSplit
                title={pageData.penthouseTerrace.title}
                subtitles={[pageData.penthouseTerrace.subtitle]}
                summary={pageData.penthouseTerrace.footnote}
                features={pageData.penthouseTerrace.features}
                image={penthouseTerraceImg}
                imagePosition="left"
                theme="white"
            />

            {/* 8. Quick Pick Comparison: Find Your Match */}
            <TravelerTypeGrid
                title={pageData.quickPicks.title}
                subtitle={pageData.quickPicks.subtitle}
                items={pageData.quickPicks.items}
            />

            {/* 9. Tips for Choosing the Right Cabin */}
            <FeatureGrid
                title={pageData.tips.title}
                subtitle={pageData.tips.subtitle}
                features={pageData.tips.features}
            />

            {/* 10. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points}
            />

            {/* 11. Expert Insight & Credentials — Angela Hughes */}
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
                ctaText="Speak with a Scenic Suite Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 12. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about choosing the best suite on Scenic Eclipse.",
                    faqs: pageData.faqs
                }}
            />

            {/* 13. Final Call to Action */}
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

export default BestScenicSuites;
