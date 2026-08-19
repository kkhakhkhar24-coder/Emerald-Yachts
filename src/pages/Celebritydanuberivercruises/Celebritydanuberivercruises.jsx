import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebritydanuberivercruises.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Compass,
    Wine,
    Wind,
    Sun,
    BedDouble,
    Sparkles,
    DoorOpen,
    Waves,
    Wifi,
    Utensils,
    ConciergeBell,
    Landmark,
    Mountain,
    Calendar,
    Plane,
    FileSearch,
    Sliders,
    Users,
    MapPin,
    Globe,
    Coffee,
    Home,
    Castle,
    Building2,
    ChefHat,
    Leaf,
    Droplet,
    Clock,
    ThumbsUp,
    Gift,
    ShoppingBag,
    Snowflake,
    TreePine,
    Camera,
    Music,
    Anchor,
    BadgePercent,
    Route
} from 'lucide-react'

const dancIconMap = {
    Ship, Compass, Wine, Wind, Sun, BedDouble, Sparkles, DoorOpen, Waves, Wifi,
    Utensils, ConciergeBell, Landmark, Mountain, Calendar, Plane, FileSearch,
    Sliders, Users, MapPin, Globe, Coffee, Home, Castle, Building2, ChefHat,
    Leaf, Droplet, Clock, ThumbsUp, Gift, ShoppingBag, Snowflake, TreePine,
    Camera, Music, Anchor, BadgePercent, Route
}

/* ============================================================
   INLINE SVG ICONS
   ============================================================ */
function DancIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function DancIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function DancIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function DancIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function DancIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function DancIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function DancIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function DancIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function DancPlaceholder({ label, className = '' }) {
    return (
        <div className={`cdrs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <DancIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityDanubeRiverCruises() {
    const [dancActiveFaq, setDancActiveFaq] = useState(null)
    const dancToggleFaq = (index) => {
        setDancActiveFaq(dancActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const dancGlance = [
        { feature: 'Cruise Line', detail: 'Celebrity River Cruises' },
        { feature: 'Sailing Years', detail: '2027 & 2028' },
        { feature: 'Typical Cruise Length', detail: '7 nights' },
        { feature: 'Main Region', detail: 'Danube River' },
        { feature: 'Featured Region', detail: 'Upper & Lower Danube' },
        { feature: 'Popular Starting City', detail: 'Budapest' },
        { feature: 'Featured Cities', detail: 'Budapest, Bratislava, Vienna' },
        { feature: 'Scenic Highlights', detail: 'Wachau Valley' },
        { feature: 'German Destinations', detail: 'Vilshofen, Passau, Regensburg' },
        { feature: 'Shore Excursions', detail: 'One included each day' },
        { feature: 'Dining', detail: 'Included' },
        { feature: 'Beverages', detail: 'Included' },
        { feature: 'Wi-Fi', detail: 'Included' },
        { feature: 'Christmas Markets', detail: 'Available on selected sailings' },
        { feature: 'Before & After Stays', detail: 'Available on selected sailings' },
        { feature: 'Ships', detail: 'Celebrity River fleet' },
        { feature: 'Experience', detail: 'Premium, intimate & destination-focused' }
    ]

    const dancSailDestinations = [
        { label: 'Budapest', icon: 'Building2' },
        { label: 'Bratislava', icon: 'Building2' },
        { label: 'Vienna', icon: 'Landmark' },
        { label: 'Hainburg', icon: 'MapPin' },
        { label: 'Wachau Valley', icon: 'Mountain' },
        { label: 'Melk', icon: 'Landmark' },
        { label: 'Engelhartszell', icon: 'MapPin' },
        { label: 'Vilshofen', icon: 'MapPin' },
        { label: 'Passau', icon: 'MapPin' },
        { label: 'Regensburg', icon: 'Castle' },
        { label: 'Linz', icon: 'MapPin' },
        { label: 'Dürnstein', icon: 'Castle' },
        { label: 'Krems', icon: 'MapPin' },
        { label: 'Additional Danube destinations', icon: 'Compass' }
    ]

    const dancRouteStops = [
        'Budapest', 'Bratislava', 'Hainburg', 'Vienna', 'Wachau Valley', 'Melk', 'Engelhartszell', 'Vilshofen'
    ]

    const dancCitiesGlance = [
        { city: 'Budapest', country: 'Hungary', knownFor: 'Danube waterfront, history & thermal baths' },
        { city: 'Bratislava', country: 'Slovakia', knownFor: 'Old Town & castle' },
        { city: 'Vienna', country: 'Austria', knownFor: 'Imperial culture, music & architecture' },
        { city: 'Hainburg', country: 'Austria', knownFor: 'Historic riverside setting' },
        { city: 'Wachau Valley', country: 'Austria', knownFor: 'Vineyards & scenic sailing' },
        { city: 'Melk', country: 'Austria', knownFor: 'Historic & cultural attractions' },
        { city: 'Passau', country: 'Germany', knownFor: 'Historic riverside city' },
        { city: 'Regensburg', country: 'Germany', knownFor: 'Medieval architecture' },
        { city: 'Vilshofen', country: 'Germany', knownFor: 'Bavarian gateway' }
    ]

    const dancBudapestList = ['Danube waterfront', 'Historic architecture', 'Buda Castle', 'Thermal baths', 'Bridges', 'Museums', 'Local dining']
    const dancBratislavaList = ['Historic Old Town', 'Bratislava Castle', 'Cobblestone streets', 'Historic architecture', 'Local cafés', 'Cultural attractions']
    const dancViennaList = ['Imperial architecture', 'Palaces', 'Museums', 'Classical music', 'Historic cafés', 'Opera', 'Cultural attractions']
    const dancWachauList = ['Vineyards', 'Historic villages', 'River scenery', 'Castles', 'Austrian cultural heritage', 'Scenic sailing']

    const dancIncluded = [
        { title: 'Shore Excursions', desc: 'Celebrity includes one shore excursion every day on its river cruises.', icon: 'Compass' },
        { title: 'Dining', desc: 'Meals are included as part of the river cruise fare.', icon: 'Utensils' },
        { title: 'Drinks', desc: 'Celebrity states that beverages, including alcoholic beverages, are included in the river cruise fare.', icon: 'Wine' },
        { title: 'Wi-Fi', desc: 'Wi-Fi is included throughout the river cruise experience.', icon: 'Wifi' },
        { title: 'Onboard Experiences', desc: "Celebrity's river program is designed around intimate onboard spaces combined with destination-focused experiences and locally connected activities.", icon: 'Sparkles' }
    ]

    const dancExcursions = [
        { label: 'Historic cities', icon: 'Landmark' },
        { label: 'Architecture', icon: 'Building2' },
        { label: 'Food', icon: 'ChefHat' },
        { label: 'Wine', icon: 'Wine' },
        { label: 'Local culture', icon: 'Users' },
        { label: 'Museums', icon: 'Camera' },
        { label: 'European history', icon: 'Castle' },
        { label: 'Regional traditions', icon: 'Sparkles' },
        { label: 'Local storytellers', icon: 'Music' },
        { label: 'Destination-focused experiences', icon: 'Compass' }
    ]

    const dancSeasons = [
        { title: 'Spring Danube River Cruises', desc: 'Spring can be attractive for travelers interested in mild weather, fresh scenery, city sightseeing, scenic river landscapes and European cultural travel.', icon: 'Leaf' },
        { title: 'Summer Danube River Cruises', desc: 'Summer provides longer daylight hours and more opportunities for exploring riverside destinations, with long days, outdoor sightseeing, walking tours and scenic sailing.', icon: 'Sun' },
        { title: 'Fall Danube River Cruises', desc: "Fall can be particularly appealing for travelers interested in vineyards, harvest-season scenery and comfortable sightseeing along the Wachau Valley.", icon: 'Wine' },
        { title: 'Christmas Danube River Cruises', desc: 'Celebrity specifically features Danube Christmas Market Cruises, including itineraries between Budapest and Nuremberg, with holiday atmosphere and seasonal shopping.', icon: 'TreePine' }
    ]

    const dancSeasonTable = [
        { feature: 'Spring', detail: 'Mild weather & sightseeing' },
        { feature: 'Summer', detail: 'Long days & outdoor exploration' },
        { feature: 'Fall', detail: 'Vineyards & autumn scenery' },
        { feature: 'Late November–December', detail: 'Christmas markets' }
    ]

    const dancCompassFeatures = [
        { label: 'River View', icon: 'Waves' },
        { label: 'Infinite Balcony', icon: 'DoorOpen' },
        { label: 'Balcony', icon: 'Home' },
        { label: 'Suite', icon: 'BedDouble' },
        { label: 'Skylight Infinite Balcony Suite', icon: 'Sparkles' },
        { label: 'Modern river-facing spaces', icon: 'Sun' },
        { label: 'Intimate guest capacity', icon: 'Users' }
    ]

    const dancAccommodations = [
        { label: 'River View', icon: 'Waves' },
        { label: 'Infinite Balcony', icon: 'DoorOpen' },
        { label: 'Balcony', icon: 'Home' },
        { label: 'Vista Balcony Suite', icon: 'BedDouble' },
        { label: 'Skylight Infinite Balcony Suite', icon: 'Sparkles' }
    ]

    const dancBeforeAfterIncluded = [
        { feature: 'Hotel', detail: 'Premium accommodation options' },
        { feature: 'Breakfast', detail: 'Daily hotel breakfast' },
        { feature: 'Transportation', detail: 'Transfers' },
        { feature: 'Tours', detail: 'Curated local experiences' },
        { feature: 'Local Expertise', detail: 'Destination Insider' },
        { feature: 'Guided Experiences', detail: 'Local Storytellers' },
        { feature: 'Customization', detail: 'Options based on selected stay' }
    ]

    const dancBeforeAfterList = ['Premium hotel accommodations', 'Breakfast', 'Local-led experiences', 'Destination Insider experiences', 'Transfers', 'Curated tours']

    const dancDanubeVsOcean = [
        { river: 'Smaller river ship', ocean: 'Larger ocean ship' },
        { river: 'European river destinations', ocean: 'Ocean destinations worldwide' },
        { river: 'City-center access', ocean: 'Traditional cruise ports' },
        { river: 'Destination-focused', ocean: 'Ship and destination focused' },
        { river: 'One excursion per day included', ocean: 'Excursion structure varies' },
        { river: 'River scenery', ocean: 'Ocean scenery' },
        { river: 'Intimate atmosphere', ocean: 'Resort-style atmosphere' },
        { river: 'Multiple European ports', ocean: 'Broader global itinerary choices' }
    ]

    const dancRhineDanubePairs = [
        { danube: 'Budapest', rhine: 'Amsterdam' },
        { danube: 'Vienna', rhine: 'Cologne' },
        { danube: 'Bratislava', rhine: 'Rüdesheim' },
        { danube: 'Wachau Valley', rhine: 'Strasbourg' },
        { danube: 'Regensburg', rhine: 'Basel' },
        { danube: 'Imperial cities & history', rhine: 'Vineyards & castles' },
        { danube: 'Central European destinations', rhine: 'Netherlands, Germany, France & Switzerland' }
    ]

    const dancChooseDanube = ['Vienna', 'Budapest', 'Bratislava', 'Central European history', 'Imperial architecture', 'Wachau Valley', 'Danube Christmas markets']
    const dancChooseRhine = ['Amsterdam', 'Cologne', 'Strasbourg', 'Rhine Valley scenery', 'Vineyards', 'Castles', 'Western European culture']

    const dancWorthValues = [
        { label: 'A new premium river cruise product', icon: 'Sparkles' },
        { label: 'Modern ship design', icon: 'Ship' },
        { label: 'Intimate cruising', icon: 'Users' },
        { label: 'European city access', icon: 'Landmark' },
        { label: 'Included daily excursions', icon: 'Compass' },
        { label: 'Included meals', icon: 'Utensils' },
        { label: 'Included beverages', icon: 'Wine' },
        { label: 'Included Wi-Fi', icon: 'Wifi' },
        { label: 'Seasonal experiences', icon: 'Calendar' },
        { label: 'Christmas market options', icon: 'TreePine' },
        { label: 'Optional pre- and post-cruise extensions', icon: 'Plane' }
    ]

    const dancWhoShould = [
        { feature: 'First-Time River Cruisers', detail: 'The Danube offers an accessible introduction to European river cruising because it combines recognizable cities with scenic sailing.' },
        { feature: 'Celebrity Ocean Cruise Guests', detail: 'Travelers already familiar with Celebrity may enjoy experiencing the brand in a more intimate river environment.' },
        { feature: 'Couples', detail: 'The relaxed pace, European cities and scenic sailing make the Danube particularly well suited to couples.' },
        { feature: 'History & Culture Travelers', detail: 'Vienna, Budapest, Bratislava and the historic Danube towns offer a broad range of European history and culture.' },
        { feature: 'Christmas Market Travelers', detail: 'The Danube provides access to major European Christmas market destinations during the holiday season.' },
        { feature: 'Multi-Generational Travelers', detail: 'The variety of excursions and relatively relaxed travel format can work well for families traveling across generations.' }
    ]

    const dancMayPreferAnother = [
        'Want the lowest available river cruise fare',
        'Prefer a highly traditional river cruise aesthetic',
        'Want extensive nightlife and large-scale entertainment',
        'Prefer the largest possible river ship',
        "Want destinations outside Celebrity's current river network"
    ]

    const dancPros = [
        'New premium river cruise program', 'Danube itineraries for 2027 and 2028', 'Upper Danube options',
        'Lower Danube options', 'Budapest and Vienna', 'Bratislava', 'Wachau Valley', 'Multiple European countries',
        'One shore excursion per day included', 'Meals included', 'Wi-Fi included', 'Included beverages',
        'Modern river ships', 'Innovative accommodations', 'Christmas market itineraries', 'Before and After Stay options'
    ]

    const dancCons = [
        'Newer river product with less operating history',
        'Current program focuses on selected European rivers',
        'Individual itineraries vary considerably',
        'Some premium experiences can cost extra',
        'Exact inclusions should always be confirmed for the selected sailing'
    ]

    const dancSteps = [
        { title: 'Choose Your Direction', desc: 'Decide whether you prefer Budapest to Vilshofen, Vilshofen to Budapest, Budapest to Regensburg, or another Danube itinerary available for your travel dates. Celebrity currently offers both Budapest-to-Germany and Germany-to-Budapest itinerary formats.', tags: ['Budapest to Vilshofen', 'Vilshofen to Budapest', 'Budapest to Regensburg'] },
        { title: 'Choose Your Season', desc: 'Think about what matters most: spring scenery, summer weather, autumn vineyards or Christmas markets.', tags: ['Spring scenery', 'Summer weather', 'Autumn vineyards', 'Christmas markets'] },
        { title: 'Compare Ports', desc: 'Do not choose solely based on the number of nights. Look at the cities and experiences that matter most to you.', tags: [] },
        { title: 'Select Your Accommodation', desc: 'Compare River View, Infinite Balcony, Balcony, Vista Balcony Suite and Skylight Infinite Balcony Suite.', tags: ['River View', 'Infinite Balcony', 'Balcony', 'Vista Balcony Suite', 'Skylight Infinite Balcony Suite'] },
        { title: 'Consider a Before or After Stay', desc: 'Adding extra nights in Budapest, Vienna, Prague or another available city can turn a 7-night river cruise into a more complete European vacation.', tags: ['Budapest', 'Vienna', 'Prague'] }
    ]

    const dancWhyPlan = [
        { title: 'Compare Celebrity Danube Itineraries', icon: 'FileSearch' },
        { title: 'Choose the Best Sailing Season', icon: 'Calendar' },
        { title: 'Compare Budapest and German Gateway Options', icon: 'Compass' },
        { title: 'Select the Right Stateroom or Suite', icon: 'BedDouble' },
        { title: 'Evaluate Included Excursions', icon: 'MapPin' },
        { title: 'Arrange Pre-Cruise Budapest Stays', icon: 'Building2' },
        { title: 'Arrange Post-Cruise European Extensions', icon: 'Globe' },
        { title: 'Coordinate Flights', icon: 'Plane' },
        { title: 'Arrange Private Transfers', icon: 'Route' },
        { title: 'Compare Celebrity With Other Luxury River Cruise Lines', icon: 'BadgePercent' },
        { title: 'Build a Customized European Vacation', icon: 'Sliders' }
    ]

    const dancFaqs = [
        { question: '1. What is a Celebrity Danube River Cruise?', answer: 'A Celebrity Danube River Cruise is a premium European river cruise experience sailing the Danube, with itineraries visiting destinations including Budapest, Bratislava, Vienna, the Wachau Valley and German river cities.' },
        { question: '2. When do Celebrity Danube River Cruises begin?', answer: "Celebrity's inaugural river cruises begin in August 2027, with Danube and Rhine itineraries offered for 2027 and 2028." },
        { question: '3. How long are Celebrity Danube River Cruises?', answer: 'Celebrity currently offers 7-night Danube itineraries, including Budapest-to-Vilshofen and other Upper Danube routes.' },
        { question: '4. Which cities does Celebrity visit on the Danube?', answer: 'Celebrity Danube itineraries can include Budapest, Bratislava, Vienna, Hainburg, the Wachau Valley, Melk, Passau, Regensburg, Linz and Vilshofen, although exact ports depend on the itinerary.' },
        { question: '5. Does Celebrity Danube River Cruises sail from Budapest?', answer: 'Yes. Celebrity offers Danube itineraries beginning in Budapest, including 7-night journeys from Budapest to Vilshofen and Budapest to Regensburg.' },
        { question: '6. Does Celebrity Danube River Cruises sail to Vienna?', answer: 'Yes. Vienna is one of the featured destinations on Celebrity Danube itineraries, with selected sailings including an overnight stay.' },
        { question: '7. What is included on Celebrity Danube River Cruises?', answer: 'Celebrity states that river cruise fares include meals, beverages, Wi-Fi, entertainment options and one shore excursion per day.' },
        { question: '8. Are shore excursions included on Celebrity Danube cruises?', answer: 'Yes. Celebrity includes one shore excursion every day on its river cruises.' },
        { question: '9. Is Wi-Fi included on Celebrity Danube River Cruises?', answer: 'Yes. Wi-Fi is included as part of the Celebrity River Cruises fare.' },
        { question: '10. Are drinks included on Celebrity Danube River Cruises?', answer: 'Yes. Celebrity states that beverages, including alcoholic beverages, are included in the river cruise fare.' },
        { question: '11. What is the best time for a Celebrity Danube River Cruise?', answer: 'The best time depends on your interests. Spring and summer are suited to general sightseeing, fall can appeal to travelers interested in vineyards and seasonal scenery, and late November through December is best for Christmas markets.' },
        { question: '12. Are Celebrity Danube River Cruises good for Christmas markets?', answer: 'Yes. Celebrity offers dedicated Danube Christmas Market Cruises, including itineraries between Budapest and Nuremberg.' },
        { question: '13. What ships sail Celebrity Danube River Cruises?', answer: "Celebrity's Danube fleet includes Celebrity Compass, Celebrity Seeker and Celebrity Boundless, with these ships appearing on current Danube itineraries." },
        { question: '14. Does Celebrity River Cruises offer Before and After Stays?', answer: 'Yes. Celebrity offers pre- and post-cruise experiences designed to extend river journeys into iconic European cities, including Budapest and Prague.' },
        { question: '15. Are Celebrity Danube River Cruises worth it?', answer: 'They can be an excellent choice for travelers seeking a new premium river cruise experience with modern ships, included daily excursions, Central European city access, included beverages and optional pre- and post-cruise extensions.' }
    ]

    const dancRelated = [
        { title: 'Celebrity Rhine River Cruises', desc: 'Compare castles, vineyards and Western European destinations along the Rhine with the same new premium Celebrity river program.', icon: 'Castle', link: '/celebrity-cruises/river-cruises/rhine/' },
        { title: 'Celebrity River Cruises Overview', desc: 'Explore the full Celebrity River Cruises program, including ships, itineraries and inclusions across the Rhine and Danube.', icon: 'Ship', link: '/celebrity-cruises/river-cruises/' },
        { title: 'Uniworld Rhine River Cruises', desc: 'Compare an established luxury river cruise line sailing the Rhine, from castles to vineyard towns.', icon: 'Anchor', link: '/river-cruises/uniworld-rhine' },
        { title: 'Egypt & Nile River Cruises', desc: 'Discover a different river cruise experience, sailing the Nile between Luxor and Aswan.', icon: 'Waves', link: '/river-cruises/egypt-nile' },
        { title: 'Uniworld vs. Tauck: Which River Cruise Line Is Right for You?', desc: 'Compare two established luxury river cruise lines side by side before you book.', icon: 'BadgePercent', link: '/river-cruises/uniworld-vs-tauck' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const dancSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/#webpage",
                "name": "Celebrity Danube River Cruises: Routes, Ports & More",
                "url": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/",
                "description": "Explore Celebrity Danube River Cruises for 2027 and 2028, including Upper and Lower Danube itineraries, Budapest, Vienna, Bratislava, Christmas markets, sailing seasons, inclusions and pre- and post-cruise stays.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/#article" }
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/#article",
                "headline": "Celebrity Danube River Cruises: Routes, Ports & More",
                "url": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/",
                "description": "Expert guide to Celebrity Danube River Cruises for 2027 and 2028, including itineraries, Budapest, Vienna, Bratislava, the Wachau Valley, ships, accommodations, inclusions, excursions, Christmas markets, and Before and After Stays.",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/#webpage" }
            },
            {
                "@type": "Service",
                "name": "Celebrity Danube River Cruise Planning Services",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert Celebrity Danube River Cruise planning services helping travelers compare itineraries, choose ships and accommodations, select sailing seasons, arrange Before and After Stays, and create personalized European river cruise vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity River Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/river-cruises/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Danube River Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/river-cruises/danube/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": dancFaqs.map(f => ({
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
                <title>Celebrity Danube River Cruises: Routes, Ports & More</title>
                <meta name="title" content="Celebrity Danube River Cruises: Itineraries, Ports & Guide" />
                <meta
                    name="description"
                    content="Explore Celebrity Danube River Cruises for 2027 and 2028, including Upper and Lower Danube itineraries, Budapest, Vienna, Bratislava, Christmas markets, sailing seasons, inclusions and pre- and post-cruise stays."
                />
                <script type="application/ld+json">
                    {JSON.stringify(dancSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="cdrc-page-wrapper">

                {/* HERO SECTION */}
                <section className="cdrc-hero-section">
                    <div className="cdrc-hero-overlay"></div>
                    <div className="cdrc-hero-content">
                        <div className="cdrc-hero-tag">
                            <DancIconSparkle size={16} />
                            <span>Celebrity Danube River Cruises</span>
                        </div>
                        <h1 className="cdrc-hero-title">Celebrity Danube River Cruises <br /> Routes, Ports & More</h1>
                        <p className="cdrc-hero-subtitle">
                            Itineraries, Ports & Guide for 2027 & 2028
                        </p>
                        <div className="cdrc-hero-btn-row">
                            <Link to='/contact' className="cdrc-btn-primary">
                                <DancIconPhone size={18} />
                                Plan My Celebrity Danube River Cruise
                            </Link>
                            <button className="cdrc-btn-outline">
                                <DancIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="cdrc-intro-section">
                    <div className="cdrc-intro-container">
                        <div className="cdrc-intro-grid">
                            <div className="cdrc-intro-copy">
                                <span className="cdrc-eyebrow-label">EXPERIENCE THE DANUBE WITH CELEBRITY</span>
                                <h2 className="cdrc-section-heading">Celebrity Danube River Cruises</h2>
                                <div className="cdrc-heading-bar"></div>
                                <p className="cdrc-lead-paragraph">
                                    The Danube River is one of Europe's most important waterways, connecting imperial cities, historic towns, vineyard-covered landscapes and cultural destinations across Central Europe.
                                </p>
                                <p className="cdrc-lead-paragraph">
                                    Celebrity River Cruises brings its new premium river cruise experience to the Danube for 2027 and 2028, with itineraries connecting destinations such as Budapest, Bratislava, Vienna, the Wachau Valley, Melk, Passau, Regensburg and Vilshofen. Celebrity's current Danube program includes 7-night itineraries, with selected journeys featuring overnight stays and opportunities to add Before and After Stays.
                                </p>
                                <p className="cdrc-lead-paragraph">
                                    For travelers considering a first European river cruise—or comparing Celebrity with other premium river cruise lines—the Danube offers a strong combination of history, architecture, scenic sailing, food, wine and major Central European cities.
                                </p>
                            </div>
                            <div className="cdrc-intro-image-frame">
                                <DancPlaceholder label="Celebrity Danube River Cruises" />
                                <div className="cdrc-intro-badge-float">
                                    <DancIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Danube River 2027–2028</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="cdrs-quick-answer-section">
                    <div className="cdrs-quick-answer-container">
                        <div className="cdrs-quick-answer-card">
                            <h3 className="cdrs-quick-answer-title">What Are Celebrity Danube River Cruises?</h3>
                            <p className="cdrs-quick-answer-text">
                                Celebrity Danube River Cruises are premium European river cruises sailing the Danube, with 2027 and 2028 itineraries visiting destinations including Budapest, Bratislava, Vienna, the Wachau Valley and German river cities. Celebrity's Danube program includes 7-night sailings, one shore excursion per day, meals, beverages and Wi-Fi, with Before and After Stay opportunities available on selected journeys.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA */}
                <section className="cdrs-inline-cta-section">
                    <div className="cdrs-inline-cta-container">
                        <span className="cdrs-inline-cta-tag">Expert Planning</span>
                        <p className="cdrs-inline-cta-text">Ready to explore the Danube with Celebrity?</p>
                        <div className="cdrs-inline-cta-btn-row">
                            <Link to="/contact" className="cdrs-btn-primary">
                                <DancIconPhone size={18} />
                                Plan My Celebrity Danube River Cruise
                            </Link>
                            <Link to="/contact" className="cdrs-btn-outline">
                                <DancIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="cdrs-glance-section">
                    <div className="cdrs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruises at a Glance</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrs-glance-table">
                            {dancGlance.map((row, idx) => (
                                <div key={idx} className="cdrs-glance-row">
                                    <div className="cdrs-glance-feature">{row.feature}</div>
                                    <div className="cdrs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cdrs-included-note">
                            Celebrity's current Danube offerings include Upper Danube journeys between Budapest and German destinations, as well as Christmas market itineraries and additional Lower Danube experiences.
                        </p>
                    </div>
                </section>

                {/* WHERE DOES IT SAIL */}
                <section className="cdrs-tag-section cdrs-bg-white danc-destinations-section">
                    <div className="cdrs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">DESTINATIONS</span>
                            <h2 className="cdrc-section-heading">Where Does Celebrity Danube River Cruises Sail?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Danube itineraries are designed around the river's major capitals, historic towns and scenic stretches. Depending on the itinerary, travelers can experience:
                            </p>
                        </div>
                        <div className="danc-destinations-grid">
                            {dancSailDestinations.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="danc-destination-card">
                                        <div className="danc-destination-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <DancIconDot size={20} />}
                                        </div>
                                        <span className="danc-destination-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cdrs-included-note">
                            The exact ports depend on the sailing and itinerary direction. Celebrity's 7-night Budapest & Vienna itinerary, for example, travels between Budapest and Vilshofen and includes Bratislava, Hainburg, Vienna, the Wachau Valley, Melk and Engelhartszell.
                        </p>
                    </div>
                </section>

                {/* MAP & ROUTE */}
                <section className="cdrs-itinerary-section">
                    <div className="cdrs-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">MAP & ROUTE</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruise Map & Route</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A typical Upper Danube itinerary can move between Hungary, Slovakia, Austria and Germany, combining major capitals with historic towns and scenic river landscapes.
                            </p>
                        </div>
                        <div className="cdrs-itinerary-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '760px', margin: '40px auto 0' }}>
                            <div className="cdrs-itinerary-card" style={{ position: 'relative' }}>
                                <div style={{ height: '4px', background: 'var(--cdrs-green)', width: '100%', position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 10 }}></div>
                                <h3 className="cdrs-itinerary-region">
                                    <Route size={20} />
                                    Example Route
                                </h3>
                                <p className="cdrc-lead-paragraph" style={{ marginBottom: '18px' }}>
                                    Budapest → Bratislava → Hainburg → Vienna → Wachau Valley → Melk → Engelhartszell → Vilshofen
                                </p>
                                <ul className="cdrs-itinerary-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', padding: '18px 30px 24px' }}>
                                    {dancRouteStops.map((stop, idx) => (
                                        <li key={idx} style={{ width: 'fit-content', margin: 0 }}><MapPin size={16} className="cdrs-included-icon" />{stop}</li>
                                    ))}
                                </ul>
                                <p className="cdrs-itinerary-note">
                                    This route combines Budapest's Danube waterfront, Bratislava's historic center, Austrian river scenery, Vienna's imperial culture, Wachau Valley vineyards, Melk, Bavarian river destinations and scenic Upper Danube sailing. Celebrity currently offers this 7-night Budapest-to-Vilshofen itinerary on ships including Celebrity Seeker and Celebrity Boundless.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BUDAPEST */}
                <section className="cdrs-feature-section cdrs-bg-soft">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid">
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Budapest</span>
                                </div>
                                <DancPlaceholder label="Budapest Danube Waterfront" />
                            </div>
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">CELEBRITY DANUBE RIVER CRUISE CITIES</span>
                                <h2 className="cdrs-feature-title">Budapest</h2>
                                <p className="cdrc-lead-paragraph">
                                    Budapest is one of the most important gateway cities for Celebrity Danube River Cruises. Before or after boarding, travelers can explore:
                                </p>
                                <div className="cdrs-feature-list">
                                    {dancBudapestList.map((item, idx) => (
                                        <div key={idx} className="cdrs-feature-item-card">
                                            <div className="cdrs-feature-item-icon"><DancIconCheck size={18} /></div>
                                            <span className="cdrs-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cdrc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Danube itineraries can include an overnight stay in Budapest, giving travelers additional time to experience the city.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BRATISLAVA */}
                <section className="cdrs-feature-section cdrs-dark-section">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid cdrs-reverse">
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">CELEBRITY DANUBE RIVER CRUISE CITIES</span>
                                <h2 className="cdrs-feature-title" style={{ textAlign: 'left' }}>Bratislava</h2>
                                <p className="cdrc-lead-paragraph">
                                    Bratislava provides a smaller-scale Central European experience between Budapest and Vienna. Travelers can explore:
                                </p>
                                <div className="cdrs-feature-list">
                                    {dancBratislavaList.map((item, idx) => (
                                        <div key={idx} className="cdrs-feature-item-card">
                                            <div className="cdrs-feature-item-icon"><DancIconCheck size={18} /></div>
                                            <span className="cdrs-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cdrc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Bratislava is included on Celebrity's Budapest-to-Vilshofen Danube itinerary.
                                </p>
                            </div>
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Bratislava</span>
                                </div>
                                <DancPlaceholder label="Bratislava Old Town" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIENNA */}
                <section className="cdrs-feature-section cdrs-bg-white">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid">
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Vienna</span>
                                </div>
                                <DancPlaceholder label="Vienna Imperial Architecture" />
                            </div>
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">CELEBRITY DANUBE RIVER CRUISE CITIES</span>
                                <h2 className="cdrs-feature-title">Vienna</h2>
                                <p className="cdrc-lead-paragraph">
                                    Vienna is one of the signature destinations of the Danube. Highlights include:
                                </p>
                                <div className="cdrs-feature-list">
                                    {dancViennaList.map((item, idx) => (
                                        <div key={idx} className="cdrs-feature-item-card">
                                            <div className="cdrs-feature-item-icon"><DancIconCheck size={18} /></div>
                                            <span className="cdrs-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cdrc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Danube itineraries can include an overnight stay in Vienna, giving travelers more time to explore the city beyond a typical daytime port call.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WACHAU VALLEY + MELK + REGENSBURG */}
                <section className="cdrs-feature-section cdrs-dark-section">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid cdrs-reverse">
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">CELEBRITY DANUBE RIVER CRUISE CITIES</span>
                                <h2 className="cdrs-feature-title" style={{ textAlign: 'left' }}>Wachau Valley</h2>
                                <p className="cdrc-lead-paragraph">
                                    The Wachau Valley is one of the scenic highlights of the Austrian Danube. The region is known for:
                                </p>
                                <div className="cdrs-feature-list">
                                    {dancWachauList.map((item, idx) => (
                                        <div key={idx} className="cdrs-feature-item-card">
                                            <div className="cdrs-feature-item-icon"><DancIconCheck size={18} /></div>
                                            <span className="cdrs-feature-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cdrc-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity includes the Wachau Valley on selected Danube itineraries.
                                </p>
                            </div>
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Wachau Valley</span>
                                </div>
                                <DancPlaceholder label="Wachau Valley Vineyards" />
                            </div>
                        </div>

                        <div className="cdrx-dining-venues-block">
                            <div className="cdrx-dining-venues-divider"></div>
                            <p className="cdrx-dining-venues-lead">
                                Melk is another important Austrian destination on selected Celebrity Danube itineraries. The destination provides access to the cultural and historic landscape surrounding the Wachau region. Celebrity's Budapest-to-Vilshofen itinerary includes Melk alongside the Wachau Valley.
                            </p>
                            <p className="cdrx-dining-venues-lead" style={{ marginTop: '18px' }}>
                                Regensburg adds a German historic-city experience to selected Celebrity Danube itineraries. Celebrity's 2028 Budapest-to-Regensburg itinerary includes Bratislava, Vienna, Dürnstein, the Wachau Valley, Linz, Passau and Regensburg.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CITIES AT A GLANCE (3-col compare table) */}
                <section className="cdrx-compare-section cdrs-bg-white">
                    <div className="cdrx-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">CITIES OVERVIEW</span>
                            <h2 className="cdrc-section-heading">Danube River Cruise Cities at a Glance</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrx-compare-table-3col">
                            <div className="cdrx-compare-row-3col cdrx-compare-header">
                                <div className="cdrx-compare-cell cdrx-compare-label">City / Region</div>
                                <div className="cdrx-compare-cell">Country</div>
                                <div className="cdrx-compare-cell">Best Known For</div>
                            </div>
                            {dancCitiesGlance.map((row, idx) => (
                                <div key={idx} className="cdrx-compare-row-3col">
                                    <div className="cdrx-compare-cell cdrx-compare-label">{row.city}</div>
                                    <div className="cdrx-compare-cell">{row.country}</div>
                                    <div className="cdrx-compare-cell">{row.knownFor}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cdrs-included-note">
                            Not every Celebrity Danube sailing visits every destination, so travelers should compare the individual itinerary before booking.
                        </p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="cdrs-feature-section cdrs-dark-section danc-included-section-wrap">
                    <div className="cdrs-feature-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">VOYAGE FARE</span>
                            <h2 className="cdrc-section-heading">What Is Included on Celebrity Danube River Cruises?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Danube River Cruises include several core elements in the cruise fare.
                            </p>
                        </div>
                        <div className="danc-included-grid">
                            {dancIncluded.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="danc-included-card">
                                        <div className="danc-included-card-header">
                                            <div className="danc-included-icon-box">
                                                {IconComponent && <IconComponent size={24} />}
                                            </div>
                                            <h4 className="danc-included-card-title">{item.title}</h4>
                                        </div>
                                        <p className="danc-included-card-text">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* EXCURSIONS */}
                <section className="cdrs-tag-section cdrs-bg-white">
                    <div className="cdrs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">SHORE EXCURSIONS</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruise Excursions</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                One of the major advantages of river cruising is the ability to reach European cities and cultural destinations while avoiding repeated hotel changes. Celebrity includes one shore excursion per day. Depending on the itinerary, excursions can focus on:
                            </p>
                        </div>
                        <div className="danc-excursions-pill-container">
                            {dancExcursions.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="danc-excursion-pill">
                                        <span className="danc-excursion-pill-icon">
                                            {IconComponent ? <IconComponent size={18} /> : <DancIconDot size={18} />}
                                        </span>
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cdrs-included-note">
                            Celebrity emphasizes locally connected experiences designed to bring travelers closer to the people, culture and history of each destination.
                        </p>
                    </div>
                </section>

                {/* BEST TIME */}
                <section className="cdrs-why-book-section cdrs-bg-soft">
                    <div className="cdrs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">SAILING SEASONS</span>
                            <h2 className="cdrc-section-heading1">Best Time for a Celebrity Danube River Cruise</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no single best month for everyone. The ideal season depends on what you want to experience.
                            </p>
                        </div>
                        <div className="danc-seasons-grid">
                            {dancSeasons.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="danc-season-card">
                                        <div className="danc-season-icon-wrapper">
                                            {IconComponent ? <IconComponent size={24} /> : <DancIconDot size={24} />}
                                        </div>
                                        <h4 className="danc-season-card-title">{item.title}</h4>
                                        <p className="danc-season-card-desc">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* BEST TIME TABLE */}
                <section className="cdrs-glance-section cdrs-bg-white">
                    <div className="cdrs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">AT A GLANCE</span>
                            <h2 className="cdrc-section-heading">Best Time to Take a Celebrity Danube River Cruise</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrs-glance-table">
                            {dancSeasonTable.map((row, idx) => (
                                <div key={idx} className="cdrs-glance-row">
                                    <div className="cdrs-glance-feature">{row.feature}</div>
                                    <div className="cdrs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cdrs-included-note">
                            The right season depends more on the experience you want than on a universally "best" month.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY COMPASS */}
                <section className="cdrs-feature-section cdrs-bg-soft">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid">
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Celebrity Compass</span>
                                </div>
                                <DancPlaceholder label="Celebrity Compass River Ship" />
                            </div>
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">DANUBE RIVER CRUISE SHIPS</span>
                                <h2 className="cdrs-feature-title">Celebrity Compass</h2>
                                <p className="cdrc-lead-paragraph">
                                    Celebrity's Danube sailings use its new generation of river ships. Celebrity Compass is designed around the river experience, with spacious interiors, open-air spaces and the Skylight Infinite Balcony Suite concept. Celebrity lists Compass with an inaugural date of August 5, 2027, and an occupancy of 172 guests. Key accommodation features include:
                                </p>
                                <div className="cdrs-feature-list">
                                    {dancCompassFeatures.map((item, idx) => {
                                        const IconComponent = dancIconMap[item.icon];
                                        return (
                                            <div key={idx} className="cdrs-feature-item-card">
                                                <div className="cdrs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <DancIconCheck size={18} />}
                                                </div>
                                                <span className="cdrs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY SEEKER */}
                <section className="cdrs-feature-section cdrs-dark-section">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid cdrs-reverse">
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">DANUBE RIVER CRUISE SHIPS</span>
                                <h2 className="cdrs-feature-title" style={{ textAlign: 'left' }}>Celebrity Seeker</h2>
                                <p className="cdrc-lead-paragraph">
                                    Celebrity Seeker introduces another contemporary approach to river cruising. Celebrity's current Danube itineraries include Seeker sailings between Budapest and Vilshofen. The ship is designed around Celebrity's newer river-cruise approach, combining intimate spaces with destination-focused travel.
                                </p>
                            </div>
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconSparkle size={14} />
                                    <span>Celebrity Seeker</span>
                                </div>
                                <DancPlaceholder label="Celebrity Seeker River Ship" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY BOUNDLESS */}
                <section className="cdrs-worth-section cdrs-bg-white">
                    <div className="cdrs-worth-container">
                        <span className="cdrc-eyebrow-label">DANUBE RIVER CRUISE SHIPS</span>
                        <h2 className="cdrc-section-heading">Celebrity Boundless</h2>
                        <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        <p className="cdrc-lead-paragraph">
                            Celebrity Boundless is another ship in Celebrity's growing river fleet. Celebrity currently lists Boundless on Danube itineraries between Budapest and Vilshofen. Its inclusion in the Danube program gives travelers another ship option when comparing 2028 departures.
                        </p>
                    </div>
                </section>

                {/* ACCOMMODATIONS */}
                <section className="cdrs-tag-section cdrs-bg-soft danc-accomm-tag-section">
                    <div className="cdrs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">STATEROOMS & SUITES</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruise Accommodations</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's river accommodations are designed around river views, natural light and indoor-outdoor connections. Options include:
                            </p>
                        </div>
                        <div className="cdrs-tag-grid cdrx-tag-grid-5">
                            {dancAccommodations.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="cdrs-tag-card">
                                        <div className="cdrs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <DancIconDot size={20} />}
                                        </div>
                                        <span className="cdrs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cdrs-included-note">
                            Celebrity's Skylight Infinite Balcony concept provides another way to experience natural light and the changing river scenery from inside the accommodation.
                        </p>
                    </div>
                </section>

                {/* BEFORE & AFTER STAYS INTRO */}
                <section className="danc-stays-intro-section cdrs-bg-white">
                    <div className="danc-stays-intro-container">
                        <div className="danc-stays-intro-copy">
                            <span className="cdrc-eyebrow-label" style={{ textAlign: 'left' }}>EXTEND YOUR JOURNEY</span>
                            <h2 className="cdrc-section-heading" style={{ textAlign: 'left' }}>Danube River Cruise <br /> Before & After Stays</h2>
                            <div className="cdrc-heading-bar"></div>
                            <p className="cdrc-lead-paragraph" style={{ textAlign: 'left', margin: 0 }}>
                                A Celebrity Danube River Cruise does not have to begin or end when the ship does. Celebrity offers Before and After Stays that allow travelers to add time in European cities before or after their river sailing. Celebrity specifically promotes these extensions as a way to explore iconic cities and add locally focused experiences to the river journey. Celebrity's river program highlights cities including Budapest and Prague for pre- and post-cruise experiences. Celebrity's Before and After experiences can include:
                            </p>
                        </div>
                        <div className="danc-stays-intro-keypoints">
                            {dancBeforeAfterList.map((item, idx) => (
                                <div key={idx} className="danc-stays-keypoint">
                                    <div className="danc-stays-keypoint-icon">
                                        <DancIconCheck size={18} />
                                    </div>
                                    <span className="danc-stays-keypoint-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BUDAPEST BEFORE */}
                <section className="cdrs-feature-section cdrs-dark-section danc-budapest-before-section">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid">
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconDot size={14} />
                                    <span>Budapest</span>
                                </div>
                                <DancPlaceholder label="Budapest Before Your Danube Cruise" />
                            </div>
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">BEFORE & AFTER STAYS</span>
                                <h2 className="cdrs-feature-title">Budapest Before Your Danube Cruise</h2>
                                <p className="cdrc-lead-paragraph">
                                    Budapest is one of the most natural places to extend a Danube River cruise. A pre-cruise stay can give you additional time for Danube sightseeing, historic architecture, thermal baths, museums, local dining, historic neighborhoods and Hungarian culture. Rather than arriving immediately before the ship departs, adding extra nights can make the European vacation feel more relaxed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIENNA AFTER/BEFORE */}
                <section className="cdrs-feature-section cdrs-bg-soft">
                    <div className="cdrs-feature-container">
                        <div className="cdrs-feature-grid cdrs-reverse">
                            <div className="cdrs-feature-copy-col">
                                <span className="cdrc-eyebrow-label">BEFORE & AFTER STAYS</span>
                                <h2 className="cdrs-feature-title" style={{ textAlign: 'left' }}>Vienna After or Before Your Danube Cruise</h2>
                                <p className="cdrc-lead-paragraph">
                                    Vienna is another strong destination for extending a Danube journey. Additional time can allow travelers to explore palaces, museums, classical music, historic cafés, art, architecture and local neighborhoods. Celebrity's Danube itinerary can already include an overnight stay in Vienna on selected sailings, making the city particularly suitable for travelers who want more time ashore.
                                </p>
                            </div>
                            <div className="cdrs-feature-image-col">
                                <div className="cdrs-badge-overlay">
                                    <DancIconDot size={14} />
                                    <span>Vienna</span>
                                </div>
                                <DancPlaceholder label="Vienna Before Your Danube Cruise" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED IN BEFORE & AFTER STAYS */}
                <section className="cdrs-glance-section cdrs-bg-white">
                    <div className="cdrs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">STAY INCLUSIONS</span>
                            <h2 className="cdrc-section-heading">What's Included in Celebrity <br /> Before & After Stays?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrs-glance-table">
                            {dancBeforeAfterIncluded.map((row, idx) => (
                                <div key={idx} className="cdrs-glance-row">
                                    <div className="cdrs-glance-feature">{row.feature}</div>
                                    <div className="cdrs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cdrs-included-note">
                            Celebrity describes these experiences as a way to extend the river journey while adding locally focused experiences in major European cities.
                        </p>
                    </div>
                </section>

                {/* DANUBE VS OCEAN */}
                <section className="cdrx-choice-section">
                    <div className="cdrx-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">RIVER VS OCEAN</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruises vs. Ocean Cruises</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A Danube River cruise is fundamentally different from Celebrity's ocean cruise experience.
                            </p>
                        </div>
                        <div className="cdrx-pair-table">
                            <div className="cdrx-pair-row cdrx-pair-header">
                                <div className="cdrx-pair-cell">Danube River Cruise</div>
                                <div className="cdrx-pair-cell">Celebrity Ocean Cruise</div>
                            </div>
                            {dancDanubeVsOcean.map((row, idx) => (
                                <div key={idx} className="cdrx-pair-row">
                                    <div className="cdrx-pair-cell">{row.river}</div>
                                    <div className="cdrx-pair-cell">{row.ocean}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cdrs-included-note">
                            Celebrity describes its river program as a more intimate experience, with onboard and onshore experiences centered around Europe's cultural and historic destinations.
                        </p>
                    </div>
                </section>

                {/* RHINE VS DANUBE */}
                <section className="cdrx-compare-section cdrs-dark-section">
                    <div className="cdrx-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">RIVER COMPARISON</span>
                            <h2 className="cdrc-section-heading">Rhine vs. Danube: Which Celebrity River Cruise Is Better?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrx-pair-table">
                            <div className="cdrx-pair-row cdrx-pair-header">
                                <div className="cdrx-pair-cell">Danube</div>
                                <div className="cdrx-pair-cell">Rhine</div>
                            </div>
                            {dancRhineDanubePairs.map((row, idx) => (
                                <div key={idx} className="cdrx-pair-row">
                                    <div className="cdrx-pair-cell">{row.danube}</div>
                                    <div className="cdrx-pair-cell">{row.rhine}</div>
                                </div>
                            ))}
                        </div>
                        <div className="cdrx-choice-board cdrx-choice-board-inline">
                            <div className="cdrx-choice-panel">
                                <h3 className="cdrx-choice-title">
                                    <DancIconCheck size={22} />
                                    Choose the Danube if you want:
                                </h3>
                                <div className="cdrx-choice-list">
                                    {dancChooseDanube.map((item, idx) => (
                                        <div key={idx} className="cdrx-choice-item">
                                            <div className="cdrx-choice-icon-wrap"><DancIconCheck size={16} /></div>
                                            <div className="cdrx-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cdrx-choice-panel">
                                <h3 className="cdrx-choice-title">
                                    <DancIconCheck size={22} />
                                    Choose the Rhine if you want:
                                </h3>
                                <div className="cdrx-choice-list">
                                    {dancChooseRhine.map((item, idx) => (
                                        <div key={idx} className="cdrx-choice-item">
                                            <div className="cdrx-choice-icon-wrap"><DancIconCheck size={16} /></div>
                                            <div className="cdrx-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARE THEY WORTH IT */}
                <section className="cdrs-tag-section cdrs-bg-white danc-worth-section-wrap">
                    <div className="cdrs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="cdrc-section-heading">Are Celebrity Danube River Cruises Worth It?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Danube River Cruises can be particularly attractive to travelers who want:
                            </p>
                        </div>
                        <div className="danc-worth-list-container">
                            {dancWorthValues.map((item, idx) => {
                                const IconComponent = dancIconMap[item.icon];
                                return (
                                    <div key={idx} className="danc-worth-item">
                                        <div className="danc-worth-icon-box">
                                            {IconComponent ? <IconComponent size={18} /> : <DancIconDot size={18} />}
                                        </div>
                                        <span className="danc-worth-text">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cdrc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            The strongest reason to choose the Danube is the combination of major Central European capitals and scenic river landscapes. In one journey, travelers can move between Budapest, Bratislava, Vienna, the Wachau Valley and historic German destinations.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="cdrs-glance-section">
                    <div className="cdrs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="cdrc-section-heading">Who Should Choose a Celebrity Danube River Cruise?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrs-glance-table">
                            {dancWhoShould.map((row, idx) => (
                                <div key={idx} className="cdrs-glance-row">
                                    <div className="cdrs-glance-feature">{row.feature}</div>
                                    <div className="cdrs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER ANOTHER */}
                <section className="cdrs-audience-section cdrs-bg-white">
                    <div className="cdrs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="cdrc-section-heading">Who May Prefer Another Danube River Cruise?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity may not be the ideal match for travelers who:
                            </p>
                        </div>
                        <div className="cdrs-audience-column cdrs-audience-negative">
                            <ul className="cdrs-audience-list">
                                {dancMayPreferAnother.map((item, idx) => (
                                    <li key={idx} className="cdrs-audience-item">
                                        <DancIconX size={18} className="cdrs-audience-check cdrs-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="cdrs-pros-section cdrs-dark-section">
                    <div className="cdrs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="cdrc-eyebrow-label cdrs-eyebrow-white">PROS & CONS</span>
                            <h2 className="cdrc-section-heading">Celebrity Danube River Cruises Pros & Cons</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrs-comparison-board">
                            <div className="cdrs-pros-panel">
                                <h3 className="cdrs-panel-title cdrs-pros-title">
                                    <DancIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cdrs-panel-list">
                                    {dancPros.map((pro, idx) => (
                                        <div key={idx} className="cdrs-list-item">
                                            <div className="cdrs-item-icon-wrap cdrs-pro-icon"><DancIconCheck size={16} /></div>
                                            <div className="cdrs-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cdrs-cons-panel">
                                <h3 className="cdrs-panel-title cdrs-cons-title">
                                    <DancIconX size={22} />
                                    Cons
                                </h3>
                                <div className="cdrs-panel-list">
                                    {dancCons.map((con, idx) => (
                                        <div key={idx} className="cdrs-list-item">
                                            <div className="cdrs-item-icon-wrap cdrs-con-icon"><DancIconX size={16} /></div>
                                            <div className="cdrs-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section className="cdrx-steps-section">
                    <div className="cdrx-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="cdrc-section-heading">How to Choose the Best Celebrity Danube River Cruise</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrx-steps-list">
                            {dancSteps.map((step, idx) => (
                                <div key={idx} className="cdrx-step-item">
                                    <div className="cdrx-step-number">{idx + 1}</div>
                                    <div className="cdrx-step-body">
                                        <h4 className="cdrx-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="cdrx-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="cdrx-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="cdrx-step-tag">{tag}</span>
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
                <section id="celebrity-danube-river-cruises-insight" className="cdre-expert-editorial-section cdre-growth-insight-section">
                    <div className="cdre-expert-editorial-container">
                        <div className="cdre-expert-editorial-card">

                            <div className="cdre-editorial-portrait-block">
                                <div className="cdre-editorial-image-container-relative" style={{ position: 'relative', marginBottom: '30px' }}>
                                    <div className="cdre-editorial-image-frame">
                                        <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                        <div className="cdre-editorial-gradient-layer"></div>
                                    </div>
                                    <div className="cdre-editorial-floating-stat">
                                        <div className="cdre-stat-tile">
                                            <span className="cdre-stat-number">40+</span>
                                            <span className="cdre-stat-label">Years Experience</span>
                                        </div>
                                        <div className="cdre-stat-divider"></div>
                                        <div className="cdre-stat-tile">
                                            <span className="cdre-stat-number">120+</span>
                                            <span className="cdre-stat-label">Countries Visited</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="cdre-expertise-section-box">
                                    <span className="cdre-expertise-intro-label">Her expertise spans:</span>
                                    <div className="cdre-expertise-horizontal-strip">
                                        {[
                                            'Premium & luxury cruising',
                                            'European river cruise planning',
                                            'Danube itinerary planning',
                                            'Suite & stateroom selection',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cdre-expertise-pills-row">
                                                <div className="cdre-expertise-pill-icon-box"><DancIconDot size={14} /></div>
                                                <span className="cdre-expertise-pill-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="cdre-editorial-content-block">
                                <div className="cdre-editorial-header">
                                    <div className="cdre-editorial-eyebrow-container">
                                        <DancIconAward size={18} className="cdre-editorial-icon-badge" />
                                        <span className="cdre-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="cdre-editorial-title">
                                        Why Choose the Danube <br className="cdre-growth-title-break" />for a First Celebrity River Cruise?
                                    </h2>
                                    <div className="cdre-editorial-accent-bar"></div>
                                </div>

                                <p className="cdre-editorial-lead-para">
                                    The Danube is one of the strongest choices for travelers who want major European cities, cultural variety and a relaxed river-cruise pace.
                                </p>

                                <div className="cdre-priorities-box">
                                    <p className="cdre-priorities-intro" style={{ marginBottom: '18px' }}>
                                        You can combine Budapest and Vienna with Bratislava, the Wachau Valley and historic German destinations, while the ship moves with you between destinations. For Celebrity guests, the Danube also offers an opportunity to experience the brand in a smaller, more intimate setting than its ocean ships.
                                    </p>
                                    <div className="cdre-priorities-grid-pills">
                                        {[
                                            'Budapest & Vienna Highlights',
                                            'Scenic Wachau Valley Sailing',
                                            'Included Daily Shore Excursions',
                                            'Intimate Luxury River Ships',
                                            'Seamless Multi-Country Access'
                                        ].map((item, idx) => (
                                            <div key={idx} className="cdre-priority-pill-item">
                                                <DancIconCheck size={15} className="cdre-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="cdre-editorial-full-width-footer">
                                <p className="cdre-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS */}
                <section className="danc-why-plan-section">
                    <div className="cdrs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="cdrc-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="cdrc-section-heading">Why Plan Your Celebrity Danube River Cruise With <br /> Trips & Ships Luxury Travel?</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                            <p className="cdrc-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Choosing the right Danube itinerary involves more than selecting a departure date. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="danc-why-plan-flex-container">
                            <div className="danc-why-plan-column">
                                {dancWhyPlan.slice(0, 6).map((item, idx) => {
                                    const IconComponent = dancIconMap[item.icon];
                                    return (
                                        <div key={idx} className="danc-why-plan-item">
                                            <div className="danc-why-plan-icon-box">
                                                {IconComponent ? <IconComponent size={20} /> : <DancIconDot size={20} />}
                                            </div>
                                            <span className="danc-why-plan-text">{item.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="danc-why-plan-column">
                                {dancWhyPlan.slice(6).map((item, idx) => {
                                    const IconComponent = dancIconMap[item.icon];
                                    return (
                                        <div key={idx} className="danc-why-plan-item">
                                            <div className="danc-why-plan-icon-box">
                                                {IconComponent ? <IconComponent size={20} /> : <DancIconDot size={20} />}
                                            </div>
                                            <span className="danc-why-plan-text">{item.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="cdrc-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px', color: '#cbd5e1', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                            A well-planned Danube River cruise can become much more than a week on the river—it can be the centerpiece of a larger European journey.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="cdrc-faq-section">
                    <div className="cdrc-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="cdrc-section-heading">Frequently Asked Questions</h2>
                            <div className="cdrc-heading-bar cdrc-bar-center"></div>
                        </div>
                        <div className="cdrc-faq-list">
                            {dancFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cdrc-faq-item"
                                    onClick={() => dancToggleFaq(index)}
                                >
                                    <div className="cdrc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cdrc-faq-toggle">
                                            {dancActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {dancActiveFaq === index && (
                                        <p className="cdrc-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

               

                {/* CTA SECTION */}
                <section className="cdrc-cta-section">
                    <div className="cdrc-cta-bg-pattern"></div>
                    <div className="cdrc-cta-inner">
                        <h2 className="cdrc-cta-heading">Plan Your Celebrity Danube River Cruise</h2>
                        <div className="cdrc-cta-separator"></div>
                        <p className="cdrc-cta-text">
                            Ready to explore the Danube with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Danube itineraries, select the right ship and accommodation, choose the best season, and build a seamless European vacation around your river cruise.
                        </p>
                        <div className="cdrc-cta-btn-row">
                            <Link to="/contact" className="cdrc-btn-primary">
                                <DancIconPhone size={18} />
                                Plan My Celebrity Danube River Cruise
                            </Link>
                            <button className="cdrc-btn-outline">
                                <DancIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default CelebrityDanubeRiverCruises