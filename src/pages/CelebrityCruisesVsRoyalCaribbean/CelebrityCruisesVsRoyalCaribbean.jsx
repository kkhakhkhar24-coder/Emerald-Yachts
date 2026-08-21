// CelebrityCruisesVsRoyalCaribbean.jsx
import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruisesVsRoyalCaribbean.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon, Coffee, Salad, Fish, Soup, PartyPopper,
    Leaf, Shirt, ListChecks, Building, Tent, Waves, Sofa,
    Dumbbell, Ticket, UsersRound, Ship as ShipIcon, Armchair,
    Waves as WavesIcon, Dock, Anchor as AnchorIcon,
    Binoculars, Mountain, TreePalm, Compass as CompassIcon,
    Map as MapIcon, Glasses, Baby, Sailboat, Castle
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CcdPlaceholder({ label, className = '' }) {
    return (
        <div className={`cvrc-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityCruisesVsRoyalCaribbean() {
    const [cvrcActiveFaq, setCvrcActiveFaq] = useState(null)
    const cvrcToggleFaq = i => setCvrcActiveFaq(cvrcActiveFaq === i ? null : i)
    const [cvrcShowMore, setCvrcShowMore] = useState(false)

    // ── TABLE: At a Glance ──
    const cvrcGlanceTable = [
        { category: 'Overall atmosphere', celebrity: 'Contemporary and upscale', royal: 'Energetic and activity-focused' },
        { category: 'Best suited to', celebrity: 'Couples, adults, multigenerational travelers', royal: 'Families, groups, couples and active travelers' },
        { category: 'Ship experience', celebrity: 'Stylish spaces with emphasis on relaxation', royal: 'Large ships packed with entertainment and attractions' },
        { category: 'Dining', celebrity: 'Strong emphasis on contemporary dining', royal: 'Wide range of restaurants and casual venues' },
        { category: 'Entertainment', celebrity: 'Shows, live music and destination-focused experiences', royal: 'Large-scale shows, activities and entertainment' },
        { category: 'Family activities', celebrity: 'Available, but generally less central', royal: 'Major focus on many ships' },
        { category: 'Adventure attractions', celebrity: 'More limited', royal: 'Extensive on many newer ships' },
        { category: 'Adults seeking quiet time', celebrity: 'Strong fit', royal: 'Available, although ships can feel busier' },
        { category: 'Luxury-style options', celebrity: 'The Retreat', royal: 'Suite accommodations and premium experiences' },
        { category: 'Destination focus', celebrity: 'Strong emphasis on the overall travel experience', royal: 'Combines destinations with extensive onboard activity' },
        { category: 'Cruise style', celebrity: 'Relaxed, modern and refined', royal: 'Active, lively and feature-rich' }
    ]

    // ── Celebrity Preference List ──
    const cvrcCelebrityPrefers = [
        'A more relaxed and contemporary atmosphere',
        'Sophisticated public spaces',
        'Couples-focused vacations',
        'Upscale dining and experiences',
        'A balance between ship time and port exploration',
        'A quieter overall cruise environment'
    ]

    // ── Royal Preference List ──
    const cvrcRoyalPrefers = [
        'Lots of activities throughout the day',
        'Large, resort-style ships',
        'Family entertainment',
        'Adventure attractions',
        'Extensive choices for children and teenagers',
        'A lively atmosphere with plenty happening onboard'
    ]

    // ── Celebrity Ship Design ──
    const cvrcCelebrityShipDesign = [
        'Contemporary architecture',
        'Open and stylish public spaces',
        'Restaurants and lounges designed around the overall atmosphere',
        'Relaxation areas',
        'Destination-oriented experiences',
        'Premium accommodation options'
    ]

    // ── Royal Ship Design ──
    const cvrcRoyalShipDesign = [
        'Water slides',
        'Surf simulators',
        'Rock-climbing walls',
        'Zip lines',
        'Sports areas',
        'Large theaters',
        'Ice-skating venues',
        'Family activity zones',
        'Multiple pools and outdoor recreation areas'
    ]

    // ── Family: Royal ──
    const cvrcRoyalFamily = [
        'Lots of children\'s activities',
        'Teen-oriented spaces',
        'Adventure attractions',
        'Large pools and recreation areas',
        'Family entertainment',
        'Plenty to do without leaving the ship'
    ]

    // ── Family: Celebrity ──
    const cvrcCelebrityFamily = [
        'A more relaxed environment',
        'A sophisticated ship experience',
        'Multigenerational travel',
        'More emphasis on dining and destinations',
        'Parents who want adults-oriented spaces alongside family facilities'
    ]

    // ── Couples: Celebrity ──
    const cvrcCelebrityCouples = [
        'Relaxation',
        'Contemporary design',
        'Upscale experiences',
        'Dining-focused vacations',
        'A less activity-heavy atmosphere'
    ]

    // ── Couples: Royal ──
    const cvrcRoyalCouples = [
        'Adventure',
        'Nightlife',
        'Shows',
        'Sports and activities',
        'Large-ship entertainment',
        'A lively vacation environment'
    ]

    // ── Dining Considerations ──
    const cvrcDiningConsiderations = [
        'Which restaurants are included in your fare.',
        'Which specialty restaurants interest you.',
        'Specialty dining prices.',
        'Dining package options.',
        'Your preferred meal times.',
        'Whether your particular ship has the restaurants you want.'
    ]

    // ── Cabin Types ──
    const cvrcCabinTypes = [
        'Interior cabins',
        'Ocean-view cabins',
        'Balcony cabins',
        'Suites',
        'Specialty accommodation categories'
    ]

    // ── Cabin Comparison ──
    const cvrcCabinCompare = [
        'Cabin size',
        'Balcony size',
        'Location',
        'Included benefits',
        'Dining access',
        'Beverage options',
        'Wi-Fi',
        'Gratuities',
        'Suite benefits',
        'Cancellation terms'
    ]

    // ── Activity Preference ──
    const cvrcActivityPref = [
        { activity: 'Water attractions', better: 'Royal Caribbean' },
        { activity: 'Adventure activities', better: 'Royal Caribbean' },
        { activity: 'Family activities', better: 'Royal Caribbean' },
        { activity: 'Relaxation', better: 'Celebrity' },
        { activity: 'Upscale lounges', better: 'Celebrity' },
        { activity: 'Wellness-focused vacation', better: 'Celebrity' },
        { activity: 'Destination exploration', better: 'Both' },
        { activity: 'Nightlife and large-scale entertainment', better: 'Royal Caribbean' },
        { activity: 'Quiet time at sea', better: 'Celebrity' }
    ]

    // ── Itinerary Details ──
    const cvrcItineraryDetails = [
        'Number of sea days',
        'Port arrival and departure times',
        'Number of ports',
        'Overnight stays',
        'Port distance from major attractions',
        'Seasonal weather',
        'Shore excursion options',
        'Embarkation and disembarkation ports'
    ]

    // ── Cost Factors ──
    const cvrcCostFactors = [
        'Ship',
        'Sailing date',
        'Cabin category',
        'Itinerary',
        'Season',
        'Occupancy',
        'Promotions',
        'Included packages',
        'Demand'
    ]

    // ── Total Cost Considerations ──
    const cvrcTotalCost = [
        'Cruise fare',
        'Taxes and fees',
        'Gratuities',
        'Drinks',
        'Wi-Fi',
        'Specialty dining',
        'Shore excursions',
        'Transfers',
        'Flights',
        'Hotel nights',
        'Travel insurance'
    ]

    // ── Before Booking ──
    const cvrcBeforeBooking = [
        'Is Wi-Fi included?',
        'Are drinks included?',
        'Are gratuities included?',
        'Which restaurants are included?',
        'What cabin benefits apply?',
        'Are there cancellation penalties?',
        'Are specialty services excluded?'
    ]

    // ── Choice Guide ──
    const cvrcChoiceGuide = [
        { Icon: CompassIcon, label: 'Pick Celebrity Cruises if you prioritize:', items: ['Contemporary design', 'Relaxation', 'Dining', 'Premium experiences', 'Couples\' vacations', 'A more refined atmosphere', 'Destination exploration'] },
        { Icon: ShipIcon, label: 'Pick Royal Caribbean if you prioritize:', items: ['Family entertainment', 'Adventure', 'Large ships', 'Water attractions', 'Activities', 'Shows', 'Teen and children\'s experiences', 'A lively atmosphere'] }
    ]

    // ── Comparison Table ──
    const cvrcComparisonTable = [
        { factor: 'Ship', compare: 'Exact ship and ship class' },
        { factor: 'Cabin', compare: 'Category, size and location' },
        { factor: 'Fare', compare: 'Total price and inclusions' },
        { factor: 'Dining', compare: 'Included and specialty options' },
        { factor: 'Drinks', compare: 'Package requirements and exclusions' },
        { factor: 'Wi-Fi', compare: 'Included or additional' },
        { factor: 'Gratuities', compare: 'Included or extra' },
        { factor: 'Entertainment', compare: 'Shows and onboard activities' },
        { factor: 'Family features', compare: 'Kids and teen facilities' },
        { factor: 'Itinerary', compare: 'Ports, sea days and timings' },
        { factor: 'Embarkation', compare: 'Airport and transfer convenience' },
        { factor: 'Shore excursions', compare: 'Available experiences and prices' }
    ]

    // ── Key Takeaways ──
    const cvrcKeyTakeaways = [
        'Celebrity Cruises generally focuses on a contemporary, premium and more relaxed cruise experience.',
        'Royal Caribbean is particularly strong for activities, entertainment, families and large-ship attractions.',
        'Celebrity can be a strong fit for couples and travelers who prioritize dining, relaxation and destination experiences.',
        'Royal Caribbean can be a strong fit for families, groups and active travelers who want extensive onboard activities.',
        'Both cruise lines offer multiple cabin categories, dining choices and itineraries.',
        'The exact ship matters because facilities and experiences vary significantly across fleets.',
        'Compare the total trip cost, including packages and optional extras—not just the advertised cruise fare.',
        'For the most useful comparison, match two ships with similar itineraries and dates.'
    ]

    // ── Internal Links ──
    const cvrcInternalLinks = [
        { text: 'Celebrity Cruises Complete Guide', url: '/celebrity-cruises' },
        { text: 'Celebrity Cruises Ships', url: '/celebrity-cruises/ships' },
        { text: 'Celebrity Food and Dining Guide', url: '/celebrity-cruises/food-dining' },
        { text: 'Celebrity Cruises Drink Packages', url: '/celebrity-cruises/drink-packages' },
        { text: 'Celebrity All Included Explained', url: '/celebrity-cruises/all-included' },
        { text: 'Celebrity The Retreat', url: '/celebrity-cruises/the-retreat' },
        { text: 'Celebrity Edge Series Ships', url: '/celebrity-cruises/edge-series' },
        { text: 'Celebrity Cruises FAQs', url: '/celebrity-cruises/faqs' }
    ]

    // ── FAQs ──
    const cvrcFaqs = [
        { question: 'Is Celebrity Cruises better than Royal Caribbean?', answer: 'Celebrity Cruises may be better for travelers who prefer a contemporary, upscale and relaxed atmosphere. Royal Caribbean may be better for travelers who prioritize activities, entertainment, family attractions and large-ship experiences.' },
        { question: 'Is Royal Caribbean or Celebrity better for families?', answer: 'Royal Caribbean is generally the stronger choice for families seeking extensive children\'s activities, teen facilities, adventure attractions and entertainment. Celebrity can suit families who prefer a quieter, more relaxed cruise.' },
        { question: 'Is Celebrity Cruises more upscale than Royal Caribbean?', answer: 'Celebrity Cruises is positioned as a premium contemporary cruise brand, while Royal Caribbean has a broader mainstream resort-style positioning with extensive onboard attractions. Both offer premium accommodation options.' },
        { question: 'Which is better for couples, Celebrity or Royal Caribbean?', answer: 'Celebrity can be particularly appealing to couples seeking relaxation, dining and a sophisticated atmosphere. Royal Caribbean can suit couples who prefer adventure, activities, nightlife and large-scale entertainment.' },
        { question: 'Which cruise line has better entertainment, Celebrity or Royal Caribbean?', answer: 'Royal Caribbean generally offers a broader range of large-ship entertainment and activities, although the exact offerings depend on the ship. Celebrity also provides shows, live entertainment and onboard activities.' },
        { question: 'Which has better dining, Celebrity or Royal Caribbean?', answer: 'Both offer included and specialty dining, but Celebrity places strong emphasis on contemporary dining and premium experiences. The best choice depends on the restaurants and dining inclusions available on the specific ship and sailing.' },
        { question: 'Is Celebrity Cruises quieter than Royal Caribbean?', answer: 'Celebrity generally has a more relaxed overall atmosphere. Royal Caribbean ships can feel more energetic because many vessels feature extensive activities, entertainment and family attractions.' },
        { question: 'Which has bigger cruise ships, Celebrity or Royal Caribbean?', answer: 'Royal Caribbean operates some of the largest cruise ships in the industry. Celebrity also operates large modern ships, but its fleet is generally less focused on maximum ship size and onboard attractions.' },
        { question: 'Which is better for teenagers, Celebrity or Royal Caribbean?', answer: 'Royal Caribbean is often a strong choice for teenagers because many ships offer dedicated youth spaces, sports, entertainment and adventure activities. Facilities vary by ship.' },
        { question: 'Does Celebrity Cruises have activities like Royal Caribbean?', answer: 'Celebrity offers pools, entertainment, wellness, fitness, destination activities and other onboard experiences. Royal Caribbean generally offers a larger selection of high-energy attractions, depending on the ship.' },
        { question: 'Is Celebrity Cruises good for first-time cruisers?', answer: 'Yes. Celebrity can be a good option for first-time cruisers who prefer contemporary design, dining, relaxation and destination-focused travel. The best choice also depends on the itinerary and ship.' },
        { question: 'Which is cheaper, Celebrity Cruises or Royal Caribbean?', answer: 'Neither cruise line is consistently cheaper. Prices vary by ship, itinerary, sailing date, cabin, demand and promotions. Compare the total fare and included benefits for the specific cruises you are considering.' },
        { question: 'Does Celebrity Cruises include drinks and Wi-Fi?', answer: 'Some Celebrity fare options and promotions include benefits such as drinks or Wi-Fi, while other fares may not. Always check the inclusions attached to the specific booking before purchasing.' },
        { question: 'Can you compare Celebrity The Retreat with Royal Caribbean suites?', answer: 'Yes. Celebrity\'s The Retreat provides a premium suite experience, while Royal Caribbean offers multiple suite categories with benefits that vary by ship and suite type. Compare the complete inclusions as well as the cabin.' },
        { question: 'Should I choose Celebrity or Royal Caribbean for a Caribbean cruise?', answer: 'Choose Celebrity if you prefer a more relaxed and contemporary Caribbean vacation. Choose Royal Caribbean if you want a highly active ship experience with extensive entertainment and attractions. The itinerary and exact ship should also influence the decision.' }
    ]

    // ── Schema Data ──
    const cvrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips and Ships",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean",
                "name": "Celebrity Cruises vs. Royal Caribbean",
                "description": "Compare Celebrity Cruises vs. Royal Caribbean on ships, dining, activities, cabins, service, pricing, family appeal and overall cruise experience.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#article",
                "headline": "Celebrity Cruises vs. Royal Caribbean",
                "description": "A practical comparison of Celebrity Cruises and Royal Caribbean covering ships, dining, cabins, activities, entertainment, families, couples and cruise costs.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises vs. Royal Caribbean", "item": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Celebrity Cruises better than Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Cruises may be better for travelers who prefer a contemporary, upscale and relaxed atmosphere. Royal Caribbean may be better for travelers who prioritize activities, entertainment, family attractions and large-ship experiences." } },
                    { "@type": "Question", "name": "Is Royal Caribbean or Celebrity better for families?", "acceptedAnswer": { "@type": "Answer", "text": "Royal Caribbean is generally the stronger choice for families seeking extensive children's activities, teen facilities, adventure attractions and entertainment. Celebrity can suit families who prefer a quieter, more relaxed cruise." } },
                    { "@type": "Question", "name": "Is Celebrity Cruises more upscale than Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Cruises is positioned as a premium contemporary cruise brand, while Royal Caribbean has a broader mainstream resort-style positioning with extensive onboard attractions. Both offer premium accommodation options." } },
                    { "@type": "Question", "name": "Which is better for couples, Celebrity or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity can be particularly appealing to couples seeking relaxation, dining and a sophisticated atmosphere. Royal Caribbean can suit couples who prefer adventure, activities, nightlife and large-scale entertainment." } },
                    { "@type": "Question", "name": "Which cruise line has better entertainment, Celebrity or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Royal Caribbean generally offers a broader range of large-ship entertainment and activities, although the exact offerings depend on the ship. Celebrity also provides shows, live entertainment and onboard activities." } },
                    { "@type": "Question", "name": "Which has better dining, Celebrity or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer included and specialty dining, but Celebrity places strong emphasis on contemporary dining and premium experiences. The best choice depends on the restaurants and dining inclusions available on the specific ship and sailing." } },
                    { "@type": "Question", "name": "Is Celebrity Cruises quieter than Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity generally has a more relaxed overall atmosphere. Royal Caribbean ships can feel more energetic because many vessels feature extensive activities, entertainment and family attractions." } },
                    { "@type": "Question", "name": "Which has bigger cruise ships, Celebrity or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Royal Caribbean operates some of the largest cruise ships in the industry. Celebrity also operates large modern ships, but its fleet is generally less focused on maximum ship size and onboard attractions." } },
                    { "@type": "Question", "name": "Which is better for teenagers, Celebrity or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Royal Caribbean is often a strong choice for teenagers because many ships offer dedicated youth spaces, sports, entertainment and adventure activities. Facilities vary by ship." } },
                    { "@type": "Question", "name": "Does Celebrity Cruises have activities like Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity offers pools, entertainment, wellness, fitness, destination activities and other onboard experiences. Royal Caribbean generally offers a larger selection of high-energy attractions, depending on the ship." } },
                    { "@type": "Question", "name": "Is Celebrity Cruises good for first-time cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity can be a good option for first-time cruisers who prefer contemporary design, dining, relaxation and destination-focused travel. The best choice also depends on the itinerary and ship." } },
                    { "@type": "Question", "name": "Which is cheaper, Celebrity Cruises or Royal Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Neither cruise line is consistently cheaper. Prices vary by ship, itinerary, sailing date, cabin, demand and promotions. Compare the total fare and included benefits for the specific cruises you are considering." } },
                    { "@type": "Question", "name": "Does Celebrity Cruises include drinks and Wi-Fi?", "acceptedAnswer": { "@type": "Answer", "text": "Some Celebrity fare options and promotions include benefits such as drinks or Wi-Fi, while other fares may not. Always check the inclusions attached to the specific booking before purchasing." } },
                    { "@type": "Question", "name": "Can you compare Celebrity The Retreat with Royal Caribbean suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity's The Retreat provides a premium suite experience, while Royal Caribbean offers multiple suite categories with benefits that vary by ship and suite type. Compare the complete inclusions as well as the cabin." } },
                    { "@type": "Question", "name": "Should I choose Celebrity or Royal Caribbean for a Caribbean cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Choose Celebrity if you prefer a more relaxed and contemporary Caribbean vacation. Choose Royal Caribbean if you want a highly active ship experience with extensive entertainment and attractions. The itinerary and exact ship should also influence the decision." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Cruises vs. Royal Caribbean</title>
                <meta name="title" content="Celebrity Cruises vs. Royal Caribbean" />
                <meta name="description" content="Compare Celebrity Cruises vs. Royal Caribbean on ships, dining, activities, cabins, service, pricing, family appeal and overall cruise experience." />
                <meta name="keywords" content="Celebrity Cruises vs Royal Caribbean, Celebrity vs Royal Caribbean, Celebrity Cruises or Royal Caribbean, Celebrity Cruises comparison, Royal Caribbean vs Celebrity Cruises, best cruise line for families, best cruise line for couples, Celebrity cruise ships, Royal Caribbean ships" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/celebrity-vs-royal-caribbean" />
                <script type="application/ld+json">{JSON.stringify(cvrcSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="cvrc-page">

                {/* ── HERO ── */}
                <section className="cvrc-hero-section">
                    <CcdPlaceholder label="Celebrity and Royal Caribbean cruise ships comparison" className="cvrc-hero-bg-placeholder" />
                    <div className="cvrc-hero-overlay-layer"></div>
                    <div className="cvrc-hero-content-wrapper">
                        <div className="cvrc-hero-eyebrow-tag">
                            <Compass size={16} />
                            <span>Cruise Line Comparison · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="cvrc-hero-main-title">Celebrity Cruises <br />vs. Royal Caribbean</h1>
                        <p className="cvrc-hero-subtitle-text">
                            Choosing between Celebrity Cruises and Royal Caribbean often comes down to the type of vacation you want. Both are major cruise brands with extensive itineraries, modern ships, multiple dining options and a wide range of cabins, but their onboard experiences are designed around different priorities.
                        </p>
                        {cvrcShowMore && (
                            <>
                                <p className="cvrc-hero-subtitle-text" style={{ marginTop: '12px' }}>
                                    Celebrity Cruises generally emphasizes a more contemporary, upscale atmosphere, sophisticated dining and a relaxed approach to cruising. Royal Caribbean is particularly known for large ships, extensive entertainment, family-oriented activities and attractions designed to keep passengers busy throughout the voyage.
                                </p>
                                <p className="cvrc-hero-subtitle-text" style={{ marginTop: '12px', fontWeight: 600 }}>
                                    Neither cruise line is universally better. The better choice depends on whether you prioritize relaxation and an upscale atmosphere or activities, entertainment and family-friendly features.
                                </p>
                            </>
                        )}
                        <button
                            className="cvrc-hero-readmore-btn"
                            onClick={() => setCvrcShowMore(!cvrcShowMore)}
                            aria-expanded={cvrcShowMore}
                        >
                            {cvrcShowMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </section>

                {/* ── AT A GLANCE ── */}
                <section className="cvrc-glance-section">
                    <div className="cvrc-glance-container">
                        <span className="cvrc-eyebrow cvrc-eyebrow-center">COMPARISON OVERVIEW</span>
                        <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises vs. Royal Caribbean at a Glance</h2>
                        <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                        <p className="cvrc-glance-note" style={{ textAlign: 'center', marginBottom: '24px', fontStyle: 'italic', fontSize: '14px' }}>Ship features, venues, itineraries and inclusions vary by ship, sailing and fare.</p>

                        <div className="cvrc-table-wrapper">
                            <div className="cvrc-table-row cvrc-table-head cvrc-table-three-col">
                                <span>Category</span>
                                <span>Celebrity Cruises</span>
                                <span>Royal Caribbean</span>
                            </div>
                            {cvrcGlanceTable.map((row, idx) => (
                                <div key={idx} className="cvrc-table-row cvrc-table-three-col">
                                    <span data-label="Category">{row.category}</span>
                                    <span data-label="Celebrity Cruises">{row.celebrity}</span>
                                    <span data-label="Royal Caribbean">{row.royal}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BIGGEST DIFFERENCE ── */}
                <section className="cvrc-biggest-section">
                    <div className="cvrc-biggest-container">
                        <div className="cvrc-biggest-grid">
                            <div className="cvrc-biggest-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0, color: '#93c5fd', opacity: 1 }}>THE CORE DIFFERENCE</span>
                                <h2 className="cvrc-section-heading" style={{ color: '#ffffff', marginBottom: '16px' }}>The Biggest Difference Between Celebrity and Royal Caribbean</h2>
                                <div className="cvrc-heading-separator-bar" style={{ background: '#93c5fd', margin: '0 0 20px 0' }}></div>
                                <p className="cvrc-biggest-intro" style={{ color: '#ffffff', marginBottom: '20px' }}>The simplest way to understand the difference is to think about how you want to spend your time at sea.</p>
                                <p className="cvrc-biggest-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>Celebrity Cruises tends to make the ship itself feel like an extension of a stylish vacation. Its design, dining and service approach are intended to create a polished environment where passengers can relax between ports.</p>
                                <p className="cvrc-biggest-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>Royal Caribbean takes a different approach on many of its ships. Large vessels can function almost like floating entertainment destinations, with numerous activities, sports facilities, shows, pools and other attractions.</p>
                            </div>

                            <div className="cvrc-biggest-prefs">
                                <div className="cvrc-biggest-pref-card">
                                    <div className="cvrc-biggest-pref-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        <div className="cvrc-biggest-pref-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Gem size={18} />
                                        </div>
                                        <h4 style={{ color: '#ffffff', margin: 0 }}>Choose Celebrity if you prefer:</h4>
                                    </div>
                                    <div className="cvrc-biggest-pref-list">
                                        {cvrcCelebrityPrefers.map((item, idx) => (
                                            <div key={idx} className="cvrc-biggest-pref-item">
                                                <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="cvrc-biggest-pref-card">
                                    <div className="cvrc-biggest-pref-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        <div className="cvrc-biggest-pref-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ShipIcon size={18} />
                                        </div>
                                        <h4 style={{ color: '#ffffff', margin: 0 }}>Choose Royal Caribbean if you prefer:</h4>
                                    </div>
                                    <div className="cvrc-biggest-pref-list">
                                        {cvrcRoyalPrefers.map((item, idx) => (
                                            <div key={idx} className="cvrc-biggest-pref-item">
                                                <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SHIPS ── */}
                <section className="cvrc-ships-section">
                    <div className="cvrc-ships-container">
                        <div className="cvrc-ships-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-center">FLEET COMPARISON</span>
                            <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises vs. <br /> Royal Caribbean Ships</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                            <p className="cvrc-ships-intro" style={{ maxWidth: '720px', margin: '0 auto 16px' }}>The ships themselves are one of the most important differences.</p>
                            <p className="cvrc-ships-sub" style={{ maxWidth: '720px', margin: '0 auto' }}>Celebrity's fleet includes ships from several generations, with the Edge Series particularly notable for its modern design and distinctive outdoor and indoor spaces. Royal Caribbean operates several ship classes, including some of the largest cruise ships in the world.</p>
                        </div>

                        <div className="cvrc-ships-grid">
                            <div className="cvrc-ship-card">
                                <div className="cvrc-ship-card-header">
                                    <Gem size={22} style={{ color: 'var(--cvrc-navy)' }} />
                                    <h3 style={{ fontSize: '22px', margin: 0 }}>Celebrity's Ship Design</h3>
                                </div>
                                <p className="cvrc-ship-card-sub" style={{ fontWeight: 600, marginBottom: '10px' }}>Celebrity ships generally emphasize:</p>
                                <div className="cvrc-ship-card-list">
                                    {cvrcCelebrityShipDesign.map((item, idx) => (
                                        <div key={idx} className="cvrc-ship-card-item">
                                            <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvrc-ship-card-note" style={{ fontSize: '13px', fontStyle: 'italic', marginTop: '12px', color: 'var(--cvrc-text-body)' }}>The Edge Series is especially recognizable for its modern design and features such as the Magic Carpet, an externally mounted platform that moves between decks.</p>
                            </div>

                            <div className="cvrc-ship-card">
                                <div className="cvrc-ship-card-header">
                                    <ShipIcon size={22} style={{ color: 'var(--cvrc-navy)' }} />
                                    <h3 style={{ fontSize: '22px', margin: 0 }}>Royal Caribbean's Ship Design</h3>
                                </div>
                                <p className="cvrc-ship-card-sub" style={{ fontWeight: 600, marginBottom: '10px' }}>Royal Caribbean ships often place greater emphasis on onboard attractions, including features that can vary by ship such as:</p>
                                <div className="cvrc-ship-card-list">
                                    {cvrcRoyalShipDesign.map((item, idx) => (
                                        <div key={idx} className="cvrc-ship-card-item">
                                            <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvrc-ship-card-note" style={{ fontSize: '13px', fontStyle: 'italic', marginTop: '12px', color: 'var(--cvrc-text-body)' }}>Because Royal Caribbean has many ship classes, the experience can differ considerably from one vessel to another.</p>
                            </div>
                        </div>

                        <div className="cvrc-ships-important">
                            <Info size={16} style={{ color: 'var(--cvrc-navy)', flexShrink: 0, marginTop: '2px' }} />
                            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.6' }}><strong>Important:</strong> Always check the individual ship's current facilities before booking. A feature available on one Royal Caribbean or Celebrity ship may not be available across the entire fleet.</p>
                        </div>
                    </div>
                </section>

                {/* ── FAMILIES ── */}
                <section className="cvrc-family-section">
                    <div className="cvrc-family-container">
                        <div className="cvrc-family-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">FAMILY TRAVEL</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>Celebrity vs. Royal Caribbean for Families</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-family-intro" style={{ color: '#ffffff', maxWidth: '720px', margin: '0 auto' }}>For families, Royal Caribbean is usually the more natural choice when onboard activities are a major part of the vacation. Its ships can offer extensive programming for children, teenagers and families, along with attractions that appeal to different age groups. Celebrity also welcomes families and offers children's and youth programming, but its overall positioning tends to be less centered on high-energy family attractions.</p>
                        </div>

                        <div className="cvrc-family-grid">
                            <div className="cvrc-family-card">
                                <div className="cvrc-family-card-header">
                                    <ShipIcon size={20} style={{ color: '#93c5fd' }} />
                                    <h4 style={{ color: '#ffffff', margin: 0 }}>Royal Caribbean may work better for families who want:</h4>
                                </div>
                                <div className="cvrc-family-list">
                                    {cvrcRoyalFamily.map((item, idx) => (
                                        <div key={idx} className="cvrc-family-item">
                                            <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cvrc-family-card">
                                <div className="cvrc-family-card-header">
                                    <Gem size={20} style={{ color: '#93c5fd' }} />
                                    <h4 style={{ color: '#ffffff', margin: 0 }}>Celebrity may work better for families who want:</h4>
                                </div>
                                <div className="cvrc-family-list">
                                    {cvrcCelebrityFamily.map((item, idx) => (
                                        <div key={idx} className="cvrc-family-item">
                                            <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cvrc-family-note" style={{ marginTop: '24px', textAlign: 'center' }}>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', fontStyle: 'italic' }}>For a family with teenagers who want constant activities, Royal Caribbean can have a particularly strong advantage.</p>
                        </div>
                    </div>
                </section>

                {/* ── COUPLES ── */}
                <section className="cvrc-couples-section">
                    <div className="cvrc-couples-container">
                        <div className="cvrc-couples-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-center">COUPLES TRAVEL</span>
                            <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>Celebrity vs. Royal Caribbean for Couples</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                            <p className="cvrc-couples-intro" style={{ maxWidth: '720px', margin: '0 auto' }}>Couples should consider the atmosphere they want rather than simply comparing ship size.</p>
                        </div>

                        <div className="cvrc-couples-grid">
                            <div className="cvrc-couples-card">
                                <div className="cvrc-couples-card-header">
                                    <Gem size={20} style={{ color: 'var(--cvrc-navy)' }} />
                                    <h4 style={{ margin: 0 }}>Celebrity may suit couples looking for:</h4>
                                </div>
                                <div className="cvrc-couples-list">
                                    {cvrcCelebrityCouples.map((item, idx) => (
                                        <div key={idx} className="cvrc-couples-item">
                                            <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvrc-couples-note" style={{ fontSize: '13px', fontStyle: 'italic', marginTop: '10px', color: 'var(--cvrc-text-body)' }}>Celebrity can be an attractive option for couples seeking a modern, upscale and relaxed cruise experience.</p>
                            </div>

                            <div className="cvrc-couples-card">
                                <div className="cvrc-couples-card-header">
                                    <ShipIcon size={20} style={{ color: 'var(--cvrc-navy)' }} />
                                    <h4 style={{ margin: 0 }}>Royal Caribbean may suit couples looking for:</h4>
                                </div>
                                <div className="cvrc-couples-list">
                                    {cvrcRoyalCouples.map((item, idx) => (
                                        <div key={idx} className="cvrc-couples-item">
                                            <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvrc-couples-note" style={{ fontSize: '13px', fontStyle: 'italic', marginTop: '10px', color: 'var(--cvrc-text-body)' }}>Royal Caribbean can be excellent for couples who enjoy being active, combining specialty dining and entertainment with activities and adventure attractions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINING ── */}
                <section className="cvrc-dining-section">
                    <div className="cvrc-dining-container">
                        <div className="cvrc-dining-grid">
                            <div className="cvrc-dining-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0, color: '#93c5fd', opacity: 1 }}>CULINARY COMPARISON</span>
                                <h2 className="cvrc-section-heading" style={{ color: '#ffffff', marginBottom: '16px' }}>Dining: Celebrity Cruises vs. Royal Caribbean</h2>
                                <div className="cvrc-heading-separator-bar" style={{ background: '#93c5fd', margin: '0 0 20px 0' }}></div>
                                <p className="cvrc-dining-intro" style={{ color: '#ffffff', marginBottom: '16px' }}>Both cruise lines offer multiple dining formats, but the overall dining experience has a different emphasis.</p>
                                <p className="cvrc-dining-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '12px' }}>Celebrity places considerable attention on contemporary cuisine, specialty dining and its broader upscale positioning. Depending on the ship and fare, guests may have access to a combination of included restaurants, casual venues and specialty restaurants.</p>
                                <p className="cvrc-dining-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>Royal Caribbean also provides extensive dining choices. Depending on the ship, passengers can find main dining, buffet and casual options alongside specialty restaurants and branded dining concepts.</p>
                                <p className="cvrc-dining-sub-label" style={{ color: '#ffffff' }}>What to consider before choosing</p>
                                <div className="cvrc-dining-list">
                                    {cvrcDiningConsiderations.map((item, idx) => (
                                        <div key={idx} className="cvrc-dining-item">
                                            <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cvrc-dining-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Celebrity Cruises and Royal Caribbean dining comparison" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                                <div className="cvrc-dining-note">
                                    <Info size={16} className="cvrc-dining-note-icon" />
                                    <p>A newer ship does not necessarily have the same dining lineup as another ship in the same cruise line's fleet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CABINS ── */}
                <section className="cvrc-cabins-section">
                    <div className="cvrc-cabins-container">
                        <div className="cvrc-cabins-grid">
                            <div className="cvrc-cabins-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Cruise cabin comparison Celebrity and Royal Caribbean" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                                <div className="cvrc-cabins-note" style={{ marginTop: '16px', padding: '12px 16px', background: 'var(--cvrc-bg-soft)', borderLeft: '4px solid var(--cvrc-navy)', borderRadius: '0 8px 8px 0' }}>
                                    <p style={{ margin: 0, fontSize: '13px', fontStyle: 'italic' }}>The cheapest headline fare is not necessarily the cheapest overall vacation.</p>
                                </div>
                            </div>
                            <div className="cvrc-cabins-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>ACCOMMODATIONS</span>
                                <h2 className="cvrc-section-heading">Cabins and Suites</h2>
                                <div className="cvrc-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvrc-cabins-intro" style={{ marginBottom: '16px' }}>Both cruise lines offer several accommodation categories, including:</p>
                                <div className="cvrc-cabins-types">
                                    {cvrcCabinTypes.map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--cvrc-bg-soft)', padding: '8px 12px', borderRadius: '8px' }}>
                                            <Bed size={14} style={{ color: 'var(--cvrc-navy)' }} />
                                            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--cvrc-text-dark)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvrc-cabins-sub" style={{ marginBottom: '12px' }}>Celebrity also has The Retreat, its premium suite experience, which adds a more elevated accommodation and service level. Royal Caribbean offers a broad selection of suites, with benefits varying according to the suite category, ship and current program terms.</p>
                                <p className="cvrc-cabins-sub" style={{ fontWeight: 600, marginTop: '16px', marginBottom: '8px' }}>When comparing cabins, don't look only at the advertised base fare. Consider:</p>
                                <div className="cvrc-cabins-list">
                                    {cvrcCabinCompare.map((item, idx) => (
                                        <div key={idx} className="cvrc-cabins-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle size={12} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '13px', color: 'var(--cvrc-text-body)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RETREAT VS SUITE ── */}
                <section className="cvrc-retreat-section">
                    <div className="cvrc-retreat-container">
                        <div className="cvrc-retreat-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">PREMIUM EXPERIENCES</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>The Retreat vs. Royal Caribbean Suite Experiences</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-retreat-intro" style={{ color: '#ffffff', maxWidth: '780px', margin: '0 auto 12px' }}>Travelers comparing premium accommodations should look beyond the word suite.</p>
                            <p className="cvrc-retreat-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '780px', margin: '0 auto' }}>Celebrity's The Retreat is a dedicated premium experience built around suite accommodations and additional benefits. Depending on the sailing and current terms, these can include enhanced dining, lounge access and other elevated services. Royal Caribbean has a broad suite program with different categories and benefits. The exact privileges depend on the ship, suite category and booking conditions.</p>
                            <p className="cvrc-retreat-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '780px', margin: '12px auto 0', fontWeight: 600 }}>If premium accommodation is important to you, compare the total inclusions, not simply the cabin size.</p>
                        </div>

                        <div className="cvrc-retreat-grid">
                            <div className="cvrc-retreat-card">
                                <div className="cvrc-retreat-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(147, 197, 253, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                    <Crown size={22} style={{ color: '#93c5fd' }} />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '20px', margin: '0 0 6px' }}>Celebrity The Retreat</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '14px', lineHeight: '1.5' }}>Dedicated premium suite experience with enhanced dining, lounge access and elevated services.</p>
                            </div>
                            <div className="cvrc-retreat-card">
                                <div className="cvrc-retreat-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(147, 197, 253, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                    <Armchair size={22} style={{ color: '#93c5fd' }} />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '20px', margin: '0 0 6px' }}>Royal Caribbean Suites</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '14px', lineHeight: '1.5' }}>Broad suite program with benefits varying by ship, suite category and booking conditions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ENTERTAINMENT ── */}
                <section className="cvrc-entertainment-section">
                    <div className="cvrc-entertainment-container">
                        <div className="cvrc-entertainment-grid">
                            <div className="cvrc-entertainment-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>ONBOARD ENTERTAINMENT</span>
                                <h2 className="cvrc-section-heading">Entertainment and Nightlife</h2>
                                <div className="cvrc-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvrc-entertainment-intro" style={{ marginBottom: '14px' }}>Royal Caribbean generally has an advantage for travelers who want a large variety of onboard entertainment and activities.</p>
                                <p className="cvrc-entertainment-sub" style={{ marginBottom: '14px' }}>Depending on the ship, Royal Caribbean entertainment can include large-scale productions, live music, comedy, themed activities and specialty performances. Celebrity offers entertainment as well, but the experience tends to complement its more relaxed and contemporary cruise style.</p>
                                <div className="cvrc-entertainment-prefs">
                                    <div className="cvrc-entertainment-pref-card">
                                        <p className="cvrc-entertainment-pref-title">Royal Caribbean:</p>
                                        <p className="cvrc-entertainment-pref-text">Better suited to travelers who want a packed schedule with numerous activities and attractions.</p>
                                    </div>
                                    <div className="cvrc-entertainment-pref-card">
                                        <p className="cvrc-entertainment-pref-title">Celebrity:</p>
                                        <p className="cvrc-entertainment-pref-text">Better suited to travelers who want entertainment but also value dining, relaxation, conversation and destination experiences.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cvrc-entertainment-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Entertainment comparison Celebrity and Royal Caribbean" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ACTIVITIES ── */}
                <section className="cvrc-activities-section">
                    <div className="cvrc-activities-container">
                        <div className="cvrc-activities-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">ACTIVITIES COMPARISON</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>Which Has Better Activities?</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-activities-intro" style={{ color: '#ffffff', maxWidth: '720px', margin: '0 auto 16px' }}>There is no single answer because "better" depends on what you mean by activities.</p>
                        </div>

                        <div className="cvrc-activity-table">
                            <div className="cvrc-activity-row cvrc-activity-head">
                                <span>Activity preference</span>
                                <span>Better fit</span>
                            </div>
                            {cvrcActivityPref.map((row, idx) => (
                                <div key={idx} className="cvrc-activity-row">
                                    <span data-label="Activity preference">{row.activity}</span>
                                    <span data-label="Better fit">{row.better}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cvrc-activities-summary">
                            <div className="cvrc-activities-summary-card">
                                <Info size={16} className="cvrc-activities-summary-icon" />
                                <p>Royal Caribbean is particularly compelling for travelers who consider onboard attractions an essential part of their vacation.</p>
                            </div>
                            <div className="cvrc-activities-summary-card">
                                <Info size={16} className="cvrc-activities-summary-icon" />
                                <p>Celebrity is more suitable when activities are secondary to the overall atmosphere, dining and destination experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SERVICE ── */}
                <section className="cvrc-service-section">
                    <div className="cvrc-service-container">
                        <div className="cvrc-service-grid">
                            <div className="cvrc-service-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Service and atmosphere comparison" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="cvrc-service-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>SERVICE &amp; ATMOSPHERE</span>
                                <h2 className="cvrc-section-heading">Service and Atmosphere</h2>
                                <div className="cvrc-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvrc-service-intro" style={{ marginBottom: '14px' }}>Service expectations can be highly subjective, but the two brands are positioned differently.</p>
                                <p className="cvrc-service-sub" style={{ marginBottom: '12px' }}>Celebrity Cruises is associated with a contemporary premium experience, while Royal Caribbean focuses on a broader mainstream vacation experience with an exceptionally wide range of onboard activities. This distinction can affect how the ship feels during sea days.</p>
                                <div style={{ padding: '14px 18px', background: 'var(--cvrc-bg-soft)', borderRadius: '10px', marginBottom: '10px' }}>
                                    <p style={{ fontWeight: 700, color: 'var(--cvrc-navy)', margin: 0 }}>If you prefer a calmer environment:</p>
                                    <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Celebrity may feel more aligned with your preferences for lounges, restaurants, pools and relaxing spaces.</p>
                                </div>
                                <div style={{ padding: '14px 18px', background: 'var(--cvrc-bg-soft)', borderRadius: '10px' }}>
                                    <p style={{ fontWeight: 700, color: 'var(--cvrc-navy)', margin: 0 }}>If you enjoy having a long list of things to do every day:</p>
                                    <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Royal Caribbean's ship design may be more appealing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DESTINATIONS ── */}
                <section className="cvrc-destinations-section">
                    <div className="cvrc-destinations-container">
                        <div className="cvrc-destinations-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">ITINERARIES</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>Destinations and Itineraries</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-destinations-intro" style={{ color: '#ffffff', maxWidth: '780px', margin: '0 auto 12px' }}>Both cruise lines sail to major cruise regions, although exact deployment changes over time. Depending on the season and ship, travelers may find itineraries covering destinations such as Caribbean, Mediterranean, Europe, Alaska, Asia, Australia and the South Pacific, North America, and Transatlantic routes.</p>
                            <p className="cvrc-destinations-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '780px', margin: '12px auto 0' }}>When comparing itineraries, evaluate the specific sailing, not just the cruise brand. A cruise visiting five ports can provide a very different vacation from a sailing with several sea days, even when both cruises are operated by the same company.</p>
                        </div>

                        <div className="cvrc-destinations-grid">
                            <div className="cvrc-destinations-card">
                                <h4 style={{ color: '#ffffff', margin: '0 0 12px' }}>Compare these itinerary details</h4>
                                <div className="cvrc-destinations-list">
                                    {cvrcItineraryDetails.map((item, idx) => (
                                        <div key={idx} className="cvrc-destinations-item">
                                            <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── COST ── */}
                <section className="cvrc-cost-section">
                    <div className="cvrc-cost-container">
                        <div className="cvrc-cost-grid">
                            <div className="cvrc-cost-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>PRICING</span>
                                <h2 className="cvrc-section-heading">Celebrity vs. Royal Caribbean: Which Is More Affordable?</h2>
                                <div className="cvrc-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvrc-cost-intro">Price comparisons are difficult because cruise fares change according to:</p>
                                <div className="cvrc-cost-factors">
                                    {cvrcCostFactors.map((factor, idx) => (
                                        <span key={idx} className="cvrc-cost-factor-tag">{factor}</span>
                                    ))}
                                </div>
                                <p className="cvrc-cost-sub" style={{ marginBottom: '12px' }}>A lower advertised fare may also have fewer inclusions. For a meaningful comparison, calculate the total vacation cost.</p>
                                <p className="cvrc-cost-sub" style={{ fontWeight: 600, marginBottom: '8px' }}>Look at the complete price:</p>
                                <div className="cvrc-cost-list">
                                    {cvrcTotalCost.map((item, idx) => (
                                        <div key={idx} className="cvrc-cost-item">
                                            <DollarSign size={12} className="cvrc-cost-item-icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cvrc-cost-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Cruise pricing and value comparison" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                                <div className="cvrc-cost-note">
                                    <Info size={16} className="cvrc-cost-note-icon" />
                                    <p>The best value depends on what you would purchase separately during the cruise.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ALL INCLUDED ── */}
                <section className="cvrc-included-section">
                    <div className="cvrc-included-container">
                        <div className="cvrc-included-grid">
                            <div className="cvrc-included-image-col">
                                <div className="cvrc-image-frame">
                                    <CcdPlaceholder label="Celebrity All Included vs Royal Caribbean packages" />
                                    <div className="cvrc-frame-overlay"></div>
                                </div>
                                <div className="cvrc-included-note">
                                    <Info size={16} className="cvrc-included-note-icon" />
                                    <p>This prevents an apparently inexpensive fare from becoming significantly more expensive after extras are added.</p>
                                </div>
                            </div>
                            <div className="cvrc-included-text-col">
                                <span className="cvrc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>INCLUSIONS</span>
                                <h2 className="cvrc-section-heading">Celebrity All Included vs. Royal Caribbean Packages</h2>
                                <div className="cvrc-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvrc-included-intro" style={{ marginBottom: '12px' }}>Celebrity's fare structure can include different levels of inclusions depending on the fare selected and current offer. Royal Caribbean similarly offers different booking options and packages. Because inclusions and promotional offers can change, travelers should compare the exact fare conditions attached to their sailing.</p>
                                <p className="cvrc-included-sub" style={{ fontWeight: 600, marginBottom: '8px' }}>Before booking, ask:</p>
                                <div className="cvrc-included-list">
                                    {cvrcBeforeBooking.map((item, idx) => (
                                        <div key={idx} className="cvrc-included-item">
                                            <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '14px', color: 'var(--cvrc-text-body)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FIRST-TIME ── */}
                <section className="cvrc-firsttime-section">
                    <div className="cvrc-firsttime-container">
                        <div className="cvrc-firsttime-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">FIRST-TIME CRUISERS</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>Which Cruise Line Is Better for First-Time Cruisers?</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-firsttime-intro" style={{ color: '#ffffff', maxWidth: '720px', margin: '0 auto 12px' }}>Both can work well for first-time cruisers.</p>
                            <p className="cvrc-firsttime-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '720px', margin: '0 auto 8px' }}>Celebrity can be a good choice if you already know that you want a more relaxed, contemporary and upscale vacation.</p>
                            <p className="cvrc-firsttime-sub" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '720px', margin: '0 auto' }}>Royal Caribbean can be particularly appealing if you want a cruise where the ship itself is a major attraction.</p>
                            <div className="cvrc-firsttime-note">
                                <Info size={16} className="cvrc-firsttime-note-icon" />
                                <p>For a first cruise, itinerary and ship selection may matter more than the brand name alone.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CHOICE GUIDE ── */}
                <section className="cvrc-choice-section">
                    <div className="cvrc-choice-container">
                        <div className="cvrc-choice-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-center">DECISION GUIDE</span>
                            <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>How to Choose Between <br /> Celebrity and Royal Caribbean</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                            <p className="cvrc-choice-intro" style={{ maxWidth: '720px', margin: '0 auto' }}>Use this simple decision guide:</p>
                        </div>

                        <div className="cvrc-choice-grid">
                            {cvrcChoiceGuide.map((guide, idx) => (
                                <div key={idx} className="cvrc-choice-card">
                                    <div className="cvrc-choice-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--cvrc-bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <guide.Icon size={18} style={{ color: 'var(--cvrc-navy)' }} />
                                        </div>
                                        <h3 style={{ fontSize: '18px', margin: 0 }}>{guide.label}</h3>
                                    </div>
                                    <div className="cvrc-choice-items">
                                        {guide.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="cvrc-choice-item">
                                                <CheckCircle size={14} style={{ color: 'var(--cvrc-navy)', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cvrc-choice-note">
                            <Info size={16} className="cvrc-choice-note-icon" />
                            <p>If you are still undecided: Compare two specific ships sailing similar itineraries. This is often more useful than comparing the cruise lines at a fleet-wide level.</p>
                        </div>
                    </div>
                </section>

                {/* ── COMPARISON METHOD ── */}
                <section className="cvrc-method-section">
                    <div className="cvrc-method-container">
                        <div className="cvrc-method-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-light cvrc-eyebrow-center">BETTER COMPARISON METHOD</span>
                            <h2 className="cvrc-section-heading cvrc-white-heading" style={{ textAlign: 'center' }}>A Better Way to Compare <br /> Your Cruise Options</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered cvrc-separator-white"></div>
                            <p className="cvrc-method-intro" style={{ color: '#ffffff', maxWidth: '720px', margin: '0 auto 16px' }}>Before making a booking, create a simple side-by-side comparison covering:</p>
                        </div>

                        <div className="cvrc-method-table">
                            <div className="cvrc-method-row cvrc-method-head">
                                <span>Factor</span>
                                <span>What to compare</span>
                            </div>
                            {cvrcComparisonTable.map((row, idx) => (
                                <div key={idx} className="cvrc-method-row">
                                    <span data-label="Factor">{row.factor}</span>
                                    <span data-label="What to compare">{row.compare}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cvrc-method-note">
                            <Info size={16} className="cvrc-method-note-icon" />
                            <p>This approach gives you a more accurate comparison than relying on cruise-line reputation alone.</p>
                        </div>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="cvrc-takeaway-section">
                    <div className="cvrc-takeaway-container">
                        <div className="cvrc-takeaway-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-center">SUMMARY</span>
                            <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                        </div>

                        <div className="cvrc-takeaway-grid">
                            {cvrcKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="cvrc-takeaway-card">
                                    <div className="cvrc-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="cvrc-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── EXPERT INSIGHT ── */}
                <section className="cvrc-expert-section">
                    <div className="cvrc-expert-container">
                        <div className="cvrc-expert-portrait-panel">
                            <div className="cvrc-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="cvrc-expert-stats-strip">
                                <div className="cvrc-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="cvrc-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="cvrc-expert-content-panel">
                            <span className="cvrc-eyebrow cvrc-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="cvrc-section-heading">Insight from Angela Hughes</h2>
                            <div className="cvrc-heading-separator-bar"></div>

                            <p className="cvrc-expert-quote">
                                &ldquo;Choosing between Celebrity and Royal Caribbean is about understanding how you want to feel on vacation. Celebrity is for travelers who want the ship to be an elegant backdrop to their journey. Royal Caribbean is for those who want the ship to be the destination. Both are exceptional — but they serve different travel styles.&rdquo;
                            </p>

                            <div className="cvrc-expert-priorities">
                                <h5>Decision-Making Framework:</h5>
                                <div className="cvrc-expert-pills">
                                    {['Define Your Travel Style', 'Compare Specific Ships', 'Calculate Total Cost', 'Check Inclusions Carefully', 'Match Itinerary to Preferences', 'Book with Confidence'].map(pill => (
                                        <span key={pill} className="cvrc-expert-pill">
                                            <CheckCircle size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="cvrc-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom planning and itinerary design that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="cvrc-faq-section">
                    <div className="cvrc-faq-container">
                        <div className="cvrc-faq-header">
                            <span className="cvrc-eyebrow cvrc-eyebrow-center">QUESTIONS BEFORE YOU BOOK</span>
                            <h2 className="cvrc-section-heading" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                            <div className="cvrc-heading-separator-bar cvrc-bar-centered"></div>
                        </div>
                        <div className="cvrc-faq-list-wrapper">
                            {cvrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cvrc-faq-item"
                                    onClick={() => cvrcToggleFaq(index)}
                                >
                                    <div className="cvrc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cvrc-faq-toggle-icon">{cvrcActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {cvrcActiveFaq === index && (
                                        <p className="cvrc-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cvrc-cta-section">
                    <div className="cvrc-cta-aurora-glow"></div>
                    <div className="cvrc-cta-crystal cvrc-cta-crystal-1"></div>
                    <div className="cvrc-cta-crystal cvrc-cta-crystal-2"></div>
                    <div className="cvrc-cta-crystal cvrc-cta-crystal-3"></div>
                    <div className="cvrc-cta-grid-lines"></div>

                    <div className="cvrc-cta-content">
                        <div className="cvrc-cta-compass-ring">
                            <Compass size={28} />
                        </div>
                        <span className="cvrc-cta-eyebrow">FIND YOUR PERFECT CRUISE</span>
                        <h2 className="cvrc-cta-title">Ready to Choose Between <br /> Celebrity and Royal Caribbean?</h2>
                        <div className="cvrc-cta-bar"></div>
                        <p className="cvrc-cta-subtitle">
                            Start by comparing the exact ships, itineraries, cabin categories and total inclusions for your preferred travel dates. Once you know what matters most—relaxation, dining, family activities, entertainment or onboard adventure—you can narrow the choice with confidence.
                        </p>
                        <div className="cvrc-cta-actions">
                            <Link to="/contact" className="cvrc-cta-primary-btn">
                                <span>Speak with a cruise specialist</span>
                                <ArrowRight size={18} className="cvrc-cta-btn-arrow" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CelebrityCruisesVsRoyalCaribbean