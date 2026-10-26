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
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Authentic Scenic Eclipse Luxury Helicopter Media Assets
import heroBgImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-hero.webp';
import introImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-airbus-h130.webp';
import antarcticaImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-antarctica.webp';
import greenlandImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-greenland.webp';
import icelandImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-iceland.webp';
import kimberleyImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-kimberley.webp';
import norwayImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-svalbard-norway.webp';
import aerialViewsImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-aerial-views.webp';
import safetyImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-safety.webp';
import ctaBgImg from '@/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-cta.webp';

function ScenicHelicopterExperience() {
    // Destination image lookup map
    const destinationImageMap = {
        antarctica: antarcticaImg,
        greenland: greenlandImg,
        iceland: icelandImg,
        kimberley: kimberleyImg,
        norway: norwayImg
    };

    // Smooth scroll for in-page anchor links (e.g., #destinations)
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-hero.webp",
                    "caption": "Scenic Helicopter Experience - Scenic Eclipse Aerial Flightseeing"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/ScenicHelicopterExperience/scenic-eclipse-helicopter-hero.webp",
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
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/logo.png"
                }
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/",
                "description": "Luxury travel agency specializing in ultra-luxury expedition cruising, aerial flightseeing, and bespoke Scenic Eclipse journeys."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
                "name": "Angela Hughes",
                "jobTitle": "CEO & Luxury Expedition Cruise Specialist",
                "url": "https://www.tripsandships.com/about-angela-hughes",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
                    "caption": "Angela Hughes - Luxury Travel Expert"
                },
                "description": "Angela Hughes is an internationally recognized luxury travel advisor with over 40 years of experience across 121+ countries, specializing in polar expeditions and flightseeing adventures.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Scenic Eclipse Helicopters",
                    "Luxury Expedition Cruises",
                    "Aerial Flightseeing",
                    "Polar Exploration",
                    "Antarctica Expeditions",
                    "Arctic & Greenland Cruising",
                    "Ultra-Luxury Travel Planning"
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
                        "name": "Scenic Cruises",
                        "item": "https://www.tripsandships.com/scenic-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Scenic Helicopter Experience",
                        "item": pageData.seo.canonicalUrl
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `${pageData.seo.canonicalUrl}#faq`,
                "mainEntity": pageData.faqs.map((faq) => ({
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

    // Map expert review arrays for CostValueAnalysisCards
    const whatWeLoveMapped = pageData.expertReview.whatWeLove.map((item) => ({
        title: item.split(' that ')[0].split(' with ')[0].split(' for ')[0],
        description: item
    }));

    const areasToConsiderMapped = pageData.expertReview.areasToConsider.map((item) => ({
        title: item.split('—')[0].split(' with ')[0],
        description: item
    }));

    return (
        <div className="she-page-wrapper">
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

            {/* 3. Aircraft Specifications & Features */}
            <FeatureGrid
                title={pageData.aircraft.title}
                subtitle={pageData.aircraft.subtitle}
                features={pageData.aircraft.features}
            />

            {/* 4. Aerial Views & Perspective */}
            <FeatureSplit
                title={pageData.views.title}
                subtitles={[pageData.views.subtitle]}
                features={pageData.views.features}
                image={aerialViewsImg}
                imagePosition="right"
                theme="light"
            />

            {/* 5. Best Flight Destinations Showcase */}
            <div id="destinations">
                <CountriesGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.subtitle}
                    items={pageData.destinations.items.map((dest) => ({
                        title: dest.name,
                        description: dest.desc,
                        image: destinationImageMap[dest.imageKey] || antarcticaImg
                    }))}
                />
            </div>

            {/* 6. Uncompromising Aviation Safety Standards */}
            <FeatureSplit
                title={pageData.safety.title}
                subtitles={[pageData.safety.subtitle]}
                summary={pageData.safety.footnote}
                features={pageData.safety.features}
                image={safetyImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Helicopter vs Traditional Shore Excursions */}
            <TravelerTypeGrid
                title={pageData.comparison.title}
                subtitle={pageData.comparison.subtitle}
                items={pageData.comparison.items}
            />

            {/* 8. Expert Review: What We Love & Considerations */}
            <CostValueAnalysisCards
                title={pageData.expertReview.title}
                subtitle={pageData.expertReview.subtitle}
                includedTitle="What We Love About Scenic Helicopters"
                extrasTitle="Important Considerations"
                included={whatWeLoveMapped}
                extras={areasToConsiderMapped}
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
                ctaText="Speak with a Scenic Helicopter Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 11. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to essential questions about the Scenic Helicopter Experience.",
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

export default ScenicHelicopterExperience;
