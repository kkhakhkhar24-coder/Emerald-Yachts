import Navbar from '../../components/Navbar/Navbar'
import './Donorsafaris.css'
// import Profile_AH from '../../assets/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/Profile_Picture_AH.jpg';

import hero1 from '../../assets/Donorsafaris/african-safari-sunrise-savannah-landscape-donor-travel.jpg'
import hero2 from '../../assets/Donorsafaris/luxury-safari-game-drive-sunset-donor-engagement.jpg'
import hero3 from '../../assets/Donorsafaris/luxury-safari-lodge-hospitality-donor-experience.jpg'

import destKenyaImg from '../../assets/Donorsafaris/great-migration-safari-wildebeest-zebra-crossing.png'
import destTanzaniaImg from '../../assets/Donorsafaris/luxury-safari-game-drive-sunset-wildlife-viewing.png'
import destSouthAfricaImg from '../../assets/Donorsafaris/private-safari-wildlife-game-drive-elephants.png'
import destBotswanaImg from '../../assets/Donorsafaris/mokoro-canoe-safari-elephant-wetlands.png'
import destRwandaImg from '../../assets/Donorsafaris/luxury-gorilla-trekking-rwanda-uganda.png'
import educationImg from '../../assets/Donorsafaris/luxury-safari-wildlife-education-program.png'
import conservationResearchImg from '../../assets/Donorsafaris/wildlife-conservation-research-expedition-africa.png'
import conservationCommunityImg from '../../assets/Donorsafaris/community-conservation-partnership-safari-travel.png'
import expertPortraitImg from '../../assets/Donorsafaris/luxury-safari-lodge-hospitality-tea-experience.png'
import whyMediaImg from '../../assets/Media (1).jpg'
import angelaMediaImg from '../../assets/Media (2).jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap,
    Leaf, TreePine, BookOpen, Building2, HeartHandshake,
    TrendingUp, UserCheck, Shield, Telescope, Binoculars
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function DonorSafaris() {

    // ── Hero rotating background images ────────────────────────────
    const donorHeroImages = [hero1, hero2, hero3]
    const [donorCurrentHero, setDonorCurrentHero] = useState(0)
    useEffect(() => {
        const donorTimer = setInterval(() => {
            setDonorCurrentHero((prev) => (prev + 1) % donorHeroImages.length)
        }, 5000)
        return () => clearInterval(donorTimer)
    }, [donorHeroImages.length])

    // ── Destination tabs ──────────────────────────────────────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Mistakes slider ───────────────────────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setMediActiveMistake(p => (p + 1) % mediMistakes.length), 5000)
        return () => clearInterval(t)
    }, [])

    // ── FAQ ───────────────────────────────────────────────────────────
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ─────────────────────────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────────────────────────

    // Destinations → medi-itinerary-showcase-section
    const mediItineraries = [
        {
            title: 'Kenya',
            badge: 'MOST POPULAR',
            bestFor: ['First-time Africa visitors', 'Wildlife enthusiasts', 'Alumni travel programs', 'Bucket list adventurers'],
            highlights: ['Maasai Mara National Reserve', 'Great Migration', 'Luxury tented camps', 'Cultural experiences']
        },
        {
            title: 'Tanzania',
            badge: 'EXCEPTIONAL WILDLIFE',
            bestFor: ['Wildlife photography groups', 'Conservation-focused organizations', 'Educational institutions'],
            highlights: ['Serengeti National Park', 'Ngorongoro Crater', 'Tarangire National Park', 'Zanzibar extensions']
        },
        {
            title: 'South Africa',
            badge: 'LUXURY & ACCESSIBILITY',
            bestFor: ['First-time Africa visitors', 'Organizations seeking accessibility', 'Cape Town extensions'],
            highlights: ['Kruger National Park', 'Private game reserves', 'Cape Town', 'Winelands experiences']
        },
        {
            title: 'Botswana',
            badge: 'MOST EXCLUSIVE',
            bestFor: ['Ultra-luxury donor programs', 'Exclusive experience seekers', 'Conservation organizations'],
            highlights: ['Okavango Delta', 'Chobe National Park', 'Luxury safari lodges', 'Exceptional wildlife encounters']
        },
        {
            title: 'Rwanda',
            badge: 'CONSERVATION FOCUS',
            bestFor: ['Conservation organizations', 'Mission-aligned travel', 'Community engagement programs'],
            highlights: ['Gorilla trekking', 'Conservation education', 'Community engagement', 'Luxury eco-lodges']
        }
    ]

    const mediDestImages = [destKenyaImg, destTanzaniaImg, destSouthAfricaImg, destBotswanaImg, destRwandaImg]

    // Benefits slider → medi-mistakes-slider-section
    const mediMistakes = [
        {
            title: 'Strengthening Donor Relationships',
            desc: 'Safari experiences create meaningful shared moments that build stronger personal connections between organizations and their most important supporters.',
            bullets: ['Authentic relationship development in a relaxed environment', 'Shared adventure fosters deeper engagement']
        },
        {
            title: 'Increasing Donor Retention',
            desc: 'Organizations that invest in meaningful donor travel experiences consistently report higher long-term donor retention and increased giving.'
        },
        {
            title: 'Cultivating Major Gift Prospects',
            desc: 'Extended luxury travel creates ideal conditions for meaningful conversations and relationship development with major gift prospects and leadership donors.'
        },
        {
            title: 'Creating Memorable Stewardship Experiences',
            desc: 'A thoughtfully designed donor safari becomes one of the most memorable stewardship investments your organization can make in long-term donor relationships.'
        }
    ]

    const mediFaqs = [
        { question: 'What is a donor safari?', answer: 'A donor safari is a luxury travel experience designed for donors, alumni, patrons, supporters, or major gift prospects.' },
        { question: 'Why are donor safaris effective?', answer: 'They create meaningful shared experiences that strengthen relationships and encourage deeper engagement.' },
        { question: 'Which organizations benefit from donor safaris?', answer: 'Universities, museums, conservation groups, healthcare foundations, and nonprofits often benefit from donor safari programs.' },
        { question: 'Where do donor safaris typically take place?', answer: 'Popular destinations include Kenya, Tanzania, South Africa, Botswana, and Rwanda.' },
        { question: 'How many travelers usually participate?', answer: 'Most donor safaris host between 10 and 30 participants, depending on program goals.' },
        { question: 'Are donor safaris fundraising trips?', answer: 'While not always fundraising-focused, they often support stewardship, cultivation, and donor engagement efforts.' },
        { question: 'What types of accommodations are used?', answer: 'Luxury safari lodges, tented camps, boutique hotels, and private villas are common.' },
        { question: 'Can donor safaris include educational programming?', answer: 'Yes. Many programs include conservation experts, researchers, faculty leaders, or guest speakers.' },
        { question: 'Are donor safaris suitable for alumni groups?', answer: 'Absolutely. Alumni travel programs frequently use safari experiences to build engagement and community.' },
        { question: 'What is the ideal safari length?', answer: 'Most donor safaris range from 7 to 14 days.' },
        { question: 'Can safaris be customized for specific organizations?', answer: 'Yes. Programs are typically customized around institutional goals and audience interests.' },
        { question: 'Do donor safaris include conservation experiences?', answer: 'Many itineraries incorporate conservation projects, wildlife research, and sustainability initiatives.' },
        { question: 'What makes a safari different from other donor trips?', answer: 'The combination of wildlife, luxury, conservation, and transformational experiences creates unique emotional engagement.' },
        { question: 'Are donor safaris appropriate for first-time visitors to Africa?', answer: 'Yes. Luxury safari programs are often ideal introductions to Africa.' },
        { question: 'Why work with a specialized travel advisor?', answer: 'Professional advisors manage logistics, risk management, supplier relationships, and guest experience design to ensure successful outcomes.' }
    ]

    // ── Schema — EXACT as provided, unmodified ────────────────────────
    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/donor-safaris",
                "name": "Donor Safaris",
                "url": "https://www.tripsshipsluxurytravel.com/donor-safaris",
                "description": "Discover how donor safaris help organizations strengthen donor relationships through luxury wildlife travel, conservation experiences, and transformational journeys.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/donor-safaris#article"
                }
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
                "description": "Luxury travel agency specializing in donor travel programs, alumni travel, safaris, cruises, and customized group travel experiences."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/donor-safaris#article",
                "headline": "Donor Safaris",
                "url": "https://www.tripsshipsluxurytravel.com/donor-safaris",
                "description": "Learn how donor safaris create meaningful engagement opportunities through luxury travel, conservation experiences, and relationship building.",
                "image": "https://www.tripsshipsluxurytravel.com/images/donor-safaris.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/donor-safaris"
                }
            },
            {
                "@type": "Service",
                "name": "Donor Safari Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Donor Travel and Safari Consulting",
                "description": "Customized donor safari planning and luxury travel experiences designed for nonprofits, universities, museums, and foundations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsshipsluxurytravel.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "University & Donor Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/university-group-travel"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Donor Safaris",
                        "item": "https://www.tripsshipsluxurytravel.com/donor-safaris"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a donor safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A donor safari is a luxury travel experience designed for donors, alumni, patrons, supporters, or major gift prospects."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are donor safaris effective?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "They create meaningful shared experiences that strengthen relationships and encourage deeper engagement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which organizations benefit from donor safaris?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Universities, museums, conservation organizations, healthcare foundations, and nonprofits frequently benefit from donor safari programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where do donor safaris typically take place?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Kenya, Tanzania, South Africa, Botswana, and Rwanda."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can donor safaris include educational programming?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many donor safaris feature lectures, conservation presentations, and expert-led discussions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are donor safaris suitable for alumni groups?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Alumni travel programs frequently use safari experiences to strengthen engagement and community."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What types of accommodations are used on donor safaris?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury safari lodges, tented camps, boutique hotels, and private villas are commonly used."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do donor safaris include conservation experiences?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many itineraries include conservation projects, wildlife research initiatives, and sustainability programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the ideal length of a donor safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most donor safaris range from 7 to 14 days depending on destination and program objectives."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can donor safaris be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Programs are typically tailored to institutional goals, donor interests, and organizational priorities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are donor safaris fundraising trips?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While not always fundraising-focused, they often support stewardship, cultivation, and donor engagement efforts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why work with a travel advisor for a donor safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A travel advisor helps manage logistics, risk management, supplier relationships, and guest experience design."
                        }
                    }
                ]
            }
        ]
    }

    // ─────────────────────────────────────────────────────────────────
    // RENDER
    // ─────────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>Donor Safaris: Building Deeper Connections Through Transformational Travel</title>
                <meta name="title" content="Donor Safaris | Luxury Safari Experiences Designed for Donor Engagement" />
                <meta
                    name="description"
                    content="Discover how donor safaris help organizations strengthen donor relationships through luxury wildlife travel, conservation experiences, and transformational journeys."
                />
                <meta name="keywords" content="donor safaris, donor travel programs, alumni safari travel, nonprofit safari trips, luxury donor engagement, conservation travel programs" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════════
                HERO  (medi-hero-section – rotating backgrounds)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {donorHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${donorCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Leaf size={16} />
                        <span>Luxury Donor Travel Experiences</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Donor Safaris: Building Deeper Connections Through Transformational Travel
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                INTRO  (ds-intro-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-intro-section">
                <div className="ds-intro-container">
                    <div className="ds-intro-grid">

                        <div className="ds-intro-editorial">
                            <span className="ds-intro-eyebrow">LUXURY SAFARI EXPERIENCES DESIGNED FOR DONOR ENGAGEMENT</span>
                            <h2>Building Deeper Connections Through Transformational Travel</h2>
                            <div className="ds-intro-bar"></div>

                            <p className="ds-intro-text">
                                In today's competitive fundraising environment, organizations are continually seeking meaningful ways to strengthen relationships with major donors, alumni, foundation supporters, and key stakeholders.
                            </p>

                            <p className="ds-intro-text">
                                One of the most powerful strategies is donor travel. Among all donor travel experiences, few are as transformative as a luxury safari. Donor safaris combine extraordinary wildlife encounters, cultural immersion, conservation education, and once-in-a-lifetime experiences that create lasting emotional connections between organizations and their supporters.
                            </p>

                            <div className="ds-intro-features">
                                <p className="ds-intro-features-label">
                                    Whether hosted by universities, museums, conservation organizations, healthcare foundations, faith-based groups, or nonprofit institutions, donor safaris provide:
                                </p>
                                <div className="ds-intro-features-grid">
                                    {[
                                        { icon: <HeartHandshake size={18} />, label: 'Stewardship' },
                                        { icon: <Users size={18} />, label: 'Relationship building' },
                                        { icon: <TrendingUp size={18} />, label: 'Philanthropic engagement' },
                                        { icon: <Binoculars size={18} />, label: 'Wildlife encounters' },
                                        { icon: <Leaf size={18} />, label: 'Conservation education' },
                                        { icon: <Globe size={18} />, label: 'Cultural immersion' },
                                    ].map((item, i) => (
                                        <div key={i} className="ds-intro-feature-chip">
                                            <span className="ds-intro-feature-icon">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="ds-intro-card">
                            <div className="ds-intro-card-body">
                                <div className="ds-intro-card-header">
                                    <div className="ds-intro-avatar">
                                        <Star size={22} />
                                    </div>
                                    <div>
                                        <span className="ds-intro-card-subtitle">DONOR TRAVEL EXPERT</span>
                                        <h3>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="ds-intro-card-desc">
                                    At Trips &amp; Ships Luxury Travel, we work closely with organizations to create meaningful experiences that align with institutional goals and donor interests.
                                </p>
                                <div className="ds-intro-quote">
                                    <span className="ds-intro-quote-mark">"</span>
                                    <p>
                                        When donors share transformational experiences together, stronger relationships always follow. A thoughtfully designed safari becomes one of your organization's most impactful travel programs.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHAT IS A DONOR SAFARI + WHY SAFARIS ARE EFFECTIVE
                (ds-what-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-what-section">
                <div className="ds-what-container">

                    <div className="ds-what-header-block">
                        <h2 className="ds-what-main-title">What Is a Donor Safari? Why Are Safaris So Effective?</h2>
                        <div className="ds-what-separator"></div>
                        <p className="ds-what-lead-paragraph">
                            A donor safari is a curated travel experience designed specifically for supporters, benefactors, alumni, trustees, or major gift prospects.
                        </p>
                    </div>

                    <div className="ds-what-grid">
                        <div className="ds-what-card ds-what-card-green">
                            <span className="ds-what-card-badge ds-what-badge-green">DEFINITION</span>
                            <h3 className="ds-what-card-heading">These journeys typically combine:</h3>
                            <ul className="ds-what-list">
                                {[
                                    'Luxury accommodations',
                                    'Wildlife experiences',
                                    'Educational programming',
                                    'Conservation initiatives',
                                    'Leadership engagement',
                                    'Exclusive access opportunities',
                                ].map((item, i) => (
                                    <li key={i} className="ds-what-list-item">
                                        <span className="ds-what-check ds-what-check-green">✓</span>
                                        <span className="ds-what-list-label">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="ds-what-card ds-what-card-blue">
                            <span className="ds-what-card-badge ds-what-badge-blue">EMOTIONAL IMPACT</span>
                            <h3 className="ds-what-card-heading">Safari experiences are emotionally powerful. Guests often experience:</h3>
                            <ul className="ds-what-list">
                                {[
                                    'Wildlife encounters',
                                    'Natural wonders',
                                    'Conservation education',
                                    'Cultural immersion',
                                    'Personal reflection',
                                    'Shared adventure',
                                ].map((item, i) => (
                                    <li key={i} className="ds-what-list-item">
                                        <span className="ds-what-check ds-what-check-blue">✓</span>
                                        <span className="ds-what-list-label">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="ds-what-footer-block">
                        <p className="ds-what-footer-paragraph">
                            Unlike traditional fundraising events, donor safaris create meaningful shared experiences that foster authentic relationships in an unforgettable setting. These emotional moments often deepen connections between travelers and the organizations hosting the journey.
                        </p>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY ORGANIZATIONS CHOOSE  (ds-benefits-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-benefits-section">
                <div className="ds-benefits-container">
                    <div className="ds-benefits-header">
                        <span className="ds-benefits-eyebrow">ORGANIZATIONAL BENEFITS</span>
                        <h2>Why Organizations Choose Donor Safaris</h2>
                        <div className="ds-benefits-bar"></div>
                    </div>

                    <div className="ds-benefits-grid">

                        <div className="ds-benefits-card ds-benefits-card-green">
                            <div className="ds-benefits-card-top">
                                <div className="ds-benefits-card-icon"><HeartHandshake size={24} /></div>
                                <h3>Relationship Building</h3>
                            </div>
                            <p>Organizations increasingly use travel as a donor engagement strategy because travel creates stronger personal connections than traditional fundraising events.</p>
                            <div className="ds-benefits-chips">
                                {['Strengthening relationships', 'Increasing donor retention', 'Cultivating major gifts', 'Enhancing stewardship', 'Creating memories'].map((chip, i) => (
                                    <span key={i} className="ds-benefits-chip">{chip}</span>
                                ))}
                            </div>
                            <div className="ds-benefits-sub">
                                <span className="ds-benefits-sub-label">Safari experiences naturally encourage:</span>
                                <ul className="ds-benefits-list">
                                    {['Meaningful conversations', 'Relationship development in a relaxed environment', 'Community building among supporters', 'Authentic long-term engagement'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ds-benefits-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ds-benefits-card ds-benefits-card-blue">
                            <div className="ds-benefits-card-top">
                                <div className="ds-benefits-card-icon"><TrendingUp size={24} /></div>
                                <h3>Transformational Impact</h3>
                            </div>
                            <div className="ds-benefits-stat">
                                <div className="ds-benefits-stat-circle">
                                    <span className="ds-benefits-stat-num">7–14</span>
                                </div>
                                <span className="ds-benefits-stat-label">DAYS OF IMPACT</span>
                            </div>
                            <p>When donors share transformational experiences together, stronger relationships often follow. A thoughtfully designed safari becomes one of your organization's most impactful travel programs.</p>
                            <div className="ds-benefits-quote">
                                <p>These emotional moments often deepen connections between travelers and the organizations hosting the journey.</p>
                            </div>
                        </div>

                        <div className="ds-benefits-card ds-benefits-card-gold">
                            <div className="ds-benefits-card-top">
                                <div className="ds-benefits-card-icon"><Gem size={24} /></div>
                                <h3>Luxury Experience Design</h3>
                            </div>
                            <p>Modern donor safaris feature world-class accommodations including:</p>
                            <ol className="ds-benefits-numlist">
                                {['Luxury tented camps', 'Boutique safari lodges', 'Private villas', 'Exclusive-use properties', 'Curated dining experiences'].map((item, i) => (
                                    <li key={i}><span className="ds-benefits-num">0{i + 1}</span><span>{item}</span></li>
                                ))}
                            </ol>
                            <div className="ds-benefits-note">
                                <p>Guests enjoy exceptional comfort while remaining fully immersed in the destination.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                IDEAL ORGANIZATIONS FOR DONOR SAFARIS
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-orgs-section">
                <div className="ds-orgs-container">
                    <div className="ds-orgs-header">
                        <span className="ds-orgs-eyebrow">WHO BENEFITS</span>
                        <h2>Ideal Organizations for Donor Safaris</h2>
                        <div className="ds-orgs-separator"></div>
                    </div>
                    <div className="ds-orgs-grid">
                        {[
                            { icon: <GraduationCap size={22} />, title: 'Universities', items: ['Alumni engagement', 'Donor cultivation', 'Leadership travel'] },
                            { icon: <Building2 size={22} />, title: 'Museums', items: ['Patron experiences', 'Curator-led travel', 'Educational journeys'] },
                            { icon: <Leaf size={22} />, title: 'Conservation', items: ['Mission-aligned experiences', 'Wildlife education', 'Conservation partnerships'] },
                            { icon: <Heart size={22} />, title: 'Healthcare Foundations', items: ['Major donor stewardship', 'Leadership engagement', 'Community building'] },
                            { icon: <Globe size={22} />, title: 'Faith-Based Groups', items: ['Mission travel', 'Cultural exploration', 'Relationship development'] },
                        ].map((org, i) => (
                            <div key={i} className="ds-org-card">
                                <div className="ds-org-icon-box">{org.icon}</div>
                                <h3 className="ds-org-card-title">{org.title}</h3>
                                <ul className="ds-org-card-list">
                                    {org.items.map((item, j) => (
                                        <li key={j}>
                                            <span className="ds-org-list-check">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                POPULAR DONOR SAFARI DESTINATIONS  (ds-dest-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-dest-section">
                <div className="ds-dest-container">
                    <div className="ds-dest-header">
                        <span className="ds-dest-eyebrow">CURATED SAFARI DESTINATIONS</span>
                        <h2 className="ds-dest-heading">Popular Donor Safari Destinations</h2>
                        <div className="ds-dest-separator"></div>
                    </div>

                    <div className="ds-dest-tabs-row">
                        {mediItineraries.map((dest, idx) => (
                            <button
                                key={idx}
                                className={`ds-dest-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                onClick={() => setMediSelectedItinerary(idx)}
                            >
                                <span className="ds-dest-tab-num">0{idx + 1}</span>
                                <span className="ds-dest-tab-label">{dest.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="ds-dest-card">
                        <div className="ds-dest-card-image" style={{ backgroundImage: `url(${mediDestImages[mediSelectedItinerary]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="ds-dest-card-overlay"></div>
                            <div className="ds-dest-card-image-content">
                                <h3 className="ds-dest-card-title">{mediItineraries[mediSelectedItinerary].title}</h3>
                                <span className="ds-dest-card-badge">{mediItineraries[mediSelectedItinerary].badge}</span>
                            </div>
                        </div>
                        <div className="ds-dest-card-body">
                            <div className="ds-dest-card-col">
                                <h4 className="ds-dest-card-col-heading">Best For:</h4>
                                <ul className="ds-dest-card-list">
                                    {mediItineraries[mediSelectedItinerary].bestFor.map((item, i) => (
                                        <li key={i}>
                                            <span className="ds-dest-check">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ds-dest-card-col">
                                <h4 className="ds-dest-card-col-heading">Highlights:</h4>
                                <div className="ds-dest-chips">
                                    {mediItineraries[mediSelectedItinerary].highlights.map((item, i) => (
                                        <span key={i} className="ds-dest-chip">
                                            <MapPin size={12} />
                                            <span>{item}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EDUCATIONAL COMPONENTS  (ds-education-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-education-section">
                <div className="ds-education-container">
                    <div className="ds-education-header">
                        <span className="ds-education-eyebrow">PROGRAM DESIGN</span>
                        <h2 className="ds-education-heading">Educational Components of Donor Safaris</h2>
                        <div className="ds-education-bar"></div>
                    </div>

                    <div className="ds-education-grid">
                        <div className="ds-education-image-block" style={{ backgroundImage: `url(${educationImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="ds-education-image-overlay"></div>
                            <div className="ds-education-image-content">
                                <h3 className="ds-education-image-title">Educational Programming That Creates Lasting Impact</h3>
                                <p className="ds-education-image-text">
                                    Expert-led lectures, conservation briefings, and cultural discussions transform a luxury safari into a meaningful institutional experience.
                                </p>
                            </div>
                        </div>

                        <div className="ds-education-cards">
                            <div className="ds-education-card ds-edu-card-green">
                                <div className="ds-education-card-header">
                                    <div className="ds-education-card-icon"><BookOpen size={20} /></div>
                                    <h3 className="ds-education-card-title">Educational Programming</h3>
                                </div>
                                <ul className="ds-education-list">
                                    {['Conservation presentations', 'Wildlife expert lectures', 'Cultural discussions', 'Leadership conversations', 'Mission-focused programming'].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={15} className="ds-education-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ds-education-card ds-edu-card-blue">
                                <div className="ds-education-card-header">
                                    <div className="ds-education-card-icon"><Gem size={20} /></div>
                                    <h3 className="ds-education-card-title">Luxury Accommodations</h3>
                                </div>
                                <ul className="ds-education-list">
                                    {['Luxury tented camps', 'Boutique safari lodges', 'Private villas', 'Exclusive-use properties'].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={15} className="ds-education-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="ds-education-card-note">
                                    Guests enjoy exceptional comfort while remaining immersed in the destination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY TRIPS & SHIPS LUXURY TRAVEL  (ds-why-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-why-section">
                <div className="ds-why-container">
                    <div className="ds-why-header">
                        <span className="ds-why-eyebrow">ABOUT US</span>
                        <h2 className="ds-why-heading">Why Trips &amp; Ships Luxury Travel <br/>For Donor Safari Programs</h2>
                        <div className="ds-why-bar"></div>
                    </div>

                    <div className="ds-why-grid">
                        <div className="ds-why-image-block">
                            <div className="ds-why-image-frame">
                                <img src={whyMediaImg} alt="Angela Hughes – Donor Safari Expert" className="ds-why-image-img" />
                                <div className="ds-why-image-overlay"></div>
                            </div>
                            <div className="ds-why-stats-row">
                                <div className="ds-why-stat">
                                    <span className="ds-why-stat-number">40+</span>
                                    <span className="ds-why-stat-label">Years Experience</span>
                                </div>
                                <div className="ds-why-stat-divider"></div>
                                <div className="ds-why-stat">
                                    <span className="ds-why-stat-number">121+</span>
                                    <span className="ds-why-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="ds-why-content">
                            <p className="ds-why-lead">
                                Trips &amp; Ships Luxury Travel specializes in customized donor travel programs designed to deepen engagement and strengthen relationships. We work closely with organizations to create meaningful experiences that align with institutional goals and donor interests.
                            </p>

                            <div className="ds-why-services">
                                <span className="ds-why-services-label">Our services include:</span>
                                <div className="ds-why-services-grid">
                                    {['Destination planning', 'Group travel management', 'Luxury safari design', 'Donor engagement consulting', 'Educational travel programming', 'VIP travel coordination'].map((item, i) => (
                                        <div key={i} className="ds-why-service-pill">
                                            <CheckCircle size={14} className="ds-why-service-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="ds-why-body">
                                With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides donor travel planning backed by real-world expertise and deep industry relationships.
                            </p>

                            <div className="ds-why-expertise-strip">
                                <span className="ds-why-expertise-label">Our expertise spans:</span>
                                <div className="ds-why-expertise-row">
                                    {[
                                        { title: 'Luxury safaris', icon: Binoculars },
                                        { title: 'Donor travel programs', icon: HeartHandshake },
                                        { title: 'Alumni travel', icon: GraduationCap },
                                        { title: 'Conservation journeys', icon: Leaf },
                                        { title: 'Group travel', icon: Users }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="ds-why-expertise-chip">
                                                <IconComponent size={13} />
                                                <span>{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CONSERVATION & PHILANTHROPY  (ds-conservation-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-conservation-section">
                <div className="ds-conservation-container">
                    <div className="ds-conservation-header">
                        <span className="ds-conservation-eyebrow">IMPACT &amp; PURPOSE</span>
                        <h2>Conservation and Philanthropy</h2>
                        <div className="ds-conservation-bar"></div>
                    </div>

                    <div className="ds-conservation-grid">
                        <div className="ds-conservation-card ds-conservation-card-green">
                            <div className="ds-conservation-card-top-img">
                                <img src={conservationResearchImg} alt="Conservation research expedition" />
                            </div>
                            <div className="ds-conservation-card-body">
                                <div className="ds-conservation-card-icon"><Leaf size={24} /></div>
                                <h3>Conservation-Focused Experiences</h3>
                                <p>Many donor safaris incorporate conservation-focused experiences that align naturally with philanthropic goals and mission-driven programming.</p>
                                <ul className="ds-conservation-card-list">
                                    {['Meet researchers in the field', 'Visit active conservation projects', 'Learn about wildlife protection', 'Support local communities'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ds-conservation-list-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ds-conservation-card ds-conservation-card-blue">
                            <div className="ds-conservation-card-top-img">
                                <img src={conservationCommunityImg} alt="Community conservation partnership" />
                            </div>
                            <div className="ds-conservation-card-body">
                                <div className="ds-conservation-card-icon"><HeartHandshake size={24} /></div>
                                <h3>Philanthropic Alignment</h3>
                                <p>Conservation experiences often resonate deeply with donors who are passionate about environmental stewardship, sustainability, and global impact.</p>
                                <ul className="ds-conservation-card-list">
                                    {['Mission-aligned programming', 'Institutional storytelling opportunities', 'Donor recognition in meaningful settings', 'Connection to organizational impact'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ds-conservation-list-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ds-conservation-footer-note">
                        <p>
                            These experiences often align naturally with philanthropic goals. When donors witness conservation work firsthand, they develop a deeper understanding of and commitment to organizational missions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY DONOR TRAVEL WORKS  (ds-travelworks-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-travelworks-section">
                <div className="ds-travelworks-container">
                    <div className="ds-travelworks-header">
                        <span className="ds-travelworks-eyebrow">WHY DONOR TRAVEL WORKS</span>
                        <h2>Why Organizations Choose Donor Safaris</h2>
                        <div className="ds-travelworks-bar"></div>
                    </div>

                    <div className="ds-travelworks-carousel">
                        <button
                            className="ds-travelworks-arrow ds-travelworks-arrow-left"
                            onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))}
                            aria-label="Previous"
                        >
                            <ChevronRight size={22} />
                        </button>

                        <div className="ds-travelworks-track">
                            {mediMistakes.map((benefit, idx) => (
                                <div key={idx} className={`ds-travelworks-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <span className="ds-travelworks-num">0{idx + 1}</span>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.desc}</p>
                                    {benefit.bullets && (
                                        <ul className="ds-travelworks-bullets">
                                            {benefit.bullets.map((b, bi) => (
                                                <li key={bi}><CheckCircle size={16} className="ds-travelworks-check" /><span>{b}</span></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            className="ds-travelworks-arrow ds-travelworks-arrow-right"
                            onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>

                    <div className="ds-travelworks-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx} className={`ds-travelworks-dot ${mediActiveMistake === idx ? 'active' : ''}`} onClick={() => setMediActiveMistake(idx)} aria-label={`Slide ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHO SHOULD CHOOSE  (medi-audience-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Ideal Organizations for Donor Safaris</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Donor Safaris Work Well For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <GraduationCap size={20} className="medi-audience-icon" />, label: 'Universities – alumni engagement and donor cultivation' },
                                    { icon: <Building2 size={20} className="medi-audience-icon" />, label: 'Museums – patron and curator-led experiences' },
                                    { icon: <Leaf size={20} className="medi-audience-icon" />, label: 'Conservation organizations – mission-aligned travel' },
                                    { icon: <Heart size={20} className="medi-audience-icon" />, label: 'Healthcare foundations – major donor stewardship' },
                                    { icon: <Globe size={20} className="medi-audience-icon" />, label: 'Faith-based organizations – mission and cultural travel' },
                                    { icon: <Users size={20} className="medi-audience-icon" />, label: 'Nonprofits – community building and engagement' },
                                    { icon: <Crown size={20} className="medi-audience-icon" />, label: 'Leadership groups – exclusive access experiences' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">May Not Be Ideal For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Organizations with very small donor bases under 10 participants' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Groups without sufficient lead time for planning (under 6 months)' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Organizations without a clear stewardship or engagement goal' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY PROFESSIONAL TRAVEL PARTNER  (ds-partner-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-partner-section">
                <div className="ds-partner-container">
                    <div className="ds-partner-header">
                        <span className="ds-partner-eyebrow">PLANNING EXPERTISE</span>
                        <h2>Why Work With a Professional Travel Partner?</h2>
                        <div className="ds-partner-bar"></div>
                    </div>

                    <p className="ds-partner-intro">
                        Planning a donor safari requires specialized expertise. A professional travel partner helps ensure a seamless experience for both hosts and guests.
                    </p>

                    <div className="ds-partner-considerations-grid">
                        {[
                            { icon: <MapPin size={20} />, label: 'Destination selection' },
                            { icon: <Shield size={20} />, label: 'Risk management' },
                            { icon: <Users size={20} />, label: 'Group logistics' },
                            { icon: <Gem size={20} />, label: 'Guest experience design' },
                            { icon: <Compass size={20} />, label: 'Safari operations' },
                            { icon: <Globe size={20} />, label: 'Air travel coordination' },
                        ].map((item, i) => (
                            <div key={i} className="ds-partner-card">
                                <div className="ds-partner-card-icon">{item.icon}</div>
                                <span className="ds-partner-card-label">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="ds-partner-bottom-header">
                        <h3>Why Trips &amp; Ships Luxury Travel</h3>
                        <p>Trips &amp; Ships Luxury Travel specializes in customized donor travel programs. Our services include:</p>
                        <div className="ds-partner-bottom-bar"></div>
                    </div>

                    <div className="ds-partner-services-grid">
                        {[
                            { icon: <MapPin size={18} />, label: 'Destination planning' },
                            { icon: <Users size={18} />, label: 'Group travel management' },
                            { icon: <Binoculars size={18} />, label: 'Luxury safari design' },
                            { icon: <HeartHandshake size={18} />, label: 'Donor engagement consulting' },
                            { icon: <BookOpen size={18} />, label: 'Educational travel programming' },
                            { icon: <Crown size={18} />, label: 'VIP travel coordination' },
                        ].map((item, i) => (
                            <div key={i} className="ds-partner-pill">
                                <span className="ds-partner-pill-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY WORK WITH US  (medi-work-with-us-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">

                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE DONOR TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Organizations Work with Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Donor safari planning requires specialized expertise in luxury travel, group logistics, and donor engagement strategy.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Compass size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Working with experienced donor travel advisors helps organizations:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[[CheckCircle, 'Design meaningful donor experiences'], [Calendar, 'Select the right destination and season'], [Crown, 'Curate luxury accommodations'], [Gem, 'Incorporate educational programming'], [Compass, 'Manage complex group logistics'], [MapPin, 'Align itineraries with institutional goals']].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node"><Award size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[[Mic, 'Travel industry speaking engagements'], [FileText, 'Weekly travel columns'], [Award, 'Advisory board leadership'], [Globe, 'International media recognition'], [GraduationCap, 'Luxury Travel University training programs']].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Ship size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 03</div>
                                <h3 className="medi-pillar-title">Trips &amp; Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[[Binoculars, 'Luxury safari programs'], [HeartHandshake, 'Donor and alumni travel'], [GraduationCap, 'Educational group travel'], [Globe, 'International itinerary design'], [Crown, 'VIP and exclusive access experiences']].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src={angelaMediaImg} alt="Angela Hughes" className="medi-prestige-seal-img" />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury safari and donor travel specialist", icon: Binoculars, category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Plan a Donor Safari for Your Organization?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Donor safaris represent one of the most powerful forms of relationship-based travel available today. By combining luxury, education, conservation, and shared experiences, organizations can create transformative journeys that strengthen donor relationships and foster long-term engagement.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether your goal is stewardship, cultivation, alumni engagement, or community building, a thoughtfully designed safari can become one of your organization's most impactful travel programs.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether your organization is:</span>
                            <ul className="medi-cta-considerations-list">
                                {['A university seeking alumni engagement', 'A museum planning patron travel', 'A conservation organization exploring mission travel', 'A healthcare foundation building donor relationships', 'A nonprofit seeking transformational stewardship experiences'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips &amp; Ships Luxury Travel today to begin designing your donor safari program.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Program Information
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DonorSafaris