import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '@/components/ui/LuxuryScorecardVisual';
import AuthorityBox from '@/components/ui/AuthorityBox';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureSplit from '@/components/ui/FeatureSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets and @/assets/Whatisincludedonuniworld
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-maria-theresa-exterior-danube-river-cruise.webp';
import introPrimaryImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-luxury-super-ship-grand-lounge-interior-rendering.webp';
import introSecondaryImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-beatrice-sun-deck-lounge-danube-river.webp';
import scorecardImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-bon-voyage-soleil-deck-infinity-pool-day.webp';
import accommodationsImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-french-balcony-stateroom-interior-rendering.webp';
import diningImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-luxury-super-ship-fine-dining-restaurant-rendering.jpeg';
import beveragesImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-european-vineyard-culinary-tasting-experience.webp';
import excursionsImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-amsterdam-canals-historic-boat-tour-netherlands.jpeg';
import butlerImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-river-tosca-sundeck-butler-drink-service-nile.webp';
import wellnessImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-maria-theresa-morning-sundeck-yoga-wellness.webp';
import suiteBenefitsImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-victoria-royal-suite-living-room-interior.webp';
import ctaBgImg from '@/assets/UniworldCruise/Whatisincludedonuniworld/uniworld-ss-maria-theresa-sailing-past-budapest-parliament.webp';

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

function UniworldRiverCruiseInclusions() {
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
                    "url": "https://www.tripsandships.com/images/uniworld-what-is-included.jpg",
                    "caption": "What Is Included on a Uniworld River Cruise?"
                },
                "image": "https://www.tripsandships.com/images/uniworld-what-is-included.jpg",
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
                    "Luxury River Cruising",
                    "All-Inclusive River Cruises",
                    "European River Itineraries",
                    "Boutique River Ships",
                    "Cruise Fare Inclusions",
                    "Gourmet Dining & Wine"
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
                        "name": "What Is Included on a Uniworld River Cruise?",
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

    // Entertainment items mapped for CurvilinearGrid
    const entertainmentIcons = ['Music', 'Star', 'Globe', 'Utensils', 'Mic', 'Wine', 'Award', 'Sparkles'];
    const entertainmentItems = pageData.entertainment.items.map((item, idx) => ({
        title: item,
        description: pageData.entertainment.footnote,
        icon: entertainmentIcons[idx % entertainmentIcons.length]
    }));

    // Triple cards data for ThreeColumnGrid
    const tripleCards = [
        {
            title: pageData.tripleServices.wifi.title,
            description: `${pageData.tripleServices.wifi.lead} ${pageData.tripleServices.wifi.items.join(', ')}. ${pageData.tripleServices.wifi.note}`
        },
        {
            title: pageData.tripleServices.transfers.title,
            description: `${pageData.tripleServices.transfers.lead} ${pageData.tripleServices.transfers.items.join(', ')}. ${pageData.tripleServices.transfers.note}`
        },
        {
            title: pageData.tripleServices.gratuities.title,
            description: `${pageData.tripleServices.gratuities.lead} ${pageData.tripleServices.gratuities.items.join(', ')}. ${pageData.tripleServices.gratuities.note}`
        }
    ];

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
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-what-is-included.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-what-is-included.jpg" />
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
                    backgroundImage={heroBgImg}
                    primaryCtaText={pageData.hero.primaryCtaText}
                    primaryCtaLink={pageData.hero.primaryCtaLink}
                    secondaryCtaText={pageData.hero.secondaryCtaText}
                    secondaryCtaLink={pageData.hero.secondaryCtaLink}
                />

                {/* ─── SECTION 2: INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.leadCard,
                        pageData.intro.paragraphs[0],
                        pageData.intro.paragraphs[1]
                    ]}
                />

                {/* ─── SECTION 3: INCLUSIONS RATING & VALUE SUMMARY ─── */}
                <LuxuryScorecardVisual
                    title={pageData.ratingSummary.title}
                    subtitle={`${pageData.ratingSummary.scoreLabel}: ${pageData.ratingSummary.overallScore} — ${pageData.ratingSummary.eyebrow}`}
                    items={pageData.ratingSummary.ratings}
                    image={scorecardImg}
                />

                {/* ─── SECTION 4: QUICK ANSWER ─── */}
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <AuthorityBox
                        title={pageData.quickAnswer.title}
                        content={`${pageData.quickAnswer.lead}\n\n${pageData.quickAnswer.subtext}`}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── INLINE CTA 1 ─── */}
                <InlineCTA
                    tag="Transparent Luxury"
                    text="Ready to discover how much is included on your dream river cruise itinerary?"
                    btnText="Schedule a Consultation"
                    btnLink="/contact"
                />

                {/* ─── SECTION 5: WHAT MAKES UNIWORLD DIFFERENT ─── */}
                <InclusionsList
                    title={pageData.whatMakesDifferent.title}
                    inclusions={pageData.whatMakesDifferent.items}
                    expertNote={pageData.whatMakesDifferent.footerNote}
                    image={introPrimaryImg}
                />

                {/* ─── SECTION 6: ELEGANT BOUTIQUE ACCOMMODATIONS ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={accommodationsImg}
                    title={pageData.accommodations.title}
                    subtitles={[pageData.accommodations.lead, pageData.accommodations.subtext]}
                    features={pageData.accommodations.features}
                    summary={pageData.accommodations.footnote}
                    ctaText="Explore Suite Options"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 7: GOURMET DINING INCLUDED EVERY DAY ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={diningImg}
                    title={pageData.dining.title}
                    subtitles={[pageData.dining.intro]}
                    features={[
                        {
                            title: pageData.dining.sections.breakfast.title,
                            description: pageData.dining.sections.breakfast.items.join(', ')
                        },
                        {
                            title: pageData.dining.sections.lunch.title,
                            description: pageData.dining.sections.lunch.items.join(', ')
                        },
                        {
                            title: pageData.dining.sections.dinner.title,
                            description: `${pageData.dining.sections.dinner.subtitle} ${pageData.dining.sections.dinner.items.join(', ')}`
                        },
                        {
                            title: pageData.dining.sections.additional.title,
                            description: `${pageData.dining.sections.additional.subtitle} ${pageData.dining.sections.additional.items.join(', ')}`
                        }
                    ]}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 8: UNLIMITED PREMIUM BEVERAGES ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={beveragesImg}
                    title={pageData.beverages.title}
                    subtitles={[pageData.beverages.lead, pageData.beverages.subtext]}
                    features={pageData.beverages.items}
                    summary={pageData.beverages.footnote}
                    ctaText="View Drink Menus"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 9: DAILY SHORE EXCURSIONS INCLUDED ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={excursionsImg}
                    title={pageData.excursions.title}
                    subtitles={[pageData.excursions.lead, pageData.excursions.subtext]}
                    features={pageData.excursions.items}
                    summary={pageData.excursions.footnote}
                    ctaText="Explore Excursion Choices"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 10: PERSONALIZED BUTLER SERVICE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={butlerImg}
                    title={pageData.butlerServices.title}
                    subtitles={[pageData.butlerServices.lead, pageData.butlerServices.subtext]}
                    features={pageData.butlerServices.items}
                    summary={pageData.butlerServices.footnote}
                    ctaText="Inquire About Suite Butler Service"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 11: SUITE BENEFITS ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={suiteBenefitsImg}
                    title={pageData.suiteBenefits.title}
                    subtitles={[pageData.suiteBenefits.lead, pageData.suiteBenefits.subtext]}
                    features={pageData.suiteBenefits.items}
                    summary={pageData.suiteBenefits.footnote}
                    ctaText="Compare Suite Inclusions"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 12: ENTERTAINMENT INCLUDED ONBOARD ─── */}
                <CurvilinearGrid
                    title={pageData.entertainment.title}
                    subtitle={pageData.entertainment.eyebrow}
                    paragraphs={[pageData.entertainment.lead, pageData.entertainment.footnote]}
                    items={entertainmentItems}
                />

                {/* ─── SECTION 13: WELLNESS AND FITNESS AMENITIES ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={wellnessImg}
                    title={pageData.wellness.title}
                    subtitles={[pageData.wellness.intro]}
                    features={pageData.wellness.items.map(w => w.title)}
                    summary={pageData.wellness.banner}
                    ctaText="Explore Wellness Programs"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 14: WI-FI, AIRPORT TRANSFERS & GRATUITIES ─── */}
                <ThreeColumnGrid
                    title="Connectivity, Transfers & Gratuities"
                    subtitle="Seamless, bundled services ensuring a completely worry-free journey from arrival to departure."
                    items={tripleCards}
                />

                {/* ─── INLINE CTA 2 ─── */}
                <InlineCTA
                    tag="All-Inclusive Planning"
                    text="Speak with our river cruise specialists to ensure you select the itinerary with the exact inclusions you desire."
                    btnText="Plan with an Advisor"
                    btnLink="/contact"
                />

                {/* ─── SECTION 15: WHAT'S USUALLY NOT INCLUDED ─── */}
                <ProsConsCards
                    title={pageData.notIncluded.title}
                    prosTitle={pageData.notIncluded.includedTitle}
                    consTitle={pageData.notIncluded.extraTitle}
                    bestFor={pageData.notIncluded.items.map(i => i.included)}
                    notBestFor={pageData.notIncluded.items.map(i => i.extra)}
                    bottomNote={pageData.notIncluded.footnote}
                />

                {/* ─── SECTION 16: COMPARING UNIWORLD WITH OTHER CRUISE LINES ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.comparison.title}
                    headers={pageData.comparison.headers}
                    rows={pageData.comparison.rows.map(r => [r.feature, r.uniworld, r.typical])}
                />

                {/* ─── SECTION 17: WHY TRAVELERS FIND UNIWORLD GOOD VALUE & KEY TAKEAWAYS ─── */}
                <ConclusionSection
                    sections={[
                        {
                            heading: pageData.value.title,
                            paragraphs: [
                                pageData.value.lead,
                                pageData.value.desc,
                                pageData.value.quote,
                                `${pageData.value.bundledTitle}: ${pageData.value.bundledItems.map(b => `${b.title} (${b.desc})`).join(', ')}`
                            ]
                        },
                        {
                            heading: pageData.keyTakeaways.title,
                            paragraphs: pageData.keyTakeaways.items
                        }
                    ]}
                />

                {/* ─── SECTION 18: INSIGHT FROM ANGELA HUGHES ─── */}
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

                {/* ─── SECTION 19: FREQUENTLY ASKED QUESTIONS ─── */}
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about what is included on a Uniworld River Cruise.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 20: FINAL CTA ─── */}
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

export default UniworldRiverCruiseInclusions;