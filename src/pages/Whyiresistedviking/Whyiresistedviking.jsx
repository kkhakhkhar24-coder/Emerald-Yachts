import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import './Whyiresistedviking.css'
// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
// import hero1 from '../../assets/WhyIResistedViking/hero1.jpg'
// import hero2 from '../../assets/WhyIResistedViking/hero2.jpg'
// import hero3 from '../../assets/WhyIResistedViking/hero3.jpg'
// import vikingShipExterior from '../../assets/WhyIResistedViking/viking-ship-exterior.webp'
// import vikingMarketing from '../../assets/WhyIResistedViking/viking-marketing.webp'
// import vikingOnboard from '../../assets/WhyIResistedViking/viking-onboard-reveal.webp'
// import vikingDesignInterior from '../../assets/WhyIResistedViking/viking-scandinavian-design.webp'
// import vikingAdultsPool from '../../assets/WhyIResistedViking/viking-adults-pool.webp'
// import vikingDestination from '../../assets/WhyIResistedViking/viking-destination.webp'
// import vikingValue from '../../assets/WhyIResistedViking/viking-value.webp'
// import vikingDining from '../../assets/WhyIResistedViking/viking-dining.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music, Mic, FileText, GraduationCap,
    Monitor, Newspaper, Mail, ThumbsUp, X,
    BookOpen, Eye, Smile, Leaf, Wifi
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function WhyIResistedViking() {
    const [vikCurrentHero, setVikCurrentHero] = useState(0)
    const vikHeroImages = []

    useEffect(() => {
        const vikTimer = setInterval(() => {
            setVikCurrentHero((prev) => (prev + 1) % vikHeroImages.length)
        }, 5000)
        return () => clearInterval(vikTimer)
    }, [vikHeroImages.length])

    const [vikActiveFaq, setVikActiveFaq] = useState(null)

    const vikToggleFaq = (index) => {
        setVikActiveFaq(vikActiveFaq === index ? null : index)
    }

    const vikFaqs = [
        { question: 'Why do some travelers resist Viking Cruises?', answer: 'Many travelers assume Viking is overly marketed or not luxurious enough compared to ultra-luxury cruise brands.' },
        { question: 'Is Viking considered a luxury cruise line?', answer: 'Viking is generally considered an upper-premium to luxury cruise line focused on destination immersion and elegant simplicity.' },
        { question: 'What makes Viking different from other cruise lines?', answer: 'Viking emphasizes adults-only travel, cultural enrichment, and destination-focused experiences rather than onboard attractions.' },
        { question: 'Does Viking have casinos onboard?', answer: 'No. Viking ships do not feature casinos.' },
        { question: 'Are Viking cruises adults only?', answer: 'Yes. Viking welcomes guests age 18 and older.' },
        { question: 'Is Viking worth the money?', answer: 'Many travelers find Viking offers excellent value due to its included excursions, dining, enrichment programs, and service.' },
        { question: 'What is included in a Viking cruise fare?', answer: 'Typically accommodations, dining, Wi-Fi, one shore excursion per port, enrichment programs, and select beverages with meals.' },
        { question: 'Is Viking better than ultra-luxury cruise lines?', answer: 'Not necessarily. Viking serves a different market focused on value and destination immersion rather than ultra-luxury inclusions.' },
        { question: 'What age group typically sails with Viking?', answer: 'Most guests are mature travelers, though the age range continues to broaden.' },
        { question: 'Does Viking offer river cruises and ocean cruises?', answer: 'Yes. Viking operates river cruises, ocean cruises, and expedition cruises.' },
        { question: 'What surprised travelers most about Viking?', answer: 'Many travelers are surprised by the ship design, service quality, dining, and destination-focused experience.' },
        { question: 'Is Viking good for first-time cruisers?', answer: "Yes. Viking's straightforward approach and destination focus often appeal to first-time cruisers." },
        { question: 'Does Viking include shore excursions?', answer: 'Yes. Most itineraries include at least one excursion in every port.' },
        { question: 'Why is Viking so popular?', answer: 'Its combination of value, quality, adults-only travel, and destination-focused experiences appeals to a wide range of travelers.' },
        { question: 'Would you recommend Viking today?', answer: 'Yes. For travelers seeking cultural enrichment, elegant ships, and excellent value, Viking is often an outstanding choice.' }
    ]

    const vikSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years",
                "name": "Why I Resisted Viking for Years",
                "url": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years",
                "description": "An honest look at why a luxury travel advisor resisted Viking Cruises for years and what ultimately changed their perspective.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in cruise vacations, river cruises, expedition cruises and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years#article",
                "headline": "Why I Resisted Viking for Years",
                "url": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years",
                "description": "Discover why a luxury travel advisor resisted Viking Cruises for years, what changed their mind, and what surprised them most onboard.",
                "image": "https://www.tripsshipsluxurytravel.com/images/why-i-resisted-viking-for-years.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert cruise planning and cruise line comparison services helping travelers choose the best luxury cruise experience."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Viking Cruises", "item": "https://www.tripsshipsluxurytravel.com/viking-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Why I Resisted Viking for Years", "item": "https://www.tripsshipsluxurytravel.com/why-i-resisted-viking-for-years" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Why do some travelers resist Viking Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers assume Viking is overly marketed or less luxurious than ultra-luxury cruise brands." } },
                    { "@type": "Question", "name": "Is Viking considered a luxury cruise line?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking is generally considered an upper-premium to luxury cruise line focused on destination immersion." } },
                    { "@type": "Question", "name": "What makes Viking different from other cruise lines?", "acceptedAnswer": { "@type": "Answer", "text": "Viking emphasizes adults-only travel, cultural enrichment, and destination-focused experiences." } },
                    { "@type": "Question", "name": "Does Viking have casinos onboard?", "acceptedAnswer": { "@type": "Answer", "text": "No. Viking ships do not feature casinos." } },
                    { "@type": "Question", "name": "Are Viking cruises adults only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking welcomes guests age 18 and older." } },
                    { "@type": "Question", "name": "Is Viking worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers find Viking offers excellent value through included excursions, dining, and enrichment programs." } },
                    { "@type": "Question", "name": "What is included in a Viking cruise fare?", "acceptedAnswer": { "@type": "Answer", "text": "Typically accommodations, dining, Wi-Fi, enrichment programs, and one excursion per port." } },
                    { "@type": "Question", "name": "What surprised travelers most about Viking?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers are surprised by the ship design, service quality, dining, and overall atmosphere." } },
                    { "@type": "Question", "name": "Is Viking good for first-time cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking's destination-focused experience often appeals to first-time cruisers." } },
                    { "@type": "Question", "name": "Does Viking include shore excursions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most itineraries include at least one excursion in every port." } },
                    { "@type": "Question", "name": "Why is Viking so popular?", "acceptedAnswer": { "@type": "Answer", "text": "Its combination of value, adults-only travel, and destination-focused experiences appeals to many travelers." } },
                    { "@type": "Question", "name": "Would you recommend Viking today?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking is an excellent option for travelers seeking culture, comfort, and value." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Why I Resisted Viking Cruises for Years | Honest Viking Cruise Review</title>
                <meta name="title" content="Why I Resisted Viking Cruises for Years | Honest Viking Cruise Review" />
                <meta name="description" content="Discover why I resisted Viking Cruises for years, what finally changed my mind, and what surprised me most onboard. An honest look at Viking river and ocean cruising for luxury travelers." />
                <meta name="keywords" content="Why I Resisted Viking for Years, Viking Cruise Review, Is Viking Worth It, Viking Ocean Cruises Review, Viking River Cruises Review, Viking Cruise Experience, Luxury Cruise Reviews" />
                <script type="application/ld+json">{JSON.stringify(vikSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {vikHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${vikCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Honest Viking Cruise Review · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Why I Resisted Viking for Years
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        An honest look at Viking River Cruises and Viking Ocean Cruises from a luxury travel advisor who finally changed her mind.
                    </p>
                </div>
            </section>

            {/* ── CONFESSION OPENER ── */}
            <section className="vik-confession-section">
                <div className="vik-confession-container">
                    <div className="vik-confession-grid">

                        <div className="vik-confession-text-col">
                            <span className="vik-confession-eyebrow">AN HONEST ADMISSION</span>
                            <p className="vik-confession-opener">I'll admit it.</p>
                            <p className="vik-confession-lead">For years, I avoided Viking.</p>

                            <div className="vik-confession-body-block">
                                <p>As a luxury travel advisor, I constantly heard travelers rave about Viking River Cruises and Viking Ocean Cruises. Friends recommended them. Clients asked about them. Industry awards seemed endless.</p>
                                <p>Yet I remained skeptical.</p>
                                <p>I assumed Viking was overrated.</p>
                                <p>I thought it was a cruise line built primarily on marketing.</p>
                                <p>And honestly, I believed there were better luxury options available.</p>
                            </div>

                            <div className="vik-confession-reveal-box">
                                <div className="vik-confession-reveal-line"></div>
                                <p className="vik-confession-reveal-text">Then I finally experienced Viking for myself.</p>
                                <p className="vik-confession-reveal-sub">What I discovered completely changed my perspective.</p>
                            </div>
                        </div>

                        <div className="vik-confession-image-col">
                            <div className="vik-confession-image-frame">
                                {/* <img src={vikingShipExterior} alt="Viking cruise ship" className="vik-confession-img" /> */}
                                <div className="vik-confession-img-overlay"></div>
                                <div className="vik-confession-img-badge">
                                    <Star size={13} />
                                    <span>Viking River &amp; Ocean Cruises</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ORIGINAL ASSUMPTIONS ── */}
            <section className="vik-assumptions-section">
                <div className="vik-assumptions-container">

                    <div className="vik-assumptions-header">
                        <span className="vik-assumptions-eyebrow">PRECONCEIVED NOTIONS</span>
                        <h2 className="medi-section-heading vik-dark-heading">My Original Assumptions About Viking</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered vik-separator-muted"></div>
                        <p className="vik-assumptions-intro">Like many experienced travelers, I had several preconceived notions.</p>
                        <p className="vik-assumptions-intro">I believed Viking was:</p>
                    </div>

                    <div className="vik-assumptions-grid">
                        {[
                            { num: '01', text: 'Too mainstream' },
                            { num: '02', text: 'Too large' },
                            { num: '03', text: 'Not luxurious enough' },
                            { num: '04', text: 'Focused primarily on older travelers' },
                            { num: '05', text: 'More marketing than substance' }
                        ].map((item, idx) => (
                            <div key={idx} className="vik-assumption-card">
                                <span className="vik-assumption-num">{item.num}</span>
                                <p className="vik-assumption-text">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="vik-assumptions-footer-box">
                        <p>I regularly recommended other luxury cruise lines before seriously considering Viking.</p>
                        <p>In hindsight, many of those assumptions were wrong.</p>
                    </div>

                </div>
            </section>

            {/* ── MARKETING MACHINE ── */}
            <section className="vik-marketing-section">
                <div className="vik-marketing-container">
                    <div className="vik-marketing-grid">

                        <div className="vik-marketing-text-col">
                            <span className="vik-section-eyebrow">THE SKEPTIC'S VIEW</span>
                            <h2 className="medi-section-heading">The Marketing Machine Made Me Skeptical</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="vik-marketing-lead">One reason I resisted Viking was because it seemed impossible to avoid.</p>
                            <p className="vik-marketing-sub">Everywhere I looked there were:</p>

                            <div className="vik-channels-grid">
                                {[
                                    { Icon: Monitor, label: 'Television commercials' },
                                    { Icon: Newspaper, label: 'Magazine advertisements' },
                                    { Icon: Mail, label: 'Direct mail promotions' },
                                    { Icon: Globe, label: 'Travel industry campaigns' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="vik-channel-item">
                                        <div className="vik-channel-icon-box"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="vik-marketing-insight-box">
                                <p>The sheer visibility made me suspicious.</p>
                                <p>When a brand dominates advertising, many luxury travelers automatically assume the experience won't live up to the hype.</p>
                                <p>I certainly did.</p>
                            </div>
                        </div>

                        <div className="vik-marketing-image-col">
                            <div className="vik-image-frame">
                                {/* <img src={vikingMarketing} alt="Viking cruise ship at sea" className="vik-frame-img" /> */}
                                <div className="vik-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── LUXURY PIVOT ── */}
            <section className="vik-luxury-pivot-section">
                <div className="vik-luxury-pivot-container">

                    <div className="vik-pivot-header">
                        <span className="vik-section-eyebrow">REDEFINING LUXURY</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>I Thought Viking Wasn't Truly Luxury</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="vik-pivot-intro">Another misconception was luxury.</p>
                        <p className="vik-pivot-sub">When comparing Viking to brands like:</p>
                    </div>

                    <div className="vik-luxury-pivot-grid">

                        <div className="vik-brands-col">
                            <div className="vik-brands-chips">
                                {['Seabourn', 'Regent Seven Seas', 'Silversea', 'Scenic'].map((brand, idx) => (
                                    <div key={idx} className="vik-brand-chip">
                                        <Crown size={14} />
                                        <span>{brand}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="vik-comparison-caveat">I assumed Viking would feel like a step down.</p>
                            <p className="vik-comparison-clarify">What I didn't understand was that Viking isn't trying to compete directly with ultra-luxury brands.</p>
                        </div>

                        <div className="vik-pivot-arrow-col">
                            <div className="vik-pivot-arrow-circle">
                                <ArrowRight size={28} />
                            </div>
                        </div>

                        <div className="vik-affordable-luxury-col">
                            <div className="vik-al-card">
                                <span className="vik-al-badge">AFFORDABLE LUXURY</span>
                                <h3 className="vik-al-heading">Viking Created Its Own Category</h3>
                                <p className="vik-al-body">Instead, Viking created its own category: Affordable Luxury.</p>
                                <p className="vik-al-body">The experience isn't built around butlers and caviar.</p>
                                <p className="vik-al-body">It's built around comfort, design, destination immersion, and exceptional service.</p>
                                <div className="vik-al-pillars">
                                    {[
                                        { Icon: Heart, text: 'Comfort' },
                                        { Icon: Eye, text: 'Design' },
                                        { Icon: Compass, text: 'Destination immersion' },
                                        { Icon: Star, text: 'Exceptional service' }
                                    ].map(({ Icon, text }, idx) => (
                                        <div key={idx} className="vik-al-pillar">
                                            <div className="vik-al-pillar-icon"><Icon size={15} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="vik-al-footer-text">That's a very different kind of luxury.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── THEN I STEPPED ONBOARD – REVELATION ── */}
            <section className="vik-reveal-section">
                {/* <div className="vik-reveal-bg" style={{ backgroundImage: `url(${vikingOnboard})` }}></div> */}
                <div className="vik-reveal-overlay"></div>
                <div className="vik-reveal-content">
                    <span className="vik-reveal-eyebrow">THE MOMENT EVERYTHING CHANGED</span>
                    <h2 className="vik-reveal-heading">Then I Stepped Onboard</h2>
                    <p className="vik-reveal-intro">The first surprise happened immediately.</p>
                    <div className="vik-reveal-descriptors">
                        {['The ships felt calm.', 'Elegant.', 'Sophisticated.'].map((d, idx) => (
                            <div key={idx} className="vik-reveal-descriptor">
                                <span>{d}</span>
                            </div>
                        ))}
                    </div>
                    <div className="vik-reveal-observations">
                        <p>Nothing felt crowded.</p>
                        <p>Nothing felt flashy.</p>
                    </div>
                    <div className="vik-reveal-conclusion-box">
                        <p>Instead, the atmosphere felt more like a luxury Scandinavian hotel than a traditional cruise ship.</p>
                        <p>That alone challenged my assumptions.</p>
                    </div>
                </div>
            </section>

            {/* ── SCANDINAVIAN DESIGN ── */}
            <section className="vik-design-section">
                <div className="vik-design-container">
                    <div className="vik-design-grid">

                        <div className="vik-design-image-col">
                            <div className="vik-image-frame vik-design-frame">
                                {/* <img src={vikingDesignInterior} alt="Viking ship Scandinavian interior design" className="vik-frame-img" /> */}
                                <div className="vik-frame-overlay vik-frame-overlay-light"></div>
                                <div className="vik-design-badge">
                                    <Sparkles size={13} />
                                    <span>Scandinavian-Inspired Design</span>
                                </div>
                            </div>
                        </div>

                        <div className="vik-design-text-col">
                            <span className="vik-section-eyebrow">AESTHETIC PHILOSOPHY</span>
                            <h2 className="medi-section-heading">The Scandinavian Design Changed Everything</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="vik-design-lead">One of Viking's greatest strengths is design.</p>
                            <p className="vik-design-body">Unlike many cruise lines that overwhelm guests with bright colors, casinos, shopping promenades, and constant stimulation, Viking embraces simplicity.</p>
                            <p className="vik-design-sub">You'll find:</p>
                            <div className="vik-design-features">
                                {[
                                    { Icon: Leaf, text: 'Natural woods' },
                                    { Icon: Sun, text: 'Neutral colors' },
                                    { Icon: Eye, text: 'Large windows' },
                                    { Icon: Heart, text: 'Comfortable lounges' },
                                    { Icon: Sparkles, text: 'Thoughtful public spaces' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="vik-design-feature-item">
                                        <div className="vik-design-feature-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="vik-design-quote-box">
                                <p>The design creates a sense of calm that many luxury travelers appreciate.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ADULTS-ONLY ── */}
            <section className="vik-adults-section">
                <div className="vik-adults-container">
                    <div className="vik-adults-grid">

                        <div className="vik-adults-text-col">
                            <span className="vik-section-eyebrow vik-eyebrow-light">REFINED ATMOSPHERE</span>
                            <h2 className="medi-section-heading vik-dark-heading">The Adults-Only Environment Was Refreshing</h2>
                            <div className="medi-heading-separator-bar vik-separator-muted"></div>
                            <p className="vik-adults-lead">Another pleasant surprise was the adults-only atmosphere.</p>
                            <p className="vik-adults-body">Viking welcomes guests 18 and older.</p>
                            <p className="vik-adults-sub">There are:</p>
                            <ul className="vik-no-list">
                                {[
                                    'No water slides',
                                    'No children\'s clubs',
                                    'No character experiences',
                                    'No noisy pool games'
                                ].map((item, idx) => (
                                    <li key={idx} className="vik-no-item">
                                        <div className="vik-no-icon"><X size={14} /></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="vik-adults-result-box">
                                <p>Instead, guests enjoy a quieter and more sophisticated onboard experience.</p>
                                <p>For many travelers, that's a significant advantage.</p>
                            </div>
                        </div>

                        <div className="vik-adults-image-col">
                            <div className="vik-image-frame">
                                {/* <img src={vikingAdultsPool} alt="Viking ship adults-only pool deck" className="vik-frame-img" /> */}
                                <div className="vik-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATION FOCUS ── */}
            <section className="vik-destination-section">
                <div className="vik-destination-container">
                    <div className="vik-destination-grid">

                        <div className="vik-destination-text-col">
                            <span className="vik-section-eyebrow">TRAVEL PHILOSOPHY</span>
                            <h2 className="medi-section-heading">Viking Understands Destination-Focused Travel</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="vik-destination-lead">What ultimately changed my mind was Viking's commitment to destinations.</p>
                            <div className="vik-destination-contrast-box">
                                <div className="vik-contrast-item vik-contrast-other">
                                    <div className="vik-contrast-label">Many cruise lines focus on</div>
                                    <div className="vik-contrast-value">The Ship</div>
                                </div>
                                <div className="vik-contrast-divider">
                                    <ArrowRight size={22} />
                                </div>
                                <div className="vik-contrast-item vik-contrast-viking">
                                    <div className="vik-contrast-label">Viking focuses on</div>
                                    <div className="vik-contrast-value">Where You're Going</div>
                                </div>
                            </div>
                            <p className="vik-destination-sub">Every itinerary emphasizes:</p>
                            <div className="vik-destination-pillars">
                                {[
                                    { Icon: BookOpen, text: 'History' },
                                    { Icon: Globe, text: 'Culture' },
                                    { Icon: MapPin, text: 'Local experiences' },
                                    { Icon: GraduationCap, text: 'Educational enrichment' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="vik-destination-pillar">
                                        <div className="vik-destination-pillar-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="vik-destination-quote-box">
                                <p>The cruise becomes a gateway to the destination rather than the destination itself.</p>
                                <p>That philosophy resonated with me.</p>
                            </div>
                        </div>

                        <div className="vik-destination-image-col">
                            <div className="vik-image-frame vik-destination-frame">
                                {/* <img src={vikingDestination} alt="Viking cruise destination immersion" className="vik-frame-img" /> */}
                                <div className="vik-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── INCLUDED EXCURSIONS VALUE ── */}
            <section className="vik-inclusions-section">
                <div className="vik-inclusions-container">

                    <div className="vik-inclusions-header">
                        <span className="vik-section-eyebrow">STRONG OVERALL VALUE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>The Included Excursions Add Real Value</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="vik-inclusions-intro">Initially, Viking's pricing didn't seem particularly compelling.</p>
                        <p className="vik-inclusions-sub">However, after evaluating the overall package, I realized the value was stronger than I expected.</p>
                        <p className="vik-inclusions-sub">Included benefits often include:</p>
                    </div>

                    <div className="vik-inclusions-grid">
                        {[
                            { Icon: MapPin, label: 'Shore excursions' },
                            { Icon: Wifi, label: 'Wi-Fi' },
                            { Icon: Utensils, label: 'Specialty dining' },
                            { Icon: Mic, label: 'Enrichment lectures' },
                            { Icon: Star, label: 'Beer and wine with meals' }
                        ].map(({ Icon, label }, idx) => (
                            <div key={idx} className="vik-inclusion-card">
                                <div className="vik-inclusion-icon"><Icon size={22} /></div>
                                <span className="vik-inclusion-label">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="vik-inclusions-image-row">
                        <div className="vik-image-frame vik-inclusions-frame">
                            {/* <img src={vikingValue} alt="Viking cruise included value" className="vik-frame-img" /> */}
                            <div className="vik-frame-overlay"></div>
                            <div className="vik-inclusions-img-callout">
                                <CheckCircle size={16} />
                                <span>When comparing total vacation costs, Viking frequently offers excellent value.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── WHAT SURPRISED ME MOST ── */}
            <section className="vik-surprise-section">
                <div className="vik-surprise-container">

                    <div className="vik-surprise-header">
                        <span className="vik-section-eyebrow">ONBOARD DISCOVERIES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>What Surprised Me Most</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="vik-surprise-intro">Several things stood out during my first Viking experience.</p>
                    </div>

                    <div className="vik-surprise-grid">
                        {[
                            { Icon: Users, title: 'Service', text: 'The service was warm, attentive, and genuine without feeling overly formal.' },
                            { Icon: Utensils, title: 'Dining', text: 'The food consistently exceeded expectations.' },
                            { Icon: Ship, title: 'Space', text: 'Ships felt spacious despite carrying hundreds of guests.' },
                            { Icon: BookOpen, title: 'Enrichment', text: 'Lectures and destination programming were among the best I have experienced.' },
                            { Icon: Smile, title: 'Simplicity', text: 'The absence of constant upselling was refreshing.' }
                        ].map(({ Icon, title, text }, idx) => (
                            <div key={idx} className="vik-surprise-card">
                                <div className="vik-surprise-card-icon"><Icon size={24} /></div>
                                <h3 className="vik-surprise-card-title">{title}</h3>
                                <p className="vik-surprise-card-text">{text}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT (reusing existing medi classes) ── */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Cruise Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Viking's Approach Resonates with Sophisticated Travelers
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, sophisticated travelers increasingly seek authentic experiences over onboard spectacle.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel, Angela consistently sees travelers prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Authenticity', 'Simplicity', 'Destination immersion', 'Cultural connection', 'Personalized service', 'Genuine value'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate increasingly complex cruise choices with real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Viking river voyages', icon: Anchor },
                                        { title: 'Viking ocean cruises', icon: Globe },
                                        { title: 'Expedition travel', icon: Compass },
                                        { title: 'Premium global travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <IconComponent size={14} />
                                                </div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT VIKING DOESN'T DO BEST ── */}
            <section className="vik-limits-section">
                <div className="vik-limits-container">

                    <div className="vik-limits-header">
                        <span className="vik-section-eyebrow vik-eyebrow-light">AN HONEST ASSESSMENT</span>
                        <h2 className="medi-section-heading vik-dark-heading">What Viking Still Doesn't Do Best</h2>
                        <div className="medi-heading-separator-bar vik-separator-muted medi-bar-centered"></div>
                        <p className="vik-limits-intro">Changing my mind doesn't mean Viking is perfect.</p>
                        <p className="vik-limits-sub">There are still situations where I recommend other cruise lines.</p>
                        <p className="vik-limits-sub">For example:</p>
                    </div>

                    <div className="vik-limits-grid">

                        <div className="vik-limit-card">
                            <div className="vik-limit-card-icon-wrap">
                                <Crown size={24} />
                            </div>
                            <h3 className="vik-limit-card-title">Ultra-Luxury Travelers</h3>
                            <p className="vik-limit-card-body">Those seeking butlers, fully inclusive luxury, and highly personalized service may prefer:</p>
                            <div className="vik-limit-alt-brands">
                                {['Regent Seven Seas', 'Silversea', 'Scenic'].map((brand, idx) => (
                                    <span key={idx} className="vik-limit-brand-chip">{brand}</span>
                                ))}
                            </div>
                        </div>

                        <div className="vik-limit-card">
                            <div className="vik-limit-card-icon-wrap">
                                <Baby size={24} />
                            </div>
                            <h3 className="vik-limit-card-title">Families</h3>
                            <p className="vik-limit-card-body">Viking isn't designed for children.</p>
                        </div>

                        <div className="vik-limit-card">
                            <div className="vik-limit-card-icon-wrap">
                                <Compass size={24} />
                            </div>
                            <h3 className="vik-limit-card-title">Adventure Travelers</h3>
                            <p className="vik-limit-card-body">Some expedition-focused brands offer more active experiences.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── WHO SHOULD CONSIDER / WHO MIGHT PREFER ── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">

                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Should Consider Viking?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">

                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Who Should Consider Viking</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { Icon: Compass, text: 'Value destination immersion' },
                                    { Icon: Sparkles, text: 'Appreciate thoughtful design' },
                                    { Icon: Users, text: 'Prefer adults-only travel' },
                                    { Icon: Globe, text: 'Enjoy cultural enrichment' },
                                    { Icon: Crown, text: 'Want luxury without unnecessary extravagance' },
                                    { Icon: Gem, text: 'Seek strong overall value' }
                                ].map(({ Icon, text }, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Who Might Prefer Another Cruise Line</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { Icon: Baby, text: 'Need family programming' },
                                    { Icon: Star, text: 'Want a casino onboard' },
                                    { Icon: Crown, text: 'Prefer highly inclusive luxury' },
                                    { Icon: Music, text: 'Want extensive nightlife' },
                                    { Icon: Compass, text: 'Prioritize adventure activities' }
                                ].map(({ Icon, text }, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FINAL VERDICT ── */}
            <section className="vik-verdict-section">
                <div className="vik-verdict-bg"></div>
                <div className="vik-verdict-container">

                    <div className="vik-verdict-eyebrow-wrap">
                        <ThumbsUp size={20} />
                        <span className="vik-verdict-eyebrow-text">THE BOTTOM LINE</span>
                    </div>

                    <h2 className="vik-verdict-heading">My Final Verdict</h2>
                    <div className="vik-verdict-separator"></div>

                    <div className="vik-verdict-card">
                        <p className="vik-verdict-body">For years, I resisted Viking because I assumed popularity meant compromise.</p>
                        <p className="vik-verdict-body vik-verdict-emphasis">I was wrong.</p>
                        <p className="vik-verdict-body">What I discovered was a cruise line that understands exactly who it serves.</p>
                        <p className="vik-verdict-body">Viking doesn't try to be everything to everyone.</p>
                        <p className="vik-verdict-body">Instead, it delivers a refined, destination-focused experience that appeals to curious travelers who value culture, comfort, and thoughtful design.</p>
                    </div>

                    <div className="vik-verdict-conclusion">
                        <div className="vik-verdict-conclusion-line"></div>
                        <p className="vik-verdict-final-stmt">Today, Viking is a cruise line I confidently recommend.</p>
                        <p className="vik-verdict-final-stmt">Not because it's perfect.</p>
                        <p className="vik-verdict-final-stmt">But because it consistently delivers on its promise.</p>
                        <p className="vik-verdict-final-stmt">And that's something many travel brands struggle to do.</p>
                        <div className="vik-verdict-conclusion-line"></div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {vikFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => vikToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{vikActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {vikActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">

                        <h2 className="medi-cta-heading-white">Ready to Experience Viking for Yourself?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Viking cruising is no longer simply about transportation between ports — it is about authentic experiences, cultural immersion, elegant simplicity, and seamless planning.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select the ideal Viking experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Viking River Cruises',
                                    'Viking Ocean Cruises',
                                    'Viking Expedition voyages',
                                    'First-time Viking cruising',
                                    'Comparing Viking to other luxury lines'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Viking Options
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default WhyIResistedViking