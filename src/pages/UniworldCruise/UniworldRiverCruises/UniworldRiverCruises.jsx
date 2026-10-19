import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../../components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '../../../components/ui/ComparisonHero'
import EditorialIntroSplit from '../../../components/ui/EditorialIntroSplit'
import AuthorityGrid from '../../../components/ui/AuthorityGrid'
import ThreeColumnGrid from '../../../components/ui/ThreeColumnGrid'
import LuxuryCruiseComparisonTable from '../../../components/ui/LuxuryCruiseComparisonTable'
import SoloCabinShowcase from '../../../components/ui/SoloCabinShowcase'
import FeatureGrid from '../../../components/ui/FeatureGrid'
import CurvilinearGrid from '../../../components/ui/CurvilinearGrid'
import InclusionsList from '../../../components/ui/InclusionsList'
import CardGrid from '../../../components/ui/CardGrid'
import EditorialIntroSection from '../../../components/ui/EditorialIntroSection'
import StepByStepGuide from '../../../components/ui/StepByStepGuide'
import ExpertAuthorityChecklist from '../../../components/ui/ExpertAuthorityChecklist'
import ConclusionSection from '../../../components/ui/ConclusionSection'
import ExpertCredentials from '../../../components/ui/ExpertCredentials'
import FAQAccordion from '../../../components/ui/FAQAccordion'
import CenterCTA from '../../../components/ui/CenterCTA'

// Media Assets
import Profile_AH from '../../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Media Assets - UniworldRiverCruises
import heroBgImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-river-queen-scenic-rhine-river-valley-cruise.webp'
import introPrimaryImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-ss-emilie-luxury-salon-lounge.webp'
import introSecondaryImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp'

// Destinations
import destEuropeImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-ss-maria-theresa-sailing-past-budapest-parliament.webp'
import destEgyptImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-river-tosca-nile-cruise-sundeck-observation-terrace.webp'
import destPeruImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-aria-amazon-peruvian-jungle-scenic-navigation.webp'
import destMekongImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-mekong-jewel-top-sun-deck-mekong-river.webp'

// Cabins & Suites
import cabinClassicImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-classic-river-stateroom-cabin-rendering.jpeg'
import cabinDeluxeImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-river-princess-classic-stateroom-interior.webp'
import cabinFrenchBalconyImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-french-balcony-stateroom-interior-rendering.webp'
import cabinSuitesImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-presidential-royal-suite-bedroom-rendering.jpeg'

// Inclusions & Dining
import inclusionsDiningImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-super-ship-gourmet-restaurant-rendering.jpeg'

// Shore Excursions (100% verified matches according to headings)
import excursionWalkingImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-rothenburg-ob-der-tauber-medieval-village-germany.jpg'
import excursionMuseumImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-wurzburg-residence-baroque-architecture-germany.jpg'
import excursionCastleImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-burg-rheinstein-rhine-river-valley-germany.jpg'
import excursionCulinaryImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-european-vineyard-culinary-tasting-experience.webp'
import excursionVillageImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-miltenberg-historic-timber-framed-village-germany.jpg'
import excursionMarketImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-nuremberg-christmas-market-christkindlesmarkt-germany.jpg'

// Pricing & Value
import pricingImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-ss-emilie-restaurant-table-setting-decor.webp'

// Final CTA
import ctaBgImg from '../../../assets/UniworldCruise/UniworldRiverCruises/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp'

function UniworldRiverCruises() {
    // 6-Entity Structured Data Schema matching RitzCarltonYachtCollectionCost pattern
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
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/uniworld-river-cruises.jpg",
                    "caption": "Uniworld River Cruises: The Complete Guide"
                },
                "image": "https://www.tripsandships.com/images/uniworld-river-cruises.jpg",
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
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury river cruise authority.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "European River Cruising",
                    "Uniworld Boutique River Cruises",
                    "All-Inclusive Luxury Cruises",
                    "World River Itineraries"
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
                        "name": "River Cruises",
                        "item": "https://www.tripsandships.com/river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Uniworld River Cruises",
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

    // Destination items mapped with authentic destination assets & clean placeholders
    const destinationImages = [
        destEuropeImg, // 0. Europe
        destEgyptImg,  // 1. Egypt
        null,          // 2. India (Placeholder - per user request image did not match)
        destPeruImg,   // 3. Peru
        destMekongImg  // 4. Vietnam & Cambodia
    ]

    const destinationItems = pageData.destinations.items.map((item, idx) => ({
        ...item,
        image: destinationImages[idx]
    }))

    // Cabin showcase image array
    const cabinImages = [
        cabinClassicImg,
        cabinDeluxeImg,
        cabinFrenchBalconyImg,
        cabinSuitesImg
    ]

    // Shore excursion items mapped with 100% heading-matched assets & clean placeholders
    const excursionImages = [
        excursionWalkingImg,   // 0. Guided Walking Tours (Rothenburg ob der Tauber walking tour)
        excursionMuseumImg,    // 1. Museum Visits (Würzburg Residence baroque art gallery tour)
        excursionCastleImg,    // 2. Castle Tours (Burg Rheinstein medieval cliffside castle)
        excursionCulinaryImg,  // 3. Culinary Experiences (European vineyard regional food & wine tasting)
        null,                  // 4. Wine Tastings (Placeholder - per user request image did not match)
        null,                  // 5. Guided Bike Tours (Placeholder - no authentic cycling asset exists)
        excursionVillageImg,   // 6. Fairytale Village Visits (Miltenberg historic timber-framed village)
        null,                  // 7. Cultural Performances (Placeholder - no authentic concert asset exists)
        excursionMarketImg     // 8. Local Market Tours (Nuremberg Christkindlesmarkt artisan market)
    ]

    const excursionItems = pageData.excursions.items.map((item, idx) => ({
        ...item,
        image: excursionImages[idx]
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
                description={pageData.hero.description}
                primaryCtaText={pageData.hero.primaryCtaText}
                primaryCtaLink={pageData.hero.primaryCtaLink}
                secondaryCtaText={pageData.hero.secondaryCtaText}
                secondaryCtaLink={pageData.hero.secondaryCtaLink}
                backgroundImage={heroBgImg}
            />

            {/* 2. THE UNIWORLD DIFFERENCE */}
            <EditorialIntroSplit
                eyebrow={pageData.theDifference.eyebrow}
                heading={pageData.theDifference.heading}
                paragraphs={pageData.theDifference.paragraphs}
                primaryImage={introPrimaryImg}
                secondaryImage={introSecondaryImg}
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
                images={cabinImages}
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
                image={inclusionsDiningImg}
            />

            {/* 10. SHORE EXCURSIONS */}
            <ThreeColumnGrid
                title={pageData.excursions.title}
                subtitle={`${pageData.excursions.subtitle} ${pageData.excursions.statement}`}
                items={excursionItems}
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
                image={pricingImg}
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
                image={ctaBgImg}
            />
        </div>
    )
}

export default UniworldRiverCruises
