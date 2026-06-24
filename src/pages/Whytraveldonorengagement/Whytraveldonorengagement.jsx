import Navbar from '../../components/Navbar/Navbar'
import './Whytraveldonorengagement.css'
// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
// import hero1 from '../../assets/DonorEngagement/hero1.jpg'
// import hero2 from '../../assets/DonorEngagement/hero2.jpg'
// import hero3 from '../../assets/DonorEngagement/hero3.jpg'
// import donGroupTravel from '../../assets/DonorEngagement/donor-group-travel.webp'
// import donTraditional from '../../assets/DonorEngagement/donor-traditional.webp'
// import donRelationships from '../../assets/DonorEngagement/donor-relationships.webp'
// import donCommunity from '../../assets/DonorEngagement/donor-community.webp'
// import donMissionUniversity from '../../assets/DonorEngagement/donor-mission-university.webp'
// import donMissionMuseum from '../../assets/DonorEngagement/donor-mission-museum.webp'
// import donMissionConservation from '../../assets/DonorEngagement/donor-mission-conservation.webp'
// import donMissionHealthcare from '../../assets/DonorEngagement/donor-mission-healthcare.webp'
// import donGiftConversation from '../../assets/DonorEngagement/donor-gift-conversation.webp'
// import donStewardship from '../../assets/DonorEngagement/donor-stewardship.webp'
// import donGenerations from '../../assets/DonorEngagement/donor-generations.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Mic, FileText, GraduationCap,
    Globe, MessageSquare, Briefcase, TrendingUp, Eye, Smile,
    Leaf, BookOpen, DollarSign
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function WhyTravelDonorEngagement() {
    const [donCurrentHero, setDonCurrentHero] = useState(0)
    const donHeroImages = []

    useEffect(() => {
        const donTimer = setInterval(() => {
            setDonCurrentHero(prev => (prev + 1) % donHeroImages.length)
        }, 5000)
        return () => clearInterval(donTimer)
    }, [donHeroImages.length])

    const [donActiveFaq, setDonActiveFaq] = useState(null)
    const donToggleFaq = i => setDonActiveFaq(donActiveFaq === i ? null : i)

    const donFaqs = [
        { question: 'Why does travel increase donor engagement?', answer: 'Travel creates meaningful shared experiences that strengthen personal relationships and emotional connections.' },
        { question: 'How do travel programs support fundraising?', answer: 'Travel programs improve stewardship, strengthen donor relationships, and create opportunities for long-term engagement.' },
        { question: 'Are donor travel programs fundraising events?', answer: 'Not typically. Their primary purpose is engagement, stewardship, education, and relationship building.' },
        { question: 'What types of organizations use donor travel programs?', answer: 'Universities, museums, healthcare foundations, conservation organizations, nonprofits, and performing arts groups frequently use donor travel programs.' },
        { question: 'How does travel improve donor retention?', answer: 'Travel creates memorable experiences and stronger personal connections, which often lead to greater long-term loyalty.' },
        { question: 'Can travel programs help cultivate major donors?', answer: 'Yes. Extended interaction often leads to stronger relationships and future philanthropic conversations.' },
        { question: 'What destinations work best for donor travel?', answer: 'Popular options include Europe, Africa, river cruises, expedition cruises, cultural destinations, and educational travel programs.' },
        { question: 'Are donor travel programs only for wealthy donors?', answer: 'No. Programs can be designed for a variety of supporter levels and audiences.' },
        { question: 'How long are donor travel programs?', answer: 'Most programs range from 7 to 14 days, though shorter and longer options are available.' },
        { question: 'Do travel programs generate revenue for organizations?', answer: 'Some organizations structure programs to create additional revenue while supporting engagement goals.' },
        { question: 'What is donor stewardship?', answer: 'Donor stewardship refers to efforts that recognize, appreciate, and strengthen relationships with supporters.' },
        { question: 'Why are shared experiences important in fundraising?', answer: 'Shared experiences create emotional bonds that strengthen trust and long-term commitment.' },
        { question: 'Can alumni travel programs increase engagement?', answer: 'Yes. Alumni travel programs are among the most effective engagement tools used by universities today.' },
        { question: 'What role does education play in donor travel?', answer: "Educational experiences help participants better understand the organization's mission and impact." },
        { question: 'Why work with a professional travel partner?', answer: 'A travel partner manages logistics, risk management, guest experience design, and operational details, ensuring a successful program.' }
    ]

    const donOrgTypes = [
        {
            type: 'Universities',
            // img: donMissionUniversity,
            Icon: GraduationCap,
            items: ['Faculty-led educational travel', 'Alumni travel programs', 'Study-abroad-inspired experiences']
        },
        {
            type: 'Museums',
            // img: donMissionMuseum,
            Icon: Globe,
            items: ['Curator-led cultural journeys', 'Art-focused travel experiences', 'Behind-the-scenes access']
        },
        {
            type: 'Conservation Organizations',
            // img: donMissionConservation,
            Icon: Leaf,
            items: ['Wildlife safaris', 'Conservation projects', 'Research-focused travel']
        },
        {
            type: 'Healthcare Foundations',
            // img: donMissionHealthcare,
            Icon: Heart,
            items: ['Wellness-focused travel', 'Leadership engagement programs', 'Educational experiences']
        }
    ]

    const donSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising",
                "name": "Why Travel Increases Donor Engagement and Fundraising",
                "url": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising",
                "description": "Learn why donor travel programs strengthen donor relationships, improve stewardship, increase engagement, and support fundraising success.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising#article" }
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
                "description": "Luxury travel agency specializing in donor travel, alumni travel, educational travel, cruises, and customized group travel programs."
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
                "@id": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising#article",
                "headline": "Why Travel Increases Donor Engagement and Fundraising",
                "url": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising",
                "description": "Discover how donor travel programs strengthen relationships, improve stewardship, and increase fundraising effectiveness through shared experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/why-travel-increases-donor-engagement-and-fundraising.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising" }
            },
            {
                "@type": "Service",
                "name": "Donor Travel Program Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Donor Engagement and Educational Travel Consulting",
                "description": "Customized donor travel programs designed to strengthen donor relationships, stewardship efforts, and fundraising outcomes."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Donor Travel Programs", "item": "https://www.tripsshipsluxurytravel.com/donor-travel-programs" },
                    { "@type": "ListItem", "position": 3, "name": "Why Travel Increases Donor Engagement and Fundraising", "item": "https://www.tripsshipsluxurytravel.com/why-travel-increases-donor-engagement-and-fundraising" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Why does travel increase donor engagement?", "acceptedAnswer": { "@type": "Answer", "text": "Travel creates meaningful shared experiences that strengthen personal relationships and emotional connections." } },
                    { "@type": "Question", "name": "How do travel programs support fundraising?", "acceptedAnswer": { "@type": "Answer", "text": "Travel programs improve stewardship, strengthen donor relationships, and create opportunities for long-term engagement." } },
                    { "@type": "Question", "name": "Are donor travel programs fundraising events?", "acceptedAnswer": { "@type": "Answer", "text": "No. Their primary purpose is engagement, stewardship, education, and relationship building." } },
                    { "@type": "Question", "name": "What types of organizations use donor travel programs?", "acceptedAnswer": { "@type": "Answer", "text": "Universities, museums, healthcare foundations, conservation organizations, nonprofits, and performing arts groups frequently use donor travel programs." } },
                    { "@type": "Question", "name": "How does travel improve donor retention?", "acceptedAnswer": { "@type": "Answer", "text": "Travel creates memorable experiences and stronger personal connections that often lead to greater long-term loyalty." } },
                    { "@type": "Question", "name": "Can travel programs help cultivate major donors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Extended interaction often leads to stronger relationships and future philanthropic conversations." } },
                    { "@type": "Question", "name": "What destinations work best for donor travel?", "acceptedAnswer": { "@type": "Answer", "text": "Popular options include Europe, Africa, cultural destinations, river cruises, and expedition cruises." } },
                    { "@type": "Question", "name": "Are donor travel programs only for wealthy donors?", "acceptedAnswer": { "@type": "Answer", "text": "No. Programs can be designed for a variety of supporter levels and audiences." } },
                    { "@type": "Question", "name": "How long are donor travel programs?", "acceptedAnswer": { "@type": "Answer", "text": "Most programs range from 7 to 14 days, though shorter and longer options are available." } },
                    { "@type": "Question", "name": "Do travel programs generate revenue for organizations?", "acceptedAnswer": { "@type": "Answer", "text": "Some organizations structure programs to create additional revenue while supporting engagement goals." } },
                    { "@type": "Question", "name": "What is donor stewardship?", "acceptedAnswer": { "@type": "Answer", "text": "Donor stewardship refers to efforts that recognize, appreciate, and strengthen relationships with supporters." } },
                    { "@type": "Question", "name": "Why work with a professional travel partner?", "acceptedAnswer": { "@type": "Answer", "text": "A travel partner manages logistics, risk management, guest experience design, and operational details to ensure a successful program." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Why Travel Increases Donor Engagement and Fundraising</title>
                <meta name="title" content="Why Travel Increases Donor Engagement and Fundraising" />
                <meta name="description" content="Discover why donor travel programs increase donor engagement, strengthen relationships, improve stewardship, and drive fundraising success for universities, nonprofits, museums, and cultural organizations." />
                <meta name="keywords" content="Why Travel Increases Donor Engagement and Fundraising, Donor Travel Programs, Fundraising Travel Programs, Alumni Travel Programs, Donor Engagement Strategies, Nonprofit Travel Programs, Travel and Fundraising, Donor Stewardship, Educational Travel Programs" />
                <script type="application/ld+json">{JSON.stringify(donSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {donHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${donCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Donor Travel Programs · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Why Travel Increases Donor Engagement and Fundraising
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Discover how shared travel experiences strengthen donor relationships, improve stewardship, and drive long-term fundraising success.
                    </p>
                </div>
            </section>

            {/* ── POWER OF SHARED EXPERIENCES ── */}
            <section className="don-power-section">
                <div className="don-power-container">
                    <div className="don-power-grid">

                        <div className="don-power-text-col">
                            <span className="don-eyebrow">RELATIONSHIP STRATEGY</span>
                            <h2 className="medi-section-heading">The Power of Shared Experiences in Philanthropy</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-power-lead">Fundraising has always been about relationships.</p>
                            <p className="don-power-body">While annual campaigns, galas, donor events, and stewardship programs remain important, organizations are increasingly discovering that travel creates deeper and more meaningful donor connections than almost any other engagement strategy.</p>
                            <p className="don-power-body">Universities, museums, healthcare foundations, conservation organizations, performing arts institutions, and nonprofits are using travel programs to strengthen relationships, increase donor loyalty, cultivate major gifts, and build long-term engagement.</p>
                            <div className="don-power-statement-box">
                                <div className="don-power-statement-accent"></div>
                                <div className="don-power-statement-text">
                                    <p className="don-power-statement-primary">The reason is simple:</p>
                                    <p className="don-power-statement-bold">People remember experiences far longer than events.</p>
                                    <p className="don-power-statement-primary">Travel creates those experiences.</p>
                                </div>
                            </div>
                        </div>

                        <div className="don-power-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donGroupTravel} alt="Donor group travel experience" className="don-frame-img" /> */}
                                <div className="don-frame-overlay"></div>
                                <div className="don-image-badge">
                                    <Users size={13} />
                                    <span>Shared Experiences Build Lasting Connections</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TRADITIONAL LIMITS ── */}
            <section className="don-limits-section">
                <div className="don-limits-container">
                    <div className="don-limits-grid">

                        <div className="don-limits-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donTraditional} alt="Traditional donor fundraising event" className="don-frame-img" /> */}
                                <div className="don-frame-overlay don-overlay-soft"></div>
                            </div>
                        </div>

                        <div className="don-limits-text-col">
                            <span className="don-eyebrow">THE ENGAGEMENT GAP</span>
                            <h2 className="medi-section-heading">Why Traditional Donor Engagement Has Limits</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-limits-lead">Traditional fundraising strategies often rely on:</p>

                            <div className="don-limits-methods">
                                {[
                                    { Icon: Calendar, text: 'Annual giving campaigns' },
                                    { Icon: Utensils, text: 'Fundraising dinners' },
                                    { Icon: Star, text: 'Special events' },
                                    { Icon: Users, text: 'Membership programs' },
                                    { Icon: Award, text: 'Donor recognition initiatives' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="don-method-item">
                                        <div className="don-method-icon"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="don-limits-insight-box">
                                <p>While effective, these interactions are often brief.</p>
                                <p>Donors may spend only a few hours with organizational leaders during an entire year.</p>
                            </div>

                            <div className="don-limits-pivot-box">
                                <p className="don-limits-pivot-text">Travel changes that dynamic completely.</p>
                                <p className="don-limits-pivot-sub">A seven-day journey can provide dozens of meaningful interactions that would otherwise take years to develop.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TRAVEL CREATES MEANINGFUL RELATIONSHIPS ── */}
            <section className="don-trust-section">
                <div className="don-trust-container">
                    <div className="don-trust-grid">

                        <div className="don-trust-text-col">
                            <span className="don-eyebrow">BUILDING TRUST</span>
                            <h2 className="medi-section-heading">Travel Creates Meaningful Relationships</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-trust-lead">Strong fundraising depends on trust.</p>
                            <p className="don-trust-body">Trust develops through:</p>

                            <div className="don-trust-pillars">
                                {[
                                    { Icon: Users, label: 'Personal interaction' },
                                    { Icon: Globe, label: 'Shared experiences' },
                                    { Icon: MessageSquare, label: 'Authentic conversations' },
                                    { Icon: Heart, label: 'Emotional connection' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="don-trust-pillar">
                                        <div className="don-trust-pillar-icon"><Icon size={22} /></div>
                                        <span className="don-trust-pillar-label">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="don-trust-conclusion-box">
                                <p>Travel naturally creates opportunities for all four.</p>
                                <p>When donors travel alongside organizational leaders, faculty members, curators, physicians, or subject-matter experts, conversations become more personal and relationships become stronger.</p>
                            </div>
                        </div>

                        <div className="don-trust-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donRelationships} alt="Donors building relationships through travel" className="don-frame-img" /> */}
                                <div className="don-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── EMOTIONAL CONNECTIONS ── */}
            <section className="don-emotions-section">
                <div className="don-emotions-container">
                    <div className="don-emotions-header">
                        <span className="don-eyebrow don-eyebrow-light">PSYCHOLOGICAL IMPACT</span>
                        <h2 className="medi-section-heading don-white-heading">Experiences Create Emotional Connections</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered don-separator-white"></div>
                        <p className="don-emotions-intro">Research consistently shows that people value experiences more than possessions.</p>
                        <p className="don-emotions-sub">Travel provides:</p>
                    </div>

                    <div className="don-emotions-cards">
                        {[
                            { Icon: Compass, label: 'Discovery', desc: 'New places, cultures, and perspectives that expand worldviews.' },
                            { Icon: Sparkles, label: 'Inspiration', desc: 'Transformative moments that reconnect donors to organizational purpose.' },
                            { Icon: Globe, label: 'Adventure', desc: 'Shared journeys that create lasting memories and personal bonds.' },
                            { Icon: BookOpen, label: 'Learning', desc: 'Educational depth that deepens understanding of mission and impact.' },
                            { Icon: Heart, label: 'Connection', desc: 'Human relationships built through authentic shared experience.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="don-emotion-card">
                                <div className="don-emotion-card-icon"><Icon size={26} /></div>
                                <h3 className="don-emotion-card-title">{label}</h3>
                                <p className="don-emotion-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="don-emotions-footer-box">
                        <p>These emotional experiences often become closely associated with the organization that facilitated the journey.</p>
                        <p>As a result, donors frequently develop stronger feelings of loyalty and commitment.</p>
                    </div>
                </div>
            </section>

            {/* ── TRAVEL BUILDS COMMUNITY ── */}
            <section className="don-community-section">
                <div className="don-community-container">
                    <div className="don-community-grid">

                        <div className="don-community-text-col">
                            <span className="don-eyebrow">COMMUNITY BUILDING</span>
                            <h2 className="medi-section-heading">Travel Builds Community</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-community-lead">One of the greatest benefits of donor travel programs is community building.</p>
                            <p className="don-community-body">Participants often share:</p>

                            <div className="don-community-pillars">
                                {[
                                    { Icon: Star, text: 'Similar interests' },
                                    { Icon: GraduationCap, text: 'Educational backgrounds' },
                                    { Icon: Heart, text: 'Philanthropic values' },
                                    { Icon: Users, text: 'Organizational connections' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="don-community-pillar">
                                        <div className="don-community-pillar-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="don-community-conclusion-box">
                                <p>Travel brings these individuals together in ways that traditional fundraising events rarely achieve.</p>
                                <p>Many lifelong friendships begin during donor travel programs.</p>
                            </div>
                        </div>

                        <div className="don-community-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donCommunity} alt="Donor travel community building" className="don-frame-img" /> */}
                                <div className="don-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── EXTENDED TIME ── */}
            <section className="don-extended-section">
                <div className="don-extended-container">
                    <div className="don-extended-header">
                        <span className="don-eyebrow">DEPTH OF ENGAGEMENT</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Extended Time Leads to Stronger Engagement</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="don-extended-intro">Most fundraising interactions are short. Travel provides extended engagement.</p>
                        <p className="don-extended-sub">Over several days, participants may:</p>
                    </div>

                    <div className="don-extended-activities">
                        {[
                            { Icon: Utensils, label: 'Share meals', desc: 'Informal dining fosters authentic personal conversations.' },
                            { Icon: BookOpen, label: 'Attend lectures', desc: 'Expert-led sessions deepen mission understanding.' },
                            { Icon: MapPin, label: 'Explore destinations', desc: 'Shared discovery creates common reference points.' },
                            { Icon: MessageSquare, label: 'Participate in discussions', desc: 'Open dialogue builds intellectual connection.' },
                            { Icon: Music, label: 'Experience cultural events', desc: 'Shared cultural moments create lasting emotional bonds.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="don-activity-card">
                                <div className="don-activity-num">0{idx + 1}</div>
                                <div className="don-activity-icon"><Icon size={22} /></div>
                                <h3 className="don-activity-label">{label}</h3>
                                <p className="don-activity-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="don-extended-conclusion">
                        <p>These repeated interactions strengthen relationships and foster deeper organizational connections.</p>
                    </div>
                </div>
            </section>

            {/* ── MISSION ALIGNMENT ── */}
            <section className="don-mission-section">
                <div className="don-mission-container">
                    <div className="don-mission-header">
                        <span className="don-eyebrow">STRATEGIC ALIGNMENT</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Educational Travel Enhances Mission Alignment</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="don-mission-intro">Successful donor travel programs often connect directly to an organization's mission.</p>
                        <p className="don-mission-sub">Examples include:</p>
                    </div>

                    <div className="don-mission-grid">
                        {donOrgTypes.map(({ type, img, Icon, items }, idx) => (
                            <div key={idx} className="don-mission-card">
                                <div className="don-mission-card-img-wrap">
                                    <img src={img} alt={`${type} donor travel`} className="don-mission-card-img" />
                                    <div className="don-mission-card-overlay"></div>
                                    <div className="don-mission-card-header">
                                        <div className="don-mission-card-icon-wrap"><Icon size={20} /></div>
                                        <h3 className="don-mission-card-type">{type}</h3>
                                    </div>
                                </div>
                                <div className="don-mission-card-body">
                                    <ul className="don-mission-card-list">
                                        {items.map((item, iIdx) => (
                                            <li key={iIdx} className="don-mission-card-item">
                                                <ChevronRight size={14} className="don-mission-chevron" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="don-mission-footer">
                        <p>Mission-aligned travel helps donors better understand organizational impact.</p>
                    </div>
                </div>
            </section>

            {/* ── MAJOR GIFT CONVERSATIONS ── */}
            <section className="don-gift-section">
                {/* <div className="don-gift-bg" style={{ backgroundImage: `url(${donGiftConversation})` }}></div> */}
                <div className="don-gift-overlay"></div>
                <div className="don-gift-content">
                    <span className="don-gift-eyebrow">PHILANTHROPIC OPPORTUNITY</span>
                    <h2 className="don-gift-heading">Travel Creates Opportunities for Major Gift Conversations</h2>
                    <div className="don-gift-separator"></div>
                    <p className="don-gift-note">Travel is not a fundraising solicitation event.</p>
                    <p className="don-gift-body">However, travel often creates ideal conditions for meaningful philanthropic discussions.</p>
                    <div className="don-gift-points">
                        {[
                            { Icon: Clock, text: 'Donors spend significant time with organizational leaders in a relaxed environment.' },
                            { Icon: MessageSquare, text: 'Conversations happen naturally.' },
                            { Icon: Heart, text: 'Trust develops organically.' },
                            { Icon: TrendingUp, text: 'This often leads to stronger long-term fundraising outcomes.' }
                        ].map(({ Icon, text }, idx) => (
                            <div key={idx} className="don-gift-point">
                                <div className="don-gift-point-icon"><Icon size={18} /></div>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DONOR RETENTION ── */}
            <section className="don-retention-section">
                <div className="don-retention-container">
                    <div className="don-retention-grid">

                        <div className="don-retention-text-col">
                            <span className="don-eyebrow">LONG-TERM LOYALTY</span>
                            <h2 className="medi-section-heading">Donor Retention Improves Through Travel</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-retention-lead">Donor retention is one of the most important factors in fundraising success.</p>
                            <p className="don-retention-body">Travel programs help improve retention by:</p>

                            <div className="don-retention-benefits">
                                {[
                                    { Icon: Heart, text: 'Increasing emotional connection' },
                                    { Icon: Users, text: 'Strengthening personal relationships' },
                                    { Icon: Smile, text: 'Creating memorable experiences' },
                                    { Icon: Globe, text: 'Building community among supporters' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="don-retention-benefit">
                                        <div className="don-retention-benefit-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="don-retention-conclusion">
                                <p>Donors who feel connected are more likely to remain engaged over time.</p>
                            </div>
                        </div>

                        <div className="don-retention-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donStewardship} alt="Donor retention through travel" className="don-frame-img" /> */}
                                <div className="don-frame-overlay"></div>
                                <div className="don-retention-stat-badge">
                                    <TrendingUp size={16} />
                                    <span>Higher Retention Through Travel</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── STEWARDSHIP ── */}
            <section className="don-stewardship-section">
                <div className="don-stewardship-container">
                    <div className="don-stewardship-header">
                        <span className="don-eyebrow don-eyebrow-light">RECOGNITION &amp; APPRECIATION</span>
                        <h2 className="medi-section-heading don-white-heading">Travel Supports Stewardship Efforts</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered don-separator-white"></div>
                        <p className="don-stewardship-intro">Effective stewardship demonstrates appreciation.</p>
                        <p className="don-stewardship-sub">Travel provides organizations with opportunities to:</p>
                    </div>

                    <div className="don-stewardship-grid">
                        {[
                            { Icon: Award, title: 'Recognize donor support', desc: 'Acknowledge the importance of each contributor in a meaningful, personal way.' },
                            { Icon: Crown, title: 'Provide exclusive experiences', desc: 'Create VIP moments that reward loyalty and deepen commitment.' },
                            { Icon: Eye, title: 'Offer meaningful access', desc: 'Behind-the-scenes and curated access that money alone cannot buy.' },
                            { Icon: Mic, title: 'Showcase organizational expertise', desc: 'Demonstrate mission impact through immersive expert-led programming.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="don-stewardship-card">
                                <div className="don-stewardship-card-icon"><Icon size={24} /></div>
                                <h3 className="don-stewardship-card-title">{title}</h3>
                                <p className="don-stewardship-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="don-stewardship-footer">
                        <p>Many organizations view travel as one of their most valuable stewardship tools.</p>
                    </div>
                </div>
            </section>

            {/* ── MULTIPLE GENERATIONS ── */}
            <section className="don-generations-section">
                <div className="don-generations-container">
                    <div className="don-generations-grid">

                        <div className="don-generations-text-col">
                            <span className="don-eyebrow">BROAD APPEAL</span>
                            <h2 className="medi-section-heading">Travel Appeals to Multiple Generations</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="don-generations-lead">Modern travel programs increasingly attract:</p>

                            <div className="don-generations-types">
                                {[
                                    { Icon: GraduationCap, label: 'Alumni' },
                                    { Icon: Users, label: 'Retired supporters' },
                                    { Icon: Briefcase, label: 'Young professionals' },
                                    { Icon: Heart, label: 'Multi-generational families' },
                                    { Icon: Award, label: 'Board members' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="don-generation-type">
                                        <div className="don-generation-type-icon"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="don-generations-conclusion">
                                <p>This diversity creates opportunities for broader engagement across donor communities.</p>
                            </div>
                        </div>

                        <div className="don-generations-image-col">
                            <div className="don-image-frame">
                                {/* <img src={donGenerations} alt="Multi-generational donor travel" className="don-frame-img" /> */}
                                <div className="don-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── RISE OF EXPERIENTIAL TRAVEL ── */}
            <section className="don-rise-section">
                <div className="don-rise-container">
                    <div className="don-rise-header">
                        <span className="don-eyebrow don-eyebrow-light">SHIFTING PRIORITIES</span>
                        <h2 className="medi-section-heading don-white-heading">The Rise of Educational and Experiential Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered don-separator-white"></div>
                        <p className="don-rise-intro">Today's donors increasingly prioritize experiences.</p>
                        <p className="don-rise-sub">They seek:</p>
                    </div>

                    <div className="don-rise-cards">
                        {[
                            { Icon: BookOpen, label: 'Learning opportunities', desc: 'Expert-led programming that provides new knowledge and insights.' },
                            { Icon: Globe, label: 'Cultural immersion', desc: 'Authentic destination experiences that broaden understanding.' },
                            { Icon: Eye, label: 'Expert access', desc: 'Behind-the-scenes access and conversations with leaders and specialists.' },
                            { Icon: Heart, label: 'Authentic connections', desc: 'Real relationships built through genuine shared experiences.' }
                        ].map(({ Icon, label, desc }, idx) => (
                            <div key={idx} className="don-rise-card">
                                <div className="don-rise-card-icon"><Icon size={24} /></div>
                                <h3 className="don-rise-card-title">{label}</h3>
                                <p className="don-rise-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="don-rise-conclusion">
                        <p>Travel programs align perfectly with these preferences.</p>
                        <p>As a result, donor travel continues to grow as a strategic engagement tool.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY PARTNER WITH EXPERTS ── */}
            <section className="don-partner-section">
                <div className="don-partner-container">
                    <div className="don-partner-header">
                        <span className="don-eyebrow">SPECIALIZED EXPERTISE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Organizations Partner With Travel Experts</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="don-partner-intro">Successful donor travel programs require specialized expertise.</p>
                        <p className="don-partner-sub">Key considerations include:</p>
                    </div>

                    <div className="don-partner-grid">
                        {[
                            { Icon: MapPin, title: 'Destination selection', desc: 'Identifying destinations that align with organizational mission and donor interests.' },
                            { Icon: Users, title: 'Group logistics', desc: 'Managing complex group travel operations seamlessly and professionally.' },
                            { Icon: CheckCircle, title: 'Risk management', desc: 'Ensuring safety, contingency planning, and operational resilience.' },
                            { Icon: BookOpen, title: 'Educational programming', desc: 'Designing curriculum and experiences that enhance mission understanding.' },
                            { Icon: Smile, title: 'Guest experience design', desc: 'Crafting every detail of the participant journey for maximum impact.' },
                            { Icon: Gem, title: 'Supplier relationships', desc: 'Leveraging established partnerships for superior access and value.' }
                        ].map(({ Icon, title, desc }, idx) => (
                            <div key={idx} className="don-partner-card">
                                <div className="don-partner-card-icon"><Icon size={22} /></div>
                                <h3 className="don-partner-card-title">{title}</h3>
                                <p className="don-partner-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="don-partner-footer">
                        <p>A professional travel partner helps ensure the program supports both organizational goals and participant expectations.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY TRIPS & SHIPS (reusing medi-expert-editorial-section) ── */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Travel Expert" /> */}
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
                                    <span className="medi-editorial-eyebrow">Why Trips &amp; Ships Luxury Travel</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Your Partner in Donor Travel Programs
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Trips &amp; Ships Luxury Travel works with universities, museums, nonprofits, healthcare organizations, performing arts institutions, and foundations to create meaningful donor travel experiences.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Our services include:</p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Donor travel strategy',
                                        'Alumni travel programs',
                                        'Educational travel planning',
                                        'Luxury group travel',
                                        'Safari programs',
                                        'River and ocean cruise programs',
                                        'Custom itinerary development'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                We help organizations design experiences that strengthen relationships and support long-term engagement goals.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Angela Hughes' expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Donor travel strategy', icon: Compass },
                                        { title: 'Alumni travel programs', icon: GraduationCap },
                                        { title: 'Safari programs', icon: Leaf },
                                        { title: 'River & ocean cruises', icon: Anchor },
                                        { title: 'Custom itinerary development', icon: MapPin }
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

            {/* ── FINAL THOUGHTS ── */}
            <section className="don-final-section">
                <div className="don-final-bg"></div>
                <div className="don-final-container">

                    <div className="don-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="don-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="don-final-heading">Travel Is Far More Than a Benefit for Donors</h2>
                    <div className="don-final-separator"></div>

                    <div className="don-final-card">
                        <p className="don-final-body">Travel is far more than a benefit for donors.</p>
                        <p className="don-final-body don-final-emphasis">It is a relationship-building tool.</p>
                        <p className="don-final-body">When thoughtfully designed, donor travel programs create meaningful experiences that strengthen community, deepen engagement, improve stewardship, and support fundraising success.</p>
                        <p className="don-final-body">Organizations that invest in travel often discover that the strongest fundraising outcomes are driven not by transactions, but by relationships.</p>
                    </div>

                    <div className="don-final-conclusion">
                        <div className="don-final-conclusion-line"></div>
                        <p className="don-final-stmt">And few experiences build relationships more effectively than shared travel.</p>
                        <div className="don-final-conclusion-line"></div>
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
                        {donFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => donToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{donActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {donActiveFaq === index && (
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

                        <h2 className="medi-cta-heading-white">Ready to Build a Donor Travel Program?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            A well-designed donor travel program can transform relationships, improve stewardship, and create the kind of meaningful engagement that drives long-term philanthropic success.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help universities, nonprofits, museums, and foundations design travel programs that truly deliver.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Alumni travel programs',
                                    'Donor stewardship travel',
                                    'Educational group travel',
                                    'Safari and expedition programs',
                                    'River and ocean cruise programs'
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
                                Explore Donor Travel Programs
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default WhyTravelDonorEngagement