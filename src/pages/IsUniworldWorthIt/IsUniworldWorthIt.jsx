import Navbar from '../../components/Navbar/Navbar'
import './IsUniworldWorthIt.css'
import {
    Ship, Star, Clock, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Wifi, Wine, MapPin, Coffee, Landmark,
    Sparkle, DollarSign, TrendingUp, Bike, Music, Waves, Info, BookOpen
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function IsUniworldWorthTheMoney() {

    /* ── HERO SLIDESHOW (placeholder gradients — swap for real photography) ── */
    const uniHeroSlides = [
        { label: 'Uniworld ship sailing the Danube River', tone: 'uni-hero-tone-1' },
        { label: 'Elegant boutique suite aboard Uniworld', tone: 'uni-hero-tone-2' },
        { label: 'Gourmet fine dining onboard a Uniworld cruise', tone: 'uni-hero-tone-3' }
    ]
    const [uniCurrentHero, setUniCurrentHero] = useState(0)
    useEffect(() => {
        const uniTimer = setInterval(() => {
            setUniCurrentHero(prev => (prev + 1) % uniHeroSlides.length)
        }, 5000)
        return () => clearInterval(uniTimer)
    }, [uniHeroSlides.length])

    /* ── FAQ ACCORDION ── */
    const [uniActiveFaq, setUniActiveFaq] = useState(null)
    const uniToggleFaq = i => setUniActiveFaq(uniActiveFaq === i ? null : i)

    const uniFaqs = [
        { question: 'Is Uniworld worth the money?', answer: 'Many travelers find Uniworld worth the cost because of its luxury accommodations, all-inclusive amenities, personalized service, and immersive excursions.' },
        { question: 'Why is Uniworld more expensive than some river cruises?', answer: 'The higher price reflects boutique ships, premium dining, included beverages, excursions, gratuities, and luxury-level service.' },
        { question: 'Does Uniworld include excursions?', answer: 'Yes. Most itineraries include daily guided shore excursions.' },
        { question: 'Are drinks included on Uniworld?', answer: 'Yes. Premium wines, spirits, beer, cocktails, coffee, tea, and soft drinks are generally included.' },
        { question: 'Is gratuity included on Uniworld River Cruises?', answer: 'Yes. Onboard gratuities are typically included in the cruise fare.' },
        { question: 'How does Uniworld compare with Viking?', answer: 'Uniworld emphasizes boutique luxury, individually designed ships, and a more all-inclusive experience, while Viking focuses on understated Scandinavian elegance.' },
        { question: 'Is Uniworld suitable for first-time river cruisers?', answer: 'Yes. Its comprehensive inclusions and personalized service make it a strong choice for first-time guests.' },
        { question: 'Who should choose Uniworld?', answer: 'Couples, luxury travelers, retirees, honeymooners, and food and wine enthusiasts often benefit the most.' },
        { question: 'What makes Uniworld different?', answer: 'Its individually designed ships, boutique atmosphere, luxury service, and extensive inclusions distinguish it from many competitors.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is generally available onboard.' },
        { question: 'Are meals included?', answer: 'Yes. Breakfast, lunch, dinner, snacks, and many specialty dining experiences are included.' },
        { question: 'Is Uniworld family friendly?', answer: 'While some family sailings are available, most itineraries primarily appeal to adult travelers.' },
        { question: 'Does Uniworld offer butler service?', answer: 'Yes. Butler service is available in select suite categories.' },
        { question: 'Can Uniworld save money overall?', answer: 'Because beverages, excursions, and gratuities are included, total vacation costs may be more predictable than with lower-priced alternatives.' },
        { question: 'Is Uniworld a good choice for luxury travelers?', answer: 'Yes. Travelers seeking high-end accommodations, exceptional service, and immersive cultural experiences often consider Uniworld one of the leading luxury river cruise brands.' }
    ]

    /* ── WHY COSTS MORE ── */
    const uniPremiumFactors = [
        { Icon: Ship, text: 'Individually designed ships with handcrafted interiors' },
        { Icon: Users, text: 'Smaller guest capacity' },
        { Icon: Crown, text: 'Higher crew-to-guest ratio' },
        { Icon: CheckCircle, text: 'Nearly all-inclusive pricing' },
        { Icon: Utensils, text: 'Gourmet dining' },
        { Icon: Wine, text: 'Premium beverages' },
        { Icon: Compass, text: 'Complimentary excursions' },
        { Icon: DollarSign, text: 'Included gratuities' },
        { Icon: Heart, text: 'Personalized onboard service' }
    ]

    /* ── INCLUDED TABLE ── */
    const uniIncludedTable = [
        { feature: 'Luxury accommodations', value: 'Boutique hotel experience', Icon: Crown },
        { feature: 'All meals', value: 'Fine dining throughout the cruise', Icon: Utensils },
        { feature: 'Premium wines and spirits', value: 'No beverage package required', Icon: Wine },
        { feature: 'Daily excursions', value: 'Guided sightseeing included', Icon: Compass },
        { feature: 'Wi-Fi', value: 'Stay connected onboard', Icon: Wifi },
        { feature: 'Gratuities', value: 'Fewer unexpected costs', Icon: DollarSign },
        { feature: 'Cultural entertainment', value: 'Local performances and enrichment', Icon: Music },
        { feature: 'Fitness facilities', value: 'Wellness during the journey', Icon: Award }
    ]

    /* ── LUXURY BEYOND CABIN ── */
    const uniCabinFeatures = [
        'Elegant furnishings', 'High-quality bedding', 'Marble bathrooms',
        'Luxury toiletries', 'Spacious public lounges', 'Individually decorated interiors',
        'Attention to fine details'
    ]

    /* ── DINING ── */
    const uniDiningFeatures = [
        'Fresh regional ingredients', 'Locally inspired recipes', 'Multi-course dinners',
        'Complimentary wine pairings', 'Specialty coffees', 'Fresh pastries', 'Afternoon tea'
    ]

    /* ── EXCURSIONS ── */
    const uniExcursions = [
        { Icon: MapPin, text: 'Walking tours' },
        { Icon: Landmark, text: 'Castle visits' },
        { Icon: Landmark, text: 'Historic landmarks' },
        { Icon: Compass, text: 'Museum admissions' },
        { Icon: Wine, text: 'Wine tastings' },
        { Icon: Bike, text: 'Bicycle tours' },
        { Icon: Utensils, text: 'Culinary experiences' },
        { Icon: Music, text: 'Local cultural performances' }
    ]

    /* ── SERVICE ── */
    const uniServiceFeatures = [
        'High crew-to-guest ratios', 'Personalized attention', 'Butler service in select suites',
        'Daily housekeeping', 'Concierge-style assistance', 'Friendly, destination-focused staff'
    ]

    /* ── COMPARISON TABLE ── */
    const uniComparisonRows = [
        { feature: 'Boutique interiors', uniworld: 'Yes', other: 'Limited' },
        { feature: 'Premium beverages', uniworld: 'Included', other: 'Often limited' },
        { feature: 'Excursions', uniworld: 'Included', other: 'Mostly included' },
        { feature: 'Gratuities', uniworld: 'Included', other: 'Sometimes extra' },
        { feature: 'Butler service', uniworld: 'Select suites', other: 'Rare' },
        { feature: 'Personalized design', uniworld: 'Every ship', other: 'Standardized' },
        { feature: 'Guest capacity', uniworld: 'Small', other: 'Small to medium' }
    ]

    /* ── IDEAL TRAVELERS ── */
    const uniIdealTravelers = [
        'Couples', 'Honeymooners', 'Anniversary travelers', 'Luxury vacation seekers',
        'Food and wine enthusiasts', 'Experienced cruisers', 'Cultural travelers', 'Retired travelers'
    ]

    /* ── WHEN NOT WORTH IT ── */
    const uniNotWorthIt = [
        'Prefer budget travel', 'Spend little time onboard', 'Rarely participate in excursions',
        "Don't drink alcohol", 'Want extensive nightlife', 'Prefer very casual vacations'
    ]

    /* ── MAXIMIZE INVESTMENT ── */
    const uniMaximizeTips = [
        'Book early for the best cabin selection.',
        'Travel during shoulder seasons for competitive pricing.',
        'Join as many included excursions as possible.',
        'Take advantage of included premium beverages.',
        'Attend onboard cultural events.',
        'Compare promotional offers before booking.'
    ]

    /* ── IS PRICE JUSTIFIED ── */
    const uniValueFactors = [
        'Included excursions', 'Premium beverages', 'Gratuities',
        'Gourmet dining', 'Boutique accommodations', 'Personalized service'
    ]

    /* ── KEY TAKEAWAYS ── */
    const uniKeyTakeaways = [
        'Uniworld focuses on luxury, personalization, and boutique-style cruising.',
        'Cruise fares include many premium amenities that reduce extra spending.',
        'Gourmet dining, beverages, excursions, and gratuities are typically included.',
        'Best suited for travelers who value comfort, service, and immersive cultural experiences.',
        'The higher upfront price often reflects a more comprehensive vacation package.',
        'Comparing total trip costs—not just the base fare—provides a better measure of value.'
    ]

    /* ── INTERNAL LINKS ── */
    const uniInternalLinks = [
        { text: 'Uniworld River Cruises Guide', url: '/uniworld-river-cruises/' },
        { text: 'What Is Included on a Uniworld River Cruise', url: '/uniworld-river-cruises/whats-included/' },
        { text: 'Uniworld Cruise Costs', url: '/uniworld-river-cruises/cost-deals/' },
        { text: 'Uniworld Ships', url: '/uniworld-river-cruises/ships/' },
        { text: 'Luxury River Cruises', url: '/luxury-river-cruises/' },
        { text: 'River Cruise Packing Guide', url: '/river-cruise-packing-guide/' },
        { text: 'Best Time for River Cruises', url: '/best-time-for-river-cruises/' }
    ]

    /* ── SCHEMA ── */
    const uniSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "logo": "https://www.tripsshipsluxurytravel.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "Is Uniworld Worth the Money?",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/is-uniworld-worth-it/",
                "description": "Learn whether Uniworld River Cruises are worth the money by comparing value, inclusions, luxury amenities, and overall experience.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Is Uniworld Worth the Money?",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/is-uniworld-worth-it/" },
                "datePublished": "2026-08-05",
                "dateModified": "2026-08-05"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Is Uniworld Worth the Money?", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/is-uniworld-worth-it/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uniFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Is Uniworld Worth the Money? Luxury River Cruise Guide</title>
                <meta name="title" content="Is Uniworld Worth the Money? Luxury River Cruise Guide" />
                <meta name="description" content="Wondering if Uniworld River Cruises are worth the cost? Compare value, inclusions, luxury, service, dining, and who benefits most before booking." />
                <meta name="keywords" content="Is Uniworld Worth the Money, Is Uniworld worth it, Uniworld River Cruises value, luxury river cruise comparison, Uniworld all-inclusive, Uniworld vs Viking, boutique river cruises, premium river cruises" />
                <link rel="canonical" href="https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/is-uniworld-worth-it/" />
                <script type="application/ld+json">{JSON.stringify(uniSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uni-hero-section">
                {uniHeroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`uni-hero-background ${slide.tone} ${uniCurrentHero === idx ? 'uni-active' : ''}`}
                    />
                ))}
                <div className="uni-hero-overlay-layer"></div>
                <div className="uni-hero-content-wrapper">
                    <div className="uni-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury River Cruise Guide · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uni-hero-main-title">Is Uniworld Worth the Money?</h1>
                    <p className="uni-hero-subtitle-text">
                        Compare value, inclusions, luxury, service, and dining before deciding if Uniworld's all-inclusive boutique experience is right for your next vacation.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uni-intro-section">
                <div className="uni-intro-container">
                    <div className="uni-intro-grid">
                        <div className="uni-intro-text-col">
                            <span className="uni-eyebrow">THE QUESTION EVERY TRAVELER ASKS</span>
                            <h2 className="uni-section-heading">Is Uniworld Worth the Money?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-intro-lead">Luxury river cruises often come with premium price tags, leading many travelers to ask a simple question: Is Uniworld worth the money?</p>
                            <p className="uni-intro-body">The answer depends on what you value most in a vacation. If you're looking for personalized service, boutique-style accommodations, gourmet dining, immersive excursions, and an all-inclusive experience with minimal extra expenses, Uniworld delivers exceptional value for many travelers.</p>
                            <p className="uni-intro-body">This guide explores what you're paying for, how Uniworld compares with other luxury river cruise lines, who will benefit the most, and when paying a premium makes financial sense.</p>
                        </div>
                        <div className="uni-intro-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-worth">
                                    <Sparkles size={40} />
                                    <span>Is Uniworld Worth the Money?</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY COSTS MORE ── */}
            <section className="uni-premium-section">
                <div className="uni-premium-container">
                    <div className="uni-premium-grid">

                        <div className="uni-premium-text-col">
                            <span className="uni-eyebrow">PRICING BREAKDOWN</span>
                            <h2 className="uni-section-heading">Why Uniworld Costs More Than Many River Cruises</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-premium-lead">Uniworld positions itself in the luxury segment of the river cruise market.</p>
                            <p className="uni-premium-body">Rather than focusing solely on transportation between destinations, the company emphasizes a boutique hotel experience on the water. Several factors contribute to its premium pricing:</p>

                            <div className="uni-premium-left-callout">
                                <Sparkle size={18} className="uni-callout-icon" />
                                <p className="uni-callout-text">Many of these features reduce additional vacation expenses that travelers often encounter with lower-priced cruise lines.</p>
                            </div>
                        </div>

                        <div className="uni-premium-list-col">
                            <div className="uni-premium-list">
                                {uniPremiumFactors.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-premium-item">
                                        <div className="uni-premium-item-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="uni-included-section">
                <div className="uni-included-container">
                    <div className="uni-included-header">
                        <span className="uni-eyebrow">FARE BREAKDOWN</span>
                        <h2 className="uni-section-heading">What Is Included in <br /> the Cruise Fare?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-included-intro">One of the biggest reasons travelers consider Uniworld worth the investment is its extensive list of included amenities.</p>
                    </div>

                    <div className="uni-included-grid">
                        {uniIncludedTable.map(({ feature, value, Icon }, idx) => (
                            <div key={idx} className="uni-included-card">
                                <div className="uni-included-card-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="uni-included-card-content">
                                    <h4 className="uni-included-card-title">{feature}</h4>
                                    <p className="uni-included-card-desc">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uni-included-footer-card">
                        <Sparkles size={20} className="uni-included-footer-icon" />
                        <p className="uni-included-footer-text">Because so much is already included, onboard spending is often significantly lower than expected.</p>
                    </div>
                </div>
            </section>

            {/* ── LUXURY BEYOND THE CABIN ── */}
            <section className="uni-cabin-section">
                <div className="uni-cabin-container">
                    <div className="uni-cabin-grid">

                        <div className="uni-cabin-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-suite">
                                    <Crown size={40} />
                                    <span>Luxury suite aboard a Uniworld River Cruise ship</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uni-cabin-text-col">
                            <span className="uni-eyebrow">ONBOARD DESIGN</span>
                            <h2 className="uni-section-heading">Luxury Beyond the Cabin</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-cabin-lead">Unlike many cruise ships where cabins follow a standardized design, each Uniworld vessel has its own distinctive style inspired by the destinations it visits.</p>
                            <p className="uni-cabin-body">Guests can expect:</p>

                            <div className="uni-cabin-features">
                                {uniCabinFeatures.map((item, idx) => (
                                    <div key={idx} className="uni-cabin-feature">
                                        <CheckCircle size={16} className="uni-cabin-feature-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-cabin-conclusion-box">
                                <Crown size={16} className="uni-conclusion-icon" />
                                <span className="uni-conclusion-text">The atmosphere resembles a luxury boutique hotel more than a traditional cruise ship.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="uni-dining-section">
                <div className="uni-dining-container">
                    <div className="uni-dining-header">
                        <span className="uni-eyebrow uni-eyebrow-light">CULINARY EXPERIENCE</span>
                        <h2 className="uni-section-heading uni-white-heading">Dining Quality Adds Significant Value</h2>
                        <div className="uni-heading-separator-bar uni-separator-white uni-bar-centered"></div>
                        <p className="uni-dining-intro">Dining is one of Uniworld's strongest selling points.</p>
                    </div>

                    <div className="uni-dining-content-row">
                        <div className="uni-dining-features-grid">
                            {uniDiningFeatures.map((item, idx) => (
                                <div key={idx} className="uni-dining-feature-card">
                                    <div className="uni-dining-feature-icon-wrap">
                                        <Utensils size={18} />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="uni-dining-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-dining">
                                    <Utensils size={40} />
                                    <span>Fine dining experience on a Uniworld River Cruise</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="uni-dining-footer-card">
                        <Gem size={20} className="uni-dining-footer-icon" />
                        <p className="uni-dining-footer-text">Menus frequently change throughout the itinerary to reflect local culinary traditions. For travelers who appreciate food and wine, this represents considerable value.</p>
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS ── */}
            <section className="uni-excursions-section">
                <div className="uni-excursions-container">
                    <div className="uni-excursions-header">
                        <span className="uni-eyebrow">SHORE EXPERIENCES</span>
                        <h2 className="uni-section-heading">Excursions Without Constant Extra Charges</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-excursions-intro">Many cruise vacations require guests to purchase excursions separately. Uniworld includes numerous guided experiences, such as:</p>
                    </div>

                    <div className="uni-excursions-grid">
                        {uniExcursions.map(({ Icon, text }, idx) => (
                            <div key={idx} className="uni-excursion-card">
                                <div className="uni-excursion-icon"><Icon size={22} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-excursions-footer-card">
                        <Compass size={20} className="uni-excursions-footer-icon" />
                        <p className="uni-excursions-footer-text">This allows travelers to experience each destination without continually adding to their vacation budget.</p>
                    </div>
                </div>
            </section>

            {/* ── PERSONALIZED SERVICE ── */}
            <section className="uni-service-section" style={{ background: '#182c49' }}>
                <div className="uni-service-container">
                    <div className="uni-service-grid">

                        <div className="uni-service-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-butler">
                                    <Users size={40} />
                                    <span>Butler service on a luxury Uniworld River Cruise</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uni-service-text-col">
                            <span className="uni-eyebrow">GUEST EXPERIENCE</span>
                            <h2 className="uni-section-heading">Personalized Service Makes a Difference</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-service-lead">Service is one of the biggest distinctions between luxury and premium cruise lines.</p>
                            <p className="uni-service-body">Uniworld offers:</p>

                            <div className="uni-service-list">
                                {uniServiceFeatures.map((item, idx) => (
                                    <div key={idx} className="uni-service-item">
                                        <Star size={16} className="uni-service-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-service-conclusion-box">
                                <Users size={16} className="uni-service-conclusion-icon" />
                                <span className="uni-service-conclusion-text">Small ship sizes also allow crew members to become familiar with guests throughout the voyage.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="uni-stack-section">
                <div className="uni-stack-container">
                    <div className="uni-stack-header">
                        <span className="uni-eyebrow">HOW IT STACKS UP</span>
                        <h2 className="uni-section-heading">Comparing Value Against Other<br />River Cruise Lines</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-stack-subheading">
                            While standard river cruises offer incredible journeys, Uniworld elevates every voyage into an all-inclusive boutique luxury experience.
                        </p>
                    </div>

                    <div className="uni-stack-table-wrapper">
                        <div className="uni-stack-table-header">
                            <span>Feature</span>
                            <span className="uni-stack-hdr-uniworld">
                                <Crown size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                Uniworld
                            </span>
                            <span>Typical Premium Line</span>
                        </div>
                        {uniComparisonRows.map((row, idx) => (
                            <div key={idx} className="uni-stack-table-row">
                                <span className="uni-stack-feature-cell">{row.feature}</span>
                                <span className="uni-stack-uniworld-cell">
                                    <CheckCircle size={14} /> {row.uniworld}
                                </span>
                                <span className="uni-stack-other-cell">{row.other}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-stack-footer-card">
                        <div className="uni-stack-footer-icon-box">
                            <Sparkles size={20} className="uni-stack-footer-icon" />
                        </div>
                        <div className="uni-stack-footer-content">
                            <h4 className="uni-stack-footer-title">The Bottom Line on Value</h4>
                            <p className="uni-stack-footer-text">
                                Rather than competing on price, Uniworld competes on the overall luxury experience. When factoring in premium beverages, gratuities, boutique design, and elite service, Uniworld often delivers unmatched long-term value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO GETS BEST VALUE ── */}
            <section className="uni-ideal-section">
                <div className="uni-ideal-container">
                    <div className="uni-ideal-grid">

                        <div className="uni-ideal-text-col">
                            <span className="uni-eyebrow">RIGHT FIT</span>
                            <h2 className="uni-section-heading">Who Gets the Best Value?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-ideal-lead">Uniworld is especially appealing for travelers who prioritize quality over quantity.</p>
                            <p className="uni-ideal-body">Ideal travelers include:</p>

                            <div className="uni-ideal-tags">
                                {uniIdealTravelers.map((item, idx) => (
                                    <span key={idx} className="uni-ideal-tag">
                                        <Sparkle size={14} /> {item}
                                    </span>
                                ))}
                            </div>

                            <div className="uni-ideal-alternative-box">
                                <Info size={20} className="uni-ideal-alt-icon" />
                                <p className="uni-ideal-alt-text">
                                    Those seeking casinos, waterslides, or large-scale entertainment may find better value on ocean cruises instead.
                                </p>
                            </div>
                        </div>

                        <div className="uni-ideal-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-couple">
                                    <Heart size={40} />
                                    <span>Couples enjoying a luxury Uniworld River Cruise</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHEN NOT WORTH IT ── */}
            <section className="uni-notworth-section">
                <div className="uni-notworth-container">
                    <div className="uni-notworth-header">
                        <span className="uni-eyebrow">HONEST GUIDANCE</span>
                        <h2 className="uni-section-heading">When Uniworld May Not Be Worth It</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-notworth-intro">Luxury isn't the right choice for every traveler. Uniworld may not be the best fit if you:</p>
                    </div>

                    <div className="uni-notworth-grid">
                        {uniNotWorthIt.map((item, idx) => (
                            <div key={idx} className="uni-notworth-card">
                                <XCircle size={20} className="uni-notworth-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-notworth-footer-card">
                        <Info size={24} className="uni-notworth-footer-icon" />
                        <p className="uni-notworth-footer-text">
                            In these situations, a mid-range river cruise may offer better overall value for your specific travel style.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── MAXIMIZE INVESTMENT ── */}
            <section className="uni-maximize-section">
                <div className="uni-maximize-container">
                    <span className="uni-eyebrow uni-eyebrow-light">SMART PLANNING</span>
                    <h2 className="uni-section-heading uni-white-heading">Ways to Maximize Your Investment</h2>
                    <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    <p className="uni-maximize-intro">To get the most from your cruise:</p>

                    <div className="uni-maximize-grid">
                        {uniMaximizeTips.map((tip, idx) => (
                            <div key={idx} className="uni-maximize-card">
                                <div className="uni-maximize-num">{idx + 1}</div>
                                <p className="uni-maximize-text">{tip}</p>
                            </div>
                        ))}
                    </div>

                    <div className="uni-maximize-footer-card">
                        <p className="uni-maximize-footer-text">
                            Making full use of included amenities significantly improves the value of the cruise fare.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── IS THE HIGHER PRICE JUSTIFIED ── */}
            <section className="uni-justified-section">
                <div className="uni-justified-container">
                    <div className="uni-justified-grid">

                        <div className="uni-justified-text-col">
                            <span className="uni-eyebrow">THE BOTTOM LINE</span>
                            <h2 className="uni-section-heading">Is the Higher Price Justified?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-justified-lead">For travelers comparing only the initial cruise fare, Uniworld may appear expensive.</p>
                            <p className="uni-justified-body">However, when factoring in:</p>

                            <div className="uni-justified-list">
                                {uniValueFactors.map((item, idx) => (
                                    <div key={idx} className="uni-justified-item">
                                        <TrendingUp size={16} className="uni-justified-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="uni-justified-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-frame-placeholder uni-tone-river">
                                    <Waves size={40} />
                                    <span>Boutique luxury river cruise through Europe</span>
                                </div>
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-justified-conclusion-card">
                                <Gem size={24} className="uni-justified-conclusion-icon" />
                                <div className="uni-justified-conclusion-text">
                                    <p>The difference between Uniworld and lower-priced alternatives often becomes much smaller.</p>
                                    <p>Rather than paying separately for these experiences, travelers receive a comprehensive luxury package upfront.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FINAL THOUGHTS ── */}
            <section className="uni-final-section">
                <div className="uni-final-bg"></div>
                <div className="uni-final-container">

                    <div className="uni-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="uni-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="uni-final-heading">Final Thoughts on Value</h2>
                    <div className="uni-final-separator"></div>

                    <div className="uni-final-card">
                        <p className="uni-final-body">Whether Uniworld is worth the money depends on your travel priorities.</p>
                        <p className="uni-final-body">Travelers seeking elegant accommodations, exceptional service, immersive cultural experiences, and predictable vacation costs often find excellent value in its all-inclusive approach.</p>
                        <p className="uni-final-body uni-final-emphasis">Those looking for the lowest possible fare may find alternatives better suited to their budget, but travelers who appreciate luxury and convenience frequently consider Uniworld's higher upfront cost a worthwhile investment.</p>
                    </div>

                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="luxe-expert-insight-section">
                <div className="luxe-expert-insight-container">
                    <div className="luxe-expert-portrait-panel">
                        <div className="luxe-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - River Cruise Expert" />
                        </div>
                        <div className="luxe-expert-stats-strip">
                            <div className="luxe-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Designing Travel</p>
                            </div>
                            <div className="luxe-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Traveled</p>
                            </div>
                        </div>
                    </div>
                    <div className="luxe-expert-content-panel">
                        <span className="luxe-eyebrow">MEET THE CEO</span>
                        <h2 className="uni-section-heading">Insight from Angela Hughes</h2>
                        <div className="uni-heading-separator-bar"></div>
                        <p className="luxe-expert-quote">
                            "A Uniworld river cruise isn't just about traveling from destination to destination—it's about returning to a uniquely curated boutique sanctuary every single evening, experiencing local culture both on and off the ship."
                        </p>
                        <div className="luxe-expert-priorities">
                            <h5>Travel Prioritization Matrix:</h5>
                            <div className="luxe-expert-pills">
                                {['Boutique River Ships', 'Personalized Butler Service', 'All-Inclusive Value', 'Regional Shore Excursions', 'Gourmet Dining', 'Intimate Capacity'].map(pill => (
                                    <span key={pill} className="luxe-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="luxe-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the river cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uni-summary-section">
                <div className="uni-summary-container">
                    <div className="uni-summary-header">
                        <span className="uni-eyebrow uni-eyebrow-light">SUMMARY</span>
                        <h2 className="uni-section-heading uni-white-heading">Key Takeaways</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>
                    <div className="uni-summary-grid">
                        {uniKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uni-summary-card">
                                <div className="uni-summary-num">{idx + 1}</div>
                                <p className="uni-summary-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uni-faq-section">
                <div className="uni-faq-container">
                    <div className="uni-faq-header">
                        <span className="uni-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="uni-section-heading">Frequently Asked Questions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-faq-list-wrapper">
                        {uniFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uni-faq-item"
                                onClick={() => uniToggleFaq(index)}
                            >
                                <div className="uni-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uni-faq-toggle-icon">{uniActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uniActiveFaq === index && (
                                    <p className="uni-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPLORE MORE RESOURCES ── */}
            <section className="uni-explore-section">
                <div className="uni-explore-container">
                    <div className="uni-explore-header">
                        <span className="uni-eyebrow">DISCOVER MORE</span>
                        <h2 className="uni-section-heading">Explore More Uniworld Resources</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-explore-subtitle">
                            Dive deeper into Uniworld's offerings with our expert guides and comparisons.
                        </p>
                    </div>
                    <div className="uni-explore-grid">
                        {uniInternalLinks.map((link, idx) => (
                            <Link key={idx} to={link.url} className="uni-explore-card">
                                <div className="uni-explore-card-icon-wrap">
                                    <BookOpen size={22} />
                                </div>
                                <div className="uni-explore-card-content">
                                    <h3 className="uni-explore-card-title">{link.text}</h3>
                                    <span className="uni-explore-card-link">
                                        Read More <ChevronRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uni-cta-section">
                <div className="uni-cta-aurora-glow"></div>
                <div className="uni-cta-crystal uni-cta-crystal-1"></div>
                <div className="uni-cta-crystal uni-cta-crystal-2"></div>
                <div className="uni-cta-crystal uni-cta-crystal-3"></div>
                <div className="uni-cta-grid-lines"></div>

                <div className="uni-cta-content">
                    <div className="uni-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uni-cta-eyebrow">EXPERT RIVER CRUISE GUIDANCE</span>
                    <h2 className="uni-cta-title">Ready to Decide if<br />Uniworld Is Right for You?</h2>
                    <div className="uni-cta-bar"></div>
                    <p className="uni-cta-subtitle">
                        Compare itineraries, review what's included, and choose the luxury river cruise experience that best matches your travel style and budget.
                    </p>
                    <div className="uni-cta-actions">
                        <Link to="/contact" className="uni-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uni-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default IsUniworldWorthTheMoney