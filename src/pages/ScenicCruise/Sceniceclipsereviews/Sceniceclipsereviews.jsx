import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — Exact original content preserved
import pageData from './data.json';
import './Sceniceclipsereviews.css';

// Shared UI System Components (Strictly from @/components/ui)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import DiningVenuesMasonry from '@/components/ui/DiningVenuesMasonry';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FeatureGrid from '@/components/ui/FeatureGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Pictures for Expert Authority and Insider Tip
import ProfilePictureAH from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

// Authentic Media Assets strictly from ScenicLuxuryCruises via @/assets/ScenicCruise/Sceniceclipsereviews
import heroBgImg from '@/assets/ScenicCruise/Sceniceclipsereviews/hero-scenic-eclipse-antarctica.webp';
import discoveryYachtsImg from '@/assets/ScenicCruise/Sceniceclipsereviews/scenic-eclipse-discovery-yachts.webp';
import helicopterImg from '@/assets/ScenicCruise/Sceniceclipsereviews/scenic-eclipse-helicopter.webp';
import observationLoungeImg from '@/assets/ScenicCruise/Sceniceclipsereviews/scenic-eclipse-observation-lounge.webp';
import verandahSuiteImg from '@/assets/ScenicCruise/Sceniceclipsereviews/scenic-eclipse-verandah-suite.webp';

// Dining Venues Images
import diningLumiereImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-lumiere.webp';
import diningElementsImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-elements.webp';
import diningKokosImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-kokos.webp';
import diningNightMarketImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-night-market.webp';
import diningYachtClubImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-yacht-club.webp';
import diningAzureImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dining-azure.webp';

// Expedition & Inclusions Images
import expeditionZodiacImg from '@/assets/ScenicCruise/Sceniceclipsereviews/expedition-zodiac.webp';
import expeditionKayakImg from '@/assets/ScenicCruise/Sceniceclipsereviews/expedition-kayak.webp';
import expeditionSubmarineImg from '@/assets/ScenicCruise/Sceniceclipsereviews/expedition-submarine.webp';
import inclusionsVitalityPoolImg from '@/assets/ScenicCruise/Sceniceclipsereviews/inclusions-vitality-pool.webp';

// Destination Images
import destAntarcticaImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-antarctica.webp';
import destArcticImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-arctic.webp';
import destGreenlandImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-greenland.webp';
import destMediterraneanImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-mediterranean.webp';
import destFjordsImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-norwegian-fjords.webp';
import destSouthPacificImg from '@/assets/ScenicCruise/Sceniceclipsereviews/dest-south-pacific.webp';

// Final CTA Background
import ctaBgImg from '@/assets/ScenicCruise/Sceniceclipsereviews/cta-sailaway-lisbon.webp';

function ScenicEclipseReviews() {
    // 1. Data mapping for Dining Venues (DiningVenuesMasonry)
    const diningImages = [
        diningLumiereImg,
        diningElementsImg,
        diningKokosImg,
        diningNightMarketImg,
        diningYachtClubImg,
        diningAzureImg,
        diningElementsImg,
        diningKokosImg
    ];
    const diningItems = pageData.dining.venues.map((venue, idx) => ({
        title: venue.title,
        category: venue.category,
        description: venue.description,
        image: diningImages[idx % diningImages.length]
    }));

    // 2. Data mapping for Service (BrandPillarsShowcase)
    const serviceData = {
        title: pageData.service.title,
        subtitle: `${pageData.service.lead} ${pageData.service.footnote}`,
        pillars: pageData.service.highlights.map(item => ({
            title: item.title,
            description: item.description,
            icon: item.icon
        }))
    };

    // 3. Data mapping for Expedition Experiences (ThreeColumnGrid)
    const expeditionImages = [expeditionZodiacImg, expeditionKayakImg, expeditionSubmarineImg];
    const expeditionItems = pageData.expedition.experiences.map((exp, idx) => ({
        title: exp.title,
        description: exp.description,
        features: [],
        category: exp.category,
        image: expeditionImages[idx],
        placeholderLabel: exp.title
    }));

    // 4. Data mapping for Wellness Facilities (FeatureGrid)
    const wellnessFeatures = pageData.wellness.facilities.map(fac => ({
        title: fac,
        description: "Six-star relaxation and restorative sanctuary aboard Scenic Eclipse."
    }));

    // 5. Data mapping for Destinations (ThreeColumnGrid)
    const destImages = [
        destAntarcticaImg,
        destArcticImg,
        destGreenlandImg,
        destMediterraneanImg,
        destFjordsImg,
        destSouthPacificImg
    ];
    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.desc,
        features: [],
        category: dest.category,
        image: destImages[idx],
        placeholderLabel: dest.name
    }));

    // 6. Data mapping for Who Should Choose (TravelerTypeGrid)
    const audienceIcons = ["Compass", "Heart", "Mountain", "Ship", "UtensilsCrossed", "Star", "Anchor", "Gift"];
    const audienceItems = pageData.audience.items.map((item, idx) => ({
        title: item,
        description: "Perfect for travelers seeking six-star ultra-luxury combined with authentic expedition adventures, personalized service, and all-inclusive value.",
        icon: audienceIcons[idx % audienceIcons.length]
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Sceniceclipsereviews/hero-scenic-eclipse-antarctica.webp",
                    "caption": "Scenic Eclipse Reviews - Honest Luxury Expedition Cruise Review"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Sceniceclipsereviews/hero-scenic-eclipse-antarctica.webp",
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
                        "name": "Scenic Luxury Yacht Guide",
                        "item": "https://www.tripsandships.com/scenic-luxury-yacht-guide"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Scenic Eclipse Reviews",
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
        <div className="fcel-page-wrapper">
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
                    primaryImage={discoveryYachtsImg}
                    secondaryImage={helicopterImg}
                    paragraphs={[
                        pageData.intro.lead,
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: AUTHORITY QUOTE BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 my-8">
                    <AuthorityBox
                        title={pageData.intro.badge}
                        content={pageData.intro.quote}
                        author="Angela Hughes, CEO & Luxury Expedition Specialist"
                        authorImage={insiderTipImg}
                    />
                </div>

                {/* ─── SECTION 4: FIRST IMPRESSIONS ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={observationLoungeImg}
                    title={pageData.firstImpressions.title}
                    subtitles={[
                        pageData.firstImpressions.lead,
                        pageData.firstImpressions.paragraph
                    ]}
                    features={pageData.firstImpressions.items}
                    summary="Guests consistently rate Scenic Eclipse's first impressions 5/5 for spaciousness, relaxed yacht intimacy, and contemporary luxury design."
                    ctaText="Request Itinerary Options"
                    ctaLink="#destinations"
                />

                {/* ─── SECTION 5: SUITES & ACCOMMODATIONS ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={verandahSuiteImg}
                    title={pageData.suites.title}
                    subtitles={[pageData.suites.lead]}
                    features={pageData.suites.features}
                    summary={pageData.suites.conclusion}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 6: DINING EXPERIENCE ─── */}
                <DiningVenuesMasonry
                    title={pageData.dining.eyebrow}
                    subtitle={`${pageData.dining.heading} ${pageData.dining.lead} ${pageData.dining.conclusion}`}
                    items={diningItems}
                />

                {/* ─── SECTION 7: SERVICE ─── */}
                <BrandPillarsShowcase data={serviceData} />

                {/* ─── SECTION 8: EXPEDITION EXPERIENCES ─── */}
                <ThreeColumnGrid
                    title={pageData.expedition.title}
                    subtitle={`${pageData.expedition.lead} ${pageData.expedition.prompt}`}
                    items={expeditionItems}
                />

                {/* ─── SECTION 9: WELLNESS & SPA ─── */}
                <FeatureGrid
                    title={pageData.wellness.eyebrow}
                    subtitle={`${pageData.wellness.heading} ${pageData.wellness.note}`}
                    features={wellnessFeatures}
                    bgClass="bg-ice-50"
                />

                {/* ─── SECTION 10: DESTINATIONS ─── */}
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
                    expertNote={`${pageData.inclusions.lead} ${pageData.inclusions.note}`}
                    image={inclusionsVitalityPoolImg}
                />

                {/* ─── SECTION 12: WHO SHOULD CHOOSE SCENIC ECLIPSE? ─── */}
                <TravelerTypeGrid
                    title={pageData.audience.title}
                    subtitle={`${pageData.audience.lead} ${pageData.audience.subtitle}`}
                    items={audienceItems}
                />

                {/* ─── SECTION 13: PROS & CONS ─── */}
                <ProsConsCards
                    title={pageData.prosCons.title}
                    prosTitle={pageData.prosCons.prosTitle}
                    consTitle={pageData.prosCons.consTitle}
                    bestFor={pageData.prosCons.pros}
                    notBestFor={pageData.prosCons.cons}
                    bottomNote={pageData.prosCons.bottomNote}
                />

                {/* ─── SECTION 14: OUR VERDICT ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.verdict.title,
                            paragraphs: [
                                pageData.verdict.lead,
                                ...pageData.verdict.paragraphs,
                                `Rating: ${pageData.verdict.rating.replace('Overall Rating: ', '')}`
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 15: WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL? ─── */}
                <ExpertAuthorityChecklist
                    title={pageData.whyBookWithUs.title}
                    subtitle={`${pageData.whyBookWithUs.lead} ${pageData.whyBookWithUs.footnote}`}
                    points={pageData.whyBookWithUs.reasons}
                />

                {/* ─── SECTION 16: EXPERT INSIGHT FROM ANGELA HUGHES ─── */}
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

                {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: FINAL CALL TO ACTION ─── */}
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

export default ScenicEclipseReviews;