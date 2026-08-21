import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityinfiniteveranda.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Anchor,
    Compass,
    Wind,
    Sun,
    BedDouble,
    Sparkles,
    Crown,
    DoorOpen,
    Waves,
    Landmark,
    Mountain,
    Calendar,
    FileSearch,
    BadgePercent,
    Sliders,
    Users,
    MapPin,
    Globe,
    ShieldCheck,
    Coffee,
    Home,
    Building2,
    Camera,
    Clock,
    ThumbsUp,
    Snowflake,
    CloudRain,
    Maximize2,
    Eye,
    EyeOff,
    ArrowDownToLine,
    ArrowUpFromLine,
    Thermometer,
    Palmtree,
    Layers,
    LayoutGrid,
    Armchair,
    Umbrella
} from 'lucide-react'

const civIconMap = {
    Ship, Anchor, Compass, Wind, Sun, BedDouble, Sparkles, Crown, DoorOpen,
    Waves, Landmark, Mountain, Calendar, FileSearch, BadgePercent, Sliders,
    Users, MapPin, Globe, ShieldCheck, Coffee, Home, Building2, Camera, Clock,
    ThumbsUp, Snowflake, CloudRain, Maximize2, Eye, EyeOff, ArrowDownToLine,
    ArrowUpFromLine, Thermometer, Palmtree, Layers, LayoutGrid, Armchair, Umbrella
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function CivIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function CivIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function CivIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function CivIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function CivIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function CivIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function CivIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function CivIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function CivIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function CivPlaceholder({ label, className = '' }) {
    return (
        <div className={`civc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <CivIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityInfiniteVeranda() {
    const [civActiveFaq, setCivActiveFaq] = useState(null)
    const [civActiveCabin, setCivActiveCabin] = useState('infinite')
    const civToggleFaq = (index) => {
        setCivActiveFaq(civActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const civGlance = [
        { feature: 'Design', detail: 'Indoor/outdoor convertible space' },
        { feature: 'Large Window', detail: 'Yes' },
        { feature: 'Window Opens', detail: 'Yes' },
        { feature: 'Traditional Sliding Door', detail: 'No' },
        { feature: 'Outdoor Seating', detail: 'Yes, depending on stateroom configuration' },
        { feature: 'Air Conditioning', detail: 'Can be affected when window is open' },
        { feature: 'Interior Space', detail: 'Feels more integrated' },
        { feature: 'Ocean Views', detail: 'Excellent' },
        { feature: 'Open-Air Experience', detail: 'Yes' },
        { feature: 'Privacy', detail: 'Different from traditional balcony' },
        { feature: 'Weather Protection', detail: 'Limited when open' },
        { feature: 'Best For', detail: 'Travelers wanting flexible indoor/outdoor space' },
        { feature: 'Main Alternative', detail: 'Traditional balcony' }
    ]

    const civWindowClosed = [
        { label: 'The stateroom remains enclosed', icon: 'Home' },
        { label: 'The area feels like part of the cabin', icon: 'LayoutGrid' },
        { label: 'Air conditioning can operate normally', icon: 'Wind' },
        { label: 'The large glass surface provides ocean views', icon: 'Eye' },
        { label: 'The space can feel larger than a conventional cabin', icon: 'Maximize2' }
    ]

    const civWindowOpen = [
        { label: 'Outside air enters', icon: 'Wind' },
        { label: 'The veranda becomes open to the ocean environment', icon: 'Waves' },
        { label: 'Travelers can enjoy fresh air', icon: 'Sun' },
        { label: 'The cabin becomes more connected to the outside', icon: 'EyeOff' }
    ]

    const civLookFeatures = [
        { label: 'Floor-to-ceiling glass', icon: 'Maximize2' },
        { label: 'A lowerable window', icon: 'ArrowDownToLine' },
        { label: 'Seating near the window', icon: 'Armchair' },
        { label: 'A veranda area integrated into the stateroom', icon: 'LayoutGrid' },
        { label: 'A more open visual connection with the sea', icon: 'Waves' }
    ]

    const civVsBalconyTable = [
        { infinite: 'No traditional sliding door', balcony: 'Yes' },
        { infinite: 'High', balcony: 'Separate' },
        { infinite: 'Yes', balcony: 'Usually smaller glass area' },
        { infinite: 'Yes', balcony: 'Yes' },
        { infinite: 'Less defined', balcony: 'Clear separation' },
        { infinite: 'Can feel more exposed', balcony: 'Usually more private' },
        { infinite: 'Limited when open', balcony: 'More protected by balcony structure' },
        { infinite: 'Feels more integrated', balcony: 'Cabin remains separate' },
        { infinite: 'Excellent', balcony: 'Excellent' },
        { infinite: 'Different', balcony: 'Traditional' },
        { infinite: 'Flexible space', balcony: 'Classic balcony experience' }
    ]
    const civVsBalconyLabels = ['Balcony door', 'Indoor/outdoor integration', 'Floor-to-ceiling glass', 'Open-air space', 'Outdoor separation', 'Privacy', 'Weather protection', 'Interior space', 'Ocean views', 'Balcony atmosphere', 'Best for']

    const civBenefits = [
        { title: 'More Integrated Living Space', desc: 'One of the biggest advantages is the feeling that the cabin and veranda are connected. When the window is closed, the space can feel like an extension of the stateroom. This can be particularly useful when you want to enjoy the view without sitting outside.', icon: 'LayoutGrid' },
        { title: 'Floor-to-Ceiling Ocean Views', desc: 'The large glass window provides a broad view of the ocean. This can make the stateroom feel brighter and more connected to the destination. For scenic itineraries such as Alaska, Norwegian fjords, Mediterranean, Caribbean and Northern Europe, the large window can be particularly appealing.', icon: 'Maximize2' },
        { title: 'Enjoy Fresh Air', desc: 'When the window is lowered, you can enjoy fresh ocean air without having to step completely outside. This gives the cabin a different atmosphere compared with a traditional veranda.', icon: 'Wind' },
        { title: 'Flexible Indoor/Outdoor Experience', desc: 'You can use the space according to the weather and your preference. Want the cabin enclosed? Keep the window closed. Want fresh air? Lower the window. Want the view without sitting outside? Keep the window closed and enjoy the large glass surface.', icon: 'Sliders' },
        { title: 'Useful in Cooler Weather', desc: 'An Infinite Veranda can be appealing on itineraries where traditional balconies may feel too cold to use for long periods. You can enjoy the view from inside while remaining protected from the weather. This can be especially useful on Alaska cruises, Northern Europe, Scandinavia and Canada/New England.', icon: 'Snowflake' },
        { title: 'Easier Access to the View', desc: 'With a traditional balcony, you need to open the door and step outside. With an Infinite Veranda, the view is directly connected to the main cabin space. This can be convenient when reading, drinking coffee, working, watching scenery or relaxing.', icon: 'Coffee' }
    ]

    const civDisadvantages = [
        'Less Traditional Balcony Privacy — an Infinite Veranda is more integrated with the stateroom, and when the window is open, the space can feel less private than a conventional balcony.',
        'Less Separation From the Cabin — the Infinite Veranda does not provide the same feeling of stepping outside onto a private balcony; instead, the veranda becomes part of the cabin.',
        'Weather Can Affect the Experience — when the window is open, the space is exposed to outside conditions, and rain, wind and colder temperatures can affect how comfortable the veranda feels.',
        "Air Conditioning Considerations — when the window is open, the cabin's climate control can be affected, so the window is intended to be closed when you want the room fully climate-controlled.",
        'Not the Same as a Traditional Balcony — if you specifically want a classic outdoor balcony behind a sliding glass door with a clearly separated exterior space, Infinite Veranda may not provide the experience you expect.'
    ]

    const civPrivacyFactors = ['Adjacent cabin configuration', 'Ship design', 'Window position', 'Curtains', 'Deck location', 'Sightlines']

    const civAlaskaViews = ['Glaciers', 'Mountains', 'Wildlife', 'Fjords', 'Coastal scenery']

    const civAlaskaTable = [
        { feature: 'Cold-weather viewing', infinite: 'Excellent', balcony: 'Good' },
        { feature: 'Indoor scenic viewing', infinite: 'Excellent', balcony: 'Limited' },
        { feature: 'Fresh air', infinite: 'Yes', balcony: 'Yes' },
        { feature: 'Traditional outdoor experience', infinite: 'Limited', balcony: 'Excellent' },
        { feature: 'Weather protection', infinite: 'Better with window closed', balcony: 'Balcony dependent' },
        { feature: 'Glacier viewing', infinite: 'Excellent', balcony: 'Excellent' },
        { feature: 'Private outdoor feeling', infinite: 'Moderate', balcony: 'High' }
    ]

    const civShips = [
        { label: 'Celebrity Edge', icon: 'Ship' },
        { label: 'Celebrity Apex', icon: 'Ship' },
        { label: 'Celebrity Beyond', icon: 'Anchor' },
        { label: 'Celebrity Ascent', icon: 'Anchor' },
        { label: 'Celebrity Xcel', icon: 'Compass' }
    ]

    const civAscentChecklist = ['Cabin number', 'Deck', 'View', 'Location', 'Veranda configuration', 'Proximity to elevators', 'Nearby public areas']

    const civVsOceanView = [
        { feature: 'Large ocean view', infinite: 'Yes', oceanView: 'Yes' },
        { feature: 'Open-air access', infinite: 'Yes', oceanView: 'No' },
        { feature: 'Convertible outdoor space', infinite: 'Yes', oceanView: 'No' },
        { feature: 'Balcony experience', infinite: 'Yes, differently designed', oceanView: 'No' },
        { feature: 'Outdoor seating', infinite: 'Available depending on category', oceanView: 'No' },
        { feature: 'Price', infinite: 'Higher', oceanView: 'Usually lower' }
    ]

    const civVsStandardInfinite = ['Large interior connection', 'Floor-to-ceiling views', 'Flexible indoor/outdoor space', 'Cooler climates', 'Modern cabin design']
    const civVsStandardTraditional = ['Outdoor seating', 'Privacy', 'Classic balcony experience', 'Sun exposure', 'Separate outdoor space']

    const civWorthItYes = ['Love ocean views', 'Prefer modern cabin design', 'Cruise in cooler climates', 'Want easy access to fresh air', 'Enjoy watching scenery from inside', 'Like flexible indoor/outdoor space', 'Prefer not to step outside in poor weather']
    const civWorthItNo = ['Want a traditional balcony', 'Value maximum outdoor privacy', 'Spend lots of time sitting outside', 'Want a clear separation between cabin and balcony', 'Prefer a larger traditional outdoor area']

    const civWhoShould = [
        { feature: 'Best For Scenic Cruisers', detail: 'If the view is one of the main reasons you book a balcony, Infinite Veranda can be a strong option.' },
        { feature: 'Best For Alaska Travelers', detail: 'The ability to enjoy scenery from an enclosed space can be valuable in cold or rainy conditions.' },
        { feature: 'Best For Couples', detail: 'The integrated design can create a comfortable private space for couples.' },
        { feature: 'Best For Travelers Who Like Modern Design', detail: "The Infinite Veranda is one of Celebrity's most distinctive contemporary cabin concepts." },
        { feature: 'Best For Travelers Who Want Flexibility', detail: 'You can switch between enclosed and open-air experiences.' }
    ]

    const civChooseBalconyInstead = ['Sit outside for hours', 'Want maximum privacy', 'Like sunbathing', 'Prefer an outdoor dining/drinking experience', 'Want a separate outdoor room', 'Enjoy the classic cruise balcony design']

    const civPros = [
        'Floor-to-ceiling views', 'Flexible indoor/outdoor design', 'Fresh air when open',
        'Comfortable scenic viewing from inside', 'Modern cabin design', 'Particularly useful for Alaska and cooler destinations',
        'Strong connection between cabin and ocean', 'Can make the room feel more spacious'
    ]

    const civCons = [
        'Not the same as a traditional balcony', 'Less separated outdoor space', 'Privacy experience differs',
        'Weather affects open-air use', 'Air conditioning is affected when open', 'May not satisfy travelers who specifically want a classic balcony',
        'Individual cabin locations can vary'
    ]

    const civDestinationVerdict = [
        { destination: 'Alaska', verdict: 'Infinite Veranda: Strong choice' },
        { destination: 'Caribbean', verdict: 'Traditional Balcony: Often better for extended outdoor use' },
        { destination: 'Mediterranean', verdict: 'Either: Depends on your preference' },
        { destination: 'Northern Europe', verdict: 'Infinite Veranda: Particularly useful for cooler scenic cruising' }
    ]

    const civChooseCabinSteps = [
        { title: 'Deck', desc: 'Review the deck location and surrounding public spaces.' },
        { title: 'Cabin Position', desc: 'Midship cabins can provide a different experience from forward or aft cabins.' },
        { title: 'View', desc: 'Check for possible obstructions.' },
        { title: 'Nearby Venues', desc: "Avoid cabins directly below or above areas that may generate noise if you're sensitive to it." },
        { title: 'Elevator Location', desc: 'Some travelers prefer to be close to elevators; others prefer distance.' },
        { title: 'Veranda Layout', desc: 'Individual cabins can differ in configuration.' },
        { title: 'Price', desc: 'Compare the Infinite Veranda against a traditional balcony on the same sailing.' }
    ]

    const civDecideSteps = [
        { title: 'Identify Your Cruise Destination', desc: 'Alaska and northern destinations can favor the Infinite Veranda.', tags: ['Alaska', 'Northern Europe'] },
        { title: 'Think About How You Use a Balcony', desc: 'Do you sit outside for hours? If yes, a traditional balcony may be better.', tags: [] },
        { title: 'Consider Weather', desc: 'If cold or rain is likely, indoor viewing becomes more valuable.', tags: [] },
        { title: 'Compare Privacy', desc: 'If privacy is a major concern, compare the exact cabin layouts.', tags: [] },
        { title: 'Compare Price', desc: "Don't pay a large premium for a feature you won't use.", tags: [] },
        { title: 'Check the Exact Cabin', desc: 'The individual stateroom can make a significant difference.', tags: [] }
    ]

    const civWhyPlan = [
        { title: 'Compare Infinite Veranda and Traditional Balcony Cabins', icon: 'Sliders' },
        { title: 'Review Specific Cabin Locations', icon: 'MapPin' },
        { title: 'Check Deck Plans', icon: 'FileSearch' },
        { title: 'Compare Stateroom Categories', icon: 'BedDouble' },
        { title: 'Evaluate Obstructed Views', icon: 'Eye' },
        { title: 'Compare Cabin Pricing', icon: 'BadgePercent' },
        { title: 'Select Cabins for Alaska Cruises', icon: 'Snowflake' },
        { title: 'Select Cabins for Mediterranean Cruises', icon: 'Waves' },
        { title: 'Compare Celebrity Edge Series Ships', icon: 'Ship' },
        { title: 'Coordinate Pre-Cruise Hotels', icon: 'Building2' },
        { title: 'Arrange Post-Cruise Stays', icon: 'Home' },
        { title: 'Build Complete Luxury Cruise Vacations', icon: 'Globe' }
    ]

    const civFaqs = [
        { question: '1. What is a Celebrity Infinite Veranda?', answer: 'A Celebrity Infinite Veranda is a cabin design where a large floor-to-ceiling window lowers to create an open-air veranda, integrating the balcony area with the stateroom.' },
        { question: '2. How does a Celebrity Infinite Veranda work?', answer: 'The large window can be raised to enclose the veranda area or lowered to allow fresh air into the cabin and create an open-air experience.' },
        { question: '3. Is a Celebrity Infinite Veranda the same as a balcony?', answer: 'No. An Infinite Veranda differs from a traditional balcony because it uses a convertible window rather than a conventional sliding door separating the cabin from an outdoor balcony.' },
        { question: '4. Is an Infinite Veranda better than a traditional balcony?', answer: 'It depends on your preferences. Infinite Verandas are excellent for scenic views and flexible indoor/outdoor use, while traditional balconies are better for travelers who want a separate outdoor space and classic balcony experience.' },
        { question: '5. Does an Infinite Veranda provide privacy?', answer: 'It provides a private stateroom veranda area, but the experience differs from a traditional balcony because the space is integrated into the cabin. Exact privacy can vary by cabin location.' },
        { question: '6. Can you open a Celebrity Infinite Veranda?', answer: 'Yes. The window can be lowered to open the veranda area to the outside.' },
        { question: '7. Can you use an Infinite Veranda when it rains?', answer: 'You can keep the window closed and still enjoy the view. When open, rain and wind can affect the experience.' },
        { question: '8. Is Celebrity Infinite Veranda good for Alaska?', answer: 'Yes. It can be particularly useful for Alaska because travelers can enjoy glacier, mountain and wildlife views from inside the cabin while remaining protected from cold or rain.' },
        { question: '9. Which Celebrity ships have Infinite Verandas?', answer: "Infinite Verandas are associated primarily with Celebrity's Edge Series, including Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel. Stateroom availability varies by ship." },
        { question: '10. Is an Infinite Veranda bigger than a traditional balcony?', answer: 'The usable configuration is different rather than simply larger or smaller. Infinite Verandas integrate the veranda area into the cabin, while traditional balconies provide a separate outdoor space.' },
        { question: '11. Does an Infinite Veranda get cold?', answer: 'The cabin can remain enclosed when the window is closed. When the window is lowered, outside temperature and weather conditions naturally affect the veranda area.' },
        { question: '12. Does opening an Infinite Veranda affect the air conditioning?', answer: 'Yes. Opening the window allows outside air into the cabin and can affect climate control. The window should be closed when you want the stateroom fully enclosed.' },
        { question: '13. Is an Infinite Veranda good for the Caribbean?', answer: 'It can be, especially for travelers who prefer flexible indoor/outdoor space. However, travelers who spend long periods sitting outside may prefer a traditional balcony.' },
        { question: '14. Is an Infinite Veranda worth the extra cost?', answer: 'It can be worthwhile if you value large views, fresh air, flexible indoor/outdoor space and scenic viewing from inside. If you mainly want a classic outdoor balcony, a traditional veranda may provide better value.' },
        { question: '15. Should I choose an Infinite Veranda or traditional balcony?', answer: 'Choose an Infinite Veranda if you prioritize indoor scenic viewing and flexible space. Choose a traditional balcony if you prioritize outdoor privacy, sitting outside and the classic cruise balcony experience.' }
    ]

    const civRelated = [
        { title: 'Celebrity Edge Cruise Ship Guide', desc: "Deck plans, staterooms, dining and The Retreat aboard Celebrity's Edge Series ship.", icon: 'Ship', link: '/celebrity-cruises/ships/celebrity-edge' },
        { title: 'Celebrity Apex Cruise Ship Guide', desc: "Explore Celebrity Apex's contemporary stateroom design, Infinite Verandas and onboard experience.", icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-apex' },
        { title: 'Celebrity Alaska Cruises', desc: 'Glacier itineraries, Inside Passage sailing and why an Infinite Veranda can be a strong choice for Alaska.', icon: 'Snowflake', link: '/celebrity-cruises/alaska/' },
        { title: 'Celebrity Mediterranean Cruises', desc: 'Compare staterooms and scenic sailing for a Celebrity Mediterranean itinerary.', icon: 'Waves', link: '/celebrity-cruises/mediterranean/' },
        { title: 'Celebrity Cruises Overview', desc: 'Compare Caribbean, Mediterranean, European and Alaska itineraries across the Celebrity fleet.', icon: 'Globe', link: '/celebrity-cruises/' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const civSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/",
                "name": "Celebrity Infinite Veranda: Complete Guide & Review",
                "url": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/",
                "description": "Learn how Celebrity Infinite Verandas work, including cabin design, open-air features, benefits, disadvantages, privacy, weather and how they compare with traditional balconies.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/#article",
                "headline": "Celebrity Infinite Veranda: Complete Guide & Review",
                "url": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/",
                "description": "Complete guide to Celebrity Infinite Veranda cabins, including how the design works, benefits, disadvantages, privacy, weather considerations, ship availability, and comparison with traditional balconies.",
                "image": "https://www.tripsandships.com/images/celebrity-infinite-veranda.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Cruise Cabin Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Cabin Consulting",
                "description": "Expert Celebrity Cruises cabin planning services helping travelers compare Infinite Veranda and traditional balcony cabins, review deck plans, evaluate cabin locations, compare stateroom categories, and select the right cabin for their itinerary."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Infinite Veranda", "item": "https://www.tripsandships.com/celebrity-cruises/infinite-veranda/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": civFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question.replace(/^\d+\.\s*/, ''),
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Infinite Veranda: Complete Guide & Review</title>
                <meta name="title" content="Celebrity Infinite Veranda Explained | Pros, Cons & Balcony" />
                <meta
                    name="description"
                    content="Learn how Celebrity Infinite Verandas work, including cabin design, open-air features, benefits, disadvantages, privacy, weather and how they compare with traditional balconies."
                />
                <script type="application/ld+json">
                    {JSON.stringify(civSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="civc-page-wrapper">

                {/* HERO SECTION */}
                <section className="civc-hero-section">
                    <div className="civc-hero-overlay"></div>
                    <div className="civc-hero-content">
                        <div className="civc-hero-tag">
                            <CivIconSparkle size={16} />
                            <span>Celebrity Infinite Veranda</span>
                        </div>
                        <h1 className="civc-hero-title">Celebrity Infinite Veranda <br /> Explained: Complete Guide</h1>
                        <p className="civc-hero-subtitle">
                            Cabin Design, Pros, Cons & How It Compares With a Traditional Balcony
                        </p>
                        <div className="civc-hero-btn-row">
                            <Link to='/contact' className="civc-btn-primary">
                                <CivIconPhone size={18} />
                                Compare Celebrity Veranda Cabins
                            </Link>
                            <button className="civc-btn-outline">
                                <CivIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="civc-intro-section">
                    <div className="civc-intro-container">
                        <div className="civc-intro-grid">
                            <div className="civc-intro-copy">
                                <span className="civc-eyebrow-label">WHAT IS A CELEBRITY INFINITE VERANDA?</span>
                                <h2 className="civc-section-heading">Celebrity Infinite Veranda Explained</h2>
                                <div className="civc-heading-bar"></div>
                                <p className="civc-lead-paragraph">
                                    A Celebrity Infinite Veranda is a stateroom design that combines the indoor cabin and balcony into one flexible living space.
                                </p>
                                <p className="civc-lead-paragraph">
                                    Instead of having a traditional balcony that extends outside the cabin behind a sliding glass door, the Infinite Veranda uses a large floor-to-ceiling window and a movable window panel. When the window is closed, the space functions as part of the stateroom. When the window is lowered, the upper section opens to the outside, creating an open-air veranda experience.
                                </p>
                                <p className="civc-lead-paragraph">
                                    Celebrity introduced this design on its newer Edge Series ships, including ships such as Celebrity Edge, Celebrity Apex, Celebrity Beyond and Celebrity Ascent. The concept is designed to provide more usable interior space while still giving travelers an outdoor ocean-view experience.
                                </p>
                            </div>
                            <div className="civc-intro-image-frame">
                                <CivPlaceholder label="Celebrity Infinite Veranda" />
                                <div className="civc-intro-badge-float">
                                    <CivIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Edge Series Cabin Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="civc-quick-answer-section">
                    <div className="civc-quick-answer-container">
                        <div className="civc-quick-answer-card">
                            <h3 className="civc-quick-answer-title">How Does a Celebrity Infinite Veranda Work?</h3>
                            <p className="civc-quick-answer-text">
                                A Celebrity Infinite Veranda uses a floor-to-ceiling glass window that opens downward to create an outdoor-style veranda. When the window is raised, the veranda area becomes part of the interior stateroom. This design differs from a traditional cruise balcony, where the outdoor space remains physically separated from the cabin by a sliding glass door.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="civc-inline-cta-section">
                    <div className="civc-inline-cta-container">
                        <span className="civc-inline-cta-tag">Expert Planning</span>
                        <p className="civc-inline-cta-text">Not sure whether an Infinite Veranda is right for you?</p>
                        <div className="civc-inline-cta-btn-row">
                            <Link to="/contact" className="civc-btn-primary">
                                <CivIconPhone size={18} />
                                Compare Celebrity Veranda Cabins
                            </Link>
                            <Link to="/contact" className="civc-btn-outline1">
                                <CivIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="civc-glance-section">
                    <div className="civc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">CABIN OVERVIEW</span>
                            <h2 className="civc-section-heading">Celebrity Infinite Veranda at a Glance</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-glance-table">
                            {civGlance.map((row, idx) => (
                                <div key={idx} className="civc-glance-row">
                                    <div className="civc-glance-feature">{row.feature}</div>
                                    <div className="civc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS — split grid */}
                <section className="civc-why-choose-section">
                    <div className="civc-why-choose-container">
                        <div className="civc-why-choose-split-grid">
                            <div className="civc-why-choose-content-col">
                                <span className="civc-eyebrow-label">THE MECHANISM</span>
                                <h2 className="civc-section-heading">How Celebrity Infinite Verandas Work</h2>
                                <div className="civc-heading-bar"></div>
                                <p className="civc-lead-paragraph">
                                    The Infinite Veranda is designed around a large floor-to-ceiling window. The window separates the stateroom from the outside environment. This flexibility is one of the main reasons travelers choose the Infinite Veranda design.
                                </p>
                                <div className="civc-why-choose-footer-note">
                                    <p className="civc-why-choose-note">
                                        Window Lowered: outside air enters, the veranda becomes open to the ocean environment, and the cabin becomes more connected to the outside.
                                    </p>
                                </div>
                            </div>
                            <div className="civc-why-choose-keypoints-col">
                                <p className="civc-lead-paragraph" style={{ marginBottom: '14px' }}><strong>Window Closed:</strong></p>
                                <div className="civc-why-choose-keypoints-grid">
                                    {civWindowClosed.map((item, idx) => {
                                        const IconComponent = civIconMap[item.icon];
                                        return (
                                            <div key={idx} className="civc-why-choose-card">
                                                <div className="civc-why-choose-icon-wrapper">
                                                    {IconComponent ? (
                                                        <IconComponent size={20} className="civc-why-choose-icon" />
                                                    ) : (
                                                        <CivIconCheck size={20} className="civc-why-choose-icon" />
                                                    )}
                                                </div>
                                                <span className="civc-why-choose-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WINDOW LOWERED — feature section */}
                <section className="civc-feature-section civc-dark-section">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid civc-reverse">
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">WINDOW LOWERED</span>
                                <h2 className="civc-feature-title" style={{ textAlign: 'left' }}>What Happens When the Window Opens</h2>
                                <p className="civc-lead-paragraph">
                                    When the window is lowered:
                                </p>
                                <div className="civc-feature-list">
                                    {civWindowOpen.map((item, idx) => {
                                        const IconComponent = civIconMap[item.icon];
                                        return (
                                            <div key={idx} className="civc-feature-item-card">
                                                <div className="civc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CivIconCheck size={18} />}
                                                </div>
                                                <span className="civc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Window Open</span>
                                </div>
                                <CivPlaceholder label="Infinite Veranda — Window Lowered" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT DOES IT LOOK LIKE */}
                <section className="civc-feature-section civc-bg-white">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid">
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Cabin Layout</span>
                                </div>
                                <CivPlaceholder label="Infinite Veranda Stateroom" />
                            </div>
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">VISUAL DESIGN</span>
                                <h2 className="civc-feature-title">What Does an Infinite Veranda Look Like?</h2>
                                <p className="civc-lead-paragraph">
                                    The biggest visual difference is the absence of a traditional sliding balcony door. Instead, you have:
                                </p>
                                <div className="civc-feature-list">
                                    {civLookFeatures.map((item, idx) => {
                                        const IconComponent = civIconMap[item.icon];
                                        return (
                                            <div key={idx} className="civc-feature-item-card">
                                                <div className="civc-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <CivIconCheck size={18} />}
                                                </div>
                                                <span className="civc-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="civc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    The exact furniture arrangement and dimensions vary by ship and stateroom category.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFINITE VERANDA VS TRADITIONAL BALCONY — pair table */}
                <section className="civc-compare-section civc-bg-soft">
                    <div className="civc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">HEAD-TO-HEAD</span>
                            <h2 className="civc-section-heading">Infinite Veranda vs. Traditional Balcony</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                The biggest question for many Celebrity travelers is whether an Infinite Veranda is better than a traditional balcony.
                            </p>
                        </div>
                        <div className="civc-pair-table">
                            <div className="civc-pair-row civc-pair-header">
                                <div className="civc-pair-cell">Infinite Veranda</div>
                                <div className="civc-pair-cell">Traditional Balcony</div>
                            </div>
                            {civVsBalconyTable.map((row, idx) => (
                                <div key={idx} className="civc-pair-row">
                                    <div className="civc-pair-cell"><strong>{civVsBalconyLabels[idx]}:</strong> {row.infinite}</div>
                                    <div className="civc-pair-cell">{row.balcony}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DIFFERENCE EXPLAINED — choice board arrow diagram */}
                <section className="civc-compare-section civc-dark-section">
                    <div className="civc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">THE CORE DIFFERENCE</span>
                            <h2 className="civc-section-heading">What Is the Difference Between an Infinite Veranda and a Balcony?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A traditional balcony creates a separate outdoor area. You open the sliding glass door, step outside and enter a physically separate balcony. An Infinite Veranda is more integrated. The window opens vertically, allowing the veranda area to become part of the stateroom.
                            </p>
                        </div>
                        <div className="civc-choice-board civc-choice-board-inline">
                            <div className="civc-choice-panel">
                                <h3 className="civc-choice-title">
                                    <DoorOpen size={22} />
                                    Traditional Balcony
                                </h3>
                                <p className="civc-lead-paragraph1">Cabin → Sliding Door → Outdoor Balcony</p>
                            </div>
                            <div className="civc-choice-panel">
                                <h3 className="civc-choice-title">
                                    <Maximize2 size={22} />
                                    Infinite Veranda
                                </h3>
                                <p className="civc-lead-paragraph1">Cabin → Convertible Window → Open-Air Veranda</p>
                            </div>
                        </div>
                        <p className="civc-included-note">
                            This difference affects privacy, airflow, space, weather and how the cabin feels.
                        </p>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="civc-feature-section civc-bg-white">
                    <div className="civc-feature-container">
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <span className="civc-eyebrow-label">THE UPSIDE</span>
                            <h2 className="civc-section-heading">Celebrity Infinite Veranda Benefits</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-benefits-grid">
                            {civBenefits.map((item, idx) => {
                                const IconComponent = civIconMap[item.icon];
                                return (
                                    <div key={idx} className="civc-benefits-card">
                                        <div className="civc-why-choose-icon-wrapper">
                                            {IconComponent ? <IconComponent size={20} className="civc-why-choose-icon" /> : <CivIconCheck size={20} className="civc-why-choose-icon" />}
                                        </div>
                                        <h4 className="civc-why-book-title">{idx + 1}. {item.title}</h4>
                                        <p className="civc-why-choose-card-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* DISADVANTAGES */}
                <section className="civc-disadvantages-section civc-bg-soft">
                    <div className="civc-disadvantages-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">THE TRADE-OFFS</span>
                            <h2 className="civc-section-heading">Celebrity Infinite Veranda Disadvantages</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                The design is innovative, but it is not perfect for everyone.
                            </p>
                        </div>
                        <div className="civc-disadvantages-grid">
                            {civDisadvantages.map((item, idx) => {
                                const parts = item.split(/\s*—\s*/);
                                const title = parts[0];
                                const desc = parts[1] || '';
                                return (
                                    <div key={idx} className="civc-disadvantage-card">
                                        <div className="civc-disadvantage-header">
                                            <div className="civc-disadvantage-icon-box">
                                                <CivIconAlert size={20} />
                                            </div>
                                            <h3 className="civc-disadvantage-title">{title}</h3>
                                        </div>
                                        {desc && <p className="civc-disadvantage-desc">{desc}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* IS IT PRIVATE */}
                <section className="civc-feature-section civc-dark-section">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid">
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Privacy</span>
                                </div>
                                <CivPlaceholder label="Infinite Veranda Privacy" />
                            </div>
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">GOOD TO KNOW</span>
                                <h2 className="civc-feature-title">Is a Celebrity Infinite Veranda Private?</h2>
                                <p className="civc-lead-paragraph">
                                    It provides a private stateroom veranda area, but the experience of privacy differs from a traditional balcony. The key difference is that the veranda is integrated into the stateroom. Travelers should also consider:
                                </p>
                                <div className="civc-feature-list">
                                    {civPrivacyFactors.map((item, idx) => (
                                        <div key={idx} className="civc-feature-item-card">
                                            <div className="civc-feature-item-icon"><CivIconCheck size={18} /></div>
                                            <span className="civc-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="civc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Privacy can vary depending on the exact stateroom.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAN YOU OPEN / BAD WEATHER — worth-style single statements */}
                <section className="civc-worth-section civc-bg-white">
                    <div className="civc-worth-container">
                        <span className="civc-eyebrow-label">GOOD TO KNOW</span>
                        <h2 className="civc-section-heading">Can You Open the Infinite Veranda Window?</h2>
                        <div className="civc-heading-bar civc-bar-center"></div>
                        <p className="civc-lead-paragraph">
                            Yes. The Infinite Veranda is designed so the window can be lowered to open the space to the outside. When the window is raised, the room returns to an enclosed configuration. The opening mechanism is one of the defining features of the Infinite Veranda concept.
                        </p>
                    </div>
                </section>

                <section className="civc-worth-section civc-bg-soft">
                    <div className="civc-worth-container">
                        <span className="civc-eyebrow-label">GOOD TO KNOW</span>
                        <h2 className="civc-section-heading">Can You Use an Infinite Veranda in Bad Weather?</h2>
                        <div className="civc-heading-bar civc-bar-center"></div>
                        <p className="civc-lead-paragraph">
                            You can still enjoy the view with the window closed. When the window is open, however, the experience is affected by rain, wind, cold temperatures and rougher sea conditions. One advantage of the design is that you do not have to remain exposed. Simply close the window and continue enjoying the ocean view from inside.
                        </p>
                    </div>
                </section>

                {/* IS IT GOOD FOR ALASKA */}
                <section className="civc-feature-section civc-bg-white">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid">
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Alaska</span>
                                </div>
                                <CivPlaceholder label="Infinite Veranda — Alaska Glacier Viewing" />
                            </div>
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">BEST FOR ALASKA</span>
                                <h2 className="civc-feature-title">Is an Infinite Veranda Good for Alaska?</h2>
                                <p className="civc-lead-paragraph">
                                    Yes, it can be an excellent option for Alaska cruises. Alaska is one of the itineraries where a large indoor viewing area can be especially useful. You can watch:
                                </p>
                                <div className="civc-feature-list">
                                    {civAlaskaViews.map((item, idx) => (
                                        <div key={idx} className="civc-feature-item-card">
                                            <div className="civc-feature-item-icon"><CivIconCheck size={18} /></div>
                                            <span className="civc-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="civc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    from inside the stateroom. On colder or rainy days, you can keep the window closed while still enjoying the view. For travelers who prioritize scenic viewing over having a traditional outdoor balcony, the Infinite Veranda can be particularly attractive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ALASKA COMPARE TABLE */}
                <section className="civc-compare-section civc-dark-section">
                    <div className="civc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">ALASKA COMPARISON</span>
                            <h2 className="civc-section-heading">Infinite Veranda for Alaska vs. Traditional Balcony</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-compare-table-3col civc-alaska-compare-table">
                            <div className="civc-compare-row-3col civc-compare-header">
                                <div className="civc-compare-cell civc-compare-label">Alaska Feature</div>
                                <div className="civc-compare-cell">Infinite Veranda</div>
                                <div className="civc-compare-cell">Traditional Balcony</div>
                            </div>
                            {civAlaskaTable.map((row, idx) => (
                                <div key={idx} className="civc-compare-row-3col">
                                    <div className="civc-compare-cell civc-compare-label">{row.feature}</div>
                                    <div className="civc-compare-cell">{row.infinite}</div>
                                    <div className="civc-compare-cell">{row.balcony}</div>
                                </div>
                            ))}
                        </div>
                        <p className="civc-included-note">
                            For Alaska, the choice often comes down to whether you prioritize inside viewing comfort or the classic outdoor balcony experience.
                        </p>
                    </div>
                </section>

                {/* CARIBBEAN & MEDITERRANEAN */}
                <section className="civc-worth-section civc-bg-white">
                    <div className="civc-worth-container">
                        <span className="civc-eyebrow-label">OTHER DESTINATIONS</span>
                        <h2 className="civc-section-heading">Is an Infinite Veranda Good for the Caribbean?</h2>
                        <div className="civc-heading-bar civc-bar-center"></div>
                        <p className="civc-lead-paragraph">
                            It can be. Caribbean cruises are generally more conducive to outdoor relaxation. If your goal is sitting outside, sunbathing, enjoying drinks outdoors or spending long periods in open air, a traditional balcony may be more appealing. However, an Infinite Veranda can still be useful for travelers who prefer flexible indoor/outdoor space.
                        </p>
                    </div>
                </section>

                <section className="civc-worth-section civc-bg-soft">
                    <div className="civc-worth-container">
                        <span className="civc-eyebrow-label">OTHER DESTINATIONS</span>
                        <h2 className="civc-section-heading">Is an Infinite Veranda Good for the Mediterranean?</h2>
                        <div className="civc-heading-bar civc-bar-center"></div>
                        <p className="civc-lead-paragraph">
                            Yes. Mediterranean cruises can involve long scenic stretches between ports, making a private ocean-view space useful. An Infinite Veranda can be particularly appealing for morning coffee, scenic cruising, sunset views, watching coastal scenery and relaxing between excursions. However, travelers who strongly prefer a separate outdoor balcony may still prefer the traditional design.
                        </p>
                    </div>
                </section>

                {/* SHIPS WITH INFINITE VERANDAS */}
                <section className="civc-tag-section civc-bg-white">
                    <div className="civc-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">THE FLEET</span>
                            <h2 className="civc-section-heading">Celebrity Ships With Infinite Verandas</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Infinite Verandas are most closely associated with Celebrity's newer Edge Series ships. These include:
                            </p>
                        </div>
                        <div className="civc-tag-grid">
                            {civShips.map((item, idx) => {
                                const IconComponent = civIconMap[item.icon];
                                return (
                                    <div key={idx} className="civc-tag-card">
                                        <div className="civc-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CivIconDot size={20} />}
                                        </div>
                                        <span className="civc-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="civc-included-note">
                            The exact stateroom categories and availability can vary by ship. Always verify the cabin category and deck plan for your specific sailing.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY EDGE */}
                <section className="civc-feature-section civc-bg-soft">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid">
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Celebrity Edge</span>
                                </div>
                                <CivPlaceholder label="Celebrity Edge Infinite Veranda" />
                            </div>
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">SHIP BY SHIP</span>
                                <h2 className="civc-feature-title">Celebrity Edge Infinite Veranda</h2>
                                <p className="civc-lead-paragraph">
                                    Celebrity Edge introduced the Infinite Veranda concept as part of the ship's modern cabin design. The concept was intended to rethink the traditional cruise balcony by integrating the exterior space into the cabin. This gives travelers large glass views, flexible indoor/outdoor space, a modern cabin layout and more visual connection to the sea.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY APEX */}
                <section className="civc-feature-section civc-bg-white">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid civc-reverse">
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">SHIP BY SHIP</span>
                                <h2 className="civc-feature-title" style={{ textAlign: 'left' }}>Celebrity Apex Infinite Veranda</h2>
                                <p className="civc-lead-paragraph">
                                    Celebrity Apex continues the Infinite Veranda design. The concept works particularly well with Apex's contemporary stateroom design and large windows. Travelers should compare individual cabins because location and layout can influence the overall experience.
                                </p>
                            </div>
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Celebrity Apex</span>
                                </div>
                                <CivPlaceholder label="Celebrity Apex Infinite Veranda" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY BEYOND */}
                <section className="civc-feature-section civc-bg-soft">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid">
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Celebrity Beyond</span>
                                </div>
                                <CivPlaceholder label="Celebrity Beyond Infinite Veranda" />
                            </div>
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">SHIP BY SHIP</span>
                                <h2 className="civc-feature-title">Celebrity Beyond Infinite Veranda</h2>
                                <p className="civc-lead-paragraph">
                                    Celebrity Beyond also features Infinite Veranda staterooms. The design provides the same core concept: large window + convertible veranda + integrated cabin space. The exact dimensions and furnishings depend on the specific stateroom category.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY ASCENT / XCEL */}
                <section className="civc-feature-section civc-dark-section">
                    <div className="civc-feature-container">
                        <div className="civc-feature-grid civc-reverse">
                            <div className="civc-feature-copy-col">
                                <span className="civc-eyebrow-label">SHIP BY SHIP</span>
                                <h2 className="civc-feature-title" style={{ textAlign: 'left' }}>Celebrity Ascent Infinite Veranda</h2>
                                <p className="civc-lead-paragraph">
                                    Celebrity Ascent continues the Edge Series approach to Infinite Verandas. For travelers booking Ascent, it is important to review:
                                </p>
                                <div className="civc-feature-list">
                                    {civAscentChecklist.map((item, idx) => (
                                        <div key={idx} className="civc-feature-item-card">
                                            <div className="civc-feature-item-icon"><CivIconCheck size={18} /></div>
                                            <span className="civc-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="civc-feature-image-col">
                                <div className="civc-badge-overlay">
                                    <CivIconSparkle size={14} />
                                    <span>Celebrity Ascent</span>
                                </div>
                                <CivPlaceholder label="Celebrity Ascent Infinite Veranda" />
                            </div>
                        </div>

                        <div className="civc-dining-venues-block">
                            <div className="civc-dining-venues-divider"></div>
                            <p className="civc-dining-venues-lead">
                                <strong>Celebrity Xcel Infinite Veranda</strong> — Celebrity Xcel also uses the Edge Series approach to stateroom design, including Infinite Veranda accommodations. As with other Celebrity ships, travelers should check the current deck plan before selecting a specific cabin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INFINITE VERANDA VS OCEAN VIEW */}
                <section className="civc-compare-section civc-bg-soft">
                    <div className="civc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">CABIN COMPARISON</span>
                            <h2 className="civc-section-heading">Infinite Veranda vs. Ocean View Cabin</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                An Infinite Veranda is fundamentally different from an ocean-view cabin.
                            </p>
                        </div>
                        <div className="civc-compare-table-3col civc-ocean-compare-table">
                            <div className="civc-compare-row-3col civc-compare-header">
                                <div className="civc-compare-cell civc-compare-label">Feature</div>
                                <div className="civc-compare-cell">Infinite Veranda</div>
                                <div className="civc-compare-cell">Ocean View</div>
                            </div>
                            {civVsOceanView.map((row, idx) => (
                                <div key={idx} className="civc-compare-row-3col">
                                    <div className="civc-compare-cell civc-compare-label">{row.feature}</div>
                                    <div className="civc-compare-cell">{row.infinite}</div>
                                    <div className="civc-compare-cell">{row.oceanView}</div>
                                </div>
                            ))}
                        </div>
                        <p className="civc-included-note">
                            If having outdoor access matters to you, an Infinite Veranda provides an experience an ocean-view cabin cannot.
                        </p>
                    </div>
                </section>

                {/* INFINITE VS STANDARD VERANDA — choice board */}
                <section className="civc-compare-section civc-dark-section">
                    <div className="civc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">CABIN COMPARISON</span>
                            <h2 className="civc-section-heading">Infinite Veranda vs. Standard Veranda</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                This is a more important comparison.
                            </p>
                        </div>
                        <div className="civc-choice-board civc-choice-board-inline">
                            <div className="civc-choice-panel">
                                <h3 className="civc-choice-title">
                                    <CivIconCheck size={22} />
                                    Infinite Veranda — Best for:
                                </h3>
                                <div className="civc-choice-list">
                                    {civVsStandardInfinite.map((item, idx) => (
                                        <div key={idx} className="civc-choice-item">
                                            <div className="civc-choice-icon-wrap"><CivIconCheck size={16} /></div>
                                            <div className="civc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="civc-choice-panel">
                                <h3 className="civc-choice-title">
                                    <CivIconCheck size={22} />
                                    Traditional Veranda — Best for:
                                </h3>
                                <div className="civc-choice-list">
                                    {civVsStandardTraditional.map((item, idx) => (
                                        <div key={idx} className="civc-choice-item">
                                            <div className="civc-choice-icon-wrap"><CivIconCheck size={16} /></div>
                                            <div className="civc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="civc-included-note">Neither is universally better.</p>
                    </div>
                </section>

                {/* INTERACTIVE CABIN TAB SWITCHER */}
                <section className="civc-accommodations-section">
                    <div className="civc-accommodations-container">

                        <div className="civc-accommodations-header">
                            <span className="civc-eyebrow-label">TRY BOTH ON FOR SIZE</span>
                            <h2 className="civc-section-heading">Is Celebrity Infinite Veranda Worth It?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph">
                                It can be worth it — or not — depending on what you actually want from your outdoor space.
                            </p>
                        </div>

                        <div className="civc-accommodations-tabs">
                            {[
                                { id: 'infinite', label: 'Worth It' },
                                { id: 'traditional', label: 'May Not Be Worth It' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`civc-accommodation-tab-btn ${civActiveCabin === tab.id ? 'active' : ''}`}
                                    onClick={() => setCivActiveCabin(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="civc-accommodation-panel">
                            {civActiveCabin === 'infinite' && (
                                <div className="civc-accommodation-panel-grid civc-animate-fade-in">
                                    <div className="civc-accommodation-image-col">
                                        <div className="civc-badge-overlay">
                                            <CivIconSparkle size={14} />
                                            <span>Worth It</span>
                                        </div>
                                        <CivPlaceholder label="Infinite Veranda — Worth It" />
                                    </div>
                                    <div className="civc-accommodation-info-col">
                                        <span className="civc-eyebrow-label">IT CAN BE WORTH IT IF YOU</span>
                                        <h3 className="civc-accommodation-title">You Should Book an Infinite Veranda</h3>
                                        <div className="civc-veranda-checklist">
                                            {civWorthItYes.map((item, idx) => (
                                                <div key={idx} className="civc-veranda-check-item">
                                                    <div className="civc-veranda-check-icon"><CivIconCheck size={16} /></div>
                                                    <span className="civc-veranda-check-text">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {civActiveCabin === 'traditional' && (
                                <div className="civc-accommodation-panel-grid civc-animate-fade-in">
                                    <div className="civc-accommodation-image-col">
                                        <div className="civc-badge-overlay">
                                            <CivIconSparkle size={14} />
                                            <span>Traditional Balcony</span>
                                        </div>
                                        <CivPlaceholder label="Traditional Balcony — May Be Better" />
                                    </div>
                                    <div className="civc-accommodation-info-col">
                                        <span className="civc-eyebrow-label">IT MAY NOT BE WORTH IT IF YOU</span>
                                        <h3 className="civc-accommodation-title">Consider a Traditional Balcony Instead</h3>
                                        <div className="civc-veranda-checklist">
                                            {civWorthItNo.map((item, idx) => (
                                                <div key={idx} className="civc-veranda-check-item">
                                                    <div className="civc-veranda-check-icon"><CivIconX size={16} /></div>
                                                    <span className="civc-veranda-check-text">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* WHO SHOULD BOOK */}
                <section className="civc-glance-section">
                    <div className="civc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="civc-section-heading">Who Should Book an Infinite Veranda?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-glance-table">
                            {civWhoShould.map((row, idx) => (
                                <div key={idx} className="civc-glance-row">
                                    <div className="civc-glance-feature">{row.feature}</div>
                                    <div className="civc-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE BALCONY INSTEAD */}
                <section className="civc-audience-section civc-bg-white">
                    <div className="civc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="civc-section-heading">Who Should Choose a Traditional Balcony Instead?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                A traditional balcony may be better if you:
                            </p>
                        </div>
                        <div className="civc-audience-column civc-audience-negative">
                            <ul className="civc-audience-list">
                                {civChooseBalconyInstead.map((item, idx) => (
                                    <li key={idx} className="civc-audience-item">
                                        <CivIconX size={18} className="civc-audience-check civc-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="civc-pros-section civc-dark-section">
                    <div className="civc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="civc-eyebrow-label civc-eyebrow-white">PROS & CONS</span>
                            <h2 className="civc-section-heading">Celebrity Infinite Veranda Pros & Cons</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>

                        <div className="civc-comparison-board">
                            <div className="civc-pros-panel">
                                <h3 className="civc-panel-title civc-pros-title">
                                    <CivIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="civc-panel-list">
                                    {civPros.map((pro, idx) => (
                                        <div key={idx} className="civc-list-item">
                                            <div className="civc-item-icon-wrap civc-pro-icon"><CivIconCheck size={16} /></div>
                                            <div className="civc-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="civc-cons-panel">
                                <h3 className="civc-panel-title civc-cons-title">
                                    <CivIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="civc-panel-list">
                                    {civCons.map((con, idx) => (
                                        <div key={idx} className="civc-list-item">
                                            <div className="civc-item-icon-wrap civc-con-icon"><CivIconX size={16} /></div>
                                            <div className="civc-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHICH IS BETTER — destination verdicts */}
                <section className="civc-tag-section civc-bg-white">
                    <div className="civc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">BY DESTINATION</span>
                            <h2 className="civc-section-heading">Infinite Veranda vs. Traditional Balcony: Which Is Better?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no universal winner. Choose Infinite Veranda if you prioritize views, flexibility and indoor comfort. Choose Traditional Balcony if you prioritize outdoor privacy and the classic balcony experience. The destination should also influence your decision.
                            </p>
                        </div>
                        <div className="civc-glance-table" style={{ marginTop: '30px' }}>
                            {civDestinationVerdict.map((row, idx) => (
                                <div key={idx} className="civc-glance-row">
                                    <div className="civc-glance-feature">{row.destination}</div>
                                    <div className="civc-glance-detail">{row.verdict}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE THE BEST INFINITE VERANDA CABIN */}
                <section className="civc-steps-section civc-dark-section">
                    <div className="civc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">CABIN CHECKLIST</span>
                            <h2 className="civc-section-heading">How to Choose the Best Infinite Veranda Cabin</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Don't stop at the cabin category. Before booking, check:
                            </p>
                        </div>
                        <div className="civc-steps-list">
                            {civChooseCabinSteps.map((step, idx) => (
                                <div key={idx} className="civc-step-item">
                                    <div className="civc-step-number">{idx + 1}</div>
                                    <div className="civc-step-body">
                                        <h4 className="civc-step-title">{step.title}</h4>
                                        <p className="civc-step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW TO DECIDE */}
                <section className="civc-steps-section">
                    <div className="civc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">DECISION WALKTHROUGH</span>
                            <h2 className="civc-section-heading">How to Decide Between Infinite Veranda and Traditional Balcony</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-steps-list">
                            {civDecideSteps.map((step, idx) => (
                                <div key={idx} className="civc-step-item">
                                    <div className="civc-step-number">{idx + 1}</div>
                                    <div className="civc-step-body">
                                        <h4 className="civc-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="civc-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="civc-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="civc-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT */}
                <section id="celebrity-infinite-veranda-insight" className="civc-editorial-section">
                    <div className="civc-editorial-container">
                        <div className="civc-editorial-split-grid">

                            <div className="civc-editorial-profile-sidebar">
                                <div className="civc-editorial-avatar-wrap">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="civc-editorial-avatar" />
                                </div>

                                <div className="civc-editorial-bio">
                                    <h4 className="civc-editorial-bio-name">Angela Hughes</h4>
                                    <p className="civc-editorial-bio-title">Founder & CEO, Trips & Ships Luxury Travel</p>
                                </div>

                                <div className="civc-editorial-stats-row">
                                    <div className="civc-editorial-stat-badge">
                                        <strong>40+</strong> Years Experience
                                    </div>
                                    <div className="civc-editorial-stat-badge">
                                        <strong>120+</strong> Countries Visited
                                    </div>
                                </div>

                                <div className="civc-editorial-expertise-box">
                                    <span className="civc-editorial-expertise-label">Her expertise spans:</span>
                                    <div className="civc-editorial-expertise-list">
                                        {[
                                            'Premium & luxury cruising',
                                            'Celebrity Edge Series ships',
                                            'Stateroom & cabin selection',
                                            'Alaska & scenic itinerary planning',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="civc-editorial-expertise-item">
                                                <CivIconDot size={10} className="civc-editorial-dot" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="civc-editorial-main-content">
                                <div className="civc-editorial-header">
                                    <div className="civc-editorial-eyebrow-container">
                                        <CivIconAward size={16} className="civc-editorial-icon-badge" />
                                        <span className="civc-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="civc-editorial-heading">
                                        Is Celebrity's Infinite Veranda Worth Choosing?
                                    </h2>
                                    <div className="civc-editorial-heading-line"></div>
                                </div>

                                <p className="civc-editorial-lead-para">
                                    The Infinite Veranda works best when you think of it as a flexible indoor/outdoor viewing space rather than a traditional balcony.
                                </p>

                                <div className="civc-editorial-quote-box">
                                    <p className="civc-editorial-quote-text">
                                        For Alaska, Northern Europe and scenic itineraries, the ability to enjoy expansive views without standing outside in cold or rain can be a major advantage. For travelers who love sitting outdoors with a drink, feeling the breeze and having a clearly separated private balcony, the traditional veranda can still be the better choice. The best decision comes down to how you actually use outdoor space—not simply which cabin sounds more innovative.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="civc-why-book-section civc-why-book-dark">
                    <div className="civc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="civc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="civc-section-heading">Why Choose Trips & Ships Luxury Travel for <br /> Your Celebrity Cabin?</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                            <p className="civc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Selecting between an Infinite Veranda and a traditional balcony is only one part of planning the right Celebrity cruise. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="civc-why-book-grid">
                            {civWhyPlan.map((item, idx) => {
                                const IconComponent = civIconMap[item.icon];
                                return (
                                    <div key={idx} className="civc-why-book-card">
                                        <div className="civc-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <CivIconDot size={20} />}
                                        </div>
                                        <h4 className="civc-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="civc-lead-paragraph" style={{ textAlign: 'center', marginTop: '20px', color: '#cbd5e1' }}>
                            The goal is to match your cabin, ship and itinerary with the way you actually want to travel.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="civc-faq-section">
                    <div className="civc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="civc-section-heading">Frequently Asked Questions</h2>
                            <div className="civc-heading-bar civc-bar-center"></div>
                        </div>
                        <div className="civc-faq-list">
                            {civFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="civc-faq-item"
                                    onClick={() => civToggleFaq(index)}
                                >
                                    <div className="civc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="civc-faq-toggle">
                                            {civActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {civActiveFaq === index && (
                                        <p className="civc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CTA SECTION */}
                <section className="civc-cta-section">
                    <div className="civc-cta-bg-pattern"></div>
                    <div className="civc-cta-inner">
                        <h2 className="civc-cta-heading">Plan Your Celebrity Cruise Cabin</h2>
                        <div className="civc-cta-separator"></div>
                        <p className="civc-cta-text">
                            Not sure whether a Celebrity Infinite Veranda is right for your next cruise? Trips & Ships Luxury Travel can compare specific cabins, deck locations, pricing and traditional balcony alternatives to help you choose the stateroom that best matches your itinerary and travel style.
                        </p>
                        <div className="civc-cta-btn-row">
                            <Link to="/contact" className="civc-btn-primary">
                                <CivIconPhone size={18} />
                                Compare Celebrity Veranda Cabins
                            </Link>
                            <button className="civc-btn-outline">
                                <CivIconList size={18} />
                                Speak With a Celebrity Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityInfiniteVeranda