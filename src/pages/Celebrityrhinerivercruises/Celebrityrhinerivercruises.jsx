import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import './Celebrityrhinerivercruises.css'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Ship,
    Anchor,
    Compass,
    Wine,
    UtensilsCrossed,
    Wind,
    Sun,
    BedDouble,
    Sparkles,
    Crown,
    DoorOpen,
    Waves,
    Wifi,
    Utensils,
    ConciergeBell,
    GlassWater,
    Music,
    Landmark,
    TreeDeciduous,
    Mountain,
    Calendar,
    Plane,
    FileSearch,
    BadgePercent,
    Sliders,
    HeartHandshake,
    Users,
    MapPin,
    Globe,
    ShieldCheck,
    Coffee,
    Home,
    Star,
    Castle,
    Building2,
    Sunrise,
    ChefHat,
    Leaf,
    Droplet,
    Camera,
    Clock,
    ThumbsUp,
    TreePine,
    Snowflake,
    ShoppingBag,
    ArrowRight
} from 'lucide-react'

const iconMap = {
    Ship, Anchor, Compass, Wine, UtensilsCrossed, Wind, Sun, BedDouble, Sparkles,
    Crown, DoorOpen, Waves, Wifi, Utensils, ConciergeBell, GlassWater, Music,
    Landmark, TreeDeciduous, Mountain, Calendar, Plane, FileSearch, BadgePercent,
    Sliders, HeartHandshake, Users, MapPin, Globe, ShieldCheck, Coffee, Home,
    Star, Castle, Building2, Sunrise, ChefHat, Leaf, Droplet, Camera, Clock,
    ThumbsUp, TreePine, Snowflake, ShoppingBag
}

/* ============================================================
   INLINE SVG ICONS (no lucide-react dependency for these — plain inline)
   ============================================================ */
function RhrcIconImage({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
        </svg>
    )
}

function RhrcIconCheck({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
    )
}

function RhrcIconX({ size = 18, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    )
}

function RhrcIconAlert({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 10v4" />
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    )
}

function RhrcIconPhone({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
    )
}

function RhrcIconList({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function RhrcIconDot({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
    )
}

function RhrcIconSparkle({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
            <path d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        </svg>
    )
}

function RhrcIconAward({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5.5" />
            <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
        </svg>
    )
}

function RhrcIconArrow({ size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

/* Custom Image Placeholder Component */
function RhrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`cbcs-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <RhrcIconImage size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityRhineRiverCruises() {
    const [rhrcActiveFaq, setRhrcActiveFaq] = useState(null)
    const rhrcToggleFaq = (index) => {
        setRhrcActiveFaq(rhrcActiveFaq === index ? null : index)
    }

    /* ---------------- DATA ---------------- */

    const rhrcGlance = [
        { feature: 'Cruise Line', detail: 'Celebrity River Cruises' },
        { feature: 'Sailing Years', detail: '2027 & 2028' },
        { feature: 'Typical Cruise Length', detail: '7 nights' },
        { feature: 'Main Region', detail: 'Rhine River & connected waterways' },
        { feature: 'Countries Featured', detail: 'Netherlands, Germany, France & Switzerland' },
        { feature: 'Popular Starting City', detail: 'Amsterdam' },
        { feature: 'Popular Ending City', detail: 'Basel' },
        { feature: 'Featured Cities', detail: 'Amsterdam, Cologne, Rüdesheim, Strasbourg, Basel' },
        { feature: 'Shore Excursions', detail: 'One included each day' },
        { feature: 'Dining', detail: 'Included' },
        { feature: 'Beverages', detail: 'Included selections' },
        { feature: 'Wi-Fi', detail: 'Included' },
        { feature: 'Before & After Stays', detail: 'Available on selected sailings' },
        { feature: 'Ships', detail: 'Celebrity River fleet' },
        { feature: 'Experience', detail: 'Premium, intimate & destination-focused' }
    ]

    const rhrcWhereToSail = [
        { label: 'Amsterdam', icon: 'MapPin' },
        { label: 'Rotterdam', icon: 'MapPin' },
        { label: 'Cologne', icon: 'MapPin' },
        { label: 'Rüdesheim', icon: 'MapPin' },
        { label: 'Speyer', icon: 'MapPin' },
        { label: 'Strasbourg', icon: 'MapPin' },
        { label: 'Breisach', icon: 'MapPin' },
        { label: 'Basel', icon: 'MapPin' },
        { label: 'Scenic Rhine sailing', icon: 'Waves' },
        { label: 'Additional Rhine & Main destinations', icon: 'Compass' }
    ]

    const rhrcRouteCities = ['Amsterdam', 'Rotterdam', 'Cologne', 'Rüdesheim', 'Speyer', 'Strasbourg', 'Breisach', 'Basel']

    const rhrcRouteCombines = [
        { label: 'Dutch canals and architecture', icon: 'Landmark' },
        { label: 'German river towns', icon: 'Building2' },
        { label: 'Vineyards', icon: 'Wine' },
        { label: 'Medieval landscapes', icon: 'Castle' },
        { label: 'Rhine castles', icon: 'Castle' },
        { label: 'French culture', icon: 'Star' },
       
    ]

    const rhrcAmsterdamHighlights = [
        { label: 'Historic canals', icon: 'Waves' },
        { label: 'Museums', icon: 'Landmark' },
        { label: 'Art', icon: 'Star' },
        { label: 'Dutch architecture', icon: 'Building2' },
        { label: 'Local neighborhoods', icon: 'MapPin' },
        { label: 'Restaurants and cafés', icon: 'Coffee' }
    ]

    const rhrcCologneHighlights = [
        { label: 'Cologne Cathedral', icon: 'Landmark' },
        { label: 'Historic old town', icon: 'Building2' },
        { label: 'Rhine waterfront', icon: 'Waves' },
        { label: 'Local food', icon: 'Utensils' },
        { label: 'German beer culture', icon: 'GlassWater' },
        { label: 'Museums and cultural attractions', icon: 'Star' }
    ]

    const rhrcRudesheimHighlights = [
        { label: 'Rhine Valley landscape', icon: 'Mountain' },
        { label: 'Surrounding vineyards', icon: 'Wine' },
        { label: 'Historic villages', icon: 'Castle' }
    ]

    const rhrcStrasbourgHighlights = [
        { label: 'French cuisine', icon: 'ChefHat' },
        { label: 'German architectural influences', icon: 'Building2' },
        { label: 'Historic neighborhoods', icon: 'Landmark' },
        { label: 'Canals', icon: 'Waves' },
        { label: 'Half-timbered buildings', icon: 'Home' },
        { label: 'European institutions', icon: 'Globe' }
    ]

    const rhrcBaselHighlights = [
        { label: 'A cruise embarkation point', icon: 'Ship' },
        { label: 'A cruise disembarkation point', icon: 'Anchor' },
        { label: 'A Swiss extension destination', icon: 'Mountain' },
        { label: 'A starting point for additional European travel', icon: 'Plane' }
    ]

    const rhrcCitiesGlance = [
        { city: 'Amsterdam', country: 'Netherlands', known: 'Canals, museums & art' },
        { city: 'Rotterdam', country: 'Netherlands', known: 'Modern architecture & port' },
        { city: 'Cologne', country: 'Germany', known: 'Cathedral & historic Rhine culture' },
        { city: 'Rüdesheim', country: 'Germany', known: 'Vineyards & Rhine Valley' },
        { city: 'Speyer', country: 'Germany', known: 'Historic architecture' },
        { city: 'Strasbourg', country: 'France', known: 'French-German culture & canals' },
        { city: 'Breisach', country: 'Germany', known: 'Rhine & Black Forest region' },
        { city: 'Basel', country: 'Switzerland', known: 'Art, culture & Swiss connections' }
    ]

    const rhrcIncluded = [
        { label: 'Shore Excursions', detail: 'One included every day' },
        { label: 'Dining', detail: 'Included, with multiple choices & a 24-hour option' },
        { label: 'Drinks', detail: 'Selected wine, beer, cocktails, coffee & soft drinks' },
        { label: 'Wi-Fi', detail: 'Complimentary throughout the journey' },
        { label: 'Onboard Experiences', detail: 'Relaxation, dining & entertainment spaces' }
    ]

    const rhrcExcursionFocus = [
        { label: 'Historic cities', icon: 'Landmark' },
        { label: 'Architecture', icon: 'Building2' },
        { label: 'Food', icon: 'Utensils' },
        { label: 'Wine', icon: 'Wine' },
        { label: 'Local culture', icon: 'Users' },
        { label: 'Museums', icon: 'Star' },
        { label: 'European history', icon: 'FileSearch' },
        { label: 'Regional traditions', icon: 'Compass' }
    ]

    const rhrcSeasons = [
        {
            title: 'Spring',
            icon: 'Leaf',
            desc: 'Spring can be particularly attractive for travelers interested in the Netherlands and seasonal flowers. Celebrity specifically highlights tulip season as one of the reasons to consider a spring Rhine sailing.',
            tags: ['Tulips', 'Gardens', 'Mild weather', 'Fresh spring scenery', 'Amsterdam']
        },
        {
            title: 'Summer',
            icon: 'Sun',
            desc: 'Summer provides longer daylight hours and comfortable opportunities for exploring riverside towns.',
            tags: ['Longer days', 'Outdoor sightseeing', 'Walking tours', 'Scenic sailing', 'European summer travel']
        },
        {
            title: 'Fall',
            icon: 'TreePine',
            desc: 'Autumn transforms the Rhine Valley with seasonal colors. Celebrity highlights the vineyards turning golden during the fall.',
            tags: ['Vineyards', 'Autumn scenery', 'Wine-focused travel', 'Comfortable sightseeing']
        },
        {
            title: 'Christmas',
            icon: 'Snowflake',
            desc: 'Late November and December bring a completely different atmosphere. Celebrity highlights the region\u2019s Christmas markets as a major seasonal attraction.',
            tags: ['Christmas markets', 'Holiday atmosphere', 'Seasonal shopping', 'Winter traditions', 'Festive European travel']
        }
    ]

    const rhrcSeasonTable = [
        { feature: 'Spring', detail: 'Tulips & gardens' },
        { feature: 'Summer', detail: 'Long days & sightseeing' },
        { feature: 'Fall', detail: 'Vineyards & autumn scenery' },
        { feature: 'Late November–December', detail: 'Christmas markets' }
    ]

    const rhrcCompassFeatures = [
        { label: 'King-size beds', icon: 'BedDouble' },
        { label: 'Butler service in suites', icon: 'ConciergeBell' },
        { label: 'Daily housekeeping', icon: 'Sparkles' },
        { label: 'Turndown service', icon: 'Sun' },
        { label: 'Complimentary stocked minibar', icon: 'GlassWater' },
        { label: 'Continental breakfast in room', icon: 'Coffee' },
        { label: 'In-room filtered water', icon: 'Droplet' },
        { label: 'River-facing accommodations', icon: 'Waves' }
    ]

    const rhrcSeekerFeatures = [
        { label: 'Approximately 172 guests', icon: 'Users' },
        { label: 'Skylight Infinite Balcony accommodations', icon: 'Sparkles' },
        { label: 'Magic Edge cantilevered dining pods', icon: 'UtensilsCrossed' },
        { label: 'Top-deck bar and grille', icon: 'GlassWater' },
        { label: 'King-size beds', icon: 'BedDouble' },
        { label: 'Hybrid propulsion systems', icon: 'Ship' }
    ]

    const rhrcSkylightFeatures = [
        { label: 'Ceiling window', icon: 'Sun' },
        { label: 'Changing sky views while sailing', icon: 'Waves' },
        { label: 'Additional natural light', icon: 'Sparkles' },
        { label: 'Available on Celebrity Compass', icon: 'Ship' }
    ]

    const rhrcAccommodationTypes = [
        { label: 'River View', icon: 'Waves' },
        { label: 'Infinite Balcony', icon: 'DoorOpen' },
        { label: 'Vista Balcony Suite', icon: 'Home' },
        { label: 'Skylight Infinite Balcony Suite', icon: 'Sparkles' }
    ]

    const rhrcBeforeAfterCities = ['Amsterdam', 'Budapest', 'Prague', 'Lausanne']

    const rhrcBeforeAfterIncludes = [
        { label: 'Premium or Ultra Premium hotel accommodations', icon: 'Home' },
        { label: 'Daily breakfast', icon: 'Coffee' },
        { label: 'Local-led experiences', icon: 'Users' },
        { label: 'Destination Insider experiences', icon: 'Compass' },
        { label: 'Transfers', icon: 'Plane' },
        { label: 'Curated tours', icon: 'MapPin' }
    ]

    const rhrcAmsterdamBefore = [
        { label: 'Canal exploration', icon: 'Waves' },
        { label: 'Museums', icon: 'Landmark' },
        { label: 'Art', icon: 'Star' },
        { label: 'Local dining', icon: 'Utensils' },
        { label: 'Historic neighborhoods', icon: 'Building2' },
        { label: 'Dutch culture', icon: 'Globe' }
    ]

    const rhrcBaselAfter = [
        { label: 'Switzerland', icon: 'MapPin' },
        { label: 'Swiss Alps', icon: 'Mountain' },
        { label: 'Lake regions', icon: 'Waves' },
        { label: 'French-speaking Switzerland', icon: 'Globe' },
        { label: 'Additional European cities', icon: 'Compass' }
    ]

    const rhrcBeforeAfterTable = [
        { feature: 'Hotel', detail: 'Premium or Ultra Premium options' },
        { feature: 'Breakfast', detail: 'Daily hotel breakfast' },
        { feature: 'Transportation', detail: 'Seamless transfers' },
        { feature: 'Tours', detail: 'Curated local experiences' },
        { feature: 'Local Expertise', detail: 'Destination Insider' },
        { feature: 'Guided Experiences', detail: 'Local Storytellers' },
        { feature: 'Customization', detail: 'Available options based on stay' }
    ]

    const rhrcRiverVsOcean = [
        { river: 'Smaller river ship', ocean: 'Larger ocean ship' },
        { river: 'European river destinations', ocean: 'Ocean destinations worldwide' },
        { river: 'City-center access', ocean: 'Traditional cruise ports' },
        { river: 'Destination-focused', ocean: 'Ship and destination focused' },
        { river: 'One excursion per day included', ocean: 'Excursion structure varies' },
        { river: 'River scenery', ocean: 'Ocean scenery' },
        { river: 'Intimate atmosphere', ocean: 'Resort-style atmosphere' },
        { river: 'Multiple European ports', ocean: 'Broader global itinerary choices' }
    ]

    const rhrcRiverPairs = [
        { rhine: 'Amsterdam', danube: 'Budapest' },
        { rhine: 'Cologne', danube: 'Vienna' },
        { rhine: 'Rüdesheim', danube: 'Wachau Valley' },
        { rhine: 'Strasbourg', danube: 'Bratislava' },
        { rhine: 'Basel', danube: 'Central Europe' },
        { rhine: 'Vineyards & castles', danube: 'Imperial cities & history' },
        { rhine: 'Netherlands, Germany, France & Switzerland', danube: 'Central European destinations' }
    ]

    const rhrcChooseRhine = ['Castles', 'Vineyards', 'Amsterdam', 'Cologne', 'Strasbourg', 'Rhine Valley scenery', 'Western European culture']
    const rhrcChooseDanube = ['Vienna', 'Budapest', 'Central European history', 'Imperial architecture', 'Wachau Valley', 'A different cultural landscape']

    const rhrcWorthValues = [
        { label: 'A new premium river cruise product', icon: 'Ship' },
        { label: 'Modern ship design', icon: 'Sparkles' },
        { label: 'Intimate cruising', icon: 'Users' },
        { label: 'European city access', icon: 'Landmark' },
        { label: 'Included daily excursions', icon: 'Compass' },
        { label: 'Included meals', icon: 'Utensils' },
        { label: 'Included Wi-Fi', icon: 'Wifi' },
        { label: 'Included beverage selections', icon: 'GlassWater' },
        { label: 'Seasonal experiences', icon: 'Calendar' },
        { label: 'Optional pre- and post-cruise extensions', icon: 'Plane' }
    ]

    const rhrcWhoShould = [
        { feature: 'First-Time River Cruisers', detail: 'The Rhine offers an easy introduction to European river cruising because it combines recognizable cities with scenic sailing.' },
        { feature: 'Celebrity Ocean Cruise Guests', detail: 'Travelers already familiar with Celebrity may enjoy experiencing the brand in a more intimate river environment.' },
        { feature: 'Couples', detail: 'The relaxed pace, European cities and scenic sailing make the Rhine particularly well suited to couples.' },
        { feature: 'Food & Wine Travelers', detail: 'The Rhine region offers vineyards, regional cuisine and food-focused experiences.' },
        { feature: 'History & Culture Travelers', detail: 'The itinerary connects major European cultural centers with historic riverside towns.' },
        { feature: 'Multi-Generational Travelers', detail: 'The variety of excursions and relatively relaxed travel format can work well for families traveling across generations.' }
    ]

    const rhrcMayPreferAnother = [
        'Want the largest possible river ship',
        'Prefer a highly traditional river cruise aesthetic',
        'Want the lowest available cruise fare',
        'Prefer extensive nightlife and large-scale entertainment',
        'Want a river itinerary outside Celebrity\u2019s current Rhine and Danube network'
    ]

    const rhrcPros = [
        'New premium river cruise program', 'Rhine itineraries for 2027 and 2028', 'Multiple European countries',
        'Amsterdam-to-Basel options', 'One shore excursion per day included', 'Meals included', 'Wi-Fi included',
        'Included beverage selections', 'Modern river ships', 'Innovative accommodations', 'Seasonal sailing choices',
        'Christmas market itineraries', 'Before and After Stay options'
    ]

    const rhrcCons = [
        'Newer river product with less operating history', 'Current program focuses on selected European rivers',
        'Individual itineraries vary considerably', 'Some premium experiences can cost extra',
        'Exact inclusions should always be confirmed for the selected sailing'
    ]

    const rhrcSteps = [
        { title: 'Choose Your Direction', desc: 'Decide whether you prefer an itinerary beginning in Amsterdam, ending in Basel, or another route offered for your travel dates.', tags: [] },
        { title: 'Choose Your Season', desc: 'Think about what matters most.', tags: ['Tulips', 'Summer weather', 'Autumn vineyards', 'Christmas markets'] },
        { title: 'Compare Ports', desc: 'Do not choose solely based on the number of nights. Look at the cities and experiences that matter most to you.', tags: [] },
        { title: 'Select Your Accommodation', desc: 'Compare the available stateroom and suite categories.', tags: ['River View', 'Infinite Balcony', 'Vista Balcony Suite', 'Skylight Infinite Balcony Suite'] },
        { title: 'Consider a Before or After Stay', desc: 'Adding extra nights in Amsterdam or another available city can turn a 7-night river cruise into a more complete European vacation. Celebrity\u2019s current Before and After Stay program includes hotel accommodations, breakfast, transfers and curated experiences.', tags: [] }
    ]

    const rhrcWhyPlan = [
        { title: 'Compare Celebrity Rhine Itineraries', icon: 'FileSearch' },
        { title: 'Choose the Best Sailing Season', icon: 'Calendar' },
        { title: 'Compare Amsterdam and Basel Options', icon: 'Compass' },
        { title: 'Select the Right Stateroom or Suite', icon: 'BedDouble' },
        { title: 'Evaluate Included Excursions', icon: 'ShieldCheck' },
        { title: 'Arrange Pre-Cruise Amsterdam Stays', icon: 'Home' },
        { title: 'Arrange Post-Cruise European Extensions', icon: 'Globe' },
        { title: 'Coordinate Flights', icon: 'Plane' },
        { title: 'Arrange Private Transfers', icon: 'MapPin' },
        { title: 'Compare Celebrity With Other Luxury River Cruise Lines', icon: 'BadgePercent' },
        { title: 'Build a Customized European Vacation', icon: 'Sliders' }
    ]

    const rhrcFaqs = [
        { question: '1. What is a Celebrity Rhine River Cruise?', answer: 'A Celebrity Rhine River Cruise is a premium European river cruise experience sailing the Rhine and connected waterways, with itineraries visiting destinations across countries including the Netherlands, Germany, France and Switzerland.' },
        { question: '2. When do Celebrity Rhine River Cruises begin?', answer: "Celebrity's inaugural river cruises begin in August 2027, with Rhine and Danube itineraries offered for 2027 and 2028." },
        { question: '3. How long are Celebrity Rhine River Cruises?', answer: "Celebrity's current 2027 Rhine itineraries are 7 nights. Individual 2028 itineraries may be presented with different day-count formats depending on the sailing and any included overnight stays." },
        { question: '4. Which cities does Celebrity visit on the Rhine?', answer: 'Celebrity Rhine itineraries can include Amsterdam, Rotterdam, Cologne, Rüdesheim, Speyer, Strasbourg, Breisach and Basel, although the exact ports depend on the itinerary.' },
        { question: '5. Does Celebrity Rhine River Cruises sail from Amsterdam?', answer: 'Yes. Celebrity offers Rhine itineraries beginning in Amsterdam, including an Amsterdam-to-Basel itinerary in its 2028 program.' },
        { question: '6. Does Celebrity Rhine River Cruises sail to Basel?', answer: 'Yes. Basel is one of the featured Rhine destinations, and Celebrity offers itineraries between Amsterdam and Basel.' },
        { question: '7. What is included on Celebrity Rhine River Cruises?', answer: 'Celebrity includes one shore excursion per day, meals, Wi-Fi and selected beverages, including wine, beer, cocktails, coffee and soft drinks, with upgrade opportunities available.' },
        { question: '8. Are shore excursions included on Celebrity Rhine cruises?', answer: 'Yes. Celebrity includes one shore excursion every day on its river cruises.' },
        { question: '9. Is Wi-Fi included on Celebrity Rhine River Cruises?', answer: 'Yes. Complimentary Wi-Fi is included throughout the journey.' },
        { question: '10. Are drinks included on Celebrity Rhine River Cruises?', answer: 'Yes. Celebrity includes selected wine, beer, cocktails, coffee and soft drinks throughout the day, with opportunities to upgrade.' },
        { question: '11. What is the best time for a Celebrity Rhine River Cruise?', answer: 'The best time depends on your interests. Spring is attractive for tulips, summer for longer days, fall for vineyard scenery and late November through December for Christmas markets.' },
        { question: '12. Are Celebrity Rhine River Cruises good for Christmas markets?', answer: 'Yes. Celebrity specifically highlights late November through December as a prime season for Rhine Christmas market experiences.' },
        { question: '13. Are Celebrity Rhine River Cruises good in the fall?', answer: "Yes. Fall can be especially appealing for travelers interested in vineyards and autumn scenery, as Celebrity highlights the Rhine Valley's vineyards turning golden during the season." },
        { question: '14. What ships sail Celebrity Rhine River Cruises?', answer: "Celebrity's river fleet includes ships such as Celebrity Compass and Celebrity Seeker, with additional ships planned as the river program expands." },
        { question: '15. Does Celebrity Compass sail the Rhine?', answer: 'Celebrity Compass is part of the new Celebrity River Cruises fleet and is designed for European river itineraries, including the Rhine program. Its features include open-air spaces and Skylight Infinite Balcony Suites.' },
        { question: '16. Does Celebrity River Cruises offer Before and After Stays?', answer: 'Yes. Celebrity offers pre- and post-cruise experiences in cities including Amsterdam, Budapest, Prague and Lausanne, with hotel accommodations, breakfast, transfers and curated local experiences.' },
        { question: '17. Can I add an Amsterdam hotel stay before my Rhine cruise?', answer: "Yes. Amsterdam is one of Celebrity's featured Before and After Stay destinations, allowing travelers to extend their European vacation before sailing." },
        { question: '18. What is included in Celebrity Before and After Stays?', answer: 'Packages can include Premium or Ultra Premium hotel accommodations, daily breakfast, transportation, guided experiences and local destination support.' },
        { question: '19. Is a Celebrity Rhine River Cruise better than a Danube cruise?', answer: 'It depends on the destinations you prefer. The Rhine is especially strong for castles, vineyards, Amsterdam, Cologne and Strasbourg, while the Danube offers destinations such as Vienna and Budapest.' },
        { question: '20. Are Celebrity Rhine River Cruises worth it?', answer: 'They can be an excellent choice for travelers seeking a new premium river cruise experience with modern ships, included daily excursions, European city access and optional pre- and post-cruise extensions.' },
        { question: '21. What is the best Celebrity Rhine River Cruise itinerary?', answer: 'There is no single best itinerary. An Amsterdam-to-Basel sailing can be particularly attractive for first-time travelers because it combines the Netherlands, Germany, France and Switzerland in one journey.' },
        { question: '22. Who should take a Celebrity Rhine River Cruise?', answer: 'Celebrity Rhine River Cruises are particularly well suited to couples, first-time river cruisers, Celebrity ocean cruise guests, food and wine travelers, and travelers interested in European history and culture.' }
    ]

    const rhrcRelated = [
        { title: 'Celebrity River Cruises Overview', desc: 'Compare the full Celebrity River Cruises program, including new ships, itineraries and inclusions across the Rhine and Danube.', icon: 'Ship', link: '/celebrity-cruises/river-cruises/' },
        { title: 'Celebrity Danube River Cruises', desc: 'Vienna, Budapest, the Wachau Valley and Central European history along the Danube with Celebrity.', icon: 'Landmark', link: '/celebrity-cruises/river-cruises/danube' },
        { title: 'Celebrity Compass Ship Guide', desc: "Explore Celebrity Compass, its Skylight Infinite Balcony Suites, and its intimate river cruise design.", icon: 'Anchor', link: '/celebrity-cruises/ships/celebrity-compass' },
        { title: 'Celebrity Beyond Cruise Ship Guide', desc: "Explore Celebrity's award-winning Edge Series ocean ship, deck plans, The Retreat and dining.", icon: 'Globe', link: '/celebrity-cruises/ships/celebrity-beyond' },
        { title: 'European River Cruise Packing Guide', desc: 'What to pack for a European river cruise, from shore excursions to onboard dining.', icon: 'FileSearch', link: '/guides/european-river-cruise-packing' }
    ]

    /* ---------------- SCHEMA ---------------- */

    const rhrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#webpage",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/",
                "name": "Celebrity Rhine River Cruises: Itineraries, Ports & Guide",
                "description": "Explore Celebrity Rhine River Cruises for 2027 and 2028, including itineraries, Amsterdam, Cologne, Strasbourg, Basel, sailing seasons, inclusions and pre- and post-cruise stays.",
                "isPartOf": { "@id": "https://tripsships.com/#website" },
                "about": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#service" },
                "breadcrumb": { "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "Service",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#service",
                "name": "Celebrity Rhine River Cruises",
                "serviceType": "Rhine River Cruises",
                "description": "Celebrity Rhine River Cruises offer premium European river cruise experiences for 2027 and 2028, with itineraries visiting destinations across the Netherlands, Germany, France and Switzerland, including Amsterdam, Cologne, Rüdesheim, Strasbourg and Basel.",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/",
                "provider": { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://tripsships.com/" },
                "areaServed": [
                    { "@type": "Place", "name": "Netherlands" },
                    { "@type": "Place", "name": "Germany" },
                    { "@type": "Place", "name": "France" },
                    { "@type": "Place", "name": "Switzerland" }
                ],
                "brand": { "@type": "Brand", "name": "Celebrity River Cruises" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tripsships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://tripsships.com/celebrity-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity River Cruises", "item": "https://tripsships.com/celebrity-cruises/river-cruises/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Rhine River Cruises", "item": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/#faq",
                "url": "https://tripsships.com/celebrity-cruises/river-cruises/rhine/",
                "mainEntity": rhrcFaqs.map(f => ({
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
                <title>Celebrity Rhine River Cruises: Routes, Ports & More</title>
                <meta name="title" content="Celebrity Rhine River Cruises: Itineraries, Ports & Guide" />
                <meta
                    name="description"
                    content="Explore Celebrity Rhine River Cruises for 2027 and 2028, including itineraries, Amsterdam, Cologne, Strasbourg, Basel, sailing seasons, inclusions and pre- and post-cruise stays."
                />
                <script type="application/ld+json">
                    {JSON.stringify(rhrcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (REUSED — fcel-) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <RhrcIconSparkle size={16} />
                            <span>Celebrity Rhine River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Celebrity Rhine River Cruises <br /> Experience the Rhine With Celebrity</h1>
                        <p className="fcel-hero-subtitle">
                            Itineraries, Ports & Everything Included for 2027 & 2028
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <RhrcIconPhone size={18} />
                                Plan My Celebrity Rhine River Cruise
                            </Link>
                            <button className="fcel-btn-outline">
                                <RhrcIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (REUSED — fcel-) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">EXPERIENCE THE RHINE WITH CELEBRITY</span>
                                <h2 className="fcel-section-heading">Celebrity Rhine River Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    The Rhine River is one of Europe's most recognizable waterways, connecting historic cities, vineyard-covered hills, medieval towns, castles and major cultural destinations.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Celebrity River Cruises brings its new premium river cruise experience to the Rhine for 2027 and 2028, with itineraries connecting destinations such as Amsterdam, Cologne, Rüdesheim, Strasbourg, Basel and other Rhine-region ports. Celebrity's current Rhine program includes 7-night itineraries, while selected sailings can be combined with Before and After Stays to create a longer European vacation.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    For travelers considering their first European river cruise—or comparing Celebrity with other premium river cruise lines—the Rhine offers a particularly strong combination of scenery, history, food, wine and accessible European cities.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <RhrcPlaceholder label="Celebrity Rhine River Cruises" />
                                <div className="fcel-intro-badge-float">
                                    <RhrcIconAward size={15} style={{ marginRight: '6px' }} />
                                    <span>Rhine River 2027–2028</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (REUSED — cbcs-) */}
                <section className="cbcs-quick-answer-section">
                    <div className="cbcs-quick-answer-container">
                        <div className="cbcs-quick-answer-card">
                            <h3 className="cbcs-quick-answer-title">What Are Celebrity Rhine River Cruises?</h3>
                            <p className="cbcs-quick-answer-text">
                                Celebrity Rhine River Cruises are premium European river cruises sailing the Rhine and connected waterways, with 2027 and 2028 itineraries visiting destinations across the Netherlands, Germany, France and Switzerland. Celebrity's current Rhine program includes 7-night sailings, one shore excursion per day, meals, Wi-Fi and included beverages, with Before and After Stay options available on selected journeys.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA (REUSED — cbcs-) */}
                <section className="cbcs-inline-cta-section">
                    <div className="cbcs-inline-cta-container">
                        <span className="cbcs-inline-cta-tag">Expert Planning</span>
                        <p className="cbcs-inline-cta-text">Ready to explore the Rhine with Celebrity?</p>
                        <div className="cbcs-inline-cta-btn-row">
                            <Link to="/contact" className="cbcs-btn-primary">
                                <RhrcIconPhone size={18} />
                                Plan My Celebrity Rhine River Cruise
                            </Link>
                            <Link to="/contact" className="cbcs-btn-outline">
                                <RhrcIconList size={18} />
                                Speak With a Luxury Cruise Expert
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE (REUSED — cbcs-) */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PROGRAM OVERVIEW</span>
                            <h2 className="fcel-section-heading">Celebrity Rhine River Cruises at a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {rhrcGlance.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity states that its 2027 Rhine itineraries are 7 nights and can visit multiple countries, while its Rhine program highlights Amsterdam, Cologne, Strasbourg and Basel among its featured destinations.
                        </p>
                    </div>
                </section>

                {/* WHERE DOES IT SAIL (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconDot size={14} />
                                    <span>Rhine Ports</span>
                                </div>
                                <RhrcPlaceholder label="Where Celebrity Rhine River Cruises Sail" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">WHERE TO SAIL</span>
                                <h2 className="cbcs-feature-title">Where Does Celebrity Rhine River Cruises Sail?</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity's Rhine itineraries are designed around the river's changing landscapes and the cities and towns along its route. Depending on the itinerary, travelers can experience:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcWhereToSail.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    The exact ports depend on the sailing and itinerary direction. For example, Celebrity's 2028 Amsterdam to Basel itinerary includes Amsterdam, Rotterdam, Cologne, Rüdesheim, Speyer, Strasbourg, Breisach and Basel.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAP & ROUTE (NEW — rhrc-route-) */}
                <section className="rhrc-route-section cbcs-bg-soft">
                    <div className="rhrc-route-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ROUTE</span>
                            <h2 className="fcel-section-heading">Celebrity Rhine River Cruise Map & Route</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A typical Rhine itinerary can move from the Netherlands toward Switzerland, passing through some of the most recognizable landscapes of western Europe.
                            </p>
                        </div>
                        <div className="rhrc-route-path">
                            {rhrcRouteCities.flatMap((city, idx) => {
                                const parts = [
                                    <span key={`city-${idx}`} className="rhrc-route-chip">{city}</span>
                                ];
                                if (idx < rhrcRouteCities.length - 1) {
                                    parts.push(
                                        <span key={`arrow-${idx}`} className="rhrc-route-arrow">
                                            <RhrcIconArrow size={18} />
                                        </span>
                                    );
                                }
                                return parts;
                            })}
                        </div>
                        <p className="rhrc-route-combines-title">This route combines:</p>
                        <div className="cbcs-feature-list rhrc-combines-list">
                            {rhrcRouteCombines.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-feature-item-card">
                                        <div className="cbcs-feature-item-icon">
                                            {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                        </div>
                                        <span className="cbcs-feature-item-text">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity's 2028 itinerary documents this Amsterdam-to-Basel route as an 8-day journey, with the sailing moving through the Scenic Rhine and destinations including Cologne, Rüdesheim and Strasbourg.
                        </p>
                    </div>
                </section>

                {/* AMSTERDAM (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Amsterdam</span>
                                </div>
                                <RhrcPlaceholder label="Amsterdam Canals & Architecture" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE CITIES</span>
                                <h2 className="cbcs-feature-title">Amsterdam</h2>
                                <p className="fcel-lead-paragraph">
                                    Amsterdam is one of the most popular gateway cities for Rhine River cruises. Before boarding, travelers can explore:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcAmsterdamHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    It is also an excellent city for extending a Rhine vacation with a pre-cruise stay.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROTTERDAM (REUSED — single-statement cbcs-worth-section) */}
                <section className="cbcs-worth-section cbcs-bg-soft">
                    <div className="cbcs-worth-container">
                        <span className="fcel-eyebrow-label">RHINE CITIES</span>
                        <h2 className="fcel-section-heading">Rotterdam</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Rotterdam provides a sharp contrast to Amsterdam. Known for its modern architecture and major port, Rotterdam adds a contemporary European perspective to the Rhine journey. Celebrity's 2028 Amsterdam-to-Basel itinerary includes Rotterdam on Day 2.
                        </p>
                    </div>
                </section>

                {/* COLOGNE (DARK, ALTERNATING — REUSED cbcs-dark-section pattern) */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE CITIES</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Cologne</h2>
                                <p className="fcel-lead-paragraph">
                                    Cologne is one of Germany's most recognizable Rhine cities. Highlights include:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcCologneHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    The city is included on selected Celebrity Rhine itineraries.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Cologne</span>
                                </div>
                                <RhrcPlaceholder label="Cologne Cathedral & Rhine Waterfront" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* RÜDESHEIM (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Rüdesheim</span>
                                </div>
                                <RhrcPlaceholder label="Rüdesheim Vineyards & Rhine Valley" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE CITIES</span>
                                <h2 className="cbcs-feature-title">Rüdesheim</h2>
                                <p className="fcel-lead-paragraph">
                                    Rüdesheim is particularly appealing to travelers interested in wine and traditional Rhine scenery. The town sits within:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcRudesheimHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Rhine itineraries feature Rüdesheim as an important destination, including its Amsterdam-to-Basel 2028 itinerary.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRASBOURG (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE CITIES</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Strasbourg</h2>
                                <p className="fcel-lead-paragraph">
                                    Strasbourg sits near the French-German cultural border and offers a distinctive combination of:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcStrasbourgHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity describes Strasbourg as a destination where French and German influences come together.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Strasbourg</span>
                                </div>
                                <RhrcPlaceholder label="Strasbourg Canals & Half-Timbered Buildings" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BASEL (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Basel</span>
                                </div>
                                <RhrcPlaceholder label="Basel Switzerland Gateway" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE CITIES</span>
                                <h2 className="cbcs-feature-title">Basel</h2>
                                <p className="fcel-lead-paragraph">
                                    Basel is an important gateway between the Rhine region and Switzerland. Travelers can use Basel as:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcBaselHighlights.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's current Rhine program highlights Basel as one of its principal Rhine cities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RHINE CITIES AT A GLANCE (rhrc- 3-col compare table, reused pattern) */}
                <section className="rhrc-compare-section cbcs-dark-section">
                    <div className="rhrc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CITIES OVERVIEW</span>
                            <h2 className="fcel-section-heading">Rhine River Cruise Cities at a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rhrc-compare-table-3col">
                            <div className="rhrc-compare-row-3col rhrc-compare-header">
                                <div className="rhrc-compare-cell rhrc-compare-label">City</div>
                                <div className="rhrc-compare-cell">Country</div>
                                <div className="rhrc-compare-cell">Best Known For</div>
                            </div>
                            {rhrcCitiesGlance.map((row, idx) => (
                                <div key={idx} className="rhrc-compare-row-3col">
                                    <div className="rhrc-compare-cell rhrc-compare-label">{row.city}</div>
                                    <div className="rhrc-compare-cell">{row.country}</div>
                                    <div className="rhrc-compare-cell">{row.known}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Not every Celebrity Rhine sailing visits every city, so travelers should compare the individual itinerary before booking.
                        </p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED (REUSED — cbcs-included-section) */}
                <section className="cbcs-included-section">
                    <div className="cbcs-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">VOYAGE FARE</span>
                            <h2 className="fcel-section-heading">What Is Included on Celebrity Rhine River Cruises?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity's Rhine River Cruises include several core elements in the cruise fare:
                            </p>
                        </div>
                        <div className="cbcs-included-grid">
                            {rhrcIncluded.map((item, idx) => (
                                <div key={idx} className="cbcs-included-item">
                                    <RhrcIconCheck size={18} className="cbcs-included-icon" />
                                    <span><strong>{item.label}</strong> — {item.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity's river ships provide multiple spaces for relaxation, dining and entertainment as part of the onboard experience.
                        </p>
                    </div>
                </section>

                {/* EXCURSIONS (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">SHORE EXCURSIONS</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Celebrity Rhine River Cruise Excursions</h2>
                                <p className="fcel-lead-paragraph">
                                    One of the major advantages of river cruising is the ability to reach city centers and cultural destinations without repeatedly packing and unpacking. Celebrity includes one shore excursion per day. Depending on the itinerary, excursions can focus on:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcExcursionFocus.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Travelers can also choose additional experiences where available. Celebrity's Rhine program emphasizes locally connected experiences designed to bring travelers closer to the destinations.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconDot size={14} />
                                    <span>Excursions</span>
                                </div>
                                <RhrcPlaceholder label="Celebrity Rhine River Cruise Excursions" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME — SEASON CARDS (REUSED cbcs-itinerary-* pattern, 2x2 grid) */}
                <section className="cbcs-itinerary-section">
                    <div className="cbcs-itinerary-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time for a Celebrity Rhine River Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                There is no single best month for everyone. The ideal season depends on what you want to experience.
                            </p>
                        </div>
                        <div className="cbcs-itinerary-grid">
                            {rhrcSeasons.map((season, idx) => {
                                const IconComponent = iconMap[season.icon];
                                return (
                                    <div key={idx} className="cbcs-itinerary-card">
                                        <h3 className="cbcs-itinerary-region">
                                            {IconComponent && <IconComponent size={20} />}
                                            {season.title} Rhine River Cruises
                                        </h3>
                                        <p className="fcel-lead-paragraph" style={{ marginBottom: '18px' }}>
                                            {season.desc}
                                        </p>
                                        <div className="rhrc-step-tags">
                                            {season.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="rhrc-step-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* BEST TIME TABLE (REUSED — cbcs-glance-section) */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">AT A GLANCE</span>
                            <h2 className="fcel-section-heading">Best Time to Take a Celebrity Rhine River Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {rhrcSeasonTable.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            The right season depends more on the experience you want than on a universally "best" month.
                        </p>
                    </div>
                </section>

                {/* CELEBRITY COMPASS (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Celebrity Compass</span>
                                </div>
                                <RhrcPlaceholder label="Celebrity Compass River Ship" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE SHIPS</span>
                                <h2 className="cbcs-feature-title">Celebrity Compass</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Compass is designed specifically around the river experience, with open-air lounges, spacious interiors and the Skylight Infinite Balcony Suite concept. Key features include:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcCompassFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity Compass is designed around a more intimate European river experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY SEEKER (DARK, ALTERNATING — REUSED cbcs-dark-section pattern) */}
                <section className="cbcs-feature-section cbcs-dark-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">RHINE SHIPS</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Celebrity Seeker</h2>
                                <p className="fcel-lead-paragraph">
                                    Celebrity Seeker introduces another contemporary approach to river cruising. Highlights include:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcSeekerFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity Seeker's deck-plan information lists a maximum guest capacity of 172 and a 2027 maiden voyage.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Celebrity Seeker</span>
                                </div>
                                <RhrcPlaceholder label="Celebrity Seeker River Ship" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATIONS INTRO + TYPES (REUSED — cbcs-worth-section + cbcs-tag-section) */}
                <section className="cbcs-worth-section cbcs-bg-white" style={{ paddingBottom: '100px' }}>
                    <div className="cbcs-worth-container">
                        <span className="fcel-eyebrow-label">STATEROOMS & SUITES</span>
                        <h2 className="fcel-section-heading">Celebrity Rhine River Cruise Accommodations</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Celebrity's river accommodations are designed around river views and natural light. Options include River View, Infinite Balcony, Vista Balcony Suite and Skylight Infinite Balcony Suite.
                        </p>
                    </div>
                    <div className="cbcs-tag-container" style={{ marginTop: '40px' }}>
                        <div className="cbcs-tag-grid">
                            {rhrcAccommodationTypes.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RhrcIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* SKYLIGHT INFINITE BALCONY SUITE (DARK — REUSED cbcs-skylight-section) */}
                <section className="cbcs-feature-section cbcs-skylight-section">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconSparkle size={14} />
                                    <span>Skylight Suite</span>
                                </div>
                                <RhrcPlaceholder label="Skylight Infinite Balcony Suite" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="cbcs-skylight-eyebrow">MOST DISTINCTIVE ACCOMMODATION</span>
                                <h2 className="cbcs-skylight-title">Skylight Infinite Balcony Suite</h2>
                                <p className="cbcs-skylight-lead">
                                    The Skylight Infinite Balcony Suite is particularly distinctive because it adds a ceiling window to the room, creating another way to experience natural light and the changing sky while sailing. The suite features:
                                </p>
                                <div className="cbcs-skylight-grid">
                                    {rhrcSkylightFeatures.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-skylight-card">
                                                <div className="cbcs-skylight-card-icon">
                                                    {IconComponent ? <IconComponent size={20} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-skylight-card-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="cbcs-skylight-footer-text">
                                    Celebrity Compass includes the first-ever Skylight Infinite Balcony Suites within the brand's river cruise concept.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEFORE & AFTER STAYS INTRO (REUSED — cbcs-worth-section) */}
                <section className="cbcs-worth-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="rhrc-before-after-split">
                            <div className="rhrc-before-after-content">
                                <span className="fcel-eyebrow-label">EXTEND YOUR TRIP</span>
                                <h2 className="fcel-section-heading" style={{ textAlign: 'left' }}>Rhine River Cruise Before & After Stays</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    A Celebrity Rhine River Cruise does not have to begin or end when the ship does. Celebrity offers Before and After Stays that allow travelers to add time in European cities before or after their river sailing. Current options include cities such as {rhrcBeforeAfterCities.join(', ')}.
                                </p>
                            </div>

                            <div className="rhrc-before-after-keypoints">
                                <p className="fcel-lead-paragraph" style={{ fontWeight: 600, marginBottom: '20px' }}>
                                    Celebrity's Before and After packages can include:
                                </p>
                                <div className="rhrc-before-after-tags-list">
                                    {rhrcBeforeAfterIncludes.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="rhrc-tag-row-card">
                                                <div className="rhrc-tag-row-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconDot size={18} />}
                                                </div>
                                                <span className="rhrc-tag-row-label">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AMSTERDAM BEFORE YOUR RHINE CRUISE (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-soft">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid">
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconDot size={14} />
                                    <span>Before Your Cruise</span>
                                </div>
                                <RhrcPlaceholder label="Amsterdam Before Your Rhine Cruise" />
                            </div>
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">PRE-CRUISE STAY</span>
                                <h2 className="cbcs-feature-title">Amsterdam Before Your Rhine Cruise</h2>
                                <p className="fcel-lead-paragraph">
                                    Amsterdam is one of the most natural places to extend a Rhine River cruise. A pre-cruise stay can give you additional time for:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcAmsterdamBefore.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Rather than arriving the day the ship departs, adding extra nights can make the European vacation feel more relaxed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BASEL AFTER YOUR RHINE CRUISE (REUSED — cbcs-feature-section pattern) */}
                <section className="cbcs-feature-section cbcs-bg-white">
                    <div className="cbcs-feature-container">
                        <div className="cbcs-feature-grid cbcs-reverse">
                            <div className="cbcs-feature-copy-col">
                                <span className="fcel-eyebrow-label">POST-CRUISE STAY</span>
                                <h2 className="cbcs-feature-title" style={{ textAlign: 'left' }}>Basel After Your Rhine Cruise</h2>
                                <p className="fcel-lead-paragraph">
                                    Basel can also serve as the starting point for additional Switzerland travel. Depending on your broader vacation plans, a post-cruise extension can connect the Rhine experience with:
                                </p>
                                <div className="cbcs-feature-list">
                                    {rhrcBaselAfter.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon];
                                        return (
                                            <div key={idx} className="cbcs-feature-item-card">
                                                <div className="cbcs-feature-item-icon">
                                                    {IconComponent ? <IconComponent size={18} /> : <RhrcIconCheck size={18} />}
                                                </div>
                                                <span className="cbcs-feature-item-text">{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '20px' }}>
                                    Celebrity's Before and After Stay program includes Lausanne among its available city experiences.
                                </p>
                            </div>
                            <div className="cbcs-feature-image-col">
                                <div className="cbcs-badge-overlay">
                                    <RhrcIconDot size={14} />
                                    <span>After Your Cruise</span>
                                </div>
                                <RhrcPlaceholder label="Basel After Your Rhine Cruise" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED IN BEFORE & AFTER STAYS (REUSED — cbcs-glance-section) */}
                <section className="cbcs-glance-section cbcs-dark-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">STAY INCLUSIONS</span>
                            <h2 className="fcel-section-heading">What's Included in Celebrity Before & After Stays?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {rhrcBeforeAfterTable.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity says these experiences are designed to handle the key logistics between hotel and ship while providing locally focused experiences.
                        </p>
                    </div>
                </section>

                {/* RHINE CRUISES VS. OCEAN CRUISES (rhrc- 2-col pair table, reused pattern) */}
                <section className="rhrc-compare-section cbcs-bg-soft">
                    <div className="rhrc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER VS. OCEAN</span>
                            <h2 className="fcel-section-heading">Celebrity Rhine River Cruises vs. Ocean Cruises</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A Rhine River cruise is fundamentally different from Celebrity's ocean cruise experience.
                            </p>
                        </div>
                        <div className="rhrc-pair-table">
                            <div className="rhrc-pair-row rhrc-pair-header">
                                <div className="rhrc-pair-cell">Rhine River Cruise</div>
                                <div className="rhrc-pair-cell">Celebrity Ocean Cruise</div>
                            </div>
                            {rhrcRiverVsOcean.map((row, idx) => (
                                <div key={idx} className="rhrc-pair-row">
                                    <div className="rhrc-pair-cell">{row.river}</div>
                                    <div className="rhrc-pair-cell">{row.ocean}</div>
                                </div>
                            ))}
                        </div>
                        <p className="cbcs-included-note">
                            Celebrity describes its river program as more intimate, with experiences both onboard and onshore designed around Europe's cultural and historic cities.
                        </p>
                    </div>
                </section>

                {/* RHINE VS. DANUBE (rhrc- 2-col pair table) */}
                <section className="rhrc-compare-section">
                    <div className="rhrc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">RIVER COMPARISON</span>
                            <h2 className="fcel-section-heading">Rhine vs. Danube: Which Celebrity River Cruise Is Better?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rhrc-pair-table">
                            <div className="rhrc-pair-row rhrc-pair-header">
                                <div className="rhrc-pair-cell">Rhine</div>
                                <div className="rhrc-pair-cell">Danube</div>
                            </div>
                            {rhrcRiverPairs.map((row, idx) => (
                                <div key={idx} className="rhrc-pair-row">
                                    <div className="rhrc-pair-cell">{row.rhine}</div>
                                    <div className="rhrc-pair-cell">{row.danube}</div>
                                </div>
                            ))}
                        </div>

                        {/* Choice board inside same section */}
                        <div className="rhrc-choice-board rhrc-choice-board-inline">
                            <div className="rhrc-choice-panel">
                                <h3 className="rhrc-choice-title">
                                    <RhrcIconCheck size={22} />
                                    Choose the Rhine if you want:
                                </h3>
                                <div className="rhrc-choice-list">
                                    {rhrcChooseRhine.map((item, idx) => (
                                        <div key={idx} className="rhrc-choice-item">
                                            <div className="rhrc-choice-icon-wrap">
                                                <RhrcIconCheck size={16} />
                                            </div>
                                            <div className="rhrc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rhrc-choice-panel">
                                <h3 className="rhrc-choice-title">
                                    <RhrcIconCheck size={22} />
                                    Choose the Danube if you want:
                                </h3>
                                <div className="rhrc-choice-list">
                                    {rhrcChooseDanube.map((item, idx) => (
                                        <div key={idx} className="rhrc-choice-item">
                                            <div className="rhrc-choice-icon-wrap">
                                                <RhrcIconCheck size={16} />
                                            </div>
                                            <div className="rhrc-choice-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARE THEY WORTH IT (REUSED — cbcs-tag-section) */}
                <section className="cbcs-tag-section cbcs-dark-section">
                    <div className="cbcs-tag-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="fcel-section-heading">Are Celebrity Rhine River Cruises Worth It?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Celebrity Rhine River Cruises can be particularly attractive to travelers who want:
                            </p>
                        </div>
                        <div className="cbcs-tag-grid">
                            {rhrcWorthValues.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-tag-card">
                                        <div className="cbcs-tag-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RhrcIconDot size={20} />}
                                        </div>
                                        <span className="cbcs-tag-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '30px' }}>
                            The strongest reason to choose the Rhine is the combination of scenery and cultural variety. In a single journey, travelers can move between Dutch canals, German historic cities, Rhine Valley vineyards, French culture and Swiss gateways.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE (REUSED — cbcs-glance-section) */}
                <section className="cbcs-glance-section">
                    <div className="cbcs-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Choose a Celebrity Rhine River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="cbcs-glance-table">
                            {rhrcWhoShould.map((row, idx) => (
                                <div key={idx} className="cbcs-glance-row">
                                    <div className="cbcs-glance-feature">{row.feature}</div>
                                    <div className="cbcs-glance-detail">{row.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO MAY PREFER ANOTHER RHINE RIVER CRUISE (REUSED — cbcs-audience negative pattern) */}
                <section className="cbcs-audience-section cbcs-bg-white">
                    <div className="cbcs-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORTH CONSIDERING</span>
                            <h2 className="fcel-section-heading">Who May Prefer Another Rhine River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Celebrity may not be the ideal match for travelers who:
                            </p>
                        </div>
                        <div className="cbcs-audience-column cbcs-audience-negative">
                            <ul className="cbcs-audience-list">
                                {rhrcMayPreferAnother.map((item, idx) => (
                                    <li key={idx} className="cbcs-audience-item">
                                        <RhrcIconX size={18} className="cbcs-audience-check cbcs-audience-x" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROS & CONS (REUSED) */}
                <section className="cbcs-pros-section cbcs-dark-section">
                    <div className="cbcs-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label cbcs-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Celebrity Rhine River Cruises Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="cbcs-comparison-board">
                            <div className="cbcs-pros-panel">
                                <h3 className="cbcs-panel-title cbcs-pros-title">
                                    <RhrcIconCheck size={22} />
                                    Pros
                                </h3>
                                <div className="cbcs-panel-list">
                                    {rhrcPros.map((pro, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-pro-icon">
                                                <RhrcIconCheck size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{pro}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cbcs-cons-panel">
                                <h3 className="cbcs-panel-title cbcs-cons-title">
                                    <RhrcIconAlert size={22} />
                                    Cons
                                </h3>
                                <div className="cbcs-panel-list">
                                    {rhrcCons.map((con, idx) => (
                                        <div key={idx} className="cbcs-list-item">
                                            <div className="cbcs-item-icon-wrap cbcs-con-icon">
                                                <RhrcIconX size={16} />
                                            </div>
                                            <div className="cbcs-item-title">{con}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW TO CHOOSE (rhrc- numbered step guide) */}
                <section className="rhrc-steps-section">
                    <div className="rhrc-steps-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING WALKTHROUGH</span>
                            <h2 className="fcel-section-heading">How to Choose the Best Celebrity Rhine River Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rhrc-steps-list">
                            {rhrcSteps.map((step, idx) => (
                                <div key={idx} className="rhrc-step-item">
                                    <div className="rhrc-step-number">{idx + 1}</div>
                                    <div className="rhrc-step-body">
                                        <h4 className="rhrc-step-title">Step {idx + 1}: {step.title}</h4>
                                        <p className="rhrc-step-desc">{step.desc}</p>
                                        {step.tags.length > 0 && (
                                            <div className="rhrc-step-tags">
                                                {step.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="rhrc-step-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERT INSIGHT (REUSED — medi- classes) */}
                <section id="celebrity-rhine-river-cruises-insight" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                            'European river cruise planning',
                                            'Rhine River itineraries',
                                            'Suite & stateroom selection',
                                            'Concierge-level cruise planning'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <RhrcIconDot size={14} />
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
                                        <RhrcIconAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Choose the Rhine for <br className="medi-growth-title-break" />a First Celebrity River Cruise?
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    The Rhine is one of the strongest choices for travelers who want variety without sacrificing a relaxed pace.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        You can combine major European cities with vineyard-covered valleys, medieval towns and scenic river sailing, while the ship moves with you between destinations. For Celebrity guests, the Rhine also offers an opportunity to experience the brand in a smaller, more intimate setting than its ocean ships.
                                    </p>
                                </div>
                            </div>

                            <div className="medi-editorial-full-width-footer">
                                <p className="medi-editorial-signature">
                                    — Angela Hughes<br />
                                    Founder &amp; CEO, Trips &amp; Ships Luxury Travel
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHY PLAN WITH TRIPS & SHIPS (REUSED — cbcs-why-book dark pattern) */}
                <section className="cbcs-why-book-section cbcs-why-book-dark">
                    <div className="cbcs-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Plan Your Celebrity Rhine River Cruise With Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
                                Choosing the right Rhine itinerary involves more than selecting a departure date. Trips & Ships Luxury Travel can help you:
                            </p>
                        </div>
                        <div className="cbcs-why-book-grid">
                            {rhrcWhyPlan.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <div key={idx} className="cbcs-why-book-card">
                                        <div className="cbcs-why-book-icon">
                                            {IconComponent ? <IconComponent size={20} /> : <RhrcIconDot size={20} />}
                                        </div>
                                        <h4 className="cbcs-why-book-title">{item.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '30px auto 0', color: '#cbd5e1', textAlign: 'center' }}>
                            A well-planned Rhine River cruise can become much more than a week on the river—it can be the centerpiece of a larger European journey.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION (REUSED) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {rhrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => rhrcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {rhrcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {rhrcActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            

                {/* CTA SECTION (REUSED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Plan Your Celebrity Rhine River Cruise</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Ready to explore the Rhine with Celebrity? Trips & Ships Luxury Travel can help you compare Celebrity Rhine itineraries, select the right ship and accommodation, choose the best season, and build a seamless European vacation around your river cruise.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <RhrcIconPhone size={18} />
                                Plan My Celebrity Rhine River Cruise
                            </Link>
                            <button className="fcel-btn-outline">
                                <RhrcIconList size={18} />
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

export default CelebrityRhineRiverCruises