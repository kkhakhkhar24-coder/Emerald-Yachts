import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import AlternatingRiverShowcase from '../../components/ui/AlternatingRiverShowcase'
import ProsConsCards from '../../components/ui/ProsConsCards'
import ItineraryCards from '../../components/ui/ItineraryCards'
import ExpertAuthorityChecklist from '../../components/ui/ExpertAuthorityChecklist'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import CardGrid from '../../components/ui/CardGrid'
import SoloCabinShowcase from '../../components/ui/SoloCabinShowcase'
import AuthorityGrid from '../../components/ui/AuthorityGrid'
import FeatureGrid from '../../components/ui/FeatureGrid'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import BrandPillarsShowcase from '../../components/ui/BrandPillarsShowcase'
import InclusionsList from '../../components/ui/InclusionsList'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '../../assets/Media (2).jpg'

const CelebrityRiverCruises = () => {
    // JSON-LD Structured Data Schema
    const riverSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#webpage",
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "isPartOf": { "@id": "https://tripsships.com/#website" },
                "about": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#service" },
                "breadcrumb": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "Service",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#service",
                "name": "Celebrity River Cruises",
                "serviceType": "Luxury River Cruises",
                "description": "Celebrity River Cruises offers premium European river cruise experiences on the Rhine and Danube, featuring intimate ships, modern accommodations, destination-focused dining, included daily shore excursions, and premium onboard amenities.",
                "url": pageData.seo.canonicalUrl,
                "provider": { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://tripsships.com/" },
                "areaServed": [
                    { "@type": "Place", "name": "Europe" },
                    { "@type": "Place", "name": "Germany" },
                    { "@type": "Place", "name": "France" },
                    { "@type": "Place", "name": "Netherlands" },
                    { "@type": "Place", "name": "Austria" },
                    { "@type": "Place", "name": "Hungary" }
                ],
                "brand": { "@type": "Brand", "name": "Celebrity River Cruises" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tripsships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://tripsships.com/celebrity-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity River Cruises", "item": pageData.seo.canonicalUrl }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/#faq",
                "url": pageData.seo.canonicalUrl,
                "mainEntity": pageData.faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question.replace(/^\d+\.\s*/, ''),
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    // Dining items formatted for CurvilinearGrid (no images)
    const diningItems = [
        {
            title: pageData.dining.highlights[0]?.title || "Regional Flavors",
            description: pageData.dining.highlights[0]?.description || "",
            icon: "utensils"
        },
        {
            title: pageData.dining.highlights[1]?.title || "Destination-Inspired Menus",
            description: pageData.dining.highlights[1]?.description || "",
            icon: "map"
        },
        {
            title: pageData.dining.highlights[2]?.title || "Local Ingredients",
            description: pageData.dining.highlights[2]?.description || "",
            icon: "Heart"
        },
        {
            title: pageData.dining.highlights[3]?.title || "Flexible Dining",
            description: pageData.dining.highlights[3]?.description || "",
            icon: "Activity"
        },
        {
            title: pageData.dining.highlights[4]?.title || "All-Day Options",
            description: pageData.dining.highlights[4]?.description || "",
            icon: "Coffee"
        },
        {
            title: pageData.dining.highlights[5]?.title || "Healthy Choices",
            description: pageData.dining.highlights[5]?.description || "",
            icon: "Eye"
        },
        {
            title: pageData.dining.venues[0]?.title || "Top-Deck Bar & Lounge",
            description: pageData.dining.venues[0]?.description || "",
            icon: "Compass"
        },
        {
            title: pageData.dining.venues[1]?.title || "Martini Bar",
            description: pageData.dining.venues[1]?.description || "",
            icon: "Maximize"
        },
        {
            title: pageData.dining.venues[2]?.title || "Café al Bacio",
            description: pageData.dining.venues[2]?.description || "",
            icon: "Coffee"
        },
        {
            title: pageData.dining.venues[3]?.title || "Sunset Bar",
            description: pageData.dining.venues[3]?.description || "",
            icon: "ship"
        }
    ]

    return (
        <div className="min-h-screen bg-white text-navy-950">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(riverSchemaData)}</script>
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

            {/* 2. EDITORIAL INTRO & QUICK ANSWER */}
            <EditorialIntroSplit
                eyebrow={pageData.editorialIntro.eyebrow}
                heading={pageData.editorialIntro.heading}
                paragraphs={pageData.editorialIntro.paragraphs}
            />

            {/* QUICK ANSWER CARD */}
            <div className="max-w-5xl mx-auto px-6 -mt-12 mb-16 relative z-20">
                <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-10 border border-gold-500/30 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <span className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold mb-3 block">
                        Quick Answer
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                        {pageData.editorialIntro.quickAnswer.title}
                    </h3>
                    <p className="font-sans text-ice-100 text-base md:text-lg leading-relaxed">
                        {pageData.editorialIntro.quickAnswer.text}
                    </p>
                </div>
            </div>

            {/* 3. AT A GLANCE TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.glanceTable.title}
                headers={pageData.glanceTable.headers}
                rows={pageData.glanceTable.rows}
            />

            {/* 4. LAUNCH TIMELINE */}
            <EditorialIntroSection
                heading={pageData.launchTimeline.title}
                description={pageData.launchTimeline.description}
                highlights={pageData.launchTimeline.highlights}
            />

            {/* 5. INAUGURAL RIVER FLEET */}
            <ThreeColumnGrid
                title={pageData.fleetShowcase.title}
                subtitle={pageData.fleetShowcase.subtitle}
                items={pageData.fleetShowcase.cards.map(c => ({
                    title: c.title,
                    category: c.category,
                    description: c.description,
                    features: c.items,
                    highlight: c.bestFor
                }))}
            />

            {/* 6. SHIP COMPARISON TABLE: COMPASS VS SEEKER */}
            <LuxuryCruiseComparisonTable
                title={pageData.shipComparisonTable.title}
                headers={pageData.shipComparisonTable.headers}
                rows={pageData.shipComparisonTable.rows}
            />

            {/* 7. WHERE TO SAIL: RHINE VS DANUBE */}
            <AlternatingRiverShowcase
                title={pageData.riversShowcase.title}
                description={pageData.riversShowcase.subtitle}
                rivers={pageData.riversShowcase.rivers}
            />

            {/* 8. RHINE VS DANUBE CHOICE COMPARISON */}
            <ProsConsCards
                title="Rhine vs. Danube: Which River Best Suits Your Travel Style?"
                prosTitle={pageData.riversShowcase.choiceRhine.title}
                consTitle={pageData.riversShowcase.choiceDanube.title}
                bestFor={pageData.riversShowcase.choiceRhine.items}
                notBestFor={pageData.riversShowcase.choiceDanube.items}
                bottomNote="Both rivers deliver extraordinary European exploration with Celebrity's signature modern luxury service and intimate 172-guest capacity."
            />

            {/* 9. ITINERARIES */}
            <ItineraryCards
                title={pageData.itineraries.title}
                subtitle={pageData.itineraries.subtitle}
                items={pageData.itineraries.cards}
            />

            {/* 10. WHAT IS INCLUDED ON CELEBRITY RIVER CRUISES */}
            <ExpertAuthorityChecklist
                title={pageData.inclusions.title}
                subtitle={pageData.inclusions.subtitle}
                points={pageData.inclusions.points}
            />

            {/* 11. DINING HIGHLIGHTS & VENUES */}
            <CurvilinearGrid
                title={pageData.dining.title}
                subtitle={pageData.dining.eyebrow}
                paragraphs={[pageData.dining.subtitle]}
                items={diningItems}
            />

            {/* 12. ACCOMMODATIONS */}
            <SoloCabinShowcase
                data={{
                    title: pageData.accommodations.title,
                    subtitle: pageData.accommodations.eyebrow,
                    description: pageData.accommodations.subtitle,
                    cabins: pageData.accommodations.cabins
                }}
                // images={[
                //     RiverViewStateroomImage,
                //     InfiniteBalconyImage,
                //     SkylightSuiteImage,
                //     VistaSuiteImage
                // ]}
            />

            {/* 13. ACCOMMODATIONS COMPARED TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.accommodationsComparedTable.title}
                headers={pageData.accommodationsComparedTable.headers}
                rows={pageData.accommodationsComparedTable.rows}
            />

            {/* 14. SUITE PERKS & PRIVILEGES */}
            <AuthorityGrid
                title={pageData.suitePerks.title}
                subtitle={pageData.suitePerks.subtitle}
                items={pageData.suitePerks.items}
            />

            {/* 15. RIVER VS OCEAN COMPARISON TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.riverVsOcean.title}
                headers={pageData.riverVsOcean.headers}
                rows={pageData.riverVsOcean.rows}
            />

            {/* 16. SIX DIFFERENTIATORS */}
            <CardGrid
                title={pageData.howDifferent.title}
                subtitle={pageData.howDifferent.subtitle}
                cards={pageData.howDifferent.cards}
                columns={3}
            />

            {/* 17. CELEBRITY VS OTHER RIVER CRUISE LINES */}
            <InclusionsList
                title={pageData.comparingRiverLines.title}
                inclusions={pageData.comparingRiverLines.points}
                expertNote={pageData.comparingRiverLines.note}
                // image={RiverCruiseComparisonImage}
            />

            {/* 18. ARE CELEBRITY RIVER CRUISES WORTH IT? */}
            <CardGrid
                title={pageData.isItWorthIt.title}
                subtitle={pageData.isItWorthIt.subtitle}
                cards={pageData.isItWorthIt.cards}
                columns={4}
            />

            {/* 19. WHO SHOULD CHOOSE CELEBRITY RIVER CRUISES */}
            <LuxuryCruiseComparisonTable
                title={pageData.whoShouldChoose.title}
                headers={pageData.whoShouldChoose.headers}
                rows={pageData.whoShouldChoose.rows}
            />

            {/* 20. WHO MAY PREFER ANOTHER RIVER CRUISE */}
            <FeatureGrid
                title={pageData.whoMayPreferAnother.title}
                subtitle={pageData.whoMayPreferAnother.subtitle}
                features={pageData.whoMayPreferAnother.features}
            />

            {/* 21. PROS & CONS */}
            <ProsConsCards
                title={pageData.prosCons.title}
                prosTitle={pageData.prosCons.prosTitle}
                consTitle={pageData.prosCons.consTitle}
                bestFor={pageData.prosCons.pros}
                notBestFor={pageData.prosCons.cons}
                bottomNote={pageData.prosCons.bottomNote}
            />

            {/* 22. HOW TO CHOOSE (5-STEP WALKTHROUGH) */}
            <StepByStepGuide
                title={pageData.stepGuide.title}
                subtitle="Follow this structured 5-step framework to plan your inaugural European river journey."
                steps={pageData.stepGuide.steps}
            />

            {/* 23. ANGELA HUGHES EXPERT INSIGHT */}
            <ExpertCredentials
                name={pageData.expertCredentials.name}
                title={pageData.expertCredentials.title}
                image={ProfilePictureAH}
                badge={pageData.expertCredentials.badge}
                experienceBadge={pageData.expertCredentials.experienceBadge}
                quote={pageData.expertCredentials.quote}
                credentials={pageData.expertCredentials.credentials}
                bio={pageData.expertCredentials.bio}
                ctaText="Schedule a Consultation"
                ctaLink="/contact"
            />

            {/* 24. WHY PLAN WITH TRIPS & SHIPS */}
            <BrandPillarsShowcase
                data={{
                    title: pageData.whyPlanWithTrips.title,
                    subtitle: pageData.whyPlanWithTrips.subtitle,
                    pillars: pageData.whyPlanWithTrips.pillars
                }}
            />

            {/* 25. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about Celebrity River Cruises for 2027 and 2028",
                    questions: pageData.faqs
                }}
            />

            {/* 26. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
            />
        </div>
    )
}

export default CelebrityRiverCruises