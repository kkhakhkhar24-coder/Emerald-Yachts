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

// 100% Authentic Scenic Eclipse Luxury Suite Media Assets
import heroBgImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-cabins-guide-hero.webp';
import introImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-all-verandah-suites-intro.webp';
import destVerandahImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-verandah-suite.webp';
import destDeluxeVerandahImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-deluxe-verandah-suite.webp';
import destGrandDeluxeImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-grand-deluxe-verandah-suite.webp';
import destSpaImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-spa-suite.webp';
import destPanoramaImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-panorama-suite.webp';
import destGrandPanoramaImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-grand-panorama-suite.webp';
import destOwnersPenthouseImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-owners-penthouse-suite.webp';
import destTwoBedroomPenthouseImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-two-bedroom-penthouse-suite.webp';
import butlerImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-butler-service.webp';
import amenitiesImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-luxury-bathroom-amenities.webp';
import ctaBgImg from '@/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-penthouse-deck-cta.webp';

function ScenicCabinsGuide() {
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

    // Standard JSON-LD Schema strictly matching the user's reference schema format
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-cabins-guide-hero.webp",
                    "caption": "Scenic Cabins Guide - Scenic Eclipse Suites & Cabins"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Sceniccabinsguide/scenic-eclipse-cabins-guide-hero.webp",
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
                    "Scenic Eclipse Suites",
                    "Scenic Cabins Guide",
                    "Verandah Suite Categories",
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
                        "name": "Scenic Cabins Guide",
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
        <div className="scg-page-wrapper">
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

            {/* 4. Scenic Suite Categories */}
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

            {/* 5. Butler Service in Every Suite */}
            <FeatureSplit
                title={pageData.butlerService.title}
                subtitles={[pageData.butlerService.subtitle]}
                summary={pageData.butlerService.footnote}
                features={pageData.butlerService.features}
                image={butlerImg}
                imagePosition="left"
                theme="white"
            />

            {/* 6. Curated Suite Amenities & Finishes */}
            <FeatureSplit
                title={pageData.amenities.title}
                subtitles={[pageData.amenities.subtitle]}
                summary={pageData.amenities.footnote}
                features={pageData.amenities.features}
                image={amenitiesImg}
                imagePosition="right"
                theme="light"
            />

            {/* 7. Which Suite Should You Choose? */}
            <TravelerTypeGrid
                title={pageData.suitePicker.title}
                subtitle={pageData.suitePicker.subtitle}
                items={pageData.suitePicker.items}
            />

            {/* 8. Tips for Choosing the Right Cabin */}
            <FeatureGrid
                title={pageData.tips.title}
                subtitle={pageData.tips.subtitle}
                features={pageData.tips.features}
            />

            {/* 9. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points}
            />

            {/* 10. Expert Insight & Credentials — Angela Hughes */}
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

            {/* 11. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about suites, cabins, and amenities on Scenic Eclipse.",
                    faqs: pageData.faqs
                }}
            />

            {/* 12. Final Call to Action */}
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

export default ScenicCabinsGuide;
