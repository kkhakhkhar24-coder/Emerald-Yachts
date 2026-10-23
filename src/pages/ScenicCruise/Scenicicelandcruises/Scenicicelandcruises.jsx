import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — 100% original content preserved
import pageData from './data.json';
import './Scenicicelandcruises.css';

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

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/Scenicicelandcruises (Exact original SEO filenames preserved)
import heroBgImg from '@/assets/ScenicCruise/Scenicicelandcruises/drangey-island-iceland-scenic-eclipse-i-martin.webp';
import introImg from '@/assets/ScenicCruise/Scenicicelandcruises/grundafjordur-iceland-scenic-eclipse-i-panoramic-view.webp';
import destReykjavikImg from '@/assets/ScenicCruise/Scenicicelandcruises/scenic-eclipse-bjorne-island-longyearbyen-reykjavik.webp';
import destWestfjordsImg from '@/assets/ScenicCruise/Scenicicelandcruises/scenic-eclipse-iceland-dynjandi-waterfall.webp';
import destIsafjordurImg from '@/assets/ScenicCruise/Scenicicelandcruises/vigur-island-iceland-scenic-eclipse-i-panoramic-view.webp';
import destAkureyriImg from '@/assets/ScenicCruise/Scenicicelandcruises/grimsey-iceland-scenic-eclipse-i-panoramic-view.webp';
import destSeydisfjordurImg from '@/assets/ScenicCruise/Scenicicelandcruises/drangey-island-iceland-scenic-eclipse-i-martin-scenic-perspective.webp';
import destEastFjordsImg from '@/assets/ScenicCruise/Scenicicelandcruises/flatey-island-iceland-scenic-eclipse-i-golden-hour-glow.webp';
import wildlifeImg from '@/assets/ScenicCruise/Scenicicelandcruises/scenic-eclipse-bearded-seal-arctic.webp';
import expeditionImg from '@/assets/ScenicCruise/Scenicicelandcruises/zodiac-excursion-iceland-scenic-eclipse-i.webp';
import luxurySuiteImg from '@/assets/ScenicCruise/Scenicicelandcruises/scenic-eclipse-deluxe-verandah-suite.webp';
import diningImg from '@/assets/ScenicCruise/Scenicicelandcruises/kokos-asian-fusion-scenic-eclipse-ii.webp';
import wellnessImg from '@/assets/ScenicCruise/Scenicicelandcruises/sce-scenic-eclipse-senses-spa-infrared-sauna.webp';
import seasonSpringImg from '@/assets/ScenicCruise/Scenicicelandcruises/flatey-island-iceland-scenic-eclipse-i-evening-ambiance.webp';
import seasonSummerImg from '@/assets/ScenicCruise/Scenicicelandcruises/drangey-island-iceland-scenic-eclipse-i-martin-panoramic-view.webp';
import seasonAutumnImg from '@/assets/ScenicCruise/Scenicicelandcruises/grundafjordur-iceland-scenic-eclipse-i-scenic-perspective.webp';
import ctaBgImg from '@/assets/ScenicCruise/Scenicicelandcruises/vigur-island-iceland-scenic-eclipse-i-evening-ambiance.webp';

function ScenicIcelandCruises() {
    // Destination Image Mapping
    const destinationImageMap = {
        reykjavik: destReykjavikImg,
        westfjords: destWestfjordsImg,
        isafjordur: destIsafjordurImg,
        akureyri: destAkureyriImg,
        seydisfjordur: destSeydisfjordurImg,
        eastfjords: destEastFjordsImg
    };

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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Scenicicelandcruises/drangey-island-iceland-scenic-eclipse-i-martin.webp",
                    "caption": "Scenic Iceland Cruises - Scenic Eclipse Discovery Yacht"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Scenicicelandcruises/drangey-island-iceland-scenic-eclipse-i-martin.webp",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and expedition cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Scenic Luxury Cruises & Tours",
                    "Scenic Eclipse Discovery Yachts",
                    "Iceland Expedition Cruises",
                    "Arctic & Polar Cruising",
                    "Whale Watching & Puffin Encounters",
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
                        "name": "Scenic Iceland Cruises",
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
        <div className="sic-page-wrapper">
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

            {/* 3. Why Choose Scenic for an Iceland Cruise? */}
            <FeatureGrid
                title={pageData.whyChoose.title}
                subtitle={pageData.whyChoose.subtitle}
                features={pageData.whyChoose.features}
            />

            {/* 4. Explore Iceland's Incredible Landscapes Showcase */}
            <CountriesGrid
                title={pageData.destinations.title}
                subtitle={pageData.destinations.subtitle}
                items={pageData.destinations.items.map(dest => ({
                    title: dest.name,
                    description: dest.desc,
                    image: destinationImageMap[dest.imageKey] || destReykjavikImg
                }))}
            />

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

            {/* 6. Expedition Experiences */}
            <FeatureSplit
                title={pageData.expedition.title}
                subtitles={[pageData.expedition.subtitle]}
                summary={pageData.expedition.footnote}
                features={pageData.expedition.features}
                image={expeditionImg}
                imagePosition="right"
                theme="light"
            />

            {/* 7. Scenic Eclipse Luxury */}
            <FeatureSplit
                title={pageData.luxury.title}
                subtitles={[pageData.luxury.subtitle]}
                summary={pageData.luxury.footnote}
                features={pageData.luxury.features}
                image={luxurySuiteImg}
                imagePosition="left"
                theme="white"
            />

            {/* 8. Dining & Culinary Experiences */}
            <FeatureSplit
                title={pageData.dining.title}
                subtitles={[pageData.dining.subtitle]}
                summary={pageData.dining.footnote}
                features={pageData.dining.features}
                image={diningImg}
                imagePosition="right"
                theme="light"
            />

            {/* 9. Wellness at Sea */}
            <FeatureSplit
                title={pageData.wellness.title}
                subtitles={[pageData.wellness.subtitle]}
                summary={pageData.wellness.footnote}
                features={pageData.wellness.features}
                image={wellnessImg}
                imagePosition="left"
                theme="white"
            />

            {/* 10. What's Included on Scenic Iceland Cruises? */}
            <FeatureGrid
                title={pageData.included.title}
                subtitle={pageData.included.subtitle}
                features={pageData.included.items}
            />

            {/* 11. Best Time to Cruise Iceland */}
            <SeasonsTimeline
                title={pageData.seasons.title}
                subtitle={pageData.seasons.subtitle}
                items={pageData.seasons.items.map(season => ({
                    title: season.title.split(' ')[0],
                    time: season.time,
                    description: season.desc,
                    image: season.title.includes('Spring') ? seasonSpringImg : season.title.includes('Summer') ? seasonSummerImg : seasonAutumnImg
                }))}
            />

            {/* 12. Who Should Choose Scenic Iceland Cruises? */}
            <TravelerTypeGrid
                title={pageData.audience.title}
                subtitle={pageData.audience.subtitle}
                items={[
                    {
                        title: "Luxury Travelers",
                        description: "Discerning travelers seeking six-star ultra-luxury comfort, all-veranda suites, and exceptional personalized butler care.",
                        icon: "Crown",
                        tag: "Ultra-Luxury"
                    },
                    {
                        title: "Expedition Enthusiasts",
                        description: "Adventurers eager to explore remote volcanic fjords, Arctic glaciers, and secluded bays via state-of-the-art Zodiacs.",
                        icon: "Compass",
                        tag: "Expedition"
                    },
                    {
                        title: "Wildlife Lovers",
                        description: "Nature enthusiasts hoping to see humpback whales, orcas, puffin nesting colonies, seals, and diverse Arctic seabirds.",
                        icon: "Bird",
                        tag: "Fauna"
                    },
                    {
                        title: "Photography Enthusiasts",
                        description: "Photographers seeking dramatic lighting, cascading waterfalls, volcanic black sand beaches, and the Midnight Sun.",
                        icon: "Camera",
                        tag: "Photography"
                    },
                    {
                        title: "Couples & Romantic Getaways",
                        description: "Partners celebrating special milestones in intimate, world-class discovery yacht style with private balcony vistas.",
                        icon: "Heart",
                        tag: "Romance"
                    },
                    {
                        title: "Solo Explorers",
                        description: "Independent luxury travelers wanting a secure, welcoming, and enriching small-ship Arctic expedition environment.",
                        icon: "User",
                        tag: "Solo Travel"
                    },
                    {
                        title: "Nature & Geology Lovers",
                        description: "Travelers fascinated by active geothermal hot springs, lava fields, dramatic basalt columns, and massive ice sheets.",
                        icon: "Mountain",
                        tag: "Geology"
                    },
                    {
                        title: "Bucket-List Adventurers",
                        description: "Travelers seeking rare experiences like crossing the Arctic Circle, hiking volcanic slopes, and spotting the Northern Lights.",
                        icon: "Award",
                        tag: "Bucket-List"
                    },
                    {
                        title: "Small Ship Cruise Fans",
                        description: "Cruisers who prefer an uncrowded boutique atmosphere of 228 guests over massive mega-cruise ships.",
                        icon: "Ship",
                        tag: "Small Ship"
                    }
                ]}
            />

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
                ctaText="Speak with an Iceland Specialist"
                ctaLink="/contact"
            />

            {/* 15. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about Scenic Iceland Cruises.",
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

export default ScenicIcelandCruises;