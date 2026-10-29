import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

// Shared UI Components
import ComparisonHero from '@/components/ui/ComparisonHero'
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit'
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable'
import AuthorityGrid from '@/components/ui/AuthorityGrid'
import CurvilinearGrid from '@/components/ui/CurvilinearGrid'
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid'
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist'
import InclusionsList from '@/components/ui/InclusionsList'
import CardGrid from '@/components/ui/CardGrid'
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase'
import SoloCabinShowcase from '@/components/ui/SoloCabinShowcase'
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase'
import ProsConsCards from '@/components/ui/ProsConsCards'
import FeatureGrid from '@/components/ui/FeatureGrid'
import StepByStepGuide from '@/components/ui/StepByStepGuide'
import ExpertCredentials from '@/components/ui/ExpertCredentials'
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CenterCTA from '@/components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '@/assets/Media (2).jpg'

const CelebrityRhineRiverCruises = () => {
      // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonicalUrl || pageData.seo?.canonical || pageData.meta?.canonicalUrl || pageData.meta?.canonical || 'https://www.tripsandships.com/celebrity-cruises/river-cruises/rhine';
  const pageTitle = pageData.seo?.title || pageData.meta?.title || 'Celebrity Rhine River Cruises: Routes, Ports & More';
  const metaTitle = pageData.seo?.metaTitle || pageData.meta?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || pageData.meta?.metaDescription || pageData.meta?.description || 'Complete guide to Celebrity Rhine River Cruises: Amsterdam to Basel, Rhine Gorge castles, Strasbourg, Cologne, included excursions, and season pricing.';

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
          "url": "https://www.tripsandships.com/images/celebrity-rhine-river-cruises.jpg",
          "caption": pageTitle
        },
        "image": "https://www.tripsandships.com/images/celebrity-rhine-river-cruises.jpg",
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
          "Rhine River Cruises",
          "Castles & Vineyards",
          "Amsterdam to Basel",
          "River Cruise Planning"
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
            "item": "https://www.tripsandships.com/celebrity-cruises/river-cruises"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Rhine River Cruises",
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

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
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
                ctaLink="/celebrity-cruises/why-book-with-us"
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