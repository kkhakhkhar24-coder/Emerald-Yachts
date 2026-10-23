import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON Exact original content preserved
import pageData from './data.json';

// Shared UI System Components (Strictly from @/components/ui)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Pictures for Expert Authority and Insider Tip
import ProfilePictureAH from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

// Authentic Media Assets strictly from ScenicLuxuryCruises via @/assets/ScenicCruise/Scenicluxuryyachtguide
import heroBgImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/hero-scenic-eclipse.webp';
import introImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/intro-scenic-eclipse.webp';
import discoveryYachtImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/discovery-yacht-helicopter.webp';
import meetYachtsImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-eclipse-i-and-ii-discovery-yachts.webp';
import suitePenthouseImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/suite-penthouse.webp';
import diningImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-eclipse-kokos-dining.webp';
import vitalityPoolImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-eclipse-vitality-pool-spa.webp';
import zodiacImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-discovery-zodiac.webp';
import kayakImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-discovery-kayak.webp';
import submarineImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-neptune-submarine-dive.webp';
import destAntarcticaImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-antarctica.webp';
import destArcticImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-arctic.webp';
import destMediterraneanImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-mediterranean.webp';
import destFjordsImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-norwegian-fjords.webp';
import destSouthPacificImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-south-pacific.webp';
import destAustraliaImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/dest-australia-kimberley.webp';
import ctaBgImg from '@/assets/ScenicCruise/Scenicluxuryyachtguide/scenic-eclipse-cta-sailaway.webp';

function ScenicLuxuryYachtGuide() {
    // 1. Data mapping for Why Choose Scenic (BrandPillarsShowcase)
    const whyChooseIcons = ["ship", "star", "window", "compass", "star", "ship", "window", "compass", "ship", "star", "compass"];
    const whyChooseData = {
        title: pageData.whyChoose.title,
        subtitle: `${pageData.whyChoose.subtitle} ${pageData.whyChoose.lead}`,
        pillars: pageData.whyChoose.pillars.map((pillar, idx) => ({
            title: pillar.title,
            description: pillar.description,
            icon: whyChooseIcons[idx % whyChooseIcons.length]
        }))
    };

    // 2. Data mapping for Wellness Facilities (FeatureGrid)
    const wellnessFeatures = pageData.wellness.facilities.map((fac) => ({
        title: fac,
        description: "Destination-inspired wellness facility offering restorative treatments and six-star relaxation aboard Scenic Eclipse."
    }));

    // 3. Data mapping for Expedition Experiences (ThreeColumnGrid)
    const expeditionImages = [zodiacImg, kayakImg, submarineImg];
    const expeditionItems = pageData.expedition.experiences.map((exp, idx) => ({
        title: exp.title,
        description: exp.description,
        features: [],
        category: exp.category,
        image: expeditionImages[idx],
        placeholderLabel: exp.title
    }));

    // 4. Data mapping for Popular Scenic Yacht Destinations (ThreeColumnGrid)
    const destImages = [
        destAntarcticaImg,
        destArcticImg,
        destMediterraneanImg,
        destFjordsImg,
        destSouthPacificImg,
        destAustraliaImg
    ];
    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.text,
        features: [],
        category: dest.category,
        image: destImages[idx],
        placeholderLabel: dest.name
    }));

    // 5. Data mapping for Who Should Cruise (TravelerTypeGrid)
    const whoShouldCruiseIcons = ["Compass", "Star", "Ship", "Heart", "UtensilsCrossed", "Users", "MapPin", "Gift"];
    const whoShouldCruiseItems = pageData.whoShouldCruise.items.map((item, idx) => ({
        title: item,
        description: "Ideal for travelers seeking an ultra-luxury discovery yacht experience with all-inclusive comfort and immersive exploration.",
        icon: whoShouldCruiseIcons[idx % whoShouldCruiseIcons.length]
    }));

    // 7. Structured Data Schema matching exact reference standard (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Scenicluxuryyachtguide/hero-scenic-eclipse.webp",
                    "caption": "Scenic Luxury Yacht Guide - Scenic Eclipse"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Scenicluxuryyachtguide/hero-scenic-eclipse.webp",
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
                "url": "https://www.tripsandships.com",
                "founder": {
                    "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
                }
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
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
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises, polar expeditions, and discovery yacht travel.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury Expedition Cruises",
                    "Scenic Luxury Cruises",
                    "Scenic Eclipse Discovery Yachts",
                    "Polar Discovery Yachting",
                    "Butler Services"
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
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Scenic Eclipse Reviews",
                        "item": "https://www.tripsandships.com/scenic-eclipse-reviews"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Scenic Luxury Yacht Guide",
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
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* SEO and Schema Tags */}
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION ─── */}
                <ComparisonHero
                    badge={pageData.hero.badge}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    description={pageData.hero.description}
                    showReadMore={false}
                    backgroundImage={heroBgImg}
                    bgPosition="bg-center"
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introImg}
                    secondaryImage={discoveryYachtImg}
                    paragraphs={[
                        pageData.intro.lead,
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: INSIDER TIP AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 my-8">
                    <AuthorityBox
                        title="Insider Tip"
                        content={pageData.authorityBox.quote}
                        author={`${pageData.authorityBox.author}, ${pageData.authorityBox.role}`}
                        authorImage={insiderTipImg}
                    />
                </div>

                {/* ─── SECTION 4: WHY CHOOSE SCENIC? ─── */}
                <BrandPillarsShowcase data={whyChooseData} />

                {/* ─── SECTION 5: MEET SCENIC DISCOVERY YACHTS SCENIC ECLIPSE & II ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={meetYachtsImg}
                    title={pageData.discoveryYacht.title}
                    subtitles={[
                        pageData.discoveryYacht.lead,
                        pageData.discoveryYacht.eclipse2Title
                    ]}
                    features={pageData.discoveryYacht.highlights}
                    summary={pageData.discoveryYacht.eclipse2Text}
                    ctaText="Request Itinerary Options"
                    ctaLink="#destinations"
                />

                {/* ─── SECTION 6: LUXURY SUITES ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={suitePenthouseImg}
                    title={pageData.suites.title}
                    subtitles={[pageData.suites.lead]}
                    features={pageData.suites.features}
                    summary={pageData.suites.note}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 7: DINING ONBOARD ─── */}
                <InclusionsList
                    title={pageData.dining.title}
                    inclusions={pageData.dining.venues}
                    expertNote={`${pageData.dining.lead} ${pageData.dining.footnote}`}
                    image={diningImg}
                />

                {/* ─── SECTION 8: WELLNESS & SPA ─── */}
                <FeatureGrid
                    title={pageData.wellness.title}
                    subtitle={`${pageData.wellness.intro} ${pageData.wellness.footnote}`}
                    features={wellnessFeatures}
                    bgClass="bg-ice-50"
                />

                {/* ─── SECTION 9: EXPEDITION EXPERIENCES ─── */}
                <ThreeColumnGrid
                    title={pageData.expedition.title}
                    subtitle={pageData.expedition.intro}
                    items={expeditionItems}
                />

                {/* ─── SECTION 10: POPULAR SCENIC YACHT DESTINATIONS ─── */}
                <div id="destinations">
                    <ThreeColumnGrid
                        title={pageData.destinations.title}
                        subtitle={pageData.destinations.subtitle}
                        items={destinationItems}
                    />
                </div>

                {/* ─── SECTION 11: WHAT'S INCLUDED? ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.items}
                    expertNote={`${pageData.inclusions.lead} ${pageData.inclusions.footnote}`}
                    image={vitalityPoolImg}
                />

                {/* ─── SECTION 12: WHO SHOULD CRUISE WITH SCENIC? ─── */}
                <TravelerTypeGrid
                    title={pageData.whoShouldCruise.title}
                    subtitle={pageData.whoShouldCruise.subtitle}
                    items={whoShouldCruiseItems}
                />

                {/* ─── SECTION 13: WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL? ─── */}
                <ExpertAuthorityChecklist
                    title={pageData.whyBookWithUs.title}
                    subtitle={`${pageData.whyBookWithUs.lead} ${pageData.whyBookWithUs.footnote}`}
                    points={pageData.whyBookWithUs.reasons}
                />

                {/* ─── SECTION 14: RELATED SCENIC GUIDES ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.relatedGuides.title,
                            paragraphs: [
                                pageData.relatedGuides.subtitle,
                                `Key Highlights: ${pageData.relatedGuides.guides.join(', ')}`
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 15: EXPERT INSIGHT FROM ANGELA HUGHES ─── */}
                <ExpertCredentials
                    name={pageData.expertInsight.name}
                    title={pageData.expertInsight.title}
                    badge={pageData.expertInsight.badge}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.quote}
                    quoteSubtitle={pageData.expertInsight.heading}
                    bio={pageData.expertInsight.bio}
                    credentials={[
                        "40+ Years Experience",
                        "121+ Countries Visited",
                        ...pageData.expertInsight.priorities.slice(0, 4)
                    ]}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Top 10 Must-Visit Sailing Destinations Worldwide",
                        subtitle: "Sailing offers a unique way to explore the world. It combines adventure with relaxation, allowing you to discover hidden gems. From the vibrant culture of the Mediterranean to the tranquil beauty of the Seychelles, the options are endless.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CALL TO ACTION ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    primaryCtaText={pageData.cta.primaryCtaText}
                    primaryCtaLink={pageData.cta.primaryCtaLink}
                    secondaryCtaText={pageData.cta.secondaryCtaText}
                    secondaryCtaLink={pageData.cta.secondaryCtaLink}
                    backgroundImage={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default ScenicLuxuryYachtGuide;