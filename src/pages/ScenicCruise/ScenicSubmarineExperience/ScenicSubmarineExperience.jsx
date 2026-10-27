import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON 100% original content preserved
import pageData from './data.json';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CountriesGrid from '@/components/ui/CountriesGrid';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import CardGrid from '@/components/ui/CardGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Authentic Scenic Neptune Submersible Media Assets
import heroBgImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-hero.webp';
import introImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-interior-intro.webp';
import underwaterWondersImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-underwater-wonders.webp';
import greatBarrierImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-great-barrier-reef.webp';
import caribbeanImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-caribbean.webp';
import southPacificImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-south-pacific-bora-bora.webp';
import antarcticaImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-antarctica.webp';
import discoveryImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-discovery-excursions.webp';
import safetyImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-safety-technology.webp';
import ctaBgImg from '@/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-cta.webp';

function ScenicSubmarineExperience() {
    // Destination image lookup map
    const destinationImageMap = {
        greatBarrier: greatBarrierImg,
        caribbean: caribbeanImg,
        southPacific: southPacificImg,
        antarctica: antarcticaImg
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

    // Standard JSON-LD Schema strictly matching reference schema & RitzCarltonYachtCollectionCost
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-hero.webp",
                    "caption": "Scenic Submarine Experience - Scenic Neptune Submersible Dives"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/ScenicSubmarineExperience/scenic-neptune-hero.webp",
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
                "description": "Luxury travel agency specializing in ultra-luxury expedition cruising, submersible ocean diving, and bespoke Scenic Eclipse journeys.",
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
                    "caption": "Angela Hughes - Luxury Travel Expert"
                },
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises, yacht cruising, and expedition voyages.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Scenic Neptune Submersible",
                    "Luxury Expedition Cruises",
                    "Subsea Ocean Diving",
                    "Polar Marine Exploration",
                    "Coral Reef Diving",
                    "Truly All-Inclusive Luxury Yachting",
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
                        "name": "Scenic Luxury Yacht Guide",
                        "item": "https://www.tripsandships.com/scenic-luxury-yacht-guide"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Scenic Submarine Experience",
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
        <div className="sse-page-wrapper">
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

            {/* 3. Meet Scenic Neptune Submersible Specifications */}
            <FeatureGrid
                title={pageData.submersible.title}
                subtitle={pageData.submersible.subtitle}
                features={pageData.submersible.features}
            />

            {/* 4. What You'll See Beneath the Surface */}
            <FeatureSplit
                title={pageData.views.title}
                subtitles={[pageData.views.subtitle]}
                features={pageData.views.features}
                image={underwaterWondersImg}
                imagePosition="right"
                theme="light"
            />

            {/* 5. Best Destinations for Scenic Submarine Adventures */}
            <div id="destinations">
                <CountriesGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.subtitle}
                    items={pageData.destinations.items.map((dest) => ({
                        title: dest.name,
                        description: dest.desc,
                        image: destinationImageMap[dest.imageKey] || greatBarrierImg
                    }))}
                />
            </div>

            {/* 6. Scenic Discovery Excursions Underwater */}
            <FeatureSplit
                title={pageData.discoveryExcursions.title}
                subtitles={[pageData.discoveryExcursions.subtitle]}
                summary={pageData.discoveryExcursions.footnote}
                features={pageData.discoveryExcursions.features}
                image={discoveryImg}
                imagePosition="left"
                theme="white"
            />

            {/* 7. Safety and Cutting-Edge Subsea Technology */}
            <FeatureSplit
                title={pageData.safety.title}
                subtitles={[pageData.safety.subtitle]}
                summary={pageData.safety.footnote}
                features={pageData.safety.features}
                image={safetyImg}
                imagePosition="right"
                theme="light"
            />

            {/* 8. Why Travelers Love It */}
            <CardGrid
                title={pageData.whyTravelersLoveIt.title}
                subtitle={pageData.whyTravelersLoveIt.subtitle}
                cards={pageData.whyTravelersLoveIt.items}
                columns={3}
            />

            {/* 9. Submarine vs Snorkeling & Diving */}
            <TravelerTypeGrid
                title={pageData.comparison.title}
                subtitle={pageData.comparison.subtitle}
                items={pageData.comparison.items}
            />

            {/* 10. Expert Review: What We Love & Considerations */}
            <CostValueAnalysisCards
                title={pageData.expertReview.title}
                subtitle={pageData.expertReview.subtitle}
                includedTitle="What We Love About Scenic Neptune"
                extrasTitle="Important Considerations"
                included={whatWeLoveMapped}
                extras={areasToConsiderMapped}
            />

            {/* 11. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points}
            />

            {/* 12. Expert Insight & Credentials Angela Hughes */}
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
                ctaText="Speak with a Scenic Submarine Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 13. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to essential questions about the Scenic Submarine Experience.",
                    faqs: pageData.faqs
                }}
            />

            {/* 14. Final Call to Action */}
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

export default ScenicSubmarineExperience;
