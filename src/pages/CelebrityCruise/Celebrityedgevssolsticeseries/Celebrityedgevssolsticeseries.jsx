import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/Navbar/Navbar'

// Page Data JSON
import pageData from './data.json'

import ComparisonHero from '@/components/ui/ComparisonHero'
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit'
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable'
import GenericChecklistCards from '@/components/ui/GenericChecklistCards'
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid'
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs'
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase'
import ProsConsCards from '@/components/ui/ProsConsCards'
import EditorialIntroSection from '@/components/ui/EditorialIntroSection'
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase'
import ItineraryCards from '@/components/ui/ItineraryCards'
import CabinFeatureGrid from '@/components/ui/CabinFeatureGrid'
import StepByStepGuide from '@/components/ui/StepByStepGuide'
import ExpertCredentials from '@/components/ui/ExpertCredentials'
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CenterCTA from '@/components/ui/CenterCTA'

// Media Assets
import ProfilePictureAH from '@/assets/Media (2).jpg'

const CelebrityEdgeVsSolsticeSeries = () => {
      // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonicalUrl || pageData.seo?.canonical || pageData.meta?.canonicalUrl || pageData.meta?.canonical || 'https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series';
  const pageTitle = pageData.seo?.title || pageData.meta?.title || 'Celebrity Edge Series vs Solstice Series: Which Celebrity Cruise Ships Are Better?';
  const metaTitle = pageData.seo?.metaTitle || pageData.meta?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || pageData.meta?.metaDescription || pageData.meta?.description || 'Compare Celebrity Edge Series vs Solstice Series: cabins, open decks, dining options, entertainment, pricing differences, and traveler recommendations.';

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
          "url": "https://www.tripsandships.com/images/celebrity-edge-vs-solstice.jpg",
          "caption": pageTitle
        },
        "image": "https://www.tripsandships.com/images/celebrity-edge-vs-solstice.jpg",
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
          "Edge Series",
          "Solstice Series",
          "Cruise Ship Comparisons",
          "Staterooms & Verandas",
          "Lawn Club vs Magic Carpet"
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
            "name": "Edge vs Solstice Series",
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

    // 2. Data mapping for Itineraries
    const itineraryItems = pageData.itineraries.cards.map((c, idx) => ({
        title: c.title,
        duration: idx === 0 ? "Tropical Routes" : "European & Global Routes",
        description: `${c.description} ${pageData.itineraries.note}`,
        highlights: c.bullets
    }))

    // 3. Data mapping for Ship Design (Images commented out as requested)
    const shipDesignItems = pageData.shipDesign.cards.map(card => ({
        title: card.title,
        category: card.category || (card.title.includes('Edge') ? "Contemporary Outward-Facing Architecture" : "Timeless Classic Elegance"),
        description: card.description,
        features: card.features || card.items,
        placeholderLabel: card.placeholderLabel || card.title,
        // image: card.image, // Image commented out as requested
    }))

    // 4. Data mapping for Dining Profiles (Images commented out as requested)
    const diningProfiles = (pageData.diningComparison.profiles || []).map(p => ({
        name: p.name,
        tagline: p.tagline,
        quote: p.quote || p.description,
        recommendation: p.recommendation || p.name,
        reason: p.reason || p.description,
        whyFits: p.whyFits || p.items || [],
        // image: p.image, // Image commented out as requested
    }))

    // 5. Data mapping for Entertainment (Images commented out as requested)
    const entertainmentItems = pageData.entertainment.cards.map(card => ({
        title: card.title,
        category: card.category || (card.title.includes('Edge') ? "High-Tech & Immersive Productions" : "Broadway-Style Revues & Live Music"),
        description: card.description,
        bestFor: card.bestFor || (card.items ? card.items.join(" • ") : ""),
        features: card.items,
        // image: card.image, // Image commented out as requested
    }))

    // 6. Data mapping for Pools & Outdoor Spaces (Images commented out as requested)
    const poolsShowcaseData = {
        title: pageData.poolsAndDecks.title,
        subtitle: pageData.poolsAndDecks.subtitle,
        sailing: {
            label: pageData.poolsAndDecks.cards[0]?.title || "Edge Series Outdoor Decks",
            philosophy: pageData.poolsAndDecks.cards[0]?.highlight || pageData.poolsAndDecks.cards[0]?.description || "Contemporary Resort Architecture & Magic Carpet",
            points: pageData.poolsAndDecks.cards[0]?.items || pageData.poolsAndDecks.cards[0]?.tags || []
        },
        allSuite: {
            label: pageData.poolsAndDecks.cards[1]?.title || "Solstice Series Outdoor Decks",
            philosophy: pageData.poolsAndDecks.cards[1]?.highlight || pageData.poolsAndDecks.cards[1]?.description || "Half-Acre Real Grass Lawn Club & Expansive Decks",
            points: pageData.poolsAndDecks.cards[1]?.items || pageData.poolsAndDecks.cards[1]?.tags || []
        },
        verdict: `${pageData.poolsAndDecks.cards[0]?.description || ''} ${pageData.poolsAndDecks.cards[1]?.description || ''}`
    }

    // 7. Data mapping for Which Ship Class Is Best For You (Images commented out as requested)
    const bestForData = {
        title: pageData.whoShouldSail.title,
        subtitle: pageData.whoShouldSail.subtitle,
        oceanview: {
            title: pageData.whoShouldSail.cards[0]?.title || "Choose the Edge Series If You Want:",
            bestFor: pageData.whoShouldSail.cards[0]?.description || "",
            advantages: [
                "Celebrity's newest and most technologically advanced cruise ships",
                "Cutting-edge modern luxury & outward-facing ship architecture",
                "Premium high-tech entertainment and 360-degree immersive theater",
                "The cantilevered Magic Carpet floating lounge scaling 13 decks",
                "Spacious Infinite Veranda staterooms with expanded living space"
            ]
        },
        balcony: {
            title: pageData.whoShouldSail.cards[1]?.title || "Choose the Solstice Series If You Want:",
            bestFor: pageData.whoShouldSail.cards[1]?.description || "",
            advantages: [
                "Traditional step-out outdoor balconies with fresh open sea breezes",
                "Classic, sophisticated cruise ship ambiance and comfortable layout",
                "Half-acre of real manicured green grass at The Lawn Club",
                "Expansive open-air deck spaces and unobstructed wrap-around promenades",
                "Exceptional cruise value with lower entry pricing for premium luxury"
            ]
        }
    }

    return (
        <div className="min-h-screen bg-white text-navy-950">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
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

            {/* 3. AT A GLANCE RATINGS TABLE */}
            <LuxuryCruiseComparisonTable
                title={pageData.glanceTable.title}
                headers={pageData.glanceTable.headers}
                rows={pageData.glanceTable.rows}
            />

            {/* 4. SHIPS INCLUDED */}
            <GenericChecklistCards
                title={pageData.shipsIncluded.title}
                subtitle={pageData.shipsIncluded.subtitle}
                cards={pageData.shipsIncluded.cards}
            />

            {/* 5. SHIP SIZE & SPACE COMPARISON */}
            <LuxuryCruiseComparisonTable
                title={pageData.sizeComparison.title}
                headers={pageData.sizeComparison.headers}
                rows={pageData.sizeComparison.rows}
            />

            {/* 6. SHIP DESIGN & ARCHITECTURAL PHILOSOPHY */}
            <ThreeColumnGrid
                title={pageData.shipDesign.title}
                subtitle={pageData.shipDesign.subtitle}
                items={shipDesignItems}
            />

            {/* 7. INFINITE VERANDAS VS TRADITIONAL BALCONIES */}
            <ProsConsCards
                title={pageData.verandaComparison.title}
                prosTitle={pageData.verandaComparison.prosTitle}
                consTitle={pageData.verandaComparison.consTitle}
                bestFor={pageData.verandaComparison.pros}
                notBestFor={pageData.verandaComparison.cons}
                bottomNote={pageData.verandaComparison.bottomNote}
            />

            {/* 8. DINING COMPARISON */}
            <TravelerProfileTabs
                title={pageData.diningComparison.title}
                subtitle={pageData.diningComparison.subtitle}
                profiles={diningProfiles}
            />

            {/* 9. ENTERTAINMENT */}
            <LuxuryZigZagShowcase
                title={pageData.entertainment.title}
                subtitle={pageData.entertainment.subtitle}
                items={entertainmentItems}
                images={[
                    // EdgeEntertainmentImg, // Image commented out as requested
                    // SolsticeEntertainmentImg, // Image commented out as requested
                ]}
            />

            {/* 10. SUITE EXPERIENCE (THE RETREAT) */}
            <EditorialIntroSection
                heading={pageData.theRetreat.title}
                description={`${pageData.theRetreat.lead}\n\n${pageData.theRetreat.description}\n\n${pageData.theRetreat.footer}`}
                highlights={pageData.theRetreat.features.map(f => typeof f === 'string' ? f : (f.title || f.label || String(f)))}
            />

            {/* 11. POOLS & OUTDOOR SPACES */}
            <DualPhilosophyShowcase
                data={poolsShowcaseData}
                // imageSailing={EdgePoolImg} // Image commented out as requested
                // imageAllSuite={SolsticePoolImg} // Image commented out as requested
            />

            {/* 12. DESTINATIONS */}
            <ItineraryCards
                title={pageData.itineraries.title}
                items={itineraryItems}
            />

            {/* 13. WHAT'S INCLUDED */}
            <ExpertAuthorityChecklist
                title={pageData.inclusions.title}
                subtitle={pageData.inclusions.subtitle}
                points={pageData.inclusions.cards[0].items}
            />

            {/* 14. PROS & CONS (BOTH SERIES) */}
            <ProsConsCards
                title={pageData.prosCons.title}
                prosTitle={pageData.prosCons.prosTitle}
                consTitle={pageData.prosCons.consTitle}
                bestFor={pageData.prosCons.pros}
                notBestFor={pageData.prosCons.cons}
                bottomNote={pageData.prosCons.bottomNote}
            />

            {/* 15. WHICH SHIP CLASS IS BEST FOR YOU? */}
            <CabinFeatureGrid
                data={bestForData}
                // image1={EdgeClassBestForImg} // Image commented out as requested
                // image2={SolsticeClassBestForImg} // Image commented out as requested
            />

            {/* 16. WHY BOOK WITH TRIPS & SHIPS */}
            <StepByStepGuide
                title={pageData.whyBook.title}
                subtitle={pageData.whyBook.subtitle}
                steps={pageData.whyBook.steps.map(s => ({ ...s, description: s.description || s.desc }))}
            />

            {/* 17. ANGELA HUGHES EXPERT INSIGHT */}
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

            {/* 18. FREQUENTLY ASKED QUESTIONS */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know when choosing between Celebrity Edge Series and Solstice Series",
                    questions: pageData.faqs
                }}
            />

            {/* 19. FINAL CALL TO ACTION */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.description}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
            />
        </div>
    )
}

export default CelebrityEdgeVsSolsticeSeries