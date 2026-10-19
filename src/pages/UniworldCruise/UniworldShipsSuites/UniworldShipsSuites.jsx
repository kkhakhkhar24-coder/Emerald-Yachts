import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (100% Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import CardGrid from '@/components/ui/CardGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets and isolated @/assets/UniworldShipsSuites
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-river-princess-sailing-scenic-danube-river.webp';
import introPrimaryImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-river-duchess-exterior-docked-hoorn-netherlands.webp';
import introSecondaryImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-catherine-deluxe-balcony-suite-rhone.webp';
import designImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-boutique-ship-restaurant-interior-rendering.webp';
import suiteImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-clara-grand-suite-living-room-rendering.webp';
import butlerImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-emilie-presidential-suite-sitting-lounge-area.webp';
import accessImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-classic-river-stateroom-cabin-rendering.jpeg';
import shipAmenitiesImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-sao-gabriel-douro-restaurant-dinner-setting.webp';
import ctaBgImg from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-bon-voyage-twilight-harbor-reflections.webp';

// Visual Showcase gallery images
import rec1Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-beatrice-open-air-sundeck-terrace-seating.webp';
import rec2Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-emilie-deluxe-suite-french-balcony-view.webp';
import rec3Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-clara-grand-suite-bedroom-rendering.webp';
import rec4Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-clara-stateroom-marble-bathroom-rendering.webp';
import rec5Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-ss-la-venezia-sun-deck-canopy-loungers.webp';
import rec6Img from '@/assets/UniworldCruise/UniworldShipsSuites/uniworld-presidential-observation-lounge-rendering.jpeg';

const galleryImages = [rec1Img, rec2Img, rec3Img, rec4Img, rec5Img, rec6Img];

// Styled Inline CTA matching design system standards
function InlineCTA({ tag, text, btnText, btnLink = "/contact" }) {
    if (!tag || !text) return null;
    return (
        <div className="max-w-[1280px] mx-auto px-6 py-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy-800 bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-2 shadow-2xs">
                        {tag}
                    </span>
                    <p className="font-display text-lg sm:text-xl text-navy-950 font-normal">
                        {text}
                    </p>
                </div>
                <Link
                    to={btnLink}
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm shrink-0"
                >
                    <span>{btnText}</span>
                    <ChevronRight size={16} />
                </Link>
            </div>
        </div>
    );
}

function UniWorldShipsSuites() {
    // 6-Entity JSON-LD Schema strictly matching RitzCarltonYachtCollectionCost pattern
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageData.seo.canonicalUrl}#webpage`,
                "url": pageData.seo.canonicalUrl,
                "name": pageData.seo.ogTitle,
                "headline": pageData.seo.title,
                "description": pageData.seo.metaDescription,
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/assets/UniworldShipsSuites/uniworld-river-princess-sailing-scenic-danube-river.webp",
                    "caption": "Uniworld Ships and Suites: Complete Guide"
                },
                "image": "https://www.tripsandships.com/assets/UniworldShipsSuites/uniworld-river-princess-sailing-scenic-danube-river.webp",
                "author": {
                    "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "isPartOf": {
                    "@id": "https://www.tripsandships.com/#website"
                },
                "inLanguage": "en"
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/",
                "logo": "https://www.tripsandships.com/assets/logo.png",
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
                    "caption": "Angela Hughes - River Cruise Expert"
                },
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced river cruise industry leader.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Uniworld Boutique River Cruises",
                    "Luxury River Ships",
                    "River Cruise Suites",
                    "French Balcony Staterooms",
                    "Butler Service on River Cruises",
                    "European River Itineraries",
                    "Luxury Travel Planning"
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
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Ships & Suites",
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

    // ─── COMPONENT DATA MAPPINGS ───

    // Section 4: Fleet cards for CardGrid Component
    const fleetCards = pageData.fleetSection.ships.map((s) => ({
        title: s.ship,
        description: `${s.region} — Signature boutique river vessel accommodating 120–160 guests with personalized luxury service and destination-inspired boutique interiors.`,
        bullets: [
            `Region: ${s.region}`,
            '100% Unique Boutique Design',
            'Guest Capacity: 120–160 Guests'
        ],
        icon: 'Ship'
    }));

    // Section 6: Stateroom Categories for CardGrid Component
    const stateroomCards = pageData.cabinCategories.categories.map((c, idx) => ({
        title: c.title,
        description: `${c.body} ${c.note || ''}`,
        bullets: c.items,
        icon: idx === 0 ? 'BedDouble' : idx === 1 ? 'Ruler' : 'Sun'
    }));

    // Section 9: Onboard Amenities for CurvilinearGrid Component
    const amenityIconKeys = ['Utensils', 'Coffee', 'Sun', 'Activity', 'BookOpen', 'ShoppingBag', 'Wifi', 'ConciergeBell', 'Armchair'];
    const amenitiesCurvilinearItems = pageData.onboardAmenities.items.map((label, idx) => ({
        title: label,
        description: 'Included onboard amenity available to every guest throughout the boutique river cruise experience.',
        icon: amenityIconKeys[idx] || 'CheckCircle'
    }));

    // Section 11: Choosing Cabin for CardGrid Component
    const choosingCards = pageData.choosingCabin.blocks.map((b, idx) => ({
        title: b.title,
        description: `${b.label} — ${b.intro}`,
        bullets: b.items,
        icon: idx === 0 ? 'Wallet' : idx === 1 ? 'Eye' : 'Crown'
    }));

    // Section 14: Tips for Selecting the Right Ship for StepByStepGuide Component
    const tipsSteps = pageData.tipsSelectingShip.items.map((item, idx) => ({
        title: idx === 0 ? `${pageData.tipsSelectingShip.tipIndex.text} (${item})` : item,
        description: idx === pageData.tipsSelectingShip.items.length - 1
            ? `${pageData.tipsSelectingShip.lead} Essential criteria to review before booking. ${pageData.tipsSelectingShip.conclusion}`
            : `${pageData.tipsSelectingShip.lead} Research ${item.toLowerCase()} across candidate vessels to ensure your voyage aligns with your travel style.`
    }));

    // Section 15: Visual Showcase Gallery for ThreeColumnGrid Component
    const galleryItems = pageData.imageRecommendations.items.map((item, idx) => ({
        title: item.suggestion,
        description: item.alt,
        image: galleryImages[idx],
        placeholderLabel: item.alt
    }));

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800">
            <Helmet>
                <title>{pageData.seo.title}</title>
                <meta name="title" content={pageData.seo.ogTitle} />
                <meta name="description" content={pageData.seo.metaDescription} />
                <meta name="keywords" content={pageData.seo.keywords} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageData.seo.ogTitle} />
                <meta property="og:description" content={pageData.seo.metaDescription} />
                <meta property="og:url" content={pageData.seo.canonicalUrl} />
                <meta property="og:image" content="https://www.tripsandships.com/assets/UniworldShipsSuites/uniworld-river-princess-sailing-scenic-danube-river.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.metaDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/assets/UniworldShipsSuites/uniworld-river-princess-sailing-scenic-danube-river.webp" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* ─── SECTION 1: COMPARISON HERO (ComparisonHero Component) ─── */}
            <ComparisonHero
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                badge={pageData.hero.eyebrow}
                backgroundImage={heroBgImg}
                primaryCtaText="Explore Cabin Categories"
                secondaryCtaText="Speak with an Advisor"
                secondaryCtaLink="/contact"
            />

            {/* ─── SECTION 2: ANGELA HUGHES AUTHORITY CALLOUT (AuthorityBox Component) ─── */}
            <div className="max-w-4xl mx-auto px-6 py-6">
                <AuthorityBox
                    title="EXPERT CRUISE PERSPECTIVE"
                    content={pageData.expertQuote.quote}
                    author="Angela Hughes, CEO & Luxury River Cruise Specialist"
                    authorImage={quickAnswerImg}
                />
            </div>

            {/* ─── SECTION 3: EDITORIAL INTRO SPLIT (EditorialIntroSplit Component) ─── */}
            <EditorialIntroSplit
                eyebrow={pageData.intro.eyebrow}
                heading={pageData.intro.heading}
                paragraphs={[
                    pageData.intro.lead,
                    pageData.intro.paragraphs[0],
                    pageData.intro.paragraphs[1],
                    `${pageData.intro.statement.primary} ${pageData.intro.statement.bold} (${pageData.intro.statement.badge})`
                ]}
                primaryImage={introPrimaryImg}
                secondaryImage={introSecondaryImg}
            />

            {/* ─── SECTION 4: THE FLEET SECTION (CardGrid Component) ─── */}
            <CardGrid
                title={pageData.fleetSection.heading}
                subtitle={`${pageData.fleetSection.intro} ${pageData.fleetSection.superBadge.title}: ${pageData.fleetSection.superBadge.text}. ${pageData.fleetSection.footerNote}`}
                cards={fleetCards}
                columns={4}
            />

            {/* ─── SECTION 5: SIGNATURE BOUTIQUE DESIGN (FeatureSplit Component) ─── */}
            <FeatureSplit
                title={pageData.boutiqueDesign.heading}
                subtitles={[pageData.boutiqueDesign.eyebrow, pageData.boutiqueDesign.lead]}
                features={pageData.boutiqueDesign.items}
                summary={`${pageData.boutiqueDesign.conclusionBox} ${pageData.boutiqueDesign.callout}`}
                image={designImg}
                imagePosition="right"
                theme="white"
            />

            {/* ─── SECTION 6: STATEROOM CATEGORIES (CardGrid Component) ─── */}
            <div id="content" className="scroll-mt-24">
                <div id="stateroom-categories">
                    <CardGrid
                        title={pageData.cabinCategories.heading}
                        subtitle={pageData.cabinCategories.eyebrow}
                        cards={stateroomCards}
                        columns={3}
                    />
                </div>
            </div>

            {/* ─── INLINE CTA 1 (InlineCTA Component) ─── */}
            <InlineCTA
                tag="CABIN & SUITE ADVISORY"
                text="Not sure whether a Classic Stateroom or French Balcony best suits your European itinerary?"
                btnText="Request Stateroom Consultation"
                btnLink="/contact"
            />

            {/* ─── SECTION 7: LUXURY SUITES (FeatureSplit Component) ─── */}
            <FeatureSplit
                title={pageData.luxurySuites.heading}
                subtitles={[pageData.luxurySuites.eyebrow, pageData.luxurySuites.lead, pageData.luxurySuites.intro]}
                features={pageData.luxurySuites.items}
                summary={`${pageData.luxurySuites.body} ${pageData.luxurySuites.callout.title}: ${pageData.luxurySuites.callout.text}`}
                image={suiteImg}
                imagePosition="left"
                theme="light"
            />

            {/* ─── SECTION 8: BUTLER SERVICE EXPLAINED (FeatureSplit Component) ─── */}
            <FeatureSplit
                imagePosition="right"
                theme="white"
                image={butlerImg}
                title={pageData.butlerService.heading}
                subtitles={[
                    pageData.butlerService.eyebrow,
                    pageData.butlerService.intro
                ]}
                features={pageData.butlerService.items}
                summary={`${pageData.butlerService.distinction.title}: ${pageData.butlerService.distinction.text}`}
                ctaText="Inquire About Butler Service"
                ctaLink="/contact"
            />

            {/* ─── SECTION 9: ONBOARD AMENITIES (CurvilinearGrid Component) ─── */}
            <CurvilinearGrid
                title={pageData.onboardAmenities.heading}
                subtitle={pageData.onboardAmenities.eyebrow}
                paragraphs={[pageData.onboardAmenities.footer]}
                items={amenitiesCurvilinearItems}
            />

            {/* ─── SECTION 10: CABIN COMPARISON TABLE (LuxuryCruiseComparisonTable Component) ─── */}
            <LuxuryCruiseComparisonTable
                title={pageData.cabinComparison.heading}
                headers={pageData.cabinComparison.headers}
                rows={pageData.cabinComparison.rows}
            />

            {/* ─── SECTION 11: CHOOSING THE BEST CABIN (CardGrid Component) ─── */}
            <CardGrid
                title={pageData.choosingCabin.heading}
                subtitle={`${pageData.choosingCabin.eyebrow}. ${pageData.choosingCabin.footer}`}
                cards={choosingCards}
                columns={3}
            />

            {/* ─── INLINE CTA 2 (InlineCTA Component) ─── */}
            <InlineCTA
                tag="LIVE DECK ALLOCATION"
                text="Want to secure premier mid-ship placement or high-deck suite allocations before sailing sellouts?"
                btnText="Check Live Suite Availability"
                btnLink="/contact"
            />

            {/* ─── SECTION 12: ACCESSIBILITY CONSIDERATIONS (FeatureSplit Component) ─── */}
            <FeatureSplit
                title={pageData.accessibility.heading}
                subtitles={[pageData.accessibility.eyebrow, pageData.accessibility.lead, pageData.accessibility.bodyIntro]}
                features={pageData.accessibility.items}
                summary={`${pageData.accessibility.bodyOutro} ${pageData.accessibility.callout.title}: ${pageData.accessibility.callout.text}`}
                image={accessImg}
                imagePosition="right"
                theme="light"
            />

            {/* ─── SECTION 13: SHIP AMENITIES (FeatureSplit Component) ─── */}
            <FeatureSplit
                title={pageData.shipAmenities.heading}
                subtitles={[pageData.shipAmenities.eyebrow, pageData.shipAmenities.lead]}
                features={pageData.shipAmenities.items}
                summary={`${pageData.shipAmenities.conclusionBox} (${pageData.shipAmenities.badge})`}
                image={shipAmenitiesImg}
                imagePosition="left"
                theme="white"
            />

            {/* ─── SECTION 14: TIPS FOR SELECTING THE RIGHT SHIP (StepByStepGuide Component) ─── */}
            <StepByStepGuide
                title={pageData.tipsSelectingShip.heading}
                subtitle={`${pageData.tipsSelectingShip.eyebrow} — 01: ${pageData.tipsSelectingShip.tipIndex.text}`}
                steps={tipsSteps}
            />

            {/* ─── SECTION 15: VISUAL SHOWCASE GALLERY (ThreeColumnGrid Component) ─── */}
            <ThreeColumnGrid
                title={pageData.imageRecommendations.heading}
                subtitle={pageData.imageRecommendations.eyebrow}
                items={galleryItems}
            />

            {/* ─── SECTION 16: EXPERT CREDENTIALS (ExpertCredentials Component) ─── */}
            <ExpertCredentials
                name="Angela Hughes"
                title="Insight from Angela Hughes · CEO, Trips & Ships Luxury Travel"
                image={ProfilePictureAH}
                badge="LUXURY TRAVEL EXPERTISE"
                quote={pageData.expertQuote.quote}
                quoteSubtitle="Travel Prioritization Matrix: Boutique River Ships, Personalized Butler Service, All-Inclusive Value, Regional Shore Excursions, Gourmet Dining, Intimate Capacity"
                bio={pageData.expertQuote.bio}
                credentials={[
                    "40+ Years Designing Luxury Travel Experiences",
                    "121+ Countries Traveled Across Seven Continents",
                    "Recognized Industry Leader & River Cruise Specialist",
                    "Boutique River Ships & Suite Layout Specialist",
                    "Founder of Luxury Travel University & CEO of Trips & Ships",
                    "Direct Relationships with Uniworld Captains & Executives"
                ]}
                ctaText={pageData.expertQuote.ctaText}
                ctaLink={pageData.expertQuote.ctaLink}
            />

            {/* ─── SECTION 17: KEY TAKEAWAYS (ConclusionSection Component) ─── */}
            <ConclusionSection
                sections={[{
                    heading: pageData.takeaways.heading,
                    paragraphs: pageData.takeaways.items
                }]}
            />

            {/* ─── SECTION 18: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
            <FAQAccordion
                data={{
                    title: "Frequently Asked Questions",
                    subtitle: "Everything you need to know about Uniworld ships, cabin categories, suites, and onboard services.",
                    faqs: pageData.faqs
                }}
            />

            {/* ─── SECTION 19: CENTER CTA (CenterCTA Component) ─── */}
            <CenterCTA
                title={pageData.cta.title}
                description={pageData.cta.subtitle}
                buttonText={pageData.cta.buttonText}
                buttonLink={pageData.cta.buttonLink}
                image={ctaBgImg}
                theme="dark"
            />
        </div>
    );
}

export default UniWorldShipsSuites;