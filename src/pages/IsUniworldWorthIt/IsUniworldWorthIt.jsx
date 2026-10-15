import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AuthorityBox from '@/components/ui/AuthorityBox';
import CardGrid from '@/components/ui/CardGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureSplit from '@/components/ui/FeatureSplit';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import ProsConsCards from '@/components/ui/ProsConsCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets and @/assets/IsUniworldWorthIt
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/IsUniworldWorthIt/uniworld-ss-joie-de-vivre-exterior-seine-river-france.webp';
import introPrimaryImg from '@/assets/IsUniworldWorthIt/uniworld-ss-antoinette-french-balcony-stateroom-autumn-view.webp';
import introSecondaryImg from '@/assets/IsUniworldWorthIt/uniworld-ss-beatrice-sundeck-river-view-loungers.webp';
import inclusionsImg from '@/assets/IsUniworldWorthIt/uniworld-ss-emilie-dining-room-banquette-seating.webp';
import cabinImg from '@/assets/IsUniworldWorthIt/uniworld-ss-antoinette-royal-suite-luxury-bedroom.webp';
import diningImg from '@/assets/IsUniworldWorthIt/uniworld-ss-bon-voyage-le-grand-fromage-dining-room.webp';
import serviceImg from '@/assets/IsUniworldWorthIt/uniworld-ss-emilie-luxury-salon-lounge.webp';
import ctaBgImg from '@/assets/IsUniworldWorthIt/uniworld-budapest-danube-river-scenic-panorama-hungary.jpg';

// Styled Inline CTA matching original page banners
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
                <a
                    href={btnLink}
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm shrink-0"
                >
                    <span>{btnText}</span>
                    <ChevronRight size={16} />
                </a>
            </div>
        </div>
    );
}

function IsUniworldWorthTheMoney() {
    // Structured Data Schema matching RitzCarlton and Uniworld standards
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
                    "url": "https://www.tripsandships.com/images/is-uniworld-worth-it.jpg",
                    "caption": "Is Uniworld Worth the Money?"
                },
                "image": "https://www.tripsandships.com/images/is-uniworld-worth-it.jpg",
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
                    "caption": "Angela Hughes - Luxury Travel Expert"
                },
                "description": "Angela Hughes is a luxury travel expert, CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University and an experienced luxury travel industry leader.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "knowsAbout": [
                    "Luxury Travel",
                    "Luxury Cruises",
                    "Boutique River Cruises",
                    "Uniworld River Cruises",
                    "European River Cruises",
                    "Luxury Vacations",
                    "Premium Travel"
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
                        "name": "Is Uniworld Worth the Money?",
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

    // Section 4: Pricing Breakdown cards for CardGrid component
    const pricingIcons = ['Ship', 'Users', 'Crown', 'CheckCircle', 'Utensils', 'Wine', 'Compass', 'DollarSign', 'Heart'];
    const pricingBreakdownCards = pageData.pricingBreakdown.factors.map((factor, idx) => ({
        title: factor,
        description: pageData.pricingBreakdown.callout,
        icon: pricingIcons[idx % pricingIcons.length]
    }));

    // Section 5: Inclusions mapped for InclusionsList component
    const inclusionsItems = pageData.fareBreakdown.items.map(item => ({
        title: item.feature,
        description: item.value
    }));

    // Section 8: Excursions cards for CardGrid component
    const excursionIcons = ['MapPin', 'Landmark', 'Compass', 'Wine', 'Bike', 'Utensils', 'Music', 'Sparkles'];
    const excursionCards = pageData.excursions.items.map((item, idx) => ({
        title: item,
        description: pageData.excursions.footerText,
        icon: excursionIcons[idx % excursionIcons.length]
    }));

    // Section 12: Maximize steps mapped for StepByStepGuide component
    const maximizeSteps = pageData.maximize.tips.map((tip, idx) => ({
        title: `Strategy ${idx + 1}`,
        description: `${tip} ${idx === pageData.maximize.tips.length - 1 ? pageData.maximize.footerText : ''}`
    }));

    return (
        <div className="bg-white min-h-screen text-slate-800 selection:bg-gold-500 selection:text-white">
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
                <meta property="og:image" content="https://www.tripsandships.com/images/is-uniworld-worth-it.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/is-uniworld-worth-it.jpg" />
                <link rel="canonical" href={pageData.seo.canonicalUrl} />

                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Global Navigation */}
            <Navbar />

            <main>
                {/* ─── SECTION 1: HERO SECTION (ComparisonHero Component) ─── */}
                <ComparisonHero
                    badge={pageData.hero.badge}
                    title={pageData.hero.title}
                    subtitle={pageData.hero.subtitle}
                    description={pageData.intro.paragraphs[0]}
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION (EditorialIntroSplit Component) ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.paragraphs[0],
                        pageData.intro.paragraphs[1],
                        pageData.intro.paragraphs[2]
                    ]}
                />

                {/* ─── SECTION 3: AUTHORITY BOX / QUICK ANSWER (AuthorityBox Component) ─── */}
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <AuthorityBox
                        title="Executive Value Assessment"
                        content={pageData.expertInsight.quote}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── SECTION 4: PRICING BREAKDOWN (CardGrid Component) ─── */}
                <CardGrid
                    title={pageData.pricingBreakdown.heading}
                    subtitle={`${pageData.pricingBreakdown.lead} ${pageData.pricingBreakdown.body}`}
                    cards={pricingBreakdownCards}
                    columns={3}
                />

                {/* ─── INLINE CTA 1 (InlineCTA Component) ─── */}
                <InlineCTA
                    tag="Transparent Luxury"
                    text="Compare inclusions and discover whether Uniworld's all-inclusive fares offer better overall value for your itinerary."
                    btnText="Schedule a Consultation"
                    btnLink="/contact"
                />

                {/* ─── SECTION 5: WHAT IS INCLUDED IN THE CRUISE FARE? (InclusionsList Component) ─── */}
                <InclusionsList
                    title={pageData.fareBreakdown.heading}
                    inclusions={inclusionsItems}
                    expertNote={pageData.fareBreakdown.footerText}
                    image={inclusionsImg}
                />

                {/* ─── SECTION 6: LUXURY BEYOND THE CABIN (FeatureSplit Component) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="light"
                    image={cabinImg}
                    title={pageData.cabinDesign.heading}
                    subtitles={[pageData.cabinDesign.lead, pageData.cabinDesign.body]}
                    features={pageData.cabinDesign.features}
                    summary={pageData.cabinDesign.conclusion}
                    ctaText="Explore Stateroom Options"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 7: DINING QUALITY ADDS SIGNIFICANT VALUE (FeatureSplit Component) ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="white"
                    image={diningImg}
                    title={pageData.dining.heading}
                    subtitles={[pageData.dining.intro]}
                    features={pageData.dining.features}
                    summary={pageData.dining.footerText}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 8: EXCURSIONS WITHOUT CONSTANT EXTRA CHARGES (CardGrid Component) ─── */}
                <CardGrid
                    title={pageData.excursions.heading}
                    subtitle={`${pageData.excursions.intro} ${pageData.excursions.footerText}`}
                    cards={excursionCards}
                    columns={4}
                />

                {/* ─── SECTION 9: PERSONALIZED SERVICE MAKES A DIFFERENCE (FeatureSplit Component) ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={serviceImg}
                    title={pageData.service.heading}
                    subtitles={[pageData.service.lead, pageData.service.body]}
                    features={pageData.service.features}
                    summary={pageData.service.conclusion}
                    ctaText="Inquire About Butler Service"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: COMPARING VALUE AGAINST OTHER CRUISE LINES (LuxuryCruiseComparisonTable Component) ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.comparison.heading}
                    headers={pageData.comparison.headers}
                    rows={pageData.comparison.rows.map(r => [r.feature, r.uniworld, r.typical])}
                />

                {/* ─── SECTION 11: WHO GETS THE BEST VALUE & WHEN IT MAY NOT BE WORTH IT (ProsConsCards Component) ─── */}
                <ProsConsCards
                    title="Traveler Fit & Value Assessment"
                    prosTitle={pageData.idealTravelers.heading}
                    consTitle={pageData.notWorthIt.heading}
                    bestFor={pageData.idealTravelers.travelers}
                    notBestFor={pageData.notWorthIt.items}
                    bottomNote={`${pageData.idealTravelers.alternative} ${pageData.notWorthIt.footerText}`}
                />

                {/* ─── INLINE CTA 2 (InlineCTA Component) ─── */}
                <InlineCTA
                    tag="Advisor Advantage"
                    text="Our advisors have sailed Uniworld extensively and help you select the exact ship and itinerary that maximizes your investment."
                    btnText="Connect with Angela Hughes"
                    btnLink="/contact"
                />

                {/* ─── SECTION 12: WAYS TO MAXIMIZE YOUR INVESTMENT (StepByStepGuide Component) ─── */}
                <StepByStepGuide
                    title={pageData.maximize.heading}
                    subtitle={pageData.maximize.eyebrow}
                    steps={maximizeSteps}
                />

                {/* ─── SECTION 13: IS THE HIGHER PRICE JUSTIFIED? & FINAL THOUGHTS (ConclusionSection Component) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.priceJustified.heading,
                            paragraphs: [
                                pageData.priceJustified.lead,
                                pageData.priceJustified.body,
                                `Value Inclusions: ${pageData.priceJustified.factors.join(', ')}`,
                                pageData.priceJustified.conclusion[0],
                                pageData.priceJustified.conclusion[1]
                            ]
                        },
                        {
                            heading: pageData.finalThoughts.heading,
                            paragraphs: pageData.finalThoughts.paragraphs
                        }
                    ]}
                />

                {/* ─── SECTION 14: INSIGHT FROM ANGELA HUGHES (ExpertCredentials Component) ─── */}
                <ExpertCredentials
                    name="Angela Hughes"
                    title="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
                    badge={pageData.expertInsight.eyebrow}
                    image={ProfilePictureAH}
                    quote={pageData.expertInsight.quote}
                    quoteSubtitle={pageData.expertInsight.heading}
                    bio={pageData.expertInsight.bio}
                    credentials={pageData.expertInsight.priorities}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 15: KEY TAKEAWAYS (ConclusionSection Component) ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.keyTakeaways.heading,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know to decide if a Uniworld River Cruise is worth the investment.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CTA (CenterCTA Component) ─── */}
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

export default IsUniworldWorthTheMoney;