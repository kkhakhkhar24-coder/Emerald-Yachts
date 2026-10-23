import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON — Exact original content preserved
import pageData from './data.json';
import './Sceniceclipseiireviews.css';

// Shared UI System Components (Strictly from @/components/ui, zero modifications to existing components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureSplit from '@/components/ui/FeatureSplit';
import DiningVenuesMasonry from '@/components/ui/DiningVenuesMasonry';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FeatureGrid from '@/components/ui/FeatureGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Expert Profile Picture
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Authentic Media Assets strictly from ScenicLuxuryCruises via @/assets/ScenicCruise/Sceniceclipseiireviews
import heroBgImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/hero-scenic-eclipse-ii.webp';
import introImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/intro-scenic-eclipse-ii.webp';
import suitesImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/suites-deluxe-verandah.webp';
import diningImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dining-elements-eclipse-ii.webp';
import serviceImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/service-crew-heli-deck.webp';
import techHeliImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/tech-helicopter-heli-deck.webp';
import wellnessImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/wellness-senses-spa.webp';
import inclusionsImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/inclusions-vitality-pool.webp';
import ctaBgImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/cta-penthouse-deck.webp';

// 8 Distinct Expedition Activity Images (100% Unique per card)
import expZodiacImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-zodiac.webp';
import expWildlifeImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-wildlife.webp';
import expHikesImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-hikes.webp';
import expKayakImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-kayak.webp';
import expSnorkelingImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-snorkeling.webp';
import expPaddleboardImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-paddleboard.webp';
import expPhotographyImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-photography.webp';
import expCulturalImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/exp-cultural.webp';

// Destination Images (100% unique from previous pages)
import destAntarcticaImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-antarctica.webp';
import destArcticImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-arctic.webp';
import destGreenlandImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-greenland.webp';
import destMediterraneanImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-mediterranean.webp';
import destSouthPacificImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-south-pacific.webp';
import destAustraliaImg from '@/assets/ScenicCruise/Sceniceclipseiireviews/dest-australia-nz.webp';

function ScenicEclipseIIReviews() {
    // 1. Data mapping for First Impressions (BrandPillarsShowcase)
    const firstImpressionsData = {
        title: pageData.firstImpressions.title,
        subtitle: pageData.firstImpressions.subtitle,
        pillars: pageData.firstImpressions.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: item.icon
        }))
    };

    // 2. Data mapping for Dining Venues (DiningVenuesMasonry)
    const diningImages = [
        diningImg,
        introImg,
        inclusionsImg,
        techHeliImg,
        suitesImg,
        wellnessImg,
        diningImg,
        introImg
    ];
    const diningItems = pageData.dining.venues.map((venue, idx) => ({
        title: venue.title,
        category: venue.category,
        description: venue.description,
        image: diningImages[idx % diningImages.length]
    }));

    // 3. Data mapping for Expedition Experiences (ThreeColumnGrid with 8 UNIQUE images)
    const expeditionImages = [
        expZodiacImg,
        expWildlifeImg,
        expHikesImg,
        expKayakImg,
        expSnorkelingImg,
        expPaddleboardImg,
        expPhotographyImg,
        expCulturalImg
    ];
    const expeditionActivities = pageData.expedition.activities.map((act, idx) => ({
        title: act.title,
        description: act.description,
        features: [],
        category: act.category,
        image: expeditionImages[idx % expeditionImages.length],
        placeholderLabel: act.title
    }));

    // 4. Data mapping for Helicopters & Submersible
    const techFeatures = pageData.techHighlights.items.map(item => ({
        title: item.title,
        description: item.description
    }));

    // 5. Data mapping for Wellness Facilities (FeatureGrid)
    const wellnessFeatures = pageData.wellness.facilities.map(fac => ({
        title: fac,
        description: "Destination-inspired wellness facility offering restorative treatments and six-star relaxation aboard Scenic Eclipse II."
    }));

    // 6. Data mapping for Destinations (ThreeColumnGrid with 6 unique images)
    const destImages = [
        destAntarcticaImg,
        destArcticImg,
        destGreenlandImg,
        destMediterraneanImg,
        destSouthPacificImg,
        destAustraliaImg
    ];
    const destinationItems = pageData.destinations.items.map((dest, idx) => ({
        title: dest.name,
        description: dest.desc,
        features: [],
        category: dest.category,
        image: destImages[idx],
        placeholderLabel: dest.name
    }));

    // 7. Structured Data Schema strictly aligned to reference standard (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/ScenicCruise/Sceniceclipseiireviews/hero-scenic-eclipse-ii.webp",
                    "caption": "Scenic Eclipse II Reviews - Discovery Yacht"
                },
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Sceniceclipseiireviews/hero-scenic-eclipse-ii.webp",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@id": `${pageData.seo.canonicalUrl}#article`
                }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/logo.png"
                }
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in ultra-luxury cruises, expedition discovery yachts, and personalized itineraries."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO & Luxury Cruise Specialist",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "description": "Luxury travel advisor with 40+ years experience, founder of Luxury Travel University, and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": `${pageData.seo.canonicalUrl}#article`,
                "headline": pageData.seo.title,
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
                "image": "https://www.tripsandships.com/assets/ScenicCruise/Sceniceclipseiireviews/hero-scenic-eclipse-ii.webp",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": pageData.seo.canonicalUrl
                }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert Scenic Eclipse II cruise planning and comparison services helping travelers choose the ideal Discovery Yacht, itinerary, suite, and destination."
            },
            {
                "@type": "BreadcrumbList",
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
                        "name": "Scenic Cruises",
                        "item": "https://www.tripsandships.com/scenic-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Scenic Eclipse II Reviews",
                        "item": pageData.seo.canonicalUrl
                    }
                ]
            },
            {
                "@type": "FAQPage",
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
        <>
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">
                {/* ─── SECTION 1: HERO (ComparisonHero with exact props) ─── */}
                <ComparisonHero
                    title={pageData.hero.title}
                    badge={pageData.hero.tag}
                    subtitle={pageData.hero.subtitle}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: INTRO (EditorialIntroSplit with primaryImage) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.title}
                    paragraphs={pageData.intro.paragraphs}
                    quote={pageData.intro.quote}
                    primaryImage={introImg}
                    badge={pageData.intro.badge}
                />

                {/* ─── SECTION 3: FIRST IMPRESSIONS (BrandPillarsShowcase) ─── */}
                <BrandPillarsShowcase
                    title={firstImpressionsData.title}
                    subtitle={firstImpressionsData.subtitle}
                    pillars={firstImpressionsData.pillars}
                />

                {/* ─── SECTION 4: SUITES & ACCOMMODATIONS (FeatureSplit) ─── */}
                <FeatureSplit
                    title={pageData.suites.title}
                    subtitle={pageData.suites.subtitle}
                    description={pageData.suites.footnote}
                    features={pageData.suites.features}
                    image={suitesImg}
                    reverse={false}
                />

                {/* ─── SECTION 5: DINING EXPERIENCE (DiningVenuesMasonry) ─── */}
                <DiningVenuesMasonry
                    title={pageData.dining.title}
                    subtitle={pageData.dining.subtitle}
                    description={`${pageData.dining.praiseIntro} ${pageData.dining.praise.join(', ')}.`}
                    venues={diningItems}
                />

                {/* ─── SECTION 6: SERVICE (FeatureSplit - Reversed) ─── */}
                <FeatureSplit
                    title={pageData.service.title}
                    subtitle={pageData.service.subtitle}
                    description={pageData.service.lead}
                    features={pageData.service.highlights.map(h => h.text)}
                    image={serviceImg}
                    reverse={true}
                />

                {/* ─── SECTION 7: EXPEDITION EXPERIENCE (ThreeColumnGrid with 8 UNIQUE Images) ─── */}
                <ThreeColumnGrid
                    title={pageData.expedition.title}
                    subtitle={pageData.expedition.subtitle}
                    footnote={pageData.expedition.footnote}
                    items={expeditionActivities}
                />

                {/* ─── SECTION 8: HELICOPTERS & SUBMERSIBLE (FeatureGrid) ─── */}
                <FeatureGrid
                    title={pageData.techHighlights.title}
                    subtitle={pageData.techHighlights.subtitle}
                    footnote={pageData.techHighlights.footnote}
                    items={techFeatures}
                />

                {/* ─── SECTION 9: WELLNESS & SPA (FeatureGrid) ─── */}
                <FeatureGrid
                    title={pageData.wellness.title}
                    subtitle={pageData.wellness.subtitle}
                    footnote={pageData.wellness.footnote}
                    items={wellnessFeatures}
                />

                {/* ─── SECTION 10: DESTINATIONS (ThreeColumnGrid with 6 Unique Images) ─── */}
                <div id="destinations">
                    <ThreeColumnGrid
                        title={pageData.destinations.title}
                        subtitle={pageData.destinations.subtitle}
                        footnote={pageData.destinations.lead}
                        items={destinationItems}
                    />
                </div>

                {/* ─── SECTION 11: WHAT'S INCLUDED (InclusionsList) ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    lead={pageData.inclusions.lead}
                    subtitle={pageData.inclusions.subtitle}
                    items={pageData.inclusions.items}
                    footnote={pageData.inclusions.footnote}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 12: PROS & CONS (ProsConsCards) ─── */}
                <ProsConsCards
                    title={pageData.prosCons.title}
                    prosTitle={pageData.prosCons.prosTitle}
                    consTitle={pageData.prosCons.consTitle}
                    bestFor={pageData.prosCons.pros}
                    notBestFor={pageData.prosCons.cons}
                    bottomNote={pageData.prosCons.bottomNote}
                />

                {/* ─── SECTION 13: OUR VERDICT & PROMINENT RATING ─── */}
                <div className="bg-navy-950 text-white relative">
                    <ConclusionSection
                        sections={[
                            {
                                heading: pageData.verdict.title,
                                paragraphs: [
                                    pageData.verdict.lead.replace(/^Our Verdict:\s*/i, ''),
                                    ...pageData.verdict.paragraphs
                                ]
                            }
                        ]}
                    />
                    {/* Dedicated 5-Star Rating Card */}
                    <div className="max-w-4xl mx-auto px-6 pb-20 -mt-10 text-center relative z-20">
                        <div className="inline-flex flex-col items-center justify-center bg-navy-900/80 backdrop-blur-md px-10 py-7 rounded-2xl border border-navy-800 shadow-2xl">
                            <div className="flex items-center justify-center gap-2 text-amber-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="font-sans text-xl text-ice-50 font-medium tracking-wide">
                                Rating: <span className="font-display text-3xl font-bold text-amber-300 ml-2">{pageData.verdict.rating}</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-slate-400 mt-2">
                                Overall Editorial Score • Six-Star Expedition Benchmark
                            </span>
                        </div>
                    </div>
                </div>

                {/* ─── SECTION 14: WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL? ─── */}
                <ExpertAuthorityChecklist
                    title={pageData.whyBookWithUs.title}
                    subtitle={`${pageData.whyBookWithUs.lead} ${pageData.whyBookWithUs.footnote}`}
                    points={pageData.whyBookWithUs.reasons}
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
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Scenic Eclipse II before planning your voyage.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CALL TO ACTION (CenterCTA) ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    primaryText={pageData.cta.primaryCtaText}
                    primaryLink={pageData.cta.primaryCtaLink}
                    secondaryText={pageData.cta.secondaryCtaText}
                    secondaryLink={pageData.cta.secondaryCtaLink}
                    backgroundImage={ctaBgImg}
                />
            </div>
        </>
    );
}

export default ScenicEclipseIIReviews;