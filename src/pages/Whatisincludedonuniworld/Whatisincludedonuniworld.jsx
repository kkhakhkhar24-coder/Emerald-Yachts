import Navbar from '../../components/Navbar/Navbar'
import './Whatisincludedonuniworld.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Gem,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Mic,
    Globe, DollarSign, Wifi, Plane, Wine, Bed,
    Bell, Waves, ShieldCheck, Coffee, AlertCircle
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function UniworldRiverCruiseInclusions() {
    // const [uincCurrentHero, setUincCurrentHero] = useState(0)
    // const uincHeroImages = [hero1, hero2, hero3]

    // useEffect(() => {
    //     const uincTimer = setInterval(() => {
    //         setUincCurrentHero(prev => (prev + 1) % uincHeroImages.length)
    //     }, 5000)
    //     return () => clearInterval(uincTimer)
    // }, [uincHeroImages.length])

    const [wiiActiveFaq, setWiiActiveFaq] = useState(null)
    const wiiToggleFaq = i => setWiiActiveFaq(wiiActiveFaq === i ? null : i)

    const wiiFaqs = [
        { question: 'What is included on a Uniworld River Cruise?', answer: 'The fare typically includes accommodations, meals, premium beverages, excursions, Wi-Fi, gratuities, entertainment, and selected transfers.' },
        { question: 'Are alcoholic drinks included with Uniworld?', answer: 'Yes. Premium wines, beer, spirits, cocktails, and many non-alcoholic beverages are generally included.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Most daily guided excursions are included in the cruise fare.' },
        { question: 'Does Uniworld include gratuities?', answer: 'Yes. Onboard gratuities for the crew are generally included.' },
        { question: 'Is Wi-Fi free on Uniworld ships?', answer: 'Yes. Complimentary Wi-Fi is available on most vessels.' },
        { question: 'Are airport transfers included?', answer: 'Many itineraries include airport transfers when eligibility requirements are met.' },
        { question: 'Does Uniworld include specialty dining?', answer: 'Many itineraries feature specialty dining experiences and destination-inspired meals at no extra charge.' },
        { question: 'Is butler service included?', answer: 'Butler service is included with selected suite categories.' },
        { question: 'Are fitness facilities included?', answer: 'Yes. Guests can use onboard fitness centers and participate in many wellness activities.' },
        { question: 'Are spa treatments included?', answer: 'No. Spa treatments and massages usually incur an additional fee.' },
        { question: 'Can dietary requirements be accommodated?', answer: 'Yes. Vegetarian, vegan, gluten-free, and other dietary requests can typically be accommodated with advance notice.' },
        { question: 'Are bicycles available onboard?', answer: 'Many Uniworld ships provide complimentary bicycles for guided or independent rides.' },
        { question: 'Is room service included?', answer: 'Room service is available on many ships, with expanded options for suite guests.' },
        { question: 'Does every itinerary include the same amenities?', answer: 'Core inclusions remain similar, but some services vary by ship, destination, and itinerary.' },
        { question: 'Is Uniworld truly all-inclusive?', answer: 'Uniworld is considered one of the most inclusive luxury river cruise lines, although expenses such as airfare, spa treatments, travel insurance, and personal purchases are generally not included.' }
    ]

    const wiiIncludedList = [
        'Boutique accommodations', 'All meals', 'Premium wines, beer, cocktails, and spirits',
        'Daily shore excursions', 'Onboard gratuities', 'Scheduled airport transfers on eligible itineraries',
        'Wi-Fi', 'Entertainment', 'Wellness activities', 'Concierge-style service'
    ]

    const wiiAccommodationFeatures = [
        'Luxury handcrafted furnishings', 'Premium bedding', 'Marble bathrooms', 'Bathrobes and slippers',
        'Daily housekeeping', 'Nightly turndown service', 'Climate control', 'Flat-screen television',
        'In-room safe', 'Complimentary bottled water', 'Luxury bath amenities'
    ]

    const wiiBreakfast = ['Extensive buffet', 'Fresh pastries', 'Seasonal fruits', 'Made-to-order specialties', 'Regional dishes']
    const wiiLunch = ['Multi-course dining', 'Fresh salads', 'Local cuisine', 'Outdoor dining when available']
    const wiiDinner = ['Multi-course gourmet menus', 'Locally inspired cuisine', 'Premium ingredients', 'Vegetarian selections', 'Vegan options', 'Gluten-free meals upon request', 'Regional wine pairings']
    const wiiAdditionalDining = ['Afternoon tea', 'Late-night snacks', 'Specialty dining events', 'Farm-to-table experiences', 'Destination-inspired culinary tastings']

    const wiiBeverages = [
        'Premium wines', 'Champagne', 'Craft cocktails', 'Top-shelf spirits', 'Local beers',
        'Specialty coffee', 'Espresso drinks', 'Tea', 'Soft drinks', 'Mineral water', 'Fresh juices'
    ]

    const wiiExcursions = [
        'Historic city walking tours', 'Castle visits', 'Museum tours', 'Wine tastings', 'Local food experiences',
        'Bike rides', 'Hiking excursions', 'Cultural performances', 'Village visits', 'Scenic countryside tours'
    ]

    const wiiButlerServices = [
        'Personal butler service', 'Unpacking assistance', 'Packing assistance', 'In-room dining',
        'Personalized concierge support', 'Laundry assistance', 'Shoe shining'
    ]

    const wiiEntertainment = [
        'Local musicians', 'Classical performances', 'Cultural presentations', 'Cooking demonstrations',
        'Guest lectures', 'Wine tastings', 'Regional entertainment', 'Themed evenings'
    ]

    const wiiWellness = [
        { Icon: Waves, text: 'Fitness center' },
        { Icon: Sparkles, text: 'Wellness classes' },
        { Icon: Sun, text: 'Yoga sessions' },
        { Icon: Compass, text: 'Walking tracks' },
        { Icon: Ship, text: 'Complimentary bicycles' },
        { Icon: Heart, text: 'Massage services (additional charge)' },
        { Icon: Gem, text: 'Spa treatments (additional charge)' }
    ]

    const wiiWifiUses = ['Check email', 'Share travel photos', 'Browse the internet', 'Use messaging apps', 'Stay connected with family']
    const wiiTransfers = ['Airport to ship', 'Ship to airport', 'Hotel transfers on qualifying cruise-tour packages']
    const wiiGratuitiesCover = ['Dining staff', 'Housekeeping', 'Ship crew', 'Hospitality team']
    const wiiSuiteBenefits = [
        'Larger living spaces', 'Butler service', 'Premium minibars', 'Laundry service',
        'Exclusive dining experiences', 'Enhanced bathroom amenities', 'Priority services', 'Complimentary room service'
    ]

    const uincIncludedVsExtra = [
        { included: 'Luxury accommodations', extra: 'International airfare' },
        { included: 'All meals', extra: 'Travel insurance' },
        { included: 'Premium beverages', extra: 'Optional spa treatments' },
        { included: 'Daily excursions', extra: 'Personal shopping' },
        { included: 'Wi-Fi', extra: 'Independent private tours' },
        { included: 'Gratuities', extra: 'Visa fees (if required)' },
        { included: 'Entertainment', extra: 'Some premium experiences' },
        { included: 'Fitness facilities', extra: 'Optional pre/post cruise hotels' }
    ]

    const uincComparison = [
        { feature: 'Meals', uniworld: 'Included', typical: 'Included' },
        { feature: 'Premium alcohol', uniworld: 'Extensive', typical: 'Often limited' },
        { feature: 'Shore excursions', uniworld: 'Included', typical: 'Included' },
        { feature: 'Wi-Fi', uniworld: 'Included', typical: 'Usually included' },
        { feature: 'Gratuities', uniworld: 'Included', typical: 'Sometimes extra' },
        { feature: 'Butler service', uniworld: 'Selected suites', typical: 'Limited' },
        { feature: 'Boutique décor', uniworld: 'Signature feature', typical: 'Varies' },
        { feature: 'Airport transfers', uniworld: 'Eligible itineraries', typical: 'Varies' }
    ]

    const uincKeyTakeaways = [
        'Uniworld offers one of the most comprehensive all-inclusive river cruise experiences.',
        'Luxury accommodations, gourmet dining, and premium beverages are included.',
        'Daily guided shore excursions are part of the cruise fare.',
        'Onboard gratuities are generally included.',
        'Complimentary Wi-Fi is available throughout most ships.',
        'Eligible itineraries include airport transfers.',
        'Butler service is available in select suite categories.',
        'Spa treatments, airfare, and personal purchases are generally extra.'
    ]

    const wiiSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": { "@type": "ImageObject", "url": "https://www.tripsandships.com/logo.png" }
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/",
                "name": "What Is Included on a Uniworld River Cruise?",
                "isPartOf": { "@id": "https://www.tripsandships.com/#website" },
                "about": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/#article" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/#article",
                "headline": "What Is Included on a Uniworld River Cruise?",
                "description": "Discover what's included on a Uniworld River Cruise, from luxury accommodations and gourmet dining to excursions, beverages, gratuities, and more.",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/" }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "What Is Included on a Uniworld River Cruise?", "item": "https://www.tripsandships.com/uniworld-river-cruises/whats-included/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": wiiFaqs.map(f => ({
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
                <title>What Is Included on a Uniworld River Cruise?</title>
                <meta name="title" content="What Is Included on a Uniworld River Cruise?" />
                <meta name="description" content="Discover what's included on a Uniworld River Cruise, from luxury accommodations and gourmet dining to excursions, beverages, gratuities, and more." />
                <meta name="keywords" content="What Is Included on a Uniworld River Cruise, Uniworld River Cruise inclusions, What's included with Uniworld, Uniworld all-inclusive river cruises, Uniworld cruise fare, Uniworld shore excursions, Luxury river cruise inclusions, Uniworld drinks package, Uniworld gratuities, Uniworld onboard amenities, Uniworld river cruise value" />
                <script type="application/ld+json">{JSON.stringify(wiiSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="wii-page">

            {/* ── HERO ── */}
            <section className="wii-hero-section">
                {/* {uincHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`wii-hero-background ${uincCurrentHero === idx ? 'uinc-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))} */}
                <div className="wii-hero-overlay-layer"></div>
                <div className="wii-hero-content-wrapper">
                    <div className="wii-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="wii-hero-main-title">What Is Included on a Uniworld River Cruise?</h1>
                    <p className="wii-hero-subtitle-text">
                        Discover what's included on a Uniworld River Cruise, from luxury accommodations and gourmet dining to excursions, beverages, gratuities, and more.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="wii-intro-section">
                <div className="wii-intro-container">
                    <div className="wii-intro-grid">
                        <div className="wii-intro-text-col">
                            <div className="wii-intro-lead-card">
                                <p className="wii-intro-lead">
                                    Planning a luxury river cruise often starts with one important question: what exactly is included in the fare? Unlike many ocean cruises where additional charges can quickly add up, Uniworld Boutique River Cruises is known for offering one of the industry's most comprehensive all-inclusive experiences.
                                </p>
                            </div>
                            <p className="wii-intro-body">
                                From elegant accommodations and gourmet dining to premium beverages, immersive shore excursions, airport transfers on select sailings, gratuities, and personalized service, many of the costs travelers typically budget separately are already included.
                            </p>
                            <p className="wii-intro-body">
                                This guide explains everything you can expect to receive when booking a Uniworld River Cruise, helping you understand the overall value before you travel.
                            </p>
                        </div>
                        <div className="wii-intro-image-col">
                            <div className="wii-intro-image-frame uinc-placeholder-frame">
                                <div className="wii-placeholder-content">
                                    <Ship size={48} className="wii-placeholder-icon" />
                                    <span className="wii-placeholder-text">Luxury Cruise Image Placeholder</span>
                                </div>
                                <div className="wii-intro-image-badge">
                                    <Anchor size={14} />
                                    <span>Boutique Luxury</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES UNIWORLD DIFFERENT ── */}
            <section className="wii-different-section">
                <div className="wii-different-container">
                    <span className="wii-eyebrow">WHAT MAKES UNIWORLD DIFFERENT</span>
                    <h2 className="wii-section-heading">Why Uniworld Offers One of the Most Inclusive <br /> River Cruise Experiences</h2>
                    <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                    <p className="wii-different-body">
                        Uniworld positions itself as a luxury boutique river cruise company where guests enjoy an experience that feels similar to staying in an upscale five-star hotel. Instead of charging separately for common amenities, the cruise fare typically includes:
                    </p>
                    <div className="wii-included-grid">
                        {wiiIncludedList.map((item, idx) => (
                            <div key={idx} className="wii-included-chip">
                                <CheckCircle size={17} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="wii-different-footer-card">
                        <ShieldCheck size={20} />
                        <span>This approach simplifies travel planning and allows guests to enjoy their vacation without constantly considering additional costs.</span>
                    </div>
                </div>
            </section>

            {/* ── ACCOMMODATIONS ── */}
            <section className="wii-feature-section uinc-bg-accomm">
                <div className="wii-feature-container">
                    <div className="wii-feature-grid">
                        <div className="wii-feature-image-col">
                            <div className="wii-image-frame">
                                {/* <img src={imgAccommodations} alt="Luxury stateroom included on a Uniworld River Cruise" className="wii-frame-img" /> */}
                                <div className="wii-frame-overlay"></div>
                                <div className="wii-image-badge"><Bed size={13} /><span>Boutique Suites</span></div>
                            </div>
                            <div className="wii-left-footnote-card">
                                <Sparkles size={16} className="wii-footnote-card-icon" />
                                <p className="wii-left-footnote-text">
                                    Many ships feature individually designed rooms rather than identical cabin layouts, giving each vessel a boutique hotel atmosphere.
                                </p>
                            </div>
                        </div>
                        <div className="wii-feature-text-col">
                            <span className="wii-eyebrow">ACCOMMODATIONS</span>
                            <h2 className="wii-section-heading">Elegant Boutique Accommodations</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-feature-lead">Every stateroom and suite includes thoughtfully designed interiors inspired by the destinations visited.</p>
                            <p className="wii-feature-body">Accommodation features generally include:</p>
                            <ul className="wii-check-list">
                                {wiiAccommodationFeatures.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="wii-feature-section uinc-dining-redesign-section">
                <div className="wii-feature-container">
                    <div className="wii-dining-grid-layout">
                        <div className="wii-dining-left-col">
                            <span className="wii-eyebrow">DINING</span>
                            <h2 className="wii-section-heading">Gourmet Dining Included Every Day</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-dining-intro-text">
                                Dining is one of Uniworld's signature experiences. Enjoy destination-inspired menus crafted by master chefs using fresh, locally sourced ingredients.
                            </p>
                            <div className="wii-dining-image-box uinc-dining-placeholder-box">
                                <div className="wii-placeholder-content">
                                    <Utensils size={40} className="wii-placeholder-icon" />
                                    <span className="wii-placeholder-text">Gourmet Dining Image Placeholder</span>
                                </div>
                                <div className="wii-image-badge"><Utensils size={13} /><span>All-Inclusive Dining</span></div>
                            </div>
                        </div>

                        <div className="wii-dining-right-col">
                            <div className="wii-dining-card-grid-split">
                                <div className="wii-dining-card">
                                    <div className="wii-dining-card-header">
                                        <div className="wii-dining-card-icon-wrapper"><Sun size={18} /></div>
                                        <h3 className="wii-dining-card-title">Breakfast</h3>
                                    </div>
                                    <ul className="wii-dining-tags">
                                        {wiiBreakfast.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                <div className="wii-dining-card">
                                    <div className="wii-dining-card-header">
                                        <div className="wii-dining-card-icon-wrapper"><Utensils size={18} /></div>
                                        <h3 className="wii-dining-card-title">Lunch</h3>
                                    </div>
                                    <ul className="wii-dining-tags">
                                        {wiiLunch.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                <div className="wii-dining-card uinc-dining-card-dinner">
                                    <div className="wii-dining-card-header">
                                        <div className="wii-dining-card-icon-wrapper"><Moon size={18} /></div>
                                        <h3 className="wii-dining-card-title">Dinner</h3>
                                    </div>
                                    <p className="wii-dining-card-subtitle">Each evening typically includes:</p>
                                    <ul className="wii-dining-tags">
                                        {wiiDinner.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                <div className="wii-dining-card">
                                    <div className="wii-dining-card-header">
                                        <div className="wii-dining-card-icon-wrapper"><Coffee size={18} /></div>
                                        <h3 className="wii-dining-card-title">Additional Dining</h3>
                                    </div>
                                    <p className="wii-dining-card-subtitle">Many itineraries also include:</p>
                                    <ul className="wii-dining-tags">
                                        {wiiAdditionalDining.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DRINKS ── */}
            <section className="wii-feature-section uinc-bg-soft uinc-beverages-section">
                <div className="wii-feature-container">
                    <div className="wii-feature-grid uinc-reverse">
                        <div className="wii-feature-image-col">
                            <div className="wii-image-frame">
                                {/* <img src={imgDrinks} alt="Complimentary premium wine served onboard Uniworld cruise" className="wii-frame-img" /> */}
                                <div className="wii-frame-overlay"></div>
                                <div className="wii-image-badge"><Wine size={13} /><span>Premium Beverages</span></div>
                            </div>
                        </div>
                        <div className="wii-feature-text-col">
                            <span className="wii-eyebrow">BEVERAGES</span>
                            <h2 className="wii-section-heading">Unlimited Premium Beverages</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-feature-lead">Unlike many cruise lines that sell beverage packages separately, Uniworld includes premium drinks throughout much of the voyage.</p>
                            <p className="wii-feature-body">Included beverages generally consist of:</p>
                            <div className="wii-pill-grid">
                                {wiiBeverages.map((item, idx) => (
                                    <span key={idx} className="wii-pill">{item}</span>
                                ))}
                            </div>
                            <div className="wii-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>Wine is carefully selected to complement each region visited.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS ── */}
            <section className="wii-feature-section uinc-excursions-redesign-section">
                <div className="wii-feature-container">
                    <div className="wii-feature-grid">
                        <div className="wii-feature-image-col">
                            <div className="wii-image-frame uinc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="wii-placeholder-content">
                                    <Compass size={48} className="wii-placeholder-icon" />
                                    <span className="wii-placeholder-text">Excursions Image Placeholder</span>
                                </div>
                                <div className="wii-image-badge"><MapPin size={13} /><span>Guided Excursions</span></div>
                            </div>
                            <div className="wii-left-footnote-card">
                                <Compass size={16} className="wii-footnote-card-icon" />
                                <p className="wii-left-footnote-text">
                                    Many itineraries also offer multiple excursion choices each day, allowing travelers to select activities matching their interests and activity level.
                                </p>
                            </div>
                        </div>
                        <div className="wii-feature-text-col">
                            <span className="wii-eyebrow">SHORE EXCURSIONS</span>
                            <h2 className="wii-section-heading">Daily Shore Excursions Included</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-feature-lead">One of the biggest values included in the cruise fare is a wide selection of guided excursions.</p>
                            <p className="wii-feature-body">Depending on the itinerary, guests may choose from experiences such as:</p>
                            <div className="wii-excursions-grid">
                                {wiiExcursions.map((item, idx) => (
                                    <div key={idx} className="wii-excursion-card">
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ── */}
            <section className="wii-feature-section uinc-bg-soft">
                <div className="wii-feature-container">
                    <div className="wii-feature-grid uinc-reverse">
                        <div className="wii-feature-image-col">
                            <div className="wii-image-frame uinc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="wii-placeholder-content">
                                    <Crown size={48} className="wii-placeholder-icon" />
                                    <span className="wii-placeholder-text">Butler Service Image Placeholder</span>
                                </div>
                                <div className="wii-image-badge"><Bell size={13} /><span>Butler Service</span></div>
                            </div>
                            <div className="wii-left-footnote-card">
                                <Users size={16} className="wii-footnote-card-icon" />
                                <p className="wii-left-footnote-text">
                                    Guests throughout the ship also benefit from an exceptionally high crew-to-guest ratio, providing attentive and personalized service.
                                </p>
                            </div>
                        </div>
                        <div className="wii-feature-text-col">
                            <span className="wii-eyebrow">HOSPITALITY</span>
                            <h2 className="wii-section-heading">Personalized Butler Service</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-feature-lead">Luxury hospitality is one of Uniworld's defining characteristics.</p>
                            <p className="wii-feature-body">Many suite categories include:</p>
                            <ul className="wii-check-list">
                                {wiiButlerServices.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="wii-simple-section">
                <div className="wii-simple-container">
                    <span className="wii-eyebrow">ONBOARD LIFE</span>
                    <h2 className="wii-section-heading" style={{ textAlign: 'center' }}>Entertainment Included Onboard</h2>
                    <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                    <p className="wii-simple-intro">Although river cruising emphasizes destinations over large-scale entertainment, Uniworld offers engaging onboard activities. These may include:</p>
                    <div className="wii-card-grid">
                        {wiiEntertainment.map((item, idx) => {
                            const icons = [Music, Star, Globe, Utensils, Mic, Wine, Award, Sparkles]
                            const Icon = icons[idx % icons.length]
                            return (
                                <div key={idx} className="wii-mini-card">
                                    <Icon size={20} />
                                    <span>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="wii-entertainment-footnote-badge">
                        <Sparkles size={14} />
                        <span>Entertainment is designed to complement each destination rather than overwhelm it.</span>
                    </div>
                </div>
            </section>

            {/* ── WELLNESS ── */}
            <section className="wii-feature-section uinc-bg-soft uinc-wellness-redesign-section">
                <div className="wii-feature-container">
                    <div className="wii-wellness-header-block">
                        <span className="wii-eyebrow">WELLNESS</span>
                        <h2 className="wii-section-heading">Wellness and Fitness Amenities</h2>
                        <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                        <p className="wii-wellness-intro-text">
                            Travelers seeking relaxation, rejuvenation, and active exploration will find several premium wellness features onboard.
                        </p>
                    </div>

                    <div className="wii-wellness-cards-grid">
                        {wiiWellness.map((item, idx) => {
                            const WellnessIcon = item.Icon
                            return (
                                <div key={idx} className="wii-wellness-card">
                                    <div className="wii-wellness-card-placeholder">
                                        <WellnessIcon size={32} className="wii-wellness-card-icon" />
                                        <span className="wii-wellness-card-placeholder-label">Image Placeholder</span>
                                    </div>
                                    <div className="wii-wellness-card-info">
                                        <h3 className="wii-wellness-card-title">{item.text}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="wii-wellness-bottom-banner">
                        <Sparkles size={18} className="wii-wellness-banner-icon" />
                        <p className="wii-wellness-banner-text">
                            Some newer ships also feature pools or wellness-focused facilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WIFI / TRANSFERS / GRATUITIES ── */}
            <section className="wii-triple-section uinc-triple-redesign-section">
                <div className="wii-triple-container">

                    {/* CARD 1: WIFI */}
                    <div className="wii-triple-card">
                        <div className="wii-triple-icon-wrapper">
                            <Wifi size={24} />
                        </div>
                        <h3 className="wii-triple-title">Complimentary Wi-Fi</h3>
                        <p className="wii-triple-body">Wi-Fi is included throughout most ships, allowing guests to:</p>
                        <ul className="wii-triple-checklist">
                            {wiiWifiUses.map((item, idx) => (
                                <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                            ))}
                        </ul>
                        <p className="wii-triple-note">Internet performance varies depending on the river region and local network coverage.</p>
                    </div>

                    {/* CARD 2: TRANSFERS */}
                    <div className="wii-triple-card">
                        <div className="wii-triple-icon-wrapper">
                            <Plane size={24} />
                        </div>
                        <h3 className="wii-triple-title">Airport Transfers</h3>
                        <p className="wii-triple-body">Scheduled airport transfers are included on eligible itineraries when flights are booked according to policies, covering:</p>
                        <ul className="wii-triple-checklist">
                            {wiiTransfers.map((item, idx) => (
                                <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                            ))}
                        </ul>
                        <p className="wii-triple-note">Eligibility depends on the itinerary and booking conditions.</p>
                    </div>

                    {/* CARD 3: GRATUITIES */}
                    <div className="wii-triple-card">
                        <div className="wii-triple-icon-wrapper">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="wii-triple-title">Gratuities Included</h3>
                        <p className="wii-triple-body">Onboard gratuities are bundled directly into your cruise fare, ensuring seamless service. This covers:</p>
                        <ul className="wii-triple-checklist">
                            {wiiGratuitiesCover.map((item, idx) => (
                                <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                            ))}
                        </ul>
                        <p className="wii-triple-note">Guests who wish to recognize exceptional service may always provide additional tips voluntarily.</p>
                    </div>

                </div>
            </section>

            {/* ── SUITE BENEFITS ── */}
            <section className="wii-feature-section uinc-bg-soft">
                <div className="wii-feature-container">
                    <div className="wii-feature-grid">
                        <div className="wii-feature-image-col">
                            <div className="wii-image-frame uinc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="wii-placeholder-content">
                                    <Crown size={48} className="wii-placeholder-icon" />
                                    <span className="wii-placeholder-text">Suite Benefits Image Placeholder</span>
                                </div>
                                <div className="wii-image-badge"><Crown size={13} /><span>Suite Benefits</span></div>
                            </div>
                            <div className="wii-left-footnote-card">
                                <Crown size={16} className="wii-footnote-card-icon" />
                                <p className="wii-left-footnote-text">
                                    Exact inclusions vary by ship and suite category.
                                </p>
                            </div>
                        </div>
                        <div className="wii-feature-text-col">
                            <span className="wii-eyebrow">SUITE CATEGORIES</span>
                            <h2 className="wii-section-heading">Suite Benefits</h2>
                            <div className="wii-heading-separator-bar"></div>
                            <p className="wii-feature-lead">Guests booking higher accommodation categories often receive additional amenities.</p>
                            <p className="wii-feature-body">These may include:</p>
                            <ul className="wii-check-list">
                                {wiiSuiteBenefits.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S NOT INCLUDED ── */}
            <section className="wii-table-section uinc-not-included-section">
                <div className="wii-table-container">
                    <span className="wii-eyebrow">GOOD TO KNOW</span>
                    <h2 className="wii-section-heading" style={{ textAlign: 'center' }}>What's Usually Not Included?</h2>
                    <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                    <p className="wii-table-intro">While Uniworld is highly inclusive, some expenses remain separate.</p>

                    <div className="wii-comparison-cards-layout">
                        {/* INCLUDED CARD */}
                        <div className="wii-comp-card uinc-comp-included">
                            <div className="wii-comp-card-header">
                                <CheckCircle size={22} className="wii-comp-header-icon" />
                                <h3 className="wii-comp-card-title">Typically Included</h3>
                            </div>
                            <ul className="wii-comp-list">
                                {uincIncludedVsExtra.map((row, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={15} />
                                        <span>{row.included}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* EXTRA COST CARD */}
                        <div className="wii-comp-card uinc-comp-extra">
                            <div className="wii-comp-card-header">
                                <XCircle size={22} className="wii-comp-header-icon" />
                                <h3 className="wii-comp-card-title">Usually Extra Cost</h3>
                            </div>
                            <ul className="wii-comp-list">
                                {uincIncludedVsExtra.map((row, idx) => (
                                    <li key={idx}>
                                        <XCircle size={15} />
                                        <span>{row.extra}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="wii-table-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Always review your specific itinerary, as inclusions can vary.</span>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON ── */}
            <section className="wii-table-section uinc-comparison-section-redesign">
                <div className="wii-table-container" style={{ maxWidth: '1000px' }}>
                    <span className="wii-eyebrow">HOW UNIWORLD COMPARES</span>
                    <h2 className="wii-section-heading" style={{ textAlign: 'center' }}>Comparing Uniworld with Other Luxury River Cruise Lines</h2>
                    <div className="wii-heading-separator-bar uinc-bar-centered"></div>

                    <div className="wii-compare-wrapper">
                        <table className="wii-compare-table">
                            <thead>
                                <tr>
                                    <th>Compare Features</th>
                                    <th className="wii-uni-header">
                                        <Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--uinc-accent-light)' }} />
                                        Uniworld Inclusions
                                    </th>
                                    <th className="wii-typical-header">Typical Premium Line</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uincComparison.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="wii-feature-title">{row.feature}</td>
                                        <td className="wii-uni-cell">
                                            <span className="wii-uni-badge">
                                                <CheckCircle size={13} />
                                                <span>{row.uniworld}</span>
                                            </span>
                                        </td>
                                        <td className="wii-typical-cell">
                                            <span className="wii-typical-value">{row.typical}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="wii-table-footnote-badge">
                        <Award size={15} />
                        <span>Uniworld consistently ranks among the most inclusive luxury river cruise operators due to the breadth of services bundled into the cruise fare.</span>
                    </div>
                </div>
            </section>

            {/* ── VALUE ── */}
            <section className="wii-value-section">
                <div className="wii-value-container">
                    <div className="wii-value-grid">

                        <div className="wii-value-left-col">
                            <div className="wii-value-eyebrow-row">
                                <Gem size={18} />
                                <span className="wii-value-eyebrow-text">IS IT WORTH THE PRICE?</span>
                            </div>
                            <h2 className="wii-value-heading">Why Many Travelers Find Uniworld Good Value</h2>
                            <div className="wii-value-separator"></div>

                            <p className="wii-value-body-lead">
                                Although Uniworld cruises often carry a higher upfront price than some competitors, many travelers appreciate knowing that most vacation expenses have already been covered.
                            </p>
                            <p className="wii-value-body-desc">
                                By bundling everything into one transparent fare, Uniworld eliminates the "nickel-and-diming" typical of other cruise lines. This allows you to relax fully without worrying about calculations at every meal, drink, or excursion.
                            </p>

                            <div className="wii-value-quote-card">
                                <span className="wii-quote-mark">“</span>
                                <p className="wii-value-emphasis">
                                    For travelers seeking a hassle-free luxury vacation, the comprehensive fare often represents strong overall value.
                                </p>
                            </div>
                        </div>

                        <div className="wii-value-right-col">
                            <div className="wii-value-inclusion-card">
                                <h3 className="wii-inclusion-card-title">Bundled Luxury Inclusions</h3>
                                <p className="wii-inclusion-card-subtitle">These amenities significantly reduce additional onboard spending:</p>
                                <div className="wii-value-list-items">
                                    {[
                                        { title: 'Premium Drinks', desc: 'Wines, spirits, and craft cocktails' },
                                        { title: 'Shore Excursions', desc: 'Daily guided tours in every port' },
                                        { title: 'Onboard Gratuities', desc: 'All staff tips pre-paid' },
                                        { title: 'Fine Dining', desc: 'All meals, regional specialties' },
                                        { title: 'Accommodations', desc: 'Boutique handcrafted suites' },
                                        { title: 'Personalized Service', desc: 'Exceptional crew-to-guest ratio' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="wii-value-list-item">
                                            <CheckCircle size={16} className="wii-value-item-icon" />
                                            <div className="wii-value-item-details">
                                                <span className="wii-value-item-title">{item.title}</span>
                                                <span className="wii-value-item-desc">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="wii-takeaways-section">
                <div className="wii-takeaways-container">
                    <h2 className="wii-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                    <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                    <div className="wii-takeaways-grid">
                        {uincKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="wii-takeaway-card">
                                <div className="wii-takeaway-number">0{idx + 1}</div>
                                <p className="wii-takeaway-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="luxe-expert-insight-section">
                <div className="luxe-expert-insight-container">

                    {/* Left Column: Portrait & Stats Grid */}
                    <div className="luxe-expert-portrait-panel">
                        <div className="luxe-expert-img-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury River Cruise Expert" className="luxe-expert-img" />
                            <div className="luxe-expert-img-overlay"></div>
                            <span className="luxe-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="luxe-expert-stats-strip">
                            <div className="luxe-expert-stat-box">
                                <div className="luxe-expert-stat-num">40+</div>
                                <div className="luxe-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="luxe-expert-stat-box">
                                <div className="luxe-expert-stat-num">121+</div>
                                <div className="luxe-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Insight Editorial Panel */}
                    <div className="luxe-expert-content-panel">
                        <div className="luxe-expert-eyebrow-row">
                            <Sparkles size={16} />
                            <span className="luxe-eyebrow">MEET THE CEO</span>
                        </div>
                        <h2 className="medi-section-heading1">Insight from Angela Hughes</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <div className="luxe-expert-quote-card">
                            <span className="luxe-expert-quote-mark">“</span>
                            <p className="luxe-expert-quote-text">
                                Uniworld's all-inclusive model removes the anxiety of onboard spending entirely. When your drinks, excursions, and gratuities are covered, you're free to simply be present — and that's priceless.
                            </p>
                        </div>

                        <div className="luxe-expert-priorities">
                            <h5 className="luxe-priorities-title">What Makes Uniworld Stand Out:</h5>
                            <div className="luxe-expert-pills">
                                {['All-Inclusive Dining & Drinks', 'Daily Guided Excursions', 'Butler Service', 'Gratuities Included', 'Wi-Fi & Amenities', 'Boutique Ship Experience'].map(pill => (
                                    <span key={pill} className="luxe-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="luxe-expert-footer-bio">
                            <p className="luxe-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the river cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="wii-faq-section">
                <div className="wii-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="wii-section-heading">Frequently Asked Questions</h2>
                        <div className="wii-heading-separator-bar uinc-bar-centered"></div>
                    </div>
                    <div className="wii-faq-list-wrapper">
                        {wiiFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="wii-faq-item"
                                onClick={() => wiiToggleFaq(index)}
                            >
                                <div className="wii-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="wii-faq-toggle-icon">{wiiActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {wiiActiveFaq === index && (
                                    <p className="wii-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="wii-cta-redesign-section">
                <div className="wii-cta-aurora-glow"></div>
                <div className="wii-cta-crystal uinc-cta-crystal-1"></div>
                <div className="wii-cta-crystal uinc-cta-crystal-2"></div>
                <div className="wii-cta-crystal uinc-cta-crystal-3"></div>
                <div className="wii-cta-grid-lines"></div>

                <div className="wii-cta-content">
                    <div className="wii-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="wii-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="wii-cta-title">Ready to Experience an All-Inclusive Uniworld River Cruise?</h2>
                    <div className="wii-cta-bar"></div>
                    <p className="wii-cta-subtitle">
                        Ready to experience one of the most inclusive luxury river cruises available? Explore Uniworld itineraries, compare destinations, and find the sailing that best matches your travel style to start planning your next unforgettable journey.
                    </p>
                    <div className="wii-cta-actions">
                        <Link to="/contact" className="wii-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="wii-cta-btn-arrow" />
                        </Link>
                        <Link to="/uniworld-river-cruises" className="wii-cta-secondary-btn">
                            <LayoutList size={18} />
                            <span>Explore Uniworld Itineraries</span>
                        </Link>
                    </div>
                </div>
            </section>

            </div>
        </>
    )
}

export default UniworldRiverCruiseInclusions