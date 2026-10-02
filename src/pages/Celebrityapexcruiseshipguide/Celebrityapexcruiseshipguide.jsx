import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components from /src/components/ui/
import ComparisonHero from '../../components/ui/ComparisonHero'
import BentoQuickFacts from '../../components/ui/BentoQuickFacts'
import EditorialIntroSplit from '../../components/ui/EditorialIntroSplit'
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid'
import GenericChecklistCards from '../../components/ui/GenericChecklistCards'
import CardGrid from '../../components/ui/CardGrid'
import TravelerProfileTabs from '../../components/ui/TravelerProfileTabs'
import EditorialIntroSection from '../../components/ui/EditorialIntroSection'
import BentoGlassmorphismGrid from '../../components/ui/BentoGlassmorphismGrid'
import FeatureGrid from '../../components/ui/FeatureGrid'
import CurvilinearGrid from '../../components/ui/CurvilinearGrid'
import ItineraryCards from '../../components/ui/ItineraryCards'
import ProsConsCards from '../../components/ui/ProsConsCards'
import StepByStepGuide from '../../components/ui/StepByStepGuide'
import ExpertCredentials from '../../components/ui/ExpertCredentials'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CenterCTA from '../../components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '../../assets/Media (2).jpg'

const CelebrityApexCruiseShipGuide = () => {
    // 1. JSON-LD Structured Data Schema
    const ceapSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex#webpage",
                "name": pageData.seo.title,
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex#article"
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "Founder & CEO",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-apex#article",
                "headline": pageData.seo.title,
                "url": pageData.seo.canonicalUrl,
                "description": pageData.seo.metaDescription,
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
                "name": "Luxury Celebrity Cruise Planning Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Celebrity Cruises planning services helping travelers compare ships, choose cabins, select itineraries, and receive personalized cruise planning."
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
                        "name": "Celebrity Cruises",
                        "item": "https://www.tripsandships.com/celebrity-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Ships",
                        "item": "https://www.tripsandships.com/celebrity-cruises/ships"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": pageData.seo.title,
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

    // 2. Data mapping for Quick Facts
    const glanceItems = pageData.atAGlance.items.map(item => ({
        title: item.title,
        label: item.title,
        description: item.detail,
        value: item.detail
    }))

    // 3. Data mapping for Cabins & Suites
    const cabinCards = pageData.cabins.cards.map(c => ({
        title: c.title,
        category: c.category,
        description: c.description,
        features: c.features,
        placeholderLabel: c.title
    }))

    // 4. Data mapping for Dining Profiles
    const diningProfiles = pageData.dining.profiles.map(p => ({
        name: p.name,
        tagline: p.tagline,
        quote: p.quote || p.description,
        recommendation: p.recommendation || p.name,
        reason: p.reason || p.description,
        whyFits: p.whyFits || []
    }))

    // 5. Data mapping for Itineraries
    const itineraryItems = [
        {
            title: pageData.itineraries.cards[0].title,
            duration: "European Routes",
            description: `${pageData.itineraries.cards[0].description} ${pageData.itineraries.note}`,
            highlights: pageData.itineraries.cards[0].bullets
        },
        {
            title: pageData.itineraries.cards[1].title,
            duration: "Caribbean Routes",
            description: `${pageData.itineraries.cards[1].description} ${pageData.itineraries.note}`,
            highlights: pageData.itineraries.cards[1].bullets
        }
    ]

    return (
        <div className="min-h-screen bg-white text-navy-950">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(ceapSchemaData)}</script>
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

            {/* 2. DISCOVER CELEBRITY APEX & QUICK ANSWER */}
            <EditorialIntroSplit
                eyebrow={pageData.editorialIntro.eyebrow}
                heading={pageData.editorialIntro.heading}
                paragraphs={pageData.editorialIntro.paragraphs}
            />

            {/* 3. AT A GLANCE / SHIP OVERVIEW */}
            <BentoQuickFacts
                title={pageData.atAGlance.title}
                paragraphs={pageData.atAGlance.paragraphs}
                items={glanceItems}
            />

            {/* 4. WHY SAIL ON CELEBRITY APEX? */}
            <BentoGlassmorphismGrid
                title={pageData.whySail.title}
                subtitle={pageData.whySail.subtitle}
                bentoItems={pageData.whySail.cards}
            />

            {/* 5. ACCOMMODATIONS (CABINS & SUITES) */}
            <ThreeColumnGrid
                title={pageData.cabins.title}
                subtitle={pageData.cabins.subtitle}
                items={cabinCards}
            />

            {/* 6. THE RETREAT SUITE EXPERIENCE */}
            <EditorialIntroSection
                heading={pageData.theRetreat.title}
                description={`${pageData.theRetreat.lead}\n\n${pageData.theRetreat.description}\n\n${pageData.theRetreat.footer}`}
                highlights={pageData.theRetreat.features}
            />

            {/* 7. RESTAURANTS & DINING */}
            <TravelerProfileTabs
                title={pageData.dining.title}
                subtitle={pageData.dining.subtitle}
                profiles={diningProfiles}
            />

            {/* 8. SIGNATURE VENUES: MAGIC CARPET & EDEN */}
            <GenericChecklistCards
                title={pageData.signatureVenues.title}
                subtitle={pageData.signatureVenues.subtitle}
                cards={pageData.signatureVenues.cards}
            />

            {/* 9. ENTERTAINMENT */}
            <CurvilinearGrid
                title={pageData.entertainment.title}
                subtitle={pageData.entertainment.subtitle}
                items={pageData.entertainment.items}
            />

            {/* 10. POOLS, SPA & WELLNESS */}
            <FeatureGrid
                title={pageData.wellness.title}
                subtitle={pageData.wellness.subtitle}
                features={pageData.wellness.items}
                bgClass="bg-white"
            />

            {/* 11. EUROPE & CARIBBEAN SAILINGS */}
            <ItineraryCards
                title={pageData.itineraries.title}
                items={itineraryItems}
            />

            {/* 12. WHAT'S INCLUDED */}
            <GenericChecklistCards
                title={pageData.inclusions.title}
                subtitle={pageData.inclusions.subtitle}
                cards={pageData.inclusions.cards}
            />

            {/* 13. PROS & CONS */}
            <ProsConsCards
                title={pageData.prosCons.title}
                prosTitle={pageData.prosCons.prosTitle}
                consTitle={pageData.prosCons.consTitle}
                bestFor={pageData.prosCons.pros}
                notBestFor={pageData.prosCons.cons}
                bottomNote={pageData.prosCons.bottomNote}
            />

            {/* 14. WHO SHOULD SAIL */}
            <CardGrid
                title={pageData.whoShouldSail.title}
                subtitle={pageData.whoShouldSail.subtitle}
                cards={pageData.whoShouldSail.cards}
                columns={4}
            />

            {/* 15. WHY BOOK WITH TRIPS & SHIPS */}
            <StepByStepGuide
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                steps={pageData.whyBook.steps}
            />

            {/* 16. ANGELA HUGHES EXPERT INSIGHT */}
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

            {/* 17. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know before booking your Celebrity Apex cruise",
                    questions: pageData.faqs
                }}
            />

            {/* 18. CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
            />
        </div>
    )
}

export default CelebrityApexCruiseShipGuide