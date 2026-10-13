import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import AuthorityGrid from '../../components/ui/AuthorityGrid'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import SoloCabinShowcase from '../../components/ui/SoloCabinShowcase'
import FeatureGrid from '../../components/ui/FeatureGrid'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import InclusionsList from '../../components/ui/InclusionsList'
import CardGrid from '../../components/ui/CardGrid'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ExpertAuthorityChecklist from '../../components/ui/ExpertAuthorityChecklist'
import ConclusionSection from '../../components/ui/ConclusionSection'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
// import europeDestImg from '../../assets/UniworldRiverCruises/chateau-de-chenonceau-france-castle-over-cher-river-travel-destination.webp'

function UniworldRiverCruises() {
    // Structured Data Schema
    const urcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises",
                "name": pageData.seo.title,
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
                "inLanguage": "en-US"
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
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises#article",
                "headline": "Uniworld River Cruises: The Complete Guide",
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
                "image": "https://www.tripsandships.com/images/uniworld-river-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises" }
            },
            {
                "@type": "Service",
                "name": "Uniworld River Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning and personalized advice for Uniworld River Cruises."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Uniworld River Cruises", "item": pageData.seo.canonicalUrl }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": pageData.faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    // Destination items (image commented out)
    const destinationItems = pageData.destinations.items.map((item, idx) => ({
        ...item,
        // image: idx === 0 ? europeDestImg : undefined
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
                    {JSON.stringify(urcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* 1. HERO SECTION */}
            <ComparisonHero
                badge={pageData.hero.badge}
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                description={pageData.hero.description}
                primaryCtaText={pageData.hero.primaryCtaText}
                primaryCtaLink={pageData.hero.primaryCtaLink}
                secondaryCtaText={pageData.hero.secondaryCtaText}
                secondaryCtaLink={pageData.hero.secondaryCtaLink}
            />

            {/* 2. THE UNIWORLD DIFFERENCE */}
            <EditorialIntroSplit
                eyebrow={pageData.theDifference.eyebrow}
                heading={pageData.theDifference.heading}
                paragraphs={pageData.theDifference.paragraphs}
            />

            {/* 3. KEY PILLARS OF THE UNIWORLD DIFFERENCE */}
            <AuthorityGrid
                title="Key Highlights of the Uniworld Difference"
                subtitle={pageData.theDifference.statement}
                items={pageData.theDifference.highlights}
            />

            {/* 4. DESTINATIONS COVERED BY UNIWORLD */}
            <ThreeColumnGrid
                title={pageData.destinations.title}
                subtitle={`${pageData.destinations.subtitle} ${pageData.destinations.statement}`}
                items={destinationItems}
            />

            {/* 5. UNIWORLD FLEET OVERVIEW */}
            <LuxuryCruiseComparisonTable
                title={pageData.fleet.title}
                headers={pageData.fleet.headers}
                rows={pageData.fleet.rows}
                bottomNote={pageData.fleet.bottomNote}
            />

            {/* 6. ACCOMMODATION OPTIONS */}
            <SoloCabinShowcase
                data={{
                    title: pageData.accommodations.title,
                    subtitle: pageData.accommodations.eyebrow,
                    description: `${pageData.accommodations.subtitle} ${pageData.accommodations.note}`,
                    cabins: pageData.accommodations.cabins
                }}
            />

            {/* 7. SUITE PERKS & PRIVILEGES */}
            <FeatureGrid
                title={pageData.accommodations.suiteFeaturesTitle}
                subtitle={pageData.accommodations.note}
                features={pageData.accommodations.suiteFeatures}
                bgClass="bg-white border-b border-slate-100"
            />

            {/* 8. DINING ON UNIWORLD */}
            <CurvilinearGrid
                title={pageData.dining.title}
                subtitle={pageData.dining.eyebrow}
                paragraphs={[pageData.dining.subtitle, pageData.dining.footerNote]}
                items={pageData.dining.items}
            />

            {/* 9. WHAT'S INCLUDED */}
            <InclusionsList
                title={pageData.inclusions.title}
                inclusions={pageData.inclusions.inclusions}
                expertNote={pageData.inclusions.expertNote}
            />

            {/* 10. SHORE EXCURSIONS */}
            <ThreeColumnGrid
                title={pageData.excursions.title}
                subtitle={`${pageData.excursions.subtitle} ${pageData.excursions.statement}`}
                items={pageData.excursions.items}
            />

            {/* 11. WELLNESS AND ONBOARD ACTIVITIES */}
            <AuthorityGrid
                title={pageData.wellness.title}
                subtitle={`${pageData.wellness.subtitle} ${pageData.wellness.lead}`}
                items={pageData.wellness.items}
            />

            {/* 12. BEST TIME TO TAKE A UNIWORLD RIVER CRUISE (CARDS) */}
            <CardGrid
                title={pageData.bestTime.title}
                subtitle={pageData.bestTime.subtitle}
                cards={pageData.bestTime.cards}
                columns={4}
            />

            {/* 13. BEST TIME TO CRUISE (TABLE) */}
            <LuxuryCruiseComparisonTable
                title="Best Time to Cruise at a Glance"
                headers={pageData.bestTime.table.headers}
                rows={pageData.bestTime.table.rows}
                bottomNote={pageData.bestTime.footerNote}
            />

            {/* 14. UNDERSTANDING UNIWORLD PRICING */}
            <EditorialIntroSection
                heading={pageData.pricing.heading}
                description={pageData.pricing.description}
                highlights={pageData.pricing.highlights}
            />

            {/* 15. WHO SHOULD CHOOSE UNIWORLD? */}
            <LuxuryCruiseComparisonTable
                title={pageData.whoShouldChoose.title}
                headers={pageData.whoShouldChoose.headers}
                rows={pageData.whoShouldChoose.rows}
                bottomNote={pageData.whoShouldChoose.footerNote}
            />

            {/* 16. UNIWORLD COMPARED WITH OTHER LUXURY LINES */}
            <LuxuryCruiseComparisonTable
                title={pageData.comparison.title}
                headers={pageData.comparison.headers}
                rows={pageData.comparison.rows}
                bottomNote={pageData.comparison.bottomNote}
            />

            {/* 17. EXPERT BOOKING TIPS */}
            <StepByStepGuide
                title={pageData.bookingTips.title}
                subtitle={pageData.bookingTips.subtitle}
                steps={pageData.bookingTips.steps}
            />

            {/* 18. KEY TAKEAWAYS */}
            <ExpertAuthorityChecklist
                title={pageData.keyTakeaways.title}
                subtitle={pageData.keyTakeaways.subtitle}
                points={pageData.keyTakeaways.points}
            />

            {/* 19. CONCLUSION */}
            <ConclusionSection
                sections={pageData.conclusion.sections}
            />

            {/* 20. MEET THE CEO - ANGELA HUGHES */}
            <ExpertCredentials
                name={pageData.expertCredentials.name}
                title={pageData.expertCredentials.title}
                badge={pageData.expertCredentials.badge}
                image={Profile_AH}
                experienceBadge={pageData.expertCredentials.experienceBadge}
                quote={pageData.expertCredentials.quote}
                credentials={pageData.expertCredentials.credentials}
                bio={pageData.expertCredentials.bio}
                ctaText={pageData.expertCredentials.ctaText}
                ctaLink={pageData.expertCredentials.ctaLink}
            />

            {/* 21. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about planning a Uniworld Boutique River Cruise",
                    questions: pageData.faqs
                }}
            />

            {/* 22. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
            />
        </div>
    )
}

export default UniworldRiverCruises
