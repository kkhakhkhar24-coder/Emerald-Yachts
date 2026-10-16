import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI System Components (Component-Based Architecture matching benchmark)
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import AuthorityBox from '../../components/ui/AuthorityBox'
import SoloCabinShowcase from '../../components/ui/SoloCabinShowcase'
import FeatureSplit from '../../components/ui/FeatureSplit'
import InclusionsList from '../../components/ui/InclusionsList'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import CardGrid from '../../components/ui/CardGrid'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ConclusionSection from '../../components/ui/ConclusionSection'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets - Profile
import ProfilePictureAH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Media Assets - UniworldCabinCategories
import heroBgImg from '../../assets/UniworldCabinCategories/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp'
import introPrimaryImg from '../../assets/UniworldCabinCategories/uniworld-ss-emilie-deluxe-suite-french-balcony-view.webp'
import introSecondaryImg from '../../assets/UniworldCabinCategories/uniworld-classic-river-stateroom-cabin-rendering.jpeg'

// 6 Cabin Categories Images
import cabinClassicImg from '../../assets/UniworldCabinCategories/uniworld-classic-river-stateroom-cabin-rendering.jpeg'
import cabinDeluxeImg from '../../assets/UniworldCabinCategories/uniworld-river-princess-classic-stateroom-interior.webp'
import cabinFrenchBalconyImg from '../../assets/UniworldCabinCategories/uniworld-french-balcony-stateroom-interior-rendering.webp'
import cabinPremiumBalconyImg from '../../assets/UniworldCabinCategories/uniworld-ss-antoinette-french-balcony-stateroom-autumn-view.webp'
import cabinJuniorSuiteImg from '../../assets/UniworldCabinCategories/uniworld-ss-emilie-deluxe-suite-master-king-bed.webp'
import cabinSuitesImg from '../../assets/UniworldCabinCategories/uniworld-presidential-royal-suite-bedroom-rendering.jpeg'

// Butler Service
import butlerImg from '../../assets/UniworldCabinCategories/uniworld-river-tosca-sundeck-butler-drink-service-nile.webp'

// Cabin Amenities
import amenitiesImg from '../../assets/UniworldCabinCategories/uniworld-luxury-ship-grand-suite-marble-bathroom-rendering.jpeg'

// Upgrading Worth It
import upgradeImg from '../../assets/UniworldCabinCategories/uniworld-ss-antoinette-french-balcony-cabin-bedroom.webp'

// Final CTA
import ctaBgImg from '../../assets/UniworldCabinCategories/uniworld-ss-elisabeth-luxury-super-ship-rhine-waterway.webp'

function UniworldCabinCategories() {
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
                    "url": "https://www.tripsandships.com/images/uniworld-cabin-categories.jpg",
                    "caption": "Uniworld Cabin Categories Explained"
                },
                "image": "https://www.tripsandships.com/images/uniworld-cabin-categories.jpg",
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
                    "Ultra-Luxury Suites"
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
                        "name": "Cabin Categories",
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

    // Cabin showcase image array (6 authentic matched assets)
    const cabinImages = [
        cabinClassicImg,
        cabinDeluxeImg,
        cabinFrenchBalconyImg,
        cabinPremiumBalconyImg,
        cabinJuniorSuiteImg,
        cabinSuitesImg
    ]

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

            {/* 2. EDITORIAL INTRO & QUICK OVERVIEW */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={pageData.intro.paragraphs}
                primaryImage={introPrimaryImg}
                secondaryImage={introSecondaryImg}
            />

            {/* Quick Overview Note Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-10 mb-12">
                <AuthorityBox
                    title={pageData.intro.quickOverview.label}
                    content={pageData.intro.quickOverview.text}
                    author="Uniworld Stateroom Selection Guide"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 3. EXPLORE EVERY CABIN CATEGORY (6 CATEGORIES SHOWCASE) */}
            <div id="categories">
                <SoloCabinShowcase
                    data={{
                        title: pageData.accommodations.title,
                        subtitle: pageData.accommodations.eyebrow,
                        description: pageData.accommodations.subtitle,
                        cabins: pageData.accommodations.cabins.map(c => ({
                            title: c.name,
                            deck: c.category,
                            size: c.size,
                            features: c.features,
                            bestFor: c.bestFor
                        }))
                    }}
                    images={cabinImages}
                />
            </div>

            {/* 4. SUITE EXCLUSIVE: BUTLER SERVICE EXPLAINED */}
            <FeatureSplit
                title={pageData.butler.heading}
                subtitles={[pageData.butler.eyebrow, `${pageData.butler.intro} ${pageData.butler.sub}`]}
                features={pageData.butler.services}
                summary={pageData.butler.highlight}
                image={butlerImg}
                imagePosition="right"
                theme="light"
            />

            {/* 5. STANDARD COMFORTS: AMENITIES INCLUDED IN EVERY CABIN */}
            <InclusionsList
                title={pageData.amenities.heading}
                inclusions={pageData.amenities.items}
                expertNote={pageData.amenities.conclusion}
                image={amenitiesImg}
            />

            {/* 6. SIDE-BY-SIDE CABIN COMPARISON TABLE */}
            <div id="comparison">
                <LuxuryCruiseComparisonTable
                    title={pageData.comparisonTable.title}
                    headers={pageData.comparisonTable.headers}
                    rows={pageData.comparisonTable.rows}
                />
            </div>

            {/* 7. DECISION GUIDE: HOW TO CHOOSE THE RIGHT CABIN */}
            <CardGrid
                title={pageData.chooseCabin.title}
                subtitle={pageData.chooseCabin.eyebrow}
                cards={pageData.chooseCabin.items}
                columns={4}
            />

            {/* 8. VALUE CONSIDERATIONS: IS UPGRADING WORTH IT? */}
            <EditorialIntroSection
                heading={pageData.upgradeWorthIt.heading}
                description={pageData.upgradeWorthIt.paragraphs.join('\n\n')}
                highlights={pageData.upgradeWorthIt.highlights}
                image={upgradeImg}
            />

            {/* 9. BEFORE YOU BOOK: TIPS BEFORE BOOKING */}
            <StepByStepGuide
                title={pageData.bookingTips.title}
                subtitle={pageData.bookingTips.eyebrow}
                steps={pageData.bookingTips.steps}
            />

            {/* Pro Tip Callout */}
            <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
                <AuthorityBox
                    title="Pro Tip"
                    content={pageData.bookingTips.proTip}
                    author="Angela Hughes, Luxury River Cruise Specialist"
                    authorImage={ProfilePictureAH}
                />
            </div>

            {/* 10. SUMMARY: KEY TAKEAWAYS */}
            <ConclusionSection
                sections={pageData.takeaways.sections}
            />

            {/* 11. MEET THE CEO & EXPERT CREDENTIALS (ANGELA HUGHES) */}
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

            {/* 12. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about Uniworld cabin categories and stateroom selection before booking.",
                    questions: pageData.faqs
                }}
            />

            {/* 13. FINAL CALL TO ACTION */}
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

export default UniworldCabinCategories