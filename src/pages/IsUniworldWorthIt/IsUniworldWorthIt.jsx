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
    const uwiHeroSlides = [
        { label: 'Uniworld ship sailing the Danube River', tone: 'uwi-hero-tone-1' },
        { label: 'Elegant boutique suite aboard Uniworld', tone: 'uwi-hero-tone-2' },
        { label: 'Gourmet fine dining onboard a Uniworld cruise', tone: 'uwi-hero-tone-3' }
    ]
    const [uwiCurrentHero, setUwiCurrentHero] = useState(0)
    useEffect(() => {
        const uwiTimer = setInterval(() => {
            setUwiCurrentHero(prev => (prev + 1) % uwiHeroSlides.length)
        }, 5000)
        return () => clearInterval(uwiTimer)
    }, [uwiHeroSlides.length])

    /* ── FAQ ACCORDION ── */
    const [uwiActiveFaq, setUwiActiveFaq] = useState(null)
    const uwiToggleFaq = i => setUwiActiveFaq(uwiActiveFaq === i ? null : i)

    const uwiFaqs = [
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
    const uwiPremiumFactors = [
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
    const uwiIncludedTable = [
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
    const uwiCabinFeatures = [
        'Elegant furnishings', 'High-quality bedding', 'Marble bathrooms',
        'Luxury toiletries', 'Spacious public lounges', 'Individually decorated interiors',
        'Attention to fine details'
    ]

    /* ── DINING ── */
    const uwiDiningFeatures = [
        'Fresh regional ingredients', 'Locally inspired recipes', 'Multi-course dinners',
        'Complimentary wine pairings', 'Specialty coffees', 'Fresh pastries', 'Afternoon tea'
    ]

    /* ── EXCURSIONS ── */
    const uwiExcursions = [
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
    const uwiKeyTakeaways = [
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
    const uwiSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "Is Uniworld Worth the Money?",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/is-uniworld-worth-it/",
                "description": "Learn whether Uniworld River Cruises are worth the money by comparing value, inclusions, luxury amenities, and overall experience.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Is Uniworld Worth the Money?",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/uniworld-river-cruises/is-uniworld-worth-it/" },
                "datePublished": "2026-08-05",
                "dateModified": "2026-08-05"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Is Uniworld Worth the Money?", "item": "https://www.tripsandships.com/uniworld-river-cruises/is-uniworld-worth-it/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uwiFaqs.map(f => ({
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
                                <script type="application/ld+json">{JSON.stringify(uwiSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uwi-hero-section">
                {uwiHeroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`uwi-hero-background ${slide.tone} ${uwiCurrentHero === idx ? 'uni-active' : ''}`}
                    />
                ))}
                <div className="uwi-hero-overlay-layer"></div>
                <div className="uwi-hero-content-wrapper">
                    <div className="uwi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury River Cruise Guide · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uwi-hero-main-title">Is Uniworld Worth the Money?</h1>
                    <p className="uwi-hero-subtitle-text">
                        Compare value, inclusions, luxury, service, and dining before deciding if Uniworld's all-inclusive boutique experience is right for your next vacation.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uwi-intro-section">
                <div className="uwi-intro-container">
                    <div className="uwi-intro-grid">
                        <div className="uwi-intro-text-col">
                            <span className="uwi-eyebrow">THE QUESTION EVERY TRAVELER ASKS</span>
                            <h2 className="uwi-section-heading">Is Uniworld Worth the Money?</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-intro-lead">Luxury river cruises often come with premium price tags, leading many travelers to ask a simple question: Is Uniworld worth the money?</p>
                            <p className="uwi-intro-body">The answer depends on what you value most in a vacation. If you're looking for personalized service, boutique-style accommodations, gourmet dining, immersive excursions, and an all-inclusive experience with minimal extra expenses, Uniworld delivers exceptional value for many travelers.</p>
                            <p className="uwi-intro-body">This guide explores what you're paying for, how Uniworld compares with other luxury river cruise lines, who will benefit the most, and when paying a premium makes financial sense.</p>
                        </div>
                        <div className="uwi-intro-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-worth">
                                    <Sparkles size={40} />
                                    <span>Is Uniworld Worth the Money?</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY COSTS MORE ── */}
            <section className="uwi-premium-section">
                <div className="uwi-premium-container">
                    <div className="uwi-premium-grid">

                        <div className="uwi-premium-text-col">
                            <span className="uwi-eyebrow">PRICING BREAKDOWN</span>
                            <h2 className="uwi-section-heading">Why Uniworld Costs More Than Many River Cruises</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-premium-lead">Uniworld positions itself in the luxury segment of the river cruise market.</p>
                            <p className="uwi-premium-body">Rather than focusing solely on transportation between destinations, the company emphasizes a boutique hotel experience on the water. Several factors contribute to its premium pricing:</p>

                            <div className="uwi-premium-left-callout">
                                <Sparkle size={18} className="uwi-callout-icon" />
                                <p className="uwi-callout-text">Many of these features reduce additional vacation expenses that travelers often encounter with lower-priced cruise lines.</p>
                            </div>
                        </div>

                        <div className="uwi-premium-list-col">
                            <div className="uwi-premium-list">
                                {uwiPremiumFactors.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uwi-premium-item">
                                        <div className="uwi-premium-item-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="uwi-included-section">
                <div className="uwi-included-container">
                    <div className="uwi-included-header">
                        <span className="uwi-eyebrow">FARE BREAKDOWN</span>
                        <h2 className="uwi-section-heading">What Is Included in <br /> the Cruise Fare?</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                        <p className="uwi-included-intro">One of the biggest reasons travelers consider Uniworld worth the investment is its extensive list of included amenities.</p>
                    </div>

                    <div className="uwi-included-grid">
                        {uwiIncludedTable.map(({ feature, value, Icon }, idx) => (
                            <div key={idx} className="uwi-included-card">
                                <div className="uwi-included-card-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="uwi-included-card-content">
                                    <h4 className="uwi-included-card-title">{feature}</h4>
                                    <p className="uwi-included-card-desc">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uwi-included-footer-card">
                        <Sparkles size={20} className="uwi-included-footer-icon" />
                        <p className="uwi-included-footer-text">Because so much is already included, onboard spending is often significantly lower than expected.</p>
                    </div>
                </div>
            </section>

            {/* ── LUXURY BEYOND THE CABIN ── */}
            <section className="uwi-cabin-section">
                <div className="uwi-cabin-container">
                    <div className="uwi-cabin-grid">

                        <div className="uwi-cabin-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-suite">
                                    <Crown size={40} />
                                    <span>Luxury suite aboard a Uniworld River Cruise ship</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uwi-cabin-text-col">
                            <span className="uwi-eyebrow">ONBOARD DESIGN</span>
                            <h2 className="uwi-section-heading">Luxury Beyond the Cabin</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-cabin-lead">Unlike many cruise ships where cabins follow a standardized design, each Uniworld vessel has its own distinctive style inspired by the destinations it visits.</p>
                            <p className="uwi-cabin-body">Guests can expect:</p>

                            <div className="uwi-cabin-features">
                                {uwiCabinFeatures.map((item, idx) => (
                                    <div key={idx} className="uwi-cabin-feature">
                                        <CheckCircle size={16} className="uwi-cabin-feature-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uwi-cabin-conclusion-box">
                                <Crown size={16} className="uwi-conclusion-icon" />
                                <span className="uwi-conclusion-text">The atmosphere resembles a luxury boutique hotel more than a traditional cruise ship.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="uwi-dining-section">
                <div className="uwi-dining-container">
                    <div className="uwi-dining-header">
                        <span className="uwi-eyebrow uwi-eyebrow-light">CULINARY EXPERIENCE</span>
                        <h2 className="uwi-section-heading uwi-white-heading">Dining Quality Adds Significant Value</h2>
                        <div className="uwi-heading-separator-bar uwi-separator-white uwi-bar-centered"></div>
                        <p className="uwi-dining-intro">Dining is one of Uniworld's strongest selling points.</p>
                    </div>

                    <div className="uwi-dining-content-row">
                        <div className="uwi-dining-features-grid">
                            {uwiDiningFeatures.map((item, idx) => (
                                <div key={idx} className="uwi-dining-feature-card">
                                    <div className="uwi-dining-feature-icon-wrap">
                                        <Utensils size={18} />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="uwi-dining-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-dining">
                                    <Utensils size={40} />
                                    <span>Fine dining experience on a Uniworld River Cruise</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="uwi-dining-footer-card">
                        <Gem size={20} className="uwi-dining-footer-icon" />
                        <p className="uwi-dining-footer-text">Menus frequently change throughout the itinerary to reflect local culinary traditions. For travelers who appreciate food and wine, this represents considerable value.</p>
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS ── */}
            <section className="uwi-excursions-section">
                <div className="uwi-excursions-container">
                    <div className="uwi-excursions-header">
                        <span className="uwi-eyebrow">SHORE EXPERIENCES</span>
                        <h2 className="uwi-section-heading">Excursions Without Constant Extra Charges</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                        <p className="uwi-excursions-intro">Many cruise vacations require guests to purchase excursions separately. Uniworld includes numerous guided experiences, such as:</p>
                    </div>

                    <div className="uwi-excursions-grid">
                        {uwiExcursions.map(({ Icon, text }, idx) => (
                            <div key={idx} className="uwi-excursion-card">
                                <div className="uwi-excursion-icon"><Icon size={22} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uwi-excursions-footer-card">
                        <Compass size={20} className="uwi-excursions-footer-icon" />
                        <p className="uwi-excursions-footer-text">This allows travelers to experience each destination without continually adding to their vacation budget.</p>
                    </div>
                </div>
            </section>

            {/* ── PERSONALIZED SERVICE ── */}
            <section className="uwi-service-section" style={{ background: '#182c49' }}>
                <div className="uwi-service-container">
                    <div className="uwi-service-grid">

                        <div className="uwi-service-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-butler">
                                    <Users size={40} />
                                    <span>Butler service on a luxury Uniworld River Cruise</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uwi-service-text-col">
                            <span className="uwi-eyebrow">GUEST EXPERIENCE</span>
                            <h2 className="uwi-section-heading">Personalized Service Makes a Difference</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-service-lead">Service is one of the biggest distinctions between luxury and premium cruise lines.</p>
                            <p className="uwi-service-body">Uniworld offers:</p>

                            <div className="uwi-service-list">
                                {uniServiceFeatures.map((item, idx) => (
                                    <div key={idx} className="uwi-service-item">
                                        <Star size={16} className="uwi-service-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uwi-service-conclusion-box">
                                <Users size={16} className="uwi-service-conclusion-icon" />
                                <span className="uwi-service-conclusion-text">Small ship sizes also allow crew members to become familiar with guests throughout the voyage.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="uwi-stack-section">
                <div className="uwi-stack-container">
                    <div className="uwi-stack-header">
                        <span className="uwi-eyebrow">HOW IT STACKS UP</span>
                        <h2 className="uwi-section-heading">Comparing Value Against Other<br />River Cruise Lines</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                        <p className="uwi-stack-subheading">
                            While standard river cruises offer incredible journeys, Uniworld elevates every voyage into an all-inclusive boutique luxury experience.
                        </p>
                    </div>

                    <div className="uwi-stack-table-wrapper">
                        <div className="uwi-stack-table-header">
                            <span>Feature</span>
                            <span className="uwi-stack-hdr-uniworld">
                                <Crown size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                Uniworld
                            </span>
                            <span>Typical Premium Line</span>
                        </div>
                        {uniComparisonRows.map((row, idx) => (
                            <div key={idx} className="uwi-stack-table-row">
                                <span className="uwi-stack-feature-cell">{row.feature}</span>
                                <span className="uwi-stack-uniworld-cell">
                                    <CheckCircle size={14} /> {row.uniworld}
                                </span>
                                <span className="uwi-stack-other-cell">{row.other}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uwi-stack-footer-card">
                        <div className="uwi-stack-footer-icon-box">
                            <Sparkles size={20} className="uwi-stack-footer-icon" />
                        </div>
                        <div className="uwi-stack-footer-content">
                            <h4 className="uwi-stack-footer-title">The Bottom Line on Value</h4>
                            <p className="uwi-stack-footer-text">
                                Rather than competing on price, Uniworld competes on the overall luxury experience. When factoring in premium beverages, gratuities, boutique design, and elite service, Uniworld often delivers unmatched long-term value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO GETS BEST VALUE ── */}
            <section className="uwi-ideal-section">
                <div className="uwi-ideal-container">
                    <div className="uwi-ideal-grid">

                        <div className="uwi-ideal-text-col">
                            <span className="uwi-eyebrow">RIGHT FIT</span>
                            <h2 className="uwi-section-heading">Who Gets the Best Value?</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-ideal-lead">Uniworld is especially appealing for travelers who prioritize quality over quantity.</p>
                            <p className="uwi-ideal-body">Ideal travelers include:</p>

                            <div className="uwi-ideal-tags">
                                {uniIdealTravelers.map((item, idx) => (
                                    <span key={idx} className="uwi-ideal-tag">
                                        <Sparkle size={14} /> {item}
                                    </span>
                                ))}
                            </div>

                            <div className="uwi-ideal-alternative-box">
                                <Info size={20} className="uwi-ideal-alt-icon" />
                                <p className="uwi-ideal-alt-text">
                                    Those seeking casinos, waterslides, or large-scale entertainment may find better value on ocean cruises instead.
                                </p>
                            </div>
                        </div>

                        <div className="uwi-ideal-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-couple">
                                    <Heart size={40} />
                                    <span>Couples enjoying a luxury Uniworld River Cruise</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHEN NOT WORTH IT ── */}
            <section className="uwi-notworth-section">
                <div className="uwi-notworth-container">
                    <div className="uwi-notworth-header">
                        <span className="uwi-eyebrow">HONEST GUIDANCE</span>
                        <h2 className="uwi-section-heading">When Uniworld May Not Be Worth It</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                        <p className="uwi-notworth-intro">Luxury isn't the right choice for every traveler. Uniworld may not be the best fit if you:</p>
                    </div>

                    <div className="uwi-notworth-grid">
                        {uniNotWorthIt.map((item, idx) => (
                            <div key={idx} className="uwi-notworth-card">
                                <XCircle size={20} className="uwi-notworth-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uwi-notworth-footer-card">
                        <Info size={24} className="uwi-notworth-footer-icon" />
                        <p className="uwi-notworth-footer-text">
                            In these situations, a mid-range river cruise may offer better overall value for your specific travel style.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── MAXIMIZE INVESTMENT ── */}
            <section className="uwi-maximize-section">
                <div className="uwi-maximize-container">
                    <span className="uwi-eyebrow uwi-eyebrow-light">SMART PLANNING</span>
                    <h2 className="uwi-section-heading uwi-white-heading">Ways to Maximize Your Investment</h2>
                    <div className="uwi-heading-separator-bar uwi-bar-centered uwi-separator-white"></div>
                    <p className="uwi-maximize-intro">To get the most from your cruise:</p>

                    <div className="uwi-maximize-grid">
                        {uniMaximizeTips.map((tip, idx) => (
                            <div key={idx} className="uwi-maximize-card">
                                <div className="uwi-maximize-num">{idx + 1}</div>
                                <p className="uwi-maximize-text">{tip}</p>
                            </div>
                        ))}
                    </div>

                    <div className="uwi-maximize-footer-card">
                        <p className="uwi-maximize-footer-text">
                            Making full use of included amenities significantly improves the value of the cruise fare.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── IS THE HIGHER PRICE JUSTIFIED ── */}
            <section className="uwi-justified-section">
                <div className="uwi-justified-container">
                    <div className="uwi-justified-grid">

                        <div className="uwi-justified-text-col">
                            <span className="uwi-eyebrow">THE BOTTOM LINE</span>
                            <h2 className="uwi-section-heading">Is the Higher Price Justified?</h2>
                            <div className="uwi-heading-separator-bar"></div>
                            <p className="uwi-justified-lead">For travelers comparing only the initial cruise fare, Uniworld may appear expensive.</p>
                            <p className="uwi-justified-body">However, when factoring in:</p>

                            <div className="uwi-justified-list">
                                {uniValueFactors.map((item, idx) => (
                                    <div key={idx} className="uwi-justified-item">
                                        <TrendingUp size={16} className="uwi-justified-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="uwi-justified-image-col">
                            <div className="uwi-image-frame">
                                <div className="uwi-frame-placeholder uni-tone-river">
                                    <Waves size={40} />
                                    <span>Boutique luxury river cruise through Europe</span>
                                </div>
                                <div className="uwi-frame-overlay"></div>
                            </div>
                            <div className="uwi-justified-conclusion-card">
                                <Gem size={24} className="uwi-justified-conclusion-icon" />
                                <div className="uwi-justified-conclusion-text">
                                    <p>The difference between Uniworld and lower-priced alternatives often becomes much smaller.</p>
                                    <p>Rather than paying separately for these experiences, travelers receive a comprehensive luxury package upfront.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FINAL THOUGHTS ── */}
            <section className="uwi-final-section">
                <div className="uwi-final-bg"></div>
                <div className="uwi-final-container">

                    <div className="uwi-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="uwi-final-eyebrow-text">FINAL THOUGHTS</span>
                    </div>

                    <h2 className="uwi-final-heading">Final Thoughts on Value</h2>
                    <div className="uwi-final-separator"></div>

                    <div className="uwi-final-card">
                        <p className="uwi-final-body">Whether Uniworld is worth the money depends on your travel priorities.</p>
                        <p className="uwi-final-body">Travelers seeking elegant accommodations, exceptional service, immersive cultural experiences, and predictable vacation costs often find excellent value in its all-inclusive approach.</p>
                        <p className="uwi-final-body uni-final-emphasis">Those looking for the lowest possible fare may find alternatives better suited to their budget, but travelers who appreciate luxury and convenience frequently consider Uniworld's higher upfront cost a worthwhile investment.</p>
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
                        <h2 className="uwi-section-heading" style={{color:'white'}}>Insight from Angela Hughes</h2>
                        <div className="uwi-heading-separator-bar"></div>
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
            <section className="uwi-summary-section">
                <div className="uwi-summary-container">
                    <div className="uwi-summary-header">
                        <span className="uwi-eyebrow uwi-eyebrow-light">SUMMARY</span>
                        <h2 className="uwi-section-heading uwi-white-heading">Key Takeaways</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered uwi-separator-white"></div>
                    </div>
                    <div className="uwi-summary-grid">
                        {uwiKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uwi-summary-card">
                                <div className="uwi-summary-num">{idx + 1}</div>
                                <p className="uwi-summary-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uwi-faq-section">
                <div className="uwi-faq-container">
                    <div className="uwi-faq-header">
                        <span className="uwi-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="uwi-section-heading">Frequently Asked Questions</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                    </div>
                    <div className="uwi-faq-list-wrapper">
                        {uwiFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uwi-faq-item"
                                onClick={() => uwiToggleFaq(index)}
                            >
                                <div className="uwi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uwi-faq-toggle-icon">{uwiActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uwiActiveFaq === index && (
                                    <p className="uwi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPLORE MORE RESOURCES ── */}
            <section className="uwi-explore-section">
                <div className="uwi-explore-container">
                    <div className="uwi-explore-header">
                        <span className="uwi-eyebrow">DISCOVER MORE</span>
                        <h2 className="uwi-section-heading">Explore More Uniworld Resources</h2>
                        <div className="uwi-heading-separator-bar uwi-bar-centered"></div>
                        <p className="uwi-explore-subtitle">
                            Dive deeper into Uniworld's offerings with our expert guides and comparisons.
                        </p>
                    </div>
                    <div className="uwi-explore-grid">
                        {uniInternalLinks.map((link, idx) => (
                            <Link key={idx} to={link.url} className="uwi-explore-card">
                                <div className="uwi-explore-card-icon-wrap">
                                    <BookOpen size={22} />
                                </div>
                                <div className="uwi-explore-card-content">
                                    <h3 className="uwi-explore-card-title">{link.text}</h3>
                                    <span className="uwi-explore-card-link">
                                        Read More <ChevronRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uwi-cta-section">
                <div className="uwi-cta-aurora-glow"></div>
                <div className="uwi-cta-crystal uni-cta-crystal-1"></div>
                <div className="uwi-cta-crystal uni-cta-crystal-2"></div>
                <div className="uwi-cta-crystal uni-cta-crystal-3"></div>
                <div className="uwi-cta-grid-lines"></div>

                <div className="uwi-cta-content">
                    <div className="uwi-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uwi-cta-eyebrow">EXPERT RIVER CRUISE GUIDANCE</span>
                    <h2 className="uwi-cta-title">Ready to Decide if<br />Uniworld Is Right for You?</h2>
                    <div className="uwi-cta-bar"></div>
                    <p className="uwi-cta-subtitle">
                        Compare itineraries, review what's included, and choose the luxury river cruise experience that best matches your travel style and budget.
                    </p>
                    <div className="uwi-cta-actions">
                        <Link to="/contact" className="uwi-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uwi-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default IsUniworldWorthTheMoney