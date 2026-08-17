import Navbar from '../../components/Navbar/Navbar'
import './CelebrityStateroomsSuitesGuide.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Gem,
    Crown, Phone, LayoutList, Heart, Sun, Moon,
    Globe, DollarSign, Wifi, Bed, Waves, Wind,
    ShieldCheck, AlertCircle, Home, Eye, Layers,
    Ruler, MapPinned, Volume2, TreePine, Award
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityStateroomsSuitesGuide() {

    const [cessActiveFaq, setCessActiveFaq] = useState(null)
    const cessToggleFaq = i => setCessActiveFaq(cessActiveFaq === i ? null : i)

    const cessFaqs = [
        { question: 'What types of staterooms does Celebrity Cruises offer?', answer: "Celebrity Cruises offers inside, ocean view, veranda, Concierge Class, AquaClass, single staterooms and multiple suite categories. The exact selection varies by ship." },
        { question: 'What is the difference between a Celebrity stateroom and a suite?', answer: 'A suite generally provides substantially more living space and additional benefits, including access to The Retreat on applicable ships. Standard staterooms focus primarily on comfortable accommodation.' },
        { question: 'What is the best Celebrity stateroom category?', answer: 'The best category depends on your priorities. Verandas suit travelers who value outdoor space, AquaClass suits wellness-focused guests, and The Retreat is designed for travelers seeking suite-level accommodation and exclusive benefits.' },
        { question: 'Are Celebrity Infinite Verandas real balconies?', answer: 'Infinite Verandas create an indoor/outdoor experience using a retractable window system rather than a conventional separate balcony. Celebrity says the design allows the living area to become the veranda at the touch of a button.' },
        { question: 'Which Celebrity ships have Infinite Verandas?', answer: "Infinite Verandas are particularly associated with Celebrity's Edge Series, including Celebrity Edge, Apex, Beyond and Ascent. Specific cabin availability should be checked for each sailing." },
        { question: 'What is Celebrity AquaClass?', answer: "AquaClass is Celebrity's wellness-focused stateroom category. Depending on the ship, benefits can include Blu dining, thermal-area access, spa concierge services, fitness benefits and enhanced in-room amenities." },
        { question: 'Is AquaClass worth the extra cost?', answer: 'AquaClass can be particularly useful for travelers who expect to use its wellness and dining benefits. Compare the price difference with the cost of purchasing similar experiences separately on your specific sailing.' },
        { question: 'What is Concierge Class on Celebrity Cruises?', answer: 'Concierge Class is an elevated stateroom category offering additional service and amenities. Celebrity highlights features such as dedicated service, an exclusive lunch and destination programming, with details varying by ship.' },
        { question: 'Does Celebrity Cruises have single staterooms?', answer: 'Yes. Celebrity offers dedicated single staterooms on selected ships, including Edge Single Staterooms with Infinite Veranda on Edge, Apex, Beyond and Ascent.' },
        { question: 'Which Celebrity cabins have private balconies?', answer: 'Traditional Veranda Staterooms, many AquaClass accommodations, selected single cabins and numerous suites offer private outdoor space. Edge Series ships also feature Infinite Veranda staterooms.' },
        { question: 'What is The Retreat on Celebrity Cruises?', answer: "The Retreat is Celebrity's suite-focused experience, combining premium suites with exclusive spaces such as a private restaurant, lounge and sundeck on applicable ships, plus enhanced services." },
        { question: 'What is the largest Celebrity Cruises suite?', answer: "Suite sizes vary by ship, but Celebrity Ascent's Iconic Suite is listed at approximately 1,892 square feet with a 689-square-foot veranda, making it one of the largest suite accommodations in the fleet." },
        { question: 'Are Celebrity cruise cabins the same size on every ship?', answer: 'No. Cabin dimensions and layouts vary by ship series and category. For example, Celebrity publishes different AquaClass dimensions for Edge, Solstice and Millennium Series ships.' },
        { question: 'How do I choose the best Celebrity cabin location?', answer: 'Consider noise, motion, view, deck position, proximity to elevators and public areas, and whether the cabin has an obstructed or open view. Checking the specific deck plan and cabin number is important.' },
        { question: 'Are Celebrity cruise staterooms good for families?', answer: 'They can be, particularly when families use connecting staterooms or accommodations with appropriate occupancy. Celebrity offers multiple connecting-stateroom configurations on selected ships, but exact options vary by vessel.' }
    ]

    const cessCategoriesGlance = [
        { category: 'Inside', appeal: 'Lowest-cost accommodation', outdoor: 'No private veranda', bestFor: 'Budget-conscious travelers' },
        { category: 'Ocean View', appeal: 'Natural light and exterior views', outdoor: 'No traditional private veranda', bestFor: 'Travelers wanting a view' },
        { category: 'Veranda', appeal: 'Private outdoor space', outdoor: 'Yes', bestFor: 'Couples and scenic itineraries' },
        { category: 'Infinite Veranda', appeal: 'Indoor/outdoor convertible space on Edge Series', outdoor: 'Yes', bestFor: 'Travelers wanting flexible outdoor access' },
        { category: 'Concierge Class', appeal: 'Enhanced stateroom experience', outdoor: 'Usually', bestFor: 'Travelers wanting additional service' },
        { category: 'AquaClass', appeal: 'Wellness-focused accommodation', outdoor: 'Yes on applicable categories', bestFor: 'Spa and wellness travelers' },
        { category: 'Single Stateroom', appeal: 'Designed for solo travelers', outdoor: 'Some categories', bestFor: 'Solo cruisers' },
        { category: 'The Retreat suites', appeal: 'Suite accommodation and exclusive benefits', outdoor: 'Yes', bestFor: 'Travelers seeking a premium experience' }
    ]

    const cessInsideWorksFor = ['Travelers who spend little time in their cabin', 'Port-intensive itineraries', 'Budget-conscious couples', 'Solo travelers seeking value', 'Guests who prefer spending their budget on excursions and dining']
    const cessOceanViewChoose = ['Natural light', 'An exterior view', 'A more open feeling than an inside cabin', 'A lower price than many veranda categories']
    const cessVerandaBest = ['Alaska cruises', 'Mediterranean itineraries', 'Caribbean sailings', 'Scenic coastal voyages', 'Longer cruises with more sea days']

    const cessInfiniteVsTraditional = [
        { feature: 'Outdoor access', infinite: 'Yes', traditional: 'Yes' },
        { feature: 'Balcony configuration', infinite: 'Integrated into room', traditional: 'Separate exterior balcony' },
        { feature: 'Indoor/outdoor flexibility', infinite: 'High', traditional: 'More conventional' },
        { feature: 'Available across fleet', infinite: 'No', traditional: 'Yes' },
        { feature: 'Especially associated with', infinite: 'Edge Series', traditional: 'Multiple Celebrity ship classes' }
    ]

    const cessSingleWants = ['A purpose-designed solo cabin', 'Private accommodation without booking a standard double cabin alone', 'A private outdoor space', 'A more efficient room layout']
    const cessConciergeWants = ['Enhanced service', 'Additional pre-cruise or embarkation conveniences', 'A more elevated stateroom experience', 'A veranda without moving into a suite']

    const cessAquaEdge = ['Access to the SEA Thermal Suite', 'Blu restaurant dining', 'Personal spa concierge', 'Complimentary fitness classes', 'Cashmere mattress bedding', 'Wellness-oriented stateroom amenities']
    const cessAquaSolstice = ['Private veranda space', 'Enhanced bedding', 'Premium bathroom amenities', 'Fitness classes', 'Persian Garden access', 'Blu dining']
    const cessAquaMillennium = ['Blu dining', 'Persian Garden access', 'Spa concierge', 'Enhanced bathroom amenities']

    const cessRetreatIncludes = ['Suite accommodation', 'Premium dining', 'Exclusive lounge access', 'Private outdoor spaces', 'Enhanced service', 'Premium Wi-Fi on applicable fares', 'Premium beverage benefits under applicable fare terms', 'Suite-specific amenities']

    const cessSuiteCategories = ['Sky Suite', 'Aqua Sky Suite', 'Celebrity Suite', 'Royal Suite', 'Penthouse Suite', 'Edge Villa', 'Iconic Suite', 'Reflection Suite on Celebrity Reflection']

    const cessSkySuiteFeatures = ['Private veranda', 'King-size Cashmere mattress', 'Split bathroom with a spa tub and shower']
    const cessCelebritySuiteFeatures = ['Separate living area', 'Private veranda', 'King-size bed', 'Floor-to-ceiling windows', 'Large sitting area', 'Additional storage', 'Suite-specific amenities']

    const cessSuiteTabData = [
        { title: 'Aqua Sky Suites', icon: Gem, text: 'Aqua Sky Suites combine elements of AquaClass wellness benefits with access to The Retreat. Celebrity lists Aqua Sky Suites on Celebrity Ascent at approximately 319 square feet with a 79-square-foot veranda. (Celebrity Cruises) They are particularly relevant for travelers who prioritize both wellness and suite-level service.' },
        { title: 'Celebrity Suites', icon: Home, text: 'Celebrity Suites provide a larger two-room layout on applicable ships, with a separate living area and bedroom. Celebrity lists the Celebrity Suite on Edge Series ships with approximately 394–498 square feet of interior space and 51–105 square feet of terrace, depending on the ship and configuration. (Celebrity Cruises)', features: cessCelebritySuiteFeatures },
        { title: 'Royal Suites', icon: Crown, text: 'Royal Suites offer substantially more living space than standard staterooms. On Celebrity Ascent, the Royal Suite is listed at approximately 687 square feet with a 72-square-foot veranda. The configuration includes a living and dining area, primary bedroom, large bathroom and private veranda. (Celebrity Cruises) These suites are better suited to travelers who value space and enhanced suite amenities rather than simply having a place to sleep.' },
        { title: 'Penthouse Suites', icon: Gem, text: 'Penthouse Suites are among Celebrity\'s largest suite categories. Celebrity Ascent\'s Penthouse Suite is listed at approximately 1,378 square feet with a 197-square-foot veranda and includes separate sleeping, living and dining areas, a guest bedroom and bathroom, terrace and private hot tub. (Celebrity Cruises)' },
        { title: 'Edge Villas', icon: TreePine, text: 'The Edge Villa is a distinctive two-story accommodation available on selected Edge Series ships. Celebrity describes these residences as split-level accommodations combining indoor and outdoor living, with a private terrace and plunge pool. Celebrity Ascent\'s Edge Villas are listed at approximately 739 square feet with a 211-square-foot veranda. (Celebrity Cruises) They are designed for travelers looking for a residential-style suite experience rather than a conventional cruise cabin.' },
        { title: 'Iconic Suites', icon: Sparkles, text: 'Iconic Suites represent the top end of Celebrity\'s suite accommodation on selected ships. Celebrity Ascent\'s Iconic Suites are listed at approximately 1,892 square feet with a 689-square-foot veranda, positioned high above the bridge to provide expansive views. (Celebrity Cruises) These are considerably larger than standard staterooms and are designed around space, views and premium suite living.' }
    ]
    const [cessSuiteActiveTab, setSuiteActiveTab] = useState(0)

    const cessSizesByShip = [
        { ship: 'Edge Series', accommodation: 'Edge Infinite Veranda', size: '243 sq. ft. total / 42 sq. ft. veranda' },
        { ship: 'Edge Series', accommodation: 'Edge Single Infinite Veranda', size: '184 sq. ft. / 42 sq. ft. veranda' },
        { ship: 'Edge Series', accommodation: 'AquaClass', size: '243 sq. ft. / 42 sq. ft. veranda' },
        { ship: 'Solstice Series', accommodation: 'AquaClass', size: '192 sq. ft. / 54 sq. ft. veranda' },
        { ship: 'Millennium Series', accommodation: 'AquaClass', size: '209 sq. ft. / 42 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Sky Suite', size: '319 sq. ft. / 79 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Celebrity Suite', size: '401 sq. ft. / 100 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Royal Suite', size: '687 sq. ft. / 72 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Edge Villa', size: '739 sq. ft. / 211 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Penthouse Suite', size: '1,378 sq. ft. / 197 sq. ft. veranda' },
        { ship: 'Celebrity Ascent', accommodation: 'Iconic Suite', size: '1,892 sq. ft. / 689 sq. ft. veranda' }
    ]

    const cessCommonAmenities = ['Celebrity eXhale bedding', 'Cashmere mattresses on applicable accommodations', 'Television', 'Storage', 'Bathroom amenities', 'Bathrobes and towels', 'Climate controls', 'Hairdryer', 'Safe', 'Room service options', 'Celebrity Cruises app integration on applicable ships']

    const cessBalconyCategories = ['Traditional Veranda Staterooms', 'Edge Staterooms with Infinite Veranda', 'AquaClass staterooms', 'Many suites', 'Selected single staterooms']

    const cessChooseTraditional = ['You prefer a conventional balcony', 'You want a clearly separated outdoor area', 'Balcony seating is a priority']
    const cessChooseInfinite = ['You like flexible indoor/outdoor space', 'You prefer a larger-feeling interior', 'You are sailing on an Edge Series ship', 'You like modern cabin design']

    const cessBestForTravelers = [
        { priority: 'Lowest accommodation cost', category: 'Inside' },
        { priority: 'Natural light', category: 'Ocean View' },
        { priority: 'Private outdoor space', category: 'Veranda' },
        { priority: 'Modern indoor/outdoor design', category: 'Infinite Veranda' },
        { priority: 'Extra service', category: 'Concierge Class' },
        { priority: 'Wellness', category: 'AquaClass' },
        { priority: 'Solo travel', category: 'Single Stateroom' },
        { priority: 'Suite experience', category: 'The Retreat' },
        { priority: 'Maximum space', category: 'Large suite categories' },
        { priority: 'Family or connected rooms', category: 'Connecting stateroom options' }
    ]

    const cessDeckPlanChecks = ['Near elevators', 'Beneath public areas', 'Above theaters', 'Near nightclubs', 'Near crew-service areas', 'At the front or rear of the ship', 'With connecting doors', 'With potentially obstructed views']
    const cessCheckBeforeBooking = ['Ship', 'Deck', 'Cabin number', 'Square footage', 'Veranda size', 'Bed configuration', 'Bathroom configuration', 'Connecting-room availability', 'Obstructed-view information']

    const cessStandardVsAquaVsRetreat = [
        { feature: 'Accommodation', standard: 'Yes', aqua: 'Yes', retreat: 'Yes' },
        { feature: 'Private outdoor space', standard: 'Category-dependent', aqua: 'Yes on applicable categories', retreat: 'Usually' },
        { feature: 'Wellness benefits', standard: 'Standard', aqua: 'Enhanced', retreat: 'Depends on suite' },
        { feature: 'Blu dining', standard: 'No', aqua: 'Yes', retreat: 'Aqua Sky and applicable benefits' },
        { feature: 'The Retreat access', standard: 'No', aqua: 'No, unless separately qualified', retreat: 'Yes' },
        { feature: 'Exclusive lounge', standard: 'No', aqua: 'No', retreat: 'Yes' },
        { feature: 'Suite-level service', standard: 'No', aqua: 'No', retreat: 'Yes' },
        { feature: 'Premium suite amenities', standard: 'No', aqua: 'Enhanced wellness amenities', retreat: 'Yes' }
    ]

    const cessFamilyChecklist = ['Connecting staterooms', 'Appropriate occupancy', 'Sofa beds or additional sleeping arrangements', 'Bathroom configuration', 'Storage', 'Cabin location', 'Proximity to elevators and family facilities']

    const cessBookingChecks = [
        { title: 'Location', Icon: MapPin, body: 'Check the cabin\u2019s position relative to:', items: ['Elevators', 'Stairs', 'Restaurants', 'Theaters', 'Lounges', 'Pools', 'Crew areas'] },
        { title: 'Noise', Icon: Volume2, body: 'Avoid assuming that a higher deck is automatically quieter. A cabin directly beneath a pool deck, theater or nightclub can experience more noise than one surrounded by other staterooms.', items: [] },
        { title: 'View', Icon: Eye, body: 'Check whether the view is:', items: ['Fully open', 'Partially obstructed', 'Aft-facing', 'Forward-facing', 'Limited by ship structures'] },
        { title: 'Layout', Icon: Layers, body: 'Look at the actual deck plan where possible. Two rooms in the same category can have different layouts.', items: [] },
        { title: 'Bed Configuration', Icon: Bed, body: 'If you need separate beds or additional sleeping space, confirm the exact configuration before booking.', items: [] }
    ]

    const cessLocationTips = [
        { title: 'Best Areas for a Quieter Experience', Icon: Volume2, text: 'Cabins surrounded by other passenger staterooms can often be preferable to rooms directly beside major public venues.' },
        { title: 'Cabins Near Elevators', Icon: MapPinned, text: 'These can be convenient for travelers with mobility concerns or those who want quick access to public areas, but they may experience more foot traffic.' },
        { title: 'Forward Cabins', Icon: Wind, text: 'Forward cabins can provide distinctive views but may experience more motion in rougher seas.' },
        { title: 'Aft Cabins', Icon: Waves, text: 'Aft cabins can offer attractive wake views and distinctive perspectives, depending on the ship.' },
        { title: 'Lower Decks', Icon: Ruler, text: 'Lower-deck cabins can feel more stable for some travelers who are sensitive to ship movement.' }
    ]

    const cessAccessibilityConsiderations = ['Door width', 'Bathroom configuration', 'Shower access', 'Turning space', 'Bed height', 'Location', 'Accessible public areas']

    const cessSpendMore = ['You will use the balcony frequently.', 'You are sailing a highly scenic route.', 'You want AquaClass wellness benefits.', 'You value suite-exclusive spaces.', 'You want significantly more living space.', 'You want enhanced service.']
    const cessSpendLess = ['You expect to be ashore most days.', 'You mainly use the cabin for sleeping.', 'You do not need a balcony.', 'You would rather allocate money toward excursions.', 'You are traveling on a port-intensive itinerary.']

    const cessKeyTakeaways = [
        'Celebrity Cruises offers accommodation ranging from inside and ocean view staterooms to veranda cabins, AquaClass, Concierge Class and suites.',
        'Edge Series ships are known for their Infinite Veranda design.',
        'AquaClass focuses on wellness and can include Blu dining, spa-related access and enhanced amenities.',
        'The Retreat provides suite accommodations plus exclusive spaces and enhanced services.',
        'Cabin dimensions and amenities vary by ship, even within similar categories.',
        'Solo travelers can find dedicated single staterooms on selected ships.',
        'Families should investigate connecting cabins, occupancy limits and exact sleeping arrangements.',
        'Always check the deck plan and individual cabin details before paying a premium for location or views.'
    ]

    const cessInternalLinks = [
        { text: 'Celebrity Cruises Complete Guide', url: '/celebrity-cruises' },
        { text: 'What Is Included on a Celebrity Cruise?', url: '/celebrity-cruises/whats-included' },
        { text: 'Celebrity Cruises Food and Dining', url: '/celebrity-cruises/food-dining' },
        { text: 'Celebrity Cruises Best Cabins', url: '/celebrity-cruises/best-cabins' },
        { text: 'Celebrity Cruises Ship Guide', url: '/celebrity-cruises/ships' },
        { text: 'Celebrity Cruises Best Itineraries', url: '/celebrity-cruises/best-itineraries' },
        { text: 'Celebrity Cruises First-Time Guide', url: '/celebrity-cruises/first-time-guide' },
        { text: 'Celebrity Cruises Dress Code and Packing Guide', url: '/celebrity-cruises/dress-code-packing' },
        { text: 'Is Celebrity Cruises Worth It?', url: '/celebrity-cruises/is-celebrity-worth-it' }
    ]

    const cessExternalReferences = ['Celebrity Cruises Staterooms', 'Celebrity Cruises AquaClass Staterooms', 'Celebrity Cruises Veranda Staterooms', 'Celebrity Cruises Single Staterooms', 'Celebrity Ascent Accommodation Guide']

    const cessSchemaData = {
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites",
                "name": "Celebrity Staterooms and Suites Guide",
                "description": "A complete guide to Celebrity Cruises staterooms and suites, including inside, ocean view, veranda, Infinite Veranda, AquaClass, Concierge Class and The Retreat.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites#article",
                "headline": "Celebrity Staterooms and Suites Guide",
                "description": "A complete guide to Celebrity Cruises staterooms and suites, including inside, ocean view, veranda, Infinite Veranda, AquaClass, Concierge Class and The Retreat.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Staterooms and Suites", "item": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/staterooms-suites#faq",
                "mainEntity": cessFaqs.map(f => ({
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
                <title>Celebrity Staterooms & Suites Guide</title>
                <meta name="title" content="Celebrity Staterooms & Suites Guide" />
                <meta name="description" content="Explore Celebrity Cruises staterooms and suites, including inside, ocean view, veranda, AquaClass, Concierge Class and The Retreat accommodations." />
                <meta name="keywords" content="Celebrity staterooms and suites, Celebrity Cruises cabins, Celebrity cruise rooms, Celebrity suite categories, Celebrity AquaClass, Celebrity Concierge Class, Celebrity Infinite Veranda, Celebrity The Retreat, Celebrity ocean view staterooms, Celebrity inside cabins, Celebrity veranda cabins" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/staterooms-suites" />
                <script type="application/ld+json">{JSON.stringify(cessSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="cess-hero-section">
                <div className="cess-hero-overlay-layer"></div>
                <div className="cess-hero-content-wrapper">
                    <div className="cess-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="cess-hero-main-title">Celebrity Staterooms and Suites Guide</h1>
                    <p className="cess-hero-subtitle-text">
                        Explore Celebrity Cruises staterooms and suites, including inside, ocean view, veranda, AquaClass, Concierge Class and The Retreat accommodations.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="cess-intro-section">
                <div className="cess-intro-container">
                    <div className="cess-intro-grid">
                        <div className="cess-intro-text-col">
                            <div className="cess-intro-lead-card">
                                <p className="cess-intro-lead">
                                    Choosing the right accommodation can make a significant difference to your Celebrity Cruises vacation. Celebrity offers a broad range of staterooms and suites, from practical inside cabins and ocean view rooms to private veranda accommodations, wellness-focused AquaClass staterooms and the premium suites within The Retreat.
                                </p>
                            </div>
                            <p className="cess-intro-body">
                                The exact cabin names, layouts, sizes and amenities vary by ship. Edge Series ships, for example, introduced the Infinite Veranda, while Solstice and Millennium Series ships have different veranda and accommodation configurations. Celebrity also offers dedicated single staterooms on selected ships. (Celebrity Cruises)
                            </p>
                            <p className="cess-intro-body">
                                This guide explains the main Celebrity Cruises stateroom categories, what distinguishes them, how they compare, and what to consider before selecting a cabin.
                            </p>
                        </div>
                        <div className="cess-intro-image-col">
                            <div className="cess-intro-image-frame cess-placeholder-frame">
                                <div className="cess-placeholder-content">
                                    <Bed size={48} className="cess-placeholder-icon" />
                                    <span className="cess-placeholder-text">Stateroom Image Placeholder</span>
                                </div>
                                <div className="cess-intro-image-badge">
                                    <Anchor size={14} />
                                    <span>Celebrity Cruises</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CATEGORIES AT A GLANCE ── */}
            <section className="cess-table-section cess-glance-section" style={{ background: '#e3ebf5' }}>
                <div className="cess-table-container" style={{ maxWidth: '1100px' }}>
                    <span className="cess-eyebrow">OVERVIEW</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Cabin Categories at a Glance</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-table-intro">
                        Celebrity's accommodations can broadly be divided into standard staterooms, elevated stateroom categories and suites.
                    </p>
                    <div className="cess-compare-wrapper">
                        <table className="cess-compare-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Typical appeal</th>
                                    <th>Outdoor space</th>
                                    <th>Best suited to</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cessCategoriesGlance.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cess-feature-title">{row.category}</td>
                                        <td>{row.appeal}</td>
                                        <td>{row.outdoor}</td>
                                        <td>{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cess-table-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Availability varies by ship and sailing. Celebrity's accommodation pages show different combinations across Edge, Solstice and Millennium Series vessels. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── INSIDE STATEROOMS ── */}
            <section className="cess-inside-section">
                <div className="cess-inside-bg"></div>
                <div className="cess-inside-container">
                    <div className="cess-inside-grid">
                        <div className="cess-inside-image-col">
                            <div className="cess-inside-image-box">
                                <div className="cess-inside-placeholder">
                                    <Home size={44} className="cess-inside-placeholder-icon" />
                                    <span>Inside Stateroom</span>
                                </div>
                                <div className="cess-inside-badge"><Home size={12} /><span>Inside Stateroom</span></div>
                            </div>
                        </div>
                        <div className="cess-inside-text-col">
                            <span className="cess-eyebrow">INSIDE STATEROOMS</span>
                            <h2 className="cess-inside-title">Inside Staterooms: A Practical Choice Without a View</h2>
                            <div className="cess-inside-divider"></div>
                            <p className="cess-inside-lead">Inside staterooms are generally the most straightforward accommodation option for travelers who prioritize itinerary, onboard experiences and price over a private view.</p>
                            <p className="cess-inside-body">They do not have an exterior window or private veranda, but Celebrity describes its inside accommodations as having useful living and storage space. On Edge Series ships, Deluxe Inside and Inside Staterooms feature larger bathrooms and additional drawer space. (Celebrity Cruises)</p>
                            <div className="cess-inside-pills">
                                {cessInsideWorksFor.map((item, idx) => (
                                    <span key={idx}><CheckCircle size={14} />{item}</span>
                                ))}
                            </div>
                            <p className="cess-inside-body">An inside cabin can be particularly practical when the ship and itinerary are more important to you than waking up to an ocean view.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OCEAN VIEW STATEROOMS ── */}
            <section className="cess-ocean-section">
                <div className="cess-ocean-container">
                    <div className="cess-ocean-grid">
                        <div className="cess-ocean-image-col">
                            <div className="cess-ocean-image-box">
                                <div className="cess-ocean-placeholder">
                                    <Eye size={44} className="cess-ocean-placeholder-icon" />
                                    <span>Ocean View Stateroom</span>
                                </div>
                                <div className="cess-ocean-badge"><Eye size={12} /><span>Ocean View</span></div>
                            </div>
                        </div>
                        <div className="cess-ocean-text-col">
                            <span className="cess-eyebrow">OCEAN VIEW STATEROOMS</span>
                            <h2 className="cess-ocean-title">Ocean View Staterooms: Natural Light Without a Balcony</h2>
                            <div className="cess-ocean-divider"></div>
                            <p className="cess-ocean-lead">Ocean View staterooms provide exterior views through a window rather than a private veranda.</p>
                            <p className="cess-ocean-body">Celebrity describes these accommodations as offering large windows and cruise views, while the exact configuration varies by ship. (Celebrity Cruises)</p>
                            <div className="cess-ocean-pills">
                                {cessOceanViewChoose.map((item, idx) => (
                                    <span key={idx}><CheckCircle size={14} />{item}</span>
                                ))}
                            </div>
                            <p className="cess-ocean-body">They can be a useful middle ground if a private balcony is not essential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VERANDA STATEROOMS ── */}
            <section className="cess-feature-section cess-bg-soft">
                <div className="cess-feature-container">
                    <div className="cess-feature-grid">
                        <div className="cess-feature-image-col">
                            <div className="cess-image-frame">
                                <div className="cess-frame-overlay"></div>
                                <div className="cess-image-badge"><Sun size={13} /><span>Traditional Veranda</span></div>
                            </div>
                            <div className="cess-left-footnote-card">
                                <Sparkles size={16} className="cess-footnote-card-icon" />
                                <p className="cess-left-footnote-text">
                                    The value of a balcony is often greatest when the itinerary itself is highly scenic.
                                </p>
                            </div>
                        </div>
                        <div className="cess-feature-text-col">
                            <span className="cess-eyebrow">VERANDA STATEROOMS</span>
                            <h2 className="cess-section-heading">Veranda Staterooms: Private Outdoor Space</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-feature-lead">A traditional Veranda Stateroom adds private outdoor space where you can sit, enjoy the scenery and get fresh sea air without leaving your accommodation.</p>
                            <p className="cess-feature-body">
                                Celebrity highlights veranda staterooms as an option for watching sunsets, enjoying ocean panoramas and spending time outdoors privately. (Celebrity Cruises)
                            </p>
                            <p className="cess-feature-body">A private veranda can be especially useful on:</p>
                            <ul className="cess-check-list">
                                {cessVerandaBest.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INFINITE VERANDA ── */}
            <section className="cess-iv-section">
                <div className="cess-iv-bg"></div>
                <div className="cess-iv-container">
                    <div className="cess-iv-grid">
                        <div className="cess-iv-image-col">
                            <div className="cess-iv-image-box">
                                <div className="cess-iv-placeholder">
                                    <Layers size={44} className="cess-iv-placeholder-icon" />
                                    <span>Infinite Veranda Stateroom</span>
                                </div>
                                <div className="cess-iv-badge"><Layers size={12} /><span>Infinite Veranda</span></div>
                            </div>
                        </div>
                        <div className="cess-iv-text-col">
                            <span className="cess-eyebrow">EDGE SERIES</span>
                            <h2 className="cess-iv-title">What Is a Celebrity Infinite Veranda?</h2>
                            <div className="cess-iv-divider"></div>
                            <p className="cess-iv-lead">The Infinite Veranda is one of Celebrity's distinctive Edge Series accommodation features.</p>
                            <p className="cess-iv-body">Instead of having a conventional balcony extending outside the room, the Infinite Veranda uses a folding window and interior design to transform part of the stateroom into an open-air space.</p>
                            <p className="cess-iv-body">Celebrity describes the system as allowing the living space to become the veranda at the touch of a button. Edge Staterooms with Infinite Verandas are listed at approximately 243 square feet of total living space, including a 42-square-foot veranda, while the exact layout can vary. (Celebrity Cruises)</p>
                        </div>
                    </div>
                    <div className="cess-iv-compare">
                        <h3 className="cess-iv-compare-title">Infinite Veranda vs. Traditional Balcony</h3>
                        <div className="cess-iv-compare-table-wrap">
                            <table className="cess-iv-compare-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Infinite Veranda</th>
                                        <th>Traditional Veranda</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cessInfiniteVsTraditional.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.feature}</td>
                                            <td><span className="cess-iv-badge-inline"><CheckCircle size={12} />{row.infinite}</span></td>
                                            <td>{row.traditional}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="cess-iv-compare-note">
                            <AlertCircle size={14} />
                            <span>If you specifically want a traditional outdoor balcony, check the exact stateroom description rather than assuming every Celebrity veranda is the same.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SINGLE STATEROOMS ── */}
            <section className="cess-single-section">
                <div className="cess-single-container">
                    <div className="cess-single-grid">
                        <div className="cess-single-image-col">
                            <div className="cess-single-image-box">
                                <div className="cess-single-placeholder">
                                    <Users size={44} className="cess-single-placeholder-icon" />
                                    <span>Single Stateroom</span>
                                </div>
                                <div className="cess-single-badge"><Users size={12} /><span>Single Stateroom</span></div>
                            </div>
                        </div>
                        <div className="cess-single-text-col">
                            <span className="cess-eyebrow">SOLO ACCOMMODATIONS</span>
                            <h2 className="cess-single-title">Celebrity Single Staterooms</h2>
                            <div className="cess-single-divider"></div>
                            <p className="cess-single-lead">Celebrity also offers single staterooms designed specifically for solo travelers.</p>
                            <p className="cess-single-body">The Edge Single Stateroom with Infinite Veranda is listed at approximately 184 square feet with a 42-square-foot veranda and is available on Celebrity Edge, Celebrity Apex, Celebrity Beyond and Celebrity Ascent. (Celebrity Cruises)</p>
                            <div className="cess-single-stats">
                                <div className="cess-single-stat">
                                    <span className="cess-single-stat-value">184 sq ft</span>
                                    <span className="cess-single-stat-label">Total Living Space</span>
                                </div>
                                <div className="cess-single-stat">
                                    <span className="cess-single-stat-value">42 sq ft</span>
                                    <span className="cess-single-stat-label">Infinite Veranda</span>
                                </div>
                            </div>
                            <p className="cess-single-body">These cabins can be useful for travelers who want:</p>
                            <div className="cess-single-pills">
                                {cessSingleWants.map((item, idx) => (
                                    <span key={idx}><CheckCircle size={14} />{item}</span>
                                ))}
                            </div>
                            <p className="cess-single-body">Availability is limited, so solo travelers should check the specific sailing before planning around a single stateroom.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONCIERGE CLASS ── */}
            <section className="cess-concierge-section">
                <div className="cess-concierge-bg"></div>
                <div className="cess-concierge-container">
                    <div className="cess-concierge-grid cess-concierge-reverse">
                        <div className="cess-concierge-image-col">
                            <div className="cess-concierge-image-box">
                                <div className="cess-concierge-placeholder">
                                    <Star size={44} className="cess-concierge-placeholder-icon" />
                                    <span>Concierge Class Stateroom</span>
                                </div>
                                <div className="cess-concierge-badge"><Star size={12} /><span>Concierge Class</span></div>
                            </div>
                        </div>
                        <div className="cess-concierge-text-col">
                            <span className="cess-eyebrow">CONCIERGE CLASS</span>
                            <h2 className="cess-section-heading">Celebrity Concierge Class Explained</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-feature-lead">Concierge Class sits above standard stateroom categories and focuses on additional service and amenities.</p>
                            <p className="cess-feature-body">
                                Celebrity describes Concierge Class as providing dedicated service and additional touches such as an exclusive lunch and destination-related programming. (Celebrity Cruises) The exact benefits can vary by ship and current program terms.
                            </p>
                            <p className="cess-feature-body">Concierge Class may appeal to travelers who want:</p>
                            <ul className="cess-check-list">
                                {cessConciergeWants.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="cess-feature-body">It is important to compare the actual benefits and price difference with a standard veranda on your specific sailing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AQUACLASS ── */}
            <section className="cess-aqua-section">
                <div className="cess-aqua-bg"></div>
                <div className="cess-aqua-container">
                    <div className="cess-aqua-top">
                        <div className="cess-aqua-text-col">
                            <span className="cess-eyebrow">AQUACLASS</span>
                            <h2 className="cess-section-heading">Celebrity AquaClass Staterooms</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-dining-intro-text">
                                AquaClass is Celebrity's wellness-focused accommodation category. Celebrity says AquaClass guests can receive benefits such as access to a spa-related thermal area, dining at Blu, spa concierge service, fitness-related benefits and enhanced in-room amenities. The exact wellness facility differs between ship series. (Celebrity Cruises)
                            </p>
                        </div>
                        <div className="cess-aqua-image-col">
                            <div className="cess-aqua-image-box">
                                <div className="cess-aqua-placeholder">
                                    <Waves size={40} className="cess-placeholder-icon" />
                                    <span className="cess-placeholder-text">AquaClass Image Placeholder</span>
                                </div>
                                <div className="cess-image-badge"><Waves size={13} /><span>Wellness Staterooms</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="cess-aqua-series">
                        <div className="cess-dining-card">
                            <div className="cess-dining-card-header">
                                <div className="cess-dining-card-icon-wrapper"><Ship size={18} /></div>
                                <h3 className="cess-dining-card-title">Edge Series</h3>
                            </div>
                            <p className="cess-dining-card-subtitle">Approximately 243 sq. ft. with a 42 sq. ft. veranda:</p>
                            <ul className="cess-dining-tags">
                                {cessAquaEdge.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="cess-dining-card">
                            <div className="cess-dining-card-header">
                                <div className="cess-dining-card-icon-wrapper"><Ship size={18} /></div>
                                <h3 className="cess-dining-card-title">Solstice Series</h3>
                            </div>
                            <p className="cess-dining-card-subtitle">Approximately 192 sq. ft. with a 54 sq. ft. veranda:</p>
                            <ul className="cess-dining-tags">
                                {cessAquaSolstice.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="cess-dining-card">
                            <div className="cess-dining-card-header">
                                <div className="cess-dining-card-icon-wrapper"><Ship size={18} /></div>
                                <h3 className="cess-dining-card-title">Millennium Series</h3>
                            </div>
                            <p className="cess-dining-card-subtitle">Approximately 209 sq. ft. with a 42 sq. ft. veranda:</p>
                            <ul className="cess-dining-tags">
                                {cessAquaMillennium.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    <p className="cess-feature-body cess-aqua-note">Because AquaClass benefits vary by ship, always check the accommodation page for the specific vessel.</p>
                </div>
            </section>

            {/* ── THE RETREAT ── */}
            <section className="cess-retreat-section">
                <div className="cess-retreat-bg"></div>
                <div className="cess-retreat-container">
                    <div className="cess-retreat-grid">
                        <div className="cess-retreat-image-col">
                            <div className="cess-retreat-image-box">
                                <div className="cess-retreat-placeholder">
                                    <Crown size={44} className="cess-retreat-placeholder-icon" />
                                    <span>The Retreat</span>
                                </div>
                                <div className="cess-retreat-badge"><Crown size={12} /><span>The Retreat</span></div>
                            </div>
                            <div className="cess-left-footnote-card">
                                <Crown size={16} className="cess-footnote-card-icon" />
                                <p className="cess-left-footnote-text">
                                    The exact benefits depend on the suite, ship and fare.
                                </p>
                            </div>
                        </div>
                        <div className="cess-retreat-text-col">
                            <span className="cess-eyebrow">SUITE-FOCUSED EXPERIENCE</span>
                            <h2 className="cess-section-heading">What Is The Retreat on Celebrity Cruises?</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-feature-lead">The Retreat is Celebrity's suite-focused accommodation experience.</p>
                            <p className="cess-feature-body">
                                It combines premium suites with exclusive spaces and enhanced services. Celebrity describes The Retreat as including suite accommodations, a private restaurant, an exclusive lounge and a dedicated sundeck on applicable ships. (Celebrity Cruises)
                            </p>
                            <p className="cess-feature-body">
                                The Retreat is substantially different from simply booking a larger cabin. The experience includes both the accommodation and access to dedicated suite benefits.
                            </p>
                            <p className="cess-feature-body">The Retreat can include:</p>
                            <ul className="cess-check-list cess-retreat-list">
                                {cessRetreatIncludes.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITE CATEGORIES ── */}
            <section className="cess-different-section">
                <div className="cess-different-container">
                    <span className="cess-eyebrow">SUITE INVENTORY</span>
                    <h2 className="cess-section-heading">Celebrity Suite Categories</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-different-body">
                        Celebrity's suite inventory varies by ship, but higher-end accommodation can include categories such as:
                    </p>
                    <div className="cess-included-grid">
                        {cessSuiteCategories.map((item, idx) => (
                            <div key={idx} className="cess-included-chip">
                                <Crown size={17} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="cess-different-footer-card">
                        <ShieldCheck size={20} />
                        <span>Not every suite exists on every ship. For example, Celebrity Ascent's current accommodation information lists Iconic Suites, Penthouse Suites, Edge Villas, Royal Suites, Celebrity Suites, Aqua Sky Suites and Sky Suites. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── SKY SUITES ── */}
            <section className="cess-sky-section">
                <div className="cess-sky-bg"></div>
                <div className="cess-sky-container">
                    <span className="cess-eyebrow">ENTRY SUITES</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Sky Suites</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-simple-intro">
                        Sky Suites are among the entry-level suite accommodations within The Retreat on applicable ships. Celebrity Ascent's Sky Suites are listed at approximately 319 square feet with a 79-square-foot veranda. They feature a private veranda, king-size Cashmere mattress and a split bathroom with a spa tub and shower. (Celebrity Cruises)
                    </p>
                    <div className="cess-sky-features">
                        {cessSkySuiteFeatures.map((item, idx) => (
                            <div key={idx} className="cess-mini-card">
                                <CheckCircle size={20} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="cess-simple-intro" style={{ marginTop: '24px' }}>
                        They can be a useful choice for travelers who want the benefits of suite accommodation without moving into the largest suite categories.
                    </p>
                </div>
            </section>

            {/* ── AQUA SKY / CELEBRITY / ROYAL / PENTHOUSE / VILLA / ICONIC SUITES ── */}
            <section className="cess-suite-section">
                <div className="cess-suite-bg"></div>
                <div className="cess-suite-container">
                    <span className="cess-eyebrow">SUITE PROFILES</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Aqua Sky, Celebrity, Royal, Penthouse, <br /> Edge Villa &amp; Iconic Suites</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>

                    <div className="cess-suite-tabs">
                        {cessSuiteTabData.map((tab, idx) => {
                            const Icon = tab.icon;
                            return (
                                <button key={idx} className={`cess-suite-tab ${cessSuiteActiveTab === idx ? 'cess-suite-tab-active' : ''}`} onClick={() => setSuiteActiveTab(idx)}>
                                    <Icon size={16} />
                                    <span>{tab.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {cessSuiteTabData.map((tab, idx) => {
                        if (cessSuiteActiveTab !== idx) return null;
                        const Icon = tab.icon;
                        return (
                            <div key={idx} className="cess-suite-panel">
                                <div className="cess-suite-image-box">
                                    <div className="cess-suite-image-placeholder">
                                        <Icon size={48} className="cess-suite-placeholder-icon" />
                                        <span>{tab.title}</span>
                                    </div>
                                    <div className="cess-suite-image-badge"><Icon size={12} /><span>{tab.title}</span></div>
                                </div>
                                <div className="cess-suite-content-body">
                                    <div className="cess-suite-content-inner">
                                        <h3 className="cess-suite-content-title">{tab.title}</h3>
                                        <div className="cess-suite-content-divider"></div>
                                        <p className="cess-suite-content-text">{tab.text}</p>
                                        {tab.features && (
                                            <div className="cess-suite-features-box">
                                                <p className="cess-suite-features-label">Features can include:</p>
                                                <ul className="cess-suite-features-list">
                                                    {tab.features.map((item, i) => (
                                                        <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* ── STATEROOM SIZES BY SHIP CLASS ── */}
            <section className="cess-sizes-section">
                <div className="cess-sizes-bg"></div>
                <div className="cess-sizes-container">
                    <span className="cess-eyebrow">DIMENSIONS</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Celebrity Stateroom Sizes by Ship Class</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-sizes-intro">
                        There is no single standard size for every Celebrity cabin category. The same category name can have different dimensions depending on the ship series.
                    </p>

                    <div className="cess-sizes-grid">

                        <div className="cess-sizes-card">
                            <div className="cess-sizes-card-header">
                                <Ship size={20} />
                                <h3 className="cess-sizes-card-title">Edge Series</h3>
                            </div>
                            <div className="cess-sizes-card-body">
                                {cessSizesByShip.filter(r => r.ship === 'Edge Series').map((row, idx) => (
                                    <div key={idx} className="cess-sizes-row">
                                        <span className="cess-sizes-name">{row.accommodation}</span>
                                        <span className="cess-sizes-value">{row.size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cess-sizes-card">
                            <div className="cess-sizes-card-header">
                                <Ship size={20} />
                                <h3 className="cess-sizes-card-title">Solstice Series</h3>
                            </div>
                            <div className="cess-sizes-card-body">
                                {cessSizesByShip.filter(r => r.ship === 'Solstice Series').map((row, idx) => (
                                    <div key={idx} className="cess-sizes-row">
                                        <span className="cess-sizes-name">{row.accommodation}</span>
                                        <span className="cess-sizes-value">{row.size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cess-sizes-card">
                            <div className="cess-sizes-card-header">
                                <Ship size={20} />
                                <h3 className="cess-sizes-card-title">Millennium Series</h3>
                            </div>
                            <div className="cess-sizes-card-body">
                                {cessSizesByShip.filter(r => r.ship === 'Millennium Series').map((row, idx) => (
                                    <div key={idx} className="cess-sizes-row">
                                        <span className="cess-sizes-name">{row.accommodation}</span>
                                        <span className="cess-sizes-value">{row.size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cess-sizes-card">
                            <div className="cess-sizes-card-header">
                                <Ship size={20} />
                                <h3 className="cess-sizes-card-title">Celebrity Ascent</h3>
                            </div>
                            <div className="cess-sizes-card-body">
                                {cessSizesByShip.filter(r => r.ship === 'Celebrity Ascent').map((row, idx) => (
                                    <div key={idx} className="cess-sizes-row">
                                        <span className="cess-sizes-name">{row.accommodation}</span>
                                        <span className="cess-sizes-value">{row.size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="cess-sizes-note">
                        <AlertCircle size={14} />
                        <span>These are representative published dimensions, not fleet-wide standards. Always verify the deck plan and specific cabin listing before booking. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── COMMON AMENITIES ── */}
            <section className="cess-amenities-section">
                <div className="cess-amenities-bg"></div>
                <div className="cess-amenities-container">
                    <div className="cess-amenities-grid">
                        <div className="cess-amenities-image-col">
                            <div className="cess-amenities-image-box">
                                <div className="cess-amenities-placeholder">
                                    <Sparkles size={44} className="cess-amenities-placeholder-icon" />
                                    <span>Stateroom Amenities</span>
                                </div>
                                <div className="cess-amenities-badge"><Sparkles size={12} /><span>Amenities</span></div>
                            </div>
                        </div>
                        <div className="cess-amenities-content-col">
                            <span className="cess-eyebrow">IN-ROOM AMENITIES</span>
                            <h2 className="cess-section-heading">What Amenities Are Common in Celebrity Staterooms?</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-amenities-intro">Celebrity accommodation amenities vary according to category and ship, but many rooms feature:</p>
                            <div className="cess-amenities-list">
                                {cessCommonAmenities.map((item, idx) => {
                                    const Icon = [Bed, Sparkles, Globe, Layers, Waves, Ship, ShieldCheck, Wind, DollarSign, Star, Wifi][idx % 11]
                                    return (
                                        <div key={idx} className="cess-amenities-item">
                                            <div className="cess-amenities-icon-wrap"><Icon size={16} /></div>
                                            <span>{item}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="cess-amenities-note">
                                <Sparkles size={14} />
                                <span>Celebrity specifically highlights its eXhale bedding and Cashmere mattress across numerous current accommodation categories and ships. (Celebrity Cruises)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH CABINS HAVE BALCONIES / VERANDA VS INFINITE VERANDA ── */}
            <section className="cess-balcony-section">
                <div className="cess-balcony-container">
                    <span className="cess-eyebrow">OUTDOOR SPACE</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Which Celebrity Cabins Have Balconies?</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-balcony-intro">Several Celebrity accommodation categories can provide private outdoor space, including:</p>

                    <div className="cess-balcony-grid">
                        {cessBalconyCategories.map((item, idx) => (
                            <div key={idx} className="cess-balcony-card">
                                <div className="cess-balcony-card-icon"><CheckCircle size={18} /></div>
                                <span className="cess-balcony-card-text">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="cess-balcony-note">
                        <AlertCircle size={14} />
                        <span>The exact balcony or veranda configuration depends on the ship. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── VERANDA VS INFINITE VERANDA (WHICH SHOULD YOU CHOOSE) ── */}
            <section className="cess-veranda-vs-section">
                <div className="cess-veranda-vs-container">
                    <div className="cess-veranda-vs-header">
                        <span className="cess-eyebrow">DECISION GUIDE</span>
                        <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>What Is the Difference Between a Veranda and an Infinite Veranda?</h2>
                        <div className="cess-heading-separator-bar cess-bar-centered"></div>
                        <p className="cess-veranda-vs-intro">
                            The biggest difference is how the outdoor space connects to the cabin. A traditional veranda is a separate outdoor balcony accessed through a door. An Infinite Veranda incorporates the balcony into the room. A window lowers to create a more open connection between the interior and exterior. Celebrity says the system allows the living area to become the veranda at the touch of a button. (Celebrity Cruises)
                        </p>
                    </div>

                    <div className="cess-veranda-vs-grid">
                        {/* Traditional Veranda Panel */}
                        <div className="cess-veranda-vs-panel">
                            <div className="cess-veranda-vs-visual">
                                <div className="cess-veranda-vs-img-frame">
                                    <div className="cess-veranda-vs-mock-view">
                                        <Sun size={28} className="cess-veranda-vs-sun-icon" />
                                        <span className="cess-veranda-vs-label">Traditional Veranda Layout</span>
                                        <span className="cess-veranda-vs-sublabel">Open-Air Balcony</span>
                                    </div>
                                    <div className="cess-veranda-vs-badge"><Anchor size={12} /><span>Outdoors</span></div>
                                </div>
                            </div>
                            <div className="cess-veranda-vs-content">
                                <h3 className="cess-veranda-vs-title">Traditional Veranda</h3>
                                <div className="cess-veranda-vs-divider"></div>
                                <ul className="cess-veranda-vs-list">
                                    {cessChooseTraditional.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Infinite Veranda Panel */}
                        <div className="cess-veranda-vs-panel">
                            <div className="cess-veranda-vs-visual">
                                <div className="cess-veranda-vs-img-frame">
                                    <div className="cess-veranda-vs-mock-view">
                                        <Layers size={28} className="cess-veranda-vs-layers-icon" />
                                        <span className="cess-veranda-vs-label">Infinite Veranda Layout</span>
                                        <span className="cess-veranda-vs-sublabel">Bi-Fold Retractable Glass</span>
                                    </div>
                                    <div className="cess-veranda-vs-badge"><Waves size={12} /><span>Seamless Interior</span></div>
                                </div>
                            </div>
                            <div className="cess-veranda-vs-content">
                                <h3 className="cess-veranda-vs-title">Infinite Veranda</h3>
                                <div className="cess-veranda-vs-divider"></div>
                                <ul className="cess-veranda-vs-list">
                                    {cessChooseInfinite.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST STATEROOM CATEGORY BY TRAVELER ── */}
            <section className="cess-traveler-match-section">
                <div className="cess-traveler-match-container">
                    <div className="cess-traveler-match-header">
                        <span className="cess-eyebrow">MATCH YOUR TRAVEL STYLE</span>
                        <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Which Celebrity Stateroom Category Is Best for Different Travelers?</h2>
                        <div className="cess-heading-separator-bar cess-bar-centered"></div>
                        <p className="cess-traveler-match-intro">There is no single best cabin for every passenger. Find the perfect fit for your vacation priority:</p>
                    </div>

                    <div className="cess-traveler-match-grid">
                        {cessBestForTravelers.map((row, idx) => (
                            <div key={idx} className="cess-traveler-match-card">
                                <div className="cess-traveler-match-card-content">
                                    <span className="cess-traveler-match-priority">{row.priority}</span>
                                    <div className="cess-traveler-match-badge">
                                        <CheckCircle size={14} />
                                        <span>{row.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cess-traveler-match-footer-badge">
                        <Award size={15} />
                        <span>Celebrity notes that many connecting stateroom configurations are available on Edge Series ships, making them useful for families and groups. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE THE RIGHT CABIN ── */}
            <section className="cess-choose-cabin-section">
                <div className="cess-choose-cabin-container">
                    <div className="cess-choose-cabin-header">
                        <span className="cess-eyebrow">STEP BY STEP</span>
                        <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>How to Choose the Right Celebrity Cabin</h2>
                        <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    </div>

                    <div className="cess-choose-cabin-grid">
                        {[
                            { step: '01', title: 'Start With Your Itinerary.', text: 'A balcony can be particularly valuable on scenic routes. For Alaska, Mediterranean and other destination-focused cruises, consider whether you will spend enough time watching the scenery from your cabin to justify the additional cost.' },
                            { step: '02', title: 'Decide Whether Outdoor Space Matters.', text: 'If you expect to sit outside regularly, a veranda may be worth prioritizing. If you mainly use the room for sleeping and changing, an inside cabin can leave more budget for excursions and dining.' },
                            { step: '03', title: 'Compare the Ship, Not Just the Cabin Name.', text: 'A "Veranda" on one Celebrity ship may not have exactly the same dimensions or layout as a veranda on another.' },
                            { step: '04', title: 'Check the Deck Plan.', text: 'The deck plan can reveal important information that a category name does not.' },
                            { step: '05', title: 'Consider the View.', text: 'An ocean view is not necessarily the same as an unobstructed panoramic view. Check the specific cabin description and deck plan before paying more for a view.' }
                        ].map((item, idx) => (
                            <div key={idx} className="cess-choose-cabin-card">
                                <div className="cess-choose-cabin-card-header">
                                    <div className="cess-choose-cabin-num-badge">
                                        <span>{item.step}</span>
                                    </div>
                                    <h3 className="cess-choose-cabin-card-title">{item.title}</h3>
                                </div>
                                <div className="cess-choose-cabin-card-line"></div>
                                <p className="cess-choose-cabin-text">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cess-choose-cabin-footer-grid">
                        <div className="cess-choose-cabin-pill-box">
                            <h4 className="cess-choose-cabin-pill-title">Always check:</h4>
                            <div className="cess-choose-cabin-pills">
                                {cessCheckBeforeBooking.map((item, idx) => (
                                    <span key={idx} className="cess-choose-cabin-pill">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="cess-choose-cabin-pill-box">
                            <h4 className="cess-choose-cabin-pill-title">Look for cabins:</h4>
                            <div className="cess-choose-cabin-pills">
                                {cessDeckPlanChecks.map((item, idx) => (
                                    <span key={idx} className="cess-choose-cabin-pill">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATEROOMS VS SUITES ── */}
            <section className="cess-table-section cess-bg-soft">
                <div className="cess-table-container" style={{ maxWidth: '1000px' }}>
                    <span className="cess-eyebrow">HOW THEY COMPARE</span>
                    <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Celebrity Staterooms vs. Suites</h2>
                    <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    <p className="cess-table-intro">
                        The primary difference is not simply room size. Suites can provide an elevated onboard experience through additional services, exclusive spaces and dining options.
                    </p>
                    <div className="cess-compare-wrapper">
                        <table className="cess-compare-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Standard Stateroom</th>
                                    <th>AquaClass</th>
                                    <th className="cess-uni-header">The Retreat Suite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cessStandardVsAquaVsRetreat.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cess-feature-title">{row.feature}</td>
                                        <td>{row.standard}</td>
                                        <td>{row.aqua}</td>
                                        <td className="cess-uni-cell"><span className="cess-uni-badge"><CheckCircle size={13} /><span>{row.retreat}</span></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cess-table-footnote-badge">
                        <AlertCircle size={15} />
                        <span>The exact benefits depend on the ship, suite category and fare conditions. (Celebrity Cruises)</span>
                    </div>
                </div>
            </section>

            {/* ── FAMILIES ── */}
            <section className="cess-feature-section">
                <div className="cess-feature-container">
                    <div className="cess-feature-grid cess-reverse">
                        <div className="cess-feature-image-col">
                            <div className="cess-image-frame">
                                <div className="cess-frame-overlay"></div>
                                <div className="cess-image-badge"><Users size={13} /><span>Family Cabins</span></div>
                            </div>
                        </div>
                        <div className="cess-feature-text-col">
                            <span className="cess-eyebrow">TRAVELING WITH FAMILY</span>
                            <h2 className="cess-section-heading">Celebrity Staterooms for Families</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-feature-lead">Families should consider more than the number of beds. Look for:</p>
                            <ul className="cess-check-list">
                                {cessFamilyChecklist.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="cess-feature-body">
                                Celebrity's Edge Series accommodation information highlights numerous connecting-stateroom configurations, including combinations designed to keep families and accompanying travelers close together. (Celebrity Cruises) Always verify the maximum occupancy and exact bedding configuration before booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SOLO TRAVELERS ── */}
            <section className="cess-feature-section cess-bg-soft">
                <div className="cess-feature-container">
                    <div className="cess-feature-grid">
                        <div className="cess-feature-image-col">
                            <div className="cess-image-frame">
                                <div className="cess-frame-overlay"></div>
                                <div className="cess-image-badge"><Users size={13} /><span>Solo Travel</span></div>
                            </div>
                        </div>
                        <div className="cess-feature-text-col">
                            <span className="cess-eyebrow">TRAVELING SOLO</span>
                            <h2 className="cess-section-heading">Celebrity Staterooms for Solo Travelers</h2>
                            <div className="cess-heading-separator-bar"></div>
                            <p className="cess-feature-lead">
                                Solo travelers should look for dedicated single cabins where available, particularly if avoiding the cost of booking a larger double-occupancy cabin alone is important.
                            </p>
                            <p className="cess-feature-body">
                                Celebrity's Edge Single Stateroom with Infinite Veranda is one example of a cabin designed specifically around solo occupancy. (Celebrity Cruises)
                            </p>
                            <p className="cess-feature-body">
                                Availability can be limited compared with standard staterooms, so booking early can be important on popular sailings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO CHECK BEFORE BOOKING ── */}
            <section className="cess-booking-checks-section-clean">
                <div className="cess-booking-checks-container-clean">
                    <div className="cess-booking-checks-clean-grid">
                        <div className="cess-booking-checks-clean-left">
                            <span className="cess-eyebrow">DUE DILIGENCE</span>
                            <h2 className="cess-booking-checks-clean-title">What Cabin Features Should You Check Before Booking?</h2>
                            <div className="cess-booking-checks-clean-divider"></div>
                            <p className="cess-booking-checks-clean-intro">Before selecting a Celebrity stateroom, review these critical layout and structural details to avoid surprises.</p>
                        </div>
                        <div className="cess-booking-checks-clean-right">
                            <div className="cess-booking-checks-clean-list">
                                {cessBookingChecks.map((block, idx) => {
                                    const Icon = block.Icon
                                    return (
                                        <div key={idx} className="cess-booking-checks-clean-item">
                                            <div className="cess-booking-checks-clean-header-row">
                                                <div className="cess-booking-checks-clean-icon-wrap">
                                                    <Icon size={20} />
                                                </div>
                                                <h3 className="cess-booking-checks-clean-item-title">{block.title}</h3>
                                            </div>
                                            <p className="cess-booking-checks-clean-body">{block.body}</p>
                                            {block.items.length > 0 && (
                                                <ul className="cess-booking-checks-clean-checklist">
                                                    {block.items.map((item, i) => (
                                                        <li key={i}><CheckCircle size={13} /><span>{item}</span></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CABIN LOCATION TIPS ── */}
            <section className="cess-loc-tips-section">
                <div className="cess-loc-tips-container">
                    <div className="cess-loc-tips-header">
                        <span className="cess-eyebrow">WHERE TO BOOK</span>
                        <h2 className="cess-section-heading" style={{ textAlign: 'center' }}>Celebrity Cabin Location Tips</h2>
                        <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    </div>

                    <div className="cess-loc-tips-grid">
                        {cessLocationTips.map((item, idx) => {
                            const Icon = item.Icon
                            return (
                                <div key={idx} className="cess-loc-tips-card">
                                    <div className="cess-loc-tips-card-header">
                                        <div className="cess-loc-tips-icon-wrap">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="cess-loc-tips-title">{item.title}</h3>
                                    </div>
                                    <div className="cess-loc-tips-card-line"></div>
                                    <p className="cess-loc-tips-text">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── SUITE EXTRA BENEFITS & ACCESSIBILITY ── */}
            <section className="cess-info-split-section">
                <div className="cess-info-split-container">
                    <div className="cess-info-split-grid">
                        <div className="cess-info-split-col">
                            <div className="cess-info-split-header">
                                <div className="cess-info-split-icon-wrap"><Crown size={22} /></div>
                                <h3 className="cess-info-split-title">Do Celebrity Suites Include Extra Benefits?</h3>
                            </div>
                            <div className="cess-info-split-divider"></div>
                            <p className="cess-info-split-body">
                                Yes. Suites within The Retreat can receive benefits beyond the physical accommodation. For example, Celebrity's current information for Celebrity Suites lists benefits such as Premium Wi-Fi, Premium Drinks, suite-specific dining, dedicated services, priority embarkation and other amenities, subject to the applicable fare and ship. (Celebrity Cruises)
                            </p>
                            <p className="cess-info-split-note">The exact package should be confirmed for the specific booking because some benefits have exceptions for promotional fares or certain upgrade types.</p>
                        </div>

                        <div className="cess-info-split-col">
                            <div className="cess-info-split-header">
                                <div className="cess-info-split-icon-wrap"><Heart size={22} /></div>
                                <h3 className="cess-info-split-title">Are Celebrity Staterooms Accessible?</h3>
                            </div>
                            <div className="cess-info-split-divider"></div>
                            <p className="cess-info-split-body">
                                Celebrity provides accessible accommodation and accessibility features across its fleet, but cabin availability and configurations vary. Travelers requiring an accessible stateroom should identify their needs when booking and verify the exact cabin layout rather than relying solely on the category name. Important considerations can include:
                            </p>
                            <ul className="cess-info-split-checklist">
                                {cessAccessibilityConsiderations.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="cess-info-split-note">For specific accessibility requirements, verify details directly with Celebrity before finalizing a reservation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUE ── */}
            <section className="cess-value-section">
                <div className="cess-value-container">
                    <div className="cess-value-grid">
                        <div className="cess-value-left-col">
                            <div className="cess-value-eyebrow-row">
                                <Gem size={18} />
                                <span className="cess-value-eyebrow-text">MAXIMIZING VALUE</span>
                            </div>
                            <h2 className="cess-value-heading">How to Get Better Value From a Celebrity Stateroom</h2>
                            <div className="cess-value-separator"></div>
                            <p className="cess-value-body-lead">A more expensive cabin is not automatically better value.</p>
                            <p className="cess-value-body-desc">
                                The right choice depends on how much you will actually use the accommodation.
                            </p>
                            <div className="cess-value-quote-card">
                                <span className="cess-quote-mark">"</span>
                                <p className="cess-value-emphasis">
                                    The most important point is that there is no universal "best" Celebrity cabin — the right choice depends on the ship, itinerary, budget and how much time you expect to spend in your room.
                                </p>
                            </div>
                        </div>

                        <div className="cess-value-right-col">
                            <div className="cess-value-inclusion-card">
                                <h3 className="cess-inclusion-card-title">Consider Spending More When</h3>
                                <div className="cess-value-list-items">
                                    {cessSpendMore.map((item, idx) => (
                                        <div key={idx} className="cess-value-list-item">
                                            <CheckCircle size={16} className="cess-value-item-icon" />
                                            <div className="cess-value-item-details">
                                                <span className="cess-value-item-title">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="cess-inclusion-card-title" style={{ marginTop: '22px' }}>Consider Spending Less When</h3>
                                <div className="cess-value-list-items">
                                    {cessSpendLess.map((item, idx) => (
                                        <div key={idx} className="cess-value-list-item">
                                            <XCircle size={16} className="cess-value-item-icon" />
                                            <div className="cess-value-item-details">
                                                <span className="cess-value-item-title">{item}</span>
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
            <section className="cess-takeaways-section-clean">
                <div className="cess-takeaways-container-clean">
                    <div className="cess-takeaways-clean-grid">
                        <div className="cess-takeaways-clean-left">
                            <span className="cess-eyebrow">SUMMARY</span>
                            <h2 className="cess-takeaways-clean-title">Key Takeaways</h2>
                            <div className="cess-takeaways-clean-divider"></div>
                            <p className="cess-takeaways-clean-intro">A quick reference summary of critical stateroom and suite choices to guide your selection.</p>
                        </div>
                        <div className="cess-takeaways-clean-right">
                            <div className="cess-takeaways-clean-list">
                                {cessKeyTakeaways.map((item, idx) => (
                                    <div key={idx} className="cess-takeaways-clean-item">
                                        <div className="cess-takeaways-clean-badge">
                                            <span>{idx + 1}</span>
                                        </div>
                                        <p className="cess-takeaways-clean-text">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="cess-expert-insight-section">
                <div className="cess-expert-insight-container">

                    <div className="cess-expert-portrait-panel">
                        <div className="cess-expert-img-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" className="cess-expert-img" />
                            <div className="cess-expert-img-overlay"></div>
                            <span className="cess-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="cess-expert-stats-strip">
                            <div className="cess-expert-stat-box">
                                <div className="cess-expert-stat-num">40+</div>
                                <div className="cess-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="cess-expert-stat-box">
                                <div className="cess-expert-stat-num">121+</div>
                                <div className="cess-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    <div className="cess-expert-content-panel">
                        <div className="cess-expert-eyebrow-row">
                            <Sparkles size={16} />
                            <span className="cess-eyebrow">MEET THE CEO</span>
                        </div>
                        <h2 className="cess-section-heading1">Insight from Angela Hughes</h2>
                        <div className="cess-heading-separator-bar"></div>

                        <div className="cess-expert-quote-card">
                            <span className="cess-expert-quote-mark">"</span>
                            <p className="cess-expert-quote-text">
                                Choosing a Celebrity stateroom isn't about picking the biggest cabin you can afford — it's about matching the accommodation to how you'll actually spend your days at sea. A veranda changes everything on a scenic sailing, while a well-placed inside cabin can free up your budget for the experiences that matter most.
                            </p>
                        </div>

                        <div className="cess-expert-priorities">
                            <h5 className="cess-priorities-title">What Matters Most When Choosing a Stateroom:</h5>
                            <div className="cess-expert-pills">
                                {['Itinerary & Scenery', 'Outdoor Space Priorities', 'Ship-Specific Layouts', 'Wellness & AquaClass', 'Suite-Level Service', 'Deck Plan Details'].map(pill => (
                                    <span key={pill} className="cess-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="cess-expert-footer-bio">
                            <p className="cess-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>

                </div>
            </section>



            {/* ── FAQ ── */}
            <section className="cess-faq-section">
                <div className="cess-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="cess-section-heading">Frequently Asked Questions</h2>
                        <div className="cess-heading-separator-bar cess-bar-centered"></div>
                    </div>
                    <div className="cess-faq-list-wrapper">
                        {cessFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="cess-faq-item"
                                onClick={() => cessToggleFaq(index)}
                            >
                                <div className="cess-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="cess-faq-toggle-icon">{cessActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {cessActiveFaq === index && (
                                    <p className="cess-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── CTA ── */}
            <section className="cess-cta-redesign-section">
                <div className="cess-cta-aurora-glow"></div>
                <div className="cess-cta-crystal cess-cta-crystal-1"></div>
                <div className="cess-cta-crystal cess-cta-crystal-2"></div>
                <div className="cess-cta-crystal cess-cta-crystal-3"></div>
                <div className="cess-cta-grid-lines"></div>

                <div className="cess-cta-content">
                    <div className="cess-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="cess-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="cess-cta-title">Planning a Celebrity Cruise?</h2>
                    <div className="cess-cta-bar"></div>
                    <p className="cess-cta-subtitle">
                        Compare the exact stateroom categories, deck locations, balcony sizes and suite benefits for your ship before booking. A small difference in cabin category can change the experience significantly, so check the deck plan and individual cabin details rather than choosing solely by price.
                    </p>
                    <div className="cess-cta-actions">
                        <Link to="/contact" className="cess-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="cess-cta-btn-arrow" />
                        </Link>
                        <Link to="/celebrity-cruises" className="cess-cta-secondary-btn">
                            <LayoutList size={18} />
                            <span>Explore Celebrity Cruises</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CelebrityStateroomsSuitesGuide