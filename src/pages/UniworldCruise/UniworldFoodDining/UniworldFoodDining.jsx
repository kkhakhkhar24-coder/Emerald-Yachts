import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching RitzCarltonYachtCollectionCost architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import InclusionsList from '@/components/ui/InclusionsList';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority
import ProfilePictureAH from '@/assets/Media (2).jpg';

// Media Assets from @/assets/UniworldCruise/UniworldFoodDining
import heroBgImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import introPrimaryImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-emilie-dining-room-banquette-seating.webp';
import introSecondaryImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-luxury-cruise-chef-tasting-menu.webp';
import regionalInspirationImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-mediterranean-cruise-destination-inspired-cuisine.webp';
import mainDiningImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-mekong-jewel-main-dining-restaurant.webp';
import inclusionsDiningImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import breakfastImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-emilie-gourmet-culinary-buffet-presentation.webp';
import lunchImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-sao-gabriel-douro-restaurant-lunch-dining.webp';
import dinnerImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-emilie-evening-ambient-dinner-ambiance.webp';
import beveragesImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-luxury-cruise-alcohol-free-beverage-pairing.webp';
import atmosphereImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-luxury-cruise-restaurant-ocean-view.webp';
import ctaBgImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

// Regional Destination Photography from @/assets/UniworldCruise/UniworldFoodDining
import franceImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-bordeaux-cathedrale-saint-andre-france.jpg';
import germanyImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-schloss-vollrads-rheingau-wine-estate-germany.jpg';
import austriaImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-austria-melk-abbey-danube-river-cruise.jpg';
import portugalImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-sao-gabriel-sundeck-douro-valley-vineyard-views.webp';
import italyImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-venice-grand-canal-gondolas-italy.jpg';
import egyptImg from '@/assets/UniworldCruise/UniworldFoodDining/uniworld-river-tosca-nile-cruise-sundeck-observation-terrace.webp';

function UniworldFoodDining() {
    // Destination Image Mapping
    const destinationImages = {
        France: franceImg,
        Germany: germanyImg,
        Austria: austriaImg,
        Portugal: portugalImg,
        Italy: italyImg,
        Egypt: egyptImg
    };

    // 1. Data mapping for Daily Meals (ThreeColumnGrid)
    const threeMeals = [
        {
            title: "Breakfast Options",
            description: `${pageData.dailyMeals.meals[0].lead} ${pageData.dailyMeals.meals[0].description}`,
            features: pageData.dailyMeals.meals[0].offerings,
            image: breakfastImg,
            placeholderLabel: "Uniworld Breakfast Options"
        },
        {
            title: "Lunch Service",
            description: `${pageData.dailyMeals.meals[1].lead} ${pageData.dailyMeals.meals[1].description}`,
            features: pageData.dailyMeals.meals[1].offerings,
            image: lunchImg,
            placeholderLabel: "Uniworld Lunch Service"
        },
        {
            title: "Dinner Highlights",
            description: `${pageData.dailyMeals.meals[2].lead} ${pageData.dailyMeals.meals[2].description}`,
            features: pageData.dailyMeals.meals[2].offerings,
            image: dinnerImg,
            placeholderLabel: "Uniworld Dinner Highlights"
        }
    ];

    // 2. Data mapping for Regional Cuisine by Destination (ThreeColumnGrid)
    const destinationItems = pageData.destinations.list.map(d => ({
        title: d.destination,
        description: d.experience,
        image: destinationImages[d.destination],
        placeholderLabel: `${d.destination} Regional Cuisine`
    }));

    // 3. Data mapping for Dietary & Special Dining Events (CostValueAnalysisCards)
    const dietaryAccommodations = pageData.dietary.options.map(opt => ({
        title: opt,
        description: pageData.dietary.note
    }));

    const specialDiningEvents = pageData.specialEvents.events.map(evt => ({
        title: evt,
        description: pageData.specialEvents.callout
    }));

    // 4. Data mapping for Tips (CurvilinearGrid)
    const tipItems = pageData.tips.strategies.map((tip, idx) => ({
        title: tip.title,
        description: tip.description,
        icon: ['Utensils', 'Coffee', 'Heart', 'Wine', 'Compass', 'Star'][idx % 6]
    }));

    // Structured Data Schema matching reference schema standard
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
                "inLanguage": "en-US",
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp",
                    "caption": "Uniworld Food and Dining Review"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp",
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
                    "caption": "Angela Hughes - Luxury River Cruise Specialist"
                },
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury River Cruises",
                    "Uniworld Boutique River Cruises",
                    "Uniworld Dining & Cuisine",
                    "River Cruise Culinary Experiences",
                    "Wine Pairing & Gourmet Dining"
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
                        "name": "Uniworld River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Food & Dining",
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
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-gold-500 selection:text-white">
            {/* ─── SEO HEAD & SCHEMA ─── */}
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.metaTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageData.seo.ogTitle} />
                <meta property="og:description" content={pageData.seo.ogDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldCruise/UniworldFoodDining/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION ─── */}
                <ComparisonHero
                    badge={pageData.hero.badge}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    description={pageData.hero.description}
                    showReadMore={false}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.lead,
                        pageData.intro.body
                    ]}
                />

                {/* ─── SECTION 3: EXECUTIVE DINING OVERVIEW / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title={pageData.executiveInsight.title}
                        content={pageData.executiveInsight.quote}
                        author={pageData.executiveInsight.author}
                        authorImage={ProfilePictureAH}
                    />
                </div>

                {/* ─── SECTION 4: REGIONAL INSPIRATION ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={regionalInspirationImg}
                    title={pageData.regionalInspiration.title}
                    subtitles={[
                        pageData.regionalInspiration.lead,
                        pageData.regionalInspiration.bodyIntro
                    ]}
                    features={pageData.regionalInspiration.examples.map(ex => ex.item)}
                    summary={pageData.regionalInspiration.callout}
                    ctaText="Explore Itineraries"
                    ctaLink="/uniworld-river-cruises/best-itineraries"
                />

                {/* ─── SECTION 5: MAIN DINING VENUE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={mainDiningImg}
                    title={pageData.mainDining.title}
                    subtitles={[
                        pageData.mainDining.lead,
                        pageData.mainDining.bodyIntro
                    ]}
                    features={pageData.mainDining.pillars}
                    summary={pageData.mainDining.caption}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 6: WHAT IS INCLUDED IN THE DINING EXPERIENCE? ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.items}
                    expertNote={`${pageData.inclusions.intro} ${pageData.inclusions.footnote}`}
                    image={inclusionsDiningImg}
                />

                {/* ─── SECTION 7: DAILY MEAL SERVICES (BREAKFAST, LUNCH, DINNER) ─── */}
                <ThreeColumnGrid
                    title={pageData.dailyMeals.title}
                    subtitle={pageData.dailyMeals.intro}
                    items={threeMeals}
                />

                {/* ─── SECTION 8: REGIONAL CUISINE BY DESTINATION ─── */}
                <ThreeColumnGrid
                    title={pageData.destinations.title}
                    subtitle={pageData.destinations.note}
                    items={destinationItems}
                />

                {/* ─── SECTION 9: BEVERAGES INCLUDED ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={beveragesImg}
                    title={pageData.beverages.title}
                    subtitles={[
                        pageData.beverages.lead,
                        pageData.beverages.bodyIntro
                    ]}
                    features={pageData.beverages.items}
                    summary={pageData.beverages.callout}
                    ctaText="Plan with an Advisor"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: DIETARY ACCOMMODATIONS & SPECIAL DINING EVENTS ─── */}
                <CostValueAnalysisCards
                    title="Dietary Accommodations & Special Dining Events"
                    subtitle="Personalized dietary care and memorable culinary celebrations onboard Uniworld."
                    includedTitle={pageData.dietary.title}
                    extrasTitle={pageData.specialEvents.title}
                    included={dietaryAccommodations}
                    extras={specialDiningEvents}
                />

                {/* ─── SECTION 11: DINING ATMOSPHERE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={atmosphereImg}
                    title={pageData.atmosphere.title}
                    subtitles={[
                        pageData.atmosphere.lead,
                        pageData.atmosphere.bodyIntro
                    ]}
                    features={pageData.atmosphere.pillars}
                    summary={pageData.atmosphere.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 12: HOW UNIWORLD DINING COMPARES (COMPARISON TABLE) ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.comparison.title}
                    headers={pageData.comparison.headers}
                    rows={pageData.comparison.rows.map(r => [r.feature, r.uniworld, r.typical])}
                />

                {/* ─── SECTION 13: TIPS FOR ENJOYING THE DINING EXPERIENCE ─── */}
                <CurvilinearGrid
                    title={pageData.tips.title}
                    subtitle={pageData.tips.eyebrow}
                    paragraphs={[
                        pageData.tips.intro,
                        pageData.comparison.description
                    ]}
                    items={tipItems}
                />

                {/* ─── SECTION 14: KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.keyTakeaways.title,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 15: INSIGHT FROM ANGELA HUGHES (EXPERT CREDENTIALS) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge={pageData.expertInsight.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.quote}
                    quoteSubtitle={pageData.expertInsight.title}
                    bio={pageData.expertInsight.bio}
                    credentials={pageData.expertInsight.priorities}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld Boutique River Cruises gourmet dining, menus, wine, and inclusions.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CENTER CTA ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.subtitle}
                    buttonText={pageData.cta.primaryCtaText}
                    buttonLink={pageData.cta.primaryCtaLink}
                    image={ctaBgImg}
                />
            </main>

            {/* Global Footer Navigation */}
            <Navbar />
        </div>
    );
}

export default UniworldFoodDining;