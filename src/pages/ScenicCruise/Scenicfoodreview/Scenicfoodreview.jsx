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

// 100% Authentic Scenic Eclipse Dining & Culinary Media Assets
import heroBgImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-hero-dining-luxury.webp';
import introImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-elements-restaurant.webp';
import destElementsImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-elements-restaurant.webp';
import destKokosImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-kokos-asian-fusion.webp';
import destSushiImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-sushi-at-kokos.webp';
import destTeppanyakiImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-teppanyaki-night-market.webp';
import destLumiereImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-lumiere-french-fine-dining.webp';
import destAzureImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-azure-bar-and-cafe.webp';
import destYachtClubImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-yacht-club-poolside-dining.webp';
import destInSuiteImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-in-suite-private-dining.webp';
import destChefsTableImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-chefs-table-degustation.webp';
import regionalCuisineImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-regional-cuisine-mediterranean.webp';
import wineBeverageImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-sommelier-wine-beverage.webp';
import dietaryImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-dietary-vegan-ceviche.webp';
import serviceImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-epicure-culinary-experience.webp';
import atmosphereImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-dining-atmosphere-ambiance.webp';
import ctaBgImg from '@/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-craft-cocktails-bar.webp';

function Scenicfoodreview() {
    // Restaurant image lookup map
    const restaurantImageMap = {
        elements: destElementsImg,
        kokos: destKokosImg,
        sushi: destSushiImg,
        teppanyaki: destTeppanyakiImg,
        lumiere: destLumiereImg,
        azure: destAzureImg,
        yachtClub: destYachtClubImg,
        inSuite: destInSuiteImg,
        chefsTable: destChefsTableImg
    };

    // Smooth scroll for in-page anchor links (e.g., #restaurants)
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-hero-dining-luxury.webp",
                    "caption": "Scenic Food Review - Scenic Eclipse Luxury Dining"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Scenicfoodreview/scenic-eclipse-hero-dining-luxury.webp",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in ultra-luxury cruises, gourmet dining, and discovery yachts.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Scenic Eclipse Dining",
                    "Scenic Food Review",
                    "Luxury Cruise Gastronomy",
                    "Lumière French Fine Dining",
                    "Koko's Asian Fusion",
                    "Butler Service & In-Suite Dining",
                    "All-Inclusive Beverage Programs"
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
                        "name": "Scenic Food Review",
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
        <div className="sfr-page-wrapper">
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

            {/* 3. Overall Dining Experience */}
            <FeatureGrid
                title={pageData.diningExperience.title}
                subtitle={pageData.diningExperience.subtitle}
                features={pageData.diningExperience.features}
            />

            {/* 4. Restaurants on Scenic Eclipse */}
            <div id="restaurants">
                <CountriesGrid
                    title={pageData.restaurants.title}
                    subtitle={pageData.restaurants.subtitle}
                    items={pageData.restaurants.items.map(rest => ({
                        title: rest.name,
                        description: rest.desc,
                        image: restaurantImageMap[rest.imageKey] || destElementsImg
                    }))}
                />
            </div>

            {/* 5. Quality of the Food */}
            <FeatureGrid
                title={pageData.foodQuality.title}
                subtitle={pageData.foodQuality.subtitle}
                features={pageData.foodQuality.features}
            />

            {/* 6. Mediterranean & Regional Cuisine */}
            <FeatureSplit
                title={pageData.regionalCuisine.title}
                subtitles={[pageData.regionalCuisine.subtitle]}
                summary={pageData.regionalCuisine.footnote}
                features={pageData.regionalCuisine.features}
                image={regionalCuisineImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Wine & Beverage Program */}
            <FeatureSplit
                title={pageData.wineBeverage.title}
                subtitles={[pageData.wineBeverage.subtitle]}
                summary={pageData.wineBeverage.footnote}
                features={pageData.wineBeverage.features}
                image={wineBeverageImg}
                imagePosition="right"
                theme="light"
            />

            {/* 8. Dietary Requirements */}
            <FeatureSplit
                title={pageData.dietaryRequirements.title}
                subtitles={[pageData.dietaryRequirements.subtitle]}
                summary={pageData.dietaryRequirements.footnote}
                features={pageData.dietaryRequirements.features}
                image={dietaryImg}
                imagePosition="left"
                theme="white"
            />

            {/* 9. Service During Meals */}
            <FeatureSplit
                title={pageData.service.title}
                subtitles={[pageData.service.subtitle]}
                summary={pageData.service.footnote}
                features={pageData.service.features}
                image={serviceImg}
                imagePosition="right"
                theme="light"
            />

            {/* 10. Dining Atmosphere */}
            <FeatureSplit
                title={pageData.atmosphere.title}
                subtitles={[pageData.atmosphere.subtitle]}
                summary="The intimate small-ship environment ensures every meal feels like a private celebration without noisy crowds."
                features={pageData.atmosphere.features}
                image={atmosphereImg}
                imagePosition="left"
                theme="white"
            />

            {/* 11. Is Scenic Better Than Other Luxury Cruise Lines? */}
            <TravelerTypeGrid
                title={pageData.isScenicBetter.title}
                subtitle={pageData.isScenicBetter.subtitle}
                items={pageData.isScenicBetter.items}
            />

            {/* 12. Our Expert Review - What We Love & Areas to Consider */}
            <ExpertAuthorityChecklist
                title={pageData.expertReview.title}
                subtitle={pageData.expertReview.subtitle}
                points={[
                    ...pageData.expertReview.whatWeLove.map(item => `What We Love: ${item}`),
                    ...pageData.expertReview.areasToConsider.map(item => `Consideration: ${item}`)
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
                ctaText="Speak with a Scenic Dining Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 15. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to common questions about dining and restaurants on Scenic Cruises.",
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

export default Scenicfoodreview;
