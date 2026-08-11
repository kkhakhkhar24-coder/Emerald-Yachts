import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import {
    Users as ExpertUsers,
    Award as ExpertAward,
    CheckCircle as ExpertCheckCircle,
    Ship as ExpertShip,
    Globe as ExpertGlobe,
    Compass as ExpertCompass,
    Sparkles as ExpertSparkles
} from 'lucide-react'
import './Uniworldrhinerivercruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, XCircle,
    Globe, Award, Utensils, Wine, Bed, Compass, Gift,
    Image as ImageIcon, Bath, Bell, MoveDiagonal,
    Landmark, Grape, Wheat, Church, Map, TreePine, Sun,
    Leaf, Snowflake, Footprints, Luggage, MapPin
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component (matches the reference site's placeholder system)
function RhinePlaceholder({ label, className = '' }) {
    return (
        <div className={`urcr-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldRhineRiverCruises() {
    const [rhineActiveFaq, setRhineActiveFaq] = useState(null)
    const rhineToggleFaq = (index) => {
        setRhineActiveFaq(rhineActiveFaq === index ? null : index)
    }

    /* Why Choose a Rhine River Cruise */
    const rhineHighlights = [
        { name: 'Fairytale castles', icon: <Landmark size={24} /> },
        { name: 'UNESCO-listed Rhine Gorge', icon: <Map size={24} /> },
        { name: 'Charming medieval villages', icon: <Church size={24} /> },
        { name: 'Beautiful vineyards', icon: <Grape size={24} /> },
        { name: 'Christmas Markets', icon: <Gift size={24} /> },
        { name: 'Historic cathedrals', icon: <Landmark size={24} /> },
        { name: 'Wine tastings', icon: <Wine size={24} /> },
        { name: 'Scenic countryside', icon: <Wheat size={24} /> }
    ]

    /* What Is Included */
    const rhineIncluded = [
        'Luxury boutique accommodations', 'Farm-to-table gourmet dining', 'Unlimited premium beverages',
        'Shore excursions', 'Complimentary Wi-Fi', 'Onboard gratuities', 'Evening entertainment',
        'Personalized service', 'Airport transfers on select itineraries', 'Bicycles for independent exploration'
    ]

    /* Top Rhine River Destinations */
    const rhineDestinations = [
        { name: 'Amsterdam, Netherlands', desc: 'Canals, museums, cycling culture, and historic neighborhoods.', icon: <Bed size={22} /> },
        { name: 'Cologne, Germany', desc: 'Home to the magnificent Cologne Cathedral and lively Old Town.', icon: <Church size={22} /> },
        { name: 'Koblenz', desc: 'Where the Rhine and Moselle Rivers meet.', icon: <Ship size={22} /> },
        { name: 'Rhine Gorge', desc: "One of Europe's most scenic river cruising regions featuring dramatic castles and vineyard-covered hills.", icon: <Landmark size={22} /> },
        { name: 'Rüdesheim', desc: 'Known for Riesling wines, charming streets, and lively wine taverns.', icon: <Grape size={22} /> },
        { name: 'Strasbourg, France', desc: 'A beautiful blend of French and German culture with half-timbered houses and excellent cuisine.', icon: <Utensils size={22} /> },
    ]

    /* Best Time to Cruise the Rhine */
    const rhineSeasons = [
        { title: 'Spring', text: 'Blooming vineyards and pleasant temperatures.', icon: <Leaf size={22} /> },
        { title: 'Summer', text: 'Long days, lively festivals, and warm weather.', icon: <Sun size={22} /> },
        { title: 'Fall', text: 'Wine harvest season with colorful landscapes.', icon: <TreePine size={22} /> },
        { title: 'Christmas Markets', text: "One of the Rhine's most magical experiences featuring festive markets, holiday lights, and seasonal traditions.", icon: <Snowflake size={22} /> }
    ]

    /* Dining Onboard */
    const rhineDining = [
        { text: 'Regional cuisine', icon: <Utensils size={20} /> },
        { text: 'Local wines', icon: <Wine size={20} /> },
        { text: 'Multi-course gourmet dinners', icon: <Utensils size={20} /> },
        { text: 'Fresh seasonal ingredients', icon: <Leaf size={20} /> },
        { text: 'Elegant restaurants', icon: <Sparkles size={20} /> },
        { text: 'Specialty culinary experiences', icon: <Award size={20} /> }
    ]

    /* Accommodations */
    const rhineAccommodations = [
        { text: 'Butler service', icon: <Bell size={20} /> },
        { text: 'Marble bathrooms', icon: <Bath size={20} /> },
        { text: 'French balconies', icon: <MoveDiagonal size={20} /> },
        { text: 'Luxury bedding', icon: <Bed size={20} /> },
        { text: 'Spacious layouts', icon: <Ship size={20} /> }
    ]

    /* Pros & Cons */
    const rhinePros = [
        { title: 'Boutique Luxury Ships', desc: 'Elegant, intimately scaled vessels sailing the Rhine.', icon: <Ship size={20} /> },
        { title: 'Outstanding Dining', desc: 'Farm-to-table gourmet cuisine paired with regional wines.', icon: <Utensils size={20} /> },
        { title: 'Incredible Rhine Scenery', desc: 'Castles, vineyards, and dramatic gorge landscapes.', icon: <Landmark size={20} /> },
        { title: 'Exceptional Service', desc: 'Attentive, personalized hospitality throughout the voyage.', icon: <Sparkles size={20} /> },
        { title: 'Nearly All-Inclusive', desc: 'Beverages, excursions, and gratuities are included.', icon: <CheckCircle size={20} /> },
        { title: 'Beautiful Accommodations', desc: 'Thoughtfully designed staterooms with premium amenities.', icon: <Bed size={20} /> },
        { title: 'Award-Winning Excursions', desc: 'Immersive, guided shore experiences at every stop.', icon: <Award size={20} /> }
    ]

    const rhineCons = [
        { title: 'Premium Pricing', desc: 'One of the higher-priced river cruise experiences.' },
        { title: 'Limited Availability', desc: 'Popular sailings can sell out well in advance.' },
        { title: 'Best Suites Sell Out Early', desc: 'Top suite categories are in high demand.' },
        { title: 'More Traditional Decor', desc: 'Ship interiors are highly traditional, which may not appeal to minimalist design lovers.' },
        { title: 'Smaller Fitness Facilities', desc: 'Gym space and wellness equipment are compact compared to ocean liners.' },
        { title: 'Fewer Onboard Activities', desc: 'Focus is primarily on destinations with limited onboard games or pools.' },
    ]

    /* Who should book / who may prefer another */
    const rhineWhoShould = ['Couples', 'Luxury travelers', 'Wine lovers', 'History enthusiasts', 'First-time Europe visitors', 'Anniversary celebrations', 'Christmas Market travelers', 'Photography enthusiasts']
    const rhineWhoPrefer = ['Prefer warmer tropical destinations', 'Want ocean cruising', 'Travel with young children', 'Seek budget-focused vacations']

    /* Planning Tips */
    const rhinePlanningTips = [
        'Book 9–18 months in advance.',
        'Travel during spring or fall for ideal weather.',
        'Reserve a French Balcony or Suite for enhanced views.',
        'Consider extending your stay in Amsterdam or Basel.',
        'Pack comfortable walking shoes for historic towns and cobblestone streets.'
    ]

    /* Why Book with Trips & Ships */
    const rhineWhyBook = [
        { title: 'Compare Rhine itineraries', icon: <LayoutList size={20} /> },
        { title: 'Choose the best ship and suite', icon: <Bed size={20} /> },
        { title: 'Arrange airfare and hotels', icon: <Globe size={20} /> },
        { title: 'Secure exclusive promotions', icon: <Award size={20} /> },
        { title: 'Coordinate transfers', icon: <Luggage size={20} /> },
        { title: 'Customize pre- and post-cruise stays', icon: <MapPin size={20} /> },
        
    ]

    /* FAQs */
    const rhineFaqs = [
        { question: 'Is a Uniworld Rhine River Cruise worth the money?', answer: 'Yes. Uniworld Rhine River Cruises provide exceptional value through luxury accommodations, gourmet dining, premium beverages, guided excursions, gratuities, and personalized service.' },
        { question: 'What is included on a Uniworld Rhine River Cruise?', answer: 'Most cruises include accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, excursions, gratuities, entertainment, and exceptional onboard service.' },
        { question: 'Which countries does the Rhine River Cruise visit?', answer: 'Depending on the itinerary, cruises may visit the Netherlands, Germany, France, and Switzerland.' },
        { question: 'What is the most scenic part of the Rhine?', answer: 'The UNESCO-listed Rhine Gorge is considered the most scenic stretch, famous for its castles, vineyards, and dramatic river landscapes.' },
        { question: 'When is the best time to cruise the Rhine?', answer: 'Spring, summer, and fall are all excellent, while Christmas Market cruises are especially popular during the holiday season.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Most guided excursions are included in your cruise fare.' },
        { question: 'Are drinks included?', answer: 'Yes. Premium wines, beer, spirits, specialty coffee, soft drinks, and bottled water are included.' },
        { question: 'Does Uniworld include gratuities?', answer: 'Yes. Onboard gratuities are generally included.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is available throughout your voyage.' },
        { question: 'Which Rhine itinerary is the most popular?', answer: 'Amsterdam to Basel and Basel to Amsterdam are among the most popular Rhine River itineraries.' },
        { question: 'Who should choose a Rhine River Cruise?', answer: 'Couples, luxury travelers, wine lovers, photographers, history enthusiasts, and first-time river cruisers.' },
        { question: 'Why book with Trips & Ships Luxury Travel?', answer: 'Our advisors provide expert recommendations, exclusive offers, personalized planning, and concierge-level service to ensure an exceptional Rhine River Cruise experience.' }
    ]

    const rhineSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhine",
                "name": "Uniworld Rhine River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/rhine",
                "description": "Discover Uniworld Rhine River Cruises featuring luxury boutique ships, fairytale castles, Rhine Gorge, gourmet dining, all-inclusive amenities, and unforgettable European river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhine#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in luxury river cruises, ocean cruises, expedition cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhine#article",
                "headline": "Uniworld Rhine River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/rhine",
                "description": "Expert guide to Uniworld Rhine River Cruises including destinations, castles, Rhine Gorge, pricing, what's included, dining, excursions, and luxury travel planning.",
                "image": "https://www.tripsandships.com/images/uniworld-rhine-river-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhine" }
            },
            {
                "@type": "Service",
                "name": "Luxury Rhine River Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Rhine River cruises, helping travelers compare itineraries, select accommodations, and create unforgettable European vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Uniworld Rhine River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/rhine" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is a Uniworld Rhine River Cruise worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Uniworld Rhine River Cruises offer exceptional value with luxury accommodations, gourmet dining, premium beverages, included excursions, gratuities, and personalized service." } },
                    { "@type": "Question", "name": "What is included on a Uniworld Rhine River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Most cruises include boutique accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, guided excursions, onboard gratuities, entertainment, and exceptional personalized service." } },
                    { "@type": "Question", "name": "Which countries does the Rhine River Cruise visit?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the itinerary, Uniworld Rhine River Cruises visit the Netherlands, Germany, France, and Switzerland." } },
                    { "@type": "Question", "name": "What is the most scenic part of the Rhine River?", "acceptedAnswer": { "@type": "Answer", "text": "The UNESCO-listed Rhine Gorge is considered the most scenic section, famous for medieval castles, vineyards, charming villages, and breathtaking river views." } },
                    { "@type": "Question", "name": "When is the best time to cruise the Rhine?", "acceptedAnswer": { "@type": "Answer", "text": "Spring and fall offer beautiful scenery and pleasant weather, while Christmas Market cruises are especially popular during the holiday season." } },
                    { "@type": "Question", "name": "Are shore excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most guided shore excursions are included, allowing guests to experience the history, culture, and attractions of each destination." } },
                    { "@type": "Question", "name": "Are drinks included on Uniworld Rhine River Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium wines, beer, spirits, specialty coffee, soft drinks, and bottled water are generally included throughout your cruise." } },
                    { "@type": "Question", "name": "Does Uniworld include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Onboard gratuities are included on most Uniworld river cruises." } },
                    { "@type": "Question", "name": "Is Wi-Fi included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is available throughout all Uniworld river ships." } },
                    { "@type": "Question", "name": "Which Rhine River itinerary is the most popular?", "acceptedAnswer": { "@type": "Answer", "text": "Amsterdam to Basel and Basel to Amsterdam are among the most popular Rhine River itineraries, featuring castles, vineyards, and historic European cities." } },
                    { "@type": "Question", "name": "Who should choose a Uniworld Rhine River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Uniworld Rhine River Cruises are ideal for couples, luxury travelers, wine enthusiasts, history lovers, photographers, and first-time river cruisers." } },
                    { "@type": "Question", "name": "Why book with Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel provides expert itinerary recommendations, exclusive offers, personalized planning, concierge-level service, and assistance before, during, and after your Rhine River Cruise." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Rhine River Cruises : Best Itineraries, Prices & Expert Guide</title>
                <meta name="title" content="Uniworld Rhine River Cruises | Luxury Rhine River Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Rhine River Cruise? Discover the best itineraries, castles, pricing, what's included, destinations, reviews, and whether a Rhine River cruise is worth it."
                />
                <meta name="keywords" content="Uniworld Rhine River Cruises, Uniworld Rhine River Cruise, Rhine River luxury cruise, Rhine River cruise reviews, Best Rhine River cruise, Rhine castles cruise, Rhine Christmas Market cruise, Luxury Rhine cruise" />
                <script type="application/ld+json">
                    {JSON.stringify(rhineSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Uniworld Rhine River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Rhine River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Discover Europe's Most Beautiful River in Boutique Luxury
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (MATCHED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">DISCOVER THE RHINE</span>
                                <h2 className="fcel-section-heading">Discover Europe's Most Beautiful River in Boutique Luxury</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    The Rhine River has captivated travelers for centuries with its fairytale castles, charming medieval villages, vineyard-covered hillsides, and vibrant cultural cities. A Uniworld Rhine River Cruise offers one of the most luxurious ways to experience this iconic waterway, combining boutique accommodations, gourmet dining, immersive excursions, and exceptional personalized service.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're sailing through Germany's romantic Rhine Gorge, visiting colorful Dutch towns, or exploring the storybook streets of Strasbourg, every day offers unforgettable scenery and cultural discoveries.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    If you're looking for one of Europe's finest luxury river cruise experiences, the Rhine deserves a place at the top of your travel list.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <RhinePlaceholder label="Uniworld Ship on the Rhine Gorge" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Boutique Luxury River Cruise</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    A Uniworld Rhine River Cruise combines boutique accommodations, gourmet dining, immersive excursions, and exceptional personalized service along one of Europe's most iconic waterways.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (MATCHED — urcr-quick-answer-*) */}
                <section className="urcr-quick-answer-section">
                    <div className="urcr-quick-answer-container">
                        <div className="urcr-quick-answer-card">
                            <h3 className="urcr-quick-answer-title">Quick Answer: Is a Uniworld Rhine River Cruise Worth It?</h3>
                            <p className="urcr-quick-answer-text">
                                Yes. A Uniworld Rhine River Cruise is one of the best choices for travelers seeking an all-inclusive luxury vacation filled with breathtaking scenery, historic castles, charming villages, and world-class hospitality.
                            </p>
                            <p className="urcr-quick-answer-text" style={{ fontSize: '16px', marginBottom: '0' }}>
                                Guests enjoy elegant boutique ships, award-winning dining, premium beverages, guided excursions, and attentive service while visiting some of Europe's most famous destinations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATING SECTION (MATCHED — urcr-rating-*) */}
                <section className="urcr-rating-section">
                    <div className="urcr-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label urcr-eyebrow-rating">⭐ OUR OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="urcr-rating-card">
                            <div className="urcr-rating-grid">
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Luxury</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Scenic Beauty</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Dining</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Excursions</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Service</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Value</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="urcr-rating-score-box">
                                <div className="urcr-rating-score">9.9/10</div>
                                <div className="urcr-rating-score-label">Overall Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA — MATCHED) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Expert Planning</span>
                        <p className="urcr-inline-cta-text">Ready to experience the Rhine's fairytale castles firsthand?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A RHINE RIVER CRUISE (MATCHED — urcr-dest-grid pattern reused for icon+label highlights) */}
                <section className="urcr-dest-section">
                    <div className="urcr-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Choose a Rhine River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                The Rhine offers an incredible blend of history, culture, architecture, and natural beauty.
                            </p>
                        </div>
                        <div className="urcr-dest-grid">
                            {rhineHighlights.map((item, idx) => (
                                <div key={idx} className="urcr-dest-card">
                                    <div className="urcr-dest-icon-wrap">
                                        {item.icon}
                                    </div>
                                    <h4 className="urcr-dest-name">{item.name}</h4>
                                </div>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '800px', margin: '40px auto 0' }}>
                            Every day brings a new destination with rich history and unforgettable landscapes.
                        </p>
                    </div>
                </section>

                {/* WHAT IS INCLUDED (NEW — rhine-included-*) */}
                <section className="rhine-included-section urcr-bg-soft">
                    <div className="rhine-included-container">
                        <div className="rhine-included-split">
                            <div className="urcr-image-wrapper-premium">
                                <div className="urcr-badge-overlay-gold">
                                    <CheckCircle size={14} />
                                    <span>All-Inclusive</span>
                                </div>
                                <RhinePlaceholder label="Uniworld All-Inclusive Luxury Experience" />
                            </div>
                            <div className="rhine-included-copy-col">
                                <span className="fcel-eyebrow-label">
                                    <CheckCircle size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    What Is Included?
                                </span>
                                <h2 className="fcel-section-heading" style={{ textAlign: 'left' }}>Most Uniworld Rhine River Cruises include:</h2>
                                <div className="fcel-heading-bar" style={{ marginLeft: '0' }}></div>
                                <div className="rhine-included-grid">
                                    {rhineIncluded.map((item, idx) => (
                                        <div key={idx} className="rhine-included-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOP RHINE RIVER DESTINATIONS (NEW — rhine-dest-*) */}
                <section className="rhine-dest-section urcr-bg-white">
                    <div className="rhine-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLD CLASS RIVERWAYS</span>
                            <h2 className="fcel-section-heading">Top Rhine River Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                A Rhine River Cruise visits some of Europe's most iconic cities and towns.
                            </p>
                        </div>
                        <div className="rhine-dest-grid">
                            {rhineDestinations.map((dest, idx) => (
                                <div key={idx} className="rhine-dest-card">
                                    <div className="rhine-dest-card-content">
                                        <div className="rhine-dest-icon-wrap">
                                            {dest.icon}
                                        </div>
                                        <h4 className="rhine-dest-card-name">{dest.name}</h4>
                                        <p className="rhine-dest-card-desc">{dest.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE THE RHINE (NEW — rhine-season-*) */}
                <section className="rhine-season-section">
                    <div className="rhine-season-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#ffffff', color: 'var(--urcr-navy)' }}>
                                BEST TIME TO CRUISE
                            </span>
                            <h2 className="fcel-section-heading">Best Time to Cruise the Rhine</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Each season offers something unique.</p>
                        </div>
                        <div className="rhine-season-grid">
                            {rhineSeasons.map((season, idx) => (
                                <div key={idx} className="rhine-season-card">
                                    <div className="rhine-season-icon">
                                        {season.icon}
                                    </div>
                                    <h3 className="rhine-season-title">{season.title}</h3>
                                    <p className="rhine-season-text">{season.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD (MATCHED — urcr-dining-* split layout) */}
                <section className="urcr-review-section urcr-dining-light-section">
                    <div className="urcr-review-container">
                        <div className="urcr-dining-container">
                            <div className="urcr-image-wrapper-premium">
                                <div className="urcr-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>Farm-to-Table Dining</span>
                                </div>
                                <RhinePlaceholder label="Onboard Fine Dining Experience" />
                            </div>
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: '230px' }}>DINING ONBOARD</span>
                                <h2 className="urcr-review-title">Dining Onboard</h2>
                                <p className="fcel-lead-paragraph">
                                    Dining is one of Uniworld's greatest strengths. Menus are inspired by the destinations visited along the Rhine.
                                </p>
                                <div className="urcr-dining-menu-list">
                                    {rhineDining.map((item, idx) => (
                                        <div key={idx} className="urcr-dining-course-card">
                                            <div className="urcr-dining-course-icon">
                                                {item.icon}
                                            </div>
                                            <span className="urcr-dining-course-text">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATIONS (MATCHED — urcr-cabins-* split layout) */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container">
                        <div className="urcr-cabins-container">
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label urcr-eyebrow-accommodations">ACCOMMODATIONS</span>
                                <h2 className="urcr-review-title" style={{ textAlign: 'left' }}>Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Every stateroom is thoughtfully designed with luxurious furnishings and premium amenities. Many suites also include:
                                </p>
                                <div className="urcr-cabin-feature-grid">
                                    {rhineAccommodations.map((item, idx) => (
                                        <div key={idx} className="urcr-cabin-feature-card">
                                            <div className="urcr-cabin-card-icon">
                                                {item.icon}
                                            </div>
                                            <span className="urcr-cabin-card-text">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="urcr-image-wrapper-premium">
                                <div className="urcr-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <RhinePlaceholder label="Rhine Cruise Stateroom Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY (NEW — rhine-worth-*) */}
                <section className="rhine-worth-section">
                    <div className="rhine-worth-container">
                        <span className="fcel-eyebrow-label">VALUE ANALYSIS</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Although Uniworld is among the premium river cruise lines, many travelers believe the value is exceptional.
                        </p>
                        <p className="fcel-lead-paragraph">
                            Your fare includes luxury accommodations, gourmet dining, beverages, excursions, gratuities, and personalized service—making it one of the most inclusive ways to explore Europe.
                        </p>
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA — MATCHED) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Promotions & Rates</span>
                        <p className="urcr-inline-cta-text">Ready to compare Rhine itineraries and lock in the best suite promotions?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Compare Rhine Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS (REDESIGNED COMPARISON BOARD) */}
                <section className="urcr-comparison-section urcr-bg-soft">
                    <div className="urcr-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#ffffff', color: 'var(--urcr-navy)' }}>PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="urcr-comparison-board">
                            {/* Pros Panel */}
                            <div className="urcr-pros-panel">
                                <h3 className="urcr-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="urcr-panel-list">
                                    {rhinePros.map((item, idx) => (
                                        <div key={idx} className="urcr-list-item">
                                            <div className="urcr-item-icon-wrap pro-icon">
                                                {item.icon}
                                            </div>
                                            <div className="urcr-item-content">
                                                <h4 className="urcr-item-title">{item.title}</h4>
                                                <p className="urcr-item-desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="urcr-cons-panel">
                                <h3 className="urcr-panel-title cons-title">
                                    <XCircle size={22} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="urcr-panel-list">
                                    {rhineCons.map((item, idx) => (
                                        <div key={idx} className="urcr-list-item">
                                            <div className="urcr-item-icon-wrap con-icon">
                                                <XCircle size={16} />
                                            </div>
                                            <div className="urcr-item-content">
                                                <h4 className="urcr-item-title">{item.title}</h4>
                                                <p className="urcr-item-desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK / WHO MAY PREFER ANOTHER CRUISE (MATCHED — urcr-audience-*) */}
                <section className="urcr-audience-section">
                    <div className="urcr-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label urcr-eyebrow-audience">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Book a Rhine River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="urcr-audience-grid">
                            <div className="urcr-audience-column urcr-audience-green">
                                <h4 className="urcr-audience-title">Perfect for:</h4>
                                <ul className="urcr-audience-list">
                                    {rhineWhoShould.map((item, idx) => (
                                        <li key={idx} className="urcr-audience-item">
                                            <CheckCircle size={18} className="urcr-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="urcr-audience-column urcr-audience-red">
                                <h4 className="urcr-audience-title">Who May Prefer Another Cruise?</h4>
                                <ul className="urcr-audience-list">
                                    {rhineWhoPrefer.map((item, idx) => (
                                        <li key={idx} className="urcr-audience-item">
                                            <XCircle size={18} className="urcr-audience-cross" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS (NEW — rhine-tips-*) */}
                <section className="rhine-tips-section">
                    <div className="rhine-tips-container">
                        <span className="fcel-eyebrow-label">
                            <Footprints size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Planning Tips
                        </span>
                        <h2 className="fcel-section-heading">To make the most of your Rhine River Cruise:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <ul className="rhine-tips-list">
                            {rhinePlanningTips.map((tip, idx) => (
                                <li key={idx} className="rhine-tip-item">
                                    <span className="rhine-tip-number">{idx + 1}</span>
                                    <p className="rhine-tip-text">{tip}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* WHY BOOK WITH US (MATCHED — urcr-why-book-*) */}
                <section className="urcr-why-book-section urcr-bg-soft">
                    <div className="urcr-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Our luxury travel advisors help you:
                            </p>
                        </div>
                        <div className="urcr-why-book-grid">
                            {rhineWhyBook.map((item, idx) => (
                                <div key={idx} className="urcr-why-book-card">
                                    <div className="urcr-why-book-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className="urcr-why-book-title">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We'll ensure every detail of your Rhine River vacation is handled with care.
                        </p>
                    </div>
                </section>

                {/* OUR RECOMMENDATION (MATCHED — urcr-review-section verdict style) */}
                <section className="urcr-review-section urcr-bg-white">
                    <div className="urcr-review-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label urcr-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">A Uniworld Rhine River Cruise Is One of Europe's Most Rewarding Luxury Vacations</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ fontSize: '18px', color: '#475569' }}>
                            From castle-lined riverbanks and world-famous wine regions to exceptional dining and personalized service, it combines breathtaking scenery with boutique luxury.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Whether you're celebrating a milestone, planning your first river cruise, or returning to Europe, the Rhine offers timeless experiences that you'll remember for years to come.
                        </p>
                    </div>
                </section>

                 {/* EXPERT INSIGHT */}
                <section id="uniworld-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-frame">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury River Cruise Expert" />
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

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <ExpertAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Discerning Travelers <br className="medi-growth-title-break" />Choose Uniworld River Cruises
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially drawn to Uniworld for its extraordinary boutique ships — but ultimately stay loyal because of the warmth of service, the depth of cultural immersion, and a level of all-inclusive luxury that few river cruise lines can match.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Uniworld travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Boutique, museum-quality ships',
                                            'Truly all-inclusive luxury',
                                            'Butler service in select suites',
                                            'Gourmet farm-to-table dining',
                                            'Intimate, destination-rich itineraries',
                                            'Personalized, warm onboard service'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <ExpertCheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers navigate the luxury river cruise landscape with honesty and real-world expertise — ensuring every client finds the right ship, the right itinerary, and the right experience for their lifestyle.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Luxury river cruising', icon: ExpertShip },
                                            { title: 'European river itineraries', icon: ExpertGlobe },
                                            { title: 'Butler & suite services', icon: ExpertUsers },
                                            { title: 'All-inclusive cruise planning', icon: ExpertCompass },
                                            { title: 'Gourmet & cultural travel', icon: ExpertSparkles }
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

                {/* FAQ SECTION (MATCHED) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {rhineFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => rhineToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {rhineActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {rhineActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld Rhine River Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to lock in extra credits, suite upgrades, and personalized transfers. We plan the details so you can enjoy the trip.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default UniworldRhineRiverCruises