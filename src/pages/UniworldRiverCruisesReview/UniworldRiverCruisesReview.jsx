import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import ReviewSnapshotGrid from '../../components/ui/ReviewSnapshotGrid'
import CenterCTA from '../../components/ui/CenterCTA'
import FeatureGrid from '../../components/ui/FeatureGrid'
import CardGrid from '../../components/ui/CardGrid'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import SoloCabinShowcase from '../../components/ui/SoloCabinShowcase'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import ProsConsCards from '../../components/ui/ProsConsCards'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import ConclusionSection from '../../components/ui/ConclusionSection'
import AuthorityGrid from '../../components/ui/AuthorityGrid'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'

// Media Assets
import ProfilePictureAH from '../../assets/Media (2).jpg'
// import exteriorShipImg from '../../assets/VikingVsUniworld/Exterior_2026-04-13_19-02-40.jpg'
// import budapestImg from '../../assets/VikingVsUniworld/Budapest, Hungary_2026-04-13_18-46-22.jpg'
// import suiteImg1 from '../../assets/VikingVsUniworld/Explorer Suite - Living Room_2026-04-13_18-47-55.jpg'
// import suiteImg2 from '../../assets/VikingVsUniworld/French Balcony Stateroom_2026-04-13_18-46-43.jpg'
// import diningImg from '../../assets/VikingVsUniworld/Chef_s Table_2026-04-13_18-47-48.jpg'
// import amsterdamImg from '../../assets/VikingVsUniworld/Amsterdam, The Netherlands_2026-04-13_18-45-31.jpg'
// import cochemImg from '../../assets/VikingVsUniworld/Cochem, Germany_2026-04-13_18-46-29.jpg'

function UniworldRiverCruisesReview() {
    // Structured Data Schema
    const urcrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises-review",
                "name": pageData.seo.title,
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises-review#article"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises-review#article",
                "headline": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": pageData.seo.canonicalUrl,
                "inLanguage": "en-US"
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
                        "name": "River Cruises",
                        "item": "https://www.tripsandships.com/river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Uniworld River Cruises Review",
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
    }

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(urcrSchemaData)}
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
                /* backgroundImage={exteriorShipImg} */
            />

            {/* 2. EDITORIAL INTRO & QUICK ANSWER */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={pageData.intro.paragraphs}
                /* primaryImage={budapestImg} */
                /* secondaryImage={diningImg} */
            />

            {/* 3. REVIEW SNAPSHOT & SUMMARY */}
            <ReviewSnapshotGrid
                data={pageData.reviewSnapshot}
            />

            {/* 4. INLINE CONSULTATION CTA */}
            <CenterCTA
                title={pageData.inlineCta1.title}
                description={pageData.inlineCta1.description}
                buttonText={pageData.inlineCta1.buttonText}
                buttonLink={pageData.inlineCta1.buttonLink}
                theme="light"
            />

            {/* 5. WHAT WE LOVE ABOUT UNIWORLD (PROS) */}
            <FeatureGrid
                title={pageData.pros.title}
                subtitle={pageData.pros.eyebrow}
                features={pageData.pros.items}
                bgClass="bg-white border-b border-slate-100"
            />

            {/* 6. CONS OF UNIWORLD */}
            <CardGrid
                title={pageData.cons.title}
                subtitle={pageData.cons.subtitle}
                cards={pageData.cons.items}
                columns={4}
            />

            {/* 7. BOUTIQUE SHIPS WE RECOMMEND */}
            <ThreeColumnGrid
                title={pageData.recommendedShips.title}
                subtitle={pageData.recommendedShips.subtitle}
                items={pageData.recommendedShips.items}
            />

            {/* 8. CABINS & SUITES ACCOMMODATIONS */}
            <SoloCabinShowcase
                data={{
                    title: pageData.accommodations.title,
                    subtitle: pageData.accommodations.eyebrow,
                    description: `${pageData.accommodations.subtitle} ${pageData.accommodations.note}`,
                    cabins: pageData.accommodations.cabins.map(c => ({
                        title: c.name,
                        deck: c.category,
                        size: c.size,
                        features: c.features,
                        bestFor: c.bestFor
                    }))
                }}
                /* images={[suiteImg1, suiteImg2, exteriorShipImg]} */
            />

            {/* 9. DINING REVIEW */}
            <CurvilinearGrid
                title={pageData.dining.title}
                subtitle={pageData.dining.eyebrow}
                paragraphs={[pageData.dining.subtitle, pageData.dining.footerNote]}
                items={pageData.dining.items}
            />

            {/* 10. SHORE EXCURSIONS REVIEW */}
            <StepByStepGuide
                title={pageData.excursions.title}
                subtitle={pageData.excursions.subtitle}
                steps={pageData.excursions.items}
            />

            {/* 11. DESTINATIONS & ITINERARIES */}
            <CardGrid
                title={pageData.destinations.title}
                subtitle={pageData.destinations.subtitle}
                cards={pageData.destinations.items}
                columns={3}
            />

            {/* 12. PRICING ANALYSIS */}
            <EditorialIntroSection
                heading={pageData.pricing.heading}
                description={pageData.pricing.description}
                highlights={pageData.pricing.highlights}
                /* image={amsterdamImg} */
            />

            {/* 13. INLINE CONSULTATION CTA 2 */}
            <CenterCTA
                title={pageData.inlineCta2.title}
                description={pageData.inlineCta2.description}
                buttonText={pageData.inlineCta2.buttonText}
                buttonLink={pageData.inlineCta2.buttonLink}
                theme="dark"
            />

            {/* 14. IS UNIWORLD RIGHT FOR YOU? (AUDIENCE MATCHMAKER) */}
            <ProsConsCards
                title={pageData.audience.title}
                prosTitle={pageData.audience.prosTitle}
                consTitle={pageData.audience.consTitle}
                bestFor={pageData.audience.bestFor}
                notBestFor={pageData.audience.notBestFor}
            />

            {/* 15. UNIWORLD VS OTHER CRUISE LINES COMPARISON TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.comparisonTable.title}
                headers={pageData.comparisonTable.headers}
                rows={pageData.comparisonTable.rows}
            />

            {/* 16. FINAL VERDICT */}
            <ConclusionSection
                sections={pageData.verdict.sections}
            />

            {/* 17. WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
            <AuthorityGrid
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                items={pageData.whyBook.items}
            />

            {/* 18. EXPERT CREDENTIALS (ANGELA HUGHES) */}
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

            {/* 19. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about Uniworld River Cruises before making your booking.",
                    questions: pageData.faqs
                }}
            />

            {/* 20. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
                /* image={cochemImg} */
                theme="dark"
            />
        </div>
    )
}

export default UniworldRiverCruisesReview
