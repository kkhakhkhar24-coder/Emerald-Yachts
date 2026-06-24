import Navbar from '../../components/Navbar/Navbar'
import './Performingartstravel.css'

import {
    CheckCircle, Anchor, Award, Phone, LayoutList,
    Users, Star, Sparkles, Globe, Heart, Compass,
    Music, Mic, GraduationCap, Theater, Crown,
    Calendar, MapPin, UserCheck, TrendingUp, Target,
    BookOpen, Landmark, Building2, HeartHandshake,
    Ticket, Trophy, Camera, Eye, Megaphone, Ship,
    ChevronRight, Video, Layers
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE PLACEHOLDERS — swap with real imports
   e.g. import artsHero1 from '../../assets/PerformingArts/hero1.jpg'
──────────────────────────────────────────────────────────────── */
// const HERO_1           = 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1600&q=80'
// const HERO_2           = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80'
// const HERO_3           = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80'

// const WHAT_IMG         = 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900&q=80'
// const ITALY_IMG        = 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=900&q=80'
// const LONDON_IMG       = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80'
// const VIENNA_IMG       = 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=900&q=80'
// const PARIS_IMG        = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80'
// const NYC_IMG          = 'https://images.unsplash.com/photo-1499092346302-b8d7a16b4d81?w=900&q=80'
// const BACKSTAGE_IMG    = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80'
// const ENGAGEMENT_IMG   = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80'
// const GROUP_TRAVEL_IMG = 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&q=80'
// const PARTNER_IMG      = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80'
// const ANGELA_IMG       = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'

/* ════════════════════════════════════════════════════════════ */

function PerformingArtsTravel() {

    const heroImages = []
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const faqs = [
        { question: 'What are travel programs for theaters and performing arts organizations?', answer: 'They are curated group travel experiences designed for patrons, donors, subscribers, and supporters of arts organizations.' },
        { question: 'Why do performing arts organizations offer travel programs?', answer: 'Travel programs help strengthen donor relationships, increase patron engagement, and create unique member experiences.' },
        { question: 'Who typically participates in these travel programs?', answer: 'Patrons, subscribers, donors, board members, and arts enthusiasts commonly participate.' },
        { question: 'What destinations are popular for arts-focused travel?', answer: 'Popular destinations include Italy, London, Vienna, Paris, and New York City.' },
        { question: 'Do these programs include live performances?', answer: 'Yes. Many itineraries include theater productions, concerts, opera performances, ballet performances, and cultural events.' },
        { question: 'Can travel programs include backstage experiences?', answer: 'Yes. Many programs feature backstage tours, rehearsals, artist meet-and-greets, and VIP access opportunities.' },
        { question: 'Are performing arts travel programs educational?', answer: 'Absolutely. Most include lectures, expert presentations, cultural discussions, and guided experiences.' },
        { question: 'How do travel programs benefit arts organizations?', answer: 'They strengthen relationships, enhance stewardship efforts, and create meaningful engagement opportunities.' },
        { question: 'Are these programs only for donors?', answer: 'No. Programs may be open to subscribers, members, patrons, alumni groups, and arts supporters.' },
        { question: 'Can organizations customize travel itineraries?', answer: 'Yes. Programs are typically customized around organizational goals and audience interests.' },
        { question: 'What is the ideal group size?', answer: 'Many arts travel programs operate successfully with 15–40 participants, though sizes vary.' },
        { question: 'Can domestic travel programs be offered?', answer: 'Yes. Cities such as New York, Chicago, and Washington, D.C. are popular domestic options.' },
        { question: 'Do organizations earn revenue from travel programs?', answer: 'Some organizations generate additional revenue through carefully structured travel programs.' },
        { question: 'How far in advance should travel programs be planned?', answer: 'Most successful programs begin planning 12–18 months before departure.' },
        { question: 'Why work with a professional travel advisor?', answer: 'A travel advisor manages logistics, cultural experiences, ticketing, supplier relationships, and guest services, ensuring a seamless experience.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations",
                "name": "Travel Programs for Theaters & Performing Arts Organizations",
                "url": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations",
                "description": "Discover how theaters, symphonies, opera companies, ballet organizations, and performing arts centers use travel programs to engage patrons, donors, and supporters through cultural experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations#article" }
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
                "description": "Luxury travel agency specializing in cultural travel, donor travel, alumni travel, cruises, and customized group travel programs."
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
                "@id": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations#article",
                "headline": "Travel Programs for Theaters & Performing Arts Organizations",
                "url": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations",
                "description": "Learn how performing arts organizations use travel programs to strengthen patron relationships, create cultural experiences, and increase donor engagement.",
                "image": "https://www.tripsshipsluxurytravel.com/images/performing-arts-travel-programs.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations" }
            },
            {
                "@type": "Service",
                "name": "Performing Arts Travel Programs",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Cultural and Performing Arts Group Travel Planning",
                "description": "Customized travel programs for theaters, opera companies, symphonies, ballet organizations, and performing arts centers."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Group Travel Programs", "item": "https://www.tripsshipsluxurytravel.com/group-travel-programs" },
                    { "@type": "ListItem", "position": 3, "name": "Travel Programs for Theaters & Performing Arts Organizations", "item": "https://www.tripsshipsluxurytravel.com/travel-programs-for-theaters-performing-arts-organizations" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What are travel programs for theaters and performing arts organizations?", "acceptedAnswer": { "@type": "Answer", "text": "They are curated group travel experiences designed for patrons, donors, subscribers, and supporters of arts organizations." } },
                    { "@type": "Question", "name": "Why do performing arts organizations offer travel programs?", "acceptedAnswer": { "@type": "Answer", "text": "Travel programs help strengthen donor relationships, increase patron engagement, and create unique member experiences." } },
                    { "@type": "Question", "name": "Who typically participates in these travel programs?", "acceptedAnswer": { "@type": "Answer", "text": "Patrons, subscribers, donors, board members, and arts enthusiasts commonly participate." } },
                    { "@type": "Question", "name": "What destinations are popular for arts-focused travel?", "acceptedAnswer": { "@type": "Answer", "text": "Popular destinations include Italy, London, Vienna, Paris, and New York City." } },
                    { "@type": "Question", "name": "Do these programs include live performances?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many itineraries include theater productions, concerts, opera performances, ballet performances, and cultural events." } },
                    { "@type": "Question", "name": "Can travel programs include backstage experiences?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many programs feature backstage tours, rehearsals, artist meet-and-greets, and VIP access opportunities." } },
                    { "@type": "Question", "name": "Are performing arts travel programs educational?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most include lectures, expert presentations, cultural discussions, and guided experiences." } },
                    { "@type": "Question", "name": "How do travel programs benefit arts organizations?", "acceptedAnswer": { "@type": "Answer", "text": "They strengthen relationships, enhance stewardship efforts, and create meaningful engagement opportunities." } },
                    { "@type": "Question", "name": "Are these programs only for donors?", "acceptedAnswer": { "@type": "Answer", "text": "No. Programs may be open to subscribers, members, patrons, alumni groups, and arts supporters." } },
                    { "@type": "Question", "name": "Can organizations customize travel itineraries?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Programs are typically customized around organizational goals and audience interests." } },
                    { "@type": "Question", "name": "What is the ideal group size?", "acceptedAnswer": { "@type": "Answer", "text": "Many arts travel programs operate successfully with 15 to 40 participants." } },
                    { "@type": "Question", "name": "Why work with a professional travel advisor?", "acceptedAnswer": { "@type": "Answer", "text": "A travel advisor manages logistics, cultural experiences, ticketing, supplier relationships, and guest services." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Travel Programs for Theaters &amp; Performing Arts Organizations</title>
                <meta name="description" content="Discover how theaters, symphonies, opera companies, ballet organizations, and performing arts centers use travel programs to engage patrons, donors, and supporters through cultural experiences." />
                <meta name="keywords" content="Travel Programs for Theaters, Performing Arts Travel, Arts Donor Travel, Opera Travel Programs, Symphony Travel, Ballet Travel, Cultural Travel Programs" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ══════════════════════════════════
                HERO
            ══════════════════════════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Music size={16} />
                        <span>Inspiring Supporters Through Arts-Focused Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Travel Programs for Theaters &amp; Performing Arts Organizations
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Performing arts travel programs create meaningful engagement that extends far beyond the stage — exploring the world's greatest cultural destinations while strengthening connections to the organizations supporters love.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO (existing medi-intro)
            ══════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">

                        <div className="medi-intro-heading-column">
                            <span className="medi-premium-mini-badge">ARTS ENGAGEMENT TRAVEL</span>
                            <h2 className="medi-section-heading">Inspiring Supporters Through Arts-Focused Travel Experiences</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "The arts have always connected people through shared experiences, creativity, culture, and storytelling."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Today, theaters, symphonies, opera companies, performing arts centers, ballet organizations, and cultural institutions are discovering a powerful way to deepen relationships with patrons and supporters: curated travel programs.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Travel Programs for Theaters &amp; Performing Arts Organizations provide unique opportunities for donors, subscribers, board members, patrons, and arts enthusiasts to explore the world's greatest cultural destinations while strengthening their connection to the organization they support.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '28px' }}>
                                Whether attending a world-renowned opera in Italy, exploring London's West End, enjoying exclusive backstage experiences, or discovering the artistic treasures of Europe, performing arts travel programs create meaningful engagement that extends far beyond the stage.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {['Theaters', 'Symphony Orchestras', 'Opera Companies', 'Ballet Organizations', 'Performing Arts Centers', 'Cultural Institutions'].map((org, i) => (
                                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--medi-bg-soft)', color: 'var(--medi-navy)', fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '30px', border: '1px solid rgba(39,68,114,0.12)' }}>
                                        <CheckCircle size={13} style={{ color: 'var(--medi-green)' }} />
                                        {org}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHAT ARE PERFORMING ARTS TRAVEL PROGRAMS
                (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-what-section">
                <div className="pat-what-container">
                    <div className="pat-what-layout">
                        <div className="pat-what-image-col">
                        <img src={''} alt="Performing arts travel program" />
                            <div className="pat-what-image-overlay"></div>
                            <div className="pat-what-image-caption">
                                <p>Unlike traditional tours, these programs are designed around artistic and cultural enrichment while building stronger relationships among travelers and the organization.</p>
                            </div>
                        </div>

                        <div className="pat-what-content-col">
                            <span className="medi-itinerary-eyebrow">PROGRAM OVERVIEW</span>
                            <h2 className="medi-section-heading" style={{ margin: '12px 0 16px' }}>What Are Performing Arts Travel Programs?</h2>
                            <div className="medi-heading-separator-bar"></div>

                            <p className="pat-what-lead">
                                Performing arts travel programs are curated group journeys designed specifically for supporters of arts and cultural organizations.
                            </p>

                            <p className="pat-what-combine-label">These experiences often combine:</p>
                            <div className="pat-what-chips">
                                {[
                                    [Globe, 'Cultural immersion'],
                                    [Ticket, 'Live performances'],
                                    [GraduationCap, 'Educational programming'],
                                    [Eye, 'Behind-the-scenes access'],
                                    [Star, 'Expert-led experiences'],
                                    [HeartHandshake, 'Patron engagement opportunities'],
                                ].map(([Icon, label], i) => (
                                    <span key={i} className="pat-what-chip">
                                        <Icon size={15} />
                                        {label}
                                    </span>
                                ))}
                            </div>

                            <p className="pat-what-footer-note">
                                Unlike traditional tours, these programs are designed around artistic and cultural enrichment while building stronger relationships among travelers and the organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY ARTS ORGS OFFER TRAVEL + PATRON BENEFITS
                (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-why-section">
                <div className="pat-why-container">
                    <div className="pat-why-header">
                        <span className="medi-itinerary-eyebrow">ENGAGEMENT & BENEFITS</span>
                        <h2 className="medi-section-heading">Why Arts Organizations Offer Travel Programs</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pat-why-grid">
                        {/* Why Orgs panel */}
                        <div className="pat-why-panel">
                            <div className="pat-why-panel-header">
                                <div className="pat-why-panel-icon"><Building2 size={20} /></div>
                                <h3 className="pat-why-panel-title">Why Arts Organizations Offer Travel Programs</h3>
                            </div>
                            <div className="pat-why-panel-body">
                                <p className="pat-why-panel-intro">
                                    Many arts organizations are seeking innovative ways to engage patrons outside of performances and fundraising events. Travel programs help organizations:
                                </p>
                                <ul className="pat-why-list">
                                    {['Strengthen donor relationships', 'Increase patron loyalty', 'Build community among supporters', 'Create exclusive member benefits', 'Generate non-ticket revenue', 'Enhance donor stewardship efforts'].map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13.5px', color: '#64748b', fontStyle: 'italic', marginTop: '16px', lineHeight: '1.5' }}>
                                    Travel creates shared memories and meaningful experiences that deepen long-term engagement.
                                </p>
                            </div>
                        </div>

                        {/* Patron Benefits panel */}
                        <div className="pat-why-panel">
                            <div className="pat-why-panel-header">
                                <div className="pat-why-panel-icon"><Star size={20} /></div>
                                <h3 className="pat-why-panel-title">Benefits for Patrons and Supporters</h3>
                            </div>
                            <div className="pat-why-panel-body">
                                <p className="pat-why-panel-intro">
                                    Participants often enjoy experiences that would be difficult to arrange independently. Benefits may include:
                                </p>
                                <ul className="pat-why-list">
                                    {['Exclusive performances', 'VIP access', 'Private tours', 'Expert guides', 'Curated itineraries', 'Small group experiences'].map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13.5px', color: '#64748b', fontStyle: 'italic', marginTop: '16px', lineHeight: '1.5' }}>
                                    Travelers gain deeper cultural understanding while connecting with fellow arts enthusiasts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                DESTINATIONS — 5 city cards (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-destinations-section">
                <div className="pat-destinations-container">
                    <div className="pat-destinations-header">
                        <span className="medi-itinerary-eyebrow">CULTURAL DESTINATIONS</span>
                        <h2 className="medi-section-heading">Popular Performing Arts Travel Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pat-destinations-grid">
                        {/* Italy */}
                        <div className="pat-destination-card">
                            <div className="pat-destination-image-wrap">
                                {/* <img src={ITALY_IMG} alt="Italy performing arts travel" /> */}
                                <span className="pat-destination-badge">Most Sought-After</span>
                            </div>
                            <div className="pat-destination-body">
                                <h3 className="pat-destination-title">Italy</h3>
                                <p className="pat-destination-intro">Italy remains one of the most sought-after destinations for arts-focused travel. Highlights include:</p>
                                <ul className="pat-destination-list">
                                    {['La Scala in Milan', 'Teatro La Fenice in Venice', 'Florence cultural tours', 'Opera performances', 'Art and architecture experiences'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* London */}
                        <div className="pat-destination-card">
                            <div className="pat-destination-image-wrap">
                                {/* <img src={LONDON_IMG} alt="London performing arts travel" /> */}
                                <span className="pat-destination-badge">West End & Beyond</span>
                            </div>
                            <div className="pat-destination-body">
                                <h3 className="pat-destination-title">London</h3>
                                <p className="pat-destination-intro">London offers some of the world's finest performing arts experiences. Popular attractions include:</p>
                                <ul className="pat-destination-list">
                                    {['West End productions', 'Shakespeare performances', 'Royal Opera House', 'National Theatre', 'Private cultural tours'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Vienna */}
                        <div className="pat-destination-card">
                            <div className="pat-destination-image-wrap">
                                {/* <img src={VIENNA_IMG} alt="Vienna classical music travel" /> */}
                                <span className="pat-destination-badge">Classical Music Capital</span>
                            </div>
                            <div className="pat-destination-body">
                                <h3 className="pat-destination-title">Vienna</h3>
                                <p className="pat-destination-intro">Vienna is synonymous with classical music and artistic heritage. Experiences often include:</p>
                                <ul className="pat-destination-list">
                                    {['Vienna State Opera', 'Classical concerts', 'Historic music venues', 'Cultural lectures'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Paris */}
                        <div className="pat-destination-card">
                            <div className="pat-destination-image-wrap">
                                {/* <img src={PARIS_IMG} alt="Paris arts travel" /> */}
                                <span className="pat-destination-badge">Art, Music & History</span>
                            </div>
                            <div className="pat-destination-body">
                                <h3 className="pat-destination-title">Paris</h3>
                                <p className="pat-destination-intro">Paris combines art, music, theater, and history. Popular experiences include:</p>
                                <ul className="pat-destination-list">
                                    {['Opera Garnier', 'Ballet performances', 'Museum tours', 'Cultural walking tours'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* New York City — full width */}
                        <div className="pat-destination-card full-width">
                            <div className="pat-destination-image-wrap">
                                {/* <img src={NYC_IMG} alt="New York City arts travel" /> */}
                                <span className="pat-destination-badge">Domestic Arts Hub</span>
                            </div>
                            <div className="pat-destination-body">
                                <h3 className="pat-destination-title">New York City</h3>
                                <p className="pat-destination-intro">Domestic arts travel programs frequently focus on New York City. Highlights include:</p>
                                <ul className="pat-destination-list">
                                    {['Broadway productions', 'Lincoln Center', 'Carnegie Hall', 'Museum experiences'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                EDUCATIONAL COMPONENTS + BACKSTAGE EXPERIENCES
                (new dark section, own css)
            ══════════════════════════════════ */}
            <section className="pat-access-section">
                <div className="pat-access-container">
                    <div className="pat-access-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>ENRICHMENT & EXCLUSIVE ACCESS</span>
                        <h2 className="medi-section-heading">Educational Components &amp; Behind-the-Scenes Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pat-access-grid">
                        {/* Educational */}
                        <div className="pat-access-panel">
                            <div className="pat-access-panel-icon-row">
                                <div className="pat-access-panel-icon"><GraduationCap size={22} /></div>
                                <h3 className="pat-access-panel-title">Educational Components</h3>
                            </div>
                            <p className="pat-access-intro">One of the greatest strengths of performing arts travel programs is educational enrichment. Programs may include:</p>
                            <ul className="pat-access-list">
                                {['Artist presentations', 'Faculty lectures', 'Historical discussions', 'Cultural experts', 'Curator-led experiences'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#94a3b8', fontStyle: 'italic', marginTop: '16px', lineHeight: '1.5' }}>
                                Educational programming helps create deeper connections to performances and destinations.
                            </p>
                        </div>

                        {/* Backstage */}
                        <div className="pat-access-panel">
                            <div className="pat-access-panel-icon-row">
                                <div className="pat-access-panel-icon"><Eye size={22} /></div>
                                <h3 className="pat-access-panel-title">Behind-the-Scenes Experiences</h3>
                            </div>
                            <p className="pat-access-intro">Exclusive access often becomes a highlight of performing arts travel programs. Examples include:</p>
                            <ul className="pat-access-list">
                                {['Backstage tours', 'Rehearsal access', 'Artist meet-and-greets', 'Private performances', 'VIP venue experiences'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#94a3b8', fontStyle: 'italic', marginTop: '16px', lineHeight: '1.5' }}>
                                These opportunities provide memorable moments that patrons value highly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                DONOR & PATRON ENGAGEMENT + GROUP TRAVEL MADE EASY
                (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-engagement-section">
                <div className="pat-engagement-container">
                    <div className="pat-engagement-header">
                        <span className="medi-itinerary-eyebrow">RELATIONSHIP BUILDING</span>
                        <h2 className="medi-section-heading">Donor and Patron Engagement &amp; Group Travel Made Easy</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pat-engagement-grid">
                        {/* Donor Engagement */}
                        <div className="pat-engagement-card">
                            <div className="pat-engagement-img-wrap">
                                {/* <img src={ENGAGEMENT_IMG} alt="Donor and patron engagement" /> */}
                            </div>
                            <div className="pat-engagement-card-body">
                                <div className="pat-engagement-card-icon-row">
                                    <div className="pat-engagement-card-icon"><HeartHandshake size={20} /></div>
                                    <h3 className="pat-engagement-card-title">Donor and Patron Engagement</h3>
                                </div>
                                <p className="pat-engagement-intro">Travel programs naturally foster stronger relationships among participants. Benefits include:</p>
                                <ul className="pat-engagement-list">
                                    {['Shared experiences', 'Informal networking', 'Extended interaction with organizational leaders', 'Greater community connection'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="pat-engagement-footer-note">
                                    Many organizations find travel programs become powerful stewardship and cultivation tools.
                                </p>
                            </div>
                        </div>

                        {/* Group Travel Made Easy */}
                        <div className="pat-engagement-card">
                            <div className="pat-engagement-img-wrap">
                                {/* <img src={GROUP_TRAVEL_IMG} alt="Group travel management" /> */}
                            </div>
                            <div className="pat-engagement-card-body">
                                <div className="pat-engagement-card-icon-row">
                                    <div className="pat-engagement-card-icon"><Layers size={20} /></div>
                                    <h3 className="pat-engagement-card-title">Group Travel Made Easy</h3>
                                </div>
                                <p className="pat-engagement-intro">Professional travel management ensures a seamless experience. Services often include:</p>
                                <ul className="pat-engagement-list">
                                    {['Air coordination', 'Hotel arrangements', 'Event tickets', 'Ground transportation', 'Tour management', 'On-site support'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="pat-engagement-footer-note">
                                    This allows organizational leaders to focus on engagement rather than logistics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                IDEAL ORGANIZATIONS (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-orgs-section">
                <div className="pat-orgs-container">
                    <div className="pat-orgs-header">
                        <span className="medi-itinerary-eyebrow">IDEAL PARTNERS</span>
                        <h2 className="medi-section-heading">Ideal Organizations for Performing Arts Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', margin: '0 auto', textAlign: 'center', lineHeight: '1.7' }}>
                            Travel programs work especially well for:
                        </p>
                    </div>

                    <div className="pat-orgs-grid">
                        {/* Theaters */}
                        <div className="pat-org-card">
                            <div className="pat-org-header-row">
                                <div className="pat-org-icon-box"><Theater size={22} /></div>
                                <h3 className="pat-org-name">Theaters</h3>
                            </div>
                            <ul className="pat-org-list">
                                {['Regional theaters', 'Professional theater companies', 'Community theater organizations'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Symphony Orchestras */}
                        <div className="pat-org-card">
                            <div className="pat-org-header-row">
                                <div className="pat-org-icon-box"><Music size={22} /></div>
                                <h3 className="pat-org-name">Symphony Orchestras</h3>
                            </div>
                            <ul className="pat-org-list">
                                {['Patron travel', 'Donor engagement programs', 'Cultural enrichment journeys'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Opera Companies */}
                        <div className="pat-org-card">
                            <div className="pat-org-header-row">
                                <div className="pat-org-icon-box"><Mic size={22} /></div>
                                <h3 className="pat-org-name">Opera Companies</h3>
                            </div>
                            <ul className="pat-org-list">
                                {['Opera-focused travel', 'International performance experiences', 'VIP cultural programs'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Ballet Organizations */}
                        <div className="pat-org-card">
                            <div className="pat-org-header-row">
                                <div className="pat-org-icon-box"><Star size={22} /></div>
                                <h3 className="pat-org-name">Ballet Organizations</h3>
                            </div>
                            <ul className="pat-org-list">
                                {['Dance-focused travel', 'Performance-centered itineraries', 'Cultural exploration'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Performing Arts Centers */}
                        <div className="pat-org-card">
                            <div className="pat-org-header-row">
                                <div className="pat-org-icon-box"><Landmark size={22} /></div>
                                <h3 className="pat-org-name">Performing Arts Centers</h3>
                            </div>
                            <ul className="pat-org-list">
                                {['Subscriber travel programs', 'Member experiences', 'Patron stewardship initiatives'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY SPECIALIZED TRAVEL PARTNER (new dark section, own css)
            ══════════════════════════════════ */}
            <section className="pat-partner-section">
                <div className="pat-partner-container">
                    <div className="pat-partner-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>SPECIALIZED EXPERTISE</span>
                        <h2 className="medi-section-heading">Why Work With a Specialized Travel Partner?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pat-partner-layout">
                        <div>
                            <p className="pat-partner-intro">
                                Arts-focused travel requires expertise beyond traditional group travel planning. Important considerations include:
                            </p>
                            <ul className="pat-partner-list">
                                {['Performance schedules', 'Ticket procurement', 'Cultural programming', 'VIP access opportunities', 'Group logistics', 'Donor experience management'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '14.5px', color: '#94a3b8', fontStyle: 'italic', marginTop: '20px', lineHeight: '1.6' }}>
                                A specialized travel partner helps ensure every detail aligns with organizational goals and guest expectations.
                            </p>
                        </div>

                        <div className="pat-partner-image-col">
                            {/* <img src={PARTNER_IMG} alt="Specialized performing arts travel partner" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY TRIPS & SHIPS (new section, own css)
            ══════════════════════════════════ */}
            <section className="pat-services-section">
                <div className="pat-services-container">
                    <div className="pat-services-header">
                        <span className="medi-itinerary-eyebrow">OUR SERVICES</span>
                        <h2 className="medi-section-heading">Why Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '700px', margin: '0 auto 40px', textAlign: 'center', lineHeight: '1.7' }}>
                            Trips &amp; Ships Luxury Travel works with theaters, performing arts organizations, symphonies, museums, and cultural institutions to create extraordinary travel experiences. Our services include:
                        </p>
                    </div>

                    <div className="pat-services-grid">
                        {[
                            [Target, 'Custom Itinerary Design', 'Tailored journeys built around your organization\'s artistic vision and audience interests.'],
                            [HeartHandshake, 'Patron Travel Programs', 'Curated experiences that deepen patron loyalty and organizational connection.'],
                            [Users, 'Donor Engagement Travel', 'Strategic travel programs designed to cultivate and steward major donors.'],
                            [Crown, 'VIP Cultural Experiences', 'Exclusive access, private performances, and behind-the-scenes opportunities.'],
                            [Globe, 'International Arts-Focused Travel', 'Access to the world\'s greatest performing arts destinations.'],
                            [Layers, 'Full-Service Group Travel Management', 'End-to-end logistics so your team can focus entirely on guest engagement.'],
                        ].map(([Icon, title, desc], i) => (
                            <div key={i} className="pat-service-card">
                                <div className="pat-service-icon"><Icon size={20} /></div>
                                <h3 className="pat-service-title">{title}</h3>
                                <p className="pat-service-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="pat-services-closing">
                        We help organizations create journeys that inspire, educate, and strengthen relationships.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                ANGELA HUGHES — expert-editorial (reused)
            ══════════════════════════════════ */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={ANGELA_IMG} alt="Angela Hughes - Luxury Travel Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-eyebrow-container">
                                <Award size={16} className="medi-editorial-icon-badge" />
                                <span className="medi-editorial-eyebrow">TRUSTED EXPERTISE</span>
                            </div>
                            <h2 className="medi-editorial-title">Final Thoughts</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-lead-para">
                                Travel Programs for Theaters &amp; Performing Arts Organizations offer far more than a vacation.
                            </p>
                            <p className="medi-editorial-body-para">
                                They create opportunities for cultural enrichment, artistic discovery, donor stewardship, and community building.
                            </p>
                            <p className="medi-editorial-body-para">
                                By combining world-class performances, educational experiences, exclusive access, and luxury travel, organizations can deliver unforgettable journeys that strengthen engagement and deepen support for years to come.
                            </p>
                            <p className="medi-editorial-body-para">
                                Whether your organization serves theater lovers, opera patrons, ballet supporters, or music enthusiasts, a thoughtfully designed travel program can become one of your most valuable engagement initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                FAQ
            ══════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA
            ══════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Start Planning Your Performing Arts Travel Program</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Travel Programs for Theaters &amp; Performing Arts Organizations offer far more than a luxury vacation.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            They create opportunities for cultural enrichment, artistic discovery, donor stewardship, and community building. Whether your organization serves theater lovers, opera patrons, ballet supporters, or music enthusiasts, a thoughtfully designed travel program can become one of your most valuable engagement initiatives.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Italy opera & arts journeys', 'London West End programs', 'Vienna classical music travel', 'Paris cultural experiences', 'New York City arts programs'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Program Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PerformingArtsTravel