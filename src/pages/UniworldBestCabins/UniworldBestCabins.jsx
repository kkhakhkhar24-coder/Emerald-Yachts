import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI System Components (Component-Based Architecture matching benchmark)
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import FeatureSplit from '../../components/ui/FeatureSplit'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import CardGrid from '../../components/ui/CardGrid'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import AuthorityBox from '../../components/ui/AuthorityBox'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ConclusionSection from '../../components/ui/ConclusionSection'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets - Profile
import ProfilePictureAH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Media Assets - UniworldBestCabins
import heroBgImg from '../../assets/UniworldBestCabins/uniworld-ss-antoinette-french-balcony-stateroom-autumn-view.webp'
import introPrimaryImg from '../../assets/UniworldBestCabins/uniworld-ss-emilie-deluxe-suite-master-king-bed.webp'
import introSecondaryImg from '../../assets/UniworldBestCabins/uniworld-classic-river-stateroom-cabin-rendering.jpeg'
import deckPlanImg from '../../assets/UniworldBestCabins/uniworld-ss-clara-ship-deck-plan-layout.webp'
import frenchBalconyImg from '../../assets/UniworldBestCabins/uniworld-french-balcony-stateroom-interior-rendering.webp'
import suitesImg from '../../assets/UniworldBestCabins/uniworld-presidential-royal-suite-bedroom-rendering.jpeg'
import midshipImg from '../../assets/UniworldBestCabins/uniworld-river-princess-classic-stateroom-interior.webp'
import upgradeImg from '../../assets/UniworldBestCabins/uniworld-ss-antoinette-royal-suite-luxury-bedroom.webp'
import finalStandardsImg from '../../assets/UniworldBestCabins/uniworld-ss-clara-stateroom-marble-bathroom-rendering.webp'
import ctaBgImg from '../../assets/UniworldBestCabins/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp'

function BestUniworldCabins() {
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
                    "url": "https://www.tripsandships.com/images/best-uniworld-cabins.jpg",
                    "caption": "Best Uniworld Cabins & Cabins to Avoid"
                },
                "image": "https://www.tripsandships.com/images/best-uniworld-cabins.jpg",
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
                    "River Cruise Cabin Selection",
                    "French Balcony Staterooms",
                    "Quiet River Cruise Cabins"
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
                        "name": "Best Cabins",
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

    // Top Recommendations items mapped with 100% heading-matched assets
    const recommendationImages = [
        frenchBalconyImg,  // French Balcony Cabins
        suitesImg,         // Suites for Maximum Luxury
        midshipImg         // Midship Cabins
    ]

    const recommendedCabinItems = pageData.bestByTravelStyle.items.map((item, idx) => ({
        title: item.title,
        description: `${item.description} Note: ${item.note}`,
        image: recommendationImages[idx]
    }))

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
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

            {/* 2. EDITORIAL INTRO: CHOOSING THE RIGHT CABIN */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={pageData.intro.paragraphs}
                primaryImage={introPrimaryImg}
                secondaryImage={introSecondaryImg}
            />

            {/* 3. CABIN SELECTION: HOW CABIN LOCATION AFFECTS YOUR EXPERIENCE */}
            <FeatureSplit
                title={pageData.locationFactors.heading}
                subtitles={[pageData.locationFactors.eyebrow, pageData.locationFactors.description]}
                features={pageData.locationFactors.factors}
                summary={pageData.locationFactors.callout}
                image={deckPlanImg}
                imagePosition="left"
                theme="light"
            />

            {/* 4. TOP RECOMMENDATIONS: BEST CABIN BY TRAVEL STYLE */}
            <div id="recommendations">
                <ThreeColumnGrid
                    title={pageData.bestByTravelStyle.title}
                    subtitle={pageData.bestByTravelStyle.subtitle}
                    items={recommendedCabinItems}
                />
            </div>

            {/* 5. SMART BOOKING: CABINS OFFERING THE BEST VALUE */}
            <CardGrid
                title={pageData.bestValue.title}
                subtitle={pageData.bestValue.subtitle}
                cards={pageData.bestValue.items}
                columns={2}
            />

            {/* 6. GOOD TO KNOW: CABIN LOCATIONS SOME TRAVELERS MAY WISH TO AVOID */}
            <CardGrid
                title={pageData.avoidLocations.title}
                subtitle={pageData.avoidLocations.subtitle}
                cards={pageData.avoidLocations.items}
                columns={3}
            />

            {/* 7. QUICK REFERENCE: BEST CABIN BY TRAVEL STYLE (TABLE) */}
            <LuxuryCruiseComparisonTable
                title={pageData.travelStyleTable.title}
                headers={pageData.travelStyleTable.headers}
                rows={pageData.travelStyleTable.rows}
            />

            {/* 8. DECISION GUIDE: SHOULD YOU UPGRADE? */}
            <EditorialIntroSection
                heading={pageData.upgradeReasons.heading}
                description={`${pageData.upgradeReasons.lead}\n\n• ${pageData.upgradeReasons.reasons.join('\n• ')}`}
                highlights={pageData.upgradeReasons.highlights}
                image={upgradeImg}
            />

            {/* Upgrade Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Value Perspective"
                    content={pageData.upgradeReasons.callout}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 9. BEFORE YOU BOOK: TIPS FOR CHOOSING THE RIGHT CABIN */}
            <StepByStepGuide
                title={pageData.tips.title}
                subtitle={pageData.tips.eyebrow}
                steps={pageData.tips.steps}
            />

            {/* Pro Tip Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Deck Plan Tip"
                    content={pageData.tips.note}
                    author="Uniworld Stateroom Advisory"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 10. AVOID THIS MISTAKE: COMMON CABIN SELECTION MISTAKES */}
            <CardGrid
                title={pageData.mistakes.title}
                subtitle={pageData.mistakes.subtitle}
                cards={pageData.mistakes.items}
                columns={3}
            />

            {/* 11. FINAL PERSPECTIVE: ARE THERE REALLY CABINS TO AVOID? */}
            <EditorialIntroSection
                heading={pageData.finalPerspective.heading}
                description={pageData.finalPerspective.description}
                highlights={pageData.finalPerspective.highlights}
                image={finalStandardsImg}
            />

            {/* Final Quote Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Expert Conclusion"
                    content={pageData.finalPerspective.quote}
                    author="Angela Hughes, CEO Trips & Ships Luxury Travel"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 12. SUMMARY: KEY TAKEAWAYS */}
            <ConclusionSection
                sections={pageData.takeaways.sections}
            />

            {/* 13. MEET THE CEO & EXPERT CREDENTIALS (ANGELA HUGHES) */}
            <ExpertCredentials
                image={ProfilePictureAH}
                name={pageData.expertCredentials.name}
                title={pageData.expertCredentials.title}
                badge={pageData.expertCredentials.badge}
                experienceBadge={pageData.expertCredentials.experienceBadge}
                quote={pageData.expertCredentials.quote}
                credentials={pageData.expertCredentials.credentials}
                bio={pageData.expertCredentials.bio}
                ctaText={pageData.expertCredentials.ctaText}
                ctaLink={pageData.expertCredentials.ctaLink}
            />

            {/* 14. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about selecting the best cabin on Uniworld River Cruises.",
                    questions: pageData.faqs
                }}
            />

            {/* 15. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
                image={ctaBgImg}
                theme="dark"
            />
        </div>
    )
}

export default BestUniworldCabins