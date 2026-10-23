import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — 100% original content preserved
import pageData from './data.json';
import './Scenicmediterraneancruises.css';

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

// 100% Unique Authentic Media Assets from @/assets/ScenicCruise/Scenicmediterraneancruises (Exact original SEO filenames preserved)
import heroBgImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-exterior-valetta-malta-panoramic-view.webp';
import introImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-st-tropez-france.webp';
import experienceImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-observation-terrace.webp';
import accommodationsImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-verandah-suite-scenic-eclipse-ii.webp';
import diningImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/elements-scenic-eclipse-ii-evening-ambiance.webp';
import excursionsImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-park-guell-barcelona-spain.webp';
import enrichImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-helicopter-mt-etna-italy.webp';
import wellnessImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-senses-spa-scenic-eclipse-ii.webp';
import ctaBgImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-ii-sailaway-lisbon-portugal.webp';

// Destination Images
import destItalyImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/amalfi-coast-italy-scenic-coastal-village-sea-view-travel-vacation.webp';
import destGreeceImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp';
import destCroatiaImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-croatia-sail-away-zodiac.webp';
import destFranceImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-st-tropez-france.webp';
import destSpainImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-park-guell-barcelona-spain.webp';
import destPortugalImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-ii-sailaway-lisbon-portugal.webp';
import destMontenegroImg from '@/assets/ScenicCruise/Scenicmediterraneancruises/zakynthos-greece-navagio-beach-shipwreck-cove-turquoise-water-cliffs.webp';

const destinationImageMap = {
    'amalfi-coast-italy-scenic-coastal-village-sea-view-travel-vacation.webp': destItalyImg,
    'santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp': destGreeceImg,
    'scenic-eclipse-croatia-sail-away-zodiac.webp': destCroatiaImg,
    'scenic-eclipse-st-tropez-france.webp': destFranceImg,
    'scenic-eclipse-park-guell-barcelona-spain.webp': destSpainImg,
    'scenic-eclipse-ii-sailaway-lisbon-portugal.webp': destPortugalImg,
    'zakynthos-greece-navagio-beach-shipwreck-cove-turquoise-water-cliffs.webp': destMontenegroImg
};

function ScenicMediterraneanCruises() {
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-exterior-valetta-malta-panoramic-view.webp",
                    "caption": "Scenic Mediterranean Cruises"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Scenicmediterraneancruises/scenic-eclipse-exterior-valetta-malta-panoramic-view.webp",
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
                    "Scenic Mediterranean Cruises",
                    "Scenic Eclipse Discovery Yachts",
                    "Mediterranean Luxury Cruising",
                    "French Riviera & Amalfi Coast Yachting",
                    "Greek Isles & Dalmatian Coast Expeditions",
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
                        "name": "Mediterranean Cruises",
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
        <div className="smc-page-wrapper">
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

            {/* 3. Why Choose Scenic for a Mediterranean Cruise? */}
            <FeatureGrid
                title={pageData.whyChoose.title}
                subtitle={pageData.whyChoose.subtitle}
                features={pageData.whyChoose.features}
            />

            {/* 4. Mediterranean Destinations Showcase */}
            <CountriesGrid
                title={pageData.destinations.title}
                subtitle={pageData.destinations.subtitle}
                items={pageData.destinations.items.map(dest => ({
                    title: dest.name,
                    description: dest.desc,
                    image: destinationImageMap[dest.imageKey] || destItalyImg
                }))}
            />

            {/* 5. Scenic Eclipse Experience */}
            <FeatureSplit
                title={pageData.experience.title}
                subtitles={[pageData.experience.subtitle]}
                summary={pageData.experience.footnote}
                features={pageData.experience.features}
                image={experienceImg}
                imagePosition="right"
                theme="light"
            />

            {/* 6. Dining & Culinary Experiences */}
            <FeatureSplit
                title={pageData.dining.title}
                subtitles={[pageData.dining.subtitle]}
                summary={pageData.dining.footnote}
                features={pageData.dining.features}
                image={diningImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Scenic Freechoice Excursions */}
            <FeatureSplit
                title={pageData.freechoice.title}
                subtitles={[pageData.freechoice.subtitle]}
                summary={pageData.freechoice.footnote}
                features={pageData.freechoice.features}
                image={excursionsImg}
                imagePosition="right"
                theme="light"
            />

            {/* 8. Scenic Enrich Experiences */}
            <FeatureSplit
                title={pageData.enrich.title}
                subtitles={[pageData.enrich.subtitle]}
                summary={pageData.enrich.footnote}
                features={pageData.enrich.items.map(item => `${item.title}: ${item.desc}`)}
                image={enrichImg}
                imagePosition="left"
                theme="white"
            />

            {/* 9. Wellness at Sea */}
            <FeatureSplit
                title={pageData.wellness.title}
                subtitles={[pageData.wellness.subtitle]}
                summary={pageData.wellness.footnote}
                features={pageData.wellness.features}
                image={wellnessImg}
                imagePosition="right"
                theme="light"
            />

            {/* 10. What's Included */}
            <FeatureGrid
                title={pageData.included.title}
                subtitle={pageData.included.subtitle}
                features={pageData.included.items}
            />

            {/* 11. Best Time for a Scenic Mediterranean Cruise */}
            <SeasonsTimeline
                title={pageData.seasons.title}
                subtitle={pageData.seasons.subtitle}
                items={pageData.seasons.items.map(season => ({
                    title: season.title.split(' ')[0],
                    time: season.title.includes('(') ? season.title.match(/\((.*?)\)/)?.[1] : '',
                    description: season.desc,
                    image: season.title.includes('Spring') ? destItalyImg : season.title.includes('Summer') ? destGreeceImg : destCroatiaImg
                }))}
            />

            {/* 12. Who Should Choose Scenic Mediterranean Cruises? */}
            <TravelerTypeGrid
                title={pageData.audience.title}
                subtitle={pageData.audience.subtitle}
                items={[
                    {
                        title: "Couples & Romantic Getaways",
                        description: "Couples seeking romance, privacy, and breathtaking scenic coastal sailing.",
                        icon: "Heart",
                        tag: "Romance"
                    },
                    {
                        title: "Ultra-Luxury Travelers",
                        description: "Discerning guests who expect six-star standards, fine dining, and bespoke service.",
                        icon: "Crown",
                        tag: "Six-Star"
                    },
                    {
                        title: "Honeymooners",
                        description: "Celebrating milestone moments in world-class boutique yacht style.",
                        icon: "Sparkles",
                        tag: "Celebration"
                    },
                    {
                        title: "Retirees & Long-Stay Cruisers",
                        description: "Looking for comprehensive all-inclusive ease, luxury comfort, and peaceful pacing.",
                        icon: "Anchor",
                        tag: "All-Inclusive"
                    },
                    {
                        title: "Small Ship Enthusiasts",
                        description: "Boutique yacht lovers seeking access to intimate ports inaccessible to mega-ships.",
                        icon: "Ship",
                        tag: "Yacht Style"
                    },
                    {
                        title: "Food & Wine Connoisseurs",
                        description: "Travelers who appreciate regional culinary depth, fine wines, and market tastings.",
                        icon: "Wine",
                        tag: "Gastronomy"
                    },
                    {
                        title: "Cultural Travelers",
                        description: "Immersive history, UNESCO World Heritage monuments, and authentic architecture.",
                        icon: "Landmark",
                        tag: "Culture"
                    },
                    {
                        title: "First-Time Mediterranean Visitors",
                        description: "Wanting a completely effortless, guided, and all-inclusive European journey.",
                        icon: "Compass",
                        tag: "First-Timer"
                    },
                    {
                        title: "Experienced Luxury Cruisers",
                        description: "Discerning cruisers wanting an intimate, uncrowded alternative to large cruise ships.",
                        icon: "Gem",
                        tag: "Exclusivity"
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
                ctaText="Speak with a Mediterranean Specialist"
                ctaLink="/contact"
            />

            {/* 15. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about Scenic Mediterranean Cruises.",
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

export default ScenicMediterraneanCruises;