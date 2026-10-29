import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '@/components/ui/ComparisonHero'
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit'
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable'
import EditorialIntroSection from '@/components/ui/EditorialIntroSection'
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid'
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase'
import ProsConsCards from '@/components/ui/ProsConsCards'
import ItineraryCards from '@/components/ui/ItineraryCards'
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist'
import CurvilinearGrid from '@/components/ui/CurvilinearGrid'
import CardGrid from '@/components/ui/CardGrid'
import SoloCabinShowcase from '@/components/ui/SoloCabinShowcase'
import AuthorityGrid from '@/components/ui/AuthorityGrid'
import FeatureGrid from '@/components/ui/FeatureGrid'
import StepByStepGuide from '@/components/ui/StepByStepGuide'
import ExpertCredentials from '@/components/ui/ExpertCredentials'
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase'
import InclusionsList from '@/components/ui/InclusionsList'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CenterCTA from '@/components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '@/assets/Media (2).jpg'

const CelebrityRiverCruises = () => {
      // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonicalUrl || pageData.seo?.canonical || pageData.meta?.canonicalUrl || pageData.meta?.canonical || 'https://www.tripsandships.com/celebrity-cruises/river-cruises';
  const pageTitle = pageData.seo?.title || pageData.meta?.title || 'Celebrity River Cruises 2027 & 2028: Ships, Routes & What\'s Included';
  const metaTitle = pageData.seo?.metaTitle || pageData.meta?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || pageData.meta?.metaDescription || pageData.meta?.description || 'Explore Celebrity River Cruises on the Rhine and Danube for 2027-2028: boutique vessels, included shore excursions, destination dining, and route guides.';

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metaTitle,
        "headline": pageTitle,
        "description": metaDescription,
        "inLanguage": "en-US",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/images/celebrity-river-cruises.jpg",
          "caption": pageTitle
        },
        "image": "https://www.tripsandships.com/images/celebrity-river-cruises.jpg",
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
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Celebrity Cruises",
          "River Cruising",
          "European River Cruises",
          "Rhine River",
          "Danube River",
          "Luxury River Ships"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "River Cruises",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": (Array.isArray(pageData.faqs) ? pageData.faqs : (pageData.faqs?.questions || [])).map(faq => ({
          "@type": "Question",
          "name": (faq.question || faq.q || "").replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer || faq.a || ""
          }
        }))
      }
    ]
  };

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
                <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
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
                ctaLink="/celebrity-cruises/why-book-with-us"
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