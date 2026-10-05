import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import AuthorityGrid from '../../components/ui/AuthorityGrid'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import ExpertAuthorityChecklist from '../../components/ui/ExpertAuthorityChecklist'
import InclusionsList from '../../components/ui/InclusionsList'
import CardGrid from '../../components/ui/CardGrid'
import DualPhilosophyShowcase from '../../components/ui/DualPhilosophyShowcase'
import SoloCabinShowcase from '../../components/ui/SoloCabinShowcase'
import AlternatingRiverShowcase from '../../components/ui/AlternatingRiverShowcase'
import ProsConsCards from '../../components/ui/ProsConsCards'
import FeatureGrid from '../../components/ui/FeatureGrid'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import BrandPillarsShowcase from '../../components/ui/BrandPillarsShowcase'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '../../assets/Media (2).jpg'

const CelebrityRhineRiverCruises = () => {
    // JSON-LD Structured Data Schema
    const rhrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#webpage",
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "isPartOf": { "@id": "https://tripsships.com/#website" },
                "about": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#service" },
                "breadcrumb": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "Service",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#service",
                "name": "Celebrity Rhine River Cruises",
                "serviceType": "Rhine River Cruises",
                "description": "Celebrity Rhine River Cruises offer premium European river cruise experiences for 2027 and 2028, with itineraries visiting destinations across the Netherlands, Germany, France and Switzerland, including Amsterdam, Cologne, Rüdesheim, Strasbourg and Basel.",
                "url": pageData.seo.canonicalUrl,
                "provider": { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://tripsships.com/" },
                "areaServed": [
                    { "@type": "Place", "name": "Netherlands" },
                    { "@type": "Place", "name": "Germany" },
                    { "@type": "Place", "name": "France" },
                    { "@type": "Place", "name": "Switzerland" }
                ],
                "brand": { "@type": "Brand", "name": "Celebrity River Cruises" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tripsships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://tripsships.com/celebrity-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity River Cruises", "item": "https://tripsships.com/celebrity-cruises/river-cruises/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Rhine River Cruises", "item": pageData.seo.canonicalUrl }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#faq",
                "url": pageData.seo.canonicalUrl,
                "mainEntity": pageData.faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question.replace(/^\d+\.\s*/, ''),
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
                    {JSON.stringify(rhrcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* 1. HERO SECTION */}
            <ComparisonHero
                tag={pageData.hero.tag}
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                primaryBtnText={pageData.hero.primaryBtnText}
                primaryBtnLink={pageData.hero.primaryBtnLink}
                secondaryBtnText={pageData.hero.secondaryBtnText}
                secondaryBtnLink={pageData.hero.secondaryBtnLink}
            />

            {/* 2. EDITORIAL INTRO & QUICK ANSWER */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.title}
                paragraphs={pageData.intro.paragraphs}
            />

            {/* 3. AT A GLANCE TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.glance.title}
                headers={pageData.glance.headers}
                rows={pageData.glance.rows}
                bottomNote={pageData.glance.note}
            />

            {/* 4. WHERE TO SAIL */}
            <AuthorityGrid
                title={pageData.whereToSail.title}
                subtitle={`${pageData.whereToSail.subtitle} ${pageData.whereToSail.footerNote}`}
                items={pageData.whereToSail.items}
            />

            {/* 5. MAP & ROUTE COMBINATIONS */}
            <CurvilinearGrid
                title={pageData.route.title}
                subtitle={pageData.route.eyebrow}
                paragraphs={[pageData.route.subtitle, pageData.route.note]}
                items={pageData.route.combines.map(c => ({
                    title: c.title,
                    description: c.description,
                    highlight: "Iconic Rhine Highlight"
                }))}
            />

            {/* 6. FEATURED RHINE CITIES */}
            <ThreeColumnGrid
                title={pageData.cityProfiles.title}
                subtitle={pageData.cityProfiles.subtitle}
                items={pageData.cityProfiles.cities.map(c => ({
                    title: `${c.title}, ${c.country}`,
                    category: c.country,
                    description: c.description,
                    features: c.highlights,
                    highlight: `Key ${c.title} Highlights`
                }))}
            />

            {/* 7. CITIES AT A GLANCE TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.citiesGlance.title}
                headers={pageData.citiesGlance.headers}
                rows={pageData.citiesGlance.rows}
                bottomNote={pageData.citiesGlance.note}
            />

            {/* 8. WHAT IS INCLUDED */}
            <ExpertAuthorityChecklist
                title={pageData.inclusions.title}
                subtitle={`${pageData.inclusions.subtitle} ${pageData.inclusions.note}`}
                points={pageData.inclusions.points}
            />

            {/* 9. SHORE EXCURSIONS */}
            <InclusionsList
                title={pageData.excursions.title}
                inclusions={pageData.excursions.focusPoints}
                expertNote={pageData.excursions.subtitle + " " + pageData.excursions.note}
                // image={RhineExcursionsImage}
            />

            {/* 10. BEST TIME - SEASON CARDS */}
            <CardGrid
                title={pageData.seasons.title}
                subtitle={pageData.seasons.subtitle}
                cards={pageData.seasons.cards.map(s => ({
                    title: s.title,
                    description: s.description,
                    bullets: s.tags,
                    icon: s.icon
                }))}
                columns={4}
            />

            {/* 11. BEST TIME TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.seasonTable.title}
                headers={pageData.seasonTable.headers}
                rows={pageData.seasonTable.rows}
                bottomNote={pageData.seasonTable.note}
            />

            {/* 12. CELEBRITY COMPASS & SEEKER */}
            <DualPhilosophyShowcase
                data={{
                    title: pageData.ships.title,
                    subtitle: pageData.ships.subtitle,
                    sailing: {
                        label: pageData.ships.ships[0].title,
                        philosophy: pageData.ships.ships[0].category,
                        points: pageData.ships.ships[0].items
                    },
                    allSuite: {
                        label: pageData.ships.ships[1].title,
                        philosophy: pageData.ships.ships[1].category,
                        points: pageData.ships.ships[1].items
                    },
                    verdict: "Both Celebrity Compass and Celebrity Seeker bring Celebrity's contemporary design, upscale culinary standards, and intuitive service to Europe's storied Rhine and Danube rivers."
                }}
                // imageSailing={CelebrityCompassImage}
                // imageAllSuite={CelebritySeekerImage}
            />

            {/* 13. ACCOMMODATIONS & SKYLIGHT SUITE */}
            <SoloCabinShowcase
                data={{
                    title: pageData.accommodations.title,
                    subtitle: pageData.accommodations.eyebrow,
                    description: pageData.accommodations.subtitle,
                    cabins: pageData.accommodations.cabins
                }}
                // images={[
                //     RiverViewImage,
                //     InfiniteBalconyImage,
                //     SkylightSuiteImage,
                //     VistaSuiteImage
                // ]}
            />

            {/* 14. BEFORE & AFTER STAYS */}
            <AlternatingRiverShowcase
                title={pageData.beforeAfter.title}
                description={pageData.beforeAfter.subtitle}
                rivers={[
                    {
                        name: pageData.beforeAfter.amsterdamBefore.title,
                        description: pageData.beforeAfter.amsterdamBefore.description,
                        highlights: pageData.beforeAfter.amsterdamBefore.highlights,
                        bestFor: "Ideal for travelers seeking extra nights in Dutch canals before sailing."
                    },
                    {
                        name: pageData.beforeAfter.baselAfter.title,
                        description: pageData.beforeAfter.baselAfter.description,
                        highlights: pageData.beforeAfter.baselAfter.highlights,
                        bestFor: "Ideal for onward Alpine exploration and French-Swiss lake extensions."
                    }
                ]}
            />

            {/* 15. BEFORE & AFTER STAYS INCLUSIONS TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.beforeAfterTable.title}
                headers={pageData.beforeAfterTable.headers}
                rows={pageData.beforeAfterTable.rows}
                bottomNote={pageData.beforeAfterTable.note}
            />

            {/* 16. RIVER VS OCEAN COMPARISON TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.riverVsOcean.title}
                headers={pageData.riverVsOcean.headers}
                rows={pageData.riverVsOcean.rows}
                bottomNote={pageData.riverVsOcean.note}
            />

            {/* 17. RHINE VS DANUBE COMPARISON TABLE & CHOICE CARDS */}
            <LuxuryCruiseComparisonTable
                title={pageData.rhineVsDanube.title}
                headers={pageData.rhineVsDanube.headers}
                rows={pageData.rhineVsDanube.rows}
            />

            <ProsConsCards
                title="Rhine vs. Danube: Which River Best Suits Your Vacation?"
                prosTitle={pageData.rhineVsDanube.choiceRhine.title}
                consTitle={pageData.rhineVsDanube.choiceDanube.title}
                bestFor={pageData.rhineVsDanube.choiceRhine.items}
                notBestFor={pageData.rhineVsDanube.choiceDanube.items}
                bottomNote={pageData.rhineVsDanube.note}
            />

            {/* 18. ARE THEY WORTH IT? */}
            <CardGrid
                title={pageData.isItWorthIt.title}
                subtitle={`${pageData.isItWorthIt.subtitle} ${pageData.isItWorthIt.footerNote}`}
                cards={pageData.isItWorthIt.cards}
                columns={4}
            />

            {/* 19. WHO SHOULD CHOOSE */}
            <LuxuryCruiseComparisonTable
                title={pageData.whoShouldChoose.title}
                headers={pageData.whoShouldChoose.headers}
                rows={pageData.whoShouldChoose.rows}
            />

            {/* 20. WHO MAY PREFER ANOTHER LINE */}
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

            {/* 23. EXPERT INSIGHT FROM ANGELA HUGHES */}
            <ExpertCredentials
                name={pageData.expertCredentials.name}
                title={pageData.expertCredentials.title}
                badge={pageData.expertCredentials.badge}
                image={ProfilePictureAH}
                experienceBadge={pageData.expertCredentials.experienceBadge}
                quote={pageData.expertCredentials.quote}
                credentials={pageData.expertCredentials.credentials}
                bio={pageData.expertCredentials.bio}
                ctaText="Schedule a Rhine Consultation"
                ctaLink="/contact"
            />

            {/* 24. WHY PLAN WITH TRIPS & SHIPS */}
            <BrandPillarsShowcase
                data={{
                    title: pageData.whyPlan.title,
                    subtitle: pageData.whyPlan.subtitle,
                    pillars: pageData.whyPlan.pillars
                }}
            />

            {/* 25. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about Celebrity Rhine River Cruises for 2027 and 2028",
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

export default CelebrityRhineRiverCruises