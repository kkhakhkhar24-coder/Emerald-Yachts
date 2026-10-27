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
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// 100% Authentic Luxury Expedition Media Assets
import heroBgImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/hero-luxury-expedition.webp';
import introGuideImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/intro-expedition-guide.webp';
import luxuryComfortsImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/luxury-comforts.webp';

// Destinations (12 Unique Destinations)
import destAntarcticaImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-antarctica.webp';
import destSvalbardImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-arctic-svalbard.webp';
import destGreenlandImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-greenland.webp';
import destIcelandImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-iceland.webp';
import destGalapagosImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-galapagos.webp';
import destAlaskaImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-alaska.webp';
import destNorwegianFjordsImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-norwegian-fjords.webp';
import destKimberleyImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-kimberley.webp';
import destSouthPacificImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-south-pacific.webp';
import destPatagoniaImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-patagonia.webp';
import destAmazonImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-amazon-river.webp';
import destCanadaArcticImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/dest-canadas-arctic.webp';

// Cruise Lines (6 Unique Ships)
import scenicLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-scenic-cruises.webp';
import silverseaLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-silversea-expeditions.webp';
import seabournLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-seabourn-expeditions.webp';
import ponantLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-ponant-explorations.webp';
import lindbladLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-lindblad-expeditions.webp';
import hxLineImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/line-hx-expeditions.webp';

// Key Sections
import featuredShipImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/featured-scenic-eclipse.webp';
import wildlifeImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/wildlife-encounters.webp';
import onboardSuitesImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/luxury-onboard-suites.webp';
import ctaBgImg from '@/assets/ScenicCruise/BestLuxuryExpeditionCruises/cta-expedition-journey.webp';

function BestLuxuryExpeditionCruises() {
    // Cruise Line image map
    const cruiseLineImageMap = {
        scenic: scenicLineImg,
        silversea: silverseaLineImg,
        seabourn: seabournLineImg,
        ponant: ponantLineImg,
        lindblad: lindbladLineImg,
        hx: hxLineImg
    };

    // Destination image map
    const destinationImageMap = {
        antarctica: destAntarcticaImg,
        svalbard: destSvalbardImg,
        greenland: destGreenlandImg,
        iceland: destIcelandImg,
        galapagos: destGalapagosImg,
        alaska: destAlaskaImg,
        norwegianFjords: destNorwegianFjordsImg,
        kimberley: destKimberleyImg,
        southPacific: destSouthPacificImg,
        patagonia: destPatagoniaImg,
        amazon: destAmazonImg,
        canadaArctic: destCanadaArcticImg
    };

    // Smooth scroll for in-page anchor links (e.g., #destinations, #cruise-lines)
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/BestLuxuryExpeditionCruises/hero-luxury-expedition.webp",
                    "caption": "Best Luxury Expedition Cruises Around the World"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/BestLuxuryExpeditionCruises/hero-luxury-expedition.webp",
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
                "description": "Premier luxury travel agency specializing in ultra-luxury expedition cruising, polar voyages, and bespoke expedition itineraries.",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises, yacht cruising, and custom expedition planning.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Best Luxury Expedition Cruises",
                    "Polar Expeditions",
                    "Antarctica Cruises",
                    "Arctic & Svalbard Voyages",
                    "Galápagos Expeditions",
                    "Scenic Eclipse Yachts",
                    "Silversea & Seabourn Expeditions",
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
                        "name": "Best Luxury Expedition Cruises",
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
        title: item.split('—')[0].split(' and ')[0],
        description: item
    }));

    return (
        <div className="blec-page-wrapper">
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
                primaryImage={introGuideImg}
            />

            {/* 3. What Is a Luxury Expedition Cruise */}
            <FeatureSplit
                title={pageData.different.title}
                subtitles={[pageData.different.subtitle]}
                summary={pageData.different.footnote}
                features={pageData.different.features}
                image={luxuryComfortsImg}
                imagePosition="left"
                theme="white"
            />

            {/* 4. Best Luxury Expedition Cruise Destinations (12 Destinations) */}
            <div id="destinations">
                <CountriesGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.subtitle}
                    items={pageData.destinations.items.map((dest) => ({
                        title: dest.name,
                        description: dest.desc,
                        image: destinationImageMap[dest.imageKey] || destAntarcticaImg
                    }))}
                />
            </div>

            {/* 5. Top Luxury Expedition Cruise Lines */}
            <div id="cruise-lines">
                <CountriesGrid
                    title={pageData.cruiseLines.title}
                    subtitle={pageData.cruiseLines.subtitle}
                    items={pageData.cruiseLines.items.map((line) => ({
                        title: line.name,
                        description: line.desc,
                        image: cruiseLineImageMap[line.imageKey] || scenicLineImg
                    }))}
                />
            </div>

            {/* 6. Featured Ship: Scenic Eclipse */}
            <FeatureSplit
                title={pageData.featuredShip.title}
                subtitles={[pageData.featuredShip.subtitle]}
                summary={pageData.featuredShip.footnote}
                features={pageData.featuredShip.features}
                image={featuredShipImg}
                imagePosition="right"
                theme="light"
            />

            {/* 7. Wildlife Encounters in the Wild */}
            <FeatureSplit
                title={pageData.wildlife.title}
                subtitles={[pageData.wildlife.subtitle]}
                summary={pageData.wildlife.footnote}
                features={pageData.wildlife.features}
                image={wildlifeImg}
                imagePosition="left"
                theme="white"
            />

            {/* 8. Expedition Adventure Activities */}
            <FeatureGrid
                title={pageData.activities.title}
                subtitle={pageData.activities.subtitle}
                features={pageData.activities.features}
            />

            {/* 9. Luxury Onboard Experience */}
            <FeatureSplit
                title={pageData.onboard.title}
                subtitles={[pageData.onboard.subtitle]}
                summary={pageData.onboard.footnote}
                features={pageData.onboard.features}
                image={onboardSuitesImg}
                imagePosition="right"
                theme="light"
            />

            {/* 10. Best Time for a Luxury Expedition Cruise */}
            <TravelerTypeGrid
                title={pageData.seasons.title}
                subtitle={pageData.seasons.subtitle}
                items={pageData.seasons.items}
            />

            {/* 11. How to Choose the Best Luxury Expedition Cruise */}
            <FeatureGrid
                title={pageData.howToChoose.title}
                subtitle={pageData.howToChoose.subtitle}
                features={pageData.howToChoose.features}
            />

            {/* 12. Expert Review: Are Luxury Expedition Cruises Worth It? */}
            <CostValueAnalysisCards
                title={pageData.expertReview.title}
                subtitle={pageData.expertReview.subtitle}
                includedTitle="What We Love About Luxury Expedition Cruising"
                extrasTitle="Important Areas to Consider"
                included={whatWeLoveMapped}
                extras={areasToConsiderMapped}
            />

            {/* 13. Why Book with Trips & Ships Luxury Travel */}
            <ExpertAuthorityChecklist
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                points={pageData.whyBook.points}
            />

            {/* 14. Expert Insight & Credentials Angela Hughes */}
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
                ctaText="Speak with an Expedition Cruise Specialist"
                ctaLink="https://www.tripsandships.com/contact"
            />

            {/* 15. Frequently Asked Questions */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Clear answers to essential questions about luxury expedition cruises.",
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

export default BestLuxuryExpeditionCruises;
