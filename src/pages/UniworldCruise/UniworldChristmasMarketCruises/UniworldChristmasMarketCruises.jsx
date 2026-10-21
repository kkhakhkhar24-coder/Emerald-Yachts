import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Exclusively from @/components/ui matching Uniworld architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import InclusionsList from '@/components/ui/InclusionsList';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Profile Picture for Expert Authority and Insider Tip
import ProfilePictureAH from '@/assets/Media (2).jpg';
import insiderTipImg from '@/assets/image.jpg';

// Media Assets from @/assets/UniworldCruise/UniworldChristmasMarketCruises
import heroBgImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-nuremberg-christmas-market-christkindlesmarkt-germany.jpg';
import introPrimaryImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-rothenburg-christmas-village-market-germany.jpg';
import introSecondaryImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-budapest-illuminated-night-cruise-danube-hungary.jpg';
import specialExperienceImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-ss-maria-theresa-holiday-christmas-lobby-atrium.webp';
import seasonalFoodImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-mediterranean-cruise-destination-inspired-cuisine.webp';
import includedExperiencesImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-river-tosca-sundeck-swimming-pool-nile-river.webp';
import ctaBgImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-ss-bon-voyage-sunset-golden-hour-libourne.webp';

// Guest Persona Images
import couplesImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-river-tosca-egypt-sundeck-cushioned-daybeds.webp';
import multigenerationalImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-regensburg-bavarian-hops-farm-excursion-germany.jpg';
import soloTravelersImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-wurzburg-residence-palace-exterior-germany.jpg';
import photographyImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-ss-la-venezia-sundeck-panoramic-venice-view.webp';
import foodWineImg from '@/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-ss-beatrice-open-air-sundeck-terrace-seating.webp';

function UniworldChristmasMarketCruises() {
    // 1. Data mapping for Itineraries (ThreeColumnGrid) - image: null renders clean placeholders as routes don't have matching winter market assets
    const itineraryItems = pageData.itineraries.items.map(item => ({
        title: item.river,
        description: item.tag,
        features: item.highlights,
        image: null,
        category: "Holiday Route",
        placeholderLabel: item.river
    }));

    // 2. Data mapping for Ideal Guests (ThreeColumnGrid)
    const guestImages = {
        "Couples & Romantics": couplesImg,
        "Multigenerational Families": multigenerationalImg,
        "Solo Travelers": soloTravelersImg,
        "Photography Enthusiasts": photographyImg,
        "Holiday Shoppers & Collectors": null,
        "Food & Wine Lovers": foodWineImg
    };

    const guestItems = pageData.idealGuests.items.map(item => ({
        title: item.title,
        description: item.description,
        features: [],
        category: item.tag,
        image: guestImages[item.title] ?? null,
        placeholderLabel: item.title
    }));

    // 3. Data mapping for Why Choose (BrandPillarsShowcase)
    const whyChooseData = {
        title: pageData.whyChoose.title,
        subtitle: pageData.whyChoose.subtitle,
        pillars: pageData.whyChoose.pillars
    };

    // 4. Structured Data Schema matching exact RitzCarlton and Uniworld standards (no trailing slashes)
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
                    "url": "https://www.tripsandships.com/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-nuremberg-christmas-market-christkindlesmarkt-germany.jpg",
                    "caption": "Uniworld Christmas Market River Cruises"
                },
                "image": "https://www.tripsandships.com/assets/UniworldCruise/UniworldChristmasMarketCruises/uniworld-nuremberg-christmas-market-christkindlesmarkt-germany.jpg",
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
                    "European Christmas Market Cruises",
                    "Danube Christmas Markets",
                    "Rhine Christmas Markets"
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
                        "name": "Christmas Market Cruises",
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
        <div className="min-h-screen bg-white">
            {/* SEO and Schema Tags */}
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
                    bgPosition="bg-center"
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
                        ...pageData.intro.paragraphs
                    ]}
                />

                {/* ─── SECTION 3: EXECUTIVE INSIGHT / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <AuthorityBox
                        title="Insider Tip"
                        content={pageData.executiveInsight.quote}
                        author={`${pageData.executiveInsight.author}, ${pageData.executiveInsight.role}`}
                        authorImage={insiderTipImg}
                    />
                </div>

                {/* ─── SECTION 4: WHY CHOOSE A CHRISTMAS MARKET CRUISE ─── */}
                <BrandPillarsShowcase data={whyChooseData} />

                {/* ─── SECTION 5: WHAT MAKES UNIWORLD CHRISTMAS CRUISES SPECIAL ─── */}
                <EditorialFeatureShowcase
                    eyebrow={pageData.specialExperience.eyebrow}
                    title={pageData.specialExperience.title}
                    subtitle={pageData.specialExperience.subtitle}
                    features={pageData.specialExperience.features}
                    image={specialExperienceImg}
                    imageAlt="Uniworld Christmas Holiday Experience Onboard"
                    callout={pageData.specialExperience.callout}
                />

                {/* ─── SECTION 6: BEST CHRISTMAS MARKET ITINERARIES ─── */}
                <div id="itineraries">
                    <ThreeColumnGrid
                        title={pageData.itineraries.title}
                        subtitle={pageData.itineraries.subtitle}
                        items={itineraryItems}
                    />
                </div>

                {/* ─── SECTION 7: FAMOUS CHRISTMAS MARKETS TABLE ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.marketsTable.title}
                    headers={pageData.marketsTable.headers}
                    rows={pageData.marketsTable.rows}
                />

                {/* ─── SECTION 8: SEASONAL FOOD AND DRINKS ─── */}
                <InclusionsList
                    title={pageData.seasonalFood.title}
                    inclusions={pageData.seasonalFood.inclusions}
                    expertNote={pageData.seasonalFood.callout}
                    image={seasonalFoodImg}
                />

                {/* ─── SECTION 9: SHOPPING AT CHRISTMAS MARKETS ─── */}
                <CurvilinearGrid
                    title={pageData.shoppingGuide.title}
                    subtitle={pageData.shoppingGuide.eyebrow}
                    items={pageData.shoppingGuide.items}
                    paragraphs={[
                        pageData.shoppingGuide.subtitle,
                        pageData.shoppingGuide.callout
                    ]}
                />

                {/* ─── SECTION 10: WEATHER TABLE ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.weather.title}
                    headers={pageData.weather.headers}
                    rows={pageData.weather.rows}
                />

                {/* ─── SECTION 11: WHAT TO PACK ─── */}
                <InclusionsList
                    title={pageData.packingGuide.title}
                    inclusions={pageData.packingGuide.inclusions}
                    expertNote={pageData.packingGuide.callout}
                    image={null}
                />

                {/* ─── SECTION 12: INCLUDED EXPERIENCES ─── */}
                <InclusionsList
                    title={pageData.inclusions.title}
                    inclusions={pageData.inclusions.items.map(i => `${i.title}: ${i.description}`)}
                    expertNote="All Uniworld Christmas Market sailings include meals, drinks, guided tours, and gratuities without surprise add-on fees."
                    image={includedExperiencesImg}
                />

                {/* ─── SECTION 13: BEST TIME TO BOOK ─── */}
                <CurvilinearGrid
                    title={pageData.bookingTips.title}
                    subtitle={pageData.bookingTips.eyebrow}
                    items={pageData.bookingTips.strategies}
                    paragraphs={[
                        pageData.bookingTips.subtitle,
                        pageData.bookingTips.callout
                    ]}
                />

                {/* ─── SECTION 14: WHO SHOULD CHOOSE A CHRISTMAS MARKET CRUISE ─── */}
                <ThreeColumnGrid
                    title={pageData.idealGuests.title}
                    subtitle={pageData.idealGuests.subtitle}
                    items={guestItems}
                />

                {/* ─── SECTION 15: IS IT WORTH IT & KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.worthIt.title,
                            paragraphs: [
                                ...pageData.worthIt.paragraphs,
                                `Key Highlights: ${pageData.worthIt.takeaways.join(' • ')}`
                            ]
                        }
                    ]}
                />

                {/* ─── SECTION 16: ANGELA HUGHES EXPERT CREDENTIALS ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge="MEET THE CEO"
                    image={ProfilePictureAH}
                    quote={pageData.executiveInsight.quote}
                    quoteSubtitle="Insight from Angela Hughes"
                    bio={pageData.executiveInsight.bio}
                    credentials={[
                        "40+ Years Luxury Experience",
                        "121+ Countries Visited",
                        "Rhine & Danube Classics",
                        "Onboard Glühwein Tastings",
                        "Thermal Packing Strategies",
                        "Early Holiday Booking Access"
                    ]}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 17: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Uniworld Christmas Market River Cruises.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 18: BOTTOM CENTER CTA ─── */}
                <CenterCTA
                    title={pageData.cta.title}
                    description={pageData.cta.description}
                    primaryCtaText={pageData.cta.primaryCtaText}
                    primaryCtaLink={pageData.cta.primaryCtaLink}
                    secondaryCtaText={pageData.cta.secondaryCtaText}
                    secondaryCtaLink={pageData.cta.secondaryCtaLink}
                    backgroundImage={ctaBgImg}
                />
            </main>
        </div>
    );
}

export default UniworldChristmasMarketCruises;
