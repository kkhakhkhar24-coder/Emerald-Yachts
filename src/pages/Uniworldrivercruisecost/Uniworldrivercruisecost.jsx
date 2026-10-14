import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight, MapPin, Ship, Bed, Calendar,
    TrendingDown, TrendingUp, AlertCircle, Compass,
    Plane, Award, Sparkles, Tag, Crown, Clock, Users,
    CheckCircle, CalendarDays, Wallet, BadgePercent,
    CalendarClock, Leaf, Phone, LayoutList, Gem, Utensils
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

// Page Data JSON
import pageData from './data.json';

// Shared UI System Components (Component-Based Architecture)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import LuxuryScorecardVisual from '@/components/ui/LuxuryScorecardVisual';
import AuthorityBox from '@/components/ui/AuthorityBox';
import FeatureSplit from '@/components/ui/FeatureSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Media Assets from @/assets and @/assets/Uniworldrivercruisecost
import ProfilePictureAH from '@/assets/Media (2).jpg';
import quickAnswerImg from '@/assets/Media (1).jpg';
import heroBgImg from '@/assets/Uniworldrivercruisecost/uniworld-ss-maria-theresa-sailing-danube-wachau-valley.webp';
import introPrimaryImg from '@/assets/Uniworldrivercruisecost/uniworld-ss-emilie-deluxe-suite-master-king-bed.webp';
import introSecondaryImg from '@/assets/Uniworldrivercruisecost/uniworld-ss-emilie-sundeck-shaded-cabana-daybeds.webp';
import inclusionsDiningImg from '@/assets/Uniworldrivercruisecost/uniworld-ss-emilie-gourmet-culinary-buffet-presentation.webp';
import budgetingScenicImg from '@/assets/Uniworldrivercruisecost/uniworld-river-queen-cruising-scenic-moselle-river.webp';
import ctaBgImg from '@/assets/Uniworldrivercruisecost/uniworld-budapest-parliament-building-danube-river-hungary.jpg';

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

function UniworldRiverCruiseCost() {
    const [selectedFactor, setSelectedFactor] = useState(0);

    // Map factors icons
    const factorIcons = [MapPin, Ship, Bed, Calendar];

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
                    "url": "https://www.tripsandships.com/images/uniworld-cruise-cost.jpg",
                    "caption": "How Much Does a Uniworld River Cruise Cost?"
                },
                "image": "https://www.tripsandships.com/images/uniworld-cruise-cost.jpg",
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
                "jobTitle": "CEO & Luxury River Cruise Specialist",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                }
            },
            {
                "@type": "BreadcrumbList",
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
                        "name": "How Much Does a Uniworld River Cruise Cost?",
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
    };

    // Deal tips mapped with icons for CurvilinearGrid
    const dealIcons = [CalendarClock, BadgePercent, Leaf, Calendar];
    const dealStrategies = pageData.dealTips.strategies.map((deal, idx) => ({
        title: deal.title,
        description: `${deal.body} ${deal.items.join(', ')}`,
        icon: ['Clock', 'Star', 'Sparkles', 'Calendar'][idx % 4]
    }));

    // Extra costs icons mapping for cards
    const extraCostIcons = [Plane, Award, Sparkles, Tag, MapPin, Compass, Bed, Crown];

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
                <meta property="og:image" content="https://www.tripsandships.com/images/uniworld-cruise-cost.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageData.seo.ogTitle} />
                <meta name="twitter:description" content={pageData.seo.ogDescription} />
                <meta name="twitter:image" content="https://www.tripsandships.com/images/uniworld-cruise-cost.jpg" />
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

                {/* ─── SECTION 2: EDITORIAL INTRO SECTION ─── */}
                <EditorialIntroSplit
                    eyebrow={pageData.intro.eyebrow}
                    heading={pageData.intro.heading}
                    primaryImage={introPrimaryImg}
                    secondaryImage={introSecondaryImg}
                    paragraphs={[
                        pageData.intro.leadCard
                    ]}
                />

                {/* ─── SECTION 3: TYPICAL PRICE RANGE ─── */}
                <section className="py-20 bg-slate-50 border-y border-slate-200/80">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3 block">
                                {pageData.priceRange.eyebrow}
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal tracking-tight mb-4">
                                {pageData.priceRange.title}
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
                                {pageData.priceRange.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pageData.priceRange.ranges.map((row, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-5">
                                            <Compass size={24} />
                                        </div>
                                        <h3 className="font-display text-xl text-navy-950 font-medium mb-2">
                                            {row.length}
                                        </h3>
                                        <div className="w-8 h-px bg-slate-200 my-4"></div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                                            {row.label}
                                        </span>
                                        <div className="font-display text-2xl sm:text-3xl font-semibold text-navy-950 mb-1">
                                            {row.price}
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-500 mt-4 block">
                                        {row.note}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600 bg-white/80 border border-slate-200 py-3 px-5 rounded-full max-w-2xl mx-auto text-center shadow-2xs">
                            <AlertCircle size={15} className="text-gold-600 shrink-0" />
                            <span>{pageData.priceRange.footnote}</span>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 4: QUICK ANSWER / AUTHORITY BOX ─── */}
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <AuthorityBox
                        title="Executive Pricing Overview"
                        content={pageData.expertInsight.quote}
                        author="Angela Hughes, Luxury River Cruise Specialist"
                        authorImage={quickAnswerImg}
                    />
                </div>

                {/* ─── SECTION 5: PRICING FACTORS (WHAT AFFECTS THE COST) ─── */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3 block">
                                {pageData.pricingFactors.eyebrow}
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal tracking-tight mb-4">
                                {pageData.pricingFactors.title}
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
                                {pageData.pricingFactors.intro}
                            </p>
                        </div>

                        {/* Interactive Factor Tabs & Panel */}
                        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                                {pageData.pricingFactors.factors.map((factor, idx) => {
                                    const IconComponent = factorIcons[idx % factorIcons.length];
                                    const isActive = selectedFactor === idx;
                                    return (
                                        <button
                                            key={factor.id}
                                            onClick={() => setSelectedFactor(idx)}
                                            className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                                                isActive
                                                    ? 'bg-navy-900 text-white shadow-md'
                                                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                                            }`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                                isActive ? 'bg-gold-500 text-navy-950' : 'bg-navy-50 text-navy-900'
                                            }`}>
                                                <IconComponent size={16} />
                                            </div>
                                            <span className="font-medium text-sm leading-tight">
                                                {factor.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Active Factor Details Panel */}
                            {(() => {
                                const currentFactor = pageData.pricingFactors.factors[selectedFactor];
                                return (
                                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                                            <div>
                                                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold block mb-1">
                                                    Factor {selectedFactor + 1} of {pageData.pricingFactors.factors.length}
                                                </span>
                                                <h3 className="font-display text-2xl text-navy-950 font-medium">
                                                    {currentFactor.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="font-sans text-slate-700 text-base leading-relaxed mb-6">
                                            {currentFactor.text}
                                        </p>

                                        {/* TAGS type */}
                                        {currentFactor.type === 'tags' && currentFactor.tags && (
                                            <div className="flex flex-wrap gap-2.5 mb-6">
                                                {currentFactor.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 border border-slate-200/70 rounded-full text-xs font-medium text-slate-800"
                                                    >
                                                        <MapPin size={12} className="text-gold-600" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* LIST type */}
                                        {currentFactor.type === 'list' && currentFactor.list && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                {currentFactor.list.map((item, i) => (
                                                    <div key={i} className="p-4 bg-slate-50 border border-slate-200/70 rounded-xl">
                                                        <span className="font-display text-xs text-gold-600 font-bold block mb-1">
                                                            Option {i + 1}
                                                        </span>
                                                        <h4 className="font-medium text-navy-950 text-sm mb-1">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs text-slate-600 leading-normal">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* ROWS type */}
                                        {currentFactor.type === 'rows' && currentFactor.rows && (
                                            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden mb-6">
                                                {currentFactor.rows.map((row, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 text-sm">
                                                        <span className="font-medium text-slate-800">
                                                            {row.type}
                                                        </span>
                                                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-50 text-navy-900 border border-navy-100">
                                                            {row.level}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* SEASONS type */}
                                        {currentFactor.type === 'seasons' && currentFactor.seasons && (
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                                {currentFactor.seasons.map((row, i) => (
                                                    <div key={i} className="p-3.5 bg-slate-50 border border-slate-200/70 rounded-xl flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            {row.low ? (
                                                                <TrendingDown size={14} className="text-emerald-600" />
                                                            ) : (
                                                                <TrendingUp size={14} className="text-amber-600" />
                                                            )}
                                                            <span className="text-xs font-medium text-slate-800">
                                                                {row.season}
                                                            </span>
                                                        </div>
                                                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                                            row.low ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                                                        }`}>
                                                            {row.pricing}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Optional Note */}
                                        {currentFactor.note && (
                                            <div className="flex items-start gap-2.5 bg-gold-50/60 border border-gold-200/80 p-3.5 rounded-xl text-xs text-navy-950">
                                                <AlertCircle size={15} className="text-gold-700 shrink-0 mt-0.5" />
                                                <span>{currentFactor.note}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </section>

                {/* ─── INLINE CTA 1 ─── */}
                <InlineCTA
                    tag="Transparent Pricing"
                    text="Want a personalized quote with the exact inclusions calculated for your travel dates?"
                    btnText="Schedule a Consultation"
                    btnLink="/contact"
                />

                {/* ─── SECTION 6: WHAT IS INCLUDED IN THE CRUISE FARE? ─── */}
                <FeatureSplit
                    imagePosition="right"
                    theme="light"
                    image={inclusionsDiningImg}
                    title={pageData.inclusions.title}
                    subtitles={[pageData.inclusions.lead, pageData.inclusions.body]}
                    features={pageData.inclusions.items}
                    summary={pageData.inclusions.callout}
                    ctaText="Schedule a Consultation"
                    ctaLink="/contact"
                />

                {/* ─── SECTION 7: ADDITIONAL COSTS TO BUDGET FOR ─── */}
                <section className="py-20 bg-slate-50 border-y border-slate-200/80">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3 block">
                                {pageData.extraCosts.eyebrow}
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal tracking-tight mb-4">
                                {pageData.extraCosts.title}
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
                                {pageData.extraCosts.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pageData.extraCosts.items.map((row, idx) => {
                                const IconComponent = extraCostIcons[idx % extraCostIcons.length];
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900">
                                                    <IconComponent size={20} />
                                                </div>
                                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                                    row.always
                                                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                                                }`}>
                                                    {row.always ? 'Always Extra' : 'Sometimes'}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-lg text-navy-950 font-medium mb-2">
                                                {row.expense}
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {row.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 py-3 px-5 rounded-full max-w-2xl mx-auto text-center shadow-2xs">
                            <AlertCircle size={15} className="text-gold-600 shrink-0" />
                            <span>{pageData.extraCosts.footnote}</span>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 8: AVERAGE COST FOR COUPLES ─── */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3 block">
                                {pageData.coupleCost.eyebrow}
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal tracking-tight mb-4">
                                {pageData.coupleCost.title}
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
                                {pageData.coupleCost.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {pageData.coupleCost.items.map((row, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center mx-auto mb-4">
                                        <Users size={22} />
                                    </div>
                                    <h3 className="font-display text-xl text-navy-950 font-medium mb-1">
                                        {row.length}
                                    </h3>
                                    <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mb-4">
                                        Per Couple
                                    </span>
                                    <div className="w-12 h-px bg-slate-200 mx-auto mb-4"></div>
                                    <div className="font-display text-3xl font-semibold text-navy-950 mb-1">
                                        {row.price}
                                    </div>
                                    <span className="text-xs text-slate-500 block">
                                        {row.note}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 py-3 px-5 rounded-full max-w-xl mx-auto text-center shadow-2xs">
                            <AlertCircle size={15} className="text-gold-600 shrink-0" />
                            <span>{pageData.coupleCost.footnote}</span>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 9: ARE UNIWORLD RIVER CRUISES WORTH THE PRICE? ─── */}
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
                                    {pageData.valueAnalysis.eyebrow}
                                </span>
                                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-6">
                                    {pageData.valueAnalysis.title}
                                </h2>
                                <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                                    {pageData.valueAnalysis.body}
                                </p>
                                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 italic font-display text-lg text-gold-200">
                                    "{pageData.valueAnalysis.quote}"
                                </div>
                            </div>

                            <div className="bg-white text-slate-800 rounded-3xl p-8 border border-slate-200/80 shadow-2xl">
                                <h3 className="font-display text-2xl text-navy-950 font-medium mb-2">
                                    {pageData.valueAnalysis.cardTitle}
                                </h3>
                                <p className="text-sm text-slate-600 mb-6">
                                    {pageData.valueAnalysis.cardSubtitle}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {pageData.valueAnalysis.includedChips.map((chip, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
                                        >
                                            <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                                            <span>{chip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 10: HOW TO FIND THE BEST UNIWORLD RIVER CRUISE DEALS ─── */}
                <CurvilinearGrid
                    title={pageData.dealTips.title}
                    subtitle={pageData.dealTips.eyebrow}
                    paragraphs={[pageData.dealTips.intro]}
                    items={dealStrategies}
                />

                {/* ─── SECTION 11: COMPARING UNIWORLD WITH OTHER LUXURY LINES ─── */}
                <LuxuryCruiseComparisonTable
                    title={pageData.comparison.title}
                    headers={pageData.comparison.headers}
                    rows={pageData.comparison.rows.map(r => [r.feature, r.uniworld, r.typical])}
                />

                {/* ─── SECTION 12: WHEN IS THE CHEAPEST TIME TO BOOK? ─── */}
                <section className="py-20 bg-slate-50 border-y border-slate-200/80">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3 block">
                                {pageData.timing.eyebrow}
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal tracking-tight mb-4">
                                {pageData.timing.title}
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
                                {pageData.timing.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {pageData.timing.items.map((strategy, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between text-center"
                                >
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mx-auto mb-3">
                                            <CalendarDays size={18} />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 block mb-1">
                                            Strategy {idx + 1}
                                        </span>
                                        <h4 className="font-display text-sm font-medium text-navy-950">
                                            {strategy}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 py-3 px-5 rounded-full max-w-2xl mx-auto text-center shadow-2xs">
                            <AlertCircle size={15} className="text-gold-600 shrink-0" />
                            <span>{pageData.timing.footnote}</span>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 13: TIPS FOR BUDGETING YOUR CRUISE ─── */}
                <FeatureSplit
                    imagePosition="left"
                    theme="white"
                    image={budgetingScenicImg}
                    title={pageData.budgeting.title}
                    subtitles={[pageData.budgeting.lead]}
                    features={pageData.budgeting.items}
                    summary={pageData.budgeting.callout}
                    ctaText="Plan with an Advisor"
                    ctaLink="/contact"
                />

                {/* ─── INLINE CTA 2 ─── */}
                <InlineCTA
                    tag="Advisor Advantage"
                    text="Our advisors have direct relationships with Uniworld to secure exclusive promotions, cabin upgrades, and onboard credits."
                    btnText="Connect with Angela Hughes"
                    btnLink="/contact"
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

                {/* ─── SECTION 15: INSIGHT FROM ANGELA HUGHES ─── */}
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
                        subtitle: "Everything you need to know about Uniworld River Cruise costs, pricing, and all-inclusive value.",
                        faqs: pageData.faqs
                    }}
                />

                {/* ─── SECTION 17: FINAL CTA ─── */}
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

export default UniworldRiverCruiseCost;