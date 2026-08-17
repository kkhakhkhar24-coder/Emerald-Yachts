import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityedgevssolsticeseries.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Compass,
    Waves,
    UtensilsCrossed,
    Music,
    Sun,
    Trees,
    Crown,
    Trophy,
    Palmtree,
    Globe,
    FileSearch,
    BedDouble,
    BadgePercent,
    Calendar,
    Plane,
    Sliders,
    HeartHandshake,
    Star,
    Layers,
    Building2,
    Utensils,
    Theater,
    Award
} from 'lucide-react'

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain
   inline placeholders, matches reference page's icon approach)
   ============================================================ */
function EvssIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function EvssIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function EvssIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function EvssIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function EvssIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function EvssIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function EvssIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function EvssPlaceholder({ label, className = '' }) {
    return (
        <div className={`cbcs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <EvssIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityEdgeVsSolsticeSeries() {
    const [evssActiveFaq, setEvssActiveFaq] = useState(null)
    const evssToggleFaq = (index) => {
        setEvssActiveFaq(evssActiveFaq === index ? null : index)
    }

    /* ============== AT A GLANCE COMPARISON TABLE ============== */
    const evssGlanceRows = [
        { feature: 'Launch Years', edge: '2018–Present', solstice: '2008–2012' },
        { feature: 'Newest Technology', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐☆' },
        { feature: 'Modern Design', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐☆' },
        { feature: 'Traditional Layout', edge: '⭐⭐⭐☆☆', solstice: '⭐⭐⭐⭐⭐' },
        { feature: 'Dining', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐⭐' },
        { feature: 'Entertainment', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐☆' },
        { feature: 'Luxury Suites', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐☆' },
        { feature: 'Overall Experience', edge: '⭐⭐⭐⭐⭐', solstice: '⭐⭐⭐⭐⭐' }
    ]

    /* ============== SHIPS INCLUDED ============== */
    const evssEdgeShips = [
        'Celebrity Edge',
        'Celebrity Apex',
        'Celebrity Beyond',
        'Celebrity Ascent',
        'Celebrity Xcel (Newest Edge Series Ship)'
    ]
    const evssSolsticeShips = [
        'Celebrity Solstice',
        'Celebrity Equinox',
        'Celebrity Eclipse',
        'Celebrity Silhouette',
        'Celebrity Reflection'
    ]

    /* ============== SHIP SIZE COMPARISON ============== */
    const evssSizeRows = [
        { category: 'Guest Capacity', edge: '2,900–3,260', solstice: '2,850–3,050' },
        { category: 'Gross Tonnage', edge: 'Larger', solstice: 'Slightly Smaller' },
        { category: 'Public Spaces', edge: 'More Open', solstice: 'Traditional Layout' },
        { category: 'Outdoor Areas', edge: 'Modern Design', solstice: 'Larger Open Decks' }
    ]

    /* ============== SHIP DESIGN ============== */
    const evssDesignEdge = [
        'Open-air architecture',
        'Floor-to-ceiling windows',
        'Multi-level public spaces',
        'Resort-style atmosphere',
        'Modern luxury interiors'
    ]
    const evssDesignSolstice = [
        'Grand atriums',
        'Traditional promenade',
        'Real grass Lawn Club',
        'Comfortable public lounges',
        'Classic luxury styling'
    ]

    /* ============== INFINITE VERANDAS VS BALCONIES ============== */
    const evssVerandaEdgePros = ['Larger living area', 'Panoramic views', 'Modern design']
    const evssVerandaEdgeCons = ['Not a traditional balcony']
    const evssVerandaSolsticePros = ['Fresh ocean air', 'Private outdoor space', 'Familiar balcony experience']
    const evssVerandaSolsticeCons = ['Smaller interior cabin space']

    /* ============== DINING COMPARISON ============== */
    const evssDiningEdge = ['Fine Cut Steakhouse', 'Eden Restaurant', 'Raw on 5', 'Le Voyage (select ships)', 'Four Main Dining Restaurants']
    const evssDiningSolstice = ['Murano', 'Tuscan Grille', 'Sushi on Five', 'Lawn Club Grill (select ships)', 'Main Restaurant']

    /* ============== ENTERTAINMENT ============== */
    const evssEntertainmentEdge = ['The Theatre', 'Eden performances', 'Interactive productions', 'Live music', 'Rooftop events']
    const evssEntertainmentSolstice = ['Broadway-style shows', 'Live music', 'Martini Bar', 'Casino', 'Evening performances']

    /* ============== SUITE EXPERIENCE (SHARED) ============== */
    const evssRetreatFeatures = ['Butler service', 'Luminae Restaurant', 'Retreat Lounge', 'Private sundeck', 'Concierge services']

    /* ============== POOLS & OUTDOOR SPACES ============== */
    const evssPoolsEdge = ['Resort Deck', 'Rooftop Garden', 'Solarium', 'Contemporary pool design']
    const evssPoolsSolstice = ['Lawn Club', 'Larger open decks', 'Solarium', 'Sunset Bar', 'Resort-style pool']

    /* ============== DESTINATIONS ============== */
    const evssDestinationsCaribbean = ['Eastern Caribbean', 'Western Caribbean', 'Southern Caribbean']
    const evssDestinationsEurope = ['Mediterranean', 'Greek Isles', 'Italy', 'France', 'Spain']

    /* ============== WHAT'S INCLUDED ============== */
    const evssIncluded = [
        'Luxury accommodations', 'Complimentary dining', 'Entertainment', 'Fitness Center',
        'Pools', 'Youth programs', 'Transportation between ports'
    ]

    /* ============== PROS & CONS (BOTH SERIES) ============== */
    const evssEdgePros = ['Newest ships', 'Innovative design', 'Magic Carpet', 'Infinite Verandas', 'Outstanding entertainment', 'Modern luxury']
    const evssEdgeCons = ["Infinite Verandas aren't for everyone", 'Premium pricing']
    const evssSolsticePros = ['Traditional balconies', 'Lawn Club', 'Classic cruise layout', 'Spacious outdoor decks', 'Excellent value']
    const evssSolsticeCons = ['Older ships', 'Fewer modern innovations']

    /* ============== WHICH SHIP CLASS IS BEST ============== */
    const evssChooseEdge = ["Celebrity's newest ships", 'Modern luxury', 'Innovative ship design', 'Premium entertainment', 'Magic Carpet', 'Infinite Veranda cabins']
    const evssChooseSolstice = ['Traditional balconies', 'Classic cruise experience', 'Larger outdoor spaces', 'Lawn Club', 'Excellent value', 'Familiar ship layout']

    /* ============== WHY BOOK WITH TRIPS & SHIPS ============== */
    const evssWhyBook = [
        { title: 'Compare every Celebrity ship class', icon: FileSearch },
        { title: 'Choose the right cabin or suite', icon: BedDouble },
        { title: 'Find exclusive promotions', icon: BadgePercent },
        { title: 'Arrange flights and hotels', icon: Plane },
        { title: 'Plan pre- and post-cruise stays', icon: Calendar },
        { title: 'Coordinate private transfers', icon: Sliders },
        { title: 'Provide concierge-level planning before, during, and after your cruise', icon: HeartHandshake }
    ]

    /* ============== FAQ ============== */
    const evssFaqs = [
        {
            question: '1. What is the difference between Celebrity Edge Series and Solstice Series?',
            answer: "The biggest difference is the overall ship design and onboard experience. The Edge Series features Celebrity Cruises' newest innovations, including Infinite Veranda staterooms, the Magic Carpet, Eden, expanded Retreat areas, and a contemporary open-air layout. The Solstice Series offers a more traditional cruise experience with classic balconies, the popular Lawn Club, elegant public spaces, and a familiar ship layout that many repeat Celebrity guests enjoy."
        },
        {
            question: '2. Which Celebrity ship class is newer?',
            answer: "The Edge Series is Celebrity Cruises' newest ship class. Ships include Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, and Celebrity Xcel. The Solstice Series was introduced earlier and includes Celebrity Solstice, Celebrity Equinox, Celebrity Eclipse, Celebrity Silhouette, and Celebrity Reflection. If having the latest technology and ship design is important, the Edge Series is the better choice."
        },
        {
            question: '3. Are Infinite Veranda cabins worth it?',
            answer: "For many travelers, yes. Infinite Veranda cabins extend your living space by incorporating the balcony into the room with floor-to-ceiling windows that open electronically. They're ideal for guests who enjoy panoramic views and a larger interior space. However, travelers who prefer sitting outside on a traditional balcony may prefer the Solstice Series."
        },
        {
            question: '4. Which ship class has better dining?',
            answer: "Both offer outstanding dining experiences, but the Edge Series has a slight advantage thanks to newer concepts and more immersive specialty restaurants. Popular Edge Series venues include Eden Restaurant, Fine Cut Steakhouse, Raw on 5, and Le Voyage (select ships). The Solstice Series also offers exceptional restaurants such as Murano, Tuscan Grille, and Lawn Club Grill. Food lovers will enjoy either option."
        },
        {
            question: '5. Which offers better entertainment?',
            answer: 'The Edge Series generally provides more modern entertainment with immersive productions, advanced theater technology, Eden performances, and interactive experiences. The Solstice Series focuses on Broadway-style productions, live music, comedy, and traditional evening entertainment. Guests seeking cutting-edge performances often prefer the Edge Series.'
        },
        {
            question: '6. Is The Retreat available on both ship classes?',
            answer: "Yes. Both ship classes feature The Retreat, Celebrity Cruises' luxury suite experience. Guests staying in Retreat Suites enjoy butler service, private Luminae Restaurant, Retreat Lounge, exclusive sundeck, concierge services, and priority embarkation. The Edge Series offers larger and more modern Retreat spaces."
        },
        {
            question: '7. Which ship class is better for first-time cruisers?',
            answer: "Both are excellent choices. Choose the Edge Series if you want Celebrity's newest innovations and a modern luxury atmosphere. Choose the Solstice Series if you prefer a more traditional cruise layout with familiar balcony staterooms and excellent value. Many first-time Celebrity guests enjoy the Edge Series because of its unique onboard experiences."
        },
        {
            question: '8. Which ship class has traditional balconies?',
            answer: 'The Solstice Series. Guests who enjoy stepping outside onto a private balcony with outdoor seating often prefer Solstice ships. The Edge Series primarily features Infinite Veranda staterooms, which integrate the balcony into the cabin rather than offering a traditional outdoor balcony.'
        },
        {
            question: '9. Which ship class is better for couples?',
            answer: 'Both ship classes are outstanding for couples. The Edge Series offers modern luxury, romantic restaurants, Rooftop Garden, Eden, and Magic Carpet. The Solstice Series offers quiet outdoor spaces, Lawn Club, elegant atmosphere, and a classic cruise experience. Couples celebrating anniversaries or honeymoons often choose the Edge Series.'
        },
        {
            question: '10. Which ship class is better for families?',
            answer: 'Both accommodate families well. Families appreciate spacious staterooms, youth programs, pools, entertainment, and family-friendly dining. The Edge Series offers newer family accommodations, while the Solstice Series provides a more relaxed atmosphere and traditional ship layout.'
        },
        {
            question: '11. Do both ship classes sail Europe and the Caribbean?',
            answer: 'Yes. Both the Edge Series and Solstice Series sail popular itineraries throughout Europe (Mediterranean, Greek Isles, Italy, France, Spain) and the Caribbean (Eastern, Western, and Southern Caribbean). Some Solstice ships also sail Alaska, Australia, Asia, and South America seasonally.'
        },
        {
            question: '12. Which ship class offers better value?',
            answer: "The Solstice Series often provides better pricing while still delivering Celebrity's premium service and excellent dining. The Edge Series generally commands higher fares because of its newer ships, innovative design, and expanded luxury experiences. Budget-conscious travelers frequently find excellent value on Solstice ships."
        },
        {
            question: '13. Is Celebrity Edge Series more luxurious?',
            answer: "Yes, overall. The Edge Series offers newer accommodations, expanded Retreat suites, more modern public spaces, contemporary luxury design, innovative technology, and premium entertainment. While both ship classes deliver Celebrity's signature premium experience, the Edge Series represents the cruise line's newest vision of luxury cruising."
        },
        {
            question: '14. Which Celebrity ship class should I choose?',
            answer: 'Choose the Edge Series if you want the newest ships, modern luxury, Magic Carpet, Infinite Veranda cabins, innovative entertainment, and contemporary design. Choose the Solstice Series if you prefer traditional balconies, classic cruise atmosphere, Lawn Club, spacious outdoor decks, lower cruise fares, and traditional ship layouts. Both ship classes deliver exceptional service and memorable vacations.'
        },
        {
            question: '15. Why book with Trips & Ships Luxury Travel?',
            answer: 'Booking through Trips & Ships Luxury Travel provides expert guidance from experienced luxury cruise specialists. Our team helps you compare every Celebrity ship class, select the best cabin or suite, find exclusive cruise promotions, arrange flights and hotels, plan pre- and post-cruise stays, coordinate private transfers, match you with the right itinerary based on your travel style, and provide concierge-level support before, during, and after your cruise.'
        }
    ]

    /* ============== RELATED GUIDES (4/5 related content CTA) ============== */
    const evssRelatedGuides = [
        {
            title: 'Celebrity Beyond Cruise Ship Guide',
            desc: "Deck plans, cabins, The Retreat, dining, and everything to know before booking Celebrity's most refined Edge Series ship.",
            icon: Ship,
            link: '/celebrity-cruises/ships/celebrity-beyond'
        },
        {
            title: 'Celebrity Edge Cruise Ship Guide',
            desc: 'A full walkthrough of the ship that started it all — Infinite Verandas, the Magic Carpet, and modern design.',
            icon: Compass,
            link: '/celebrity-cruises/ships/celebrity-edge'
        },
        {
            title: 'Celebrity Solstice Cruise Ship Guide',
            desc: 'Explore the ship that launched the Solstice Series, with the original Lawn Club and classic cruise styling.',
            icon: Waves,
            link: '/celebrity-cruises/ships/celebrity-solstice'
        },
        {
            title: 'The Retreat: Luxury Suite Guide',
            desc: "A closer look at Celebrity's ship-within-a-ship suite experience, available across both Edge and Solstice ships.",
            icon: Crown,
            link: '/celebrity-cruises/the-retreat'
        },
        {
            title: 'Best Celebrity Cruises for Couples',
            desc: 'Our top picks across both ship classes for anniversaries, honeymoons, and romantic getaways at sea.',
            icon: HeartHandshake,
            link: '/celebrity-cruises/best-for-couples'
        }
    ]

    const evssSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series",
                "name": "Celebrity Edge Series vs Solstice Series",
                "url": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series",
                "description": "Compare Celebrity Edge Series vs Solstice Series cruise ships including ship size, design, Infinite Verandas, dining, entertainment, accommodations, itineraries, and overall cruise experience.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "Founder & CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series#article",
                "headline": "Celebrity Edge Series vs Solstice Series",
                "url": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series",
                "description": "Expert comparison of Celebrity Edge Series vs Solstice Series cruise ships including design, Infinite Verandas, dining, entertainment, accommodations, itineraries, and luxury cruise planning advice.",
                "image": "https://www.tripsandships.com/images/celebrity-edge-series-vs-solstice-series.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Cruise Comparison & Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Celebrity Cruises planning services helping travelers compare ship classes, choose cabins, select itineraries, and receive personalized cruise planning."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Edge Series vs Solstice Series", "item": "https://www.tripsandships.com/celebrity-cruises/edge-vs-solstice-series" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is the difference between Celebrity Edge Series and Solstice Series?", "acceptedAnswer": { "@type": "Answer", "text": "The biggest difference is the overall ship design and onboard experience. The Edge Series features Celebrity Cruises' newest innovations including Infinite Veranda staterooms, the Magic Carpet, Eden, expanded Retreat areas, and a contemporary open-air layout. The Solstice Series offers a more traditional cruise experience with classic balconies, the popular Lawn Club, elegant public spaces, and a familiar ship layout." } },
                    { "@type": "Question", "name": "Which Celebrity ship class is newer?", "acceptedAnswer": { "@type": "Answer", "text": "The Edge Series is Celebrity Cruises' newest ship class and includes Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, and Celebrity Xcel. The Solstice Series includes Celebrity Solstice, Celebrity Equinox, Celebrity Eclipse, Celebrity Silhouette, and Celebrity Reflection." } },
                    { "@type": "Question", "name": "Are Infinite Veranda cabins worth it?", "acceptedAnswer": { "@type": "Answer", "text": "For many travelers, yes. Infinite Veranda cabins extend your living space by incorporating the balcony into the room with floor-to-ceiling windows that open electronically. Travelers who prefer traditional outdoor balconies may prefer the Solstice Series." } },
                    { "@type": "Question", "name": "Which ship class has better dining?", "acceptedAnswer": { "@type": "Answer", "text": "Both ship classes offer exceptional dining, but the Edge Series has a slight advantage thanks to newer concepts and immersive specialty restaurants including Eden Restaurant, Fine Cut Steakhouse, Raw on 5, and Le Voyage on select ships." } },
                    { "@type": "Question", "name": "Which offers better entertainment?", "acceptedAnswer": { "@type": "Answer", "text": "The Edge Series generally provides more modern entertainment with immersive productions, advanced theater technology, Eden performances, and interactive experiences. The Solstice Series focuses on Broadway-style productions, live music, comedy, and traditional evening entertainment." } },
                    { "@type": "Question", "name": "Is The Retreat available on both ship classes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both ship classes feature The Retreat, Celebrity Cruises' luxury suite experience with butler service, Luminae Restaurant, Retreat Lounge, exclusive sundeck, concierge services, and priority embarkation. The Edge Series offers larger and more modern Retreat spaces." } },
                    { "@type": "Question", "name": "Which ship class is better for first-time cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent choices. Choose the Edge Series if you want Celebrity's newest innovations and a modern luxury atmosphere. Choose the Solstice Series if you prefer a traditional cruise layout with classic balcony staterooms and excellent value." } },
                    { "@type": "Question", "name": "Which ship class has traditional balconies?", "acceptedAnswer": { "@type": "Answer", "text": "The Solstice Series offers traditional step-out balconies with outdoor seating. The Edge Series primarily features Infinite Veranda staterooms that integrate the balcony into the cabin." } },
                    { "@type": "Question", "name": "Which ship class is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both ship classes are excellent for couples. The Edge Series offers modern luxury, Rooftop Garden, Eden, Magic Carpet, and romantic dining venues, while the Solstice Series offers quiet outdoor spaces, the Lawn Club, elegant surroundings, and a classic cruise atmosphere." } },
                    { "@type": "Question", "name": "Which ship class is better for families?", "acceptedAnswer": { "@type": "Answer", "text": "Both ship classes accommodate families well with spacious staterooms, youth programs, pools, entertainment, and family-friendly dining. The Edge Series offers newer family accommodations, while the Solstice Series provides a more relaxed atmosphere and traditional ship layout." } },
                    { "@type": "Question", "name": "Do both ship classes sail Europe and the Caribbean?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both the Edge Series and Solstice Series sail the Mediterranean, Greek Isles, Italy, France, Spain, Eastern Caribbean, Western Caribbean, and Southern Caribbean. Some Solstice ships also sail Alaska, Australia, Asia, and South America seasonally." } },
                    { "@type": "Question", "name": "Which ship class offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "The Solstice Series often provides better pricing while still delivering Celebrity's premium service and excellent dining. The Edge Series generally commands higher fares because of its newer ships, innovative design, and expanded luxury experiences." } },
                    { "@type": "Question", "name": "Is Celebrity Edge Series more luxurious?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Edge Series offers newer accommodations, expanded Retreat suites, modern public spaces, contemporary luxury design, innovative technology, and premium entertainment, representing Celebrity Cruises' newest vision of luxury cruising." } },
                    { "@type": "Question", "name": "Which Celebrity ship class should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "Choose the Edge Series if you want the newest ships, Magic Carpet, Infinite Veranda cabins, innovative entertainment, and modern luxury. Choose the Solstice Series if you prefer traditional balconies, the Lawn Club, spacious outdoor decks, lower fares, and a classic cruise layout." } },
                    { "@type": "Question", "name": "Why book with Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel provides expert Celebrity Cruises planning, ship class comparisons, personalized cabin and itinerary recommendations, exclusive promotions, flight and hotel arrangements, pre- and post-cruise planning, private transfer coordination, and concierge-level service before, during, and after your cruise." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Edge Series vs Solstice Series: Which Celebrity Cruise Ships Are Better?</title>
                <meta name="title" content="Celebrity Edge Series vs Solstice Series | Complete Ship Comparison" />
                <meta
                    name="description"
                    content="Compare Celebrity Edge Series vs Solstice Series cruise ships including ship size, design, Infinite Verandas, dining, entertainment, accommodations, itineraries, and overall cruise experience."
                />
                <script type="application/ld+json">
                    {JSON.stringify(evssSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (REUSED fcel-) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <EvssIconSparkle size={16} />
                            <span>Celebrity Edge Series vs Solstice Series</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity Edge Series vs <br /> Solstice Series</h1>
                        <p className="fcel-hero-subtitle">
                            Which Celebrity Cruise Ship Class Is Right for You?
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <EvssIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <EvssIconList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (REUSED fcel-) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">EXPERT CRUISE COMPARISON</span>
                                <h2 className="fcel-section-heading">Which Celebrity Ship Class Is Right for You?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Choosing between the Celebrity Edge Series and the Celebrity Solstice Series is one of the biggest decisions travelers face when booking a Celebrity Cruises vacation. Both ship classes offer premium accommodations, exceptional dining, outstanding service, and destination-rich itineraries, but they provide distinctly different onboard experiences.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    The Edge Series showcases Celebrity's newest innovations with contemporary architecture, Infinite Veranda staterooms, the Magic Carpet, and immersive entertainment. The Solstice Series, on the other hand, is known for its classic cruise layout, spacious outdoor decks, real grass Lawn Club, and timeless elegance. This guide compares both ship classes to help you determine which Celebrity experience best fits your travel style.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <EvssPlaceholder label="Celebrity Edge Series vs Solstice Series" />
                                <div className="fcel-intro-badge-float">
                                    <EvssIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Celebrity Ship Class Comparison</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (REUSED cbcs-quick-answer, NEW evss- list) */}
                <section className="cbcs-quick-answer-section">
                    <div className="cbcs-quick-answer-container">
                        <div className="cbcs-quick-answer-card">
                            <h3 className="cbcs-quick-answer-title">Is the Edge Series Better Than the Solstice Series?</h3>
                            <ul className="evss-quick-answer-list">
                                <li className="evss-quick-answer-item">
                                    <EvssIconCheck size={20} className="evss-quick-answer-icon" />
                                    <span>Choose the Edge Series if you want Celebrity's newest ships, cutting-edge design, Infinite Veranda cabins, and modern entertainment.</span>
                                </li>
                                <li className="evss-quick-answer-item">
                                    <EvssIconCheck size={20} className="evss-quick-answer-icon" />
                                    <span>Choose the Solstice Series if you prefer traditional balconies, classic cruise ship layouts, more outdoor deck space, and a relaxed atmosphere.</span>
                                </li>
                                <li className="evss-quick-answer-item">
                                    <EvssIconCheck size={20} className="evss-quick-answer-icon" />
                                    <span>Both deliver Celebrity's signature premium service and exceptional dining.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA (REUSED cbcs-) */}
                <section className="cbcs-inline-cta-section">
                    <div className="cbcs-inline-cta-container">
                        <span className="cbcs-inline-cta-tag">Expert Planning</span>
                        <p className="cbcs-inline-cta-text">Ready to choose the right Celebrity ship class for your next vacation?</p>
                        <div className="cbcs-inline-cta-btn-row">
                            <Link to="/contact" className="cbcs-btn-primary">
                                <EvssIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="cbcs-btn-outline">
                                <EvssIconList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY SHIP CLASSES AT A GLANCE (NEW evss- compare table) */}
                <section className="cbcs-feature-section evss-compare-section cbcs-bg-soft">
                    <div className="cbcs-feature-container evss-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SIDE-BY-SIDE OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity Ship Classes at a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-compare-table-wrap">
                            <div className="evss-compare-header-row">
                                <div className="evss-compare-header-cell">Feature</div>
                                <div className="evss-compare-header-cell">Edge Series</div>
                                <div className="evss-compare-header-cell">Solstice Series</div>
                            </div>
                            {evssGlanceRows.map((row, idx) => (
                                <div key={idx} className="evss-compare-row">
                                    <div className="evss-compare-cell evss-compare-cell-feature">{row.feature}</div>
                                    <div className="evss-compare-cell evss-compare-cell-stars">{row.edge}</div>
                                    <div className="evss-compare-cell evss-compare-cell-stars">{row.solstice}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SHIPS INCLUDED (NEW evss-ships) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIPS IN EACH CLASS</span>
                            <h2 className="fcel-section-heading">Ships Included</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-ships-grid">
                            <div className="evss-ships-column">
                                <div className="evss-ships-column-header">
                                    <div className="evss-ships-column-icon">
                                        <Ship size={20} />
                                    </div>
                                    <h3 className="evss-ships-column-title">Edge Series</h3>
                                </div>
                                <ul className="evss-ships-list">
                                    {evssEdgeShips.map((ship, idx) => (
                                        <li key={idx} className="evss-ships-list-item">
                                            <Compass size={16} className="evss-ships-list-icon" />
                                            <span>{ship}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-ships-column">
                                <div className="evss-ships-column-header">
                                    <div className="evss-ships-column-icon">
                                        <Ship size={20} />
                                    </div>
                                    <h3 className="evss-ships-column-title">Solstice Series</h3>
                                </div>
                                <ul className="evss-ships-list">
                                    {evssSolsticeShips.map((ship, idx) => (
                                        <li key={idx} className="evss-ships-list-item">
                                            <Waves size={16} className="evss-ships-list-icon" />
                                            <span>{ship}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SHIP SIZE COMPARISON (NEW evss- compare table) */}
                <section className="cbcs-feature-section evss-compare-section cbcs-bg-soft">
                    <div className="cbcs-feature-container evss-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SIZE & SPACE</span>
                            <h2 className="fcel-section-heading">Ship Size Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-compare-table-wrap">
                            <div className="evss-compare-header-row">
                                <div className="evss-compare-header-cell">Category</div>
                                <div className="evss-compare-header-cell">Edge Series</div>
                                <div className="evss-compare-header-cell">Solstice Series</div>
                            </div>
                            {evssSizeRows.map((row, idx) => (
                                <div key={idx} className="evss-compare-row">
                                    <div className="evss-compare-cell evss-compare-cell-feature">{row.category}</div>
                                    <div className="evss-compare-cell">{row.edge}</div>
                                    <div className="evss-compare-cell">{row.solstice}</div>
                                </div>
                            ))}
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">🏆 Winner: Edge Series</p>
                                <p className="evss-winner-desc">The newer ships maximize space with contemporary architecture and innovative layouts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN (NEW evss-versus grid) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ARCHITECTURE & STYLE</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-versus-grid">
                            <div className="evss-versus-card">
                                <EvssPlaceholder label="Celebrity Edge Series Ship Design" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Edge Series</h3>
                                <p className="evss-versus-lead">Celebrity completely reimagined cruise ship design. Highlights include:</p>
                                <ul className="evss-versus-list">
                                    {evssDesignEdge.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Layers size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-versus-card evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Ship Design" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Solstice Series</h3>
                                <p className="evss-versus-lead">The Solstice ships feature timeless cruise ship design with elegant public rooms and spacious outdoor decks. Highlights include:</p>
                                <ul className="evss-versus-list">
                                    {evssDesignSolstice.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Building2 size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">🏆 Winner: Edge Series</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFINITE VERANDAS VS TRADITIONAL BALCONIES */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">STATEROOM STYLE</span>
                            <h2 className="fcel-section-heading">Infinite Verandas vs Traditional Balconies</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                One of the biggest differences between these ship classes is the balcony experience.
                            </p>
                        </div>
                        <div className="evss-versus-grid">
                            <div className="evss-versus-card">
                                <EvssPlaceholder label="Celebrity Edge Series Infinite Veranda" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Edge Series</h3>
                                <p className="evss-versus-lead">Features Infinite Veranda staterooms where floor-to-ceiling windows transform part of the cabin into an open-air space.</p>
                                <p className="evss-versus-subheading">Pros</p>
                                <div className="cbcs-panel-list">
                                    {evssVerandaEdgePros.map((item, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                <EvssIconCheck size={14} />
                                            </div>
                                            <div className="cbcs-item-title">{item}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="evss-versus-subheading">Cons</p>
                                <div className="cbcs-panel-list">
                                    {evssVerandaEdgeCons.map((item, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                <EvssIconX size={14} />
                                            </div>
                                            <div className="cbcs-item-title">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="evss-versus-card evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Traditional Balcony" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Solstice Series</h3>
                                <p className="evss-versus-lead">Offers traditional step-out balconies with outdoor seating.</p>
                                <p className="evss-versus-subheading">Pros</p>
                                <div className="cbcs-panel-list">
                                    {evssVerandaSolsticePros.map((item, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                <EvssIconCheck size={14} />
                                            </div>
                                            <div className="cbcs-item-title">{item}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="evss-versus-subheading">Cons</p>
                                <div className="cbcs-panel-list">
                                    {evssVerandaSolsticeCons.map((item, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                <EvssIconX size={14} />
                                            </div>
                                            <div className="cbcs-item-title">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">Winner: Depends on personal preference.</p>
                                <p className="evss-winner-desc">Choose Edge Series for innovation.</p>
                                <p className="evss-winner-desc">Choose Solstice Series for traditional balconies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CULINARY EXPERIENCE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Both classes feature exceptional culinary experiences.
                            </p>
                        </div>
                        <div className="evss-versus-grid">
                            <div className="evss-versus-card">
                                <EvssPlaceholder label="Celebrity Edge Series Dining Experience" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Edge Series</h3>
                                <p className="evss-versus-lead">Highlights include:</p>
                                <ul className="evss-versus-list">
                                    {evssDiningEdge.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Utensils size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-versus-card evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Dining Experience" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Solstice Series</h3>
                                <p className="evss-versus-lead">Popular venues include:</p>
                                <ul className="evss-versus-list">
                                    {evssDiningSolstice.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <UtensilsCrossed size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">🏆 Winner: Edge Series</p>
                                <p className="evss-winner-desc">The newer ships offer more immersive dining concepts and contemporary venues.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ENTERTAINMENT */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ONBOARD FUN</span>
                            <h2 className="fcel-section-heading">Entertainment</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-versus-grid">
                            <div className="evss-versus-card">
                                <EvssPlaceholder label="Celebrity Edge Series Entertainment" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Edge Series</h3>
                                <p className="evss-versus-lead">Entertainment includes:</p>
                                <ul className="evss-versus-list">
                                    {evssEntertainmentEdge.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Theater size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-versus-card evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Entertainment" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Solstice Series</h3>
                                <p className="evss-versus-lead">Entertainment features:</p>
                                <ul className="evss-versus-list">
                                    {evssEntertainmentSolstice.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Music size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">🏆 Winner: Edge Series</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUITE EXPERIENCE (SHARED) */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="evss-suite-grid">
                            <div className="evss-suite-image-col">
                                <EvssPlaceholder label="The Retreat Suite Experience" />
                            </div>
                            <div className="evss-suite-copy-col">
                                <span className="fcel-eyebrow-label">SHIP-WITH-A-SHIP</span>
                                <h2 className="fcel-section-heading" style={{ textAlign: 'left' }}>Suite Experience</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Both ship classes offer The Retreat, Celebrity's luxury suite experience. Guests receive:
                                </p>
                                <div className="cbcs-tag-grid">
                                    {evssRetreatFeatures.map((item, idx) => (
                                        <div key={idx} className="cbcs-tag-card">
                                            <div className="cbcs-tag-icon">
                                                <Crown size={20} />
                                            </div>
                                            <span className="cbcs-tag-label">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '30px' }}>
                                    The newer Edge ships feature expanded Retreat areas with enhanced amenities.
                                </p>
                                <div className="evss-winner-banner" style={{ marginTop: '30px' }}>
                                    <div className="evss-winner-trophy">
                                        <Trophy size={20} />
                                    </div>
                                    <div className="evss-winner-content">
                                        <p className="evss-winner-title">🏆 Winner: Edge Series</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* POOLS & OUTDOOR SPACES */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RELAX & RECHARGE</span>
                            <h2 className="fcel-section-heading">Pools & Outdoor Spaces</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-versus-grid">
                            <div className="evss-versus-card">
                                <EvssPlaceholder label="Celebrity Edge Series Pools & Decks" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Edge Series</h3>
                                <ul className="evss-versus-list" style={{ marginBottom: 0 }}>
                                    {evssPoolsEdge.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Sun size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-versus-card evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Pools & Decks" className="evss-versus-image" />
                                <h3 className="evss-versus-card-title">Solstice Series</h3>
                                <ul className="evss-versus-list" style={{ marginBottom: 0 }}>
                                    {evssPoolsSolstice.map((item, idx) => (
                                        <li key={idx} className="evss-versus-list-item">
                                            <Trees size={16} className="evss-versus-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="evss-winner-banner">
                            <div className="evss-winner-trophy">
                                <Trophy size={20} />
                            </div>
                            <div className="evss-winner-content">
                                <p className="evss-winner-title">🏆 Winner: Solstice Series</p>
                                <p className="evss-winner-desc">Travelers who enjoy outdoor deck space often prefer the Solstice ships.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS (NEW evss-destinations) */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container evss-versus-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Both ship classes sail:
                            </p>
                        </div>
                        <div className="evss-destinations-grid">
                            <div className="evss-destinations-card">
                                <EvssPlaceholder label="Caribbean Cruise Destinations" className="evss-versus-image" />
                                <h3 className="evss-destinations-card-title">
                                    <Palmtree size={20} />
                                    Caribbean
                                </h3>
                                <ul className="evss-destinations-list">
                                    {evssDestinationsCaribbean.map((item, idx) => (
                                        <li key={idx}><Waves size={16} className="cbcs-included-icon" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="evss-destinations-card">
                                <EvssPlaceholder label="European Cruise Destinations" className="evss-versus-image" />
                                <h3 className="evss-destinations-card-title">
                                    <Globe size={20} />
                                    Europe
                                </h3>
                                <ul className="evss-destinations-list">
                                    {evssDestinationsEurope.map((item, idx) => (
                                        <li key={idx}><Compass size={16} className="cbcs-included-icon" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="evss-destinations-note">Some Solstice ships also sail Alaska, Australia, New Zealand, and Asia depending on the season.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED (REUSED cbcs-included) */}
                <section className="cbcs-included-section">
                    <div className="cbcs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE BASICS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Regardless of ship class, Celebrity Cruises includes:
                            </p>
                        </div>
                        <div className="cbcs-included-grid">
                            {evssIncluded.map((item, idx) => (
                                <div key={idx} className="cbcs-included-item">
                                    <EvssIconCheck size={18} className="cbcs-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Specialty dining, beverages, Wi-Fi, spa treatments, and shore excursions are available at an additional cost unless included in your fare package.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS — BOTH SERIES (REUSED cbcs-comparison-board x2) */}
                <section className="cbcs-pros-section cbcs-bg-white">
                    <div className="cbcs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label cbcs-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="evss-dual-board-stack">
                            <div>
                                <h3 className="evss-board-ship-title">
                                    <span className="evss-board-ship-tag">Edge Series</span>
                                </h3>
                                <div className="cbcs-comparison-board">
                                    <div className="cbcs-pros-panel">
                                        <h4 className="cbcs-panel-title cbcs-pros-title">
                                            <EvssIconCheck size={20} />
                                            Pros
                                        </h4>
                                        <div className="cbcs-panel-list">
                                            {evssEdgePros.map((pro, idx) => (
                                                <div key={idx} className="cbcs-list-item">
                                                    <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                        <EvssIconCheck size={14} />
                                                    </div>
                                                    <div className="cbcs-item-title">{pro}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="cbcs-cons-panel">
                                        <h4 className="cbcs-panel-title cbcs-cons-title">
                                            <EvssIconX size={20} />
                                            Cons
                                        </h4>
                                        <div className="cbcs-panel-list">
                                            {evssEdgeCons.map((con, idx) => (
                                                <div key={idx} className="cbcs-list-item">
                                                    <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                        <EvssIconX size={14} />
                                                    </div>
                                                    <div className="cbcs-item-title">{con}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="evss-board-ship-title">
                                    <span className="evss-board-ship-tag">Solstice Series</span>
                                </h3>
                                <div className="cbcs-comparison-board">
                                    <div className="cbcs-pros-panel">
                                        <h4 className="cbcs-panel-title cbcs-pros-title">
                                            <EvssIconCheck size={20} />
                                            Pros
                                        </h4>
                                        <div className="cbcs-panel-list">
                                            {evssSolsticePros.map((pro, idx) => (
                                                <div key={idx} className="cbcs-list-item">
                                                    <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                        <EvssIconCheck size={14} />
                                                    </div>
                                                    <div className="cbcs-item-title">{pro}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="cbcs-cons-panel">
                                        <h4 className="cbcs-panel-title cbcs-cons-title">
                                            <EvssIconX size={20} />
                                            Cons
                                        </h4>
                                        <div className="cbcs-panel-list">
                                            {evssSolsticeCons.map((con, idx) => (
                                                <div key={idx} className="cbcs-list-item">
                                                    <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                        <EvssIconX size={14} />
                                                    </div>
                                                    <div className="cbcs-item-title">{con}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHICH SHIP CLASS IS BEST (NEW evss-choose grid, reuses cbcs-audience-column) */}
                <section className="cbcs-audience-section">
                    <div className="evss-choose-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS EACH FOR?</span>
                            <h2 className="fcel-section-heading">Which Ship Class Is Best?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="evss-choose-grid">
                            <div className="cbcs-audience-column">
                                <EvssPlaceholder label="Celebrity Edge Series Cruise Ship" className="evss-versus-image" />
                                <h3 className="evss-choose-column-title">Choose Edge Series If You Want:</h3>
                                <ul className="cbcs-audience-list">
                                    {evssChooseEdge.map((item, idx) => (
                                        <li key={idx} className="cbcs-audience-item">
                                            <EvssIconCheck size={18} className="cbcs-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="cbcs-audience-column evss-card-solstice">
                                <EvssPlaceholder label="Celebrity Solstice Series Cruise Ship" className="evss-versus-image" />
                                <h3 className="evss-choose-column-title">Choose Solstice Series If You Want:</h3>
                                <ul className="cbcs-audience-list">
                                    {evssChooseSolstice.map((item, idx) => (
                                        <li key={idx} className="cbcs-audience-item">
                                            <EvssIconCheck size={18} className="cbcs-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT (REUSED — medi- classes) */}
                <section id="celebrity-edge-vs-solstice-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-container-relative" style={{ position: 'relative', marginBottom: '30px' }}>
                                    <div className="medi-editorial-image-frame">
                                        <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                        <div className="medi-editorial-gradient-layer"></div>
                                    </div>

                                    <div className="medi-editorial-floating-stat">
                                        <div className="medi-stat-tile">
                                            <span className="medi-stat-number">40+</span>
                                            <span className="medi-stat-label">Years Experience</span>
                                        </div>
                                        <div className="medi-stat-divider"></div>
                                        <div className="medi-stat-tile">
                                            <span className="medi-stat-number">120+</span>
                                            <span className="medi-stat-label">Countries Visited</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            'Premium & luxury cruising',
                                            'Retreat & suite experiences',
                                            'Caribbean & European itineraries',
                                            'Family & multi-generational travel',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <Star size={14} />
                                                </div>
                                                <span className="medi-expertise-pill-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <Award size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Which Celebrity Ship Class <br className="medi-growth-title-break" />Do I Recommend?
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    After helping travelers plan luxury cruises for more than 40 years, I've found that both the Edge Series and Solstice Series offer exceptional experiences—but they appeal to different types of travelers.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        I often recommend the Edge Series to guests who appreciate contemporary design, innovative technology, and a more modern luxury atmosphere. Ships like Celebrity Beyond and Celebrity Ascent consistently impress travelers with their open spaces, exceptional dining, and unique venues such as the Magic Carpet.
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Contemporary design & technology',
                                            'Traditional balconies & Lawn Club',
                                            'Modern luxury atmosphere',
                                            'Classic, relaxed cruise feel',
                                            'Timeless layout for repeat guests'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <EvssIconCheck size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="medi-editorial-full-width-footer">
                                <p className="medi-editorial-body-para">
                                    For guests who prefer traditional balconies, spacious outdoor decks, and a classic cruise feel, the Solstice Series remains an outstanding choice. The Lawn Club, relaxed atmosphere, and timeless layout continue to attract many returning Celebrity guests. If you're unsure which ship class best matches your travel style, my team and I can help you compare itineraries, accommodations, and onboard experiences to ensure you choose the perfect Celebrity cruise.
                                </p>
                                <p className="medi-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS (REUSED cbcs-why-book) */}
                <section className="cbcs-why-book-section">
                    <div className="cbcs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Our luxury cruise specialists help you:
                            </p>
                        </div>
                        <div className="cbcs-why-book-grid">
                            {evssWhyBook.map((item, idx) => {
                                const IconComponent = item.icon
                                return (
                                    <div key={idx} className="cbcs-why-book-card">
                                        <div className="cbcs-why-book-icon">
                                            <IconComponent size={20} />
                                        </div>
                                        <h4 className="cbcs-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION (REUSED fcel-faq) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {evssFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => evssToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {evssActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {evssActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED GUIDES / RELATED CONTENT CTA (REUSED cbcs-related) */}
                <section className="cbcs-related-section">
                    <div className="cbcs-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="fcel-section-heading">Related Celebrity Cruise Guides</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-related-grid">
                            {evssRelatedGuides.map((guide, idx) => {
                                const IconComponent = guide.icon
                                return (
                                    <Link to={guide.link} key={idx} className="cbcs-related-card">
                                        <div className="cbcs-related-icon">
                                            <IconComponent size={20} />
                                        </div>
                                        <h4 className="cbcs-related-title">{guide.title}</h4>
                                        <p className="cbcs-related-desc">{guide.desc}</p>
                                        <span className="cbcs-related-link">
                                            Read the Guide
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (REUSED fcel-cta) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Book Your Celebrity Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare ship classes, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <EvssIconPhone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <EvssIconList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityEdgeVsSolsticeSeries