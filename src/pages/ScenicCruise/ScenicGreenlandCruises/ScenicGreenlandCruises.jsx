import React from 'react';
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
import SeasonsTimeline from '@/components/ui/SeasonsTimeline';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/ScenicGreenlandCruises (Exact original SEO filenames preserved)
import heroBgImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-saling-greenland.webp';
import introImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-scoresby-sound-panoramic-view.webp';
import destIlulissatImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-red-island.webp';
import destDiskoBayImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-disko-bay-greenland.webp';
import destEastGreenlandImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-greenland-scoresby-sound-town.webp';
import destNarsaqImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-greenland-narsarsuaq-ss.webp';
import destPrinceChristianImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-scoresby-sound.webp';
import destQaqortoqImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-ittoqqortoomiit-longyearbyen-reykjavik.webp';
import wildlifeImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/sce-scenic-eclipse-arctic-polar-bear-cover-image.webp';
import expeditionImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-greenland-zodiac.webp';
import luxurySuiteImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-deluxe-verandah-suite-lounge-panoramic-view.webp';
import diningImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-kokos-asian-fusion-panoramic-view.webp';
import wellnessImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-panorama-senses-spa-steambath.webp';
import seasonJuneImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-gnalodden-brepollen.webp';
import seasonSummerImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-yrte-norskoya-smeerenburg.webp';
import seasonAutumnImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-krossfjorden-sigehmna.webp';
import ctaBgImg from '@/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-arctic-helicopter.webp';

function ScenicGreenlandCruises() {
    // Destination Image Mapping
    const destinationImageMap = {
        ilulissat: destIlulissatImg,
        diskoBay: destDiskoBayImg,
        eastGreenland: destEastGreenlandImg,
        narsaq: destNarsaqImg,
        princeChristian: destPrinceChristianImg,
        qaqortoq: destQaqortoqImg
    };

    // Smooth scroll for anchor / hash links (e.g. #destinations)
    React.useEffect(() => {
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

    // Standard JSON-LD Schema matching the user's reference schema exactly
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-saling-greenland.webp",
                    "caption": "Scenic Greenland Cruises - Scenic Eclipse Discovery Yacht"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/ScenicGreenlandCruises/scenic-eclipse-saling-greenland.webp",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and polar expedition cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Scenic Greenland Cruises",
                    "Scenic Eclipse Discovery Yachts",
                    "Greenland Expedition Cruises",
                    "Arctic & Polar Cruising",
                    "Inuit Culture & Greenland Fjords",
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
                        "name": "Scenic Greenland Cruises",
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
        <div className="sgc-page-wrapper">
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

            {/* 3. Why Choose Scenic for a Greenland Cruise? */}
            <FeatureGrid
                title={pageData.whyChoose.title}
                subtitle={pageData.whyChoose.subtitle}
                features={pageData.whyChoose.features}
            />

            {/* 4. Greenland Destinations Showcase */}
            <div id="destinations">
                <CountriesGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.subtitle}
                    items={pageData.destinations.items.map(dest => ({
                        title: dest.name,
                        description: dest.desc,
                        image: destinationImageMap[dest.imageKey] || destIlulissatImg
                    }))}
                />
            </div>

            {/* 5. Incredible Wildlife Encounters */}
            <FeatureSplit
                title={pageData.wildlife.title}
                subtitles={[pageData.wildlife.subtitle]}
                summary={pageData.wildlife.footnote}
                features={pageData.wildlife.features}
                image={wildlifeImg}
                imagePosition="left"
                theme="white"
            />

            {/* 6. Immerse Yourself in Inuit Culture */}
            <FeatureSplit
                title={pageData.culture.title}
                subtitles={[pageData.culture.subtitle]}
                summary={pageData.culture.footnote}
                features={pageData.culture.features}
                image={destQaqortoqImg}
                imagePosition="right"
                theme="light"
            />

            {/* 7. Expedition Experiences */}
            <FeatureSplit
                title={pageData.expedition.title}
                subtitles={[pageData.expedition.subtitle]}
                summary={pageData.expedition.footnote}
                features={pageData.expedition.features}
                image={expeditionImg}
                imagePosition="left"
                theme="white"
            />

            {/* 8. Ultra-Luxury Living / Suites */}
            <FeatureSplit
                title={pageData.luxury.title}
                subtitles={[pageData.luxury.subtitle]}
                summary={pageData.luxury.footnote}
                features={pageData.luxury.features}
                image={luxurySuiteImg}
                imagePosition="right"
                theme="light"
            />

            {/* 9. Dining & Culinary Experiences */}
            <FeatureSplit
                title={pageData.dining.title}
                subtitles={[pageData.dining.subtitle]}
                summary={pageData.dining.footnote}
                features={pageData.dining.features}
                image={diningImg}
                imagePosition="left"
                theme="white"
            />

            {/* 10. Wellness at Sea */}
            <FeatureSplit
                title={pageData.wellness.title}
                subtitles={[pageData.wellness.subtitle]}
                summary={pageData.wellness.footnote}
                features={pageData.wellness.features}
                image={wellnessImg}
                imagePosition="right"
                theme="light"
            />

            {/* 11. Truly All-Inclusive */}
            <FeatureGrid
                title={pageData.included.title}
                subtitle={pageData.included.subtitle}
                features={pageData.included.items}
            />

            {/* 12. Best Time to Cruise Greenland */}
            <SeasonsTimeline
                title={pageData.seasons.title}
                subtitle={pageData.seasons.subtitle}
                items={pageData.seasons.items.map(season => ({
                    title: season.title.split(' ')[0],
                    time: season.time,
                    description: season.desc,
                    image: season.title.includes('June') ? seasonJuneImg : season.title.includes('Summer') ? seasonSummerImg : seasonAutumnImg
                }))}
            />

            {/* 13. Who Should Choose a Scenic Greenland Cruise? */}
            <TravelerTypeGrid
                title={pageData.audience.title}
                subtitle={pageData.audience.subtitle}
                items={pageData.audience.items}
            />

            {/* 14. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points.map(p => typeof p === 'string' ? p : `${p.title ? p.title + ': ' : ''}${p.description || ''}`)}
            />

            {/* 15. Expert Insight & Credentials — Angela Hughes */}
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
                ctaText="Speak with an Arctic Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 16. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about Scenic Greenland Cruises.",
                    faqs: pageData.faqs
                }}
            />

            {/* 17. Final Call to Action */}
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

export default ScenicGreenlandCruises;
