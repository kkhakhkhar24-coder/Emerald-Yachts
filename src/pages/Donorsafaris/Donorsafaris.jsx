import Navbar from '../../components/Navbar/Navbar'
import './Donorsafaris.css'
// import Profile_AH from '../../assets/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/Profile_Picture_AH.jpg';

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

function DonorSafaris() {

    // ── Destination tabs ──────────────────────────────────────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Mistakes slider ───────────────────────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    useEffect(() => {
        if (isMediSliderHovered) return
        const t = setInterval(() => setMediActiveMistake(p => (p + 1) % 4), 5000)
        return () => clearInterval(t)
    }, [isMediSliderHovered])

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
                HERO  (medi-hero-section – gradient, no images)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-hero-section"
                style={{
                    background: 'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 50%, #274472 100%)',
                    minHeight: '72vh'
                }}
            >
                <div className="medi-hero-overlay-layer" style={{ background: 'rgba(15,28,46,0.25)' }}></div>
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
                INTRO  (medi-intro-section / medi-premium-intro-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">LUXURY SAFARI EXPERIENCES DESIGNED FOR DONOR ENGAGEMENT</span>
                            <h2 className="medi-premium-heading">Building Deeper Connections Through Transformational Travel</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                In today's competitive fundraising environment, organizations are continually seeking meaningful ways to strengthen relationships with major donors, alumni, foundation supporters, and key stakeholders.
                            </p>

                            <p className="medi-premium-lead-text">
                                One of the most powerful strategies is donor travel. Among all donor travel experiences, few are as transformative as a luxury safari. Donor safaris combine extraordinary wildlife encounters, cultural immersion, conservation education, and once-in-a-lifetime experiences that create lasting emotional connections between organizations and their supporters.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Whether hosted by universities, museums, conservation organizations, healthcare foundations, faith-based groups, or nonprofit institutions, donor safaris provide:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <HeartHandshake size={20} />, label: 'Stewardship' },
                                        { icon: <Users size={20} />, label: 'Relationship building' },
                                        { icon: <TrendingUp size={20} />, label: 'Philanthropic engagement' },
                                        { icon: <Binoculars size={20} />, label: 'Wildlife encounters' },
                                        { icon: <Leaf size={20} />, label: 'Conservation education' },
                                        { icon: <Globe size={20} />, label: 'Cultural immersion' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">DONOR TRAVEL EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, we work closely with organizations to create meaningful experiences that align with institutional goals and donor interests.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
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
                (medi-excel-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">DONOR TRAVEL PROGRAMS // LUXURY SAFARI EXPERIENCES</div>
                <div className="medi-excel-coord coord-tr">-1.2921° S, 36.8219° E</div>
                <div className="medi-excel-coord coord-bl">-3.3869° S, 36.6958° E</div>
                <div className="medi-excel-coord coord-br">-19.9167° S, 23.4167° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Is a Donor Safari? Why Are Safaris So Effective?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            A donor safari is a curated travel experience designed specifically for supporters, benefactors, alumni, trustees, or major gift prospects.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">These journeys typically combine:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Gem size={18} />, label: 'Luxury accommodations' },
                                        { icon: <Binoculars size={18} />, label: 'Wildlife experiences' },
                                        { icon: <BookOpen size={18} />, label: 'Educational programming' },
                                        { icon: <Leaf size={18} />, label: 'Conservation initiatives' },
                                        { icon: <Crown size={18} />, label: 'Leadership engagement' },
                                        { icon: <Star size={18} />, label: 'Exclusive access opportunities' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Safari experiences are emotionally powerful. Guests often experience:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Binoculars size={18} />, label: 'Wildlife encounters' },
                                        { icon: <Globe size={18} />, label: 'Natural wonders' },
                                        { icon: <Leaf size={18} />, label: 'Conservation education' },
                                        { icon: <Users size={18} />, label: 'Cultural immersion' },
                                        { icon: <Heart size={18} />, label: 'Personal reflection' },
                                        { icon: <Compass size={18} />, label: 'Shared adventure' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Unlike traditional fundraising events, donor safaris create meaningful shared experiences that foster authentic relationships in an unforgettable setting. These emotional moments often deepen connections between travelers and the organizations hosting the journey.
                        </p>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY ORGANIZATIONS CHOOSE DONOR SAFARIS
                (medi-diff-section – 3 cards)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">ORGANIZATIONAL BENEFITS</span>
                        <h2 className="medi-diff-main-title">Why Organizations Choose Donor Safaris</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1 */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><HeartHandshake size={24} /></div>
                                <h3 className="medi-diff-card-title">Relationship Building</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Organizations increasingly use travel as a donor engagement strategy because travel creates stronger personal connections than traditional fundraising events.
                            </p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Strengthening relationships</span>
                                <span className="medi-diff-chip">Increasing donor retention</span>
                                <span className="medi-diff-chip">Cultivating major gifts</span>
                                <span className="medi-diff-chip">Enhancing stewardship</span>
                                <span className="medi-diff-chip">Creating memories</span>
                            </div>
                            <p className="medi-diff-card-text-secondary">
                                Safari experiences naturally encourage:
                            </p>
                            <ul className="medi-diff-experience-list">
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Meaningful conversations</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Relationship development in a relaxed environment</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Community building among supporters</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Authentic long-term engagement</span></li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><TrendingUp size={24} /></div>
                                <h3 className="medi-diff-card-title">Transformational Impact</h3>
                            </div>
                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '14px', lineHeight: 1.2 }}>7–14</div>
                                </div>
                                <div className="medi-diff-stat-label">DAYS OF IMPACT</div>
                            </div>
                            <p className="medi-diff-card-text">
                                When donors share transformational experiences together, stronger relationships often follow. A thoughtfully designed safari becomes one of your organization's most impactful travel programs.
                            </p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">
                                    These emotional moments often deepen connections between travelers and the organizations hosting the journey.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Gem size={24} /></div>
                                <h3 className="medi-diff-card-title">Luxury Experience Design</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Modern donor safaris feature world-class accommodations including:
                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                <li><span className="medi-diff-list-num">01</span><span>Luxury tented camps</span></li>
                                <li><span className="medi-diff-list-num">02</span><span>Boutique safari lodges</span></li>
                                <li><span className="medi-diff-list-num">03</span><span>Private villas</span></li>
                                <li><span className="medi-diff-list-num">04</span><span>Exclusive-use properties</span></li>
                                <li><span className="medi-diff-list-num">05</span><span>Curated dining experiences</span></li>
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    Guests enjoy exceptional comfort while remaining fully immersed in the destination.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                IDEAL ORGANIZATIONS FOR DONOR SAFARIS  ← NEW SECTION (ds-)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-orgs-section">
                <div className="ds-orgs-glow"></div>
                <div className="ds-orgs-container">
                    <div className="ds-orgs-header">
                        <span className="ds-orgs-eyebrow">WHO BENEFITS</span>
                        <h2>Ideal Organizations for Donor Safaris</h2>
                        <div className="ds-orgs-bar"></div>
                    </div>
                    <div className="ds-orgs-grid">
                        {[
                            {
                                icon: <GraduationCap size={22} />,
                                title: 'Universities',
                                items: ['Alumni engagement', 'Donor cultivation', 'Leadership travel']
                            },
                            {
                                icon: <Building2 size={22} />,
                                title: 'Museums',
                                items: ['Patron experiences', 'Curator-led travel', 'Educational journeys']
                            },
                            {
                                icon: <Leaf size={22} />,
                                title: 'Conservation Organizations',
                                items: ['Mission-aligned experiences', 'Wildlife education', 'Conservation partnerships']
                            },
                            {
                                icon: <Heart size={22} />,
                                title: 'Healthcare Foundations',
                                items: ['Major donor stewardship', 'Leadership engagement', 'Community building']
                            },
                            {
                                icon: <Globe size={22} />,
                                title: 'Faith-Based Organizations',
                                items: ['Mission travel', 'Cultural exploration', 'Relationship development']
                            },
                        ].map((org, i) => (
                            <div key={i} className="ds-org-card">
                                <div className="ds-org-icon-box">{org.icon}</div>
                                <h3 className="ds-org-card-title">{org.title}</h3>
                                <ul className="ds-org-card-list">
                                    {org.items.map((item, j) => (
                                        <li key={j}>
                                            <span className="ds-org-list-dot"></span>
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
                DESTINATIONS SHOWCASE  (medi-itinerary-showcase-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED SAFARI DESTINATIONS</span>
                        <h2 className="medi-itinerary-showcase-heading">Popular Donor Safari Destinations</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((dest, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{dest.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            {/* Icon-based visual instead of photo */}
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #274472 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '40px' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                                    <MapPin size={36} />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '500', margin: 0, textAlign: 'center' }}>
                                    {mediItineraries[mediSelectedItinerary].title}
                                </h3>
                                <p style={{ color: '#93c5fd', fontSize: '13px', margin: 0, fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                    {mediItineraries[mediSelectedItinerary].badge}
                                </p>
                                <div className="medi-itinerary-showcase-img-overlay" style={{ display: 'none' }}></div>
                                <span className="medi-itinerary-showcase-badge">FEATURED DESTINATION</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Best For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {mediItineraries[mediSelectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {mediItineraries[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EDUCATIONAL COMPONENTS  ← NEW SECTION (ds-)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-education-section">
                <div className="ds-education-container">
                    <div className="ds-education-header">
                        <span className="ds-education-eyebrow">PROGRAM DESIGN</span>
                        <h2 className="medi-section-heading">Educational Components of Donor Safaris</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ds-education-grid">
                        <div className="ds-education-text-block">
                            <p className="ds-education-intro">
                                Many organizations incorporate educational programming into safari itineraries. These experiences enhance both engagement and impact.
                            </p>
                            <div className="ds-education-components-card">
                                <h4>Educational Programming Examples:</h4>
                                <ul className="ds-education-list">
                                    {['Conservation presentations', 'Wildlife expert lectures', 'Cultural discussions', 'Leadership conversations', 'Mission-focused programming'].map((item, i) => (
                                        <li key={i}><CheckCircle size={16} className="ds-education-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ds-education-components-card">
                                <h4>Luxury Accommodations Include:</h4>
                                <ul className="ds-education-list">
                                    {['Luxury tented camps', 'Boutique safari lodges', 'Private villas', 'Exclusive-use properties'].map((item, i) => (
                                        <li key={i}><CheckCircle size={16} className="ds-education-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '12px', marginBottom: 0, lineHeight: '1.6' }}>
                                    Guests enjoy exceptional comfort while remaining immersed in the destination.
                                </p>
                            </div>
                        </div>

                        <div className="ds-education-img-block">
                            <div className="ds-education-img-icon-ring">
                                <BookOpen size={40} />
                            </div>
                            <h3 className="ds-education-img-title">Educational Programming That Creates Lasting Impact</h3>
                            <p className="ds-education-img-sub">
                                Expert-led lectures, conservation briefings, and cultural discussions transform a luxury safari into a meaningful institutional experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="donor-safari-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Donor Travel Expert" /> */}
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
                                    <span className="medi-editorial-eyebrow">Expert Insight – Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Trips &amp; Ships Luxury Travel <br className="medi-growth-title-break" />For Donor Safari Programs
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Trips &amp; Ships Luxury Travel specializes in customized donor travel programs designed to deepen engagement and strengthen relationships. We work closely with organizations to create meaningful experiences that align with institutional goals and donor interests.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Our services include:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Destination planning', 'Group travel management', 'Luxury safari design', 'Donor engagement consulting', 'Educational travel programming', 'VIP travel coordination'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides donor travel planning backed by real-world expertise and deep industry relationships.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Our expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury safaris', icon: Binoculars },
                                        { title: 'Donor travel programs', icon: HeartHandshake },
                                        { title: 'Alumni travel', icon: GraduationCap },
                                        { title: 'Conservation journeys', icon: Leaf },
                                        { title: 'Group travel management', icon: Users }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
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

            {/* ════════════════════════════════════════════════════════════
                CONSERVATION & PHILANTHROPY  ← NEW SECTION (ds-)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-conservation-section">
                <div className="ds-conservation-glow"></div>
                <div className="ds-conservation-container">
                    <div className="ds-conservation-header">
                        <span className="ds-conservation-eyebrow">IMPACT &amp; PURPOSE</span>
                        <h2>Conservation and Philanthropy</h2>
                        <div className="ds-conservation-bar"></div>
                    </div>

                    <div className="ds-conservation-grid">
                        <div className="ds-conservation-card">
                            <div className="ds-conservation-card-icon"><Leaf size={24} /></div>
                            <h3>Conservation-Focused Experiences</h3>
                            <p>Many donor safaris incorporate conservation-focused experiences that align naturally with philanthropic goals and mission-driven programming.</p>
                            <ul className="ds-conservation-card-list">
                                {['Meet researchers in the field', 'Visit active conservation projects', 'Learn about wildlife protection', 'Support local communities'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} className="ds-conservation-list-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="ds-conservation-card">
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

                    <div className="ds-conservation-footer-note">
                        <p>
                            These experiences often align naturally with philanthropic goals. When donors witness conservation work firsthand, they develop a deeper understanding of and commitment to organizational missions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BENEFITS OF DONOR SAFARIS (medi-mistakes-slider-section
                repurposed as a benefits highlight slider)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">WHY DONOR TRAVEL WORKS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Why Organizations Choose Donor Safaris
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((benefit, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{benefit.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{benefit.desc}</p>
                                        {benefit.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {benefit.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx} className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`} onClick={() => setMediActiveMistake(idx)} aria-label={`Slide ${idx + 1}`} />
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
                WHY PROFESSIONAL TRAVEL PARTNER  ← NEW SECTION (ds-)
            ════════════════════════════════════════════════════════════ */}
            <section className="ds-partner-section">
                <div className="ds-partner-container">
                    <div className="ds-partner-header">
                        <span className="ds-partner-eyebrow">PLANNING EXPERTISE</span>
                        <h2 className="medi-section-heading">Why Work With a Professional Travel Partner?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
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
                            <div key={i} className="ds-partner-consideration-card">
                                <div className="ds-partner-cons-icon">{item.icon}</div>
                                <span className="ds-partner-cons-label">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="ds-partner-services-header">
                        <h3>Why Trips &amp; Ships Luxury Travel</h3>
                        <p>Trips &amp; Ships Luxury Travel specializes in customized donor travel programs. Our services include:</p>
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
                            <div key={i} className="ds-partner-service-pill">
                                <span className="ds-partner-service-pill-icon">{item.icon}</span>
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
                                {/* <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} /> */}
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
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
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