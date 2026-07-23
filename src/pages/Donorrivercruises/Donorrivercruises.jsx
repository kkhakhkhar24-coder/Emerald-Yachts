import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import './Donorrivercruises.css'

import {
    Ship, MapPin, Star, CheckCircle, Anchor, Gem,
    Crown, Phone, Globe, LayoutList, Heart, Utensils,
    Award, Users, Wifi, Compass, Sparkles, ArrowRight,
    GraduationCap, Mic, BookOpen, Calendar, Building2,
    Landmark, Target, UserCheck, TrendingUp, Trophy,
    HandCoins, MessageCircle, HeartHandshake, Telescope,
    Music, Leaf, Zap
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE IMPORTS
──────────────────────────────────────────────────────────────── */
import HERO_1 from '../../assets/DonorRiverCruises/hero1.webp'
import HERO_2 from '../../assets/DonorRiverCruises/hero2.webp'
import HERO_3 from '../../assets/DonorRiverCruises/hero3.webp'

import WHY_TRAVEL_IMG from '../../assets/DonorRiverCruises/why-travel.png'
import RHINE_IMG from '../../assets/DonorRiverCruises/rhine-cruise.webp'
import DANUBE_IMG from '../../assets/DonorRiverCruises/danube-cruise.webp'
import SEINE_IMG from '../../assets/DonorRiverCruises/seine-cruise.jpg'
import DOURO_IMG from '../../assets/DonorRiverCruises/douro-cruise.webp'
import LECTURE_IMG from '../../assets/DonorRiverCruises/lecture-presentation.webp'
import LUXURY_SHIP_IMG from '../../assets/DonorRiverCruises/luxury-ship.webp'
import ANGELA_IMG from '../../assets/Media (2).jpg'
import { Link } from 'react-router'

/* ════════════════════════════════════════════════════════════ */

function DonorRiverCruises() {

    const heroImages = [HERO_1, HERO_2, HERO_3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const faqs = [
        { question: 'What is a donor river cruise?', answer: 'A donor river cruise is a travel experience designed to engage, recognize, and cultivate supporters while exploring destinations through luxury river cruising.' },
        { question: 'Why are river cruises effective for donor engagement?', answer: 'River cruises create intimate environments that encourage meaningful conversations and relationship building.' },
        { question: 'Which organizations use donor travel programs?', answer: 'Universities, nonprofits, museums, foundations, healthcare organizations, and cultural institutions frequently organize donor travel programs.' },
        { question: 'What destinations are most popular?', answer: 'The Rhine, Danube, Seine, and Douro rivers are among the most requested donor cruise itineraries.' },
        { question: 'Can educational programming be included?', answer: 'Yes. Faculty lectures, guest speakers, leadership presentations, and destination-based learning can all be incorporated.' },
        { question: 'How many guests typically participate?', answer: 'Most donor cruise groups range from 20 to 100 travelers depending on the organization and itinerary.' },
        { question: 'Are donor cruises suitable for major gift prospects?', answer: 'Yes. Many organizations use travel experiences as part of major gift cultivation strategies.' },
        { question: 'How far in advance should planning begin?', answer: 'Most successful programs begin planning 12 to 24 months before departure.' },
        { question: 'Can donors bring spouses or guests?', answer: 'Yes. Most donor travel programs welcome spouses, partners, and travel companions.' },
        { question: 'What river cruise lines are commonly used?', answer: 'Organizations often partner with leading luxury river cruise operators based on audience preferences and destination goals.' },
        { question: 'Do donor cruises support fundraising goals?', answer: 'While not direct fundraising events, donor cruises often strengthen relationships that support long-term philanthropic engagement.' },
        { question: 'What makes river cruises different from ocean cruises?', answer: 'River cruises offer smaller ships, more intimate settings, central city docking, and stronger opportunities for group interaction.' },
        { question: 'Are donor cruises considered luxury travel?', answer: 'Yes. Most donor programs utilize premium or luxury travel experiences to meet participant expectations.' },
        { question: 'Can organizations customize the experience?', answer: 'Absolutely. Cruises can include private events, branded experiences, lectures, receptions, and exclusive excursions.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'We combine luxury travel expertise, donor engagement experience, and personalized planning to create meaningful travel programs that support organizational goals.' },
    ]

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Donor River Cruises",
            "url": "https://www.tripsandships.com/donor-river-cruises",
            "description": "Luxury donor river cruises designed for universities, nonprofits, museums, and cultural organizations seeking meaningful donor engagement."
        },
        {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Trips & Ships Luxury Travel",
            "url": "https://www.tripsandships.com",
            "description": "Luxury travel specialists helping organizations create exceptional donor travel programs and river cruise experiences."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is a donor river cruise?", "acceptedAnswer": { "@type": "Answer", "text": "A donor river cruise is a luxury travel experience designed to engage, recognize, and cultivate supporters while exploring destinations through river cruising." } },
                { "@type": "Question", "name": "Why are river cruises effective for donor engagement?", "acceptedAnswer": { "@type": "Answer", "text": "River cruises create intimate environments that encourage meaningful conversations, relationship building, and long-term donor engagement." } },
                { "@type": "Question", "name": "Which organizations use donor travel programs?", "acceptedAnswer": { "@type": "Answer", "text": "Universities, nonprofits, museums, healthcare organizations, foundations, and cultural institutions frequently organize donor travel experiences." } },
                { "@type": "Question", "name": "What destinations are most popular for donor cruises?", "acceptedAnswer": { "@type": "Answer", "text": "The Rhine, Danube, Seine, and Douro rivers are among the most requested donor cruise destinations." } },
                { "@type": "Question", "name": "How far in advance should a donor cruise be planned?", "acceptedAnswer": { "@type": "Answer", "text": "Most successful donor cruise programs begin planning 12 to 24 months before departure." } }
            ]
        }
    ]

    return (
        <>
            <Helmet>
                <title>Donor River Cruises | Luxury Travel Programs for Donor Engagement</title>
                <meta name="title" content="Donor River Cruises | Luxury Travel Programs for Donor Engagement" />
                <meta name="description" content="Strengthen donor relationships through luxury river cruises designed for universities, nonprofits, foundations, and cultural organizations. Discover donor river cruise programs that inspire deeper engagement and lasting connections." />
                <meta name="keywords" content="Donor River Cruises, Donor Travel Programs, Fundraising Travel Programs, Alumni Donor Cruises, University Donor Travel, Luxury Donor Cruises, Advancement Travel Programs, Donor Engagement Travel, Educational River Cruises" />
                {schemaData.map((schema, i) => (
                    <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
                ))}
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
                        <Anchor size={16} />
                        <span>Advancement Travel Programs</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Donor River Cruises: Building Stronger Relationships Through Exceptional Travel Experiences
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        A well-designed donor river cruise provides far more than a vacation. It creates opportunities for meaningful conversations, shared experiences, lifelong learning, and stronger connections between donors and the organizations they support.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO (existing medi-intro section)
            ══════════════════════════════════ */}
            {/* ══════════════════════════════════
                INTRO (Redesigned custom drc-intro section)
            ══════════════════════════════════ */}
            <section className="drc-intro-section">
                <div className="drc-intro-container">
                    <div className="drc-intro-grid">

                        {/* LEFT COLUMN: Quote & Branding Card */}
                        <div className="drc-intro-left">
                            <div className="drc-intro-branding-card">
                                <span className="drc-intro-badge">Donor Engagement Travel</span>
                                <h2 className="drc-intro-heading">Donor River Cruises</h2>
                                <div className="drc-intro-line"></div>
                                <div className="drc-intro-quote-box">
                                    <span className="drc-intro-quote-symbol">“</span>
                                    <p className="drc-intro-quote-text">
                                        One of the most effective yet often overlooked strategies is donor travel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & Badges */}
                        <div className="drc-intro-right">
                            <div className="drc-intro-content">
                                <p className="drc-intro-para">
                                    In today's competitive fundraising environment, organizations are continually seeking meaningful ways to engage donors, strengthen relationships, and cultivate long-term support.
                                </p>
                                <p className="drc-intro-para">
                                    Whether organized by a university, museum, nonprofit organization, foundation, healthcare institution, or cultural association, donor river cruises have become a powerful engagement tool for advancement professionals.
                                </p>
                                <p className="drc-intro-para drc-intro-para-highlight">
                                    At Trips &amp; Ships Luxury Travel, we help organizations create extraordinary donor travel experiences that foster relationships, celebrate supporters, and inspire continued philanthropy.
                                </p>
                            </div>

                            <div className="drc-intro-badge-container">
                                <span className="drc-intro-badge-title">Designed for advancement programs:</span>
                                <div className="drc-intro-badge-grid">
                                    {['Universities', 'Alumni Associations', 'Nonprofits', 'Museums', 'Foundations', 'Healthcare Institutions', 'Cultural Organizations', 'Major Donor Programs'].map((org, i) => (
                                        <div key={i} className="drc-intro-org-badge">
                                            <CheckCircle size={14} className="drc-intro-org-icon" />
                                            <span className="drc-intro-org-text">{org}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY DONOR TRAVEL WORKS (Redesigned section)
            ══════════════════════════════════ */}
            <section className="drc-why-section">
                <div className="drc-why-container">
                    <div className="drc-why-header">
                        <span className="medi-itinerary-eyebrow">THE POWER OF TRAVEL</span>
                        <h2 className="medi-section-heading">Why Donor Travel Programs Work</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <div className="drc-why-intro-center">
                            <p className="drc-why-content-intro">
                                A donor river cruise offers something completely different. Guests spend several days together sharing experiences, exploring destinations, learning from experts, and building authentic relationships.
                            </p>
                            <p className="drc-why-content-intro">
                                The relaxed atmosphere allows conversations to develop naturally and creates opportunities for deeper engagement than traditional donor events.
                            </p>
                        </div>
                    </div>

                    <div className="drc-why-timeline-split">
                        {/* LEFT COLUMN: Visual Media Card */}
                        <div className="drc-why-image-col">
                            <div className="drc-why-image-wrapper">
                                <img src={WHY_TRAVEL_IMG} alt="Donors on a river cruise" className="drc-why-img" />
                                <div className="drc-why-image-overlay"></div>
                                <div className="drc-why-image-stat">
                                    <p className="drc-why-image-stat-text">
                                        Traditional fundraising events often provide only a few hours of interaction. A donor river cruise offers something completely different.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Interactive Vertical Timeline Track */}
                        <div className="drc-why-timeline-track">
                            <div className="drc-why-timeline-line"></div>
                            {[
                                [Calendar, 'Several Days Together', 'Extended time creates relationship depth impossible in a single-event format.'],
                                [Compass, 'Shared Experiences', 'Exploring destinations together builds lasting memories and genuine connections.'],
                                [GraduationCap, 'Learning from Experts', 'Faculty and leadership share knowledge in an immersive setting.'],
                                [HeartHandshake, 'Building Authentic Relationships', 'Organic conversations develop naturally in a relaxed atmosphere.'],
                            ].map(([Icon, title, desc], i) => (
                                <div key={i} className="drc-why-timeline-item">
                                    <div className="drc-why-timeline-node">
                                        <span>0{i + 1}</span>
                                    </div>
                                    <div className="drc-why-timeline-card">
                                        <div className="drc-why-point-icon"><Icon size={20} /></div>
                                        <div className="drc-why-point-body">
                                            <h4>{title}</h4>
                                            <p>{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY RIVER CRUISES ARE IDEAL (new dark section)
            ══════════════════════════════════ */}
            <section className="drc-river-why-section">
                <div className="drc-river-why-container">
                    <div className="drc-river-why-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>INTIMATE BY DESIGN</span>
                        <h2 className="medi-section-heading">Why River Cruises Are Ideal for Donor Programs</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="drc-river-why-grid">
                        {[
                            [Users, 'Meaningful Networking', 'Smaller ships of 100–200 guests create an environment where every interaction is personal.'],
                            [MessageCircle, 'Personal Interaction', 'Donors have direct access to leadership, faculty, curators, experts, and fellow supporters throughout the journey.'],
                            [HeartHandshake, 'Relationship Building', 'Extended time together allows conversations to deepen naturally over multiple days.'],
                            [Target, 'Stronger Group Cohesion', 'Shared experiences create a sense of community that strengthens overall organizational engagement.'],
                            [Landmark, 'Cultural Immersion', 'River cruises combine luxury, convenience, education, and cultural exploration unlike any other travel format.'],
                            [Gem, 'Intimate Environment', 'Unlike large ocean cruises, river ships typically carry between 100 and 200 guests — ideal for meaningful connection.'],
                        ].map(([Icon, title, desc], i) => (
                            <div key={i} className="drc-river-why-card">
                                <div className="drc-river-why-icon"><Icon size={22} /></div>
                                <h3 className="drc-river-why-title">{title}</h3>
                                <p className="drc-river-why-text">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="drc-river-stat-row">
                        <div className="drc-river-stat-item">
                            <span className="drc-river-stat-number">100–200</span>
                            <span className="drc-river-stat-label">Guests per River Ship</span>
                        </div>
                        <div className="drc-river-stat-item">
                            <span className="drc-river-stat-number">12–24</span>
                            <span className="drc-river-stat-label">Months Planning Lead Time</span>
                        </div>
                        <div className="drc-river-stat-item">
                            <span className="drc-river-stat-number">20–100</span>
                            <span className="drc-river-stat-label">Typical Group Size</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                BENEFITS (new section, own css)
            ══════════════════════════════════ */}
            <section className="drc-benefits-section">
                <div className="drc-benefits-container">
                    <div className="drc-benefits-header">
                        <span className="medi-itinerary-eyebrow">KEY ADVANTAGES</span>
                        <h2 className="medi-section-heading">Benefits of Donor River Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="drc-benefits-grid">
                        {/* Strengthen Donor Relationships */}
                        <div className="drc-benefit-card">
                            <div className="drc-benefit-icon-box"><HeartHandshake size={24} /></div>
                            <h3 className="drc-benefit-title">Strengthen Donor Relationships</h3>
                            <p className="drc-benefit-desc">One of the primary goals of donor travel is relationship cultivation. Travel experiences create opportunities for:</p>
                            <ul className="drc-benefit-sublist">
                                {['Personal conversations', 'Shared memories', 'Trust building', 'Long-term engagement'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '12px', lineHeight: '1.5', fontStyle: 'italic' }}>
                                Many organizations report stronger donor loyalty following travel programs.
                            </p>
                        </div>

                        {/* Create Memorable Experiences */}
                        <div className="drc-benefit-card">
                            <div className="drc-benefit-icon-box"><Star size={24} /></div>
                            <h3 className="drc-benefit-title">Create Memorable Experiences</h3>
                            <p className="drc-benefit-desc">Donors increasingly value experiences over traditional recognition programs. River cruises provide:</p>
                            <ul className="drc-benefit-sublist">
                                {['Cultural immersion', 'Historic destinations', 'Exclusive experiences', 'Luxury accommodations', 'Educational enrichment'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '12px', lineHeight: '1.5', fontStyle: 'italic' }}>
                                These memorable journeys often leave a lasting impression.
                            </p>
                        </div>

                        {/* Encourage Peer Connections */}
                        <div className="drc-benefit-card">
                            <div className="drc-benefit-icon-box"><Users size={24} /></div>
                            <h3 className="drc-benefit-title">Encourage Peer Connections</h3>
                            <p className="drc-benefit-desc">Donor travel also helps supporters connect with one another. Guests often form friendships based on shared interests, values, and experiences.</p>
                            <ul className="drc-benefit-sublist">
                                {['Shared interests', 'Shared values', 'Shared experiences', 'Friendship formation'].map((item, i) => (
                                    <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '12px', lineHeight: '1.5' }}>
                                This sense of community can strengthen overall organizational engagement.
                            </p>
                        </div>

                        {/* Showcase Organizational Expertise */}
                        <div className="drc-benefit-card">
                            <div className="drc-benefit-icon-box"><GraduationCap size={24} /></div>
                            <h3 className="drc-benefit-title">Showcase Organizational Expertise</h3>
                            <p className="drc-benefit-desc">Organizations can incorporate their mission into the travel experience. Examples include:</p>
                            <ul className="drc-benefit-sublist">
                                <li><CheckCircle size={14} /><span><strong>Universities</strong> — Faculty-led lectures and destination-based learning</span></li>
                                <li><CheckCircle size={14} /><span><strong>Museums</strong> — Art, history, and culture-focused programming</span></li>
                                <li><CheckCircle size={14} /><span><strong>Foundations</strong> — Mission-driven discussions and expert presentations</span></li>
                                <li><CheckCircle size={14} /><span><strong>Cultural Organizations</strong> — Immersive experiences tied to organizational themes</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                DESTINATIONS (new section, own css)
            ══════════════════════════════════ */}
            <section className="drc-destinations-section">
                <div className="drc-destinations-container">
                    <div className="drc-destinations-header">
                        <span className="medi-itinerary-eyebrow">POPULAR ROUTES</span>
                        <h2 className="medi-section-heading">Most Popular Donor River Cruise Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="drc-destinations-list-wrapper">
                        {/* Rhine */}
                        <div className="drc-destination-row">
                            <div className="drc-destination-image-wrap">
                                <img src={RHINE_IMG} alt="Rhine River Cruise" />
                                <span className="drc-destination-badge">Most Requested</span>
                            </div>
                            <div className="drc-destination-body">
                                <h3 className="drc-destination-title">Rhine River Cruises</h3>
                                <p className="drc-destination-intro">The Rhine remains one of the most requested donor cruise itineraries.</p>
                                <div className="drc-destination-cols">
                                    <div>
                                        <p className="drc-destination-col-label">Highlights include:</p>
                                        <ul className="drc-destination-list">
                                            {['Germany', 'France', 'Switzerland', 'Netherlands'].map((d, i) => <li key={i}><MapPin size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="drc-destination-col-label">Guests enjoy:</p>
                                        <ul className="drc-destination-list">
                                            {['Medieval castles', 'Historic towns', 'Vineyards', 'Scenic river landscapes'].map((d, i) => <li key={i}><CheckCircle size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Danube */}
                        <div className="drc-destination-row">
                            <div className="drc-destination-image-wrap">
                                <img src={DANUBE_IMG} alt="Danube River Cruise" />
                                <span className="drc-destination-badge">Cultural Immersion</span>
                            </div>
                            <div className="drc-destination-body">
                                <h3 className="drc-destination-title">Danube River Cruises</h3>
                                <p className="drc-destination-intro">The Danube offers rich cultural experiences across Central Europe.</p>
                                <div className="drc-destination-cols">
                                    <div>
                                        <p className="drc-destination-col-label">Popular destinations include:</p>
                                        <ul className="drc-destination-list">
                                            {['Vienna', 'Budapest', 'Bratislava', 'Passau'].map((d, i) => <li key={i}><MapPin size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="drc-destination-col-label">Themes often include:</p>
                                        <ul className="drc-destination-list">
                                            {['History', 'Music', 'Architecture', 'Politics'].map((d, i) => <li key={i}><CheckCircle size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seine */}
                        <div className="drc-destination-row">
                            <div className="drc-destination-image-wrap">
                                <img src={SEINE_IMG} alt="Seine River Cruise" />
                                <span className="drc-destination-badge">Arts & Culture</span>
                            </div>
                            <div className="drc-destination-body">
                                <h3 className="drc-destination-title">Seine River Cruises</h3>
                                <p className="drc-destination-intro">Ideal for art organizations, museums, and cultural institutions. Travelers enjoy:</p>
                                <div className="drc-destination-cols">
                                    <div>
                                        <p className="drc-destination-col-label">Ideal for:</p>
                                        <ul className="drc-destination-list">
                                            {['Art organizations', 'Museums', 'Cultural institutions'].map((d, i) => <li key={i}><CheckCircle size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="drc-destination-col-label">Travelers enjoy:</p>
                                        <ul className="drc-destination-list">
                                            {['Paris', 'Normandy', 'French cuisine', 'Historic landmarks'].map((d, i) => <li key={i}><MapPin size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Douro */}
                        <div className="drc-destination-row">
                            <div className="drc-destination-image-wrap">
                                <img src={DOURO_IMG} alt="Douro River Cruise" />
                                <span className="drc-destination-badge">Luxury Favourite</span>
                            </div>
                            <div className="drc-destination-body">
                                <h3 className="drc-destination-title">Douro River Cruises</h3>
                                <p className="drc-destination-intro">Portugal's Douro Valley offers a favorite among luxury travelers.</p>
                                <div className="drc-destination-cols">
                                    <div>
                                        <p className="drc-destination-col-label">Highlights:</p>
                                        <ul className="drc-destination-list">
                                            {['Wine experiences', 'Scenic landscapes', 'Authentic villages', 'Culinary immersion'].map((d, i) => <li key={i}><CheckCircle size={13} /><span>{d}</span></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                EDUCATIONAL PROGRAMMING (new section, own css)
            ══════════════════════════════════ */}
            <section className="drc-education-section">
                <div className="drc-education-container">
                    <div className="drc-education-header">
                        <span className="medi-itinerary-eyebrow">ENRICHMENT & LEARNING</span>
                        <h2 className="medi-section-heading">Educational Programming Opportunities</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="drc-education-layout">
                        <div className="drc-education-image-col">
                            <img src={LECTURE_IMG} alt="Faculty lecture on a donor cruise" />
                        </div>

                        <div className="drc-education-content-col">
                            <p className="drc-education-intro">
                                The most successful donor cruises often integrate educational elements. Organizations may include:
                            </p>

                            {[
                                [GraduationCap, 'Faculty Presentations', 'Experts provide destination context and intellectual enrichment.'],
                                [Target, 'Leadership Discussions', 'Executives share organizational priorities and future initiatives.'],
                                [Mic, 'Guest Speakers', 'Historians, authors, scientists, and local experts enhance the experience.'],
                                [Star, 'Exclusive Events', 'Private receptions, dinners, and onboard gatherings strengthen connections.'],
                            ].map(([Icon, title, desc], i) => (
                                <div key={i} className="drc-education-program-card">
                                    <div className="drc-education-program-icon"><Icon size={20} /></div>
                                    <div>
                                        <h4 className="drc-education-program-title">{title}</h4>
                                        <p className="drc-education-program-desc">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                HOW DONOR CRUISES SUPPORT ADVANCEMENT GOALS
                (new section — 5 pillars grid, own css)
            ══════════════════════════════════ */}
            <section className="drc-advancement-section">
                <div className="drc-advancement-container">
                    <div className="drc-advancement-header">
                        <span className="medi-itinerary-eyebrow">STRATEGIC ALIGNMENT</span>
                        <h2 className="medi-section-heading">How Donor Cruises Support Advancement Goals</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="drc-advancement-intro">
                        Donor travel aligns naturally with fundraising objectives.
                    </p>

                    <div className="drc-advancement-grid">
                        {[
                            [HeartHandshake, 'Relationship Development', 'Meaningful interactions occur organically throughout the journey.'],
                            [UserCheck, 'Donor Retention', 'Engaged donors are more likely to remain active supporters.'],
                            [TrendingUp, 'Major Gift Cultivation', 'Extended travel creates opportunities for deeper conversations.'],
                            [Trophy, 'Stewardship', 'Travel programs demonstrate appreciation and recognition.'],
                            [HandCoins, 'Future Giving', 'Positive experiences often contribute to stronger philanthropic relationships.'],
                        ].map(([Icon, title, desc], i) => (
                            <div key={i} className="drc-advancement-pillar">
                                <div className="drc-advancement-pillar-icon"><Icon size={22} /></div>
                                <h3 className="drc-advancement-pillar-title">{title}</h3>
                                <p className="drc-advancement-pillar-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY LUXURY MATTERS (new dark section, own css)
            ══════════════════════════════════ */}
            <section className="drc-luxury-section">
                <div className="drc-luxury-container">
                    <div className="drc-luxury-layout">
                        <div className="drc-luxury-content">
                            <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8', display: 'block', marginBottom: '16px' }}>PREMIUM EXPECTATIONS</span>
                            <h2>Why Luxury Matters</h2>
                            <p className="drc-luxury-content-intro">
                                Many donor audiences expect premium travel experiences. River cruises provide:
                            </p>
                            <ul className="drc-luxury-list">
                                {['Elegant accommodations', 'Personalized service', 'Fine dining', 'Comfortable transportation', 'Immersive destinations'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="drc-luxury-conclusion">
                                Luxury enhances overall satisfaction and reflects positively on the hosting organization.
                            </p>
                        </div>

                        <div className="drc-luxury-image-col">
                            <img src={LUXURY_SHIP_IMG} alt="Luxury river cruise ship" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY TRIPS & SHIPS (new section, own css)
            ══════════════════════════════════ */}
            <section className="drc-services-section">
                <div className="drc-services-container">
                    <div className="drc-services-header">
                        <span className="medi-itinerary-eyebrow">OUR EXPERTISE</span>
                        <h2 className="medi-section-heading">Why Organizations Choose Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '700px', margin: '0 auto', textAlign: 'center', lineHeight: '1.7' }}>
                            Planning a donor travel program requires specialized expertise. Trips &amp; Ships Luxury Travel provides:
                        </p>
                    </div>

                    <div className="drc-services-grid">
                        {[
                            [Target, 'Strategic Program Development', 'Travel experiences aligned with organizational goals.'],
                            [Ship, 'River Cruise Expertise', 'Access to the world\'s leading river cruise lines.'],
                            [HeartHandshake, 'Donor Engagement Support', 'Programs designed to foster meaningful relationships.'],
                            [Star, 'Event Coordination', 'Private receptions, lectures, and exclusive experiences.'],
                            [Award, 'White-Glove Service', 'Comprehensive traveler support before, during, and after travel.'],
                        ].map(([Icon, title, desc], i) => (
                            <div key={i} className="drc-service-card">
                                <div className="drc-service-icon-box"><Icon size={20} /></div>
                                <h3 className="drc-service-title">{title}</h3>
                                <p className="drc-service-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
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
                                <img src={ANGELA_IMG} alt="Angela Hughes - Luxury Travel Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-eyebrow-container">
                                <Award size={16} className="medi-editorial-icon-badge" />
                                <span className="medi-editorial-eyebrow">TRUSTED EXPERTISE</span>
                            </div>
                            <h2 className="medi-editorial-title">Angela Hughes: Trusted Expertise for Donor Travel Programs</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-lead-para">
                                Organizations benefit from Angela Hughes' extensive experience in luxury travel and educational travel planning. This expertise helps organizations create donor experiences that exceed expectations.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Her credentials include:</p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'More than 40 years in travel',
                                        'Travel to over 121 countries',
                                        'Founder of Luxury Travel University',
                                        'Travel Leaders Network Advisory Board Member',
                                        'International travel educator',
                                        'Weekly travel columnist',
                                        '2024 Luxury Travel Influencer of the Year',
                                        'Recognized among the travel industry\'s most influential leaders',
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={14} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                BEST FOR — ORGANISATIONS (new section, own css)
            ══════════════════════════════════ */}
            <section className="drc-bestfor-section">
                <div className="drc-bestfor-container">
                    <div className="drc-bestfor-header">
                        <span className="medi-itinerary-eyebrow">IDEAL PARTNERS</span>
                        <h2 className="medi-section-heading">Best For</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="drc-bestfor-grid">
                        {[
                            [GraduationCap, 'Universities'],
                            [Users, 'Alumni Associations'],
                            [HeartHandshake, 'Nonprofit Organizations'],
                            [Landmark, 'Museums'],
                            [Building2, 'Foundations'],
                            [Heart, 'Healthcare Institutions'],
                            [Music, 'Cultural Organizations'],
                            [Trophy, 'Major Donor Programs'],
                        ].map(([Icon, name], i) => (
                            <div key={i} className="drc-bestfor-card">
                                <div className="drc-bestfor-icon-box"><Icon size={22} /></div>
                                <p className="drc-bestfor-name">{name}</p>
                            </div>
                        ))}
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
                CTA — closing / contact
            ══════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Create Meaningful Connections Through Donor River Cruises</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Donor travel programs offer far more than a luxury vacation.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 16px' }}>
                            They provide a powerful opportunity to strengthen relationships, deepen engagement, and create memorable experiences that foster long-term support.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether your organization is looking to cultivate major donors, recognize loyal supporters, or build stronger community connections, a donor river cruise can deliver exceptional results.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With Angela Hughes' expertise and Trips &amp; Ships Luxury Travel's proven planning process, your organization can create a donor travel experience that inspires lasting impact.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Rhine River donor programs', 'Danube cultural cruises', 'Seine art & museum itineraries', 'Douro wine country journeys', 'Custom organizational programs'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips &amp; Ships Luxury Travel today to begin planning your custom donor river cruise program.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to="/contact" className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
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

export default DonorRiverCruises