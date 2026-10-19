import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../../components/Navbar/Navbar'

// Page Data JSON (100% exact text preserved)
import pageData from './data.json'

// Shared UI System Components (100% component-based from @ui)
import ComparisonHero from '../../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../../components/ui/EditorialIntroSplit'
import FeatureSplit from '../../../components/ui/FeatureSplit'
import AlternatingRiverShowcase from '../../../components/ui/AlternatingRiverShowcase'
import LuxuryCruiseComparisonTable from '../../../components/ui/LuxuryCruiseComparisonTable'
import CardGrid from '../../../components/ui/CardGrid'
import StepByStepGuide from '../../../components/ui/StepByStepGuide'
import AuthorityBox from '../../../components/ui/AuthorityBox'
import ProsConsCards from '../../../components/ui/ProsConsCards'
import ConclusionSection from '../../../components/ui/ConclusionSection'
import ExpertCredentials from '../../../components/ui/ExpertCredentials'
import FAQAccordion from '../../../components/ui/FAQAccordion'
import CenterCTA from '../../../components/ui/CenterCTA'

// Media Assets - Profile
import ProfilePictureAH from '../../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Media Assets - UniworldBestItineraries
import heroBgImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp'
import introPrimaryImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-elisabeth-scenic-rhine-river-cruise.webp'
import introSecondaryImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-emilie-sundeck-open-air-observation-deck.webp'
import ctaBgImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp'

// Authentic River Images mapped 100% according to regions
import danubeImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-budapest-danube-river-scenic-panorama-hungary.jpg'
import rhineImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-river-queen-sailing-past-rhine-gorge-castles.webp'
import seineImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-joie-de-vivre-exterior-seine-river-france.webp'
import douroImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-sao-gabriel-sundeck-douro-valley-vineyard-views.webp'
import rhoneImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-lyon-saone-rhone-river-cityscape-france.jpg'
import veniceImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ss-la-venezia-sundeck-panoramic-venice-view.webp'
import nileImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-river-tosca-nile-cruise-sundeck-observation-terrace.webp'
import gangesImg from '../../../assets/UniworldCruise/UniworldBestItineraries/uniworld-ganges-voyager-ii-exterior-night-india-river-cruise.webp'

function UniworldRiverCruiseItineraries() {
    // 6-Entity Structured Data Schema matching RitzCarltonYachtCollectionCost benchmark
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
                    "url": "https://www.tripsandships.com/assets/UniworldBestItineraries/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp",
                    "caption": "Best Uniworld River Cruise Itineraries"
                },
                "image": "https://www.tripsandships.com/assets/UniworldBestItineraries/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp",
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
                    "caption": "Angela Hughes - Luxury River Cruise Specialist"
                },
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "Uniworld Boutique River Cruises",
                    "European River Cruise Itineraries",
                    "Danube River Cruises",
                    "Rhine River Cruises",
                    "Douro Wine Cruises",
                    "Nile River Cruises"
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
                        "name": "Uniworld River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Best Itineraries",
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
    }

    // Map the 8 Uniworld regions with their authentic image assets
    const regionImages = {
        danube: danubeImg,
        rhine: rhineImg,
        seine: seineImg,
        douro: douroImg,
        rhone: rhoneImg,
        venice: veniceImg,
        nile: nileImg,
        ganges: gangesImg
    }

    // Prepare rivers array for AlternatingRiverShowcase
    const riversData = pageData.regionsOverview.regions.map(r => ({
        name: r.name,
        description: r.intro + (r.note ? ` ${r.note}` : ''),
        bestFor: r.bestFor.length > 0
            ? r.bestFor.join(', ')
            : (r.showcase ? r.showcase.join(', ') : 'Travelers seeking regional discovery and cultural immersion'),
        highlights: r.highlights,
        image: regionImages[r.id] || danubeImg
    }))

    // Transform planning guide steps for StepByStepGuide
    const planningGuideSteps = pageData.cruisePlanning.tips.items.map((tipText, idx) => ({
        title: `Recommendation 0${idx + 1}`,
        description: tipText
    }))

    // Transform cruise length options for CardGrid
    const cruiseLengthCards = pageData.cruisePlanning.length.items.map((len, idx) => ({
        title: len,
        description: idx === 0 || idx === 1
            ? "Ideal for first-time river cruisers seeking a comprehensive yet manageable journey through Europe's cultural heart."
            : idx === 2 || idx === 3
            ? "Perfect for in-depth explorations covering multiple countries, scenic rivers, and regional highlights."
            : "Combines scenic river cruising with immersive hotel stays, private tours, and extended destination discoveries."
    }))

    // Key Takeaways formatted for ConclusionSection
    const takeawaysSections = [
        {
            heading: pageData.keyTakeaways.title,
            paragraphs: pageData.keyTakeaways.items
        }
    ]

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageData.seo.metaTitle} />
                <meta property="og:description" content={pageData.seo.metaDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldBestItineraries/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.metaTitle} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldBestItineraries/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* 1. HERO SECTION */}
            <ComparisonHero
                badge={pageData.hero.badge}
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                primaryCtaText={pageData.hero.primaryCtaText}
                primaryCtaLink={pageData.hero.primaryCtaLink}
                secondaryCtaText={pageData.hero.secondaryCtaText}
                secondaryCtaLink={pageData.hero.secondaryCtaLink}
                backgroundImage={heroBgImg}
            />

            {/* 2. EDITORIAL INTRO: CHOOSING YOUR PERFECT UNIWORLD JOURNEY */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={pageData.intro.paragraphs}
                primaryImage={introPrimaryImg}
                secondaryImage={introSecondaryImg}
            />

            {/* 3. GETTING STARTED: HOW TO CHOOSE THE RIGHT ITINERARY */}
            <FeatureSplit
                title={pageData.howToChoose.heading}
                subtitles={[pageData.howToChoose.eyebrow, pageData.howToChoose.lead]}
                features={pageData.howToChoose.factors.map(f => f.text)}
                summary={pageData.howToChoose.callout}
                imagePosition="left"
                theme="light"
            />

            {/* 4. DESTINATION OVERVIEW: EXPLORE UNIWORLD RIVER CRUISE REGIONS */}
            <div id="regions">
                <AlternatingRiverShowcase
                    title={pageData.regionsOverview.heading}
                    description="From iconic capital cities along the Danube and romantic castles on the Rhine to world-renowned vineyards along the Douro and ancient wonders along the Nile, explore Uniworld's destination regions."
                    rivers={riversData}
                />
            </div>

            {/* 5. QUICK COMPARISON: WHICH ITINERARY IS BEST? */}
            <LuxuryCruiseComparisonTable
                title={pageData.comparisonTable.title}
                headers={pageData.comparisonTable.headers}
                rows={pageData.comparisonTable.rows}
            />

            {/* 6. SEASONAL PLANNING: BEST TIME TO SAIL EACH REGION */}
            <LuxuryCruiseComparisonTable
                title={pageData.seasonTable.title}
                headers={pageData.seasonTable.headers}
                rows={pageData.seasonTable.rows}
            />

            {/* Seasonal footer callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Seasonal Timing Note"
                    content={pageData.seasonTable.footer}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 7. TRIP PLANNING: CRUISE LENGTH OPTIONS */}
            <CardGrid
                title={pageData.cruisePlanning.length.title}
                subtitle={pageData.cruisePlanning.length.eyebrow}
                cards={cruiseLengthCards}
                columns={3}
            />

            {/* Cruise Length Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Cruise Length Perspective"
                    content={pageData.cruisePlanning.length.note}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 8. FOR FIRST-TIME CRUISERS: TIPS FOR CHOOSING YOUR ITINERARY */}
            <StepByStepGuide
                title={pageData.cruisePlanning.tips.title}
                subtitle={pageData.cruisePlanning.tips.eyebrow}
                steps={planningGuideSteps}
            />

            {/* First-time tips note */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Expert Advice for Seasoned Cruisers"
                    content={pageData.cruisePlanning.tips.note}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 9. THE DECIDING FACTOR: WHY ITINERARY MATTERS MORE THAN SHIP CHOICE */}
            <FeatureSplit
                title={pageData.itineraryMatters.title}
                subtitles={[pageData.itineraryMatters.eyebrow, pageData.itineraryMatters.lead]}
                features={pageData.itineraryMatters.factors.map(f => f.text)}
                summary={pageData.itineraryMatters.conclusion}
                imagePosition="right"
                theme="white"
            />

            {/* 10. OBJECTIVE DESTINATION GUIDANCE & TRUSTED RESOURCES */}
            <ProsConsCards
                title="Objective Destination Guidance & Trusted Resources"
                prosTitle={pageData.trustAndReferences.trust.title}
                bestFor={pageData.trustAndReferences.trust.items}
                consTitle={pageData.trustAndReferences.references.title}
                notBestFor={pageData.trustAndReferences.references.items}
                type="compare"
                bgClass="bg-slate-50"
            />

            {/* 11. SUMMARY: KEY TAKEAWAYS */}
            <ConclusionSection
                sections={takeawaysSections}
            />

            {/* 12. MEET THE CEO: INSIGHT FROM ANGELA HUGHES */}
            <ExpertCredentials
                name="Angela Hughes"
                title="CEO & Luxury River Cruise Specialist"
                bio={pageData.expertInsight.bio}
                quote={pageData.expertInsight.quote}
                image={ProfilePictureAH}
                credentials={pageData.expertInsight.priorities}
                badge={pageData.expertInsight.eyebrow}
                authorityBoxTitle={pageData.expertInsight.title}
                authoritySubtitle="CEO & Luxury River Cruise Specialist"
                experienceBadge="40+ YEARS DESIGNING TRAVEL"
                ctaText={pageData.cta.buttonText}
                ctaLink={pageData.cta.buttonLink}
            />

            {/* 13. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about selecting the best Uniworld River Cruise itinerary.",
                    questions: pageData.faqs
                }}
            />

            {/* 14. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.subtitle}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
                image={ctaBgImg}
                theme="dark"
            />
        </div>
    )
}

export default UniworldRiverCruiseItineraries