import Navbar from '../../components/Navbar/Navbar'
import './Uniworlddanuberivercruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, XCircle,
    Globe, Award, Utensils, Wine, Bed, Compass, Gift, AlertTriangle,
    Image as ImageIcon, Bath, Bell, MoveDiagonal,
    Landmark, Grape, Wheat, Church, Map, TreePine, Sun,
    Leaf, Snowflake, Footprints, Luggage, MapPin, Calendar, HelpCircle, Heart, Info
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function DanubePlaceholder({ label, className = '' }) {
    return (
        <div className={`urcr-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function Uniworlddanuberivercruises() {
    const [danubeActiveFaq, setDanubeActiveFaq] = useState(null)
    const danubeToggleFaq = (index) => {
        setDanubeActiveFaq(danubeActiveFaq === index ? null : index)
    }

    /* Why Choose a Danube River Cruise */
    const danubeHighlights = [
        { name: 'Historic European capitals', icon: <Landmark size={24} /> },
        { name: 'UNESCO World Heritage Sites', icon: <Map size={24} /> },
        { name: 'Beautiful vineyards', icon: <Grape size={24} /> },
        { name: 'Fairytale villages', icon: <Church size={24} /> },
        { name: 'Magnificent palaces', icon: <Landmark size={24} /> },
        { name: 'Christmas Markets', icon: <Gift size={24} /> },
        { name: 'Classical music heritage', icon: <Sparkles size={24} /> },
        { name: 'Local wine tastings', icon: <Wine size={24} /> }
    ]

    /* What Is Included */
    const danubeIncluded = [
        'Boutique luxury accommodations',
        'Farm-to-table gourmet dining',
        'Unlimited premium beverages',
        'Daily guided excursions',
        'Complimentary Wi-Fi',
        'Onboard gratuities',
        'Evening entertainment',
        'Personalized service',
        'Airport transfers on select itineraries',
        'Complimentary bicycles'
    ]

    /* Top Danube River Destinations */
    const danubeDestinations = [
        { name: 'Budapest, Hungary', desc: 'Known as the "Pearl of the Danube," Budapest features stunning Parliament buildings, thermal baths, historic castles, and vibrant nightlife.', icon: <Landmark size={22} /> },
        { name: 'Vienna, Austria', desc: 'Famous for imperial palaces, classical music, elegant cafés, and world-renowned museums.', icon: <Award size={22} /> },
        { name: 'Bratislava, Slovakia', desc: 'A charming capital filled with medieval streets, castles, and riverside cafés.', icon: <Church size={22} /> },
        { name: 'Passau, Germany', desc: 'Known as the City of Three Rivers with beautiful baroque architecture.', icon: <Ship size={22} /> },
        { name: 'Wachau Valley, Austria', desc: 'A UNESCO-listed region famous for vineyards, castles, monasteries, and picturesque villages.', icon: <Grape size={22} /> },
        { name: 'Melk Abbey', desc: 'One of Europe\'s most spectacular Benedictine monasteries overlooking the Danube.', icon: <Landmark size={22} /> }
    ]

    /* Best Time to Cruise the Danube */
    const danubeSeasons = [
        { title: 'Spring', text: 'Blooming landscapes and mild temperatures.', icon: <Leaf size={22} /> },
        { title: 'Summer', text: 'Long daylight hours and vibrant festivals.', icon: <Sun size={22} /> },
        { title: 'Fall', text: 'Wine harvest season with colorful scenery.', icon: <TreePine size={22} /> },
        { title: 'Christmas Markets', text: 'One of Europe\'s most magical holiday experiences featuring festive markets in Vienna, Budapest, and Passau.', icon: <Snowflake size={22} /> }
    ]

    /* Dining Onboard */
    const danubeDining = [
        { text: 'Locally inspired cuisine', icon: <Utensils size={20} /> },
        { text: 'Regional wines', icon: <Wine size={20} /> },
        { text: 'Multi-course gourmet dinners', icon: <Utensils size={20} /> },
        { text: 'Fresh seasonal ingredients', icon: <Leaf size={20} /> },
        { text: 'Elegant restaurants', icon: <Sparkles size={20} /> },
        { text: 'Special culinary events', icon: <Award size={20} /> }
    ]

    /* Accommodations */
    const danubeAccommodations = [
        { text: 'Butler service (in select suites)', icon: <Bell size={20} /> },
        { text: 'Marble bathrooms', icon: <Bath size={20} /> },
        { text: 'French balconies', icon: <MoveDiagonal size={20} /> },
        { text: 'Luxury bedding', icon: <Bed size={20} /> },
        { text: 'Spacious living areas', icon: <Ship size={20} /> }
    ]

    /* Pros & Cons */
    const danubePros = [
        { title: 'Boutique luxury ships', desc: 'Elegant, intimately scaled vessels sailing the Danube.', icon: <Ship size={20} /> },
        { title: 'Outstanding service', desc: 'Attentive, personalized hospitality throughout the voyage.', icon: <Sparkles size={20} /> },
        { title: 'Gourmet cuisine', desc: 'Farm-to-table cuisine paired with regional wines.', icon: <Utensils size={20} /> },
        { title: 'Beautiful Danube scenery', desc: 'Breathtaking landscapes of capitals and gorges.', icon: <Landmark size={20} /> },
        { title: 'Nearly all-inclusive', desc: 'Beverages, excursions, and gratuities are included.', icon: <CheckCircle size={20} /> },
        { title: 'Exceptional excursions', desc: 'Immersive, guided shore experiences at every stop.', icon: <Award size={20} /> },
        { title: 'Elegant accommodations', desc: 'Thoughtfully designed stateroms with premium amenities.', icon: <Bed size={20} /> }
    ]

    const danubeCons = [
        { title: 'Higher price than mainstream cruise lines', desc: 'One of the higher-priced river cruise options.' },
        { title: 'Popular departures sell out early', desc: 'Popular spring and Christmas Market dates sell out far in advance.' },
        { title: 'Limited availability for top suite categories', desc: 'Best suites have extremely high demand.' },
        { title: 'Itinerary changes due to river water levels', desc: 'High or low water levels can occasionally alter itineraries.' },
        { title: 'Traditional, ornate interior design', desc: 'Decor style is classic and opulent, which might not appeal to minimalists.' },
        { title: 'Smaller fitness & wellness areas', desc: 'Onboard gyms and spas are much more compact than ocean cruise facilities.' },
        { title: 'Fewer onboard activities & entertainment options', desc: 'Fewer daily activities compared to massive ocean liners.' }
    ]

    /* Who should book / who may prefer another */
    const danubeWhoShould = [
        'Couples', 'Luxury travelers', 'First-time European visitors', 'History enthusiasts',
        'Wine lovers', 'Christmas Market travelers', 'Anniversary celebrations', 'Cultural explorers'
    ]
    const danubeWhoPrefer = [
        'Prefer ocean cruises', 'Want tropical destinations', 'Travel with young children', 'Are seeking a lower-cost vacation'
    ]

    /* Planning Tips */
    const danubePlanningTips = [
        'Book 9–18 months in advance.',
        'Spring and fall provide ideal weather.',
        'Reserve a French Balcony or Suite for the best views.',
        'Extend your trip in Budapest or Vienna.',
        'Pack comfortable shoes for historic city walking tours.'
    ]

    /* Why Book with Trips & Ships */
    const danubeWhyBook = [
        { title: 'Compare Danube itineraries', icon: <LayoutList size={20} /> },
        { title: 'Select the best suite', icon: <Bed size={20} /> },
        { title: 'Arrange flights and hotels', icon: <Globe size={20} /> },
        { title: 'Secure exclusive offers', icon: <Award size={20} /> },
        { title: 'Customize pre- and post-cruise stays', icon: <MapPin size={20} /> },
        { title: 'Coordinate transfers', icon: <Luggage size={20} /> },
        { title: 'Provide concierge-level service before, during, and after your vacation', icon: <Sparkles size={20} /> }
    ]

    /* FAQs */
    const danubeFaqs = [
        {
            question: 'Is a Uniworld Danube River Cruise worth the money?',
            answer: 'Yes. Uniworld Danube River Cruises provide exceptional value by including luxury accommodations, gourmet dining, unlimited beverages, guided shore excursions, onboard gratuities, and personalized service in the cruise fare.'
        },
        {
            question: 'What is included on a Uniworld Danube River Cruise?',
            answer: 'Your cruise fare includes boutique luxury accommodations, all meals onboard (featuring farm-to-table cuisine), unlimited premium wine, beer, spirits, soft drinks, guided shore excursions, complimentary Wi-Fi, onboard gratuities, and airport transfers on select arrival/departure dates.'
        },
        {
            question: 'What are the best itineraries for a Danube River Cruise?',
            answer: 'Popular itineraries include the "Enchanting Danube" (sailing between Budapest and Passau) and the "Delightful Danube" (Budapest to Nuremberg). These itineraries highlight imperial cities, historic castles, and scenic valleys.'
        },
        {
            question: 'Which destinations does a Uniworld Danube cruise visit?',
            answer: 'Cruises typically visit Budapest (Hungary), Vienna (Austria), Bratislava (Slovakia), Passau (Germany), Linz (Austria), and Melk (Austria), with options for pre- or post-cruise extensions.'
        },
        {
            question: 'When is the best time to take a Danube River Cruise?',
            answer: 'The best time depends on your travel preferences. Spring (May) and autumn (September to October) offer pleasant weather and fewer crowds, while late November and December are highly popular for the festive Christmas Markets.'
        },
        {
            question: 'Are shore excursions included in the price?',
            answer: 'Yes. Daily guided shore excursions are included. Guests can choose from classic city tours, active options like hiking and biking, and exclusive "Go Active" or "Do as the Locals Do" experiences.'
        },
        {
            question: 'Are beverages and alcohol included?',
            answer: 'Yes. Uniworld features an open bar throughout the cruise, including unlimited premium spirits, regional wines, beer, soft drinks, specialty coffee, and bottled water.'
        },
        {
            question: 'Does Uniworld include tips/gratuities?',
            answer: 'Yes. All onboard and onshore gratuities for ship crew, local guides, and drivers are included in your cruise fare.'
        },
        {
            question: 'Is Wi-Fi included on the ship?',
            answer: 'Yes. Complimentary Wi-Fi is available throughout the ship for all guests.'
        },
        {
            question: 'Can I extend my cruise with a land package?',
            answer: 'Yes. Uniworld offers pre- and post-cruise land extensions in major cities like Prague, Vienna, Budapest, and Munich, which include luxury hotels, guided tours, and transfers.'
        },
        {
            question: 'Who is the typical guest on a Uniworld Danube Cruise?',
            answer: 'Guests are typically luxury travelers, couples, active seniors, history and culture enthusiasts, and families celebrating milestone events. The experience is best suited for adults and children over the age of four.'
        },
        {
            question: 'Why should I book my Uniworld cruise with Trips & Ships Luxury Travel?',
            answer: 'Trips & Ships Luxury Travel offers expert advice, exclusive promotions, custom pre- and post-cruise planning, and personal concierge service to ensure your Danube River Cruise is planned to perfection.'
        }
    ]

    const danubeSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/danube",
                "name": "Uniworld Danube River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/danube",
                "description": "Thinking about a Uniworld Danube River Cruise? Discover the best itineraries, destinations, pricing, what's included, reviews, and whether a luxury Danube cruise is worth it.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/uniworld-river-cruises/danube#article" }
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/danube#article",
                "headline": "Uniworld Danube River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/danube",
                "description": "Expert guide to Uniworld Danube River Cruises including itineraries, destinations, pricing, what's included, reviews, and whether a luxury Danube cruise is worth it.",
                "image": "https://www.tripsandships.com/images/uniworld-danube-river-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/danube" }
            },
            {
                "@type": "Service",
                "name": "Luxury Danube River Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Danube River cruises, helping travelers compare itineraries, select ships/suites, and create custom European vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Uniworld Danube River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/danube" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is a Uniworld Danube River Cruise worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Uniworld Danube River Cruises provide exceptional value by including luxury accommodations, gourmet dining, unlimited beverages, guided shore excursions, onboard gratuities, and personalized service in the cruise fare." } },
                    { "@type": "Question", "name": "What is included on a Uniworld Danube River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Your cruise fare includes boutique luxury accommodations, all meals onboard (featuring farm-to-table cuisine), unlimited premium wine, beer, spirits, soft drinks, guided shore excursions, complimentary Wi-Fi, onboard gratuities, and airport transfers on select arrival/departure dates." } },
                    { "@type": "Question", "name": "What are the best itineraries for a Danube River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Popular itineraries include the \"Enchanting Danube\" (sailing between Budapest and Passau) and the \"Delightful Danube\" (Budapest to Nuremberg). These itineraries highlight imperial cities, historic castles, and scenic valleys." } },
                    { "@type": "Question", "name": "Which destinations does a Uniworld Danube cruise visit?", "acceptedAnswer": { "@type": "Answer", "text": "Cruises typically visit Budapest (Hungary), Vienna (Austria), Bratislava (Slovakia), Passau (Germany), Linz (Austria), and Melk (Austria), with options for pre- or post-cruise extensions." } },
                    { "@type": "Question", "name": "When is the best time to take a Danube River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "The best time depends on your travel preferences. Spring (May) and autumn (September to October) offer pleasant weather and fewer crowds, while late November and December are highly popular for the festive Christmas Markets." } },
                    { "@type": "Question", "name": "Are shore excursions included in the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Daily guided shore excursions are included. Guests can choose from classic city tours, active options like hiking and biking, and exclusive \"Go Active\" or \"Do as the Locals Do\" experiences." } },
                    { "@type": "Question", "name": "Are beverages and alcohol included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Uniworld features an open bar throughout the cruise, including unlimited premium spirits, regional wines, beer, soft drinks, specialty coffee, and bottled water." } },
                    { "@type": "Question", "name": "Does Uniworld include tips/gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All onboard and onshore gratuities for ship crew, local guides, and drivers are included in your cruise fare." } },
                    { "@type": "Question", "name": "Is Wi-Fi included on the ship?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is available throughout the ship for all guests." } },
                    { "@type": "Question", "name": "Can I extend my cruise with a land package?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Uniworld offers pre- and post-cruise land extensions in major cities like Prague, Vienna, Budapest, and Munich, which include luxury hotels, guided tours, and transfers." } },
                    { "@type": "Question", "name": "Who is the typical guest on a Uniworld Danube Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Guests are typically luxury travelers, couples, active seniors, history and culture enthusiasts, and families celebrating milestone events. The experience is best suited for adults and children over the age of four." } },
                    { "@type": "Question", "name": "Why should I book my Uniworld cruise with Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel offers expert advice, exclusive promotions, custom pre- and post-cruise planning, and personal concierge service to ensure your Danube River Cruise is planned to perfection." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Danube River Cruises: Best Itineraries, Prices & Expert Guide</title>
                <meta name="title" content="Uniworld Danube River Cruises | Luxury Danube Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Danube River Cruise? Discover the best itineraries, destinations, pricing, what's included, reviews, and whether a luxury Danube cruise is worth it."
                />
                <meta name="keywords" content="Uniworld Danube River Cruises, Uniworld Danube River Cruise, Luxury Danube River Cruises, Best Danube River Cruise, Danube River Cruise Reviews, Vienna Budapest River Cruise, Luxury European River Cruises, Danube Christmas Market Cruise" />
                <script type="application/ld+json">
                    {JSON.stringify(danubeSchemaData)}
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
                            <span>Uniworld Danube River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Danube River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Experience Europe's Most Iconic Capitals in Boutique Luxury
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to='/contact' className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (MATCHED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">DISCOVER THE DANUBE</span>
                                <h2 className="fcel-section-heading">Experience Europe's Most Iconic Capitals in Boutique Luxury</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Flowing through ten countries, the Danube River is one of Europe's most celebrated waterways, connecting magnificent capitals, charming villages, UNESCO World Heritage Sites, and centuries of history. A Uniworld Danube River Cruise offers an elegant way to experience this legendary river aboard luxurious boutique ships with exceptional service, gourmet dining, and immersive cultural experiences.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    From the imperial grandeur of Vienna and Budapest to the picturesque Wachau Valley and charming medieval towns, every day introduces breathtaking scenery and unforgettable discoveries.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're planning your first European river cruise or returning to explore new destinations, the Danube is one of Uniworld's most rewarding itineraries.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <DanubePlaceholder label="Uniworld Ship in Budapest / Danube River" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Boutique Luxury River Cruise</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    A Uniworld Danube River Cruise combines boutique accommodations, gourmet dining, immersive excursions, and exceptional personalized service along Europe's most legendary waterway.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (MATCHED) */}
                <section className="urcr-quick-answer-section">
                    <div className="urcr-quick-answer-container">
                        <div className="urcr-quick-answer-card">
                            <h3 className="urcr-quick-answer-title">Quick Answer: Is a Uniworld Danube River Cruise Worth It?</h3>
                            <p className="urcr-quick-answer-text">
                                Yes. A Uniworld Danube River Cruise combines boutique luxury, all-inclusive amenities, award-winning dining, and expertly curated excursions to create one of Central Europe's finest river cruise experiences. It's ideal for travelers seeking history, culture, scenic landscapes, and personalized service in one seamless vacation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATING SECTION (MATCHED) */}
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

                {/* CTA 1 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Danube Itineraries</span>
                        <p className="urcr-inline-cta-text">Want help choosing the right Uniworld Danube River Cruise itinerary?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Speak to a Travel Advisor
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A DANUBE RIVER CRUISE (CUSTOM udrc- highlights layout) */}
                <section className="udrc-highlights-section">
                    <div className="udrc-highlights-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Choose a Danube River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                The Danube offers an incredible variety of destinations, cultures, and experiences in one journey.
                            </p>
                        </div>
                        <div className="udrc-highlights-grid">
                            {danubeHighlights.map((item, idx) => (
                                <div key={idx} className="udrc-highlight-card">
                                    <div className="udrc-highlight-icon-wrap">
                                        {item.icon}
                                    </div>
                                    <h4 className="udrc-highlight-title">{item.name}</h4>
                                </div>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '800px', margin: '40px auto 0' }}>
                            Every port offers a unique blend of history, architecture, cuisine, and culture.
                        </p>
                    </div>
                </section>

                {/* WHAT IS INCLUDED (CUSTOM udrc- included grid layout) */}
                <section className="udrc-included-section">
                    <div className="udrc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">
                                <CheckCircle size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                What's Included?
                            </span>
                            <h2 className="fcel-section-heading">Most Uniworld Danube River Cruises include:</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="udrc-included-list">
                            {danubeIncluded.map((item, idx) => (
                                <div key={idx} className="udrc-included-item">
                                    <CheckCircle size={18} className="udrc-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">All-Inclusive Luxury</span>
                        <p className="urcr-inline-cta-text">Ready to experience all-inclusive luxury on the Danube River?</p>
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

                {/* TOP DANUBE RIVER DESTINATIONS (CUSTOM udrc- destinations grid layout) */}
                <section className="udrc-dest-section">
                    <div className="udrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">IMPERIAL CITIES & VALLEYS</span>
                            <h2 className="fcel-section-heading">Top Danube River Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                A Danube River Cruise visits some of Europe's most iconic cities and towns.
                            </p>
                        </div>
                        <div className="udrc-dest-grid">
                            {danubeDestinations.map((dest, idx) => (
                                <div key={idx} className="udrc-dest-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left' }}>
                                    <div style={{ height: '180px', width: '100%', position: 'relative', background: '#e2e8f0' }}>
                                        <DanubePlaceholder label={`${dest.name} View`} className="udrc-placeholder-card" />
                                        <div className="udrc-badge-overlay-gold" style={{ top: '15px', right: '15px', fontSize: '11px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            {dest.icon}
                                            <span>{dest.name}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '24px' }}>
                                        <h4 className="udrc-dest-name" style={{ margin: '0 0 10px 0' }}>{dest.name}</h4>
                                        <p className="udrc-dest-desc">{dest.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD (MATCHED DARK THEME — urcr-dining-dark-section) */}
                <section className="urcr-review-section urcr-dining-dark-section">
                    <div className="urcr-review-container">
                        <div className="urcr-dining-container">
                            <div className="urcr-image-wrapper-premium">
                                <div className="urcr-badge-overlay-gold">
                                    <Sparkles size={14} style={{ color: '#f1c40f' }} />
                                    <span>Gourmet Cuisine</span>
                                </div>
                                <DanubePlaceholder label="Fine Dining Onboard Uniworld Ship" />
                            </div>
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label urcr-eyebrow-shore">CULINARY EXCELLENCE</span>
                                <h2 className="urcr-review-title">Dining Onboard</h2>
                                <p className="fcel-lead-paragraph" style={{ color: 'white' }}>
                                    Dining is one of Uniworld's signature experiences. Menus reflect the destinations visited throughout the Danube region.
                                </p>
                                <div className="urcr-dining-menu-list">
                                    {danubeDining.map((item, idx) => (
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

                {/* CTA 3 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Culinary Experiences</span>
                        <p className="urcr-inline-cta-text">Want to experience Uniworld's award-winning onboard dining?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Speak to a Dining Specialist
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                View Menus & Wine Lists
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATIONS (MATCHED — urcr-cabins-container / urcr-cabin-feature-*) */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container">
                        <div className="urcr-cabins-container">
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label urcr-eyebrow-accommodations">BOUTIQUE RETREATS</span>
                                <h2 className="urcr-review-title" style={{ textAlign: "left" }}>Luxury Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Every stateroom features elegant European-inspired décor and premium amenities.
                                </p>
                                <div className="urcr-cabin-feature-grid">
                                    {danubeAccommodations.map((cabin, idx) => (
                                        <div key={idx} className="urcr-cabin-feature-card">
                                            <div className="urcr-cabin-card-icon">
                                                {cabin.icon}
                                            </div>
                                            <span className="urcr-cabin-card-text">{cabin.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="urcr-image-wrapper-premium">
                                <div className="urcr-badge-overlay-gold">
                                    <Bed size={14} style={{ color: '#f1c40f' }} />
                                    <span>Boutique Luxury Suites</span>
                                </div>
                                <DanubePlaceholder label="Uniworld Luxury Suite Stateroom" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE (CUSTOM udrc- seasons layout) */}
                <section className="udrc-season-section">
                    <div className="udrc-season-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise the Danube</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                The Danube is a spectacular year-round river cruise destination, offering unique charms in each season.
                            </p>
                        </div>
                        <div className="udrc-season-grid">
                            {danubeSeasons.map((season, idx) => (
                                <div key={idx} className="udrc-season-card">
                                    <div className="udrc-season-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="udrc-season-name">{season.title}</h4>
                                    <p className="udrc-season-desc">{season.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY? (CUSTOM udrc- layout) */}
                <section className="udrc-worth-section">
                    <div className="udrc-worth-container">
                        <span className="fcel-eyebrow-label">THE VERDICT</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Although Uniworld is a premium river cruise line, many guests find it offers exceptional value.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ marginBottom: 0 }}>
                            Your fare includes luxury accommodations, gourmet dining, unlimited beverages, excursions, gratuities, and attentive service—making it one of the most inclusive ways to explore Central Europe.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="urcr-pros-section urcr-bg-white">
                    <div className="urcr-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#fafbfe', color: 'var(--urcr-navy)' }}>PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="udrc-comparison-board">
                            {/* Pros Panel */}
                            <div className="udrc-pros-panel">
                                <h3 className="udrc-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="udrc-panel-list">
                                    {danubePros.map((pro, idx) => (
                                        <div key={idx} className="udrc-list-item">
                                            <div className="udrc-item-icon-wrap pro-icon">
                                                {pro.icon}
                                            </div>
                                            <div className="udrc-item-content">
                                                <h4 className="udrc-item-title">{pro.title}</h4>
                                                <p className="udrc-item-desc">{pro.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="udrc-cons-panel">
                                <h3 className="udrc-panel-title cons-title">
                                    <AlertTriangle size={22} style={{ color: '#ef4444' }} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="udrc-panel-list">
                                    {danubeCons.map((con, idx) => (
                                        <div key={idx} className="udrc-list-item">
                                            <div className="udrc-item-icon-wrap con-icon">
                                                <XCircle size={18} />
                                            </div>
                                            <div className="udrc-item-content">
                                                <h4 className="udrc-item-title">{con.title}</h4>
                                                <p className="udrc-item-desc">{con.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TARGET AUDIENCE GRID (MATCHED — urcr-audience-*) */}
                <section className="urcr-audience-section">
                    <div className="urcr-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label urcr-eyebrow-audience">TRAVEL PLANNING</span>
                            <h2 className="fcel-section-heading">Who Is It For?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="urcr-audience-grid">
                            <div className="urcr-audience-column urcr-audience-green">
                                <h3 className="urcr-audience-title">Who Should Book a Cruise and Rail Journey?</h3>
                                <ul className="urcr-audience-list">
                                    {danubeWhoShould.map((item, idx) => (
                                        <li key={idx} className="urcr-audience-item">
                                            <CheckCircle size={18} className="urcr-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="urcr-audience-column urcr-audience-red">
                                <h3 className="urcr-audience-title">Who May Prefer Another</h3>
                                <ul className="urcr-audience-list">
                                    {danubeWhoPrefer.map((item, idx) => (
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

                {/* CTA 4 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Rates & Promotions</span>
                        <p className="urcr-inline-cta-text">Ready to check rates, promotions, and cabin availability on the Danube?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Get a Custom Quote
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Request Cabin Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS (CUSTOM udrc- numbered tips layout) */}
                <section className="udrc-tips-section">
                    <div className="udrc-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">EXPERT ADVICE</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <ul className="udrc-tips-list">
                            {danubePlanningTips.map((tip, idx) => (
                                <li key={idx} className="udrc-tips-item">
                                    <Info size={20} className="udrc-tips-icon" />
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL? (NEW STAGGERED FLOW LAYOUT) */}
                <section className="udrc-why-book-section">
                    <div className="udrc-why-book-container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: 'var(--urcr-bg-soft)', color: 'var(--urcr-navy)' }}>THE PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="udrc-why-book-flow">
                            {/* Feature Left Card */}
                            <div className="udrc-why-book-featured-card">
                                <div className="udrc-featured-badge" style={{ backgroundColor: 'var(--urcr-navy)', borderColor: 'white' }}>
                                    <Sparkles size={14} style={{ color: 'white' }} />
                                    <span style={{ color: 'white' }}>CONCIERGE-LEVEL SERVICE</span>
                                </div>
                                <h3 className="udrc-featured-title">
                                    Provide concierge-level service before, during, and after your vacation
                                </h3>
                                <p className="udrc-featured-desc">
                                    Our dedicated travel advisors coordinate every detail of your journey, ensuring a seamless and fully personalized luxury river cruise experience.
                                </p>
                            </div>

                            {/* Staggered Right List */}
                            <div className="udrc-why-book-vertical-list">
                                {danubeWhyBook.slice(0, 6).map((item, idx) => (
                                    <div key={idx} className="udrc-vertical-list-item">
                                        <div className="udrc-vertical-item-bullet">
                                            <div className="udrc-bullet-inner">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="udrc-vertical-item-content">
                                            <h4 className="udrc-vertical-item-title">{item.title}</h4>
                                            <p className="udrc-vertical-item-desc">
                                                Our advisors provide expert planning services for luxury Danube River cruises to ensure an exceptional vacation.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION (CUSTOM udrc- verdict text layout) */}
                <section className="udrc-recommendation-section">
                    <div className="udrc-recommendation-container">
                        <span className="fcel-eyebrow-label urcr-eyebrow-verdict">SUMMARY Verdict</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ marginBottom: 0 }}>
                            A Uniworld Danube River Cruise is one of Europe's finest luxury vacations. Combining iconic cities, breathtaking scenery, exceptional dining, and personalized service, it delivers an unforgettable journey through the heart of Europe. Whether you're celebrating a special occasion or simply fulfilling a travel dream, the Danube offers timeless experiences in unmatched comfort.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION (MATCHED Accordion list) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                           
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {danubeFaqs.map((faq, idx) => {
                                const isOpen = danubeActiveFaq === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="fcel-faq-item"
                                        onClick={() => danubeToggleFaq(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <div className="fcel-faq-question-row">
                                            <span>{faq.question}</span>
                                            <span className="fcel-faq-toggle">
                                                {isOpen ? '−' : '+'}
                                            </span>
                                        </div>
                                        {isOpen && (
                                            <div className="fcel-faq-answer">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FINAL BOTTOM CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-container">
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld Danube River Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury travel specialists to compare Danube itineraries, choose the best ship and suite, and coordinate every detail of your journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Call
                            </Link>
                            <Link to="/contact" className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Information
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Uniworlddanuberivercruises
