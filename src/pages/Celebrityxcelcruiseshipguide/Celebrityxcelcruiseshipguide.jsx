import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components from /src/components/ui/
import ComparisonHero from '../../components/ui/ComparisonHero'
import BentoQuickFacts from '../../components/ui/BentoQuickFacts'
import FeatureSplit from '../../components/ui/FeatureSplit'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import CardGrid from '../../components/ui/CardGrid'
import TravelerProfileTabs from '../../components/ui/TravelerProfileTabs'
import FeatureGrid from '../../components/ui/FeatureGrid'
import IconGrid from '../../components/ui/IconGrid'
import LuxuryCruiseComparisonTable from '../../components/ui/LuxuryCruiseComparisonTable'
import GenericChecklistCards from '../../components/ui/GenericChecklistCards'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import InclusionsList from '../../components/ui/InclusionsList'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ItineraryCards from '../../components/ui/ItineraryCards'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import BentoGlassmorphismGrid from '../../components/ui/BentoGlassmorphismGrid'
import ExpertRulesGrid from '../../components/ui/ExpertRulesGrid'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'

// Media Assets
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
// import caribbeanImg from '../../assets/HomePage/HomePage3.jpg'
// import europeImg from '../../assets/AzamaraMediterraneanCruises/Marseilles_122.webp'
// import assessmentImage from '../../assets/Media (1).jpg'

const Celebrityxcelcruiseshipguide = () => {
    // 1. JSON-LD Structured Data Schema
    const cxSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips and Ships",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#webpage",
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": pageData.seo.canonicalUrl
                },
                "isPartOf": {
                    "@id": "https://www.tripsandships.com#organization"
                },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#article",
                "headline": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": pageData.seo.canonicalUrl
                },
                "author": {
                    "@type": "Organization",
                    "name": "Trips and Ships",
                    "url": "https://www.tripsandships.com"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com#organization"
                },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises Ships", "item": "https://www.tripsandships.com/celebrity-cruises/ships/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Xcel", "item": pageData.seo.canonicalUrl }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#faq",
                "mainEntity": pageData.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    }

    // 2. Data mapping for Quick Facts
    const glanceItems = pageData.atAGlance.items.map(item => ({
        title: item.title,
        label: item.title,
        description: item.detail,
        value: item.detail
    }))

    // 3. Data mapping for Cabins & Suites
    const cabinCards = pageData.cabinsAndSuites.cards.map(c => ({
        title: c.title,
        category: c.category,
        description: c.description,
        features: c.features,
        placeholderLabel: c.title
    }))

    // 4. Data mapping for Stateroom Features checklist
    const stateroomChecklistCards = [
        {
            title: pageData.cabinsAndSuites.stateroomFeatures.title,
            items: pageData.cabinsAndSuites.stateroomFeatures.items
        },
        {
            title: "Suite Category & Deck Tips",
            items: [
                pageData.cabinsAndSuites.stateroomFeatures.tip,
                "Check whether your stateroom is located directly beneath active pool decks or dining venues.",
                "Infinite Veranda cabins expand usable interior space by up to 23% with automatic glass partitioning."
            ]
        }
    ]

    // 5. Data mapping for Specialty Dining checklist
    const specialtyDiningCards = [
        {
            title: pageData.dining.specialtyDining.title,
            items: pageData.dining.specialtyDining.items
        },
        {
            title: "Beverage Package Planning Advice",
            items: [
                pageData.barsAndLounges.beverageTip,
                "Pre-booking specialty dining packages and drink packages prior to embarkation often provides promotional savings.",
                "Complimentary dining includes four main dining options, Oceanview Café marketplace, and poolside Mast Grill."
            ]
        }
    ]

    // 6. Data mapping for Dining Profiles
    const diningProfiles = pageData.dining.profiles.map(p => ({
        name: p.name,
        tagline: p.tagline,
        quote: p.quote || p.description,
        recommendation: p.recommendation || p.name,
        reason: p.reason || p.description,
        whyFits: p.whyFits || p.experiences || []
    }))

    // 7. Data mapping for Things to Do Featured Highlights
    const thingsToDoFeatured = pageData.thingsToDo.featuredHighlights.map(item => ({
        title: item.title,
        description: item.description
    }))

    // 8. Data mapping for Itineraries
    const itineraryItems = [
        {
            title: pageData.itineraries.cards[0].title,
            duration: "Caribbean Routes",
            description: `${pageData.itineraries.cards[0].description} ${pageData.itineraries.tip}`,
            highlights: pageData.itineraries.cards[0].bullets,
            // image: caribbeanImg
        },
        {
            title: pageData.itineraries.cards[1].title,
            duration: "European Routes",
            description: `${pageData.itineraries.cards[1].description} ${pageData.itineraries.tip}`,
            highlights: pageData.itineraries.cards[1].bullets,
            // image: europeImg
        }
    ]

    // 9. Data mapping for Fleet Comparison Table (ensure array of arrays)
    const comparisonRows = (pageData.fleetComparison?.rows || []).map(r =>
        Array.isArray(r) ? r : [r.col1 || r.ship || '', r.col2 || r.position || '', r.col3 || r.point || '']
    )

    return (
        <div className="min-h-screen bg-white text-navy-950">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(cxSchemaData)}</script>
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
            />

            {/* 2. SHIP OVERVIEW / AT A GLANCE */}
            <BentoQuickFacts
                title={pageData.atAGlance.title}
                paragraphs={pageData.atAGlance.paragraphs}
                items={glanceItems}
            />

            {/* 3. WHAT MAKES XCEL DIFFERENT */}
            <EditorialIntroSplit
                eyebrow="EDGE SERIES EVOLUTION"
                heading={pageData.whatMakesDifferent.title}
                paragraphs={[
                    pageData.whatMakesDifferent.subtitles[0],
                    `${pageData.whatMakesDifferent.subtitles[1]} ${pageData.whatMakesDifferent.features.join(' • ')}`,
                    pageData.whatMakesDifferent.summary
                ]}
                // primaryImage={xcelPrimaryImg}
                // secondaryImage={xcelSecondaryImg}
            />

            {/* 4. CABINS AND SUITES */}
            <ThreeColumnGrid
                title={pageData.cabinsAndSuites.title}
                subtitle={pageData.cabinsAndSuites.subtitle}
                items={cabinCards}
            />

            {/* 5. STATEROOM EXPECTATIONS & TIPS */}
            <GenericChecklistCards
                title="Stateroom Amenities & Expectations"
                subtitle="WHAT TO EXPECT ONBOARD"
                cards={stateroomChecklistCards}
            />

            {/* 6. DECK PLANS & NAVIGATION */}
            <CardGrid
                title={pageData.deckPlans.title}
                subtitle={pageData.deckPlans.subtitle}
                cards={pageData.deckPlans.cards}
                columns={4}
            />

            {/* 7. CHOOSING THE BEST CABIN */}
            <ExpertRulesGrid
                title={pageData.cabinSelectionGuide.title}
                subtitle={pageData.cabinSelectionGuide.subtitle}
                rules={pageData.cabinSelectionGuide.cards}
            />

            {/* 8. DINING EXPERIENCES (TABBED) */}
            <TravelerProfileTabs
                title={pageData.dining.title}
                subtitle={pageData.dining.subtitle}
                profiles={diningProfiles}
            />

            {/* 9. SPECIALTY DINING & BEVERAGE ADVICE */}
            <GenericChecklistCards
                title="Specialty Dining & Beverage Options"
                subtitle="CULINARY & DRINK HIGHLIGHTS"
                cards={specialtyDiningCards}
            />

            {/* 10. BARS, LOUNGES AND DRINKS */}
            <IconGrid
                title={pageData.barsAndLounges.title}
                subtitle={pageData.barsAndLounges.subtitle}
                items={pageData.barsAndLounges.cards}
            />

            {/* 11. THINGS TO DO ONBOARD */}
            <FeatureGrid
                title={pageData.thingsToDo.title}
                subtitle={pageData.thingsToDo.subtitle}
                features={thingsToDoFeatured}
                bgClass="bg-white"
            />

            {/* 12. ONBOARD ACTIVITIES BENTO GRID */}
            <BentoGlassmorphismGrid
                title="Signature Experiences & Spaces"
                subtitle="Explore cutting-edge features designed to connect you closer to the sea across all 17 decks."
                bentoItems={pageData.thingsToDo.activityCards}
            />

            {/* 13. ENTERTAINMENT */}
            <EditorialIntroSection
                heading={pageData.entertainment.title}
                description={`${pageData.entertainment.subtitles.join('\n\n')}\n\n${pageData.entertainment.summary}`}
                highlights={pageData.entertainment.features}
                // image={entertainmentImage}
            />

            {/* 14. ITINERARIES (CARIBBEAN & EUROPE) */}
            <ItineraryCards
                title={pageData.itineraries.title}
                items={itineraryItems}
            />

            {/* 15. WHO IS CELEBRITY XCEL BEST SUITED FOR */}
            <CardGrid
                title={pageData.whoIsItFor.title}
                subtitle={pageData.whoIsItFor.subtitle}
                cards={pageData.whoIsItFor.cards}
                columns={3}
            />

            {/* 16. FLEET COMPARISON TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.fleetComparison.title}
                headers={pageData.fleetComparison.headers}
                rows={comparisonRows}
            />

            {/* 17. PLANNING FACTORS BEFORE YOU BOOK */}
            <StepByStepGuide
                title={pageData.planningFactors.title}
                subtitle={pageData.planningFactors.subtitle}
                steps={pageData.planningFactors.cards}
            />

            {/* 18. FINAL ASSESSMENT */}
            <InclusionsList
                title={pageData.finalAssessment.title}
                // image={assessmentImage}
                expertNote={`${pageData.finalAssessment.subtitles.join(' ')} ${pageData.finalAssessment.summary}`}
                inclusions={pageData.finalAssessment.features}
            />

            {/* 19. ANGELA HUGHES EXPERT INSIGHT & CREDENTIALS */}
            <ExpertCredentials
                name={pageData.expertCredentials.name}
                title={pageData.expertCredentials.title}
                image={Profile_AH}
                badge={pageData.expertCredentials.badge}
                experienceBadge={pageData.expertCredentials.experienceBadge}
                quote={pageData.expertCredentials.quote}
                credentials={pageData.expertCredentials.credentials}
                bio={pageData.expertCredentials.bio}
                ctaText="Speak with Angela Hughes"
                ctaLink="/contact"
            />

            {/* 20. KEY TAKEAWAYS */}
            <CurvilinearGrid
                title={pageData.keyTakeaways.title}
                subtitle={pageData.keyTakeaways.subtitle}
                items={pageData.keyTakeaways.cards}
            />

            {/* 21. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions About Celebrity Xcel",
                    subtitle: "Everything you need to know before planning and booking your voyage",
                    questions: pageData.faqs
                }}
            />

            {/* 22. BOTTOM CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
            />
        </div>
    )
}

export default Celebrityxcelcruiseshipguide